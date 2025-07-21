function M1(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var Ki = { exports: {} }, Le = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sd;
function R1() {
  if (sd) return Le;
  sd = 1;
  var c = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function o(s, b, D) {
    var U = null;
    if (D !== void 0 && (U = "" + D), b.key !== void 0 && (U = "" + b.key), "key" in b) {
      D = {};
      for (var B in b)
        B !== "key" && (D[B] = b[B]);
    } else D = b;
    return b = D.ref, {
      $$typeof: c,
      type: s,
      key: U,
      ref: b !== void 0 ? b : null,
      props: D
    };
  }
  return Le.Fragment = r, Le.jsx = o, Le.jsxs = o, Le;
}
var od;
function U1() {
  return od || (od = 1, Ki.exports = R1()), Ki.exports;
}
var tu = U1(), al = function() {
  return al = Object.assign || function(r) {
    for (var o, s = 1, b = arguments.length; s < b; s++) {
      o = arguments[s];
      for (var D in o) Object.prototype.hasOwnProperty.call(o, D) && (r[D] = o[D]);
    }
    return r;
  }, al.apply(this, arguments);
};
function Ec(c, r, o) {
  if (o || arguments.length === 2) for (var s = 0, b = r.length, D; s < b; s++)
    (D || !(s in r)) && (D || (D = Array.prototype.slice.call(r, 0, s)), D[s] = r[s]);
  return c.concat(D || Array.prototype.slice.call(r));
}
var wi = { exports: {} }, P = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dd;
function N1() {
  if (dd) return P;
  dd = 1;
  var c = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), D = Symbol.for("react.consumer"), U = Symbol.for("react.context"), B = Symbol.for("react.forward_ref"), M = Symbol.for("react.suspense"), E = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), C = Symbol.iterator;
  function G(h) {
    return h === null || typeof h != "object" ? null : (h = C && h[C] || h["@@iterator"], typeof h == "function" ? h : null);
  }
  var Y = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, j = Object.assign, W = {};
  function lt(h, O, N) {
    this.props = h, this.context = O, this.refs = W, this.updater = N || Y;
  }
  lt.prototype.isReactComponent = {}, lt.prototype.setState = function(h, O) {
    if (typeof h != "object" && typeof h != "function" && h != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, h, O, "setState");
  }, lt.prototype.forceUpdate = function(h) {
    this.updater.enqueueForceUpdate(this, h, "forceUpdate");
  };
  function ut() {
  }
  ut.prototype = lt.prototype;
  function F(h, O, N) {
    this.props = h, this.context = O, this.refs = W, this.updater = N || Y;
  }
  var k = F.prototype = new ut();
  k.constructor = F, j(k, lt.prototype), k.isPureReactComponent = !0;
  var rt = Array.isArray, Z = { H: null, A: null, T: null, S: null, V: null }, I = Object.prototype.hasOwnProperty;
  function K(h, O, N, q, Q, ct) {
    return N = ct.ref, {
      $$typeof: c,
      type: h,
      key: O,
      ref: N !== void 0 ? N : null,
      props: ct
    };
  }
  function Rt(h, O) {
    return K(
      h.type,
      O,
      void 0,
      void 0,
      void 0,
      h.props
    );
  }
  function Wt(h) {
    return typeof h == "object" && h !== null && h.$$typeof === c;
  }
  function au(h) {
    var O = { "=": "=0", ":": "=2" };
    return "$" + h.replace(/[=:]/g, function(N) {
      return O[N];
    });
  }
  var zl = /\/+/g;
  function Yt(h, O) {
    return typeof h == "object" && h !== null && h.key != null ? au("" + h.key) : O.toString(36);
  }
  function Bl() {
  }
  function Cl(h) {
    switch (h.status) {
      case "fulfilled":
        return h.value;
      case "rejected":
        throw h.reason;
      default:
        switch (typeof h.status == "string" ? h.then(Bl, Bl) : (h.status = "pending", h.then(
          function(O) {
            h.status === "pending" && (h.status = "fulfilled", h.value = O);
          },
          function(O) {
            h.status === "pending" && (h.status = "rejected", h.reason = O);
          }
        )), h.status) {
          case "fulfilled":
            return h.value;
          case "rejected":
            throw h.reason;
        }
    }
    throw h;
  }
  function Bt(h, O, N, q, Q) {
    var ct = typeof h;
    (ct === "undefined" || ct === "boolean") && (h = null);
    var w = !1;
    if (h === null) w = !0;
    else
      switch (ct) {
        case "bigint":
        case "string":
        case "number":
          w = !0;
          break;
        case "object":
          switch (h.$$typeof) {
            case c:
            case r:
              w = !0;
              break;
            case R:
              return w = h._init, Bt(
                w(h._payload),
                O,
                N,
                q,
                Q
              );
          }
      }
    if (w)
      return Q = Q(h), w = q === "" ? "." + Yt(h, 0) : q, rt(Q) ? (N = "", w != null && (N = w.replace(zl, "$&/") + "/"), Bt(Q, O, N, "", function(wt) {
        return wt;
      })) : Q != null && (Wt(Q) && (Q = Rt(
        Q,
        N + (Q.key == null || h && h.key === Q.key ? "" : ("" + Q.key).replace(
          zl,
          "$&/"
        ) + "/") + w
      )), O.push(Q)), 1;
    w = 0;
    var Ct = q === "" ? "." : q + ":";
    if (rt(h))
      for (var ht = 0; ht < h.length; ht++)
        q = h[ht], ct = Ct + Yt(q, ht), w += Bt(
          q,
          O,
          N,
          ct,
          Q
        );
    else if (ht = G(h), typeof ht == "function")
      for (h = ht.call(h), ht = 0; !(q = h.next()).done; )
        q = q.value, ct = Ct + Yt(q, ht++), w += Bt(
          q,
          O,
          N,
          ct,
          Q
        );
    else if (ct === "object") {
      if (typeof h.then == "function")
        return Bt(
          Cl(h),
          O,
          N,
          q,
          Q
        );
      throw O = String(h), Error(
        "Objects are not valid as a React child (found: " + (O === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : O) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return w;
  }
  function A(h, O, N) {
    if (h == null) return h;
    var q = [], Q = 0;
    return Bt(h, q, "", "", function(ct) {
      return O.call(N, ct, Q++);
    }), q;
  }
  function H(h) {
    if (h._status === -1) {
      var O = h._result;
      O = O(), O.then(
        function(N) {
          (h._status === 0 || h._status === -1) && (h._status = 1, h._result = N);
        },
        function(N) {
          (h._status === 0 || h._status === -1) && (h._status = 2, h._result = N);
        }
      ), h._status === -1 && (h._status = 0, h._result = O);
    }
    if (h._status === 1) return h._result.default;
    throw h._result;
  }
  var V = typeof reportError == "function" ? reportError : function(h) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var O = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h),
        error: h
      });
      if (!window.dispatchEvent(O)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", h);
      return;
    }
    console.error(h);
  };
  function nt() {
  }
  return P.Children = {
    map: A,
    forEach: function(h, O, N) {
      A(
        h,
        function() {
          O.apply(this, arguments);
        },
        N
      );
    },
    count: function(h) {
      var O = 0;
      return A(h, function() {
        O++;
      }), O;
    },
    toArray: function(h) {
      return A(h, function(O) {
        return O;
      }) || [];
    },
    only: function(h) {
      if (!Wt(h))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return h;
    }
  }, P.Component = lt, P.Fragment = o, P.Profiler = b, P.PureComponent = F, P.StrictMode = s, P.Suspense = M, P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Z, P.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(h) {
      return Z.H.useMemoCache(h);
    }
  }, P.cache = function(h) {
    return function() {
      return h.apply(null, arguments);
    };
  }, P.cloneElement = function(h, O, N) {
    if (h == null)
      throw Error(
        "The argument must be a React element, but you passed " + h + "."
      );
    var q = j({}, h.props), Q = h.key, ct = void 0;
    if (O != null)
      for (w in O.ref !== void 0 && (ct = void 0), O.key !== void 0 && (Q = "" + O.key), O)
        !I.call(O, w) || w === "key" || w === "__self" || w === "__source" || w === "ref" && O.ref === void 0 || (q[w] = O[w]);
    var w = arguments.length - 2;
    if (w === 1) q.children = N;
    else if (1 < w) {
      for (var Ct = Array(w), ht = 0; ht < w; ht++)
        Ct[ht] = arguments[ht + 2];
      q.children = Ct;
    }
    return K(h.type, Q, void 0, void 0, ct, q);
  }, P.createContext = function(h) {
    return h = {
      $$typeof: U,
      _currentValue: h,
      _currentValue2: h,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, h.Provider = h, h.Consumer = {
      $$typeof: D,
      _context: h
    }, h;
  }, P.createElement = function(h, O, N) {
    var q, Q = {}, ct = null;
    if (O != null)
      for (q in O.key !== void 0 && (ct = "" + O.key), O)
        I.call(O, q) && q !== "key" && q !== "__self" && q !== "__source" && (Q[q] = O[q]);
    var w = arguments.length - 2;
    if (w === 1) Q.children = N;
    else if (1 < w) {
      for (var Ct = Array(w), ht = 0; ht < w; ht++)
        Ct[ht] = arguments[ht + 2];
      Q.children = Ct;
    }
    if (h && h.defaultProps)
      for (q in w = h.defaultProps, w)
        Q[q] === void 0 && (Q[q] = w[q]);
    return K(h, ct, void 0, void 0, null, Q);
  }, P.createRef = function() {
    return { current: null };
  }, P.forwardRef = function(h) {
    return { $$typeof: B, render: h };
  }, P.isValidElement = Wt, P.lazy = function(h) {
    return {
      $$typeof: R,
      _payload: { _status: -1, _result: h },
      _init: H
    };
  }, P.memo = function(h, O) {
    return {
      $$typeof: E,
      type: h,
      compare: O === void 0 ? null : O
    };
  }, P.startTransition = function(h) {
    var O = Z.T, N = {};
    Z.T = N;
    try {
      var q = h(), Q = Z.S;
      Q !== null && Q(N, q), typeof q == "object" && q !== null && typeof q.then == "function" && q.then(nt, V);
    } catch (ct) {
      V(ct);
    } finally {
      Z.T = O;
    }
  }, P.unstable_useCacheRefresh = function() {
    return Z.H.useCacheRefresh();
  }, P.use = function(h) {
    return Z.H.use(h);
  }, P.useActionState = function(h, O, N) {
    return Z.H.useActionState(h, O, N);
  }, P.useCallback = function(h, O) {
    return Z.H.useCallback(h, O);
  }, P.useContext = function(h) {
    return Z.H.useContext(h);
  }, P.useDebugValue = function() {
  }, P.useDeferredValue = function(h, O) {
    return Z.H.useDeferredValue(h, O);
  }, P.useEffect = function(h, O, N) {
    var q = Z.H;
    if (typeof N == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return q.useEffect(h, O);
  }, P.useId = function() {
    return Z.H.useId();
  }, P.useImperativeHandle = function(h, O, N) {
    return Z.H.useImperativeHandle(h, O, N);
  }, P.useInsertionEffect = function(h, O) {
    return Z.H.useInsertionEffect(h, O);
  }, P.useLayoutEffect = function(h, O) {
    return Z.H.useLayoutEffect(h, O);
  }, P.useMemo = function(h, O) {
    return Z.H.useMemo(h, O);
  }, P.useOptimistic = function(h, O) {
    return Z.H.useOptimistic(h, O);
  }, P.useReducer = function(h, O, N) {
    return Z.H.useReducer(h, O, N);
  }, P.useRef = function(h) {
    return Z.H.useRef(h);
  }, P.useState = function(h) {
    return Z.H.useState(h);
  }, P.useSyncExternalStore = function(h, O, N) {
    return Z.H.useSyncExternalStore(
      h,
      O,
      N
    );
  }, P.useTransition = function() {
    return Z.H.useTransition();
  }, P.version = "19.1.0", P;
}
var hd;
function sr() {
  return hd || (hd = 1, wi.exports = N1()), wi.exports;
}
var or = sr();
const Iu = /* @__PURE__ */ M1(or);
var At = "-ms-", Je = "-moz-", yt = "-webkit-", Bd = "comm", _c = "rule", dr = "decl", H1 = "@import", Cd = "@keyframes", q1 = "@layer", Gd = Math.abs, hr = String.fromCharCode, ar = Object.assign;
function x1(c, r) {
  return Zt(c, 0) ^ 45 ? (((r << 2 ^ Zt(c, 0)) << 2 ^ Zt(c, 1)) << 2 ^ Zt(c, 2)) << 2 ^ Zt(c, 3) : 0;
}
function jd(c) {
  return c.trim();
}
function uu(c, r) {
  return (c = r.exec(c)) ? c[0] : c;
}
function tt(c, r, o) {
  return c.replace(r, o);
}
function mc(c, r, o) {
  return c.indexOf(r, o);
}
function Zt(c, r) {
  return c.charCodeAt(r) | 0;
}
function Xa(c, r, o) {
  return c.slice(r, o);
}
function Yl(c) {
  return c.length;
}
function Xd(c) {
  return c.length;
}
function we(c, r) {
  return r.push(c), c;
}
function Y1(c, r) {
  return c.map(r).join("");
}
function yd(c, r) {
  return c.filter(function(o) {
    return !uu(o, r);
  });
}
var Oc = 1, Qa = 1, Qd = 0, Tl = 0, Ht = 0, Ka = "";
function Dc(c, r, o, s, b, D, U, B) {
  return { value: c, root: r, parent: o, type: s, props: b, children: D, line: Oc, column: Qa, length: U, return: "", siblings: B };
}
function Mu(c, r) {
  return ar(Dc("", null, null, "", null, null, 0, c.siblings), c, { length: -c.length }, r);
}
function Ga(c) {
  for (; c.root; )
    c = Mu(c.root, { children: [c] });
  we(c, c.siblings);
}
function B1() {
  return Ht;
}
function C1() {
  return Ht = Tl > 0 ? Zt(Ka, --Tl) : 0, Qa--, Ht === 10 && (Qa = 1, Oc--), Ht;
}
function Ml() {
  return Ht = Tl < Qd ? Zt(Ka, Tl++) : 0, Qa++, Ht === 10 && (Qa = 1, Oc++), Ht;
}
function Wu() {
  return Zt(Ka, Tl);
}
function gc() {
  return Tl;
}
function Mc(c, r) {
  return Xa(Ka, c, r);
}
function er(c) {
  switch (c) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function G1(c) {
  return Oc = Qa = 1, Qd = Yl(Ka = c), Tl = 0, [];
}
function j1(c) {
  return Ka = "", c;
}
function Ji(c) {
  return jd(Mc(Tl - 1, nr(c === 91 ? c + 2 : c === 40 ? c + 1 : c)));
}
function X1(c) {
  for (; (Ht = Wu()) && Ht < 33; )
    Ml();
  return er(c) > 2 || er(Ht) > 3 ? "" : " ";
}
function Q1(c, r) {
  for (; --r && Ml() && !(Ht < 48 || Ht > 102 || Ht > 57 && Ht < 65 || Ht > 70 && Ht < 97); )
    ;
  return Mc(c, gc() + (r < 6 && Wu() == 32 && Ml() == 32));
}
function nr(c) {
  for (; Ml(); )
    switch (Ht) {
      // ] ) " '
      case c:
        return Tl;
      // " '
      case 34:
      case 39:
        c !== 34 && c !== 39 && nr(Ht);
        break;
      // (
      case 40:
        c === 41 && nr(c);
        break;
      // \
      case 92:
        Ml();
        break;
    }
  return Tl;
}
function Z1(c, r) {
  for (; Ml() && c + Ht !== 57; )
    if (c + Ht === 84 && Wu() === 47)
      break;
  return "/*" + Mc(r, Tl - 1) + "*" + hr(c === 47 ? c : Ml());
}
function V1(c) {
  for (; !er(Wu()); )
    Ml();
  return Mc(c, Tl);
}
function L1(c) {
  return j1(Sc("", null, null, null, [""], c = G1(c), 0, [0], c));
}
function Sc(c, r, o, s, b, D, U, B, M) {
  for (var E = 0, R = 0, C = U, G = 0, Y = 0, j = 0, W = 1, lt = 1, ut = 1, F = 0, k = "", rt = b, Z = D, I = s, K = k; lt; )
    switch (j = F, F = Ml()) {
      // (
      case 40:
        if (j != 108 && Zt(K, C - 1) == 58) {
          mc(K += tt(Ji(F), "&", "&\f"), "&\f", Gd(E ? B[E - 1] : 0)) != -1 && (ut = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        K += Ji(F);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        K += X1(j);
        break;
      // \
      case 92:
        K += Q1(gc() - 1, 7);
        continue;
      // /
      case 47:
        switch (Wu()) {
          case 42:
          case 47:
            we(K1(Z1(Ml(), gc()), r, o, M), M);
            break;
          default:
            K += "/";
        }
        break;
      // {
      case 123 * W:
        B[E++] = Yl(K) * ut;
      // } ; \0
      case 125 * W:
      case 59:
      case 0:
        switch (F) {
          // \0 }
          case 0:
          case 125:
            lt = 0;
          // ;
          case 59 + R:
            ut == -1 && (K = tt(K, /\f/g, "")), Y > 0 && Yl(K) - C && we(Y > 32 ? md(K + ";", s, o, C - 1, M) : md(tt(K, " ", "") + ";", s, o, C - 2, M), M);
            break;
          // @ ;
          case 59:
            K += ";";
          // { rule/at-rule
          default:
            if (we(I = vd(K, r, o, E, R, b, B, k, rt = [], Z = [], C, D), D), F === 123)
              if (R === 0)
                Sc(K, r, I, I, rt, D, C, B, Z);
              else
                switch (G === 99 && Zt(K, 3) === 110 ? 100 : G) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Sc(c, I, I, s && we(vd(c, I, I, 0, 0, b, B, k, b, rt = [], C, Z), Z), b, Z, C, B, s ? rt : Z);
                    break;
                  default:
                    Sc(K, I, I, I, [""], Z, 0, B, Z);
                }
        }
        E = R = Y = 0, W = ut = 1, k = K = "", C = U;
        break;
      // :
      case 58:
        C = 1 + Yl(K), Y = j;
      default:
        if (W < 1) {
          if (F == 123)
            --W;
          else if (F == 125 && W++ == 0 && C1() == 125)
            continue;
        }
        switch (K += hr(F), F * W) {
          // &
          case 38:
            ut = R > 0 ? 1 : (K += "\f", -1);
            break;
          // ,
          case 44:
            B[E++] = (Yl(K) - 1) * ut, ut = 1;
            break;
          // @
          case 64:
            Wu() === 45 && (K += Ji(Ml())), G = Wu(), R = C = Yl(k = K += V1(gc())), F++;
            break;
          // -
          case 45:
            j === 45 && Yl(K) == 2 && (W = 0);
        }
    }
  return D;
}
function vd(c, r, o, s, b, D, U, B, M, E, R, C) {
  for (var G = b - 1, Y = b === 0 ? D : [""], j = Xd(Y), W = 0, lt = 0, ut = 0; W < s; ++W)
    for (var F = 0, k = Xa(c, G + 1, G = Gd(lt = U[W])), rt = c; F < j; ++F)
      (rt = jd(lt > 0 ? Y[F] + " " + k : tt(k, /&\f/g, Y[F]))) && (M[ut++] = rt);
  return Dc(c, r, o, b === 0 ? _c : B, M, E, R, C);
}
function K1(c, r, o, s) {
  return Dc(c, r, o, Bd, hr(B1()), Xa(c, 2, -2), 0, s);
}
function md(c, r, o, s, b) {
  return Dc(c, r, o, dr, Xa(c, 0, s), Xa(c, s + 1, -1), s, b);
}
function Zd(c, r, o) {
  switch (x1(c, r)) {
    // color-adjust
    case 5103:
      return yt + "print-" + c + c;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return yt + c + c;
    // tab-size
    case 4789:
      return Je + c + c;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return yt + c + Je + c + At + c + c;
    // writing-mode
    case 5936:
      switch (Zt(c, r + 11)) {
        // vertical-l(r)
        case 114:
          return yt + c + At + tt(c, /[svh]\w+-[tblr]{2}/, "tb") + c;
        // vertical-r(l)
        case 108:
          return yt + c + At + tt(c, /[svh]\w+-[tblr]{2}/, "tb-rl") + c;
        // horizontal(-)tb
        case 45:
          return yt + c + At + tt(c, /[svh]\w+-[tblr]{2}/, "lr") + c;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return yt + c + At + c + c;
    // order
    case 6165:
      return yt + c + At + "flex-" + c + c;
    // align-items
    case 5187:
      return yt + c + tt(c, /(\w+).+(:[^]+)/, yt + "box-$1$2" + At + "flex-$1$2") + c;
    // align-self
    case 5443:
      return yt + c + At + "flex-item-" + tt(c, /flex-|-self/g, "") + (uu(c, /flex-|baseline/) ? "" : At + "grid-row-" + tt(c, /flex-|-self/g, "")) + c;
    // align-content
    case 4675:
      return yt + c + At + "flex-line-pack" + tt(c, /align-content|flex-|-self/g, "") + c;
    // flex-shrink
    case 5548:
      return yt + c + At + tt(c, "shrink", "negative") + c;
    // flex-basis
    case 5292:
      return yt + c + At + tt(c, "basis", "preferred-size") + c;
    // flex-grow
    case 6060:
      return yt + "box-" + tt(c, "-grow", "") + yt + c + At + tt(c, "grow", "positive") + c;
    // transition
    case 4554:
      return yt + tt(c, /([^-])(transform)/g, "$1" + yt + "$2") + c;
    // cursor
    case 6187:
      return tt(tt(tt(c, /(zoom-|grab)/, yt + "$1"), /(image-set)/, yt + "$1"), c, "") + c;
    // background, background-image
    case 5495:
    case 3959:
      return tt(c, /(image-set\([^]*)/, yt + "$1$`$1");
    // justify-content
    case 4968:
      return tt(tt(c, /(.+:)(flex-)?(.*)/, yt + "box-pack:$3" + At + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + yt + c + c;
    // justify-self
    case 4200:
      if (!uu(c, /flex-|baseline/)) return At + "grid-column-align" + Xa(c, r) + c;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return At + tt(c, "template-", "") + c;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return o && o.some(function(s, b) {
        return r = b, uu(s.props, /grid-\w+-end/);
      }) ? ~mc(c + (o = o[r].value), "span", 0) ? c : At + tt(c, "-start", "") + c + At + "grid-row-span:" + (~mc(o, "span", 0) ? uu(o, /\d+/) : +uu(o, /\d+/) - +uu(c, /\d+/)) + ";" : At + tt(c, "-start", "") + c;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return o && o.some(function(s) {
        return uu(s.props, /grid-\w+-start/);
      }) ? c : At + tt(tt(c, "-end", "-span"), "span ", "") + c;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return tt(c, /(.+)-inline(.+)/, yt + "$1$2") + c;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Yl(c) - 1 - r > 6)
        switch (Zt(c, r + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (Zt(c, r + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return tt(c, /(.+:)(.+)-([^]+)/, "$1" + yt + "$2-$3$1" + Je + (Zt(c, r + 3) == 108 ? "$3" : "$2-$3")) + c;
          // (s)tretch
          case 115:
            return ~mc(c, "stretch", 0) ? Zd(tt(c, "stretch", "fill-available"), r, o) + c : c;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return tt(c, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(s, b, D, U, B, M, E) {
        return At + b + ":" + D + E + (U ? At + b + "-span:" + (B ? M : +M - +D) + E : "") + c;
      });
    // position: sticky
    case 4949:
      if (Zt(c, r + 6) === 121)
        return tt(c, ":", ":" + yt) + c;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (Zt(c, Zt(c, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return tt(c, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + yt + (Zt(c, 14) === 45 ? "inline-" : "") + "box$3$1" + yt + "$2$3$1" + At + "$2box$3") + c;
        // (inline-)?gri(d)
        case 100:
          return tt(c, ":", ":" + At) + c;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return tt(c, "scroll-", "scroll-snap-") + c;
  }
  return c;
}
function Ac(c, r) {
  for (var o = "", s = 0; s < c.length; s++)
    o += r(c[s], s, c, r) || "";
  return o;
}
function w1(c, r, o, s) {
  switch (c.type) {
    case q1:
      if (c.children.length) break;
    case H1:
    case dr:
      return c.return = c.return || c.value;
    case Bd:
      return "";
    case Cd:
      return c.return = c.value + "{" + Ac(c.children, s) + "}";
    case _c:
      if (!Yl(c.value = c.props.join(","))) return "";
  }
  return Yl(o = Ac(c.children, s)) ? c.return = c.value + "{" + o + "}" : "";
}
function J1(c) {
  var r = Xd(c);
  return function(o, s, b, D) {
    for (var U = "", B = 0; B < r; B++)
      U += c[B](o, s, b, D) || "";
    return U;
  };
}
function $1(c) {
  return function(r) {
    r.root || (r = r.return) && c(r);
  };
}
function k1(c, r, o, s) {
  if (c.length > -1 && !c.return)
    switch (c.type) {
      case dr:
        c.return = Zd(c.value, c.length, o);
        return;
      case Cd:
        return Ac([Mu(c, { value: tt(c.value, "@", "@" + yt) })], s);
      case _c:
        if (c.length)
          return Y1(o = c.props, function(b) {
            switch (uu(b, s = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                Ga(Mu(c, { props: [tt(b, /:(read-\w+)/, ":" + Je + "$1")] })), Ga(Mu(c, { props: [b] })), ar(c, { props: yd(o, s) });
                break;
              // :placeholder
              case "::placeholder":
                Ga(Mu(c, { props: [tt(b, /:(plac\w+)/, ":" + yt + "input-$1")] })), Ga(Mu(c, { props: [tt(b, /:(plac\w+)/, ":" + Je + "$1")] })), Ga(Mu(c, { props: [tt(b, /:(plac\w+)/, At + "input-$1")] })), Ga(Mu(c, { props: [b] })), ar(c, { props: yd(o, s) });
                break;
            }
            return "";
          });
    }
}
var W1 = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Za = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Vd = "active", Ld = "data-styled-version", Rc = "6.1.19", yr = `/*!sc*/
`, Tc = typeof window < "u" && typeof document < "u", F1 = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" && process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY), Uc = Object.freeze([]), Va = Object.freeze({});
function I1(c, r, o) {
  return o === void 0 && (o = Va), c.theme !== o.theme && c.theme || r || o.theme;
}
var Kd = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), P1 = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, tv = /(^-|-$)/g;
function gd(c) {
  return c.replace(P1, "-").replace(tv, "");
}
var lv = /(a)(d)/gi, oc = 52, Sd = function(c) {
  return String.fromCharCode(c + (c > 25 ? 39 : 97));
};
function cr(c) {
  var r, o = "";
  for (r = Math.abs(c); r > oc; r = r / oc | 0) o = Sd(r % oc) + o;
  return (Sd(r % oc) + o).replace(lv, "$1-$2");
}
var $i, wd = 5381, ja = function(c, r) {
  for (var o = r.length; o; ) c = 33 * c ^ r.charCodeAt(--o);
  return c;
}, Jd = function(c) {
  return ja(wd, c);
};
function uv(c) {
  return cr(Jd(c) >>> 0);
}
function av(c) {
  return c.displayName || c.name || "Component";
}
function ki(c) {
  return typeof c == "string" && !0;
}
var $d = typeof Symbol == "function" && Symbol.for, kd = $d ? Symbol.for("react.memo") : 60115, ev = $d ? Symbol.for("react.forward_ref") : 60112, nv = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, cv = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Wd = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, fv = (($i = {})[ev] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, $i[kd] = Wd, $i);
function pd(c) {
  return ("type" in (r = c) && r.type.$$typeof) === kd ? Wd : "$$typeof" in c ? fv[c.$$typeof] : nv;
  var r;
}
var iv = Object.defineProperty, rv = Object.getOwnPropertyNames, bd = Object.getOwnPropertySymbols, sv = Object.getOwnPropertyDescriptor, ov = Object.getPrototypeOf, Ed = Object.prototype;
function Fd(c, r, o) {
  if (typeof r != "string") {
    if (Ed) {
      var s = ov(r);
      s && s !== Ed && Fd(c, s, o);
    }
    var b = rv(r);
    bd && (b = b.concat(bd(r)));
    for (var D = pd(c), U = pd(r), B = 0; B < b.length; ++B) {
      var M = b[B];
      if (!(M in cv || o && o[M] || U && M in U || D && M in D)) {
        var E = sv(r, M);
        try {
          iv(c, M, E);
        } catch {
        }
      }
    }
  }
  return c;
}
function La(c) {
  return typeof c == "function";
}
function vr(c) {
  return typeof c == "object" && "styledComponentId" in c;
}
function ku(c, r) {
  return c && r ? "".concat(c, " ").concat(r) : c || r || "";
}
function Ad(c, r) {
  if (c.length === 0) return "";
  for (var o = c[0], s = 1; s < c.length; s++) o += c[s];
  return o;
}
function $e(c) {
  return c !== null && typeof c == "object" && c.constructor.name === Object.name && !("props" in c && c.$$typeof);
}
function fr(c, r, o) {
  if (o === void 0 && (o = !1), !o && !$e(c) && !Array.isArray(c)) return r;
  if (Array.isArray(r)) for (var s = 0; s < r.length; s++) c[s] = fr(c[s], r[s]);
  else if ($e(r)) for (var s in r) c[s] = fr(c[s], r[s]);
  return c;
}
function mr(c, r) {
  Object.defineProperty(c, "toString", { value: r });
}
function ke(c) {
  for (var r = [], o = 1; o < arguments.length; o++) r[o - 1] = arguments[o];
  return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(c, " for more information.").concat(r.length > 0 ? " Args: ".concat(r.join(", ")) : ""));
}
var dv = function() {
  function c(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  return c.prototype.indexOfGroup = function(r) {
    for (var o = 0, s = 0; s < r; s++) o += this.groupSizes[s];
    return o;
  }, c.prototype.insertRules = function(r, o) {
    if (r >= this.groupSizes.length) {
      for (var s = this.groupSizes, b = s.length, D = b; r >= D; ) if ((D <<= 1) < 0) throw ke(16, "".concat(r));
      this.groupSizes = new Uint32Array(D), this.groupSizes.set(s), this.length = D;
      for (var U = b; U < D; U++) this.groupSizes[U] = 0;
    }
    for (var B = this.indexOfGroup(r + 1), M = (U = 0, o.length); U < M; U++) this.tag.insertRule(B, o[U]) && (this.groupSizes[r]++, B++);
  }, c.prototype.clearGroup = function(r) {
    if (r < this.length) {
      var o = this.groupSizes[r], s = this.indexOfGroup(r), b = s + o;
      this.groupSizes[r] = 0;
      for (var D = s; D < b; D++) this.tag.deleteRule(s);
    }
  }, c.prototype.getGroup = function(r) {
    var o = "";
    if (r >= this.length || this.groupSizes[r] === 0) return o;
    for (var s = this.groupSizes[r], b = this.indexOfGroup(r), D = b + s, U = b; U < D; U++) o += "".concat(this.tag.getRule(U)).concat(yr);
    return o;
  }, c;
}(), pc = /* @__PURE__ */ new Map(), zc = /* @__PURE__ */ new Map(), bc = 1, dc = function(c) {
  if (pc.has(c)) return pc.get(c);
  for (; zc.has(bc); ) bc++;
  var r = bc++;
  return pc.set(c, r), zc.set(r, c), r;
}, hv = function(c, r) {
  bc = r + 1, pc.set(c, r), zc.set(r, c);
}, yv = "style[".concat(Za, "][").concat(Ld, '="').concat(Rc, '"]'), vv = new RegExp("^".concat(Za, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), mv = function(c, r, o) {
  for (var s, b = o.split(","), D = 0, U = b.length; D < U; D++) (s = b[D]) && c.registerName(r, s);
}, gv = function(c, r) {
  for (var o, s = ((o = r.textContent) !== null && o !== void 0 ? o : "").split(yr), b = [], D = 0, U = s.length; D < U; D++) {
    var B = s[D].trim();
    if (B) {
      var M = B.match(vv);
      if (M) {
        var E = 0 | parseInt(M[1], 10), R = M[2];
        E !== 0 && (hv(R, E), mv(c, R, M[3]), c.getTag().insertRules(E, b)), b.length = 0;
      } else b.push(B);
    }
  }
}, Td = function(c) {
  for (var r = document.querySelectorAll(yv), o = 0, s = r.length; o < s; o++) {
    var b = r[o];
    b && b.getAttribute(Za) !== Vd && (gv(c, b), b.parentNode && b.parentNode.removeChild(b));
  }
};
function Sv() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Id = function(c) {
  var r = document.head, o = c || r, s = document.createElement("style"), b = function(B) {
    var M = Array.from(B.querySelectorAll("style[".concat(Za, "]")));
    return M[M.length - 1];
  }(o), D = b !== void 0 ? b.nextSibling : null;
  s.setAttribute(Za, Vd), s.setAttribute(Ld, Rc);
  var U = Sv();
  return U && s.setAttribute("nonce", U), o.insertBefore(s, D), s;
}, pv = function() {
  function c(r) {
    this.element = Id(r), this.element.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet) return o.sheet;
      for (var s = document.styleSheets, b = 0, D = s.length; b < D; b++) {
        var U = s[b];
        if (U.ownerNode === o) return U;
      }
      throw ke(17);
    }(this.element), this.length = 0;
  }
  return c.prototype.insertRule = function(r, o) {
    try {
      return this.sheet.insertRule(o, r), this.length++, !0;
    } catch {
      return !1;
    }
  }, c.prototype.deleteRule = function(r) {
    this.sheet.deleteRule(r), this.length--;
  }, c.prototype.getRule = function(r) {
    var o = this.sheet.cssRules[r];
    return o && o.cssText ? o.cssText : "";
  }, c;
}(), bv = function() {
  function c(r) {
    this.element = Id(r), this.nodes = this.element.childNodes, this.length = 0;
  }
  return c.prototype.insertRule = function(r, o) {
    if (r <= this.length && r >= 0) {
      var s = document.createTextNode(o);
      return this.element.insertBefore(s, this.nodes[r] || null), this.length++, !0;
    }
    return !1;
  }, c.prototype.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, c.prototype.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, c;
}(), Ev = function() {
  function c(r) {
    this.rules = [], this.length = 0;
  }
  return c.prototype.insertRule = function(r, o) {
    return r <= this.length && (this.rules.splice(r, 0, o), this.length++, !0);
  }, c.prototype.deleteRule = function(r) {
    this.rules.splice(r, 1), this.length--;
  }, c.prototype.getRule = function(r) {
    return r < this.length ? this.rules[r] : "";
  }, c;
}(), zd = Tc, Av = { isServer: !Tc, useCSSOMInjection: !F1 }, Pd = function() {
  function c(r, o, s) {
    r === void 0 && (r = Va), o === void 0 && (o = {});
    var b = this;
    this.options = al(al({}, Av), r), this.gs = o, this.names = new Map(s), this.server = !!r.isServer, !this.server && Tc && zd && (zd = !1, Td(this)), mr(this, function() {
      return function(D) {
        for (var U = D.getTag(), B = U.length, M = "", E = function(C) {
          var G = function(ut) {
            return zc.get(ut);
          }(C);
          if (G === void 0) return "continue";
          var Y = D.names.get(G), j = U.getGroup(C);
          if (Y === void 0 || !Y.size || j.length === 0) return "continue";
          var W = "".concat(Za, ".g").concat(C, '[id="').concat(G, '"]'), lt = "";
          Y !== void 0 && Y.forEach(function(ut) {
            ut.length > 0 && (lt += "".concat(ut, ","));
          }), M += "".concat(j).concat(W, '{content:"').concat(lt, '"}').concat(yr);
        }, R = 0; R < B; R++) E(R);
        return M;
      }(b);
    });
  }
  return c.registerId = function(r) {
    return dc(r);
  }, c.prototype.rehydrate = function() {
    !this.server && Tc && Td(this);
  }, c.prototype.reconstructWithOptions = function(r, o) {
    return o === void 0 && (o = !0), new c(al(al({}, this.options), r), this.gs, o && this.names || void 0);
  }, c.prototype.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, c.prototype.getTag = function() {
    return this.tag || (this.tag = (r = function(o) {
      var s = o.useCSSOMInjection, b = o.target;
      return o.isServer ? new Ev(b) : s ? new pv(b) : new bv(b);
    }(this.options), new dv(r)));
    var r;
  }, c.prototype.hasNameForId = function(r, o) {
    return this.names.has(r) && this.names.get(r).has(o);
  }, c.prototype.registerName = function(r, o) {
    if (dc(r), this.names.has(r)) this.names.get(r).add(o);
    else {
      var s = /* @__PURE__ */ new Set();
      s.add(o), this.names.set(r, s);
    }
  }, c.prototype.insertRules = function(r, o, s) {
    this.registerName(r, o), this.getTag().insertRules(dc(r), s);
  }, c.prototype.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, c.prototype.clearRules = function(r) {
    this.getTag().clearGroup(dc(r)), this.clearNames(r);
  }, c.prototype.clearTag = function() {
    this.tag = void 0;
  }, c;
}(), Tv = /&/g, zv = /^\s*\/\/.*$/gm;
function th(c, r) {
  return c.map(function(o) {
    return o.type === "rule" && (o.value = "".concat(r, " ").concat(o.value), o.value = o.value.replaceAll(",", ",".concat(r, " ")), o.props = o.props.map(function(s) {
      return "".concat(r, " ").concat(s);
    })), Array.isArray(o.children) && o.type !== "@keyframes" && (o.children = th(o.children, r)), o;
  });
}
function _v(c) {
  var r, o, s, b = Va, D = b.options, U = D === void 0 ? Va : D, B = b.plugins, M = B === void 0 ? Uc : B, E = function(G, Y, j) {
    return j.startsWith(o) && j.endsWith(o) && j.replaceAll(o, "").length > 0 ? ".".concat(r) : G;
  }, R = M.slice();
  R.push(function(G) {
    G.type === _c && G.value.includes("&") && (G.props[0] = G.props[0].replace(Tv, o).replace(s, E));
  }), U.prefix && R.push(k1), R.push(w1);
  var C = function(G, Y, j, W) {
    Y === void 0 && (Y = ""), j === void 0 && (j = ""), W === void 0 && (W = "&"), r = W, o = Y, s = new RegExp("\\".concat(o, "\\b"), "g");
    var lt = G.replace(zv, ""), ut = L1(j || Y ? "".concat(j, " ").concat(Y, " { ").concat(lt, " }") : lt);
    U.namespace && (ut = th(ut, U.namespace));
    var F = [];
    return Ac(ut, J1(R.concat($1(function(k) {
      return F.push(k);
    })))), F;
  };
  return C.hash = M.length ? M.reduce(function(G, Y) {
    return Y.name || ke(15), ja(G, Y.name);
  }, wd).toString() : "", C;
}
var Ov = new Pd(), ir = _v(), lh = Iu.createContext({ shouldForwardProp: void 0, styleSheet: Ov, stylis: ir });
lh.Consumer;
Iu.createContext(void 0);
function _d() {
  return or.useContext(lh);
}
var Dv = function() {
  function c(r, o) {
    var s = this;
    this.inject = function(b, D) {
      D === void 0 && (D = ir);
      var U = s.name + D.hash;
      b.hasNameForId(s.id, U) || b.insertRules(s.id, U, D(s.rules, U, "@keyframes"));
    }, this.name = r, this.id = "sc-keyframes-".concat(r), this.rules = o, mr(this, function() {
      throw ke(12, String(s.name));
    });
  }
  return c.prototype.getName = function(r) {
    return r === void 0 && (r = ir), this.name + r.hash;
  }, c;
}(), Mv = function(c) {
  return c >= "A" && c <= "Z";
};
function Od(c) {
  for (var r = "", o = 0; o < c.length; o++) {
    var s = c[o];
    if (o === 1 && s === "-" && c[0] === "-") return c;
    Mv(s) ? r += "-" + s.toLowerCase() : r += s;
  }
  return r.startsWith("ms-") ? "-" + r : r;
}
var uh = function(c) {
  return c == null || c === !1 || c === "";
}, ah = function(c) {
  var r, o, s = [];
  for (var b in c) {
    var D = c[b];
    c.hasOwnProperty(b) && !uh(D) && (Array.isArray(D) && D.isCss || La(D) ? s.push("".concat(Od(b), ":"), D, ";") : $e(D) ? s.push.apply(s, Ec(Ec(["".concat(b, " {")], ah(D), !1), ["}"], !1)) : s.push("".concat(Od(b), ": ").concat((r = b, (o = D) == null || typeof o == "boolean" || o === "" ? "" : typeof o != "number" || o === 0 || r in W1 || r.startsWith("--") ? String(o).trim() : "".concat(o, "px")), ";")));
  }
  return s;
};
function Fu(c, r, o, s) {
  if (uh(c)) return [];
  if (vr(c)) return [".".concat(c.styledComponentId)];
  if (La(c)) {
    if (!La(D = c) || D.prototype && D.prototype.isReactComponent || !r) return [c];
    var b = c(r);
    return Fu(b, r, o, s);
  }
  var D;
  return c instanceof Dv ? o ? (c.inject(o, s), [c.getName(s)]) : [c] : $e(c) ? ah(c) : Array.isArray(c) ? Array.prototype.concat.apply(Uc, c.map(function(U) {
    return Fu(U, r, o, s);
  })) : [c.toString()];
}
function Rv(c) {
  for (var r = 0; r < c.length; r += 1) {
    var o = c[r];
    if (La(o) && !vr(o)) return !1;
  }
  return !0;
}
var Uv = Jd(Rc), Nv = function() {
  function c(r, o, s) {
    this.rules = r, this.staticRulesId = "", this.isStatic = (s === void 0 || s.isStatic) && Rv(r), this.componentId = o, this.baseHash = ja(Uv, o), this.baseStyle = s, Pd.registerId(o);
  }
  return c.prototype.generateAndInjectStyles = function(r, o, s) {
    var b = this.baseStyle ? this.baseStyle.generateAndInjectStyles(r, o, s) : "";
    if (this.isStatic && !s.hash) if (this.staticRulesId && o.hasNameForId(this.componentId, this.staticRulesId)) b = ku(b, this.staticRulesId);
    else {
      var D = Ad(Fu(this.rules, r, o, s)), U = cr(ja(this.baseHash, D) >>> 0);
      if (!o.hasNameForId(this.componentId, U)) {
        var B = s(D, ".".concat(U), void 0, this.componentId);
        o.insertRules(this.componentId, U, B);
      }
      b = ku(b, U), this.staticRulesId = U;
    }
    else {
      for (var M = ja(this.baseHash, s.hash), E = "", R = 0; R < this.rules.length; R++) {
        var C = this.rules[R];
        if (typeof C == "string") E += C;
        else if (C) {
          var G = Ad(Fu(C, r, o, s));
          M = ja(M, G + R), E += G;
        }
      }
      if (E) {
        var Y = cr(M >>> 0);
        o.hasNameForId(this.componentId, Y) || o.insertRules(this.componentId, Y, s(E, ".".concat(Y), void 0, this.componentId)), b = ku(b, Y);
      }
    }
    return b;
  }, c;
}(), eh = Iu.createContext(void 0);
eh.Consumer;
var Wi = {};
function Hv(c, r, o) {
  var s = vr(c), b = c, D = !ki(c), U = r.attrs, B = U === void 0 ? Uc : U, M = r.componentId, E = M === void 0 ? function(rt, Z) {
    var I = typeof rt != "string" ? "sc" : gd(rt);
    Wi[I] = (Wi[I] || 0) + 1;
    var K = "".concat(I, "-").concat(uv(Rc + I + Wi[I]));
    return Z ? "".concat(Z, "-").concat(K) : K;
  }(r.displayName, r.parentComponentId) : M, R = r.displayName, C = R === void 0 ? function(rt) {
    return ki(rt) ? "styled.".concat(rt) : "Styled(".concat(av(rt), ")");
  }(c) : R, G = r.displayName && r.componentId ? "".concat(gd(r.displayName), "-").concat(r.componentId) : r.componentId || E, Y = s && b.attrs ? b.attrs.concat(B).filter(Boolean) : B, j = r.shouldForwardProp;
  if (s && b.shouldForwardProp) {
    var W = b.shouldForwardProp;
    if (r.shouldForwardProp) {
      var lt = r.shouldForwardProp;
      j = function(rt, Z) {
        return W(rt, Z) && lt(rt, Z);
      };
    } else j = W;
  }
  var ut = new Nv(o, G, s ? b.componentStyle : void 0);
  function F(rt, Z) {
    return function(I, K, Rt) {
      var Wt = I.attrs, au = I.componentStyle, zl = I.defaultProps, Yt = I.foldedComponentIds, Bl = I.styledComponentId, Cl = I.target, Bt = Iu.useContext(eh), A = _d(), H = I.shouldForwardProp || A.shouldForwardProp, V = I1(K, Bt, zl) || Va, nt = function(ct, w, Ct) {
        for (var ht, wt = al(al({}, w), { className: void 0, theme: Ct }), Ru = 0; Ru < ct.length; Ru += 1) {
          var Gl = La(ht = ct[Ru]) ? ht(wt) : ht;
          for (var hl in Gl) wt[hl] = hl === "className" ? ku(wt[hl], Gl[hl]) : hl === "style" ? al(al({}, wt[hl]), Gl[hl]) : Gl[hl];
        }
        return w.className && (wt.className = ku(wt.className, w.className)), wt;
      }(Wt, K, V), h = nt.as || Cl, O = {};
      for (var N in nt) nt[N] === void 0 || N[0] === "$" || N === "as" || N === "theme" && nt.theme === V || (N === "forwardedAs" ? O.as = nt.forwardedAs : H && !H(N, h) || (O[N] = nt[N]));
      var q = function(ct, w) {
        var Ct = _d(), ht = ct.generateAndInjectStyles(w, Ct.styleSheet, Ct.stylis);
        return ht;
      }(au, nt), Q = ku(Yt, Bl);
      return q && (Q += " " + q), nt.className && (Q += " " + nt.className), O[ki(h) && !Kd.has(h) ? "class" : "className"] = Q, Rt && (O.ref = Rt), or.createElement(h, O);
    }(k, rt, Z);
  }
  F.displayName = C;
  var k = Iu.forwardRef(F);
  return k.attrs = Y, k.componentStyle = ut, k.displayName = C, k.shouldForwardProp = j, k.foldedComponentIds = s ? ku(b.foldedComponentIds, b.styledComponentId) : "", k.styledComponentId = G, k.target = s ? b.target : c, Object.defineProperty(k, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(rt) {
    this._foldedDefaultProps = s ? function(Z) {
      for (var I = [], K = 1; K < arguments.length; K++) I[K - 1] = arguments[K];
      for (var Rt = 0, Wt = I; Rt < Wt.length; Rt++) fr(Z, Wt[Rt], !0);
      return Z;
    }({}, b.defaultProps, rt) : rt;
  } }), mr(k, function() {
    return ".".concat(k.styledComponentId);
  }), D && Fd(k, c, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), k;
}
function Dd(c, r) {
  for (var o = [c[0]], s = 0, b = r.length; s < b; s += 1) o.push(r[s], c[s + 1]);
  return o;
}
var Md = function(c) {
  return Object.assign(c, { isCss: !0 });
};
function qv(c) {
  for (var r = [], o = 1; o < arguments.length; o++) r[o - 1] = arguments[o];
  if (La(c) || $e(c)) return Md(Fu(Dd(Uc, Ec([c], r, !0))));
  var s = c;
  return r.length === 0 && s.length === 1 && typeof s[0] == "string" ? Fu(s) : Md(Fu(Dd(s, r)));
}
function rr(c, r, o) {
  if (o === void 0 && (o = Va), !r) throw ke(1, r);
  var s = function(b) {
    for (var D = [], U = 1; U < arguments.length; U++) D[U - 1] = arguments[U];
    return c(r, o, qv.apply(void 0, Ec([b], D, !1)));
  };
  return s.attrs = function(b) {
    return rr(c, r, al(al({}, o), { attrs: Array.prototype.concat(o.attrs, b).filter(Boolean) }));
  }, s.withConfig = function(b) {
    return rr(c, r, al(al({}, o), b));
  }, s;
}
var nh = function(c) {
  return rr(Hv, c);
}, wa = nh;
Kd.forEach(function(c) {
  wa[c] = nh(c);
});
const xv = wa.header`
  background: #fff;
  border-bottom: 1px solid #e9ecef;
  padding: 15px 0;
`, Yv = wa.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`, Bv = wa.div`
  display: flex;
  align-items: center;
  gap: 10px;
  
  h1 {
    font-size: 1.3rem;
    margin: 0;
    font-weight: 500;
    color: #333;
  }
`, Cv = wa.div`
  width: 32px;
  height: 32px;
  background: #007bff;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
`, Gv = wa.div`
  display: flex;
  align-items: center;
  gap: 15px;
  color: #666;
  font-size: 0.9rem;
  
  .user-name {
    color: #333;
    font-weight: 500;
  }
  
  .logout {
    color: #007bff;
    text-decoration: none;
    cursor: pointer;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;
function jv() {
  return /* @__PURE__ */ tu.jsx(xv, { children: /* @__PURE__ */ tu.jsxs(Yv, { children: [
    /* @__PURE__ */ tu.jsxs(Bv, { children: [
      /* @__PURE__ */ tu.jsx(Cv, { children: "⚡" }),
      /* @__PURE__ */ tu.jsx("h1", { children: "Backoffice" })
    ] }),
    /* @__PURE__ */ tu.jsxs(Gv, { children: [
      /* @__PURE__ */ tu.jsx("span", { className: "user-name", children: "Juan Pérez" }),
      /* @__PURE__ */ tu.jsx("span", { children: "|" }),
      /* @__PURE__ */ tu.jsx("a", { href: "#logout", className: "logout", children: "Cerrar Sesión" })
    ] })
  ] }) });
}
var Fi = { exports: {} }, Ke = {}, Ii = { exports: {} }, Pi = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rd;
function Xv() {
  return Rd || (Rd = 1, function(c) {
    function r(A, H) {
      var V = A.length;
      A.push(H);
      t: for (; 0 < V; ) {
        var nt = V - 1 >>> 1, h = A[nt];
        if (0 < b(h, H))
          A[nt] = H, A[V] = h, V = nt;
        else break t;
      }
    }
    function o(A) {
      return A.length === 0 ? null : A[0];
    }
    function s(A) {
      if (A.length === 0) return null;
      var H = A[0], V = A.pop();
      if (V !== H) {
        A[0] = V;
        t: for (var nt = 0, h = A.length, O = h >>> 1; nt < O; ) {
          var N = 2 * (nt + 1) - 1, q = A[N], Q = N + 1, ct = A[Q];
          if (0 > b(q, V))
            Q < h && 0 > b(ct, q) ? (A[nt] = ct, A[Q] = V, nt = Q) : (A[nt] = q, A[N] = V, nt = N);
          else if (Q < h && 0 > b(ct, V))
            A[nt] = ct, A[Q] = V, nt = Q;
          else break t;
        }
      }
      return H;
    }
    function b(A, H) {
      var V = A.sortIndex - H.sortIndex;
      return V !== 0 ? V : A.id - H.id;
    }
    if (c.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var D = performance;
      c.unstable_now = function() {
        return D.now();
      };
    } else {
      var U = Date, B = U.now();
      c.unstable_now = function() {
        return U.now() - B;
      };
    }
    var M = [], E = [], R = 1, C = null, G = 3, Y = !1, j = !1, W = !1, lt = !1, ut = typeof setTimeout == "function" ? setTimeout : null, F = typeof clearTimeout == "function" ? clearTimeout : null, k = typeof setImmediate < "u" ? setImmediate : null;
    function rt(A) {
      for (var H = o(E); H !== null; ) {
        if (H.callback === null) s(E);
        else if (H.startTime <= A)
          s(E), H.sortIndex = H.expirationTime, r(M, H);
        else break;
        H = o(E);
      }
    }
    function Z(A) {
      if (W = !1, rt(A), !j)
        if (o(M) !== null)
          j = !0, I || (I = !0, Yt());
        else {
          var H = o(E);
          H !== null && Bt(Z, H.startTime - A);
        }
    }
    var I = !1, K = -1, Rt = 5, Wt = -1;
    function au() {
      return lt ? !0 : !(c.unstable_now() - Wt < Rt);
    }
    function zl() {
      if (lt = !1, I) {
        var A = c.unstable_now();
        Wt = A;
        var H = !0;
        try {
          t: {
            j = !1, W && (W = !1, F(K), K = -1), Y = !0;
            var V = G;
            try {
              l: {
                for (rt(A), C = o(M); C !== null && !(C.expirationTime > A && au()); ) {
                  var nt = C.callback;
                  if (typeof nt == "function") {
                    C.callback = null, G = C.priorityLevel;
                    var h = nt(
                      C.expirationTime <= A
                    );
                    if (A = c.unstable_now(), typeof h == "function") {
                      C.callback = h, rt(A), H = !0;
                      break l;
                    }
                    C === o(M) && s(M), rt(A);
                  } else s(M);
                  C = o(M);
                }
                if (C !== null) H = !0;
                else {
                  var O = o(E);
                  O !== null && Bt(
                    Z,
                    O.startTime - A
                  ), H = !1;
                }
              }
              break t;
            } finally {
              C = null, G = V, Y = !1;
            }
            H = void 0;
          }
        } finally {
          H ? Yt() : I = !1;
        }
      }
    }
    var Yt;
    if (typeof k == "function")
      Yt = function() {
        k(zl);
      };
    else if (typeof MessageChannel < "u") {
      var Bl = new MessageChannel(), Cl = Bl.port2;
      Bl.port1.onmessage = zl, Yt = function() {
        Cl.postMessage(null);
      };
    } else
      Yt = function() {
        ut(zl, 0);
      };
    function Bt(A, H) {
      K = ut(function() {
        A(c.unstable_now());
      }, H);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(A) {
      A.callback = null;
    }, c.unstable_forceFrameRate = function(A) {
      0 > A || 125 < A ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Rt = 0 < A ? Math.floor(1e3 / A) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return G;
    }, c.unstable_next = function(A) {
      switch (G) {
        case 1:
        case 2:
        case 3:
          var H = 3;
          break;
        default:
          H = G;
      }
      var V = G;
      G = H;
      try {
        return A();
      } finally {
        G = V;
      }
    }, c.unstable_requestPaint = function() {
      lt = !0;
    }, c.unstable_runWithPriority = function(A, H) {
      switch (A) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          A = 3;
      }
      var V = G;
      G = A;
      try {
        return H();
      } finally {
        G = V;
      }
    }, c.unstable_scheduleCallback = function(A, H, V) {
      var nt = c.unstable_now();
      switch (typeof V == "object" && V !== null ? (V = V.delay, V = typeof V == "number" && 0 < V ? nt + V : nt) : V = nt, A) {
        case 1:
          var h = -1;
          break;
        case 2:
          h = 250;
          break;
        case 5:
          h = 1073741823;
          break;
        case 4:
          h = 1e4;
          break;
        default:
          h = 5e3;
      }
      return h = V + h, A = {
        id: R++,
        callback: H,
        priorityLevel: A,
        startTime: V,
        expirationTime: h,
        sortIndex: -1
      }, V > nt ? (A.sortIndex = V, r(E, A), o(M) === null && A === o(E) && (W ? (F(K), K = -1) : W = !0, Bt(Z, V - nt))) : (A.sortIndex = h, r(M, A), j || Y || (j = !0, I || (I = !0, Yt()))), A;
    }, c.unstable_shouldYield = au, c.unstable_wrapCallback = function(A) {
      var H = G;
      return function() {
        var V = G;
        G = H;
        try {
          return A.apply(this, arguments);
        } finally {
          G = V;
        }
      };
    };
  }(Pi)), Pi;
}
var Ud;
function Qv() {
  return Ud || (Ud = 1, Ii.exports = Xv()), Ii.exports;
}
var tr = { exports: {} }, kt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nd;
function Zv() {
  if (Nd) return kt;
  Nd = 1;
  var c = sr();
  function r(M) {
    var E = "https://react.dev/errors/" + M;
    if (1 < arguments.length) {
      E += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var R = 2; R < arguments.length; R++)
        E += "&args[]=" + encodeURIComponent(arguments[R]);
    }
    return "Minified React error #" + M + "; visit " + E + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function o() {
  }
  var s = {
    d: {
      f: o,
      r: function() {
        throw Error(r(522));
      },
      D: o,
      C: o,
      L: o,
      m: o,
      X: o,
      S: o,
      M: o
    },
    p: 0,
    findDOMNode: null
  }, b = Symbol.for("react.portal");
  function D(M, E, R) {
    var C = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: b,
      key: C == null ? null : "" + C,
      children: M,
      containerInfo: E,
      implementation: R
    };
  }
  var U = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function B(M, E) {
    if (M === "font") return "";
    if (typeof E == "string")
      return E === "use-credentials" ? E : "";
  }
  return kt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, kt.createPortal = function(M, E) {
    var R = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!E || E.nodeType !== 1 && E.nodeType !== 9 && E.nodeType !== 11)
      throw Error(r(299));
    return D(M, E, null, R);
  }, kt.flushSync = function(M) {
    var E = U.T, R = s.p;
    try {
      if (U.T = null, s.p = 2, M) return M();
    } finally {
      U.T = E, s.p = R, s.d.f();
    }
  }, kt.preconnect = function(M, E) {
    typeof M == "string" && (E ? (E = E.crossOrigin, E = typeof E == "string" ? E === "use-credentials" ? E : "" : void 0) : E = null, s.d.C(M, E));
  }, kt.prefetchDNS = function(M) {
    typeof M == "string" && s.d.D(M);
  }, kt.preinit = function(M, E) {
    if (typeof M == "string" && E && typeof E.as == "string") {
      var R = E.as, C = B(R, E.crossOrigin), G = typeof E.integrity == "string" ? E.integrity : void 0, Y = typeof E.fetchPriority == "string" ? E.fetchPriority : void 0;
      R === "style" ? s.d.S(
        M,
        typeof E.precedence == "string" ? E.precedence : void 0,
        {
          crossOrigin: C,
          integrity: G,
          fetchPriority: Y
        }
      ) : R === "script" && s.d.X(M, {
        crossOrigin: C,
        integrity: G,
        fetchPriority: Y,
        nonce: typeof E.nonce == "string" ? E.nonce : void 0
      });
    }
  }, kt.preinitModule = function(M, E) {
    if (typeof M == "string")
      if (typeof E == "object" && E !== null) {
        if (E.as == null || E.as === "script") {
          var R = B(
            E.as,
            E.crossOrigin
          );
          s.d.M(M, {
            crossOrigin: R,
            integrity: typeof E.integrity == "string" ? E.integrity : void 0,
            nonce: typeof E.nonce == "string" ? E.nonce : void 0
          });
        }
      } else E == null && s.d.M(M);
  }, kt.preload = function(M, E) {
    if (typeof M == "string" && typeof E == "object" && E !== null && typeof E.as == "string") {
      var R = E.as, C = B(R, E.crossOrigin);
      s.d.L(M, R, {
        crossOrigin: C,
        integrity: typeof E.integrity == "string" ? E.integrity : void 0,
        nonce: typeof E.nonce == "string" ? E.nonce : void 0,
        type: typeof E.type == "string" ? E.type : void 0,
        fetchPriority: typeof E.fetchPriority == "string" ? E.fetchPriority : void 0,
        referrerPolicy: typeof E.referrerPolicy == "string" ? E.referrerPolicy : void 0,
        imageSrcSet: typeof E.imageSrcSet == "string" ? E.imageSrcSet : void 0,
        imageSizes: typeof E.imageSizes == "string" ? E.imageSizes : void 0,
        media: typeof E.media == "string" ? E.media : void 0
      });
    }
  }, kt.preloadModule = function(M, E) {
    if (typeof M == "string")
      if (E) {
        var R = B(E.as, E.crossOrigin);
        s.d.m(M, {
          as: typeof E.as == "string" && E.as !== "script" ? E.as : void 0,
          crossOrigin: R,
          integrity: typeof E.integrity == "string" ? E.integrity : void 0
        });
      } else s.d.m(M);
  }, kt.requestFormReset = function(M) {
    s.d.r(M);
  }, kt.unstable_batchedUpdates = function(M, E) {
    return M(E);
  }, kt.useFormState = function(M, E, R) {
    return U.H.useFormState(M, E, R);
  }, kt.useFormStatus = function() {
    return U.H.useHostTransitionStatus();
  }, kt.version = "19.1.0", kt;
}
var Hd;
function Vv() {
  if (Hd) return tr.exports;
  Hd = 1;
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (r) {
        console.error(r);
      }
  }
  return c(), tr.exports = Zv(), tr.exports;
}
var qd;
function Lv() {
  if (qd) return Ke;
  qd = 1;
  /**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var c = Qv(), r = sr(), o = Vv();
  function s(t) {
    var l = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      l += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        l += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + t + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function b(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function D(t) {
    var l = t, u = t;
    if (t.alternate) for (; l.return; ) l = l.return;
    else {
      t = l;
      do
        l = t, (l.flags & 4098) !== 0 && (u = l.return), t = l.return;
      while (t);
    }
    return l.tag === 3 ? u : null;
  }
  function U(t) {
    if (t.tag === 13) {
      var l = t.memoizedState;
      if (l === null && (t = t.alternate, t !== null && (l = t.memoizedState)), l !== null) return l.dehydrated;
    }
    return null;
  }
  function B(t) {
    if (D(t) !== t)
      throw Error(s(188));
  }
  function M(t) {
    var l = t.alternate;
    if (!l) {
      if (l = D(t), l === null) throw Error(s(188));
      return l !== t ? null : t;
    }
    for (var u = t, a = l; ; ) {
      var e = u.return;
      if (e === null) break;
      var n = e.alternate;
      if (n === null) {
        if (a = e.return, a !== null) {
          u = a;
          continue;
        }
        break;
      }
      if (e.child === n.child) {
        for (n = e.child; n; ) {
          if (n === u) return B(e), t;
          if (n === a) return B(e), l;
          n = n.sibling;
        }
        throw Error(s(188));
      }
      if (u.return !== a.return) u = e, a = n;
      else {
        for (var f = !1, i = e.child; i; ) {
          if (i === u) {
            f = !0, u = e, a = n;
            break;
          }
          if (i === a) {
            f = !0, a = e, u = n;
            break;
          }
          i = i.sibling;
        }
        if (!f) {
          for (i = n.child; i; ) {
            if (i === u) {
              f = !0, u = n, a = e;
              break;
            }
            if (i === a) {
              f = !0, a = n, u = e;
              break;
            }
            i = i.sibling;
          }
          if (!f) throw Error(s(189));
        }
      }
      if (u.alternate !== a) throw Error(s(190));
    }
    if (u.tag !== 3) throw Error(s(188));
    return u.stateNode.current === u ? t : l;
  }
  function E(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t;
    for (t = t.child; t !== null; ) {
      if (l = E(t), l !== null) return l;
      t = t.sibling;
    }
    return null;
  }
  var R = Object.assign, C = Symbol.for("react.element"), G = Symbol.for("react.transitional.element"), Y = Symbol.for("react.portal"), j = Symbol.for("react.fragment"), W = Symbol.for("react.strict_mode"), lt = Symbol.for("react.profiler"), ut = Symbol.for("react.provider"), F = Symbol.for("react.consumer"), k = Symbol.for("react.context"), rt = Symbol.for("react.forward_ref"), Z = Symbol.for("react.suspense"), I = Symbol.for("react.suspense_list"), K = Symbol.for("react.memo"), Rt = Symbol.for("react.lazy"), Wt = Symbol.for("react.activity"), au = Symbol.for("react.memo_cache_sentinel"), zl = Symbol.iterator;
  function Yt(t) {
    return t === null || typeof t != "object" ? null : (t = zl && t[zl] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var Bl = Symbol.for("react.client.reference");
  function Cl(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Bl ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case j:
        return "Fragment";
      case lt:
        return "Profiler";
      case W:
        return "StrictMode";
      case Z:
        return "Suspense";
      case I:
        return "SuspenseList";
      case Wt:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case Y:
          return "Portal";
        case k:
          return (t.displayName || "Context") + ".Provider";
        case F:
          return (t._context.displayName || "Context") + ".Consumer";
        case rt:
          var l = t.render;
          return t = t.displayName, t || (t = l.displayName || l.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case K:
          return l = t.displayName || null, l !== null ? l : Cl(t.type) || "Memo";
        case Rt:
          l = t._payload, t = t._init;
          try {
            return Cl(t(l));
          } catch {
          }
      }
    return null;
  }
  var Bt = Array.isArray, A = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, nt = [], h = -1;
  function O(t) {
    return { current: t };
  }
  function N(t) {
    0 > h || (t.current = nt[h], nt[h] = null, h--);
  }
  function q(t, l) {
    h++, nt[h] = t.current, t.current = l;
  }
  var Q = O(null), ct = O(null), w = O(null), Ct = O(null);
  function ht(t, l) {
    switch (q(w, l), q(ct, t), q(Q, null), l.nodeType) {
      case 9:
      case 11:
        t = (t = l.documentElement) && (t = t.namespaceURI) ? G0(t) : 0;
        break;
      default:
        if (t = l.tagName, l = l.namespaceURI)
          l = G0(l), t = j0(l, t);
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    N(Q), q(Q, t);
  }
  function wt() {
    N(Q), N(ct), N(w);
  }
  function Ru(t) {
    t.memoizedState !== null && q(Ct, t);
    var l = Q.current, u = j0(l, t.type);
    l !== u && (q(ct, t), q(Q, u));
  }
  function Gl(t) {
    ct.current === t && (N(Q), N(ct)), Ct.current === t && (N(Ct), je._currentValue = V);
  }
  var hl = Object.prototype.hasOwnProperty, Nc = c.unstable_scheduleCallback, Hc = c.unstable_cancelCallback, ch = c.unstable_shouldYield, fh = c.unstable_requestPaint, Rl = c.unstable_now, ih = c.unstable_getCurrentPriorityLevel, gr = c.unstable_ImmediatePriority, Sr = c.unstable_UserBlockingPriority, We = c.unstable_NormalPriority, rh = c.unstable_LowPriority, pr = c.unstable_IdlePriority, sh = c.log, oh = c.unstable_setDisableYieldValue, Ja = null, el = null;
  function eu(t) {
    if (typeof sh == "function" && oh(t), el && typeof el.setStrictMode == "function")
      try {
        el.setStrictMode(Ja, t);
      } catch {
      }
  }
  var nl = Math.clz32 ? Math.clz32 : yh, dh = Math.log, hh = Math.LN2;
  function yh(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (dh(t) / hh | 0) | 0;
  }
  var Fe = 256, Ie = 4194304;
  function Uu(t) {
    var l = t & 42;
    if (l !== 0) return l;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Pe(t, l, u) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var e = 0, n = t.suspendedLanes, f = t.pingedLanes;
    t = t.warmLanes;
    var i = a & 134217727;
    return i !== 0 ? (a = i & ~n, a !== 0 ? e = Uu(a) : (f &= i, f !== 0 ? e = Uu(f) : u || (u = i & ~t, u !== 0 && (e = Uu(u))))) : (i = a & ~n, i !== 0 ? e = Uu(i) : f !== 0 ? e = Uu(f) : u || (u = a & ~t, u !== 0 && (e = Uu(u)))), e === 0 ? 0 : l !== 0 && l !== e && (l & n) === 0 && (n = e & -e, u = l & -l, n >= u || n === 32 && (u & 4194048) !== 0) ? l : e;
  }
  function $a(t, l) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & l) === 0;
  }
  function vh(t, l) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return l + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function br() {
    var t = Fe;
    return Fe <<= 1, (Fe & 4194048) === 0 && (Fe = 256), t;
  }
  function Er() {
    var t = Ie;
    return Ie <<= 1, (Ie & 62914560) === 0 && (Ie = 4194304), t;
  }
  function qc(t) {
    for (var l = [], u = 0; 31 > u; u++) l.push(t);
    return l;
  }
  function ka(t, l) {
    t.pendingLanes |= l, l !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function mh(t, l, u, a, e, n) {
    var f = t.pendingLanes;
    t.pendingLanes = u, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= u, t.entangledLanes &= u, t.errorRecoveryDisabledLanes &= u, t.shellSuspendCounter = 0;
    var i = t.entanglements, d = t.expirationTimes, g = t.hiddenUpdates;
    for (u = f & ~u; 0 < u; ) {
      var T = 31 - nl(u), _ = 1 << T;
      i[T] = 0, d[T] = -1;
      var S = g[T];
      if (S !== null)
        for (g[T] = null, T = 0; T < S.length; T++) {
          var p = S[T];
          p !== null && (p.lane &= -536870913);
        }
      u &= ~_;
    }
    a !== 0 && Ar(t, a, 0), n !== 0 && e === 0 && t.tag !== 0 && (t.suspendedLanes |= n & ~(f & ~l));
  }
  function Ar(t, l, u) {
    t.pendingLanes |= l, t.suspendedLanes &= ~l;
    var a = 31 - nl(l);
    t.entangledLanes |= l, t.entanglements[a] = t.entanglements[a] | 1073741824 | u & 4194090;
  }
  function Tr(t, l) {
    var u = t.entangledLanes |= l;
    for (t = t.entanglements; u; ) {
      var a = 31 - nl(u), e = 1 << a;
      e & l | t[a] & l && (t[a] |= l), u &= ~e;
    }
  }
  function xc(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Yc(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function zr() {
    var t = H.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : ed(t.type));
  }
  function gh(t, l) {
    var u = H.p;
    try {
      return H.p = t, l();
    } finally {
      H.p = u;
    }
  }
  var nu = Math.random().toString(36).slice(2), Jt = "__reactFiber$" + nu, It = "__reactProps$" + nu, Pu = "__reactContainer$" + nu, Bc = "__reactEvents$" + nu, Sh = "__reactListeners$" + nu, ph = "__reactHandles$" + nu, _r = "__reactResources$" + nu, Wa = "__reactMarker$" + nu;
  function Cc(t) {
    delete t[Jt], delete t[It], delete t[Bc], delete t[Sh], delete t[ph];
  }
  function ta(t) {
    var l = t[Jt];
    if (l) return l;
    for (var u = t.parentNode; u; ) {
      if (l = u[Pu] || u[Jt]) {
        if (u = l.alternate, l.child !== null || u !== null && u.child !== null)
          for (t = V0(t); t !== null; ) {
            if (u = t[Jt]) return u;
            t = V0(t);
          }
        return l;
      }
      t = u, u = t.parentNode;
    }
    return null;
  }
  function la(t) {
    if (t = t[Jt] || t[Pu]) {
      var l = t.tag;
      if (l === 5 || l === 6 || l === 13 || l === 26 || l === 27 || l === 3)
        return t;
    }
    return null;
  }
  function Fa(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t.stateNode;
    throw Error(s(33));
  }
  function ua(t) {
    var l = t[_r];
    return l || (l = t[_r] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), l;
  }
  function Gt(t) {
    t[Wa] = !0;
  }
  var Or = /* @__PURE__ */ new Set(), Dr = {};
  function Nu(t, l) {
    aa(t, l), aa(t + "Capture", l);
  }
  function aa(t, l) {
    for (Dr[t] = l, t = 0; t < l.length; t++)
      Or.add(l[t]);
  }
  var bh = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Mr = {}, Rr = {};
  function Eh(t) {
    return hl.call(Rr, t) ? !0 : hl.call(Mr, t) ? !1 : bh.test(t) ? Rr[t] = !0 : (Mr[t] = !0, !1);
  }
  function tn(t, l, u) {
    if (Eh(l))
      if (u === null) t.removeAttribute(l);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(l);
            return;
          case "boolean":
            var a = l.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(l);
              return;
            }
        }
        t.setAttribute(l, "" + u);
      }
  }
  function ln(t, l, u) {
    if (u === null) t.removeAttribute(l);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttribute(l, "" + u);
    }
  }
  function jl(t, l, u, a) {
    if (a === null) t.removeAttribute(u);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(u);
          return;
      }
      t.setAttributeNS(l, u, "" + a);
    }
  }
  var Gc, Ur;
  function ea(t) {
    if (Gc === void 0)
      try {
        throw Error();
      } catch (u) {
        var l = u.stack.trim().match(/\n( *(at )?)/);
        Gc = l && l[1] || "", Ur = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Gc + t + Ur;
  }
  var jc = !1;
  function Xc(t, l) {
    if (!t || jc) return "";
    jc = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (l) {
              var _ = function() {
                throw Error();
              };
              if (Object.defineProperty(_.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(_, []);
                } catch (p) {
                  var S = p;
                }
                Reflect.construct(t, [], _);
              } else {
                try {
                  _.call();
                } catch (p) {
                  S = p;
                }
                t.call(_.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (p) {
                S = p;
              }
              (_ = t()) && typeof _.catch == "function" && _.catch(function() {
              });
            }
          } catch (p) {
            if (p && S && typeof p.stack == "string")
              return [p.stack, S.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var e = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      e && e.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var n = a.DetermineComponentFrameRoot(), f = n[0], i = n[1];
      if (f && i) {
        var d = f.split(`
`), g = i.split(`
`);
        for (e = a = 0; a < d.length && !d[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; e < g.length && !g[e].includes(
          "DetermineComponentFrameRoot"
        ); )
          e++;
        if (a === d.length || e === g.length)
          for (a = d.length - 1, e = g.length - 1; 1 <= a && 0 <= e && d[a] !== g[e]; )
            e--;
        for (; 1 <= a && 0 <= e; a--, e--)
          if (d[a] !== g[e]) {
            if (a !== 1 || e !== 1)
              do
                if (a--, e--, 0 > e || d[a] !== g[e]) {
                  var T = `
` + d[a].replace(" at new ", " at ");
                  return t.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", t.displayName)), T;
                }
              while (1 <= a && 0 <= e);
            break;
          }
      }
    } finally {
      jc = !1, Error.prepareStackTrace = u;
    }
    return (u = t ? t.displayName || t.name : "") ? ea(u) : "";
  }
  function Ah(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return ea(t.type);
      case 16:
        return ea("Lazy");
      case 13:
        return ea("Suspense");
      case 19:
        return ea("SuspenseList");
      case 0:
      case 15:
        return Xc(t.type, !1);
      case 11:
        return Xc(t.type.render, !1);
      case 1:
        return Xc(t.type, !0);
      case 31:
        return ea("Activity");
      default:
        return "";
    }
  }
  function Nr(t) {
    try {
      var l = "";
      do
        l += Ah(t), t = t.return;
      while (t);
      return l;
    } catch (u) {
      return `
Error generating stack: ` + u.message + `
` + u.stack;
    }
  }
  function yl(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Hr(t) {
    var l = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (l === "checkbox" || l === "radio");
  }
  function Th(t) {
    var l = Hr(t) ? "checked" : "value", u = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      l
    ), a = "" + t[l];
    if (!t.hasOwnProperty(l) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
      var e = u.get, n = u.set;
      return Object.defineProperty(t, l, {
        configurable: !0,
        get: function() {
          return e.call(this);
        },
        set: function(f) {
          a = "" + f, n.call(this, f);
        }
      }), Object.defineProperty(t, l, {
        enumerable: u.enumerable
      }), {
        getValue: function() {
          return a;
        },
        setValue: function(f) {
          a = "" + f;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[l];
        }
      };
    }
  }
  function un(t) {
    t._valueTracker || (t._valueTracker = Th(t));
  }
  function qr(t) {
    if (!t) return !1;
    var l = t._valueTracker;
    if (!l) return !0;
    var u = l.getValue(), a = "";
    return t && (a = Hr(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== u ? (l.setValue(t), !0) : !1;
  }
  function an(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var zh = /[\n"\\]/g;
  function vl(t) {
    return t.replace(
      zh,
      function(l) {
        return "\\" + l.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Qc(t, l, u, a, e, n, f, i) {
    t.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? t.type = f : t.removeAttribute("type"), l != null ? f === "number" ? (l === 0 && t.value === "" || t.value != l) && (t.value = "" + yl(l)) : t.value !== "" + yl(l) && (t.value = "" + yl(l)) : f !== "submit" && f !== "reset" || t.removeAttribute("value"), l != null ? Zc(t, f, yl(l)) : u != null ? Zc(t, f, yl(u)) : a != null && t.removeAttribute("value"), e == null && n != null && (t.defaultChecked = !!n), e != null && (t.checked = e && typeof e != "function" && typeof e != "symbol"), i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? t.name = "" + yl(i) : t.removeAttribute("name");
  }
  function xr(t, l, u, a, e, n, f, i) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (t.type = n), l != null || u != null) {
      if (!(n !== "submit" && n !== "reset" || l != null))
        return;
      u = u != null ? "" + yl(u) : "", l = l != null ? "" + yl(l) : u, i || l === t.value || (t.value = l), t.defaultValue = l;
    }
    a = a ?? e, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = i ? t.checked : !!a, t.defaultChecked = !!a, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (t.name = f);
  }
  function Zc(t, l, u) {
    l === "number" && an(t.ownerDocument) === t || t.defaultValue === "" + u || (t.defaultValue = "" + u);
  }
  function na(t, l, u, a) {
    if (t = t.options, l) {
      l = {};
      for (var e = 0; e < u.length; e++)
        l["$" + u[e]] = !0;
      for (u = 0; u < t.length; u++)
        e = l.hasOwnProperty("$" + t[u].value), t[u].selected !== e && (t[u].selected = e), e && a && (t[u].defaultSelected = !0);
    } else {
      for (u = "" + yl(u), l = null, e = 0; e < t.length; e++) {
        if (t[e].value === u) {
          t[e].selected = !0, a && (t[e].defaultSelected = !0);
          return;
        }
        l !== null || t[e].disabled || (l = t[e]);
      }
      l !== null && (l.selected = !0);
    }
  }
  function Yr(t, l, u) {
    if (l != null && (l = "" + yl(l), l !== t.value && (t.value = l), u == null)) {
      t.defaultValue !== l && (t.defaultValue = l);
      return;
    }
    t.defaultValue = u != null ? "" + yl(u) : "";
  }
  function Br(t, l, u, a) {
    if (l == null) {
      if (a != null) {
        if (u != null) throw Error(s(92));
        if (Bt(a)) {
          if (1 < a.length) throw Error(s(93));
          a = a[0];
        }
        u = a;
      }
      u == null && (u = ""), l = u;
    }
    u = yl(l), t.defaultValue = u, a = t.textContent, a === u && a !== "" && a !== null && (t.value = a);
  }
  function ca(t, l) {
    if (l) {
      var u = t.firstChild;
      if (u && u === t.lastChild && u.nodeType === 3) {
        u.nodeValue = l;
        return;
      }
    }
    t.textContent = l;
  }
  var _h = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Cr(t, l, u) {
    var a = l.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? a ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "" : a ? t.setProperty(l, u) : typeof u != "number" || u === 0 || _h.has(l) ? l === "float" ? t.cssFloat = u : t[l] = ("" + u).trim() : t[l] = u + "px";
  }
  function Gr(t, l, u) {
    if (l != null && typeof l != "object")
      throw Error(s(62));
    if (t = t.style, u != null) {
      for (var a in u)
        !u.hasOwnProperty(a) || l != null && l.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
      for (var e in l)
        a = l[e], l.hasOwnProperty(e) && u[e] !== a && Cr(t, e, a);
    } else
      for (var n in l)
        l.hasOwnProperty(n) && Cr(t, n, l[n]);
  }
  function Vc(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Oh = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Dh = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function en(t) {
    return Dh.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  var Lc = null;
  function Kc(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var fa = null, ia = null;
  function jr(t) {
    var l = la(t);
    if (l && (t = l.stateNode)) {
      var u = t[It] || null;
      t: switch (t = l.stateNode, l.type) {
        case "input":
          if (Qc(
            t,
            u.value,
            u.defaultValue,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name
          ), l = u.name, u.type === "radio" && l != null) {
            for (u = t; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll(
              'input[name="' + vl(
                "" + l
              ) + '"][type="radio"]'
            ), l = 0; l < u.length; l++) {
              var a = u[l];
              if (a !== t && a.form === t.form) {
                var e = a[It] || null;
                if (!e) throw Error(s(90));
                Qc(
                  a,
                  e.value,
                  e.defaultValue,
                  e.defaultValue,
                  e.checked,
                  e.defaultChecked,
                  e.type,
                  e.name
                );
              }
            }
            for (l = 0; l < u.length; l++)
              a = u[l], a.form === t.form && qr(a);
          }
          break t;
        case "textarea":
          Yr(t, u.value, u.defaultValue);
          break t;
        case "select":
          l = u.value, l != null && na(t, !!u.multiple, l, !1);
      }
    }
  }
  var wc = !1;
  function Xr(t, l, u) {
    if (wc) return t(l, u);
    wc = !0;
    try {
      var a = t(l);
      return a;
    } finally {
      if (wc = !1, (fa !== null || ia !== null) && (Ln(), fa && (l = fa, t = ia, ia = fa = null, jr(l), t)))
        for (l = 0; l < t.length; l++) jr(t[l]);
    }
  }
  function Ia(t, l) {
    var u = t.stateNode;
    if (u === null) return null;
    var a = u[It] || null;
    if (a === null) return null;
    u = a[l];
    t: switch (l) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) || (t = t.type, a = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !a;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (u && typeof u != "function")
      throw Error(
        s(231, l, typeof u)
      );
    return u;
  }
  var Xl = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Jc = !1;
  if (Xl)
    try {
      var Pa = {};
      Object.defineProperty(Pa, "passive", {
        get: function() {
          Jc = !0;
        }
      }), window.addEventListener("test", Pa, Pa), window.removeEventListener("test", Pa, Pa);
    } catch {
      Jc = !1;
    }
  var cu = null, $c = null, nn = null;
  function Qr() {
    if (nn) return nn;
    var t, l = $c, u = l.length, a, e = "value" in cu ? cu.value : cu.textContent, n = e.length;
    for (t = 0; t < u && l[t] === e[t]; t++) ;
    var f = u - t;
    for (a = 1; a <= f && l[u - a] === e[n - a]; a++) ;
    return nn = e.slice(t, 1 < a ? 1 - a : void 0);
  }
  function cn(t) {
    var l = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && l === 13 && (t = 13)) : t = l, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function fn() {
    return !0;
  }
  function Zr() {
    return !1;
  }
  function Pt(t) {
    function l(u, a, e, n, f) {
      this._reactName = u, this._targetInst = e, this.type = a, this.nativeEvent = n, this.target = f, this.currentTarget = null;
      for (var i in t)
        t.hasOwnProperty(i) && (u = t[i], this[i] = u ? u(n) : n[i]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? fn : Zr, this.isPropagationStopped = Zr, this;
    }
    return R(l.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = fn);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = fn);
      },
      persist: function() {
      },
      isPersistent: fn
    }), l;
  }
  var Hu = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, rn = Pt(Hu), te = R({}, Hu, { view: 0, detail: 0 }), Mh = Pt(te), kc, Wc, le, sn = R({}, te, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ic,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== le && (le && t.type === "mousemove" ? (kc = t.screenX - le.screenX, Wc = t.screenY - le.screenY) : Wc = kc = 0, le = t), kc);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : Wc;
    }
  }), Vr = Pt(sn), Rh = R({}, sn, { dataTransfer: 0 }), Uh = Pt(Rh), Nh = R({}, te, { relatedTarget: 0 }), Fc = Pt(Nh), Hh = R({}, Hu, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), qh = Pt(Hh), xh = R({}, Hu, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), Yh = Pt(xh), Bh = R({}, Hu, { data: 0 }), Lr = Pt(Bh), Ch = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Gh = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, jh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Xh(t) {
    var l = this.nativeEvent;
    return l.getModifierState ? l.getModifierState(t) : (t = jh[t]) ? !!l[t] : !1;
  }
  function Ic() {
    return Xh;
  }
  var Qh = R({}, te, {
    key: function(t) {
      if (t.key) {
        var l = Ch[t.key] || t.key;
        if (l !== "Unidentified") return l;
      }
      return t.type === "keypress" ? (t = cn(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Gh[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ic,
    charCode: function(t) {
      return t.type === "keypress" ? cn(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? cn(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), Zh = Pt(Qh), Vh = R({}, sn, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Kr = Pt(Vh), Lh = R({}, te, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ic
  }), Kh = Pt(Lh), wh = R({}, Hu, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Jh = Pt(wh), $h = R({}, sn, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), kh = Pt($h), Wh = R({}, Hu, {
    newState: 0,
    oldState: 0
  }), Fh = Pt(Wh), Ih = [9, 13, 27, 32], Pc = Xl && "CompositionEvent" in window, ue = null;
  Xl && "documentMode" in document && (ue = document.documentMode);
  var Ph = Xl && "TextEvent" in window && !ue, wr = Xl && (!Pc || ue && 8 < ue && 11 >= ue), Jr = " ", $r = !1;
  function kr(t, l) {
    switch (t) {
      case "keyup":
        return Ih.indexOf(l.keyCode) !== -1;
      case "keydown":
        return l.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Wr(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var ra = !1;
  function ty(t, l) {
    switch (t) {
      case "compositionend":
        return Wr(l);
      case "keypress":
        return l.which !== 32 ? null : ($r = !0, Jr);
      case "textInput":
        return t = l.data, t === Jr && $r ? null : t;
      default:
        return null;
    }
  }
  function ly(t, l) {
    if (ra)
      return t === "compositionend" || !Pc && kr(t, l) ? (t = Qr(), nn = $c = cu = null, ra = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(l.ctrlKey || l.altKey || l.metaKey) || l.ctrlKey && l.altKey) {
          if (l.char && 1 < l.char.length)
            return l.char;
          if (l.which) return String.fromCharCode(l.which);
        }
        return null;
      case "compositionend":
        return wr && l.locale !== "ko" ? null : l.data;
      default:
        return null;
    }
  }
  var uy = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Fr(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return l === "input" ? !!uy[t.type] : l === "textarea";
  }
  function Ir(t, l, u, a) {
    fa ? ia ? ia.push(a) : ia = [a] : fa = a, l = Wn(l, "onChange"), 0 < l.length && (u = new rn(
      "onChange",
      "change",
      null,
      u,
      a
    ), t.push({ event: u, listeners: l }));
  }
  var ae = null, ee = null;
  function ay(t) {
    q0(t, 0);
  }
  function on(t) {
    var l = Fa(t);
    if (qr(l)) return t;
  }
  function Pr(t, l) {
    if (t === "change") return l;
  }
  var ts = !1;
  if (Xl) {
    var tf;
    if (Xl) {
      var lf = "oninput" in document;
      if (!lf) {
        var ls = document.createElement("div");
        ls.setAttribute("oninput", "return;"), lf = typeof ls.oninput == "function";
      }
      tf = lf;
    } else tf = !1;
    ts = tf && (!document.documentMode || 9 < document.documentMode);
  }
  function us() {
    ae && (ae.detachEvent("onpropertychange", as), ee = ae = null);
  }
  function as(t) {
    if (t.propertyName === "value" && on(ee)) {
      var l = [];
      Ir(
        l,
        ee,
        t,
        Kc(t)
      ), Xr(ay, l);
    }
  }
  function ey(t, l, u) {
    t === "focusin" ? (us(), ae = l, ee = u, ae.attachEvent("onpropertychange", as)) : t === "focusout" && us();
  }
  function ny(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return on(ee);
  }
  function cy(t, l) {
    if (t === "click") return on(l);
  }
  function fy(t, l) {
    if (t === "input" || t === "change")
      return on(l);
  }
  function iy(t, l) {
    return t === l && (t !== 0 || 1 / t === 1 / l) || t !== t && l !== l;
  }
  var cl = typeof Object.is == "function" ? Object.is : iy;
  function ne(t, l) {
    if (cl(t, l)) return !0;
    if (typeof t != "object" || t === null || typeof l != "object" || l === null)
      return !1;
    var u = Object.keys(t), a = Object.keys(l);
    if (u.length !== a.length) return !1;
    for (a = 0; a < u.length; a++) {
      var e = u[a];
      if (!hl.call(l, e) || !cl(t[e], l[e]))
        return !1;
    }
    return !0;
  }
  function es(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function ns(t, l) {
    var u = es(t);
    t = 0;
    for (var a; u; ) {
      if (u.nodeType === 3) {
        if (a = t + u.textContent.length, t <= l && a >= l)
          return { node: u, offset: l - t };
        t = a;
      }
      t: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break t;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = es(u);
    }
  }
  function cs(t, l) {
    return t && l ? t === l ? !0 : t && t.nodeType === 3 ? !1 : l && l.nodeType === 3 ? cs(t, l.parentNode) : "contains" in t ? t.contains(l) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(l) & 16) : !1 : !1;
  }
  function fs(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var l = an(t.document); l instanceof t.HTMLIFrameElement; ) {
      try {
        var u = typeof l.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) t = l.contentWindow;
      else break;
      l = an(t.document);
    }
    return l;
  }
  function uf(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return l && (l === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || l === "textarea" || t.contentEditable === "true");
  }
  var ry = Xl && "documentMode" in document && 11 >= document.documentMode, sa = null, af = null, ce = null, ef = !1;
  function is(t, l, u) {
    var a = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    ef || sa == null || sa !== an(a) || (a = sa, "selectionStart" in a && uf(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), ce && ne(ce, a) || (ce = a, a = Wn(af, "onSelect"), 0 < a.length && (l = new rn(
      "onSelect",
      "select",
      null,
      l,
      u
    ), t.push({ event: l, listeners: a }), l.target = sa)));
  }
  function qu(t, l) {
    var u = {};
    return u[t.toLowerCase()] = l.toLowerCase(), u["Webkit" + t] = "webkit" + l, u["Moz" + t] = "moz" + l, u;
  }
  var oa = {
    animationend: qu("Animation", "AnimationEnd"),
    animationiteration: qu("Animation", "AnimationIteration"),
    animationstart: qu("Animation", "AnimationStart"),
    transitionrun: qu("Transition", "TransitionRun"),
    transitionstart: qu("Transition", "TransitionStart"),
    transitioncancel: qu("Transition", "TransitionCancel"),
    transitionend: qu("Transition", "TransitionEnd")
  }, nf = {}, rs = {};
  Xl && (rs = document.createElement("div").style, "AnimationEvent" in window || (delete oa.animationend.animation, delete oa.animationiteration.animation, delete oa.animationstart.animation), "TransitionEvent" in window || delete oa.transitionend.transition);
  function xu(t) {
    if (nf[t]) return nf[t];
    if (!oa[t]) return t;
    var l = oa[t], u;
    for (u in l)
      if (l.hasOwnProperty(u) && u in rs)
        return nf[t] = l[u];
    return t;
  }
  var ss = xu("animationend"), os = xu("animationiteration"), ds = xu("animationstart"), sy = xu("transitionrun"), oy = xu("transitionstart"), dy = xu("transitioncancel"), hs = xu("transitionend"), ys = /* @__PURE__ */ new Map(), cf = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  cf.push("scrollEnd");
  function _l(t, l) {
    ys.set(t, l), Nu(l, [t]);
  }
  var vs = /* @__PURE__ */ new WeakMap();
  function ml(t, l) {
    if (typeof t == "object" && t !== null) {
      var u = vs.get(t);
      return u !== void 0 ? u : (l = {
        value: t,
        source: l,
        stack: Nr(l)
      }, vs.set(t, l), l);
    }
    return {
      value: t,
      source: l,
      stack: Nr(l)
    };
  }
  var gl = [], da = 0, ff = 0;
  function dn() {
    for (var t = da, l = ff = da = 0; l < t; ) {
      var u = gl[l];
      gl[l++] = null;
      var a = gl[l];
      gl[l++] = null;
      var e = gl[l];
      gl[l++] = null;
      var n = gl[l];
      if (gl[l++] = null, a !== null && e !== null) {
        var f = a.pending;
        f === null ? e.next = e : (e.next = f.next, f.next = e), a.pending = e;
      }
      n !== 0 && ms(u, e, n);
    }
  }
  function hn(t, l, u, a) {
    gl[da++] = t, gl[da++] = l, gl[da++] = u, gl[da++] = a, ff |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
  }
  function rf(t, l, u, a) {
    return hn(t, l, u, a), yn(t);
  }
  function ha(t, l) {
    return hn(t, null, null, l), yn(t);
  }
  function ms(t, l, u) {
    t.lanes |= u;
    var a = t.alternate;
    a !== null && (a.lanes |= u);
    for (var e = !1, n = t.return; n !== null; )
      n.childLanes |= u, a = n.alternate, a !== null && (a.childLanes |= u), n.tag === 22 && (t = n.stateNode, t === null || t._visibility & 1 || (e = !0)), t = n, n = n.return;
    return t.tag === 3 ? (n = t.stateNode, e && l !== null && (e = 31 - nl(u), t = n.hiddenUpdates, a = t[e], a === null ? t[e] = [l] : a.push(l), l.lane = u | 536870912), n) : null;
  }
  function yn(t) {
    if (50 < Ne)
      throw Ne = 0, vi = null, Error(s(185));
    for (var l = t.return; l !== null; )
      t = l, l = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var ya = {};
  function hy(t, l, u, a) {
    this.tag = t, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = l, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function fl(t, l, u, a) {
    return new hy(t, l, u, a);
  }
  function sf(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function Ql(t, l) {
    var u = t.alternate;
    return u === null ? (u = fl(
      t.tag,
      l,
      t.key,
      t.mode
    ), u.elementType = t.elementType, u.type = t.type, u.stateNode = t.stateNode, u.alternate = t, t.alternate = u) : (u.pendingProps = l, u.type = t.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = t.flags & 65011712, u.childLanes = t.childLanes, u.lanes = t.lanes, u.child = t.child, u.memoizedProps = t.memoizedProps, u.memoizedState = t.memoizedState, u.updateQueue = t.updateQueue, l = t.dependencies, u.dependencies = l === null ? null : { lanes: l.lanes, firstContext: l.firstContext }, u.sibling = t.sibling, u.index = t.index, u.ref = t.ref, u.refCleanup = t.refCleanup, u;
  }
  function gs(t, l) {
    t.flags &= 65011714;
    var u = t.alternate;
    return u === null ? (t.childLanes = 0, t.lanes = l, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = u.childLanes, t.lanes = u.lanes, t.child = u.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = u.memoizedProps, t.memoizedState = u.memoizedState, t.updateQueue = u.updateQueue, t.type = u.type, l = u.dependencies, t.dependencies = l === null ? null : {
      lanes: l.lanes,
      firstContext: l.firstContext
    }), t;
  }
  function vn(t, l, u, a, e, n) {
    var f = 0;
    if (a = t, typeof t == "function") sf(t) && (f = 1);
    else if (typeof t == "string")
      f = v1(
        t,
        u,
        Q.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case Wt:
          return t = fl(31, u, l, e), t.elementType = Wt, t.lanes = n, t;
        case j:
          return Yu(u.children, e, n, l);
        case W:
          f = 8, e |= 24;
          break;
        case lt:
          return t = fl(12, u, l, e | 2), t.elementType = lt, t.lanes = n, t;
        case Z:
          return t = fl(13, u, l, e), t.elementType = Z, t.lanes = n, t;
        case I:
          return t = fl(19, u, l, e), t.elementType = I, t.lanes = n, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case ut:
              case k:
                f = 10;
                break t;
              case F:
                f = 9;
                break t;
              case rt:
                f = 11;
                break t;
              case K:
                f = 14;
                break t;
              case Rt:
                f = 16, a = null;
                break t;
            }
          f = 29, u = Error(
            s(130, t === null ? "null" : typeof t, "")
          ), a = null;
      }
    return l = fl(f, u, l, e), l.elementType = t, l.type = a, l.lanes = n, l;
  }
  function Yu(t, l, u, a) {
    return t = fl(7, t, a, l), t.lanes = u, t;
  }
  function of(t, l, u) {
    return t = fl(6, t, null, l), t.lanes = u, t;
  }
  function df(t, l, u) {
    return l = fl(
      4,
      t.children !== null ? t.children : [],
      t.key,
      l
    ), l.lanes = u, l.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, l;
  }
  var va = [], ma = 0, mn = null, gn = 0, Sl = [], pl = 0, Bu = null, Zl = 1, Vl = "";
  function Cu(t, l) {
    va[ma++] = gn, va[ma++] = mn, mn = t, gn = l;
  }
  function Ss(t, l, u) {
    Sl[pl++] = Zl, Sl[pl++] = Vl, Sl[pl++] = Bu, Bu = t;
    var a = Zl;
    t = Vl;
    var e = 32 - nl(a) - 1;
    a &= ~(1 << e), u += 1;
    var n = 32 - nl(l) + e;
    if (30 < n) {
      var f = e - e % 5;
      n = (a & (1 << f) - 1).toString(32), a >>= f, e -= f, Zl = 1 << 32 - nl(l) + e | u << e | a, Vl = n + t;
    } else
      Zl = 1 << n | u << e | a, Vl = t;
  }
  function hf(t) {
    t.return !== null && (Cu(t, 1), Ss(t, 1, 0));
  }
  function yf(t) {
    for (; t === mn; )
      mn = va[--ma], va[ma] = null, gn = va[--ma], va[ma] = null;
    for (; t === Bu; )
      Bu = Sl[--pl], Sl[pl] = null, Vl = Sl[--pl], Sl[pl] = null, Zl = Sl[--pl], Sl[pl] = null;
  }
  var Ft = null, _t = null, dt = !1, Gu = null, Ul = !1, vf = Error(s(519));
  function ju(t) {
    var l = Error(s(418, ""));
    throw re(ml(l, t)), vf;
  }
  function ps(t) {
    var l = t.stateNode, u = t.type, a = t.memoizedProps;
    switch (l[Jt] = t, l[It] = a, u) {
      case "dialog":
        it("cancel", l), it("close", l);
        break;
      case "iframe":
      case "object":
      case "embed":
        it("load", l);
        break;
      case "video":
      case "audio":
        for (u = 0; u < qe.length; u++)
          it(qe[u], l);
        break;
      case "source":
        it("error", l);
        break;
      case "img":
      case "image":
      case "link":
        it("error", l), it("load", l);
        break;
      case "details":
        it("toggle", l);
        break;
      case "input":
        it("invalid", l), xr(
          l,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        ), un(l);
        break;
      case "select":
        it("invalid", l);
        break;
      case "textarea":
        it("invalid", l), Br(l, a.value, a.defaultValue, a.children), un(l);
    }
    u = a.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || l.textContent === "" + u || a.suppressHydrationWarning === !0 || C0(l.textContent, u) ? (a.popover != null && (it("beforetoggle", l), it("toggle", l)), a.onScroll != null && it("scroll", l), a.onScrollEnd != null && it("scrollend", l), a.onClick != null && (l.onclick = Fn), l = !0) : l = !1, l || ju(t);
  }
  function bs(t) {
    for (Ft = t.return; Ft; )
      switch (Ft.tag) {
        case 5:
        case 13:
          Ul = !1;
          return;
        case 27:
        case 3:
          Ul = !0;
          return;
        default:
          Ft = Ft.return;
      }
  }
  function fe(t) {
    if (t !== Ft) return !1;
    if (!dt) return bs(t), dt = !0, !1;
    var l = t.tag, u;
    if ((u = l !== 3 && l !== 27) && ((u = l === 5) && (u = t.type, u = !(u !== "form" && u !== "button") || Ni(t.type, t.memoizedProps)), u = !u), u && _t && ju(t), bs(t), l === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(s(317));
      t: {
        for (t = t.nextSibling, l = 0; t; ) {
          if (t.nodeType === 8)
            if (u = t.data, u === "/$") {
              if (l === 0) {
                _t = Dl(t.nextSibling);
                break t;
              }
              l--;
            } else
              u !== "$" && u !== "$!" && u !== "$?" || l++;
          t = t.nextSibling;
        }
        _t = null;
      }
    } else
      l === 27 ? (l = _t, Au(t.type) ? (t = Yi, Yi = null, _t = t) : _t = l) : _t = Ft ? Dl(t.stateNode.nextSibling) : null;
    return !0;
  }
  function ie() {
    _t = Ft = null, dt = !1;
  }
  function Es() {
    var t = Gu;
    return t !== null && (ul === null ? ul = t : ul.push.apply(
      ul,
      t
    ), Gu = null), t;
  }
  function re(t) {
    Gu === null ? Gu = [t] : Gu.push(t);
  }
  var mf = O(null), Xu = null, Ll = null;
  function fu(t, l, u) {
    q(mf, l._currentValue), l._currentValue = u;
  }
  function Kl(t) {
    t._currentValue = mf.current, N(mf);
  }
  function gf(t, l, u) {
    for (; t !== null; ) {
      var a = t.alternate;
      if ((t.childLanes & l) !== l ? (t.childLanes |= l, a !== null && (a.childLanes |= l)) : a !== null && (a.childLanes & l) !== l && (a.childLanes |= l), t === u) break;
      t = t.return;
    }
  }
  function Sf(t, l, u, a) {
    var e = t.child;
    for (e !== null && (e.return = t); e !== null; ) {
      var n = e.dependencies;
      if (n !== null) {
        var f = e.child;
        n = n.firstContext;
        t: for (; n !== null; ) {
          var i = n;
          n = e;
          for (var d = 0; d < l.length; d++)
            if (i.context === l[d]) {
              n.lanes |= u, i = n.alternate, i !== null && (i.lanes |= u), gf(
                n.return,
                u,
                t
              ), a || (f = null);
              break t;
            }
          n = i.next;
        }
      } else if (e.tag === 18) {
        if (f = e.return, f === null) throw Error(s(341));
        f.lanes |= u, n = f.alternate, n !== null && (n.lanes |= u), gf(f, u, t), f = null;
      } else f = e.child;
      if (f !== null) f.return = e;
      else
        for (f = e; f !== null; ) {
          if (f === t) {
            f = null;
            break;
          }
          if (e = f.sibling, e !== null) {
            e.return = f.return, f = e;
            break;
          }
          f = f.return;
        }
      e = f;
    }
  }
  function se(t, l, u, a) {
    t = null;
    for (var e = l, n = !1; e !== null; ) {
      if (!n) {
        if ((e.flags & 524288) !== 0) n = !0;
        else if ((e.flags & 262144) !== 0) break;
      }
      if (e.tag === 10) {
        var f = e.alternate;
        if (f === null) throw Error(s(387));
        if (f = f.memoizedProps, f !== null) {
          var i = e.type;
          cl(e.pendingProps.value, f.value) || (t !== null ? t.push(i) : t = [i]);
        }
      } else if (e === Ct.current) {
        if (f = e.alternate, f === null) throw Error(s(387));
        f.memoizedState.memoizedState !== e.memoizedState.memoizedState && (t !== null ? t.push(je) : t = [je]);
      }
      e = e.return;
    }
    t !== null && Sf(
      l,
      t,
      u,
      a
    ), l.flags |= 262144;
  }
  function Sn(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!cl(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function Qu(t) {
    Xu = t, Ll = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function $t(t) {
    return As(Xu, t);
  }
  function pn(t, l) {
    return Xu === null && Qu(t), As(t, l);
  }
  function As(t, l) {
    var u = l._currentValue;
    if (l = { context: l, memoizedValue: u, next: null }, Ll === null) {
      if (t === null) throw Error(s(308));
      Ll = l, t.dependencies = { lanes: 0, firstContext: l }, t.flags |= 524288;
    } else Ll = Ll.next = l;
    return u;
  }
  var yy = typeof AbortController < "u" ? AbortController : function() {
    var t = [], l = this.signal = {
      aborted: !1,
      addEventListener: function(u, a) {
        t.push(a);
      }
    };
    this.abort = function() {
      l.aborted = !0, t.forEach(function(u) {
        return u();
      });
    };
  }, vy = c.unstable_scheduleCallback, my = c.unstable_NormalPriority, qt = {
    $$typeof: k,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function pf() {
    return {
      controller: new yy(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function oe(t) {
    t.refCount--, t.refCount === 0 && vy(my, function() {
      t.controller.abort();
    });
  }
  var de = null, bf = 0, ga = 0, Sa = null;
  function gy(t, l) {
    if (de === null) {
      var u = de = [];
      bf = 0, ga = Ai(), Sa = {
        status: "pending",
        value: void 0,
        then: function(a) {
          u.push(a);
        }
      };
    }
    return bf++, l.then(Ts, Ts), l;
  }
  function Ts() {
    if (--bf === 0 && de !== null) {
      Sa !== null && (Sa.status = "fulfilled");
      var t = de;
      de = null, ga = 0, Sa = null;
      for (var l = 0; l < t.length; l++) (0, t[l])();
    }
  }
  function Sy(t, l) {
    var u = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(e) {
        u.push(e);
      }
    };
    return t.then(
      function() {
        a.status = "fulfilled", a.value = l;
        for (var e = 0; e < u.length; e++) (0, u[e])(l);
      },
      function(e) {
        for (a.status = "rejected", a.reason = e, e = 0; e < u.length; e++)
          (0, u[e])(void 0);
      }
    ), a;
  }
  var zs = A.S;
  A.S = function(t, l) {
    typeof l == "object" && l !== null && typeof l.then == "function" && gy(t, l), zs !== null && zs(t, l);
  };
  var Zu = O(null);
  function Ef() {
    var t = Zu.current;
    return t !== null ? t : Et.pooledCache;
  }
  function bn(t, l) {
    l === null ? q(Zu, Zu.current) : q(Zu, l.pool);
  }
  function _s() {
    var t = Ef();
    return t === null ? null : { parent: qt._currentValue, pool: t };
  }
  var he = Error(s(460)), Os = Error(s(474)), En = Error(s(542)), Af = { then: function() {
  } };
  function Ds(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function An() {
  }
  function Ms(t, l, u) {
    switch (u = t[u], u === void 0 ? t.push(l) : u !== l && (l.then(An, An), l = u), l.status) {
      case "fulfilled":
        return l.value;
      case "rejected":
        throw t = l.reason, Us(t), t;
      default:
        if (typeof l.status == "string") l.then(An, An);
        else {
          if (t = Et, t !== null && 100 < t.shellSuspendCounter)
            throw Error(s(482));
          t = l, t.status = "pending", t.then(
            function(a) {
              if (l.status === "pending") {
                var e = l;
                e.status = "fulfilled", e.value = a;
              }
            },
            function(a) {
              if (l.status === "pending") {
                var e = l;
                e.status = "rejected", e.reason = a;
              }
            }
          );
        }
        switch (l.status) {
          case "fulfilled":
            return l.value;
          case "rejected":
            throw t = l.reason, Us(t), t;
        }
        throw ye = l, he;
    }
  }
  var ye = null;
  function Rs() {
    if (ye === null) throw Error(s(459));
    var t = ye;
    return ye = null, t;
  }
  function Us(t) {
    if (t === he || t === En)
      throw Error(s(483));
  }
  var iu = !1;
  function Tf(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function zf(t, l) {
    t = t.updateQueue, l.updateQueue === t && (l.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function ru(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function su(t, l, u) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (vt & 2) !== 0) {
      var e = a.pending;
      return e === null ? l.next = l : (l.next = e.next, e.next = l), a.pending = l, l = yn(t), ms(t, null, u), l;
    }
    return hn(t, a, l, u), yn(t);
  }
  function ve(t, l, u) {
    if (l = l.updateQueue, l !== null && (l = l.shared, (u & 4194048) !== 0)) {
      var a = l.lanes;
      a &= t.pendingLanes, u |= a, l.lanes = u, Tr(t, u);
    }
  }
  function _f(t, l) {
    var u = t.updateQueue, a = t.alternate;
    if (a !== null && (a = a.updateQueue, u === a)) {
      var e = null, n = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var f = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          n === null ? e = n = f : n = n.next = f, u = u.next;
        } while (u !== null);
        n === null ? e = n = l : n = n.next = l;
      } else e = n = l;
      u = {
        baseState: a.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: n,
        shared: a.shared,
        callbacks: a.callbacks
      }, t.updateQueue = u;
      return;
    }
    t = u.lastBaseUpdate, t === null ? u.firstBaseUpdate = l : t.next = l, u.lastBaseUpdate = l;
  }
  var Of = !1;
  function me() {
    if (Of) {
      var t = Sa;
      if (t !== null) throw t;
    }
  }
  function ge(t, l, u, a) {
    Of = !1;
    var e = t.updateQueue;
    iu = !1;
    var n = e.firstBaseUpdate, f = e.lastBaseUpdate, i = e.shared.pending;
    if (i !== null) {
      e.shared.pending = null;
      var d = i, g = d.next;
      d.next = null, f === null ? n = g : f.next = g, f = d;
      var T = t.alternate;
      T !== null && (T = T.updateQueue, i = T.lastBaseUpdate, i !== f && (i === null ? T.firstBaseUpdate = g : i.next = g, T.lastBaseUpdate = d));
    }
    if (n !== null) {
      var _ = e.baseState;
      f = 0, T = g = d = null, i = n;
      do {
        var S = i.lane & -536870913, p = S !== i.lane;
        if (p ? (st & S) === S : (a & S) === S) {
          S !== 0 && S === ga && (Of = !0), T !== null && (T = T.next = {
            lane: 0,
            tag: i.tag,
            payload: i.payload,
            callback: null,
            next: null
          });
          t: {
            var $ = t, L = i;
            S = l;
            var pt = u;
            switch (L.tag) {
              case 1:
                if ($ = L.payload, typeof $ == "function") {
                  _ = $.call(pt, _, S);
                  break t;
                }
                _ = $;
                break t;
              case 3:
                $.flags = $.flags & -65537 | 128;
              case 0:
                if ($ = L.payload, S = typeof $ == "function" ? $.call(pt, _, S) : $, S == null) break t;
                _ = R({}, _, S);
                break t;
              case 2:
                iu = !0;
            }
          }
          S = i.callback, S !== null && (t.flags |= 64, p && (t.flags |= 8192), p = e.callbacks, p === null ? e.callbacks = [S] : p.push(S));
        } else
          p = {
            lane: S,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null
          }, T === null ? (g = T = p, d = _) : T = T.next = p, f |= S;
        if (i = i.next, i === null) {
          if (i = e.shared.pending, i === null)
            break;
          p = i, i = p.next, p.next = null, e.lastBaseUpdate = p, e.shared.pending = null;
        }
      } while (!0);
      T === null && (d = _), e.baseState = d, e.firstBaseUpdate = g, e.lastBaseUpdate = T, n === null && (e.shared.lanes = 0), Su |= f, t.lanes = f, t.memoizedState = _;
    }
  }
  function Ns(t, l) {
    if (typeof t != "function")
      throw Error(s(191, t));
    t.call(l);
  }
  function Hs(t, l) {
    var u = t.callbacks;
    if (u !== null)
      for (t.callbacks = null, t = 0; t < u.length; t++)
        Ns(u[t], l);
  }
  var pa = O(null), Tn = O(0);
  function qs(t, l) {
    t = Il, q(Tn, t), q(pa, l), Il = t | l.baseLanes;
  }
  function Df() {
    q(Tn, Il), q(pa, pa.current);
  }
  function Mf() {
    Il = Tn.current, N(pa), N(Tn);
  }
  var ou = 0, at = null, gt = null, Ut = null, zn = !1, ba = !1, Vu = !1, _n = 0, Se = 0, Ea = null, py = 0;
  function Dt() {
    throw Error(s(321));
  }
  function Rf(t, l) {
    if (l === null) return !1;
    for (var u = 0; u < l.length && u < t.length; u++)
      if (!cl(t[u], l[u])) return !1;
    return !0;
  }
  function Uf(t, l, u, a, e, n) {
    return ou = n, at = l, l.memoizedState = null, l.updateQueue = null, l.lanes = 0, A.H = t === null || t.memoizedState === null ? go : So, Vu = !1, n = u(a, e), Vu = !1, ba && (n = Ys(
      l,
      u,
      a,
      e
    )), xs(t), n;
  }
  function xs(t) {
    A.H = Nn;
    var l = gt !== null && gt.next !== null;
    if (ou = 0, Ut = gt = at = null, zn = !1, Se = 0, Ea = null, l) throw Error(s(300));
    t === null || jt || (t = t.dependencies, t !== null && Sn(t) && (jt = !0));
  }
  function Ys(t, l, u, a) {
    at = t;
    var e = 0;
    do {
      if (ba && (Ea = null), Se = 0, ba = !1, 25 <= e) throw Error(s(301));
      if (e += 1, Ut = gt = null, t.updateQueue != null) {
        var n = t.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      A.H = Oy, n = l(u, a);
    } while (ba);
    return n;
  }
  function by() {
    var t = A.H, l = t.useState()[0];
    return l = typeof l.then == "function" ? pe(l) : l, t = t.useState()[0], (gt !== null ? gt.memoizedState : null) !== t && (at.flags |= 1024), l;
  }
  function Nf() {
    var t = _n !== 0;
    return _n = 0, t;
  }
  function Hf(t, l, u) {
    l.updateQueue = t.updateQueue, l.flags &= -2053, t.lanes &= ~u;
  }
  function qf(t) {
    if (zn) {
      for (t = t.memoizedState; t !== null; ) {
        var l = t.queue;
        l !== null && (l.pending = null), t = t.next;
      }
      zn = !1;
    }
    ou = 0, Ut = gt = at = null, ba = !1, Se = _n = 0, Ea = null;
  }
  function tl() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Ut === null ? at.memoizedState = Ut = t : Ut = Ut.next = t, Ut;
  }
  function Nt() {
    if (gt === null) {
      var t = at.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = gt.next;
    var l = Ut === null ? at.memoizedState : Ut.next;
    if (l !== null)
      Ut = l, gt = t;
    else {
      if (t === null)
        throw at.alternate === null ? Error(s(467)) : Error(s(310));
      gt = t, t = {
        memoizedState: gt.memoizedState,
        baseState: gt.baseState,
        baseQueue: gt.baseQueue,
        queue: gt.queue,
        next: null
      }, Ut === null ? at.memoizedState = Ut = t : Ut = Ut.next = t;
    }
    return Ut;
  }
  function xf() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function pe(t) {
    var l = Se;
    return Se += 1, Ea === null && (Ea = []), t = Ms(Ea, t, l), l = at, (Ut === null ? l.memoizedState : Ut.next) === null && (l = l.alternate, A.H = l === null || l.memoizedState === null ? go : So), t;
  }
  function On(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return pe(t);
      if (t.$$typeof === k) return $t(t);
    }
    throw Error(s(438, String(t)));
  }
  function Yf(t) {
    var l = null, u = at.updateQueue;
    if (u !== null && (l = u.memoCache), l == null) {
      var a = at.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (l = {
        data: a.data.map(function(e) {
          return e.slice();
        }),
        index: 0
      })));
    }
    if (l == null && (l = { data: [], index: 0 }), u === null && (u = xf(), at.updateQueue = u), u.memoCache = l, u = l.data[l.index], u === void 0)
      for (u = l.data[l.index] = Array(t), a = 0; a < t; a++)
        u[a] = au;
    return l.index++, u;
  }
  function wl(t, l) {
    return typeof l == "function" ? l(t) : l;
  }
  function Dn(t) {
    var l = Nt();
    return Bf(l, gt, t);
  }
  function Bf(t, l, u) {
    var a = t.queue;
    if (a === null) throw Error(s(311));
    a.lastRenderedReducer = u;
    var e = t.baseQueue, n = a.pending;
    if (n !== null) {
      if (e !== null) {
        var f = e.next;
        e.next = n.next, n.next = f;
      }
      l.baseQueue = e = n, a.pending = null;
    }
    if (n = t.baseState, e === null) t.memoizedState = n;
    else {
      l = e.next;
      var i = f = null, d = null, g = l, T = !1;
      do {
        var _ = g.lane & -536870913;
        if (_ !== g.lane ? (st & _) === _ : (ou & _) === _) {
          var S = g.revertLane;
          if (S === 0)
            d !== null && (d = d.next = {
              lane: 0,
              revertLane: 0,
              action: g.action,
              hasEagerState: g.hasEagerState,
              eagerState: g.eagerState,
              next: null
            }), _ === ga && (T = !0);
          else if ((ou & S) === S) {
            g = g.next, S === ga && (T = !0);
            continue;
          } else
            _ = {
              lane: 0,
              revertLane: g.revertLane,
              action: g.action,
              hasEagerState: g.hasEagerState,
              eagerState: g.eagerState,
              next: null
            }, d === null ? (i = d = _, f = n) : d = d.next = _, at.lanes |= S, Su |= S;
          _ = g.action, Vu && u(n, _), n = g.hasEagerState ? g.eagerState : u(n, _);
        } else
          S = {
            lane: _,
            revertLane: g.revertLane,
            action: g.action,
            hasEagerState: g.hasEagerState,
            eagerState: g.eagerState,
            next: null
          }, d === null ? (i = d = S, f = n) : d = d.next = S, at.lanes |= _, Su |= _;
        g = g.next;
      } while (g !== null && g !== l);
      if (d === null ? f = n : d.next = i, !cl(n, t.memoizedState) && (jt = !0, T && (u = Sa, u !== null)))
        throw u;
      t.memoizedState = n, t.baseState = f, t.baseQueue = d, a.lastRenderedState = n;
    }
    return e === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function Cf(t) {
    var l = Nt(), u = l.queue;
    if (u === null) throw Error(s(311));
    u.lastRenderedReducer = t;
    var a = u.dispatch, e = u.pending, n = l.memoizedState;
    if (e !== null) {
      u.pending = null;
      var f = e = e.next;
      do
        n = t(n, f.action), f = f.next;
      while (f !== e);
      cl(n, l.memoizedState) || (jt = !0), l.memoizedState = n, l.baseQueue === null && (l.baseState = n), u.lastRenderedState = n;
    }
    return [n, a];
  }
  function Bs(t, l, u) {
    var a = at, e = Nt(), n = dt;
    if (n) {
      if (u === void 0) throw Error(s(407));
      u = u();
    } else u = l();
    var f = !cl(
      (gt || e).memoizedState,
      u
    );
    f && (e.memoizedState = u, jt = !0), e = e.queue;
    var i = js.bind(null, a, e, t);
    if (be(2048, 8, i, [t]), e.getSnapshot !== l || f || Ut !== null && Ut.memoizedState.tag & 1) {
      if (a.flags |= 2048, Aa(
        9,
        Mn(),
        Gs.bind(
          null,
          a,
          e,
          u,
          l
        ),
        null
      ), Et === null) throw Error(s(349));
      n || (ou & 124) !== 0 || Cs(a, l, u);
    }
    return u;
  }
  function Cs(t, l, u) {
    t.flags |= 16384, t = { getSnapshot: l, value: u }, l = at.updateQueue, l === null ? (l = xf(), at.updateQueue = l, l.stores = [t]) : (u = l.stores, u === null ? l.stores = [t] : u.push(t));
  }
  function Gs(t, l, u, a) {
    l.value = u, l.getSnapshot = a, Xs(l) && Qs(t);
  }
  function js(t, l, u) {
    return u(function() {
      Xs(l) && Qs(t);
    });
  }
  function Xs(t) {
    var l = t.getSnapshot;
    t = t.value;
    try {
      var u = l();
      return !cl(t, u);
    } catch {
      return !0;
    }
  }
  function Qs(t) {
    var l = ha(t, 2);
    l !== null && dl(l, t, 2);
  }
  function Gf(t) {
    var l = tl();
    if (typeof t == "function") {
      var u = t;
      if (t = u(), Vu) {
        eu(!0);
        try {
          u();
        } finally {
          eu(!1);
        }
      }
    }
    return l.memoizedState = l.baseState = t, l.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: wl,
      lastRenderedState: t
    }, l;
  }
  function Zs(t, l, u, a) {
    return t.baseState = u, Bf(
      t,
      gt,
      typeof a == "function" ? a : wl
    );
  }
  function Ey(t, l, u, a, e) {
    if (Un(t)) throw Error(s(485));
    if (t = l.action, t !== null) {
      var n = {
        payload: e,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(f) {
          n.listeners.push(f);
        }
      };
      A.T !== null ? u(!0) : n.isTransition = !1, a(n), u = l.pending, u === null ? (n.next = l.pending = n, Vs(l, n)) : (n.next = u.next, l.pending = u.next = n);
    }
  }
  function Vs(t, l) {
    var u = l.action, a = l.payload, e = t.state;
    if (l.isTransition) {
      var n = A.T, f = {};
      A.T = f;
      try {
        var i = u(e, a), d = A.S;
        d !== null && d(f, i), Ls(t, l, i);
      } catch (g) {
        jf(t, l, g);
      } finally {
        A.T = n;
      }
    } else
      try {
        n = u(e, a), Ls(t, l, n);
      } catch (g) {
        jf(t, l, g);
      }
  }
  function Ls(t, l, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(a) {
        Ks(t, l, a);
      },
      function(a) {
        return jf(t, l, a);
      }
    ) : Ks(t, l, u);
  }
  function Ks(t, l, u) {
    l.status = "fulfilled", l.value = u, ws(l), t.state = u, l = t.pending, l !== null && (u = l.next, u === l ? t.pending = null : (u = u.next, l.next = u, Vs(t, u)));
  }
  function jf(t, l, u) {
    var a = t.pending;
    if (t.pending = null, a !== null) {
      a = a.next;
      do
        l.status = "rejected", l.reason = u, ws(l), l = l.next;
      while (l !== a);
    }
    t.action = null;
  }
  function ws(t) {
    t = t.listeners;
    for (var l = 0; l < t.length; l++) (0, t[l])();
  }
  function Js(t, l) {
    return l;
  }
  function $s(t, l) {
    if (dt) {
      var u = Et.formState;
      if (u !== null) {
        t: {
          var a = at;
          if (dt) {
            if (_t) {
              l: {
                for (var e = _t, n = Ul; e.nodeType !== 8; ) {
                  if (!n) {
                    e = null;
                    break l;
                  }
                  if (e = Dl(
                    e.nextSibling
                  ), e === null) {
                    e = null;
                    break l;
                  }
                }
                n = e.data, e = n === "F!" || n === "F" ? e : null;
              }
              if (e) {
                _t = Dl(
                  e.nextSibling
                ), a = e.data === "F!";
                break t;
              }
            }
            ju(a);
          }
          a = !1;
        }
        a && (l = u[0]);
      }
    }
    return u = tl(), u.memoizedState = u.baseState = l, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Js,
      lastRenderedState: l
    }, u.queue = a, u = yo.bind(
      null,
      at,
      a
    ), a.dispatch = u, a = Gf(!1), n = Lf.bind(
      null,
      at,
      !1,
      a.queue
    ), a = tl(), e = {
      state: l,
      dispatch: null,
      action: t,
      pending: null
    }, a.queue = e, u = Ey.bind(
      null,
      at,
      e,
      n,
      u
    ), e.dispatch = u, a.memoizedState = t, [l, u, !1];
  }
  function ks(t) {
    var l = Nt();
    return Ws(l, gt, t);
  }
  function Ws(t, l, u) {
    if (l = Bf(
      t,
      l,
      Js
    )[0], t = Dn(wl)[0], typeof l == "object" && l !== null && typeof l.then == "function")
      try {
        var a = pe(l);
      } catch (f) {
        throw f === he ? En : f;
      }
    else a = l;
    l = Nt();
    var e = l.queue, n = e.dispatch;
    return u !== l.memoizedState && (at.flags |= 2048, Aa(
      9,
      Mn(),
      Ay.bind(null, e, u),
      null
    )), [a, n, t];
  }
  function Ay(t, l) {
    t.action = l;
  }
  function Fs(t) {
    var l = Nt(), u = gt;
    if (u !== null)
      return Ws(l, u, t);
    Nt(), l = l.memoizedState, u = Nt();
    var a = u.queue.dispatch;
    return u.memoizedState = t, [l, a, !1];
  }
  function Aa(t, l, u, a) {
    return t = { tag: t, create: u, deps: a, inst: l, next: null }, l = at.updateQueue, l === null && (l = xf(), at.updateQueue = l), u = l.lastEffect, u === null ? l.lastEffect = t.next = t : (a = u.next, u.next = t, t.next = a, l.lastEffect = t), t;
  }
  function Mn() {
    return { destroy: void 0, resource: void 0 };
  }
  function Is() {
    return Nt().memoizedState;
  }
  function Rn(t, l, u, a) {
    var e = tl();
    a = a === void 0 ? null : a, at.flags |= t, e.memoizedState = Aa(
      1 | l,
      Mn(),
      u,
      a
    );
  }
  function be(t, l, u, a) {
    var e = Nt();
    a = a === void 0 ? null : a;
    var n = e.memoizedState.inst;
    gt !== null && a !== null && Rf(a, gt.memoizedState.deps) ? e.memoizedState = Aa(l, n, u, a) : (at.flags |= t, e.memoizedState = Aa(
      1 | l,
      n,
      u,
      a
    ));
  }
  function Ps(t, l) {
    Rn(8390656, 8, t, l);
  }
  function to(t, l) {
    be(2048, 8, t, l);
  }
  function lo(t, l) {
    return be(4, 2, t, l);
  }
  function uo(t, l) {
    return be(4, 4, t, l);
  }
  function ao(t, l) {
    if (typeof l == "function") {
      t = t();
      var u = l(t);
      return function() {
        typeof u == "function" ? u() : l(null);
      };
    }
    if (l != null)
      return t = t(), l.current = t, function() {
        l.current = null;
      };
  }
  function eo(t, l, u) {
    u = u != null ? u.concat([t]) : null, be(4, 4, ao.bind(null, l, t), u);
  }
  function Xf() {
  }
  function no(t, l) {
    var u = Nt();
    l = l === void 0 ? null : l;
    var a = u.memoizedState;
    return l !== null && Rf(l, a[1]) ? a[0] : (u.memoizedState = [t, l], t);
  }
  function co(t, l) {
    var u = Nt();
    l = l === void 0 ? null : l;
    var a = u.memoizedState;
    if (l !== null && Rf(l, a[1]))
      return a[0];
    if (a = t(), Vu) {
      eu(!0);
      try {
        t();
      } finally {
        eu(!1);
      }
    }
    return u.memoizedState = [a, l], a;
  }
  function Qf(t, l, u) {
    return u === void 0 || (ou & 1073741824) !== 0 ? t.memoizedState = l : (t.memoizedState = u, t = s0(), at.lanes |= t, Su |= t, u);
  }
  function fo(t, l, u, a) {
    return cl(u, l) ? u : pa.current !== null ? (t = Qf(t, u, a), cl(t, l) || (jt = !0), t) : (ou & 42) === 0 ? (jt = !0, t.memoizedState = u) : (t = s0(), at.lanes |= t, Su |= t, l);
  }
  function io(t, l, u, a, e) {
    var n = H.p;
    H.p = n !== 0 && 8 > n ? n : 8;
    var f = A.T, i = {};
    A.T = i, Lf(t, !1, l, u);
    try {
      var d = e(), g = A.S;
      if (g !== null && g(i, d), d !== null && typeof d == "object" && typeof d.then == "function") {
        var T = Sy(
          d,
          a
        );
        Ee(
          t,
          l,
          T,
          ol(t)
        );
      } else
        Ee(
          t,
          l,
          a,
          ol(t)
        );
    } catch (_) {
      Ee(
        t,
        l,
        { then: function() {
        }, status: "rejected", reason: _ },
        ol()
      );
    } finally {
      H.p = n, A.T = f;
    }
  }
  function Ty() {
  }
  function Zf(t, l, u, a) {
    if (t.tag !== 5) throw Error(s(476));
    var e = ro(t).queue;
    io(
      t,
      e,
      l,
      V,
      u === null ? Ty : function() {
        return so(t), u(a);
      }
    );
  }
  function ro(t) {
    var l = t.memoizedState;
    if (l !== null) return l;
    l = {
      memoizedState: V,
      baseState: V,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: wl,
        lastRenderedState: V
      },
      next: null
    };
    var u = {};
    return l.next = {
      memoizedState: u,
      baseState: u,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: wl,
        lastRenderedState: u
      },
      next: null
    }, t.memoizedState = l, t = t.alternate, t !== null && (t.memoizedState = l), l;
  }
  function so(t) {
    var l = ro(t).next.queue;
    Ee(t, l, {}, ol());
  }
  function Vf() {
    return $t(je);
  }
  function oo() {
    return Nt().memoizedState;
  }
  function ho() {
    return Nt().memoizedState;
  }
  function zy(t) {
    for (var l = t.return; l !== null; ) {
      switch (l.tag) {
        case 24:
        case 3:
          var u = ol();
          t = ru(u);
          var a = su(l, t, u);
          a !== null && (dl(a, l, u), ve(a, l, u)), l = { cache: pf() }, t.payload = l;
          return;
      }
      l = l.return;
    }
  }
  function _y(t, l, u) {
    var a = ol();
    u = {
      lane: a,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Un(t) ? vo(l, u) : (u = rf(t, l, u, a), u !== null && (dl(u, t, a), mo(u, l, a)));
  }
  function yo(t, l, u) {
    var a = ol();
    Ee(t, l, u, a);
  }
  function Ee(t, l, u, a) {
    var e = {
      lane: a,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Un(t)) vo(l, e);
    else {
      var n = t.alternate;
      if (t.lanes === 0 && (n === null || n.lanes === 0) && (n = l.lastRenderedReducer, n !== null))
        try {
          var f = l.lastRenderedState, i = n(f, u);
          if (e.hasEagerState = !0, e.eagerState = i, cl(i, f))
            return hn(t, l, e, 0), Et === null && dn(), !1;
        } catch {
        } finally {
        }
      if (u = rf(t, l, e, a), u !== null)
        return dl(u, t, a), mo(u, l, a), !0;
    }
    return !1;
  }
  function Lf(t, l, u, a) {
    if (a = {
      lane: 2,
      revertLane: Ai(),
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Un(t)) {
      if (l) throw Error(s(479));
    } else
      l = rf(
        t,
        u,
        a,
        2
      ), l !== null && dl(l, t, 2);
  }
  function Un(t) {
    var l = t.alternate;
    return t === at || l !== null && l === at;
  }
  function vo(t, l) {
    ba = zn = !0;
    var u = t.pending;
    u === null ? l.next = l : (l.next = u.next, u.next = l), t.pending = l;
  }
  function mo(t, l, u) {
    if ((u & 4194048) !== 0) {
      var a = l.lanes;
      a &= t.pendingLanes, u |= a, l.lanes = u, Tr(t, u);
    }
  }
  var Nn = {
    readContext: $t,
    use: On,
    useCallback: Dt,
    useContext: Dt,
    useEffect: Dt,
    useImperativeHandle: Dt,
    useLayoutEffect: Dt,
    useInsertionEffect: Dt,
    useMemo: Dt,
    useReducer: Dt,
    useRef: Dt,
    useState: Dt,
    useDebugValue: Dt,
    useDeferredValue: Dt,
    useTransition: Dt,
    useSyncExternalStore: Dt,
    useId: Dt,
    useHostTransitionStatus: Dt,
    useFormState: Dt,
    useActionState: Dt,
    useOptimistic: Dt,
    useMemoCache: Dt,
    useCacheRefresh: Dt
  }, go = {
    readContext: $t,
    use: On,
    useCallback: function(t, l) {
      return tl().memoizedState = [
        t,
        l === void 0 ? null : l
      ], t;
    },
    useContext: $t,
    useEffect: Ps,
    useImperativeHandle: function(t, l, u) {
      u = u != null ? u.concat([t]) : null, Rn(
        4194308,
        4,
        ao.bind(null, l, t),
        u
      );
    },
    useLayoutEffect: function(t, l) {
      return Rn(4194308, 4, t, l);
    },
    useInsertionEffect: function(t, l) {
      Rn(4, 2, t, l);
    },
    useMemo: function(t, l) {
      var u = tl();
      l = l === void 0 ? null : l;
      var a = t();
      if (Vu) {
        eu(!0);
        try {
          t();
        } finally {
          eu(!1);
        }
      }
      return u.memoizedState = [a, l], a;
    },
    useReducer: function(t, l, u) {
      var a = tl();
      if (u !== void 0) {
        var e = u(l);
        if (Vu) {
          eu(!0);
          try {
            u(l);
          } finally {
            eu(!1);
          }
        }
      } else e = l;
      return a.memoizedState = a.baseState = e, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: e
      }, a.queue = t, t = t.dispatch = _y.bind(
        null,
        at,
        t
      ), [a.memoizedState, t];
    },
    useRef: function(t) {
      var l = tl();
      return t = { current: t }, l.memoizedState = t;
    },
    useState: function(t) {
      t = Gf(t);
      var l = t.queue, u = yo.bind(null, at, l);
      return l.dispatch = u, [t.memoizedState, u];
    },
    useDebugValue: Xf,
    useDeferredValue: function(t, l) {
      var u = tl();
      return Qf(u, t, l);
    },
    useTransition: function() {
      var t = Gf(!1);
      return t = io.bind(
        null,
        at,
        t.queue,
        !0,
        !1
      ), tl().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, l, u) {
      var a = at, e = tl();
      if (dt) {
        if (u === void 0)
          throw Error(s(407));
        u = u();
      } else {
        if (u = l(), Et === null)
          throw Error(s(349));
        (st & 124) !== 0 || Cs(a, l, u);
      }
      e.memoizedState = u;
      var n = { value: u, getSnapshot: l };
      return e.queue = n, Ps(js.bind(null, a, n, t), [
        t
      ]), a.flags |= 2048, Aa(
        9,
        Mn(),
        Gs.bind(
          null,
          a,
          n,
          u,
          l
        ),
        null
      ), u;
    },
    useId: function() {
      var t = tl(), l = Et.identifierPrefix;
      if (dt) {
        var u = Vl, a = Zl;
        u = (a & ~(1 << 32 - nl(a) - 1)).toString(32) + u, l = "«" + l + "R" + u, u = _n++, 0 < u && (l += "H" + u.toString(32)), l += "»";
      } else
        u = py++, l = "«" + l + "r" + u.toString(32) + "»";
      return t.memoizedState = l;
    },
    useHostTransitionStatus: Vf,
    useFormState: $s,
    useActionState: $s,
    useOptimistic: function(t) {
      var l = tl();
      l.memoizedState = l.baseState = t;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return l.queue = u, l = Lf.bind(
        null,
        at,
        !0,
        u
      ), u.dispatch = l, [t, l];
    },
    useMemoCache: Yf,
    useCacheRefresh: function() {
      return tl().memoizedState = zy.bind(
        null,
        at
      );
    }
  }, So = {
    readContext: $t,
    use: On,
    useCallback: no,
    useContext: $t,
    useEffect: to,
    useImperativeHandle: eo,
    useInsertionEffect: lo,
    useLayoutEffect: uo,
    useMemo: co,
    useReducer: Dn,
    useRef: Is,
    useState: function() {
      return Dn(wl);
    },
    useDebugValue: Xf,
    useDeferredValue: function(t, l) {
      var u = Nt();
      return fo(
        u,
        gt.memoizedState,
        t,
        l
      );
    },
    useTransition: function() {
      var t = Dn(wl)[0], l = Nt().memoizedState;
      return [
        typeof t == "boolean" ? t : pe(t),
        l
      ];
    },
    useSyncExternalStore: Bs,
    useId: oo,
    useHostTransitionStatus: Vf,
    useFormState: ks,
    useActionState: ks,
    useOptimistic: function(t, l) {
      var u = Nt();
      return Zs(u, gt, t, l);
    },
    useMemoCache: Yf,
    useCacheRefresh: ho
  }, Oy = {
    readContext: $t,
    use: On,
    useCallback: no,
    useContext: $t,
    useEffect: to,
    useImperativeHandle: eo,
    useInsertionEffect: lo,
    useLayoutEffect: uo,
    useMemo: co,
    useReducer: Cf,
    useRef: Is,
    useState: function() {
      return Cf(wl);
    },
    useDebugValue: Xf,
    useDeferredValue: function(t, l) {
      var u = Nt();
      return gt === null ? Qf(u, t, l) : fo(
        u,
        gt.memoizedState,
        t,
        l
      );
    },
    useTransition: function() {
      var t = Cf(wl)[0], l = Nt().memoizedState;
      return [
        typeof t == "boolean" ? t : pe(t),
        l
      ];
    },
    useSyncExternalStore: Bs,
    useId: oo,
    useHostTransitionStatus: Vf,
    useFormState: Fs,
    useActionState: Fs,
    useOptimistic: function(t, l) {
      var u = Nt();
      return gt !== null ? Zs(u, gt, t, l) : (u.baseState = t, [t, u.queue.dispatch]);
    },
    useMemoCache: Yf,
    useCacheRefresh: ho
  }, Ta = null, Ae = 0;
  function Hn(t) {
    var l = Ae;
    return Ae += 1, Ta === null && (Ta = []), Ms(Ta, t, l);
  }
  function Te(t, l) {
    l = l.props.ref, t.ref = l !== void 0 ? l : null;
  }
  function qn(t, l) {
    throw l.$$typeof === C ? Error(s(525)) : (t = Object.prototype.toString.call(l), Error(
      s(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(l).join(", ") + "}" : t
      )
    ));
  }
  function po(t) {
    var l = t._init;
    return l(t._payload);
  }
  function bo(t) {
    function l(v, y) {
      if (t) {
        var m = v.deletions;
        m === null ? (v.deletions = [y], v.flags |= 16) : m.push(y);
      }
    }
    function u(v, y) {
      if (!t) return null;
      for (; y !== null; )
        l(v, y), y = y.sibling;
      return null;
    }
    function a(v) {
      for (var y = /* @__PURE__ */ new Map(); v !== null; )
        v.key !== null ? y.set(v.key, v) : y.set(v.index, v), v = v.sibling;
      return y;
    }
    function e(v, y) {
      return v = Ql(v, y), v.index = 0, v.sibling = null, v;
    }
    function n(v, y, m) {
      return v.index = m, t ? (m = v.alternate, m !== null ? (m = m.index, m < y ? (v.flags |= 67108866, y) : m) : (v.flags |= 67108866, y)) : (v.flags |= 1048576, y);
    }
    function f(v) {
      return t && v.alternate === null && (v.flags |= 67108866), v;
    }
    function i(v, y, m, z) {
      return y === null || y.tag !== 6 ? (y = of(m, v.mode, z), y.return = v, y) : (y = e(y, m), y.return = v, y);
    }
    function d(v, y, m, z) {
      var x = m.type;
      return x === j ? T(
        v,
        y,
        m.props.children,
        z,
        m.key
      ) : y !== null && (y.elementType === x || typeof x == "object" && x !== null && x.$$typeof === Rt && po(x) === y.type) ? (y = e(y, m.props), Te(y, m), y.return = v, y) : (y = vn(
        m.type,
        m.key,
        m.props,
        null,
        v.mode,
        z
      ), Te(y, m), y.return = v, y);
    }
    function g(v, y, m, z) {
      return y === null || y.tag !== 4 || y.stateNode.containerInfo !== m.containerInfo || y.stateNode.implementation !== m.implementation ? (y = df(m, v.mode, z), y.return = v, y) : (y = e(y, m.children || []), y.return = v, y);
    }
    function T(v, y, m, z, x) {
      return y === null || y.tag !== 7 ? (y = Yu(
        m,
        v.mode,
        z,
        x
      ), y.return = v, y) : (y = e(y, m), y.return = v, y);
    }
    function _(v, y, m) {
      if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint")
        return y = of(
          "" + y,
          v.mode,
          m
        ), y.return = v, y;
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case G:
            return m = vn(
              y.type,
              y.key,
              y.props,
              null,
              v.mode,
              m
            ), Te(m, y), m.return = v, m;
          case Y:
            return y = df(
              y,
              v.mode,
              m
            ), y.return = v, y;
          case Rt:
            var z = y._init;
            return y = z(y._payload), _(v, y, m);
        }
        if (Bt(y) || Yt(y))
          return y = Yu(
            y,
            v.mode,
            m,
            null
          ), y.return = v, y;
        if (typeof y.then == "function")
          return _(v, Hn(y), m);
        if (y.$$typeof === k)
          return _(
            v,
            pn(v, y),
            m
          );
        qn(v, y);
      }
      return null;
    }
    function S(v, y, m, z) {
      var x = y !== null ? y.key : null;
      if (typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint")
        return x !== null ? null : i(v, y, "" + m, z);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case G:
            return m.key === x ? d(v, y, m, z) : null;
          case Y:
            return m.key === x ? g(v, y, m, z) : null;
          case Rt:
            return x = m._init, m = x(m._payload), S(v, y, m, z);
        }
        if (Bt(m) || Yt(m))
          return x !== null ? null : T(v, y, m, z, null);
        if (typeof m.then == "function")
          return S(
            v,
            y,
            Hn(m),
            z
          );
        if (m.$$typeof === k)
          return S(
            v,
            y,
            pn(v, m),
            z
          );
        qn(v, m);
      }
      return null;
    }
    function p(v, y, m, z, x) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return v = v.get(m) || null, i(y, v, "" + z, x);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case G:
            return v = v.get(
              z.key === null ? m : z.key
            ) || null, d(y, v, z, x);
          case Y:
            return v = v.get(
              z.key === null ? m : z.key
            ) || null, g(y, v, z, x);
          case Rt:
            var et = z._init;
            return z = et(z._payload), p(
              v,
              y,
              m,
              z,
              x
            );
        }
        if (Bt(z) || Yt(z))
          return v = v.get(m) || null, T(y, v, z, x, null);
        if (typeof z.then == "function")
          return p(
            v,
            y,
            m,
            Hn(z),
            x
          );
        if (z.$$typeof === k)
          return p(
            v,
            y,
            m,
            pn(y, z),
            x
          );
        qn(y, z);
      }
      return null;
    }
    function $(v, y, m, z) {
      for (var x = null, et = null, X = y, J = y = 0, Qt = null; X !== null && J < m.length; J++) {
        X.index > J ? (Qt = X, X = null) : Qt = X.sibling;
        var ot = S(
          v,
          X,
          m[J],
          z
        );
        if (ot === null) {
          X === null && (X = Qt);
          break;
        }
        t && X && ot.alternate === null && l(v, X), y = n(ot, y, J), et === null ? x = ot : et.sibling = ot, et = ot, X = Qt;
      }
      if (J === m.length)
        return u(v, X), dt && Cu(v, J), x;
      if (X === null) {
        for (; J < m.length; J++)
          X = _(v, m[J], z), X !== null && (y = n(
            X,
            y,
            J
          ), et === null ? x = X : et.sibling = X, et = X);
        return dt && Cu(v, J), x;
      }
      for (X = a(X); J < m.length; J++)
        Qt = p(
          X,
          v,
          J,
          m[J],
          z
        ), Qt !== null && (t && Qt.alternate !== null && X.delete(
          Qt.key === null ? J : Qt.key
        ), y = n(
          Qt,
          y,
          J
        ), et === null ? x = Qt : et.sibling = Qt, et = Qt);
      return t && X.forEach(function(Du) {
        return l(v, Du);
      }), dt && Cu(v, J), x;
    }
    function L(v, y, m, z) {
      if (m == null) throw Error(s(151));
      for (var x = null, et = null, X = y, J = y = 0, Qt = null, ot = m.next(); X !== null && !ot.done; J++, ot = m.next()) {
        X.index > J ? (Qt = X, X = null) : Qt = X.sibling;
        var Du = S(v, X, ot.value, z);
        if (Du === null) {
          X === null && (X = Qt);
          break;
        }
        t && X && Du.alternate === null && l(v, X), y = n(Du, y, J), et === null ? x = Du : et.sibling = Du, et = Du, X = Qt;
      }
      if (ot.done)
        return u(v, X), dt && Cu(v, J), x;
      if (X === null) {
        for (; !ot.done; J++, ot = m.next())
          ot = _(v, ot.value, z), ot !== null && (y = n(ot, y, J), et === null ? x = ot : et.sibling = ot, et = ot);
        return dt && Cu(v, J), x;
      }
      for (X = a(X); !ot.done; J++, ot = m.next())
        ot = p(X, v, J, ot.value, z), ot !== null && (t && ot.alternate !== null && X.delete(ot.key === null ? J : ot.key), y = n(ot, y, J), et === null ? x = ot : et.sibling = ot, et = ot);
      return t && X.forEach(function(D1) {
        return l(v, D1);
      }), dt && Cu(v, J), x;
    }
    function pt(v, y, m, z) {
      if (typeof m == "object" && m !== null && m.type === j && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case G:
            t: {
              for (var x = m.key; y !== null; ) {
                if (y.key === x) {
                  if (x = m.type, x === j) {
                    if (y.tag === 7) {
                      u(
                        v,
                        y.sibling
                      ), z = e(
                        y,
                        m.props.children
                      ), z.return = v, v = z;
                      break t;
                    }
                  } else if (y.elementType === x || typeof x == "object" && x !== null && x.$$typeof === Rt && po(x) === y.type) {
                    u(
                      v,
                      y.sibling
                    ), z = e(y, m.props), Te(z, m), z.return = v, v = z;
                    break t;
                  }
                  u(v, y);
                  break;
                } else l(v, y);
                y = y.sibling;
              }
              m.type === j ? (z = Yu(
                m.props.children,
                v.mode,
                z,
                m.key
              ), z.return = v, v = z) : (z = vn(
                m.type,
                m.key,
                m.props,
                null,
                v.mode,
                z
              ), Te(z, m), z.return = v, v = z);
            }
            return f(v);
          case Y:
            t: {
              for (x = m.key; y !== null; ) {
                if (y.key === x)
                  if (y.tag === 4 && y.stateNode.containerInfo === m.containerInfo && y.stateNode.implementation === m.implementation) {
                    u(
                      v,
                      y.sibling
                    ), z = e(y, m.children || []), z.return = v, v = z;
                    break t;
                  } else {
                    u(v, y);
                    break;
                  }
                else l(v, y);
                y = y.sibling;
              }
              z = df(m, v.mode, z), z.return = v, v = z;
            }
            return f(v);
          case Rt:
            return x = m._init, m = x(m._payload), pt(
              v,
              y,
              m,
              z
            );
        }
        if (Bt(m))
          return $(
            v,
            y,
            m,
            z
          );
        if (Yt(m)) {
          if (x = Yt(m), typeof x != "function") throw Error(s(150));
          return m = x.call(m), L(
            v,
            y,
            m,
            z
          );
        }
        if (typeof m.then == "function")
          return pt(
            v,
            y,
            Hn(m),
            z
          );
        if (m.$$typeof === k)
          return pt(
            v,
            y,
            pn(v, m),
            z
          );
        qn(v, m);
      }
      return typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint" ? (m = "" + m, y !== null && y.tag === 6 ? (u(v, y.sibling), z = e(y, m), z.return = v, v = z) : (u(v, y), z = of(m, v.mode, z), z.return = v, v = z), f(v)) : u(v, y);
    }
    return function(v, y, m, z) {
      try {
        Ae = 0;
        var x = pt(
          v,
          y,
          m,
          z
        );
        return Ta = null, x;
      } catch (X) {
        if (X === he || X === En) throw X;
        var et = fl(29, X, null, v.mode);
        return et.lanes = z, et.return = v, et;
      } finally {
      }
    };
  }
  var za = bo(!0), Eo = bo(!1), bl = O(null), Nl = null;
  function du(t) {
    var l = t.alternate;
    q(xt, xt.current & 1), q(bl, t), Nl === null && (l === null || pa.current !== null || l.memoizedState !== null) && (Nl = t);
  }
  function Ao(t) {
    if (t.tag === 22) {
      if (q(xt, xt.current), q(bl, t), Nl === null) {
        var l = t.alternate;
        l !== null && l.memoizedState !== null && (Nl = t);
      }
    } else hu();
  }
  function hu() {
    q(xt, xt.current), q(bl, bl.current);
  }
  function Jl(t) {
    N(bl), Nl === t && (Nl = null), N(xt);
  }
  var xt = O(0);
  function xn(t) {
    for (var l = t; l !== null; ) {
      if (l.tag === 13) {
        var u = l.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || u.data === "$?" || xi(u)))
          return l;
      } else if (l.tag === 19 && l.memoizedProps.revealOrder !== void 0) {
        if ((l.flags & 128) !== 0) return l;
      } else if (l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === t) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === t) return null;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
    return null;
  }
  function Kf(t, l, u, a) {
    l = t.memoizedState, u = u(a, l), u = u == null ? l : R({}, l, u), t.memoizedState = u, t.lanes === 0 && (t.updateQueue.baseState = u);
  }
  var wf = {
    enqueueSetState: function(t, l, u) {
      t = t._reactInternals;
      var a = ol(), e = ru(a);
      e.payload = l, u != null && (e.callback = u), l = su(t, e, a), l !== null && (dl(l, t, a), ve(l, t, a));
    },
    enqueueReplaceState: function(t, l, u) {
      t = t._reactInternals;
      var a = ol(), e = ru(a);
      e.tag = 1, e.payload = l, u != null && (e.callback = u), l = su(t, e, a), l !== null && (dl(l, t, a), ve(l, t, a));
    },
    enqueueForceUpdate: function(t, l) {
      t = t._reactInternals;
      var u = ol(), a = ru(u);
      a.tag = 2, l != null && (a.callback = l), l = su(t, a, u), l !== null && (dl(l, t, u), ve(l, t, u));
    }
  };
  function To(t, l, u, a, e, n, f) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, n, f) : l.prototype && l.prototype.isPureReactComponent ? !ne(u, a) || !ne(e, n) : !0;
  }
  function zo(t, l, u, a) {
    t = l.state, typeof l.componentWillReceiveProps == "function" && l.componentWillReceiveProps(u, a), typeof l.UNSAFE_componentWillReceiveProps == "function" && l.UNSAFE_componentWillReceiveProps(u, a), l.state !== t && wf.enqueueReplaceState(l, l.state, null);
  }
  function Lu(t, l) {
    var u = l;
    if ("ref" in l) {
      u = {};
      for (var a in l)
        a !== "ref" && (u[a] = l[a]);
    }
    if (t = t.defaultProps) {
      u === l && (u = R({}, u));
      for (var e in t)
        u[e] === void 0 && (u[e] = t[e]);
    }
    return u;
  }
  var Yn = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var l = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(l)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  };
  function _o(t) {
    Yn(t);
  }
  function Oo(t) {
    console.error(t);
  }
  function Do(t) {
    Yn(t);
  }
  function Bn(t, l) {
    try {
      var u = t.onUncaughtError;
      u(l.value, { componentStack: l.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Mo(t, l, u) {
    try {
      var a = t.onCaughtError;
      a(u.value, {
        componentStack: u.stack,
        errorBoundary: l.tag === 1 ? l.stateNode : null
      });
    } catch (e) {
      setTimeout(function() {
        throw e;
      });
    }
  }
  function Jf(t, l, u) {
    return u = ru(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      Bn(t, l);
    }, u;
  }
  function Ro(t) {
    return t = ru(t), t.tag = 3, t;
  }
  function Uo(t, l, u, a) {
    var e = u.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = a.value;
      t.payload = function() {
        return e(n);
      }, t.callback = function() {
        Mo(l, u, a);
      };
    }
    var f = u.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (t.callback = function() {
      Mo(l, u, a), typeof e != "function" && (pu === null ? pu = /* @__PURE__ */ new Set([this]) : pu.add(this));
      var i = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: i !== null ? i : ""
      });
    });
  }
  function Dy(t, l, u, a, e) {
    if (u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (l = u.alternate, l !== null && se(
        l,
        u,
        e,
        !0
      ), u = bl.current, u !== null) {
        switch (u.tag) {
          case 13:
            return Nl === null ? gi() : u.alternate === null && Ot === 0 && (Ot = 3), u.flags &= -257, u.flags |= 65536, u.lanes = e, a === Af ? u.flags |= 16384 : (l = u.updateQueue, l === null ? u.updateQueue = /* @__PURE__ */ new Set([a]) : l.add(a), pi(t, a, e)), !1;
          case 22:
            return u.flags |= 65536, a === Af ? u.flags |= 16384 : (l = u.updateQueue, l === null ? (l = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, u.updateQueue = l) : (u = l.retryQueue, u === null ? l.retryQueue = /* @__PURE__ */ new Set([a]) : u.add(a)), pi(t, a, e)), !1;
        }
        throw Error(s(435, u.tag));
      }
      return pi(t, a, e), gi(), !1;
    }
    if (dt)
      return l = bl.current, l !== null ? ((l.flags & 65536) === 0 && (l.flags |= 256), l.flags |= 65536, l.lanes = e, a !== vf && (t = Error(s(422), { cause: a }), re(ml(t, u)))) : (a !== vf && (l = Error(s(423), {
        cause: a
      }), re(
        ml(l, u)
      )), t = t.current.alternate, t.flags |= 65536, e &= -e, t.lanes |= e, a = ml(a, u), e = Jf(
        t.stateNode,
        a,
        e
      ), _f(t, e), Ot !== 4 && (Ot = 2)), !1;
    var n = Error(s(520), { cause: a });
    if (n = ml(n, u), Ue === null ? Ue = [n] : Ue.push(n), Ot !== 4 && (Ot = 2), l === null) return !0;
    a = ml(a, u), u = l;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, t = e & -e, u.lanes |= t, t = Jf(u.stateNode, a, t), _f(u, t), !1;
        case 1:
          if (l = u.type, n = u.stateNode, (u.flags & 128) === 0 && (typeof l.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (pu === null || !pu.has(n))))
            return u.flags |= 65536, e &= -e, u.lanes |= e, e = Ro(e), Uo(
              e,
              t,
              u,
              a
            ), _f(u, e), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var No = Error(s(461)), jt = !1;
  function Vt(t, l, u, a) {
    l.child = t === null ? Eo(l, null, u, a) : za(
      l,
      t.child,
      u,
      a
    );
  }
  function Ho(t, l, u, a, e) {
    u = u.render;
    var n = l.ref;
    if ("ref" in a) {
      var f = {};
      for (var i in a)
        i !== "ref" && (f[i] = a[i]);
    } else f = a;
    return Qu(l), a = Uf(
      t,
      l,
      u,
      f,
      n,
      e
    ), i = Nf(), t !== null && !jt ? (Hf(t, l, e), $l(t, l, e)) : (dt && i && hf(l), l.flags |= 1, Vt(t, l, a, e), l.child);
  }
  function qo(t, l, u, a, e) {
    if (t === null) {
      var n = u.type;
      return typeof n == "function" && !sf(n) && n.defaultProps === void 0 && u.compare === null ? (l.tag = 15, l.type = n, xo(
        t,
        l,
        n,
        a,
        e
      )) : (t = vn(
        u.type,
        null,
        a,
        l,
        l.mode,
        e
      ), t.ref = l.ref, t.return = l, l.child = t);
    }
    if (n = t.child, !li(t, e)) {
      var f = n.memoizedProps;
      if (u = u.compare, u = u !== null ? u : ne, u(f, a) && t.ref === l.ref)
        return $l(t, l, e);
    }
    return l.flags |= 1, t = Ql(n, a), t.ref = l.ref, t.return = l, l.child = t;
  }
  function xo(t, l, u, a, e) {
    if (t !== null) {
      var n = t.memoizedProps;
      if (ne(n, a) && t.ref === l.ref)
        if (jt = !1, l.pendingProps = a = n, li(t, e))
          (t.flags & 131072) !== 0 && (jt = !0);
        else
          return l.lanes = t.lanes, $l(t, l, e);
    }
    return $f(
      t,
      l,
      u,
      a,
      e
    );
  }
  function Yo(t, l, u) {
    var a = l.pendingProps, e = a.children, n = t !== null ? t.memoizedState : null;
    if (a.mode === "hidden") {
      if ((l.flags & 128) !== 0) {
        if (a = n !== null ? n.baseLanes | u : u, t !== null) {
          for (e = l.child = t.child, n = 0; e !== null; )
            n = n | e.lanes | e.childLanes, e = e.sibling;
          l.childLanes = n & ~a;
        } else l.childLanes = 0, l.child = null;
        return Bo(
          t,
          l,
          a,
          u
        );
      }
      if ((u & 536870912) !== 0)
        l.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && bn(
          l,
          n !== null ? n.cachePool : null
        ), n !== null ? qs(l, n) : Df(), Ao(l);
      else
        return l.lanes = l.childLanes = 536870912, Bo(
          t,
          l,
          n !== null ? n.baseLanes | u : u,
          u
        );
    } else
      n !== null ? (bn(l, n.cachePool), qs(l, n), hu(), l.memoizedState = null) : (t !== null && bn(l, null), Df(), hu());
    return Vt(t, l, e, u), l.child;
  }
  function Bo(t, l, u, a) {
    var e = Ef();
    return e = e === null ? null : { parent: qt._currentValue, pool: e }, l.memoizedState = {
      baseLanes: u,
      cachePool: e
    }, t !== null && bn(l, null), Df(), Ao(l), t !== null && se(t, l, a, !0), null;
  }
  function Cn(t, l) {
    var u = l.ref;
    if (u === null)
      t !== null && t.ref !== null && (l.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(s(284));
      (t === null || t.ref !== u) && (l.flags |= 4194816);
    }
  }
  function $f(t, l, u, a, e) {
    return Qu(l), u = Uf(
      t,
      l,
      u,
      a,
      void 0,
      e
    ), a = Nf(), t !== null && !jt ? (Hf(t, l, e), $l(t, l, e)) : (dt && a && hf(l), l.flags |= 1, Vt(t, l, u, e), l.child);
  }
  function Co(t, l, u, a, e, n) {
    return Qu(l), l.updateQueue = null, u = Ys(
      l,
      a,
      u,
      e
    ), xs(t), a = Nf(), t !== null && !jt ? (Hf(t, l, n), $l(t, l, n)) : (dt && a && hf(l), l.flags |= 1, Vt(t, l, u, n), l.child);
  }
  function Go(t, l, u, a, e) {
    if (Qu(l), l.stateNode === null) {
      var n = ya, f = u.contextType;
      typeof f == "object" && f !== null && (n = $t(f)), n = new u(a, n), l.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = wf, l.stateNode = n, n._reactInternals = l, n = l.stateNode, n.props = a, n.state = l.memoizedState, n.refs = {}, Tf(l), f = u.contextType, n.context = typeof f == "object" && f !== null ? $t(f) : ya, n.state = l.memoizedState, f = u.getDerivedStateFromProps, typeof f == "function" && (Kf(
        l,
        u,
        f,
        a
      ), n.state = l.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (f = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), f !== n.state && wf.enqueueReplaceState(n, n.state, null), ge(l, a, n, e), me(), n.state = l.memoizedState), typeof n.componentDidMount == "function" && (l.flags |= 4194308), a = !0;
    } else if (t === null) {
      n = l.stateNode;
      var i = l.memoizedProps, d = Lu(u, i);
      n.props = d;
      var g = n.context, T = u.contextType;
      f = ya, typeof T == "object" && T !== null && (f = $t(T));
      var _ = u.getDerivedStateFromProps;
      T = typeof _ == "function" || typeof n.getSnapshotBeforeUpdate == "function", i = l.pendingProps !== i, T || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i || g !== f) && zo(
        l,
        n,
        a,
        f
      ), iu = !1;
      var S = l.memoizedState;
      n.state = S, ge(l, a, n, e), me(), g = l.memoizedState, i || S !== g || iu ? (typeof _ == "function" && (Kf(
        l,
        u,
        _,
        a
      ), g = l.memoizedState), (d = iu || To(
        l,
        u,
        d,
        a,
        S,
        g,
        f
      )) ? (T || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (l.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (l.flags |= 4194308), l.memoizedProps = a, l.memoizedState = g), n.props = a, n.state = g, n.context = f, a = d) : (typeof n.componentDidMount == "function" && (l.flags |= 4194308), a = !1);
    } else {
      n = l.stateNode, zf(t, l), f = l.memoizedProps, T = Lu(u, f), n.props = T, _ = l.pendingProps, S = n.context, g = u.contextType, d = ya, typeof g == "object" && g !== null && (d = $t(g)), i = u.getDerivedStateFromProps, (g = typeof i == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f !== _ || S !== d) && zo(
        l,
        n,
        a,
        d
      ), iu = !1, S = l.memoizedState, n.state = S, ge(l, a, n, e), me();
      var p = l.memoizedState;
      f !== _ || S !== p || iu || t !== null && t.dependencies !== null && Sn(t.dependencies) ? (typeof i == "function" && (Kf(
        l,
        u,
        i,
        a
      ), p = l.memoizedState), (T = iu || To(
        l,
        u,
        T,
        a,
        S,
        p,
        d
      ) || t !== null && t.dependencies !== null && Sn(t.dependencies)) ? (g || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, p, d), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        a,
        p,
        d
      )), typeof n.componentDidUpdate == "function" && (l.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (l.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || f === t.memoizedProps && S === t.memoizedState || (l.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && S === t.memoizedState || (l.flags |= 1024), l.memoizedProps = a, l.memoizedState = p), n.props = a, n.state = p, n.context = d, a = T) : (typeof n.componentDidUpdate != "function" || f === t.memoizedProps && S === t.memoizedState || (l.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && S === t.memoizedState || (l.flags |= 1024), a = !1);
    }
    return n = a, Cn(t, l), a = (l.flags & 128) !== 0, n || a ? (n = l.stateNode, u = a && typeof u.getDerivedStateFromError != "function" ? null : n.render(), l.flags |= 1, t !== null && a ? (l.child = za(
      l,
      t.child,
      null,
      e
    ), l.child = za(
      l,
      null,
      u,
      e
    )) : Vt(t, l, u, e), l.memoizedState = n.state, t = l.child) : t = $l(
      t,
      l,
      e
    ), t;
  }
  function jo(t, l, u, a) {
    return ie(), l.flags |= 256, Vt(t, l, u, a), l.child;
  }
  var kf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Wf(t) {
    return { baseLanes: t, cachePool: _s() };
  }
  function Ff(t, l, u) {
    return t = t !== null ? t.childLanes & ~u : 0, l && (t |= El), t;
  }
  function Xo(t, l, u) {
    var a = l.pendingProps, e = !1, n = (l.flags & 128) !== 0, f;
    if ((f = n) || (f = t !== null && t.memoizedState === null ? !1 : (xt.current & 2) !== 0), f && (e = !0, l.flags &= -129), f = (l.flags & 32) !== 0, l.flags &= -33, t === null) {
      if (dt) {
        if (e ? du(l) : hu(), dt) {
          var i = _t, d;
          if (d = i) {
            t: {
              for (d = i, i = Ul; d.nodeType !== 8; ) {
                if (!i) {
                  i = null;
                  break t;
                }
                if (d = Dl(
                  d.nextSibling
                ), d === null) {
                  i = null;
                  break t;
                }
              }
              i = d;
            }
            i !== null ? (l.memoizedState = {
              dehydrated: i,
              treeContext: Bu !== null ? { id: Zl, overflow: Vl } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, d = fl(
              18,
              null,
              null,
              0
            ), d.stateNode = i, d.return = l, l.child = d, Ft = l, _t = null, d = !0) : d = !1;
          }
          d || ju(l);
        }
        if (i = l.memoizedState, i !== null && (i = i.dehydrated, i !== null))
          return xi(i) ? l.lanes = 32 : l.lanes = 536870912, null;
        Jl(l);
      }
      return i = a.children, a = a.fallback, e ? (hu(), e = l.mode, i = Gn(
        { mode: "hidden", children: i },
        e
      ), a = Yu(
        a,
        e,
        u,
        null
      ), i.return = l, a.return = l, i.sibling = a, l.child = i, e = l.child, e.memoizedState = Wf(u), e.childLanes = Ff(
        t,
        f,
        u
      ), l.memoizedState = kf, a) : (du(l), If(l, i));
    }
    if (d = t.memoizedState, d !== null && (i = d.dehydrated, i !== null)) {
      if (n)
        l.flags & 256 ? (du(l), l.flags &= -257, l = Pf(
          t,
          l,
          u
        )) : l.memoizedState !== null ? (hu(), l.child = t.child, l.flags |= 128, l = null) : (hu(), e = a.fallback, i = l.mode, a = Gn(
          { mode: "visible", children: a.children },
          i
        ), e = Yu(
          e,
          i,
          u,
          null
        ), e.flags |= 2, a.return = l, e.return = l, a.sibling = e, l.child = a, za(
          l,
          t.child,
          null,
          u
        ), a = l.child, a.memoizedState = Wf(u), a.childLanes = Ff(
          t,
          f,
          u
        ), l.memoizedState = kf, l = e);
      else if (du(l), xi(i)) {
        if (f = i.nextSibling && i.nextSibling.dataset, f) var g = f.dgst;
        f = g, a = Error(s(419)), a.stack = "", a.digest = f, re({ value: a, source: null, stack: null }), l = Pf(
          t,
          l,
          u
        );
      } else if (jt || se(t, l, u, !1), f = (u & t.childLanes) !== 0, jt || f) {
        if (f = Et, f !== null && (a = u & -u, a = (a & 42) !== 0 ? 1 : xc(a), a = (a & (f.suspendedLanes | u)) !== 0 ? 0 : a, a !== 0 && a !== d.retryLane))
          throw d.retryLane = a, ha(t, a), dl(f, t, a), No;
        i.data === "$?" || gi(), l = Pf(
          t,
          l,
          u
        );
      } else
        i.data === "$?" ? (l.flags |= 192, l.child = t.child, l = null) : (t = d.treeContext, _t = Dl(
          i.nextSibling
        ), Ft = l, dt = !0, Gu = null, Ul = !1, t !== null && (Sl[pl++] = Zl, Sl[pl++] = Vl, Sl[pl++] = Bu, Zl = t.id, Vl = t.overflow, Bu = l), l = If(
          l,
          a.children
        ), l.flags |= 4096);
      return l;
    }
    return e ? (hu(), e = a.fallback, i = l.mode, d = t.child, g = d.sibling, a = Ql(d, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = d.subtreeFlags & 65011712, g !== null ? e = Ql(g, e) : (e = Yu(
      e,
      i,
      u,
      null
    ), e.flags |= 2), e.return = l, a.return = l, a.sibling = e, l.child = a, a = e, e = l.child, i = t.child.memoizedState, i === null ? i = Wf(u) : (d = i.cachePool, d !== null ? (g = qt._currentValue, d = d.parent !== g ? { parent: g, pool: g } : d) : d = _s(), i = {
      baseLanes: i.baseLanes | u,
      cachePool: d
    }), e.memoizedState = i, e.childLanes = Ff(
      t,
      f,
      u
    ), l.memoizedState = kf, a) : (du(l), u = t.child, t = u.sibling, u = Ql(u, {
      mode: "visible",
      children: a.children
    }), u.return = l, u.sibling = null, t !== null && (f = l.deletions, f === null ? (l.deletions = [t], l.flags |= 16) : f.push(t)), l.child = u, l.memoizedState = null, u);
  }
  function If(t, l) {
    return l = Gn(
      { mode: "visible", children: l },
      t.mode
    ), l.return = t, t.child = l;
  }
  function Gn(t, l) {
    return t = fl(22, t, null, l), t.lanes = 0, t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, t;
  }
  function Pf(t, l, u) {
    return za(l, t.child, null, u), t = If(
      l,
      l.pendingProps.children
    ), t.flags |= 2, l.memoizedState = null, t;
  }
  function Qo(t, l, u) {
    t.lanes |= l;
    var a = t.alternate;
    a !== null && (a.lanes |= l), gf(t.return, l, u);
  }
  function ti(t, l, u, a, e) {
    var n = t.memoizedState;
    n === null ? t.memoizedState = {
      isBackwards: l,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: u,
      tailMode: e
    } : (n.isBackwards = l, n.rendering = null, n.renderingStartTime = 0, n.last = a, n.tail = u, n.tailMode = e);
  }
  function Zo(t, l, u) {
    var a = l.pendingProps, e = a.revealOrder, n = a.tail;
    if (Vt(t, l, a.children, u), a = xt.current, (a & 2) !== 0)
      a = a & 1 | 2, l.flags |= 128;
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = l.child; t !== null; ) {
          if (t.tag === 13)
            t.memoizedState !== null && Qo(t, u, l);
          else if (t.tag === 19)
            Qo(t, u, l);
          else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue;
          }
          if (t === l) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === l)
              break t;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      a &= 1;
    }
    switch (q(xt, a), e) {
      case "forwards":
        for (u = l.child, e = null; u !== null; )
          t = u.alternate, t !== null && xn(t) === null && (e = u), u = u.sibling;
        u = e, u === null ? (e = l.child, l.child = null) : (e = u.sibling, u.sibling = null), ti(
          l,
          !1,
          e,
          u,
          n
        );
        break;
      case "backwards":
        for (u = null, e = l.child, l.child = null; e !== null; ) {
          if (t = e.alternate, t !== null && xn(t) === null) {
            l.child = e;
            break;
          }
          t = e.sibling, e.sibling = u, u = e, e = t;
        }
        ti(
          l,
          !0,
          u,
          null,
          n
        );
        break;
      case "together":
        ti(l, !1, null, null, void 0);
        break;
      default:
        l.memoizedState = null;
    }
    return l.child;
  }
  function $l(t, l, u) {
    if (t !== null && (l.dependencies = t.dependencies), Su |= l.lanes, (u & l.childLanes) === 0)
      if (t !== null) {
        if (se(
          t,
          l,
          u,
          !1
        ), (u & l.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && l.child !== t.child)
      throw Error(s(153));
    if (l.child !== null) {
      for (t = l.child, u = Ql(t, t.pendingProps), l.child = u, u.return = l; t.sibling !== null; )
        t = t.sibling, u = u.sibling = Ql(t, t.pendingProps), u.return = l;
      u.sibling = null;
    }
    return l.child;
  }
  function li(t, l) {
    return (t.lanes & l) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Sn(t)));
  }
  function My(t, l, u) {
    switch (l.tag) {
      case 3:
        ht(l, l.stateNode.containerInfo), fu(l, qt, t.memoizedState.cache), ie();
        break;
      case 27:
      case 5:
        Ru(l);
        break;
      case 4:
        ht(l, l.stateNode.containerInfo);
        break;
      case 10:
        fu(
          l,
          l.type,
          l.memoizedProps.value
        );
        break;
      case 13:
        var a = l.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (du(l), l.flags |= 128, null) : (u & l.child.childLanes) !== 0 ? Xo(t, l, u) : (du(l), t = $l(
            t,
            l,
            u
          ), t !== null ? t.sibling : null);
        du(l);
        break;
      case 19:
        var e = (t.flags & 128) !== 0;
        if (a = (u & l.childLanes) !== 0, a || (se(
          t,
          l,
          u,
          !1
        ), a = (u & l.childLanes) !== 0), e) {
          if (a)
            return Zo(
              t,
              l,
              u
            );
          l.flags |= 128;
        }
        if (e = l.memoizedState, e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null), q(xt, xt.current), a) break;
        return null;
      case 22:
      case 23:
        return l.lanes = 0, Yo(t, l, u);
      case 24:
        fu(l, qt, t.memoizedState.cache);
    }
    return $l(t, l, u);
  }
  function Vo(t, l, u) {
    if (t !== null)
      if (t.memoizedProps !== l.pendingProps)
        jt = !0;
      else {
        if (!li(t, u) && (l.flags & 128) === 0)
          return jt = !1, My(
            t,
            l,
            u
          );
        jt = (t.flags & 131072) !== 0;
      }
    else
      jt = !1, dt && (l.flags & 1048576) !== 0 && Ss(l, gn, l.index);
    switch (l.lanes = 0, l.tag) {
      case 16:
        t: {
          t = l.pendingProps;
          var a = l.elementType, e = a._init;
          if (a = e(a._payload), l.type = a, typeof a == "function")
            sf(a) ? (t = Lu(a, t), l.tag = 1, l = Go(
              null,
              l,
              a,
              t,
              u
            )) : (l.tag = 0, l = $f(
              null,
              l,
              a,
              t,
              u
            ));
          else {
            if (a != null) {
              if (e = a.$$typeof, e === rt) {
                l.tag = 11, l = Ho(
                  null,
                  l,
                  a,
                  t,
                  u
                );
                break t;
              } else if (e === K) {
                l.tag = 14, l = qo(
                  null,
                  l,
                  a,
                  t,
                  u
                );
                break t;
              }
            }
            throw l = Cl(a) || a, Error(s(306, l, ""));
          }
        }
        return l;
      case 0:
        return $f(
          t,
          l,
          l.type,
          l.pendingProps,
          u
        );
      case 1:
        return a = l.type, e = Lu(
          a,
          l.pendingProps
        ), Go(
          t,
          l,
          a,
          e,
          u
        );
      case 3:
        t: {
          if (ht(
            l,
            l.stateNode.containerInfo
          ), t === null) throw Error(s(387));
          a = l.pendingProps;
          var n = l.memoizedState;
          e = n.element, zf(t, l), ge(l, a, null, u);
          var f = l.memoizedState;
          if (a = f.cache, fu(l, qt, a), a !== n.cache && Sf(
            l,
            [qt],
            u,
            !0
          ), me(), a = f.element, n.isDehydrated)
            if (n = {
              element: a,
              isDehydrated: !1,
              cache: f.cache
            }, l.updateQueue.baseState = n, l.memoizedState = n, l.flags & 256) {
              l = jo(
                t,
                l,
                a,
                u
              );
              break t;
            } else if (a !== e) {
              e = ml(
                Error(s(424)),
                l
              ), re(e), l = jo(
                t,
                l,
                a,
                u
              );
              break t;
            } else {
              switch (t = l.stateNode.containerInfo, t.nodeType) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (_t = Dl(t.firstChild), Ft = l, dt = !0, Gu = null, Ul = !0, u = Eo(
                l,
                null,
                a,
                u
              ), l.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
            }
          else {
            if (ie(), a === e) {
              l = $l(
                t,
                l,
                u
              );
              break t;
            }
            Vt(
              t,
              l,
              a,
              u
            );
          }
          l = l.child;
        }
        return l;
      case 26:
        return Cn(t, l), t === null ? (u = J0(
          l.type,
          null,
          l.pendingProps,
          null
        )) ? l.memoizedState = u : dt || (u = l.type, t = l.pendingProps, a = In(
          w.current
        ).createElement(u), a[Jt] = l, a[It] = t, Kt(a, u, t), Gt(a), l.stateNode = a) : l.memoizedState = J0(
          l.type,
          t.memoizedProps,
          l.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return Ru(l), t === null && dt && (a = l.stateNode = L0(
          l.type,
          l.pendingProps,
          w.current
        ), Ft = l, Ul = !0, e = _t, Au(l.type) ? (Yi = e, _t = Dl(
          a.firstChild
        )) : _t = e), Vt(
          t,
          l,
          l.pendingProps.children,
          u
        ), Cn(t, l), t === null && (l.flags |= 4194304), l.child;
      case 5:
        return t === null && dt && ((e = a = _t) && (a = u1(
          a,
          l.type,
          l.pendingProps,
          Ul
        ), a !== null ? (l.stateNode = a, Ft = l, _t = Dl(
          a.firstChild
        ), Ul = !1, e = !0) : e = !1), e || ju(l)), Ru(l), e = l.type, n = l.pendingProps, f = t !== null ? t.memoizedProps : null, a = n.children, Ni(e, n) ? a = null : f !== null && Ni(e, f) && (l.flags |= 32), l.memoizedState !== null && (e = Uf(
          t,
          l,
          by,
          null,
          null,
          u
        ), je._currentValue = e), Cn(t, l), Vt(t, l, a, u), l.child;
      case 6:
        return t === null && dt && ((t = u = _t) && (u = a1(
          u,
          l.pendingProps,
          Ul
        ), u !== null ? (l.stateNode = u, Ft = l, _t = null, t = !0) : t = !1), t || ju(l)), null;
      case 13:
        return Xo(t, l, u);
      case 4:
        return ht(
          l,
          l.stateNode.containerInfo
        ), a = l.pendingProps, t === null ? l.child = za(
          l,
          null,
          a,
          u
        ) : Vt(
          t,
          l,
          a,
          u
        ), l.child;
      case 11:
        return Ho(
          t,
          l,
          l.type,
          l.pendingProps,
          u
        );
      case 7:
        return Vt(
          t,
          l,
          l.pendingProps,
          u
        ), l.child;
      case 8:
        return Vt(
          t,
          l,
          l.pendingProps.children,
          u
        ), l.child;
      case 12:
        return Vt(
          t,
          l,
          l.pendingProps.children,
          u
        ), l.child;
      case 10:
        return a = l.pendingProps, fu(l, l.type, a.value), Vt(
          t,
          l,
          a.children,
          u
        ), l.child;
      case 9:
        return e = l.type._context, a = l.pendingProps.children, Qu(l), e = $t(e), a = a(e), l.flags |= 1, Vt(t, l, a, u), l.child;
      case 14:
        return qo(
          t,
          l,
          l.type,
          l.pendingProps,
          u
        );
      case 15:
        return xo(
          t,
          l,
          l.type,
          l.pendingProps,
          u
        );
      case 19:
        return Zo(t, l, u);
      case 31:
        return a = l.pendingProps, u = l.mode, a = {
          mode: a.mode,
          children: a.children
        }, t === null ? (u = Gn(
          a,
          u
        ), u.ref = l.ref, l.child = u, u.return = l, l = u) : (u = Ql(t.child, a), u.ref = l.ref, l.child = u, u.return = l, l = u), l;
      case 22:
        return Yo(t, l, u);
      case 24:
        return Qu(l), a = $t(qt), t === null ? (e = Ef(), e === null && (e = Et, n = pf(), e.pooledCache = n, n.refCount++, n !== null && (e.pooledCacheLanes |= u), e = n), l.memoizedState = {
          parent: a,
          cache: e
        }, Tf(l), fu(l, qt, e)) : ((t.lanes & u) !== 0 && (zf(t, l), ge(l, null, null, u), me()), e = t.memoizedState, n = l.memoizedState, e.parent !== a ? (e = { parent: a, cache: a }, l.memoizedState = e, l.lanes === 0 && (l.memoizedState = l.updateQueue.baseState = e), fu(l, qt, a)) : (a = n.cache, fu(l, qt, a), a !== e.cache && Sf(
          l,
          [qt],
          u,
          !0
        ))), Vt(
          t,
          l,
          l.pendingProps.children,
          u
        ), l.child;
      case 29:
        throw l.pendingProps;
    }
    throw Error(s(156, l.tag));
  }
  function kl(t) {
    t.flags |= 4;
  }
  function Lo(t, l) {
    if (l.type !== "stylesheet" || (l.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !I0(l)) {
      if (l = bl.current, l !== null && ((st & 4194048) === st ? Nl !== null : (st & 62914560) !== st && (st & 536870912) === 0 || l !== Nl))
        throw ye = Af, Os;
      t.flags |= 8192;
    }
  }
  function jn(t, l) {
    l !== null && (t.flags |= 4), t.flags & 16384 && (l = t.tag !== 22 ? Er() : 536870912, t.lanes |= l, Ma |= l);
  }
  function ze(t, l) {
    if (!dt)
      switch (t.tailMode) {
        case "hidden":
          l = t.tail;
          for (var u = null; l !== null; )
            l.alternate !== null && (u = l), l = l.sibling;
          u === null ? t.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = t.tail;
          for (var a = null; u !== null; )
            u.alternate !== null && (a = u), u = u.sibling;
          a === null ? l || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null;
      }
  }
  function zt(t) {
    var l = t.alternate !== null && t.alternate.child === t.child, u = 0, a = 0;
    if (l)
      for (var e = t.child; e !== null; )
        u |= e.lanes | e.childLanes, a |= e.subtreeFlags & 65011712, a |= e.flags & 65011712, e.return = t, e = e.sibling;
    else
      for (e = t.child; e !== null; )
        u |= e.lanes | e.childLanes, a |= e.subtreeFlags, a |= e.flags, e.return = t, e = e.sibling;
    return t.subtreeFlags |= a, t.childLanes = u, l;
  }
  function Ry(t, l, u) {
    var a = l.pendingProps;
    switch (yf(l), l.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return zt(l), null;
      case 1:
        return zt(l), null;
      case 3:
        return u = l.stateNode, a = null, t !== null && (a = t.memoizedState.cache), l.memoizedState.cache !== a && (l.flags |= 2048), Kl(qt), wt(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (t === null || t.child === null) && (fe(l) ? kl(l) : t === null || t.memoizedState.isDehydrated && (l.flags & 256) === 0 || (l.flags |= 1024, Es())), zt(l), null;
      case 26:
        return u = l.memoizedState, t === null ? (kl(l), u !== null ? (zt(l), Lo(l, u)) : (zt(l), l.flags &= -16777217)) : u ? u !== t.memoizedState ? (kl(l), zt(l), Lo(l, u)) : (zt(l), l.flags &= -16777217) : (t.memoizedProps !== a && kl(l), zt(l), l.flags &= -16777217), null;
      case 27:
        Gl(l), u = w.current;
        var e = l.type;
        if (t !== null && l.stateNode != null)
          t.memoizedProps !== a && kl(l);
        else {
          if (!a) {
            if (l.stateNode === null)
              throw Error(s(166));
            return zt(l), null;
          }
          t = Q.current, fe(l) ? ps(l) : (t = L0(e, a, u), l.stateNode = t, kl(l));
        }
        return zt(l), null;
      case 5:
        if (Gl(l), u = l.type, t !== null && l.stateNode != null)
          t.memoizedProps !== a && kl(l);
        else {
          if (!a) {
            if (l.stateNode === null)
              throw Error(s(166));
            return zt(l), null;
          }
          if (t = Q.current, fe(l))
            ps(l);
          else {
            switch (e = In(
              w.current
            ), t) {
              case 1:
                t = e.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                t = e.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    t = e.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    t = e.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    t = e.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild);
                    break;
                  case "select":
                    t = typeof a.is == "string" ? e.createElement("select", { is: a.is }) : e.createElement("select"), a.multiple ? t.multiple = !0 : a.size && (t.size = a.size);
                    break;
                  default:
                    t = typeof a.is == "string" ? e.createElement(u, { is: a.is }) : e.createElement(u);
                }
            }
            t[Jt] = l, t[It] = a;
            t: for (e = l.child; e !== null; ) {
              if (e.tag === 5 || e.tag === 6)
                t.appendChild(e.stateNode);
              else if (e.tag !== 4 && e.tag !== 27 && e.child !== null) {
                e.child.return = e, e = e.child;
                continue;
              }
              if (e === l) break t;
              for (; e.sibling === null; ) {
                if (e.return === null || e.return === l)
                  break t;
                e = e.return;
              }
              e.sibling.return = e.return, e = e.sibling;
            }
            l.stateNode = t;
            t: switch (Kt(t, u, a), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!a.autoFocus;
                break t;
              case "img":
                t = !0;
                break t;
              default:
                t = !1;
            }
            t && kl(l);
          }
        }
        return zt(l), l.flags &= -16777217, null;
      case 6:
        if (t && l.stateNode != null)
          t.memoizedProps !== a && kl(l);
        else {
          if (typeof a != "string" && l.stateNode === null)
            throw Error(s(166));
          if (t = w.current, fe(l)) {
            if (t = l.stateNode, u = l.memoizedProps, a = null, e = Ft, e !== null)
              switch (e.tag) {
                case 27:
                case 5:
                  a = e.memoizedProps;
              }
            t[Jt] = l, t = !!(t.nodeValue === u || a !== null && a.suppressHydrationWarning === !0 || C0(t.nodeValue, u)), t || ju(l);
          } else
            t = In(t).createTextNode(
              a
            ), t[Jt] = l, l.stateNode = t;
        }
        return zt(l), null;
      case 13:
        if (a = l.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (e = fe(l), a !== null && a.dehydrated !== null) {
            if (t === null) {
              if (!e) throw Error(s(318));
              if (e = l.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
              e[Jt] = l;
            } else
              ie(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            zt(l), e = !1;
          } else
            e = Es(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = e), e = !0;
          if (!e)
            return l.flags & 256 ? (Jl(l), l) : (Jl(l), null);
        }
        if (Jl(l), (l.flags & 128) !== 0)
          return l.lanes = u, l;
        if (u = a !== null, t = t !== null && t.memoizedState !== null, u) {
          a = l.child, e = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (e = a.alternate.memoizedState.cachePool.pool);
          var n = null;
          a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== e && (a.flags |= 2048);
        }
        return u !== t && u && (l.child.flags |= 8192), jn(l, l.updateQueue), zt(l), null;
      case 4:
        return wt(), t === null && Oi(l.stateNode.containerInfo), zt(l), null;
      case 10:
        return Kl(l.type), zt(l), null;
      case 19:
        if (N(xt), e = l.memoizedState, e === null) return zt(l), null;
        if (a = (l.flags & 128) !== 0, n = e.rendering, n === null)
          if (a) ze(e, !1);
          else {
            if (Ot !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = l.child; t !== null; ) {
                if (n = xn(t), n !== null) {
                  for (l.flags |= 128, ze(e, !1), t = n.updateQueue, l.updateQueue = t, jn(l, t), l.subtreeFlags = 0, t = u, u = l.child; u !== null; )
                    gs(u, t), u = u.sibling;
                  return q(
                    xt,
                    xt.current & 1 | 2
                  ), l.child;
                }
                t = t.sibling;
              }
            e.tail !== null && Rl() > Zn && (l.flags |= 128, a = !0, ze(e, !1), l.lanes = 4194304);
          }
        else {
          if (!a)
            if (t = xn(n), t !== null) {
              if (l.flags |= 128, a = !0, t = t.updateQueue, l.updateQueue = t, jn(l, t), ze(e, !0), e.tail === null && e.tailMode === "hidden" && !n.alternate && !dt)
                return zt(l), null;
            } else
              2 * Rl() - e.renderingStartTime > Zn && u !== 536870912 && (l.flags |= 128, a = !0, ze(e, !1), l.lanes = 4194304);
          e.isBackwards ? (n.sibling = l.child, l.child = n) : (t = e.last, t !== null ? t.sibling = n : l.child = n, e.last = n);
        }
        return e.tail !== null ? (l = e.tail, e.rendering = l, e.tail = l.sibling, e.renderingStartTime = Rl(), l.sibling = null, t = xt.current, q(xt, a ? t & 1 | 2 : t & 1), l) : (zt(l), null);
      case 22:
      case 23:
        return Jl(l), Mf(), a = l.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (l.flags |= 8192) : a && (l.flags |= 8192), a ? (u & 536870912) !== 0 && (l.flags & 128) === 0 && (zt(l), l.subtreeFlags & 6 && (l.flags |= 8192)) : zt(l), u = l.updateQueue, u !== null && jn(l, u.retryQueue), u = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (u = t.memoizedState.cachePool.pool), a = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), a !== u && (l.flags |= 2048), t !== null && N(Zu), null;
      case 24:
        return u = null, t !== null && (u = t.memoizedState.cache), l.memoizedState.cache !== u && (l.flags |= 2048), Kl(qt), zt(l), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, l.tag));
  }
  function Uy(t, l) {
    switch (yf(l), l.tag) {
      case 1:
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 3:
        return Kl(qt), wt(), t = l.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (l.flags = t & -65537 | 128, l) : null;
      case 26:
      case 27:
      case 5:
        return Gl(l), null;
      case 13:
        if (Jl(l), t = l.memoizedState, t !== null && t.dehydrated !== null) {
          if (l.alternate === null)
            throw Error(s(340));
          ie();
        }
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 19:
        return N(xt), null;
      case 4:
        return wt(), null;
      case 10:
        return Kl(l.type), null;
      case 22:
      case 23:
        return Jl(l), Mf(), t !== null && N(Zu), t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 24:
        return Kl(qt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Ko(t, l) {
    switch (yf(l), l.tag) {
      case 3:
        Kl(qt), wt();
        break;
      case 26:
      case 27:
      case 5:
        Gl(l);
        break;
      case 4:
        wt();
        break;
      case 13:
        Jl(l);
        break;
      case 19:
        N(xt);
        break;
      case 10:
        Kl(l.type);
        break;
      case 22:
      case 23:
        Jl(l), Mf(), t !== null && N(Zu);
        break;
      case 24:
        Kl(qt);
    }
  }
  function _e(t, l) {
    try {
      var u = l.updateQueue, a = u !== null ? u.lastEffect : null;
      if (a !== null) {
        var e = a.next;
        u = e;
        do {
          if ((u.tag & t) === t) {
            a = void 0;
            var n = u.create, f = u.inst;
            a = n(), f.destroy = a;
          }
          u = u.next;
        } while (u !== e);
      }
    } catch (i) {
      bt(l, l.return, i);
    }
  }
  function yu(t, l, u) {
    try {
      var a = l.updateQueue, e = a !== null ? a.lastEffect : null;
      if (e !== null) {
        var n = e.next;
        a = n;
        do {
          if ((a.tag & t) === t) {
            var f = a.inst, i = f.destroy;
            if (i !== void 0) {
              f.destroy = void 0, e = l;
              var d = u, g = i;
              try {
                g();
              } catch (T) {
                bt(
                  e,
                  d,
                  T
                );
              }
            }
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (T) {
      bt(l, l.return, T);
    }
  }
  function wo(t) {
    var l = t.updateQueue;
    if (l !== null) {
      var u = t.stateNode;
      try {
        Hs(l, u);
      } catch (a) {
        bt(t, t.return, a);
      }
    }
  }
  function Jo(t, l, u) {
    u.props = Lu(
      t.type,
      t.memoizedProps
    ), u.state = t.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (a) {
      bt(t, l, a);
    }
  }
  function Oe(t, l) {
    try {
      var u = t.ref;
      if (u !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof u == "function" ? t.refCleanup = u(a) : u.current = a;
      }
    } catch (e) {
      bt(t, l, e);
    }
  }
  function Hl(t, l) {
    var u = t.ref, a = t.refCleanup;
    if (u !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (e) {
          bt(t, l, e);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (e) {
          bt(t, l, e);
        }
      else u.current = null;
  }
  function $o(t) {
    var l = t.type, u = t.memoizedProps, a = t.stateNode;
    try {
      t: switch (l) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && a.focus();
          break t;
        case "img":
          u.src ? a.src = u.src : u.srcSet && (a.srcset = u.srcSet);
      }
    } catch (e) {
      bt(t, t.return, e);
    }
  }
  function ui(t, l, u) {
    try {
      var a = t.stateNode;
      Fy(a, t.type, u, l), a[It] = l;
    } catch (e) {
      bt(t, t.return, e);
    }
  }
  function ko(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Au(t.type) || t.tag === 4;
  }
  function ai(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || ko(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Au(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function ei(t, l, u) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, l ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(t, l) : (l = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, l.appendChild(t), u = u._reactRootContainer, u != null || l.onclick !== null || (l.onclick = Fn));
    else if (a !== 4 && (a === 27 && Au(t.type) && (u = t.stateNode, l = null), t = t.child, t !== null))
      for (ei(t, l, u), t = t.sibling; t !== null; )
        ei(t, l, u), t = t.sibling;
  }
  function Xn(t, l, u) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, l ? u.insertBefore(t, l) : u.appendChild(t);
    else if (a !== 4 && (a === 27 && Au(t.type) && (u = t.stateNode), t = t.child, t !== null))
      for (Xn(t, l, u), t = t.sibling; t !== null; )
        Xn(t, l, u), t = t.sibling;
  }
  function Wo(t) {
    var l = t.stateNode, u = t.memoizedProps;
    try {
      for (var a = t.type, e = l.attributes; e.length; )
        l.removeAttributeNode(e[0]);
      Kt(l, a, u), l[Jt] = t, l[It] = u;
    } catch (n) {
      bt(t, t.return, n);
    }
  }
  var Wl = !1, Mt = !1, ni = !1, Fo = typeof WeakSet == "function" ? WeakSet : Set, Xt = null;
  function Ny(t, l) {
    if (t = t.containerInfo, Ri = ec, t = fs(t), uf(t)) {
      if ("selectionStart" in t)
        var u = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          u = (u = t.ownerDocument) && u.defaultView || window;
          var a = u.getSelection && u.getSelection();
          if (a && a.rangeCount !== 0) {
            u = a.anchorNode;
            var e = a.anchorOffset, n = a.focusNode;
            a = a.focusOffset;
            try {
              u.nodeType, n.nodeType;
            } catch {
              u = null;
              break t;
            }
            var f = 0, i = -1, d = -1, g = 0, T = 0, _ = t, S = null;
            l: for (; ; ) {
              for (var p; _ !== u || e !== 0 && _.nodeType !== 3 || (i = f + e), _ !== n || a !== 0 && _.nodeType !== 3 || (d = f + a), _.nodeType === 3 && (f += _.nodeValue.length), (p = _.firstChild) !== null; )
                S = _, _ = p;
              for (; ; ) {
                if (_ === t) break l;
                if (S === u && ++g === e && (i = f), S === n && ++T === a && (d = f), (p = _.nextSibling) !== null) break;
                _ = S, S = _.parentNode;
              }
              _ = p;
            }
            u = i === -1 || d === -1 ? null : { start: i, end: d };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (Ui = { focusedElem: t, selectionRange: u }, ec = !1, Xt = l; Xt !== null; )
      if (l = Xt, t = l.child, (l.subtreeFlags & 1024) !== 0 && t !== null)
        t.return = l, Xt = t;
      else
        for (; Xt !== null; ) {
          switch (l = Xt, n = l.alternate, t = l.flags, l.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && n !== null) {
                t = void 0, u = l, e = n.memoizedProps, n = n.memoizedState, a = u.stateNode;
                try {
                  var $ = Lu(
                    u.type,
                    e,
                    u.elementType === u.type
                  );
                  t = a.getSnapshotBeforeUpdate(
                    $,
                    n
                  ), a.__reactInternalSnapshotBeforeUpdate = t;
                } catch (L) {
                  bt(
                    u,
                    u.return,
                    L
                  );
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (t = l.stateNode.containerInfo, u = t.nodeType, u === 9)
                  qi(t);
                else if (u === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      qi(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(s(163));
          }
          if (t = l.sibling, t !== null) {
            t.return = l.return, Xt = t;
            break;
          }
          Xt = l.return;
        }
  }
  function Io(t, l, u) {
    var a = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        vu(t, u), a & 4 && _e(5, u);
        break;
      case 1:
        if (vu(t, u), a & 4)
          if (t = u.stateNode, l === null)
            try {
              t.componentDidMount();
            } catch (f) {
              bt(u, u.return, f);
            }
          else {
            var e = Lu(
              u.type,
              l.memoizedProps
            );
            l = l.memoizedState;
            try {
              t.componentDidUpdate(
                e,
                l,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (f) {
              bt(
                u,
                u.return,
                f
              );
            }
          }
        a & 64 && wo(u), a & 512 && Oe(u, u.return);
        break;
      case 3:
        if (vu(t, u), a & 64 && (t = u.updateQueue, t !== null)) {
          if (l = null, u.child !== null)
            switch (u.child.tag) {
              case 27:
              case 5:
                l = u.child.stateNode;
                break;
              case 1:
                l = u.child.stateNode;
            }
          try {
            Hs(t, l);
          } catch (f) {
            bt(u, u.return, f);
          }
        }
        break;
      case 27:
        l === null && a & 4 && Wo(u);
      case 26:
      case 5:
        vu(t, u), l === null && a & 4 && $o(u), a & 512 && Oe(u, u.return);
        break;
      case 12:
        vu(t, u);
        break;
      case 13:
        vu(t, u), a & 4 && l0(t, u), a & 64 && (t = u.memoizedState, t !== null && (t = t.dehydrated, t !== null && (u = Xy.bind(
          null,
          u
        ), e1(t, u))));
        break;
      case 22:
        if (a = u.memoizedState !== null || Wl, !a) {
          l = l !== null && l.memoizedState !== null || Mt, e = Wl;
          var n = Mt;
          Wl = a, (Mt = l) && !n ? mu(
            t,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : vu(t, u), Wl = e, Mt = n;
        }
        break;
      case 30:
        break;
      default:
        vu(t, u);
    }
  }
  function Po(t) {
    var l = t.alternate;
    l !== null && (t.alternate = null, Po(l)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (l = t.stateNode, l !== null && Cc(l)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Tt = null, ll = !1;
  function Fl(t, l, u) {
    for (u = u.child; u !== null; )
      t0(t, l, u), u = u.sibling;
  }
  function t0(t, l, u) {
    if (el && typeof el.onCommitFiberUnmount == "function")
      try {
        el.onCommitFiberUnmount(Ja, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        Mt || Hl(u, l), Fl(
          t,
          l,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        Mt || Hl(u, l);
        var a = Tt, e = ll;
        Au(u.type) && (Tt = u.stateNode, ll = !1), Fl(
          t,
          l,
          u
        ), Ye(u.stateNode), Tt = a, ll = e;
        break;
      case 5:
        Mt || Hl(u, l);
      case 6:
        if (a = Tt, e = ll, Tt = null, Fl(
          t,
          l,
          u
        ), Tt = a, ll = e, Tt !== null)
          if (ll)
            try {
              (Tt.nodeType === 9 ? Tt.body : Tt.nodeName === "HTML" ? Tt.ownerDocument.body : Tt).removeChild(u.stateNode);
            } catch (n) {
              bt(
                u,
                l,
                n
              );
            }
          else
            try {
              Tt.removeChild(u.stateNode);
            } catch (n) {
              bt(
                u,
                l,
                n
              );
            }
        break;
      case 18:
        Tt !== null && (ll ? (t = Tt, Z0(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          u.stateNode
        ), Ve(t)) : Z0(Tt, u.stateNode));
        break;
      case 4:
        a = Tt, e = ll, Tt = u.stateNode.containerInfo, ll = !0, Fl(
          t,
          l,
          u
        ), Tt = a, ll = e;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Mt || yu(2, u, l), Mt || yu(4, u, l), Fl(
          t,
          l,
          u
        );
        break;
      case 1:
        Mt || (Hl(u, l), a = u.stateNode, typeof a.componentWillUnmount == "function" && Jo(
          u,
          l,
          a
        )), Fl(
          t,
          l,
          u
        );
        break;
      case 21:
        Fl(
          t,
          l,
          u
        );
        break;
      case 22:
        Mt = (a = Mt) || u.memoizedState !== null, Fl(
          t,
          l,
          u
        ), Mt = a;
        break;
      default:
        Fl(
          t,
          l,
          u
        );
    }
  }
  function l0(t, l) {
    if (l.memoizedState === null && (t = l.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        Ve(t);
      } catch (u) {
        bt(l, l.return, u);
      }
  }
  function Hy(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var l = t.stateNode;
        return l === null && (l = t.stateNode = new Fo()), l;
      case 22:
        return t = t.stateNode, l = t._retryCache, l === null && (l = t._retryCache = new Fo()), l;
      default:
        throw Error(s(435, t.tag));
    }
  }
  function ci(t, l) {
    var u = Hy(t);
    l.forEach(function(a) {
      var e = Qy.bind(null, t, a);
      u.has(a) || (u.add(a), a.then(e, e));
    });
  }
  function il(t, l) {
    var u = l.deletions;
    if (u !== null)
      for (var a = 0; a < u.length; a++) {
        var e = u[a], n = t, f = l, i = f;
        t: for (; i !== null; ) {
          switch (i.tag) {
            case 27:
              if (Au(i.type)) {
                Tt = i.stateNode, ll = !1;
                break t;
              }
              break;
            case 5:
              Tt = i.stateNode, ll = !1;
              break t;
            case 3:
            case 4:
              Tt = i.stateNode.containerInfo, ll = !0;
              break t;
          }
          i = i.return;
        }
        if (Tt === null) throw Error(s(160));
        t0(n, f, e), Tt = null, ll = !1, n = e.alternate, n !== null && (n.return = null), e.return = null;
      }
    if (l.subtreeFlags & 13878)
      for (l = l.child; l !== null; )
        u0(l, t), l = l.sibling;
  }
  var Ol = null;
  function u0(t, l) {
    var u = t.alternate, a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        il(l, t), rl(t), a & 4 && (yu(3, t, t.return), _e(3, t), yu(5, t, t.return));
        break;
      case 1:
        il(l, t), rl(t), a & 512 && (Mt || u === null || Hl(u, u.return)), a & 64 && Wl && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (u = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = u === null ? a : u.concat(a))));
        break;
      case 26:
        var e = Ol;
        if (il(l, t), rl(t), a & 512 && (Mt || u === null || Hl(u, u.return)), a & 4) {
          var n = u !== null ? u.memoizedState : null;
          if (a = t.memoizedState, u === null)
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  a = t.type, u = t.memoizedProps, e = e.ownerDocument || e;
                  l: switch (a) {
                    case "title":
                      n = e.getElementsByTagName("title")[0], (!n || n[Wa] || n[Jt] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = e.createElement(a), e.head.insertBefore(
                        n,
                        e.querySelector("head > title")
                      )), Kt(n, a, u), n[Jt] = t, Gt(n), a = n;
                      break t;
                    case "link":
                      var f = W0(
                        "link",
                        "href",
                        e
                      ).get(a + (u.href || ""));
                      if (f) {
                        for (var i = 0; i < f.length; i++)
                          if (n = f[i], n.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && n.getAttribute("rel") === (u.rel == null ? null : u.rel) && n.getAttribute("title") === (u.title == null ? null : u.title) && n.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                            f.splice(i, 1);
                            break l;
                          }
                      }
                      n = e.createElement(a), Kt(n, a, u), e.head.appendChild(n);
                      break;
                    case "meta":
                      if (f = W0(
                        "meta",
                        "content",
                        e
                      ).get(a + (u.content || ""))) {
                        for (i = 0; i < f.length; i++)
                          if (n = f[i], n.getAttribute("content") === (u.content == null ? null : "" + u.content) && n.getAttribute("name") === (u.name == null ? null : u.name) && n.getAttribute("property") === (u.property == null ? null : u.property) && n.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && n.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                            f.splice(i, 1);
                            break l;
                          }
                      }
                      n = e.createElement(a), Kt(n, a, u), e.head.appendChild(n);
                      break;
                    default:
                      throw Error(s(468, a));
                  }
                  n[Jt] = t, Gt(n), a = n;
                }
                t.stateNode = a;
              } else
                F0(
                  e,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = k0(
                e,
                a,
                t.memoizedProps
              );
          else
            n !== a ? (n === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : n.count--, a === null ? F0(
              e,
              t.type,
              t.stateNode
            ) : k0(
              e,
              a,
              t.memoizedProps
            )) : a === null && t.stateNode !== null && ui(
              t,
              t.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        il(l, t), rl(t), a & 512 && (Mt || u === null || Hl(u, u.return)), u !== null && a & 4 && ui(
          t,
          t.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (il(l, t), rl(t), a & 512 && (Mt || u === null || Hl(u, u.return)), t.flags & 32) {
          e = t.stateNode;
          try {
            ca(e, "");
          } catch (p) {
            bt(t, t.return, p);
          }
        }
        a & 4 && t.stateNode != null && (e = t.memoizedProps, ui(
          t,
          e,
          u !== null ? u.memoizedProps : e
        )), a & 1024 && (ni = !0);
        break;
      case 6:
        if (il(l, t), rl(t), a & 4) {
          if (t.stateNode === null)
            throw Error(s(162));
          a = t.memoizedProps, u = t.stateNode;
          try {
            u.nodeValue = a;
          } catch (p) {
            bt(t, t.return, p);
          }
        }
        break;
      case 3:
        if (lc = null, e = Ol, Ol = Pn(l.containerInfo), il(l, t), Ol = e, rl(t), a & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            Ve(l.containerInfo);
          } catch (p) {
            bt(t, t.return, p);
          }
        ni && (ni = !1, a0(t));
        break;
      case 4:
        a = Ol, Ol = Pn(
          t.stateNode.containerInfo
        ), il(l, t), rl(t), Ol = a;
        break;
      case 12:
        il(l, t), rl(t);
        break;
      case 13:
        il(l, t), rl(t), t.child.flags & 8192 && t.memoizedState !== null != (u !== null && u.memoizedState !== null) && (di = Rl()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, ci(t, a)));
        break;
      case 22:
        e = t.memoizedState !== null;
        var d = u !== null && u.memoizedState !== null, g = Wl, T = Mt;
        if (Wl = g || e, Mt = T || d, il(l, t), Mt = T, Wl = g, rl(t), a & 8192)
          t: for (l = t.stateNode, l._visibility = e ? l._visibility & -2 : l._visibility | 1, e && (u === null || d || Wl || Mt || Ku(t)), u = null, l = t; ; ) {
            if (l.tag === 5 || l.tag === 26) {
              if (u === null) {
                d = u = l;
                try {
                  if (n = d.stateNode, e)
                    f = n.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                  else {
                    i = d.stateNode;
                    var _ = d.memoizedProps.style, S = _ != null && _.hasOwnProperty("display") ? _.display : null;
                    i.style.display = S == null || typeof S == "boolean" ? "" : ("" + S).trim();
                  }
                } catch (p) {
                  bt(d, d.return, p);
                }
              }
            } else if (l.tag === 6) {
              if (u === null) {
                d = l;
                try {
                  d.stateNode.nodeValue = e ? "" : d.memoizedProps;
                } catch (p) {
                  bt(d, d.return, p);
                }
              }
            } else if ((l.tag !== 22 && l.tag !== 23 || l.memoizedState === null || l === t) && l.child !== null) {
              l.child.return = l, l = l.child;
              continue;
            }
            if (l === t) break t;
            for (; l.sibling === null; ) {
              if (l.return === null || l.return === t) break t;
              u === l && (u = null), l = l.return;
            }
            u === l && (u = null), l.sibling.return = l.return, l = l.sibling;
          }
        a & 4 && (a = t.updateQueue, a !== null && (u = a.retryQueue, u !== null && (a.retryQueue = null, ci(t, u))));
        break;
      case 19:
        il(l, t), rl(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, ci(t, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        il(l, t), rl(t);
    }
  }
  function rl(t) {
    var l = t.flags;
    if (l & 2) {
      try {
        for (var u, a = t.return; a !== null; ) {
          if (ko(a)) {
            u = a;
            break;
          }
          a = a.return;
        }
        if (u == null) throw Error(s(160));
        switch (u.tag) {
          case 27:
            var e = u.stateNode, n = ai(t);
            Xn(t, n, e);
            break;
          case 5:
            var f = u.stateNode;
            u.flags & 32 && (ca(f, ""), u.flags &= -33);
            var i = ai(t);
            Xn(t, i, f);
            break;
          case 3:
          case 4:
            var d = u.stateNode.containerInfo, g = ai(t);
            ei(
              t,
              g,
              d
            );
            break;
          default:
            throw Error(s(161));
        }
      } catch (T) {
        bt(t, t.return, T);
      }
      t.flags &= -3;
    }
    l & 4096 && (t.flags &= -4097);
  }
  function a0(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var l = t;
        a0(l), l.tag === 5 && l.flags & 1024 && l.stateNode.reset(), t = t.sibling;
      }
  }
  function vu(t, l) {
    if (l.subtreeFlags & 8772)
      for (l = l.child; l !== null; )
        Io(t, l.alternate, l), l = l.sibling;
  }
  function Ku(t) {
    for (t = t.child; t !== null; ) {
      var l = t;
      switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          yu(4, l, l.return), Ku(l);
          break;
        case 1:
          Hl(l, l.return);
          var u = l.stateNode;
          typeof u.componentWillUnmount == "function" && Jo(
            l,
            l.return,
            u
          ), Ku(l);
          break;
        case 27:
          Ye(l.stateNode);
        case 26:
        case 5:
          Hl(l, l.return), Ku(l);
          break;
        case 22:
          l.memoizedState === null && Ku(l);
          break;
        case 30:
          Ku(l);
          break;
        default:
          Ku(l);
      }
      t = t.sibling;
    }
  }
  function mu(t, l, u) {
    for (u = u && (l.subtreeFlags & 8772) !== 0, l = l.child; l !== null; ) {
      var a = l.alternate, e = t, n = l, f = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          mu(
            e,
            n,
            u
          ), _e(4, n);
          break;
        case 1:
          if (mu(
            e,
            n,
            u
          ), a = n, e = a.stateNode, typeof e.componentDidMount == "function")
            try {
              e.componentDidMount();
            } catch (g) {
              bt(a, a.return, g);
            }
          if (a = n, e = a.updateQueue, e !== null) {
            var i = a.stateNode;
            try {
              var d = e.shared.hiddenCallbacks;
              if (d !== null)
                for (e.shared.hiddenCallbacks = null, e = 0; e < d.length; e++)
                  Ns(d[e], i);
            } catch (g) {
              bt(a, a.return, g);
            }
          }
          u && f & 64 && wo(n), Oe(n, n.return);
          break;
        case 27:
          Wo(n);
        case 26:
        case 5:
          mu(
            e,
            n,
            u
          ), u && a === null && f & 4 && $o(n), Oe(n, n.return);
          break;
        case 12:
          mu(
            e,
            n,
            u
          );
          break;
        case 13:
          mu(
            e,
            n,
            u
          ), u && f & 4 && l0(e, n);
          break;
        case 22:
          n.memoizedState === null && mu(
            e,
            n,
            u
          ), Oe(n, n.return);
          break;
        case 30:
          break;
        default:
          mu(
            e,
            n,
            u
          );
      }
      l = l.sibling;
    }
  }
  function fi(t, l) {
    var u = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (u = t.memoizedState.cachePool.pool), t = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (t = l.memoizedState.cachePool.pool), t !== u && (t != null && t.refCount++, u != null && oe(u));
  }
  function ii(t, l) {
    t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && oe(t));
  }
  function ql(t, l, u, a) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        e0(
          t,
          l,
          u,
          a
        ), l = l.sibling;
  }
  function e0(t, l, u, a) {
    var e = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        ql(
          t,
          l,
          u,
          a
        ), e & 2048 && _e(9, l);
        break;
      case 1:
        ql(
          t,
          l,
          u,
          a
        );
        break;
      case 3:
        ql(
          t,
          l,
          u,
          a
        ), e & 2048 && (t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && oe(t)));
        break;
      case 12:
        if (e & 2048) {
          ql(
            t,
            l,
            u,
            a
          ), t = l.stateNode;
          try {
            var n = l.memoizedProps, f = n.id, i = n.onPostCommit;
            typeof i == "function" && i(
              f,
              l.alternate === null ? "mount" : "update",
              t.passiveEffectDuration,
              -0
            );
          } catch (d) {
            bt(l, l.return, d);
          }
        } else
          ql(
            t,
            l,
            u,
            a
          );
        break;
      case 13:
        ql(
          t,
          l,
          u,
          a
        );
        break;
      case 23:
        break;
      case 22:
        n = l.stateNode, f = l.alternate, l.memoizedState !== null ? n._visibility & 2 ? ql(
          t,
          l,
          u,
          a
        ) : De(t, l) : n._visibility & 2 ? ql(
          t,
          l,
          u,
          a
        ) : (n._visibility |= 2, _a(
          t,
          l,
          u,
          a,
          (l.subtreeFlags & 10256) !== 0
        )), e & 2048 && fi(f, l);
        break;
      case 24:
        ql(
          t,
          l,
          u,
          a
        ), e & 2048 && ii(l.alternate, l);
        break;
      default:
        ql(
          t,
          l,
          u,
          a
        );
    }
  }
  function _a(t, l, u, a, e) {
    for (e = e && (l.subtreeFlags & 10256) !== 0, l = l.child; l !== null; ) {
      var n = t, f = l, i = u, d = a, g = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          _a(
            n,
            f,
            i,
            d,
            e
          ), _e(8, f);
          break;
        case 23:
          break;
        case 22:
          var T = f.stateNode;
          f.memoizedState !== null ? T._visibility & 2 ? _a(
            n,
            f,
            i,
            d,
            e
          ) : De(
            n,
            f
          ) : (T._visibility |= 2, _a(
            n,
            f,
            i,
            d,
            e
          )), e && g & 2048 && fi(
            f.alternate,
            f
          );
          break;
        case 24:
          _a(
            n,
            f,
            i,
            d,
            e
          ), e && g & 2048 && ii(f.alternate, f);
          break;
        default:
          _a(
            n,
            f,
            i,
            d,
            e
          );
      }
      l = l.sibling;
    }
  }
  function De(t, l) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) {
        var u = t, a = l, e = a.flags;
        switch (a.tag) {
          case 22:
            De(u, a), e & 2048 && fi(
              a.alternate,
              a
            );
            break;
          case 24:
            De(u, a), e & 2048 && ii(a.alternate, a);
            break;
          default:
            De(u, a);
        }
        l = l.sibling;
      }
  }
  var Me = 8192;
  function Oa(t) {
    if (t.subtreeFlags & Me)
      for (t = t.child; t !== null; )
        n0(t), t = t.sibling;
  }
  function n0(t) {
    switch (t.tag) {
      case 26:
        Oa(t), t.flags & Me && t.memoizedState !== null && g1(
          Ol,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        Oa(t);
        break;
      case 3:
      case 4:
        var l = Ol;
        Ol = Pn(t.stateNode.containerInfo), Oa(t), Ol = l;
        break;
      case 22:
        t.memoizedState === null && (l = t.alternate, l !== null && l.memoizedState !== null ? (l = Me, Me = 16777216, Oa(t), Me = l) : Oa(t));
        break;
      default:
        Oa(t);
    }
  }
  function c0(t) {
    var l = t.alternate;
    if (l !== null && (t = l.child, t !== null)) {
      l.child = null;
      do
        l = t.sibling, t.sibling = null, t = l;
      while (t !== null);
    }
  }
  function Re(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var u = 0; u < l.length; u++) {
          var a = l[u];
          Xt = a, i0(
            a,
            t
          );
        }
      c0(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        f0(t), t = t.sibling;
  }
  function f0(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Re(t), t.flags & 2048 && yu(9, t, t.return);
        break;
      case 3:
        Re(t);
        break;
      case 12:
        Re(t);
        break;
      case 22:
        var l = t.stateNode;
        t.memoizedState !== null && l._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (l._visibility &= -3, Qn(t)) : Re(t);
        break;
      default:
        Re(t);
    }
  }
  function Qn(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var u = 0; u < l.length; u++) {
          var a = l[u];
          Xt = a, i0(
            a,
            t
          );
        }
      c0(t);
    }
    for (t = t.child; t !== null; ) {
      switch (l = t, l.tag) {
        case 0:
        case 11:
        case 15:
          yu(8, l, l.return), Qn(l);
          break;
        case 22:
          u = l.stateNode, u._visibility & 2 && (u._visibility &= -3, Qn(l));
          break;
        default:
          Qn(l);
      }
      t = t.sibling;
    }
  }
  function i0(t, l) {
    for (; Xt !== null; ) {
      var u = Xt;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          yu(8, u, l);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var a = u.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          oe(u.memoizedState.cache);
      }
      if (a = u.child, a !== null) a.return = u, Xt = a;
      else
        t: for (u = t; Xt !== null; ) {
          a = Xt;
          var e = a.sibling, n = a.return;
          if (Po(a), a === u) {
            Xt = null;
            break t;
          }
          if (e !== null) {
            e.return = n, Xt = e;
            break t;
          }
          Xt = n;
        }
    }
  }
  var qy = {
    getCacheForType: function(t) {
      var l = $t(qt), u = l.data.get(t);
      return u === void 0 && (u = t(), l.data.set(t, u)), u;
    }
  }, xy = typeof WeakMap == "function" ? WeakMap : Map, vt = 0, Et = null, ft = null, st = 0, mt = 0, sl = null, gu = !1, Da = !1, ri = !1, Il = 0, Ot = 0, Su = 0, wu = 0, si = 0, El = 0, Ma = 0, Ue = null, ul = null, oi = !1, di = 0, Zn = 1 / 0, Vn = null, pu = null, Lt = 0, bu = null, Ra = null, Ua = 0, hi = 0, yi = null, r0 = null, Ne = 0, vi = null;
  function ol() {
    if ((vt & 2) !== 0 && st !== 0)
      return st & -st;
    if (A.T !== null) {
      var t = ga;
      return t !== 0 ? t : Ai();
    }
    return zr();
  }
  function s0() {
    El === 0 && (El = (st & 536870912) === 0 || dt ? br() : 536870912);
    var t = bl.current;
    return t !== null && (t.flags |= 32), El;
  }
  function dl(t, l, u) {
    (t === Et && (mt === 2 || mt === 9) || t.cancelPendingCommit !== null) && (Na(t, 0), Eu(
      t,
      st,
      El,
      !1
    )), ka(t, u), ((vt & 2) === 0 || t !== Et) && (t === Et && ((vt & 2) === 0 && (wu |= u), Ot === 4 && Eu(
      t,
      st,
      El,
      !1
    )), xl(t));
  }
  function o0(t, l, u) {
    if ((vt & 6) !== 0) throw Error(s(327));
    var a = !u && (l & 124) === 0 && (l & t.expiredLanes) === 0 || $a(t, l), e = a ? Cy(t, l) : Si(t, l, !0), n = a;
    do {
      if (e === 0) {
        Da && !a && Eu(t, l, 0, !1);
        break;
      } else {
        if (u = t.current.alternate, n && !Yy(u)) {
          e = Si(t, l, !1), n = !1;
          continue;
        }
        if (e === 2) {
          if (n = l, t.errorRecoveryDisabledLanes & n)
            var f = 0;
          else
            f = t.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
          if (f !== 0) {
            l = f;
            t: {
              var i = t;
              e = Ue;
              var d = i.current.memoizedState.isDehydrated;
              if (d && (Na(i, f).flags |= 256), f = Si(
                i,
                f,
                !1
              ), f !== 2) {
                if (ri && !d) {
                  i.errorRecoveryDisabledLanes |= n, wu |= n, e = 4;
                  break t;
                }
                n = ul, ul = e, n !== null && (ul === null ? ul = n : ul.push.apply(
                  ul,
                  n
                ));
              }
              e = f;
            }
            if (n = !1, e !== 2) continue;
          }
        }
        if (e === 1) {
          Na(t, 0), Eu(t, l, 0, !0);
          break;
        }
        t: {
          switch (a = t, n = e, n) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((l & 4194048) !== l) break;
            case 6:
              Eu(
                a,
                l,
                El,
                !gu
              );
              break t;
            case 2:
              ul = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((l & 62914560) === l && (e = di + 300 - Rl(), 10 < e)) {
            if (Eu(
              a,
              l,
              El,
              !gu
            ), Pe(a, 0, !0) !== 0) break t;
            a.timeoutHandle = X0(
              d0.bind(
                null,
                a,
                u,
                ul,
                Vn,
                oi,
                l,
                El,
                wu,
                Ma,
                gu,
                n,
                2,
                -0,
                0
              ),
              e
            );
            break t;
          }
          d0(
            a,
            u,
            ul,
            Vn,
            oi,
            l,
            El,
            wu,
            Ma,
            gu,
            n,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    xl(t);
  }
  function d0(t, l, u, a, e, n, f, i, d, g, T, _, S, p) {
    if (t.timeoutHandle = -1, _ = l.subtreeFlags, (_ & 8192 || (_ & 16785408) === 16785408) && (Ge = { stylesheets: null, count: 0, unsuspend: m1 }, n0(l), _ = S1(), _ !== null)) {
      t.cancelPendingCommit = _(
        p0.bind(
          null,
          t,
          l,
          n,
          u,
          a,
          e,
          f,
          i,
          d,
          T,
          1,
          S,
          p
        )
      ), Eu(t, n, f, !g);
      return;
    }
    p0(
      t,
      l,
      n,
      u,
      a,
      e,
      f,
      i,
      d
    );
  }
  function Yy(t) {
    for (var l = t; ; ) {
      var u = l.tag;
      if ((u === 0 || u === 11 || u === 15) && l.flags & 16384 && (u = l.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var a = 0; a < u.length; a++) {
          var e = u[a], n = e.getSnapshot;
          e = e.value;
          try {
            if (!cl(n(), e)) return !1;
          } catch {
            return !1;
          }
        }
      if (u = l.child, l.subtreeFlags & 16384 && u !== null)
        u.return = l, l = u;
      else {
        if (l === t) break;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t) return !0;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    }
    return !0;
  }
  function Eu(t, l, u, a) {
    l &= ~si, l &= ~wu, t.suspendedLanes |= l, t.pingedLanes &= ~l, a && (t.warmLanes |= l), a = t.expirationTimes;
    for (var e = l; 0 < e; ) {
      var n = 31 - nl(e), f = 1 << n;
      a[n] = -1, e &= ~f;
    }
    u !== 0 && Ar(t, u, l);
  }
  function Ln() {
    return (vt & 6) === 0 ? (He(0), !1) : !0;
  }
  function mi() {
    if (ft !== null) {
      if (mt === 0)
        var t = ft.return;
      else
        t = ft, Ll = Xu = null, qf(t), Ta = null, Ae = 0, t = ft;
      for (; t !== null; )
        Ko(t.alternate, t), t = t.return;
      ft = null;
    }
  }
  function Na(t, l) {
    var u = t.timeoutHandle;
    u !== -1 && (t.timeoutHandle = -1, Py(u)), u = t.cancelPendingCommit, u !== null && (t.cancelPendingCommit = null, u()), mi(), Et = t, ft = u = Ql(t.current, null), st = l, mt = 0, sl = null, gu = !1, Da = $a(t, l), ri = !1, Ma = El = si = wu = Su = Ot = 0, ul = Ue = null, oi = !1, (l & 8) !== 0 && (l |= l & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= l; 0 < a; ) {
        var e = 31 - nl(a), n = 1 << e;
        l |= t[e], a &= ~n;
      }
    return Il = l, dn(), u;
  }
  function h0(t, l) {
    at = null, A.H = Nn, l === he || l === En ? (l = Rs(), mt = 3) : l === Os ? (l = Rs(), mt = 4) : mt = l === No ? 8 : l !== null && typeof l == "object" && typeof l.then == "function" ? 6 : 1, sl = l, ft === null && (Ot = 1, Bn(
      t,
      ml(l, t.current)
    ));
  }
  function y0() {
    var t = A.H;
    return A.H = Nn, t === null ? Nn : t;
  }
  function v0() {
    var t = A.A;
    return A.A = qy, t;
  }
  function gi() {
    Ot = 4, gu || (st & 4194048) !== st && bl.current !== null || (Da = !0), (Su & 134217727) === 0 && (wu & 134217727) === 0 || Et === null || Eu(
      Et,
      st,
      El,
      !1
    );
  }
  function Si(t, l, u) {
    var a = vt;
    vt |= 2;
    var e = y0(), n = v0();
    (Et !== t || st !== l) && (Vn = null, Na(t, l)), l = !1;
    var f = Ot;
    t: do
      try {
        if (mt !== 0 && ft !== null) {
          var i = ft, d = sl;
          switch (mt) {
            case 8:
              mi(), f = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              bl.current === null && (l = !0);
              var g = mt;
              if (mt = 0, sl = null, Ha(t, i, d, g), u && Da) {
                f = 0;
                break t;
              }
              break;
            default:
              g = mt, mt = 0, sl = null, Ha(t, i, d, g);
          }
        }
        By(), f = Ot;
        break;
      } catch (T) {
        h0(t, T);
      }
    while (!0);
    return l && t.shellSuspendCounter++, Ll = Xu = null, vt = a, A.H = e, A.A = n, ft === null && (Et = null, st = 0, dn()), f;
  }
  function By() {
    for (; ft !== null; ) m0(ft);
  }
  function Cy(t, l) {
    var u = vt;
    vt |= 2;
    var a = y0(), e = v0();
    Et !== t || st !== l ? (Vn = null, Zn = Rl() + 500, Na(t, l)) : Da = $a(
      t,
      l
    );
    t: do
      try {
        if (mt !== 0 && ft !== null) {
          l = ft;
          var n = sl;
          l: switch (mt) {
            case 1:
              mt = 0, sl = null, Ha(t, l, n, 1);
              break;
            case 2:
            case 9:
              if (Ds(n)) {
                mt = 0, sl = null, g0(l);
                break;
              }
              l = function() {
                mt !== 2 && mt !== 9 || Et !== t || (mt = 7), xl(t);
              }, n.then(l, l);
              break t;
            case 3:
              mt = 7;
              break t;
            case 4:
              mt = 5;
              break t;
            case 7:
              Ds(n) ? (mt = 0, sl = null, g0(l)) : (mt = 0, sl = null, Ha(t, l, n, 7));
              break;
            case 5:
              var f = null;
              switch (ft.tag) {
                case 26:
                  f = ft.memoizedState;
                case 5:
                case 27:
                  var i = ft;
                  if (!f || I0(f)) {
                    mt = 0, sl = null;
                    var d = i.sibling;
                    if (d !== null) ft = d;
                    else {
                      var g = i.return;
                      g !== null ? (ft = g, Kn(g)) : ft = null;
                    }
                    break l;
                  }
              }
              mt = 0, sl = null, Ha(t, l, n, 5);
              break;
            case 6:
              mt = 0, sl = null, Ha(t, l, n, 6);
              break;
            case 8:
              mi(), Ot = 6;
              break t;
            default:
              throw Error(s(462));
          }
        }
        Gy();
        break;
      } catch (T) {
        h0(t, T);
      }
    while (!0);
    return Ll = Xu = null, A.H = a, A.A = e, vt = u, ft !== null ? 0 : (Et = null, st = 0, dn(), Ot);
  }
  function Gy() {
    for (; ft !== null && !ch(); )
      m0(ft);
  }
  function m0(t) {
    var l = Vo(t.alternate, t, Il);
    t.memoizedProps = t.pendingProps, l === null ? Kn(t) : ft = l;
  }
  function g0(t) {
    var l = t, u = l.alternate;
    switch (l.tag) {
      case 15:
      case 0:
        l = Co(
          u,
          l,
          l.pendingProps,
          l.type,
          void 0,
          st
        );
        break;
      case 11:
        l = Co(
          u,
          l,
          l.pendingProps,
          l.type.render,
          l.ref,
          st
        );
        break;
      case 5:
        qf(l);
      default:
        Ko(u, l), l = ft = gs(l, Il), l = Vo(u, l, Il);
    }
    t.memoizedProps = t.pendingProps, l === null ? Kn(t) : ft = l;
  }
  function Ha(t, l, u, a) {
    Ll = Xu = null, qf(l), Ta = null, Ae = 0;
    var e = l.return;
    try {
      if (Dy(
        t,
        e,
        l,
        u,
        st
      )) {
        Ot = 1, Bn(
          t,
          ml(u, t.current)
        ), ft = null;
        return;
      }
    } catch (n) {
      if (e !== null) throw ft = e, n;
      Ot = 1, Bn(
        t,
        ml(u, t.current)
      ), ft = null;
      return;
    }
    l.flags & 32768 ? (dt || a === 1 ? t = !0 : Da || (st & 536870912) !== 0 ? t = !1 : (gu = t = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = bl.current, a !== null && a.tag === 13 && (a.flags |= 16384))), S0(l, t)) : Kn(l);
  }
  function Kn(t) {
    var l = t;
    do {
      if ((l.flags & 32768) !== 0) {
        S0(
          l,
          gu
        );
        return;
      }
      t = l.return;
      var u = Ry(
        l.alternate,
        l,
        Il
      );
      if (u !== null) {
        ft = u;
        return;
      }
      if (l = l.sibling, l !== null) {
        ft = l;
        return;
      }
      ft = l = t;
    } while (l !== null);
    Ot === 0 && (Ot = 5);
  }
  function S0(t, l) {
    do {
      var u = Uy(t.alternate, t);
      if (u !== null) {
        u.flags &= 32767, ft = u;
        return;
      }
      if (u = t.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !l && (t = t.sibling, t !== null)) {
        ft = t;
        return;
      }
      ft = t = u;
    } while (t !== null);
    Ot = 6, ft = null;
  }
  function p0(t, l, u, a, e, n, f, i, d) {
    t.cancelPendingCommit = null;
    do
      wn();
    while (Lt !== 0);
    if ((vt & 6) !== 0) throw Error(s(327));
    if (l !== null) {
      if (l === t.current) throw Error(s(177));
      if (n = l.lanes | l.childLanes, n |= ff, mh(
        t,
        u,
        n,
        f,
        i,
        d
      ), t === Et && (ft = Et = null, st = 0), Ra = l, bu = t, Ua = u, hi = n, yi = e, r0 = a, (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, Zy(We, function() {
        return z0(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), a = (l.flags & 13878) !== 0, (l.subtreeFlags & 13878) !== 0 || a) {
        a = A.T, A.T = null, e = H.p, H.p = 2, f = vt, vt |= 4;
        try {
          Ny(t, l, u);
        } finally {
          vt = f, H.p = e, A.T = a;
        }
      }
      Lt = 1, b0(), E0(), A0();
    }
  }
  function b0() {
    if (Lt === 1) {
      Lt = 0;
      var t = bu, l = Ra, u = (l.flags & 13878) !== 0;
      if ((l.subtreeFlags & 13878) !== 0 || u) {
        u = A.T, A.T = null;
        var a = H.p;
        H.p = 2;
        var e = vt;
        vt |= 4;
        try {
          u0(l, t);
          var n = Ui, f = fs(t.containerInfo), i = n.focusedElem, d = n.selectionRange;
          if (f !== i && i && i.ownerDocument && cs(
            i.ownerDocument.documentElement,
            i
          )) {
            if (d !== null && uf(i)) {
              var g = d.start, T = d.end;
              if (T === void 0 && (T = g), "selectionStart" in i)
                i.selectionStart = g, i.selectionEnd = Math.min(
                  T,
                  i.value.length
                );
              else {
                var _ = i.ownerDocument || document, S = _ && _.defaultView || window;
                if (S.getSelection) {
                  var p = S.getSelection(), $ = i.textContent.length, L = Math.min(d.start, $), pt = d.end === void 0 ? L : Math.min(d.end, $);
                  !p.extend && L > pt && (f = pt, pt = L, L = f);
                  var v = ns(
                    i,
                    L
                  ), y = ns(
                    i,
                    pt
                  );
                  if (v && y && (p.rangeCount !== 1 || p.anchorNode !== v.node || p.anchorOffset !== v.offset || p.focusNode !== y.node || p.focusOffset !== y.offset)) {
                    var m = _.createRange();
                    m.setStart(v.node, v.offset), p.removeAllRanges(), L > pt ? (p.addRange(m), p.extend(y.node, y.offset)) : (m.setEnd(y.node, y.offset), p.addRange(m));
                  }
                }
              }
            }
            for (_ = [], p = i; p = p.parentNode; )
              p.nodeType === 1 && _.push({
                element: p,
                left: p.scrollLeft,
                top: p.scrollTop
              });
            for (typeof i.focus == "function" && i.focus(), i = 0; i < _.length; i++) {
              var z = _[i];
              z.element.scrollLeft = z.left, z.element.scrollTop = z.top;
            }
          }
          ec = !!Ri, Ui = Ri = null;
        } finally {
          vt = e, H.p = a, A.T = u;
        }
      }
      t.current = l, Lt = 2;
    }
  }
  function E0() {
    if (Lt === 2) {
      Lt = 0;
      var t = bu, l = Ra, u = (l.flags & 8772) !== 0;
      if ((l.subtreeFlags & 8772) !== 0 || u) {
        u = A.T, A.T = null;
        var a = H.p;
        H.p = 2;
        var e = vt;
        vt |= 4;
        try {
          Io(t, l.alternate, l);
        } finally {
          vt = e, H.p = a, A.T = u;
        }
      }
      Lt = 3;
    }
  }
  function A0() {
    if (Lt === 4 || Lt === 3) {
      Lt = 0, fh();
      var t = bu, l = Ra, u = Ua, a = r0;
      (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? Lt = 5 : (Lt = 0, Ra = bu = null, T0(t, t.pendingLanes));
      var e = t.pendingLanes;
      if (e === 0 && (pu = null), Yc(u), l = l.stateNode, el && typeof el.onCommitFiberRoot == "function")
        try {
          el.onCommitFiberRoot(
            Ja,
            l,
            void 0,
            (l.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        l = A.T, e = H.p, H.p = 2, A.T = null;
        try {
          for (var n = t.onRecoverableError, f = 0; f < a.length; f++) {
            var i = a[f];
            n(i.value, {
              componentStack: i.stack
            });
          }
        } finally {
          A.T = l, H.p = e;
        }
      }
      (Ua & 3) !== 0 && wn(), xl(t), e = t.pendingLanes, (u & 4194090) !== 0 && (e & 42) !== 0 ? t === vi ? Ne++ : (Ne = 0, vi = t) : Ne = 0, He(0);
    }
  }
  function T0(t, l) {
    (t.pooledCacheLanes &= l) === 0 && (l = t.pooledCache, l != null && (t.pooledCache = null, oe(l)));
  }
  function wn(t) {
    return b0(), E0(), A0(), z0();
  }
  function z0() {
    if (Lt !== 5) return !1;
    var t = bu, l = hi;
    hi = 0;
    var u = Yc(Ua), a = A.T, e = H.p;
    try {
      H.p = 32 > u ? 32 : u, A.T = null, u = yi, yi = null;
      var n = bu, f = Ua;
      if (Lt = 0, Ra = bu = null, Ua = 0, (vt & 6) !== 0) throw Error(s(331));
      var i = vt;
      if (vt |= 4, f0(n.current), e0(
        n,
        n.current,
        f,
        u
      ), vt = i, He(0, !1), el && typeof el.onPostCommitFiberRoot == "function")
        try {
          el.onPostCommitFiberRoot(Ja, n);
        } catch {
        }
      return !0;
    } finally {
      H.p = e, A.T = a, T0(t, l);
    }
  }
  function _0(t, l, u) {
    l = ml(u, l), l = Jf(t.stateNode, l, 2), t = su(t, l, 2), t !== null && (ka(t, 2), xl(t));
  }
  function bt(t, l, u) {
    if (t.tag === 3)
      _0(t, t, u);
    else
      for (; l !== null; ) {
        if (l.tag === 3) {
          _0(
            l,
            t,
            u
          );
          break;
        } else if (l.tag === 1) {
          var a = l.stateNode;
          if (typeof l.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (pu === null || !pu.has(a))) {
            t = ml(u, t), u = Ro(2), a = su(l, u, 2), a !== null && (Uo(
              u,
              a,
              l,
              t
            ), ka(a, 2), xl(a));
            break;
          }
        }
        l = l.return;
      }
  }
  function pi(t, l, u) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new xy();
      var e = /* @__PURE__ */ new Set();
      a.set(l, e);
    } else
      e = a.get(l), e === void 0 && (e = /* @__PURE__ */ new Set(), a.set(l, e));
    e.has(u) || (ri = !0, e.add(u), t = jy.bind(null, t, l, u), l.then(t, t));
  }
  function jy(t, l, u) {
    var a = t.pingCache;
    a !== null && a.delete(l), t.pingedLanes |= t.suspendedLanes & u, t.warmLanes &= ~u, Et === t && (st & u) === u && (Ot === 4 || Ot === 3 && (st & 62914560) === st && 300 > Rl() - di ? (vt & 2) === 0 && Na(t, 0) : si |= u, Ma === st && (Ma = 0)), xl(t);
  }
  function O0(t, l) {
    l === 0 && (l = Er()), t = ha(t, l), t !== null && (ka(t, l), xl(t));
  }
  function Xy(t) {
    var l = t.memoizedState, u = 0;
    l !== null && (u = l.retryLane), O0(t, u);
  }
  function Qy(t, l) {
    var u = 0;
    switch (t.tag) {
      case 13:
        var a = t.stateNode, e = t.memoizedState;
        e !== null && (u = e.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    a !== null && a.delete(l), O0(t, u);
  }
  function Zy(t, l) {
    return Nc(t, l);
  }
  var Jn = null, qa = null, bi = !1, $n = !1, Ei = !1, Ju = 0;
  function xl(t) {
    t !== qa && t.next === null && (qa === null ? Jn = qa = t : qa = qa.next = t), $n = !0, bi || (bi = !0, Ly());
  }
  function He(t, l) {
    if (!Ei && $n) {
      Ei = !0;
      do
        for (var u = !1, a = Jn; a !== null; ) {
          if (t !== 0) {
            var e = a.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var f = a.suspendedLanes, i = a.pingedLanes;
              n = (1 << 31 - nl(42 | t) + 1) - 1, n &= e & ~(f & ~i), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (u = !0, U0(a, n));
          } else
            n = st, n = Pe(
              a,
              a === Et ? n : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (n & 3) === 0 || $a(a, n) || (u = !0, U0(a, n));
          a = a.next;
        }
      while (u);
      Ei = !1;
    }
  }
  function Vy() {
    D0();
  }
  function D0() {
    $n = bi = !1;
    var t = 0;
    Ju !== 0 && (Iy() && (t = Ju), Ju = 0);
    for (var l = Rl(), u = null, a = Jn; a !== null; ) {
      var e = a.next, n = M0(a, l);
      n === 0 ? (a.next = null, u === null ? Jn = e : u.next = e, e === null && (qa = u)) : (u = a, (t !== 0 || (n & 3) !== 0) && ($n = !0)), a = e;
    }
    He(t);
  }
  function M0(t, l) {
    for (var u = t.suspendedLanes, a = t.pingedLanes, e = t.expirationTimes, n = t.pendingLanes & -62914561; 0 < n; ) {
      var f = 31 - nl(n), i = 1 << f, d = e[f];
      d === -1 ? ((i & u) === 0 || (i & a) !== 0) && (e[f] = vh(i, l)) : d <= l && (t.expiredLanes |= i), n &= ~i;
    }
    if (l = Et, u = st, u = Pe(
      t,
      t === l ? u : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a = t.callbackNode, u === 0 || t === l && (mt === 2 || mt === 9) || t.cancelPendingCommit !== null)
      return a !== null && a !== null && Hc(a), t.callbackNode = null, t.callbackPriority = 0;
    if ((u & 3) === 0 || $a(t, u)) {
      if (l = u & -u, l === t.callbackPriority) return l;
      switch (a !== null && Hc(a), Yc(u)) {
        case 2:
        case 8:
          u = Sr;
          break;
        case 32:
          u = We;
          break;
        case 268435456:
          u = pr;
          break;
        default:
          u = We;
      }
      return a = R0.bind(null, t), u = Nc(u, a), t.callbackPriority = l, t.callbackNode = u, l;
    }
    return a !== null && a !== null && Hc(a), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function R0(t, l) {
    if (Lt !== 0 && Lt !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var u = t.callbackNode;
    if (wn() && t.callbackNode !== u)
      return null;
    var a = st;
    return a = Pe(
      t,
      t === Et ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a === 0 ? null : (o0(t, a, l), M0(t, Rl()), t.callbackNode != null && t.callbackNode === u ? R0.bind(null, t) : null);
  }
  function U0(t, l) {
    if (wn()) return null;
    o0(t, l, !0);
  }
  function Ly() {
    t1(function() {
      (vt & 6) !== 0 ? Nc(
        gr,
        Vy
      ) : D0();
    });
  }
  function Ai() {
    return Ju === 0 && (Ju = br()), Ju;
  }
  function N0(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : en("" + t);
  }
  function H0(t, l) {
    var u = l.ownerDocument.createElement("input");
    return u.name = l.name, u.value = l.value, t.id && u.setAttribute("form", t.id), l.parentNode.insertBefore(u, l), t = new FormData(t), u.parentNode.removeChild(u), t;
  }
  function Ky(t, l, u, a, e) {
    if (l === "submit" && u && u.stateNode === e) {
      var n = N0(
        (e[It] || null).action
      ), f = a.submitter;
      f && (l = (l = f[It] || null) ? N0(l.formAction) : f.getAttribute("formAction"), l !== null && (n = l, f = null));
      var i = new rn(
        "action",
        "action",
        null,
        a,
        e
      );
      t.push({
        event: i,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (Ju !== 0) {
                  var d = f ? H0(e, f) : new FormData(e);
                  Zf(
                    u,
                    {
                      pending: !0,
                      data: d,
                      method: e.method,
                      action: n
                    },
                    null,
                    d
                  );
                }
              } else
                typeof n == "function" && (i.preventDefault(), d = f ? H0(e, f) : new FormData(e), Zf(
                  u,
                  {
                    pending: !0,
                    data: d,
                    method: e.method,
                    action: n
                  },
                  n,
                  d
                ));
            },
            currentTarget: e
          }
        ]
      });
    }
  }
  for (var Ti = 0; Ti < cf.length; Ti++) {
    var zi = cf[Ti], wy = zi.toLowerCase(), Jy = zi[0].toUpperCase() + zi.slice(1);
    _l(
      wy,
      "on" + Jy
    );
  }
  _l(ss, "onAnimationEnd"), _l(os, "onAnimationIteration"), _l(ds, "onAnimationStart"), _l("dblclick", "onDoubleClick"), _l("focusin", "onFocus"), _l("focusout", "onBlur"), _l(sy, "onTransitionRun"), _l(oy, "onTransitionStart"), _l(dy, "onTransitionCancel"), _l(hs, "onTransitionEnd"), aa("onMouseEnter", ["mouseout", "mouseover"]), aa("onMouseLeave", ["mouseout", "mouseover"]), aa("onPointerEnter", ["pointerout", "pointerover"]), aa("onPointerLeave", ["pointerout", "pointerover"]), Nu(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Nu(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Nu("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Nu(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Nu(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Nu(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var qe = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), $y = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(qe)
  );
  function q0(t, l) {
    l = (l & 4) !== 0;
    for (var u = 0; u < t.length; u++) {
      var a = t[u], e = a.event;
      a = a.listeners;
      t: {
        var n = void 0;
        if (l)
          for (var f = a.length - 1; 0 <= f; f--) {
            var i = a[f], d = i.instance, g = i.currentTarget;
            if (i = i.listener, d !== n && e.isPropagationStopped())
              break t;
            n = i, e.currentTarget = g;
            try {
              n(e);
            } catch (T) {
              Yn(T);
            }
            e.currentTarget = null, n = d;
          }
        else
          for (f = 0; f < a.length; f++) {
            if (i = a[f], d = i.instance, g = i.currentTarget, i = i.listener, d !== n && e.isPropagationStopped())
              break t;
            n = i, e.currentTarget = g;
            try {
              n(e);
            } catch (T) {
              Yn(T);
            }
            e.currentTarget = null, n = d;
          }
      }
    }
  }
  function it(t, l) {
    var u = l[Bc];
    u === void 0 && (u = l[Bc] = /* @__PURE__ */ new Set());
    var a = t + "__bubble";
    u.has(a) || (x0(l, t, 2, !1), u.add(a));
  }
  function _i(t, l, u) {
    var a = 0;
    l && (a |= 4), x0(
      u,
      t,
      a,
      l
    );
  }
  var kn = "_reactListening" + Math.random().toString(36).slice(2);
  function Oi(t) {
    if (!t[kn]) {
      t[kn] = !0, Or.forEach(function(u) {
        u !== "selectionchange" && ($y.has(u) || _i(u, !1, t), _i(u, !0, t));
      });
      var l = t.nodeType === 9 ? t : t.ownerDocument;
      l === null || l[kn] || (l[kn] = !0, _i("selectionchange", !1, l));
    }
  }
  function x0(t, l, u, a) {
    switch (ed(l)) {
      case 2:
        var e = E1;
        break;
      case 8:
        e = A1;
        break;
      default:
        e = Xi;
    }
    u = e.bind(
      null,
      l,
      u,
      t
    ), e = void 0, !Jc || l !== "touchstart" && l !== "touchmove" && l !== "wheel" || (e = !0), a ? e !== void 0 ? t.addEventListener(l, u, {
      capture: !0,
      passive: e
    }) : t.addEventListener(l, u, !0) : e !== void 0 ? t.addEventListener(l, u, {
      passive: e
    }) : t.addEventListener(l, u, !1);
  }
  function Di(t, l, u, a, e) {
    var n = a;
    if ((l & 1) === 0 && (l & 2) === 0 && a !== null)
      t: for (; ; ) {
        if (a === null) return;
        var f = a.tag;
        if (f === 3 || f === 4) {
          var i = a.stateNode.containerInfo;
          if (i === e) break;
          if (f === 4)
            for (f = a.return; f !== null; ) {
              var d = f.tag;
              if ((d === 3 || d === 4) && f.stateNode.containerInfo === e)
                return;
              f = f.return;
            }
          for (; i !== null; ) {
            if (f = ta(i), f === null) return;
            if (d = f.tag, d === 5 || d === 6 || d === 26 || d === 27) {
              a = n = f;
              continue t;
            }
            i = i.parentNode;
          }
        }
        a = a.return;
      }
    Xr(function() {
      var g = n, T = Kc(u), _ = [];
      t: {
        var S = ys.get(t);
        if (S !== void 0) {
          var p = rn, $ = t;
          switch (t) {
            case "keypress":
              if (cn(u) === 0) break t;
            case "keydown":
            case "keyup":
              p = Zh;
              break;
            case "focusin":
              $ = "focus", p = Fc;
              break;
            case "focusout":
              $ = "blur", p = Fc;
              break;
            case "beforeblur":
            case "afterblur":
              p = Fc;
              break;
            case "click":
              if (u.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              p = Vr;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              p = Uh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              p = Kh;
              break;
            case ss:
            case os:
            case ds:
              p = qh;
              break;
            case hs:
              p = Jh;
              break;
            case "scroll":
            case "scrollend":
              p = Mh;
              break;
            case "wheel":
              p = kh;
              break;
            case "copy":
            case "cut":
            case "paste":
              p = Yh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              p = Kr;
              break;
            case "toggle":
            case "beforetoggle":
              p = Fh;
          }
          var L = (l & 4) !== 0, pt = !L && (t === "scroll" || t === "scrollend"), v = L ? S !== null ? S + "Capture" : null : S;
          L = [];
          for (var y = g, m; y !== null; ) {
            var z = y;
            if (m = z.stateNode, z = z.tag, z !== 5 && z !== 26 && z !== 27 || m === null || v === null || (z = Ia(y, v), z != null && L.push(
              xe(y, z, m)
            )), pt) break;
            y = y.return;
          }
          0 < L.length && (S = new p(
            S,
            $,
            null,
            u,
            T
          ), _.push({ event: S, listeners: L }));
        }
      }
      if ((l & 7) === 0) {
        t: {
          if (S = t === "mouseover" || t === "pointerover", p = t === "mouseout" || t === "pointerout", S && u !== Lc && ($ = u.relatedTarget || u.fromElement) && (ta($) || $[Pu]))
            break t;
          if ((p || S) && (S = T.window === T ? T : (S = T.ownerDocument) ? S.defaultView || S.parentWindow : window, p ? ($ = u.relatedTarget || u.toElement, p = g, $ = $ ? ta($) : null, $ !== null && (pt = D($), L = $.tag, $ !== pt || L !== 5 && L !== 27 && L !== 6) && ($ = null)) : (p = null, $ = g), p !== $)) {
            if (L = Vr, z = "onMouseLeave", v = "onMouseEnter", y = "mouse", (t === "pointerout" || t === "pointerover") && (L = Kr, z = "onPointerLeave", v = "onPointerEnter", y = "pointer"), pt = p == null ? S : Fa(p), m = $ == null ? S : Fa($), S = new L(
              z,
              y + "leave",
              p,
              u,
              T
            ), S.target = pt, S.relatedTarget = m, z = null, ta(T) === g && (L = new L(
              v,
              y + "enter",
              $,
              u,
              T
            ), L.target = m, L.relatedTarget = pt, z = L), pt = z, p && $)
              l: {
                for (L = p, v = $, y = 0, m = L; m; m = xa(m))
                  y++;
                for (m = 0, z = v; z; z = xa(z))
                  m++;
                for (; 0 < y - m; )
                  L = xa(L), y--;
                for (; 0 < m - y; )
                  v = xa(v), m--;
                for (; y--; ) {
                  if (L === v || v !== null && L === v.alternate)
                    break l;
                  L = xa(L), v = xa(v);
                }
                L = null;
              }
            else L = null;
            p !== null && Y0(
              _,
              S,
              p,
              L,
              !1
            ), $ !== null && pt !== null && Y0(
              _,
              pt,
              $,
              L,
              !0
            );
          }
        }
        t: {
          if (S = g ? Fa(g) : window, p = S.nodeName && S.nodeName.toLowerCase(), p === "select" || p === "input" && S.type === "file")
            var x = Pr;
          else if (Fr(S))
            if (ts)
              x = fy;
            else {
              x = ny;
              var et = ey;
            }
          else
            p = S.nodeName, !p || p.toLowerCase() !== "input" || S.type !== "checkbox" && S.type !== "radio" ? g && Vc(g.elementType) && (x = Pr) : x = cy;
          if (x && (x = x(t, g))) {
            Ir(
              _,
              x,
              u,
              T
            );
            break t;
          }
          et && et(t, S, g), t === "focusout" && g && S.type === "number" && g.memoizedProps.value != null && Zc(S, "number", S.value);
        }
        switch (et = g ? Fa(g) : window, t) {
          case "focusin":
            (Fr(et) || et.contentEditable === "true") && (sa = et, af = g, ce = null);
            break;
          case "focusout":
            ce = af = sa = null;
            break;
          case "mousedown":
            ef = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ef = !1, is(_, u, T);
            break;
          case "selectionchange":
            if (ry) break;
          case "keydown":
          case "keyup":
            is(_, u, T);
        }
        var X;
        if (Pc)
          t: {
            switch (t) {
              case "compositionstart":
                var J = "onCompositionStart";
                break t;
              case "compositionend":
                J = "onCompositionEnd";
                break t;
              case "compositionupdate":
                J = "onCompositionUpdate";
                break t;
            }
            J = void 0;
          }
        else
          ra ? kr(t, u) && (J = "onCompositionEnd") : t === "keydown" && u.keyCode === 229 && (J = "onCompositionStart");
        J && (wr && u.locale !== "ko" && (ra || J !== "onCompositionStart" ? J === "onCompositionEnd" && ra && (X = Qr()) : (cu = T, $c = "value" in cu ? cu.value : cu.textContent, ra = !0)), et = Wn(g, J), 0 < et.length && (J = new Lr(
          J,
          t,
          null,
          u,
          T
        ), _.push({ event: J, listeners: et }), X ? J.data = X : (X = Wr(u), X !== null && (J.data = X)))), (X = Ph ? ty(t, u) : ly(t, u)) && (J = Wn(g, "onBeforeInput"), 0 < J.length && (et = new Lr(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          T
        ), _.push({
          event: et,
          listeners: J
        }), et.data = X)), Ky(
          _,
          t,
          g,
          u,
          T
        );
      }
      q0(_, l);
    });
  }
  function xe(t, l, u) {
    return {
      instance: t,
      listener: l,
      currentTarget: u
    };
  }
  function Wn(t, l) {
    for (var u = l + "Capture", a = []; t !== null; ) {
      var e = t, n = e.stateNode;
      if (e = e.tag, e !== 5 && e !== 26 && e !== 27 || n === null || (e = Ia(t, u), e != null && a.unshift(
        xe(t, e, n)
      ), e = Ia(t, l), e != null && a.push(
        xe(t, e, n)
      )), t.tag === 3) return a;
      t = t.return;
    }
    return [];
  }
  function xa(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Y0(t, l, u, a, e) {
    for (var n = l._reactName, f = []; u !== null && u !== a; ) {
      var i = u, d = i.alternate, g = i.stateNode;
      if (i = i.tag, d !== null && d === a) break;
      i !== 5 && i !== 26 && i !== 27 || g === null || (d = g, e ? (g = Ia(u, n), g != null && f.unshift(
        xe(u, g, d)
      )) : e || (g = Ia(u, n), g != null && f.push(
        xe(u, g, d)
      ))), u = u.return;
    }
    f.length !== 0 && t.push({ event: l, listeners: f });
  }
  var ky = /\r\n?/g, Wy = /\u0000|\uFFFD/g;
  function B0(t) {
    return (typeof t == "string" ? t : "" + t).replace(ky, `
`).replace(Wy, "");
  }
  function C0(t, l) {
    return l = B0(l), B0(t) === l;
  }
  function Fn() {
  }
  function St(t, l, u, a, e, n) {
    switch (u) {
      case "children":
        typeof a == "string" ? l === "body" || l === "textarea" && a === "" || ca(t, a) : (typeof a == "number" || typeof a == "bigint") && l !== "body" && ca(t, "" + a);
        break;
      case "className":
        ln(t, "class", a);
        break;
      case "tabIndex":
        ln(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ln(t, u, a);
        break;
      case "style":
        Gr(t, a, n);
        break;
      case "data":
        if (l !== "object") {
          ln(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (l !== "a" || u !== "href")) {
          t.removeAttribute(u);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(u);
          break;
        }
        a = en("" + a), t.setAttribute(u, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" && (u === "formAction" ? (l !== "input" && St(t, l, "name", e.name, e, null), St(
            t,
            l,
            "formEncType",
            e.formEncType,
            e,
            null
          ), St(
            t,
            l,
            "formMethod",
            e.formMethod,
            e,
            null
          ), St(
            t,
            l,
            "formTarget",
            e.formTarget,
            e,
            null
          )) : (St(t, l, "encType", e.encType, e, null), St(t, l, "method", e.method, e, null), St(t, l, "target", e.target, e, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(u);
          break;
        }
        a = en("" + a), t.setAttribute(u, a);
        break;
      case "onClick":
        a != null && (t.onclick = Fn);
        break;
      case "onScroll":
        a != null && it("scroll", t);
        break;
      case "onScrollEnd":
        a != null && it("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(s(61));
          if (u = a.__html, u != null) {
            if (e.children != null) throw Error(s(60));
            t.innerHTML = u;
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        u = en("" + a), t.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          u
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(u, "" + a) : t.removeAttribute(u);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(u, "") : t.removeAttribute(u);
        break;
      case "capture":
      case "download":
        a === !0 ? t.setAttribute(u, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(u, a) : t.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(u, a) : t.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(u) : t.setAttribute(u, a);
        break;
      case "popover":
        it("beforetoggle", t), it("toggle", t), tn(t, "popover", a);
        break;
      case "xlinkActuate":
        jl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        jl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        jl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        jl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        jl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        jl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        jl(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        jl(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        jl(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        tn(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = Oh.get(u) || u, tn(t, u, a));
    }
  }
  function Mi(t, l, u, a, e, n) {
    switch (u) {
      case "style":
        Gr(t, a, n);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(s(61));
          if (u = a.__html, u != null) {
            if (e.children != null) throw Error(s(60));
            t.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof a == "string" ? ca(t, a) : (typeof a == "number" || typeof a == "bigint") && ca(t, "" + a);
        break;
      case "onScroll":
        a != null && it("scroll", t);
        break;
      case "onScrollEnd":
        a != null && it("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = Fn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Dr.hasOwnProperty(u))
          t: {
            if (u[0] === "o" && u[1] === "n" && (e = u.endsWith("Capture"), l = u.slice(2, e ? u.length - 7 : void 0), n = t[It] || null, n = n != null ? n[u] : null, typeof n == "function" && t.removeEventListener(l, n, e), typeof a == "function")) {
              typeof n != "function" && n !== null && (u in t ? t[u] = null : t.hasAttribute(u) && t.removeAttribute(u)), t.addEventListener(l, a, e);
              break t;
            }
            u in t ? t[u] = a : a === !0 ? t.setAttribute(u, "") : tn(t, u, a);
          }
    }
  }
  function Kt(t, l, u) {
    switch (l) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        it("error", t), it("load", t);
        var a = !1, e = !1, n;
        for (n in u)
          if (u.hasOwnProperty(n)) {
            var f = u[n];
            if (f != null)
              switch (n) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  e = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(s(137, l));
                default:
                  St(t, l, n, f, u, null);
              }
          }
        e && St(t, l, "srcSet", u.srcSet, u, null), a && St(t, l, "src", u.src, u, null);
        return;
      case "input":
        it("invalid", t);
        var i = n = f = e = null, d = null, g = null;
        for (a in u)
          if (u.hasOwnProperty(a)) {
            var T = u[a];
            if (T != null)
              switch (a) {
                case "name":
                  e = T;
                  break;
                case "type":
                  f = T;
                  break;
                case "checked":
                  d = T;
                  break;
                case "defaultChecked":
                  g = T;
                  break;
                case "value":
                  n = T;
                  break;
                case "defaultValue":
                  i = T;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (T != null)
                    throw Error(s(137, l));
                  break;
                default:
                  St(t, l, a, T, u, null);
              }
          }
        xr(
          t,
          n,
          i,
          d,
          g,
          f,
          e,
          !1
        ), un(t);
        return;
      case "select":
        it("invalid", t), a = f = n = null;
        for (e in u)
          if (u.hasOwnProperty(e) && (i = u[e], i != null))
            switch (e) {
              case "value":
                n = i;
                break;
              case "defaultValue":
                f = i;
                break;
              case "multiple":
                a = i;
              default:
                St(t, l, e, i, u, null);
            }
        l = n, u = f, t.multiple = !!a, l != null ? na(t, !!a, l, !1) : u != null && na(t, !!a, u, !0);
        return;
      case "textarea":
        it("invalid", t), n = e = a = null;
        for (f in u)
          if (u.hasOwnProperty(f) && (i = u[f], i != null))
            switch (f) {
              case "value":
                a = i;
                break;
              case "defaultValue":
                e = i;
                break;
              case "children":
                n = i;
                break;
              case "dangerouslySetInnerHTML":
                if (i != null) throw Error(s(91));
                break;
              default:
                St(t, l, f, i, u, null);
            }
        Br(t, a, e, n), un(t);
        return;
      case "option":
        for (d in u)
          if (u.hasOwnProperty(d) && (a = u[d], a != null))
            switch (d) {
              case "selected":
                t.selected = a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                St(t, l, d, a, u, null);
            }
        return;
      case "dialog":
        it("beforetoggle", t), it("toggle", t), it("cancel", t), it("close", t);
        break;
      case "iframe":
      case "object":
        it("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < qe.length; a++)
          it(qe[a], t);
        break;
      case "image":
        it("error", t), it("load", t);
        break;
      case "details":
        it("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        it("error", t), it("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (g in u)
          if (u.hasOwnProperty(g) && (a = u[g], a != null))
            switch (g) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, l));
              default:
                St(t, l, g, a, u, null);
            }
        return;
      default:
        if (Vc(l)) {
          for (T in u)
            u.hasOwnProperty(T) && (a = u[T], a !== void 0 && Mi(
              t,
              l,
              T,
              a,
              u,
              void 0
            ));
          return;
        }
    }
    for (i in u)
      u.hasOwnProperty(i) && (a = u[i], a != null && St(t, l, i, a, u, null));
  }
  function Fy(t, l, u, a) {
    switch (l) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var e = null, n = null, f = null, i = null, d = null, g = null, T = null;
        for (p in u) {
          var _ = u[p];
          if (u.hasOwnProperty(p) && _ != null)
            switch (p) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                d = _;
              default:
                a.hasOwnProperty(p) || St(t, l, p, null, a, _);
            }
        }
        for (var S in a) {
          var p = a[S];
          if (_ = u[S], a.hasOwnProperty(S) && (p != null || _ != null))
            switch (S) {
              case "type":
                n = p;
                break;
              case "name":
                e = p;
                break;
              case "checked":
                g = p;
                break;
              case "defaultChecked":
                T = p;
                break;
              case "value":
                f = p;
                break;
              case "defaultValue":
                i = p;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (p != null)
                  throw Error(s(137, l));
                break;
              default:
                p !== _ && St(
                  t,
                  l,
                  S,
                  p,
                  a,
                  _
                );
            }
        }
        Qc(
          t,
          f,
          i,
          d,
          g,
          T,
          n,
          e
        );
        return;
      case "select":
        p = f = i = S = null;
        for (n in u)
          if (d = u[n], u.hasOwnProperty(n) && d != null)
            switch (n) {
              case "value":
                break;
              case "multiple":
                p = d;
              default:
                a.hasOwnProperty(n) || St(
                  t,
                  l,
                  n,
                  null,
                  a,
                  d
                );
            }
        for (e in a)
          if (n = a[e], d = u[e], a.hasOwnProperty(e) && (n != null || d != null))
            switch (e) {
              case "value":
                S = n;
                break;
              case "defaultValue":
                i = n;
                break;
              case "multiple":
                f = n;
              default:
                n !== d && St(
                  t,
                  l,
                  e,
                  n,
                  a,
                  d
                );
            }
        l = i, u = f, a = p, S != null ? na(t, !!u, S, !1) : !!a != !!u && (l != null ? na(t, !!u, l, !0) : na(t, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        p = S = null;
        for (i in u)
          if (e = u[i], u.hasOwnProperty(i) && e != null && !a.hasOwnProperty(i))
            switch (i) {
              case "value":
                break;
              case "children":
                break;
              default:
                St(t, l, i, null, a, e);
            }
        for (f in a)
          if (e = a[f], n = u[f], a.hasOwnProperty(f) && (e != null || n != null))
            switch (f) {
              case "value":
                S = e;
                break;
              case "defaultValue":
                p = e;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (e != null) throw Error(s(91));
                break;
              default:
                e !== n && St(t, l, f, e, a, n);
            }
        Yr(t, S, p);
        return;
      case "option":
        for (var $ in u)
          if (S = u[$], u.hasOwnProperty($) && S != null && !a.hasOwnProperty($))
            switch ($) {
              case "selected":
                t.selected = !1;
                break;
              default:
                St(
                  t,
                  l,
                  $,
                  null,
                  a,
                  S
                );
            }
        for (d in a)
          if (S = a[d], p = u[d], a.hasOwnProperty(d) && S !== p && (S != null || p != null))
            switch (d) {
              case "selected":
                t.selected = S && typeof S != "function" && typeof S != "symbol";
                break;
              default:
                St(
                  t,
                  l,
                  d,
                  S,
                  a,
                  p
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var L in u)
          S = u[L], u.hasOwnProperty(L) && S != null && !a.hasOwnProperty(L) && St(t, l, L, null, a, S);
        for (g in a)
          if (S = a[g], p = u[g], a.hasOwnProperty(g) && S !== p && (S != null || p != null))
            switch (g) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (S != null)
                  throw Error(s(137, l));
                break;
              default:
                St(
                  t,
                  l,
                  g,
                  S,
                  a,
                  p
                );
            }
        return;
      default:
        if (Vc(l)) {
          for (var pt in u)
            S = u[pt], u.hasOwnProperty(pt) && S !== void 0 && !a.hasOwnProperty(pt) && Mi(
              t,
              l,
              pt,
              void 0,
              a,
              S
            );
          for (T in a)
            S = a[T], p = u[T], !a.hasOwnProperty(T) || S === p || S === void 0 && p === void 0 || Mi(
              t,
              l,
              T,
              S,
              a,
              p
            );
          return;
        }
    }
    for (var v in u)
      S = u[v], u.hasOwnProperty(v) && S != null && !a.hasOwnProperty(v) && St(t, l, v, null, a, S);
    for (_ in a)
      S = a[_], p = u[_], !a.hasOwnProperty(_) || S === p || S == null && p == null || St(t, l, _, S, a, p);
  }
  var Ri = null, Ui = null;
  function In(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function G0(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function j0(t, l) {
    if (t === 0)
      switch (l) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && l === "foreignObject" ? 0 : t;
  }
  function Ni(t, l) {
    return t === "textarea" || t === "noscript" || typeof l.children == "string" || typeof l.children == "number" || typeof l.children == "bigint" || typeof l.dangerouslySetInnerHTML == "object" && l.dangerouslySetInnerHTML !== null && l.dangerouslySetInnerHTML.__html != null;
  }
  var Hi = null;
  function Iy() {
    var t = window.event;
    return t && t.type === "popstate" ? t === Hi ? !1 : (Hi = t, !0) : (Hi = null, !1);
  }
  var X0 = typeof setTimeout == "function" ? setTimeout : void 0, Py = typeof clearTimeout == "function" ? clearTimeout : void 0, Q0 = typeof Promise == "function" ? Promise : void 0, t1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Q0 < "u" ? function(t) {
    return Q0.resolve(null).then(t).catch(l1);
  } : X0;
  function l1(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Au(t) {
    return t === "head";
  }
  function Z0(t, l) {
    var u = l, a = 0, e = 0;
    do {
      var n = u.nextSibling;
      if (t.removeChild(u), n && n.nodeType === 8)
        if (u = n.data, u === "/$") {
          if (0 < a && 8 > a) {
            u = a;
            var f = t.ownerDocument;
            if (u & 1 && Ye(f.documentElement), u & 2 && Ye(f.body), u & 4)
              for (u = f.head, Ye(u), f = u.firstChild; f; ) {
                var i = f.nextSibling, d = f.nodeName;
                f[Wa] || d === "SCRIPT" || d === "STYLE" || d === "LINK" && f.rel.toLowerCase() === "stylesheet" || u.removeChild(f), f = i;
              }
          }
          if (e === 0) {
            t.removeChild(n), Ve(l);
            return;
          }
          e--;
        } else
          u === "$" || u === "$?" || u === "$!" ? e++ : a = u.charCodeAt(0) - 48;
      else a = 0;
      u = n;
    } while (u);
    Ve(l);
  }
  function qi(t) {
    var l = t.firstChild;
    for (l && l.nodeType === 10 && (l = l.nextSibling); l; ) {
      var u = l;
      switch (l = l.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          qi(u), Cc(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(u);
    }
  }
  function u1(t, l, u, a) {
    for (; t.nodeType === 1; ) {
      var e = u;
      if (t.nodeName.toLowerCase() !== l.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (a) {
        if (!t[Wa])
          switch (l) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (n = t.getAttribute("rel"), n === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (n !== e.rel || t.getAttribute("href") !== (e.href == null || e.href === "" ? null : e.href) || t.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin) || t.getAttribute("title") !== (e.title == null ? null : e.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (n = t.getAttribute("src"), (n !== (e.src == null ? null : e.src) || t.getAttribute("type") !== (e.type == null ? null : e.type) || t.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin)) && n && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (l === "input" && t.type === "hidden") {
        var n = e.name == null ? null : "" + e.name;
        if (e.type === "hidden" && t.getAttribute("name") === n)
          return t;
      } else return t;
      if (t = Dl(t.nextSibling), t === null) break;
    }
    return null;
  }
  function a1(t, l, u) {
    if (l === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !u || (t = Dl(t.nextSibling), t === null)) return null;
    return t;
  }
  function xi(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState === "complete";
  }
  function e1(t, l) {
    var u = t.ownerDocument;
    if (t.data !== "$?" || u.readyState === "complete")
      l();
    else {
      var a = function() {
        l(), u.removeEventListener("DOMContentLoaded", a);
      };
      u.addEventListener("DOMContentLoaded", a), t._reactRetry = a;
    }
  }
  function Dl(t) {
    for (; t != null; t = t.nextSibling) {
      var l = t.nodeType;
      if (l === 1 || l === 3) break;
      if (l === 8) {
        if (l = t.data, l === "$" || l === "$!" || l === "$?" || l === "F!" || l === "F")
          break;
        if (l === "/$") return null;
      }
    }
    return t;
  }
  var Yi = null;
  function V0(t) {
    t = t.previousSibling;
    for (var l = 0; t; ) {
      if (t.nodeType === 8) {
        var u = t.data;
        if (u === "$" || u === "$!" || u === "$?") {
          if (l === 0) return t;
          l--;
        } else u === "/$" && l++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function L0(t, l, u) {
    switch (l = In(u), t) {
      case "html":
        if (t = l.documentElement, !t) throw Error(s(452));
        return t;
      case "head":
        if (t = l.head, !t) throw Error(s(453));
        return t;
      case "body":
        if (t = l.body, !t) throw Error(s(454));
        return t;
      default:
        throw Error(s(451));
    }
  }
  function Ye(t) {
    for (var l = t.attributes; l.length; )
      t.removeAttributeNode(l[0]);
    Cc(t);
  }
  var Al = /* @__PURE__ */ new Map(), K0 = /* @__PURE__ */ new Set();
  function Pn(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var Pl = H.d;
  H.d = {
    f: n1,
    r: c1,
    D: f1,
    C: i1,
    L: r1,
    m: s1,
    X: d1,
    S: o1,
    M: h1
  };
  function n1() {
    var t = Pl.f(), l = Ln();
    return t || l;
  }
  function c1(t) {
    var l = la(t);
    l !== null && l.tag === 5 && l.type === "form" ? so(l) : Pl.r(t);
  }
  var Ya = typeof document > "u" ? null : document;
  function w0(t, l, u) {
    var a = Ya;
    if (a && typeof l == "string" && l) {
      var e = vl(l);
      e = 'link[rel="' + t + '"][href="' + e + '"]', typeof u == "string" && (e += '[crossorigin="' + u + '"]'), K0.has(e) || (K0.add(e), t = { rel: t, crossOrigin: u, href: l }, a.querySelector(e) === null && (l = a.createElement("link"), Kt(l, "link", t), Gt(l), a.head.appendChild(l)));
    }
  }
  function f1(t) {
    Pl.D(t), w0("dns-prefetch", t, null);
  }
  function i1(t, l) {
    Pl.C(t, l), w0("preconnect", t, l);
  }
  function r1(t, l, u) {
    Pl.L(t, l, u);
    var a = Ya;
    if (a && t && l) {
      var e = 'link[rel="preload"][as="' + vl(l) + '"]';
      l === "image" && u && u.imageSrcSet ? (e += '[imagesrcset="' + vl(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (e += '[imagesizes="' + vl(
        u.imageSizes
      ) + '"]')) : e += '[href="' + vl(t) + '"]';
      var n = e;
      switch (l) {
        case "style":
          n = Ba(t);
          break;
        case "script":
          n = Ca(t);
      }
      Al.has(n) || (t = R(
        {
          rel: "preload",
          href: l === "image" && u && u.imageSrcSet ? void 0 : t,
          as: l
        },
        u
      ), Al.set(n, t), a.querySelector(e) !== null || l === "style" && a.querySelector(Be(n)) || l === "script" && a.querySelector(Ce(n)) || (l = a.createElement("link"), Kt(l, "link", t), Gt(l), a.head.appendChild(l)));
    }
  }
  function s1(t, l) {
    Pl.m(t, l);
    var u = Ya;
    if (u && t) {
      var a = l && typeof l.as == "string" ? l.as : "script", e = 'link[rel="modulepreload"][as="' + vl(a) + '"][href="' + vl(t) + '"]', n = e;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Ca(t);
      }
      if (!Al.has(n) && (t = R({ rel: "modulepreload", href: t }, l), Al.set(n, t), u.querySelector(e) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(Ce(n)))
              return;
        }
        a = u.createElement("link"), Kt(a, "link", t), Gt(a), u.head.appendChild(a);
      }
    }
  }
  function o1(t, l, u) {
    Pl.S(t, l, u);
    var a = Ya;
    if (a && t) {
      var e = ua(a).hoistableStyles, n = Ba(t);
      l = l || "default";
      var f = e.get(n);
      if (!f) {
        var i = { loading: 0, preload: null };
        if (f = a.querySelector(
          Be(n)
        ))
          i.loading = 5;
        else {
          t = R(
            { rel: "stylesheet", href: t, "data-precedence": l },
            u
          ), (u = Al.get(n)) && Bi(t, u);
          var d = f = a.createElement("link");
          Gt(d), Kt(d, "link", t), d._p = new Promise(function(g, T) {
            d.onload = g, d.onerror = T;
          }), d.addEventListener("load", function() {
            i.loading |= 1;
          }), d.addEventListener("error", function() {
            i.loading |= 2;
          }), i.loading |= 4, tc(f, l, a);
        }
        f = {
          type: "stylesheet",
          instance: f,
          count: 1,
          state: i
        }, e.set(n, f);
      }
    }
  }
  function d1(t, l) {
    Pl.X(t, l);
    var u = Ya;
    if (u && t) {
      var a = ua(u).hoistableScripts, e = Ca(t), n = a.get(e);
      n || (n = u.querySelector(Ce(e)), n || (t = R({ src: t, async: !0 }, l), (l = Al.get(e)) && Ci(t, l), n = u.createElement("script"), Gt(n), Kt(n, "link", t), u.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(e, n));
    }
  }
  function h1(t, l) {
    Pl.M(t, l);
    var u = Ya;
    if (u && t) {
      var a = ua(u).hoistableScripts, e = Ca(t), n = a.get(e);
      n || (n = u.querySelector(Ce(e)), n || (t = R({ src: t, async: !0, type: "module" }, l), (l = Al.get(e)) && Ci(t, l), n = u.createElement("script"), Gt(n), Kt(n, "link", t), u.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(e, n));
    }
  }
  function J0(t, l, u, a) {
    var e = (e = w.current) ? Pn(e) : null;
    if (!e) throw Error(s(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (l = Ba(u.href), u = ua(
          e
        ).hoistableStyles, a = u.get(l), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(l, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          t = Ba(u.href);
          var n = ua(
            e
          ).hoistableStyles, f = n.get(t);
          if (f || (e = e.ownerDocument || e, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, n.set(t, f), (n = e.querySelector(
            Be(t)
          )) && !n._p && (f.instance = n, f.state.loading = 5), Al.has(t) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, Al.set(t, u), n || y1(
            e,
            t,
            u,
            f.state
          ))), l && a === null)
            throw Error(s(528, ""));
          return f;
        }
        if (l && a !== null)
          throw Error(s(529, ""));
        return null;
      case "script":
        return l = u.async, u = u.src, typeof u == "string" && l && typeof l != "function" && typeof l != "symbol" ? (l = Ca(u), u = ua(
          e
        ).hoistableScripts, a = u.get(l), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(l, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(s(444, t));
    }
  }
  function Ba(t) {
    return 'href="' + vl(t) + '"';
  }
  function Be(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function $0(t) {
    return R({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function y1(t, l, u, a) {
    t.querySelector('link[rel="preload"][as="style"][' + l + "]") ? a.loading = 1 : (l = t.createElement("link"), a.preload = l, l.addEventListener("load", function() {
      return a.loading |= 1;
    }), l.addEventListener("error", function() {
      return a.loading |= 2;
    }), Kt(l, "link", u), Gt(l), t.head.appendChild(l));
  }
  function Ca(t) {
    return '[src="' + vl(t) + '"]';
  }
  function Ce(t) {
    return "script[async]" + t;
  }
  function k0(t, l, u) {
    if (l.count++, l.instance === null)
      switch (l.type) {
        case "style":
          var a = t.querySelector(
            'style[data-href~="' + vl(u.href) + '"]'
          );
          if (a)
            return l.instance = a, Gt(a), a;
          var e = R({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return a = (t.ownerDocument || t).createElement(
            "style"
          ), Gt(a), Kt(a, "style", e), tc(a, u.precedence, t), l.instance = a;
        case "stylesheet":
          e = Ba(u.href);
          var n = t.querySelector(
            Be(e)
          );
          if (n)
            return l.state.loading |= 4, l.instance = n, Gt(n), n;
          a = $0(u), (e = Al.get(e)) && Bi(a, e), n = (t.ownerDocument || t).createElement("link"), Gt(n);
          var f = n;
          return f._p = new Promise(function(i, d) {
            f.onload = i, f.onerror = d;
          }), Kt(n, "link", a), l.state.loading |= 4, tc(n, u.precedence, t), l.instance = n;
        case "script":
          return n = Ca(u.src), (e = t.querySelector(
            Ce(n)
          )) ? (l.instance = e, Gt(e), e) : (a = u, (e = Al.get(n)) && (a = R({}, u), Ci(a, e)), t = t.ownerDocument || t, e = t.createElement("script"), Gt(e), Kt(e, "link", a), t.head.appendChild(e), l.instance = e);
        case "void":
          return null;
        default:
          throw Error(s(443, l.type));
      }
    else
      l.type === "stylesheet" && (l.state.loading & 4) === 0 && (a = l.instance, l.state.loading |= 4, tc(a, u.precedence, t));
    return l.instance;
  }
  function tc(t, l, u) {
    for (var a = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), e = a.length ? a[a.length - 1] : null, n = e, f = 0; f < a.length; f++) {
      var i = a[f];
      if (i.dataset.precedence === l) n = i;
      else if (n !== e) break;
    }
    n ? n.parentNode.insertBefore(t, n.nextSibling) : (l = u.nodeType === 9 ? u.head : u, l.insertBefore(t, l.firstChild));
  }
  function Bi(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy), t.title == null && (t.title = l.title);
  }
  function Ci(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy), t.integrity == null && (t.integrity = l.integrity);
  }
  var lc = null;
  function W0(t, l, u) {
    if (lc === null) {
      var a = /* @__PURE__ */ new Map(), e = lc = /* @__PURE__ */ new Map();
      e.set(u, a);
    } else
      e = lc, a = e.get(u), a || (a = /* @__PURE__ */ new Map(), e.set(u, a));
    if (a.has(t)) return a;
    for (a.set(t, null), u = u.getElementsByTagName(t), e = 0; e < u.length; e++) {
      var n = u[e];
      if (!(n[Wa] || n[Jt] || t === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = n.getAttribute(l) || "";
        f = t + f;
        var i = a.get(f);
        i ? i.push(n) : a.set(f, [n]);
      }
    }
    return a;
  }
  function F0(t, l, u) {
    t = t.ownerDocument || t, t.head.insertBefore(
      u,
      l === "title" ? t.querySelector("head > title") : null
    );
  }
  function v1(t, l, u) {
    if (u === 1 || l.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof l.precedence != "string" || typeof l.href != "string" || l.href === "")
          break;
        return !0;
      case "link":
        if (typeof l.rel != "string" || typeof l.href != "string" || l.href === "" || l.onLoad || l.onError)
          break;
        switch (l.rel) {
          case "stylesheet":
            return t = l.disabled, typeof l.precedence == "string" && t == null;
          default:
            return !0;
        }
      case "script":
        if (l.async && typeof l.async != "function" && typeof l.async != "symbol" && !l.onLoad && !l.onError && l.src && typeof l.src == "string")
          return !0;
    }
    return !1;
  }
  function I0(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var Ge = null;
  function m1() {
  }
  function g1(t, l, u) {
    if (Ge === null) throw Error(s(475));
    var a = Ge;
    if (l.type === "stylesheet" && (typeof u.media != "string" || matchMedia(u.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var e = Ba(u.href), n = t.querySelector(
          Be(e)
        );
        if (n) {
          t = n._p, t !== null && typeof t == "object" && typeof t.then == "function" && (a.count++, a = uc.bind(a), t.then(a, a)), l.state.loading |= 4, l.instance = n, Gt(n);
          return;
        }
        n = t.ownerDocument || t, u = $0(u), (e = Al.get(e)) && Bi(u, e), n = n.createElement("link"), Gt(n);
        var f = n;
        f._p = new Promise(function(i, d) {
          f.onload = i, f.onerror = d;
        }), Kt(n, "link", u), l.instance = n;
      }
      a.stylesheets === null && (a.stylesheets = /* @__PURE__ */ new Map()), a.stylesheets.set(l, t), (t = l.state.preload) && (l.state.loading & 3) === 0 && (a.count++, l = uc.bind(a), t.addEventListener("load", l), t.addEventListener("error", l));
    }
  }
  function S1() {
    if (Ge === null) throw Error(s(475));
    var t = Ge;
    return t.stylesheets && t.count === 0 && Gi(t, t.stylesheets), 0 < t.count ? function(l) {
      var u = setTimeout(function() {
        if (t.stylesheets && Gi(t, t.stylesheets), t.unsuspend) {
          var a = t.unsuspend;
          t.unsuspend = null, a();
        }
      }, 6e4);
      return t.unsuspend = l, function() {
        t.unsuspend = null, clearTimeout(u);
      };
    } : null;
  }
  function uc() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Gi(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var ac = null;
  function Gi(t, l) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, ac = /* @__PURE__ */ new Map(), l.forEach(p1, t), ac = null, uc.call(t));
  }
  function p1(t, l) {
    if (!(l.state.loading & 4)) {
      var u = ac.get(t);
      if (u) var a = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), ac.set(t, u);
        for (var e = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), n = 0; n < e.length; n++) {
          var f = e[n];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (u.set(f.dataset.precedence, f), a = f);
        }
        a && u.set(null, a);
      }
      e = l.instance, f = e.getAttribute("data-precedence"), n = u.get(f) || a, n === a && u.set(null, e), u.set(f, e), this.count++, a = uc.bind(this), e.addEventListener("load", a), e.addEventListener("error", a), n ? n.parentNode.insertBefore(e, n.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(e, t.firstChild)), l.state.loading |= 4;
    }
  }
  var je = {
    $$typeof: k,
    Provider: null,
    Consumer: null,
    _currentValue: V,
    _currentValue2: V,
    _threadCount: 0
  };
  function b1(t, l, u, a, e, n, f, i) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = qc(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = qc(0), this.hiddenUpdates = qc(null), this.identifierPrefix = a, this.onUncaughtError = e, this.onCaughtError = n, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = i, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function P0(t, l, u, a, e, n, f, i, d, g, T, _) {
    return t = new b1(
      t,
      l,
      u,
      f,
      i,
      d,
      g,
      _
    ), l = 1, n === !0 && (l |= 24), n = fl(3, null, null, l), t.current = n, n.stateNode = t, l = pf(), l.refCount++, t.pooledCache = l, l.refCount++, n.memoizedState = {
      element: a,
      isDehydrated: u,
      cache: l
    }, Tf(n), t;
  }
  function td(t) {
    return t ? (t = ya, t) : ya;
  }
  function ld(t, l, u, a, e, n) {
    e = td(e), a.context === null ? a.context = e : a.pendingContext = e, a = ru(l), a.payload = { element: u }, n = n === void 0 ? null : n, n !== null && (a.callback = n), u = su(t, a, l), u !== null && (dl(u, t, l), ve(u, t, l));
  }
  function ud(t, l) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var u = t.retryLane;
      t.retryLane = u !== 0 && u < l ? u : l;
    }
  }
  function ji(t, l) {
    ud(t, l), (t = t.alternate) && ud(t, l);
  }
  function ad(t) {
    if (t.tag === 13) {
      var l = ha(t, 67108864);
      l !== null && dl(l, t, 67108864), ji(t, 67108864);
    }
  }
  var ec = !0;
  function E1(t, l, u, a) {
    var e = A.T;
    A.T = null;
    var n = H.p;
    try {
      H.p = 2, Xi(t, l, u, a);
    } finally {
      H.p = n, A.T = e;
    }
  }
  function A1(t, l, u, a) {
    var e = A.T;
    A.T = null;
    var n = H.p;
    try {
      H.p = 8, Xi(t, l, u, a);
    } finally {
      H.p = n, A.T = e;
    }
  }
  function Xi(t, l, u, a) {
    if (ec) {
      var e = Qi(a);
      if (e === null)
        Di(
          t,
          l,
          a,
          nc,
          u
        ), nd(t, a);
      else if (z1(
        e,
        t,
        l,
        u,
        a
      ))
        a.stopPropagation();
      else if (nd(t, a), l & 4 && -1 < T1.indexOf(t)) {
        for (; e !== null; ) {
          var n = la(e);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var f = Uu(n.pendingLanes);
                  if (f !== 0) {
                    var i = n;
                    for (i.pendingLanes |= 2, i.entangledLanes |= 2; f; ) {
                      var d = 1 << 31 - nl(f);
                      i.entanglements[1] |= d, f &= ~d;
                    }
                    xl(n), (vt & 6) === 0 && (Zn = Rl() + 500, He(0));
                  }
                }
                break;
              case 13:
                i = ha(n, 2), i !== null && dl(i, n, 2), Ln(), ji(n, 2);
            }
          if (n = Qi(a), n === null && Di(
            t,
            l,
            a,
            nc,
            u
          ), n === e) break;
          e = n;
        }
        e !== null && a.stopPropagation();
      } else
        Di(
          t,
          l,
          a,
          null,
          u
        );
    }
  }
  function Qi(t) {
    return t = Kc(t), Zi(t);
  }
  var nc = null;
  function Zi(t) {
    if (nc = null, t = ta(t), t !== null) {
      var l = D(t);
      if (l === null) t = null;
      else {
        var u = l.tag;
        if (u === 13) {
          if (t = U(l), t !== null) return t;
          t = null;
        } else if (u === 3) {
          if (l.stateNode.current.memoizedState.isDehydrated)
            return l.tag === 3 ? l.stateNode.containerInfo : null;
          t = null;
        } else l !== t && (t = null);
      }
    }
    return nc = t, null;
  }
  function ed(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (ih()) {
          case gr:
            return 2;
          case Sr:
            return 8;
          case We:
          case rh:
            return 32;
          case pr:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Vi = !1, Tu = null, zu = null, _u = null, Xe = /* @__PURE__ */ new Map(), Qe = /* @__PURE__ */ new Map(), Ou = [], T1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function nd(t, l) {
    switch (t) {
      case "focusin":
      case "focusout":
        Tu = null;
        break;
      case "dragenter":
      case "dragleave":
        zu = null;
        break;
      case "mouseover":
      case "mouseout":
        _u = null;
        break;
      case "pointerover":
      case "pointerout":
        Xe.delete(l.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Qe.delete(l.pointerId);
    }
  }
  function Ze(t, l, u, a, e, n) {
    return t === null || t.nativeEvent !== n ? (t = {
      blockedOn: l,
      domEventName: u,
      eventSystemFlags: a,
      nativeEvent: n,
      targetContainers: [e]
    }, l !== null && (l = la(l), l !== null && ad(l)), t) : (t.eventSystemFlags |= a, l = t.targetContainers, e !== null && l.indexOf(e) === -1 && l.push(e), t);
  }
  function z1(t, l, u, a, e) {
    switch (l) {
      case "focusin":
        return Tu = Ze(
          Tu,
          t,
          l,
          u,
          a,
          e
        ), !0;
      case "dragenter":
        return zu = Ze(
          zu,
          t,
          l,
          u,
          a,
          e
        ), !0;
      case "mouseover":
        return _u = Ze(
          _u,
          t,
          l,
          u,
          a,
          e
        ), !0;
      case "pointerover":
        var n = e.pointerId;
        return Xe.set(
          n,
          Ze(
            Xe.get(n) || null,
            t,
            l,
            u,
            a,
            e
          )
        ), !0;
      case "gotpointercapture":
        return n = e.pointerId, Qe.set(
          n,
          Ze(
            Qe.get(n) || null,
            t,
            l,
            u,
            a,
            e
          )
        ), !0;
    }
    return !1;
  }
  function cd(t) {
    var l = ta(t.target);
    if (l !== null) {
      var u = D(l);
      if (u !== null) {
        if (l = u.tag, l === 13) {
          if (l = U(u), l !== null) {
            t.blockedOn = l, gh(t.priority, function() {
              if (u.tag === 13) {
                var a = ol();
                a = xc(a);
                var e = ha(u, a);
                e !== null && dl(e, u, a), ji(u, a);
              }
            });
            return;
          }
        } else if (l === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function cc(t) {
    if (t.blockedOn !== null) return !1;
    for (var l = t.targetContainers; 0 < l.length; ) {
      var u = Qi(t.nativeEvent);
      if (u === null) {
        u = t.nativeEvent;
        var a = new u.constructor(
          u.type,
          u
        );
        Lc = a, u.target.dispatchEvent(a), Lc = null;
      } else
        return l = la(u), l !== null && ad(l), t.blockedOn = u, !1;
      l.shift();
    }
    return !0;
  }
  function fd(t, l, u) {
    cc(t) && u.delete(l);
  }
  function _1() {
    Vi = !1, Tu !== null && cc(Tu) && (Tu = null), zu !== null && cc(zu) && (zu = null), _u !== null && cc(_u) && (_u = null), Xe.forEach(fd), Qe.forEach(fd);
  }
  function fc(t, l) {
    t.blockedOn === l && (t.blockedOn = null, Vi || (Vi = !0, c.unstable_scheduleCallback(
      c.unstable_NormalPriority,
      _1
    )));
  }
  var ic = null;
  function id(t) {
    ic !== t && (ic = t, c.unstable_scheduleCallback(
      c.unstable_NormalPriority,
      function() {
        ic === t && (ic = null);
        for (var l = 0; l < t.length; l += 3) {
          var u = t[l], a = t[l + 1], e = t[l + 2];
          if (typeof a != "function") {
            if (Zi(a || u) === null)
              continue;
            break;
          }
          var n = la(u);
          n !== null && (t.splice(l, 3), l -= 3, Zf(
            n,
            {
              pending: !0,
              data: e,
              method: u.method,
              action: a
            },
            a,
            e
          ));
        }
      }
    ));
  }
  function Ve(t) {
    function l(d) {
      return fc(d, t);
    }
    Tu !== null && fc(Tu, t), zu !== null && fc(zu, t), _u !== null && fc(_u, t), Xe.forEach(l), Qe.forEach(l);
    for (var u = 0; u < Ou.length; u++) {
      var a = Ou[u];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < Ou.length && (u = Ou[0], u.blockedOn === null); )
      cd(u), u.blockedOn === null && Ou.shift();
    if (u = (t.ownerDocument || t).$$reactFormReplay, u != null)
      for (a = 0; a < u.length; a += 3) {
        var e = u[a], n = u[a + 1], f = e[It] || null;
        if (typeof n == "function")
          f || id(u);
        else if (f) {
          var i = null;
          if (n && n.hasAttribute("formAction")) {
            if (e = n, f = n[It] || null)
              i = f.formAction;
            else if (Zi(e) !== null) continue;
          } else i = f.action;
          typeof i == "function" ? u[a + 1] = i : (u.splice(a, 3), a -= 3), id(u);
        }
      }
  }
  function Li(t) {
    this._internalRoot = t;
  }
  rc.prototype.render = Li.prototype.render = function(t) {
    var l = this._internalRoot;
    if (l === null) throw Error(s(409));
    var u = l.current, a = ol();
    ld(u, a, t, l, null, null);
  }, rc.prototype.unmount = Li.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var l = t.containerInfo;
      ld(t.current, 2, null, t, null, null), Ln(), l[Pu] = null;
    }
  };
  function rc(t) {
    this._internalRoot = t;
  }
  rc.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var l = zr();
      t = { blockedOn: null, target: t, priority: l };
      for (var u = 0; u < Ou.length && l !== 0 && l < Ou[u].priority; u++) ;
      Ou.splice(u, 0, t), u === 0 && cd(t);
    }
  };
  var rd = r.version;
  if (rd !== "19.1.0")
    throw Error(
      s(
        527,
        rd,
        "19.1.0"
      )
    );
  H.findDOMNode = function(t) {
    var l = t._reactInternals;
    if (l === void 0)
      throw typeof t.render == "function" ? Error(s(188)) : (t = Object.keys(t).join(","), Error(s(268, t)));
    return t = M(l), t = t !== null ? E(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var O1 = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: A,
    reconcilerVersion: "19.1.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var sc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!sc.isDisabled && sc.supportsFiber)
      try {
        Ja = sc.inject(
          O1
        ), el = sc;
      } catch {
      }
  }
  return Ke.createRoot = function(t, l) {
    if (!b(t)) throw Error(s(299));
    var u = !1, a = "", e = _o, n = Oo, f = Do, i = null;
    return l != null && (l.unstable_strictMode === !0 && (u = !0), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (e = l.onUncaughtError), l.onCaughtError !== void 0 && (n = l.onCaughtError), l.onRecoverableError !== void 0 && (f = l.onRecoverableError), l.unstable_transitionCallbacks !== void 0 && (i = l.unstable_transitionCallbacks)), l = P0(
      t,
      1,
      !1,
      null,
      null,
      u,
      a,
      e,
      n,
      f,
      i,
      null
    ), t[Pu] = l.current, Oi(t), new Li(l);
  }, Ke.hydrateRoot = function(t, l, u) {
    if (!b(t)) throw Error(s(299));
    var a = !1, e = "", n = _o, f = Oo, i = Do, d = null, g = null;
    return u != null && (u.unstable_strictMode === !0 && (a = !0), u.identifierPrefix !== void 0 && (e = u.identifierPrefix), u.onUncaughtError !== void 0 && (n = u.onUncaughtError), u.onCaughtError !== void 0 && (f = u.onCaughtError), u.onRecoverableError !== void 0 && (i = u.onRecoverableError), u.unstable_transitionCallbacks !== void 0 && (d = u.unstable_transitionCallbacks), u.formState !== void 0 && (g = u.formState)), l = P0(
      t,
      1,
      !0,
      l,
      u ?? null,
      a,
      e,
      n,
      f,
      i,
      d,
      g
    ), l.context = td(null), u = l.current, a = ol(), a = xc(a), e = ru(a), e.callback = null, su(u, e, a), u = a, l.current.lanes = u, ka(l, u), xl(l), t[Pu] = l.current, Oi(t), new rc(l);
  }, Ke.version = "19.1.0", Ke;
}
var xd;
function Kv() {
  if (xd) return Fi.exports;
  xd = 1;
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (r) {
        console.error(r);
      }
  }
  return c(), Fi.exports = Lv(), Fi.exports;
}
var wv = Kv(), lr = {}, Jv = Object.defineProperty, $v = (c, r, o) => r in c ? Jv(c, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : c[r] = o, hc = (c, r, o) => $v(c, typeof r != "symbol" ? r + "" : r, o);
const kv = {
  stringify: (c) => c ? "true" : "false",
  parse: (c) => /^[ty1-9]/i.test(c)
}, Wv = {
  stringify: (c) => c.name,
  parse: (c, r, o) => {
    const s = (() => {
      if (typeof window < "u" && c in window)
        return window[c];
      if (typeof lr < "u" && c in lr)
        return lr[c];
    })();
    return typeof s == "function" ? s.bind(o) : void 0;
  }
}, Fv = {
  stringify: (c) => JSON.stringify(c),
  parse: (c) => JSON.parse(c)
}, Iv = {
  stringify: (c) => `${c}`,
  parse: (c) => parseFloat(c)
}, Pv = {
  stringify: (c) => c,
  parse: (c) => c
}, ur = {
  string: Pv,
  number: Iv,
  boolean: kv,
  function: Wv,
  json: Fv
};
function tm(c) {
  return c.replace(
    /([a-z0-9])([A-Z])/g,
    (r, o, s) => `${o}-${s.toLowerCase()}`
  );
}
const yc = Symbol.for("r2wc.render"), vc = Symbol.for("r2wc.connected"), $u = Symbol.for("r2wc.context"), lu = Symbol.for("r2wc.props");
function lm(c, r, o) {
  var s, b, D;
  r.props || (r.props = c.propTypes ? Object.keys(c.propTypes) : []), r.events || (r.events = []);
  const U = Array.isArray(r.props) ? r.props.slice() : Object.keys(r.props), B = Array.isArray(r.events) ? r.events.slice() : Object.keys(r.events), M = {}, E = {}, R = {}, C = {};
  for (const Y of U) {
    M[Y] = Array.isArray(r.props) ? "string" : r.props[Y];
    const j = tm(Y);
    R[Y] = j, C[j] = Y;
  }
  for (const Y of B)
    E[Y] = Array.isArray(r.events) ? {} : r.events[Y];
  class G extends HTMLElement {
    constructor() {
      super(), hc(this, D, !0), hc(this, b), hc(this, s, {}), hc(this, "container"), r.shadow ? this.container = this.attachShadow({
        mode: r.shadow
      }) : this.container = this, this[lu].container = this.container;
      for (const j of U) {
        const W = R[j], lt = this.getAttribute(W), ut = M[j], F = ut ? ur[ut] : null;
        F != null && F.parse && lt && (this[lu][j] = F.parse(lt, W, this));
      }
      for (const j of B)
        this[lu][j] = (W) => {
          const lt = j.replace(/^on/, "").toLowerCase();
          this.dispatchEvent(
            new CustomEvent(lt, { detail: W, ...E[j] })
          );
        };
    }
    static get observedAttributes() {
      return Object.keys(C);
    }
    connectedCallback() {
      this[vc] = !0, this[yc]();
    }
    disconnectedCallback() {
      this[vc] = !1, this[$u] && o.unmount(this[$u]), delete this[$u];
    }
    attributeChangedCallback(j, W, lt) {
      const ut = C[j], F = M[ut], k = F ? ur[F] : null;
      ut in M && k != null && k.parse && lt && (this[lu][ut] = k.parse(lt, j, this), this[yc]());
    }
    [(D = vc, b = $u, s = lu, yc)]() {
      this[vc] && (this[$u] ? o.update(this[$u], this[lu]) : this[$u] = o.mount(
        this.container,
        c,
        this[lu]
      ));
    }
  }
  for (const Y of U) {
    const j = R[Y], W = M[Y];
    Object.defineProperty(G.prototype, Y, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[lu][Y];
      },
      set(lt) {
        this[lu][Y] = lt;
        const ut = W ? ur[W] : null;
        if (ut != null && ut.stringify) {
          const F = ut.stringify(lt, j, this);
          this.getAttribute(j) !== F && this.setAttribute(j, F);
        } else
          this[yc]();
      }
    });
  }
  return G;
}
function um(c, r, o) {
  const s = wv.createRoot(c), b = Iu.createElement(r, o);
  return s.render(b), {
    root: s,
    ReactComponent: r
  };
}
function am({ root: c, ReactComponent: r }, o) {
  const s = Iu.createElement(r, o);
  c.render(s);
}
function em({ root: c }) {
  c.unmount();
}
function nm(c, r = {}) {
  return lm(c, r, { mount: um, update: am, unmount: em });
}
const cm = [
  {
    element: "backoffice-header",
    component: jv
  }
  /*{
    element: "my-button",
    component: Button,
    props: { label: "string", onClick: "function" },
  },
  {
    element: "my-card",
    component: Card,
  },
  {
    element: "my-footer",
    component: Footer,
  },
    {
    element: "my-header",
    component: Header,
  },*/
];
function Yd() {
  try {
    for (const c of cm)
      customElements.get(c.element) || (customElements.define(
        c.element,
        nm(c.component, {
          props: c.props || {},
          shadow: c.shadow || void 0
        })
      ), console.log(`${c.element} component registered`));
  } catch (c) {
    console.error("Error registering web components:", c);
  }
}
typeof document < "u" && document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", Yd) : Yd();
