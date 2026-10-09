/** @jsxImportSource preact */
import { createContext, Fragment, render } from 'preact';
import { useCallback, useContext, useEffect, useLayoutEffect, useRef, useState } from 'preact/hooks';
import { Cursor, DragDropManager, Draggable, Droppable, PointerActivationConstraints, PointerSensor, PreventSelection } from '@dnd-kit/dom';
import type { DragMoveEvent, DragOverEvent } from '@dnd-kit/dom';
import { DOMRectangle } from '@dnd-kit/dom/utilities';
import { effect } from '@dnd-kit/state';
import { pointerIntersection } from '@dnd-kit/collision';
import { COMMANDERS, TIERS, brutalLevel, commanderName, emptyRanking, isCommander, moveCommander, placedCommanders } from './tiermaker-state';
import type { Commander, Ranking, Tier } from './tiermaker-state';

interface Mutation {
    mutationid: number;
    mutation: string;
    map: string;
    mut01: string | null;
    mut02: string | null;
    mut03: string | null;
}
interface Mutator { mutatorid: string; mutatorname: string; mutatordescription: string; abomination: number }
interface PageData {
    mutations: Mutation[];
    mutators: Record<string, Mutator>;
    prestigeNames: Record<Commander, [string, string, string, string]>;
}
declare global { interface Window { tiermakerData: PageData } }
type Prestige = 0 | 1 | 2 | 3;
type Prestiges = Partial<Record<Commander, Prestige>>;
const PrestigeContext = createContext<Prestiges>({});
interface DropOrigin { from: DOMRect; prestige: Prestige }
type Move = (id: Commander, tier: Tier | null, before?: Commander, origin?: DropOrigin) => void;
const portrait = (id: Commander) => `/images/commanderportraits/${id}portrait.png`;
const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const DragContext = createContext<DragDropManager | null>(null);
const missionBackgrounds: Record<string, string> = {
    'Chain of Ascension': 'chainofascension.jpg',
    'Cradle of Death': 'cradleofdeath.png',
    'Dead of Night': 'deadofnight.jpg',
    'Lock Load': 'lockload.jpg',
    'Malwarfare': 'malwarfare.jpg',
    'Miner Evacuation': 'minerevacuation.png',
    'Mist Opportunities': 'mistopportunities.jpg',
    'Oblivion Express': 'oblivionexpress.jpg',
    'Part and Parcel': 'partparcel.jpg',
    'Rifts to Korhal': 'riftstokorhal.jpg',
    'Scythe of Amon': 'scytheofamon.jpg',
    'Temple of the Past': 'templeofthepast.jpg',
    'The Vermillion Problem': 'thevermillionproblem.png',
    'Void Launch': 'voidlaunch.jpg',
    'Void Thrashing': 'voidthrashing.jpg',
};

function PrestigeBadge({ value, showPrefix = false }: { value: Prestige; showPrefix?: boolean }) {
    return value ? <span class="prestige-badge" aria-hidden="true">{showPrefix ? `P${value}` : value}</span> : null;
}

function portraitPreview(id: Commander, prestige: Prestige, size: number) {
    const preview = document.createElement('div');
    preview.className = 'commander-preview';
    preview.style.width = preview.style.height = `${size}px`;
    preview.style.fontSize = `${size * 28 / 64}px`;
    const image = document.createElement('img');
    image.src = portrait(id);
    image.alt = '';
    preview.append(image);
    if (prestige) {
        const badge = document.createElement('span');
        badge.className = 'prestige-badge';
        badge.textContent = String(prestige);
        preview.append(badge);
    }
    return preview;
}

