/** @jsxImportSource preact */
import * as preact from 'preact';
import { CommanderSelector, UnitSelector, unitNavigation, unitPageTitle } from './unit-navigation';
import type { Token } from '../../source-data/unit-token';
import type { MountUnitsFunction } from './units';

type UnitsWindow = Window & { mountUnits?: MountUnitsFunction };

export function loadUnitsScript(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => {
            script.remove();
            reject(new Error(`Could not load ${src}`));
        };
        document.head.append(script);
    });
}

export class UnitsLoading extends preact.Component<{ load: () => Promise<void> }> {
    table = preact.createRef<HTMLTableElement>();
    override state: { commander: Token | null, unit: Token | null, failed: boolean } = {
        commander: null, unit: null, failed: false,
    };
    override componentDidMount() {
        window.addEventListener('hashchange', this.updateSelection);
        this.updateSelection();
    }
    override componentWillUnmount() {
        window.removeEventListener('hashchange', this.updateSelection);
    }
    updateSelection = () => {
        const [commander, unit] = window.location.hash.slice(1).split('/');
        document.title = unitPageTitle(commander, unit);
        this.setState({ commander: commander || null, unit: unit || null });
    };
    onClickUnit = (event: MouseEvent) => {
        if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey ||
            !window.matchMedia('(max-width: 700px)').matches) return;
        requestAnimationFrame(() => this.table.current?.querySelector('.units-unit')?.scrollIntoView({ block: 'start', inline: 'start' }));
    };
    retry = async () => {
        this.setState({ failed: false });
        try {
            await this.props.load();
        } catch {
            this.setState({ failed: true });
        }
    };
    override render() {
        const group = unitNavigation.find(group => group.id === this.state.commander);
        const unit = group?.units.find(unit => unit.id === this.state.unit);
        return <table class="units" ref={this.table}><tr>
            <CommanderSelector commander={this.state.commander} />
            <UnitSelector commander={this.state.commander} unit={this.state.unit} onClickUnit={this.onClickUnit} />
            {this.state.commander && <td class="units-unit" aria-busy={!!this.state.unit && !this.state.failed}>
                {unit && <p class="units-head">{unit.name}</p>}
                {this.state.failed ? <p role="alert">Unable to load unit stats. <button type="button" onClick={this.retry}>Retry</button></p> :
                    this.state.unit ? <p role="status">Loading...</p> : <p><big>&larr;</big> Select a unit</p>}
            </td>}
        </tr></table>;
    }
}

if (typeof document !== 'undefined') {
    const root = document.getElementById('units')!;
    const loadingRoot = document.createElement('div');
    root.append(loadingRoot);
    const loadingView = preact.createRef<UnitsLoading>();
    let tooltipsLoading: Promise<void> | undefined;
    const load = async () => {
        // Tooltips also contain substantial data; start them only after navigation is visible.
        tooltipsLoading ??= loadUnitsScript('/scripts/tooltips.js').catch(error => {
            tooltipsLoading = undefined;
            throw error;
        });
        await Promise.all([
            (window as UnitsWindow).mountUnits ? Promise.resolve() : loadUnitsScript('/scripts/units.js'),
            tooltipsLoading,
        ]);
        const mount = (window as UnitsWindow).mountUnits;
        if (!mount) throw new Error('Unit stats did not initialize.');
        // Each independently bundled Preact renderer owns its own root.
        preact.render(null, loadingRoot);
        const statsRoot = document.createElement('div');
        root.replaceChildren(statsRoot);
        mount(statsRoot);
    };
    preact.render(<UnitsLoading load={load} ref={loadingView} />, loadingRoot);
    // Give the lightweight navigation a paint before even a cached stats bundle can execute.
    requestAnimationFrame(() => setTimeout(() => { void loadingView.current?.retry(); }, 0));
}
