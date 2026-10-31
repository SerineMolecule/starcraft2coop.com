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
//# sourceMappingURL=tiermaker.js.map