function useCommanderDrag(id: Commander, location: string, canDrag: () => boolean) {
    const manager = useContext(DragContext)!;
    const prestige = useContext(PrestigeContext)[id] ?? 0;
    const ref = useRef<HTMLButtonElement>(null);
    useEffect(() => {
        const draggable = new Draggable({
            id: `${location}-${id}`,
            element: ref.current!,
            data: { commander: id, prestige },
        }, manager);
        const cleanup = manager.monitor.addEventListener('beforedragstart', event => {
            if (event.operation.source === draggable && !canDrag()) event.preventDefault();
        });
        return () => { cleanup(); draggable.destroy(); };
    }, [manager, id, location, canDrag, prestige]);
    return ref;
}

function useCommanderDrop<T extends HTMLElement>(tier: Tier | null, onMove: Move) {
    const manager = useContext(DragContext)!;
    const ref = useRef<T>(null);
    const [hover, setHover] = useState<{ before?: Commander } | null>(null);
    useEffect(() => {
        const element = ref.current!;
        const target = new Droppable({ id: tier ?? 'pool', element, collisionDetector: pointerIntersection }, manager);
        const beforeAt = (id: Commander, x: number) => {
            // Keep the insertion position stable while the pointer is inside its placeholder.
            const placeholder = element.querySelector<HTMLElement>('.commander-drop-placeholder');
            if (placeholder) {
                const rect = placeholder.getBoundingClientRect();
                if (x >= rect.left && x <= rect.right) return placeholder.dataset.before as Commander | undefined;
            }
            // Rectangles and pointer coordinates both include the canvas zoom.
            const next = [...element.querySelectorAll<HTMLElement>('[data-tier-portrait]')]
                .filter(item => item.dataset.tierPortrait !== id)
                .find(item => {
                    const rect = item.getBoundingClientRect();
                    return x < rect.left + rect.width / 2;
                });
            return next?.dataset.tierPortrait as Commander | undefined;
        };
        const update = (event: DragMoveEvent | DragOverEvent) => {
            const { operation } = event;
            const id = operation.source?.data.commander;
            if (operation.target !== target || !isCommander(id)) { setHover(null); return; }
            const point = 'to' in event && event.to ? event.to : operation.position.current;
            const before = beforeAt(id, point.x);
            setHover(previous => previous && previous.before === before ? previous : { before });
        };
        const cleanups = [
            manager.monitor.addEventListener('dragmove', update),
            manager.monitor.addEventListener('dragover', update),
            manager.monitor.addEventListener('dragend', ({ operation, canceled }) => {
                setHover(null);
                const id = operation.source?.data.commander;
                if (!canceled && operation.target === target && isCommander(id)) {
                    const preview = document.querySelector<HTMLElement>('.dragging-commander');
                    onMove(id, tier, beforeAt(id, operation.position.current.x), preview ? {
                        from: preview.getBoundingClientRect(),
                        prestige: operation.source!.data.prestige as Prestige,
                    } : undefined);
                }
            }),
        ];
        return () => { cleanups.forEach(cleanup => cleanup()); target.destroy(); };
    }, [manager, tier, onMove]);
    return { ref, hover };
}

