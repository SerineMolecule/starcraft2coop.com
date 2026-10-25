(() => {
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
  function X(n) {
    function l(n) {
      var u, t;
      return this.getChildContext || (u = new Set, (t = {})[l.__c] = this, this.getChildContext = function() {
        return t;
      }, this.componentWillUnmount = function() {
        u = null;
      }, this.shouldComponentUpdate = function(n) {
        this.props.value != n.value && u.forEach(function(n) {
          n.__e = true, A(n);
        });
      }, this.sub = function(n) {
        u.add(n);
        var l = n.componentWillUnmount;
        n.componentWillUnmount = function() {
          u && u.delete(n), l && l.call(n);
        };
      }), n.children;
    }
    return l.__c = "__cC" + y++, l.__ = n, l.Provider = l.__l = (l.Consumer = function(n, l) {
      return n.children(l);
    }).contextType = l, l;
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

  // node_modules/preact/hooks/dist/hooks.module.js
  var t2;
  var r2;
  var u2;
  var i2;
  var o2 = 0;
  var f2 = [];
  var c2 = l;
  var e2 = c2.__b;
  var a2 = c2.__r;
  var v2 = c2.diffed;
  var l2 = c2.__c;
  var m2 = c2.unmount;
  var s2 = c2.__;
  function p2(n, t) {
    c2.__h && c2.__h(r2, n, o2 || t), o2 = 0;
    var u = r2.__H || (r2.__H = { __: [], __h: [] });
    return n >= u.__.length && u.__.push({}), u.__[n];
  }
  function d2(n) {
    return o2 = 1, h2(D2, n);
  }
  function h2(n, u, i) {
    var o = p2(t2++, 2);
    if (o.t = n, !o.__c && (o.__ = [i ? i(u) : D2(undefined, u), function(n) {
      var t = o.__N ? o.__N[0] : o.__[0], r = o.t(t, n);
      t !== r && (o.__N = [r, o.__[1]], o.__c.setState({}));
    }], o.__c = r2, !r2.__f)) {
      var f = function(n, t, r) {
        if (!o.__c.__H)
          return true;
        var u = o.__c.__H.__.filter(function(n) {
          return n.__c;
        });
        if (u.every(function(n) {
          return !n.__N;
        }))
          return !c || c.call(this, n, t, r);
        var i = o.__c.props !== n;
        return u.some(function(n) {
          if (n.__N) {
            var t = n.__[0];
            n.__ = n.__N, n.__N = undefined, t !== n.__[0] && (i = true);
          }
        }), c && c.call(this, n, t, r) || i;
      };
      r2.__f = true;
      var c = r2.shouldComponentUpdate, e = r2.componentWillUpdate;
      r2.componentWillUpdate = function(n, t, r) {
        if (this.__e) {
          var u = c;
          c = undefined, f(n, t, r), c = u;
        }
        e && e.call(this, n, t, r);
      }, r2.shouldComponentUpdate = f;
    }
    return o.__N || o.__;
  }
  function y2(n, u) {
    var i = p2(t2++, 3);
    !c2.__s && C2(i.__H, u) && (i.__ = n, i.u = u, r2.__H.__h.push(i));
  }
  function _2(n, u) {
    var i = p2(t2++, 4);
    !c2.__s && C2(i.__H, u) && (i.__ = n, i.u = u, r2.__h.push(i));
  }
  function A2(n) {
    return o2 = 5, T2(function() {
      return { current: n };
    }, []);
  }
  function T2(n, r) {
    var u = p2(t2++, 7);
    return C2(u.__H, r) && (u.__ = n(), u.__H = r, u.__h = n), u.__;
  }
  function q2(n, t) {
    return o2 = 8, T2(function() {
      return n;
    }, t);
  }
  function x2(n) {
    var u = r2.context[n.__c], i = p2(t2++, 9);
    return i.c = n, u ? (i.__ == null && (i.__ = true, u.sub(r2)), u.props.value) : n.__;
  }
  function j2() {
    for (var n;n = f2.shift(); ) {
      var t = n.__H;
      if (n.__P && t)
        try {
          t.__h.some(z2), t.__h.some(B2), t.__h = [];
        } catch (r) {
          t.__h = [], c2.__e(r, n.__v);
        }
    }
  }
  c2.__b = function(n) {
    r2 = null, e2 && e2(n);
  }, c2.__ = function(n, t) {
    n && t.__k && t.__k.__m && (n.__m = t.__k.__m), s2 && s2(n, t);
  }, c2.__r = function(n) {
    a2 && a2(n), t2 = 0;
    var i = (r2 = n.__c).__H;
    i && (u2 === r2 ? (i.__h = [], r2.__h = [], i.__.some(function(n) {
      n.__N && (n.__ = n.__N), n.u = n.__N = undefined;
    })) : (i.__h.some(z2), i.__h.some(B2), i.__h = [], t2 = 0)), u2 = r2;
  }, c2.diffed = function(n) {
    v2 && v2(n);
    var t = n.__c;
    t && t.__H && (t.__H.__h.length && (f2.push(t) !== 1 && i2 === c2.requestAnimationFrame || ((i2 = c2.requestAnimationFrame) || w2)(j2)), t.__H.__.some(function(n) {
      n.u && (n.__H = n.u), n.u = undefined;
    })), u2 = r2 = null;
  }, c2.__c = function(n, t) {
    t.some(function(n) {
      try {
        n.__h.some(z2), n.__h = n.__h.filter(function(n) {
          return !n.__ || B2(n);
        });
      } catch (r) {
        t.some(function(n) {
          n.__h && (n.__h = []);
        }), t = [], c2.__e(r, n.__v);
      }
    }), l2 && l2(n, t);
  }, c2.unmount = function(n) {
    m2 && m2(n);
    var t, r = n.__c;
    r && r.__H && (r.__H.__.some(function(n) {
      try {
        z2(n);
      } catch (n) {
        t = n;
      }
    }), r.__H = undefined, t && c2.__e(t, r.__v));
  };
  var k2 = typeof requestAnimationFrame == "function";
  function w2(n) {
    var t, r = function() {
      clearTimeout(u), k2 && cancelAnimationFrame(t), setTimeout(n);
    }, u = setTimeout(r, 35);
    k2 && (t = requestAnimationFrame(r));
  }
  function z2(n) {
    var t = r2, u = n.__c;
    typeof u == "function" && (n.__c = undefined, u()), r2 = t;
  }
  function B2(n) {
    var t = r2;
    n.__c = n.__(), r2 = t;
  }
  function C2(n, t) {
    return !n || n.length !== t.length || t.some(function(t, r) {
      return t !== n[r];
    });
  }
  function D2(n, t) {
    return typeof t == "function" ? t(n) : t;
  }

  // node_modules/@preact/signals-core/dist/signals-core.module.js
  var i3 = Symbol.for("preact-signals");
  function t3() {
    if (!(v3 > 1)) {
      var i, t = false;
      (function() {
        var i = c3;
        c3 = undefined;
        while (i !== undefined) {
          var t = i.S;
          if (t.v === i.v) {
            for (var n = t.t;n !== undefined; n = n.x)
              if (n.i === i.i)
                n.i = t.i;
          }
          i = i.o;
        }
      })();
      while (h3 !== undefined) {
        var n = h3;
        h3 = undefined;
        s3++;
        while (n !== undefined) {
          var r = n.u;
          n.u = undefined;
          n.f &= -3;
          if (!(8 & n.f) && w3(n))
            try {
              n.c();
            } catch (n) {
              if (!t) {
                i = n;
                t = true;
              }
            }
          n = r;
        }
      }
      s3 = 0;
      v3--;
      if (t)
        throw i;
    } else
      v3--;
  }
  function n2(i) {
    if (v3 > 0)
      return i();
    e3 = ++u3;
    v3++;
    try {
      return i();
    } finally {
      t3();
    }
  }
  var r3;
  var o3 = undefined;
  function f3(i) {
    var t = o3, n = r3;
    o3 = undefined;
    r3 = undefined;
    try {
      return i();
    } finally {
      o3 = t;
      r3 = n;
    }
  }
  var h3 = undefined;
  var v3 = 0;
  var s3 = 0;
  var u3 = 0;
  var e3 = 0;
  var c3 = undefined;
  var d3 = 0;
  function a3(i) {
    if (o3 !== undefined) {
      var t = i.n;
      if (t === undefined || t.t !== o3) {
        t = { i: 0, S: i, p: o3.s, n: undefined, t: o3, e: undefined, x: undefined, r: t };
        if (o3.s !== undefined)
          o3.s.n = t;
        o3.s = t;
        i.n = t;
        if (32 & o3.f)
          i.S(t);
        return t;
      } else if (t.i === -1) {
        t.i = 0;
        if (t.n !== undefined) {
          t.n.p = t.p;
          if (t.p !== undefined)
            t.p.n = t.n;
          t.p = o3.s;
          t.n = undefined;
          o3.s.n = t;
          o3.s = t;
        }
        return t;
      }
    }
  }
  function l3(i, t) {
    this.v = i;
    this.i = 0;
    this.n = undefined;
    this.t = undefined;
    this.l = 0;
    this.W = t == null ? undefined : t.watched;
    this.Z = t == null ? undefined : t.unwatched;
    this.name = t == null ? undefined : t.name;
  }
  l3.prototype.brand = i3;
  l3.prototype.h = function() {
    return true;
  };
  l3.prototype.S = function(i) {
    var t = this, n = this.t;
    if (n !== i && i.e === undefined) {
      i.x = n;
      this.t = i;
      if (n !== undefined)
        n.e = i;
      else
        f3(function() {
          var i;
          (i = t.W) == null || i.call(t);
        });
    }
  };
  l3.prototype.U = function(i) {
    var t = this;
    if (this.t !== undefined) {
      var { e: n, x: r } = i;
      if (n !== undefined) {
        n.x = r;
        i.e = undefined;
      }
      if (r !== undefined) {
        r.e = n;
        i.x = undefined;
      }
      if (i === this.t) {
        this.t = r;
        if (r === undefined)
          f3(function() {
            var i;
            (i = t.Z) == null || i.call(t);
          });
      }
    }
  };
  l3.prototype.subscribe = function(i) {
    var t = this;
    return j3(function() {
      var n = t.value;
      f3(function() {
        return i(n);
      });
    }, { name: "sub" });
  };
  l3.prototype.valueOf = function() {
    return this.value;
  };
  l3.prototype.toString = function() {
    return this.value + "";
  };
  l3.prototype.toJSON = function() {
    return this.value;
  };
  l3.prototype.peek = function() {
    var i = this;
    return f3(function() {
      return i.value;
    });
  };
  Object.defineProperty(l3.prototype, "value", { get: function() {
    var i = a3(this);
    if (i !== undefined)
      i.i = this.i;
    return this.v;
  }, set: function(i) {
    if (i !== this.v) {
      if (s3 > 100)
        throw new Error("Cycle detected");
      (function(i) {
        if (v3 !== 0 && s3 === 0) {
          if (i.l !== e3) {
            i.l = e3;
            c3 = { S: i, v: i.v, i: i.i, o: c3 };
          }
        }
      })(this);
      this.v = i;
      this.i++;
      d3++;
      v3++;
      try {
        for (var n = this.t;n !== undefined; n = n.x)
          n.t.N();
      } finally {
        t3();
      }
    }
  } });
  function y3(i, t) {
    return new l3(i, t);
  }
  function w3(i) {
    for (var t = i.s;t !== undefined; t = t.n)
      if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i)
        return true;
    return false;
  }
  function _3(i) {
    for (var t = i.s;t !== undefined; t = t.n) {
      var n = t.S.n;
      if (n !== undefined)
        t.r = n;
      t.S.n = t;
      t.i = -1;
      if (t.n === undefined) {
        i.s = t;
        break;
      }
    }
  }
  function b2(i) {
    var t = i.s, n = undefined;
    while (t !== undefined) {
      var r = t.p;
      if (t.i === -1) {
        t.S.U(t);
        if (r !== undefined)
          r.n = t.n;
        if (t.n !== undefined)
          t.n.p = r;
      } else
        n = t;
      t.S.n = t.r;
      if (t.r !== undefined)
        t.r = undefined;
      t = r;
    }
    i.s = n;
  }
  function p3(i, t) {
    l3.call(this, undefined, t);
    this.x = i;
    this.s = undefined;
    this.g = d3 - 1;
    this.f = 4;
  }
  p3.prototype = new l3;
  p3.prototype.h = function() {
    this.f &= -3;
    if (1 & this.f)
      return false;
    if ((36 & this.f) == 32)
      return true;
    this.f &= -5;
    if (this.g === d3)
      return true;
    this.g = d3;
    this.f |= 1;
    if (this.i > 0 && !w3(this)) {
      this.f &= -2;
      return true;
    }
    var i = o3;
    try {
      _3(this);
      o3 = this;
      var t = this.x();
      if (16 & this.f || this.v !== t || this.i === 0) {
        this.v = t;
        this.f &= -17;
        this.i++;
      }
    } catch (i) {
      this.v = i;
      this.f |= 16;
      this.i++;
    }
    o3 = i;
    b2(this);
    this.f &= -2;
    return true;
  };
  p3.prototype.S = function(i) {
    if (this.t === undefined) {
      this.f |= 36;
      for (var t = this.s;t !== undefined; t = t.n)
        t.S.S(t);
    }
    l3.prototype.S.call(this, i);
  };
  p3.prototype.U = function(i) {
    if (this.t !== undefined) {
      l3.prototype.U.call(this, i);
      if (this.t === undefined) {
        this.f &= -33;
        for (var t = this.s;t !== undefined; t = t.n)
          t.S.U(t);
      }
    }
  };
  p3.prototype.N = function() {
    if (!(2 & this.f)) {
      this.f |= 6;
      for (var i = this.t;i !== undefined; i = i.x)
        i.t.N();
    }
  };
  Object.defineProperty(p3.prototype, "value", { get: function() {
    if (1 & this.f)
      throw new Error("Cycle detected");
    var i = a3(this);
    this.h();
    if (i !== undefined)
      i.i = this.i;
    if (16 & this.f)
      throw this.v;
    return this.v;
  } });
  function g2(i, t) {
    return new p3(i, t);
  }
  function S2(i) {
    var n = i.m;
    i.m = undefined;
    if (typeof n == "function") {
      v3++;
      var r = o3;
      o3 = undefined;
      try {
        n();
      } catch (t) {
        i.f &= -2;
        i.f |= 8;
        m3(i);
        throw t;
      } finally {
        o3 = r;
        t3();
      }
    }
  }
  function m3(i) {
    for (var t = i.s;t !== undefined; t = t.n)
      t.S.U(t);
    i.x = undefined;
    i.s = undefined;
    S2(i);
  }
  function x3(i) {
    if (o3 !== this)
      throw new Error("Out-of-order effect");
    b2(this);
    o3 = i;
    this.f &= -2;
    if (8 & this.f)
      m3(this);
    t3();
  }
  function E2(i, t) {
    this.x = i;
    this.m = undefined;
    this.s = undefined;
    this.u = undefined;
    this.f = 32;
    this.name = t == null ? undefined : t.name;
    if (r3)
      r3.push(this);
  }
  E2.prototype.c = function() {
    var i = this.S();
    try {
      if (8 & this.f)
        return;
      if (this.x === undefined)
        return;
      var t = this.x();
      if (typeof t == "function")
        this.m = t;
    } finally {
      i();
    }
  };
  E2.prototype.S = function() {
    if (1 & this.f)
      throw new Error("Cycle detected");
    this.f |= 1;
    this.f &= -9;
    S2(this);
    _3(this);
    v3++;
    var i = o3;
    o3 = this;
    return x3.bind(this, i);
  };
  E2.prototype.N = function() {
    if (!(2 & this.f)) {
      this.f |= 2;
      this.u = h3;
      h3 = this;
    }
  };
  E2.prototype.d = function() {
    this.f |= 8;
    if (!(1 & this.f))
      m3(this);
  };
  E2.prototype.dispose = function() {
    this.d();
  };
  function j3(i, t) {
    var n = new E2(i, t);
    try {
      n.c();
    } catch (i) {
      n.d();
      throw i;
    }
    var r = n.d.bind(n);
    r[Symbol.dispose] = r;
    return r;
  }

  // node_modules/@dnd-kit/state/dist/index.mjs
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
  var __typeError = (msg) => {
    throw TypeError(msg);
  };
  var __defNormalProp = (obj, key, value) => (key in obj) ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __decoratorStart = (base) => {
    var _a2;
    return [, , , __create((_a2 = base == null ? undefined : base[__knownSymbol("metadata")]) != null ? _a2 : null)];
  };
  var __decoratorStrings = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
  var __expectFn = (fn) => fn !== undefined && typeof fn !== "function" ? __typeError("Function expected") : fn;
  var __decoratorContext = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError("Already initialized") : fns.push(__expectFn(fn || null)) });
  var __decoratorMetadata = (array, target) => __defNormalProp(target, __knownSymbol("metadata"), array[3]);
  var __runInitializers = (array, flags, self, value) => {
    for (var i = 0, fns = array[flags >> 1], n = fns && fns.length;i < n; i++)
      flags & 1 ? fns[i].call(self) : value = fns[i].call(self, value);
    return value;
  };
  var __decorateElement = (array, flags, name, decorators, target, extra) => {
    var fn, it, done, ctx, access, k = flags & 7, s = !!(flags & 8), p = !!(flags & 16);
    var j = k > 3 ? array.length + 1 : k ? s ? 1 : 2 : 0, key = __decoratorStrings[k + 5];
    var initializers = k > 3 && (array[j - 1] = []), extraInitializers = array[j] || (array[j] = []);
    var desc = k && (!p && !s && (target = target.prototype), k < 5 && (k > 3 || !p) && __getOwnPropDesc(k < 4 ? target : { get [name]() {
      return __privateGet(this, extra);
    }, set [name](x) {
      return __privateSet(this, extra, x);
    } }, name));
    k ? p && k < 4 && __name(extra, (k > 2 ? "set " : k > 1 ? "get " : "") + name) : __name(target, name);
    for (var i = decorators.length - 1;i >= 0; i--) {
      ctx = __decoratorContext(k, name, done = {}, array[3], extraInitializers);
      if (k) {
        ctx.static = s, ctx.private = p, access = ctx.access = { has: p ? (x) => __privateIn(target, x) : (x) => (name in x) };
        if (k ^ 3)
          access.get = p ? (x) => (k ^ 1 ? __privateGet : __privateMethod)(x, target, k ^ 4 ? extra : desc.get) : (x) => x[name];
        if (k > 2)
          access.set = p ? (x, y) => __privateSet(x, target, y, k ^ 4 ? extra : desc.set) : (x, y) => x[name] = y;
      }
      it = (0, decorators[i])(k ? k < 4 ? p ? extra : desc[key] : k > 4 ? undefined : { get: desc.get, set: desc.set } : target, ctx), done._ = 1;
      if (k ^ 4 || it === undefined)
        __expectFn(it) && (k > 4 ? initializers.unshift(it) : k ? p ? extra = it : desc[key] = it : target = it);
      else if (typeof it !== "object" || it === null)
        __typeError("Object expected");
      else
        __expectFn(fn = it.get) && (desc.get = fn), __expectFn(fn = it.set) && (desc.set = fn), __expectFn(fn = it.init) && initializers.unshift(fn);
    }
    return k || __decoratorMetadata(array, target), desc && __defProp(target, name, desc), p ? k ^ 4 ? extra : desc : target;
  };
  var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
  var __privateIn = (member, obj) => Object(obj) !== obj ? __typeError('Cannot use the "in" operator on this value') : member.has(obj);
  var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
  var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
  var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
  var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
  function computed(compute, comparator) {
    if (comparator) {
      let previousValue;
      return g2(() => {
        const value = compute();
        if (value && previousValue && comparator(previousValue, value)) {
          return previousValue;
        }
        previousValue = value;
        return value;
      });
    }
    return g2(compute);
  }
  function deepEqual(a, b) {
    if (Object.is(a, b)) {
      return true;
    }
    if (a === null || b === null)
      return false;
    if (typeof a === "function" && typeof b === "function") {
      return a === b;
    }
    if (a instanceof Set && b instanceof Set) {
      if (a.size !== b.size) {
        return false;
      }
      for (const value of a) {
        if (!b.has(value)) {
          return false;
        }
      }
      return true;
    }
    if (Array.isArray(a)) {
      if (!Array.isArray(b) || a.length !== b.length) {
        return false;
      }
      const hasDifferentValues = a.some((value, index) => !deepEqual(value, b[index]));
      return !hasDifferentValues;
    }
    if (typeof a === "object" && typeof b === "object") {
      const aKeys = Object.keys(a);
      const bKeys = Object.keys(b);
      if (aKeys.length !== bKeys.length)
        return false;
      const hasDifferentValues = aKeys.some((key) => !deepEqual(a[key], b[key]));
      return !hasDifferentValues;
    }
    return false;
  }
  function reactive({ get }, _) {
    return {
      init(value) {
        return y3(value);
      },
      get() {
        const current = get.call(this);
        return current.value;
      },
      set(newValue) {
        const current = get.call(this);
        if (current.peek() === newValue) {
          return;
        }
        current.value = newValue;
      }
    };
  }
  function derived(target, _) {
    const map = /* @__PURE__ */ new WeakMap;
    return function() {
      let result = map.get(this);
      if (!result) {
        result = computed(target.bind(this));
        map.set(this, result);
      }
      return result.value;
    };
  }
  function enumerable(enumerable2 = true) {
    return function(_value, context) {
      context.addInitializer(function() {
        const host = context.kind === "field" ? this : context.static ? this : Object.getPrototypeOf(this);
        const descriptor = Object.getOwnPropertyDescriptor(host, context.name);
        if (descriptor) {
          Object.defineProperty(host, context.name, __spreadProps(__spreadValues({}, descriptor), { enumerable: enumerable2 }));
        }
      });
    };
  }
  function effects(...entries) {
    const effects2 = entries.map((fn) => j3(fn));
    return () => effects2.forEach((cleanup) => cleanup());
  }
  var _previous_dec;
  var _initial_dec;
  var _current_dec;
  var _current_dec2;
  var _previous_dec2;
  var _initial_dec2;
  var _init;
  var _initial;
  var _a;
  var initial_get;
  var initial_set;
  var _ValueHistory_instances;
  var _previous;
  var _b;
  var previous_get;
  var previous_set;
  var _current;
  var _c;
  var current_get;
  var current_set;
  _initial_dec2 = [reactive], _previous_dec2 = [reactive], _current_dec2 = [reactive], _current_dec = [enumerable()], _initial_dec = [enumerable()], _previous_dec = [enumerable()];
  var ValueHistory = class {
    constructor(defaultValue, equals = Object.is) {
      this.defaultValue = defaultValue;
      this.equals = equals;
      __runInitializers(_init, 5, this);
      __privateAdd(this, _ValueHistory_instances);
      __privateAdd(this, _initial, __runInitializers(_init, 8, this)), __runInitializers(_init, 11, this);
      __privateAdd(this, _previous, __runInitializers(_init, 12, this)), __runInitializers(_init, 15, this);
      __privateAdd(this, _current, __runInitializers(_init, 16, this)), __runInitializers(_init, 19, this);
      this.reset = this.reset.bind(this);
      this.reset();
    }
    get current() {
      return __privateGet(this, _ValueHistory_instances, current_get);
    }
    get initial() {
      return __privateGet(this, _ValueHistory_instances, initial_get);
    }
    get previous() {
      return __privateGet(this, _ValueHistory_instances, previous_get);
    }
    set current(value) {
      const current = f3(() => __privateGet(this, _ValueHistory_instances, current_get));
      if (value && current && this.equals(current, value)) {
        return;
      }
      n2(() => {
        if (!__privateGet(this, _ValueHistory_instances, initial_get)) {
          __privateSet(this, _ValueHistory_instances, value, initial_set);
        }
        __privateSet(this, _ValueHistory_instances, current, previous_set);
        __privateSet(this, _ValueHistory_instances, value, current_set);
      });
    }
    reset(value = this.defaultValue) {
      n2(() => {
        __privateSet(this, _ValueHistory_instances, undefined, previous_set);
        __privateSet(this, _ValueHistory_instances, value, initial_set);
        __privateSet(this, _ValueHistory_instances, value, current_set);
      });
    }
  };
  _init = __decoratorStart(null);
  _initial = new WeakMap;
  _ValueHistory_instances = new WeakSet;
  _previous = new WeakMap;
  _current = new WeakMap;
  _a = __decorateElement(_init, 20, "#initial", _initial_dec2, _ValueHistory_instances, _initial), initial_get = _a.get, initial_set = _a.set;
  _b = __decorateElement(_init, 20, "#previous", _previous_dec2, _ValueHistory_instances, _previous), previous_get = _b.get, previous_set = _b.set;
  _c = __decorateElement(_init, 20, "#current", _current_dec2, _ValueHistory_instances, _current), current_get = _c.get, current_set = _c.set;
  __decorateElement(_init, 2, "current", _current_dec, ValueHistory);
  __decorateElement(_init, 2, "initial", _initial_dec, ValueHistory);
  __decorateElement(_init, 2, "previous", _previous_dec, ValueHistory);
  __decoratorMetadata(_init, ValueHistory);
  function snapshot(value) {
    return f3(() => {
      const output = {};
      for (const key in value) {
        output[key] = value[key];
      }
      return output;
    });
  }
  var _store;
  _store = new WeakMap;

  // node_modules/@dnd-kit/geometry/dist/index.mjs
  var __create2 = Object.create;
  var __defProp2 = Object.defineProperty;
  var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
  var __getOwnPropSymbols2 = Object.getOwnPropertySymbols;
  var __hasOwnProp2 = Object.prototype.hasOwnProperty;
  var __propIsEnum2 = Object.prototype.propertyIsEnumerable;
  var __knownSymbol2 = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
  var __typeError2 = (msg) => {
    throw TypeError(msg);
  };
  var __pow = Math.pow;
  var __defNormalProp2 = (obj, key, value) => (key in obj) ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues2 = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp2.call(b, prop))
        __defNormalProp2(a, prop, b[prop]);
    if (__getOwnPropSymbols2)
      for (var prop of __getOwnPropSymbols2(b)) {
        if (__propIsEnum2.call(b, prop))
          __defNormalProp2(a, prop, b[prop]);
      }
    return a;
  };
  var __name2 = (target, value) => __defProp2(target, "name", { value, configurable: true });
  var __decoratorStart2 = (base) => {
    var _a2;
    return [, , , __create2((_a2 = base == null ? undefined : base[__knownSymbol2("metadata")]) != null ? _a2 : null)];
  };
  var __decoratorStrings2 = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
  var __expectFn2 = (fn) => fn !== undefined && typeof fn !== "function" ? __typeError2("Function expected") : fn;
  var __decoratorContext2 = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings2[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError2("Already initialized") : fns.push(__expectFn2(fn || null)) });
  var __decoratorMetadata2 = (array, target) => __defNormalProp2(target, __knownSymbol2("metadata"), array[3]);
  var __runInitializers2 = (array, flags, self, value) => {
    for (var i = 0, fns = array[flags >> 1], n = fns && fns.length;i < n; i++)
      flags & 1 ? fns[i].call(self) : value = fns[i].call(self, value);
    return value;
  };
  var __decorateElement2 = (array, flags, name, decorators, target, extra) => {
    var fn, it, done, ctx, access, k = flags & 7, s = !!(flags & 8), p = !!(flags & 16);
    var j = k > 3 ? array.length + 1 : k ? s ? 1 : 2 : 0, key = __decoratorStrings2[k + 5];
    var initializers = k > 3 && (array[j - 1] = []), extraInitializers = array[j] || (array[j] = []);
    var desc = k && (!p && !s && (target = target.prototype), k < 5 && (k > 3 || !p) && __getOwnPropDesc2(k < 4 ? target : { get [name]() {
      return __privateGet2(this, extra);
    }, set [name](x) {
      return __privateSet2(this, extra, x);
    } }, name));
    k ? p && k < 4 && __name2(extra, (k > 2 ? "set " : k > 1 ? "get " : "") + name) : __name2(target, name);
    for (var i = decorators.length - 1;i >= 0; i--) {
      ctx = __decoratorContext2(k, name, done = {}, array[3], extraInitializers);
      if (k) {
        ctx.static = s, ctx.private = p, access = ctx.access = { has: p ? (x) => __privateIn2(target, x) : (x) => (name in x) };
        if (k ^ 3)
          access.get = p ? (x) => (k ^ 1 ? __privateGet2 : __privateMethod2)(x, target, k ^ 4 ? extra : desc.get) : (x) => x[name];
        if (k > 2)
          access.set = p ? (x, y) => __privateSet2(x, target, y, k ^ 4 ? extra : desc.set) : (x, y) => x[name] = y;
      }
      it = (0, decorators[i])(k ? k < 4 ? p ? extra : desc[key] : k > 4 ? undefined : { get: desc.get, set: desc.set } : target, ctx), done._ = 1;
      if (k ^ 4 || it === undefined)
        __expectFn2(it) && (k > 4 ? initializers.unshift(it) : k ? p ? extra = it : desc[key] = it : target = it);
      else if (typeof it !== "object" || it === null)
        __typeError2("Object expected");
      else
        __expectFn2(fn = it.get) && (desc.get = fn), __expectFn2(fn = it.set) && (desc.set = fn), __expectFn2(fn = it.init) && initializers.unshift(fn);
    }
    return k || __decoratorMetadata2(array, target), desc && __defProp2(target, name, desc), p ? k ^ 4 ? extra : desc : target;
  };
  var __accessCheck2 = (obj, member, msg) => member.has(obj) || __typeError2("Cannot " + msg);
  var __privateIn2 = (member, obj) => Object(obj) !== obj ? __typeError2('Cannot use the "in" operator on this value') : member.has(obj);
  var __privateGet2 = (obj, member, getter) => (__accessCheck2(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
  var __privateAdd2 = (obj, member, value) => member.has(obj) ? __typeError2("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
  var __privateSet2 = (obj, member, value, setter) => (__accessCheck2(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
  var __privateMethod2 = (obj, member, method) => (__accessCheck2(obj, member, "access private method"), method);
  var Point = class _Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
    static delta(a, b) {
      return new _Point(a.x - b.x, a.y - b.y);
    }
    static distance(a, b) {
      return Math.hypot(a.x - b.x, a.y - b.y);
    }
    static equals(a, b) {
      return a.x === b.x && a.y === b.y;
    }
    static from({ x, y }) {
      return new _Point(x, y);
    }
  };
  var Rectangle = class _Rectangle {
    constructor(left, top, width, height) {
      this.left = left;
      this.top = top;
      this.width = width;
      this.height = height;
      this.scale = {
        x: 1,
        y: 1
      };
    }
    get inverseScale() {
      return {
        x: 1 / this.scale.x,
        y: 1 / this.scale.y
      };
    }
    translate(x, y) {
      const { top, left, width, height, scale } = this;
      const newShape = new _Rectangle(left + x, top + y, width, height);
      newShape.scale = __spreadValues2({}, scale);
      return newShape;
    }
    get boundingRectangle() {
      const { width, height, left, top, right, bottom } = this;
      return { width, height, left, top, right, bottom };
    }
    get center() {
      const { left, top, right, bottom } = this;
      return new Point((left + right) / 2, (top + bottom) / 2);
    }
    get area() {
      const { width, height } = this;
      return width * height;
    }
    equals(shape) {
      if (!(shape instanceof _Rectangle)) {
        return false;
      }
      const { left, top, width, height } = this;
      return left === shape.left && top === shape.top && width === shape.width && height === shape.height;
    }
    containsPoint(point) {
      const { top, left, bottom, right } = this;
      return top <= point.y && point.y <= bottom && left <= point.x && point.x <= right;
    }
    intersectionArea(shape) {
      if (shape instanceof _Rectangle) {
        return rectangleRectangleIntersection(this, shape);
      }
      return 0;
    }
    intersectionRatio(shape) {
      const { area } = this;
      const intersectionArea = this.intersectionArea(shape);
      const intersectionRatio = intersectionArea / (shape.area + area - intersectionArea);
      return intersectionRatio;
    }
    get bottom() {
      const { top, height } = this;
      return top + height;
    }
    get right() {
      const { left, width } = this;
      return left + width;
    }
    get aspectRatio() {
      const { width, height } = this;
      return width / height;
    }
    get corners() {
      return [
        { x: this.left, y: this.top },
        { x: this.right, y: this.top },
        { x: this.left, y: this.bottom },
        { x: this.right, y: this.bottom }
      ];
    }
    static from({ top, left, width, height }) {
      return new _Rectangle(left, top, width, height);
    }
    static delta(a, b, alignment = { x: "center", y: "center" }) {
      const getCoordinate = (rect, axis) => {
        const align = alignment[axis];
        const start = axis === "x" ? rect.left : rect.top;
        const size = axis === "x" ? rect.width : rect.height;
        if (align == "start")
          return start;
        if (align == "end")
          return start + size;
        return start + size / 2;
      };
      return Point.delta({ x: getCoordinate(a, "x"), y: getCoordinate(a, "y") }, { x: getCoordinate(b, "x"), y: getCoordinate(b, "y") });
    }
    static intersectionRatio(a, b) {
      return _Rectangle.from(a).intersectionRatio(_Rectangle.from(b));
    }
  };
  function rectangleRectangleIntersection(a, b) {
    const top = Math.max(b.top, a.top);
    const left = Math.max(b.left, a.left);
    const right = Math.min(b.left + b.width, a.left + a.width);
    const bottom = Math.min(b.top + b.height, a.top + a.height);
    const width = right - left;
    const height = bottom - top;
    if (left < right && top < bottom) {
      const intersectionArea = width * height;
      return intersectionArea;
    }
    return 0;
  }
  var _direction_dec;
  var _delta_dec;
  var _a2;
  var _timestamp;
  var _init2;
  var Position = class extends (_a2 = ValueHistory, _delta_dec = [derived], _direction_dec = [derived], _a2) {
    constructor(initialValue) {
      const point = Point.from(initialValue);
      super(point, (a, b) => Point.equals(a, b));
      __runInitializers2(_init2, 5, this);
      __privateAdd2(this, _timestamp, 0);
      this.velocity = { x: 0, y: 0 };
    }
    get delta() {
      return Point.delta(this.current, this.initial);
    }
    get direction() {
      const { current, previous } = this;
      if (!previous)
        return null;
      const delta = {
        x: current.x - previous.x,
        y: current.y - previous.y
      };
      if (!delta.x && !delta.y) {
        return null;
      }
      if (Math.abs(delta.x) > Math.abs(delta.y)) {
        return delta.x > 0 ? "right" : "left";
      }
      return delta.y > 0 ? "down" : "up";
    }
    get current() {
      return super.current;
    }
    set current(coordinates) {
      const { current } = this;
      const point = Point.from(coordinates);
      const delta = {
        x: point.x - current.x,
        y: point.y - current.y
      };
      const timestamp = Date.now();
      const timeDelta = timestamp - __privateGet2(this, _timestamp);
      const velocity = (delta2) => Math.round(delta2 / timeDelta * 100);
      n2(() => {
        __privateSet2(this, _timestamp, timestamp);
        this.velocity = {
          x: velocity(delta.x),
          y: velocity(delta.y)
        };
        super.current = point;
      });
    }
    reset(coordinates = this.defaultValue) {
      super.reset(Point.from(coordinates));
      this.velocity = { x: 0, y: 0 };
    }
  };
  _init2 = __decoratorStart2(_a2);
  _timestamp = new WeakMap;
  __decorateElement2(_init2, 2, "delta", _delta_dec, Position);
  __decorateElement2(_init2, 2, "direction", _direction_dec, Position);
  __decoratorMetadata2(_init2, Position);
  function exceedsDistance({ x, y }, distance) {
    const dx = Math.abs(x);
    const dy = Math.abs(y);
    if (typeof distance === "number") {
      return Math.sqrt(__pow(dx, 2) + __pow(dy, 2)) > distance;
    }
    if ("x" in distance && "y" in distance) {
      return dx > distance.x && dy > distance.y;
    }
    if ("x" in distance) {
      return dx > distance.x;
    }
    if ("y" in distance) {
      return dy > distance.y;
    }
    return false;
  }
  var Axis = /* @__PURE__ */ ((Axis2) => {
    Axis2["Horizontal"] = "x";
    Axis2["Vertical"] = "y";
    return Axis2;
  })(Axis || {});
  var Axes = Object.values(Axis);

  // node_modules/@dnd-kit/abstract/index.js
  var __create3 = Object.create;
  var __defProp3 = Object.defineProperty;
  var __defProps2 = Object.defineProperties;
  var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs2 = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols3 = Object.getOwnPropertySymbols;
  var __hasOwnProp3 = Object.prototype.hasOwnProperty;
  var __propIsEnum3 = Object.prototype.propertyIsEnumerable;
  var __knownSymbol3 = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
  var __typeError3 = (msg) => {
    throw TypeError(msg);
  };
  var __defNormalProp3 = (obj, key, value) => (key in obj) ? __defProp3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues3 = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp3.call(b, prop))
        __defNormalProp3(a, prop, b[prop]);
    if (__getOwnPropSymbols3)
      for (var prop of __getOwnPropSymbols3(b)) {
        if (__propIsEnum3.call(b, prop))
          __defNormalProp3(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps2 = (a, b) => __defProps2(a, __getOwnPropDescs2(b));
  var __name3 = (target, value) => __defProp3(target, "name", { value, configurable: true });
  var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp3.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols3)
      for (var prop of __getOwnPropSymbols3(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum3.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  var __decoratorStart3 = (base) => {
    var _a;
    return [, , , __create3((_a = base == null ? undefined : base[__knownSymbol3("metadata")]) != null ? _a : null)];
  };
  var __decoratorStrings3 = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
  var __expectFn3 = (fn) => fn !== undefined && typeof fn !== "function" ? __typeError3("Function expected") : fn;
  var __decoratorContext3 = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings3[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError3("Already initialized") : fns.push(__expectFn3(fn || null)) });
  var __decoratorMetadata3 = (array, target) => __defNormalProp3(target, __knownSymbol3("metadata"), array[3]);
  var __runInitializers3 = (array, flags, self, value) => {
    for (var i = 0, fns = array[flags >> 1], n = fns && fns.length;i < n; i++)
      flags & 1 ? fns[i].call(self) : value = fns[i].call(self, value);
    return value;
  };
  var __decorateElement3 = (array, flags, name, decorators, target, extra) => {
    var fn, it, done, ctx, access, k = flags & 7, s = !!(flags & 8), p = !!(flags & 16);
    var j = k > 3 ? array.length + 1 : k ? s ? 1 : 2 : 0, key = __decoratorStrings3[k + 5];
    var initializers = k > 3 && (array[j - 1] = []), extraInitializers = array[j] || (array[j] = []);
    var desc = k && (!p && !s && (target = target.prototype), k < 5 && (k > 3 || !p) && __getOwnPropDesc3(k < 4 ? target : { get [name]() {
      return __privateGet3(this, extra);
    }, set [name](x) {
      return __privateSet3(this, extra, x);
    } }, name));
    k ? p && k < 4 && __name3(extra, (k > 2 ? "set " : k > 1 ? "get " : "") + name) : __name3(target, name);
    for (var i = decorators.length - 1;i >= 0; i--) {
      ctx = __decoratorContext3(k, name, done = {}, array[3], extraInitializers);
      if (k) {
        ctx.static = s, ctx.private = p, access = ctx.access = { has: p ? (x) => __privateIn3(target, x) : (x) => (name in x) };
        if (k ^ 3)
          access.get = p ? (x) => (k ^ 1 ? __privateGet3 : __privateMethod3)(x, target, k ^ 4 ? extra : desc.get) : (x) => x[name];
        if (k > 2)
          access.set = p ? (x, y) => __privateSet3(x, target, y, k ^ 4 ? extra : desc.set) : (x, y) => x[name] = y;
      }
      it = (0, decorators[i])(k ? k < 4 ? p ? extra : desc[key] : k > 4 ? undefined : { get: desc.get, set: desc.set } : target, ctx), done._ = 1;
      if (k ^ 4 || it === undefined)
        __expectFn3(it) && (k > 4 ? initializers.unshift(it) : k ? p ? extra = it : desc[key] = it : target = it);
      else if (typeof it !== "object" || it === null)
        __typeError3("Object expected");
      else
        __expectFn3(fn = it.get) && (desc.get = fn), __expectFn3(fn = it.set) && (desc.set = fn), __expectFn3(fn = it.init) && initializers.unshift(fn);
    }
    return k || __decoratorMetadata3(array, target), desc && __defProp3(target, name, desc), p ? k ^ 4 ? extra : desc : target;
  };
  var __accessCheck3 = (obj, member, msg) => member.has(obj) || __typeError3("Cannot " + msg);
  var __privateIn3 = (member, obj) => Object(obj) !== obj ? __typeError3('Cannot use the "in" operator on this value') : member.has(obj);
  var __privateGet3 = (obj, member, getter) => (__accessCheck3(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
  var __privateAdd3 = (obj, member, value) => member.has(obj) ? __typeError3("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
  var __privateSet3 = (obj, member, value, setter) => (__accessCheck3(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
  var __privateMethod3 = (obj, member, method) => (__accessCheck3(obj, member, "access private method"), method);
  function configure(plugin, options) {
    return {
      plugin,
      options
    };
  }
  function configurator(plugin) {
    return (options) => {
      return configure(plugin, options);
    };
  }
  function descriptor(plugin) {
    if (typeof plugin === "function") {
      return {
        plugin,
        options: undefined
      };
    }
    return plugin;
  }
  var _disabled_dec;
  var _init3;
  var _disabled;
  var _cleanupFunctions;
  _disabled_dec = [reactive];
  var Plugin = class {
    constructor(manager, options) {
      this.manager = manager;
      this.options = options;
      __privateAdd3(this, _disabled, __runInitializers3(_init3, 8, this, false)), __runInitializers3(_init3, 11, this);
      __privateAdd3(this, _cleanupFunctions, /* @__PURE__ */ new Set);
    }
    enable() {
      this.disabled = false;
    }
    disable() {
      this.disabled = true;
    }
    isDisabled() {
      return f3(() => {
        return this.disabled;
      });
    }
    configure(options) {
      this.options = options;
    }
    registerEffect(callback) {
      const dispose = j3(callback.bind(this));
      __privateGet3(this, _cleanupFunctions).add(dispose);
      return dispose;
    }
    destroy() {
      __privateGet3(this, _cleanupFunctions).forEach((cleanup) => cleanup());
    }
    static configure(options) {
      return configure(this, options);
    }
  };
  _init3 = __decoratorStart3(null);
  _disabled = new WeakMap;
  _cleanupFunctions = new WeakMap;
  __decorateElement3(_init3, 4, "disabled", _disabled_dec, Plugin, _disabled);
  __decoratorMetadata3(_init3, Plugin);
  var CorePlugin = class extends Plugin {
  };
  var _previousValues;
  var PluginRegistry = class {
    constructor(manager) {
      this.manager = manager;
      this.instances = /* @__PURE__ */ new Map;
      __privateAdd3(this, _previousValues, []);
    }
    get values() {
      return Array.from(this.instances.values());
    }
    set values(entries) {
      const descriptors = entries.map(descriptor).reduce((acc, descriptor2) => {
        const existing = acc.find(({ plugin }) => plugin === descriptor2.plugin);
        if (existing) {
          existing.options = descriptor2.options;
          return acc;
        }
        return [...acc, descriptor2];
      }, []);
      const constructors = descriptors.map(({ plugin }) => plugin);
      for (const plugin of __privateGet3(this, _previousValues)) {
        if (!constructors.includes(plugin)) {
          if (plugin.prototype instanceof CorePlugin) {
            continue;
          }
          this.unregister(plugin);
        }
      }
      for (const { plugin, options } of descriptors) {
        this.register(plugin, options);
      }
      __privateSet3(this, _previousValues, constructors);
    }
    get(plugin) {
      const instance = this.instances.get(plugin);
      return instance;
    }
    register(plugin, options) {
      const existingInstance = this.instances.get(plugin);
      if (existingInstance) {
        if (existingInstance.options !== options) {
          existingInstance.options = options;
        }
        return existingInstance;
      }
      const instance = new plugin(this.manager, options);
      this.instances.set(plugin, instance);
      return instance;
    }
    unregister(plugin) {
      const instance = this.instances.get(plugin);
      if (instance) {
        instance.destroy();
        this.instances.delete(plugin);
      }
    }
    destroy() {
      for (const plugin of this.instances.values()) {
        plugin.destroy();
      }
      this.instances.clear();
    }
  };
  _previousValues = new WeakMap;
  function sortCollisions(a, b) {
    if (a.priority === b.priority) {
      if (a.type === b.type) {
        return b.value - a.value;
      }
      return b.type - a.type;
    }
    return b.priority - a.priority;
  }
  var DEFAULT_VALUE = [];
  var _previousCoordinates;
  var _collisions;
  var CollisionObserver = class extends Plugin {
    constructor(manager) {
      super(manager);
      __privateAdd3(this, _previousCoordinates);
      __privateAdd3(this, _collisions);
      this.computeCollisions = this.computeCollisions.bind(this);
      __privateSet3(this, _collisions, y3(DEFAULT_VALUE));
      this.destroy = effects(() => {
        const collisions = this.computeCollisions();
        const coordinates = f3(() => this.manager.dragOperation.position.current);
        if (collisions !== DEFAULT_VALUE) {
          const previousCoordinates = __privateGet3(this, _previousCoordinates);
          __privateSet3(this, _previousCoordinates, coordinates);
          if (previousCoordinates && coordinates.x == previousCoordinates.x && coordinates.y == previousCoordinates.y) {
            return;
          }
        } else {
          __privateSet3(this, _previousCoordinates, undefined);
        }
        __privateGet3(this, _collisions).value = collisions;
      }, () => {
        const { dragOperation } = this.manager;
        if (dragOperation.status.initialized) {
          this.forceUpdate();
        }
      });
    }
    forceUpdate(immediate = true) {
      f3(() => {
        if (immediate) {
          __privateGet3(this, _collisions).value = this.computeCollisions();
        } else {
          __privateSet3(this, _previousCoordinates, undefined);
        }
      });
    }
    computeCollisions(entries, collisionDetector) {
      const { registry, dragOperation } = this.manager;
      const { source, shape, status } = dragOperation;
      if (!status.initialized || !shape) {
        return DEFAULT_VALUE;
      }
      const collisions = [];
      const potentialTargets = [];
      for (const entry of entries != null ? entries : registry.droppables) {
        if (entry.disabled) {
          continue;
        }
        if (source && !entry.accepts(source)) {
          continue;
        }
        const detectCollision = collisionDetector != null ? collisionDetector : entry.collisionDetector;
        if (!detectCollision) {
          continue;
        }
        potentialTargets.push(entry);
        entry.shape;
        const collision = f3(() => detectCollision({
          droppable: entry,
          dragOperation
        }));
        if (collision) {
          if (entry.collisionPriority != null) {
            collision.priority = entry.collisionPriority;
          }
          collisions.push(collision);
        }
      }
      if (potentialTargets.length === 0) {
        return DEFAULT_VALUE;
      }
      collisions.sort(sortCollisions);
      return collisions;
    }
    get collisions() {
      return __privateGet3(this, _collisions).value;
    }
  };
  _previousCoordinates = new WeakMap;
  _collisions = new WeakMap;
  var _disabled_dec2;
  var _data_dec;
  var _manager_dec;
  var _Entity_static;
  var flushIdChanges_fn;
  var _init22;
  var _manager;
  var _idSignal;
  var _data;
  var _disabled2;
  _manager_dec = [reactive], _data_dec = [reactive], _disabled_dec2 = [reactive];
  var _Entity = class _Entity {
    constructor(input, manager) {
      __privateAdd3(this, _manager, __runInitializers3(_init22, 8, this)), __runInitializers3(_init22, 11, this);
      __privateAdd3(this, _idSignal);
      __privateAdd3(this, _data, __runInitializers3(_init22, 12, this)), __runInitializers3(_init22, 15, this);
      __privateAdd3(this, _disabled2, __runInitializers3(_init22, 16, this)), __runInitializers3(_init22, 19, this);
      const { effects: effects6, id, data = {}, disabled = false, register = true } = input;
      let previousId = id;
      __privateSet3(this, _idSignal, y3(id));
      this.manager = manager;
      this.data = data;
      this.disabled = disabled;
      this.effects = () => {
        var _a;
        return [
          () => {
            const { id: id2, manager: manager2 } = this;
            if (id2 === previousId) {
              return;
            }
            previousId = id2;
            manager2 == null || manager2.registry.register(this);
            return () => manager2 == null ? undefined : manager2.registry.unregister(this);
          },
          ...(_a = effects6 == null ? undefined : effects6()) != null ? _a : []
        ];
      };
      this.register = this.register.bind(this);
      this.unregister = this.unregister.bind(this);
      this.destroy = this.destroy.bind(this);
      if (manager && register) {
        queueMicrotask(this.register);
      }
    }
    get id() {
      var _a, _b;
      const signalValue = __privateGet3(this, _idSignal).value;
      return (_b = (_a = _Entity.pendingIdChanges) == null ? undefined : _a.get(this)) != null ? _b : signalValue;
    }
    set id(value) {
      var _a, _b;
      const current = (_b = (_a = _Entity.pendingIdChanges) == null ? undefined : _a.get(this)) != null ? _b : __privateGet3(this, _idSignal).peek();
      if (value === current)
        return;
      if (!_Entity.pendingIdChanges) {
        _Entity.pendingIdChanges = /* @__PURE__ */ new Map;
        queueMicrotask(() => {
          var _a2;
          return __privateMethod3(_a2 = _Entity, _Entity_static, flushIdChanges_fn).call(_a2);
        });
      }
      _Entity.pendingIdChanges.set(this, value);
    }
    register() {
      var _a;
      return (_a = this.manager) == null ? undefined : _a.registry.register(this);
    }
    unregister() {
      var _a;
      (_a = this.manager) == null || _a.registry.unregister(this);
    }
    destroy() {
      var _a;
      (_a = this.manager) == null || _a.registry.unregister(this);
    }
  };
  _init22 = __decoratorStart3(null);
  _Entity_static = new WeakSet;
  flushIdChanges_fn = function() {
    const changes = _Entity.pendingIdChanges;
    _Entity.pendingIdChanges = null;
    if (changes) {
      n2(() => {
        for (const [entity, id] of changes) {
          __privateGet3(entity, _idSignal).value = id;
        }
      });
    }
  };
  _manager = new WeakMap;
  _idSignal = new WeakMap;
  _data = new WeakMap;
  _disabled2 = new WeakMap;
  __decorateElement3(_init22, 4, "manager", _manager_dec, _Entity, _manager);
  __decorateElement3(_init22, 4, "data", _data_dec, _Entity, _data);
  __decorateElement3(_init22, 4, "disabled", _disabled_dec2, _Entity, _disabled2);
  __privateAdd3(_Entity, _Entity_static);
  __decoratorMetadata3(_init22, _Entity);
  _Entity.pendingIdChanges = null;
  var Entity = _Entity;
  var EntityRegistry = class {
    constructor() {
      this.map = y3(/* @__PURE__ */ new Map);
      this.cleanupFunctions = /* @__PURE__ */ new WeakMap;
      this.register = (key, value) => {
        const current = this.map.peek();
        const currentValue = current.get(key);
        const unregister = () => this.unregister(key, value);
        if (currentValue === value)
          return unregister;
        if (currentValue) {
          if (currentValue.id === key) {
            const cleanup2 = this.cleanupFunctions.get(currentValue);
            cleanup2 == null || cleanup2();
            this.cleanupFunctions.delete(currentValue);
          }
        }
        const updatedMap = new Map(current);
        for (const [existingKey, existingValue] of current) {
          if (existingValue === value && existingKey !== key) {
            updatedMap.delete(existingKey);
            break;
          }
        }
        updatedMap.set(key, value);
        this.map.value = updatedMap;
        const cleanup = effects(...value.effects());
        this.cleanupFunctions.set(value, cleanup);
        return unregister;
      };
      this.unregister = (key, value) => {
        const current = this.map.peek();
        if (current.get(key) !== value) {
          return;
        }
        const cleanup = this.cleanupFunctions.get(value);
        cleanup == null || cleanup();
        this.cleanupFunctions.delete(value);
        const updatedMap = new Map(current);
        updatedMap.delete(key);
        this.map.value = updatedMap;
      };
    }
    [Symbol.iterator]() {
      return this.map.peek().values();
    }
    get value() {
      return this.map.value.values();
    }
    has(identifier) {
      return this.map.value.has(identifier);
    }
    get(identifier) {
      return this.map.value.get(identifier);
    }
    destroy() {
      for (const entry of this) {
        const cleanup = this.cleanupFunctions.get(entry);
        cleanup == null || cleanup();
        entry.destroy();
      }
      this.map.value = /* @__PURE__ */ new Map;
    }
  };
  var _isDragSource_dec;
  var _isDragging_dec;
  var _isDropping_dec;
  var _status_dec;
  var _modifiers_dec;
  var _type_dec;
  var _c2;
  var _init32;
  var _type;
  var _modifiers;
  var _status;
  var Draggable = class extends (_c2 = Entity, _type_dec = [reactive], _modifiers_dec = [reactive], _status_dec = [reactive], _isDropping_dec = [derived], _isDragging_dec = [derived], _isDragSource_dec = [derived], _c2) {
    constructor(_a, manager) {
      var _b = _a, { modifiers, type, sensors, plugins, effects: effects6 } = _b, input = __objRest(_b, ["modifiers", "type", "sensors", "plugins", "effects"]);
      super(__spreadProps2(__spreadValues3({}, input), {
        effects: () => {
          var _a2;
          return [
            ...(_a2 = effects6 == null ? undefined : effects6()) != null ? _a2 : [],
            () => {
              const { manager: manager2, plugins: plugins2 } = this;
              if (!manager2 || !plugins2)
                return;
              for (const entry of plugins2) {
                const { plugin } = descriptor(entry);
                manager2.registry.plugins.register(plugin);
              }
            }
          ];
        }
      }), manager);
      __runInitializers3(_init32, 5, this);
      __privateAdd3(this, _type, __runInitializers3(_init32, 8, this)), __runInitializers3(_init32, 11, this);
      __privateAdd3(this, _modifiers, __runInitializers3(_init32, 12, this)), __runInitializers3(_init32, 15, this);
      __privateAdd3(this, _status, __runInitializers3(_init32, 16, this, this.isDragSource ? "dragging" : "idle")), __runInitializers3(_init32, 19, this);
      this.type = type;
      this.sensors = sensors;
      this.modifiers = modifiers;
      this.alignment = input.alignment;
      this.plugins = plugins;
    }
    pluginConfig(plugin) {
      if (!this.plugins)
        return;
      for (const entry of this.plugins) {
        const desc = descriptor(entry);
        if (desc.plugin === plugin)
          return desc.options;
      }
      return;
    }
    get isDropping() {
      return this.status === "dropping" && this.isDragSource;
    }
    get isDragging() {
      return this.status === "dragging" && this.isDragSource;
    }
    get isDragSource() {
      var _a, _b;
      return ((_b = (_a = this.manager) == null ? undefined : _a.dragOperation.source) == null ? undefined : _b.id) === this.id;
    }
  };
  _init32 = __decoratorStart3(_c2);
  _type = new WeakMap;
  _modifiers = new WeakMap;
  _status = new WeakMap;
  __decorateElement3(_init32, 4, "type", _type_dec, Draggable, _type);
  __decorateElement3(_init32, 4, "modifiers", _modifiers_dec, Draggable, _modifiers);
  __decorateElement3(_init32, 4, "status", _status_dec, Draggable, _status);
  __decorateElement3(_init32, 2, "isDropping", _isDropping_dec, Draggable);
  __decorateElement3(_init32, 2, "isDragging", _isDragging_dec, Draggable);
  __decorateElement3(_init32, 2, "isDragSource", _isDragSource_dec, Draggable);
  __decoratorMetadata3(_init32, Draggable);
  var _isDropTarget_dec;
  var _shape_dec;
  var _collisionPriority_dec;
  var _collisionDetector_dec;
  var _type_dec2;
  var _accept_dec;
  var _c22;
  var _init4;
  var _accept;
  var _type2;
  var _collisionDetector;
  var _collisionPriority;
  var _shape;
  var Droppable = class extends (_c22 = Entity, _accept_dec = [reactive], _type_dec2 = [reactive], _collisionDetector_dec = [reactive], _collisionPriority_dec = [reactive], _shape_dec = [reactive], _isDropTarget_dec = [derived], _c22) {
    constructor(_a, manager) {
      var _b = _a, { accept, collisionDetector, collisionPriority, type } = _b, input = __objRest(_b, ["accept", "collisionDetector", "collisionPriority", "type"]);
      super(input, manager);
      __runInitializers3(_init4, 5, this);
      __privateAdd3(this, _accept, __runInitializers3(_init4, 8, this)), __runInitializers3(_init4, 11, this);
      __privateAdd3(this, _type2, __runInitializers3(_init4, 12, this)), __runInitializers3(_init4, 15, this);
      __privateAdd3(this, _collisionDetector, __runInitializers3(_init4, 16, this)), __runInitializers3(_init4, 19, this);
      __privateAdd3(this, _collisionPriority, __runInitializers3(_init4, 20, this)), __runInitializers3(_init4, 23, this);
      __privateAdd3(this, _shape, __runInitializers3(_init4, 24, this)), __runInitializers3(_init4, 27, this);
      this.accept = accept;
      this.collisionDetector = collisionDetector;
      this.collisionPriority = collisionPriority;
      this.type = type;
    }
    accepts(draggable) {
      const { accept } = this;
      if (!accept) {
        return true;
      }
      if (typeof accept === "function") {
        return accept(draggable);
      }
      if (!draggable.type) {
        return false;
      }
      if (Array.isArray(accept)) {
        return accept.includes(draggable.type);
      }
      return draggable.type === accept;
    }
    get isDropTarget() {
      var _a, _b;
      return ((_b = (_a = this.manager) == null ? undefined : _a.dragOperation.target) == null ? undefined : _b.id) === this.id;
    }
  };
  _init4 = __decoratorStart3(_c22);
  _accept = new WeakMap;
  _type2 = new WeakMap;
  _collisionDetector = new WeakMap;
  _collisionPriority = new WeakMap;
  _shape = new WeakMap;
  __decorateElement3(_init4, 4, "accept", _accept_dec, Droppable, _accept);
  __decorateElement3(_init4, 4, "type", _type_dec2, Droppable, _type2);
  __decorateElement3(_init4, 4, "collisionDetector", _collisionDetector_dec, Droppable, _collisionDetector);
  __decorateElement3(_init4, 4, "collisionPriority", _collisionPriority_dec, Droppable, _collisionPriority);
  __decorateElement3(_init4, 4, "shape", _shape_dec, Droppable, _shape);
  __decorateElement3(_init4, 2, "isDropTarget", _isDropTarget_dec, Droppable);
  __decoratorMetadata3(_init4, Droppable);
  var Monitor = class {
    constructor() {
      this.registry = /* @__PURE__ */ new Map;
    }
    addEventListener(name, handler) {
      const { registry } = this;
      const listeners = new Set(registry.get(name));
      listeners.add(handler);
      registry.set(name, listeners);
      return () => this.removeEventListener(name, handler);
    }
    removeEventListener(name, handler) {
      const { registry } = this;
      const listeners = new Set(registry.get(name));
      listeners.delete(handler);
      registry.set(name, listeners);
    }
    dispatch(name, ...args) {
      const { registry } = this;
      const listeners = registry.get(name);
      if (!listeners) {
        return;
      }
      for (const listener of listeners) {
        listener(...args);
      }
    }
  };
  var DragDropMonitor = class extends Monitor {
    constructor(manager) {
      super();
      this.manager = manager;
    }
    dispatch(type, event) {
      const args = [event, this.manager];
      super.dispatch(type, ...args);
    }
  };
  function defaultPreventable(event, cancelable = true) {
    let defaultPrevented = false;
    return __spreadProps2(__spreadValues3({}, event), {
      cancelable,
      get defaultPrevented() {
        return defaultPrevented;
      },
      preventDefault() {
        if (!cancelable) {
          return;
        }
        defaultPrevented = true;
      }
    });
  }
  var CollisionNotifier = class extends CorePlugin {
    constructor(manager) {
      super(manager);
      const isEqual = (a, b) => a.map(({ id }) => id).join("") === b.map(({ id }) => id).join("");
      let previousCollisions = [];
      this.destroy = effects(() => {
        const { dragOperation, collisionObserver } = manager;
        if (dragOperation.status.initializing) {
          previousCollisions = [];
          collisionObserver.enable();
        }
      }, () => {
        const { collisionObserver, monitor } = manager;
        const { collisions } = collisionObserver;
        if (collisionObserver.isDisabled()) {
          return;
        }
        if (Entity.pendingIdChanges) {
          return;
        }
        const event = defaultPreventable({
          collisions
        });
        monitor.dispatch("collision", event);
        if (event.defaultPrevented) {
          return;
        }
        if (isEqual(collisions, previousCollisions)) {
          return;
        } else {
          previousCollisions = collisions;
        }
        const [firstCollision] = collisions;
        f3(() => {
          var _a;
          if ((firstCollision == null ? undefined : firstCollision.id) !== ((_a = manager.dragOperation.target) == null ? undefined : _a.id)) {
            collisionObserver.disable();
            manager.actions.setDropTarget(firstCollision == null ? undefined : firstCollision.id).then(() => {
              collisionObserver.enable();
            });
          }
        });
      });
    }
  };
  var CollisionPriority = /* @__PURE__ */ ((CollisionPriority2) => {
    CollisionPriority2[CollisionPriority2["Lowest"] = 0] = "Lowest";
    CollisionPriority2[CollisionPriority2["Low"] = 1] = "Low";
    CollisionPriority2[CollisionPriority2["Normal"] = 2] = "Normal";
    CollisionPriority2[CollisionPriority2["High"] = 3] = "High";
    CollisionPriority2[CollisionPriority2["Highest"] = 4] = "Highest";
    return CollisionPriority2;
  })(CollisionPriority || {});
  var CollisionType = /* @__PURE__ */ ((CollisionType2) => {
    CollisionType2[CollisionType2["Collision"] = 0] = "Collision";
    CollisionType2[CollisionType2["ShapeIntersection"] = 1] = "ShapeIntersection";
    CollisionType2[CollisionType2["PointerIntersection"] = 2] = "PointerIntersection";
    return CollisionType2;
  })(CollisionType || {});
  var _dropped_dec;
  var _dragging_dec;
  var _initialized_dec;
  var _initializing_dec;
  var _idle_dec;
  var _current_dec3;
  var _value_dec;
  var _init5;
  var _value;
  _value_dec = [reactive], _current_dec3 = [derived], _idle_dec = [derived], _initializing_dec = [derived], _initialized_dec = [derived], _dragging_dec = [derived], _dropped_dec = [derived];
  var Status = class {
    constructor() {
      __runInitializers3(_init5, 5, this);
      __privateAdd3(this, _value, __runInitializers3(_init5, 8, this, "idle")), __runInitializers3(_init5, 11, this);
    }
    get current() {
      return this.value;
    }
    get idle() {
      return this.value === "idle";
    }
    get initializing() {
      return this.value === "initializing";
    }
    get initialized() {
      const { value } = this;
      return value !== "idle" && value !== "initialization-pending";
    }
    get dragging() {
      return this.value === "dragging";
    }
    get dropped() {
      return this.value === "dropped";
    }
    set(value) {
      this.value = value;
    }
  };
  _init5 = __decoratorStart3(null);
  _value = new WeakMap;
  __decorateElement3(_init5, 4, "value", _value_dec, Status, _value);
  __decorateElement3(_init5, 2, "current", _current_dec3, Status);
  __decorateElement3(_init5, 2, "idle", _idle_dec, Status);
  __decorateElement3(_init5, 2, "initializing", _initializing_dec, Status);
  __decorateElement3(_init5, 2, "initialized", _initialized_dec, Status);
  __decorateElement3(_init5, 2, "dragging", _dragging_dec, Status);
  __decorateElement3(_init5, 2, "dropped", _dropped_dec, Status);
  __decoratorMetadata3(_init5, Status);
  var DragActions = class {
    constructor(manager) {
      this.manager = manager;
    }
    setDragSource(source) {
      const { dragOperation } = this.manager;
      dragOperation.sourceIdentifier = typeof source === "string" || typeof source === "number" ? source : source.id;
    }
    setDropTarget(identifier) {
      return f3(() => {
        const { dragOperation } = this.manager;
        const id = identifier != null ? identifier : null;
        if (dragOperation.targetIdentifier === id) {
          return Promise.resolve(false);
        }
        dragOperation.targetIdentifier = id;
        const event = defaultPreventable({
          operation: dragOperation.snapshot()
        });
        if (dragOperation.status.dragging) {
          this.manager.monitor.dispatch("dragover", event);
        }
        return this.manager.renderer.rendering.then(() => event.defaultPrevented);
      });
    }
    start(args) {
      return f3(() => {
        const { dragOperation } = this.manager;
        if (args.source != null) {
          this.setDragSource(args.source);
        }
        const sourceInstance = dragOperation.source;
        if (!sourceInstance) {
          throw new Error("Cannot start a drag operation without a drag source");
        }
        if (!dragOperation.status.idle) {
          throw new Error("Cannot start a drag operation while another is active");
        }
        const controller = new AbortController;
        const { event: nativeEvent, coordinates } = args;
        n2(() => {
          dragOperation.status.set("initialization-pending");
          dragOperation.shape = null;
          dragOperation.canceled = false;
          dragOperation.activatorEvent = nativeEvent != null ? nativeEvent : null;
          dragOperation.position.reset(coordinates);
        });
        const beforeStartEvent = defaultPreventable({
          operation: dragOperation.snapshot()
        });
        this.manager.monitor.dispatch("beforedragstart", beforeStartEvent);
        if (beforeStartEvent.defaultPrevented) {
          dragOperation.reset();
          controller.abort();
          return controller;
        }
        dragOperation.status.set("initializing");
        dragOperation.controller = controller;
        this.manager.renderer.rendering.then(() => {
          if (controller.signal.aborted)
            return;
          const { status } = dragOperation;
          if (status.current !== "initializing")
            return;
          n2(() => {
            dragOperation.status.set("dragging");
            this.manager.monitor.dispatch("dragstart", {
              nativeEvent,
              operation: dragOperation.snapshot(),
              cancelable: false
            });
          });
        });
        return controller;
      });
    }
    move(args) {
      return f3(() => {
        var _a, _b;
        const { dragOperation } = this.manager;
        const { status, controller } = dragOperation;
        if (!status.dragging || !controller || controller.signal.aborted) {
          return;
        }
        const event = defaultPreventable({
          nativeEvent: args.event,
          operation: dragOperation.snapshot(),
          by: args.by,
          to: args.to
        }, (_a = args.cancelable) != null ? _a : true);
        if ((_b = args.propagate) != null ? _b : true) {
          this.manager.monitor.dispatch("dragmove", event);
        }
        queueMicrotask(() => {
          var _a2, _b2, _c3, _d, _e;
          if (event.defaultPrevented) {
            return;
          }
          const coordinates = (_e = args.to) != null ? _e : {
            x: dragOperation.position.current.x + ((_b2 = (_a2 = args.by) == null ? undefined : _a2.x) != null ? _b2 : 0),
            y: dragOperation.position.current.y + ((_d = (_c3 = args.by) == null ? undefined : _c3.y) != null ? _d : 0)
          };
          dragOperation.position.current = coordinates;
        });
      });
    }
    stop(args = {}) {
      return f3(() => {
        var _a, _b;
        const { dragOperation } = this.manager;
        const { controller } = dragOperation;
        if (!controller || controller.signal.aborted)
          return;
        let promise;
        const suspend = () => {
          const output = {
            resume: () => {},
            abort: () => {}
          };
          promise = new Promise((resolve, reject) => {
            output.resume = resolve;
            output.abort = reject;
          });
          return output;
        };
        controller.abort();
        const end = () => {
          this.manager.renderer.rendering.then(() => {
            dragOperation.status.set("dropped");
            const dropping = f3(() => {
              var _a2;
              return ((_a2 = dragOperation.source) == null ? undefined : _a2.status) === "dropping";
            });
            const cleanup = () => {
              if (dragOperation.controller === controller) {
                dragOperation.controller = undefined;
              }
              dragOperation.reset();
            };
            if (dropping) {
              const { source } = dragOperation;
              const dispose = j3(() => {
                if ((source == null ? undefined : source.status) === "idle") {
                  dispose();
                  cleanup();
                }
              });
            } else {
              this.manager.renderer.rendering.then(cleanup);
            }
          });
        };
        dragOperation.canceled = (_a = args.canceled) != null ? _a : false;
        this.manager.monitor.dispatch("dragend", {
          nativeEvent: args.event,
          operation: dragOperation.snapshot(),
          canceled: (_b = args.canceled) != null ? _b : false,
          suspend
        });
        if (promise) {
          promise.then(end).catch(() => dragOperation.reset());
        } else {
          end();
        }
      });
    }
  };
  var Sensor = class extends Plugin {
    constructor(manager, options) {
      super(manager, options);
      this.manager = manager;
      this.options = options;
    }
  };
  var ActivationController = class extends AbortController {
    constructor(constraints, onActivate) {
      super();
      this.constraints = constraints;
      this.onActivate = onActivate;
      this.activated = false;
      for (const constraint of constraints != null ? constraints : []) {
        constraint.controller = this;
      }
    }
    onEvent(event) {
      var _a;
      if (this.activated)
        return;
      if ((_a = this.constraints) == null ? undefined : _a.length) {
        for (const constraint of this.constraints) {
          constraint.onEvent(event);
        }
      } else {
        this.activate(event);
      }
    }
    activate(event) {
      if (this.activated)
        return;
      this.activated = true;
      this.onActivate(event);
    }
    abort(event) {
      this.activated = false;
      super.abort(event);
    }
  };
  var _controller;
  var ActivationConstraint = class {
    constructor(options) {
      this.options = options;
      __privateAdd3(this, _controller);
    }
    set controller(controller) {
      __privateSet3(this, _controller, controller);
      controller.signal.addEventListener("abort", () => this.abort());
    }
    activate(event) {
      var _a;
      (_a = __privateGet3(this, _controller)) == null || _a.activate(event);
    }
  };
  _controller = new WeakMap;
  var Modifier = class extends Plugin {
    constructor(manager, options) {
      super(manager, options);
      this.manager = manager;
      this.options = options;
    }
    apply(operation) {
      return operation.transform;
    }
  };
  var DragDropRegistry = class {
    constructor(manager) {
      this.draggables = new EntityRegistry;
      this.droppables = new EntityRegistry;
      this.plugins = new PluginRegistry(manager);
      this.sensors = new PluginRegistry(manager);
      this.modifiers = new PluginRegistry(manager);
    }
    register(input, options) {
      if (input instanceof Draggable) {
        return this.draggables.register(input.id, input);
      }
      if (input instanceof Droppable) {
        return this.droppables.register(input.id, input);
      }
      if (input.prototype instanceof Modifier) {
        return this.modifiers.register(input, options);
      }
      if (input.prototype instanceof Sensor) {
        return this.sensors.register(input, options);
      }
      if (input.prototype instanceof Plugin) {
        return this.plugins.register(input, options);
      }
      throw new Error("Invalid instance type");
    }
    unregister(input) {
      if (input instanceof Entity) {
        if (input instanceof Draggable) {
          return this.draggables.unregister(input.id, input);
        }
        if (input instanceof Droppable) {
          return this.droppables.unregister(input.id, input);
        }
        return () => {};
      }
      if (input.prototype instanceof Modifier) {
        return this.modifiers.unregister(input);
      }
      if (input.prototype instanceof Sensor) {
        return this.sensors.unregister(input);
      }
      if (input.prototype instanceof Plugin) {
        return this.plugins.unregister(input);
      }
      throw new Error("Invalid instance type");
    }
    destroy() {
      this.draggables.destroy();
      this.droppables.destroy();
      this.plugins.destroy();
      this.sensors.destroy();
      this.modifiers.destroy();
    }
  };
  var _transform_dec;
  var _target_dec;
  var _source_dec;
  var _modifiers_dec2;
  var _targetIdentifier_dec;
  var _sourceIdentifier_dec;
  var _activatorEvent_dec;
  var _canceled_dec;
  var _shape_dec2;
  var _manager2;
  var _previousSource;
  var _shape2;
  var _init6;
  var _canceled;
  var _activatorEvent;
  var _sourceIdentifier;
  var _targetIdentifier;
  var _modifiers2;
  var _transform;
  _shape_dec2 = [derived], _canceled_dec = [reactive], _activatorEvent_dec = [reactive], _sourceIdentifier_dec = [reactive], _targetIdentifier_dec = [reactive], _modifiers_dec2 = [reactive], _source_dec = [derived], _target_dec = [derived], _transform_dec = [derived];
  var DragOperation = class {
    constructor(manager) {
      __runInitializers3(_init6, 5, this);
      __privateAdd3(this, _manager2);
      __privateAdd3(this, _previousSource);
      __privateAdd3(this, _shape2, new ValueHistory(undefined, (a, b) => a && b ? a.equals(b) : a === b));
      this.status = new Status;
      __privateAdd3(this, _canceled, __runInitializers3(_init6, 8, this, false)), __runInitializers3(_init6, 11, this);
      __privateAdd3(this, _activatorEvent, __runInitializers3(_init6, 12, this, null)), __runInitializers3(_init6, 15, this);
      __privateAdd3(this, _sourceIdentifier, __runInitializers3(_init6, 16, this, null)), __runInitializers3(_init6, 19, this);
      __privateAdd3(this, _targetIdentifier, __runInitializers3(_init6, 20, this, null)), __runInitializers3(_init6, 23, this);
      __privateAdd3(this, _modifiers2, __runInitializers3(_init6, 24, this, [])), __runInitializers3(_init6, 27, this);
      this.position = new Position({ x: 0, y: 0 });
      __privateAdd3(this, _transform, { x: 0, y: 0 });
      __privateSet3(this, _manager2, manager);
    }
    get shape() {
      const { current, initial, previous } = __privateGet3(this, _shape2);
      if (!current || !initial) {
        return null;
      }
      return { current, initial, previous };
    }
    set shape(value) {
      if (!value) {
        __privateGet3(this, _shape2).reset();
      } else {
        __privateGet3(this, _shape2).current = value;
      }
    }
    get source() {
      var _a;
      const identifier = this.sourceIdentifier;
      if (identifier == null)
        return null;
      const value = __privateGet3(this, _manager2).registry.draggables.get(identifier);
      if (value) {
        __privateSet3(this, _previousSource, value);
      }
      return (_a = value != null ? value : __privateGet3(this, _previousSource)) != null ? _a : null;
    }
    get target() {
      var _a;
      const identifier = this.targetIdentifier;
      return identifier != null ? (_a = __privateGet3(this, _manager2).registry.droppables.get(identifier)) != null ? _a : null : null;
    }
    get transform() {
      const { x, y } = this.position.delta;
      let transform = { x, y };
      for (const modifier of this.modifiers) {
        transform = modifier.apply(__spreadProps2(__spreadValues3({}, this.snapshot()), {
          transform
        }));
      }
      __privateSet3(this, _transform, transform);
      return transform;
    }
    snapshot() {
      return f3(() => ({
        source: this.source,
        target: this.target,
        activatorEvent: this.activatorEvent,
        transform: __privateGet3(this, _transform),
        shape: this.shape ? snapshot(this.shape) : null,
        position: snapshot(this.position),
        status: snapshot(this.status),
        canceled: this.canceled
      }));
    }
    reset() {
      n2(() => {
        this.status.set("idle");
        this.sourceIdentifier = null;
        this.targetIdentifier = null;
        __privateGet3(this, _shape2).reset();
        this.position.reset({ x: 0, y: 0 });
        __privateSet3(this, _transform, { x: 0, y: 0 });
        this.modifiers = [];
      });
    }
  };
  _init6 = __decoratorStart3(null);
  _manager2 = new WeakMap;
  _previousSource = new WeakMap;
  _shape2 = new WeakMap;
  _canceled = new WeakMap;
  _activatorEvent = new WeakMap;
  _sourceIdentifier = new WeakMap;
  _targetIdentifier = new WeakMap;
  _modifiers2 = new WeakMap;
  _transform = new WeakMap;
  __decorateElement3(_init6, 2, "shape", _shape_dec2, DragOperation);
  __decorateElement3(_init6, 4, "canceled", _canceled_dec, DragOperation, _canceled);
  __decorateElement3(_init6, 4, "activatorEvent", _activatorEvent_dec, DragOperation, _activatorEvent);
  __decorateElement3(_init6, 4, "sourceIdentifier", _sourceIdentifier_dec, DragOperation, _sourceIdentifier);
  __decorateElement3(_init6, 4, "targetIdentifier", _targetIdentifier_dec, DragOperation, _targetIdentifier);
  __decorateElement3(_init6, 4, "modifiers", _modifiers_dec2, DragOperation, _modifiers2);
  __decorateElement3(_init6, 2, "source", _source_dec, DragOperation);
  __decorateElement3(_init6, 2, "target", _target_dec, DragOperation);
  __decorateElement3(_init6, 2, "transform", _transform_dec, DragOperation);
  __decoratorMetadata3(_init6, DragOperation);
  var defaultRenderer = {
    get rendering() {
      return Promise.resolve();
    }
  };
  function resolveCustomizable(value, defaults) {
    if (typeof value === "function") {
      return value(defaults);
    }
    return value != null ? value : defaults;
  }
  var DragDropManager = class {
    constructor(config) {
      this.destroy = () => {
        if (!this.dragOperation.status.idle) {
          this.actions.stop({ canceled: true });
        }
        this.dragOperation.modifiers.forEach((modifier) => modifier.destroy());
        this.registry.destroy();
        this.collisionObserver.destroy();
      };
      var _a;
      const raw = config != null ? config : {};
      const plugins = resolveCustomizable(raw.plugins, []);
      const sensors = resolveCustomizable(raw.sensors, []);
      const modifiers = resolveCustomizable(raw.modifiers, []);
      const renderer = (_a = raw.renderer) != null ? _a : defaultRenderer;
      const monitor = new DragDropMonitor(this);
      const registry = new DragDropRegistry(this);
      this.registry = registry;
      this.monitor = monitor;
      this.renderer = renderer;
      this.actions = new DragActions(this);
      this.dragOperation = new DragOperation(this);
      this.collisionObserver = new CollisionObserver(this);
      this.plugins = [CollisionNotifier, ...plugins];
      this.modifiers = modifiers;
      this.sensors = sensors;
      const { destroy } = this;
      const cleanup = effects(() => {
        var _a2, _b, _c3;
        const currentModifiers = f3(() => this.dragOperation.modifiers);
        const managerModifiers = this.modifiers;
        for (const modifier of currentModifiers) {
          if (!managerModifiers.includes(modifier)) {
            modifier.destroy();
          }
        }
        this.dragOperation.modifiers = (_c3 = (_b = (_a2 = this.dragOperation.source) == null ? undefined : _a2.modifiers) == null ? undefined : _b.map((modifier) => {
          const { plugin, options } = descriptor(modifier);
          return new plugin(this, options);
        })) != null ? _c3 : managerModifiers;
      });
      this.destroy = () => {
        cleanup();
        destroy();
      };
    }
    get plugins() {
      return this.registry.plugins.values;
    }
    set plugins(plugins) {
      this.registry.plugins.values = plugins;
    }
    get modifiers() {
      return this.registry.modifiers.values;
    }
    set modifiers(modifiers) {
      this.registry.modifiers.values = modifiers;
    }
    get sensors() {
      return this.registry.sensors.values;
    }
    set sensors(sensors) {
      this.registry.sensors.values = sensors;
    }
  };

  // node_modules/@dnd-kit/dom/utilities.js
  var __typeError4 = (msg) => {
    throw TypeError(msg);
  };
  var __accessCheck4 = (obj, member, msg) => member.has(obj) || __typeError4("Cannot " + msg);
  var __privateGet4 = (obj, member, getter) => (__accessCheck4(obj, member, "read from private field"), member.get(obj));
  var __privateAdd4 = (obj, member, value) => member.has(obj) ? __typeError4("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
  var __privateSet4 = (obj, member, value, setter) => (__accessCheck4(obj, member, "write to private field"), member.set(obj, value), value);
  var __privateMethod4 = (obj, member, method) => (__accessCheck4(obj, member, "access private method"), method);
  function isKeyframeEffect(effect) {
    if (!effect)
      return false;
    if (effect instanceof KeyframeEffect)
      return true;
    return "getKeyframes" in effect && typeof effect.getKeyframes === "function";
  }
  function getFinalKeyframe(element, match) {
    const animations2 = element.getAnimations();
    let result = null;
    for (const animation of animations2) {
      if (animation.playState !== "running")
        continue;
      const { effect } = animation;
      const keyframes = isKeyframeEffect(effect) ? effect.getKeyframes() : [];
      const matchedKeyframes = keyframes.filter(match);
      if (matchedKeyframes.length > 0) {
        result = [matchedKeyframes[matchedKeyframes.length - 1], animation];
      }
    }
    return result;
  }
  function getBoundingRectangle(element) {
    const { width, height, top, left, bottom, right } = element.getBoundingClientRect();
    return { width, height, top, left, bottom, right };
  }
  function isWindow(element) {
    const elementString = Object.prototype.toString.call(element);
    return elementString === "[object Window]" || elementString === "[object global]";
  }
  function isNode(node) {
    return "nodeType" in node;
  }
  function getWindow(target) {
    var _a, _b, _c;
    if (!target) {
      return window;
    }
    if (isWindow(target)) {
      return target;
    }
    if (!isNode(target)) {
      return window;
    }
    if ("defaultView" in target) {
      return (_a = target.defaultView) != null ? _a : window;
    }
    return (_c = (_b = target.ownerDocument) == null ? undefined : _b.defaultView) != null ? _c : window;
  }
  function isDocument(node) {
    const { Document: Document2 } = getWindow(node);
    return node instanceof Document2 || "nodeType" in node && node.nodeType === Node.DOCUMENT_NODE;
  }
  function isHTMLElement(node) {
    if (!node || isWindow(node))
      return false;
    return node instanceof getWindow(node).HTMLElement || "namespaceURI" in node && typeof node.namespaceURI === "string" && node.namespaceURI.endsWith("html");
  }
  function isSVGElement(node) {
    return node instanceof getWindow(node).SVGElement || "namespaceURI" in node && typeof node.namespaceURI === "string" && node.namespaceURI.endsWith("svg");
  }
  function getDocument(target) {
    if (!target) {
      return document;
    }
    if (isWindow(target)) {
      return target.document;
    }
    if (!isNode(target)) {
      return document;
    }
    if (isDocument(target)) {
      return target;
    }
    if (isHTMLElement(target) || isSVGElement(target)) {
      return target.ownerDocument;
    }
    return document;
  }
  function getViewportBoundingRectangle(element) {
    var _a, _b, _c, _d;
    const { documentElement } = getDocument(element);
    const vv = getWindow(element).visualViewport;
    const width = (_a = vv == null ? undefined : vv.width) != null ? _a : documentElement.clientWidth;
    const height = (_b = vv == null ? undefined : vv.height) != null ? _b : documentElement.clientHeight;
    const top = (_c = vv == null ? undefined : vv.offsetTop) != null ? _c : 0;
    const left = (_d = vv == null ? undefined : vv.offsetLeft) != null ? _d : 0;
    return {
      top,
      left,
      right: left + width,
      bottom: top + height,
      width,
      height
    };
  }
  function isOverflowVisible(element, style) {
    if (isDetailsElement(element) && element.open === false) {
      return false;
    }
    const { overflow, overflowX, overflowY } = getComputedStyle(element);
    return overflow === "visible" && overflowX === "visible" && overflowY === "visible";
  }
  function isDetailsElement(element) {
    return element.tagName === "DETAILS";
  }
  function getVisibleBoundingRectangle(element, boundingClientRect = element.getBoundingClientRect(), margin = 0) {
    var _a, _b, _c, _d, _e;
    let rect = boundingClientRect;
    const { ownerDocument } = element;
    const ownerWindow = (_a = ownerDocument.defaultView) != null ? _a : window;
    let ancestor = element.parentElement;
    while (ancestor && ancestor !== ownerDocument.documentElement) {
      if (!isOverflowVisible(ancestor)) {
        const ancestorRect = ancestor.getBoundingClientRect();
        const marginTop = margin * (ancestorRect.bottom - ancestorRect.top);
        const marginRight = margin * (ancestorRect.right - ancestorRect.left);
        const marginBottom = margin * (ancestorRect.bottom - ancestorRect.top);
        const marginLeft = margin * (ancestorRect.right - ancestorRect.left);
        rect = {
          top: Math.max(rect.top, ancestorRect.top - marginTop),
          right: Math.min(rect.right, ancestorRect.right + marginRight),
          bottom: Math.min(rect.bottom, ancestorRect.bottom + marginBottom),
          left: Math.max(rect.left, ancestorRect.left - marginLeft),
          width: 0,
          height: 0
        };
        rect.width = rect.right - rect.left;
        rect.height = rect.bottom - rect.top;
      }
      ancestor = ancestor.parentElement;
    }
    const vv = ownerWindow.visualViewport;
    const viewportTop = (_b = vv == null ? undefined : vv.offsetTop) != null ? _b : 0;
    const viewportLeft = (_c = vv == null ? undefined : vv.offsetLeft) != null ? _c : 0;
    const viewportWidth = (_d = vv == null ? undefined : vv.width) != null ? _d : ownerWindow.innerWidth;
    const viewportHeight = (_e = vv == null ? undefined : vv.height) != null ? _e : ownerWindow.innerHeight;
    const viewportMarginY = margin * viewportHeight;
    const viewportMarginX = margin * viewportWidth;
    rect = {
      top: Math.max(rect.top, viewportTop - viewportMarginY),
      right: Math.min(rect.right, viewportLeft + viewportWidth + viewportMarginX),
      bottom: Math.min(rect.bottom, viewportTop + viewportHeight + viewportMarginY),
      left: Math.max(rect.left, viewportLeft - viewportMarginX),
      width: 0,
      height: 0
    };
    rect.width = rect.right - rect.left;
    rect.height = rect.bottom - rect.top;
    if (rect.width < 0) {
      rect.width = 0;
    }
    if (rect.height < 0) {
      rect.height = 0;
    }
    return rect;
  }
  function getEventCoordinates(event) {
    return {
      x: event.clientX,
      y: event.clientY
    };
  }
  var canUseDOM = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
  function getDocuments(rootDoc = document, seen = /* @__PURE__ */ new Set) {
    if (seen.has(rootDoc))
      return [];
    seen.add(rootDoc);
    const docs = [rootDoc];
    for (const frame of Array.from(rootDoc.querySelectorAll("iframe, frame"))) {
      try {
        const childDoc = frame.contentDocument;
        if (childDoc && !seen.has(childDoc)) {
          docs.push(...getDocuments(childDoc, seen));
        }
      } catch (e) {}
    }
    try {
      const win = rootDoc.defaultView;
      if (win && win !== window.top) {
        const parentWin = win.parent;
        if (parentWin && parentWin.document && parentWin.document !== rootDoc) {
          docs.push(...getDocuments(parentWin.document, seen));
        }
      }
    } catch (e) {}
    return docs;
  }
  function isSafari() {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  }
  function getFixedPositionOffset() {
    var _a, _b;
    const vv = isSafari() ? window.visualViewport : null;
    return {
      x: (_a = vv == null ? undefined : vv.offsetLeft) != null ? _a : 0,
      y: (_b = vv == null ? undefined : vv.offsetTop) != null ? _b : 0
    };
  }
  function isShadowRoot(target) {
    if (!target || !isNode(target))
      return false;
    return target instanceof getWindow(target).ShadowRoot;
  }
  function getRoot(target) {
    if (target && isNode(target)) {
      let root = target.getRootNode();
      if (isShadowRoot(root)) {
        return root;
      } else if (root instanceof Document) {
        return root;
      }
    }
    return getDocument(target);
  }
  function prefersReducedMotion(window2) {
    return window2.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }
  function cloneElement(element) {
    const selector = "input, textarea, select, canvas, [contenteditable]";
    const clonedElement = element.cloneNode(true);
    const fields = Array.from(element.querySelectorAll(selector));
    const clonedFields = Array.from(clonedElement.querySelectorAll(selector));
    clonedFields.forEach((field, index) => {
      const originalField = fields[index];
      if (isField(field) && isField(originalField)) {
        if (field.type !== "file") {
          field.value = originalField.value;
        }
        if (field.type === "radio" && field.name) {
          field.name = `Cloned__${field.name}`;
        }
      }
      if (isCanvasElement(field) && isCanvasElement(originalField) && originalField.width > 0 && originalField.height > 0) {
        const destCtx = field.getContext("2d");
        destCtx == null || destCtx.drawImage(originalField, 0, 0);
      }
    });
    return clonedElement;
  }
  function isField(element) {
    return "value" in element;
  }
  function isCanvasElement(element) {
    return element.tagName === "CANVAS";
  }
  function getElementFromPoint(root, { x, y }) {
    const element = root.elementFromPoint(x, y);
    if (isIFrameElement(element)) {
      const { contentDocument } = element;
      if (contentDocument) {
        const { left, top } = element.getBoundingClientRect();
        return getElementFromPoint(contentDocument, {
          x: x - left,
          y: y - top
        });
      }
    }
    return element;
  }
  function isIFrameElement(element) {
    return (element == null ? undefined : element.tagName) === "IFRAME";
  }
  var ProxiedElements = /* @__PURE__ */ new WeakMap;
  function getInteractiveElement(element) {
    return element.closest(`
    input:not([disabled]),
    select:not([disabled]),
    textarea:not([disabled]),
    button:not([disabled]),
    a[href],
    [contenteditable]:not([contenteditable="false"])
  `);
  }
  var Listeners = class {
    constructor() {
      this.entries = /* @__PURE__ */ new Set;
      this.clear = () => {
        for (const entry of this.entries) {
          const [target, { type, listener, options }] = entry;
          target.removeEventListener(type, listener, options);
        }
        this.entries.clear();
      };
    }
    bind(target, input) {
      const eventTargets = Array.isArray(target) ? target : [target];
      const listeners = Array.isArray(input) ? input : [input];
      const entries = [];
      for (const target2 of eventTargets) {
        for (const descriptor of listeners) {
          const { type, listener, options } = descriptor;
          const entry = [target2, descriptor];
          target2.addEventListener(type, listener, options);
          this.entries.add(entry);
          entries.push(entry);
        }
      }
      const allEntries = this.entries;
      return function cleanup() {
        for (const entry of entries) {
          const [target2, { type, listener, options }] = entry;
          target2.removeEventListener(type, listener, options);
          allEntries.delete(entry);
        }
      };
    }
  };
  function getFrameElement(el) {
    const refWindow = el == null ? undefined : el.ownerDocument.defaultView;
    if (refWindow && refWindow.self !== refWindow.parent) {
      return refWindow.frameElement;
    }
  }
  function getFrameElements(el) {
    const frames = /* @__PURE__ */ new Set;
    let frame = getFrameElement(el);
    while (frame) {
      frames.add(frame);
      frame = getFrameElement(frame);
    }
    return frames;
  }
  function timeout(callback, duration) {
    const id = setTimeout(callback, duration);
    return () => clearTimeout(id);
  }
  function throttle(func, limit) {
    const time = () => performance.now();
    let cancel;
    let lastRan;
    return function(...args) {
      const context = this;
      if (!lastRan) {
        func.apply(context, args);
        lastRan = time();
      } else {
        cancel == null || cancel();
        cancel = timeout(() => {
          func.apply(context, args);
          lastRan = time();
        }, limit - (time() - lastRan));
      }
    };
  }
  function isRectEqual(a, b) {
    if (a === b)
      return true;
    if (!a || !b)
      return false;
    return a.top == b.top && a.left == b.left && a.right == b.right && a.bottom == b.bottom;
  }
  function isVisible(element, boundingClientRect = element.getBoundingClientRect()) {
    const { width, height } = getVisibleBoundingRectangle(element, boundingClientRect);
    return width > 0 && height > 0;
  }
  var Observer = canUseDOM ? ResizeObserver : class MockResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
  var _initialized;
  var ResizeNotifier = class extends Observer {
    constructor(callback) {
      super((entries) => {
        if (!__privateGet4(this, _initialized)) {
          __privateSet4(this, _initialized, true);
          return;
        }
        callback(entries, this);
      });
      __privateAdd4(this, _initialized, false);
    }
  };
  _initialized = new WeakMap;
  var threshold = Array.from({ length: 100 }, (_, index) => index / 100);
  var THROTTLE_INTERVAL = 75;
  var _visible;
  var _previousBoundingClientRect;
  var _resizeObserver;
  var _positionObserver;
  var _visibilityObserver;
  var _debug;
  var _disconnected;
  var _observePosition;
  var _PositionObserver_instances;
  var notify_fn;
  var updateDebug_fn;
  var PositionObserver = class {
    constructor(element, callback, options = {
      debug: false,
      skipInitial: false
    }) {
      this.element = element;
      this.callback = callback;
      __privateAdd4(this, _PositionObserver_instances);
      this.disconnect = () => {
        var _a, _b, _c;
        __privateSet4(this, _disconnected, true);
        (_a = __privateGet4(this, _resizeObserver)) == null || _a.disconnect();
        (_b = __privateGet4(this, _positionObserver)) == null || _b.disconnect();
        __privateGet4(this, _visibilityObserver).disconnect();
        (_c = __privateGet4(this, _debug)) == null || _c.remove();
      };
      __privateAdd4(this, _visible, true);
      __privateAdd4(this, _previousBoundingClientRect);
      __privateAdd4(this, _resizeObserver);
      __privateAdd4(this, _positionObserver);
      __privateAdd4(this, _visibilityObserver);
      __privateAdd4(this, _debug);
      __privateAdd4(this, _disconnected, false);
      __privateAdd4(this, _observePosition, throttle(() => {
        var _a, _b, _c;
        const { element } = this;
        (_a = __privateGet4(this, _positionObserver)) == null || _a.disconnect();
        if (__privateGet4(this, _disconnected) || !__privateGet4(this, _visible) || !element.isConnected) {
          return;
        }
        const root = (_b = element.ownerDocument) != null ? _b : document;
        const { innerHeight, innerWidth } = (_c = root.defaultView) != null ? _c : window;
        const clientRect = element.getBoundingClientRect();
        const visibleRect = getVisibleBoundingRectangle(element, clientRect);
        const { top, left, bottom, right } = visibleRect;
        const insetTop = -Math.floor(top);
        const insetLeft = -Math.floor(left);
        const insetRight = -Math.floor(innerWidth - right);
        const insetBottom = -Math.floor(innerHeight - bottom);
        const rootMargin = `${insetTop}px ${insetRight}px ${insetBottom}px ${insetLeft}px`;
        this.boundingClientRect = clientRect;
        __privateSet4(this, _positionObserver, new IntersectionObserver((entries) => {
          const [entry] = entries;
          const { intersectionRect } = entry;
          const intersectionRatio = entry.intersectionRatio !== 1 ? entry.intersectionRatio : Rectangle.intersectionRatio(intersectionRect, getVisibleBoundingRectangle(element));
          if (intersectionRatio !== 1) {
            __privateGet4(this, _observePosition).call(this);
          }
        }, {
          threshold,
          rootMargin,
          root
        }));
        __privateGet4(this, _positionObserver).observe(element);
        __privateMethod4(this, _PositionObserver_instances, notify_fn).call(this);
      }, THROTTLE_INTERVAL));
      this.boundingClientRect = element.getBoundingClientRect();
      __privateSet4(this, _visible, isVisible(element, this.boundingClientRect));
      let initial = true;
      this.callback = (boundingClientRect) => {
        if (initial) {
          initial = false;
          if (options.skipInitial)
            return;
        }
        callback(boundingClientRect);
      };
      const root = element.ownerDocument;
      if (options == null ? undefined : options.debug) {
        __privateSet4(this, _debug, document.createElement("div"));
        __privateGet4(this, _debug).style.background = "rgba(0,0,0,0.15)";
        __privateGet4(this, _debug).style.position = "fixed";
        __privateGet4(this, _debug).style.pointerEvents = "none";
        root.body.appendChild(__privateGet4(this, _debug));
      }
      __privateSet4(this, _visibilityObserver, new IntersectionObserver((entries) => {
        var _a, _b;
        const entry = entries[entries.length - 1];
        const { boundingClientRect, isIntersecting: visible } = entry;
        const { width, height } = boundingClientRect;
        const previousVisible = __privateGet4(this, _visible);
        __privateSet4(this, _visible, visible);
        if (!width && !height)
          return;
        if (previousVisible && !visible) {
          (_a = __privateGet4(this, _positionObserver)) == null || _a.disconnect();
          this.callback(null);
          (_b = __privateGet4(this, _resizeObserver)) == null || _b.disconnect();
          __privateSet4(this, _resizeObserver, undefined);
          if (__privateGet4(this, _debug))
            __privateGet4(this, _debug).style.visibility = "hidden";
        } else {
          __privateGet4(this, _observePosition).call(this);
        }
        if (visible && !__privateGet4(this, _resizeObserver)) {
          __privateSet4(this, _resizeObserver, new ResizeNotifier(__privateGet4(this, _observePosition)));
          __privateGet4(this, _resizeObserver).observe(element);
        }
      }, {
        threshold,
        root
      }));
      if (__privateGet4(this, _visible) && !options.skipInitial) {
        this.callback(this.boundingClientRect);
      }
      __privateGet4(this, _visibilityObserver).observe(element);
    }
  };
  _visible = new WeakMap;
  _previousBoundingClientRect = new WeakMap;
  _resizeObserver = new WeakMap;
  _positionObserver = new WeakMap;
  _visibilityObserver = new WeakMap;
  _debug = new WeakMap;
  _disconnected = new WeakMap;
  _observePosition = new WeakMap;
  _PositionObserver_instances = new WeakSet;
  notify_fn = function() {
    if (__privateGet4(this, _disconnected))
      return;
    __privateMethod4(this, _PositionObserver_instances, updateDebug_fn).call(this);
    if (isRectEqual(this.boundingClientRect, __privateGet4(this, _previousBoundingClientRect)))
      return;
    this.callback(this.boundingClientRect);
    __privateSet4(this, _previousBoundingClientRect, this.boundingClientRect);
  };
  updateDebug_fn = function() {
    if (__privateGet4(this, _debug)) {
      const { top, left, width, height } = getVisibleBoundingRectangle(this.element);
      __privateGet4(this, _debug).style.overflow = "hidden";
      __privateGet4(this, _debug).style.visibility = "visible";
      __privateGet4(this, _debug).style.top = `${Math.floor(top)}px`;
      __privateGet4(this, _debug).style.left = `${Math.floor(left)}px`;
      __privateGet4(this, _debug).style.width = `${Math.floor(width)}px`;
      __privateGet4(this, _debug).style.height = `${Math.floor(height)}px`;
    }
  };
  var framePositionObservers = /* @__PURE__ */ new WeakMap;
  var scrollListeners = /* @__PURE__ */ new WeakMap;
  function addFrameListener(frame, callback) {
    let cached = framePositionObservers.get(frame);
    if (!cached) {
      const observer = new PositionObserver(frame, (boundingClientRect) => {
        const cached2 = framePositionObservers.get(frame);
        if (!cached2)
          return;
        cached2.callbacks.forEach((callback2) => callback2(boundingClientRect));
      }, { skipInitial: true });
      cached = { disconnect: observer.disconnect, callbacks: /* @__PURE__ */ new Set };
    }
    cached.callbacks.add(callback);
    framePositionObservers.set(frame, cached);
    return () => {
      cached.callbacks.delete(callback);
      if (cached.callbacks.size === 0) {
        framePositionObservers.delete(frame);
        cached.disconnect();
      }
    };
  }
  function observeParentFrames(frames, callback) {
    const cleanup = /* @__PURE__ */ new Set;
    for (const frame of frames) {
      const remove = addFrameListener(frame, callback);
      cleanup.add(remove);
    }
    return () => cleanup.forEach((remove) => remove());
  }
  function addScrollListener(element, callback) {
    var _a;
    const doc = element.ownerDocument;
    if (!scrollListeners.has(doc)) {
      const controller = new AbortController;
      const listeners2 = /* @__PURE__ */ new Set;
      document.addEventListener("scroll", (event) => listeners2.forEach((listener) => listener(event)), {
        capture: true,
        passive: true,
        signal: controller.signal
      });
      scrollListeners.set(doc, { disconnect: () => controller.abort(), listeners: listeners2 });
    }
    const { listeners, disconnect } = (_a = scrollListeners.get(doc)) != null ? _a : {};
    if (!listeners || !disconnect)
      return () => {};
    listeners.add(callback);
    return () => {
      listeners.delete(callback);
      if (listeners.size === 0) {
        disconnect();
        scrollListeners.delete(doc);
      }
    };
  }
  var _elementObserver;
  var _disconnected2;
  var _frames;
  var _handleScroll;
  var FrameObserver = class {
    constructor(element, callback, options) {
      this.callback = callback;
      __privateAdd4(this, _elementObserver);
      __privateAdd4(this, _disconnected2, false);
      __privateAdd4(this, _frames);
      __privateAdd4(this, _handleScroll, throttle((event) => {
        if (__privateGet4(this, _disconnected2))
          return;
        if (!event.target)
          return;
        if ("contains" in event.target && typeof event.target.contains === "function") {
          for (const frame of __privateGet4(this, _frames)) {
            if (event.target.contains(frame)) {
              this.callback(__privateGet4(this, _elementObserver).boundingClientRect);
              break;
            }
          }
        }
      }, THROTTLE_INTERVAL));
      const frames = getFrameElements(element);
      const unobserveParentFrames = observeParentFrames(frames, callback);
      const removeScrollListener = addScrollListener(element, __privateGet4(this, _handleScroll));
      __privateSet4(this, _frames, frames);
      __privateSet4(this, _elementObserver, new PositionObserver(element, callback, options));
      this.disconnect = () => {
        if (__privateGet4(this, _disconnected2))
          return;
        __privateSet4(this, _disconnected2, true);
        unobserveParentFrames();
        removeScrollListener();
        __privateGet4(this, _elementObserver).disconnect();
      };
    }
  };
  _elementObserver = new WeakMap;
  _disconnected2 = new WeakMap;
  _frames = new WeakMap;
  _handleScroll = new WeakMap;
  function supportsPopover(element) {
    return "showPopover" in element && "hidePopover" in element && typeof element.showPopover === "function" && typeof element.hidePopover === "function";
  }
  function showPopover(element) {
    try {
      if (supportsPopover(element) && element.isConnected && element.hasAttribute("popover") && !element.matches(":popover-open")) {
        element.showPopover();
      }
    } catch (error) {}
  }
  function isDocumentScrollingElement(element) {
    if (!canUseDOM || !element) {
      return false;
    }
    return element === getDocument(element).scrollingElement;
  }
  function getScrollPosition(scrollableElement) {
    var _a, _b;
    const window2 = getWindow(scrollableElement);
    const rect = isDocumentScrollingElement(scrollableElement) ? getViewportBoundingRectangle(scrollableElement) : getBoundingRectangle(scrollableElement);
    const vv = window2.visualViewport;
    const dimensions = isDocumentScrollingElement(scrollableElement) ? {
      height: (_a = vv == null ? undefined : vv.height) != null ? _a : window2.innerHeight,
      width: (_b = vv == null ? undefined : vv.width) != null ? _b : window2.innerWidth
    } : {
      height: scrollableElement.clientHeight,
      width: scrollableElement.clientWidth
    };
    const position = {
      current: {
        x: scrollableElement.scrollLeft,
        y: scrollableElement.scrollTop
      },
      max: {
        x: scrollableElement.scrollWidth - dimensions.width,
        y: scrollableElement.scrollHeight - dimensions.height
      }
    };
    const isTop = position.current.y <= 0;
    const isLeft = position.current.x <= 0;
    const isBottom = position.current.y >= position.max.y;
    const isRight = position.current.x >= position.max.x;
    return {
      rect,
      position,
      isTop,
      isLeft,
      isBottom,
      isRight
    };
  }
  function canScroll(scrollableElement, by) {
    const { isTop, isBottom, isLeft, isRight, position } = getScrollPosition(scrollableElement);
    const { x, y } = by != null ? by : { x: 0, y: 0 };
    const top = !isTop && position.current.y + y > 0;
    const bottom = !isBottom && position.current.y + y < position.max.y;
    const left = !isLeft && position.current.x + x > 0;
    const right = !isRight && position.current.x + x < position.max.x;
    return {
      top,
      bottom,
      left,
      right,
      x: left || right,
      y: top || bottom
    };
  }
  var Scheduler = class {
    constructor(scheduler4) {
      this.scheduler = scheduler4;
      this.pending = false;
      this.tasks = /* @__PURE__ */ new Set;
      this.resolvers = /* @__PURE__ */ new Set;
      this.flush = () => {
        const { tasks, resolvers } = this;
        this.pending = false;
        this.tasks = /* @__PURE__ */ new Set;
        this.resolvers = /* @__PURE__ */ new Set;
        for (const task of tasks) {
          task();
        }
        for (const resolve of resolvers) {
          resolve();
        }
      };
    }
    schedule(task) {
      this.tasks.add(task);
      if (!this.pending) {
        this.pending = true;
        this.scheduler(this.flush);
      }
      return new Promise((resolve) => this.resolvers.add(resolve));
    }
  };
  var scheduler = new Scheduler((callback) => {
    if (typeof requestAnimationFrame === "function") {
      requestAnimationFrame(callback);
    } else {
      callback();
    }
  });
  var scheduler2 = new Scheduler((callback) => setTimeout(callback, 50));
  var cachedStyles = /* @__PURE__ */ new Map;
  var clear = cachedStyles.clear.bind(cachedStyles);
  function getComputedStyles(element, cached = false) {
    if (!cached)
      return computeStyles(element);
    let styles = cachedStyles.get(element);
    if (styles)
      return styles;
    styles = computeStyles(element);
    cachedStyles.set(element, styles);
    scheduler2.schedule(clear);
    return styles;
  }
  function computeStyles(element) {
    return getWindow(element).getComputedStyle(element);
  }
  function isFixed(node, computedStyle = getComputedStyles(node, true)) {
    return computedStyle.position === "fixed" || computedStyle.position === "sticky";
  }
  function isScrollable(element, computedStyle = getComputedStyles(element, true)) {
    const overflowRegex = /(auto|scroll|overlay)/;
    const properties = ["overflow", "overflowX", "overflowY"];
    return properties.some((property) => {
      const value = computedStyle[property];
      return typeof value === "string" ? overflowRegex.test(value) : false;
    });
  }
  var defaultOptions = {
    excludeElement: true,
    escapeShadowDOM: true
  };
  function getScrollableAncestors(element, options = defaultOptions) {
    const { limit, excludeElement, escapeShadowDOM } = options;
    const scrollParents = /* @__PURE__ */ new Set;
    function findScrollableAncestors(node) {
      if (limit != null && scrollParents.size >= limit) {
        return scrollParents;
      }
      if (!node) {
        return scrollParents;
      }
      if (isDocument(node) && node.scrollingElement != null && !scrollParents.has(node.scrollingElement)) {
        scrollParents.add(node.scrollingElement);
        return scrollParents;
      }
      if (escapeShadowDOM && isShadowRoot(node)) {
        return findScrollableAncestors(node.host);
      }
      if (!isHTMLElement(node)) {
        if (isSVGElement(node)) {
          return findScrollableAncestors(node.parentElement);
        }
        return scrollParents;
      }
      if (scrollParents.has(node)) {
        return scrollParents;
      }
      const computedStyle = getComputedStyles(node, true);
      if (excludeElement && node === element)
        ;
      else if (isScrollable(node, computedStyle)) {
        scrollParents.add(node);
      }
      if (isFixed(node, computedStyle)) {
        const { scrollingElement } = node.ownerDocument;
        if (scrollingElement)
          scrollParents.add(scrollingElement);
        return scrollParents;
      }
      return findScrollableAncestors(node.parentNode);
    }
    if (!element) {
      return scrollParents;
    }
    return findScrollableAncestors(element);
  }
  function getFrameTransform(el, boundary = window.frameElement) {
    const transform = {
      x: 0,
      y: 0,
      scaleX: 1,
      scaleY: 1
    };
    if (!el)
      return transform;
    let frame = getFrameElement(el);
    while (frame) {
      if (frame === boundary) {
        return transform;
      }
      const rect = getBoundingRectangle(frame);
      const { x: scaleX, y: scaleY } = getScale(frame, rect);
      transform.x = transform.x + rect.left;
      transform.y = transform.y + rect.top;
      transform.scaleX = transform.scaleX * scaleX;
      transform.scaleY = transform.scaleY * scaleY;
      frame = getFrameElement(frame);
    }
    return transform;
  }
  function getScale(element, boundingRectangle = getBoundingRectangle(element)) {
    const width = Math.round(boundingRectangle.width);
    const height = Math.round(boundingRectangle.height);
    if (isHTMLElement(element)) {
      return {
        x: width / element.offsetWidth,
        y: height / element.offsetHeight
      };
    }
    const styles = getComputedStyles(element, true);
    return {
      x: (parseFloat(styles.width) || width) / width,
      y: (parseFloat(styles.height) || height) / height
    };
  }
  function parseScale(scale) {
    if (!scale || scale === "none") {
      return null;
    }
    const values = scale.split(" ");
    const x = parseFloat(values[0]);
    const y = parseFloat(values[1]);
    if (isNaN(x) && isNaN(y)) {
      return null;
    }
    return {
      x: isNaN(x) ? y : x,
      y: isNaN(y) ? x : y
    };
  }
  function parseTranslate(translate) {
    if (!translate || translate === "none") {
      return null;
    }
    const [x, y, z = "0"] = translate.split(" ");
    const output = { x: parseFloat(x), y: parseFloat(y), z: parseInt(z, 10) };
    if (isNaN(output.x) && isNaN(output.y)) {
      return null;
    }
    return {
      x: isNaN(output.x) ? 0 : output.x,
      y: isNaN(output.y) ? 0 : output.y,
      z: isNaN(output.z) ? 0 : output.z
    };
  }
  function parseTransform(computedStyles) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    const { scale, transform, translate } = computedStyles;
    const parsedScale = parseScale(scale);
    const parsedTranslate = parseTranslate(translate);
    const parsedMatrix = parseTransformMatrix(transform);
    if (!parsedMatrix && !parsedScale && !parsedTranslate) {
      return null;
    }
    const normalizedScale = {
      x: (_a = parsedScale == null ? undefined : parsedScale.x) != null ? _a : 1,
      y: (_b = parsedScale == null ? undefined : parsedScale.y) != null ? _b : 1
    };
    const normalizedTranslate = {
      x: (_c = parsedTranslate == null ? undefined : parsedTranslate.x) != null ? _c : 0,
      y: (_d = parsedTranslate == null ? undefined : parsedTranslate.y) != null ? _d : 0
    };
    const normalizedMatrix = {
      x: (_e = parsedMatrix == null ? undefined : parsedMatrix.x) != null ? _e : 0,
      y: (_f = parsedMatrix == null ? undefined : parsedMatrix.y) != null ? _f : 0,
      scaleX: (_g = parsedMatrix == null ? undefined : parsedMatrix.scaleX) != null ? _g : 1,
      scaleY: (_h = parsedMatrix == null ? undefined : parsedMatrix.scaleY) != null ? _h : 1
    };
    return {
      x: normalizedTranslate.x + normalizedMatrix.x,
      y: normalizedTranslate.y + normalizedMatrix.y,
      z: (_i = parsedTranslate == null ? undefined : parsedTranslate.z) != null ? _i : 0,
      scaleX: normalizedScale.x * normalizedMatrix.scaleX,
      scaleY: normalizedScale.y * normalizedMatrix.scaleY
    };
  }
  function parseTransformMatrix(transform) {
    if (transform.startsWith("matrix3d(")) {
      const transformArray = transform.slice(9, -1).split(/, /);
      return {
        x: +transformArray[12],
        y: +transformArray[13],
        scaleX: +transformArray[0],
        scaleY: +transformArray[5]
      };
    } else if (transform.startsWith("matrix(")) {
      const transformArray = transform.slice(7, -1).split(/, /);
      return {
        x: +transformArray[4],
        y: +transformArray[5],
        scaleX: +transformArray[0],
        scaleY: +transformArray[3]
      };
    }
    return null;
  }
  var ScrollDirection = /* @__PURE__ */ ((ScrollDirection2) => {
    ScrollDirection2[ScrollDirection2["Idle"] = 0] = "Idle";
    ScrollDirection2[ScrollDirection2["Forward"] = 1] = "Forward";
    ScrollDirection2[ScrollDirection2["Reverse"] = -1] = "Reverse";
    return ScrollDirection2;
  })(ScrollDirection || {});
  var defaultThreshold = {
    x: 0.2,
    y: 0.2
  };
  var defaultTolerance = {
    x: 10,
    y: 10
  };
  function detectScrollIntent(scrollableElement, coordinates, intent, acceleration = 25, thresholdPercentage = defaultThreshold, tolerance = defaultTolerance) {
    const { x, y } = coordinates;
    const { rect, isTop, isBottom, isLeft, isRight } = getScrollPosition(scrollableElement);
    const frameTransform = getFrameTransform(scrollableElement);
    const computedStyles = getComputedStyles(scrollableElement, true);
    const parsedTransform = parseTransform(computedStyles);
    const isXAxisInverted = parsedTransform !== null ? (parsedTransform == null ? undefined : parsedTransform.scaleX) < 0 : false;
    const isYAxisInverted = parsedTransform !== null ? (parsedTransform == null ? undefined : parsedTransform.scaleY) < 0 : false;
    const scrollContainerRect = new Rectangle(rect.left * frameTransform.scaleX + frameTransform.x, rect.top * frameTransform.scaleY + frameTransform.y, rect.width * frameTransform.scaleX, rect.height * frameTransform.scaleY);
    const direction = {
      x: 0,
      y: 0
    };
    const speed = {
      x: 0,
      y: 0
    };
    const threshold2 = {
      height: scrollContainerRect.height * thresholdPercentage.y,
      width: scrollContainerRect.width * thresholdPercentage.x
    };
    if (threshold2.height > 0 && (!isTop || isYAxisInverted && !isBottom) && y <= scrollContainerRect.top + threshold2.height && (intent == null ? undefined : intent.y) !== 1 && x >= scrollContainerRect.left - tolerance.x && x <= scrollContainerRect.right + tolerance.x) {
      direction.y = isYAxisInverted ? 1 : -1;
      speed.y = acceleration * Math.abs((scrollContainerRect.top + threshold2.height - y) / threshold2.height);
    } else if (threshold2.height > 0 && (!isBottom || isYAxisInverted && !isTop) && y >= scrollContainerRect.bottom - threshold2.height && (intent == null ? undefined : intent.y) !== -1 && x >= scrollContainerRect.left - tolerance.x && x <= scrollContainerRect.right + tolerance.x) {
      direction.y = isYAxisInverted ? -1 : 1;
      speed.y = acceleration * Math.abs((scrollContainerRect.bottom - threshold2.height - y) / threshold2.height);
    }
    if (threshold2.width > 0 && (!isRight || isXAxisInverted && !isLeft) && x >= scrollContainerRect.right - threshold2.width && (intent == null ? undefined : intent.x) !== -1 && y >= scrollContainerRect.top - tolerance.y && y <= scrollContainerRect.bottom + tolerance.y) {
      direction.x = isXAxisInverted ? -1 : 1;
      speed.x = acceleration * Math.abs((scrollContainerRect.right - threshold2.width - x) / threshold2.width);
    } else if (threshold2.width > 0 && (!isLeft || isXAxisInverted && !isRight) && x <= scrollContainerRect.left + threshold2.width && (intent == null ? undefined : intent.x) !== 1 && y >= scrollContainerRect.top - tolerance.y && y <= scrollContainerRect.bottom + tolerance.y) {
      direction.x = isXAxisInverted ? 1 : -1;
      speed.x = acceleration * Math.abs((scrollContainerRect.left + threshold2.width - x) / threshold2.width);
    }
    return {
      direction,
      speed
    };
  }
  function scrollIntoViewIfNeeded(el, { block = "nearest", inline = "nearest" } = {}) {
    if (!isHTMLElement(el)) {
      return;
    }
    const scrollableAncestors = getScrollableAncestors(el);
    const processedAncestors = [];
    for (const ancestor of scrollableAncestors) {
      if (!isHTMLElement(ancestor)) {
        continue;
      }
      const { top, left } = getOffsetRelativeTo(el, ancestor);
      let adjustedTop = top;
      let adjustedLeft = left;
      for (const inner of processedAncestors) {
        adjustedTop -= inner.scrollTop;
        adjustedLeft -= inner.scrollLeft;
      }
      if (block !== "none") {
        const overTop = adjustedTop < ancestor.scrollTop;
        const overBottom = adjustedTop + el.offsetHeight > ancestor.scrollTop + ancestor.clientHeight;
        if (overTop !== overBottom) {
          if (block === "center") {
            ancestor.scrollTop = adjustedTop - ancestor.clientHeight / 2 + el.offsetHeight / 2;
          } else if (overTop) {
            ancestor.scrollTop = adjustedTop;
          } else {
            ancestor.scrollTop = adjustedTop + el.offsetHeight - ancestor.clientHeight;
          }
        }
      }
      if (inline !== "none") {
        const overLeft = adjustedLeft < ancestor.scrollLeft;
        const overRight = adjustedLeft + el.offsetWidth > ancestor.scrollLeft + ancestor.clientWidth;
        if (overLeft !== overRight) {
          if (inline === "center") {
            ancestor.scrollLeft = adjustedLeft - ancestor.clientWidth / 2 + el.offsetWidth / 2;
          } else if (overLeft) {
            ancestor.scrollLeft = adjustedLeft;
          } else {
            ancestor.scrollLeft = adjustedLeft + el.offsetWidth - ancestor.clientWidth;
          }
        }
      }
      processedAncestors.push(ancestor);
    }
  }
  function getDocumentOffset(element) {
    let top = 0;
    let left = 0;
    let current = element;
    while (current) {
      top += current.offsetTop;
      left += current.offsetLeft;
      const offsetParent = current.offsetParent;
      if (!isHTMLElement(offsetParent)) {
        break;
      }
      top += offsetParent.clientTop;
      left += offsetParent.clientLeft;
      current = offsetParent;
    }
    return { top, left };
  }
  function getOffsetRelativeTo(element, ancestor) {
    const elOffset = getDocumentOffset(element);
    const ancestorOffset = getDocumentOffset(ancestor);
    return {
      top: elOffset.top - ancestorOffset.top - ancestor.clientTop,
      left: elOffset.left - ancestorOffset.left - ancestor.clientLeft
    };
  }
  function applyTransform(rect, parsedTransform, transformOrigin) {
    const { scaleX, scaleY, x: translateX, y: translateY } = parsedTransform;
    const x = rect.left + translateX + (1 - scaleX) * parseFloat(transformOrigin);
    const y = rect.top + translateY + (1 - scaleY) * parseFloat(transformOrigin.slice(transformOrigin.indexOf(" ") + 1));
    const w = scaleX ? rect.width * scaleX : rect.width;
    const h = scaleY ? rect.height * scaleY : rect.height;
    return {
      width: w,
      height: h,
      top: y,
      right: x + w,
      bottom: y + h,
      left: x
    };
  }
  function inverseTransform(rect, parsedTransform, transformOrigin) {
    const { scaleX, scaleY, x: translateX, y: translateY } = parsedTransform;
    const x = rect.left - translateX - (1 - scaleX) * parseFloat(transformOrigin);
    const y = rect.top - translateY - (1 - scaleY) * parseFloat(transformOrigin.slice(transformOrigin.indexOf(" ") + 1));
    const w = scaleX ? rect.width / scaleX : rect.width;
    const h = scaleY ? rect.height / scaleY : rect.height;
    return {
      width: w,
      height: h,
      top: y,
      right: x + w,
      bottom: y + h,
      left: x
    };
  }
  function animateTransform({ element, keyframes, options }) {
    return element.animate(keyframes, options).finished;
  }
  var scheduler3 = new Scheduler((callback) => setTimeout(callback, 0));
  var animations = /* @__PURE__ */ new Map;
  var clear2 = animations.clear.bind(animations);
  function getDocumentAnimations(element) {
    const document2 = element.ownerDocument;
    let documentAnimations = animations.get(document2);
    if (documentAnimations)
      return documentAnimations;
    documentAnimations = document2.getAnimations();
    animations.set(document2, documentAnimations);
    scheduler3.schedule(clear2);
    const elementAnimations = documentAnimations.filter((animation) => isKeyframeEffect(animation.effect) && animation.effect.target === element);
    animations.set(element, elementAnimations);
    return documentAnimations;
  }
  function forceFinishAnimations(element, options) {
    const animations2 = getDocumentAnimations(element).filter((animation) => {
      var _a, _b;
      if (isKeyframeEffect(animation.effect)) {
        const { target } = animation.effect;
        const isValidTarget = (_b = target && ((_a = options.isValidTarget) == null ? undefined : _a.call(options, target))) != null ? _b : true;
        if (isValidTarget) {
          return animation.effect.getKeyframes().some((keyframe) => {
            for (const property of options.properties) {
              if (keyframe[property])
                return true;
            }
          });
        }
      }
    }).map((animation) => {
      const { effect, currentTime } = animation;
      const duration = effect == null ? undefined : effect.getComputedTiming().duration;
      if (animation.pending || animation.playState === "finished")
        return;
      if (typeof duration == "number" && typeof currentTime == "number" && currentTime < duration) {
        animation.currentTime = duration;
        return () => {
          animation.currentTime = currentTime;
        };
      }
    });
    if (animations2.length > 0) {
      return () => animations2.forEach((reset) => reset == null ? undefined : reset());
    }
  }
  var DOMRectangle = class extends Rectangle {
    constructor(element, options = {}) {
      var _a, _b, _c, _d;
      const {
        frameTransform = getFrameTransform(element),
        ignoreTransforms,
        getBoundingClientRect = getBoundingRectangle
      } = options;
      const resetAnimations = forceFinishAnimations(element, {
        properties: ["transform", "translate", "scale", "width", "height"],
        isValidTarget: (target) => (target !== element || isSafari()) && target.contains(element)
      });
      const boundingRectangle = getBoundingClientRect(element);
      let { top, left, width, height } = boundingRectangle;
      let updated;
      const computedStyles = getComputedStyles(element);
      const parsedTransform = parseTransform(computedStyles);
      const scale = {
        x: (_a = parsedTransform == null ? undefined : parsedTransform.scaleX) != null ? _a : 1,
        y: (_b = parsedTransform == null ? undefined : parsedTransform.scaleY) != null ? _b : 1
      };
      const projectedTransform = getProjectedTransform(element, computedStyles);
      resetAnimations == null || resetAnimations();
      if (parsedTransform) {
        updated = inverseTransform(boundingRectangle, parsedTransform, computedStyles.transformOrigin);
        if (ignoreTransforms || projectedTransform) {
          top = updated.top;
          left = updated.left;
          width = updated.width;
          height = updated.height;
        }
      }
      const intrinsic = {
        width: (_c = updated == null ? undefined : updated.width) != null ? _c : width,
        height: (_d = updated == null ? undefined : updated.height) != null ? _d : height
      };
      if (projectedTransform && !ignoreTransforms && updated) {
        const projected = applyTransform(updated, projectedTransform, computedStyles.transformOrigin);
        top = projected.top;
        left = projected.left;
        width = projected.width;
        height = projected.height;
        scale.x = projectedTransform.scaleX;
        scale.y = projectedTransform.scaleY;
      }
      if (frameTransform) {
        if (!ignoreTransforms) {
          left *= frameTransform.scaleX;
          width *= frameTransform.scaleX;
          top *= frameTransform.scaleY;
          height *= frameTransform.scaleY;
        }
        left += frameTransform.x;
        top += frameTransform.y;
      }
      super(left, top, width, height);
      this.scale = scale;
      this.intrinsicWidth = intrinsic.width;
      this.intrinsicHeight = intrinsic.height;
    }
  };
  function getProjectedTransform(element, computedStyles) {
    const animations2 = element.getAnimations();
    if (!animations2.length)
      return null;
    let latestTransform;
    let latestTranslate;
    let latestScale;
    let hasAnimatedProperty = false;
    for (const animation of animations2) {
      if (animation.playState !== "running")
        continue;
      const keyframes = isKeyframeEffect(animation.effect) ? animation.effect.getKeyframes() : [];
      const keyframe = keyframes[keyframes.length - 1];
      if (!keyframe)
        continue;
      const { transform, translate, scale } = keyframe;
      if (typeof transform === "string" && transform) {
        latestTransform = transform;
        hasAnimatedProperty = true;
      }
      if (typeof translate === "string" && translate) {
        latestTranslate = translate;
        hasAnimatedProperty = true;
      }
      if (typeof scale === "string" && scale) {
        latestScale = scale;
        hasAnimatedProperty = true;
      }
    }
    if (!hasAnimatedProperty)
      return null;
    return parseTransform({
      transform: latestTransform != null ? latestTransform : computedStyles.transform,
      translate: latestTranslate != null ? latestTranslate : computedStyles.translate,
      scale: latestScale != null ? latestScale : computedStyles.scale
    });
  }
  function supportsStyle(element) {
    return "style" in element && typeof element.style === "object" && element.style !== null && "setProperty" in element.style && "removeProperty" in element.style && typeof element.style.setProperty === "function" && typeof element.style.removeProperty === "function";
  }
  var Styles = class {
    constructor(element) {
      this.element = element;
      this.initial = /* @__PURE__ */ new Map;
    }
    set(properties, prefix = "") {
      const { element } = this;
      if (!supportsStyle(element)) {
        return;
      }
      for (const [key, value] of Object.entries(properties)) {
        const property = `${prefix}${key}`;
        if (!this.initial.has(property)) {
          this.initial.set(property, element.style.getPropertyValue(property));
        }
        element.style.setProperty(property, typeof value === "string" ? value : `${value}px`);
      }
    }
    remove(properties, prefix = "") {
      const { element } = this;
      if (!supportsStyle(element)) {
        return;
      }
      for (const key of properties) {
        const property = `${prefix}${key}`;
        element.style.removeProperty(property);
      }
    }
    reset() {
      const { element } = this;
      if (!supportsStyle(element)) {
        return;
      }
      for (const [key, value] of this.initial) {
        element.style.setProperty(key, value);
      }
      if (element.getAttribute("style") === "") {
        element.removeAttribute("style");
      }
    }
  };
  function isElement(target) {
    if (!target)
      return false;
    return target instanceof getWindow(target).Element || isNode(target) && target.nodeType === Node.ELEMENT_NODE;
  }
  function isKeyboardEvent(event) {
    if (!event)
      return false;
    const { KeyboardEvent } = getWindow(event.target);
    return event instanceof KeyboardEvent;
  }
  function isPointerEvent(event) {
    if (!event)
      return false;
    const { PointerEvent } = getWindow(event.target);
    return event instanceof PointerEvent;
  }
  function isTextInput(target) {
    if (!isElement(target))
      return false;
    const { tagName } = target;
    return tagName === "INPUT" || tagName === "TEXTAREA" || isContentEditable(target);
  }
  function isContentEditable(element) {
    return element.hasAttribute("contenteditable") && element.getAttribute("contenteditable") !== "false";
  }
  var ids = {};
  function generateUniqueId(prefix) {
    const id = ids[prefix] == null ? 0 : ids[prefix] + 1;
    ids[prefix] = id;
    return `${prefix}-${id}`;
  }

  // node_modules/@dnd-kit/collision/dist/index.js
  var pointerIntersection = ({
    dragOperation,
    droppable
  }) => {
    const pointerCoordinates = dragOperation.position.current;
    if (!pointerCoordinates) {
      return null;
    }
    const { id } = droppable;
    if (!droppable.shape) {
      return null;
    }
    if (droppable.shape.containsPoint(pointerCoordinates)) {
      const distance = Point.distance(droppable.shape.center, pointerCoordinates);
      return {
        id,
        value: 1 / distance,
        type: CollisionType.PointerIntersection,
        priority: CollisionPriority.High
      };
    }
    return null;
  };
  var shapeIntersection = ({
    dragOperation,
    droppable
  }) => {
    const { shape } = dragOperation;
    if (!droppable.shape || !(shape == null ? undefined : shape.current)) {
      return null;
    }
    const intersectionArea = shape.current.intersectionArea(droppable.shape);
    if (intersectionArea) {
      const { position } = dragOperation;
      const distance = Point.distance(droppable.shape.center, position.current);
      const intersectionRatio = intersectionArea / (shape.current.area + droppable.shape.area - intersectionArea);
      const value = intersectionRatio / distance;
      return {
        id: droppable.id,
        value,
        type: CollisionType.ShapeIntersection,
        priority: CollisionPriority.Normal
      };
    }
    return null;
  };
  var defaultCollisionDetection = (args) => {
    var _a;
    return (_a = pointerIntersection(args)) != null ? _a : shapeIntersection(args);
  };

  // node_modules/@dnd-kit/dom/index.js
  var __create4 = Object.create;
  var __defProp4 = Object.defineProperty;
  var __defProps3 = Object.defineProperties;
  var __getOwnPropDesc4 = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs3 = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols4 = Object.getOwnPropertySymbols;
  var __hasOwnProp4 = Object.prototype.hasOwnProperty;
  var __propIsEnum4 = Object.prototype.propertyIsEnumerable;
  var __knownSymbol4 = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
  var __typeError5 = (msg) => {
    throw TypeError(msg);
  };
  var __defNormalProp4 = (obj, key, value) => (key in obj) ? __defProp4(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues4 = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp4.call(b, prop))
        __defNormalProp4(a, prop, b[prop]);
    if (__getOwnPropSymbols4)
      for (var prop of __getOwnPropSymbols4(b)) {
        if (__propIsEnum4.call(b, prop))
          __defNormalProp4(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps3 = (a, b) => __defProps3(a, __getOwnPropDescs3(b));
  var __name4 = (target, value) => __defProp4(target, "name", { value, configurable: true });
  var __objRest2 = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp4.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols4)
      for (var prop of __getOwnPropSymbols4(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum4.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  var __decoratorStart4 = (base) => {
    var _a5;
    return [, , , __create4((_a5 = base == null ? undefined : base[__knownSymbol4("metadata")]) != null ? _a5 : null)];
  };
  var __decoratorStrings4 = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
  var __expectFn4 = (fn) => fn !== undefined && typeof fn !== "function" ? __typeError5("Function expected") : fn;
  var __decoratorContext4 = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings4[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError5("Already initialized") : fns.push(__expectFn4(fn || null)) });
  var __decoratorMetadata4 = (array, target) => __defNormalProp4(target, __knownSymbol4("metadata"), array[3]);
  var __runInitializers4 = (array, flags, self, value) => {
    for (var i = 0, fns = array[flags >> 1], n = fns && fns.length;i < n; i++)
      flags & 1 ? fns[i].call(self) : value = fns[i].call(self, value);
    return value;
  };
  var __decorateElement4 = (array, flags, name, decorators, target, extra) => {
    var fn, it, done, ctx, access, k = flags & 7, s = !!(flags & 8), p = !!(flags & 16);
    var j = k > 3 ? array.length + 1 : k ? s ? 1 : 2 : 0, key = __decoratorStrings4[k + 5];
    var initializers = k > 3 && (array[j - 1] = []), extraInitializers = array[j] || (array[j] = []);
    var desc = k && (!p && !s && (target = target.prototype), k < 5 && (k > 3 || !p) && __getOwnPropDesc4(k < 4 ? target : { get [name]() {
      return __privateGet5(this, extra);
    }, set [name](x) {
      return __privateSet5(this, extra, x);
    } }, name));
    k ? p && k < 4 && __name4(extra, (k > 2 ? "set " : k > 1 ? "get " : "") + name) : __name4(target, name);
    for (var i = decorators.length - 1;i >= 0; i--) {
      ctx = __decoratorContext4(k, name, done = {}, array[3], extraInitializers);
      if (k) {
        ctx.static = s, ctx.private = p, access = ctx.access = { has: p ? (x) => __privateIn4(target, x) : (x) => (name in x) };
        if (k ^ 3)
          access.get = p ? (x) => (k ^ 1 ? __privateGet5 : __privateMethod5)(x, target, k ^ 4 ? extra : desc.get) : (x) => x[name];
        if (k > 2)
          access.set = p ? (x, y) => __privateSet5(x, target, y, k ^ 4 ? extra : desc.set) : (x, y) => x[name] = y;
      }
      it = (0, decorators[i])(k ? k < 4 ? p ? extra : desc[key] : k > 4 ? undefined : { get: desc.get, set: desc.set } : target, ctx), done._ = 1;
      if (k ^ 4 || it === undefined)
        __expectFn4(it) && (k > 4 ? initializers.unshift(it) : k ? p ? extra = it : desc[key] = it : target = it);
      else if (typeof it !== "object" || it === null)
        __typeError5("Object expected");
      else
        __expectFn4(fn = it.get) && (desc.get = fn), __expectFn4(fn = it.set) && (desc.set = fn), __expectFn4(fn = it.init) && initializers.unshift(fn);
    }
    return k || __decoratorMetadata4(array, target), desc && __defProp4(target, name, desc), p ? k ^ 4 ? extra : desc : target;
  };
  var __accessCheck5 = (obj, member, msg) => member.has(obj) || __typeError5("Cannot " + msg);
  var __privateIn4 = (member, obj) => Object(obj) !== obj ? __typeError5('Cannot use the "in" operator on this value') : member.has(obj);
  var __privateGet5 = (obj, member, getter) => (__accessCheck5(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
  var __privateAdd5 = (obj, member, value) => member.has(obj) ? __typeError5("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
  var __privateSet5 = (obj, member, value, setter) => (__accessCheck5(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
  var __privateMethod5 = (obj, member, method) => (__accessCheck5(obj, member, "access private method"), method);
  var defaultAttributes = {
    role: "button",
    roleDescription: "draggable"
  };
  var defaultDescriptionIdPrefix = `dnd-kit-description`;
  var defaultAnnouncementIdPrefix = `dnd-kit-announcement`;
  var defaultScreenReaderInstructions = {
    draggable: `To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item in a given direction. Press space again to drop the item in its new position, or press escape to cancel.`
  };
  var defaultAnnouncements = {
    dragstart({ operation: { source } }) {
      if (!source)
        return;
      return `Picked up draggable item ${source.id}.`;
    },
    dragover({ operation: { source, target } }) {
      if (!source || source.id === (target == null ? undefined : target.id))
        return;
      if (target) {
        return `Draggable item ${source.id} was moved over droppable target ${target.id}.`;
      }
      return `Draggable item ${source.id} is no longer over a droppable target.`;
    },
    dragend({ operation: { source, target }, canceled }) {
      if (!source)
        return;
      if (canceled) {
        return `Dragging was cancelled. Draggable item ${source.id} was dropped.`;
      }
      if (target) {
        return `Draggable item ${source.id} was dropped over droppable target ${target.id}`;
      }
      return `Draggable item ${source.id} was dropped.`;
    }
  };
  function isFocusable(element) {
    const tagName = element.tagName.toLowerCase();
    return ["input", "select", "textarea", "a", "button"].includes(tagName);
  }
  function createHiddenText(id, value) {
    const element = document.createElement("div");
    element.id = id;
    element.style.setProperty("display", "none");
    element.textContent = value;
    return element;
  }
  function createLiveRegion(id) {
    const element = document.createElement("div");
    element.id = id;
    element.setAttribute("role", "status");
    element.setAttribute("aria-live", "polite");
    element.setAttribute("aria-atomic", "true");
    element.style.setProperty("position", "fixed");
    element.style.setProperty("width", "1px");
    element.style.setProperty("height", "1px");
    element.style.setProperty("margin", "-1px");
    element.style.setProperty("border", "0");
    element.style.setProperty("padding", "0");
    element.style.setProperty("overflow", "hidden");
    element.style.setProperty("clip", "rect(0 0 0 0)");
    element.style.setProperty("clip-path", "inset(100%)");
    element.style.setProperty("white-space", "nowrap");
    return element;
  }
  var debouncedEvents = ["dragover", "dragmove"];
  var Accessibility = class extends Plugin {
    constructor(manager, options) {
      super(manager);
      const {
        id,
        idPrefix: {
          description: descriptionPrefix = defaultDescriptionIdPrefix,
          announcement: announcementPrefix = defaultAnnouncementIdPrefix
        } = {},
        announcements = defaultAnnouncements,
        screenReaderInstructions = defaultScreenReaderInstructions,
        debounce: debounceMs = 500
      } = options != null ? options : {};
      const descriptionId = id ? `${descriptionPrefix}-${id}` : generateUniqueId(descriptionPrefix);
      const announcementId = id ? `${announcementPrefix}-${id}` : generateUniqueId(announcementPrefix);
      let hiddenTextElement;
      let liveRegionElement;
      let liveRegionTextNode;
      let latestAnnouncement;
      const updateAnnouncement = (value = latestAnnouncement) => {
        if (!liveRegionTextNode || !value)
          return;
        if ((liveRegionTextNode == null ? undefined : liveRegionTextNode.nodeValue) !== value) {
          liveRegionTextNode.nodeValue = value;
        }
      };
      const scheduleUpdateAnnouncement = () => scheduler.schedule(updateAnnouncement);
      const debouncedUpdateAnnouncement = debounce(scheduleUpdateAnnouncement, debounceMs);
      const eventListeners = Object.entries(announcements).map(([eventName, getAnnouncement]) => {
        return this.manager.monitor.addEventListener(eventName, (event, manager2) => {
          const element = liveRegionTextNode;
          if (!element)
            return;
          const announcement = getAnnouncement == null ? undefined : getAnnouncement(event, manager2);
          if (announcement && element.nodeValue !== announcement) {
            latestAnnouncement = announcement;
            if (debouncedEvents.includes(eventName)) {
              debouncedUpdateAnnouncement();
            } else {
              scheduleUpdateAnnouncement();
              debouncedUpdateAnnouncement.cancel();
            }
          }
        });
      });
      const initialize = () => {
        let elements = [];
        if (!(hiddenTextElement == null ? undefined : hiddenTextElement.isConnected)) {
          hiddenTextElement = createHiddenText(descriptionId, screenReaderInstructions.draggable);
          elements.push(hiddenTextElement);
        }
        if (!(liveRegionElement == null ? undefined : liveRegionElement.isConnected)) {
          liveRegionElement = createLiveRegion(announcementId);
          liveRegionTextNode = document.createTextNode("");
          liveRegionElement.appendChild(liveRegionTextNode);
          elements.push(liveRegionElement);
        }
        if (elements.length > 0) {
          document.body.append(...elements);
        }
      };
      const mutations = /* @__PURE__ */ new Set;
      function executeMutations() {
        for (const operation of mutations) {
          operation();
        }
      }
      this.registerEffect(() => {
        var _a5;
        mutations.clear();
        for (const draggable of this.manager.registry.draggables.value) {
          const activator = (_a5 = draggable.handle) != null ? _a5 : draggable.element;
          if (activator) {
            if (!hiddenTextElement || !liveRegionElement) {
              mutations.add(initialize);
            }
            if ((!isFocusable(activator) || isSafari()) && !activator.hasAttribute("tabindex")) {
              mutations.add(() => activator.setAttribute("tabindex", "0"));
            }
            if (!activator.hasAttribute("role") && !(activator.tagName.toLowerCase() === "button")) {
              mutations.add(() => activator.setAttribute("role", defaultAttributes.role));
            }
            if (!activator.hasAttribute("aria-roledescription")) {
              mutations.add(() => activator.setAttribute("aria-roledescription", defaultAttributes.roleDescription));
            }
            if (!activator.hasAttribute("aria-describedby")) {
              mutations.add(() => activator.setAttribute("aria-describedby", descriptionId));
            }
            for (const key of ["aria-pressed", "aria-grabbed"]) {
              const value = String(draggable.isDragging);
              if (activator.getAttribute(key) !== value) {
                mutations.add(() => activator.setAttribute(key, value));
              }
            }
            const disabled = String(draggable.disabled);
            if (activator.getAttribute("aria-disabled") !== disabled) {
              mutations.add(() => activator.setAttribute("aria-disabled", disabled));
            }
          }
        }
        if (mutations.size > 0) {
          scheduler.schedule(executeMutations);
        }
      });
      this.destroy = () => {
        super.destroy();
        hiddenTextElement == null || hiddenTextElement.remove();
        liveRegionElement == null || liveRegionElement.remove();
        eventListeners.forEach((unsubscribe) => unsubscribe());
      };
    }
  };
  function debounce(fn, wait) {
    let timeout;
    const debounced = () => {
      clearTimeout(timeout);
      timeout = setTimeout(fn, wait);
    };
    debounced.cancel = () => clearTimeout(timeout);
    return debounced;
  }
  var styleRegistry = /* @__PURE__ */ new Map;
  var _roots_dec;
  var _targetRoot_dec;
  var _sourceRoot_dec;
  var _additionalRoots_dec;
  var _a3;
  var _registeredRules;
  var _init7;
  var _additionalRoots;
  var _StyleInjector_instances;
  var syncStyles_fn;
  var inject_fn;
  var injectStyleElement_fn;
  var injectAdoptedSheet_fn;
  var _StyleInjector = class _StyleInjector extends (_a3 = CorePlugin, _additionalRoots_dec = [reactive], _sourceRoot_dec = [derived], _targetRoot_dec = [derived], _roots_dec = [derived], _a3) {
    constructor(manager, options) {
      super(manager, options);
      __runInitializers4(_init7, 5, this);
      __privateAdd5(this, _StyleInjector_instances);
      __privateAdd5(this, _registeredRules, /* @__PURE__ */ new Set);
      __privateAdd5(this, _additionalRoots, __runInitializers4(_init7, 8, this, /* @__PURE__ */ new Set)), __runInitializers4(_init7, 11, this);
      this.registerEffect(__privateMethod5(this, _StyleInjector_instances, syncStyles_fn));
    }
    register(cssRules) {
      __privateGet5(this, _registeredRules).add(cssRules);
      return () => {
        __privateGet5(this, _registeredRules).delete(cssRules);
      };
    }
    addRoot(root) {
      f3(() => {
        const roots = new Set(this.additionalRoots);
        roots.add(root);
        this.additionalRoots = roots;
      });
      return () => {
        f3(() => {
          const roots = new Set(this.additionalRoots);
          roots.delete(root);
          this.additionalRoots = roots;
        });
      };
    }
    get sourceRoot() {
      var _a5;
      const { source } = this.manager.dragOperation;
      return getRoot((_a5 = source == null ? undefined : source.element) != null ? _a5 : null);
    }
    get targetRoot() {
      var _a5;
      const { target } = this.manager.dragOperation;
      return getRoot((_a5 = target == null ? undefined : target.element) != null ? _a5 : null);
    }
    get roots() {
      const { status } = this.manager.dragOperation;
      if (status.initializing || status.initialized) {
        const roots = [this.sourceRoot, this.targetRoot].filter((root) => root != null);
        return /* @__PURE__ */ new Set([...roots, ...this.additionalRoots]);
      }
      return /* @__PURE__ */ new Set;
    }
  };
  _init7 = __decoratorStart4(_a3);
  _registeredRules = new WeakMap;
  _additionalRoots = new WeakMap;
  _StyleInjector_instances = new WeakSet;
  syncStyles_fn = function() {
    const { roots } = this;
    const cleanups = [];
    for (const root of roots) {
      for (const cssRules of __privateGet5(this, _registeredRules)) {
        cleanups.push(__privateMethod5(this, _StyleInjector_instances, inject_fn).call(this, root, cssRules));
      }
    }
    return () => {
      for (const cleanup of cleanups) {
        cleanup();
      }
    };
  };
  inject_fn = function(root, cssRules) {
    let rootStyles = styleRegistry.get(root);
    if (!rootStyles) {
      rootStyles = /* @__PURE__ */ new Map;
      styleRegistry.set(root, rootStyles);
    }
    let registration = rootStyles.get(cssRules);
    if (!registration) {
      const created = isDocument(root) ? __privateMethod5(this, _StyleInjector_instances, injectStyleElement_fn).call(this, root, rootStyles, cssRules) : __privateMethod5(this, _StyleInjector_instances, injectAdoptedSheet_fn).call(this, root, rootStyles, cssRules);
      if (!created) {
        return () => {};
      }
      registration = created;
      rootStyles.set(cssRules, registration);
    }
    registration.refCount++;
    let disposed = false;
    return () => {
      if (disposed)
        return;
      disposed = true;
      registration.refCount--;
      if (registration.refCount === 0) {
        registration.cleanup();
      }
    };
  };
  injectStyleElement_fn = function(root, rootStyles, cssRules) {
    var _a5;
    const style = root.createElement("style");
    const { nonce } = (_a5 = this.options) != null ? _a5 : {};
    if (nonce) {
      style.setAttribute("nonce", nonce);
    }
    style.textContent = cssRules;
    root.head.prepend(style);
    const observer = new MutationObserver((entries) => {
      for (const entry of entries) {
        for (const node of Array.from(entry.removedNodes)) {
          if (node === style) {
            root.head.prepend(style);
            return;
          }
        }
      }
    });
    observer.observe(root.head, { childList: true });
    return {
      refCount: 0,
      cleanup: () => {
        observer.disconnect();
        style.remove();
        rootStyles.delete(cssRules);
        if (rootStyles.size === 0) {
          styleRegistry.delete(root);
        }
      }
    };
  };
  injectAdoptedSheet_fn = function(root, rootStyles, cssRules) {
    if (!(("adoptedStyleSheets" in root) && Array.isArray(root.adoptedStyleSheets)) && true) {
      console.error("Cannot inject styles: This browser doesn't support adoptedStyleSheets");
    }
    const targetWindow = root.ownerDocument.defaultView;
    const { CSSStyleSheet } = targetWindow != null ? targetWindow : {};
    if (!CSSStyleSheet) {
      if (true) {
        console.error("Cannot inject styles: CSSStyleSheet constructor not available");
      }
      return null;
    }
    const sheet = new CSSStyleSheet;
    sheet.replaceSync(cssRules);
    root.adoptedStyleSheets.push(sheet);
    return {
      refCount: 0,
      cleanup: () => {
        var _a5;
        if (isShadowRoot(root) && ((_a5 = root.host) == null ? undefined : _a5.isConnected)) {
          const index = root.adoptedStyleSheets.indexOf(sheet);
          if (index !== -1) {
            root.adoptedStyleSheets.splice(index, 1);
          }
        }
        rootStyles.delete(cssRules);
        if (rootStyles.size === 0) {
          styleRegistry.delete(root);
        }
      }
    };
  };
  __decorateElement4(_init7, 4, "additionalRoots", _additionalRoots_dec, _StyleInjector, _additionalRoots);
  __decorateElement4(_init7, 2, "sourceRoot", _sourceRoot_dec, _StyleInjector);
  __decorateElement4(_init7, 2, "targetRoot", _targetRoot_dec, _StyleInjector);
  __decorateElement4(_init7, 2, "roots", _roots_dec, _StyleInjector);
  __decoratorMetadata4(_init7, _StyleInjector);
  _StyleInjector.configure = configurator(_StyleInjector);
  var StyleInjector = _StyleInjector;
  var Cursor = class extends Plugin {
    constructor(manager, options) {
      super(manager, options);
      this.manager = manager;
      const { cursor = "grabbing" } = options != null ? options : {};
      const styleInjector = manager.registry.plugins.get(StyleInjector);
      const unregisterStyles = styleInjector == null ? undefined : styleInjector.register(`* { cursor: ${cursor} !important; }`);
      if (unregisterStyles) {
        const originalDestroy = this.destroy.bind(this);
        this.destroy = () => {
          unregisterStyles();
          originalDestroy();
        };
      }
    }
  };
  var ATTR_PREFIX = "data-dnd-";
  var DROPPING_ATTRIBUTE = `${ATTR_PREFIX}dropping`;
  var CSS_PREFIX = "--dnd-";
  var ATTRIBUTE = `${ATTR_PREFIX}dragging`;
  var PLACEHOLDER_ATTRIBUTE = `${ATTR_PREFIX}placeholder`;
  var IGNORED_ATTRIBUTES = [
    ATTRIBUTE,
    PLACEHOLDER_ATTRIBUTE,
    "popover",
    "aria-pressed",
    "aria-grabbing"
  ];
  var IGNORED_STYLES = ["view-transition-name"];
  var CSS_RULES = `
  :is(:root,:host) [${ATTRIBUTE}] {
    position: fixed !important;
    pointer-events: none !important;
    touch-action: none;
    z-index: calc(infinity);
    will-change: translate;
    top: var(${CSS_PREFIX}top, 0px) !important;
    left: var(${CSS_PREFIX}left, 0px) !important;
    right: unset !important;
    bottom: unset !important;
    width: var(${CSS_PREFIX}width, auto);
    max-width: var(${CSS_PREFIX}width, auto);
    height: var(${CSS_PREFIX}height, auto);
    max-height: var(${CSS_PREFIX}height, auto);
    transform: var(${CSS_PREFIX}transform, none) !important;
    transition: var(${CSS_PREFIX}transition) !important;
  }

  :is(:root,:host) [${PLACEHOLDER_ATTRIBUTE}] {
    transition: none;
  }

  :is(:root,:host) [${PLACEHOLDER_ATTRIBUTE}='hidden'] {
    visibility: hidden;
  }

  [${ATTRIBUTE}] * {
    pointer-events: none !important;
  }

  [${ATTRIBUTE}]:not([${DROPPING_ATTRIBUTE}]) {
    translate: var(${CSS_PREFIX}translate) !important;
  }

  [${ATTRIBUTE}][style*='${CSS_PREFIX}scale'] {
    scale: var(${CSS_PREFIX}scale) !important;
    transform-origin: var(${CSS_PREFIX}transform-origin) !important;
  }

  @layer dnd-kit {
    :where([${ATTRIBUTE}][popover]) {
      overflow: visible;
      background: unset;
      border: unset;
      margin: unset;
      padding: unset;
      color: inherit;

      &:is(input, button) {
        border: revert;
        background: revert;
      }
    }
  }
  [${ATTRIBUTE}]::backdrop, [${ATTR_PREFIX}overlay]:not([${ATTRIBUTE}]) {
    display: none;
    visibility: hidden;
  }
`.replace(/\n+/g, " ").replace(/\s+/g, " ").trim();
  function createPlaceholder(source, type = "hidden") {
    return f3(() => {
      const { element, manager } = source;
      if (!element || !manager)
        return;
      const containedDroppables = findContainedDroppables(element, manager.registry.droppables);
      const cleanup = [];
      const placeholder = cloneElement(element);
      const { remove } = placeholder;
      proxyDroppableElements(containedDroppables, placeholder, cleanup);
      configurePlaceholder(placeholder, type);
      placeholder.remove = () => {
        cleanup.forEach((fn) => fn());
        remove.call(placeholder);
      };
      return placeholder;
    });
  }
  function findContainedDroppables(element, droppables) {
    const containedDroppables = /* @__PURE__ */ new Map;
    for (const droppable of droppables) {
      if (!droppable.element)
        continue;
      if (element === droppable.element || element.contains(droppable.element)) {
        const identifierAttribute = `${ATTR_PREFIX}${generateUniqueId("dom-id")}`;
        droppable.element.setAttribute(identifierAttribute, "");
        containedDroppables.set(droppable, identifierAttribute);
      }
    }
    return containedDroppables;
  }
  function proxyDroppableElements(containedDroppables, placeholder, cleanup) {
    for (const [droppable, identifierAttribute] of containedDroppables) {
      if (!droppable.element)
        continue;
      const selector = `[${identifierAttribute}]`;
      const clonedElement = placeholder.matches(selector) ? placeholder : placeholder.querySelector(selector);
      droppable.element.removeAttribute(identifierAttribute);
      if (!clonedElement)
        continue;
      const originalElement = droppable.element;
      droppable.proxy = clonedElement;
      clonedElement.removeAttribute(identifierAttribute);
      ProxiedElements.set(originalElement, clonedElement);
      cleanup.push(() => {
        ProxiedElements.delete(originalElement);
        droppable.proxy = undefined;
      });
    }
  }
  function configurePlaceholder(placeholder, type = "hidden") {
    placeholder.setAttribute("inert", "true");
    placeholder.setAttribute("tab-index", "-1");
    placeholder.setAttribute("aria-hidden", "true");
    placeholder.setAttribute(PLACEHOLDER_ATTRIBUTE, type);
  }
  function isSameFrame(element, target) {
    if (element === target)
      return true;
    return getFrameElement(element) === getFrameElement(target);
  }
  function preventPopoverClose(event) {
    const { target } = event;
    if ("newState" in event && event.newState === "closed" && isElement(target) && target.hasAttribute("popover")) {
      requestAnimationFrame(() => showPopover(target));
    }
  }
  function isTableRow(element) {
    return element.tagName === "TR";
  }
  function createElementMutationObserver(element, placeholder, clone) {
    const observer = new MutationObserver((mutations) => {
      let hasChildrenMutations = false;
      for (const mutation of mutations) {
        if (mutation.target !== element) {
          hasChildrenMutations = true;
          continue;
        }
        if (mutation.type !== "attributes") {
          continue;
        }
        const attributeName = mutation.attributeName;
        if (attributeName.startsWith("aria-") || IGNORED_ATTRIBUTES.includes(attributeName)) {
          continue;
        }
        const attributeValue = element.getAttribute(attributeName);
        if (attributeName === "style") {
          if (supportsStyle(element) && supportsStyle(placeholder)) {
            const styles = element.style;
            for (const key of Array.from(placeholder.style)) {
              if (styles.getPropertyValue(key) === "") {
                placeholder.style.removeProperty(key);
              }
            }
            for (const key of Array.from(styles)) {
              if (IGNORED_STYLES.includes(key) || key.startsWith(CSS_PREFIX)) {
                continue;
              }
              const value = styles.getPropertyValue(key);
              placeholder.style.setProperty(key, value);
            }
          }
        } else if (attributeValue !== null) {
          placeholder.setAttribute(attributeName, attributeValue);
        } else {
          placeholder.removeAttribute(attributeName);
        }
      }
      if (hasChildrenMutations && clone) {
        placeholder.replaceChildren(...element.cloneNode(true).childNodes);
      }
    });
    observer.observe(element, {
      attributes: true,
      subtree: true,
      childList: true
    });
    return observer;
  }
  function createDocumentMutationObserver(element, placeholder, feedbackElement) {
    const observer = new MutationObserver((entries) => {
      for (const entry of entries) {
        if (entry.addedNodes.length === 0)
          continue;
        for (const node of Array.from(entry.addedNodes)) {
          if (node.contains(element) && element.nextElementSibling !== placeholder) {
            element.insertAdjacentElement("afterend", placeholder);
            showPopover(feedbackElement);
            return;
          }
          if (node.contains(placeholder) && placeholder.previousElementSibling !== element) {
            placeholder.insertAdjacentElement("beforebegin", element);
            showPopover(feedbackElement);
            return;
          }
        }
      }
      if (element.isConnected && placeholder.isConnected && element.nextElementSibling !== placeholder) {
        element.insertAdjacentElement("afterend", placeholder);
        showPopover(feedbackElement);
      }
    });
    observer.observe(element.ownerDocument.body, {
      childList: true,
      subtree: true
    });
    return observer;
  }
  function createResizeObserver(ctx) {
    return new ResizeObserver(() => {
      var _a5, _b2, _c3;
      const placeholderShape = new DOMRectangle(ctx.placeholder, {
        frameTransform: ctx.frameTransform,
        ignoreTransforms: true
      });
      const origin = (_a5 = ctx.transformOrigin) != null ? _a5 : { x: 1, y: 1 };
      const dX = (ctx.width - placeholderShape.width) * origin.x + ctx.delta.x;
      const dY = (ctx.height - placeholderShape.height) * origin.y + ctx.delta.y;
      const fixedOffset = getFixedPositionOffset();
      ctx.styles.set({
        width: placeholderShape.width - ctx.widthOffset,
        height: placeholderShape.height - ctx.heightOffset,
        top: ctx.top + dY + fixedOffset.y,
        left: ctx.left + dX + fixedOffset.x
      }, CSS_PREFIX);
      (_b2 = ctx.getElementMutationObserver()) == null || _b2.takeRecords();
      if (isTableRow(ctx.element) && isTableRow(ctx.placeholder)) {
        const cells = Array.from(ctx.element.cells);
        const placeholderCells = Array.from(ctx.placeholder.cells);
        if (!ctx.getSavedCellWidths()) {
          ctx.setSavedCellWidths(cells.map((cell) => cell.style.width));
        }
        for (const [index, cell] of cells.entries()) {
          const placeholderCell = placeholderCells[index];
          cell.style.width = `${placeholderCell.getBoundingClientRect().width}px`;
        }
      }
      const translate = (_c3 = ctx.getTranslate()) != null ? _c3 : { x: 0, y: 0 };
      const shapeLeft = ctx.left + dX + fixedOffset.x + translate.x;
      const shapeTop = ctx.top + dY + fixedOffset.y + translate.y;
      const shapeWidth = placeholderShape.width - ctx.widthOffset;
      const shapeHeight = placeholderShape.height - ctx.heightOffset;
      const ft = ctx.frameTransform;
      ctx.dragOperation.shape = new Rectangle(shapeLeft * ft.scaleX + ft.x, shapeTop * ft.scaleY + ft.y, shapeWidth * ft.scaleX, shapeHeight * ft.scaleY);
    });
  }
  var DEFAULT_DURATION = 250;
  var DEFAULT_EASING = "ease";
  function runDropAnimation(ctx) {
    var _a5, _b2, _c3, _d2;
    const { animation } = ctx;
    if (typeof animation === "function") {
      const result = animation({
        source: ctx.source,
        element: ctx.element,
        feedbackElement: ctx.feedbackElement,
        placeholder: ctx.placeholder,
        translate: ctx.translate,
        moved: ctx.moved
      });
      Promise.resolve(result).then(() => {
        ctx.cleanup();
        requestAnimationFrame(ctx.restoreFocus);
      });
      return;
    }
    const {
      duration = DEFAULT_DURATION,
      easing = DEFAULT_EASING
    } = animation != null ? animation : {};
    showPopover(ctx.feedbackElement);
    const [, runningAnimation] = (_a5 = getFinalKeyframe(ctx.feedbackElement, (keyframe) => ("translate" in keyframe))) != null ? _a5 : [];
    runningAnimation == null || runningAnimation.pause();
    const target = (_b2 = ctx.placeholder) != null ? _b2 : ctx.element;
    const options = {
      frameTransform: isSameFrame(ctx.feedbackElement, target) ? null : undefined
    };
    const current = new DOMRectangle(ctx.feedbackElement, options);
    const currentTranslate = (_c3 = parseTranslate(getComputedStyles(ctx.feedbackElement).translate)) != null ? _c3 : ctx.translate;
    const final = new DOMRectangle(target, options);
    const delta = Rectangle.delta(current, final, ctx.alignment);
    const finalTranslate = {
      x: currentTranslate.x - delta.x,
      y: currentTranslate.y - delta.y
    };
    const heightKeyframes = Math.round(current.intrinsicHeight) !== Math.round(final.intrinsicHeight) ? {
      minHeight: [
        `${current.intrinsicHeight}px`,
        `${final.intrinsicHeight}px`
      ],
      maxHeight: [
        `${current.intrinsicHeight}px`,
        `${final.intrinsicHeight}px`
      ]
    } : {};
    const widthKeyframes = Math.round(current.intrinsicWidth) !== Math.round(final.intrinsicWidth) ? {
      minWidth: [
        `${current.intrinsicWidth}px`,
        `${final.intrinsicWidth}px`
      ],
      maxWidth: [
        `${current.intrinsicWidth}px`,
        `${final.intrinsicWidth}px`
      ]
    } : {};
    ctx.styles.set({ transition: ctx.transition }, CSS_PREFIX);
    ctx.feedbackElement.setAttribute(DROPPING_ATTRIBUTE, "");
    (_d2 = ctx.getElementMutationObserver()) == null || _d2.takeRecords();
    animateTransform({
      element: ctx.feedbackElement,
      keyframes: __spreadProps3(__spreadValues4(__spreadValues4({}, heightKeyframes), widthKeyframes), {
        translate: [
          `${currentTranslate.x}px ${currentTranslate.y}px 0`,
          `${finalTranslate.x}px ${finalTranslate.y}px 0`
        ]
      }),
      options: {
        duration: prefersReducedMotion(getWindow(ctx.feedbackElement)) ? 0 : ctx.moved || ctx.feedbackElement !== ctx.element ? duration : 0,
        easing
      }
    }).then(() => {
      ctx.feedbackElement.removeAttribute(DROPPING_ATTRIBUTE);
      runningAnimation == null || runningAnimation.finish();
      ctx.cleanup();
      requestAnimationFrame(ctx.restoreFocus);
    });
  }
  var _overlay_dec;
  var _a22;
  var _init23;
  var _overlay;
  var _Feedback_instances;
  var trackOverlayRoot_fn;
  var render_fn;
  var _Feedback = class _Feedback extends (_a22 = Plugin, _overlay_dec = [reactive], _a22) {
    constructor(manager, options) {
      super(manager, options);
      __privateAdd5(this, _Feedback_instances);
      __privateAdd5(this, _overlay, __runInitializers4(_init23, 8, this)), __runInitializers4(_init23, 11, this);
      this.state = {
        initial: {},
        current: {}
      };
      const styleInjector = manager.registry.plugins.get(StyleInjector);
      const unregisterStyles = styleInjector == null ? undefined : styleInjector.register(CSS_RULES);
      if (unregisterStyles) {
        const originalDestroy = this.destroy.bind(this);
        this.destroy = () => {
          unregisterStyles();
          originalDestroy();
        };
      }
      this.registerEffect(__privateMethod5(this, _Feedback_instances, trackOverlayRoot_fn).bind(this, styleInjector));
      this.registerEffect(__privateMethod5(this, _Feedback_instances, render_fn));
    }
  };
  _init23 = __decoratorStart4(_a22);
  _overlay = new WeakMap;
  _Feedback_instances = new WeakSet;
  trackOverlayRoot_fn = function(styleInjector) {
    const { overlay } = this;
    if (!overlay || !styleInjector)
      return;
    const root = getRoot(overlay);
    if (!root)
      return;
    return styleInjector.addRoot(root);
  };
  render_fn = function() {
    var _a5, _b2, _c3, _d2, _e, _f, _g;
    const { state, manager, options } = this;
    const { dragOperation } = manager;
    const { position, source, status } = dragOperation;
    if (status.idle) {
      state.current = {};
      state.initial = {};
      return;
    }
    if (!source)
      return;
    const { element } = source;
    const entityOptions = source.pluginConfig(_Feedback);
    const feedbackOption = (_b2 = (_a5 = entityOptions == null ? undefined : entityOptions.feedback) != null ? _a5 : options == null ? undefined : options.feedback) != null ? _b2 : "default";
    const feedback = typeof feedbackOption === "function" ? feedbackOption(source, manager) : feedbackOption;
    if (!element || feedback === "none" || !status.initialized || status.initializing) {
      return;
    }
    const { initial } = state;
    const feedbackElement = (_c3 = this.overlay) != null ? _c3 : element;
    const frameTransform = getFrameTransform(feedbackElement);
    const elementFrameTransform = getFrameTransform(element);
    const crossFrame = !isSameFrame(element, feedbackElement);
    const shape = new DOMRectangle(element, {
      frameTransform: crossFrame ? elementFrameTransform : null,
      ignoreTransforms: !crossFrame
    });
    const scaleDelta = {
      x: elementFrameTransform.scaleX / frameTransform.scaleX,
      y: elementFrameTransform.scaleY / frameTransform.scaleY
    };
    let { width, height, top, left } = shape;
    if (crossFrame) {
      width = width / scaleDelta.x;
      height = height / scaleDelta.y;
    }
    const styles = new Styles(feedbackElement);
    const elementStyles = getComputedStyles(element);
    const {
      transition,
      translate,
      boxSizing,
      paddingBlockStart,
      paddingBlockEnd,
      paddingInlineStart,
      paddingInlineEnd,
      borderInlineStartWidth,
      borderInlineEndWidth,
      borderBlockStartWidth,
      borderBlockEndWidth
    } = elementStyles;
    const feedbackTransition = transition.split(",").filter((t) => !/^\s*(transform|translate|scale)\b/.test(t)).join(",");
    const parsedTransform = parseTransform(elementStyles);
    const initialTransformStyle = elementStyles.transform;
    const clone = feedback === "clone";
    const contentBox = boxSizing === "content-box";
    const widthOffset = contentBox ? parseInt(paddingInlineStart) + parseInt(paddingInlineEnd) + parseInt(borderInlineStartWidth) + parseInt(borderInlineEndWidth) : 0;
    const heightOffset = contentBox ? parseInt(paddingBlockStart) + parseInt(paddingBlockEnd) + parseInt(borderBlockStartWidth) + parseInt(borderBlockEndWidth) : 0;
    const placeholder = feedback !== "move" && !this.overlay ? createPlaceholder(source, clone ? "clone" : "hidden") : null;
    const isKeyboardOperation = f3(() => isKeyboardEvent(manager.dragOperation.activatorEvent));
    if (!initial.translate) {
      if (this.overlay && parsedTransform) {
        initial.translate = { x: parsedTransform.x, y: parsedTransform.y };
      } else if (translate !== "none") {
        const parsedTranslate = parseTranslate(translate);
        if (parsedTranslate) {
          initial.translate = parsedTranslate;
        }
      }
    }
    if (!initial.transformOrigin) {
      const current = f3(() => position.current);
      const visualLeft = left + ((_d2 = parsedTransform == null ? undefined : parsedTransform.x) != null ? _d2 : 0);
      const visualTop = top + ((_e = parsedTransform == null ? undefined : parsedTransform.y) != null ? _e : 0);
      initial.transformOrigin = {
        x: (current.x - visualLeft * frameTransform.scaleX - frameTransform.x) / (width * frameTransform.scaleX),
        y: (current.y - visualTop * frameTransform.scaleY - frameTransform.y) / (height * frameTransform.scaleY)
      };
    }
    const { transformOrigin } = initial;
    const relativeTop = top * frameTransform.scaleY + frameTransform.y;
    const relativeLeft = left * frameTransform.scaleX + frameTransform.x;
    if (!initial.coordinates) {
      initial.coordinates = {
        x: relativeLeft,
        y: relativeTop
      };
      if (scaleDelta.x !== 1 || scaleDelta.y !== 1) {
        const { scaleX, scaleY } = elementFrameTransform;
        const { x: tX2, y: tY2 } = transformOrigin;
        initial.coordinates.x += (width * scaleX - width) * tX2;
        initial.coordinates.y += (height * scaleY - height) * tY2;
      }
    }
    if (!initial.dimensions) {
      initial.dimensions = { width, height };
    }
    if (!initial.frameTransform) {
      initial.frameTransform = frameTransform;
    }
    const coordinatesDelta = {
      x: initial.coordinates.x - relativeLeft,
      y: initial.coordinates.y - relativeTop
    };
    const sizeDelta = {
      width: (initial.dimensions.width * initial.frameTransform.scaleX - width * frameTransform.scaleX) * transformOrigin.x,
      height: (initial.dimensions.height * initial.frameTransform.scaleY - height * frameTransform.scaleY) * transformOrigin.y
    };
    const delta = {
      x: coordinatesDelta.x / frameTransform.scaleX + sizeDelta.width,
      y: coordinatesDelta.y / frameTransform.scaleY + sizeDelta.height
    };
    const projected = {
      left: left + delta.x,
      top: top + delta.y
    };
    feedbackElement.setAttribute(ATTRIBUTE, "true");
    const transform = f3(() => dragOperation.transform);
    const initialTranslate = (_f = initial.translate) != null ? _f : { x: 0, y: 0 };
    const tX = transform.x * frameTransform.scaleX + initialTranslate.x;
    const tY = transform.y * frameTransform.scaleY + initialTranslate.y;
    const fixedOffset = getFixedPositionOffset();
    styles.set({
      width: width - widthOffset,
      height: height - heightOffset,
      top: projected.top + fixedOffset.y,
      left: projected.left + fixedOffset.x,
      translate: `${tX}px ${tY}px 0`,
      transform: this.overlay ? "none" : initialTransformStyle,
      transition: feedbackTransition ? `${feedbackTransition}, translate 0ms linear` : "translate 0ms linear",
      scale: crossFrame ? `${scaleDelta.x} ${scaleDelta.y}` : "",
      "transform-origin": `${transformOrigin.x * 100}% ${transformOrigin.y * 100}%`
    }, CSS_PREFIX);
    if (placeholder) {
      element.insertAdjacentElement("afterend", placeholder);
      if (options == null ? undefined : options.rootElement) {
        const root = typeof options.rootElement === "function" ? options.rootElement(source) : options.rootElement;
        root.appendChild(element);
      }
    }
    if (supportsPopover(feedbackElement)) {
      if (!feedbackElement.hasAttribute("popover")) {
        feedbackElement.setAttribute("popover", "manual");
      }
      showPopover(feedbackElement);
      feedbackElement.addEventListener("beforetoggle", preventPopoverClose);
    }
    let elementMutationObserver;
    let documentMutationObserver;
    let savedCellWidths;
    const resizeObserver = createResizeObserver({
      placeholder,
      element,
      feedbackElement,
      frameTransform,
      transformOrigin,
      width,
      height,
      top,
      left,
      widthOffset,
      heightOffset,
      delta,
      styles,
      dragOperation,
      getTranslate: () => state.current.translate,
      getElementMutationObserver: () => elementMutationObserver,
      getSavedCellWidths: () => savedCellWidths,
      setSavedCellWidths: (widths) => {
        savedCellWidths = widths;
      }
    });
    const initialShape = new DOMRectangle(feedbackElement);
    f3(() => dragOperation.shape = initialShape);
    const feedbackWindow = getWindow(feedbackElement);
    const handleWindowResize = (event) => {
      this.manager.actions.stop({ event });
    };
    const reducedMotion = prefersReducedMotion(feedbackWindow);
    if (isKeyboardOperation) {
      feedbackWindow.addEventListener("resize", handleWindowResize);
    }
    if (f3(() => source.status) === "idle") {
      requestAnimationFrame(() => source.status = "dragging");
    }
    if (placeholder) {
      resizeObserver.observe(placeholder);
      elementMutationObserver = createElementMutationObserver(element, placeholder, clone);
      documentMutationObserver = createDocumentMutationObserver(element, placeholder, feedbackElement);
    }
    const id = (_g = manager.dragOperation.source) == null ? undefined : _g.id;
    const restoreFocus = () => {
      var _a6;
      if (!isKeyboardOperation || id == null)
        return;
      const draggable = manager.registry.draggables.get(id);
      const focusTarget = (_a6 = draggable == null ? undefined : draggable.handle) != null ? _a6 : draggable == null ? undefined : draggable.element;
      if (isHTMLElement(focusTarget)) {
        focusTarget.focus();
      }
    };
    const cleanup = () => {
      elementMutationObserver == null || elementMutationObserver.disconnect();
      documentMutationObserver == null || documentMutationObserver.disconnect();
      resizeObserver.disconnect();
      feedbackWindow.removeEventListener("resize", handleWindowResize);
      if (supportsPopover(feedbackElement)) {
        feedbackElement.removeEventListener("beforetoggle", preventPopoverClose);
        feedbackElement.removeAttribute("popover");
      }
      feedbackElement.removeAttribute(ATTRIBUTE);
      styles.reset();
      const finalize = () => {
        var _a6;
        if (savedCellWidths && isTableRow(element)) {
          const cells = Array.from(element.cells);
          for (const [index, cell] of cells.entries()) {
            cell.style.width = (_a6 = savedCellWidths[index]) != null ? _a6 : "";
          }
        }
        source.status = "idle";
        const moved = state.current.translate != null;
        const isDragging = dragOperation.status.dragging;
        if (placeholder && (!isDragging && moved || placeholder.parentElement !== feedbackElement.parentElement) && feedbackElement.isConnected) {
          placeholder.replaceWith(feedbackElement);
        }
        placeholder == null || placeholder.remove();
      };
      if (feedbackElement === this.overlay) {
        setTimeout(finalize, 0);
      } else {
        finalize();
      }
    };
    const optionsDropAnimation = options == null ? undefined : options.dropAnimation;
    const feedbackPlugin = this;
    const cleanupEffects = effects(() => {
      var _a6, _b3, _c4;
      const { transform: transform2, status: status2 } = dragOperation;
      if (!transform2.x && !transform2.y && !state.current.translate) {
        return;
      }
      if (status2.dragging) {
        const initialTranslate2 = (_a6 = initial.translate) != null ? _a6 : { x: 0, y: 0 };
        const translate2 = {
          x: transform2.x / frameTransform.scaleX + initialTranslate2.x,
          y: transform2.y / frameTransform.scaleY + initialTranslate2.y
        };
        const previousTranslate = state.current.translate;
        const modifiers = f3(() => dragOperation.modifiers);
        const currentShape = f3(() => {
          var _a7;
          return (_a7 = dragOperation.shape) == null ? undefined : _a7.current;
        });
        const keyboardTransition = options == null ? undefined : options.keyboardTransition;
        const translateTransition = isKeyboardOperation && !reducedMotion && keyboardTransition !== null ? `${(_b3 = keyboardTransition == null ? undefined : keyboardTransition.duration) != null ? _b3 : 250}ms ${(_c4 = keyboardTransition == null ? undefined : keyboardTransition.easing) != null ? _c4 : "cubic-bezier(0.25, 1, 0.5, 1)"}` : "0ms linear";
        styles.set({
          transition: feedbackTransition ? `${feedbackTransition}, translate ${translateTransition}` : `translate ${translateTransition}`,
          translate: `${translate2.x}px ${translate2.y}px 0`
        }, CSS_PREFIX);
        elementMutationObserver == null || elementMutationObserver.takeRecords();
        if (currentShape && currentShape !== initialShape && previousTranslate && !modifiers.length) {
          const delta2 = Point.delta(translate2, previousTranslate);
          dragOperation.shape = Rectangle.from(currentShape.boundingRectangle).translate(delta2.x * frameTransform.scaleX, delta2.y * frameTransform.scaleY);
        } else {
          dragOperation.shape = new DOMRectangle(feedbackElement);
        }
        state.current.translate = translate2;
      }
    }, function() {
      if (dragOperation.status.dropped) {
        this.dispose();
        source.status = "dropping";
        const dropAnimationConfig = (entityOptions == null ? undefined : entityOptions.dropAnimation) !== undefined ? entityOptions.dropAnimation : feedbackPlugin.dropAnimation !== undefined ? feedbackPlugin.dropAnimation : optionsDropAnimation;
        let translate2 = state.current.translate;
        const moved = translate2 != null;
        if (!translate2 && element !== feedbackElement) {
          translate2 = { x: 0, y: 0 };
        }
        if (!translate2 || dropAnimationConfig === null) {
          cleanup();
          return;
        }
        manager.renderer.rendering.then(() => {
          runDropAnimation({
            source,
            element,
            feedbackElement,
            placeholder,
            translate: translate2,
            moved,
            transition,
            alignment: source.alignment,
            styles,
            animation: dropAnimationConfig != null ? dropAnimationConfig : undefined,
            getElementMutationObserver: () => elementMutationObserver,
            cleanup,
            restoreFocus
          });
        });
      }
    });
    return () => {
      cleanup();
      cleanupEffects();
    };
  };
  __decorateElement4(_init23, 4, "overlay", _overlay_dec, _Feedback, _overlay);
  __decoratorMetadata4(_init23, _Feedback);
  _Feedback.configure = configurator(_Feedback);
  var Feedback = _Feedback;
  var LOCKED = true;
  var UNLOCKED = false;
  var _dec;
  var _a32;
  var _dec2;
  var _b2;
  var _init33;
  var __b;
  var __a;
  _b2 = (_dec2 = [reactive], ScrollDirection.Forward), _a32 = (_dec = [reactive], ScrollDirection.Reverse);
  var ScrollLock = class {
    constructor() {
      __privateAdd5(this, __b, __runInitializers4(_init33, 8, this, LOCKED)), __runInitializers4(_init33, 11, this);
      __privateAdd5(this, __a, __runInitializers4(_init33, 12, this, LOCKED)), __runInitializers4(_init33, 15, this);
    }
    isLocked(direction) {
      if (direction === ScrollDirection.Idle) {
        return false;
      }
      if (direction == null) {
        return this[ScrollDirection.Forward] === LOCKED && this[ScrollDirection.Reverse] === LOCKED;
      }
      return this[direction] === LOCKED;
    }
    unlock(direction) {
      if (direction === ScrollDirection.Idle) {
        return;
      }
      this[direction] = UNLOCKED;
    }
  };
  _init33 = __decoratorStart4(null);
  __b = new WeakMap;
  __a = new WeakMap;
  __decorateElement4(_init33, 4, _b2, _dec2, ScrollLock, __b);
  __decorateElement4(_init33, 4, _a32, _dec, ScrollLock, __a);
  __decoratorMetadata4(_init33, ScrollLock);
  var DIRECTIONS = [ScrollDirection.Forward, ScrollDirection.Reverse];
  var ScrollIntent = class {
    constructor() {
      this.x = new ScrollLock;
      this.y = new ScrollLock;
    }
    isLocked() {
      return this.x.isLocked() && this.y.isLocked();
    }
  };
  var ScrollIntentTracker = class extends Plugin {
    constructor(manager) {
      super(manager);
      const scrollIntent = y3(new ScrollIntent);
      let previousDelta = null;
      this.signal = scrollIntent;
      j3(() => {
        const { status } = manager.dragOperation;
        if (!status.initialized) {
          previousDelta = null;
          scrollIntent.value = new ScrollIntent;
          return;
        }
        const { delta } = manager.dragOperation.position;
        if (previousDelta) {
          const directions = {
            x: getDirection(delta.x, previousDelta.x),
            y: getDirection(delta.y, previousDelta.y)
          };
          const intent = scrollIntent.peek();
          n2(() => {
            for (const axis of Axes) {
              for (const direction of DIRECTIONS) {
                if (directions[axis] === direction) {
                  intent[axis].unlock(direction);
                }
              }
            }
            scrollIntent.value = intent;
          });
        }
        previousDelta = delta;
      });
    }
    get current() {
      return this.signal.peek();
    }
  };
  function getDirection(a, b) {
    return Math.sign(a - b);
  }
  var _autoScrolling_dec;
  var _a4;
  var _init42;
  var _autoScrolling;
  var _meta;
  var _scroll;
  var Scroller = class extends (_a4 = CorePlugin, _autoScrolling_dec = [reactive], _a4) {
    constructor(manager) {
      super(manager);
      __privateAdd5(this, _autoScrolling, __runInitializers4(_init42, 8, this, false)), __runInitializers4(_init42, 11, this);
      __privateAdd5(this, _meta);
      __privateAdd5(this, _scroll, () => {
        if (!__privateGet5(this, _meta)) {
          return;
        }
        const { element, by } = __privateGet5(this, _meta);
        if (by.y)
          element.scrollTop += by.y;
        if (by.x)
          element.scrollLeft += by.x;
      });
      this.scroll = (options, scrollOptions) => {
        var _a5;
        if (this.disabled) {
          return false;
        }
        const elements = this.getScrollableElements();
        if (!elements) {
          __privateSet5(this, _meta, undefined);
          return false;
        }
        const { position } = this.manager.dragOperation;
        const currentPosition = position == null ? undefined : position.current;
        if (currentPosition) {
          const { by } = options != null ? options : {};
          const intent = by ? {
            x: getScrollIntent(by.x),
            y: getScrollIntent(by.y)
          } : undefined;
          const scrollIntent = intent ? undefined : this.scrollIntentTracker.current;
          if (scrollIntent == null ? undefined : scrollIntent.isLocked()) {
            return false;
          }
          for (const scrollableElement of elements) {
            const elementCanScroll = canScroll(scrollableElement, by);
            if (elementCanScroll.x || elementCanScroll.y) {
              const { speed, direction } = detectScrollIntent(scrollableElement, currentPosition, intent, scrollOptions == null ? undefined : scrollOptions.acceleration, scrollOptions == null ? undefined : scrollOptions.threshold);
              if (scrollIntent) {
                for (const axis of Axes) {
                  if (scrollIntent[axis].isLocked(direction[axis])) {
                    speed[axis] = 0;
                    direction[axis] = 0;
                  }
                }
              }
              if (direction.x || direction.y) {
                const { x, y } = by != null ? by : direction;
                const scrollLeftBy = x * speed.x;
                const scrollTopBy = y * speed.y;
                if (scrollLeftBy || scrollTopBy) {
                  const previousScrollBy = (_a5 = __privateGet5(this, _meta)) == null ? undefined : _a5.by;
                  if (this.autoScrolling && previousScrollBy) {
                    const scrollIntentMismatch = previousScrollBy.x && !scrollLeftBy || previousScrollBy.y && !scrollTopBy;
                    if (scrollIntentMismatch)
                      continue;
                  }
                  __privateSet5(this, _meta, {
                    element: scrollableElement,
                    by: {
                      x: scrollLeftBy,
                      y: scrollTopBy
                    }
                  });
                  scheduler.schedule(__privateGet5(this, _scroll));
                  return true;
                }
              }
            }
          }
        }
        __privateSet5(this, _meta, undefined);
        return false;
      };
      let previousElementFromPoint = null;
      let previousScrollableElements = null;
      const elementFromPoint = computed(() => {
        const { position, source } = manager.dragOperation;
        if (!position) {
          return null;
        }
        const element = getElementFromPoint(getRoot(source == null ? undefined : source.element), position.current);
        if (element) {
          previousElementFromPoint = element;
        }
        return element != null ? element : previousElementFromPoint;
      });
      const scrollableElements = computed(() => {
        const element = elementFromPoint.value;
        const { documentElement } = getDocument(element);
        if (!element || element === documentElement) {
          const { target } = manager.dragOperation;
          const targetElement = target == null ? undefined : target.element;
          if (targetElement) {
            const elements = getScrollableAncestors(targetElement, {
              excludeElement: false
            });
            previousScrollableElements = elements;
            return elements;
          }
        }
        if (element) {
          const elements = getScrollableAncestors(element, {
            excludeElement: false
          });
          if (this.autoScrolling && previousScrollableElements && elements.size < (previousScrollableElements == null ? undefined : previousScrollableElements.size)) {
            return previousScrollableElements;
          }
          previousScrollableElements = elements;
          return elements;
        }
        previousScrollableElements = null;
        return null;
      }, deepEqual);
      this.getScrollableElements = () => {
        return scrollableElements.value;
      };
      this.scrollIntentTracker = new ScrollIntentTracker(manager);
      this.destroy = manager.monitor.addEventListener("dragmove", (event) => {
        if (this.disabled || event.defaultPrevented || !isKeyboardEvent(manager.dragOperation.activatorEvent) || !event.by) {
          return;
        }
        if (this.scroll({ by: event.by })) {
          event.preventDefault();
        }
      });
    }
  };
  _init42 = __decoratorStart4(_a4);
  _autoScrolling = new WeakMap;
  _meta = new WeakMap;
  _scroll = new WeakMap;
  __decorateElement4(_init42, 4, "autoScrolling", _autoScrolling_dec, Scroller, _autoScrolling);
  __decoratorMetadata4(_init42, Scroller);
  function getScrollIntent(value) {
    if (value > 0) {
      return ScrollDirection.Forward;
    }
    if (value < 0) {
      return ScrollDirection.Reverse;
    }
    return ScrollDirection.Idle;
  }
  var Scheduler2 = class {
    constructor(scheduler5) {
      this.scheduler = scheduler5;
      this.pending = false;
      this.tasks = /* @__PURE__ */ new Set;
      this.resolvers = /* @__PURE__ */ new Set;
      this.flush = () => {
        const { tasks, resolvers } = this;
        this.pending = false;
        this.tasks = /* @__PURE__ */ new Set;
        this.resolvers = /* @__PURE__ */ new Set;
        for (const task of tasks) {
          task();
        }
        for (const resolve of resolvers) {
          resolve();
        }
      };
    }
    schedule(task) {
      this.tasks.add(task);
      if (!this.pending) {
        this.pending = true;
        this.scheduler(this.flush);
      }
      return new Promise((resolve) => this.resolvers.add(resolve));
    }
  };
  var scheduler32 = new Scheduler2((callback) => {
    if (typeof requestAnimationFrame === "function") {
      requestAnimationFrame(callback);
    } else {
      callback();
    }
  });
  var AUTOSCROLL_INTERVAL = 10;
  var _AutoScroller = class _AutoScroller extends Plugin {
    constructor(manager, options) {
      super(manager, options);
      const scroller = manager.registry.plugins.get(Scroller);
      if (!scroller) {
        throw new Error("AutoScroller plugin depends on Scroller plugin");
      }
      this.destroy = j3(() => {
        var _a5, _b2, _c3;
        if (this.disabled) {
          return;
        }
        const { position: _, status } = manager.dragOperation;
        if (status.dragging) {
          const scrollOptions = {
            acceleration: (_a5 = this.options) == null ? undefined : _a5.acceleration,
            threshold: typeof ((_b2 = this.options) == null ? undefined : _b2.threshold) === "number" ? { x: this.options.threshold, y: this.options.threshold } : (_c3 = this.options) == null ? undefined : _c3.threshold
          };
          const canScroll2 = scroller.scroll(undefined, scrollOptions);
          if (canScroll2) {
            scroller.autoScrolling = true;
            const interval = setInterval(() => scheduler32.schedule(() => scroller.scroll(undefined, scrollOptions)), AUTOSCROLL_INTERVAL);
            return () => {
              clearInterval(interval);
            };
          } else {
            scroller.autoScrolling = false;
          }
        }
      });
    }
  };
  _AutoScroller.configure = configurator(_AutoScroller);
  var AutoScroller = _AutoScroller;
  var listenerOptions = {
    capture: true,
    passive: true
  };
  var _timeout;
  var ScrollListener = class extends CorePlugin {
    constructor(manager) {
      super(manager);
      __privateAdd5(this, _timeout);
      this.handleScroll = () => {
        if (__privateGet5(this, _timeout) == null) {
          __privateSet5(this, _timeout, setTimeout(() => {
            this.manager.collisionObserver.forceUpdate(false);
            __privateSet5(this, _timeout, undefined);
          }, 50));
        }
      };
      const { dragOperation } = this.manager;
      this.destroy = j3(() => {
        var _a5, _b2, _c3;
        const enabled = dragOperation.status.dragging;
        if (enabled) {
          const root = (_c3 = (_b2 = (_a5 = dragOperation.source) == null ? undefined : _a5.element) == null ? undefined : _b2.ownerDocument) != null ? _c3 : document;
          root.addEventListener("scroll", this.handleScroll, listenerOptions);
          return () => {
            root.removeEventListener("scroll", this.handleScroll, listenerOptions);
          };
        }
      });
    }
  };
  _timeout = new WeakMap;
  var CSS_RULES2 = "* { user-select: none !important; -webkit-user-select: none !important; }";
  var PreventSelection = class extends Plugin {
    constructor(manager) {
      super(manager);
      this.manager = manager;
      const styleInjector = manager.registry.plugins.get(StyleInjector);
      const unregisterStyles = styleInjector == null ? undefined : styleInjector.register(CSS_RULES2);
      this.destroy = j3(() => {
        const { dragOperation } = this.manager;
        if (dragOperation.status.initialized) {
          removeSelection();
          document.addEventListener("selectionchange", removeSelection, {
            capture: true
          });
          return () => {
            document.removeEventListener("selectionchange", removeSelection, {
              capture: true
            });
          };
        }
      });
      if (unregisterStyles) {
        const originalDestroy = this.destroy.bind(this);
        this.destroy = () => {
          unregisterStyles();
          originalDestroy();
        };
      }
    }
  };
  function removeSelection() {
    var _a5;
    (_a5 = document.getSelection()) == null || _a5.removeAllRanges();
  }
  var defaults = Object.freeze({
    offset: 10,
    keyboardCodes: {
      start: ["Space", "Enter"],
      cancel: ["Escape"],
      end: ["Space", "Enter", "Tab"],
      up: ["ArrowUp"],
      down: ["ArrowDown"],
      left: ["ArrowLeft"],
      right: ["ArrowRight"]
    },
    preventActivation(event, source) {
      var _a5;
      const target = (_a5 = source.handle) != null ? _a5 : source.element;
      return event.target !== target;
    }
  });
  var _cleanupFunctions2;
  var _KeyboardSensor = class _KeyboardSensor extends Sensor {
    constructor(manager, options) {
      super(manager);
      this.manager = manager;
      this.options = options;
      __privateAdd5(this, _cleanupFunctions2, []);
      this.listeners = new Listeners;
      this.handleSourceKeyDown = (event, source, options) => {
        if (this.disabled || event.defaultPrevented) {
          return;
        }
        if (!isElement(event.target)) {
          return;
        }
        if (source.disabled) {
          return;
        }
        const {
          keyboardCodes = defaults.keyboardCodes,
          preventActivation = defaults.preventActivation
        } = options != null ? options : {};
        if (!keyboardCodes.start.includes(event.code)) {
          return;
        }
        if (!this.manager.dragOperation.status.idle) {
          return;
        }
        if (preventActivation == null ? undefined : preventActivation(event, source))
          return;
        this.handleStart(event, source, options);
      };
    }
    bind(source, options = this.options) {
      const unbind = j3(() => {
        var _a5;
        const target = (_a5 = source.handle) != null ? _a5 : source.element;
        const listener = (event) => {
          if (isKeyboardEvent(event)) {
            this.handleSourceKeyDown(event, source, options);
          }
        };
        if (target) {
          target.addEventListener("keydown", listener);
          return () => {
            target.removeEventListener("keydown", listener);
          };
        }
      });
      return unbind;
    }
    handleStart(event, source, options) {
      const { element } = source;
      if (!element) {
        throw new Error("Source draggable does not have an associated element");
      }
      event.preventDefault();
      event.stopImmediatePropagation();
      scrollIntoViewIfNeeded(element);
      const { center } = new DOMRectangle(element);
      const controller = this.manager.actions.start({
        event,
        coordinates: {
          x: center.x,
          y: center.y
        },
        source
      });
      if (controller.signal.aborted)
        return this.cleanup();
      this.sideEffects();
      const sourceDocument = getDocument(element);
      const listeners = [
        this.listeners.bind(sourceDocument, [
          {
            type: "keydown",
            listener: (event2) => this.handleKeyDown(event2, source, options),
            options: { capture: true }
          }
        ])
      ];
      __privateGet5(this, _cleanupFunctions2).push(...listeners);
    }
    handleKeyDown(event, _source, options) {
      const { keyboardCodes = defaults.keyboardCodes } = options != null ? options : {};
      if (isKeycode(event, [...keyboardCodes.end, ...keyboardCodes.cancel])) {
        event.preventDefault();
        const canceled = isKeycode(event, keyboardCodes.cancel);
        this.handleEnd(event, canceled);
        return;
      }
      if (isKeycode(event, keyboardCodes.up)) {
        this.handleMove("up", event);
      } else if (isKeycode(event, keyboardCodes.down)) {
        this.handleMove("down", event);
      }
      if (isKeycode(event, keyboardCodes.left)) {
        this.handleMove("left", event);
      } else if (isKeycode(event, keyboardCodes.right)) {
        this.handleMove("right", event);
      }
    }
    handleEnd(event, canceled) {
      this.manager.actions.stop({
        event,
        canceled
      });
      this.cleanup();
    }
    handleMove(direction, event) {
      var _a5, _b2;
      const { shape } = this.manager.dragOperation;
      const factor = event.shiftKey ? 5 : 1;
      let by = {
        x: 0,
        y: 0
      };
      let offset = (_b2 = (_a5 = this.options) == null ? undefined : _a5.offset) != null ? _b2 : defaults.offset;
      if (typeof offset === "number") {
        offset = { x: offset, y: offset };
      }
      if (!shape) {
        return;
      }
      switch (direction) {
        case "up":
          by = { x: 0, y: -offset.y * factor };
          break;
        case "down":
          by = { x: 0, y: offset.y * factor };
          break;
        case "left":
          by = { x: -offset.x * factor, y: 0 };
          break;
        case "right":
          by = { x: offset.x * factor, y: 0 };
          break;
      }
      if (by.x || by.y) {
        event.preventDefault();
        this.manager.actions.move({
          event,
          by
        });
      }
    }
    sideEffects() {
      const autoScroller = this.manager.registry.plugins.get(AutoScroller);
      if ((autoScroller == null ? undefined : autoScroller.disabled) === false) {
        autoScroller.disable();
        __privateGet5(this, _cleanupFunctions2).push(() => {
          autoScroller.enable();
        });
      }
    }
    cleanup() {
      __privateGet5(this, _cleanupFunctions2).forEach((cleanup) => cleanup());
      __privateSet5(this, _cleanupFunctions2, []);
    }
    destroy() {
      this.cleanup();
      this.listeners.clear();
    }
  };
  _cleanupFunctions2 = new WeakMap;
  _KeyboardSensor.configure = configurator(_KeyboardSensor);
  _KeyboardSensor.defaults = defaults;
  var KeyboardSensor = _KeyboardSensor;
  function isKeycode(event, codes) {
    return codes.includes(event.code);
  }
  var _coordinates;
  var DistanceConstraint = class extends ActivationConstraint {
    constructor() {
      super(...arguments);
      __privateAdd5(this, _coordinates);
    }
    onEvent(event) {
      switch (event.type) {
        case "pointerdown":
          __privateSet5(this, _coordinates, getEventCoordinates(event));
          break;
        case "pointermove":
          if (!__privateGet5(this, _coordinates))
            return;
          const { x, y } = getEventCoordinates(event);
          const delta = {
            x: x - __privateGet5(this, _coordinates).x,
            y: y - __privateGet5(this, _coordinates).y
          };
          const { tolerance } = this.options;
          if (tolerance && exceedsDistance(delta, tolerance)) {
            this.abort();
            return;
          }
          if (exceedsDistance(delta, this.options.value)) {
            this.activate(event);
          }
          break;
        case "pointerup":
          this.abort();
          break;
      }
    }
    abort() {
      __privateSet5(this, _coordinates, undefined);
    }
  };
  _coordinates = new WeakMap;
  var _timeout2;
  var _coordinates2;
  var DelayConstraint = class extends ActivationConstraint {
    constructor() {
      super(...arguments);
      __privateAdd5(this, _timeout2);
      __privateAdd5(this, _coordinates2);
    }
    onEvent(event) {
      switch (event.type) {
        case "pointerdown":
          __privateSet5(this, _coordinates2, getEventCoordinates(event));
          __privateSet5(this, _timeout2, setTimeout(() => this.activate(event), this.options.value));
          break;
        case "pointermove":
          if (!__privateGet5(this, _coordinates2))
            return;
          const { x, y } = getEventCoordinates(event);
          const delta = {
            x: x - __privateGet5(this, _coordinates2).x,
            y: y - __privateGet5(this, _coordinates2).y
          };
          if (exceedsDistance(delta, this.options.tolerance)) {
            this.abort();
          }
          break;
        case "pointerup":
          this.abort();
          break;
      }
    }
    abort() {
      if (__privateGet5(this, _timeout2)) {
        clearTimeout(__privateGet5(this, _timeout2));
        __privateSet5(this, _coordinates2, undefined);
        __privateSet5(this, _timeout2, undefined);
      }
    }
  };
  _timeout2 = new WeakMap;
  _coordinates2 = new WeakMap;
  var PointerActivationConstraints = class {
  };
  PointerActivationConstraints.Delay = DelayConstraint;
  PointerActivationConstraints.Distance = DistanceConstraint;
  var defaults2 = Object.freeze({
    activationConstraints(event, source) {
      var _a5;
      const { pointerType, target } = event;
      if (pointerType === "mouse" && isElement(target) && (source.handle === target || ((_a5 = source.handle) == null ? undefined : _a5.contains(target)))) {
        return;
      }
      if (pointerType === "touch") {
        return [
          new PointerActivationConstraints.Delay({ value: 250, tolerance: 5 })
        ];
      }
      if (isTextInput(target) && !event.defaultPrevented) {
        return [
          new PointerActivationConstraints.Delay({ value: 200, tolerance: 0 })
        ];
      }
      return [
        new PointerActivationConstraints.Delay({ value: 200, tolerance: 10 }),
        new PointerActivationConstraints.Distance({ value: 5 })
      ];
    },
    preventActivation(event, source) {
      var _a5;
      const { target } = event;
      if (target === source.element)
        return false;
      if (target === source.handle)
        return false;
      if (!isElement(target))
        return false;
      if ((_a5 = source.handle) == null ? undefined : _a5.contains(target))
        return false;
      const interactiveElement = getInteractiveElement(target);
      if (interactiveElement === source.element)
        return false;
      return Boolean(interactiveElement);
    }
  });
  var _cleanup;
  var _PointerSensor = class _PointerSensor extends Sensor {
    constructor(manager, options) {
      super(manager);
      this.manager = manager;
      this.options = options;
      __privateAdd5(this, _cleanup, /* @__PURE__ */ new Set);
      this.listeners = new Listeners;
      this.latest = {
        event: undefined,
        coordinates: undefined
      };
      this.handleMove = () => {
        const { event, coordinates: to } = this.latest;
        if (!event || !to) {
          return;
        }
        this.manager.actions.move({ event, to });
      };
      this.handleCancel = this.handleCancel.bind(this);
      this.handlePointerUp = this.handlePointerUp.bind(this);
      this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    activationConstraints(event, source, options = this.options) {
      const { activationConstraints = defaults2.activationConstraints } = options != null ? options : {};
      const constraints = typeof activationConstraints === "function" ? activationConstraints(event, source) : activationConstraints;
      return constraints;
    }
    bind(source, options = this.options) {
      const unbind = j3(() => {
        var _a5;
        const controller = new AbortController;
        const { signal: signal3 } = controller;
        const listener = (event) => {
          if (isPointerEvent(event)) {
            this.handlePointerDown(event, source, options);
          }
        };
        let targets = [(_a5 = source.handle) != null ? _a5 : source.element];
        if (options == null ? undefined : options.activatorElements) {
          if (Array.isArray(options.activatorElements)) {
            targets = options.activatorElements;
          } else {
            targets = options.activatorElements(source);
          }
        }
        for (const target of targets) {
          if (!target)
            continue;
          patchWindow(target.ownerDocument.defaultView);
          target.addEventListener("pointerdown", listener, { signal: signal3 });
        }
        return () => controller.abort();
      });
      return unbind;
    }
    handlePointerDown(event, source, options) {
      if (this.disabled || !event.isPrimary || event.button !== 0 || !isElement(event.target) || source.disabled || isCapturedBySensor(event) || !this.manager.dragOperation.status.idle) {
        return;
      }
      const { preventActivation = defaults2.preventActivation } = options != null ? options : {};
      if (preventActivation == null ? undefined : preventActivation(event, source)) {
        return;
      }
      const { target } = event;
      const isNativeDraggable = isHTMLElement(target) && target.draggable && target.getAttribute("draggable") === "true";
      const offset = getFrameTransform(source.element);
      const { x, y } = getEventCoordinates(event);
      this.initialCoordinates = {
        x: x * offset.scaleX + offset.x,
        y: y * offset.scaleY + offset.y
      };
      const constraints = this.activationConstraints(event, source, options);
      event.sensor = this;
      const controller = new ActivationController(constraints, (event2) => this.handleStart(source, event2));
      controller.signal.onabort = () => this.handleCancel(event);
      controller.onEvent(event);
      this.controller = controller;
      const documents = getDocuments();
      const unbindListeners = this.listeners.bind(documents, [
        {
          type: "pointermove",
          listener: (event2) => this.handlePointerMove(event2, source)
        },
        {
          type: "pointerup",
          listener: this.handlePointerUp,
          options: {
            capture: true
          }
        },
        {
          type: "pointercancel",
          listener: this.handleCancel
        },
        {
          type: "dragstart",
          listener: isNativeDraggable ? this.handleCancel : preventDefault,
          options: {
            capture: true
          }
        }
      ]);
      const cleanup = () => {
        unbindListeners();
        this.initialCoordinates = undefined;
      };
      __privateGet5(this, _cleanup).add(cleanup);
    }
    handlePointerMove(event, source) {
      var _a5, _b2;
      if (((_a5 = this.controller) == null ? undefined : _a5.activated) === false) {
        (_b2 = this.controller) == null || _b2.onEvent(event);
        return;
      }
      if (this.manager.dragOperation.status.dragging) {
        const coordinates = getEventCoordinates(event);
        const offset = getFrameTransform(source.element);
        coordinates.x = coordinates.x * offset.scaleX + offset.x;
        coordinates.y = coordinates.y * offset.scaleY + offset.y;
        event.preventDefault();
        event.stopPropagation();
        this.latest.event = event;
        this.latest.coordinates = coordinates;
        scheduler.schedule(this.handleMove);
      }
    }
    handlePointerUp(event) {
      const { status } = this.manager.dragOperation;
      if (!status.idle) {
        event.preventDefault();
        event.stopPropagation();
        const canceled = !status.initialized;
        this.manager.actions.stop({ event, canceled });
      }
      this.cleanup();
    }
    handleKeyDown(event) {
      if (event.key === "Escape") {
        event.preventDefault();
        this.handleCancel(event);
      }
    }
    handleStart(source, event) {
      const { manager, initialCoordinates } = this;
      if (!initialCoordinates || !manager.dragOperation.status.idle) {
        return;
      }
      if (event.defaultPrevented) {
        return;
      }
      const controller = manager.actions.start({
        coordinates: initialCoordinates,
        event,
        source
      });
      if (controller.signal.aborted)
        return this.cleanup();
      event.preventDefault();
      const ownerDocument = getDocument(event.target);
      const pointerCaptureTarget = ownerDocument.body;
      try {
        pointerCaptureTarget.setPointerCapture(event.pointerId);
      } catch (e) {
        this.handleCancel(event);
        return;
      }
      const listenerTargets = isElement(event.target) ? [event.target, pointerCaptureTarget] : pointerCaptureTarget;
      const unbind = this.listeners.bind(listenerTargets, [
        {
          type: "touchmove",
          listener: preventDefault,
          options: {
            passive: false
          }
        },
        {
          type: "click",
          listener: preventDefault
        },
        {
          type: "contextmenu",
          listener: preventDefault
        },
        {
          type: "keydown",
          listener: this.handleKeyDown
        }
      ]);
      __privateGet5(this, _cleanup).add(unbind);
    }
    handleCancel(event) {
      const { dragOperation } = this.manager;
      if (dragOperation.status.initialized) {
        this.manager.actions.stop({ event, canceled: true });
      }
      this.cleanup();
    }
    cleanup() {
      const { controller } = this;
      this.controller = undefined;
      if (controller && !controller.signal.aborted) {
        controller.abort();
      }
      this.latest = {
        event: undefined,
        coordinates: undefined
      };
      __privateGet5(this, _cleanup).forEach((cleanup) => cleanup());
      __privateGet5(this, _cleanup).clear();
    }
    destroy() {
      this.cleanup();
      this.listeners.clear();
    }
  };
  _cleanup = new WeakMap;
  _PointerSensor.configure = configurator(_PointerSensor);
  _PointerSensor.defaults = defaults2;
  var PointerSensor = _PointerSensor;
  function isCapturedBySensor(event) {
    return "sensor" in event;
  }
  function preventDefault(event) {
    event.preventDefault();
  }
  function noop() {}
  var windows = /* @__PURE__ */ new WeakSet;
  function patchWindow(window2) {
    if (!window2 || windows.has(window2)) {
      return;
    }
    window2.addEventListener("touchmove", noop, {
      capture: false,
      passive: false
    });
    windows.add(window2);
  }
  var defaultPreset = {
    modifiers: [],
    plugins: [Accessibility, AutoScroller, Cursor, Feedback, PreventSelection],
    sensors: [PointerSensor, KeyboardSensor]
  };
  var DragDropManager2 = class extends DragDropManager {
    constructor(input = {}) {
      const plugins = resolveCustomizable(input.plugins, defaultPreset.plugins);
      const sensors = resolveCustomizable(input.sensors, defaultPreset.sensors);
      const modifiers = resolveCustomizable(input.modifiers, defaultPreset.modifiers);
      super(__spreadProps3(__spreadValues4({}, input), {
        plugins: [ScrollListener, Scroller, StyleInjector, ...plugins],
        sensors,
        modifiers
      }));
    }
  };
  var _element_dec;
  var _handle_dec;
  var _c3;
  var _init52;
  var _handle;
  var _element;
  var Draggable2 = class extends (_c3 = Draggable, _handle_dec = [reactive], _element_dec = [reactive], _c3) {
    constructor(_a5, manager) {
      var _b2 = _a5, {
        element,
        effects: effects2 = () => [],
        handle
      } = _b2, input = __objRest2(_b2, [
        "element",
        "effects",
        "handle"
      ]);
      super(__spreadValues4({
        effects: () => [
          ...effects2(),
          () => {
            var _a6, _b3;
            const { manager: manager2 } = this;
            if (!manager2)
              return;
            const sensors = (_b3 = (_a6 = this.sensors) == null ? undefined : _a6.map(descriptor)) != null ? _b3 : [
              ...manager2.sensors
            ];
            const unbindFunctions = sensors.map((entry) => {
              const sensorInstance = entry instanceof Sensor ? entry : manager2.registry.register(entry.plugin);
              const options = entry instanceof Sensor ? undefined : entry.options;
              const unbind = sensorInstance.bind(this, options);
              return unbind;
            });
            return function cleanup() {
              unbindFunctions.forEach((unbind) => unbind());
            };
          }
        ]
      }, input), manager);
      __privateAdd5(this, _handle, __runInitializers4(_init52, 8, this)), __runInitializers4(_init52, 11, this);
      __privateAdd5(this, _element, __runInitializers4(_init52, 12, this)), __runInitializers4(_init52, 15, this);
      this.element = element;
      this.handle = handle;
    }
  };
  _init52 = __decoratorStart4(_c3);
  _handle = new WeakMap;
  _element = new WeakMap;
  __decorateElement4(_init52, 4, "handle", _handle_dec, Draggable2, _handle);
  __decorateElement4(_init52, 4, "element", _element_dec, Draggable2, _element);
  __decoratorMetadata4(_init52, Draggable2);
  var _proxy_dec;
  var _element_dec2;
  var _c23;
  var _init62;
  var _element2;
  var _d;
  var element_get;
  var element_set;
  var _Droppable_instances;
  var _proxy;
  var Droppable2 = class extends (_c23 = Droppable, _element_dec2 = [reactive], _proxy_dec = [reactive], _c23) {
    constructor(_a5, manager) {
      var _b2 = _a5, { element, effects: effects2 = () => [] } = _b2, input = __objRest2(_b2, ["element", "effects"]);
      const { collisionDetector = defaultCollisionDetection } = input;
      const updateShape = (boundingClientRect) => {
        const { manager: manager2, element: element2 } = this;
        if (!element2 || boundingClientRect === null) {
          this.shape = undefined;
          return;
        }
        if (!manager2)
          return;
        const updatedShape = new DOMRectangle(element2);
        const shape = f3(() => this.shape);
        if (updatedShape && (shape == null ? undefined : shape.equals(updatedShape))) {
          return shape;
        }
        this.shape = updatedShape;
        return updatedShape;
      };
      const observePosition = y3(false);
      super(__spreadProps3(__spreadValues4({}, input), {
        collisionDetector,
        effects: () => [
          ...effects2(),
          () => {
            const { element: element2, manager: manager2 } = this;
            if (!manager2)
              return;
            const { dragOperation } = manager2;
            const { source } = dragOperation;
            observePosition.value = Boolean(source && dragOperation.status.initialized && element2 && !this.disabled && this.accepts(source));
          },
          () => {
            const { element: element2 } = this;
            if (observePosition.value && element2) {
              const positionObserver = new FrameObserver(element2, updateShape);
              return () => {
                positionObserver.disconnect();
                this.shape = undefined;
              };
            }
          },
          () => {
            var _a6;
            if ((_a6 = this.manager) == null ? undefined : _a6.dragOperation.status.initialized) {
              return () => {
                this.shape = undefined;
              };
            }
          }
        ]
      }), manager);
      __privateAdd5(this, _Droppable_instances);
      __privateAdd5(this, _element2, __runInitializers4(_init62, 8, this)), __runInitializers4(_init62, 11, this);
      __privateAdd5(this, _proxy, __runInitializers4(_init62, 12, this)), __runInitializers4(_init62, 15, this);
      this.element = element;
      this.refreshShape = () => updateShape();
    }
    set element(element) {
      __privateSet5(this, _Droppable_instances, element, element_set);
    }
    get element() {
      var _a5;
      return (_a5 = this.proxy) != null ? _a5 : __privateGet5(this, _Droppable_instances, element_get);
    }
  };
  _init62 = __decoratorStart4(_c23);
  _element2 = new WeakMap;
  _Droppable_instances = new WeakSet;
  _proxy = new WeakMap;
  _d = __decorateElement4(_init62, 20, "#element", _element_dec2, _Droppable_instances, _element2), element_get = _d.get, element_set = _d.set;
  __decorateElement4(_init62, 4, "proxy", _proxy_dec, Droppable2, _proxy);
  __decoratorMetadata4(_init62, Droppable2);

  // html/scripts/tiermaker-state.ts
  var COMMANDERS = [
    "abathur",
    "alarak",
    "mengsk",
    "artanis",
    "dehaka",
    "fenix",
    "horner",
    "karax",
    "kerrigan",
    "nova",
    "raynor",
    "stetmann",
    "stukov",
    "swann",
    "tychus",
    "vorazun",
    "zagara",
    "zeratul"
  ];
  var TIERS = ["SSS", "SS", "S", "A", "B", "C", "D", "E", "F"];
  function commanderName(id) {
    return id === "horner" ? "Han & Horner" : id.charAt(0).toUpperCase() + id.slice(1);
  }
  function isCommander(id) {
    return typeof id === "string" && COMMANDERS.includes(id);
  }
  function emptyRanking() {
    return { tiers: { SSS: [], SS: [], S: [], A: [], B: [], C: [], D: [], E: [], F: [] }, current: "abathur" };
  }
  function placedCommanders(tiers) {
    return new Set(TIERS.flatMap((tier) => tiers[tier]));
  }
  function moveCommander(state, id, tier, before) {
    if (before === id)
      return state;
    const tiers = Object.fromEntries(TIERS.map((key) => [key, state.tiers[key].filter((c) => c !== id)]));
    if (tier === null)
      return { tiers, current: id };
    const index = before ? tiers[tier].indexOf(before) : -1;
    tiers[tier].splice(index < 0 ? tiers[tier].length : index, 0, id);
    let current = state.current;
    if (current === id) {
      const placed = placedCommanders(tiers);
      const offset = COMMANDERS.indexOf(id) + 1;
      current = [...COMMANDERS.slice(offset), ...COMMANDERS.slice(0, offset)].find((commander) => !placed.has(commander)) ?? null;
    }
    return { tiers, current };
  }
  function brutalLevel(total) {
    if (total === 0)
      return 0;
    return [6, 8, 10, 14, 19].findIndex((limit) => total <= limit) + 1 || 6;
  }
  // node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
  var f4 = 0;
  function u4(e, t, n, o, i, u) {
    t || (t = {});
    var a, c, p = t;
    if ("ref" in p)
      for (c in p = {}, t)
        c == "ref" ? a = t[c] : p[c] = t[c];
    var l2 = { type: e, props: p, key: n, ref: a, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: undefined, __v: --f4, __i: -1, __u: 0, __source: i, __self: u };
    if (typeof e == "function" && (a = e.defaultProps))
      for (c in a)
        p[c] === undefined && (p[c] = a[c]);
    return l.vnode && l.vnode(l2), l2;
  }

  // html/scripts/tiermaker.tsx
  var PrestigeContext = X({});
  var portrait = (id) => `/images/commanderportraits/${id}portrait.png`;
  var reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var DragContext = X(null);
  var missionBackgrounds = {
    "Chain of Ascension": "chainofascension.jpg",
    "Cradle of Death": "cradleofdeath.png",
    "Dead of Night": "deadofnight.jpg",
    "Lock Load": "lockload.jpg",
    Malwarfare: "malwarfare.jpg",
    "Miner Evacuation": "minerevacuation.png",
    "Mist Opportunities": "mistopportunities.jpg",
    "Oblivion Express": "oblivionexpress.jpg",
    "Part and Parcel": "partparcel.jpg",
    "Rifts to Korhal": "riftstokorhal.jpg",
    "Scythe of Amon": "scytheofamon.jpg",
    "Temple of the Past": "templeofthepast.jpg",
    "The Vermillion Problem": "thevermillionproblem.png",
    "Void Launch": "voidlaunch.jpg",
    "Void Thrashing": "voidthrashing.jpg"
  };
  function PrestigeBadge({ value, showPrefix = false }) {
    return value ? /* @__PURE__ */ u4("span", {
      class: "prestige-badge",
      "aria-hidden": "true",
      children: showPrefix ? `P${value}` : value
    }, undefined, false, undefined, this) : null;
  }
  function portraitPreview(id, prestige, size) {
    const preview = document.createElement("div");
    preview.className = "commander-preview";
    preview.style.width = preview.style.height = `${size}px`;
    preview.style.fontSize = `${size * 28 / 64}px`;
    const image = document.createElement("img");
    image.src = portrait(id);
    image.alt = "";
    preview.append(image);
    if (prestige) {
      const badge = document.createElement("span");
      badge.className = "prestige-badge";
      badge.textContent = String(prestige);
      preview.append(badge);
    }
    return preview;
  }
  function useCommanderDrag(id, location, canDrag) {
    const manager = x2(DragContext);
    const prestige = x2(PrestigeContext)[id] ?? 0;
    const ref = A2(null);
    y2(() => {
      const draggable = new Draggable2({
        id: `${location}-${id}`,
        element: ref.current,
        data: { commander: id, prestige }
      }, manager);
      const cleanup = manager.monitor.addEventListener("beforedragstart", (event) => {
        if (event.operation.source === draggable && !canDrag())
          event.preventDefault();
      });
      return () => {
        cleanup();
        draggable.destroy();
      };
    }, [manager, id, location, canDrag, prestige]);
    return ref;
  }
  function useCommanderDrop(tier, onMove) {
    const manager = x2(DragContext);
    const ref = A2(null);
    const [hover, setHover] = d2(null);
    y2(() => {
      const element = ref.current;
      const target = new Droppable2({ id: tier ?? "pool", element, collisionDetector: pointerIntersection }, manager);
      const beforeAt = (id, x) => {
        const placeholder = element.querySelector(".commander-drop-placeholder");
        if (placeholder) {
          const rect = placeholder.getBoundingClientRect();
          if (x >= rect.left && x <= rect.right)
            return placeholder.dataset.before;
        }
        const next = [...element.querySelectorAll("[data-tier-portrait]")].filter((item) => item.dataset.tierPortrait !== id).find((item) => {
          const rect = item.getBoundingClientRect();
          return x < rect.left + rect.width / 2;
        });
        return next?.dataset.tierPortrait;
      };
      const update = (event) => {
        const { operation } = event;
        const id = operation.source?.data.commander;
        if (operation.target !== target || !isCommander(id)) {
          setHover(null);
          return;
        }
        const point = "to" in event && event.to ? event.to : operation.position.current;
        const before = beforeAt(id, point.x);
        setHover((previous) => previous && previous.before === before ? previous : { before });
      };
      const cleanups = [
        manager.monitor.addEventListener("dragmove", update),
        manager.monitor.addEventListener("dragover", update),
        manager.monitor.addEventListener("dragend", ({ operation, canceled }) => {
          setHover(null);
          const id = operation.source?.data.commander;
          if (!canceled && operation.target === target && isCommander(id)) {
            const preview = document.querySelector(".dragging-commander");
            onMove(id, tier, beforeAt(id, operation.position.current.x), preview ? {
              from: preview.getBoundingClientRect(),
              prestige: operation.source.data.prestige
            } : undefined);
          }
        })
      ];
      return () => {
        cleanups.forEach((cleanup) => cleanup());
        target.destroy();
      };
    }, [manager, tier, onMove]);
    return { ref, hover };
  }
  function useCommanderDragManager() {
    const [manager] = d2(() => new DragDropManager2({
      sensors: [PointerSensor.configure({
        activationConstraints: [new PointerActivationConstraints.Distance({ value: 5 })]
      })],
      plugins: [Cursor, PreventSelection]
    }));
    y2(() => {
      let preview;
      let liftedPortrait = null;
      let liftedBanner = null;
      let liftedPoolPortrait = null;
      const clearPreview = () => {
        preview?.remove();
        preview = undefined;
        liftedPortrait?.removeAttribute("data-dragging");
        liftedPortrait = null;
        liftedBanner?.removeAttribute("data-dragging");
        liftedBanner = null;
        liftedPoolPortrait?.removeAttribute("data-dragging");
        liftedPoolPortrait = null;
      };
      const positionPreview = ({ x, y }) => {
        if (preview)
          preview.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      };
      const cleanups = [
        manager.monitor.addEventListener("dragstart", ({ operation }) => {
          const id = operation.source?.data.commander;
          if (!isCommander(id))
            return;
          liftedPortrait = document.querySelector(`[data-tier-portrait="${id}"]`);
          liftedPortrait?.setAttribute("data-dragging", "true");
          liftedBanner = document.querySelector(`.commander-banner[data-commander="${id}"]`);
          liftedBanner?.setAttribute("data-dragging", "true");
          liftedPoolPortrait = document.querySelector(`[data-pool-portrait="${id}"]`);
          liftedPoolPortrait?.setAttribute("data-dragging", "true");
          const scale = document.querySelector(".tiermaker").getBoundingClientRect().width / 1920;
          preview = portraitPreview(id, operation.source.data.prestige, 64 * scale);
          preview.classList.add("dragging-commander");
          document.body.append(preview);
          positionPreview(operation.position.current);
          manager.dragOperation.shape = new DOMRectangle(preview);
        }),
        j3(() => {
          const { position, status } = manager.dragOperation;
          if (!status.dragging || !preview)
            return;
          positionPreview(position.current);
          manager.dragOperation.shape = new DOMRectangle(preview);
        }),
        manager.monitor.addEventListener("dragend", () => queueMicrotask(clearPreview))
      ];
      const cancel = () => {
        if (!manager.dragOperation.status.idle)
          manager.actions.stop({ canceled: true });
      };
      window.addEventListener("blur", cancel);
      window.addEventListener("resize", cancel);
      return () => {
        cancel();
        cleanups.forEach((cleanup) => cleanup());
        window.removeEventListener("blur", cancel);
        window.removeEventListener("resize", cancel);
        clearPreview();
        manager.destroy();
      };
    }, [manager]);
    return manager;
  }
  function CommanderPortrait({ id, location, selected, placed, arriving, onSelect, onReturn, canDrag }) {
    const ref = useCommanderDrag(id, location, canDrag);
    const prestige = x2(PrestigeContext)[id] ?? 0;
    return /* @__PURE__ */ u4("button", {
      type: "button",
      ref,
      "data-commander": id,
      class: `commander-portrait ${selected ? "is-current" : ""} ${placed ? "is-placed" : ""} ${arriving ? "is-arriving" : ""}`,
      "data-tier-portrait": location === "tier" ? id : undefined,
      "data-pool-portrait": location === "pool" ? id : undefined,
      "aria-label": `Select ${commanderName(id)}, P${prestige}${placed ? ", ranked" : ""}`,
      "aria-pressed": selected ?? false,
      onClick: () => onSelect(id),
      onKeyDown: (event) => {
        if ((event.key === "Delete" || event.key === "Backspace") && (placed || location === "tier")) {
          event.preventDefault();
          onReturn(id);
        }
      },
      children: [
        /* @__PURE__ */ u4("img", {
          src: portrait(id),
          alt: "",
          width: location === "pool" ? 50 : 64,
          height: location === "pool" ? 50 : 64,
          draggable: false
        }, undefined, false, undefined, this),
        /* @__PURE__ */ u4(PrestigeBadge, {
          value: prestige
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this);
  }
  function TierRow({ tier, commanders, current, pending, onMove, onPlace, onSelect, onReturn, canDrag }) {
    const { ref, hover } = useCommanderDrop(tier, onMove);
    return /* @__PURE__ */ u4("tr", {
      ref,
      class: `tier-${tier.toLowerCase()} ${hover ? "is-drop-target" : ""}`,
      children: [
        /* @__PURE__ */ u4("th", {
          scope: "row",
          children: /* @__PURE__ */ u4("button", {
            type: "button",
            class: "tier-label",
            disabled: !current || !!pending,
            "aria-label": current ? `Place ${commanderName(current)} in ${tier} tier` : `${tier} tier`,
            onClick: () => onPlace(tier),
            children: tier
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this),
        /* @__PURE__ */ u4("td", {
          children: /* @__PURE__ */ u4("div", {
            class: "tier-commanders",
            children: [
              commanders.map((id) => /* @__PURE__ */ u4(S, {
                children: [
                  hover?.before === id && /* @__PURE__ */ u4("span", {
                    class: "commander-drop-placeholder",
                    "data-before": id,
                    "aria-hidden": "true"
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ u4(CommanderPortrait, {
                    id,
                    location: "tier",
                    selected: id === current,
                    arriving: id === pending,
                    onSelect,
                    onReturn,
                    canDrag
                  }, undefined, false, undefined, this)
                ]
              }, id, true, undefined, this)),
              hover && !hover.before && /* @__PURE__ */ u4("span", {
                class: "commander-drop-placeholder",
                "aria-hidden": "true"
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this);
  }
  function CurrentCommander({ id, canDrag, onReturn }) {
    const ref = useCommanderDrag(id, "current", canDrag);
    const prestige = x2(PrestigeContext)[id] ?? 0;
    _2(() => {
      if (!reducedMotion())
        ref.current?.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 180 });
    }, [id]);
    return /* @__PURE__ */ u4("button", {
      ref,
      type: "button",
      class: "commander-banner",
      "data-commander": id,
      "aria-label": `Drag ${commanderName(id)}, P${prestige}, to a tier, or choose a tier letter`,
      onKeyDown: (event) => {
        if (event.key === "Delete" || event.key === "Backspace") {
          event.preventDefault();
          onReturn(id);
        }
      },
      children: [
        /* @__PURE__ */ u4("img", {
          src: `/images/ctg/commanders/${id}.png`,
          alt: commanderName(id),
          width: "500",
          height: "94",
          draggable: false
        }, undefined, false, undefined, this),
        /* @__PURE__ */ u4(PrestigeBadge, {
          value: prestige,
          showPrefix: true
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this);
  }
  function CommanderPool({ current, placed, pending, returning, onMove, onSelect, onReturn, canDrag }) {
    const { ref, hover } = useCommanderDrop(null, onMove);
    return /* @__PURE__ */ u4("div", {
      ref,
      class: `pool ${hover ? "is-drop-target" : ""}`,
      role: "group",
      "aria-label": "Commanders — drop here to unrank",
      children: COMMANDERS.map((id) => /* @__PURE__ */ u4(CommanderPortrait, {
        id,
        location: "pool",
        selected: id === current,
        placed: placed.has(id) && id !== pending,
        arriving: id === returning,
        onSelect,
        onReturn,
        canDrag
      }, id, false, undefined, this))
    }, undefined, false, undefined, this);
  }
  function MutationBox({ data, mutation, onSelect }) {
    const mutators = [mutation?.mut01, mutation?.mut02, mutation?.mut03].map((id) => id ? data.mutators[id] : undefined);
    const difficulty = brutalLevel(mutators.reduce((sum, item) => sum + Number(item?.abomination ?? 0), 0));
    return /* @__PURE__ */ u4("div", {
      id: "box1",
      class: "box",
      children: [
        /* @__PURE__ */ u4("select", {
          class: "mutation",
          "aria-label": "Mutation",
          value: mutation?.mutationid ?? "",
          onChange: (event) => onSelect(event.currentTarget.value),
          children: [
            /* @__PURE__ */ u4("option", {
              value: "",
              children: "(select a mutation)"
            }, undefined, false, undefined, this),
            data.mutations.map((item) => /* @__PURE__ */ u4("option", {
              value: item.mutationid,
              children: item.mutation
            }, item.mutationid, false, undefined, this))
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ u4("div", {
          class: "info",
          children: [
            /* @__PURE__ */ u4("img", {
              class: "map",
              src: mutation ? `/images/ctg/${mutation.map.replace(/ /g, "").toLowerCase()}.png` : undefined,
              width: "450",
              height: "50",
              alt: mutation?.map ?? ""
            }, mutation ? "map" : "empty-map", false, undefined, this),
            /* @__PURE__ */ u4("img", {
              class: "difficulty",
              src: mutation ? `/images/ctg/brutal${difficulty}.png` : undefined,
              width: "170",
              height: "50",
              alt: mutation ? `Brutal${difficulty ? `+${difficulty}` : ""}` : "",
              style: "float:right"
            }, mutation ? "difficulty" : "empty-difficulty", false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        mutators.map((item, index) => /* @__PURE__ */ u4("div", {
          class: "mutdata",
          children: [
            /* @__PURE__ */ u4("img", {
              src: item ? `/images/mutators/${item.mutatorid}.png` : undefined,
              width: "50",
              height: "50",
              alt: ""
            }, item ? "icon" : "empty-icon", false, undefined, this),
            /* @__PURE__ */ u4("p", {
              children: item && /* @__PURE__ */ u4(S, {
                children: [
                  /* @__PURE__ */ u4("b", {
                    class: "mutname",
                    children: item.mutatorname
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ u4("br", {}, undefined, false, undefined, this),
                  /* @__PURE__ */ u4("span", {
                    dangerouslySetInnerHTML: { __html: item.mutatordescription }
                  }, undefined, false, undefined, this)
                ]
              }, undefined, true, undefined, this)
            }, undefined, false, undefined, this)
          ]
        }, index, true, undefined, this))
      ]
    }, undefined, true, undefined, this);
  }
  function ContextMenu({ position, label, items, onClose }) {
    const ref = A2(null);
    _2(() => {
      const menu = ref.current;
      const frame = menu.parentElement;
      const bounds = frame.getBoundingClientRect();
      const scale = bounds.width / frame.offsetWidth;
      const rect = menu.getBoundingClientRect();
      menu.style.left = `${Math.max(8, Math.min((position.x - bounds.left) / scale, (bounds.width - rect.width) / scale - 8))}px`;
      menu.style.top = `${Math.max(8, Math.min((position.y - bounds.top) / scale, (bounds.height - rect.height) / scale - 8))}px`;
      (menu.querySelector('[aria-checked="true"]') ?? menu.querySelector("button:not(:disabled)") ?? menu).focus({ preventScroll: true });
    }, [position]);
    y2(() => {
      const outside = (event) => {
        if (!ref.current?.contains(event.target))
          onClose();
      };
      document.addEventListener("pointerdown", outside);
      window.addEventListener("resize", onClose);
      window.addEventListener("blur", onClose);
      return () => {
        document.removeEventListener("pointerdown", outside);
        window.removeEventListener("resize", onClose);
        window.removeEventListener("blur", onClose);
      };
    }, [onClose]);
    const dismiss = () => {
      onClose();
      position.trigger.focus({ preventScroll: true });
    };
    return /* @__PURE__ */ u4("div", {
      ref,
      class: "tier-menu",
      role: "menu",
      "aria-label": label,
      tabIndex: -1,
      onContextMenu: (event) => event.preventDefault(),
      onKeyDown: (event) => {
        if (event.key === "Escape" || event.key === "Tab") {
          event.preventDefault();
          dismiss();
        } else if (["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) {
          event.preventDefault();
          const items = [...ref.current.querySelectorAll("button:not(:disabled)")];
          const index = items.indexOf(document.activeElement);
          const next = event.key === "Home" ? 0 : event.key === "End" ? items.length - 1 : (index + (event.key === "ArrowDown" ? 1 : -1) + items.length) % items.length;
          items[next]?.focus({ preventScroll: true });
        }
      },
      children: items.map((item) => /* @__PURE__ */ u4("button", {
        type: "button",
        role: item.checked === undefined ? "menuitem" : "menuitemradio",
        "aria-label": item.label,
        "aria-checked": item.checked,
        disabled: item.disabled,
        onClick: () => {
          item.select();
          dismiss();
        },
        children: item.label
      }, item.label, false, undefined, this))
    }, undefined, false, undefined, this);
  }
  function TierMaker({ data }) {
    const manager = useCommanderDragManager();
    const [selectedMutation, setSelectedMutation] = d2("");
    const mutation = data.mutations.find((item) => String(item.mutationid) === selectedMutation);
    const background = mutation && missionBackgrounds[mutation.map];
    const [ranking, setRanking] = d2(emptyRanking);
    const [pending, setPending] = d2(null);
    const [announcement, setAnnouncement] = d2("");
    const [visibleTiers, setVisibleTiers] = d2(() => TIERS.filter((tier) => tier !== "SS" && tier !== "SSS"));
    const [prestiges, setPrestiges] = d2({});
    const [menu, setMenu] = d2(null);
    const closeMenu = q2(() => setMenu(null), []);
    const latest = A2(ranking);
    latest.current = ranking;
    const busy = A2(false);
    const canDrag = q2(() => !busy.current, []);
    const move = q2((id, tier, before, origin) => {
      if (busy.current)
        return;
      const next = moveCommander(latest.current, id, tier, before);
      if (origin && !reducedMotion()) {
        busy.current = true;
        setRanking({ ...next, current: latest.current.current });
        setPending({ ...origin, id, tier, duration: 180, nextCurrent: next.current });
      } else {
        setRanking(next);
      }
      setAnnouncement(`${commanderName(id)} ${tier ? `placed in ${tier} tier` : "returned to the pool"}.`);
    }, []);
    const select = q2((id) => {
      if (!busy.current)
        setRanking((state) => ({ ...state, current: id }));
    }, []);
    const unrank = q2((id) => {
      if (busy.current)
        return;
      move(id, null);
      requestAnimationFrame(() => document.querySelector(`[data-pool-portrait="${id}"]`)?.focus({ preventScroll: true }));
    }, [move]);
    const place = q2((tier) => {
      const state = latest.current;
      if (!state.current || busy.current)
        return;
      const id = state.current;
      const origin = document.querySelector(`[data-tier-portrait="${id}"]`) ?? document.querySelector(`[data-pool-portrait="${id}"]`);
      if (!origin || reducedMotion()) {
        move(id, tier);
        return;
      }
      const next = moveCommander(state, id, tier);
      busy.current = true;
      const from = origin.getBoundingClientRect();
      setRanking({ ...next, current: id });
      setPending({ id, tier, duration: 320, prestige: prestiges[id] ?? 0, from, nextCurrent: next.current });
      setAnnouncement(`${commanderName(id)} placed in ${tier} tier.`);
    }, [move, prestiges]);
    _2(() => {
      if (!pending)
        return;
      const target = document.querySelector(`[data-${pending.tier === null ? "pool" : "tier"}-portrait="${pending.id}"]`);
      target.removeAttribute("data-dragging");
      const to = target.getBoundingClientRect();
      const image = portraitPreview(pending.id, pending.prestige, pending.from.width);
      image.classList.add("flying-commander");
      image.style.left = `${pending.from.left}px`;
      image.style.top = `${pending.from.top}px`;
      document.body.append(image);
      const animation = image.animate([
        { transform: "translate(0, 0) scale(1)" },
        { transform: `translate(${to.left - pending.from.left}px, ${to.top - pending.from.top}px) scale(${to.width / pending.from.width})` }
      ], { duration: pending.duration, easing: "cubic-bezier(0.2, 0.7, 0.2, 1)", fill: "forwards" });
      let active = true;
      const cancel = () => animation.cancel();
      window.addEventListener("resize", cancel, { once: true });
      window.addEventListener("blur", cancel, { once: true });
      animation.finished.catch(() => {}).then(() => {
        if (!active)
          return;
        setRanking((state) => ({ ...state, current: pending.nextCurrent }));
        setPending(null);
        busy.current = false;
      });
      return () => {
        active = false;
        animation.cancel();
        image.remove();
        window.removeEventListener("resize", cancel);
        window.removeEventListener("blur", cancel);
      };
    }, [pending]);
    const openMenu = (target, x, y) => {
      if (busy.current || !manager.dragOperation.status.idle)
        return;
      const commanderButton = target.closest("[data-commander]");
      const commander = commanderButton?.dataset.commander;
      const table = target.closest(".tiers");
      if (!commanderButton && !table)
        return;
      const trigger = commanderButton ?? target.closest("button") ?? table;
      const rect = trigger.getBoundingClientRect();
      setMenu({ x: x ?? rect.left, y: y ?? rect.top, trigger, commander: isCommander(commander) ? commander : undefined });
    };
    const menuCommander = menu?.commander;
    const menuItems = menuCommander ? [0, 1, 2, 3].map((prestige) => ({
      label: `P${prestige}: ${data.prestigeNames[menuCommander][prestige]}`,
      checked: (prestiges[menuCommander] ?? 0) === prestige,
      select: () => {
        setPrestiges((previous) => ({ ...previous, [menuCommander]: prestige }));
        setAnnouncement(`${commanderName(menuCommander)} set to P${prestige}.`);
      }
    })) : ["SS", "SSS"].map((tier) => ({
      label: `Add ${tier}`,
      disabled: visibleTiers.includes(tier),
      select: () => {
        setVisibleTiers((previous) => TIERS.filter((item) => previous.includes(item) || item === tier));
        setAnnouncement(`${tier} tier added.`);
      }
    }));
    return /* @__PURE__ */ u4(DragContext.Provider, {
      value: manager,
      children: /* @__PURE__ */ u4(PrestigeContext.Provider, {
        value: prestiges,
        children: [
          /* @__PURE__ */ u4("main", {
            class: "tiermaker",
            style: { backgroundImage: background ? `url("/images/missions/${background}")` : undefined },
            onContextMenu: (event) => {
              const target = event.target;
              if (!target.closest("[data-commander], .tiers"))
                return;
              event.preventDefault();
              openMenu(target, event.clientX, event.clientY);
            },
            onKeyDown: (event) => {
              if (event.key !== "ContextMenu" && !(event.shiftKey && event.key === "F10"))
                return;
              const target = event.target;
              if (!target.closest("[data-commander], .tiers"))
                return;
              event.preventDefault();
              openMenu(target);
            },
            children: [
              /* @__PURE__ */ u4("table", {
                class: "tiers",
                "aria-label": "Commander tiers",
                tabIndex: 0,
                style: { "--tier-count": visibleTiers.length },
                children: /* @__PURE__ */ u4("tbody", {
                  children: visibleTiers.map((tier) => /* @__PURE__ */ u4(TierRow, {
                    tier,
                    commanders: ranking.tiers[tier],
                    current: ranking.current,
                    pending: pending?.id ?? null,
                    onMove: move,
                    onPlace: place,
                    onSelect: select,
                    onReturn: unrank,
                    canDrag
                  }, tier, false, undefined, this))
                }, undefined, false, undefined, this)
              }, undefined, false, undefined, this),
              /* @__PURE__ */ u4(MutationBox, {
                data,
                mutation,
                onSelect: setSelectedMutation
              }, undefined, false, undefined, this),
              /* @__PURE__ */ u4("div", {
                class: "commander-queue",
                children: [
                  /* @__PURE__ */ u4("section", {
                    "aria-labelledby": "current-commander-heading",
                    children: [
                      /* @__PURE__ */ u4("h1", {
                        id: "current-commander-heading",
                        children: "Current Commander"
                      }, undefined, false, undefined, this),
                      /* @__PURE__ */ u4("div", {
                        id: "current-commander",
                        children: ranking.current ? /* @__PURE__ */ u4(CurrentCommander, {
                          id: ranking.current,
                          canDrag,
                          onReturn: unrank
                        }, undefined, false, undefined, this) : /* @__PURE__ */ u4("p", {
                          class: "ranking-complete",
                          children: "All commanders ranked"
                        }, undefined, false, undefined, this)
                      }, undefined, false, undefined, this)
                    ]
                  }, undefined, true, undefined, this),
                  /* @__PURE__ */ u4(CommanderPool, {
                    current: ranking.current,
                    placed: placedCommanders(ranking.tiers),
                    pending: pending?.id ?? null,
                    returning: pending?.tier === null ? pending.id : null,
                    onMove: move,
                    onSelect: select,
                    onReturn: unrank,
                    canDrag
                  }, undefined, false, undefined, this)
                ]
              }, undefined, true, undefined, this),
              menu && /* @__PURE__ */ u4(ContextMenu, {
                position: menu,
                label: menuCommander ? `${commanderName(menuCommander)} prestige` : "Additional tiers",
                items: menuItems,
                onClose: closeMenu
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ u4("p", {
            class: "visually-hidden",
            role: "status",
            "aria-live": "polite",
            children: announcement
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this)
    }, undefined, false, undefined, this);
  }
  R(/* @__PURE__ */ u4(TierMaker, {
    data: window.tiermakerData
  }, undefined, false, undefined, this), document.getElementById("tiermaker-root"));
})();

//# debugId=FAB514BEC52DDE7864756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC9kaXN0L3ByZWFjdC5tb2R1bGUuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC9ob29rcy9kaXN0L2hvb2tzLm1vZHVsZS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvQHByZWFjdC9zaWduYWxzLWNvcmUvZGlzdC9zaWduYWxzLWNvcmUubW9kdWxlLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9AZG5kLWtpdC9zdGF0ZS9kaXN0L2luZGV4Lm1qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvQGRuZC1raXQvZ2VvbWV0cnkvZGlzdC9pbmRleC5tanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL0BkbmQta2l0L2Fic3RyYWN0L2luZGV4LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9AZG5kLWtpdC9kb20vdXRpbGl0aWVzLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9AZG5kLWtpdC9jb2xsaXNpb24vZGlzdC9pbmRleC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvQGRuZC1raXQvZG9tL2luZGV4LmpzIiwgInRpZXJtYWtlci1zdGF0ZS50cyIsICIuLi8uLi9ub2RlX21vZHVsZXMvcHJlYWN0L2pzeC1ydW50aW1lL2Rpc3QvanN4UnVudGltZS5tb2R1bGUuanMiLCAidGllcm1ha2VyLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsKICAgICJ2YXIgbixsLHUsdCxpLHIsbyxlLGYsYyxzLGEsaCxwLHYseSxkPXt9LHc9W10sXz0vYWNpdHxleCg/OnN8Z3xufHB8JCl8cnBofGdyaWR8b3dzfG1uY3xudHd8aW5lW2NoXXx6b298Xm9yZHxpdGVyYS9pLGc9QXJyYXkuaXNBcnJheTtmdW5jdGlvbiBtKG4sbCl7Zm9yKHZhciB1IGluIGwpblt1XT1sW3VdO3JldHVybiBufWZ1bmN0aW9uIGIobil7biYmbi5wYXJlbnROb2RlJiZuLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobil9ZnVuY3Rpb24gayhsLHUsdCl7dmFyIGkscixvLGU9e307Zm9yKG8gaW4gdSlcImtleVwiPT1vP2k9dVtvXTpcInJlZlwiPT1vP3I9dVtvXTplW29dPXVbb107aWYoYXJndW1lbnRzLmxlbmd0aD4yJiYoZS5jaGlsZHJlbj1hcmd1bWVudHMubGVuZ3RoPjM/bi5jYWxsKGFyZ3VtZW50cywyKTp0KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBsJiZudWxsIT1sLmRlZmF1bHRQcm9wcylmb3IobyBpbiBsLmRlZmF1bHRQcm9wcyl2b2lkIDA9PT1lW29dJiYoZVtvXT1sLmRlZmF1bHRQcm9wc1tvXSk7cmV0dXJuIHgobCxlLGkscixudWxsKX1mdW5jdGlvbiB4KG4sdCxpLHIsbyl7dmFyIGU9e3R5cGU6bixwcm9wczp0LGtleTppLHJlZjpyLF9fazpudWxsLF9fOm51bGwsX19iOjAsX19lOm51bGwsX19jOm51bGwsY29uc3RydWN0b3I6dm9pZCAwLF9fdjpudWxsPT1vPysrdTpvLF9faTotMSxfX3U6MH07cmV0dXJuIG51bGw9PW8mJm51bGwhPWwudm5vZGUmJmwudm5vZGUoZSksZX1mdW5jdGlvbiBNKCl7cmV0dXJue2N1cnJlbnQ6bnVsbH19ZnVuY3Rpb24gUyhuKXtyZXR1cm4gbi5jaGlsZHJlbn1mdW5jdGlvbiBDKG4sbCl7dGhpcy5wcm9wcz1uLHRoaXMuY29udGV4dD1sfWZ1bmN0aW9uICQobixsKXtpZihudWxsPT1sKXJldHVybiBuLl9fPyQobi5fXyxuLl9faSsxKTpudWxsO2Zvcih2YXIgdTtsPG4uX19rLmxlbmd0aDtsKyspaWYobnVsbCE9KHU9bi5fX2tbbF0pJiZudWxsIT11Ll9fZSlyZXR1cm4gdS5fX2U7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2Ygbi50eXBlPyQobik6bnVsbH1mdW5jdGlvbiBJKG4pe2lmKG4uX19QJiZuLl9fZCl7dmFyIHU9bi5fX3YsdD11Ll9fZSxpPVtdLHI9W10sbz1tKHt9LHUpO28uX192PXUuX192KzEsbC52bm9kZSYmbC52bm9kZShvKSxxKG4uX19QLG8sdSxuLl9fbixuLl9fUC5uYW1lc3BhY2VVUkksMzImdS5fX3U/W3RdOm51bGwsaSxudWxsPT10PyQodSk6dCwhISgzMiZ1Ll9fdSksciksby5fX3Y9dS5fX3Ysby5fXy5fX2tbby5fX2ldPW8sRChpLG8sciksdS5fX2U9dS5fXz1udWxsLG8uX19lIT10JiZQKG8pfX1mdW5jdGlvbiBQKG4pe2lmKG51bGwhPShuPW4uX18pJiZudWxsIT1uLl9fYylyZXR1cm4gbi5fX2U9bi5fX2MuYmFzZT1udWxsLG4uX19rLnNvbWUoZnVuY3Rpb24obCl7aWYobnVsbCE9bCYmbnVsbCE9bC5fX2UpcmV0dXJuIG4uX19lPW4uX19jLmJhc2U9bC5fX2V9KSxQKG4pfWZ1bmN0aW9uIEEobil7KCFuLl9fZCYmKG4uX19kPSEwKSYmaS5wdXNoKG4pJiYhSC5fX3IrK3x8ciE9bC5kZWJvdW5jZVJlbmRlcmluZykmJigocj1sLmRlYm91bmNlUmVuZGVyaW5nKXx8bykoSCl9ZnVuY3Rpb24gSCgpe3RyeXtmb3IodmFyIG4sbD0xO2kubGVuZ3RoOylpLmxlbmd0aD5sJiZpLnNvcnQoZSksbj1pLnNoaWZ0KCksbD1pLmxlbmd0aCxJKG4pfWZpbmFsbHl7aS5sZW5ndGg9SC5fX3I9MH19ZnVuY3Rpb24gTChuLGwsdSx0LGkscixvLGUsZixjLHMpe3ZhciBhLGgscCx2LHksXyxnLG09dCYmdC5fX2t8fHcsYj1sLmxlbmd0aDtmb3IoZj1UKHUsbCxtLGYsYiksYT0wO2E8YjthKyspbnVsbCE9KHA9dS5fX2tbYV0pJiYoaD0tMSE9cC5fX2kmJm1bcC5fX2ldfHxkLHAuX19pPWEsXz1xKG4scCxoLGkscixvLGUsZixjLHMpLHY9cC5fX2UscC5yZWYmJmgucmVmIT1wLnJlZiYmKGgucmVmJiZKKGgucmVmLG51bGwscCkscy5wdXNoKHAucmVmLHAuX19jfHx2LHApKSxudWxsPT15JiZudWxsIT12JiYoeT12KSwoZz0hISg0JnAuX191KSl8fGguX19rPT09cC5fX2s/KGY9aihwLGYsbixnKSxnJiZoLl9fZSYmKGguX19lPW51bGwpKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBwLnR5cGUmJnZvaWQgMCE9PV8/Zj1fOnYmJihmPXYubmV4dFNpYmxpbmcpLHAuX191Jj0tNyk7cmV0dXJuIHUuX19lPXksZn1mdW5jdGlvbiBUKG4sbCx1LHQsaSl7dmFyIHIsbyxlLGYsYyxzPXUubGVuZ3RoLGE9cyxoPTA7Zm9yKG4uX19rPW5ldyBBcnJheShpKSxyPTA7cjxpO3IrKyludWxsIT0obz1sW3JdKSYmXCJib29sZWFuXCIhPXR5cGVvZiBvJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBvPyhcInN0cmluZ1wiPT10eXBlb2Ygb3x8XCJudW1iZXJcIj09dHlwZW9mIG98fFwiYmlnaW50XCI9PXR5cGVvZiBvfHxvLmNvbnN0cnVjdG9yPT1TdHJpbmc/bz1uLl9fa1tyXT14KG51bGwsbyxudWxsLG51bGwsbnVsbCk6ZyhvKT9vPW4uX19rW3JdPXgoUyx7Y2hpbGRyZW46b30sbnVsbCxudWxsLG51bGwpOnZvaWQgMD09PW8uY29uc3RydWN0b3ImJm8uX19iPjA/bz1uLl9fa1tyXT14KG8udHlwZSxvLnByb3BzLG8ua2V5LG8ucmVmP28ucmVmOm51bGwsby5fX3YpOm4uX19rW3JdPW8sZj1yK2gsby5fXz1uLG8uX19iPW4uX19iKzEsZT1udWxsLC0xIT0oYz1vLl9faT1PKG8sdSxmLGEpKSYmKGEtLSwoZT11W2NdKSYmKGUuX191fD0yKSksbnVsbD09ZXx8bnVsbD09ZS5fX3Y/KC0xPT1jJiYoaT5zP2gtLTppPHMmJmgrKyksXCJmdW5jdGlvblwiIT10eXBlb2Ygby50eXBlJiYoby5fX3V8PTQpKTpjIT1mJiYoYz09Zi0xP2gtLTpjPT1mKzE/aCsrOihjPmY/aC0tOmgrKyxvLl9fdXw9NCkpKTpuLl9fa1tyXT1udWxsO2lmKGEpZm9yKHI9MDtyPHM7cisrKW51bGwhPShlPXVbcl0pJiYwPT0oMiZlLl9fdSkmJihlLl9fZT09dCYmKHQ9JChlKSksSyhlLGUpKTtyZXR1cm4gdH1mdW5jdGlvbiBqKG4sbCx1LHQpe3ZhciBpLHI7aWYoXCJmdW5jdGlvblwiPT10eXBlb2Ygbi50eXBlKXtmb3IoaT1uLl9fayxyPTA7aSYmcjxpLmxlbmd0aDtyKyspaVtyXSYmKGlbcl0uX189bixsPWooaVtyXSxsLHUsdCkpO3JldHVybiBsfW4uX19lIT1sJiYodCYmKGwmJm4udHlwZSYmIWwucGFyZW50Tm9kZSYmKGw9JChuKSksdS5pbnNlcnRCZWZvcmUobi5fX2UsbHx8bnVsbCkpLGw9bi5fX2UpO2Rve2w9bCYmbC5uZXh0U2libGluZ313aGlsZShudWxsIT1sJiY4PT1sLm5vZGVUeXBlKTtyZXR1cm4gbH1mdW5jdGlvbiBGKG4sbCl7cmV0dXJuIGw9bHx8W10sbnVsbD09bnx8XCJib29sZWFuXCI9PXR5cGVvZiBufHwoZyhuKT9uLnNvbWUoZnVuY3Rpb24obil7RihuLGwpfSk6bC5wdXNoKG4pKSxsfWZ1bmN0aW9uIE8obixsLHUsdCl7dmFyIGkscixvLGU9bi5rZXksZj1uLnR5cGUsYz1sW3VdLHM9bnVsbCE9YyYmMD09KDImYy5fX3UpO2lmKG51bGw9PT1jJiZudWxsPT1lfHxzJiZlPT1jLmtleSYmZj09Yy50eXBlKXJldHVybiB1O2lmKHQ+KHM/MTowKSlmb3IoaT11LTEscj11KzE7aT49MHx8cjxsLmxlbmd0aDspaWYobnVsbCE9KGM9bFtvPWk+PTA/aS0tOnIrK10pJiYwPT0oMiZjLl9fdSkmJmU9PWMua2V5JiZmPT1jLnR5cGUpcmV0dXJuIG87cmV0dXJuLTF9ZnVuY3Rpb24geihuLGwsdSl7XCItXCI9PWxbMF0/bi5zZXRQcm9wZXJ0eShsLG51bGw9PXU/XCJcIjp1KTpuW2xdPW51bGw9PXU/XCJcIjpcIm51bWJlclwiIT10eXBlb2YgdXx8Xy50ZXN0KGwpP3U6dStcInB4XCJ9ZnVuY3Rpb24gTihuLGwsdSx0LGkpe3ZhciByLG87bjppZihcInN0eWxlXCI9PWwpaWYoXCJzdHJpbmdcIj09dHlwZW9mIHUpbi5zdHlsZS5jc3NUZXh0PXU7ZWxzZXtpZihcInN0cmluZ1wiPT10eXBlb2YgdCYmKG4uc3R5bGUuY3NzVGV4dD10PVwiXCIpLHQpZm9yKGwgaW4gdCl1JiZsIGluIHV8fHoobi5zdHlsZSxsLFwiXCIpO2lmKHUpZm9yKGwgaW4gdSl0JiZ1W2xdPT10W2xdfHx6KG4uc3R5bGUsbCx1W2xdKX1lbHNlIGlmKFwib1wiPT1sWzBdJiZcIm5cIj09bFsxXSlyPWwhPShsPWwucmVwbGFjZShhLFwiJDFcIikpLG89bC50b0xvd2VyQ2FzZSgpLGw9byBpbiBufHxcIm9uRm9jdXNPdXRcIj09bHx8XCJvbkZvY3VzSW5cIj09bD9vLnNsaWNlKDIpOmwuc2xpY2UoMiksbi5sfHwobi5sPXt9KSxuLmxbbCtyXT11LHU/dD91W3NdPXRbc106KHVbc109aCxuLmFkZEV2ZW50TGlzdGVuZXIobCxyP3Y6cCxyKSk6bi5yZW1vdmVFdmVudExpc3RlbmVyKGwscj92OnAscik7ZWxzZXtpZihcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI9PWkpbD1sLnJlcGxhY2UoL3hsaW5rKEh8OmgpLyxcImhcIikucmVwbGFjZSgvc05hbWUkLyxcInNcIik7ZWxzZSBpZihcIndpZHRoXCIhPWwmJlwiaGVpZ2h0XCIhPWwmJlwiaHJlZlwiIT1sJiZcImxpc3RcIiE9bCYmXCJmb3JtXCIhPWwmJlwidGFiSW5kZXhcIiE9bCYmXCJkb3dubG9hZFwiIT1sJiZcInJvd1NwYW5cIiE9bCYmXCJjb2xTcGFuXCIhPWwmJlwicm9sZVwiIT1sJiZcInBvcG92ZXJcIiE9bCYmbCBpbiBuKXRyeXtuW2xdPW51bGw9PXU/XCJcIjp1O2JyZWFrIG59Y2F0Y2gobil7fVwiZnVuY3Rpb25cIj09dHlwZW9mIHV8fChudWxsPT11fHwhMT09PXUmJlwiLVwiIT1sWzRdP24ucmVtb3ZlQXR0cmlidXRlKGwpOm4uc2V0QXR0cmlidXRlKGwsXCJwb3BvdmVyXCI9PWwmJjE9PXU/XCJcIjp1KSl9fWZ1bmN0aW9uIFYobil7cmV0dXJuIGZ1bmN0aW9uKHUpe2lmKHRoaXMubCl7dmFyIHQ9dGhpcy5sW3UudHlwZStuXTtpZihudWxsPT11W2NdKXVbY109aCsrO2Vsc2UgaWYodVtjXTx0W3NdKXJldHVybjtyZXR1cm4gdChsLmV2ZW50P2wuZXZlbnQodSk6dSl9fX1mdW5jdGlvbiBxKG4sdSx0LGkscixvLGUsZixjLHMpe3ZhciBhLGgscCx2LHksZCxfLGsseCxNLCQsSSxQLEEsSCxUPXUudHlwZTtpZih2b2lkIDAhPT11LmNvbnN0cnVjdG9yKXJldHVybiBudWxsOzEyOCZ0Ll9fdSYmKGM9ISEoMzImdC5fX3UpLG89W2Y9dS5fX2U9dC5fX2VdKSwoYT1sLl9fYikmJmEodSk7bjppZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBUKXRyeXtpZihrPXUucHJvcHMseD1ULnByb3RvdHlwZSYmVC5wcm90b3R5cGUucmVuZGVyLE09KGE9VC5jb250ZXh0VHlwZSkmJmlbYS5fX2NdLCQ9YT9NP00ucHJvcHMudmFsdWU6YS5fXzppLHQuX19jP189KGg9dS5fX2M9dC5fX2MpLl9fPWguX19FOih4P3UuX19jPWg9bmV3IFQoaywkKToodS5fX2M9aD1uZXcgQyhrLCQpLGguY29uc3RydWN0b3I9VCxoLnJlbmRlcj1RKSxNJiZNLnN1YihoKSxoLnN0YXRlfHwoaC5zdGF0ZT17fSksaC5fX249aSxwPWguX19kPSEwLGguX19oPVtdLGguX3NiPVtdKSx4JiZudWxsPT1oLl9fcyYmKGguX19zPWguc3RhdGUpLHgmJm51bGwhPVQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiYoaC5fX3M9PWguc3RhdGUmJihoLl9fcz1tKHt9LGguX19zKSksbShoLl9fcyxULmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhrLGguX19zKSkpLHY9aC5wcm9wcyx5PWguc3RhdGUsaC5fX3Y9dSxwKXgmJm51bGw9PVQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiZudWxsIT1oLmNvbXBvbmVudFdpbGxNb3VudCYmaC5jb21wb25lbnRXaWxsTW91bnQoKSx4JiZudWxsIT1oLmNvbXBvbmVudERpZE1vdW50JiZoLl9faC5wdXNoKGguY29tcG9uZW50RGlkTW91bnQpO2Vsc2V7aWYoeCYmbnVsbD09VC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJmshPT12JiZudWxsIT1oLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMmJmguY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhrLCQpLHUuX192PT10Ll9fdnx8IWguX19lJiZudWxsIT1oLnNob3VsZENvbXBvbmVudFVwZGF0ZSYmITE9PT1oLnNob3VsZENvbXBvbmVudFVwZGF0ZShrLGguX19zLCQpKXt1Ll9fdiE9dC5fX3YmJihoLnByb3BzPWssaC5zdGF0ZT1oLl9fcyxoLl9fZD0hMSksdS5fX2U9dC5fX2UsdS5fX2s9dC5fX2ssdS5fX2suc29tZShmdW5jdGlvbihuKXtuJiYobi5fXz11KX0pLHcucHVzaC5hcHBseShoLl9faCxoLl9zYiksaC5fc2I9W10saC5fX2gubGVuZ3RoJiZlLnB1c2goaCk7YnJlYWsgbn1udWxsIT1oLmNvbXBvbmVudFdpbGxVcGRhdGUmJmguY29tcG9uZW50V2lsbFVwZGF0ZShrLGguX19zLCQpLHgmJm51bGwhPWguY29tcG9uZW50RGlkVXBkYXRlJiZoLl9faC5wdXNoKGZ1bmN0aW9uKCl7aC5jb21wb25lbnREaWRVcGRhdGUodix5LGQpfSl9aWYoaC5jb250ZXh0PSQsaC5wcm9wcz1rLGguX19QPW4saC5fX2U9ITEsST1sLl9fcixQPTAseCloLnN0YXRlPWguX19zLGguX19kPSExLEkmJkkodSksYT1oLnJlbmRlcihoLnByb3BzLGguc3RhdGUsaC5jb250ZXh0KSx3LnB1c2guYXBwbHkoaC5fX2gsaC5fc2IpLGguX3NiPVtdO2Vsc2UgZG97aC5fX2Q9ITEsSSYmSSh1KSxhPWgucmVuZGVyKGgucHJvcHMsaC5zdGF0ZSxoLmNvbnRleHQpLGguc3RhdGU9aC5fX3N9d2hpbGUoaC5fX2QmJisrUDwyNSk7aC5zdGF0ZT1oLl9fcyxudWxsIT1oLmdldENoaWxkQ29udGV4dCYmKGk9bShtKHt9LGkpLGguZ2V0Q2hpbGRDb250ZXh0KCkpKSx4JiYhcCYmbnVsbCE9aC5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSYmKGQ9aC5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSh2LHkpKSxBPW51bGwhPWEmJmEudHlwZT09PVMmJm51bGw9PWEua2V5P0UoYS5wcm9wcy5jaGlsZHJlbik6YSxmPUwobixnKEEpP0E6W0FdLHUsdCxpLHIsbyxlLGYsYyxzKSxoLmJhc2U9dS5fX2UsdS5fX3UmPS0xNjEsaC5fX2gubGVuZ3RoJiZlLnB1c2goaCksXyYmKGguX19FPWguX189bnVsbCl9Y2F0Y2gobil7aWYodS5fX3Y9bnVsbCxjfHxudWxsIT1vKWlmKG4udGhlbil7Zm9yKHUuX191fD1jPzE2MDoxMjg7ZiYmOD09Zi5ub2RlVHlwZSYmZi5uZXh0U2libGluZzspZj1mLm5leHRTaWJsaW5nO29bby5pbmRleE9mKGYpXT1udWxsLHUuX19lPWZ9ZWxzZXtmb3IoSD1vLmxlbmd0aDtILS07KWIob1tIXSk7Qih1KX1lbHNlIHUuX19lPXQuX19lLHUuX19rPXQuX19rLG4udGhlbnx8Qih1KTtsLl9fZShuLHUsdCl9ZWxzZSBudWxsPT1vJiZ1Ll9fdj09dC5fX3Y/KHUuX19rPXQuX19rLHUuX19lPXQuX19lKTpmPXUuX19lPUcodC5fX2UsdSx0LGkscixvLGUsYyxzKTtyZXR1cm4oYT1sLmRpZmZlZCkmJmEodSksMTI4JnUuX191P3ZvaWQgMDpmfWZ1bmN0aW9uIEIobil7biYmKG4uX19jJiYobi5fX2MuX19lPSEwKSxuLl9fayYmbi5fX2suc29tZShCKSl9ZnVuY3Rpb24gRChuLHUsdCl7Zm9yKHZhciBpPTA7aTx0Lmxlbmd0aDtpKyspSih0W2ldLHRbKytpXSx0WysraV0pO2wuX19jJiZsLl9fYyh1LG4pLG4uc29tZShmdW5jdGlvbih1KXt0cnl7bj11Ll9faCx1Ll9faD1bXSxuLnNvbWUoZnVuY3Rpb24obil7bi5jYWxsKHUpfSl9Y2F0Y2gobil7bC5fX2Uobix1Ll9fdil9fSl9ZnVuY3Rpb24gRShuKXtyZXR1cm5cIm9iamVjdFwiIT10eXBlb2Ygbnx8bnVsbD09bnx8bi5fX2I+MD9uOmcobik/bi5tYXAoRSk6bSh7fSxuKX1mdW5jdGlvbiBHKHUsdCxpLHIsbyxlLGYsYyxzKXt2YXIgYSxoLHAsdix5LHcsXyxtPWkucHJvcHN8fGQsaz10LnByb3BzLHg9dC50eXBlO2lmKFwic3ZnXCI9PXg/bz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI6XCJtYXRoXCI9PXg/bz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTgvTWF0aC9NYXRoTUxcIjpvfHwobz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIiksbnVsbCE9ZSlmb3IoYT0wO2E8ZS5sZW5ndGg7YSsrKWlmKCh5PWVbYV0pJiZcInNldEF0dHJpYnV0ZVwiaW4geT09ISF4JiYoeD95LmxvY2FsTmFtZT09eDozPT15Lm5vZGVUeXBlKSl7dT15LGVbYV09bnVsbDticmVha31pZihudWxsPT11KXtpZihudWxsPT14KXJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShrKTt1PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhvLHgsay5pcyYmayksYyYmKGwuX19tJiZsLl9fbSh0LGUpLGM9ITEpLGU9bnVsbH1pZihudWxsPT14KW09PT1rfHxjJiZ1LmRhdGE9PWt8fCh1LmRhdGE9ayk7ZWxzZXtpZihlPWUmJm4uY2FsbCh1LmNoaWxkTm9kZXMpLCFjJiZudWxsIT1lKWZvcihtPXt9LGE9MDthPHUuYXR0cmlidXRlcy5sZW5ndGg7YSsrKW1bKHk9dS5hdHRyaWJ1dGVzW2FdKS5uYW1lXT15LnZhbHVlO2ZvcihhIGluIG0peT1tW2FdLFwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIj09YT9wPXk6XCJjaGlsZHJlblwiPT1hfHxhIGluIGt8fFwidmFsdWVcIj09YSYmXCJkZWZhdWx0VmFsdWVcImluIGt8fFwiY2hlY2tlZFwiPT1hJiZcImRlZmF1bHRDaGVja2VkXCJpbiBrfHxOKHUsYSxudWxsLHksbyk7Zm9yKGEgaW4gayl5PWtbYV0sXCJjaGlsZHJlblwiPT1hP3Y9eTpcImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCI9PWE/aD15OlwidmFsdWVcIj09YT93PXk6XCJjaGVja2VkXCI9PWE/Xz15OmMmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHl8fG1bYV09PT15fHxOKHUsYSx5LG1bYV0sbyk7aWYoaCljfHxwJiYoaC5fX2h0bWw9PXAuX19odG1sfHxoLl9faHRtbD09dS5pbm5lckhUTUwpfHwodS5pbm5lckhUTUw9aC5fX2h0bWwpLHQuX19rPVtdO2Vsc2UgaWYocCYmKHUuaW5uZXJIVE1MPVwiXCIpLEwoXCJ0ZW1wbGF0ZVwiPT10LnR5cGU/dS5jb250ZW50OnUsZyh2KT92Olt2XSx0LGkscixcImZvcmVpZ25PYmplY3RcIj09eD9cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIjpvLGUsZixlP2VbMF06aS5fX2smJiQoaSwwKSxjLHMpLG51bGwhPWUpZm9yKGE9ZS5sZW5ndGg7YS0tOyliKGVbYV0pO2N8fChhPVwidmFsdWVcIixcInByb2dyZXNzXCI9PXgmJm51bGw9PXc/dS5yZW1vdmVBdHRyaWJ1dGUoXCJ2YWx1ZVwiKTpudWxsIT13JiYodyE9PXVbYV18fFwicHJvZ3Jlc3NcIj09eCYmIXd8fFwib3B0aW9uXCI9PXgmJnchPW1bYV0pJiZOKHUsYSx3LG1bYV0sbyksYT1cImNoZWNrZWRcIixudWxsIT1fJiZfIT11W2FdJiZOKHUsYSxfLG1bYV0sbykpfXJldHVybiB1fWZ1bmN0aW9uIEoobix1LHQpe3RyeXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBuKXt2YXIgaT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBuLl9fdTtpJiZuLl9fdSgpLGkmJm51bGw9PXV8fChuLl9fdT1uKHUpKX1lbHNlIG4uY3VycmVudD11fWNhdGNoKG4pe2wuX19lKG4sdCl9fWZ1bmN0aW9uIEsobix1LHQpe3ZhciBpLHI7aWYobC51bm1vdW50JiZsLnVubW91bnQobiksKGk9bi5yZWYpJiYoaS5jdXJyZW50JiZpLmN1cnJlbnQhPW4uX19lfHxKKGksbnVsbCx1KSksbnVsbCE9KGk9bi5fX2MpKXtpZihpLmNvbXBvbmVudFdpbGxVbm1vdW50KXRyeXtpLmNvbXBvbmVudFdpbGxVbm1vdW50KCl9Y2F0Y2gobil7bC5fX2Uobix1KX1pLmJhc2U9aS5fX1A9bnVsbH1pZihpPW4uX19rKWZvcihyPTA7cjxpLmxlbmd0aDtyKyspaVtyXSYmSyhpW3JdLHUsdHx8XCJmdW5jdGlvblwiIT10eXBlb2Ygbi50eXBlKTt0fHxiKG4uX19lKSxuLl9fYz1uLl9fPW4uX19lPXZvaWQgMH1mdW5jdGlvbiBRKG4sbCx1KXtyZXR1cm4gdGhpcy5jb25zdHJ1Y3RvcihuLHUpfWZ1bmN0aW9uIFIodSx0LGkpe3ZhciByLG8sZSxmO3Q9PWRvY3VtZW50JiYodD1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLGwuX18mJmwuX18odSx0KSxvPShyPVwiZnVuY3Rpb25cIj09dHlwZW9mIGkpP251bGw6aSYmaS5fX2t8fHQuX19rLGU9W10sZj1bXSxxKHQsdT0oIXImJml8fHQpLl9faz1rKFMsbnVsbCxbdV0pLG98fGQsZCx0Lm5hbWVzcGFjZVVSSSwhciYmaT9baV06bz9udWxsOnQuZmlyc3RDaGlsZD9uLmNhbGwodC5jaGlsZE5vZGVzKTpudWxsLGUsIXImJmk/aTpvP28uX19lOnQuZmlyc3RDaGlsZCxyLGYpLEQoZSx1LGYpfWZ1bmN0aW9uIFUobixsKXtSKG4sbCxVKX1mdW5jdGlvbiBXKGwsdSx0KXt2YXIgaSxyLG8sZSxmPW0oe30sbC5wcm9wcyk7Zm9yKG8gaW4gbC50eXBlJiZsLnR5cGUuZGVmYXVsdFByb3BzJiYoZT1sLnR5cGUuZGVmYXVsdFByb3BzKSx1KVwia2V5XCI9PW8/aT11W29dOlwicmVmXCI9PW8/cj11W29dOmZbb109dm9pZCAwPT09dVtvXSYmbnVsbCE9ZT9lW29dOnVbb107cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg+MiYmKGYuY2hpbGRyZW49YXJndW1lbnRzLmxlbmd0aD4zP24uY2FsbChhcmd1bWVudHMsMik6dCkseChsLnR5cGUsZixpfHxsLmtleSxyfHxsLnJlZixudWxsKX1mdW5jdGlvbiBYKG4pe2Z1bmN0aW9uIGwobil7dmFyIHUsdDtyZXR1cm4gdGhpcy5nZXRDaGlsZENvbnRleHR8fCh1PW5ldyBTZXQsKHQ9e30pW2wuX19jXT10aGlzLHRoaXMuZ2V0Q2hpbGRDb250ZXh0PWZ1bmN0aW9uKCl7cmV0dXJuIHR9LHRoaXMuY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXt1PW51bGx9LHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWZ1bmN0aW9uKG4pe3RoaXMucHJvcHMudmFsdWUhPW4udmFsdWUmJnUuZm9yRWFjaChmdW5jdGlvbihuKXtuLl9fZT0hMCxBKG4pfSl9LHRoaXMuc3ViPWZ1bmN0aW9uKG4pe3UuYWRkKG4pO3ZhciBsPW4uY29tcG9uZW50V2lsbFVubW91bnQ7bi5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3UmJnUuZGVsZXRlKG4pLGwmJmwuY2FsbChuKX19KSxuLmNoaWxkcmVufXJldHVybiBsLl9fYz1cIl9fY0NcIit5KyssbC5fXz1uLGwuUHJvdmlkZXI9bC5fX2w9KGwuQ29uc3VtZXI9ZnVuY3Rpb24obixsKXtyZXR1cm4gbi5jaGlsZHJlbihsKX0pLmNvbnRleHRUeXBlPWwsbH1uPXcuc2xpY2UsbD17X19lOmZ1bmN0aW9uKG4sbCx1LHQpe2Zvcih2YXIgaSxyLG87bD1sLl9fOylpZigoaT1sLl9fYykmJiFpLl9fKXRyeXtpZigocj1pLmNvbnN0cnVjdG9yKSYmbnVsbCE9ci5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3ImJihpLnNldFN0YXRlKHIuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKG4pKSxvPWkuX19kKSxudWxsIT1pLmNvbXBvbmVudERpZENhdGNoJiYoaS5jb21wb25lbnREaWRDYXRjaChuLHR8fHt9KSxvPWkuX19kKSxvKXJldHVybiBpLl9fRT1pfWNhdGNoKGwpe249bH10aHJvdyBufX0sdT0wLHQ9ZnVuY3Rpb24obil7cmV0dXJuIG51bGwhPW4mJnZvaWQgMD09PW4uY29uc3RydWN0b3J9LEMucHJvdG90eXBlLnNldFN0YXRlPWZ1bmN0aW9uKG4sbCl7dmFyIHU7dT1udWxsIT10aGlzLl9fcyYmdGhpcy5fX3MhPXRoaXMuc3RhdGU/dGhpcy5fX3M6dGhpcy5fX3M9bSh7fSx0aGlzLnN0YXRlKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiYobj1uKG0oe30sdSksdGhpcy5wcm9wcykpLG4mJm0odSxuKSxudWxsIT1uJiZ0aGlzLl9fdiYmKGwmJnRoaXMuX3NiLnB1c2gobCksQSh0aGlzKSl9LEMucHJvdG90eXBlLmZvcmNlVXBkYXRlPWZ1bmN0aW9uKG4pe3RoaXMuX192JiYodGhpcy5fX2U9ITAsbiYmdGhpcy5fX2gucHVzaChuKSxBKHRoaXMpKX0sQy5wcm90b3R5cGUucmVuZGVyPVMsaT1bXSxvPVwiZnVuY3Rpb25cIj09dHlwZW9mIFByb21pc2U/UHJvbWlzZS5wcm90b3R5cGUudGhlbi5iaW5kKFByb21pc2UucmVzb2x2ZSgpKTpzZXRUaW1lb3V0LGU9ZnVuY3Rpb24obixsKXtyZXR1cm4gbi5fX3YuX19iLWwuX192Ll9fYn0sSC5fX3I9MCxmPU1hdGgucmFuZG9tKCkudG9TdHJpbmcoOCksYz1cIl9fZFwiK2Yscz1cIl9fYVwiK2YsYT0vKFBvaW50ZXJDYXB0dXJlKSR8Q2FwdHVyZSQvaSxoPTAscD1WKCExKSx2PVYoITApLHk9MDtleHBvcnR7QyBhcyBDb21wb25lbnQsUyBhcyBGcmFnbWVudCxXIGFzIGNsb25lRWxlbWVudCxYIGFzIGNyZWF0ZUNvbnRleHQsayBhcyBjcmVhdGVFbGVtZW50LE0gYXMgY3JlYXRlUmVmLGsgYXMgaCxVIGFzIGh5ZHJhdGUsdCBhcyBpc1ZhbGlkRWxlbWVudCxsIGFzIG9wdGlvbnMsUiBhcyByZW5kZXIsRiBhcyB0b0NoaWxkQXJyYXl9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJlYWN0Lm1vZHVsZS5qcy5tYXBcbiIsCiAgICAiaW1wb3J0e29wdGlvbnMgYXMgbn1mcm9tXCJwcmVhY3RcIjt2YXIgdCxyLHUsaSxvPTAsZj1bXSxjPW4sZT1jLl9fYixhPWMuX19yLHY9Yy5kaWZmZWQsbD1jLl9fYyxtPWMudW5tb3VudCxzPWMuX187ZnVuY3Rpb24gcChuLHQpe2MuX19oJiZjLl9faChyLG4sb3x8dCksbz0wO3ZhciB1PXIuX19IfHwoci5fX0g9e19fOltdLF9faDpbXX0pO3JldHVybiBuPj11Ll9fLmxlbmd0aCYmdS5fXy5wdXNoKHt9KSx1Ll9fW25dfWZ1bmN0aW9uIGQobil7cmV0dXJuIG89MSxoKEQsbil9ZnVuY3Rpb24gaChuLHUsaSl7dmFyIG89cCh0KyssMik7aWYoby50PW4sIW8uX19jJiYoby5fXz1baT9pKHUpOkQodm9pZCAwLHUpLGZ1bmN0aW9uKG4pe3ZhciB0PW8uX19OP28uX19OWzBdOm8uX19bMF0scj1vLnQodCxuKTt0IT09ciYmKG8uX19OPVtyLG8uX19bMV1dLG8uX19jLnNldFN0YXRlKHt9KSl9XSxvLl9fYz1yLCFyLl9fZikpe3ZhciBmPWZ1bmN0aW9uKG4sdCxyKXtpZighby5fX2MuX19IKXJldHVybiEwO3ZhciB1PW8uX19jLl9fSC5fXy5maWx0ZXIoZnVuY3Rpb24obil7cmV0dXJuIG4uX19jfSk7aWYodS5ldmVyeShmdW5jdGlvbihuKXtyZXR1cm4hbi5fX059KSlyZXR1cm4hY3x8Yy5jYWxsKHRoaXMsbix0LHIpO3ZhciBpPW8uX19jLnByb3BzIT09bjtyZXR1cm4gdS5zb21lKGZ1bmN0aW9uKG4pe2lmKG4uX19OKXt2YXIgdD1uLl9fWzBdO24uX189bi5fX04sbi5fX049dm9pZCAwLHQhPT1uLl9fWzBdJiYoaT0hMCl9fSksYyYmYy5jYWxsKHRoaXMsbix0LHIpfHxpfTtyLl9fZj0hMDt2YXIgYz1yLnNob3VsZENvbXBvbmVudFVwZGF0ZSxlPXIuY29tcG9uZW50V2lsbFVwZGF0ZTtyLmNvbXBvbmVudFdpbGxVcGRhdGU9ZnVuY3Rpb24obix0LHIpe2lmKHRoaXMuX19lKXt2YXIgdT1jO2M9dm9pZCAwLGYobix0LHIpLGM9dX1lJiZlLmNhbGwodGhpcyxuLHQscil9LHIuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWZ9cmV0dXJuIG8uX19OfHxvLl9ffWZ1bmN0aW9uIHkobix1KXt2YXIgaT1wKHQrKywzKTshYy5fX3MmJkMoaS5fX0gsdSkmJihpLl9fPW4saS51PXUsci5fX0guX19oLnB1c2goaSkpfWZ1bmN0aW9uIF8obix1KXt2YXIgaT1wKHQrKyw0KTshYy5fX3MmJkMoaS5fX0gsdSkmJihpLl9fPW4saS51PXUsci5fX2gucHVzaChpKSl9ZnVuY3Rpb24gQShuKXtyZXR1cm4gbz01LFQoZnVuY3Rpb24oKXtyZXR1cm57Y3VycmVudDpufX0sW10pfWZ1bmN0aW9uIEYobix0LHIpe289NixfKGZ1bmN0aW9uKCl7aWYoXCJmdW5jdGlvblwiPT10eXBlb2Ygbil7dmFyIHI9bih0KCkpO3JldHVybiBmdW5jdGlvbigpe24obnVsbCksciYmXCJmdW5jdGlvblwiPT10eXBlb2YgciYmcigpfX1pZihuKXJldHVybiBuLmN1cnJlbnQ9dCgpLGZ1bmN0aW9uKCl7cmV0dXJuIG4uY3VycmVudD1udWxsfX0sbnVsbD09cj9yOnIuY29uY2F0KG4pKX1mdW5jdGlvbiBUKG4scil7dmFyIHU9cCh0KyssNyk7cmV0dXJuIEModS5fX0gscikmJih1Ll9fPW4oKSx1Ll9fSD1yLHUuX19oPW4pLHUuX199ZnVuY3Rpb24gcShuLHQpe3JldHVybiBvPTgsVChmdW5jdGlvbigpe3JldHVybiBufSx0KX1mdW5jdGlvbiB4KG4pe3ZhciB1PXIuY29udGV4dFtuLl9fY10saT1wKHQrKyw5KTtyZXR1cm4gaS5jPW4sdT8obnVsbD09aS5fXyYmKGkuX189ITAsdS5zdWIocikpLHUucHJvcHMudmFsdWUpOm4uX199ZnVuY3Rpb24gUChuLHQpe2MudXNlRGVidWdWYWx1ZSYmYy51c2VEZWJ1Z1ZhbHVlKHQ/dChuKTpuKX1mdW5jdGlvbiBiKG4pe3ZhciB1PXAodCsrLDEwKSxpPWQoKTtyZXR1cm4gdS5fXz1uLHIuY29tcG9uZW50RGlkQ2F0Y2h8fChyLmNvbXBvbmVudERpZENhdGNoPWZ1bmN0aW9uKG4sdCl7dS5fXyYmdS5fXyhuLHQpLGlbMV0obil9KSxbaVswXSxmdW5jdGlvbigpe2lbMV0odm9pZCAwKX1dfWZ1bmN0aW9uIGcoKXt2YXIgbj1wKHQrKywxMSk7aWYoIW4uX18pe2Zvcih2YXIgdT1yLl9fdjtudWxsIT09dSYmIXUuX19tJiZudWxsIT09dS5fXzspdT11Ll9fO3ZhciBpPXUuX19tfHwodS5fX209WzAsMF0pO24uX189XCJQXCIraVswXStcIi1cIitpWzFdKyt9cmV0dXJuIG4uX199ZnVuY3Rpb24gaigpe2Zvcih2YXIgbjtuPWYuc2hpZnQoKTspe3ZhciB0PW4uX19IO2lmKG4uX19QJiZ0KXRyeXt0Ll9faC5zb21lKHopLHQuX19oLnNvbWUoQiksdC5fX2g9W119Y2F0Y2gocil7dC5fX2g9W10sYy5fX2UocixuLl9fdil9fX1jLl9fYj1mdW5jdGlvbihuKXtyPW51bGwsZSYmZShuKX0sYy5fXz1mdW5jdGlvbihuLHQpe24mJnQuX19rJiZ0Ll9fay5fX20mJihuLl9fbT10Ll9fay5fX20pLHMmJnMobix0KX0sYy5fX3I9ZnVuY3Rpb24obil7YSYmYShuKSx0PTA7dmFyIGk9KHI9bi5fX2MpLl9fSDtpJiYodT09PXI/KGkuX19oPVtdLHIuX19oPVtdLGkuX18uc29tZShmdW5jdGlvbihuKXtuLl9fTiYmKG4uX189bi5fX04pLG4udT1uLl9fTj12b2lkIDB9KSk6KGkuX19oLnNvbWUoeiksaS5fX2guc29tZShCKSxpLl9faD1bXSx0PTApKSx1PXJ9LGMuZGlmZmVkPWZ1bmN0aW9uKG4pe3YmJnYobik7dmFyIHQ9bi5fX2M7dCYmdC5fX0gmJih0Ll9fSC5fX2gubGVuZ3RoJiYoMSE9PWYucHVzaCh0KSYmaT09PWMucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHwoKGk9Yy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpfHx3KShqKSksdC5fX0guX18uc29tZShmdW5jdGlvbihuKXtuLnUmJihuLl9fSD1uLnUpLG4udT12b2lkIDB9KSksdT1yPW51bGx9LGMuX19jPWZ1bmN0aW9uKG4sdCl7dC5zb21lKGZ1bmN0aW9uKG4pe3RyeXtuLl9faC5zb21lKHopLG4uX19oPW4uX19oLmZpbHRlcihmdW5jdGlvbihuKXtyZXR1cm4hbi5fX3x8QihuKX0pfWNhdGNoKHIpe3Quc29tZShmdW5jdGlvbihuKXtuLl9faCYmKG4uX19oPVtdKX0pLHQ9W10sYy5fX2UocixuLl9fdil9fSksbCYmbChuLHQpfSxjLnVubW91bnQ9ZnVuY3Rpb24obil7bSYmbShuKTt2YXIgdCxyPW4uX19jO3ImJnIuX19IJiYoci5fX0guX18uc29tZShmdW5jdGlvbihuKXt0cnl7eihuKX1jYXRjaChuKXt0PW59fSksci5fX0g9dm9pZCAwLHQmJmMuX19lKHQsci5fX3YpKX07dmFyIGs9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lO2Z1bmN0aW9uIHcobil7dmFyIHQscj1mdW5jdGlvbigpe2NsZWFyVGltZW91dCh1KSxrJiZjYW5jZWxBbmltYXRpb25GcmFtZSh0KSxzZXRUaW1lb3V0KG4pfSx1PXNldFRpbWVvdXQociwzNSk7ayYmKHQ9cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHIpKX1mdW5jdGlvbiB6KG4pe3ZhciB0PXIsdT1uLl9fYztcImZ1bmN0aW9uXCI9PXR5cGVvZiB1JiYobi5fX2M9dm9pZCAwLHUoKSkscj10fWZ1bmN0aW9uIEIobil7dmFyIHQ9cjtuLl9fYz1uLl9fKCkscj10fWZ1bmN0aW9uIEMobix0KXtyZXR1cm4hbnx8bi5sZW5ndGghPT10Lmxlbmd0aHx8dC5zb21lKGZ1bmN0aW9uKHQscil7cmV0dXJuIHQhPT1uW3JdfSl9ZnVuY3Rpb24gRChuLHQpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dChuKTp0fWV4cG9ydHtxIGFzIHVzZUNhbGxiYWNrLHggYXMgdXNlQ29udGV4dCxQIGFzIHVzZURlYnVnVmFsdWUseSBhcyB1c2VFZmZlY3QsYiBhcyB1c2VFcnJvckJvdW5kYXJ5LGcgYXMgdXNlSWQsRiBhcyB1c2VJbXBlcmF0aXZlSGFuZGxlLF8gYXMgdXNlTGF5b3V0RWZmZWN0LFQgYXMgdXNlTWVtbyxoIGFzIHVzZVJlZHVjZXIsQSBhcyB1c2VSZWYsZCBhcyB1c2VTdGF0ZX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ob29rcy5tb2R1bGUuanMubWFwXG4iLAogICAgInZhciBpPVN5bWJvbC5mb3IoXCJwcmVhY3Qtc2lnbmFsc1wiKTtmdW5jdGlvbiB0KCl7aWYoISh2PjEpKXt2YXIgaSx0PSExOyFmdW5jdGlvbigpe3ZhciBpPWM7Yz12b2lkIDA7d2hpbGUodm9pZCAwIT09aSl7dmFyIHQ9aS5TO2lmKHQudj09PWkudilmb3IodmFyIG49dC50O3ZvaWQgMCE9PW47bj1uLngpaWYobi5pPT09aS5pKW4uaT10Lmk7aT1pLm99fSgpO3doaWxlKHZvaWQgMCE9PWgpe3ZhciBuPWg7aD12b2lkIDA7cysrO3doaWxlKHZvaWQgMCE9PW4pe3ZhciByPW4udTtuLnU9dm9pZCAwO24uZiY9LTM7aWYoISg4Jm4uZikmJncobikpdHJ5e24uYygpfWNhdGNoKG4pe2lmKCF0KXtpPW47dD0hMH19bj1yfX1zPTA7di0tO2lmKHQpdGhyb3cgaX1lbHNlIHYtLX1mdW5jdGlvbiBuKGkpe2lmKHY+MClyZXR1cm4gaSgpO2U9Kyt1O3YrKzt0cnl7cmV0dXJuIGkoKX1maW5hbGx5e3QoKX19dmFyIHIsbz12b2lkIDA7ZnVuY3Rpb24gZihpKXt2YXIgdD1vLG49cjtvPXZvaWQgMDtyPXZvaWQgMDt0cnl7cmV0dXJuIGkoKX1maW5hbGx5e289dDtyPW59fXZhciBoPXZvaWQgMCx2PTAscz0wLHU9MCxlPTAsYz12b2lkIDAsZD0wO2Z1bmN0aW9uIGEoaSl7aWYodm9pZCAwIT09byl7dmFyIHQ9aS5uO2lmKHZvaWQgMD09PXR8fHQudCE9PW8pe3Q9e2k6MCxTOmkscDpvLnMsbjp2b2lkIDAsdDpvLGU6dm9pZCAwLHg6dm9pZCAwLHI6dH07aWYodm9pZCAwIT09by5zKW8ucy5uPXQ7by5zPXQ7aS5uPXQ7aWYoMzImby5mKWkuUyh0KTtyZXR1cm4gdH1lbHNlIGlmKC0xPT09dC5pKXt0Lmk9MDtpZih2b2lkIDAhPT10Lm4pe3Qubi5wPXQucDtpZih2b2lkIDAhPT10LnApdC5wLm49dC5uO3QucD1vLnM7dC5uPXZvaWQgMDtvLnMubj10O28ucz10fXJldHVybiB0fX19ZnVuY3Rpb24gbChpLHQpe3RoaXMudj1pO3RoaXMuaT0wO3RoaXMubj12b2lkIDA7dGhpcy50PXZvaWQgMDt0aGlzLmw9MDt0aGlzLlc9bnVsbD09dD92b2lkIDA6dC53YXRjaGVkO3RoaXMuWj1udWxsPT10P3ZvaWQgMDp0LnVud2F0Y2hlZDt0aGlzLm5hbWU9bnVsbD09dD92b2lkIDA6dC5uYW1lfWwucHJvdG90eXBlLmJyYW5kPWk7bC5wcm90b3R5cGUuaD1mdW5jdGlvbigpe3JldHVybiEwfTtsLnByb3RvdHlwZS5TPWZ1bmN0aW9uKGkpe3ZhciB0PXRoaXMsbj10aGlzLnQ7aWYobiE9PWkmJnZvaWQgMD09PWkuZSl7aS54PW47dGhpcy50PWk7aWYodm9pZCAwIT09biluLmU9aTtlbHNlIGYoZnVuY3Rpb24oKXt2YXIgaTtudWxsPT0oaT10LlcpfHxpLmNhbGwodCl9KX19O2wucHJvdG90eXBlLlU9ZnVuY3Rpb24oaSl7dmFyIHQ9dGhpcztpZih2b2lkIDAhPT10aGlzLnQpe3ZhciBuPWkuZSxyPWkueDtpZih2b2lkIDAhPT1uKXtuLng9cjtpLmU9dm9pZCAwfWlmKHZvaWQgMCE9PXIpe3IuZT1uO2kueD12b2lkIDB9aWYoaT09PXRoaXMudCl7dGhpcy50PXI7aWYodm9pZCAwPT09cilmKGZ1bmN0aW9uKCl7dmFyIGk7bnVsbD09KGk9dC5aKXx8aS5jYWxsKHQpfSl9fX07bC5wcm90b3R5cGUuc3Vic2NyaWJlPWZ1bmN0aW9uKGkpe3ZhciB0PXRoaXM7cmV0dXJuIGooZnVuY3Rpb24oKXt2YXIgbj10LnZhbHVlO2YoZnVuY3Rpb24oKXtyZXR1cm4gaShuKX0pfSx7bmFtZTpcInN1YlwifSl9O2wucHJvdG90eXBlLnZhbHVlT2Y9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy52YWx1ZX07bC5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy52YWx1ZStcIlwifTtsLnByb3RvdHlwZS50b0pTT049ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy52YWx1ZX07bC5wcm90b3R5cGUucGVlaz1mdW5jdGlvbigpe3ZhciBpPXRoaXM7cmV0dXJuIGYoZnVuY3Rpb24oKXtyZXR1cm4gaS52YWx1ZX0pfTtPYmplY3QuZGVmaW5lUHJvcGVydHkobC5wcm90b3R5cGUsXCJ2YWx1ZVwiLHtnZXQ6ZnVuY3Rpb24oKXt2YXIgaT1hKHRoaXMpO2lmKHZvaWQgMCE9PWkpaS5pPXRoaXMuaTtyZXR1cm4gdGhpcy52fSxzZXQ6ZnVuY3Rpb24oaSl7aWYoaSE9PXRoaXMudil7aWYocz4xMDApdGhyb3cgbmV3IEVycm9yKFwiQ3ljbGUgZGV0ZWN0ZWRcIik7IWZ1bmN0aW9uKGkpe2lmKDAhPT12JiYwPT09cylpZihpLmwhPT1lKXtpLmw9ZTtjPXtTOmksdjppLnYsaTppLmksbzpjfX19KHRoaXMpO3RoaXMudj1pO3RoaXMuaSsrO2QrKzt2Kys7dHJ5e2Zvcih2YXIgbj10aGlzLnQ7dm9pZCAwIT09bjtuPW4ueCluLnQuTigpfWZpbmFsbHl7dCgpfX19fSk7ZnVuY3Rpb24geShpLHQpe3JldHVybiBuZXcgbChpLHQpfWZ1bmN0aW9uIHcoaSl7Zm9yKHZhciB0PWkuczt2b2lkIDAhPT10O3Q9dC5uKWlmKHQuUy5pIT09dC5pfHwhdC5TLmgoKXx8dC5TLmkhPT10LmkpcmV0dXJuITA7cmV0dXJuITF9ZnVuY3Rpb24gXyhpKXtmb3IodmFyIHQ9aS5zO3ZvaWQgMCE9PXQ7dD10Lm4pe3ZhciBuPXQuUy5uO2lmKHZvaWQgMCE9PW4pdC5yPW47dC5TLm49dDt0Lmk9LTE7aWYodm9pZCAwPT09dC5uKXtpLnM9dDticmVha319fWZ1bmN0aW9uIGIoaSl7dmFyIHQ9aS5zLG49dm9pZCAwO3doaWxlKHZvaWQgMCE9PXQpe3ZhciByPXQucDtpZigtMT09PXQuaSl7dC5TLlUodCk7aWYodm9pZCAwIT09cilyLm49dC5uO2lmKHZvaWQgMCE9PXQubil0Lm4ucD1yfWVsc2Ugbj10O3QuUy5uPXQucjtpZih2b2lkIDAhPT10LnIpdC5yPXZvaWQgMDt0PXJ9aS5zPW59ZnVuY3Rpb24gcChpLHQpe2wuY2FsbCh0aGlzLHZvaWQgMCx0KTt0aGlzLng9aTt0aGlzLnM9dm9pZCAwO3RoaXMuZz1kLTE7dGhpcy5mPTR9cC5wcm90b3R5cGU9bmV3IGw7cC5wcm90b3R5cGUuaD1mdW5jdGlvbigpe3RoaXMuZiY9LTM7aWYoMSZ0aGlzLmYpcmV0dXJuITE7aWYoMzI9PSgzNiZ0aGlzLmYpKXJldHVybiEwO3RoaXMuZiY9LTU7aWYodGhpcy5nPT09ZClyZXR1cm4hMDt0aGlzLmc9ZDt0aGlzLmZ8PTE7aWYodGhpcy5pPjAmJiF3KHRoaXMpKXt0aGlzLmYmPS0yO3JldHVybiEwfXZhciBpPW87dHJ5e18odGhpcyk7bz10aGlzO3ZhciB0PXRoaXMueCgpO2lmKDE2JnRoaXMuZnx8dGhpcy52IT09dHx8MD09PXRoaXMuaSl7dGhpcy52PXQ7dGhpcy5mJj0tMTc7dGhpcy5pKyt9fWNhdGNoKGkpe3RoaXMudj1pO3RoaXMuZnw9MTY7dGhpcy5pKyt9bz1pO2IodGhpcyk7dGhpcy5mJj0tMjtyZXR1cm4hMH07cC5wcm90b3R5cGUuUz1mdW5jdGlvbihpKXtpZih2b2lkIDA9PT10aGlzLnQpe3RoaXMuZnw9MzY7Zm9yKHZhciB0PXRoaXMuczt2b2lkIDAhPT10O3Q9dC5uKXQuUy5TKHQpfWwucHJvdG90eXBlLlMuY2FsbCh0aGlzLGkpfTtwLnByb3RvdHlwZS5VPWZ1bmN0aW9uKGkpe2lmKHZvaWQgMCE9PXRoaXMudCl7bC5wcm90b3R5cGUuVS5jYWxsKHRoaXMsaSk7aWYodm9pZCAwPT09dGhpcy50KXt0aGlzLmYmPS0zMztmb3IodmFyIHQ9dGhpcy5zO3ZvaWQgMCE9PXQ7dD10Lm4pdC5TLlUodCl9fX07cC5wcm90b3R5cGUuTj1mdW5jdGlvbigpe2lmKCEoMiZ0aGlzLmYpKXt0aGlzLmZ8PTY7Zm9yKHZhciBpPXRoaXMudDt2b2lkIDAhPT1pO2k9aS54KWkudC5OKCl9fTtPYmplY3QuZGVmaW5lUHJvcGVydHkocC5wcm90b3R5cGUsXCJ2YWx1ZVwiLHtnZXQ6ZnVuY3Rpb24oKXtpZigxJnRoaXMuZil0aHJvdyBuZXcgRXJyb3IoXCJDeWNsZSBkZXRlY3RlZFwiKTt2YXIgaT1hKHRoaXMpO3RoaXMuaCgpO2lmKHZvaWQgMCE9PWkpaS5pPXRoaXMuaTtpZigxNiZ0aGlzLmYpdGhyb3cgdGhpcy52O3JldHVybiB0aGlzLnZ9fSk7ZnVuY3Rpb24gZyhpLHQpe3JldHVybiBuZXcgcChpLHQpfWZ1bmN0aW9uIFMoaSl7dmFyIG49aS5tO2kubT12b2lkIDA7aWYoXCJmdW5jdGlvblwiPT10eXBlb2Ygbil7disrO3ZhciByPW87bz12b2lkIDA7dHJ5e24oKX1jYXRjaCh0KXtpLmYmPS0yO2kuZnw9ODttKGkpO3Rocm93IHR9ZmluYWxseXtvPXI7dCgpfX19ZnVuY3Rpb24gbShpKXtmb3IodmFyIHQ9aS5zO3ZvaWQgMCE9PXQ7dD10Lm4pdC5TLlUodCk7aS54PXZvaWQgMDtpLnM9dm9pZCAwO1MoaSl9ZnVuY3Rpb24geChpKXtpZihvIT09dGhpcyl0aHJvdyBuZXcgRXJyb3IoXCJPdXQtb2Ytb3JkZXIgZWZmZWN0XCIpO2IodGhpcyk7bz1pO3RoaXMuZiY9LTI7aWYoOCZ0aGlzLmYpbSh0aGlzKTt0KCl9ZnVuY3Rpb24gRShpLHQpe3RoaXMueD1pO3RoaXMubT12b2lkIDA7dGhpcy5zPXZvaWQgMDt0aGlzLnU9dm9pZCAwO3RoaXMuZj0zMjt0aGlzLm5hbWU9bnVsbD09dD92b2lkIDA6dC5uYW1lO2lmKHIpci5wdXNoKHRoaXMpfUUucHJvdG90eXBlLmM9ZnVuY3Rpb24oKXt2YXIgaT10aGlzLlMoKTt0cnl7aWYoOCZ0aGlzLmYpcmV0dXJuO2lmKHZvaWQgMD09PXRoaXMueClyZXR1cm47dmFyIHQ9dGhpcy54KCk7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgdCl0aGlzLm09dH1maW5hbGx5e2koKX19O0UucHJvdG90eXBlLlM9ZnVuY3Rpb24oKXtpZigxJnRoaXMuZil0aHJvdyBuZXcgRXJyb3IoXCJDeWNsZSBkZXRlY3RlZFwiKTt0aGlzLmZ8PTE7dGhpcy5mJj0tOTtTKHRoaXMpO18odGhpcyk7disrO3ZhciBpPW87bz10aGlzO3JldHVybiB4LmJpbmQodGhpcyxpKX07RS5wcm90b3R5cGUuTj1mdW5jdGlvbigpe2lmKCEoMiZ0aGlzLmYpKXt0aGlzLmZ8PTI7dGhpcy51PWg7aD10aGlzfX07RS5wcm90b3R5cGUuZD1mdW5jdGlvbigpe3RoaXMuZnw9ODtpZighKDEmdGhpcy5mKSltKHRoaXMpfTtFLnByb3RvdHlwZS5kaXNwb3NlPWZ1bmN0aW9uKCl7dGhpcy5kKCl9O2Z1bmN0aW9uIGooaSx0KXt2YXIgbj1uZXcgRShpLHQpO3RyeXtuLmMoKX1jYXRjaChpKXtuLmQoKTt0aHJvdyBpfXZhciByPW4uZC5iaW5kKG4pO3JbU3ltYm9sLmRpc3Bvc2VdPXI7cmV0dXJuIHJ9ZnVuY3Rpb24gQyhpKXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgdD1hcmd1bWVudHMscj10aGlzO3JldHVybiBuKGZ1bmN0aW9uKCl7cmV0dXJuIGYoZnVuY3Rpb24oKXtyZXR1cm4gaS5hcHBseShyLFtdLnNsaWNlLmNhbGwodCkpfSl9KX19ZnVuY3Rpb24gTygpe3ZhciBpPXI7cj1bXTtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgdD1yO2lmKHImJmkpaT1pLmNvbmNhdChyKTtyPWk7cmV0dXJuIHR9fXZhciBrPWZ1bmN0aW9uKGkpe2Zvcih2YXIgdCBpbiBpKXt2YXIgbj1pW3RdO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIG4paVt0XT1DKG4pO2Vsc2UgaWYoXCJvYmplY3RcIj09dHlwZW9mIG4mJm51bGwhPT1uJiYhKFwiYnJhbmRcImluIG4pKWsobil9fTtmdW5jdGlvbiBUKGkpe3JldHVybiBmdW5jdGlvbigpe3ZhciB0LG4sbz1PKCk7dHJ5e249aS5hcHBseSh2b2lkIDAsW10uc2xpY2UuY2FsbChhcmd1bWVudHMpKX1jYXRjaChpKXtyPXZvaWQgMDt0aHJvdyBpfWZpbmFsbHl7dD1vKCl9ayhuKTtuW1N5bWJvbC5kaXNwb3NlXT1DKGZ1bmN0aW9uKCl7aWYodClmb3IodmFyIGk9MDtpPHQubGVuZ3RoO2krKyl0W2ldLmRpc3Bvc2UoKTt0PXZvaWQgMH0pO3JldHVybiBufX1leHBvcnR7cCBhcyBDb21wdXRlZCxFIGFzIEVmZmVjdCxsIGFzIFNpZ25hbCxDIGFzIGFjdGlvbixuIGFzIGJhdGNoLGcgYXMgY29tcHV0ZWQsVCBhcyBjcmVhdGVNb2RlbCxqIGFzIGVmZmVjdCx5IGFzIHNpZ25hbCxmIGFzIHVudHJhY2tlZH07Ly8jIHNvdXJjZU1hcHBpbmdVUkw9c2lnbmFscy1jb3JlLm1vZHVsZS5qcy5tYXBcbiIsCiAgICAidmFyIF9fY3JlYXRlID0gT2JqZWN0LmNyZWF0ZTtcbnZhciBfX2RlZlByb3AgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19kZWZQcm9wcyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzO1xudmFyIF9fZ2V0T3duUHJvcERlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIF9fZ2V0T3duUHJvcERlc2NzID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnM7XG52YXIgX19nZXRPd25Qcm9wU3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgX19oYXNPd25Qcm9wID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBfX3Byb3BJc0VudW0gPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xudmFyIF9fa25vd25TeW1ib2wgPSAobmFtZSwgc3ltYm9sKSA9PiAoc3ltYm9sID0gU3ltYm9sW25hbWVdKSA/IHN5bWJvbCA6IFN5bWJvbC5mb3IoXCJTeW1ib2wuXCIgKyBuYW1lKTtcbnZhciBfX3R5cGVFcnJvciA9IChtc2cpID0+IHtcbiAgdGhyb3cgVHlwZUVycm9yKG1zZyk7XG59O1xudmFyIF9fZGVmTm9ybWFsUHJvcCA9IChvYmosIGtleSwgdmFsdWUpID0+IGtleSBpbiBvYmogPyBfX2RlZlByb3Aob2JqLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSwgdmFsdWUgfSkgOiBvYmpba2V5XSA9IHZhbHVlO1xudmFyIF9fc3ByZWFkVmFsdWVzID0gKGEsIGIpID0+IHtcbiAgZm9yICh2YXIgcHJvcCBpbiBiIHx8IChiID0ge30pKVxuICAgIGlmIChfX2hhc093blByb3AuY2FsbChiLCBwcm9wKSlcbiAgICAgIF9fZGVmTm9ybWFsUHJvcChhLCBwcm9wLCBiW3Byb3BdKTtcbiAgaWYgKF9fZ2V0T3duUHJvcFN5bWJvbHMpXG4gICAgZm9yICh2YXIgcHJvcCBvZiBfX2dldE93blByb3BTeW1ib2xzKGIpKSB7XG4gICAgICBpZiAoX19wcm9wSXNFbnVtLmNhbGwoYiwgcHJvcCkpXG4gICAgICAgIF9fZGVmTm9ybWFsUHJvcChhLCBwcm9wLCBiW3Byb3BdKTtcbiAgICB9XG4gIHJldHVybiBhO1xufTtcbnZhciBfX3NwcmVhZFByb3BzID0gKGEsIGIpID0+IF9fZGVmUHJvcHMoYSwgX19nZXRPd25Qcm9wRGVzY3MoYikpO1xudmFyIF9fbmFtZSA9ICh0YXJnZXQsIHZhbHVlKSA9PiBfX2RlZlByb3AodGFyZ2V0LCBcIm5hbWVcIiwgeyB2YWx1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0pO1xudmFyIF9fZGVjb3JhdG9yU3RhcnQgPSAoYmFzZSkgPT4ge1xuICB2YXIgX2EyO1xuICByZXR1cm4gWywgLCAsIF9fY3JlYXRlKChfYTIgPSBiYXNlID09IG51bGwgPyB2b2lkIDAgOiBiYXNlW19fa25vd25TeW1ib2woXCJtZXRhZGF0YVwiKV0pICE9IG51bGwgPyBfYTIgOiBudWxsKV07XG59O1xudmFyIF9fZGVjb3JhdG9yU3RyaW5ncyA9IFtcImNsYXNzXCIsIFwibWV0aG9kXCIsIFwiZ2V0dGVyXCIsIFwic2V0dGVyXCIsIFwiYWNjZXNzb3JcIiwgXCJmaWVsZFwiLCBcInZhbHVlXCIsIFwiZ2V0XCIsIFwic2V0XCJdO1xudmFyIF9fZXhwZWN0Rm4gPSAoZm4pID0+IGZuICE9PSB2b2lkIDAgJiYgdHlwZW9mIGZuICE9PSBcImZ1bmN0aW9uXCIgPyBfX3R5cGVFcnJvcihcIkZ1bmN0aW9uIGV4cGVjdGVkXCIpIDogZm47XG52YXIgX19kZWNvcmF0b3JDb250ZXh0ID0gKGtpbmQsIG5hbWUsIGRvbmUsIG1ldGFkYXRhLCBmbnMpID0+ICh7IGtpbmQ6IF9fZGVjb3JhdG9yU3RyaW5nc1traW5kXSwgbmFtZSwgbWV0YWRhdGEsIGFkZEluaXRpYWxpemVyOiAoZm4pID0+IGRvbmUuXyA/IF9fdHlwZUVycm9yKFwiQWxyZWFkeSBpbml0aWFsaXplZFwiKSA6IGZucy5wdXNoKF9fZXhwZWN0Rm4oZm4gfHwgbnVsbCkpIH0pO1xudmFyIF9fZGVjb3JhdG9yTWV0YWRhdGEgPSAoYXJyYXksIHRhcmdldCkgPT4gX19kZWZOb3JtYWxQcm9wKHRhcmdldCwgX19rbm93blN5bWJvbChcIm1ldGFkYXRhXCIpLCBhcnJheVszXSk7XG52YXIgX19ydW5Jbml0aWFsaXplcnMgPSAoYXJyYXksIGZsYWdzLCBzZWxmLCB2YWx1ZSkgPT4ge1xuICBmb3IgKHZhciBpID0gMCwgZm5zID0gYXJyYXlbZmxhZ3MgPj4gMV0sIG4gPSBmbnMgJiYgZm5zLmxlbmd0aDsgaSA8IG47IGkrKykgZmxhZ3MgJiAxID8gZm5zW2ldLmNhbGwoc2VsZikgOiB2YWx1ZSA9IGZuc1tpXS5jYWxsKHNlbGYsIHZhbHVlKTtcbiAgcmV0dXJuIHZhbHVlO1xufTtcbnZhciBfX2RlY29yYXRlRWxlbWVudCA9IChhcnJheSwgZmxhZ3MsIG5hbWUsIGRlY29yYXRvcnMsIHRhcmdldCwgZXh0cmEpID0+IHtcbiAgdmFyIGZuLCBpdCwgZG9uZSwgY3R4LCBhY2Nlc3MsIGsgPSBmbGFncyAmIDcsIHMgPSAhIShmbGFncyAmIDgpLCBwID0gISEoZmxhZ3MgJiAxNik7XG4gIHZhciBqID0gayA+IDMgPyBhcnJheS5sZW5ndGggKyAxIDogayA/IHMgPyAxIDogMiA6IDAsIGtleSA9IF9fZGVjb3JhdG9yU3RyaW5nc1trICsgNV07XG4gIHZhciBpbml0aWFsaXplcnMgPSBrID4gMyAmJiAoYXJyYXlbaiAtIDFdID0gW10pLCBleHRyYUluaXRpYWxpemVycyA9IGFycmF5W2pdIHx8IChhcnJheVtqXSA9IFtdKTtcbiAgdmFyIGRlc2MgPSBrICYmICghcCAmJiAhcyAmJiAodGFyZ2V0ID0gdGFyZ2V0LnByb3RvdHlwZSksIGsgPCA1ICYmIChrID4gMyB8fCAhcCkgJiYgX19nZXRPd25Qcm9wRGVzYyhrIDwgNCA/IHRhcmdldCA6IHsgZ2V0IFtuYW1lXSgpIHtcbiAgICByZXR1cm4gX19wcml2YXRlR2V0KHRoaXMsIGV4dHJhKTtcbiAgfSwgc2V0IFtuYW1lXSh4KSB7XG4gICAgcmV0dXJuIF9fcHJpdmF0ZVNldCh0aGlzLCBleHRyYSwgeCk7XG4gIH0gfSwgbmFtZSkpO1xuICBrID8gcCAmJiBrIDwgNCAmJiBfX25hbWUoZXh0cmEsIChrID4gMiA/IFwic2V0IFwiIDogayA+IDEgPyBcImdldCBcIiA6IFwiXCIpICsgbmFtZSkgOiBfX25hbWUodGFyZ2V0LCBuYW1lKTtcbiAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBjdHggPSBfX2RlY29yYXRvckNvbnRleHQoaywgbmFtZSwgZG9uZSA9IHt9LCBhcnJheVszXSwgZXh0cmFJbml0aWFsaXplcnMpO1xuICAgIGlmIChrKSB7XG4gICAgICBjdHguc3RhdGljID0gcywgY3R4LnByaXZhdGUgPSBwLCBhY2Nlc3MgPSBjdHguYWNjZXNzID0geyBoYXM6IHAgPyAoeCkgPT4gX19wcml2YXRlSW4odGFyZ2V0LCB4KSA6ICh4KSA9PiBuYW1lIGluIHggfTtcbiAgICAgIGlmIChrIF4gMykgYWNjZXNzLmdldCA9IHAgPyAoeCkgPT4gKGsgXiAxID8gX19wcml2YXRlR2V0IDogX19wcml2YXRlTWV0aG9kKSh4LCB0YXJnZXQsIGsgXiA0ID8gZXh0cmEgOiBkZXNjLmdldCkgOiAoeCkgPT4geFtuYW1lXTtcbiAgICAgIGlmIChrID4gMikgYWNjZXNzLnNldCA9IHAgPyAoeCwgeSkgPT4gX19wcml2YXRlU2V0KHgsIHRhcmdldCwgeSwgayBeIDQgPyBleHRyYSA6IGRlc2Muc2V0KSA6ICh4LCB5KSA9PiB4W25hbWVdID0geTtcbiAgICB9XG4gICAgaXQgPSAoMCwgZGVjb3JhdG9yc1tpXSkoayA/IGsgPCA0ID8gcCA/IGV4dHJhIDogZGVzY1trZXldIDogayA+IDQgPyB2b2lkIDAgOiB7IGdldDogZGVzYy5nZXQsIHNldDogZGVzYy5zZXQgfSA6IHRhcmdldCwgY3R4KSwgZG9uZS5fID0gMTtcbiAgICBpZiAoayBeIDQgfHwgaXQgPT09IHZvaWQgMCkgX19leHBlY3RGbihpdCkgJiYgKGsgPiA0ID8gaW5pdGlhbGl6ZXJzLnVuc2hpZnQoaXQpIDogayA/IHAgPyBleHRyYSA9IGl0IDogZGVzY1trZXldID0gaXQgOiB0YXJnZXQgPSBpdCk7XG4gICAgZWxzZSBpZiAodHlwZW9mIGl0ICE9PSBcIm9iamVjdFwiIHx8IGl0ID09PSBudWxsKSBfX3R5cGVFcnJvcihcIk9iamVjdCBleHBlY3RlZFwiKTtcbiAgICBlbHNlIF9fZXhwZWN0Rm4oZm4gPSBpdC5nZXQpICYmIChkZXNjLmdldCA9IGZuKSwgX19leHBlY3RGbihmbiA9IGl0LnNldCkgJiYgKGRlc2Muc2V0ID0gZm4pLCBfX2V4cGVjdEZuKGZuID0gaXQuaW5pdCkgJiYgaW5pdGlhbGl6ZXJzLnVuc2hpZnQoZm4pO1xuICB9XG4gIHJldHVybiBrIHx8IF9fZGVjb3JhdG9yTWV0YWRhdGEoYXJyYXksIHRhcmdldCksIGRlc2MgJiYgX19kZWZQcm9wKHRhcmdldCwgbmFtZSwgZGVzYyksIHAgPyBrIF4gNCA/IGV4dHJhIDogZGVzYyA6IHRhcmdldDtcbn07XG52YXIgX19hY2Nlc3NDaGVjayA9IChvYmosIG1lbWJlciwgbXNnKSA9PiBtZW1iZXIuaGFzKG9iaikgfHwgX190eXBlRXJyb3IoXCJDYW5ub3QgXCIgKyBtc2cpO1xudmFyIF9fcHJpdmF0ZUluID0gKG1lbWJlciwgb2JqKSA9PiBPYmplY3Qob2JqKSAhPT0gb2JqID8gX190eXBlRXJyb3IoJ0Nhbm5vdCB1c2UgdGhlIFwiaW5cIiBvcGVyYXRvciBvbiB0aGlzIHZhbHVlJykgOiBtZW1iZXIuaGFzKG9iaik7XG52YXIgX19wcml2YXRlR2V0ID0gKG9iaiwgbWVtYmVyLCBnZXR0ZXIpID0+IChfX2FjY2Vzc0NoZWNrKG9iaiwgbWVtYmVyLCBcInJlYWQgZnJvbSBwcml2YXRlIGZpZWxkXCIpLCBnZXR0ZXIgPyBnZXR0ZXIuY2FsbChvYmopIDogbWVtYmVyLmdldChvYmopKTtcbnZhciBfX3ByaXZhdGVBZGQgPSAob2JqLCBtZW1iZXIsIHZhbHVlKSA9PiBtZW1iZXIuaGFzKG9iaikgPyBfX3R5cGVFcnJvcihcIkNhbm5vdCBhZGQgdGhlIHNhbWUgcHJpdmF0ZSBtZW1iZXIgbW9yZSB0aGFuIG9uY2VcIikgOiBtZW1iZXIgaW5zdGFuY2VvZiBXZWFrU2V0ID8gbWVtYmVyLmFkZChvYmopIDogbWVtYmVyLnNldChvYmosIHZhbHVlKTtcbnZhciBfX3ByaXZhdGVTZXQgPSAob2JqLCBtZW1iZXIsIHZhbHVlLCBzZXR0ZXIpID0+IChfX2FjY2Vzc0NoZWNrKG9iaiwgbWVtYmVyLCBcIndyaXRlIHRvIHByaXZhdGUgZmllbGRcIiksIHNldHRlciA/IHNldHRlci5jYWxsKG9iaiwgdmFsdWUpIDogbWVtYmVyLnNldChvYmosIHZhbHVlKSwgdmFsdWUpO1xudmFyIF9fcHJpdmF0ZU1ldGhvZCA9IChvYmosIG1lbWJlciwgbWV0aG9kKSA9PiAoX19hY2Nlc3NDaGVjayhvYmosIG1lbWJlciwgXCJhY2Nlc3MgcHJpdmF0ZSBtZXRob2RcIiksIG1ldGhvZCk7XG5cbi8vIHNyYy9pbmRleC50c1xuaW1wb3J0IHtcbiAgYmF0Y2ggYXMgYmF0Y2gyLFxuICBlZmZlY3QgYXMgZWZmZWN0MixcbiAgdW50cmFja2VkIGFzIHVudHJhY2tlZDMsXG4gIHNpZ25hbCBhcyBzaWduYWwyLFxuICBTaWduYWxcbn0gZnJvbSBcIkBwcmVhY3Qvc2lnbmFscy1jb3JlXCI7XG5cbi8vIHNyYy9jb21wdXRlZC50c1xuaW1wb3J0IHtcbiAgY29tcHV0ZWQgYXMgY29tcHV0ZWRTaWduYWxcbn0gZnJvbSBcIkBwcmVhY3Qvc2lnbmFscy1jb3JlXCI7XG5mdW5jdGlvbiBjb21wdXRlZChjb21wdXRlLCBjb21wYXJhdG9yKSB7XG4gIGlmIChjb21wYXJhdG9yKSB7XG4gICAgbGV0IHByZXZpb3VzVmFsdWU7XG4gICAgcmV0dXJuIGNvbXB1dGVkU2lnbmFsKCgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gY29tcHV0ZSgpO1xuICAgICAgaWYgKHZhbHVlICYmIHByZXZpb3VzVmFsdWUgJiYgY29tcGFyYXRvcihwcmV2aW91c1ZhbHVlLCB2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHByZXZpb3VzVmFsdWU7XG4gICAgICB9XG4gICAgICBwcmV2aW91c1ZhbHVlID0gdmFsdWU7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGNvbXB1dGVkU2lnbmFsKGNvbXB1dGUpO1xufVxuXG4vLyBzcmMvY29tcGFyYXRvcnMudHNcbmZ1bmN0aW9uIGRlZXBFcXVhbChhLCBiKSB7XG4gIGlmIChPYmplY3QuaXMoYSwgYikpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAoYSA9PT0gbnVsbCB8fCBiID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gIGlmICh0eXBlb2YgYSA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBiID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4gYSA9PT0gYjtcbiAgfVxuICBpZiAoYSBpbnN0YW5jZW9mIFNldCAmJiBiIGluc3RhbmNlb2YgU2V0KSB7XG4gICAgaWYgKGEuc2l6ZSAhPT0gYi5zaXplKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZvciAoY29uc3QgdmFsdWUgb2YgYSkge1xuICAgICAgaWYgKCFiLmhhcyh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAoQXJyYXkuaXNBcnJheShhKSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShiKSB8fCBhLmxlbmd0aCAhPT0gYi5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgaGFzRGlmZmVyZW50VmFsdWVzID0gYS5zb21lKFxuICAgICAgKHZhbHVlLCBpbmRleCkgPT4gIWRlZXBFcXVhbCh2YWx1ZSwgYltpbmRleF0pXG4gICAgKTtcbiAgICByZXR1cm4gIWhhc0RpZmZlcmVudFZhbHVlcztcbiAgfVxuICBpZiAodHlwZW9mIGEgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIGIgPT09IFwib2JqZWN0XCIpIHtcbiAgICBjb25zdCBhS2V5cyA9IE9iamVjdC5rZXlzKGEpO1xuICAgIGNvbnN0IGJLZXlzID0gT2JqZWN0LmtleXMoYik7XG4gICAgaWYgKGFLZXlzLmxlbmd0aCAhPT0gYktleXMubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgY29uc3QgaGFzRGlmZmVyZW50VmFsdWVzID0gYUtleXMuc29tZShcbiAgICAgIChrZXkpID0+ICFkZWVwRXF1YWwoYVtrZXldLCBiW2tleV0pXG4gICAgKTtcbiAgICByZXR1cm4gIWhhc0RpZmZlcmVudFZhbHVlcztcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8vIHNyYy9kZWNvcmF0b3JzLnRzXG5pbXBvcnQgeyBzaWduYWwgfSBmcm9tIFwiQHByZWFjdC9zaWduYWxzLWNvcmVcIjtcbmZ1bmN0aW9uIHJlYWN0aXZlKHsgZ2V0IH0sIF8pIHtcbiAgcmV0dXJuIHtcbiAgICBpbml0KHZhbHVlKSB7XG4gICAgICByZXR1cm4gc2lnbmFsKHZhbHVlKTtcbiAgICB9LFxuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSBnZXQuY2FsbCh0aGlzKTtcbiAgICAgIHJldHVybiBjdXJyZW50LnZhbHVlO1xuICAgIH0sXG4gICAgc2V0KG5ld1ZhbHVlKSB7XG4gICAgICBjb25zdCBjdXJyZW50ID0gZ2V0LmNhbGwodGhpcyk7XG4gICAgICBpZiAoY3VycmVudC5wZWVrKCkgPT09IG5ld1ZhbHVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGN1cnJlbnQudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICB9XG4gIH07XG59XG5mdW5jdGlvbiBkZXJpdmVkKHRhcmdldCwgXykge1xuICBjb25zdCBtYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGxldCByZXN1bHQgPSBtYXAuZ2V0KHRoaXMpO1xuICAgIGlmICghcmVzdWx0KSB7XG4gICAgICByZXN1bHQgPSBjb21wdXRlZCh0YXJnZXQuYmluZCh0aGlzKSk7XG4gICAgICBtYXAuc2V0KHRoaXMsIHJlc3VsdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQudmFsdWU7XG4gIH07XG59XG5mdW5jdGlvbiBlbnVtZXJhYmxlKGVudW1lcmFibGUyID0gdHJ1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oX3ZhbHVlLCBjb250ZXh0KSB7XG4gICAgY29udGV4dC5hZGRJbml0aWFsaXplcihmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IGhvc3QgPSBjb250ZXh0LmtpbmQgPT09IFwiZmllbGRcIiA/IHRoaXMgOiBjb250ZXh0LnN0YXRpYyA/IHRoaXMgOiBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcyk7XG4gICAgICBjb25zdCBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihob3N0LCBjb250ZXh0Lm5hbWUpO1xuICAgICAgaWYgKGRlc2NyaXB0b3IpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGhvc3QsIGNvbnRleHQubmFtZSwgX19zcHJlYWRQcm9wcyhfX3NwcmVhZFZhbHVlcyh7fSwgZGVzY3JpcHRvciksIHsgZW51bWVyYWJsZTogZW51bWVyYWJsZTIgfSkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xufVxuXG4vLyBzcmMvZWZmZWN0cy50c1xuaW1wb3J0IHsgZWZmZWN0IH0gZnJvbSBcIkBwcmVhY3Qvc2lnbmFscy1jb3JlXCI7XG5mdW5jdGlvbiBlZmZlY3RzKC4uLmVudHJpZXMpIHtcbiAgY29uc3QgZWZmZWN0czIgPSBlbnRyaWVzLm1hcCgoZm4pID0+IGVmZmVjdChmbikpO1xuICByZXR1cm4gKCkgPT4gZWZmZWN0czIuZm9yRWFjaCgoY2xlYW51cCkgPT4gY2xlYW51cCgpKTtcbn1cblxuLy8gc3JjL2hpc3RvcnkudHNcbmltcG9ydCB7IGJhdGNoLCB1bnRyYWNrZWQgfSBmcm9tIFwiQHByZWFjdC9zaWduYWxzLWNvcmVcIjtcbnZhciBfcHJldmlvdXNfZGVjLCBfaW5pdGlhbF9kZWMsIF9jdXJyZW50X2RlYywgX2N1cnJlbnRfZGVjMiwgX3ByZXZpb3VzX2RlYzIsIF9pbml0aWFsX2RlYzIsIF9pbml0LCBfaW5pdGlhbCwgX2EsIGluaXRpYWxfZ2V0LCBpbml0aWFsX3NldCwgX1ZhbHVlSGlzdG9yeV9pbnN0YW5jZXMsIF9wcmV2aW91cywgX2IsIHByZXZpb3VzX2dldCwgcHJldmlvdXNfc2V0LCBfY3VycmVudCwgX2MsIGN1cnJlbnRfZ2V0LCBjdXJyZW50X3NldDtcbl9pbml0aWFsX2RlYzIgPSBbcmVhY3RpdmVdLCBfcHJldmlvdXNfZGVjMiA9IFtyZWFjdGl2ZV0sIF9jdXJyZW50X2RlYzIgPSBbcmVhY3RpdmVdLCBfY3VycmVudF9kZWMgPSBbZW51bWVyYWJsZSgpXSwgX2luaXRpYWxfZGVjID0gW2VudW1lcmFibGUoKV0sIF9wcmV2aW91c19kZWMgPSBbZW51bWVyYWJsZSgpXTtcbnZhciBWYWx1ZUhpc3RvcnkgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGRlZmF1bHRWYWx1ZSwgZXF1YWxzID0gT2JqZWN0LmlzKSB7XG4gICAgdGhpcy5kZWZhdWx0VmFsdWUgPSBkZWZhdWx0VmFsdWU7XG4gICAgdGhpcy5lcXVhbHMgPSBlcXVhbHM7XG4gICAgX19ydW5Jbml0aWFsaXplcnMoX2luaXQsIDUsIHRoaXMpO1xuICAgIF9fcHJpdmF0ZUFkZCh0aGlzLCBfVmFsdWVIaXN0b3J5X2luc3RhbmNlcyk7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIF9fcHJpdmF0ZUFkZCh0aGlzLCBfaW5pdGlhbCwgX19ydW5Jbml0aWFsaXplcnMoX2luaXQsIDgsIHRoaXMpKSwgX19ydW5Jbml0aWFsaXplcnMoX2luaXQsIDExLCB0aGlzKTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgX19wcml2YXRlQWRkKHRoaXMsIF9wcmV2aW91cywgX19ydW5Jbml0aWFsaXplcnMoX2luaXQsIDEyLCB0aGlzKSksIF9fcnVuSW5pdGlhbGl6ZXJzKF9pbml0LCAxNSwgdGhpcyk7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIF9fcHJpdmF0ZUFkZCh0aGlzLCBfY3VycmVudCwgX19ydW5Jbml0aWFsaXplcnMoX2luaXQsIDE2LCB0aGlzKSksIF9fcnVuSW5pdGlhbGl6ZXJzKF9pbml0LCAxOSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCA9IHRoaXMucmVzZXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlc2V0KCk7XG4gIH1cbiAgZ2V0IGN1cnJlbnQoKSB7XG4gICAgcmV0dXJuIF9fcHJpdmF0ZUdldCh0aGlzLCBfVmFsdWVIaXN0b3J5X2luc3RhbmNlcywgY3VycmVudF9nZXQpO1xuICB9XG4gIGdldCBpbml0aWFsKCkge1xuICAgIHJldHVybiBfX3ByaXZhdGVHZXQodGhpcywgX1ZhbHVlSGlzdG9yeV9pbnN0YW5jZXMsIGluaXRpYWxfZ2V0KTtcbiAgfVxuICBnZXQgcHJldmlvdXMoKSB7XG4gICAgcmV0dXJuIF9fcHJpdmF0ZUdldCh0aGlzLCBfVmFsdWVIaXN0b3J5X2luc3RhbmNlcywgcHJldmlvdXNfZ2V0KTtcbiAgfVxuICAvKiogU2V0IHRoZSBjdXJyZW50IHZhbHVlICovXG4gIHNldCBjdXJyZW50KHZhbHVlKSB7XG4gICAgY29uc3QgY3VycmVudCA9IHVudHJhY2tlZCgoKSA9PiBfX3ByaXZhdGVHZXQodGhpcywgX1ZhbHVlSGlzdG9yeV9pbnN0YW5jZXMsIGN1cnJlbnRfZ2V0KSk7XG4gICAgaWYgKHZhbHVlICYmIGN1cnJlbnQgJiYgdGhpcy5lcXVhbHMoY3VycmVudCwgdmFsdWUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGJhdGNoKCgpID0+IHtcbiAgICAgIGlmICghX19wcml2YXRlR2V0KHRoaXMsIF9WYWx1ZUhpc3RvcnlfaW5zdGFuY2VzLCBpbml0aWFsX2dldCkpIHtcbiAgICAgICAgX19wcml2YXRlU2V0KHRoaXMsIF9WYWx1ZUhpc3RvcnlfaW5zdGFuY2VzLCB2YWx1ZSwgaW5pdGlhbF9zZXQpO1xuICAgICAgfVxuICAgICAgX19wcml2YXRlU2V0KHRoaXMsIF9WYWx1ZUhpc3RvcnlfaW5zdGFuY2VzLCBjdXJyZW50LCBwcmV2aW91c19zZXQpO1xuICAgICAgX19wcml2YXRlU2V0KHRoaXMsIF9WYWx1ZUhpc3RvcnlfaW5zdGFuY2VzLCB2YWx1ZSwgY3VycmVudF9zZXQpO1xuICAgIH0pO1xuICB9XG4gIC8qKiBSZXNldCB0aGUgc3RhdGUgdG8gdGhlIGluaXRpYWwgdmFsdWUgKi9cbiAgcmVzZXQodmFsdWUgPSB0aGlzLmRlZmF1bHRWYWx1ZSkge1xuICAgIGJhdGNoKCgpID0+IHtcbiAgICAgIF9fcHJpdmF0ZVNldCh0aGlzLCBfVmFsdWVIaXN0b3J5X2luc3RhbmNlcywgdm9pZCAwLCBwcmV2aW91c19zZXQpO1xuICAgICAgX19wcml2YXRlU2V0KHRoaXMsIF9WYWx1ZUhpc3RvcnlfaW5zdGFuY2VzLCB2YWx1ZSwgaW5pdGlhbF9zZXQpO1xuICAgICAgX19wcml2YXRlU2V0KHRoaXMsIF9WYWx1ZUhpc3RvcnlfaW5zdGFuY2VzLCB2YWx1ZSwgY3VycmVudF9zZXQpO1xuICAgIH0pO1xuICB9XG59O1xuX2luaXQgPSBfX2RlY29yYXRvclN0YXJ0KG51bGwpO1xuX2luaXRpYWwgPSBuZXcgV2Vha01hcCgpO1xuX1ZhbHVlSGlzdG9yeV9pbnN0YW5jZXMgPSBuZXcgV2Vha1NldCgpO1xuX3ByZXZpb3VzID0gbmV3IFdlYWtNYXAoKTtcbl9jdXJyZW50ID0gbmV3IFdlYWtNYXAoKTtcbl9hID0gX19kZWNvcmF0ZUVsZW1lbnQoX2luaXQsIDIwLCBcIiNpbml0aWFsXCIsIF9pbml0aWFsX2RlYzIsIF9WYWx1ZUhpc3RvcnlfaW5zdGFuY2VzLCBfaW5pdGlhbCksIGluaXRpYWxfZ2V0ID0gX2EuZ2V0LCBpbml0aWFsX3NldCA9IF9hLnNldDtcbl9iID0gX19kZWNvcmF0ZUVsZW1lbnQoX2luaXQsIDIwLCBcIiNwcmV2aW91c1wiLCBfcHJldmlvdXNfZGVjMiwgX1ZhbHVlSGlzdG9yeV9pbnN0YW5jZXMsIF9wcmV2aW91cyksIHByZXZpb3VzX2dldCA9IF9iLmdldCwgcHJldmlvdXNfc2V0ID0gX2Iuc2V0O1xuX2MgPSBfX2RlY29yYXRlRWxlbWVudChfaW5pdCwgMjAsIFwiI2N1cnJlbnRcIiwgX2N1cnJlbnRfZGVjMiwgX1ZhbHVlSGlzdG9yeV9pbnN0YW5jZXMsIF9jdXJyZW50KSwgY3VycmVudF9nZXQgPSBfYy5nZXQsIGN1cnJlbnRfc2V0ID0gX2Muc2V0O1xuX19kZWNvcmF0ZUVsZW1lbnQoX2luaXQsIDIsIFwiY3VycmVudFwiLCBfY3VycmVudF9kZWMsIFZhbHVlSGlzdG9yeSk7XG5fX2RlY29yYXRlRWxlbWVudChfaW5pdCwgMiwgXCJpbml0aWFsXCIsIF9pbml0aWFsX2RlYywgVmFsdWVIaXN0b3J5KTtcbl9fZGVjb3JhdGVFbGVtZW50KF9pbml0LCAyLCBcInByZXZpb3VzXCIsIF9wcmV2aW91c19kZWMsIFZhbHVlSGlzdG9yeSk7XG5fX2RlY29yYXRvck1ldGFkYXRhKF9pbml0LCBWYWx1ZUhpc3RvcnkpO1xuXG4vLyBzcmMvc25hcHNob3QudHNcbmltcG9ydCB7IHVudHJhY2tlZCBhcyB1bnRyYWNrZWQyIH0gZnJvbSBcIkBwcmVhY3Qvc2lnbmFscy1jb3JlXCI7XG5mdW5jdGlvbiBzbmFwc2hvdCh2YWx1ZSkge1xuICByZXR1cm4gdW50cmFja2VkMigoKSA9PiB7XG4gICAgY29uc3Qgb3V0cHV0ID0ge307XG4gICAgZm9yIChjb25zdCBrZXkgaW4gdmFsdWUpIHtcbiAgICAgIG91dHB1dFtrZXldID0gdmFsdWVba2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfSk7XG59XG5cbi8vIHNyYy9zdG9yZS50c1xudmFyIF9zdG9yZTtcbnZhciBXZWFrU3RvcmUgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIF9fcHJpdmF0ZUFkZCh0aGlzLCBfc3RvcmUsIC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpKTtcbiAgfVxuICBnZXQoa2V5LCBpZCkge1xuICAgIHZhciBfYTI7XG4gICAgcmV0dXJuIGtleSA/IChfYTIgPSBfX3ByaXZhdGVHZXQodGhpcywgX3N0b3JlKS5nZXQoa2V5KSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hMi5nZXQoaWQpIDogdm9pZCAwO1xuICB9XG4gIHNldChrZXksIGlkLCB2YWx1ZSkge1xuICAgIHZhciBfYTI7XG4gICAgaWYgKCFrZXkpIHJldHVybjtcbiAgICBpZiAoIV9fcHJpdmF0ZUdldCh0aGlzLCBfc3RvcmUpLmhhcyhrZXkpKSBfX3ByaXZhdGVHZXQodGhpcywgX3N0b3JlKS5zZXQoa2V5LCAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpKTtcbiAgICByZXR1cm4gKF9hMiA9IF9fcHJpdmF0ZUdldCh0aGlzLCBfc3RvcmUpLmdldChrZXkpKSA9PSBudWxsID8gdm9pZCAwIDogX2EyLnNldChpZCwgdmFsdWUpO1xuICB9XG4gIGNsZWFyKGtleSkge1xuICAgIHZhciBfYTI7XG4gICAgcmV0dXJuIGtleSA/IChfYTIgPSBfX3ByaXZhdGVHZXQodGhpcywgX3N0b3JlKS5nZXQoa2V5KSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hMi5jbGVhcigpIDogdm9pZCAwO1xuICB9XG59O1xuX3N0b3JlID0gbmV3IFdlYWtNYXAoKTtcbmV4cG9ydCB7XG4gIFNpZ25hbCxcbiAgVmFsdWVIaXN0b3J5LFxuICBXZWFrU3RvcmUsXG4gIGJhdGNoMiBhcyBiYXRjaCxcbiAgY29tcHV0ZWQsXG4gIGRlZXBFcXVhbCxcbiAgZGVyaXZlZCxcbiAgZWZmZWN0MiBhcyBlZmZlY3QsXG4gIGVmZmVjdHMsXG4gIGVudW1lcmFibGUsXG4gIHJlYWN0aXZlLFxuICBzaWduYWwyIGFzIHNpZ25hbCxcbiAgc25hcHNob3QsXG4gIHVudHJhY2tlZDMgYXMgdW50cmFja2VkXG59O1xuIiwKICAgICJ2YXIgX19jcmVhdGUgPSBPYmplY3QuY3JlYXRlO1xudmFyIF9fZGVmUHJvcCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX2dldE93blByb3BEZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBfX2dldE93blByb3BTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBfX2hhc093blByb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIF9fcHJvcElzRW51bSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG52YXIgX19rbm93blN5bWJvbCA9IChuYW1lLCBzeW1ib2wpID0+IChzeW1ib2wgPSBTeW1ib2xbbmFtZV0pID8gc3ltYm9sIDogU3ltYm9sLmZvcihcIlN5bWJvbC5cIiArIG5hbWUpO1xudmFyIF9fdHlwZUVycm9yID0gKG1zZykgPT4ge1xuICB0aHJvdyBUeXBlRXJyb3IobXNnKTtcbn07XG52YXIgX19wb3cgPSBNYXRoLnBvdztcbnZhciBfX2RlZk5vcm1hbFByb3AgPSAob2JqLCBrZXksIHZhbHVlKSA9PiBrZXkgaW4gb2JqID8gX19kZWZQcm9wKG9iaiwga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUsIHZhbHVlIH0pIDogb2JqW2tleV0gPSB2YWx1ZTtcbnZhciBfX3NwcmVhZFZhbHVlcyA9IChhLCBiKSA9PiB7XG4gIGZvciAodmFyIHByb3AgaW4gYiB8fCAoYiA9IHt9KSlcbiAgICBpZiAoX19oYXNPd25Qcm9wLmNhbGwoYiwgcHJvcCkpXG4gICAgICBfX2RlZk5vcm1hbFByb3AoYSwgcHJvcCwgYltwcm9wXSk7XG4gIGlmIChfX2dldE93blByb3BTeW1ib2xzKVxuICAgIGZvciAodmFyIHByb3Agb2YgX19nZXRPd25Qcm9wU3ltYm9scyhiKSkge1xuICAgICAgaWYgKF9fcHJvcElzRW51bS5jYWxsKGIsIHByb3ApKVxuICAgICAgICBfX2RlZk5vcm1hbFByb3AoYSwgcHJvcCwgYltwcm9wXSk7XG4gICAgfVxuICByZXR1cm4gYTtcbn07XG52YXIgX19uYW1lID0gKHRhcmdldCwgdmFsdWUpID0+IF9fZGVmUHJvcCh0YXJnZXQsIFwibmFtZVwiLCB7IHZhbHVlLCBjb25maWd1cmFibGU6IHRydWUgfSk7XG52YXIgX19kZWNvcmF0b3JTdGFydCA9IChiYXNlKSA9PiB7XG4gIHZhciBfYTI7XG4gIHJldHVybiBbLCAsICwgX19jcmVhdGUoKF9hMiA9IGJhc2UgPT0gbnVsbCA/IHZvaWQgMCA6IGJhc2VbX19rbm93blN5bWJvbChcIm1ldGFkYXRhXCIpXSkgIT0gbnVsbCA/IF9hMiA6IG51bGwpXTtcbn07XG52YXIgX19kZWNvcmF0b3JTdHJpbmdzID0gW1wiY2xhc3NcIiwgXCJtZXRob2RcIiwgXCJnZXR0ZXJcIiwgXCJzZXR0ZXJcIiwgXCJhY2Nlc3NvclwiLCBcImZpZWxkXCIsIFwidmFsdWVcIiwgXCJnZXRcIiwgXCJzZXRcIl07XG52YXIgX19leHBlY3RGbiA9IChmbikgPT4gZm4gIT09IHZvaWQgMCAmJiB0eXBlb2YgZm4gIT09IFwiZnVuY3Rpb25cIiA/IF9fdHlwZUVycm9yKFwiRnVuY3Rpb24gZXhwZWN0ZWRcIikgOiBmbjtcbnZhciBfX2RlY29yYXRvckNvbnRleHQgPSAoa2luZCwgbmFtZSwgZG9uZSwgbWV0YWRhdGEsIGZucykgPT4gKHsga2luZDogX19kZWNvcmF0b3JTdHJpbmdzW2tpbmRdLCBuYW1lLCBtZXRhZGF0YSwgYWRkSW5pdGlhbGl6ZXI6IChmbikgPT4gZG9uZS5fID8gX190eXBlRXJyb3IoXCJBbHJlYWR5IGluaXRpYWxpemVkXCIpIDogZm5zLnB1c2goX19leHBlY3RGbihmbiB8fCBudWxsKSkgfSk7XG52YXIgX19kZWNvcmF0b3JNZXRhZGF0YSA9IChhcnJheSwgdGFyZ2V0KSA9PiBfX2RlZk5vcm1hbFByb3AodGFyZ2V0LCBfX2tub3duU3ltYm9sKFwibWV0YWRhdGFcIiksIGFycmF5WzNdKTtcbnZhciBfX3J1bkluaXRpYWxpemVycyA9IChhcnJheSwgZmxhZ3MsIHNlbGYsIHZhbHVlKSA9PiB7XG4gIGZvciAodmFyIGkgPSAwLCBmbnMgPSBhcnJheVtmbGFncyA+PiAxXSwgbiA9IGZucyAmJiBmbnMubGVuZ3RoOyBpIDwgbjsgaSsrKSBmbGFncyAmIDEgPyBmbnNbaV0uY2FsbChzZWxmKSA6IHZhbHVlID0gZm5zW2ldLmNhbGwoc2VsZiwgdmFsdWUpO1xuICByZXR1cm4gdmFsdWU7XG59O1xudmFyIF9fZGVjb3JhdGVFbGVtZW50ID0gKGFycmF5LCBmbGFncywgbmFtZSwgZGVjb3JhdG9ycywgdGFyZ2V0LCBleHRyYSkgPT4ge1xuICB2YXIgZm4sIGl0LCBkb25lLCBjdHgsIGFjY2VzcywgayA9IGZsYWdzICYgNywgcyA9ICEhKGZsYWdzICYgOCksIHAgPSAhIShmbGFncyAmIDE2KTtcbiAgdmFyIGogPSBrID4gMyA/IGFycmF5Lmxlbmd0aCArIDEgOiBrID8gcyA/IDEgOiAyIDogMCwga2V5ID0gX19kZWNvcmF0b3JTdHJpbmdzW2sgKyA1XTtcbiAgdmFyIGluaXRpYWxpemVycyA9IGsgPiAzICYmIChhcnJheVtqIC0gMV0gPSBbXSksIGV4dHJhSW5pdGlhbGl6ZXJzID0gYXJyYXlbal0gfHwgKGFycmF5W2pdID0gW10pO1xuICB2YXIgZGVzYyA9IGsgJiYgKCFwICYmICFzICYmICh0YXJnZXQgPSB0YXJnZXQucHJvdG90eXBlKSwgayA8IDUgJiYgKGsgPiAzIHx8ICFwKSAmJiBfX2dldE93blByb3BEZXNjKGsgPCA0ID8gdGFyZ2V0IDogeyBnZXQgW25hbWVdKCkge1xuICAgIHJldHVybiBfX3ByaXZhdGVHZXQodGhpcywgZXh0cmEpO1xuICB9LCBzZXQgW25hbWVdKHgpIHtcbiAgICByZXR1cm4gX19wcml2YXRlU2V0KHRoaXMsIGV4dHJhLCB4KTtcbiAgfSB9LCBuYW1lKSk7XG4gIGsgPyBwICYmIGsgPCA0ICYmIF9fbmFtZShleHRyYSwgKGsgPiAyID8gXCJzZXQgXCIgOiBrID4gMSA/IFwiZ2V0IFwiIDogXCJcIikgKyBuYW1lKSA6IF9fbmFtZSh0YXJnZXQsIG5hbWUpO1xuICBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGN0eCA9IF9fZGVjb3JhdG9yQ29udGV4dChrLCBuYW1lLCBkb25lID0ge30sIGFycmF5WzNdLCBleHRyYUluaXRpYWxpemVycyk7XG4gICAgaWYgKGspIHtcbiAgICAgIGN0eC5zdGF0aWMgPSBzLCBjdHgucHJpdmF0ZSA9IHAsIGFjY2VzcyA9IGN0eC5hY2Nlc3MgPSB7IGhhczogcCA/ICh4KSA9PiBfX3ByaXZhdGVJbih0YXJnZXQsIHgpIDogKHgpID0+IG5hbWUgaW4geCB9O1xuICAgICAgaWYgKGsgXiAzKSBhY2Nlc3MuZ2V0ID0gcCA/ICh4KSA9PiAoayBeIDEgPyBfX3ByaXZhdGVHZXQgOiBfX3ByaXZhdGVNZXRob2QpKHgsIHRhcmdldCwgayBeIDQgPyBleHRyYSA6IGRlc2MuZ2V0KSA6ICh4KSA9PiB4W25hbWVdO1xuICAgICAgaWYgKGsgPiAyKSBhY2Nlc3Muc2V0ID0gcCA/ICh4LCB5KSA9PiBfX3ByaXZhdGVTZXQoeCwgdGFyZ2V0LCB5LCBrIF4gNCA/IGV4dHJhIDogZGVzYy5zZXQpIDogKHgsIHkpID0+IHhbbmFtZV0gPSB5O1xuICAgIH1cbiAgICBpdCA9ICgwLCBkZWNvcmF0b3JzW2ldKShrID8gayA8IDQgPyBwID8gZXh0cmEgOiBkZXNjW2tleV0gOiBrID4gNCA/IHZvaWQgMCA6IHsgZ2V0OiBkZXNjLmdldCwgc2V0OiBkZXNjLnNldCB9IDogdGFyZ2V0LCBjdHgpLCBkb25lLl8gPSAxO1xuICAgIGlmIChrIF4gNCB8fCBpdCA9PT0gdm9pZCAwKSBfX2V4cGVjdEZuKGl0KSAmJiAoayA+IDQgPyBpbml0aWFsaXplcnMudW5zaGlmdChpdCkgOiBrID8gcCA/IGV4dHJhID0gaXQgOiBkZXNjW2tleV0gPSBpdCA6IHRhcmdldCA9IGl0KTtcbiAgICBlbHNlIGlmICh0eXBlb2YgaXQgIT09IFwib2JqZWN0XCIgfHwgaXQgPT09IG51bGwpIF9fdHlwZUVycm9yKFwiT2JqZWN0IGV4cGVjdGVkXCIpO1xuICAgIGVsc2UgX19leHBlY3RGbihmbiA9IGl0LmdldCkgJiYgKGRlc2MuZ2V0ID0gZm4pLCBfX2V4cGVjdEZuKGZuID0gaXQuc2V0KSAmJiAoZGVzYy5zZXQgPSBmbiksIF9fZXhwZWN0Rm4oZm4gPSBpdC5pbml0KSAmJiBpbml0aWFsaXplcnMudW5zaGlmdChmbik7XG4gIH1cbiAgcmV0dXJuIGsgfHwgX19kZWNvcmF0b3JNZXRhZGF0YShhcnJheSwgdGFyZ2V0KSwgZGVzYyAmJiBfX2RlZlByb3AodGFyZ2V0LCBuYW1lLCBkZXNjKSwgcCA/IGsgXiA0ID8gZXh0cmEgOiBkZXNjIDogdGFyZ2V0O1xufTtcbnZhciBfX2FjY2Vzc0NoZWNrID0gKG9iaiwgbWVtYmVyLCBtc2cpID0+IG1lbWJlci5oYXMob2JqKSB8fCBfX3R5cGVFcnJvcihcIkNhbm5vdCBcIiArIG1zZyk7XG52YXIgX19wcml2YXRlSW4gPSAobWVtYmVyLCBvYmopID0+IE9iamVjdChvYmopICE9PSBvYmogPyBfX3R5cGVFcnJvcignQ2Fubm90IHVzZSB0aGUgXCJpblwiIG9wZXJhdG9yIG9uIHRoaXMgdmFsdWUnKSA6IG1lbWJlci5oYXMob2JqKTtcbnZhciBfX3ByaXZhdGVHZXQgPSAob2JqLCBtZW1iZXIsIGdldHRlcikgPT4gKF9fYWNjZXNzQ2hlY2sob2JqLCBtZW1iZXIsIFwicmVhZCBmcm9tIHByaXZhdGUgZmllbGRcIiksIGdldHRlciA/IGdldHRlci5jYWxsKG9iaikgOiBtZW1iZXIuZ2V0KG9iaikpO1xudmFyIF9fcHJpdmF0ZUFkZCA9IChvYmosIG1lbWJlciwgdmFsdWUpID0+IG1lbWJlci5oYXMob2JqKSA/IF9fdHlwZUVycm9yKFwiQ2Fubm90IGFkZCB0aGUgc2FtZSBwcml2YXRlIG1lbWJlciBtb3JlIHRoYW4gb25jZVwiKSA6IG1lbWJlciBpbnN0YW5jZW9mIFdlYWtTZXQgPyBtZW1iZXIuYWRkKG9iaikgOiBtZW1iZXIuc2V0KG9iaiwgdmFsdWUpO1xudmFyIF9fcHJpdmF0ZVNldCA9IChvYmosIG1lbWJlciwgdmFsdWUsIHNldHRlcikgPT4gKF9fYWNjZXNzQ2hlY2sob2JqLCBtZW1iZXIsIFwid3JpdGUgdG8gcHJpdmF0ZSBmaWVsZFwiKSwgc2V0dGVyID8gc2V0dGVyLmNhbGwob2JqLCB2YWx1ZSkgOiBtZW1iZXIuc2V0KG9iaiwgdmFsdWUpLCB2YWx1ZSk7XG52YXIgX19wcml2YXRlTWV0aG9kID0gKG9iaiwgbWVtYmVyLCBtZXRob2QpID0+IChfX2FjY2Vzc0NoZWNrKG9iaiwgbWVtYmVyLCBcImFjY2VzcyBwcml2YXRlIG1ldGhvZFwiKSwgbWV0aG9kKTtcblxuLy8gc3JjL3BvaW50L1BvaW50LnRzXG52YXIgUG9pbnQgPSBjbGFzcyBfUG9pbnQge1xuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IENvb3JkaW5hdGUgb2YgdGhlIHBvaW50IG9uIHRoZSBob3Jpem9udGFsIGF4aXNcbiAgICogQHBhcmFtIHtudW1iZXJ9IENvb3JkaW5hdGUgb2YgdGhlIHBvaW50IG9uIHRoZSB2ZXJ0aWNhbCBheGlzXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBkZWx0YSBiZXR3ZWVuIHRoaXMgcG9pbnQgYW5kIGFub3RoZXIgcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7UG9pbnR9IGEgLSBBIHBvaW50XG4gICAqIEBwYXJhbSB7UG9pbnR9IGIgLSBBbm90aGVyIHBvaW50XG4gICAqL1xuICBzdGF0aWMgZGVsdGEoYSwgYikge1xuICAgIHJldHVybiBuZXcgX1BvaW50KGEueCAtIGIueCwgYS55IC0gYi55KTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZGlzdGFuY2UgKGh5cG90ZW51c2UpIGJldHdlZW4gdGhpcyBwb2ludCBhbmQgYW5vdGhlciBwb2ludC5cbiAgICpcbiAgICogQHBhcmFtIHtQb2ludH0gYSAtIEEgcG9pbnRcbiAgICogQHBhcmFtIHtQb2ludH0gYiAtIEFub3RoZXIgcG9pbnRcbiAgICovXG4gIHN0YXRpYyBkaXN0YW5jZShhLCBiKSB7XG4gICAgcmV0dXJuIE1hdGguaHlwb3QoYS54IC0gYi54LCBhLnkgLSBiLnkpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgYm90aCBwb2ludHMgYXJlIGVxdWFsLlxuICAgKlxuICAgKiBAcGFyYW0ge1BvaW50fSBhIC0gQSBwb2ludFxuICAgKiBAcGFyYW0ge1BvaW50fSBiIC0gQW5vdGhlciBwb2ludFxuICAgKi9cbiAgc3RhdGljIGVxdWFscyhhLCBiKSB7XG4gICAgcmV0dXJuIGEueCA9PT0gYi54ICYmIGEueSA9PT0gYi55O1xuICB9XG4gIHN0YXRpYyBmcm9tKHsgeCwgeSB9KSB7XG4gICAgcmV0dXJuIG5ldyBfUG9pbnQoeCwgeSk7XG4gIH1cbn07XG5cbi8vIHNyYy9zaGFwZXMvUmVjdGFuZ2xlLnRzXG52YXIgUmVjdGFuZ2xlID0gY2xhc3MgX1JlY3RhbmdsZSB7XG4gIGNvbnN0cnVjdG9yKGxlZnQsIHRvcCwgd2lkdGgsIGhlaWdodCkge1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgdGhpcy50b3AgPSB0b3A7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMuc2NhbGUgPSB7XG4gICAgICB4OiAxLFxuICAgICAgeTogMVxuICAgIH07XG4gIH1cbiAgZ2V0IGludmVyc2VTY2FsZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgeDogMSAvIHRoaXMuc2NhbGUueCxcbiAgICAgIHk6IDEgLyB0aGlzLnNjYWxlLnlcbiAgICB9O1xuICB9XG4gIHRyYW5zbGF0ZSh4LCB5KSB7XG4gICAgY29uc3QgeyB0b3AsIGxlZnQsIHdpZHRoLCBoZWlnaHQsIHNjYWxlIH0gPSB0aGlzO1xuICAgIGNvbnN0IG5ld1NoYXBlID0gbmV3IF9SZWN0YW5nbGUobGVmdCArIHgsIHRvcCArIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgIG5ld1NoYXBlLnNjYWxlID0gX19zcHJlYWRWYWx1ZXMoe30sIHNjYWxlKTtcbiAgICByZXR1cm4gbmV3U2hhcGU7XG4gIH1cbiAgZ2V0IGJvdW5kaW5nUmVjdGFuZ2xlKCkge1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgbGVmdCwgdG9wLCByaWdodCwgYm90dG9tIH0gPSB0aGlzO1xuICAgIHJldHVybiB7IHdpZHRoLCBoZWlnaHQsIGxlZnQsIHRvcCwgcmlnaHQsIGJvdHRvbSB9O1xuICB9XG4gIGdldCBjZW50ZXIoKSB7XG4gICAgY29uc3QgeyBsZWZ0LCB0b3AsIHJpZ2h0LCBib3R0b20gfSA9IHRoaXM7XG4gICAgcmV0dXJuIG5ldyBQb2ludCgobGVmdCArIHJpZ2h0KSAvIDIsICh0b3AgKyBib3R0b20pIC8gMik7XG4gIH1cbiAgZ2V0IGFyZWEoKSB7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzO1xuICAgIHJldHVybiB3aWR0aCAqIGhlaWdodDtcbiAgfVxuICBlcXVhbHMoc2hhcGUpIHtcbiAgICBpZiAoIShzaGFwZSBpbnN0YW5jZW9mIF9SZWN0YW5nbGUpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IHsgbGVmdCwgdG9wLCB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzO1xuICAgIHJldHVybiBsZWZ0ID09PSBzaGFwZS5sZWZ0ICYmIHRvcCA9PT0gc2hhcGUudG9wICYmIHdpZHRoID09PSBzaGFwZS53aWR0aCAmJiBoZWlnaHQgPT09IHNoYXBlLmhlaWdodDtcbiAgfVxuICBjb250YWluc1BvaW50KHBvaW50KSB7XG4gICAgY29uc3QgeyB0b3AsIGxlZnQsIGJvdHRvbSwgcmlnaHQgfSA9IHRoaXM7XG4gICAgcmV0dXJuIHRvcCA8PSBwb2ludC55ICYmIHBvaW50LnkgPD0gYm90dG9tICYmIGxlZnQgPD0gcG9pbnQueCAmJiBwb2ludC54IDw9IHJpZ2h0O1xuICB9XG4gIGludGVyc2VjdGlvbkFyZWEoc2hhcGUpIHtcbiAgICBpZiAoc2hhcGUgaW5zdGFuY2VvZiBfUmVjdGFuZ2xlKSB7XG4gICAgICByZXR1cm4gcmVjdGFuZ2xlUmVjdGFuZ2xlSW50ZXJzZWN0aW9uKHRoaXMsIHNoYXBlKTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgaW50ZXJzZWN0aW9uUmF0aW8oc2hhcGUpIHtcbiAgICBjb25zdCB7IGFyZWEgfSA9IHRoaXM7XG4gICAgY29uc3QgaW50ZXJzZWN0aW9uQXJlYSA9IHRoaXMuaW50ZXJzZWN0aW9uQXJlYShzaGFwZSk7XG4gICAgY29uc3QgaW50ZXJzZWN0aW9uUmF0aW8gPSBpbnRlcnNlY3Rpb25BcmVhIC8gKHNoYXBlLmFyZWEgKyBhcmVhIC0gaW50ZXJzZWN0aW9uQXJlYSk7XG4gICAgcmV0dXJuIGludGVyc2VjdGlvblJhdGlvO1xuICB9XG4gIGdldCBib3R0b20oKSB7XG4gICAgY29uc3QgeyB0b3AsIGhlaWdodCB9ID0gdGhpcztcbiAgICByZXR1cm4gdG9wICsgaGVpZ2h0O1xuICB9XG4gIGdldCByaWdodCgpIHtcbiAgICBjb25zdCB7IGxlZnQsIHdpZHRoIH0gPSB0aGlzO1xuICAgIHJldHVybiBsZWZ0ICsgd2lkdGg7XG4gIH1cbiAgZ2V0IGFzcGVjdFJhdGlvKCkge1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcztcbiAgICByZXR1cm4gd2lkdGggLyBoZWlnaHQ7XG4gIH1cbiAgZ2V0IGNvcm5lcnMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHsgeDogdGhpcy5sZWZ0LCB5OiB0aGlzLnRvcCB9LFxuICAgICAgeyB4OiB0aGlzLnJpZ2h0LCB5OiB0aGlzLnRvcCB9LFxuICAgICAgeyB4OiB0aGlzLmxlZnQsIHk6IHRoaXMuYm90dG9tIH0sXG4gICAgICB7IHg6IHRoaXMucmlnaHQsIHk6IHRoaXMuYm90dG9tIH1cbiAgICBdO1xuICB9XG4gIHN0YXRpYyBmcm9tKHsgdG9wLCBsZWZ0LCB3aWR0aCwgaGVpZ2h0IH0pIHtcbiAgICByZXR1cm4gbmV3IF9SZWN0YW5nbGUobGVmdCwgdG9wLCB3aWR0aCwgaGVpZ2h0KTtcbiAgfVxuICBzdGF0aWMgZGVsdGEoYSwgYiwgYWxpZ25tZW50ID0geyB4OiBcImNlbnRlclwiLCB5OiBcImNlbnRlclwiIH0pIHtcbiAgICBjb25zdCBnZXRDb29yZGluYXRlID0gKHJlY3QsIGF4aXMpID0+IHtcbiAgICAgIGNvbnN0IGFsaWduID0gYWxpZ25tZW50W2F4aXNdO1xuICAgICAgY29uc3Qgc3RhcnQgPSBheGlzID09PSBcInhcIiA/IHJlY3QubGVmdCA6IHJlY3QudG9wO1xuICAgICAgY29uc3Qgc2l6ZSA9IGF4aXMgPT09IFwieFwiID8gcmVjdC53aWR0aCA6IHJlY3QuaGVpZ2h0O1xuICAgICAgaWYgKGFsaWduID09IFwic3RhcnRcIikgcmV0dXJuIHN0YXJ0O1xuICAgICAgaWYgKGFsaWduID09IFwiZW5kXCIpIHJldHVybiBzdGFydCArIHNpemU7XG4gICAgICByZXR1cm4gc3RhcnQgKyBzaXplIC8gMjtcbiAgICB9O1xuICAgIHJldHVybiBQb2ludC5kZWx0YShcbiAgICAgIHsgeDogZ2V0Q29vcmRpbmF0ZShhLCBcInhcIiksIHk6IGdldENvb3JkaW5hdGUoYSwgXCJ5XCIpIH0sXG4gICAgICB7IHg6IGdldENvb3JkaW5hdGUoYiwgXCJ4XCIpLCB5OiBnZXRDb29yZGluYXRlKGIsIFwieVwiKSB9XG4gICAgKTtcbiAgfVxuICBzdGF0aWMgaW50ZXJzZWN0aW9uUmF0aW8oYSwgYikge1xuICAgIHJldHVybiBfUmVjdGFuZ2xlLmZyb20oYSkuaW50ZXJzZWN0aW9uUmF0aW8oX1JlY3RhbmdsZS5mcm9tKGIpKTtcbiAgfVxufTtcbmZ1bmN0aW9uIHJlY3RhbmdsZVJlY3RhbmdsZUludGVyc2VjdGlvbihhLCBiKSB7XG4gIGNvbnN0IHRvcCA9IE1hdGgubWF4KGIudG9wLCBhLnRvcCk7XG4gIGNvbnN0IGxlZnQgPSBNYXRoLm1heChiLmxlZnQsIGEubGVmdCk7XG4gIGNvbnN0IHJpZ2h0ID0gTWF0aC5taW4oYi5sZWZ0ICsgYi53aWR0aCwgYS5sZWZ0ICsgYS53aWR0aCk7XG4gIGNvbnN0IGJvdHRvbSA9IE1hdGgubWluKGIudG9wICsgYi5oZWlnaHQsIGEudG9wICsgYS5oZWlnaHQpO1xuICBjb25zdCB3aWR0aCA9IHJpZ2h0IC0gbGVmdDtcbiAgY29uc3QgaGVpZ2h0ID0gYm90dG9tIC0gdG9wO1xuICBpZiAobGVmdCA8IHJpZ2h0ICYmIHRvcCA8IGJvdHRvbSkge1xuICAgIGNvbnN0IGludGVyc2VjdGlvbkFyZWEgPSB3aWR0aCAqIGhlaWdodDtcbiAgICByZXR1cm4gaW50ZXJzZWN0aW9uQXJlYTtcbiAgfVxuICByZXR1cm4gMDtcbn1cblxuLy8gc3JjL3Bvc2l0aW9uL3Bvc2l0aW9uLnRzXG5pbXBvcnQgeyBiYXRjaCwgZGVyaXZlZCwgVmFsdWVIaXN0b3J5IH0gZnJvbSBcIkBkbmQta2l0L3N0YXRlXCI7XG52YXIgX2RpcmVjdGlvbl9kZWMsIF9kZWx0YV9kZWMsIF9hLCBfdGltZXN0YW1wLCBfaW5pdDtcbnZhciBQb3NpdGlvbiA9IGNsYXNzIGV4dGVuZHMgKF9hID0gVmFsdWVIaXN0b3J5LCBfZGVsdGFfZGVjID0gW2Rlcml2ZWRdLCBfZGlyZWN0aW9uX2RlYyA9IFtkZXJpdmVkXSwgX2EpIHtcbiAgY29uc3RydWN0b3IoaW5pdGlhbFZhbHVlKSB7XG4gICAgY29uc3QgcG9pbnQgPSBQb2ludC5mcm9tKGluaXRpYWxWYWx1ZSk7XG4gICAgc3VwZXIocG9pbnQsIChhLCBiKSA9PiBQb2ludC5lcXVhbHMoYSwgYikpO1xuICAgIF9fcnVuSW5pdGlhbGl6ZXJzKF9pbml0LCA1LCB0aGlzKTtcbiAgICBfX3ByaXZhdGVBZGQodGhpcywgX3RpbWVzdGFtcCwgMCk7XG4gICAgdGhpcy52ZWxvY2l0eSA9IHsgeDogMCwgeTogMCB9O1xuICB9XG4gIGdldCBkZWx0YSgpIHtcbiAgICByZXR1cm4gUG9pbnQuZGVsdGEodGhpcy5jdXJyZW50LCB0aGlzLmluaXRpYWwpO1xuICB9XG4gIGdldCBkaXJlY3Rpb24oKSB7XG4gICAgY29uc3QgeyBjdXJyZW50LCBwcmV2aW91cyB9ID0gdGhpcztcbiAgICBpZiAoIXByZXZpb3VzKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBkZWx0YSA9IHtcbiAgICAgIHg6IGN1cnJlbnQueCAtIHByZXZpb3VzLngsXG4gICAgICB5OiBjdXJyZW50LnkgLSBwcmV2aW91cy55XG4gICAgfTtcbiAgICBpZiAoIWRlbHRhLnggJiYgIWRlbHRhLnkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAoTWF0aC5hYnMoZGVsdGEueCkgPiBNYXRoLmFicyhkZWx0YS55KSkge1xuICAgICAgcmV0dXJuIGRlbHRhLnggPiAwID8gXCJyaWdodFwiIDogXCJsZWZ0XCI7XG4gICAgfVxuICAgIHJldHVybiBkZWx0YS55ID4gMCA/IFwiZG93blwiIDogXCJ1cFwiO1xuICB9XG4gIGdldCBjdXJyZW50KCkge1xuICAgIHJldHVybiBzdXBlci5jdXJyZW50O1xuICB9XG4gIHNldCBjdXJyZW50KGNvb3JkaW5hdGVzKSB7XG4gICAgY29uc3QgeyBjdXJyZW50IH0gPSB0aGlzO1xuICAgIGNvbnN0IHBvaW50ID0gUG9pbnQuZnJvbShjb29yZGluYXRlcyk7XG4gICAgY29uc3QgZGVsdGEgPSB7XG4gICAgICB4OiBwb2ludC54IC0gY3VycmVudC54LFxuICAgICAgeTogcG9pbnQueSAtIGN1cnJlbnQueVxuICAgIH07XG4gICAgY29uc3QgdGltZXN0YW1wID0gRGF0ZS5ub3coKTtcbiAgICBjb25zdCB0aW1lRGVsdGEgPSB0aW1lc3RhbXAgLSBfX3ByaXZhdGVHZXQodGhpcywgX3RpbWVzdGFtcCk7XG4gICAgY29uc3QgdmVsb2NpdHkgPSAoZGVsdGEyKSA9PiBNYXRoLnJvdW5kKGRlbHRhMiAvIHRpbWVEZWx0YSAqIDEwMCk7XG4gICAgYmF0Y2goKCkgPT4ge1xuICAgICAgX19wcml2YXRlU2V0KHRoaXMsIF90aW1lc3RhbXAsIHRpbWVzdGFtcCk7XG4gICAgICB0aGlzLnZlbG9jaXR5ID0ge1xuICAgICAgICB4OiB2ZWxvY2l0eShkZWx0YS54KSxcbiAgICAgICAgeTogdmVsb2NpdHkoZGVsdGEueSlcbiAgICAgIH07XG4gICAgICBzdXBlci5jdXJyZW50ID0gcG9pbnQ7XG4gICAgfSk7XG4gIH1cbiAgcmVzZXQoY29vcmRpbmF0ZXMgPSB0aGlzLmRlZmF1bHRWYWx1ZSkge1xuICAgIHN1cGVyLnJlc2V0KFBvaW50LmZyb20oY29vcmRpbmF0ZXMpKTtcbiAgICB0aGlzLnZlbG9jaXR5ID0geyB4OiAwLCB5OiAwIH07XG4gIH1cbn07XG5faW5pdCA9IF9fZGVjb3JhdG9yU3RhcnQoX2EpO1xuX3RpbWVzdGFtcCA9IG5ldyBXZWFrTWFwKCk7XG5fX2RlY29yYXRlRWxlbWVudChfaW5pdCwgMiwgXCJkZWx0YVwiLCBfZGVsdGFfZGVjLCBQb3NpdGlvbik7XG5fX2RlY29yYXRlRWxlbWVudChfaW5pdCwgMiwgXCJkaXJlY3Rpb25cIiwgX2RpcmVjdGlvbl9kZWMsIFBvc2l0aW9uKTtcbl9fZGVjb3JhdG9yTWV0YWRhdGEoX2luaXQsIFBvc2l0aW9uKTtcblxuLy8gc3JjL2Rpc3RhbmNlL2Rpc3RhbmNlLnRzXG5mdW5jdGlvbiBleGNlZWRzRGlzdGFuY2UoeyB4LCB5IH0sIGRpc3RhbmNlKSB7XG4gIGNvbnN0IGR4ID0gTWF0aC5hYnMoeCk7XG4gIGNvbnN0IGR5ID0gTWF0aC5hYnMoeSk7XG4gIGlmICh0eXBlb2YgZGlzdGFuY2UgPT09IFwibnVtYmVyXCIpIHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KF9fcG93KGR4LCAyKSArIF9fcG93KGR5LCAyKSkgPiBkaXN0YW5jZTtcbiAgfVxuICBpZiAoXCJ4XCIgaW4gZGlzdGFuY2UgJiYgXCJ5XCIgaW4gZGlzdGFuY2UpIHtcbiAgICByZXR1cm4gZHggPiBkaXN0YW5jZS54ICYmIGR5ID4gZGlzdGFuY2UueTtcbiAgfVxuICBpZiAoXCJ4XCIgaW4gZGlzdGFuY2UpIHtcbiAgICByZXR1cm4gZHggPiBkaXN0YW5jZS54O1xuICB9XG4gIGlmIChcInlcIiBpbiBkaXN0YW5jZSkge1xuICAgIHJldHVybiBkeSA+IGRpc3RhbmNlLnk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vLyBzcmMvdHlwZXMvYXhpcy50c1xudmFyIEF4aXMgPSAvKiBAX19QVVJFX18gKi8gKChBeGlzMikgPT4ge1xuICBBeGlzMltcIkhvcml6b250YWxcIl0gPSBcInhcIjtcbiAgQXhpczJbXCJWZXJ0aWNhbFwiXSA9IFwieVwiO1xuICByZXR1cm4gQXhpczI7XG59KShBeGlzIHx8IHt9KTtcbnZhciBBeGVzID0gT2JqZWN0LnZhbHVlcyhBeGlzKTtcbmV4cG9ydCB7XG4gIEF4ZXMsXG4gIEF4aXMsXG4gIFBvaW50LFxuICBQb3NpdGlvbixcbiAgUmVjdGFuZ2xlLFxuICBleGNlZWRzRGlzdGFuY2Vcbn07XG4iLAogICAgImltcG9ydCB7IHNpZ25hbCwgdW50cmFja2VkLCBlZmZlY3QsIGJhdGNoLCBlZmZlY3RzLCByZWFjdGl2ZSwgZGVyaXZlZCwgVmFsdWVIaXN0b3J5LCBzbmFwc2hvdCB9IGZyb20gJ0BkbmQta2l0L3N0YXRlJztcbmltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSAnQGRuZC1raXQvZ2VvbWV0cnknO1xuXG52YXIgX19jcmVhdGUgPSBPYmplY3QuY3JlYXRlO1xudmFyIF9fZGVmUHJvcCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX2RlZlByb3BzID0gT2JqZWN0LmRlZmluZVByb3BlcnRpZXM7XG52YXIgX19nZXRPd25Qcm9wRGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgX19nZXRPd25Qcm9wRGVzY3MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycztcbnZhciBfX2dldE93blByb3BTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBfX2hhc093blByb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIF9fcHJvcElzRW51bSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG52YXIgX19rbm93blN5bWJvbCA9IChuYW1lLCBzeW1ib2wpID0+IChzeW1ib2wgPSBTeW1ib2xbbmFtZV0pID8gc3ltYm9sIDogU3ltYm9sLmZvcihcIlN5bWJvbC5cIiArIG5hbWUpO1xudmFyIF9fdHlwZUVycm9yID0gKG1zZykgPT4ge1xuICB0aHJvdyBUeXBlRXJyb3IobXNnKTtcbn07XG52YXIgX19kZWZOb3JtYWxQcm9wID0gKG9iaiwga2V5LCB2YWx1ZSkgPT4ga2V5IGluIG9iaiA/IF9fZGVmUHJvcChvYmosIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlLCB2YWx1ZSB9KSA6IG9ialtrZXldID0gdmFsdWU7XG52YXIgX19zcHJlYWRWYWx1ZXMgPSAoYSwgYikgPT4ge1xuICBmb3IgKHZhciBwcm9wIGluIGIgfHwgKGIgPSB7fSkpXG4gICAgaWYgKF9faGFzT3duUHJvcC5jYWxsKGIsIHByb3ApKVxuICAgICAgX19kZWZOb3JtYWxQcm9wKGEsIHByb3AsIGJbcHJvcF0pO1xuICBpZiAoX19nZXRPd25Qcm9wU3ltYm9scylcbiAgICBmb3IgKHZhciBwcm9wIG9mIF9fZ2V0T3duUHJvcFN5bWJvbHMoYikpIHtcbiAgICAgIGlmIChfX3Byb3BJc0VudW0uY2FsbChiLCBwcm9wKSlcbiAgICAgICAgX19kZWZOb3JtYWxQcm9wKGEsIHByb3AsIGJbcHJvcF0pO1xuICAgIH1cbiAgcmV0dXJuIGE7XG59O1xudmFyIF9fc3ByZWFkUHJvcHMgPSAoYSwgYikgPT4gX19kZWZQcm9wcyhhLCBfX2dldE93blByb3BEZXNjcyhiKSk7XG52YXIgX19uYW1lID0gKHRhcmdldCwgdmFsdWUpID0+IF9fZGVmUHJvcCh0YXJnZXQsIFwibmFtZVwiLCB7IHZhbHVlLCBjb25maWd1cmFibGU6IHRydWUgfSk7XG52YXIgX19vYmpSZXN0ID0gKHNvdXJjZSwgZXhjbHVkZSkgPT4ge1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIGZvciAodmFyIHByb3AgaW4gc291cmNlKVxuICAgIGlmIChfX2hhc093blByb3AuY2FsbChzb3VyY2UsIHByb3ApICYmIGV4Y2x1ZGUuaW5kZXhPZihwcm9wKSA8IDApXG4gICAgICB0YXJnZXRbcHJvcF0gPSBzb3VyY2VbcHJvcF07XG4gIGlmIChzb3VyY2UgIT0gbnVsbCAmJiBfX2dldE93blByb3BTeW1ib2xzKVxuICAgIGZvciAodmFyIHByb3Agb2YgX19nZXRPd25Qcm9wU3ltYm9scyhzb3VyY2UpKSB7XG4gICAgICBpZiAoZXhjbHVkZS5pbmRleE9mKHByb3ApIDwgMCAmJiBfX3Byb3BJc0VudW0uY2FsbChzb3VyY2UsIHByb3ApKVxuICAgICAgICB0YXJnZXRbcHJvcF0gPSBzb3VyY2VbcHJvcF07XG4gICAgfVxuICByZXR1cm4gdGFyZ2V0O1xufTtcbnZhciBfX2RlY29yYXRvclN0YXJ0ID0gKGJhc2UpID0+IHtcbiAgdmFyIF9hO1xuICByZXR1cm4gWywgLCAsIF9fY3JlYXRlKChfYSA9IGJhc2UgPT0gbnVsbCA/IHZvaWQgMCA6IGJhc2VbX19rbm93blN5bWJvbChcIm1ldGFkYXRhXCIpXSkgIT0gbnVsbCA/IF9hIDogbnVsbCldO1xufTtcbnZhciBfX2RlY29yYXRvclN0cmluZ3MgPSBbXCJjbGFzc1wiLCBcIm1ldGhvZFwiLCBcImdldHRlclwiLCBcInNldHRlclwiLCBcImFjY2Vzc29yXCIsIFwiZmllbGRcIiwgXCJ2YWx1ZVwiLCBcImdldFwiLCBcInNldFwiXTtcbnZhciBfX2V4cGVjdEZuID0gKGZuKSA9PiBmbiAhPT0gdm9pZCAwICYmIHR5cGVvZiBmbiAhPT0gXCJmdW5jdGlvblwiID8gX190eXBlRXJyb3IoXCJGdW5jdGlvbiBleHBlY3RlZFwiKSA6IGZuO1xudmFyIF9fZGVjb3JhdG9yQ29udGV4dCA9IChraW5kLCBuYW1lLCBkb25lLCBtZXRhZGF0YSwgZm5zKSA9PiAoeyBraW5kOiBfX2RlY29yYXRvclN0cmluZ3Nba2luZF0sIG5hbWUsIG1ldGFkYXRhLCBhZGRJbml0aWFsaXplcjogKGZuKSA9PiBkb25lLl8gPyBfX3R5cGVFcnJvcihcIkFscmVhZHkgaW5pdGlhbGl6ZWRcIikgOiBmbnMucHVzaChfX2V4cGVjdEZuKGZuIHx8IG51bGwpKSB9KTtcbnZhciBfX2RlY29yYXRvck1ldGFkYXRhID0gKGFycmF5LCB0YXJnZXQpID0+IF9fZGVmTm9ybWFsUHJvcCh0YXJnZXQsIF9fa25vd25TeW1ib2woXCJtZXRhZGF0YVwiKSwgYXJyYXlbM10pO1xudmFyIF9fcnVuSW5pdGlhbGl6ZXJzID0gKGFycmF5LCBmbGFncywgc2VsZiwgdmFsdWUpID0+IHtcbiAgZm9yICh2YXIgaSA9IDAsIGZucyA9IGFycmF5W2ZsYWdzID4+IDFdLCBuID0gZm5zICYmIGZucy5sZW5ndGg7IGkgPCBuOyBpKyspIGZsYWdzICYgMSA/IGZuc1tpXS5jYWxsKHNlbGYpIDogdmFsdWUgPSBmbnNbaV0uY2FsbChzZWxmLCB2YWx1ZSk7XG4gIHJldHVybiB2YWx1ZTtcbn07XG52YXIgX19kZWNvcmF0ZUVsZW1lbnQgPSAoYXJyYXksIGZsYWdzLCBuYW1lLCBkZWNvcmF0b3JzLCB0YXJnZXQsIGV4dHJhKSA9PiB7XG4gIHZhciBmbiwgaXQsIGRvbmUsIGN0eCwgYWNjZXNzLCBrID0gZmxhZ3MgJiA3LCBzID0gISEoZmxhZ3MgJiA4KSwgcCA9ICEhKGZsYWdzICYgMTYpO1xuICB2YXIgaiA9IGsgPiAzID8gYXJyYXkubGVuZ3RoICsgMSA6IGsgPyBzID8gMSA6IDIgOiAwLCBrZXkgPSBfX2RlY29yYXRvclN0cmluZ3NbayArIDVdO1xuICB2YXIgaW5pdGlhbGl6ZXJzID0gayA+IDMgJiYgKGFycmF5W2ogLSAxXSA9IFtdKSwgZXh0cmFJbml0aWFsaXplcnMgPSBhcnJheVtqXSB8fCAoYXJyYXlbal0gPSBbXSk7XG4gIHZhciBkZXNjID0gayAmJiAoIXAgJiYgIXMgJiYgKHRhcmdldCA9IHRhcmdldC5wcm90b3R5cGUpLCBrIDwgNSAmJiAoayA+IDMgfHwgIXApICYmIF9fZ2V0T3duUHJvcERlc2MoayA8IDQgPyB0YXJnZXQgOiB7IGdldCBbbmFtZV0oKSB7XG4gICAgcmV0dXJuIF9fcHJpdmF0ZUdldCh0aGlzLCBleHRyYSk7XG4gIH0sIHNldCBbbmFtZV0oeCkge1xuICAgIHJldHVybiBfX3ByaXZhdGVTZXQodGhpcywgZXh0cmEsIHgpO1xuICB9IH0sIG5hbWUpKTtcbiAgayA/IHAgJiYgayA8IDQgJiYgX19uYW1lKGV4dHJhLCAoayA+IDIgPyBcInNldCBcIiA6IGsgPiAxID8gXCJnZXQgXCIgOiBcIlwiKSArIG5hbWUpIDogX19uYW1lKHRhcmdldCwgbmFtZSk7XG4gIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgY3R4ID0gX19kZWNvcmF0b3JDb250ZXh0KGssIG5hbWUsIGRvbmUgPSB7fSwgYXJyYXlbM10sIGV4dHJhSW5pdGlhbGl6ZXJzKTtcbiAgICBpZiAoaykge1xuICAgICAgY3R4LnN0YXRpYyA9IHMsIGN0eC5wcml2YXRlID0gcCwgYWNjZXNzID0gY3R4LmFjY2VzcyA9IHsgaGFzOiBwID8gKHgpID0+IF9fcHJpdmF0ZUluKHRhcmdldCwgeCkgOiAoeCkgPT4gbmFtZSBpbiB4IH07XG4gICAgICBpZiAoayBeIDMpIGFjY2Vzcy5nZXQgPSBwID8gKHgpID0+IChrIF4gMSA/IF9fcHJpdmF0ZUdldCA6IF9fcHJpdmF0ZU1ldGhvZCkoeCwgdGFyZ2V0LCBrIF4gNCA/IGV4dHJhIDogZGVzYy5nZXQpIDogKHgpID0+IHhbbmFtZV07XG4gICAgICBpZiAoayA+IDIpIGFjY2Vzcy5zZXQgPSBwID8gKHgsIHkpID0+IF9fcHJpdmF0ZVNldCh4LCB0YXJnZXQsIHksIGsgXiA0ID8gZXh0cmEgOiBkZXNjLnNldCkgOiAoeCwgeSkgPT4geFtuYW1lXSA9IHk7XG4gICAgfVxuICAgIGl0ID0gKDAsIGRlY29yYXRvcnNbaV0pKGsgPyBrIDwgNCA/IHAgPyBleHRyYSA6IGRlc2Nba2V5XSA6IGsgPiA0ID8gdm9pZCAwIDogeyBnZXQ6IGRlc2MuZ2V0LCBzZXQ6IGRlc2Muc2V0IH0gOiB0YXJnZXQsIGN0eCksIGRvbmUuXyA9IDE7XG4gICAgaWYgKGsgXiA0IHx8IGl0ID09PSB2b2lkIDApIF9fZXhwZWN0Rm4oaXQpICYmIChrID4gNCA/IGluaXRpYWxpemVycy51bnNoaWZ0KGl0KSA6IGsgPyBwID8gZXh0cmEgPSBpdCA6IGRlc2Nba2V5XSA9IGl0IDogdGFyZ2V0ID0gaXQpO1xuICAgIGVsc2UgaWYgKHR5cGVvZiBpdCAhPT0gXCJvYmplY3RcIiB8fCBpdCA9PT0gbnVsbCkgX190eXBlRXJyb3IoXCJPYmplY3QgZXhwZWN0ZWRcIik7XG4gICAgZWxzZSBfX2V4cGVjdEZuKGZuID0gaXQuZ2V0KSAmJiAoZGVzYy5nZXQgPSBmbiksIF9fZXhwZWN0Rm4oZm4gPSBpdC5zZXQpICYmIChkZXNjLnNldCA9IGZuKSwgX19leHBlY3RGbihmbiA9IGl0LmluaXQpICYmIGluaXRpYWxpemVycy51bnNoaWZ0KGZuKTtcbiAgfVxuICByZXR1cm4gayB8fCBfX2RlY29yYXRvck1ldGFkYXRhKGFycmF5LCB0YXJnZXQpLCBkZXNjICYmIF9fZGVmUHJvcCh0YXJnZXQsIG5hbWUsIGRlc2MpLCBwID8gayBeIDQgPyBleHRyYSA6IGRlc2MgOiB0YXJnZXQ7XG59O1xudmFyIF9fYWNjZXNzQ2hlY2sgPSAob2JqLCBtZW1iZXIsIG1zZykgPT4gbWVtYmVyLmhhcyhvYmopIHx8IF9fdHlwZUVycm9yKFwiQ2Fubm90IFwiICsgbXNnKTtcbnZhciBfX3ByaXZhdGVJbiA9IChtZW1iZXIsIG9iaikgPT4gT2JqZWN0KG9iaikgIT09IG9iaiA/IF9fdHlwZUVycm9yKCdDYW5ub3QgdXNlIHRoZSBcImluXCIgb3BlcmF0b3Igb24gdGhpcyB2YWx1ZScpIDogbWVtYmVyLmhhcyhvYmopO1xudmFyIF9fcHJpdmF0ZUdldCA9IChvYmosIG1lbWJlciwgZ2V0dGVyKSA9PiAoX19hY2Nlc3NDaGVjayhvYmosIG1lbWJlciwgXCJyZWFkIGZyb20gcHJpdmF0ZSBmaWVsZFwiKSwgZ2V0dGVyID8gZ2V0dGVyLmNhbGwob2JqKSA6IG1lbWJlci5nZXQob2JqKSk7XG52YXIgX19wcml2YXRlQWRkID0gKG9iaiwgbWVtYmVyLCB2YWx1ZSkgPT4gbWVtYmVyLmhhcyhvYmopID8gX190eXBlRXJyb3IoXCJDYW5ub3QgYWRkIHRoZSBzYW1lIHByaXZhdGUgbWVtYmVyIG1vcmUgdGhhbiBvbmNlXCIpIDogbWVtYmVyIGluc3RhbmNlb2YgV2Vha1NldCA/IG1lbWJlci5hZGQob2JqKSA6IG1lbWJlci5zZXQob2JqLCB2YWx1ZSk7XG52YXIgX19wcml2YXRlU2V0ID0gKG9iaiwgbWVtYmVyLCB2YWx1ZSwgc2V0dGVyKSA9PiAoX19hY2Nlc3NDaGVjayhvYmosIG1lbWJlciwgXCJ3cml0ZSB0byBwcml2YXRlIGZpZWxkXCIpLCBzZXR0ZXIgPyBzZXR0ZXIuY2FsbChvYmosIHZhbHVlKSA6IG1lbWJlci5zZXQob2JqLCB2YWx1ZSksIHZhbHVlKTtcbnZhciBfX3ByaXZhdGVNZXRob2QgPSAob2JqLCBtZW1iZXIsIG1ldGhvZCkgPT4gKF9fYWNjZXNzQ2hlY2sob2JqLCBtZW1iZXIsIFwiYWNjZXNzIHByaXZhdGUgbWV0aG9kXCIpLCBtZXRob2QpO1xuXG4vLyBzcmMvY29yZS9wbHVnaW5zL3V0aWxpdGllcy50c1xuZnVuY3Rpb24gY29uZmlndXJlKHBsdWdpbiwgb3B0aW9ucykge1xuICByZXR1cm4ge1xuICAgIHBsdWdpbixcbiAgICBvcHRpb25zXG4gIH07XG59XG5mdW5jdGlvbiBjb25maWd1cmF0b3IocGx1Z2luKSB7XG4gIHJldHVybiAob3B0aW9ucykgPT4ge1xuICAgIHJldHVybiBjb25maWd1cmUocGx1Z2luLCBvcHRpb25zKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGRlc2NyaXB0b3IocGx1Z2luKSB7XG4gIGlmICh0eXBlb2YgcGx1Z2luID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGx1Z2luLFxuICAgICAgb3B0aW9uczogdm9pZCAwXG4gICAgfTtcbiAgfVxuICByZXR1cm4gcGx1Z2luO1xufVxuXG4vLyBzcmMvY29yZS9wbHVnaW5zL3BsdWdpbi50c1xudmFyIF9kaXNhYmxlZF9kZWMsIF9pbml0LCBfZGlzYWJsZWQsIF9jbGVhbnVwRnVuY3Rpb25zO1xuX2Rpc2FibGVkX2RlYyA9IFtyZWFjdGl2ZV07XG52YXIgUGx1Z2luID0gY2xhc3Mge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBwbHVnaW4gaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwYXJhbSBtYW5hZ2VyIC0gVGhlIGRyYWcgYW5kIGRyb3AgbWFuYWdlciB0aGF0IG93bnMgdGhpcyBwbHVnaW5cbiAgICogQHBhcmFtIG9wdGlvbnMgLSBPcHRpb25hbCBjb25maWd1cmF0aW9uIGZvciB0aGUgcGx1Z2luXG4gICAqL1xuICBjb25zdHJ1Y3RvcihtYW5hZ2VyLCBvcHRpb25zKSB7XG4gICAgdGhpcy5tYW5hZ2VyID0gbWFuYWdlcjtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIF9fcHJpdmF0ZUFkZCh0aGlzLCBfZGlzYWJsZWQsIF9fcnVuSW5pdGlhbGl6ZXJzKF9pbml0LCA4LCB0aGlzLCBmYWxzZSkpLCBfX3J1bkluaXRpYWxpemVycyhfaW5pdCwgMTEsIHRoaXMpO1xuICAgIF9fcHJpdmF0ZUFkZCh0aGlzLCBfY2xlYW51cEZ1bmN0aW9ucywgLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKSk7XG4gIH1cbiAgLyoqXG4gICAqIEVuYWJsZXMgYSBkaXNhYmxlZCBwbHVnaW4gaW5zdGFuY2UuXG4gICAqXG4gICAqIEByZW1hcmtzXG4gICAqIFRoaXMgbWV0aG9kIHRyaWdnZXJzIGVmZmVjdHMgd2hlbiBjYWxsZWQuXG4gICAqL1xuICBlbmFibGUoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICB9XG4gIC8qKlxuICAgKiBEaXNhYmxlcyBhbiBlbmFibGVkIHBsdWdpbiBpbnN0YW5jZS5cbiAgICpcbiAgICogQHJlbWFya3NcbiAgICogVGhpcyBtZXRob2QgdHJpZ2dlcnMgZWZmZWN0cyB3aGVuIGNhbGxlZC5cbiAgICovXG4gIGRpc2FibGUoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gIH1cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgcGx1Z2luIGluc3RhbmNlIGlzIGRpc2FibGVkLlxuICAgKlxuICAgKiBAcmV0dXJucyB0cnVlIGlmIHRoZSBwbHVnaW4gaXMgZGlzYWJsZWRcbiAgICogQHJlbWFya3NcbiAgICogVGhpcyBtZXRob2QgZG9lcyBub3QgdHJpZ2dlciBlZmZlY3RzIHdoZW4gYWNjZXNzZWQuXG4gICAqL1xuICBpc0Rpc2FibGVkKCkge1xuICAgIHJldHVybiB1bnRyYWNrZWQoKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQ7XG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIENvbmZpZ3VyZXMgYSBwbHVnaW4gaW5zdGFuY2Ugd2l0aCBuZXcgb3B0aW9ucy5cbiAgICpcbiAgICogQHBhcmFtIG9wdGlvbnMgLSBUaGUgbmV3IG9wdGlvbnMgdG8gYXBwbHlcbiAgICovXG4gIGNvbmZpZ3VyZShvcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuICAvKipcbiAgICogUmVnaXN0ZXJzIGFuIGVmZmVjdCB0aGF0IHdpbGwgYmUgY2xlYW5lZCB1cCB3aGVuIHRoZSBwbHVnaW4gaXMgZGVzdHJveWVkLlxuICAgKlxuICAgKiBAcGFyYW0gY2FsbGJhY2sgLSBUaGUgZWZmZWN0IGNhbGxiYWNrIHRvIHJlZ2lzdGVyXG4gICAqIEByZXR1cm5zIEEgZnVuY3Rpb24gdG8gZGlzcG9zZSBvZiB0aGUgZWZmZWN0XG4gICAqL1xuICByZWdpc3RlckVmZmVjdChjYWxsYmFjaykge1xuICAgIGNvbnN0IGRpc3Bvc2UgPSBlZmZlY3QoY2FsbGJhY2suYmluZCh0aGlzKSk7XG4gICAgX19wcml2YXRlR2V0KHRoaXMsIF9jbGVhbnVwRnVuY3Rpb25zKS5hZGQoZGlzcG9zZSk7XG4gICAgcmV0dXJuIGRpc3Bvc2U7XG4gIH1cbiAgLyoqXG4gICAqIERlc3Ryb3lzIGEgcGx1Z2luIGluc3RhbmNlIGFuZCBjbGVhbnMgdXAgaXRzIHJlc291cmNlcy5cbiAgICpcbiAgICogQHJlbWFya3NcbiAgICogVGhpcyBtZXRob2Q6XG4gICAqIC0gQ2FsbHMgYWxsIHJlZ2lzdGVyZWQgY2xlYW51cCBmdW5jdGlvbnNcbiAgICogLSBTaG91bGQgYmUgb3ZlcnJpZGRlbiBieSBzdWJjbGFzc2VzIHRvIGNsZWFuIHVwIGFkZGl0aW9uYWwgcmVzb3VyY2VzXG4gICAqL1xuICBkZXN0cm95KCkge1xuICAgIF9fcHJpdmF0ZUdldCh0aGlzLCBfY2xlYW51cEZ1bmN0aW9ucykuZm9yRWFjaCgoY2xlYW51cCkgPT4gY2xlYW51cCgpKTtcbiAgfVxuICAvKipcbiAgICogQ29uZmlndXJlcyBhIHBsdWdpbiBjb25zdHJ1Y3RvciB3aXRoIG9wdGlvbnMuXG4gICAqXG4gICAqIEBwYXJhbSBvcHRpb25zIC0gVGhlIG9wdGlvbnMgdG8gY29uZmlndXJlIHRoZSBjb25zdHJ1Y3RvciB3aXRoXG4gICAqIEByZXR1cm5zIFRoZSBjb25maWd1cmVkIHBsdWdpbiBjb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcmVtYXJrc1xuICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIGNvbmZpZ3VyZSB0aGUgb3B0aW9ucyB0aGF0IHRoZVxuICAgKiBwbHVnaW4gY29uc3RydWN0b3Igd2lsbCB1c2UgdG8gY3JlYXRlIHBsdWdpbiBpbnN0YW5jZXMuXG4gICAqL1xuICBzdGF0aWMgY29uZmlndXJlKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gY29uZmlndXJlKHRoaXMsIG9wdGlvbnMpO1xuICB9XG59O1xuX2luaXQgPSBfX2RlY29yYXRvclN0YXJ0KG51bGwpO1xuX2Rpc2FibGVkID0gbmV3IFdlYWtNYXAoKTtcbl9jbGVhbnVwRnVuY3Rpb25zID0gbmV3IFdlYWtNYXAoKTtcbl9fZGVjb3JhdGVFbGVtZW50KF9pbml0LCA0LCBcImRpc2FibGVkXCIsIF9kaXNhYmxlZF9kZWMsIFBsdWdpbiwgX2Rpc2FibGVkKTtcbl9fZGVjb3JhdG9yTWV0YWRhdGEoX2luaXQsIFBsdWdpbik7XG52YXIgQ29yZVBsdWdpbiA9IGNsYXNzIGV4dGVuZHMgUGx1Z2luIHtcbn07XG5cbi8vIHNyYy9jb3JlL3BsdWdpbnMvcmVnaXN0cnkudHNcbnZhciBfcHJldmlvdXNWYWx1ZXM7XG52YXIgUGx1Z2luUmVnaXN0cnkgPSBjbGFzcyB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IHBsdWdpbiByZWdpc3RyeS5cbiAgICpcbiAgICogQHBhcmFtIG1hbmFnZXIgLSBUaGUgZHJhZyBhbmQgZHJvcCBtYW5hZ2VyIHRoYXQgb3ducyB0aGlzIHJlZ2lzdHJ5XG4gICAqL1xuICBjb25zdHJ1Y3RvcihtYW5hZ2VyKSB7XG4gICAgdGhpcy5tYW5hZ2VyID0gbWFuYWdlcjtcbiAgICB0aGlzLmluc3RhbmNlcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG4gICAgX19wcml2YXRlQWRkKHRoaXMsIF9wcmV2aW91c1ZhbHVlcywgW10pO1xuICB9XG4gIC8qKlxuICAgKiBHZXRzIGFsbCByZWdpc3RlcmVkIHBsdWdpbiBpbnN0YW5jZXMuXG4gICAqXG4gICAqIEByZXR1cm5zIEFuIGFycmF5IG9mIGFsbCBhY3RpdmUgcGx1Z2luIGluc3RhbmNlc1xuICAgKi9cbiAgZ2V0IHZhbHVlcygpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmluc3RhbmNlcy52YWx1ZXMoKSk7XG4gIH1cbiAgLyoqXG4gICAqIFNldHMgdGhlIGxpc3Qgb2YgcGx1Z2lucyB0byBiZSB1c2VkIGJ5IHRoZSByZWdpc3RyeS5cbiAgICpcbiAgICogQHBhcmFtIGVudHJpZXMgLSBBcnJheSBvZiBwbHVnaW4gY29uc3RydWN0b3JzIG9yIGRlc2NyaXB0b3JzXG4gICAqIEByZW1hcmtzXG4gICAqIFRoaXMgbWV0aG9kOlxuICAgKiAtIEZpbHRlcnMgb3V0IGR1cGxpY2F0ZSBwbHVnaW5zXG4gICAqIC0gVW5yZWdpc3RlcnMgcGx1Z2lucyB0aGF0IGFyZSBubyBsb25nZXIgaW4gdXNlXG4gICAqIC0gUmVnaXN0ZXJzIG5ldyBwbHVnaW5zIHdpdGggdGhlaXIgb3B0aW9uc1xuICAgKi9cbiAgc2V0IHZhbHVlcyhlbnRyaWVzKSB7XG4gICAgY29uc3QgZGVzY3JpcHRvcnMgPSBlbnRyaWVzLm1hcChkZXNjcmlwdG9yKS5yZWR1Y2UoKGFjYywgZGVzY3JpcHRvcjIpID0+IHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nID0gYWNjLmZpbmQoKHsgcGx1Z2luIH0pID0+IHBsdWdpbiA9PT0gZGVzY3JpcHRvcjIucGx1Z2luKTtcbiAgICAgIGlmIChleGlzdGluZykge1xuICAgICAgICBleGlzdGluZy5vcHRpb25zID0gZGVzY3JpcHRvcjIub3B0aW9ucztcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH1cbiAgICAgIHJldHVybiBbLi4uYWNjLCBkZXNjcmlwdG9yMl07XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IGNvbnN0cnVjdG9ycyA9IGRlc2NyaXB0b3JzLm1hcCgoeyBwbHVnaW4gfSkgPT4gcGx1Z2luKTtcbiAgICBmb3IgKGNvbnN0IHBsdWdpbiBvZiBfX3ByaXZhdGVHZXQodGhpcywgX3ByZXZpb3VzVmFsdWVzKSkge1xuICAgICAgaWYgKCFjb25zdHJ1Y3RvcnMuaW5jbHVkZXMocGx1Z2luKSkge1xuICAgICAgICBpZiAocGx1Z2luLnByb3RvdHlwZSBpbnN0YW5jZW9mIENvcmVQbHVnaW4pIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVucmVnaXN0ZXIocGx1Z2luKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChjb25zdCB7IHBsdWdpbiwgb3B0aW9ucyB9IG9mIGRlc2NyaXB0b3JzKSB7XG4gICAgICB0aGlzLnJlZ2lzdGVyKHBsdWdpbiwgb3B0aW9ucyk7XG4gICAgfVxuICAgIF9fcHJpdmF0ZVNldCh0aGlzLCBfcHJldmlvdXNWYWx1ZXMsIGNvbnN0cnVjdG9ycyk7XG4gIH1cbiAgLyoqXG4gICAqIEdldHMgYSBwbHVnaW4gaW5zdGFuY2UgYnkgaXRzIGNvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAcGFyYW0gcGx1Z2luIC0gVGhlIHBsdWdpbiBjb25zdHJ1Y3RvciB0byBsb29rIHVwXG4gICAqIEByZXR1cm5zIFRoZSBwbHVnaW4gaW5zdGFuY2Ugb3IgdW5kZWZpbmVkIGlmIG5vdCBmb3VuZFxuICAgKi9cbiAgZ2V0KHBsdWdpbikge1xuICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5pbnN0YW5jZXMuZ2V0KHBsdWdpbik7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSBuZXcgcGx1Z2luIGluc3RhbmNlLlxuICAgKlxuICAgKiBAcGFyYW0gcGx1Z2luIC0gVGhlIHBsdWdpbiBjb25zdHJ1Y3RvciB0byByZWdpc3RlclxuICAgKiBAcGFyYW0gb3B0aW9ucyAtIE9wdGlvbmFsIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBwbHVnaW5cbiAgICogQHJldHVybnMgVGhlIHJlZ2lzdGVyZWQgcGx1Z2luIGluc3RhbmNlXG4gICAqIEByZW1hcmtzXG4gICAqIElmIHRoZSBwbHVnaW4gaXMgYWxyZWFkeSByZWdpc3RlcmVkLCBpdHMgb3B0aW9ucyB3aWxsIGJlIHVwZGF0ZWRcbiAgICogYW5kIHRoZSBleGlzdGluZyBpbnN0YW5jZSB3aWxsIGJlIHJldHVybmVkLlxuICAgKi9cbiAgcmVnaXN0ZXIocGx1Z2luLCBvcHRpb25zKSB7XG4gICAgY29uc3QgZXhpc3RpbmdJbnN0YW5jZSA9IHRoaXMuaW5zdGFuY2VzLmdldChwbHVnaW4pO1xuICAgIGlmIChleGlzdGluZ0luc3RhbmNlKSB7XG4gICAgICBpZiAoZXhpc3RpbmdJbnN0YW5jZS5vcHRpb25zICE9PSBvcHRpb25zKSB7XG4gICAgICAgIGV4aXN0aW5nSW5zdGFuY2Uub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICB9XG4gICAgICByZXR1cm4gZXhpc3RpbmdJbnN0YW5jZTtcbiAgICB9XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgcGx1Z2luKHRoaXMubWFuYWdlciwgb3B0aW9ucyk7XG4gICAgdGhpcy5pbnN0YW5jZXMuc2V0KHBsdWdpbiwgaW5zdGFuY2UpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuICAvKipcbiAgICogVW5yZWdpc3RlcnMgYSBwbHVnaW4gaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwYXJhbSBwbHVnaW4gLSBUaGUgcGx1Z2luIGNvbnN0cnVjdG9yIHRvIHVucmVnaXN0ZXJcbiAgICogQHJlbWFya3NcbiAgICogVGhpcyBtZXRob2Q6XG4gICAqIC0gRGVzdHJveXMgdGhlIHBsdWdpbiBpbnN0YW5jZVxuICAgKiAtIFJlbW92ZXMgaXQgZnJvbSB0aGUgcmVnaXN0cnlcbiAgICovXG4gIHVucmVnaXN0ZXIocGx1Z2luKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlcy5nZXQocGx1Z2luKTtcbiAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgIGluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuaW5zdGFuY2VzLmRlbGV0ZShwbHVnaW4pO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogRGVzdHJveXMgYWxsIHJlZ2lzdGVyZWQgcGx1Z2luIGluc3RhbmNlcy5cbiAgICpcbiAgICogQHJlbWFya3NcbiAgICogVGhpcyBtZXRob2Q6XG4gICAqIC0gQ2FsbHMgZGVzdHJveSgpIG9uIGFsbCBwbHVnaW4gaW5zdGFuY2VzXG4gICAqIC0gQ2xlYXJzIHRoZSByZWdpc3RyeVxuICAgKi9cbiAgZGVzdHJveSgpIHtcbiAgICBmb3IgKGNvbnN0IHBsdWdpbiBvZiB0aGlzLmluc3RhbmNlcy52YWx1ZXMoKSkge1xuICAgICAgcGx1Z2luLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgdGhpcy5pbnN0YW5jZXMuY2xlYXIoKTtcbiAgfVxufTtcbl9wcmV2aW91c1ZhbHVlcyA9IG5ldyBXZWFrTWFwKCk7XG5cbi8vIHNyYy9jb3JlL2NvbGxpc2lvbi91dGlsaXRpZXMudHNcbmZ1bmN0aW9uIHNvcnRDb2xsaXNpb25zKGEsIGIpIHtcbiAgaWYgKGEucHJpb3JpdHkgPT09IGIucHJpb3JpdHkpIHtcbiAgICBpZiAoYS50eXBlID09PSBiLnR5cGUpIHtcbiAgICAgIHJldHVybiBiLnZhbHVlIC0gYS52YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGIudHlwZSAtIGEudHlwZTtcbiAgfVxuICByZXR1cm4gYi5wcmlvcml0eSAtIGEucHJpb3JpdHk7XG59XG5cbi8vIHNyYy9jb3JlL2NvbGxpc2lvbi9vYnNlcnZlci50c1xudmFyIERFRkFVTFRfVkFMVUUgPSBbXTtcbnZhciBfcHJldmlvdXNDb29yZGluYXRlcywgX2NvbGxpc2lvbnM7XG52YXIgQ29sbGlzaW9uT2JzZXJ2ZXIgPSBjbGFzcyBleHRlbmRzIFBsdWdpbiB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IENvbGxpc2lvbk9ic2VydmVyIGluc3RhbmNlLlxuICAgKlxuICAgKiBAcGFyYW0gbWFuYWdlciAtIFRoZSBkcmFnIGRyb3AgbWFuYWdlciBpbnN0YW5jZVxuICAgKi9cbiAgY29uc3RydWN0b3IobWFuYWdlcikge1xuICAgIHN1cGVyKG1hbmFnZXIpO1xuICAgIF9fcHJpdmF0ZUFkZCh0aGlzLCBfcHJldmlvdXNDb29yZGluYXRlcyk7XG4gICAgX19wcml2YXRlQWRkKHRoaXMsIF9jb2xsaXNpb25zKTtcbiAgICB0aGlzLmNvbXB1dGVDb2xsaXNpb25zID0gdGhpcy5jb21wdXRlQ29sbGlzaW9ucy5iaW5kKHRoaXMpO1xuICAgIF9fcHJpdmF0ZVNldCh0aGlzLCBfY29sbGlzaW9ucywgc2lnbmFsKERFRkFVTFRfVkFMVUUpKTtcbiAgICB0aGlzLmRlc3Ryb3kgPSBlZmZlY3RzKFxuICAgICAgKCkgPT4ge1xuICAgICAgICBjb25zdCBjb2xsaXNpb25zID0gdGhpcy5jb21wdXRlQ29sbGlzaW9ucygpO1xuICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IHVudHJhY2tlZChcbiAgICAgICAgICAoKSA9PiB0aGlzLm1hbmFnZXIuZHJhZ09wZXJhdGlvbi5wb3NpdGlvbi5jdXJyZW50XG4gICAgICAgICk7XG4gICAgICAgIGlmIChjb2xsaXNpb25zICE9PSBERUZBVUxUX1ZBTFVFKSB7XG4gICAgICAgICAgY29uc3QgcHJldmlvdXNDb29yZGluYXRlcyA9IF9fcHJpdmF0ZUdldCh0aGlzLCBfcHJldmlvdXNDb29yZGluYXRlcyk7XG4gICAgICAgICAgX19wcml2YXRlU2V0KHRoaXMsIF9wcmV2aW91c0Nvb3JkaW5hdGVzLCBjb29yZGluYXRlcyk7XG4gICAgICAgICAgaWYgKHByZXZpb3VzQ29vcmRpbmF0ZXMgJiYgY29vcmRpbmF0ZXMueCA9PSBwcmV2aW91c0Nvb3JkaW5hdGVzLnggJiYgY29vcmRpbmF0ZXMueSA9PSBwcmV2aW91c0Nvb3JkaW5hdGVzLnkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX19wcml2YXRlU2V0KHRoaXMsIF9wcmV2aW91c0Nvb3JkaW5hdGVzLCB2b2lkIDApO1xuICAgICAgICB9XG4gICAgICAgIF9fcHJpdmF0ZUdldCh0aGlzLCBfY29sbGlzaW9ucykudmFsdWUgPSBjb2xsaXNpb25zO1xuICAgICAgfSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgY29uc3QgeyBkcmFnT3BlcmF0aW9uIH0gPSB0aGlzLm1hbmFnZXI7XG4gICAgICAgIGlmIChkcmFnT3BlcmF0aW9uLnN0YXR1cy5pbml0aWFsaXplZCkge1xuICAgICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH1cbiAgLyoqXG4gICAqIEZvcmNlcyBhbiBpbW1lZGlhdGUgdXBkYXRlIG9mIGNvbGxpc2lvbiBkZXRlY3Rpb24uXG4gICAqXG4gICAqIEBwYXJhbSBpbW1lZGlhdGUgLSBJZiB0cnVlLCB1cGRhdGVzIGNvbGxpc2lvbnMgaW1tZWRpYXRlbHkuIElmIGZhbHNlLCByZXNldHMgcHJldmlvdXMgY29vcmRpbmF0ZXMuXG4gICAqL1xuICBmb3JjZVVwZGF0ZShpbW1lZGlhdGUgPSB0cnVlKSB7XG4gICAgdW50cmFja2VkKCgpID0+IHtcbiAgICAgIGlmIChpbW1lZGlhdGUpIHtcbiAgICAgICAgX19wcml2YXRlR2V0KHRoaXMsIF9jb2xsaXNpb25zKS52YWx1ZSA9IHRoaXMuY29tcHV0ZUNvbGxpc2lvbnMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF9fcHJpdmF0ZVNldCh0aGlzLCBfcHJldmlvdXNDb29yZGluYXRlcywgdm9pZCAwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogQ29tcHV0ZXMgY29sbGlzaW9ucyBiZXR3ZWVuIGRyYWdnYWJsZSBhbmQgZHJvcHBhYmxlIGVsZW1lbnRzLlxuICAgKlxuICAgKiBAcGFyYW0gZW50cmllcyAtIE9wdGlvbmFsIGFycmF5IG9mIGRyb3BwYWJsZSBlbGVtZW50cyB0byBjaGVjay4gSWYgbm90IHByb3ZpZGVkLCB1c2VzIGFsbCByZWdpc3RlcmVkIGRyb3BwYWJsZXMuXG4gICAqIEBwYXJhbSBjb2xsaXNpb25EZXRlY3RvciAtIE9wdGlvbmFsIGN1c3RvbSBjb2xsaXNpb24gZGV0ZWN0b3IgZnVuY3Rpb25cbiAgICogQHJldHVybnMgQXJyYXkgb2YgZGV0ZWN0ZWQgY29sbGlzaW9ucywgc29ydGVkIGJ5IHByaW9yaXR5XG4gICAqL1xuICBjb21wdXRlQ29sbGlzaW9ucyhlbnRyaWVzLCBjb2xsaXNpb25EZXRlY3Rvcikge1xuICAgIGNvbnN0IHsgcmVnaXN0cnksIGRyYWdPcGVyYXRpb24gfSA9IHRoaXMubWFuYWdlcjtcbiAgICBjb25zdCB7IHNvdXJjZSwgc2hhcGUsIHN0YXR1cyB9ID0gZHJhZ09wZXJhdGlvbjtcbiAgICBpZiAoIXN0YXR1cy5pbml0aWFsaXplZCB8fCAhc2hhcGUpIHtcbiAgICAgIHJldHVybiBERUZBVUxUX1ZBTFVFO1xuICAgIH1cbiAgICBjb25zdCBjb2xsaXNpb25zID0gW107XG4gICAgY29uc3QgcG90ZW50aWFsVGFyZ2V0cyA9IFtdO1xuICAgIGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcyAhPSBudWxsID8gZW50cmllcyA6IHJlZ2lzdHJ5LmRyb3BwYWJsZXMpIHtcbiAgICAgIGlmIChlbnRyeS5kaXNhYmxlZCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmIChzb3VyY2UgJiYgIWVudHJ5LmFjY2VwdHMoc291cmNlKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRldGVjdENvbGxpc2lvbiA9IGNvbGxpc2lvbkRldGVjdG9yICE9IG51bGwgPyBjb2xsaXNpb25EZXRlY3RvciA6IGVudHJ5LmNvbGxpc2lvbkRldGVjdG9yO1xuICAgICAgaWYgKCFkZXRlY3RDb2xsaXNpb24pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBwb3RlbnRpYWxUYXJnZXRzLnB1c2goZW50cnkpO1xuICAgICAgdm9pZCBlbnRyeS5zaGFwZTtcbiAgICAgIGNvbnN0IGNvbGxpc2lvbiA9IHVudHJhY2tlZChcbiAgICAgICAgKCkgPT4gZGV0ZWN0Q29sbGlzaW9uKHtcbiAgICAgICAgICBkcm9wcGFibGU6IGVudHJ5LFxuICAgICAgICAgIGRyYWdPcGVyYXRpb25cbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgICBpZiAoY29sbGlzaW9uKSB7XG4gICAgICAgIGlmIChlbnRyeS5jb2xsaXNpb25Qcmlvcml0eSAhPSBudWxsKSB7XG4gICAgICAgICAgY29sbGlzaW9uLnByaW9yaXR5ID0gZW50cnkuY29sbGlzaW9uUHJpb3JpdHk7XG4gICAgICAgIH1cbiAgICAgICAgY29sbGlzaW9ucy5wdXNoKGNvbGxpc2lvbik7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChwb3RlbnRpYWxUYXJnZXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIERFRkFVTFRfVkFMVUU7XG4gICAgfVxuICAgIGNvbGxpc2lvbnMuc29ydChzb3J0Q29sbGlzaW9ucyk7XG4gICAgcmV0dXJuIGNvbGxpc2lvbnM7XG4gIH1cbiAgLyoqXG4gICAqIEdldHMgdGhlIGN1cnJlbnQgY29sbGlzaW9ucyBzaWduYWwgdmFsdWUuXG4gICAqL1xuICBnZXQgY29sbGlzaW9ucygpIHtcbiAgICByZXR1cm4gX19wcml2YXRlR2V0KHRoaXMsIF9jb2xsaXNpb25zKS52YWx1ZTtcbiAgfVxufTtcbl9wcmV2aW91c0Nvb3JkaW5hdGVzID0gbmV3IFdlYWtNYXAoKTtcbl9jb2xsaXNpb25zID0gbmV3IFdlYWtNYXAoKTtcbnZhciBfZGlzYWJsZWRfZGVjMiwgX2RhdGFfZGVjLCBfbWFuYWdlcl9kZWMsIF9FbnRpdHlfc3RhdGljLCBmbHVzaElkQ2hhbmdlc19mbiwgX2luaXQyLCBfbWFuYWdlciwgX2lkU2lnbmFsLCBfZGF0YSwgX2Rpc2FibGVkMjtcbl9tYW5hZ2VyX2RlYyA9IFtyZWFjdGl2ZV0sIF9kYXRhX2RlYyA9IFtyZWFjdGl2ZV0sIF9kaXNhYmxlZF9kZWMyID0gW3JlYWN0aXZlXTtcbnZhciBfRW50aXR5ID0gY2xhc3MgX0VudGl0eSB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoZSBgRW50aXR5YCBjbGFzcy5cbiAgICpcbiAgICogQHBhcmFtIGlucHV0IC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGluaXRpYWwgcHJvcGVydGllcyBvZiB0aGUgZW50aXR5LlxuICAgKiBAcGFyYW0gbWFuYWdlciAtIFRoZSBtYW5hZ2VyIHRoYXQgY29udHJvbHMgdGhlIGRyYWcgYW5kIGRyb3Agb3BlcmF0aW9ucy5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGlucHV0LCBtYW5hZ2VyKSB7XG4gICAgX19wcml2YXRlQWRkKHRoaXMsIF9tYW5hZ2VyLCBfX3J1bkluaXRpYWxpemVycyhfaW5pdDIsIDgsIHRoaXMpKSwgX19ydW5Jbml0aWFsaXplcnMoX2luaXQyLCAxMSwgdGhpcyk7XG4gICAgLyoqXG4gICAgICogVGhlIHVuaXF1ZSBpZGVudGlmaWVyIG9mIHRoZSBlbnRpdHkuXG4gICAgICpcbiAgICAgKiBTZXR0aW5nIHRoaXMgcHJvcGVydHkgZGVmZXJzIHRoZSBzaWduYWwgdXBkYXRlIHRvIGEgbWljcm90YXNrLFxuICAgICAqIGJhdGNoaW5nIG11bHRpcGxlIGlkIGNoYW5nZXMgdG9nZXRoZXIgYXRvbWljYWxseS4gVGhpcyBlbnN1cmVzXG4gICAgICogdGhhdCB3aGVuIGVudGl0aWVzIHN3YXAgaWRzIChlLmcuIGR1cmluZyBzb3J0aW5nIHdpdGggdmlydHVhbGl6YXRpb24pLFxuICAgICAqIGFsbCByZWdpc3RyeSB1cGRhdGVzIGhhcHBlbiBpbiBhIHNpbmdsZSB0cmFuc2FjdGlvbi5cbiAgICAgKi9cbiAgICBfX3ByaXZhdGVBZGQodGhpcywgX2lkU2lnbmFsKTtcbiAgICBfX3ByaXZhdGVBZGQodGhpcywgX2RhdGEsIF9fcnVuSW5pdGlhbGl6ZXJzKF9pbml0MiwgMTIsIHRoaXMpKSwgX19ydW5Jbml0aWFsaXplcnMoX2luaXQyLCAxNSwgdGhpcyk7XG4gICAgX19wcml2YXRlQWRkKHRoaXMsIF9kaXNhYmxlZDIsIF9fcnVuSW5pdGlhbGl6ZXJzKF9pbml0MiwgMTYsIHRoaXMpKSwgX19ydW5Jbml0aWFsaXplcnMoX2luaXQyLCAxOSwgdGhpcyk7XG4gICAgY29uc3QgeyBlZmZlY3RzOiBlZmZlY3RzNiwgaWQsIGRhdGEgPSB7fSwgZGlzYWJsZWQgPSBmYWxzZSwgcmVnaXN0ZXIgPSB0cnVlIH0gPSBpbnB1dDtcbiAgICBsZXQgcHJldmlvdXNJZCA9IGlkO1xuICAgIF9fcHJpdmF0ZVNldCh0aGlzLCBfaWRTaWduYWwsIHNpZ25hbChpZCkpO1xuICAgIHRoaXMubWFuYWdlciA9IG1hbmFnZXI7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB0aGlzLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgdGhpcy5lZmZlY3RzID0gKCkgPT4ge1xuICAgICAgdmFyIF9hO1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgaWQ6IGlkMiwgbWFuYWdlcjogbWFuYWdlcjIgfSA9IHRoaXM7XG4gICAgICAgICAgaWYgKGlkMiA9PT0gcHJldmlvdXNJZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwcmV2aW91c0lkID0gaWQyO1xuICAgICAgICAgIG1hbmFnZXIyID09IG51bGwgPyB2b2lkIDAgOiBtYW5hZ2VyMi5yZWdpc3RyeS5yZWdpc3Rlcih0aGlzKTtcbiAgICAgICAgICByZXR1cm4gKCkgPT4gbWFuYWdlcjIgPT0gbnVsbCA/IHZvaWQgMCA6IG1hbmFnZXIyLnJlZ2lzdHJ5LnVucmVnaXN0ZXIodGhpcyk7XG4gICAgICAgIH0sXG4gICAgICAgIC4uLihfYSA9IGVmZmVjdHM2ID09IG51bGwgPyB2b2lkIDAgOiBlZmZlY3RzNigpKSAhPSBudWxsID8gX2EgOiBbXVxuICAgICAgXTtcbiAgICB9O1xuICAgIHRoaXMucmVnaXN0ZXIgPSB0aGlzLnJlZ2lzdGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy51bnJlZ2lzdGVyID0gdGhpcy51bnJlZ2lzdGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kZXN0cm95ID0gdGhpcy5kZXN0cm95LmJpbmQodGhpcyk7XG4gICAgaWYgKG1hbmFnZXIgJiYgcmVnaXN0ZXIpIHtcbiAgICAgIHF1ZXVlTWljcm90YXNrKHRoaXMucmVnaXN0ZXIpO1xuICAgIH1cbiAgfVxuICBnZXQgaWQoKSB7XG4gICAgdmFyIF9hLCBfYjtcbiAgICBjb25zdCBzaWduYWxWYWx1ZSA9IF9fcHJpdmF0ZUdldCh0aGlzLCBfaWRTaWduYWwpLnZhbHVlO1xuICAgIHJldHVybiAoX2IgPSAoX2EgPSBfRW50aXR5LnBlbmRpbmdJZENoYW5nZXMpID09IG51bGwgPyB2b2lkIDAgOiBfYS5nZXQodGhpcykpICE9IG51bGwgPyBfYiA6IHNpZ25hbFZhbHVlO1xuICB9XG4gIHNldCBpZCh2YWx1ZSkge1xuICAgIHZhciBfYSwgX2I7XG4gICAgY29uc3QgY3VycmVudCA9IChfYiA9IChfYSA9IF9FbnRpdHkucGVuZGluZ0lkQ2hhbmdlcykgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLmdldCh0aGlzKSkgIT0gbnVsbCA/IF9iIDogX19wcml2YXRlR2V0KHRoaXMsIF9pZFNpZ25hbCkucGVlaygpO1xuICAgIGlmICh2YWx1ZSA9PT0gY3VycmVudCkgcmV0dXJuO1xuICAgIGlmICghX0VudGl0eS5wZW5kaW5nSWRDaGFuZ2VzKSB7XG4gICAgICBfRW50aXR5LnBlbmRpbmdJZENoYW5nZXMgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuICAgICAgcXVldWVNaWNyb3Rhc2soKCkgPT4ge1xuICAgICAgICB2YXIgX2EyO1xuICAgICAgICByZXR1cm4gX19wcml2YXRlTWV0aG9kKF9hMiA9IF9FbnRpdHksIF9FbnRpdHlfc3RhdGljLCBmbHVzaElkQ2hhbmdlc19mbikuY2FsbChfYTIpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIF9FbnRpdHkucGVuZGluZ0lkQ2hhbmdlcy5zZXQodGhpcywgdmFsdWUpO1xuICB9XG4gIC8qKlxuICAgKiBBIG1ldGhvZCB0aGF0IHJlZ2lzdGVycyB0aGUgZW50aXR5IHdpdGggdGhlIG1hbmFnZXIuXG4gICAqIEByZXR1cm5zIENsZWFudXBGdW5jdGlvbiB8IHZvaWRcbiAgICovXG4gIHJlZ2lzdGVyKCkge1xuICAgIHZhciBfYTtcbiAgICByZXR1cm4gKF9hID0gdGhpcy5tYW5hZ2VyKSA9PSBudWxsID8gdm9pZCAwIDogX2EucmVnaXN0cnkucmVnaXN0ZXIodGhpcyk7XG4gIH1cbiAgLyoqXG4gICAqIEEgbWV0aG9kIHRoYXQgdW5yZWdpc3RlcnMgdGhlIGVudGl0eSBmcm9tIHRoZSBtYW5hZ2VyLlxuICAgKiBAcmV0dXJucyB2b2lkXG4gICAqL1xuICB1bnJlZ2lzdGVyKCkge1xuICAgIHZhciBfYTtcbiAgICAoX2EgPSB0aGlzLm1hbmFnZXIpID09IG51bGwgPyB2b2lkIDAgOiBfYS5yZWdpc3RyeS51bnJlZ2lzdGVyKHRoaXMpO1xuICB9XG4gIC8qKlxuICAgKiBBIG1ldGhvZCB0aGF0IGNsZWFucyB1cCB0aGUgZW50aXR5IHdoZW4gaXQgaXMgbm8gbG9uZ2VyIG5lZWRlZC5cbiAgICogQHJldHVybnMgdm9pZFxuICAgKi9cbiAgZGVzdHJveSgpIHtcbiAgICB2YXIgX2E7XG4gICAgKF9hID0gdGhpcy5tYW5hZ2VyKSA9PSBudWxsID8gdm9pZCAwIDogX2EucmVnaXN0cnkudW5yZWdpc3Rlcih0aGlzKTtcbiAgfVxufTtcbl9pbml0MiA9IF9fZGVjb3JhdG9yU3RhcnQobnVsbCk7XG5fRW50aXR5X3N0YXRpYyA9IG5ldyBXZWFrU2V0KCk7XG5mbHVzaElkQ2hhbmdlc19mbiA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBjaGFuZ2VzID0gX0VudGl0eS5wZW5kaW5nSWRDaGFuZ2VzO1xuICBfRW50aXR5LnBlbmRpbmdJZENoYW5nZXMgPSBudWxsO1xuICBpZiAoY2hhbmdlcykge1xuICAgIGJhdGNoKCgpID0+IHtcbiAgICAgIGZvciAoY29uc3QgW2VudGl0eSwgaWRdIG9mIGNoYW5nZXMpIHtcbiAgICAgICAgX19wcml2YXRlR2V0KGVudGl0eSwgX2lkU2lnbmFsKS52YWx1ZSA9IGlkO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuX21hbmFnZXIgPSBuZXcgV2Vha01hcCgpO1xuX2lkU2lnbmFsID0gbmV3IFdlYWtNYXAoKTtcbl9kYXRhID0gbmV3IFdlYWtNYXAoKTtcbl9kaXNhYmxlZDIgPSBuZXcgV2Vha01hcCgpO1xuX19kZWNvcmF0ZUVsZW1lbnQoX2luaXQyLCA0LCBcIm1hbmFnZXJcIiwgX21hbmFnZXJfZGVjLCBfRW50aXR5LCBfbWFuYWdlcik7XG5fX2RlY29yYXRlRWxlbWVudChfaW5pdDIsIDQsIFwiZGF0YVwiLCBfZGF0YV9kZWMsIF9FbnRpdHksIF9kYXRhKTtcbl9fZGVjb3JhdGVFbGVtZW50KF9pbml0MiwgNCwgXCJkaXNhYmxlZFwiLCBfZGlzYWJsZWRfZGVjMiwgX0VudGl0eSwgX2Rpc2FibGVkMik7XG5fX3ByaXZhdGVBZGQoX0VudGl0eSwgX0VudGl0eV9zdGF0aWMpO1xuX19kZWNvcmF0b3JNZXRhZGF0YShfaW5pdDIsIF9FbnRpdHkpO1xuX0VudGl0eS5wZW5kaW5nSWRDaGFuZ2VzID0gbnVsbDtcbnZhciBFbnRpdHkgPSBfRW50aXR5O1xudmFyIEVudGl0eVJlZ2lzdHJ5ID0gY2xhc3Mge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm1hcCA9IHNpZ25hbCgvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpKTtcbiAgICB0aGlzLmNsZWFudXBGdW5jdGlvbnMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbiAgICAvKipcbiAgICAgKiBSZWdpc3RlcnMgYSBlbnRpdHkgaW4gdGhlIHJlZ2lzdHJ5LlxuICAgICAqIEBwYXJhbSBrZXkgLSBUaGUgdW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIGVudGl0eS5cbiAgICAgKiBAcGFyYW0gdmFsdWUgLSBUaGUgZW50aXR5IHRvIHJlZ2lzdGVyLlxuICAgICAqIEByZXR1cm5zIEEgZnVuY3Rpb24gdGhhdCB1bnJlZ2lzdGVycyB0aGUgZW50aXR5LlxuICAgICAqL1xuICAgIHRoaXMucmVnaXN0ZXIgPSAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgY29uc3QgY3VycmVudCA9IHRoaXMubWFwLnBlZWsoKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGN1cnJlbnQuZ2V0KGtleSk7XG4gICAgICBjb25zdCB1bnJlZ2lzdGVyID0gKCkgPT4gdGhpcy51bnJlZ2lzdGVyKGtleSwgdmFsdWUpO1xuICAgICAgaWYgKGN1cnJlbnRWYWx1ZSA9PT0gdmFsdWUpIHJldHVybiB1bnJlZ2lzdGVyO1xuICAgICAgaWYgKGN1cnJlbnRWYWx1ZSkge1xuICAgICAgICBpZiAoY3VycmVudFZhbHVlLmlkID09PSBrZXkpIHtcbiAgICAgICAgICBjb25zdCBjbGVhbnVwMiA9IHRoaXMuY2xlYW51cEZ1bmN0aW9ucy5nZXQoY3VycmVudFZhbHVlKTtcbiAgICAgICAgICBjbGVhbnVwMiA9PSBudWxsID8gdm9pZCAwIDogY2xlYW51cDIoKTtcbiAgICAgICAgICB0aGlzLmNsZWFudXBGdW5jdGlvbnMuZGVsZXRlKGN1cnJlbnRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IHVwZGF0ZWRNYXAgPSBuZXcgTWFwKGN1cnJlbnQpO1xuICAgICAgZm9yIChjb25zdCBbZXhpc3RpbmdLZXksIGV4aXN0aW5nVmFsdWVdIG9mIGN1cnJlbnQpIHtcbiAgICAgICAgaWYgKGV4aXN0aW5nVmFsdWUgPT09IHZhbHVlICYmIGV4aXN0aW5nS2V5ICE9PSBrZXkpIHtcbiAgICAgICAgICB1cGRhdGVkTWFwLmRlbGV0ZShleGlzdGluZ0tleSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHVwZGF0ZWRNYXAuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgdGhpcy5tYXAudmFsdWUgPSB1cGRhdGVkTWFwO1xuICAgICAgY29uc3QgY2xlYW51cCA9IGVmZmVjdHMoLi4udmFsdWUuZWZmZWN0cygpKTtcbiAgICAgIHRoaXMuY2xlYW51cEZ1bmN0aW9ucy5zZXQodmFsdWUsIGNsZWFudXApO1xuICAgICAgcmV0dXJuIHVucmVnaXN0ZXI7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBVbnJlZ2lzdGVycyBhbiBlbnRpdHkgZnJvbSB0aGUgcmVnaXN0cnkuXG4gICAgICogQHBhcmFtIGtleSAtIFRoZSB1bmlxdWUgaWRlbnRpZmllciBvZiB0aGUgZW50aXR5LlxuICAgICAqIEBwYXJhbSB2YWx1ZSAtIFRoZSBlbnRpdHkgaW5zdGFuY2UgdG8gdW5yZWdpc3Rlci5cbiAgICAgKi9cbiAgICB0aGlzLnVucmVnaXN0ZXIgPSAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgY29uc3QgY3VycmVudCA9IHRoaXMubWFwLnBlZWsoKTtcbiAgICAgIGlmIChjdXJyZW50LmdldChrZXkpICE9PSB2YWx1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBjbGVhbnVwID0gdGhpcy5jbGVhbnVwRnVuY3Rpb25zLmdldCh2YWx1ZSk7XG4gICAgICBjbGVhbnVwID09IG51bGwgPyB2b2lkIDAgOiBjbGVhbnVwKCk7XG4gICAgICB0aGlzLmNsZWFudXBGdW5jdGlvbnMuZGVsZXRlKHZhbHVlKTtcbiAgICAgIGNvbnN0IHVwZGF0ZWRNYXAgPSBuZXcgTWFwKGN1cnJlbnQpO1xuICAgICAgdXBkYXRlZE1hcC5kZWxldGUoa2V5KTtcbiAgICAgIHRoaXMubWFwLnZhbHVlID0gdXBkYXRlZE1hcDtcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBJdGVyYXRvciBmb3IgdGhlIEVudGl0eVJlZ2lzdHJ5IGNsYXNzLlxuICAgKiBAcmV0dXJucyBBbiBpdGVyYXRvciBmb3IgdGhlIHZhbHVlcyBpbiB0aGUgbWFwLlxuICAgKi9cbiAgW1N5bWJvbC5pdGVyYXRvcl0oKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwLnBlZWsoKS52YWx1ZXMoKTtcbiAgfVxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwLnZhbHVlLnZhbHVlcygpO1xuICB9XG4gIC8qKlxuICAgKiBDaGVja3MgaWYgYSBlbnRpdHkgd2l0aCB0aGUgZ2l2ZW4gaWRlbnRpZmllciBleGlzdHMgaW4gdGhlIHJlZ2lzdHJ5LlxuICAgKiBAcGFyYW0gaWRlbnRpZmllciAtIFRoZSB1bmlxdWUgaWRlbnRpZmllciBvZiB0aGUgZW50aXR5LlxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBlbnRpdHkgZXhpc3RzLCBmYWxzZSBvdGhlcndpc2UuXG4gICAqL1xuICBoYXMoaWRlbnRpZmllcikge1xuICAgIHJldHVybiB0aGlzLm1hcC52YWx1ZS5oYXMoaWRlbnRpZmllcik7XG4gIH1cbiAgLyoqXG4gICAqIFJldHJpZXZlcyBhIGVudGl0eSBmcm9tIHRoZSByZWdpc3RyeSB1c2luZyBpdHMgaWRlbnRpZmllci5cbiAgICogQHBhcmFtIGlkZW50aWZpZXIgLSBUaGUgdW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIGVudGl0eS5cbiAgICogQHJldHVybnMgVGhlIGVudGl0eSBpZiBpdCBleGlzdHMsIHVuZGVmaW5lZCBvdGhlcndpc2UuXG4gICAqL1xuICBnZXQoaWRlbnRpZmllcikge1xuICAgIHJldHVybiB0aGlzLm1hcC52YWx1ZS5nZXQoaWRlbnRpZmllcik7XG4gIH1cbiAgLyoqXG4gICAqIERlc3Ryb3lzIGFsbCBlbnRyaWVzIGluIHRoZSByZWdpc3RyeSBhbmQgY2xlYXJzIHRoZSByZWdpc3RyeS5cbiAgICovXG4gIGRlc3Ryb3koKSB7XG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiB0aGlzKSB7XG4gICAgICBjb25zdCBjbGVhbnVwID0gdGhpcy5jbGVhbnVwRnVuY3Rpb25zLmdldChlbnRyeSk7XG4gICAgICBjbGVhbnVwID09IG51bGwgPyB2b2lkIDAgOiBjbGVhbnVwKCk7XG4gICAgICBlbnRyeS5kZXN0cm95KCk7XG4gICAgfVxuICAgIHRoaXMubWFwLnZhbHVlID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgfVxufTtcbnZhciBfaXNEcmFnU291cmNlX2RlYywgX2lzRHJhZ2dpbmdfZGVjLCBfaXNEcm9wcGluZ19kZWMsIF9zdGF0dXNfZGVjLCBfbW9kaWZpZXJzX2RlYywgX3R5cGVfZGVjLCBfYywgX2luaXQzLCBfdHlwZSwgX21vZGlmaWVycywgX3N0YXR1cztcbnZhciBEcmFnZ2FibGUgPSBjbGFzcyBleHRlbmRzIChfYyA9IEVudGl0eSwgX3R5cGVfZGVjID0gW3JlYWN0aXZlXSwgX21vZGlmaWVyc19kZWMgPSBbcmVhY3RpdmVdLCBfc3RhdHVzX2RlYyA9IFtyZWFjdGl2ZV0sIF9pc0Ryb3BwaW5nX2RlYyA9IFtkZXJpdmVkXSwgX2lzRHJhZ2dpbmdfZGVjID0gW2Rlcml2ZWRdLCBfaXNEcmFnU291cmNlX2RlYyA9IFtkZXJpdmVkXSwgX2MpIHtcbiAgY29uc3RydWN0b3IoX2EsIG1hbmFnZXIpIHtcbiAgICB2YXIgX2IgPSBfYSwgeyBtb2RpZmllcnMsIHR5cGUsIHNlbnNvcnMsIHBsdWdpbnMsIGVmZmVjdHM6IGVmZmVjdHM2IH0gPSBfYiwgaW5wdXQgPSBfX29ialJlc3QoX2IsIFtcIm1vZGlmaWVyc1wiLCBcInR5cGVcIiwgXCJzZW5zb3JzXCIsIFwicGx1Z2luc1wiLCBcImVmZmVjdHNcIl0pO1xuICAgIHN1cGVyKFxuICAgICAgX19zcHJlYWRQcm9wcyhfX3NwcmVhZFZhbHVlcyh7fSwgaW5wdXQpLCB7XG4gICAgICAgIGVmZmVjdHM6ICgpID0+IHtcbiAgICAgICAgICB2YXIgX2EyO1xuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAuLi4oX2EyID0gZWZmZWN0czYgPT0gbnVsbCA/IHZvaWQgMCA6IGVmZmVjdHM2KCkpICE9IG51bGwgPyBfYTIgOiBbXSxcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyBtYW5hZ2VyOiBtYW5hZ2VyMiwgcGx1Z2luczogcGx1Z2luczIgfSA9IHRoaXM7XG4gICAgICAgICAgICAgIGlmICghbWFuYWdlcjIgfHwgIXBsdWdpbnMyKSByZXR1cm47XG4gICAgICAgICAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgcGx1Z2luczIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHBsdWdpbiB9ID0gZGVzY3JpcHRvcihlbnRyeSk7XG4gICAgICAgICAgICAgICAgbWFuYWdlcjIucmVnaXN0cnkucGx1Z2lucy5yZWdpc3RlcihwbHVnaW4pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBtYW5hZ2VyXG4gICAgKTtcbiAgICBfX3J1bkluaXRpYWxpemVycyhfaW5pdDMsIDUsIHRoaXMpO1xuICAgIF9fcHJpdmF0ZUFkZCh0aGlzLCBfdHlwZSwgX19ydW5Jbml0aWFsaXplcnMoX2luaXQzLCA4LCB0aGlzKSksIF9fcnVuSW5pdGlhbGl6ZXJzKF9pbml0MywgMTEsIHRoaXMpO1xuICAgIF9fcHJpdmF0ZUFkZCh0aGlzLCBfbW9kaWZpZXJzLCBfX3J1bkluaXRpYWxpemVycyhfaW5pdDMsIDEyLCB0aGlzKSksIF9fcnVuSW5pdGlhbGl6ZXJzKF9pbml0MywgMTUsIHRoaXMpO1xuICAgIF9fcHJpdmF0ZUFkZCh0aGlzLCBfc3RhdHVzLCBfX3J1bkluaXRpYWxpemVycyhfaW5pdDMsIDE2LCB0aGlzLCB0aGlzLmlzRHJhZ1NvdXJjZSA/IFwiZHJhZ2dpbmdcIiA6IFwiaWRsZVwiKSksIF9fcnVuSW5pdGlhbGl6ZXJzKF9pbml0MywgMTksIHRoaXMpO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5zZW5zb3JzID0gc2Vuc29ycztcbiAgICB0aGlzLm1vZGlmaWVycyA9IG1vZGlmaWVycztcbiAgICB0aGlzLmFsaWdubWVudCA9IGlucHV0LmFsaWdubWVudDtcbiAgICB0aGlzLnBsdWdpbnMgPSBwbHVnaW5zO1xuICB9XG4gIC8qKlxuICAgKiBMb29rIHVwIHBlci1lbnRpdHkgb3B0aW9ucyBmb3IgYSBnaXZlbiBwbHVnaW4gY29uc3RydWN0b3IuXG4gICAqL1xuICBwbHVnaW5Db25maWcocGx1Z2luKSB7XG4gICAgaWYgKCF0aGlzLnBsdWdpbnMpIHJldHVybiB2b2lkIDA7XG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiB0aGlzLnBsdWdpbnMpIHtcbiAgICAgIGNvbnN0IGRlc2MgPSBkZXNjcmlwdG9yKGVudHJ5KTtcbiAgICAgIGlmIChkZXNjLnBsdWdpbiA9PT0gcGx1Z2luKSByZXR1cm4gZGVzYy5vcHRpb25zO1xuICAgIH1cbiAgICByZXR1cm4gdm9pZCAwO1xuICB9XG4gIGdldCBpc0Ryb3BwaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXR1cyA9PT0gXCJkcm9wcGluZ1wiICYmIHRoaXMuaXNEcmFnU291cmNlO1xuICB9XG4gIGdldCBpc0RyYWdnaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXR1cyA9PT0gXCJkcmFnZ2luZ1wiICYmIHRoaXMuaXNEcmFnU291cmNlO1xuICB9XG4gIGdldCBpc0RyYWdTb3VyY2UoKSB7XG4gICAgdmFyIF9hLCBfYjtcbiAgICByZXR1cm4gKChfYiA9IChfYSA9IHRoaXMubWFuYWdlcikgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLmRyYWdPcGVyYXRpb24uc291cmNlKSA9PSBudWxsID8gdm9pZCAwIDogX2IuaWQpID09PSB0aGlzLmlkO1xuICB9XG59O1xuX2luaXQzID0gX19kZWNvcmF0b3JTdGFydChfYyk7XG5fdHlwZSA9IG5ldyBXZWFrTWFwKCk7XG5fbW9kaWZpZXJzID0gbmV3IFdlYWtNYXAoKTtcbl9zdGF0dXMgPSBuZXcgV2Vha01hcCgpO1xuX19kZWNvcmF0ZUVsZW1lbnQoX2luaXQzLCA0LCBcInR5cGVcIiwgX3R5cGVfZGVjLCBEcmFnZ2FibGUsIF90eXBlKTtcbl9fZGVjb3JhdGVFbGVtZW50KF9pbml0MywgNCwgXCJtb2RpZmllcnNcIiwgX21vZGlmaWVyc19kZWMsIERyYWdnYWJsZSwgX21vZGlmaWVycyk7XG5fX2RlY29yYXRlRWxlbWVudChfaW5pdDMsIDQsIFwic3RhdHVzXCIsIF9zdGF0dXNfZGVjLCBEcmFnZ2FibGUsIF9zdGF0dXMpO1xuX19kZWNvcmF0ZUVsZW1lbnQoX2luaXQzLCAyLCBcImlzRHJvcHBpbmdcIiwgX2lzRHJvcHBpbmdfZGVjLCBEcmFnZ2FibGUpO1xuX19kZWNvcmF0ZUVsZW1lbnQoX2luaXQzLCAyLCBcImlzRHJhZ2dpbmdcIiwgX2lzRHJhZ2dpbmdfZGVjLCBEcmFnZ2FibGUpO1xuX19kZWNvcmF0ZUVsZW1lbnQoX2luaXQzLCAyLCBcImlzRHJhZ1NvdXJjZVwiLCBfaXNEcmFnU291cmNlX2RlYywgRHJhZ2dhYmxlKTtcbl9fZGVjb3JhdG9yTWV0YWRhdGEoX2luaXQzLCBEcmFnZ2FibGUpO1xudmFyIF9pc0Ryb3BUYXJnZXRfZGVjLCBfc2hhcGVfZGVjLCBfY29sbGlzaW9uUHJpb3JpdHlfZGVjLCBfY29sbGlzaW9uRGV0ZWN0b3JfZGVjLCBfdHlwZV9kZWMyLCBfYWNjZXB0X2RlYywgX2MyLCBfaW5pdDQsIF9hY2NlcHQsIF90eXBlMiwgX2NvbGxpc2lvbkRldGVjdG9yLCBfY29sbGlzaW9uUHJpb3JpdHksIF9zaGFwZTtcbnZhciBEcm9wcGFibGUgPSBjbGFzcyBleHRlbmRzIChfYzIgPSBFbnRpdHksIF9hY2NlcHRfZGVjID0gW3JlYWN0aXZlXSwgX3R5cGVfZGVjMiA9IFtyZWFjdGl2ZV0sIF9jb2xsaXNpb25EZXRlY3Rvcl9kZWMgPSBbcmVhY3RpdmVdLCBfY29sbGlzaW9uUHJpb3JpdHlfZGVjID0gW3JlYWN0aXZlXSwgX3NoYXBlX2RlYyA9IFtyZWFjdGl2ZV0sIF9pc0Ryb3BUYXJnZXRfZGVjID0gW2Rlcml2ZWRdLCBfYzIpIHtcbiAgY29uc3RydWN0b3IoX2EsIG1hbmFnZXIpIHtcbiAgICB2YXIgX2IgPSBfYSwgeyBhY2NlcHQsIGNvbGxpc2lvbkRldGVjdG9yLCBjb2xsaXNpb25Qcmlvcml0eSwgdHlwZSB9ID0gX2IsIGlucHV0ID0gX19vYmpSZXN0KF9iLCBbXCJhY2NlcHRcIiwgXCJjb2xsaXNpb25EZXRlY3RvclwiLCBcImNvbGxpc2lvblByaW9yaXR5XCIsIFwidHlwZVwiXSk7XG4gICAgc3VwZXIoaW5wdXQsIG1hbmFnZXIpO1xuICAgIF9fcnVuSW5pdGlhbGl6ZXJzKF9pbml0NCwgNSwgdGhpcyk7XG4gICAgX19wcml2YXRlQWRkKHRoaXMsIF9hY2NlcHQsIF9fcnVuSW5pdGlhbGl6ZXJzKF9pbml0NCwgOCwgdGhpcykpLCBfX3J1bkluaXRpYWxpemVycyhfaW5pdDQsIDExLCB0aGlzKTtcbiAgICBfX3ByaXZhdGVBZGQodGhpcywgX3R5cGUyLCBfX3J1bkluaXRpYWxpemVycyhfaW5pdDQsIDEyLCB0aGlzKSksIF9fcnVuSW5pdGlhbGl6ZXJzKF9pbml0NCwgMTUsIHRoaXMpO1xuICAgIF9fcHJpdmF0ZUFkZCh0aGlzLCBfY29sbGlzaW9uRGV0ZWN0b3IsIF9fcnVuSW5pdGlhbGl6ZXJzKF9pbml0NCwgMTYsIHRoaXMpKSwgX19ydW5Jbml0aWFsaXplcnMoX2luaXQ0LCAxOSwgdGhpcyk7XG4gICAgX19wcml2YXRlQWRkKHRoaXMsIF9jb2xsaXNpb25Qcmlvcml0eSwgX19ydW5Jbml0aWFsaXplcnMoX2luaXQ0LCAyMCwgdGhpcykpLCBfX3J1bkluaXRpYWxpemVycyhfaW5pdDQsIDIzLCB0aGlzKTtcbiAgICBfX3ByaXZhdGVBZGQodGhpcywgX3NoYXBlLCBfX3J1bkluaXRpYWxpemVycyhfaW5pdDQsIDI0LCB0aGlzKSksIF9fcnVuSW5pdGlhbGl6ZXJzKF9pbml0NCwgMjcsIHRoaXMpO1xuICAgIHRoaXMuYWNjZXB0ID0gYWNjZXB0O1xuICAgIHRoaXMuY29sbGlzaW9uRGV0ZWN0b3IgPSBjb2xsaXNpb25EZXRlY3RvcjtcbiAgICB0aGlzLmNvbGxpc2lvblByaW9yaXR5ID0gY29sbGlzaW9uUHJpb3JpdHk7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgb3Igbm90IHRoZSBkcm9wcGFibGUgYWNjZXB0cyBhIGdpdmVuIGRyYWdnYWJsZS5cbiAgICpcbiAgICogQHBhcmFtIGRyYWdnYWJsZSAtIFRoZSBkcmFnZ2FibGUgdG8gY2hlY2tcbiAgICogQHJldHVybnMgdHJ1ZSBpZiB0aGUgZHJhZ2dhYmxlIGNhbiBiZSBkcm9wcGVkIGhlcmVcbiAgICovXG4gIGFjY2VwdHMoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3QgeyBhY2NlcHQgfSA9IHRoaXM7XG4gICAgaWYgKCFhY2NlcHQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGFjY2VwdCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICByZXR1cm4gYWNjZXB0KGRyYWdnYWJsZSk7XG4gICAgfVxuICAgIGlmICghZHJhZ2dhYmxlLnR5cGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYWNjZXB0KSkge1xuICAgICAgcmV0dXJuIGFjY2VwdC5pbmNsdWRlcyhkcmFnZ2FibGUudHlwZSk7XG4gICAgfVxuICAgIHJldHVybiBkcmFnZ2FibGUudHlwZSA9PT0gYWNjZXB0O1xuICB9XG4gIGdldCBpc0Ryb3BUYXJnZXQoKSB7XG4gICAgdmFyIF9hLCBfYjtcbiAgICByZXR1cm4gKChfYiA9IChfYSA9IHRoaXMubWFuYWdlcikgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLmRyYWdPcGVyYXRpb24udGFyZ2V0KSA9PSBudWxsID8gdm9pZCAwIDogX2IuaWQpID09PSB0aGlzLmlkO1xuICB9XG59O1xuX2luaXQ0ID0gX19kZWNvcmF0b3JTdGFydChfYzIpO1xuX2FjY2VwdCA9IG5ldyBXZWFrTWFwKCk7XG5fdHlwZTIgPSBuZXcgV2Vha01hcCgpO1xuX2NvbGxpc2lvbkRldGVjdG9yID0gbmV3IFdlYWtNYXAoKTtcbl9jb2xsaXNpb25Qcmlvcml0eSA9IG5ldyBXZWFrTWFwKCk7XG5fc2hhcGUgPSBuZXcgV2Vha01hcCgpO1xuX19kZWNvcmF0ZUVsZW1lbnQoX2luaXQ0LCA0LCBcImFjY2VwdFwiLCBfYWNjZXB0X2RlYywgRHJvcHBhYmxlLCBfYWNjZXB0KTtcbl9fZGVjb3JhdGVFbGVtZW50KF9pbml0NCwgNCwgXCJ0eXBlXCIsIF90eXBlX2RlYzIsIERyb3BwYWJsZSwgX3R5cGUyKTtcbl9fZGVjb3JhdGVFbGVtZW50KF9pbml0NCwgNCwgXCJjb2xsaXNpb25EZXRlY3RvclwiLCBfY29sbGlzaW9uRGV0ZWN0b3JfZGVjLCBEcm9wcGFibGUsIF9jb2xsaXNpb25EZXRlY3Rvcik7XG5fX2RlY29yYXRlRWxlbWVudChfaW5pdDQsIDQsIFwiY29sbGlzaW9uUHJpb3JpdHlcIiwgX2NvbGxpc2lvblByaW9yaXR5X2RlYywgRHJvcHBhYmxlLCBfY29sbGlzaW9uUHJpb3JpdHkpO1xuX19kZWNvcmF0ZUVsZW1lbnQoX2luaXQ0LCA0LCBcInNoYXBlXCIsIF9zaGFwZV9kZWMsIERyb3BwYWJsZSwgX3NoYXBlKTtcbl9fZGVjb3JhdGVFbGVtZW50KF9pbml0NCwgMiwgXCJpc0Ryb3BUYXJnZXRcIiwgX2lzRHJvcFRhcmdldF9kZWMsIERyb3BwYWJsZSk7XG5fX2RlY29yYXRvck1ldGFkYXRhKF9pbml0NCwgRHJvcHBhYmxlKTtcblxuLy8gc3JjL2NvcmUvbWFuYWdlci9ldmVudHMudHNcbnZhciBNb25pdG9yID0gY2xhc3Mge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnJlZ2lzdHJ5ID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgfVxuICAvKipcbiAgICogQWRkcyBhbiBldmVudCBsaXN0ZW5lciBmb3IgdGhlIHNwZWNpZmllZCBldmVudCB0eXBlLlxuICAgKlxuICAgKiBAcGFyYW0gbmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBldmVudCB0byBsaXN0ZW4gZm9yXG4gICAqIEBwYXJhbSBoYW5kbGVyIC0gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiB0aGUgZXZlbnQgb2NjdXJzXG4gICAqIEByZXR1cm5zIEEgZnVuY3Rpb24gdG8gcmVtb3ZlIHRoZSBldmVudCBsaXN0ZW5lclxuICAgKi9cbiAgYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBoYW5kbGVyKSB7XG4gICAgY29uc3QgeyByZWdpc3RyeSB9ID0gdGhpcztcbiAgICBjb25zdCBsaXN0ZW5lcnMgPSBuZXcgU2V0KHJlZ2lzdHJ5LmdldChuYW1lKSk7XG4gICAgbGlzdGVuZXJzLmFkZChoYW5kbGVyKTtcbiAgICByZWdpc3RyeS5zZXQobmFtZSwgbGlzdGVuZXJzKTtcbiAgICByZXR1cm4gKCkgPT4gdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIGhhbmRsZXIpO1xuICB9XG4gIC8qKlxuICAgKiBSZW1vdmVzIGFuIGV2ZW50IGxpc3RlbmVyIGZvciB0aGUgc3BlY2lmaWVkIGV2ZW50IHR5cGUuXG4gICAqXG4gICAqIEBwYXJhbSBuYW1lIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAqIEBwYXJhbSBoYW5kbGVyIC0gVGhlIGZ1bmN0aW9uIHRvIHJlbW92ZVxuICAgKi9cbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCBoYW5kbGVyKSB7XG4gICAgY29uc3QgeyByZWdpc3RyeSB9ID0gdGhpcztcbiAgICBjb25zdCBsaXN0ZW5lcnMgPSBuZXcgU2V0KHJlZ2lzdHJ5LmdldChuYW1lKSk7XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShoYW5kbGVyKTtcbiAgICByZWdpc3RyeS5zZXQobmFtZSwgbGlzdGVuZXJzKTtcbiAgfVxuICAvKipcbiAgICogRGlzcGF0Y2hlcyBhbiBldmVudCB0byBhbGwgcmVnaXN0ZXJlZCBsaXN0ZW5lcnMuXG4gICAqXG4gICAqIEBwYXJhbSBuYW1lIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50IHRvIGRpc3BhdGNoXG4gICAqIEBwYXJhbSBhcmdzIC0gQXJndW1lbnRzIHRvIHBhc3MgdG8gdGhlIGV2ZW50IGhhbmRsZXJzXG4gICAqL1xuICBkaXNwYXRjaChuYW1lLCAuLi5hcmdzKSB7XG4gICAgY29uc3QgeyByZWdpc3RyeSB9ID0gdGhpcztcbiAgICBjb25zdCBsaXN0ZW5lcnMgPSByZWdpc3RyeS5nZXQobmFtZSk7XG4gICAgaWYgKCFsaXN0ZW5lcnMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9yIChjb25zdCBsaXN0ZW5lciBvZiBsaXN0ZW5lcnMpIHtcbiAgICAgIGxpc3RlbmVyKC4uLmFyZ3MpO1xuICAgIH1cbiAgfVxufTtcbnZhciBEcmFnRHJvcE1vbml0b3IgPSBjbGFzcyBleHRlbmRzIE1vbml0b3Ige1xuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBkcmFnIGFuZCBkcm9wIG1vbml0b3IuXG4gICAqXG4gICAqIEBwYXJhbSBtYW5hZ2VyIC0gVGhlIGRyYWcgYW5kIGRyb3AgbWFuYWdlciB0byBtb25pdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvcihtYW5hZ2VyKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm1hbmFnZXIgPSBtYW5hZ2VyO1xuICB9XG4gIC8qKlxuICAgKiBEaXNwYXRjaGVzIGEgZHJhZyBhbmQgZHJvcCBldmVudC5cbiAgICpcbiAgICogQHBhcmFtIHR5cGUgLSBUaGUgdHlwZSBvZiBldmVudCB0byBkaXNwYXRjaFxuICAgKiBAcGFyYW0gZXZlbnQgLSBUaGUgZXZlbnQgZGF0YSB0byBkaXNwYXRjaFxuICAgKi9cbiAgZGlzcGF0Y2godHlwZSwgZXZlbnQpIHtcbiAgICBjb25zdCBhcmdzID0gW2V2ZW50LCB0aGlzLm1hbmFnZXJdO1xuICAgIHN1cGVyLmRpc3BhdGNoKHR5cGUsIC4uLmFyZ3MpO1xuICB9XG59O1xuZnVuY3Rpb24gZGVmYXVsdFByZXZlbnRhYmxlKGV2ZW50LCBjYW5jZWxhYmxlID0gdHJ1ZSkge1xuICBsZXQgZGVmYXVsdFByZXZlbnRlZCA9IGZhbHNlO1xuICByZXR1cm4gX19zcHJlYWRQcm9wcyhfX3NwcmVhZFZhbHVlcyh7fSwgZXZlbnQpLCB7XG4gICAgY2FuY2VsYWJsZSxcbiAgICBnZXQgZGVmYXVsdFByZXZlbnRlZCgpIHtcbiAgICAgIHJldHVybiBkZWZhdWx0UHJldmVudGVkO1xuICAgIH0sXG4gICAgcHJldmVudERlZmF1bHQoKSB7XG4gICAgICBpZiAoIWNhbmNlbGFibGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZGVmYXVsdFByZXZlbnRlZCA9IHRydWU7XG4gICAgfVxuICB9KTtcbn1cblxuLy8gc3JjL2NvcmUvY29sbGlzaW9uL25vdGlmaWVyLnRzXG52YXIgQ29sbGlzaW9uTm90aWZpZXIgPSBjbGFzcyBleHRlbmRzIENvcmVQbHVnaW4ge1xuICBjb25zdHJ1Y3RvcihtYW5hZ2VyKSB7XG4gICAgc3VwZXIobWFuYWdlcik7XG4gICAgY29uc3QgaXNFcXVhbCA9IChhLCBiKSA9PiBhLm1hcCgoeyBpZCB9KSA9PiBpZCkuam9pbihcIlwiKSA9PT0gYi5tYXAoKHsgaWQgfSkgPT4gaWQpLmpvaW4oXCJcIik7XG4gICAgbGV0IHByZXZpb3VzQ29sbGlzaW9ucyA9IFtdO1xuICAgIHRoaXMuZGVzdHJveSA9IGVmZmVjdHMoXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgZHJhZ09wZXJhdGlvbiwgY29sbGlzaW9uT2JzZXJ2ZXIgfSA9IG1hbmFnZXI7XG4gICAgICAgIGlmIChkcmFnT3BlcmF0aW9uLnN0YXR1cy5pbml0aWFsaXppbmcpIHtcbiAgICAgICAgICBwcmV2aW91c0NvbGxpc2lvbnMgPSBbXTtcbiAgICAgICAgICBjb2xsaXNpb25PYnNlcnZlci5lbmFibGUoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgY29uc3QgeyBjb2xsaXNpb25PYnNlcnZlciwgbW9uaXRvciB9ID0gbWFuYWdlcjtcbiAgICAgICAgY29uc3QgeyBjb2xsaXNpb25zIH0gPSBjb2xsaXNpb25PYnNlcnZlcjtcbiAgICAgICAgaWYgKGNvbGxpc2lvbk9ic2VydmVyLmlzRGlzYWJsZWQoKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoRW50aXR5LnBlbmRpbmdJZENoYW5nZXMpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZXZlbnQgPSBkZWZhdWx0UHJldmVudGFibGUoe1xuICAgICAgICAgIGNvbGxpc2lvbnNcbiAgICAgICAgfSk7XG4gICAgICAgIG1vbml0b3IuZGlzcGF0Y2goXCJjb2xsaXNpb25cIiwgZXZlbnQpO1xuICAgICAgICBpZiAoZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNFcXVhbChjb2xsaXNpb25zLCBwcmV2aW91c0NvbGxpc2lvbnMpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByZXZpb3VzQ29sbGlzaW9ucyA9IGNvbGxpc2lvbnM7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgW2ZpcnN0Q29sbGlzaW9uXSA9IGNvbGxpc2lvbnM7XG4gICAgICAgIHVudHJhY2tlZCgoKSA9PiB7XG4gICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgIGlmICgoZmlyc3RDb2xsaXNpb24gPT0gbnVsbCA/IHZvaWQgMCA6IGZpcnN0Q29sbGlzaW9uLmlkKSAhPT0gKChfYSA9IG1hbmFnZXIuZHJhZ09wZXJhdGlvbi50YXJnZXQpID09IG51bGwgPyB2b2lkIDAgOiBfYS5pZCkpIHtcbiAgICAgICAgICAgIGNvbGxpc2lvbk9ic2VydmVyLmRpc2FibGUoKTtcbiAgICAgICAgICAgIG1hbmFnZXIuYWN0aW9ucy5zZXREcm9wVGFyZ2V0KGZpcnN0Q29sbGlzaW9uID09IG51bGwgPyB2b2lkIDAgOiBmaXJzdENvbGxpc2lvbi5pZCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbGxpc2lvbk9ic2VydmVyLmVuYWJsZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICApO1xuICB9XG59O1xuXG4vLyBzcmMvY29yZS9jb2xsaXNpb24vdHlwZXMudHNcbnZhciBDb2xsaXNpb25Qcmlvcml0eSA9IC8qIEBfX1BVUkVfXyAqLyAoKENvbGxpc2lvblByaW9yaXR5MikgPT4ge1xuICBDb2xsaXNpb25Qcmlvcml0eTJbQ29sbGlzaW9uUHJpb3JpdHkyW1wiTG93ZXN0XCJdID0gMF0gPSBcIkxvd2VzdFwiO1xuICBDb2xsaXNpb25Qcmlvcml0eTJbQ29sbGlzaW9uUHJpb3JpdHkyW1wiTG93XCJdID0gMV0gPSBcIkxvd1wiO1xuICBDb2xsaXNpb25Qcmlvcml0eTJbQ29sbGlzaW9uUHJpb3JpdHkyW1wiTm9ybWFsXCJdID0gMl0gPSBcIk5vcm1hbFwiO1xuICBDb2xsaXNpb25Qcmlvcml0eTJbQ29sbGlzaW9uUHJpb3JpdHkyW1wiSGlnaFwiXSA9IDNdID0gXCJIaWdoXCI7XG4gIENvbGxpc2lvblByaW9yaXR5MltDb2xsaXNpb25Qcmlvcml0eTJbXCJIaWdoZXN0XCJdID0gNF0gPSBcIkhpZ2hlc3RcIjtcbiAgcmV0dXJuIENvbGxpc2lvblByaW9yaXR5Mjtcbn0pKENvbGxpc2lvblByaW9yaXR5IHx8IHt9KTtcbnZhciBDb2xsaXNpb25UeXBlID0gLyogQF9fUFVSRV9fICovICgoQ29sbGlzaW9uVHlwZTIpID0+IHtcbiAgQ29sbGlzaW9uVHlwZTJbQ29sbGlzaW9uVHlwZTJbXCJDb2xsaXNpb25cIl0gPSAwXSA9IFwiQ29sbGlzaW9uXCI7XG4gIENvbGxpc2lvblR5cGUyW0NvbGxpc2lvblR5cGUyW1wiU2hhcGVJbnRlcnNlY3Rpb25cIl0gPSAxXSA9IFwiU2hhcGVJbnRlcnNlY3Rpb25cIjtcbiAgQ29sbGlzaW9uVHlwZTJbQ29sbGlzaW9uVHlwZTJbXCJQb2ludGVySW50ZXJzZWN0aW9uXCJdID0gMl0gPSBcIlBvaW50ZXJJbnRlcnNlY3Rpb25cIjtcbiAgcmV0dXJuIENvbGxpc2lvblR5cGUyO1xufSkoQ29sbGlzaW9uVHlwZSB8fCB7fSk7XG52YXIgX2Ryb3BwZWRfZGVjLCBfZHJhZ2dpbmdfZGVjLCBfaW5pdGlhbGl6ZWRfZGVjLCBfaW5pdGlhbGl6aW5nX2RlYywgX2lkbGVfZGVjLCBfY3VycmVudF9kZWMsIF92YWx1ZV9kZWMsIF9pbml0NSwgX3ZhbHVlO1xuX3ZhbHVlX2RlYyA9IFtyZWFjdGl2ZV0sIF9jdXJyZW50X2RlYyA9IFtkZXJpdmVkXSwgX2lkbGVfZGVjID0gW2Rlcml2ZWRdLCBfaW5pdGlhbGl6aW5nX2RlYyA9IFtkZXJpdmVkXSwgX2luaXRpYWxpemVkX2RlYyA9IFtkZXJpdmVkXSwgX2RyYWdnaW5nX2RlYyA9IFtkZXJpdmVkXSwgX2Ryb3BwZWRfZGVjID0gW2Rlcml2ZWRdO1xudmFyIFN0YXR1cyA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgX19ydW5Jbml0aWFsaXplcnMoX2luaXQ1LCA1LCB0aGlzKTtcbiAgICBfX3ByaXZhdGVBZGQodGhpcywgX3ZhbHVlLCBfX3J1bkluaXRpYWxpemVycyhfaW5pdDUsIDgsIHRoaXMsIFwiaWRsZVwiIC8qIElkbGUgKi8pKSwgX19ydW5Jbml0aWFsaXplcnMoX2luaXQ1LCAxMSwgdGhpcyk7XG4gIH1cbiAgZ2V0IGN1cnJlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cbiAgZ2V0IGlkbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWUgPT09IFwiaWRsZVwiIC8qIElkbGUgKi87XG4gIH1cbiAgZ2V0IGluaXRpYWxpemluZygpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZSA9PT0gXCJpbml0aWFsaXppbmdcIiAvKiBJbml0aWFsaXppbmcgKi87XG4gIH1cbiAgZ2V0IGluaXRpYWxpemVkKCkge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXM7XG4gICAgcmV0dXJuIHZhbHVlICE9PSBcImlkbGVcIiAvKiBJZGxlICovICYmIHZhbHVlICE9PSBcImluaXRpYWxpemF0aW9uLXBlbmRpbmdcIiAvKiBJbml0aWFsaXphdGlvblBlbmRpbmcgKi87XG4gIH1cbiAgZ2V0IGRyYWdnaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlID09PSBcImRyYWdnaW5nXCIgLyogRHJhZ2dpbmcgKi87XG4gIH1cbiAgZ2V0IGRyb3BwZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWUgPT09IFwiZHJvcHBlZFwiIC8qIERyb3BwZWQgKi87XG4gIH1cbiAgLyoqXG4gICAqIFNldHMgdGhlIGN1cnJlbnQgc3RhdHVzIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0gdmFsdWUgLSBUaGUgbmV3IHN0YXR1cyB2YWx1ZVxuICAgKi9cbiAgc2V0KHZhbHVlKSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG59O1xuX2luaXQ1ID0gX19kZWNvcmF0b3JTdGFydChudWxsKTtcbl92YWx1ZSA9IG5ldyBXZWFrTWFwKCk7XG5fX2RlY29yYXRlRWxlbWVudChfaW5pdDUsIDQsIFwidmFsdWVcIiwgX3ZhbHVlX2RlYywgU3RhdHVzLCBfdmFsdWUpO1xuX19kZWNvcmF0ZUVsZW1lbnQoX2luaXQ1LCAyLCBcImN1cnJlbnRcIiwgX2N1cnJlbnRfZGVjLCBTdGF0dXMpO1xuX19kZWNvcmF0ZUVsZW1lbnQoX2luaXQ1LCAyLCBcImlkbGVcIiwgX2lkbGVfZGVjLCBTdGF0dXMpO1xuX19kZWNvcmF0ZUVsZW1lbnQoX2luaXQ1LCAyLCBcImluaXRpYWxpemluZ1wiLCBfaW5pdGlhbGl6aW5nX2RlYywgU3RhdHVzKTtcbl9fZGVjb3JhdGVFbGVtZW50KF9pbml0NSwgMiwgXCJpbml0aWFsaXplZFwiLCBfaW5pdGlhbGl6ZWRfZGVjLCBTdGF0dXMpO1xuX19kZWNvcmF0ZUVsZW1lbnQoX2luaXQ1LCAyLCBcImRyYWdnaW5nXCIsIF9kcmFnZ2luZ19kZWMsIFN0YXR1cyk7XG5fX2RlY29yYXRlRWxlbWVudChfaW5pdDUsIDIsIFwiZHJvcHBlZFwiLCBfZHJvcHBlZF9kZWMsIFN0YXR1cyk7XG5fX2RlY29yYXRvck1ldGFkYXRhKF9pbml0NSwgU3RhdHVzKTtcblxuLy8gc3JjL2NvcmUvbWFuYWdlci9hY3Rpb25zLnRzXG52YXIgRHJhZ0FjdGlvbnMgPSBjbGFzcyB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIGRyYWcgYWN0aW9ucy5cbiAgICpcbiAgICogQHBhcmFtIG1hbmFnZXIgLSBUaGUgZHJhZyBhbmQgZHJvcCBtYW5hZ2VyIGluc3RhbmNlXG4gICAqL1xuICBjb25zdHJ1Y3RvcihtYW5hZ2VyKSB7XG4gICAgdGhpcy5tYW5hZ2VyID0gbWFuYWdlcjtcbiAgfVxuICAvKipcbiAgICogU2V0cyB0aGUgc291cmNlIG9mIHRoZSBkcmFnIG9wZXJhdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHNvdXJjZSAtIFRoZSBkcmFnZ2FibGUgZW50aXR5IG9yIGl0cyB1bmlxdWUgaWRlbnRpZmllclxuICAgKi9cbiAgc2V0RHJhZ1NvdXJjZShzb3VyY2UpIHtcbiAgICBjb25zdCB7IGRyYWdPcGVyYXRpb24gfSA9IHRoaXMubWFuYWdlcjtcbiAgICBkcmFnT3BlcmF0aW9uLnNvdXJjZUlkZW50aWZpZXIgPSB0eXBlb2Ygc291cmNlID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiBzb3VyY2UgPT09IFwibnVtYmVyXCIgPyBzb3VyY2UgOiBzb3VyY2UuaWQ7XG4gIH1cbiAgLyoqXG4gICAqIFNldHMgdGhlIHRhcmdldCBvZiB0aGUgZHJvcCBvcGVyYXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSBpZGVudGlmaWVyIC0gVGhlIHVuaXF1ZSBpZGVudGlmaWVyIG9mIHRoZSBkcm9wcGFibGUgZW50aXR5IG9yIG51bGwvdW5kZWZpbmVkXG4gICAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRydWUgaWYgdGhlIGRyb3Agd2FzIHByZXZlbnRlZFxuICAgKi9cbiAgc2V0RHJvcFRhcmdldChpZGVudGlmaWVyKSB7XG4gICAgcmV0dXJuIHVudHJhY2tlZCgoKSA9PiB7XG4gICAgICBjb25zdCB7IGRyYWdPcGVyYXRpb24gfSA9IHRoaXMubWFuYWdlcjtcbiAgICAgIGNvbnN0IGlkID0gaWRlbnRpZmllciAhPSBudWxsID8gaWRlbnRpZmllciA6IG51bGw7XG4gICAgICBpZiAoZHJhZ09wZXJhdGlvbi50YXJnZXRJZGVudGlmaWVyID09PSBpZCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIGRyYWdPcGVyYXRpb24udGFyZ2V0SWRlbnRpZmllciA9IGlkO1xuICAgICAgY29uc3QgZXZlbnQgPSBkZWZhdWx0UHJldmVudGFibGUoe1xuICAgICAgICBvcGVyYXRpb246IGRyYWdPcGVyYXRpb24uc25hcHNob3QoKVxuICAgICAgfSk7XG4gICAgICBpZiAoZHJhZ09wZXJhdGlvbi5zdGF0dXMuZHJhZ2dpbmcpIHtcbiAgICAgICAgdGhpcy5tYW5hZ2VyLm1vbml0b3IuZGlzcGF0Y2goXCJkcmFnb3ZlclwiLCBldmVudCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5tYW5hZ2VyLnJlbmRlcmVyLnJlbmRlcmluZy50aGVuKCgpID0+IGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpO1xuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBTdGFydHMgYSBuZXcgZHJhZyBvcGVyYXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSBhcmdzIC0gQ29uZmlndXJhdGlvbiBmb3IgdGhlIGRyYWcgb3BlcmF0aW9uXG4gICAqIEBwYXJhbSBhcmdzLmV2ZW50IC0gVGhlIGV2ZW50IHRoYXQgaW5pdGlhdGVkIHRoZSBkcmFnXG4gICAqIEBwYXJhbSBhcmdzLnNvdXJjZSAtIFRoZSBzb3VyY2UgZHJhZ2dhYmxlIGVudGl0eSBvciBpdHMgaWRlbnRpZmllclxuICAgKiBAcGFyYW0gYXJncy5jb29yZGluYXRlcyAtIFRoZSBpbml0aWFsIGNvb3JkaW5hdGVzIG9mIHRoZSBkcmFnXG4gICAqIEByZXR1cm5zIHRydWUgaWYgdGhlIGRyYWcgb3BlcmF0aW9uIHN0YXJ0ZWQgc3VjY2Vzc2Z1bGx5XG4gICAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0aGVyZSBpcyBubyBkcmFnIHNvdXJjZSBvciBhbm90aGVyIG9wZXJhdGlvbiBpcyBhY3RpdmVcbiAgICovXG4gIHN0YXJ0KGFyZ3MpIHtcbiAgICByZXR1cm4gdW50cmFja2VkKCgpID0+IHtcbiAgICAgIGNvbnN0IHsgZHJhZ09wZXJhdGlvbiB9ID0gdGhpcy5tYW5hZ2VyO1xuICAgICAgaWYgKGFyZ3Muc291cmNlICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy5zZXREcmFnU291cmNlKGFyZ3Muc291cmNlKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNvdXJjZUluc3RhbmNlID0gZHJhZ09wZXJhdGlvbi5zb3VyY2U7XG4gICAgICBpZiAoIXNvdXJjZUluc3RhbmNlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBzdGFydCBhIGRyYWcgb3BlcmF0aW9uIHdpdGhvdXQgYSBkcmFnIHNvdXJjZVwiKTtcbiAgICAgIH1cbiAgICAgIGlmICghZHJhZ09wZXJhdGlvbi5zdGF0dXMuaWRsZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgXCJDYW5ub3Qgc3RhcnQgYSBkcmFnIG9wZXJhdGlvbiB3aGlsZSBhbm90aGVyIGlzIGFjdGl2ZVwiXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgICAgY29uc3QgeyBldmVudDogbmF0aXZlRXZlbnQsIGNvb3JkaW5hdGVzIH0gPSBhcmdzO1xuICAgICAgYmF0Y2goKCkgPT4ge1xuICAgICAgICBkcmFnT3BlcmF0aW9uLnN0YXR1cy5zZXQoXCJpbml0aWFsaXphdGlvbi1wZW5kaW5nXCIgLyogSW5pdGlhbGl6YXRpb25QZW5kaW5nICovKTtcbiAgICAgICAgZHJhZ09wZXJhdGlvbi5zaGFwZSA9IG51bGw7XG4gICAgICAgIGRyYWdPcGVyYXRpb24uY2FuY2VsZWQgPSBmYWxzZTtcbiAgICAgICAgZHJhZ09wZXJhdGlvbi5hY3RpdmF0b3JFdmVudCA9IG5hdGl2ZUV2ZW50ICE9IG51bGwgPyBuYXRpdmVFdmVudCA6IG51bGw7XG4gICAgICAgIGRyYWdPcGVyYXRpb24ucG9zaXRpb24ucmVzZXQoY29vcmRpbmF0ZXMpO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBiZWZvcmVTdGFydEV2ZW50ID0gZGVmYXVsdFByZXZlbnRhYmxlKHtcbiAgICAgICAgb3BlcmF0aW9uOiBkcmFnT3BlcmF0aW9uLnNuYXBzaG90KClcbiAgICAgIH0pO1xuICAgICAgdGhpcy5tYW5hZ2VyLm1vbml0b3IuZGlzcGF0Y2goXCJiZWZvcmVkcmFnc3RhcnRcIiwgYmVmb3JlU3RhcnRFdmVudCk7XG4gICAgICBpZiAoYmVmb3JlU3RhcnRFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGRyYWdPcGVyYXRpb24ucmVzZXQoKTtcbiAgICAgICAgY29udHJvbGxlci5hYm9ydCgpO1xuICAgICAgICByZXR1cm4gY29udHJvbGxlcjtcbiAgICAgIH1cbiAgICAgIGRyYWdPcGVyYXRpb24uc3RhdHVzLnNldChcImluaXRpYWxpemluZ1wiIC8qIEluaXRpYWxpemluZyAqLyk7XG4gICAgICBkcmFnT3BlcmF0aW9uLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuICAgICAgdGhpcy5tYW5hZ2VyLnJlbmRlcmVyLnJlbmRlcmluZy50aGVuKCgpID0+IHtcbiAgICAgICAgaWYgKGNvbnRyb2xsZXIuc2lnbmFsLmFib3J0ZWQpIHJldHVybjtcbiAgICAgICAgY29uc3QgeyBzdGF0dXMgfSA9IGRyYWdPcGVyYXRpb247XG4gICAgICAgIGlmIChzdGF0dXMuY3VycmVudCAhPT0gXCJpbml0aWFsaXppbmdcIiAvKiBJbml0aWFsaXppbmcgKi8pIHJldHVybjtcbiAgICAgICAgYmF0Y2goKCkgPT4ge1xuICAgICAgICAgIGRyYWdPcGVyYXRpb24uc3RhdHVzLnNldChcImRyYWdnaW5nXCIgLyogRHJhZ2dpbmcgKi8pO1xuICAgICAgICAgIHRoaXMubWFuYWdlci5tb25pdG9yLmRpc3BhdGNoKFwiZHJhZ3N0YXJ0XCIsIHtcbiAgICAgICAgICAgIG5hdGl2ZUV2ZW50LFxuICAgICAgICAgICAgb3BlcmF0aW9uOiBkcmFnT3BlcmF0aW9uLnNuYXBzaG90KCksXG4gICAgICAgICAgICBjYW5jZWxhYmxlOiBmYWxzZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGNvbnRyb2xsZXI7XG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIE1vdmVzIHRoZSBkcmFnZ2VkIGVudGl0eSB0byBhIG5ldyBwb3NpdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIGFyZ3MgLSBDb25maWd1cmF0aW9uIGZvciB0aGUgbW92ZSBvcGVyYXRpb25cbiAgICogQHBhcmFtIGFyZ3MuYnkgLSBSZWxhdGl2ZSBjb29yZGluYXRlcyB0byBtb3ZlIGJ5XG4gICAqIEBwYXJhbSBhcmdzLnRvIC0gQWJzb2x1dGUgY29vcmRpbmF0ZXMgdG8gbW92ZSB0b1xuICAgKiBAcGFyYW0gYXJncy5ldmVudCAtIFRoZSBldmVudCB0aGF0IHRyaWdnZXJlZCB0aGUgbW92ZVxuICAgKiBAcGFyYW0gYXJncy5jYW5jZWxhYmxlIC0gV2hldGhlciB0aGUgbW92ZSBjYW4gYmUgY2FuY2VsZWRcbiAgICogQHBhcmFtIGFyZ3MucHJvcGFnYXRlIC0gV2hldGhlciB0byBkaXNwYXRjaCBkcmFnbW92ZSBldmVudHNcbiAgICovXG4gIG1vdmUoYXJncykge1xuICAgIHJldHVybiB1bnRyYWNrZWQoKCkgPT4ge1xuICAgICAgdmFyIF9hLCBfYjtcbiAgICAgIGNvbnN0IHsgZHJhZ09wZXJhdGlvbiB9ID0gdGhpcy5tYW5hZ2VyO1xuICAgICAgY29uc3QgeyBzdGF0dXMsIGNvbnRyb2xsZXIgfSA9IGRyYWdPcGVyYXRpb247XG4gICAgICBpZiAoIXN0YXR1cy5kcmFnZ2luZyB8fCAhY29udHJvbGxlciB8fCBjb250cm9sbGVyLnNpZ25hbC5hYm9ydGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGV2ZW50ID0gZGVmYXVsdFByZXZlbnRhYmxlKFxuICAgICAgICB7XG4gICAgICAgICAgbmF0aXZlRXZlbnQ6IGFyZ3MuZXZlbnQsXG4gICAgICAgICAgb3BlcmF0aW9uOiBkcmFnT3BlcmF0aW9uLnNuYXBzaG90KCksXG4gICAgICAgICAgYnk6IGFyZ3MuYnksXG4gICAgICAgICAgdG86IGFyZ3MudG9cbiAgICAgICAgfSxcbiAgICAgICAgKF9hID0gYXJncy5jYW5jZWxhYmxlKSAhPSBudWxsID8gX2EgOiB0cnVlXG4gICAgICApO1xuICAgICAgaWYgKChfYiA9IGFyZ3MucHJvcGFnYXRlKSAhPSBudWxsID8gX2IgOiB0cnVlKSB7XG4gICAgICAgIHRoaXMubWFuYWdlci5tb25pdG9yLmRpc3BhdGNoKFwiZHJhZ21vdmVcIiwgZXZlbnQpO1xuICAgICAgfVxuICAgICAgcXVldWVNaWNyb3Rhc2soKCkgPT4ge1xuICAgICAgICB2YXIgX2EyLCBfYjIsIF9jMywgX2QsIF9lO1xuICAgICAgICBpZiAoZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IChfZSA9IGFyZ3MudG8pICE9IG51bGwgPyBfZSA6IHtcbiAgICAgICAgICB4OiBkcmFnT3BlcmF0aW9uLnBvc2l0aW9uLmN1cnJlbnQueCArICgoX2IyID0gKF9hMiA9IGFyZ3MuYnkpID09IG51bGwgPyB2b2lkIDAgOiBfYTIueCkgIT0gbnVsbCA/IF9iMiA6IDApLFxuICAgICAgICAgIHk6IGRyYWdPcGVyYXRpb24ucG9zaXRpb24uY3VycmVudC55ICsgKChfZCA9IChfYzMgPSBhcmdzLmJ5KSA9PSBudWxsID8gdm9pZCAwIDogX2MzLnkpICE9IG51bGwgPyBfZCA6IDApXG4gICAgICAgIH07XG4gICAgICAgIGRyYWdPcGVyYXRpb24ucG9zaXRpb24uY3VycmVudCA9IGNvb3JkaW5hdGVzO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIFN0b3BzIHRoZSBjdXJyZW50IGRyYWcgb3BlcmF0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0gYXJncyAtIENvbmZpZ3VyYXRpb24gZm9yIHN0b3BwaW5nIHRoZSBvcGVyYXRpb25cbiAgICogQHBhcmFtIGFyZ3MuZXZlbnQgLSBUaGUgZXZlbnQgdGhhdCB0cmlnZ2VyZWQgdGhlIHN0b3BcbiAgICogQHBhcmFtIGFyZ3MuY2FuY2VsZWQgLSBXaGV0aGVyIHRoZSBvcGVyYXRpb24gd2FzIGNhbmNlbGVkXG4gICAqIEByZW1hcmtzXG4gICAqIFRoaXMgbWV0aG9kOlxuICAgKiAtIERpc3BhdGNoZXMgYSBkcmFnZW5kIGV2ZW50XG4gICAqIC0gQWxsb3dzIHN1c3BlbnNpb24gb2YgdGhlIG9wZXJhdGlvblxuICAgKiAtIEhhbmRsZXMgY2xlYW51cCBvZiB0aGUgb3BlcmF0aW9uIHN0YXRlXG4gICAqL1xuICBzdG9wKGFyZ3MgPSB7fSkge1xuICAgIHJldHVybiB1bnRyYWNrZWQoKCkgPT4ge1xuICAgICAgdmFyIF9hLCBfYjtcbiAgICAgIGNvbnN0IHsgZHJhZ09wZXJhdGlvbiB9ID0gdGhpcy5tYW5hZ2VyO1xuICAgICAgY29uc3QgeyBjb250cm9sbGVyIH0gPSBkcmFnT3BlcmF0aW9uO1xuICAgICAgaWYgKCFjb250cm9sbGVyIHx8IGNvbnRyb2xsZXIuc2lnbmFsLmFib3J0ZWQpIHJldHVybjtcbiAgICAgIGxldCBwcm9taXNlO1xuICAgICAgY29uc3Qgc3VzcGVuZCA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgb3V0cHV0ID0ge1xuICAgICAgICAgIHJlc3VtZTogKCkgPT4ge1xuICAgICAgICAgIH0sXG4gICAgICAgICAgYWJvcnQ6ICgpID0+IHtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgb3V0cHV0LnJlc3VtZSA9IHJlc29sdmU7XG4gICAgICAgICAgb3V0cHV0LmFib3J0ID0gcmVqZWN0O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICAgIH07XG4gICAgICBjb250cm9sbGVyLmFib3J0KCk7XG4gICAgICBjb25zdCBlbmQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMubWFuYWdlci5yZW5kZXJlci5yZW5kZXJpbmcudGhlbigoKSA9PiB7XG4gICAgICAgICAgZHJhZ09wZXJhdGlvbi5zdGF0dXMuc2V0KFwiZHJvcHBlZFwiIC8qIERyb3BwZWQgKi8pO1xuICAgICAgICAgIGNvbnN0IGRyb3BwaW5nID0gdW50cmFja2VkKFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICB2YXIgX2EyO1xuICAgICAgICAgICAgICByZXR1cm4gKChfYTIgPSBkcmFnT3BlcmF0aW9uLnNvdXJjZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hMi5zdGF0dXMpID09PSBcImRyb3BwaW5nXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgICBjb25zdCBjbGVhbnVwID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGRyYWdPcGVyYXRpb24uY29udHJvbGxlciA9PT0gY29udHJvbGxlcikge1xuICAgICAgICAgICAgICBkcmFnT3BlcmF0aW9uLmNvbnRyb2xsZXIgPSB2b2lkIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkcmFnT3BlcmF0aW9uLnJlc2V0KCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAoZHJvcHBpbmcpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgc291cmNlIH0gPSBkcmFnT3BlcmF0aW9uO1xuICAgICAgICAgICAgY29uc3QgZGlzcG9zZSA9IGVmZmVjdCgoKSA9PiB7XG4gICAgICAgICAgICAgIGlmICgoc291cmNlID09IG51bGwgPyB2b2lkIDAgOiBzb3VyY2Uuc3RhdHVzKSA9PT0gXCJpZGxlXCIpIHtcbiAgICAgICAgICAgICAgICBkaXNwb3NlKCk7XG4gICAgICAgICAgICAgICAgY2xlYW51cCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tYW5hZ2VyLnJlbmRlcmVyLnJlbmRlcmluZy50aGVuKGNsZWFudXApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgZHJhZ09wZXJhdGlvbi5jYW5jZWxlZCA9IChfYSA9IGFyZ3MuY2FuY2VsZWQpICE9IG51bGwgPyBfYSA6IGZhbHNlO1xuICAgICAgdGhpcy5tYW5hZ2VyLm1vbml0b3IuZGlzcGF0Y2goXCJkcmFnZW5kXCIsIHtcbiAgICAgICAgbmF0aXZlRXZlbnQ6IGFyZ3MuZXZlbnQsXG4gICAgICAgIG9wZXJhdGlvbjogZHJhZ09wZXJhdGlvbi5zbmFwc2hvdCgpLFxuICAgICAgICBjYW5jZWxlZDogKF9iID0gYXJncy5jYW5jZWxlZCkgIT0gbnVsbCA/IF9iIDogZmFsc2UsXG4gICAgICAgIHN1c3BlbmRcbiAgICAgIH0pO1xuICAgICAgaWYgKHByb21pc2UpIHtcbiAgICAgICAgcHJvbWlzZS50aGVuKGVuZCkuY2F0Y2goKCkgPT4gZHJhZ09wZXJhdGlvbi5yZXNldCgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVuZCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG4vLyBzcmMvY29yZS9zZW5zb3JzL3NlbnNvci50c1xudmFyIFNlbnNvciA9IGNsYXNzIGV4dGVuZHMgUGx1Z2luIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgc2Vuc29yIGluc3RhbmNlLlxuICAgKlxuICAgKiBAcGFyYW0gbWFuYWdlciAtIFRoZSBkcmFnIGRyb3AgbWFuYWdlciBpbnN0YW5jZVxuICAgKiBAcGFyYW0gb3B0aW9ucyAtIE9wdGlvbmFsIHNlbnNvciBjb25maWd1cmF0aW9uXG4gICAqL1xuICBjb25zdHJ1Y3RvcihtYW5hZ2VyLCBvcHRpb25zKSB7XG4gICAgc3VwZXIobWFuYWdlciwgb3B0aW9ucyk7XG4gICAgdGhpcy5tYW5hZ2VyID0gbWFuYWdlcjtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG59O1xuXG4vLyBzcmMvY29yZS9zZW5zb3JzL2FjdGl2YXRpb24udHNcbnZhciBBY3RpdmF0aW9uQ29udHJvbGxlciA9IGNsYXNzIGV4dGVuZHMgQWJvcnRDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoY29uc3RyYWludHMsIG9uQWN0aXZhdGUpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuY29uc3RyYWludHMgPSBjb25zdHJhaW50cztcbiAgICB0aGlzLm9uQWN0aXZhdGUgPSBvbkFjdGl2YXRlO1xuICAgIHRoaXMuYWN0aXZhdGVkID0gZmFsc2U7XG4gICAgZm9yIChjb25zdCBjb25zdHJhaW50IG9mIGNvbnN0cmFpbnRzICE9IG51bGwgPyBjb25zdHJhaW50cyA6IFtdKSB7XG4gICAgICBjb25zdHJhaW50LmNvbnRyb2xsZXIgPSB0aGlzO1xuICAgIH1cbiAgfVxuICBvbkV2ZW50KGV2ZW50KSB7XG4gICAgdmFyIF9hO1xuICAgIGlmICh0aGlzLmFjdGl2YXRlZCkgcmV0dXJuO1xuICAgIGlmICgoX2EgPSB0aGlzLmNvbnN0cmFpbnRzKSA9PSBudWxsID8gdm9pZCAwIDogX2EubGVuZ3RoKSB7XG4gICAgICBmb3IgKGNvbnN0IGNvbnN0cmFpbnQgb2YgdGhpcy5jb25zdHJhaW50cykge1xuICAgICAgICBjb25zdHJhaW50Lm9uRXZlbnQoZXZlbnQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFjdGl2YXRlKGV2ZW50KTtcbiAgICB9XG4gIH1cbiAgYWN0aXZhdGUoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5hY3RpdmF0ZWQpIHJldHVybjtcbiAgICB0aGlzLmFjdGl2YXRlZCA9IHRydWU7XG4gICAgdGhpcy5vbkFjdGl2YXRlKGV2ZW50KTtcbiAgfVxuICBhYm9ydChldmVudCkge1xuICAgIHRoaXMuYWN0aXZhdGVkID0gZmFsc2U7XG4gICAgc3VwZXIuYWJvcnQoZXZlbnQpO1xuICB9XG59O1xudmFyIF9jb250cm9sbGVyO1xudmFyIEFjdGl2YXRpb25Db25zdHJhaW50ID0gY2xhc3Mge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICBfX3ByaXZhdGVBZGQodGhpcywgX2NvbnRyb2xsZXIpO1xuICB9XG4gIHNldCBjb250cm9sbGVyKGNvbnRyb2xsZXIpIHtcbiAgICBfX3ByaXZhdGVTZXQodGhpcywgX2NvbnRyb2xsZXIsIGNvbnRyb2xsZXIpO1xuICAgIGNvbnRyb2xsZXIuc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCAoKSA9PiB0aGlzLmFib3J0KCkpO1xuICB9XG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGUgYWN0aXZhdGlvbiBpcyB0cmlnZ2VyZWQuXG4gICAqL1xuICBhY3RpdmF0ZShldmVudCkge1xuICAgIHZhciBfYTtcbiAgICAoX2EgPSBfX3ByaXZhdGVHZXQodGhpcywgX2NvbnRyb2xsZXIpKSA9PSBudWxsID8gdm9pZCAwIDogX2EuYWN0aXZhdGUoZXZlbnQpO1xuICB9XG59O1xuX2NvbnRyb2xsZXIgPSBuZXcgV2Vha01hcCgpO1xuXG4vLyBzcmMvY29yZS9tb2RpZmllcnMvbW9kaWZpZXIudHNcbnZhciBNb2RpZmllciA9IGNsYXNzIGV4dGVuZHMgUGx1Z2luIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgbW9kaWZpZXIgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwYXJhbSBtYW5hZ2VyIC0gVGhlIGRyYWcgYW5kIGRyb3AgbWFuYWdlciB0aGF0IG93bnMgdGhpcyBtb2RpZmllclxuICAgKiBAcGFyYW0gb3B0aW9ucyAtIE9wdGlvbmFsIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBtb2RpZmllclxuICAgKi9cbiAgY29uc3RydWN0b3IobWFuYWdlciwgb3B0aW9ucykge1xuICAgIHN1cGVyKG1hbmFnZXIsIG9wdGlvbnMpO1xuICAgIHRoaXMubWFuYWdlciA9IG1hbmFnZXI7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuICAvKipcbiAgICogQXBwbGllcyB0aGUgbW9kaWZpZXIgdG8gdGhlIGN1cnJlbnQgZHJhZyBvcGVyYXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSBvcGVyYXRpb24gLSBUaGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgZHJhZyBvcGVyYXRpb25cbiAgICogQHJldHVybnMgVGhlIHRyYW5zZm9ybWVkIGNvb3JkaW5hdGVzXG4gICAqXG4gICAqIEByZW1hcmtzXG4gICAqIE92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIGltcGxlbWVudCBjdXN0b20gdHJhbnNmb3JtYXRpb24gbG9naWMuXG4gICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIHJldHVybnMgdGhlIG9yaWdpbmFsIHRyYW5zZm9ybSB1bmNoYW5nZWQuXG4gICAqL1xuICBhcHBseShvcGVyYXRpb24pIHtcbiAgICByZXR1cm4gb3BlcmF0aW9uLnRyYW5zZm9ybTtcbiAgfVxufTtcblxuLy8gc3JjL2NvcmUvbWFuYWdlci9yZWdpc3RyeS50c1xudmFyIERyYWdEcm9wUmVnaXN0cnkgPSBjbGFzcyB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IHJlZ2lzdHJ5IGluc3RhbmNlLlxuICAgKlxuICAgKiBAcGFyYW0gbWFuYWdlciAtIFRoZSBkcmFnIGFuZCBkcm9wIG1hbmFnZXIgdGhhdCBvd25zIHRoaXMgcmVnaXN0cnlcbiAgICovXG4gIGNvbnN0cnVjdG9yKG1hbmFnZXIpIHtcbiAgICAvKiogUmVnaXN0cnkgZm9yIGRyYWdnYWJsZSBlbnRpdGllcyAqL1xuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IG5ldyBFbnRpdHlSZWdpc3RyeSgpO1xuICAgIC8qKiBSZWdpc3RyeSBmb3IgZHJvcHBhYmxlIGVudGl0aWVzICovXG4gICAgdGhpcy5kcm9wcGFibGVzID0gbmV3IEVudGl0eVJlZ2lzdHJ5KCk7XG4gICAgdGhpcy5wbHVnaW5zID0gbmV3IFBsdWdpblJlZ2lzdHJ5KG1hbmFnZXIpO1xuICAgIHRoaXMuc2Vuc29ycyA9IG5ldyBQbHVnaW5SZWdpc3RyeShtYW5hZ2VyKTtcbiAgICB0aGlzLm1vZGlmaWVycyA9IG5ldyBQbHVnaW5SZWdpc3RyeShtYW5hZ2VyKTtcbiAgfVxuICByZWdpc3RlcihpbnB1dCwgb3B0aW9ucykge1xuICAgIGlmIChpbnB1dCBpbnN0YW5jZW9mIERyYWdnYWJsZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5yZWdpc3RlcihpbnB1dC5pZCwgaW5wdXQpO1xuICAgIH1cbiAgICBpZiAoaW5wdXQgaW5zdGFuY2VvZiBEcm9wcGFibGUpIHtcbiAgICAgIHJldHVybiB0aGlzLmRyb3BwYWJsZXMucmVnaXN0ZXIoaW5wdXQuaWQsIGlucHV0KTtcbiAgICB9XG4gICAgaWYgKGlucHV0LnByb3RvdHlwZSBpbnN0YW5jZW9mIE1vZGlmaWVyKSB7XG4gICAgICByZXR1cm4gdGhpcy5tb2RpZmllcnMucmVnaXN0ZXIoaW5wdXQsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBpZiAoaW5wdXQucHJvdG90eXBlIGluc3RhbmNlb2YgU2Vuc29yKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZW5zb3JzLnJlZ2lzdGVyKGlucHV0LCBvcHRpb25zKTtcbiAgICB9XG4gICAgaWYgKGlucHV0LnByb3RvdHlwZSBpbnN0YW5jZW9mIFBsdWdpbikge1xuICAgICAgcmV0dXJuIHRoaXMucGx1Z2lucy5yZWdpc3RlcihpbnB1dCwgb3B0aW9ucyk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgaW5zdGFuY2UgdHlwZVwiKTtcbiAgfVxuICB1bnJlZ2lzdGVyKGlucHV0KSB7XG4gICAgaWYgKGlucHV0IGluc3RhbmNlb2YgRW50aXR5KSB7XG4gICAgICBpZiAoaW5wdXQgaW5zdGFuY2VvZiBEcmFnZ2FibGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy51bnJlZ2lzdGVyKGlucHV0LmlkLCBpbnB1dCk7XG4gICAgICB9XG4gICAgICBpZiAoaW5wdXQgaW5zdGFuY2VvZiBEcm9wcGFibGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJvcHBhYmxlcy51bnJlZ2lzdGVyKGlucHV0LmlkLCBpbnB1dCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKGlucHV0LnByb3RvdHlwZSBpbnN0YW5jZW9mIE1vZGlmaWVyKSB7XG4gICAgICByZXR1cm4gdGhpcy5tb2RpZmllcnMudW5yZWdpc3RlcihpbnB1dCk7XG4gICAgfVxuICAgIGlmIChpbnB1dC5wcm90b3R5cGUgaW5zdGFuY2VvZiBTZW5zb3IpIHtcbiAgICAgIHJldHVybiB0aGlzLnNlbnNvcnMudW5yZWdpc3RlcihpbnB1dCk7XG4gICAgfVxuICAgIGlmIChpbnB1dC5wcm90b3R5cGUgaW5zdGFuY2VvZiBQbHVnaW4pIHtcbiAgICAgIHJldHVybiB0aGlzLnBsdWdpbnMudW5yZWdpc3RlcihpbnB1dCk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgaW5zdGFuY2UgdHlwZVwiKTtcbiAgfVxuICAvKipcbiAgICogRGVzdHJveXMgYWxsIHJlZ2lzdGVyZWQgZW50aXRpZXMgYW5kIGNsZWFucyB1cCByZXNvdXJjZXMuXG4gICAqXG4gICAqIEByZW1hcmtzXG4gICAqIFRoaXMgbWV0aG9kOlxuICAgKiAtIERlc3Ryb3lzIGFsbCBkcmFnZ2FibGUgYW5kIGRyb3BwYWJsZSBlbnRpdGllc1xuICAgKiAtIERlc3Ryb3lzIGFsbCBwbHVnaW5zLCBzZW5zb3JzLCBhbmQgbW9kaWZpZXJzXG4gICAqIC0gQ2xlYW5zIHVwIGFueSBhc3NvY2lhdGVkIHJlc291cmNlc1xuICAgKi9cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZGVzdHJveSgpO1xuICAgIHRoaXMuZHJvcHBhYmxlcy5kZXN0cm95KCk7XG4gICAgdGhpcy5wbHVnaW5zLmRlc3Ryb3koKTtcbiAgICB0aGlzLnNlbnNvcnMuZGVzdHJveSgpO1xuICAgIHRoaXMubW9kaWZpZXJzLmRlc3Ryb3koKTtcbiAgfVxufTtcbnZhciBfdHJhbnNmb3JtX2RlYywgX3RhcmdldF9kZWMsIF9zb3VyY2VfZGVjLCBfbW9kaWZpZXJzX2RlYzIsIF90YXJnZXRJZGVudGlmaWVyX2RlYywgX3NvdXJjZUlkZW50aWZpZXJfZGVjLCBfYWN0aXZhdG9yRXZlbnRfZGVjLCBfY2FuY2VsZWRfZGVjLCBfc2hhcGVfZGVjMiwgX21hbmFnZXIyLCBfcHJldmlvdXNTb3VyY2UsIF9zaGFwZTIsIF9pbml0NiwgX2NhbmNlbGVkLCBfYWN0aXZhdG9yRXZlbnQsIF9zb3VyY2VJZGVudGlmaWVyLCBfdGFyZ2V0SWRlbnRpZmllciwgX21vZGlmaWVyczIsIF90cmFuc2Zvcm07XG5fc2hhcGVfZGVjMiA9IFtkZXJpdmVkXSwgX2NhbmNlbGVkX2RlYyA9IFtyZWFjdGl2ZV0sIF9hY3RpdmF0b3JFdmVudF9kZWMgPSBbcmVhY3RpdmVdLCBfc291cmNlSWRlbnRpZmllcl9kZWMgPSBbcmVhY3RpdmVdLCBfdGFyZ2V0SWRlbnRpZmllcl9kZWMgPSBbcmVhY3RpdmVdLCBfbW9kaWZpZXJzX2RlYzIgPSBbcmVhY3RpdmVdLCBfc291cmNlX2RlYyA9IFtkZXJpdmVkXSwgX3RhcmdldF9kZWMgPSBbZGVyaXZlZF0sIF90cmFuc2Zvcm1fZGVjID0gW2Rlcml2ZWRdO1xudmFyIERyYWdPcGVyYXRpb24gPSBjbGFzcyB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGRyYWcgb3BlcmF0aW9uIGluc3RhbmNlLlxuICAgKlxuICAgKiBAcGFyYW0gbWFuYWdlciAtIFRoZSBkcmFnIGFuZCBkcm9wIG1hbmFnZXIgdGhhdCBvd25zIHRoaXMgb3BlcmF0aW9uXG4gICAqL1xuICBjb25zdHJ1Y3RvcihtYW5hZ2VyKSB7XG4gICAgX19ydW5Jbml0aWFsaXplcnMoX2luaXQ2LCA1LCB0aGlzKTtcbiAgICBfX3ByaXZhdGVBZGQodGhpcywgX21hbmFnZXIyKTtcbiAgICBfX3ByaXZhdGVBZGQodGhpcywgX3ByZXZpb3VzU291cmNlKTtcbiAgICBfX3ByaXZhdGVBZGQodGhpcywgX3NoYXBlMiwgbmV3IFZhbHVlSGlzdG9yeShcbiAgICAgIHZvaWQgMCxcbiAgICAgIChhLCBiKSA9PiBhICYmIGIgPyBhLmVxdWFscyhiKSA6IGEgPT09IGJcbiAgICApKTtcbiAgICAvKiogQ3VycmVudCBzdGF0dXMgb2YgdGhlIGRyYWcgb3BlcmF0aW9uICovXG4gICAgdGhpcy5zdGF0dXMgPSBuZXcgU3RhdHVzKCk7XG4gICAgX19wcml2YXRlQWRkKHRoaXMsIF9jYW5jZWxlZCwgX19ydW5Jbml0aWFsaXplcnMoX2luaXQ2LCA4LCB0aGlzLCBmYWxzZSkpLCBfX3J1bkluaXRpYWxpemVycyhfaW5pdDYsIDExLCB0aGlzKTtcbiAgICBfX3ByaXZhdGVBZGQodGhpcywgX2FjdGl2YXRvckV2ZW50LCBfX3J1bkluaXRpYWxpemVycyhfaW5pdDYsIDEyLCB0aGlzLCBudWxsKSksIF9fcnVuSW5pdGlhbGl6ZXJzKF9pbml0NiwgMTUsIHRoaXMpO1xuICAgIF9fcHJpdmF0ZUFkZCh0aGlzLCBfc291cmNlSWRlbnRpZmllciwgX19ydW5Jbml0aWFsaXplcnMoX2luaXQ2LCAxNiwgdGhpcywgbnVsbCkpLCBfX3J1bkluaXRpYWxpemVycyhfaW5pdDYsIDE5LCB0aGlzKTtcbiAgICBfX3ByaXZhdGVBZGQodGhpcywgX3RhcmdldElkZW50aWZpZXIsIF9fcnVuSW5pdGlhbGl6ZXJzKF9pbml0NiwgMjAsIHRoaXMsIG51bGwpKSwgX19ydW5Jbml0aWFsaXplcnMoX2luaXQ2LCAyMywgdGhpcyk7XG4gICAgX19wcml2YXRlQWRkKHRoaXMsIF9tb2RpZmllcnMyLCBfX3J1bkluaXRpYWxpemVycyhfaW5pdDYsIDI0LCB0aGlzLCBbXSkpLCBfX3J1bkluaXRpYWxpemVycyhfaW5pdDYsIDI3LCB0aGlzKTtcbiAgICAvKiogQ3VycmVudCBwb3NpdGlvbiBvZiB0aGUgZHJhZ2dlZCBlbnRpdHkgKi9cbiAgICB0aGlzLnBvc2l0aW9uID0gbmV3IFBvc2l0aW9uKHsgeDogMCwgeTogMCB9KTtcbiAgICBfX3ByaXZhdGVBZGQodGhpcywgX3RyYW5zZm9ybSwgeyB4OiAwLCB5OiAwIH0pO1xuICAgIF9fcHJpdmF0ZVNldCh0aGlzLCBfbWFuYWdlcjIsIG1hbmFnZXIpO1xuICB9XG4gIGdldCBzaGFwZSgpIHtcbiAgICBjb25zdCB7IGN1cnJlbnQsIGluaXRpYWwsIHByZXZpb3VzIH0gPSBfX3ByaXZhdGVHZXQodGhpcywgX3NoYXBlMik7XG4gICAgaWYgKCFjdXJyZW50IHx8ICFpbml0aWFsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHsgY3VycmVudCwgaW5pdGlhbCwgcHJldmlvdXMgfTtcbiAgfVxuICAvKipcbiAgICogU2V0cyB0aGUgc2hhcGUgb2YgdGhlIGRyYWdnZWQgZW50aXR5LlxuICAgKlxuICAgKiBAcGFyYW0gdmFsdWUgLSBUaGUgbmV3IHNoYXBlIG9yIG51bGwgdG8gcmVzZXRcbiAgICovXG4gIHNldCBzaGFwZSh2YWx1ZSkge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIF9fcHJpdmF0ZUdldCh0aGlzLCBfc2hhcGUyKS5yZXNldCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBfX3ByaXZhdGVHZXQodGhpcywgX3NoYXBlMikuY3VycmVudCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICBnZXQgc291cmNlKCkge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCBpZGVudGlmaWVyID0gdGhpcy5zb3VyY2VJZGVudGlmaWVyO1xuICAgIGlmIChpZGVudGlmaWVyID09IG51bGwpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IHZhbHVlID0gX19wcml2YXRlR2V0KHRoaXMsIF9tYW5hZ2VyMikucmVnaXN0cnkuZHJhZ2dhYmxlcy5nZXQoaWRlbnRpZmllcik7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBfX3ByaXZhdGVTZXQodGhpcywgX3ByZXZpb3VzU291cmNlLCB2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiAoX2EgPSB2YWx1ZSAhPSBudWxsID8gdmFsdWUgOiBfX3ByaXZhdGVHZXQodGhpcywgX3ByZXZpb3VzU291cmNlKSkgIT0gbnVsbCA/IF9hIDogbnVsbDtcbiAgfVxuICBnZXQgdGFyZ2V0KCkge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCBpZGVudGlmaWVyID0gdGhpcy50YXJnZXRJZGVudGlmaWVyO1xuICAgIHJldHVybiBpZGVudGlmaWVyICE9IG51bGwgPyAoX2EgPSBfX3ByaXZhdGVHZXQodGhpcywgX21hbmFnZXIyKS5yZWdpc3RyeS5kcm9wcGFibGVzLmdldChpZGVudGlmaWVyKSkgIT0gbnVsbCA/IF9hIDogbnVsbCA6IG51bGw7XG4gIH1cbiAgZ2V0IHRyYW5zZm9ybSgpIHtcbiAgICBjb25zdCB7IHgsIHkgfSA9IHRoaXMucG9zaXRpb24uZGVsdGE7XG4gICAgbGV0IHRyYW5zZm9ybSA9IHsgeCwgeSB9O1xuICAgIGZvciAoY29uc3QgbW9kaWZpZXIgb2YgdGhpcy5tb2RpZmllcnMpIHtcbiAgICAgIHRyYW5zZm9ybSA9IG1vZGlmaWVyLmFwcGx5KF9fc3ByZWFkUHJvcHMoX19zcHJlYWRWYWx1ZXMoe30sIHRoaXMuc25hcHNob3QoKSksIHtcbiAgICAgICAgdHJhbnNmb3JtXG4gICAgICB9KSk7XG4gICAgfVxuICAgIF9fcHJpdmF0ZVNldCh0aGlzLCBfdHJhbnNmb3JtLCB0cmFuc2Zvcm0pO1xuICAgIHJldHVybiB0cmFuc2Zvcm07XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBzbmFwc2hvdCBvZiB0aGUgY3VycmVudCBkcmFnIG9wZXJhdGlvbiBzdGF0ZS5cbiAgICpcbiAgICogQHJldHVybnMgQW4gaW1tdXRhYmxlIHNuYXBzaG90IG9mIHRoZSBjdXJyZW50IG9wZXJhdGlvbiBzdGF0ZVxuICAgKi9cbiAgc25hcHNob3QoKSB7XG4gICAgcmV0dXJuIHVudHJhY2tlZCgoKSA9PiAoe1xuICAgICAgc291cmNlOiB0aGlzLnNvdXJjZSxcbiAgICAgIHRhcmdldDogdGhpcy50YXJnZXQsXG4gICAgICBhY3RpdmF0b3JFdmVudDogdGhpcy5hY3RpdmF0b3JFdmVudCxcbiAgICAgIHRyYW5zZm9ybTogX19wcml2YXRlR2V0KHRoaXMsIF90cmFuc2Zvcm0pLFxuICAgICAgc2hhcGU6IHRoaXMuc2hhcGUgPyBzbmFwc2hvdCh0aGlzLnNoYXBlKSA6IG51bGwsXG4gICAgICBwb3NpdGlvbjogc25hcHNob3QodGhpcy5wb3NpdGlvbiksXG4gICAgICBzdGF0dXM6IHNuYXBzaG90KHRoaXMuc3RhdHVzKSxcbiAgICAgIGNhbmNlbGVkOiB0aGlzLmNhbmNlbGVkXG4gICAgfSkpO1xuICB9XG4gIC8qKlxuICAgKiBSZXNldHMgdGhlIGRyYWcgb3BlcmF0aW9uIHRvIGl0cyBpbml0aWFsIHN0YXRlLlxuICAgKlxuICAgKiBAcmVtYXJrc1xuICAgKiBUaGlzIG1ldGhvZDpcbiAgICogLSBTZXRzIHN0YXR1cyB0byBpZGxlXG4gICAqIC0gQ2xlYXJzIHNvdXJjZSBhbmQgdGFyZ2V0IGlkZW50aWZpZXJzXG4gICAqIC0gUmVzZXRzIHNoYXBlIGhpc3RvcnlcbiAgICogLSBSZXNldHMgcG9zaXRpb24gYW5kIHRyYW5zZm9ybVxuICAgKiAtIENsZWFycyBtb2RpZmllcnNcbiAgICovXG4gIHJlc2V0KCkge1xuICAgIGJhdGNoKCgpID0+IHtcbiAgICAgIHRoaXMuc3RhdHVzLnNldChcImlkbGVcIiAvKiBJZGxlICovKTtcbiAgICAgIHRoaXMuc291cmNlSWRlbnRpZmllciA9IG51bGw7XG4gICAgICB0aGlzLnRhcmdldElkZW50aWZpZXIgPSBudWxsO1xuICAgICAgX19wcml2YXRlR2V0KHRoaXMsIF9zaGFwZTIpLnJlc2V0KCk7XG4gICAgICB0aGlzLnBvc2l0aW9uLnJlc2V0KHsgeDogMCwgeTogMCB9KTtcbiAgICAgIF9fcHJpdmF0ZVNldCh0aGlzLCBfdHJhbnNmb3JtLCB7IHg6IDAsIHk6IDAgfSk7XG4gICAgICB0aGlzLm1vZGlmaWVycyA9IFtdO1xuICAgIH0pO1xuICB9XG59O1xuX2luaXQ2ID0gX19kZWNvcmF0b3JTdGFydChudWxsKTtcbl9tYW5hZ2VyMiA9IG5ldyBXZWFrTWFwKCk7XG5fcHJldmlvdXNTb3VyY2UgPSBuZXcgV2Vha01hcCgpO1xuX3NoYXBlMiA9IG5ldyBXZWFrTWFwKCk7XG5fY2FuY2VsZWQgPSBuZXcgV2Vha01hcCgpO1xuX2FjdGl2YXRvckV2ZW50ID0gbmV3IFdlYWtNYXAoKTtcbl9zb3VyY2VJZGVudGlmaWVyID0gbmV3IFdlYWtNYXAoKTtcbl90YXJnZXRJZGVudGlmaWVyID0gbmV3IFdlYWtNYXAoKTtcbl9tb2RpZmllcnMyID0gbmV3IFdlYWtNYXAoKTtcbl90cmFuc2Zvcm0gPSBuZXcgV2Vha01hcCgpO1xuX19kZWNvcmF0ZUVsZW1lbnQoX2luaXQ2LCAyLCBcInNoYXBlXCIsIF9zaGFwZV9kZWMyLCBEcmFnT3BlcmF0aW9uKTtcbl9fZGVjb3JhdGVFbGVtZW50KF9pbml0NiwgNCwgXCJjYW5jZWxlZFwiLCBfY2FuY2VsZWRfZGVjLCBEcmFnT3BlcmF0aW9uLCBfY2FuY2VsZWQpO1xuX19kZWNvcmF0ZUVsZW1lbnQoX2luaXQ2LCA0LCBcImFjdGl2YXRvckV2ZW50XCIsIF9hY3RpdmF0b3JFdmVudF9kZWMsIERyYWdPcGVyYXRpb24sIF9hY3RpdmF0b3JFdmVudCk7XG5fX2RlY29yYXRlRWxlbWVudChfaW5pdDYsIDQsIFwic291cmNlSWRlbnRpZmllclwiLCBfc291cmNlSWRlbnRpZmllcl9kZWMsIERyYWdPcGVyYXRpb24sIF9zb3VyY2VJZGVudGlmaWVyKTtcbl9fZGVjb3JhdGVFbGVtZW50KF9pbml0NiwgNCwgXCJ0YXJnZXRJZGVudGlmaWVyXCIsIF90YXJnZXRJZGVudGlmaWVyX2RlYywgRHJhZ09wZXJhdGlvbiwgX3RhcmdldElkZW50aWZpZXIpO1xuX19kZWNvcmF0ZUVsZW1lbnQoX2luaXQ2LCA0LCBcIm1vZGlmaWVyc1wiLCBfbW9kaWZpZXJzX2RlYzIsIERyYWdPcGVyYXRpb24sIF9tb2RpZmllcnMyKTtcbl9fZGVjb3JhdGVFbGVtZW50KF9pbml0NiwgMiwgXCJzb3VyY2VcIiwgX3NvdXJjZV9kZWMsIERyYWdPcGVyYXRpb24pO1xuX19kZWNvcmF0ZUVsZW1lbnQoX2luaXQ2LCAyLCBcInRhcmdldFwiLCBfdGFyZ2V0X2RlYywgRHJhZ09wZXJhdGlvbik7XG5fX2RlY29yYXRlRWxlbWVudChfaW5pdDYsIDIsIFwidHJhbnNmb3JtXCIsIF90cmFuc2Zvcm1fZGVjLCBEcmFnT3BlcmF0aW9uKTtcbl9fZGVjb3JhdG9yTWV0YWRhdGEoX2luaXQ2LCBEcmFnT3BlcmF0aW9uKTtcblxuLy8gc3JjL2NvcmUvbWFuYWdlci9yZW5kZXJlci50c1xudmFyIGRlZmF1bHRSZW5kZXJlciA9IHtcbiAgZ2V0IHJlbmRlcmluZygpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cbn07XG5cbi8vIHNyYy9jb3JlL21hbmFnZXIvbWFuYWdlci50c1xuZnVuY3Rpb24gcmVzb2x2ZUN1c3RvbWl6YWJsZSh2YWx1ZSwgZGVmYXVsdHMpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHZhbHVlKGRlZmF1bHRzKTtcbiAgfVxuICByZXR1cm4gdmFsdWUgIT0gbnVsbCA/IHZhbHVlIDogZGVmYXVsdHM7XG59XG52YXIgRHJhZ0Ryb3BNYW5hZ2VyID0gY2xhc3Mge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBkcmFnIGFuZCBkcm9wIG1hbmFnZXIgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwYXJhbSBjb25maWcgLSBPcHRpb25hbCBjb25maWd1cmF0aW9uIGZvciBwbHVnaW5zLCBzZW5zb3JzLCBtb2RpZmllcnMsIGFuZCByZW5kZXJlclxuICAgKi9cbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgLyoqXG4gICAgICogQ2xlYW5zIHVwIHJlc291cmNlcyBhbmQgc3RvcHMgYW55IGFjdGl2ZSBkcmFnIG9wZXJhdGlvbnMuXG4gICAgICovXG4gICAgdGhpcy5kZXN0cm95ID0gKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmRyYWdPcGVyYXRpb24uc3RhdHVzLmlkbGUpIHtcbiAgICAgICAgdGhpcy5hY3Rpb25zLnN0b3AoeyBjYW5jZWxlZDogdHJ1ZSB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZHJhZ09wZXJhdGlvbi5tb2RpZmllcnMuZm9yRWFjaCgobW9kaWZpZXIpID0+IG1vZGlmaWVyLmRlc3Ryb3koKSk7XG4gICAgICB0aGlzLnJlZ2lzdHJ5LmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuY29sbGlzaW9uT2JzZXJ2ZXIuZGVzdHJveSgpO1xuICAgIH07XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IHJhdyA9IGNvbmZpZyAhPSBudWxsID8gY29uZmlnIDoge307XG4gICAgY29uc3QgcGx1Z2lucyA9IHJlc29sdmVDdXN0b21pemFibGUocmF3LnBsdWdpbnMsIFtdKTtcbiAgICBjb25zdCBzZW5zb3JzID0gcmVzb2x2ZUN1c3RvbWl6YWJsZShyYXcuc2Vuc29ycywgW10pO1xuICAgIGNvbnN0IG1vZGlmaWVycyA9IHJlc29sdmVDdXN0b21pemFibGUocmF3Lm1vZGlmaWVycywgW10pO1xuICAgIGNvbnN0IHJlbmRlcmVyID0gKF9hID0gcmF3LnJlbmRlcmVyKSAhPSBudWxsID8gX2EgOiBkZWZhdWx0UmVuZGVyZXI7XG4gICAgY29uc3QgbW9uaXRvciA9IG5ldyBEcmFnRHJvcE1vbml0b3IodGhpcyk7XG4gICAgY29uc3QgcmVnaXN0cnkgPSBuZXcgRHJhZ0Ryb3BSZWdpc3RyeSh0aGlzKTtcbiAgICB0aGlzLnJlZ2lzdHJ5ID0gcmVnaXN0cnk7XG4gICAgdGhpcy5tb25pdG9yID0gbW9uaXRvcjtcbiAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgdGhpcy5hY3Rpb25zID0gbmV3IERyYWdBY3Rpb25zKHRoaXMpO1xuICAgIHRoaXMuZHJhZ09wZXJhdGlvbiA9IG5ldyBEcmFnT3BlcmF0aW9uKHRoaXMpO1xuICAgIHRoaXMuY29sbGlzaW9uT2JzZXJ2ZXIgPSBuZXcgQ29sbGlzaW9uT2JzZXJ2ZXIodGhpcyk7XG4gICAgdGhpcy5wbHVnaW5zID0gW0NvbGxpc2lvbk5vdGlmaWVyLCAuLi5wbHVnaW5zXTtcbiAgICB0aGlzLm1vZGlmaWVycyA9IG1vZGlmaWVycztcbiAgICB0aGlzLnNlbnNvcnMgPSBzZW5zb3JzO1xuICAgIGNvbnN0IHsgZGVzdHJveSB9ID0gdGhpcztcbiAgICBjb25zdCBjbGVhbnVwID0gZWZmZWN0cygoKSA9PiB7XG4gICAgICB2YXIgX2EyLCBfYiwgX2MzO1xuICAgICAgY29uc3QgY3VycmVudE1vZGlmaWVycyA9IHVudHJhY2tlZCgoKSA9PiB0aGlzLmRyYWdPcGVyYXRpb24ubW9kaWZpZXJzKTtcbiAgICAgIGNvbnN0IG1hbmFnZXJNb2RpZmllcnMgPSB0aGlzLm1vZGlmaWVycztcbiAgICAgIGZvciAoY29uc3QgbW9kaWZpZXIgb2YgY3VycmVudE1vZGlmaWVycykge1xuICAgICAgICBpZiAoIW1hbmFnZXJNb2RpZmllcnMuaW5jbHVkZXMobW9kaWZpZXIpKSB7XG4gICAgICAgICAgbW9kaWZpZXIuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmRyYWdPcGVyYXRpb24ubW9kaWZpZXJzID0gKF9jMyA9IChfYiA9IChfYTIgPSB0aGlzLmRyYWdPcGVyYXRpb24uc291cmNlKSA9PSBudWxsID8gdm9pZCAwIDogX2EyLm1vZGlmaWVycykgPT0gbnVsbCA/IHZvaWQgMCA6IF9iLm1hcCgobW9kaWZpZXIpID0+IHtcbiAgICAgICAgY29uc3QgeyBwbHVnaW4sIG9wdGlvbnMgfSA9IGRlc2NyaXB0b3IobW9kaWZpZXIpO1xuICAgICAgICByZXR1cm4gbmV3IHBsdWdpbih0aGlzLCBvcHRpb25zKTtcbiAgICAgIH0pKSAhPSBudWxsID8gX2MzIDogbWFuYWdlck1vZGlmaWVycztcbiAgICB9KTtcbiAgICB0aGlzLmRlc3Ryb3kgPSAoKSA9PiB7XG4gICAgICBjbGVhbnVwKCk7XG4gICAgICBkZXN0cm95KCk7XG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogR2V0cyB0aGUgbGlzdCBvZiBhY3RpdmUgcGx1Z2lucy5cbiAgICpcbiAgICogQHJldHVybnMgQXJyYXkgb2YgYWN0aXZlIHBsdWdpbiBpbnN0YW5jZXNcbiAgICovXG4gIGdldCBwbHVnaW5zKCkge1xuICAgIHJldHVybiB0aGlzLnJlZ2lzdHJ5LnBsdWdpbnMudmFsdWVzO1xuICB9XG4gIC8qKlxuICAgKiBTZXRzIHRoZSBsaXN0IG9mIHBsdWdpbnMgdG8gYmUgdXNlZCBieSB0aGUgbWFuYWdlci5cbiAgICpcbiAgICogQHBhcmFtIHBsdWdpbnMgLSBBcnJheSBvZiBwbHVnaW4gY29uc3RydWN0b3JzIG9yIGluc3RhbmNlc1xuICAgKi9cbiAgc2V0IHBsdWdpbnMocGx1Z2lucykge1xuICAgIHRoaXMucmVnaXN0cnkucGx1Z2lucy52YWx1ZXMgPSBwbHVnaW5zO1xuICB9XG4gIC8qKlxuICAgKiBHZXRzIHRoZSBsaXN0IG9mIGFjdGl2ZSBtb2RpZmllcnMuXG4gICAqXG4gICAqIEByZXR1cm5zIEFycmF5IG9mIGFjdGl2ZSBtb2RpZmllciBpbnN0YW5jZXNcbiAgICovXG4gIGdldCBtb2RpZmllcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVnaXN0cnkubW9kaWZpZXJzLnZhbHVlcztcbiAgfVxuICAvKipcbiAgICogU2V0cyB0aGUgbGlzdCBvZiBtb2RpZmllcnMgdG8gYmUgdXNlZCBieSB0aGUgbWFuYWdlci5cbiAgICpcbiAgICogQHBhcmFtIG1vZGlmaWVycyAtIEFycmF5IG9mIG1vZGlmaWVyIGNvbnN0cnVjdG9ycyBvciBpbnN0YW5jZXNcbiAgICovXG4gIHNldCBtb2RpZmllcnMobW9kaWZpZXJzKSB7XG4gICAgdGhpcy5yZWdpc3RyeS5tb2RpZmllcnMudmFsdWVzID0gbW9kaWZpZXJzO1xuICB9XG4gIC8qKlxuICAgKiBHZXRzIHRoZSBsaXN0IG9mIGFjdGl2ZSBzZW5zb3JzLlxuICAgKlxuICAgKiBAcmV0dXJucyBBcnJheSBvZiBhY3RpdmUgc2Vuc29yIGluc3RhbmNlc1xuICAgKi9cbiAgZ2V0IHNlbnNvcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVnaXN0cnkuc2Vuc29ycy52YWx1ZXM7XG4gIH1cbiAgLyoqXG4gICAqIFNldHMgdGhlIGxpc3Qgb2Ygc2Vuc29ycyB0byBiZSB1c2VkIGJ5IHRoZSBtYW5hZ2VyLlxuICAgKlxuICAgKiBAcGFyYW0gc2Vuc29ycyAtIEFycmF5IG9mIHNlbnNvciBjb25zdHJ1Y3RvcnMgb3IgaW5zdGFuY2VzXG4gICAqL1xuICBzZXQgc2Vuc29ycyhzZW5zb3JzKSB7XG4gICAgdGhpcy5yZWdpc3RyeS5zZW5zb3JzLnZhbHVlcyA9IHNlbnNvcnM7XG4gIH1cbn07XG5cbmV4cG9ydCB7IEFjdGl2YXRpb25Db25zdHJhaW50LCBBY3RpdmF0aW9uQ29udHJvbGxlciwgQ29sbGlzaW9uUHJpb3JpdHksIENvbGxpc2lvblR5cGUsIENvcmVQbHVnaW4sIERyYWdEcm9wTWFuYWdlciwgU3RhdHVzIGFzIERyYWdPcGVyYXRpb25TdGF0dXMsIERyYWdnYWJsZSwgRHJvcHBhYmxlLCBNb2RpZmllciwgUGx1Z2luLCBQbHVnaW5SZWdpc3RyeSwgU2Vuc29yLCBjb25maWd1cmF0b3IsIGNvbmZpZ3VyZSwgZGVzY3JpcHRvciwgcmVzb2x2ZUN1c3RvbWl6YWJsZSwgc29ydENvbGxpc2lvbnMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwKICAgICJpbXBvcnQgeyBSZWN0YW5nbGUgfSBmcm9tICdAZG5kLWtpdC9nZW9tZXRyeSc7XG5cbnZhciBfX3R5cGVFcnJvciA9IChtc2cpID0+IHtcbiAgdGhyb3cgVHlwZUVycm9yKG1zZyk7XG59O1xudmFyIF9fYWNjZXNzQ2hlY2sgPSAob2JqLCBtZW1iZXIsIG1zZykgPT4gbWVtYmVyLmhhcyhvYmopIHx8IF9fdHlwZUVycm9yKFwiQ2Fubm90IFwiICsgbXNnKTtcbnZhciBfX3ByaXZhdGVHZXQgPSAob2JqLCBtZW1iZXIsIGdldHRlcikgPT4gKF9fYWNjZXNzQ2hlY2sob2JqLCBtZW1iZXIsIFwicmVhZCBmcm9tIHByaXZhdGUgZmllbGRcIiksIG1lbWJlci5nZXQob2JqKSk7XG52YXIgX19wcml2YXRlQWRkID0gKG9iaiwgbWVtYmVyLCB2YWx1ZSkgPT4gbWVtYmVyLmhhcyhvYmopID8gX190eXBlRXJyb3IoXCJDYW5ub3QgYWRkIHRoZSBzYW1lIHByaXZhdGUgbWVtYmVyIG1vcmUgdGhhbiBvbmNlXCIpIDogbWVtYmVyIGluc3RhbmNlb2YgV2Vha1NldCA/IG1lbWJlci5hZGQob2JqKSA6IG1lbWJlci5zZXQob2JqLCB2YWx1ZSk7XG52YXIgX19wcml2YXRlU2V0ID0gKG9iaiwgbWVtYmVyLCB2YWx1ZSwgc2V0dGVyKSA9PiAoX19hY2Nlc3NDaGVjayhvYmosIG1lbWJlciwgXCJ3cml0ZSB0byBwcml2YXRlIGZpZWxkXCIpLCBtZW1iZXIuc2V0KG9iaiwgdmFsdWUpLCB2YWx1ZSk7XG52YXIgX19wcml2YXRlTWV0aG9kID0gKG9iaiwgbWVtYmVyLCBtZXRob2QpID0+IChfX2FjY2Vzc0NoZWNrKG9iaiwgbWVtYmVyLCBcImFjY2VzcyBwcml2YXRlIG1ldGhvZFwiKSwgbWV0aG9kKTtcblxuLy8gc3JjL3V0aWxpdGllcy90eXBlLWd1YXJkcy9pc0tleWZyYW1lRWZmZWN0LnRzXG5mdW5jdGlvbiBpc0tleWZyYW1lRWZmZWN0KGVmZmVjdCkge1xuICBpZiAoIWVmZmVjdCkgcmV0dXJuIGZhbHNlO1xuICBpZiAoZWZmZWN0IGluc3RhbmNlb2YgS2V5ZnJhbWVFZmZlY3QpIHJldHVybiB0cnVlO1xuICByZXR1cm4gXCJnZXRLZXlmcmFtZXNcIiBpbiBlZmZlY3QgJiYgdHlwZW9mIGVmZmVjdC5nZXRLZXlmcmFtZXMgPT09IFwiZnVuY3Rpb25cIjtcbn1cblxuLy8gc3JjL3V0aWxpdGllcy9hbmltYXRpb25zL2dldEZpbmFsS2V5ZnJhbWUudHNcbmZ1bmN0aW9uIGdldEZpbmFsS2V5ZnJhbWUoZWxlbWVudCwgbWF0Y2gpIHtcbiAgY29uc3QgYW5pbWF0aW9uczIgPSBlbGVtZW50LmdldEFuaW1hdGlvbnMoKTtcbiAgbGV0IHJlc3VsdCA9IG51bGw7XG4gIGZvciAoY29uc3QgYW5pbWF0aW9uIG9mIGFuaW1hdGlvbnMyKSB7XG4gICAgaWYgKGFuaW1hdGlvbi5wbGF5U3RhdGUgIT09IFwicnVubmluZ1wiKSBjb250aW51ZTtcbiAgICBjb25zdCB7IGVmZmVjdCB9ID0gYW5pbWF0aW9uO1xuICAgIGNvbnN0IGtleWZyYW1lcyA9IGlzS2V5ZnJhbWVFZmZlY3QoZWZmZWN0KSA/IGVmZmVjdC5nZXRLZXlmcmFtZXMoKSA6IFtdO1xuICAgIGNvbnN0IG1hdGNoZWRLZXlmcmFtZXMgPSBrZXlmcmFtZXMuZmlsdGVyKG1hdGNoKTtcbiAgICBpZiAobWF0Y2hlZEtleWZyYW1lcy5sZW5ndGggPiAwKSB7XG4gICAgICByZXN1bHQgPSBbbWF0Y2hlZEtleWZyYW1lc1ttYXRjaGVkS2V5ZnJhbWVzLmxlbmd0aCAtIDFdLCBhbmltYXRpb25dO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBzcmMvdXRpbGl0aWVzL2JvdW5kaW5nLXJlY3RhbmdsZS9nZXRCb3VuZGluZ1JlY3RhbmdsZS50c1xuZnVuY3Rpb24gZ2V0Qm91bmRpbmdSZWN0YW5nbGUoZWxlbWVudCkge1xuICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIHRvcCwgbGVmdCwgYm90dG9tLCByaWdodCB9ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgcmV0dXJuIHsgd2lkdGgsIGhlaWdodCwgdG9wLCBsZWZ0LCBib3R0b20sIHJpZ2h0IH07XG59XG5cbi8vIHNyYy91dGlsaXRpZXMvdHlwZS1ndWFyZHMvaXNXaW5kb3cudHNcbmZ1bmN0aW9uIGlzV2luZG93KGVsZW1lbnQpIHtcbiAgY29uc3QgZWxlbWVudFN0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlbGVtZW50KTtcbiAgcmV0dXJuIGVsZW1lbnRTdHJpbmcgPT09IFwiW29iamVjdCBXaW5kb3ddXCIgfHwgLy8gSW4gRWxlY3Ryb24gY29udGV4dCB0aGUgV2luZG93IG9iamVjdCBzZXJpYWxpemVzIHRvIFtvYmplY3QgZ2xvYmFsXVxuICBlbGVtZW50U3RyaW5nID09PSBcIltvYmplY3QgZ2xvYmFsXVwiO1xufVxuXG4vLyBzcmMvdXRpbGl0aWVzL3R5cGUtZ3VhcmRzL2lzTm9kZS50c1xuZnVuY3Rpb24gaXNOb2RlKG5vZGUpIHtcbiAgcmV0dXJuIFwibm9kZVR5cGVcIiBpbiBub2RlO1xufVxuXG4vLyBzcmMvdXRpbGl0aWVzL2V4ZWN1dGlvbi1jb250ZXh0L2dldFdpbmRvdy50c1xuZnVuY3Rpb24gZ2V0V2luZG93KHRhcmdldCkge1xuICB2YXIgX2EsIF9iLCBfYztcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICByZXR1cm4gd2luZG93O1xuICB9XG4gIGlmIChpc1dpbmRvdyh0YXJnZXQpKSB7XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuICBpZiAoIWlzTm9kZSh0YXJnZXQpKSB7XG4gICAgcmV0dXJuIHdpbmRvdztcbiAgfVxuICBpZiAoXCJkZWZhdWx0Vmlld1wiIGluIHRhcmdldCkge1xuICAgIHJldHVybiAoX2EgPSB0YXJnZXQuZGVmYXVsdFZpZXcpICE9IG51bGwgPyBfYSA6IHdpbmRvdztcbiAgfVxuICByZXR1cm4gKF9jID0gKF9iID0gdGFyZ2V0Lm93bmVyRG9jdW1lbnQpID09IG51bGwgPyB2b2lkIDAgOiBfYi5kZWZhdWx0VmlldykgIT0gbnVsbCA/IF9jIDogd2luZG93O1xufVxuXG4vLyBzcmMvdXRpbGl0aWVzL3R5cGUtZ3VhcmRzL2lzRG9jdW1lbnQudHNcbmZ1bmN0aW9uIGlzRG9jdW1lbnQobm9kZSkge1xuICBjb25zdCB7IERvY3VtZW50OiBEb2N1bWVudDIgfSA9IGdldFdpbmRvdyhub2RlKTtcbiAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBEb2N1bWVudDIgfHwgXCJub2RlVHlwZVwiIGluIG5vZGUgJiYgbm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9OT0RFO1xufVxuXG4vLyBzcmMvdXRpbGl0aWVzL3R5cGUtZ3VhcmRzL2lzSFRNTEVsZW1lbnQudHNcbmZ1bmN0aW9uIGlzSFRNTEVsZW1lbnQobm9kZSkge1xuICBpZiAoIW5vZGUgfHwgaXNXaW5kb3cobm9kZSkpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBnZXRXaW5kb3cobm9kZSkuSFRNTEVsZW1lbnQgfHwgXCJuYW1lc3BhY2VVUklcIiBpbiBub2RlICYmIHR5cGVvZiBub2RlLm5hbWVzcGFjZVVSSSA9PT0gXCJzdHJpbmdcIiAmJiBub2RlLm5hbWVzcGFjZVVSSS5lbmRzV2l0aChcImh0bWxcIik7XG59XG5cbi8vIHNyYy91dGlsaXRpZXMvdHlwZS1ndWFyZHMvaXNTVkdFbGVtZW50LnRzXG5mdW5jdGlvbiBpc1NWR0VsZW1lbnQobm9kZSkge1xuICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIGdldFdpbmRvdyhub2RlKS5TVkdFbGVtZW50IHx8IFwibmFtZXNwYWNlVVJJXCIgaW4gbm9kZSAmJiB0eXBlb2Ygbm9kZS5uYW1lc3BhY2VVUkkgPT09IFwic3RyaW5nXCIgJiYgbm9kZS5uYW1lc3BhY2VVUkkuZW5kc1dpdGgoXCJzdmdcIik7XG59XG5cbi8vIHNyYy91dGlsaXRpZXMvZXhlY3V0aW9uLWNvbnRleHQvZ2V0RG9jdW1lbnQudHNcbmZ1bmN0aW9uIGdldERvY3VtZW50KHRhcmdldCkge1xuICBpZiAoIXRhcmdldCkge1xuICAgIHJldHVybiBkb2N1bWVudDtcbiAgfVxuICBpZiAoaXNXaW5kb3codGFyZ2V0KSkge1xuICAgIHJldHVybiB0YXJnZXQuZG9jdW1lbnQ7XG4gIH1cbiAgaWYgKCFpc05vZGUodGFyZ2V0KSkge1xuICAgIHJldHVybiBkb2N1bWVudDtcbiAgfVxuICBpZiAoaXNEb2N1bWVudCh0YXJnZXQpKSB7XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuICBpZiAoaXNIVE1MRWxlbWVudCh0YXJnZXQpIHx8IGlzU1ZHRWxlbWVudCh0YXJnZXQpKSB7XG4gICAgcmV0dXJuIHRhcmdldC5vd25lckRvY3VtZW50O1xuICB9XG4gIHJldHVybiBkb2N1bWVudDtcbn1cblxuLy8gc3JjL3V0aWxpdGllcy9ib3VuZGluZy1yZWN0YW5nbGUvZ2V0Vmlld3BvcnRCb3VuZGluZ1JlY3RhbmdsZS50c1xuZnVuY3Rpb24gZ2V0Vmlld3BvcnRCb3VuZGluZ1JlY3RhbmdsZShlbGVtZW50KSB7XG4gIHZhciBfYSwgX2IsIF9jLCBfZDtcbiAgY29uc3QgeyBkb2N1bWVudEVsZW1lbnQgfSA9IGdldERvY3VtZW50KGVsZW1lbnQpO1xuICBjb25zdCB2diA9IGdldFdpbmRvdyhlbGVtZW50KS52aXN1YWxWaWV3cG9ydDtcbiAgY29uc3Qgd2lkdGggPSAoX2EgPSB2diA9PSBudWxsID8gdm9pZCAwIDogdnYud2lkdGgpICE9IG51bGwgPyBfYSA6IGRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcbiAgY29uc3QgaGVpZ2h0ID0gKF9iID0gdnYgPT0gbnVsbCA/IHZvaWQgMCA6IHZ2LmhlaWdodCkgIT0gbnVsbCA/IF9iIDogZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcbiAgY29uc3QgdG9wID0gKF9jID0gdnYgPT0gbnVsbCA/IHZvaWQgMCA6IHZ2Lm9mZnNldFRvcCkgIT0gbnVsbCA/IF9jIDogMDtcbiAgY29uc3QgbGVmdCA9IChfZCA9IHZ2ID09IG51bGwgPyB2b2lkIDAgOiB2di5vZmZzZXRMZWZ0KSAhPSBudWxsID8gX2QgOiAwO1xuICByZXR1cm4ge1xuICAgIHRvcCxcbiAgICBsZWZ0LFxuICAgIHJpZ2h0OiBsZWZ0ICsgd2lkdGgsXG4gICAgYm90dG9tOiB0b3AgKyBoZWlnaHQsXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0XG4gIH07XG59XG5cbi8vIHNyYy91dGlsaXRpZXMvYm91bmRpbmctcmVjdGFuZ2xlL2lzT3ZlcmZsb3dWaXNpYmxlLnRzXG5mdW5jdGlvbiBpc092ZXJmbG93VmlzaWJsZShlbGVtZW50LCBzdHlsZSkge1xuICBpZiAoaXNEZXRhaWxzRWxlbWVudChlbGVtZW50KSAmJiBlbGVtZW50Lm9wZW4gPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IHsgb3ZlcmZsb3csIG92ZXJmbG93WCwgb3ZlcmZsb3dZIH0gPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICByZXR1cm4gb3ZlcmZsb3cgPT09IFwidmlzaWJsZVwiICYmIG92ZXJmbG93WCA9PT0gXCJ2aXNpYmxlXCIgJiYgb3ZlcmZsb3dZID09PSBcInZpc2libGVcIjtcbn1cbmZ1bmN0aW9uIGlzRGV0YWlsc0VsZW1lbnQoZWxlbWVudCkge1xuICByZXR1cm4gZWxlbWVudC50YWdOYW1lID09PSBcIkRFVEFJTFNcIjtcbn1cblxuLy8gc3JjL3V0aWxpdGllcy9ib3VuZGluZy1yZWN0YW5nbGUvZ2V0VmlzaWJsZUJvdW5kaW5nUmVjdGFuZ2xlLnRzXG5mdW5jdGlvbiBnZXRWaXNpYmxlQm91bmRpbmdSZWN0YW5nbGUoZWxlbWVudCwgYm91bmRpbmdDbGllbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSwgbWFyZ2luID0gMCkge1xuICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lO1xuICBsZXQgcmVjdCA9IGJvdW5kaW5nQ2xpZW50UmVjdDtcbiAgY29uc3QgeyBvd25lckRvY3VtZW50IH0gPSBlbGVtZW50O1xuICBjb25zdCBvd25lcldpbmRvdyA9IChfYSA9IG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcpICE9IG51bGwgPyBfYSA6IHdpbmRvdztcbiAgbGV0IGFuY2VzdG9yID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICB3aGlsZSAoYW5jZXN0b3IgJiYgYW5jZXN0b3IgIT09IG93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgaWYgKCFpc092ZXJmbG93VmlzaWJsZShhbmNlc3RvcikpIHtcbiAgICAgIGNvbnN0IGFuY2VzdG9yUmVjdCA9IGFuY2VzdG9yLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3QgbWFyZ2luVG9wID0gbWFyZ2luICogKGFuY2VzdG9yUmVjdC5ib3R0b20gLSBhbmNlc3RvclJlY3QudG9wKTtcbiAgICAgIGNvbnN0IG1hcmdpblJpZ2h0ID0gbWFyZ2luICogKGFuY2VzdG9yUmVjdC5yaWdodCAtIGFuY2VzdG9yUmVjdC5sZWZ0KTtcbiAgICAgIGNvbnN0IG1hcmdpbkJvdHRvbSA9IG1hcmdpbiAqIChhbmNlc3RvclJlY3QuYm90dG9tIC0gYW5jZXN0b3JSZWN0LnRvcCk7XG4gICAgICBjb25zdCBtYXJnaW5MZWZ0ID0gbWFyZ2luICogKGFuY2VzdG9yUmVjdC5yaWdodCAtIGFuY2VzdG9yUmVjdC5sZWZ0KTtcbiAgICAgIHJlY3QgPSB7XG4gICAgICAgIHRvcDogTWF0aC5tYXgocmVjdC50b3AsIGFuY2VzdG9yUmVjdC50b3AgLSBtYXJnaW5Ub3ApLFxuICAgICAgICByaWdodDogTWF0aC5taW4ocmVjdC5yaWdodCwgYW5jZXN0b3JSZWN0LnJpZ2h0ICsgbWFyZ2luUmlnaHQpLFxuICAgICAgICBib3R0b206IE1hdGgubWluKHJlY3QuYm90dG9tLCBhbmNlc3RvclJlY3QuYm90dG9tICsgbWFyZ2luQm90dG9tKSxcbiAgICAgICAgbGVmdDogTWF0aC5tYXgocmVjdC5sZWZ0LCBhbmNlc3RvclJlY3QubGVmdCAtIG1hcmdpbkxlZnQpLFxuICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgLy8gV2lsbCBiZSBjYWxjdWxhdGVkIG5leHRcbiAgICAgICAgaGVpZ2h0OiAwXG4gICAgICAgIC8vIFdpbGwgYmUgY2FsY3VsYXRlZCBuZXh0XG4gICAgICB9O1xuICAgICAgcmVjdC53aWR0aCA9IHJlY3QucmlnaHQgLSByZWN0LmxlZnQ7XG4gICAgICByZWN0LmhlaWdodCA9IHJlY3QuYm90dG9tIC0gcmVjdC50b3A7XG4gICAgfVxuICAgIGFuY2VzdG9yID0gYW5jZXN0b3IucGFyZW50RWxlbWVudDtcbiAgfVxuICBjb25zdCB2diA9IG93bmVyV2luZG93LnZpc3VhbFZpZXdwb3J0O1xuICBjb25zdCB2aWV3cG9ydFRvcCA9IChfYiA9IHZ2ID09IG51bGwgPyB2b2lkIDAgOiB2di5vZmZzZXRUb3ApICE9IG51bGwgPyBfYiA6IDA7XG4gIGNvbnN0IHZpZXdwb3J0TGVmdCA9IChfYyA9IHZ2ID09IG51bGwgPyB2b2lkIDAgOiB2di5vZmZzZXRMZWZ0KSAhPSBudWxsID8gX2MgOiAwO1xuICBjb25zdCB2aWV3cG9ydFdpZHRoID0gKF9kID0gdnYgPT0gbnVsbCA/IHZvaWQgMCA6IHZ2LndpZHRoKSAhPSBudWxsID8gX2QgOiBvd25lcldpbmRvdy5pbm5lcldpZHRoO1xuICBjb25zdCB2aWV3cG9ydEhlaWdodCA9IChfZSA9IHZ2ID09IG51bGwgPyB2b2lkIDAgOiB2di5oZWlnaHQpICE9IG51bGwgPyBfZSA6IG93bmVyV2luZG93LmlubmVySGVpZ2h0O1xuICBjb25zdCB2aWV3cG9ydE1hcmdpblkgPSBtYXJnaW4gKiB2aWV3cG9ydEhlaWdodDtcbiAgY29uc3Qgdmlld3BvcnRNYXJnaW5YID0gbWFyZ2luICogdmlld3BvcnRXaWR0aDtcbiAgcmVjdCA9IHtcbiAgICB0b3A6IE1hdGgubWF4KHJlY3QudG9wLCB2aWV3cG9ydFRvcCAtIHZpZXdwb3J0TWFyZ2luWSksXG4gICAgcmlnaHQ6IE1hdGgubWluKFxuICAgICAgcmVjdC5yaWdodCxcbiAgICAgIHZpZXdwb3J0TGVmdCArIHZpZXdwb3J0V2lkdGggKyB2aWV3cG9ydE1hcmdpblhcbiAgICApLFxuICAgIGJvdHRvbTogTWF0aC5taW4oXG4gICAgICByZWN0LmJvdHRvbSxcbiAgICAgIHZpZXdwb3J0VG9wICsgdmlld3BvcnRIZWlnaHQgKyB2aWV3cG9ydE1hcmdpbllcbiAgICApLFxuICAgIGxlZnQ6IE1hdGgubWF4KHJlY3QubGVmdCwgdmlld3BvcnRMZWZ0IC0gdmlld3BvcnRNYXJnaW5YKSxcbiAgICB3aWR0aDogMCxcbiAgICAvLyBXaWxsIGJlIGNhbGN1bGF0ZWQgbmV4dFxuICAgIGhlaWdodDogMFxuICAgIC8vIFdpbGwgYmUgY2FsY3VsYXRlZCBuZXh0XG4gIH07XG4gIHJlY3Qud2lkdGggPSByZWN0LnJpZ2h0IC0gcmVjdC5sZWZ0O1xuICByZWN0LmhlaWdodCA9IHJlY3QuYm90dG9tIC0gcmVjdC50b3A7XG4gIGlmIChyZWN0LndpZHRoIDwgMCkge1xuICAgIHJlY3Qud2lkdGggPSAwO1xuICB9XG4gIGlmIChyZWN0LmhlaWdodCA8IDApIHtcbiAgICByZWN0LmhlaWdodCA9IDA7XG4gIH1cbiAgcmV0dXJuIHJlY3Q7XG59XG5cbi8vIHNyYy91dGlsaXRpZXMvY29vcmRpbmF0ZXMvZ2V0RXZlbnRDb29yZGluYXRlcy50c1xuZnVuY3Rpb24gZ2V0RXZlbnRDb29yZGluYXRlcyhldmVudCkge1xuICByZXR1cm4ge1xuICAgIHg6IGV2ZW50LmNsaWVudFgsXG4gICAgeTogZXZlbnQuY2xpZW50WVxuICB9O1xufVxuXG4vLyBzcmMvdXRpbGl0aWVzL2V4ZWN1dGlvbi1jb250ZXh0L2NhblVzZURPTS50c1xudmFyIGNhblVzZURPTSA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHdpbmRvdy5kb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgIT09IFwidW5kZWZpbmVkXCI7XG5cbi8vIHNyYy91dGlsaXRpZXMvZXhlY3V0aW9uLWNvbnRleHQvZ2V0RG9jdW1lbnRzLnRzXG5mdW5jdGlvbiBnZXREb2N1bWVudHMocm9vdERvYyA9IGRvY3VtZW50LCBzZWVuID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKSkge1xuICBpZiAoc2Vlbi5oYXMocm9vdERvYykpIHJldHVybiBbXTtcbiAgc2Vlbi5hZGQocm9vdERvYyk7XG4gIGNvbnN0IGRvY3MgPSBbcm9vdERvY107XG4gIGZvciAoY29uc3QgZnJhbWUgb2YgQXJyYXkuZnJvbShcbiAgICByb290RG9jLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpZnJhbWUsIGZyYW1lXCIpXG4gICkpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2hpbGREb2MgPSBmcmFtZS5jb250ZW50RG9jdW1lbnQ7XG4gICAgICBpZiAoY2hpbGREb2MgJiYgIXNlZW4uaGFzKGNoaWxkRG9jKSkge1xuICAgICAgICBkb2NzLnB1c2goLi4uZ2V0RG9jdW1lbnRzKGNoaWxkRG9jLCBzZWVuKSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgIH1cbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IHdpbiA9IHJvb3REb2MuZGVmYXVsdFZpZXc7XG4gICAgaWYgKHdpbiAmJiB3aW4gIT09IHdpbmRvdy50b3ApIHtcbiAgICAgIGNvbnN0IHBhcmVudFdpbiA9IHdpbi5wYXJlbnQ7XG4gICAgICBpZiAocGFyZW50V2luICYmIHBhcmVudFdpbi5kb2N1bWVudCAmJiBwYXJlbnRXaW4uZG9jdW1lbnQgIT09IHJvb3REb2MpIHtcbiAgICAgICAgZG9jcy5wdXNoKC4uLmdldERvY3VtZW50cyhwYXJlbnRXaW4uZG9jdW1lbnQsIHNlZW4pKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgfVxuICByZXR1cm4gZG9jcztcbn1cblxuLy8gc3JjL3V0aWxpdGllcy9leGVjdXRpb24tY29udGV4dC9pc1NhZmFyaS50c1xuZnVuY3Rpb24gaXNTYWZhcmkoKSB7XG4gIHJldHVybiAvXigoPyFjaHJvbWV8YW5kcm9pZCkuKSpzYWZhcmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xufVxuXG4vLyBzcmMvdXRpbGl0aWVzL2V4ZWN1dGlvbi1jb250ZXh0L2dldEZpeGVkUG9zaXRpb25PZmZzZXQudHNcbmZ1bmN0aW9uIGdldEZpeGVkUG9zaXRpb25PZmZzZXQoKSB7XG4gIHZhciBfYSwgX2I7XG4gIGNvbnN0IHZ2ID0gaXNTYWZhcmkoKSA/IHdpbmRvdy52aXN1YWxWaWV3cG9ydCA6IG51bGw7XG4gIHJldHVybiB7XG4gICAgeDogKF9hID0gdnYgPT0gbnVsbCA/IHZvaWQgMCA6IHZ2Lm9mZnNldExlZnQpICE9IG51bGwgPyBfYSA6IDAsXG4gICAgeTogKF9iID0gdnYgPT0gbnVsbCA/IHZvaWQgMCA6IHZ2Lm9mZnNldFRvcCkgIT0gbnVsbCA/IF9iIDogMFxuICB9O1xufVxuXG4vLyBzcmMvdXRpbGl0aWVzL3R5cGUtZ3VhcmRzL2lzU2hhZG93Um9vdC50c1xuZnVuY3Rpb24gaXNTaGFkb3dSb290KHRhcmdldCkge1xuICBpZiAoIXRhcmdldCB8fCAhaXNOb2RlKHRhcmdldCkpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIHRhcmdldCBpbnN0YW5jZW9mIGdldFdpbmRvdyh0YXJnZXQpLlNoYWRvd1Jvb3Q7XG59XG5cbi8vIHNyYy91dGlsaXRpZXMvZXhlY3V0aW9uLWNvbnRleHQvZ2V0Um9vdC50c1xuZnVuY3Rpb24gZ2V0Um9vdCh0YXJnZXQpIHtcbiAgaWYgKHRhcmdldCAmJiBpc05vZGUodGFyZ2V0KSkge1xuICAgIGxldCByb290ID0gdGFyZ2V0LmdldFJvb3ROb2RlKCk7XG4gICAgaWYgKGlzU2hhZG93Um9vdChyb290KSkge1xuICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgfSBlbHNlIGlmIChyb290IGluc3RhbmNlb2YgRG9jdW1lbnQpIHtcbiAgICAgIHJldHVybiByb290O1xuICAgIH1cbiAgfVxuICByZXR1cm4gZ2V0RG9jdW1lbnQodGFyZ2V0KTtcbn1cblxuLy8gc3JjL3V0aWxpdGllcy9leGVjdXRpb24tY29udGV4dC9wcmVmZXJzUmVkdWNlZE1vdGlvbi50c1xuZnVuY3Rpb24gcHJlZmVyc1JlZHVjZWRNb3Rpb24od2luZG93Mikge1xuICByZXR1cm4gd2luZG93Mi5tYXRjaE1lZGlhKFwiKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSlcIikubWF0Y2hlcztcbn1cblxuLy8gc3JjL3V0aWxpdGllcy9lbGVtZW50L2Nsb25lRWxlbWVudC50c1xuZnVuY3Rpb24gY2xvbmVFbGVtZW50KGVsZW1lbnQpIHtcbiAgY29uc3Qgc2VsZWN0b3IgPSBcImlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0LCBjYW52YXMsIFtjb250ZW50ZWRpdGFibGVdXCI7XG4gIGNvbnN0IGNsb25lZEVsZW1lbnQgPSBlbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgY29uc3QgZmllbGRzID0gQXJyYXkuZnJvbShlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcbiAgY29uc3QgY2xvbmVkRmllbGRzID0gQXJyYXkuZnJvbShjbG9uZWRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcbiAgY2xvbmVkRmllbGRzLmZvckVhY2goKGZpZWxkLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IG9yaWdpbmFsRmllbGQgPSBmaWVsZHNbaW5kZXhdO1xuICAgIGlmIChpc0ZpZWxkKGZpZWxkKSAmJiBpc0ZpZWxkKG9yaWdpbmFsRmllbGQpKSB7XG4gICAgICBpZiAoZmllbGQudHlwZSAhPT0gXCJmaWxlXCIpIHtcbiAgICAgICAgZmllbGQudmFsdWUgPSBvcmlnaW5hbEZpZWxkLnZhbHVlO1xuICAgICAgfVxuICAgICAgaWYgKGZpZWxkLnR5cGUgPT09IFwicmFkaW9cIiAmJiBmaWVsZC5uYW1lKSB7XG4gICAgICAgIGZpZWxkLm5hbWUgPSBgQ2xvbmVkX18ke2ZpZWxkLm5hbWV9YDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlzQ2FudmFzRWxlbWVudChmaWVsZCkgJiYgaXNDYW52YXNFbGVtZW50KG9yaWdpbmFsRmllbGQpICYmIG9yaWdpbmFsRmllbGQud2lkdGggPiAwICYmIG9yaWdpbmFsRmllbGQuaGVpZ2h0ID4gMCkge1xuICAgICAgY29uc3QgZGVzdEN0eCA9IGZpZWxkLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgIGRlc3RDdHggPT0gbnVsbCA/IHZvaWQgMCA6IGRlc3RDdHguZHJhd0ltYWdlKG9yaWdpbmFsRmllbGQsIDAsIDApO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBjbG9uZWRFbGVtZW50O1xufVxuZnVuY3Rpb24gaXNGaWVsZChlbGVtZW50KSB7XG4gIHJldHVybiBcInZhbHVlXCIgaW4gZWxlbWVudDtcbn1cbmZ1bmN0aW9uIGlzQ2FudmFzRWxlbWVudChlbGVtZW50KSB7XG4gIHJldHVybiBlbGVtZW50LnRhZ05hbWUgPT09IFwiQ0FOVkFTXCI7XG59XG5cbi8vIHNyYy91dGlsaXRpZXMvZWxlbWVudC9nZXRFbGVtZW50RnJvbVBvaW50LnRzXG5mdW5jdGlvbiBnZXRFbGVtZW50RnJvbVBvaW50KHJvb3QsIHsgeCwgeSB9KSB7XG4gIGNvbnN0IGVsZW1lbnQgPSByb290LmVsZW1lbnRGcm9tUG9pbnQoeCwgeSk7XG4gIGlmIChpc0lGcmFtZUVsZW1lbnQoZWxlbWVudCkpIHtcbiAgICBjb25zdCB7IGNvbnRlbnREb2N1bWVudCB9ID0gZWxlbWVudDtcbiAgICBpZiAoY29udGVudERvY3VtZW50KSB7XG4gICAgICBjb25zdCB7IGxlZnQsIHRvcCB9ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHJldHVybiBnZXRFbGVtZW50RnJvbVBvaW50KGNvbnRlbnREb2N1bWVudCwge1xuICAgICAgICB4OiB4IC0gbGVmdCxcbiAgICAgICAgeTogeSAtIHRvcFxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBlbGVtZW50O1xufVxuZnVuY3Rpb24gaXNJRnJhbWVFbGVtZW50KGVsZW1lbnQpIHtcbiAgcmV0dXJuIChlbGVtZW50ID09IG51bGwgPyB2b2lkIDAgOiBlbGVtZW50LnRhZ05hbWUpID09PSBcIklGUkFNRVwiO1xufVxuXG4vLyBzcmMvdXRpbGl0aWVzL2VsZW1lbnQvcHJveGllZEVsZW1lbnRzLnRzXG52YXIgUHJveGllZEVsZW1lbnRzID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG5cbi8vIHNyYy91dGlsaXRpZXMvZWxlbWVudC9pc0ludGVyYWN0aXZlRWxlbWVudC50c1xuZnVuY3Rpb24gaXNJbnRlcmFjdGl2ZUVsZW1lbnQoZWxlbWVudCkge1xuICByZXR1cm4gQm9vbGVhbihnZXRJbnRlcmFjdGl2ZUVsZW1lbnQoZWxlbWVudCkpO1xufVxuZnVuY3Rpb24gZ2V0SW50ZXJhY3RpdmVFbGVtZW50KGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQuY2xvc2VzdChgXG4gICAgaW5wdXQ6bm90KFtkaXNhYmxlZF0pLFxuICAgIHNlbGVjdDpub3QoW2Rpc2FibGVkXSksXG4gICAgdGV4dGFyZWE6bm90KFtkaXNhYmxlZF0pLFxuICAgIGJ1dHRvbjpub3QoW2Rpc2FibGVkXSksXG4gICAgYVtocmVmXSxcbiAgICBbY29udGVudGVkaXRhYmxlXTpub3QoW2NvbnRlbnRlZGl0YWJsZT1cImZhbHNlXCJdKVxuICBgKTtcbn1cblxuLy8gc3JjL3V0aWxpdGllcy9ldmVudC1saXN0ZW5lcnMvTGlzdGVuZXJzLnRzXG52YXIgTGlzdGVuZXJzID0gY2xhc3Mge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmVudHJpZXMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuICAgIHRoaXMuY2xlYXIgPSAoKSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIHRoaXMuZW50cmllcykge1xuICAgICAgICBjb25zdCBbdGFyZ2V0LCB7IHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zIH1dID0gZW50cnk7XG4gICAgICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZW50cmllcy5jbGVhcigpO1xuICAgIH07XG4gIH1cbiAgYmluZCh0YXJnZXQsIGlucHV0KSB7XG4gICAgY29uc3QgZXZlbnRUYXJnZXRzID0gQXJyYXkuaXNBcnJheSh0YXJnZXQpID8gdGFyZ2V0IDogW3RhcmdldF07XG4gICAgY29uc3QgbGlzdGVuZXJzID0gQXJyYXkuaXNBcnJheShpbnB1dCkgPyBpbnB1dCA6IFtpbnB1dF07XG4gICAgY29uc3QgZW50cmllcyA9IFtdO1xuICAgIGZvciAoY29uc3QgdGFyZ2V0MiBvZiBldmVudFRhcmdldHMpIHtcbiAgICAgIGZvciAoY29uc3QgZGVzY3JpcHRvciBvZiBsaXN0ZW5lcnMpIHtcbiAgICAgICAgY29uc3QgeyB0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyB9ID0gZGVzY3JpcHRvcjtcbiAgICAgICAgY29uc3QgZW50cnkgPSBbdGFyZ2V0MiwgZGVzY3JpcHRvcl07XG4gICAgICAgIHRhcmdldDIuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuZW50cmllcy5hZGQoZW50cnkpO1xuICAgICAgICBlbnRyaWVzLnB1c2goZW50cnkpO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBhbGxFbnRyaWVzID0gdGhpcy5lbnRyaWVzO1xuICAgIHJldHVybiBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSB7XG4gICAgICAgIGNvbnN0IFt0YXJnZXQyLCB7IHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zIH1dID0gZW50cnk7XG4gICAgICAgIHRhcmdldDIucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyk7XG4gICAgICAgIGFsbEVudHJpZXMuZGVsZXRlKGVudHJ5KTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG59O1xuXG4vLyBzcmMvdXRpbGl0aWVzL2ZyYW1lL2dldEZyYW1lRWxlbWVudC50c1xuZnVuY3Rpb24gZ2V0RnJhbWVFbGVtZW50KGVsKSB7XG4gIGNvbnN0IHJlZldpbmRvdyA9IGVsID09IG51bGwgPyB2b2lkIDAgOiBlbC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuICBpZiAocmVmV2luZG93ICYmIHJlZldpbmRvdy5zZWxmICE9PSByZWZXaW5kb3cucGFyZW50KSB7XG4gICAgcmV0dXJuIHJlZldpbmRvdy5mcmFtZUVsZW1lbnQ7XG4gIH1cbn1cblxuLy8gc3JjL3V0aWxpdGllcy9mcmFtZS9nZXRGcmFtZUVsZW1lbnRzLnRzXG5mdW5jdGlvbiBnZXRGcmFtZUVsZW1lbnRzKGVsKSB7XG4gIGNvbnN0IGZyYW1lcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG4gIGxldCBmcmFtZSA9IGdldEZyYW1lRWxlbWVudChlbCk7XG4gIHdoaWxlIChmcmFtZSkge1xuICAgIGZyYW1lcy5hZGQoZnJhbWUpO1xuICAgIGZyYW1lID0gZ2V0RnJhbWVFbGVtZW50KGZyYW1lKTtcbiAgfVxuICByZXR1cm4gZnJhbWVzO1xufVxuXG4vLyBzcmMvdXRpbGl0aWVzL3NjaGVkdWxpbmcvdGltZW91dC50c1xuZnVuY3Rpb24gdGltZW91dChjYWxsYmFjaywgZHVyYXRpb24pIHtcbiAgY29uc3QgaWQgPSBzZXRUaW1lb3V0KGNhbGxiYWNrLCBkdXJhdGlvbik7XG4gIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQoaWQpO1xufVxuXG4vLyBzcmMvdXRpbGl0aWVzL3NjaGVkdWxpbmcvdGhyb3R0bGUudHNcbmZ1bmN0aW9uIHRocm90dGxlKGZ1bmMsIGxpbWl0KSB7XG4gIGNvbnN0IHRpbWUgPSAoKSA9PiBwZXJmb3JtYW5jZS5ub3coKTtcbiAgbGV0IGNhbmNlbDtcbiAgbGV0IGxhc3RSYW47XG4gIHJldHVybiBmdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXM7XG4gICAgaWYgKCFsYXN0UmFuKSB7XG4gICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgbGFzdFJhbiA9IHRpbWUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FuY2VsID09IG51bGwgPyB2b2lkIDAgOiBjYW5jZWwoKTtcbiAgICAgIGNhbmNlbCA9IHRpbWVvdXQoXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICAgIGxhc3RSYW4gPSB0aW1lKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGxpbWl0IC0gKHRpbWUoKSAtIGxhc3RSYW4pXG4gICAgICApO1xuICAgIH1cbiAgfTtcbn1cblxuLy8gc3JjL3V0aWxpdGllcy9ib3VuZGluZy1yZWN0YW5nbGUvaXNSZWN0RXF1YWwudHNcbmZ1bmN0aW9uIGlzUmVjdEVxdWFsKGEsIGIpIHtcbiAgaWYgKGEgPT09IGIpIHJldHVybiB0cnVlO1xuICBpZiAoIWEgfHwgIWIpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIGEudG9wID09IGIudG9wICYmIGEubGVmdCA9PSBiLmxlZnQgJiYgYS5yaWdodCA9PSBiLnJpZ2h0ICYmIGEuYm90dG9tID09IGIuYm90dG9tO1xufVxuXG4vLyBzcmMvdXRpbGl0aWVzL2JvdW5kaW5nLXJlY3RhbmdsZS9pc1Zpc2libGUudHNcbmZ1bmN0aW9uIGlzVmlzaWJsZShlbGVtZW50LCBib3VuZGluZ0NsaWVudFJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKSB7XG4gIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gZ2V0VmlzaWJsZUJvdW5kaW5nUmVjdGFuZ2xlKFxuICAgIGVsZW1lbnQsXG4gICAgYm91bmRpbmdDbGllbnRSZWN0XG4gICk7XG4gIHJldHVybiB3aWR0aCA+IDAgJiYgaGVpZ2h0ID4gMDtcbn1cblxuLy8gc3JjL3V0aWxpdGllcy9vYnNlcnZlcnMvUmVzaXplTm90aWZpZXIudHNcbnZhciBPYnNlcnZlciA9IGNhblVzZURPTSA/IFJlc2l6ZU9ic2VydmVyIDogY2xhc3MgTW9ja1Jlc2l6ZU9ic2VydmVyIHtcbiAgb2JzZXJ2ZSgpIHtcbiAgfVxuICB1bm9ic2VydmUoKSB7XG4gIH1cbiAgZGlzY29ubmVjdCgpIHtcbiAgfVxufTtcbnZhciBfaW5pdGlhbGl6ZWQ7XG52YXIgUmVzaXplTm90aWZpZXIgPSBjbGFzcyBleHRlbmRzIE9ic2VydmVyIHtcbiAgY29uc3RydWN0b3IoY2FsbGJhY2spIHtcbiAgICBzdXBlcigoZW50cmllcykgPT4ge1xuICAgICAgaWYgKCFfX3ByaXZhdGVHZXQodGhpcywgX2luaXRpYWxpemVkKSkge1xuICAgICAgICBfX3ByaXZhdGVTZXQodGhpcywgX2luaXRpYWxpemVkLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY2FsbGJhY2soZW50cmllcywgdGhpcyk7XG4gICAgfSk7XG4gICAgX19wcml2YXRlQWRkKHRoaXMsIF9pbml0aWFsaXplZCwgZmFsc2UpO1xuICB9XG59O1xuX2luaXRpYWxpemVkID0gbmV3IFdlYWtNYXAoKTtcblxuLy8gc3JjL3V0aWxpdGllcy9vYnNlcnZlcnMvUG9zaXRpb25PYnNlcnZlci50c1xudmFyIHRocmVzaG9sZCA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDEwMCB9LCAoXywgaW5kZXgpID0+IGluZGV4IC8gMTAwKTtcbnZhciBUSFJPVFRMRV9JTlRFUlZBTCA9IDc1O1xudmFyIF92aXNpYmxlLCBfcHJldmlvdXNCb3VuZGluZ0NsaWVudFJlY3QsIF9yZXNpemVPYnNlcnZlciwgX3Bvc2l0aW9uT2JzZXJ2ZXIsIF92aXNpYmlsaXR5T2JzZXJ2ZXIsIF9kZWJ1ZywgX2Rpc2Nvbm5lY3RlZCwgX29ic2VydmVQb3NpdGlvbiwgX1Bvc2l0aW9uT2JzZXJ2ZXJfaW5zdGFuY2VzLCBub3RpZnlfZm4sIHVwZGF0ZURlYnVnX2ZuO1xudmFyIFBvc2l0aW9uT2JzZXJ2ZXIgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNhbGxiYWNrLCBvcHRpb25zID0ge1xuICAgIGRlYnVnOiBmYWxzZSxcbiAgICBza2lwSW5pdGlhbDogZmFsc2VcbiAgfSkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIF9fcHJpdmF0ZUFkZCh0aGlzLCBfUG9zaXRpb25PYnNlcnZlcl9pbnN0YW5jZXMpO1xuICAgIHRoaXMuZGlzY29ubmVjdCA9ICgpID0+IHtcbiAgICAgIHZhciBfYSwgX2IsIF9jO1xuICAgICAgX19wcml2YXRlU2V0KHRoaXMsIF9kaXNjb25uZWN0ZWQsIHRydWUpO1xuICAgICAgKF9hID0gX19wcml2YXRlR2V0KHRoaXMsIF9yZXNpemVPYnNlcnZlcikpID09IG51bGwgPyB2b2lkIDAgOiBfYS5kaXNjb25uZWN0KCk7XG4gICAgICAoX2IgPSBfX3ByaXZhdGVHZXQodGhpcywgX3Bvc2l0aW9uT2JzZXJ2ZXIpKSA9PSBudWxsID8gdm9pZCAwIDogX2IuZGlzY29ubmVjdCgpO1xuICAgICAgX19wcml2YXRlR2V0KHRoaXMsIF92aXNpYmlsaXR5T2JzZXJ2ZXIpLmRpc2Nvbm5lY3QoKTtcbiAgICAgIChfYyA9IF9fcHJpdmF0ZUdldCh0aGlzLCBfZGVidWcpKSA9PSBudWxsID8gdm9pZCAwIDogX2MucmVtb3ZlKCk7XG4gICAgfTtcbiAgICBfX3ByaXZhdGVBZGQodGhpcywgX3Zpc2libGUsIHRydWUpO1xuICAgIF9fcHJpdmF0ZUFkZCh0aGlzLCBfcHJldmlvdXNCb3VuZGluZ0NsaWVudFJlY3QpO1xuICAgIF9fcHJpdmF0ZUFkZCh0aGlzLCBfcmVzaXplT2JzZXJ2ZXIpO1xuICAgIF9fcHJpdmF0ZUFkZCh0aGlzLCBfcG9zaXRpb25PYnNlcnZlcik7XG4gICAgX19wcml2YXRlQWRkKHRoaXMsIF92aXNpYmlsaXR5T2JzZXJ2ZXIpO1xuICAgIF9fcHJpdmF0ZUFkZCh0aGlzLCBfZGVidWcpO1xuICAgIF9fcHJpdmF0ZUFkZCh0aGlzLCBfZGlzY29ubmVjdGVkLCBmYWxzZSk7XG4gICAgX19wcml2YXRlQWRkKHRoaXMsIF9vYnNlcnZlUG9zaXRpb24sIHRocm90dGxlKCgpID0+IHtcbiAgICAgIHZhciBfYSwgX2IsIF9jO1xuICAgICAgY29uc3QgeyBlbGVtZW50IH0gPSB0aGlzO1xuICAgICAgKF9hID0gX19wcml2YXRlR2V0KHRoaXMsIF9wb3NpdGlvbk9ic2VydmVyKSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLmRpc2Nvbm5lY3QoKTtcbiAgICAgIGlmIChfX3ByaXZhdGVHZXQodGhpcywgX2Rpc2Nvbm5lY3RlZCkgfHwgIV9fcHJpdmF0ZUdldCh0aGlzLCBfdmlzaWJsZSkgfHwgIWVsZW1lbnQuaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qgcm9vdCA9IChfYiA9IGVsZW1lbnQub3duZXJEb2N1bWVudCkgIT0gbnVsbCA/IF9iIDogZG9jdW1lbnQ7XG4gICAgICBjb25zdCB7IGlubmVySGVpZ2h0LCBpbm5lcldpZHRoIH0gPSAoX2MgPSByb290LmRlZmF1bHRWaWV3KSAhPSBudWxsID8gX2MgOiB3aW5kb3c7XG4gICAgICBjb25zdCBjbGllbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IHZpc2libGVSZWN0ID0gZ2V0VmlzaWJsZUJvdW5kaW5nUmVjdGFuZ2xlKGVsZW1lbnQsIGNsaWVudFJlY3QpO1xuICAgICAgY29uc3QgeyB0b3AsIGxlZnQsIGJvdHRvbSwgcmlnaHQgfSA9IHZpc2libGVSZWN0O1xuICAgICAgY29uc3QgaW5zZXRUb3AgPSAtTWF0aC5mbG9vcih0b3ApO1xuICAgICAgY29uc3QgaW5zZXRMZWZ0ID0gLU1hdGguZmxvb3IobGVmdCk7XG4gICAgICBjb25zdCBpbnNldFJpZ2h0ID0gLU1hdGguZmxvb3IoaW5uZXJXaWR0aCAtIHJpZ2h0KTtcbiAgICAgIGNvbnN0IGluc2V0Qm90dG9tID0gLU1hdGguZmxvb3IoaW5uZXJIZWlnaHQgLSBib3R0b20pO1xuICAgICAgY29uc3Qgcm9vdE1hcmdpbiA9IGAke2luc2V0VG9wfXB4ICR7aW5zZXRSaWdodH1weCAke2luc2V0Qm90dG9tfXB4ICR7aW5zZXRMZWZ0fXB4YDtcbiAgICAgIHRoaXMuYm91bmRpbmdDbGllbnRSZWN0ID0gY2xpZW50UmVjdDtcbiAgICAgIF9fcHJpdmF0ZVNldCh0aGlzLCBfcG9zaXRpb25PYnNlcnZlciwgbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgICAgICAoZW50cmllcykgPT4ge1xuICAgICAgICAgIGNvbnN0IFtlbnRyeV0gPSBlbnRyaWVzO1xuICAgICAgICAgIGNvbnN0IHsgaW50ZXJzZWN0aW9uUmVjdCB9ID0gZW50cnk7XG4gICAgICAgICAgY29uc3QgaW50ZXJzZWN0aW9uUmF0aW8gPSBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyAhPT0gMSA/IGVudHJ5LmludGVyc2VjdGlvblJhdGlvIDogUmVjdGFuZ2xlLmludGVyc2VjdGlvblJhdGlvKFxuICAgICAgICAgICAgaW50ZXJzZWN0aW9uUmVjdCxcbiAgICAgICAgICAgIGdldFZpc2libGVCb3VuZGluZ1JlY3RhbmdsZShlbGVtZW50KVxuICAgICAgICAgICk7XG4gICAgICAgICAgaWYgKGludGVyc2VjdGlvblJhdGlvICE9PSAxKSB7XG4gICAgICAgICAgICBfX3ByaXZhdGVHZXQodGhpcywgX29ic2VydmVQb3NpdGlvbikuY2FsbCh0aGlzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0aHJlc2hvbGQsXG4gICAgICAgICAgcm9vdE1hcmdpbixcbiAgICAgICAgICByb290XG4gICAgICAgIH1cbiAgICAgICkpO1xuICAgICAgX19wcml2YXRlR2V0KHRoaXMsIF9wb3NpdGlvbk9ic2VydmVyKS5vYnNlcnZlKGVsZW1lbnQpO1xuICAgICAgX19wcml2YXRlTWV0aG9kKHRoaXMsIF9Qb3NpdGlvbk9ic2VydmVyX2luc3RhbmNlcywgbm90aWZ5X2ZuKS5jYWxsKHRoaXMpO1xuICAgIH0sIFRIUk9UVExFX0lOVEVSVkFMKSk7XG4gICAgdGhpcy5ib3VuZGluZ0NsaWVudFJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIF9fcHJpdmF0ZVNldCh0aGlzLCBfdmlzaWJsZSwgaXNWaXNpYmxlKGVsZW1lbnQsIHRoaXMuYm91bmRpbmdDbGllbnRSZWN0KSk7XG4gICAgbGV0IGluaXRpYWwgPSB0cnVlO1xuICAgIHRoaXMuY2FsbGJhY2sgPSAoYm91bmRpbmdDbGllbnRSZWN0KSA9PiB7XG4gICAgICBpZiAoaW5pdGlhbCkge1xuICAgICAgICBpbml0aWFsID0gZmFsc2U7XG4gICAgICAgIGlmIChvcHRpb25zLnNraXBJbml0aWFsKSByZXR1cm47XG4gICAgICB9XG4gICAgICBjYWxsYmFjayhib3VuZGluZ0NsaWVudFJlY3QpO1xuICAgIH07XG4gICAgY29uc3Qgcm9vdCA9IGVsZW1lbnQub3duZXJEb2N1bWVudDtcbiAgICBpZiAob3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5kZWJ1Zykge1xuICAgICAgX19wcml2YXRlU2V0KHRoaXMsIF9kZWJ1ZywgZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7XG4gICAgICBfX3ByaXZhdGVHZXQodGhpcywgX2RlYnVnKS5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDAsMCwwLDAuMTUpXCI7XG4gICAgICBfX3ByaXZhdGVHZXQodGhpcywgX2RlYnVnKS5zdHlsZS5wb3NpdGlvbiA9IFwiZml4ZWRcIjtcbiAgICAgIF9fcHJpdmF0ZUdldCh0aGlzLCBfZGVidWcpLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgICAgIHJvb3QuYm9keS5hcHBlbmRDaGlsZChfX3ByaXZhdGVHZXQodGhpcywgX2RlYnVnKSk7XG4gICAgfVxuICAgIF9fcHJpdmF0ZVNldCh0aGlzLCBfdmlzaWJpbGl0eU9ic2VydmVyLCBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgICAoZW50cmllcykgPT4ge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBjb25zdCBlbnRyeSA9IGVudHJpZXNbZW50cmllcy5sZW5ndGggLSAxXTtcbiAgICAgICAgY29uc3QgeyBib3VuZGluZ0NsaWVudFJlY3QsIGlzSW50ZXJzZWN0aW5nOiB2aXNpYmxlIH0gPSBlbnRyeTtcbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBib3VuZGluZ0NsaWVudFJlY3Q7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzVmlzaWJsZSA9IF9fcHJpdmF0ZUdldCh0aGlzLCBfdmlzaWJsZSk7XG4gICAgICAgIF9fcHJpdmF0ZVNldCh0aGlzLCBfdmlzaWJsZSwgdmlzaWJsZSk7XG4gICAgICAgIGlmICghd2lkdGggJiYgIWhlaWdodCkgcmV0dXJuO1xuICAgICAgICBpZiAocHJldmlvdXNWaXNpYmxlICYmICF2aXNpYmxlKSB7XG4gICAgICAgICAgKF9hID0gX19wcml2YXRlR2V0KHRoaXMsIF9wb3NpdGlvbk9ic2VydmVyKSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICB0aGlzLmNhbGxiYWNrKG51bGwpO1xuICAgICAgICAgIChfYiA9IF9fcHJpdmF0ZUdldCh0aGlzLCBfcmVzaXplT2JzZXJ2ZXIpKSA9PSBudWxsID8gdm9pZCAwIDogX2IuZGlzY29ubmVjdCgpO1xuICAgICAgICAgIF9fcHJpdmF0ZVNldCh0aGlzLCBfcmVzaXplT2JzZXJ2ZXIsIHZvaWQgMCk7XG4gICAgICAgICAgaWYgKF9fcHJpdmF0ZUdldCh0aGlzLCBfZGVidWcpKSBfX3ByaXZhdGVHZXQodGhpcywgX2RlYnVnKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfX3ByaXZhdGVHZXQodGhpcywgX29ic2VydmVQb3NpdGlvbikuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmlzaWJsZSAmJiAhX19wcml2YXRlR2V0KHRoaXMsIF9yZXNpemVPYnNlcnZlcikpIHtcbiAgICAgICAgICBfX3ByaXZhdGVTZXQodGhpcywgX3Jlc2l6ZU9ic2VydmVyLCBuZXcgUmVzaXplTm90aWZpZXIoX19wcml2YXRlR2V0KHRoaXMsIF9vYnNlcnZlUG9zaXRpb24pKSk7XG4gICAgICAgICAgX19wcml2YXRlR2V0KHRoaXMsIF9yZXNpemVPYnNlcnZlcikub2JzZXJ2ZShlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGhyZXNob2xkLFxuICAgICAgICByb290XG4gICAgICB9XG4gICAgKSk7XG4gICAgaWYgKF9fcHJpdmF0ZUdldCh0aGlzLCBfdmlzaWJsZSkgJiYgIW9wdGlvbnMuc2tpcEluaXRpYWwpIHtcbiAgICAgIHRoaXMuY2FsbGJhY2sodGhpcy5ib3VuZGluZ0NsaWVudFJlY3QpO1xuICAgIH1cbiAgICBfX3ByaXZhdGVHZXQodGhpcywgX3Zpc2liaWxpdHlPYnNlcnZlcikub2JzZXJ2ZShlbGVtZW50KTtcbiAgfVxufTtcbl92aXNpYmxlID0gbmV3IFdlYWtNYXAoKTtcbl9wcmV2aW91c0JvdW5kaW5nQ2xpZW50UmVjdCA9IG5ldyBXZWFrTWFwKCk7XG5fcmVzaXplT2JzZXJ2ZXIgPSBuZXcgV2Vha01hcCgpO1xuX3Bvc2l0aW9uT2JzZXJ2ZXIgPSBuZXcgV2Vha01hcCgpO1xuX3Zpc2liaWxpdHlPYnNlcnZlciA9IG5ldyBXZWFrTWFwKCk7XG5fZGVidWcgPSBuZXcgV2Vha01hcCgpO1xuX2Rpc2Nvbm5lY3RlZCA9IG5ldyBXZWFrTWFwKCk7XG5fb2JzZXJ2ZVBvc2l0aW9uID0gbmV3IFdlYWtNYXAoKTtcbl9Qb3NpdGlvbk9ic2VydmVyX2luc3RhbmNlcyA9IG5ldyBXZWFrU2V0KCk7XG5ub3RpZnlfZm4gPSBmdW5jdGlvbigpIHtcbiAgaWYgKF9fcHJpdmF0ZUdldCh0aGlzLCBfZGlzY29ubmVjdGVkKSkgcmV0dXJuO1xuICBfX3ByaXZhdGVNZXRob2QodGhpcywgX1Bvc2l0aW9uT2JzZXJ2ZXJfaW5zdGFuY2VzLCB1cGRhdGVEZWJ1Z19mbikuY2FsbCh0aGlzKTtcbiAgaWYgKGlzUmVjdEVxdWFsKHRoaXMuYm91bmRpbmdDbGllbnRSZWN0LCBfX3ByaXZhdGVHZXQodGhpcywgX3ByZXZpb3VzQm91bmRpbmdDbGllbnRSZWN0KSkpXG4gICAgcmV0dXJuO1xuICB0aGlzLmNhbGxiYWNrKHRoaXMuYm91bmRpbmdDbGllbnRSZWN0KTtcbiAgX19wcml2YXRlU2V0KHRoaXMsIF9wcmV2aW91c0JvdW5kaW5nQ2xpZW50UmVjdCwgdGhpcy5ib3VuZGluZ0NsaWVudFJlY3QpO1xufTtcbnVwZGF0ZURlYnVnX2ZuID0gZnVuY3Rpb24oKSB7XG4gIGlmIChfX3ByaXZhdGVHZXQodGhpcywgX2RlYnVnKSkge1xuICAgIGNvbnN0IHsgdG9wLCBsZWZ0LCB3aWR0aCwgaGVpZ2h0IH0gPSBnZXRWaXNpYmxlQm91bmRpbmdSZWN0YW5nbGUoXG4gICAgICB0aGlzLmVsZW1lbnRcbiAgICApO1xuICAgIF9fcHJpdmF0ZUdldCh0aGlzLCBfZGVidWcpLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgICBfX3ByaXZhdGVHZXQodGhpcywgX2RlYnVnKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgX19wcml2YXRlR2V0KHRoaXMsIF9kZWJ1Zykuc3R5bGUudG9wID0gYCR7TWF0aC5mbG9vcih0b3ApfXB4YDtcbiAgICBfX3ByaXZhdGVHZXQodGhpcywgX2RlYnVnKS5zdHlsZS5sZWZ0ID0gYCR7TWF0aC5mbG9vcihsZWZ0KX1weGA7XG4gICAgX19wcml2YXRlR2V0KHRoaXMsIF9kZWJ1Zykuc3R5bGUud2lkdGggPSBgJHtNYXRoLmZsb29yKHdpZHRoKX1weGA7XG4gICAgX19wcml2YXRlR2V0KHRoaXMsIF9kZWJ1Zykuc3R5bGUuaGVpZ2h0ID0gYCR7TWF0aC5mbG9vcihoZWlnaHQpfXB4YDtcbiAgfVxufTtcblxuLy8gc3JjL3V0aWxpdGllcy9vYnNlcnZlcnMvRnJhbWVPYnNlcnZlci50c1xudmFyIGZyYW1lUG9zaXRpb25PYnNlcnZlcnMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBzY3JvbGxMaXN0ZW5lcnMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbmZ1bmN0aW9uIGFkZEZyYW1lTGlzdGVuZXIoZnJhbWUsIGNhbGxiYWNrKSB7XG4gIGxldCBjYWNoZWQgPSBmcmFtZVBvc2l0aW9uT2JzZXJ2ZXJzLmdldChmcmFtZSk7XG4gIGlmICghY2FjaGVkKSB7XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgUG9zaXRpb25PYnNlcnZlcihcbiAgICAgIGZyYW1lLFxuICAgICAgKGJvdW5kaW5nQ2xpZW50UmVjdCkgPT4ge1xuICAgICAgICBjb25zdCBjYWNoZWQyID0gZnJhbWVQb3NpdGlvbk9ic2VydmVycy5nZXQoZnJhbWUpO1xuICAgICAgICBpZiAoIWNhY2hlZDIpIHJldHVybjtcbiAgICAgICAgY2FjaGVkMi5jYWxsYmFja3MuZm9yRWFjaCgoY2FsbGJhY2syKSA9PiBjYWxsYmFjazIoYm91bmRpbmdDbGllbnRSZWN0KSk7XG4gICAgICB9LFxuICAgICAgeyBza2lwSW5pdGlhbDogdHJ1ZSB9XG4gICAgKTtcbiAgICBjYWNoZWQgPSB7IGRpc2Nvbm5lY3Q6IG9ic2VydmVyLmRpc2Nvbm5lY3QsIGNhbGxiYWNrczogLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKSB9O1xuICB9XG4gIGNhY2hlZC5jYWxsYmFja3MuYWRkKGNhbGxiYWNrKTtcbiAgZnJhbWVQb3NpdGlvbk9ic2VydmVycy5zZXQoZnJhbWUsIGNhY2hlZCk7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgY2FjaGVkLmNhbGxiYWNrcy5kZWxldGUoY2FsbGJhY2spO1xuICAgIGlmIChjYWNoZWQuY2FsbGJhY2tzLnNpemUgPT09IDApIHtcbiAgICAgIGZyYW1lUG9zaXRpb25PYnNlcnZlcnMuZGVsZXRlKGZyYW1lKTtcbiAgICAgIGNhY2hlZC5kaXNjb25uZWN0KCk7XG4gICAgfVxuICB9O1xufVxuZnVuY3Rpb24gb2JzZXJ2ZVBhcmVudEZyYW1lcyhmcmFtZXMsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGNsZWFudXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuICBmb3IgKGNvbnN0IGZyYW1lIG9mIGZyYW1lcykge1xuICAgIGNvbnN0IHJlbW92ZSA9IGFkZEZyYW1lTGlzdGVuZXIoZnJhbWUsIGNhbGxiYWNrKTtcbiAgICBjbGVhbnVwLmFkZChyZW1vdmUpO1xuICB9XG4gIHJldHVybiAoKSA9PiBjbGVhbnVwLmZvckVhY2goKHJlbW92ZSkgPT4gcmVtb3ZlKCkpO1xufVxuZnVuY3Rpb24gYWRkU2Nyb2xsTGlzdGVuZXIoZWxlbWVudCwgY2FsbGJhY2spIHtcbiAgdmFyIF9hO1xuICBjb25zdCBkb2MgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQ7XG4gIGlmICghc2Nyb2xsTGlzdGVuZXJzLmhhcyhkb2MpKSB7XG4gICAgY29uc3QgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbiAgICBjb25zdCBsaXN0ZW5lcnMyID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJzY3JvbGxcIixcbiAgICAgIChldmVudCkgPT4gbGlzdGVuZXJzMi5mb3JFYWNoKChsaXN0ZW5lcikgPT4gbGlzdGVuZXIoZXZlbnQpKSxcbiAgICAgIHtcbiAgICAgICAgY2FwdHVyZTogdHJ1ZSxcbiAgICAgICAgcGFzc2l2ZTogdHJ1ZSxcbiAgICAgICAgc2lnbmFsOiBjb250cm9sbGVyLnNpZ25hbFxuICAgICAgfVxuICAgICk7XG4gICAgc2Nyb2xsTGlzdGVuZXJzLnNldChkb2MsIHsgZGlzY29ubmVjdDogKCkgPT4gY29udHJvbGxlci5hYm9ydCgpLCBsaXN0ZW5lcnM6IGxpc3RlbmVyczIgfSk7XG4gIH1cbiAgY29uc3QgeyBsaXN0ZW5lcnMsIGRpc2Nvbm5lY3QgfSA9IChfYSA9IHNjcm9sbExpc3RlbmVycy5nZXQoZG9jKSkgIT0gbnVsbCA/IF9hIDoge307XG4gIGlmICghbGlzdGVuZXJzIHx8ICFkaXNjb25uZWN0KSByZXR1cm4gKCkgPT4ge1xuICB9O1xuICBsaXN0ZW5lcnMuYWRkKGNhbGxiYWNrKTtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGNhbGxiYWNrKTtcbiAgICBpZiAobGlzdGVuZXJzLnNpemUgPT09IDApIHtcbiAgICAgIGRpc2Nvbm5lY3QoKTtcbiAgICAgIHNjcm9sbExpc3RlbmVycy5kZWxldGUoZG9jKTtcbiAgICB9XG4gIH07XG59XG52YXIgX2VsZW1lbnRPYnNlcnZlciwgX2Rpc2Nvbm5lY3RlZDIsIF9mcmFtZXMsIF9oYW5kbGVTY3JvbGw7XG52YXIgRnJhbWVPYnNlcnZlciA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgX19wcml2YXRlQWRkKHRoaXMsIF9lbGVtZW50T2JzZXJ2ZXIpO1xuICAgIF9fcHJpdmF0ZUFkZCh0aGlzLCBfZGlzY29ubmVjdGVkMiwgZmFsc2UpO1xuICAgIF9fcHJpdmF0ZUFkZCh0aGlzLCBfZnJhbWVzKTtcbiAgICBfX3ByaXZhdGVBZGQodGhpcywgX2hhbmRsZVNjcm9sbCwgdGhyb3R0bGUoKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoX19wcml2YXRlR2V0KHRoaXMsIF9kaXNjb25uZWN0ZWQyKSkgcmV0dXJuO1xuICAgICAgaWYgKCFldmVudC50YXJnZXQpIHJldHVybjtcbiAgICAgIGlmIChcImNvbnRhaW5zXCIgaW4gZXZlbnQudGFyZ2V0ICYmIHR5cGVvZiBldmVudC50YXJnZXQuY29udGFpbnMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBmb3IgKGNvbnN0IGZyYW1lIG9mIF9fcHJpdmF0ZUdldCh0aGlzLCBfZnJhbWVzKSkge1xuICAgICAgICAgIGlmIChldmVudC50YXJnZXQuY29udGFpbnMoZnJhbWUpKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrKF9fcHJpdmF0ZUdldCh0aGlzLCBfZWxlbWVudE9ic2VydmVyKS5ib3VuZGluZ0NsaWVudFJlY3QpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgVEhST1RUTEVfSU5URVJWQUwpKTtcbiAgICBjb25zdCBmcmFtZXMgPSBnZXRGcmFtZUVsZW1lbnRzKGVsZW1lbnQpO1xuICAgIGNvbnN0IHVub2JzZXJ2ZVBhcmVudEZyYW1lcyA9IG9ic2VydmVQYXJlbnRGcmFtZXMoZnJhbWVzLCBjYWxsYmFjayk7XG4gICAgY29uc3QgcmVtb3ZlU2Nyb2xsTGlzdGVuZXIgPSBhZGRTY3JvbGxMaXN0ZW5lcihlbGVtZW50LCBfX3ByaXZhdGVHZXQodGhpcywgX2hhbmRsZVNjcm9sbCkpO1xuICAgIF9fcHJpdmF0ZVNldCh0aGlzLCBfZnJhbWVzLCBmcmFtZXMpO1xuICAgIF9fcHJpdmF0ZVNldCh0aGlzLCBfZWxlbWVudE9ic2VydmVyLCBuZXcgUG9zaXRpb25PYnNlcnZlcihlbGVtZW50LCBjYWxsYmFjaywgb3B0aW9ucykpO1xuICAgIHRoaXMuZGlzY29ubmVjdCA9ICgpID0+IHtcbiAgICAgIGlmIChfX3ByaXZhdGVHZXQodGhpcywgX2Rpc2Nvbm5lY3RlZDIpKSByZXR1cm47XG4gICAgICBfX3ByaXZhdGVTZXQodGhpcywgX2Rpc2Nvbm5lY3RlZDIsIHRydWUpO1xuICAgICAgdW5vYnNlcnZlUGFyZW50RnJhbWVzKCk7XG4gICAgICByZW1vdmVTY3JvbGxMaXN0ZW5lcigpO1xuICAgICAgX19wcml2YXRlR2V0KHRoaXMsIF9lbGVtZW50T2JzZXJ2ZXIpLmRpc2Nvbm5lY3QoKTtcbiAgICB9O1xuICB9XG59O1xuX2VsZW1lbnRPYnNlcnZlciA9IG5ldyBXZWFrTWFwKCk7XG5fZGlzY29ubmVjdGVkMiA9IG5ldyBXZWFrTWFwKCk7XG5fZnJhbWVzID0gbmV3IFdlYWtNYXAoKTtcbl9oYW5kbGVTY3JvbGwgPSBuZXcgV2Vha01hcCgpO1xuXG4vLyBzcmMvdXRpbGl0aWVzL3BvcG92ZXIvc3VwcG9ydHNQb3BvdmVyLnRzXG5mdW5jdGlvbiBzdXBwb3J0c1BvcG92ZXIoZWxlbWVudCkge1xuICByZXR1cm4gXCJzaG93UG9wb3ZlclwiIGluIGVsZW1lbnQgJiYgXCJoaWRlUG9wb3ZlclwiIGluIGVsZW1lbnQgJiYgdHlwZW9mIGVsZW1lbnQuc2hvd1BvcG92ZXIgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgZWxlbWVudC5oaWRlUG9wb3ZlciA9PT0gXCJmdW5jdGlvblwiO1xufVxuXG4vLyBzcmMvdXRpbGl0aWVzL3BvcG92ZXIvc2hvd1BvcG92ZXIudHNcbmZ1bmN0aW9uIHNob3dQb3BvdmVyKGVsZW1lbnQpIHtcbiAgdHJ5IHtcbiAgICBpZiAoc3VwcG9ydHNQb3BvdmVyKGVsZW1lbnQpICYmIGVsZW1lbnQuaXNDb25uZWN0ZWQgJiYgZWxlbWVudC5oYXNBdHRyaWJ1dGUoXCJwb3BvdmVyXCIpICYmIC8vIFRoaXMgc2VsZWN0b3IgY2FuIHRocm93IGFuIGVycm9yIGluIGJyb3dzZXJzIHRoYXQgZG9uJ3Qgc3VwcG9ydCBpdFxuICAgICFlbGVtZW50Lm1hdGNoZXMoXCI6cG9wb3Zlci1vcGVuXCIpKSB7XG4gICAgICBlbGVtZW50LnNob3dQb3BvdmVyKCk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICB9XG59XG5cbi8vIHNyYy91dGlsaXRpZXMvcG9wb3Zlci9oaWRlUG9wb3Zlci50c1xuZnVuY3Rpb24gaGlkZVBvcG92ZXIoZWxlbWVudCkge1xuICB0cnkge1xuICAgIGlmIChzdXBwb3J0c1BvcG92ZXIoZWxlbWVudCkgJiYgZWxlbWVudC5pc0Nvbm5lY3RlZCAmJiBlbGVtZW50Lmhhc0F0dHJpYnV0ZShcInBvcG92ZXJcIikgJiYgLy8gVGhpcyBzZWxlY3RvciBjYW4gdGhyb3cgYW4gZXJyb3IgaW4gYnJvd3NlcnMgdGhhdCBkb24ndCBzdXBwb3J0IGl0XG4gICAgZWxlbWVudC5tYXRjaGVzKFwiOnBvcG92ZXItb3BlblwiKSkge1xuICAgICAgZWxlbWVudC5oaWRlUG9wb3ZlcigpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgfVxufVxuXG4vLyBzcmMvdXRpbGl0aWVzL3Njcm9sbC9kb2N1bWVudFNjcm9sbGluZ0VsZW1lbnQudHNcbmZ1bmN0aW9uIGlzRG9jdW1lbnRTY3JvbGxpbmdFbGVtZW50KGVsZW1lbnQpIHtcbiAgaWYgKCFjYW5Vc2VET00gfHwgIWVsZW1lbnQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIGVsZW1lbnQgPT09IGdldERvY3VtZW50KGVsZW1lbnQpLnNjcm9sbGluZ0VsZW1lbnQ7XG59XG5cbi8vIHNyYy91dGlsaXRpZXMvc2Nyb2xsL2dldFNjcm9sbFBvc2l0aW9uLnRzXG5mdW5jdGlvbiBnZXRTY3JvbGxQb3NpdGlvbihzY3JvbGxhYmxlRWxlbWVudCkge1xuICB2YXIgX2EsIF9iO1xuICBjb25zdCB3aW5kb3cyID0gZ2V0V2luZG93KHNjcm9sbGFibGVFbGVtZW50KTtcbiAgY29uc3QgcmVjdCA9IGlzRG9jdW1lbnRTY3JvbGxpbmdFbGVtZW50KHNjcm9sbGFibGVFbGVtZW50KSA/IGdldFZpZXdwb3J0Qm91bmRpbmdSZWN0YW5nbGUoc2Nyb2xsYWJsZUVsZW1lbnQpIDogZ2V0Qm91bmRpbmdSZWN0YW5nbGUoc2Nyb2xsYWJsZUVsZW1lbnQpO1xuICBjb25zdCB2diA9IHdpbmRvdzIudmlzdWFsVmlld3BvcnQ7XG4gIGNvbnN0IGRpbWVuc2lvbnMgPSBpc0RvY3VtZW50U2Nyb2xsaW5nRWxlbWVudChzY3JvbGxhYmxlRWxlbWVudCkgPyB7XG4gICAgaGVpZ2h0OiAoX2EgPSB2diA9PSBudWxsID8gdm9pZCAwIDogdnYuaGVpZ2h0KSAhPSBudWxsID8gX2EgOiB3aW5kb3cyLmlubmVySGVpZ2h0LFxuICAgIHdpZHRoOiAoX2IgPSB2diA9PSBudWxsID8gdm9pZCAwIDogdnYud2lkdGgpICE9IG51bGwgPyBfYiA6IHdpbmRvdzIuaW5uZXJXaWR0aFxuICB9IDoge1xuICAgIGhlaWdodDogc2Nyb2xsYWJsZUVsZW1lbnQuY2xpZW50SGVpZ2h0LFxuICAgIHdpZHRoOiBzY3JvbGxhYmxlRWxlbWVudC5jbGllbnRXaWR0aFxuICB9O1xuICBjb25zdCBwb3NpdGlvbiA9IHtcbiAgICBjdXJyZW50OiB7XG4gICAgICB4OiBzY3JvbGxhYmxlRWxlbWVudC5zY3JvbGxMZWZ0LFxuICAgICAgeTogc2Nyb2xsYWJsZUVsZW1lbnQuc2Nyb2xsVG9wXG4gICAgfSxcbiAgICBtYXg6IHtcbiAgICAgIHg6IHNjcm9sbGFibGVFbGVtZW50LnNjcm9sbFdpZHRoIC0gZGltZW5zaW9ucy53aWR0aCxcbiAgICAgIHk6IHNjcm9sbGFibGVFbGVtZW50LnNjcm9sbEhlaWdodCAtIGRpbWVuc2lvbnMuaGVpZ2h0XG4gICAgfVxuICB9O1xuICBjb25zdCBpc1RvcCA9IHBvc2l0aW9uLmN1cnJlbnQueSA8PSAwO1xuICBjb25zdCBpc0xlZnQgPSBwb3NpdGlvbi5jdXJyZW50LnggPD0gMDtcbiAgY29uc3QgaXNCb3R0b20gPSBwb3NpdGlvbi5jdXJyZW50LnkgPj0gcG9zaXRpb24ubWF4Lnk7XG4gIGNvbnN0IGlzUmlnaHQgPSBwb3NpdGlvbi5jdXJyZW50LnggPj0gcG9zaXRpb24ubWF4Lng7XG4gIHJldHVybiB7XG4gICAgcmVjdCxcbiAgICBwb3NpdGlvbixcbiAgICBpc1RvcCxcbiAgICBpc0xlZnQsXG4gICAgaXNCb3R0b20sXG4gICAgaXNSaWdodFxuICB9O1xufVxuXG4vLyBzcmMvdXRpbGl0aWVzL3Njcm9sbC9jYW5TY3JvbGwudHNcbmZ1bmN0aW9uIGNhblNjcm9sbChzY3JvbGxhYmxlRWxlbWVudCwgYnkpIHtcbiAgY29uc3QgeyBpc1RvcCwgaXNCb3R0b20sIGlzTGVmdCwgaXNSaWdodCwgcG9zaXRpb24gfSA9IGdldFNjcm9sbFBvc2l0aW9uKHNjcm9sbGFibGVFbGVtZW50KTtcbiAgY29uc3QgeyB4LCB5IH0gPSBieSAhPSBudWxsID8gYnkgOiB7IHg6IDAsIHk6IDAgfTtcbiAgY29uc3QgdG9wID0gIWlzVG9wICYmIHBvc2l0aW9uLmN1cnJlbnQueSArIHkgPiAwO1xuICBjb25zdCBib3R0b20gPSAhaXNCb3R0b20gJiYgcG9zaXRpb24uY3VycmVudC55ICsgeSA8IHBvc2l0aW9uLm1heC55O1xuICBjb25zdCBsZWZ0ID0gIWlzTGVmdCAmJiBwb3NpdGlvbi5jdXJyZW50LnggKyB4ID4gMDtcbiAgY29uc3QgcmlnaHQgPSAhaXNSaWdodCAmJiBwb3NpdGlvbi5jdXJyZW50LnggKyB4IDwgcG9zaXRpb24ubWF4Lng7XG4gIHJldHVybiB7XG4gICAgdG9wLFxuICAgIGJvdHRvbSxcbiAgICBsZWZ0LFxuICAgIHJpZ2h0LFxuICAgIHg6IGxlZnQgfHwgcmlnaHQsXG4gICAgeTogdG9wIHx8IGJvdHRvbVxuICB9O1xufVxuXG4vLyBzcmMvdXRpbGl0aWVzL3NjaGVkdWxpbmcvc2NoZWR1bGVyLnRzXG52YXIgU2NoZWR1bGVyID0gY2xhc3Mge1xuICBjb25zdHJ1Y3RvcihzY2hlZHVsZXI0KSB7XG4gICAgdGhpcy5zY2hlZHVsZXIgPSBzY2hlZHVsZXI0O1xuICAgIHRoaXMucGVuZGluZyA9IGZhbHNlO1xuICAgIHRoaXMudGFza3MgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuICAgIHRoaXMucmVzb2x2ZXJzID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbiAgICB0aGlzLmZsdXNoID0gKCkgPT4ge1xuICAgICAgY29uc3QgeyB0YXNrcywgcmVzb2x2ZXJzIH0gPSB0aGlzO1xuICAgICAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLnRhc2tzID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbiAgICAgIHRoaXMucmVzb2x2ZXJzID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbiAgICAgIGZvciAoY29uc3QgdGFzayBvZiB0YXNrcykge1xuICAgICAgICB0YXNrKCk7XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IHJlc29sdmUgb2YgcmVzb2x2ZXJzKSB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIHNjaGVkdWxlKHRhc2spIHtcbiAgICB0aGlzLnRhc2tzLmFkZCh0YXNrKTtcbiAgICBpZiAoIXRoaXMucGVuZGluZykge1xuICAgICAgdGhpcy5wZW5kaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2NoZWR1bGVyKHRoaXMuZmx1c2gpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHRoaXMucmVzb2x2ZXJzLmFkZChyZXNvbHZlKSk7XG4gIH1cbn07XG52YXIgc2NoZWR1bGVyID0gbmV3IFNjaGVkdWxlcigoY2FsbGJhY2spID0+IHtcbiAgaWYgKHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShjYWxsYmFjayk7XG4gIH0gZWxzZSB7XG4gICAgY2FsbGJhY2soKTtcbiAgfVxufSk7XG5cbi8vIHNyYy91dGlsaXRpZXMvc3R5bGVzL2dldENvbXB1dGVkU3R5bGVzLnRzXG52YXIgc2NoZWR1bGVyMiA9IG5ldyBTY2hlZHVsZXIoKGNhbGxiYWNrKSA9PiBzZXRUaW1lb3V0KGNhbGxiYWNrLCA1MCkpO1xudmFyIGNhY2hlZFN0eWxlcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG52YXIgY2xlYXIgPSBjYWNoZWRTdHlsZXMuY2xlYXIuYmluZChjYWNoZWRTdHlsZXMpO1xuZnVuY3Rpb24gZ2V0Q29tcHV0ZWRTdHlsZXMoZWxlbWVudCwgY2FjaGVkID0gZmFsc2UpIHtcbiAgaWYgKCFjYWNoZWQpIHJldHVybiBjb21wdXRlU3R5bGVzKGVsZW1lbnQpO1xuICBsZXQgc3R5bGVzID0gY2FjaGVkU3R5bGVzLmdldChlbGVtZW50KTtcbiAgaWYgKHN0eWxlcykgcmV0dXJuIHN0eWxlcztcbiAgc3R5bGVzID0gY29tcHV0ZVN0eWxlcyhlbGVtZW50KTtcbiAgY2FjaGVkU3R5bGVzLnNldChlbGVtZW50LCBzdHlsZXMpO1xuICBzY2hlZHVsZXIyLnNjaGVkdWxlKGNsZWFyKTtcbiAgcmV0dXJuIHN0eWxlcztcbn1cbmZ1bmN0aW9uIGNvbXB1dGVTdHlsZXMoZWxlbWVudCkge1xuICByZXR1cm4gZ2V0V2luZG93KGVsZW1lbnQpLmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG59XG5cbi8vIHNyYy91dGlsaXRpZXMvc2Nyb2xsL2lzRml4ZWQudHNcbmZ1bmN0aW9uIGlzRml4ZWQobm9kZSwgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGVzKG5vZGUsIHRydWUpKSB7XG4gIHJldHVybiBjb21wdXRlZFN0eWxlLnBvc2l0aW9uID09PSBcImZpeGVkXCIgfHwgY29tcHV0ZWRTdHlsZS5wb3NpdGlvbiA9PT0gXCJzdGlja3lcIjtcbn1cblxuLy8gc3JjL3V0aWxpdGllcy9zY3JvbGwvaXNTY3JvbGxhYmxlLnRzXG5mdW5jdGlvbiBpc1Njcm9sbGFibGUoZWxlbWVudCwgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGVzKGVsZW1lbnQsIHRydWUpKSB7XG4gIGNvbnN0IG92ZXJmbG93UmVnZXggPSAvKGF1dG98c2Nyb2xsfG92ZXJsYXkpLztcbiAgY29uc3QgcHJvcGVydGllcyA9IFtcIm92ZXJmbG93XCIsIFwib3ZlcmZsb3dYXCIsIFwib3ZlcmZsb3dZXCJdO1xuICByZXR1cm4gcHJvcGVydGllcy5zb21lKChwcm9wZXJ0eSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gY29tcHV0ZWRTdHlsZVtwcm9wZXJ0eV07XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiA/IG92ZXJmbG93UmVnZXgudGVzdCh2YWx1ZSkgOiBmYWxzZTtcbiAgfSk7XG59XG5cbi8vIHNyYy91dGlsaXRpZXMvc2Nyb2xsL2dldFNjcm9sbGFibGVBbmNlc3RvcnMudHNcbnZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgZXhjbHVkZUVsZW1lbnQ6IHRydWUsXG4gIGVzY2FwZVNoYWRvd0RPTTogdHJ1ZVxufTtcbmZ1bmN0aW9uIGdldFNjcm9sbGFibGVBbmNlc3RvcnMoZWxlbWVudCwgb3B0aW9ucyA9IGRlZmF1bHRPcHRpb25zKSB7XG4gIGNvbnN0IHsgbGltaXQsIGV4Y2x1ZGVFbGVtZW50LCBlc2NhcGVTaGFkb3dET00gfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHNjcm9sbFBhcmVudHMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuICBmdW5jdGlvbiBmaW5kU2Nyb2xsYWJsZUFuY2VzdG9ycyhub2RlKSB7XG4gICAgaWYgKGxpbWl0ICE9IG51bGwgJiYgc2Nyb2xsUGFyZW50cy5zaXplID49IGxpbWl0KSB7XG4gICAgICByZXR1cm4gc2Nyb2xsUGFyZW50cztcbiAgICB9XG4gICAgaWYgKCFub2RlKSB7XG4gICAgICByZXR1cm4gc2Nyb2xsUGFyZW50cztcbiAgICB9XG4gICAgaWYgKGlzRG9jdW1lbnQobm9kZSkgJiYgbm9kZS5zY3JvbGxpbmdFbGVtZW50ICE9IG51bGwgJiYgIXNjcm9sbFBhcmVudHMuaGFzKG5vZGUuc2Nyb2xsaW5nRWxlbWVudCkpIHtcbiAgICAgIHNjcm9sbFBhcmVudHMuYWRkKG5vZGUuc2Nyb2xsaW5nRWxlbWVudCk7XG4gICAgICByZXR1cm4gc2Nyb2xsUGFyZW50cztcbiAgICB9XG4gICAgaWYgKGVzY2FwZVNoYWRvd0RPTSAmJiBpc1NoYWRvd1Jvb3Qobm9kZSkpIHtcbiAgICAgIHJldHVybiBmaW5kU2Nyb2xsYWJsZUFuY2VzdG9ycyhub2RlLmhvc3QpO1xuICAgIH1cbiAgICBpZiAoIWlzSFRNTEVsZW1lbnQobm9kZSkpIHtcbiAgICAgIGlmIChpc1NWR0VsZW1lbnQobm9kZSkpIHtcbiAgICAgICAgcmV0dXJuIGZpbmRTY3JvbGxhYmxlQW5jZXN0b3JzKG5vZGUucGFyZW50RWxlbWVudCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2Nyb2xsUGFyZW50cztcbiAgICB9XG4gICAgaWYgKHNjcm9sbFBhcmVudHMuaGFzKG5vZGUpKSB7XG4gICAgICByZXR1cm4gc2Nyb2xsUGFyZW50cztcbiAgICB9XG4gICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGVzKG5vZGUsIHRydWUpO1xuICAgIGlmIChleGNsdWRlRWxlbWVudCAmJiBub2RlID09PSBlbGVtZW50KSA7IGVsc2UgaWYgKGlzU2Nyb2xsYWJsZShub2RlLCBjb21wdXRlZFN0eWxlKSkge1xuICAgICAgc2Nyb2xsUGFyZW50cy5hZGQobm9kZSk7XG4gICAgfVxuICAgIGlmIChpc0ZpeGVkKG5vZGUsIGNvbXB1dGVkU3R5bGUpKSB7XG4gICAgICBjb25zdCB7IHNjcm9sbGluZ0VsZW1lbnQgfSA9IG5vZGUub3duZXJEb2N1bWVudDtcbiAgICAgIGlmIChzY3JvbGxpbmdFbGVtZW50KSBzY3JvbGxQYXJlbnRzLmFkZChzY3JvbGxpbmdFbGVtZW50KTtcbiAgICAgIHJldHVybiBzY3JvbGxQYXJlbnRzO1xuICAgIH1cbiAgICByZXR1cm4gZmluZFNjcm9sbGFibGVBbmNlc3RvcnMobm9kZS5wYXJlbnROb2RlKTtcbiAgfVxuICBpZiAoIWVsZW1lbnQpIHtcbiAgICByZXR1cm4gc2Nyb2xsUGFyZW50cztcbiAgfVxuICByZXR1cm4gZmluZFNjcm9sbGFibGVBbmNlc3RvcnMoZWxlbWVudCk7XG59XG5mdW5jdGlvbiBnZXRGaXJzdFNjcm9sbGFibGVBbmNlc3Rvcihub2RlKSB7XG4gIGNvbnN0IFtmaXJzdFNjcm9sbGFibGVBbmNlc3Rvcl0gPSBnZXRTY3JvbGxhYmxlQW5jZXN0b3JzKG5vZGUsIHsgbGltaXQ6IDEgfSk7XG4gIHJldHVybiBmaXJzdFNjcm9sbGFibGVBbmNlc3RvciAhPSBudWxsID8gZmlyc3RTY3JvbGxhYmxlQW5jZXN0b3IgOiBudWxsO1xufVxuXG4vLyBzcmMvdXRpbGl0aWVzL2ZyYW1lL2dldEZyYW1lVHJhbnNmb3JtLnRzXG5mdW5jdGlvbiBnZXRGcmFtZVRyYW5zZm9ybShlbCwgYm91bmRhcnkgPSB3aW5kb3cuZnJhbWVFbGVtZW50KSB7XG4gIGNvbnN0IHRyYW5zZm9ybSA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDAsXG4gICAgc2NhbGVYOiAxLFxuICAgIHNjYWxlWTogMVxuICB9O1xuICBpZiAoIWVsKSByZXR1cm4gdHJhbnNmb3JtO1xuICBsZXQgZnJhbWUgPSBnZXRGcmFtZUVsZW1lbnQoZWwpO1xuICB3aGlsZSAoZnJhbWUpIHtcbiAgICBpZiAoZnJhbWUgPT09IGJvdW5kYXJ5KSB7XG4gICAgICByZXR1cm4gdHJhbnNmb3JtO1xuICAgIH1cbiAgICBjb25zdCByZWN0ID0gZ2V0Qm91bmRpbmdSZWN0YW5nbGUoZnJhbWUpO1xuICAgIGNvbnN0IHsgeDogc2NhbGVYLCB5OiBzY2FsZVkgfSA9IGdldFNjYWxlKGZyYW1lLCByZWN0KTtcbiAgICB0cmFuc2Zvcm0ueCA9IHRyYW5zZm9ybS54ICsgcmVjdC5sZWZ0O1xuICAgIHRyYW5zZm9ybS55ID0gdHJhbnNmb3JtLnkgKyByZWN0LnRvcDtcbiAgICB0cmFuc2Zvcm0uc2NhbGVYID0gdHJhbnNmb3JtLnNjYWxlWCAqIHNjYWxlWDtcbiAgICB0cmFuc2Zvcm0uc2NhbGVZID0gdHJhbnNmb3JtLnNjYWxlWSAqIHNjYWxlWTtcbiAgICBmcmFtZSA9IGdldEZyYW1lRWxlbWVudChmcmFtZSk7XG4gIH1cbiAgcmV0dXJuIHRyYW5zZm9ybTtcbn1cbmZ1bmN0aW9uIGdldFNjYWxlKGVsZW1lbnQsIGJvdW5kaW5nUmVjdGFuZ2xlID0gZ2V0Qm91bmRpbmdSZWN0YW5nbGUoZWxlbWVudCkpIHtcbiAgY29uc3Qgd2lkdGggPSBNYXRoLnJvdW5kKGJvdW5kaW5nUmVjdGFuZ2xlLndpZHRoKTtcbiAgY29uc3QgaGVpZ2h0ID0gTWF0aC5yb3VuZChib3VuZGluZ1JlY3RhbmdsZS5oZWlnaHQpO1xuICBpZiAoaXNIVE1MRWxlbWVudChlbGVtZW50KSkge1xuICAgIHJldHVybiB7XG4gICAgICB4OiB3aWR0aCAvIGVsZW1lbnQub2Zmc2V0V2lkdGgsXG4gICAgICB5OiBoZWlnaHQgLyBlbGVtZW50Lm9mZnNldEhlaWdodFxuICAgIH07XG4gIH1cbiAgY29uc3Qgc3R5bGVzID0gZ2V0Q29tcHV0ZWRTdHlsZXMoZWxlbWVudCwgdHJ1ZSk7XG4gIHJldHVybiB7XG4gICAgeDogKHBhcnNlRmxvYXQoc3R5bGVzLndpZHRoKSB8fCB3aWR0aCkgLyB3aWR0aCxcbiAgICB5OiAocGFyc2VGbG9hdChzdHlsZXMuaGVpZ2h0KSB8fCBoZWlnaHQpIC8gaGVpZ2h0XG4gIH07XG59XG5cbi8vIHNyYy91dGlsaXRpZXMvdHJhbnNmb3JtL3BhcnNlU2NhbGUudHNcbmZ1bmN0aW9uIHBhcnNlU2NhbGUoc2NhbGUpIHtcbiAgaWYgKCFzY2FsZSB8fCBzY2FsZSA9PT0gXCJub25lXCIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCB2YWx1ZXMgPSBzY2FsZS5zcGxpdChcIiBcIik7XG4gIGNvbnN0IHggPSBwYXJzZUZsb2F0KHZhbHVlc1swXSk7XG4gIGNvbnN0IHkgPSBwYXJzZUZsb2F0KHZhbHVlc1sxXSk7XG4gIGlmIChpc05hTih4KSAmJiBpc05hTih5KSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiB7XG4gICAgeDogaXNOYU4oeCkgPyB5IDogeCxcbiAgICB5OiBpc05hTih5KSA/IHggOiB5XG4gIH07XG59XG5cbi8vIHNyYy91dGlsaXRpZXMvdHJhbnNmb3JtL3BhcnNlVHJhbnNsYXRlLnRzXG5mdW5jdGlvbiBwYXJzZVRyYW5zbGF0ZSh0cmFuc2xhdGUpIHtcbiAgaWYgKCF0cmFuc2xhdGUgfHwgdHJhbnNsYXRlID09PSBcIm5vbmVcIikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IFt4LCB5LCB6ID0gXCIwXCJdID0gdHJhbnNsYXRlLnNwbGl0KFwiIFwiKTtcbiAgY29uc3Qgb3V0cHV0ID0geyB4OiBwYXJzZUZsb2F0KHgpLCB5OiBwYXJzZUZsb2F0KHkpLCB6OiBwYXJzZUludCh6LCAxMCkgfTtcbiAgaWYgKGlzTmFOKG91dHB1dC54KSAmJiBpc05hTihvdXRwdXQueSkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4ge1xuICAgIHg6IGlzTmFOKG91dHB1dC54KSA/IDAgOiBvdXRwdXQueCxcbiAgICB5OiBpc05hTihvdXRwdXQueSkgPyAwIDogb3V0cHV0LnksXG4gICAgejogaXNOYU4ob3V0cHV0LnopID8gMCA6IG91dHB1dC56XG4gIH07XG59XG5cbi8vIHNyYy91dGlsaXRpZXMvdHJhbnNmb3JtL3BhcnNlVHJhbnNmb3JtLnRzXG5mdW5jdGlvbiBwYXJzZVRyYW5zZm9ybShjb21wdXRlZFN0eWxlcykge1xuICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lLCBfZiwgX2csIF9oLCBfaTtcbiAgY29uc3QgeyBzY2FsZSwgdHJhbnNmb3JtLCB0cmFuc2xhdGUgfSA9IGNvbXB1dGVkU3R5bGVzO1xuICBjb25zdCBwYXJzZWRTY2FsZSA9IHBhcnNlU2NhbGUoc2NhbGUpO1xuICBjb25zdCBwYXJzZWRUcmFuc2xhdGUgPSBwYXJzZVRyYW5zbGF0ZSh0cmFuc2xhdGUpO1xuICBjb25zdCBwYXJzZWRNYXRyaXggPSBwYXJzZVRyYW5zZm9ybU1hdHJpeCh0cmFuc2Zvcm0pO1xuICBpZiAoIXBhcnNlZE1hdHJpeCAmJiAhcGFyc2VkU2NhbGUgJiYgIXBhcnNlZFRyYW5zbGF0ZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IG5vcm1hbGl6ZWRTY2FsZSA9IHtcbiAgICB4OiAoX2EgPSBwYXJzZWRTY2FsZSA9PSBudWxsID8gdm9pZCAwIDogcGFyc2VkU2NhbGUueCkgIT0gbnVsbCA/IF9hIDogMSxcbiAgICB5OiAoX2IgPSBwYXJzZWRTY2FsZSA9PSBudWxsID8gdm9pZCAwIDogcGFyc2VkU2NhbGUueSkgIT0gbnVsbCA/IF9iIDogMVxuICB9O1xuICBjb25zdCBub3JtYWxpemVkVHJhbnNsYXRlID0ge1xuICAgIHg6IChfYyA9IHBhcnNlZFRyYW5zbGF0ZSA9PSBudWxsID8gdm9pZCAwIDogcGFyc2VkVHJhbnNsYXRlLngpICE9IG51bGwgPyBfYyA6IDAsXG4gICAgeTogKF9kID0gcGFyc2VkVHJhbnNsYXRlID09IG51bGwgPyB2b2lkIDAgOiBwYXJzZWRUcmFuc2xhdGUueSkgIT0gbnVsbCA/IF9kIDogMFxuICB9O1xuICBjb25zdCBub3JtYWxpemVkTWF0cml4ID0ge1xuICAgIHg6IChfZSA9IHBhcnNlZE1hdHJpeCA9PSBudWxsID8gdm9pZCAwIDogcGFyc2VkTWF0cml4LngpICE9IG51bGwgPyBfZSA6IDAsXG4gICAgeTogKF9mID0gcGFyc2VkTWF0cml4ID09IG51bGwgPyB2b2lkIDAgOiBwYXJzZWRNYXRyaXgueSkgIT0gbnVsbCA/IF9mIDogMCxcbiAgICBzY2FsZVg6IChfZyA9IHBhcnNlZE1hdHJpeCA9PSBudWxsID8gdm9pZCAwIDogcGFyc2VkTWF0cml4LnNjYWxlWCkgIT0gbnVsbCA/IF9nIDogMSxcbiAgICBzY2FsZVk6IChfaCA9IHBhcnNlZE1hdHJpeCA9PSBudWxsID8gdm9pZCAwIDogcGFyc2VkTWF0cml4LnNjYWxlWSkgIT0gbnVsbCA/IF9oIDogMVxuICB9O1xuICByZXR1cm4ge1xuICAgIHg6IG5vcm1hbGl6ZWRUcmFuc2xhdGUueCArIG5vcm1hbGl6ZWRNYXRyaXgueCxcbiAgICB5OiBub3JtYWxpemVkVHJhbnNsYXRlLnkgKyBub3JtYWxpemVkTWF0cml4LnksXG4gICAgejogKF9pID0gcGFyc2VkVHJhbnNsYXRlID09IG51bGwgPyB2b2lkIDAgOiBwYXJzZWRUcmFuc2xhdGUueikgIT0gbnVsbCA/IF9pIDogMCxcbiAgICBzY2FsZVg6IG5vcm1hbGl6ZWRTY2FsZS54ICogbm9ybWFsaXplZE1hdHJpeC5zY2FsZVgsXG4gICAgc2NhbGVZOiBub3JtYWxpemVkU2NhbGUueSAqIG5vcm1hbGl6ZWRNYXRyaXguc2NhbGVZXG4gIH07XG59XG5mdW5jdGlvbiBwYXJzZVRyYW5zZm9ybU1hdHJpeCh0cmFuc2Zvcm0pIHtcbiAgaWYgKHRyYW5zZm9ybS5zdGFydHNXaXRoKFwibWF0cml4M2QoXCIpKSB7XG4gICAgY29uc3QgdHJhbnNmb3JtQXJyYXkgPSB0cmFuc2Zvcm0uc2xpY2UoOSwgLTEpLnNwbGl0KC8sIC8pO1xuICAgIHJldHVybiB7XG4gICAgICB4OiArdHJhbnNmb3JtQXJyYXlbMTJdLFxuICAgICAgeTogK3RyYW5zZm9ybUFycmF5WzEzXSxcbiAgICAgIHNjYWxlWDogK3RyYW5zZm9ybUFycmF5WzBdLFxuICAgICAgc2NhbGVZOiArdHJhbnNmb3JtQXJyYXlbNV1cbiAgICB9O1xuICB9IGVsc2UgaWYgKHRyYW5zZm9ybS5zdGFydHNXaXRoKFwibWF0cml4KFwiKSkge1xuICAgIGNvbnN0IHRyYW5zZm9ybUFycmF5ID0gdHJhbnNmb3JtLnNsaWNlKDcsIC0xKS5zcGxpdCgvLCAvKTtcbiAgICByZXR1cm4ge1xuICAgICAgeDogK3RyYW5zZm9ybUFycmF5WzRdLFxuICAgICAgeTogK3RyYW5zZm9ybUFycmF5WzVdLFxuICAgICAgc2NhbGVYOiArdHJhbnNmb3JtQXJyYXlbMF0sXG4gICAgICBzY2FsZVk6ICt0cmFuc2Zvcm1BcnJheVszXVxuICAgIH07XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8vIHNyYy91dGlsaXRpZXMvc2Nyb2xsL2RldGVjdFNjcm9sbEludGVudC50c1xudmFyIFNjcm9sbERpcmVjdGlvbiA9IC8qIEBfX1BVUkVfXyAqLyAoKFNjcm9sbERpcmVjdGlvbjIpID0+IHtcbiAgU2Nyb2xsRGlyZWN0aW9uMltTY3JvbGxEaXJlY3Rpb24yW1wiSWRsZVwiXSA9IDBdID0gXCJJZGxlXCI7XG4gIFNjcm9sbERpcmVjdGlvbjJbU2Nyb2xsRGlyZWN0aW9uMltcIkZvcndhcmRcIl0gPSAxXSA9IFwiRm9yd2FyZFwiO1xuICBTY3JvbGxEaXJlY3Rpb24yW1Njcm9sbERpcmVjdGlvbjJbXCJSZXZlcnNlXCJdID0gLTFdID0gXCJSZXZlcnNlXCI7XG4gIHJldHVybiBTY3JvbGxEaXJlY3Rpb24yO1xufSkoU2Nyb2xsRGlyZWN0aW9uIHx8IHt9KTtcbnZhciBkZWZhdWx0VGhyZXNob2xkID0ge1xuICB4OiAwLjIsXG4gIHk6IDAuMlxufTtcbnZhciBkZWZhdWx0VG9sZXJhbmNlID0ge1xuICB4OiAxMCxcbiAgeTogMTBcbn07XG5mdW5jdGlvbiBkZXRlY3RTY3JvbGxJbnRlbnQoc2Nyb2xsYWJsZUVsZW1lbnQsIGNvb3JkaW5hdGVzLCBpbnRlbnQsIGFjY2VsZXJhdGlvbiA9IDI1LCB0aHJlc2hvbGRQZXJjZW50YWdlID0gZGVmYXVsdFRocmVzaG9sZCwgdG9sZXJhbmNlID0gZGVmYXVsdFRvbGVyYW5jZSkge1xuICBjb25zdCB7IHgsIHkgfSA9IGNvb3JkaW5hdGVzO1xuICBjb25zdCB7IHJlY3QsIGlzVG9wLCBpc0JvdHRvbSwgaXNMZWZ0LCBpc1JpZ2h0IH0gPSBnZXRTY3JvbGxQb3NpdGlvbihzY3JvbGxhYmxlRWxlbWVudCk7XG4gIGNvbnN0IGZyYW1lVHJhbnNmb3JtID0gZ2V0RnJhbWVUcmFuc2Zvcm0oc2Nyb2xsYWJsZUVsZW1lbnQpO1xuICBjb25zdCBjb21wdXRlZFN0eWxlcyA9IGdldENvbXB1dGVkU3R5bGVzKHNjcm9sbGFibGVFbGVtZW50LCB0cnVlKTtcbiAgY29uc3QgcGFyc2VkVHJhbnNmb3JtID0gcGFyc2VUcmFuc2Zvcm0oY29tcHV0ZWRTdHlsZXMpO1xuICBjb25zdCBpc1hBeGlzSW52ZXJ0ZWQgPSBwYXJzZWRUcmFuc2Zvcm0gIT09IG51bGwgPyAocGFyc2VkVHJhbnNmb3JtID09IG51bGwgPyB2b2lkIDAgOiBwYXJzZWRUcmFuc2Zvcm0uc2NhbGVYKSA8IDAgOiBmYWxzZTtcbiAgY29uc3QgaXNZQXhpc0ludmVydGVkID0gcGFyc2VkVHJhbnNmb3JtICE9PSBudWxsID8gKHBhcnNlZFRyYW5zZm9ybSA9PSBudWxsID8gdm9pZCAwIDogcGFyc2VkVHJhbnNmb3JtLnNjYWxlWSkgPCAwIDogZmFsc2U7XG4gIGNvbnN0IHNjcm9sbENvbnRhaW5lclJlY3QgPSBuZXcgUmVjdGFuZ2xlKFxuICAgIHJlY3QubGVmdCAqIGZyYW1lVHJhbnNmb3JtLnNjYWxlWCArIGZyYW1lVHJhbnNmb3JtLngsXG4gICAgcmVjdC50b3AgKiBmcmFtZVRyYW5zZm9ybS5zY2FsZVkgKyBmcmFtZVRyYW5zZm9ybS55LFxuICAgIHJlY3Qud2lkdGggKiBmcmFtZVRyYW5zZm9ybS5zY2FsZVgsXG4gICAgcmVjdC5oZWlnaHQgKiBmcmFtZVRyYW5zZm9ybS5zY2FsZVlcbiAgKTtcbiAgY29uc3QgZGlyZWN0aW9uID0ge1xuICAgIHg6IDAgLyogSWRsZSAqLyxcbiAgICB5OiAwIC8qIElkbGUgKi9cbiAgfTtcbiAgY29uc3Qgc3BlZWQgPSB7XG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH07XG4gIGNvbnN0IHRocmVzaG9sZDIgPSB7XG4gICAgaGVpZ2h0OiBzY3JvbGxDb250YWluZXJSZWN0LmhlaWdodCAqIHRocmVzaG9sZFBlcmNlbnRhZ2UueSxcbiAgICB3aWR0aDogc2Nyb2xsQ29udGFpbmVyUmVjdC53aWR0aCAqIHRocmVzaG9sZFBlcmNlbnRhZ2UueFxuICB9O1xuICBpZiAodGhyZXNob2xkMi5oZWlnaHQgPiAwICYmICghaXNUb3AgfHwgaXNZQXhpc0ludmVydGVkICYmICFpc0JvdHRvbSkgJiYgeSA8PSBzY3JvbGxDb250YWluZXJSZWN0LnRvcCArIHRocmVzaG9sZDIuaGVpZ2h0ICYmIChpbnRlbnQgPT0gbnVsbCA/IHZvaWQgMCA6IGludGVudC55KSAhPT0gMSAvKiBGb3J3YXJkICovICYmIHggPj0gc2Nyb2xsQ29udGFpbmVyUmVjdC5sZWZ0IC0gdG9sZXJhbmNlLnggJiYgeCA8PSBzY3JvbGxDb250YWluZXJSZWN0LnJpZ2h0ICsgdG9sZXJhbmNlLngpIHtcbiAgICBkaXJlY3Rpb24ueSA9IGlzWUF4aXNJbnZlcnRlZCA/IDEgLyogRm9yd2FyZCAqLyA6IC0xIC8qIFJldmVyc2UgKi87XG4gICAgc3BlZWQueSA9IGFjY2VsZXJhdGlvbiAqIE1hdGguYWJzKFxuICAgICAgKHNjcm9sbENvbnRhaW5lclJlY3QudG9wICsgdGhyZXNob2xkMi5oZWlnaHQgLSB5KSAvIHRocmVzaG9sZDIuaGVpZ2h0XG4gICAgKTtcbiAgfSBlbHNlIGlmICh0aHJlc2hvbGQyLmhlaWdodCA+IDAgJiYgKCFpc0JvdHRvbSB8fCBpc1lBeGlzSW52ZXJ0ZWQgJiYgIWlzVG9wKSAmJiB5ID49IHNjcm9sbENvbnRhaW5lclJlY3QuYm90dG9tIC0gdGhyZXNob2xkMi5oZWlnaHQgJiYgKGludGVudCA9PSBudWxsID8gdm9pZCAwIDogaW50ZW50LnkpICE9PSAtMSAvKiBSZXZlcnNlICovICYmIHggPj0gc2Nyb2xsQ29udGFpbmVyUmVjdC5sZWZ0IC0gdG9sZXJhbmNlLnggJiYgeCA8PSBzY3JvbGxDb250YWluZXJSZWN0LnJpZ2h0ICsgdG9sZXJhbmNlLngpIHtcbiAgICBkaXJlY3Rpb24ueSA9IGlzWUF4aXNJbnZlcnRlZCA/IC0xIC8qIFJldmVyc2UgKi8gOiAxIC8qIEZvcndhcmQgKi87XG4gICAgc3BlZWQueSA9IGFjY2VsZXJhdGlvbiAqIE1hdGguYWJzKFxuICAgICAgKHNjcm9sbENvbnRhaW5lclJlY3QuYm90dG9tIC0gdGhyZXNob2xkMi5oZWlnaHQgLSB5KSAvIHRocmVzaG9sZDIuaGVpZ2h0XG4gICAgKTtcbiAgfVxuICBpZiAodGhyZXNob2xkMi53aWR0aCA+IDAgJiYgKCFpc1JpZ2h0IHx8IGlzWEF4aXNJbnZlcnRlZCAmJiAhaXNMZWZ0KSAmJiB4ID49IHNjcm9sbENvbnRhaW5lclJlY3QucmlnaHQgLSB0aHJlc2hvbGQyLndpZHRoICYmIChpbnRlbnQgPT0gbnVsbCA/IHZvaWQgMCA6IGludGVudC54KSAhPT0gLTEgLyogUmV2ZXJzZSAqLyAmJiB5ID49IHNjcm9sbENvbnRhaW5lclJlY3QudG9wIC0gdG9sZXJhbmNlLnkgJiYgeSA8PSBzY3JvbGxDb250YWluZXJSZWN0LmJvdHRvbSArIHRvbGVyYW5jZS55KSB7XG4gICAgZGlyZWN0aW9uLnggPSBpc1hBeGlzSW52ZXJ0ZWQgPyAtMSAvKiBSZXZlcnNlICovIDogMSAvKiBGb3J3YXJkICovO1xuICAgIHNwZWVkLnggPSBhY2NlbGVyYXRpb24gKiBNYXRoLmFicyhcbiAgICAgIChzY3JvbGxDb250YWluZXJSZWN0LnJpZ2h0IC0gdGhyZXNob2xkMi53aWR0aCAtIHgpIC8gdGhyZXNob2xkMi53aWR0aFxuICAgICk7XG4gIH0gZWxzZSBpZiAodGhyZXNob2xkMi53aWR0aCA+IDAgJiYgKCFpc0xlZnQgfHwgaXNYQXhpc0ludmVydGVkICYmICFpc1JpZ2h0KSAmJiB4IDw9IHNjcm9sbENvbnRhaW5lclJlY3QubGVmdCArIHRocmVzaG9sZDIud2lkdGggJiYgKGludGVudCA9PSBudWxsID8gdm9pZCAwIDogaW50ZW50LngpICE9PSAxIC8qIEZvcndhcmQgKi8gJiYgeSA+PSBzY3JvbGxDb250YWluZXJSZWN0LnRvcCAtIHRvbGVyYW5jZS55ICYmIHkgPD0gc2Nyb2xsQ29udGFpbmVyUmVjdC5ib3R0b20gKyB0b2xlcmFuY2UueSkge1xuICAgIGRpcmVjdGlvbi54ID0gaXNYQXhpc0ludmVydGVkID8gMSAvKiBGb3J3YXJkICovIDogLTEgLyogUmV2ZXJzZSAqLztcbiAgICBzcGVlZC54ID0gYWNjZWxlcmF0aW9uICogTWF0aC5hYnMoXG4gICAgICAoc2Nyb2xsQ29udGFpbmVyUmVjdC5sZWZ0ICsgdGhyZXNob2xkMi53aWR0aCAtIHgpIC8gdGhyZXNob2xkMi53aWR0aFxuICAgICk7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBkaXJlY3Rpb24sXG4gICAgc3BlZWRcbiAgfTtcbn1cblxuLy8gc3JjL3V0aWxpdGllcy9zY3JvbGwvc2Nyb2xsSW50b1ZpZXdJZk5lZWRlZC50c1xuZnVuY3Rpb24gc2Nyb2xsSW50b1ZpZXdJZk5lZWRlZChlbCwgeyBibG9jayA9IFwibmVhcmVzdFwiLCBpbmxpbmUgPSBcIm5lYXJlc3RcIiB9ID0ge30pIHtcbiAgaWYgKCFpc0hUTUxFbGVtZW50KGVsKSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBzY3JvbGxhYmxlQW5jZXN0b3JzID0gZ2V0U2Nyb2xsYWJsZUFuY2VzdG9ycyhlbCk7XG4gIGNvbnN0IHByb2Nlc3NlZEFuY2VzdG9ycyA9IFtdO1xuICBmb3IgKGNvbnN0IGFuY2VzdG9yIG9mIHNjcm9sbGFibGVBbmNlc3RvcnMpIHtcbiAgICBpZiAoIWlzSFRNTEVsZW1lbnQoYW5jZXN0b3IpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgY29uc3QgeyB0b3AsIGxlZnQgfSA9IGdldE9mZnNldFJlbGF0aXZlVG8oZWwsIGFuY2VzdG9yKTtcbiAgICBsZXQgYWRqdXN0ZWRUb3AgPSB0b3A7XG4gICAgbGV0IGFkanVzdGVkTGVmdCA9IGxlZnQ7XG4gICAgZm9yIChjb25zdCBpbm5lciBvZiBwcm9jZXNzZWRBbmNlc3RvcnMpIHtcbiAgICAgIGFkanVzdGVkVG9wIC09IGlubmVyLnNjcm9sbFRvcDtcbiAgICAgIGFkanVzdGVkTGVmdCAtPSBpbm5lci5zY3JvbGxMZWZ0O1xuICAgIH1cbiAgICBpZiAoYmxvY2sgIT09IFwibm9uZVwiKSB7XG4gICAgICBjb25zdCBvdmVyVG9wID0gYWRqdXN0ZWRUb3AgPCBhbmNlc3Rvci5zY3JvbGxUb3A7XG4gICAgICBjb25zdCBvdmVyQm90dG9tID0gYWRqdXN0ZWRUb3AgKyBlbC5vZmZzZXRIZWlnaHQgPiBhbmNlc3Rvci5zY3JvbGxUb3AgKyBhbmNlc3Rvci5jbGllbnRIZWlnaHQ7XG4gICAgICBpZiAob3ZlclRvcCAhPT0gb3ZlckJvdHRvbSkge1xuICAgICAgICBpZiAoYmxvY2sgPT09IFwiY2VudGVyXCIpIHtcbiAgICAgICAgICBhbmNlc3Rvci5zY3JvbGxUb3AgPSBhZGp1c3RlZFRvcCAtIGFuY2VzdG9yLmNsaWVudEhlaWdodCAvIDIgKyBlbC5vZmZzZXRIZWlnaHQgLyAyO1xuICAgICAgICB9IGVsc2UgaWYgKG92ZXJUb3ApIHtcbiAgICAgICAgICBhbmNlc3Rvci5zY3JvbGxUb3AgPSBhZGp1c3RlZFRvcDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhbmNlc3Rvci5zY3JvbGxUb3AgPSBhZGp1c3RlZFRvcCArIGVsLm9mZnNldEhlaWdodCAtIGFuY2VzdG9yLmNsaWVudEhlaWdodDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaW5saW5lICE9PSBcIm5vbmVcIikge1xuICAgICAgY29uc3Qgb3ZlckxlZnQgPSBhZGp1c3RlZExlZnQgPCBhbmNlc3Rvci5zY3JvbGxMZWZ0O1xuICAgICAgY29uc3Qgb3ZlclJpZ2h0ID0gYWRqdXN0ZWRMZWZ0ICsgZWwub2Zmc2V0V2lkdGggPiBhbmNlc3Rvci5zY3JvbGxMZWZ0ICsgYW5jZXN0b3IuY2xpZW50V2lkdGg7XG4gICAgICBpZiAob3ZlckxlZnQgIT09IG92ZXJSaWdodCkge1xuICAgICAgICBpZiAoaW5saW5lID09PSBcImNlbnRlclwiKSB7XG4gICAgICAgICAgYW5jZXN0b3Iuc2Nyb2xsTGVmdCA9IGFkanVzdGVkTGVmdCAtIGFuY2VzdG9yLmNsaWVudFdpZHRoIC8gMiArIGVsLm9mZnNldFdpZHRoIC8gMjtcbiAgICAgICAgfSBlbHNlIGlmIChvdmVyTGVmdCkge1xuICAgICAgICAgIGFuY2VzdG9yLnNjcm9sbExlZnQgPSBhZGp1c3RlZExlZnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYW5jZXN0b3Iuc2Nyb2xsTGVmdCA9IGFkanVzdGVkTGVmdCArIGVsLm9mZnNldFdpZHRoIC0gYW5jZXN0b3IuY2xpZW50V2lkdGg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcHJvY2Vzc2VkQW5jZXN0b3JzLnB1c2goYW5jZXN0b3IpO1xuICB9XG59XG5mdW5jdGlvbiBnZXREb2N1bWVudE9mZnNldChlbGVtZW50KSB7XG4gIGxldCB0b3AgPSAwO1xuICBsZXQgbGVmdCA9IDA7XG4gIGxldCBjdXJyZW50ID0gZWxlbWVudDtcbiAgd2hpbGUgKGN1cnJlbnQpIHtcbiAgICB0b3AgKz0gY3VycmVudC5vZmZzZXRUb3A7XG4gICAgbGVmdCArPSBjdXJyZW50Lm9mZnNldExlZnQ7XG4gICAgY29uc3Qgb2Zmc2V0UGFyZW50ID0gY3VycmVudC5vZmZzZXRQYXJlbnQ7XG4gICAgaWYgKCFpc0hUTUxFbGVtZW50KG9mZnNldFBhcmVudCkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB0b3AgKz0gb2Zmc2V0UGFyZW50LmNsaWVudFRvcDtcbiAgICBsZWZ0ICs9IG9mZnNldFBhcmVudC5jbGllbnRMZWZ0O1xuICAgIGN1cnJlbnQgPSBvZmZzZXRQYXJlbnQ7XG4gIH1cbiAgcmV0dXJuIHsgdG9wLCBsZWZ0IH07XG59XG5mdW5jdGlvbiBnZXRPZmZzZXRSZWxhdGl2ZVRvKGVsZW1lbnQsIGFuY2VzdG9yKSB7XG4gIGNvbnN0IGVsT2Zmc2V0ID0gZ2V0RG9jdW1lbnRPZmZzZXQoZWxlbWVudCk7XG4gIGNvbnN0IGFuY2VzdG9yT2Zmc2V0ID0gZ2V0RG9jdW1lbnRPZmZzZXQoYW5jZXN0b3IpO1xuICByZXR1cm4ge1xuICAgIHRvcDogZWxPZmZzZXQudG9wIC0gYW5jZXN0b3JPZmZzZXQudG9wIC0gYW5jZXN0b3IuY2xpZW50VG9wLFxuICAgIGxlZnQ6IGVsT2Zmc2V0LmxlZnQgLSBhbmNlc3Rvck9mZnNldC5sZWZ0IC0gYW5jZXN0b3IuY2xpZW50TGVmdFxuICB9O1xufVxuXG4vLyBzcmMvdXRpbGl0aWVzL3RyYW5zZm9ybS9hcHBseVRyYW5zZm9ybS50c1xuZnVuY3Rpb24gYXBwbHlUcmFuc2Zvcm0ocmVjdCwgcGFyc2VkVHJhbnNmb3JtLCB0cmFuc2Zvcm1PcmlnaW4pIHtcbiAgY29uc3QgeyBzY2FsZVgsIHNjYWxlWSwgeDogdHJhbnNsYXRlWCwgeTogdHJhbnNsYXRlWSB9ID0gcGFyc2VkVHJhbnNmb3JtO1xuICBjb25zdCB4ID0gcmVjdC5sZWZ0ICsgdHJhbnNsYXRlWCArICgxIC0gc2NhbGVYKSAqIHBhcnNlRmxvYXQodHJhbnNmb3JtT3JpZ2luKTtcbiAgY29uc3QgeSA9IHJlY3QudG9wICsgdHJhbnNsYXRlWSArICgxIC0gc2NhbGVZKSAqIHBhcnNlRmxvYXQodHJhbnNmb3JtT3JpZ2luLnNsaWNlKHRyYW5zZm9ybU9yaWdpbi5pbmRleE9mKFwiIFwiKSArIDEpKTtcbiAgY29uc3QgdyA9IHNjYWxlWCA/IHJlY3Qud2lkdGggKiBzY2FsZVggOiByZWN0LndpZHRoO1xuICBjb25zdCBoID0gc2NhbGVZID8gcmVjdC5oZWlnaHQgKiBzY2FsZVkgOiByZWN0LmhlaWdodDtcbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogdyxcbiAgICBoZWlnaHQ6IGgsXG4gICAgdG9wOiB5LFxuICAgIHJpZ2h0OiB4ICsgdyxcbiAgICBib3R0b206IHkgKyBoLFxuICAgIGxlZnQ6IHhcbiAgfTtcbn1cblxuLy8gc3JjL3V0aWxpdGllcy90cmFuc2Zvcm0vaW52ZXJzZVRyYW5zZm9ybS50c1xuZnVuY3Rpb24gaW52ZXJzZVRyYW5zZm9ybShyZWN0LCBwYXJzZWRUcmFuc2Zvcm0sIHRyYW5zZm9ybU9yaWdpbikge1xuICBjb25zdCB7IHNjYWxlWCwgc2NhbGVZLCB4OiB0cmFuc2xhdGVYLCB5OiB0cmFuc2xhdGVZIH0gPSBwYXJzZWRUcmFuc2Zvcm07XG4gIGNvbnN0IHggPSByZWN0LmxlZnQgLSB0cmFuc2xhdGVYIC0gKDEgLSBzY2FsZVgpICogcGFyc2VGbG9hdCh0cmFuc2Zvcm1PcmlnaW4pO1xuICBjb25zdCB5ID0gcmVjdC50b3AgLSB0cmFuc2xhdGVZIC0gKDEgLSBzY2FsZVkpICogcGFyc2VGbG9hdCh0cmFuc2Zvcm1PcmlnaW4uc2xpY2UodHJhbnNmb3JtT3JpZ2luLmluZGV4T2YoXCIgXCIpICsgMSkpO1xuICBjb25zdCB3ID0gc2NhbGVYID8gcmVjdC53aWR0aCAvIHNjYWxlWCA6IHJlY3Qud2lkdGg7XG4gIGNvbnN0IGggPSBzY2FsZVkgPyByZWN0LmhlaWdodCAvIHNjYWxlWSA6IHJlY3QuaGVpZ2h0O1xuICByZXR1cm4ge1xuICAgIHdpZHRoOiB3LFxuICAgIGhlaWdodDogaCxcbiAgICB0b3A6IHksXG4gICAgcmlnaHQ6IHggKyB3LFxuICAgIGJvdHRvbTogeSArIGgsXG4gICAgbGVmdDogeFxuICB9O1xufVxuXG4vLyBzcmMvdXRpbGl0aWVzL3RyYW5zZm9ybS9hbmltYXRlVHJhbnNmb3JtLnRzXG5mdW5jdGlvbiBhbmltYXRlVHJhbnNmb3JtKHsgZWxlbWVudCwga2V5ZnJhbWVzLCBvcHRpb25zIH0pIHtcbiAgcmV0dXJuIGVsZW1lbnQuYW5pbWF0ZShrZXlmcmFtZXMsIG9wdGlvbnMpLmZpbmlzaGVkO1xufVxuXG4vLyBzcmMvdXRpbGl0aWVzL3RyYW5zZm9ybS9jb21wdXRlVHJhbnNsYXRlLnRzXG5mdW5jdGlvbiBjb21wdXRlVHJhbnNsYXRlKGVsZW1lbnQsIHRyYW5zbGF0ZSA9IGdldENvbXB1dGVkU3R5bGVzKGVsZW1lbnQpLnRyYW5zbGF0ZSwgcHJvamVjdGVkID0gdHJ1ZSkge1xuICBpZiAocHJvamVjdGVkKSB7XG4gICAgY29uc3Qga2V5ZnJhbWUgPSBnZXRGaW5hbEtleWZyYW1lKFxuICAgICAgZWxlbWVudCxcbiAgICAgIChrZXlmcmFtZTIpID0+IFwidHJhbnNsYXRlXCIgaW4ga2V5ZnJhbWUyXG4gICAgKTtcbiAgICBpZiAoa2V5ZnJhbWUpIHtcbiAgICAgIGNvbnN0IHsgdHJhbnNsYXRlOiB0cmFuc2xhdGUyID0gXCJcIiB9ID0ga2V5ZnJhbWVbMF07XG4gICAgICBpZiAodHlwZW9mIHRyYW5zbGF0ZTIgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgY29uc3QgZmluYWxUcmFuc2xhdGUgPSBwYXJzZVRyYW5zbGF0ZSh0cmFuc2xhdGUyKTtcbiAgICAgICAgaWYgKGZpbmFsVHJhbnNsYXRlKSB7XG4gICAgICAgICAgcmV0dXJuIGZpbmFsVHJhbnNsYXRlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmICh0cmFuc2xhdGUpIHtcbiAgICBjb25zdCBmaW5hbFRyYW5zbGF0ZSA9IHBhcnNlVHJhbnNsYXRlKHRyYW5zbGF0ZSk7XG4gICAgaWYgKGZpbmFsVHJhbnNsYXRlKSB7XG4gICAgICByZXR1cm4gZmluYWxUcmFuc2xhdGU7XG4gICAgfVxuICB9XG4gIHJldHVybiB7IHg6IDAsIHk6IDAsIHo6IDAgfTtcbn1cblxuLy8gc3JjL3V0aWxpdGllcy9hbmltYXRpb25zL2ZvcmNlRmluaXNoQW5pbWF0aW9ucy50c1xudmFyIHNjaGVkdWxlcjMgPSBuZXcgU2NoZWR1bGVyKChjYWxsYmFjaykgPT4gc2V0VGltZW91dChjYWxsYmFjaywgMCkpO1xudmFyIGFuaW1hdGlvbnMgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xudmFyIGNsZWFyMiA9IGFuaW1hdGlvbnMuY2xlYXIuYmluZChhbmltYXRpb25zKTtcbmZ1bmN0aW9uIGdldERvY3VtZW50QW5pbWF0aW9ucyhlbGVtZW50KSB7XG4gIGNvbnN0IGRvY3VtZW50MiA9IGVsZW1lbnQub3duZXJEb2N1bWVudDtcbiAgbGV0IGRvY3VtZW50QW5pbWF0aW9ucyA9IGFuaW1hdGlvbnMuZ2V0KGRvY3VtZW50Mik7XG4gIGlmIChkb2N1bWVudEFuaW1hdGlvbnMpIHJldHVybiBkb2N1bWVudEFuaW1hdGlvbnM7XG4gIGRvY3VtZW50QW5pbWF0aW9ucyA9IGRvY3VtZW50Mi5nZXRBbmltYXRpb25zKCk7XG4gIGFuaW1hdGlvbnMuc2V0KGRvY3VtZW50MiwgZG9jdW1lbnRBbmltYXRpb25zKTtcbiAgc2NoZWR1bGVyMy5zY2hlZHVsZShjbGVhcjIpO1xuICBjb25zdCBlbGVtZW50QW5pbWF0aW9ucyA9IGRvY3VtZW50QW5pbWF0aW9ucy5maWx0ZXIoXG4gICAgKGFuaW1hdGlvbikgPT4gaXNLZXlmcmFtZUVmZmVjdChhbmltYXRpb24uZWZmZWN0KSAmJiBhbmltYXRpb24uZWZmZWN0LnRhcmdldCA9PT0gZWxlbWVudFxuICApO1xuICBhbmltYXRpb25zLnNldChlbGVtZW50LCBlbGVtZW50QW5pbWF0aW9ucyk7XG4gIHJldHVybiBkb2N1bWVudEFuaW1hdGlvbnM7XG59XG5mdW5jdGlvbiBmb3JjZUZpbmlzaEFuaW1hdGlvbnMoZWxlbWVudCwgb3B0aW9ucykge1xuICBjb25zdCBhbmltYXRpb25zMiA9IGdldERvY3VtZW50QW5pbWF0aW9ucyhlbGVtZW50KS5maWx0ZXIoKGFuaW1hdGlvbikgPT4ge1xuICAgIHZhciBfYSwgX2I7XG4gICAgaWYgKGlzS2V5ZnJhbWVFZmZlY3QoYW5pbWF0aW9uLmVmZmVjdCkpIHtcbiAgICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBhbmltYXRpb24uZWZmZWN0O1xuICAgICAgY29uc3QgaXNWYWxpZFRhcmdldCA9IChfYiA9IHRhcmdldCAmJiAoKF9hID0gb3B0aW9ucy5pc1ZhbGlkVGFyZ2V0KSA9PSBudWxsID8gdm9pZCAwIDogX2EuY2FsbChvcHRpb25zLCB0YXJnZXQpKSkgIT0gbnVsbCA/IF9iIDogdHJ1ZTtcbiAgICAgIGlmIChpc1ZhbGlkVGFyZ2V0KSB7XG4gICAgICAgIHJldHVybiBhbmltYXRpb24uZWZmZWN0LmdldEtleWZyYW1lcygpLnNvbWUoKGtleWZyYW1lKSA9PiB7XG4gICAgICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiBvcHRpb25zLnByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIGlmIChrZXlmcmFtZVtwcm9wZXJ0eV0pIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9KS5tYXAoKGFuaW1hdGlvbikgPT4ge1xuICAgIGNvbnN0IHsgZWZmZWN0LCBjdXJyZW50VGltZSB9ID0gYW5pbWF0aW9uO1xuICAgIGNvbnN0IGR1cmF0aW9uID0gZWZmZWN0ID09IG51bGwgPyB2b2lkIDAgOiBlZmZlY3QuZ2V0Q29tcHV0ZWRUaW1pbmcoKS5kdXJhdGlvbjtcbiAgICBpZiAoYW5pbWF0aW9uLnBlbmRpbmcgfHwgYW5pbWF0aW9uLnBsYXlTdGF0ZSA9PT0gXCJmaW5pc2hlZFwiKSByZXR1cm47XG4gICAgaWYgKHR5cGVvZiBkdXJhdGlvbiA9PSBcIm51bWJlclwiICYmIHR5cGVvZiBjdXJyZW50VGltZSA9PSBcIm51bWJlclwiICYmIGN1cnJlbnRUaW1lIDwgZHVyYXRpb24pIHtcbiAgICAgIGFuaW1hdGlvbi5jdXJyZW50VGltZSA9IGR1cmF0aW9uO1xuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgYW5pbWF0aW9uLmN1cnJlbnRUaW1lID0gY3VycmVudFRpbWU7XG4gICAgICB9O1xuICAgIH1cbiAgfSk7XG4gIGlmIChhbmltYXRpb25zMi5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuICgpID0+IGFuaW1hdGlvbnMyLmZvckVhY2goKHJlc2V0KSA9PiByZXNldCA9PSBudWxsID8gdm9pZCAwIDogcmVzZXQoKSk7XG4gIH1cbn1cblxuLy8gc3JjL3V0aWxpdGllcy9zaGFwZXMvRE9NUmVjdGFuZ2xlLnRzXG52YXIgRE9NUmVjdGFuZ2xlID0gY2xhc3MgZXh0ZW5kcyBSZWN0YW5nbGUge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zID0ge30pIHtcbiAgICB2YXIgX2EsIF9iLCBfYywgX2Q7XG4gICAgY29uc3Qge1xuICAgICAgZnJhbWVUcmFuc2Zvcm0gPSBnZXRGcmFtZVRyYW5zZm9ybShlbGVtZW50KSxcbiAgICAgIGlnbm9yZVRyYW5zZm9ybXMsXG4gICAgICBnZXRCb3VuZGluZ0NsaWVudFJlY3QgPSBnZXRCb3VuZGluZ1JlY3RhbmdsZVxuICAgIH0gPSBvcHRpb25zO1xuICAgIGNvbnN0IHJlc2V0QW5pbWF0aW9ucyA9IGZvcmNlRmluaXNoQW5pbWF0aW9ucyhlbGVtZW50LCB7XG4gICAgICBwcm9wZXJ0aWVzOiBbXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGVcIiwgXCJzY2FsZVwiLCBcIndpZHRoXCIsIFwiaGVpZ2h0XCJdLFxuICAgICAgaXNWYWxpZFRhcmdldDogKHRhcmdldCkgPT4gKHRhcmdldCAhPT0gZWxlbWVudCB8fCBpc1NhZmFyaSgpKSAmJiB0YXJnZXQuY29udGFpbnMoZWxlbWVudClcbiAgICB9KTtcbiAgICBjb25zdCBib3VuZGluZ1JlY3RhbmdsZSA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50KTtcbiAgICBsZXQgeyB0b3AsIGxlZnQsIHdpZHRoLCBoZWlnaHQgfSA9IGJvdW5kaW5nUmVjdGFuZ2xlO1xuICAgIGxldCB1cGRhdGVkO1xuICAgIGNvbnN0IGNvbXB1dGVkU3R5bGVzID0gZ2V0Q29tcHV0ZWRTdHlsZXMoZWxlbWVudCk7XG4gICAgY29uc3QgcGFyc2VkVHJhbnNmb3JtID0gcGFyc2VUcmFuc2Zvcm0oY29tcHV0ZWRTdHlsZXMpO1xuICAgIGNvbnN0IHNjYWxlID0ge1xuICAgICAgeDogKF9hID0gcGFyc2VkVHJhbnNmb3JtID09IG51bGwgPyB2b2lkIDAgOiBwYXJzZWRUcmFuc2Zvcm0uc2NhbGVYKSAhPSBudWxsID8gX2EgOiAxLFxuICAgICAgeTogKF9iID0gcGFyc2VkVHJhbnNmb3JtID09IG51bGwgPyB2b2lkIDAgOiBwYXJzZWRUcmFuc2Zvcm0uc2NhbGVZKSAhPSBudWxsID8gX2IgOiAxXG4gICAgfTtcbiAgICBjb25zdCBwcm9qZWN0ZWRUcmFuc2Zvcm0gPSBnZXRQcm9qZWN0ZWRUcmFuc2Zvcm0oZWxlbWVudCwgY29tcHV0ZWRTdHlsZXMpO1xuICAgIHJlc2V0QW5pbWF0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogcmVzZXRBbmltYXRpb25zKCk7XG4gICAgaWYgKHBhcnNlZFRyYW5zZm9ybSkge1xuICAgICAgdXBkYXRlZCA9IGludmVyc2VUcmFuc2Zvcm0oXG4gICAgICAgIGJvdW5kaW5nUmVjdGFuZ2xlLFxuICAgICAgICBwYXJzZWRUcmFuc2Zvcm0sXG4gICAgICAgIGNvbXB1dGVkU3R5bGVzLnRyYW5zZm9ybU9yaWdpblxuICAgICAgKTtcbiAgICAgIGlmIChpZ25vcmVUcmFuc2Zvcm1zIHx8IHByb2plY3RlZFRyYW5zZm9ybSkge1xuICAgICAgICB0b3AgPSB1cGRhdGVkLnRvcDtcbiAgICAgICAgbGVmdCA9IHVwZGF0ZWQubGVmdDtcbiAgICAgICAgd2lkdGggPSB1cGRhdGVkLndpZHRoO1xuICAgICAgICBoZWlnaHQgPSB1cGRhdGVkLmhlaWdodDtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgaW50cmluc2ljID0ge1xuICAgICAgd2lkdGg6IChfYyA9IHVwZGF0ZWQgPT0gbnVsbCA/IHZvaWQgMCA6IHVwZGF0ZWQud2lkdGgpICE9IG51bGwgPyBfYyA6IHdpZHRoLFxuICAgICAgaGVpZ2h0OiAoX2QgPSB1cGRhdGVkID09IG51bGwgPyB2b2lkIDAgOiB1cGRhdGVkLmhlaWdodCkgIT0gbnVsbCA/IF9kIDogaGVpZ2h0XG4gICAgfTtcbiAgICBpZiAocHJvamVjdGVkVHJhbnNmb3JtICYmICFpZ25vcmVUcmFuc2Zvcm1zICYmIHVwZGF0ZWQpIHtcbiAgICAgIGNvbnN0IHByb2plY3RlZCA9IGFwcGx5VHJhbnNmb3JtKFxuICAgICAgICB1cGRhdGVkLFxuICAgICAgICBwcm9qZWN0ZWRUcmFuc2Zvcm0sXG4gICAgICAgIGNvbXB1dGVkU3R5bGVzLnRyYW5zZm9ybU9yaWdpblxuICAgICAgKTtcbiAgICAgIHRvcCA9IHByb2plY3RlZC50b3A7XG4gICAgICBsZWZ0ID0gcHJvamVjdGVkLmxlZnQ7XG4gICAgICB3aWR0aCA9IHByb2plY3RlZC53aWR0aDtcbiAgICAgIGhlaWdodCA9IHByb2plY3RlZC5oZWlnaHQ7XG4gICAgICBzY2FsZS54ID0gcHJvamVjdGVkVHJhbnNmb3JtLnNjYWxlWDtcbiAgICAgIHNjYWxlLnkgPSBwcm9qZWN0ZWRUcmFuc2Zvcm0uc2NhbGVZO1xuICAgIH1cbiAgICBpZiAoZnJhbWVUcmFuc2Zvcm0pIHtcbiAgICAgIGlmICghaWdub3JlVHJhbnNmb3Jtcykge1xuICAgICAgICBsZWZ0ICo9IGZyYW1lVHJhbnNmb3JtLnNjYWxlWDtcbiAgICAgICAgd2lkdGggKj0gZnJhbWVUcmFuc2Zvcm0uc2NhbGVYO1xuICAgICAgICB0b3AgKj0gZnJhbWVUcmFuc2Zvcm0uc2NhbGVZO1xuICAgICAgICBoZWlnaHQgKj0gZnJhbWVUcmFuc2Zvcm0uc2NhbGVZO1xuICAgICAgfVxuICAgICAgbGVmdCArPSBmcmFtZVRyYW5zZm9ybS54O1xuICAgICAgdG9wICs9IGZyYW1lVHJhbnNmb3JtLnk7XG4gICAgfVxuICAgIHN1cGVyKGxlZnQsIHRvcCwgd2lkdGgsIGhlaWdodCk7XG4gICAgdGhpcy5zY2FsZSA9IHNjYWxlO1xuICAgIHRoaXMuaW50cmluc2ljV2lkdGggPSBpbnRyaW5zaWMud2lkdGg7XG4gICAgdGhpcy5pbnRyaW5zaWNIZWlnaHQgPSBpbnRyaW5zaWMuaGVpZ2h0O1xuICB9XG59O1xuZnVuY3Rpb24gZ2V0UHJvamVjdGVkVHJhbnNmb3JtKGVsZW1lbnQsIGNvbXB1dGVkU3R5bGVzKSB7XG4gIGNvbnN0IGFuaW1hdGlvbnMyID0gZWxlbWVudC5nZXRBbmltYXRpb25zKCk7XG4gIGlmICghYW5pbWF0aW9uczIubGVuZ3RoKSByZXR1cm4gbnVsbDtcbiAgbGV0IGxhdGVzdFRyYW5zZm9ybTtcbiAgbGV0IGxhdGVzdFRyYW5zbGF0ZTtcbiAgbGV0IGxhdGVzdFNjYWxlO1xuICBsZXQgaGFzQW5pbWF0ZWRQcm9wZXJ0eSA9IGZhbHNlO1xuICBmb3IgKGNvbnN0IGFuaW1hdGlvbiBvZiBhbmltYXRpb25zMikge1xuICAgIGlmIChhbmltYXRpb24ucGxheVN0YXRlICE9PSBcInJ1bm5pbmdcIikgY29udGludWU7XG4gICAgY29uc3Qga2V5ZnJhbWVzID0gaXNLZXlmcmFtZUVmZmVjdChhbmltYXRpb24uZWZmZWN0KSA/IGFuaW1hdGlvbi5lZmZlY3QuZ2V0S2V5ZnJhbWVzKCkgOiBbXTtcbiAgICBjb25zdCBrZXlmcmFtZSA9IGtleWZyYW1lc1trZXlmcmFtZXMubGVuZ3RoIC0gMV07XG4gICAgaWYgKCFrZXlmcmFtZSkgY29udGludWU7XG4gICAgY29uc3QgeyB0cmFuc2Zvcm0sIHRyYW5zbGF0ZSwgc2NhbGUgfSA9IGtleWZyYW1lO1xuICAgIGlmICh0eXBlb2YgdHJhbnNmb3JtID09PSBcInN0cmluZ1wiICYmIHRyYW5zZm9ybSkge1xuICAgICAgbGF0ZXN0VHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgICAgaGFzQW5pbWF0ZWRQcm9wZXJ0eSA9IHRydWU7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdHJhbnNsYXRlID09PSBcInN0cmluZ1wiICYmIHRyYW5zbGF0ZSkge1xuICAgICAgbGF0ZXN0VHJhbnNsYXRlID0gdHJhbnNsYXRlO1xuICAgICAgaGFzQW5pbWF0ZWRQcm9wZXJ0eSA9IHRydWU7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygc2NhbGUgPT09IFwic3RyaW5nXCIgJiYgc2NhbGUpIHtcbiAgICAgIGxhdGVzdFNjYWxlID0gc2NhbGU7XG4gICAgICBoYXNBbmltYXRlZFByb3BlcnR5ID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgaWYgKCFoYXNBbmltYXRlZFByb3BlcnR5KSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIHBhcnNlVHJhbnNmb3JtKHtcbiAgICB0cmFuc2Zvcm06IGxhdGVzdFRyYW5zZm9ybSAhPSBudWxsID8gbGF0ZXN0VHJhbnNmb3JtIDogY29tcHV0ZWRTdHlsZXMudHJhbnNmb3JtLFxuICAgIHRyYW5zbGF0ZTogbGF0ZXN0VHJhbnNsYXRlICE9IG51bGwgPyBsYXRlc3RUcmFuc2xhdGUgOiBjb21wdXRlZFN0eWxlcy50cmFuc2xhdGUsXG4gICAgc2NhbGU6IGxhdGVzdFNjYWxlICE9IG51bGwgPyBsYXRlc3RTY2FsZSA6IGNvbXB1dGVkU3R5bGVzLnNjYWxlXG4gIH0pO1xufVxuXG4vLyBzcmMvdXRpbGl0aWVzL3R5cGUtZ3VhcmRzL3N1cHBvcnRzU3R5bGUudHNcbmZ1bmN0aW9uIHN1cHBvcnRzU3R5bGUoZWxlbWVudCkge1xuICByZXR1cm4gXCJzdHlsZVwiIGluIGVsZW1lbnQgJiYgdHlwZW9mIGVsZW1lbnQuc3R5bGUgPT09IFwib2JqZWN0XCIgJiYgZWxlbWVudC5zdHlsZSAhPT0gbnVsbCAmJiBcInNldFByb3BlcnR5XCIgaW4gZWxlbWVudC5zdHlsZSAmJiBcInJlbW92ZVByb3BlcnR5XCIgaW4gZWxlbWVudC5zdHlsZSAmJiB0eXBlb2YgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5ID09PSBcImZ1bmN0aW9uXCI7XG59XG5cbi8vIHNyYy91dGlsaXRpZXMvc3R5bGVzL1N0eWxlcy50c1xudmFyIFN0eWxlcyA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5pbml0aWFsID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgfVxuICBzZXQocHJvcGVydGllcywgcHJlZml4ID0gXCJcIikge1xuICAgIGNvbnN0IHsgZWxlbWVudCB9ID0gdGhpcztcbiAgICBpZiAoIXN1cHBvcnRzU3R5bGUoZWxlbWVudCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocHJvcGVydGllcykpIHtcbiAgICAgIGNvbnN0IHByb3BlcnR5ID0gYCR7cHJlZml4fSR7a2V5fWA7XG4gICAgICBpZiAoIXRoaXMuaW5pdGlhbC5oYXMocHJvcGVydHkpKSB7XG4gICAgICAgIHRoaXMuaW5pdGlhbC5zZXQocHJvcGVydHksIGVsZW1lbnQuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShwcm9wZXJ0eSkpO1xuICAgICAgfVxuICAgICAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgICAgcHJvcGVydHksXG4gICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiA/IHZhbHVlIDogYCR7dmFsdWV9cHhgXG4gICAgICApO1xuICAgIH1cbiAgfVxuICByZW1vdmUocHJvcGVydGllcywgcHJlZml4ID0gXCJcIikge1xuICAgIGNvbnN0IHsgZWxlbWVudCB9ID0gdGhpcztcbiAgICBpZiAoIXN1cHBvcnRzU3R5bGUoZWxlbWVudCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9yIChjb25zdCBrZXkgb2YgcHJvcGVydGllcykge1xuICAgICAgY29uc3QgcHJvcGVydHkgPSBgJHtwcmVmaXh9JHtrZXl9YDtcbiAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkocHJvcGVydHkpO1xuICAgIH1cbiAgfVxuICByZXNldCgpIHtcbiAgICBjb25zdCB7IGVsZW1lbnQgfSA9IHRoaXM7XG4gICAgaWYgKCFzdXBwb3J0c1N0eWxlKGVsZW1lbnQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIHRoaXMuaW5pdGlhbCkge1xuICAgICAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShrZXksIHZhbHVlKTtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwic3R5bGVcIikgPT09IFwiXCIpIHtcbiAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIik7XG4gICAgfVxuICB9XG59O1xuXG4vLyBzcmMvdXRpbGl0aWVzL3R5cGUtZ3VhcmRzL2lzRWxlbWVudC50c1xuZnVuY3Rpb24gaXNFbGVtZW50KHRhcmdldCkge1xuICBpZiAoIXRhcmdldCkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gdGFyZ2V0IGluc3RhbmNlb2YgZ2V0V2luZG93KHRhcmdldCkuRWxlbWVudCB8fCBpc05vZGUodGFyZ2V0KSAmJiB0YXJnZXQubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFO1xufVxuXG4vLyBzcmMvdXRpbGl0aWVzL3R5cGUtZ3VhcmRzL2lzS2V5Ym9hcmRFdmVudC50c1xuZnVuY3Rpb24gaXNLZXlib2FyZEV2ZW50KGV2ZW50KSB7XG4gIGlmICghZXZlbnQpIHJldHVybiBmYWxzZTtcbiAgY29uc3QgeyBLZXlib2FyZEV2ZW50IH0gPSBnZXRXaW5kb3coZXZlbnQudGFyZ2V0KTtcbiAgcmV0dXJuIGV2ZW50IGluc3RhbmNlb2YgS2V5Ym9hcmRFdmVudDtcbn1cblxuLy8gc3JjL3V0aWxpdGllcy90eXBlLWd1YXJkcy9pc1BvaW50ZXJFdmVudC50c1xuZnVuY3Rpb24gaXNQb2ludGVyRXZlbnQoZXZlbnQpIHtcbiAgaWYgKCFldmVudCkgcmV0dXJuIGZhbHNlO1xuICBjb25zdCB7IFBvaW50ZXJFdmVudCB9ID0gZ2V0V2luZG93KGV2ZW50LnRhcmdldCk7XG4gIHJldHVybiBldmVudCBpbnN0YW5jZW9mIFBvaW50ZXJFdmVudDtcbn1cblxuLy8gc3JjL3V0aWxpdGllcy90eXBlLWd1YXJkcy9zdXBwb3J0c1ZpZXdUcmFuc2l0aW9uLnRzXG5mdW5jdGlvbiBzdXBwb3J0c1ZpZXdUcmFuc2l0aW9uKGRvY3VtZW50Mikge1xuICByZXR1cm4gXCJzdGFydFZpZXdUcmFuc2l0aW9uXCIgaW4gZG9jdW1lbnQyO1xufVxuXG4vLyBzcmMvdXRpbGl0aWVzL3R5cGUtZ3VhcmRzL2lzVGV4dElucHV0LnRzXG5mdW5jdGlvbiBpc1RleHRJbnB1dCh0YXJnZXQpIHtcbiAgaWYgKCFpc0VsZW1lbnQodGFyZ2V0KSkgcmV0dXJuIGZhbHNlO1xuICBjb25zdCB7IHRhZ05hbWUgfSA9IHRhcmdldDtcbiAgcmV0dXJuIHRhZ05hbWUgPT09IFwiSU5QVVRcIiB8fCB0YWdOYW1lID09PSBcIlRFWFRBUkVBXCIgfHwgaXNDb250ZW50RWRpdGFibGUodGFyZ2V0KTtcbn1cbmZ1bmN0aW9uIGlzQ29udGVudEVkaXRhYmxlKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQuaGFzQXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIpICYmIGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIpICE9PSBcImZhbHNlXCI7XG59XG5cbi8vIHNyYy91dGlsaXRpZXMvbWlzYy9nZW5lcmF0ZVVuaXF1ZUlkLnRzXG52YXIgaWRzID0ge307XG5mdW5jdGlvbiBnZW5lcmF0ZVVuaXF1ZUlkKHByZWZpeCkge1xuICBjb25zdCBpZCA9IGlkc1twcmVmaXhdID09IG51bGwgPyAwIDogaWRzW3ByZWZpeF0gKyAxO1xuICBpZHNbcHJlZml4XSA9IGlkO1xuICByZXR1cm4gYCR7cHJlZml4fS0ke2lkfWA7XG59XG5cbmV4cG9ydCB7IERPTVJlY3RhbmdsZSwgTGlzdGVuZXJzLCBGcmFtZU9ic2VydmVyIGFzIFBvc2l0aW9uT2JzZXJ2ZXIsIFByb3hpZWRFbGVtZW50cywgUmVzaXplTm90aWZpZXIsIFNjaGVkdWxlciwgU2Nyb2xsRGlyZWN0aW9uLCBTdHlsZXMsIGFuaW1hdGVUcmFuc2Zvcm0sIGNhblNjcm9sbCwgY2FuVXNlRE9NLCBjbG9uZUVsZW1lbnQsIGNvbXB1dGVUcmFuc2xhdGUsIGRldGVjdFNjcm9sbEludGVudCwgZ2VuZXJhdGVVbmlxdWVJZCwgZ2V0Qm91bmRpbmdSZWN0YW5nbGUsIGdldENvbXB1dGVkU3R5bGVzLCBnZXREb2N1bWVudCwgZ2V0RG9jdW1lbnRzLCBnZXRFbGVtZW50RnJvbVBvaW50LCBnZXRFdmVudENvb3JkaW5hdGVzLCBnZXRGaW5hbEtleWZyYW1lLCBnZXRGaXJzdFNjcm9sbGFibGVBbmNlc3RvciwgZ2V0Rml4ZWRQb3NpdGlvbk9mZnNldCwgZ2V0RnJhbWVFbGVtZW50LCBnZXRGcmFtZVRyYW5zZm9ybSwgZ2V0SW50ZXJhY3RpdmVFbGVtZW50LCBnZXRSb290LCBnZXRTY3JvbGxhYmxlQW5jZXN0b3JzLCBnZXRWaWV3cG9ydEJvdW5kaW5nUmVjdGFuZ2xlLCBnZXRWaXNpYmxlQm91bmRpbmdSZWN0YW5nbGUsIGdldFdpbmRvdywgaGlkZVBvcG92ZXIsIGludmVyc2VUcmFuc2Zvcm0sIGlzRG9jdW1lbnQsIGlzRG9jdW1lbnRTY3JvbGxpbmdFbGVtZW50LCBpc0VsZW1lbnQsIGlzSFRNTEVsZW1lbnQsIGlzSW50ZXJhY3RpdmVFbGVtZW50LCBpc0tleWJvYXJkRXZlbnQsIGlzS2V5ZnJhbWVFZmZlY3QsIGlzUG9pbnRlckV2ZW50LCBpc1NhZmFyaSwgaXNTaGFkb3dSb290LCBpc1RleHRJbnB1dCwgcGFyc2VUcmFuc2Zvcm0sIHBhcnNlVHJhbnNsYXRlLCBwcmVmZXJzUmVkdWNlZE1vdGlvbiwgc2NoZWR1bGVyLCBzY3JvbGxJbnRvVmlld0lmTmVlZGVkLCBzaG93UG9wb3Zlciwgc3VwcG9ydHNQb3BvdmVyLCBzdXBwb3J0c1N0eWxlLCBzdXBwb3J0c1ZpZXdUcmFuc2l0aW9uLCB0aW1lb3V0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlsaXRpZXMuanMubWFwXG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlsaXRpZXMuanMubWFwIiwKICAgICIvLyBzcmMvYWxnb3JpdGhtcy9wb2ludGVySW50ZXJzZWN0aW9uLnRzXG5pbXBvcnQgeyBDb2xsaXNpb25Qcmlvcml0eSwgQ29sbGlzaW9uVHlwZSB9IGZyb20gXCJAZG5kLWtpdC9hYnN0cmFjdFwiO1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tIFwiQGRuZC1raXQvZ2VvbWV0cnlcIjtcbnZhciBwb2ludGVySW50ZXJzZWN0aW9uID0gKHtcbiAgZHJhZ09wZXJhdGlvbixcbiAgZHJvcHBhYmxlXG59KSA9PiB7XG4gIGNvbnN0IHBvaW50ZXJDb29yZGluYXRlcyA9IGRyYWdPcGVyYXRpb24ucG9zaXRpb24uY3VycmVudDtcbiAgaWYgKCFwb2ludGVyQ29vcmRpbmF0ZXMpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCB7IGlkIH0gPSBkcm9wcGFibGU7XG4gIGlmICghZHJvcHBhYmxlLnNoYXBlKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKGRyb3BwYWJsZS5zaGFwZS5jb250YWluc1BvaW50KHBvaW50ZXJDb29yZGluYXRlcykpIHtcbiAgICBjb25zdCBkaXN0YW5jZSA9IFBvaW50LmRpc3RhbmNlKGRyb3BwYWJsZS5zaGFwZS5jZW50ZXIsIHBvaW50ZXJDb29yZGluYXRlcyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkLFxuICAgICAgdmFsdWU6IDEgLyBkaXN0YW5jZSxcbiAgICAgIHR5cGU6IENvbGxpc2lvblR5cGUuUG9pbnRlckludGVyc2VjdGlvbixcbiAgICAgIHByaW9yaXR5OiBDb2xsaXNpb25Qcmlvcml0eS5IaWdoXG4gICAgfTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG5cbi8vIHNyYy9hbGdvcml0aG1zL3NoYXBlSW50ZXJzZWN0aW9uLnRzXG5pbXBvcnQgeyBDb2xsaXNpb25Qcmlvcml0eSBhcyBDb2xsaXNpb25Qcmlvcml0eTIsIENvbGxpc2lvblR5cGUgYXMgQ29sbGlzaW9uVHlwZTIgfSBmcm9tIFwiQGRuZC1raXQvYWJzdHJhY3RcIjtcbmltcG9ydCB7IFBvaW50IGFzIFBvaW50MiB9IGZyb20gXCJAZG5kLWtpdC9nZW9tZXRyeVwiO1xudmFyIHNoYXBlSW50ZXJzZWN0aW9uID0gKHtcbiAgZHJhZ09wZXJhdGlvbixcbiAgZHJvcHBhYmxlXG59KSA9PiB7XG4gIGNvbnN0IHsgc2hhcGUgfSA9IGRyYWdPcGVyYXRpb247XG4gIGlmICghZHJvcHBhYmxlLnNoYXBlIHx8ICEoc2hhcGUgPT0gbnVsbCA/IHZvaWQgMCA6IHNoYXBlLmN1cnJlbnQpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY29uc3QgaW50ZXJzZWN0aW9uQXJlYSA9IHNoYXBlLmN1cnJlbnQuaW50ZXJzZWN0aW9uQXJlYShkcm9wcGFibGUuc2hhcGUpO1xuICBpZiAoaW50ZXJzZWN0aW9uQXJlYSkge1xuICAgIGNvbnN0IHsgcG9zaXRpb24gfSA9IGRyYWdPcGVyYXRpb247XG4gICAgY29uc3QgZGlzdGFuY2UgPSBQb2ludDIuZGlzdGFuY2UoZHJvcHBhYmxlLnNoYXBlLmNlbnRlciwgcG9zaXRpb24uY3VycmVudCk7XG4gICAgY29uc3QgaW50ZXJzZWN0aW9uUmF0aW8gPSBpbnRlcnNlY3Rpb25BcmVhIC8gKHNoYXBlLmN1cnJlbnQuYXJlYSArIGRyb3BwYWJsZS5zaGFwZS5hcmVhIC0gaW50ZXJzZWN0aW9uQXJlYSk7XG4gICAgY29uc3QgdmFsdWUgPSBpbnRlcnNlY3Rpb25SYXRpbyAvIGRpc3RhbmNlO1xuICAgIHJldHVybiB7XG4gICAgICBpZDogZHJvcHBhYmxlLmlkLFxuICAgICAgdmFsdWUsXG4gICAgICB0eXBlOiBDb2xsaXNpb25UeXBlMi5TaGFwZUludGVyc2VjdGlvbixcbiAgICAgIHByaW9yaXR5OiBDb2xsaXNpb25Qcmlvcml0eTIuTm9ybWFsXG4gICAgfTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG5cbi8vIHNyYy9hbGdvcml0aG1zL2RlZmF1bHQudHNcbnZhciBkZWZhdWx0Q29sbGlzaW9uRGV0ZWN0aW9uID0gKGFyZ3MpID0+IHtcbiAgdmFyIF9hO1xuICByZXR1cm4gKF9hID0gcG9pbnRlckludGVyc2VjdGlvbihhcmdzKSkgIT0gbnVsbCA/IF9hIDogc2hhcGVJbnRlcnNlY3Rpb24oYXJncyk7XG59O1xuXG4vLyBzcmMvYWxnb3JpdGhtcy9jbG9zZXN0Q29ybmVycy50c1xuaW1wb3J0IHsgQ29sbGlzaW9uUHJpb3JpdHkgYXMgQ29sbGlzaW9uUHJpb3JpdHkzLCBDb2xsaXNpb25UeXBlIGFzIENvbGxpc2lvblR5cGUzIH0gZnJvbSBcIkBkbmQta2l0L2Fic3RyYWN0XCI7XG5pbXBvcnQgeyBQb2ludCBhcyBQb2ludDMsIFJlY3RhbmdsZSB9IGZyb20gXCJAZG5kLWtpdC9nZW9tZXRyeVwiO1xudmFyIGNsb3Nlc3RDb3JuZXJzID0gKGlucHV0KSA9PiB7XG4gIGNvbnN0IHsgZHJhZ09wZXJhdGlvbiwgZHJvcHBhYmxlIH0gPSBpbnB1dDtcbiAgY29uc3QgeyBzaGFwZSwgcG9zaXRpb24gfSA9IGRyYWdPcGVyYXRpb247XG4gIGlmICghZHJvcHBhYmxlLnNoYXBlKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY29uc3Qgc2hhcGVDb3JuZXJzID0gc2hhcGUgPyBSZWN0YW5nbGUuZnJvbShzaGFwZS5jdXJyZW50LmJvdW5kaW5nUmVjdGFuZ2xlKS5jb3JuZXJzIDogdm9pZCAwO1xuICBjb25zdCBkaXN0YW5jZSA9IFJlY3RhbmdsZS5mcm9tKFxuICAgIGRyb3BwYWJsZS5zaGFwZS5ib3VuZGluZ1JlY3RhbmdsZVxuICApLmNvcm5lcnMucmVkdWNlKFxuICAgIChhY2MsIGNvcm5lciwgaW5kZXgpID0+IHtcbiAgICAgIHZhciBfYTtcbiAgICAgIHJldHVybiBhY2MgKyBQb2ludDMuZGlzdGFuY2UoXG4gICAgICAgIFBvaW50My5mcm9tKGNvcm5lciksXG4gICAgICAgIChfYSA9IHNoYXBlQ29ybmVycyA9PSBudWxsID8gdm9pZCAwIDogc2hhcGVDb3JuZXJzW2luZGV4XSkgIT0gbnVsbCA/IF9hIDogcG9zaXRpb24uY3VycmVudFxuICAgICAgKTtcbiAgICB9LFxuICAgIDBcbiAgKTtcbiAgY29uc3QgdmFsdWUgPSBkaXN0YW5jZSAvIDQ7XG4gIHJldHVybiB7XG4gICAgaWQ6IGRyb3BwYWJsZS5pZCxcbiAgICB2YWx1ZTogMSAvIHZhbHVlLFxuICAgIHR5cGU6IENvbGxpc2lvblR5cGUzLkNvbGxpc2lvbixcbiAgICBwcmlvcml0eTogQ29sbGlzaW9uUHJpb3JpdHkzLk5vcm1hbFxuICB9O1xufTtcblxuLy8gc3JjL2FsZ29yaXRobXMvY2xvc2VzdENlbnRlci50c1xuaW1wb3J0IHsgQ29sbGlzaW9uUHJpb3JpdHkgYXMgQ29sbGlzaW9uUHJpb3JpdHk0LCBDb2xsaXNpb25UeXBlIGFzIENvbGxpc2lvblR5cGU0IH0gZnJvbSBcIkBkbmQta2l0L2Fic3RyYWN0XCI7XG5pbXBvcnQgeyBQb2ludCBhcyBQb2ludDQgfSBmcm9tIFwiQGRuZC1raXQvZ2VvbWV0cnlcIjtcbnZhciBjbG9zZXN0Q2VudGVyID0gKGlucHV0KSA9PiB7XG4gIHZhciBfYTtcbiAgY29uc3QgeyBkcmFnT3BlcmF0aW9uLCBkcm9wcGFibGUgfSA9IGlucHV0O1xuICBjb25zdCB7IHNoYXBlLCBwb3NpdGlvbiB9ID0gZHJhZ09wZXJhdGlvbjtcbiAgaWYgKCFkcm9wcGFibGUuc2hhcGUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCBjb2xsaXNpb24gPSBkZWZhdWx0Q29sbGlzaW9uRGV0ZWN0aW9uKGlucHV0KTtcbiAgaWYgKGNvbGxpc2lvbikge1xuICAgIHJldHVybiBjb2xsaXNpb247XG4gIH1cbiAgY29uc3QgZGlzdGFuY2UgPSBQb2ludDQuZGlzdGFuY2UoXG4gICAgZHJvcHBhYmxlLnNoYXBlLmNlbnRlcixcbiAgICAoX2EgPSBzaGFwZSA9PSBudWxsID8gdm9pZCAwIDogc2hhcGUuY3VycmVudC5jZW50ZXIpICE9IG51bGwgPyBfYSA6IHBvc2l0aW9uLmN1cnJlbnRcbiAgKTtcbiAgY29uc3QgdmFsdWUgPSAxIC8gZGlzdGFuY2U7XG4gIHJldHVybiB7XG4gICAgaWQ6IGRyb3BwYWJsZS5pZCxcbiAgICB2YWx1ZSxcbiAgICB0eXBlOiBDb2xsaXNpb25UeXBlNC5Db2xsaXNpb24sXG4gICAgcHJpb3JpdHk6IENvbGxpc2lvblByaW9yaXR5NC5Ob3JtYWxcbiAgfTtcbn07XG5cbi8vIHNyYy9hbGdvcml0aG1zL2RpcmVjdGlvbkJpYXNlZC50c1xuaW1wb3J0IHsgQ29sbGlzaW9uUHJpb3JpdHkgYXMgQ29sbGlzaW9uUHJpb3JpdHk1LCBDb2xsaXNpb25UeXBlIGFzIENvbGxpc2lvblR5cGU1IH0gZnJvbSBcIkBkbmQta2l0L2Fic3RyYWN0XCI7XG5pbXBvcnQgeyBQb2ludCBhcyBQb2ludDUgfSBmcm9tIFwiQGRuZC1raXQvZ2VvbWV0cnlcIjtcbnZhciBkaXJlY3Rpb25CaWFzZWQgPSAoe1xuICBkcmFnT3BlcmF0aW9uLFxuICBkcm9wcGFibGVcbn0pID0+IHtcbiAgaWYgKCFkcm9wcGFibGUuc2hhcGUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCB7IHBvc2l0aW9uLCBzaGFwZSB9ID0gZHJhZ09wZXJhdGlvbjtcbiAgY29uc3QgeyBkaXJlY3Rpb24gfSA9IHBvc2l0aW9uO1xuICBpZiAoIXNoYXBlKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKGRpcmVjdGlvbiA9PT0gbnVsbCkge1xuICAgIHJldHVybiBkZWZhdWx0Q29sbGlzaW9uRGV0ZWN0aW9uKHsgZHJhZ09wZXJhdGlvbiwgZHJvcHBhYmxlIH0pO1xuICB9XG4gIGNvbnN0IHsgY2VudGVyIH0gPSBzaGFwZS5jdXJyZW50O1xuICBjb25zdCByZWN0ID0gZHJvcHBhYmxlLnNoYXBlLmJvdW5kaW5nUmVjdGFuZ2xlO1xuICBjb25zdCBpc0JlbG93ID0gcmVjdC5ib3R0b20gPj0gY2VudGVyLnk7XG4gIGNvbnN0IGlzQWJvdmUgPSByZWN0LnRvcCA8PSBjZW50ZXIueTtcbiAgY29uc3QgaXNMZWZ0ID0gcmVjdC5sZWZ0IDw9IGNlbnRlci54O1xuICBjb25zdCBpc1JpZ2h0ID0gcmVjdC5yaWdodCA+PSBjZW50ZXIueDtcbiAgaWYgKGRpcmVjdGlvbiA9PT0gXCJkb3duXCIgJiYgaXNCZWxvdyB8fCBkaXJlY3Rpb24gPT09IFwidXBcIiAmJiBpc0Fib3ZlIHx8IGRpcmVjdGlvbiA9PT0gXCJsZWZ0XCIgJiYgaXNMZWZ0IHx8IGRpcmVjdGlvbiA9PT0gXCJyaWdodFwiICYmIGlzUmlnaHQpIHtcbiAgICBjb25zdCBkaXN0YW5jZSA9IFBvaW50NS5kaXN0YW5jZShkcm9wcGFibGUuc2hhcGUuY2VudGVyLCBjZW50ZXIpO1xuICAgIGNvbnN0IHZhbHVlID0gZGlzdGFuY2UgPT09IDAgPyAxIDogMSAvIGRpc3RhbmNlO1xuICAgIHJldHVybiB7XG4gICAgICBpZDogZHJvcHBhYmxlLmlkLFxuICAgICAgdmFsdWUsXG4gICAgICB0eXBlOiBDb2xsaXNpb25UeXBlNS5Db2xsaXNpb24sXG4gICAgICBwcmlvcml0eTogQ29sbGlzaW9uUHJpb3JpdHk1Lk5vcm1hbFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuXG4vLyBzcmMvYWxnb3JpdGhtcy9wb2ludGVyRGlzdGFuY2UudHNcbmltcG9ydCB7IENvbGxpc2lvblByaW9yaXR5IGFzIENvbGxpc2lvblByaW9yaXR5NiwgQ29sbGlzaW9uVHlwZSBhcyBDb2xsaXNpb25UeXBlNiB9IGZyb20gXCJAZG5kLWtpdC9hYnN0cmFjdFwiO1xuaW1wb3J0IHsgUG9pbnQgYXMgUG9pbnQ2IH0gZnJvbSBcIkBkbmQta2l0L2dlb21ldHJ5XCI7XG52YXIgcG9pbnRlckRpc3RhbmNlID0gKGlucHV0KSA9PiB7XG4gIGNvbnN0IHsgZHJhZ09wZXJhdGlvbiwgZHJvcHBhYmxlIH0gPSBpbnB1dDtcbiAgY29uc3QgeyBwb3NpdGlvbiB9ID0gZHJhZ09wZXJhdGlvbjtcbiAgaWYgKCFkcm9wcGFibGUuc2hhcGUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCBkaXN0YW5jZSA9IFBvaW50Ni5kaXN0YW5jZShkcm9wcGFibGUuc2hhcGUuY2VudGVyLCBwb3NpdGlvbi5jdXJyZW50KTtcbiAgY29uc3QgdmFsdWUgPSAxIC8gZGlzdGFuY2U7XG4gIHJldHVybiB7XG4gICAgaWQ6IGRyb3BwYWJsZS5pZCxcbiAgICB2YWx1ZSxcbiAgICB0eXBlOiBDb2xsaXNpb25UeXBlNi5Db2xsaXNpb24sXG4gICAgcHJpb3JpdHk6IENvbGxpc2lvblByaW9yaXR5Ni5Ob3JtYWxcbiAgfTtcbn07XG5leHBvcnQge1xuICBjbG9zZXN0Q2VudGVyLFxuICBjbG9zZXN0Q29ybmVycyxcbiAgZGVmYXVsdENvbGxpc2lvbkRldGVjdGlvbixcbiAgZGlyZWN0aW9uQmlhc2VkLFxuICBwb2ludGVyRGlzdGFuY2UsXG4gIHBvaW50ZXJJbnRlcnNlY3Rpb24sXG4gIHNoYXBlSW50ZXJzZWN0aW9uXG59O1xuIiwKICAgICJpbXBvcnQgeyBjb25maWd1cmF0b3IsIFBsdWdpbiwgU2Vuc29yLCBBY3RpdmF0aW9uQ29udHJvbGxlciwgQ29yZVBsdWdpbiwgRHJhZ0Ryb3BNYW5hZ2VyIGFzIERyYWdEcm9wTWFuYWdlciQxLCByZXNvbHZlQ3VzdG9taXphYmxlLCBEcmFnZ2FibGUgYXMgRHJhZ2dhYmxlJDEsIERyb3BwYWJsZSBhcyBEcm9wcGFibGUkMSwgQWN0aXZhdGlvbkNvbnN0cmFpbnQsIGRlc2NyaXB0b3IgfSBmcm9tICdAZG5kLWtpdC9hYnN0cmFjdCc7XG5leHBvcnQgeyByZXNvbHZlQ3VzdG9taXphYmxlIH0gZnJvbSAnQGRuZC1raXQvYWJzdHJhY3QnO1xuaW1wb3J0IHsgU2Nyb2xsRGlyZWN0aW9uLCBnZXRSb290LCBMaXN0ZW5lcnMsIGlzRWxlbWVudCwgc2Nyb2xsSW50b1ZpZXdJZk5lZWRlZCwgRE9NUmVjdGFuZ2xlLCBnZXREb2N1bWVudCwgaXNIVE1MRWxlbWVudCwgZ2V0RnJhbWVUcmFuc2Zvcm0sIGdldEV2ZW50Q29vcmRpbmF0ZXMsIGdldERvY3VtZW50cywgc2NoZWR1bGVyLCBnZXRJbnRlcmFjdGl2ZUVsZW1lbnQsIGlzVGV4dElucHV0LCBjYW5TY3JvbGwsIGRldGVjdFNjcm9sbEludGVudCwgZ2V0RWxlbWVudEZyb21Qb2ludCwgZ2V0U2Nyb2xsYWJsZUFuY2VzdG9ycywgaXNLZXlib2FyZEV2ZW50LCBpc1BvaW50ZXJFdmVudCwgZ2VuZXJhdGVVbmlxdWVJZCwgaXNTYWZhcmksIGlzRG9jdW1lbnQsIGlzU2hhZG93Um9vdCwgU3R5bGVzLCBnZXRDb21wdXRlZFN0eWxlcywgcGFyc2VUcmFuc2Zvcm0sIHBhcnNlVHJhbnNsYXRlLCBnZXRGaXhlZFBvc2l0aW9uT2Zmc2V0LCBzdXBwb3J0c1BvcG92ZXIsIHNob3dQb3BvdmVyLCBnZXRXaW5kb3csIHByZWZlcnNSZWR1Y2VkTW90aW9uLCBnZXRGcmFtZUVsZW1lbnQsIGNsb25lRWxlbWVudCwgc3VwcG9ydHNTdHlsZSwgZ2V0RmluYWxLZXlmcmFtZSwgYW5pbWF0ZVRyYW5zZm9ybSwgUHJveGllZEVsZW1lbnRzLCBQb3NpdGlvbk9ic2VydmVyIH0gZnJvbSAnQGRuZC1raXQvZG9tL3V0aWxpdGllcyc7XG5pbXBvcnQgeyB1bnRyYWNrZWQsIGVmZmVjdCwgY29tcHV0ZWQsIGRlZXBFcXVhbCwgc2lnbmFsLCBiYXRjaCwgZWZmZWN0cywgcmVhY3RpdmUsIGRlcml2ZWQgfSBmcm9tICdAZG5kLWtpdC9zdGF0ZSc7XG5pbXBvcnQgeyBBeGVzLCBQb2ludCwgUmVjdGFuZ2xlLCBleGNlZWRzRGlzdGFuY2UgfSBmcm9tICdAZG5kLWtpdC9nZW9tZXRyeSc7XG5pbXBvcnQgeyBkZWZhdWx0Q29sbGlzaW9uRGV0ZWN0aW9uIH0gZnJvbSAnQGRuZC1raXQvY29sbGlzaW9uJztcblxudmFyIF9fY3JlYXRlID0gT2JqZWN0LmNyZWF0ZTtcbnZhciBfX2RlZlByb3AgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19kZWZQcm9wcyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzO1xudmFyIF9fZ2V0T3duUHJvcERlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIF9fZ2V0T3duUHJvcERlc2NzID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnM7XG52YXIgX19nZXRPd25Qcm9wU3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgX19oYXNPd25Qcm9wID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBfX3Byb3BJc0VudW0gPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xudmFyIF9fa25vd25TeW1ib2wgPSAobmFtZSwgc3ltYm9sKSA9PiAoc3ltYm9sID0gU3ltYm9sW25hbWVdKSA/IHN5bWJvbCA6IFN5bWJvbC5mb3IoXCJTeW1ib2wuXCIgKyBuYW1lKTtcbnZhciBfX3R5cGVFcnJvciA9IChtc2cpID0+IHtcbiAgdGhyb3cgVHlwZUVycm9yKG1zZyk7XG59O1xudmFyIF9fZGVmTm9ybWFsUHJvcCA9IChvYmosIGtleSwgdmFsdWUpID0+IGtleSBpbiBvYmogPyBfX2RlZlByb3Aob2JqLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSwgdmFsdWUgfSkgOiBvYmpba2V5XSA9IHZhbHVlO1xudmFyIF9fc3ByZWFkVmFsdWVzID0gKGEsIGIpID0+IHtcbiAgZm9yICh2YXIgcHJvcCBpbiBiIHx8IChiID0ge30pKVxuICAgIGlmIChfX2hhc093blByb3AuY2FsbChiLCBwcm9wKSlcbiAgICAgIF9fZGVmTm9ybWFsUHJvcChhLCBwcm9wLCBiW3Byb3BdKTtcbiAgaWYgKF9fZ2V0T3duUHJvcFN5bWJvbHMpXG4gICAgZm9yICh2YXIgcHJvcCBvZiBfX2dldE93blByb3BTeW1ib2xzKGIpKSB7XG4gICAgICBpZiAoX19wcm9wSXNFbnVtLmNhbGwoYiwgcHJvcCkpXG4gICAgICAgIF9fZGVmTm9ybWFsUHJvcChhLCBwcm9wLCBiW3Byb3BdKTtcbiAgICB9XG4gIHJldHVybiBhO1xufTtcbnZhciBfX3NwcmVhZFByb3BzID0gKGEsIGIpID0+IF9fZGVmUHJvcHMoYSwgX19nZXRPd25Qcm9wRGVzY3MoYikpO1xudmFyIF9fbmFtZSA9ICh0YXJnZXQsIHZhbHVlKSA9PiBfX2RlZlByb3AodGFyZ2V0LCBcIm5hbWVcIiwgeyB2YWx1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0pO1xudmFyIF9fb2JqUmVzdCA9IChzb3VyY2UsIGV4Y2x1ZGUpID0+IHtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICBmb3IgKHZhciBwcm9wIGluIHNvdXJjZSlcbiAgICBpZiAoX19oYXNPd25Qcm9wLmNhbGwoc291cmNlLCBwcm9wKSAmJiBleGNsdWRlLmluZGV4T2YocHJvcCkgPCAwKVxuICAgICAgdGFyZ2V0W3Byb3BdID0gc291cmNlW3Byb3BdO1xuICBpZiAoc291cmNlICE9IG51bGwgJiYgX19nZXRPd25Qcm9wU3ltYm9scylcbiAgICBmb3IgKHZhciBwcm9wIG9mIF9fZ2V0T3duUHJvcFN5bWJvbHMoc291cmNlKSkge1xuICAgICAgaWYgKGV4Y2x1ZGUuaW5kZXhPZihwcm9wKSA8IDAgJiYgX19wcm9wSXNFbnVtLmNhbGwoc291cmNlLCBwcm9wKSlcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gc291cmNlW3Byb3BdO1xuICAgIH1cbiAgcmV0dXJuIHRhcmdldDtcbn07XG52YXIgX19kZWNvcmF0b3JTdGFydCA9IChiYXNlKSA9PiB7XG4gIHZhciBfYTU7XG4gIHJldHVybiBbLCAsICwgX19jcmVhdGUoKF9hNSA9IGJhc2UgPT0gbnVsbCA/IHZvaWQgMCA6IGJhc2VbX19rbm93blN5bWJvbChcIm1ldGFkYXRhXCIpXSkgIT0gbnVsbCA/IF9hNSA6IG51bGwpXTtcbn07XG52YXIgX19kZWNvcmF0b3JTdHJpbmdzID0gW1wiY2xhc3NcIiwgXCJtZXRob2RcIiwgXCJnZXR0ZXJcIiwgXCJzZXR0ZXJcIiwgXCJhY2Nlc3NvclwiLCBcImZpZWxkXCIsIFwidmFsdWVcIiwgXCJnZXRcIiwgXCJzZXRcIl07XG52YXIgX19leHBlY3RGbiA9IChmbikgPT4gZm4gIT09IHZvaWQgMCAmJiB0eXBlb2YgZm4gIT09IFwiZnVuY3Rpb25cIiA/IF9fdHlwZUVycm9yKFwiRnVuY3Rpb24gZXhwZWN0ZWRcIikgOiBmbjtcbnZhciBfX2RlY29yYXRvckNvbnRleHQgPSAoa2luZCwgbmFtZSwgZG9uZSwgbWV0YWRhdGEsIGZucykgPT4gKHsga2luZDogX19kZWNvcmF0b3JTdHJpbmdzW2tpbmRdLCBuYW1lLCBtZXRhZGF0YSwgYWRkSW5pdGlhbGl6ZXI6IChmbikgPT4gZG9uZS5fID8gX190eXBlRXJyb3IoXCJBbHJlYWR5IGluaXRpYWxpemVkXCIpIDogZm5zLnB1c2goX19leHBlY3RGbihmbiB8fCBudWxsKSkgfSk7XG52YXIgX19kZWNvcmF0b3JNZXRhZGF0YSA9IChhcnJheSwgdGFyZ2V0KSA9PiBfX2RlZk5vcm1hbFByb3AodGFyZ2V0LCBfX2tub3duU3ltYm9sKFwibWV0YWRhdGFcIiksIGFycmF5WzNdKTtcbnZhciBfX3J1bkluaXRpYWxpemVycyA9IChhcnJheSwgZmxhZ3MsIHNlbGYsIHZhbHVlKSA9PiB7XG4gIGZvciAodmFyIGkgPSAwLCBmbnMgPSBhcnJheVtmbGFncyA+PiAxXSwgbiA9IGZucyAmJiBmbnMubGVuZ3RoOyBpIDwgbjsgaSsrKSBmbGFncyAmIDEgPyBmbnNbaV0uY2FsbChzZWxmKSA6IHZhbHVlID0gZm5zW2ldLmNhbGwoc2VsZiwgdmFsdWUpO1xuICByZXR1cm4gdmFsdWU7XG59O1xudmFyIF9fZGVjb3JhdGVFbGVtZW50ID0gKGFycmF5LCBmbGFncywgbmFtZSwgZGVjb3JhdG9ycywgdGFyZ2V0LCBleHRyYSkgPT4ge1xuICB2YXIgZm4sIGl0LCBkb25lLCBjdHgsIGFjY2VzcywgayA9IGZsYWdzICYgNywgcyA9ICEhKGZsYWdzICYgOCksIHAgPSAhIShmbGFncyAmIDE2KTtcbiAgdmFyIGogPSBrID4gMyA/IGFycmF5Lmxlbmd0aCArIDEgOiBrID8gcyA/IDEgOiAyIDogMCwga2V5ID0gX19kZWNvcmF0b3JTdHJpbmdzW2sgKyA1XTtcbiAgdmFyIGluaXRpYWxpemVycyA9IGsgPiAzICYmIChhcnJheVtqIC0gMV0gPSBbXSksIGV4dHJhSW5pdGlhbGl6ZXJzID0gYXJyYXlbal0gfHwgKGFycmF5W2pdID0gW10pO1xuICB2YXIgZGVzYyA9IGsgJiYgKCFwICYmICFzICYmICh0YXJnZXQgPSB0YXJnZXQucHJvdG90eXBlKSwgayA8IDUgJiYgKGsgPiAzIHx8ICFwKSAmJiBfX2dldE93blByb3BEZXNjKGsgPCA0ID8gdGFyZ2V0IDogeyBnZXQgW25hbWVdKCkge1xuICAgIHJldHVybiBfX3ByaXZhdGVHZXQodGhpcywgZXh0cmEpO1xuICB9LCBzZXQgW25hbWVdKHgpIHtcbiAgICByZXR1cm4gX19wcml2YXRlU2V0KHRoaXMsIGV4dHJhLCB4KTtcbiAgfSB9LCBuYW1lKSk7XG4gIGsgPyBwICYmIGsgPCA0ICYmIF9fbmFtZShleHRyYSwgKGsgPiAyID8gXCJzZXQgXCIgOiBrID4gMSA/IFwiZ2V0IFwiIDogXCJcIikgKyBuYW1lKSA6IF9fbmFtZSh0YXJnZXQsIG5hbWUpO1xuICBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGN0eCA9IF9fZGVjb3JhdG9yQ29udGV4dChrLCBuYW1lLCBkb25lID0ge30sIGFycmF5WzNdLCBleHRyYUluaXRpYWxpemVycyk7XG4gICAgaWYgKGspIHtcbiAgICAgIGN0eC5zdGF0aWMgPSBzLCBjdHgucHJpdmF0ZSA9IHAsIGFjY2VzcyA9IGN0eC5hY2Nlc3MgPSB7IGhhczogcCA/ICh4KSA9PiBfX3ByaXZhdGVJbih0YXJnZXQsIHgpIDogKHgpID0+IG5hbWUgaW4geCB9O1xuICAgICAgaWYgKGsgXiAzKSBhY2Nlc3MuZ2V0ID0gcCA/ICh4KSA9PiAoayBeIDEgPyBfX3ByaXZhdGVHZXQgOiBfX3ByaXZhdGVNZXRob2QpKHgsIHRhcmdldCwgayBeIDQgPyBleHRyYSA6IGRlc2MuZ2V0KSA6ICh4KSA9PiB4W25hbWVdO1xuICAgICAgaWYgKGsgPiAyKSBhY2Nlc3Muc2V0ID0gcCA/ICh4LCB5KSA9PiBfX3ByaXZhdGVTZXQoeCwgdGFyZ2V0LCB5LCBrIF4gNCA/IGV4dHJhIDogZGVzYy5zZXQpIDogKHgsIHkpID0+IHhbbmFtZV0gPSB5O1xuICAgIH1cbiAgICBpdCA9ICgwLCBkZWNvcmF0b3JzW2ldKShrID8gayA8IDQgPyBwID8gZXh0cmEgOiBkZXNjW2tleV0gOiBrID4gNCA/IHZvaWQgMCA6IHsgZ2V0OiBkZXNjLmdldCwgc2V0OiBkZXNjLnNldCB9IDogdGFyZ2V0LCBjdHgpLCBkb25lLl8gPSAxO1xuICAgIGlmIChrIF4gNCB8fCBpdCA9PT0gdm9pZCAwKSBfX2V4cGVjdEZuKGl0KSAmJiAoayA+IDQgPyBpbml0aWFsaXplcnMudW5zaGlmdChpdCkgOiBrID8gcCA/IGV4dHJhID0gaXQgOiBkZXNjW2tleV0gPSBpdCA6IHRhcmdldCA9IGl0KTtcbiAgICBlbHNlIGlmICh0eXBlb2YgaXQgIT09IFwib2JqZWN0XCIgfHwgaXQgPT09IG51bGwpIF9fdHlwZUVycm9yKFwiT2JqZWN0IGV4cGVjdGVkXCIpO1xuICAgIGVsc2UgX19leHBlY3RGbihmbiA9IGl0LmdldCkgJiYgKGRlc2MuZ2V0ID0gZm4pLCBfX2V4cGVjdEZuKGZuID0gaXQuc2V0KSAmJiAoZGVzYy5zZXQgPSBmbiksIF9fZXhwZWN0Rm4oZm4gPSBpdC5pbml0KSAmJiBpbml0aWFsaXplcnMudW5zaGlmdChmbik7XG4gIH1cbiAgcmV0dXJuIGsgfHwgX19kZWNvcmF0b3JNZXRhZGF0YShhcnJheSwgdGFyZ2V0KSwgZGVzYyAmJiBfX2RlZlByb3AodGFyZ2V0LCBuYW1lLCBkZXNjKSwgcCA/IGsgXiA0ID8gZXh0cmEgOiBkZXNjIDogdGFyZ2V0O1xufTtcbnZhciBfX2FjY2Vzc0NoZWNrID0gKG9iaiwgbWVtYmVyLCBtc2cpID0+IG1lbWJlci5oYXMob2JqKSB8fCBfX3R5cGVFcnJvcihcIkNhbm5vdCBcIiArIG1zZyk7XG52YXIgX19wcml2YXRlSW4gPSAobWVtYmVyLCBvYmopID0+IE9iamVjdChvYmopICE9PSBvYmogPyBfX3R5cGVFcnJvcignQ2Fubm90IHVzZSB0aGUgXCJpblwiIG9wZXJhdG9yIG9uIHRoaXMgdmFsdWUnKSA6IG1lbWJlci5oYXMob2JqKTtcbnZhciBfX3ByaXZhdGVHZXQgPSAob2JqLCBtZW1iZXIsIGdldHRlcikgPT4gKF9fYWNjZXNzQ2hlY2sob2JqLCBtZW1iZXIsIFwicmVhZCBmcm9tIHByaXZhdGUgZmllbGRcIiksIGdldHRlciA/IGdldHRlci5jYWxsKG9iaikgOiBtZW1iZXIuZ2V0KG9iaikpO1xudmFyIF9fcHJpdmF0ZUFkZCA9IChvYmosIG1lbWJlciwgdmFsdWUpID0+IG1lbWJlci5oYXMob2JqKSA/IF9fdHlwZUVycm9yKFwiQ2Fubm90IGFkZCB0aGUgc2FtZSBwcml2YXRlIG1lbWJlciBtb3JlIHRoYW4gb25jZVwiKSA6IG1lbWJlciBpbnN0YW5jZW9mIFdlYWtTZXQgPyBtZW1iZXIuYWRkKG9iaikgOiBtZW1iZXIuc2V0KG9iaiwgdmFsdWUpO1xudmFyIF9fcHJpdmF0ZVNldCA9IChvYmosIG1lbWJlciwgdmFsdWUsIHNldHRlcikgPT4gKF9fYWNjZXNzQ2hlY2sob2JqLCBtZW1iZXIsIFwid3JpdGUgdG8gcHJpdmF0ZSBmaWVsZFwiKSwgc2V0dGVyID8gc2V0dGVyLmNhbGwob2JqLCB2YWx1ZSkgOiBtZW1iZXIuc2V0KG9iaiwgdmFsdWUpLCB2YWx1ZSk7XG52YXIgX19wcml2YXRlTWV0aG9kID0gKG9iaiwgbWVtYmVyLCBtZXRob2QpID0+IChfX2FjY2Vzc0NoZWNrKG9iaiwgbWVtYmVyLCBcImFjY2VzcyBwcml2YXRlIG1ldGhvZFwiKSwgbWV0aG9kKTtcblxuLy8gc3JjL2NvcmUvcGx1Z2lucy9hY2Nlc3NpYmlsaXR5L2RlZmF1bHRzLnRzXG52YXIgZGVmYXVsdEF0dHJpYnV0ZXMgPSB7XG4gIHJvbGU6IFwiYnV0dG9uXCIsXG4gIHJvbGVEZXNjcmlwdGlvbjogXCJkcmFnZ2FibGVcIn07XG52YXIgZGVmYXVsdERlc2NyaXB0aW9uSWRQcmVmaXggPSBgZG5kLWtpdC1kZXNjcmlwdGlvbmA7XG52YXIgZGVmYXVsdEFubm91bmNlbWVudElkUHJlZml4ID0gYGRuZC1raXQtYW5ub3VuY2VtZW50YDtcbnZhciBkZWZhdWx0U2NyZWVuUmVhZGVySW5zdHJ1Y3Rpb25zID0ge1xuICBkcmFnZ2FibGU6IGBUbyBwaWNrIHVwIGEgZHJhZ2dhYmxlIGl0ZW0sIHByZXNzIHRoZSBzcGFjZSBiYXIuIFdoaWxlIGRyYWdnaW5nLCB1c2UgdGhlIGFycm93IGtleXMgdG8gbW92ZSB0aGUgaXRlbSBpbiBhIGdpdmVuIGRpcmVjdGlvbi4gUHJlc3Mgc3BhY2UgYWdhaW4gdG8gZHJvcCB0aGUgaXRlbSBpbiBpdHMgbmV3IHBvc2l0aW9uLCBvciBwcmVzcyBlc2NhcGUgdG8gY2FuY2VsLmBcbn07XG52YXIgZGVmYXVsdEFubm91bmNlbWVudHMgPSB7XG4gIGRyYWdzdGFydCh7IG9wZXJhdGlvbjogeyBzb3VyY2UgfSB9KSB7XG4gICAgaWYgKCFzb3VyY2UpIHJldHVybjtcbiAgICByZXR1cm4gYFBpY2tlZCB1cCBkcmFnZ2FibGUgaXRlbSAke3NvdXJjZS5pZH0uYDtcbiAgfSxcbiAgZHJhZ292ZXIoeyBvcGVyYXRpb246IHsgc291cmNlLCB0YXJnZXQgfSB9KSB7XG4gICAgaWYgKCFzb3VyY2UgfHwgc291cmNlLmlkID09PSAodGFyZ2V0ID09IG51bGwgPyB2b2lkIDAgOiB0YXJnZXQuaWQpKSByZXR1cm47XG4gICAgaWYgKHRhcmdldCkge1xuICAgICAgcmV0dXJuIGBEcmFnZ2FibGUgaXRlbSAke3NvdXJjZS5pZH0gd2FzIG1vdmVkIG92ZXIgZHJvcHBhYmxlIHRhcmdldCAke3RhcmdldC5pZH0uYDtcbiAgICB9XG4gICAgcmV0dXJuIGBEcmFnZ2FibGUgaXRlbSAke3NvdXJjZS5pZH0gaXMgbm8gbG9uZ2VyIG92ZXIgYSBkcm9wcGFibGUgdGFyZ2V0LmA7XG4gIH0sXG4gIGRyYWdlbmQoeyBvcGVyYXRpb246IHsgc291cmNlLCB0YXJnZXQgfSwgY2FuY2VsZWQgfSkge1xuICAgIGlmICghc291cmNlKSByZXR1cm47XG4gICAgaWYgKGNhbmNlbGVkKSB7XG4gICAgICByZXR1cm4gYERyYWdnaW5nIHdhcyBjYW5jZWxsZWQuIERyYWdnYWJsZSBpdGVtICR7c291cmNlLmlkfSB3YXMgZHJvcHBlZC5gO1xuICAgIH1cbiAgICBpZiAodGFyZ2V0KSB7XG4gICAgICByZXR1cm4gYERyYWdnYWJsZSBpdGVtICR7c291cmNlLmlkfSB3YXMgZHJvcHBlZCBvdmVyIGRyb3BwYWJsZSB0YXJnZXQgJHt0YXJnZXQuaWR9YDtcbiAgICB9XG4gICAgcmV0dXJuIGBEcmFnZ2FibGUgaXRlbSAke3NvdXJjZS5pZH0gd2FzIGRyb3BwZWQuYDtcbiAgfVxufTtcblxuLy8gc3JjL2NvcmUvcGx1Z2lucy9hY2Nlc3NpYmlsaXR5L3V0aWxpdGllcy50c1xuZnVuY3Rpb24gaXNGb2N1c2FibGUoZWxlbWVudCkge1xuICBjb25zdCB0YWdOYW1lID0gZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gIHJldHVybiBbXCJpbnB1dFwiLCBcInNlbGVjdFwiLCBcInRleHRhcmVhXCIsIFwiYVwiLCBcImJ1dHRvblwiXS5pbmNsdWRlcyh0YWdOYW1lKTtcbn1cblxuLy8gc3JjL2NvcmUvcGx1Z2lucy9hY2Nlc3NpYmlsaXR5L0hpZGRlblRleHQudHNcbmZ1bmN0aW9uIGNyZWF0ZUhpZGRlblRleHQoaWQsIHZhbHVlKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbGVtZW50LmlkID0gaWQ7XG4gIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgZWxlbWVudC50ZXh0Q29udGVudCA9IHZhbHVlO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxuLy8gc3JjL2NvcmUvcGx1Z2lucy9hY2Nlc3NpYmlsaXR5L0xpdmVSZWdpb24udHNcbmZ1bmN0aW9uIGNyZWF0ZUxpdmVSZWdpb24oaWQpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVsZW1lbnQuaWQgPSBpZDtcbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsIFwic3RhdHVzXCIpO1xuICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImFyaWEtbGl2ZVwiLCBcInBvbGl0ZVwiKTtcbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWF0b21pY1wiLCBcInRydWVcIik7XG4gIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXCJwb3NpdGlvblwiLCBcImZpeGVkXCIpO1xuICBlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwid2lkdGhcIiwgXCIxcHhcIik7XG4gIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXCJoZWlnaHRcIiwgXCIxcHhcIik7XG4gIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXCJtYXJnaW5cIiwgXCItMXB4XCIpO1xuICBlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwiYm9yZGVyXCIsIFwiMFwiKTtcbiAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcInBhZGRpbmdcIiwgXCIwXCIpO1xuICBlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwib3ZlcmZsb3dcIiwgXCJoaWRkZW5cIik7XG4gIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXCJjbGlwXCIsIFwicmVjdCgwIDAgMCAwKVwiKTtcbiAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcImNsaXAtcGF0aFwiLCBcImluc2V0KDEwMCUpXCIpO1xuICBlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwid2hpdGUtc3BhY2VcIiwgXCJub3dyYXBcIik7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG4vLyBzcmMvY29yZS9wbHVnaW5zL2FjY2Vzc2liaWxpdHkvQWNjZXNzaWJpbGl0eS50c1xudmFyIGRlYm91bmNlZEV2ZW50cyA9IFtcImRyYWdvdmVyXCIsIFwiZHJhZ21vdmVcIl07XG52YXIgQWNjZXNzaWJpbGl0eSA9IGNsYXNzIGV4dGVuZHMgUGx1Z2luIHtcbiAgY29uc3RydWN0b3IobWFuYWdlciwgb3B0aW9ucykge1xuICAgIHN1cGVyKG1hbmFnZXIpO1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgaWRQcmVmaXg6IHtcbiAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uUHJlZml4ID0gZGVmYXVsdERlc2NyaXB0aW9uSWRQcmVmaXgsXG4gICAgICAgIGFubm91bmNlbWVudDogYW5ub3VuY2VtZW50UHJlZml4ID0gZGVmYXVsdEFubm91bmNlbWVudElkUHJlZml4XG4gICAgICB9ID0ge30sXG4gICAgICBhbm5vdW5jZW1lbnRzID0gZGVmYXVsdEFubm91bmNlbWVudHMsXG4gICAgICBzY3JlZW5SZWFkZXJJbnN0cnVjdGlvbnMgPSBkZWZhdWx0U2NyZWVuUmVhZGVySW5zdHJ1Y3Rpb25zLFxuICAgICAgZGVib3VuY2U6IGRlYm91bmNlTXMgPSA1MDBcbiAgICB9ID0gb3B0aW9ucyAhPSBudWxsID8gb3B0aW9ucyA6IHt9O1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uSWQgPSBpZCA/IGAke2Rlc2NyaXB0aW9uUHJlZml4fS0ke2lkfWAgOiBnZW5lcmF0ZVVuaXF1ZUlkKGRlc2NyaXB0aW9uUHJlZml4KTtcbiAgICBjb25zdCBhbm5vdW5jZW1lbnRJZCA9IGlkID8gYCR7YW5ub3VuY2VtZW50UHJlZml4fS0ke2lkfWAgOiBnZW5lcmF0ZVVuaXF1ZUlkKGFubm91bmNlbWVudFByZWZpeCk7XG4gICAgbGV0IGhpZGRlblRleHRFbGVtZW50O1xuICAgIGxldCBsaXZlUmVnaW9uRWxlbWVudDtcbiAgICBsZXQgbGl2ZVJlZ2lvblRleHROb2RlO1xuICAgIGxldCBsYXRlc3RBbm5vdW5jZW1lbnQ7XG4gICAgY29uc3QgdXBkYXRlQW5ub3VuY2VtZW50ID0gKHZhbHVlID0gbGF0ZXN0QW5ub3VuY2VtZW50KSA9PiB7XG4gICAgICBpZiAoIWxpdmVSZWdpb25UZXh0Tm9kZSB8fCAhdmFsdWUpIHJldHVybjtcbiAgICAgIGlmICgobGl2ZVJlZ2lvblRleHROb2RlID09IG51bGwgPyB2b2lkIDAgOiBsaXZlUmVnaW9uVGV4dE5vZGUubm9kZVZhbHVlKSAhPT0gdmFsdWUpIHtcbiAgICAgICAgbGl2ZVJlZ2lvblRleHROb2RlLm5vZGVWYWx1ZSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH07XG4gICAgY29uc3Qgc2NoZWR1bGVVcGRhdGVBbm5vdW5jZW1lbnQgPSAoKSA9PiBzY2hlZHVsZXIuc2NoZWR1bGUodXBkYXRlQW5ub3VuY2VtZW50KTtcbiAgICBjb25zdCBkZWJvdW5jZWRVcGRhdGVBbm5vdW5jZW1lbnQgPSBkZWJvdW5jZShcbiAgICAgIHNjaGVkdWxlVXBkYXRlQW5ub3VuY2VtZW50LFxuICAgICAgZGVib3VuY2VNc1xuICAgICk7XG4gICAgY29uc3QgZXZlbnRMaXN0ZW5lcnMgPSBPYmplY3QuZW50cmllcyhhbm5vdW5jZW1lbnRzKS5tYXAoXG4gICAgICAoW2V2ZW50TmFtZSwgZ2V0QW5ub3VuY2VtZW50XSkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5tYW5hZ2VyLm1vbml0b3IuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBldmVudE5hbWUsXG4gICAgICAgICAgKGV2ZW50LCBtYW5hZ2VyMikgPT4ge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGxpdmVSZWdpb25UZXh0Tm9kZTtcbiAgICAgICAgICAgIGlmICghZWxlbWVudCkgcmV0dXJuO1xuICAgICAgICAgICAgY29uc3QgYW5ub3VuY2VtZW50ID0gZ2V0QW5ub3VuY2VtZW50ID09IG51bGwgPyB2b2lkIDAgOiBnZXRBbm5vdW5jZW1lbnQoZXZlbnQsIG1hbmFnZXIyKTtcbiAgICAgICAgICAgIGlmIChhbm5vdW5jZW1lbnQgJiYgZWxlbWVudC5ub2RlVmFsdWUgIT09IGFubm91bmNlbWVudCkge1xuICAgICAgICAgICAgICBsYXRlc3RBbm5vdW5jZW1lbnQgPSBhbm5vdW5jZW1lbnQ7XG4gICAgICAgICAgICAgIGlmIChkZWJvdW5jZWRFdmVudHMuaW5jbHVkZXMoZXZlbnROYW1lKSkge1xuICAgICAgICAgICAgICAgIGRlYm91bmNlZFVwZGF0ZUFubm91bmNlbWVudCgpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNjaGVkdWxlVXBkYXRlQW5ub3VuY2VtZW50KCk7XG4gICAgICAgICAgICAgICAgZGVib3VuY2VkVXBkYXRlQW5ub3VuY2VtZW50LmNhbmNlbCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfVxuICAgICk7XG4gICAgY29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcbiAgICAgIGxldCBlbGVtZW50cyA9IFtdO1xuICAgICAgaWYgKCEoaGlkZGVuVGV4dEVsZW1lbnQgPT0gbnVsbCA/IHZvaWQgMCA6IGhpZGRlblRleHRFbGVtZW50LmlzQ29ubmVjdGVkKSkge1xuICAgICAgICBoaWRkZW5UZXh0RWxlbWVudCA9IGNyZWF0ZUhpZGRlblRleHQoXG4gICAgICAgICAgZGVzY3JpcHRpb25JZCxcbiAgICAgICAgICBzY3JlZW5SZWFkZXJJbnN0cnVjdGlvbnMuZHJhZ2dhYmxlXG4gICAgICAgICk7XG4gICAgICAgIGVsZW1lbnRzLnB1c2goaGlkZGVuVGV4dEVsZW1lbnQpO1xuICAgICAgfVxuICAgICAgaWYgKCEobGl2ZVJlZ2lvbkVsZW1lbnQgPT0gbnVsbCA/IHZvaWQgMCA6IGxpdmVSZWdpb25FbGVtZW50LmlzQ29ubmVjdGVkKSkge1xuICAgICAgICBsaXZlUmVnaW9uRWxlbWVudCA9IGNyZWF0ZUxpdmVSZWdpb24oYW5ub3VuY2VtZW50SWQpO1xuICAgICAgICBsaXZlUmVnaW9uVGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKTtcbiAgICAgICAgbGl2ZVJlZ2lvbkVsZW1lbnQuYXBwZW5kQ2hpbGQobGl2ZVJlZ2lvblRleHROb2RlKTtcbiAgICAgICAgZWxlbWVudHMucHVzaChsaXZlUmVnaW9uRWxlbWVudCk7XG4gICAgICB9XG4gICAgICBpZiAoZWxlbWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCguLi5lbGVtZW50cyk7XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBtdXRhdGlvbnMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuICAgIGZ1bmN0aW9uIGV4ZWN1dGVNdXRhdGlvbnMoKSB7XG4gICAgICBmb3IgKGNvbnN0IG9wZXJhdGlvbiBvZiBtdXRhdGlvbnMpIHtcbiAgICAgICAgb3BlcmF0aW9uKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucmVnaXN0ZXJFZmZlY3QoKCkgPT4ge1xuICAgICAgdmFyIF9hNTtcbiAgICAgIG11dGF0aW9ucy5jbGVhcigpO1xuICAgICAgZm9yIChjb25zdCBkcmFnZ2FibGUgb2YgdGhpcy5tYW5hZ2VyLnJlZ2lzdHJ5LmRyYWdnYWJsZXMudmFsdWUpIHtcbiAgICAgICAgY29uc3QgYWN0aXZhdG9yID0gKF9hNSA9IGRyYWdnYWJsZS5oYW5kbGUpICE9IG51bGwgPyBfYTUgOiBkcmFnZ2FibGUuZWxlbWVudDtcbiAgICAgICAgaWYgKGFjdGl2YXRvcikge1xuICAgICAgICAgIGlmICghaGlkZGVuVGV4dEVsZW1lbnQgfHwgIWxpdmVSZWdpb25FbGVtZW50KSB7XG4gICAgICAgICAgICBtdXRhdGlvbnMuYWRkKGluaXRpYWxpemUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoKCFpc0ZvY3VzYWJsZShhY3RpdmF0b3IpIHx8IGlzU2FmYXJpKCkpICYmICFhY3RpdmF0b3IuaGFzQXR0cmlidXRlKFwidGFiaW5kZXhcIikpIHtcbiAgICAgICAgICAgIG11dGF0aW9ucy5hZGQoKCkgPT4gYWN0aXZhdG9yLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiMFwiKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghYWN0aXZhdG9yLmhhc0F0dHJpYnV0ZShcInJvbGVcIikgJiYgIShhY3RpdmF0b3IudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcImJ1dHRvblwiKSkge1xuICAgICAgICAgICAgbXV0YXRpb25zLmFkZChcbiAgICAgICAgICAgICAgKCkgPT4gYWN0aXZhdG9yLnNldEF0dHJpYnV0ZShcInJvbGVcIiwgZGVmYXVsdEF0dHJpYnV0ZXMucm9sZSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghYWN0aXZhdG9yLmhhc0F0dHJpYnV0ZShcImFyaWEtcm9sZWRlc2NyaXB0aW9uXCIpKSB7XG4gICAgICAgICAgICBtdXRhdGlvbnMuYWRkKFxuICAgICAgICAgICAgICAoKSA9PiBhY3RpdmF0b3Iuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgICAgIFwiYXJpYS1yb2xlZGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgICAgICBkZWZhdWx0QXR0cmlidXRlcy5yb2xlRGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFhY3RpdmF0b3IuaGFzQXR0cmlidXRlKFwiYXJpYS1kZXNjcmliZWRieVwiKSkge1xuICAgICAgICAgICAgbXV0YXRpb25zLmFkZChcbiAgICAgICAgICAgICAgKCkgPT4gYWN0aXZhdG9yLnNldEF0dHJpYnV0ZShcImFyaWEtZGVzY3JpYmVkYnlcIiwgZGVzY3JpcHRpb25JZClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIFtcImFyaWEtcHJlc3NlZFwiLCBcImFyaWEtZ3JhYmJlZFwiXSkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBTdHJpbmcoZHJhZ2dhYmxlLmlzRHJhZ2dpbmcpO1xuICAgICAgICAgICAgaWYgKGFjdGl2YXRvci5nZXRBdHRyaWJ1dGUoa2V5KSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgbXV0YXRpb25zLmFkZCgoKSA9PiBhY3RpdmF0b3Iuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgZGlzYWJsZWQgPSBTdHJpbmcoZHJhZ2dhYmxlLmRpc2FibGVkKTtcbiAgICAgICAgICBpZiAoYWN0aXZhdG9yLmdldEF0dHJpYnV0ZShcImFyaWEtZGlzYWJsZWRcIikgIT09IGRpc2FibGVkKSB7XG4gICAgICAgICAgICBtdXRhdGlvbnMuYWRkKFxuICAgICAgICAgICAgICAoKSA9PiBhY3RpdmF0b3Iuc2V0QXR0cmlidXRlKFwiYXJpYS1kaXNhYmxlZFwiLCBkaXNhYmxlZClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobXV0YXRpb25zLnNpemUgPiAwKSB7XG4gICAgICAgIHNjaGVkdWxlci5zY2hlZHVsZShleGVjdXRlTXV0YXRpb25zKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmRlc3Ryb3kgPSAoKSA9PiB7XG4gICAgICBzdXBlci5kZXN0cm95KCk7XG4gICAgICBoaWRkZW5UZXh0RWxlbWVudCA9PSBudWxsID8gdm9pZCAwIDogaGlkZGVuVGV4dEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICBsaXZlUmVnaW9uRWxlbWVudCA9PSBudWxsID8gdm9pZCAwIDogbGl2ZVJlZ2lvbkVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICBldmVudExpc3RlbmVycy5mb3JFYWNoKCh1bnN1YnNjcmliZSkgPT4gdW5zdWJzY3JpYmUoKSk7XG4gICAgfTtcbiAgfVxufTtcbmZ1bmN0aW9uIGRlYm91bmNlKGZuLCB3YWl0KSB7XG4gIGxldCB0aW1lb3V0O1xuICBjb25zdCBkZWJvdW5jZWQgPSAoKSA9PiB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZuLCB3YWl0KTtcbiAgfTtcbiAgZGVib3VuY2VkLmNhbmNlbCA9ICgpID0+IGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgcmV0dXJuIGRlYm91bmNlZDtcbn1cbnZhciBzdHlsZVJlZ2lzdHJ5ID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbnZhciBfcm9vdHNfZGVjLCBfdGFyZ2V0Um9vdF9kZWMsIF9zb3VyY2VSb290X2RlYywgX2FkZGl0aW9uYWxSb290c19kZWMsIF9hLCBfcmVnaXN0ZXJlZFJ1bGVzLCBfaW5pdCwgX2FkZGl0aW9uYWxSb290cywgX1N0eWxlSW5qZWN0b3JfaW5zdGFuY2VzLCBzeW5jU3R5bGVzX2ZuLCBpbmplY3RfZm4sIGluamVjdFN0eWxlRWxlbWVudF9mbiwgaW5qZWN0QWRvcHRlZFNoZWV0X2ZuO1xudmFyIF9TdHlsZUluamVjdG9yID0gY2xhc3MgX1N0eWxlSW5qZWN0b3IgZXh0ZW5kcyAoX2EgPSBDb3JlUGx1Z2luLCBfYWRkaXRpb25hbFJvb3RzX2RlYyA9IFtyZWFjdGl2ZV0sIF9zb3VyY2VSb290X2RlYyA9IFtkZXJpdmVkXSwgX3RhcmdldFJvb3RfZGVjID0gW2Rlcml2ZWRdLCBfcm9vdHNfZGVjID0gW2Rlcml2ZWRdLCBfYSkge1xuICBjb25zdHJ1Y3RvcihtYW5hZ2VyLCBvcHRpb25zKSB7XG4gICAgc3VwZXIobWFuYWdlciwgb3B0aW9ucyk7XG4gICAgX19ydW5Jbml0aWFsaXplcnMoX2luaXQsIDUsIHRoaXMpO1xuICAgIF9fcHJpdmF0ZUFkZCh0aGlzLCBfU3R5bGVJbmplY3Rvcl9pbnN0YW5jZXMpO1xuICAgIF9fcHJpdmF0ZUFkZCh0aGlzLCBfcmVnaXN0ZXJlZFJ1bGVzLCAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpKTtcbiAgICBfX3ByaXZhdGVBZGQodGhpcywgX2FkZGl0aW9uYWxSb290cywgX19ydW5Jbml0aWFsaXplcnMoX2luaXQsIDgsIHRoaXMsIC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCkpKSwgX19ydW5Jbml0aWFsaXplcnMoX2luaXQsIDExLCB0aGlzKTtcbiAgICB0aGlzLnJlZ2lzdGVyRWZmZWN0KF9fcHJpdmF0ZU1ldGhvZCh0aGlzLCBfU3R5bGVJbmplY3Rvcl9pbnN0YW5jZXMsIHN5bmNTdHlsZXNfZm4pKTtcbiAgfVxuICAvKipcbiAgICogUmVnaXN0ZXJzIENTUyBydWxlcyB0byBiZSBpbmplY3RlZCBpbnRvIHRoZSBhY3RpdmUgZHJhZyBvcGVyYXRpb24nc1xuICAgKiBkb2N1bWVudCBhbmQgc2hhZG93IHJvb3RzLiBUaGUgU3R5bGVJbmplY3RvciBoYW5kbGVzIHRyYWNraW5nXG4gICAqIHdoaWNoIHJvb3RzIG5lZWQgdGhlIHN0eWxlcyBhbmQgY2xlYW5pbmcgdXAgd2hlbiB0aGV5J3JlIG5vIGxvbmdlciBuZWVkZWQuXG4gICAqXG4gICAqIFJldHVybnMgYSBjbGVhbnVwIGZ1bmN0aW9uIHRoYXQgdW5yZWdpc3RlcnMgdGhlIHJ1bGVzLlxuICAgKi9cbiAgcmVnaXN0ZXIoY3NzUnVsZXMpIHtcbiAgICBfX3ByaXZhdGVHZXQodGhpcywgX3JlZ2lzdGVyZWRSdWxlcykuYWRkKGNzc1J1bGVzKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgX19wcml2YXRlR2V0KHRoaXMsIF9yZWdpc3RlcmVkUnVsZXMpLmRlbGV0ZShjc3NSdWxlcyk7XG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogQWRkcyBhbiBhZGRpdGlvbmFsIHJvb3QgdG8gdHJhY2sgZm9yIHN0eWxlIGluamVjdGlvbi5cbiAgICogUmV0dXJucyBhIGNsZWFudXAgZnVuY3Rpb24gdGhhdCByZW1vdmVzIHRoZSByb290LlxuICAgKi9cbiAgYWRkUm9vdChyb290KSB7XG4gICAgdW50cmFja2VkKCgpID0+IHtcbiAgICAgIGNvbnN0IHJvb3RzID0gbmV3IFNldCh0aGlzLmFkZGl0aW9uYWxSb290cyk7XG4gICAgICByb290cy5hZGQocm9vdCk7XG4gICAgICB0aGlzLmFkZGl0aW9uYWxSb290cyA9IHJvb3RzO1xuICAgIH0pO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB1bnRyYWNrZWQoKCkgPT4ge1xuICAgICAgICBjb25zdCByb290cyA9IG5ldyBTZXQodGhpcy5hZGRpdGlvbmFsUm9vdHMpO1xuICAgICAgICByb290cy5kZWxldGUocm9vdCk7XG4gICAgICAgIHRoaXMuYWRkaXRpb25hbFJvb3RzID0gcm9vdHM7XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG4gIGdldCBzb3VyY2VSb290KCkge1xuICAgIHZhciBfYTU7XG4gICAgY29uc3QgeyBzb3VyY2UgfSA9IHRoaXMubWFuYWdlci5kcmFnT3BlcmF0aW9uO1xuICAgIHJldHVybiBnZXRSb290KChfYTUgPSBzb3VyY2UgPT0gbnVsbCA/IHZvaWQgMCA6IHNvdXJjZS5lbGVtZW50KSAhPSBudWxsID8gX2E1IDogbnVsbCk7XG4gIH1cbiAgZ2V0IHRhcmdldFJvb3QoKSB7XG4gICAgdmFyIF9hNTtcbiAgICBjb25zdCB7IHRhcmdldCB9ID0gdGhpcy5tYW5hZ2VyLmRyYWdPcGVyYXRpb247XG4gICAgcmV0dXJuIGdldFJvb3QoKF9hNSA9IHRhcmdldCA9PSBudWxsID8gdm9pZCAwIDogdGFyZ2V0LmVsZW1lbnQpICE9IG51bGwgPyBfYTUgOiBudWxsKTtcbiAgfVxuICBnZXQgcm9vdHMoKSB7XG4gICAgY29uc3QgeyBzdGF0dXMgfSA9IHRoaXMubWFuYWdlci5kcmFnT3BlcmF0aW9uO1xuICAgIGlmIChzdGF0dXMuaW5pdGlhbGl6aW5nIHx8IHN0YXR1cy5pbml0aWFsaXplZCkge1xuICAgICAgY29uc3Qgcm9vdHMgPSBbdGhpcy5zb3VyY2VSb290LCB0aGlzLnRhcmdldFJvb3RdLmZpbHRlcihcbiAgICAgICAgKHJvb3QpID0+IHJvb3QgIT0gbnVsbFxuICAgICAgKTtcbiAgICAgIHJldHVybiAvKiBAX19QVVJFX18gKi8gbmV3IFNldChbLi4ucm9vdHMsIC4uLnRoaXMuYWRkaXRpb25hbFJvb3RzXSk7XG4gICAgfVxuICAgIHJldHVybiAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuICB9XG59O1xuX2luaXQgPSBfX2RlY29yYXRvclN0YXJ0KF9hKTtcbl9yZWdpc3RlcmVkUnVsZXMgPSBuZXcgV2Vha01hcCgpO1xuX2FkZGl0aW9uYWxSb290cyA9IG5ldyBXZWFrTWFwKCk7XG5fU3R5bGVJbmplY3Rvcl9pbnN0YW5jZXMgPSBuZXcgV2Vha1NldCgpO1xuc3luY1N0eWxlc19mbiA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCB7IHJvb3RzIH0gPSB0aGlzO1xuICBjb25zdCBjbGVhbnVwcyA9IFtdO1xuICBmb3IgKGNvbnN0IHJvb3Qgb2Ygcm9vdHMpIHtcbiAgICBmb3IgKGNvbnN0IGNzc1J1bGVzIG9mIF9fcHJpdmF0ZUdldCh0aGlzLCBfcmVnaXN0ZXJlZFJ1bGVzKSkge1xuICAgICAgY2xlYW51cHMucHVzaChfX3ByaXZhdGVNZXRob2QodGhpcywgX1N0eWxlSW5qZWN0b3JfaW5zdGFuY2VzLCBpbmplY3RfZm4pLmNhbGwodGhpcywgcm9vdCwgY3NzUnVsZXMpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuICgpID0+IHtcbiAgICBmb3IgKGNvbnN0IGNsZWFudXAgb2YgY2xlYW51cHMpIHtcbiAgICAgIGNsZWFudXAoKTtcbiAgICB9XG4gIH07XG59O1xuaW5qZWN0X2ZuID0gZnVuY3Rpb24ocm9vdCwgY3NzUnVsZXMpIHtcbiAgbGV0IHJvb3RTdHlsZXMgPSBzdHlsZVJlZ2lzdHJ5LmdldChyb290KTtcbiAgaWYgKCFyb290U3R5bGVzKSB7XG4gICAgcm9vdFN0eWxlcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG4gICAgc3R5bGVSZWdpc3RyeS5zZXQocm9vdCwgcm9vdFN0eWxlcyk7XG4gIH1cbiAgbGV0IHJlZ2lzdHJhdGlvbiA9IHJvb3RTdHlsZXMuZ2V0KGNzc1J1bGVzKTtcbiAgaWYgKCFyZWdpc3RyYXRpb24pIHtcbiAgICBjb25zdCBjcmVhdGVkID0gaXNEb2N1bWVudChyb290KSA/IF9fcHJpdmF0ZU1ldGhvZCh0aGlzLCBfU3R5bGVJbmplY3Rvcl9pbnN0YW5jZXMsIGluamVjdFN0eWxlRWxlbWVudF9mbikuY2FsbCh0aGlzLCByb290LCByb290U3R5bGVzLCBjc3NSdWxlcykgOiBfX3ByaXZhdGVNZXRob2QodGhpcywgX1N0eWxlSW5qZWN0b3JfaW5zdGFuY2VzLCBpbmplY3RBZG9wdGVkU2hlZXRfZm4pLmNhbGwodGhpcywgcm9vdCwgcm9vdFN0eWxlcywgY3NzUnVsZXMpO1xuICAgIGlmICghY3JlYXRlZCkge1xuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgIH07XG4gICAgfVxuICAgIHJlZ2lzdHJhdGlvbiA9IGNyZWF0ZWQ7XG4gICAgcm9vdFN0eWxlcy5zZXQoY3NzUnVsZXMsIHJlZ2lzdHJhdGlvbik7XG4gIH1cbiAgcmVnaXN0cmF0aW9uLnJlZkNvdW50Kys7XG4gIGxldCBkaXNwb3NlZCA9IGZhbHNlO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGlmIChkaXNwb3NlZCkgcmV0dXJuO1xuICAgIGRpc3Bvc2VkID0gdHJ1ZTtcbiAgICByZWdpc3RyYXRpb24ucmVmQ291bnQtLTtcbiAgICBpZiAocmVnaXN0cmF0aW9uLnJlZkNvdW50ID09PSAwKSB7XG4gICAgICByZWdpc3RyYXRpb24uY2xlYW51cCgpO1xuICAgIH1cbiAgfTtcbn07XG4vKipcbiAqIEZvciBEb2N1bWVudCByb290cywgcHJlcGVuZCBhIDxzdHlsZT4gZWxlbWVudCB0byA8aGVhZD4gc28gdGhhdCBhbnlcbiAqIEBsYXllciBkZWNsYXJhdGlvbnMgYXBwZWFyIGJlZm9yZSBsYXllcnMgZnJvbSByZWd1bGFyIHN0eWxlc2hlZXRzLFxuICogZ2l2aW5nIHRoZW0gdGhlIGxvd2VzdCBjYXNjYWRlIHByaW9yaXR5LlxuICovXG5pbmplY3RTdHlsZUVsZW1lbnRfZm4gPSBmdW5jdGlvbihyb290LCByb290U3R5bGVzLCBjc3NSdWxlcykge1xuICB2YXIgX2E1O1xuICBjb25zdCBzdHlsZSA9IHJvb3QuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBjb25zdCB7IG5vbmNlIH0gPSAoX2E1ID0gdGhpcy5vcHRpb25zKSAhPSBudWxsID8gX2E1IDoge307XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxuICBzdHlsZS50ZXh0Q29udGVudCA9IGNzc1J1bGVzO1xuICByb290LmhlYWQucHJlcGVuZChzdHlsZSk7XG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIHtcbiAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiBBcnJheS5mcm9tKGVudHJ5LnJlbW92ZWROb2RlcykpIHtcbiAgICAgICAgaWYgKG5vZGUgPT09IHN0eWxlKSB7XG4gICAgICAgICAgcm9vdC5oZWFkLnByZXBlbmQoc3R5bGUpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIG9ic2VydmVyLm9ic2VydmUocm9vdC5oZWFkLCB7IGNoaWxkTGlzdDogdHJ1ZSB9KTtcbiAgcmV0dXJuIHtcbiAgICByZWZDb3VudDogMCxcbiAgICBjbGVhbnVwOiAoKSA9PiB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICBzdHlsZS5yZW1vdmUoKTtcbiAgICAgIHJvb3RTdHlsZXMuZGVsZXRlKGNzc1J1bGVzKTtcbiAgICAgIGlmIChyb290U3R5bGVzLnNpemUgPT09IDApIHtcbiAgICAgICAgc3R5bGVSZWdpc3RyeS5kZWxldGUocm9vdCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcbi8qKlxuICogRm9yIFNoYWRvd1Jvb3Qgcm9vdHMsIHVzZSBhZG9wdGVkU3R5bGVTaGVldHMgdG8gYXZvaWQgRE9NIHNpZGUgZWZmZWN0c1xuICogbGlrZSBpbnRlcmZlcmluZyB3aXRoIDpmaXJzdC1jaGlsZCBvciA6bnRoLWNoaWxkIHNlbGVjdG9ycy5cbiAqL1xuaW5qZWN0QWRvcHRlZFNoZWV0X2ZuID0gZnVuY3Rpb24ocm9vdCwgcm9vdFN0eWxlcywgY3NzUnVsZXMpIHtcbiAgaWYgKCEoXCJhZG9wdGVkU3R5bGVTaGVldHNcIiBpbiByb290ICYmIEFycmF5LmlzQXJyYXkocm9vdC5hZG9wdGVkU3R5bGVTaGVldHMpKSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgXCJDYW5ub3QgaW5qZWN0IHN0eWxlczogVGhpcyBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBhZG9wdGVkU3R5bGVTaGVldHNcIlxuICAgICk7XG4gIH1cbiAgY29uc3QgdGFyZ2V0V2luZG93ID0gcm9vdC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuICBjb25zdCB7IENTU1N0eWxlU2hlZXQgfSA9IHRhcmdldFdpbmRvdyAhPSBudWxsID8gdGFyZ2V0V2luZG93IDoge307XG4gIGlmICghQ1NTU3R5bGVTaGVldCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgIFwiQ2Fubm90IGluamVjdCBzdHlsZXM6IENTU1N0eWxlU2hlZXQgY29uc3RydWN0b3Igbm90IGF2YWlsYWJsZVwiXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCBzaGVldCA9IG5ldyBDU1NTdHlsZVNoZWV0KCk7XG4gIHNoZWV0LnJlcGxhY2VTeW5jKGNzc1J1bGVzKTtcbiAgcm9vdC5hZG9wdGVkU3R5bGVTaGVldHMucHVzaChzaGVldCk7XG4gIHJldHVybiB7XG4gICAgcmVmQ291bnQ6IDAsXG4gICAgY2xlYW51cDogKCkgPT4ge1xuICAgICAgdmFyIF9hNTtcbiAgICAgIGlmIChpc1NoYWRvd1Jvb3Qocm9vdCkgJiYgKChfYTUgPSByb290Lmhvc3QpID09IG51bGwgPyB2b2lkIDAgOiBfYTUuaXNDb25uZWN0ZWQpKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gcm9vdC5hZG9wdGVkU3R5bGVTaGVldHMuaW5kZXhPZihzaGVldCk7XG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICByb290LmFkb3B0ZWRTdHlsZVNoZWV0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByb290U3R5bGVzLmRlbGV0ZShjc3NSdWxlcyk7XG4gICAgICBpZiAocm9vdFN0eWxlcy5zaXplID09PSAwKSB7XG4gICAgICAgIHN0eWxlUmVnaXN0cnkuZGVsZXRlKHJvb3QpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG5fX2RlY29yYXRlRWxlbWVudChfaW5pdCwgNCwgXCJhZGRpdGlvbmFsUm9vdHNcIiwgX2FkZGl0aW9uYWxSb290c19kZWMsIF9TdHlsZUluamVjdG9yLCBfYWRkaXRpb25hbFJvb3RzKTtcbl9fZGVjb3JhdGVFbGVtZW50KF9pbml0LCAyLCBcInNvdXJjZVJvb3RcIiwgX3NvdXJjZVJvb3RfZGVjLCBfU3R5bGVJbmplY3Rvcik7XG5fX2RlY29yYXRlRWxlbWVudChfaW5pdCwgMiwgXCJ0YXJnZXRSb290XCIsIF90YXJnZXRSb290X2RlYywgX1N0eWxlSW5qZWN0b3IpO1xuX19kZWNvcmF0ZUVsZW1lbnQoX2luaXQsIDIsIFwicm9vdHNcIiwgX3Jvb3RzX2RlYywgX1N0eWxlSW5qZWN0b3IpO1xuX19kZWNvcmF0b3JNZXRhZGF0YShfaW5pdCwgX1N0eWxlSW5qZWN0b3IpO1xuX1N0eWxlSW5qZWN0b3IuY29uZmlndXJlID0gY29uZmlndXJhdG9yKF9TdHlsZUluamVjdG9yKTtcbnZhciBTdHlsZUluamVjdG9yID0gX1N0eWxlSW5qZWN0b3I7XG5cbi8vIHNyYy9jb3JlL3BsdWdpbnMvY3Vyc29yL0N1cnNvci50c1xudmFyIEN1cnNvciA9IGNsYXNzIGV4dGVuZHMgUGx1Z2luIHtcbiAgY29uc3RydWN0b3IobWFuYWdlciwgb3B0aW9ucykge1xuICAgIHN1cGVyKG1hbmFnZXIsIG9wdGlvbnMpO1xuICAgIHRoaXMubWFuYWdlciA9IG1hbmFnZXI7XG4gICAgY29uc3QgeyBjdXJzb3IgPSBcImdyYWJiaW5nXCIgfSA9IG9wdGlvbnMgIT0gbnVsbCA/IG9wdGlvbnMgOiB7fTtcbiAgICBjb25zdCBzdHlsZUluamVjdG9yID0gbWFuYWdlci5yZWdpc3RyeS5wbHVnaW5zLmdldChcbiAgICAgIFN0eWxlSW5qZWN0b3JcbiAgICApO1xuICAgIGNvbnN0IHVucmVnaXN0ZXJTdHlsZXMgPSBzdHlsZUluamVjdG9yID09IG51bGwgPyB2b2lkIDAgOiBzdHlsZUluamVjdG9yLnJlZ2lzdGVyKFxuICAgICAgYCogeyBjdXJzb3I6ICR7Y3Vyc29yfSAhaW1wb3J0YW50OyB9YFxuICAgICk7XG4gICAgaWYgKHVucmVnaXN0ZXJTdHlsZXMpIHtcbiAgICAgIGNvbnN0IG9yaWdpbmFsRGVzdHJveSA9IHRoaXMuZGVzdHJveS5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5kZXN0cm95ID0gKCkgPT4ge1xuICAgICAgICB1bnJlZ2lzdGVyU3R5bGVzKCk7XG4gICAgICAgIG9yaWdpbmFsRGVzdHJveSgpO1xuICAgICAgfTtcbiAgICB9XG4gIH1cbn07XG5cbi8vIHNyYy9jb3JlL3BsdWdpbnMvZmVlZGJhY2svY29uc3RhbnRzLnRzXG52YXIgQVRUUl9QUkVGSVggPSBcImRhdGEtZG5kLVwiO1xudmFyIERST1BQSU5HX0FUVFJJQlVURSA9IGAke0FUVFJfUFJFRklYfWRyb3BwaW5nYDtcbnZhciBDU1NfUFJFRklYID0gXCItLWRuZC1cIjtcbnZhciBBVFRSSUJVVEUgPSBgJHtBVFRSX1BSRUZJWH1kcmFnZ2luZ2A7XG52YXIgUExBQ0VIT0xERVJfQVRUUklCVVRFID0gYCR7QVRUUl9QUkVGSVh9cGxhY2Vob2xkZXJgO1xudmFyIElHTk9SRURfQVRUUklCVVRFUyA9IFtcbiAgQVRUUklCVVRFLFxuICBQTEFDRUhPTERFUl9BVFRSSUJVVEUsXG4gIFwicG9wb3ZlclwiLFxuICBcImFyaWEtcHJlc3NlZFwiLFxuICBcImFyaWEtZ3JhYmJpbmdcIlxuXTtcbnZhciBJR05PUkVEX1NUWUxFUyA9IFtcInZpZXctdHJhbnNpdGlvbi1uYW1lXCJdO1xudmFyIENTU19SVUxFUyA9IGBcbiAgOmlzKDpyb290LDpob3N0KSBbJHtBVFRSSUJVVEV9XSB7XG4gICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmUgIWltcG9ydGFudDtcbiAgICB0b3VjaC1hY3Rpb246IG5vbmU7XG4gICAgei1pbmRleDogY2FsYyhpbmZpbml0eSk7XG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zbGF0ZTtcbiAgICB0b3A6IHZhcigke0NTU19QUkVGSVh9dG9wLCAwcHgpICFpbXBvcnRhbnQ7XG4gICAgbGVmdDogdmFyKCR7Q1NTX1BSRUZJWH1sZWZ0LCAwcHgpICFpbXBvcnRhbnQ7XG4gICAgcmlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgYm90dG9tOiB1bnNldCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiB2YXIoJHtDU1NfUFJFRklYfXdpZHRoLCBhdXRvKTtcbiAgICBtYXgtd2lkdGg6IHZhcigke0NTU19QUkVGSVh9d2lkdGgsIGF1dG8pO1xuICAgIGhlaWdodDogdmFyKCR7Q1NTX1BSRUZJWH1oZWlnaHQsIGF1dG8pO1xuICAgIG1heC1oZWlnaHQ6IHZhcigke0NTU19QUkVGSVh9aGVpZ2h0LCBhdXRvKTtcbiAgICB0cmFuc2Zvcm06IHZhcigke0NTU19QUkVGSVh9dHJhbnNmb3JtLCBub25lKSAhaW1wb3J0YW50O1xuICAgIHRyYW5zaXRpb246IHZhcigke0NTU19QUkVGSVh9dHJhbnNpdGlvbikgIWltcG9ydGFudDtcbiAgfVxuXG4gIDppcyg6cm9vdCw6aG9zdCkgWyR7UExBQ0VIT0xERVJfQVRUUklCVVRFfV0ge1xuICAgIHRyYW5zaXRpb246IG5vbmU7XG4gIH1cblxuICA6aXMoOnJvb3QsOmhvc3QpIFske1BMQUNFSE9MREVSX0FUVFJJQlVURX09J2hpZGRlbiddIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cblxuICBbJHtBVFRSSUJVVEV9XSAqIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgWyR7QVRUUklCVVRFfV06bm90KFske0RST1BQSU5HX0FUVFJJQlVURX1dKSB7XG4gICAgdHJhbnNsYXRlOiB2YXIoJHtDU1NfUFJFRklYfXRyYW5zbGF0ZSkgIWltcG9ydGFudDtcbiAgfVxuXG4gIFske0FUVFJJQlVURX1dW3N0eWxlKj0nJHtDU1NfUFJFRklYfXNjYWxlJ10ge1xuICAgIHNjYWxlOiB2YXIoJHtDU1NfUFJFRklYfXNjYWxlKSAhaW1wb3J0YW50O1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IHZhcigke0NTU19QUkVGSVh9dHJhbnNmb3JtLW9yaWdpbikgIWltcG9ydGFudDtcbiAgfVxuXG4gIEBsYXllciBkbmQta2l0IHtcbiAgICA6d2hlcmUoWyR7QVRUUklCVVRFfV1bcG9wb3Zlcl0pIHtcbiAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgICAgYmFja2dyb3VuZDogdW5zZXQ7XG4gICAgICBib3JkZXI6IHVuc2V0O1xuICAgICAgbWFyZ2luOiB1bnNldDtcbiAgICAgIHBhZGRpbmc6IHVuc2V0O1xuICAgICAgY29sb3I6IGluaGVyaXQ7XG5cbiAgICAgICY6aXMoaW5wdXQsIGJ1dHRvbikge1xuICAgICAgICBib3JkZXI6IHJldmVydDtcbiAgICAgICAgYmFja2dyb3VuZDogcmV2ZXJ0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBbJHtBVFRSSUJVVEV9XTo6YmFja2Ryb3AsIFske0FUVFJfUFJFRklYfW92ZXJsYXldOm5vdChbJHtBVFRSSUJVVEV9XSkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG5gLnJlcGxhY2UoL1xcbisvZywgXCIgXCIpLnJlcGxhY2UoL1xccysvZywgXCIgXCIpLnRyaW0oKTtcbmZ1bmN0aW9uIGNyZWF0ZVBsYWNlaG9sZGVyKHNvdXJjZSwgdHlwZSA9IFwiaGlkZGVuXCIpIHtcbiAgcmV0dXJuIHVudHJhY2tlZCgoKSA9PiB7XG4gICAgY29uc3QgeyBlbGVtZW50LCBtYW5hZ2VyIH0gPSBzb3VyY2U7XG4gICAgaWYgKCFlbGVtZW50IHx8ICFtYW5hZ2VyKSByZXR1cm47XG4gICAgY29uc3QgY29udGFpbmVkRHJvcHBhYmxlcyA9IGZpbmRDb250YWluZWREcm9wcGFibGVzKFxuICAgICAgZWxlbWVudCxcbiAgICAgIG1hbmFnZXIucmVnaXN0cnkuZHJvcHBhYmxlc1xuICAgICk7XG4gICAgY29uc3QgY2xlYW51cCA9IFtdO1xuICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gY2xvbmVFbGVtZW50KGVsZW1lbnQpO1xuICAgIGNvbnN0IHsgcmVtb3ZlIH0gPSBwbGFjZWhvbGRlcjtcbiAgICBwcm94eURyb3BwYWJsZUVsZW1lbnRzKGNvbnRhaW5lZERyb3BwYWJsZXMsIHBsYWNlaG9sZGVyLCBjbGVhbnVwKTtcbiAgICBjb25maWd1cmVQbGFjZWhvbGRlcihwbGFjZWhvbGRlciwgdHlwZSk7XG4gICAgcGxhY2Vob2xkZXIucmVtb3ZlID0gKCkgPT4ge1xuICAgICAgY2xlYW51cC5mb3JFYWNoKChmbikgPT4gZm4oKSk7XG4gICAgICByZW1vdmUuY2FsbChwbGFjZWhvbGRlcik7XG4gICAgfTtcbiAgICByZXR1cm4gcGxhY2Vob2xkZXI7XG4gIH0pO1xufVxuZnVuY3Rpb24gZmluZENvbnRhaW5lZERyb3BwYWJsZXMoZWxlbWVudCwgZHJvcHBhYmxlcykge1xuICBjb25zdCBjb250YWluZWREcm9wcGFibGVzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgZm9yIChjb25zdCBkcm9wcGFibGUgb2YgZHJvcHBhYmxlcykge1xuICAgIGlmICghZHJvcHBhYmxlLmVsZW1lbnQpIGNvbnRpbnVlO1xuICAgIGlmIChlbGVtZW50ID09PSBkcm9wcGFibGUuZWxlbWVudCB8fCBlbGVtZW50LmNvbnRhaW5zKGRyb3BwYWJsZS5lbGVtZW50KSkge1xuICAgICAgY29uc3QgaWRlbnRpZmllckF0dHJpYnV0ZSA9IGAke0FUVFJfUFJFRklYfSR7Z2VuZXJhdGVVbmlxdWVJZChcImRvbS1pZFwiKX1gO1xuICAgICAgZHJvcHBhYmxlLmVsZW1lbnQuc2V0QXR0cmlidXRlKGlkZW50aWZpZXJBdHRyaWJ1dGUsIFwiXCIpO1xuICAgICAgY29udGFpbmVkRHJvcHBhYmxlcy5zZXQoZHJvcHBhYmxlLCBpZGVudGlmaWVyQXR0cmlidXRlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNvbnRhaW5lZERyb3BwYWJsZXM7XG59XG5mdW5jdGlvbiBwcm94eURyb3BwYWJsZUVsZW1lbnRzKGNvbnRhaW5lZERyb3BwYWJsZXMsIHBsYWNlaG9sZGVyLCBjbGVhbnVwKSB7XG4gIGZvciAoY29uc3QgW2Ryb3BwYWJsZSwgaWRlbnRpZmllckF0dHJpYnV0ZV0gb2YgY29udGFpbmVkRHJvcHBhYmxlcykge1xuICAgIGlmICghZHJvcHBhYmxlLmVsZW1lbnQpIGNvbnRpbnVlO1xuICAgIGNvbnN0IHNlbGVjdG9yID0gYFske2lkZW50aWZpZXJBdHRyaWJ1dGV9XWA7XG4gICAgY29uc3QgY2xvbmVkRWxlbWVudCA9IHBsYWNlaG9sZGVyLm1hdGNoZXMoc2VsZWN0b3IpID8gcGxhY2Vob2xkZXIgOiBwbGFjZWhvbGRlci5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICBkcm9wcGFibGUuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoaWRlbnRpZmllckF0dHJpYnV0ZSk7XG4gICAgaWYgKCFjbG9uZWRFbGVtZW50KSBjb250aW51ZTtcbiAgICBjb25zdCBvcmlnaW5hbEVsZW1lbnQgPSBkcm9wcGFibGUuZWxlbWVudDtcbiAgICBkcm9wcGFibGUucHJveHkgPSBjbG9uZWRFbGVtZW50O1xuICAgIGNsb25lZEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGlkZW50aWZpZXJBdHRyaWJ1dGUpO1xuICAgIFByb3hpZWRFbGVtZW50cy5zZXQob3JpZ2luYWxFbGVtZW50LCBjbG9uZWRFbGVtZW50KTtcbiAgICBjbGVhbnVwLnB1c2goKCkgPT4ge1xuICAgICAgUHJveGllZEVsZW1lbnRzLmRlbGV0ZShvcmlnaW5hbEVsZW1lbnQpO1xuICAgICAgZHJvcHBhYmxlLnByb3h5ID0gdm9pZCAwO1xuICAgIH0pO1xuICB9XG59XG5mdW5jdGlvbiBjb25maWd1cmVQbGFjZWhvbGRlcihwbGFjZWhvbGRlciwgdHlwZSA9IFwiaGlkZGVuXCIpIHtcbiAgcGxhY2Vob2xkZXIuc2V0QXR0cmlidXRlKFwiaW5lcnRcIiwgXCJ0cnVlXCIpO1xuICBwbGFjZWhvbGRlci5zZXRBdHRyaWJ1dGUoXCJ0YWItaW5kZXhcIiwgXCItMVwiKTtcbiAgcGxhY2Vob2xkZXIuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgXCJ0cnVlXCIpO1xuICBwbGFjZWhvbGRlci5zZXRBdHRyaWJ1dGUoUExBQ0VIT0xERVJfQVRUUklCVVRFLCB0eXBlKTtcbn1cbmZ1bmN0aW9uIGlzU2FtZUZyYW1lKGVsZW1lbnQsIHRhcmdldCkge1xuICBpZiAoZWxlbWVudCA9PT0gdGFyZ2V0KSByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIGdldEZyYW1lRWxlbWVudChlbGVtZW50KSA9PT0gZ2V0RnJhbWVFbGVtZW50KHRhcmdldCk7XG59XG5mdW5jdGlvbiBwcmV2ZW50UG9wb3ZlckNsb3NlKGV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudDtcbiAgaWYgKFwibmV3U3RhdGVcIiBpbiBldmVudCAmJiBldmVudC5uZXdTdGF0ZSA9PT0gXCJjbG9zZWRcIiAmJiBpc0VsZW1lbnQodGFyZ2V0KSAmJiB0YXJnZXQuaGFzQXR0cmlidXRlKFwicG9wb3ZlclwiKSkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiBzaG93UG9wb3Zlcih0YXJnZXQpKTtcbiAgfVxufVxuZnVuY3Rpb24gaXNUYWJsZVJvdyhlbGVtZW50KSB7XG4gIHJldHVybiBlbGVtZW50LnRhZ05hbWUgPT09IFwiVFJcIjtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRNdXRhdGlvbk9ic2VydmVyKGVsZW1lbnQsIHBsYWNlaG9sZGVyLCBjbG9uZSkge1xuICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnMpID0+IHtcbiAgICBsZXQgaGFzQ2hpbGRyZW5NdXRhdGlvbnMgPSBmYWxzZTtcbiAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9ucykge1xuICAgICAgaWYgKG11dGF0aW9uLnRhcmdldCAhPT0gZWxlbWVudCkge1xuICAgICAgICBoYXNDaGlsZHJlbk11dGF0aW9ucyA9IHRydWU7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKG11dGF0aW9uLnR5cGUgIT09IFwiYXR0cmlidXRlc1wiKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IG11dGF0aW9uLmF0dHJpYnV0ZU5hbWU7XG4gICAgICBpZiAoYXR0cmlidXRlTmFtZS5zdGFydHNXaXRoKFwiYXJpYS1cIikgfHwgSUdOT1JFRF9BVFRSSUJVVEVTLmluY2x1ZGVzKGF0dHJpYnV0ZU5hbWUpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgY29uc3QgYXR0cmlidXRlVmFsdWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKTtcbiAgICAgIGlmIChhdHRyaWJ1dGVOYW1lID09PSBcInN0eWxlXCIpIHtcbiAgICAgICAgaWYgKHN1cHBvcnRzU3R5bGUoZWxlbWVudCkgJiYgc3VwcG9ydHNTdHlsZShwbGFjZWhvbGRlcikpIHtcbiAgICAgICAgICBjb25zdCBzdHlsZXMgPSBlbGVtZW50LnN0eWxlO1xuICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIEFycmF5LmZyb20ocGxhY2Vob2xkZXIuc3R5bGUpKSB7XG4gICAgICAgICAgICBpZiAoc3R5bGVzLmdldFByb3BlcnR5VmFsdWUoa2V5KSA9PT0gXCJcIikge1xuICAgICAgICAgICAgICBwbGFjZWhvbGRlci5zdHlsZS5yZW1vdmVQcm9wZXJ0eShrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBBcnJheS5mcm9tKHN0eWxlcykpIHtcbiAgICAgICAgICAgIGlmIChJR05PUkVEX1NUWUxFUy5pbmNsdWRlcyhrZXkpIHx8IGtleS5zdGFydHNXaXRoKENTU19QUkVGSVgpKSB7XG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBzdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZShrZXkpO1xuICAgICAgICAgICAgcGxhY2Vob2xkZXIuc3R5bGUuc2V0UHJvcGVydHkoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGF0dHJpYnV0ZVZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIHBsYWNlaG9sZGVyLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwbGFjZWhvbGRlci5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChoYXNDaGlsZHJlbk11dGF0aW9ucyAmJiBjbG9uZSkge1xuICAgICAgcGxhY2Vob2xkZXIucmVwbGFjZUNoaWxkcmVuKC4uLmVsZW1lbnQuY2xvbmVOb2RlKHRydWUpLmNoaWxkTm9kZXMpO1xuICAgIH1cbiAgfSk7XG4gIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCwge1xuICAgIGF0dHJpYnV0ZXM6IHRydWUsXG4gICAgc3VidHJlZTogdHJ1ZSxcbiAgICBjaGlsZExpc3Q6IHRydWVcbiAgfSk7XG4gIHJldHVybiBvYnNlcnZlcjtcbn1cbmZ1bmN0aW9uIGNyZWF0ZURvY3VtZW50TXV0YXRpb25PYnNlcnZlcihlbGVtZW50LCBwbGFjZWhvbGRlciwgZmVlZGJhY2tFbGVtZW50KSB7XG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIHtcbiAgICAgIGlmIChlbnRyeS5hZGRlZE5vZGVzLmxlbmd0aCA9PT0gMCkgY29udGludWU7XG4gICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgQXJyYXkuZnJvbShlbnRyeS5hZGRlZE5vZGVzKSkge1xuICAgICAgICBpZiAobm9kZS5jb250YWlucyhlbGVtZW50KSAmJiBlbGVtZW50Lm5leHRFbGVtZW50U2libGluZyAhPT0gcGxhY2Vob2xkZXIpIHtcbiAgICAgICAgICBlbGVtZW50Lmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyZW5kXCIsIHBsYWNlaG9sZGVyKTtcbiAgICAgICAgICBzaG93UG9wb3ZlcihmZWVkYmFja0VsZW1lbnQpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZS5jb250YWlucyhwbGFjZWhvbGRlcikgJiYgcGxhY2Vob2xkZXIucHJldmlvdXNFbGVtZW50U2libGluZyAhPT0gZWxlbWVudCkge1xuICAgICAgICAgIHBsYWNlaG9sZGVyLmluc2VydEFkamFjZW50RWxlbWVudChcImJlZm9yZWJlZ2luXCIsIGVsZW1lbnQpO1xuICAgICAgICAgIHNob3dQb3BvdmVyKGZlZWRiYWNrRWxlbWVudCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlbGVtZW50LmlzQ29ubmVjdGVkICYmIHBsYWNlaG9sZGVyLmlzQ29ubmVjdGVkICYmIGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nICE9PSBwbGFjZWhvbGRlcikge1xuICAgICAgZWxlbWVudC5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmVuZFwiLCBwbGFjZWhvbGRlcik7XG4gICAgICBzaG93UG9wb3ZlcihmZWVkYmFja0VsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG4gIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudC5vd25lckRvY3VtZW50LmJvZHksIHtcbiAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgc3VidHJlZTogdHJ1ZVxuICB9KTtcbiAgcmV0dXJuIG9ic2VydmVyO1xufVxuZnVuY3Rpb24gY3JlYXRlUmVzaXplT2JzZXJ2ZXIoY3R4KSB7XG4gIHJldHVybiBuZXcgUmVzaXplT2JzZXJ2ZXIoKCkgPT4ge1xuICAgIHZhciBfYTUsIF9iMiwgX2MzO1xuICAgIGNvbnN0IHBsYWNlaG9sZGVyU2hhcGUgPSBuZXcgRE9NUmVjdGFuZ2xlKGN0eC5wbGFjZWhvbGRlciwge1xuICAgICAgZnJhbWVUcmFuc2Zvcm06IGN0eC5mcmFtZVRyYW5zZm9ybSxcbiAgICAgIGlnbm9yZVRyYW5zZm9ybXM6IHRydWVcbiAgICB9KTtcbiAgICBjb25zdCBvcmlnaW4gPSAoX2E1ID0gY3R4LnRyYW5zZm9ybU9yaWdpbikgIT0gbnVsbCA/IF9hNSA6IHsgeDogMSwgeTogMSB9O1xuICAgIGNvbnN0IGRYID0gKGN0eC53aWR0aCAtIHBsYWNlaG9sZGVyU2hhcGUud2lkdGgpICogb3JpZ2luLnggKyBjdHguZGVsdGEueDtcbiAgICBjb25zdCBkWSA9IChjdHguaGVpZ2h0IC0gcGxhY2Vob2xkZXJTaGFwZS5oZWlnaHQpICogb3JpZ2luLnkgKyBjdHguZGVsdGEueTtcbiAgICBjb25zdCBmaXhlZE9mZnNldCA9IGdldEZpeGVkUG9zaXRpb25PZmZzZXQoKTtcbiAgICBjdHguc3R5bGVzLnNldChcbiAgICAgIHtcbiAgICAgICAgd2lkdGg6IHBsYWNlaG9sZGVyU2hhcGUud2lkdGggLSBjdHgud2lkdGhPZmZzZXQsXG4gICAgICAgIGhlaWdodDogcGxhY2Vob2xkZXJTaGFwZS5oZWlnaHQgLSBjdHguaGVpZ2h0T2Zmc2V0LFxuICAgICAgICB0b3A6IGN0eC50b3AgKyBkWSArIGZpeGVkT2Zmc2V0LnksXG4gICAgICAgIGxlZnQ6IGN0eC5sZWZ0ICsgZFggKyBmaXhlZE9mZnNldC54XG4gICAgICB9LFxuICAgICAgQ1NTX1BSRUZJWFxuICAgICk7XG4gICAgKF9iMiA9IGN0eC5nZXRFbGVtZW50TXV0YXRpb25PYnNlcnZlcigpKSA9PSBudWxsID8gdm9pZCAwIDogX2IyLnRha2VSZWNvcmRzKCk7XG4gICAgaWYgKGlzVGFibGVSb3coY3R4LmVsZW1lbnQpICYmIGlzVGFibGVSb3coY3R4LnBsYWNlaG9sZGVyKSkge1xuICAgICAgY29uc3QgY2VsbHMgPSBBcnJheS5mcm9tKGN0eC5lbGVtZW50LmNlbGxzKTtcbiAgICAgIGNvbnN0IHBsYWNlaG9sZGVyQ2VsbHMgPSBBcnJheS5mcm9tKGN0eC5wbGFjZWhvbGRlci5jZWxscyk7XG4gICAgICBpZiAoIWN0eC5nZXRTYXZlZENlbGxXaWR0aHMoKSkge1xuICAgICAgICBjdHguc2V0U2F2ZWRDZWxsV2lkdGhzKGNlbGxzLm1hcCgoY2VsbCkgPT4gY2VsbC5zdHlsZS53aWR0aCkpO1xuICAgICAgfVxuICAgICAgZm9yIChjb25zdCBbaW5kZXgsIGNlbGxdIG9mIGNlbGxzLmVudHJpZXMoKSkge1xuICAgICAgICBjb25zdCBwbGFjZWhvbGRlckNlbGwgPSBwbGFjZWhvbGRlckNlbGxzW2luZGV4XTtcbiAgICAgICAgY2VsbC5zdHlsZS53aWR0aCA9IGAke3BsYWNlaG9sZGVyQ2VsbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aH1weGA7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHRyYW5zbGF0ZSA9IChfYzMgPSBjdHguZ2V0VHJhbnNsYXRlKCkpICE9IG51bGwgPyBfYzMgOiB7IHg6IDAsIHk6IDAgfTtcbiAgICBjb25zdCBzaGFwZUxlZnQgPSBjdHgubGVmdCArIGRYICsgZml4ZWRPZmZzZXQueCArIHRyYW5zbGF0ZS54O1xuICAgIGNvbnN0IHNoYXBlVG9wID0gY3R4LnRvcCArIGRZICsgZml4ZWRPZmZzZXQueSArIHRyYW5zbGF0ZS55O1xuICAgIGNvbnN0IHNoYXBlV2lkdGggPSBwbGFjZWhvbGRlclNoYXBlLndpZHRoIC0gY3R4LndpZHRoT2Zmc2V0O1xuICAgIGNvbnN0IHNoYXBlSGVpZ2h0ID0gcGxhY2Vob2xkZXJTaGFwZS5oZWlnaHQgLSBjdHguaGVpZ2h0T2Zmc2V0O1xuICAgIGNvbnN0IGZ0ID0gY3R4LmZyYW1lVHJhbnNmb3JtO1xuICAgIGN0eC5kcmFnT3BlcmF0aW9uLnNoYXBlID0gbmV3IFJlY3RhbmdsZShcbiAgICAgIHNoYXBlTGVmdCAqIGZ0LnNjYWxlWCArIGZ0LngsXG4gICAgICBzaGFwZVRvcCAqIGZ0LnNjYWxlWSArIGZ0LnksXG4gICAgICBzaGFwZVdpZHRoICogZnQuc2NhbGVYLFxuICAgICAgc2hhcGVIZWlnaHQgKiBmdC5zY2FsZVlcbiAgICApO1xuICB9KTtcbn1cbnZhciBERUZBVUxUX0RVUkFUSU9OID0gMjUwO1xudmFyIERFRkFVTFRfRUFTSU5HID0gXCJlYXNlXCI7XG5mdW5jdGlvbiBydW5Ecm9wQW5pbWF0aW9uKGN0eCkge1xuICB2YXIgX2E1LCBfYjIsIF9jMywgX2QyO1xuICBjb25zdCB7IGFuaW1hdGlvbiB9ID0gY3R4O1xuICBpZiAodHlwZW9mIGFuaW1hdGlvbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYW5pbWF0aW9uKHtcbiAgICAgIHNvdXJjZTogY3R4LnNvdXJjZSxcbiAgICAgIGVsZW1lbnQ6IGN0eC5lbGVtZW50LFxuICAgICAgZmVlZGJhY2tFbGVtZW50OiBjdHguZmVlZGJhY2tFbGVtZW50LFxuICAgICAgcGxhY2Vob2xkZXI6IGN0eC5wbGFjZWhvbGRlcixcbiAgICAgIHRyYW5zbGF0ZTogY3R4LnRyYW5zbGF0ZSxcbiAgICAgIG1vdmVkOiBjdHgubW92ZWRcbiAgICB9KTtcbiAgICBQcm9taXNlLnJlc29sdmUocmVzdWx0KS50aGVuKCgpID0+IHtcbiAgICAgIGN0eC5jbGVhbnVwKCk7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY3R4LnJlc3RvcmVGb2N1cyk7XG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHtcbiAgICBkdXJhdGlvbiA9IERFRkFVTFRfRFVSQVRJT04sXG4gICAgZWFzaW5nID0gREVGQVVMVF9FQVNJTkdcbiAgfSA9IGFuaW1hdGlvbiAhPSBudWxsID8gYW5pbWF0aW9uIDoge307XG4gIHNob3dQb3BvdmVyKGN0eC5mZWVkYmFja0VsZW1lbnQpO1xuICBjb25zdCBbLCBydW5uaW5nQW5pbWF0aW9uXSA9IChfYTUgPSBnZXRGaW5hbEtleWZyYW1lKFxuICAgIGN0eC5mZWVkYmFja0VsZW1lbnQsXG4gICAgKGtleWZyYW1lKSA9PiBcInRyYW5zbGF0ZVwiIGluIGtleWZyYW1lXG4gICkpICE9IG51bGwgPyBfYTUgOiBbXTtcbiAgcnVubmluZ0FuaW1hdGlvbiA9PSBudWxsID8gdm9pZCAwIDogcnVubmluZ0FuaW1hdGlvbi5wYXVzZSgpO1xuICBjb25zdCB0YXJnZXQgPSAoX2IyID0gY3R4LnBsYWNlaG9sZGVyKSAhPSBudWxsID8gX2IyIDogY3R4LmVsZW1lbnQ7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgZnJhbWVUcmFuc2Zvcm06IGlzU2FtZUZyYW1lKGN0eC5mZWVkYmFja0VsZW1lbnQsIHRhcmdldCkgPyBudWxsIDogdm9pZCAwXG4gIH07XG4gIGNvbnN0IGN1cnJlbnQgPSBuZXcgRE9NUmVjdGFuZ2xlKGN0eC5mZWVkYmFja0VsZW1lbnQsIG9wdGlvbnMpO1xuICBjb25zdCBjdXJyZW50VHJhbnNsYXRlID0gKF9jMyA9IHBhcnNlVHJhbnNsYXRlKGdldENvbXB1dGVkU3R5bGVzKGN0eC5mZWVkYmFja0VsZW1lbnQpLnRyYW5zbGF0ZSkpICE9IG51bGwgPyBfYzMgOiBjdHgudHJhbnNsYXRlO1xuICBjb25zdCBmaW5hbCA9IG5ldyBET01SZWN0YW5nbGUodGFyZ2V0LCBvcHRpb25zKTtcbiAgY29uc3QgZGVsdGEgPSBSZWN0YW5nbGUuZGVsdGEoY3VycmVudCwgZmluYWwsIGN0eC5hbGlnbm1lbnQpO1xuICBjb25zdCBmaW5hbFRyYW5zbGF0ZSA9IHtcbiAgICB4OiBjdXJyZW50VHJhbnNsYXRlLnggLSBkZWx0YS54LFxuICAgIHk6IGN1cnJlbnRUcmFuc2xhdGUueSAtIGRlbHRhLnlcbiAgfTtcbiAgY29uc3QgaGVpZ2h0S2V5ZnJhbWVzID0gTWF0aC5yb3VuZChjdXJyZW50LmludHJpbnNpY0hlaWdodCkgIT09IE1hdGgucm91bmQoZmluYWwuaW50cmluc2ljSGVpZ2h0KSA/IHtcbiAgICBtaW5IZWlnaHQ6IFtcbiAgICAgIGAke2N1cnJlbnQuaW50cmluc2ljSGVpZ2h0fXB4YCxcbiAgICAgIGAke2ZpbmFsLmludHJpbnNpY0hlaWdodH1weGBcbiAgICBdLFxuICAgIG1heEhlaWdodDogW1xuICAgICAgYCR7Y3VycmVudC5pbnRyaW5zaWNIZWlnaHR9cHhgLFxuICAgICAgYCR7ZmluYWwuaW50cmluc2ljSGVpZ2h0fXB4YFxuICAgIF1cbiAgfSA6IHt9O1xuICBjb25zdCB3aWR0aEtleWZyYW1lcyA9IE1hdGgucm91bmQoY3VycmVudC5pbnRyaW5zaWNXaWR0aCkgIT09IE1hdGgucm91bmQoZmluYWwuaW50cmluc2ljV2lkdGgpID8ge1xuICAgIG1pbldpZHRoOiBbXG4gICAgICBgJHtjdXJyZW50LmludHJpbnNpY1dpZHRofXB4YCxcbiAgICAgIGAke2ZpbmFsLmludHJpbnNpY1dpZHRofXB4YFxuICAgIF0sXG4gICAgbWF4V2lkdGg6IFtcbiAgICAgIGAke2N1cnJlbnQuaW50cmluc2ljV2lkdGh9cHhgLFxuICAgICAgYCR7ZmluYWwuaW50cmluc2ljV2lkdGh9cHhgXG4gICAgXVxuICB9IDoge307XG4gIGN0eC5zdHlsZXMuc2V0KHsgdHJhbnNpdGlvbjogY3R4LnRyYW5zaXRpb24gfSwgQ1NTX1BSRUZJWCk7XG4gIGN0eC5mZWVkYmFja0VsZW1lbnQuc2V0QXR0cmlidXRlKERST1BQSU5HX0FUVFJJQlVURSwgXCJcIik7XG4gIChfZDIgPSBjdHguZ2V0RWxlbWVudE11dGF0aW9uT2JzZXJ2ZXIoKSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9kMi50YWtlUmVjb3JkcygpO1xuICBhbmltYXRlVHJhbnNmb3JtKHtcbiAgICBlbGVtZW50OiBjdHguZmVlZGJhY2tFbGVtZW50LFxuICAgIGtleWZyYW1lczogX19zcHJlYWRQcm9wcyhfX3NwcmVhZFZhbHVlcyhfX3NwcmVhZFZhbHVlcyh7fSwgaGVpZ2h0S2V5ZnJhbWVzKSwgd2lkdGhLZXlmcmFtZXMpLCB7XG4gICAgICB0cmFuc2xhdGU6IFtcbiAgICAgICAgYCR7Y3VycmVudFRyYW5zbGF0ZS54fXB4ICR7Y3VycmVudFRyYW5zbGF0ZS55fXB4IDBgLFxuICAgICAgICBgJHtmaW5hbFRyYW5zbGF0ZS54fXB4ICR7ZmluYWxUcmFuc2xhdGUueX1weCAwYFxuICAgICAgXVxuICAgIH0pLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGR1cmF0aW9uOiBwcmVmZXJzUmVkdWNlZE1vdGlvbihnZXRXaW5kb3coY3R4LmZlZWRiYWNrRWxlbWVudCkpID8gMCA6IGN0eC5tb3ZlZCB8fCBjdHguZmVlZGJhY2tFbGVtZW50ICE9PSBjdHguZWxlbWVudCA/IGR1cmF0aW9uIDogMCxcbiAgICAgIGVhc2luZ1xuICAgIH1cbiAgfSkudGhlbigoKSA9PiB7XG4gICAgY3R4LmZlZWRiYWNrRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoRFJPUFBJTkdfQVRUUklCVVRFKTtcbiAgICBydW5uaW5nQW5pbWF0aW9uID09IG51bGwgPyB2b2lkIDAgOiBydW5uaW5nQW5pbWF0aW9uLmZpbmlzaCgpO1xuICAgIGN0eC5jbGVhbnVwKCk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGN0eC5yZXN0b3JlRm9jdXMpO1xuICB9KTtcbn1cblxuLy8gc3JjL2NvcmUvcGx1Z2lucy9mZWVkYmFjay9GZWVkYmFjay50c1xudmFyIF9vdmVybGF5X2RlYywgX2EyLCBfaW5pdDIsIF9vdmVybGF5LCBfRmVlZGJhY2tfaW5zdGFuY2VzLCB0cmFja092ZXJsYXlSb290X2ZuLCByZW5kZXJfZm47XG52YXIgX0ZlZWRiYWNrID0gY2xhc3MgX0ZlZWRiYWNrIGV4dGVuZHMgKF9hMiA9IFBsdWdpbiwgX292ZXJsYXlfZGVjID0gW3JlYWN0aXZlXSwgX2EyKSB7XG4gIGNvbnN0cnVjdG9yKG1hbmFnZXIsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihtYW5hZ2VyLCBvcHRpb25zKTtcbiAgICBfX3ByaXZhdGVBZGQodGhpcywgX0ZlZWRiYWNrX2luc3RhbmNlcyk7XG4gICAgX19wcml2YXRlQWRkKHRoaXMsIF9vdmVybGF5LCBfX3J1bkluaXRpYWxpemVycyhfaW5pdDIsIDgsIHRoaXMpKSwgX19ydW5Jbml0aWFsaXplcnMoX2luaXQyLCAxMSwgdGhpcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGluaXRpYWw6IHt9LFxuICAgICAgY3VycmVudDoge31cbiAgICB9O1xuICAgIGNvbnN0IHN0eWxlSW5qZWN0b3IgPSBtYW5hZ2VyLnJlZ2lzdHJ5LnBsdWdpbnMuZ2V0KFN0eWxlSW5qZWN0b3IpO1xuICAgIGNvbnN0IHVucmVnaXN0ZXJTdHlsZXMgPSBzdHlsZUluamVjdG9yID09IG51bGwgPyB2b2lkIDAgOiBzdHlsZUluamVjdG9yLnJlZ2lzdGVyKENTU19SVUxFUyk7XG4gICAgaWYgKHVucmVnaXN0ZXJTdHlsZXMpIHtcbiAgICAgIGNvbnN0IG9yaWdpbmFsRGVzdHJveSA9IHRoaXMuZGVzdHJveS5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5kZXN0cm95ID0gKCkgPT4ge1xuICAgICAgICB1bnJlZ2lzdGVyU3R5bGVzKCk7XG4gICAgICAgIG9yaWdpbmFsRGVzdHJveSgpO1xuICAgICAgfTtcbiAgICB9XG4gICAgdGhpcy5yZWdpc3RlckVmZmVjdChfX3ByaXZhdGVNZXRob2QodGhpcywgX0ZlZWRiYWNrX2luc3RhbmNlcywgdHJhY2tPdmVybGF5Um9vdF9mbikuYmluZCh0aGlzLCBzdHlsZUluamVjdG9yKSk7XG4gICAgdGhpcy5yZWdpc3RlckVmZmVjdChfX3ByaXZhdGVNZXRob2QodGhpcywgX0ZlZWRiYWNrX2luc3RhbmNlcywgcmVuZGVyX2ZuKSk7XG4gIH1cbn07XG5faW5pdDIgPSBfX2RlY29yYXRvclN0YXJ0KF9hMik7XG5fb3ZlcmxheSA9IG5ldyBXZWFrTWFwKCk7XG5fRmVlZGJhY2tfaW5zdGFuY2VzID0gbmV3IFdlYWtTZXQoKTtcbnRyYWNrT3ZlcmxheVJvb3RfZm4gPSBmdW5jdGlvbihzdHlsZUluamVjdG9yKSB7XG4gIGNvbnN0IHsgb3ZlcmxheSB9ID0gdGhpcztcbiAgaWYgKCFvdmVybGF5IHx8ICFzdHlsZUluamVjdG9yKSByZXR1cm47XG4gIGNvbnN0IHJvb3QgPSBnZXRSb290KG92ZXJsYXkpO1xuICBpZiAoIXJvb3QpIHJldHVybjtcbiAgcmV0dXJuIHN0eWxlSW5qZWN0b3IuYWRkUm9vdChyb290KTtcbn07XG5yZW5kZXJfZm4gPSBmdW5jdGlvbigpIHtcbiAgdmFyIF9hNSwgX2IyLCBfYzMsIF9kMiwgX2UsIF9mLCBfZztcbiAgY29uc3QgeyBzdGF0ZSwgbWFuYWdlciwgb3B0aW9ucyB9ID0gdGhpcztcbiAgY29uc3QgeyBkcmFnT3BlcmF0aW9uIH0gPSBtYW5hZ2VyO1xuICBjb25zdCB7IHBvc2l0aW9uLCBzb3VyY2UsIHN0YXR1cyB9ID0gZHJhZ09wZXJhdGlvbjtcbiAgaWYgKHN0YXR1cy5pZGxlKSB7XG4gICAgc3RhdGUuY3VycmVudCA9IHt9O1xuICAgIHN0YXRlLmluaXRpYWwgPSB7fTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKCFzb3VyY2UpIHJldHVybjtcbiAgY29uc3QgeyBlbGVtZW50IH0gPSBzb3VyY2U7XG4gIGNvbnN0IGVudGl0eU9wdGlvbnMgPSBzb3VyY2UucGx1Z2luQ29uZmlnKF9GZWVkYmFjayk7XG4gIGNvbnN0IGZlZWRiYWNrT3B0aW9uID0gKF9iMiA9IChfYTUgPSBlbnRpdHlPcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBlbnRpdHlPcHRpb25zLmZlZWRiYWNrKSAhPSBudWxsID8gX2E1IDogb3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5mZWVkYmFjaykgIT0gbnVsbCA/IF9iMiA6IFwiZGVmYXVsdFwiO1xuICBjb25zdCBmZWVkYmFjayA9IHR5cGVvZiBmZWVkYmFja09wdGlvbiA9PT0gXCJmdW5jdGlvblwiID8gZmVlZGJhY2tPcHRpb24oc291cmNlLCBtYW5hZ2VyKSA6IGZlZWRiYWNrT3B0aW9uO1xuICBpZiAoIWVsZW1lbnQgfHwgZmVlZGJhY2sgPT09IFwibm9uZVwiIHx8ICFzdGF0dXMuaW5pdGlhbGl6ZWQgfHwgc3RhdHVzLmluaXRpYWxpemluZykge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB7IGluaXRpYWwgfSA9IHN0YXRlO1xuICBjb25zdCBmZWVkYmFja0VsZW1lbnQgPSAoX2MzID0gdGhpcy5vdmVybGF5KSAhPSBudWxsID8gX2MzIDogZWxlbWVudDtcbiAgY29uc3QgZnJhbWVUcmFuc2Zvcm0gPSBnZXRGcmFtZVRyYW5zZm9ybShmZWVkYmFja0VsZW1lbnQpO1xuICBjb25zdCBlbGVtZW50RnJhbWVUcmFuc2Zvcm0gPSBnZXRGcmFtZVRyYW5zZm9ybShlbGVtZW50KTtcbiAgY29uc3QgY3Jvc3NGcmFtZSA9ICFpc1NhbWVGcmFtZShlbGVtZW50LCBmZWVkYmFja0VsZW1lbnQpO1xuICBjb25zdCBzaGFwZSA9IG5ldyBET01SZWN0YW5nbGUoZWxlbWVudCwge1xuICAgIGZyYW1lVHJhbnNmb3JtOiBjcm9zc0ZyYW1lID8gZWxlbWVudEZyYW1lVHJhbnNmb3JtIDogbnVsbCxcbiAgICBpZ25vcmVUcmFuc2Zvcm1zOiAhY3Jvc3NGcmFtZVxuICB9KTtcbiAgY29uc3Qgc2NhbGVEZWx0YSA9IHtcbiAgICB4OiBlbGVtZW50RnJhbWVUcmFuc2Zvcm0uc2NhbGVYIC8gZnJhbWVUcmFuc2Zvcm0uc2NhbGVYLFxuICAgIHk6IGVsZW1lbnRGcmFtZVRyYW5zZm9ybS5zY2FsZVkgLyBmcmFtZVRyYW5zZm9ybS5zY2FsZVlcbiAgfTtcbiAgbGV0IHsgd2lkdGgsIGhlaWdodCwgdG9wLCBsZWZ0IH0gPSBzaGFwZTtcbiAgaWYgKGNyb3NzRnJhbWUpIHtcbiAgICB3aWR0aCA9IHdpZHRoIC8gc2NhbGVEZWx0YS54O1xuICAgIGhlaWdodCA9IGhlaWdodCAvIHNjYWxlRGVsdGEueTtcbiAgfVxuICBjb25zdCBzdHlsZXMgPSBuZXcgU3R5bGVzKGZlZWRiYWNrRWxlbWVudCk7XG4gIGNvbnN0IGVsZW1lbnRTdHlsZXMgPSBnZXRDb21wdXRlZFN0eWxlcyhlbGVtZW50KTtcbiAgY29uc3Qge1xuICAgIHRyYW5zaXRpb24sXG4gICAgdHJhbnNsYXRlLFxuICAgIGJveFNpemluZyxcbiAgICBwYWRkaW5nQmxvY2tTdGFydCxcbiAgICBwYWRkaW5nQmxvY2tFbmQsXG4gICAgcGFkZGluZ0lubGluZVN0YXJ0LFxuICAgIHBhZGRpbmdJbmxpbmVFbmQsXG4gICAgYm9yZGVySW5saW5lU3RhcnRXaWR0aCxcbiAgICBib3JkZXJJbmxpbmVFbmRXaWR0aCxcbiAgICBib3JkZXJCbG9ja1N0YXJ0V2lkdGgsXG4gICAgYm9yZGVyQmxvY2tFbmRXaWR0aFxuICB9ID0gZWxlbWVudFN0eWxlcztcbiAgY29uc3QgZmVlZGJhY2tUcmFuc2l0aW9uID0gdHJhbnNpdGlvbi5zcGxpdChcIixcIikuZmlsdGVyKCh0KSA9PiAhL15cXHMqKHRyYW5zZm9ybXx0cmFuc2xhdGV8c2NhbGUpXFxiLy50ZXN0KHQpKS5qb2luKFwiLFwiKTtcbiAgY29uc3QgcGFyc2VkVHJhbnNmb3JtID0gcGFyc2VUcmFuc2Zvcm0oZWxlbWVudFN0eWxlcyk7XG4gIGNvbnN0IGluaXRpYWxUcmFuc2Zvcm1TdHlsZSA9IGVsZW1lbnRTdHlsZXMudHJhbnNmb3JtO1xuICBjb25zdCBjbG9uZSA9IGZlZWRiYWNrID09PSBcImNsb25lXCI7XG4gIGNvbnN0IGNvbnRlbnRCb3ggPSBib3hTaXppbmcgPT09IFwiY29udGVudC1ib3hcIjtcbiAgY29uc3Qgd2lkdGhPZmZzZXQgPSBjb250ZW50Qm94ID8gcGFyc2VJbnQocGFkZGluZ0lubGluZVN0YXJ0KSArIHBhcnNlSW50KHBhZGRpbmdJbmxpbmVFbmQpICsgcGFyc2VJbnQoYm9yZGVySW5saW5lU3RhcnRXaWR0aCkgKyBwYXJzZUludChib3JkZXJJbmxpbmVFbmRXaWR0aCkgOiAwO1xuICBjb25zdCBoZWlnaHRPZmZzZXQgPSBjb250ZW50Qm94ID8gcGFyc2VJbnQocGFkZGluZ0Jsb2NrU3RhcnQpICsgcGFyc2VJbnQocGFkZGluZ0Jsb2NrRW5kKSArIHBhcnNlSW50KGJvcmRlckJsb2NrU3RhcnRXaWR0aCkgKyBwYXJzZUludChib3JkZXJCbG9ja0VuZFdpZHRoKSA6IDA7XG4gIGNvbnN0IHBsYWNlaG9sZGVyID0gZmVlZGJhY2sgIT09IFwibW92ZVwiICYmICF0aGlzLm92ZXJsYXkgPyBjcmVhdGVQbGFjZWhvbGRlcihzb3VyY2UsIGNsb25lID8gXCJjbG9uZVwiIDogXCJoaWRkZW5cIikgOiBudWxsO1xuICBjb25zdCBpc0tleWJvYXJkT3BlcmF0aW9uID0gdW50cmFja2VkKFxuICAgICgpID0+IGlzS2V5Ym9hcmRFdmVudChtYW5hZ2VyLmRyYWdPcGVyYXRpb24uYWN0aXZhdG9yRXZlbnQpXG4gICk7XG4gIGlmICghaW5pdGlhbC50cmFuc2xhdGUpIHtcbiAgICBpZiAodGhpcy5vdmVybGF5ICYmIHBhcnNlZFRyYW5zZm9ybSkge1xuICAgICAgaW5pdGlhbC50cmFuc2xhdGUgPSB7IHg6IHBhcnNlZFRyYW5zZm9ybS54LCB5OiBwYXJzZWRUcmFuc2Zvcm0ueSB9O1xuICAgIH0gZWxzZSBpZiAodHJhbnNsYXRlICE9PSBcIm5vbmVcIikge1xuICAgICAgY29uc3QgcGFyc2VkVHJhbnNsYXRlID0gcGFyc2VUcmFuc2xhdGUodHJhbnNsYXRlKTtcbiAgICAgIGlmIChwYXJzZWRUcmFuc2xhdGUpIHtcbiAgICAgICAgaW5pdGlhbC50cmFuc2xhdGUgPSBwYXJzZWRUcmFuc2xhdGU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmICghaW5pdGlhbC50cmFuc2Zvcm1PcmlnaW4pIHtcbiAgICBjb25zdCBjdXJyZW50ID0gdW50cmFja2VkKCgpID0+IHBvc2l0aW9uLmN1cnJlbnQpO1xuICAgIGNvbnN0IHZpc3VhbExlZnQgPSBsZWZ0ICsgKChfZDIgPSBwYXJzZWRUcmFuc2Zvcm0gPT0gbnVsbCA/IHZvaWQgMCA6IHBhcnNlZFRyYW5zZm9ybS54KSAhPSBudWxsID8gX2QyIDogMCk7XG4gICAgY29uc3QgdmlzdWFsVG9wID0gdG9wICsgKChfZSA9IHBhcnNlZFRyYW5zZm9ybSA9PSBudWxsID8gdm9pZCAwIDogcGFyc2VkVHJhbnNmb3JtLnkpICE9IG51bGwgPyBfZSA6IDApO1xuICAgIGluaXRpYWwudHJhbnNmb3JtT3JpZ2luID0ge1xuICAgICAgeDogKGN1cnJlbnQueCAtIHZpc3VhbExlZnQgKiBmcmFtZVRyYW5zZm9ybS5zY2FsZVggLSBmcmFtZVRyYW5zZm9ybS54KSAvICh3aWR0aCAqIGZyYW1lVHJhbnNmb3JtLnNjYWxlWCksXG4gICAgICB5OiAoY3VycmVudC55IC0gdmlzdWFsVG9wICogZnJhbWVUcmFuc2Zvcm0uc2NhbGVZIC0gZnJhbWVUcmFuc2Zvcm0ueSkgLyAoaGVpZ2h0ICogZnJhbWVUcmFuc2Zvcm0uc2NhbGVZKVxuICAgIH07XG4gIH1cbiAgY29uc3QgeyB0cmFuc2Zvcm1PcmlnaW4gfSA9IGluaXRpYWw7XG4gIGNvbnN0IHJlbGF0aXZlVG9wID0gdG9wICogZnJhbWVUcmFuc2Zvcm0uc2NhbGVZICsgZnJhbWVUcmFuc2Zvcm0ueTtcbiAgY29uc3QgcmVsYXRpdmVMZWZ0ID0gbGVmdCAqIGZyYW1lVHJhbnNmb3JtLnNjYWxlWCArIGZyYW1lVHJhbnNmb3JtLng7XG4gIGlmICghaW5pdGlhbC5jb29yZGluYXRlcykge1xuICAgIGluaXRpYWwuY29vcmRpbmF0ZXMgPSB7XG4gICAgICB4OiByZWxhdGl2ZUxlZnQsXG4gICAgICB5OiByZWxhdGl2ZVRvcFxuICAgIH07XG4gICAgaWYgKHNjYWxlRGVsdGEueCAhPT0gMSB8fCBzY2FsZURlbHRhLnkgIT09IDEpIHtcbiAgICAgIGNvbnN0IHsgc2NhbGVYLCBzY2FsZVkgfSA9IGVsZW1lbnRGcmFtZVRyYW5zZm9ybTtcbiAgICAgIGNvbnN0IHsgeDogdFgyLCB5OiB0WTIgfSA9IHRyYW5zZm9ybU9yaWdpbjtcbiAgICAgIGluaXRpYWwuY29vcmRpbmF0ZXMueCArPSAod2lkdGggKiBzY2FsZVggLSB3aWR0aCkgKiB0WDI7XG4gICAgICBpbml0aWFsLmNvb3JkaW5hdGVzLnkgKz0gKGhlaWdodCAqIHNjYWxlWSAtIGhlaWdodCkgKiB0WTI7XG4gICAgfVxuICB9XG4gIGlmICghaW5pdGlhbC5kaW1lbnNpb25zKSB7XG4gICAgaW5pdGlhbC5kaW1lbnNpb25zID0geyB3aWR0aCwgaGVpZ2h0IH07XG4gIH1cbiAgaWYgKCFpbml0aWFsLmZyYW1lVHJhbnNmb3JtKSB7XG4gICAgaW5pdGlhbC5mcmFtZVRyYW5zZm9ybSA9IGZyYW1lVHJhbnNmb3JtO1xuICB9XG4gIGNvbnN0IGNvb3JkaW5hdGVzRGVsdGEgPSB7XG4gICAgeDogaW5pdGlhbC5jb29yZGluYXRlcy54IC0gcmVsYXRpdmVMZWZ0LFxuICAgIHk6IGluaXRpYWwuY29vcmRpbmF0ZXMueSAtIHJlbGF0aXZlVG9wXG4gIH07XG4gIGNvbnN0IHNpemVEZWx0YSA9IHtcbiAgICB3aWR0aDogKGluaXRpYWwuZGltZW5zaW9ucy53aWR0aCAqIGluaXRpYWwuZnJhbWVUcmFuc2Zvcm0uc2NhbGVYIC0gd2lkdGggKiBmcmFtZVRyYW5zZm9ybS5zY2FsZVgpICogdHJhbnNmb3JtT3JpZ2luLngsXG4gICAgaGVpZ2h0OiAoaW5pdGlhbC5kaW1lbnNpb25zLmhlaWdodCAqIGluaXRpYWwuZnJhbWVUcmFuc2Zvcm0uc2NhbGVZIC0gaGVpZ2h0ICogZnJhbWVUcmFuc2Zvcm0uc2NhbGVZKSAqIHRyYW5zZm9ybU9yaWdpbi55XG4gIH07XG4gIGNvbnN0IGRlbHRhID0ge1xuICAgIHg6IGNvb3JkaW5hdGVzRGVsdGEueCAvIGZyYW1lVHJhbnNmb3JtLnNjYWxlWCArIHNpemVEZWx0YS53aWR0aCxcbiAgICB5OiBjb29yZGluYXRlc0RlbHRhLnkgLyBmcmFtZVRyYW5zZm9ybS5zY2FsZVkgKyBzaXplRGVsdGEuaGVpZ2h0XG4gIH07XG4gIGNvbnN0IHByb2plY3RlZCA9IHtcbiAgICBsZWZ0OiBsZWZ0ICsgZGVsdGEueCxcbiAgICB0b3A6IHRvcCArIGRlbHRhLnlcbiAgfTtcbiAgZmVlZGJhY2tFbGVtZW50LnNldEF0dHJpYnV0ZShBVFRSSUJVVEUsIFwidHJ1ZVwiKTtcbiAgY29uc3QgdHJhbnNmb3JtID0gdW50cmFja2VkKCgpID0+IGRyYWdPcGVyYXRpb24udHJhbnNmb3JtKTtcbiAgY29uc3QgaW5pdGlhbFRyYW5zbGF0ZSA9IChfZiA9IGluaXRpYWwudHJhbnNsYXRlKSAhPSBudWxsID8gX2YgOiB7IHg6IDAsIHk6IDAgfTtcbiAgY29uc3QgdFggPSB0cmFuc2Zvcm0ueCAqIGZyYW1lVHJhbnNmb3JtLnNjYWxlWCArIGluaXRpYWxUcmFuc2xhdGUueDtcbiAgY29uc3QgdFkgPSB0cmFuc2Zvcm0ueSAqIGZyYW1lVHJhbnNmb3JtLnNjYWxlWSArIGluaXRpYWxUcmFuc2xhdGUueTtcbiAgY29uc3QgZml4ZWRPZmZzZXQgPSBnZXRGaXhlZFBvc2l0aW9uT2Zmc2V0KCk7XG4gIHN0eWxlcy5zZXQoXG4gICAge1xuICAgICAgd2lkdGg6IHdpZHRoIC0gd2lkdGhPZmZzZXQsXG4gICAgICBoZWlnaHQ6IGhlaWdodCAtIGhlaWdodE9mZnNldCxcbiAgICAgIHRvcDogcHJvamVjdGVkLnRvcCArIGZpeGVkT2Zmc2V0LnksXG4gICAgICBsZWZ0OiBwcm9qZWN0ZWQubGVmdCArIGZpeGVkT2Zmc2V0LngsXG4gICAgICB0cmFuc2xhdGU6IGAke3RYfXB4ICR7dFl9cHggMGAsXG4gICAgICB0cmFuc2Zvcm06IHRoaXMub3ZlcmxheSA/IFwibm9uZVwiIDogaW5pdGlhbFRyYW5zZm9ybVN0eWxlLFxuICAgICAgdHJhbnNpdGlvbjogZmVlZGJhY2tUcmFuc2l0aW9uID8gYCR7ZmVlZGJhY2tUcmFuc2l0aW9ufSwgdHJhbnNsYXRlIDBtcyBsaW5lYXJgIDogXCJ0cmFuc2xhdGUgMG1zIGxpbmVhclwiLFxuICAgICAgc2NhbGU6IGNyb3NzRnJhbWUgPyBgJHtzY2FsZURlbHRhLnh9ICR7c2NhbGVEZWx0YS55fWAgOiBcIlwiLFxuICAgICAgXCJ0cmFuc2Zvcm0tb3JpZ2luXCI6IGAke3RyYW5zZm9ybU9yaWdpbi54ICogMTAwfSUgJHt0cmFuc2Zvcm1PcmlnaW4ueSAqIDEwMH0lYFxuICAgIH0sXG4gICAgQ1NTX1BSRUZJWFxuICApO1xuICBpZiAocGxhY2Vob2xkZXIpIHtcbiAgICBlbGVtZW50Lmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyZW5kXCIsIHBsYWNlaG9sZGVyKTtcbiAgICBpZiAob3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5yb290RWxlbWVudCkge1xuICAgICAgY29uc3Qgcm9vdCA9IHR5cGVvZiBvcHRpb25zLnJvb3RFbGVtZW50ID09PSBcImZ1bmN0aW9uXCIgPyBvcHRpb25zLnJvb3RFbGVtZW50KHNvdXJjZSkgOiBvcHRpb25zLnJvb3RFbGVtZW50O1xuICAgICAgcm9vdC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICB9XG4gIH1cbiAgaWYgKHN1cHBvcnRzUG9wb3ZlcihmZWVkYmFja0VsZW1lbnQpKSB7XG4gICAgaWYgKCFmZWVkYmFja0VsZW1lbnQuaGFzQXR0cmlidXRlKFwicG9wb3ZlclwiKSkge1xuICAgICAgZmVlZGJhY2tFbGVtZW50LnNldEF0dHJpYnV0ZShcInBvcG92ZXJcIiwgXCJtYW51YWxcIik7XG4gICAgfVxuICAgIHNob3dQb3BvdmVyKGZlZWRiYWNrRWxlbWVudCk7XG4gICAgZmVlZGJhY2tFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJiZWZvcmV0b2dnbGVcIiwgcHJldmVudFBvcG92ZXJDbG9zZSk7XG4gIH1cbiAgbGV0IGVsZW1lbnRNdXRhdGlvbk9ic2VydmVyO1xuICBsZXQgZG9jdW1lbnRNdXRhdGlvbk9ic2VydmVyO1xuICBsZXQgc2F2ZWRDZWxsV2lkdGhzO1xuICBjb25zdCByZXNpemVPYnNlcnZlciA9IGNyZWF0ZVJlc2l6ZU9ic2VydmVyKHtcbiAgICBwbGFjZWhvbGRlcixcbiAgICBlbGVtZW50LFxuICAgIGZlZWRiYWNrRWxlbWVudCxcbiAgICBmcmFtZVRyYW5zZm9ybSxcbiAgICB0cmFuc2Zvcm1PcmlnaW4sXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIHRvcCxcbiAgICBsZWZ0LFxuICAgIHdpZHRoT2Zmc2V0LFxuICAgIGhlaWdodE9mZnNldCxcbiAgICBkZWx0YSxcbiAgICBzdHlsZXMsXG4gICAgZHJhZ09wZXJhdGlvbixcbiAgICBnZXRUcmFuc2xhdGU6ICgpID0+IHN0YXRlLmN1cnJlbnQudHJhbnNsYXRlLFxuICAgIGdldEVsZW1lbnRNdXRhdGlvbk9ic2VydmVyOiAoKSA9PiBlbGVtZW50TXV0YXRpb25PYnNlcnZlcixcbiAgICBnZXRTYXZlZENlbGxXaWR0aHM6ICgpID0+IHNhdmVkQ2VsbFdpZHRocyxcbiAgICBzZXRTYXZlZENlbGxXaWR0aHM6ICh3aWR0aHMpID0+IHtcbiAgICAgIHNhdmVkQ2VsbFdpZHRocyA9IHdpZHRocztcbiAgICB9XG4gIH0pO1xuICBjb25zdCBpbml0aWFsU2hhcGUgPSBuZXcgRE9NUmVjdGFuZ2xlKGZlZWRiYWNrRWxlbWVudCk7XG4gIHVudHJhY2tlZCgoKSA9PiBkcmFnT3BlcmF0aW9uLnNoYXBlID0gaW5pdGlhbFNoYXBlKTtcbiAgY29uc3QgZmVlZGJhY2tXaW5kb3cgPSBnZXRXaW5kb3coZmVlZGJhY2tFbGVtZW50KTtcbiAgY29uc3QgaGFuZGxlV2luZG93UmVzaXplID0gKGV2ZW50KSA9PiB7XG4gICAgdGhpcy5tYW5hZ2VyLmFjdGlvbnMuc3RvcCh7IGV2ZW50IH0pO1xuICB9O1xuICBjb25zdCByZWR1Y2VkTW90aW9uID0gcHJlZmVyc1JlZHVjZWRNb3Rpb24oZmVlZGJhY2tXaW5kb3cpO1xuICBpZiAoaXNLZXlib2FyZE9wZXJhdGlvbikge1xuICAgIGZlZWRiYWNrV2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlV2luZG93UmVzaXplKTtcbiAgfVxuICBpZiAodW50cmFja2VkKCgpID0+IHNvdXJjZS5zdGF0dXMpID09PSBcImlkbGVcIikge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiBzb3VyY2Uuc3RhdHVzID0gXCJkcmFnZ2luZ1wiKTtcbiAgfVxuICBpZiAocGxhY2Vob2xkZXIpIHtcbiAgICByZXNpemVPYnNlcnZlci5vYnNlcnZlKHBsYWNlaG9sZGVyKTtcbiAgICBlbGVtZW50TXV0YXRpb25PYnNlcnZlciA9IGNyZWF0ZUVsZW1lbnRNdXRhdGlvbk9ic2VydmVyKFxuICAgICAgZWxlbWVudCxcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgY2xvbmVcbiAgICApO1xuICAgIGRvY3VtZW50TXV0YXRpb25PYnNlcnZlciA9IGNyZWF0ZURvY3VtZW50TXV0YXRpb25PYnNlcnZlcihcbiAgICAgIGVsZW1lbnQsXG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIGZlZWRiYWNrRWxlbWVudFxuICAgICk7XG4gIH1cbiAgY29uc3QgaWQgPSAoX2cgPSBtYW5hZ2VyLmRyYWdPcGVyYXRpb24uc291cmNlKSA9PSBudWxsID8gdm9pZCAwIDogX2cuaWQ7XG4gIGNvbnN0IHJlc3RvcmVGb2N1cyA9ICgpID0+IHtcbiAgICB2YXIgX2E2O1xuICAgIGlmICghaXNLZXlib2FyZE9wZXJhdGlvbiB8fCBpZCA9PSBudWxsKSByZXR1cm47XG4gICAgY29uc3QgZHJhZ2dhYmxlID0gbWFuYWdlci5yZWdpc3RyeS5kcmFnZ2FibGVzLmdldChpZCk7XG4gICAgY29uc3QgZm9jdXNUYXJnZXQgPSAoX2E2ID0gZHJhZ2dhYmxlID09IG51bGwgPyB2b2lkIDAgOiBkcmFnZ2FibGUuaGFuZGxlKSAhPSBudWxsID8gX2E2IDogZHJhZ2dhYmxlID09IG51bGwgPyB2b2lkIDAgOiBkcmFnZ2FibGUuZWxlbWVudDtcbiAgICBpZiAoaXNIVE1MRWxlbWVudChmb2N1c1RhcmdldCkpIHtcbiAgICAgIGZvY3VzVGFyZ2V0LmZvY3VzKCk7XG4gICAgfVxuICB9O1xuICBjb25zdCBjbGVhbnVwID0gKCkgPT4ge1xuICAgIGVsZW1lbnRNdXRhdGlvbk9ic2VydmVyID09IG51bGwgPyB2b2lkIDAgOiBlbGVtZW50TXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgZG9jdW1lbnRNdXRhdGlvbk9ic2VydmVyID09IG51bGwgPyB2b2lkIDAgOiBkb2N1bWVudE11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIHJlc2l6ZU9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICBmZWVkYmFja1dpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVdpbmRvd1Jlc2l6ZSk7XG4gICAgaWYgKHN1cHBvcnRzUG9wb3ZlcihmZWVkYmFja0VsZW1lbnQpKSB7XG4gICAgICBmZWVkYmFja0VsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgXCJiZWZvcmV0b2dnbGVcIixcbiAgICAgICAgcHJldmVudFBvcG92ZXJDbG9zZVxuICAgICAgKTtcbiAgICAgIGZlZWRiYWNrRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJwb3BvdmVyXCIpO1xuICAgIH1cbiAgICBmZWVkYmFja0VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKEFUVFJJQlVURSk7XG4gICAgc3R5bGVzLnJlc2V0KCk7XG4gICAgY29uc3QgZmluYWxpemUgPSAoKSA9PiB7XG4gICAgICB2YXIgX2E2O1xuICAgICAgaWYgKHNhdmVkQ2VsbFdpZHRocyAmJiBpc1RhYmxlUm93KGVsZW1lbnQpKSB7XG4gICAgICAgIGNvbnN0IGNlbGxzID0gQXJyYXkuZnJvbShlbGVtZW50LmNlbGxzKTtcbiAgICAgICAgZm9yIChjb25zdCBbaW5kZXgsIGNlbGxdIG9mIGNlbGxzLmVudHJpZXMoKSkge1xuICAgICAgICAgIGNlbGwuc3R5bGUud2lkdGggPSAoX2E2ID0gc2F2ZWRDZWxsV2lkdGhzW2luZGV4XSkgIT0gbnVsbCA/IF9hNiA6IFwiXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNvdXJjZS5zdGF0dXMgPSBcImlkbGVcIjtcbiAgICAgIGNvbnN0IG1vdmVkID0gc3RhdGUuY3VycmVudC50cmFuc2xhdGUgIT0gbnVsbDtcbiAgICAgIGNvbnN0IGlzRHJhZ2dpbmcgPSBkcmFnT3BlcmF0aW9uLnN0YXR1cy5kcmFnZ2luZztcbiAgICAgIGlmIChwbGFjZWhvbGRlciAmJiAoIWlzRHJhZ2dpbmcgJiYgbW92ZWQgfHwgcGxhY2Vob2xkZXIucGFyZW50RWxlbWVudCAhPT0gZmVlZGJhY2tFbGVtZW50LnBhcmVudEVsZW1lbnQpICYmIGZlZWRiYWNrRWxlbWVudC5pc0Nvbm5lY3RlZCkge1xuICAgICAgICBwbGFjZWhvbGRlci5yZXBsYWNlV2l0aChmZWVkYmFja0VsZW1lbnQpO1xuICAgICAgfVxuICAgICAgcGxhY2Vob2xkZXIgPT0gbnVsbCA/IHZvaWQgMCA6IHBsYWNlaG9sZGVyLnJlbW92ZSgpO1xuICAgIH07XG4gICAgaWYgKGZlZWRiYWNrRWxlbWVudCA9PT0gdGhpcy5vdmVybGF5KSB7XG4gICAgICBzZXRUaW1lb3V0KGZpbmFsaXplLCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmluYWxpemUoKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IG9wdGlvbnNEcm9wQW5pbWF0aW9uID0gb3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5kcm9wQW5pbWF0aW9uO1xuICBjb25zdCBmZWVkYmFja1BsdWdpbiA9IHRoaXM7XG4gIGNvbnN0IGNsZWFudXBFZmZlY3RzID0gZWZmZWN0cyhcbiAgICAvLyBVcGRhdGUgdHJhbnNmb3JtIG9uIG1vdmVcbiAgICAoKSA9PiB7XG4gICAgICB2YXIgX2E2LCBfYjMsIF9jNDtcbiAgICAgIGNvbnN0IHsgdHJhbnNmb3JtOiB0cmFuc2Zvcm0yLCBzdGF0dXM6IHN0YXR1czIgfSA9IGRyYWdPcGVyYXRpb247XG4gICAgICBpZiAoIXRyYW5zZm9ybTIueCAmJiAhdHJhbnNmb3JtMi55ICYmICFzdGF0ZS5jdXJyZW50LnRyYW5zbGF0ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoc3RhdHVzMi5kcmFnZ2luZykge1xuICAgICAgICBjb25zdCBpbml0aWFsVHJhbnNsYXRlMiA9IChfYTYgPSBpbml0aWFsLnRyYW5zbGF0ZSkgIT0gbnVsbCA/IF9hNiA6IHsgeDogMCwgeTogMCB9O1xuICAgICAgICBjb25zdCB0cmFuc2xhdGUyID0ge1xuICAgICAgICAgIHg6IHRyYW5zZm9ybTIueCAvIGZyYW1lVHJhbnNmb3JtLnNjYWxlWCArIGluaXRpYWxUcmFuc2xhdGUyLngsXG4gICAgICAgICAgeTogdHJhbnNmb3JtMi55IC8gZnJhbWVUcmFuc2Zvcm0uc2NhbGVZICsgaW5pdGlhbFRyYW5zbGF0ZTIueVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBwcmV2aW91c1RyYW5zbGF0ZSA9IHN0YXRlLmN1cnJlbnQudHJhbnNsYXRlO1xuICAgICAgICBjb25zdCBtb2RpZmllcnMgPSB1bnRyYWNrZWQoKCkgPT4gZHJhZ09wZXJhdGlvbi5tb2RpZmllcnMpO1xuICAgICAgICBjb25zdCBjdXJyZW50U2hhcGUgPSB1bnRyYWNrZWQoKCkgPT4ge1xuICAgICAgICAgIHZhciBfYTc7XG4gICAgICAgICAgcmV0dXJuIChfYTcgPSBkcmFnT3BlcmF0aW9uLnNoYXBlKSA9PSBudWxsID8gdm9pZCAwIDogX2E3LmN1cnJlbnQ7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBrZXlib2FyZFRyYW5zaXRpb24gPSBvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLmtleWJvYXJkVHJhbnNpdGlvbjtcbiAgICAgICAgY29uc3QgdHJhbnNsYXRlVHJhbnNpdGlvbiA9IGlzS2V5Ym9hcmRPcGVyYXRpb24gJiYgIXJlZHVjZWRNb3Rpb24gJiYga2V5Ym9hcmRUcmFuc2l0aW9uICE9PSBudWxsID8gYCR7KF9iMyA9IGtleWJvYXJkVHJhbnNpdGlvbiA9PSBudWxsID8gdm9pZCAwIDoga2V5Ym9hcmRUcmFuc2l0aW9uLmR1cmF0aW9uKSAhPSBudWxsID8gX2IzIDogMjUwfW1zICR7KF9jNCA9IGtleWJvYXJkVHJhbnNpdGlvbiA9PSBudWxsID8gdm9pZCAwIDoga2V5Ym9hcmRUcmFuc2l0aW9uLmVhc2luZykgIT0gbnVsbCA/IF9jNCA6IFwiY3ViaWMtYmV6aWVyKDAuMjUsIDEsIDAuNSwgMSlcIn1gIDogXCIwbXMgbGluZWFyXCI7XG4gICAgICAgIHN0eWxlcy5zZXQoXG4gICAgICAgICAge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogZmVlZGJhY2tUcmFuc2l0aW9uID8gYCR7ZmVlZGJhY2tUcmFuc2l0aW9ufSwgdHJhbnNsYXRlICR7dHJhbnNsYXRlVHJhbnNpdGlvbn1gIDogYHRyYW5zbGF0ZSAke3RyYW5zbGF0ZVRyYW5zaXRpb259YCxcbiAgICAgICAgICAgIHRyYW5zbGF0ZTogYCR7dHJhbnNsYXRlMi54fXB4ICR7dHJhbnNsYXRlMi55fXB4IDBgXG4gICAgICAgICAgfSxcbiAgICAgICAgICBDU1NfUFJFRklYXG4gICAgICAgICk7XG4gICAgICAgIGVsZW1lbnRNdXRhdGlvbk9ic2VydmVyID09IG51bGwgPyB2b2lkIDAgOiBlbGVtZW50TXV0YXRpb25PYnNlcnZlci50YWtlUmVjb3JkcygpO1xuICAgICAgICBpZiAoY3VycmVudFNoYXBlICYmIGN1cnJlbnRTaGFwZSAhPT0gaW5pdGlhbFNoYXBlICYmIHByZXZpb3VzVHJhbnNsYXRlICYmICFtb2RpZmllcnMubGVuZ3RoKSB7XG4gICAgICAgICAgY29uc3QgZGVsdGEyID0gUG9pbnQuZGVsdGEodHJhbnNsYXRlMiwgcHJldmlvdXNUcmFuc2xhdGUpO1xuICAgICAgICAgIGRyYWdPcGVyYXRpb24uc2hhcGUgPSBSZWN0YW5nbGUuZnJvbShcbiAgICAgICAgICAgIGN1cnJlbnRTaGFwZS5ib3VuZGluZ1JlY3RhbmdsZVxuICAgICAgICAgICkudHJhbnNsYXRlKFxuICAgICAgICAgICAgZGVsdGEyLnggKiBmcmFtZVRyYW5zZm9ybS5zY2FsZVgsXG4gICAgICAgICAgICBkZWx0YTIueSAqIGZyYW1lVHJhbnNmb3JtLnNjYWxlWVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZHJhZ09wZXJhdGlvbi5zaGFwZSA9IG5ldyBET01SZWN0YW5nbGUoZmVlZGJhY2tFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZS5jdXJyZW50LnRyYW5zbGF0ZSA9IHRyYW5zbGF0ZTI7XG4gICAgICB9XG4gICAgfSxcbiAgICAvLyBEcm9wIGFuaW1hdGlvblxuICAgIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKGRyYWdPcGVyYXRpb24uc3RhdHVzLmRyb3BwZWQpIHtcbiAgICAgICAgdGhpcy5kaXNwb3NlKCk7XG4gICAgICAgIHNvdXJjZS5zdGF0dXMgPSBcImRyb3BwaW5nXCI7XG4gICAgICAgIGNvbnN0IGRyb3BBbmltYXRpb25Db25maWcgPSAoZW50aXR5T3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogZW50aXR5T3B0aW9ucy5kcm9wQW5pbWF0aW9uKSAhPT0gdm9pZCAwID8gZW50aXR5T3B0aW9ucy5kcm9wQW5pbWF0aW9uIDogZmVlZGJhY2tQbHVnaW4uZHJvcEFuaW1hdGlvbiAhPT0gdm9pZCAwID8gZmVlZGJhY2tQbHVnaW4uZHJvcEFuaW1hdGlvbiA6IG9wdGlvbnNEcm9wQW5pbWF0aW9uO1xuICAgICAgICBsZXQgdHJhbnNsYXRlMiA9IHN0YXRlLmN1cnJlbnQudHJhbnNsYXRlO1xuICAgICAgICBjb25zdCBtb3ZlZCA9IHRyYW5zbGF0ZTIgIT0gbnVsbDtcbiAgICAgICAgaWYgKCF0cmFuc2xhdGUyICYmIGVsZW1lbnQgIT09IGZlZWRiYWNrRWxlbWVudCkge1xuICAgICAgICAgIHRyYW5zbGF0ZTIgPSB7IHg6IDAsIHk6IDAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRyYW5zbGF0ZTIgfHwgZHJvcEFuaW1hdGlvbkNvbmZpZyA9PT0gbnVsbCkge1xuICAgICAgICAgIGNsZWFudXAoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbWFuYWdlci5yZW5kZXJlci5yZW5kZXJpbmcudGhlbigoKSA9PiB7XG4gICAgICAgICAgcnVuRHJvcEFuaW1hdGlvbih7XG4gICAgICAgICAgICBzb3VyY2UsXG4gICAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgICAgZmVlZGJhY2tFbGVtZW50LFxuICAgICAgICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICAgICAgICB0cmFuc2xhdGU6IHRyYW5zbGF0ZTIsXG4gICAgICAgICAgICBtb3ZlZCxcbiAgICAgICAgICAgIHRyYW5zaXRpb24sXG4gICAgICAgICAgICBhbGlnbm1lbnQ6IHNvdXJjZS5hbGlnbm1lbnQsXG4gICAgICAgICAgICBzdHlsZXMsXG4gICAgICAgICAgICBhbmltYXRpb246IGRyb3BBbmltYXRpb25Db25maWcgIT0gbnVsbCA/IGRyb3BBbmltYXRpb25Db25maWcgOiB2b2lkIDAsXG4gICAgICAgICAgICBnZXRFbGVtZW50TXV0YXRpb25PYnNlcnZlcjogKCkgPT4gZWxlbWVudE11dGF0aW9uT2JzZXJ2ZXIsXG4gICAgICAgICAgICBjbGVhbnVwLFxuICAgICAgICAgICAgcmVzdG9yZUZvY3VzXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgKTtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBjbGVhbnVwKCk7XG4gICAgY2xlYW51cEVmZmVjdHMoKTtcbiAgfTtcbn07XG5fX2RlY29yYXRlRWxlbWVudChfaW5pdDIsIDQsIFwib3ZlcmxheVwiLCBfb3ZlcmxheV9kZWMsIF9GZWVkYmFjaywgX292ZXJsYXkpO1xuX19kZWNvcmF0b3JNZXRhZGF0YShfaW5pdDIsIF9GZWVkYmFjayk7XG5fRmVlZGJhY2suY29uZmlndXJlID0gY29uZmlndXJhdG9yKF9GZWVkYmFjayk7XG52YXIgRmVlZGJhY2sgPSBfRmVlZGJhY2s7XG52YXIgTE9DS0VEID0gdHJ1ZTtcbnZhciBVTkxPQ0tFRCA9IGZhbHNlO1xudmFyIF9kZWMsIF9hMywgX2RlYzIsIF9iLCBfaW5pdDMsIF9fYiwgX19hO1xuX2IgPSAoX2RlYzIgPSBbcmVhY3RpdmVdLCBTY3JvbGxEaXJlY3Rpb24uRm9yd2FyZCksIF9hMyA9IChfZGVjID0gW3JlYWN0aXZlXSwgU2Nyb2xsRGlyZWN0aW9uLlJldmVyc2UpO1xudmFyIFNjcm9sbExvY2sgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIF9fcHJpdmF0ZUFkZCh0aGlzLCBfX2IsIF9fcnVuSW5pdGlhbGl6ZXJzKF9pbml0MywgOCwgdGhpcywgTE9DS0VEKSksIF9fcnVuSW5pdGlhbGl6ZXJzKF9pbml0MywgMTEsIHRoaXMpO1xuICAgIF9fcHJpdmF0ZUFkZCh0aGlzLCBfX2EsIF9fcnVuSW5pdGlhbGl6ZXJzKF9pbml0MywgMTIsIHRoaXMsIExPQ0tFRCkpLCBfX3J1bkluaXRpYWxpemVycyhfaW5pdDMsIDE1LCB0aGlzKTtcbiAgfVxuICBpc0xvY2tlZChkaXJlY3Rpb24pIHtcbiAgICBpZiAoZGlyZWN0aW9uID09PSBTY3JvbGxEaXJlY3Rpb24uSWRsZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoZGlyZWN0aW9uID09IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzW1Njcm9sbERpcmVjdGlvbi5Gb3J3YXJkXSA9PT0gTE9DS0VEICYmIHRoaXNbU2Nyb2xsRGlyZWN0aW9uLlJldmVyc2VdID09PSBMT0NLRUQ7XG4gICAgfVxuICAgIHJldHVybiB0aGlzW2RpcmVjdGlvbl0gPT09IExPQ0tFRDtcbiAgfVxuICB1bmxvY2soZGlyZWN0aW9uKSB7XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gU2Nyb2xsRGlyZWN0aW9uLklkbGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpc1tkaXJlY3Rpb25dID0gVU5MT0NLRUQ7XG4gIH1cbn07XG5faW5pdDMgPSBfX2RlY29yYXRvclN0YXJ0KG51bGwpO1xuX19iID0gbmV3IFdlYWtNYXAoKTtcbl9fYSA9IG5ldyBXZWFrTWFwKCk7XG5fX2RlY29yYXRlRWxlbWVudChfaW5pdDMsIDQsIF9iLCBfZGVjMiwgU2Nyb2xsTG9jaywgX19iKTtcbl9fZGVjb3JhdGVFbGVtZW50KF9pbml0MywgNCwgX2EzLCBfZGVjLCBTY3JvbGxMb2NrLCBfX2EpO1xuX19kZWNvcmF0b3JNZXRhZGF0YShfaW5pdDMsIFNjcm9sbExvY2spO1xuXG4vLyBzcmMvY29yZS9wbHVnaW5zL3Njcm9sbGluZy9TY3JvbGxJbnRlbnQudHNcbnZhciBESVJFQ1RJT05TID0gW1Njcm9sbERpcmVjdGlvbi5Gb3J3YXJkLCBTY3JvbGxEaXJlY3Rpb24uUmV2ZXJzZV07XG52YXIgU2Nyb2xsSW50ZW50ID0gY2xhc3Mge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnggPSBuZXcgU2Nyb2xsTG9jaygpO1xuICAgIHRoaXMueSA9IG5ldyBTY3JvbGxMb2NrKCk7XG4gIH1cbiAgaXNMb2NrZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMueC5pc0xvY2tlZCgpICYmIHRoaXMueS5pc0xvY2tlZCgpO1xuICB9XG59O1xudmFyIFNjcm9sbEludGVudFRyYWNrZXIgPSBjbGFzcyBleHRlbmRzIFBsdWdpbiB7XG4gIGNvbnN0cnVjdG9yKG1hbmFnZXIpIHtcbiAgICBzdXBlcihtYW5hZ2VyKTtcbiAgICBjb25zdCBzY3JvbGxJbnRlbnQgPSBzaWduYWwobmV3IFNjcm9sbEludGVudCgpKTtcbiAgICBsZXQgcHJldmlvdXNEZWx0YSA9IG51bGw7XG4gICAgdGhpcy5zaWduYWwgPSBzY3JvbGxJbnRlbnQ7XG4gICAgZWZmZWN0KCgpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RhdHVzIH0gPSBtYW5hZ2VyLmRyYWdPcGVyYXRpb247XG4gICAgICBpZiAoIXN0YXR1cy5pbml0aWFsaXplZCkge1xuICAgICAgICBwcmV2aW91c0RlbHRhID0gbnVsbDtcbiAgICAgICAgc2Nyb2xsSW50ZW50LnZhbHVlID0gbmV3IFNjcm9sbEludGVudCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCB7IGRlbHRhIH0gPSBtYW5hZ2VyLmRyYWdPcGVyYXRpb24ucG9zaXRpb247XG4gICAgICBpZiAocHJldmlvdXNEZWx0YSkge1xuICAgICAgICBjb25zdCBkaXJlY3Rpb25zID0ge1xuICAgICAgICAgIHg6IGdldERpcmVjdGlvbihkZWx0YS54LCBwcmV2aW91c0RlbHRhLngpLFxuICAgICAgICAgIHk6IGdldERpcmVjdGlvbihkZWx0YS55LCBwcmV2aW91c0RlbHRhLnkpXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGludGVudCA9IHNjcm9sbEludGVudC5wZWVrKCk7XG4gICAgICAgIGJhdGNoKCgpID0+IHtcbiAgICAgICAgICBmb3IgKGNvbnN0IGF4aXMgb2YgQXhlcykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBkaXJlY3Rpb24gb2YgRElSRUNUSU9OUykge1xuICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uc1theGlzXSA9PT0gZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgaW50ZW50W2F4aXNdLnVubG9jayhkaXJlY3Rpb24pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHNjcm9sbEludGVudC52YWx1ZSA9IGludGVudDtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBwcmV2aW91c0RlbHRhID0gZGVsdGE7XG4gICAgfSk7XG4gIH1cbiAgZ2V0IGN1cnJlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmFsLnBlZWsoKTtcbiAgfVxufTtcbmZ1bmN0aW9uIGdldERpcmVjdGlvbihhLCBiKSB7XG4gIHJldHVybiBNYXRoLnNpZ24oYSAtIGIpO1xufVxuXG4vLyBzcmMvY29yZS9wbHVnaW5zL3Njcm9sbGluZy9TY3JvbGxlci50c1xudmFyIF9hdXRvU2Nyb2xsaW5nX2RlYywgX2E0LCBfaW5pdDQsIF9hdXRvU2Nyb2xsaW5nLCBfbWV0YSwgX3Njcm9sbDtcbnZhciBTY3JvbGxlciA9IGNsYXNzIGV4dGVuZHMgKF9hNCA9IENvcmVQbHVnaW4sIF9hdXRvU2Nyb2xsaW5nX2RlYyA9IFtyZWFjdGl2ZV0sIF9hNCkge1xuICBjb25zdHJ1Y3RvcihtYW5hZ2VyKSB7XG4gICAgc3VwZXIobWFuYWdlcik7XG4gICAgX19wcml2YXRlQWRkKHRoaXMsIF9hdXRvU2Nyb2xsaW5nLCBfX3J1bkluaXRpYWxpemVycyhfaW5pdDQsIDgsIHRoaXMsIGZhbHNlKSksIF9fcnVuSW5pdGlhbGl6ZXJzKF9pbml0NCwgMTEsIHRoaXMpO1xuICAgIF9fcHJpdmF0ZUFkZCh0aGlzLCBfbWV0YSk7XG4gICAgX19wcml2YXRlQWRkKHRoaXMsIF9zY3JvbGwsICgpID0+IHtcbiAgICAgIGlmICghX19wcml2YXRlR2V0KHRoaXMsIF9tZXRhKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCB7IGVsZW1lbnQsIGJ5IH0gPSBfX3ByaXZhdGVHZXQodGhpcywgX21ldGEpO1xuICAgICAgaWYgKGJ5LnkpIGVsZW1lbnQuc2Nyb2xsVG9wICs9IGJ5Lnk7XG4gICAgICBpZiAoYnkueCkgZWxlbWVudC5zY3JvbGxMZWZ0ICs9IGJ5Lng7XG4gICAgfSk7XG4gICAgdGhpcy5zY3JvbGwgPSAob3B0aW9ucywgc2Nyb2xsT3B0aW9ucykgPT4ge1xuICAgICAgdmFyIF9hNTtcbiAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGVsZW1lbnRzID0gdGhpcy5nZXRTY3JvbGxhYmxlRWxlbWVudHMoKTtcbiAgICAgIGlmICghZWxlbWVudHMpIHtcbiAgICAgICAgX19wcml2YXRlU2V0KHRoaXMsIF9tZXRhLCB2b2lkIDApO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBjb25zdCB7IHBvc2l0aW9uIH0gPSB0aGlzLm1hbmFnZXIuZHJhZ09wZXJhdGlvbjtcbiAgICAgIGNvbnN0IGN1cnJlbnRQb3NpdGlvbiA9IHBvc2l0aW9uID09IG51bGwgPyB2b2lkIDAgOiBwb3NpdGlvbi5jdXJyZW50O1xuICAgICAgaWYgKGN1cnJlbnRQb3NpdGlvbikge1xuICAgICAgICBjb25zdCB7IGJ5IH0gPSBvcHRpb25zICE9IG51bGwgPyBvcHRpb25zIDoge307XG4gICAgICAgIGNvbnN0IGludGVudCA9IGJ5ID8ge1xuICAgICAgICAgIHg6IGdldFNjcm9sbEludGVudChieS54KSxcbiAgICAgICAgICB5OiBnZXRTY3JvbGxJbnRlbnQoYnkueSlcbiAgICAgICAgfSA6IHZvaWQgMDtcbiAgICAgICAgY29uc3Qgc2Nyb2xsSW50ZW50ID0gaW50ZW50ID8gdm9pZCAwIDogdGhpcy5zY3JvbGxJbnRlbnRUcmFja2VyLmN1cnJlbnQ7XG4gICAgICAgIGlmIChzY3JvbGxJbnRlbnQgPT0gbnVsbCA/IHZvaWQgMCA6IHNjcm9sbEludGVudC5pc0xvY2tlZCgpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3Qgc2Nyb2xsYWJsZUVsZW1lbnQgb2YgZWxlbWVudHMpIHtcbiAgICAgICAgICBjb25zdCBlbGVtZW50Q2FuU2Nyb2xsID0gY2FuU2Nyb2xsKHNjcm9sbGFibGVFbGVtZW50LCBieSk7XG4gICAgICAgICAgaWYgKGVsZW1lbnRDYW5TY3JvbGwueCB8fCBlbGVtZW50Q2FuU2Nyb2xsLnkpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgc3BlZWQsIGRpcmVjdGlvbiB9ID0gZGV0ZWN0U2Nyb2xsSW50ZW50KFxuICAgICAgICAgICAgICBzY3JvbGxhYmxlRWxlbWVudCxcbiAgICAgICAgICAgICAgY3VycmVudFBvc2l0aW9uLFxuICAgICAgICAgICAgICBpbnRlbnQsXG4gICAgICAgICAgICAgIHNjcm9sbE9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IHNjcm9sbE9wdGlvbnMuYWNjZWxlcmF0aW9uLFxuICAgICAgICAgICAgICBzY3JvbGxPcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBzY3JvbGxPcHRpb25zLnRocmVzaG9sZFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChzY3JvbGxJbnRlbnQpIHtcbiAgICAgICAgICAgICAgZm9yIChjb25zdCBheGlzIG9mIEF4ZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsSW50ZW50W2F4aXNdLmlzTG9ja2VkKGRpcmVjdGlvbltheGlzXSkpIHtcbiAgICAgICAgICAgICAgICAgIHNwZWVkW2F4aXNdID0gMDtcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbltheGlzXSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uLnggfHwgZGlyZWN0aW9uLnkpIHtcbiAgICAgICAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBieSAhPSBudWxsID8gYnkgOiBkaXJlY3Rpb247XG4gICAgICAgICAgICAgIGNvbnN0IHNjcm9sbExlZnRCeSA9IHggKiBzcGVlZC54O1xuICAgICAgICAgICAgICBjb25zdCBzY3JvbGxUb3BCeSA9IHkgKiBzcGVlZC55O1xuICAgICAgICAgICAgICBpZiAoc2Nyb2xsTGVmdEJ5IHx8IHNjcm9sbFRvcEJ5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJldmlvdXNTY3JvbGxCeSA9IChfYTUgPSBfX3ByaXZhdGVHZXQodGhpcywgX21ldGEpKSA9PSBudWxsID8gdm9pZCAwIDogX2E1LmJ5O1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmF1dG9TY3JvbGxpbmcgJiYgcHJldmlvdXNTY3JvbGxCeSkge1xuICAgICAgICAgICAgICAgICAgY29uc3Qgc2Nyb2xsSW50ZW50TWlzbWF0Y2ggPSBwcmV2aW91c1Njcm9sbEJ5LnggJiYgIXNjcm9sbExlZnRCeSB8fCBwcmV2aW91c1Njcm9sbEJ5LnkgJiYgIXNjcm9sbFRvcEJ5O1xuICAgICAgICAgICAgICAgICAgaWYgKHNjcm9sbEludGVudE1pc21hdGNoKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX19wcml2YXRlU2V0KHRoaXMsIF9tZXRhLCB7XG4gICAgICAgICAgICAgICAgICBlbGVtZW50OiBzY3JvbGxhYmxlRWxlbWVudCxcbiAgICAgICAgICAgICAgICAgIGJ5OiB7XG4gICAgICAgICAgICAgICAgICAgIHg6IHNjcm9sbExlZnRCeSxcbiAgICAgICAgICAgICAgICAgICAgeTogc2Nyb2xsVG9wQnlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzY2hlZHVsZXIuc2NoZWR1bGUoX19wcml2YXRlR2V0KHRoaXMsIF9zY3JvbGwpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgX19wcml2YXRlU2V0KHRoaXMsIF9tZXRhLCB2b2lkIDApO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgbGV0IHByZXZpb3VzRWxlbWVudEZyb21Qb2ludCA9IG51bGw7XG4gICAgbGV0IHByZXZpb3VzU2Nyb2xsYWJsZUVsZW1lbnRzID0gbnVsbDtcbiAgICBjb25zdCBlbGVtZW50RnJvbVBvaW50ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgeyBwb3NpdGlvbiwgc291cmNlIH0gPSBtYW5hZ2VyLmRyYWdPcGVyYXRpb247XG4gICAgICBpZiAoIXBvc2l0aW9uKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgY29uc3QgZWxlbWVudCA9IGdldEVsZW1lbnRGcm9tUG9pbnQoXG4gICAgICAgIGdldFJvb3Qoc291cmNlID09IG51bGwgPyB2b2lkIDAgOiBzb3VyY2UuZWxlbWVudCksXG4gICAgICAgIHBvc2l0aW9uLmN1cnJlbnRcbiAgICAgICk7XG4gICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICBwcmV2aW91c0VsZW1lbnRGcm9tUG9pbnQgPSBlbGVtZW50O1xuICAgICAgfVxuICAgICAgcmV0dXJuIGVsZW1lbnQgIT0gbnVsbCA/IGVsZW1lbnQgOiBwcmV2aW91c0VsZW1lbnRGcm9tUG9pbnQ7XG4gICAgfSk7XG4gICAgY29uc3Qgc2Nyb2xsYWJsZUVsZW1lbnRzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRGcm9tUG9pbnQudmFsdWU7XG4gICAgICBjb25zdCB7IGRvY3VtZW50RWxlbWVudCB9ID0gZ2V0RG9jdW1lbnQoZWxlbWVudCk7XG4gICAgICBpZiAoIWVsZW1lbnQgfHwgZWxlbWVudCA9PT0gZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBtYW5hZ2VyLmRyYWdPcGVyYXRpb247XG4gICAgICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSB0YXJnZXQgPT0gbnVsbCA/IHZvaWQgMCA6IHRhcmdldC5lbGVtZW50O1xuICAgICAgICBpZiAodGFyZ2V0RWxlbWVudCkge1xuICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZ2V0U2Nyb2xsYWJsZUFuY2VzdG9ycyh0YXJnZXRFbGVtZW50LCB7XG4gICAgICAgICAgICBleGNsdWRlRWxlbWVudDogZmFsc2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBwcmV2aW91c1Njcm9sbGFibGVFbGVtZW50cyA9IGVsZW1lbnRzO1xuICAgICAgICAgIHJldHVybiBlbGVtZW50cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBnZXRTY3JvbGxhYmxlQW5jZXN0b3JzKGVsZW1lbnQsIHtcbiAgICAgICAgICBleGNsdWRlRWxlbWVudDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0aGlzLmF1dG9TY3JvbGxpbmcgJiYgcHJldmlvdXNTY3JvbGxhYmxlRWxlbWVudHMgJiYgZWxlbWVudHMuc2l6ZSA8IChwcmV2aW91c1Njcm9sbGFibGVFbGVtZW50cyA9PSBudWxsID8gdm9pZCAwIDogcHJldmlvdXNTY3JvbGxhYmxlRWxlbWVudHMuc2l6ZSkpIHtcbiAgICAgICAgICByZXR1cm4gcHJldmlvdXNTY3JvbGxhYmxlRWxlbWVudHM7XG4gICAgICAgIH1cbiAgICAgICAgcHJldmlvdXNTY3JvbGxhYmxlRWxlbWVudHMgPSBlbGVtZW50cztcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRzO1xuICAgICAgfVxuICAgICAgcHJldmlvdXNTY3JvbGxhYmxlRWxlbWVudHMgPSBudWxsO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSwgZGVlcEVxdWFsKTtcbiAgICB0aGlzLmdldFNjcm9sbGFibGVFbGVtZW50cyA9ICgpID0+IHtcbiAgICAgIHJldHVybiBzY3JvbGxhYmxlRWxlbWVudHMudmFsdWU7XG4gICAgfTtcbiAgICB0aGlzLnNjcm9sbEludGVudFRyYWNrZXIgPSBuZXcgU2Nyb2xsSW50ZW50VHJhY2tlcihtYW5hZ2VyKTtcbiAgICB0aGlzLmRlc3Ryb3kgPSBtYW5hZ2VyLm1vbml0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdtb3ZlXCIsIChldmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgZXZlbnQuZGVmYXVsdFByZXZlbnRlZCB8fCAhaXNLZXlib2FyZEV2ZW50KG1hbmFnZXIuZHJhZ09wZXJhdGlvbi5hY3RpdmF0b3JFdmVudCkgfHwgIWV2ZW50LmJ5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnNjcm9sbCh7IGJ5OiBldmVudC5ieSB9KSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuX2luaXQ0ID0gX19kZWNvcmF0b3JTdGFydChfYTQpO1xuX2F1dG9TY3JvbGxpbmcgPSBuZXcgV2Vha01hcCgpO1xuX21ldGEgPSBuZXcgV2Vha01hcCgpO1xuX3Njcm9sbCA9IG5ldyBXZWFrTWFwKCk7XG5fX2RlY29yYXRlRWxlbWVudChfaW5pdDQsIDQsIFwiYXV0b1Njcm9sbGluZ1wiLCBfYXV0b1Njcm9sbGluZ19kZWMsIFNjcm9sbGVyLCBfYXV0b1Njcm9sbGluZyk7XG5fX2RlY29yYXRvck1ldGFkYXRhKF9pbml0NCwgU2Nyb2xsZXIpO1xuZnVuY3Rpb24gZ2V0U2Nyb2xsSW50ZW50KHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA+IDApIHtcbiAgICByZXR1cm4gU2Nyb2xsRGlyZWN0aW9uLkZvcndhcmQ7XG4gIH1cbiAgaWYgKHZhbHVlIDwgMCkge1xuICAgIHJldHVybiBTY3JvbGxEaXJlY3Rpb24uUmV2ZXJzZTtcbiAgfVxuICByZXR1cm4gU2Nyb2xsRGlyZWN0aW9uLklkbGU7XG59XG5cbi8vIHNyYy91dGlsaXRpZXMvc2NoZWR1bGluZy9zY2hlZHVsZXIudHNcbnZhciBTY2hlZHVsZXIgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHNjaGVkdWxlcjUpIHtcbiAgICB0aGlzLnNjaGVkdWxlciA9IHNjaGVkdWxlcjU7XG4gICAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XG4gICAgdGhpcy50YXNrcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG4gICAgdGhpcy5yZXNvbHZlcnMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuICAgIHRoaXMuZmx1c2ggPSAoKSA9PiB7XG4gICAgICBjb25zdCB7IHRhc2tzLCByZXNvbHZlcnMgfSA9IHRoaXM7XG4gICAgICB0aGlzLnBlbmRpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMudGFza3MgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuICAgICAgdGhpcy5yZXNvbHZlcnMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuICAgICAgZm9yIChjb25zdCB0YXNrIG9mIHRhc2tzKSB7XG4gICAgICAgIHRhc2soKTtcbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3QgcmVzb2x2ZSBvZiByZXNvbHZlcnMpIHtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbiAgc2NoZWR1bGUodGFzaykge1xuICAgIHRoaXMudGFza3MuYWRkKHRhc2spO1xuICAgIGlmICghdGhpcy5wZW5kaW5nKSB7XG4gICAgICB0aGlzLnBlbmRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5zY2hlZHVsZXIodGhpcy5mbHVzaCk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gdGhpcy5yZXNvbHZlcnMuYWRkKHJlc29sdmUpKTtcbiAgfVxufTtcbnZhciBzY2hlZHVsZXIzID0gbmV3IFNjaGVkdWxlcigoY2FsbGJhY2spID0+IHtcbiAgaWYgKHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShjYWxsYmFjayk7XG4gIH0gZWxzZSB7XG4gICAgY2FsbGJhY2soKTtcbiAgfVxufSk7XG5cbi8vIHNyYy9jb3JlL3BsdWdpbnMvc2Nyb2xsaW5nL0F1dG9TY3JvbGxlci50c1xudmFyIEFVVE9TQ1JPTExfSU5URVJWQUwgPSAxMDtcbnZhciBfQXV0b1Njcm9sbGVyID0gY2xhc3MgX0F1dG9TY3JvbGxlciBleHRlbmRzIFBsdWdpbiB7XG4gIGNvbnN0cnVjdG9yKG1hbmFnZXIsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihtYW5hZ2VyLCBvcHRpb25zKTtcbiAgICBjb25zdCBzY3JvbGxlciA9IG1hbmFnZXIucmVnaXN0cnkucGx1Z2lucy5nZXQoU2Nyb2xsZXIpO1xuICAgIGlmICghc2Nyb2xsZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkF1dG9TY3JvbGxlciBwbHVnaW4gZGVwZW5kcyBvbiBTY3JvbGxlciBwbHVnaW5cIik7XG4gICAgfVxuICAgIHRoaXMuZGVzdHJveSA9IGVmZmVjdCgoKSA9PiB7XG4gICAgICB2YXIgX2E1LCBfYjIsIF9jMztcbiAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHsgcG9zaXRpb246IF8sIHN0YXR1cyB9ID0gbWFuYWdlci5kcmFnT3BlcmF0aW9uO1xuICAgICAgaWYgKHN0YXR1cy5kcmFnZ2luZykge1xuICAgICAgICBjb25zdCBzY3JvbGxPcHRpb25zID0ge1xuICAgICAgICAgIGFjY2VsZXJhdGlvbjogKF9hNSA9IHRoaXMub3B0aW9ucykgPT0gbnVsbCA/IHZvaWQgMCA6IF9hNS5hY2NlbGVyYXRpb24sXG4gICAgICAgICAgdGhyZXNob2xkOiB0eXBlb2YgKChfYjIgPSB0aGlzLm9wdGlvbnMpID09IG51bGwgPyB2b2lkIDAgOiBfYjIudGhyZXNob2xkKSA9PT0gXCJudW1iZXJcIiA/IHsgeDogdGhpcy5vcHRpb25zLnRocmVzaG9sZCwgeTogdGhpcy5vcHRpb25zLnRocmVzaG9sZCB9IDogKF9jMyA9IHRoaXMub3B0aW9ucykgPT0gbnVsbCA/IHZvaWQgMCA6IF9jMy50aHJlc2hvbGRcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY2FuU2Nyb2xsMiA9IHNjcm9sbGVyLnNjcm9sbCh2b2lkIDAsIHNjcm9sbE9wdGlvbnMpO1xuICAgICAgICBpZiAoY2FuU2Nyb2xsMikge1xuICAgICAgICAgIHNjcm9sbGVyLmF1dG9TY3JvbGxpbmcgPSB0cnVlO1xuICAgICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoXG4gICAgICAgICAgICAoKSA9PiBzY2hlZHVsZXIzLnNjaGVkdWxlKFxuICAgICAgICAgICAgICAoKSA9PiBzY3JvbGxlci5zY3JvbGwodm9pZCAwLCBzY3JvbGxPcHRpb25zKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIEFVVE9TQ1JPTExfSU5URVJWQUxcbiAgICAgICAgICApO1xuICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNjcm9sbGVyLmF1dG9TY3JvbGxpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuX0F1dG9TY3JvbGxlci5jb25maWd1cmUgPSBjb25maWd1cmF0b3IoX0F1dG9TY3JvbGxlcik7XG52YXIgQXV0b1Njcm9sbGVyID0gX0F1dG9TY3JvbGxlcjtcbnZhciBsaXN0ZW5lck9wdGlvbnMgPSB7XG4gIGNhcHR1cmU6IHRydWUsXG4gIHBhc3NpdmU6IHRydWVcbn07XG52YXIgX3RpbWVvdXQ7XG52YXIgU2Nyb2xsTGlzdGVuZXIgPSBjbGFzcyBleHRlbmRzIENvcmVQbHVnaW4ge1xuICBjb25zdHJ1Y3RvcihtYW5hZ2VyKSB7XG4gICAgc3VwZXIobWFuYWdlcik7XG4gICAgX19wcml2YXRlQWRkKHRoaXMsIF90aW1lb3V0KTtcbiAgICB0aGlzLmhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICAgIGlmIChfX3ByaXZhdGVHZXQodGhpcywgX3RpbWVvdXQpID09IG51bGwpIHtcbiAgICAgICAgX19wcml2YXRlU2V0KHRoaXMsIF90aW1lb3V0LCBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLm1hbmFnZXIuY29sbGlzaW9uT2JzZXJ2ZXIuZm9yY2VVcGRhdGUoZmFsc2UpO1xuICAgICAgICAgIF9fcHJpdmF0ZVNldCh0aGlzLCBfdGltZW91dCwgdm9pZCAwKTtcbiAgICAgICAgfSwgNTApKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IHsgZHJhZ09wZXJhdGlvbiB9ID0gdGhpcy5tYW5hZ2VyO1xuICAgIHRoaXMuZGVzdHJveSA9IGVmZmVjdCgoKSA9PiB7XG4gICAgICB2YXIgX2E1LCBfYjIsIF9jMztcbiAgICAgIGNvbnN0IGVuYWJsZWQgPSBkcmFnT3BlcmF0aW9uLnN0YXR1cy5kcmFnZ2luZztcbiAgICAgIGlmIChlbmFibGVkKSB7XG4gICAgICAgIGNvbnN0IHJvb3QgPSAoX2MzID0gKF9iMiA9IChfYTUgPSBkcmFnT3BlcmF0aW9uLnNvdXJjZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hNS5lbGVtZW50KSA9PSBudWxsID8gdm9pZCAwIDogX2IyLm93bmVyRG9jdW1lbnQpICE9IG51bGwgPyBfYzMgOiBkb2N1bWVudDtcbiAgICAgICAgcm9vdC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMuaGFuZGxlU2Nyb2xsLCBsaXN0ZW5lck9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgIHJvb3QucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIFwic2Nyb2xsXCIsXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVNjcm9sbCxcbiAgICAgICAgICAgIGxpc3RlbmVyT3B0aW9uc1xuICAgICAgICAgICk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5fdGltZW91dCA9IG5ldyBXZWFrTWFwKCk7XG52YXIgQ1NTX1JVTEVTMiA9IFwiKiB7IHVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7IC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDsgfVwiO1xudmFyIFByZXZlbnRTZWxlY3Rpb24gPSBjbGFzcyBleHRlbmRzIFBsdWdpbiB7XG4gIGNvbnN0cnVjdG9yKG1hbmFnZXIpIHtcbiAgICBzdXBlcihtYW5hZ2VyKTtcbiAgICB0aGlzLm1hbmFnZXIgPSBtYW5hZ2VyO1xuICAgIGNvbnN0IHN0eWxlSW5qZWN0b3IgPSBtYW5hZ2VyLnJlZ2lzdHJ5LnBsdWdpbnMuZ2V0KFxuICAgICAgU3R5bGVJbmplY3RvclxuICAgICk7XG4gICAgY29uc3QgdW5yZWdpc3RlclN0eWxlcyA9IHN0eWxlSW5qZWN0b3IgPT0gbnVsbCA/IHZvaWQgMCA6IHN0eWxlSW5qZWN0b3IucmVnaXN0ZXIoQ1NTX1JVTEVTMik7XG4gICAgdGhpcy5kZXN0cm95ID0gZWZmZWN0KCgpID0+IHtcbiAgICAgIGNvbnN0IHsgZHJhZ09wZXJhdGlvbiB9ID0gdGhpcy5tYW5hZ2VyO1xuICAgICAgaWYgKGRyYWdPcGVyYXRpb24uc3RhdHVzLmluaXRpYWxpemVkKSB7XG4gICAgICAgIHJlbW92ZVNlbGVjdGlvbigpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2VsZWN0aW9uY2hhbmdlXCIsIHJlbW92ZVNlbGVjdGlvbiwge1xuICAgICAgICAgIGNhcHR1cmU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNlbGVjdGlvbmNoYW5nZVwiLCByZW1vdmVTZWxlY3Rpb24sIHtcbiAgICAgICAgICAgIGNhcHR1cmU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAodW5yZWdpc3RlclN0eWxlcykge1xuICAgICAgY29uc3Qgb3JpZ2luYWxEZXN0cm95ID0gdGhpcy5kZXN0cm95LmJpbmQodGhpcyk7XG4gICAgICB0aGlzLmRlc3Ryb3kgPSAoKSA9PiB7XG4gICAgICAgIHVucmVnaXN0ZXJTdHlsZXMoKTtcbiAgICAgICAgb3JpZ2luYWxEZXN0cm95KCk7XG4gICAgICB9O1xuICAgIH1cbiAgfVxufTtcbmZ1bmN0aW9uIHJlbW92ZVNlbGVjdGlvbigpIHtcbiAgdmFyIF9hNTtcbiAgKF9hNSA9IGRvY3VtZW50LmdldFNlbGVjdGlvbigpKSA9PSBudWxsID8gdm9pZCAwIDogX2E1LnJlbW92ZUFsbFJhbmdlcygpO1xufVxudmFyIGRlZmF1bHRzID0gT2JqZWN0LmZyZWV6ZSh7XG4gIG9mZnNldDogMTAsXG4gIGtleWJvYXJkQ29kZXM6IHtcbiAgICBzdGFydDogW1wiU3BhY2VcIiwgXCJFbnRlclwiXSxcbiAgICBjYW5jZWw6IFtcIkVzY2FwZVwiXSxcbiAgICBlbmQ6IFtcIlNwYWNlXCIsIFwiRW50ZXJcIiwgXCJUYWJcIl0sXG4gICAgdXA6IFtcIkFycm93VXBcIl0sXG4gICAgZG93bjogW1wiQXJyb3dEb3duXCJdLFxuICAgIGxlZnQ6IFtcIkFycm93TGVmdFwiXSxcbiAgICByaWdodDogW1wiQXJyb3dSaWdodFwiXVxuICB9LFxuICBwcmV2ZW50QWN0aXZhdGlvbihldmVudCwgc291cmNlKSB7XG4gICAgdmFyIF9hNTtcbiAgICBjb25zdCB0YXJnZXQgPSAoX2E1ID0gc291cmNlLmhhbmRsZSkgIT0gbnVsbCA/IF9hNSA6IHNvdXJjZS5lbGVtZW50O1xuICAgIHJldHVybiBldmVudC50YXJnZXQgIT09IHRhcmdldDtcbiAgfVxufSk7XG52YXIgX2NsZWFudXBGdW5jdGlvbnM7XG52YXIgX0tleWJvYXJkU2Vuc29yID0gY2xhc3MgX0tleWJvYXJkU2Vuc29yIGV4dGVuZHMgU2Vuc29yIHtcbiAgY29uc3RydWN0b3IobWFuYWdlciwgb3B0aW9ucykge1xuICAgIHN1cGVyKG1hbmFnZXIpO1xuICAgIHRoaXMubWFuYWdlciA9IG1hbmFnZXI7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICBfX3ByaXZhdGVBZGQodGhpcywgX2NsZWFudXBGdW5jdGlvbnMsIFtdKTtcbiAgICB0aGlzLmxpc3RlbmVycyA9IG5ldyBMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLmhhbmRsZVNvdXJjZUtleURvd24gPSAoZXZlbnQsIHNvdXJjZSwgb3B0aW9ucykgPT4ge1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoIWlzRWxlbWVudChldmVudC50YXJnZXQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChzb3VyY2UuZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qge1xuICAgICAgICBrZXlib2FyZENvZGVzID0gZGVmYXVsdHMua2V5Ym9hcmRDb2RlcyxcbiAgICAgICAgcHJldmVudEFjdGl2YXRpb24gPSBkZWZhdWx0cy5wcmV2ZW50QWN0aXZhdGlvblxuICAgICAgfSA9IG9wdGlvbnMgIT0gbnVsbCA/IG9wdGlvbnMgOiB7fTtcbiAgICAgIGlmICgha2V5Ym9hcmRDb2Rlcy5zdGFydC5pbmNsdWRlcyhldmVudC5jb2RlKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMubWFuYWdlci5kcmFnT3BlcmF0aW9uLnN0YXR1cy5pZGxlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChwcmV2ZW50QWN0aXZhdGlvbiA9PSBudWxsID8gdm9pZCAwIDogcHJldmVudEFjdGl2YXRpb24oZXZlbnQsIHNvdXJjZSkpIHJldHVybjtcbiAgICAgIHRoaXMuaGFuZGxlU3RhcnQoZXZlbnQsIHNvdXJjZSwgb3B0aW9ucyk7XG4gICAgfTtcbiAgfVxuICBiaW5kKHNvdXJjZSwgb3B0aW9ucyA9IHRoaXMub3B0aW9ucykge1xuICAgIGNvbnN0IHVuYmluZCA9IGVmZmVjdCgoKSA9PiB7XG4gICAgICB2YXIgX2E1O1xuICAgICAgY29uc3QgdGFyZ2V0ID0gKF9hNSA9IHNvdXJjZS5oYW5kbGUpICE9IG51bGwgPyBfYTUgOiBzb3VyY2UuZWxlbWVudDtcbiAgICAgIGNvbnN0IGxpc3RlbmVyID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChpc0tleWJvYXJkRXZlbnQoZXZlbnQpKSB7XG4gICAgICAgICAgdGhpcy5oYW5kbGVTb3VyY2VLZXlEb3duKGV2ZW50LCBzb3VyY2UsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgbGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBsaXN0ZW5lcik7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHVuYmluZDtcbiAgfVxuICBoYW5kbGVTdGFydChldmVudCwgc291cmNlLCBvcHRpb25zKSB7XG4gICAgY29uc3QgeyBlbGVtZW50IH0gPSBzb3VyY2U7XG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTb3VyY2UgZHJhZ2dhYmxlIGRvZXMgbm90IGhhdmUgYW4gYXNzb2NpYXRlZCBlbGVtZW50XCIpO1xuICAgIH1cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIHNjcm9sbEludG9WaWV3SWZOZWVkZWQoZWxlbWVudCk7XG4gICAgY29uc3QgeyBjZW50ZXIgfSA9IG5ldyBET01SZWN0YW5nbGUoZWxlbWVudCk7XG4gICAgY29uc3QgY29udHJvbGxlciA9IHRoaXMubWFuYWdlci5hY3Rpb25zLnN0YXJ0KHtcbiAgICAgIGV2ZW50LFxuICAgICAgY29vcmRpbmF0ZXM6IHtcbiAgICAgICAgeDogY2VudGVyLngsXG4gICAgICAgIHk6IGNlbnRlci55XG4gICAgICB9LFxuICAgICAgc291cmNlXG4gICAgfSk7XG4gICAgaWYgKGNvbnRyb2xsZXIuc2lnbmFsLmFib3J0ZWQpIHJldHVybiB0aGlzLmNsZWFudXAoKTtcbiAgICB0aGlzLnNpZGVFZmZlY3RzKCk7XG4gICAgY29uc3Qgc291cmNlRG9jdW1lbnQgPSBnZXREb2N1bWVudChlbGVtZW50KTtcbiAgICBjb25zdCBsaXN0ZW5lcnMgPSBbXG4gICAgICB0aGlzLmxpc3RlbmVycy5iaW5kKHNvdXJjZURvY3VtZW50LCBbXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiBcImtleWRvd25cIixcbiAgICAgICAgICBsaXN0ZW5lcjogKGV2ZW50MikgPT4gdGhpcy5oYW5kbGVLZXlEb3duKGV2ZW50Miwgc291cmNlLCBvcHRpb25zKSxcbiAgICAgICAgICBvcHRpb25zOiB7IGNhcHR1cmU6IHRydWUgfVxuICAgICAgICB9XG4gICAgICBdKVxuICAgIF07XG4gICAgX19wcml2YXRlR2V0KHRoaXMsIF9jbGVhbnVwRnVuY3Rpb25zKS5wdXNoKC4uLmxpc3RlbmVycyk7XG4gIH1cbiAgaGFuZGxlS2V5RG93bihldmVudCwgX3NvdXJjZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IHsga2V5Ym9hcmRDb2RlcyA9IGRlZmF1bHRzLmtleWJvYXJkQ29kZXMgfSA9IG9wdGlvbnMgIT0gbnVsbCA/IG9wdGlvbnMgOiB7fTtcbiAgICBpZiAoaXNLZXljb2RlKGV2ZW50LCBbLi4ua2V5Ym9hcmRDb2Rlcy5lbmQsIC4uLmtleWJvYXJkQ29kZXMuY2FuY2VsXSkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBjYW5jZWxlZCA9IGlzS2V5Y29kZShldmVudCwga2V5Ym9hcmRDb2Rlcy5jYW5jZWwpO1xuICAgICAgdGhpcy5oYW5kbGVFbmQoZXZlbnQsIGNhbmNlbGVkKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGlzS2V5Y29kZShldmVudCwga2V5Ym9hcmRDb2Rlcy51cCkpIHtcbiAgICAgIHRoaXMuaGFuZGxlTW92ZShcInVwXCIsIGV2ZW50KTtcbiAgICB9IGVsc2UgaWYgKGlzS2V5Y29kZShldmVudCwga2V5Ym9hcmRDb2Rlcy5kb3duKSkge1xuICAgICAgdGhpcy5oYW5kbGVNb3ZlKFwiZG93blwiLCBldmVudCk7XG4gICAgfVxuICAgIGlmIChpc0tleWNvZGUoZXZlbnQsIGtleWJvYXJkQ29kZXMubGVmdCkpIHtcbiAgICAgIHRoaXMuaGFuZGxlTW92ZShcImxlZnRcIiwgZXZlbnQpO1xuICAgIH0gZWxzZSBpZiAoaXNLZXljb2RlKGV2ZW50LCBrZXlib2FyZENvZGVzLnJpZ2h0KSkge1xuICAgICAgdGhpcy5oYW5kbGVNb3ZlKFwicmlnaHRcIiwgZXZlbnQpO1xuICAgIH1cbiAgfVxuICBoYW5kbGVFbmQoZXZlbnQsIGNhbmNlbGVkKSB7XG4gICAgdGhpcy5tYW5hZ2VyLmFjdGlvbnMuc3RvcCh7XG4gICAgICBldmVudCxcbiAgICAgIGNhbmNlbGVkXG4gICAgfSk7XG4gICAgdGhpcy5jbGVhbnVwKCk7XG4gIH1cbiAgaGFuZGxlTW92ZShkaXJlY3Rpb24sIGV2ZW50KSB7XG4gICAgdmFyIF9hNSwgX2IyO1xuICAgIGNvbnN0IHsgc2hhcGUgfSA9IHRoaXMubWFuYWdlci5kcmFnT3BlcmF0aW9uO1xuICAgIGNvbnN0IGZhY3RvciA9IGV2ZW50LnNoaWZ0S2V5ID8gNSA6IDE7XG4gICAgbGV0IGJ5ID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9O1xuICAgIGxldCBvZmZzZXQgPSAoX2IyID0gKF9hNSA9IHRoaXMub3B0aW9ucykgPT0gbnVsbCA/IHZvaWQgMCA6IF9hNS5vZmZzZXQpICE9IG51bGwgPyBfYjIgOiBkZWZhdWx0cy5vZmZzZXQ7XG4gICAgaWYgKHR5cGVvZiBvZmZzZXQgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgIG9mZnNldCA9IHsgeDogb2Zmc2V0LCB5OiBvZmZzZXQgfTtcbiAgICB9XG4gICAgaWYgKCFzaGFwZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgY2FzZSBcInVwXCI6XG4gICAgICAgIGJ5ID0geyB4OiAwLCB5OiAtb2Zmc2V0LnkgKiBmYWN0b3IgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiZG93blwiOlxuICAgICAgICBieSA9IHsgeDogMCwgeTogb2Zmc2V0LnkgKiBmYWN0b3IgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwibGVmdFwiOlxuICAgICAgICBieSA9IHsgeDogLW9mZnNldC54ICogZmFjdG9yLCB5OiAwIH07XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICAgIGJ5ID0geyB4OiBvZmZzZXQueCAqIGZhY3RvciwgeTogMCB9O1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKGJ5LnggfHwgYnkueSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMubWFuYWdlci5hY3Rpb25zLm1vdmUoe1xuICAgICAgICBldmVudCxcbiAgICAgICAgYnlcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBzaWRlRWZmZWN0cygpIHtcbiAgICBjb25zdCBhdXRvU2Nyb2xsZXIgPSB0aGlzLm1hbmFnZXIucmVnaXN0cnkucGx1Z2lucy5nZXQoQXV0b1Njcm9sbGVyKTtcbiAgICBpZiAoKGF1dG9TY3JvbGxlciA9PSBudWxsID8gdm9pZCAwIDogYXV0b1Njcm9sbGVyLmRpc2FibGVkKSA9PT0gZmFsc2UpIHtcbiAgICAgIGF1dG9TY3JvbGxlci5kaXNhYmxlKCk7XG4gICAgICBfX3ByaXZhdGVHZXQodGhpcywgX2NsZWFudXBGdW5jdGlvbnMpLnB1c2goKCkgPT4ge1xuICAgICAgICBhdXRvU2Nyb2xsZXIuZW5hYmxlKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgY2xlYW51cCgpIHtcbiAgICBfX3ByaXZhdGVHZXQodGhpcywgX2NsZWFudXBGdW5jdGlvbnMpLmZvckVhY2goKGNsZWFudXApID0+IGNsZWFudXAoKSk7XG4gICAgX19wcml2YXRlU2V0KHRoaXMsIF9jbGVhbnVwRnVuY3Rpb25zLCBbXSk7XG4gIH1cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmNsZWFudXAoKTtcbiAgICB0aGlzLmxpc3RlbmVycy5jbGVhcigpO1xuICB9XG59O1xuX2NsZWFudXBGdW5jdGlvbnMgPSBuZXcgV2Vha01hcCgpO1xuX0tleWJvYXJkU2Vuc29yLmNvbmZpZ3VyZSA9IGNvbmZpZ3VyYXRvcihfS2V5Ym9hcmRTZW5zb3IpO1xuX0tleWJvYXJkU2Vuc29yLmRlZmF1bHRzID0gZGVmYXVsdHM7XG52YXIgS2V5Ym9hcmRTZW5zb3IgPSBfS2V5Ym9hcmRTZW5zb3I7XG5mdW5jdGlvbiBpc0tleWNvZGUoZXZlbnQsIGNvZGVzKSB7XG4gIHJldHVybiBjb2Rlcy5pbmNsdWRlcyhldmVudC5jb2RlKTtcbn1cbnZhciBfY29vcmRpbmF0ZXM7XG52YXIgRGlzdGFuY2VDb25zdHJhaW50ID0gY2xhc3MgZXh0ZW5kcyBBY3RpdmF0aW9uQ29uc3RyYWludCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgX19wcml2YXRlQWRkKHRoaXMsIF9jb29yZGluYXRlcyk7XG4gIH1cbiAgb25FdmVudChldmVudCkge1xuICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuICAgICAgY2FzZSBcInBvaW50ZXJkb3duXCI6XG4gICAgICAgIF9fcHJpdmF0ZVNldCh0aGlzLCBfY29vcmRpbmF0ZXMsIGdldEV2ZW50Q29vcmRpbmF0ZXMoZXZlbnQpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwicG9pbnRlcm1vdmVcIjpcbiAgICAgICAgaWYgKCFfX3ByaXZhdGVHZXQodGhpcywgX2Nvb3JkaW5hdGVzKSkgcmV0dXJuO1xuICAgICAgICBjb25zdCB7IHgsIHkgfSA9IGdldEV2ZW50Q29vcmRpbmF0ZXMoZXZlbnQpO1xuICAgICAgICBjb25zdCBkZWx0YSA9IHtcbiAgICAgICAgICB4OiB4IC0gX19wcml2YXRlR2V0KHRoaXMsIF9jb29yZGluYXRlcykueCxcbiAgICAgICAgICB5OiB5IC0gX19wcml2YXRlR2V0KHRoaXMsIF9jb29yZGluYXRlcykueVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCB7IHRvbGVyYW5jZSB9ID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBpZiAodG9sZXJhbmNlICYmIGV4Y2VlZHNEaXN0YW5jZShkZWx0YSwgdG9sZXJhbmNlKSkge1xuICAgICAgICAgIHRoaXMuYWJvcnQoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV4Y2VlZHNEaXN0YW5jZShkZWx0YSwgdGhpcy5vcHRpb25zLnZhbHVlKSkge1xuICAgICAgICAgIHRoaXMuYWN0aXZhdGUoZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInBvaW50ZXJ1cFwiOlxuICAgICAgICB0aGlzLmFib3J0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBhYm9ydCgpIHtcbiAgICBfX3ByaXZhdGVTZXQodGhpcywgX2Nvb3JkaW5hdGVzLCB2b2lkIDApO1xuICB9XG59O1xuX2Nvb3JkaW5hdGVzID0gbmV3IFdlYWtNYXAoKTtcbnZhciBfdGltZW91dDIsIF9jb29yZGluYXRlczI7XG52YXIgRGVsYXlDb25zdHJhaW50ID0gY2xhc3MgZXh0ZW5kcyBBY3RpdmF0aW9uQ29uc3RyYWludCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgX19wcml2YXRlQWRkKHRoaXMsIF90aW1lb3V0Mik7XG4gICAgX19wcml2YXRlQWRkKHRoaXMsIF9jb29yZGluYXRlczIpO1xuICB9XG4gIG9uRXZlbnQoZXZlbnQpIHtcbiAgICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcbiAgICAgIGNhc2UgXCJwb2ludGVyZG93blwiOlxuICAgICAgICBfX3ByaXZhdGVTZXQodGhpcywgX2Nvb3JkaW5hdGVzMiwgZ2V0RXZlbnRDb29yZGluYXRlcyhldmVudCkpO1xuICAgICAgICBfX3ByaXZhdGVTZXQodGhpcywgX3RpbWVvdXQyLCBzZXRUaW1lb3V0KFxuICAgICAgICAgICgpID0+IHRoaXMuYWN0aXZhdGUoZXZlbnQpLFxuICAgICAgICAgIHRoaXMub3B0aW9ucy52YWx1ZVxuICAgICAgICApKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwicG9pbnRlcm1vdmVcIjpcbiAgICAgICAgaWYgKCFfX3ByaXZhdGVHZXQodGhpcywgX2Nvb3JkaW5hdGVzMikpIHJldHVybjtcbiAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBnZXRFdmVudENvb3JkaW5hdGVzKGV2ZW50KTtcbiAgICAgICAgY29uc3QgZGVsdGEgPSB7XG4gICAgICAgICAgeDogeCAtIF9fcHJpdmF0ZUdldCh0aGlzLCBfY29vcmRpbmF0ZXMyKS54LFxuICAgICAgICAgIHk6IHkgLSBfX3ByaXZhdGVHZXQodGhpcywgX2Nvb3JkaW5hdGVzMikueVxuICAgICAgICB9O1xuICAgICAgICBpZiAoZXhjZWVkc0Rpc3RhbmNlKGRlbHRhLCB0aGlzLm9wdGlvbnMudG9sZXJhbmNlKSkge1xuICAgICAgICAgIHRoaXMuYWJvcnQoKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJwb2ludGVydXBcIjpcbiAgICAgICAgdGhpcy5hYm9ydCgpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgYWJvcnQoKSB7XG4gICAgaWYgKF9fcHJpdmF0ZUdldCh0aGlzLCBfdGltZW91dDIpKSB7XG4gICAgICBjbGVhclRpbWVvdXQoX19wcml2YXRlR2V0KHRoaXMsIF90aW1lb3V0MikpO1xuICAgICAgX19wcml2YXRlU2V0KHRoaXMsIF9jb29yZGluYXRlczIsIHZvaWQgMCk7XG4gICAgICBfX3ByaXZhdGVTZXQodGhpcywgX3RpbWVvdXQyLCB2b2lkIDApO1xuICAgIH1cbiAgfVxufTtcbl90aW1lb3V0MiA9IG5ldyBXZWFrTWFwKCk7XG5fY29vcmRpbmF0ZXMyID0gbmV3IFdlYWtNYXAoKTtcblxuLy8gc3JjL2NvcmUvc2Vuc29ycy9wb2ludGVyL1BvaW50ZXJBY3RpdmF0aW9uQ29uc3RyYWludHMudHNcbnZhciBQb2ludGVyQWN0aXZhdGlvbkNvbnN0cmFpbnRzID0gY2xhc3Mge1xufTtcblBvaW50ZXJBY3RpdmF0aW9uQ29uc3RyYWludHMuRGVsYXkgPSBEZWxheUNvbnN0cmFpbnQ7XG5Qb2ludGVyQWN0aXZhdGlvbkNvbnN0cmFpbnRzLkRpc3RhbmNlID0gRGlzdGFuY2VDb25zdHJhaW50O1xuXG4vLyBzcmMvY29yZS9zZW5zb3JzL3BvaW50ZXIvUG9pbnRlclNlbnNvci50c1xudmFyIGRlZmF1bHRzMiA9IE9iamVjdC5mcmVlemUoe1xuICBhY3RpdmF0aW9uQ29uc3RyYWludHMoZXZlbnQsIHNvdXJjZSkge1xuICAgIHZhciBfYTU7XG4gICAgY29uc3QgeyBwb2ludGVyVHlwZSwgdGFyZ2V0IH0gPSBldmVudDtcbiAgICBpZiAocG9pbnRlclR5cGUgPT09IFwibW91c2VcIiAmJiBpc0VsZW1lbnQodGFyZ2V0KSAmJiAoc291cmNlLmhhbmRsZSA9PT0gdGFyZ2V0IHx8ICgoX2E1ID0gc291cmNlLmhhbmRsZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hNS5jb250YWlucyh0YXJnZXQpKSkpIHtcbiAgICAgIHJldHVybiB2b2lkIDA7XG4gICAgfVxuICAgIGlmIChwb2ludGVyVHlwZSA9PT0gXCJ0b3VjaFwiKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICBuZXcgUG9pbnRlckFjdGl2YXRpb25Db25zdHJhaW50cy5EZWxheSh7IHZhbHVlOiAyNTAsIHRvbGVyYW5jZTogNSB9KVxuICAgICAgXTtcbiAgICB9XG4gICAgaWYgKGlzVGV4dElucHV0KHRhcmdldCkgJiYgIWV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIG5ldyBQb2ludGVyQWN0aXZhdGlvbkNvbnN0cmFpbnRzLkRlbGF5KHsgdmFsdWU6IDIwMCwgdG9sZXJhbmNlOiAwIH0pXG4gICAgICBdO1xuICAgIH1cbiAgICByZXR1cm4gW1xuICAgICAgbmV3IFBvaW50ZXJBY3RpdmF0aW9uQ29uc3RyYWludHMuRGVsYXkoeyB2YWx1ZTogMjAwLCB0b2xlcmFuY2U6IDEwIH0pLFxuICAgICAgbmV3IFBvaW50ZXJBY3RpdmF0aW9uQ29uc3RyYWludHMuRGlzdGFuY2UoeyB2YWx1ZTogNSB9KVxuICAgIF07XG4gIH0sXG4gIHByZXZlbnRBY3RpdmF0aW9uKGV2ZW50LCBzb3VyY2UpIHtcbiAgICB2YXIgX2E1O1xuICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudDtcbiAgICBpZiAodGFyZ2V0ID09PSBzb3VyY2UuZWxlbWVudCkgcmV0dXJuIGZhbHNlO1xuICAgIGlmICh0YXJnZXQgPT09IHNvdXJjZS5oYW5kbGUpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoIWlzRWxlbWVudCh0YXJnZXQpKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKChfYTUgPSBzb3VyY2UuaGFuZGxlKSA9PSBudWxsID8gdm9pZCAwIDogX2E1LmNvbnRhaW5zKHRhcmdldCkpIHJldHVybiBmYWxzZTtcbiAgICBjb25zdCBpbnRlcmFjdGl2ZUVsZW1lbnQgPSBnZXRJbnRlcmFjdGl2ZUVsZW1lbnQodGFyZ2V0KTtcbiAgICBpZiAoaW50ZXJhY3RpdmVFbGVtZW50ID09PSBzb3VyY2UuZWxlbWVudCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiBCb29sZWFuKGludGVyYWN0aXZlRWxlbWVudCk7XG4gIH1cbn0pO1xudmFyIF9jbGVhbnVwO1xudmFyIF9Qb2ludGVyU2Vuc29yID0gY2xhc3MgX1BvaW50ZXJTZW5zb3IgZXh0ZW5kcyBTZW5zb3Ige1xuICBjb25zdHJ1Y3RvcihtYW5hZ2VyLCBvcHRpb25zKSB7XG4gICAgc3VwZXIobWFuYWdlcik7XG4gICAgdGhpcy5tYW5hZ2VyID0gbWFuYWdlcjtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIF9fcHJpdmF0ZUFkZCh0aGlzLCBfY2xlYW51cCwgLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKSk7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSBuZXcgTGlzdGVuZXJzKCk7XG4gICAgdGhpcy5sYXRlc3QgPSB7XG4gICAgICBldmVudDogdm9pZCAwLFxuICAgICAgY29vcmRpbmF0ZXM6IHZvaWQgMFxuICAgIH07XG4gICAgdGhpcy5oYW5kbGVNb3ZlID0gKCkgPT4ge1xuICAgICAgY29uc3QgeyBldmVudCwgY29vcmRpbmF0ZXM6IHRvIH0gPSB0aGlzLmxhdGVzdDtcbiAgICAgIGlmICghZXZlbnQgfHwgIXRvKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMubWFuYWdlci5hY3Rpb25zLm1vdmUoeyBldmVudCwgdG8gfSk7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUNhbmNlbCA9IHRoaXMuaGFuZGxlQ2FuY2VsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVQb2ludGVyVXAgPSB0aGlzLmhhbmRsZVBvaW50ZXJVcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlS2V5RG93biA9IHRoaXMuaGFuZGxlS2V5RG93bi5iaW5kKHRoaXMpO1xuICB9XG4gIGFjdGl2YXRpb25Db25zdHJhaW50cyhldmVudCwgc291cmNlLCBvcHRpb25zID0gdGhpcy5vcHRpb25zKSB7XG4gICAgY29uc3QgeyBhY3RpdmF0aW9uQ29uc3RyYWludHMgPSBkZWZhdWx0czIuYWN0aXZhdGlvbkNvbnN0cmFpbnRzIH0gPSBvcHRpb25zICE9IG51bGwgPyBvcHRpb25zIDoge307XG4gICAgY29uc3QgY29uc3RyYWludHMgPSB0eXBlb2YgYWN0aXZhdGlvbkNvbnN0cmFpbnRzID09PSBcImZ1bmN0aW9uXCIgPyBhY3RpdmF0aW9uQ29uc3RyYWludHMoZXZlbnQsIHNvdXJjZSkgOiBhY3RpdmF0aW9uQ29uc3RyYWludHM7XG4gICAgcmV0dXJuIGNvbnN0cmFpbnRzO1xuICB9XG4gIGJpbmQoc291cmNlLCBvcHRpb25zID0gdGhpcy5vcHRpb25zKSB7XG4gICAgY29uc3QgdW5iaW5kID0gZWZmZWN0KCgpID0+IHtcbiAgICAgIHZhciBfYTU7XG4gICAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgICAgY29uc3QgeyBzaWduYWw6IHNpZ25hbDMgfSA9IGNvbnRyb2xsZXI7XG4gICAgICBjb25zdCBsaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgICAgICBpZiAoaXNQb2ludGVyRXZlbnQoZXZlbnQpKSB7XG4gICAgICAgICAgdGhpcy5oYW5kbGVQb2ludGVyRG93bihldmVudCwgc291cmNlLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGxldCB0YXJnZXRzID0gWyhfYTUgPSBzb3VyY2UuaGFuZGxlKSAhPSBudWxsID8gX2E1IDogc291cmNlLmVsZW1lbnRdO1xuICAgICAgaWYgKG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMuYWN0aXZhdG9yRWxlbWVudHMpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucy5hY3RpdmF0b3JFbGVtZW50cykpIHtcbiAgICAgICAgICB0YXJnZXRzID0gb3B0aW9ucy5hY3RpdmF0b3JFbGVtZW50cztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YXJnZXRzID0gb3B0aW9ucy5hY3RpdmF0b3JFbGVtZW50cyhzb3VyY2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IHRhcmdldCBvZiB0YXJnZXRzKSB7XG4gICAgICAgIGlmICghdGFyZ2V0KSBjb250aW51ZTtcbiAgICAgICAgcGF0Y2hXaW5kb3codGFyZ2V0Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcpO1xuICAgICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGxpc3RlbmVyLCB7IHNpZ25hbDogc2lnbmFsMyB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAoKSA9PiBjb250cm9sbGVyLmFib3J0KCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHVuYmluZDtcbiAgfVxuICBoYW5kbGVQb2ludGVyRG93bihldmVudCwgc291cmNlLCBvcHRpb25zKSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgIWV2ZW50LmlzUHJpbWFyeSB8fCBldmVudC5idXR0b24gIT09IDAgfHwgIWlzRWxlbWVudChldmVudC50YXJnZXQpIHx8IHNvdXJjZS5kaXNhYmxlZCB8fCBpc0NhcHR1cmVkQnlTZW5zb3IoZXZlbnQpIHx8ICF0aGlzLm1hbmFnZXIuZHJhZ09wZXJhdGlvbi5zdGF0dXMuaWRsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7IHByZXZlbnRBY3RpdmF0aW9uID0gZGVmYXVsdHMyLnByZXZlbnRBY3RpdmF0aW9uIH0gPSBvcHRpb25zICE9IG51bGwgPyBvcHRpb25zIDoge307XG4gICAgaWYgKHByZXZlbnRBY3RpdmF0aW9uID09IG51bGwgPyB2b2lkIDAgOiBwcmV2ZW50QWN0aXZhdGlvbihldmVudCwgc291cmNlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQ7XG4gICAgY29uc3QgaXNOYXRpdmVEcmFnZ2FibGUgPSBpc0hUTUxFbGVtZW50KHRhcmdldCkgJiYgdGFyZ2V0LmRyYWdnYWJsZSAmJiB0YXJnZXQuZ2V0QXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIpID09PSBcInRydWVcIjtcbiAgICBjb25zdCBvZmZzZXQgPSBnZXRGcmFtZVRyYW5zZm9ybShzb3VyY2UuZWxlbWVudCk7XG4gICAgY29uc3QgeyB4LCB5IH0gPSBnZXRFdmVudENvb3JkaW5hdGVzKGV2ZW50KTtcbiAgICB0aGlzLmluaXRpYWxDb29yZGluYXRlcyA9IHtcbiAgICAgIHg6IHggKiBvZmZzZXQuc2NhbGVYICsgb2Zmc2V0LngsXG4gICAgICB5OiB5ICogb2Zmc2V0LnNjYWxlWSArIG9mZnNldC55XG4gICAgfTtcbiAgICBjb25zdCBjb25zdHJhaW50cyA9IHRoaXMuYWN0aXZhdGlvbkNvbnN0cmFpbnRzKGV2ZW50LCBzb3VyY2UsIG9wdGlvbnMpO1xuICAgIGV2ZW50LnNlbnNvciA9IHRoaXM7XG4gICAgY29uc3QgY29udHJvbGxlciA9IG5ldyBBY3RpdmF0aW9uQ29udHJvbGxlcihcbiAgICAgIGNvbnN0cmFpbnRzLFxuICAgICAgKGV2ZW50MikgPT4gdGhpcy5oYW5kbGVTdGFydChzb3VyY2UsIGV2ZW50MilcbiAgICApO1xuICAgIGNvbnRyb2xsZXIuc2lnbmFsLm9uYWJvcnQgPSAoKSA9PiB0aGlzLmhhbmRsZUNhbmNlbChldmVudCk7XG4gICAgY29udHJvbGxlci5vbkV2ZW50KGV2ZW50KTtcbiAgICB0aGlzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuICAgIGNvbnN0IGRvY3VtZW50cyA9IGdldERvY3VtZW50cygpO1xuICAgIGNvbnN0IHVuYmluZExpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzLmJpbmQoZG9jdW1lbnRzLCBbXG4gICAgICB7XG4gICAgICAgIHR5cGU6IFwicG9pbnRlcm1vdmVcIixcbiAgICAgICAgbGlzdGVuZXI6IChldmVudDIpID0+IHRoaXMuaGFuZGxlUG9pbnRlck1vdmUoZXZlbnQyLCBzb3VyY2UpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiBcInBvaW50ZXJ1cFwiLFxuICAgICAgICBsaXN0ZW5lcjogdGhpcy5oYW5kbGVQb2ludGVyVXAsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICBjYXB0dXJlOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHR5cGU6IFwicG9pbnRlcmNhbmNlbFwiLFxuICAgICAgICBsaXN0ZW5lcjogdGhpcy5oYW5kbGVDYW5jZWxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIENhbmNlbCBhY3RpdmF0aW9uIGlmIHRoZXJlIGlzIGEgY29tcGV0aW5nIERyYWcgYW5kIERyb3AgaW50ZXJhY3Rpb25cbiAgICAgICAgdHlwZTogXCJkcmFnc3RhcnRcIixcbiAgICAgICAgbGlzdGVuZXI6IGlzTmF0aXZlRHJhZ2dhYmxlID8gdGhpcy5oYW5kbGVDYW5jZWwgOiBwcmV2ZW50RGVmYXVsdCxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIGNhcHR1cmU6IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF0pO1xuICAgIGNvbnN0IGNsZWFudXAgPSAoKSA9PiB7XG4gICAgICB1bmJpbmRMaXN0ZW5lcnMoKTtcbiAgICAgIHRoaXMuaW5pdGlhbENvb3JkaW5hdGVzID0gdm9pZCAwO1xuICAgIH07XG4gICAgX19wcml2YXRlR2V0KHRoaXMsIF9jbGVhbnVwKS5hZGQoY2xlYW51cCk7XG4gIH1cbiAgaGFuZGxlUG9pbnRlck1vdmUoZXZlbnQsIHNvdXJjZSkge1xuICAgIHZhciBfYTUsIF9iMjtcbiAgICBpZiAoKChfYTUgPSB0aGlzLmNvbnRyb2xsZXIpID09IG51bGwgPyB2b2lkIDAgOiBfYTUuYWN0aXZhdGVkKSA9PT0gZmFsc2UpIHtcbiAgICAgIChfYjIgPSB0aGlzLmNvbnRyb2xsZXIpID09IG51bGwgPyB2b2lkIDAgOiBfYjIub25FdmVudChldmVudCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLm1hbmFnZXIuZHJhZ09wZXJhdGlvbi5zdGF0dXMuZHJhZ2dpbmcpIHtcbiAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gZ2V0RXZlbnRDb29yZGluYXRlcyhldmVudCk7XG4gICAgICBjb25zdCBvZmZzZXQgPSBnZXRGcmFtZVRyYW5zZm9ybShzb3VyY2UuZWxlbWVudCk7XG4gICAgICBjb29yZGluYXRlcy54ID0gY29vcmRpbmF0ZXMueCAqIG9mZnNldC5zY2FsZVggKyBvZmZzZXQueDtcbiAgICAgIGNvb3JkaW5hdGVzLnkgPSBjb29yZGluYXRlcy55ICogb2Zmc2V0LnNjYWxlWSArIG9mZnNldC55O1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy5sYXRlc3QuZXZlbnQgPSBldmVudDtcbiAgICAgIHRoaXMubGF0ZXN0LmNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXM7XG4gICAgICBzY2hlZHVsZXIuc2NoZWR1bGUodGhpcy5oYW5kbGVNb3ZlKTtcbiAgICB9XG4gIH1cbiAgaGFuZGxlUG9pbnRlclVwKGV2ZW50KSB7XG4gICAgY29uc3QgeyBzdGF0dXMgfSA9IHRoaXMubWFuYWdlci5kcmFnT3BlcmF0aW9uO1xuICAgIGlmICghc3RhdHVzLmlkbGUpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGNvbnN0IGNhbmNlbGVkID0gIXN0YXR1cy5pbml0aWFsaXplZDtcbiAgICAgIHRoaXMubWFuYWdlci5hY3Rpb25zLnN0b3AoeyBldmVudCwgY2FuY2VsZWQgfSk7XG4gICAgfVxuICAgIHRoaXMuY2xlYW51cCgpO1xuICB9XG4gIGhhbmRsZUtleURvd24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5oYW5kbGVDYW5jZWwoZXZlbnQpO1xuICAgIH1cbiAgfVxuICBoYW5kbGVTdGFydChzb3VyY2UsIGV2ZW50KSB7XG4gICAgY29uc3QgeyBtYW5hZ2VyLCBpbml0aWFsQ29vcmRpbmF0ZXMgfSA9IHRoaXM7XG4gICAgaWYgKCFpbml0aWFsQ29vcmRpbmF0ZXMgfHwgIW1hbmFnZXIuZHJhZ09wZXJhdGlvbi5zdGF0dXMuaWRsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjb250cm9sbGVyID0gbWFuYWdlci5hY3Rpb25zLnN0YXJ0KHtcbiAgICAgIGNvb3JkaW5hdGVzOiBpbml0aWFsQ29vcmRpbmF0ZXMsXG4gICAgICBldmVudCxcbiAgICAgIHNvdXJjZVxuICAgIH0pO1xuICAgIGlmIChjb250cm9sbGVyLnNpZ25hbC5hYm9ydGVkKSByZXR1cm4gdGhpcy5jbGVhbnVwKCk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBvd25lckRvY3VtZW50ID0gZ2V0RG9jdW1lbnQoZXZlbnQudGFyZ2V0KTtcbiAgICBjb25zdCBwb2ludGVyQ2FwdHVyZVRhcmdldCA9IG93bmVyRG9jdW1lbnQuYm9keTtcbiAgICB0cnkge1xuICAgICAgcG9pbnRlckNhcHR1cmVUYXJnZXQuc2V0UG9pbnRlckNhcHR1cmUoZXZlbnQucG9pbnRlcklkKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLmhhbmRsZUNhbmNlbChldmVudCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGxpc3RlbmVyVGFyZ2V0cyA9IGlzRWxlbWVudChldmVudC50YXJnZXQpID8gW2V2ZW50LnRhcmdldCwgcG9pbnRlckNhcHR1cmVUYXJnZXRdIDogcG9pbnRlckNhcHR1cmVUYXJnZXQ7XG4gICAgY29uc3QgdW5iaW5kID0gdGhpcy5saXN0ZW5lcnMuYmluZChsaXN0ZW5lclRhcmdldHMsIFtcbiAgICAgIHtcbiAgICAgICAgLy8gUHJldmVudCBzY3JvbGxpbmcgb24gdG91Y2ggZGV2aWNlc1xuICAgICAgICB0eXBlOiBcInRvdWNobW92ZVwiLFxuICAgICAgICBsaXN0ZW5lcjogcHJldmVudERlZmF1bHQsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBQcmV2ZW50IGNsaWNrIGV2ZW50c1xuICAgICAgICB0eXBlOiBcImNsaWNrXCIsXG4gICAgICAgIGxpc3RlbmVyOiBwcmV2ZW50RGVmYXVsdFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogXCJjb250ZXh0bWVudVwiLFxuICAgICAgICBsaXN0ZW5lcjogcHJldmVudERlZmF1bHRcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHR5cGU6IFwia2V5ZG93blwiLFxuICAgICAgICBsaXN0ZW5lcjogdGhpcy5oYW5kbGVLZXlEb3duXG4gICAgICB9XG4gICAgXSk7XG4gICAgX19wcml2YXRlR2V0KHRoaXMsIF9jbGVhbnVwKS5hZGQodW5iaW5kKTtcbiAgfVxuICBoYW5kbGVDYW5jZWwoZXZlbnQpIHtcbiAgICBjb25zdCB7IGRyYWdPcGVyYXRpb24gfSA9IHRoaXMubWFuYWdlcjtcbiAgICBpZiAoZHJhZ09wZXJhdGlvbi5zdGF0dXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgIHRoaXMubWFuYWdlci5hY3Rpb25zLnN0b3AoeyBldmVudCwgY2FuY2VsZWQ6IHRydWUgfSk7XG4gICAgfVxuICAgIHRoaXMuY2xlYW51cCgpO1xuICB9XG4gIGNsZWFudXAoKSB7XG4gICAgY29uc3QgeyBjb250cm9sbGVyIH0gPSB0aGlzO1xuICAgIHRoaXMuY29udHJvbGxlciA9IHZvaWQgMDtcbiAgICBpZiAoY29udHJvbGxlciAmJiAhY29udHJvbGxlci5zaWduYWwuYWJvcnRlZCkge1xuICAgICAgY29udHJvbGxlci5hYm9ydCgpO1xuICAgIH1cbiAgICB0aGlzLmxhdGVzdCA9IHtcbiAgICAgIGV2ZW50OiB2b2lkIDAsXG4gICAgICBjb29yZGluYXRlczogdm9pZCAwXG4gICAgfTtcbiAgICBfX3ByaXZhdGVHZXQodGhpcywgX2NsZWFudXApLmZvckVhY2goKGNsZWFudXApID0+IGNsZWFudXAoKSk7XG4gICAgX19wcml2YXRlR2V0KHRoaXMsIF9jbGVhbnVwKS5jbGVhcigpO1xuICB9XG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5jbGVhbnVwKCk7XG4gICAgdGhpcy5saXN0ZW5lcnMuY2xlYXIoKTtcbiAgfVxufTtcbl9jbGVhbnVwID0gbmV3IFdlYWtNYXAoKTtcbl9Qb2ludGVyU2Vuc29yLmNvbmZpZ3VyZSA9IGNvbmZpZ3VyYXRvcihfUG9pbnRlclNlbnNvcik7XG5fUG9pbnRlclNlbnNvci5kZWZhdWx0cyA9IGRlZmF1bHRzMjtcbnZhciBQb2ludGVyU2Vuc29yID0gX1BvaW50ZXJTZW5zb3I7XG5mdW5jdGlvbiBpc0NhcHR1cmVkQnlTZW5zb3IoZXZlbnQpIHtcbiAgcmV0dXJuIFwic2Vuc29yXCIgaW4gZXZlbnQ7XG59XG5mdW5jdGlvbiBwcmV2ZW50RGVmYXVsdChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufVxuZnVuY3Rpb24gbm9vcCgpIHtcbn1cbnZhciB3aW5kb3dzID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrU2V0KCk7XG5mdW5jdGlvbiBwYXRjaFdpbmRvdyh3aW5kb3cpIHtcbiAgaWYgKCF3aW5kb3cgfHwgd2luZG93cy5oYXMod2luZG93KSkge1xuICAgIHJldHVybjtcbiAgfVxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBub29wLCB7XG4gICAgY2FwdHVyZTogZmFsc2UsXG4gICAgcGFzc2l2ZTogZmFsc2VcbiAgfSk7XG4gIHdpbmRvd3MuYWRkKHdpbmRvdyk7XG59XG5cbi8vIHNyYy9jb3JlL21hbmFnZXIvbWFuYWdlci50c1xudmFyIGRlZmF1bHRQcmVzZXQgPSB7XG4gIG1vZGlmaWVyczogW10sXG4gIHBsdWdpbnM6IFtBY2Nlc3NpYmlsaXR5LCBBdXRvU2Nyb2xsZXIsIEN1cnNvciwgRmVlZGJhY2ssIFByZXZlbnRTZWxlY3Rpb25dLFxuICBzZW5zb3JzOiBbUG9pbnRlclNlbnNvciwgS2V5Ym9hcmRTZW5zb3JdXG59O1xudmFyIERyYWdEcm9wTWFuYWdlciA9IGNsYXNzIGV4dGVuZHMgRHJhZ0Ryb3BNYW5hZ2VyJDEge1xuICBjb25zdHJ1Y3RvcihpbnB1dCA9IHt9KSB7XG4gICAgY29uc3QgcGx1Z2lucyA9IHJlc29sdmVDdXN0b21pemFibGUoaW5wdXQucGx1Z2lucywgZGVmYXVsdFByZXNldC5wbHVnaW5zKTtcbiAgICBjb25zdCBzZW5zb3JzID0gcmVzb2x2ZUN1c3RvbWl6YWJsZShpbnB1dC5zZW5zb3JzLCBkZWZhdWx0UHJlc2V0LnNlbnNvcnMpO1xuICAgIGNvbnN0IG1vZGlmaWVycyA9IHJlc29sdmVDdXN0b21pemFibGUoXG4gICAgICBpbnB1dC5tb2RpZmllcnMsXG4gICAgICBkZWZhdWx0UHJlc2V0Lm1vZGlmaWVyc1xuICAgICk7XG4gICAgc3VwZXIoX19zcHJlYWRQcm9wcyhfX3NwcmVhZFZhbHVlcyh7fSwgaW5wdXQpLCB7XG4gICAgICBwbHVnaW5zOiBbU2Nyb2xsTGlzdGVuZXIsIFNjcm9sbGVyLCBTdHlsZUluamVjdG9yLCAuLi5wbHVnaW5zXSxcbiAgICAgIHNlbnNvcnMsXG4gICAgICBtb2RpZmllcnNcbiAgICB9KSk7XG4gIH1cbn07XG52YXIgX2VsZW1lbnRfZGVjLCBfaGFuZGxlX2RlYywgX2MsIF9pbml0NSwgX2hhbmRsZSwgX2VsZW1lbnQ7XG52YXIgRHJhZ2dhYmxlID0gY2xhc3MgZXh0ZW5kcyAoX2MgPSBEcmFnZ2FibGUkMSwgX2hhbmRsZV9kZWMgPSBbcmVhY3RpdmVdLCBfZWxlbWVudF9kZWMgPSBbcmVhY3RpdmVdLCBfYykge1xuICBjb25zdHJ1Y3RvcihfYTUsIG1hbmFnZXIpIHtcbiAgICB2YXIgX2IyID0gX2E1LCB7XG4gICAgICBlbGVtZW50LFxuICAgICAgZWZmZWN0czogZWZmZWN0czIgPSAoKSA9PiBbXSxcbiAgICAgIGhhbmRsZVxuICAgIH0gPSBfYjIsIGlucHV0ID0gX19vYmpSZXN0KF9iMiwgW1xuICAgICAgXCJlbGVtZW50XCIsXG4gICAgICBcImVmZmVjdHNcIixcbiAgICAgIFwiaGFuZGxlXCJcbiAgICBdKTtcbiAgICBzdXBlcihcbiAgICAgIF9fc3ByZWFkVmFsdWVzKHtcbiAgICAgICAgZWZmZWN0czogKCkgPT4gW1xuICAgICAgICAgIC4uLmVmZmVjdHMyKCksXG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hNiwgX2IzO1xuICAgICAgICAgICAgY29uc3QgeyBtYW5hZ2VyOiBtYW5hZ2VyMiB9ID0gdGhpcztcbiAgICAgICAgICAgIGlmICghbWFuYWdlcjIpIHJldHVybjtcbiAgICAgICAgICAgIGNvbnN0IHNlbnNvcnMgPSAoX2IzID0gKF9hNiA9IHRoaXMuc2Vuc29ycykgPT0gbnVsbCA/IHZvaWQgMCA6IF9hNi5tYXAoZGVzY3JpcHRvcikpICE9IG51bGwgPyBfYjMgOiBbXG4gICAgICAgICAgICAgIC4uLm1hbmFnZXIyLnNlbnNvcnNcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBjb25zdCB1bmJpbmRGdW5jdGlvbnMgPSBzZW5zb3JzLm1hcCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc2Vuc29ySW5zdGFuY2UgPSBlbnRyeSBpbnN0YW5jZW9mIFNlbnNvciA/IGVudHJ5IDogbWFuYWdlcjIucmVnaXN0cnkucmVnaXN0ZXIoZW50cnkucGx1Z2luKTtcbiAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGVudHJ5IGluc3RhbmNlb2YgU2Vuc29yID8gdm9pZCAwIDogZW50cnkub3B0aW9ucztcbiAgICAgICAgICAgICAgY29uc3QgdW5iaW5kID0gc2Vuc29ySW5zdGFuY2UuYmluZCh0aGlzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgcmV0dXJuIHVuYmluZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGNsZWFudXAoKSB7XG4gICAgICAgICAgICAgIHVuYmluZEZ1bmN0aW9ucy5mb3JFYWNoKCh1bmJpbmQpID0+IHVuYmluZCgpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LCBpbnB1dCksXG4gICAgICBtYW5hZ2VyXG4gICAgKTtcbiAgICBfX3ByaXZhdGVBZGQodGhpcywgX2hhbmRsZSwgX19ydW5Jbml0aWFsaXplcnMoX2luaXQ1LCA4LCB0aGlzKSksIF9fcnVuSW5pdGlhbGl6ZXJzKF9pbml0NSwgMTEsIHRoaXMpO1xuICAgIF9fcHJpdmF0ZUFkZCh0aGlzLCBfZWxlbWVudCwgX19ydW5Jbml0aWFsaXplcnMoX2luaXQ1LCAxMiwgdGhpcykpLCBfX3J1bkluaXRpYWxpemVycyhfaW5pdDUsIDE1LCB0aGlzKTtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuaGFuZGxlID0gaGFuZGxlO1xuICB9XG59O1xuX2luaXQ1ID0gX19kZWNvcmF0b3JTdGFydChfYyk7XG5faGFuZGxlID0gbmV3IFdlYWtNYXAoKTtcbl9lbGVtZW50ID0gbmV3IFdlYWtNYXAoKTtcbl9fZGVjb3JhdGVFbGVtZW50KF9pbml0NSwgNCwgXCJoYW5kbGVcIiwgX2hhbmRsZV9kZWMsIERyYWdnYWJsZSwgX2hhbmRsZSk7XG5fX2RlY29yYXRlRWxlbWVudChfaW5pdDUsIDQsIFwiZWxlbWVudFwiLCBfZWxlbWVudF9kZWMsIERyYWdnYWJsZSwgX2VsZW1lbnQpO1xuX19kZWNvcmF0b3JNZXRhZGF0YShfaW5pdDUsIERyYWdnYWJsZSk7XG52YXIgX3Byb3h5X2RlYywgX2VsZW1lbnRfZGVjMiwgX2MyLCBfaW5pdDYsIF9lbGVtZW50MiwgX2QsIGVsZW1lbnRfZ2V0LCBlbGVtZW50X3NldCwgX0Ryb3BwYWJsZV9pbnN0YW5jZXMsIF9wcm94eTtcbnZhciBEcm9wcGFibGUgPSBjbGFzcyBleHRlbmRzIChfYzIgPSBEcm9wcGFibGUkMSwgX2VsZW1lbnRfZGVjMiA9IFtyZWFjdGl2ZV0sIF9wcm94eV9kZWMgPSBbcmVhY3RpdmVdLCBfYzIpIHtcbiAgY29uc3RydWN0b3IoX2E1LCBtYW5hZ2VyKSB7XG4gICAgdmFyIF9iMiA9IF9hNSwgeyBlbGVtZW50LCBlZmZlY3RzOiBlZmZlY3RzMiA9ICgpID0+IFtdIH0gPSBfYjIsIGlucHV0ID0gX19vYmpSZXN0KF9iMiwgW1wiZWxlbWVudFwiLCBcImVmZmVjdHNcIl0pO1xuICAgIGNvbnN0IHsgY29sbGlzaW9uRGV0ZWN0b3IgPSBkZWZhdWx0Q29sbGlzaW9uRGV0ZWN0aW9uIH0gPSBpbnB1dDtcbiAgICBjb25zdCB1cGRhdGVTaGFwZSA9IChib3VuZGluZ0NsaWVudFJlY3QpID0+IHtcbiAgICAgIGNvbnN0IHsgbWFuYWdlcjogbWFuYWdlcjIsIGVsZW1lbnQ6IGVsZW1lbnQyIH0gPSB0aGlzO1xuICAgICAgaWYgKCFlbGVtZW50MiB8fCBib3VuZGluZ0NsaWVudFJlY3QgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5zaGFwZSA9IHZvaWQgMDtcbiAgICAgICAgcmV0dXJuIHZvaWQgMDtcbiAgICAgIH1cbiAgICAgIGlmICghbWFuYWdlcjIpIHJldHVybjtcbiAgICAgIGNvbnN0IHVwZGF0ZWRTaGFwZSA9IG5ldyBET01SZWN0YW5nbGUoZWxlbWVudDIpO1xuICAgICAgY29uc3Qgc2hhcGUgPSB1bnRyYWNrZWQoKCkgPT4gdGhpcy5zaGFwZSk7XG4gICAgICBpZiAodXBkYXRlZFNoYXBlICYmIChzaGFwZSA9PSBudWxsID8gdm9pZCAwIDogc2hhcGUuZXF1YWxzKHVwZGF0ZWRTaGFwZSkpKSB7XG4gICAgICAgIHJldHVybiBzaGFwZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2hhcGUgPSB1cGRhdGVkU2hhcGU7XG4gICAgICByZXR1cm4gdXBkYXRlZFNoYXBlO1xuICAgIH07XG4gICAgY29uc3Qgb2JzZXJ2ZVBvc2l0aW9uID0gc2lnbmFsKGZhbHNlKTtcbiAgICBzdXBlcihcbiAgICAgIF9fc3ByZWFkUHJvcHMoX19zcHJlYWRWYWx1ZXMoe30sIGlucHV0KSwge1xuICAgICAgICBjb2xsaXNpb25EZXRlY3RvcixcbiAgICAgICAgZWZmZWN0czogKCkgPT4gW1xuICAgICAgICAgIC4uLmVmZmVjdHMyKCksXG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBlbGVtZW50OiBlbGVtZW50MiwgbWFuYWdlcjogbWFuYWdlcjIgfSA9IHRoaXM7XG4gICAgICAgICAgICBpZiAoIW1hbmFnZXIyKSByZXR1cm47XG4gICAgICAgICAgICBjb25zdCB7IGRyYWdPcGVyYXRpb24gfSA9IG1hbmFnZXIyO1xuICAgICAgICAgICAgY29uc3QgeyBzb3VyY2UgfSA9IGRyYWdPcGVyYXRpb247XG4gICAgICAgICAgICBvYnNlcnZlUG9zaXRpb24udmFsdWUgPSBCb29sZWFuKFxuICAgICAgICAgICAgICBzb3VyY2UgJiYgZHJhZ09wZXJhdGlvbi5zdGF0dXMuaW5pdGlhbGl6ZWQgJiYgZWxlbWVudDIgJiYgIXRoaXMuZGlzYWJsZWQgJiYgdGhpcy5hY2NlcHRzKHNvdXJjZSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGVsZW1lbnQ6IGVsZW1lbnQyIH0gPSB0aGlzO1xuICAgICAgICAgICAgaWYgKG9ic2VydmVQb3NpdGlvbi52YWx1ZSAmJiBlbGVtZW50Mikge1xuICAgICAgICAgICAgICBjb25zdCBwb3NpdGlvbk9ic2VydmVyID0gbmV3IFBvc2l0aW9uT2JzZXJ2ZXIoXG4gICAgICAgICAgICAgICAgZWxlbWVudDIsXG4gICAgICAgICAgICAgICAgdXBkYXRlU2hhcGVcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXBlID0gdm9pZCAwO1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hNjtcbiAgICAgICAgICAgIGlmICgoX2E2ID0gdGhpcy5tYW5hZ2VyKSA9PSBudWxsID8gdm9pZCAwIDogX2E2LmRyYWdPcGVyYXRpb24uc3RhdHVzLmluaXRpYWxpemVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaGFwZSA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0pLFxuICAgICAgbWFuYWdlclxuICAgICk7XG4gICAgX19wcml2YXRlQWRkKHRoaXMsIF9Ecm9wcGFibGVfaW5zdGFuY2VzKTtcbiAgICBfX3ByaXZhdGVBZGQodGhpcywgX2VsZW1lbnQyLCBfX3J1bkluaXRpYWxpemVycyhfaW5pdDYsIDgsIHRoaXMpKSwgX19ydW5Jbml0aWFsaXplcnMoX2luaXQ2LCAxMSwgdGhpcyk7XG4gICAgX19wcml2YXRlQWRkKHRoaXMsIF9wcm94eSwgX19ydW5Jbml0aWFsaXplcnMoX2luaXQ2LCAxMiwgdGhpcykpLCBfX3J1bkluaXRpYWxpemVycyhfaW5pdDYsIDE1LCB0aGlzKTtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMucmVmcmVzaFNoYXBlID0gKCkgPT4gdXBkYXRlU2hhcGUoKTtcbiAgfVxuICBzZXQgZWxlbWVudChlbGVtZW50KSB7XG4gICAgX19wcml2YXRlU2V0KHRoaXMsIF9Ecm9wcGFibGVfaW5zdGFuY2VzLCBlbGVtZW50LCBlbGVtZW50X3NldCk7XG4gIH1cbiAgZ2V0IGVsZW1lbnQoKSB7XG4gICAgdmFyIF9hNTtcbiAgICByZXR1cm4gKF9hNSA9IHRoaXMucHJveHkpICE9IG51bGwgPyBfYTUgOiBfX3ByaXZhdGVHZXQodGhpcywgX0Ryb3BwYWJsZV9pbnN0YW5jZXMsIGVsZW1lbnRfZ2V0KTtcbiAgfVxufTtcbl9pbml0NiA9IF9fZGVjb3JhdG9yU3RhcnQoX2MyKTtcbl9lbGVtZW50MiA9IG5ldyBXZWFrTWFwKCk7XG5fRHJvcHBhYmxlX2luc3RhbmNlcyA9IG5ldyBXZWFrU2V0KCk7XG5fcHJveHkgPSBuZXcgV2Vha01hcCgpO1xuX2QgPSBfX2RlY29yYXRlRWxlbWVudChfaW5pdDYsIDIwLCBcIiNlbGVtZW50XCIsIF9lbGVtZW50X2RlYzIsIF9Ecm9wcGFibGVfaW5zdGFuY2VzLCBfZWxlbWVudDIpLCBlbGVtZW50X2dldCA9IF9kLmdldCwgZWxlbWVudF9zZXQgPSBfZC5zZXQ7XG5fX2RlY29yYXRlRWxlbWVudChfaW5pdDYsIDQsIFwicHJveHlcIiwgX3Byb3h5X2RlYywgRHJvcHBhYmxlLCBfcHJveHkpO1xuX19kZWNvcmF0b3JNZXRhZGF0YShfaW5pdDYsIERyb3BwYWJsZSk7XG5cbmV4cG9ydCB7IEFjY2Vzc2liaWxpdHksIEF1dG9TY3JvbGxlciwgQ3Vyc29yLCBEcmFnRHJvcE1hbmFnZXIsIERyYWdnYWJsZSwgRHJvcHBhYmxlLCBGZWVkYmFjaywgS2V5Ym9hcmRTZW5zb3IsIFBvaW50ZXJBY3RpdmF0aW9uQ29uc3RyYWludHMsIFBvaW50ZXJTZW5zb3IsIFByZXZlbnRTZWxlY3Rpb24sIFNjcm9sbExpc3RlbmVyLCBTY3JvbGxlciwgU3R5bGVJbmplY3RvciwgZGVmYXVsdFByZXNldCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLAogICAgImV4cG9ydCBjb25zdCBDT01NQU5ERVJTID0gW1xuICAgICdhYmF0aHVyJywgJ2FsYXJhaycsICdtZW5nc2snLCAnYXJ0YW5pcycsICdkZWhha2EnLCAnZmVuaXgnLCAnaG9ybmVyJywgJ2thcmF4JyxcbiAgICAna2VycmlnYW4nLCAnbm92YScsICdyYXlub3InLCAnc3RldG1hbm4nLCAnc3R1a292JywgJ3N3YW5uJywgJ3R5Y2h1cycsICd2b3JhenVuJyxcbiAgICAnemFnYXJhJywgJ3plcmF0dWwnLFxuXSBhcyBjb25zdDtcbmV4cG9ydCB0eXBlIENvbW1hbmRlciA9IHR5cGVvZiBDT01NQU5ERVJTW251bWJlcl07XG5leHBvcnQgY29uc3QgVElFUlMgPSBbJ1NTUycsICdTUycsICdTJywgJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJ10gYXMgY29uc3Q7XG5leHBvcnQgdHlwZSBUaWVyID0gdHlwZW9mIFRJRVJTW251bWJlcl07XG5leHBvcnQgdHlwZSBCb2FyZCA9IFJlY29yZDxUaWVyLCBDb21tYW5kZXJbXT47XG5leHBvcnQgaW50ZXJmYWNlIFJhbmtpbmcgeyB0aWVyczogQm9hcmQ7IGN1cnJlbnQ6IENvbW1hbmRlciB8IG51bGwgfVxuXG5leHBvcnQgZnVuY3Rpb24gY29tbWFuZGVyTmFtZShpZDogQ29tbWFuZGVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gaWQgPT09ICdob3JuZXInID8gJ0hhbiAmIEhvcm5lcicgOiBpZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGlkLnNsaWNlKDEpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzQ29tbWFuZGVyKGlkOiB1bmtub3duKTogaWQgaXMgQ29tbWFuZGVyIHtcbiAgICByZXR1cm4gdHlwZW9mIGlkID09PSAnc3RyaW5nJyAmJiAoQ09NTUFOREVSUyBhcyByZWFkb25seSBzdHJpbmdbXSkuaW5jbHVkZXMoaWQpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGVtcHR5UmFua2luZygpOiBSYW5raW5nIHtcbiAgICByZXR1cm4geyB0aWVyczogeyBTU1M6IFtdLCBTUzogW10sIFM6IFtdLCBBOiBbXSwgQjogW10sIEM6IFtdLCBEOiBbXSwgRTogW10sIEY6IFtdIH0sIGN1cnJlbnQ6ICdhYmF0aHVyJyB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBsYWNlZENvbW1hbmRlcnModGllcnM6IEJvYXJkKTogU2V0PENvbW1hbmRlcj4ge1xuICAgIHJldHVybiBuZXcgU2V0KFRJRVJTLmZsYXRNYXAodGllciA9PiB0aWVyc1t0aWVyXSkpO1xufVxuXG4vKiogYGJlZm9yZWAgaWRlbnRpZmllcyBhbiBleGlzdGluZyBwb3J0cmFpdCwgc28gcmVtb3ZpbmcgdGhlIHNvdXJjZSBjYW5ub3Qgc2hpZnQgdGhlIGluc2VydGlvbiBpbmRleC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtb3ZlQ29tbWFuZGVyKHN0YXRlOiBSYW5raW5nLCBpZDogQ29tbWFuZGVyLCB0aWVyOiBUaWVyIHwgbnVsbCwgYmVmb3JlPzogQ29tbWFuZGVyKTogUmFua2luZyB7XG4gICAgaWYgKGJlZm9yZSA9PT0gaWQpIHJldHVybiBzdGF0ZTtcbiAgICBjb25zdCB0aWVycyA9IE9iamVjdC5mcm9tRW50cmllcyhUSUVSUy5tYXAoa2V5ID0+IFtrZXksIHN0YXRlLnRpZXJzW2tleV0uZmlsdGVyKGMgPT4gYyAhPT0gaWQpXSkpIGFzIEJvYXJkO1xuICAgIGlmICh0aWVyID09PSBudWxsKSByZXR1cm4geyB0aWVycywgY3VycmVudDogaWQgfTtcbiAgICBjb25zdCBpbmRleCA9IGJlZm9yZSA/IHRpZXJzW3RpZXJdLmluZGV4T2YoYmVmb3JlKSA6IC0xO1xuICAgIHRpZXJzW3RpZXJdLnNwbGljZShpbmRleCA8IDAgPyB0aWVyc1t0aWVyXS5sZW5ndGggOiBpbmRleCwgMCwgaWQpO1xuICAgIGxldCBjdXJyZW50ID0gc3RhdGUuY3VycmVudDtcbiAgICBpZiAoY3VycmVudCA9PT0gaWQpIHtcbiAgICAgICAgY29uc3QgcGxhY2VkID0gcGxhY2VkQ29tbWFuZGVycyh0aWVycyk7XG4gICAgICAgIGNvbnN0IG9mZnNldCA9IENPTU1BTkRFUlMuaW5kZXhPZihpZCkgKyAxO1xuICAgICAgICBjdXJyZW50ID0gWy4uLkNPTU1BTkRFUlMuc2xpY2Uob2Zmc2V0KSwgLi4uQ09NTUFOREVSUy5zbGljZSgwLCBvZmZzZXQpXVxuICAgICAgICAgICAgLmZpbmQoY29tbWFuZGVyID0+ICFwbGFjZWQuaGFzKGNvbW1hbmRlcikpID8/IG51bGw7XG4gICAgfVxuICAgIHJldHVybiB7IHRpZXJzLCBjdXJyZW50IH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBicnV0YWxMZXZlbCh0b3RhbDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAodG90YWwgPT09IDApIHJldHVybiAwO1xuICAgIHJldHVybiBbNiwgOCwgMTAsIDE0LCAxOV0uZmluZEluZGV4KGxpbWl0ID0+IHRvdGFsIDw9IGxpbWl0KSArIDEgfHwgNjtcbn1cbiIsCiAgICAiaW1wb3J0e29wdGlvbnMgYXMgcixGcmFnbWVudCBhcyBlfWZyb21cInByZWFjdFwiO2V4cG9ydHtGcmFnbWVudH1mcm9tXCJwcmVhY3RcIjt2YXIgdD0vW1wiJjxdLztmdW5jdGlvbiBuKHIpe2lmKDA9PT1yLmxlbmd0aHx8ITE9PT10LnRlc3QocikpcmV0dXJuIHI7Zm9yKHZhciBlPTAsbj0wLG89XCJcIixmPVwiXCI7bjxyLmxlbmd0aDtuKyspe3N3aXRjaChyLmNoYXJDb2RlQXQobikpe2Nhc2UgMzQ6Zj1cIiZxdW90O1wiO2JyZWFrO2Nhc2UgMzg6Zj1cIiZhbXA7XCI7YnJlYWs7Y2FzZSA2MDpmPVwiJmx0O1wiO2JyZWFrO2RlZmF1bHQ6Y29udGludWV9biE9PWUmJihvKz1yLnNsaWNlKGUsbikpLG8rPWYsZT1uKzF9cmV0dXJuIG4hPT1lJiYobys9ci5zbGljZShlLG4pKSxvfXZhciBvPS9hY2l0fGV4KD86c3xnfG58cHwkKXxycGh8Z3JpZHxvd3N8bW5jfG50d3xpbmVbY2hdfHpvb3xeb3JkfGl0ZXJhL2ksZj0wLGk9QXJyYXkuaXNBcnJheTtmdW5jdGlvbiB1KGUsdCxuLG8saSx1KXt0fHwodD17fSk7dmFyIGEsYyxwPXQ7aWYoXCJyZWZcImluIHApZm9yKGMgaW4gcD17fSx0KVwicmVmXCI9PWM/YT10W2NdOnBbY109dFtjXTt2YXIgbD17dHlwZTplLHByb3BzOnAsa2V5Om4scmVmOmEsX19rOm51bGwsX186bnVsbCxfX2I6MCxfX2U6bnVsbCxfX2M6bnVsbCxjb25zdHJ1Y3Rvcjp2b2lkIDAsX192Oi0tZixfX2k6LTEsX191OjAsX19zb3VyY2U6aSxfX3NlbGY6dX07aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmKGE9ZS5kZWZhdWx0UHJvcHMpKWZvcihjIGluIGEpdm9pZCAwPT09cFtjXSYmKHBbY109YVtjXSk7cmV0dXJuIHIudm5vZGUmJnIudm5vZGUobCksbH1mdW5jdGlvbiBhKHIpe3ZhciB0PXUoZSx7dHBsOnIsZXhwcnM6W10uc2xpY2UuY2FsbChhcmd1bWVudHMsMSl9KTtyZXR1cm4gdC5rZXk9dC5fX3YsdH12YXIgYz17fSxwPS9bQS1aXS9nO2Z1bmN0aW9uIGwoZSx0KXtpZihyLmF0dHIpe3ZhciBmPXIuYXR0cihlLHQpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBmKXJldHVybiBmfWlmKHQ9ZnVuY3Rpb24ocil7cmV0dXJuIG51bGwhPT1yJiZcIm9iamVjdFwiPT10eXBlb2YgciYmXCJmdW5jdGlvblwiPT10eXBlb2Ygci52YWx1ZU9mP3IudmFsdWVPZigpOnJ9KHQpLFwicmVmXCI9PT1lfHxcImtleVwiPT09ZSlyZXR1cm5cIlwiO2lmKFwic3R5bGVcIj09PWUmJlwib2JqZWN0XCI9PXR5cGVvZiB0KXt2YXIgaT1cIlwiO2Zvcih2YXIgdSBpbiB0KXt2YXIgYT10W3VdO2lmKG51bGwhPWEmJlwiXCIhPT1hKXt2YXIgbD1cIi1cIj09dVswXT91OmNbdV18fChjW3VdPXUucmVwbGFjZShwLFwiLSQmXCIpLnRvTG93ZXJDYXNlKCkpLHM9XCI7XCI7XCJudW1iZXJcIiE9dHlwZW9mIGF8fGwuc3RhcnRzV2l0aChcIi0tXCIpfHxvLnRlc3QobCl8fChzPVwicHg7XCIpLGk9aStsK1wiOlwiK2Erc319cmV0dXJuIGUrJz1cIicrbihpKSsnXCInfXJldHVybiBudWxsPT10fHwhMT09PXR8fFwiZnVuY3Rpb25cIj09dHlwZW9mIHR8fFwib2JqZWN0XCI9PXR5cGVvZiB0P1wiXCI6ITA9PT10P2U6ZSsnPVwiJytuKFwiXCIrdCkrJ1wiJ31mdW5jdGlvbiBzKHIpe2lmKG51bGw9PXJ8fFwiYm9vbGVhblwiPT10eXBlb2Ygcnx8XCJmdW5jdGlvblwiPT10eXBlb2YgcilyZXR1cm4gbnVsbDtpZihcIm9iamVjdFwiPT10eXBlb2Ygcil7aWYodm9pZCAwPT09ci5jb25zdHJ1Y3RvcilyZXR1cm4gcjtpZihpKHIpKXtmb3IodmFyIGU9MDtlPHIubGVuZ3RoO2UrKylyW2VdPXMocltlXSk7cmV0dXJuIHJ9fXJldHVybiBuKFwiXCIrcil9ZXhwb3J0e3UgYXMganN4LGwgYXMganN4QXR0cix1IGFzIGpzeERFVixzIGFzIGpzeEVzY2FwZSxhIGFzIGpzeFRlbXBsYXRlLHUgYXMganN4c307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1qc3hSdW50aW1lLm1vZHVsZS5qcy5tYXBcbiIsCiAgICAiLyoqIEBqc3hJbXBvcnRTb3VyY2UgcHJlYWN0ICovXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBGcmFnbWVudCwgcmVuZGVyIH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZUxheW91dEVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3ByZWFjdC9ob29rcyc7XG5pbXBvcnQgeyBDdXJzb3IsIERyYWdEcm9wTWFuYWdlciwgRHJhZ2dhYmxlLCBEcm9wcGFibGUsIFBvaW50ZXJBY3RpdmF0aW9uQ29uc3RyYWludHMsIFBvaW50ZXJTZW5zb3IsIFByZXZlbnRTZWxlY3Rpb24gfSBmcm9tICdAZG5kLWtpdC9kb20nO1xuaW1wb3J0IHR5cGUgeyBEcmFnTW92ZUV2ZW50LCBEcmFnT3ZlckV2ZW50IH0gZnJvbSAnQGRuZC1raXQvZG9tJztcbmltcG9ydCB7IERPTVJlY3RhbmdsZSB9IGZyb20gJ0BkbmQta2l0L2RvbS91dGlsaXRpZXMnO1xuaW1wb3J0IHsgZWZmZWN0IH0gZnJvbSAnQGRuZC1raXQvc3RhdGUnO1xuaW1wb3J0IHsgcG9pbnRlckludGVyc2VjdGlvbiB9IGZyb20gJ0BkbmQta2l0L2NvbGxpc2lvbic7XG5pbXBvcnQgeyBDT01NQU5ERVJTLCBUSUVSUywgYnJ1dGFsTGV2ZWwsIGNvbW1hbmRlck5hbWUsIGVtcHR5UmFua2luZywgaXNDb21tYW5kZXIsIG1vdmVDb21tYW5kZXIsIHBsYWNlZENvbW1hbmRlcnMgfSBmcm9tICcuL3RpZXJtYWtlci1zdGF0ZSc7XG5pbXBvcnQgdHlwZSB7IENvbW1hbmRlciwgUmFua2luZywgVGllciB9IGZyb20gJy4vdGllcm1ha2VyLXN0YXRlJztcblxuaW50ZXJmYWNlIE11dGF0aW9uIHtcbiAgICBtdXRhdGlvbmlkOiBudW1iZXI7XG4gICAgbXV0YXRpb246IHN0cmluZztcbiAgICBtYXA6IHN0cmluZztcbiAgICBtdXQwMTogc3RyaW5nIHwgbnVsbDtcbiAgICBtdXQwMjogc3RyaW5nIHwgbnVsbDtcbiAgICBtdXQwMzogc3RyaW5nIHwgbnVsbDtcbn1cbmludGVyZmFjZSBNdXRhdG9yIHsgbXV0YXRvcmlkOiBzdHJpbmc7IG11dGF0b3JuYW1lOiBzdHJpbmc7IG11dGF0b3JkZXNjcmlwdGlvbjogc3RyaW5nOyBhYm9taW5hdGlvbjogbnVtYmVyIH1cbmludGVyZmFjZSBQYWdlRGF0YSB7XG4gICAgbXV0YXRpb25zOiBNdXRhdGlvbltdO1xuICAgIG11dGF0b3JzOiBSZWNvcmQ8c3RyaW5nLCBNdXRhdG9yPjtcbiAgICBwcmVzdGlnZU5hbWVzOiBSZWNvcmQ8Q29tbWFuZGVyLCBbc3RyaW5nLCBzdHJpbmcsIHN0cmluZywgc3RyaW5nXT47XG59XG5kZWNsYXJlIGdsb2JhbCB7IGludGVyZmFjZSBXaW5kb3cgeyB0aWVybWFrZXJEYXRhOiBQYWdlRGF0YSB9IH1cbnR5cGUgUHJlc3RpZ2UgPSAwIHwgMSB8IDIgfCAzO1xudHlwZSBQcmVzdGlnZXMgPSBQYXJ0aWFsPFJlY29yZDxDb21tYW5kZXIsIFByZXN0aWdlPj47XG5jb25zdCBQcmVzdGlnZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0PFByZXN0aWdlcz4oe30pO1xuaW50ZXJmYWNlIERyb3BPcmlnaW4geyBmcm9tOiBET01SZWN0OyBwcmVzdGlnZTogUHJlc3RpZ2UgfVxudHlwZSBNb3ZlID0gKGlkOiBDb21tYW5kZXIsIHRpZXI6IFRpZXIgfCBudWxsLCBiZWZvcmU/OiBDb21tYW5kZXIsIG9yaWdpbj86IERyb3BPcmlnaW4pID0+IHZvaWQ7XG5jb25zdCBwb3J0cmFpdCA9IChpZDogQ29tbWFuZGVyKSA9PiBgL2ltYWdlcy9jb21tYW5kZXJwb3J0cmFpdHMvJHtpZH1wb3J0cmFpdC5wbmdgO1xuY29uc3QgcmVkdWNlZE1vdGlvbiA9ICgpID0+IHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKScpLm1hdGNoZXM7XG5jb25zdCBEcmFnQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8RHJhZ0Ryb3BNYW5hZ2VyIHwgbnVsbD4obnVsbCk7XG5jb25zdCBtaXNzaW9uQmFja2dyb3VuZHM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gICAgJ0NoYWluIG9mIEFzY2Vuc2lvbic6ICdjaGFpbm9mYXNjZW5zaW9uLmpwZycsXG4gICAgJ0NyYWRsZSBvZiBEZWF0aCc6ICdjcmFkbGVvZmRlYXRoLnBuZycsXG4gICAgJ0RlYWQgb2YgTmlnaHQnOiAnZGVhZG9mbmlnaHQuanBnJyxcbiAgICAnTG9jayBMb2FkJzogJ2xvY2tsb2FkLmpwZycsXG4gICAgJ01hbHdhcmZhcmUnOiAnbWFsd2FyZmFyZS5qcGcnLFxuICAgICdNaW5lciBFdmFjdWF0aW9uJzogJ21pbmVyZXZhY3VhdGlvbi5wbmcnLFxuICAgICdNaXN0IE9wcG9ydHVuaXRpZXMnOiAnbWlzdG9wcG9ydHVuaXRpZXMuanBnJyxcbiAgICAnT2JsaXZpb24gRXhwcmVzcyc6ICdvYmxpdmlvbmV4cHJlc3MuanBnJyxcbiAgICAnUGFydCBhbmQgUGFyY2VsJzogJ3BhcnRwYXJjZWwuanBnJyxcbiAgICAnUmlmdHMgdG8gS29yaGFsJzogJ3JpZnRzdG9rb3JoYWwuanBnJyxcbiAgICAnU2N5dGhlIG9mIEFtb24nOiAnc2N5dGhlb2ZhbW9uLmpwZycsXG4gICAgJ1RlbXBsZSBvZiB0aGUgUGFzdCc6ICd0ZW1wbGVvZnRoZXBhc3QuanBnJyxcbiAgICAnVGhlIFZlcm1pbGxpb24gUHJvYmxlbSc6ICd0aGV2ZXJtaWxsaW9ucHJvYmxlbS5wbmcnLFxuICAgICdWb2lkIExhdW5jaCc6ICd2b2lkbGF1bmNoLmpwZycsXG4gICAgJ1ZvaWQgVGhyYXNoaW5nJzogJ3ZvaWR0aHJhc2hpbmcuanBnJyxcbn07XG5cbmZ1bmN0aW9uIFByZXN0aWdlQmFkZ2UoeyB2YWx1ZSwgc2hvd1ByZWZpeCA9IGZhbHNlIH06IHsgdmFsdWU6IFByZXN0aWdlOyBzaG93UHJlZml4PzogYm9vbGVhbiB9KSB7XG4gICAgcmV0dXJuIHZhbHVlID8gPHNwYW4gY2xhc3M9XCJwcmVzdGlnZS1iYWRnZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPntzaG93UHJlZml4ID8gYFAke3ZhbHVlfWAgOiB2YWx1ZX08L3NwYW4+IDogbnVsbDtcbn1cblxuZnVuY3Rpb24gcG9ydHJhaXRQcmV2aWV3KGlkOiBDb21tYW5kZXIsIHByZXN0aWdlOiBQcmVzdGlnZSwgc2l6ZTogbnVtYmVyKSB7XG4gICAgY29uc3QgcHJldmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByZXZpZXcuY2xhc3NOYW1lID0gJ2NvbW1hbmRlci1wcmV2aWV3JztcbiAgICBwcmV2aWV3LnN0eWxlLndpZHRoID0gcHJldmlldy5zdHlsZS5oZWlnaHQgPSBgJHtzaXplfXB4YDtcbiAgICBwcmV2aWV3LnN0eWxlLmZvbnRTaXplID0gYCR7c2l6ZSAqIDI4IC8gNjR9cHhgO1xuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2Uuc3JjID0gcG9ydHJhaXQoaWQpO1xuICAgIGltYWdlLmFsdCA9ICcnO1xuICAgIHByZXZpZXcuYXBwZW5kKGltYWdlKTtcbiAgICBpZiAocHJlc3RpZ2UpIHtcbiAgICAgICAgY29uc3QgYmFkZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGJhZGdlLmNsYXNzTmFtZSA9ICdwcmVzdGlnZS1iYWRnZSc7XG4gICAgICAgIGJhZGdlLnRleHRDb250ZW50ID0gU3RyaW5nKHByZXN0aWdlKTtcbiAgICAgICAgcHJldmlldy5hcHBlbmQoYmFkZ2UpO1xuICAgIH1cbiAgICByZXR1cm4gcHJldmlldztcbn1cblxuZnVuY3Rpb24gdXNlQ29tbWFuZGVyRHJhZyhpZDogQ29tbWFuZGVyLCBsb2NhdGlvbjogc3RyaW5nLCBjYW5EcmFnOiAoKSA9PiBib29sZWFuKSB7XG4gICAgY29uc3QgbWFuYWdlciA9IHVzZUNvbnRleHQoRHJhZ0NvbnRleHQpITtcbiAgICBjb25zdCBwcmVzdGlnZSA9IHVzZUNvbnRleHQoUHJlc3RpZ2VDb250ZXh0KVtpZF0gPz8gMDtcbiAgICBjb25zdCByZWYgPSB1c2VSZWY8SFRNTEJ1dHRvbkVsZW1lbnQ+KG51bGwpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRyYWdnYWJsZSA9IG5ldyBEcmFnZ2FibGUoe1xuICAgICAgICAgICAgaWQ6IGAke2xvY2F0aW9ufS0ke2lkfWAsXG4gICAgICAgICAgICBlbGVtZW50OiByZWYuY3VycmVudCEsXG4gICAgICAgICAgICBkYXRhOiB7IGNvbW1hbmRlcjogaWQsIHByZXN0aWdlIH0sXG4gICAgICAgIH0sIG1hbmFnZXIpO1xuICAgICAgICBjb25zdCBjbGVhbnVwID0gbWFuYWdlci5tb25pdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZWRyYWdzdGFydCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5vcGVyYXRpb24uc291cmNlID09PSBkcmFnZ2FibGUgJiYgIWNhbkRyYWcoKSkgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAoKSA9PiB7IGNsZWFudXAoKTsgZHJhZ2dhYmxlLmRlc3Ryb3koKTsgfTtcbiAgICB9LCBbbWFuYWdlciwgaWQsIGxvY2F0aW9uLCBjYW5EcmFnLCBwcmVzdGlnZV0pO1xuICAgIHJldHVybiByZWY7XG59XG5cbmZ1bmN0aW9uIHVzZUNvbW1hbmRlckRyb3A8VCBleHRlbmRzIEhUTUxFbGVtZW50Pih0aWVyOiBUaWVyIHwgbnVsbCwgb25Nb3ZlOiBNb3ZlKSB7XG4gICAgY29uc3QgbWFuYWdlciA9IHVzZUNvbnRleHQoRHJhZ0NvbnRleHQpITtcbiAgICBjb25zdCByZWYgPSB1c2VSZWY8VD4obnVsbCk7XG4gICAgY29uc3QgW2hvdmVyLCBzZXRIb3Zlcl0gPSB1c2VTdGF0ZTx7IGJlZm9yZT86IENvbW1hbmRlciB9IHwgbnVsbD4obnVsbCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHJlZi5jdXJyZW50ITtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gbmV3IERyb3BwYWJsZSh7IGlkOiB0aWVyID8/ICdwb29sJywgZWxlbWVudCwgY29sbGlzaW9uRGV0ZWN0b3I6IHBvaW50ZXJJbnRlcnNlY3Rpb24gfSwgbWFuYWdlcik7XG4gICAgICAgIGNvbnN0IGJlZm9yZUF0ID0gKGlkOiBDb21tYW5kZXIsIHg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgLy8gS2VlcCB0aGUgaW5zZXJ0aW9uIHBvc2l0aW9uIHN0YWJsZSB3aGlsZSB0aGUgcG9pbnRlciBpcyBpbnNpZGUgaXRzIHBsYWNlaG9sZGVyLlxuICAgICAgICAgICAgY29uc3QgcGxhY2Vob2xkZXIgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcuY29tbWFuZGVyLWRyb3AtcGxhY2Vob2xkZXInKTtcbiAgICAgICAgICAgIGlmIChwbGFjZWhvbGRlcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBwbGFjZWhvbGRlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgICBpZiAoeCA+PSByZWN0LmxlZnQgJiYgeCA8PSByZWN0LnJpZ2h0KSByZXR1cm4gcGxhY2Vob2xkZXIuZGF0YXNldC5iZWZvcmUgYXMgQ29tbWFuZGVyIHwgdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUmVjdGFuZ2xlcyBhbmQgcG9pbnRlciBjb29yZGluYXRlcyBib3RoIGluY2x1ZGUgdGhlIGNhbnZhcyB6b29tLlxuICAgICAgICAgICAgY29uc3QgbmV4dCA9IFsuLi5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCdbZGF0YS10aWVyLXBvcnRyYWl0XScpXVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtLmRhdGFzZXQudGllclBvcnRyYWl0ICE9PSBpZClcbiAgICAgICAgICAgICAgICAuZmluZChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVjdCA9IGl0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB4IDwgcmVjdC5sZWZ0ICsgcmVjdC53aWR0aCAvIDI7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gbmV4dD8uZGF0YXNldC50aWVyUG9ydHJhaXQgYXMgQ29tbWFuZGVyIHwgdW5kZWZpbmVkO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCB1cGRhdGUgPSAoZXZlbnQ6IERyYWdNb3ZlRXZlbnQgfCBEcmFnT3ZlckV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IG9wZXJhdGlvbiB9ID0gZXZlbnQ7XG4gICAgICAgICAgICBjb25zdCBpZCA9IG9wZXJhdGlvbi5zb3VyY2U/LmRhdGEuY29tbWFuZGVyO1xuICAgICAgICAgICAgaWYgKG9wZXJhdGlvbi50YXJnZXQgIT09IHRhcmdldCB8fCAhaXNDb21tYW5kZXIoaWQpKSB7IHNldEhvdmVyKG51bGwpOyByZXR1cm47IH1cbiAgICAgICAgICAgIGNvbnN0IHBvaW50ID0gJ3RvJyBpbiBldmVudCAmJiBldmVudC50byA/IGV2ZW50LnRvIDogb3BlcmF0aW9uLnBvc2l0aW9uLmN1cnJlbnQ7XG4gICAgICAgICAgICBjb25zdCBiZWZvcmUgPSBiZWZvcmVBdChpZCwgcG9pbnQueCk7XG4gICAgICAgICAgICBzZXRIb3ZlcihwcmV2aW91cyA9PiBwcmV2aW91cyAmJiBwcmV2aW91cy5iZWZvcmUgPT09IGJlZm9yZSA/IHByZXZpb3VzIDogeyBiZWZvcmUgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGNsZWFudXBzID0gW1xuICAgICAgICAgICAgbWFuYWdlci5tb25pdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdtb3ZlJywgdXBkYXRlKSxcbiAgICAgICAgICAgIG1hbmFnZXIubW9uaXRvci5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHVwZGF0ZSksXG4gICAgICAgICAgICBtYW5hZ2VyLm1vbml0b3IuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsICh7IG9wZXJhdGlvbiwgY2FuY2VsZWQgfSkgPT4ge1xuICAgICAgICAgICAgICAgIHNldEhvdmVyKG51bGwpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gb3BlcmF0aW9uLnNvdXJjZT8uZGF0YS5jb21tYW5kZXI7XG4gICAgICAgICAgICAgICAgaWYgKCFjYW5jZWxlZCAmJiBvcGVyYXRpb24udGFyZ2V0ID09PSB0YXJnZXQgJiYgaXNDb21tYW5kZXIoaWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByZXZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLmRyYWdnaW5nLWNvbW1hbmRlcicpO1xuICAgICAgICAgICAgICAgICAgICBvbk1vdmUoaWQsIHRpZXIsIGJlZm9yZUF0KGlkLCBvcGVyYXRpb24ucG9zaXRpb24uY3VycmVudC54KSwgcHJldmlldyA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb206IHByZXZpZXcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzdGlnZTogb3BlcmF0aW9uLnNvdXJjZSEuZGF0YS5wcmVzdGlnZSBhcyBQcmVzdGlnZSxcbiAgICAgICAgICAgICAgICAgICAgfSA6IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgIF07XG4gICAgICAgIHJldHVybiAoKSA9PiB7IGNsZWFudXBzLmZvckVhY2goY2xlYW51cCA9PiBjbGVhbnVwKCkpOyB0YXJnZXQuZGVzdHJveSgpOyB9O1xuICAgIH0sIFttYW5hZ2VyLCB0aWVyLCBvbk1vdmVdKTtcbiAgICByZXR1cm4geyByZWYsIGhvdmVyIH07XG59XG5cbmZ1bmN0aW9uIHVzZUNvbW1hbmRlckRyYWdNYW5hZ2VyKCkge1xuICAgIGNvbnN0IFttYW5hZ2VyXSA9IHVzZVN0YXRlKCgpID0+IG5ldyBEcmFnRHJvcE1hbmFnZXIoe1xuICAgICAgICBzZW5zb3JzOiBbUG9pbnRlclNlbnNvci5jb25maWd1cmUoe1xuICAgICAgICAgICAgYWN0aXZhdGlvbkNvbnN0cmFpbnRzOiBbbmV3IFBvaW50ZXJBY3RpdmF0aW9uQ29uc3RyYWludHMuRGlzdGFuY2UoeyB2YWx1ZTogNSB9KV0sXG4gICAgICAgIH0pXSxcbiAgICAgICAgLy8gUHJlYWN0IG93bnMgdGhlIHNvdXJjZSBlbGVtZW50czsgdGhlIHByZXZpZXcgaXMgYSBzZXBhcmF0ZSBjaXJjdWxhciBwb3J0cmFpdC5cbiAgICAgICAgLy8gS2V5Ym9hcmQgdXNlcnMgc2VsZWN0IGEgcG9ydHJhaXQgYW5kIGFjdGl2YXRlIGEgdGllciBidXR0b24sIG9yIERlbGV0ZSB0byB1bnJhbmsuXG4gICAgICAgIHBsdWdpbnM6IFtDdXJzb3IsIFByZXZlbnRTZWxlY3Rpb25dLFxuICAgIH0pKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsZXQgcHJldmlldzogSFRNTERpdkVsZW1lbnQgfCB1bmRlZmluZWQ7XG4gICAgICAgIGxldCBsaWZ0ZWRQb3J0cmFpdDogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbDtcbiAgICAgICAgbGV0IGxpZnRlZEJhbm5lcjogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbDtcbiAgICAgICAgbGV0IGxpZnRlZFBvb2xQb3J0cmFpdDogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbDtcbiAgICAgICAgY29uc3QgY2xlYXJQcmV2aWV3ID0gKCkgPT4ge1xuICAgICAgICAgICAgcHJldmlldz8ucmVtb3ZlKCk7XG4gICAgICAgICAgICBwcmV2aWV3ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgbGlmdGVkUG9ydHJhaXQ/LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1kcmFnZ2luZycpO1xuICAgICAgICAgICAgbGlmdGVkUG9ydHJhaXQgPSBudWxsO1xuICAgICAgICAgICAgbGlmdGVkQmFubmVyPy5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtZHJhZ2dpbmcnKTtcbiAgICAgICAgICAgIGxpZnRlZEJhbm5lciA9IG51bGw7XG4gICAgICAgICAgICBsaWZ0ZWRQb29sUG9ydHJhaXQ/LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1kcmFnZ2luZycpO1xuICAgICAgICAgICAgbGlmdGVkUG9vbFBvcnRyYWl0ID0gbnVsbDtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcG9zaXRpb25QcmV2aWV3ID0gKHsgeCwgeSB9OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0pID0+IHtcbiAgICAgICAgICAgIGlmIChwcmV2aWV3KSBwcmV2aWV3LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHt4fXB4LCAke3l9cHgpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKWA7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGNsZWFudXBzID0gW1xuICAgICAgICAgICAgbWFuYWdlci5tb25pdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsICh7IG9wZXJhdGlvbiB9KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSBvcGVyYXRpb24uc291cmNlPy5kYXRhLmNvbW1hbmRlcjtcbiAgICAgICAgICAgICAgICBpZiAoIWlzQ29tbWFuZGVyKGlkKSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIC8vIEtlZXAgdGhlIGRyYWdnYWJsZSBtb3VudGVkLCBidXQgbGV0IHRoZSBvdGhlciBwb3J0cmFpdHMgY2xvc2UgaXRzIHNsb3QuXG4gICAgICAgICAgICAgICAgbGlmdGVkUG9ydHJhaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihgW2RhdGEtdGllci1wb3J0cmFpdD1cIiR7aWR9XCJdYCk7XG4gICAgICAgICAgICAgICAgbGlmdGVkUG9ydHJhaXQ/LnNldEF0dHJpYnV0ZSgnZGF0YS1kcmFnZ2luZycsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgbGlmdGVkQmFubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oYC5jb21tYW5kZXItYmFubmVyW2RhdGEtY29tbWFuZGVyPVwiJHtpZH1cIl1gKTtcbiAgICAgICAgICAgICAgICBsaWZ0ZWRCYW5uZXI/LnNldEF0dHJpYnV0ZSgnZGF0YS1kcmFnZ2luZycsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgbGlmdGVkUG9vbFBvcnRyYWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oYFtkYXRhLXBvb2wtcG9ydHJhaXQ9XCIke2lkfVwiXWApO1xuICAgICAgICAgICAgICAgIGxpZnRlZFBvb2xQb3J0cmFpdD8uc2V0QXR0cmlidXRlKCdkYXRhLWRyYWdnaW5nJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzY2FsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aWVybWFrZXInKSEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggLyAxOTIwO1xuICAgICAgICAgICAgICAgIHByZXZpZXcgPSBwb3J0cmFpdFByZXZpZXcoaWQsIG9wZXJhdGlvbi5zb3VyY2UhLmRhdGEucHJlc3RpZ2UgYXMgUHJlc3RpZ2UsIDY0ICogc2NhbGUpO1xuICAgICAgICAgICAgICAgIHByZXZpZXcuY2xhc3NMaXN0LmFkZCgnZHJhZ2dpbmctY29tbWFuZGVyJyk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQocHJldmlldyk7XG4gICAgICAgICAgICAgICAgcG9zaXRpb25QcmV2aWV3KG9wZXJhdGlvbi5wb3NpdGlvbi5jdXJyZW50KTtcbiAgICAgICAgICAgICAgICBtYW5hZ2VyLmRyYWdPcGVyYXRpb24uc2hhcGUgPSBuZXcgRE9NUmVjdGFuZ2xlKHByZXZpZXcpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBlZmZlY3QoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgcG9zaXRpb24sIHN0YXR1cyB9ID0gbWFuYWdlci5kcmFnT3BlcmF0aW9uO1xuICAgICAgICAgICAgICAgIGlmICghc3RhdHVzLmRyYWdnaW5nIHx8ICFwcmV2aWV3KSByZXR1cm47XG4gICAgICAgICAgICAgICAgcG9zaXRpb25QcmV2aWV3KHBvc2l0aW9uLmN1cnJlbnQpO1xuICAgICAgICAgICAgICAgIC8vIFVwZGF0aW5nIHRoZSBwcmV2aWV3IHNoYXBlIGFsc28gcmVmcmVzaGVzIHBvaW50ZXIgY29sbGlzaW9uIGRldGVjdGlvbi5cbiAgICAgICAgICAgICAgICBtYW5hZ2VyLmRyYWdPcGVyYXRpb24uc2hhcGUgPSBuZXcgRE9NUmVjdGFuZ2xlKHByZXZpZXcpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAvLyBEcm9wIGhhbmRsZXJzIG11c3QgcmVhZCB0aGUgaW5zZXJ0aW9uIHBvc2l0aW9uIGJlZm9yZSB0aGUgc291cmNlIHNsb3QgcmV0dXJucy5cbiAgICAgICAgICAgIG1hbmFnZXIubW9uaXRvci5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgKCkgPT4gcXVldWVNaWNyb3Rhc2soY2xlYXJQcmV2aWV3KSksXG4gICAgICAgIF07XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICghbWFuYWdlci5kcmFnT3BlcmF0aW9uLnN0YXR1cy5pZGxlKSBtYW5hZ2VyLmFjdGlvbnMuc3RvcCh7IGNhbmNlbGVkOiB0cnVlIH0pO1xuICAgICAgICB9O1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGNhbmNlbCk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBjYW5jZWwpO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgY2FuY2VsKCk7XG4gICAgICAgICAgICBjbGVhbnVwcy5mb3JFYWNoKGNsZWFudXAgPT4gY2xlYW51cCgpKTtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdibHVyJywgY2FuY2VsKTtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBjYW5jZWwpO1xuICAgICAgICAgICAgY2xlYXJQcmV2aWV3KCk7XG4gICAgICAgICAgICBtYW5hZ2VyLmRlc3Ryb3koKTtcbiAgICAgICAgfTtcbiAgICB9LCBbbWFuYWdlcl0pO1xuICAgIHJldHVybiBtYW5hZ2VyO1xufVxuXG5mdW5jdGlvbiBDb21tYW5kZXJQb3J0cmFpdCh7IGlkLCBsb2NhdGlvbiwgc2VsZWN0ZWQsIHBsYWNlZCwgYXJyaXZpbmcsIG9uU2VsZWN0LCBvblJldHVybiwgY2FuRHJhZyB9OiB7XG4gICAgaWQ6IENvbW1hbmRlcjsgbG9jYXRpb246ICdwb29sJyB8ICd0aWVyJzsgc2VsZWN0ZWQ/OiBib29sZWFuOyBwbGFjZWQ/OiBib29sZWFuO1xuICAgIGFycml2aW5nPzogYm9vbGVhbjsgb25TZWxlY3Q6IChpZDogQ29tbWFuZGVyKSA9PiB2b2lkO1xuICAgIG9uUmV0dXJuOiAoaWQ6IENvbW1hbmRlcikgPT4gdm9pZDsgY2FuRHJhZzogKCkgPT4gYm9vbGVhbjtcbn0pIHtcbiAgICBjb25zdCByZWYgPSB1c2VDb21tYW5kZXJEcmFnKGlkLCBsb2NhdGlvbiwgY2FuRHJhZyk7XG4gICAgY29uc3QgcHJlc3RpZ2UgPSB1c2VDb250ZXh0KFByZXN0aWdlQ29udGV4dClbaWRdID8/IDA7XG4gICAgcmV0dXJuIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHJlZj17cmVmfSBkYXRhLWNvbW1hbmRlcj17aWR9XG4gICAgICAgIGNsYXNzPXtgY29tbWFuZGVyLXBvcnRyYWl0ICR7c2VsZWN0ZWQgPyAnaXMtY3VycmVudCcgOiAnJ30gJHtwbGFjZWQgPyAnaXMtcGxhY2VkJyA6ICcnfSAke2Fycml2aW5nID8gJ2lzLWFycml2aW5nJyA6ICcnfWB9XG4gICAgICAgIGRhdGEtdGllci1wb3J0cmFpdD17bG9jYXRpb24gPT09ICd0aWVyJyA/IGlkIDogdW5kZWZpbmVkfVxuICAgICAgICBkYXRhLXBvb2wtcG9ydHJhaXQ9e2xvY2F0aW9uID09PSAncG9vbCcgPyBpZCA6IHVuZGVmaW5lZH1cbiAgICAgICAgYXJpYS1sYWJlbD17YFNlbGVjdCAke2NvbW1hbmRlck5hbWUoaWQpfSwgUCR7cHJlc3RpZ2V9JHtwbGFjZWQgPyAnLCByYW5rZWQnIDogJyd9YH1cbiAgICAgICAgYXJpYS1wcmVzc2VkPXtzZWxlY3RlZCA/PyBmYWxzZX1cbiAgICAgICAgb25DbGljaz17KCkgPT4gb25TZWxlY3QoaWQpfVxuICAgICAgICBvbktleURvd249e2V2ZW50ID0+IHtcbiAgICAgICAgICAgIGlmICgoZXZlbnQua2V5ID09PSAnRGVsZXRlJyB8fCBldmVudC5rZXkgPT09ICdCYWNrc3BhY2UnKSAmJiAocGxhY2VkIHx8IGxvY2F0aW9uID09PSAndGllcicpKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBvblJldHVybihpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH19PlxuICAgICAgICA8aW1nIHNyYz17cG9ydHJhaXQoaWQpfSBhbHQ9XCJcIiB3aWR0aD17bG9jYXRpb24gPT09ICdwb29sJyA/IDUwIDogNjR9IGhlaWdodD17bG9jYXRpb24gPT09ICdwb29sJyA/IDUwIDogNjR9IGRyYWdnYWJsZT17ZmFsc2V9IC8+XG4gICAgICAgIDxQcmVzdGlnZUJhZGdlIHZhbHVlPXtwcmVzdGlnZX0gLz5cbiAgICA8L2J1dHRvbj47XG59XG5cbmZ1bmN0aW9uIFRpZXJSb3coeyB0aWVyLCBjb21tYW5kZXJzLCBjdXJyZW50LCBwZW5kaW5nLCBvbk1vdmUsIG9uUGxhY2UsIG9uU2VsZWN0LCBvblJldHVybiwgY2FuRHJhZyB9OiB7XG4gICAgdGllcjogVGllcjsgY29tbWFuZGVyczogQ29tbWFuZGVyW107IGN1cnJlbnQ6IENvbW1hbmRlciB8IG51bGw7IHBlbmRpbmc6IENvbW1hbmRlciB8IG51bGw7XG4gICAgb25Nb3ZlOiBNb3ZlOyBvblBsYWNlOiAodGllcjogVGllcikgPT4gdm9pZDsgb25TZWxlY3Q6IChpZDogQ29tbWFuZGVyKSA9PiB2b2lkO1xuICAgIG9uUmV0dXJuOiAoaWQ6IENvbW1hbmRlcikgPT4gdm9pZDsgY2FuRHJhZzogKCkgPT4gYm9vbGVhbjtcbn0pIHtcbiAgICBjb25zdCB7IHJlZiwgaG92ZXIgfSA9IHVzZUNvbW1hbmRlckRyb3A8SFRNTFRhYmxlUm93RWxlbWVudD4odGllciwgb25Nb3ZlKTtcbiAgICByZXR1cm4gPHRyIHJlZj17cmVmfSBjbGFzcz17YHRpZXItJHt0aWVyLnRvTG93ZXJDYXNlKCl9ICR7aG92ZXIgPyAnaXMtZHJvcC10YXJnZXQnIDogJyd9YH0+XG4gICAgICAgIDx0aCBzY29wZT1cInJvd1wiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwidGllci1sYWJlbFwiIGRpc2FibGVkPXshY3VycmVudCB8fCAhIXBlbmRpbmd9XG4gICAgICAgICAgICBhcmlhLWxhYmVsPXtjdXJyZW50ID8gYFBsYWNlICR7Y29tbWFuZGVyTmFtZShjdXJyZW50KX0gaW4gJHt0aWVyfSB0aWVyYCA6IGAke3RpZXJ9IHRpZXJgfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25QbGFjZSh0aWVyKX0+e3RpZXJ9PC9idXR0b24+PC90aD5cbiAgICAgICAgPHRkPjxkaXYgY2xhc3M9XCJ0aWVyLWNvbW1hbmRlcnNcIj5cbiAgICAgICAgICAgIHtjb21tYW5kZXJzLm1hcChpZCA9PiA8RnJhZ21lbnQga2V5PXtpZH0+XG4gICAgICAgICAgICAgICAge2hvdmVyPy5iZWZvcmUgPT09IGlkICYmIDxzcGFuIGNsYXNzPVwiY29tbWFuZGVyLWRyb3AtcGxhY2Vob2xkZXJcIiBkYXRhLWJlZm9yZT17aWR9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+fVxuICAgICAgICAgICAgICAgIDxDb21tYW5kZXJQb3J0cmFpdCBpZD17aWR9IGxvY2F0aW9uPVwidGllclwiXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtpZCA9PT0gY3VycmVudH0gYXJyaXZpbmc9e2lkID09PSBwZW5kaW5nfVxuICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17b25TZWxlY3R9IG9uUmV0dXJuPXtvblJldHVybn0gY2FuRHJhZz17Y2FuRHJhZ30gLz5cbiAgICAgICAgICAgIDwvRnJhZ21lbnQ+KX1cbiAgICAgICAgICAgIHtob3ZlciAmJiAhaG92ZXIuYmVmb3JlICYmIDxzcGFuIGNsYXNzPVwiY29tbWFuZGVyLWRyb3AtcGxhY2Vob2xkZXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPn1cbiAgICAgICAgPC9kaXY+PC90ZD5cbiAgICA8L3RyPjtcbn1cblxuZnVuY3Rpb24gQ3VycmVudENvbW1hbmRlcih7IGlkLCBjYW5EcmFnLCBvblJldHVybiB9OiB7IGlkOiBDb21tYW5kZXI7IGNhbkRyYWc6ICgpID0+IGJvb2xlYW47IG9uUmV0dXJuOiAoaWQ6IENvbW1hbmRlcikgPT4gdm9pZCB9KSB7XG4gICAgY29uc3QgcmVmID0gdXNlQ29tbWFuZGVyRHJhZyhpZCwgJ2N1cnJlbnQnLCBjYW5EcmFnKTtcbiAgICBjb25zdCBwcmVzdGlnZSA9IHVzZUNvbnRleHQoUHJlc3RpZ2VDb250ZXh0KVtpZF0gPz8gMDtcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoIXJlZHVjZWRNb3Rpb24oKSkgcmVmLmN1cnJlbnQ/LmFuaW1hdGUoW3sgb3BhY2l0eTogMCB9LCB7IG9wYWNpdHk6IDEgfV0sIHsgZHVyYXRpb246IDE4MCB9KTtcbiAgICB9LCBbaWRdKTtcbiAgICByZXR1cm4gPGJ1dHRvbiByZWY9e3JlZn0gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY29tbWFuZGVyLWJhbm5lclwiIGRhdGEtY29tbWFuZGVyPXtpZH1cbiAgICAgICAgYXJpYS1sYWJlbD17YERyYWcgJHtjb21tYW5kZXJOYW1lKGlkKX0sIFAke3ByZXN0aWdlfSwgdG8gYSB0aWVyLCBvciBjaG9vc2UgYSB0aWVyIGxldHRlcmB9XG4gICAgICAgIG9uS2V5RG93bj17ZXZlbnQgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0RlbGV0ZScgfHwgZXZlbnQua2V5ID09PSAnQmFja3NwYWNlJykge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgb25SZXR1cm4oaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9fT5cbiAgICAgICAgPGltZyBzcmM9e2AvaW1hZ2VzL2N0Zy9jb21tYW5kZXJzLyR7aWR9LnBuZ2B9IGFsdD17Y29tbWFuZGVyTmFtZShpZCl9IHdpZHRoPVwiNTAwXCIgaGVpZ2h0PVwiOTRcIiBkcmFnZ2FibGU9e2ZhbHNlfSAvPlxuICAgICAgICA8UHJlc3RpZ2VCYWRnZSB2YWx1ZT17cHJlc3RpZ2V9IHNob3dQcmVmaXggLz5cbiAgICA8L2J1dHRvbj47XG59XG5cbmZ1bmN0aW9uIENvbW1hbmRlclBvb2woeyBjdXJyZW50LCBwbGFjZWQsIHBlbmRpbmcsIHJldHVybmluZywgb25Nb3ZlLCBvblNlbGVjdCwgb25SZXR1cm4sIGNhbkRyYWcgfToge1xuICAgIGN1cnJlbnQ6IENvbW1hbmRlciB8IG51bGw7IHBsYWNlZDogU2V0PENvbW1hbmRlcj47IHBlbmRpbmc6IENvbW1hbmRlciB8IG51bGw7XG4gICAgcmV0dXJuaW5nOiBDb21tYW5kZXIgfCBudWxsO1xuICAgIG9uTW92ZTogTW92ZTsgb25TZWxlY3Q6IChpZDogQ29tbWFuZGVyKSA9PiB2b2lkOyBvblJldHVybjogKGlkOiBDb21tYW5kZXIpID0+IHZvaWQ7IGNhbkRyYWc6ICgpID0+IGJvb2xlYW47XG59KSB7XG4gICAgY29uc3QgeyByZWYsIGhvdmVyIH0gPSB1c2VDb21tYW5kZXJEcm9wPEhUTUxEaXZFbGVtZW50PihudWxsLCBvbk1vdmUpO1xuICAgIHJldHVybiA8ZGl2IHJlZj17cmVmfSBjbGFzcz17YHBvb2wgJHtob3ZlciA/ICdpcy1kcm9wLXRhcmdldCcgOiAnJ31gfSByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiQ29tbWFuZGVycyDigJQgZHJvcCBoZXJlIHRvIHVucmFua1wiPlxuICAgICAgICB7Q09NTUFOREVSUy5tYXAoaWQgPT4gPENvbW1hbmRlclBvcnRyYWl0IGtleT17aWR9IGlkPXtpZH0gbG9jYXRpb249XCJwb29sXCJcbiAgICAgICAgICAgIHNlbGVjdGVkPXtpZCA9PT0gY3VycmVudH0gcGxhY2VkPXtwbGFjZWQuaGFzKGlkKSAmJiBpZCAhPT0gcGVuZGluZ30gYXJyaXZpbmc9e2lkID09PSByZXR1cm5pbmd9XG4gICAgICAgICAgICBvblNlbGVjdD17b25TZWxlY3R9IG9uUmV0dXJuPXtvblJldHVybn0gY2FuRHJhZz17Y2FuRHJhZ30gLz4pfVxuICAgIDwvZGl2Pjtcbn1cblxuZnVuY3Rpb24gTXV0YXRpb25Cb3goeyBkYXRhLCBtdXRhdGlvbiwgb25TZWxlY3QgfToge1xuICAgIGRhdGE6IFBhZ2VEYXRhOyBtdXRhdGlvbjogTXV0YXRpb24gfCB1bmRlZmluZWQ7IG9uU2VsZWN0OiAoaWQ6IHN0cmluZykgPT4gdm9pZDtcbn0pIHtcbiAgICBjb25zdCBtdXRhdG9ycyA9IFttdXRhdGlvbj8ubXV0MDEsIG11dGF0aW9uPy5tdXQwMiwgbXV0YXRpb24/Lm11dDAzXS5tYXAoaWQgPT4gaWQgPyBkYXRhLm11dGF0b3JzW2lkXSA6IHVuZGVmaW5lZCk7XG4gICAgY29uc3QgZGlmZmljdWx0eSA9IGJydXRhbExldmVsKG11dGF0b3JzLnJlZHVjZSgoc3VtLCBpdGVtKSA9PiBzdW0gKyBOdW1iZXIoaXRlbT8uYWJvbWluYXRpb24gPz8gMCksIDApKTtcbiAgICByZXR1cm4gPGRpdiBpZD1cImJveDFcIiBjbGFzcz1cImJveFwiPlxuICAgICAgICA8c2VsZWN0IGNsYXNzPVwibXV0YXRpb25cIiBhcmlhLWxhYmVsPVwiTXV0YXRpb25cIiB2YWx1ZT17bXV0YXRpb24/Lm11dGF0aW9uaWQgPz8gJyd9IG9uQ2hhbmdlPXtldmVudCA9PiBvblNlbGVjdChldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlKX0+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+KHNlbGVjdCBhIG11dGF0aW9uKTwvb3B0aW9uPlxuICAgICAgICAgICAge2RhdGEubXV0YXRpb25zLm1hcChpdGVtID0+IDxvcHRpb24ga2V5PXtpdGVtLm11dGF0aW9uaWR9IHZhbHVlPXtpdGVtLm11dGF0aW9uaWR9PntpdGVtLm11dGF0aW9ufTwvb3B0aW9uPil9XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPlxuICAgICAgICAgICAgPGltZyBrZXk9e211dGF0aW9uID8gJ21hcCcgOiAnZW1wdHktbWFwJ30gY2xhc3M9XCJtYXBcIiBzcmM9e211dGF0aW9uID8gYC9pbWFnZXMvY3RnLyR7bXV0YXRpb24ubWFwLnJlcGxhY2UoLyAvZywgJycpLnRvTG93ZXJDYXNlKCl9LnBuZ2AgOiB1bmRlZmluZWR9IHdpZHRoPVwiNDUwXCIgaGVpZ2h0PVwiNTBcIiBhbHQ9e211dGF0aW9uPy5tYXAgPz8gJyd9IC8+XG4gICAgICAgICAgICA8aW1nIGtleT17bXV0YXRpb24gPyAnZGlmZmljdWx0eScgOiAnZW1wdHktZGlmZmljdWx0eSd9IGNsYXNzPVwiZGlmZmljdWx0eVwiIHNyYz17bXV0YXRpb24gPyBgL2ltYWdlcy9jdGcvYnJ1dGFsJHtkaWZmaWN1bHR5fS5wbmdgIDogdW5kZWZpbmVkfSB3aWR0aD1cIjE3MFwiIGhlaWdodD1cIjUwXCIgYWx0PXttdXRhdGlvbiA/IGBCcnV0YWwke2RpZmZpY3VsdHkgPyBgKyR7ZGlmZmljdWx0eX1gIDogJyd9YCA6ICcnfSBzdHlsZT1cImZsb2F0OnJpZ2h0XCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHttdXRhdG9ycy5tYXAoKGl0ZW0sIGluZGV4KSA9PiA8ZGl2IGtleT17aW5kZXh9IGNsYXNzPVwibXV0ZGF0YVwiPlxuICAgICAgICAgICAgPGltZyBrZXk9e2l0ZW0gPyAnaWNvbicgOiAnZW1wdHktaWNvbid9IHNyYz17aXRlbSA/IGAvaW1hZ2VzL211dGF0b3JzLyR7aXRlbS5tdXRhdG9yaWR9LnBuZ2AgOiB1bmRlZmluZWR9IHdpZHRoPVwiNTBcIiBoZWlnaHQ9XCI1MFwiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICA8cD57aXRlbSAmJiA8PjxiIGNsYXNzPVwibXV0bmFtZVwiPntpdGVtLm11dGF0b3JuYW1lfTwvYj48YnIgLz48c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGl0ZW0ubXV0YXRvcmRlc2NyaXB0aW9uIH19IC8+PC8+fTwvcD5cbiAgICAgICAgPC9kaXY+KX1cbiAgICA8L2Rpdj47XG59XG5cbmludGVyZmFjZSBNZW51UG9zaXRpb24geyB4OiBudW1iZXI7IHk6IG51bWJlcjsgdHJpZ2dlcjogSFRNTEVsZW1lbnQ7IGNvbW1hbmRlcj86IENvbW1hbmRlciB9XG5pbnRlcmZhY2UgTWVudUl0ZW0geyBsYWJlbDogc3RyaW5nOyBkaXNhYmxlZD86IGJvb2xlYW47IGNoZWNrZWQ/OiBib29sZWFuOyBzZWxlY3Q6ICgpID0+IHZvaWQgfVxuZnVuY3Rpb24gQ29udGV4dE1lbnUoeyBwb3NpdGlvbiwgbGFiZWwsIGl0ZW1zLCBvbkNsb3NlIH06IHtcbiAgICBwb3NpdGlvbjogTWVudVBvc2l0aW9uOyBsYWJlbDogc3RyaW5nOyBpdGVtczogTWVudUl0ZW1bXTsgb25DbG9zZTogKCkgPT4gdm9pZDtcbn0pIHtcbiAgICBjb25zdCByZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1lbnUgPSByZWYuY3VycmVudCE7XG4gICAgICAgIGNvbnN0IGZyYW1lID0gbWVudS5wYXJlbnRFbGVtZW50ITtcbiAgICAgICAgY29uc3QgYm91bmRzID0gZnJhbWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IHNjYWxlID0gYm91bmRzLndpZHRoIC8gZnJhbWUub2Zmc2V0V2lkdGg7XG4gICAgICAgIGNvbnN0IHJlY3QgPSBtZW51LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAvLyBQb2ludGVyIGNvb3JkaW5hdGVzIGFuZCBtZWFzdXJlZCBib3VuZHMgYXJlIGluIHZpZXdwb3J0IHBpeGVsczsgdGhlIG1lbnUgdXNlcyBkZXNpZ24gcGl4ZWxzLlxuICAgICAgICBtZW51LnN0eWxlLmxlZnQgPSBgJHtNYXRoLm1heCg4LCBNYXRoLm1pbigocG9zaXRpb24ueCAtIGJvdW5kcy5sZWZ0KSAvIHNjYWxlLCAoYm91bmRzLndpZHRoIC0gcmVjdC53aWR0aCkgLyBzY2FsZSAtIDgpKX1weGA7XG4gICAgICAgIG1lbnUuc3R5bGUudG9wID0gYCR7TWF0aC5tYXgoOCwgTWF0aC5taW4oKHBvc2l0aW9uLnkgLSBib3VuZHMudG9wKSAvIHNjYWxlLCAoYm91bmRzLmhlaWdodCAtIHJlY3QuaGVpZ2h0KSAvIHNjYWxlIC0gOCkpfXB4YDtcbiAgICAgICAgKG1lbnUucXVlcnlTZWxlY3RvcjxIVE1MQnV0dG9uRWxlbWVudD4oJ1thcmlhLWNoZWNrZWQ9XCJ0cnVlXCJdJykgPz8gbWVudS5xdWVyeVNlbGVjdG9yPEhUTUxCdXR0b25FbGVtZW50PignYnV0dG9uOm5vdCg6ZGlzYWJsZWQpJykgPz8gbWVudSkuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xuICAgIH0sIFtwb3NpdGlvbl0pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG91dHNpZGUgPSAoZXZlbnQ6IFBvaW50ZXJFdmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZWYuY3VycmVudD8uY29udGFpbnMoZXZlbnQudGFyZ2V0IGFzIE5vZGUpKSBvbkNsb3NlKCk7XG4gICAgICAgIH07XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgb3V0c2lkZSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvbkNsb3NlKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBvbkNsb3NlKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgb3V0c2lkZSk7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25DbG9zZSk7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIG9uQ2xvc2UpO1xuICAgICAgICB9O1xuICAgIH0sIFtvbkNsb3NlXSk7XG4gICAgY29uc3QgZGlzbWlzcyA9ICgpID0+IHtcbiAgICAgICAgb25DbG9zZSgpO1xuICAgICAgICBwb3NpdGlvbi50cmlnZ2VyLmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KTtcbiAgICB9O1xuICAgIHJldHVybiA8ZGl2IHJlZj17cmVmfSBjbGFzcz1cInRpZXItbWVudVwiIHJvbGU9XCJtZW51XCIgYXJpYS1sYWJlbD17bGFiZWx9IHRhYkluZGV4PXstMX1cbiAgICAgICAgb25Db250ZXh0TWVudT17ZXZlbnQgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKX1cbiAgICAgICAgb25LZXlEb3duPXtldmVudCA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJyB8fCBldmVudC5rZXkgPT09ICdUYWInKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBkaXNtaXNzKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFsnQXJyb3dEb3duJywgJ0Fycm93VXAnLCAnSG9tZScsICdFbmQnXS5pbmNsdWRlcyhldmVudC5rZXkpKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtcyA9IFsuLi5yZWYuY3VycmVudCEucXVlcnlTZWxlY3RvckFsbDxIVE1MQnV0dG9uRWxlbWVudD4oJ2J1dHRvbjpub3QoOmRpc2FibGVkKScpXTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IGl0ZW1zLmluZGV4T2YoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBIVE1MQnV0dG9uRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dCA9IGV2ZW50LmtleSA9PT0gJ0hvbWUnID8gMCA6IGV2ZW50LmtleSA9PT0gJ0VuZCcgPyBpdGVtcy5sZW5ndGggLSAxXG4gICAgICAgICAgICAgICAgICAgIDogKGluZGV4ICsgKGV2ZW50LmtleSA9PT0gJ0Fycm93RG93bicgPyAxIDogLTEpICsgaXRlbXMubGVuZ3RoKSAlIGl0ZW1zLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBpdGVtc1tuZXh0XT8uZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9fT5cbiAgICAgICAge2l0ZW1zLm1hcChpdGVtID0+IDxidXR0b24ga2V5PXtpdGVtLmxhYmVsfSB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIHJvbGU9e2l0ZW0uY2hlY2tlZCA9PT0gdW5kZWZpbmVkID8gJ21lbnVpdGVtJyA6ICdtZW51aXRlbXJhZGlvJ30gYXJpYS1sYWJlbD17aXRlbS5sYWJlbH0gYXJpYS1jaGVja2VkPXtpdGVtLmNoZWNrZWR9XG4gICAgICAgICAgICBkaXNhYmxlZD17aXRlbS5kaXNhYmxlZH0gb25DbGljaz17KCkgPT4geyBpdGVtLnNlbGVjdCgpOyBkaXNtaXNzKCk7IH19PntpdGVtLmxhYmVsfTwvYnV0dG9uPil9XG4gICAgPC9kaXY+O1xufVxuXG5pbnRlcmZhY2UgRmxpZ2h0IGV4dGVuZHMgRHJvcE9yaWdpbiB7IGlkOiBDb21tYW5kZXI7IHRpZXI6IFRpZXIgfCBudWxsOyBkdXJhdGlvbjogbnVtYmVyOyBuZXh0Q3VycmVudDogQ29tbWFuZGVyIHwgbnVsbCB9XG5mdW5jdGlvbiBUaWVyTWFrZXIoeyBkYXRhIH06IHsgZGF0YTogUGFnZURhdGEgfSkge1xuICAgIGNvbnN0IG1hbmFnZXIgPSB1c2VDb21tYW5kZXJEcmFnTWFuYWdlcigpO1xuICAgIGNvbnN0IFtzZWxlY3RlZE11dGF0aW9uLCBzZXRTZWxlY3RlZE11dGF0aW9uXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBtdXRhdGlvbiA9IGRhdGEubXV0YXRpb25zLmZpbmQoaXRlbSA9PiBTdHJpbmcoaXRlbS5tdXRhdGlvbmlkKSA9PT0gc2VsZWN0ZWRNdXRhdGlvbik7XG4gICAgY29uc3QgYmFja2dyb3VuZCA9IG11dGF0aW9uICYmIG1pc3Npb25CYWNrZ3JvdW5kc1ttdXRhdGlvbi5tYXBdO1xuICAgIGNvbnN0IFtyYW5raW5nLCBzZXRSYW5raW5nXSA9IHVzZVN0YXRlKGVtcHR5UmFua2luZyk7XG4gICAgY29uc3QgW3BlbmRpbmcsIHNldFBlbmRpbmddID0gdXNlU3RhdGU8RmxpZ2h0IHwgbnVsbD4obnVsbCk7XG4gICAgY29uc3QgW2Fubm91bmNlbWVudCwgc2V0QW5ub3VuY2VtZW50XSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbdmlzaWJsZVRpZXJzLCBzZXRWaXNpYmxlVGllcnNdID0gdXNlU3RhdGU8VGllcltdPigoKSA9PiBUSUVSUy5maWx0ZXIodGllciA9PiB0aWVyICE9PSAnU1MnICYmIHRpZXIgIT09ICdTU1MnKSk7XG4gICAgY29uc3QgW3ByZXN0aWdlcywgc2V0UHJlc3RpZ2VzXSA9IHVzZVN0YXRlPFByZXN0aWdlcz4oe30pO1xuICAgIGNvbnN0IFttZW51LCBzZXRNZW51XSA9IHVzZVN0YXRlPE1lbnVQb3NpdGlvbiB8IG51bGw+KG51bGwpO1xuICAgIGNvbnN0IGNsb3NlTWVudSA9IHVzZUNhbGxiYWNrKCgpID0+IHNldE1lbnUobnVsbCksIFtdKTtcbiAgICBjb25zdCBsYXRlc3QgPSB1c2VSZWYocmFua2luZyk7XG4gICAgbGF0ZXN0LmN1cnJlbnQgPSByYW5raW5nO1xuICAgIGNvbnN0IGJ1c3kgPSB1c2VSZWYoZmFsc2UpO1xuICAgIGNvbnN0IGNhbkRyYWcgPSB1c2VDYWxsYmFjaygoKSA9PiAhYnVzeS5jdXJyZW50LCBbXSk7XG4gICAgY29uc3QgbW92ZSA9IHVzZUNhbGxiYWNrPE1vdmU+KChpZCwgdGllciwgYmVmb3JlLCBvcmlnaW4pID0+IHtcbiAgICAgICAgaWYgKGJ1c3kuY3VycmVudCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBuZXh0ID0gbW92ZUNvbW1hbmRlcihsYXRlc3QuY3VycmVudCwgaWQsIHRpZXIsIGJlZm9yZSk7XG4gICAgICAgIGlmIChvcmlnaW4gJiYgIXJlZHVjZWRNb3Rpb24oKSkge1xuICAgICAgICAgICAgYnVzeS5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIHNldFJhbmtpbmcoeyAuLi5uZXh0LCBjdXJyZW50OiBsYXRlc3QuY3VycmVudC5jdXJyZW50IH0pO1xuICAgICAgICAgICAgc2V0UGVuZGluZyh7IC4uLm9yaWdpbiwgaWQsIHRpZXIsIGR1cmF0aW9uOiAxODAsIG5leHRDdXJyZW50OiBuZXh0LmN1cnJlbnQgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRSYW5raW5nKG5leHQpO1xuICAgICAgICB9XG4gICAgICAgIHNldEFubm91bmNlbWVudChgJHtjb21tYW5kZXJOYW1lKGlkKX0gJHt0aWVyID8gYHBsYWNlZCBpbiAke3RpZXJ9IHRpZXJgIDogJ3JldHVybmVkIHRvIHRoZSBwb29sJ30uYCk7XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IHNlbGVjdCA9IHVzZUNhbGxiYWNrKChpZDogQ29tbWFuZGVyKSA9PiB7XG4gICAgICAgIGlmICghYnVzeS5jdXJyZW50KSBzZXRSYW5raW5nKHN0YXRlID0+ICh7IC4uLnN0YXRlLCBjdXJyZW50OiBpZCB9KSk7XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IHVucmFuayA9IHVzZUNhbGxiYWNrKChpZDogQ29tbWFuZGVyKSA9PiB7XG4gICAgICAgIGlmIChidXN5LmN1cnJlbnQpIHJldHVybjtcbiAgICAgICAgbW92ZShpZCwgbnVsbCk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxCdXR0b25FbGVtZW50PihgW2RhdGEtcG9vbC1wb3J0cmFpdD1cIiR7aWR9XCJdYCk/LmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KSk7XG4gICAgfSwgW21vdmVdKTtcbiAgICBjb25zdCBwbGFjZSA9IHVzZUNhbGxiYWNrKCh0aWVyOiBUaWVyKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRlID0gbGF0ZXN0LmN1cnJlbnQ7XG4gICAgICAgIGlmICghc3RhdGUuY3VycmVudCB8fCBidXN5LmN1cnJlbnQpIHJldHVybjtcbiAgICAgICAgY29uc3QgaWQgPSBzdGF0ZS5jdXJyZW50O1xuICAgICAgICBjb25zdCBvcmlnaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10aWVyLXBvcnRyYWl0PVwiJHtpZH1cIl1gKSA/PyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wb29sLXBvcnRyYWl0PVwiJHtpZH1cIl1gKTtcbiAgICAgICAgaWYgKCFvcmlnaW4gfHwgcmVkdWNlZE1vdGlvbigpKSB7IG1vdmUoaWQsIHRpZXIpOyByZXR1cm47IH1cbiAgICAgICAgY29uc3QgbmV4dCA9IG1vdmVDb21tYW5kZXIoc3RhdGUsIGlkLCB0aWVyKTtcbiAgICAgICAgYnVzeS5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgZnJvbSA9IG9yaWdpbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgc2V0UmFua2luZyh7IC4uLm5leHQsIGN1cnJlbnQ6IGlkIH0pO1xuICAgICAgICBzZXRQZW5kaW5nKHsgaWQsIHRpZXIsIGR1cmF0aW9uOiAzMjAsIHByZXN0aWdlOiBwcmVzdGlnZXNbaWRdID8/IDAsIGZyb20sIG5leHRDdXJyZW50OiBuZXh0LmN1cnJlbnQgfSk7XG4gICAgICAgIHNldEFubm91bmNlbWVudChgJHtjb21tYW5kZXJOYW1lKGlkKX0gcGxhY2VkIGluICR7dGllcn0gdGllci5gKTtcbiAgICB9LCBbbW92ZSwgcHJlc3RpZ2VzXSk7XG5cbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoIXBlbmRpbmcpIHJldHVybjtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtJHtwZW5kaW5nLnRpZXIgPT09IG51bGwgPyAncG9vbCcgOiAndGllcid9LXBvcnRyYWl0PVwiJHtwZW5kaW5nLmlkfVwiXWApITtcbiAgICAgICAgLy8gUmVzdG9yZSB0aGUgZGVzdGluYXRpb24ncyBsYXlvdXQgc2xvdCBiZWZvcmUgbWVhc3VyaW5nOyBpcy1hcnJpdmluZyBrZWVwcyBpdCBpbnZpc2libGUuXG4gICAgICAgIHRhcmdldC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtZHJhZ2dpbmcnKTtcbiAgICAgICAgY29uc3QgdG8gPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IGltYWdlID0gcG9ydHJhaXRQcmV2aWV3KHBlbmRpbmcuaWQsIHBlbmRpbmcucHJlc3RpZ2UsIHBlbmRpbmcuZnJvbS53aWR0aCk7XG4gICAgICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoJ2ZseWluZy1jb21tYW5kZXInKTtcbiAgICAgICAgaW1hZ2Uuc3R5bGUubGVmdCA9IGAke3BlbmRpbmcuZnJvbS5sZWZ0fXB4YDtcbiAgICAgICAgaW1hZ2Uuc3R5bGUudG9wID0gYCR7cGVuZGluZy5mcm9tLnRvcH1weGA7XG4gICAgICAgIC8vIEFwcGVuZGVkIG91dHNpZGUgdGhlIHpvb21lZCBjYW52YXM6IGJvdGggZW5kcG9pbnRzIGFyZSB2aWV3cG9ydCBjb29yZGluYXRlcy5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoaW1hZ2UpO1xuICAgICAgICBjb25zdCBhbmltYXRpb24gPSBpbWFnZS5hbmltYXRlKFtcbiAgICAgICAgICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDAsIDApIHNjYWxlKDEpJyB9LFxuICAgICAgICAgICAgeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGUoJHt0by5sZWZ0IC0gcGVuZGluZy5mcm9tLmxlZnR9cHgsICR7dG8udG9wIC0gcGVuZGluZy5mcm9tLnRvcH1weCkgc2NhbGUoJHt0by53aWR0aCAvIHBlbmRpbmcuZnJvbS53aWR0aH0pYCB9LFxuICAgICAgICBdLCB7IGR1cmF0aW9uOiBwZW5kaW5nLmR1cmF0aW9uLCBlYXNpbmc6ICdjdWJpYy1iZXppZXIoMC4yLCAwLjcsIDAuMiwgMSknLCBmaWxsOiAnZm9yd2FyZHMnIH0pO1xuICAgICAgICBsZXQgYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKCkgPT4gYW5pbWF0aW9uLmNhbmNlbCgpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgY2FuY2VsLCB7IG9uY2U6IHRydWUgfSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgY2FuY2VsLCB7IG9uY2U6IHRydWUgfSk7XG4gICAgICAgIGFuaW1hdGlvbi5maW5pc2hlZC5jYXRjaCgoKSA9PiB7fSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWFjdGl2ZSkgcmV0dXJuO1xuICAgICAgICAgICAgc2V0UmFua2luZyhzdGF0ZSA9PiAoeyAuLi5zdGF0ZSwgY3VycmVudDogcGVuZGluZy5uZXh0Q3VycmVudCB9KSk7XG4gICAgICAgICAgICBzZXRQZW5kaW5nKG51bGwpO1xuICAgICAgICAgICAgYnVzeS5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICBhbmltYXRpb24uY2FuY2VsKCk7XG4gICAgICAgICAgICBpbWFnZS5yZW1vdmUoKTtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBjYW5jZWwpO1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCBjYW5jZWwpO1xuICAgICAgICB9O1xuICAgIH0sIFtwZW5kaW5nXSk7XG5cbiAgICBjb25zdCBvcGVuTWVudSA9ICh0YXJnZXQ6IEhUTUxFbGVtZW50LCB4PzogbnVtYmVyLCB5PzogbnVtYmVyKSA9PiB7XG4gICAgICAgIGlmIChidXN5LmN1cnJlbnQgfHwgIW1hbmFnZXIuZHJhZ09wZXJhdGlvbi5zdGF0dXMuaWRsZSkgcmV0dXJuO1xuICAgICAgICBjb25zdCBjb21tYW5kZXJCdXR0b24gPSB0YXJnZXQuY2xvc2VzdDxIVE1MRWxlbWVudD4oJ1tkYXRhLWNvbW1hbmRlcl0nKTtcbiAgICAgICAgY29uc3QgY29tbWFuZGVyID0gY29tbWFuZGVyQnV0dG9uPy5kYXRhc2V0LmNvbW1hbmRlcjtcbiAgICAgICAgY29uc3QgdGFibGUgPSB0YXJnZXQuY2xvc2VzdDxIVE1MRWxlbWVudD4oJy50aWVycycpO1xuICAgICAgICBpZiAoIWNvbW1hbmRlckJ1dHRvbiAmJiAhdGFibGUpIHJldHVybjtcbiAgICAgICAgY29uc3QgdHJpZ2dlciA9IGNvbW1hbmRlckJ1dHRvbiA/PyB0YXJnZXQuY2xvc2VzdDxIVE1MRWxlbWVudD4oJ2J1dHRvbicpID8/IHRhYmxlITtcbiAgICAgICAgY29uc3QgcmVjdCA9IHRyaWdnZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHNldE1lbnUoeyB4OiB4ID8/IHJlY3QubGVmdCwgeTogeSA/PyByZWN0LnRvcCwgdHJpZ2dlciwgY29tbWFuZGVyOiBpc0NvbW1hbmRlcihjb21tYW5kZXIpID8gY29tbWFuZGVyIDogdW5kZWZpbmVkIH0pO1xuICAgIH07XG4gICAgY29uc3QgbWVudUNvbW1hbmRlciA9IG1lbnU/LmNvbW1hbmRlcjtcbiAgICBjb25zdCBtZW51SXRlbXM6IE1lbnVJdGVtW10gPSBtZW51Q29tbWFuZGVyID8gKFswLCAxLCAyLCAzXSBhcyBjb25zdCkubWFwKHByZXN0aWdlID0+ICh7XG4gICAgICAgIGxhYmVsOiBgUCR7cHJlc3RpZ2V9OiAke2RhdGEucHJlc3RpZ2VOYW1lc1ttZW51Q29tbWFuZGVyXVtwcmVzdGlnZV19YCxcbiAgICAgICAgY2hlY2tlZDogKHByZXN0aWdlc1ttZW51Q29tbWFuZGVyXSA/PyAwKSA9PT0gcHJlc3RpZ2UsXG4gICAgICAgIHNlbGVjdDogKCkgPT4ge1xuICAgICAgICAgICAgc2V0UHJlc3RpZ2VzKHByZXZpb3VzID0+ICh7IC4uLnByZXZpb3VzLCBbbWVudUNvbW1hbmRlcl06IHByZXN0aWdlIH0pKTtcbiAgICAgICAgICAgIHNldEFubm91bmNlbWVudChgJHtjb21tYW5kZXJOYW1lKG1lbnVDb21tYW5kZXIpfSBzZXQgdG8gUCR7cHJlc3RpZ2V9LmApO1xuICAgICAgICB9LFxuICAgIH0pKSA6IChbJ1NTJywgJ1NTUyddIGFzIGNvbnN0KS5tYXAodGllciA9PiAoe1xuICAgICAgICBsYWJlbDogYEFkZCAke3RpZXJ9YCxcbiAgICAgICAgZGlzYWJsZWQ6IHZpc2libGVUaWVycy5pbmNsdWRlcyh0aWVyKSxcbiAgICAgICAgc2VsZWN0OiAoKSA9PiB7XG4gICAgICAgICAgICBzZXRWaXNpYmxlVGllcnMocHJldmlvdXMgPT4gVElFUlMuZmlsdGVyKGl0ZW0gPT4gcHJldmlvdXMuaW5jbHVkZXMoaXRlbSkgfHwgaXRlbSA9PT0gdGllcikpO1xuICAgICAgICAgICAgc2V0QW5ub3VuY2VtZW50KGAke3RpZXJ9IHRpZXIgYWRkZWQuYCk7XG4gICAgICAgIH0sXG4gICAgfSkpO1xuXG4gICAgcmV0dXJuIDxEcmFnQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17bWFuYWdlcn0+PFByZXN0aWdlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17cHJlc3RpZ2VzfT5cbiAgICAgICAgPG1haW4gY2xhc3M9XCJ0aWVybWFrZXJcIiBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGJhY2tncm91bmQgPyBgdXJsKFwiL2ltYWdlcy9taXNzaW9ucy8ke2JhY2tncm91bmR9XCIpYCA6IHVuZGVmaW5lZCB9fVxuICAgICAgICAgICAgb25Db250ZXh0TWVudT17ZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgICAgICBpZiAoIXRhcmdldC5jbG9zZXN0KCdbZGF0YS1jb21tYW5kZXJdLCAudGllcnMnKSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgb3Blbk1lbnUodGFyZ2V0LCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbktleURvd249e2V2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQua2V5ICE9PSAnQ29udGV4dE1lbnUnICYmICEoZXZlbnQuc2hpZnRLZXkgJiYgZXZlbnQua2V5ID09PSAnRjEwJykpIHJldHVybjtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgaWYgKCF0YXJnZXQuY2xvc2VzdCgnW2RhdGEtY29tbWFuZGVyXSwgLnRpZXJzJykpIHJldHVybjtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIG9wZW5NZW51KHRhcmdldCk7XG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRpZXJzXCIgYXJpYS1sYWJlbD1cIkNvbW1hbmRlciB0aWVyc1wiIHRhYkluZGV4PXswfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7ICctLXRpZXItY291bnQnOiB2aXNpYmxlVGllcnMubGVuZ3RoIH19Pjx0Ym9keT5cbiAgICAgICAgICAgICAgICB7dmlzaWJsZVRpZXJzLm1hcCh0aWVyID0+IDxUaWVyUm93IGtleT17dGllcn0gdGllcj17dGllcn0gY29tbWFuZGVycz17cmFua2luZy50aWVyc1t0aWVyXX1cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudD17cmFua2luZy5jdXJyZW50fSBwZW5kaW5nPXtwZW5kaW5nPy5pZCA/PyBudWxsfSBvbk1vdmU9e21vdmV9IG9uUGxhY2U9e3BsYWNlfVxuICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17c2VsZWN0fSBvblJldHVybj17dW5yYW5rfSBjYW5EcmFnPXtjYW5EcmFnfSAvPil9XG4gICAgICAgICAgICA8L3Rib2R5PjwvdGFibGU+XG4gICAgICAgICAgICA8TXV0YXRpb25Cb3ggZGF0YT17ZGF0YX0gbXV0YXRpb249e211dGF0aW9ufSBvblNlbGVjdD17c2V0U2VsZWN0ZWRNdXRhdGlvbn0gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21tYW5kZXItcXVldWVcIj5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBhcmlhLWxhYmVsbGVkYnk9XCJjdXJyZW50LWNvbW1hbmRlci1oZWFkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBpZD1cImN1cnJlbnQtY29tbWFuZGVyLWhlYWRpbmdcIj5DdXJyZW50IENvbW1hbmRlcjwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjdXJyZW50LWNvbW1hbmRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3JhbmtpbmcuY3VycmVudCA/IDxDdXJyZW50Q29tbWFuZGVyIGlkPXtyYW5raW5nLmN1cnJlbnR9IGNhbkRyYWc9e2NhbkRyYWd9IG9uUmV0dXJuPXt1bnJhbmt9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8cCBjbGFzcz1cInJhbmtpbmctY29tcGxldGVcIj5BbGwgY29tbWFuZGVycyByYW5rZWQ8L3A+fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPENvbW1hbmRlclBvb2wgY3VycmVudD17cmFua2luZy5jdXJyZW50fSBwbGFjZWQ9e3BsYWNlZENvbW1hbmRlcnMocmFua2luZy50aWVycyl9IHBlbmRpbmc9e3BlbmRpbmc/LmlkID8/IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybmluZz17cGVuZGluZz8udGllciA9PT0gbnVsbCA/IHBlbmRpbmcuaWQgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICBvbk1vdmU9e21vdmV9IG9uU2VsZWN0PXtzZWxlY3R9IG9uUmV0dXJuPXt1bnJhbmt9IGNhbkRyYWc9e2NhbkRyYWd9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHttZW51ICYmIDxDb250ZXh0TWVudSBwb3NpdGlvbj17bWVudX0gbGFiZWw9e21lbnVDb21tYW5kZXIgPyBgJHtjb21tYW5kZXJOYW1lKG1lbnVDb21tYW5kZXIpfSBwcmVzdGlnZWAgOiAnQWRkaXRpb25hbCB0aWVycyd9XG4gICAgICAgICAgICAgICAgaXRlbXM9e21lbnVJdGVtc30gb25DbG9zZT17Y2xvc2VNZW51fSAvPn1cbiAgICAgICAgPC9tYWluPlxuICAgICAgICA8cCBjbGFzcz1cInZpc3VhbGx5LWhpZGRlblwiIHJvbGU9XCJzdGF0dXNcIiBhcmlhLWxpdmU9XCJwb2xpdGVcIj57YW5ub3VuY2VtZW50fTwvcD5cbiAgICA8L1ByZXN0aWdlQ29udGV4dC5Qcm92aWRlcj48L0RyYWdDb250ZXh0LlByb3ZpZGVyPjtcbn1cblxucmVuZGVyKDxUaWVyTWFrZXIgZGF0YT17d2luZG93LnRpZXJtYWtlckRhdGF9IC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGllcm1ha2VyLXJvb3QnKSEpO1xuIgogIF0sCiAgIm1hcHBpbmdzIjogIjs7RUFBQSxJQUFJO0FBQUEsRUFBSixJQUFNO0FBQUEsRUFBTixJQUFRO0FBQUEsRUFBUixJQUFVO0FBQUEsRUFBVixJQUFZO0FBQUEsRUFBWixJQUFjO0FBQUEsRUFBZCxJQUFnQjtBQUFBLEVBQWhCLElBQWtCO0FBQUEsRUFBbEIsSUFBb0I7QUFBQSxFQUFwQixJQUFzQjtBQUFBLEVBQXRCLElBQXdCO0FBQUEsRUFBeEIsSUFBMEI7QUFBQSxFQUExQixJQUE0QjtBQUFBLEVBQTVCLElBQThCO0FBQUEsRUFBOUIsSUFBZ0M7QUFBQSxFQUFoQyxJQUFrQztBQUFBLEVBQWxDLElBQW9DLElBQUUsQ0FBQztBQUFBLEVBQXZDLElBQXlDLElBQUUsQ0FBQztBQUFBLEVBQTVDLElBQThDLElBQUU7QUFBQSxFQUFoRCxJQUFvSCxJQUFFLE1BQU07QUFBQSxFQUFRLFNBQVMsQ0FBQyxDQUFDLEdBQUUsR0FBRTtBQUFBLElBQUMsU0FBUSxLQUFLO0FBQUEsTUFBRSxFQUFFLEtBQUcsRUFBRTtBQUFBLElBQUcsT0FBTztBQUFBO0FBQUEsRUFBRSxTQUFTLENBQUMsQ0FBQyxHQUFFO0FBQUEsSUFBQyxLQUFHLEVBQUUsY0FBWSxFQUFFLFdBQVcsWUFBWSxDQUFDO0FBQUE7QUFBQSxFQUFFLFNBQVMsQ0FBQyxDQUFDLEdBQUUsR0FBRSxHQUFFO0FBQUEsSUFBQyxJQUFJLEdBQUUsR0FBRSxHQUFFLElBQUUsQ0FBQztBQUFBLElBQUUsS0FBSSxLQUFLO0FBQUEsTUFBUyxLQUFQLFFBQVMsSUFBRSxFQUFFLEtBQVUsS0FBUCxRQUFTLElBQUUsRUFBRSxLQUFHLEVBQUUsS0FBRyxFQUFFO0FBQUEsSUFBRyxJQUFHLFVBQVUsU0FBTyxNQUFJLEVBQUUsV0FBUyxVQUFVLFNBQU8sSUFBRSxFQUFFLEtBQUssV0FBVSxDQUFDLElBQUUsSUFBZSxPQUFPLEtBQW5CLGNBQTRCLEVBQUUsZ0JBQVI7QUFBQSxNQUFxQixLQUFJLEtBQUssRUFBRTtBQUFBLFFBQXNCLEVBQUUsT0FBTixjQUFXLEVBQUUsS0FBRyxFQUFFLGFBQWE7QUFBQSxJQUFJLE9BQU8sRUFBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLElBQUk7QUFBQTtBQUFBLEVBQUUsU0FBUyxDQUFDLENBQUMsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFO0FBQUEsSUFBQyxJQUFJLElBQUUsRUFBQyxNQUFLLEdBQUUsT0FBTSxHQUFFLEtBQUksR0FBRSxLQUFJLEdBQUUsS0FBSSxNQUFLLElBQUcsTUFBSyxLQUFJLEdBQUUsS0FBSSxNQUFLLEtBQUksTUFBSyxhQUFpQixXQUFFLEtBQVUsS0FBTixPQUFRLEVBQUUsSUFBRSxHQUFFLEtBQUksSUFBRyxLQUFJLEVBQUM7QUFBQSxJQUFFLE9BQWEsS0FBTixRQUFlLEVBQUUsU0FBUixRQUFlLEVBQUUsTUFBTSxDQUFDLEdBQUU7QUFBQTtFQUFvQyxTQUFTLENBQUMsQ0FBQyxHQUFFO0FBQUEsSUFBQyxPQUFPLEVBQUU7QUFBQTtBQUFBLEVBQVMsU0FBUyxDQUFDLENBQUMsR0FBRSxHQUFFO0FBQUEsSUFBQyxLQUFLLFFBQU0sR0FBRSxLQUFLLFVBQVE7QUFBQTtBQUFBLEVBQUUsU0FBUyxDQUFDLENBQUMsR0FBRSxHQUFFO0FBQUEsSUFBQyxJQUFTLEtBQU47QUFBQSxNQUFRLE9BQU8sRUFBRSxLQUFHLEVBQUUsRUFBRSxJQUFHLEVBQUUsTUFBSSxDQUFDLElBQUU7QUFBQSxJQUFLLFNBQVEsRUFBRSxJQUFFLEVBQUUsSUFBSSxRQUFPO0FBQUEsTUFBSSxLQUFVLElBQUUsRUFBRSxJQUFJLE9BQWYsUUFBMEIsRUFBRSxPQUFSO0FBQUEsUUFBWSxPQUFPLEVBQUU7QUFBQSxJQUFJLE9BQWtCLE9BQU8sRUFBRSxRQUFyQixhQUEwQixFQUFFLENBQUMsSUFBRTtBQUFBO0FBQUEsRUFBSyxTQUFTLENBQUMsQ0FBQyxHQUFFO0FBQUEsSUFBQyxJQUFHLEVBQUUsT0FBSyxFQUFFLEtBQUk7QUFBQSxNQUFDLElBQUksSUFBRSxFQUFFLEtBQUksSUFBRSxFQUFFLEtBQUksSUFBRSxDQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsSUFBRSxFQUFFLENBQUMsR0FBRSxDQUFDO0FBQUEsTUFBRSxFQUFFLE1BQUksRUFBRSxNQUFJLEdBQUUsRUFBRSxTQUFPLEVBQUUsTUFBTSxDQUFDLEdBQUUsRUFBRSxFQUFFLEtBQUksR0FBRSxHQUFFLEVBQUUsS0FBSSxFQUFFLElBQUksY0FBYSxLQUFHLEVBQUUsTUFBSSxDQUFDLENBQUMsSUFBRSxNQUFLLEdBQVEsS0FBTixPQUFRLEVBQUUsQ0FBQyxJQUFFLEdBQUUsQ0FBQyxFQUFFLEtBQUcsRUFBRSxNQUFLLENBQUMsR0FBRSxFQUFFLE1BQUksRUFBRSxLQUFJLEVBQUUsR0FBRyxJQUFJLEVBQUUsT0FBSyxHQUFFLEVBQUUsR0FBRSxHQUFFLENBQUMsR0FBRSxFQUFFLE1BQUksRUFBRSxLQUFHLE1BQUssRUFBRSxPQUFLLEtBQUcsRUFBRSxDQUFDO0FBQUEsSUFBQztBQUFBO0FBQUEsRUFBRSxTQUFTLENBQUMsQ0FBQyxHQUFFO0FBQUEsSUFBQyxLQUFVLElBQUUsRUFBRSxPQUFYLFFBQXNCLEVBQUUsT0FBUjtBQUFBLE1BQVksT0FBTyxFQUFFLE1BQUksRUFBRSxJQUFJLE9BQUssTUFBSyxFQUFFLElBQUksS0FBSyxRQUFRLENBQUMsR0FBRTtBQUFBLFFBQUMsSUFBUyxLQUFOLFFBQWUsRUFBRSxPQUFSO0FBQUEsVUFBWSxPQUFPLEVBQUUsTUFBSSxFQUFFLElBQUksT0FBSyxFQUFFO0FBQUEsT0FBSSxHQUFFLEVBQUUsQ0FBQztBQUFBO0FBQUEsRUFBRSxTQUFTLENBQUMsQ0FBQyxHQUFFO0FBQUEsS0FBRSxDQUFDLEVBQUUsUUFBTSxFQUFFLE1BQUksU0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFHLENBQUMsRUFBRSxTQUFPLEtBQUcsRUFBRSx3QkFBc0IsSUFBRSxFQUFFLHNCQUFvQixHQUFHLENBQUM7QUFBQTtBQUFBLEVBQUUsU0FBUyxDQUFDLEdBQUU7QUFBQSxJQUFDLElBQUc7QUFBQSxNQUFDLFNBQVEsR0FBRSxJQUFFLEVBQUUsRUFBRTtBQUFBLFFBQVEsRUFBRSxTQUFPLEtBQUcsRUFBRSxLQUFLLENBQUMsR0FBRSxJQUFFLEVBQUUsTUFBTSxHQUFFLElBQUUsRUFBRSxRQUFPLEVBQUUsQ0FBQztBQUFBLE1BQUUsUUFBTztBQUFBLE1BQUMsRUFBRSxTQUFPLEVBQUUsTUFBSTtBQUFBO0FBQUE7QUFBQSxFQUFHLFNBQVMsQ0FBQyxDQUFDLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRTtBQUFBLElBQUMsSUFBSSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLElBQUUsS0FBRyxFQUFFLE9BQUssR0FBRSxJQUFFLEVBQUU7QUFBQSxJQUFPLEtBQUksSUFBRSxFQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsQ0FBQyxHQUFFLElBQUUsRUFBRSxJQUFFLEdBQUU7QUFBQSxPQUFXLElBQUUsRUFBRSxJQUFJLE9BQWYsU0FBcUIsSUFBTSxFQUFFLE9BQU4sTUFBVyxFQUFFLEVBQUUsUUFBTSxHQUFFLEVBQUUsTUFBSSxHQUFFLElBQUUsRUFBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxDQUFDLEdBQUUsSUFBRSxFQUFFLEtBQUksRUFBRSxPQUFLLEVBQUUsT0FBSyxFQUFFLFFBQU0sRUFBRSxPQUFLLEVBQUUsRUFBRSxLQUFJLE1BQUssQ0FBQyxHQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUksRUFBRSxPQUFLLEdBQUUsQ0FBQyxJQUFTLEtBQU4sUUFBZSxLQUFOLFNBQVUsSUFBRSxLQUFJLElBQUUsQ0FBQyxFQUFFLElBQUUsRUFBRSxTQUFPLEVBQUUsUUFBTSxFQUFFLE9BQUssSUFBRSxFQUFFLEdBQUUsR0FBRSxHQUFFLENBQUMsR0FBRSxLQUFHLEVBQUUsUUFBTSxFQUFFLE1BQUksU0FBbUIsT0FBTyxFQUFFLFFBQXJCLGNBQW9DLE1BQUosWUFBTSxJQUFFLElBQUUsTUFBSSxJQUFFLEVBQUUsY0FBYSxFQUFFLE9BQUs7QUFBQSxJQUFJLE9BQU8sRUFBRSxNQUFJLEdBQUU7QUFBQTtBQUFBLEVBQUUsU0FBUyxDQUFDLENBQUMsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFO0FBQUEsSUFBQyxJQUFJLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFFLEdBQUUsSUFBRTtBQUFBLElBQUUsS0FBSSxFQUFFLE1BQUksSUFBSSxNQUFNLENBQUMsR0FBRSxJQUFFLEVBQUUsSUFBRSxHQUFFO0FBQUEsT0FBVyxJQUFFLEVBQUUsT0FBWCxRQUEyQixPQUFPLEtBQWxCLGFBQWlDLE9BQU8sS0FBbkIsY0FBZ0MsT0FBTyxLQUFqQixZQUE4QixPQUFPLEtBQWpCLFlBQThCLE9BQU8sS0FBakIsWUFBb0IsRUFBRSxlQUFhLFNBQU8sSUFBRSxFQUFFLElBQUksS0FBRyxFQUFFLE1BQUssR0FBRSxNQUFLLE1BQUssSUFBSSxJQUFFLEVBQUUsQ0FBQyxJQUFFLElBQUUsRUFBRSxJQUFJLEtBQUcsRUFBRSxHQUFFLEVBQUMsVUFBUyxFQUFDLEdBQUUsTUFBSyxNQUFLLElBQUksSUFBVyxFQUFFLGdCQUFOLGFBQW1CLEVBQUUsTUFBSSxJQUFFLElBQUUsRUFBRSxJQUFJLEtBQUcsRUFBRSxFQUFFLE1BQUssRUFBRSxPQUFNLEVBQUUsS0FBSSxFQUFFLE1BQUksRUFBRSxNQUFJLE1BQUssRUFBRSxHQUFHLElBQUUsRUFBRSxJQUFJLEtBQUcsR0FBRSxJQUFFLElBQUUsR0FBRSxFQUFFLEtBQUcsR0FBRSxFQUFFLE1BQUksRUFBRSxNQUFJLEdBQUUsSUFBRSxPQUFVLElBQUUsRUFBRSxNQUFJLEVBQUUsR0FBRSxHQUFFLEdBQUUsQ0FBQyxNQUF0QixPQUEyQixNQUFLLElBQUUsRUFBRSxRQUFNLEVBQUUsT0FBSyxLQUFVLEtBQU4sUUFBZSxFQUFFLE9BQVIsUUFBaUIsS0FBSixPQUFRLElBQUUsSUFBRSxNQUFJLElBQUUsS0FBRyxNQUFpQixPQUFPLEVBQUUsUUFBckIsZUFBNEIsRUFBRSxPQUFLLE1BQUksS0FBRyxNQUFJLEtBQUcsSUFBRSxJQUFFLE1BQUksS0FBRyxJQUFFLElBQUUsT0FBSyxJQUFFLElBQUUsTUFBSSxLQUFJLEVBQUUsT0FBSyxPQUFLLEVBQUUsSUFBSSxLQUFHO0FBQUEsSUFBSyxJQUFHO0FBQUEsTUFBRSxLQUFJLElBQUUsRUFBRSxJQUFFLEdBQUU7QUFBQSxTQUFXLElBQUUsRUFBRSxPQUFYLFNBQW9CLElBQUUsRUFBRSxRQUFSLE1BQWUsRUFBRSxPQUFLLE1BQUksSUFBRSxFQUFFLENBQUMsSUFBRyxFQUFFLEdBQUUsQ0FBQztBQUFBLElBQUcsT0FBTztBQUFBO0FBQUEsRUFBRSxTQUFTLENBQUMsQ0FBQyxHQUFFLEdBQUUsR0FBRSxHQUFFO0FBQUEsSUFBQyxJQUFJLEdBQUU7QUFBQSxJQUFFLElBQWUsT0FBTyxFQUFFLFFBQXJCLFlBQTBCO0FBQUEsTUFBQyxLQUFJLElBQUUsRUFBRSxLQUFJLElBQUUsRUFBRSxLQUFHLElBQUUsRUFBRSxRQUFPO0FBQUEsUUFBSSxFQUFFLE9BQUssRUFBRSxHQUFHLEtBQUcsR0FBRSxJQUFFLEVBQUUsRUFBRSxJQUFHLEdBQUUsR0FBRSxDQUFDO0FBQUEsTUFBRyxPQUFPO0FBQUEsSUFBQztBQUFBLElBQUMsRUFBRSxPQUFLLE1BQUksTUFBSSxLQUFHLEVBQUUsUUFBTSxDQUFDLEVBQUUsZUFBYSxJQUFFLEVBQUUsQ0FBQyxJQUFHLEVBQUUsYUFBYSxFQUFFLEtBQUksS0FBRyxJQUFJLElBQUcsSUFBRSxFQUFFO0FBQUEsSUFBSyxHQUFFO0FBQUEsTUFBQyxJQUFFLEtBQUcsRUFBRTtBQUFBLElBQVcsU0FBYSxLQUFOLFFBQVksRUFBRSxZQUFMO0FBQUEsSUFBZSxPQUFPO0FBQUE7RUFBOEcsU0FBUyxDQUFDLENBQUMsR0FBRSxHQUFFLEdBQUUsR0FBRTtBQUFBLElBQUMsSUFBSSxH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QUFFLEdBQUUsQ0FBQztBQUFBLElBQUUsUUFBTyxJQUFFLEVBQUUsV0FBUyxFQUFFLENBQUMsR0FBRSxNQUFJLEVBQUUsTUFBUyxZQUFFO0FBQUE7QUFBQSxFQUFFLFNBQVMsQ0FBQyxDQUFDLEdBQUU7QUFBQSxJQUFDLE1BQUksRUFBRSxRQUFNLEVBQUUsSUFBSSxNQUFJLE9BQUksRUFBRSxPQUFLLEVBQUUsSUFBSSxLQUFLLENBQUM7QUFBQTtBQUFBLEVBQUcsU0FBUyxDQUFDLENBQUMsR0FBRSxHQUFFLEdBQUU7QUFBQSxJQUFDLFNBQVEsSUFBRSxFQUFFLElBQUUsRUFBRSxRQUFPO0FBQUEsTUFBSSxFQUFFLEVBQUUsSUFBRyxFQUFFLEVBQUUsSUFBRyxFQUFFLEVBQUUsRUFBRTtBQUFBLElBQUUsRUFBRSxPQUFLLEVBQUUsSUFBSSxHQUFFLENBQUMsR0FBRSxFQUFFLEtBQUssUUFBUSxDQUFDLEdBQUU7QUFBQSxNQUFDLElBQUc7QUFBQSxRQUFDLElBQUUsRUFBRSxLQUFJLEVBQUUsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFLLFFBQVEsQ0FBQyxHQUFFO0FBQUEsVUFBQyxFQUFFLEtBQUssQ0FBQztBQUFBLFNBQUU7QUFBQSxRQUFFLE9BQU0sR0FBRTtBQUFBLFFBQUMsRUFBRSxJQUFJLEdBQUUsRUFBRSxHQUFHO0FBQUE7QUFBQSxLQUFHO0FBQUE7QUFBQSxFQUFFLFNBQVMsQ0FBQyxDQUFDLEdBQUU7QUFBQSxJQUFDLE9BQWdCLE9BQU8sS0FBakIsWUFBMEIsS0FBTixRQUFTLEVBQUUsTUFBSSxJQUFFLElBQUUsRUFBRSxDQUFDLElBQUUsRUFBRSxJQUFJLENBQUMsSUFBRSxFQUFFLENBQUMsR0FBRSxDQUFDO0FBQUE7QUFBQSxFQUFFLFNBQVMsQ0FBQyxDQUFDLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFO0FBQUEsSUFBQyxJQUFJLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsSUFBRSxFQUFFLFNBQU8sS0FBTSxPQUFKLEdBQWMsTUFB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RUFBeEQsSUFBNEQsS0FBRSxHQUFFO0FBQUEsRUFBaEUsSUFBd0UsS0FBRSxHQUFFO0FBQUEsRUFBRyxTQUFTLEVBQUMsQ0FBQyxHQUFFLEdBQUU7QUFBQSxJQUFDLEdBQUUsT0FBSyxHQUFFLElBQUksSUFBRSxHQUFFLE1BQUcsQ0FBQyxHQUFFLEtBQUU7QUFBQSxJQUFFLElBQUksSUFBRSxHQUFFLFFBQU0sR0FBRSxNQUFJLEVBQUMsSUFBRyxDQUFDLEdBQUUsS0FBSSxDQUFDLEVBQUM7QUFBQSxJQUFHLE9BQU8sS0FBRyxFQUFFLEdBQUcsVUFBUSxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBRSxFQUFFLEdBQUc7QUFBQTtBQUFBLEVBQUcsU0FBUyxFQUFDLENBQUMsR0FBRTtBQUFBLElBQUMsT0FBTyxLQUFFLEdBQUUsR0FBRSxJQUFFLENBQUM7QUFBQTtBQUFBLEVBQUUsU0FBUyxFQUFDLENBQUMsR0FBRSxHQUFFLEdBQUU7QUFBQSxJQUFDLElBQUksSUFBRSxHQUFFLE1BQUksQ0FBQztBQUFBLElBQUUsSUFBRyxFQUFFLElBQUUsR0FBRSxDQUFDLEVBQUUsUUFBTSxFQUFFLEtBQUcsQ0FBQyxJQUFFLEVBQUUsQ0FBQyxJQUFFLEdBQU8sV0FBRSxDQUFDLEdBQUUsUUFBUSxDQUFDLEdBQUU7QUFBQSxNQUFDLElBQUksSUFBRSxFQUFFLE1BQUksRUFBRSxJQUFJLEtBQUcsRUFBRSxHQUFHLElBQUcsSUFBRSxFQUFFLEVBQUUsR0FBRSxDQUFDO0FBQUEsTUFBRSxNQUFJLE1BQUksRUFBRSxNQUFJLENBQUMsR0FBRSxFQUFFLEdBQUcsRUFBRSxHQUFFLEVBQUUsSUFBSSxTQUFTLENBQUMsQ0FBQztBQUFBLEtBQUcsR0FBRSxFQUFFLE1BQUksSUFBRSxDQUFDLEdBQUUsTUFBSztBQUFBLE1BQUMsSUFBSSxJQUFFLFFBQVEsQ0FBQyxHQUFFLEdBQUUsR0FBRTtBQUFBLFFBQUMsSUFBRyxDQUFDLEVBQUUsSUFBSTtBQUFBLFVBQUksT0FBTTtBQUFBLFFBQUcsSUFBSSxJQUFFLEVBQUUsSUFBSSxJQUFJLEdBQUcsT0FBTyxRQUFRLENBQUMsR0FBRTtBQUFBLFVBQUMsT0FBTyxFQUFFO0FBQUEsU0FBSTtBQUFBLFFBQUUsSUFBRyxFQUFFLE1BQU0sUUFBUSxDQUFDLEdBQUU7QUFBQSxVQUFDLE9BQU0sQ0FBQyxFQUFFO0FBQUEsU0FBSTtBQUFBLFVBQUUsT0FBTSxDQUFDLEtBQUcsRUFBRSxLQUFLLE1BQUssR0FBRSxHQUFFLENBQUM7QUFBQSxRQUFFLElBQUksSUFBRSxFQUFFLElBQUksVUFBUTtBQUFBLFFBQUUsT0FBTyxFQUFFLEtBQUssUUFBUSxDQUFDLEdBQUU7QUFBQSxVQUFDLElBQUcsRUFBRSxLQUFJO0FBQUEsWUFBQyxJQUFJLElBQUUsRUFBRSxHQUFHO0FBQUEsWUFBRyxFQUFFLEtBQUcsRUFBRSxLQUFJLEVBQUUsTUFBUyxXQUFFLE1BQUksRUFBRSxHQUFHLE9BQUssSUFBRTtBQUFBLFVBQUc7QUFBQSxTQUFFLEdBQUUsS0FBRyxFQUFFLEtBQUssTUFBSyxHQUFFLEdBQUUsQ0FBQyxLQUFHO0FBQUE7QUFBQSxNQUFHLEdBQUUsTUFBSTtBQUFBLE1BQUcsSUFBSSxJQUFFLEdBQUUsdUJBQXNCLElBQUUsR0FBRTtBQUFBLE1BQW9CLEdBQUUsc0JBQW9CLFFBQVEsQ0FBQyxHQUFFLEdBQUUsR0FBRTtBQUFBLFFBQUMsSUFBRyxLQUFLLEtBQUk7QUFBQSxVQUFDLElBQUksSUFBRTtBQUFBLFVBQUUsSUFBTyxXQUFFLEVBQUUsR0FBRSxHQUFFLENBQUMsR0FBRSxJQUFFO0FBQUEsUUFBQztBQUFBLFFBQUMsS0FBRyxFQUFFLEtBQUssTUFBSyxHQUFFLEdBQUUsQ0FBQztBQUFBLFNBQUcsR0FBRSx3QkFBc0I7QUFBQSxJQUFDO0FBQUEsSUFBQyxPQUFPLEVBQUUsT0FBSyxFQUFFO0FBQUE7QUFBQSxFQUFHLFNBQVMsRUFBQyxDQUFDLEdBQUUsR0FBRTtBQUFBLElBQUMsSUFBSSxJQUFFLEdBQUUsTUFBSSxDQUFDO0FBQUEsSUFBRSxDQUFDLEdBQUUsT0FBSyxHQUFFLEVBQUUsS0FBSSxDQUFDLE1BQUksRUFBRSxLQUFHLEdBQUUsRUFBRSxJQUFFLEdBQUUsR0FBRSxJQUFJLElBQUksS0FBSyxDQUFDO0FBQUE7QUFBQSxFQUFHLFNBQVMsRUFBQyxDQUFDLEdBQUUsR0FBRTtBQUFBLElBQUMsSUFBSSxJQUFFLEdBQUUsTUFBSSxDQUFDO0FBQUEsSUFBRSxDQUFDLEdBQUUsT0FBSyxHQUFFLEVBQUUsS0FBSSxDQUFDLE1BQUksRUFBRSxLQUFHLEdBQUUsRUFBRSxJQUFFLEdBQUUsR0FBRSxJQUFJLEtBQUssQ0FBQztBQUFBO0FBQUEsRUFBRyxTQUFTLEVBQUMsQ0FBQyxHQUFFO0FBQUEsSUFBQyxPQUFPLEtBQUUsR0FBRSxHQUFFLFFBQVEsR0FBRTtBQUFBLE1BQUMsT0FBTSxFQUFDLFNBQVEsRUFBQztBQUFBLE9BQUcsQ0FBQyxDQUFDO0FBQUE7RUFBdU4sU0FBUyxFQUFDLENBQUMsR0FBRSxHQUFFO0FBQUEsSUFBQyxJQUFJLElBQUUsR0FBRSxNQUFJLENBQUM7QUFBQSxJQUFFLE9BQU8sR0FBRSxFQUFFLEtBQUksQ0FBQyxNQUFJLEVBQUUsS0FBRyxFQUFFLEdBQUUsRUFBRSxNQUFJLEdBQUUsRUFBRSxNQUFJLElBQUcsRUFBRTtBQUFBO0FBQUEsRUFBRyxTQUFTLEVBQUMsQ0FBQyxHQUFFLEdBQUU7QUFBQSxJQUFDLE9BQU8sS0FBRSxHQUFFLEdBQUUsUUFBUSxHQUFFO0FBQUEsTUFBQyxPQUFPO0FBQUEsT0FBRyxDQUFDO0FBQUE7QUFBQSxFQUFFLFNBQVMsRUFBQyxDQUFDLEdBQUU7QUFBQSxJQUFDLElBQUksSUFBRSxHQUFFLFFBQVEsRUFBRSxNQUFLLElBQUUsR0FBRSxNQUFJLENBQUM7QUFBQSxJQUFFLE9BQU8sRUFBRSxJQUFFLEdBQUUsS0FBUyxFQUFFLE1BQVIsU0FBYSxFQUFFLEtBQUcsTUFBRyxFQUFFLElBQUksRUFBQyxJQUFHLEVBQUUsTUFBTSxTQUFPLEVBQUU7QUFBQTtFQUErWCxTQUFTLEVBQUMsR0FBRTtBQUFBLElBQUMsU0FBUSxFQUFFLElBQUUsR0FBRSxNQUFNLEtBQUc7QUFBQSxNQUFDLElBQUksSUFBRSxFQUFFO0FBQUEsTUFBSSxJQUFHLEVBQUUsT0FBSztBQUFBLFFBQUUsSUFBRztBQUFBLFVBQUMsRUFBRSxJQUFJLEtBQUssRUFBQyxHQUFFLEVBQUUsSUFBSSxLQUFLLEVBQUMsR0FBRSxFQUFFLE1BQUksQ0FBQztBQUFBLFVBQUUsT0FBTSxHQUFFO0FBQUEsVUFBQyxFQUFFLE1BQUksQ0FBQyxHQUFFLEdBQUUsSUFBSSxHQUFFLEVBQUUsR0FBRztBQUFBO0FBQUEsSUFBRTtBQUFBO0FBQUEsRUFBRSxHQUFFLE1BQUksUUFBUSxDQUFDLEdBQUU7QUFBQSxJQUFDLEtBQUUsTUFBSyxNQUFHLEdBQUUsQ0FBQztBQUFBLEtBQUcsR0FBRSxLQUFHLFFBQVEsQ0FBQyxHQUFFLEdBQUU7QUFBQSxJQUFDLEtBQUcsRUFBRSxPQUFLLEVBQUUsSUFBSSxRQUFNLEVBQUUsTUFBSSxFQUFFLElBQUksTUFBSyxNQUFHLEdBQUUsR0FBRSxDQUFDO0FBQUEsS0FBRyxHQUFFLE1BQUksUUFBUSxDQUFDLEdBQUU7QUFBQSxJQUFDLE1BQUcsR0FBRSxDQUFDLEdBQUUsS0FBRTtBQUFBLElBQUUsSUFBSSxLQUFHLEtBQUUsRUFBRSxLQUFLO0FBQUEsSUFBSSxNQUFJLE9BQUksTUFBRyxFQUFFLE1BQUksQ0FBQyxHQUFFLEdBQUUsTUFBSSxDQUFDLEdBQUUsRUFBRSxHQUFHLEtBQUssUUFBUSxDQUFDLEdBQUU7QUFBQSxNQUFDLEVBQUUsUUFBTSxFQUFFLEtBQUcsRUFBRSxNQUFLLEVBQUUsSUFBRSxFQUFFLE1BQVM7QUFBQSxLQUFFLE1BQUksRUFBRSxJQUFJLEtBQUssRUFBQyxHQUFFLEVBQUUsSUFBSSxLQUFLLEVBQUMsR0FBRSxFQUFFLE1BQUksQ0FBQyxHQUFFLEtBQUUsS0FBSSxLQUFFO0FBQUEsS0FBRyxHQUFFLFNBQU8sUUFBUSxDQUFDLEdBQUU7QUFBQSxJQUFDLE1BQUcsR0FBRSxDQUFDO0FBQUEsSUFBRSxJQUFJLElBQUUsRUFBRTtBQUFBLElBQUksS0FBRyxFQUFFLFFBQU0sRUFBRSxJQUFJLElBQUksV0FBYSxHQUFFLEtBQUssQ0FBQyxNQUFaLEtBQWUsT0FBSSxHQUFFLDJCQUF5QixLQUFFLEdBQUUsMEJBQXdCLElBQUcsRUFBQyxJQUFHLEVBQUUsSUFBSSxHQUFHLEtBQUssUUFBUSxDQUFDLEdBQUU7QUFBQSxNQUFDLEVBQUUsTUFBSSxFQUFFLE1BQUksRUFBRSxJQUFHLEVBQUUsSUFBTztBQUFBLEtBQUUsSUFBRyxLQUFFLEtBQUU7QUFBQSxLQUFNLEdBQUUsTUFBSSxRQUFRLENBQUMsR0FBRSxHQUFFO0FBQUEsSUFBQyxFQUFFLEtBQUssUUFBUSxDQUFDLEdBQUU7QUFBQSxNQUFDLElBQUc7QUFBQSxRQUFDLEVBQUUsSUFBSSxLQUFLLEVBQUMsR0FBRSxFQUFFLE1BQUksRUFBRSxJQUFJLE9BQU8sUUFBUSxDQUFDLEdBQUU7QUFBQSxVQUFDLE9BQU0sQ0FBQyxFQUFFLE1BQUksR0FBRSxDQUFDO0FBQUEsU0FBRTtBQUFBLFFBQUUsT0FBTSxHQUFFO0FBQUEsUUFBQyxFQUFFLEtBQUssUUFBUSxDQUFDLEdBQUU7QUFBQSxVQUFDLEVBQUUsUUFBTSxFQUFFLE1BQUksQ0FBQztBQUFBLFNBQUcsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUksR0FBRSxFQUFFLEdBQUc7QUFBQTtBQUFBLEtBQUcsR0FBRSxNQUFHLEdBQUUsR0FBRSxDQUFDO0FBQUEsS0FBRyxHQUFFLFVBQVEsUUFBUSxDQUFDLEdBQUU7QUFBQSxJQUFDLE1BQUcsR0FBRSxDQUFDO0FBQUEsSUFBRSxJQUFJLEdBQUUsSUFBRSxFQUFFO0FBQUEsSUFBSSxLQUFHLEVBQUUsUUFBTSxFQUFFLElBQUksR0FBRyxLQUFLLFFBQVEsQ0FBQyxHQUFFO0FBQUEsTUFBQyxJQUFHO0FBQUEsUUFBQyxHQUFFLENBQUM7QUFBQSxRQUFFLE9BQU0sR0FBRTtBQUFBLFFBQUMsSUFBRTtBQUFBO0FBQUEsS0FBRyxHQUFFLEVBQUUsTUFBUyxXQUFFLEtBQUcsR0FBRSxJQUFJLEdBQUUsRUFBRSxHQUFHO0FBQUE7QUFB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QUUsRUFBRSxJQUFPO0FBQUEsTUFBQztBQUFBLE1BQUMsSUFBWSxNQUFKLFdBQU07QUFBQSxRQUFDLEVBQUUsSUFBRTtBQUFBLFFBQUUsRUFBRSxJQUFPO0FBQUEsTUFBQztBQUFBLE1BQUMsSUFBRyxNQUFJLEtBQUssR0FBRTtBQUFBLFFBQUMsS0FBSyxJQUFFO0FBQUEsUUFBRSxJQUFZLE1BQUo7QUFBQSxVQUFNLEdBQUUsUUFBUSxHQUFFO0FBQUEsWUFBQyxJQUFJO0FBQUEsYUFBUyxJQUFFLEVBQUUsTUFBWCxRQUFlLEVBQUUsS0FBSyxDQUFDO0FBQUEsV0FBRTtBQUFBLE1BQUM7QUFBQSxJQUFDO0FBQUE7QUFBQSxFQUFHLEdBQUUsVUFBVSxZQUFVLFFBQVEsQ0FBQyxHQUFFO0FBQUEsSUFBQyxJQUFJLElBQUU7QUFBQSxJQUFLLE9BQU8sR0FBRSxRQUFRLEdBQUU7QUFBQSxNQUFDLElBQUksSUFBRSxFQUFFO0FBQUEsTUFBTSxHQUFFLFFBQVEsR0FBRTtBQUFBLFFBQUMsT0FBTyxFQUFFLENBQUM7QUFBQSxPQUFFO0FBQUEsT0FBRyxFQUFDLE1BQUssTUFBSyxDQUFDO0FBQUE7QUFBQSxFQUFHLEdBQUUsVUFBVSxVQUFRLFFBQVEsR0FBRTtBQUFBLElBQUMsT0FBTyxLQUFLO0FBQUE7QUFBQSxFQUFPLEdBQUUsVUFBVSxXQUFTLFFBQVEsR0FBRTtBQUFBLElBQUMsT0FBTyxLQUFLLFFBQU07QUFBQTtBQUFBLEVBQUksR0FBRSxVQUFVLFNBQU8sUUFBUSxHQUFFO0FBQUEsSUFBQyxPQUFPLEtBQUs7QUFBQTtBQUFBLEVBQU8sR0FBRSxVQUFVLE9BQUssUUFBUSxHQUFFO0FBQUEsSUFBQyxJQUFJLElBQUU7QUFBQSxJQUFLLE9BQU8sR0FBRSxRQUFRLEdBQUU7QUFBQSxNQUFDLE9BQU8sRUFBRTtBQUFBLEtBQU07QUFBQTtBQUFBLEVBQUcsT0FBTyxlQUFlLEdBQUUsV0FBVSxTQUFRLEVBQUMsS0FBSSxRQUFRLEdBQUU7QUFBQSxJQUFDLElBQUksSUFBRSxHQUFFLElBQUk7QUFBQSxJQUFFLElBQVksTUFBSjtBQUFBLE1BQU0sRUFBRSxJQUFFLEtBQUs7QUFBQSxJQUFFLE9BQU8sS0FBSztBQUFBLEtBQUcsS0FBSSxRQUFRLENBQUMsR0FBRTtBQUFBLElBQUMsSUFBRyxNQUFJLEtBQUssR0FBRTtBQUFBLE1BQUMsSUFBRyxLQUFFO0FBQUEsUUFBSSxNQUFNLElBQUksTUFBTSxnQkFBZ0I7QUFBQSxPQUFHLFFBQVEsQ0FBQyxHQUFFO0FBQUEsUUFBQyxJQUFPLE9BQUosS0FBVyxPQUFKO0FBQUEsVUFBTSxJQUFHLEVBQUUsTUFBSSxJQUFFO0FBQUEsWUFBQyxFQUFFLElBQUU7QUFBQSxZQUFFLEtBQUUsRUFBQyxHQUFFLEdBQUUsR0FBRSxFQUFFLEdBQUUsR0FBRSxFQUFFLEdBQUUsR0FBRSxHQUFDO0FBQUEsVUFBQztBQUFBO0FBQUEsU0FBRyxJQUFJO0FBQUEsTUFBRSxLQUFLLElBQUU7QUFBQSxNQUFFLEtBQUs7QUFBQSxNQUFJO0FBQUEsTUFBSTtBQUFBLE1BQUksSUFBRztBQUFBLFFBQUMsU0FBUSxJQUFFLEtBQUssRUFBVyxNQUFKLFdBQU0sSUFBRSxFQUFFO0FBQUEsVUFBRSxFQUFFLEVBQUUsRUFBRTtBQUFBLFFBQUUsUUFBTztBQUFBLFFBQUMsR0FBRTtBQUFBO0FBQUEsSUFBRTtBQUFBLElBQUUsQ0FBQztBQUFBLEVBQUUsU0FBUyxFQUFDLENBQUMsR0FBRSxHQUFFO0FBQUEsSUFBQyxPQUFPLElBQUksR0FBRSxHQUFFLENBQUM7QUFBQTtBQUFBLEVBQUUsU0FBUyxFQUFDLENBQUMsR0FBRTtBQUFBLElBQUMsU0FBUSxJQUFFLEVBQUUsRUFBVyxNQUFKLFdBQU0sSUFBRSxFQUFFO0FBQUEsTUFBRSxJQUFHLEVBQUUsRUFBRSxNQUFJLEVBQUUsS0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEtBQUcsRUFBRSxFQUFFLE1BQUksRUFBRTtBQUFBLFFBQUUsT0FBTTtBQUFBLElBQUcsT0FBTTtBQUFBO0FBQUEsRUFBRyxTQUFTLEVBQUMsQ0FBQyxHQUFFO0FBQUEsSUFBQyxTQUFRLElBQUUsRUFBRSxFQUFXLE1BQUosV0FBTSxJQUFFLEVBQUUsR0FBRTtBQUFBLE1BQUMsSUFBSSxJQUFFLEVBQUUsRUFBRTtBQUFBLE1BQUUsSUFBWSxNQUFKO0FBQUEsUUFBTSxFQUFFLElBQUU7QUFBQSxNQUFFLEVBQUUsRUFBRSxJQUFFO0FBQUEsTUFBRSxFQUFFLElBQUU7QUFBQSxNQUFHLElBQVksRUFBRSxNQUFOLFdBQVE7QUFBQSxRQUFDLEVBQUUsSUFBRTtBQUFBLFFBQUU7QUFBQSxNQUFLO0FBQUEsSUFBQztBQUFBO0FBQUEsRUFBRSxTQUFTLEVBQUMsQ0FBQyxHQUFFO0FBQUEsSUFBQyxJQUFJLElBQUUsRUFBRSxHQUFFLElBQU87QUFBQSxJQUFFLE9BQWUsTUFBSixXQUFNO0FBQUEsTUFBQyxJQUFJLElBQUUsRUFBRTtBQUFBLE1BQUUsSUFBUSxFQUFFLE1BQVAsSUFBUztBQUFBLFFBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQztBQUFBLFFBQUUsSUFBWSxNQUFKO0FBQUEsVUFBTSxFQUFFLElBQUUsRUFBRTtBQUFBLFFBQUUsSUFBWSxFQUFFLE1BQU47QUFBQSxVQUFRLEVBQUUsRUFBRSxJQUFFO0FBQUEsTUFBQyxFQUFDO0FBQUEsUUFBSyxJQUFFO0FBQUEsTUFBRSxFQUFFLEVBQUUsSUFBRSxFQUFFO0FBQUEsTUFBRSxJQUFZLEVBQUUsTUFBTjtBQUFBLFFBQVEsRUFBRSxJQUFPO0FBQUEsTUFBRSxJQUFFO0FBQUEsSUFBQztBQUFBLElBQUMsRUFBRSxJQUFFO0FBQUE7QUFBQSxFQUFFLFNBQVMsRUFBQyxDQUFDLEdBQUUsR0FBRTtBQUFBLElBQUMsR0FBRSxLQUFLLE1BQVUsV0FBRSxDQUFDO0FBQUEsSUFBRSxLQUFLLElBQUU7QUFBQSxJQUFFLEtBQUssSUFBTztBQUFBLElBQUUsS0FBSyxJQUFFLEtBQUU7QUFBQSxJQUFFLEtBQUssSUFBRTtBQUFBO0FBQUEsRUFBRSxHQUFFLFlBQVUsSUFBSTtBQUFBLEVBQUUsR0FBRSxVQUFVLElBQUUsUUFBUSxHQUFFO0FBQUEsSUFBQyxLQUFLLEtBQUc7QUFBQSxJQUFHLElBQUcsSUFBRSxLQUFLO0FBQUEsTUFBRSxPQUFNO0FBQUEsSUFBRyxLQUFRLEtBQUcsS0FBSyxNQUFiO0FBQUEsTUFBZ0IsT0FBTTtBQUFBLElBQUcsS0FBSyxLQUFHO0FBQUEsSUFBRyxJQUFHLEtBQUssTUFBSTtBQUFBLE1BQUUsT0FBTTtBQUFBLElBQUcsS0FBSyxJQUFFO0FBQUEsSUFBRSxLQUFLLEtBQUc7QUFBQSxJQUFFLElBQUcsS0FBSyxJQUFFLEtBQUcsQ0FBQyxHQUFFLElBQUksR0FBRTtBQUFBLE1BQUMsS0FBSyxLQUFHO0FBQUEsTUFBRyxPQUFNO0FBQUEsSUFBRTtBQUFBLElBQUMsSUFBSSxJQUFFO0FBQUEsSUFBRSxJQUFHO0FBQUEsTUFBQyxHQUFFLElBQUk7QUFBQSxNQUFFLEtBQUU7QUFBQSxNQUFLLElBQUksSUFBRSxLQUFLLEVBQUU7QUFBQSxNQUFFLElBQUcsS0FBRyxLQUFLLEtBQUcsS0FBSyxNQUFJLEtBQU8sS0FBSyxNQUFULEdBQVc7QUFBQSxRQUFDLEtBQUssSUFBRTtBQUFBLFFBQUUsS0FBSyxLQUFHO0FBQUEsUUFBSSxLQUFLO0FBQUEsTUFBRztBQUFBLE1BQUUsT0FBTSxHQUFFO0FBQUEsTUFBQyxLQUFLLElBQUU7QUFBQSxNQUFFLEtBQUssS0FBRztBQUFBLE1BQUcsS0FBSztBQUFBO0FBQUEsSUFBSSxLQUFFO0FBQUEsSUFBRSxHQUFFLElBQUk7QUFBQSxJQUFFLEtBQUssS0FBRztBQUFBLElBQUcsT0FBTTtBQUFBO0FBQUEsRUFBSSxHQUFFLFVBQVUsSUFBRSxRQUFRLENBQUMsR0FBRTtBQUFBLElBQUMsSUFBWSxLQUFLLE1BQVQsV0FBVztBQUFBLE1BQUMsS0FBSyxLQUFHO0FBQUEsTUFBRyxTQUFRLElBQUUsS0FBSyxFQUFXLE1BQUosV0FBTSxJQUFFLEVBQUU7QUFBQSxRQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7QUFBQSxJQUFDO0FBQUEsSUFBQyxHQUFFLFVBQVUsRUFBRSxLQUFLLE1BQUssQ0FBQztBQUFBO0FBQUEsRUFBRyxHQUFFLFVBQVUsSUFBRSxRQUFRLENBQUMsR0FBRTtBQUFBLElBQUMsSUFBWSxLQUFLLE1BQVQsV0FBVztBQUFBLE1BQUMsR0FBRSxVQUFVLEVBQUUsS0FBSyxNQUFLLENBQUM7QUFBQSxNQUFFLElBQVksS0FBSyxNQUFULFdBQVc7QUFBQSxRQUFDLEtBQUssS0FBRztBQUFBLFFBQUksU0FBUSxJQUFFLEtBQUssRUFBVyxNQUFKLFdBQU0sSUFBRSxFQUFFO0FBQUEsVUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0FBQUEsTUFBQztBQUFBLElBQUM7QUFBQTtBQUFBLEVBQUcsR0FBRSxVQUFVLElBQUUsUUFBUSxHQUFFO0FBQUEsSUFBQyxJQUFHLEVBQUUsSUFBRSxLQUFLLElBQUc7QUFBQSxNQUFDLEtBQUssS0FBRztBQUFBLE1BQUUsU0FBUSxJQUFFLEtBQUssRUFBVyxNQUFKLFdBQU0sSUFBRSxFQUFFO0FBQUEsUUFBRSxFQUFFLEVBQUUsRUFBRTtBQUFBLElBQUM7QUFBQTtBQUFBLEVBQUcsT0FBTyxlQUFlLEdBQUUsV0FBVSxTQUFRLEVBQUMsS0FBSSxRQUFRLEdBQUU7QUFBQSxJQUFDLElBQUcsSUFBRSxLQUFLO0FBQUEsTUFBRSxNQUFNLElBQUksTUFBTSxnQkFBZ0I7QUFBQSxJQUFFLElBQUksSUFBRSxHQUFFLElBQUk7QUFBQSxJQUFFLEtBQUssRUFBRTtBQUFBLElBQUUsSUFBWSxNQUFKO0FBQUEsTUFBTSxFQUFFLElBQUUsS0FBSztBQUFBLElBQUUsSUFBRyxLQUFHLEtBQUs7QUFBQSxNQUFFLE1BQU0sS0FBSztBQUFBLElBQUUsT0FBTyxLQUFLO0FBQUEsSUFBRSxDQUFDO0FBQUEsRUFBRSxTQUFTLEVBQUMsQ0FBQyxHQUFFLEdBQUU7QUFBQSxJQUFDLE9BQU8sSUFBSSxHQUFFLEdBQUUsQ0FBQztBQUFBO0FBQUEsRUFBRSxTQUFTLEVBQUMsQ0FBQyxHQUFFO0FBQUEsSUFBQyxJQUFJLElBQUUsRUFBRTtBQUFBLElBQUUsRUFBRSxJQUFPO0FBQUEsSUFBRSxJQUFlLE9BQU8sS0FBbkIsWUFBcUI7QUFBQSxNQUFDO0FBQUEsTUFBSSxJQUFJLElBQUU7QUFBQSxNQUFFLEtBQU87QUFBQSxNQUFFLElBQUc7QUFBQSxRQUFDLEVBQUU7QUFBQSxRQUFFLE9BQU0sR0FBRTtBQUFBLFFBQUMsRUFBRSxLQUFHO0FBQUEsUUFBRyxFQUFFLEtBQUc7QUFBQSxRQUFFLEdBQUUsQ0FBQztBQUFBLFFBQUUsTUFBTTtBQUFBLFFBQUUsUUFBTztBQUFBLFFBQUMsS0FBRTtBQUFBLFFBQUUsR0FBRTtBQUFBO0FBQUEsSUFBRTtBQUFBO0FBQUEsRUFBRSxTQUFTLEVBQUMsQ0FBQyxHQUFFO0FBQUEsSUFBQyxTQUFRLElBQUUsRUFBRSxFQUFXLE1BQUosV0FBTSxJQUFFLEVBQUU7QUFBQSxNQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7QUFBQSxJQUFFLEVBQUUsSUFBTztBQUFBLElBQUUsRUFBRSxJQUFPO0FBQUEsSUFBRSxHQUFFLENBQUM7QUFBQTtBQUFBLEVBQUUsU0FBUyxFQUFDLENBQUMsR0FBRTtBQUFBLElBQUMsSUFBRyxPQUFJO0FBQUEsTUFBSyxNQUFNLElBQUksTUFBTSxxQkFBcUI7QUFBQSxJQUFFLEdBQUUsSUFBSTtBQUFBLElBQUUsS0FBRTtBQUFBLElBQUUsS0FBSyxLQUFHO0FBQUEsSUFBRyxJQUFHLElBQUUsS0FBSztBQUFBLE1BQUUsR0FBRSxJQUFJO0FBQUEsSUFBRSxHQUFFO0FBQUE7QUFBQSxFQUFFLFNBQVMsRUFBQyxDQUFDLEdBQUUsR0FBRTtBQUFBLElBQUMsS0FBSyxJQUFFO0FBQUEsSUFBRSxLQUFLLElBQU87QUFBQSxJQUFFLEtBQUssSUFBTztBQUFBLElBQUUsS0FBSyxJQUFPO0FBQUEsSUFBRSxLQUFLLElBQUU7QUFBQSxJQUFHLEtBQUssT0FBVyxLQUFOLE9BQWEsWUFBRSxFQUFFO0FBQUEsSUFBSyxJQUFHO0FBQUEsTUFBRSxHQUFFLEtBQUssSUFBSTtBQUFBO0FBQUEsRUFBRSxHQUFFLFVBQVUsSUFBRSxRQUFRLEdBQUU7QUFBQSxJQUFDLElBQUksSUFBRSxLQUFLLEVBQUU7QUFBQSxJQUFFLElBQUc7QUFBQSxNQUFDLElBQUcsSUFBRSxLQUFLO0FBQUEsUUFBRTtBQUFBLE1BQU8sSUFBWSxLQUFLLE1BQVQ7QUFBQSxRQUFXO0FBQUEsTUFBTyxJQUFJLElBQUUsS0FBSyxFQUFFO0FBQUEsTUFBRSxJQUFlLE9BQU8sS0FBbkI7QUFBQSxRQUFxQixLQUFLLElBQUU7QUFBQSxNQUFFLFFBQU87QUFBQSxNQUFDLEVBQUU7QUFBQTtBQUFBO0FBQUEsRUFBSSxHQUFFLFVBQVUsSUFBRSxRQUFRLEdBQUU7QUFBQSxJQUFDLElBQUcsSUFBRSxLQUFLO0FBQUEsTUFBRSxNQUFNLElBQUksTUFBTSxnQkFBZ0I7QUFBQSxJQUFFLEtBQUssS0FBRztBQUFBLElBQUUsS0FBSyxLQUFHO0FBQUEsSUFBRyxHQUFFLElBQUk7QUFBQSxJQUFFLEdBQUUsSUFBSTtBQUFBLElBQUU7QUFBQSxJQUFJLElBQUksSUFBRTtBQUFBLElBQUUsS0FBRTtBQUFBLElBQUssT0FBTyxHQUFFLEtBQUssTUFBSyxDQUFDO0FBQUE7QUFBQSxFQUFHLEdBQUUsVUFBVSxJQUFFLFFBQVEsR0FBRTtBQUFBLElBQUMsSUFBRyxFQUFFLElBQUUsS0FBSyxJQUFHO0FBQUEsTUFBQyxLQUFLLEtBQUc7QUFBQSxNQUFFLEtBQUssSUFBRTtBQUFBLE1BQUUsS0FBRTtBQUFBLElBQUk7QUFBQTtBQUFBLEVBQUcsR0FBRSxVQUFVLElBQUUsUUFBUSxHQUFFO0FBQUEsSUFBQyxLQUFLLEtBQUc7QUFBQSxJQUFFLElBQUcsRUFBRSxJQUFFLEtBQUs7QUFBQSxNQUFHLEdBQUUsSUFBSTtBQUFBO0FBQUEsRUFBRyxHQUFFLFVBQVUsVUFBUSxRQUFRLEdBQUU7QUFBQSxJQUFDLEtBQUssRUFBRTtBQUFBO0FBQUEsRUFBRyxTQUFTLEVBQUMsQ0FBQyxHQUFFLEdBQUU7QUFBQSxJQUFDLElBQUksSUFBRSxJQUFJLEdBQUUsR0FBRSxDQUFDO0FBQUEsSUFBRSxJQUFHO0FBQUEsTUFBQyxFQUFFLEVBQUU7QUFBQSxNQUFFLE9BQU0sR0FBRTtBQUFB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QyxDQUFFO0FBQUEsbUJBSFosaUNBSWxEO0FBQUEsaUJBTEYsaUNBS1U7QUFBQSw4QkFDVixHQUFDLGFBQUQ7QUFBQSxnQkFBYTtBQUFBLGdCQUFZO0FBQUEsZ0JBQW9CLFVBQVU7QUFBQSxpQkFBdkQsaUNBQTRFO0FBQUEsOEJBQzVFLEdBQUMsT0FBRDtBQUFBLGdCQUFLLE9BQU07QUFBQSxnQkFBWCxVQVdFO0FBQUEsa0NBVkUsR0FBQyxXQUFEO0FBQUEsb0JBQVMsbUJBQWdCO0FBQUEsb0JBQXpCLFVBTUU7QUFBQSxzQ0FMRSxHQUFDLE1BQUQ7QUFBQSx3QkFBSSxJQUFHO0FBQUEsd0JBQVA7QUFBQSwwREFBc0Q7QUFBQSxzQ0FDdEQsR0FBQyxPQUFEO0FBQUEsd0JBQUssSUFBRztBQUFBLHdCQUFSLFVBQ0ssUUFBUSwwQkFBVSxHQUFDLGtCQUFEO0FBQUEsMEJBQWtCLElBQUksUUFBUTtBQUFBLDBCQUFTO0FBQUEsMEJBQWtCLFVBQVU7QUFBQSwyQkFBbkUsaUNBQTJFLG9CQUN4RixHQUFDLEtBQUQ7QUFBQSwwQkFBRyxPQUFNO0FBQUEsMEJBQVQ7QUFBQSw0REFBbUQ7QUFBQSx5QkFGN0QsaUNBR0U7QUFBQTtBQUFBLHFCQUxOLGdDQU1FO0FBQUEsa0NBQ0YsR0FBQyxlQUFEO0FBQUEsb0JBQWUsU0FBUyxRQUFRO0FBQUEsb0JBQVMsUUFBUSxpQkFBaUIsUUFBUSxLQUFLO0FBQUEsb0JBQUcsU0FBUyxTQUFTLE1BQU07QUFBQSxvQkFDdEcsV0FBVyxTQUFTLFNBQVMsT0FBTyxRQUFRLEtBQUs7QUFBQSxvQkFDakQsUUFBUTtBQUFBLG9CQUFNLFVBQVU7QUFBQSxvQkFBUSxVQUFVO0FBQUEsb0JBQVE7QUFBQSxxQkFGdEQsaUNBRXdFO0FBQUE7QUFBQSxpQkFWNUUsZ0NBV0U7QUFBQSxjQUNELHdCQUFRLEdBQUMsYUFBRDtBQUFBLGdCQUFhLFVBQVU7QUFBQSxnQkFBTSxPQUFPLGdCQUFnQixHQUFHLGNBQWMsYUFBYSxlQUFlO0FBQUEsZ0JBQ3RHLE9BQU87QUFBQSxnQkFBVyxTQUFTO0FBQUEsaUJBRHRCLGlDQUNpQztBQUFBO0FBQUEsYUFsQzlDLGdDQW1DRTtBQUFBLDBCQUNGLEdBQUMsS0FBRDtBQUFBLFlBQUcsT0FBTTtBQUFBLFlBQWtCLE1BQUs7QUFBQSxZQUFTLGFBQVU7QUFBQSxZQUFuRCxVQUE2RDtBQUFBLGFBQTdELGlDQUE0RTtBQUFBO0FBQUEsU0FyQ25DLGdDQXNDM0M7QUFBQSxPQXRDSyxpQ0FzQ3NCO0FBQUE7QUFBQSxFQUdqQyxrQkFBTyxHQUFDLFdBQUQ7QUFBQSxJQUFXLE1BQU0sT0FBTztBQUFBLEtBQXhCLGlDQUF1QyxHQUFJLFNBQVMsZUFBZSxnQkFBZ0IsQ0FBRTsiLAogICJkZWJ1Z0lkIjogIkZBQjUxNEJFQzUyRERFNzg2NDc1NkUyMTY0NzU2RTIxIiwKICAibmFtZXMiOiBbXQp9
