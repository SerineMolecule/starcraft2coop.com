(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  function __accessProp(key) {
    return this[key];
  }
  var __toCommonJS = (from) => {
    var entry = (__moduleCache ??= new WeakMap).get(from), desc;
    if (entry)
      return entry;
    entry = __defProp({}, "__esModule", { value: true });
    if (from && typeof from === "object" || typeof from === "function") {
      for (var key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(entry, key))
          __defProp(entry, key, {
            get: __accessProp.bind(from, key),
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
          });
    }
    __moduleCache.set(from, entry);
    return entry;
  };
  var __moduleCache;
  var __returnValue = (v) => v;
  function __exportSetter(name, newValue) {
    this[name] = __returnValue.bind(null, newValue);
  }
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, {
        get: all[name],
        enumerable: true,
        configurable: true,
        set: __exportSetter.bind(all, name)
      });
  };

  // html/scripts/units-loader.tsx
  var exports_units_loader = {};
  __export(exports_units_loader, {
    UnitsLoading: () => UnitsLoading,
    loadUnitsScript: () => loadUnitsScript
  });

  // node_modules/preact/dist/preact.module.js
  var n;
  var l;
  var u;
  var t;
  var i;
  var r;
  var o;
  var e;
  var f;
  var c;
  var s;
  var a;
  var h;
  var p;
  var v;
  var y;
  var d = {};
  var w = [];
  var _ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  var g = Array.isArray;
  function m(n, l) {
    for (var u in l)
      n[u] = l[u];
    return n;
  }
  function b(n) {
    n && n.parentNode && n.parentNode.removeChild(n);
  }
  function k(l, u, t) {
    var i, r, o, e = {};
    for (o in u)
      o == "key" ? i = u[o] : o == "ref" ? r = u[o] : e[o] = u[o];
    if (arguments.length > 2 && (e.children = arguments.length > 3 ? n.call(arguments, 2) : t), typeof l == "function" && l.defaultProps != null)
      for (o in l.defaultProps)
        e[o] === undefined && (e[o] = l.defaultProps[o]);
    return x(l, e, i, r, null);
  }
  function x(n, t, i, r, o) {
    var e = { type: n, props: t, key: i, ref: r, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: undefined, __v: o == null ? ++u : o, __i: -1, __u: 0 };
    return o == null && l.vnode != null && l.vnode(e), e;
  }
  function M() {
    return { current: null };
  }
  function S(n) {
    return n.children;
  }
  function C(n, l) {
    this.props = n, this.context = l;
  }
  function $(n, l) {
    if (l == null)
      return n.__ ? $(n.__, n.__i + 1) : null;
    for (var u;l < n.__k.length; l++)
      if ((u = n.__k[l]) != null && u.__e != null)
        return u.__e;
    return typeof n.type == "function" ? $(n) : null;
  }
  function I(n) {
    if (n.__P && n.__d) {
      var u = n.__v, t = u.__e, i = [], r = [], o = m({}, u);
      o.__v = u.__v + 1, l.vnode && l.vnode(o), q(n.__P, o, u, n.__n, n.__P.namespaceURI, 32 & u.__u ? [t] : null, i, t == null ? $(u) : t, !!(32 & u.__u), r), o.__v = u.__v, o.__.__k[o.__i] = o, D(i, o, r), u.__e = u.__ = null, o.__e != t && P(o);
    }
  }
  function P(n) {
    if ((n = n.__) != null && n.__c != null)
      return n.__e = n.__c.base = null, n.__k.some(function(l) {
        if (l != null && l.__e != null)
          return n.__e = n.__c.base = l.__e;
      }), P(n);
  }
  function A(n) {
    (!n.__d && (n.__d = true) && i.push(n) && !H.__r++ || r != l.debounceRendering) && ((r = l.debounceRendering) || o)(H);
  }
  function H() {
    try {
      for (var n, l = 1;i.length; )
        i.length > l && i.sort(e), n = i.shift(), l = i.length, I(n);
    } finally {
      i.length = H.__r = 0;
    }
  }
  function L(n, l, u, t, i, r, o, e, f, c, s) {
    var a, h, p, v, y, _, g, m = t && t.__k || w, b = l.length;
    for (f = T(u, l, m, f, b), a = 0;a < b; a++)
      (p = u.__k[a]) != null && (h = p.__i != -1 && m[p.__i] || d, p.__i = a, _ = q(n, p, h, i, r, o, e, f, c, s), v = p.__e, p.ref && h.ref != p.ref && (h.ref && J(h.ref, null, p), s.push(p.ref, p.__c || v, p)), y == null && v != null && (y = v), (g = !!(4 & p.__u)) || h.__k === p.__k ? (f = j(p, f, n, g), g && h.__e && (h.__e = null)) : typeof p.type == "function" && _ !== undefined ? f = _ : v && (f = v.nextSibling), p.__u &= -7);
    return u.__e = y, f;
  }
  function T(n, l, u, t, i) {
    var r, o, e, f, c, s = u.length, a = s, h = 0;
    for (n.__k = new Array(i), r = 0;r < i; r++)
      (o = l[r]) != null && typeof o != "boolean" && typeof o != "function" ? (typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? o = n.__k[r] = x(null, o, null, null, null) : g(o) ? o = n.__k[r] = x(S, { children: o }, null, null, null) : o.constructor === undefined && o.__b > 0 ? o = n.__k[r] = x(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : n.__k[r] = o, f = r + h, o.__ = n, o.__b = n.__b + 1, e = null, (c = o.__i = O(o, u, f, a)) != -1 && (a--, (e = u[c]) && (e.__u |= 2)), e == null || e.__v == null ? (c == -1 && (i > s ? h-- : i < s && h++), typeof o.type != "function" && (o.__u |= 4)) : c != f && (c == f - 1 ? h-- : c == f + 1 ? h++ : (c > f ? h-- : h++, o.__u |= 4))) : n.__k[r] = null;
    if (a)
      for (r = 0;r < s; r++)
        (e = u[r]) != null && (2 & e.__u) == 0 && (e.__e == t && (t = $(e)), K(e, e));
    return t;
  }
  function j(n, l, u, t) {
    var i, r;
    if (typeof n.type == "function") {
      for (i = n.__k, r = 0;i && r < i.length; r++)
        i[r] && (i[r].__ = n, l = j(i[r], l, u, t));
      return l;
    }
    n.__e != l && (t && (l && n.type && !l.parentNode && (l = $(n)), u.insertBefore(n.__e, l || null)), l = n.__e);
    do {
      l = l && l.nextSibling;
    } while (l != null && l.nodeType == 8);
    return l;
  }
  function O(n, l, u, t) {
    var i, r, o, { key: e, type: f } = n, c = l[u], s = c != null && (2 & c.__u) == 0;
    if (c === null && e == null || s && e == c.key && f == c.type)
      return u;
    if (t > (s ? 1 : 0)) {
      for (i = u - 1, r = u + 1;i >= 0 || r < l.length; )
        if ((c = l[o = i >= 0 ? i-- : r++]) != null && (2 & c.__u) == 0 && e == c.key && f == c.type)
          return o;
    }
    return -1;
  }
  function z(n, l, u) {
    l[0] == "-" ? n.setProperty(l, u == null ? "" : u) : n[l] = u == null ? "" : typeof u != "number" || _.test(l) ? u : u + "px";
  }
  function N(n, l, u, t, i) {
    var r, o;
    n:
      if (l == "style")
        if (typeof u == "string")
          n.style.cssText = u;
        else {
          if (typeof t == "string" && (n.style.cssText = t = ""), t)
            for (l in t)
              u && l in u || z(n.style, l, "");
          if (u)
            for (l in u)
              t && u[l] == t[l] || z(n.style, l, u[l]);
        }
      else if (l[0] == "o" && l[1] == "n")
        r = l != (l = l.replace(a, "$1")), o = l.toLowerCase(), l = o in n || l == "onFocusOut" || l == "onFocusIn" ? o.slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + r] = u, u ? t ? u[s] = t[s] : (u[s] = h, n.addEventListener(l, r ? v : p, r)) : n.removeEventListener(l, r ? v : p, r);
      else {
        if (i == "http://www.w3.org/2000/svg")
          l = l.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (l != "width" && l != "height" && l != "href" && l != "list" && l != "form" && l != "tabIndex" && l != "download" && l != "rowSpan" && l != "colSpan" && l != "role" && l != "popover" && l in n)
          try {
            n[l] = u == null ? "" : u;
            break n;
          } catch (n) {}
        typeof u == "function" || (u == null || u === false && l[4] != "-" ? n.removeAttribute(l) : n.setAttribute(l, l == "popover" && u == 1 ? "" : u));
      }
  }
  function V(n) {
    return function(u) {
      if (this.l) {
        var t = this.l[u.type + n];
        if (u[c] == null)
          u[c] = h++;
        else if (u[c] < t[s])
          return;
        return t(l.event ? l.event(u) : u);
      }
    };
  }
  function q(n, u, t, i, r, o, e, f, c, s) {
    var a, h, p, v, y, d, _, k, x, M, $, I, P, A, H, T = u.type;
    if (u.constructor !== undefined)
      return null;
    128 & t.__u && (c = !!(32 & t.__u), o = [f = u.__e = t.__e]), (a = l.__b) && a(u);
    n:
      if (typeof T == "function")
        try {
          if (k = u.props, x = T.prototype && T.prototype.render, M = (a = T.contextType) && i[a.__c], $ = a ? M ? M.props.value : a.__ : i, t.__c ? _ = (h = u.__c = t.__c).__ = h.__E : (x ? u.__c = h = new T(k, $) : (u.__c = h = new C(k, $), h.constructor = T, h.render = Q), M && M.sub(h), h.state || (h.state = {}), h.__n = i, p = h.__d = true, h.__h = [], h._sb = []), x && h.__s == null && (h.__s = h.state), x && T.getDerivedStateFromProps != null && (h.__s == h.state && (h.__s = m({}, h.__s)), m(h.__s, T.getDerivedStateFromProps(k, h.__s))), v = h.props, y = h.state, h.__v = u, p)
            x && T.getDerivedStateFromProps == null && h.componentWillMount != null && h.componentWillMount(), x && h.componentDidMount != null && h.__h.push(h.componentDidMount);
          else {
            if (x && T.getDerivedStateFromProps == null && k !== v && h.componentWillReceiveProps != null && h.componentWillReceiveProps(k, $), u.__v == t.__v || !h.__e && h.shouldComponentUpdate != null && h.shouldComponentUpdate(k, h.__s, $) === false) {
              u.__v != t.__v && (h.props = k, h.state = h.__s, h.__d = false), u.__e = t.__e, u.__k = t.__k, u.__k.some(function(n) {
                n && (n.__ = u);
              }), w.push.apply(h.__h, h._sb), h._sb = [], h.__h.length && e.push(h);
              break n;
            }
            h.componentWillUpdate != null && h.componentWillUpdate(k, h.__s, $), x && h.componentDidUpdate != null && h.__h.push(function() {
              h.componentDidUpdate(v, y, d);
            });
          }
          if (h.context = $, h.props = k, h.__P = n, h.__e = false, I = l.__r, P = 0, x)
            h.state = h.__s, h.__d = false, I && I(u), a = h.render(h.props, h.state, h.context), w.push.apply(h.__h, h._sb), h._sb = [];
          else
            do {
              h.__d = false, I && I(u), a = h.render(h.props, h.state, h.context), h.state = h.__s;
            } while (h.__d && ++P < 25);
          h.state = h.__s, h.getChildContext != null && (i = m(m({}, i), h.getChildContext())), x && !p && h.getSnapshotBeforeUpdate != null && (d = h.getSnapshotBeforeUpdate(v, y)), A = a != null && a.type === S && a.key == null ? E(a.props.children) : a, f = L(n, g(A) ? A : [A], u, t, i, r, o, e, f, c, s), h.base = u.__e, u.__u &= -161, h.__h.length && e.push(h), _ && (h.__E = h.__ = null);
        } catch (n) {
          if (u.__v = null, c || o != null)
            if (n.then) {
              for (u.__u |= c ? 160 : 128;f && f.nodeType == 8 && f.nextSibling; )
                f = f.nextSibling;
              o[o.indexOf(f)] = null, u.__e = f;
            } else {
              for (H = o.length;H--; )
                b(o[H]);
              B(u);
            }
          else
            u.__e = t.__e, u.__k = t.__k, n.then || B(u);
          l.__e(n, u, t);
        }
      else
        o == null && u.__v == t.__v ? (u.__k = t.__k, u.__e = t.__e) : f = u.__e = G(t.__e, u, t, i, r, o, e, c, s);
    return (a = l.diffed) && a(u), 128 & u.__u ? undefined : f;
  }
  function B(n) {
    n && (n.__c && (n.__c.__e = true), n.__k && n.__k.some(B));
  }
  function D(n, u, t) {
    for (var i = 0;i < t.length; i++)
      J(t[i], t[++i], t[++i]);
    l.__c && l.__c(u, n), n.some(function(u) {
      try {
        n = u.__h, u.__h = [], n.some(function(n) {
          n.call(u);
        });
      } catch (n) {
        l.__e(n, u.__v);
      }
    });
  }
  function E(n) {
    return typeof n != "object" || n == null || n.__b > 0 ? n : g(n) ? n.map(E) : m({}, n);
  }
  function G(u, t, i, r, o, e, f, c, s) {
    var a, h, p, v, y, w, _, m = i.props || d, { props: k, type: x } = t;
    if (x == "svg" ? o = "http://www.w3.org/2000/svg" : x == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), e != null) {
      for (a = 0;a < e.length; a++)
        if ((y = e[a]) && "setAttribute" in y == !!x && (x ? y.localName == x : y.nodeType == 3)) {
          u = y, e[a] = null;
          break;
        }
    }
    if (u == null) {
      if (x == null)
        return document.createTextNode(k);
      u = document.createElementNS(o, x, k.is && k), c && (l.__m && l.__m(t, e), c = false), e = null;
    }
    if (x == null)
      m === k || c && u.data == k || (u.data = k);
    else {
      if (e = e && n.call(u.childNodes), !c && e != null)
        for (m = {}, a = 0;a < u.attributes.length; a++)
          m[(y = u.attributes[a]).name] = y.value;
      for (a in m)
        y = m[a], a == "dangerouslySetInnerHTML" ? p = y : a == "children" || (a in k) || a == "value" && ("defaultValue" in k) || a == "checked" && ("defaultChecked" in k) || N(u, a, null, y, o);
      for (a in k)
        y = k[a], a == "children" ? v = y : a == "dangerouslySetInnerHTML" ? h = y : a == "value" ? w = y : a == "checked" ? _ = y : c && typeof y != "function" || m[a] === y || N(u, a, y, m[a], o);
      if (h)
        c || p && (h.__html == p.__html || h.__html == u.innerHTML) || (u.innerHTML = h.__html), t.__k = [];
      else if (p && (u.innerHTML = ""), L(t.type == "template" ? u.content : u, g(v) ? v : [v], t, i, r, x == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, e, f, e ? e[0] : i.__k && $(i, 0), c, s), e != null)
        for (a = e.length;a--; )
          b(e[a]);
      c || (a = "value", x == "progress" && w == null ? u.removeAttribute("value") : w != null && (w !== u[a] || x == "progress" && !w || x == "option" && w != m[a]) && N(u, a, w, m[a], o), a = "checked", _ != null && _ != u[a] && N(u, a, _, m[a], o));
    }
    return u;
  }
  function J(n, u, t) {
    try {
      if (typeof n == "function") {
        var i = typeof n.__u == "function";
        i && n.__u(), i && u == null || (n.__u = n(u));
      } else
        n.current = u;
    } catch (n) {
      l.__e(n, t);
    }
  }
  function K(n, u, t) {
    var i, r;
    if (l.unmount && l.unmount(n), (i = n.ref) && (i.current && i.current != n.__e || J(i, null, u)), (i = n.__c) != null) {
      if (i.componentWillUnmount)
        try {
          i.componentWillUnmount();
        } catch (n) {
          l.__e(n, u);
        }
      i.base = i.__P = null;
    }
    if (i = n.__k)
      for (r = 0;r < i.length; r++)
        i[r] && K(i[r], u, t || typeof n.type != "function");
    t || b(n.__e), n.__c = n.__ = n.__e = undefined;
  }
  function Q(n, l, u) {
    return this.constructor(n, u);
  }
  function R(u, t, i) {
    var r, o, e, f;
    t == document && (t = document.documentElement), l.__ && l.__(u, t), o = (r = typeof i == "function") ? null : i && i.__k || t.__k, e = [], f = [], q(t, u = (!r && i || t).__k = k(S, null, [u]), o || d, d, t.namespaceURI, !r && i ? [i] : o ? null : t.firstChild ? n.call(t.childNodes) : null, e, !r && i ? i : o ? o.__e : t.firstChild, r, f), D(e, u, f);
  }
  n = w.slice, l = { __e: function(n, l, u, t) {
    for (var i, r, o;l = l.__; )
      if ((i = l.__c) && !i.__)
        try {
          if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(n)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(n, t || {}), o = i.__d), o)
            return i.__E = i;
        } catch (l) {
          n = l;
        }
    throw n;
  } }, u = 0, t = function(n) {
    return n != null && n.constructor === undefined;
  }, C.prototype.setState = function(n, l) {
    var u;
    u = this.__s != null && this.__s != this.state ? this.__s : this.__s = m({}, this.state), typeof n == "function" && (n = n(m({}, u), this.props)), n && m(u, n), n != null && this.__v && (l && this._sb.push(l), A(this));
  }, C.prototype.forceUpdate = function(n) {
    this.__v && (this.__e = true, n && this.__h.push(n), A(this));
  }, C.prototype.render = S, i = [], o = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e = function(n, l) {
    return n.__v.__b - l.__v.__b;
  }, H.__r = 0, f = Math.random().toString(8), c = "__d" + f, s = "__a" + f, a = /(PointerCapture)$|Capture$/i, h = 0, p = V(false), v = V(true), y = 0;

  // html/data/unit-navigation.json
  var unit_navigation_default = [{ id: "raynor", name: "Raynor", amon: false, units: [{ id: "marine", name: "Marine", category: "Units" }, { id: "marauder", name: "Marauder", category: "Units" }, { id: "firebat", name: "Firebat", category: "Units" }, { id: "medic", name: "Medic", category: "Units" }, { id: "vulture", name: "Vulture", category: "Units" }, { id: "siegetank", name: "Siege Tank", category: "Units" }, { id: "viking", name: "Viking", category: "Units" }, { id: "banshee", name: "Banshee", category: "Units" }, { id: "battlecruiser", name: "Battlecruiser", category: "Units" }, { id: "hyperion", name: "Hyperion", category: "Heroes" }, { id: "duskwings", name: "Dusk Wings", category: "Heroes" }, { id: "missileturret", name: "Missile Turret", category: "Structures" }, { id: "bunker", name: "Bunker", category: "Structures" }, { id: "spidermine", name: "Spider Mine", category: "Structures" }] }, { id: "kerrigan", name: "Kerrigan", amon: false, units: [{ id: "queen", name: "Queen", category: "Units" }, { id: "zergling", name: "Zergling", category: "Units" }, { id: "hydralisk", name: "Hydralisk", category: "Units" }, { id: "lurker", name: "Lurker", category: "Units" }, { id: "ultralisk", name: "Ultralisk", category: "Units" }, { id: "mutalisk", name: "Mutalisk", category: "Units" }, { id: "broodlord", name: "Brood Lord", category: "Units" }, { id: "broodling", name: "Broodling", category: "Units" }, { id: "kerrigan", name: "Kerrigan", category: "Heroes" }, { id: "spinecrawler", name: "Spine Crawler", category: "Structures" }, { id: "sporecrawler", name: "Spore Crawler", category: "Structures" }, { id: "overlord", name: "Overlord", category: "Units" }, { id: "overseer", name: "Overseer", category: "Units" }] }, { id: "artanis", name: "Artanis", amon: false, units: [{ id: "zealot", name: "Zealot", category: "Units" }, { id: "dragoon", name: "Dragoon", category: "Units" }, { id: "hightemplar", name: "High Templar", category: "Units" }, { id: "archon", name: "Archon", category: "Units" }, { id: "immortal", name: "Immortal", category: "Units" }, { id: "reaver", name: "Reaver", category: "Units" }, { id: "phoenix", name: "Phoenix", category: "Units" }, { id: "tempest", name: "Tempest", category: "Units" }, { id: "observer", name: "Observer", category: "Units" }, { id: "photoncannon", name: "Photon Cannon", category: "Structures" }, { id: "unboundfanatic", name: "Unbound Fanatic", category: "Units" }] }, { id: "swann", name: "Swann", amon: false, units: [{ id: "hellbat", name: "Hellbat", category: "Units" }, { id: "goliath", name: "Goliath", category: "Units" }, { id: "siegetank", name: "Siege Tank", category: "Units" }, { id: "cyclone", name: "Cyclone", category: "Units" }, { id: "thor", name: "Thor", category: "Units" }, { id: "hellion", name: "Hellion", category: "Units" }, { id: "wraith", name: "Wraith", category: "Units" }, { id: "hercules", name: "Hercules", category: "Units" }, { id: "sciencevessel", name: "Science Vessel", category: "Units" }, { id: "ares", name: "A.R.E.S.", category: "Heroes" }, { id: "flamingbetty", name: "Flaming Betty", category: "Structures" }, { id: "spinningdizzy", name: "Spinning Dizzy", category: "Structures" }, { id: "blasterbilly", name: "Blaster Billy", category: "Structures" }, { id: "drakkenlaserdrill", name: "Drakken Laser Drill", category: "Structures" }] }, { id: "zagara", name: "Zagara", amon: false, units: [{ id: "queen", name: "Queen", category: "Units" }, { id: "zergling", name: "Zergling", category: "Units" }, { id: "baneling", name: "Baneling", category: "Units" }, { id: "banelingspawn", name: "Baneling Spawn", category: "Units" }, { id: "aberration", name: "Aberration", category: "Units" }, { id: "scourge", name: "Scourge", category: "Units" }, { id: "corruptor", name: "Corruptor", category: "Units" }, { id: "zagara", name: "Zagara", category: "Heroes" }, { id: "hunterkiller", name: "Hunter Killer", category: "Heroes" }, { id: "roach", name: "Roach", category: "Heroes" }, { id: "spinecrawler", name: "Spine Crawler", category: "Structures" }, { id: "sporecrawler", name: "Spore Crawler", category: "Structures" }, { id: "overlord", name: "Overlord", category: "Units" }, { id: "overseer", name: "Overseer", category: "Units" }, { id: "broodling", name: "Broodling", category: "Units" }, { id: "bilelauncher", name: "Bile Launcher", category: "Structures" }] }, { id: "vorazun", name: "Vorazun", amon: false, units: [{ id: "centurion", name: "Centurion", category: "Units" }, { id: "stalker", name: "Stalker", category: "Units" }, { id: "darktemplar", name: "Dark Templar", category: "Units" }, { id: "darkarchon", name: "Dark Archon", category: "Units" }, { id: "corsair", name: "Corsair", category: "Units" }, { id: "voidray", name: "Void Ray", category: "Units" }, { id: "oracle", name: "Oracle", category: "Units" }, { id: "shadowguard", name: "Shadow Guard", category: "Heroes" }, { id: "photoncannon", name: "Photon Cannon", category: "Structures" }] }, { id: "karax", name: "Karax", amon: false, units: [{ id: "sentinel", name: "Sentinel", category: "Units" }, { id: "energizer", name: "Energizer", category: "Units" }, { id: "immortal", name: "Immortal", category: "Units" }, { id: "colossus", name: "Colossus", category: "Units" }, { id: "mirage", name: "Mirage", category: "Units" }, { id: "carrier", name: "Carrier", category: "Units" }, { id: "photoncannon", name: "Photon Cannon", category: "Structures" }, { id: "khaydarinmonolith", name: "Khaydarin Monolith", category: "Structures" }, { id: "observer", name: "Observer", category: "Units" }, { id: "shieldbattery", name: "Shield Battery", category: "Structures" }] }, { id: "abathur", name: "Abathur", amon: false, units: [{ id: "roach", name: "Roach", category: "Units" }, { id: "ravager", name: "Ravager", category: "Units" }, { id: "swarmhost", name: "Swarm Host", category: "Units" }, { id: "locust", name: "Locust", category: "Units" }, { id: "mutalisk", name: "Mutalisk", category: "Units" }, { id: "guardian", name: "Guardian", category: "Units" }, { id: "devourer", name: "Devourer", category: "Units" }, { id: "viper", name: "Viper", category: "Units" }, { id: "swarmqueen", name: "Swarm Queen", category: "Units" }, { id: "brutalisk", name: "Brutalisk", category: "Heroes" }, { id: "leviathan", name: "Leviathan", category: "Heroes" }, { id: "spinecrawler", name: "Spine Crawler", category: "Structures" }, { id: "sporecrawler", name: "Spore Crawler", category: "Structures" }, { id: "overlord", name: "Overlord", category: "Units" }, { id: "overseer", name: "Overseer", category: "Units" }, { id: "broodling", name: "Broodling", category: "Units" }] }, { id: "alarak", name: "Alarak", amon: false, units: [{ id: "supplicant", name: "Supplicant", category: "Units" }, { id: "slayer", name: "Slayer", category: "Units" }, { id: "ascendant", name: "Ascendant", category: "Units" }, { id: "vanguard", name: "Vanguard", category: "Units" }, { id: "wrathwalker", name: "Wrathwalker", category: "Units" }, { id: "havoc", name: "Havoc", category: "Units" }, { id: "warprism", name: "War Prism", category: "Units" }, { id: "mothership", name: "Mothership", category: "Heroes" }, { id: "destroyer", name: "Destroyer", category: "Units" }, { id: "alarak", name: "Alarak", category: "Heroes" }, { id: "photoncannon", name: "Photon Cannon", category: "Structures" }] }, { id: "nova", name: "Nova", amon: false, units: [{ id: "elitemarine", name: "Elite Marine", category: "Units" }, { id: "maraudercommando", name: "Marauder Commando", category: "Units" }, { id: "specopsghost", name: "Spec Ops Ghost", category: "Units" }, { id: "hellbatranger", name: "Hellbat Ranger", category: "Units" }, { id: "hellionranger", name: "Hellion Ranger", category: "Units" }, { id: "strikegoliath", name: "Strike Goliath", category: "Units" }, { id: "heavysiegetank", name: "Heavy Siege Tank", category: "Units" }, { id: "raidliberator", name: "Raid Liberator", category: "Units" }, { id: "covertbanshee", name: "Covert Banshee", category: "Units" }, { id: "raventypeii", name: "Raven Type-II", category: "Units" }, { id: "nova", name: "Nova", category: "Heroes" }, { id: "railgunturret", name: "Railgun Turret", category: "Structures" }, { id: "missileturret", name: "Missile Turret", category: "Structures" }, { id: "holodecoy", name: "Holo Decoy", category: "Heroes" }, { id: "spidermine", name: "Spider Mine", category: "Structures" }] }, { id: "stukov", name: "Stukov", amon: false, units: [{ id: "infestedmarine", name: "Infested Marine", category: "Units" }, { id: "infestedtrooper", name: "Infested Trooper", category: "Units" }, { id: "infestedcivilian", name: "Infested Civilian", category: "Units" }, { id: "volatileinfested", name: "Volatile Infested", category: "Units" }, { id: "infestedbunker", name: "Infested Bunker", category: "Units" }, { id: "infesteddiamondback", name: "Infested Diamondback", category: "Units" }, { id: "infestedsiegetank", name: "Infested Siege Tank", category: "Units" }, { id: "infestedliberator", name: "Infested Liberator", category: "Units" }, { id: "infestedbanshee", name: "Infested Banshee", category: "Units" }, { id: "broodqueen", name: "Brood Queen", category: "Units" }, { id: "apocalisk", name: "Apocalisk", category: "Heroes" }, { id: "aleksander", name: "Aleksander", category: "Heroes" }, { id: "infestedmissileturret", name: "Infested Missile Turret", category: "Structures" }, { id: "overlord", name: "Overlord", category: "Units" }, { id: "overseer", name: "Overseer", category: "Units" }, { id: "broodling", name: "Broodling", category: "Units" }, { id: "flyingbroodling", name: "Flying Broodling", category: "Units" }] }, { id: "fenix", name: "Fenix", amon: false, units: [{ id: "legionnaire", name: "Legionnaire", category: "Units" }, { id: "adept", name: "Adept", category: "Units" }, { id: "conservator", name: "Conservator", category: "Units" }, { id: "immortal", name: "Immortal", category: "Units" }, { id: "colossus", name: "Colossus", category: "Units" }, { id: "disruptor", name: "Disruptor", category: "Units" }, { id: "scout", name: "Scout", category: "Units" }, { id: "carrier", name: "Carrier", category: "Units" }, { id: "kaldalis", name: "Kaldalis", category: "Heroes" }, { id: "talis", name: "Talis", category: "Heroes" }, { id: "taldarin", name: "Taldarin", category: "Heroes" }, { id: "warbringer", name: "Warbringer", category: "Heroes" }, { id: "mojo", name: "Mojo", category: "Heroes" }, { id: "clolarion", name: "Clolarion", category: "Heroes" }, { id: "fenixpraetorarmor", name: "Fenix Praetor Armor", category: "Heroes" }, { id: "fenixsolaritedragoon", name: "Fenix Solarite Dragoon", category: "Heroes" }, { id: "fenixcybrosarbiter", name: "Fenix Cybros Arbiter", category: "Heroes" }, { id: "photoncannon", name: "Photon Cannon", category: "Structures" }, { id: "observer", name: "Observer", category: "Units" }] }, { id: "dehaka", name: "Dehaka", amon: false, units: [{ id: "primalzergling", name: "Primal Zergling", category: "Units" }, { id: "ravasaur", name: "Ravasaur", category: "Units" }, { id: "primalroach", name: "Primal Roach", category: "Units" }, { id: "primaligniter", name: "Primal Igniter", category: "Units" }, { id: "primalguardian", name: "Primal Guardian", category: "Units" }, { id: "primalhydralisk", name: "Primal Hydralisk", category: "Units" }, { id: "primalmutalisk", name: "Primal Mutalisk", category: "Units" }, { id: "impaler", name: "Impaler", category: "Units" }, { id: "primalhost", name: "Primal Host", category: "Units" }, { id: "primallocust", name: "Primal Locust", category: "Units" }, { id: "creeperhost", name: "Creeper Host", category: "Units" }, { id: "explosivecreeper", name: "Explosive Creeper", category: "Units" }, { id: "primalultralisk", name: "Primal Ultralisk", category: "Units" }, { id: "tyrannozor", name: "Tyrannozor", category: "Units" }, { id: "greaterprimalwurm", name: "Greater Primal Wurm", category: "Units" }, { id: "glevig", name: "Glevig", category: "Heroes" }, { id: "murvar", name: "Murvar", category: "Heroes" }, { id: "dakrun", name: "Dakrun", category: "Heroes" }, { id: "primalwurm", name: "Primal Wurm", category: "Structures" }, { id: "primalhive", name: "Primal Hive", category: "Structures" }, { id: "primalwarden", name: "Primal Warden", category: "Structures" }, { id: "dehaka", name: "Dehaka", category: "Heroes" }] }, { id: "horner", name: "Han & Horner", amon: false, units: [{ id: "assaultgalleon", name: "Assault Galleon", category: "Units" }, { id: "hangarbay", name: "Hangar Bay", category: "Units", hidden: true }, { id: "reaper", name: "Reaper", category: "Units" }, { id: "widowmine", name: "Widow Mine", category: "Units" }, { id: "hellion", name: "Hellion", category: "Units" }, { id: "hellbat", name: "Hellbat", category: "Units" }, { id: "asteriawraith", name: "Asteria Wraith", category: "Units" }, { id: "deimosviking", name: "Deimos Viking", category: "Units" }, { id: "sovereignbattlecruiser", name: "Sovereign Battlecruiser", category: "Units" }, { id: "theiaraven", name: "Theia Raven", category: "Units" }, { id: "missileturret", name: "Missile Turret", category: "Structures" }] }, { id: "tychus", name: "Tychus", amon: false, units: [{ id: "tychus", name: "Tychus Findlay", category: "Heroes" }, { id: "crookedsam", name: "Crooked Sam", category: "Heroes" }, { id: "sirius", name: 'James "Sirius" Sykes', category: "Heroes" }, { id: "blaze", name: 'Miles "Blaze" Lewis', category: "Heroes" }, { id: "cannonball", name: 'Rob "Cannonball" Boswell', category: "Heroes" }, { id: "vega", name: "Vega", category: "Heroes" }, { id: "nux", name: "Nux", category: "Heroes" }, { id: "nikara", name: "Lt. Layna Nikara", category: "Heroes" }, { id: "autoturret", name: "Auto-Turret", category: "Structures" }, { id: "rattlesnake", name: 'Kev "Rattlesnake" West', category: "Heroes" }, { id: "odin", name: "Odin", category: "Heroes" }, { id: "warhoundturret", name: "Warhound Turret", category: "Structures" }] }, { id: "zeratul", name: "Zeratul", amon: false, units: [{ id: "xelnagaambusher", name: "Xel'Naga Ambusher", category: "Units" }, { id: "xelnagashieldguard", name: "Xel'Naga Shieldguard", category: "Units" }, { id: "voidtemplar", name: "Void Templar", category: "Units" }, { id: "xelnagaenforcer", name: "Xel'Naga Enforcer", category: "Units" }, { id: "xelnagaabrogator", name: "Xel'Naga Abrogator", category: "Units" }, { id: "xelnagavoidarray", name: "Xel'Naga Void Array", category: "Units" }, { id: "zealot", name: "Zealot", category: "Units" }, { id: "telbrus", name: "Telbrus", category: "Units" }, { id: "voidray", name: "Void Ray", category: "Units" }, { id: "zoraya", name: "Zoraya", category: "Units" }, { id: "darkarchon", name: "Dark Archon", category: "Units" }, { id: "serdath", name: "Serdath", category: "Units" }, { id: "zeratul", name: "Zeratul", category: "Heroes" }, { id: "tesseractcannon", name: "Tesseract Cannon", category: "Structures" }, { id: "xelnagawatcher", name: "Xel'Naga Watcher", category: "Units" }, { id: "tesseractmonolith", name: "Tesseract Monolith", category: "Structures" }, { id: "avatarofform", name: "Avatar of Form", category: "Heroes" }, { id: "avatarofessence", name: "Avatar of Essence", category: "Heroes" }, { id: "chargedcrystal", name: "Charged Crystal", category: "Units" }] }, { id: "stetmann", name: "Stetmann", amon: false, units: [{ id: "mechazergling", name: "Mecha Zergling", category: "Units" }, { id: "mechabaneling", name: "Mecha Baneling", category: "Units" }, { id: "mechahydralisk", name: "Mecha Hydralisk", category: "Units" }, { id: "mechalurker", name: "Mecha Lurker", category: "Units" }, { id: "mechacorruptor", name: "Mecha Corruptor", category: "Units" }, { id: "mechabattlecarrierlord", name: "Mecha Battlecarrier Lord", category: "Units" }, { id: "mechabroodling", name: "Mecha Broodling", category: "Units" }, { id: "mechainfestor", name: "Mecha Infestor", category: "Units" }, { id: "mecharoach", name: "Mecha Roach", category: "Units" }, { id: "mecharavager", name: "Mecha Ravager", category: "Units" }, { id: "mechaultralisk", name: "Mecha Ultralisk", category: "Units" }, { id: "gary", name: "Gary", category: "Heroes" }, { id: "supergary", name: "Super Gary", category: "Heroes" }, { id: "mechaspinecrawler", name: "Mecha Spine Crawler", category: "Structures" }, { id: "mechasporecrawler", name: "Mecha Spore Crawler", category: "Structures" }, { id: "mechaoverlord", name: "Mecha Overlord", category: "Units" }, { id: "mechaoverseer", name: "Mecha Overseer", category: "Units" }] }, { id: "mengsk", name: "Mengsk", amon: false, units: [{ id: "dominiontrooper", name: "Dom. Trooper", category: "Units" }, { id: "dominionassaulttrooper", name: "Dom. Assault Trooper", category: "Units" }, { id: "dominionflametrooper", name: "Dom. Flame Trooper", category: "Units" }, { id: "dominionrockettrooper", name: "Dom. Rocket Trooper", category: "Units" }, { id: "aegisguard", name: "Aegis Guard", category: "Units" }, { id: "emperorsshadow", name: "Emperor's Shadow", category: "Units" }, { id: "shockdivision", name: "Shock Division", category: "Units" }, { id: "blackhammer", name: "Blackhammer", category: "Units" }, { id: "skyfury", name: "Sky Fury", category: "Units" }, { id: "imperialintercessor", name: "Imperial Intercessor", category: "Units" }, { id: "imperialwitness", name: "Imperial Witness", category: "Units" }, { id: "prideofaugustgrad", name: "Pride of Augustgrad", category: "Units" }, { id: "missileturret", name: "Missile Turret", category: "Structures" }, { id: "earthsplitterordnance", name: "Earthsplitter Ordnance", category: "Structures" }, { id: "enthralledzergling", name: "Enthralled Zergling", category: "Units" }, { id: "enthralledhydralisk", name: "Enthralled Hydralisk", category: "Units" }, { id: "enthralledmutalisk", name: "Enthralled Mutalisk", category: "Units" }, { id: "enthralledultralisk", name: "Enthralled Ultralisk", category: "Units" }] }, { id: "protoss", name: "Protoss", amon: true, units: [{ id: "zealot", name: "Zealot", category: "Units" }, { id: "adept", name: "Adept", category: "Units" }, { id: "sentry", name: "Sentry", category: "Units" }, { id: "stalker", name: "Stalker", category: "Units" }, { id: "disruptor", name: "Disruptor", category: "Units" }, { id: "reaver", name: "Reaver", category: "Units" }, { id: "immortal", name: "Immortal", category: "Units" }, { id: "colossus", name: "Colossus", category: "Units" }, { id: "hightemplar", name: "High Templar", category: "Units" }, { id: "darktemplar", name: "Dark Templar", category: "Units" }, { id: "phoenix", name: "Phoenix", category: "Units" }, { id: "archon", name: "Archon", category: "Units" }, { id: "voidray", name: "Void Ray", category: "Units" }, { id: "tempest", name: "Tempest", category: "Units" }, { id: "carrier", name: "Carrier", category: "Units" }, { id: "scout", name: "Scout", category: "Units" }, { id: "oracle", name: "Oracle", category: "Units" }, { id: "warpprism", name: "Warp Prism", category: "Units" }, { id: "mothership", name: "Mothership", category: "Heroes" }, { id: "corsair", name: "Corsair", category: "Units" }, { id: "arbiter", name: "Arbiter", category: "Units" }, { id: "photoncannon", name: "Photon Cannon", category: "Structures" }, { id: "pylon", name: "Pylon", category: "Structures" }, { id: "dragoon", name: "Dragoon", category: "Units" }, { id: "observer", name: "Observer", category: "Units" }] }, { id: "terran", name: "Terran", amon: true, units: [{ id: "marine", name: "Marine", category: "Units" }, { id: "medic", name: "Medic", category: "Units" }, { id: "marauder", name: "Marauder", category: "Units" }, { id: "firebat", name: "Firebat", category: "Units" }, { id: "siegetank", name: "Siege Tank", category: "Units" }, { id: "goliath", name: "Goliath", category: "Units" }, { id: "cyclone", name: "Cyclone", category: "Units" }, { id: "reaper", name: "Reaper", category: "Units" }, { id: "thor", name: "Thor", category: "Units" }, { id: "hellbat", name: "Hellbat", category: "Units" }, { id: "hellion", name: "Hellion", category: "Units" }, { id: "viking", name: "Viking", category: "Units" }, { id: "sciencevessel", name: "Science Vessel", category: "Units" }, { id: "ghost", name: "Ghost", category: "Units" }, { id: "banshee", name: "Banshee", category: "Units" }, { id: "medivac", name: "Medivac", category: "Units" }, { id: "raven", name: "Raven", category: "Units" }, { id: "vulture", name: "Vulture", category: "Units" }, { id: "liberator", name: "Liberator", category: "Units" }, { id: "battlecruiser", name: "Battlecruiser", category: "Units" }, { id: "widowmine", name: "Widow Mine", category: "Units" }, { id: "warhound", name: "Warhound", category: "Units" }, { id: "loki", name: "Loki", category: "Heroes" }, { id: "diamondback", name: "Diamondback", category: "Units" }, { id: "wraith", name: "Wraith", category: "Units" }, { id: "hammersecurities", name: "Hammer Securities", category: "Units" }, { id: "shockdivision", name: "Shock Division", category: "Units" }, { id: "outbackhunter", name: "Outback Hunter", category: "Units" }, { id: "jacksonsrevenge", name: "Jackson's Revenge", category: "Units" }, { id: "spartancompany", name: "Spartan Company", category: "Units" }, { id: "deathhead", name: "Death Head", category: "Units" }, { id: "siegebreaker", name: "Siege Breaker", category: "Units" }, { id: "duskwings", name: "Dusk Wings", category: "Units" }, { id: "devildog", name: "Devil Dog", category: "Units" }, { id: "helsangel", name: "Hel's Angel", category: "Units" }, { id: "skibisangel", name: "Skibi's Angel", category: "Units" }, { id: "warpig", name: "War Pig", category: "Units" }, { id: "fieldresponsetheta", name: "Field Response Theta", category: "Units" }, { id: "sentrybot", name: "Sentry Bot", category: "Units" }, { id: "prideofaugustgrad", name: "Pride of Augustgrad", category: "Units" }, { id: "nightwolf", name: "Night Wolf", category: "Units" }, { id: "bunker", name: "Bunker", category: "Structures" }, { id: "missileturret", name: "Missile Turret", category: "Structures" }, { id: "widowminemutator", name: "Widow Mine Mutator", category: "Units" }, { id: "spidermine", name: "Spider Mine", category: "Units" }, { id: "combatshieldmarine", name: "Combat Shield Marine", category: "Units" }, { id: "mule", name: "MULE", category: "Units" }, { id: "aegisguard", name: "Aegis Guard", category: "Units" }, { id: "imperialintercessor", name: "Imperial Intercessor", category: "Units" }, { id: "skyfury", name: "Sky Fury", category: "Units" }, { id: "imperialwitness", name: "Imperial Witness", category: "Units" }, { id: "dominiontrooper", name: "Dominion Trooper", category: "Units" }] }, { id: "zerg", name: "Zerg", amon: true, units: [{ id: "brutalisk", name: "Brutalisk", category: "Heroes" }, { id: "leviathan", name: "Leviathan", category: "Heroes" }, { id: "zergling", name: "Zergling", category: "Units" }, { id: "roach", name: "Roach", category: "Units" }, { id: "hydralisk", name: "Hydralisk", category: "Units" }, { id: "baneling", name: "Baneling", category: "Units" }, { id: "aberration", name: "Aberration", category: "Units" }, { id: "lurker", name: "Lurker", category: "Units" }, { id: "swarmhost", name: "Swarm Host", category: "Units" }, { id: "ultralisk", name: "Ultralisk", category: "Units" }, { id: "mutalisk", name: "Mutalisk", category: "Units" }, { id: "broodlord", name: "Brood Lord", category: "Units" }, { id: "viper", name: "Viper", category: "Units" }, { id: "scourge", name: "Scourge", category: "Units" }, { id: "corruptor", name: "Corruptor", category: "Units" }, { id: "ravager", name: "Ravager", category: "Units" }, { id: "infestor", name: "Infestor", category: "Units" }, { id: "broodqueen", name: "Brood Queen", category: "Units" }, { id: "guardian", name: "Guardian", category: "Units" }, { id: "devourer", name: "Devourer", category: "Units" }, { id: "sporecrawler", name: "Spore Crawler", category: "Structures" }, { id: "spinecrawler", name: "Spine Crawler", category: "Structures" }, { id: "swarmqueen", name: "Swarm Queen", category: "Units" }, { id: "queen", name: "Queen", category: "Units" }, { id: "overseer", name: "Overseer", category: "Units" }, { id: "overlord", name: "Overlord", category: "Units" }, { id: "locust", name: "Locust", category: "Units" }, { id: "broodling", name: "Broodling", category: "Units" }] }, { id: "hybrid", name: "Hybrid", amon: true, units: [{ id: "hybriddominator", name: "Hybrid Dominator", category: "Heroes" }, { id: "hybridbehemoth", name: "Hybrid Behemoth", category: "Heroes" }, { id: "hybridreaver", name: "Hybrid Reaver", category: "Heroes" }, { id: "hybridnemesis", name: "Hybrid Nemesis", category: "Heroes" }, { id: "hybriddestroyer", name: "Hybrid Destroyer", category: "Heroes" }, { id: "hybridexperiment1a626", name: "Hybrid Experiment 1 A626 ", category: "Heroes" }, { id: "hybridexperiment29e57", name: "Hybrid Experiment 2 9E57", category: "Heroes" }, { id: "hybridexperiment3523i", name: "Hybrid Experiment 3 523I", category: "Heroes" }] }, { id: "infested", name: "Infested", amon: true, units: [{ id: "infestedterrandon", name: "Infested Terran DoN", category: "Units" }, { id: "infestedmarinedon", name: "Infested Marine DoN", category: "Units" }, { id: "kaboomer", name: "Kaboomer", category: "Heroes" }, { id: "spotter", name: "Spotter", category: "Heroes" }, { id: "hunterling", name: "Hunterling", category: "Heroes" }, { id: "choker", name: "Choker", category: "Heroes" }, { id: "stank", name: "Stank", category: "Heroes" }, { id: "infestedmarineme", name: "Infested Marine ME", category: "Units" }, { id: "infestedterranme", name: "Infested Terran ME", category: "Units" }, { id: "volatileinfestedme", name: "Volatile Infested ME", category: "Units" }, { id: "infestedsiegetank", name: "Infested Siege Tank", category: "Units" }, { id: "infestedbanshee", name: "Infested Banshee", category: "Units" }, { id: "infestedhammersecurities", name: "Infested Hammer Securities", category: "Units" }, { id: "herc", name: "HERC", category: "Units" }, { id: "infestedwarpig", name: "Infested War Pig", category: "Units" }, { id: "volatileinfesteddon", name: "Volatile Infested DoN", category: "Units" }, { id: "infesteddeathhead", name: "Infested Death Head", category: "Units" }, { id: "infestedbunker", name: "Infested Bunker", category: "Structures" }, { id: "infestedmissileturret", name: "Infested Missile Turret", category: "Structures" }, { id: "infesteddiamondback", name: "Infested Diamondback", category: "Units" }, { id: "infestedliberator", name: "Infested Liberator", category: "Units" }] }, { id: "objective", name: "Objective", amon: true, units: [{ id: "gatekeeperconstruct1", name: "Gatekeeper Construct 1", category: "Heroes" }, { id: "gatekeeperconstruct2", name: "Gatekeeper Construct 2", category: "Heroes" }, { id: "gatekeeperconstruct3", name: "Gatekeeper Construct 3", category: "Heroes" }, { id: "gatekeeperconstruct4", name: "Gatekeeper Construct 4", category: "Heroes" }, { id: "shuttle", name: "Shuttle", category: "Heroes" }, { id: "slaynelemental1", name: "Slayn Elemental 1", category: "Heroes" }, { id: "slaynelemental2", name: "Slayn Elemental 2", category: "Heroes" }, { id: "voidshard", name: "Void Shard", category: "Structures" }, { id: "piratecapitalship", name: "Pirate Capital Ship", category: "Heroes" }, { id: "extractiondevice", name: "Extraction Device", category: "Structures" }, { id: "gatekeeperconstructbonus", name: "Gatekeeper Construct Bonus", category: "Heroes" }, { id: "xelnagaconstruct", name: "Xel'Naga Construct", category: "Heroes" }, { id: "suppressiontower1", name: "Suppression Tower 1", category: "Structures" }, { id: "suppressiontower2", name: "Suppression Tower 2", category: "Structures" }, { id: "eradicator", name: "Eradicator", category: "Heroes" }, { id: "blightbringer", name: "Blightbringer", category: "Heroes" }, { id: "moebiustrain1", name: "Moebius Train 1", category: "Heroes" }, { id: "moebiustrain2", name: "Moebius Train 2", category: "Heroes" }, { id: "moebiustrain3", name: "Moebius Train 3", category: "Heroes" }, { id: "moebiustrainoebonus1", name: "Moebius Train OE Bonus 1", category: "Heroes" }, { id: "moebiustrain4", name: "Moebius Train 4", category: "Heroes" }, { id: "moebiustrain5", name: "Moebius Train 5", category: "Heroes" }, { id: "moebiustrain6", name: "Moebius Train 6", category: "Heroes" }, { id: "moebiustrainoebonus2", name: "Moebius Train OE Bonus 2", category: "Heroes" }, { id: "moebiustrain7", name: "Moebius Train 7", category: "Heroes" }, { id: "moebiustrain8", name: "Moebius Train 8", category: "Heroes" }, { id: "moebiustrainppbonus1", name: "Moebius Train PP Bonus 1", category: "Heroes" }, { id: "moebiustrainppbonus2", name: "Moebius Train PP Bonus 2", category: "Heroes" }, { id: "zenithstone", name: "Zenith Stone", category: "Units" }, { id: "voidthrashertotp1", name: "Void Thrasher TotP 1", category: "Heroes" }, { id: "voidthrashertotp2", name: "Void Thrasher TotP 2", category: "Heroes" }, { id: "voidthrashertotp3", name: "Void Thrasher TotP 3", category: "Heroes" }, { id: "voidthrashertotp4", name: "Void Thrasher TotP 4", category: "Heroes" }, { id: "voidsliver1", name: "Void Sliver 1", category: "Structures" }, { id: "voidsliver2", name: "Void Sliver 2", category: "Structures" }, { id: "voidsliver3", name: "Void Sliver 3", category: "Structures" }, { id: "voidsliver4", name: "Void Sliver 4", category: "Structures" }, { id: "voidsliver5", name: "Void Sliver 5", category: "Structures" }, { id: "deathgripcrystal", name: "Death Grip Crystal", category: "Heroes" }, { id: "moltensalamander", name: "Molten Salamander", category: "Heroes" }, { id: "voidthrashervt", name: "Void Thrasher VT", category: "Heroes" }, { id: "archangel", name: "Archangel", category: "Heroes" }, { id: "defensebot", name: "Defense Bot", category: "Units" }, { id: "virophage", name: "Virophage", category: "Structures" }] }, { id: "mutator", name: "Mutator", amon: true, units: [{ id: "voidrift", name: "Void Rift", category: "Structures" }, { id: "turkey", name: "Turkey", category: "Units" }, { id: "infestedturkey", name: "Infested Turkey", category: "Units" }, { id: "turking", name: "Turking", category: "Heroes" }, { id: "moebiuscorpslaserdrill", name: "Moebius Corps Laser Drill", category: "Structures" }, { id: "voidreanimator", name: "Void Reanimator", category: "Units" }, { id: "propagator", name: "Propagator", category: "Heroes" }, { id: "standardmissile", name: "Standard Missile", category: "Units" }, { id: "splittermissile", name: "Splitter Missile", category: "Units" }, { id: "pointdefensemissile", name: "Point Defense Missile", category: "Units" }, { id: "missilenuke", name: "Missile Nuke", category: "Units" }, { id: "artanis", name: "Artanis", category: "Heroes" }, { id: "dehaka", name: "Dehaka", category: "Heroes" }, { id: "dehakaspawn", name: "Dehaka Spawn", category: "Heroes" }, { id: "karax", name: "Karax", category: "Heroes" }, { id: "kerrigan", name: "Kerrigan", category: "Heroes" }, { id: "nova", name: "Nova", category: "Heroes" }, { id: "raynor", name: "Raynor", category: "Heroes" }, { id: "tychus", name: "Tychus", category: "Heroes" }, { id: "zagara", name: "Zagara", category: "Heroes" }, { id: "zeratul", name: "Zeratul", category: "Heroes" }, { id: "hunterkiller", name: "Hunter Killer", category: "Units" }] }];

  // source-data/unit-token.ts
  function unitToken(text) {
    if (text === "Dom. Trooper")
      return "dominiontrooper";
    if (text === "Dom. Assault Trooper")
      return "dominionassaulttrooper";
    if (text === "Dom. Flame Trooper")
      return "dominionflametrooper";
    if (text === "Dom. Rocket Trooper")
      return "dominionrockettrooper";
    if (text === "Tychus Findlay")
      return "tychus";
    if (text === 'James "Sirius" Sykes' || text === "James Sirius Sykes")
      return "sirius";
    if (text === 'Miles "Blaze" Lewis' || text === "Miles Blaze Lewis")
      return "blaze";
    if (text === 'Rob "Cannonball" Boswell' || text === "Rob Cannonball Boswell")
      return "cannonball";
    if (text === "Lt. Layna Nikara" || text === "Lt Layna Nikara")
      return "nikara";
    if (text === 'Kev "Rattlesnake" West' || text === "Kev Rattlesnake West")
      return "rattlesnake";
    return text.toLowerCase().replace(/[^a-z0-9]+/g, "");
  }
  // node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
  var f2 = 0;
  function u2(e, t, n, o, i, u) {
    t || (t = {});
    var a, c, p = t;
    if ("ref" in p)
      for (c in p = {}, t)
        c == "ref" ? a = t[c] : p[c] = t[c];
    var l2 = { type: e, props: p, key: n, ref: a, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: undefined, __v: --f2, __i: -1, __u: 0, __source: i, __self: u };
    if (typeof e == "function" && (a = e.defaultProps))
      for (c in a)
        p[c] === undefined && (p[c] = a[c]);
    return l.vnode && l.vnode(l2), l2;
  }

  // html/scripts/unit-navigation.tsx
  var unitNavigation = unit_navigation_default;
  function unitPageTitle(commander, unit) {
    const group = unitNavigation.find((group) => group.id === commander);
    const groupName = group && (group.amon ? `Amon ${group.name}` : group.name);
    const unitName = group?.units.find((entry) => entry.id === unit)?.name;
    const selection = unitName ? `${unitName} (${groupName})` : groupName;
    return `${selection ? `${selection} - ` : ""}Units - SC2 Co-op`;
  }

  class CommanderSelector extends C {
    render() {
      return /* @__PURE__ */ u2("td", {
        class: "units-commander-selector",
        children: [false, true].map((amon) => /* @__PURE__ */ u2(S, {
          children: [
            /* @__PURE__ */ u2("p", {
              class: "units-head",
              children: amon ? "Amon" : "Commanders"
            }, undefined, false, undefined, this),
            /* @__PURE__ */ u2("ul", {
              class: "units-nav",
              children: unitNavigation.filter((group) => group.amon === amon).map((group) => /* @__PURE__ */ u2("li", {
                children: /* @__PURE__ */ u2("a", {
                  href: `#${group.id}`,
                  "aria-selected": this.props.commander === group.id ? true : undefined,
                  children: [
                    !amon && /* @__PURE__ */ u2("img", {
                      src: `/images/commanderportraits/${group.id}portrait.png`,
                      alt: "",
                      width: "25",
                      height: "25"
                    }, undefined, false, undefined, this),
                    group.name
                  ]
                }, undefined, true, undefined, this)
              }, group.id, false, undefined, this))
            }, undefined, false, undefined, this)
          ]
        }, String(amon), true, undefined, this))
      }, undefined, false, undefined, this);
    }
  }

  class UnitSelector extends C {
    renderLink(name) {
      const unit = unitToken(name);
      return /* @__PURE__ */ u2("li", {
        children: /* @__PURE__ */ u2("a", {
          href: `#${this.props.commander}/${unit}`,
          "aria-selected": this.props.unit === unit ? true : undefined,
          onClick: this.props.onClickUnit,
          children: name
        }, undefined, false, undefined, this)
      }, unit, false, undefined, this);
    }
    render() {
      if (this.props.commander === null) {
        return /* @__PURE__ */ u2("td", {
          class: "units-unit-selector",
          children: /* @__PURE__ */ u2("p", {
            children: [
              /* @__PURE__ */ u2("big", {
                children: "←"
              }, undefined, false, undefined, this),
              " Select a commander"
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this);
      }
      const units = unitNavigation.find((group) => group.id === this.props.commander)?.units.filter((unit) => !unit.hidden) ?? [];
      return /* @__PURE__ */ u2("td", {
        class: "units-unit-selector",
        children: ["Units", "Heroes", "Structures"].flatMap((category) => {
          const entries = units.filter((unit) => unit.category === category);
          return entries.length ? [
            /* @__PURE__ */ u2("p", {
              class: "units-head",
              children: category
            }, `${category}-heading`, false, undefined, this),
            /* @__PURE__ */ u2("ul", {
              class: "units-nav",
              children: entries.map((unit) => this.renderLink(unit.name))
            }, category, false, undefined, this)
          ] : [];
        })
      }, undefined, false, undefined, this);
    }
  }

  // html/scripts/units-loader.tsx
  function loadUnitsScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
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

  class UnitsLoading extends C {
    table = M();
    state = {
      commander: null,
      unit: null,
      failed: false
    };
    componentDidMount() {
      window.addEventListener("hashchange", this.updateSelection);
      this.updateSelection();
    }
    componentWillUnmount() {
      window.removeEventListener("hashchange", this.updateSelection);
    }
    updateSelection = () => {
      const [commander, unit] = window.location.hash.slice(1).split("/");
      document.title = unitPageTitle(commander, unit);
      this.setState({ commander: commander || null, unit: unit || null });
    };
    onClickUnit = (event) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || !window.matchMedia("(max-width: 700px)").matches)
        return;
      requestAnimationFrame(() => this.table.current?.querySelector(".units-unit")?.scrollIntoView({ block: "start", inline: "start" }));
    };
    retry = async () => {
      this.setState({ failed: false });
      try {
        await this.props.load();
      } catch {
        this.setState({ failed: true });
      }
    };
    render() {
      const group = unitNavigation.find((group) => group.id === this.state.commander);
      const unit = group?.units.find((unit) => unit.id === this.state.unit);
      return /* @__PURE__ */ u2("table", {
        class: "units",
        ref: this.table,
        children: /* @__PURE__ */ u2("tr", {
          children: [
            /* @__PURE__ */ u2(CommanderSelector, {
              commander: this.state.commander
            }, undefined, false, undefined, this),
            /* @__PURE__ */ u2(UnitSelector, {
              commander: this.state.commander,
              unit: this.state.unit,
              onClickUnit: this.onClickUnit
            }, undefined, false, undefined, this),
            this.state.commander && /* @__PURE__ */ u2("td", {
              class: "units-unit",
              "aria-busy": !!this.state.unit && !this.state.failed,
              children: [
                unit && /* @__PURE__ */ u2("p", {
                  class: "units-head",
                  children: unit.name
                }, undefined, false, undefined, this),
                this.state.failed ? /* @__PURE__ */ u2("p", {
                  role: "alert",
                  children: [
                    "Unable to load unit stats. ",
                    /* @__PURE__ */ u2("button", {
                      type: "button",
                      onClick: this.retry,
                      children: "Retry"
                    }, undefined, false, undefined, this)
                  ]
                }, undefined, true, undefined, this) : this.state.unit ? /* @__PURE__ */ u2("p", {
                  role: "status",
                  children: "Loading..."
                }, undefined, false, undefined, this) : /* @__PURE__ */ u2("p", {
                  children: [
                    /* @__PURE__ */ u2("big", {
                      children: "←"
                    }, undefined, false, undefined, this),
                    " Select a unit"
                  ]
                }, undefined, true, undefined, this)
              ]
            }, undefined, true, undefined, this)
          ]
        }, undefined, true, undefined, this)
      }, undefined, false, undefined, this);
    }
  }
  if (typeof document !== "undefined") {
    const root = document.getElementById("units");
    const loadingRoot = document.createElement("div");
    root.append(loadingRoot);
    const loadingView = M();
    let tooltipsLoading;
    const load = async () => {
      tooltipsLoading ??= loadUnitsScript("/scripts/tooltips.js?v=215ce6").catch((error) => {
        tooltipsLoading = undefined;
        throw error;
      });
      await Promise.all([
        window.mountUnits ? Promise.resolve() : loadUnitsScript("/scripts/units.js?v=4dedf6"),
        tooltipsLoading
      ]);
      const mount = window.mountUnits;
      if (!mount)
        throw new Error("Unit stats did not initialize.");
      R(null, loadingRoot);
      const statsRoot = document.createElement("div");
      root.replaceChildren(statsRoot);
      mount(statsRoot);
    };
    R(/* @__PURE__ */ u2(UnitsLoading, {
      load,
      ref: loadingView
    }, undefined, false, undefined, this), loadingRoot);
    requestAnimationFrame(() => setTimeout(() => {
      loadingView.current?.retry();
    }, 0));
  }
})();

//# debugId=6969F68879CFC89C64756E2164756E21
//# sourceMappingURL=units-loader.js.map
