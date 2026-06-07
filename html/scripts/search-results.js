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

  // html/scripts/search-results.tsx
  var exports_search_results = {};

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
  function m(n2, l2) {
    for (var u2 in l2)
      n2[u2] = l2[u2];
    return n2;
  }
  function b(n2) {
    n2 && n2.parentNode && n2.parentNode.removeChild(n2);
  }
  function k(l2, u2, t2) {
    var i2, r2, o2, e2 = {};
    for (o2 in u2)
      o2 == "key" ? i2 = u2[o2] : o2 == "ref" ? r2 = u2[o2] : e2[o2] = u2[o2];
    if (arguments.length > 2 && (e2.children = arguments.length > 3 ? n.call(arguments, 2) : t2), typeof l2 == "function" && l2.defaultProps != null)
      for (o2 in l2.defaultProps)
        e2[o2] === undefined && (e2[o2] = l2.defaultProps[o2]);
    return x(l2, e2, i2, r2, null);
  }
  function x(n2, t2, i2, r2, o2) {
    var e2 = { type: n2, props: t2, key: i2, ref: r2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: undefined, __v: o2 == null ? ++u : o2, __i: -1, __u: 0 };
    return o2 == null && l.vnode != null && l.vnode(e2), e2;
  }
  function S(n2) {
    return n2.children;
  }
  function C(n2, l2) {
    this.props = n2, this.context = l2;
  }
  function $(n2, l2) {
    if (l2 == null)
      return n2.__ ? $(n2.__, n2.__i + 1) : null;
    for (var u2;l2 < n2.__k.length; l2++)
      if ((u2 = n2.__k[l2]) != null && u2.__e != null)
        return u2.__e;
    return typeof n2.type == "function" ? $(n2) : null;
  }
  function I(n2) {
    if (n2.__P && n2.__d) {
      var u2 = n2.__v, t2 = u2.__e, i2 = [], r2 = [], o2 = m({}, u2);
      o2.__v = u2.__v + 1, l.vnode && l.vnode(o2), q(n2.__P, o2, u2, n2.__n, n2.__P.namespaceURI, 32 & u2.__u ? [t2] : null, i2, t2 == null ? $(u2) : t2, !!(32 & u2.__u), r2), o2.__v = u2.__v, o2.__.__k[o2.__i] = o2, D(i2, o2, r2), u2.__e = u2.__ = null, o2.__e != t2 && P(o2);
    }
  }
  function P(n2) {
    if ((n2 = n2.__) != null && n2.__c != null)
      return n2.__e = n2.__c.base = null, n2.__k.some(function(l2) {
        if (l2 != null && l2.__e != null)
          return n2.__e = n2.__c.base = l2.__e;
      }), P(n2);
  }
  function A(n2) {
    (!n2.__d && (n2.__d = true) && i.push(n2) && !H.__r++ || r != l.debounceRendering) && ((r = l.debounceRendering) || o)(H);
  }
  function H() {
    try {
      for (var n2, l2 = 1;i.length; )
        i.length > l2 && i.sort(e), n2 = i.shift(), l2 = i.length, I(n2);
    } finally {
      i.length = H.__r = 0;
    }
  }
  function L(n2, l2, u2, t2, i2, r2, o2, e2, f2, c2, s2) {
    var a2, h2, p2, v2, y2, _2, g2, m2 = t2 && t2.__k || w, b2 = l2.length;
    for (f2 = T(u2, l2, m2, f2, b2), a2 = 0;a2 < b2; a2++)
      (p2 = u2.__k[a2]) != null && (h2 = p2.__i != -1 && m2[p2.__i] || d, p2.__i = a2, _2 = q(n2, p2, h2, i2, r2, o2, e2, f2, c2, s2), v2 = p2.__e, p2.ref && h2.ref != p2.ref && (h2.ref && J(h2.ref, null, p2), s2.push(p2.ref, p2.__c || v2, p2)), y2 == null && v2 != null && (y2 = v2), (g2 = !!(4 & p2.__u)) || h2.__k === p2.__k ? (f2 = j(p2, f2, n2, g2), g2 && h2.__e && (h2.__e = null)) : typeof p2.type == "function" && _2 !== undefined ? f2 = _2 : v2 && (f2 = v2.nextSibling), p2.__u &= -7);
    return u2.__e = y2, f2;
  }
  function T(n2, l2, u2, t2, i2) {
    var r2, o2, e2, f2, c2, s2 = u2.length, a2 = s2, h2 = 0;
    for (n2.__k = new Array(i2), r2 = 0;r2 < i2; r2++)
      (o2 = l2[r2]) != null && typeof o2 != "boolean" && typeof o2 != "function" ? (typeof o2 == "string" || typeof o2 == "number" || typeof o2 == "bigint" || o2.constructor == String ? o2 = n2.__k[r2] = x(null, o2, null, null, null) : g(o2) ? o2 = n2.__k[r2] = x(S, { children: o2 }, null, null, null) : o2.constructor === undefined && o2.__b > 0 ? o2 = n2.__k[r2] = x(o2.type, o2.props, o2.key, o2.ref ? o2.ref : null, o2.__v) : n2.__k[r2] = o2, f2 = r2 + h2, o2.__ = n2, o2.__b = n2.__b + 1, e2 = null, (c2 = o2.__i = O(o2, u2, f2, a2)) != -1 && (a2--, (e2 = u2[c2]) && (e2.__u |= 2)), e2 == null || e2.__v == null ? (c2 == -1 && (i2 > s2 ? h2-- : i2 < s2 && h2++), typeof o2.type != "function" && (o2.__u |= 4)) : c2 != f2 && (c2 == f2 - 1 ? h2-- : c2 == f2 + 1 ? h2++ : (c2 > f2 ? h2-- : h2++, o2.__u |= 4))) : n2.__k[r2] = null;
    if (a2)
      for (r2 = 0;r2 < s2; r2++)
        (e2 = u2[r2]) != null && (2 & e2.__u) == 0 && (e2.__e == t2 && (t2 = $(e2)), K(e2, e2));
    return t2;
  }
  function j(n2, l2, u2, t2) {
    var i2, r2;
    if (typeof n2.type == "function") {
      for (i2 = n2.__k, r2 = 0;i2 && r2 < i2.length; r2++)
        i2[r2] && (i2[r2].__ = n2, l2 = j(i2[r2], l2, u2, t2));
      return l2;
    }
    n2.__e != l2 && (t2 && (l2 && n2.type && !l2.parentNode && (l2 = $(n2)), u2.insertBefore(n2.__e, l2 || null)), l2 = n2.__e);
    do {
      l2 = l2 && l2.nextSibling;
    } while (l2 != null && l2.nodeType == 8);
    return l2;
  }
  function O(n2, l2, u2, t2) {
    var i2, r2, o2, e2 = n2.key, f2 = n2.type, c2 = l2[u2], s2 = c2 != null && (2 & c2.__u) == 0;
    if (c2 === null && e2 == null || s2 && e2 == c2.key && f2 == c2.type)
      return u2;
    if (t2 > (s2 ? 1 : 0)) {
      for (i2 = u2 - 1, r2 = u2 + 1;i2 >= 0 || r2 < l2.length; )
        if ((c2 = l2[o2 = i2 >= 0 ? i2-- : r2++]) != null && (2 & c2.__u) == 0 && e2 == c2.key && f2 == c2.type)
          return o2;
    }
    return -1;
  }
  function z(n2, l2, u2) {
    l2[0] == "-" ? n2.setProperty(l2, u2 == null ? "" : u2) : n2[l2] = u2 == null ? "" : typeof u2 != "number" || _.test(l2) ? u2 : u2 + "px";
  }
  function N(n2, l2, u2, t2, i2) {
    var r2, o2;
    n:
      if (l2 == "style")
        if (typeof u2 == "string")
          n2.style.cssText = u2;
        else {
          if (typeof t2 == "string" && (n2.style.cssText = t2 = ""), t2)
            for (l2 in t2)
              u2 && l2 in u2 || z(n2.style, l2, "");
          if (u2)
            for (l2 in u2)
              t2 && u2[l2] == t2[l2] || z(n2.style, l2, u2[l2]);
        }
      else if (l2[0] == "o" && l2[1] == "n")
        r2 = l2 != (l2 = l2.replace(a, "$1")), o2 = l2.toLowerCase(), l2 = o2 in n2 || l2 == "onFocusOut" || l2 == "onFocusIn" ? o2.slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + r2] = u2, u2 ? t2 ? u2[s] = t2[s] : (u2[s] = h, n2.addEventListener(l2, r2 ? v : p, r2)) : n2.removeEventListener(l2, r2 ? v : p, r2);
      else {
        if (i2 == "http://www.w3.org/2000/svg")
          l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (l2 != "width" && l2 != "height" && l2 != "href" && l2 != "list" && l2 != "form" && l2 != "tabIndex" && l2 != "download" && l2 != "rowSpan" && l2 != "colSpan" && l2 != "role" && l2 != "popover" && l2 in n2)
          try {
            n2[l2] = u2 == null ? "" : u2;
            break n;
          } catch (n3) {}
        typeof u2 == "function" || (u2 == null || u2 === false && l2[4] != "-" ? n2.removeAttribute(l2) : n2.setAttribute(l2, l2 == "popover" && u2 == 1 ? "" : u2));
      }
  }
  function V(n2) {
    return function(u2) {
      if (this.l) {
        var t2 = this.l[u2.type + n2];
        if (u2[c] == null)
          u2[c] = h++;
        else if (u2[c] < t2[s])
          return;
        return t2(l.event ? l.event(u2) : u2);
      }
    };
  }
  function q(n2, u2, t2, i2, r2, o2, e2, f2, c2, s2) {
    var a2, h2, p2, v2, y2, d2, _2, k2, x2, M, $2, I2, P2, A2, H2, T2 = u2.type;
    if (u2.constructor !== undefined)
      return null;
    128 & t2.__u && (c2 = !!(32 & t2.__u), o2 = [f2 = u2.__e = t2.__e]), (a2 = l.__b) && a2(u2);
    n:
      if (typeof T2 == "function")
        try {
          if (k2 = u2.props, x2 = T2.prototype && T2.prototype.render, M = (a2 = T2.contextType) && i2[a2.__c], $2 = a2 ? M ? M.props.value : a2.__ : i2, t2.__c ? _2 = (h2 = u2.__c = t2.__c).__ = h2.__E : (x2 ? u2.__c = h2 = new T2(k2, $2) : (u2.__c = h2 = new C(k2, $2), h2.constructor = T2, h2.render = Q), M && M.sub(h2), h2.state || (h2.state = {}), h2.__n = i2, p2 = h2.__d = true, h2.__h = [], h2._sb = []), x2 && h2.__s == null && (h2.__s = h2.state), x2 && T2.getDerivedStateFromProps != null && (h2.__s == h2.state && (h2.__s = m({}, h2.__s)), m(h2.__s, T2.getDerivedStateFromProps(k2, h2.__s))), v2 = h2.props, y2 = h2.state, h2.__v = u2, p2)
            x2 && T2.getDerivedStateFromProps == null && h2.componentWillMount != null && h2.componentWillMount(), x2 && h2.componentDidMount != null && h2.__h.push(h2.componentDidMount);
          else {
            if (x2 && T2.getDerivedStateFromProps == null && k2 !== v2 && h2.componentWillReceiveProps != null && h2.componentWillReceiveProps(k2, $2), u2.__v == t2.__v || !h2.__e && h2.shouldComponentUpdate != null && h2.shouldComponentUpdate(k2, h2.__s, $2) === false) {
              u2.__v != t2.__v && (h2.props = k2, h2.state = h2.__s, h2.__d = false), u2.__e = t2.__e, u2.__k = t2.__k, u2.__k.some(function(n3) {
                n3 && (n3.__ = u2);
              }), w.push.apply(h2.__h, h2._sb), h2._sb = [], h2.__h.length && e2.push(h2);
              break n;
            }
            h2.componentWillUpdate != null && h2.componentWillUpdate(k2, h2.__s, $2), x2 && h2.componentDidUpdate != null && h2.__h.push(function() {
              h2.componentDidUpdate(v2, y2, d2);
            });
          }
          if (h2.context = $2, h2.props = k2, h2.__P = n2, h2.__e = false, I2 = l.__r, P2 = 0, x2)
            h2.state = h2.__s, h2.__d = false, I2 && I2(u2), a2 = h2.render(h2.props, h2.state, h2.context), w.push.apply(h2.__h, h2._sb), h2._sb = [];
          else
            do {
              h2.__d = false, I2 && I2(u2), a2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s;
            } while (h2.__d && ++P2 < 25);
          h2.state = h2.__s, h2.getChildContext != null && (i2 = m(m({}, i2), h2.getChildContext())), x2 && !p2 && h2.getSnapshotBeforeUpdate != null && (d2 = h2.getSnapshotBeforeUpdate(v2, y2)), A2 = a2 != null && a2.type === S && a2.key == null ? E(a2.props.children) : a2, f2 = L(n2, g(A2) ? A2 : [A2], u2, t2, i2, r2, o2, e2, f2, c2, s2), h2.base = u2.__e, u2.__u &= -161, h2.__h.length && e2.push(h2), _2 && (h2.__E = h2.__ = null);
        } catch (n3) {
          if (u2.__v = null, c2 || o2 != null)
            if (n3.then) {
              for (u2.__u |= c2 ? 160 : 128;f2 && f2.nodeType == 8 && f2.nextSibling; )
                f2 = f2.nextSibling;
              o2[o2.indexOf(f2)] = null, u2.__e = f2;
            } else {
              for (H2 = o2.length;H2--; )
                b(o2[H2]);
              B(u2);
            }
          else
            u2.__e = t2.__e, u2.__k = t2.__k, n3.then || B(u2);
          l.__e(n3, u2, t2);
        }
      else
        o2 == null && u2.__v == t2.__v ? (u2.__k = t2.__k, u2.__e = t2.__e) : f2 = u2.__e = G(t2.__e, u2, t2, i2, r2, o2, e2, c2, s2);
    return (a2 = l.diffed) && a2(u2), 128 & u2.__u ? undefined : f2;
  }
  function B(n2) {
    n2 && (n2.__c && (n2.__c.__e = true), n2.__k && n2.__k.some(B));
  }
  function D(n2, u2, t2) {
    for (var i2 = 0;i2 < t2.length; i2++)
      J(t2[i2], t2[++i2], t2[++i2]);
    l.__c && l.__c(u2, n2), n2.some(function(u3) {
      try {
        n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
          n3.call(u3);
        });
      } catch (n3) {
        l.__e(n3, u3.__v);
      }
    });
  }
  function E(n2) {
    return typeof n2 != "object" || n2 == null || n2.__b > 0 ? n2 : g(n2) ? n2.map(E) : m({}, n2);
  }
  function G(u2, t2, i2, r2, o2, e2, f2, c2, s2) {
    var a2, h2, p2, v2, y2, w2, _2, m2 = i2.props || d, k2 = t2.props, x2 = t2.type;
    if (x2 == "svg" ? o2 = "http://www.w3.org/2000/svg" : x2 == "math" ? o2 = "http://www.w3.org/1998/Math/MathML" : o2 || (o2 = "http://www.w3.org/1999/xhtml"), e2 != null) {
      for (a2 = 0;a2 < e2.length; a2++)
        if ((y2 = e2[a2]) && "setAttribute" in y2 == !!x2 && (x2 ? y2.localName == x2 : y2.nodeType == 3)) {
          u2 = y2, e2[a2] = null;
          break;
        }
    }
    if (u2 == null) {
      if (x2 == null)
        return document.createTextNode(k2);
      u2 = document.createElementNS(o2, x2, k2.is && k2), c2 && (l.__m && l.__m(t2, e2), c2 = false), e2 = null;
    }
    if (x2 == null)
      m2 === k2 || c2 && u2.data == k2 || (u2.data = k2);
    else {
      if (e2 = e2 && n.call(u2.childNodes), !c2 && e2 != null)
        for (m2 = {}, a2 = 0;a2 < u2.attributes.length; a2++)
          m2[(y2 = u2.attributes[a2]).name] = y2.value;
      for (a2 in m2)
        y2 = m2[a2], a2 == "dangerouslySetInnerHTML" ? p2 = y2 : a2 == "children" || (a2 in k2) || a2 == "value" && ("defaultValue" in k2) || a2 == "checked" && ("defaultChecked" in k2) || N(u2, a2, null, y2, o2);
      for (a2 in k2)
        y2 = k2[a2], a2 == "children" ? v2 = y2 : a2 == "dangerouslySetInnerHTML" ? h2 = y2 : a2 == "value" ? w2 = y2 : a2 == "checked" ? _2 = y2 : c2 && typeof y2 != "function" || m2[a2] === y2 || N(u2, a2, y2, m2[a2], o2);
      if (h2)
        c2 || p2 && (h2.__html == p2.__html || h2.__html == u2.innerHTML) || (u2.innerHTML = h2.__html), t2.__k = [];
      else if (p2 && (u2.innerHTML = ""), L(t2.type == "template" ? u2.content : u2, g(v2) ? v2 : [v2], t2, i2, r2, x2 == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o2, e2, f2, e2 ? e2[0] : i2.__k && $(i2, 0), c2, s2), e2 != null)
        for (a2 = e2.length;a2--; )
          b(e2[a2]);
      c2 || (a2 = "value", x2 == "progress" && w2 == null ? u2.removeAttribute("value") : w2 != null && (w2 !== u2[a2] || x2 == "progress" && !w2 || x2 == "option" && w2 != m2[a2]) && N(u2, a2, w2, m2[a2], o2), a2 = "checked", _2 != null && _2 != u2[a2] && N(u2, a2, _2, m2[a2], o2));
    }
    return u2;
  }
  function J(n2, u2, t2) {
    try {
      if (typeof n2 == "function") {
        var i2 = typeof n2.__u == "function";
        i2 && n2.__u(), i2 && u2 == null || (n2.__u = n2(u2));
      } else
        n2.current = u2;
    } catch (n3) {
      l.__e(n3, t2);
    }
  }
  function K(n2, u2, t2) {
    var i2, r2;
    if (l.unmount && l.unmount(n2), (i2 = n2.ref) && (i2.current && i2.current != n2.__e || J(i2, null, u2)), (i2 = n2.__c) != null) {
      if (i2.componentWillUnmount)
        try {
          i2.componentWillUnmount();
        } catch (n3) {
          l.__e(n3, u2);
        }
      i2.base = i2.__P = null;
    }
    if (i2 = n2.__k)
      for (r2 = 0;r2 < i2.length; r2++)
        i2[r2] && K(i2[r2], u2, t2 || typeof n2.type != "function");
    t2 || b(n2.__e), n2.__c = n2.__ = n2.__e = undefined;
  }
  function Q(n2, l2, u2) {
    return this.constructor(n2, u2);
  }
  function R(u2, t2, i2) {
    var r2, o2, e2, f2;
    t2 == document && (t2 = document.documentElement), l.__ && l.__(u2, t2), o2 = (r2 = typeof i2 == "function") ? null : i2 && i2.__k || t2.__k, e2 = [], f2 = [], q(t2, u2 = (!r2 && i2 || t2).__k = k(S, null, [u2]), o2 || d, d, t2.namespaceURI, !r2 && i2 ? [i2] : o2 ? null : t2.firstChild ? n.call(t2.childNodes) : null, e2, !r2 && i2 ? i2 : o2 ? o2.__e : t2.firstChild, r2, f2), D(e2, u2, f2);
  }
  n = w.slice, l = { __e: function(n2, l2, u2, t2) {
    for (var i2, r2, o2;l2 = l2.__; )
      if ((i2 = l2.__c) && !i2.__)
        try {
          if ((r2 = i2.constructor) && r2.getDerivedStateFromError != null && (i2.setState(r2.getDerivedStateFromError(n2)), o2 = i2.__d), i2.componentDidCatch != null && (i2.componentDidCatch(n2, t2 || {}), o2 = i2.__d), o2)
            return i2.__E = i2;
        } catch (l3) {
          n2 = l3;
        }
    throw n2;
  } }, u = 0, t = function(n2) {
    return n2 != null && n2.constructor === undefined;
  }, C.prototype.setState = function(n2, l2) {
    var u2;
    u2 = this.__s != null && this.__s != this.state ? this.__s : this.__s = m({}, this.state), typeof n2 == "function" && (n2 = n2(m({}, u2), this.props)), n2 && m(u2, n2), n2 != null && this.__v && (l2 && this._sb.push(l2), A(this));
  }, C.prototype.forceUpdate = function(n2) {
    this.__v && (this.__e = true, n2 && this.__h.push(n2), A(this));
  }, C.prototype.render = S, i = [], o = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e = function(n2, l2) {
    return n2.__v.__b - l2.__v.__b;
  }, H.__r = 0, f = Math.random().toString(8), c = "__d" + f, s = "__a" + f, a = /(PointerCapture)$|Capture$/i, h = 0, p = V(false), v = V(true), y = 0;

  // node_modules/fuse.js/dist/fuse.mjs
  function isArray(value) {
    return !Array.isArray ? getTag(value) === "[object Array]" : Array.isArray(value);
  }
  function baseToString(value) {
    if (typeof value == "string") {
      return value;
    }
    if (typeof value === "bigint") {
      return value.toString();
    }
    const result = value + "";
    return result == "0" && 1 / value == -Infinity ? "-0" : result;
  }
  function toString(value) {
    return value == null ? "" : baseToString(value);
  }
  function isString(value) {
    return typeof value === "string";
  }
  function isNumber(value) {
    return typeof value === "number";
  }
  function isBoolean(value) {
    return value === true || value === false || isObjectLike(value) && getTag(value) == "[object Boolean]";
  }
  function isObject(value) {
    return typeof value === "object";
  }
  function isObjectLike(value) {
    return isObject(value) && value !== null;
  }
  function isDefined(value) {
    return value !== undefined && value !== null;
  }
  function isBlank(value) {
    return !value.trim().length;
  }
  function getTag(value) {
    return value == null ? value === undefined ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(value);
  }
  var INCORRECT_INDEX_TYPE = "Incorrect 'index' type";
  var INVALID_DOC_INDEX = "Invalid doc index: must be a non-negative integer within the bounds of the docs array";
  var LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY = (key) => `Invalid value for key ${key}`;
  var PATTERN_LENGTH_TOO_LARGE = (max) => `Pattern length exceeds max of ${max}.`;
  var MISSING_KEY_PROPERTY = (name) => `Missing ${name} property in key`;
  var INVALID_KEY_WEIGHT_VALUE = (key) => `Property 'weight' in key '${key}' must be a positive integer`;
  var FUSE_MATCH_TOKEN_SEARCH_UNSUPPORTED = `Fuse.match does not support useTokenSearch: token search requires ` + `corpus-level statistics (df, fieldCount) that a one-off string ` + `comparison does not have. Use new Fuse(...).search(...) instead.`;
  var hasOwn = Object.prototype.hasOwnProperty;

  class KeyStore {
    constructor(keys) {
      this._keys = [];
      this._keyMap = {};
      let totalWeight = 0;
      keys.forEach((key) => {
        const obj = createKey(key);
        this._keys.push(obj);
        this._keyMap[obj.id] = obj;
        totalWeight += obj.weight;
      });
      this._keys.forEach((key) => {
        key.weight /= totalWeight;
      });
    }
    get(keyId) {
      return this._keyMap[keyId];
    }
    keys() {
      return this._keys;
    }
    toJSON() {
      return JSON.stringify(this._keys);
    }
  }
  function createKey(key) {
    let path = null;
    let id = null;
    let src = null;
    let weight = 1;
    let getFn = null;
    if (isString(key) || isArray(key)) {
      src = key;
      path = createKeyPath(key);
      id = createKeyId(key);
    } else {
      if (!hasOwn.call(key, "name")) {
        throw new Error(MISSING_KEY_PROPERTY("name"));
      }
      const name = key.name;
      src = name;
      if (hasOwn.call(key, "weight") && key.weight !== undefined) {
        weight = key.weight;
        if (weight <= 0) {
          throw new Error(INVALID_KEY_WEIGHT_VALUE(createKeyId(name)));
        }
      }
      path = createKeyPath(name);
      id = createKeyId(name);
      getFn = key.getFn ?? null;
    }
    return {
      path,
      id,
      weight,
      src,
      getFn
    };
  }
  function createKeyPath(key) {
    return isArray(key) ? key : key.split(".");
  }
  function createKeyId(key) {
    return isArray(key) ? key.join(".") : key;
  }
  function get(obj, path) {
    const list = [];
    let arr = false;
    const deepGet = (obj2, path2, index, arrayIndex) => {
      if (!isDefined(obj2)) {
        return;
      }
      if (!path2[index]) {
        list.push(arrayIndex !== undefined ? {
          v: obj2,
          i: arrayIndex
        } : obj2);
      } else {
        const key = path2[index];
        const value = obj2[key];
        if (!isDefined(value)) {
          return;
        }
        if (index === path2.length - 1 && (isString(value) || isNumber(value) || isBoolean(value) || typeof value === "bigint")) {
          list.push(arrayIndex !== undefined ? {
            v: toString(value),
            i: arrayIndex
          } : toString(value));
        } else if (isArray(value)) {
          arr = true;
          for (let i2 = 0, len = value.length;i2 < len; i2 += 1) {
            deepGet(value[i2], path2, index + 1, i2);
          }
        } else if (path2.length) {
          deepGet(value, path2, index + 1, arrayIndex);
        }
      }
    };
    deepGet(obj, isString(path) ? path.split(".") : path, 0);
    return arr ? list : list[0];
  }
  var MatchOptions = {
    includeMatches: false,
    findAllMatches: false,
    minMatchCharLength: 1
  };
  var BasicOptions = {
    isCaseSensitive: false,
    ignoreDiacritics: false,
    includeScore: false,
    keys: [],
    shouldSort: true,
    sortFn: (a2, b2) => a2.score === b2.score ? a2.idx < b2.idx ? -1 : 1 : a2.score < b2.score ? -1 : 1
  };
  var FuzzyOptions = {
    location: 0,
    threshold: 0.6,
    distance: 100
  };
  var AdvancedOptions = {
    useExtendedSearch: false,
    useTokenSearch: false,
    tokenize: undefined,
    tokenMatch: "any",
    getFn: get,
    ignoreLocation: false,
    ignoreFieldNorm: false,
    fieldNormWeight: 1
  };
  var Config = Object.freeze({
    ...BasicOptions,
    ...MatchOptions,
    ...FuzzyOptions,
    ...AdvancedOptions
  });
  function norm(weight = 1, mantissa = 3) {
    const cache = new Map;
    const m2 = Math.pow(10, mantissa);
    return {
      get(value) {
        let numTokens = 1;
        let inSpace = false;
        for (let i2 = 0;i2 < value.length; i2++) {
          if (value.charCodeAt(i2) === 32) {
            if (!inSpace) {
              numTokens++;
              inSpace = true;
            }
          } else {
            inSpace = false;
          }
        }
        if (cache.has(numTokens)) {
          return cache.get(numTokens);
        }
        const n2 = Math.round(m2 / Math.pow(numTokens, 0.5 * weight)) / m2;
        cache.set(numTokens, n2);
        return n2;
      },
      clear() {
        cache.clear();
      }
    };
  }

  class FuseIndex {
    constructor({
      getFn = Config.getFn,
      fieldNormWeight = Config.fieldNormWeight
    } = {}) {
      this.norm = norm(fieldNormWeight, 3);
      this.getFn = getFn;
      this.isCreated = false;
      this.docs = [];
      this.keys = [];
      this._keysMap = {};
      this.setIndexRecords();
    }
    setSources(docs = []) {
      this.docs = docs;
    }
    setIndexRecords(records = []) {
      this.records = records;
    }
    setKeys(keys = []) {
      this.keys = keys;
      this._keysMap = {};
      keys.forEach((key, idx) => {
        this._keysMap[key.id] = idx;
      });
    }
    create() {
      if (this.isCreated || !this.docs.length) {
        return;
      }
      this.isCreated = true;
      const len = this.docs.length;
      this.records = new Array(len);
      let recordCount = 0;
      if (isString(this.docs[0])) {
        for (let i2 = 0;i2 < len; i2++) {
          const record = this._createStringRecord(this.docs[i2], i2);
          if (record) {
            this.records[recordCount++] = record;
          }
        }
      } else {
        for (let i2 = 0;i2 < len; i2++) {
          this.records[recordCount++] = this._createObjectRecord(this.docs[i2], i2);
        }
      }
      this.records.length = recordCount;
      this.norm.clear();
    }
    add(doc, docIndex) {
      if (!Number.isInteger(docIndex) || docIndex < 0) {
        throw new Error(INVALID_DOC_INDEX);
      }
      if (isString(doc)) {
        const record2 = this._createStringRecord(doc, docIndex);
        if (record2) {
          this.records.push(record2);
        }
        return record2;
      }
      const record = this._createObjectRecord(doc, docIndex);
      this.records.push(record);
      return record;
    }
    removeAt(idx) {
      if (!Number.isInteger(idx) || idx < 0) {
        throw new Error(INVALID_DOC_INDEX);
      }
      for (let i2 = 0, len = this.records.length;i2 < len; i2 += 1) {
        if (this.records[i2].i === idx) {
          this.records.splice(i2, 1);
          break;
        }
      }
      for (let i2 = 0, len = this.records.length;i2 < len; i2 += 1) {
        if (this.records[i2].i > idx) {
          this.records[i2].i -= 1;
        }
      }
    }
    removeAll(indices) {
      const toRemove = new Set;
      for (const v2 of indices) {
        if (Number.isInteger(v2) && v2 >= 0) {
          toRemove.add(v2);
        }
      }
      if (toRemove.size === 0) {
        return;
      }
      this.records = this.records.filter((r2) => !toRemove.has(r2.i));
      const sorted = Array.from(toRemove).sort((a2, b2) => a2 - b2);
      for (const record of this.records) {
        let lo = 0;
        let hi = sorted.length;
        while (lo < hi) {
          const mid = lo + hi >>> 1;
          if (sorted[mid] < record.i)
            lo = mid + 1;
          else
            hi = mid;
        }
        record.i -= lo;
      }
    }
    getValueForItemAtKeyId(item, keyId) {
      return item[this._keysMap[keyId]];
    }
    size() {
      return this.records.length;
    }
    _createStringRecord(doc, docIndex) {
      if (!isDefined(doc) || isBlank(doc)) {
        return null;
      }
      return {
        v: doc,
        i: docIndex,
        n: this.norm.get(doc)
      };
    }
    _createObjectRecord(doc, docIndex) {
      const record = {
        i: docIndex,
        $: {}
      };
      for (let keyIndex = 0, keyLen = this.keys.length;keyIndex < keyLen; keyIndex++) {
        const key = this.keys[keyIndex];
        const value = key.getFn ? key.getFn(doc) : this.getFn(doc, key.path);
        if (!isDefined(value)) {
          continue;
        }
        if (isArray(value)) {
          const subRecords = [];
          for (let i2 = 0, len = value.length;i2 < len; i2 += 1) {
            const item = value[i2];
            if (!isDefined(item)) {
              continue;
            }
            if (isString(item)) {
              if (!isBlank(item)) {
                const subRecord = {
                  v: item,
                  i: i2,
                  n: this.norm.get(item)
                };
                subRecords.push(subRecord);
              }
            } else if (isDefined(item.v)) {
              const text = isString(item.v) ? item.v : toString(item.v);
              if (!isBlank(text)) {
                const subRecord = {
                  v: text,
                  i: item.i,
                  n: this.norm.get(text)
                };
                subRecords.push(subRecord);
              }
            }
          }
          record.$[keyIndex] = subRecords;
        } else if (isString(value) && !isBlank(value)) {
          const subRecord = {
            v: value,
            n: this.norm.get(value)
          };
          record.$[keyIndex] = subRecord;
        }
      }
      return record;
    }
    toJSON() {
      return {
        keys: this.keys.map(({
          getFn,
          ...key
        }) => key),
        records: this.records
      };
    }
  }
  function createIndex(keys, docs, {
    getFn = Config.getFn,
    fieldNormWeight = Config.fieldNormWeight
  } = {}) {
    const myIndex = new FuseIndex({
      getFn,
      fieldNormWeight
    });
    myIndex.setKeys(keys.map(createKey));
    myIndex.setSources(docs);
    myIndex.create();
    return myIndex;
  }
  function parseIndex(data, {
    getFn = Config.getFn,
    fieldNormWeight = Config.fieldNormWeight
  } = {}) {
    const {
      keys,
      records
    } = data;
    const myIndex = new FuseIndex({
      getFn,
      fieldNormWeight
    });
    myIndex.setKeys(keys);
    myIndex.setIndexRecords(records);
    return myIndex;
  }
  function convertMaskToIndices(matchmask = [], minMatchCharLength = Config.minMatchCharLength) {
    const indices = [];
    let start = -1;
    let end = -1;
    let i2 = 0;
    for (let len = matchmask.length;i2 < len; i2 += 1) {
      const match = matchmask[i2];
      if (match && start === -1) {
        start = i2;
      } else if (!match && start !== -1) {
        end = i2 - 1;
        if (end - start + 1 >= minMatchCharLength) {
          indices.push([start, end]);
        }
        start = -1;
      }
    }
    if (matchmask[i2 - 1] && i2 - start >= minMatchCharLength) {
      indices.push([start, i2 - 1]);
    }
    return indices;
  }
  var MAX_BITS = 32;
  function search(text, pattern, patternAlphabet, {
    location = Config.location,
    distance = Config.distance,
    threshold = Config.threshold,
    findAllMatches = Config.findAllMatches,
    minMatchCharLength = Config.minMatchCharLength,
    includeMatches = Config.includeMatches,
    ignoreLocation = Config.ignoreLocation
  } = {}) {
    if (pattern.length > MAX_BITS) {
      throw new Error(PATTERN_LENGTH_TOO_LARGE(MAX_BITS));
    }
    const patternLen = pattern.length;
    const textLen = text.length;
    const expectedLocation = Math.max(0, Math.min(location, textLen));
    let currentThreshold = threshold;
    let bestLocation = expectedLocation;
    const calcScore = (errors, currentLocation) => {
      const accuracy = errors / patternLen;
      if (ignoreLocation)
        return accuracy;
      const proximity = Math.abs(expectedLocation - currentLocation);
      if (!distance)
        return proximity ? 1 : accuracy;
      return accuracy + proximity / distance;
    };
    const computeMatches = minMatchCharLength > 1 || includeMatches;
    const matchMask = computeMatches ? Array(textLen) : [];
    let index;
    while ((index = text.indexOf(pattern, bestLocation)) > -1) {
      const score = calcScore(0, index);
      currentThreshold = Math.min(score, currentThreshold);
      bestLocation = index + patternLen;
      if (computeMatches) {
        let i2 = 0;
        while (i2 < patternLen) {
          matchMask[index + i2] = 1;
          i2 += 1;
        }
      }
    }
    bestLocation = -1;
    let lastBitArr = [];
    let finalScore = 1;
    let bestErrors = 0;
    let binMax = patternLen + textLen;
    const mask = 1 << patternLen - 1;
    for (let i2 = 0;i2 < patternLen; i2 += 1) {
      let binMin = 0;
      let binMid = binMax;
      while (binMin < binMid) {
        const score2 = calcScore(i2, expectedLocation + binMid);
        if (score2 <= currentThreshold) {
          binMin = binMid;
        } else {
          binMax = binMid;
        }
        binMid = Math.floor((binMax - binMin) / 2 + binMin);
      }
      binMax = binMid;
      let start = Math.max(1, expectedLocation - binMid + 1);
      const finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen;
      const bitArr = Array(finish + 2);
      bitArr[finish + 1] = (1 << i2) - 1;
      for (let j2 = finish;j2 >= start; j2 -= 1) {
        const currentLocation = j2 - 1;
        const charMatch = patternAlphabet[text[currentLocation]];
        bitArr[j2] = (bitArr[j2 + 1] << 1 | 1) & charMatch;
        if (i2) {
          bitArr[j2] |= (lastBitArr[j2 + 1] | lastBitArr[j2]) << 1 | 1 | lastBitArr[j2 + 1];
        }
        if (bitArr[j2] & mask) {
          finalScore = calcScore(i2, currentLocation);
          if (finalScore <= currentThreshold) {
            currentThreshold = finalScore;
            bestLocation = currentLocation;
            bestErrors = i2;
            if (bestLocation <= expectedLocation) {
              break;
            }
            start = Math.max(1, 2 * expectedLocation - bestLocation);
          }
        }
      }
      const score = calcScore(i2 + 1, expectedLocation);
      if (score > currentThreshold) {
        break;
      }
      lastBitArr = bitArr;
    }
    if (computeMatches && bestLocation >= 0) {
      const matchEnd = Math.min(textLen - 1, bestLocation + patternLen - 1 + bestErrors);
      for (let k2 = bestLocation;k2 <= matchEnd; k2 += 1) {
        if (patternAlphabet[text[k2]]) {
          matchMask[k2] = 1;
        }
      }
    }
    const result = {
      isMatch: bestLocation >= 0,
      score: Math.max(0.001, finalScore)
    };
    if (computeMatches) {
      const indices = convertMaskToIndices(matchMask, minMatchCharLength);
      if (!indices.length) {
        result.isMatch = false;
      } else if (includeMatches) {
        result.indices = indices;
      }
    }
    return result;
  }
  function createPatternAlphabet(pattern) {
    const mask = {};
    for (let i2 = 0, len = pattern.length;i2 < len; i2 += 1) {
      const char = pattern.charAt(i2);
      mask[char] = (mask[char] || 0) | 1 << len - i2 - 1;
    }
    return mask;
  }
  function mergeIndices(indices) {
    if (indices.length <= 1)
      return indices;
    indices.sort((a2, b2) => a2[0] - b2[0] || a2[1] - b2[1]);
    const merged = [indices[0]];
    for (let i2 = 1, len = indices.length;i2 < len; i2 += 1) {
      const last = merged[merged.length - 1];
      const curr = indices[i2];
      if (curr[0] <= last[1] + 1) {
        last[1] = Math.max(last[1], curr[1]);
      } else {
        merged.push(curr);
      }
    }
    return merged;
  }
  var NON_DECOMPOSABLE_MAP = {
    "ł": "l",
    "Ł": "L",
    "đ": "d",
    "Đ": "D",
    "ø": "o",
    "Ø": "O",
    "ħ": "h",
    "Ħ": "H",
    "ŧ": "t",
    "Ŧ": "T",
    "ı": "i",
    "ß": "ss"
  };
  var NON_DECOMPOSABLE_RE = new RegExp("[" + Object.keys(NON_DECOMPOSABLE_MAP).join("") + "]", "g");
  var stripDiacritics = typeof String.prototype.normalize === "function" ? (str) => str.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "").replace(NON_DECOMPOSABLE_RE, (ch) => NON_DECOMPOSABLE_MAP[ch]) : (str) => str;

  class BitapSearch {
    constructor(pattern, {
      location = Config.location,
      threshold = Config.threshold,
      distance = Config.distance,
      includeMatches = Config.includeMatches,
      findAllMatches = Config.findAllMatches,
      minMatchCharLength = Config.minMatchCharLength,
      isCaseSensitive = Config.isCaseSensitive,
      ignoreDiacritics = Config.ignoreDiacritics,
      ignoreLocation = Config.ignoreLocation
    } = {}) {
      this.options = {
        location,
        threshold,
        distance,
        includeMatches,
        findAllMatches,
        minMatchCharLength,
        isCaseSensitive,
        ignoreDiacritics,
        ignoreLocation
      };
      pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
      pattern = ignoreDiacritics ? stripDiacritics(pattern) : pattern;
      this.pattern = pattern;
      this.chunks = [];
      if (!this.pattern.length) {
        return;
      }
      const addChunk = (pattern2, startIndex) => {
        this.chunks.push({
          pattern: pattern2,
          alphabet: createPatternAlphabet(pattern2),
          startIndex
        });
      };
      const len = this.pattern.length;
      if (len > MAX_BITS) {
        let i2 = 0;
        const remainder = len % MAX_BITS;
        const end = len - remainder;
        while (i2 < end) {
          addChunk(this.pattern.substr(i2, MAX_BITS), i2);
          i2 += MAX_BITS;
        }
        if (remainder) {
          const startIndex = len - MAX_BITS;
          addChunk(this.pattern.substr(startIndex), startIndex);
        }
      } else {
        addChunk(this.pattern, 0);
      }
    }
    searchIn(text) {
      const {
        isCaseSensitive,
        ignoreDiacritics,
        includeMatches
      } = this.options;
      text = isCaseSensitive ? text : text.toLowerCase();
      text = ignoreDiacritics ? stripDiacritics(text) : text;
      if (this.pattern === text) {
        const result2 = {
          isMatch: true,
          score: 0
        };
        if (includeMatches) {
          result2.indices = [[0, text.length - 1]];
        }
        return result2;
      }
      const {
        location,
        distance,
        threshold,
        findAllMatches,
        minMatchCharLength,
        ignoreLocation
      } = this.options;
      const allIndices = [];
      let totalScore = 0;
      let hasMatches = false;
      this.chunks.forEach(({
        pattern,
        alphabet,
        startIndex
      }) => {
        const {
          isMatch,
          score,
          indices
        } = search(text, pattern, alphabet, {
          location: location + startIndex,
          distance,
          threshold,
          findAllMatches,
          minMatchCharLength,
          includeMatches,
          ignoreLocation
        });
        if (isMatch) {
          hasMatches = true;
        }
        totalScore += score;
        if (isMatch && indices) {
          allIndices.push(...indices);
        }
      });
      const result = {
        isMatch: hasMatches,
        score: hasMatches ? totalScore / this.chunks.length : 1
      };
      if (hasMatches && includeMatches) {
        result.indices = mergeIndices(allIndices);
      }
      return result;
    }
  }
  var MULTI_MATCH_TYPES = new Set(["fuzzy", "include"]);
  function isInverse(type) {
    return type.startsWith("inverse");
  }
  var matchers = [
    {
      type: "exact",
      multiRegex: /^="(.*)"$/,
      singleRegex: /^=(.*)$/,
      create: (pattern) => ({
        type: "exact",
        search(text) {
          const isMatch = text === pattern;
          return {
            isMatch,
            score: isMatch ? 0 : 1,
            indices: [0, pattern.length - 1]
          };
        }
      })
    },
    {
      type: "include",
      multiRegex: /^'"(.*)"$/,
      singleRegex: /^'(.*)$/,
      create: (pattern) => ({
        type: "include",
        search(text) {
          let location = 0;
          let index;
          const indices = [];
          const patternLen = pattern.length;
          while ((index = text.indexOf(pattern, location)) > -1) {
            location = index + patternLen;
            indices.push([index, location - 1]);
          }
          const isMatch = !!indices.length;
          return {
            isMatch,
            score: isMatch ? 0 : 1,
            indices
          };
        }
      })
    },
    {
      type: "prefix-exact",
      multiRegex: /^\^"(.*)"$/,
      singleRegex: /^\^(.*)$/,
      create: (pattern) => ({
        type: "prefix-exact",
        search(text) {
          const isMatch = text.startsWith(pattern);
          return {
            isMatch,
            score: isMatch ? 0 : 1,
            indices: [0, pattern.length - 1]
          };
        }
      })
    },
    {
      type: "inverse-prefix-exact",
      multiRegex: /^!\^"(.*)"$/,
      singleRegex: /^!\^(.*)$/,
      create: (pattern) => ({
        type: "inverse-prefix-exact",
        search(text) {
          const isMatch = !text.startsWith(pattern);
          return {
            isMatch,
            score: isMatch ? 0 : 1,
            indices: [0, text.length - 1]
          };
        }
      })
    },
    {
      type: "inverse-suffix-exact",
      multiRegex: /^!"(.*)"\$$/,
      singleRegex: /^!(.*)\$$/,
      create: (pattern) => ({
        type: "inverse-suffix-exact",
        search(text) {
          const isMatch = !text.endsWith(pattern);
          return {
            isMatch,
            score: isMatch ? 0 : 1,
            indices: [0, text.length - 1]
          };
        }
      })
    },
    {
      type: "suffix-exact",
      multiRegex: /^"(.*)"\$$/,
      singleRegex: /^(.*)\$$/,
      create: (pattern) => ({
        type: "suffix-exact",
        search(text) {
          const isMatch = text.endsWith(pattern);
          return {
            isMatch,
            score: isMatch ? 0 : 1,
            indices: [text.length - pattern.length, text.length - 1]
          };
        }
      })
    },
    {
      type: "inverse-exact",
      multiRegex: /^!"(.*)"$/,
      singleRegex: /^!(.*)$/,
      create: (pattern) => ({
        type: "inverse-exact",
        search(text) {
          const isMatch = text.indexOf(pattern) === -1;
          return {
            isMatch,
            score: isMatch ? 0 : 1,
            indices: [0, text.length - 1]
          };
        }
      })
    },
    {
      type: "fuzzy",
      multiRegex: /^"(.*)"$/,
      singleRegex: /^(.*)$/,
      create: (pattern, options = {}) => {
        const bitap = new BitapSearch(pattern, {
          location: options.location ?? Config.location,
          threshold: options.threshold ?? Config.threshold,
          distance: options.distance ?? Config.distance,
          includeMatches: options.includeMatches ?? Config.includeMatches,
          findAllMatches: options.findAllMatches ?? Config.findAllMatches,
          minMatchCharLength: options.minMatchCharLength ?? Config.minMatchCharLength,
          isCaseSensitive: options.isCaseSensitive ?? Config.isCaseSensitive,
          ignoreDiacritics: options.ignoreDiacritics ?? Config.ignoreDiacritics,
          ignoreLocation: options.ignoreLocation ?? Config.ignoreLocation
        });
        return {
          type: "fuzzy",
          search(text) {
            return bitap.searchIn(text);
          }
        };
      }
    }
  ];
  var matchersLen = matchers.length;
  var ESCAPED_PIPE = "\x00";
  var OR_TOKEN = "|";
  function tokenize(pattern) {
    const tokens = [];
    const len = pattern.length;
    let i2 = 0;
    while (i2 < len) {
      while (i2 < len && pattern[i2] === " ")
        i2++;
      if (i2 >= len)
        break;
      let j2 = i2;
      while (j2 < len && pattern[j2] !== " " && pattern[j2] !== '"')
        j2++;
      if (j2 < len && pattern[j2] === '"') {
        j2++;
        while (j2 < len) {
          if (pattern[j2] === '"') {
            const next = j2 + 1;
            if (next >= len || pattern[next] === " ") {
              j2++;
              break;
            }
            if (pattern[next] === "$" && (next + 1 >= len || pattern[next + 1] === " ")) {
              j2 += 2;
              break;
            }
          }
          j2++;
        }
        tokens.push(pattern.substring(i2, j2));
        i2 = j2;
      } else {
        while (j2 < len && pattern[j2] !== " ")
          j2++;
        tokens.push(pattern.substring(i2, j2));
        i2 = j2;
      }
    }
    return tokens;
  }
  function getMatch(pattern, exp) {
    const matches = pattern.match(exp);
    return matches ? matches[1] : null;
  }
  function parseQuery(pattern, options = {}) {
    const escaped = pattern.replace(/\\\|/g, ESCAPED_PIPE);
    return escaped.split(OR_TOKEN).map((item) => {
      const restored = item.replace(/\u0000/g, "|");
      const query = tokenize(restored.trim()).filter((item2) => item2 && !!item2.trim());
      const results = [];
      for (let i2 = 0, len = query.length;i2 < len; i2 += 1) {
        const queryItem = query[i2];
        let found = false;
        let idx = -1;
        while (!found && ++idx < matchersLen) {
          const def = matchers[idx];
          const token = getMatch(queryItem, def.multiRegex);
          if (token) {
            results.push(def.create(token, options));
            found = true;
          }
        }
        if (found) {
          continue;
        }
        idx = -1;
        while (++idx < matchersLen) {
          const def = matchers[idx];
          const token = getMatch(queryItem, def.singleRegex);
          if (token) {
            results.push(def.create(token, options));
            break;
          }
        }
      }
      return results;
    });
  }

  class ExtendedSearch {
    constructor(pattern, {
      isCaseSensitive = Config.isCaseSensitive,
      ignoreDiacritics = Config.ignoreDiacritics,
      includeMatches = Config.includeMatches,
      minMatchCharLength = Config.minMatchCharLength,
      ignoreLocation = Config.ignoreLocation,
      findAllMatches = Config.findAllMatches,
      location = Config.location,
      threshold = Config.threshold,
      distance = Config.distance
    } = {}) {
      this.query = null;
      this.options = {
        isCaseSensitive,
        ignoreDiacritics,
        includeMatches,
        minMatchCharLength,
        findAllMatches,
        ignoreLocation,
        location,
        threshold,
        distance
      };
      pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
      pattern = ignoreDiacritics ? stripDiacritics(pattern) : pattern;
      this.pattern = pattern;
      this.query = parseQuery(this.pattern, this.options);
    }
    static condition(_2, options) {
      return options.useExtendedSearch;
    }
    searchIn(text) {
      const query = this.query;
      if (!query) {
        return {
          isMatch: false,
          score: 1
        };
      }
      const {
        includeMatches,
        isCaseSensitive,
        ignoreDiacritics
      } = this.options;
      text = isCaseSensitive ? text : text.toLowerCase();
      text = ignoreDiacritics ? stripDiacritics(text) : text;
      let numMatches = 0;
      const allIndices = [];
      let totalScore = 0;
      let hasInverse = false;
      for (let i2 = 0, qLen = query.length;i2 < qLen; i2 += 1) {
        const searchers = query[i2];
        allIndices.length = 0;
        numMatches = 0;
        hasInverse = false;
        for (let j2 = 0, pLen = searchers.length;j2 < pLen; j2 += 1) {
          const matcher = searchers[j2];
          const {
            isMatch,
            indices,
            score
          } = matcher.search(text);
          if (isMatch) {
            numMatches += 1;
            totalScore += score;
            if (isInverse(matcher.type)) {
              hasInverse = true;
            }
            if (includeMatches) {
              if (MULTI_MATCH_TYPES.has(matcher.type)) {
                allIndices.push(...indices);
              } else {
                allIndices.push(indices);
              }
            }
          } else {
            totalScore = 0;
            numMatches = 0;
            allIndices.length = 0;
            hasInverse = false;
            break;
          }
        }
        if (numMatches) {
          const result = {
            isMatch: true,
            score: totalScore / numMatches
          };
          if (hasInverse) {
            result.hasInverse = true;
          }
          if (includeMatches) {
            result.indices = mergeIndices(allIndices);
          }
          return result;
        }
      }
      return {
        isMatch: false,
        score: 1
      };
    }
  }
  var registeredSearchers = [];
  function register(...args) {
    registeredSearchers.push(...args);
  }
  function createSearcher(pattern, options) {
    for (let i2 = 0, len = registeredSearchers.length;i2 < len; i2 += 1) {
      const searcherClass = registeredSearchers[i2];
      if (searcherClass.condition(pattern, options)) {
        return new searcherClass(pattern, options);
      }
    }
    return new BitapSearch(pattern, options);
  }
  var LogicalOperator = {
    AND: "$and",
    OR: "$or"
  };
  var KeyType = {
    PATH: "$path",
    PATTERN: "$val"
  };
  var isExpression = (query) => !!(query[LogicalOperator.AND] || query[LogicalOperator.OR]);
  var isPath = (query) => !!query[KeyType.PATH];
  var isLeaf = (query) => !isArray(query) && isObject(query) && !isExpression(query);
  var convertToExplicit = (query) => ({
    [LogicalOperator.AND]: Object.keys(query).map((key) => ({
      [key]: query[key]
    }))
  });
  function parse(query, options, {
    auto = true
  } = {}) {
    const next = (query2) => {
      if (isString(query2)) {
        const obj = {
          keyId: null,
          pattern: query2
        };
        if (auto) {
          obj.searcher = createSearcher(query2, options);
        }
        return obj;
      }
      const keys = Object.keys(query2);
      const isQueryPath = isPath(query2);
      if (!isQueryPath && keys.length > 1 && !isExpression(query2)) {
        return next(convertToExplicit(query2));
      }
      if (isLeaf(query2)) {
        const key = isQueryPath ? query2[KeyType.PATH] : keys[0];
        const pattern = isQueryPath ? query2[KeyType.PATTERN] : query2[key];
        if (!isString(pattern)) {
          throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key));
        }
        const obj = {
          keyId: createKeyId(key),
          pattern
        };
        if (auto) {
          obj.searcher = createSearcher(pattern, options);
        }
        return obj;
      }
      const node = {
        children: [],
        operator: keys[0]
      };
      keys.forEach((key) => {
        const value = query2[key];
        if (isArray(value)) {
          value.forEach((item) => {
            node.children.push(next(item));
          });
        }
      });
      return node;
    };
    if (!isExpression(query)) {
      query = convertToExplicit(query);
    }
    return next(query);
  }
  function computeScoreSingle(matches, {
    ignoreFieldNorm = Config.ignoreFieldNorm
  }) {
    let totalScore = 1;
    matches.forEach(({
      key,
      norm: norm2,
      score
    }) => {
      const weight = key ? key.weight : null;
      totalScore *= Math.pow(score === 0 && weight ? Number.EPSILON : score, (weight || 1) * (ignoreFieldNorm ? 1 : norm2));
    });
    return totalScore;
  }
  function computeScore(results, {
    ignoreFieldNorm = Config.ignoreFieldNorm
  }) {
    results.forEach((result) => {
      result.score = computeScoreSingle(result.matches, {
        ignoreFieldNorm
      });
    });
  }

  class MaxHeap {
    constructor(limit) {
      this.limit = limit;
      this.heap = [];
    }
    get size() {
      return this.heap.length;
    }
    shouldInsert(score) {
      return this.size < this.limit || score < this.heap[0].score;
    }
    insert(item) {
      if (this.size < this.limit) {
        this.heap.push(item);
        this._bubbleUp(this.size - 1);
      } else if (item.score < this.heap[0].score) {
        this.heap[0] = item;
        this._sinkDown(0);
      }
    }
    extractSorted(sortFn) {
      return this.heap.sort(sortFn);
    }
    _bubbleUp(i2) {
      const heap = this.heap;
      while (i2 > 0) {
        const parent = i2 - 1 >> 1;
        if (heap[i2].score <= heap[parent].score)
          break;
        const tmp = heap[i2];
        heap[i2] = heap[parent];
        heap[parent] = tmp;
        i2 = parent;
      }
    }
    _sinkDown(i2) {
      const heap = this.heap;
      const len = heap.length;
      let largest = i2;
      do {
        i2 = largest;
        const left = 2 * i2 + 1;
        const right = 2 * i2 + 2;
        if (left < len && heap[left].score > heap[largest].score) {
          largest = left;
        }
        if (right < len && heap[right].score > heap[largest].score) {
          largest = right;
        }
        if (largest !== i2) {
          const tmp = heap[i2];
          heap[i2] = heap[largest];
          heap[largest] = tmp;
        }
      } while (largest !== i2);
    }
  }
  function formatMatches(result) {
    const matches = [];
    result.matches.forEach((match) => {
      if (!isDefined(match.indices) || !match.indices.length) {
        return;
      }
      const obj = {
        indices: match.indices,
        value: match.value
      };
      if (match.key) {
        obj.key = match.key.id;
      }
      if (match.idx > -1) {
        obj.refIndex = match.idx;
      }
      matches.push(obj);
    });
    return matches;
  }
  function format(results, docs, {
    includeMatches = Config.includeMatches,
    includeScore = Config.includeScore
  } = {}) {
    return results.map((result) => {
      const {
        idx
      } = result;
      const data = {
        item: docs[idx],
        refIndex: idx
      };
      if (includeMatches)
        data.matches = formatMatches(result);
      if (includeScore)
        data.score = result.score;
      return data;
    });
  }
  var DEFAULT_TOKEN = /[\p{L}\p{M}\p{N}_]+/gu;
  var warned = new WeakSet;
  function warnNonGlobal(regex) {
    if (!warned.has(regex)) {
      warned.add(regex);
      console.warn(`[Fuse] tokenize regex ${regex} lacks the global flag; only the ` + `first match per text will be returned. Add the 'g' flag.`);
    }
  }
  function resolveTokenize(tokenize2) {
    if (typeof tokenize2 === "function") {
      let validated = false;
      return (text) => {
        const result = tokenize2(text);
        if (!validated) {
          validated = true;
          if (!Array.isArray(result) || result.some((t2) => typeof t2 !== "string")) {
            throw new Error(`[Fuse] tokenize function must return string[]; received ${Array.isArray(result) ? "array containing non-strings" : typeof result}.`);
          }
        }
        return result;
      };
    }
    if (tokenize2 instanceof RegExp) {
      if (!tokenize2.global)
        warnNonGlobal(tokenize2);
      return (text) => text.match(tokenize2) || [];
    }
    return (text) => text.match(DEFAULT_TOKEN) || [];
  }
  function createAnalyzer({
    isCaseSensitive = false,
    ignoreDiacritics = false,
    tokenize: tokenize2
  } = {}) {
    const tokenizeFn = resolveTokenize(tokenize2);
    return {
      tokenize(text) {
        if (!isCaseSensitive) {
          text = text.toLowerCase();
        }
        if (ignoreDiacritics) {
          text = stripDiacritics(text);
        }
        return tokenizeFn(text);
      }
    };
  }
  var MAX_MASK_TERMS = 31;

  class TokenSearch {
    static condition(_2, options) {
      return options.useTokenSearch;
    }
    constructor(pattern, options) {
      this.options = options;
      this.analyzer = createAnalyzer({
        isCaseSensitive: options.isCaseSensitive,
        ignoreDiacritics: options.ignoreDiacritics,
        tokenize: options.tokenize
      });
      const queryTerms = this.analyzer.tokenize(pattern);
      const invertedIndex = options._invertedIndex;
      const {
        df,
        fieldCount
      } = invertedIndex;
      this.termSearchers = [];
      this.idfWeights = [];
      for (const term of queryTerms) {
        this.termSearchers.push(new BitapSearch(term, {
          location: options.location,
          threshold: options.threshold,
          distance: options.distance,
          includeMatches: options.includeMatches,
          findAllMatches: options.findAllMatches,
          minMatchCharLength: options.minMatchCharLength,
          isCaseSensitive: options.isCaseSensitive,
          ignoreDiacritics: options.ignoreDiacritics,
          ignoreLocation: true
        }));
        const docFreq = df.get(term) || 0;
        const idf = Math.log(1 + (fieldCount - docFreq + 0.5) / (docFreq + 0.5));
        this.idfWeights.push(idf);
      }
      this.combineAll = options.tokenMatch === "all";
      this.numTerms = this.termSearchers.length;
      this.useMask = this.numTerms <= MAX_MASK_TERMS;
    }
    searchIn(text) {
      if (!this.termSearchers.length) {
        return {
          isMatch: false,
          score: 1
        };
      }
      const allIndices = [];
      let weightedScore = 0;
      let maxPossibleScore = 0;
      let matchedCount = 0;
      let matchedMask = 0;
      const matchedTerms = this.combineAll && !this.useMask ? new Set : null;
      for (let i2 = 0;i2 < this.termSearchers.length; i2++) {
        const result = this.termSearchers[i2].searchIn(text);
        const idf = this.idfWeights[i2];
        maxPossibleScore += idf;
        if (result.isMatch) {
          matchedCount++;
          weightedScore += idf * (1 - result.score);
          if (result.indices) {
            allIndices.push(...result.indices);
          }
          if (this.combineAll) {
            if (this.useMask) {
              matchedMask |= 1 << i2;
            } else {
              matchedTerms.add(i2);
            }
          }
        }
      }
      if (matchedCount === 0) {
        return {
          isMatch: false,
          score: 1
        };
      }
      const normalized = maxPossibleScore > 0 ? 1 - weightedScore / maxPossibleScore : 0;
      const searchResult = {
        isMatch: true,
        score: Math.max(0.001, normalized)
      };
      if (this.options.includeMatches && allIndices.length) {
        searchResult.indices = mergeIndices(allIndices);
      }
      if (this.combineAll) {
        if (this.useMask) {
          searchResult.matchedMask = matchedMask;
        } else {
          searchResult.matchedTerms = matchedTerms;
        }
        searchResult.termCount = this.numTerms;
      }
      return searchResult;
    }
  }
  function addField(index, text, docIdx, analyzer) {
    const tokens = analyzer.tokenize(text);
    if (!tokens.length)
      return;
    index.fieldCount++;
    index.docFieldCount.set(docIdx, (index.docFieldCount.get(docIdx) || 0) + 1);
    const distinctTerms = new Set(tokens);
    let perDocTerms = index.docTermFieldHits.get(docIdx);
    if (!perDocTerms) {
      perDocTerms = new Map;
      index.docTermFieldHits.set(docIdx, perDocTerms);
    }
    for (const term of distinctTerms) {
      perDocTerms.set(term, (perDocTerms.get(term) || 0) + 1);
      index.df.set(term, (index.df.get(term) || 0) + 1);
    }
  }
  function ingestRecord(index, record, keyCount, analyzer) {
    const {
      i: docIdx,
      v: v2,
      $: fields
    } = record;
    if (v2 !== undefined) {
      addField(index, v2, docIdx, analyzer);
      return;
    }
    if (!fields)
      return;
    for (let keyIdx = 0;keyIdx < keyCount; keyIdx++) {
      const value = fields[keyIdx];
      if (!value)
        continue;
      if (Array.isArray(value)) {
        for (const sub of value)
          addField(index, sub.v, docIdx, analyzer);
      } else {
        addField(index, value.v, docIdx, analyzer);
      }
    }
  }
  function buildInvertedIndex(records, keyCount, analyzer) {
    const index = {
      fieldCount: 0,
      df: new Map,
      docFieldCount: new Map,
      docTermFieldHits: new Map
    };
    for (const record of records) {
      ingestRecord(index, record, keyCount, analyzer);
    }
    return index;
  }
  function addToInvertedIndex(index, record, keyCount, analyzer) {
    ingestRecord(index, record, keyCount, analyzer);
  }
  function removeFromInvertedIndex(index, docIdx) {
    const fieldCount = index.docFieldCount.get(docIdx);
    if (fieldCount === undefined)
      return;
    index.fieldCount -= fieldCount;
    index.docFieldCount.delete(docIdx);
    const perDocTerms = index.docTermFieldHits.get(docIdx);
    if (!perDocTerms)
      return;
    for (const [term, hits] of perDocTerms) {
      const next = (index.df.get(term) || 0) - hits;
      if (next <= 0) {
        index.df.delete(term);
      } else {
        index.df.set(term, next);
      }
    }
    index.docTermFieldHits.delete(docIdx);
  }
  function removeAndShiftInvertedIndex(index, removedIndices) {
    if (removedIndices.length === 0)
      return;
    const sorted = Array.from(new Set(removedIndices)).sort((a2, b2) => a2 - b2);
    for (const idx of sorted) {
      removeFromInvertedIndex(index, idx);
    }
    const shift = (oldIdx) => {
      let lo = 0;
      let hi = sorted.length;
      while (lo < hi) {
        const mid = lo + hi >>> 1;
        if (sorted[mid] < oldIdx)
          lo = mid + 1;
        else
          hi = mid;
      }
      return oldIdx - lo;
    };
    const firstRemoved = sorted[0];
    const shiftedDocFieldCount = new Map;
    for (const [oldKey, count] of index.docFieldCount) {
      shiftedDocFieldCount.set(oldKey > firstRemoved ? shift(oldKey) : oldKey, count);
    }
    index.docFieldCount = shiftedDocFieldCount;
    const shiftedDocTermFieldHits = new Map;
    for (const [oldKey, terms] of index.docTermFieldHits) {
      shiftedDocTermFieldHits.set(oldKey > firstRemoved ? shift(oldKey) : oldKey, terms);
    }
    index.docTermFieldHits = shiftedDocTermFieldHits;
  }

  class Fuse {
    constructor(docs, options, index) {
      this.options = {
        ...Config,
        ...options
      };
      if (this.options.useExtendedSearch && false)
        ;
      if (this.options.useTokenSearch && false)
        ;
      this._keyStore = new KeyStore(this.options.keys);
      this._docs = docs;
      this._myIndex = null;
      this._invertedIndex = null;
      this.setCollection(docs, index);
      this._lastQuery = null;
      this._lastSearcher = null;
    }
    _getSearcher(query) {
      if (this._lastQuery === query) {
        return this._lastSearcher;
      }
      const opts = this._invertedIndex ? {
        ...this.options,
        _invertedIndex: this._invertedIndex
      } : this.options;
      const searcher = createSearcher(query, opts);
      this._lastQuery = query;
      this._lastSearcher = searcher;
      return searcher;
    }
    setCollection(docs, index) {
      this._docs = docs;
      if (index && !(index instanceof FuseIndex)) {
        throw new Error(INCORRECT_INDEX_TYPE);
      }
      this._myIndex = index || createIndex(this.options.keys, this._docs, {
        getFn: this.options.getFn,
        fieldNormWeight: this.options.fieldNormWeight
      });
      if (this.options.useTokenSearch) {
        const analyzer = createAnalyzer({
          isCaseSensitive: this.options.isCaseSensitive,
          ignoreDiacritics: this.options.ignoreDiacritics,
          tokenize: this.options.tokenize
        });
        this._invertedIndex = buildInvertedIndex(this._myIndex.records, this._myIndex.keys.length, analyzer);
      }
      this._invalidateSearcherCache();
    }
    add(doc) {
      if (!isDefined(doc)) {
        return;
      }
      this._docs.push(doc);
      const record = this._myIndex.add(doc, this._docs.length - 1);
      if (this._invertedIndex && record) {
        const analyzer = createAnalyzer({
          isCaseSensitive: this.options.isCaseSensitive,
          ignoreDiacritics: this.options.ignoreDiacritics,
          tokenize: this.options.tokenize
        });
        addToInvertedIndex(this._invertedIndex, record, this._myIndex.keys.length, analyzer);
      }
      this._invalidateSearcherCache();
    }
    remove(predicate = () => false) {
      const results = [];
      const indicesToRemove = [];
      for (let i2 = 0, len = this._docs.length;i2 < len; i2 += 1) {
        if (predicate(this._docs[i2], i2)) {
          results.push(this._docs[i2]);
          indicesToRemove.push(i2);
        }
      }
      if (indicesToRemove.length) {
        if (this._invertedIndex) {
          removeAndShiftInvertedIndex(this._invertedIndex, indicesToRemove);
        }
        const toRemove = new Set(indicesToRemove);
        this._docs = this._docs.filter((_2, i2) => !toRemove.has(i2));
        this._myIndex.removeAll(indicesToRemove);
        this._invalidateSearcherCache();
      }
      return results;
    }
    removeAt(idx) {
      if (!Number.isInteger(idx) || idx < 0 || idx >= this._docs.length) {
        throw new Error(INVALID_DOC_INDEX);
      }
      if (this._invertedIndex) {
        removeAndShiftInvertedIndex(this._invertedIndex, [idx]);
      }
      const doc = this._docs.splice(idx, 1)[0];
      this._myIndex.removeAt(idx);
      this._invalidateSearcherCache();
      return doc;
    }
    _invalidateSearcherCache() {
      this._lastQuery = null;
      this._lastSearcher = null;
    }
    getIndex() {
      return this._myIndex;
    }
    search(query, options) {
      const {
        limit = -1
      } = options || {};
      const {
        includeMatches,
        includeScore,
        shouldSort,
        sortFn,
        ignoreFieldNorm
      } = this.options;
      if (isString(query) && !query.trim()) {
        let docs = this._docs.map((item, idx) => ({
          item,
          refIndex: idx
        }));
        if (isNumber(limit) && limit > -1) {
          docs = docs.slice(0, limit);
        }
        return docs;
      }
      const useHeap = isNumber(limit) && limit > 0 && isString(query);
      let results;
      if (useHeap) {
        const heap = new MaxHeap(limit);
        if (isString(this._docs[0])) {
          this._searchStringList(query, {
            heap,
            ignoreFieldNorm
          });
        } else {
          this._searchObjectList(query, {
            heap,
            ignoreFieldNorm
          });
        }
        results = heap.extractSorted(sortFn);
      } else {
        results = isString(query) ? isString(this._docs[0]) ? this._searchStringList(query) : this._searchObjectList(query) : this._searchLogical(query);
        computeScore(results, {
          ignoreFieldNorm
        });
        if (shouldSort) {
          results.sort(sortFn);
        }
        if (isNumber(limit) && limit > -1) {
          results = results.slice(0, limit);
        }
      }
      return format(results, this._docs, {
        includeMatches,
        includeScore
      });
    }
    _searchStringList(query, {
      heap,
      ignoreFieldNorm
    } = {}) {
      const searcher = this._getSearcher(query);
      const requireAllTokens = this.options.useTokenSearch && this.options.tokenMatch === "all";
      const {
        records
      } = this._myIndex;
      const results = heap ? null : [];
      records.forEach(({
        v: text,
        i: idx,
        n: norm2
      }) => {
        if (!isDefined(text)) {
          return;
        }
        const searchResult = searcher.searchIn(text);
        if (searchResult.isMatch) {
          const match = {
            score: searchResult.score,
            value: text,
            norm: norm2,
            indices: searchResult.indices
          };
          if (requireAllTokens) {
            match.matchedMask = searchResult.matchedMask;
            match.matchedTerms = searchResult.matchedTerms;
            match.termCount = searchResult.termCount;
          }
          const matches = [match];
          if (!requireAllTokens || this._coversAllTokens(matches)) {
            const result = {
              item: text,
              idx,
              matches
            };
            if (heap) {
              result.score = computeScoreSingle(result.matches, {
                ignoreFieldNorm
              });
              if (heap.shouldInsert(result.score)) {
                heap.insert(result);
              }
            } else {
              results.push(result);
            }
          }
        }
      });
      return results;
    }
    _searchLogical(query) {
      const expression = parse(query, this.options);
      const evaluate = (node, item, idx) => {
        if (!("children" in node)) {
          const {
            keyId,
            searcher
          } = node;
          let matches;
          if (keyId === null) {
            matches = [];
            this._myIndex.keys.forEach((key, keyIndex) => {
              matches.push(...this._findMatches({
                key,
                value: item[keyIndex],
                searcher
              }));
            });
          } else {
            matches = this._findMatches({
              key: this._keyStore.get(keyId),
              value: this._myIndex.getValueForItemAtKeyId(item, keyId),
              searcher
            });
          }
          if (matches && matches.length) {
            return [{
              idx,
              item,
              matches
            }];
          }
          return [];
        }
        const {
          children,
          operator
        } = node;
        const res = [];
        for (let i2 = 0, len = children.length;i2 < len; i2 += 1) {
          const child = children[i2];
          const result = evaluate(child, item, idx);
          if (result.length) {
            res.push(...result);
          } else if (operator === LogicalOperator.AND) {
            return [];
          }
        }
        return res;
      };
      const records = this._myIndex.records;
      const resultMap = new Map;
      const results = [];
      records.forEach(({
        $: item,
        i: idx
      }) => {
        if (isDefined(item)) {
          const expResults = evaluate(expression, item, idx);
          if (expResults.length) {
            if (!resultMap.has(idx)) {
              resultMap.set(idx, {
                idx,
                item,
                matches: []
              });
              results.push(resultMap.get(idx));
            }
            expResults.forEach(({
              matches
            }) => {
              resultMap.get(idx).matches.push(...matches);
            });
          }
        }
      });
      return results;
    }
    _searchObjectList(query, {
      heap,
      ignoreFieldNorm
    } = {}) {
      const searcher = this._getSearcher(query);
      const requireAllTokens = this.options.useTokenSearch && this.options.tokenMatch === "all";
      const {
        keys,
        records
      } = this._myIndex;
      const results = heap ? null : [];
      records.forEach(({
        $: item,
        i: idx
      }) => {
        if (!isDefined(item)) {
          return;
        }
        const matches = [];
        let anyKeyFailed = false;
        let hasInverse = false;
        keys.forEach((key, keyIndex) => {
          const keyMatches = this._findMatches({
            key,
            value: item[keyIndex],
            searcher
          });
          if (keyMatches.length) {
            matches.push(...keyMatches);
            if (keyMatches[0].hasInverse) {
              hasInverse = true;
            }
          } else {
            anyKeyFailed = true;
          }
        });
        if (hasInverse && anyKeyFailed) {
          return;
        }
        if (matches.length && (!requireAllTokens || this._coversAllTokens(matches))) {
          const result = {
            idx,
            item,
            matches
          };
          if (heap) {
            result.score = computeScoreSingle(result.matches, {
              ignoreFieldNorm
            });
            if (heap.shouldInsert(result.score)) {
              heap.insert(result);
            }
          } else {
            results.push(result);
          }
        }
      });
      return results;
    }
    _findMatches({
      key,
      value,
      searcher
    }) {
      if (!isDefined(value)) {
        return [];
      }
      const matches = [];
      if (isArray(value)) {
        value.forEach(({
          v: text,
          i: idx,
          n: norm2
        }) => {
          if (!isDefined(text)) {
            return;
          }
          const searchResult = searcher.searchIn(text);
          if (searchResult.isMatch) {
            const match = {
              score: searchResult.score,
              key,
              value: text,
              idx,
              norm: norm2,
              indices: searchResult.indices,
              hasInverse: searchResult.hasInverse
            };
            if (searchResult.termCount !== undefined) {
              match.matchedMask = searchResult.matchedMask;
              match.matchedTerms = searchResult.matchedTerms;
              match.termCount = searchResult.termCount;
            }
            matches.push(match);
          }
        });
      } else {
        const {
          v: text,
          n: norm2
        } = value;
        const searchResult = searcher.searchIn(text);
        if (searchResult.isMatch) {
          const match = {
            score: searchResult.score,
            key,
            value: text,
            norm: norm2,
            indices: searchResult.indices,
            hasInverse: searchResult.hasInverse
          };
          if (searchResult.termCount !== undefined) {
            match.matchedMask = searchResult.matchedMask;
            match.matchedTerms = searchResult.matchedTerms;
            match.termCount = searchResult.termCount;
          }
          matches.push(match);
        }
      }
      return matches;
    }
    _coversAllTokens(matches) {
      const termCount = matches.length ? matches[0].termCount : undefined;
      if (termCount === undefined) {
        return true;
      }
      if (termCount <= MAX_MASK_TERMS) {
        let coverage2 = 0;
        for (let i2 = 0;i2 < matches.length; i2++) {
          coverage2 |= matches[i2].matchedMask || 0;
        }
        return coverage2 === 2 ** termCount - 1;
      }
      const coverage = new Set;
      for (let i2 = 0;i2 < matches.length; i2++) {
        const terms = matches[i2].matchedTerms;
        if (terms) {
          for (const t2 of terms) {
            coverage.add(t2);
          }
        }
      }
      return coverage.size === termCount;
    }
  }
  Fuse.version = "7.4.1";
  Fuse.createIndex = createIndex;
  Fuse.parseIndex = parseIndex;
  Fuse.config = Config;
  Fuse.match = function(pattern, text, options) {
    if (options && options.useTokenSearch) {
      throw new Error(FUSE_MATCH_TOKEN_SEARCH_UNSUPPORTED);
    }
    const searcher = createSearcher(pattern, {
      ...Config,
      ...options
    });
    return searcher.searchIn(text);
  };
  {
    Fuse.parseQuery = parse;
  }
  {
    register(ExtendedSearch);
  }
  {
    register(TokenSearch);
  }
  Fuse.use = function(...plugins) {
    plugins.forEach((plugin) => register(plugin));
  };

  // html/scripts/search-core.ts
  var TYPE_PRIORITY = {
    commander: 0,
    playerunit: 1,
    prestige: 2,
    mission: 3,
    mutator: 3,
    amonunit: 4,
    upgrade: 5,
    talent: 5,
    weeklymutation: 6
  };
  function createSearchIndex(data) {
    const index = Fuse.parseIndex(data.index);
    return new Fuse(data.documents, {
      keys: data.keys,
      threshold: 0.35,
      ignoreLocation: true,
      minMatchCharLength: 1,
      includeScore: true
    }, index);
  }
  function searchDocuments(fuse, query, limit) {
    const normalizedQuery = token(query);
    if (!normalizedQuery)
      return [];
    return fuse.search(query).sort((a2, b2) => compareResults(a2, b2, normalizedQuery)).slice(0, limit).map((result) => result.item);
  }
  function compareResults(a2, b2, normalizedQuery) {
    return titleMatchRank(a2.item, normalizedQuery) - titleMatchRank(b2.item, normalizedQuery) || TYPE_PRIORITY[a2.item.type] - TYPE_PRIORITY[b2.item.type] || a2.refIndex - b2.refIndex || (a2.score || 0) - (b2.score || 0);
  }
  function titleMatchRank(document2, normalizedQuery) {
    const normalizedTitle = token(document2.title);
    if (normalizedTitle.startsWith(normalizedQuery))
      return 0;
    if (normalizedTitle.includes(normalizedQuery))
      return 1;
    return 2;
  }
  function token(text) {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, "");
  }
  // node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
  var f2 = 0;
  function u2(e2, t2, n2, o2, i2, u3) {
    t2 || (t2 = {});
    var a2, c2, p2 = t2;
    if ("ref" in p2)
      for (c2 in p2 = {}, t2)
        c2 == "ref" ? a2 = t2[c2] : p2[c2] = t2[c2];
    var l2 = { type: e2, props: p2, key: n2, ref: a2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: undefined, __v: --f2, __i: -1, __u: 0, __source: i2, __self: u3 };
    if (typeof e2 == "function" && (a2 = e2.defaultProps))
      for (c2 in a2)
        p2[c2] === undefined && (p2[c2] = a2[c2]);
    return l.vnode && l.vnode(l2), l2;
  }

  // html/scripts/search-results.tsx
  var MAX_RESULTS = 10;
  var TYPE_LABELS = {
    commander: "Commander",
    mutator: "Mutator",
    mission: "Mission",
    weeklymutation: "Weekly",
    upgrade: "Upgrade",
    talent: "Talent",
    prestige: "Prestige",
    playerunit: "Unit",
    amonunit: "Amon Unit"
  };
  function resolveSearchPath(document2) {
    const path = document2.path;
    if (/^(commanders|mutators|missions|units)\//.test(path)) {
      return `/${path}`;
    }
    if (path.startsWith("weeklymutations/")) {
      return "/resources/weeklymutations";
    }
    if (path.startsWith("upgrades/") || path.startsWith("talents/")) {
      return document2.commander ? `/units/#${token2(document2.commander)}/${unitTokenFromSubtitle(document2.subtitle)}` : "/units";
    }
    if (path.startsWith("prestiges/")) {
      return document2.commander ? `/commanders/${token2(document2.commander)}#prestiges` : "/";
    }
    return `/${path}`;
  }
  function token2(text) {
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
    if (text === "James Sirius Sykes")
      return "sirius";
    if (text === "Miles Blaze Lewis")
      return "blaze";
    if (text === "Rob Cannonball Boswell")
      return "cannonball";
    if (text === "Lt Layna Nikara")
      return "nikara";
    if (text === "Kev Rattlesnake West")
      return "rattlesnake";
    return text.toLowerCase().replace(/[^a-z0-9]+/g, "");
  }
  function unitTokenFromSubtitle(subtitle = "") {
    const words = subtitle.split(" ");
    if (words.length < 2)
      return "";
    return token2(words.slice(1, -1).join(" "));
  }

  class SearchResults extends C {
    state = {
      status: "loading",
      query: this.props.input.value,
      resultsQuery: "",
      results: [],
      searchPending: undefined,
      activeIndex: 0,
      fuse: null
    };
    componentDidMount() {
      this.props.input.addEventListener("input", this.onInput);
      this.props.input.addEventListener("keydown", this.onKeyDown);
      this.loadSearchIndex();
    }
    componentWillUnmount() {
      this.props.input.removeEventListener("input", this.onInput);
      this.props.input.removeEventListener("keydown", this.onKeyDown);
      clearTimeout(this.state.searchPending);
    }
    async loadSearchIndex() {
      try {
        const response = await fetch("/data/search-index.json");
        if (!response.ok)
          throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        const fuse = createSearchIndex(data);
        this.setState({ status: "ready", fuse });
        this.scheduleSearch(this.props.input.value, fuse);
      } catch (error) {
        this.setState({
          status: "error",
          error: error instanceof Error ? error.message : String(error)
        });
      }
    }
    onInput = () => {
      this.scheduleSearch(this.props.input.value);
    };
    onKeyDown = (event) => {
      if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey)
        return;
      const results = this.state.results;
      if (event.key === "ArrowDown") {
        event.preventDefault();
        this.setState({ activeIndex: results.length ? (this.state.activeIndex + 1) % results.length : 0 });
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        this.setState({ activeIndex: results.length ? (this.state.activeIndex + results.length - 1) % results.length : 0 });
      } else if (event.key === "Enter" && results.length) {
        event.preventDefault();
        window.location.href = resolveSearchPath(results[this.state.activeIndex]);
        this.props.close();
      }
    };
    scheduleSearch(query, fuse = this.state.fuse) {
      clearTimeout(this.state.searchPending);
      if (!query.trim() || !fuse) {
        this.setState({
          query,
          resultsQuery: "",
          results: [],
          searchPending: undefined,
          activeIndex: 0
        });
        return;
      }
      if (query === this.state.resultsQuery)
        return;
      const searchPending = setTimeout(() => {
        this.setState({
          resultsQuery: query,
          results: searchDocuments(fuse, query, MAX_RESULTS),
          searchPending: undefined,
          activeIndex: 0
        });
      }, 0);
      this.setState({ query, activeIndex: 0, searchPending });
    }
    render() {
      if (this.state.status === "loading") {
        return /* @__PURE__ */ u2("p", {
          class: "site-search-message",
          children: "Loading search..."
        }, undefined, false, undefined, this);
      }
      if (this.state.status === "error") {
        return /* @__PURE__ */ u2("p", {
          class: "site-search-message",
          children: [
            "Search failed to load: ",
            this.state.error
          ]
        }, undefined, true, undefined, this);
      }
      const query = this.state.query;
      if (!query.trim()) {
        return /* @__PURE__ */ u2("div", {
          class: "site-search-message",
          children: [
            /* @__PURE__ */ u2("p", {
              children: "Type to search commanders, units, missions, mutators, and weekly mutations."
            }, undefined, false, undefined, this),
            /* @__PURE__ */ u2("p", {
              class: "site-search-key-guides",
              children: [
                /* @__PURE__ */ u2("span", {
                  children: [
                    /* @__PURE__ */ u2("kbd", {
                      children: "↑"
                    }, undefined, false, undefined, this),
                    /* @__PURE__ */ u2("kbd", {
                      children: "↓"
                    }, undefined, false, undefined, this),
                    " Select"
                  ]
                }, undefined, true, undefined, this),
                /* @__PURE__ */ u2("span", {
                  children: [
                    /* @__PURE__ */ u2("kbd", {
                      children: "Enter"
                    }, undefined, false, undefined, this),
                    " Open"
                  ]
                }, undefined, true, undefined, this),
                /* @__PURE__ */ u2("span", {
                  children: [
                    /* @__PURE__ */ u2("kbd", {
                      children: "Esc"
                    }, undefined, false, undefined, this),
                    " Close"
                  ]
                }, undefined, true, undefined, this)
              ]
            }, undefined, true, undefined, this)
          ]
        }, undefined, true, undefined, this);
      }
      const results = this.state.results;
      if (!results.length) {
        return /* @__PURE__ */ u2("p", {
          class: "site-search-message",
          children: "No results found."
        }, undefined, false, undefined, this);
      }
      return /* @__PURE__ */ u2("ul", {
        class: "site-search-list",
        role: "listbox",
        "aria-label": "Search results",
        children: results.map((document2, index) => /* @__PURE__ */ u2("li", {
          class: "site-search-result",
          role: "option",
          "aria-selected": index === this.state.activeIndex,
          children: /* @__PURE__ */ u2("a", {
            href: resolveSearchPath(document2),
            "aria-selected": index === this.state.activeIndex,
            onMouseEnter: () => this.setState({ activeIndex: index }),
            onClick: this.props.close,
            children: [
              /* @__PURE__ */ u2("span", {
                class: "site-search-title",
                children: document2.title
              }, undefined, false, undefined, this),
              /* @__PURE__ */ u2("span", {
                class: "site-search-type",
                children: TYPE_LABELS[document2.type]
              }, undefined, false, undefined, this),
              document2.subtitle && /* @__PURE__ */ u2("span", {
                class: "site-search-subtitle",
                children: document2.subtitle
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this))
      }, undefined, false, undefined, this);
    }
  }
  function mountSearchResults(options) {
    R(/* @__PURE__ */ u2(SearchResults, {
      input: options.input,
      close: options.close
    }, undefined, false, undefined, this), options.container);
  }
  window.mountSearchResults = mountSearchResults;
})();

//# debugId=E2455A24AAFF9A8264756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC9kaXN0L3ByZWFjdC5tb2R1bGUuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL2Z1c2UuanMvZGlzdC9mdXNlLm1qcyIsICJzZWFyY2gtY29yZS50cyIsICIuLi8uLi9ub2RlX21vZHVsZXMvcHJlYWN0L2pzeC1ydW50aW1lL2Rpc3QvanN4UnVudGltZS5tb2R1bGUuanMiLCAic2VhcmNoLXJlc3VsdHMudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWwogICAgInZhciBuLGwsdSx0LGkscixvLGUsZixjLHMsYSxoLHAsdix5LGQ9e30sdz1bXSxfPS9hY2l0fGV4KD86c3xnfG58cHwkKXxycGh8Z3JpZHxvd3N8bW5jfG50d3xpbmVbY2hdfHpvb3xeb3JkfGl0ZXJhL2ksZz1BcnJheS5pc0FycmF5O2Z1bmN0aW9uIG0obixsKXtmb3IodmFyIHUgaW4gbCluW3VdPWxbdV07cmV0dXJuIG59ZnVuY3Rpb24gYihuKXtuJiZuLnBhcmVudE5vZGUmJm4ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChuKX1mdW5jdGlvbiBrKGwsdSx0KXt2YXIgaSxyLG8sZT17fTtmb3IobyBpbiB1KVwia2V5XCI9PW8/aT11W29dOlwicmVmXCI9PW8/cj11W29dOmVbb109dVtvXTtpZihhcmd1bWVudHMubGVuZ3RoPjImJihlLmNoaWxkcmVuPWFyZ3VtZW50cy5sZW5ndGg+Mz9uLmNhbGwoYXJndW1lbnRzLDIpOnQpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGwmJm51bGwhPWwuZGVmYXVsdFByb3BzKWZvcihvIGluIGwuZGVmYXVsdFByb3BzKXZvaWQgMD09PWVbb10mJihlW29dPWwuZGVmYXVsdFByb3BzW29dKTtyZXR1cm4geChsLGUsaSxyLG51bGwpfWZ1bmN0aW9uIHgobix0LGkscixvKXt2YXIgZT17dHlwZTpuLHByb3BzOnQsa2V5OmkscmVmOnIsX19rOm51bGwsX186bnVsbCxfX2I6MCxfX2U6bnVsbCxfX2M6bnVsbCxjb25zdHJ1Y3Rvcjp2b2lkIDAsX192Om51bGw9PW8/Kyt1Om8sX19pOi0xLF9fdTowfTtyZXR1cm4gbnVsbD09byYmbnVsbCE9bC52bm9kZSYmbC52bm9kZShlKSxlfWZ1bmN0aW9uIE0oKXtyZXR1cm57Y3VycmVudDpudWxsfX1mdW5jdGlvbiBTKG4pe3JldHVybiBuLmNoaWxkcmVufWZ1bmN0aW9uIEMobixsKXt0aGlzLnByb3BzPW4sdGhpcy5jb250ZXh0PWx9ZnVuY3Rpb24gJChuLGwpe2lmKG51bGw9PWwpcmV0dXJuIG4uX18/JChuLl9fLG4uX19pKzEpOm51bGw7Zm9yKHZhciB1O2w8bi5fX2subGVuZ3RoO2wrKylpZihudWxsIT0odT1uLl9fa1tsXSkmJm51bGwhPXUuX19lKXJldHVybiB1Ll9fZTtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBuLnR5cGU/JChuKTpudWxsfWZ1bmN0aW9uIEkobil7aWYobi5fX1AmJm4uX19kKXt2YXIgdT1uLl9fdix0PXUuX19lLGk9W10scj1bXSxvPW0oe30sdSk7by5fX3Y9dS5fX3YrMSxsLnZub2RlJiZsLnZub2RlKG8pLHEobi5fX1Asbyx1LG4uX19uLG4uX19QLm5hbWVzcGFjZVVSSSwzMiZ1Ll9fdT9bdF06bnVsbCxpLG51bGw9PXQ/JCh1KTp0LCEhKDMyJnUuX191KSxyKSxvLl9fdj11Ll9fdixvLl9fLl9fa1tvLl9faV09byxEKGksbyxyKSx1Ll9fZT11Ll9fPW51bGwsby5fX2UhPXQmJlAobyl9fWZ1bmN0aW9uIFAobil7aWYobnVsbCE9KG49bi5fXykmJm51bGwhPW4uX19jKXJldHVybiBuLl9fZT1uLl9fYy5iYXNlPW51bGwsbi5fX2suc29tZShmdW5jdGlvbihsKXtpZihudWxsIT1sJiZudWxsIT1sLl9fZSlyZXR1cm4gbi5fX2U9bi5fX2MuYmFzZT1sLl9fZX0pLFAobil9ZnVuY3Rpb24gQShuKXsoIW4uX19kJiYobi5fX2Q9ITApJiZpLnB1c2gobikmJiFILl9fcisrfHxyIT1sLmRlYm91bmNlUmVuZGVyaW5nKSYmKChyPWwuZGVib3VuY2VSZW5kZXJpbmcpfHxvKShIKX1mdW5jdGlvbiBIKCl7dHJ5e2Zvcih2YXIgbixsPTE7aS5sZW5ndGg7KWkubGVuZ3RoPmwmJmkuc29ydChlKSxuPWkuc2hpZnQoKSxsPWkubGVuZ3RoLEkobil9ZmluYWxseXtpLmxlbmd0aD1ILl9fcj0wfX1mdW5jdGlvbiBMKG4sbCx1LHQsaSxyLG8sZSxmLGMscyl7dmFyIGEsaCxwLHYseSxfLGcsbT10JiZ0Ll9fa3x8dyxiPWwubGVuZ3RoO2ZvcihmPVQodSxsLG0sZixiKSxhPTA7YTxiO2ErKyludWxsIT0ocD11Ll9fa1thXSkmJihoPS0xIT1wLl9faSYmbVtwLl9faV18fGQscC5fX2k9YSxfPXEobixwLGgsaSxyLG8sZSxmLGMscyksdj1wLl9fZSxwLnJlZiYmaC5yZWYhPXAucmVmJiYoaC5yZWYmJkooaC5yZWYsbnVsbCxwKSxzLnB1c2gocC5yZWYscC5fX2N8fHYscCkpLG51bGw9PXkmJm51bGwhPXYmJih5PXYpLChnPSEhKDQmcC5fX3UpKXx8aC5fX2s9PT1wLl9faz8oZj1qKHAsZixuLGcpLGcmJmguX19lJiYoaC5fX2U9bnVsbCkpOlwiZnVuY3Rpb25cIj09dHlwZW9mIHAudHlwZSYmdm9pZCAwIT09Xz9mPV86diYmKGY9di5uZXh0U2libGluZykscC5fX3UmPS03KTtyZXR1cm4gdS5fX2U9eSxmfWZ1bmN0aW9uIFQobixsLHUsdCxpKXt2YXIgcixvLGUsZixjLHM9dS5sZW5ndGgsYT1zLGg9MDtmb3Iobi5fX2s9bmV3IEFycmF5KGkpLHI9MDtyPGk7cisrKW51bGwhPShvPWxbcl0pJiZcImJvb2xlYW5cIiE9dHlwZW9mIG8mJlwiZnVuY3Rpb25cIiE9dHlwZW9mIG8/KFwic3RyaW5nXCI9PXR5cGVvZiBvfHxcIm51bWJlclwiPT10eXBlb2Ygb3x8XCJiaWdpbnRcIj09dHlwZW9mIG98fG8uY29uc3RydWN0b3I9PVN0cmluZz9vPW4uX19rW3JdPXgobnVsbCxvLG51bGwsbnVsbCxudWxsKTpnKG8pP289bi5fX2tbcl09eChTLHtjaGlsZHJlbjpvfSxudWxsLG51bGwsbnVsbCk6dm9pZCAwPT09by5jb25zdHJ1Y3RvciYmby5fX2I+MD9vPW4uX19rW3JdPXgoby50eXBlLG8ucHJvcHMsby5rZXksby5yZWY/by5yZWY6bnVsbCxvLl9fdik6bi5fX2tbcl09byxmPXIraCxvLl9fPW4sby5fX2I9bi5fX2IrMSxlPW51bGwsLTEhPShjPW8uX19pPU8obyx1LGYsYSkpJiYoYS0tLChlPXVbY10pJiYoZS5fX3V8PTIpKSxudWxsPT1lfHxudWxsPT1lLl9fdj8oLTE9PWMmJihpPnM/aC0tOmk8cyYmaCsrKSxcImZ1bmN0aW9uXCIhPXR5cGVvZiBvLnR5cGUmJihvLl9fdXw9NCkpOmMhPWYmJihjPT1mLTE/aC0tOmM9PWYrMT9oKys6KGM+Zj9oLS06aCsrLG8uX191fD00KSkpOm4uX19rW3JdPW51bGw7aWYoYSlmb3Iocj0wO3I8cztyKyspbnVsbCE9KGU9dVtyXSkmJjA9PSgyJmUuX191KSYmKGUuX19lPT10JiYodD0kKGUpKSxLKGUsZSkpO3JldHVybiB0fWZ1bmN0aW9uIGoobixsLHUsdCl7dmFyIGkscjtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBuLnR5cGUpe2ZvcihpPW4uX19rLHI9MDtpJiZyPGkubGVuZ3RoO3IrKylpW3JdJiYoaVtyXS5fXz1uLGw9aihpW3JdLGwsdSx0KSk7cmV0dXJuIGx9bi5fX2UhPWwmJih0JiYobCYmbi50eXBlJiYhbC5wYXJlbnROb2RlJiYobD0kKG4pKSx1Lmluc2VydEJlZm9yZShuLl9fZSxsfHxudWxsKSksbD1uLl9fZSk7ZG97bD1sJiZsLm5leHRTaWJsaW5nfXdoaWxlKG51bGwhPWwmJjg9PWwubm9kZVR5cGUpO3JldHVybiBsfWZ1bmN0aW9uIEYobixsKXtyZXR1cm4gbD1sfHxbXSxudWxsPT1ufHxcImJvb2xlYW5cIj09dHlwZW9mIG58fChnKG4pP24uc29tZShmdW5jdGlvbihuKXtGKG4sbCl9KTpsLnB1c2gobikpLGx9ZnVuY3Rpb24gTyhuLGwsdSx0KXt2YXIgaSxyLG8sZT1uLmtleSxmPW4udHlwZSxjPWxbdV0scz1udWxsIT1jJiYwPT0oMiZjLl9fdSk7aWYobnVsbD09PWMmJm51bGw9PWV8fHMmJmU9PWMua2V5JiZmPT1jLnR5cGUpcmV0dXJuIHU7aWYodD4ocz8xOjApKWZvcihpPXUtMSxyPXUrMTtpPj0wfHxyPGwubGVuZ3RoOylpZihudWxsIT0oYz1sW289aT49MD9pLS06cisrXSkmJjA9PSgyJmMuX191KSYmZT09Yy5rZXkmJmY9PWMudHlwZSlyZXR1cm4gbztyZXR1cm4tMX1mdW5jdGlvbiB6KG4sbCx1KXtcIi1cIj09bFswXT9uLnNldFByb3BlcnR5KGwsbnVsbD09dT9cIlwiOnUpOm5bbF09bnVsbD09dT9cIlwiOlwibnVtYmVyXCIhPXR5cGVvZiB1fHxfLnRlc3QobCk/dTp1K1wicHhcIn1mdW5jdGlvbiBOKG4sbCx1LHQsaSl7dmFyIHIsbztuOmlmKFwic3R5bGVcIj09bClpZihcInN0cmluZ1wiPT10eXBlb2YgdSluLnN0eWxlLmNzc1RleHQ9dTtlbHNle2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0JiYobi5zdHlsZS5jc3NUZXh0PXQ9XCJcIiksdClmb3IobCBpbiB0KXUmJmwgaW4gdXx8eihuLnN0eWxlLGwsXCJcIik7aWYodSlmb3IobCBpbiB1KXQmJnVbbF09PXRbbF18fHoobi5zdHlsZSxsLHVbbF0pfWVsc2UgaWYoXCJvXCI9PWxbMF0mJlwiblwiPT1sWzFdKXI9bCE9KGw9bC5yZXBsYWNlKGEsXCIkMVwiKSksbz1sLnRvTG93ZXJDYXNlKCksbD1vIGluIG58fFwib25Gb2N1c091dFwiPT1sfHxcIm9uRm9jdXNJblwiPT1sP28uc2xpY2UoMik6bC5zbGljZSgyKSxuLmx8fChuLmw9e30pLG4ubFtsK3JdPXUsdT90P3Vbc109dFtzXToodVtzXT1oLG4uYWRkRXZlbnRMaXN0ZW5lcihsLHI/djpwLHIpKTpuLnJlbW92ZUV2ZW50TGlzdGVuZXIobCxyP3Y6cCxyKTtlbHNle2lmKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj09aSlsPWwucmVwbGFjZSgveGxpbmsoSHw6aCkvLFwiaFwiKS5yZXBsYWNlKC9zTmFtZSQvLFwic1wiKTtlbHNlIGlmKFwid2lkdGhcIiE9bCYmXCJoZWlnaHRcIiE9bCYmXCJocmVmXCIhPWwmJlwibGlzdFwiIT1sJiZcImZvcm1cIiE9bCYmXCJ0YWJJbmRleFwiIT1sJiZcImRvd25sb2FkXCIhPWwmJlwicm93U3BhblwiIT1sJiZcImNvbFNwYW5cIiE9bCYmXCJyb2xlXCIhPWwmJlwicG9wb3ZlclwiIT1sJiZsIGluIG4pdHJ5e25bbF09bnVsbD09dT9cIlwiOnU7YnJlYWsgbn1jYXRjaChuKXt9XCJmdW5jdGlvblwiPT10eXBlb2YgdXx8KG51bGw9PXV8fCExPT09dSYmXCItXCIhPWxbNF0/bi5yZW1vdmVBdHRyaWJ1dGUobCk6bi5zZXRBdHRyaWJ1dGUobCxcInBvcG92ZXJcIj09bCYmMT09dT9cIlwiOnUpKX19ZnVuY3Rpb24gVihuKXtyZXR1cm4gZnVuY3Rpb24odSl7aWYodGhpcy5sKXt2YXIgdD10aGlzLmxbdS50eXBlK25dO2lmKG51bGw9PXVbY10pdVtjXT1oKys7ZWxzZSBpZih1W2NdPHRbc10pcmV0dXJuO3JldHVybiB0KGwuZXZlbnQ/bC5ldmVudCh1KTp1KX19fWZ1bmN0aW9uIHEobix1LHQsaSxyLG8sZSxmLGMscyl7dmFyIGEsaCxwLHYseSxkLF8sayx4LE0sJCxJLFAsQSxILFQ9dS50eXBlO2lmKHZvaWQgMCE9PXUuY29uc3RydWN0b3IpcmV0dXJuIG51bGw7MTI4JnQuX191JiYoYz0hISgzMiZ0Ll9fdSksbz1bZj11Ll9fZT10Ll9fZV0pLChhPWwuX19iKSYmYSh1KTtuOmlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIFQpdHJ5e2lmKGs9dS5wcm9wcyx4PVQucHJvdG90eXBlJiZULnByb3RvdHlwZS5yZW5kZXIsTT0oYT1ULmNvbnRleHRUeXBlKSYmaVthLl9fY10sJD1hP00/TS5wcm9wcy52YWx1ZTphLl9fOmksdC5fX2M/Xz0oaD11Ll9fYz10Ll9fYykuX189aC5fX0U6KHg/dS5fX2M9aD1uZXcgVChrLCQpOih1Ll9fYz1oPW5ldyBDKGssJCksaC5jb25zdHJ1Y3Rvcj1ULGgucmVuZGVyPVEpLE0mJk0uc3ViKGgpLGguc3RhdGV8fChoLnN0YXRlPXt9KSxoLl9fbj1pLHA9aC5fX2Q9ITAsaC5fX2g9W10saC5fc2I9W10pLHgmJm51bGw9PWguX19zJiYoaC5fX3M9aC5zdGF0ZSkseCYmbnVsbCE9VC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJihoLl9fcz09aC5zdGF0ZSYmKGguX19zPW0oe30saC5fX3MpKSxtKGguX19zLFQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKGssaC5fX3MpKSksdj1oLnByb3BzLHk9aC5zdGF0ZSxoLl9fdj11LHApeCYmbnVsbD09VC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJm51bGwhPWguY29tcG9uZW50V2lsbE1vdW50JiZoLmNvbXBvbmVudFdpbGxNb3VudCgpLHgmJm51bGwhPWguY29tcG9uZW50RGlkTW91bnQmJmguX19oLnB1c2goaC5jb21wb25lbnREaWRNb3VudCk7ZWxzZXtpZih4JiZudWxsPT1ULmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmayE9PXYmJm51bGwhPWguY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmaC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKGssJCksdS5fX3Y9PXQuX192fHwhaC5fX2UmJm51bGwhPWguc2hvdWxkQ29tcG9uZW50VXBkYXRlJiYhMT09PWguc2hvdWxkQ29tcG9uZW50VXBkYXRlKGssaC5fX3MsJCkpe3UuX192IT10Ll9fdiYmKGgucHJvcHM9ayxoLnN0YXRlPWguX19zLGguX19kPSExKSx1Ll9fZT10Ll9fZSx1Ll9faz10Ll9fayx1Ll9fay5zb21lKGZ1bmN0aW9uKG4pe24mJihuLl9fPXUpfSksdy5wdXNoLmFwcGx5KGguX19oLGguX3NiKSxoLl9zYj1bXSxoLl9faC5sZW5ndGgmJmUucHVzaChoKTticmVhayBufW51bGwhPWguY29tcG9uZW50V2lsbFVwZGF0ZSYmaC5jb21wb25lbnRXaWxsVXBkYXRlKGssaC5fX3MsJCkseCYmbnVsbCE9aC5jb21wb25lbnREaWRVcGRhdGUmJmguX19oLnB1c2goZnVuY3Rpb24oKXtoLmNvbXBvbmVudERpZFVwZGF0ZSh2LHksZCl9KX1pZihoLmNvbnRleHQ9JCxoLnByb3BzPWssaC5fX1A9bixoLl9fZT0hMSxJPWwuX19yLFA9MCx4KWguc3RhdGU9aC5fX3MsaC5fX2Q9ITEsSSYmSSh1KSxhPWgucmVuZGVyKGgucHJvcHMsaC5zdGF0ZSxoLmNvbnRleHQpLHcucHVzaC5hcHBseShoLl9faCxoLl9zYiksaC5fc2I9W107ZWxzZSBkb3toLl9fZD0hMSxJJiZJKHUpLGE9aC5yZW5kZXIoaC5wcm9wcyxoLnN0YXRlLGguY29udGV4dCksaC5zdGF0ZT1oLl9fc313aGlsZShoLl9fZCYmKytQPDI1KTtoLnN0YXRlPWguX19zLG51bGwhPWguZ2V0Q2hpbGRDb250ZXh0JiYoaT1tKG0oe30saSksaC5nZXRDaGlsZENvbnRleHQoKSkpLHgmJiFwJiZudWxsIT1oLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlJiYoZD1oLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKHYseSkpLEE9bnVsbCE9YSYmYS50eXBlPT09UyYmbnVsbD09YS5rZXk/RShhLnByb3BzLmNoaWxkcmVuKTphLGY9TChuLGcoQSk/QTpbQV0sdSx0LGkscixvLGUsZixjLHMpLGguYmFzZT11Ll9fZSx1Ll9fdSY9LTE2MSxoLl9faC5sZW5ndGgmJmUucHVzaChoKSxfJiYoaC5fX0U9aC5fXz1udWxsKX1jYXRjaChuKXtpZih1Ll9fdj1udWxsLGN8fG51bGwhPW8paWYobi50aGVuKXtmb3IodS5fX3V8PWM/MTYwOjEyODtmJiY4PT1mLm5vZGVUeXBlJiZmLm5leHRTaWJsaW5nOylmPWYubmV4dFNpYmxpbmc7b1tvLmluZGV4T2YoZildPW51bGwsdS5fX2U9Zn1lbHNle2ZvcihIPW8ubGVuZ3RoO0gtLTspYihvW0hdKTtCKHUpfWVsc2UgdS5fX2U9dC5fX2UsdS5fX2s9dC5fX2ssbi50aGVufHxCKHUpO2wuX19lKG4sdSx0KX1lbHNlIG51bGw9PW8mJnUuX192PT10Ll9fdj8odS5fX2s9dC5fX2ssdS5fX2U9dC5fX2UpOmY9dS5fX2U9Ryh0Ll9fZSx1LHQsaSxyLG8sZSxjLHMpO3JldHVybihhPWwuZGlmZmVkKSYmYSh1KSwxMjgmdS5fX3U/dm9pZCAwOmZ9ZnVuY3Rpb24gQihuKXtuJiYobi5fX2MmJihuLl9fYy5fX2U9ITApLG4uX19rJiZuLl9fay5zb21lKEIpKX1mdW5jdGlvbiBEKG4sdSx0KXtmb3IodmFyIGk9MDtpPHQubGVuZ3RoO2krKylKKHRbaV0sdFsrK2ldLHRbKytpXSk7bC5fX2MmJmwuX19jKHUsbiksbi5zb21lKGZ1bmN0aW9uKHUpe3RyeXtuPXUuX19oLHUuX19oPVtdLG4uc29tZShmdW5jdGlvbihuKXtuLmNhbGwodSl9KX1jYXRjaChuKXtsLl9fZShuLHUuX192KX19KX1mdW5jdGlvbiBFKG4pe3JldHVyblwib2JqZWN0XCIhPXR5cGVvZiBufHxudWxsPT1ufHxuLl9fYj4wP246ZyhuKT9uLm1hcChFKTptKHt9LG4pfWZ1bmN0aW9uIEcodSx0LGkscixvLGUsZixjLHMpe3ZhciBhLGgscCx2LHksdyxfLG09aS5wcm9wc3x8ZCxrPXQucHJvcHMseD10LnR5cGU7aWYoXCJzdmdcIj09eD9vPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjpcIm1hdGhcIj09eD9vPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OC9NYXRoL01hdGhNTFwiOm98fChvPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiKSxudWxsIT1lKWZvcihhPTA7YTxlLmxlbmd0aDthKyspaWYoKHk9ZVthXSkmJlwic2V0QXR0cmlidXRlXCJpbiB5PT0hIXgmJih4P3kubG9jYWxOYW1lPT14OjM9PXkubm9kZVR5cGUpKXt1PXksZVthXT1udWxsO2JyZWFrfWlmKG51bGw9PXUpe2lmKG51bGw9PXgpcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGspO3U9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG8seCxrLmlzJiZrKSxjJiYobC5fX20mJmwuX19tKHQsZSksYz0hMSksZT1udWxsfWlmKG51bGw9PXgpbT09PWt8fGMmJnUuZGF0YT09a3x8KHUuZGF0YT1rKTtlbHNle2lmKGU9ZSYmbi5jYWxsKHUuY2hpbGROb2RlcyksIWMmJm51bGwhPWUpZm9yKG09e30sYT0wO2E8dS5hdHRyaWJ1dGVzLmxlbmd0aDthKyspbVsoeT11LmF0dHJpYnV0ZXNbYV0pLm5hbWVdPXkudmFsdWU7Zm9yKGEgaW4gbSl5PW1bYV0sXCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiPT1hP3A9eTpcImNoaWxkcmVuXCI9PWF8fGEgaW4ga3x8XCJ2YWx1ZVwiPT1hJiZcImRlZmF1bHRWYWx1ZVwiaW4ga3x8XCJjaGVja2VkXCI9PWEmJlwiZGVmYXVsdENoZWNrZWRcImluIGt8fE4odSxhLG51bGwseSxvKTtmb3IoYSBpbiBrKXk9a1thXSxcImNoaWxkcmVuXCI9PWE/dj15OlwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIj09YT9oPXk6XCJ2YWx1ZVwiPT1hP3c9eTpcImNoZWNrZWRcIj09YT9fPXk6YyYmXCJmdW5jdGlvblwiIT10eXBlb2YgeXx8bVthXT09PXl8fE4odSxhLHksbVthXSxvKTtpZihoKWN8fHAmJihoLl9faHRtbD09cC5fX2h0bWx8fGguX19odG1sPT11LmlubmVySFRNTCl8fCh1LmlubmVySFRNTD1oLl9faHRtbCksdC5fX2s9W107ZWxzZSBpZihwJiYodS5pbm5lckhUTUw9XCJcIiksTChcInRlbXBsYXRlXCI9PXQudHlwZT91LmNvbnRlbnQ6dSxnKHYpP3Y6W3ZdLHQsaSxyLFwiZm9yZWlnbk9iamVjdFwiPT14P1wiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiOm8sZSxmLGU/ZVswXTppLl9fayYmJChpLDApLGMscyksbnVsbCE9ZSlmb3IoYT1lLmxlbmd0aDthLS07KWIoZVthXSk7Y3x8KGE9XCJ2YWx1ZVwiLFwicHJvZ3Jlc3NcIj09eCYmbnVsbD09dz91LnJlbW92ZUF0dHJpYnV0ZShcInZhbHVlXCIpOm51bGwhPXcmJih3IT09dVthXXx8XCJwcm9ncmVzc1wiPT14JiYhd3x8XCJvcHRpb25cIj09eCYmdyE9bVthXSkmJk4odSxhLHcsbVthXSxvKSxhPVwiY2hlY2tlZFwiLG51bGwhPV8mJl8hPXVbYV0mJk4odSxhLF8sbVthXSxvKSl9cmV0dXJuIHV9ZnVuY3Rpb24gSihuLHUsdCl7dHJ5e2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIG4pe3ZhciBpPVwiZnVuY3Rpb25cIj09dHlwZW9mIG4uX191O2kmJm4uX191KCksaSYmbnVsbD09dXx8KG4uX191PW4odSkpfWVsc2Ugbi5jdXJyZW50PXV9Y2F0Y2gobil7bC5fX2Uobix0KX19ZnVuY3Rpb24gSyhuLHUsdCl7dmFyIGkscjtpZihsLnVubW91bnQmJmwudW5tb3VudChuKSwoaT1uLnJlZikmJihpLmN1cnJlbnQmJmkuY3VycmVudCE9bi5fX2V8fEooaSxudWxsLHUpKSxudWxsIT0oaT1uLl9fYykpe2lmKGkuY29tcG9uZW50V2lsbFVubW91bnQpdHJ5e2kuY29tcG9uZW50V2lsbFVubW91bnQoKX1jYXRjaChuKXtsLl9fZShuLHUpfWkuYmFzZT1pLl9fUD1udWxsfWlmKGk9bi5fX2spZm9yKHI9MDtyPGkubGVuZ3RoO3IrKylpW3JdJiZLKGlbcl0sdSx0fHxcImZ1bmN0aW9uXCIhPXR5cGVvZiBuLnR5cGUpO3R8fGIobi5fX2UpLG4uX19jPW4uX189bi5fX2U9dm9pZCAwfWZ1bmN0aW9uIFEobixsLHUpe3JldHVybiB0aGlzLmNvbnN0cnVjdG9yKG4sdSl9ZnVuY3Rpb24gUih1LHQsaSl7dmFyIHIsbyxlLGY7dD09ZG9jdW1lbnQmJih0PWRvY3VtZW50LmRvY3VtZW50RWxlbWVudCksbC5fXyYmbC5fXyh1LHQpLG89KHI9XCJmdW5jdGlvblwiPT10eXBlb2YgaSk/bnVsbDppJiZpLl9fa3x8dC5fX2ssZT1bXSxmPVtdLHEodCx1PSghciYmaXx8dCkuX19rPWsoUyxudWxsLFt1XSksb3x8ZCxkLHQubmFtZXNwYWNlVVJJLCFyJiZpP1tpXTpvP251bGw6dC5maXJzdENoaWxkP24uY2FsbCh0LmNoaWxkTm9kZXMpOm51bGwsZSwhciYmaT9pOm8/by5fX2U6dC5maXJzdENoaWxkLHIsZiksRChlLHUsZil9ZnVuY3Rpb24gVShuLGwpe1IobixsLFUpfWZ1bmN0aW9uIFcobCx1LHQpe3ZhciBpLHIsbyxlLGY9bSh7fSxsLnByb3BzKTtmb3IobyBpbiBsLnR5cGUmJmwudHlwZS5kZWZhdWx0UHJvcHMmJihlPWwudHlwZS5kZWZhdWx0UHJvcHMpLHUpXCJrZXlcIj09bz9pPXVbb106XCJyZWZcIj09bz9yPXVbb106ZltvXT12b2lkIDA9PT11W29dJiZudWxsIT1lP2Vbb106dVtvXTtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD4yJiYoZi5jaGlsZHJlbj1hcmd1bWVudHMubGVuZ3RoPjM/bi5jYWxsKGFyZ3VtZW50cywyKTp0KSx4KGwudHlwZSxmLGl8fGwua2V5LHJ8fGwucmVmLG51bGwpfWZ1bmN0aW9uIFgobil7ZnVuY3Rpb24gbChuKXt2YXIgdSx0O3JldHVybiB0aGlzLmdldENoaWxkQ29udGV4dHx8KHU9bmV3IFNldCwodD17fSlbbC5fX2NdPXRoaXMsdGhpcy5nZXRDaGlsZENvbnRleHQ9ZnVuY3Rpb24oKXtyZXR1cm4gdH0sdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3U9bnVsbH0sdGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGU9ZnVuY3Rpb24obil7dGhpcy5wcm9wcy52YWx1ZSE9bi52YWx1ZSYmdS5mb3JFYWNoKGZ1bmN0aW9uKG4pe24uX19lPSEwLEEobil9KX0sdGhpcy5zdWI9ZnVuY3Rpb24obil7dS5hZGQobik7dmFyIGw9bi5jb21wb25lbnRXaWxsVW5tb3VudDtuLmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7dSYmdS5kZWxldGUobiksbCYmbC5jYWxsKG4pfX0pLG4uY2hpbGRyZW59cmV0dXJuIGwuX19jPVwiX19jQ1wiK3krKyxsLl9fPW4sbC5Qcm92aWRlcj1sLl9fbD0obC5Db25zdW1lcj1mdW5jdGlvbihuLGwpe3JldHVybiBuLmNoaWxkcmVuKGwpfSkuY29udGV4dFR5cGU9bCxsfW49dy5zbGljZSxsPXtfX2U6ZnVuY3Rpb24obixsLHUsdCl7Zm9yKHZhciBpLHIsbztsPWwuX187KWlmKChpPWwuX19jKSYmIWkuX18pdHJ5e2lmKChyPWkuY29uc3RydWN0b3IpJiZudWxsIT1yLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvciYmKGkuc2V0U3RhdGUoci5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IobikpLG89aS5fX2QpLG51bGwhPWkuY29tcG9uZW50RGlkQ2F0Y2gmJihpLmNvbXBvbmVudERpZENhdGNoKG4sdHx8e30pLG89aS5fX2QpLG8pcmV0dXJuIGkuX19FPWl9Y2F0Y2gobCl7bj1sfXRocm93IG59fSx1PTAsdD1mdW5jdGlvbihuKXtyZXR1cm4gbnVsbCE9biYmdm9pZCAwPT09bi5jb25zdHJ1Y3Rvcn0sQy5wcm90b3R5cGUuc2V0U3RhdGU9ZnVuY3Rpb24obixsKXt2YXIgdTt1PW51bGwhPXRoaXMuX19zJiZ0aGlzLl9fcyE9dGhpcy5zdGF0ZT90aGlzLl9fczp0aGlzLl9fcz1tKHt9LHRoaXMuc3RhdGUpLFwiZnVuY3Rpb25cIj09dHlwZW9mIG4mJihuPW4obSh7fSx1KSx0aGlzLnByb3BzKSksbiYmbSh1LG4pLG51bGwhPW4mJnRoaXMuX192JiYobCYmdGhpcy5fc2IucHVzaChsKSxBKHRoaXMpKX0sQy5wcm90b3R5cGUuZm9yY2VVcGRhdGU9ZnVuY3Rpb24obil7dGhpcy5fX3YmJih0aGlzLl9fZT0hMCxuJiZ0aGlzLl9faC5wdXNoKG4pLEEodGhpcykpfSxDLnByb3RvdHlwZS5yZW5kZXI9UyxpPVtdLG89XCJmdW5jdGlvblwiPT10eXBlb2YgUHJvbWlzZT9Qcm9taXNlLnByb3RvdHlwZS50aGVuLmJpbmQoUHJvbWlzZS5yZXNvbHZlKCkpOnNldFRpbWVvdXQsZT1mdW5jdGlvbihuLGwpe3JldHVybiBuLl9fdi5fX2ItbC5fX3YuX19ifSxILl9fcj0wLGY9TWF0aC5yYW5kb20oKS50b1N0cmluZyg4KSxjPVwiX19kXCIrZixzPVwiX19hXCIrZixhPS8oUG9pbnRlckNhcHR1cmUpJHxDYXB0dXJlJC9pLGg9MCxwPVYoITEpLHY9VighMCkseT0wO2V4cG9ydHtDIGFzIENvbXBvbmVudCxTIGFzIEZyYWdtZW50LFcgYXMgY2xvbmVFbGVtZW50LFggYXMgY3JlYXRlQ29udGV4dCxrIGFzIGNyZWF0ZUVsZW1lbnQsTSBhcyBjcmVhdGVSZWYsayBhcyBoLFUgYXMgaHlkcmF0ZSx0IGFzIGlzVmFsaWRFbGVtZW50LGwgYXMgb3B0aW9ucyxSIGFzIHJlbmRlcixGIGFzIHRvQ2hpbGRBcnJheX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcmVhY3QubW9kdWxlLmpzLm1hcFxuIiwKICAgICIvKipcbiAqIEZ1c2UuanMgdjcuNC4xIC0gTGlnaHR3ZWlnaHQgZnV6enktc2VhcmNoIChodHRwOi8vZnVzZWpzLmlvKVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAyNiBLaXJvIFJpc2sgKGh0dHA6Ly9raXJvLm1lKVxuICogQWxsIFJpZ2h0cyBSZXNlcnZlZC4gQXBhY2hlIFNvZnR3YXJlIExpY2Vuc2UgMi4wXG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKi9cblxuZnVuY3Rpb24gaXNBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gIUFycmF5LmlzQXJyYXkgPyBnZXRUYWcodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nIDogQXJyYXkuaXNBcnJheSh2YWx1ZSk7XG59XG5mdW5jdGlvbiBiYXNlVG9TdHJpbmcodmFsdWUpIHtcbiAgLy8gRXhpdCBlYXJseSBmb3Igc3RyaW5ncyB0byBhdm9pZCBhIHBlcmZvcm1hbmNlIGhpdCBpbiBzb21lIGVudmlyb25tZW50cy5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnYmlnaW50Jykge1xuICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xuICB9XG4gIGNvbnN0IHJlc3VsdCA9IHZhbHVlICsgJyc7XG4gIHJldHVybiByZXN1bHQgPT0gJzAnICYmIDEgLyB2YWx1ZSA9PSAtSW5maW5pdHkgPyAnLTAnIDogcmVzdWx0O1xufVxuZnVuY3Rpb24gdG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgPyAnJyA6IGJhc2VUb1N0cmluZyh2YWx1ZSk7XG59XG5mdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcbn1cbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInO1xufVxuXG4vLyBBZGFwdGVkIGZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9sb2Rhc2gvbG9kYXNoL2Jsb2IvbWFzdGVyL2lzQm9vbGVhbi5qc1xuZnVuY3Rpb24gaXNCb29sZWFuKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gdHJ1ZSB8fCB2YWx1ZSA9PT0gZmFsc2UgfHwgaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBnZXRUYWcodmFsdWUpID09ICdbb2JqZWN0IEJvb2xlYW5dJztcbn1cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnO1xufVxuXG4vLyBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS5cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3QodmFsdWUpICYmIHZhbHVlICE9PSBudWxsO1xufVxuZnVuY3Rpb24gaXNEZWZpbmVkKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsO1xufVxuZnVuY3Rpb24gaXNCbGFuayh2YWx1ZSkge1xuICByZXR1cm4gIXZhbHVlLnRyaW0oKS5sZW5ndGg7XG59XG5cbi8vIEdldHMgdGhlIGB0b1N0cmluZ1RhZ2Agb2YgYHZhbHVlYC5cbi8vIEFkYXB0ZWQgZnJvbTogaHR0cHM6Ly9naXRodWIuY29tL2xvZGFzaC9sb2Rhc2gvYmxvYi9tYXN0ZXIvLmludGVybmFsL2dldFRhZy5qc1xuZnVuY3Rpb24gZ2V0VGFnKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PSBudWxsID8gdmFsdWUgPT09IHVuZGVmaW5lZCA/ICdbb2JqZWN0IFVuZGVmaW5lZF0nIDogJ1tvYmplY3QgTnVsbF0nIDogT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxuY29uc3QgSU5DT1JSRUNUX0lOREVYX1RZUEUgPSBcIkluY29ycmVjdCAnaW5kZXgnIHR5cGVcIjtcbmNvbnN0IElOVkFMSURfRE9DX0lOREVYID0gJ0ludmFsaWQgZG9jIGluZGV4OiBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIGludGVnZXIgd2l0aGluIHRoZSBib3VuZHMgb2YgdGhlIGRvY3MgYXJyYXknO1xuY29uc3QgTE9HSUNBTF9TRUFSQ0hfSU5WQUxJRF9RVUVSWV9GT1JfS0VZID0ga2V5ID0+IGBJbnZhbGlkIHZhbHVlIGZvciBrZXkgJHtrZXl9YDtcbmNvbnN0IFBBVFRFUk5fTEVOR1RIX1RPT19MQVJHRSA9IG1heCA9PiBgUGF0dGVybiBsZW5ndGggZXhjZWVkcyBtYXggb2YgJHttYXh9LmA7XG5jb25zdCBNSVNTSU5HX0tFWV9QUk9QRVJUWSA9IG5hbWUgPT4gYE1pc3NpbmcgJHtuYW1lfSBwcm9wZXJ0eSBpbiBrZXlgO1xuY29uc3QgSU5WQUxJRF9LRVlfV0VJR0hUX1ZBTFVFID0ga2V5ID0+IGBQcm9wZXJ0eSAnd2VpZ2h0JyBpbiBrZXkgJyR7a2V5fScgbXVzdCBiZSBhIHBvc2l0aXZlIGludGVnZXJgO1xuY29uc3QgRlVTRV9NQVRDSF9UT0tFTl9TRUFSQ0hfVU5TVVBQT1JURUQgPSBgRnVzZS5tYXRjaCBkb2VzIG5vdCBzdXBwb3J0IHVzZVRva2VuU2VhcmNoOiB0b2tlbiBzZWFyY2ggcmVxdWlyZXMgYCArIGBjb3JwdXMtbGV2ZWwgc3RhdGlzdGljcyAoZGYsIGZpZWxkQ291bnQpIHRoYXQgYSBvbmUtb2ZmIHN0cmluZyBgICsgYGNvbXBhcmlzb24gZG9lcyBub3QgaGF2ZS4gVXNlIG5ldyBGdXNlKC4uLikuc2VhcmNoKC4uLikgaW5zdGVhZC5gO1xuXG5jb25zdCBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuY2xhc3MgS2V5U3RvcmUge1xuICBjb25zdHJ1Y3RvcihrZXlzKSB7XG4gICAgdGhpcy5fa2V5cyA9IFtdO1xuICAgIHRoaXMuX2tleU1hcCA9IHt9O1xuICAgIGxldCB0b3RhbFdlaWdodCA9IDA7XG4gICAga2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBjb25zdCBvYmogPSBjcmVhdGVLZXkoa2V5KTtcbiAgICAgIHRoaXMuX2tleXMucHVzaChvYmopO1xuICAgICAgdGhpcy5fa2V5TWFwW29iai5pZF0gPSBvYmo7XG4gICAgICB0b3RhbFdlaWdodCArPSBvYmoud2VpZ2h0O1xuICAgIH0pO1xuXG4gICAgLy8gTm9ybWFsaXplIHdlaWdodHMgc28gdGhhdCB0aGVpciBzdW0gaXMgZXF1YWwgdG8gMVxuICAgIHRoaXMuX2tleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAga2V5LndlaWdodCAvPSB0b3RhbFdlaWdodDtcbiAgICB9KTtcbiAgfVxuICBnZXQoa2V5SWQpIHtcbiAgICByZXR1cm4gdGhpcy5fa2V5TWFwW2tleUlkXTtcbiAgfVxuICBrZXlzKCkge1xuICAgIHJldHVybiB0aGlzLl9rZXlzO1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5fa2V5cyk7XG4gIH1cbn1cbmZ1bmN0aW9uIGNyZWF0ZUtleShrZXkpIHtcbiAgbGV0IHBhdGggPSBudWxsO1xuICBsZXQgaWQgPSBudWxsO1xuICBsZXQgc3JjID0gbnVsbDtcbiAgbGV0IHdlaWdodCA9IDE7XG4gIGxldCBnZXRGbiA9IG51bGw7XG4gIGlmIChpc1N0cmluZyhrZXkpIHx8IGlzQXJyYXkoa2V5KSkge1xuICAgIHNyYyA9IGtleTtcbiAgICBwYXRoID0gY3JlYXRlS2V5UGF0aChrZXkpO1xuICAgIGlkID0gY3JlYXRlS2V5SWQoa2V5KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIWhhc093bi5jYWxsKGtleSwgJ25hbWUnKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKE1JU1NJTkdfS0VZX1BST1BFUlRZKCduYW1lJykpO1xuICAgIH1cbiAgICBjb25zdCBuYW1lID0ga2V5Lm5hbWU7XG4gICAgc3JjID0gbmFtZTtcbiAgICBpZiAoaGFzT3duLmNhbGwoa2V5LCAnd2VpZ2h0JykgJiYga2V5LndlaWdodCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB3ZWlnaHQgPSBrZXkud2VpZ2h0O1xuICAgICAgaWYgKHdlaWdodCA8PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihJTlZBTElEX0tFWV9XRUlHSFRfVkFMVUUoY3JlYXRlS2V5SWQobmFtZSkpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcGF0aCA9IGNyZWF0ZUtleVBhdGgobmFtZSk7XG4gICAgaWQgPSBjcmVhdGVLZXlJZChuYW1lKTtcbiAgICBnZXRGbiA9IGtleS5nZXRGbiA/PyBudWxsO1xuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aDogcGF0aCxcbiAgICBpZDogaWQsXG4gICAgd2VpZ2h0LFxuICAgIHNyYzogc3JjLFxuICAgIGdldEZuXG4gIH07XG59XG5mdW5jdGlvbiBjcmVhdGVLZXlQYXRoKGtleSkge1xuICByZXR1cm4gaXNBcnJheShrZXkpID8ga2V5IDoga2V5LnNwbGl0KCcuJyk7XG59XG5mdW5jdGlvbiBjcmVhdGVLZXlJZChrZXkpIHtcbiAgcmV0dXJuIGlzQXJyYXkoa2V5KSA/IGtleS5qb2luKCcuJykgOiBrZXk7XG59XG5cbmZ1bmN0aW9uIGdldChvYmosIHBhdGgpIHtcbiAgY29uc3QgbGlzdCA9IFtdO1xuICBsZXQgYXJyID0gZmFsc2U7XG4gIGNvbnN0IGRlZXBHZXQgPSAob2JqLCBwYXRoLCBpbmRleCwgYXJyYXlJbmRleCkgPT4ge1xuICAgIGlmICghaXNEZWZpbmVkKG9iaikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFwYXRoW2luZGV4XSkge1xuICAgICAgLy8gSWYgdGhlcmUncyBubyBwYXRoIGxlZnQsIHdlJ3ZlIGFycml2ZWQgYXQgdGhlIG9iamVjdCB3ZSBjYXJlIGFib3V0LlxuICAgICAgbGlzdC5wdXNoKGFycmF5SW5kZXggIT09IHVuZGVmaW5lZCA/IHtcbiAgICAgICAgdjogb2JqLFxuICAgICAgICBpOiBhcnJheUluZGV4XG4gICAgICB9IDogb2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qga2V5ID0gcGF0aFtpbmRleF07XG4gICAgICBjb25zdCB2YWx1ZSA9IG9ialtrZXldO1xuICAgICAgaWYgKCFpc0RlZmluZWQodmFsdWUpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgd2UncmUgYXQgdGhlIGxhc3QgdmFsdWUgaW4gdGhlIHBhdGgsIGFuZCBpZiBpdCdzIGEgc3RyaW5nL251bWJlci9ib29sLFxuICAgICAgLy8gYWRkIGl0IHRvIHRoZSBsaXN0XG4gICAgICBpZiAoaW5kZXggPT09IHBhdGgubGVuZ3RoIC0gMSAmJiAoaXNTdHJpbmcodmFsdWUpIHx8IGlzTnVtYmVyKHZhbHVlKSB8fCBpc0Jvb2xlYW4odmFsdWUpIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ2JpZ2ludCcpKSB7XG4gICAgICAgIGxpc3QucHVzaChhcnJheUluZGV4ICE9PSB1bmRlZmluZWQgPyB7XG4gICAgICAgICAgdjogdG9TdHJpbmcodmFsdWUpLFxuICAgICAgICAgIGk6IGFycmF5SW5kZXhcbiAgICAgICAgfSA6IHRvU3RyaW5nKHZhbHVlKSk7XG4gICAgICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIGFyciA9IHRydWU7XG4gICAgICAgIC8vIFNlYXJjaCBlYWNoIGl0ZW0gaW4gdGhlIGFycmF5LlxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdmFsdWUubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgICBkZWVwR2V0KHZhbHVlW2ldLCBwYXRoLCBpbmRleCArIDEsIGkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHBhdGgubGVuZ3RoKSB7XG4gICAgICAgIC8vIEFuIG9iamVjdC4gUmVjdXJzZSBmdXJ0aGVyLlxuICAgICAgICBkZWVwR2V0KHZhbHVlLCBwYXRoLCBpbmRleCArIDEsIGFycmF5SW5kZXgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvLyBCYWNrd2FyZHMgY29tcGF0aWJpbGl0eSAoc2luY2UgcGF0aCB1c2VkIHRvIGJlIGEgc3RyaW5nKVxuICBkZWVwR2V0KG9iaiwgaXNTdHJpbmcocGF0aCkgPyBwYXRoLnNwbGl0KCcuJykgOiBwYXRoLCAwKTtcbiAgcmV0dXJuIGFyciA/IGxpc3QgOiBsaXN0WzBdO1xufVxuXG5jb25zdCBNYXRjaE9wdGlvbnMgPSB7XG4gIGluY2x1ZGVNYXRjaGVzOiBmYWxzZSxcbiAgZmluZEFsbE1hdGNoZXM6IGZhbHNlLFxuICBtaW5NYXRjaENoYXJMZW5ndGg6IDFcbn07XG5jb25zdCBCYXNpY09wdGlvbnMgPSB7XG4gIGlzQ2FzZVNlbnNpdGl2ZTogZmFsc2UsXG4gIGlnbm9yZURpYWNyaXRpY3M6IGZhbHNlLFxuICBpbmNsdWRlU2NvcmU6IGZhbHNlLFxuICBrZXlzOiBbXSxcbiAgc2hvdWxkU29ydDogdHJ1ZSxcbiAgc29ydEZuOiAoYSwgYikgPT4gYS5zY29yZSA9PT0gYi5zY29yZSA/IGEuaWR4IDwgYi5pZHggPyAtMSA6IDEgOiBhLnNjb3JlIDwgYi5zY29yZSA/IC0xIDogMVxufTtcbmNvbnN0IEZ1enp5T3B0aW9ucyA9IHtcbiAgbG9jYXRpb246IDAsXG4gIHRocmVzaG9sZDogMC42LFxuICBkaXN0YW5jZTogMTAwXG59O1xuY29uc3QgQWR2YW5jZWRPcHRpb25zID0ge1xuICB1c2VFeHRlbmRlZFNlYXJjaDogZmFsc2UsXG4gIHVzZVRva2VuU2VhcmNoOiBmYWxzZSxcbiAgdG9rZW5pemU6IHVuZGVmaW5lZCxcbiAgdG9rZW5NYXRjaDogJ2FueScsXG4gIGdldEZuOiBnZXQsXG4gIGlnbm9yZUxvY2F0aW9uOiBmYWxzZSxcbiAgaWdub3JlRmllbGROb3JtOiBmYWxzZSxcbiAgZmllbGROb3JtV2VpZ2h0OiAxXG59O1xuY29uc3QgQ29uZmlnID0gT2JqZWN0LmZyZWV6ZSh7XG4gIC4uLkJhc2ljT3B0aW9ucyxcbiAgLi4uTWF0Y2hPcHRpb25zLFxuICAuLi5GdXp6eU9wdGlvbnMsXG4gIC4uLkFkdmFuY2VkT3B0aW9uc1xufSk7XG5cbi8vIEZpZWxkLWxlbmd0aCBub3JtOiB0aGUgc2hvcnRlciB0aGUgZmllbGQsIHRoZSBoaWdoZXIgdGhlIHdlaWdodC5cbi8vIFNldCB0byAzIGRlY2ltYWxzIHRvIHJlZHVjZSBpbmRleCBzaXplLlxuZnVuY3Rpb24gbm9ybSh3ZWlnaHQgPSAxLCBtYW50aXNzYSA9IDMpIHtcbiAgY29uc3QgY2FjaGUgPSBuZXcgTWFwKCk7XG4gIGNvbnN0IG0gPSBNYXRoLnBvdygxMCwgbWFudGlzc2EpO1xuICByZXR1cm4ge1xuICAgIGdldCh2YWx1ZSkge1xuICAgICAgLy8gQ291bnQgd29yZHMgYnkgY291bnRpbmcgc3BhY2UgdHJhbnNpdGlvbnMg4oCUIGF2b2lkcyBhbGxvY2F0aW5nIGEgcmVnZXggbWF0Y2ggYXJyYXlcbiAgICAgIGxldCBudW1Ub2tlbnMgPSAxO1xuICAgICAgbGV0IGluU3BhY2UgPSBmYWxzZTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHZhbHVlLmNoYXJDb2RlQXQoaSkgPT09IDMyKSB7XG4gICAgICAgICAgaWYgKCFpblNwYWNlKSB7XG4gICAgICAgICAgICBudW1Ub2tlbnMrKztcbiAgICAgICAgICAgIGluU3BhY2UgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpblNwYWNlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChjYWNoZS5oYXMobnVtVG9rZW5zKSkge1xuICAgICAgICByZXR1cm4gY2FjaGUuZ2V0KG51bVRva2Vucyk7XG4gICAgICB9XG5cbiAgICAgIC8vIERlZmF1bHQgZnVuY3Rpb24gaXMgMS9zcXJ0KHgpLCB3ZWlnaHQgbWFrZXMgdGhhdCB2YXJpYWJsZVxuICAgICAgY29uc3QgbiA9IE1hdGgucm91bmQobSAvIE1hdGgucG93KG51bVRva2VucywgMC41ICogd2VpZ2h0KSkgLyBtO1xuICAgICAgY2FjaGUuc2V0KG51bVRva2Vucywgbik7XG4gICAgICByZXR1cm4gbjtcbiAgICB9LFxuICAgIGNsZWFyKCkge1xuICAgICAgY2FjaGUuY2xlYXIoKTtcbiAgICB9XG4gIH07XG59XG5cbmNsYXNzIEZ1c2VJbmRleCB7XG4gIGNvbnN0cnVjdG9yKHtcbiAgICBnZXRGbiA9IENvbmZpZy5nZXRGbixcbiAgICBmaWVsZE5vcm1XZWlnaHQgPSBDb25maWcuZmllbGROb3JtV2VpZ2h0XG4gIH0gPSB7fSkge1xuICAgIHRoaXMubm9ybSA9IG5vcm0oZmllbGROb3JtV2VpZ2h0LCAzKTtcbiAgICB0aGlzLmdldEZuID0gZ2V0Rm47XG4gICAgdGhpcy5pc0NyZWF0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRvY3MgPSBbXTtcbiAgICB0aGlzLmtleXMgPSBbXTtcbiAgICB0aGlzLl9rZXlzTWFwID0ge307XG4gICAgdGhpcy5zZXRJbmRleFJlY29yZHMoKTtcbiAgfVxuICBzZXRTb3VyY2VzKGRvY3MgPSBbXSkge1xuICAgIHRoaXMuZG9jcyA9IGRvY3M7XG4gIH1cbiAgc2V0SW5kZXhSZWNvcmRzKHJlY29yZHMgPSBbXSkge1xuICAgIHRoaXMucmVjb3JkcyA9IHJlY29yZHM7XG4gIH1cbiAgc2V0S2V5cyhrZXlzID0gW10pIHtcbiAgICB0aGlzLmtleXMgPSBrZXlzO1xuICAgIHRoaXMuX2tleXNNYXAgPSB7fTtcbiAgICBrZXlzLmZvckVhY2goKGtleSwgaWR4KSA9PiB7XG4gICAgICB0aGlzLl9rZXlzTWFwW2tleS5pZF0gPSBpZHg7XG4gICAgfSk7XG4gIH1cbiAgY3JlYXRlKCkge1xuICAgIGlmICh0aGlzLmlzQ3JlYXRlZCB8fCAhdGhpcy5kb2NzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmlzQ3JlYXRlZCA9IHRydWU7XG4gICAgY29uc3QgbGVuID0gdGhpcy5kb2NzLmxlbmd0aDtcbiAgICB0aGlzLnJlY29yZHMgPSBuZXcgQXJyYXkobGVuKTtcbiAgICBsZXQgcmVjb3JkQ291bnQgPSAwO1xuXG4gICAgLy8gTGlzdCBpcyBBcnJheTxTdHJpbmc+XG4gICAgaWYgKGlzU3RyaW5nKHRoaXMuZG9jc1swXSkpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgY29uc3QgcmVjb3JkID0gdGhpcy5fY3JlYXRlU3RyaW5nUmVjb3JkKHRoaXMuZG9jc1tpXSwgaSk7XG4gICAgICAgIGlmIChyZWNvcmQpIHtcbiAgICAgICAgICB0aGlzLnJlY29yZHNbcmVjb3JkQ291bnQrK10gPSByZWNvcmQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTGlzdCBpcyBBcnJheTxPYmplY3Q+XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHRoaXMucmVjb3Jkc1tyZWNvcmRDb3VudCsrXSA9IHRoaXMuX2NyZWF0ZU9iamVjdFJlY29yZCh0aGlzLmRvY3NbaV0sIGkpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnJlY29yZHMubGVuZ3RoID0gcmVjb3JkQ291bnQ7XG4gICAgdGhpcy5ub3JtLmNsZWFyKCk7XG4gIH1cbiAgLy8gQXBwZW5kcyBhIHJlY29yZCBmb3IgYGRvY2AgYXQgYGRvY0luZGV4YCAodGhlIGRvYydzIHBvc2l0aW9uIGluIHRoZSBzb3VyY2VcbiAgLy8gYXJyYXkpLiBSZXR1cm5zIHRoZSBhcHBlbmRlZCByZWNvcmQsIG9yIG51bGwgd2hlbiBgZG9jYCBpcyBhIGJsYW5rIHN0cmluZ1xuICAvLyAodGhvc2UgYXJlIHNraXBwZWQgYXQgcmVjb3JkIGNyZWF0aW9uOyBzZWUgYF9jcmVhdGVTdHJpbmdSZWNvcmRgKS4gQ2FsbGVyc1xuICAvLyB1c2UgdGhlIHJldHVybiB2YWx1ZSB0byBnYXRlIGRvd25zdHJlYW0gYm9va2tlZXBpbmcgbGlrZSB0aGUgaW52ZXJ0ZWRcbiAgLy8gaW5kZXgsIHdoaWNoIG11c3Qgbm90IGJlIHRvdWNoZWQgd2hlbiBubyByZWNvcmQgd2FzIHByb2R1Y2VkLlxuICBhZGQoZG9jLCBkb2NJbmRleCkge1xuICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihkb2NJbmRleCkgfHwgZG9jSW5kZXggPCAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoSU5WQUxJRF9ET0NfSU5ERVgpO1xuICAgIH1cbiAgICBpZiAoaXNTdHJpbmcoZG9jKSkge1xuICAgICAgY29uc3QgcmVjb3JkID0gdGhpcy5fY3JlYXRlU3RyaW5nUmVjb3JkKGRvYywgZG9jSW5kZXgpO1xuICAgICAgaWYgKHJlY29yZCkge1xuICAgICAgICB0aGlzLnJlY29yZHMucHVzaChyZWNvcmQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlY29yZDtcbiAgICB9XG4gICAgY29uc3QgcmVjb3JkID0gdGhpcy5fY3JlYXRlT2JqZWN0UmVjb3JkKGRvYywgZG9jSW5kZXgpO1xuICAgIHRoaXMucmVjb3Jkcy5wdXNoKHJlY29yZCk7XG4gICAgcmV0dXJuIHJlY29yZDtcbiAgfVxuICAvLyBSZW1vdmVzIHRoZSByZWNvcmQgZm9yIHRoZSBkb2MgYXQgdGhlIHNwZWNpZmllZCBzb3VyY2UtYXJyYXkgKGRvY3MpIGluZGV4LlxuICAvLyBCbGFuayBzdHJpbmcgZG9jcyBoYXZlIG5vIHJlY29yZDsgY2FsbGVycyBtYXkgcGFzcyBzdWNoIGFuIGluZGV4IGFuZCB0aGVcbiAgLy8gc3BsaWNlIGlzIGEgbm8tb3AsIGJ1dCBzdWJzZXF1ZW50IHJlY29yZHMgc3RpbGwgbmVlZCB0aGVpciAuaSBkZWNyZW1lbnRlZFxuICAvLyB0byB0cmFjayB0aGUgZG9jcyBhcnJheSB0aGF0IHRoZSBjYWxsZXIgaXMgc3BsaWNpbmcgaW4gcGFyYWxsZWwuXG4gIHJlbW92ZUF0KGlkeCkge1xuICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihpZHgpIHx8IGlkeCA8IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihJTlZBTElEX0RPQ19JTkRFWCk7XG4gICAgfVxuXG4gICAgLy8gRmluZCBhbmQgcmVtb3ZlIHRoZSByZWNvcmQgYXQgdGhpcyBkb2MtaW5kZXgsIGlmIG9uZSBleGlzdHMuIFJlY29yZHMgYXJlXG4gICAgLy8gdHlwaWNhbGx5IHNvcnRlZCBieSAuaSBidXQgdGhlIGFsZ29yaXRobSBkb2Vzbid0IGRlcGVuZCBvbiBpdCDigJQgcGFyc2VkXG4gICAgLy8gaW5kZXhlcyB2aWEgc2V0SW5kZXhSZWNvcmRzIG1heSBhcnJpdmUgaW4gYXJiaXRyYXJ5IG9yZGVyLlxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aGlzLnJlY29yZHMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgIGlmICh0aGlzLnJlY29yZHNbaV0uaSA9PT0gaWR4KSB7XG4gICAgICAgIHRoaXMucmVjb3Jkcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIERlY3JlbWVudCBldmVyeSByZWNvcmQgd2hvc2Ugc291cmNlLWFycmF5IGluZGV4IGlzIG5vdyBzdGFsZS5cbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdGhpcy5yZWNvcmRzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICBpZiAodGhpcy5yZWNvcmRzW2ldLmkgPiBpZHgpIHtcbiAgICAgICAgdGhpcy5yZWNvcmRzW2ldLmkgLT0gMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gUmVtb3ZlcyByZWNvcmRzIGZvciB0aGUgZG9jcyBhdCB0aGUgc3BlY2lmaWVkIHNvdXJjZS1hcnJheSBpbmRpY2VzLCB0aGVuXG4gIC8vIHNoaWZ0cyBldmVyeSBzdXJ2aXZpbmcgcmVjb3JkJ3MgLmkgZG93biBieSB0aGUgY291bnQgb2YgcmVtb3ZlZCBpbmRpY2VzXG4gIC8vIHN0cmljdGx5IGxlc3MgdGhhbiBpdCAobWlycm9ycyByZW1vdmVBbmRTaGlmdEludmVydGVkSW5kZXgncyBzaGlmdCBtYXRoKS5cbiAgLy8gSW52YWxpZCBlbnRyaWVzIChub24taW50ZWdlciwgbmVnYXRpdmUpIGluIGBpbmRpY2VzYCBhcmUgZHJvcHBlZCBzaWxlbnRseVxuICAvLyDigJQgcmVtb3ZlQWxsJ3MgbmF0dXJhbCB1c2UgY2FzZSBpcyBcImNhbGxlciBwYXNzZWQgYSBsaXN0IG9mIG1hdGNoZWQgZG9jXG4gIC8vIGluZGljZXNcIjsgYXN5bW1ldHJpYyB0aHJvdy12cy1uby1vcCB3b3VsZCBiZSBtb3JlIHN1cnByaXNpbmcgdGhhbiBhIGNsZWFuXG4gIC8vIGZpbHRlci5cbiAgcmVtb3ZlQWxsKGluZGljZXMpIHtcbiAgICBjb25zdCB0b1JlbW92ZSA9IG5ldyBTZXQoKTtcbiAgICBmb3IgKGNvbnN0IHYgb2YgaW5kaWNlcykge1xuICAgICAgaWYgKE51bWJlci5pc0ludGVnZXIodikgJiYgdiA+PSAwKSB7XG4gICAgICAgIHRvUmVtb3ZlLmFkZCh2KTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRvUmVtb3ZlLnNpemUgPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5yZWNvcmRzID0gdGhpcy5yZWNvcmRzLmZpbHRlcihyID0+ICF0b1JlbW92ZS5oYXMoci5pKSk7XG4gICAgY29uc3Qgc29ydGVkID0gQXJyYXkuZnJvbSh0b1JlbW92ZSkuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xuICAgIGZvciAoY29uc3QgcmVjb3JkIG9mIHRoaXMucmVjb3Jkcykge1xuICAgICAgLy8gc2hpZnQgPSBjb3VudCBvZiByZW1vdmVkIGluZGljZXMgc3RyaWN0bHkgbGVzcyB0aGFuIHJlY29yZC5pXG4gICAgICBsZXQgbG8gPSAwO1xuICAgICAgbGV0IGhpID0gc29ydGVkLmxlbmd0aDtcbiAgICAgIHdoaWxlIChsbyA8IGhpKSB7XG4gICAgICAgIGNvbnN0IG1pZCA9IGxvICsgaGkgPj4+IDE7XG4gICAgICAgIGlmIChzb3J0ZWRbbWlkXSA8IHJlY29yZC5pKSBsbyA9IG1pZCArIDE7ZWxzZSBoaSA9IG1pZDtcbiAgICAgIH1cbiAgICAgIHJlY29yZC5pIC09IGxvO1xuICAgIH1cbiAgfVxuICBnZXRWYWx1ZUZvckl0ZW1BdEtleUlkKGl0ZW0sIGtleUlkKSB7XG4gICAgcmV0dXJuIGl0ZW1bdGhpcy5fa2V5c01hcFtrZXlJZF1dO1xuICB9XG4gIHNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVjb3Jkcy5sZW5ndGg7XG4gIH1cbiAgX2NyZWF0ZVN0cmluZ1JlY29yZChkb2MsIGRvY0luZGV4KSB7XG4gICAgaWYgKCFpc0RlZmluZWQoZG9jKSB8fCBpc0JsYW5rKGRvYykpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgdjogZG9jLFxuICAgICAgaTogZG9jSW5kZXgsXG4gICAgICBuOiB0aGlzLm5vcm0uZ2V0KGRvYylcbiAgICB9O1xuICB9XG4gIF9jcmVhdGVPYmplY3RSZWNvcmQoZG9jLCBkb2NJbmRleCkge1xuICAgIGNvbnN0IHJlY29yZCA9IHtcbiAgICAgIGk6IGRvY0luZGV4LFxuICAgICAgJDoge31cbiAgICB9O1xuXG4gICAgLy8gSXRlcmF0ZSBvdmVyIGV2ZXJ5IGtleSAoaS5lLCBwYXRoKSwgYW5kIGZldGNoIHRoZSB2YWx1ZSBhdCB0aGF0IGtleVxuICAgIGZvciAobGV0IGtleUluZGV4ID0gMCwga2V5TGVuID0gdGhpcy5rZXlzLmxlbmd0aDsga2V5SW5kZXggPCBrZXlMZW47IGtleUluZGV4KyspIHtcbiAgICAgIGNvbnN0IGtleSA9IHRoaXMua2V5c1trZXlJbmRleF07XG4gICAgICBjb25zdCB2YWx1ZSA9IGtleS5nZXRGbiA/IGtleS5nZXRGbihkb2MpIDogdGhpcy5nZXRGbihkb2MsIGtleS5wYXRoKTtcbiAgICAgIGlmICghaXNEZWZpbmVkKHZhbHVlKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgICBjb25zdCBzdWJSZWNvcmRzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB2YWx1ZS5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgICAgIGNvbnN0IGl0ZW0gPSB2YWx1ZVtpXTtcbiAgICAgICAgICBpZiAoIWlzRGVmaW5lZChpdGVtKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpc1N0cmluZyhpdGVtKSkge1xuICAgICAgICAgICAgLy8gQ3VzdG9tIGdldEZuIHJldHVybmluZyBwbGFpbiBzdHJpbmcgYXJyYXkgKGJhY2t3YXJkIGNvbXBhdClcbiAgICAgICAgICAgIGlmICghaXNCbGFuayhpdGVtKSkge1xuICAgICAgICAgICAgICBjb25zdCBzdWJSZWNvcmQgPSB7XG4gICAgICAgICAgICAgICAgdjogaXRlbSxcbiAgICAgICAgICAgICAgICBpOiBpLFxuICAgICAgICAgICAgICAgIG46IHRoaXMubm9ybS5nZXQoaXRlbSlcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgc3ViUmVjb3Jkcy5wdXNoKHN1YlJlY29yZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChpc0RlZmluZWQoaXRlbS52KSkge1xuICAgICAgICAgICAgLy8gRGVmYXVsdCBnZXQoKSByZXR1cm5zIHt2LCBpfSBvYmplY3RzIHdpdGggb3JpZ2luYWwgYXJyYXkgaW5kaWNlc1xuICAgICAgICAgICAgY29uc3QgdGV4dCA9IGlzU3RyaW5nKGl0ZW0udikgPyBpdGVtLnYgOiB0b1N0cmluZyhpdGVtLnYpO1xuICAgICAgICAgICAgaWYgKCFpc0JsYW5rKHRleHQpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHN1YlJlY29yZCA9IHtcbiAgICAgICAgICAgICAgICB2OiB0ZXh0LFxuICAgICAgICAgICAgICAgIGk6IGl0ZW0uaSxcbiAgICAgICAgICAgICAgICBuOiB0aGlzLm5vcm0uZ2V0KHRleHQpXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIHN1YlJlY29yZHMucHVzaChzdWJSZWNvcmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZWNvcmQuJFtrZXlJbmRleF0gPSBzdWJSZWNvcmRzO1xuICAgICAgfSBlbHNlIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgIWlzQmxhbmsodmFsdWUpKSB7XG4gICAgICAgIGNvbnN0IHN1YlJlY29yZCA9IHtcbiAgICAgICAgICB2OiB2YWx1ZSxcbiAgICAgICAgICBuOiB0aGlzLm5vcm0uZ2V0KHZhbHVlKVxuICAgICAgICB9O1xuICAgICAgICByZWNvcmQuJFtrZXlJbmRleF0gPSBzdWJSZWNvcmQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZWNvcmQ7XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICBrZXlzOiB0aGlzLmtleXMubWFwKCh7XG4gICAgICAgIGdldEZuLFxuICAgICAgICAuLi5rZXlcbiAgICAgIH0pID0+IGtleSksXG4gICAgICByZWNvcmRzOiB0aGlzLnJlY29yZHNcbiAgICB9O1xuICB9XG59XG5mdW5jdGlvbiBjcmVhdGVJbmRleChrZXlzLCBkb2NzLCB7XG4gIGdldEZuID0gQ29uZmlnLmdldEZuLFxuICBmaWVsZE5vcm1XZWlnaHQgPSBDb25maWcuZmllbGROb3JtV2VpZ2h0XG59ID0ge30pIHtcbiAgY29uc3QgbXlJbmRleCA9IG5ldyBGdXNlSW5kZXgoe1xuICAgIGdldEZuLFxuICAgIGZpZWxkTm9ybVdlaWdodFxuICB9KTtcbiAgbXlJbmRleC5zZXRLZXlzKGtleXMubWFwKGNyZWF0ZUtleSkpO1xuICBteUluZGV4LnNldFNvdXJjZXMoZG9jcyk7XG4gIG15SW5kZXguY3JlYXRlKCk7XG4gIHJldHVybiBteUluZGV4O1xufVxuZnVuY3Rpb24gcGFyc2VJbmRleChkYXRhLCB7XG4gIGdldEZuID0gQ29uZmlnLmdldEZuLFxuICBmaWVsZE5vcm1XZWlnaHQgPSBDb25maWcuZmllbGROb3JtV2VpZ2h0XG59ID0ge30pIHtcbiAgY29uc3Qge1xuICAgIGtleXMsXG4gICAgcmVjb3Jkc1xuICB9ID0gZGF0YTtcbiAgY29uc3QgbXlJbmRleCA9IG5ldyBGdXNlSW5kZXgoe1xuICAgIGdldEZuLFxuICAgIGZpZWxkTm9ybVdlaWdodFxuICB9KTtcbiAgbXlJbmRleC5zZXRLZXlzKGtleXMpO1xuICBteUluZGV4LnNldEluZGV4UmVjb3JkcyhyZWNvcmRzKTtcbiAgcmV0dXJuIG15SW5kZXg7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRNYXNrVG9JbmRpY2VzKG1hdGNobWFzayA9IFtdLCBtaW5NYXRjaENoYXJMZW5ndGggPSBDb25maWcubWluTWF0Y2hDaGFyTGVuZ3RoKSB7XG4gIGNvbnN0IGluZGljZXMgPSBbXTtcbiAgbGV0IHN0YXJ0ID0gLTE7XG4gIGxldCBlbmQgPSAtMTtcbiAgbGV0IGkgPSAwO1xuICBmb3IgKGxldCBsZW4gPSBtYXRjaG1hc2subGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICBjb25zdCBtYXRjaCA9IG1hdGNobWFza1tpXTtcbiAgICBpZiAobWF0Y2ggJiYgc3RhcnQgPT09IC0xKSB7XG4gICAgICBzdGFydCA9IGk7XG4gICAgfSBlbHNlIGlmICghbWF0Y2ggJiYgc3RhcnQgIT09IC0xKSB7XG4gICAgICBlbmQgPSBpIC0gMTtcbiAgICAgIGlmIChlbmQgLSBzdGFydCArIDEgPj0gbWluTWF0Y2hDaGFyTGVuZ3RoKSB7XG4gICAgICAgIGluZGljZXMucHVzaChbc3RhcnQsIGVuZF0pO1xuICAgICAgfVxuICAgICAgc3RhcnQgPSAtMTtcbiAgICB9XG4gIH1cblxuICAvLyAoaS0xIC0gc3RhcnQpICsgMSA9PiBpIC0gc3RhcnRcbiAgaWYgKG1hdGNobWFza1tpIC0gMV0gJiYgaSAtIHN0YXJ0ID49IG1pbk1hdGNoQ2hhckxlbmd0aCkge1xuICAgIGluZGljZXMucHVzaChbc3RhcnQsIGkgLSAxXSk7XG4gIH1cbiAgcmV0dXJuIGluZGljZXM7XG59XG5cbi8vIE1hY2hpbmUgd29yZCBzaXplXG5jb25zdCBNQVhfQklUUyA9IDMyO1xuXG5mdW5jdGlvbiBzZWFyY2godGV4dCwgcGF0dGVybiwgcGF0dGVybkFscGhhYmV0LCB7XG4gIGxvY2F0aW9uID0gQ29uZmlnLmxvY2F0aW9uLFxuICBkaXN0YW5jZSA9IENvbmZpZy5kaXN0YW5jZSxcbiAgdGhyZXNob2xkID0gQ29uZmlnLnRocmVzaG9sZCxcbiAgZmluZEFsbE1hdGNoZXMgPSBDb25maWcuZmluZEFsbE1hdGNoZXMsXG4gIG1pbk1hdGNoQ2hhckxlbmd0aCA9IENvbmZpZy5taW5NYXRjaENoYXJMZW5ndGgsXG4gIGluY2x1ZGVNYXRjaGVzID0gQ29uZmlnLmluY2x1ZGVNYXRjaGVzLFxuICBpZ25vcmVMb2NhdGlvbiA9IENvbmZpZy5pZ25vcmVMb2NhdGlvblxufSA9IHt9KSB7XG4gIGlmIChwYXR0ZXJuLmxlbmd0aCA+IE1BWF9CSVRTKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFBBVFRFUk5fTEVOR1RIX1RPT19MQVJHRShNQVhfQklUUykpO1xuICB9XG4gIGNvbnN0IHBhdHRlcm5MZW4gPSBwYXR0ZXJuLmxlbmd0aDtcbiAgLy8gU2V0IHN0YXJ0aW5nIGxvY2F0aW9uIGF0IGJlZ2lubmluZyB0ZXh0IGFuZCBpbml0aWFsaXplIHRoZSBhbHBoYWJldC5cbiAgY29uc3QgdGV4dExlbiA9IHRleHQubGVuZ3RoO1xuICAvLyBIYW5kbGUgdGhlIGNhc2Ugd2hlbiBsb2NhdGlvbiA+IHRleHQubGVuZ3RoXG4gIGNvbnN0IGV4cGVjdGVkTG9jYXRpb24gPSBNYXRoLm1heCgwLCBNYXRoLm1pbihsb2NhdGlvbiwgdGV4dExlbikpO1xuICAvLyBIaWdoZXN0IHNjb3JlIGJleW9uZCB3aGljaCB3ZSBnaXZlIHVwLlxuICBsZXQgY3VycmVudFRocmVzaG9sZCA9IHRocmVzaG9sZDtcbiAgLy8gSXMgdGhlcmUgYSBuZWFyYnkgZXhhY3QgbWF0Y2g/IChzcGVlZHVwKVxuICBsZXQgYmVzdExvY2F0aW9uID0gZXhwZWN0ZWRMb2NhdGlvbjtcblxuICAvLyBJbmxpbmVkIHNjb3JlIGNvbXB1dGF0aW9uIOKAlCBhdm9pZHMgb2JqZWN0IGFsbG9jYXRpb24gcGVyIGNhbGwgaW4gaG90IGxvb3BzLlxuICAvLyBTZWUgLi9jb21wdXRlU2NvcmUudHMgZm9yIHRoZSBkb2N1bWVudGVkIHZlcnNpb24gb2YgdGhpcyBmb3JtdWxhLlxuICBjb25zdCBjYWxjU2NvcmUgPSAoZXJyb3JzLCBjdXJyZW50TG9jYXRpb24pID0+IHtcbiAgICBjb25zdCBhY2N1cmFjeSA9IGVycm9ycyAvIHBhdHRlcm5MZW47XG4gICAgaWYgKGlnbm9yZUxvY2F0aW9uKSByZXR1cm4gYWNjdXJhY3k7XG4gICAgY29uc3QgcHJveGltaXR5ID0gTWF0aC5hYnMoZXhwZWN0ZWRMb2NhdGlvbiAtIGN1cnJlbnRMb2NhdGlvbik7XG4gICAgaWYgKCFkaXN0YW5jZSkgcmV0dXJuIHByb3hpbWl0eSA/IDEuMCA6IGFjY3VyYWN5O1xuICAgIHJldHVybiBhY2N1cmFjeSArIHByb3hpbWl0eSAvIGRpc3RhbmNlO1xuICB9O1xuXG4gIC8vIFBlcmZvcm1hbmNlOiBvbmx5IGNvbXB1dGVyIG1hdGNoZXMgd2hlbiB0aGUgbWluTWF0Y2hDaGFyTGVuZ3RoID4gMVxuICAvLyBPUiBpZiBgaW5jbHVkZU1hdGNoZXNgIGlzIHRydWUuXG4gIGNvbnN0IGNvbXB1dGVNYXRjaGVzID0gbWluTWF0Y2hDaGFyTGVuZ3RoID4gMSB8fCBpbmNsdWRlTWF0Y2hlcztcbiAgLy8gQSBtYXNrIG9mIHRoZSBtYXRjaGVzLCB1c2VkIGZvciBidWlsZGluZyB0aGUgaW5kaWNlc1xuICBjb25zdCBtYXRjaE1hc2sgPSBjb21wdXRlTWF0Y2hlcyA/IEFycmF5KHRleHRMZW4pIDogW107XG4gIGxldCBpbmRleDtcblxuICAvLyBHZXQgYWxsIGV4YWN0IG1hdGNoZXMsIGhlcmUgZm9yIHNwZWVkIHVwXG4gIHdoaWxlICgoaW5kZXggPSB0ZXh0LmluZGV4T2YocGF0dGVybiwgYmVzdExvY2F0aW9uKSkgPiAtMSkge1xuICAgIGNvbnN0IHNjb3JlID0gY2FsY1Njb3JlKDAsIGluZGV4KTtcbiAgICBjdXJyZW50VGhyZXNob2xkID0gTWF0aC5taW4oc2NvcmUsIGN1cnJlbnRUaHJlc2hvbGQpO1xuICAgIGJlc3RMb2NhdGlvbiA9IGluZGV4ICsgcGF0dGVybkxlbjtcbiAgICBpZiAoY29tcHV0ZU1hdGNoZXMpIHtcbiAgICAgIGxldCBpID0gMDtcbiAgICAgIHdoaWxlIChpIDwgcGF0dGVybkxlbikge1xuICAgICAgICBtYXRjaE1hc2tbaW5kZXggKyBpXSA9IDE7XG4gICAgICAgIGkgKz0gMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBSZXNldCB0aGUgYmVzdCBsb2NhdGlvblxuICBiZXN0TG9jYXRpb24gPSAtMTtcbiAgbGV0IGxhc3RCaXRBcnIgPSBbXTtcbiAgbGV0IGZpbmFsU2NvcmUgPSAxO1xuICBsZXQgYmVzdEVycm9ycyA9IDA7XG4gIGxldCBiaW5NYXggPSBwYXR0ZXJuTGVuICsgdGV4dExlbjtcbiAgY29uc3QgbWFzayA9IDEgPDwgcGF0dGVybkxlbiAtIDE7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0dGVybkxlbjsgaSArPSAxKSB7XG4gICAgLy8gU2NhbiBmb3IgdGhlIGJlc3QgbWF0Y2g7IGVhY2ggaXRlcmF0aW9uIGFsbG93cyBmb3Igb25lIG1vcmUgZXJyb3IuXG4gICAgLy8gUnVuIGEgYmluYXJ5IHNlYXJjaCB0byBkZXRlcm1pbmUgaG93IGZhciBmcm9tIHRoZSBtYXRjaCBsb2NhdGlvbiB3ZSBjYW4gc3RyYXlcbiAgICAvLyBhdCB0aGlzIGVycm9yIGxldmVsLlxuICAgIGxldCBiaW5NaW4gPSAwO1xuICAgIGxldCBiaW5NaWQgPSBiaW5NYXg7XG4gICAgd2hpbGUgKGJpbk1pbiA8IGJpbk1pZCkge1xuICAgICAgY29uc3Qgc2NvcmUgPSBjYWxjU2NvcmUoaSwgZXhwZWN0ZWRMb2NhdGlvbiArIGJpbk1pZCk7XG4gICAgICBpZiAoc2NvcmUgPD0gY3VycmVudFRocmVzaG9sZCkge1xuICAgICAgICBiaW5NaW4gPSBiaW5NaWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiaW5NYXggPSBiaW5NaWQ7XG4gICAgICB9XG4gICAgICBiaW5NaWQgPSBNYXRoLmZsb29yKChiaW5NYXggLSBiaW5NaW4pIC8gMiArIGJpbk1pbik7XG4gICAgfVxuXG4gICAgLy8gVXNlIHRoZSByZXN1bHQgZnJvbSB0aGlzIGl0ZXJhdGlvbiBhcyB0aGUgbWF4aW11bSBmb3IgdGhlIG5leHQuXG4gICAgYmluTWF4ID0gYmluTWlkO1xuICAgIGxldCBzdGFydCA9IE1hdGgubWF4KDEsIGV4cGVjdGVkTG9jYXRpb24gLSBiaW5NaWQgKyAxKTtcbiAgICBjb25zdCBmaW5pc2ggPSBmaW5kQWxsTWF0Y2hlcyA/IHRleHRMZW4gOiBNYXRoLm1pbihleHBlY3RlZExvY2F0aW9uICsgYmluTWlkLCB0ZXh0TGVuKSArIHBhdHRlcm5MZW47XG5cbiAgICAvLyBJbml0aWFsaXplIHRoZSBiaXQgYXJyYXlcbiAgICBjb25zdCBiaXRBcnIgPSBBcnJheShmaW5pc2ggKyAyKTtcbiAgICBiaXRBcnJbZmluaXNoICsgMV0gPSAoMSA8PCBpKSAtIDE7XG4gICAgZm9yIChsZXQgaiA9IGZpbmlzaDsgaiA+PSBzdGFydDsgaiAtPSAxKSB7XG4gICAgICBjb25zdCBjdXJyZW50TG9jYXRpb24gPSBqIC0gMTtcbiAgICAgIGNvbnN0IGNoYXJNYXRjaCA9IHBhdHRlcm5BbHBoYWJldFt0ZXh0W2N1cnJlbnRMb2NhdGlvbl1dO1xuXG4gICAgICAvLyBGaXJzdCBwYXNzOiBleGFjdCBtYXRjaFxuICAgICAgYml0QXJyW2pdID0gKGJpdEFycltqICsgMV0gPDwgMSB8IDEpICYgY2hhck1hdGNoO1xuXG4gICAgICAvLyBTdWJzZXF1ZW50IHBhc3NlczogZnV6enkgbWF0Y2hcbiAgICAgIGlmIChpKSB7XG4gICAgICAgIGJpdEFycltqXSB8PSAobGFzdEJpdEFycltqICsgMV0gfCBsYXN0Qml0QXJyW2pdKSA8PCAxIHwgMSB8IGxhc3RCaXRBcnJbaiArIDFdO1xuICAgICAgfVxuICAgICAgaWYgKGJpdEFycltqXSAmIG1hc2spIHtcbiAgICAgICAgZmluYWxTY29yZSA9IGNhbGNTY29yZShpLCBjdXJyZW50TG9jYXRpb24pO1xuXG4gICAgICAgIC8vIFRoaXMgbWF0Y2ggd2lsbCBhbG1vc3QgY2VydGFpbmx5IGJlIGJldHRlciB0aGFuIGFueSBleGlzdGluZyBtYXRjaC5cbiAgICAgICAgLy8gQnV0IGNoZWNrIGFueXdheS5cbiAgICAgICAgaWYgKGZpbmFsU2NvcmUgPD0gY3VycmVudFRocmVzaG9sZCkge1xuICAgICAgICAgIC8vIEluZGVlZCBpdCBpc1xuICAgICAgICAgIGN1cnJlbnRUaHJlc2hvbGQgPSBmaW5hbFNjb3JlO1xuICAgICAgICAgIGJlc3RMb2NhdGlvbiA9IGN1cnJlbnRMb2NhdGlvbjtcbiAgICAgICAgICBiZXN0RXJyb3JzID0gaTtcblxuICAgICAgICAgIC8vIEFscmVhZHkgcGFzc2VkIGBsb2NgLCBkb3duaGlsbCBmcm9tIGhlcmUgb24gaW4uXG4gICAgICAgICAgaWYgKGJlc3RMb2NhdGlvbiA8PSBleHBlY3RlZExvY2F0aW9uKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBXaGVuIHBhc3NpbmcgYGJlc3RMb2NhdGlvbmAsIGRvbid0IGV4Y2VlZCBvdXIgY3VycmVudCBkaXN0YW5jZSBmcm9tIGBleHBlY3RlZExvY2F0aW9uYC5cbiAgICAgICAgICBzdGFydCA9IE1hdGgubWF4KDEsIDIgKiBleHBlY3RlZExvY2F0aW9uIC0gYmVzdExvY2F0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE5vIGhvcGUgZm9yIGEgKGJldHRlcikgbWF0Y2ggYXQgZ3JlYXRlciBlcnJvciBsZXZlbHMuXG4gICAgY29uc3Qgc2NvcmUgPSBjYWxjU2NvcmUoaSArIDEsIGV4cGVjdGVkTG9jYXRpb24pO1xuICAgIGlmIChzY29yZSA+IGN1cnJlbnRUaHJlc2hvbGQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBsYXN0Qml0QXJyID0gYml0QXJyO1xuICB9XG5cbiAgLy8gRmlsbCBtYXRjaE1hc2sgYWNyb3NzIHRoZSBtYXRjaGVkIHdpbmRvdyBvbmx5LiBCaXRhcCBhbmNob3JzIGEgbWF0Y2ggYXRcbiAgLy8gYmVzdExvY2F0aW9uICh0aGUgc3RhcnQpLCBzcGFubmluZyBwYXR0ZXJuTGVuIGNoYXJhY3RlcnMgcGx1cyB1cCB0b1xuICAvLyBiZXN0RXJyb3JzIGV4dHJhIGNoYXJhY3RlcnMgd2hlbiBlcnJvcnMgYXJlIHRleHQtc2lkZSBpbnNlcnRpb25zLiBNYXJraW5nXG4gIC8vIGFscGhhYmV0IHBvc2l0aW9ucyBpbiB0aGF0IHdpbmRvdyBrZWVwcyB0aGUgaGlnaGxpZ2h0IGluZGljZXMgaG9uZXN0IGFib3V0XG4gIC8vIHdoYXQgYWN0dWFsbHkgbWF0Y2hlZCwgaW5zdGVhZCBvZiBldmVyeSBwYXR0ZXJuLWFscGhhYmV0IGNoYXJhY3RlciB0aGVcbiAgLy8gc2NhbiBoYXBwZW5lZCB0byB2aXNpdC5cbiAgaWYgKGNvbXB1dGVNYXRjaGVzICYmIGJlc3RMb2NhdGlvbiA+PSAwKSB7XG4gICAgY29uc3QgbWF0Y2hFbmQgPSBNYXRoLm1pbih0ZXh0TGVuIC0gMSwgYmVzdExvY2F0aW9uICsgcGF0dGVybkxlbiAtIDEgKyBiZXN0RXJyb3JzKTtcbiAgICBmb3IgKGxldCBrID0gYmVzdExvY2F0aW9uOyBrIDw9IG1hdGNoRW5kOyBrICs9IDEpIHtcbiAgICAgIGlmIChwYXR0ZXJuQWxwaGFiZXRbdGV4dFtrXV0pIHtcbiAgICAgICAgbWF0Y2hNYXNrW2tdID0gMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY29uc3QgcmVzdWx0ID0ge1xuICAgIGlzTWF0Y2g6IGJlc3RMb2NhdGlvbiA+PSAwLFxuICAgIC8vIENvdW50IGV4YWN0IG1hdGNoZXMgKHRob3NlIHdpdGggYSBzY29yZSBvZiAwKSB0byBiZSBcImFsbW9zdFwiIGV4YWN0XG4gICAgc2NvcmU6IE1hdGgubWF4KDAuMDAxLCBmaW5hbFNjb3JlKVxuICB9O1xuICBpZiAoY29tcHV0ZU1hdGNoZXMpIHtcbiAgICBjb25zdCBpbmRpY2VzID0gY29udmVydE1hc2tUb0luZGljZXMobWF0Y2hNYXNrLCBtaW5NYXRjaENoYXJMZW5ndGgpO1xuICAgIGlmICghaW5kaWNlcy5sZW5ndGgpIHtcbiAgICAgIHJlc3VsdC5pc01hdGNoID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChpbmNsdWRlTWF0Y2hlcykge1xuICAgICAgcmVzdWx0LmluZGljZXMgPSBpbmRpY2VzO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQYXR0ZXJuQWxwaGFiZXQocGF0dGVybikge1xuICBjb25zdCBtYXNrID0ge307XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSBwYXR0ZXJuLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgY29uc3QgY2hhciA9IHBhdHRlcm4uY2hhckF0KGkpO1xuICAgIG1hc2tbY2hhcl0gPSAobWFza1tjaGFyXSB8fCAwKSB8IDEgPDwgbGVuIC0gaSAtIDE7XG4gIH1cbiAgcmV0dXJuIG1hc2s7XG59XG5cbmZ1bmN0aW9uIG1lcmdlSW5kaWNlcyhpbmRpY2VzKSB7XG4gIGlmIChpbmRpY2VzLmxlbmd0aCA8PSAxKSByZXR1cm4gaW5kaWNlcztcbiAgaW5kaWNlcy5zb3J0KChhLCBiKSA9PiBhWzBdIC0gYlswXSB8fCBhWzFdIC0gYlsxXSk7XG4gIGNvbnN0IG1lcmdlZCA9IFtpbmRpY2VzWzBdXTtcbiAgZm9yIChsZXQgaSA9IDEsIGxlbiA9IGluZGljZXMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICBjb25zdCBsYXN0ID0gbWVyZ2VkW21lcmdlZC5sZW5ndGggLSAxXTtcbiAgICBjb25zdCBjdXJyID0gaW5kaWNlc1tpXTtcbiAgICBpZiAoY3VyclswXSA8PSBsYXN0WzFdICsgMSkge1xuICAgICAgbGFzdFsxXSA9IE1hdGgubWF4KGxhc3RbMV0sIGN1cnJbMV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXJnZWQucHVzaChjdXJyKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1lcmdlZDtcbn1cblxuLy8gQ2hhcmFjdGVycyB0aGF0IHN1cnZpdmUgTkZEIG5vcm1hbGl6YXRpb24gdW5jaGFuZ2VkIGFuZCBuZWVkIGV4cGxpY2l0IG1hcHBpbmdcbmNvbnN0IE5PTl9ERUNPTVBPU0FCTEVfTUFQID0ge1xuICAnXFx1MDE0Mic6ICdsJyxcbiAgLy8gxYJcbiAgJ1xcdTAxNDEnOiAnTCcsXG4gIC8vIMWBXG4gICdcXHUwMTExJzogJ2QnLFxuICAvLyDEkVxuICAnXFx1MDExMCc6ICdEJyxcbiAgLy8gxJBcbiAgJ1xcdTAwRjgnOiAnbycsXG4gIC8vIMO4XG4gICdcXHUwMEQ4JzogJ08nLFxuICAvLyDDmFxuICAnXFx1MDEyNyc6ICdoJyxcbiAgLy8gxKdcbiAgJ1xcdTAxMjYnOiAnSCcsXG4gIC8vIMSmXG4gICdcXHUwMTY3JzogJ3QnLFxuICAvLyDFp1xuICAnXFx1MDE2Nic6ICdUJyxcbiAgLy8gxaZcbiAgJ1xcdTAxMzEnOiAnaScsXG4gIC8vIMSxXG4gICdcXHUwMERGJzogJ3NzJyAvLyDDn1xufTtcbmNvbnN0IE5PTl9ERUNPTVBPU0FCTEVfUkUgPSBuZXcgUmVnRXhwKCdbJyArIE9iamVjdC5rZXlzKE5PTl9ERUNPTVBPU0FCTEVfTUFQKS5qb2luKCcnKSArICddJywgJ2cnKTtcbmNvbnN0IHN0cmlwRGlhY3JpdGljcyA9IHR5cGVvZiBTdHJpbmcucHJvdG90eXBlLm5vcm1hbGl6ZSA9PT0gJ2Z1bmN0aW9uJyA/IHN0ciA9PiBzdHIubm9ybWFsaXplKCdORkQnKS5yZXBsYWNlKC9bXFx1MDMwMC1cXHUwMzZGXFx1MDQ4My1cXHUwNDg5XFx1MDU5MS1cXHUwNUJEXFx1MDVCRlxcdTA1QzFcXHUwNUMyXFx1MDVDNFxcdTA1QzVcXHUwNUM3XFx1MDYxMC1cXHUwNjFBXFx1MDY0Qi1cXHUwNjVGXFx1MDY3MFxcdTA2RDYtXFx1MDZEQ1xcdTA2REYtXFx1MDZFNFxcdTA2RTdcXHUwNkU4XFx1MDZFQS1cXHUwNkVEXFx1MDcxMVxcdTA3MzAtXFx1MDc0QVxcdTA3QTYtXFx1MDdCMFxcdTA3RUItXFx1MDdGM1xcdTA3RkRcXHUwODE2LVxcdTA4MTlcXHUwODFCLVxcdTA4MjNcXHUwODI1LVxcdTA4MjdcXHUwODI5LVxcdTA4MkRcXHUwODU5LVxcdTA4NUJcXHUwOEQzLVxcdTA4RTFcXHUwOEUzLVxcdTA5MDNcXHUwOTNBLVxcdTA5M0NcXHUwOTNFLVxcdTA5NEZcXHUwOTUxLVxcdTA5NTdcXHUwOTYyXFx1MDk2M1xcdTA5ODEtXFx1MDk4M1xcdTA5QkNcXHUwOUJFLVxcdTA5QzRcXHUwOUM3XFx1MDlDOFxcdTA5Q0ItXFx1MDlDRFxcdTA5RDdcXHUwOUUyXFx1MDlFM1xcdTA5RkVcXHUwQTAxLVxcdTBBMDNcXHUwQTNDXFx1MEEzRS1cXHUwQTQyXFx1MEE0N1xcdTBBNDhcXHUwQTRCLVxcdTBBNERcXHUwQTUxXFx1MEE3MFxcdTBBNzFcXHUwQTc1XFx1MEE4MS1cXHUwQTgzXFx1MEFCQ1xcdTBBQkUtXFx1MEFDNVxcdTBBQzctXFx1MEFDOVxcdTBBQ0ItXFx1MEFDRFxcdTBBRTJcXHUwQUUzXFx1MEFGQS1cXHUwQUZGXFx1MEIwMS1cXHUwQjAzXFx1MEIzQ1xcdTBCM0UtXFx1MEI0NFxcdTBCNDdcXHUwQjQ4XFx1MEI0Qi1cXHUwQjREXFx1MEI1NlxcdTBCNTdcXHUwQjYyXFx1MEI2M1xcdTBCODJcXHUwQkJFLVxcdTBCQzJcXHUwQkM2LVxcdTBCQzhcXHUwQkNBLVxcdTBCQ0RcXHUwQkQ3XFx1MEMwMC1cXHUwQzA0XFx1MEMzRS1cXHUwQzQ0XFx1MEM0Ni1cXHUwQzQ4XFx1MEM0QS1cXHUwQzREXFx1MEM1NVxcdTBDNTZcXHUwQzYyXFx1MEM2M1xcdTBDODEtXFx1MEM4M1xcdTBDQkNcXHUwQ0JFLVxcdTBDQzRcXHUwQ0M2LVxcdTBDQzhcXHUwQ0NBLVxcdTBDQ0RcXHUwQ0Q1XFx1MENENlxcdTBDRTJcXHUwQ0UzXFx1MEQwMC1cXHUwRDAzXFx1MEQzQlxcdTBEM0NcXHUwRDNFLVxcdTBENDRcXHUwRDQ2LVxcdTBENDhcXHUwRDRBLVxcdTBENERcXHUwRDU3XFx1MEQ2MlxcdTBENjNcXHUwRDgyXFx1MEQ4M1xcdTBEQ0FcXHUwRENGLVxcdTBERDRcXHUwREQ2XFx1MEREOC1cXHUwRERGXFx1MERGMlxcdTBERjNcXHUwRTMxXFx1MEUzNC1cXHUwRTNBXFx1MEU0Ny1cXHUwRTRFXFx1MEVCMVxcdTBFQjQtXFx1MEVCOVxcdTBFQkJcXHUwRUJDXFx1MEVDOC1cXHUwRUNEXFx1MEYxOFxcdTBGMTlcXHUwRjM1XFx1MEYzN1xcdTBGMzlcXHUwRjNFXFx1MEYzRlxcdTBGNzEtXFx1MEY4NFxcdTBGODZcXHUwRjg3XFx1MEY4RC1cXHUwRjk3XFx1MEY5OS1cXHUwRkJDXFx1MEZDNlxcdTEwMkItXFx1MTAzRVxcdTEwNTYtXFx1MTA1OVxcdTEwNUUtXFx1MTA2MFxcdTEwNjItXFx1MTA2NFxcdTEwNjctXFx1MTA2RFxcdTEwNzEtXFx1MTA3NFxcdTEwODItXFx1MTA4RFxcdTEwOEZcXHUxMDlBLVxcdTEwOURcXHUxMzVELVxcdTEzNUZcXHUxNzEyLVxcdTE3MTRcXHUxNzMyLVxcdTE3MzRcXHUxNzUyXFx1MTc1M1xcdTE3NzJcXHUxNzczXFx1MTdCNC1cXHUxN0QzXFx1MTdERFxcdTE4MEItXFx1MTgwRFxcdTE4ODVcXHUxODg2XFx1MThBOVxcdTE5MjAtXFx1MTkyQlxcdTE5MzAtXFx1MTkzQlxcdTFBMTctXFx1MUExQlxcdTFBNTUtXFx1MUE1RVxcdTFBNjAtXFx1MUE3Q1xcdTFBN0ZcXHUxQUIwLVxcdTFBQkVcXHUxQjAwLVxcdTFCMDRcXHUxQjM0LVxcdTFCNDRcXHUxQjZCLVxcdTFCNzNcXHUxQjgwLVxcdTFCODJcXHUxQkExLVxcdTFCQURcXHUxQkU2LVxcdTFCRjNcXHUxQzI0LVxcdTFDMzdcXHUxQ0QwLVxcdTFDRDJcXHUxQ0Q0LVxcdTFDRThcXHUxQ0VEXFx1MUNGMi1cXHUxQ0Y0XFx1MUNGNy1cXHUxQ0Y5XFx1MURDMC1cXHUxREY5XFx1MURGQi1cXHUxREZGXFx1MjBEMC1cXHUyMEYwXFx1MkNFRi1cXHUyQ0YxXFx1MkQ3RlxcdTJERTAtXFx1MkRGRlxcdTMwMkEtXFx1MzAyRlxcdTMwOTlcXHUzMDlBXFx1QTY2Ri1cXHVBNjcyXFx1QTY3NC1cXHVBNjdEXFx1QTY5RVxcdUE2OUZcXHVBNkYwXFx1QTZGMVxcdUE4MDJcXHVBODA2XFx1QTgwQlxcdUE4MjMtXFx1QTgyN1xcdUE4ODBcXHVBODgxXFx1QThCNC1cXHVBOEM1XFx1QThFMC1cXHVBOEYxXFx1QThGRlxcdUE5MjYtXFx1QTkyRFxcdUE5NDctXFx1QTk1M1xcdUE5ODAtXFx1QTk4M1xcdUE5QjMtXFx1QTlDMFxcdUE5RTVcXHVBQTI5LVxcdUFBMzZcXHVBQTQzXFx1QUE0Q1xcdUFBNERcXHVBQTdCLVxcdUFBN0RcXHVBQUIwXFx1QUFCMi1cXHVBQUI0XFx1QUFCN1xcdUFBQjhcXHVBQUJFXFx1QUFCRlxcdUFBQzFcXHVBQUVCLVxcdUFBRUZcXHVBQUY1XFx1QUFGNlxcdUFCRTMtXFx1QUJFQVxcdUFCRUNcXHVBQkVEXFx1RkIxRVxcdUZFMDAtXFx1RkUwRlxcdUZFMjAtXFx1RkUyRl0vZywgJycpLnJlcGxhY2UoTk9OX0RFQ09NUE9TQUJMRV9SRSwgY2ggPT4gTk9OX0RFQ09NUE9TQUJMRV9NQVBbY2hdKSA6IHN0ciA9PiBzdHI7XG5cbmNsYXNzIEJpdGFwU2VhcmNoIHtcbiAgY29uc3RydWN0b3IocGF0dGVybiwge1xuICAgIGxvY2F0aW9uID0gQ29uZmlnLmxvY2F0aW9uLFxuICAgIHRocmVzaG9sZCA9IENvbmZpZy50aHJlc2hvbGQsXG4gICAgZGlzdGFuY2UgPSBDb25maWcuZGlzdGFuY2UsXG4gICAgaW5jbHVkZU1hdGNoZXMgPSBDb25maWcuaW5jbHVkZU1hdGNoZXMsXG4gICAgZmluZEFsbE1hdGNoZXMgPSBDb25maWcuZmluZEFsbE1hdGNoZXMsXG4gICAgbWluTWF0Y2hDaGFyTGVuZ3RoID0gQ29uZmlnLm1pbk1hdGNoQ2hhckxlbmd0aCxcbiAgICBpc0Nhc2VTZW5zaXRpdmUgPSBDb25maWcuaXNDYXNlU2Vuc2l0aXZlLFxuICAgIGlnbm9yZURpYWNyaXRpY3MgPSBDb25maWcuaWdub3JlRGlhY3JpdGljcyxcbiAgICBpZ25vcmVMb2NhdGlvbiA9IENvbmZpZy5pZ25vcmVMb2NhdGlvblxuICB9ID0ge30pIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICBsb2NhdGlvbixcbiAgICAgIHRocmVzaG9sZCxcbiAgICAgIGRpc3RhbmNlLFxuICAgICAgaW5jbHVkZU1hdGNoZXMsXG4gICAgICBmaW5kQWxsTWF0Y2hlcyxcbiAgICAgIG1pbk1hdGNoQ2hhckxlbmd0aCxcbiAgICAgIGlzQ2FzZVNlbnNpdGl2ZSxcbiAgICAgIGlnbm9yZURpYWNyaXRpY3MsXG4gICAgICBpZ25vcmVMb2NhdGlvblxuICAgIH07XG4gICAgcGF0dGVybiA9IGlzQ2FzZVNlbnNpdGl2ZSA/IHBhdHRlcm4gOiBwYXR0ZXJuLnRvTG93ZXJDYXNlKCk7XG4gICAgcGF0dGVybiA9IGlnbm9yZURpYWNyaXRpY3MgPyBzdHJpcERpYWNyaXRpY3MocGF0dGVybikgOiBwYXR0ZXJuO1xuICAgIHRoaXMucGF0dGVybiA9IHBhdHRlcm47XG4gICAgdGhpcy5jaHVua3MgPSBbXTtcbiAgICBpZiAoIXRoaXMucGF0dGVybi5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgYWRkQ2h1bmsgPSAocGF0dGVybiwgc3RhcnRJbmRleCkgPT4ge1xuICAgICAgdGhpcy5jaHVua3MucHVzaCh7XG4gICAgICAgIHBhdHRlcm4sXG4gICAgICAgIGFscGhhYmV0OiBjcmVhdGVQYXR0ZXJuQWxwaGFiZXQocGF0dGVybiksXG4gICAgICAgIHN0YXJ0SW5kZXhcbiAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3QgbGVuID0gdGhpcy5wYXR0ZXJuLmxlbmd0aDtcbiAgICBpZiAobGVuID4gTUFYX0JJVFMpIHtcbiAgICAgIGxldCBpID0gMDtcbiAgICAgIGNvbnN0IHJlbWFpbmRlciA9IGxlbiAlIE1BWF9CSVRTO1xuICAgICAgY29uc3QgZW5kID0gbGVuIC0gcmVtYWluZGVyO1xuICAgICAgd2hpbGUgKGkgPCBlbmQpIHtcbiAgICAgICAgYWRkQ2h1bmsodGhpcy5wYXR0ZXJuLnN1YnN0cihpLCBNQVhfQklUUyksIGkpO1xuICAgICAgICBpICs9IE1BWF9CSVRTO1xuICAgICAgfVxuICAgICAgaWYgKHJlbWFpbmRlcikge1xuICAgICAgICBjb25zdCBzdGFydEluZGV4ID0gbGVuIC0gTUFYX0JJVFM7XG4gICAgICAgIGFkZENodW5rKHRoaXMucGF0dGVybi5zdWJzdHIoc3RhcnRJbmRleCksIHN0YXJ0SW5kZXgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBhZGRDaHVuayh0aGlzLnBhdHRlcm4sIDApO1xuICAgIH1cbiAgfVxuICBzZWFyY2hJbih0ZXh0KSB7XG4gICAgY29uc3Qge1xuICAgICAgaXNDYXNlU2Vuc2l0aXZlLFxuICAgICAgaWdub3JlRGlhY3JpdGljcyxcbiAgICAgIGluY2x1ZGVNYXRjaGVzXG4gICAgfSA9IHRoaXMub3B0aW9ucztcbiAgICB0ZXh0ID0gaXNDYXNlU2Vuc2l0aXZlID8gdGV4dCA6IHRleHQudG9Mb3dlckNhc2UoKTtcbiAgICB0ZXh0ID0gaWdub3JlRGlhY3JpdGljcyA/IHN0cmlwRGlhY3JpdGljcyh0ZXh0KSA6IHRleHQ7XG5cbiAgICAvLyBFeGFjdCBtYXRjaFxuICAgIGlmICh0aGlzLnBhdHRlcm4gPT09IHRleHQpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICAgaXNNYXRjaDogdHJ1ZSxcbiAgICAgICAgc2NvcmU6IDBcbiAgICAgIH07XG4gICAgICBpZiAoaW5jbHVkZU1hdGNoZXMpIHtcbiAgICAgICAgcmVzdWx0LmluZGljZXMgPSBbWzAsIHRleHQubGVuZ3RoIC0gMV1dO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvLyBPdGhlcndpc2UsIHVzZSBCaXRhcCBhbGdvcml0aG1cbiAgICBjb25zdCB7XG4gICAgICBsb2NhdGlvbixcbiAgICAgIGRpc3RhbmNlLFxuICAgICAgdGhyZXNob2xkLFxuICAgICAgZmluZEFsbE1hdGNoZXMsXG4gICAgICBtaW5NYXRjaENoYXJMZW5ndGgsXG4gICAgICBpZ25vcmVMb2NhdGlvblxuICAgIH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgY29uc3QgYWxsSW5kaWNlcyA9IFtdO1xuICAgIGxldCB0b3RhbFNjb3JlID0gMDtcbiAgICBsZXQgaGFzTWF0Y2hlcyA9IGZhbHNlO1xuICAgIHRoaXMuY2h1bmtzLmZvckVhY2goKHtcbiAgICAgIHBhdHRlcm4sXG4gICAgICBhbHBoYWJldCxcbiAgICAgIHN0YXJ0SW5kZXhcbiAgICB9KSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGlzTWF0Y2gsXG4gICAgICAgIHNjb3JlLFxuICAgICAgICBpbmRpY2VzXG4gICAgICB9ID0gc2VhcmNoKHRleHQsIHBhdHRlcm4sIGFscGhhYmV0LCB7XG4gICAgICAgIGxvY2F0aW9uOiBsb2NhdGlvbiArIHN0YXJ0SW5kZXgsXG4gICAgICAgIGRpc3RhbmNlLFxuICAgICAgICB0aHJlc2hvbGQsXG4gICAgICAgIGZpbmRBbGxNYXRjaGVzLFxuICAgICAgICBtaW5NYXRjaENoYXJMZW5ndGgsXG4gICAgICAgIGluY2x1ZGVNYXRjaGVzLFxuICAgICAgICBpZ25vcmVMb2NhdGlvblxuICAgICAgfSk7XG4gICAgICBpZiAoaXNNYXRjaCkge1xuICAgICAgICBoYXNNYXRjaGVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRvdGFsU2NvcmUgKz0gc2NvcmU7XG4gICAgICBpZiAoaXNNYXRjaCAmJiBpbmRpY2VzKSB7XG4gICAgICAgIGFsbEluZGljZXMucHVzaCguLi5pbmRpY2VzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICBpc01hdGNoOiBoYXNNYXRjaGVzLFxuICAgICAgc2NvcmU6IGhhc01hdGNoZXMgPyB0b3RhbFNjb3JlIC8gdGhpcy5jaHVua3MubGVuZ3RoIDogMVxuICAgIH07XG4gICAgaWYgKGhhc01hdGNoZXMgJiYgaW5jbHVkZU1hdGNoZXMpIHtcbiAgICAgIHJlc3VsdC5pbmRpY2VzID0gbWVyZ2VJbmRpY2VzKGFsbEluZGljZXMpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5cbi8vIOKUgOKUgCBNYXRjaGVyIGludGVyZmFjZSDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcbi8vXG4vLyBFYWNoIG1hdGNoZXIgaXMgYSBsaWdodHdlaWdodCBvYmplY3Qgd2l0aCBhIHR5cGUgdGFnIGFuZCBhIHNlYXJjaFxuLy8gZnVuY3Rpb24uIE5vIGNsYXNzIGhpZXJhcmNoeSBuZWVkZWQg4oCUIHRoZSBzZWFyY2ggbG9naWMgZm9yIG1vc3Rcbi8vIG1hdGNoZXJzIGlzIGEgb25lLWxpbmVyLlxuXG4vLyDilIDilIAgTWF0Y2hlciBkZWZpbml0aW9uIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuLy9cbi8vIEEgZGVmaW5pdGlvbiBwYWlycyB0aGUgZGV0ZWN0aW9uIHJlZ2V4ZXMgKHVzZWQgYnkgcGFyc2VRdWVyeSB0b1xuLy8gcmVjb2duaXplIHN0cmluZy1zeW50YXggb3BlcmF0b3JzIGxpa2UgXiwgPSwgISkgd2l0aCBhIGZhY3Rvcnlcbi8vIHRoYXQgY3JlYXRlcyBhIE1hdGNoZXIgaW5zdGFuY2UuXG5cbi8vIFdoZXRoZXIgYSBtYXRjaGVyIHR5cGUgY2FuIHJldHVybiBtdWx0aXBsZSBpbmRleCByYW5nZXNcbmNvbnN0IE1VTFRJX01BVENIX1RZUEVTID0gbmV3IFNldChbJ2Z1enp5JywgJ2luY2x1ZGUnXSk7XG5cbi8vIFdoZXRoZXIgYSBtYXRjaGVyIHR5cGUgaXMgYW4gaW52ZXJzZSBtYXRjaFxuZnVuY3Rpb24gaXNJbnZlcnNlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGUuc3RhcnRzV2l0aCgnaW52ZXJzZScpO1xufVxuXG4vLyDilIDilIAgTWF0Y2hlciBkZWZpbml0aW9ucyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcbi8vXG4vLyBPcmRlciBtYXR0ZXJzIOKAlCBwYXJzZVF1ZXJ5IHRyaWVzIGVhY2ggaW4gc2VxdWVuY2UgYW5kIHVzZXMgdGhlXG4vLyBmaXJzdCBtYXRjaC4gRnV6enlNYXRjaCAoY2F0Y2gtYWxsKSBtdXN0IGJlIGxhc3QuXG5cbi8vIHByZXR0aWVyLWlnbm9yZVxuY29uc3QgbWF0Y2hlcnMgPSBbXG4vLyA9dGVybSDigJQgZXhhY3QgbWF0Y2hcbntcbiAgdHlwZTogJ2V4YWN0JyxcbiAgbXVsdGlSZWdleDogL149XCIoLiopXCIkLyxcbiAgc2luZ2xlUmVnZXg6IC9ePSguKikkLyxcbiAgY3JlYXRlOiBwYXR0ZXJuID0+ICh7XG4gICAgdHlwZTogJ2V4YWN0JyxcbiAgICBzZWFyY2godGV4dCkge1xuICAgICAgY29uc3QgaXNNYXRjaCA9IHRleHQgPT09IHBhdHRlcm47XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc01hdGNoLFxuICAgICAgICBzY29yZTogaXNNYXRjaCA/IDAgOiAxLFxuICAgICAgICBpbmRpY2VzOiBbMCwgcGF0dGVybi5sZW5ndGggLSAxXVxuICAgICAgfTtcbiAgICB9XG4gIH0pXG59LFxuLy8gJ3Rlcm0g4oCUIGluY2x1ZGUgKHN1YnN0cmluZykgbWF0Y2hcbntcbiAgdHlwZTogJ2luY2x1ZGUnLFxuICBtdWx0aVJlZ2V4OiAvXidcIiguKilcIiQvLFxuICBzaW5nbGVSZWdleDogL14nKC4qKSQvLFxuICBjcmVhdGU6IHBhdHRlcm4gPT4gKHtcbiAgICB0eXBlOiAnaW5jbHVkZScsXG4gICAgc2VhcmNoKHRleHQpIHtcbiAgICAgIGxldCBsb2NhdGlvbiA9IDA7XG4gICAgICBsZXQgaW5kZXg7XG4gICAgICBjb25zdCBpbmRpY2VzID0gW107XG4gICAgICBjb25zdCBwYXR0ZXJuTGVuID0gcGF0dGVybi5sZW5ndGg7XG4gICAgICB3aGlsZSAoKGluZGV4ID0gdGV4dC5pbmRleE9mKHBhdHRlcm4sIGxvY2F0aW9uKSkgPiAtMSkge1xuICAgICAgICBsb2NhdGlvbiA9IGluZGV4ICsgcGF0dGVybkxlbjtcbiAgICAgICAgaW5kaWNlcy5wdXNoKFtpbmRleCwgbG9jYXRpb24gLSAxXSk7XG4gICAgICB9XG4gICAgICBjb25zdCBpc01hdGNoID0gISFpbmRpY2VzLmxlbmd0aDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzTWF0Y2gsXG4gICAgICAgIHNjb3JlOiBpc01hdGNoID8gMCA6IDEsXG4gICAgICAgIGluZGljZXNcbiAgICAgIH07XG4gICAgfVxuICB9KVxufSxcbi8vIF50ZXJtIOKAlCBwcmVmaXggbWF0Y2hcbntcbiAgdHlwZTogJ3ByZWZpeC1leGFjdCcsXG4gIG11bHRpUmVnZXg6IC9eXFxeXCIoLiopXCIkLyxcbiAgc2luZ2xlUmVnZXg6IC9eXFxeKC4qKSQvLFxuICBjcmVhdGU6IHBhdHRlcm4gPT4gKHtcbiAgICB0eXBlOiAncHJlZml4LWV4YWN0JyxcbiAgICBzZWFyY2godGV4dCkge1xuICAgICAgY29uc3QgaXNNYXRjaCA9IHRleHQuc3RhcnRzV2l0aChwYXR0ZXJuKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzTWF0Y2gsXG4gICAgICAgIHNjb3JlOiBpc01hdGNoID8gMCA6IDEsXG4gICAgICAgIGluZGljZXM6IFswLCBwYXR0ZXJuLmxlbmd0aCAtIDFdXG4gICAgICB9O1xuICAgIH1cbiAgfSlcbn0sXG4vLyAhXnRlcm0g4oCUIGludmVyc2UgcHJlZml4IG1hdGNoXG57XG4gIHR5cGU6ICdpbnZlcnNlLXByZWZpeC1leGFjdCcsXG4gIG11bHRpUmVnZXg6IC9eIVxcXlwiKC4qKVwiJC8sXG4gIHNpbmdsZVJlZ2V4OiAvXiFcXF4oLiopJC8sXG4gIGNyZWF0ZTogcGF0dGVybiA9PiAoe1xuICAgIHR5cGU6ICdpbnZlcnNlLXByZWZpeC1leGFjdCcsXG4gICAgc2VhcmNoKHRleHQpIHtcbiAgICAgIGNvbnN0IGlzTWF0Y2ggPSAhdGV4dC5zdGFydHNXaXRoKHBhdHRlcm4pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNNYXRjaCxcbiAgICAgICAgc2NvcmU6IGlzTWF0Y2ggPyAwIDogMSxcbiAgICAgICAgaW5kaWNlczogWzAsIHRleHQubGVuZ3RoIC0gMV1cbiAgICAgIH07XG4gICAgfVxuICB9KVxufSxcbi8vICF0ZXJtJCDigJQgaW52ZXJzZSBzdWZmaXggbWF0Y2hcbntcbiAgdHlwZTogJ2ludmVyc2Utc3VmZml4LWV4YWN0JyxcbiAgbXVsdGlSZWdleDogL14hXCIoLiopXCJcXCQkLyxcbiAgc2luZ2xlUmVnZXg6IC9eISguKilcXCQkLyxcbiAgY3JlYXRlOiBwYXR0ZXJuID0+ICh7XG4gICAgdHlwZTogJ2ludmVyc2Utc3VmZml4LWV4YWN0JyxcbiAgICBzZWFyY2godGV4dCkge1xuICAgICAgY29uc3QgaXNNYXRjaCA9ICF0ZXh0LmVuZHNXaXRoKHBhdHRlcm4pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNNYXRjaCxcbiAgICAgICAgc2NvcmU6IGlzTWF0Y2ggPyAwIDogMSxcbiAgICAgICAgaW5kaWNlczogWzAsIHRleHQubGVuZ3RoIC0gMV1cbiAgICAgIH07XG4gICAgfVxuICB9KVxufSxcbi8vIHRlcm0kIOKAlCBzdWZmaXggbWF0Y2hcbntcbiAgdHlwZTogJ3N1ZmZpeC1leGFjdCcsXG4gIG11bHRpUmVnZXg6IC9eXCIoLiopXCJcXCQkLyxcbiAgc2luZ2xlUmVnZXg6IC9eKC4qKVxcJCQvLFxuICBjcmVhdGU6IHBhdHRlcm4gPT4gKHtcbiAgICB0eXBlOiAnc3VmZml4LWV4YWN0JyxcbiAgICBzZWFyY2godGV4dCkge1xuICAgICAgY29uc3QgaXNNYXRjaCA9IHRleHQuZW5kc1dpdGgocGF0dGVybik7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc01hdGNoLFxuICAgICAgICBzY29yZTogaXNNYXRjaCA/IDAgOiAxLFxuICAgICAgICBpbmRpY2VzOiBbdGV4dC5sZW5ndGggLSBwYXR0ZXJuLmxlbmd0aCwgdGV4dC5sZW5ndGggLSAxXVxuICAgICAgfTtcbiAgICB9XG4gIH0pXG59LFxuLy8gIXRlcm0g4oCUIGludmVyc2UgZXhhY3QgKGRvZXMgbm90IGNvbnRhaW4pXG57XG4gIHR5cGU6ICdpbnZlcnNlLWV4YWN0JyxcbiAgbXVsdGlSZWdleDogL14hXCIoLiopXCIkLyxcbiAgc2luZ2xlUmVnZXg6IC9eISguKikkLyxcbiAgY3JlYXRlOiBwYXR0ZXJuID0+ICh7XG4gICAgdHlwZTogJ2ludmVyc2UtZXhhY3QnLFxuICAgIHNlYXJjaCh0ZXh0KSB7XG4gICAgICBjb25zdCBpc01hdGNoID0gdGV4dC5pbmRleE9mKHBhdHRlcm4pID09PSAtMTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzTWF0Y2gsXG4gICAgICAgIHNjb3JlOiBpc01hdGNoID8gMCA6IDEsXG4gICAgICAgIGluZGljZXM6IFswLCB0ZXh0Lmxlbmd0aCAtIDFdXG4gICAgICB9O1xuICAgIH1cbiAgfSlcbn0sXG4vLyB0ZXJtIOKAlCBmdXp6eSBtYXRjaCAoY2F0Y2gtYWxsLCBtdXN0IGJlIGxhc3QpXG57XG4gIHR5cGU6ICdmdXp6eScsXG4gIG11bHRpUmVnZXg6IC9eXCIoLiopXCIkLyxcbiAgc2luZ2xlUmVnZXg6IC9eKC4qKSQvLFxuICBjcmVhdGU6IChwYXR0ZXJuLCBvcHRpb25zID0ge30pID0+IHtcbiAgICBjb25zdCBiaXRhcCA9IG5ldyBCaXRhcFNlYXJjaChwYXR0ZXJuLCB7XG4gICAgICBsb2NhdGlvbjogb3B0aW9ucy5sb2NhdGlvbiA/PyBDb25maWcubG9jYXRpb24sXG4gICAgICB0aHJlc2hvbGQ6IG9wdGlvbnMudGhyZXNob2xkID8/IENvbmZpZy50aHJlc2hvbGQsXG4gICAgICBkaXN0YW5jZTogb3B0aW9ucy5kaXN0YW5jZSA/PyBDb25maWcuZGlzdGFuY2UsXG4gICAgICBpbmNsdWRlTWF0Y2hlczogb3B0aW9ucy5pbmNsdWRlTWF0Y2hlcyA/PyBDb25maWcuaW5jbHVkZU1hdGNoZXMsXG4gICAgICBmaW5kQWxsTWF0Y2hlczogb3B0aW9ucy5maW5kQWxsTWF0Y2hlcyA/PyBDb25maWcuZmluZEFsbE1hdGNoZXMsXG4gICAgICBtaW5NYXRjaENoYXJMZW5ndGg6IG9wdGlvbnMubWluTWF0Y2hDaGFyTGVuZ3RoID8/IENvbmZpZy5taW5NYXRjaENoYXJMZW5ndGgsXG4gICAgICBpc0Nhc2VTZW5zaXRpdmU6IG9wdGlvbnMuaXNDYXNlU2Vuc2l0aXZlID8/IENvbmZpZy5pc0Nhc2VTZW5zaXRpdmUsXG4gICAgICBpZ25vcmVEaWFjcml0aWNzOiBvcHRpb25zLmlnbm9yZURpYWNyaXRpY3MgPz8gQ29uZmlnLmlnbm9yZURpYWNyaXRpY3MsXG4gICAgICBpZ25vcmVMb2NhdGlvbjogb3B0aW9ucy5pZ25vcmVMb2NhdGlvbiA/PyBDb25maWcuaWdub3JlTG9jYXRpb25cbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ2Z1enp5JyxcbiAgICAgIHNlYXJjaCh0ZXh0KSB7XG4gICAgICAgIHJldHVybiBiaXRhcC5zZWFyY2hJbih0ZXh0KTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XTtcblxuY29uc3QgbWF0Y2hlcnNMZW4gPSBtYXRjaGVycy5sZW5ndGg7XG5jb25zdCBFU0NBUEVEX1BJUEUgPSAnXFx1MDAwMCc7IC8vIHBsYWNlaG9sZGVyIGZvciBlc2NhcGVkIFxcfFxuY29uc3QgT1JfVE9LRU4gPSAnfCc7XG5cbi8vIFRva2VuaXplIGEgcXVlcnkgc3RyaW5nIGludG8gaW5kaXZpZHVhbCBzZWFyY2ggdGVybXMuXG4vLyBSZXNwZWN0cyBtdWx0aS1tYXRjaCBxdW90ZWQgdG9rZW5zIGxpa2UgPVwic2FpZCBcInRlc3RcIlwiIG9yIF5cImhlbGxvIHdvcmxkXCIkXG4vLyB3aGVyZSBpbm5lciBzcGFjZXMgYW5kIHF1b3RlcyBhcmUgcGFydCBvZiB0aGUgdG9rZW4uXG5mdW5jdGlvbiB0b2tlbml6ZShwYXR0ZXJuKSB7XG4gIGNvbnN0IHRva2VucyA9IFtdO1xuICBjb25zdCBsZW4gPSBwYXR0ZXJuLmxlbmd0aDtcbiAgbGV0IGkgPSAwO1xuICB3aGlsZSAoaSA8IGxlbikge1xuICAgIC8vIFNraXAgc3BhY2VzXG4gICAgd2hpbGUgKGkgPCBsZW4gJiYgcGF0dGVybltpXSA9PT0gJyAnKSBpKys7XG4gICAgaWYgKGkgPj0gbGVuKSBicmVhaztcblxuICAgIC8vIFNjYW4gcGFzdCBwcmVmaXggY2hhcmFjdGVycyAoPSwgISwgXiwgJykgdG8gc2VlIGlmIGEgcXVvdGUgZm9sbG93c1xuICAgIGxldCBqID0gaTtcbiAgICB3aGlsZSAoaiA8IGxlbiAmJiBwYXR0ZXJuW2pdICE9PSAnICcgJiYgcGF0dGVybltqXSAhPT0gJ1wiJykgaisrO1xuICAgIGlmIChqIDwgbGVuICYmIHBhdHRlcm5bal0gPT09ICdcIicpIHtcbiAgICAgIC8vIE11bHRpLW1hdGNoIHRva2VuOiBwcmVmaXggKyBcImNvbnRlbnRcIiAocG9zc2libHkgd2l0aCBpbm5lciBxdW90ZXMpXG4gICAgICAvLyBGaW5kIHRoZSBjbG9zaW5nIFwiIHRoYXQgZW5kcyB0aGlzIHRva2VuOlxuICAgICAgLy8gaXQgbXVzdCBiZSBmb2xsb3dlZCBieSBvcHRpb25hbCAkLCB0aGVuIHNwYWNlIG9yIGVuZC1vZi1zdHJpbmdcbiAgICAgIGorKzsgLy8gc2tpcCBvcGVuaW5nIHF1b3RlXG4gICAgICB3aGlsZSAoaiA8IGxlbikge1xuICAgICAgICBpZiAocGF0dGVybltqXSA9PT0gJ1wiJykge1xuICAgICAgICAgIC8vIENoZWNrIGlmIHRoaXMgaXMgdGhlIGNsb3NpbmcgcXVvdGVcbiAgICAgICAgICBjb25zdCBuZXh0ID0gaiArIDE7XG4gICAgICAgICAgaWYgKG5leHQgPj0gbGVuIHx8IHBhdHRlcm5bbmV4dF0gPT09ICcgJykge1xuICAgICAgICAgICAgaisrOyAvLyBpbmNsdWRlIGNsb3NpbmcgcXVvdGVcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocGF0dGVybltuZXh0XSA9PT0gJyQnICYmIChuZXh0ICsgMSA+PSBsZW4gfHwgcGF0dGVybltuZXh0ICsgMV0gPT09ICcgJykpIHtcbiAgICAgICAgICAgIGogKz0gMjsgLy8gaW5jbHVkZSBcIiRcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBqKys7XG4gICAgICB9XG4gICAgICB0b2tlbnMucHVzaChwYXR0ZXJuLnN1YnN0cmluZyhpLCBqKSk7XG4gICAgICBpID0gajtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmVndWxhciAodW5xdW90ZWQpIHRva2VuOiByZWFkIHVudGlsIHNwYWNlIG9yIGVuZFxuICAgICAgd2hpbGUgKGogPCBsZW4gJiYgcGF0dGVybltqXSAhPT0gJyAnKSBqKys7XG4gICAgICB0b2tlbnMucHVzaChwYXR0ZXJuLnN1YnN0cmluZyhpLCBqKSk7XG4gICAgICBpID0gajtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRva2Vucztcbn1cbmZ1bmN0aW9uIGdldE1hdGNoKHBhdHRlcm4sIGV4cCkge1xuICBjb25zdCBtYXRjaGVzID0gcGF0dGVybi5tYXRjaChleHApO1xuICByZXR1cm4gbWF0Y2hlcyA/IG1hdGNoZXNbMV0gOiBudWxsO1xufVxuXG4vLyBSZXR1cm4gYSAyRCBhcnJheSByZXByZXNlbnRhdGlvbiBvZiB0aGUgcXVlcnksIGZvciBzaW1wbGVyIHBhcnNpbmcuXG4vLyBFeGFtcGxlOlxuLy8gXCJeY29yZSBnbyQgfCByYiQgfCBweSQgeHkkXCIgPT4gW1tcIl5jb3JlXCIsIFwiZ28kXCJdLCBbXCJyYiRcIl0sIFtcInB5JFwiLCBcInh5JFwiXV1cbmZ1bmN0aW9uIHBhcnNlUXVlcnkocGF0dGVybiwgb3B0aW9ucyA9IHt9KSB7XG4gIC8vIFJlcGxhY2UgZXNjYXBlZCBcXHwgd2l0aCBwbGFjZWhvbGRlciBiZWZvcmUgc3BsaXR0aW5nIG9uIHxcbiAgY29uc3QgZXNjYXBlZCA9IHBhdHRlcm4ucmVwbGFjZSgvXFxcXFxcfC9nLCBFU0NBUEVEX1BJUEUpO1xuICByZXR1cm4gZXNjYXBlZC5zcGxpdChPUl9UT0tFTikubWFwKGl0ZW0gPT4ge1xuICAgIC8vIFJlc3RvcmUgZXNjYXBlZCBwaXBlcyBpbiBlYWNoIE9SIGdyb3VwXG4gICAgY29uc3QgcmVzdG9yZWQgPSBpdGVtLnJlcGxhY2UoL1xcdTAwMDAvZywgJ3wnKTtcbiAgICBjb25zdCBxdWVyeSA9IHRva2VuaXplKHJlc3RvcmVkLnRyaW0oKSkuZmlsdGVyKGl0ZW0gPT4gaXRlbSAmJiAhIWl0ZW0udHJpbSgpKTtcbiAgICBjb25zdCByZXN1bHRzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHF1ZXJ5Lmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICBjb25zdCBxdWVyeUl0ZW0gPSBxdWVyeVtpXTtcblxuICAgICAgLy8gMS4gSGFuZGxlIG11bHRpcGxlIHF1ZXJ5IG1hdGNoIChpLmUsIG9uZXMgdGhhdCBhcmUgcXVvdGVkLCBsaWtlIGBcImhlbGxvIHdvcmxkXCJgKVxuICAgICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgICBsZXQgaWR4ID0gLTE7XG4gICAgICB3aGlsZSAoIWZvdW5kICYmICsraWR4IDwgbWF0Y2hlcnNMZW4pIHtcbiAgICAgICAgY29uc3QgZGVmID0gbWF0Y2hlcnNbaWR4XTtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBnZXRNYXRjaChxdWVyeUl0ZW0sIGRlZi5tdWx0aVJlZ2V4KTtcbiAgICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKGRlZi5jcmVhdGUodG9rZW4sIG9wdGlvbnMpKTtcbiAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gMi4gSGFuZGxlIHNpbmdsZSBxdWVyeSBtYXRjaGVzIChpLmUsIG9uZXMgdGhhdCBhcmUgKm5vdCogcXVvdGVkKVxuICAgICAgaWR4ID0gLTE7XG4gICAgICB3aGlsZSAoKytpZHggPCBtYXRjaGVyc0xlbikge1xuICAgICAgICBjb25zdCBkZWYgPSBtYXRjaGVyc1tpZHhdO1xuICAgICAgICBjb25zdCB0b2tlbiA9IGdldE1hdGNoKHF1ZXJ5SXRlbSwgZGVmLnNpbmdsZVJlZ2V4KTtcbiAgICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKGRlZi5jcmVhdGUodG9rZW4sIG9wdGlvbnMpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfSk7XG59XG5cbmNsYXNzIEV4dGVuZGVkU2VhcmNoIHtcbiAgY29uc3RydWN0b3IocGF0dGVybiwge1xuICAgIGlzQ2FzZVNlbnNpdGl2ZSA9IENvbmZpZy5pc0Nhc2VTZW5zaXRpdmUsXG4gICAgaWdub3JlRGlhY3JpdGljcyA9IENvbmZpZy5pZ25vcmVEaWFjcml0aWNzLFxuICAgIGluY2x1ZGVNYXRjaGVzID0gQ29uZmlnLmluY2x1ZGVNYXRjaGVzLFxuICAgIG1pbk1hdGNoQ2hhckxlbmd0aCA9IENvbmZpZy5taW5NYXRjaENoYXJMZW5ndGgsXG4gICAgaWdub3JlTG9jYXRpb24gPSBDb25maWcuaWdub3JlTG9jYXRpb24sXG4gICAgZmluZEFsbE1hdGNoZXMgPSBDb25maWcuZmluZEFsbE1hdGNoZXMsXG4gICAgbG9jYXRpb24gPSBDb25maWcubG9jYXRpb24sXG4gICAgdGhyZXNob2xkID0gQ29uZmlnLnRocmVzaG9sZCxcbiAgICBkaXN0YW5jZSA9IENvbmZpZy5kaXN0YW5jZVxuICB9ID0ge30pIHtcbiAgICB0aGlzLnF1ZXJ5ID0gbnVsbDtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICBpc0Nhc2VTZW5zaXRpdmUsXG4gICAgICBpZ25vcmVEaWFjcml0aWNzLFxuICAgICAgaW5jbHVkZU1hdGNoZXMsXG4gICAgICBtaW5NYXRjaENoYXJMZW5ndGgsXG4gICAgICBmaW5kQWxsTWF0Y2hlcyxcbiAgICAgIGlnbm9yZUxvY2F0aW9uLFxuICAgICAgbG9jYXRpb24sXG4gICAgICB0aHJlc2hvbGQsXG4gICAgICBkaXN0YW5jZVxuICAgIH07XG4gICAgcGF0dGVybiA9IGlzQ2FzZVNlbnNpdGl2ZSA/IHBhdHRlcm4gOiBwYXR0ZXJuLnRvTG93ZXJDYXNlKCk7XG4gICAgcGF0dGVybiA9IGlnbm9yZURpYWNyaXRpY3MgPyBzdHJpcERpYWNyaXRpY3MocGF0dGVybikgOiBwYXR0ZXJuO1xuICAgIHRoaXMucGF0dGVybiA9IHBhdHRlcm47XG4gICAgdGhpcy5xdWVyeSA9IHBhcnNlUXVlcnkodGhpcy5wYXR0ZXJuLCB0aGlzLm9wdGlvbnMpO1xuICB9XG4gIHN0YXRpYyBjb25kaXRpb24oXywgb3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zLnVzZUV4dGVuZGVkU2VhcmNoO1xuICB9XG5cbiAgLy8gTm90ZTogc2VhcmNoSW4gb3BlcmF0ZXMgb24gYSBzaW5nbGUgdGV4dCB2YWx1ZSBhbmQgc2V0cyBoYXNJbnZlcnNlIG9uIHRoZVxuICAvLyByZXN1bHQgd2hlbiBpbnZlcnNlIHBhdHRlcm5zIGFyZSBpbnZvbHZlZC4gX3NlYXJjaE9iamVjdExpc3QgdXNlcyB0aGlzIHRvXG4gIC8vIHN3aXRjaCBmcm9tIFwiQU5ZIGtleVwiIHRvIFwiQUxMIGtleXNcIiBhZ2dyZWdhdGlvbi4gU2VlICM3MTIuXG4gIHNlYXJjaEluKHRleHQpIHtcbiAgICBjb25zdCBxdWVyeSA9IHRoaXMucXVlcnk7XG4gICAgaWYgKCFxdWVyeSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNNYXRjaDogZmFsc2UsXG4gICAgICAgIHNjb3JlOiAxXG4gICAgICB9O1xuICAgIH1cbiAgICBjb25zdCB7XG4gICAgICBpbmNsdWRlTWF0Y2hlcyxcbiAgICAgIGlzQ2FzZVNlbnNpdGl2ZSxcbiAgICAgIGlnbm9yZURpYWNyaXRpY3NcbiAgICB9ID0gdGhpcy5vcHRpb25zO1xuICAgIHRleHQgPSBpc0Nhc2VTZW5zaXRpdmUgPyB0ZXh0IDogdGV4dC50b0xvd2VyQ2FzZSgpO1xuICAgIHRleHQgPSBpZ25vcmVEaWFjcml0aWNzID8gc3RyaXBEaWFjcml0aWNzKHRleHQpIDogdGV4dDtcbiAgICBsZXQgbnVtTWF0Y2hlcyA9IDA7XG4gICAgY29uc3QgYWxsSW5kaWNlcyA9IFtdO1xuICAgIGxldCB0b3RhbFNjb3JlID0gMDtcbiAgICBsZXQgaGFzSW52ZXJzZSA9IGZhbHNlO1xuXG4gICAgLy8gT1JzXG4gICAgZm9yIChsZXQgaSA9IDAsIHFMZW4gPSBxdWVyeS5sZW5ndGg7IGkgPCBxTGVuOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHNlYXJjaGVycyA9IHF1ZXJ5W2ldO1xuXG4gICAgICAvLyBSZXNldCBpbmRpY2VzXG4gICAgICBhbGxJbmRpY2VzLmxlbmd0aCA9IDA7XG4gICAgICBudW1NYXRjaGVzID0gMDtcbiAgICAgIGhhc0ludmVyc2UgPSBmYWxzZTtcblxuICAgICAgLy8gQU5Ec1xuICAgICAgZm9yIChsZXQgaiA9IDAsIHBMZW4gPSBzZWFyY2hlcnMubGVuZ3RoOyBqIDwgcExlbjsgaiArPSAxKSB7XG4gICAgICAgIGNvbnN0IG1hdGNoZXIgPSBzZWFyY2hlcnNbal07XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBpc01hdGNoLFxuICAgICAgICAgIGluZGljZXMsXG4gICAgICAgICAgc2NvcmVcbiAgICAgICAgfSA9IG1hdGNoZXIuc2VhcmNoKHRleHQpO1xuICAgICAgICBpZiAoaXNNYXRjaCkge1xuICAgICAgICAgIG51bU1hdGNoZXMgKz0gMTtcbiAgICAgICAgICB0b3RhbFNjb3JlICs9IHNjb3JlO1xuICAgICAgICAgIGlmIChpc0ludmVyc2UobWF0Y2hlci50eXBlKSkge1xuICAgICAgICAgICAgaGFzSW52ZXJzZSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpbmNsdWRlTWF0Y2hlcykge1xuICAgICAgICAgICAgaWYgKE1VTFRJX01BVENIX1RZUEVTLmhhcyhtYXRjaGVyLnR5cGUpKSB7XG4gICAgICAgICAgICAgIGFsbEluZGljZXMucHVzaCguLi5pbmRpY2VzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGFsbEluZGljZXMucHVzaChpbmRpY2VzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdG90YWxTY29yZSA9IDA7XG4gICAgICAgICAgbnVtTWF0Y2hlcyA9IDA7XG4gICAgICAgICAgYWxsSW5kaWNlcy5sZW5ndGggPSAwO1xuICAgICAgICAgIGhhc0ludmVyc2UgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBPUiBjb25kaXRpb24sIHNvIGlmIFRSVUUsIHJldHVyblxuICAgICAgaWYgKG51bU1hdGNoZXMpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgICAgIGlzTWF0Y2g6IHRydWUsXG4gICAgICAgICAgc2NvcmU6IHRvdGFsU2NvcmUgLyBudW1NYXRjaGVzXG4gICAgICAgIH07XG4gICAgICAgIGlmIChoYXNJbnZlcnNlKSB7XG4gICAgICAgICAgcmVzdWx0Lmhhc0ludmVyc2UgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbmNsdWRlTWF0Y2hlcykge1xuICAgICAgICAgIHJlc3VsdC5pbmRpY2VzID0gbWVyZ2VJbmRpY2VzKGFsbEluZGljZXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTm90aGluZyB3YXMgbWF0Y2hlZFxuICAgIHJldHVybiB7XG4gICAgICBpc01hdGNoOiBmYWxzZSxcbiAgICAgIHNjb3JlOiAxXG4gICAgfTtcbiAgfVxufVxuXG5jb25zdCByZWdpc3RlcmVkU2VhcmNoZXJzID0gW107XG5mdW5jdGlvbiByZWdpc3RlciguLi5hcmdzKSB7XG4gIHJlZ2lzdGVyZWRTZWFyY2hlcnMucHVzaCguLi5hcmdzKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVNlYXJjaGVyKHBhdHRlcm4sIG9wdGlvbnMpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHJlZ2lzdGVyZWRTZWFyY2hlcnMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICBjb25zdCBzZWFyY2hlckNsYXNzID0gcmVnaXN0ZXJlZFNlYXJjaGVyc1tpXTtcbiAgICBpZiAoc2VhcmNoZXJDbGFzcy5jb25kaXRpb24ocGF0dGVybiwgb3B0aW9ucykpIHtcbiAgICAgIHJldHVybiBuZXcgc2VhcmNoZXJDbGFzcyhwYXR0ZXJuLCBvcHRpb25zKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG5ldyBCaXRhcFNlYXJjaChwYXR0ZXJuLCBvcHRpb25zKTtcbn1cblxuY29uc3QgTG9naWNhbE9wZXJhdG9yID0ge1xuICBBTkQ6ICckYW5kJyxcbiAgT1I6ICckb3InXG59O1xuY29uc3QgS2V5VHlwZSA9IHtcbiAgUEFUSDogJyRwYXRoJyxcbiAgUEFUVEVSTjogJyR2YWwnXG59O1xuY29uc3QgaXNFeHByZXNzaW9uID0gcXVlcnkgPT4gISEocXVlcnlbTG9naWNhbE9wZXJhdG9yLkFORF0gfHwgcXVlcnlbTG9naWNhbE9wZXJhdG9yLk9SXSk7XG5jb25zdCBpc1BhdGggPSBxdWVyeSA9PiAhIXF1ZXJ5W0tleVR5cGUuUEFUSF07XG5jb25zdCBpc0xlYWYgPSBxdWVyeSA9PiAhaXNBcnJheShxdWVyeSkgJiYgaXNPYmplY3QocXVlcnkpICYmICFpc0V4cHJlc3Npb24ocXVlcnkpO1xuY29uc3QgY29udmVydFRvRXhwbGljaXQgPSBxdWVyeSA9PiAoe1xuICBbTG9naWNhbE9wZXJhdG9yLkFORF06IE9iamVjdC5rZXlzKHF1ZXJ5KS5tYXAoa2V5ID0+ICh7XG4gICAgW2tleV06IHF1ZXJ5W2tleV1cbiAgfSkpXG59KTtcblxuLy8gV2hlbiBgYXV0b2AgaXMgYHRydWVgLCB0aGUgcGFyc2UgZnVuY3Rpb24gd2lsbCBpbmZlciBhbmQgaW5pdGlhbGl6ZSBhbmQgYWRkXG4vLyB0aGUgYXBwcm9wcmlhdGUgYFNlYXJjaGVyYCBpbnN0YW5jZVxuZnVuY3Rpb24gcGFyc2UocXVlcnksIG9wdGlvbnMsIHtcbiAgYXV0byA9IHRydWVcbn0gPSB7fSkge1xuICBjb25zdCBuZXh0ID0gcXVlcnkgPT4ge1xuICAgIC8vIEtleWxlc3Mgc3RyaW5nIGVudHJ5OiBzZWFyY2ggYWNyb3NzIGFsbCBrZXlzXG4gICAgaWYgKGlzU3RyaW5nKHF1ZXJ5KSkge1xuICAgICAgY29uc3Qgb2JqID0ge1xuICAgICAgICBrZXlJZDogbnVsbCxcbiAgICAgICAgcGF0dGVybjogcXVlcnlcbiAgICAgIH07XG4gICAgICBpZiAoYXV0bykge1xuICAgICAgICBvYmouc2VhcmNoZXIgPSBjcmVhdGVTZWFyY2hlcihxdWVyeSwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocXVlcnkpO1xuICAgIGNvbnN0IGlzUXVlcnlQYXRoID0gaXNQYXRoKHF1ZXJ5KTtcbiAgICBpZiAoIWlzUXVlcnlQYXRoICYmIGtleXMubGVuZ3RoID4gMSAmJiAhaXNFeHByZXNzaW9uKHF1ZXJ5KSkge1xuICAgICAgcmV0dXJuIG5leHQoY29udmVydFRvRXhwbGljaXQocXVlcnkpKTtcbiAgICB9XG4gICAgaWYgKGlzTGVhZihxdWVyeSkpIHtcbiAgICAgIGNvbnN0IGtleSA9IGlzUXVlcnlQYXRoID8gcXVlcnlbS2V5VHlwZS5QQVRIXSA6IGtleXNbMF07XG4gICAgICBjb25zdCBwYXR0ZXJuID0gaXNRdWVyeVBhdGggPyBxdWVyeVtLZXlUeXBlLlBBVFRFUk5dIDogcXVlcnlba2V5XTtcbiAgICAgIGlmICghaXNTdHJpbmcocGF0dGVybikpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKExPR0lDQUxfU0VBUkNIX0lOVkFMSURfUVVFUllfRk9SX0tFWShrZXkpKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAga2V5SWQ6IGNyZWF0ZUtleUlkKGtleSksXG4gICAgICAgIHBhdHRlcm5cbiAgICAgIH07XG4gICAgICBpZiAoYXV0bykge1xuICAgICAgICBvYmouc2VhcmNoZXIgPSBjcmVhdGVTZWFyY2hlcihwYXR0ZXJuLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICAgIGNvbnN0IG5vZGUgPSB7XG4gICAgICBjaGlsZHJlbjogW10sXG4gICAgICBvcGVyYXRvcjoga2V5c1swXVxuICAgIH07XG4gICAga2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHF1ZXJ5W2tleV07XG4gICAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICBub2RlLmNoaWxkcmVuLnB1c2gobmV4dChpdGVtKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBub2RlO1xuICB9O1xuICBpZiAoIWlzRXhwcmVzc2lvbihxdWVyeSkpIHtcbiAgICBxdWVyeSA9IGNvbnZlcnRUb0V4cGxpY2l0KHF1ZXJ5KTtcbiAgfVxuICByZXR1cm4gbmV4dChxdWVyeSk7XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVTY29yZVNpbmdsZShtYXRjaGVzLCB7XG4gIGlnbm9yZUZpZWxkTm9ybSA9IENvbmZpZy5pZ25vcmVGaWVsZE5vcm1cbn0pIHtcbiAgbGV0IHRvdGFsU2NvcmUgPSAxO1xuICBtYXRjaGVzLmZvckVhY2goKHtcbiAgICBrZXksXG4gICAgbm9ybSxcbiAgICBzY29yZVxuICB9KSA9PiB7XG4gICAgY29uc3Qgd2VpZ2h0ID0ga2V5ID8ga2V5LndlaWdodCA6IG51bGw7XG4gICAgdG90YWxTY29yZSAqPSBNYXRoLnBvdyhzY29yZSA9PT0gMCAmJiB3ZWlnaHQgPyBOdW1iZXIuRVBTSUxPTiA6IHNjb3JlLCAod2VpZ2h0IHx8IDEpICogKGlnbm9yZUZpZWxkTm9ybSA/IDEgOiBub3JtKSk7XG4gIH0pO1xuICByZXR1cm4gdG90YWxTY29yZTtcbn1cbmZ1bmN0aW9uIGNvbXB1dGVTY29yZShyZXN1bHRzLCB7XG4gIGlnbm9yZUZpZWxkTm9ybSA9IENvbmZpZy5pZ25vcmVGaWVsZE5vcm1cbn0pIHtcbiAgcmVzdWx0cy5mb3JFYWNoKHJlc3VsdCA9PiB7XG4gICAgcmVzdWx0LnNjb3JlID0gY29tcHV0ZVNjb3JlU2luZ2xlKHJlc3VsdC5tYXRjaGVzLCB7XG4gICAgICBpZ25vcmVGaWVsZE5vcm1cbiAgICB9KTtcbiAgfSk7XG59XG5cbi8vIE1heC1oZWFwIGJ5IHNjb3JlOiBrZWVwcyB0aGUgd29yc3QgKGhpZ2hlc3QpIHNjb3JlIGF0IHRoZSB0b3Bcbi8vIHNvIHdlIGNhbiBlZmZpY2llbnRseSBldmljdCBpdCB3aGVuIGEgYmV0dGVyIHJlc3VsdCBhcnJpdmVzLlxuY2xhc3MgTWF4SGVhcCB7XG4gIGNvbnN0cnVjdG9yKGxpbWl0KSB7XG4gICAgdGhpcy5saW1pdCA9IGxpbWl0O1xuICAgIHRoaXMuaGVhcCA9IFtdO1xuICB9XG4gIGdldCBzaXplKCkge1xuICAgIHJldHVybiB0aGlzLmhlYXAubGVuZ3RoO1xuICB9XG4gIHNob3VsZEluc2VydChzY29yZSkge1xuICAgIHJldHVybiB0aGlzLnNpemUgPCB0aGlzLmxpbWl0IHx8IHNjb3JlIDwgdGhpcy5oZWFwWzBdLnNjb3JlO1xuICB9XG4gIGluc2VydChpdGVtKSB7XG4gICAgaWYgKHRoaXMuc2l6ZSA8IHRoaXMubGltaXQpIHtcbiAgICAgIHRoaXMuaGVhcC5wdXNoKGl0ZW0pO1xuICAgICAgdGhpcy5fYnViYmxlVXAodGhpcy5zaXplIC0gMSk7XG4gICAgfSBlbHNlIGlmIChpdGVtLnNjb3JlIDwgdGhpcy5oZWFwWzBdLnNjb3JlKSB7XG4gICAgICB0aGlzLmhlYXBbMF0gPSBpdGVtO1xuICAgICAgdGhpcy5fc2lua0Rvd24oMCk7XG4gICAgfVxuICB9XG4gIGV4dHJhY3RTb3J0ZWQoc29ydEZuKSB7XG4gICAgcmV0dXJuIHRoaXMuaGVhcC5zb3J0KHNvcnRGbik7XG4gIH1cbiAgX2J1YmJsZVVwKGkpIHtcbiAgICBjb25zdCBoZWFwID0gdGhpcy5oZWFwO1xuICAgIHdoaWxlIChpID4gMCkge1xuICAgICAgY29uc3QgcGFyZW50ID0gaSAtIDEgPj4gMTtcbiAgICAgIGlmIChoZWFwW2ldLnNjb3JlIDw9IGhlYXBbcGFyZW50XS5zY29yZSkgYnJlYWs7XG4gICAgICBjb25zdCB0bXAgPSBoZWFwW2ldO1xuICAgICAgaGVhcFtpXSA9IGhlYXBbcGFyZW50XTtcbiAgICAgIGhlYXBbcGFyZW50XSA9IHRtcDtcbiAgICAgIGkgPSBwYXJlbnQ7XG4gICAgfVxuICB9XG4gIF9zaW5rRG93bihpKSB7XG4gICAgY29uc3QgaGVhcCA9IHRoaXMuaGVhcDtcbiAgICBjb25zdCBsZW4gPSBoZWFwLmxlbmd0aDtcbiAgICBsZXQgbGFyZ2VzdCA9IGk7XG4gICAgZG8ge1xuICAgICAgaSA9IGxhcmdlc3Q7XG4gICAgICBjb25zdCBsZWZ0ID0gMiAqIGkgKyAxO1xuICAgICAgY29uc3QgcmlnaHQgPSAyICogaSArIDI7XG4gICAgICBpZiAobGVmdCA8IGxlbiAmJiBoZWFwW2xlZnRdLnNjb3JlID4gaGVhcFtsYXJnZXN0XS5zY29yZSkge1xuICAgICAgICBsYXJnZXN0ID0gbGVmdDtcbiAgICAgIH1cbiAgICAgIGlmIChyaWdodCA8IGxlbiAmJiBoZWFwW3JpZ2h0XS5zY29yZSA+IGhlYXBbbGFyZ2VzdF0uc2NvcmUpIHtcbiAgICAgICAgbGFyZ2VzdCA9IHJpZ2h0O1xuICAgICAgfVxuICAgICAgaWYgKGxhcmdlc3QgIT09IGkpIHtcbiAgICAgICAgY29uc3QgdG1wID0gaGVhcFtpXTtcbiAgICAgICAgaGVhcFtpXSA9IGhlYXBbbGFyZ2VzdF07XG4gICAgICAgIGhlYXBbbGFyZ2VzdF0gPSB0bXA7XG4gICAgICB9XG4gICAgfSB3aGlsZSAobGFyZ2VzdCAhPT0gaSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0TWF0Y2hlcyhyZXN1bHQpIHtcbiAgY29uc3QgbWF0Y2hlcyA9IFtdO1xuICByZXN1bHQubWF0Y2hlcy5mb3JFYWNoKG1hdGNoID0+IHtcbiAgICBpZiAoIWlzRGVmaW5lZChtYXRjaC5pbmRpY2VzKSB8fCAhbWF0Y2guaW5kaWNlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgb2JqID0ge1xuICAgICAgaW5kaWNlczogbWF0Y2guaW5kaWNlcyxcbiAgICAgIHZhbHVlOiBtYXRjaC52YWx1ZVxuICAgIH07XG4gICAgaWYgKG1hdGNoLmtleSkge1xuICAgICAgLy8gYGtleS5pZGAgaXMgdGhlIGNhbm9uaWNhbCBkb3R0ZWQtc3RyaW5nIGlkZW50aXR5IChhcnJheSBwYXRocyBqb2luZWRcbiAgICAgIC8vIHdpdGggJy4nKTsgYGtleS5zcmNgIGlzIHRoZSByYXcgdXNlciBpbnB1dCBhbmQgY2FuIGJlIGEgc3RyaW5nW10uXG4gICAgICBvYmoua2V5ID0gbWF0Y2gua2V5LmlkO1xuICAgIH1cbiAgICBpZiAobWF0Y2guaWR4ID4gLTEpIHtcbiAgICAgIG9iai5yZWZJbmRleCA9IG1hdGNoLmlkeDtcbiAgICB9XG4gICAgbWF0Y2hlcy5wdXNoKG9iaik7XG4gIH0pO1xuICByZXR1cm4gbWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gZm9ybWF0KHJlc3VsdHMsIGRvY3MsIHtcbiAgaW5jbHVkZU1hdGNoZXMgPSBDb25maWcuaW5jbHVkZU1hdGNoZXMsXG4gIGluY2x1ZGVTY29yZSA9IENvbmZpZy5pbmNsdWRlU2NvcmVcbn0gPSB7fSkge1xuICByZXR1cm4gcmVzdWx0cy5tYXAocmVzdWx0ID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpZHhcbiAgICB9ID0gcmVzdWx0O1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBpdGVtOiBkb2NzW2lkeF0sXG4gICAgICByZWZJbmRleDogaWR4XG4gICAgfTtcbiAgICBpZiAoaW5jbHVkZU1hdGNoZXMpIGRhdGEubWF0Y2hlcyA9IGZvcm1hdE1hdGNoZXMocmVzdWx0KTtcbiAgICBpZiAoaW5jbHVkZVNjb3JlKSBkYXRhLnNjb3JlID0gcmVzdWx0LnNjb3JlO1xuICAgIHJldHVybiBkYXRhO1xuICB9KTtcbn1cblxuLy8gSW5jbHVkZXMgXFxwe019IChNYXJrKSBzbyBjb21iaW5pbmcgbWFya3Mgc3RheSBhdHRhY2hlZCB0byB0aGVpciBiYXNlXG4vLyBsZXR0ZXIg4oCUIHdpdGhvdXQgaXQsIHNjcmlwdHMgbGlrZSBEZXZhbmFnYXJpIGFuZCBORkQtbm9ybWFsaXplZCBMYXRpblxuLy8gc2hhdHRlciAoZS5nLiAn4KS54KS/4KSo4KWN4KSm4KWAJyDihpIgWyfgpLknLCfgpKgnLCfgpKYnXSwgJ2NhZsOpJy5ub3JtYWxpemUoJ05GRCcpIOKGkiBbJ2NhZmUnXSkuXG5jb25zdCBERUZBVUxUX1RPS0VOID0gL1tcXHB7TH1cXHB7TX1cXHB7Tn1fXSsvZ3U7XG5jb25zdCB3YXJuZWQgPSBuZXcgV2Vha1NldCgpO1xuZnVuY3Rpb24gd2Fybk5vbkdsb2JhbChyZWdleCkge1xuICBpZiAoIXdhcm5lZC5oYXMocmVnZXgpKSB7XG4gICAgd2FybmVkLmFkZChyZWdleCk7XG4gICAgY29uc29sZS53YXJuKGBbRnVzZV0gdG9rZW5pemUgcmVnZXggJHtyZWdleH0gbGFja3MgdGhlIGdsb2JhbCBmbGFnOyBvbmx5IHRoZSBgICsgYGZpcnN0IG1hdGNoIHBlciB0ZXh0IHdpbGwgYmUgcmV0dXJuZWQuIEFkZCB0aGUgJ2cnIGZsYWcuYCk7XG4gIH1cbn1cbmZ1bmN0aW9uIHJlc29sdmVUb2tlbml6ZSh0b2tlbml6ZSkge1xuICBpZiAodHlwZW9mIHRva2VuaXplID09PSAnZnVuY3Rpb24nKSB7XG4gICAgbGV0IHZhbGlkYXRlZCA9IGZhbHNlO1xuICAgIHJldHVybiB0ZXh0ID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRva2VuaXplKHRleHQpO1xuICAgICAgaWYgKCF2YWxpZGF0ZWQpIHtcbiAgICAgICAgdmFsaWRhdGVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHJlc3VsdCkgfHwgcmVzdWx0LnNvbWUodCA9PiB0eXBlb2YgdCAhPT0gJ3N0cmluZycpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBbRnVzZV0gdG9rZW5pemUgZnVuY3Rpb24gbXVzdCByZXR1cm4gc3RyaW5nW107IHJlY2VpdmVkICR7QXJyYXkuaXNBcnJheShyZXN1bHQpID8gJ2FycmF5IGNvbnRhaW5pbmcgbm9uLXN0cmluZ3MnIDogdHlwZW9mIHJlc3VsdH0uYCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfVxuICBpZiAodG9rZW5pemUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICBpZiAoIXRva2VuaXplLmdsb2JhbCkgd2Fybk5vbkdsb2JhbCh0b2tlbml6ZSk7XG4gICAgcmV0dXJuIHRleHQgPT4gdGV4dC5tYXRjaCh0b2tlbml6ZSkgfHwgW107XG4gIH1cbiAgcmV0dXJuIHRleHQgPT4gdGV4dC5tYXRjaChERUZBVUxUX1RPS0VOKSB8fCBbXTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUFuYWx5emVyKHtcbiAgaXNDYXNlU2Vuc2l0aXZlID0gZmFsc2UsXG4gIGlnbm9yZURpYWNyaXRpY3MgPSBmYWxzZSxcbiAgdG9rZW5pemVcbn0gPSB7fSkge1xuICBjb25zdCB0b2tlbml6ZUZuID0gcmVzb2x2ZVRva2VuaXplKHRva2VuaXplKTtcbiAgcmV0dXJuIHtcbiAgICB0b2tlbml6ZSh0ZXh0KSB7XG4gICAgICBpZiAoIWlzQ2FzZVNlbnNpdGl2ZSkge1xuICAgICAgICB0ZXh0ID0gdGV4dC50b0xvd2VyQ2FzZSgpO1xuICAgICAgfVxuICAgICAgaWYgKGlnbm9yZURpYWNyaXRpY3MpIHtcbiAgICAgICAgdGV4dCA9IHN0cmlwRGlhY3JpdGljcyh0ZXh0KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0b2tlbml6ZUZuKHRleHQpO1xuICAgIH1cbiAgfTtcbn1cblxuLy8gYHRva2VuTWF0Y2g6ICdhbGwnYCBwYWNrcyBwZXItdGVybSBjb3ZlcmFnZSBpbnRvIGEgYml0bWFzay4gSlMgYml0d2lzZSBvcHNcbi8vIGFyZSAzMi1iaXQgKnNpZ25lZCosIHNvIGJpdCAzMSBpcyB0aGUgc2lnbiBiaXQg4oCUIG9ubHkgYml0cyAwLi4zMCBhcmUgc2FmZS5cbi8vIFF1ZXJpZXMgd2l0aCBtb3JlIHRoYW4gdGhpcyBtYW55IHRlcm1zIGZhbGwgYmFjayB0byBhIFNldCAobm8gYml0IGxpbWl0KS5cbmNvbnN0IE1BWF9NQVNLX1RFUk1TID0gMzE7XG5jbGFzcyBUb2tlblNlYXJjaCB7XG4gIC8vIGB0b2tlbk1hdGNoOiAnYWxsJ2AgKEFORCkgY292ZXJhZ2UuIFdoZW4gdHJ1ZSwgc2VhcmNoSW4gcmVwb3J0cyB3aGljaFxuICAvLyBxdWVyeSB0ZXJtcyBtYXRjaGVkIGVhY2ggdGV4dCBzbyB0aGUgY29yZSBsb29wIGNhbiByZXF1aXJlIHJlY29yZC1sZXZlbFxuICAvLyBjb3ZlcmFnZSBvZiBldmVyeSB0ZXJtLiBCaXRtYXNrIGlzIHRoZSDiiaQzMS10ZXJtIGZhc3QgcGF0aDsgU2V0IGlzIHRoZVxuICAvLyDiiaUzMi10ZXJtIGZhbGxiYWNrIChKUyBiaXR3aXNlIG9wcyBhcmUgMzItYml0IHNpZ25lZCkuXG5cbiAgc3RhdGljIGNvbmRpdGlvbihfLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMudXNlVG9rZW5TZWFyY2g7XG4gIH1cbiAgY29uc3RydWN0b3IocGF0dGVybiwgb3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5hbmFseXplciA9IGNyZWF0ZUFuYWx5emVyKHtcbiAgICAgIGlzQ2FzZVNlbnNpdGl2ZTogb3B0aW9ucy5pc0Nhc2VTZW5zaXRpdmUsXG4gICAgICBpZ25vcmVEaWFjcml0aWNzOiBvcHRpb25zLmlnbm9yZURpYWNyaXRpY3MsXG4gICAgICB0b2tlbml6ZTogb3B0aW9ucy50b2tlbml6ZVxuICAgIH0pO1xuICAgIGNvbnN0IHF1ZXJ5VGVybXMgPSB0aGlzLmFuYWx5emVyLnRva2VuaXplKHBhdHRlcm4pO1xuICAgIGNvbnN0IGludmVydGVkSW5kZXggPSBvcHRpb25zLl9pbnZlcnRlZEluZGV4O1xuICAgIGNvbnN0IHtcbiAgICAgIGRmLFxuICAgICAgZmllbGRDb3VudFxuICAgIH0gPSBpbnZlcnRlZEluZGV4O1xuICAgIHRoaXMudGVybVNlYXJjaGVycyA9IFtdO1xuICAgIHRoaXMuaWRmV2VpZ2h0cyA9IFtdO1xuICAgIGZvciAoY29uc3QgdGVybSBvZiBxdWVyeVRlcm1zKSB7XG4gICAgICB0aGlzLnRlcm1TZWFyY2hlcnMucHVzaChuZXcgQml0YXBTZWFyY2godGVybSwge1xuICAgICAgICBsb2NhdGlvbjogb3B0aW9ucy5sb2NhdGlvbixcbiAgICAgICAgdGhyZXNob2xkOiBvcHRpb25zLnRocmVzaG9sZCxcbiAgICAgICAgZGlzdGFuY2U6IG9wdGlvbnMuZGlzdGFuY2UsXG4gICAgICAgIGluY2x1ZGVNYXRjaGVzOiBvcHRpb25zLmluY2x1ZGVNYXRjaGVzLFxuICAgICAgICBmaW5kQWxsTWF0Y2hlczogb3B0aW9ucy5maW5kQWxsTWF0Y2hlcyxcbiAgICAgICAgbWluTWF0Y2hDaGFyTGVuZ3RoOiBvcHRpb25zLm1pbk1hdGNoQ2hhckxlbmd0aCxcbiAgICAgICAgaXNDYXNlU2Vuc2l0aXZlOiBvcHRpb25zLmlzQ2FzZVNlbnNpdGl2ZSxcbiAgICAgICAgaWdub3JlRGlhY3JpdGljczogb3B0aW9ucy5pZ25vcmVEaWFjcml0aWNzLFxuICAgICAgICBpZ25vcmVMb2NhdGlvbjogdHJ1ZVxuICAgICAgfSkpO1xuICAgICAgY29uc3QgZG9jRnJlcSA9IGRmLmdldCh0ZXJtKSB8fCAwO1xuICAgICAgY29uc3QgaWRmID0gTWF0aC5sb2coMSArIChmaWVsZENvdW50IC0gZG9jRnJlcSArIDAuNSkgLyAoZG9jRnJlcSArIDAuNSkpO1xuICAgICAgdGhpcy5pZGZXZWlnaHRzLnB1c2goaWRmKTtcbiAgICB9XG4gICAgdGhpcy5jb21iaW5lQWxsID0gb3B0aW9ucy50b2tlbk1hdGNoID09PSAnYWxsJztcbiAgICB0aGlzLm51bVRlcm1zID0gdGhpcy50ZXJtU2VhcmNoZXJzLmxlbmd0aDtcbiAgICB0aGlzLnVzZU1hc2sgPSB0aGlzLm51bVRlcm1zIDw9IE1BWF9NQVNLX1RFUk1TO1xuICB9XG4gIHNlYXJjaEluKHRleHQpIHtcbiAgICBpZiAoIXRoaXMudGVybVNlYXJjaGVycy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzTWF0Y2g6IGZhbHNlLFxuICAgICAgICBzY29yZTogMVxuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgYWxsSW5kaWNlcyA9IFtdO1xuICAgIGxldCB3ZWlnaHRlZFNjb3JlID0gMDtcbiAgICBsZXQgbWF4UG9zc2libGVTY29yZSA9IDA7XG4gICAgbGV0IG1hdGNoZWRDb3VudCA9IDA7XG5cbiAgICAvLyBgdG9rZW5NYXRjaDogJ2FsbCdgIGNvdmVyYWdlIGZvciB0aGlzIHRleHQgKHVudG91Y2hlZCBpbiB0aGUgZGVmYXVsdFxuICAgIC8vICdhbnknIHBhdGgsIHNvIGl0IGFsbG9jYXRlcyBub3RoaW5nIHRoZXJlKS5cbiAgICBsZXQgbWF0Y2hlZE1hc2sgPSAwO1xuICAgIGNvbnN0IG1hdGNoZWRUZXJtcyA9IHRoaXMuY29tYmluZUFsbCAmJiAhdGhpcy51c2VNYXNrID8gbmV3IFNldCgpIDogbnVsbDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGVybVNlYXJjaGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy50ZXJtU2VhcmNoZXJzW2ldLnNlYXJjaEluKHRleHQpO1xuICAgICAgY29uc3QgaWRmID0gdGhpcy5pZGZXZWlnaHRzW2ldO1xuICAgICAgbWF4UG9zc2libGVTY29yZSArPSBpZGY7XG4gICAgICBpZiAocmVzdWx0LmlzTWF0Y2gpIHtcbiAgICAgICAgbWF0Y2hlZENvdW50Kys7XG4gICAgICAgIHdlaWdodGVkU2NvcmUgKz0gaWRmICogKDEgLSByZXN1bHQuc2NvcmUpO1xuICAgICAgICBpZiAocmVzdWx0LmluZGljZXMpIHtcbiAgICAgICAgICBhbGxJbmRpY2VzLnB1c2goLi4ucmVzdWx0LmluZGljZXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNvbWJpbmVBbGwpIHtcbiAgICAgICAgICBpZiAodGhpcy51c2VNYXNrKSB7XG4gICAgICAgICAgICBtYXRjaGVkTWFzayB8PSAxIDw8IGk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1hdGNoZWRUZXJtcy5hZGQoaSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChtYXRjaGVkQ291bnQgPT09IDApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzTWF0Y2g6IGZhbHNlLFxuICAgICAgICBzY29yZTogMVxuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3Qgbm9ybWFsaXplZCA9IG1heFBvc3NpYmxlU2NvcmUgPiAwID8gMSAtIHdlaWdodGVkU2NvcmUgLyBtYXhQb3NzaWJsZVNjb3JlIDogMDtcbiAgICBjb25zdCBzZWFyY2hSZXN1bHQgPSB7XG4gICAgICBpc01hdGNoOiB0cnVlLFxuICAgICAgc2NvcmU6IE1hdGgubWF4KDAuMDAxLCBub3JtYWxpemVkKVxuICAgIH07XG4gICAgaWYgKHRoaXMub3B0aW9ucy5pbmNsdWRlTWF0Y2hlcyAmJiBhbGxJbmRpY2VzLmxlbmd0aCkge1xuICAgICAgc2VhcmNoUmVzdWx0LmluZGljZXMgPSBtZXJnZUluZGljZXMoYWxsSW5kaWNlcyk7XG4gICAgfVxuXG4gICAgLy8gUmVwb3J0IHRlcm0gY292ZXJhZ2Ugc28gdGhlIGNvcmUgbG9vcCBjYW4gZW5mb3JjZSByZWNvcmQtbGV2ZWwgQU5ELlxuICAgIGlmICh0aGlzLmNvbWJpbmVBbGwpIHtcbiAgICAgIGlmICh0aGlzLnVzZU1hc2spIHtcbiAgICAgICAgc2VhcmNoUmVzdWx0Lm1hdGNoZWRNYXNrID0gbWF0Y2hlZE1hc2s7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWFyY2hSZXN1bHQubWF0Y2hlZFRlcm1zID0gbWF0Y2hlZFRlcm1zO1xuICAgICAgfVxuICAgICAgc2VhcmNoUmVzdWx0LnRlcm1Db3VudCA9IHRoaXMubnVtVGVybXM7XG4gICAgfVxuICAgIHJldHVybiBzZWFyY2hSZXN1bHQ7XG4gIH1cbn1cblxuLy8gU3RhdHMtb25seSBpbnZlcnRlZCBpbmRleCBmb3IgdG9rZW4gc2VhcmNoIChwZXIgUGxhbiAwMDggRGlyZWN0aW9uIEIpLlxuLy9cbi8vIFRoZSBxdWVyeSBwYXRoIGNvbnN1bWVzIG9ubHkgYGRmYCBhbmQgYGZpZWxkQ291bnRgIChJREYgd2VpZ2h0aW5nKS4gVGhlXG4vLyBwZXItZG9jIG1hcHMgZXhpc3Qgc29sZWx5IHRvIGtlZXAgYGRmYCBhbmQgYGZpZWxkQ291bnRgIGNvcnJlY3QgdW5kZXJcbi8vIGBhZGRgIC8gYHJlbW92ZWAgLyBgcmVtb3ZlQXRgOlxuLy9cbi8vICAgZG9jRmllbGRDb3VudFtkb2NdICAgID0gIyBkaXN0aW5jdCBmaWVsZHMgdGhlIGRvYyBjb250cmlidXRlZDsgc3VidHJhY3RlZFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tIGBmaWVsZENvdW50YCBvbiByZW1vdmUuXG4vLyAgIGRvY1Rlcm1GaWVsZEhpdHNbZG9jXSA9IE1hcDx0ZXJtLCAjIGZpZWxkcyBpbiB3aGljaCBgdGVybWAgYXBwZWFycyBmb3Jcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdCBkb2M+OyBlYWNoIGVudHJ5IGRlY3JlbWVudHMgYGRmW3Rlcm1dYCBieVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0IGNvdW50IG9uIHJlbW92ZS5cbi8vXG4vLyBgZGZgIGlzIGluY3JlbWVudGVkIG9uY2UgcGVyIChkb2MsIHRlcm0sIGZpZWxkKSBhdCBpbmRleCB0aW1lLiBSZW1vdmluZyBhXG4vLyBkb2MgZGVjcmVtZW50cyBgZGZgIGJ5IHRoZSBzYW1lIGNvdW50LCBtaXJyb3JpbmcgdGhlIGluY3JlbWVudCBleGFjdGx5LlxuXG5mdW5jdGlvbiBhZGRGaWVsZChpbmRleCwgdGV4dCwgZG9jSWR4LCBhbmFseXplcikge1xuICBjb25zdCB0b2tlbnMgPSBhbmFseXplci50b2tlbml6ZSh0ZXh0KTtcbiAgaWYgKCF0b2tlbnMubGVuZ3RoKSByZXR1cm47XG4gIGluZGV4LmZpZWxkQ291bnQrKztcbiAgaW5kZXguZG9jRmllbGRDb3VudC5zZXQoZG9jSWR4LCAoaW5kZXguZG9jRmllbGRDb3VudC5nZXQoZG9jSWR4KSB8fCAwKSArIDEpO1xuXG4gIC8vIFdlIGNvdW50IGVhY2ggKGRvYywgdGVybSwgZmllbGQpIG9uY2Ug4oCUIHJlcGVhdGVkIG9jY3VycmVuY2VzIHdpdGhpbiB0aGVcbiAgLy8gc2FtZSBmaWVsZCBkb24ndCBtdWx0aXBseSBkZi5cbiAgY29uc3QgZGlzdGluY3RUZXJtcyA9IG5ldyBTZXQodG9rZW5zKTtcbiAgbGV0IHBlckRvY1Rlcm1zID0gaW5kZXguZG9jVGVybUZpZWxkSGl0cy5nZXQoZG9jSWR4KTtcbiAgaWYgKCFwZXJEb2NUZXJtcykge1xuICAgIHBlckRvY1Rlcm1zID0gbmV3IE1hcCgpO1xuICAgIGluZGV4LmRvY1Rlcm1GaWVsZEhpdHMuc2V0KGRvY0lkeCwgcGVyRG9jVGVybXMpO1xuICB9XG4gIGZvciAoY29uc3QgdGVybSBvZiBkaXN0aW5jdFRlcm1zKSB7XG4gICAgcGVyRG9jVGVybXMuc2V0KHRlcm0sIChwZXJEb2NUZXJtcy5nZXQodGVybSkgfHwgMCkgKyAxKTtcbiAgICBpbmRleC5kZi5zZXQodGVybSwgKGluZGV4LmRmLmdldCh0ZXJtKSB8fCAwKSArIDEpO1xuICB9XG59XG5mdW5jdGlvbiBpbmdlc3RSZWNvcmQoaW5kZXgsIHJlY29yZCwga2V5Q291bnQsIGFuYWx5emVyKSB7XG4gIGNvbnN0IHtcbiAgICBpOiBkb2NJZHgsXG4gICAgdixcbiAgICAkOiBmaWVsZHNcbiAgfSA9IHJlY29yZDtcbiAgaWYgKHYgIT09IHVuZGVmaW5lZCkge1xuICAgIGFkZEZpZWxkKGluZGV4LCB2LCBkb2NJZHgsIGFuYWx5emVyKTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKCFmaWVsZHMpIHJldHVybjtcbiAgZm9yIChsZXQga2V5SWR4ID0gMDsga2V5SWR4IDwga2V5Q291bnQ7IGtleUlkeCsrKSB7XG4gICAgY29uc3QgdmFsdWUgPSBmaWVsZHNba2V5SWR4XTtcbiAgICBpZiAoIXZhbHVlKSBjb250aW51ZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIGZvciAoY29uc3Qgc3ViIG9mIHZhbHVlKSBhZGRGaWVsZChpbmRleCwgc3ViLnYsIGRvY0lkeCwgYW5hbHl6ZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhZGRGaWVsZChpbmRleCwgdmFsdWUudiwgZG9jSWR4LCBhbmFseXplcik7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBidWlsZEludmVydGVkSW5kZXgocmVjb3Jkcywga2V5Q291bnQsIGFuYWx5emVyKSB7XG4gIGNvbnN0IGluZGV4ID0ge1xuICAgIGZpZWxkQ291bnQ6IDAsXG4gICAgZGY6IG5ldyBNYXAoKSxcbiAgICBkb2NGaWVsZENvdW50OiBuZXcgTWFwKCksXG4gICAgZG9jVGVybUZpZWxkSGl0czogbmV3IE1hcCgpXG4gIH07XG4gIGZvciAoY29uc3QgcmVjb3JkIG9mIHJlY29yZHMpIHtcbiAgICBpbmdlc3RSZWNvcmQoaW5kZXgsIHJlY29yZCwga2V5Q291bnQsIGFuYWx5emVyKTtcbiAgfVxuICByZXR1cm4gaW5kZXg7XG59XG5mdW5jdGlvbiBhZGRUb0ludmVydGVkSW5kZXgoaW5kZXgsIHJlY29yZCwga2V5Q291bnQsIGFuYWx5emVyKSB7XG4gIGluZ2VzdFJlY29yZChpbmRleCwgcmVjb3JkLCBrZXlDb3VudCwgYW5hbHl6ZXIpO1xufVxuZnVuY3Rpb24gcmVtb3ZlRnJvbUludmVydGVkSW5kZXgoaW5kZXgsIGRvY0lkeCkge1xuICBjb25zdCBmaWVsZENvdW50ID0gaW5kZXguZG9jRmllbGRDb3VudC5nZXQoZG9jSWR4KTtcbiAgaWYgKGZpZWxkQ291bnQgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICBpbmRleC5maWVsZENvdW50IC09IGZpZWxkQ291bnQ7XG4gIGluZGV4LmRvY0ZpZWxkQ291bnQuZGVsZXRlKGRvY0lkeCk7XG4gIGNvbnN0IHBlckRvY1Rlcm1zID0gaW5kZXguZG9jVGVybUZpZWxkSGl0cy5nZXQoZG9jSWR4KTtcbiAgaWYgKCFwZXJEb2NUZXJtcykgcmV0dXJuO1xuICBmb3IgKGNvbnN0IFt0ZXJtLCBoaXRzXSBvZiBwZXJEb2NUZXJtcykge1xuICAgIGNvbnN0IG5leHQgPSAoaW5kZXguZGYuZ2V0KHRlcm0pIHx8IDApIC0gaGl0cztcbiAgICBpZiAobmV4dCA8PSAwKSB7XG4gICAgICBpbmRleC5kZi5kZWxldGUodGVybSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluZGV4LmRmLnNldCh0ZXJtLCBuZXh0KTtcbiAgICB9XG4gIH1cbiAgaW5kZXguZG9jVGVybUZpZWxkSGl0cy5kZWxldGUoZG9jSWR4KTtcbn1cblxuLy8gUmVtb3ZlcyB0aGUgZ2l2ZW4gZG9jSWR4IGVudHJpZXMgYW5kIHJlbnVtYmVycyB0aGUgcmVtYWluaW5nIHBlci1kb2MgbWFwc1xuLy8gc28gdGhleSBzdGF5IGluIHN5bmMgd2l0aCBGdXNlSW5kZXgncyBjb250aWd1b3VzIHJlbnVtYmVyaW5nIG9uIHJlbW92ZS5cbmZ1bmN0aW9uIHJlbW92ZUFuZFNoaWZ0SW52ZXJ0ZWRJbmRleChpbmRleCwgcmVtb3ZlZEluZGljZXMpIHtcbiAgaWYgKHJlbW92ZWRJbmRpY2VzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG4gIC8vIERlLWR1cCBhbmQgc29ydCBzbyB0aGUgc2hpZnQgY29tcHV0YXRpb24gaXMgTyhsb2cgaykgcGVyIGxvb2t1cC5cbiAgY29uc3Qgc29ydGVkID0gQXJyYXkuZnJvbShuZXcgU2V0KHJlbW92ZWRJbmRpY2VzKSkuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xuICBmb3IgKGNvbnN0IGlkeCBvZiBzb3J0ZWQpIHtcbiAgICByZW1vdmVGcm9tSW52ZXJ0ZWRJbmRleChpbmRleCwgaWR4KTtcbiAgfVxuXG4gIC8vIEZvciBhbnkgc3Vydml2aW5nIG9sZElkeCwgaXRzIG5ldyBpZHggaXMgb2xkSWR4IG1pbnVzIHRoZSBudW1iZXIgb2ZcbiAgLy8gcmVtb3ZlZCBpbmRpY2VzIHN0cmljdGx5IGxlc3MgdGhhbiBvbGRJZHguXG4gIGNvbnN0IHNoaWZ0ID0gb2xkSWR4ID0+IHtcbiAgICBsZXQgbG8gPSAwO1xuICAgIGxldCBoaSA9IHNvcnRlZC5sZW5ndGg7XG4gICAgd2hpbGUgKGxvIDwgaGkpIHtcbiAgICAgIGNvbnN0IG1pZCA9IGxvICsgaGkgPj4+IDE7XG4gICAgICBpZiAoc29ydGVkW21pZF0gPCBvbGRJZHgpIGxvID0gbWlkICsgMTtlbHNlIGhpID0gbWlkO1xuICAgIH1cbiAgICByZXR1cm4gb2xkSWR4IC0gbG87XG4gIH07XG4gIGNvbnN0IGZpcnN0UmVtb3ZlZCA9IHNvcnRlZFswXTtcbiAgY29uc3Qgc2hpZnRlZERvY0ZpZWxkQ291bnQgPSBuZXcgTWFwKCk7XG4gIGZvciAoY29uc3QgW29sZEtleSwgY291bnRdIG9mIGluZGV4LmRvY0ZpZWxkQ291bnQpIHtcbiAgICBzaGlmdGVkRG9jRmllbGRDb3VudC5zZXQob2xkS2V5ID4gZmlyc3RSZW1vdmVkID8gc2hpZnQob2xkS2V5KSA6IG9sZEtleSwgY291bnQpO1xuICB9XG4gIGluZGV4LmRvY0ZpZWxkQ291bnQgPSBzaGlmdGVkRG9jRmllbGRDb3VudDtcbiAgY29uc3Qgc2hpZnRlZERvY1Rlcm1GaWVsZEhpdHMgPSBuZXcgTWFwKCk7XG4gIGZvciAoY29uc3QgW29sZEtleSwgdGVybXNdIG9mIGluZGV4LmRvY1Rlcm1GaWVsZEhpdHMpIHtcbiAgICBzaGlmdGVkRG9jVGVybUZpZWxkSGl0cy5zZXQob2xkS2V5ID4gZmlyc3RSZW1vdmVkID8gc2hpZnQob2xkS2V5KSA6IG9sZEtleSwgdGVybXMpO1xuICB9XG4gIGluZGV4LmRvY1Rlcm1GaWVsZEhpdHMgPSBzaGlmdGVkRG9jVGVybUZpZWxkSGl0cztcbn1cblxuY2xhc3MgRnVzZSB7XG4gIC8vIFN0YXRpY3MgYXJlIGFzc2lnbmVkIGluIGVudHJ5LnRzXG5cbiAgY29uc3RydWN0b3IoZG9jcywgb3B0aW9ucywgaW5kZXgpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAuLi5Db25maWcsXG4gICAgICAuLi5vcHRpb25zXG4gICAgfTtcbiAgICBpZiAodGhpcy5vcHRpb25zLnVzZUV4dGVuZGVkU2VhcmNoICYmIGZhbHNlKSA7XG4gICAgaWYgKHRoaXMub3B0aW9ucy51c2VUb2tlblNlYXJjaCAmJiBmYWxzZSkgO1xuICAgIHRoaXMuX2tleVN0b3JlID0gbmV3IEtleVN0b3JlKHRoaXMub3B0aW9ucy5rZXlzKTtcbiAgICB0aGlzLl9kb2NzID0gZG9jcztcbiAgICB0aGlzLl9teUluZGV4ID0gbnVsbDtcbiAgICB0aGlzLl9pbnZlcnRlZEluZGV4ID0gbnVsbDtcbiAgICB0aGlzLnNldENvbGxlY3Rpb24oZG9jcywgaW5kZXgpO1xuICAgIHRoaXMuX2xhc3RRdWVyeSA9IG51bGw7XG4gICAgdGhpcy5fbGFzdFNlYXJjaGVyID0gbnVsbDtcbiAgfVxuICBfZ2V0U2VhcmNoZXIocXVlcnkpIHtcbiAgICBpZiAodGhpcy5fbGFzdFF1ZXJ5ID09PSBxdWVyeSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2xhc3RTZWFyY2hlcjtcbiAgICB9XG4gICAgY29uc3Qgb3B0cyA9IHRoaXMuX2ludmVydGVkSW5kZXggPyB7XG4gICAgICAuLi50aGlzLm9wdGlvbnMsXG4gICAgICBfaW52ZXJ0ZWRJbmRleDogdGhpcy5faW52ZXJ0ZWRJbmRleFxuICAgIH0gOiB0aGlzLm9wdGlvbnM7XG4gICAgY29uc3Qgc2VhcmNoZXIgPSBjcmVhdGVTZWFyY2hlcihxdWVyeSwgb3B0cyk7XG4gICAgdGhpcy5fbGFzdFF1ZXJ5ID0gcXVlcnk7XG4gICAgdGhpcy5fbGFzdFNlYXJjaGVyID0gc2VhcmNoZXI7XG4gICAgcmV0dXJuIHNlYXJjaGVyO1xuICB9XG4gIHNldENvbGxlY3Rpb24oZG9jcywgaW5kZXgpIHtcbiAgICB0aGlzLl9kb2NzID0gZG9jcztcbiAgICBpZiAoaW5kZXggJiYgIShpbmRleCBpbnN0YW5jZW9mIEZ1c2VJbmRleCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihJTkNPUlJFQ1RfSU5ERVhfVFlQRSk7XG4gICAgfVxuICAgIHRoaXMuX215SW5kZXggPSBpbmRleCB8fCBjcmVhdGVJbmRleCh0aGlzLm9wdGlvbnMua2V5cywgdGhpcy5fZG9jcywge1xuICAgICAgZ2V0Rm46IHRoaXMub3B0aW9ucy5nZXRGbixcbiAgICAgIGZpZWxkTm9ybVdlaWdodDogdGhpcy5vcHRpb25zLmZpZWxkTm9ybVdlaWdodFxuICAgIH0pO1xuICAgIGlmICh0aGlzLm9wdGlvbnMudXNlVG9rZW5TZWFyY2gpIHtcbiAgICAgIGNvbnN0IGFuYWx5emVyID0gY3JlYXRlQW5hbHl6ZXIoe1xuICAgICAgICBpc0Nhc2VTZW5zaXRpdmU6IHRoaXMub3B0aW9ucy5pc0Nhc2VTZW5zaXRpdmUsXG4gICAgICAgIGlnbm9yZURpYWNyaXRpY3M6IHRoaXMub3B0aW9ucy5pZ25vcmVEaWFjcml0aWNzLFxuICAgICAgICB0b2tlbml6ZTogdGhpcy5vcHRpb25zLnRva2VuaXplXG4gICAgICB9KTtcbiAgICAgIHRoaXMuX2ludmVydGVkSW5kZXggPSBidWlsZEludmVydGVkSW5kZXgodGhpcy5fbXlJbmRleC5yZWNvcmRzLCB0aGlzLl9teUluZGV4LmtleXMubGVuZ3RoLCBhbmFseXplcik7XG4gICAgfVxuICAgIHRoaXMuX2ludmFsaWRhdGVTZWFyY2hlckNhY2hlKCk7XG4gIH1cbiAgYWRkKGRvYykge1xuICAgIGlmICghaXNEZWZpbmVkKGRvYykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fZG9jcy5wdXNoKGRvYyk7XG4gICAgY29uc3QgcmVjb3JkID0gdGhpcy5fbXlJbmRleC5hZGQoZG9jLCB0aGlzLl9kb2NzLmxlbmd0aCAtIDEpO1xuXG4gICAgLy8gU2tpcCBpbnZlcnRlZC1pbmRleCBib29ra2VlcGluZyB3aGVuIG5vIHJlY29yZCB3YXMgYXBwZW5kZWQgKGJsYW5rXG4gICAgLy8gc3RyaW5ncyBwcm9kdWNlIG51bGwpLiBUaGUgcHJldmlvdXMgY29kZSByZWFkIGByZWNvcmRzW3JlY29yZHMubGVuZ3RoLTFdYFxuICAgIC8vIHVuY29uZGl0aW9uYWxseSwgd2hpY2ggd291bGQgcmUtaW5nZXN0IHRoZSBwcmV2aW91cyBkb2Mgb24gYGFkZChcIlwiKWAuXG4gICAgaWYgKHRoaXMuX2ludmVydGVkSW5kZXggJiYgcmVjb3JkKSB7XG4gICAgICBjb25zdCBhbmFseXplciA9IGNyZWF0ZUFuYWx5emVyKHtcbiAgICAgICAgaXNDYXNlU2Vuc2l0aXZlOiB0aGlzLm9wdGlvbnMuaXNDYXNlU2Vuc2l0aXZlLFxuICAgICAgICBpZ25vcmVEaWFjcml0aWNzOiB0aGlzLm9wdGlvbnMuaWdub3JlRGlhY3JpdGljcyxcbiAgICAgICAgdG9rZW5pemU6IHRoaXMub3B0aW9ucy50b2tlbml6ZVxuICAgICAgfSk7XG4gICAgICBhZGRUb0ludmVydGVkSW5kZXgodGhpcy5faW52ZXJ0ZWRJbmRleCwgcmVjb3JkLCB0aGlzLl9teUluZGV4LmtleXMubGVuZ3RoLCBhbmFseXplcik7XG4gICAgfVxuICAgIHRoaXMuX2ludmFsaWRhdGVTZWFyY2hlckNhY2hlKCk7XG4gIH1cbiAgcmVtb3ZlKHByZWRpY2F0ZSA9ICgpID0+IGZhbHNlKSB7XG4gICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuICAgIGNvbnN0IGluZGljZXNUb1JlbW92ZSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aGlzLl9kb2NzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICBpZiAocHJlZGljYXRlKHRoaXMuX2RvY3NbaV0sIGkpKSB7XG4gICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLl9kb2NzW2ldKTtcbiAgICAgICAgaW5kaWNlc1RvUmVtb3ZlLnB1c2goaSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpbmRpY2VzVG9SZW1vdmUubGVuZ3RoKSB7XG4gICAgICBpZiAodGhpcy5faW52ZXJ0ZWRJbmRleCkge1xuICAgICAgICByZW1vdmVBbmRTaGlmdEludmVydGVkSW5kZXgodGhpcy5faW52ZXJ0ZWRJbmRleCwgaW5kaWNlc1RvUmVtb3ZlKTtcbiAgICAgIH1cblxuICAgICAgLy8gRmlsdGVyIGRvY3MgaW4gYSBzaW5nbGUgcGFzcyBpbnN0ZWFkIG9mIHJldmVyc2Utc3BsaWNpbmdcbiAgICAgIGNvbnN0IHRvUmVtb3ZlID0gbmV3IFNldChpbmRpY2VzVG9SZW1vdmUpO1xuICAgICAgdGhpcy5fZG9jcyA9IHRoaXMuX2RvY3MuZmlsdGVyKChfLCBpKSA9PiAhdG9SZW1vdmUuaGFzKGkpKTtcbiAgICAgIHRoaXMuX215SW5kZXgucmVtb3ZlQWxsKGluZGljZXNUb1JlbW92ZSk7XG4gICAgICB0aGlzLl9pbnZhbGlkYXRlU2VhcmNoZXJDYWNoZSgpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxuICByZW1vdmVBdChpZHgpIHtcbiAgICAvLyBWYWxpZGF0ZSBiZWZvcmUgYW55IG11dGF0aW9uLiBUaGUgcHJldmlvdXMgY29kZSBzcGxpY2VkIGBfZG9jc2AgZmlyc3RcbiAgICAvLyBhbmQgbGV0IEZ1c2VJbmRleC5yZW1vdmVBdCB0aHJvdyBhZnRlcndhcmQg4oCUIHBhcnRpYWwtc3RhdGUgb24gaW52YWxpZFxuICAgIC8vIGlucHV0LiBBdG9taWMgbm93LlxuICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihpZHgpIHx8IGlkeCA8IDAgfHwgaWR4ID49IHRoaXMuX2RvY3MubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoSU5WQUxJRF9ET0NfSU5ERVgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5faW52ZXJ0ZWRJbmRleCkge1xuICAgICAgcmVtb3ZlQW5kU2hpZnRJbnZlcnRlZEluZGV4KHRoaXMuX2ludmVydGVkSW5kZXgsIFtpZHhdKTtcbiAgICB9XG4gICAgY29uc3QgZG9jID0gdGhpcy5fZG9jcy5zcGxpY2UoaWR4LCAxKVswXTtcbiAgICB0aGlzLl9teUluZGV4LnJlbW92ZUF0KGlkeCk7XG4gICAgdGhpcy5faW52YWxpZGF0ZVNlYXJjaGVyQ2FjaGUoKTtcbiAgICByZXR1cm4gZG9jO1xuICB9XG4gIF9pbnZhbGlkYXRlU2VhcmNoZXJDYWNoZSgpIHtcbiAgICB0aGlzLl9sYXN0UXVlcnkgPSBudWxsO1xuICAgIHRoaXMuX2xhc3RTZWFyY2hlciA9IG51bGw7XG4gIH1cbiAgZ2V0SW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX215SW5kZXg7XG4gIH1cbiAgc2VhcmNoKHF1ZXJ5LCBvcHRpb25zKSB7XG4gICAgY29uc3Qge1xuICAgICAgbGltaXQgPSAtMVxuICAgIH0gPSBvcHRpb25zIHx8IHt9O1xuICAgIGNvbnN0IHtcbiAgICAgIGluY2x1ZGVNYXRjaGVzLFxuICAgICAgaW5jbHVkZVNjb3JlLFxuICAgICAgc2hvdWxkU29ydCxcbiAgICAgIHNvcnRGbixcbiAgICAgIGlnbm9yZUZpZWxkTm9ybVxuICAgIH0gPSB0aGlzLm9wdGlvbnM7XG5cbiAgICAvLyBFbXB0eSBzdHJpbmcgcXVlcnkgcmV0dXJucyBhbGwgZG9jcyAodXNlZnVsIGZvciBzZWFyY2ggVUlzKVxuICAgIGlmIChpc1N0cmluZyhxdWVyeSkgJiYgIXF1ZXJ5LnRyaW0oKSkge1xuICAgICAgbGV0IGRvY3MgPSB0aGlzLl9kb2NzLm1hcCgoaXRlbSwgaWR4KSA9PiAoe1xuICAgICAgICBpdGVtLFxuICAgICAgICByZWZJbmRleDogaWR4XG4gICAgICB9KSk7XG4gICAgICBpZiAoaXNOdW1iZXIobGltaXQpICYmIGxpbWl0ID4gLTEpIHtcbiAgICAgICAgZG9jcyA9IGRvY3Muc2xpY2UoMCwgbGltaXQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRvY3M7XG4gICAgfVxuICAgIGNvbnN0IHVzZUhlYXAgPSBpc051bWJlcihsaW1pdCkgJiYgbGltaXQgPiAwICYmIGlzU3RyaW5nKHF1ZXJ5KTtcbiAgICBsZXQgcmVzdWx0cztcbiAgICBpZiAodXNlSGVhcCkge1xuICAgICAgY29uc3QgaGVhcCA9IG5ldyBNYXhIZWFwKGxpbWl0KTtcbiAgICAgIGlmIChpc1N0cmluZyh0aGlzLl9kb2NzWzBdKSkge1xuICAgICAgICB0aGlzLl9zZWFyY2hTdHJpbmdMaXN0KHF1ZXJ5LCB7XG4gICAgICAgICAgaGVhcCxcbiAgICAgICAgICBpZ25vcmVGaWVsZE5vcm1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9zZWFyY2hPYmplY3RMaXN0KHF1ZXJ5LCB7XG4gICAgICAgICAgaGVhcCxcbiAgICAgICAgICBpZ25vcmVGaWVsZE5vcm1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXN1bHRzID0gaGVhcC5leHRyYWN0U29ydGVkKHNvcnRGbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdHMgPSBpc1N0cmluZyhxdWVyeSkgPyBpc1N0cmluZyh0aGlzLl9kb2NzWzBdKSA/IHRoaXMuX3NlYXJjaFN0cmluZ0xpc3QocXVlcnkpIDogdGhpcy5fc2VhcmNoT2JqZWN0TGlzdChxdWVyeSkgOiB0aGlzLl9zZWFyY2hMb2dpY2FsKHF1ZXJ5KTtcbiAgICAgIGNvbXB1dGVTY29yZShyZXN1bHRzLCB7XG4gICAgICAgIGlnbm9yZUZpZWxkTm9ybVxuICAgICAgfSk7XG4gICAgICBpZiAoc2hvdWxkU29ydCkge1xuICAgICAgICByZXN1bHRzLnNvcnQoc29ydEZuKTtcbiAgICAgIH1cbiAgICAgIGlmIChpc051bWJlcihsaW1pdCkgJiYgbGltaXQgPiAtMSkge1xuICAgICAgICByZXN1bHRzID0gcmVzdWx0cy5zbGljZSgwLCBsaW1pdCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmb3JtYXQocmVzdWx0cywgdGhpcy5fZG9jcywge1xuICAgICAgaW5jbHVkZU1hdGNoZXMsXG4gICAgICBpbmNsdWRlU2NvcmVcbiAgICB9KTtcbiAgfVxuICBfc2VhcmNoU3RyaW5nTGlzdChxdWVyeSwge1xuICAgIGhlYXAsXG4gICAgaWdub3JlRmllbGROb3JtXG4gIH0gPSB7fSkge1xuICAgIGNvbnN0IHNlYXJjaGVyID0gdGhpcy5fZ2V0U2VhcmNoZXIocXVlcnkpO1xuICAgIGNvbnN0IHJlcXVpcmVBbGxUb2tlbnMgPSB0aGlzLm9wdGlvbnMudXNlVG9rZW5TZWFyY2ggJiYgdGhpcy5vcHRpb25zLnRva2VuTWF0Y2ggPT09ICdhbGwnO1xuICAgIGNvbnN0IHtcbiAgICAgIHJlY29yZHNcbiAgICB9ID0gdGhpcy5fbXlJbmRleDtcbiAgICBjb25zdCByZXN1bHRzID0gaGVhcCA/IG51bGwgOiBbXTtcblxuICAgIC8vIEl0ZXJhdGUgb3ZlciBldmVyeSBzdHJpbmcgaW4gdGhlIGluZGV4XG4gICAgcmVjb3Jkcy5mb3JFYWNoKCh7XG4gICAgICB2OiB0ZXh0LFxuICAgICAgaTogaWR4LFxuICAgICAgbjogbm9ybVxuICAgIH0pID0+IHtcbiAgICAgIGlmICghaXNEZWZpbmVkKHRleHQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNlYXJjaFJlc3VsdCA9IHNlYXJjaGVyLnNlYXJjaEluKHRleHQpO1xuICAgICAgaWYgKHNlYXJjaFJlc3VsdC5pc01hdGNoKSB7XG4gICAgICAgIGNvbnN0IG1hdGNoID0ge1xuICAgICAgICAgIHNjb3JlOiBzZWFyY2hSZXN1bHQuc2NvcmUsXG4gICAgICAgICAgdmFsdWU6IHRleHQsXG4gICAgICAgICAgbm9ybTogbm9ybSxcbiAgICAgICAgICBpbmRpY2VzOiBzZWFyY2hSZXN1bHQuaW5kaWNlc1xuICAgICAgICB9O1xuICAgICAgICBpZiAocmVxdWlyZUFsbFRva2Vucykge1xuICAgICAgICAgIG1hdGNoLm1hdGNoZWRNYXNrID0gc2VhcmNoUmVzdWx0Lm1hdGNoZWRNYXNrO1xuICAgICAgICAgIG1hdGNoLm1hdGNoZWRUZXJtcyA9IHNlYXJjaFJlc3VsdC5tYXRjaGVkVGVybXM7XG4gICAgICAgICAgbWF0Y2gudGVybUNvdW50ID0gc2VhcmNoUmVzdWx0LnRlcm1Db3VudDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtYXRjaGVzID0gW21hdGNoXTtcblxuICAgICAgICAvLyBSZWNvcmQtbGV2ZWwgQU5EIGdhdGUgKHRva2VuIHNlYXJjaCBgdG9rZW5NYXRjaDogJ2FsbCdgKSwgYXBwbGllZFxuICAgICAgICAvLyBiZWZvcmUgaGVhcCBpbnNlcnRpb24gc28gYGxpbWl0YCByZXR1cm5zIHRoZSBzYW1lIHRvcC1OIGFzIHVubGltaXRlZC5cbiAgICAgICAgaWYgKCFyZXF1aXJlQWxsVG9rZW5zIHx8IHRoaXMuX2NvdmVyc0FsbFRva2VucyhtYXRjaGVzKSkge1xuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICAgICAgIGl0ZW06IHRleHQsXG4gICAgICAgICAgICBpZHgsXG4gICAgICAgICAgICBtYXRjaGVzXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAoaGVhcCkge1xuICAgICAgICAgICAgcmVzdWx0LnNjb3JlID0gY29tcHV0ZVNjb3JlU2luZ2xlKHJlc3VsdC5tYXRjaGVzLCB7XG4gICAgICAgICAgICAgIGlnbm9yZUZpZWxkTm9ybVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoaGVhcC5zaG91bGRJbnNlcnQocmVzdWx0LnNjb3JlKSkge1xuICAgICAgICAgICAgICBoZWFwLmluc2VydChyZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHRzLnB1c2gocmVzdWx0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxuICBfc2VhcmNoTG9naWNhbChxdWVyeSkge1xuICAgIGNvbnN0IGV4cHJlc3Npb24gPSBwYXJzZShxdWVyeSwgdGhpcy5vcHRpb25zKTtcbiAgICBjb25zdCBldmFsdWF0ZSA9IChub2RlLCBpdGVtLCBpZHgpID0+IHtcbiAgICAgIGlmICghKCdjaGlsZHJlbicgaW4gbm9kZSkpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIGtleUlkLFxuICAgICAgICAgIHNlYXJjaGVyXG4gICAgICAgIH0gPSBub2RlO1xuICAgICAgICBsZXQgbWF0Y2hlcztcbiAgICAgICAgaWYgKGtleUlkID09PSBudWxsKSB7XG4gICAgICAgICAgLy8gS2V5bGVzcyBlbnRyeTogc2VhcmNoIGFjcm9zcyBhbGwga2V5c1xuICAgICAgICAgIG1hdGNoZXMgPSBbXTtcbiAgICAgICAgICB0aGlzLl9teUluZGV4LmtleXMuZm9yRWFjaCgoa2V5LCBrZXlJbmRleCkgPT4ge1xuICAgICAgICAgICAgbWF0Y2hlcy5wdXNoKC4uLnRoaXMuX2ZpbmRNYXRjaGVzKHtcbiAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICB2YWx1ZTogaXRlbVtrZXlJbmRleF0sXG4gICAgICAgICAgICAgIHNlYXJjaGVyOiBzZWFyY2hlclxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1hdGNoZXMgPSB0aGlzLl9maW5kTWF0Y2hlcyh7XG4gICAgICAgICAgICBrZXk6IHRoaXMuX2tleVN0b3JlLmdldChrZXlJZCksXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5fbXlJbmRleC5nZXRWYWx1ZUZvckl0ZW1BdEtleUlkKGl0ZW0sIGtleUlkKSxcbiAgICAgICAgICAgIHNlYXJjaGVyOiBzZWFyY2hlclxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtYXRjaGVzICYmIG1hdGNoZXMubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIFt7XG4gICAgICAgICAgICBpZHgsXG4gICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgbWF0Y2hlc1xuICAgICAgICAgIH1dO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHtcbiAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgIG9wZXJhdG9yXG4gICAgICB9ID0gbm9kZTtcbiAgICAgIGNvbnN0IHJlcyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGV2YWx1YXRlKGNoaWxkLCBpdGVtLCBpZHgpO1xuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCkge1xuICAgICAgICAgIHJlcy5wdXNoKC4uLnJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSBpZiAob3BlcmF0b3IgPT09IExvZ2ljYWxPcGVyYXRvci5BTkQpIHtcbiAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXM7XG4gICAgfTtcbiAgICBjb25zdCByZWNvcmRzID0gdGhpcy5fbXlJbmRleC5yZWNvcmRzO1xuICAgIGNvbnN0IHJlc3VsdE1hcCA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCByZXN1bHRzID0gW107XG4gICAgcmVjb3Jkcy5mb3JFYWNoKCh7XG4gICAgICAkOiBpdGVtLFxuICAgICAgaTogaWR4XG4gICAgfSkgPT4ge1xuICAgICAgaWYgKGlzRGVmaW5lZChpdGVtKSkge1xuICAgICAgICBjb25zdCBleHBSZXN1bHRzID0gZXZhbHVhdGUoZXhwcmVzc2lvbiwgaXRlbSwgaWR4KTtcbiAgICAgICAgaWYgKGV4cFJlc3VsdHMubGVuZ3RoKSB7XG4gICAgICAgICAgLy8gRGVkdXBlIHdoZW4gYWRkaW5nXG4gICAgICAgICAgaWYgKCFyZXN1bHRNYXAuaGFzKGlkeCkpIHtcbiAgICAgICAgICAgIHJlc3VsdE1hcC5zZXQoaWR4LCB7XG4gICAgICAgICAgICAgIGlkeCxcbiAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgbWF0Y2hlczogW11cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHJlc3VsdE1hcC5nZXQoaWR4KSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGV4cFJlc3VsdHMuZm9yRWFjaCgoe1xuICAgICAgICAgICAgbWF0Y2hlc1xuICAgICAgICAgIH0pID0+IHtcbiAgICAgICAgICAgIHJlc3VsdE1hcC5nZXQoaWR4KS5tYXRjaGVzLnB1c2goLi4ubWF0Y2hlcyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxuXG4gIC8vIFdoZW4gYSBzZWFyY2ggaW52b2x2ZXMgaW52ZXJzZSBwYXR0ZXJucyAoZS5nLiAhU3lydXApLCB0aGUgYWdncmVnYXRpb25cbiAgLy8gYWNyb3NzIGtleXMgc3dpdGNoZXMgZnJvbSBcIkFOWSBrZXkgbWF0Y2hlc1wiIHRvIFwiQUxMIGtleXMgbXVzdCBtYXRjaC5cIlxuICAvLyBUaGlzIGlzIHNpZ25hbGVkIGJ5IGhhc0ludmVyc2Ugb24gdGhlIFNlYXJjaFJlc3VsdCBmcm9tIEV4dGVuZGVkU2VhcmNoLlxuICAvL1xuICAvLyBGb3IgbWl4ZWQgcGF0dGVybnMgbGlrZSBcIl5oZWxsbyAhU3lydXBcIiwgYSBrZXkgZmFpbHVyZSBpcyBhbWJpZ3VvdXMg4oCUXG4gIC8vIGl0IGNvdWxkIGJlIHRoZSBwb3NpdGl2ZSBvciBpbnZlcnNlIHRlcm0gdGhhdCBmYWlsZWQuIEluIHRoYXQgY2FzZSB3ZVxuICAvLyBjb25zZXJ2YXRpdmVseSBleGNsdWRlIHRoZSBpdGVtLCB3aGljaCBpcyBzdHJpY3RseSBiZXR0ZXIgdGhhbiB0aGUgb2xkXG4gIC8vIGJlaGF2aW9yIG9mIGluY2x1ZGluZyBpdC4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20va3Jpc2svRnVzZS9pc3N1ZXMvNzEyXG4gIF9zZWFyY2hPYmplY3RMaXN0KHF1ZXJ5LCB7XG4gICAgaGVhcCxcbiAgICBpZ25vcmVGaWVsZE5vcm1cbiAgfSA9IHt9KSB7XG4gICAgY29uc3Qgc2VhcmNoZXIgPSB0aGlzLl9nZXRTZWFyY2hlcihxdWVyeSk7XG4gICAgY29uc3QgcmVxdWlyZUFsbFRva2VucyA9IHRoaXMub3B0aW9ucy51c2VUb2tlblNlYXJjaCAmJiB0aGlzLm9wdGlvbnMudG9rZW5NYXRjaCA9PT0gJ2FsbCc7XG4gICAgY29uc3Qge1xuICAgICAga2V5cyxcbiAgICAgIHJlY29yZHNcbiAgICB9ID0gdGhpcy5fbXlJbmRleDtcbiAgICBjb25zdCByZXN1bHRzID0gaGVhcCA/IG51bGwgOiBbXTtcblxuICAgIC8vIExpc3QgaXMgQXJyYXk8T2JqZWN0PlxuICAgIHJlY29yZHMuZm9yRWFjaCgoe1xuICAgICAgJDogaXRlbSxcbiAgICAgIGk6IGlkeFxuICAgIH0pID0+IHtcbiAgICAgIGlmICghaXNEZWZpbmVkKGl0ZW0pKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG1hdGNoZXMgPSBbXTtcbiAgICAgIGxldCBhbnlLZXlGYWlsZWQgPSBmYWxzZTtcbiAgICAgIGxldCBoYXNJbnZlcnNlID0gZmFsc2U7XG5cbiAgICAgIC8vIEl0ZXJhdGUgb3ZlciBldmVyeSBrZXkgKGkuZSwgcGF0aCksIGFuZCBmZXRjaCB0aGUgdmFsdWUgYXQgdGhhdCBrZXlcbiAgICAgIGtleXMuZm9yRWFjaCgoa2V5LCBrZXlJbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBrZXlNYXRjaGVzID0gdGhpcy5fZmluZE1hdGNoZXMoe1xuICAgICAgICAgIGtleSxcbiAgICAgICAgICB2YWx1ZTogaXRlbVtrZXlJbmRleF0sXG4gICAgICAgICAgc2VhcmNoZXJcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChrZXlNYXRjaGVzLmxlbmd0aCkge1xuICAgICAgICAgIG1hdGNoZXMucHVzaCguLi5rZXlNYXRjaGVzKTtcbiAgICAgICAgICBpZiAoa2V5TWF0Y2hlc1swXS5oYXNJbnZlcnNlKSB7XG4gICAgICAgICAgICBoYXNJbnZlcnNlID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYW55S2V5RmFpbGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIElmIHRoZSBzZWFyY2ggaW52b2x2ZXMgaW52ZXJzZSBwYXR0ZXJucywgQUxMIGtleXMgbXVzdCBtYXRjaFxuICAgICAgaWYgKGhhc0ludmVyc2UgJiYgYW55S2V5RmFpbGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gUmVjb3JkLWxldmVsIEFORCBnYXRlICh0b2tlbiBzZWFyY2ggYHRva2VuTWF0Y2g6ICdhbGwnYCk6IGV2ZXJ5IHF1ZXJ5XG4gICAgICAvLyB0ZXJtIG11c3QgYmUgY292ZXJlZCBhY3Jvc3MgdGhlIHJlY29yZCdzIGZpZWxkL2FycmF5LWVsZW1lbnQgbWF0Y2hlcy5cbiAgICAgIC8vIEFwcGxpZWQgYmVmb3JlIGhlYXAgaW5zZXJ0aW9uIHNvIGBsaW1pdGAgcmV0dXJucyB0aGUgc2FtZSB0b3AtTi5cbiAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCAmJiAoIXJlcXVpcmVBbGxUb2tlbnMgfHwgdGhpcy5fY292ZXJzQWxsVG9rZW5zKG1hdGNoZXMpKSkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgICAgaWR4LFxuICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgbWF0Y2hlc1xuICAgICAgICB9O1xuICAgICAgICBpZiAoaGVhcCkge1xuICAgICAgICAgIHJlc3VsdC5zY29yZSA9IGNvbXB1dGVTY29yZVNpbmdsZShyZXN1bHQubWF0Y2hlcywge1xuICAgICAgICAgICAgaWdub3JlRmllbGROb3JtXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKGhlYXAuc2hvdWxkSW5zZXJ0KHJlc3VsdC5zY29yZSkpIHtcbiAgICAgICAgICAgIGhlYXAuaW5zZXJ0KHJlc3VsdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdHMucHVzaChyZXN1bHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cbiAgX2ZpbmRNYXRjaGVzKHtcbiAgICBrZXksXG4gICAgdmFsdWUsXG4gICAgc2VhcmNoZXJcbiAgfSkge1xuICAgIGlmICghaXNEZWZpbmVkKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBjb25zdCBtYXRjaGVzID0gW107XG4gICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKCh7XG4gICAgICAgIHY6IHRleHQsXG4gICAgICAgIGk6IGlkeCxcbiAgICAgICAgbjogbm9ybVxuICAgICAgfSkgPT4ge1xuICAgICAgICBpZiAoIWlzRGVmaW5lZCh0ZXh0KSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzZWFyY2hSZXN1bHQgPSBzZWFyY2hlci5zZWFyY2hJbih0ZXh0KTtcbiAgICAgICAgaWYgKHNlYXJjaFJlc3VsdC5pc01hdGNoKSB7XG4gICAgICAgICAgY29uc3QgbWF0Y2ggPSB7XG4gICAgICAgICAgICBzY29yZTogc2VhcmNoUmVzdWx0LnNjb3JlLFxuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgdmFsdWU6IHRleHQsXG4gICAgICAgICAgICBpZHgsXG4gICAgICAgICAgICBub3JtLFxuICAgICAgICAgICAgaW5kaWNlczogc2VhcmNoUmVzdWx0LmluZGljZXMsXG4gICAgICAgICAgICBoYXNJbnZlcnNlOiBzZWFyY2hSZXN1bHQuaGFzSW52ZXJzZVxuICAgICAgICAgIH07XG4gICAgICAgICAgLy8gQ2FycnkgdG9rZW4tc2VhcmNoIEFORCBjb3ZlcmFnZSBvbmx5IHdoZW4gcHJlc2VudCwgc28gdGhlIGRlZmF1bHRcbiAgICAgICAgICAvLyAobm9uLXRva2VuIC8gJ2FueScpIE1hdGNoU2NvcmUga2VlcHMgaXRzIG9yaWdpbmFsIG9iamVjdCBzaGFwZS5cbiAgICAgICAgICBpZiAoc2VhcmNoUmVzdWx0LnRlcm1Db3VudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBtYXRjaC5tYXRjaGVkTWFzayA9IHNlYXJjaFJlc3VsdC5tYXRjaGVkTWFzaztcbiAgICAgICAgICAgIG1hdGNoLm1hdGNoZWRUZXJtcyA9IHNlYXJjaFJlc3VsdC5tYXRjaGVkVGVybXM7XG4gICAgICAgICAgICBtYXRjaC50ZXJtQ291bnQgPSBzZWFyY2hSZXN1bHQudGVybUNvdW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICBtYXRjaGVzLnB1c2gobWF0Y2gpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qge1xuICAgICAgICB2OiB0ZXh0LFxuICAgICAgICBuOiBub3JtXG4gICAgICB9ID0gdmFsdWU7XG4gICAgICBjb25zdCBzZWFyY2hSZXN1bHQgPSBzZWFyY2hlci5zZWFyY2hJbih0ZXh0KTtcbiAgICAgIGlmIChzZWFyY2hSZXN1bHQuaXNNYXRjaCkge1xuICAgICAgICBjb25zdCBtYXRjaCA9IHtcbiAgICAgICAgICBzY29yZTogc2VhcmNoUmVzdWx0LnNjb3JlLFxuICAgICAgICAgIGtleSxcbiAgICAgICAgICB2YWx1ZTogdGV4dCxcbiAgICAgICAgICBub3JtLFxuICAgICAgICAgIGluZGljZXM6IHNlYXJjaFJlc3VsdC5pbmRpY2VzLFxuICAgICAgICAgIGhhc0ludmVyc2U6IHNlYXJjaFJlc3VsdC5oYXNJbnZlcnNlXG4gICAgICAgIH07XG4gICAgICAgIGlmIChzZWFyY2hSZXN1bHQudGVybUNvdW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBtYXRjaC5tYXRjaGVkTWFzayA9IHNlYXJjaFJlc3VsdC5tYXRjaGVkTWFzaztcbiAgICAgICAgICBtYXRjaC5tYXRjaGVkVGVybXMgPSBzZWFyY2hSZXN1bHQubWF0Y2hlZFRlcm1zO1xuICAgICAgICAgIG1hdGNoLnRlcm1Db3VudCA9IHNlYXJjaFJlc3VsdC50ZXJtQ291bnQ7XG4gICAgICAgIH1cbiAgICAgICAgbWF0Y2hlcy5wdXNoKG1hdGNoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICAvLyBSZWNvcmQtbGV2ZWwgQU5EIGdhdGUgZm9yIHRva2VuIHNlYXJjaCAoYHRva2VuTWF0Y2g6ICdhbGwnYCkuIFJldHVybnMgdHJ1ZVxuICAvLyB1bmxlc3MgdGhlIG1hdGNoZWQgdGVybXMgYWNyb3NzIEFMTCBvZiBhIHJlY29yZCdzIGZpZWxkL2FycmF5LWVsZW1lbnRcbiAgLy8gbWF0Y2hlcyBmYWlsIHRvIGNvdmVyIGV2ZXJ5IHF1ZXJ5IHRlcm0uIGB0ZXJtQ291bnRgIGlzIG9ubHkgc2V0IGJ5XG4gIC8vIFRva2VuU2VhcmNoIGluICdhbGwnIG1vZGUsIHNvIG5vbi10b2tlbiAvICdhbnknIHNlYXJjaGVzIGFsd2F5cyBwYXNzLlxuICBfY292ZXJzQWxsVG9rZW5zKG1hdGNoZXMpIHtcbiAgICBjb25zdCB0ZXJtQ291bnQgPSBtYXRjaGVzLmxlbmd0aCA/IG1hdGNoZXNbMF0udGVybUNvdW50IDogdW5kZWZpbmVkO1xuICAgIGlmICh0ZXJtQ291bnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICh0ZXJtQ291bnQgPD0gTUFYX01BU0tfVEVSTVMpIHtcbiAgICAgIGxldCBjb3ZlcmFnZSA9IDA7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdGNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY292ZXJhZ2UgfD0gbWF0Y2hlc1tpXS5tYXRjaGVkTWFzayB8fCAwO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvdmVyYWdlID09PSAyICoqIHRlcm1Db3VudCAtIDE7XG4gICAgfVxuICAgIGNvbnN0IGNvdmVyYWdlID0gbmV3IFNldCgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgdGVybXMgPSBtYXRjaGVzW2ldLm1hdGNoZWRUZXJtcztcbiAgICAgIGlmICh0ZXJtcykge1xuICAgICAgICBmb3IgKGNvbnN0IHQgb2YgdGVybXMpIHtcbiAgICAgICAgICBjb3ZlcmFnZS5hZGQodCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvdmVyYWdlLnNpemUgPT09IHRlcm1Db3VudDtcbiAgfVxufVxuXG5GdXNlLnZlcnNpb24gPSAnNy40LjEnO1xuRnVzZS5jcmVhdGVJbmRleCA9IGNyZWF0ZUluZGV4O1xuRnVzZS5wYXJzZUluZGV4ID0gcGFyc2VJbmRleDtcbkZ1c2UuY29uZmlnID0gQ29uZmlnO1xuRnVzZS5tYXRjaCA9IGZ1bmN0aW9uIChwYXR0ZXJuLCB0ZXh0LCBvcHRpb25zKSB7XG4gIC8vIFRva2VuIHNlYXJjaCBuZWVkcyBjb3JwdXMgc3RhdGlzdGljcyAoZGYsIGZpZWxkQ291bnQpIHRoYXQgYSBvbmUtb2ZmXG4gIC8vIHN0cmluZyBjb21wYXJpc29uIGNhbid0IHByb3ZpZGUuIFJlamVjdCBpdCBoZXJlIHNvIHRoZSBjb250cmFjdCBpcyB0aGVcbiAgLy8gc2FtZSBpbiB0aGUgZnVsbCBhbmQgYmFzaWMgYnVpbGRzIOKAlCB3aXRob3V0IHRoaXMgZ3VhcmQsIHRoZSBmdWxsIGJ1aWxkXG4gIC8vIGNyYXNoZXMgd2l0aCBhbiBvcGFxdWUgVHlwZUVycm9yIGFuZCB0aGUgYmFzaWMgYnVpbGQgc2lsZW50bHkgZmFsbHMgYmFja1xuICAvLyB0byBmdXp6eSBtYXRjaGluZy5cbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy51c2VUb2tlblNlYXJjaCkge1xuICAgIHRocm93IG5ldyBFcnJvcihGVVNFX01BVENIX1RPS0VOX1NFQVJDSF9VTlNVUFBPUlRFRCk7XG4gIH1cbiAgY29uc3Qgc2VhcmNoZXIgPSBjcmVhdGVTZWFyY2hlcihwYXR0ZXJuLCB7XG4gICAgLi4uQ29uZmlnLFxuICAgIC4uLm9wdGlvbnNcbiAgfSk7XG4gIHJldHVybiBzZWFyY2hlci5zZWFyY2hJbih0ZXh0KTtcbn07XG57XG4gIEZ1c2UucGFyc2VRdWVyeSA9IHBhcnNlO1xufVxue1xuICByZWdpc3RlcihFeHRlbmRlZFNlYXJjaCk7XG59XG57XG4gIHJlZ2lzdGVyKFRva2VuU2VhcmNoKTtcbn1cbkZ1c2UudXNlID0gZnVuY3Rpb24gKC4uLnBsdWdpbnMpIHtcbiAgcGx1Z2lucy5mb3JFYWNoKHBsdWdpbiA9PiByZWdpc3RlcihwbHVnaW4pKTtcbn07XG5cbi8vIFJlLWV4cG9ydCBwdWJsaWMgdHlwZXNcblxuZXhwb3J0IHsgRnVzZSBhcyBkZWZhdWx0IH07XG4iLAogICAgImltcG9ydCBGdXNlIGZyb20gJ2Z1c2UuanMnO1xuaW1wb3J0IHR5cGUgeyBGdXNlUmVzdWx0IH0gZnJvbSAnZnVzZS5qcyc7XG5pbXBvcnQgdHlwZSB7IFNlYXJjaERvY3VtZW50LCBTZWFyY2hJbmRleERhdGEgfSBmcm9tICcuLi8uLi9zb3VyY2UtZGF0YS9kYXRhLXR5cGVzJztcblxuY29uc3QgVFlQRV9QUklPUklUWTogUmVjb3JkPFNlYXJjaERvY3VtZW50Wyd0eXBlJ10sIG51bWJlcj4gPSB7XG4gICAgY29tbWFuZGVyOiAwLFxuICAgIHBsYXllcnVuaXQ6IDEsXG4gICAgcHJlc3RpZ2U6IDIsXG4gICAgbWlzc2lvbjogMyxcbiAgICBtdXRhdG9yOiAzLFxuICAgIGFtb251bml0OiA0LFxuICAgIHVwZ3JhZGU6IDUsXG4gICAgdGFsZW50OiA1LFxuICAgIHdlZWtseW11dGF0aW9uOiA2LFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNlYXJjaEluZGV4KGRhdGE6IFNlYXJjaEluZGV4RGF0YSk6IEZ1c2U8U2VhcmNoRG9jdW1lbnQ+IHtcbiAgICBjb25zdCBpbmRleCA9IEZ1c2UucGFyc2VJbmRleDxTZWFyY2hEb2N1bWVudD4oZGF0YS5pbmRleCBhcyBQYXJhbWV0ZXJzPHR5cGVvZiBGdXNlLnBhcnNlSW5kZXg8U2VhcmNoRG9jdW1lbnQ+PlswXSk7XG4gICAgcmV0dXJuIG5ldyBGdXNlKGRhdGEuZG9jdW1lbnRzLCB7XG4gICAgICAgIGtleXM6IGRhdGEua2V5cyxcbiAgICAgICAgdGhyZXNob2xkOiAwLjM1LFxuICAgICAgICBpZ25vcmVMb2NhdGlvbjogdHJ1ZSxcbiAgICAgICAgbWluTWF0Y2hDaGFyTGVuZ3RoOiAxLFxuICAgICAgICBpbmNsdWRlU2NvcmU6IHRydWUsXG4gICAgfSwgaW5kZXgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoRG9jdW1lbnRzKGZ1c2U6IEZ1c2U8U2VhcmNoRG9jdW1lbnQ+LCBxdWVyeTogc3RyaW5nLCBsaW1pdDogbnVtYmVyKTogU2VhcmNoRG9jdW1lbnRbXSB7XG4gICAgY29uc3Qgbm9ybWFsaXplZFF1ZXJ5ID0gdG9rZW4ocXVlcnkpO1xuICAgIGlmICghbm9ybWFsaXplZFF1ZXJ5KSByZXR1cm4gW107XG5cbiAgICByZXR1cm4gZnVzZS5zZWFyY2gocXVlcnkpXG4gICAgICAgIC5zb3J0KChhLCBiKSA9PiBjb21wYXJlUmVzdWx0cyhhLCBiLCBub3JtYWxpemVkUXVlcnkpKVxuICAgICAgICAuc2xpY2UoMCwgbGltaXQpXG4gICAgICAgIC5tYXAocmVzdWx0ID0+IHJlc3VsdC5pdGVtKTtcbn1cblxuZnVuY3Rpb24gY29tcGFyZVJlc3VsdHMoYTogRnVzZVJlc3VsdDxTZWFyY2hEb2N1bWVudD4sIGI6IEZ1c2VSZXN1bHQ8U2VhcmNoRG9jdW1lbnQ+LCBub3JtYWxpemVkUXVlcnk6IHN0cmluZyk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRpdGxlTWF0Y2hSYW5rKGEuaXRlbSwgbm9ybWFsaXplZFF1ZXJ5KSAtIHRpdGxlTWF0Y2hSYW5rKGIuaXRlbSwgbm9ybWFsaXplZFF1ZXJ5KSB8fFxuICAgICAgICBUWVBFX1BSSU9SSVRZW2EuaXRlbS50eXBlXSAtIFRZUEVfUFJJT1JJVFlbYi5pdGVtLnR5cGVdIHx8XG4gICAgICAgIGEucmVmSW5kZXggLSBiLnJlZkluZGV4IHx8XG4gICAgICAgIChhLnNjb3JlIHx8IDApIC0gKGIuc2NvcmUgfHwgMCk7XG59XG5cbmZ1bmN0aW9uIHRpdGxlTWF0Y2hSYW5rKGRvY3VtZW50OiBTZWFyY2hEb2N1bWVudCwgbm9ybWFsaXplZFF1ZXJ5OiBzdHJpbmcpOiBudW1iZXIge1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRUaXRsZSA9IHRva2VuKGRvY3VtZW50LnRpdGxlKTtcbiAgICBpZiAobm9ybWFsaXplZFRpdGxlLnN0YXJ0c1dpdGgobm9ybWFsaXplZFF1ZXJ5KSkgcmV0dXJuIDA7XG4gICAgaWYgKG5vcm1hbGl6ZWRUaXRsZS5pbmNsdWRlcyhub3JtYWxpemVkUXVlcnkpKSByZXR1cm4gMTtcbiAgICByZXR1cm4gMjtcbn1cblxuZnVuY3Rpb24gdG9rZW4odGV4dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGV4dC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1teYS16MC05XSsvZywgJycpO1xufVxuIiwKICAgICJpbXBvcnR7b3B0aW9ucyBhcyByLEZyYWdtZW50IGFzIGV9ZnJvbVwicHJlYWN0XCI7ZXhwb3J0e0ZyYWdtZW50fWZyb21cInByZWFjdFwiO3ZhciB0PS9bXCImPF0vO2Z1bmN0aW9uIG4ocil7aWYoMD09PXIubGVuZ3RofHwhMT09PXQudGVzdChyKSlyZXR1cm4gcjtmb3IodmFyIGU9MCxuPTAsbz1cIlwiLGY9XCJcIjtuPHIubGVuZ3RoO24rKyl7c3dpdGNoKHIuY2hhckNvZGVBdChuKSl7Y2FzZSAzNDpmPVwiJnF1b3Q7XCI7YnJlYWs7Y2FzZSAzODpmPVwiJmFtcDtcIjticmVhaztjYXNlIDYwOmY9XCImbHQ7XCI7YnJlYWs7ZGVmYXVsdDpjb250aW51ZX1uIT09ZSYmKG8rPXIuc2xpY2UoZSxuKSksbys9ZixlPW4rMX1yZXR1cm4gbiE9PWUmJihvKz1yLnNsaWNlKGUsbikpLG99dmFyIG89L2FjaXR8ZXgoPzpzfGd8bnxwfCQpfHJwaHxncmlkfG93c3xtbmN8bnR3fGluZVtjaF18em9vfF5vcmR8aXRlcmEvaSxmPTAsaT1BcnJheS5pc0FycmF5O2Z1bmN0aW9uIHUoZSx0LG4sbyxpLHUpe3R8fCh0PXt9KTt2YXIgYSxjLHA9dDtpZihcInJlZlwiaW4gcClmb3IoYyBpbiBwPXt9LHQpXCJyZWZcIj09Yz9hPXRbY106cFtjXT10W2NdO3ZhciBsPXt0eXBlOmUscHJvcHM6cCxrZXk6bixyZWY6YSxfX2s6bnVsbCxfXzpudWxsLF9fYjowLF9fZTpudWxsLF9fYzpudWxsLGNvbnN0cnVjdG9yOnZvaWQgMCxfX3Y6LS1mLF9faTotMSxfX3U6MCxfX3NvdXJjZTppLF9fc2VsZjp1fTtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiYoYT1lLmRlZmF1bHRQcm9wcykpZm9yKGMgaW4gYSl2b2lkIDA9PT1wW2NdJiYocFtjXT1hW2NdKTtyZXR1cm4gci52bm9kZSYmci52bm9kZShsKSxsfWZ1bmN0aW9uIGEocil7dmFyIHQ9dShlLHt0cGw6cixleHByczpbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKX0pO3JldHVybiB0LmtleT10Ll9fdix0fXZhciBjPXt9LHA9L1tBLVpdL2c7ZnVuY3Rpb24gbChlLHQpe2lmKHIuYXR0cil7dmFyIGY9ci5hdHRyKGUsdCk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGYpcmV0dXJuIGZ9aWYodD1mdW5jdGlvbihyKXtyZXR1cm4gbnVsbCE9PXImJlwib2JqZWN0XCI9PXR5cGVvZiByJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiByLnZhbHVlT2Y/ci52YWx1ZU9mKCk6cn0odCksXCJyZWZcIj09PWV8fFwia2V5XCI9PT1lKXJldHVyblwiXCI7aWYoXCJzdHlsZVwiPT09ZSYmXCJvYmplY3RcIj09dHlwZW9mIHQpe3ZhciBpPVwiXCI7Zm9yKHZhciB1IGluIHQpe3ZhciBhPXRbdV07aWYobnVsbCE9YSYmXCJcIiE9PWEpe3ZhciBsPVwiLVwiPT11WzBdP3U6Y1t1XXx8KGNbdV09dS5yZXBsYWNlKHAsXCItJCZcIikudG9Mb3dlckNhc2UoKSkscz1cIjtcIjtcIm51bWJlclwiIT10eXBlb2YgYXx8bC5zdGFydHNXaXRoKFwiLS1cIil8fG8udGVzdChsKXx8KHM9XCJweDtcIiksaT1pK2wrXCI6XCIrYStzfX1yZXR1cm4gZSsnPVwiJytuKGkpKydcIid9cmV0dXJuIG51bGw9PXR8fCExPT09dHx8XCJmdW5jdGlvblwiPT10eXBlb2YgdHx8XCJvYmplY3RcIj09dHlwZW9mIHQ/XCJcIjohMD09PXQ/ZTplKyc9XCInK24oXCJcIit0KSsnXCInfWZ1bmN0aW9uIHMocil7aWYobnVsbD09cnx8XCJib29sZWFuXCI9PXR5cGVvZiByfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiByKXJldHVybiBudWxsO2lmKFwib2JqZWN0XCI9PXR5cGVvZiByKXtpZih2b2lkIDA9PT1yLmNvbnN0cnVjdG9yKXJldHVybiByO2lmKGkocikpe2Zvcih2YXIgZT0wO2U8ci5sZW5ndGg7ZSsrKXJbZV09cyhyW2VdKTtyZXR1cm4gcn19cmV0dXJuIG4oXCJcIityKX1leHBvcnR7dSBhcyBqc3gsbCBhcyBqc3hBdHRyLHUgYXMganN4REVWLHMgYXMganN4RXNjYXBlLGEgYXMganN4VGVtcGxhdGUsdSBhcyBqc3hzfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWpzeFJ1bnRpbWUubW9kdWxlLmpzLm1hcFxuIiwKICAgICIvKiogQGpzeEltcG9ydFNvdXJjZSBwcmVhY3QgKi9cbmltcG9ydCAqIGFzIHByZWFjdCBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IEZ1c2UgZnJvbSAnZnVzZS5qcyc7XG5pbXBvcnQgdHlwZSB7IFNlYXJjaERvY3VtZW50LCBTZWFyY2hJbmRleERhdGEgfSBmcm9tICcuLi8uLi9zb3VyY2UtZGF0YS9kYXRhLXR5cGVzJztcbmltcG9ydCB7IGNyZWF0ZVNlYXJjaEluZGV4LCBzZWFyY2hEb2N1bWVudHMgfSBmcm9tICcuL3NlYXJjaC1jb3JlJztcblxuY29uc3QgTUFYX1JFU1VMVFMgPSAxMDtcblxuY29uc3QgVFlQRV9MQUJFTFM6IFJlY29yZDxTZWFyY2hEb2N1bWVudFsndHlwZSddLCBzdHJpbmc+ID0ge1xuICAgIGNvbW1hbmRlcjogJ0NvbW1hbmRlcicsXG4gICAgbXV0YXRvcjogJ011dGF0b3InLFxuICAgIG1pc3Npb246ICdNaXNzaW9uJyxcbiAgICB3ZWVrbHltdXRhdGlvbjogJ1dlZWtseScsXG4gICAgdXBncmFkZTogJ1VwZ3JhZGUnLFxuICAgIHRhbGVudDogJ1RhbGVudCcsXG4gICAgcHJlc3RpZ2U6ICdQcmVzdGlnZScsXG4gICAgcGxheWVydW5pdDogJ1VuaXQnLFxuICAgIGFtb251bml0OiAnQW1vbiBVbml0Jyxcbn07XG5cbmZ1bmN0aW9uIHJlc29sdmVTZWFyY2hQYXRoKGRvY3VtZW50OiBTZWFyY2hEb2N1bWVudCk6IHN0cmluZyB7XG4gICAgY29uc3QgcGF0aCA9IGRvY3VtZW50LnBhdGg7XG4gICAgaWYgKC9eKGNvbW1hbmRlcnN8bXV0YXRvcnN8bWlzc2lvbnN8dW5pdHMpXFwvLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiBgLyR7cGF0aH1gO1xuICAgIH1cbiAgICBpZiAocGF0aC5zdGFydHNXaXRoKCd3ZWVrbHltdXRhdGlvbnMvJykpIHtcbiAgICAgICAgcmV0dXJuICcvcmVzb3VyY2VzL3dlZWtseW11dGF0aW9ucyc7XG4gICAgfVxuICAgIGlmIChwYXRoLnN0YXJ0c1dpdGgoJ3VwZ3JhZGVzLycpIHx8IHBhdGguc3RhcnRzV2l0aCgndGFsZW50cy8nKSkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuY29tbWFuZGVyID8gYC91bml0cy8jJHt0b2tlbihkb2N1bWVudC5jb21tYW5kZXIpfS8ke3VuaXRUb2tlbkZyb21TdWJ0aXRsZShkb2N1bWVudC5zdWJ0aXRsZSl9YCA6ICcvdW5pdHMnO1xuICAgIH1cbiAgICBpZiAocGF0aC5zdGFydHNXaXRoKCdwcmVzdGlnZXMvJykpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNvbW1hbmRlciA/IGAvY29tbWFuZGVycy8ke3Rva2VuKGRvY3VtZW50LmNvbW1hbmRlcil9I3ByZXN0aWdlc2AgOiAnLyc7XG4gICAgfVxuICAgIHJldHVybiBgLyR7cGF0aH1gO1xufVxuXG5mdW5jdGlvbiB0b2tlbih0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICh0ZXh0ID09PSAnRG9tLiBUcm9vcGVyJykgcmV0dXJuICdkb21pbmlvbnRyb29wZXInO1xuICAgIGlmICh0ZXh0ID09PSAnRG9tLiBBc3NhdWx0IFRyb29wZXInKSByZXR1cm4gJ2RvbWluaW9uYXNzYXVsdHRyb29wZXInO1xuICAgIGlmICh0ZXh0ID09PSAnRG9tLiBGbGFtZSBUcm9vcGVyJykgcmV0dXJuICdkb21pbmlvbmZsYW1ldHJvb3Blcic7XG4gICAgaWYgKHRleHQgPT09ICdEb20uIFJvY2tldCBUcm9vcGVyJykgcmV0dXJuICdkb21pbmlvbnJvY2tldHRyb29wZXInO1xuICAgIGlmICh0ZXh0ID09PSAnVHljaHVzIEZpbmRsYXknKSByZXR1cm4gJ3R5Y2h1cyc7XG4gICAgaWYgKHRleHQgPT09ICdKYW1lcyBTaXJpdXMgU3lrZXMnKSByZXR1cm4gJ3Npcml1cyc7XG4gICAgaWYgKHRleHQgPT09ICdNaWxlcyBCbGF6ZSBMZXdpcycpIHJldHVybiAnYmxhemUnO1xuICAgIGlmICh0ZXh0ID09PSAnUm9iIENhbm5vbmJhbGwgQm9zd2VsbCcpIHJldHVybiAnY2Fubm9uYmFsbCc7XG4gICAgaWYgKHRleHQgPT09ICdMdCBMYXluYSBOaWthcmEnKSByZXR1cm4gJ25pa2FyYSc7XG4gICAgaWYgKHRleHQgPT09ICdLZXYgUmF0dGxlc25ha2UgV2VzdCcpIHJldHVybiAncmF0dGxlc25ha2UnO1xuXG4gICAgcmV0dXJuIHRleHQudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bXmEtejAtOV0rL2csICcnKTtcbn1cblxuZnVuY3Rpb24gdW5pdFRva2VuRnJvbVN1YnRpdGxlKHN1YnRpdGxlID0gJycpOiBzdHJpbmcge1xuICAgIGNvbnN0IHdvcmRzID0gc3VidGl0bGUuc3BsaXQoJyAnKTtcbiAgICBpZiAod29yZHMubGVuZ3RoIDwgMikgcmV0dXJuICcnO1xuICAgIHJldHVybiB0b2tlbih3b3Jkcy5zbGljZSgxLCAtMSkuam9pbignICcpKTtcbn1cblxuY2xhc3MgU2VhcmNoUmVzdWx0cyBleHRlbmRzIHByZWFjdC5Db21wb25lbnQ8e1xuICAgIGlucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGNsb3NlOiAoKSA9PiB2b2lkO1xufT4ge1xuICAgIG92ZXJyaWRlIHN0YXRlOiB7XG4gICAgICAgIHN0YXR1czogJ2xvYWRpbmcnIHwgJ3JlYWR5JyB8ICdlcnJvcic7XG4gICAgICAgIHF1ZXJ5OiBzdHJpbmc7XG4gICAgICAgIHJlc3VsdHNRdWVyeTogc3RyaW5nO1xuICAgICAgICByZXN1bHRzOiBTZWFyY2hEb2N1bWVudFtdO1xuICAgICAgICBzZWFyY2hQZW5kaW5nOiB1bmRlZmluZWQgfCBudW1iZXI7XG4gICAgICAgIGFjdGl2ZUluZGV4OiBudW1iZXI7XG4gICAgICAgIGVycm9yPzogc3RyaW5nO1xuICAgICAgICBmdXNlOiBGdXNlPFNlYXJjaERvY3VtZW50PiB8IG51bGw7XG4gICAgfSA9IHtcbiAgICAgICAgc3RhdHVzOiAnbG9hZGluZycsXG4gICAgICAgIHF1ZXJ5OiB0aGlzLnByb3BzLmlucHV0LnZhbHVlLFxuICAgICAgICByZXN1bHRzUXVlcnk6ICcnLFxuICAgICAgICByZXN1bHRzOiBbXSxcbiAgICAgICAgc2VhcmNoUGVuZGluZzogdW5kZWZpbmVkLFxuICAgICAgICBhY3RpdmVJbmRleDogMCxcbiAgICAgICAgZnVzZTogbnVsbCxcbiAgICB9O1xuXG4gICAgb3ZlcnJpZGUgY29tcG9uZW50RGlkTW91bnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucHJvcHMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLm9uSW5wdXQpO1xuICAgICAgICB0aGlzLnByb3BzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uS2V5RG93bik7XG4gICAgICAgIHZvaWQgdGhpcy5sb2FkU2VhcmNoSW5kZXgoKTtcbiAgICB9XG5cbiAgICBvdmVycmlkZSBjb21wb25lbnRXaWxsVW5tb3VudCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wcm9wcy5pbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMub25JbnB1dCk7XG4gICAgICAgIHRoaXMucHJvcHMuaW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25LZXlEb3duKTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuc3RhdGUuc2VhcmNoUGVuZGluZyk7XG4gICAgfVxuXG4gICAgYXN5bmMgbG9hZFNlYXJjaEluZGV4KCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2RhdGEvc2VhcmNoLWluZGV4Lmpzb24nKTtcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihgSFRUUCAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCkgYXMgU2VhcmNoSW5kZXhEYXRhO1xuICAgICAgICAgICAgY29uc3QgZnVzZSA9IGNyZWF0ZVNlYXJjaEluZGV4KGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXR1czogJ3JlYWR5JywgZnVzZSB9KTtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVTZWFyY2godGhpcy5wcm9wcy5pbnB1dC52YWx1ZSwgZnVzZSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogU3RyaW5nKGVycm9yKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25JbnB1dCA9ICgpOiB2b2lkID0+IHtcbiAgICAgICAgdGhpcy5zY2hlZHVsZVNlYXJjaCh0aGlzLnByb3BzLmlucHV0LnZhbHVlKTtcbiAgICB9O1xuXG4gICAgb25LZXlEb3duID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCA9PiB7XG4gICAgICAgIGlmIChldmVudC5hbHRLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5IHx8IGV2ZW50LnNoaWZ0S2V5KSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IHRoaXMuc3RhdGUucmVzdWx0cztcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWN0aXZlSW5kZXg6IHJlc3VsdHMubGVuZ3RoID8gKHRoaXMuc3RhdGUuYWN0aXZlSW5kZXggKyAxKSAlIHJlc3VsdHMubGVuZ3RoIDogMCB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT09ICdBcnJvd1VwJykge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVJbmRleDogcmVzdWx0cy5sZW5ndGggPyAodGhpcy5zdGF0ZS5hY3RpdmVJbmRleCArIHJlc3VsdHMubGVuZ3RoIC0gMSkgJSByZXN1bHRzLmxlbmd0aCA6IDAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInICYmIHJlc3VsdHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXNvbHZlU2VhcmNoUGF0aChyZXN1bHRzW3RoaXMuc3RhdGUuYWN0aXZlSW5kZXhdISk7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgc2NoZWR1bGVTZWFyY2gocXVlcnk6IHN0cmluZywgZnVzZSA9IHRoaXMuc3RhdGUuZnVzZSk6IHZvaWQge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5zdGF0ZS5zZWFyY2hQZW5kaW5nKTtcblxuICAgICAgICBpZiAoIXF1ZXJ5LnRyaW0oKSB8fCAhZnVzZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgcmVzdWx0c1F1ZXJ5OiAnJyxcbiAgICAgICAgICAgICAgICByZXN1bHRzOiBbXSxcbiAgICAgICAgICAgICAgICBzZWFyY2hQZW5kaW5nOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgYWN0aXZlSW5kZXg6IDAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChxdWVyeSA9PT0gdGhpcy5zdGF0ZS5yZXN1bHRzUXVlcnkpIHJldHVybjtcblxuICAgICAgICBjb25zdCBzZWFyY2hQZW5kaW5nID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICByZXN1bHRzUXVlcnk6IHF1ZXJ5LFxuICAgICAgICAgICAgICAgIHJlc3VsdHM6IHNlYXJjaERvY3VtZW50cyhmdXNlLCBxdWVyeSwgTUFYX1JFU1VMVFMpLFxuICAgICAgICAgICAgICAgIHNlYXJjaFBlbmRpbmc6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBhY3RpdmVJbmRleDogMCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCAwKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHF1ZXJ5LCBhY3RpdmVJbmRleDogMCwgc2VhcmNoUGVuZGluZyB9KTtcbiAgICB9XG5cbiAgICBvdmVycmlkZSByZW5kZXIoKTogcHJlYWN0LkNvbXBvbmVudENoaWxkcmVuIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc3RhdHVzID09PSAnbG9hZGluZycpIHtcbiAgICAgICAgICAgIHJldHVybiA8cCBjbGFzcz1cInNpdGUtc2VhcmNoLW1lc3NhZ2VcIj5Mb2FkaW5nIHNlYXJjaC4uLjwvcD47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc3RhdHVzID09PSAnZXJyb3InKSB7XG4gICAgICAgICAgICByZXR1cm4gPHAgY2xhc3M9XCJzaXRlLXNlYXJjaC1tZXNzYWdlXCI+U2VhcmNoIGZhaWxlZCB0byBsb2FkOiB7dGhpcy5zdGF0ZS5lcnJvcn08L3A+O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcXVlcnkgPSB0aGlzLnN0YXRlLnF1ZXJ5O1xuICAgICAgICBpZiAoIXF1ZXJ5LnRyaW0oKSkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2l0ZS1zZWFyY2gtbWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgICAgICA8cD5UeXBlIHRvIHNlYXJjaCBjb21tYW5kZXJzLCB1bml0cywgbWlzc2lvbnMsIG11dGF0b3JzLCBhbmQgd2Vla2x5IG11dGF0aW9ucy48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwic2l0ZS1zZWFyY2gta2V5LWd1aWRlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PGtiZD7ihpE8L2tiZD48a2JkPuKGkzwva2JkPiBTZWxlY3Q8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48a2JkPkVudGVyPC9rYmQ+IE9wZW48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48a2JkPkVzYzwva2JkPiBDbG9zZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSB0aGlzLnN0YXRlLnJlc3VsdHM7XG4gICAgICAgIGlmICghcmVzdWx0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiA8cCBjbGFzcz1cInNpdGUtc2VhcmNoLW1lc3NhZ2VcIj5ObyByZXN1bHRzIGZvdW5kLjwvcD47XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHVsIGNsYXNzPVwic2l0ZS1zZWFyY2gtbGlzdFwiIHJvbGU9XCJsaXN0Ym94XCIgYXJpYS1sYWJlbD1cIlNlYXJjaCByZXN1bHRzXCI+XG4gICAgICAgICAgICAgICAge3Jlc3VsdHMubWFwKChkb2N1bWVudCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic2l0ZS1zZWFyY2gtcmVzdWx0XCIgcm9sZT1cIm9wdGlvblwiIGFyaWEtc2VsZWN0ZWQ9e2luZGV4ID09PSB0aGlzLnN0YXRlLmFjdGl2ZUluZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17cmVzb2x2ZVNlYXJjaFBhdGgoZG9jdW1lbnQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtc2VsZWN0ZWQ9e2luZGV4ID09PSB0aGlzLnN0YXRlLmFjdGl2ZUluZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZUluZGV4OiBpbmRleCB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLmNsb3NlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2l0ZS1zZWFyY2gtdGl0bGVcIj57ZG9jdW1lbnQudGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2l0ZS1zZWFyY2gtdHlwZVwiPntUWVBFX0xBQkVMU1tkb2N1bWVudC50eXBlXX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2RvY3VtZW50LnN1YnRpdGxlICYmIDxzcGFuIGNsYXNzPVwic2l0ZS1zZWFyY2gtc3VidGl0bGVcIj57ZG9jdW1lbnQuc3VidGl0bGV9PC9zcGFuPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBtb3VudFNlYXJjaFJlc3VsdHMob3B0aW9uczogeyBpbnB1dDogSFRNTElucHV0RWxlbWVudCwgY29udGFpbmVyOiBIVE1MRWxlbWVudCwgY2xvc2U6ICgpID0+IHZvaWQgfSk6IHZvaWQge1xuICAgIHByZWFjdC5yZW5kZXIoPFNlYXJjaFJlc3VsdHMgaW5wdXQ9e29wdGlvbnMuaW5wdXR9IGNsb3NlPXtvcHRpb25zLmNsb3NlfSAvPiwgb3B0aW9ucy5jb250YWluZXIpO1xufVxuXG5leHBvcnQgdHlwZSBNb3VudFNlYXJjaFJlc3VsdHNGdW5jdGlvbiA9IHR5cGVvZiBtb3VudFNlYXJjaFJlc3VsdHM7XG5cbih3aW5kb3cgYXMgYW55KS5tb3VudFNlYXJjaFJlc3VsdHMgPSBtb3VudFNlYXJjaFJlc3VsdHM7XG4iCiAgXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBQUEsSUFBSTtBQUFBLEVBQUosSUFBTTtBQUFBLEVBQU4sSUFBUTtBQUFBLEVBQVIsSUFBVTtBQUFBLEVBQVYsSUFBWTtBQUFBLEVBQVosSUFBYztBQUFBLEVBQWQsSUFBZ0I7QUFBQSxFQUFoQixJQUFrQjtBQUFBLEVBQWxCLElBQW9CO0FBQUEsRUFBcEIsSUFBc0I7QUFBQSxFQUF0QixJQUF3QjtBQUFBLEVBQXhCLElBQTBCO0FBQUEsRUFBMUIsSUFBNEI7QUFBQSxFQUE1QixJQUE4QjtBQUFBLEVBQTlCLElBQWdDO0FBQUEsRUFBaEMsSUFBa0M7QUFBQSxFQUFsQyxJQUFvQyxJQUFFLENBQUM7QUFBQSxFQUF2QyxJQUF5QyxJQUFFLENBQUM7QUFBQSxFQUE1QyxJQUE4QyxJQUFFO0FBQUEsRUFBaEQsSUFBb0gsSUFBRSxNQUFNO0FBQUEsRUFBUSxTQUFTLENBQUMsQ0FBQyxJQUFFLElBQUU7QUFBQSxJQUFDLFNBQVEsTUFBSztBQUFBLE1BQUUsR0FBRSxNQUFHLEdBQUU7QUFBQSxJQUFHLE9BQU87QUFBQTtBQUFBLEVBQUUsU0FBUyxDQUFDLENBQUMsSUFBRTtBQUFBLElBQUMs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RSxJQUFJLEtBQUssUUFBUSxDQUFDLElBQUU7QUFBQSxRQUFDLElBQVMsTUFBTixRQUFlLEdBQUUsT0FBUjtBQUFBLFVBQVksT0FBTyxHQUFFLE1BQUksR0FBRSxJQUFJLE9BQUssR0FBRTtBQUFBLE9BQUksR0FBRSxFQUFFLEVBQUM7QUFBQTtBQUFBLEVBQUUsU0FBUyxDQUFDLENBQUMsSUFBRTtBQUFBLEtBQUUsQ0FBQyxHQUFFLFFBQU0sR0FBRSxNQUFJLFNBQUssRUFBRSxLQUFLLEVBQUMsS0FBRyxDQUFDLEVBQUUsU0FBTyxLQUFHLEVBQUUsd0JBQXNCLElBQUUsRUFBRSxzQkFBb0IsR0FBRyxDQUFDO0FBQUE7QUFBQSxFQUFFLFNBQVMsQ0FBQyxHQUFFO0FBQUEsSUFBQyxJQUFHO0FBQUEsTUFBQyxTQUFRLElBQUUsS0FBRSxFQUFFLEVBQUU7QUFBQSxRQUFRLEVBQUUsU0FBTyxNQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUUsS0FBRSxFQUFFLE1BQU0sR0FBRSxLQUFFLEVBQUUsUUFBTyxFQUFFLEVBQUM7QUFBQSxjQUFFO0FBQUEsTUFBUSxFQUFFLFNBQU8sRUFBRSxNQUFJO0FBQUE7QUFBQTtBQUFBLEVBQUcsU0FBUyxDQUFDLENBQUMsSUFBRSxJQUFFLElBQUUsSUFBRSxJQUFFLElBQUUsSUFBRSxJQUFFLElBQUUsSUFBRSxJQUFFO0FBQUEsSUFBQyxJQUFJLElBQUUsSUFBRSxJQUFFLElBQUUsSUFBRSxJQUFFLElBQUUsS0FBRSxNQUFHLEdBQUUsT0FBSyxHQUFFLEtBQUUsR0FBRTtBQUFBLElBQU8sS0FBSSxLQUFFLEVBQUUsSUFBRSxJQUFFLElBQUUsSUFBRSxFQUFDLEdBQUUsS0FBRSxFQUFFLEtBQUUsSUFBRTtBQUFBLE9BQVcsS0FBRSxHQUFFLElBQUksUUFBZixTQUFxQixLQUFNLEdBQUUsT0FBTixNQUFXLEdBQUUsR0FBRSxRQUFNLEdBQUUsR0FBRSxNQUFJLElBQUUsS0FBRSxFQUFFLElBQUUsSUFBRSxJQUFFLElBQUUsSUFBRSxJQUFFLElBQUUsSUFBRSxJQUFFLEVBQUMsR0FB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QUUsS0FBSSxHQUFFLFFBQU0sRUFBRSxFQUFDO0FBQUEsVUFBRSxFQUFFLElBQUksSUFBRSxJQUFFLEVBQUM7QUFBQTtBQUFBLE1BQU87QUFBQSxRQUFNLE1BQU4sUUFBUyxHQUFFLE9BQUssR0FBRSxPQUFLLEdBQUUsTUFBSSxHQUFFLEtBQUksR0FBRSxNQUFJLEdBQUUsT0FBSyxLQUFFLEdBQUUsTUFBSSxFQUFFLEdBQUUsS0FBSSxJQUFFLElBQUUsSUFBRSxJQUFFLElBQUUsSUFBRSxJQUFFLEVBQUM7QUFBQSxJQUFFLFFBQU8sS0FBRSxFQUFFLFdBQVMsR0FBRSxFQUFDLEdBQUUsTUFBSSxHQUFFLE1BQVMsWUFBRTtBQUFBO0FBQUEsRUFBRSxTQUFTLENBQUMsQ0FBQyxJQUFFO0FBQUEsSUFBQyxPQUFJLEdBQUUsUUFBTSxHQUFFLElBQUksTUFBSSxPQUFJLEdBQUUsT0FBSyxHQUFFLElBQUksS0FBSyxDQUFDO0FBQUE7QUFBQSxFQUFHLFNBQVMsQ0FBQyxDQUFDLElBQUUsSUFBRSxJQUFFO0FBQUEsSUFBQyxTQUFRLEtBQUUsRUFBRSxLQUFFLEdBQUUsUUFBTztBQUFBLE1BQUksRUFBRSxHQUFFLEtBQUcsR0FBRSxFQUFFLEtBQUcsR0FBRSxFQUFFLEdBQUU7QUFBQSxJQUFFLEVBQUUsT0FBSyxFQUFFLElBQUksSUFBRSxFQUFDLEdBQUUsR0FBRSxLQUFLLFFBQVEsQ0FBQyxJQUFFO0FBQUEsTUFBQyxJQUFHO0FBQUEsUUFBQyxLQUFFLEdBQUUsS0FBSSxHQUFFLE1BQUksQ0FBQyxHQUFFLEdBQUUsS0FBSyxRQUFRLENBQUMsSUFBRTtBQUFBLFVBQUMsR0FBRSxLQUFLLEVBQUM7QUFBQSxTQUFFO0FBQUEsUUFBRSxPQUFNLElBQUU7QUFBQSxRQUFDLEVBQUUsSUFBSSxJQUFFLEdBQUUsR0FBRztBQUFBO0FBQUEsS0FBRztBQUFBO0FBQUEsRUFBRSxTQUFTLENBQUMsQ0FBQyxJQUFFO0FBQUEsSUFBQyxPQUFnQixPQUFPLE1BQWpCLFlBQTBCLE1BQU4sUUFBUyxHQUFFLE1BQUksSUFBRSxLQUFF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LFdBTk4sZ0NBT0U7QUFBQSxNQUVWO0FBQUEsTUFFQSxNQUFNLFVBQVUsS0FBSyxNQUFNO0FBQUEsTUFDM0IsSUFBSSxDQUFDLFFBQVEsUUFBUTtBQUFBLFFBQ2pCLHVCQUFPLEdBQWtELEtBQWxEO0FBQUEsVUFBRyxPQUFNO0FBQUEsVUFBVDtBQUFBLDRDQUFrRDtBQUFBLE1BQzdEO0FBQUEsTUFFQSx1QkFDSSxHQWVFLE1BZkY7QUFBQSxRQUFJLE9BQU07QUFBQSxRQUFtQixNQUFLO0FBQUEsUUFBVSxjQUFXO0FBQUEsUUFBdkQsVUFDSyxRQUFRLElBQUksQ0FBQyxXQUFVLDBCQUNwQixHQVdFLE1BWEY7QUFBQSxVQUFJLE9BQU07QUFBQSxVQUFxQixNQUFLO0FBQUEsVUFBUyxpQkFBZSxVQUFVLEtBQUssTUFBTTtBQUFBLFVBQWpGLDBCQUNJLEdBU0UsS0FURjtBQUFBLFlBQ0ksTUFBTSxrQkFBa0IsU0FBUTtBQUFBLFlBQ2hDLGlCQUFlLFVBQVUsS0FBSyxNQUFNO0FBQUEsWUFDcEMsY0FBYyxNQUFNLEtBQUssU0FBUyxFQUFFLGFBQWEsTUFBTSxDQUFDO0FBQUEsWUFDeEQsU0FBUyxLQUFLLE1BQU07QUFBQSxZQUp4QixVQVNFO0FBQUEsOEJBSEUsR0FBa0QsUUFBbEQ7QUFBQSxnQkFBTSxPQUFNO0FBQUEsZ0JBQVosVUFBaUMsVUFBUztBQUFBLGlCQUExQyxpQ0FBa0Q7QUFBQSw4QkFDbEQsR0FBNkQsUUFBN0Q7QUFBQSxnQkFBTSxPQUFNO0FBQUEsZ0JBQVosVUFBZ0MsWUFBWSxVQUFTO0FBQUEsaUJBQXJELGlDQUE2RDtBQUFBLGNBQzVELFVBQVMsNEJBQVksR0FBd0QsUUFBeEQ7QUFBQSxnQkFBTSxPQUFNO0FBQUEsZ0JBQVosVUFBb0MsVUFBUztBQUFBLGlCQUE3QyxpQ0FBd0Q7QUFBQTtBQUFBLGFBUmxGLGdDQVNFO0FBQUEsV0FWTixpQ0FXRSxDQUNMO0FBQUEsU0FkTCxpQ0FlRTtBQUFBO0FBQUEsRUFHZDtBQUFBLEVBRUEsU0FBUyxrQkFBa0IsQ0FBQyxTQUF1RjtBQUFBLElBQ3hHLGtCQUFPLEdBQUMsZUFBRDtBQUFBLE1BQWUsT0FBTyxRQUFRO0FBQUEsTUFBTyxPQUFPLFFBQVE7QUFBQSxPQUFwRCxpQ0FBMkQsR0FBSSxRQUFRLFNBQVM7QUFBQTtBQUFBLEVBS2pHLE9BQWUscUJBQXFCOyIsCiAgImRlYnVnSWQiOiAiRTI0NTVBMjRBQUZGOUE4MjY0NzU2RTIxNjQ3NTZFMjEiLAogICJuYW1lcyI6IFtdCn0=