function useCommanderDragManager() {
    const [manager] = useState(() => new DragDropManager({
        sensors: [PointerSensor.configure({
            activationConstraints: [new PointerActivationConstraints.Distance({ value: 5 })],
        })],
        // Preact owns the source elements; the preview is a separate circular portrait.
        // Keyboard users select a portrait and activate a tier button, or Delete to unrank.
        plugins: [Cursor, PreventSelection],
    }));
    useEffect(() => {
        let preview: HTMLDivElement | undefined;
        let liftedPortrait: HTMLElement | null = null;
        let liftedBanner: HTMLElement | null = null;
        let liftedPoolPortrait: HTMLElement | null = null;
        const clearPreview = () => {
            preview?.remove();
            preview = undefined;
            liftedPortrait?.removeAttribute('data-dragging');
            liftedPortrait = null;
            liftedBanner?.removeAttribute('data-dragging');
            liftedBanner = null;
            liftedPoolPortrait?.removeAttribute('data-dragging');
            liftedPoolPortrait = null;
        };
        const positionPreview = ({ x, y }: { x: number; y: number }) => {
            if (preview) preview.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
        };
        const cleanups = [
            manager.monitor.addEventListener('dragstart', ({ operation }) => {
                const id = operation.source?.data.commander;
                if (!isCommander(id)) return;
                // Keep the draggable mounted, but let the other portraits close its slot.
                liftedPortrait = document.querySelector<HTMLElement>(`[data-tier-portrait="${id}"]`);
                liftedPortrait?.setAttribute('data-dragging', 'true');
                liftedBanner = document.querySelector<HTMLElement>(`.commander-banner[data-commander="${id}"]`);
                liftedBanner?.setAttribute('data-dragging', 'true');
                liftedPoolPortrait = document.querySelector<HTMLElement>(`[data-pool-portrait="${id}"]`);
                liftedPoolPortrait?.setAttribute('data-dragging', 'true');
                const scale = document.querySelector('.tiermaker')!.getBoundingClientRect().width / 1920;
                preview = portraitPreview(id, operation.source!.data.prestige as Prestige, 64 * scale);
                preview.classList.add('dragging-commander');
                document.body.append(preview);
                positionPreview(operation.position.current);
                manager.dragOperation.shape = new DOMRectangle(preview);
            }),
            effect(() => {
                const { position, status } = manager.dragOperation;
                if (!status.dragging || !preview) return;
                positionPreview(position.current);
                // Updating the preview shape also refreshes pointer collision detection.
                manager.dragOperation.shape = new DOMRectangle(preview);
            }),
            // Drop handlers must read the insertion position before the source slot returns.
            manager.monitor.addEventListener('dragend', () => queueMicrotask(clearPreview)),
        ];
        const cancel = () => {
            if (!manager.dragOperation.status.idle) manager.actions.stop({ canceled: true });
        };
        window.addEventListener('blur', cancel);
        window.addEventListener('resize', cancel);
        return () => {
            cancel();
            cleanups.forEach(cleanup => cleanup());
            window.removeEventListener('blur', cancel);
            window.removeEventListener('resize', cancel);
            clearPreview();
            manager.destroy();
        };
    }, [manager]);
    return manager;
}

function CommanderPortrait({ id, location, selected, placed, arriving, onSelect, onReturn, canDrag }: {
    id: Commander; location: 'pool' | 'tier'; selected?: boolean; placed?: boolean;
    arriving?: boolean; onSelect: (id: Commander) => void;
    onReturn: (id: Commander) => void; canDrag: () => boolean;
}) {
    const ref = useCommanderDrag(id, location, canDrag);
    const prestige = useContext(PrestigeContext)[id] ?? 0;
    return <button type="button" ref={ref} data-commander={id}
        class={`commander-portrait ${selected ? 'is-current' : ''} ${placed ? 'is-placed' : ''} ${arriving ? 'is-arriving' : ''}`}
        data-tier-portrait={location === 'tier' ? id : undefined}
        data-pool-portrait={location === 'pool' ? id : undefined}
        aria-label={`Select ${commanderName(id)}, P${prestige}${placed ? ', ranked' : ''}`}
        aria-pressed={selected ?? false}
        onClick={() => onSelect(id)}
        onKeyDown={event => {
            if ((event.key === 'Delete' || event.key === 'Backspace') && (placed || location === 'tier')) {
                event.preventDefault();
                onReturn(id);
            }
        }}>
        <img src={portrait(id)} alt="" width={location === 'pool' ? 50 : 64} height={location === 'pool' ? 50 : 64} draggable={false} />
        <PrestigeBadge value={prestige} />
    </button>;
}

