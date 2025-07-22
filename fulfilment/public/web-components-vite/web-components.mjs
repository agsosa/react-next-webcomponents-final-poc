function Ny(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var kf = { exports: {} }, wu = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var d0;
function Hy() {
  if (d0) return wu;
  d0 = 1;
  var i = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function o(s, b, O) {
    var x = null;
    if (O !== void 0 && (x = "" + O), b.key !== void 0 && (x = "" + b.key), "key" in b) {
      O = {};
      for (var G in b)
        G !== "key" && (O[G] = b[G]);
    } else O = b;
    return b = O.ref, {
      $$typeof: i,
      type: s,
      key: x,
      ref: b !== void 0 ? b : null,
      props: O
    };
  }
  return wu.Fragment = r, wu.jsx = o, wu.jsxs = o, wu;
}
var h0;
function jy() {
  return h0 || (h0 = 1, kf.exports = Hy()), kf.exports;
}
var j = jy(), $f = { exports: {} }, et = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var y0;
function qy() {
  if (y0) return et;
  y0 = 1;
  var i = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), O = Symbol.for("react.consumer"), x = Symbol.for("react.context"), G = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), A = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), C = Symbol.iterator;
  function X(h) {
    return h === null || typeof h != "object" ? null : (h = C && h[C] || h["@@iterator"], typeof h == "function" ? h : null);
  }
  var q = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Q = Object.assign, I = {};
  function P(h, M, U) {
    this.props = h, this.context = M, this.refs = I, this.updater = U || q;
  }
  P.prototype.isReactComponent = {}, P.prototype.setState = function(h, M) {
    if (typeof h != "object" && typeof h != "function" && h != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, h, M, "setState");
  }, P.prototype.forceUpdate = function(h) {
    this.updater.enqueueForceUpdate(this, h, "forceUpdate");
  };
  function tt() {
  }
  tt.prototype = P.prototype;
  function Y(h, M, U) {
    this.props = h, this.context = M, this.refs = I, this.updater = U || q;
  }
  var L = Y.prototype = new tt();
  L.constructor = Y, Q(L, P.prototype), L.isPureReactComponent = !0;
  var st = Array.isArray, K = { H: null, A: null, T: null, S: null, V: null }, lt = Object.prototype.hasOwnProperty;
  function k(h, M, U, H, V, ct) {
    return U = ct.ref, {
      $$typeof: i,
      type: h,
      key: M,
      ref: U !== void 0 ? U : null,
      props: ct
    };
  }
  function xt(h, M) {
    return k(
      h.type,
      M,
      void 0,
      void 0,
      void 0,
      h.props
    );
  }
  function It(h) {
    return typeof h == "object" && h !== null && h.$$typeof === i;
  }
  function ne(h) {
    var M = { "=": "=0", ":": "=2" };
    return "$" + h.replace(/[=:]/g, function(U) {
      return M[U];
    });
  }
  var _l = /\/+/g;
  function Bt(h, M) {
    return typeof h == "object" && h !== null && h.key != null ? ne("" + h.key) : M.toString(36);
  }
  function Gl() {
  }
  function Xl(h) {
    switch (h.status) {
      case "fulfilled":
        return h.value;
      case "rejected":
        throw h.reason;
      default:
        switch (typeof h.status == "string" ? h.then(Gl, Gl) : (h.status = "pending", h.then(
          function(M) {
            h.status === "pending" && (h.status = "fulfilled", h.value = M);
          },
          function(M) {
            h.status === "pending" && (h.status = "rejected", h.reason = M);
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
  function Ct(h, M, U, H, V) {
    var ct = typeof h;
    (ct === "undefined" || ct === "boolean") && (h = null);
    var $ = !1;
    if (h === null) $ = !0;
    else
      switch (ct) {
        case "bigint":
        case "string":
        case "number":
          $ = !0;
          break;
        case "object":
          switch (h.$$typeof) {
            case i:
            case r:
              $ = !0;
              break;
            case _:
              return $ = h._init, Ct(
                $(h._payload),
                M,
                U,
                H,
                V
              );
          }
      }
    if ($)
      return V = V(h), $ = H === "" ? "." + Bt(h, 0) : H, st(V) ? (U = "", $ != null && (U = $.replace(_l, "$&/") + "/"), Ct(V, M, U, "", function(kt) {
        return kt;
      })) : V != null && (It(V) && (V = xt(
        V,
        U + (V.key == null || h && h.key === V.key ? "" : ("" + V.key).replace(
          _l,
          "$&/"
        ) + "/") + $
      )), M.push(V)), 1;
    $ = 0;
    var Gt = H === "" ? "." : H + ":";
    if (st(h))
      for (var yt = 0; yt < h.length; yt++)
        H = h[yt], ct = Gt + Bt(H, yt), $ += Ct(
          H,
          M,
          U,
          ct,
          V
        );
    else if (yt = X(h), typeof yt == "function")
      for (h = yt.call(h), yt = 0; !(H = h.next()).done; )
        H = H.value, ct = Gt + Bt(H, yt++), $ += Ct(
          H,
          M,
          U,
          ct,
          V
        );
    else if (ct === "object") {
      if (typeof h.then == "function")
        return Ct(
          Xl(h),
          M,
          U,
          H,
          V
        );
      throw M = String(h), Error(
        "Objects are not valid as a React child (found: " + (M === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : M) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return $;
  }
  function E(h, M, U) {
    if (h == null) return h;
    var H = [], V = 0;
    return Ct(h, H, "", "", function(ct) {
      return M.call(U, ct, V++);
    }), H;
  }
  function N(h) {
    if (h._status === -1) {
      var M = h._result;
      M = M(), M.then(
        function(U) {
          (h._status === 0 || h._status === -1) && (h._status = 1, h._result = U);
        },
        function(U) {
          (h._status === 0 || h._status === -1) && (h._status = 2, h._result = U);
        }
      ), h._status === -1 && (h._status = 0, h._result = M);
    }
    if (h._status === 1) return h._result.default;
    throw h._result;
  }
  var w = typeof reportError == "function" ? reportError : function(h) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var M = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h),
        error: h
      });
      if (!window.dispatchEvent(M)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", h);
      return;
    }
    console.error(h);
  };
  function it() {
  }
  return et.Children = {
    map: E,
    forEach: function(h, M, U) {
      E(
        h,
        function() {
          M.apply(this, arguments);
        },
        U
      );
    },
    count: function(h) {
      var M = 0;
      return E(h, function() {
        M++;
      }), M;
    },
    toArray: function(h) {
      return E(h, function(M) {
        return M;
      }) || [];
    },
    only: function(h) {
      if (!It(h))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return h;
    }
  }, et.Component = P, et.Fragment = o, et.Profiler = b, et.PureComponent = Y, et.StrictMode = s, et.Suspense = R, et.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = K, et.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(h) {
      return K.H.useMemoCache(h);
    }
  }, et.cache = function(h) {
    return function() {
      return h.apply(null, arguments);
    };
  }, et.cloneElement = function(h, M, U) {
    if (h == null)
      throw Error(
        "The argument must be a React element, but you passed " + h + "."
      );
    var H = Q({}, h.props), V = h.key, ct = void 0;
    if (M != null)
      for ($ in M.ref !== void 0 && (ct = void 0), M.key !== void 0 && (V = "" + M.key), M)
        !lt.call(M, $) || $ === "key" || $ === "__self" || $ === "__source" || $ === "ref" && M.ref === void 0 || (H[$] = M[$]);
    var $ = arguments.length - 2;
    if ($ === 1) H.children = U;
    else if (1 < $) {
      for (var Gt = Array($), yt = 0; yt < $; yt++)
        Gt[yt] = arguments[yt + 2];
      H.children = Gt;
    }
    return k(h.type, V, void 0, void 0, ct, H);
  }, et.createContext = function(h) {
    return h = {
      $$typeof: x,
      _currentValue: h,
      _currentValue2: h,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, h.Provider = h, h.Consumer = {
      $$typeof: O,
      _context: h
    }, h;
  }, et.createElement = function(h, M, U) {
    var H, V = {}, ct = null;
    if (M != null)
      for (H in M.key !== void 0 && (ct = "" + M.key), M)
        lt.call(M, H) && H !== "key" && H !== "__self" && H !== "__source" && (V[H] = M[H]);
    var $ = arguments.length - 2;
    if ($ === 1) V.children = U;
    else if (1 < $) {
      for (var Gt = Array($), yt = 0; yt < $; yt++)
        Gt[yt] = arguments[yt + 2];
      V.children = Gt;
    }
    if (h && h.defaultProps)
      for (H in $ = h.defaultProps, $)
        V[H] === void 0 && (V[H] = $[H]);
    return k(h, ct, void 0, void 0, null, V);
  }, et.createRef = function() {
    return { current: null };
  }, et.forwardRef = function(h) {
    return { $$typeof: G, render: h };
  }, et.isValidElement = It, et.lazy = function(h) {
    return {
      $$typeof: _,
      _payload: { _status: -1, _result: h },
      _init: N
    };
  }, et.memo = function(h, M) {
    return {
      $$typeof: A,
      type: h,
      compare: M === void 0 ? null : M
    };
  }, et.startTransition = function(h) {
    var M = K.T, U = {};
    K.T = U;
    try {
      var H = h(), V = K.S;
      V !== null && V(U, H), typeof H == "object" && H !== null && typeof H.then == "function" && H.then(it, w);
    } catch (ct) {
      w(ct);
    } finally {
      K.T = M;
    }
  }, et.unstable_useCacheRefresh = function() {
    return K.H.useCacheRefresh();
  }, et.use = function(h) {
    return K.H.use(h);
  }, et.useActionState = function(h, M, U) {
    return K.H.useActionState(h, M, U);
  }, et.useCallback = function(h, M) {
    return K.H.useCallback(h, M);
  }, et.useContext = function(h) {
    return K.H.useContext(h);
  }, et.useDebugValue = function() {
  }, et.useDeferredValue = function(h, M) {
    return K.H.useDeferredValue(h, M);
  }, et.useEffect = function(h, M, U) {
    var H = K.H;
    if (typeof U == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return H.useEffect(h, M);
  }, et.useId = function() {
    return K.H.useId();
  }, et.useImperativeHandle = function(h, M, U) {
    return K.H.useImperativeHandle(h, M, U);
  }, et.useInsertionEffect = function(h, M) {
    return K.H.useInsertionEffect(h, M);
  }, et.useLayoutEffect = function(h, M) {
    return K.H.useLayoutEffect(h, M);
  }, et.useMemo = function(h, M) {
    return K.H.useMemo(h, M);
  }, et.useOptimistic = function(h, M) {
    return K.H.useOptimistic(h, M);
  }, et.useReducer = function(h, M, U) {
    return K.H.useReducer(h, M, U);
  }, et.useRef = function(h) {
    return K.H.useRef(h);
  }, et.useState = function(h) {
    return K.H.useState(h);
  }, et.useSyncExternalStore = function(h, M, U) {
    return K.H.useSyncExternalStore(
      h,
      M,
      U
    );
  }, et.useTransition = function() {
    return K.H.useTransition();
  }, et.version = "19.1.0", et;
}
var v0;
function hr() {
  return v0 || (v0 = 1, $f.exports = qy()), $f.exports;
}
var Ue = hr();
const la = /* @__PURE__ */ Ny(Ue);
var nl = function() {
  return nl = Object.assign || function(r) {
    for (var o, s = 1, b = arguments.length; s < b; s++) {
      o = arguments[s];
      for (var O in o) Object.prototype.hasOwnProperty.call(o, O) && (r[O] = o[O]);
    }
    return r;
  }, nl.apply(this, arguments);
};
function zi(i, r, o) {
  if (o || arguments.length === 2) for (var s = 0, b = r.length, O; s < b; s++)
    (O || !(s in r)) && (O || (O = Array.prototype.slice.call(r, 0, s)), O[s] = r[s]);
  return i.concat(O || Array.prototype.slice.call(r));
}
var Tt = "-ms-", Wu = "-moz-", vt = "-webkit-", X0 = "comm", Mi = "rule", yr = "decl", Yy = "@import", Q0 = "@keyframes", By = "@layer", Z0 = Math.abs, vr = String.fromCharCode, ir = Object.assign;
function Cy(i, r) {
  return Vt(i, 0) ^ 45 ? (((r << 2 ^ Vt(i, 0)) << 2 ^ Vt(i, 1)) << 2 ^ Vt(i, 2)) << 2 ^ Vt(i, 3) : 0;
}
function L0(i) {
  return i.trim();
}
function ue(i, r) {
  return (i = r.exec(i)) ? i[0] : i;
}
function at(i, r, o) {
  return i.replace(r, o);
}
function Si(i, r, o) {
  return i.indexOf(r, o);
}
function Vt(i, r) {
  return i.charCodeAt(r) | 0;
}
function La(i, r, o) {
  return i.slice(r, o);
}
function Cl(i) {
  return i.length;
}
function V0(i) {
  return i.length;
}
function $u(i, r) {
  return r.push(i), i;
}
function Gy(i, r) {
  return i.map(r).join("");
}
function m0(i, r) {
  return i.filter(function(o) {
    return !ue(o, r);
  });
}
var Ri = 1, Va = 1, K0 = 0, Ol = 0, Ht = 0, ka = "";
function xi(i, r, o, s, b, O, x, G) {
  return { value: i, root: r, parent: o, type: s, props: b, children: O, line: Ri, column: Va, length: x, return: "", siblings: G };
}
function xe(i, r) {
  return ir(xi("", null, null, "", null, null, 0, i.siblings), i, { length: -i.length }, r);
}
function Qa(i) {
  for (; i.root; )
    i = xe(i.root, { children: [i] });
  $u(i, i.siblings);
}
function Xy() {
  return Ht;
}
function Qy() {
  return Ht = Ol > 0 ? Vt(ka, --Ol) : 0, Va--, Ht === 10 && (Va = 1, Ri--), Ht;
}
function xl() {
  return Ht = Ol < K0 ? Vt(ka, Ol++) : 0, Va++, Ht === 10 && (Va = 1, Ri++), Ht;
}
function Pe() {
  return Vt(ka, Ol);
}
function bi() {
  return Ol;
}
function Ui(i, r) {
  return La(ka, i, r);
}
function cr(i) {
  switch (i) {
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
function Zy(i) {
  return Ri = Va = 1, K0 = Cl(ka = i), Ol = 0, [];
}
function Ly(i) {
  return ka = "", i;
}
function Wf(i) {
  return L0(Ui(Ol - 1, fr(i === 91 ? i + 2 : i === 40 ? i + 1 : i)));
}
function Vy(i) {
  for (; (Ht = Pe()) && Ht < 33; )
    xl();
  return cr(i) > 2 || cr(Ht) > 3 ? "" : " ";
}
function Ky(i, r) {
  for (; --r && xl() && !(Ht < 48 || Ht > 102 || Ht > 57 && Ht < 65 || Ht > 70 && Ht < 97); )
    ;
  return Ui(i, bi() + (r < 6 && Pe() == 32 && xl() == 32));
}
function fr(i) {
  for (; xl(); )
    switch (Ht) {
      // ] ) " '
      case i:
        return Ol;
      // " '
      case 34:
      case 39:
        i !== 34 && i !== 39 && fr(Ht);
        break;
      // (
      case 40:
        i === 41 && fr(i);
        break;
      // \
      case 92:
        xl();
        break;
    }
  return Ol;
}
function wy(i, r) {
  for (; xl() && i + Ht !== 57; )
    if (i + Ht === 84 && Pe() === 47)
      break;
  return "/*" + Ui(r, Ol - 1) + "*" + vr(i === 47 ? i : xl());
}
function Jy(i) {
  for (; !cr(Pe()); )
    xl();
  return Ui(i, Ol);
}
function ky(i) {
  return Ly(Ai("", null, null, null, [""], i = Zy(i), 0, [0], i));
}
function Ai(i, r, o, s, b, O, x, G, R) {
  for (var A = 0, _ = 0, C = x, X = 0, q = 0, Q = 0, I = 1, P = 1, tt = 1, Y = 0, L = "", st = b, K = O, lt = s, k = L; P; )
    switch (Q = Y, Y = xl()) {
      // (
      case 40:
        if (Q != 108 && Vt(k, C - 1) == 58) {
          Si(k += at(Wf(Y), "&", "&\f"), "&\f", Z0(A ? G[A - 1] : 0)) != -1 && (tt = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        k += Wf(Y);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        k += Vy(Q);
        break;
      // \
      case 92:
        k += Ky(bi() - 1, 7);
        continue;
      // /
      case 47:
        switch (Pe()) {
          case 42:
          case 47:
            $u($y(wy(xl(), bi()), r, o, R), R);
            break;
          default:
            k += "/";
        }
        break;
      // {
      case 123 * I:
        G[A++] = Cl(k) * tt;
      // } ; \0
      case 125 * I:
      case 59:
      case 0:
        switch (Y) {
          // \0 }
          case 0:
          case 125:
            P = 0;
          // ;
          case 59 + _:
            tt == -1 && (k = at(k, /\f/g, "")), q > 0 && Cl(k) - C && $u(q > 32 ? p0(k + ";", s, o, C - 1, R) : p0(at(k, " ", "") + ";", s, o, C - 2, R), R);
            break;
          // @ ;
          case 59:
            k += ";";
          // { rule/at-rule
          default:
            if ($u(lt = g0(k, r, o, A, _, b, G, L, st = [], K = [], C, O), O), Y === 123)
              if (_ === 0)
                Ai(k, r, lt, lt, st, O, C, G, K);
              else
                switch (X === 99 && Vt(k, 3) === 110 ? 100 : X) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ai(i, lt, lt, s && $u(g0(i, lt, lt, 0, 0, b, G, L, b, st = [], C, K), K), b, K, C, G, s ? st : K);
                    break;
                  default:
                    Ai(k, lt, lt, lt, [""], K, 0, G, K);
                }
        }
        A = _ = q = 0, I = tt = 1, L = k = "", C = x;
        break;
      // :
      case 58:
        C = 1 + Cl(k), q = Q;
      default:
        if (I < 1) {
          if (Y == 123)
            --I;
          else if (Y == 125 && I++ == 0 && Qy() == 125)
            continue;
        }
        switch (k += vr(Y), Y * I) {
          // &
          case 38:
            tt = _ > 0 ? 1 : (k += "\f", -1);
            break;
          // ,
          case 44:
            G[A++] = (Cl(k) - 1) * tt, tt = 1;
            break;
          // @
          case 64:
            Pe() === 45 && (k += Wf(xl())), X = Pe(), _ = C = Cl(L = k += Jy(bi())), Y++;
            break;
          // -
          case 45:
            Q === 45 && Cl(k) == 2 && (I = 0);
        }
    }
  return O;
}
function g0(i, r, o, s, b, O, x, G, R, A, _, C) {
  for (var X = b - 1, q = b === 0 ? O : [""], Q = V0(q), I = 0, P = 0, tt = 0; I < s; ++I)
    for (var Y = 0, L = La(i, X + 1, X = Z0(P = x[I])), st = i; Y < Q; ++Y)
      (st = L0(P > 0 ? q[Y] + " " + L : at(L, /&\f/g, q[Y]))) && (R[tt++] = st);
  return xi(i, r, o, b === 0 ? Mi : G, R, A, _, C);
}
function $y(i, r, o, s) {
  return xi(i, r, o, X0, vr(Xy()), La(i, 2, -2), 0, s);
}
function p0(i, r, o, s, b) {
  return xi(i, r, o, yr, La(i, 0, s), La(i, s + 1, -1), s, b);
}
function w0(i, r, o) {
  switch (Cy(i, r)) {
    // color-adjust
    case 5103:
      return vt + "print-" + i + i;
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
      return vt + i + i;
    // tab-size
    case 4789:
      return Wu + i + i;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return vt + i + Wu + i + Tt + i + i;
    // writing-mode
    case 5936:
      switch (Vt(i, r + 11)) {
        // vertical-l(r)
        case 114:
          return vt + i + Tt + at(i, /[svh]\w+-[tblr]{2}/, "tb") + i;
        // vertical-r(l)
        case 108:
          return vt + i + Tt + at(i, /[svh]\w+-[tblr]{2}/, "tb-rl") + i;
        // horizontal(-)tb
        case 45:
          return vt + i + Tt + at(i, /[svh]\w+-[tblr]{2}/, "lr") + i;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return vt + i + Tt + i + i;
    // order
    case 6165:
      return vt + i + Tt + "flex-" + i + i;
    // align-items
    case 5187:
      return vt + i + at(i, /(\w+).+(:[^]+)/, vt + "box-$1$2" + Tt + "flex-$1$2") + i;
    // align-self
    case 5443:
      return vt + i + Tt + "flex-item-" + at(i, /flex-|-self/g, "") + (ue(i, /flex-|baseline/) ? "" : Tt + "grid-row-" + at(i, /flex-|-self/g, "")) + i;
    // align-content
    case 4675:
      return vt + i + Tt + "flex-line-pack" + at(i, /align-content|flex-|-self/g, "") + i;
    // flex-shrink
    case 5548:
      return vt + i + Tt + at(i, "shrink", "negative") + i;
    // flex-basis
    case 5292:
      return vt + i + Tt + at(i, "basis", "preferred-size") + i;
    // flex-grow
    case 6060:
      return vt + "box-" + at(i, "-grow", "") + vt + i + Tt + at(i, "grow", "positive") + i;
    // transition
    case 4554:
      return vt + at(i, /([^-])(transform)/g, "$1" + vt + "$2") + i;
    // cursor
    case 6187:
      return at(at(at(i, /(zoom-|grab)/, vt + "$1"), /(image-set)/, vt + "$1"), i, "") + i;
    // background, background-image
    case 5495:
    case 3959:
      return at(i, /(image-set\([^]*)/, vt + "$1$`$1");
    // justify-content
    case 4968:
      return at(at(i, /(.+:)(flex-)?(.*)/, vt + "box-pack:$3" + Tt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + vt + i + i;
    // justify-self
    case 4200:
      if (!ue(i, /flex-|baseline/)) return Tt + "grid-column-align" + La(i, r) + i;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return Tt + at(i, "template-", "") + i;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return o && o.some(function(s, b) {
        return r = b, ue(s.props, /grid-\w+-end/);
      }) ? ~Si(i + (o = o[r].value), "span", 0) ? i : Tt + at(i, "-start", "") + i + Tt + "grid-row-span:" + (~Si(o, "span", 0) ? ue(o, /\d+/) : +ue(o, /\d+/) - +ue(i, /\d+/)) + ";" : Tt + at(i, "-start", "") + i;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return o && o.some(function(s) {
        return ue(s.props, /grid-\w+-start/);
      }) ? i : Tt + at(at(i, "-end", "-span"), "span ", "") + i;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return at(i, /(.+)-inline(.+)/, vt + "$1$2") + i;
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
      if (Cl(i) - 1 - r > 6)
        switch (Vt(i, r + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (Vt(i, r + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return at(i, /(.+:)(.+)-([^]+)/, "$1" + vt + "$2-$3$1" + Wu + (Vt(i, r + 3) == 108 ? "$3" : "$2-$3")) + i;
          // (s)tretch
          case 115:
            return ~Si(i, "stretch", 0) ? w0(at(i, "stretch", "fill-available"), r, o) + i : i;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return at(i, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(s, b, O, x, G, R, A) {
        return Tt + b + ":" + O + A + (x ? Tt + b + "-span:" + (G ? R : +R - +O) + A : "") + i;
      });
    // position: sticky
    case 4949:
      if (Vt(i, r + 6) === 121)
        return at(i, ":", ":" + vt) + i;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (Vt(i, Vt(i, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return at(i, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + vt + (Vt(i, 14) === 45 ? "inline-" : "") + "box$3$1" + vt + "$2$3$1" + Tt + "$2box$3") + i;
        // (inline-)?gri(d)
        case 100:
          return at(i, ":", ":" + Tt) + i;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return at(i, "scroll-", "scroll-snap-") + i;
  }
  return i;
}
function Oi(i, r) {
  for (var o = "", s = 0; s < i.length; s++)
    o += r(i[s], s, i, r) || "";
  return o;
}
function Wy(i, r, o, s) {
  switch (i.type) {
    case By:
      if (i.children.length) break;
    case Yy:
    case yr:
      return i.return = i.return || i.value;
    case X0:
      return "";
    case Q0:
      return i.return = i.value + "{" + Oi(i.children, s) + "}";
    case Mi:
      if (!Cl(i.value = i.props.join(","))) return "";
  }
  return Cl(o = Oi(i.children, s)) ? i.return = i.value + "{" + o + "}" : "";
}
function Fy(i) {
  var r = V0(i);
  return function(o, s, b, O) {
    for (var x = "", G = 0; G < r; G++)
      x += i[G](o, s, b, O) || "";
    return x;
  };
}
function Iy(i) {
  return function(r) {
    r.root || (r = r.return) && i(r);
  };
}
function Py(i, r, o, s) {
  if (i.length > -1 && !i.return)
    switch (i.type) {
      case yr:
        i.return = w0(i.value, i.length, o);
        return;
      case Q0:
        return Oi([xe(i, { value: at(i.value, "@", "@" + vt) })], s);
      case Mi:
        if (i.length)
          return Gy(o = i.props, function(b) {
            switch (ue(b, s = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                Qa(xe(i, { props: [at(b, /:(read-\w+)/, ":" + Wu + "$1")] })), Qa(xe(i, { props: [b] })), ir(i, { props: m0(o, s) });
                break;
              // :placeholder
              case "::placeholder":
                Qa(xe(i, { props: [at(b, /:(plac\w+)/, ":" + vt + "input-$1")] })), Qa(xe(i, { props: [at(b, /:(plac\w+)/, ":" + Wu + "$1")] })), Qa(xe(i, { props: [at(b, /:(plac\w+)/, Tt + "input-$1")] })), Qa(xe(i, { props: [b] })), ir(i, { props: m0(o, s) });
                break;
            }
            return "";
          });
    }
}
var tv = {
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
}, Ka = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", J0 = "active", k0 = "data-styled-version", Ni = "6.1.19", mr = `/*!sc*/
`, _i = typeof window < "u" && typeof document < "u", lv = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" && process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY), Hi = Object.freeze([]), wa = Object.freeze({});
function ev(i, r, o) {
  return o === void 0 && (o = wa), i.theme !== o.theme && i.theme || r || o.theme;
}
var $0 = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), av = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, uv = /(^-|-$)/g;
function S0(i) {
  return i.replace(av, "-").replace(uv, "");
}
var nv = /(a)(d)/gi, yi = 52, b0 = function(i) {
  return String.fromCharCode(i + (i > 25 ? 39 : 97));
};
function rr(i) {
  var r, o = "";
  for (r = Math.abs(i); r > yi; r = r / yi | 0) o = b0(r % yi) + o;
  return (b0(r % yi) + o).replace(nv, "$1-$2");
}
var Ff, W0 = 5381, Za = function(i, r) {
  for (var o = r.length; o; ) i = 33 * i ^ r.charCodeAt(--o);
  return i;
}, F0 = function(i) {
  return Za(W0, i);
};
function iv(i) {
  return rr(F0(i) >>> 0);
}
function cv(i) {
  return i.displayName || i.name || "Component";
}
function If(i) {
  return typeof i == "string" && !0;
}
var I0 = typeof Symbol == "function" && Symbol.for, P0 = I0 ? Symbol.for("react.memo") : 60115, fv = I0 ? Symbol.for("react.forward_ref") : 60112, rv = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, sv = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, th = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, ov = ((Ff = {})[fv] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Ff[P0] = th, Ff);
function A0(i) {
  return ("type" in (r = i) && r.type.$$typeof) === P0 ? th : "$$typeof" in i ? ov[i.$$typeof] : rv;
  var r;
}
var dv = Object.defineProperty, hv = Object.getOwnPropertyNames, E0 = Object.getOwnPropertySymbols, yv = Object.getOwnPropertyDescriptor, vv = Object.getPrototypeOf, T0 = Object.prototype;
function lh(i, r, o) {
  if (typeof r != "string") {
    if (T0) {
      var s = vv(r);
      s && s !== T0 && lh(i, s, o);
    }
    var b = hv(r);
    E0 && (b = b.concat(E0(r)));
    for (var O = A0(i), x = A0(r), G = 0; G < b.length; ++G) {
      var R = b[G];
      if (!(R in sv || o && o[R] || x && R in x || O && R in O)) {
        var A = yv(r, R);
        try {
          dv(i, R, A);
        } catch {
        }
      }
    }
  }
  return i;
}
function Ja(i) {
  return typeof i == "function";
}
function gr(i) {
  return typeof i == "object" && "styledComponentId" in i;
}
function Ie(i, r) {
  return i && r ? "".concat(i, " ").concat(r) : i || r || "";
}
function z0(i, r) {
  if (i.length === 0) return "";
  for (var o = i[0], s = 1; s < i.length; s++) o += i[s];
  return o;
}
function Fu(i) {
  return i !== null && typeof i == "object" && i.constructor.name === Object.name && !("props" in i && i.$$typeof);
}
function sr(i, r, o) {
  if (o === void 0 && (o = !1), !o && !Fu(i) && !Array.isArray(i)) return r;
  if (Array.isArray(r)) for (var s = 0; s < r.length; s++) i[s] = sr(i[s], r[s]);
  else if (Fu(r)) for (var s in r) i[s] = sr(i[s], r[s]);
  return i;
}
function pr(i, r) {
  Object.defineProperty(i, "toString", { value: r });
}
function Iu(i) {
  for (var r = [], o = 1; o < arguments.length; o++) r[o - 1] = arguments[o];
  return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i, " for more information.").concat(r.length > 0 ? " Args: ".concat(r.join(", ")) : ""));
}
var mv = function() {
  function i(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  return i.prototype.indexOfGroup = function(r) {
    for (var o = 0, s = 0; s < r; s++) o += this.groupSizes[s];
    return o;
  }, i.prototype.insertRules = function(r, o) {
    if (r >= this.groupSizes.length) {
      for (var s = this.groupSizes, b = s.length, O = b; r >= O; ) if ((O <<= 1) < 0) throw Iu(16, "".concat(r));
      this.groupSizes = new Uint32Array(O), this.groupSizes.set(s), this.length = O;
      for (var x = b; x < O; x++) this.groupSizes[x] = 0;
    }
    for (var G = this.indexOfGroup(r + 1), R = (x = 0, o.length); x < R; x++) this.tag.insertRule(G, o[x]) && (this.groupSizes[r]++, G++);
  }, i.prototype.clearGroup = function(r) {
    if (r < this.length) {
      var o = this.groupSizes[r], s = this.indexOfGroup(r), b = s + o;
      this.groupSizes[r] = 0;
      for (var O = s; O < b; O++) this.tag.deleteRule(s);
    }
  }, i.prototype.getGroup = function(r) {
    var o = "";
    if (r >= this.length || this.groupSizes[r] === 0) return o;
    for (var s = this.groupSizes[r], b = this.indexOfGroup(r), O = b + s, x = b; x < O; x++) o += "".concat(this.tag.getRule(x)).concat(mr);
    return o;
  }, i;
}(), Ei = /* @__PURE__ */ new Map(), Di = /* @__PURE__ */ new Map(), Ti = 1, vi = function(i) {
  if (Ei.has(i)) return Ei.get(i);
  for (; Di.has(Ti); ) Ti++;
  var r = Ti++;
  return Ei.set(i, r), Di.set(r, i), r;
}, gv = function(i, r) {
  Ti = r + 1, Ei.set(i, r), Di.set(r, i);
}, pv = "style[".concat(Ka, "][").concat(k0, '="').concat(Ni, '"]'), Sv = new RegExp("^".concat(Ka, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), bv = function(i, r, o) {
  for (var s, b = o.split(","), O = 0, x = b.length; O < x; O++) (s = b[O]) && i.registerName(r, s);
}, Av = function(i, r) {
  for (var o, s = ((o = r.textContent) !== null && o !== void 0 ? o : "").split(mr), b = [], O = 0, x = s.length; O < x; O++) {
    var G = s[O].trim();
    if (G) {
      var R = G.match(Sv);
      if (R) {
        var A = 0 | parseInt(R[1], 10), _ = R[2];
        A !== 0 && (gv(_, A), bv(i, _, R[3]), i.getTag().insertRules(A, b)), b.length = 0;
      } else b.push(G);
    }
  }
}, O0 = function(i) {
  for (var r = document.querySelectorAll(pv), o = 0, s = r.length; o < s; o++) {
    var b = r[o];
    b && b.getAttribute(Ka) !== J0 && (Av(i, b), b.parentNode && b.parentNode.removeChild(b));
  }
};
function Ev() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var eh = function(i) {
  var r = document.head, o = i || r, s = document.createElement("style"), b = function(G) {
    var R = Array.from(G.querySelectorAll("style[".concat(Ka, "]")));
    return R[R.length - 1];
  }(o), O = b !== void 0 ? b.nextSibling : null;
  s.setAttribute(Ka, J0), s.setAttribute(k0, Ni);
  var x = Ev();
  return x && s.setAttribute("nonce", x), o.insertBefore(s, O), s;
}, Tv = function() {
  function i(r) {
    this.element = eh(r), this.element.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet) return o.sheet;
      for (var s = document.styleSheets, b = 0, O = s.length; b < O; b++) {
        var x = s[b];
        if (x.ownerNode === o) return x;
      }
      throw Iu(17);
    }(this.element), this.length = 0;
  }
  return i.prototype.insertRule = function(r, o) {
    try {
      return this.sheet.insertRule(o, r), this.length++, !0;
    } catch {
      return !1;
    }
  }, i.prototype.deleteRule = function(r) {
    this.sheet.deleteRule(r), this.length--;
  }, i.prototype.getRule = function(r) {
    var o = this.sheet.cssRules[r];
    return o && o.cssText ? o.cssText : "";
  }, i;
}(), zv = function() {
  function i(r) {
    this.element = eh(r), this.nodes = this.element.childNodes, this.length = 0;
  }
  return i.prototype.insertRule = function(r, o) {
    if (r <= this.length && r >= 0) {
      var s = document.createTextNode(o);
      return this.element.insertBefore(s, this.nodes[r] || null), this.length++, !0;
    }
    return !1;
  }, i.prototype.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, i.prototype.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, i;
}(), Ov = function() {
  function i(r) {
    this.rules = [], this.length = 0;
  }
  return i.prototype.insertRule = function(r, o) {
    return r <= this.length && (this.rules.splice(r, 0, o), this.length++, !0);
  }, i.prototype.deleteRule = function(r) {
    this.rules.splice(r, 1), this.length--;
  }, i.prototype.getRule = function(r) {
    return r < this.length ? this.rules[r] : "";
  }, i;
}(), _0 = _i, _v = { isServer: !_i, useCSSOMInjection: !lv }, ah = function() {
  function i(r, o, s) {
    r === void 0 && (r = wa), o === void 0 && (o = {});
    var b = this;
    this.options = nl(nl({}, _v), r), this.gs = o, this.names = new Map(s), this.server = !!r.isServer, !this.server && _i && _0 && (_0 = !1, O0(this)), pr(this, function() {
      return function(O) {
        for (var x = O.getTag(), G = x.length, R = "", A = function(C) {
          var X = function(tt) {
            return Di.get(tt);
          }(C);
          if (X === void 0) return "continue";
          var q = O.names.get(X), Q = x.getGroup(C);
          if (q === void 0 || !q.size || Q.length === 0) return "continue";
          var I = "".concat(Ka, ".g").concat(C, '[id="').concat(X, '"]'), P = "";
          q !== void 0 && q.forEach(function(tt) {
            tt.length > 0 && (P += "".concat(tt, ","));
          }), R += "".concat(Q).concat(I, '{content:"').concat(P, '"}').concat(mr);
        }, _ = 0; _ < G; _++) A(_);
        return R;
      }(b);
    });
  }
  return i.registerId = function(r) {
    return vi(r);
  }, i.prototype.rehydrate = function() {
    !this.server && _i && O0(this);
  }, i.prototype.reconstructWithOptions = function(r, o) {
    return o === void 0 && (o = !0), new i(nl(nl({}, this.options), r), this.gs, o && this.names || void 0);
  }, i.prototype.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, i.prototype.getTag = function() {
    return this.tag || (this.tag = (r = function(o) {
      var s = o.useCSSOMInjection, b = o.target;
      return o.isServer ? new Ov(b) : s ? new Tv(b) : new zv(b);
    }(this.options), new mv(r)));
    var r;
  }, i.prototype.hasNameForId = function(r, o) {
    return this.names.has(r) && this.names.get(r).has(o);
  }, i.prototype.registerName = function(r, o) {
    if (vi(r), this.names.has(r)) this.names.get(r).add(o);
    else {
      var s = /* @__PURE__ */ new Set();
      s.add(o), this.names.set(r, s);
    }
  }, i.prototype.insertRules = function(r, o, s) {
    this.registerName(r, o), this.getTag().insertRules(vi(r), s);
  }, i.prototype.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, i.prototype.clearRules = function(r) {
    this.getTag().clearGroup(vi(r)), this.clearNames(r);
  }, i.prototype.clearTag = function() {
    this.tag = void 0;
  }, i;
}(), Dv = /&/g, Mv = /^\s*\/\/.*$/gm;
function uh(i, r) {
  return i.map(function(o) {
    return o.type === "rule" && (o.value = "".concat(r, " ").concat(o.value), o.value = o.value.replaceAll(",", ",".concat(r, " ")), o.props = o.props.map(function(s) {
      return "".concat(r, " ").concat(s);
    })), Array.isArray(o.children) && o.type !== "@keyframes" && (o.children = uh(o.children, r)), o;
  });
}
function Rv(i) {
  var r, o, s, b = wa, O = b.options, x = O === void 0 ? wa : O, G = b.plugins, R = G === void 0 ? Hi : G, A = function(X, q, Q) {
    return Q.startsWith(o) && Q.endsWith(o) && Q.replaceAll(o, "").length > 0 ? ".".concat(r) : X;
  }, _ = R.slice();
  _.push(function(X) {
    X.type === Mi && X.value.includes("&") && (X.props[0] = X.props[0].replace(Dv, o).replace(s, A));
  }), x.prefix && _.push(Py), _.push(Wy);
  var C = function(X, q, Q, I) {
    q === void 0 && (q = ""), Q === void 0 && (Q = ""), I === void 0 && (I = "&"), r = I, o = q, s = new RegExp("\\".concat(o, "\\b"), "g");
    var P = X.replace(Mv, ""), tt = ky(Q || q ? "".concat(Q, " ").concat(q, " { ").concat(P, " }") : P);
    x.namespace && (tt = uh(tt, x.namespace));
    var Y = [];
    return Oi(tt, Fy(_.concat(Iy(function(L) {
      return Y.push(L);
    })))), Y;
  };
  return C.hash = R.length ? R.reduce(function(X, q) {
    return q.name || Iu(15), Za(X, q.name);
  }, W0).toString() : "", C;
}
var xv = new ah(), or = Rv(), nh = la.createContext({ shouldForwardProp: void 0, styleSheet: xv, stylis: or });
nh.Consumer;
la.createContext(void 0);
function D0() {
  return Ue.useContext(nh);
}
var Uv = function() {
  function i(r, o) {
    var s = this;
    this.inject = function(b, O) {
      O === void 0 && (O = or);
      var x = s.name + O.hash;
      b.hasNameForId(s.id, x) || b.insertRules(s.id, x, O(s.rules, x, "@keyframes"));
    }, this.name = r, this.id = "sc-keyframes-".concat(r), this.rules = o, pr(this, function() {
      throw Iu(12, String(s.name));
    });
  }
  return i.prototype.getName = function(r) {
    return r === void 0 && (r = or), this.name + r.hash;
  }, i;
}(), Nv = function(i) {
  return i >= "A" && i <= "Z";
};
function M0(i) {
  for (var r = "", o = 0; o < i.length; o++) {
    var s = i[o];
    if (o === 1 && s === "-" && i[0] === "-") return i;
    Nv(s) ? r += "-" + s.toLowerCase() : r += s;
  }
  return r.startsWith("ms-") ? "-" + r : r;
}
var ih = function(i) {
  return i == null || i === !1 || i === "";
}, ch = function(i) {
  var r, o, s = [];
  for (var b in i) {
    var O = i[b];
    i.hasOwnProperty(b) && !ih(O) && (Array.isArray(O) && O.isCss || Ja(O) ? s.push("".concat(M0(b), ":"), O, ";") : Fu(O) ? s.push.apply(s, zi(zi(["".concat(b, " {")], ch(O), !1), ["}"], !1)) : s.push("".concat(M0(b), ": ").concat((r = b, (o = O) == null || typeof o == "boolean" || o === "" ? "" : typeof o != "number" || o === 0 || r in tv || r.startsWith("--") ? String(o).trim() : "".concat(o, "px")), ";")));
  }
  return s;
};
function ta(i, r, o, s) {
  if (ih(i)) return [];
  if (gr(i)) return [".".concat(i.styledComponentId)];
  if (Ja(i)) {
    if (!Ja(O = i) || O.prototype && O.prototype.isReactComponent || !r) return [i];
    var b = i(r);
    return ta(b, r, o, s);
  }
  var O;
  return i instanceof Uv ? o ? (i.inject(o, s), [i.getName(s)]) : [i] : Fu(i) ? ch(i) : Array.isArray(i) ? Array.prototype.concat.apply(Hi, i.map(function(x) {
    return ta(x, r, o, s);
  })) : [i.toString()];
}
function Hv(i) {
  for (var r = 0; r < i.length; r += 1) {
    var o = i[r];
    if (Ja(o) && !gr(o)) return !1;
  }
  return !0;
}
var jv = F0(Ni), qv = function() {
  function i(r, o, s) {
    this.rules = r, this.staticRulesId = "", this.isStatic = (s === void 0 || s.isStatic) && Hv(r), this.componentId = o, this.baseHash = Za(jv, o), this.baseStyle = s, ah.registerId(o);
  }
  return i.prototype.generateAndInjectStyles = function(r, o, s) {
    var b = this.baseStyle ? this.baseStyle.generateAndInjectStyles(r, o, s) : "";
    if (this.isStatic && !s.hash) if (this.staticRulesId && o.hasNameForId(this.componentId, this.staticRulesId)) b = Ie(b, this.staticRulesId);
    else {
      var O = z0(ta(this.rules, r, o, s)), x = rr(Za(this.baseHash, O) >>> 0);
      if (!o.hasNameForId(this.componentId, x)) {
        var G = s(O, ".".concat(x), void 0, this.componentId);
        o.insertRules(this.componentId, x, G);
      }
      b = Ie(b, x), this.staticRulesId = x;
    }
    else {
      for (var R = Za(this.baseHash, s.hash), A = "", _ = 0; _ < this.rules.length; _++) {
        var C = this.rules[_];
        if (typeof C == "string") A += C;
        else if (C) {
          var X = z0(ta(C, r, o, s));
          R = Za(R, X + _), A += X;
        }
      }
      if (A) {
        var q = rr(R >>> 0);
        o.hasNameForId(this.componentId, q) || o.insertRules(this.componentId, q, s(A, ".".concat(q), void 0, this.componentId)), b = Ie(b, q);
      }
    }
    return b;
  }, i;
}(), fh = la.createContext(void 0);
fh.Consumer;
var Pf = {};
function Yv(i, r, o) {
  var s = gr(i), b = i, O = !If(i), x = r.attrs, G = x === void 0 ? Hi : x, R = r.componentId, A = R === void 0 ? function(st, K) {
    var lt = typeof st != "string" ? "sc" : S0(st);
    Pf[lt] = (Pf[lt] || 0) + 1;
    var k = "".concat(lt, "-").concat(iv(Ni + lt + Pf[lt]));
    return K ? "".concat(K, "-").concat(k) : k;
  }(r.displayName, r.parentComponentId) : R, _ = r.displayName, C = _ === void 0 ? function(st) {
    return If(st) ? "styled.".concat(st) : "Styled(".concat(cv(st), ")");
  }(i) : _, X = r.displayName && r.componentId ? "".concat(S0(r.displayName), "-").concat(r.componentId) : r.componentId || A, q = s && b.attrs ? b.attrs.concat(G).filter(Boolean) : G, Q = r.shouldForwardProp;
  if (s && b.shouldForwardProp) {
    var I = b.shouldForwardProp;
    if (r.shouldForwardProp) {
      var P = r.shouldForwardProp;
      Q = function(st, K) {
        return I(st, K) && P(st, K);
      };
    } else Q = I;
  }
  var tt = new qv(o, X, s ? b.componentStyle : void 0);
  function Y(st, K) {
    return function(lt, k, xt) {
      var It = lt.attrs, ne = lt.componentStyle, _l = lt.defaultProps, Bt = lt.foldedComponentIds, Gl = lt.styledComponentId, Xl = lt.target, Ct = la.useContext(fh), E = D0(), N = lt.shouldForwardProp || E.shouldForwardProp, w = ev(k, Ct, _l) || wa, it = function(ct, $, Gt) {
        for (var yt, kt = nl(nl({}, $), { className: void 0, theme: Gt }), Ne = 0; Ne < ct.length; Ne += 1) {
          var Ql = Ja(yt = ct[Ne]) ? yt(kt) : yt;
          for (var vl in Ql) kt[vl] = vl === "className" ? Ie(kt[vl], Ql[vl]) : vl === "style" ? nl(nl({}, kt[vl]), Ql[vl]) : Ql[vl];
        }
        return $.className && (kt.className = Ie(kt.className, $.className)), kt;
      }(It, k, w), h = it.as || Xl, M = {};
      for (var U in it) it[U] === void 0 || U[0] === "$" || U === "as" || U === "theme" && it.theme === w || (U === "forwardedAs" ? M.as = it.forwardedAs : N && !N(U, h) || (M[U] = it[U]));
      var H = function(ct, $) {
        var Gt = D0(), yt = ct.generateAndInjectStyles($, Gt.styleSheet, Gt.stylis);
        return yt;
      }(ne, it), V = Ie(Bt, Gl);
      return H && (V += " " + H), it.className && (V += " " + it.className), M[If(h) && !$0.has(h) ? "class" : "className"] = V, xt && (M.ref = xt), Ue.createElement(h, M);
    }(L, st, K);
  }
  Y.displayName = C;
  var L = la.forwardRef(Y);
  return L.attrs = q, L.componentStyle = tt, L.displayName = C, L.shouldForwardProp = Q, L.foldedComponentIds = s ? Ie(b.foldedComponentIds, b.styledComponentId) : "", L.styledComponentId = X, L.target = s ? b.target : i, Object.defineProperty(L, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(st) {
    this._foldedDefaultProps = s ? function(K) {
      for (var lt = [], k = 1; k < arguments.length; k++) lt[k - 1] = arguments[k];
      for (var xt = 0, It = lt; xt < It.length; xt++) sr(K, It[xt], !0);
      return K;
    }({}, b.defaultProps, st) : st;
  } }), pr(L, function() {
    return ".".concat(L.styledComponentId);
  }), O && lh(L, i, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), L;
}
function R0(i, r) {
  for (var o = [i[0]], s = 0, b = r.length; s < b; s += 1) o.push(r[s], i[s + 1]);
  return o;
}
var x0 = function(i) {
  return Object.assign(i, { isCss: !0 });
};
function Bv(i) {
  for (var r = [], o = 1; o < arguments.length; o++) r[o - 1] = arguments[o];
  if (Ja(i) || Fu(i)) return x0(ta(R0(Hi, zi([i], r, !0))));
  var s = i;
  return r.length === 0 && s.length === 1 && typeof s[0] == "string" ? ta(s) : x0(ta(R0(s, r)));
}
function dr(i, r, o) {
  if (o === void 0 && (o = wa), !r) throw Iu(1, r);
  var s = function(b) {
    for (var O = [], x = 1; x < arguments.length; x++) O[x - 1] = arguments[x];
    return i(r, o, Bv.apply(void 0, zi([b], O, !1)));
  };
  return s.attrs = function(b) {
    return dr(i, r, nl(nl({}, o), { attrs: Array.prototype.concat(o.attrs, b).filter(Boolean) }));
  }, s.withConfig = function(b) {
    return dr(i, r, nl(nl({}, o), b));
  }, s;
}
var rh = function(i) {
  return dr(Yv, i);
}, jt = rh;
$0.forEach(function(i) {
  jt[i] = rh(i);
});
const Cv = jt.header`
  background: #fff;
  border-bottom: 1px solid #e9ecef;
  padding: 15px 0;
`, Gv = jt.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`, Xv = jt.div`
  display: flex;
  align-items: center;
  gap: 10px;

  h1 {
    font-size: 1.3rem;
    margin: 0;
    font-weight: 500;
    color: #333;
  }
`, Qv = jt.div`
  width: 32px;
  height: 32px;
  background: #007bff;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
`, Zv = jt.div`
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
function Lv({ onLoad: i, onPepe: r, label: o, onClick: s }) {
  return Ue.useLayoutEffect(() => {
    console.log("Header component mounted", i), i && i(), r && r();
  }, [i]), /* @__PURE__ */ j.jsx(Cv, { children: /* @__PURE__ */ j.jsxs(Gv, { children: [
    /* @__PURE__ */ j.jsxs(Xv, { children: [
      /* @__PURE__ */ j.jsx(Qv, { children: "⚡" }),
      /* @__PURE__ */ j.jsx("h1", { children: "Backoffice" })
    ] }),
    /* @__PURE__ */ j.jsxs(Zv, { children: [
      /* @__PURE__ */ j.jsx("span", { className: "user-name", children: "Juan Pérez" }),
      /* @__PURE__ */ j.jsx("span", { children: "|" }),
      /* @__PURE__ */ j.jsx("a", { href: "#logout", className: "logout", children: "Cerrar Sesión" })
    ] })
  ] }) });
}
const Ju = jt.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
  width: 100%;
`, Vv = jt.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #dee2e6;
`, Kv = jt.h2`
  color: #333;
  margin: 0;
  font-size: 1.5rem;
`, wv = jt.span`
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  background: ${(i) => {
  switch (i.status) {
    case "preparing":
      return "#fff3cd";
    case "packed":
      return "#d1ecf1";
    case "shipped":
      return "#d4edda";
    case "delivered":
      return "#d1e7dd";
    case "returned":
      return "#f8d7da";
    default:
      return "#e9ecef";
  }
}};
  color: ${(i) => {
  switch (i.status) {
    case "preparing":
      return "#856404";
    case "packed":
      return "#0c5460";
    case "shipped":
      return "#155724";
    case "delivered":
      return "#0f5132";
    case "returned":
      return "#721c24";
    default:
      return "#495057";
  }
}};
`, Jv = jt.span`
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  background: ${(i) => {
  switch (i.priority) {
    case "urgent":
      return "#dc3545";
    case "high":
      return "#fd7e14";
    case "normal":
      return "#6c757d";
    case "low":
      return "#28a745";
    default:
      return "#6c757d";
  }
}};
  color: white;
  margin-left: 10px;
`, kv = jt.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`, Bl = jt.div`
  h3 {
    color: #666;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 5px;
    text-transform: uppercase;
  }
  
  p {
    color: #333;
    font-size: 16px;
    margin: 0;
  }
`, $v = jt.div`
  background: #f8f9fa;
  border-radius: 6px;
  padding: 20px;
  margin-bottom: 20px;
`, Wv = jt.div`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  font-family: monospace;
  letter-spacing: 1px;
`, Fv = jt.div`
  margin-top: 30px;
`, Iv = jt.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  
  &:before {
    content: '';
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${(i) => i.isActive ? "#28a745" : "#dee2e6"};
    margin-right: 15px;
    flex-shrink: 0;
  }
`, Pv = jt.div`
  color: ${(i) => i.isActive ? "#333" : "#6c757d"};
  font-weight: ${(i) => i.isActive ? "600" : "normal"};
`, U0 = jt.div`
  padding: 20px 0;
  text-align: center;
  color: #666;
  font-style: italic;
`, N0 = jt.div`
  padding: 20px;
  text-align: center;
  color: #666;
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 8px;
`, tm = {
  "SHP-001": {
    id: "SHP-001",
    orderId: "ORD-001",
    customer: "John Smith",
    email: "john.smith@email.com",
    destination: "New York, NY",
    fullAddress: "123 Main St, New York, NY 10001",
    carrier: "FedEx",
    trackingNumber: "1234567890",
    shipDate: "2024-01-15",
    estimatedDelivery: "2024-01-17",
    actualDelivery: "2024-01-17",
    status: "delivered",
    priority: "normal",
    weight: 2.5,
    dimensions: '12" x 8" x 6"',
    items: 3,
    packageType: "Standard Box",
    specialInstructions: "Leave at front door"
  },
  "SHP-002": {
    id: "SHP-002",
    orderId: "ORD-002",
    customer: "Sarah Johnson",
    email: "sarah.j@email.com",
    destination: "Los Angeles, CA",
    fullAddress: "456 Oak Ave, Los Angeles, CA 90210",
    carrier: "UPS",
    trackingNumber: "0987654321",
    shipDate: "2024-01-16",
    estimatedDelivery: "2024-01-19",
    status: "shipped",
    priority: "high",
    weight: 1.8,
    dimensions: '10" x 6" x 4"',
    items: 2,
    packageType: "Padded Envelope"
  },
  "SHP-003": {
    id: "SHP-003",
    orderId: "ORD-003",
    customer: "Mike Davis",
    email: "mike.davis@email.com",
    destination: "Chicago, IL",
    fullAddress: "789 Pine St, Chicago, IL 60601",
    carrier: "DHL",
    trackingNumber: "5555666777",
    shipDate: "2024-01-17",
    estimatedDelivery: "2024-01-20",
    status: "packed",
    priority: "urgent",
    weight: 0.5,
    dimensions: '8" x 4" x 2"',
    items: 1,
    packageType: "Small Package",
    specialInstructions: "Signature required"
  }
}, lm = (i) => {
  const r = [
    { step: "preparing", label: "Order Preparing", description: "Items being gathered and prepared" },
    { step: "packed", label: "Package Packed", description: "Items packed and ready for pickup" },
    { step: "shipped", label: "Package Shipped", description: "Package picked up by carrier" },
    { step: "delivered", label: "Package Delivered", description: "Package delivered to destination" }
  ], s = ["preparing", "packed", "shipped", "delivered"].indexOf(i);
  return r.map((b, O) => ({
    ...b,
    isActive: O <= s
  }));
};
function em({
  shipmentId: i,
  shipmentData: r,
  apiUrl: o,
  shipment: s,
  onTrackingClick: b,
  onError: O,
  onLoad: x,
  showTimeline: G = !0,
  showTrackingSection: R = !0,
  compactMode: A = !1
}) {
  const [_, C] = Ue.useState(s || null), [X, q] = Ue.useState(!!(i && !s)), [Q, I] = Ue.useState(null);
  Ue.useEffect(() => {
    if (s) {
      C(s), x?.(s);
      return;
    }
    if (r)
      try {
        const Y = JSON.parse(r);
        C(Y), x?.(Y);
        return;
      } catch {
        const L = "Invalid shipment data format";
        I(L), O?.(L);
        return;
      }
    i && !s && (q(!0), I(null), setTimeout(() => {
      if (o)
        fetch(`${o}/shipments/${i}`).then((Y) => {
          if (!Y.ok) throw new Error("Shipment not found");
          return Y.json();
        }).then((Y) => {
          C(Y), q(!1), x?.(Y);
        }).catch((Y) => {
          const L = `Failed to load shipment: ${Y.message}`;
          I(L), q(!1), O?.(L);
        });
      else {
        const Y = tm[i];
        if (Y)
          C(Y), q(!1), x?.(Y);
        else {
          const L = `Shipment ${i} not found`;
          I(L), q(!1), O?.(L);
        }
      }
    }, 100));
  }, [i, r, s, o, x, O]);
  const P = () => {
    _ && b && b(_.trackingNumber, _.carrier);
  };
  if (X)
    return /* @__PURE__ */ j.jsx(Ju, { children: /* @__PURE__ */ j.jsx(U0, { children: "Loading shipment details..." }) });
  if (Q)
    return /* @__PURE__ */ j.jsx(Ju, { children: /* @__PURE__ */ j.jsxs(N0, { children: [
      /* @__PURE__ */ j.jsx("h3", { children: "Error" }),
      /* @__PURE__ */ j.jsx("p", { children: Q })
    ] }) });
  if (!_ && !X)
    return !i && !r && !s ? /* @__PURE__ */ j.jsx(Ju, { children: /* @__PURE__ */ j.jsxs(N0, { children: [
      /* @__PURE__ */ j.jsx("h3", { children: "No Data" }),
      /* @__PURE__ */ j.jsx("p", { children: "No shipment data provided" })
    ] }) }) : /* @__PURE__ */ j.jsx(Ju, { children: /* @__PURE__ */ j.jsx(U0, { children: "Loading shipment details..." }) });
  const tt = lm(_.status);
  return /* @__PURE__ */ j.jsxs(Ju, { children: [
    /* @__PURE__ */ j.jsxs(Vv, { children: [
      /* @__PURE__ */ j.jsxs("div", { children: [
        /* @__PURE__ */ j.jsxs(Kv, { children: [
          "Shipment ",
          _.id
        ] }),
        /* @__PURE__ */ j.jsxs("div", { style: { marginTop: "5px", color: "#666", fontSize: A ? "0.9rem" : "1rem" }, children: [
          "Order ",
          _.orderId
        ] })
      ] }),
      /* @__PURE__ */ j.jsxs("div", { children: [
        /* @__PURE__ */ j.jsx(wv, { status: _.status, children: _.status }),
        /* @__PURE__ */ j.jsx(Jv, { priority: _.priority, children: _.priority })
      ] })
    ] }),
    /* @__PURE__ */ j.jsxs(kv, { children: [
      /* @__PURE__ */ j.jsxs(Bl, { children: [
        /* @__PURE__ */ j.jsx("h3", { children: "Customer" }),
        /* @__PURE__ */ j.jsx("p", { children: _.customer })
      ] }),
      /* @__PURE__ */ j.jsxs(Bl, { children: [
        /* @__PURE__ */ j.jsx("h3", { children: "Email" }),
        /* @__PURE__ */ j.jsx("p", { children: _.email })
      ] }),
      /* @__PURE__ */ j.jsxs(Bl, { children: [
        /* @__PURE__ */ j.jsx("h3", { children: "Ship Date" }),
        /* @__PURE__ */ j.jsx("p", { children: _.shipDate })
      ] }),
      /* @__PURE__ */ j.jsxs(Bl, { children: [
        /* @__PURE__ */ j.jsx("h3", { children: "Est. Delivery" }),
        /* @__PURE__ */ j.jsx("p", { children: _.estimatedDelivery })
      ] }),
      !A && /* @__PURE__ */ j.jsxs(j.Fragment, { children: [
        /* @__PURE__ */ j.jsxs(Bl, { children: [
          /* @__PURE__ */ j.jsx("h3", { children: "Weight" }),
          /* @__PURE__ */ j.jsxs("p", { children: [
            _.weight,
            " lbs"
          ] })
        ] }),
        /* @__PURE__ */ j.jsxs(Bl, { children: [
          /* @__PURE__ */ j.jsx("h3", { children: "Dimensions" }),
          /* @__PURE__ */ j.jsx("p", { children: _.dimensions })
        ] }),
        /* @__PURE__ */ j.jsxs(Bl, { children: [
          /* @__PURE__ */ j.jsx("h3", { children: "Package Type" }),
          /* @__PURE__ */ j.jsx("p", { children: _.packageType })
        ] }),
        /* @__PURE__ */ j.jsxs(Bl, { children: [
          /* @__PURE__ */ j.jsx("h3", { children: "Items Count" }),
          /* @__PURE__ */ j.jsx("p", { children: _.items })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ j.jsxs(Bl, { style: { marginBottom: "20px" }, children: [
      /* @__PURE__ */ j.jsx("h3", { children: "Shipping Address" }),
      /* @__PURE__ */ j.jsx("p", { children: _.fullAddress })
    ] }),
    _.specialInstructions && /* @__PURE__ */ j.jsxs(Bl, { style: { marginBottom: "20px" }, children: [
      /* @__PURE__ */ j.jsx("h3", { children: "Special Instructions" }),
      /* @__PURE__ */ j.jsx("p", { children: _.specialInstructions })
    ] }),
    R && /* @__PURE__ */ j.jsxs($v, { children: [
      /* @__PURE__ */ j.jsx("h3", { style: { margin: "0 0 10px 0", color: "#666", fontSize: "14px", textTransform: "uppercase" }, children: "Tracking Information" }),
      /* @__PURE__ */ j.jsxs("div", { style: { marginBottom: "10px" }, children: [
        /* @__PURE__ */ j.jsx("strong", { children: "Carrier:" }),
        " ",
        _.carrier
      ] }),
      /* @__PURE__ */ j.jsx("div", { style: { marginBottom: "15px" }, children: /* @__PURE__ */ j.jsx("strong", { children: "Tracking Number:" }) }),
      /* @__PURE__ */ j.jsx(
        Wv,
        {
          style: { cursor: b ? "pointer" : "default" },
          onClick: P,
          children: _.trackingNumber
        }
      )
    ] }),
    G && /* @__PURE__ */ j.jsxs(Fv, { children: [
      /* @__PURE__ */ j.jsx("h3", { style: { marginBottom: "20px", color: "#333" }, children: "Shipment Progress" }),
      tt.map((Y, L) => /* @__PURE__ */ j.jsx(Iv, { isActive: Y.isActive, children: /* @__PURE__ */ j.jsxs(Pv, { isActive: Y.isActive, children: [
        /* @__PURE__ */ j.jsx("div", { style: { fontWeight: Y.isActive ? "600" : "normal" }, children: Y.label }),
        /* @__PURE__ */ j.jsx("div", { style: { fontSize: "14px", color: "#6c757d" }, children: Y.description })
      ] }) }, L))
    ] })
  ] });
}
var tr = { exports: {} }, ku = {}, lr = { exports: {} }, er = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var H0;
function am() {
  return H0 || (H0 = 1, function(i) {
    function r(E, N) {
      var w = E.length;
      E.push(N);
      t: for (; 0 < w; ) {
        var it = w - 1 >>> 1, h = E[it];
        if (0 < b(h, N))
          E[it] = N, E[w] = h, w = it;
        else break t;
      }
    }
    function o(E) {
      return E.length === 0 ? null : E[0];
    }
    function s(E) {
      if (E.length === 0) return null;
      var N = E[0], w = E.pop();
      if (w !== N) {
        E[0] = w;
        t: for (var it = 0, h = E.length, M = h >>> 1; it < M; ) {
          var U = 2 * (it + 1) - 1, H = E[U], V = U + 1, ct = E[V];
          if (0 > b(H, w))
            V < h && 0 > b(ct, H) ? (E[it] = ct, E[V] = w, it = V) : (E[it] = H, E[U] = w, it = U);
          else if (V < h && 0 > b(ct, w))
            E[it] = ct, E[V] = w, it = V;
          else break t;
        }
      }
      return N;
    }
    function b(E, N) {
      var w = E.sortIndex - N.sortIndex;
      return w !== 0 ? w : E.id - N.id;
    }
    if (i.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var O = performance;
      i.unstable_now = function() {
        return O.now();
      };
    } else {
      var x = Date, G = x.now();
      i.unstable_now = function() {
        return x.now() - G;
      };
    }
    var R = [], A = [], _ = 1, C = null, X = 3, q = !1, Q = !1, I = !1, P = !1, tt = typeof setTimeout == "function" ? setTimeout : null, Y = typeof clearTimeout == "function" ? clearTimeout : null, L = typeof setImmediate < "u" ? setImmediate : null;
    function st(E) {
      for (var N = o(A); N !== null; ) {
        if (N.callback === null) s(A);
        else if (N.startTime <= E)
          s(A), N.sortIndex = N.expirationTime, r(R, N);
        else break;
        N = o(A);
      }
    }
    function K(E) {
      if (I = !1, st(E), !Q)
        if (o(R) !== null)
          Q = !0, lt || (lt = !0, Bt());
        else {
          var N = o(A);
          N !== null && Ct(K, N.startTime - E);
        }
    }
    var lt = !1, k = -1, xt = 5, It = -1;
    function ne() {
      return P ? !0 : !(i.unstable_now() - It < xt);
    }
    function _l() {
      if (P = !1, lt) {
        var E = i.unstable_now();
        It = E;
        var N = !0;
        try {
          t: {
            Q = !1, I && (I = !1, Y(k), k = -1), q = !0;
            var w = X;
            try {
              l: {
                for (st(E), C = o(R); C !== null && !(C.expirationTime > E && ne()); ) {
                  var it = C.callback;
                  if (typeof it == "function") {
                    C.callback = null, X = C.priorityLevel;
                    var h = it(
                      C.expirationTime <= E
                    );
                    if (E = i.unstable_now(), typeof h == "function") {
                      C.callback = h, st(E), N = !0;
                      break l;
                    }
                    C === o(R) && s(R), st(E);
                  } else s(R);
                  C = o(R);
                }
                if (C !== null) N = !0;
                else {
                  var M = o(A);
                  M !== null && Ct(
                    K,
                    M.startTime - E
                  ), N = !1;
                }
              }
              break t;
            } finally {
              C = null, X = w, q = !1;
            }
            N = void 0;
          }
        } finally {
          N ? Bt() : lt = !1;
        }
      }
    }
    var Bt;
    if (typeof L == "function")
      Bt = function() {
        L(_l);
      };
    else if (typeof MessageChannel < "u") {
      var Gl = new MessageChannel(), Xl = Gl.port2;
      Gl.port1.onmessage = _l, Bt = function() {
        Xl.postMessage(null);
      };
    } else
      Bt = function() {
        tt(_l, 0);
      };
    function Ct(E, N) {
      k = tt(function() {
        E(i.unstable_now());
      }, N);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(E) {
      E.callback = null;
    }, i.unstable_forceFrameRate = function(E) {
      0 > E || 125 < E ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : xt = 0 < E ? Math.floor(1e3 / E) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return X;
    }, i.unstable_next = function(E) {
      switch (X) {
        case 1:
        case 2:
        case 3:
          var N = 3;
          break;
        default:
          N = X;
      }
      var w = X;
      X = N;
      try {
        return E();
      } finally {
        X = w;
      }
    }, i.unstable_requestPaint = function() {
      P = !0;
    }, i.unstable_runWithPriority = function(E, N) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var w = X;
      X = E;
      try {
        return N();
      } finally {
        X = w;
      }
    }, i.unstable_scheduleCallback = function(E, N, w) {
      var it = i.unstable_now();
      switch (typeof w == "object" && w !== null ? (w = w.delay, w = typeof w == "number" && 0 < w ? it + w : it) : w = it, E) {
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
      return h = w + h, E = {
        id: _++,
        callback: N,
        priorityLevel: E,
        startTime: w,
        expirationTime: h,
        sortIndex: -1
      }, w > it ? (E.sortIndex = w, r(A, E), o(R) === null && E === o(A) && (I ? (Y(k), k = -1) : I = !0, Ct(K, w - it))) : (E.sortIndex = h, r(R, E), Q || q || (Q = !0, lt || (lt = !0, Bt()))), E;
    }, i.unstable_shouldYield = ne, i.unstable_wrapCallback = function(E) {
      var N = X;
      return function() {
        var w = X;
        X = N;
        try {
          return E.apply(this, arguments);
        } finally {
          X = w;
        }
      };
    };
  }(er)), er;
}
var j0;
function um() {
  return j0 || (j0 = 1, lr.exports = am()), lr.exports;
}
var ar = { exports: {} }, Ft = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var q0;
function nm() {
  if (q0) return Ft;
  q0 = 1;
  var i = hr();
  function r(R) {
    var A = "https://react.dev/errors/" + R;
    if (1 < arguments.length) {
      A += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var _ = 2; _ < arguments.length; _++)
        A += "&args[]=" + encodeURIComponent(arguments[_]);
    }
    return "Minified React error #" + R + "; visit " + A + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
  function O(R, A, _) {
    var C = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: b,
      key: C == null ? null : "" + C,
      children: R,
      containerInfo: A,
      implementation: _
    };
  }
  var x = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function G(R, A) {
    if (R === "font") return "";
    if (typeof A == "string")
      return A === "use-credentials" ? A : "";
  }
  return Ft.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, Ft.createPortal = function(R, A) {
    var _ = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!A || A.nodeType !== 1 && A.nodeType !== 9 && A.nodeType !== 11)
      throw Error(r(299));
    return O(R, A, null, _);
  }, Ft.flushSync = function(R) {
    var A = x.T, _ = s.p;
    try {
      if (x.T = null, s.p = 2, R) return R();
    } finally {
      x.T = A, s.p = _, s.d.f();
    }
  }, Ft.preconnect = function(R, A) {
    typeof R == "string" && (A ? (A = A.crossOrigin, A = typeof A == "string" ? A === "use-credentials" ? A : "" : void 0) : A = null, s.d.C(R, A));
  }, Ft.prefetchDNS = function(R) {
    typeof R == "string" && s.d.D(R);
  }, Ft.preinit = function(R, A) {
    if (typeof R == "string" && A && typeof A.as == "string") {
      var _ = A.as, C = G(_, A.crossOrigin), X = typeof A.integrity == "string" ? A.integrity : void 0, q = typeof A.fetchPriority == "string" ? A.fetchPriority : void 0;
      _ === "style" ? s.d.S(
        R,
        typeof A.precedence == "string" ? A.precedence : void 0,
        {
          crossOrigin: C,
          integrity: X,
          fetchPriority: q
        }
      ) : _ === "script" && s.d.X(R, {
        crossOrigin: C,
        integrity: X,
        fetchPriority: q,
        nonce: typeof A.nonce == "string" ? A.nonce : void 0
      });
    }
  }, Ft.preinitModule = function(R, A) {
    if (typeof R == "string")
      if (typeof A == "object" && A !== null) {
        if (A.as == null || A.as === "script") {
          var _ = G(
            A.as,
            A.crossOrigin
          );
          s.d.M(R, {
            crossOrigin: _,
            integrity: typeof A.integrity == "string" ? A.integrity : void 0,
            nonce: typeof A.nonce == "string" ? A.nonce : void 0
          });
        }
      } else A == null && s.d.M(R);
  }, Ft.preload = function(R, A) {
    if (typeof R == "string" && typeof A == "object" && A !== null && typeof A.as == "string") {
      var _ = A.as, C = G(_, A.crossOrigin);
      s.d.L(R, _, {
        crossOrigin: C,
        integrity: typeof A.integrity == "string" ? A.integrity : void 0,
        nonce: typeof A.nonce == "string" ? A.nonce : void 0,
        type: typeof A.type == "string" ? A.type : void 0,
        fetchPriority: typeof A.fetchPriority == "string" ? A.fetchPriority : void 0,
        referrerPolicy: typeof A.referrerPolicy == "string" ? A.referrerPolicy : void 0,
        imageSrcSet: typeof A.imageSrcSet == "string" ? A.imageSrcSet : void 0,
        imageSizes: typeof A.imageSizes == "string" ? A.imageSizes : void 0,
        media: typeof A.media == "string" ? A.media : void 0
      });
    }
  }, Ft.preloadModule = function(R, A) {
    if (typeof R == "string")
      if (A) {
        var _ = G(A.as, A.crossOrigin);
        s.d.m(R, {
          as: typeof A.as == "string" && A.as !== "script" ? A.as : void 0,
          crossOrigin: _,
          integrity: typeof A.integrity == "string" ? A.integrity : void 0
        });
      } else s.d.m(R);
  }, Ft.requestFormReset = function(R) {
    s.d.r(R);
  }, Ft.unstable_batchedUpdates = function(R, A) {
    return R(A);
  }, Ft.useFormState = function(R, A, _) {
    return x.H.useFormState(R, A, _);
  }, Ft.useFormStatus = function() {
    return x.H.useHostTransitionStatus();
  }, Ft.version = "19.1.0", Ft;
}
var Y0;
function im() {
  if (Y0) return ar.exports;
  Y0 = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (r) {
        console.error(r);
      }
  }
  return i(), ar.exports = nm(), ar.exports;
}
var B0;
function cm() {
  if (B0) return ku;
  B0 = 1;
  /**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var i = um(), r = hr(), o = im();
  function s(t) {
    var l = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      l += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var e = 2; e < arguments.length; e++)
        l += "&args[]=" + encodeURIComponent(arguments[e]);
    }
    return "Minified React error #" + t + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function b(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function O(t) {
    var l = t, e = t;
    if (t.alternate) for (; l.return; ) l = l.return;
    else {
      t = l;
      do
        l = t, (l.flags & 4098) !== 0 && (e = l.return), t = l.return;
      while (t);
    }
    return l.tag === 3 ? e : null;
  }
  function x(t) {
    if (t.tag === 13) {
      var l = t.memoizedState;
      if (l === null && (t = t.alternate, t !== null && (l = t.memoizedState)), l !== null) return l.dehydrated;
    }
    return null;
  }
  function G(t) {
    if (O(t) !== t)
      throw Error(s(188));
  }
  function R(t) {
    var l = t.alternate;
    if (!l) {
      if (l = O(t), l === null) throw Error(s(188));
      return l !== t ? null : t;
    }
    for (var e = t, a = l; ; ) {
      var u = e.return;
      if (u === null) break;
      var n = u.alternate;
      if (n === null) {
        if (a = u.return, a !== null) {
          e = a;
          continue;
        }
        break;
      }
      if (u.child === n.child) {
        for (n = u.child; n; ) {
          if (n === e) return G(u), t;
          if (n === a) return G(u), l;
          n = n.sibling;
        }
        throw Error(s(188));
      }
      if (e.return !== a.return) e = u, a = n;
      else {
        for (var c = !1, f = u.child; f; ) {
          if (f === e) {
            c = !0, e = u, a = n;
            break;
          }
          if (f === a) {
            c = !0, a = u, e = n;
            break;
          }
          f = f.sibling;
        }
        if (!c) {
          for (f = n.child; f; ) {
            if (f === e) {
              c = !0, e = n, a = u;
              break;
            }
            if (f === a) {
              c = !0, a = n, e = u;
              break;
            }
            f = f.sibling;
          }
          if (!c) throw Error(s(189));
        }
      }
      if (e.alternate !== a) throw Error(s(190));
    }
    if (e.tag !== 3) throw Error(s(188));
    return e.stateNode.current === e ? t : l;
  }
  function A(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t;
    for (t = t.child; t !== null; ) {
      if (l = A(t), l !== null) return l;
      t = t.sibling;
    }
    return null;
  }
  var _ = Object.assign, C = Symbol.for("react.element"), X = Symbol.for("react.transitional.element"), q = Symbol.for("react.portal"), Q = Symbol.for("react.fragment"), I = Symbol.for("react.strict_mode"), P = Symbol.for("react.profiler"), tt = Symbol.for("react.provider"), Y = Symbol.for("react.consumer"), L = Symbol.for("react.context"), st = Symbol.for("react.forward_ref"), K = Symbol.for("react.suspense"), lt = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), xt = Symbol.for("react.lazy"), It = Symbol.for("react.activity"), ne = Symbol.for("react.memo_cache_sentinel"), _l = Symbol.iterator;
  function Bt(t) {
    return t === null || typeof t != "object" ? null : (t = _l && t[_l] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var Gl = Symbol.for("react.client.reference");
  function Xl(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Gl ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case Q:
        return "Fragment";
      case P:
        return "Profiler";
      case I:
        return "StrictMode";
      case K:
        return "Suspense";
      case lt:
        return "SuspenseList";
      case It:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case q:
          return "Portal";
        case L:
          return (t.displayName || "Context") + ".Provider";
        case Y:
          return (t._context.displayName || "Context") + ".Consumer";
        case st:
          var l = t.render;
          return t = t.displayName, t || (t = l.displayName || l.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case k:
          return l = t.displayName || null, l !== null ? l : Xl(t.type) || "Memo";
        case xt:
          l = t._payload, t = t._init;
          try {
            return Xl(t(l));
          } catch {
          }
      }
    return null;
  }
  var Ct = Array.isArray, E = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, N = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, w = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, it = [], h = -1;
  function M(t) {
    return { current: t };
  }
  function U(t) {
    0 > h || (t.current = it[h], it[h] = null, h--);
  }
  function H(t, l) {
    h++, it[h] = t.current, t.current = l;
  }
  var V = M(null), ct = M(null), $ = M(null), Gt = M(null);
  function yt(t, l) {
    switch (H($, l), H(ct, t), H(V, null), l.nodeType) {
      case 9:
      case 11:
        t = (t = l.documentElement) && (t = t.namespaceURI) ? Xd(t) : 0;
        break;
      default:
        if (t = l.tagName, l = l.namespaceURI)
          l = Xd(l), t = Qd(l, t);
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
    U(V), H(V, t);
  }
  function kt() {
    U(V), U(ct), U($);
  }
  function Ne(t) {
    t.memoizedState !== null && H(Gt, t);
    var l = V.current, e = Qd(l, t.type);
    l !== e && (H(ct, t), H(V, e));
  }
  function Ql(t) {
    ct.current === t && (U(V), U(ct)), Gt.current === t && (U(Gt), Qu._currentValue = w);
  }
  var vl = Object.prototype.hasOwnProperty, ji = i.unstable_scheduleCallback, qi = i.unstable_cancelCallback, sh = i.unstable_shouldYield, oh = i.unstable_requestPaint, Ul = i.unstable_now, dh = i.unstable_getCurrentPriorityLevel, Sr = i.unstable_ImmediatePriority, br = i.unstable_UserBlockingPriority, Pu = i.unstable_NormalPriority, hh = i.unstable_LowPriority, Ar = i.unstable_IdlePriority, yh = i.log, vh = i.unstable_setDisableYieldValue, $a = null, il = null;
  function ie(t) {
    if (typeof yh == "function" && vh(t), il && typeof il.setStrictMode == "function")
      try {
        il.setStrictMode($a, t);
      } catch {
      }
  }
  var cl = Math.clz32 ? Math.clz32 : ph, mh = Math.log, gh = Math.LN2;
  function ph(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (mh(t) / gh | 0) | 0;
  }
  var tn = 256, ln = 4194304;
  function He(t) {
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
  function en(t, l, e) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var u = 0, n = t.suspendedLanes, c = t.pingedLanes;
    t = t.warmLanes;
    var f = a & 134217727;
    return f !== 0 ? (a = f & ~n, a !== 0 ? u = He(a) : (c &= f, c !== 0 ? u = He(c) : e || (e = f & ~t, e !== 0 && (u = He(e))))) : (f = a & ~n, f !== 0 ? u = He(f) : c !== 0 ? u = He(c) : e || (e = a & ~t, e !== 0 && (u = He(e)))), u === 0 ? 0 : l !== 0 && l !== u && (l & n) === 0 && (n = u & -u, e = l & -l, n >= e || n === 32 && (e & 4194048) !== 0) ? l : u;
  }
  function Wa(t, l) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & l) === 0;
  }
  function Sh(t, l) {
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
  function Er() {
    var t = tn;
    return tn <<= 1, (tn & 4194048) === 0 && (tn = 256), t;
  }
  function Tr() {
    var t = ln;
    return ln <<= 1, (ln & 62914560) === 0 && (ln = 4194304), t;
  }
  function Yi(t) {
    for (var l = [], e = 0; 31 > e; e++) l.push(t);
    return l;
  }
  function Fa(t, l) {
    t.pendingLanes |= l, l !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function bh(t, l, e, a, u, n) {
    var c = t.pendingLanes;
    t.pendingLanes = e, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= e, t.entangledLanes &= e, t.errorRecoveryDisabledLanes &= e, t.shellSuspendCounter = 0;
    var f = t.entanglements, d = t.expirationTimes, g = t.hiddenUpdates;
    for (e = c & ~e; 0 < e; ) {
      var T = 31 - cl(e), D = 1 << T;
      f[T] = 0, d[T] = -1;
      var p = g[T];
      if (p !== null)
        for (g[T] = null, T = 0; T < p.length; T++) {
          var S = p[T];
          S !== null && (S.lane &= -536870913);
        }
      e &= ~D;
    }
    a !== 0 && zr(t, a, 0), n !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= n & ~(c & ~l));
  }
  function zr(t, l, e) {
    t.pendingLanes |= l, t.suspendedLanes &= ~l;
    var a = 31 - cl(l);
    t.entangledLanes |= l, t.entanglements[a] = t.entanglements[a] | 1073741824 | e & 4194090;
  }
  function Or(t, l) {
    var e = t.entangledLanes |= l;
    for (t = t.entanglements; e; ) {
      var a = 31 - cl(e), u = 1 << a;
      u & l | t[a] & l && (t[a] |= l), e &= ~u;
    }
  }
  function Bi(t) {
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
  function Ci(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function _r() {
    var t = N.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : i0(t.type));
  }
  function Ah(t, l) {
    var e = N.p;
    try {
      return N.p = t, l();
    } finally {
      N.p = e;
    }
  }
  var ce = Math.random().toString(36).slice(2), $t = "__reactFiber$" + ce, tl = "__reactProps$" + ce, ea = "__reactContainer$" + ce, Gi = "__reactEvents$" + ce, Eh = "__reactListeners$" + ce, Th = "__reactHandles$" + ce, Dr = "__reactResources$" + ce, Ia = "__reactMarker$" + ce;
  function Xi(t) {
    delete t[$t], delete t[tl], delete t[Gi], delete t[Eh], delete t[Th];
  }
  function aa(t) {
    var l = t[$t];
    if (l) return l;
    for (var e = t.parentNode; e; ) {
      if (l = e[ea] || e[$t]) {
        if (e = l.alternate, l.child !== null || e !== null && e.child !== null)
          for (t = Kd(t); t !== null; ) {
            if (e = t[$t]) return e;
            t = Kd(t);
          }
        return l;
      }
      t = e, e = t.parentNode;
    }
    return null;
  }
  function ua(t) {
    if (t = t[$t] || t[ea]) {
      var l = t.tag;
      if (l === 5 || l === 6 || l === 13 || l === 26 || l === 27 || l === 3)
        return t;
    }
    return null;
  }
  function Pa(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t.stateNode;
    throw Error(s(33));
  }
  function na(t) {
    var l = t[Dr];
    return l || (l = t[Dr] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), l;
  }
  function Xt(t) {
    t[Ia] = !0;
  }
  var Mr = /* @__PURE__ */ new Set(), Rr = {};
  function je(t, l) {
    ia(t, l), ia(t + "Capture", l);
  }
  function ia(t, l) {
    for (Rr[t] = l, t = 0; t < l.length; t++)
      Mr.add(l[t]);
  }
  var zh = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), xr = {}, Ur = {};
  function Oh(t) {
    return vl.call(Ur, t) ? !0 : vl.call(xr, t) ? !1 : zh.test(t) ? Ur[t] = !0 : (xr[t] = !0, !1);
  }
  function an(t, l, e) {
    if (Oh(l))
      if (e === null) t.removeAttribute(l);
      else {
        switch (typeof e) {
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
        t.setAttribute(l, "" + e);
      }
  }
  function un(t, l, e) {
    if (e === null) t.removeAttribute(l);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttribute(l, "" + e);
    }
  }
  function Zl(t, l, e, a) {
    if (a === null) t.removeAttribute(e);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttributeNS(l, e, "" + a);
    }
  }
  var Qi, Nr;
  function ca(t) {
    if (Qi === void 0)
      try {
        throw Error();
      } catch (e) {
        var l = e.stack.trim().match(/\n( *(at )?)/);
        Qi = l && l[1] || "", Nr = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Qi + t + Nr;
  }
  var Zi = !1;
  function Li(t, l) {
    if (!t || Zi) return "";
    Zi = !0;
    var e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (l) {
              var D = function() {
                throw Error();
              };
              if (Object.defineProperty(D.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(D, []);
                } catch (S) {
                  var p = S;
                }
                Reflect.construct(t, [], D);
              } else {
                try {
                  D.call();
                } catch (S) {
                  p = S;
                }
                t.call(D.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (S) {
                p = S;
              }
              (D = t()) && typeof D.catch == "function" && D.catch(function() {
              });
            }
          } catch (S) {
            if (S && p && typeof S.stack == "string")
              return [S.stack, p.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      u && u.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var n = a.DetermineComponentFrameRoot(), c = n[0], f = n[1];
      if (c && f) {
        var d = c.split(`
`), g = f.split(`
`);
        for (u = a = 0; a < d.length && !d[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; u < g.length && !g[u].includes(
          "DetermineComponentFrameRoot"
        ); )
          u++;
        if (a === d.length || u === g.length)
          for (a = d.length - 1, u = g.length - 1; 1 <= a && 0 <= u && d[a] !== g[u]; )
            u--;
        for (; 1 <= a && 0 <= u; a--, u--)
          if (d[a] !== g[u]) {
            if (a !== 1 || u !== 1)
              do
                if (a--, u--, 0 > u || d[a] !== g[u]) {
                  var T = `
` + d[a].replace(" at new ", " at ");
                  return t.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", t.displayName)), T;
                }
              while (1 <= a && 0 <= u);
            break;
          }
      }
    } finally {
      Zi = !1, Error.prepareStackTrace = e;
    }
    return (e = t ? t.displayName || t.name : "") ? ca(e) : "";
  }
  function _h(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return ca(t.type);
      case 16:
        return ca("Lazy");
      case 13:
        return ca("Suspense");
      case 19:
        return ca("SuspenseList");
      case 0:
      case 15:
        return Li(t.type, !1);
      case 11:
        return Li(t.type.render, !1);
      case 1:
        return Li(t.type, !0);
      case 31:
        return ca("Activity");
      default:
        return "";
    }
  }
  function Hr(t) {
    try {
      var l = "";
      do
        l += _h(t), t = t.return;
      while (t);
      return l;
    } catch (e) {
      return `
Error generating stack: ` + e.message + `
` + e.stack;
    }
  }
  function ml(t) {
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
  function jr(t) {
    var l = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (l === "checkbox" || l === "radio");
  }
  function Dh(t) {
    var l = jr(t) ? "checked" : "value", e = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      l
    ), a = "" + t[l];
    if (!t.hasOwnProperty(l) && typeof e < "u" && typeof e.get == "function" && typeof e.set == "function") {
      var u = e.get, n = e.set;
      return Object.defineProperty(t, l, {
        configurable: !0,
        get: function() {
          return u.call(this);
        },
        set: function(c) {
          a = "" + c, n.call(this, c);
        }
      }), Object.defineProperty(t, l, {
        enumerable: e.enumerable
      }), {
        getValue: function() {
          return a;
        },
        setValue: function(c) {
          a = "" + c;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[l];
        }
      };
    }
  }
  function nn(t) {
    t._valueTracker || (t._valueTracker = Dh(t));
  }
  function qr(t) {
    if (!t) return !1;
    var l = t._valueTracker;
    if (!l) return !0;
    var e = l.getValue(), a = "";
    return t && (a = jr(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== e ? (l.setValue(t), !0) : !1;
  }
  function cn(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Mh = /[\n"\\]/g;
  function gl(t) {
    return t.replace(
      Mh,
      function(l) {
        return "\\" + l.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Vi(t, l, e, a, u, n, c, f) {
    t.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? t.type = c : t.removeAttribute("type"), l != null ? c === "number" ? (l === 0 && t.value === "" || t.value != l) && (t.value = "" + ml(l)) : t.value !== "" + ml(l) && (t.value = "" + ml(l)) : c !== "submit" && c !== "reset" || t.removeAttribute("value"), l != null ? Ki(t, c, ml(l)) : e != null ? Ki(t, c, ml(e)) : a != null && t.removeAttribute("value"), u == null && n != null && (t.defaultChecked = !!n), u != null && (t.checked = u && typeof u != "function" && typeof u != "symbol"), f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? t.name = "" + ml(f) : t.removeAttribute("name");
  }
  function Yr(t, l, e, a, u, n, c, f) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (t.type = n), l != null || e != null) {
      if (!(n !== "submit" && n !== "reset" || l != null))
        return;
      e = e != null ? "" + ml(e) : "", l = l != null ? "" + ml(l) : e, f || l === t.value || (t.value = l), t.defaultValue = l;
    }
    a = a ?? u, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = f ? t.checked : !!a, t.defaultChecked = !!a, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (t.name = c);
  }
  function Ki(t, l, e) {
    l === "number" && cn(t.ownerDocument) === t || t.defaultValue === "" + e || (t.defaultValue = "" + e);
  }
  function fa(t, l, e, a) {
    if (t = t.options, l) {
      l = {};
      for (var u = 0; u < e.length; u++)
        l["$" + e[u]] = !0;
      for (e = 0; e < t.length; e++)
        u = l.hasOwnProperty("$" + t[e].value), t[e].selected !== u && (t[e].selected = u), u && a && (t[e].defaultSelected = !0);
    } else {
      for (e = "" + ml(e), l = null, u = 0; u < t.length; u++) {
        if (t[u].value === e) {
          t[u].selected = !0, a && (t[u].defaultSelected = !0);
          return;
        }
        l !== null || t[u].disabled || (l = t[u]);
      }
      l !== null && (l.selected = !0);
    }
  }
  function Br(t, l, e) {
    if (l != null && (l = "" + ml(l), l !== t.value && (t.value = l), e == null)) {
      t.defaultValue !== l && (t.defaultValue = l);
      return;
    }
    t.defaultValue = e != null ? "" + ml(e) : "";
  }
  function Cr(t, l, e, a) {
    if (l == null) {
      if (a != null) {
        if (e != null) throw Error(s(92));
        if (Ct(a)) {
          if (1 < a.length) throw Error(s(93));
          a = a[0];
        }
        e = a;
      }
      e == null && (e = ""), l = e;
    }
    e = ml(l), t.defaultValue = e, a = t.textContent, a === e && a !== "" && a !== null && (t.value = a);
  }
  function ra(t, l) {
    if (l) {
      var e = t.firstChild;
      if (e && e === t.lastChild && e.nodeType === 3) {
        e.nodeValue = l;
        return;
      }
    }
    t.textContent = l;
  }
  var Rh = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Gr(t, l, e) {
    var a = l.indexOf("--") === 0;
    e == null || typeof e == "boolean" || e === "" ? a ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "" : a ? t.setProperty(l, e) : typeof e != "number" || e === 0 || Rh.has(l) ? l === "float" ? t.cssFloat = e : t[l] = ("" + e).trim() : t[l] = e + "px";
  }
  function Xr(t, l, e) {
    if (l != null && typeof l != "object")
      throw Error(s(62));
    if (t = t.style, e != null) {
      for (var a in e)
        !e.hasOwnProperty(a) || l != null && l.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
      for (var u in l)
        a = l[u], l.hasOwnProperty(u) && e[u] !== a && Gr(t, u, a);
    } else
      for (var n in l)
        l.hasOwnProperty(n) && Gr(t, n, l[n]);
  }
  function wi(t) {
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
  var xh = /* @__PURE__ */ new Map([
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
  ]), Uh = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function fn(t) {
    return Uh.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  var Ji = null;
  function ki(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var sa = null, oa = null;
  function Qr(t) {
    var l = ua(t);
    if (l && (t = l.stateNode)) {
      var e = t[tl] || null;
      t: switch (t = l.stateNode, l.type) {
        case "input":
          if (Vi(
            t,
            e.value,
            e.defaultValue,
            e.defaultValue,
            e.checked,
            e.defaultChecked,
            e.type,
            e.name
          ), l = e.name, e.type === "radio" && l != null) {
            for (e = t; e.parentNode; ) e = e.parentNode;
            for (e = e.querySelectorAll(
              'input[name="' + gl(
                "" + l
              ) + '"][type="radio"]'
            ), l = 0; l < e.length; l++) {
              var a = e[l];
              if (a !== t && a.form === t.form) {
                var u = a[tl] || null;
                if (!u) throw Error(s(90));
                Vi(
                  a,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (l = 0; l < e.length; l++)
              a = e[l], a.form === t.form && qr(a);
          }
          break t;
        case "textarea":
          Br(t, e.value, e.defaultValue);
          break t;
        case "select":
          l = e.value, l != null && fa(t, !!e.multiple, l, !1);
      }
    }
  }
  var $i = !1;
  function Zr(t, l, e) {
    if ($i) return t(l, e);
    $i = !0;
    try {
      var a = t(l);
      return a;
    } finally {
      if ($i = !1, (sa !== null || oa !== null) && (Jn(), sa && (l = sa, t = oa, oa = sa = null, Qr(l), t)))
        for (l = 0; l < t.length; l++) Qr(t[l]);
    }
  }
  function tu(t, l) {
    var e = t.stateNode;
    if (e === null) return null;
    var a = e[tl] || null;
    if (a === null) return null;
    e = a[l];
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
    if (e && typeof e != "function")
      throw Error(
        s(231, l, typeof e)
      );
    return e;
  }
  var Ll = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Wi = !1;
  if (Ll)
    try {
      var lu = {};
      Object.defineProperty(lu, "passive", {
        get: function() {
          Wi = !0;
        }
      }), window.addEventListener("test", lu, lu), window.removeEventListener("test", lu, lu);
    } catch {
      Wi = !1;
    }
  var fe = null, Fi = null, rn = null;
  function Lr() {
    if (rn) return rn;
    var t, l = Fi, e = l.length, a, u = "value" in fe ? fe.value : fe.textContent, n = u.length;
    for (t = 0; t < e && l[t] === u[t]; t++) ;
    var c = e - t;
    for (a = 1; a <= c && l[e - a] === u[n - a]; a++) ;
    return rn = u.slice(t, 1 < a ? 1 - a : void 0);
  }
  function sn(t) {
    var l = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && l === 13 && (t = 13)) : t = l, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function on() {
    return !0;
  }
  function Vr() {
    return !1;
  }
  function ll(t) {
    function l(e, a, u, n, c) {
      this._reactName = e, this._targetInst = u, this.type = a, this.nativeEvent = n, this.target = c, this.currentTarget = null;
      for (var f in t)
        t.hasOwnProperty(f) && (e = t[f], this[f] = e ? e(n) : n[f]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? on : Vr, this.isPropagationStopped = Vr, this;
    }
    return _(l.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var e = this.nativeEvent;
        e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = on);
      },
      stopPropagation: function() {
        var e = this.nativeEvent;
        e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = on);
      },
      persist: function() {
      },
      isPersistent: on
    }), l;
  }
  var qe = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, dn = ll(qe), eu = _({}, qe, { view: 0, detail: 0 }), Nh = ll(eu), Ii, Pi, au, hn = _({}, eu, {
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
    getModifierState: lc,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== au && (au && t.type === "mousemove" ? (Ii = t.screenX - au.screenX, Pi = t.screenY - au.screenY) : Pi = Ii = 0, au = t), Ii);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : Pi;
    }
  }), Kr = ll(hn), Hh = _({}, hn, { dataTransfer: 0 }), jh = ll(Hh), qh = _({}, eu, { relatedTarget: 0 }), tc = ll(qh), Yh = _({}, qe, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Bh = ll(Yh), Ch = _({}, qe, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), Gh = ll(Ch), Xh = _({}, qe, { data: 0 }), wr = ll(Xh), Qh = {
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
  }, Zh = {
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
  }, Lh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Vh(t) {
    var l = this.nativeEvent;
    return l.getModifierState ? l.getModifierState(t) : (t = Lh[t]) ? !!l[t] : !1;
  }
  function lc() {
    return Vh;
  }
  var Kh = _({}, eu, {
    key: function(t) {
      if (t.key) {
        var l = Qh[t.key] || t.key;
        if (l !== "Unidentified") return l;
      }
      return t.type === "keypress" ? (t = sn(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Zh[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: lc,
    charCode: function(t) {
      return t.type === "keypress" ? sn(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? sn(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), wh = ll(Kh), Jh = _({}, hn, {
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
  }), Jr = ll(Jh), kh = _({}, eu, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: lc
  }), $h = ll(kh), Wh = _({}, qe, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Fh = ll(Wh), Ih = _({}, hn, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ph = ll(Ih), t1 = _({}, qe, {
    newState: 0,
    oldState: 0
  }), l1 = ll(t1), e1 = [9, 13, 27, 32], ec = Ll && "CompositionEvent" in window, uu = null;
  Ll && "documentMode" in document && (uu = document.documentMode);
  var a1 = Ll && "TextEvent" in window && !uu, kr = Ll && (!ec || uu && 8 < uu && 11 >= uu), $r = " ", Wr = !1;
  function Fr(t, l) {
    switch (t) {
      case "keyup":
        return e1.indexOf(l.keyCode) !== -1;
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
  function Ir(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var da = !1;
  function u1(t, l) {
    switch (t) {
      case "compositionend":
        return Ir(l);
      case "keypress":
        return l.which !== 32 ? null : (Wr = !0, $r);
      case "textInput":
        return t = l.data, t === $r && Wr ? null : t;
      default:
        return null;
    }
  }
  function n1(t, l) {
    if (da)
      return t === "compositionend" || !ec && Fr(t, l) ? (t = Lr(), rn = Fi = fe = null, da = !1, t) : null;
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
        return kr && l.locale !== "ko" ? null : l.data;
      default:
        return null;
    }
  }
  var i1 = {
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
  function Pr(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return l === "input" ? !!i1[t.type] : l === "textarea";
  }
  function ts(t, l, e, a) {
    sa ? oa ? oa.push(a) : oa = [a] : sa = a, l = Pn(l, "onChange"), 0 < l.length && (e = new dn(
      "onChange",
      "change",
      null,
      e,
      a
    ), t.push({ event: e, listeners: l }));
  }
  var nu = null, iu = null;
  function c1(t) {
    qd(t, 0);
  }
  function yn(t) {
    var l = Pa(t);
    if (qr(l)) return t;
  }
  function ls(t, l) {
    if (t === "change") return l;
  }
  var es = !1;
  if (Ll) {
    var ac;
    if (Ll) {
      var uc = "oninput" in document;
      if (!uc) {
        var as = document.createElement("div");
        as.setAttribute("oninput", "return;"), uc = typeof as.oninput == "function";
      }
      ac = uc;
    } else ac = !1;
    es = ac && (!document.documentMode || 9 < document.documentMode);
  }
  function us() {
    nu && (nu.detachEvent("onpropertychange", ns), iu = nu = null);
  }
  function ns(t) {
    if (t.propertyName === "value" && yn(iu)) {
      var l = [];
      ts(
        l,
        iu,
        t,
        ki(t)
      ), Zr(c1, l);
    }
  }
  function f1(t, l, e) {
    t === "focusin" ? (us(), nu = l, iu = e, nu.attachEvent("onpropertychange", ns)) : t === "focusout" && us();
  }
  function r1(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return yn(iu);
  }
  function s1(t, l) {
    if (t === "click") return yn(l);
  }
  function o1(t, l) {
    if (t === "input" || t === "change")
      return yn(l);
  }
  function d1(t, l) {
    return t === l && (t !== 0 || 1 / t === 1 / l) || t !== t && l !== l;
  }
  var fl = typeof Object.is == "function" ? Object.is : d1;
  function cu(t, l) {
    if (fl(t, l)) return !0;
    if (typeof t != "object" || t === null || typeof l != "object" || l === null)
      return !1;
    var e = Object.keys(t), a = Object.keys(l);
    if (e.length !== a.length) return !1;
    for (a = 0; a < e.length; a++) {
      var u = e[a];
      if (!vl.call(l, u) || !fl(t[u], l[u]))
        return !1;
    }
    return !0;
  }
  function is(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function cs(t, l) {
    var e = is(t);
    t = 0;
    for (var a; e; ) {
      if (e.nodeType === 3) {
        if (a = t + e.textContent.length, t <= l && a >= l)
          return { node: e, offset: l - t };
        t = a;
      }
      t: {
        for (; e; ) {
          if (e.nextSibling) {
            e = e.nextSibling;
            break t;
          }
          e = e.parentNode;
        }
        e = void 0;
      }
      e = is(e);
    }
  }
  function fs(t, l) {
    return t && l ? t === l ? !0 : t && t.nodeType === 3 ? !1 : l && l.nodeType === 3 ? fs(t, l.parentNode) : "contains" in t ? t.contains(l) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(l) & 16) : !1 : !1;
  }
  function rs(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var l = cn(t.document); l instanceof t.HTMLIFrameElement; ) {
      try {
        var e = typeof l.contentWindow.location.href == "string";
      } catch {
        e = !1;
      }
      if (e) t = l.contentWindow;
      else break;
      l = cn(t.document);
    }
    return l;
  }
  function nc(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return l && (l === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || l === "textarea" || t.contentEditable === "true");
  }
  var h1 = Ll && "documentMode" in document && 11 >= document.documentMode, ha = null, ic = null, fu = null, cc = !1;
  function ss(t, l, e) {
    var a = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    cc || ha == null || ha !== cn(a) || (a = ha, "selectionStart" in a && nc(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), fu && cu(fu, a) || (fu = a, a = Pn(ic, "onSelect"), 0 < a.length && (l = new dn(
      "onSelect",
      "select",
      null,
      l,
      e
    ), t.push({ event: l, listeners: a }), l.target = ha)));
  }
  function Ye(t, l) {
    var e = {};
    return e[t.toLowerCase()] = l.toLowerCase(), e["Webkit" + t] = "webkit" + l, e["Moz" + t] = "moz" + l, e;
  }
  var ya = {
    animationend: Ye("Animation", "AnimationEnd"),
    animationiteration: Ye("Animation", "AnimationIteration"),
    animationstart: Ye("Animation", "AnimationStart"),
    transitionrun: Ye("Transition", "TransitionRun"),
    transitionstart: Ye("Transition", "TransitionStart"),
    transitioncancel: Ye("Transition", "TransitionCancel"),
    transitionend: Ye("Transition", "TransitionEnd")
  }, fc = {}, os = {};
  Ll && (os = document.createElement("div").style, "AnimationEvent" in window || (delete ya.animationend.animation, delete ya.animationiteration.animation, delete ya.animationstart.animation), "TransitionEvent" in window || delete ya.transitionend.transition);
  function Be(t) {
    if (fc[t]) return fc[t];
    if (!ya[t]) return t;
    var l = ya[t], e;
    for (e in l)
      if (l.hasOwnProperty(e) && e in os)
        return fc[t] = l[e];
    return t;
  }
  var ds = Be("animationend"), hs = Be("animationiteration"), ys = Be("animationstart"), y1 = Be("transitionrun"), v1 = Be("transitionstart"), m1 = Be("transitioncancel"), vs = Be("transitionend"), ms = /* @__PURE__ */ new Map(), rc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  rc.push("scrollEnd");
  function Dl(t, l) {
    ms.set(t, l), je(l, [t]);
  }
  var gs = /* @__PURE__ */ new WeakMap();
  function pl(t, l) {
    if (typeof t == "object" && t !== null) {
      var e = gs.get(t);
      return e !== void 0 ? e : (l = {
        value: t,
        source: l,
        stack: Hr(l)
      }, gs.set(t, l), l);
    }
    return {
      value: t,
      source: l,
      stack: Hr(l)
    };
  }
  var Sl = [], va = 0, sc = 0;
  function vn() {
    for (var t = va, l = sc = va = 0; l < t; ) {
      var e = Sl[l];
      Sl[l++] = null;
      var a = Sl[l];
      Sl[l++] = null;
      var u = Sl[l];
      Sl[l++] = null;
      var n = Sl[l];
      if (Sl[l++] = null, a !== null && u !== null) {
        var c = a.pending;
        c === null ? u.next = u : (u.next = c.next, c.next = u), a.pending = u;
      }
      n !== 0 && ps(e, u, n);
    }
  }
  function mn(t, l, e, a) {
    Sl[va++] = t, Sl[va++] = l, Sl[va++] = e, Sl[va++] = a, sc |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
  }
  function oc(t, l, e, a) {
    return mn(t, l, e, a), gn(t);
  }
  function ma(t, l) {
    return mn(t, null, null, l), gn(t);
  }
  function ps(t, l, e) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e);
    for (var u = !1, n = t.return; n !== null; )
      n.childLanes |= e, a = n.alternate, a !== null && (a.childLanes |= e), n.tag === 22 && (t = n.stateNode, t === null || t._visibility & 1 || (u = !0)), t = n, n = n.return;
    return t.tag === 3 ? (n = t.stateNode, u && l !== null && (u = 31 - cl(e), t = n.hiddenUpdates, a = t[u], a === null ? t[u] = [l] : a.push(l), l.lane = e | 536870912), n) : null;
  }
  function gn(t) {
    if (50 < Hu)
      throw Hu = 0, pf = null, Error(s(185));
    for (var l = t.return; l !== null; )
      t = l, l = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var ga = {};
  function g1(t, l, e, a) {
    this.tag = t, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = l, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function rl(t, l, e, a) {
    return new g1(t, l, e, a);
  }
  function dc(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function Vl(t, l) {
    var e = t.alternate;
    return e === null ? (e = rl(
      t.tag,
      l,
      t.key,
      t.mode
    ), e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.alternate = t, t.alternate = e) : (e.pendingProps = l, e.type = t.type, e.flags = 0, e.subtreeFlags = 0, e.deletions = null), e.flags = t.flags & 65011712, e.childLanes = t.childLanes, e.lanes = t.lanes, e.child = t.child, e.memoizedProps = t.memoizedProps, e.memoizedState = t.memoizedState, e.updateQueue = t.updateQueue, l = t.dependencies, e.dependencies = l === null ? null : { lanes: l.lanes, firstContext: l.firstContext }, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.refCleanup = t.refCleanup, e;
  }
  function Ss(t, l) {
    t.flags &= 65011714;
    var e = t.alternate;
    return e === null ? (t.childLanes = 0, t.lanes = l, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, t.type = e.type, l = e.dependencies, t.dependencies = l === null ? null : {
      lanes: l.lanes,
      firstContext: l.firstContext
    }), t;
  }
  function pn(t, l, e, a, u, n) {
    var c = 0;
    if (a = t, typeof t == "function") dc(t) && (c = 1);
    else if (typeof t == "string")
      c = Sy(
        t,
        e,
        V.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case It:
          return t = rl(31, e, l, u), t.elementType = It, t.lanes = n, t;
        case Q:
          return Ce(e.children, u, n, l);
        case I:
          c = 8, u |= 24;
          break;
        case P:
          return t = rl(12, e, l, u | 2), t.elementType = P, t.lanes = n, t;
        case K:
          return t = rl(13, e, l, u), t.elementType = K, t.lanes = n, t;
        case lt:
          return t = rl(19, e, l, u), t.elementType = lt, t.lanes = n, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case tt:
              case L:
                c = 10;
                break t;
              case Y:
                c = 9;
                break t;
              case st:
                c = 11;
                break t;
              case k:
                c = 14;
                break t;
              case xt:
                c = 16, a = null;
                break t;
            }
          c = 29, e = Error(
            s(130, t === null ? "null" : typeof t, "")
          ), a = null;
      }
    return l = rl(c, e, l, u), l.elementType = t, l.type = a, l.lanes = n, l;
  }
  function Ce(t, l, e, a) {
    return t = rl(7, t, a, l), t.lanes = e, t;
  }
  function hc(t, l, e) {
    return t = rl(6, t, null, l), t.lanes = e, t;
  }
  function yc(t, l, e) {
    return l = rl(
      4,
      t.children !== null ? t.children : [],
      t.key,
      l
    ), l.lanes = e, l.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, l;
  }
  var pa = [], Sa = 0, Sn = null, bn = 0, bl = [], Al = 0, Ge = null, Kl = 1, wl = "";
  function Xe(t, l) {
    pa[Sa++] = bn, pa[Sa++] = Sn, Sn = t, bn = l;
  }
  function bs(t, l, e) {
    bl[Al++] = Kl, bl[Al++] = wl, bl[Al++] = Ge, Ge = t;
    var a = Kl;
    t = wl;
    var u = 32 - cl(a) - 1;
    a &= ~(1 << u), e += 1;
    var n = 32 - cl(l) + u;
    if (30 < n) {
      var c = u - u % 5;
      n = (a & (1 << c) - 1).toString(32), a >>= c, u -= c, Kl = 1 << 32 - cl(l) + u | e << u | a, wl = n + t;
    } else
      Kl = 1 << n | e << u | a, wl = t;
  }
  function vc(t) {
    t.return !== null && (Xe(t, 1), bs(t, 1, 0));
  }
  function mc(t) {
    for (; t === Sn; )
      Sn = pa[--Sa], pa[Sa] = null, bn = pa[--Sa], pa[Sa] = null;
    for (; t === Ge; )
      Ge = bl[--Al], bl[Al] = null, wl = bl[--Al], bl[Al] = null, Kl = bl[--Al], bl[Al] = null;
  }
  var Pt = null, _t = null, ht = !1, Qe = null, Nl = !1, gc = Error(s(519));
  function Ze(t) {
    var l = Error(s(418, ""));
    throw ou(pl(l, t)), gc;
  }
  function As(t) {
    var l = t.stateNode, e = t.type, a = t.memoizedProps;
    switch (l[$t] = t, l[tl] = a, e) {
      case "dialog":
        rt("cancel", l), rt("close", l);
        break;
      case "iframe":
      case "object":
      case "embed":
        rt("load", l);
        break;
      case "video":
      case "audio":
        for (e = 0; e < qu.length; e++)
          rt(qu[e], l);
        break;
      case "source":
        rt("error", l);
        break;
      case "img":
      case "image":
      case "link":
        rt("error", l), rt("load", l);
        break;
      case "details":
        rt("toggle", l);
        break;
      case "input":
        rt("invalid", l), Yr(
          l,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        ), nn(l);
        break;
      case "select":
        rt("invalid", l);
        break;
      case "textarea":
        rt("invalid", l), Cr(l, a.value, a.defaultValue, a.children), nn(l);
    }
    e = a.children, typeof e != "string" && typeof e != "number" && typeof e != "bigint" || l.textContent === "" + e || a.suppressHydrationWarning === !0 || Gd(l.textContent, e) ? (a.popover != null && (rt("beforetoggle", l), rt("toggle", l)), a.onScroll != null && rt("scroll", l), a.onScrollEnd != null && rt("scrollend", l), a.onClick != null && (l.onclick = ti), l = !0) : l = !1, l || Ze(t);
  }
  function Es(t) {
    for (Pt = t.return; Pt; )
      switch (Pt.tag) {
        case 5:
        case 13:
          Nl = !1;
          return;
        case 27:
        case 3:
          Nl = !0;
          return;
        default:
          Pt = Pt.return;
      }
  }
  function ru(t) {
    if (t !== Pt) return !1;
    if (!ht) return Es(t), ht = !0, !1;
    var l = t.tag, e;
    if ((e = l !== 3 && l !== 27) && ((e = l === 5) && (e = t.type, e = !(e !== "form" && e !== "button") || jf(t.type, t.memoizedProps)), e = !e), e && _t && Ze(t), Es(t), l === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(s(317));
      t: {
        for (t = t.nextSibling, l = 0; t; ) {
          if (t.nodeType === 8)
            if (e = t.data, e === "/$") {
              if (l === 0) {
                _t = Rl(t.nextSibling);
                break t;
              }
              l--;
            } else
              e !== "$" && e !== "$!" && e !== "$?" || l++;
          t = t.nextSibling;
        }
        _t = null;
      }
    } else
      l === 27 ? (l = _t, ze(t.type) ? (t = Cf, Cf = null, _t = t) : _t = l) : _t = Pt ? Rl(t.stateNode.nextSibling) : null;
    return !0;
  }
  function su() {
    _t = Pt = null, ht = !1;
  }
  function Ts() {
    var t = Qe;
    return t !== null && (ul === null ? ul = t : ul.push.apply(
      ul,
      t
    ), Qe = null), t;
  }
  function ou(t) {
    Qe === null ? Qe = [t] : Qe.push(t);
  }
  var pc = M(null), Le = null, Jl = null;
  function re(t, l, e) {
    H(pc, l._currentValue), l._currentValue = e;
  }
  function kl(t) {
    t._currentValue = pc.current, U(pc);
  }
  function Sc(t, l, e) {
    for (; t !== null; ) {
      var a = t.alternate;
      if ((t.childLanes & l) !== l ? (t.childLanes |= l, a !== null && (a.childLanes |= l)) : a !== null && (a.childLanes & l) !== l && (a.childLanes |= l), t === e) break;
      t = t.return;
    }
  }
  function bc(t, l, e, a) {
    var u = t.child;
    for (u !== null && (u.return = t); u !== null; ) {
      var n = u.dependencies;
      if (n !== null) {
        var c = u.child;
        n = n.firstContext;
        t: for (; n !== null; ) {
          var f = n;
          n = u;
          for (var d = 0; d < l.length; d++)
            if (f.context === l[d]) {
              n.lanes |= e, f = n.alternate, f !== null && (f.lanes |= e), Sc(
                n.return,
                e,
                t
              ), a || (c = null);
              break t;
            }
          n = f.next;
        }
      } else if (u.tag === 18) {
        if (c = u.return, c === null) throw Error(s(341));
        c.lanes |= e, n = c.alternate, n !== null && (n.lanes |= e), Sc(c, e, t), c = null;
      } else c = u.child;
      if (c !== null) c.return = u;
      else
        for (c = u; c !== null; ) {
          if (c === t) {
            c = null;
            break;
          }
          if (u = c.sibling, u !== null) {
            u.return = c.return, c = u;
            break;
          }
          c = c.return;
        }
      u = c;
    }
  }
  function du(t, l, e, a) {
    t = null;
    for (var u = l, n = !1; u !== null; ) {
      if (!n) {
        if ((u.flags & 524288) !== 0) n = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var c = u.alternate;
        if (c === null) throw Error(s(387));
        if (c = c.memoizedProps, c !== null) {
          var f = u.type;
          fl(u.pendingProps.value, c.value) || (t !== null ? t.push(f) : t = [f]);
        }
      } else if (u === Gt.current) {
        if (c = u.alternate, c === null) throw Error(s(387));
        c.memoizedState.memoizedState !== u.memoizedState.memoizedState && (t !== null ? t.push(Qu) : t = [Qu]);
      }
      u = u.return;
    }
    t !== null && bc(
      l,
      t,
      e,
      a
    ), l.flags |= 262144;
  }
  function An(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!fl(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function Ve(t) {
    Le = t, Jl = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function Wt(t) {
    return zs(Le, t);
  }
  function En(t, l) {
    return Le === null && Ve(t), zs(t, l);
  }
  function zs(t, l) {
    var e = l._currentValue;
    if (l = { context: l, memoizedValue: e, next: null }, Jl === null) {
      if (t === null) throw Error(s(308));
      Jl = l, t.dependencies = { lanes: 0, firstContext: l }, t.flags |= 524288;
    } else Jl = Jl.next = l;
    return e;
  }
  var p1 = typeof AbortController < "u" ? AbortController : function() {
    var t = [], l = this.signal = {
      aborted: !1,
      addEventListener: function(e, a) {
        t.push(a);
      }
    };
    this.abort = function() {
      l.aborted = !0, t.forEach(function(e) {
        return e();
      });
    };
  }, S1 = i.unstable_scheduleCallback, b1 = i.unstable_NormalPriority, qt = {
    $$typeof: L,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Ac() {
    return {
      controller: new p1(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function hu(t) {
    t.refCount--, t.refCount === 0 && S1(b1, function() {
      t.controller.abort();
    });
  }
  var yu = null, Ec = 0, ba = 0, Aa = null;
  function A1(t, l) {
    if (yu === null) {
      var e = yu = [];
      Ec = 0, ba = Of(), Aa = {
        status: "pending",
        value: void 0,
        then: function(a) {
          e.push(a);
        }
      };
    }
    return Ec++, l.then(Os, Os), l;
  }
  function Os() {
    if (--Ec === 0 && yu !== null) {
      Aa !== null && (Aa.status = "fulfilled");
      var t = yu;
      yu = null, ba = 0, Aa = null;
      for (var l = 0; l < t.length; l++) (0, t[l])();
    }
  }
  function E1(t, l) {
    var e = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(u) {
        e.push(u);
      }
    };
    return t.then(
      function() {
        a.status = "fulfilled", a.value = l;
        for (var u = 0; u < e.length; u++) (0, e[u])(l);
      },
      function(u) {
        for (a.status = "rejected", a.reason = u, u = 0; u < e.length; u++)
          (0, e[u])(void 0);
      }
    ), a;
  }
  var _s = E.S;
  E.S = function(t, l) {
    typeof l == "object" && l !== null && typeof l.then == "function" && A1(t, l), _s !== null && _s(t, l);
  };
  var Ke = M(null);
  function Tc() {
    var t = Ke.current;
    return t !== null ? t : Et.pooledCache;
  }
  function Tn(t, l) {
    l === null ? H(Ke, Ke.current) : H(Ke, l.pool);
  }
  function Ds() {
    var t = Tc();
    return t === null ? null : { parent: qt._currentValue, pool: t };
  }
  var vu = Error(s(460)), Ms = Error(s(474)), zn = Error(s(542)), zc = { then: function() {
  } };
  function Rs(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function On() {
  }
  function xs(t, l, e) {
    switch (e = t[e], e === void 0 ? t.push(l) : e !== l && (l.then(On, On), l = e), l.status) {
      case "fulfilled":
        return l.value;
      case "rejected":
        throw t = l.reason, Ns(t), t;
      default:
        if (typeof l.status == "string") l.then(On, On);
        else {
          if (t = Et, t !== null && 100 < t.shellSuspendCounter)
            throw Error(s(482));
          t = l, t.status = "pending", t.then(
            function(a) {
              if (l.status === "pending") {
                var u = l;
                u.status = "fulfilled", u.value = a;
              }
            },
            function(a) {
              if (l.status === "pending") {
                var u = l;
                u.status = "rejected", u.reason = a;
              }
            }
          );
        }
        switch (l.status) {
          case "fulfilled":
            return l.value;
          case "rejected":
            throw t = l.reason, Ns(t), t;
        }
        throw mu = l, vu;
    }
  }
  var mu = null;
  function Us() {
    if (mu === null) throw Error(s(459));
    var t = mu;
    return mu = null, t;
  }
  function Ns(t) {
    if (t === vu || t === zn)
      throw Error(s(483));
  }
  var se = !1;
  function Oc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function _c(t, l) {
    t = t.updateQueue, l.updateQueue === t && (l.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function oe(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function de(t, l, e) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (mt & 2) !== 0) {
      var u = a.pending;
      return u === null ? l.next = l : (l.next = u.next, u.next = l), a.pending = l, l = gn(t), ps(t, null, e), l;
    }
    return mn(t, a, l, e), gn(t);
  }
  function gu(t, l, e) {
    if (l = l.updateQueue, l !== null && (l = l.shared, (e & 4194048) !== 0)) {
      var a = l.lanes;
      a &= t.pendingLanes, e |= a, l.lanes = e, Or(t, e);
    }
  }
  function Dc(t, l) {
    var e = t.updateQueue, a = t.alternate;
    if (a !== null && (a = a.updateQueue, e === a)) {
      var u = null, n = null;
      if (e = e.firstBaseUpdate, e !== null) {
        do {
          var c = {
            lane: e.lane,
            tag: e.tag,
            payload: e.payload,
            callback: null,
            next: null
          };
          n === null ? u = n = c : n = n.next = c, e = e.next;
        } while (e !== null);
        n === null ? u = n = l : n = n.next = l;
      } else u = n = l;
      e = {
        baseState: a.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: n,
        shared: a.shared,
        callbacks: a.callbacks
      }, t.updateQueue = e;
      return;
    }
    t = e.lastBaseUpdate, t === null ? e.firstBaseUpdate = l : t.next = l, e.lastBaseUpdate = l;
  }
  var Mc = !1;
  function pu() {
    if (Mc) {
      var t = Aa;
      if (t !== null) throw t;
    }
  }
  function Su(t, l, e, a) {
    Mc = !1;
    var u = t.updateQueue;
    se = !1;
    var n = u.firstBaseUpdate, c = u.lastBaseUpdate, f = u.shared.pending;
    if (f !== null) {
      u.shared.pending = null;
      var d = f, g = d.next;
      d.next = null, c === null ? n = g : c.next = g, c = d;
      var T = t.alternate;
      T !== null && (T = T.updateQueue, f = T.lastBaseUpdate, f !== c && (f === null ? T.firstBaseUpdate = g : f.next = g, T.lastBaseUpdate = d));
    }
    if (n !== null) {
      var D = u.baseState;
      c = 0, T = g = d = null, f = n;
      do {
        var p = f.lane & -536870913, S = p !== f.lane;
        if (S ? (ot & p) === p : (a & p) === p) {
          p !== 0 && p === ba && (Mc = !0), T !== null && (T = T.next = {
            lane: 0,
            tag: f.tag,
            payload: f.payload,
            callback: null,
            next: null
          });
          t: {
            var F = t, J = f;
            p = l;
            var bt = e;
            switch (J.tag) {
              case 1:
                if (F = J.payload, typeof F == "function") {
                  D = F.call(bt, D, p);
                  break t;
                }
                D = F;
                break t;
              case 3:
                F.flags = F.flags & -65537 | 128;
              case 0:
                if (F = J.payload, p = typeof F == "function" ? F.call(bt, D, p) : F, p == null) break t;
                D = _({}, D, p);
                break t;
              case 2:
                se = !0;
            }
          }
          p = f.callback, p !== null && (t.flags |= 64, S && (t.flags |= 8192), S = u.callbacks, S === null ? u.callbacks = [p] : S.push(p));
        } else
          S = {
            lane: p,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null
          }, T === null ? (g = T = S, d = D) : T = T.next = S, c |= p;
        if (f = f.next, f === null) {
          if (f = u.shared.pending, f === null)
            break;
          S = f, f = S.next, S.next = null, u.lastBaseUpdate = S, u.shared.pending = null;
        }
      } while (!0);
      T === null && (d = D), u.baseState = d, u.firstBaseUpdate = g, u.lastBaseUpdate = T, n === null && (u.shared.lanes = 0), be |= c, t.lanes = c, t.memoizedState = D;
    }
  }
  function Hs(t, l) {
    if (typeof t != "function")
      throw Error(s(191, t));
    t.call(l);
  }
  function js(t, l) {
    var e = t.callbacks;
    if (e !== null)
      for (t.callbacks = null, t = 0; t < e.length; t++)
        Hs(e[t], l);
  }
  var Ea = M(null), _n = M(0);
  function qs(t, l) {
    t = le, H(_n, t), H(Ea, l), le = t | l.baseLanes;
  }
  function Rc() {
    H(_n, le), H(Ea, Ea.current);
  }
  function xc() {
    le = _n.current, U(Ea), U(_n);
  }
  var he = 0, ut = null, pt = null, Ut = null, Dn = !1, Ta = !1, we = !1, Mn = 0, bu = 0, za = null, T1 = 0;
  function Mt() {
    throw Error(s(321));
  }
  function Uc(t, l) {
    if (l === null) return !1;
    for (var e = 0; e < l.length && e < t.length; e++)
      if (!fl(t[e], l[e])) return !1;
    return !0;
  }
  function Nc(t, l, e, a, u, n) {
    return he = n, ut = l, l.memoizedState = null, l.updateQueue = null, l.lanes = 0, E.H = t === null || t.memoizedState === null ? So : bo, we = !1, n = e(a, u), we = !1, Ta && (n = Bs(
      l,
      e,
      a,
      u
    )), Ys(t), n;
  }
  function Ys(t) {
    E.H = jn;
    var l = pt !== null && pt.next !== null;
    if (he = 0, Ut = pt = ut = null, Dn = !1, bu = 0, za = null, l) throw Error(s(300));
    t === null || Qt || (t = t.dependencies, t !== null && An(t) && (Qt = !0));
  }
  function Bs(t, l, e, a) {
    ut = t;
    var u = 0;
    do {
      if (Ta && (za = null), bu = 0, Ta = !1, 25 <= u) throw Error(s(301));
      if (u += 1, Ut = pt = null, t.updateQueue != null) {
        var n = t.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      E.H = x1, n = l(e, a);
    } while (Ta);
    return n;
  }
  function z1() {
    var t = E.H, l = t.useState()[0];
    return l = typeof l.then == "function" ? Au(l) : l, t = t.useState()[0], (pt !== null ? pt.memoizedState : null) !== t && (ut.flags |= 1024), l;
  }
  function Hc() {
    var t = Mn !== 0;
    return Mn = 0, t;
  }
  function jc(t, l, e) {
    l.updateQueue = t.updateQueue, l.flags &= -2053, t.lanes &= ~e;
  }
  function qc(t) {
    if (Dn) {
      for (t = t.memoizedState; t !== null; ) {
        var l = t.queue;
        l !== null && (l.pending = null), t = t.next;
      }
      Dn = !1;
    }
    he = 0, Ut = pt = ut = null, Ta = !1, bu = Mn = 0, za = null;
  }
  function el() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Ut === null ? ut.memoizedState = Ut = t : Ut = Ut.next = t, Ut;
  }
  function Nt() {
    if (pt === null) {
      var t = ut.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = pt.next;
    var l = Ut === null ? ut.memoizedState : Ut.next;
    if (l !== null)
      Ut = l, pt = t;
    else {
      if (t === null)
        throw ut.alternate === null ? Error(s(467)) : Error(s(310));
      pt = t, t = {
        memoizedState: pt.memoizedState,
        baseState: pt.baseState,
        baseQueue: pt.baseQueue,
        queue: pt.queue,
        next: null
      }, Ut === null ? ut.memoizedState = Ut = t : Ut = Ut.next = t;
    }
    return Ut;
  }
  function Yc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Au(t) {
    var l = bu;
    return bu += 1, za === null && (za = []), t = xs(za, t, l), l = ut, (Ut === null ? l.memoizedState : Ut.next) === null && (l = l.alternate, E.H = l === null || l.memoizedState === null ? So : bo), t;
  }
  function Rn(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Au(t);
      if (t.$$typeof === L) return Wt(t);
    }
    throw Error(s(438, String(t)));
  }
  function Bc(t) {
    var l = null, e = ut.updateQueue;
    if (e !== null && (l = e.memoCache), l == null) {
      var a = ut.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (l = {
        data: a.data.map(function(u) {
          return u.slice();
        }),
        index: 0
      })));
    }
    if (l == null && (l = { data: [], index: 0 }), e === null && (e = Yc(), ut.updateQueue = e), e.memoCache = l, e = l.data[l.index], e === void 0)
      for (e = l.data[l.index] = Array(t), a = 0; a < t; a++)
        e[a] = ne;
    return l.index++, e;
  }
  function $l(t, l) {
    return typeof l == "function" ? l(t) : l;
  }
  function xn(t) {
    var l = Nt();
    return Cc(l, pt, t);
  }
  function Cc(t, l, e) {
    var a = t.queue;
    if (a === null) throw Error(s(311));
    a.lastRenderedReducer = e;
    var u = t.baseQueue, n = a.pending;
    if (n !== null) {
      if (u !== null) {
        var c = u.next;
        u.next = n.next, n.next = c;
      }
      l.baseQueue = u = n, a.pending = null;
    }
    if (n = t.baseState, u === null) t.memoizedState = n;
    else {
      l = u.next;
      var f = c = null, d = null, g = l, T = !1;
      do {
        var D = g.lane & -536870913;
        if (D !== g.lane ? (ot & D) === D : (he & D) === D) {
          var p = g.revertLane;
          if (p === 0)
            d !== null && (d = d.next = {
              lane: 0,
              revertLane: 0,
              action: g.action,
              hasEagerState: g.hasEagerState,
              eagerState: g.eagerState,
              next: null
            }), D === ba && (T = !0);
          else if ((he & p) === p) {
            g = g.next, p === ba && (T = !0);
            continue;
          } else
            D = {
              lane: 0,
              revertLane: g.revertLane,
              action: g.action,
              hasEagerState: g.hasEagerState,
              eagerState: g.eagerState,
              next: null
            }, d === null ? (f = d = D, c = n) : d = d.next = D, ut.lanes |= p, be |= p;
          D = g.action, we && e(n, D), n = g.hasEagerState ? g.eagerState : e(n, D);
        } else
          p = {
            lane: D,
            revertLane: g.revertLane,
            action: g.action,
            hasEagerState: g.hasEagerState,
            eagerState: g.eagerState,
            next: null
          }, d === null ? (f = d = p, c = n) : d = d.next = p, ut.lanes |= D, be |= D;
        g = g.next;
      } while (g !== null && g !== l);
      if (d === null ? c = n : d.next = f, !fl(n, t.memoizedState) && (Qt = !0, T && (e = Aa, e !== null)))
        throw e;
      t.memoizedState = n, t.baseState = c, t.baseQueue = d, a.lastRenderedState = n;
    }
    return u === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function Gc(t) {
    var l = Nt(), e = l.queue;
    if (e === null) throw Error(s(311));
    e.lastRenderedReducer = t;
    var a = e.dispatch, u = e.pending, n = l.memoizedState;
    if (u !== null) {
      e.pending = null;
      var c = u = u.next;
      do
        n = t(n, c.action), c = c.next;
      while (c !== u);
      fl(n, l.memoizedState) || (Qt = !0), l.memoizedState = n, l.baseQueue === null && (l.baseState = n), e.lastRenderedState = n;
    }
    return [n, a];
  }
  function Cs(t, l, e) {
    var a = ut, u = Nt(), n = ht;
    if (n) {
      if (e === void 0) throw Error(s(407));
      e = e();
    } else e = l();
    var c = !fl(
      (pt || u).memoizedState,
      e
    );
    c && (u.memoizedState = e, Qt = !0), u = u.queue;
    var f = Qs.bind(null, a, u, t);
    if (Eu(2048, 8, f, [t]), u.getSnapshot !== l || c || Ut !== null && Ut.memoizedState.tag & 1) {
      if (a.flags |= 2048, Oa(
        9,
        Un(),
        Xs.bind(
          null,
          a,
          u,
          e,
          l
        ),
        null
      ), Et === null) throw Error(s(349));
      n || (he & 124) !== 0 || Gs(a, l, e);
    }
    return e;
  }
  function Gs(t, l, e) {
    t.flags |= 16384, t = { getSnapshot: l, value: e }, l = ut.updateQueue, l === null ? (l = Yc(), ut.updateQueue = l, l.stores = [t]) : (e = l.stores, e === null ? l.stores = [t] : e.push(t));
  }
  function Xs(t, l, e, a) {
    l.value = e, l.getSnapshot = a, Zs(l) && Ls(t);
  }
  function Qs(t, l, e) {
    return e(function() {
      Zs(l) && Ls(t);
    });
  }
  function Zs(t) {
    var l = t.getSnapshot;
    t = t.value;
    try {
      var e = l();
      return !fl(t, e);
    } catch {
      return !0;
    }
  }
  function Ls(t) {
    var l = ma(t, 2);
    l !== null && yl(l, t, 2);
  }
  function Xc(t) {
    var l = el();
    if (typeof t == "function") {
      var e = t;
      if (t = e(), we) {
        ie(!0);
        try {
          e();
        } finally {
          ie(!1);
        }
      }
    }
    return l.memoizedState = l.baseState = t, l.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: $l,
      lastRenderedState: t
    }, l;
  }
  function Vs(t, l, e, a) {
    return t.baseState = e, Cc(
      t,
      pt,
      typeof a == "function" ? a : $l
    );
  }
  function O1(t, l, e, a, u) {
    if (Hn(t)) throw Error(s(485));
    if (t = l.action, t !== null) {
      var n = {
        payload: u,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(c) {
          n.listeners.push(c);
        }
      };
      E.T !== null ? e(!0) : n.isTransition = !1, a(n), e = l.pending, e === null ? (n.next = l.pending = n, Ks(l, n)) : (n.next = e.next, l.pending = e.next = n);
    }
  }
  function Ks(t, l) {
    var e = l.action, a = l.payload, u = t.state;
    if (l.isTransition) {
      var n = E.T, c = {};
      E.T = c;
      try {
        var f = e(u, a), d = E.S;
        d !== null && d(c, f), ws(t, l, f);
      } catch (g) {
        Qc(t, l, g);
      } finally {
        E.T = n;
      }
    } else
      try {
        n = e(u, a), ws(t, l, n);
      } catch (g) {
        Qc(t, l, g);
      }
  }
  function ws(t, l, e) {
    e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(
      function(a) {
        Js(t, l, a);
      },
      function(a) {
        return Qc(t, l, a);
      }
    ) : Js(t, l, e);
  }
  function Js(t, l, e) {
    l.status = "fulfilled", l.value = e, ks(l), t.state = e, l = t.pending, l !== null && (e = l.next, e === l ? t.pending = null : (e = e.next, l.next = e, Ks(t, e)));
  }
  function Qc(t, l, e) {
    var a = t.pending;
    if (t.pending = null, a !== null) {
      a = a.next;
      do
        l.status = "rejected", l.reason = e, ks(l), l = l.next;
      while (l !== a);
    }
    t.action = null;
  }
  function ks(t) {
    t = t.listeners;
    for (var l = 0; l < t.length; l++) (0, t[l])();
  }
  function $s(t, l) {
    return l;
  }
  function Ws(t, l) {
    if (ht) {
      var e = Et.formState;
      if (e !== null) {
        t: {
          var a = ut;
          if (ht) {
            if (_t) {
              l: {
                for (var u = _t, n = Nl; u.nodeType !== 8; ) {
                  if (!n) {
                    u = null;
                    break l;
                  }
                  if (u = Rl(
                    u.nextSibling
                  ), u === null) {
                    u = null;
                    break l;
                  }
                }
                n = u.data, u = n === "F!" || n === "F" ? u : null;
              }
              if (u) {
                _t = Rl(
                  u.nextSibling
                ), a = u.data === "F!";
                break t;
              }
            }
            Ze(a);
          }
          a = !1;
        }
        a && (l = e[0]);
      }
    }
    return e = el(), e.memoizedState = e.baseState = l, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: $s,
      lastRenderedState: l
    }, e.queue = a, e = mo.bind(
      null,
      ut,
      a
    ), a.dispatch = e, a = Xc(!1), n = wc.bind(
      null,
      ut,
      !1,
      a.queue
    ), a = el(), u = {
      state: l,
      dispatch: null,
      action: t,
      pending: null
    }, a.queue = u, e = O1.bind(
      null,
      ut,
      u,
      n,
      e
    ), u.dispatch = e, a.memoizedState = t, [l, e, !1];
  }
  function Fs(t) {
    var l = Nt();
    return Is(l, pt, t);
  }
  function Is(t, l, e) {
    if (l = Cc(
      t,
      l,
      $s
    )[0], t = xn($l)[0], typeof l == "object" && l !== null && typeof l.then == "function")
      try {
        var a = Au(l);
      } catch (c) {
        throw c === vu ? zn : c;
      }
    else a = l;
    l = Nt();
    var u = l.queue, n = u.dispatch;
    return e !== l.memoizedState && (ut.flags |= 2048, Oa(
      9,
      Un(),
      _1.bind(null, u, e),
      null
    )), [a, n, t];
  }
  function _1(t, l) {
    t.action = l;
  }
  function Ps(t) {
    var l = Nt(), e = pt;
    if (e !== null)
      return Is(l, e, t);
    Nt(), l = l.memoizedState, e = Nt();
    var a = e.queue.dispatch;
    return e.memoizedState = t, [l, a, !1];
  }
  function Oa(t, l, e, a) {
    return t = { tag: t, create: e, deps: a, inst: l, next: null }, l = ut.updateQueue, l === null && (l = Yc(), ut.updateQueue = l), e = l.lastEffect, e === null ? l.lastEffect = t.next = t : (a = e.next, e.next = t, t.next = a, l.lastEffect = t), t;
  }
  function Un() {
    return { destroy: void 0, resource: void 0 };
  }
  function to() {
    return Nt().memoizedState;
  }
  function Nn(t, l, e, a) {
    var u = el();
    a = a === void 0 ? null : a, ut.flags |= t, u.memoizedState = Oa(
      1 | l,
      Un(),
      e,
      a
    );
  }
  function Eu(t, l, e, a) {
    var u = Nt();
    a = a === void 0 ? null : a;
    var n = u.memoizedState.inst;
    pt !== null && a !== null && Uc(a, pt.memoizedState.deps) ? u.memoizedState = Oa(l, n, e, a) : (ut.flags |= t, u.memoizedState = Oa(
      1 | l,
      n,
      e,
      a
    ));
  }
  function lo(t, l) {
    Nn(8390656, 8, t, l);
  }
  function eo(t, l) {
    Eu(2048, 8, t, l);
  }
  function ao(t, l) {
    return Eu(4, 2, t, l);
  }
  function uo(t, l) {
    return Eu(4, 4, t, l);
  }
  function no(t, l) {
    if (typeof l == "function") {
      t = t();
      var e = l(t);
      return function() {
        typeof e == "function" ? e() : l(null);
      };
    }
    if (l != null)
      return t = t(), l.current = t, function() {
        l.current = null;
      };
  }
  function io(t, l, e) {
    e = e != null ? e.concat([t]) : null, Eu(4, 4, no.bind(null, l, t), e);
  }
  function Zc() {
  }
  function co(t, l) {
    var e = Nt();
    l = l === void 0 ? null : l;
    var a = e.memoizedState;
    return l !== null && Uc(l, a[1]) ? a[0] : (e.memoizedState = [t, l], t);
  }
  function fo(t, l) {
    var e = Nt();
    l = l === void 0 ? null : l;
    var a = e.memoizedState;
    if (l !== null && Uc(l, a[1]))
      return a[0];
    if (a = t(), we) {
      ie(!0);
      try {
        t();
      } finally {
        ie(!1);
      }
    }
    return e.memoizedState = [a, l], a;
  }
  function Lc(t, l, e) {
    return e === void 0 || (he & 1073741824) !== 0 ? t.memoizedState = l : (t.memoizedState = e, t = dd(), ut.lanes |= t, be |= t, e);
  }
  function ro(t, l, e, a) {
    return fl(e, l) ? e : Ea.current !== null ? (t = Lc(t, e, a), fl(t, l) || (Qt = !0), t) : (he & 42) === 0 ? (Qt = !0, t.memoizedState = e) : (t = dd(), ut.lanes |= t, be |= t, l);
  }
  function so(t, l, e, a, u) {
    var n = N.p;
    N.p = n !== 0 && 8 > n ? n : 8;
    var c = E.T, f = {};
    E.T = f, wc(t, !1, l, e);
    try {
      var d = u(), g = E.S;
      if (g !== null && g(f, d), d !== null && typeof d == "object" && typeof d.then == "function") {
        var T = E1(
          d,
          a
        );
        Tu(
          t,
          l,
          T,
          hl(t)
        );
      } else
        Tu(
          t,
          l,
          a,
          hl(t)
        );
    } catch (D) {
      Tu(
        t,
        l,
        { then: function() {
        }, status: "rejected", reason: D },
        hl()
      );
    } finally {
      N.p = n, E.T = c;
    }
  }
  function D1() {
  }
  function Vc(t, l, e, a) {
    if (t.tag !== 5) throw Error(s(476));
    var u = oo(t).queue;
    so(
      t,
      u,
      l,
      w,
      e === null ? D1 : function() {
        return ho(t), e(a);
      }
    );
  }
  function oo(t) {
    var l = t.memoizedState;
    if (l !== null) return l;
    l = {
      memoizedState: w,
      baseState: w,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: $l,
        lastRenderedState: w
      },
      next: null
    };
    var e = {};
    return l.next = {
      memoizedState: e,
      baseState: e,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: $l,
        lastRenderedState: e
      },
      next: null
    }, t.memoizedState = l, t = t.alternate, t !== null && (t.memoizedState = l), l;
  }
  function ho(t) {
    var l = oo(t).next.queue;
    Tu(t, l, {}, hl());
  }
  function Kc() {
    return Wt(Qu);
  }
  function yo() {
    return Nt().memoizedState;
  }
  function vo() {
    return Nt().memoizedState;
  }
  function M1(t) {
    for (var l = t.return; l !== null; ) {
      switch (l.tag) {
        case 24:
        case 3:
          var e = hl();
          t = oe(e);
          var a = de(l, t, e);
          a !== null && (yl(a, l, e), gu(a, l, e)), l = { cache: Ac() }, t.payload = l;
          return;
      }
      l = l.return;
    }
  }
  function R1(t, l, e) {
    var a = hl();
    e = {
      lane: a,
      revertLane: 0,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Hn(t) ? go(l, e) : (e = oc(t, l, e, a), e !== null && (yl(e, t, a), po(e, l, a)));
  }
  function mo(t, l, e) {
    var a = hl();
    Tu(t, l, e, a);
  }
  function Tu(t, l, e, a) {
    var u = {
      lane: a,
      revertLane: 0,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Hn(t)) go(l, u);
    else {
      var n = t.alternate;
      if (t.lanes === 0 && (n === null || n.lanes === 0) && (n = l.lastRenderedReducer, n !== null))
        try {
          var c = l.lastRenderedState, f = n(c, e);
          if (u.hasEagerState = !0, u.eagerState = f, fl(f, c))
            return mn(t, l, u, 0), Et === null && vn(), !1;
        } catch {
        } finally {
        }
      if (e = oc(t, l, u, a), e !== null)
        return yl(e, t, a), po(e, l, a), !0;
    }
    return !1;
  }
  function wc(t, l, e, a) {
    if (a = {
      lane: 2,
      revertLane: Of(),
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Hn(t)) {
      if (l) throw Error(s(479));
    } else
      l = oc(
        t,
        e,
        a,
        2
      ), l !== null && yl(l, t, 2);
  }
  function Hn(t) {
    var l = t.alternate;
    return t === ut || l !== null && l === ut;
  }
  function go(t, l) {
    Ta = Dn = !0;
    var e = t.pending;
    e === null ? l.next = l : (l.next = e.next, e.next = l), t.pending = l;
  }
  function po(t, l, e) {
    if ((e & 4194048) !== 0) {
      var a = l.lanes;
      a &= t.pendingLanes, e |= a, l.lanes = e, Or(t, e);
    }
  }
  var jn = {
    readContext: Wt,
    use: Rn,
    useCallback: Mt,
    useContext: Mt,
    useEffect: Mt,
    useImperativeHandle: Mt,
    useLayoutEffect: Mt,
    useInsertionEffect: Mt,
    useMemo: Mt,
    useReducer: Mt,
    useRef: Mt,
    useState: Mt,
    useDebugValue: Mt,
    useDeferredValue: Mt,
    useTransition: Mt,
    useSyncExternalStore: Mt,
    useId: Mt,
    useHostTransitionStatus: Mt,
    useFormState: Mt,
    useActionState: Mt,
    useOptimistic: Mt,
    useMemoCache: Mt,
    useCacheRefresh: Mt
  }, So = {
    readContext: Wt,
    use: Rn,
    useCallback: function(t, l) {
      return el().memoizedState = [
        t,
        l === void 0 ? null : l
      ], t;
    },
    useContext: Wt,
    useEffect: lo,
    useImperativeHandle: function(t, l, e) {
      e = e != null ? e.concat([t]) : null, Nn(
        4194308,
        4,
        no.bind(null, l, t),
        e
      );
    },
    useLayoutEffect: function(t, l) {
      return Nn(4194308, 4, t, l);
    },
    useInsertionEffect: function(t, l) {
      Nn(4, 2, t, l);
    },
    useMemo: function(t, l) {
      var e = el();
      l = l === void 0 ? null : l;
      var a = t();
      if (we) {
        ie(!0);
        try {
          t();
        } finally {
          ie(!1);
        }
      }
      return e.memoizedState = [a, l], a;
    },
    useReducer: function(t, l, e) {
      var a = el();
      if (e !== void 0) {
        var u = e(l);
        if (we) {
          ie(!0);
          try {
            e(l);
          } finally {
            ie(!1);
          }
        }
      } else u = l;
      return a.memoizedState = a.baseState = u, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: u
      }, a.queue = t, t = t.dispatch = R1.bind(
        null,
        ut,
        t
      ), [a.memoizedState, t];
    },
    useRef: function(t) {
      var l = el();
      return t = { current: t }, l.memoizedState = t;
    },
    useState: function(t) {
      t = Xc(t);
      var l = t.queue, e = mo.bind(null, ut, l);
      return l.dispatch = e, [t.memoizedState, e];
    },
    useDebugValue: Zc,
    useDeferredValue: function(t, l) {
      var e = el();
      return Lc(e, t, l);
    },
    useTransition: function() {
      var t = Xc(!1);
      return t = so.bind(
        null,
        ut,
        t.queue,
        !0,
        !1
      ), el().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, l, e) {
      var a = ut, u = el();
      if (ht) {
        if (e === void 0)
          throw Error(s(407));
        e = e();
      } else {
        if (e = l(), Et === null)
          throw Error(s(349));
        (ot & 124) !== 0 || Gs(a, l, e);
      }
      u.memoizedState = e;
      var n = { value: e, getSnapshot: l };
      return u.queue = n, lo(Qs.bind(null, a, n, t), [
        t
      ]), a.flags |= 2048, Oa(
        9,
        Un(),
        Xs.bind(
          null,
          a,
          n,
          e,
          l
        ),
        null
      ), e;
    },
    useId: function() {
      var t = el(), l = Et.identifierPrefix;
      if (ht) {
        var e = wl, a = Kl;
        e = (a & ~(1 << 32 - cl(a) - 1)).toString(32) + e, l = "«" + l + "R" + e, e = Mn++, 0 < e && (l += "H" + e.toString(32)), l += "»";
      } else
        e = T1++, l = "«" + l + "r" + e.toString(32) + "»";
      return t.memoizedState = l;
    },
    useHostTransitionStatus: Kc,
    useFormState: Ws,
    useActionState: Ws,
    useOptimistic: function(t) {
      var l = el();
      l.memoizedState = l.baseState = t;
      var e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return l.queue = e, l = wc.bind(
        null,
        ut,
        !0,
        e
      ), e.dispatch = l, [t, l];
    },
    useMemoCache: Bc,
    useCacheRefresh: function() {
      return el().memoizedState = M1.bind(
        null,
        ut
      );
    }
  }, bo = {
    readContext: Wt,
    use: Rn,
    useCallback: co,
    useContext: Wt,
    useEffect: eo,
    useImperativeHandle: io,
    useInsertionEffect: ao,
    useLayoutEffect: uo,
    useMemo: fo,
    useReducer: xn,
    useRef: to,
    useState: function() {
      return xn($l);
    },
    useDebugValue: Zc,
    useDeferredValue: function(t, l) {
      var e = Nt();
      return ro(
        e,
        pt.memoizedState,
        t,
        l
      );
    },
    useTransition: function() {
      var t = xn($l)[0], l = Nt().memoizedState;
      return [
        typeof t == "boolean" ? t : Au(t),
        l
      ];
    },
    useSyncExternalStore: Cs,
    useId: yo,
    useHostTransitionStatus: Kc,
    useFormState: Fs,
    useActionState: Fs,
    useOptimistic: function(t, l) {
      var e = Nt();
      return Vs(e, pt, t, l);
    },
    useMemoCache: Bc,
    useCacheRefresh: vo
  }, x1 = {
    readContext: Wt,
    use: Rn,
    useCallback: co,
    useContext: Wt,
    useEffect: eo,
    useImperativeHandle: io,
    useInsertionEffect: ao,
    useLayoutEffect: uo,
    useMemo: fo,
    useReducer: Gc,
    useRef: to,
    useState: function() {
      return Gc($l);
    },
    useDebugValue: Zc,
    useDeferredValue: function(t, l) {
      var e = Nt();
      return pt === null ? Lc(e, t, l) : ro(
        e,
        pt.memoizedState,
        t,
        l
      );
    },
    useTransition: function() {
      var t = Gc($l)[0], l = Nt().memoizedState;
      return [
        typeof t == "boolean" ? t : Au(t),
        l
      ];
    },
    useSyncExternalStore: Cs,
    useId: yo,
    useHostTransitionStatus: Kc,
    useFormState: Ps,
    useActionState: Ps,
    useOptimistic: function(t, l) {
      var e = Nt();
      return pt !== null ? Vs(e, pt, t, l) : (e.baseState = t, [t, e.queue.dispatch]);
    },
    useMemoCache: Bc,
    useCacheRefresh: vo
  }, _a = null, zu = 0;
  function qn(t) {
    var l = zu;
    return zu += 1, _a === null && (_a = []), xs(_a, t, l);
  }
  function Ou(t, l) {
    l = l.props.ref, t.ref = l !== void 0 ? l : null;
  }
  function Yn(t, l) {
    throw l.$$typeof === C ? Error(s(525)) : (t = Object.prototype.toString.call(l), Error(
      s(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(l).join(", ") + "}" : t
      )
    ));
  }
  function Ao(t) {
    var l = t._init;
    return l(t._payload);
  }
  function Eo(t) {
    function l(v, y) {
      if (t) {
        var m = v.deletions;
        m === null ? (v.deletions = [y], v.flags |= 16) : m.push(y);
      }
    }
    function e(v, y) {
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
    function u(v, y) {
      return v = Vl(v, y), v.index = 0, v.sibling = null, v;
    }
    function n(v, y, m) {
      return v.index = m, t ? (m = v.alternate, m !== null ? (m = m.index, m < y ? (v.flags |= 67108866, y) : m) : (v.flags |= 67108866, y)) : (v.flags |= 1048576, y);
    }
    function c(v) {
      return t && v.alternate === null && (v.flags |= 67108866), v;
    }
    function f(v, y, m, z) {
      return y === null || y.tag !== 6 ? (y = hc(m, v.mode, z), y.return = v, y) : (y = u(y, m), y.return = v, y);
    }
    function d(v, y, m, z) {
      var B = m.type;
      return B === Q ? T(
        v,
        y,
        m.props.children,
        z,
        m.key
      ) : y !== null && (y.elementType === B || typeof B == "object" && B !== null && B.$$typeof === xt && Ao(B) === y.type) ? (y = u(y, m.props), Ou(y, m), y.return = v, y) : (y = pn(
        m.type,
        m.key,
        m.props,
        null,
        v.mode,
        z
      ), Ou(y, m), y.return = v, y);
    }
    function g(v, y, m, z) {
      return y === null || y.tag !== 4 || y.stateNode.containerInfo !== m.containerInfo || y.stateNode.implementation !== m.implementation ? (y = yc(m, v.mode, z), y.return = v, y) : (y = u(y, m.children || []), y.return = v, y);
    }
    function T(v, y, m, z, B) {
      return y === null || y.tag !== 7 ? (y = Ce(
        m,
        v.mode,
        z,
        B
      ), y.return = v, y) : (y = u(y, m), y.return = v, y);
    }
    function D(v, y, m) {
      if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint")
        return y = hc(
          "" + y,
          v.mode,
          m
        ), y.return = v, y;
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case X:
            return m = pn(
              y.type,
              y.key,
              y.props,
              null,
              v.mode,
              m
            ), Ou(m, y), m.return = v, m;
          case q:
            return y = yc(
              y,
              v.mode,
              m
            ), y.return = v, y;
          case xt:
            var z = y._init;
            return y = z(y._payload), D(v, y, m);
        }
        if (Ct(y) || Bt(y))
          return y = Ce(
            y,
            v.mode,
            m,
            null
          ), y.return = v, y;
        if (typeof y.then == "function")
          return D(v, qn(y), m);
        if (y.$$typeof === L)
          return D(
            v,
            En(v, y),
            m
          );
        Yn(v, y);
      }
      return null;
    }
    function p(v, y, m, z) {
      var B = y !== null ? y.key : null;
      if (typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint")
        return B !== null ? null : f(v, y, "" + m, z);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case X:
            return m.key === B ? d(v, y, m, z) : null;
          case q:
            return m.key === B ? g(v, y, m, z) : null;
          case xt:
            return B = m._init, m = B(m._payload), p(v, y, m, z);
        }
        if (Ct(m) || Bt(m))
          return B !== null ? null : T(v, y, m, z, null);
        if (typeof m.then == "function")
          return p(
            v,
            y,
            qn(m),
            z
          );
        if (m.$$typeof === L)
          return p(
            v,
            y,
            En(v, m),
            z
          );
        Yn(v, m);
      }
      return null;
    }
    function S(v, y, m, z, B) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return v = v.get(m) || null, f(y, v, "" + z, B);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case X:
            return v = v.get(
              z.key === null ? m : z.key
            ) || null, d(y, v, z, B);
          case q:
            return v = v.get(
              z.key === null ? m : z.key
            ) || null, g(y, v, z, B);
          case xt:
            var nt = z._init;
            return z = nt(z._payload), S(
              v,
              y,
              m,
              z,
              B
            );
        }
        if (Ct(z) || Bt(z))
          return v = v.get(m) || null, T(y, v, z, B, null);
        if (typeof z.then == "function")
          return S(
            v,
            y,
            m,
            qn(z),
            B
          );
        if (z.$$typeof === L)
          return S(
            v,
            y,
            m,
            En(y, z),
            B
          );
        Yn(y, z);
      }
      return null;
    }
    function F(v, y, m, z) {
      for (var B = null, nt = null, Z = y, W = y = 0, Lt = null; Z !== null && W < m.length; W++) {
        Z.index > W ? (Lt = Z, Z = null) : Lt = Z.sibling;
        var dt = p(
          v,
          Z,
          m[W],
          z
        );
        if (dt === null) {
          Z === null && (Z = Lt);
          break;
        }
        t && Z && dt.alternate === null && l(v, Z), y = n(dt, y, W), nt === null ? B = dt : nt.sibling = dt, nt = dt, Z = Lt;
      }
      if (W === m.length)
        return e(v, Z), ht && Xe(v, W), B;
      if (Z === null) {
        for (; W < m.length; W++)
          Z = D(v, m[W], z), Z !== null && (y = n(
            Z,
            y,
            W
          ), nt === null ? B = Z : nt.sibling = Z, nt = Z);
        return ht && Xe(v, W), B;
      }
      for (Z = a(Z); W < m.length; W++)
        Lt = S(
          Z,
          v,
          W,
          m[W],
          z
        ), Lt !== null && (t && Lt.alternate !== null && Z.delete(
          Lt.key === null ? W : Lt.key
        ), y = n(
          Lt,
          y,
          W
        ), nt === null ? B = Lt : nt.sibling = Lt, nt = Lt);
      return t && Z.forEach(function(Re) {
        return l(v, Re);
      }), ht && Xe(v, W), B;
    }
    function J(v, y, m, z) {
      if (m == null) throw Error(s(151));
      for (var B = null, nt = null, Z = y, W = y = 0, Lt = null, dt = m.next(); Z !== null && !dt.done; W++, dt = m.next()) {
        Z.index > W ? (Lt = Z, Z = null) : Lt = Z.sibling;
        var Re = p(v, Z, dt.value, z);
        if (Re === null) {
          Z === null && (Z = Lt);
          break;
        }
        t && Z && Re.alternate === null && l(v, Z), y = n(Re, y, W), nt === null ? B = Re : nt.sibling = Re, nt = Re, Z = Lt;
      }
      if (dt.done)
        return e(v, Z), ht && Xe(v, W), B;
      if (Z === null) {
        for (; !dt.done; W++, dt = m.next())
          dt = D(v, dt.value, z), dt !== null && (y = n(dt, y, W), nt === null ? B = dt : nt.sibling = dt, nt = dt);
        return ht && Xe(v, W), B;
      }
      for (Z = a(Z); !dt.done; W++, dt = m.next())
        dt = S(Z, v, W, dt.value, z), dt !== null && (t && dt.alternate !== null && Z.delete(dt.key === null ? W : dt.key), y = n(dt, y, W), nt === null ? B = dt : nt.sibling = dt, nt = dt);
      return t && Z.forEach(function(Uy) {
        return l(v, Uy);
      }), ht && Xe(v, W), B;
    }
    function bt(v, y, m, z) {
      if (typeof m == "object" && m !== null && m.type === Q && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case X:
            t: {
              for (var B = m.key; y !== null; ) {
                if (y.key === B) {
                  if (B = m.type, B === Q) {
                    if (y.tag === 7) {
                      e(
                        v,
                        y.sibling
                      ), z = u(
                        y,
                        m.props.children
                      ), z.return = v, v = z;
                      break t;
                    }
                  } else if (y.elementType === B || typeof B == "object" && B !== null && B.$$typeof === xt && Ao(B) === y.type) {
                    e(
                      v,
                      y.sibling
                    ), z = u(y, m.props), Ou(z, m), z.return = v, v = z;
                    break t;
                  }
                  e(v, y);
                  break;
                } else l(v, y);
                y = y.sibling;
              }
              m.type === Q ? (z = Ce(
                m.props.children,
                v.mode,
                z,
                m.key
              ), z.return = v, v = z) : (z = pn(
                m.type,
                m.key,
                m.props,
                null,
                v.mode,
                z
              ), Ou(z, m), z.return = v, v = z);
            }
            return c(v);
          case q:
            t: {
              for (B = m.key; y !== null; ) {
                if (y.key === B)
                  if (y.tag === 4 && y.stateNode.containerInfo === m.containerInfo && y.stateNode.implementation === m.implementation) {
                    e(
                      v,
                      y.sibling
                    ), z = u(y, m.children || []), z.return = v, v = z;
                    break t;
                  } else {
                    e(v, y);
                    break;
                  }
                else l(v, y);
                y = y.sibling;
              }
              z = yc(m, v.mode, z), z.return = v, v = z;
            }
            return c(v);
          case xt:
            return B = m._init, m = B(m._payload), bt(
              v,
              y,
              m,
              z
            );
        }
        if (Ct(m))
          return F(
            v,
            y,
            m,
            z
          );
        if (Bt(m)) {
          if (B = Bt(m), typeof B != "function") throw Error(s(150));
          return m = B.call(m), J(
            v,
            y,
            m,
            z
          );
        }
        if (typeof m.then == "function")
          return bt(
            v,
            y,
            qn(m),
            z
          );
        if (m.$$typeof === L)
          return bt(
            v,
            y,
            En(v, m),
            z
          );
        Yn(v, m);
      }
      return typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint" ? (m = "" + m, y !== null && y.tag === 6 ? (e(v, y.sibling), z = u(y, m), z.return = v, v = z) : (e(v, y), z = hc(m, v.mode, z), z.return = v, v = z), c(v)) : e(v, y);
    }
    return function(v, y, m, z) {
      try {
        zu = 0;
        var B = bt(
          v,
          y,
          m,
          z
        );
        return _a = null, B;
      } catch (Z) {
        if (Z === vu || Z === zn) throw Z;
        var nt = rl(29, Z, null, v.mode);
        return nt.lanes = z, nt.return = v, nt;
      } finally {
      }
    };
  }
  var Da = Eo(!0), To = Eo(!1), El = M(null), Hl = null;
  function ye(t) {
    var l = t.alternate;
    H(Yt, Yt.current & 1), H(El, t), Hl === null && (l === null || Ea.current !== null || l.memoizedState !== null) && (Hl = t);
  }
  function zo(t) {
    if (t.tag === 22) {
      if (H(Yt, Yt.current), H(El, t), Hl === null) {
        var l = t.alternate;
        l !== null && l.memoizedState !== null && (Hl = t);
      }
    } else ve();
  }
  function ve() {
    H(Yt, Yt.current), H(El, El.current);
  }
  function Wl(t) {
    U(El), Hl === t && (Hl = null), U(Yt);
  }
  var Yt = M(0);
  function Bn(t) {
    for (var l = t; l !== null; ) {
      if (l.tag === 13) {
        var e = l.memoizedState;
        if (e !== null && (e = e.dehydrated, e === null || e.data === "$?" || Bf(e)))
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
  function Jc(t, l, e, a) {
    l = t.memoizedState, e = e(a, l), e = e == null ? l : _({}, l, e), t.memoizedState = e, t.lanes === 0 && (t.updateQueue.baseState = e);
  }
  var kc = {
    enqueueSetState: function(t, l, e) {
      t = t._reactInternals;
      var a = hl(), u = oe(a);
      u.payload = l, e != null && (u.callback = e), l = de(t, u, a), l !== null && (yl(l, t, a), gu(l, t, a));
    },
    enqueueReplaceState: function(t, l, e) {
      t = t._reactInternals;
      var a = hl(), u = oe(a);
      u.tag = 1, u.payload = l, e != null && (u.callback = e), l = de(t, u, a), l !== null && (yl(l, t, a), gu(l, t, a));
    },
    enqueueForceUpdate: function(t, l) {
      t = t._reactInternals;
      var e = hl(), a = oe(e);
      a.tag = 2, l != null && (a.callback = l), l = de(t, a, e), l !== null && (yl(l, t, e), gu(l, t, e));
    }
  };
  function Oo(t, l, e, a, u, n, c) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, n, c) : l.prototype && l.prototype.isPureReactComponent ? !cu(e, a) || !cu(u, n) : !0;
  }
  function _o(t, l, e, a) {
    t = l.state, typeof l.componentWillReceiveProps == "function" && l.componentWillReceiveProps(e, a), typeof l.UNSAFE_componentWillReceiveProps == "function" && l.UNSAFE_componentWillReceiveProps(e, a), l.state !== t && kc.enqueueReplaceState(l, l.state, null);
  }
  function Je(t, l) {
    var e = l;
    if ("ref" in l) {
      e = {};
      for (var a in l)
        a !== "ref" && (e[a] = l[a]);
    }
    if (t = t.defaultProps) {
      e === l && (e = _({}, e));
      for (var u in t)
        e[u] === void 0 && (e[u] = t[u]);
    }
    return e;
  }
  var Cn = typeof reportError == "function" ? reportError : function(t) {
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
  function Do(t) {
    Cn(t);
  }
  function Mo(t) {
    console.error(t);
  }
  function Ro(t) {
    Cn(t);
  }
  function Gn(t, l) {
    try {
      var e = t.onUncaughtError;
      e(l.value, { componentStack: l.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function xo(t, l, e) {
    try {
      var a = t.onCaughtError;
      a(e.value, {
        componentStack: e.stack,
        errorBoundary: l.tag === 1 ? l.stateNode : null
      });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function $c(t, l, e) {
    return e = oe(e), e.tag = 3, e.payload = { element: null }, e.callback = function() {
      Gn(t, l);
    }, e;
  }
  function Uo(t) {
    return t = oe(t), t.tag = 3, t;
  }
  function No(t, l, e, a) {
    var u = e.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var n = a.value;
      t.payload = function() {
        return u(n);
      }, t.callback = function() {
        xo(l, e, a);
      };
    }
    var c = e.stateNode;
    c !== null && typeof c.componentDidCatch == "function" && (t.callback = function() {
      xo(l, e, a), typeof u != "function" && (Ae === null ? Ae = /* @__PURE__ */ new Set([this]) : Ae.add(this));
      var f = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: f !== null ? f : ""
      });
    });
  }
  function U1(t, l, e, a, u) {
    if (e.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (l = e.alternate, l !== null && du(
        l,
        e,
        u,
        !0
      ), e = El.current, e !== null) {
        switch (e.tag) {
          case 13:
            return Hl === null ? bf() : e.alternate === null && Dt === 0 && (Dt = 3), e.flags &= -257, e.flags |= 65536, e.lanes = u, a === zc ? e.flags |= 16384 : (l = e.updateQueue, l === null ? e.updateQueue = /* @__PURE__ */ new Set([a]) : l.add(a), Ef(t, a, u)), !1;
          case 22:
            return e.flags |= 65536, a === zc ? e.flags |= 16384 : (l = e.updateQueue, l === null ? (l = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, e.updateQueue = l) : (e = l.retryQueue, e === null ? l.retryQueue = /* @__PURE__ */ new Set([a]) : e.add(a)), Ef(t, a, u)), !1;
        }
        throw Error(s(435, e.tag));
      }
      return Ef(t, a, u), bf(), !1;
    }
    if (ht)
      return l = El.current, l !== null ? ((l.flags & 65536) === 0 && (l.flags |= 256), l.flags |= 65536, l.lanes = u, a !== gc && (t = Error(s(422), { cause: a }), ou(pl(t, e)))) : (a !== gc && (l = Error(s(423), {
        cause: a
      }), ou(
        pl(l, e)
      )), t = t.current.alternate, t.flags |= 65536, u &= -u, t.lanes |= u, a = pl(a, e), u = $c(
        t.stateNode,
        a,
        u
      ), Dc(t, u), Dt !== 4 && (Dt = 2)), !1;
    var n = Error(s(520), { cause: a });
    if (n = pl(n, e), Nu === null ? Nu = [n] : Nu.push(n), Dt !== 4 && (Dt = 2), l === null) return !0;
    a = pl(a, e), e = l;
    do {
      switch (e.tag) {
        case 3:
          return e.flags |= 65536, t = u & -u, e.lanes |= t, t = $c(e.stateNode, a, t), Dc(e, t), !1;
        case 1:
          if (l = e.type, n = e.stateNode, (e.flags & 128) === 0 && (typeof l.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (Ae === null || !Ae.has(n))))
            return e.flags |= 65536, u &= -u, e.lanes |= u, u = Uo(u), No(
              u,
              t,
              e,
              a
            ), Dc(e, u), !1;
      }
      e = e.return;
    } while (e !== null);
    return !1;
  }
  var Ho = Error(s(461)), Qt = !1;
  function Kt(t, l, e, a) {
    l.child = t === null ? To(l, null, e, a) : Da(
      l,
      t.child,
      e,
      a
    );
  }
  function jo(t, l, e, a, u) {
    e = e.render;
    var n = l.ref;
    if ("ref" in a) {
      var c = {};
      for (var f in a)
        f !== "ref" && (c[f] = a[f]);
    } else c = a;
    return Ve(l), a = Nc(
      t,
      l,
      e,
      c,
      n,
      u
    ), f = Hc(), t !== null && !Qt ? (jc(t, l, u), Fl(t, l, u)) : (ht && f && vc(l), l.flags |= 1, Kt(t, l, a, u), l.child);
  }
  function qo(t, l, e, a, u) {
    if (t === null) {
      var n = e.type;
      return typeof n == "function" && !dc(n) && n.defaultProps === void 0 && e.compare === null ? (l.tag = 15, l.type = n, Yo(
        t,
        l,
        n,
        a,
        u
      )) : (t = pn(
        e.type,
        null,
        a,
        l,
        l.mode,
        u
      ), t.ref = l.ref, t.return = l, l.child = t);
    }
    if (n = t.child, !af(t, u)) {
      var c = n.memoizedProps;
      if (e = e.compare, e = e !== null ? e : cu, e(c, a) && t.ref === l.ref)
        return Fl(t, l, u);
    }
    return l.flags |= 1, t = Vl(n, a), t.ref = l.ref, t.return = l, l.child = t;
  }
  function Yo(t, l, e, a, u) {
    if (t !== null) {
      var n = t.memoizedProps;
      if (cu(n, a) && t.ref === l.ref)
        if (Qt = !1, l.pendingProps = a = n, af(t, u))
          (t.flags & 131072) !== 0 && (Qt = !0);
        else
          return l.lanes = t.lanes, Fl(t, l, u);
    }
    return Wc(
      t,
      l,
      e,
      a,
      u
    );
  }
  function Bo(t, l, e) {
    var a = l.pendingProps, u = a.children, n = t !== null ? t.memoizedState : null;
    if (a.mode === "hidden") {
      if ((l.flags & 128) !== 0) {
        if (a = n !== null ? n.baseLanes | e : e, t !== null) {
          for (u = l.child = t.child, n = 0; u !== null; )
            n = n | u.lanes | u.childLanes, u = u.sibling;
          l.childLanes = n & ~a;
        } else l.childLanes = 0, l.child = null;
        return Co(
          t,
          l,
          a,
          e
        );
      }
      if ((e & 536870912) !== 0)
        l.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && Tn(
          l,
          n !== null ? n.cachePool : null
        ), n !== null ? qs(l, n) : Rc(), zo(l);
      else
        return l.lanes = l.childLanes = 536870912, Co(
          t,
          l,
          n !== null ? n.baseLanes | e : e,
          e
        );
    } else
      n !== null ? (Tn(l, n.cachePool), qs(l, n), ve(), l.memoizedState = null) : (t !== null && Tn(l, null), Rc(), ve());
    return Kt(t, l, u, e), l.child;
  }
  function Co(t, l, e, a) {
    var u = Tc();
    return u = u === null ? null : { parent: qt._currentValue, pool: u }, l.memoizedState = {
      baseLanes: e,
      cachePool: u
    }, t !== null && Tn(l, null), Rc(), zo(l), t !== null && du(t, l, a, !0), null;
  }
  function Xn(t, l) {
    var e = l.ref;
    if (e === null)
      t !== null && t.ref !== null && (l.flags |= 4194816);
    else {
      if (typeof e != "function" && typeof e != "object")
        throw Error(s(284));
      (t === null || t.ref !== e) && (l.flags |= 4194816);
    }
  }
  function Wc(t, l, e, a, u) {
    return Ve(l), e = Nc(
      t,
      l,
      e,
      a,
      void 0,
      u
    ), a = Hc(), t !== null && !Qt ? (jc(t, l, u), Fl(t, l, u)) : (ht && a && vc(l), l.flags |= 1, Kt(t, l, e, u), l.child);
  }
  function Go(t, l, e, a, u, n) {
    return Ve(l), l.updateQueue = null, e = Bs(
      l,
      a,
      e,
      u
    ), Ys(t), a = Hc(), t !== null && !Qt ? (jc(t, l, n), Fl(t, l, n)) : (ht && a && vc(l), l.flags |= 1, Kt(t, l, e, n), l.child);
  }
  function Xo(t, l, e, a, u) {
    if (Ve(l), l.stateNode === null) {
      var n = ga, c = e.contextType;
      typeof c == "object" && c !== null && (n = Wt(c)), n = new e(a, n), l.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = kc, l.stateNode = n, n._reactInternals = l, n = l.stateNode, n.props = a, n.state = l.memoizedState, n.refs = {}, Oc(l), c = e.contextType, n.context = typeof c == "object" && c !== null ? Wt(c) : ga, n.state = l.memoizedState, c = e.getDerivedStateFromProps, typeof c == "function" && (Jc(
        l,
        e,
        c,
        a
      ), n.state = l.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (c = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), c !== n.state && kc.enqueueReplaceState(n, n.state, null), Su(l, a, n, u), pu(), n.state = l.memoizedState), typeof n.componentDidMount == "function" && (l.flags |= 4194308), a = !0;
    } else if (t === null) {
      n = l.stateNode;
      var f = l.memoizedProps, d = Je(e, f);
      n.props = d;
      var g = n.context, T = e.contextType;
      c = ga, typeof T == "object" && T !== null && (c = Wt(T));
      var D = e.getDerivedStateFromProps;
      T = typeof D == "function" || typeof n.getSnapshotBeforeUpdate == "function", f = l.pendingProps !== f, T || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f || g !== c) && _o(
        l,
        n,
        a,
        c
      ), se = !1;
      var p = l.memoizedState;
      n.state = p, Su(l, a, n, u), pu(), g = l.memoizedState, f || p !== g || se ? (typeof D == "function" && (Jc(
        l,
        e,
        D,
        a
      ), g = l.memoizedState), (d = se || Oo(
        l,
        e,
        d,
        a,
        p,
        g,
        c
      )) ? (T || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (l.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (l.flags |= 4194308), l.memoizedProps = a, l.memoizedState = g), n.props = a, n.state = g, n.context = c, a = d) : (typeof n.componentDidMount == "function" && (l.flags |= 4194308), a = !1);
    } else {
      n = l.stateNode, _c(t, l), c = l.memoizedProps, T = Je(e, c), n.props = T, D = l.pendingProps, p = n.context, g = e.contextType, d = ga, typeof g == "object" && g !== null && (d = Wt(g)), f = e.getDerivedStateFromProps, (g = typeof f == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c !== D || p !== d) && _o(
        l,
        n,
        a,
        d
      ), se = !1, p = l.memoizedState, n.state = p, Su(l, a, n, u), pu();
      var S = l.memoizedState;
      c !== D || p !== S || se || t !== null && t.dependencies !== null && An(t.dependencies) ? (typeof f == "function" && (Jc(
        l,
        e,
        f,
        a
      ), S = l.memoizedState), (T = se || Oo(
        l,
        e,
        T,
        a,
        p,
        S,
        d
      ) || t !== null && t.dependencies !== null && An(t.dependencies)) ? (g || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, S, d), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        a,
        S,
        d
      )), typeof n.componentDidUpdate == "function" && (l.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (l.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || c === t.memoizedProps && p === t.memoizedState || (l.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || c === t.memoizedProps && p === t.memoizedState || (l.flags |= 1024), l.memoizedProps = a, l.memoizedState = S), n.props = a, n.state = S, n.context = d, a = T) : (typeof n.componentDidUpdate != "function" || c === t.memoizedProps && p === t.memoizedState || (l.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || c === t.memoizedProps && p === t.memoizedState || (l.flags |= 1024), a = !1);
    }
    return n = a, Xn(t, l), a = (l.flags & 128) !== 0, n || a ? (n = l.stateNode, e = a && typeof e.getDerivedStateFromError != "function" ? null : n.render(), l.flags |= 1, t !== null && a ? (l.child = Da(
      l,
      t.child,
      null,
      u
    ), l.child = Da(
      l,
      null,
      e,
      u
    )) : Kt(t, l, e, u), l.memoizedState = n.state, t = l.child) : t = Fl(
      t,
      l,
      u
    ), t;
  }
  function Qo(t, l, e, a) {
    return su(), l.flags |= 256, Kt(t, l, e, a), l.child;
  }
  var Fc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Ic(t) {
    return { baseLanes: t, cachePool: Ds() };
  }
  function Pc(t, l, e) {
    return t = t !== null ? t.childLanes & ~e : 0, l && (t |= Tl), t;
  }
  function Zo(t, l, e) {
    var a = l.pendingProps, u = !1, n = (l.flags & 128) !== 0, c;
    if ((c = n) || (c = t !== null && t.memoizedState === null ? !1 : (Yt.current & 2) !== 0), c && (u = !0, l.flags &= -129), c = (l.flags & 32) !== 0, l.flags &= -33, t === null) {
      if (ht) {
        if (u ? ye(l) : ve(), ht) {
          var f = _t, d;
          if (d = f) {
            t: {
              for (d = f, f = Nl; d.nodeType !== 8; ) {
                if (!f) {
                  f = null;
                  break t;
                }
                if (d = Rl(
                  d.nextSibling
                ), d === null) {
                  f = null;
                  break t;
                }
              }
              f = d;
            }
            f !== null ? (l.memoizedState = {
              dehydrated: f,
              treeContext: Ge !== null ? { id: Kl, overflow: wl } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, d = rl(
              18,
              null,
              null,
              0
            ), d.stateNode = f, d.return = l, l.child = d, Pt = l, _t = null, d = !0) : d = !1;
          }
          d || Ze(l);
        }
        if (f = l.memoizedState, f !== null && (f = f.dehydrated, f !== null))
          return Bf(f) ? l.lanes = 32 : l.lanes = 536870912, null;
        Wl(l);
      }
      return f = a.children, a = a.fallback, u ? (ve(), u = l.mode, f = Qn(
        { mode: "hidden", children: f },
        u
      ), a = Ce(
        a,
        u,
        e,
        null
      ), f.return = l, a.return = l, f.sibling = a, l.child = f, u = l.child, u.memoizedState = Ic(e), u.childLanes = Pc(
        t,
        c,
        e
      ), l.memoizedState = Fc, a) : (ye(l), tf(l, f));
    }
    if (d = t.memoizedState, d !== null && (f = d.dehydrated, f !== null)) {
      if (n)
        l.flags & 256 ? (ye(l), l.flags &= -257, l = lf(
          t,
          l,
          e
        )) : l.memoizedState !== null ? (ve(), l.child = t.child, l.flags |= 128, l = null) : (ve(), u = a.fallback, f = l.mode, a = Qn(
          { mode: "visible", children: a.children },
          f
        ), u = Ce(
          u,
          f,
          e,
          null
        ), u.flags |= 2, a.return = l, u.return = l, a.sibling = u, l.child = a, Da(
          l,
          t.child,
          null,
          e
        ), a = l.child, a.memoizedState = Ic(e), a.childLanes = Pc(
          t,
          c,
          e
        ), l.memoizedState = Fc, l = u);
      else if (ye(l), Bf(f)) {
        if (c = f.nextSibling && f.nextSibling.dataset, c) var g = c.dgst;
        c = g, a = Error(s(419)), a.stack = "", a.digest = c, ou({ value: a, source: null, stack: null }), l = lf(
          t,
          l,
          e
        );
      } else if (Qt || du(t, l, e, !1), c = (e & t.childLanes) !== 0, Qt || c) {
        if (c = Et, c !== null && (a = e & -e, a = (a & 42) !== 0 ? 1 : Bi(a), a = (a & (c.suspendedLanes | e)) !== 0 ? 0 : a, a !== 0 && a !== d.retryLane))
          throw d.retryLane = a, ma(t, a), yl(c, t, a), Ho;
        f.data === "$?" || bf(), l = lf(
          t,
          l,
          e
        );
      } else
        f.data === "$?" ? (l.flags |= 192, l.child = t.child, l = null) : (t = d.treeContext, _t = Rl(
          f.nextSibling
        ), Pt = l, ht = !0, Qe = null, Nl = !1, t !== null && (bl[Al++] = Kl, bl[Al++] = wl, bl[Al++] = Ge, Kl = t.id, wl = t.overflow, Ge = l), l = tf(
          l,
          a.children
        ), l.flags |= 4096);
      return l;
    }
    return u ? (ve(), u = a.fallback, f = l.mode, d = t.child, g = d.sibling, a = Vl(d, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = d.subtreeFlags & 65011712, g !== null ? u = Vl(g, u) : (u = Ce(
      u,
      f,
      e,
      null
    ), u.flags |= 2), u.return = l, a.return = l, a.sibling = u, l.child = a, a = u, u = l.child, f = t.child.memoizedState, f === null ? f = Ic(e) : (d = f.cachePool, d !== null ? (g = qt._currentValue, d = d.parent !== g ? { parent: g, pool: g } : d) : d = Ds(), f = {
      baseLanes: f.baseLanes | e,
      cachePool: d
    }), u.memoizedState = f, u.childLanes = Pc(
      t,
      c,
      e
    ), l.memoizedState = Fc, a) : (ye(l), e = t.child, t = e.sibling, e = Vl(e, {
      mode: "visible",
      children: a.children
    }), e.return = l, e.sibling = null, t !== null && (c = l.deletions, c === null ? (l.deletions = [t], l.flags |= 16) : c.push(t)), l.child = e, l.memoizedState = null, e);
  }
  function tf(t, l) {
    return l = Qn(
      { mode: "visible", children: l },
      t.mode
    ), l.return = t, t.child = l;
  }
  function Qn(t, l) {
    return t = rl(22, t, null, l), t.lanes = 0, t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, t;
  }
  function lf(t, l, e) {
    return Da(l, t.child, null, e), t = tf(
      l,
      l.pendingProps.children
    ), t.flags |= 2, l.memoizedState = null, t;
  }
  function Lo(t, l, e) {
    t.lanes |= l;
    var a = t.alternate;
    a !== null && (a.lanes |= l), Sc(t.return, l, e);
  }
  function ef(t, l, e, a, u) {
    var n = t.memoizedState;
    n === null ? t.memoizedState = {
      isBackwards: l,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: e,
      tailMode: u
    } : (n.isBackwards = l, n.rendering = null, n.renderingStartTime = 0, n.last = a, n.tail = e, n.tailMode = u);
  }
  function Vo(t, l, e) {
    var a = l.pendingProps, u = a.revealOrder, n = a.tail;
    if (Kt(t, l, a.children, e), a = Yt.current, (a & 2) !== 0)
      a = a & 1 | 2, l.flags |= 128;
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = l.child; t !== null; ) {
          if (t.tag === 13)
            t.memoizedState !== null && Lo(t, e, l);
          else if (t.tag === 19)
            Lo(t, e, l);
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
    switch (H(Yt, a), u) {
      case "forwards":
        for (e = l.child, u = null; e !== null; )
          t = e.alternate, t !== null && Bn(t) === null && (u = e), e = e.sibling;
        e = u, e === null ? (u = l.child, l.child = null) : (u = e.sibling, e.sibling = null), ef(
          l,
          !1,
          u,
          e,
          n
        );
        break;
      case "backwards":
        for (e = null, u = l.child, l.child = null; u !== null; ) {
          if (t = u.alternate, t !== null && Bn(t) === null) {
            l.child = u;
            break;
          }
          t = u.sibling, u.sibling = e, e = u, u = t;
        }
        ef(
          l,
          !0,
          e,
          null,
          n
        );
        break;
      case "together":
        ef(l, !1, null, null, void 0);
        break;
      default:
        l.memoizedState = null;
    }
    return l.child;
  }
  function Fl(t, l, e) {
    if (t !== null && (l.dependencies = t.dependencies), be |= l.lanes, (e & l.childLanes) === 0)
      if (t !== null) {
        if (du(
          t,
          l,
          e,
          !1
        ), (e & l.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && l.child !== t.child)
      throw Error(s(153));
    if (l.child !== null) {
      for (t = l.child, e = Vl(t, t.pendingProps), l.child = e, e.return = l; t.sibling !== null; )
        t = t.sibling, e = e.sibling = Vl(t, t.pendingProps), e.return = l;
      e.sibling = null;
    }
    return l.child;
  }
  function af(t, l) {
    return (t.lanes & l) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && An(t)));
  }
  function N1(t, l, e) {
    switch (l.tag) {
      case 3:
        yt(l, l.stateNode.containerInfo), re(l, qt, t.memoizedState.cache), su();
        break;
      case 27:
      case 5:
        Ne(l);
        break;
      case 4:
        yt(l, l.stateNode.containerInfo);
        break;
      case 10:
        re(
          l,
          l.type,
          l.memoizedProps.value
        );
        break;
      case 13:
        var a = l.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (ye(l), l.flags |= 128, null) : (e & l.child.childLanes) !== 0 ? Zo(t, l, e) : (ye(l), t = Fl(
            t,
            l,
            e
          ), t !== null ? t.sibling : null);
        ye(l);
        break;
      case 19:
        var u = (t.flags & 128) !== 0;
        if (a = (e & l.childLanes) !== 0, a || (du(
          t,
          l,
          e,
          !1
        ), a = (e & l.childLanes) !== 0), u) {
          if (a)
            return Vo(
              t,
              l,
              e
            );
          l.flags |= 128;
        }
        if (u = l.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), H(Yt, Yt.current), a) break;
        return null;
      case 22:
      case 23:
        return l.lanes = 0, Bo(t, l, e);
      case 24:
        re(l, qt, t.memoizedState.cache);
    }
    return Fl(t, l, e);
  }
  function Ko(t, l, e) {
    if (t !== null)
      if (t.memoizedProps !== l.pendingProps)
        Qt = !0;
      else {
        if (!af(t, e) && (l.flags & 128) === 0)
          return Qt = !1, N1(
            t,
            l,
            e
          );
        Qt = (t.flags & 131072) !== 0;
      }
    else
      Qt = !1, ht && (l.flags & 1048576) !== 0 && bs(l, bn, l.index);
    switch (l.lanes = 0, l.tag) {
      case 16:
        t: {
          t = l.pendingProps;
          var a = l.elementType, u = a._init;
          if (a = u(a._payload), l.type = a, typeof a == "function")
            dc(a) ? (t = Je(a, t), l.tag = 1, l = Xo(
              null,
              l,
              a,
              t,
              e
            )) : (l.tag = 0, l = Wc(
              null,
              l,
              a,
              t,
              e
            ));
          else {
            if (a != null) {
              if (u = a.$$typeof, u === st) {
                l.tag = 11, l = jo(
                  null,
                  l,
                  a,
                  t,
                  e
                );
                break t;
              } else if (u === k) {
                l.tag = 14, l = qo(
                  null,
                  l,
                  a,
                  t,
                  e
                );
                break t;
              }
            }
            throw l = Xl(a) || a, Error(s(306, l, ""));
          }
        }
        return l;
      case 0:
        return Wc(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 1:
        return a = l.type, u = Je(
          a,
          l.pendingProps
        ), Xo(
          t,
          l,
          a,
          u,
          e
        );
      case 3:
        t: {
          if (yt(
            l,
            l.stateNode.containerInfo
          ), t === null) throw Error(s(387));
          a = l.pendingProps;
          var n = l.memoizedState;
          u = n.element, _c(t, l), Su(l, a, null, e);
          var c = l.memoizedState;
          if (a = c.cache, re(l, qt, a), a !== n.cache && bc(
            l,
            [qt],
            e,
            !0
          ), pu(), a = c.element, n.isDehydrated)
            if (n = {
              element: a,
              isDehydrated: !1,
              cache: c.cache
            }, l.updateQueue.baseState = n, l.memoizedState = n, l.flags & 256) {
              l = Qo(
                t,
                l,
                a,
                e
              );
              break t;
            } else if (a !== u) {
              u = pl(
                Error(s(424)),
                l
              ), ou(u), l = Qo(
                t,
                l,
                a,
                e
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
              for (_t = Rl(t.firstChild), Pt = l, ht = !0, Qe = null, Nl = !0, e = To(
                l,
                null,
                a,
                e
              ), l.child = e; e; )
                e.flags = e.flags & -3 | 4096, e = e.sibling;
            }
          else {
            if (su(), a === u) {
              l = Fl(
                t,
                l,
                e
              );
              break t;
            }
            Kt(
              t,
              l,
              a,
              e
            );
          }
          l = l.child;
        }
        return l;
      case 26:
        return Xn(t, l), t === null ? (e = $d(
          l.type,
          null,
          l.pendingProps,
          null
        )) ? l.memoizedState = e : ht || (e = l.type, t = l.pendingProps, a = li(
          $.current
        ).createElement(e), a[$t] = l, a[tl] = t, Jt(a, e, t), Xt(a), l.stateNode = a) : l.memoizedState = $d(
          l.type,
          t.memoizedProps,
          l.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return Ne(l), t === null && ht && (a = l.stateNode = wd(
          l.type,
          l.pendingProps,
          $.current
        ), Pt = l, Nl = !0, u = _t, ze(l.type) ? (Cf = u, _t = Rl(
          a.firstChild
        )) : _t = u), Kt(
          t,
          l,
          l.pendingProps.children,
          e
        ), Xn(t, l), t === null && (l.flags |= 4194304), l.child;
      case 5:
        return t === null && ht && ((u = a = _t) && (a = iy(
          a,
          l.type,
          l.pendingProps,
          Nl
        ), a !== null ? (l.stateNode = a, Pt = l, _t = Rl(
          a.firstChild
        ), Nl = !1, u = !0) : u = !1), u || Ze(l)), Ne(l), u = l.type, n = l.pendingProps, c = t !== null ? t.memoizedProps : null, a = n.children, jf(u, n) ? a = null : c !== null && jf(u, c) && (l.flags |= 32), l.memoizedState !== null && (u = Nc(
          t,
          l,
          z1,
          null,
          null,
          e
        ), Qu._currentValue = u), Xn(t, l), Kt(t, l, a, e), l.child;
      case 6:
        return t === null && ht && ((t = e = _t) && (e = cy(
          e,
          l.pendingProps,
          Nl
        ), e !== null ? (l.stateNode = e, Pt = l, _t = null, t = !0) : t = !1), t || Ze(l)), null;
      case 13:
        return Zo(t, l, e);
      case 4:
        return yt(
          l,
          l.stateNode.containerInfo
        ), a = l.pendingProps, t === null ? l.child = Da(
          l,
          null,
          a,
          e
        ) : Kt(
          t,
          l,
          a,
          e
        ), l.child;
      case 11:
        return jo(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 7:
        return Kt(
          t,
          l,
          l.pendingProps,
          e
        ), l.child;
      case 8:
        return Kt(
          t,
          l,
          l.pendingProps.children,
          e
        ), l.child;
      case 12:
        return Kt(
          t,
          l,
          l.pendingProps.children,
          e
        ), l.child;
      case 10:
        return a = l.pendingProps, re(l, l.type, a.value), Kt(
          t,
          l,
          a.children,
          e
        ), l.child;
      case 9:
        return u = l.type._context, a = l.pendingProps.children, Ve(l), u = Wt(u), a = a(u), l.flags |= 1, Kt(t, l, a, e), l.child;
      case 14:
        return qo(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 15:
        return Yo(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 19:
        return Vo(t, l, e);
      case 31:
        return a = l.pendingProps, e = l.mode, a = {
          mode: a.mode,
          children: a.children
        }, t === null ? (e = Qn(
          a,
          e
        ), e.ref = l.ref, l.child = e, e.return = l, l = e) : (e = Vl(t.child, a), e.ref = l.ref, l.child = e, e.return = l, l = e), l;
      case 22:
        return Bo(t, l, e);
      case 24:
        return Ve(l), a = Wt(qt), t === null ? (u = Tc(), u === null && (u = Et, n = Ac(), u.pooledCache = n, n.refCount++, n !== null && (u.pooledCacheLanes |= e), u = n), l.memoizedState = {
          parent: a,
          cache: u
        }, Oc(l), re(l, qt, u)) : ((t.lanes & e) !== 0 && (_c(t, l), Su(l, null, null, e), pu()), u = t.memoizedState, n = l.memoizedState, u.parent !== a ? (u = { parent: a, cache: a }, l.memoizedState = u, l.lanes === 0 && (l.memoizedState = l.updateQueue.baseState = u), re(l, qt, a)) : (a = n.cache, re(l, qt, a), a !== u.cache && bc(
          l,
          [qt],
          e,
          !0
        ))), Kt(
          t,
          l,
          l.pendingProps.children,
          e
        ), l.child;
      case 29:
        throw l.pendingProps;
    }
    throw Error(s(156, l.tag));
  }
  function Il(t) {
    t.flags |= 4;
  }
  function wo(t, l) {
    if (l.type !== "stylesheet" || (l.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !t0(l)) {
      if (l = El.current, l !== null && ((ot & 4194048) === ot ? Hl !== null : (ot & 62914560) !== ot && (ot & 536870912) === 0 || l !== Hl))
        throw mu = zc, Ms;
      t.flags |= 8192;
    }
  }
  function Zn(t, l) {
    l !== null && (t.flags |= 4), t.flags & 16384 && (l = t.tag !== 22 ? Tr() : 536870912, t.lanes |= l, Ua |= l);
  }
  function _u(t, l) {
    if (!ht)
      switch (t.tailMode) {
        case "hidden":
          l = t.tail;
          for (var e = null; l !== null; )
            l.alternate !== null && (e = l), l = l.sibling;
          e === null ? t.tail = null : e.sibling = null;
          break;
        case "collapsed":
          e = t.tail;
          for (var a = null; e !== null; )
            e.alternate !== null && (a = e), e = e.sibling;
          a === null ? l || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null;
      }
  }
  function Ot(t) {
    var l = t.alternate !== null && t.alternate.child === t.child, e = 0, a = 0;
    if (l)
      for (var u = t.child; u !== null; )
        e |= u.lanes | u.childLanes, a |= u.subtreeFlags & 65011712, a |= u.flags & 65011712, u.return = t, u = u.sibling;
    else
      for (u = t.child; u !== null; )
        e |= u.lanes | u.childLanes, a |= u.subtreeFlags, a |= u.flags, u.return = t, u = u.sibling;
    return t.subtreeFlags |= a, t.childLanes = e, l;
  }
  function H1(t, l, e) {
    var a = l.pendingProps;
    switch (mc(l), l.tag) {
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
        return Ot(l), null;
      case 1:
        return Ot(l), null;
      case 3:
        return e = l.stateNode, a = null, t !== null && (a = t.memoizedState.cache), l.memoizedState.cache !== a && (l.flags |= 2048), kl(qt), kt(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (t === null || t.child === null) && (ru(l) ? Il(l) : t === null || t.memoizedState.isDehydrated && (l.flags & 256) === 0 || (l.flags |= 1024, Ts())), Ot(l), null;
      case 26:
        return e = l.memoizedState, t === null ? (Il(l), e !== null ? (Ot(l), wo(l, e)) : (Ot(l), l.flags &= -16777217)) : e ? e !== t.memoizedState ? (Il(l), Ot(l), wo(l, e)) : (Ot(l), l.flags &= -16777217) : (t.memoizedProps !== a && Il(l), Ot(l), l.flags &= -16777217), null;
      case 27:
        Ql(l), e = $.current;
        var u = l.type;
        if (t !== null && l.stateNode != null)
          t.memoizedProps !== a && Il(l);
        else {
          if (!a) {
            if (l.stateNode === null)
              throw Error(s(166));
            return Ot(l), null;
          }
          t = V.current, ru(l) ? As(l) : (t = wd(u, a, e), l.stateNode = t, Il(l));
        }
        return Ot(l), null;
      case 5:
        if (Ql(l), e = l.type, t !== null && l.stateNode != null)
          t.memoizedProps !== a && Il(l);
        else {
          if (!a) {
            if (l.stateNode === null)
              throw Error(s(166));
            return Ot(l), null;
          }
          if (t = V.current, ru(l))
            As(l);
          else {
            switch (u = li(
              $.current
            ), t) {
              case 1:
                t = u.createElementNS(
                  "http://www.w3.org/2000/svg",
                  e
                );
                break;
              case 2:
                t = u.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  e
                );
                break;
              default:
                switch (e) {
                  case "svg":
                    t = u.createElementNS(
                      "http://www.w3.org/2000/svg",
                      e
                    );
                    break;
                  case "math":
                    t = u.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      e
                    );
                    break;
                  case "script":
                    t = u.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild);
                    break;
                  case "select":
                    t = typeof a.is == "string" ? u.createElement("select", { is: a.is }) : u.createElement("select"), a.multiple ? t.multiple = !0 : a.size && (t.size = a.size);
                    break;
                  default:
                    t = typeof a.is == "string" ? u.createElement(e, { is: a.is }) : u.createElement(e);
                }
            }
            t[$t] = l, t[tl] = a;
            t: for (u = l.child; u !== null; ) {
              if (u.tag === 5 || u.tag === 6)
                t.appendChild(u.stateNode);
              else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                u.child.return = u, u = u.child;
                continue;
              }
              if (u === l) break t;
              for (; u.sibling === null; ) {
                if (u.return === null || u.return === l)
                  break t;
                u = u.return;
              }
              u.sibling.return = u.return, u = u.sibling;
            }
            l.stateNode = t;
            t: switch (Jt(t, e, a), e) {
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
            t && Il(l);
          }
        }
        return Ot(l), l.flags &= -16777217, null;
      case 6:
        if (t && l.stateNode != null)
          t.memoizedProps !== a && Il(l);
        else {
          if (typeof a != "string" && l.stateNode === null)
            throw Error(s(166));
          if (t = $.current, ru(l)) {
            if (t = l.stateNode, e = l.memoizedProps, a = null, u = Pt, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  a = u.memoizedProps;
              }
            t[$t] = l, t = !!(t.nodeValue === e || a !== null && a.suppressHydrationWarning === !0 || Gd(t.nodeValue, e)), t || Ze(l);
          } else
            t = li(t).createTextNode(
              a
            ), t[$t] = l, l.stateNode = t;
        }
        return Ot(l), null;
      case 13:
        if (a = l.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (u = ru(l), a !== null && a.dehydrated !== null) {
            if (t === null) {
              if (!u) throw Error(s(318));
              if (u = l.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(s(317));
              u[$t] = l;
            } else
              su(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            Ot(l), u = !1;
          } else
            u = Ts(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = u), u = !0;
          if (!u)
            return l.flags & 256 ? (Wl(l), l) : (Wl(l), null);
        }
        if (Wl(l), (l.flags & 128) !== 0)
          return l.lanes = e, l;
        if (e = a !== null, t = t !== null && t.memoizedState !== null, e) {
          a = l.child, u = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (u = a.alternate.memoizedState.cachePool.pool);
          var n = null;
          a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== u && (a.flags |= 2048);
        }
        return e !== t && e && (l.child.flags |= 8192), Zn(l, l.updateQueue), Ot(l), null;
      case 4:
        return kt(), t === null && Rf(l.stateNode.containerInfo), Ot(l), null;
      case 10:
        return kl(l.type), Ot(l), null;
      case 19:
        if (U(Yt), u = l.memoizedState, u === null) return Ot(l), null;
        if (a = (l.flags & 128) !== 0, n = u.rendering, n === null)
          if (a) _u(u, !1);
          else {
            if (Dt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = l.child; t !== null; ) {
                if (n = Bn(t), n !== null) {
                  for (l.flags |= 128, _u(u, !1), t = n.updateQueue, l.updateQueue = t, Zn(l, t), l.subtreeFlags = 0, t = e, e = l.child; e !== null; )
                    Ss(e, t), e = e.sibling;
                  return H(
                    Yt,
                    Yt.current & 1 | 2
                  ), l.child;
                }
                t = t.sibling;
              }
            u.tail !== null && Ul() > Kn && (l.flags |= 128, a = !0, _u(u, !1), l.lanes = 4194304);
          }
        else {
          if (!a)
            if (t = Bn(n), t !== null) {
              if (l.flags |= 128, a = !0, t = t.updateQueue, l.updateQueue = t, Zn(l, t), _u(u, !0), u.tail === null && u.tailMode === "hidden" && !n.alternate && !ht)
                return Ot(l), null;
            } else
              2 * Ul() - u.renderingStartTime > Kn && e !== 536870912 && (l.flags |= 128, a = !0, _u(u, !1), l.lanes = 4194304);
          u.isBackwards ? (n.sibling = l.child, l.child = n) : (t = u.last, t !== null ? t.sibling = n : l.child = n, u.last = n);
        }
        return u.tail !== null ? (l = u.tail, u.rendering = l, u.tail = l.sibling, u.renderingStartTime = Ul(), l.sibling = null, t = Yt.current, H(Yt, a ? t & 1 | 2 : t & 1), l) : (Ot(l), null);
      case 22:
      case 23:
        return Wl(l), xc(), a = l.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (l.flags |= 8192) : a && (l.flags |= 8192), a ? (e & 536870912) !== 0 && (l.flags & 128) === 0 && (Ot(l), l.subtreeFlags & 6 && (l.flags |= 8192)) : Ot(l), e = l.updateQueue, e !== null && Zn(l, e.retryQueue), e = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), a = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), a !== e && (l.flags |= 2048), t !== null && U(Ke), null;
      case 24:
        return e = null, t !== null && (e = t.memoizedState.cache), l.memoizedState.cache !== e && (l.flags |= 2048), kl(qt), Ot(l), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, l.tag));
  }
  function j1(t, l) {
    switch (mc(l), l.tag) {
      case 1:
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 3:
        return kl(qt), kt(), t = l.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (l.flags = t & -65537 | 128, l) : null;
      case 26:
      case 27:
      case 5:
        return Ql(l), null;
      case 13:
        if (Wl(l), t = l.memoizedState, t !== null && t.dehydrated !== null) {
          if (l.alternate === null)
            throw Error(s(340));
          su();
        }
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 19:
        return U(Yt), null;
      case 4:
        return kt(), null;
      case 10:
        return kl(l.type), null;
      case 22:
      case 23:
        return Wl(l), xc(), t !== null && U(Ke), t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 24:
        return kl(qt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Jo(t, l) {
    switch (mc(l), l.tag) {
      case 3:
        kl(qt), kt();
        break;
      case 26:
      case 27:
      case 5:
        Ql(l);
        break;
      case 4:
        kt();
        break;
      case 13:
        Wl(l);
        break;
      case 19:
        U(Yt);
        break;
      case 10:
        kl(l.type);
        break;
      case 22:
      case 23:
        Wl(l), xc(), t !== null && U(Ke);
        break;
      case 24:
        kl(qt);
    }
  }
  function Du(t, l) {
    try {
      var e = l.updateQueue, a = e !== null ? e.lastEffect : null;
      if (a !== null) {
        var u = a.next;
        e = u;
        do {
          if ((e.tag & t) === t) {
            a = void 0;
            var n = e.create, c = e.inst;
            a = n(), c.destroy = a;
          }
          e = e.next;
        } while (e !== u);
      }
    } catch (f) {
      At(l, l.return, f);
    }
  }
  function me(t, l, e) {
    try {
      var a = l.updateQueue, u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var n = u.next;
        a = n;
        do {
          if ((a.tag & t) === t) {
            var c = a.inst, f = c.destroy;
            if (f !== void 0) {
              c.destroy = void 0, u = l;
              var d = e, g = f;
              try {
                g();
              } catch (T) {
                At(
                  u,
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
      At(l, l.return, T);
    }
  }
  function ko(t) {
    var l = t.updateQueue;
    if (l !== null) {
      var e = t.stateNode;
      try {
        js(l, e);
      } catch (a) {
        At(t, t.return, a);
      }
    }
  }
  function $o(t, l, e) {
    e.props = Je(
      t.type,
      t.memoizedProps
    ), e.state = t.memoizedState;
    try {
      e.componentWillUnmount();
    } catch (a) {
      At(t, l, a);
    }
  }
  function Mu(t, l) {
    try {
      var e = t.ref;
      if (e !== null) {
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
        typeof e == "function" ? t.refCleanup = e(a) : e.current = a;
      }
    } catch (u) {
      At(t, l, u);
    }
  }
  function jl(t, l) {
    var e = t.ref, a = t.refCleanup;
    if (e !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (u) {
          At(t, l, u);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof e == "function")
        try {
          e(null);
        } catch (u) {
          At(t, l, u);
        }
      else e.current = null;
  }
  function Wo(t) {
    var l = t.type, e = t.memoizedProps, a = t.stateNode;
    try {
      t: switch (l) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          e.autoFocus && a.focus();
          break t;
        case "img":
          e.src ? a.src = e.src : e.srcSet && (a.srcset = e.srcSet);
      }
    } catch (u) {
      At(t, t.return, u);
    }
  }
  function uf(t, l, e) {
    try {
      var a = t.stateNode;
      ly(a, t.type, e, l), a[tl] = l;
    } catch (u) {
      At(t, t.return, u);
    }
  }
  function Fo(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && ze(t.type) || t.tag === 4;
  }
  function nf(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || Fo(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && ze(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function cf(t, l, e) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, l ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(t, l) : (l = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.appendChild(t), e = e._reactRootContainer, e != null || l.onclick !== null || (l.onclick = ti));
    else if (a !== 4 && (a === 27 && ze(t.type) && (e = t.stateNode, l = null), t = t.child, t !== null))
      for (cf(t, l, e), t = t.sibling; t !== null; )
        cf(t, l, e), t = t.sibling;
  }
  function Ln(t, l, e) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, l ? e.insertBefore(t, l) : e.appendChild(t);
    else if (a !== 4 && (a === 27 && ze(t.type) && (e = t.stateNode), t = t.child, t !== null))
      for (Ln(t, l, e), t = t.sibling; t !== null; )
        Ln(t, l, e), t = t.sibling;
  }
  function Io(t) {
    var l = t.stateNode, e = t.memoizedProps;
    try {
      for (var a = t.type, u = l.attributes; u.length; )
        l.removeAttributeNode(u[0]);
      Jt(l, a, e), l[$t] = t, l[tl] = e;
    } catch (n) {
      At(t, t.return, n);
    }
  }
  var Pl = !1, Rt = !1, ff = !1, Po = typeof WeakSet == "function" ? WeakSet : Set, Zt = null;
  function q1(t, l) {
    if (t = t.containerInfo, Nf = ci, t = rs(t), nc(t)) {
      if ("selectionStart" in t)
        var e = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          e = (e = t.ownerDocument) && e.defaultView || window;
          var a = e.getSelection && e.getSelection();
          if (a && a.rangeCount !== 0) {
            e = a.anchorNode;
            var u = a.anchorOffset, n = a.focusNode;
            a = a.focusOffset;
            try {
              e.nodeType, n.nodeType;
            } catch {
              e = null;
              break t;
            }
            var c = 0, f = -1, d = -1, g = 0, T = 0, D = t, p = null;
            l: for (; ; ) {
              for (var S; D !== e || u !== 0 && D.nodeType !== 3 || (f = c + u), D !== n || a !== 0 && D.nodeType !== 3 || (d = c + a), D.nodeType === 3 && (c += D.nodeValue.length), (S = D.firstChild) !== null; )
                p = D, D = S;
              for (; ; ) {
                if (D === t) break l;
                if (p === e && ++g === u && (f = c), p === n && ++T === a && (d = c), (S = D.nextSibling) !== null) break;
                D = p, p = D.parentNode;
              }
              D = S;
            }
            e = f === -1 || d === -1 ? null : { start: f, end: d };
          } else e = null;
        }
      e = e || { start: 0, end: 0 };
    } else e = null;
    for (Hf = { focusedElem: t, selectionRange: e }, ci = !1, Zt = l; Zt !== null; )
      if (l = Zt, t = l.child, (l.subtreeFlags & 1024) !== 0 && t !== null)
        t.return = l, Zt = t;
      else
        for (; Zt !== null; ) {
          switch (l = Zt, n = l.alternate, t = l.flags, l.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && n !== null) {
                t = void 0, e = l, u = n.memoizedProps, n = n.memoizedState, a = e.stateNode;
                try {
                  var F = Je(
                    e.type,
                    u,
                    e.elementType === e.type
                  );
                  t = a.getSnapshotBeforeUpdate(
                    F,
                    n
                  ), a.__reactInternalSnapshotBeforeUpdate = t;
                } catch (J) {
                  At(
                    e,
                    e.return,
                    J
                  );
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (t = l.stateNode.containerInfo, e = t.nodeType, e === 9)
                  Yf(t);
                else if (e === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Yf(t);
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
            t.return = l.return, Zt = t;
            break;
          }
          Zt = l.return;
        }
  }
  function td(t, l, e) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ge(t, e), a & 4 && Du(5, e);
        break;
      case 1:
        if (ge(t, e), a & 4)
          if (t = e.stateNode, l === null)
            try {
              t.componentDidMount();
            } catch (c) {
              At(e, e.return, c);
            }
          else {
            var u = Je(
              e.type,
              l.memoizedProps
            );
            l = l.memoizedState;
            try {
              t.componentDidUpdate(
                u,
                l,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (c) {
              At(
                e,
                e.return,
                c
              );
            }
          }
        a & 64 && ko(e), a & 512 && Mu(e, e.return);
        break;
      case 3:
        if (ge(t, e), a & 64 && (t = e.updateQueue, t !== null)) {
          if (l = null, e.child !== null)
            switch (e.child.tag) {
              case 27:
              case 5:
                l = e.child.stateNode;
                break;
              case 1:
                l = e.child.stateNode;
            }
          try {
            js(t, l);
          } catch (c) {
            At(e, e.return, c);
          }
        }
        break;
      case 27:
        l === null && a & 4 && Io(e);
      case 26:
      case 5:
        ge(t, e), l === null && a & 4 && Wo(e), a & 512 && Mu(e, e.return);
        break;
      case 12:
        ge(t, e);
        break;
      case 13:
        ge(t, e), a & 4 && ad(t, e), a & 64 && (t = e.memoizedState, t !== null && (t = t.dehydrated, t !== null && (e = V1.bind(
          null,
          e
        ), fy(t, e))));
        break;
      case 22:
        if (a = e.memoizedState !== null || Pl, !a) {
          l = l !== null && l.memoizedState !== null || Rt, u = Pl;
          var n = Rt;
          Pl = a, (Rt = l) && !n ? pe(
            t,
            e,
            (e.subtreeFlags & 8772) !== 0
          ) : ge(t, e), Pl = u, Rt = n;
        }
        break;
      case 30:
        break;
      default:
        ge(t, e);
    }
  }
  function ld(t) {
    var l = t.alternate;
    l !== null && (t.alternate = null, ld(l)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (l = t.stateNode, l !== null && Xi(l)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var zt = null, al = !1;
  function te(t, l, e) {
    for (e = e.child; e !== null; )
      ed(t, l, e), e = e.sibling;
  }
  function ed(t, l, e) {
    if (il && typeof il.onCommitFiberUnmount == "function")
      try {
        il.onCommitFiberUnmount($a, e);
      } catch {
      }
    switch (e.tag) {
      case 26:
        Rt || jl(e, l), te(
          t,
          l,
          e
        ), e.memoizedState ? e.memoizedState.count-- : e.stateNode && (e = e.stateNode, e.parentNode.removeChild(e));
        break;
      case 27:
        Rt || jl(e, l);
        var a = zt, u = al;
        ze(e.type) && (zt = e.stateNode, al = !1), te(
          t,
          l,
          e
        ), Bu(e.stateNode), zt = a, al = u;
        break;
      case 5:
        Rt || jl(e, l);
      case 6:
        if (a = zt, u = al, zt = null, te(
          t,
          l,
          e
        ), zt = a, al = u, zt !== null)
          if (al)
            try {
              (zt.nodeType === 9 ? zt.body : zt.nodeName === "HTML" ? zt.ownerDocument.body : zt).removeChild(e.stateNode);
            } catch (n) {
              At(
                e,
                l,
                n
              );
            }
          else
            try {
              zt.removeChild(e.stateNode);
            } catch (n) {
              At(
                e,
                l,
                n
              );
            }
        break;
      case 18:
        zt !== null && (al ? (t = zt, Vd(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          e.stateNode
        ), Ku(t)) : Vd(zt, e.stateNode));
        break;
      case 4:
        a = zt, u = al, zt = e.stateNode.containerInfo, al = !0, te(
          t,
          l,
          e
        ), zt = a, al = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Rt || me(2, e, l), Rt || me(4, e, l), te(
          t,
          l,
          e
        );
        break;
      case 1:
        Rt || (jl(e, l), a = e.stateNode, typeof a.componentWillUnmount == "function" && $o(
          e,
          l,
          a
        )), te(
          t,
          l,
          e
        );
        break;
      case 21:
        te(
          t,
          l,
          e
        );
        break;
      case 22:
        Rt = (a = Rt) || e.memoizedState !== null, te(
          t,
          l,
          e
        ), Rt = a;
        break;
      default:
        te(
          t,
          l,
          e
        );
    }
  }
  function ad(t, l) {
    if (l.memoizedState === null && (t = l.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        Ku(t);
      } catch (e) {
        At(l, l.return, e);
      }
  }
  function Y1(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var l = t.stateNode;
        return l === null && (l = t.stateNode = new Po()), l;
      case 22:
        return t = t.stateNode, l = t._retryCache, l === null && (l = t._retryCache = new Po()), l;
      default:
        throw Error(s(435, t.tag));
    }
  }
  function rf(t, l) {
    var e = Y1(t);
    l.forEach(function(a) {
      var u = K1.bind(null, t, a);
      e.has(a) || (e.add(a), a.then(u, u));
    });
  }
  function sl(t, l) {
    var e = l.deletions;
    if (e !== null)
      for (var a = 0; a < e.length; a++) {
        var u = e[a], n = t, c = l, f = c;
        t: for (; f !== null; ) {
          switch (f.tag) {
            case 27:
              if (ze(f.type)) {
                zt = f.stateNode, al = !1;
                break t;
              }
              break;
            case 5:
              zt = f.stateNode, al = !1;
              break t;
            case 3:
            case 4:
              zt = f.stateNode.containerInfo, al = !0;
              break t;
          }
          f = f.return;
        }
        if (zt === null) throw Error(s(160));
        ed(n, c, u), zt = null, al = !1, n = u.alternate, n !== null && (n.return = null), u.return = null;
      }
    if (l.subtreeFlags & 13878)
      for (l = l.child; l !== null; )
        ud(l, t), l = l.sibling;
  }
  var Ml = null;
  function ud(t, l) {
    var e = t.alternate, a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        sl(l, t), ol(t), a & 4 && (me(3, t, t.return), Du(3, t), me(5, t, t.return));
        break;
      case 1:
        sl(l, t), ol(t), a & 512 && (Rt || e === null || jl(e, e.return)), a & 64 && Pl && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (e = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = e === null ? a : e.concat(a))));
        break;
      case 26:
        var u = Ml;
        if (sl(l, t), ol(t), a & 512 && (Rt || e === null || jl(e, e.return)), a & 4) {
          var n = e !== null ? e.memoizedState : null;
          if (a = t.memoizedState, e === null)
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  a = t.type, e = t.memoizedProps, u = u.ownerDocument || u;
                  l: switch (a) {
                    case "title":
                      n = u.getElementsByTagName("title")[0], (!n || n[Ia] || n[$t] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = u.createElement(a), u.head.insertBefore(
                        n,
                        u.querySelector("head > title")
                      )), Jt(n, a, e), n[$t] = t, Xt(n), a = n;
                      break t;
                    case "link":
                      var c = Id(
                        "link",
                        "href",
                        u
                      ).get(a + (e.href || ""));
                      if (c) {
                        for (var f = 0; f < c.length; f++)
                          if (n = c[f], n.getAttribute("href") === (e.href == null || e.href === "" ? null : e.href) && n.getAttribute("rel") === (e.rel == null ? null : e.rel) && n.getAttribute("title") === (e.title == null ? null : e.title) && n.getAttribute("crossorigin") === (e.crossOrigin == null ? null : e.crossOrigin)) {
                            c.splice(f, 1);
                            break l;
                          }
                      }
                      n = u.createElement(a), Jt(n, a, e), u.head.appendChild(n);
                      break;
                    case "meta":
                      if (c = Id(
                        "meta",
                        "content",
                        u
                      ).get(a + (e.content || ""))) {
                        for (f = 0; f < c.length; f++)
                          if (n = c[f], n.getAttribute("content") === (e.content == null ? null : "" + e.content) && n.getAttribute("name") === (e.name == null ? null : e.name) && n.getAttribute("property") === (e.property == null ? null : e.property) && n.getAttribute("http-equiv") === (e.httpEquiv == null ? null : e.httpEquiv) && n.getAttribute("charset") === (e.charSet == null ? null : e.charSet)) {
                            c.splice(f, 1);
                            break l;
                          }
                      }
                      n = u.createElement(a), Jt(n, a, e), u.head.appendChild(n);
                      break;
                    default:
                      throw Error(s(468, a));
                  }
                  n[$t] = t, Xt(n), a = n;
                }
                t.stateNode = a;
              } else
                Pd(
                  u,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = Fd(
                u,
                a,
                t.memoizedProps
              );
          else
            n !== a ? (n === null ? e.stateNode !== null && (e = e.stateNode, e.parentNode.removeChild(e)) : n.count--, a === null ? Pd(
              u,
              t.type,
              t.stateNode
            ) : Fd(
              u,
              a,
              t.memoizedProps
            )) : a === null && t.stateNode !== null && uf(
              t,
              t.memoizedProps,
              e.memoizedProps
            );
        }
        break;
      case 27:
        sl(l, t), ol(t), a & 512 && (Rt || e === null || jl(e, e.return)), e !== null && a & 4 && uf(
          t,
          t.memoizedProps,
          e.memoizedProps
        );
        break;
      case 5:
        if (sl(l, t), ol(t), a & 512 && (Rt || e === null || jl(e, e.return)), t.flags & 32) {
          u = t.stateNode;
          try {
            ra(u, "");
          } catch (S) {
            At(t, t.return, S);
          }
        }
        a & 4 && t.stateNode != null && (u = t.memoizedProps, uf(
          t,
          u,
          e !== null ? e.memoizedProps : u
        )), a & 1024 && (ff = !0);
        break;
      case 6:
        if (sl(l, t), ol(t), a & 4) {
          if (t.stateNode === null)
            throw Error(s(162));
          a = t.memoizedProps, e = t.stateNode;
          try {
            e.nodeValue = a;
          } catch (S) {
            At(t, t.return, S);
          }
        }
        break;
      case 3:
        if (ui = null, u = Ml, Ml = ei(l.containerInfo), sl(l, t), Ml = u, ol(t), a & 4 && e !== null && e.memoizedState.isDehydrated)
          try {
            Ku(l.containerInfo);
          } catch (S) {
            At(t, t.return, S);
          }
        ff && (ff = !1, nd(t));
        break;
      case 4:
        a = Ml, Ml = ei(
          t.stateNode.containerInfo
        ), sl(l, t), ol(t), Ml = a;
        break;
      case 12:
        sl(l, t), ol(t);
        break;
      case 13:
        sl(l, t), ol(t), t.child.flags & 8192 && t.memoizedState !== null != (e !== null && e.memoizedState !== null) && (vf = Ul()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, rf(t, a)));
        break;
      case 22:
        u = t.memoizedState !== null;
        var d = e !== null && e.memoizedState !== null, g = Pl, T = Rt;
        if (Pl = g || u, Rt = T || d, sl(l, t), Rt = T, Pl = g, ol(t), a & 8192)
          t: for (l = t.stateNode, l._visibility = u ? l._visibility & -2 : l._visibility | 1, u && (e === null || d || Pl || Rt || ke(t)), e = null, l = t; ; ) {
            if (l.tag === 5 || l.tag === 26) {
              if (e === null) {
                d = e = l;
                try {
                  if (n = d.stateNode, u)
                    c = n.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                  else {
                    f = d.stateNode;
                    var D = d.memoizedProps.style, p = D != null && D.hasOwnProperty("display") ? D.display : null;
                    f.style.display = p == null || typeof p == "boolean" ? "" : ("" + p).trim();
                  }
                } catch (S) {
                  At(d, d.return, S);
                }
              }
            } else if (l.tag === 6) {
              if (e === null) {
                d = l;
                try {
                  d.stateNode.nodeValue = u ? "" : d.memoizedProps;
                } catch (S) {
                  At(d, d.return, S);
                }
              }
            } else if ((l.tag !== 22 && l.tag !== 23 || l.memoizedState === null || l === t) && l.child !== null) {
              l.child.return = l, l = l.child;
              continue;
            }
            if (l === t) break t;
            for (; l.sibling === null; ) {
              if (l.return === null || l.return === t) break t;
              e === l && (e = null), l = l.return;
            }
            e === l && (e = null), l.sibling.return = l.return, l = l.sibling;
          }
        a & 4 && (a = t.updateQueue, a !== null && (e = a.retryQueue, e !== null && (a.retryQueue = null, rf(t, e))));
        break;
      case 19:
        sl(l, t), ol(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, rf(t, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        sl(l, t), ol(t);
    }
  }
  function ol(t) {
    var l = t.flags;
    if (l & 2) {
      try {
        for (var e, a = t.return; a !== null; ) {
          if (Fo(a)) {
            e = a;
            break;
          }
          a = a.return;
        }
        if (e == null) throw Error(s(160));
        switch (e.tag) {
          case 27:
            var u = e.stateNode, n = nf(t);
            Ln(t, n, u);
            break;
          case 5:
            var c = e.stateNode;
            e.flags & 32 && (ra(c, ""), e.flags &= -33);
            var f = nf(t);
            Ln(t, f, c);
            break;
          case 3:
          case 4:
            var d = e.stateNode.containerInfo, g = nf(t);
            cf(
              t,
              g,
              d
            );
            break;
          default:
            throw Error(s(161));
        }
      } catch (T) {
        At(t, t.return, T);
      }
      t.flags &= -3;
    }
    l & 4096 && (t.flags &= -4097);
  }
  function nd(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var l = t;
        nd(l), l.tag === 5 && l.flags & 1024 && l.stateNode.reset(), t = t.sibling;
      }
  }
  function ge(t, l) {
    if (l.subtreeFlags & 8772)
      for (l = l.child; l !== null; )
        td(t, l.alternate, l), l = l.sibling;
  }
  function ke(t) {
    for (t = t.child; t !== null; ) {
      var l = t;
      switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          me(4, l, l.return), ke(l);
          break;
        case 1:
          jl(l, l.return);
          var e = l.stateNode;
          typeof e.componentWillUnmount == "function" && $o(
            l,
            l.return,
            e
          ), ke(l);
          break;
        case 27:
          Bu(l.stateNode);
        case 26:
        case 5:
          jl(l, l.return), ke(l);
          break;
        case 22:
          l.memoizedState === null && ke(l);
          break;
        case 30:
          ke(l);
          break;
        default:
          ke(l);
      }
      t = t.sibling;
    }
  }
  function pe(t, l, e) {
    for (e = e && (l.subtreeFlags & 8772) !== 0, l = l.child; l !== null; ) {
      var a = l.alternate, u = t, n = l, c = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          pe(
            u,
            n,
            e
          ), Du(4, n);
          break;
        case 1:
          if (pe(
            u,
            n,
            e
          ), a = n, u = a.stateNode, typeof u.componentDidMount == "function")
            try {
              u.componentDidMount();
            } catch (g) {
              At(a, a.return, g);
            }
          if (a = n, u = a.updateQueue, u !== null) {
            var f = a.stateNode;
            try {
              var d = u.shared.hiddenCallbacks;
              if (d !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < d.length; u++)
                  Hs(d[u], f);
            } catch (g) {
              At(a, a.return, g);
            }
          }
          e && c & 64 && ko(n), Mu(n, n.return);
          break;
        case 27:
          Io(n);
        case 26:
        case 5:
          pe(
            u,
            n,
            e
          ), e && a === null && c & 4 && Wo(n), Mu(n, n.return);
          break;
        case 12:
          pe(
            u,
            n,
            e
          );
          break;
        case 13:
          pe(
            u,
            n,
            e
          ), e && c & 4 && ad(u, n);
          break;
        case 22:
          n.memoizedState === null && pe(
            u,
            n,
            e
          ), Mu(n, n.return);
          break;
        case 30:
          break;
        default:
          pe(
            u,
            n,
            e
          );
      }
      l = l.sibling;
    }
  }
  function sf(t, l) {
    var e = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), t = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (t = l.memoizedState.cachePool.pool), t !== e && (t != null && t.refCount++, e != null && hu(e));
  }
  function of(t, l) {
    t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && hu(t));
  }
  function ql(t, l, e, a) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        id(
          t,
          l,
          e,
          a
        ), l = l.sibling;
  }
  function id(t, l, e, a) {
    var u = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        ql(
          t,
          l,
          e,
          a
        ), u & 2048 && Du(9, l);
        break;
      case 1:
        ql(
          t,
          l,
          e,
          a
        );
        break;
      case 3:
        ql(
          t,
          l,
          e,
          a
        ), u & 2048 && (t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && hu(t)));
        break;
      case 12:
        if (u & 2048) {
          ql(
            t,
            l,
            e,
            a
          ), t = l.stateNode;
          try {
            var n = l.memoizedProps, c = n.id, f = n.onPostCommit;
            typeof f == "function" && f(
              c,
              l.alternate === null ? "mount" : "update",
              t.passiveEffectDuration,
              -0
            );
          } catch (d) {
            At(l, l.return, d);
          }
        } else
          ql(
            t,
            l,
            e,
            a
          );
        break;
      case 13:
        ql(
          t,
          l,
          e,
          a
        );
        break;
      case 23:
        break;
      case 22:
        n = l.stateNode, c = l.alternate, l.memoizedState !== null ? n._visibility & 2 ? ql(
          t,
          l,
          e,
          a
        ) : Ru(t, l) : n._visibility & 2 ? ql(
          t,
          l,
          e,
          a
        ) : (n._visibility |= 2, Ma(
          t,
          l,
          e,
          a,
          (l.subtreeFlags & 10256) !== 0
        )), u & 2048 && sf(c, l);
        break;
      case 24:
        ql(
          t,
          l,
          e,
          a
        ), u & 2048 && of(l.alternate, l);
        break;
      default:
        ql(
          t,
          l,
          e,
          a
        );
    }
  }
  function Ma(t, l, e, a, u) {
    for (u = u && (l.subtreeFlags & 10256) !== 0, l = l.child; l !== null; ) {
      var n = t, c = l, f = e, d = a, g = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          Ma(
            n,
            c,
            f,
            d,
            u
          ), Du(8, c);
          break;
        case 23:
          break;
        case 22:
          var T = c.stateNode;
          c.memoizedState !== null ? T._visibility & 2 ? Ma(
            n,
            c,
            f,
            d,
            u
          ) : Ru(
            n,
            c
          ) : (T._visibility |= 2, Ma(
            n,
            c,
            f,
            d,
            u
          )), u && g & 2048 && sf(
            c.alternate,
            c
          );
          break;
        case 24:
          Ma(
            n,
            c,
            f,
            d,
            u
          ), u && g & 2048 && of(c.alternate, c);
          break;
        default:
          Ma(
            n,
            c,
            f,
            d,
            u
          );
      }
      l = l.sibling;
    }
  }
  function Ru(t, l) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) {
        var e = t, a = l, u = a.flags;
        switch (a.tag) {
          case 22:
            Ru(e, a), u & 2048 && sf(
              a.alternate,
              a
            );
            break;
          case 24:
            Ru(e, a), u & 2048 && of(a.alternate, a);
            break;
          default:
            Ru(e, a);
        }
        l = l.sibling;
      }
  }
  var xu = 8192;
  function Ra(t) {
    if (t.subtreeFlags & xu)
      for (t = t.child; t !== null; )
        cd(t), t = t.sibling;
  }
  function cd(t) {
    switch (t.tag) {
      case 26:
        Ra(t), t.flags & xu && t.memoizedState !== null && Ay(
          Ml,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        Ra(t);
        break;
      case 3:
      case 4:
        var l = Ml;
        Ml = ei(t.stateNode.containerInfo), Ra(t), Ml = l;
        break;
      case 22:
        t.memoizedState === null && (l = t.alternate, l !== null && l.memoizedState !== null ? (l = xu, xu = 16777216, Ra(t), xu = l) : Ra(t));
        break;
      default:
        Ra(t);
    }
  }
  function fd(t) {
    var l = t.alternate;
    if (l !== null && (t = l.child, t !== null)) {
      l.child = null;
      do
        l = t.sibling, t.sibling = null, t = l;
      while (t !== null);
    }
  }
  function Uu(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var e = 0; e < l.length; e++) {
          var a = l[e];
          Zt = a, sd(
            a,
            t
          );
        }
      fd(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        rd(t), t = t.sibling;
  }
  function rd(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Uu(t), t.flags & 2048 && me(9, t, t.return);
        break;
      case 3:
        Uu(t);
        break;
      case 12:
        Uu(t);
        break;
      case 22:
        var l = t.stateNode;
        t.memoizedState !== null && l._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (l._visibility &= -3, Vn(t)) : Uu(t);
        break;
      default:
        Uu(t);
    }
  }
  function Vn(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var e = 0; e < l.length; e++) {
          var a = l[e];
          Zt = a, sd(
            a,
            t
          );
        }
      fd(t);
    }
    for (t = t.child; t !== null; ) {
      switch (l = t, l.tag) {
        case 0:
        case 11:
        case 15:
          me(8, l, l.return), Vn(l);
          break;
        case 22:
          e = l.stateNode, e._visibility & 2 && (e._visibility &= -3, Vn(l));
          break;
        default:
          Vn(l);
      }
      t = t.sibling;
    }
  }
  function sd(t, l) {
    for (; Zt !== null; ) {
      var e = Zt;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          me(8, e, l);
          break;
        case 23:
        case 22:
          if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
            var a = e.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          hu(e.memoizedState.cache);
      }
      if (a = e.child, a !== null) a.return = e, Zt = a;
      else
        t: for (e = t; Zt !== null; ) {
          a = Zt;
          var u = a.sibling, n = a.return;
          if (ld(a), a === e) {
            Zt = null;
            break t;
          }
          if (u !== null) {
            u.return = n, Zt = u;
            break t;
          }
          Zt = n;
        }
    }
  }
  var B1 = {
    getCacheForType: function(t) {
      var l = Wt(qt), e = l.data.get(t);
      return e === void 0 && (e = t(), l.data.set(t, e)), e;
    }
  }, C1 = typeof WeakMap == "function" ? WeakMap : Map, mt = 0, Et = null, ft = null, ot = 0, gt = 0, dl = null, Se = !1, xa = !1, df = !1, le = 0, Dt = 0, be = 0, $e = 0, hf = 0, Tl = 0, Ua = 0, Nu = null, ul = null, yf = !1, vf = 0, Kn = 1 / 0, wn = null, Ae = null, wt = 0, Ee = null, Na = null, Ha = 0, mf = 0, gf = null, od = null, Hu = 0, pf = null;
  function hl() {
    if ((mt & 2) !== 0 && ot !== 0)
      return ot & -ot;
    if (E.T !== null) {
      var t = ba;
      return t !== 0 ? t : Of();
    }
    return _r();
  }
  function dd() {
    Tl === 0 && (Tl = (ot & 536870912) === 0 || ht ? Er() : 536870912);
    var t = El.current;
    return t !== null && (t.flags |= 32), Tl;
  }
  function yl(t, l, e) {
    (t === Et && (gt === 2 || gt === 9) || t.cancelPendingCommit !== null) && (ja(t, 0), Te(
      t,
      ot,
      Tl,
      !1
    )), Fa(t, e), ((mt & 2) === 0 || t !== Et) && (t === Et && ((mt & 2) === 0 && ($e |= e), Dt === 4 && Te(
      t,
      ot,
      Tl,
      !1
    )), Yl(t));
  }
  function hd(t, l, e) {
    if ((mt & 6) !== 0) throw Error(s(327));
    var a = !e && (l & 124) === 0 && (l & t.expiredLanes) === 0 || Wa(t, l), u = a ? Q1(t, l) : Af(t, l, !0), n = a;
    do {
      if (u === 0) {
        xa && !a && Te(t, l, 0, !1);
        break;
      } else {
        if (e = t.current.alternate, n && !G1(e)) {
          u = Af(t, l, !1), n = !1;
          continue;
        }
        if (u === 2) {
          if (n = l, t.errorRecoveryDisabledLanes & n)
            var c = 0;
          else
            c = t.pendingLanes & -536870913, c = c !== 0 ? c : c & 536870912 ? 536870912 : 0;
          if (c !== 0) {
            l = c;
            t: {
              var f = t;
              u = Nu;
              var d = f.current.memoizedState.isDehydrated;
              if (d && (ja(f, c).flags |= 256), c = Af(
                f,
                c,
                !1
              ), c !== 2) {
                if (df && !d) {
                  f.errorRecoveryDisabledLanes |= n, $e |= n, u = 4;
                  break t;
                }
                n = ul, ul = u, n !== null && (ul === null ? ul = n : ul.push.apply(
                  ul,
                  n
                ));
              }
              u = c;
            }
            if (n = !1, u !== 2) continue;
          }
        }
        if (u === 1) {
          ja(t, 0), Te(t, l, 0, !0);
          break;
        }
        t: {
          switch (a = t, n = u, n) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((l & 4194048) !== l) break;
            case 6:
              Te(
                a,
                l,
                Tl,
                !Se
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
          if ((l & 62914560) === l && (u = vf + 300 - Ul(), 10 < u)) {
            if (Te(
              a,
              l,
              Tl,
              !Se
            ), en(a, 0, !0) !== 0) break t;
            a.timeoutHandle = Zd(
              yd.bind(
                null,
                a,
                e,
                ul,
                wn,
                yf,
                l,
                Tl,
                $e,
                Ua,
                Se,
                n,
                2,
                -0,
                0
              ),
              u
            );
            break t;
          }
          yd(
            a,
            e,
            ul,
            wn,
            yf,
            l,
            Tl,
            $e,
            Ua,
            Se,
            n,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Yl(t);
  }
  function yd(t, l, e, a, u, n, c, f, d, g, T, D, p, S) {
    if (t.timeoutHandle = -1, D = l.subtreeFlags, (D & 8192 || (D & 16785408) === 16785408) && (Xu = { stylesheets: null, count: 0, unsuspend: by }, cd(l), D = Ey(), D !== null)) {
      t.cancelPendingCommit = D(
        Ad.bind(
          null,
          t,
          l,
          n,
          e,
          a,
          u,
          c,
          f,
          d,
          T,
          1,
          p,
          S
        )
      ), Te(t, n, c, !g);
      return;
    }
    Ad(
      t,
      l,
      n,
      e,
      a,
      u,
      c,
      f,
      d
    );
  }
  function G1(t) {
    for (var l = t; ; ) {
      var e = l.tag;
      if ((e === 0 || e === 11 || e === 15) && l.flags & 16384 && (e = l.updateQueue, e !== null && (e = e.stores, e !== null)))
        for (var a = 0; a < e.length; a++) {
          var u = e[a], n = u.getSnapshot;
          u = u.value;
          try {
            if (!fl(n(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (e = l.child, l.subtreeFlags & 16384 && e !== null)
        e.return = l, l = e;
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
  function Te(t, l, e, a) {
    l &= ~hf, l &= ~$e, t.suspendedLanes |= l, t.pingedLanes &= ~l, a && (t.warmLanes |= l), a = t.expirationTimes;
    for (var u = l; 0 < u; ) {
      var n = 31 - cl(u), c = 1 << n;
      a[n] = -1, u &= ~c;
    }
    e !== 0 && zr(t, e, l);
  }
  function Jn() {
    return (mt & 6) === 0 ? (ju(0), !1) : !0;
  }
  function Sf() {
    if (ft !== null) {
      if (gt === 0)
        var t = ft.return;
      else
        t = ft, Jl = Le = null, qc(t), _a = null, zu = 0, t = ft;
      for (; t !== null; )
        Jo(t.alternate, t), t = t.return;
      ft = null;
    }
  }
  function ja(t, l) {
    var e = t.timeoutHandle;
    e !== -1 && (t.timeoutHandle = -1, ay(e)), e = t.cancelPendingCommit, e !== null && (t.cancelPendingCommit = null, e()), Sf(), Et = t, ft = e = Vl(t.current, null), ot = l, gt = 0, dl = null, Se = !1, xa = Wa(t, l), df = !1, Ua = Tl = hf = $e = be = Dt = 0, ul = Nu = null, yf = !1, (l & 8) !== 0 && (l |= l & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= l; 0 < a; ) {
        var u = 31 - cl(a), n = 1 << u;
        l |= t[u], a &= ~n;
      }
    return le = l, vn(), e;
  }
  function vd(t, l) {
    ut = null, E.H = jn, l === vu || l === zn ? (l = Us(), gt = 3) : l === Ms ? (l = Us(), gt = 4) : gt = l === Ho ? 8 : l !== null && typeof l == "object" && typeof l.then == "function" ? 6 : 1, dl = l, ft === null && (Dt = 1, Gn(
      t,
      pl(l, t.current)
    ));
  }
  function md() {
    var t = E.H;
    return E.H = jn, t === null ? jn : t;
  }
  function gd() {
    var t = E.A;
    return E.A = B1, t;
  }
  function bf() {
    Dt = 4, Se || (ot & 4194048) !== ot && El.current !== null || (xa = !0), (be & 134217727) === 0 && ($e & 134217727) === 0 || Et === null || Te(
      Et,
      ot,
      Tl,
      !1
    );
  }
  function Af(t, l, e) {
    var a = mt;
    mt |= 2;
    var u = md(), n = gd();
    (Et !== t || ot !== l) && (wn = null, ja(t, l)), l = !1;
    var c = Dt;
    t: do
      try {
        if (gt !== 0 && ft !== null) {
          var f = ft, d = dl;
          switch (gt) {
            case 8:
              Sf(), c = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              El.current === null && (l = !0);
              var g = gt;
              if (gt = 0, dl = null, qa(t, f, d, g), e && xa) {
                c = 0;
                break t;
              }
              break;
            default:
              g = gt, gt = 0, dl = null, qa(t, f, d, g);
          }
        }
        X1(), c = Dt;
        break;
      } catch (T) {
        vd(t, T);
      }
    while (!0);
    return l && t.shellSuspendCounter++, Jl = Le = null, mt = a, E.H = u, E.A = n, ft === null && (Et = null, ot = 0, vn()), c;
  }
  function X1() {
    for (; ft !== null; ) pd(ft);
  }
  function Q1(t, l) {
    var e = mt;
    mt |= 2;
    var a = md(), u = gd();
    Et !== t || ot !== l ? (wn = null, Kn = Ul() + 500, ja(t, l)) : xa = Wa(
      t,
      l
    );
    t: do
      try {
        if (gt !== 0 && ft !== null) {
          l = ft;
          var n = dl;
          l: switch (gt) {
            case 1:
              gt = 0, dl = null, qa(t, l, n, 1);
              break;
            case 2:
            case 9:
              if (Rs(n)) {
                gt = 0, dl = null, Sd(l);
                break;
              }
              l = function() {
                gt !== 2 && gt !== 9 || Et !== t || (gt = 7), Yl(t);
              }, n.then(l, l);
              break t;
            case 3:
              gt = 7;
              break t;
            case 4:
              gt = 5;
              break t;
            case 7:
              Rs(n) ? (gt = 0, dl = null, Sd(l)) : (gt = 0, dl = null, qa(t, l, n, 7));
              break;
            case 5:
              var c = null;
              switch (ft.tag) {
                case 26:
                  c = ft.memoizedState;
                case 5:
                case 27:
                  var f = ft;
                  if (!c || t0(c)) {
                    gt = 0, dl = null;
                    var d = f.sibling;
                    if (d !== null) ft = d;
                    else {
                      var g = f.return;
                      g !== null ? (ft = g, kn(g)) : ft = null;
                    }
                    break l;
                  }
              }
              gt = 0, dl = null, qa(t, l, n, 5);
              break;
            case 6:
              gt = 0, dl = null, qa(t, l, n, 6);
              break;
            case 8:
              Sf(), Dt = 6;
              break t;
            default:
              throw Error(s(462));
          }
        }
        Z1();
        break;
      } catch (T) {
        vd(t, T);
      }
    while (!0);
    return Jl = Le = null, E.H = a, E.A = u, mt = e, ft !== null ? 0 : (Et = null, ot = 0, vn(), Dt);
  }
  function Z1() {
    for (; ft !== null && !sh(); )
      pd(ft);
  }
  function pd(t) {
    var l = Ko(t.alternate, t, le);
    t.memoizedProps = t.pendingProps, l === null ? kn(t) : ft = l;
  }
  function Sd(t) {
    var l = t, e = l.alternate;
    switch (l.tag) {
      case 15:
      case 0:
        l = Go(
          e,
          l,
          l.pendingProps,
          l.type,
          void 0,
          ot
        );
        break;
      case 11:
        l = Go(
          e,
          l,
          l.pendingProps,
          l.type.render,
          l.ref,
          ot
        );
        break;
      case 5:
        qc(l);
      default:
        Jo(e, l), l = ft = Ss(l, le), l = Ko(e, l, le);
    }
    t.memoizedProps = t.pendingProps, l === null ? kn(t) : ft = l;
  }
  function qa(t, l, e, a) {
    Jl = Le = null, qc(l), _a = null, zu = 0;
    var u = l.return;
    try {
      if (U1(
        t,
        u,
        l,
        e,
        ot
      )) {
        Dt = 1, Gn(
          t,
          pl(e, t.current)
        ), ft = null;
        return;
      }
    } catch (n) {
      if (u !== null) throw ft = u, n;
      Dt = 1, Gn(
        t,
        pl(e, t.current)
      ), ft = null;
      return;
    }
    l.flags & 32768 ? (ht || a === 1 ? t = !0 : xa || (ot & 536870912) !== 0 ? t = !1 : (Se = t = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = El.current, a !== null && a.tag === 13 && (a.flags |= 16384))), bd(l, t)) : kn(l);
  }
  function kn(t) {
    var l = t;
    do {
      if ((l.flags & 32768) !== 0) {
        bd(
          l,
          Se
        );
        return;
      }
      t = l.return;
      var e = H1(
        l.alternate,
        l,
        le
      );
      if (e !== null) {
        ft = e;
        return;
      }
      if (l = l.sibling, l !== null) {
        ft = l;
        return;
      }
      ft = l = t;
    } while (l !== null);
    Dt === 0 && (Dt = 5);
  }
  function bd(t, l) {
    do {
      var e = j1(t.alternate, t);
      if (e !== null) {
        e.flags &= 32767, ft = e;
        return;
      }
      if (e = t.return, e !== null && (e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null), !l && (t = t.sibling, t !== null)) {
        ft = t;
        return;
      }
      ft = t = e;
    } while (t !== null);
    Dt = 6, ft = null;
  }
  function Ad(t, l, e, a, u, n, c, f, d) {
    t.cancelPendingCommit = null;
    do
      $n();
    while (wt !== 0);
    if ((mt & 6) !== 0) throw Error(s(327));
    if (l !== null) {
      if (l === t.current) throw Error(s(177));
      if (n = l.lanes | l.childLanes, n |= sc, bh(
        t,
        e,
        n,
        c,
        f,
        d
      ), t === Et && (ft = Et = null, ot = 0), Na = l, Ee = t, Ha = e, mf = n, gf = u, od = a, (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, w1(Pu, function() {
        return _d(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), a = (l.flags & 13878) !== 0, (l.subtreeFlags & 13878) !== 0 || a) {
        a = E.T, E.T = null, u = N.p, N.p = 2, c = mt, mt |= 4;
        try {
          q1(t, l, e);
        } finally {
          mt = c, N.p = u, E.T = a;
        }
      }
      wt = 1, Ed(), Td(), zd();
    }
  }
  function Ed() {
    if (wt === 1) {
      wt = 0;
      var t = Ee, l = Na, e = (l.flags & 13878) !== 0;
      if ((l.subtreeFlags & 13878) !== 0 || e) {
        e = E.T, E.T = null;
        var a = N.p;
        N.p = 2;
        var u = mt;
        mt |= 4;
        try {
          ud(l, t);
          var n = Hf, c = rs(t.containerInfo), f = n.focusedElem, d = n.selectionRange;
          if (c !== f && f && f.ownerDocument && fs(
            f.ownerDocument.documentElement,
            f
          )) {
            if (d !== null && nc(f)) {
              var g = d.start, T = d.end;
              if (T === void 0 && (T = g), "selectionStart" in f)
                f.selectionStart = g, f.selectionEnd = Math.min(
                  T,
                  f.value.length
                );
              else {
                var D = f.ownerDocument || document, p = D && D.defaultView || window;
                if (p.getSelection) {
                  var S = p.getSelection(), F = f.textContent.length, J = Math.min(d.start, F), bt = d.end === void 0 ? J : Math.min(d.end, F);
                  !S.extend && J > bt && (c = bt, bt = J, J = c);
                  var v = cs(
                    f,
                    J
                  ), y = cs(
                    f,
                    bt
                  );
                  if (v && y && (S.rangeCount !== 1 || S.anchorNode !== v.node || S.anchorOffset !== v.offset || S.focusNode !== y.node || S.focusOffset !== y.offset)) {
                    var m = D.createRange();
                    m.setStart(v.node, v.offset), S.removeAllRanges(), J > bt ? (S.addRange(m), S.extend(y.node, y.offset)) : (m.setEnd(y.node, y.offset), S.addRange(m));
                  }
                }
              }
            }
            for (D = [], S = f; S = S.parentNode; )
              S.nodeType === 1 && D.push({
                element: S,
                left: S.scrollLeft,
                top: S.scrollTop
              });
            for (typeof f.focus == "function" && f.focus(), f = 0; f < D.length; f++) {
              var z = D[f];
              z.element.scrollLeft = z.left, z.element.scrollTop = z.top;
            }
          }
          ci = !!Nf, Hf = Nf = null;
        } finally {
          mt = u, N.p = a, E.T = e;
        }
      }
      t.current = l, wt = 2;
    }
  }
  function Td() {
    if (wt === 2) {
      wt = 0;
      var t = Ee, l = Na, e = (l.flags & 8772) !== 0;
      if ((l.subtreeFlags & 8772) !== 0 || e) {
        e = E.T, E.T = null;
        var a = N.p;
        N.p = 2;
        var u = mt;
        mt |= 4;
        try {
          td(t, l.alternate, l);
        } finally {
          mt = u, N.p = a, E.T = e;
        }
      }
      wt = 3;
    }
  }
  function zd() {
    if (wt === 4 || wt === 3) {
      wt = 0, oh();
      var t = Ee, l = Na, e = Ha, a = od;
      (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? wt = 5 : (wt = 0, Na = Ee = null, Od(t, t.pendingLanes));
      var u = t.pendingLanes;
      if (u === 0 && (Ae = null), Ci(e), l = l.stateNode, il && typeof il.onCommitFiberRoot == "function")
        try {
          il.onCommitFiberRoot(
            $a,
            l,
            void 0,
            (l.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        l = E.T, u = N.p, N.p = 2, E.T = null;
        try {
          for (var n = t.onRecoverableError, c = 0; c < a.length; c++) {
            var f = a[c];
            n(f.value, {
              componentStack: f.stack
            });
          }
        } finally {
          E.T = l, N.p = u;
        }
      }
      (Ha & 3) !== 0 && $n(), Yl(t), u = t.pendingLanes, (e & 4194090) !== 0 && (u & 42) !== 0 ? t === pf ? Hu++ : (Hu = 0, pf = t) : Hu = 0, ju(0);
    }
  }
  function Od(t, l) {
    (t.pooledCacheLanes &= l) === 0 && (l = t.pooledCache, l != null && (t.pooledCache = null, hu(l)));
  }
  function $n(t) {
    return Ed(), Td(), zd(), _d();
  }
  function _d() {
    if (wt !== 5) return !1;
    var t = Ee, l = mf;
    mf = 0;
    var e = Ci(Ha), a = E.T, u = N.p;
    try {
      N.p = 32 > e ? 32 : e, E.T = null, e = gf, gf = null;
      var n = Ee, c = Ha;
      if (wt = 0, Na = Ee = null, Ha = 0, (mt & 6) !== 0) throw Error(s(331));
      var f = mt;
      if (mt |= 4, rd(n.current), id(
        n,
        n.current,
        c,
        e
      ), mt = f, ju(0, !1), il && typeof il.onPostCommitFiberRoot == "function")
        try {
          il.onPostCommitFiberRoot($a, n);
        } catch {
        }
      return !0;
    } finally {
      N.p = u, E.T = a, Od(t, l);
    }
  }
  function Dd(t, l, e) {
    l = pl(e, l), l = $c(t.stateNode, l, 2), t = de(t, l, 2), t !== null && (Fa(t, 2), Yl(t));
  }
  function At(t, l, e) {
    if (t.tag === 3)
      Dd(t, t, e);
    else
      for (; l !== null; ) {
        if (l.tag === 3) {
          Dd(
            l,
            t,
            e
          );
          break;
        } else if (l.tag === 1) {
          var a = l.stateNode;
          if (typeof l.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Ae === null || !Ae.has(a))) {
            t = pl(e, t), e = Uo(2), a = de(l, e, 2), a !== null && (No(
              e,
              a,
              l,
              t
            ), Fa(a, 2), Yl(a));
            break;
          }
        }
        l = l.return;
      }
  }
  function Ef(t, l, e) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new C1();
      var u = /* @__PURE__ */ new Set();
      a.set(l, u);
    } else
      u = a.get(l), u === void 0 && (u = /* @__PURE__ */ new Set(), a.set(l, u));
    u.has(e) || (df = !0, u.add(e), t = L1.bind(null, t, l, e), l.then(t, t));
  }
  function L1(t, l, e) {
    var a = t.pingCache;
    a !== null && a.delete(l), t.pingedLanes |= t.suspendedLanes & e, t.warmLanes &= ~e, Et === t && (ot & e) === e && (Dt === 4 || Dt === 3 && (ot & 62914560) === ot && 300 > Ul() - vf ? (mt & 2) === 0 && ja(t, 0) : hf |= e, Ua === ot && (Ua = 0)), Yl(t);
  }
  function Md(t, l) {
    l === 0 && (l = Tr()), t = ma(t, l), t !== null && (Fa(t, l), Yl(t));
  }
  function V1(t) {
    var l = t.memoizedState, e = 0;
    l !== null && (e = l.retryLane), Md(t, e);
  }
  function K1(t, l) {
    var e = 0;
    switch (t.tag) {
      case 13:
        var a = t.stateNode, u = t.memoizedState;
        u !== null && (e = u.retryLane);
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
    a !== null && a.delete(l), Md(t, e);
  }
  function w1(t, l) {
    return ji(t, l);
  }
  var Wn = null, Ya = null, Tf = !1, Fn = !1, zf = !1, We = 0;
  function Yl(t) {
    t !== Ya && t.next === null && (Ya === null ? Wn = Ya = t : Ya = Ya.next = t), Fn = !0, Tf || (Tf = !0, k1());
  }
  function ju(t, l) {
    if (!zf && Fn) {
      zf = !0;
      do
        for (var e = !1, a = Wn; a !== null; ) {
          if (t !== 0) {
            var u = a.pendingLanes;
            if (u === 0) var n = 0;
            else {
              var c = a.suspendedLanes, f = a.pingedLanes;
              n = (1 << 31 - cl(42 | t) + 1) - 1, n &= u & ~(c & ~f), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (e = !0, Nd(a, n));
          } else
            n = ot, n = en(
              a,
              a === Et ? n : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (n & 3) === 0 || Wa(a, n) || (e = !0, Nd(a, n));
          a = a.next;
        }
      while (e);
      zf = !1;
    }
  }
  function J1() {
    Rd();
  }
  function Rd() {
    Fn = Tf = !1;
    var t = 0;
    We !== 0 && (ey() && (t = We), We = 0);
    for (var l = Ul(), e = null, a = Wn; a !== null; ) {
      var u = a.next, n = xd(a, l);
      n === 0 ? (a.next = null, e === null ? Wn = u : e.next = u, u === null && (Ya = e)) : (e = a, (t !== 0 || (n & 3) !== 0) && (Fn = !0)), a = u;
    }
    ju(t);
  }
  function xd(t, l) {
    for (var e = t.suspendedLanes, a = t.pingedLanes, u = t.expirationTimes, n = t.pendingLanes & -62914561; 0 < n; ) {
      var c = 31 - cl(n), f = 1 << c, d = u[c];
      d === -1 ? ((f & e) === 0 || (f & a) !== 0) && (u[c] = Sh(f, l)) : d <= l && (t.expiredLanes |= f), n &= ~f;
    }
    if (l = Et, e = ot, e = en(
      t,
      t === l ? e : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a = t.callbackNode, e === 0 || t === l && (gt === 2 || gt === 9) || t.cancelPendingCommit !== null)
      return a !== null && a !== null && qi(a), t.callbackNode = null, t.callbackPriority = 0;
    if ((e & 3) === 0 || Wa(t, e)) {
      if (l = e & -e, l === t.callbackPriority) return l;
      switch (a !== null && qi(a), Ci(e)) {
        case 2:
        case 8:
          e = br;
          break;
        case 32:
          e = Pu;
          break;
        case 268435456:
          e = Ar;
          break;
        default:
          e = Pu;
      }
      return a = Ud.bind(null, t), e = ji(e, a), t.callbackPriority = l, t.callbackNode = e, l;
    }
    return a !== null && a !== null && qi(a), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function Ud(t, l) {
    if (wt !== 0 && wt !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var e = t.callbackNode;
    if ($n() && t.callbackNode !== e)
      return null;
    var a = ot;
    return a = en(
      t,
      t === Et ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a === 0 ? null : (hd(t, a, l), xd(t, Ul()), t.callbackNode != null && t.callbackNode === e ? Ud.bind(null, t) : null);
  }
  function Nd(t, l) {
    if ($n()) return null;
    hd(t, l, !0);
  }
  function k1() {
    uy(function() {
      (mt & 6) !== 0 ? ji(
        Sr,
        J1
      ) : Rd();
    });
  }
  function Of() {
    return We === 0 && (We = Er()), We;
  }
  function Hd(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : fn("" + t);
  }
  function jd(t, l) {
    var e = l.ownerDocument.createElement("input");
    return e.name = l.name, e.value = l.value, t.id && e.setAttribute("form", t.id), l.parentNode.insertBefore(e, l), t = new FormData(t), e.parentNode.removeChild(e), t;
  }
  function $1(t, l, e, a, u) {
    if (l === "submit" && e && e.stateNode === u) {
      var n = Hd(
        (u[tl] || null).action
      ), c = a.submitter;
      c && (l = (l = c[tl] || null) ? Hd(l.formAction) : c.getAttribute("formAction"), l !== null && (n = l, c = null));
      var f = new dn(
        "action",
        "action",
        null,
        a,
        u
      );
      t.push({
        event: f,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (We !== 0) {
                  var d = c ? jd(u, c) : new FormData(u);
                  Vc(
                    e,
                    {
                      pending: !0,
                      data: d,
                      method: u.method,
                      action: n
                    },
                    null,
                    d
                  );
                }
              } else
                typeof n == "function" && (f.preventDefault(), d = c ? jd(u, c) : new FormData(u), Vc(
                  e,
                  {
                    pending: !0,
                    data: d,
                    method: u.method,
                    action: n
                  },
                  n,
                  d
                ));
            },
            currentTarget: u
          }
        ]
      });
    }
  }
  for (var _f = 0; _f < rc.length; _f++) {
    var Df = rc[_f], W1 = Df.toLowerCase(), F1 = Df[0].toUpperCase() + Df.slice(1);
    Dl(
      W1,
      "on" + F1
    );
  }
  Dl(ds, "onAnimationEnd"), Dl(hs, "onAnimationIteration"), Dl(ys, "onAnimationStart"), Dl("dblclick", "onDoubleClick"), Dl("focusin", "onFocus"), Dl("focusout", "onBlur"), Dl(y1, "onTransitionRun"), Dl(v1, "onTransitionStart"), Dl(m1, "onTransitionCancel"), Dl(vs, "onTransitionEnd"), ia("onMouseEnter", ["mouseout", "mouseover"]), ia("onMouseLeave", ["mouseout", "mouseover"]), ia("onPointerEnter", ["pointerout", "pointerover"]), ia("onPointerLeave", ["pointerout", "pointerover"]), je(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), je(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), je("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), je(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), je(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), je(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var qu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), I1 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(qu)
  );
  function qd(t, l) {
    l = (l & 4) !== 0;
    for (var e = 0; e < t.length; e++) {
      var a = t[e], u = a.event;
      a = a.listeners;
      t: {
        var n = void 0;
        if (l)
          for (var c = a.length - 1; 0 <= c; c--) {
            var f = a[c], d = f.instance, g = f.currentTarget;
            if (f = f.listener, d !== n && u.isPropagationStopped())
              break t;
            n = f, u.currentTarget = g;
            try {
              n(u);
            } catch (T) {
              Cn(T);
            }
            u.currentTarget = null, n = d;
          }
        else
          for (c = 0; c < a.length; c++) {
            if (f = a[c], d = f.instance, g = f.currentTarget, f = f.listener, d !== n && u.isPropagationStopped())
              break t;
            n = f, u.currentTarget = g;
            try {
              n(u);
            } catch (T) {
              Cn(T);
            }
            u.currentTarget = null, n = d;
          }
      }
    }
  }
  function rt(t, l) {
    var e = l[Gi];
    e === void 0 && (e = l[Gi] = /* @__PURE__ */ new Set());
    var a = t + "__bubble";
    e.has(a) || (Yd(l, t, 2, !1), e.add(a));
  }
  function Mf(t, l, e) {
    var a = 0;
    l && (a |= 4), Yd(
      e,
      t,
      a,
      l
    );
  }
  var In = "_reactListening" + Math.random().toString(36).slice(2);
  function Rf(t) {
    if (!t[In]) {
      t[In] = !0, Mr.forEach(function(e) {
        e !== "selectionchange" && (I1.has(e) || Mf(e, !1, t), Mf(e, !0, t));
      });
      var l = t.nodeType === 9 ? t : t.ownerDocument;
      l === null || l[In] || (l[In] = !0, Mf("selectionchange", !1, l));
    }
  }
  function Yd(t, l, e, a) {
    switch (i0(l)) {
      case 2:
        var u = Oy;
        break;
      case 8:
        u = _y;
        break;
      default:
        u = Lf;
    }
    e = u.bind(
      null,
      l,
      e,
      t
    ), u = void 0, !Wi || l !== "touchstart" && l !== "touchmove" && l !== "wheel" || (u = !0), a ? u !== void 0 ? t.addEventListener(l, e, {
      capture: !0,
      passive: u
    }) : t.addEventListener(l, e, !0) : u !== void 0 ? t.addEventListener(l, e, {
      passive: u
    }) : t.addEventListener(l, e, !1);
  }
  function xf(t, l, e, a, u) {
    var n = a;
    if ((l & 1) === 0 && (l & 2) === 0 && a !== null)
      t: for (; ; ) {
        if (a === null) return;
        var c = a.tag;
        if (c === 3 || c === 4) {
          var f = a.stateNode.containerInfo;
          if (f === u) break;
          if (c === 4)
            for (c = a.return; c !== null; ) {
              var d = c.tag;
              if ((d === 3 || d === 4) && c.stateNode.containerInfo === u)
                return;
              c = c.return;
            }
          for (; f !== null; ) {
            if (c = aa(f), c === null) return;
            if (d = c.tag, d === 5 || d === 6 || d === 26 || d === 27) {
              a = n = c;
              continue t;
            }
            f = f.parentNode;
          }
        }
        a = a.return;
      }
    Zr(function() {
      var g = n, T = ki(e), D = [];
      t: {
        var p = ms.get(t);
        if (p !== void 0) {
          var S = dn, F = t;
          switch (t) {
            case "keypress":
              if (sn(e) === 0) break t;
            case "keydown":
            case "keyup":
              S = wh;
              break;
            case "focusin":
              F = "focus", S = tc;
              break;
            case "focusout":
              F = "blur", S = tc;
              break;
            case "beforeblur":
            case "afterblur":
              S = tc;
              break;
            case "click":
              if (e.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              S = Kr;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              S = jh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              S = $h;
              break;
            case ds:
            case hs:
            case ys:
              S = Bh;
              break;
            case vs:
              S = Fh;
              break;
            case "scroll":
            case "scrollend":
              S = Nh;
              break;
            case "wheel":
              S = Ph;
              break;
            case "copy":
            case "cut":
            case "paste":
              S = Gh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              S = Jr;
              break;
            case "toggle":
            case "beforetoggle":
              S = l1;
          }
          var J = (l & 4) !== 0, bt = !J && (t === "scroll" || t === "scrollend"), v = J ? p !== null ? p + "Capture" : null : p;
          J = [];
          for (var y = g, m; y !== null; ) {
            var z = y;
            if (m = z.stateNode, z = z.tag, z !== 5 && z !== 26 && z !== 27 || m === null || v === null || (z = tu(y, v), z != null && J.push(
              Yu(y, z, m)
            )), bt) break;
            y = y.return;
          }
          0 < J.length && (p = new S(
            p,
            F,
            null,
            e,
            T
          ), D.push({ event: p, listeners: J }));
        }
      }
      if ((l & 7) === 0) {
        t: {
          if (p = t === "mouseover" || t === "pointerover", S = t === "mouseout" || t === "pointerout", p && e !== Ji && (F = e.relatedTarget || e.fromElement) && (aa(F) || F[ea]))
            break t;
          if ((S || p) && (p = T.window === T ? T : (p = T.ownerDocument) ? p.defaultView || p.parentWindow : window, S ? (F = e.relatedTarget || e.toElement, S = g, F = F ? aa(F) : null, F !== null && (bt = O(F), J = F.tag, F !== bt || J !== 5 && J !== 27 && J !== 6) && (F = null)) : (S = null, F = g), S !== F)) {
            if (J = Kr, z = "onMouseLeave", v = "onMouseEnter", y = "mouse", (t === "pointerout" || t === "pointerover") && (J = Jr, z = "onPointerLeave", v = "onPointerEnter", y = "pointer"), bt = S == null ? p : Pa(S), m = F == null ? p : Pa(F), p = new J(
              z,
              y + "leave",
              S,
              e,
              T
            ), p.target = bt, p.relatedTarget = m, z = null, aa(T) === g && (J = new J(
              v,
              y + "enter",
              F,
              e,
              T
            ), J.target = m, J.relatedTarget = bt, z = J), bt = z, S && F)
              l: {
                for (J = S, v = F, y = 0, m = J; m; m = Ba(m))
                  y++;
                for (m = 0, z = v; z; z = Ba(z))
                  m++;
                for (; 0 < y - m; )
                  J = Ba(J), y--;
                for (; 0 < m - y; )
                  v = Ba(v), m--;
                for (; y--; ) {
                  if (J === v || v !== null && J === v.alternate)
                    break l;
                  J = Ba(J), v = Ba(v);
                }
                J = null;
              }
            else J = null;
            S !== null && Bd(
              D,
              p,
              S,
              J,
              !1
            ), F !== null && bt !== null && Bd(
              D,
              bt,
              F,
              J,
              !0
            );
          }
        }
        t: {
          if (p = g ? Pa(g) : window, S = p.nodeName && p.nodeName.toLowerCase(), S === "select" || S === "input" && p.type === "file")
            var B = ls;
          else if (Pr(p))
            if (es)
              B = o1;
            else {
              B = r1;
              var nt = f1;
            }
          else
            S = p.nodeName, !S || S.toLowerCase() !== "input" || p.type !== "checkbox" && p.type !== "radio" ? g && wi(g.elementType) && (B = ls) : B = s1;
          if (B && (B = B(t, g))) {
            ts(
              D,
              B,
              e,
              T
            );
            break t;
          }
          nt && nt(t, p, g), t === "focusout" && g && p.type === "number" && g.memoizedProps.value != null && Ki(p, "number", p.value);
        }
        switch (nt = g ? Pa(g) : window, t) {
          case "focusin":
            (Pr(nt) || nt.contentEditable === "true") && (ha = nt, ic = g, fu = null);
            break;
          case "focusout":
            fu = ic = ha = null;
            break;
          case "mousedown":
            cc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            cc = !1, ss(D, e, T);
            break;
          case "selectionchange":
            if (h1) break;
          case "keydown":
          case "keyup":
            ss(D, e, T);
        }
        var Z;
        if (ec)
          t: {
            switch (t) {
              case "compositionstart":
                var W = "onCompositionStart";
                break t;
              case "compositionend":
                W = "onCompositionEnd";
                break t;
              case "compositionupdate":
                W = "onCompositionUpdate";
                break t;
            }
            W = void 0;
          }
        else
          da ? Fr(t, e) && (W = "onCompositionEnd") : t === "keydown" && e.keyCode === 229 && (W = "onCompositionStart");
        W && (kr && e.locale !== "ko" && (da || W !== "onCompositionStart" ? W === "onCompositionEnd" && da && (Z = Lr()) : (fe = T, Fi = "value" in fe ? fe.value : fe.textContent, da = !0)), nt = Pn(g, W), 0 < nt.length && (W = new wr(
          W,
          t,
          null,
          e,
          T
        ), D.push({ event: W, listeners: nt }), Z ? W.data = Z : (Z = Ir(e), Z !== null && (W.data = Z)))), (Z = a1 ? u1(t, e) : n1(t, e)) && (W = Pn(g, "onBeforeInput"), 0 < W.length && (nt = new wr(
          "onBeforeInput",
          "beforeinput",
          null,
          e,
          T
        ), D.push({
          event: nt,
          listeners: W
        }), nt.data = Z)), $1(
          D,
          t,
          g,
          e,
          T
        );
      }
      qd(D, l);
    });
  }
  function Yu(t, l, e) {
    return {
      instance: t,
      listener: l,
      currentTarget: e
    };
  }
  function Pn(t, l) {
    for (var e = l + "Capture", a = []; t !== null; ) {
      var u = t, n = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || n === null || (u = tu(t, e), u != null && a.unshift(
        Yu(t, u, n)
      ), u = tu(t, l), u != null && a.push(
        Yu(t, u, n)
      )), t.tag === 3) return a;
      t = t.return;
    }
    return [];
  }
  function Ba(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Bd(t, l, e, a, u) {
    for (var n = l._reactName, c = []; e !== null && e !== a; ) {
      var f = e, d = f.alternate, g = f.stateNode;
      if (f = f.tag, d !== null && d === a) break;
      f !== 5 && f !== 26 && f !== 27 || g === null || (d = g, u ? (g = tu(e, n), g != null && c.unshift(
        Yu(e, g, d)
      )) : u || (g = tu(e, n), g != null && c.push(
        Yu(e, g, d)
      ))), e = e.return;
    }
    c.length !== 0 && t.push({ event: l, listeners: c });
  }
  var P1 = /\r\n?/g, ty = /\u0000|\uFFFD/g;
  function Cd(t) {
    return (typeof t == "string" ? t : "" + t).replace(P1, `
`).replace(ty, "");
  }
  function Gd(t, l) {
    return l = Cd(l), Cd(t) === l;
  }
  function ti() {
  }
  function St(t, l, e, a, u, n) {
    switch (e) {
      case "children":
        typeof a == "string" ? l === "body" || l === "textarea" && a === "" || ra(t, a) : (typeof a == "number" || typeof a == "bigint") && l !== "body" && ra(t, "" + a);
        break;
      case "className":
        un(t, "class", a);
        break;
      case "tabIndex":
        un(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        un(t, e, a);
        break;
      case "style":
        Xr(t, a, n);
        break;
      case "data":
        if (l !== "object") {
          un(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (l !== "a" || e !== "href")) {
          t.removeAttribute(e);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(e);
          break;
        }
        a = fn("" + a), t.setAttribute(e, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            e,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" && (e === "formAction" ? (l !== "input" && St(t, l, "name", u.name, u, null), St(
            t,
            l,
            "formEncType",
            u.formEncType,
            u,
            null
          ), St(
            t,
            l,
            "formMethod",
            u.formMethod,
            u,
            null
          ), St(
            t,
            l,
            "formTarget",
            u.formTarget,
            u,
            null
          )) : (St(t, l, "encType", u.encType, u, null), St(t, l, "method", u.method, u, null), St(t, l, "target", u.target, u, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(e);
          break;
        }
        a = fn("" + a), t.setAttribute(e, a);
        break;
      case "onClick":
        a != null && (t.onclick = ti);
        break;
      case "onScroll":
        a != null && rt("scroll", t);
        break;
      case "onScrollEnd":
        a != null && rt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(s(61));
          if (e = a.__html, e != null) {
            if (u.children != null) throw Error(s(60));
            t.innerHTML = e;
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
        e = fn("" + a), t.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          e
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
        a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(e, "" + a) : t.removeAttribute(e);
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
        a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(e, "") : t.removeAttribute(e);
        break;
      case "capture":
      case "download":
        a === !0 ? t.setAttribute(e, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(e, a) : t.removeAttribute(e);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(e, a) : t.removeAttribute(e);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(e) : t.setAttribute(e, a);
        break;
      case "popover":
        rt("beforetoggle", t), rt("toggle", t), an(t, "popover", a);
        break;
      case "xlinkActuate":
        Zl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        Zl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        Zl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        Zl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        Zl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        Zl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        Zl(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        Zl(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        Zl(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        an(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (e = xh.get(e) || e, an(t, e, a));
    }
  }
  function Uf(t, l, e, a, u, n) {
    switch (e) {
      case "style":
        Xr(t, a, n);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(s(61));
          if (e = a.__html, e != null) {
            if (u.children != null) throw Error(s(60));
            t.innerHTML = e;
          }
        }
        break;
      case "children":
        typeof a == "string" ? ra(t, a) : (typeof a == "number" || typeof a == "bigint") && ra(t, "" + a);
        break;
      case "onScroll":
        a != null && rt("scroll", t);
        break;
      case "onScrollEnd":
        a != null && rt("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = ti);
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
        if (!Rr.hasOwnProperty(e))
          t: {
            if (e[0] === "o" && e[1] === "n" && (u = e.endsWith("Capture"), l = e.slice(2, u ? e.length - 7 : void 0), n = t[tl] || null, n = n != null ? n[e] : null, typeof n == "function" && t.removeEventListener(l, n, u), typeof a == "function")) {
              typeof n != "function" && n !== null && (e in t ? t[e] = null : t.hasAttribute(e) && t.removeAttribute(e)), t.addEventListener(l, a, u);
              break t;
            }
            e in t ? t[e] = a : a === !0 ? t.setAttribute(e, "") : an(t, e, a);
          }
    }
  }
  function Jt(t, l, e) {
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
        rt("error", t), rt("load", t);
        var a = !1, u = !1, n;
        for (n in e)
          if (e.hasOwnProperty(n)) {
            var c = e[n];
            if (c != null)
              switch (n) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(s(137, l));
                default:
                  St(t, l, n, c, e, null);
              }
          }
        u && St(t, l, "srcSet", e.srcSet, e, null), a && St(t, l, "src", e.src, e, null);
        return;
      case "input":
        rt("invalid", t);
        var f = n = c = u = null, d = null, g = null;
        for (a in e)
          if (e.hasOwnProperty(a)) {
            var T = e[a];
            if (T != null)
              switch (a) {
                case "name":
                  u = T;
                  break;
                case "type":
                  c = T;
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
                  f = T;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (T != null)
                    throw Error(s(137, l));
                  break;
                default:
                  St(t, l, a, T, e, null);
              }
          }
        Yr(
          t,
          n,
          f,
          d,
          g,
          c,
          u,
          !1
        ), nn(t);
        return;
      case "select":
        rt("invalid", t), a = c = n = null;
        for (u in e)
          if (e.hasOwnProperty(u) && (f = e[u], f != null))
            switch (u) {
              case "value":
                n = f;
                break;
              case "defaultValue":
                c = f;
                break;
              case "multiple":
                a = f;
              default:
                St(t, l, u, f, e, null);
            }
        l = n, e = c, t.multiple = !!a, l != null ? fa(t, !!a, l, !1) : e != null && fa(t, !!a, e, !0);
        return;
      case "textarea":
        rt("invalid", t), n = u = a = null;
        for (c in e)
          if (e.hasOwnProperty(c) && (f = e[c], f != null))
            switch (c) {
              case "value":
                a = f;
                break;
              case "defaultValue":
                u = f;
                break;
              case "children":
                n = f;
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(s(91));
                break;
              default:
                St(t, l, c, f, e, null);
            }
        Cr(t, a, u, n), nn(t);
        return;
      case "option":
        for (d in e)
          if (e.hasOwnProperty(d) && (a = e[d], a != null))
            switch (d) {
              case "selected":
                t.selected = a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                St(t, l, d, a, e, null);
            }
        return;
      case "dialog":
        rt("beforetoggle", t), rt("toggle", t), rt("cancel", t), rt("close", t);
        break;
      case "iframe":
      case "object":
        rt("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < qu.length; a++)
          rt(qu[a], t);
        break;
      case "image":
        rt("error", t), rt("load", t);
        break;
      case "details":
        rt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        rt("error", t), rt("load", t);
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
        for (g in e)
          if (e.hasOwnProperty(g) && (a = e[g], a != null))
            switch (g) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, l));
              default:
                St(t, l, g, a, e, null);
            }
        return;
      default:
        if (wi(l)) {
          for (T in e)
            e.hasOwnProperty(T) && (a = e[T], a !== void 0 && Uf(
              t,
              l,
              T,
              a,
              e,
              void 0
            ));
          return;
        }
    }
    for (f in e)
      e.hasOwnProperty(f) && (a = e[f], a != null && St(t, l, f, a, e, null));
  }
  function ly(t, l, e, a) {
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
        var u = null, n = null, c = null, f = null, d = null, g = null, T = null;
        for (S in e) {
          var D = e[S];
          if (e.hasOwnProperty(S) && D != null)
            switch (S) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                d = D;
              default:
                a.hasOwnProperty(S) || St(t, l, S, null, a, D);
            }
        }
        for (var p in a) {
          var S = a[p];
          if (D = e[p], a.hasOwnProperty(p) && (S != null || D != null))
            switch (p) {
              case "type":
                n = S;
                break;
              case "name":
                u = S;
                break;
              case "checked":
                g = S;
                break;
              case "defaultChecked":
                T = S;
                break;
              case "value":
                c = S;
                break;
              case "defaultValue":
                f = S;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (S != null)
                  throw Error(s(137, l));
                break;
              default:
                S !== D && St(
                  t,
                  l,
                  p,
                  S,
                  a,
                  D
                );
            }
        }
        Vi(
          t,
          c,
          f,
          d,
          g,
          T,
          n,
          u
        );
        return;
      case "select":
        S = c = f = p = null;
        for (n in e)
          if (d = e[n], e.hasOwnProperty(n) && d != null)
            switch (n) {
              case "value":
                break;
              case "multiple":
                S = d;
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
        for (u in a)
          if (n = a[u], d = e[u], a.hasOwnProperty(u) && (n != null || d != null))
            switch (u) {
              case "value":
                p = n;
                break;
              case "defaultValue":
                f = n;
                break;
              case "multiple":
                c = n;
              default:
                n !== d && St(
                  t,
                  l,
                  u,
                  n,
                  a,
                  d
                );
            }
        l = f, e = c, a = S, p != null ? fa(t, !!e, p, !1) : !!a != !!e && (l != null ? fa(t, !!e, l, !0) : fa(t, !!e, e ? [] : "", !1));
        return;
      case "textarea":
        S = p = null;
        for (f in e)
          if (u = e[f], e.hasOwnProperty(f) && u != null && !a.hasOwnProperty(f))
            switch (f) {
              case "value":
                break;
              case "children":
                break;
              default:
                St(t, l, f, null, a, u);
            }
        for (c in a)
          if (u = a[c], n = e[c], a.hasOwnProperty(c) && (u != null || n != null))
            switch (c) {
              case "value":
                p = u;
                break;
              case "defaultValue":
                S = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(s(91));
                break;
              default:
                u !== n && St(t, l, c, u, a, n);
            }
        Br(t, p, S);
        return;
      case "option":
        for (var F in e)
          if (p = e[F], e.hasOwnProperty(F) && p != null && !a.hasOwnProperty(F))
            switch (F) {
              case "selected":
                t.selected = !1;
                break;
              default:
                St(
                  t,
                  l,
                  F,
                  null,
                  a,
                  p
                );
            }
        for (d in a)
          if (p = a[d], S = e[d], a.hasOwnProperty(d) && p !== S && (p != null || S != null))
            switch (d) {
              case "selected":
                t.selected = p && typeof p != "function" && typeof p != "symbol";
                break;
              default:
                St(
                  t,
                  l,
                  d,
                  p,
                  a,
                  S
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
        for (var J in e)
          p = e[J], e.hasOwnProperty(J) && p != null && !a.hasOwnProperty(J) && St(t, l, J, null, a, p);
        for (g in a)
          if (p = a[g], S = e[g], a.hasOwnProperty(g) && p !== S && (p != null || S != null))
            switch (g) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (p != null)
                  throw Error(s(137, l));
                break;
              default:
                St(
                  t,
                  l,
                  g,
                  p,
                  a,
                  S
                );
            }
        return;
      default:
        if (wi(l)) {
          for (var bt in e)
            p = e[bt], e.hasOwnProperty(bt) && p !== void 0 && !a.hasOwnProperty(bt) && Uf(
              t,
              l,
              bt,
              void 0,
              a,
              p
            );
          for (T in a)
            p = a[T], S = e[T], !a.hasOwnProperty(T) || p === S || p === void 0 && S === void 0 || Uf(
              t,
              l,
              T,
              p,
              a,
              S
            );
          return;
        }
    }
    for (var v in e)
      p = e[v], e.hasOwnProperty(v) && p != null && !a.hasOwnProperty(v) && St(t, l, v, null, a, p);
    for (D in a)
      p = a[D], S = e[D], !a.hasOwnProperty(D) || p === S || p == null && S == null || St(t, l, D, p, a, S);
  }
  var Nf = null, Hf = null;
  function li(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Xd(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Qd(t, l) {
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
  function jf(t, l) {
    return t === "textarea" || t === "noscript" || typeof l.children == "string" || typeof l.children == "number" || typeof l.children == "bigint" || typeof l.dangerouslySetInnerHTML == "object" && l.dangerouslySetInnerHTML !== null && l.dangerouslySetInnerHTML.__html != null;
  }
  var qf = null;
  function ey() {
    var t = window.event;
    return t && t.type === "popstate" ? t === qf ? !1 : (qf = t, !0) : (qf = null, !1);
  }
  var Zd = typeof setTimeout == "function" ? setTimeout : void 0, ay = typeof clearTimeout == "function" ? clearTimeout : void 0, Ld = typeof Promise == "function" ? Promise : void 0, uy = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ld < "u" ? function(t) {
    return Ld.resolve(null).then(t).catch(ny);
  } : Zd;
  function ny(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function ze(t) {
    return t === "head";
  }
  function Vd(t, l) {
    var e = l, a = 0, u = 0;
    do {
      var n = e.nextSibling;
      if (t.removeChild(e), n && n.nodeType === 8)
        if (e = n.data, e === "/$") {
          if (0 < a && 8 > a) {
            e = a;
            var c = t.ownerDocument;
            if (e & 1 && Bu(c.documentElement), e & 2 && Bu(c.body), e & 4)
              for (e = c.head, Bu(e), c = e.firstChild; c; ) {
                var f = c.nextSibling, d = c.nodeName;
                c[Ia] || d === "SCRIPT" || d === "STYLE" || d === "LINK" && c.rel.toLowerCase() === "stylesheet" || e.removeChild(c), c = f;
              }
          }
          if (u === 0) {
            t.removeChild(n), Ku(l);
            return;
          }
          u--;
        } else
          e === "$" || e === "$?" || e === "$!" ? u++ : a = e.charCodeAt(0) - 48;
      else a = 0;
      e = n;
    } while (e);
    Ku(l);
  }
  function Yf(t) {
    var l = t.firstChild;
    for (l && l.nodeType === 10 && (l = l.nextSibling); l; ) {
      var e = l;
      switch (l = l.nextSibling, e.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Yf(e), Xi(e);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (e.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(e);
    }
  }
  function iy(t, l, e, a) {
    for (; t.nodeType === 1; ) {
      var u = e;
      if (t.nodeName.toLowerCase() !== l.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (a) {
        if (!t[Ia])
          switch (l) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (n = t.getAttribute("rel"), n === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (n !== u.rel || t.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || t.getAttribute("title") !== (u.title == null ? null : u.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (n = t.getAttribute("src"), (n !== (u.src == null ? null : u.src) || t.getAttribute("type") !== (u.type == null ? null : u.type) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && n && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (l === "input" && t.type === "hidden") {
        var n = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && t.getAttribute("name") === n)
          return t;
      } else return t;
      if (t = Rl(t.nextSibling), t === null) break;
    }
    return null;
  }
  function cy(t, l, e) {
    if (l === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Rl(t.nextSibling), t === null)) return null;
    return t;
  }
  function Bf(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState === "complete";
  }
  function fy(t, l) {
    var e = t.ownerDocument;
    if (t.data !== "$?" || e.readyState === "complete")
      l();
    else {
      var a = function() {
        l(), e.removeEventListener("DOMContentLoaded", a);
      };
      e.addEventListener("DOMContentLoaded", a), t._reactRetry = a;
    }
  }
  function Rl(t) {
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
  var Cf = null;
  function Kd(t) {
    t = t.previousSibling;
    for (var l = 0; t; ) {
      if (t.nodeType === 8) {
        var e = t.data;
        if (e === "$" || e === "$!" || e === "$?") {
          if (l === 0) return t;
          l--;
        } else e === "/$" && l++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function wd(t, l, e) {
    switch (l = li(e), t) {
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
  function Bu(t) {
    for (var l = t.attributes; l.length; )
      t.removeAttributeNode(l[0]);
    Xi(t);
  }
  var zl = /* @__PURE__ */ new Map(), Jd = /* @__PURE__ */ new Set();
  function ei(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var ee = N.d;
  N.d = {
    f: ry,
    r: sy,
    D: oy,
    C: dy,
    L: hy,
    m: yy,
    X: my,
    S: vy,
    M: gy
  };
  function ry() {
    var t = ee.f(), l = Jn();
    return t || l;
  }
  function sy(t) {
    var l = ua(t);
    l !== null && l.tag === 5 && l.type === "form" ? ho(l) : ee.r(t);
  }
  var Ca = typeof document > "u" ? null : document;
  function kd(t, l, e) {
    var a = Ca;
    if (a && typeof l == "string" && l) {
      var u = gl(l);
      u = 'link[rel="' + t + '"][href="' + u + '"]', typeof e == "string" && (u += '[crossorigin="' + e + '"]'), Jd.has(u) || (Jd.add(u), t = { rel: t, crossOrigin: e, href: l }, a.querySelector(u) === null && (l = a.createElement("link"), Jt(l, "link", t), Xt(l), a.head.appendChild(l)));
    }
  }
  function oy(t) {
    ee.D(t), kd("dns-prefetch", t, null);
  }
  function dy(t, l) {
    ee.C(t, l), kd("preconnect", t, l);
  }
  function hy(t, l, e) {
    ee.L(t, l, e);
    var a = Ca;
    if (a && t && l) {
      var u = 'link[rel="preload"][as="' + gl(l) + '"]';
      l === "image" && e && e.imageSrcSet ? (u += '[imagesrcset="' + gl(
        e.imageSrcSet
      ) + '"]', typeof e.imageSizes == "string" && (u += '[imagesizes="' + gl(
        e.imageSizes
      ) + '"]')) : u += '[href="' + gl(t) + '"]';
      var n = u;
      switch (l) {
        case "style":
          n = Ga(t);
          break;
        case "script":
          n = Xa(t);
      }
      zl.has(n) || (t = _(
        {
          rel: "preload",
          href: l === "image" && e && e.imageSrcSet ? void 0 : t,
          as: l
        },
        e
      ), zl.set(n, t), a.querySelector(u) !== null || l === "style" && a.querySelector(Cu(n)) || l === "script" && a.querySelector(Gu(n)) || (l = a.createElement("link"), Jt(l, "link", t), Xt(l), a.head.appendChild(l)));
    }
  }
  function yy(t, l) {
    ee.m(t, l);
    var e = Ca;
    if (e && t) {
      var a = l && typeof l.as == "string" ? l.as : "script", u = 'link[rel="modulepreload"][as="' + gl(a) + '"][href="' + gl(t) + '"]', n = u;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Xa(t);
      }
      if (!zl.has(n) && (t = _({ rel: "modulepreload", href: t }, l), zl.set(n, t), e.querySelector(u) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (e.querySelector(Gu(n)))
              return;
        }
        a = e.createElement("link"), Jt(a, "link", t), Xt(a), e.head.appendChild(a);
      }
    }
  }
  function vy(t, l, e) {
    ee.S(t, l, e);
    var a = Ca;
    if (a && t) {
      var u = na(a).hoistableStyles, n = Ga(t);
      l = l || "default";
      var c = u.get(n);
      if (!c) {
        var f = { loading: 0, preload: null };
        if (c = a.querySelector(
          Cu(n)
        ))
          f.loading = 5;
        else {
          t = _(
            { rel: "stylesheet", href: t, "data-precedence": l },
            e
          ), (e = zl.get(n)) && Gf(t, e);
          var d = c = a.createElement("link");
          Xt(d), Jt(d, "link", t), d._p = new Promise(function(g, T) {
            d.onload = g, d.onerror = T;
          }), d.addEventListener("load", function() {
            f.loading |= 1;
          }), d.addEventListener("error", function() {
            f.loading |= 2;
          }), f.loading |= 4, ai(c, l, a);
        }
        c = {
          type: "stylesheet",
          instance: c,
          count: 1,
          state: f
        }, u.set(n, c);
      }
    }
  }
  function my(t, l) {
    ee.X(t, l);
    var e = Ca;
    if (e && t) {
      var a = na(e).hoistableScripts, u = Xa(t), n = a.get(u);
      n || (n = e.querySelector(Gu(u)), n || (t = _({ src: t, async: !0 }, l), (l = zl.get(u)) && Xf(t, l), n = e.createElement("script"), Xt(n), Jt(n, "link", t), e.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(u, n));
    }
  }
  function gy(t, l) {
    ee.M(t, l);
    var e = Ca;
    if (e && t) {
      var a = na(e).hoistableScripts, u = Xa(t), n = a.get(u);
      n || (n = e.querySelector(Gu(u)), n || (t = _({ src: t, async: !0, type: "module" }, l), (l = zl.get(u)) && Xf(t, l), n = e.createElement("script"), Xt(n), Jt(n, "link", t), e.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(u, n));
    }
  }
  function $d(t, l, e, a) {
    var u = (u = $.current) ? ei(u) : null;
    if (!u) throw Error(s(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof e.precedence == "string" && typeof e.href == "string" ? (l = Ga(e.href), e = na(
          u
        ).hoistableStyles, a = e.get(l), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, e.set(l, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (e.rel === "stylesheet" && typeof e.href == "string" && typeof e.precedence == "string") {
          t = Ga(e.href);
          var n = na(
            u
          ).hoistableStyles, c = n.get(t);
          if (c || (u = u.ownerDocument || u, c = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, n.set(t, c), (n = u.querySelector(
            Cu(t)
          )) && !n._p && (c.instance = n, c.state.loading = 5), zl.has(t) || (e = {
            rel: "preload",
            as: "style",
            href: e.href,
            crossOrigin: e.crossOrigin,
            integrity: e.integrity,
            media: e.media,
            hrefLang: e.hrefLang,
            referrerPolicy: e.referrerPolicy
          }, zl.set(t, e), n || py(
            u,
            t,
            e,
            c.state
          ))), l && a === null)
            throw Error(s(528, ""));
          return c;
        }
        if (l && a !== null)
          throw Error(s(529, ""));
        return null;
      case "script":
        return l = e.async, e = e.src, typeof e == "string" && l && typeof l != "function" && typeof l != "symbol" ? (l = Xa(e), e = na(
          u
        ).hoistableScripts, a = e.get(l), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, e.set(l, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(s(444, t));
    }
  }
  function Ga(t) {
    return 'href="' + gl(t) + '"';
  }
  function Cu(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Wd(t) {
    return _({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function py(t, l, e, a) {
    t.querySelector('link[rel="preload"][as="style"][' + l + "]") ? a.loading = 1 : (l = t.createElement("link"), a.preload = l, l.addEventListener("load", function() {
      return a.loading |= 1;
    }), l.addEventListener("error", function() {
      return a.loading |= 2;
    }), Jt(l, "link", e), Xt(l), t.head.appendChild(l));
  }
  function Xa(t) {
    return '[src="' + gl(t) + '"]';
  }
  function Gu(t) {
    return "script[async]" + t;
  }
  function Fd(t, l, e) {
    if (l.count++, l.instance === null)
      switch (l.type) {
        case "style":
          var a = t.querySelector(
            'style[data-href~="' + gl(e.href) + '"]'
          );
          if (a)
            return l.instance = a, Xt(a), a;
          var u = _({}, e, {
            "data-href": e.href,
            "data-precedence": e.precedence,
            href: null,
            precedence: null
          });
          return a = (t.ownerDocument || t).createElement(
            "style"
          ), Xt(a), Jt(a, "style", u), ai(a, e.precedence, t), l.instance = a;
        case "stylesheet":
          u = Ga(e.href);
          var n = t.querySelector(
            Cu(u)
          );
          if (n)
            return l.state.loading |= 4, l.instance = n, Xt(n), n;
          a = Wd(e), (u = zl.get(u)) && Gf(a, u), n = (t.ownerDocument || t).createElement("link"), Xt(n);
          var c = n;
          return c._p = new Promise(function(f, d) {
            c.onload = f, c.onerror = d;
          }), Jt(n, "link", a), l.state.loading |= 4, ai(n, e.precedence, t), l.instance = n;
        case "script":
          return n = Xa(e.src), (u = t.querySelector(
            Gu(n)
          )) ? (l.instance = u, Xt(u), u) : (a = e, (u = zl.get(n)) && (a = _({}, e), Xf(a, u)), t = t.ownerDocument || t, u = t.createElement("script"), Xt(u), Jt(u, "link", a), t.head.appendChild(u), l.instance = u);
        case "void":
          return null;
        default:
          throw Error(s(443, l.type));
      }
    else
      l.type === "stylesheet" && (l.state.loading & 4) === 0 && (a = l.instance, l.state.loading |= 4, ai(a, e.precedence, t));
    return l.instance;
  }
  function ai(t, l, e) {
    for (var a = e.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), u = a.length ? a[a.length - 1] : null, n = u, c = 0; c < a.length; c++) {
      var f = a[c];
      if (f.dataset.precedence === l) n = f;
      else if (n !== u) break;
    }
    n ? n.parentNode.insertBefore(t, n.nextSibling) : (l = e.nodeType === 9 ? e.head : e, l.insertBefore(t, l.firstChild));
  }
  function Gf(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy), t.title == null && (t.title = l.title);
  }
  function Xf(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy), t.integrity == null && (t.integrity = l.integrity);
  }
  var ui = null;
  function Id(t, l, e) {
    if (ui === null) {
      var a = /* @__PURE__ */ new Map(), u = ui = /* @__PURE__ */ new Map();
      u.set(e, a);
    } else
      u = ui, a = u.get(e), a || (a = /* @__PURE__ */ new Map(), u.set(e, a));
    if (a.has(t)) return a;
    for (a.set(t, null), e = e.getElementsByTagName(t), u = 0; u < e.length; u++) {
      var n = e[u];
      if (!(n[Ia] || n[$t] || t === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var c = n.getAttribute(l) || "";
        c = t + c;
        var f = a.get(c);
        f ? f.push(n) : a.set(c, [n]);
      }
    }
    return a;
  }
  function Pd(t, l, e) {
    t = t.ownerDocument || t, t.head.insertBefore(
      e,
      l === "title" ? t.querySelector("head > title") : null
    );
  }
  function Sy(t, l, e) {
    if (e === 1 || l.itemProp != null) return !1;
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
  function t0(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var Xu = null;
  function by() {
  }
  function Ay(t, l, e) {
    if (Xu === null) throw Error(s(475));
    var a = Xu;
    if (l.type === "stylesheet" && (typeof e.media != "string" || matchMedia(e.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var u = Ga(e.href), n = t.querySelector(
          Cu(u)
        );
        if (n) {
          t = n._p, t !== null && typeof t == "object" && typeof t.then == "function" && (a.count++, a = ni.bind(a), t.then(a, a)), l.state.loading |= 4, l.instance = n, Xt(n);
          return;
        }
        n = t.ownerDocument || t, e = Wd(e), (u = zl.get(u)) && Gf(e, u), n = n.createElement("link"), Xt(n);
        var c = n;
        c._p = new Promise(function(f, d) {
          c.onload = f, c.onerror = d;
        }), Jt(n, "link", e), l.instance = n;
      }
      a.stylesheets === null && (a.stylesheets = /* @__PURE__ */ new Map()), a.stylesheets.set(l, t), (t = l.state.preload) && (l.state.loading & 3) === 0 && (a.count++, l = ni.bind(a), t.addEventListener("load", l), t.addEventListener("error", l));
    }
  }
  function Ey() {
    if (Xu === null) throw Error(s(475));
    var t = Xu;
    return t.stylesheets && t.count === 0 && Qf(t, t.stylesheets), 0 < t.count ? function(l) {
      var e = setTimeout(function() {
        if (t.stylesheets && Qf(t, t.stylesheets), t.unsuspend) {
          var a = t.unsuspend;
          t.unsuspend = null, a();
        }
      }, 6e4);
      return t.unsuspend = l, function() {
        t.unsuspend = null, clearTimeout(e);
      };
    } : null;
  }
  function ni() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Qf(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var ii = null;
  function Qf(t, l) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, ii = /* @__PURE__ */ new Map(), l.forEach(Ty, t), ii = null, ni.call(t));
  }
  function Ty(t, l) {
    if (!(l.state.loading & 4)) {
      var e = ii.get(t);
      if (e) var a = e.get(null);
      else {
        e = /* @__PURE__ */ new Map(), ii.set(t, e);
        for (var u = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), n = 0; n < u.length; n++) {
          var c = u[n];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (e.set(c.dataset.precedence, c), a = c);
        }
        a && e.set(null, a);
      }
      u = l.instance, c = u.getAttribute("data-precedence"), n = e.get(c) || a, n === a && e.set(null, u), e.set(c, u), this.count++, a = ni.bind(this), u.addEventListener("load", a), u.addEventListener("error", a), n ? n.parentNode.insertBefore(u, n.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(u, t.firstChild)), l.state.loading |= 4;
    }
  }
  var Qu = {
    $$typeof: L,
    Provider: null,
    Consumer: null,
    _currentValue: w,
    _currentValue2: w,
    _threadCount: 0
  };
  function zy(t, l, e, a, u, n, c, f) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Yi(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Yi(0), this.hiddenUpdates = Yi(null), this.identifierPrefix = a, this.onUncaughtError = u, this.onCaughtError = n, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = f, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function l0(t, l, e, a, u, n, c, f, d, g, T, D) {
    return t = new zy(
      t,
      l,
      e,
      c,
      f,
      d,
      g,
      D
    ), l = 1, n === !0 && (l |= 24), n = rl(3, null, null, l), t.current = n, n.stateNode = t, l = Ac(), l.refCount++, t.pooledCache = l, l.refCount++, n.memoizedState = {
      element: a,
      isDehydrated: e,
      cache: l
    }, Oc(n), t;
  }
  function e0(t) {
    return t ? (t = ga, t) : ga;
  }
  function a0(t, l, e, a, u, n) {
    u = e0(u), a.context === null ? a.context = u : a.pendingContext = u, a = oe(l), a.payload = { element: e }, n = n === void 0 ? null : n, n !== null && (a.callback = n), e = de(t, a, l), e !== null && (yl(e, t, l), gu(e, t, l));
  }
  function u0(t, l) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var e = t.retryLane;
      t.retryLane = e !== 0 && e < l ? e : l;
    }
  }
  function Zf(t, l) {
    u0(t, l), (t = t.alternate) && u0(t, l);
  }
  function n0(t) {
    if (t.tag === 13) {
      var l = ma(t, 67108864);
      l !== null && yl(l, t, 67108864), Zf(t, 67108864);
    }
  }
  var ci = !0;
  function Oy(t, l, e, a) {
    var u = E.T;
    E.T = null;
    var n = N.p;
    try {
      N.p = 2, Lf(t, l, e, a);
    } finally {
      N.p = n, E.T = u;
    }
  }
  function _y(t, l, e, a) {
    var u = E.T;
    E.T = null;
    var n = N.p;
    try {
      N.p = 8, Lf(t, l, e, a);
    } finally {
      N.p = n, E.T = u;
    }
  }
  function Lf(t, l, e, a) {
    if (ci) {
      var u = Vf(a);
      if (u === null)
        xf(
          t,
          l,
          a,
          fi,
          e
        ), c0(t, a);
      else if (My(
        u,
        t,
        l,
        e,
        a
      ))
        a.stopPropagation();
      else if (c0(t, a), l & 4 && -1 < Dy.indexOf(t)) {
        for (; u !== null; ) {
          var n = ua(u);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var c = He(n.pendingLanes);
                  if (c !== 0) {
                    var f = n;
                    for (f.pendingLanes |= 2, f.entangledLanes |= 2; c; ) {
                      var d = 1 << 31 - cl(c);
                      f.entanglements[1] |= d, c &= ~d;
                    }
                    Yl(n), (mt & 6) === 0 && (Kn = Ul() + 500, ju(0));
                  }
                }
                break;
              case 13:
                f = ma(n, 2), f !== null && yl(f, n, 2), Jn(), Zf(n, 2);
            }
          if (n = Vf(a), n === null && xf(
            t,
            l,
            a,
            fi,
            e
          ), n === u) break;
          u = n;
        }
        u !== null && a.stopPropagation();
      } else
        xf(
          t,
          l,
          a,
          null,
          e
        );
    }
  }
  function Vf(t) {
    return t = ki(t), Kf(t);
  }
  var fi = null;
  function Kf(t) {
    if (fi = null, t = aa(t), t !== null) {
      var l = O(t);
      if (l === null) t = null;
      else {
        var e = l.tag;
        if (e === 13) {
          if (t = x(l), t !== null) return t;
          t = null;
        } else if (e === 3) {
          if (l.stateNode.current.memoizedState.isDehydrated)
            return l.tag === 3 ? l.stateNode.containerInfo : null;
          t = null;
        } else l !== t && (t = null);
      }
    }
    return fi = t, null;
  }
  function i0(t) {
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
        switch (dh()) {
          case Sr:
            return 2;
          case br:
            return 8;
          case Pu:
          case hh:
            return 32;
          case Ar:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var wf = !1, Oe = null, _e = null, De = null, Zu = /* @__PURE__ */ new Map(), Lu = /* @__PURE__ */ new Map(), Me = [], Dy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function c0(t, l) {
    switch (t) {
      case "focusin":
      case "focusout":
        Oe = null;
        break;
      case "dragenter":
      case "dragleave":
        _e = null;
        break;
      case "mouseover":
      case "mouseout":
        De = null;
        break;
      case "pointerover":
      case "pointerout":
        Zu.delete(l.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Lu.delete(l.pointerId);
    }
  }
  function Vu(t, l, e, a, u, n) {
    return t === null || t.nativeEvent !== n ? (t = {
      blockedOn: l,
      domEventName: e,
      eventSystemFlags: a,
      nativeEvent: n,
      targetContainers: [u]
    }, l !== null && (l = ua(l), l !== null && n0(l)), t) : (t.eventSystemFlags |= a, l = t.targetContainers, u !== null && l.indexOf(u) === -1 && l.push(u), t);
  }
  function My(t, l, e, a, u) {
    switch (l) {
      case "focusin":
        return Oe = Vu(
          Oe,
          t,
          l,
          e,
          a,
          u
        ), !0;
      case "dragenter":
        return _e = Vu(
          _e,
          t,
          l,
          e,
          a,
          u
        ), !0;
      case "mouseover":
        return De = Vu(
          De,
          t,
          l,
          e,
          a,
          u
        ), !0;
      case "pointerover":
        var n = u.pointerId;
        return Zu.set(
          n,
          Vu(
            Zu.get(n) || null,
            t,
            l,
            e,
            a,
            u
          )
        ), !0;
      case "gotpointercapture":
        return n = u.pointerId, Lu.set(
          n,
          Vu(
            Lu.get(n) || null,
            t,
            l,
            e,
            a,
            u
          )
        ), !0;
    }
    return !1;
  }
  function f0(t) {
    var l = aa(t.target);
    if (l !== null) {
      var e = O(l);
      if (e !== null) {
        if (l = e.tag, l === 13) {
          if (l = x(e), l !== null) {
            t.blockedOn = l, Ah(t.priority, function() {
              if (e.tag === 13) {
                var a = hl();
                a = Bi(a);
                var u = ma(e, a);
                u !== null && yl(u, e, a), Zf(e, a);
              }
            });
            return;
          }
        } else if (l === 3 && e.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function ri(t) {
    if (t.blockedOn !== null) return !1;
    for (var l = t.targetContainers; 0 < l.length; ) {
      var e = Vf(t.nativeEvent);
      if (e === null) {
        e = t.nativeEvent;
        var a = new e.constructor(
          e.type,
          e
        );
        Ji = a, e.target.dispatchEvent(a), Ji = null;
      } else
        return l = ua(e), l !== null && n0(l), t.blockedOn = e, !1;
      l.shift();
    }
    return !0;
  }
  function r0(t, l, e) {
    ri(t) && e.delete(l);
  }
  function Ry() {
    wf = !1, Oe !== null && ri(Oe) && (Oe = null), _e !== null && ri(_e) && (_e = null), De !== null && ri(De) && (De = null), Zu.forEach(r0), Lu.forEach(r0);
  }
  function si(t, l) {
    t.blockedOn === l && (t.blockedOn = null, wf || (wf = !0, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      Ry
    )));
  }
  var oi = null;
  function s0(t) {
    oi !== t && (oi = t, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      function() {
        oi === t && (oi = null);
        for (var l = 0; l < t.length; l += 3) {
          var e = t[l], a = t[l + 1], u = t[l + 2];
          if (typeof a != "function") {
            if (Kf(a || e) === null)
              continue;
            break;
          }
          var n = ua(e);
          n !== null && (t.splice(l, 3), l -= 3, Vc(
            n,
            {
              pending: !0,
              data: u,
              method: e.method,
              action: a
            },
            a,
            u
          ));
        }
      }
    ));
  }
  function Ku(t) {
    function l(d) {
      return si(d, t);
    }
    Oe !== null && si(Oe, t), _e !== null && si(_e, t), De !== null && si(De, t), Zu.forEach(l), Lu.forEach(l);
    for (var e = 0; e < Me.length; e++) {
      var a = Me[e];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < Me.length && (e = Me[0], e.blockedOn === null); )
      f0(e), e.blockedOn === null && Me.shift();
    if (e = (t.ownerDocument || t).$$reactFormReplay, e != null)
      for (a = 0; a < e.length; a += 3) {
        var u = e[a], n = e[a + 1], c = u[tl] || null;
        if (typeof n == "function")
          c || s0(e);
        else if (c) {
          var f = null;
          if (n && n.hasAttribute("formAction")) {
            if (u = n, c = n[tl] || null)
              f = c.formAction;
            else if (Kf(u) !== null) continue;
          } else f = c.action;
          typeof f == "function" ? e[a + 1] = f : (e.splice(a, 3), a -= 3), s0(e);
        }
      }
  }
  function Jf(t) {
    this._internalRoot = t;
  }
  di.prototype.render = Jf.prototype.render = function(t) {
    var l = this._internalRoot;
    if (l === null) throw Error(s(409));
    var e = l.current, a = hl();
    a0(e, a, t, l, null, null);
  }, di.prototype.unmount = Jf.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var l = t.containerInfo;
      a0(t.current, 2, null, t, null, null), Jn(), l[ea] = null;
    }
  };
  function di(t) {
    this._internalRoot = t;
  }
  di.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var l = _r();
      t = { blockedOn: null, target: t, priority: l };
      for (var e = 0; e < Me.length && l !== 0 && l < Me[e].priority; e++) ;
      Me.splice(e, 0, t), e === 0 && f0(t);
    }
  };
  var o0 = r.version;
  if (o0 !== "19.1.0")
    throw Error(
      s(
        527,
        o0,
        "19.1.0"
      )
    );
  N.findDOMNode = function(t) {
    var l = t._reactInternals;
    if (l === void 0)
      throw typeof t.render == "function" ? Error(s(188)) : (t = Object.keys(t).join(","), Error(s(268, t)));
    return t = R(l), t = t !== null ? A(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var xy = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: E,
    reconcilerVersion: "19.1.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var hi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!hi.isDisabled && hi.supportsFiber)
      try {
        $a = hi.inject(
          xy
        ), il = hi;
      } catch {
      }
  }
  return ku.createRoot = function(t, l) {
    if (!b(t)) throw Error(s(299));
    var e = !1, a = "", u = Do, n = Mo, c = Ro, f = null;
    return l != null && (l.unstable_strictMode === !0 && (e = !0), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (u = l.onUncaughtError), l.onCaughtError !== void 0 && (n = l.onCaughtError), l.onRecoverableError !== void 0 && (c = l.onRecoverableError), l.unstable_transitionCallbacks !== void 0 && (f = l.unstable_transitionCallbacks)), l = l0(
      t,
      1,
      !1,
      null,
      null,
      e,
      a,
      u,
      n,
      c,
      f,
      null
    ), t[ea] = l.current, Rf(t), new Jf(l);
  }, ku.hydrateRoot = function(t, l, e) {
    if (!b(t)) throw Error(s(299));
    var a = !1, u = "", n = Do, c = Mo, f = Ro, d = null, g = null;
    return e != null && (e.unstable_strictMode === !0 && (a = !0), e.identifierPrefix !== void 0 && (u = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (c = e.onCaughtError), e.onRecoverableError !== void 0 && (f = e.onRecoverableError), e.unstable_transitionCallbacks !== void 0 && (d = e.unstable_transitionCallbacks), e.formState !== void 0 && (g = e.formState)), l = l0(
      t,
      1,
      !0,
      l,
      e ?? null,
      a,
      u,
      n,
      c,
      f,
      d,
      g
    ), l.context = e0(null), e = l.current, a = hl(), a = Bi(a), u = oe(a), u.callback = null, de(e, u, a), e = a, l.current.lanes = e, Fa(l, e), Yl(l), t[ea] = l.current, Rf(t), new di(l);
  }, ku.version = "19.1.0", ku;
}
var C0;
function fm() {
  if (C0) return tr.exports;
  C0 = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (r) {
        console.error(r);
      }
  }
  return i(), tr.exports = cm(), tr.exports;
}
var rm = fm(), ur = {}, sm = Object.defineProperty, om = (i, r, o) => r in i ? sm(i, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : i[r] = o, mi = (i, r, o) => om(i, typeof r != "symbol" ? r + "" : r, o);
const dm = {
  stringify: (i) => i ? "true" : "false",
  parse: (i) => /^[ty1-9]/i.test(i)
}, hm = {
  stringify: (i) => i.name,
  parse: (i, r, o) => {
    const s = (() => {
      if (typeof window < "u" && i in window)
        return window[i];
      if (typeof ur < "u" && i in ur)
        return ur[i];
    })();
    return typeof s == "function" ? s.bind(o) : void 0;
  }
}, ym = {
  stringify: (i) => JSON.stringify(i),
  parse: (i) => JSON.parse(i)
}, vm = {
  stringify: (i) => `${i}`,
  parse: (i) => parseFloat(i)
}, mm = {
  stringify: (i) => i,
  parse: (i) => i
}, nr = {
  string: mm,
  number: vm,
  boolean: dm,
  function: hm,
  json: ym
};
function gm(i) {
  return i.replace(
    /([a-z0-9])([A-Z])/g,
    (r, o, s) => `${o}-${s.toLowerCase()}`
  );
}
const gi = Symbol.for("r2wc.render"), pi = Symbol.for("r2wc.connected"), Fe = Symbol.for("r2wc.context"), ae = Symbol.for("r2wc.props");
function pm(i, r, o) {
  var s, b, O;
  r.props || (r.props = i.propTypes ? Object.keys(i.propTypes) : []), r.events || (r.events = []);
  const x = Array.isArray(r.props) ? r.props.slice() : Object.keys(r.props), G = Array.isArray(r.events) ? r.events.slice() : Object.keys(r.events), R = {}, A = {}, _ = {}, C = {};
  for (const q of x) {
    R[q] = Array.isArray(r.props) ? "string" : r.props[q];
    const Q = gm(q);
    _[q] = Q, C[Q] = q;
  }
  for (const q of G)
    A[q] = Array.isArray(r.events) ? {} : r.events[q];
  class X extends HTMLElement {
    constructor() {
      super(), mi(this, O, !0), mi(this, b), mi(this, s, {}), mi(this, "container"), r.shadow ? this.container = this.attachShadow({
        mode: r.shadow
      }) : this.container = this, this[ae].container = this.container;
      for (const Q of x) {
        const I = _[Q], P = this.getAttribute(I), tt = R[Q], Y = tt ? nr[tt] : null;
        Y != null && Y.parse && P && (this[ae][Q] = Y.parse(P, I, this));
      }
      for (const Q of G)
        this[ae][Q] = (I) => {
          const P = Q.replace(/^on/, "").toLowerCase();
          this.dispatchEvent(
            new CustomEvent(P, { detail: I, ...A[Q] })
          );
        };
    }
    static get observedAttributes() {
      return Object.keys(C);
    }
    connectedCallback() {
      this[pi] = !0, this[gi]();
    }
    disconnectedCallback() {
      this[pi] = !1, this[Fe] && o.unmount(this[Fe]), delete this[Fe];
    }
    attributeChangedCallback(Q, I, P) {
      const tt = C[Q], Y = R[tt], L = Y ? nr[Y] : null;
      tt in R && L != null && L.parse && P && (this[ae][tt] = L.parse(P, Q, this), this[gi]());
    }
    [(O = pi, b = Fe, s = ae, gi)]() {
      this[pi] && (this[Fe] ? o.update(this[Fe], this[ae]) : this[Fe] = o.mount(
        this.container,
        i,
        this[ae]
      ));
    }
  }
  for (const q of x) {
    const Q = _[q], I = R[q];
    Object.defineProperty(X.prototype, q, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[ae][q];
      },
      set(P) {
        this[ae][q] = P;
        const tt = I ? nr[I] : null;
        if (tt != null && tt.stringify) {
          const Y = tt.stringify(P, Q, this);
          this.getAttribute(Q) !== Y && this.setAttribute(Q, Y);
        } else
          this[gi]();
      }
    });
  }
  return X;
}
function Sm(i, r, o) {
  const s = rm.createRoot(i), b = la.createElement(r, o);
  return s.render(b), {
    root: s,
    ReactComponent: r
  };
}
function bm({ root: i, ReactComponent: r }, o) {
  const s = la.createElement(r, o);
  i.render(s);
}
function Am({ root: i }) {
  i.unmount();
}
function Em(i, r = {}) {
  return pm(i, r, { mount: Sm, update: bm, unmount: Am });
}
const Tm = [
  {
    element: "backoffice-header",
    component: Lv,
    props: {
      label: "string",
      onPepe: "function"
    },
    events: {
      onLoad: { bubbles: !0 }
    }
  },
  {
    element: "shipment-details",
    component: em,
    props: {
      // Shipment data props
      shipmentId: "string",
      shipmentData: "string",
      // JSON string for web component
      apiUrl: "string",
      // Display options
      showTimeline: "boolean",
      showTrackingSection: "boolean",
      compactMode: "boolean",
      // Event handlers
      onTrackingClick: "function",
      onError: "function",
      onLoad: "function"
    },
    events: {
      onLoad: { bubbles: !0 },
      onError: { bubbles: !0 },
      onTrackingClick: { bubbles: !0 }
    }
  }
];
function G0() {
  try {
    for (const i of Tm)
      customElements.get(i.element) || (console.log(i), customElements.define(
        i.element,
        Em(i.component, {
          props: i.props || {},
          events: i.events || {},
          shadow: i.shadow || void 0
        })
      ), console.log(`${i.element} component registered`));
  } catch (i) {
    console.error("Error registering web components:", i);
  }
}
typeof document < "u" && document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", G0) : G0();