function TierRow({ tier, commanders, current, pending, onMove, onPlace, onSelect, onReturn, canDrag }: {
    tier: Tier; commanders: Commander[]; current: Commander | null; pending: Commander | null;
    onMove: Move; onPlace: (tier: Tier) => void; onSelect: (id: Commander) => void;
    onReturn: (id: Commander) => void; canDrag: () => boolean;
}) {
    const { ref, hover } = useCommanderDrop<HTMLTableRowElement>(tier, onMove);
    return <tr ref={ref} class={`tier-${tier.toLowerCase()} ${hover ? 'is-drop-target' : ''}`}>
        <th scope="row"><button type="button" class="tier-label" disabled={!current || !!pending}
            aria-label={current ? `Place ${commanderName(current)} in ${tier} tier` : `${tier} tier`}
            onClick={() => onPlace(tier)}>{tier}</button></th>
        <td><div class="tier-commanders">
            {commanders.map(id => <Fragment key={id}>
                {hover?.before === id && <span class="commander-drop-placeholder" data-before={id} aria-hidden="true" />}
                <CommanderPortrait id={id} location="tier"
                    selected={id === current} arriving={id === pending}
                    onSelect={onSelect} onReturn={onReturn} canDrag={canDrag} />
            </Fragment>)}
            {hover && !hover.before && <span class="commander-drop-placeholder" aria-hidden="true" />}
        </div></td>
    </tr>;
}

function CurrentCommander({ id, canDrag, onReturn }: { id: Commander; canDrag: () => boolean; onReturn: (id: Commander) => void }) {
    const ref = useCommanderDrag(id, 'current', canDrag);
    const prestige = useContext(PrestigeContext)[id] ?? 0;
    useLayoutEffect(() => {
        if (!reducedMotion()) ref.current?.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 180 });
    }, [id]);
    return <button ref={ref} type="button" class="commander-banner" data-commander={id}
        aria-label={`Drag ${commanderName(id)}, P${prestige}, to a tier, or choose a tier letter`}
        onKeyDown={event => {
            if (event.key === 'Delete' || event.key === 'Backspace') {
                event.preventDefault();
                onReturn(id);
            }
        }}>
        <img src={`/images/ctg/commanders/${id}.png`} alt={commanderName(id)} width="500" height="94" draggable={false} />
        <PrestigeBadge value={prestige} showPrefix />
    </button>;
}

function CommanderPool({ current, placed, pending, returning, onMove, onSelect, onReturn, canDrag }: {
    current: Commander | null; placed: Set<Commander>; pending: Commander | null;
    returning: Commander | null;
    onMove: Move; onSelect: (id: Commander) => void; onReturn: (id: Commander) => void; canDrag: () => boolean;
}) {
    const { ref, hover } = useCommanderDrop<HTMLDivElement>(null, onMove);
    return <div ref={ref} class={`pool ${hover ? 'is-drop-target' : ''}`} role="group" aria-label="Commanders — drop here to unrank">
        {COMMANDERS.map(id => <CommanderPortrait key={id} id={id} location="pool"
            selected={id === current} placed={placed.has(id) && id !== pending} arriving={id === returning}
            onSelect={onSelect} onReturn={onReturn} canDrag={canDrag} />)}
    </div>;
}

function MutationBox({ data, mutation, onSelect }: {
    data: PageData; mutation: Mutation | undefined; onSelect: (id: string) => void;
}) {
    const mutators = [mutation?.mut01, mutation?.mut02, mutation?.mut03].map(id => id ? data.mutators[id] : undefined);
    const difficulty = brutalLevel(mutators.reduce((sum, item) => sum + Number(item?.abomination ?? 0), 0));
    return <div id="box1" class="box">
        <select class="mutation" aria-label="Mutation" value={mutation?.mutationid ?? ''} onChange={event => onSelect(event.currentTarget.value)}>
            <option value="">(select a mutation)</option>
            {data.mutations.map(item => <option key={item.mutationid} value={item.mutationid}>{item.mutation}</option>)}
        </select>
        <div class="info">
            <img key={mutation ? 'map' : 'empty-map'} class="map" src={mutation ? `/images/ctg/${mutation.map.replace(/ /g, '').toLowerCase()}.png` : undefined} width="450" height="50" alt={mutation?.map ?? ''} />
            <img key={mutation ? 'difficulty' : 'empty-difficulty'} class="difficulty" src={mutation ? `/images/ctg/brutal${difficulty}.png` : undefined} width="170" height="50" alt={mutation ? `Brutal${difficulty ? `+${difficulty}` : ''}` : ''} style="float:right" />
        </div>
        {mutators.map((item, index) => <div key={index} class="mutdata">
            <img key={item ? 'icon' : 'empty-icon'} src={item ? `/images/mutators/${item.mutatorid}.png` : undefined} width="50" height="50" alt="" />
            <p>{item && <><b class="mutname">{item.mutatorname}</b><br /><span dangerouslySetInnerHTML={{ __html: item.mutatordescription }} /></>}</p>
        </div>)}
    </div>;
}

interface MenuPosition { x: number; y: number; trigger: HTMLElement; commander?: Commander }
interface MenuItem { label: string; disabled?: boolean; checked?: boolean; select: () => void }
function ContextMenu({ position, label, items, onClose }: {
    position: MenuPosition; label: string; items: MenuItem[]; onClose: () => void;
}) {
    const ref = useRef<HTMLDivElement>(null);
    useLayoutEffect(() => {
        const menu = ref.current!;
        const frame = menu.parentElement!;
        const bounds = frame.getBoundingClientRect();
        const scale = bounds.width / frame.offsetWidth;
        const rect = menu.getBoundingClientRect();
        // Pointer coordinates and measured bounds are in viewport pixels; the menu uses design pixels.
        menu.style.left = `${Math.max(8, Math.min((position.x - bounds.left) / scale, (bounds.width - rect.width) / scale - 8))}px`;
        menu.style.top = `${Math.max(8, Math.min((position.y - bounds.top) / scale, (bounds.height - rect.height) / scale - 8))}px`;
        (menu.querySelector<HTMLButtonElement>('[aria-checked="true"]') ?? menu.querySelector<HTMLButtonElement>('button:not(:disabled)') ?? menu).focus({ preventScroll: true });
    }, [position]);
    useEffect(() => {
        const outside = (event: PointerEvent) => {
            if (!ref.current?.contains(event.target as Node)) onClose();
        };
        document.addEventListener('pointerdown', outside);
        window.addEventListener('resize', onClose);
        window.addEventListener('blur', onClose);
        return () => {
            document.removeEventListener('pointerdown', outside);
            window.removeEventListener('resize', onClose);
            window.removeEventListener('blur', onClose);
        };
    }, [onClose]);
    const dismiss = () => {
        onClose();
        position.trigger.focus({ preventScroll: true });
    };
    return <div ref={ref} class="tier-menu" role="menu" aria-label={label} tabIndex={-1}
        onContextMenu={event => event.preventDefault()}
        onKeyDown={event => {
            if (event.key === 'Escape' || event.key === 'Tab') {
                event.preventDefault();
                dismiss();
            } else if (['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
                event.preventDefault();
                const items = [...ref.current!.querySelectorAll<HTMLButtonElement>('button:not(:disabled)')];
                const index = items.indexOf(document.activeElement as HTMLButtonElement);
                const next = event.key === 'Home' ? 0 : event.key === 'End' ? items.length - 1
                    : (index + (event.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length;
                items[next]?.focus({ preventScroll: true });
            }
        }}>
        {items.map(item => <button key={item.label} type="button"
            role={item.checked === undefined ? 'menuitem' : 'menuitemradio'} aria-label={item.label} aria-checked={item.checked}
            disabled={item.disabled} onClick={() => { item.select(); dismiss(); }}>{item.label}</button>)}
    </div>;
}

interface Flight extends DropOrigin { id: Commander; tier: Tier | null; duration: number; nextCurrent: Commander | null }
function TierMaker({ data }: { data: PageData }) {
    const manager = useCommanderDragManager();
    const [selectedMutation, setSelectedMutation] = useState('');
    const mutation = data.mutations.find(item => String(item.mutationid) === selectedMutation);
    const background = mutation && missionBackgrounds[mutation.map];
    const [ranking, setRanking] = useState(emptyRanking);
    const [pending, setPending] = useState<Flight | null>(null);
    const [announcement, setAnnouncement] = useState('');
    const [visibleTiers, setVisibleTiers] = useState<Tier[]>(() => TIERS.filter(tier => tier !== 'SS' && tier !== 'SSS'));
    const [prestiges, setPrestiges] = useState<Prestiges>({});
    const [menu, setMenu] = useState<MenuPosition | null>(null);
    const closeMenu = useCallback(() => setMenu(null), []);
    const latest = useRef(ranking);
    latest.current = ranking;
    const busy = useRef(false);
    const canDrag = useCallback(() => !busy.current, []);
    const move = useCallback<Move>((id, tier, before, origin) => {
        if (busy.current) return;
        const next = moveCommander(latest.current, id, tier, before);
        if (origin && !reducedMotion()) {
            busy.current = true;
            setRanking({ ...next, current: latest.current.current });
            setPending({ ...origin, id, tier, duration: 180, nextCurrent: next.current });
        } else {
            setRanking(next);
        }
        setAnnouncement(`${commanderName(id)} ${tier ? `placed in ${tier} tier` : 'returned to the pool'}.`);
    }, []);
    const select = useCallback((id: Commander) => {
        if (!busy.current) setRanking(state => ({ ...state, current: id }));
    }, []);
    const unrank = useCallback((id: Commander) => {
        if (busy.current) return;
        move(id, null);
        requestAnimationFrame(() => document.querySelector<HTMLButtonElement>(`[data-pool-portrait="${id}"]`)?.focus({ preventScroll: true }));
    }, [move]);
    const place = useCallback((tier: Tier) => {
        const state = latest.current;
        if (!state.current || busy.current) return;
        const id = state.current;
        const origin = document.querySelector(`[data-tier-portrait="${id}"]`) ?? document.querySelector(`[data-pool-portrait="${id}"]`);
        if (!origin || reducedMotion()) { move(id, tier); return; }
        const next = moveCommander(state, id, tier);
        busy.current = true;
        const from = origin.getBoundingClientRect();
        setRanking({ ...next, current: id });
        setPending({ id, tier, duration: 320, prestige: prestiges[id] ?? 0, from, nextCurrent: next.current });
        setAnnouncement(`${commanderName(id)} placed in ${tier} tier.`);
    }, [move, prestiges]);

    useLayoutEffect(() => {
        if (!pending) return;
        const target = document.querySelector(`[data-${pending.tier === null ? 'pool' : 'tier'}-portrait="${pending.id}"]`)!;
        // Restore the destination's layout slot before measuring; is-arriving keeps it invisible.
        target.removeAttribute('data-dragging');
        const to = target.getBoundingClientRect();
        const image = portraitPreview(pending.id, pending.prestige, pending.from.width);
        image.classList.add('flying-commander');
        image.style.left = `${pending.from.left}px`;
        image.style.top = `${pending.from.top}px`;
        // Appended outside the zoomed canvas: both endpoints are viewport coordinates.
        document.body.append(image);
        const animation = image.animate([
            { transform: 'translate(0, 0) scale(1)' },
            { transform: `translate(${to.left - pending.from.left}px, ${to.top - pending.from.top}px) scale(${to.width / pending.from.width})` },
        ], { duration: pending.duration, easing: 'cubic-bezier(0.2, 0.7, 0.2, 1)', fill: 'forwards' });
        let active = true;
        const cancel = () => animation.cancel();
        window.addEventListener('resize', cancel, { once: true });
        window.addEventListener('blur', cancel, { once: true });
        animation.finished.catch(() => {}).then(() => {
            if (!active) return;
            setRanking(state => ({ ...state, current: pending.nextCurrent }));
            setPending(null);
            busy.current = false;
        });
        return () => {
            active = false;
            animation.cancel();
            image.remove();
            window.removeEventListener('resize', cancel);
            window.removeEventListener('blur', cancel);
        };
    }, [pending]);

    const openMenu = (target: HTMLElement, x?: number, y?: number) => {
        if (busy.current || !manager.dragOperation.status.idle) return;
        const commanderButton = target.closest<HTMLElement>('[data-commander]');
        const commander = commanderButton?.dataset.commander;
        const table = target.closest<HTMLElement>('.tiers');
        if (!commanderButton && !table) return;
        const trigger = commanderButton ?? target.closest<HTMLElement>('button') ?? table!;
        const rect = trigger.getBoundingClientRect();
        setMenu({ x: x ?? rect.left, y: y ?? rect.top, trigger, commander: isCommander(commander) ? commander : undefined });
    };
    const menuCommander = menu?.commander;
    const menuItems: MenuItem[] = menuCommander ? ([0, 1, 2, 3] as const).map(prestige => ({
        label: `P${prestige}: ${data.prestigeNames[menuCommander][prestige]}`,
        checked: (prestiges[menuCommander] ?? 0) === prestige,
        select: () => {
            setPrestiges(previous => ({ ...previous, [menuCommander]: prestige }));
            setAnnouncement(`${commanderName(menuCommander)} set to P${prestige}.`);
        },
    })) : (['SS', 'SSS'] as const).map(tier => ({
        label: `Add ${tier}`,
        disabled: visibleTiers.includes(tier),
        select: () => {
            setVisibleTiers(previous => TIERS.filter(item => previous.includes(item) || item === tier));
            setAnnouncement(`${tier} tier added.`);
        },
    }));

    return <DragContext.Provider value={manager}><PrestigeContext.Provider value={prestiges}>
        <main class="tiermaker" style={{ backgroundImage: background ? `url("/images/missions/${background}")` : undefined }}
            onContextMenu={event => {
                const target = event.target as HTMLElement;
                if (!target.closest('[data-commander], .tiers')) return;
                event.preventDefault();
                openMenu(target, event.clientX, event.clientY);
            }}
            onKeyDown={event => {
                if (event.key !== 'ContextMenu' && !(event.shiftKey && event.key === 'F10')) return;
                const target = event.target as HTMLElement;
                if (!target.closest('[data-commander], .tiers')) return;
                event.preventDefault();
                openMenu(target);
            }}>
            <table class="tiers" aria-label="Commander tiers" tabIndex={0}
                style={{ '--tier-count': visibleTiers.length }}><tbody>
                {visibleTiers.map(tier => <TierRow key={tier} tier={tier} commanders={ranking.tiers[tier]}
                    current={ranking.current} pending={pending?.id ?? null} onMove={move} onPlace={place}
                    onSelect={select} onReturn={unrank} canDrag={canDrag} />)}
            </tbody></table>
            <MutationBox data={data} mutation={mutation} onSelect={setSelectedMutation} />
            <div class="commander-queue">
                <section aria-labelledby="current-commander-heading">
                    <h1 id="current-commander-heading">Current Commander</h1>
                    <div id="current-commander">
                        {ranking.current ? <CurrentCommander id={ranking.current} canDrag={canDrag} onReturn={unrank} />
                            : <p class="ranking-complete">All commanders ranked</p>}
                    </div>
                </section>
                <CommanderPool current={ranking.current} placed={placedCommanders(ranking.tiers)} pending={pending?.id ?? null}
                    returning={pending?.tier === null ? pending.id : null}
                    onMove={move} onSelect={select} onReturn={unrank} canDrag={canDrag} />
            </div>
            {menu && <ContextMenu position={menu} label={menuCommander ? `${commanderName(menuCommander)} prestige` : 'Additional tiers'}
                items={menuItems} onClose={closeMenu} />}
        </main>
        <p class="visually-hidden" role="status" aria-live="polite">{announcement}</p>
    </PrestigeContext.Provider></DragContext.Provider>;
}

render(<TierMaker data={window.tiermakerData} />, document.getElementById('tiermaker-root')!);
