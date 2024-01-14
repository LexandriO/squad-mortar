/*! For license information please see app.js.LICENSE.txt */
(() => {
  var e = {
      679: (e, t, n) => {
        "use strict";
        var r = n(864),
          a = {
            childContextTypes: !0,
            contextType: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromError: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0,
          },
          o = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0,
          },
          i = {
            $$typeof: !0,
            compare: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
            type: !0,
          },
          l = {};
        function u(e) {
          return r.isMemo(e) ? i : l[e.$$typeof] || a;
        }
        (l[r.ForwardRef] = {
          $$typeof: !0,
          render: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
        }),
          (l[r.Memo] = i);
        var s = Object.defineProperty,
          c = Object.getOwnPropertyNames,
          f = Object.getOwnPropertySymbols,
          p = Object.getOwnPropertyDescriptor,
          d = Object.getPrototypeOf,
          m = Object.prototype;
        e.exports = function e(t, n, r) {
          if ("string" != typeof n) {
            if (m) {
              var a = d(n);
              a && a !== m && e(t, a, r);
            }
            var i = c(n);
            f && (i = i.concat(f(n)));
            for (var l = u(t), h = u(n), g = 0; g < i.length; ++g) {
              var y = i[g];
              if (!(o[y] || (r && r[y]) || (h && h[y]) || (l && l[y]))) {
                var v = p(n, y);
                try {
                  s(t, y, v);
                } catch (e) {}
              }
            }
          }
          return t;
        };
      },
      418: (e) => {
        "use strict";
        var t = Object.getOwnPropertySymbols,
          n = Object.prototype.hasOwnProperty,
          r = Object.prototype.propertyIsEnumerable;
        e.exports = (function () {
          try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
              return !1;
            for (var t = {}, n = 0; n < 10; n++)
              t["_" + String.fromCharCode(n)] = n;
            if (
              "0123456789" !==
              Object.getOwnPropertyNames(t)
                .map(function (e) {
                  return t[e];
                })
                .join("")
            )
              return !1;
            var r = {};
            return (
              "abcdefghijklmnopqrst".split("").forEach(function (e) {
                r[e] = e;
              }),
              "abcdefghijklmnopqrst" ===
                Object.keys(Object.assign({}, r)).join("")
            );
          } catch (e) {
            return !1;
          }
        })()
          ? Object.assign
          : function (e, a) {
              for (
                var o,
                  i,
                  l = (function (e) {
                    if (null == e)
                      throw new TypeError(
                        "Object.assign cannot be called with null or undefined"
                      );
                    return Object(e);
                  })(e),
                  u = 1;
                u < arguments.length;
                u++
              ) {
                for (var s in (o = Object(arguments[u])))
                  n.call(o, s) && (l[s] = o[s]);
                if (t) {
                  i = t(o);
                  for (var c = 0; c < i.length; c++)
                    r.call(o, i[c]) && (l[i[c]] = o[i[c]]);
                }
              }
              return l;
            };
      },
      703: (e, t, n) => {
        "use strict";
        var r = n(414);
        function a() {}
        function o() {}
        (o.resetWarningCache = a),
          (e.exports = function () {
            function e(e, t, n, a, o, i) {
              if (i !== r) {
                var l = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                );
                throw ((l.name = "Invariant Violation"), l);
              }
            }
            function t() {
              return e;
            }
            e.isRequired = e;
            var n = {
              array: e,
              bool: e,
              func: e,
              number: e,
              object: e,
              string: e,
              symbol: e,
              any: e,
              arrayOf: t,
              element: e,
              elementType: e,
              instanceOf: t,
              node: e,
              objectOf: t,
              oneOf: t,
              oneOfType: t,
              shape: t,
              exact: t,
              checkPropTypes: o,
              resetWarningCache: a,
            };
            return (n.PropTypes = n), n;
          });
      },
      697: (e, t, n) => {
        e.exports = n(703)();
      },
      414: (e) => {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      },
      448: (e, t, n) => {
        "use strict";
        var r = n(294),
          a = n(418),
          o = n(840);
        function i(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        if (!r) throw Error(i(227));
        function l(e, t, n, r, a, o, i, l, u) {
          var s = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, s);
          } catch (e) {
            this.onError(e);
          }
        }
        var u = !1,
          s = null,
          c = !1,
          f = null,
          p = {
            onError: function (e) {
              (u = !0), (s = e);
            },
          };
        function d(e, t, n, r, a, o, i, c, f) {
          (u = !1), (s = null), l.apply(p, arguments);
        }
        var m = null,
          h = null,
          g = null;
        function y(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = g(n)),
            (function (e, t, n, r, a, o, l, p, m) {
              if ((d.apply(this, arguments), u)) {
                if (!u) throw Error(i(198));
                var h = s;
                (u = !1), (s = null), c || ((c = !0), (f = h));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        var v = null,
          b = {};
        function _() {
          if (v)
            for (var e in b) {
              var t = b[e],
                n = v.indexOf(e);
              if (!(-1 < n)) throw Error(i(96, e));
              if (!x[n]) {
                if (!t.extractEvents) throw Error(i(97, e));
                for (var r in ((x[n] = t), (n = t.eventTypes))) {
                  var a = void 0,
                    o = n[r],
                    l = t,
                    u = r;
                  if (S.hasOwnProperty(u)) throw Error(i(99, u));
                  S[u] = o;
                  var s = o.phasedRegistrationNames;
                  if (s) {
                    for (a in s) s.hasOwnProperty(a) && w(s[a], l, u);
                    a = !0;
                  } else
                    o.registrationName
                      ? (w(o.registrationName, l, u), (a = !0))
                      : (a = !1);
                  if (!a) throw Error(i(98, r, e));
                }
              }
            }
        }
        function w(e, t, n) {
          if (T[e]) throw Error(i(100, e));
          (T[e] = t), (k[e] = t.eventTypes[n].dependencies);
        }
        var x = [],
          S = {},
          T = {},
          k = {};
        function E(e) {
          var t,
            n = !1;
          for (t in e)
            if (e.hasOwnProperty(t)) {
              var r = e[t];
              if (!b.hasOwnProperty(t) || b[t] !== r) {
                if (b[t]) throw Error(i(102, t));
                (b[t] = r), (n = !0);
              }
            }
          n && _();
        }
        var C = !(
            "undefined" == typeof window ||
            void 0 === window.document ||
            void 0 === window.document.createElement
          ),
          P = null,
          N = null,
          I = null;
        function O(e) {
          if ((e = h(e))) {
            if ("function" != typeof P) throw Error(i(280));
            var t = e.stateNode;
            t && ((t = m(t)), P(e.stateNode, e.type, t));
          }
        }
        function M(e) {
          N ? (I ? I.push(e) : (I = [e])) : (N = e);
        }
        function z() {
          if (N) {
            var e = N,
              t = I;
            if (((I = N = null), O(e), t))
              for (e = 0; e < t.length; e++) O(t[e]);
          }
        }
        function A(e, t) {
          return e(t);
        }
        function R(e, t, n, r, a) {
          return e(t, n, r, a);
        }
        function j() {}
        var F = A,
          D = !1,
          L = !1;
        function W() {
          (null === N && null === I) || (j(), z());
        }
        function U(e, t, n) {
          if (L) return e(t, n);
          L = !0;
          try {
            return F(e, t, n);
          } finally {
            (L = !1), W();
          }
        }
        var $ =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          B = Object.prototype.hasOwnProperty,
          V = {},
          H = {};
        function Q(e, t, n, r, a, o) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = o);
        }
        var G = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            G[e] = new Q(e, 0, !1, e, null, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            G[t] = new Q(t, 1, !1, e[1], null, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              G[e] = new Q(e, 2, !1, e.toLowerCase(), null, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            G[e] = new Q(e, 2, !1, e, null, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              G[e] = new Q(e, 3, !1, e.toLowerCase(), null, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            G[e] = new Q(e, 3, !0, e, null, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            G[e] = new Q(e, 4, !1, e, null, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            G[e] = new Q(e, 6, !1, e, null, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            G[e] = new Q(e, 5, !1, e.toLowerCase(), null, !1);
          });
        var K = /[\-:]([a-z])/g;
        function q(e) {
          return e[1].toUpperCase();
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(K, q);
            G[t] = new Q(t, 1, !1, e, null, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(K, q);
              G[t] = new Q(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(K, q);
            G[t] = new Q(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            G[e] = new Q(e, 1, !1, e.toLowerCase(), null, !1);
          }),
          (G.xlinkHref = new Q(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            G[e] = new Q(e, 1, !1, e.toLowerCase(), null, !0);
          });
        var Y = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function X(e, t, n, r) {
          var a = G.hasOwnProperty(t) ? G[t] : null;
          (null !== a
            ? 0 === a.type
            : !r &&
              2 < t.length &&
              ("o" === t[0] || "O" === t[0]) &&
              ("n" === t[1] || "N" === t[1])) ||
            ((function (e, t, n, r) {
              if (
                null == t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!B.call(H, e) ||
                    (!B.call(V, e) &&
                      ($.test(e) ? (H[e] = !0) : ((V[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (a = a.type) || (4 === a && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        Y.hasOwnProperty("ReactCurrentDispatcher") ||
          (Y.ReactCurrentDispatcher = {
            current: null,
          }),
          Y.hasOwnProperty("ReactCurrentBatchConfig") ||
            (Y.ReactCurrentBatchConfig = {
              suspense: null,
            });
        var J = /^(.*)[\\\/]/,
          Z = "function" == typeof Symbol && Symbol.for,
          ee = Z ? Symbol.for("react.element") : 60103,
          te = Z ? Symbol.for("react.portal") : 60106,
          ne = Z ? Symbol.for("react.fragment") : 60107,
          re = Z ? Symbol.for("react.strict_mode") : 60108,
          ae = Z ? Symbol.for("react.profiler") : 60114,
          oe = Z ? Symbol.for("react.provider") : 60109,
          ie = Z ? Symbol.for("react.context") : 60110,
          le = Z ? Symbol.for("react.concurrent_mode") : 60111,
          ue = Z ? Symbol.for("react.forward_ref") : 60112,
          se = Z ? Symbol.for("react.suspense") : 60113,
          ce = Z ? Symbol.for("react.suspense_list") : 60120,
          fe = Z ? Symbol.for("react.memo") : 60115,
          pe = Z ? Symbol.for("react.lazy") : 60116,
          de = Z ? Symbol.for("react.block") : 60121,
          me = "function" == typeof Symbol && Symbol.iterator;
        function he(e) {
          return null === e || "object" != typeof e
            ? null
            : "function" == typeof (e = (me && e[me]) || e["@@iterator"])
            ? e
            : null;
        }
        function ge(e) {
          if (null == e) return null;
          if ("function" == typeof e) return e.displayName || e.name || null;
          if ("string" == typeof e) return e;
          switch (e) {
            case ne:
              return "Fragment";
            case te:
              return "Portal";
            case ae:
              return "Profiler";
            case re:
              return "StrictMode";
            case se:
              return "Suspense";
            case ce:
              return "SuspenseList";
          }
          if ("object" == typeof e)
            switch (e.$$typeof) {
              case ie:
                return "Context.Consumer";
              case oe:
                return "Context.Provider";
              case ue:
                var t = e.render;
                return (
                  (t = t.displayName || t.name || ""),
                  e.displayName ||
                    ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef")
                );
              case fe:
                return ge(e.type);
              case de:
                return ge(e.render);
              case pe:
                if ((e = 1 === e._status ? e._result : null)) return ge(e);
            }
          return null;
        }
        function ye(e) {
          var t = "";
          do {
            e: switch (e.tag) {
              case 3:
              case 4:
              case 6:
              case 7:
              case 10:
              case 9:
                var n = "";
                break e;
              default:
                var r = e._debugOwner,
                  a = e._debugSource,
                  o = ge(e.type);
                (n = null),
                  r && (n = ge(r.type)),
                  (r = o),
                  (o = ""),
                  a
                    ? (o =
                        " (at " +
                        a.fileName.replace(J, "") +
                        ":" +
                        a.lineNumber +
                        ")")
                    : n && (o = " (created by " + n + ")"),
                  (n = "\n    in " + (r || "Unknown") + o);
            }
            (t += n), (e = e.return);
          } while (e);
          return t;
        }
        function ve(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "object":
            case "string":
            case "undefined":
              return e;
            default:
              return "";
          }
        }
        function be(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function _e(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = be(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                void 0 !== n &&
                "function" == typeof n.get &&
                "function" == typeof n.set
              ) {
                var a = n.get,
                  o = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), o.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, {
                    enumerable: n.enumerable,
                  }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function we(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = be(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function xe(e, t) {
          var n = t.checked;
          return a({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function Se(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = ve(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function Te(e, t) {
          null != (t = t.checked) && X(e, "checked", t, !1);
        }
        function ke(e, t) {
          Te(e, t);
          var n = ve(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? Ce(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              Ce(e, t.type, ve(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function Ee(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function Ce(e, t, n) {
          ("number" === t && e.ownerDocument.activeElement === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        function Pe(e, t) {
          return (
            (e = a(
              {
                children: void 0,
              },
              t
            )),
            (t = (function (e) {
              var t = "";
              return (
                r.Children.forEach(e, function (e) {
                  null != e && (t += e);
                }),
                t
              );
            })(t.children)) && (e.children = t),
            e
          );
        }
        function Ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + ve(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function Ie(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(i(91));
          return a({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function Oe(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(i(92));
              if (Array.isArray(n)) {
                if (!(1 >= n.length)) throw Error(i(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = {
            initialValue: ve(n),
          };
        }
        function Me(e, t) {
          var n = ve(t.value),
            r = ve(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function ze(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function Ae(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function Re(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? Ae(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var je,
          Fe,
          De =
            ((Fe = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (je = je || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = je.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return Fe(e, t);
                  });
                }
              : Fe);
        function Le(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        function We(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var Ue = {
            animationend: We("Animation", "AnimationEnd"),
            animationiteration: We("Animation", "AnimationIteration"),
            animationstart: We("Animation", "AnimationStart"),
            transitionend: We("Transition", "TransitionEnd"),
          },
          $e = {},
          Be = {};
        function Ve(e) {
          if ($e[e]) return $e[e];
          if (!Ue[e]) return e;
          var t,
            n = Ue[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Be) return ($e[e] = n[t]);
          return e;
        }
        C &&
          ((Be = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete Ue.animationend.animation,
            delete Ue.animationiteration.animation,
            delete Ue.animationstart.animation),
          "TransitionEvent" in window || delete Ue.transitionend.transition);
        var He = Ve("animationend"),
          Qe = Ve("animationiteration"),
          Ge = Ve("animationstart"),
          Ke = Ve("transitionend"),
          qe =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Ye = new ("function" == typeof WeakMap ? WeakMap : Map)();
        function Xe(e) {
          var t = Ye.get(e);
          return void 0 === t && ((t = new Map()), Ye.set(e, t)), t;
        }
        function Je(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 != (1026 & (t = e).effectTag) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function Ze(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function et(e) {
          if (Je(e) !== e) throw Error(i(188));
        }
        function tt(e, t) {
          if (null == t) throw Error(i(30));
          return null == e
            ? t
            : Array.isArray(e)
            ? Array.isArray(t)
              ? (e.push.apply(e, t), e)
              : (e.push(t), e)
            : Array.isArray(t)
            ? [e].concat(t)
            : [e, t];
        }
        function nt(e, t, n) {
          Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e);
        }
        var rt = null;
        function at(e) {
          if (e) {
            var t = e._dispatchListeners,
              n = e._dispatchInstances;
            if (Array.isArray(t))
              for (var r = 0; r < t.length && !e.isPropagationStopped(); r++)
                y(e, t[r], n[r]);
            else t && y(e, t, n);
            (e._dispatchListeners = null),
              (e._dispatchInstances = null),
              e.isPersistent() || e.constructor.release(e);
          }
        }
        function ot(e) {
          if ((null !== e && (rt = tt(rt, e)), (e = rt), (rt = null), e)) {
            if ((nt(e, at), rt)) throw Error(i(95));
            if (c) throw ((e = f), (c = !1), (f = null), e);
          }
        }
        function it(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        function lt(e) {
          if (!C) return !1;
          var t = (e = "on" + e) in document;
          return (
            t ||
              ((t = document.createElement("div")).setAttribute(e, "return;"),
              (t = "function" == typeof t[e])),
            t
          );
        }
        var ut = [];
        function st(e) {
          (e.topLevelType = null),
            (e.nativeEvent = null),
            (e.targetInst = null),
            (e.ancestors.length = 0),
            10 > ut.length && ut.push(e);
        }
        function ct(e, t, n, r) {
          if (ut.length) {
            var a = ut.pop();
            return (
              (a.topLevelType = e),
              (a.eventSystemFlags = r),
              (a.nativeEvent = t),
              (a.targetInst = n),
              a
            );
          }
          return {
            topLevelType: e,
            eventSystemFlags: r,
            nativeEvent: t,
            targetInst: n,
            ancestors: [],
          };
        }
        function ft(e) {
          var t = e.targetInst,
            n = t;
          do {
            if (!n) {
              e.ancestors.push(n);
              break;
            }
            var r = n;
            if (3 === r.tag) r = r.stateNode.containerInfo;
            else {
              for (; r.return; ) r = r.return;
              r = 3 !== r.tag ? null : r.stateNode.containerInfo;
            }
            if (!r) break;
            (5 !== (t = n.tag) && 6 !== t) || e.ancestors.push(n), (n = In(r));
          } while (n);
          for (n = 0; n < e.ancestors.length; n++) {
            t = e.ancestors[n];
            var a = it(e.nativeEvent);
            r = e.topLevelType;
            var o = e.nativeEvent,
              i = e.eventSystemFlags;
            0 === n && (i |= 64);
            for (var l = null, u = 0; u < x.length; u++) {
              var s = x[u];
              s && (s = s.extractEvents(r, t, o, a, i)) && (l = tt(l, s));
            }
            ot(l);
          }
        }
        function pt(e, t, n) {
          if (!n.has(e)) {
            switch (e) {
              case "scroll":
                Qt(t, "scroll", !0);
                break;
              case "focus":
              case "blur":
                Qt(t, "focus", !0),
                  Qt(t, "blur", !0),
                  n.set("blur", null),
                  n.set("focus", null);
                break;
              case "cancel":
              case "close":
                lt(e) && Qt(t, e, !0);
                break;
              case "invalid":
              case "submit":
              case "reset":
                break;
              default:
                -1 === qe.indexOf(e) && Ht(e, t);
            }
            n.set(e, null);
          }
        }
        var dt,
          mt,
          ht,
          gt = !1,
          yt = [],
          vt = null,
          bt = null,
          _t = null,
          wt = new Map(),
          xt = new Map(),
          St = [],
          Tt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(
              " "
            ),
          kt =
            "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(
              " "
            );
        function Et(e, t, n, r, a) {
          return {
            blockedOn: e,
            topLevelType: t,
            eventSystemFlags: 32 | n,
            nativeEvent: a,
            container: r,
          };
        }
        function Ct(e, t) {
          switch (e) {
            case "focus":
            case "blur":
              vt = null;
              break;
            case "dragenter":
            case "dragleave":
              bt = null;
              break;
            case "mouseover":
            case "mouseout":
              _t = null;
              break;
            case "pointerover":
            case "pointerout":
              wt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              xt.delete(t.pointerId);
          }
        }
        function Pt(e, t, n, r, a, o) {
          return null === e || e.nativeEvent !== o
            ? ((e = Et(t, n, r, a, o)),
              null !== t && null !== (t = On(t)) && mt(t),
              e)
            : ((e.eventSystemFlags |= r), e);
        }
        function Nt(e) {
          var t = In(e.target);
          if (null !== t) {
            var n = Je(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Ze(n)))
                  return (
                    (e.blockedOn = t),
                    void o.unstable_runWithPriority(e.priority, function () {
                      ht(n);
                    })
                  );
              } else if (3 === t && n.stateNode.hydrate)
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function It(e) {
          if (null !== e.blockedOn) return !1;
          var t = Yt(
            e.topLevelType,
            e.eventSystemFlags,
            e.container,
            e.nativeEvent
          );
          if (null !== t) {
            var n = On(t);
            return null !== n && mt(n), (e.blockedOn = t), !1;
          }
          return !0;
        }
        function Ot(e, t, n) {
          It(e) && n.delete(t);
        }
        function Mt() {
          for (gt = !1; 0 < yt.length; ) {
            var e = yt[0];
            if (null !== e.blockedOn) {
              null !== (e = On(e.blockedOn)) && dt(e);
              break;
            }
            var t = Yt(
              e.topLevelType,
              e.eventSystemFlags,
              e.container,
              e.nativeEvent
            );
            null !== t ? (e.blockedOn = t) : yt.shift();
          }
          null !== vt && It(vt) && (vt = null),
            null !== bt && It(bt) && (bt = null),
            null !== _t && It(_t) && (_t = null),
            wt.forEach(Ot),
            xt.forEach(Ot);
        }
        function zt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            gt ||
              ((gt = !0),
              o.unstable_scheduleCallback(o.unstable_NormalPriority, Mt)));
        }
        function At(e) {
          function t(t) {
            return zt(t, e);
          }
          if (0 < yt.length) {
            zt(yt[0], e);
            for (var n = 1; n < yt.length; n++) {
              var r = yt[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== vt && zt(vt, e),
              null !== bt && zt(bt, e),
              null !== _t && zt(_t, e),
              wt.forEach(t),
              xt.forEach(t),
              n = 0;
            n < St.length;
            n++
          )
            (r = St[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < St.length && null === (n = St[0]).blockedOn; )
            Nt(n), null === n.blockedOn && St.shift();
        }
        var Rt = {},
          jt = new Map(),
          Ft = new Map(),
          Dt = [
            "abort",
            "abort",
            He,
            "animationEnd",
            Qe,
            "animationIteration",
            Ge,
            "animationStart",
            "canplay",
            "canPlay",
            "canplaythrough",
            "canPlayThrough",
            "durationchange",
            "durationChange",
            "emptied",
            "emptied",
            "encrypted",
            "encrypted",
            "ended",
            "ended",
            "error",
            "error",
            "gotpointercapture",
            "gotPointerCapture",
            "load",
            "load",
            "loadeddata",
            "loadedData",
            "loadedmetadata",
            "loadedMetadata",
            "loadstart",
            "loadStart",
            "lostpointercapture",
            "lostPointerCapture",
            "playing",
            "playing",
            "progress",
            "progress",
            "seeking",
            "seeking",
            "stalled",
            "stalled",
            "suspend",
            "suspend",
            "timeupdate",
            "timeUpdate",
            Ke,
            "transitionEnd",
            "waiting",
            "waiting",
          ];
        function Lt(e, t) {
          for (var n = 0; n < e.length; n += 2) {
            var r = e[n],
              a = e[n + 1],
              o = "on" + (a[0].toUpperCase() + a.slice(1));
            (o = {
              phasedRegistrationNames: {
                bubbled: o,
                captured: o + "Capture",
              },
              dependencies: [r],
              eventPriority: t,
            }),
              Ft.set(r, t),
              jt.set(r, o),
              (Rt[a] = o);
          }
        }
        Lt(
          "blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(
            " "
          ),
          0
        ),
          Lt(
            "drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(
              " "
            ),
            1
          ),
          Lt(Dt, 2);
        for (
          var Wt =
              "change selectionchange textInput compositionstart compositionend compositionupdate".split(
                " "
              ),
            Ut = 0;
          Ut < Wt.length;
          Ut++
        )
          Ft.set(Wt[Ut], 0);
        var $t = o.unstable_UserBlockingPriority,
          Bt = o.unstable_runWithPriority,
          Vt = !0;
        function Ht(e, t) {
          Qt(t, e, !1);
        }
        function Qt(e, t, n) {
          var r = Ft.get(t);
          switch (void 0 === r ? 2 : r) {
            case 0:
              r = Gt.bind(null, t, 1, e);
              break;
            case 1:
              r = Kt.bind(null, t, 1, e);
              break;
            default:
              r = qt.bind(null, t, 1, e);
          }
          n ? e.addEventListener(t, r, !0) : e.addEventListener(t, r, !1);
        }
        function Gt(e, t, n, r) {
          D || j();
          var a = qt,
            o = D;
          D = !0;
          try {
            R(a, e, t, n, r);
          } finally {
            (D = o) || W();
          }
        }
        function Kt(e, t, n, r) {
          Bt($t, qt.bind(null, e, t, n, r));
        }
        function qt(e, t, n, r) {
          if (Vt)
            if (0 < yt.length && -1 < Tt.indexOf(e))
              (e = Et(null, e, t, n, r)), yt.push(e);
            else {
              var a = Yt(e, t, n, r);
              if (null === a) Ct(e, r);
              else if (-1 < Tt.indexOf(e)) (e = Et(a, e, t, n, r)), yt.push(e);
              else if (
                !(function (e, t, n, r, a) {
                  switch (t) {
                    case "focus":
                      return (vt = Pt(vt, e, t, n, r, a)), !0;
                    case "dragenter":
                      return (bt = Pt(bt, e, t, n, r, a)), !0;
                    case "mouseover":
                      return (_t = Pt(_t, e, t, n, r, a)), !0;
                    case "pointerover":
                      var o = a.pointerId;
                      return (
                        wt.set(o, Pt(wt.get(o) || null, e, t, n, r, a)), !0
                      );
                    case "gotpointercapture":
                      return (
                        (o = a.pointerId),
                        xt.set(o, Pt(xt.get(o) || null, e, t, n, r, a)),
                        !0
                      );
                  }
                  return !1;
                })(a, e, t, n, r)
              ) {
                Ct(e, r), (e = ct(e, r, null, t));
                try {
                  U(ft, e);
                } finally {
                  st(e);
                }
              }
            }
        }
        function Yt(e, t, n, r) {
          if (null !== (n = In((n = it(r))))) {
            var a = Je(n);
            if (null === a) n = null;
            else {
              var o = a.tag;
              if (13 === o) {
                if (null !== (n = Ze(a))) return n;
                n = null;
              } else if (3 === o) {
                if (a.stateNode.hydrate)
                  return 3 === a.tag ? a.stateNode.containerInfo : null;
                n = null;
              } else a !== n && (n = null);
            }
          }
          e = ct(e, r, n, t);
          try {
            U(ft, e);
          } finally {
            st(e);
          }
          return null;
        }
        var Xt = {
            animationIterationCount: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          Jt = ["Webkit", "ms", "Moz", "O"];
        function Zt(e, t, n) {
          return null == t || "boolean" == typeof t || "" === t
            ? ""
            : n ||
              "number" != typeof t ||
              0 === t ||
              (Xt.hasOwnProperty(e) && Xt[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function en(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = Zt(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(Xt).forEach(function (e) {
          Jt.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (Xt[t] = Xt[e]);
          });
        });
        var tn = a(
          {
            menuitem: !0,
          },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function nn(e, t) {
          if (t) {
            if (
              tn[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(i(137, e, ""));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(i(60));
              if (
                "object" != typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(i(61));
            }
            if (null != t.style && "object" != typeof t.style)
              throw Error(i(62, ""));
          }
        }
        function rn(e, t) {
          if (-1 === e.indexOf("-")) return "string" == typeof t.is;
          switch (e) {
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
        var an = "http://www.w3.org/1999/xhtml";
        function on(e, t) {
          var n = Xe(
            (e = 9 === e.nodeType || 11 === e.nodeType ? e : e.ownerDocument)
          );
          t = k[t];
          for (var r = 0; r < t.length; r++) pt(t[r], e, n);
        }
        function ln() {}
        function un(e) {
          if (
            void 0 ===
            (e = e || ("undefined" != typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function sn(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cn(e, t) {
          var n,
            r = sn(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return {
                  node: r,
                  offset: t - e,
                };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = sn(r);
          }
        }
        function fn(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? fn(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function pn() {
          for (var e = window, t = un(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" == typeof t.contentWindow.location.href;
            } catch (e) {
              n = !1;
            }
            if (!n) break;
            t = un((e = t.contentWindow).document);
          }
          return t;
        }
        function dn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        var mn = "$",
          hn = "/$",
          gn = "$?",
          yn = "$!",
          vn = null,
          bn = null;
        function _n(e, t) {
          switch (e) {
            case "button":
            case "input":
            case "select":
            case "textarea":
              return !!t.autoFocus;
          }
          return !1;
        }
        function wn(e, t) {
          return (
            "textarea" === e ||
            "option" === e ||
            "noscript" === e ||
            "string" == typeof t.children ||
            "number" == typeof t.children ||
            ("object" == typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var xn = "function" == typeof setTimeout ? setTimeout : void 0,
          Sn = "function" == typeof clearTimeout ? clearTimeout : void 0;
        function Tn(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
          }
          return e;
        }
        function kn(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if (n === mn || n === yn || n === gn) {
                if (0 === t) return e;
                t--;
              } else n === hn && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var En = Math.random().toString(36).slice(2),
          Cn = "__reactInternalInstance$" + En,
          Pn = "__reactEventHandlers$" + En,
          Nn = "__reactContainere$" + En;
        function In(e) {
          var t = e[Cn];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[Nn] || n[Cn])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = kn(e); null !== e; ) {
                  if ((n = e[Cn])) return n;
                  e = kn(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function On(e) {
          return !(e = e[Cn] || e[Nn]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function Mn(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(i(33));
        }
        function zn(e) {
          return e[Pn] || null;
        }
        function An(e) {
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Rn(e, t) {
          var n = e.stateNode;
          if (!n) return null;
          var r = m(n);
          if (!r) return null;
          n = r[t];
          e: switch (t) {
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
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" != typeof n) throw Error(i(231, t, typeof n));
          return n;
        }
        function jn(e, t, n) {
          (t = Rn(e, n.dispatchConfig.phasedRegistrationNames[t])) &&
            ((n._dispatchListeners = tt(n._dispatchListeners, t)),
            (n._dispatchInstances = tt(n._dispatchInstances, e)));
        }
        function Fn(e) {
          if (e && e.dispatchConfig.phasedRegistrationNames) {
            for (var t = e._targetInst, n = []; t; ) n.push(t), (t = An(t));
            for (t = n.length; 0 < t--; ) jn(n[t], "captured", e);
            for (t = 0; t < n.length; t++) jn(n[t], "bubbled", e);
          }
        }
        function Dn(e, t, n) {
          e &&
            n &&
            n.dispatchConfig.registrationName &&
            (t = Rn(e, n.dispatchConfig.registrationName)) &&
            ((n._dispatchListeners = tt(n._dispatchListeners, t)),
            (n._dispatchInstances = tt(n._dispatchInstances, e)));
        }
        function Ln(e) {
          nt(e, Fn);
        }
        var Wn = null,
          Un = null,
          $n = null;
        function Bn() {
          if ($n) return $n;
          var e,
            t,
            n = Un,
            r = n.length,
            a = "value" in Wn ? Wn.value : Wn.textContent,
            o = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var i = r - e;
          for (t = 1; t <= i && n[r - t] === a[o - t]; t++);
          return ($n = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function Vn() {
          return !0;
        }
        function Hn() {
          return !1;
        }
        function Qn(e, t, n, r) {
          for (var a in ((this.dispatchConfig = e),
          (this._targetInst = t),
          (this.nativeEvent = n),
          (e = this.constructor.Interface)))
            e.hasOwnProperty(a) &&
              ((t = e[a])
                ? (this[a] = t(n))
                : "target" === a
                ? (this.target = r)
                : (this[a] = n[a]));
          return (
            (this.isDefaultPrevented = (
              null != n.defaultPrevented
                ? n.defaultPrevented
                : !1 === n.returnValue
            )
              ? Vn
              : Hn),
            (this.isPropagationStopped = Hn),
            this
          );
        }
        function Gn(e, t, n, r) {
          if (this.eventPool.length) {
            var a = this.eventPool.pop();
            return this.call(a, e, t, n, r), a;
          }
          return new this(e, t, n, r);
        }
        function Kn(e) {
          if (!(e instanceof this)) throw Error(i(279));
          e.destructor(), 10 > this.eventPool.length && this.eventPool.push(e);
        }
        function qn(e) {
          (e.eventPool = []), (e.getPooled = Gn), (e.release = Kn);
        }
        a(Qn.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e &&
              (e.preventDefault
                ? e.preventDefault()
                : "unknown" != typeof e.returnValue && (e.returnValue = !1),
              (this.isDefaultPrevented = Vn));
          },
          stopPropagation: function () {
            var e = this.nativeEvent;
            e &&
              (e.stopPropagation
                ? e.stopPropagation()
                : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
              (this.isPropagationStopped = Vn));
          },
          persist: function () {
            this.isPersistent = Vn;
          },
          isPersistent: Hn,
          destructor: function () {
            var e,
              t = this.constructor.Interface;
            for (e in t) this[e] = null;
            (this.nativeEvent = this._targetInst = this.dispatchConfig = null),
              (this.isPropagationStopped = this.isDefaultPrevented = Hn),
              (this._dispatchInstances = this._dispatchListeners = null);
          },
        }),
          (Qn.Interface = {
            type: null,
            target: null,
            currentTarget: function () {
              return null;
            },
            eventPhase: null,
            bubbles: null,
            cancelable: null,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: null,
            isTrusted: null,
          }),
          (Qn.extend = function (e) {
            function t() {}
            function n() {
              return r.apply(this, arguments);
            }
            var r = this;
            t.prototype = r.prototype;
            var o = new t();
            return (
              a(o, n.prototype),
              (n.prototype = o),
              (n.prototype.constructor = n),
              (n.Interface = a({}, r.Interface, e)),
              (n.extend = r.extend),
              qn(n),
              n
            );
          }),
          qn(Qn);
        var Yn = Qn.extend({
            data: null,
          }),
          Xn = Qn.extend({
            data: null,
          }),
          Jn = [9, 13, 27, 32],
          Zn = C && "CompositionEvent" in window,
          er = null;
        C && "documentMode" in document && (er = document.documentMode);
        var tr = C && "TextEvent" in window && !er,
          nr = C && (!Zn || (er && 8 < er && 11 >= er)),
          rr = String.fromCharCode(32),
          ar = {
            beforeInput: {
              phasedRegistrationNames: {
                bubbled: "onBeforeInput",
                captured: "onBeforeInputCapture",
              },
              dependencies: [
                "compositionend",
                "keypress",
                "textInput",
                "paste",
              ],
            },
            compositionEnd: {
              phasedRegistrationNames: {
                bubbled: "onCompositionEnd",
                captured: "onCompositionEndCapture",
              },
              dependencies:
                "blur compositionend keydown keypress keyup mousedown".split(
                  " "
                ),
            },
            compositionStart: {
              phasedRegistrationNames: {
                bubbled: "onCompositionStart",
                captured: "onCompositionStartCapture",
              },
              dependencies:
                "blur compositionstart keydown keypress keyup mousedown".split(
                  " "
                ),
            },
            compositionUpdate: {
              phasedRegistrationNames: {
                bubbled: "onCompositionUpdate",
                captured: "onCompositionUpdateCapture",
              },
              dependencies:
                "blur compositionupdate keydown keypress keyup mousedown".split(
                  " "
                ),
            },
          },
          or = !1;
        function ir(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Jn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "blur":
              return !0;
            default:
              return !1;
          }
        }
        function lr(e) {
          return "object" == typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var ur = !1,
          sr = {
            eventTypes: ar,
            extractEvents: function (e, t, n, r) {
              var a;
              if (Zn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var o = ar.compositionStart;
                      break e;
                    case "compositionend":
                      o = ar.compositionEnd;
                      break e;
                    case "compositionupdate":
                      o = ar.compositionUpdate;
                      break e;
                  }
                  o = void 0;
                }
              else
                ur
                  ? ir(e, n) && (o = ar.compositionEnd)
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (o = ar.compositionStart);
              return (
                o
                  ? (nr &&
                      "ko" !== n.locale &&
                      (ur || o !== ar.compositionStart
                        ? o === ar.compositionEnd && ur && (a = Bn())
                        : ((Un =
                            "value" in (Wn = r) ? Wn.value : Wn.textContent),
                          (ur = !0))),
                    (o = Yn.getPooled(o, t, n, r)),
                    (a || null !== (a = lr(n))) && (o.data = a),
                    Ln(o),
                    (a = o))
                  : (a = null),
                (e = tr
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return lr(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((or = !0), rr);
                        case "textInput":
                          return (e = t.data) === rr && or ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (ur)
                        return "compositionend" === e || (!Zn && ir(e, t))
                          ? ((e = Bn()), ($n = Un = Wn = null), (ur = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return nr && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n))
                  ? (((t = Xn.getPooled(ar.beforeInput, t, n, r)).data = e),
                    Ln(t))
                  : (t = null),
                null === a ? t : null === t ? a : [a, t]
              );
            },
          },
          cr = {
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
            week: !0,
          };
        function fr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!cr[e.type] : "textarea" === t;
        }
        var pr = {
          change: {
            phasedRegistrationNames: {
              bubbled: "onChange",
              captured: "onChangeCapture",
            },
            dependencies:
              "blur change click focus input keydown keyup selectionchange".split(
                " "
              ),
          },
        };
        function dr(e, t, n) {
          return (
            ((e = Qn.getPooled(pr.change, e, t, n)).type = "change"),
            M(n),
            Ln(e),
            e
          );
        }
        var mr = null,
          hr = null;
        function gr(e) {
          ot(e);
        }
        function yr(e) {
          if (we(Mn(e))) return e;
        }
        function vr(e, t) {
          if ("change" === e) return t;
        }
        var br = !1;
        function _r() {
          mr && (mr.detachEvent("onpropertychange", wr), (hr = mr = null));
        }
        function wr(e) {
          if ("value" === e.propertyName && yr(hr))
            if (((e = dr(hr, e, it(e))), D)) ot(e);
            else {
              D = !0;
              try {
                A(gr, e);
              } finally {
                (D = !1), W();
              }
            }
        }
        function xr(e, t, n) {
          "focus" === e
            ? (_r(), (hr = n), (mr = t).attachEvent("onpropertychange", wr))
            : "blur" === e && _r();
        }
        function Sr(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return yr(hr);
        }
        function Tr(e, t) {
          if ("click" === e) return yr(t);
        }
        function kr(e, t) {
          if ("input" === e || "change" === e) return yr(t);
        }
        C &&
          (br =
            lt("input") &&
            (!document.documentMode || 9 < document.documentMode));
        var Er = {
            eventTypes: pr,
            _isInputEventSupported: br,
            extractEvents: function (e, t, n, r) {
              var a = t ? Mn(t) : window,
                o = a.nodeName && a.nodeName.toLowerCase();
              if ("select" === o || ("input" === o && "file" === a.type))
                var i = vr;
              else if (fr(a))
                if (br) i = kr;
                else {
                  i = Sr;
                  var l = xr;
                }
              else
                (o = a.nodeName) &&
                  "input" === o.toLowerCase() &&
                  ("checkbox" === a.type || "radio" === a.type) &&
                  (i = Tr);
              if (i && (i = i(e, t))) return dr(i, n, r);
              l && l(e, a, t),
                "blur" === e &&
                  (e = a._wrapperState) &&
                  e.controlled &&
                  "number" === a.type &&
                  Ce(a, "number", a.value);
            },
          },
          Cr = Qn.extend({
            view: null,
            detail: null,
          }),
          Pr = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function Nr(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = Pr[e]) && !!t[e];
        }
        function Ir() {
          return Nr;
        }
        var Or = 0,
          Mr = 0,
          zr = !1,
          Ar = !1,
          Rr = Cr.extend({
            screenX: null,
            screenY: null,
            clientX: null,
            clientY: null,
            pageX: null,
            pageY: null,
            ctrlKey: null,
            shiftKey: null,
            altKey: null,
            metaKey: null,
            getModifierState: Ir,
            button: null,
            buttons: null,
            relatedTarget: function (e) {
              return (
                e.relatedTarget ||
                (e.fromElement === e.srcElement ? e.toElement : e.fromElement)
              );
            },
            movementX: function (e) {
              if ("movementX" in e) return e.movementX;
              var t = Or;
              return (
                (Or = e.screenX),
                zr
                  ? "mousemove" === e.type
                    ? e.screenX - t
                    : 0
                  : ((zr = !0), 0)
              );
            },
            movementY: function (e) {
              if ("movementY" in e) return e.movementY;
              var t = Mr;
              return (
                (Mr = e.screenY),
                Ar
                  ? "mousemove" === e.type
                    ? e.screenY - t
                    : 0
                  : ((Ar = !0), 0)
              );
            },
          }),
          jr = Rr.extend({
            pointerId: null,
            width: null,
            height: null,
            pressure: null,
            tangentialPressure: null,
            tiltX: null,
            tiltY: null,
            twist: null,
            pointerType: null,
            isPrimary: null,
          }),
          Fr = {
            mouseEnter: {
              registrationName: "onMouseEnter",
              dependencies: ["mouseout", "mouseover"],
            },
            mouseLeave: {
              registrationName: "onMouseLeave",
              dependencies: ["mouseout", "mouseover"],
            },
            pointerEnter: {
              registrationName: "onPointerEnter",
              dependencies: ["pointerout", "pointerover"],
            },
            pointerLeave: {
              registrationName: "onPointerLeave",
              dependencies: ["pointerout", "pointerover"],
            },
          },
          Dr = {
            eventTypes: Fr,
            extractEvents: function (e, t, n, r, a) {
              var o = "mouseover" === e || "pointerover" === e,
                i = "mouseout" === e || "pointerout" === e;
              if (
                (o && 0 == (32 & a) && (n.relatedTarget || n.fromElement)) ||
                (!i && !o)
              )
                return null;
              if (
                ((o =
                  r.window === r
                    ? r
                    : (o = r.ownerDocument)
                    ? o.defaultView || o.parentWindow
                    : window),
                i
                  ? ((i = t),
                    null !==
                      (t = (t = n.relatedTarget || n.toElement)
                        ? In(t)
                        : null) &&
                      (t !== Je(t) || (5 !== t.tag && 6 !== t.tag)) &&
                      (t = null))
                  : (i = null),
                i === t)
              )
                return null;
              if ("mouseout" === e || "mouseover" === e)
                var l = Rr,
                  u = Fr.mouseLeave,
                  s = Fr.mouseEnter,
                  c = "mouse";
              else
                ("pointerout" !== e && "pointerover" !== e) ||
                  ((l = jr),
                  (u = Fr.pointerLeave),
                  (s = Fr.pointerEnter),
                  (c = "pointer"));
              if (
                ((e = null == i ? o : Mn(i)),
                (o = null == t ? o : Mn(t)),
                ((u = l.getPooled(u, i, n, r)).type = c + "leave"),
                (u.target = e),
                (u.relatedTarget = o),
                ((n = l.getPooled(s, t, n, r)).type = c + "enter"),
                (n.target = o),
                (n.relatedTarget = e),
                (c = t),
                (r = i) && c)
              )
                e: {
                  for (s = c, i = 0, e = l = r; e; e = An(e)) i++;
                  for (e = 0, t = s; t; t = An(t)) e++;
                  for (; 0 < i - e; ) (l = An(l)), i--;
                  for (; 0 < e - i; ) (s = An(s)), e--;
                  for (; i--; ) {
                    if (l === s || l === s.alternate) break e;
                    (l = An(l)), (s = An(s));
                  }
                  l = null;
                }
              else l = null;
              for (
                s = l, l = [];
                r && r !== s && (null === (i = r.alternate) || i !== s);

              )
                l.push(r), (r = An(r));
              for (
                r = [];
                c && c !== s && (null === (i = c.alternate) || i !== s);

              )
                r.push(c), (c = An(c));
              for (c = 0; c < l.length; c++) Dn(l[c], "bubbled", u);
              for (c = r.length; 0 < c--; ) Dn(r[c], "captured", n);
              return 0 == (64 & a) ? [u] : [u, n];
            },
          },
          Lr =
            "function" == typeof Object.is
              ? Object.is
              : function (e, t) {
                  return (
                    (e === t && (0 !== e || 1 / e == 1 / t)) ||
                    (e != e && t != t)
                  );
                },
          Wr = Object.prototype.hasOwnProperty;
        function Ur(e, t) {
          if (Lr(e, t)) return !0;
          if (
            "object" != typeof e ||
            null === e ||
            "object" != typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++)
            if (!Wr.call(t, n[r]) || !Lr(e[n[r]], t[n[r]])) return !1;
          return !0;
        }
        var $r = C && "documentMode" in document && 11 >= document.documentMode,
          Br = {
            select: {
              phasedRegistrationNames: {
                bubbled: "onSelect",
                captured: "onSelectCapture",
              },
              dependencies:
                "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(
                  " "
                ),
            },
          },
          Vr = null,
          Hr = null,
          Qr = null,
          Gr = !1;
        function Kr(e, t) {
          var n =
            t.window === t
              ? t.document
              : 9 === t.nodeType
              ? t
              : t.ownerDocument;
          return Gr || null == Vr || Vr !== un(n)
            ? null
            : ((n =
                "selectionStart" in (n = Vr) && dn(n)
                  ? {
                      start: n.selectionStart,
                      end: n.selectionEnd,
                    }
                  : {
                      anchorNode: (n = (
                        (n.ownerDocument && n.ownerDocument.defaultView) ||
                        window
                      ).getSelection()).anchorNode,
                      anchorOffset: n.anchorOffset,
                      focusNode: n.focusNode,
                      focusOffset: n.focusOffset,
                    }),
              Qr && Ur(Qr, n)
                ? null
                : ((Qr = n),
                  ((e = Qn.getPooled(Br.select, Hr, e, t)).type = "select"),
                  (e.target = Vr),
                  Ln(e),
                  e));
        }
        var qr = {
            eventTypes: Br,
            extractEvents: function (e, t, n, r, a, o) {
              if (
                !(o = !(a =
                  o ||
                  (r.window === r
                    ? r.document
                    : 9 === r.nodeType
                    ? r
                    : r.ownerDocument)))
              ) {
                e: {
                  (a = Xe(a)), (o = k.onSelect);
                  for (var i = 0; i < o.length; i++)
                    if (!a.has(o[i])) {
                      a = !1;
                      break e;
                    }
                  a = !0;
                }
                o = !a;
              }
              if (o) return null;
              switch (((a = t ? Mn(t) : window), e)) {
                case "focus":
                  (fr(a) || "true" === a.contentEditable) &&
                    ((Vr = a), (Hr = t), (Qr = null));
                  break;
                case "blur":
                  Qr = Hr = Vr = null;
                  break;
                case "mousedown":
                  Gr = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  return (Gr = !1), Kr(n, r);
                case "selectionchange":
                  if ($r) break;
                case "keydown":
                case "keyup":
                  return Kr(n, r);
              }
              return null;
            },
          },
          Yr = Qn.extend({
            animationName: null,
            elapsedTime: null,
            pseudoElement: null,
          }),
          Xr = Qn.extend({
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          Jr = Cr.extend({
            relatedTarget: null,
          });
        function Zr(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        var ea = {
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
            MozPrintableKey: "Unidentified",
          },
          ta = {
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
            224: "Meta",
          },
          na = Cr.extend({
            key: function (e) {
              if (e.key) {
                var t = ea[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = Zr(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? ta[e.keyCode] || "Unidentified"
                : "";
            },
            location: null,
            ctrlKey: null,
            shiftKey: null,
            altKey: null,
            metaKey: null,
            repeat: null,
            locale: null,
            getModifierState: Ir,
            charCode: function (e) {
              return "keypress" === e.type ? Zr(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? Zr(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          ra = Rr.extend({
            dataTransfer: null,
          }),
          aa = Cr.extend({
            touches: null,
            targetTouches: null,
            changedTouches: null,
            altKey: null,
            metaKey: null,
            ctrlKey: null,
            shiftKey: null,
            getModifierState: Ir,
          }),
          oa = Qn.extend({
            propertyName: null,
            elapsedTime: null,
            pseudoElement: null,
          }),
          ia = Rr.extend({
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: null,
            deltaMode: null,
          }),
          la = {
            eventTypes: Rt,
            extractEvents: function (e, t, n, r) {
              var a = jt.get(e);
              if (!a) return null;
              switch (e) {
                case "keypress":
                  if (0 === Zr(n)) return null;
                case "keydown":
                case "keyup":
                  e = na;
                  break;
                case "blur":
                case "focus":
                  e = Jr;
                  break;
                case "click":
                  if (2 === n.button) return null;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                  e = Rr;
                  break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                  e = ra;
                  break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                  e = aa;
                  break;
                case He:
                case Qe:
                case Ge:
                  e = Yr;
                  break;
                case Ke:
                  e = oa;
                  break;
                case "scroll":
                  e = Cr;
                  break;
                case "wheel":
                  e = ia;
                  break;
                case "copy":
                case "cut":
                case "paste":
                  e = Xr;
                  break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                  e = jr;
                  break;
                default:
                  e = Qn;
              }
              return Ln((t = e.getPooled(a, t, n, r))), t;
            },
          };
        if (v) throw Error(i(101));
        (v = Array.prototype.slice.call(
          "ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(
            " "
          )
        )),
          _(),
          (m = zn),
          (h = On),
          (g = Mn),
          E({
            SimpleEventPlugin: la,
            EnterLeaveEventPlugin: Dr,
            ChangeEventPlugin: Er,
            SelectEventPlugin: qr,
            BeforeInputEventPlugin: sr,
          });
        var ua = [],
          sa = -1;
        function ca(e) {
          0 > sa || ((e.current = ua[sa]), (ua[sa] = null), sa--);
        }
        function fa(e, t) {
          sa++, (ua[sa] = e.current), (e.current = t);
        }
        var pa = {},
          da = {
            current: pa,
          },
          ma = {
            current: !1,
          },
          ha = pa;
        function ga(e, t) {
          var n = e.type.contextTypes;
          if (!n) return pa;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            o = {};
          for (a in n) o[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            o
          );
        }
        function ya(e) {
          return null != e.childContextTypes;
        }
        function va() {
          ca(ma), ca(da);
        }
        function ba(e, t, n) {
          if (da.current !== pa) throw Error(i(168));
          fa(da, t), fa(ma, n);
        }
        function _a(e, t, n) {
          var r = e.stateNode;
          if (
            ((e = t.childContextTypes), "function" != typeof r.getChildContext)
          )
            return n;
          for (var o in (r = r.getChildContext()))
            if (!(o in e)) throw Error(i(108, ge(t) || "Unknown", o));
          return a({}, n, {}, r);
        }
        function wa(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              pa),
            (ha = da.current),
            fa(da, e),
            fa(ma, ma.current),
            !0
          );
        }
        function xa(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(i(169));
          n
            ? ((e = _a(e, t, ha)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              ca(ma),
              ca(da),
              fa(da, e))
            : ca(ma),
            fa(ma, n);
        }
        var Sa = o.unstable_runWithPriority,
          Ta = o.unstable_scheduleCallback,
          ka = o.unstable_cancelCallback,
          Ea = o.unstable_requestPaint,
          Ca = o.unstable_now,
          Pa = o.unstable_getCurrentPriorityLevel,
          Na = o.unstable_ImmediatePriority,
          Ia = o.unstable_UserBlockingPriority,
          Oa = o.unstable_NormalPriority,
          Ma = o.unstable_LowPriority,
          za = o.unstable_IdlePriority,
          Aa = {},
          Ra = o.unstable_shouldYield,
          ja = void 0 !== Ea ? Ea : function () {},
          Fa = null,
          Da = null,
          La = !1,
          Wa = Ca(),
          Ua =
            1e4 > Wa
              ? Ca
              : function () {
                  return Ca() - Wa;
                };
        function $a() {
          switch (Pa()) {
            case Na:
              return 99;
            case Ia:
              return 98;
            case Oa:
              return 97;
            case Ma:
              return 96;
            case za:
              return 95;
            default:
              throw Error(i(332));
          }
        }
        function Ba(e) {
          switch (e) {
            case 99:
              return Na;
            case 98:
              return Ia;
            case 97:
              return Oa;
            case 96:
              return Ma;
            case 95:
              return za;
            default:
              throw Error(i(332));
          }
        }
        function Va(e, t) {
          return (e = Ba(e)), Sa(e, t);
        }
        function Ha(e, t, n) {
          return (e = Ba(e)), Ta(e, t, n);
        }
        function Qa(e) {
          return null === Fa ? ((Fa = [e]), (Da = Ta(Na, Ka))) : Fa.push(e), Aa;
        }
        function Ga() {
          if (null !== Da) {
            var e = Da;
            (Da = null), ka(e);
          }
          Ka();
        }
        function Ka() {
          if (!La && null !== Fa) {
            La = !0;
            var e = 0;
            try {
              var t = Fa;
              Va(99, function () {
                for (; e < t.length; e++) {
                  var n = t[e];
                  do {
                    n = n(!0);
                  } while (null !== n);
                }
              }),
                (Fa = null);
            } catch (t) {
              throw (null !== Fa && (Fa = Fa.slice(e + 1)), Ta(Na, Ga), t);
            } finally {
              La = !1;
            }
          }
        }
        function qa(e, t, n) {
          return (
            1073741821 - (1 + (((1073741821 - e + t / 10) / (n /= 10)) | 0)) * n
          );
        }
        function Ya(e, t) {
          if (e && e.defaultProps)
            for (var n in ((t = a({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
          return t;
        }
        var Xa = {
            current: null,
          },
          Ja = null,
          Za = null,
          eo = null;
        function to() {
          eo = Za = Ja = null;
        }
        function no(e) {
          var t = Xa.current;
          ca(Xa), (e.type._context._currentValue = t);
        }
        function ro(e, t) {
          for (; null !== e; ) {
            var n = e.alternate;
            if (e.childExpirationTime < t)
              (e.childExpirationTime = t),
                null !== n &&
                  n.childExpirationTime < t &&
                  (n.childExpirationTime = t);
            else {
              if (!(null !== n && n.childExpirationTime < t)) break;
              n.childExpirationTime = t;
            }
            e = e.return;
          }
        }
        function ao(e, t) {
          (Ja = e),
            (eo = Za = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (e.expirationTime >= t && (Mi = !0), (e.firstContext = null));
        }
        function oo(e, t) {
          if (eo !== e && !1 !== t && 0 !== t)
            if (
              (("number" == typeof t && 1073741823 !== t) ||
                ((eo = e), (t = 1073741823)),
              (t = {
                context: e,
                observedBits: t,
                next: null,
              }),
              null === Za)
            ) {
              if (null === Ja) throw Error(i(308));
              (Za = t),
                (Ja.dependencies = {
                  expirationTime: 0,
                  firstContext: t,
                  responders: null,
                });
            } else Za = Za.next = t;
          return e._currentValue;
        }
        var io = !1;
        function lo(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            baseQueue: null,
            shared: {
              pending: null,
            },
            effects: null,
          };
        }
        function uo(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                baseQueue: e.baseQueue,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function so(e, t) {
          return ((e = {
            expirationTime: e,
            suspenseConfig: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          }).next = e);
        }
        function co(e, t) {
          if (null !== (e = e.updateQueue)) {
            var n = (e = e.shared).pending;
            null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
              (e.pending = t);
          }
        }
        function fo(e, t) {
          var n = e.alternate;
          null !== n && uo(n, e),
            null === (n = (e = e.updateQueue).baseQueue)
              ? ((e.baseQueue = t.next = t), (t.next = t))
              : ((t.next = n.next), (n.next = t));
        }
        function po(e, t, n, r) {
          var o = e.updateQueue;
          io = !1;
          var i = o.baseQueue,
            l = o.shared.pending;
          if (null !== l) {
            if (null !== i) {
              var u = i.next;
              (i.next = l.next), (l.next = u);
            }
            (i = l),
              (o.shared.pending = null),
              null !== (u = e.alternate) &&
                null !== (u = u.updateQueue) &&
                (u.baseQueue = l);
          }
          if (null !== i) {
            u = i.next;
            var s = o.baseState,
              c = 0,
              f = null,
              p = null,
              d = null;
            if (null !== u)
              for (var m = u; ; ) {
                if ((l = m.expirationTime) < r) {
                  var h = {
                    expirationTime: m.expirationTime,
                    suspenseConfig: m.suspenseConfig,
                    tag: m.tag,
                    payload: m.payload,
                    callback: m.callback,
                    next: null,
                  };
                  null === d ? ((p = d = h), (f = s)) : (d = d.next = h),
                    l > c && (c = l);
                } else {
                  null !== d &&
                    (d = d.next =
                      {
                        expirationTime: 1073741823,
                        suspenseConfig: m.suspenseConfig,
                        tag: m.tag,
                        payload: m.payload,
                        callback: m.callback,
                        next: null,
                      }),
                    yu(l, m.suspenseConfig);
                  e: {
                    var g = e,
                      y = m;
                    switch (((l = t), (h = n), y.tag)) {
                      case 1:
                        if ("function" == typeof (g = y.payload)) {
                          s = g.call(h, s, l);
                          break e;
                        }
                        s = g;
                        break e;
                      case 3:
                        g.effectTag = (-4097 & g.effectTag) | 64;
                      case 0:
                        if (
                          null ==
                          (l =
                            "function" == typeof (g = y.payload)
                              ? g.call(h, s, l)
                              : g)
                        )
                          break e;
                        s = a({}, s, l);
                        break e;
                      case 2:
                        io = !0;
                    }
                  }
                  null !== m.callback &&
                    ((e.effectTag |= 32),
                    null === (l = o.effects) ? (o.effects = [m]) : l.push(m));
                }
                if (null === (m = m.next) || m === u) {
                  if (null === (l = o.shared.pending)) break;
                  (m = i.next = l.next),
                    (l.next = u),
                    (o.baseQueue = i = l),
                    (o.shared.pending = null);
                }
              }
            null === d ? (f = s) : (d.next = p),
              (o.baseState = f),
              (o.baseQueue = d),
              vu(c),
              (e.expirationTime = c),
              (e.memoizedState = s);
          }
        }
        function mo(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (
                  ((r.callback = null),
                  (r = a),
                  (a = n),
                  "function" != typeof r)
                )
                  throw Error(i(191, r));
                r.call(a);
              }
            }
        }
        var ho = Y.ReactCurrentBatchConfig,
          go = new r.Component().refs;
        function yo(e, t, n, r) {
          (n = null == (n = n(r, (t = e.memoizedState))) ? t : a({}, t, n)),
            (e.memoizedState = n),
            0 === e.expirationTime && (e.updateQueue.baseState = n);
        }
        var vo = {
          isMounted: function (e) {
            return !!(e = e._reactInternalFiber) && Je(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternalFiber;
            var r = ou(),
              a = ho.suspense;
            ((a = so((r = iu(r, e, a)), a)).payload = t),
              null != n && (a.callback = n),
              co(e, a),
              lu(e, r);
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternalFiber;
            var r = ou(),
              a = ho.suspense;
            ((a = so((r = iu(r, e, a)), a)).tag = 1),
              (a.payload = t),
              null != n && (a.callback = n),
              co(e, a),
              lu(e, r);
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternalFiber;
            var n = ou(),
              r = ho.suspense;
            ((r = so((n = iu(n, e, r)), r)).tag = 2),
              null != t && (r.callback = t),
              co(e, r),
              lu(e, n);
          },
        };
        function bo(e, t, n, r, a, o, i) {
          return "function" == typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, o, i)
            : !(
                t.prototype &&
                t.prototype.isPureReactComponent &&
                Ur(n, r) &&
                Ur(a, o)
              );
        }
        function _o(e, t, n) {
          var r = !1,
            a = pa,
            o = t.contextType;
          return (
            "object" == typeof o && null !== o
              ? (o = oo(o))
              : ((a = ya(t) ? ha : da.current),
                (o = (r = null != (r = t.contextTypes)) ? ga(e, a) : pa)),
            (t = new t(n, o)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = vo),
            (e.stateNode = t),
            (t._reactInternalFiber = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            t
          );
        }
        function wo(e, t, n, r) {
          (e = t.state),
            "function" == typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" == typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && vo.enqueueReplaceState(t, t.state, null);
        }
        function xo(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = go), lo(e);
          var o = t.contextType;
          "object" == typeof o && null !== o
            ? (a.context = oo(o))
            : ((o = ya(t) ? ha : da.current), (a.context = ga(e, o))),
            po(e, n, a, r),
            (a.state = e.memoizedState),
            "function" == typeof (o = t.getDerivedStateFromProps) &&
              (yo(e, t, o, n), (a.state = e.memoizedState)),
            "function" == typeof t.getDerivedStateFromProps ||
              "function" == typeof a.getSnapshotBeforeUpdate ||
              ("function" != typeof a.UNSAFE_componentWillMount &&
                "function" != typeof a.componentWillMount) ||
              ((t = a.state),
              "function" == typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" == typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && vo.enqueueReplaceState(a, a.state, null),
              po(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" == typeof a.componentDidMount && (e.effectTag |= 4);
        }
        var So = Array.isArray;
        function To(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" != typeof e &&
            "object" != typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(i(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(i(147, e));
              var a = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" == typeof t.ref &&
                t.ref._stringRef === a
                ? t.ref
                : ((t = function (e) {
                    var t = r.refs;
                    t === go && (t = r.refs = {}),
                      null === e ? delete t[a] : (t[a] = e);
                  }),
                  (t._stringRef = a),
                  t);
            }
            if ("string" != typeof e) throw Error(i(284));
            if (!n._owner) throw Error(i(290, e));
          }
          return e;
        }
        function ko(e, t) {
          if ("textarea" !== e.type)
            throw Error(
              i(
                31,
                "[object Object]" === Object.prototype.toString.call(t)
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : t,
                ""
              )
            );
        }
        function Eo(e) {
          function t(t, n) {
            if (e) {
              var r = t.lastEffect;
              null !== r
                ? ((r.nextEffect = n), (t.lastEffect = n))
                : (t.firstEffect = t.lastEffect = n),
                (n.nextEffect = null),
                (n.effectTag = 8);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = Du(e, t)).index = 0), (e.sibling = null), e;
          }
          function o(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.effectTag = 2), n)
                    : r
                  : ((t.effectTag = 2), n)
                : n
            );
          }
          function l(t) {
            return e && null === t.alternate && (t.effectTag = 2), t;
          }
          function u(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Uu(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function s(e, t, n, r) {
            return null !== t && t.elementType === n.type
              ? (((r = a(t, n.props)).ref = To(e, t, n)), (r.return = e), r)
              : (((r = Lu(n.type, n.key, n.props, null, e.mode, r)).ref = To(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = $u(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, o) {
            return null === t || 7 !== t.tag
              ? (((t = Wu(n, e.mode, r, o)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function p(e, t, n) {
            if ("string" == typeof t || "number" == typeof t)
              return ((t = Uu("" + t, e.mode, n)).return = e), t;
            if ("object" == typeof t && null !== t) {
              switch (t.$$typeof) {
                case ee:
                  return (
                    ((n = Lu(t.type, t.key, t.props, null, e.mode, n)).ref = To(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case te:
                  return ((t = $u(t, e.mode, n)).return = e), t;
              }
              if (So(t) || he(t))
                return ((t = Wu(t, e.mode, n, null)).return = e), t;
              ko(e, t);
            }
            return null;
          }
          function d(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if ("string" == typeof n || "number" == typeof n)
              return null !== a ? null : u(e, t, "" + n, r);
            if ("object" == typeof n && null !== n) {
              switch (n.$$typeof) {
                case ee:
                  return n.key === a
                    ? n.type === ne
                      ? f(e, t, n.props.children, r, a)
                      : s(e, t, n, r)
                    : null;
                case te:
                  return n.key === a ? c(e, t, n, r) : null;
              }
              if (So(n) || he(n))
                return null !== a ? null : f(e, t, n, r, null);
              ko(e, n);
            }
            return null;
          }
          function m(e, t, n, r, a) {
            if ("string" == typeof r || "number" == typeof r)
              return u(t, (e = e.get(n) || null), "" + r, a);
            if ("object" == typeof r && null !== r) {
              switch (r.$$typeof) {
                case ee:
                  return (
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r.type === ne
                      ? f(t, e, r.props.children, a, r.key)
                      : s(t, e, r, a)
                  );
                case te:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
              }
              if (So(r) || he(r))
                return f(t, (e = e.get(n) || null), r, a, null);
              ko(t, r);
            }
            return null;
          }
          function h(a, i, l, u) {
            for (
              var s = null, c = null, f = i, h = (i = 0), g = null;
              null !== f && h < l.length;
              h++
            ) {
              f.index > h ? ((g = f), (f = null)) : (g = f.sibling);
              var y = d(a, f, l[h], u);
              if (null === y) {
                null === f && (f = g);
                break;
              }
              e && f && null === y.alternate && t(a, f),
                (i = o(y, i, h)),
                null === c ? (s = y) : (c.sibling = y),
                (c = y),
                (f = g);
            }
            if (h === l.length) return n(a, f), s;
            if (null === f) {
              for (; h < l.length; h++)
                null !== (f = p(a, l[h], u)) &&
                  ((i = o(f, i, h)),
                  null === c ? (s = f) : (c.sibling = f),
                  (c = f));
              return s;
            }
            for (f = r(a, f); h < l.length; h++)
              null !== (g = m(f, a, h, l[h], u)) &&
                (e &&
                  null !== g.alternate &&
                  f.delete(null === g.key ? h : g.key),
                (i = o(g, i, h)),
                null === c ? (s = g) : (c.sibling = g),
                (c = g));
            return (
              e &&
                f.forEach(function (e) {
                  return t(a, e);
                }),
              s
            );
          }
          function g(a, l, u, s) {
            var c = he(u);
            if ("function" != typeof c) throw Error(i(150));
            if (null == (u = c.call(u))) throw Error(i(151));
            for (
              var f = (c = null), h = l, g = (l = 0), y = null, v = u.next();
              null !== h && !v.done;
              g++, v = u.next()
            ) {
              h.index > g ? ((y = h), (h = null)) : (y = h.sibling);
              var b = d(a, h, v.value, s);
              if (null === b) {
                null === h && (h = y);
                break;
              }
              e && h && null === b.alternate && t(a, h),
                (l = o(b, l, g)),
                null === f ? (c = b) : (f.sibling = b),
                (f = b),
                (h = y);
            }
            if (v.done) return n(a, h), c;
            if (null === h) {
              for (; !v.done; g++, v = u.next())
                null !== (v = p(a, v.value, s)) &&
                  ((l = o(v, l, g)),
                  null === f ? (c = v) : (f.sibling = v),
                  (f = v));
              return c;
            }
            for (h = r(a, h); !v.done; g++, v = u.next())
              null !== (v = m(h, a, g, v.value, s)) &&
                (e &&
                  null !== v.alternate &&
                  h.delete(null === v.key ? g : v.key),
                (l = o(v, l, g)),
                null === f ? (c = v) : (f.sibling = v),
                (f = v));
            return (
              e &&
                h.forEach(function (e) {
                  return t(a, e);
                }),
              c
            );
          }
          return function (e, r, o, u) {
            var s =
              "object" == typeof o &&
              null !== o &&
              o.type === ne &&
              null === o.key;
            s && (o = o.props.children);
            var c = "object" == typeof o && null !== o;
            if (c)
              switch (o.$$typeof) {
                case ee:
                  e: {
                    for (c = o.key, s = r; null !== s; ) {
                      if (s.key === c) {
                        if (7 === s.tag) {
                          if (o.type === ne) {
                            n(e, s.sibling),
                              ((r = a(s, o.props.children)).return = e),
                              (e = r);
                            break e;
                          }
                        } else if (s.elementType === o.type) {
                          n(e, s.sibling),
                            ((r = a(s, o.props)).ref = To(e, s, o)),
                            (r.return = e),
                            (e = r);
                          break e;
                        }
                        n(e, s);
                        break;
                      }
                      t(e, s), (s = s.sibling);
                    }
                    o.type === ne
                      ? (((r = Wu(o.props.children, e.mode, u, o.key)).return =
                          e),
                        (e = r))
                      : (((u = Lu(
                          o.type,
                          o.key,
                          o.props,
                          null,
                          e.mode,
                          u
                        )).ref = To(e, r, o)),
                        (u.return = e),
                        (e = u));
                  }
                  return l(e);
                case te:
                  e: {
                    for (s = o.key; null !== r; ) {
                      if (r.key === s) {
                        if (
                          4 === r.tag &&
                          r.stateNode.containerInfo === o.containerInfo &&
                          r.stateNode.implementation === o.implementation
                        ) {
                          n(e, r.sibling),
                            ((r = a(r, o.children || [])).return = e),
                            (e = r);
                          break e;
                        }
                        n(e, r);
                        break;
                      }
                      t(e, r), (r = r.sibling);
                    }
                    ((r = $u(o, e.mode, u)).return = e), (e = r);
                  }
                  return l(e);
              }
            if ("string" == typeof o || "number" == typeof o)
              return (
                (o = "" + o),
                null !== r && 6 === r.tag
                  ? (n(e, r.sibling), ((r = a(r, o)).return = e), (e = r))
                  : (n(e, r), ((r = Uu(o, e.mode, u)).return = e), (e = r)),
                l(e)
              );
            if (So(o)) return h(e, r, o, u);
            if (he(o)) return g(e, r, o, u);
            if ((c && ko(e, o), void 0 === o && !s))
              switch (e.tag) {
                case 1:
                case 0:
                  throw (
                    ((e = e.type),
                    Error(i(152, e.displayName || e.name || "Component")))
                  );
              }
            return n(e, r);
          };
        }
        var Co = Eo(!0),
          Po = Eo(!1),
          No = {},
          Io = {
            current: No,
          },
          Oo = {
            current: No,
          },
          Mo = {
            current: No,
          };
        function zo(e) {
          if (e === No) throw Error(i(174));
          return e;
        }
        function Ao(e, t) {
          switch ((fa(Mo, t), fa(Oo, e), fa(Io, No), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : Re(null, "");
              break;
            default:
              t = Re(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          ca(Io), fa(Io, t);
        }
        function Ro() {
          ca(Io), ca(Oo), ca(Mo);
        }
        function jo(e) {
          zo(Mo.current);
          var t = zo(Io.current),
            n = Re(t, e.type);
          t !== n && (fa(Oo, e), fa(Io, n));
        }
        function Fo(e) {
          Oo.current === e && (ca(Io), ca(Oo));
        }
        var Do = {
          current: 0,
        };
        function Lo(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) || n.data === gn || n.data === yn)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 != (64 & t.effectTag)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        function Wo(e, t) {
          return {
            responder: e,
            props: t,
          };
        }
        var Uo = Y.ReactCurrentDispatcher,
          $o = Y.ReactCurrentBatchConfig,
          Bo = 0,
          Vo = null,
          Ho = null,
          Qo = null,
          Go = !1;
        function Ko() {
          throw Error(i(321));
        }
        function qo(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!Lr(e[n], t[n])) return !1;
          return !0;
        }
        function Yo(e, t, n, r, a, o) {
          if (
            ((Bo = o),
            (Vo = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.expirationTime = 0),
            (Uo.current = null === e || null === e.memoizedState ? bi : _i),
            (e = n(r, a)),
            t.expirationTime === Bo)
          ) {
            o = 0;
            do {
              if (((t.expirationTime = 0), !(25 > o))) throw Error(i(301));
              (o += 1),
                (Qo = Ho = null),
                (t.updateQueue = null),
                (Uo.current = wi),
                (e = n(r, a));
            } while (t.expirationTime === Bo);
          }
          if (
            ((Uo.current = vi),
            (t = null !== Ho && null !== Ho.next),
            (Bo = 0),
            (Qo = Ho = Vo = null),
            (Go = !1),
            t)
          )
            throw Error(i(300));
          return e;
        }
        function Xo() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === Qo ? (Vo.memoizedState = Qo = e) : (Qo = Qo.next = e), Qo
          );
        }
        function Jo() {
          if (null === Ho) {
            var e = Vo.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = Ho.next;
          var t = null === Qo ? Vo.memoizedState : Qo.next;
          if (null !== t) (Qo = t), (Ho = e);
          else {
            if (null === e) throw Error(i(310));
            (e = {
              memoizedState: (Ho = e).memoizedState,
              baseState: Ho.baseState,
              baseQueue: Ho.baseQueue,
              queue: Ho.queue,
              next: null,
            }),
              null === Qo ? (Vo.memoizedState = Qo = e) : (Qo = Qo.next = e);
          }
          return Qo;
        }
        function Zo(e, t) {
          return "function" == typeof t ? t(e) : t;
        }
        function ei(e) {
          var t = Jo(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = Ho,
            a = r.baseQueue,
            o = n.pending;
          if (null !== o) {
            if (null !== a) {
              var l = a.next;
              (a.next = o.next), (o.next = l);
            }
            (r.baseQueue = a = o), (n.pending = null);
          }
          if (null !== a) {
            (a = a.next), (r = r.baseState);
            var u = (l = o = null),
              s = a;
            do {
              var c = s.expirationTime;
              if (c < Bo) {
                var f = {
                  expirationTime: s.expirationTime,
                  suspenseConfig: s.suspenseConfig,
                  action: s.action,
                  eagerReducer: s.eagerReducer,
                  eagerState: s.eagerState,
                  next: null,
                };
                null === u ? ((l = u = f), (o = r)) : (u = u.next = f),
                  c > Vo.expirationTime && ((Vo.expirationTime = c), vu(c));
              } else
                null !== u &&
                  (u = u.next =
                    {
                      expirationTime: 1073741823,
                      suspenseConfig: s.suspenseConfig,
                      action: s.action,
                      eagerReducer: s.eagerReducer,
                      eagerState: s.eagerState,
                      next: null,
                    }),
                  yu(c, s.suspenseConfig),
                  (r = s.eagerReducer === e ? s.eagerState : e(r, s.action));
              s = s.next;
            } while (null !== s && s !== a);
            null === u ? (o = r) : (u.next = l),
              Lr(r, t.memoizedState) || (Mi = !0),
              (t.memoizedState = r),
              (t.baseState = o),
              (t.baseQueue = u),
              (n.lastRenderedState = r);
          }
          return [t.memoizedState, n.dispatch];
        }
        function ti(e) {
          var t = Jo(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            o = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var l = (a = a.next);
            do {
              (o = e(o, l.action)), (l = l.next);
            } while (l !== a);
            Lr(o, t.memoizedState) || (Mi = !0),
              (t.memoizedState = o),
              null === t.baseQueue && (t.baseState = o),
              (n.lastRenderedState = o);
          }
          return [o, r];
        }
        function ni(e) {
          var t = Xo();
          return (
            "function" == typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = (e = t.queue =
              {
                pending: null,
                dispatch: null,
                lastRenderedReducer: Zo,
                lastRenderedState: e,
              }).dispatch =
              yi.bind(null, Vo, e)),
            [t.memoizedState, e]
          );
        }
        function ri(e, t, n, r) {
          return (
            (e = {
              tag: e,
              create: t,
              destroy: n,
              deps: r,
              next: null,
            }),
            null === (t = Vo.updateQueue)
              ? ((t = {
                  lastEffect: null,
                }),
                (Vo.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function ai() {
          return Jo().memoizedState;
        }
        function oi(e, t, n, r) {
          var a = Xo();
          (Vo.effectTag |= e),
            (a.memoizedState = ri(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function ii(e, t, n, r) {
          var a = Jo();
          r = void 0 === r ? null : r;
          var o = void 0;
          if (null !== Ho) {
            var i = Ho.memoizedState;
            if (((o = i.destroy), null !== r && qo(r, i.deps)))
              return void ri(t, n, o, r);
          }
          (Vo.effectTag |= e), (a.memoizedState = ri(1 | t, n, o, r));
        }
        function li(e, t) {
          return oi(516, 4, e, t);
        }
        function ui(e, t) {
          return ii(516, 4, e, t);
        }
        function si(e, t) {
          return ii(4, 2, e, t);
        }
        function ci(e, t) {
          return "function" == typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null != t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function fi(e, t, n) {
          return (
            (n = null != n ? n.concat([e]) : null),
            ii(4, 2, ci.bind(null, t, e), n)
          );
        }
        function pi() {}
        function di(e, t) {
          return (Xo().memoizedState = [e, void 0 === t ? null : t]), e;
        }
        function mi(e, t) {
          var n = Jo();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && qo(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function hi(e, t) {
          var n = Jo();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && qo(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function gi(e, t, n) {
          var r = $a();
          Va(98 > r ? 98 : r, function () {
            e(!0);
          }),
            Va(97 < r ? 97 : r, function () {
              var r = $o.suspense;
              $o.suspense = void 0 === t ? null : t;
              try {
                e(!1), n();
              } finally {
                $o.suspense = r;
              }
            });
        }
        function yi(e, t, n) {
          var r = ou(),
            a = ho.suspense;
          a = {
            expirationTime: (r = iu(r, e, a)),
            suspenseConfig: a,
            action: n,
            eagerReducer: null,
            eagerState: null,
            next: null,
          };
          var o = t.pending;
          if (
            (null === o ? (a.next = a) : ((a.next = o.next), (o.next = a)),
            (t.pending = a),
            (o = e.alternate),
            e === Vo || (null !== o && o === Vo))
          )
            (Go = !0), (a.expirationTime = Bo), (Vo.expirationTime = Bo);
          else {
            if (
              0 === e.expirationTime &&
              (null === o || 0 === o.expirationTime) &&
              null !== (o = t.lastRenderedReducer)
            )
              try {
                var i = t.lastRenderedState,
                  l = o(i, n);
                if (((a.eagerReducer = o), (a.eagerState = l), Lr(l, i)))
                  return;
              } catch (e) {}
            lu(e, r);
          }
        }
        var vi = {
            readContext: oo,
            useCallback: Ko,
            useContext: Ko,
            useEffect: Ko,
            useImperativeHandle: Ko,
            useLayoutEffect: Ko,
            useMemo: Ko,
            useReducer: Ko,
            useRef: Ko,
            useState: Ko,
            useDebugValue: Ko,
            useResponder: Ko,
            useDeferredValue: Ko,
            useTransition: Ko,
          },
          bi = {
            readContext: oo,
            useCallback: di,
            useContext: oo,
            useEffect: li,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null != n ? n.concat([e]) : null),
                oi(4, 2, ci.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return oi(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Xo();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = Xo();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = (e = r.queue =
                  {
                    pending: null,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t,
                  }).dispatch =
                  yi.bind(null, Vo, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (
                (e = {
                  current: e,
                }),
                (Xo().memoizedState = e)
              );
            },
            useState: ni,
            useDebugValue: pi,
            useResponder: Wo,
            useDeferredValue: function (e, t) {
              var n = ni(e),
                r = n[0],
                a = n[1];
              return (
                li(
                  function () {
                    var n = $o.suspense;
                    $o.suspense = void 0 === t ? null : t;
                    try {
                      a(e);
                    } finally {
                      $o.suspense = n;
                    }
                  },
                  [e, t]
                ),
                r
              );
            },
            useTransition: function (e) {
              var t = ni(!1),
                n = t[0];
              return (t = t[1]), [di(gi.bind(null, t, e), [t, e]), n];
            },
          },
          _i = {
            readContext: oo,
            useCallback: mi,
            useContext: oo,
            useEffect: ui,
            useImperativeHandle: fi,
            useLayoutEffect: si,
            useMemo: hi,
            useReducer: ei,
            useRef: ai,
            useState: function () {
              return ei(Zo);
            },
            useDebugValue: pi,
            useResponder: Wo,
            useDeferredValue: function (e, t) {
              var n = ei(Zo),
                r = n[0],
                a = n[1];
              return (
                ui(
                  function () {
                    var n = $o.suspense;
                    $o.suspense = void 0 === t ? null : t;
                    try {
                      a(e);
                    } finally {
                      $o.suspense = n;
                    }
                  },
                  [e, t]
                ),
                r
              );
            },
            useTransition: function (e) {
              var t = ei(Zo),
                n = t[0];
              return (t = t[1]), [mi(gi.bind(null, t, e), [t, e]), n];
            },
          },
          wi = {
            readContext: oo,
            useCallback: mi,
            useContext: oo,
            useEffect: ui,
            useImperativeHandle: fi,
            useLayoutEffect: si,
            useMemo: hi,
            useReducer: ti,
            useRef: ai,
            useState: function () {
              return ti(Zo);
            },
            useDebugValue: pi,
            useResponder: Wo,
            useDeferredValue: function (e, t) {
              var n = ti(Zo),
                r = n[0],
                a = n[1];
              return (
                ui(
                  function () {
                    var n = $o.suspense;
                    $o.suspense = void 0 === t ? null : t;
                    try {
                      a(e);
                    } finally {
                      $o.suspense = n;
                    }
                  },
                  [e, t]
                ),
                r
              );
            },
            useTransition: function (e) {
              var t = ti(Zo),
                n = t[0];
              return (t = t[1]), [mi(gi.bind(null, t, e), [t, e]), n];
            },
          },
          xi = null,
          Si = null,
          Ti = !1;
        function ki(e, t) {
          var n = ju(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.type = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            (n.effectTag = 8),
            null !== e.lastEffect
              ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
              : (e.firstEffect = e.lastEffect = n);
        }
        function Ei(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) && ((e.stateNode = t), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), !0)
              );
            default:
              return !1;
          }
        }
        function Ci(e) {
          if (Ti) {
            var t = Si;
            if (t) {
              var n = t;
              if (!Ei(e, t)) {
                if (!(t = Tn(n.nextSibling)) || !Ei(e, t))
                  return (
                    (e.effectTag = (-1025 & e.effectTag) | 2),
                    (Ti = !1),
                    void (xi = e)
                  );
                ki(xi, n);
              }
              (xi = e), (Si = Tn(t.firstChild));
            } else
              (e.effectTag = (-1025 & e.effectTag) | 2), (Ti = !1), (xi = e);
          }
        }
        function Pi(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          xi = e;
        }
        function Ni(e) {
          if (e !== xi) return !1;
          if (!Ti) return Pi(e), (Ti = !0), !1;
          var t = e.type;
          if (
            5 !== e.tag ||
            ("head" !== t && "body" !== t && !wn(t, e.memoizedProps))
          )
            for (t = Si; t; ) ki(e, t), (t = Tn(t.nextSibling));
          if ((Pi(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(i(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if (n === hn) {
                    if (0 === t) {
                      Si = Tn(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else (n !== mn && n !== yn && n !== gn) || t++;
                }
                e = e.nextSibling;
              }
              Si = null;
            }
          } else Si = xi ? Tn(e.stateNode.nextSibling) : null;
          return !0;
        }
        function Ii() {
          (Si = xi = null), (Ti = !1);
        }
        var Oi = Y.ReactCurrentOwner,
          Mi = !1;
        function zi(e, t, n, r) {
          t.child = null === e ? Po(t, null, n, r) : Co(t, e.child, n, r);
        }
        function Ai(e, t, n, r, a) {
          n = n.render;
          var o = t.ref;
          return (
            ao(t, a),
            (r = Yo(e, t, n, r, o, a)),
            null === e || Mi
              ? ((t.effectTag |= 1), zi(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.effectTag &= -517),
                e.expirationTime <= a && (e.expirationTime = 0),
                Xi(e, t, a))
          );
        }
        function Ri(e, t, n, r, a, o) {
          if (null === e) {
            var i = n.type;
            return "function" != typeof i ||
              Fu(i) ||
              void 0 !== i.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Lu(n.type, null, r, null, t.mode, o)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = i), ji(e, t, i, r, a, o));
          }
          return (
            (i = e.child),
            a < o &&
            ((a = i.memoizedProps),
            (n = null !== (n = n.compare) ? n : Ur)(a, r) && e.ref === t.ref)
              ? Xi(e, t, o)
              : ((t.effectTag |= 1),
                ((e = Du(i, r)).ref = t.ref),
                (e.return = t),
                (t.child = e))
          );
        }
        function ji(e, t, n, r, a, o) {
          return null !== e &&
            Ur(e.memoizedProps, r) &&
            e.ref === t.ref &&
            ((Mi = !1), a < o)
            ? ((t.expirationTime = e.expirationTime), Xi(e, t, o))
            : Di(e, t, n, r, o);
        }
        function Fi(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            (t.effectTag |= 128);
        }
        function Di(e, t, n, r, a) {
          var o = ya(n) ? ha : da.current;
          return (
            (o = ga(t, o)),
            ao(t, a),
            (n = Yo(e, t, n, r, o, a)),
            null === e || Mi
              ? ((t.effectTag |= 1), zi(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.effectTag &= -517),
                e.expirationTime <= a && (e.expirationTime = 0),
                Xi(e, t, a))
          );
        }
        function Li(e, t, n, r, a) {
          if (ya(n)) {
            var o = !0;
            wa(t);
          } else o = !1;
          if ((ao(t, a), null === t.stateNode))
            null !== e &&
              ((e.alternate = null), (t.alternate = null), (t.effectTag |= 2)),
              _o(t, n, r),
              xo(t, n, r, a),
              (r = !0);
          else if (null === e) {
            var i = t.stateNode,
              l = t.memoizedProps;
            i.props = l;
            var u = i.context,
              s = n.contextType;
            s =
              "object" == typeof s && null !== s
                ? oo(s)
                : ga(t, (s = ya(n) ? ha : da.current));
            var c = n.getDerivedStateFromProps,
              f =
                "function" == typeof c ||
                "function" == typeof i.getSnapshotBeforeUpdate;
            f ||
              ("function" != typeof i.UNSAFE_componentWillReceiveProps &&
                "function" != typeof i.componentWillReceiveProps) ||
              ((l !== r || u !== s) && wo(t, i, r, s)),
              (io = !1);
            var p = t.memoizedState;
            (i.state = p),
              po(t, r, i, a),
              (u = t.memoizedState),
              l !== r || p !== u || ma.current || io
                ? ("function" == typeof c &&
                    (yo(t, n, c, r), (u = t.memoizedState)),
                  (l = io || bo(t, n, l, r, p, u, s))
                    ? (f ||
                        ("function" != typeof i.UNSAFE_componentWillMount &&
                          "function" != typeof i.componentWillMount) ||
                        ("function" == typeof i.componentWillMount &&
                          i.componentWillMount(),
                        "function" == typeof i.UNSAFE_componentWillMount &&
                          i.UNSAFE_componentWillMount()),
                      "function" == typeof i.componentDidMount &&
                        (t.effectTag |= 4))
                    : ("function" == typeof i.componentDidMount &&
                        (t.effectTag |= 4),
                      (t.memoizedProps = r),
                      (t.memoizedState = u)),
                  (i.props = r),
                  (i.state = u),
                  (i.context = s),
                  (r = l))
                : ("function" == typeof i.componentDidMount &&
                    (t.effectTag |= 4),
                  (r = !1));
          } else
            (i = t.stateNode),
              uo(e, t),
              (l = t.memoizedProps),
              (i.props = t.type === t.elementType ? l : Ya(t.type, l)),
              (u = i.context),
              (s =
                "object" == typeof (s = n.contextType) && null !== s
                  ? oo(s)
                  : ga(t, (s = ya(n) ? ha : da.current))),
              (f =
                "function" == typeof (c = n.getDerivedStateFromProps) ||
                "function" == typeof i.getSnapshotBeforeUpdate) ||
                ("function" != typeof i.UNSAFE_componentWillReceiveProps &&
                  "function" != typeof i.componentWillReceiveProps) ||
                ((l !== r || u !== s) && wo(t, i, r, s)),
              (io = !1),
              (u = t.memoizedState),
              (i.state = u),
              po(t, r, i, a),
              (p = t.memoizedState),
              l !== r || u !== p || ma.current || io
                ? ("function" == typeof c &&
                    (yo(t, n, c, r), (p = t.memoizedState)),
                  (c = io || bo(t, n, l, r, u, p, s))
                    ? (f ||
                        ("function" != typeof i.UNSAFE_componentWillUpdate &&
                          "function" != typeof i.componentWillUpdate) ||
                        ("function" == typeof i.componentWillUpdate &&
                          i.componentWillUpdate(r, p, s),
                        "function" == typeof i.UNSAFE_componentWillUpdate &&
                          i.UNSAFE_componentWillUpdate(r, p, s)),
                      "function" == typeof i.componentDidUpdate &&
                        (t.effectTag |= 4),
                      "function" == typeof i.getSnapshotBeforeUpdate &&
                        (t.effectTag |= 256))
                    : ("function" != typeof i.componentDidUpdate ||
                        (l === e.memoizedProps && u === e.memoizedState) ||
                        (t.effectTag |= 4),
                      "function" != typeof i.getSnapshotBeforeUpdate ||
                        (l === e.memoizedProps && u === e.memoizedState) ||
                        (t.effectTag |= 256),
                      (t.memoizedProps = r),
                      (t.memoizedState = p)),
                  (i.props = r),
                  (i.state = p),
                  (i.context = s),
                  (r = c))
                : ("function" != typeof i.componentDidUpdate ||
                    (l === e.memoizedProps && u === e.memoizedState) ||
                    (t.effectTag |= 4),
                  "function" != typeof i.getSnapshotBeforeUpdate ||
                    (l === e.memoizedProps && u === e.memoizedState) ||
                    (t.effectTag |= 256),
                  (r = !1));
          return Wi(e, t, n, r, o, a);
        }
        function Wi(e, t, n, r, a, o) {
          Fi(e, t);
          var i = 0 != (64 & t.effectTag);
          if (!r && !i) return a && xa(t, n, !1), Xi(e, t, o);
          (r = t.stateNode), (Oi.current = t);
          var l =
            i && "function" != typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.effectTag |= 1),
            null !== e && i
              ? ((t.child = Co(t, e.child, null, o)),
                (t.child = Co(t, null, l, o)))
              : zi(e, t, l, o),
            (t.memoizedState = r.state),
            a && xa(t, n, !0),
            t.child
          );
        }
        function Ui(e) {
          var t = e.stateNode;
          t.pendingContext
            ? ba(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && ba(0, t.context, !1),
            Ao(e, t.containerInfo);
        }
        var $i,
          Bi,
          Vi,
          Hi,
          Qi = {
            dehydrated: null,
            retryTime: 0,
          };
        function Gi(e, t, n) {
          var r,
            a = t.mode,
            o = t.pendingProps,
            i = Do.current,
            l = !1;
          if (
            ((r = 0 != (64 & t.effectTag)) ||
              (r = 0 != (2 & i) && (null === e || null !== e.memoizedState)),
            r
              ? ((l = !0), (t.effectTag &= -65))
              : (null !== e && null === e.memoizedState) ||
                void 0 === o.fallback ||
                !0 === o.unstable_avoidThisFallback ||
                (i |= 1),
            fa(Do, 1 & i),
            null === e)
          ) {
            if ((void 0 !== o.fallback && Ci(t), l)) {
              if (
                ((l = o.fallback),
                ((o = Wu(null, a, 0, null)).return = t),
                0 == (2 & t.mode))
              )
                for (
                  e = null !== t.memoizedState ? t.child.child : t.child,
                    o.child = e;
                  null !== e;

                )
                  (e.return = o), (e = e.sibling);
              return (
                ((n = Wu(l, a, n, null)).return = t),
                (o.sibling = n),
                (t.memoizedState = Qi),
                (t.child = o),
                n
              );
            }
            return (
              (a = o.children),
              (t.memoizedState = null),
              (t.child = Po(t, null, a, n))
            );
          }
          if (null !== e.memoizedState) {
            if (((a = (e = e.child).sibling), l)) {
              if (
                ((o = o.fallback),
                ((n = Du(e, e.pendingProps)).return = t),
                0 == (2 & t.mode) &&
                  (l = null !== t.memoizedState ? t.child.child : t.child) !==
                    e.child)
              )
                for (n.child = l; null !== l; ) (l.return = n), (l = l.sibling);
              return (
                ((a = Du(a, o)).return = t),
                (n.sibling = a),
                (n.childExpirationTime = 0),
                (t.memoizedState = Qi),
                (t.child = n),
                a
              );
            }
            return (
              (n = Co(t, e.child, o.children, n)),
              (t.memoizedState = null),
              (t.child = n)
            );
          }
          if (((e = e.child), l)) {
            if (
              ((l = o.fallback),
              ((o = Wu(null, a, 0, null)).return = t),
              (o.child = e),
              null !== e && (e.return = o),
              0 == (2 & t.mode))
            )
              for (
                e = null !== t.memoizedState ? t.child.child : t.child,
                  o.child = e;
                null !== e;

              )
                (e.return = o), (e = e.sibling);
            return (
              ((n = Wu(l, a, n, null)).return = t),
              (o.sibling = n),
              (n.effectTag |= 2),
              (o.childExpirationTime = 0),
              (t.memoizedState = Qi),
              (t.child = o),
              n
            );
          }
          return (t.memoizedState = null), (t.child = Co(t, e, o.children, n));
        }
        function Ki(e, t) {
          e.expirationTime < t && (e.expirationTime = t);
          var n = e.alternate;
          null !== n && n.expirationTime < t && (n.expirationTime = t),
            ro(e.return, t);
        }
        function qi(e, t, n, r, a, o) {
          var i = e.memoizedState;
          null === i
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailExpiration: 0,
                tailMode: a,
                lastEffect: o,
              })
            : ((i.isBackwards = t),
              (i.rendering = null),
              (i.renderingStartTime = 0),
              (i.last = r),
              (i.tail = n),
              (i.tailExpiration = 0),
              (i.tailMode = a),
              (i.lastEffect = o));
        }
        function Yi(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            o = r.tail;
          if ((zi(e, t, r.children, n), 0 != (2 & (r = Do.current))))
            (r = (1 & r) | 2), (t.effectTag |= 64);
          else {
            if (null !== e && 0 != (64 & e.effectTag))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Ki(e, n);
                else if (19 === e.tag) Ki(e, n);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((fa(Do, r), 0 == (2 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === Lo(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  qi(t, !1, a, n, o, t.lastEffect);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === Lo(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                qi(t, !0, n, null, o, t.lastEffect);
                break;
              case "together":
                qi(t, !1, null, null, void 0, t.lastEffect);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Xi(e, t, n) {
          null !== e && (t.dependencies = e.dependencies);
          var r = t.expirationTime;
          if ((0 !== r && vu(r), t.childExpirationTime < n)) return null;
          if (null !== e && t.child !== e.child) throw Error(i(153));
          if (null !== t.child) {
            for (
              n = Du((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Du(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Ji(e, t) {
          switch (e.tailMode) {
            case "hidden":
              t = e.tail;
              for (var n = null; null !== t; )
                null !== t.alternate && (n = t), (t = t.sibling);
              null === n ? (e.tail = null) : (n.sibling = null);
              break;
            case "collapsed":
              n = e.tail;
              for (var r = null; null !== n; )
                null !== n.alternate && (r = n), (n = n.sibling);
              null === r
                ? t || null === e.tail
                  ? (e.tail = null)
                  : (e.tail.sibling = null)
                : (r.sibling = null);
          }
        }
        function Zi(e, t, n) {
          var r = t.pendingProps;
          switch (t.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return null;
            case 1:
            case 17:
              return ya(t.type) && va(), null;
            case 3:
              return (
                Ro(),
                ca(ma),
                ca(da),
                (n = t.stateNode).pendingContext &&
                  ((n.context = n.pendingContext), (n.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  !Ni(t) ||
                  (t.effectTag |= 4),
                Bi(t),
                null
              );
            case 5:
              Fo(t), (n = zo(Mo.current));
              var o = t.type;
              if (null !== e && null != t.stateNode)
                Vi(e, t, o, r, n), e.ref !== t.ref && (t.effectTag |= 128);
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(i(166));
                  return null;
                }
                if (((e = zo(Io.current)), Ni(t))) {
                  (r = t.stateNode), (o = t.type);
                  var l = t.memoizedProps;
                  switch (((r[Cn] = t), (r[Pn] = l), o)) {
                    case "iframe":
                    case "object":
                    case "embed":
                      Ht("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (e = 0; e < qe.length; e++) Ht(qe[e], r);
                      break;
                    case "source":
                      Ht("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Ht("error", r), Ht("load", r);
                      break;
                    case "form":
                      Ht("reset", r), Ht("submit", r);
                      break;
                    case "details":
                      Ht("toggle", r);
                      break;
                    case "input":
                      Se(r, l), Ht("invalid", r), on(n, "onChange");
                      break;
                    case "select":
                      (r._wrapperState = {
                        wasMultiple: !!l.multiple,
                      }),
                        Ht("invalid", r),
                        on(n, "onChange");
                      break;
                    case "textarea":
                      Oe(r, l), Ht("invalid", r), on(n, "onChange");
                  }
                  for (var u in (nn(o, l), (e = null), l))
                    if (l.hasOwnProperty(u)) {
                      var s = l[u];
                      "children" === u
                        ? "string" == typeof s
                          ? r.textContent !== s && (e = ["children", s])
                          : "number" == typeof s &&
                            r.textContent !== "" + s &&
                            (e = ["children", "" + s])
                        : T.hasOwnProperty(u) && null != s && on(n, u);
                    }
                  switch (o) {
                    case "input":
                      _e(r), Ee(r, l, !0);
                      break;
                    case "textarea":
                      _e(r), ze(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" == typeof l.onClick && (r.onclick = ln);
                  }
                  (n = e),
                    (t.updateQueue = n),
                    null !== n && (t.effectTag |= 4);
                } else {
                  switch (
                    ((u = 9 === n.nodeType ? n : n.ownerDocument),
                    e === an && (e = Ae(o)),
                    e === an
                      ? "script" === o
                        ? (((e = u.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" == typeof r.is
                        ? (e = u.createElement(o, {
                            is: r.is,
                          }))
                        : ((e = u.createElement(o)),
                          "select" === o &&
                            ((u = e),
                            r.multiple
                              ? (u.multiple = !0)
                              : r.size && (u.size = r.size)))
                      : (e = u.createElementNS(e, o)),
                    (e[Cn] = t),
                    (e[Pn] = r),
                    $i(e, t, !1, !1),
                    (t.stateNode = e),
                    (u = rn(o, r)),
                    o)
                  ) {
                    case "iframe":
                    case "object":
                    case "embed":
                      Ht("load", e), (s = r);
                      break;
                    case "video":
                    case "audio":
                      for (s = 0; s < qe.length; s++) Ht(qe[s], e);
                      s = r;
                      break;
                    case "source":
                      Ht("error", e), (s = r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Ht("error", e), Ht("load", e), (s = r);
                      break;
                    case "form":
                      Ht("reset", e), Ht("submit", e), (s = r);
                      break;
                    case "details":
                      Ht("toggle", e), (s = r);
                      break;
                    case "input":
                      Se(e, r),
                        (s = xe(e, r)),
                        Ht("invalid", e),
                        on(n, "onChange");
                      break;
                    case "option":
                      s = Pe(e, r);
                      break;
                    case "select":
                      (e._wrapperState = {
                        wasMultiple: !!r.multiple,
                      }),
                        (s = a({}, r, {
                          value: void 0,
                        })),
                        Ht("invalid", e),
                        on(n, "onChange");
                      break;
                    case "textarea":
                      Oe(e, r),
                        (s = Ie(e, r)),
                        Ht("invalid", e),
                        on(n, "onChange");
                      break;
                    default:
                      s = r;
                  }
                  nn(o, s);
                  var c = s;
                  for (l in c)
                    if (c.hasOwnProperty(l)) {
                      var f = c[l];
                      "style" === l
                        ? en(e, f)
                        : "dangerouslySetInnerHTML" === l
                        ? null != (f = f ? f.__html : void 0) && De(e, f)
                        : "children" === l
                        ? "string" == typeof f
                          ? ("textarea" !== o || "" !== f) && Le(e, f)
                          : "number" == typeof f && Le(e, "" + f)
                        : "suppressContentEditableWarning" !== l &&
                          "suppressHydrationWarning" !== l &&
                          "autoFocus" !== l &&
                          (T.hasOwnProperty(l)
                            ? null != f && on(n, l)
                            : null != f && X(e, l, f, u));
                    }
                  switch (o) {
                    case "input":
                      _e(e), Ee(e, r, !1);
                      break;
                    case "textarea":
                      _e(e), ze(e);
                      break;
                    case "option":
                      null != r.value &&
                        e.setAttribute("value", "" + ve(r.value));
                      break;
                    case "select":
                      (e.multiple = !!r.multiple),
                        null != (n = r.value)
                          ? Ne(e, !!r.multiple, n, !1)
                          : null != r.defaultValue &&
                            Ne(e, !!r.multiple, r.defaultValue, !0);
                      break;
                    default:
                      "function" == typeof s.onClick && (e.onclick = ln);
                  }
                  _n(o, r) && (t.effectTag |= 4);
                }
                null !== t.ref && (t.effectTag |= 128);
              }
              return null;
            case 6:
              if (e && null != t.stateNode) Hi(e, t, e.memoizedProps, r);
              else {
                if ("string" != typeof r && null === t.stateNode)
                  throw Error(i(166));
                (n = zo(Mo.current)),
                  zo(Io.current),
                  Ni(t)
                    ? ((n = t.stateNode),
                      (r = t.memoizedProps),
                      (n[Cn] = t),
                      n.nodeValue !== r && (t.effectTag |= 4))
                    : (((n = (
                        9 === n.nodeType ? n : n.ownerDocument
                      ).createTextNode(r))[Cn] = t),
                      (t.stateNode = n));
              }
              return null;
            case 13:
              return (
                ca(Do),
                (r = t.memoizedState),
                0 != (64 & t.effectTag)
                  ? ((t.expirationTime = n), t)
                  : ((n = null !== r),
                    (r = !1),
                    null === e
                      ? void 0 !== t.memoizedProps.fallback && Ni(t)
                      : ((r = null !== (o = e.memoizedState)),
                        n ||
                          null === o ||
                          (null !== (o = e.child.sibling) &&
                            (null !== (l = t.firstEffect)
                              ? ((t.firstEffect = o), (o.nextEffect = l))
                              : ((t.firstEffect = t.lastEffect = o),
                                (o.nextEffect = null)),
                            (o.effectTag = 8)))),
                    n &&
                      !r &&
                      0 != (2 & t.mode) &&
                      ((null === e &&
                        !0 !== t.memoizedProps.unstable_avoidThisFallback) ||
                      0 != (1 & Do.current)
                        ? Ll === Nl && (Ll = Ml)
                        : ((Ll !== Nl && Ll !== Ml) || (Ll = zl),
                          0 !== Vl && null !== jl && (Hu(jl, Dl), Qu(jl, Vl)))),
                    (n || r) && (t.effectTag |= 4),
                    null)
              );
            case 4:
              return Ro(), Bi(t), null;
            case 10:
              return no(t), null;
            case 19:
              if ((ca(Do), null === (r = t.memoizedState))) return null;
              if (((o = 0 != (64 & t.effectTag)), null === (l = r.rendering))) {
                if (o) Ji(r, !1);
                else if (Ll !== Nl || (null !== e && 0 != (64 & e.effectTag)))
                  for (l = t.child; null !== l; ) {
                    if (null !== (e = Lo(l))) {
                      for (
                        t.effectTag |= 64,
                          Ji(r, !1),
                          null !== (o = e.updateQueue) &&
                            ((t.updateQueue = o), (t.effectTag |= 4)),
                          null === r.lastEffect && (t.firstEffect = null),
                          t.lastEffect = r.lastEffect,
                          r = t.child;
                        null !== r;

                      )
                        (l = n),
                          ((o = r).effectTag &= 2),
                          (o.nextEffect = null),
                          (o.firstEffect = null),
                          (o.lastEffect = null),
                          null === (e = o.alternate)
                            ? ((o.childExpirationTime = 0),
                              (o.expirationTime = l),
                              (o.child = null),
                              (o.memoizedProps = null),
                              (o.memoizedState = null),
                              (o.updateQueue = null),
                              (o.dependencies = null))
                            : ((o.childExpirationTime = e.childExpirationTime),
                              (o.expirationTime = e.expirationTime),
                              (o.child = e.child),
                              (o.memoizedProps = e.memoizedProps),
                              (o.memoizedState = e.memoizedState),
                              (o.updateQueue = e.updateQueue),
                              (l = e.dependencies),
                              (o.dependencies =
                                null === l
                                  ? null
                                  : {
                                      expirationTime: l.expirationTime,
                                      firstContext: l.firstContext,
                                      responders: l.responders,
                                    })),
                          (r = r.sibling);
                      return fa(Do, (1 & Do.current) | 2), t.child;
                    }
                    l = l.sibling;
                  }
              } else {
                if (!o)
                  if (null !== (e = Lo(l))) {
                    if (
                      ((t.effectTag |= 64),
                      (o = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.effectTag |= 4)),
                      Ji(r, !0),
                      null === r.tail &&
                        "hidden" === r.tailMode &&
                        !l.alternate)
                    )
                      return (
                        null !== (t = t.lastEffect = r.lastEffect) &&
                          (t.nextEffect = null),
                        null
                      );
                  } else
                    2 * Ua() - r.renderingStartTime > r.tailExpiration &&
                      1 < n &&
                      ((t.effectTag |= 64),
                      (o = !0),
                      Ji(r, !1),
                      (t.expirationTime = t.childExpirationTime = n - 1));
                r.isBackwards
                  ? ((l.sibling = t.child), (t.child = l))
                  : (null !== (n = r.last) ? (n.sibling = l) : (t.child = l),
                    (r.last = l));
              }
              return null !== r.tail
                ? (0 === r.tailExpiration && (r.tailExpiration = Ua() + 500),
                  (n = r.tail),
                  (r.rendering = n),
                  (r.tail = n.sibling),
                  (r.lastEffect = t.lastEffect),
                  (r.renderingStartTime = Ua()),
                  (n.sibling = null),
                  (t = Do.current),
                  fa(Do, o ? (1 & t) | 2 : 1 & t),
                  n)
                : null;
          }
          throw Error(i(156, t.tag));
        }
        function el(e) {
          switch (e.tag) {
            case 1:
              ya(e.type) && va();
              var t = e.effectTag;
              return 4096 & t ? ((e.effectTag = (-4097 & t) | 64), e) : null;
            case 3:
              if ((Ro(), ca(ma), ca(da), 0 != (64 & (t = e.effectTag))))
                throw Error(i(285));
              return (e.effectTag = (-4097 & t) | 64), e;
            case 5:
              return Fo(e), null;
            case 13:
              return (
                ca(Do),
                4096 & (t = e.effectTag)
                  ? ((e.effectTag = (-4097 & t) | 64), e)
                  : null
              );
            case 19:
              return ca(Do), null;
            case 4:
              return Ro(), null;
            case 10:
              return no(e), null;
            default:
              return null;
          }
        }
        function tl(e, t) {
          return {
            value: e,
            source: t,
            stack: ye(t),
          };
        }
        ($i = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Bi = function () {}),
          (Vi = function (e, t, n, r, o) {
            var i = e.memoizedProps;
            if (i !== r) {
              var l,
                u,
                s = t.stateNode;
              switch ((zo(Io.current), (e = null), n)) {
                case "input":
                  (i = xe(s, i)), (r = xe(s, r)), (e = []);
                  break;
                case "option":
                  (i = Pe(s, i)), (r = Pe(s, r)), (e = []);
                  break;
                case "select":
                  (i = a({}, i, {
                    value: void 0,
                  })),
                    (r = a({}, r, {
                      value: void 0,
                    })),
                    (e = []);
                  break;
                case "textarea":
                  (i = Ie(s, i)), (r = Ie(s, r)), (e = []);
                  break;
                default:
                  "function" != typeof i.onClick &&
                    "function" == typeof r.onClick &&
                    (s.onclick = ln);
              }
              for (l in (nn(n, r), (n = null), i))
                if (!r.hasOwnProperty(l) && i.hasOwnProperty(l) && null != i[l])
                  if ("style" === l)
                    for (u in (s = i[l]))
                      s.hasOwnProperty(u) && (n || (n = {}), (n[u] = ""));
                  else
                    "dangerouslySetInnerHTML" !== l &&
                      "children" !== l &&
                      "suppressContentEditableWarning" !== l &&
                      "suppressHydrationWarning" !== l &&
                      "autoFocus" !== l &&
                      (T.hasOwnProperty(l)
                        ? e || (e = [])
                        : (e = e || []).push(l, null));
              for (l in r) {
                var c = r[l];
                if (
                  ((s = null != i ? i[l] : void 0),
                  r.hasOwnProperty(l) && c !== s && (null != c || null != s))
                )
                  if ("style" === l)
                    if (s) {
                      for (u in s)
                        !s.hasOwnProperty(u) ||
                          (c && c.hasOwnProperty(u)) ||
                          (n || (n = {}), (n[u] = ""));
                      for (u in c)
                        c.hasOwnProperty(u) &&
                          s[u] !== c[u] &&
                          (n || (n = {}), (n[u] = c[u]));
                    } else n || (e || (e = []), e.push(l, n)), (n = c);
                  else
                    "dangerouslySetInnerHTML" === l
                      ? ((c = c ? c.__html : void 0),
                        (s = s ? s.__html : void 0),
                        null != c && s !== c && (e = e || []).push(l, c))
                      : "children" === l
                      ? s === c ||
                        ("string" != typeof c && "number" != typeof c) ||
                        (e = e || []).push(l, "" + c)
                      : "suppressContentEditableWarning" !== l &&
                        "suppressHydrationWarning" !== l &&
                        (T.hasOwnProperty(l)
                          ? (null != c && on(o, l), e || s === c || (e = []))
                          : (e = e || []).push(l, c));
              }
              n && (e = e || []).push("style", n),
                (o = e),
                (t.updateQueue = o) && (t.effectTag |= 4);
            }
          }),
          (Hi = function (e, t, n, r) {
            n !== r && (t.effectTag |= 4);
          });
        var nl = "function" == typeof WeakSet ? WeakSet : Set;
        function rl(e, t) {
          var n = t.source,
            r = t.stack;
          null === r && null !== n && (r = ye(n)),
            null !== n && ge(n.type),
            (t = t.value),
            null !== e && 1 === e.tag && ge(e.type);
          try {
            console.error(t);
          } catch (e) {
            setTimeout(function () {
              throw e;
            });
          }
        }
        function al(e) {
          var t = e.ref;
          if (null !== t)
            if ("function" == typeof t)
              try {
                t(null);
              } catch (t) {
                Iu(e, t);
              }
            else t.current = null;
        }
        function ol(e, t) {
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
            case 3:
            case 5:
            case 6:
            case 4:
            case 17:
              return;
            case 1:
              if (256 & t.effectTag && null !== e) {
                var n = e.memoizedProps,
                  r = e.memoizedState;
                (t = (e = t.stateNode).getSnapshotBeforeUpdate(
                  t.elementType === t.type ? n : Ya(t.type, n),
                  r
                )),
                  (e.__reactInternalSnapshotBeforeUpdate = t);
              }
              return;
          }
          throw Error(i(163));
        }
        function il(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.destroy;
                (n.destroy = void 0), void 0 !== r && r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function ll(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function ul(e, t, n) {
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
              return void ll(3, n);
            case 1:
              if (((e = n.stateNode), 4 & n.effectTag))
                if (null === t) e.componentDidMount();
                else {
                  var r =
                    n.elementType === n.type
                      ? t.memoizedProps
                      : Ya(n.type, t.memoizedProps);
                  e.componentDidUpdate(
                    r,
                    t.memoizedState,
                    e.__reactInternalSnapshotBeforeUpdate
                  );
                }
              return void (null !== (t = n.updateQueue) && mo(n, t, e));
            case 3:
              if (null !== (t = n.updateQueue)) {
                if (((e = null), null !== n.child))
                  switch (n.child.tag) {
                    case 5:
                    case 1:
                      e = n.child.stateNode;
                  }
                mo(n, t, e);
              }
              return;
            case 5:
              return (
                (e = n.stateNode),
                void (
                  null === t &&
                  4 & n.effectTag &&
                  _n(n.type, n.memoizedProps) &&
                  e.focus()
                )
              );
            case 6:
            case 4:
            case 12:
            case 19:
            case 17:
            case 20:
            case 21:
              return;
            case 13:
              return void (
                null === n.memoizedState &&
                ((n = n.alternate),
                null !== n &&
                  ((n = n.memoizedState),
                  null !== n && ((n = n.dehydrated), null !== n && At(n))))
              );
          }
          throw Error(i(163));
        }
        function sl(e, t, n) {
          switch (("function" == typeof Au && Au(t), t.tag)) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
              if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                var r = e.next;
                Va(97 < n ? 97 : n, function () {
                  var e = r;
                  do {
                    var n = e.destroy;
                    if (void 0 !== n) {
                      var a = t;
                      try {
                        n();
                      } catch (e) {
                        Iu(a, e);
                      }
                    }
                    e = e.next;
                  } while (e !== r);
                });
              }
              break;
            case 1:
              al(t),
                "function" == typeof (n = t.stateNode).componentWillUnmount &&
                  (function (e, t) {
                    try {
                      (t.props = e.memoizedProps),
                        (t.state = e.memoizedState),
                        t.componentWillUnmount();
                    } catch (t) {
                      Iu(e, t);
                    }
                  })(t, n);
              break;
            case 5:
              al(t);
              break;
            case 4:
              hl(e, t, n);
          }
        }
        function cl(e) {
          var t = e.alternate;
          (e.return = null),
            (e.child = null),
            (e.memoizedState = null),
            (e.updateQueue = null),
            (e.dependencies = null),
            (e.alternate = null),
            (e.firstEffect = null),
            (e.lastEffect = null),
            (e.pendingProps = null),
            (e.memoizedProps = null),
            (e.stateNode = null),
            null !== t && cl(t);
        }
        function fl(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function pl(e) {
          e: {
            for (var t = e.return; null !== t; ) {
              if (fl(t)) {
                var n = t;
                break e;
              }
              t = t.return;
            }
            throw Error(i(160));
          }
          switch (((t = n.stateNode), n.tag)) {
            case 5:
              var r = !1;
              break;
            case 3:
            case 4:
              (t = t.containerInfo), (r = !0);
              break;
            default:
              throw Error(i(161));
          }
          16 & n.effectTag && (Le(t, ""), (n.effectTag &= -17));
          e: t: for (n = e; ; ) {
            for (; null === n.sibling; ) {
              if (null === n.return || fl(n.return)) {
                n = null;
                break e;
              }
              n = n.return;
            }
            for (
              n.sibling.return = n.return, n = n.sibling;
              5 !== n.tag && 6 !== n.tag && 18 !== n.tag;

            ) {
              if (2 & n.effectTag) continue t;
              if (null === n.child || 4 === n.tag) continue t;
              (n.child.return = n), (n = n.child);
            }
            if (!(2 & n.effectTag)) {
              n = n.stateNode;
              break e;
            }
          }
          r ? dl(e, n, t) : ml(e, n, t);
        }
        function dl(e, t, n) {
          var r = e.tag,
            a = 5 === r || 6 === r;
          if (a)
            (e = a ? e.stateNode : e.stateNode.instance),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  null != (n = n._reactRootContainer) ||
                    null !== t.onclick ||
                    (t.onclick = ln));
          else if (4 !== r && null !== (e = e.child))
            for (dl(e, t, n), e = e.sibling; null !== e; )
              dl(e, t, n), (e = e.sibling);
        }
        function ml(e, t, n) {
          var r = e.tag,
            a = 5 === r || 6 === r;
          if (a)
            (e = a ? e.stateNode : e.stateNode.instance),
              t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (ml(e, t, n), e = e.sibling; null !== e; )
              ml(e, t, n), (e = e.sibling);
        }
        function hl(e, t, n) {
          for (var r, a, o = t, l = !1; ; ) {
            if (!l) {
              l = o.return;
              e: for (;;) {
                if (null === l) throw Error(i(160));
                switch (((r = l.stateNode), l.tag)) {
                  case 5:
                    a = !1;
                    break e;
                  case 3:
                  case 4:
                    (r = r.containerInfo), (a = !0);
                    break e;
                }
                l = l.return;
              }
              l = !0;
            }
            if (5 === o.tag || 6 === o.tag) {
              e: for (var u = e, s = o, c = n, f = s; ; )
                if ((sl(u, f, c), null !== f.child && 4 !== f.tag))
                  (f.child.return = f), (f = f.child);
                else {
                  if (f === s) break e;
                  for (; null === f.sibling; ) {
                    if (null === f.return || f.return === s) break e;
                    f = f.return;
                  }
                  (f.sibling.return = f.return), (f = f.sibling);
                }
              a
                ? ((u = r),
                  (s = o.stateNode),
                  8 === u.nodeType
                    ? u.parentNode.removeChild(s)
                    : u.removeChild(s))
                : r.removeChild(o.stateNode);
            } else if (4 === o.tag) {
              if (null !== o.child) {
                (r = o.stateNode.containerInfo),
                  (a = !0),
                  (o.child.return = o),
                  (o = o.child);
                continue;
              }
            } else if ((sl(e, o, n), null !== o.child)) {
              (o.child.return = o), (o = o.child);
              continue;
            }
            if (o === t) break;
            for (; null === o.sibling; ) {
              if (null === o.return || o.return === t) return;
              4 === (o = o.return).tag && (l = !1);
            }
            (o.sibling.return = o.return), (o = o.sibling);
          }
        }
        function gl(e, t) {
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
              return void il(3, t);
            case 1:
            case 12:
            case 17:
              return;
            case 5:
              var n = t.stateNode;
              if (null != n) {
                var r = t.memoizedProps,
                  a = null !== e ? e.memoizedProps : r;
                e = t.type;
                var o = t.updateQueue;
                if (((t.updateQueue = null), null !== o)) {
                  for (
                    n[Pn] = r,
                      "input" === e &&
                        "radio" === r.type &&
                        null != r.name &&
                        Te(n, r),
                      rn(e, a),
                      t = rn(e, r),
                      a = 0;
                    a < o.length;
                    a += 2
                  ) {
                    var l = o[a],
                      u = o[a + 1];
                    "style" === l
                      ? en(n, u)
                      : "dangerouslySetInnerHTML" === l
                      ? De(n, u)
                      : "children" === l
                      ? Le(n, u)
                      : X(n, l, u, t);
                  }
                  switch (e) {
                    case "input":
                      ke(n, r);
                      break;
                    case "textarea":
                      Me(n, r);
                      break;
                    case "select":
                      (t = n._wrapperState.wasMultiple),
                        (n._wrapperState.wasMultiple = !!r.multiple),
                        null != (e = r.value)
                          ? Ne(n, !!r.multiple, e, !1)
                          : t !== !!r.multiple &&
                            (null != r.defaultValue
                              ? Ne(n, !!r.multiple, r.defaultValue, !0)
                              : Ne(n, !!r.multiple, r.multiple ? [] : "", !1));
                  }
                }
              }
              return;
            case 6:
              if (null === t.stateNode) throw Error(i(162));
              return void (t.stateNode.nodeValue = t.memoizedProps);
            case 3:
              return void (
                (t = t.stateNode).hydrate &&
                ((t.hydrate = !1), At(t.containerInfo))
              );
            case 13:
              if (
                ((n = t),
                null === t.memoizedState
                  ? (r = !1)
                  : ((r = !0), (n = t.child), (Ql = Ua())),
                null !== n)
              )
                e: for (e = n; ; ) {
                  if (5 === e.tag)
                    (o = e.stateNode),
                      r
                        ? "function" == typeof (o = o.style).setProperty
                          ? o.setProperty("display", "none", "important")
                          : (o.display = "none")
                        : ((o = e.stateNode),
                          (a =
                            null != (a = e.memoizedProps.style) &&
                            a.hasOwnProperty("display")
                              ? a.display
                              : null),
                          (o.style.display = Zt("display", a)));
                  else if (6 === e.tag)
                    e.stateNode.nodeValue = r ? "" : e.memoizedProps;
                  else {
                    if (
                      13 === e.tag &&
                      null !== e.memoizedState &&
                      null === e.memoizedState.dehydrated
                    ) {
                      ((o = e.child.sibling).return = e), (e = o);
                      continue;
                    }
                    if (null !== e.child) {
                      (e.child.return = e), (e = e.child);
                      continue;
                    }
                  }
                  if (e === n) break;
                  for (; null === e.sibling; ) {
                    if (null === e.return || e.return === n) break e;
                    e = e.return;
                  }
                  (e.sibling.return = e.return), (e = e.sibling);
                }
              return void yl(t);
            case 19:
              return void yl(t);
          }
          throw Error(i(163));
        }
        function yl(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new nl()),
              t.forEach(function (t) {
                var r = Mu.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        var vl = "function" == typeof WeakMap ? WeakMap : Map;
        function bl(e, t, n) {
          ((n = so(n, null)).tag = 3),
            (n.payload = {
              element: null,
            });
          var r = t.value;
          return (
            (n.callback = function () {
              ql || ((ql = !0), (Yl = r)), rl(e, t);
            }),
            n
          );
        }
        function _l(e, t, n) {
          (n = so(n, null)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" == typeof r) {
            var a = t.value;
            n.payload = function () {
              return rl(e, t), r(a);
            };
          }
          var o = e.stateNode;
          return (
            null !== o &&
              "function" == typeof o.componentDidCatch &&
              (n.callback = function () {
                "function" != typeof r &&
                  (null === Xl ? (Xl = new Set([this])) : Xl.add(this),
                  rl(e, t));
                var n = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== n ? n : "",
                });
              }),
            n
          );
        }
        var wl,
          xl = Math.ceil,
          Sl = Y.ReactCurrentDispatcher,
          Tl = Y.ReactCurrentOwner,
          kl = 0,
          El = 8,
          Cl = 16,
          Pl = 32,
          Nl = 0,
          Il = 1,
          Ol = 2,
          Ml = 3,
          zl = 4,
          Al = 5,
          Rl = kl,
          jl = null,
          Fl = null,
          Dl = 0,
          Ll = Nl,
          Wl = null,
          Ul = 1073741823,
          $l = 1073741823,
          Bl = null,
          Vl = 0,
          Hl = !1,
          Ql = 0,
          Gl = 500,
          Kl = null,
          ql = !1,
          Yl = null,
          Xl = null,
          Jl = !1,
          Zl = null,
          eu = 90,
          tu = null,
          nu = 0,
          ru = null,
          au = 0;
        function ou() {
          return (Rl & (Cl | Pl)) !== kl
            ? 1073741821 - ((Ua() / 10) | 0)
            : 0 !== au
            ? au
            : (au = 1073741821 - ((Ua() / 10) | 0));
        }
        function iu(e, t, n) {
          if (0 == (2 & (t = t.mode))) return 1073741823;
          var r = $a();
          if (0 == (4 & t)) return 99 === r ? 1073741823 : 1073741822;
          if ((Rl & Cl) !== kl) return Dl;
          if (null !== n) e = qa(e, 0 | n.timeoutMs || 5e3, 250);
          else
            switch (r) {
              case 99:
                e = 1073741823;
                break;
              case 98:
                e = qa(e, 150, 100);
                break;
              case 97:
              case 96:
                e = qa(e, 5e3, 250);
                break;
              case 95:
                e = 2;
                break;
              default:
                throw Error(i(326));
            }
          return null !== jl && e === Dl && --e, e;
        }
        function lu(e, t) {
          if (50 < nu) throw ((nu = 0), (ru = null), Error(i(185)));
          if (null !== (e = uu(e, t))) {
            var n = $a();
            1073741823 === t
              ? (Rl & El) !== kl && (Rl & (Cl | Pl)) === kl
                ? pu(e)
                : (cu(e), Rl === kl && Ga())
              : cu(e),
              (4 & Rl) === kl ||
                (98 !== n && 99 !== n) ||
                (null === tu
                  ? (tu = new Map([[e, t]]))
                  : (void 0 === (n = tu.get(e)) || n > t) && tu.set(e, t));
          }
        }
        function uu(e, t) {
          e.expirationTime < t && (e.expirationTime = t);
          var n = e.alternate;
          null !== n && n.expirationTime < t && (n.expirationTime = t);
          var r = e.return,
            a = null;
          if (null === r && 3 === e.tag) a = e.stateNode;
          else
            for (; null !== r; ) {
              if (
                ((n = r.alternate),
                r.childExpirationTime < t && (r.childExpirationTime = t),
                null !== n &&
                  n.childExpirationTime < t &&
                  (n.childExpirationTime = t),
                null === r.return && 3 === r.tag)
              ) {
                a = r.stateNode;
                break;
              }
              r = r.return;
            }
          return (
            null !== a &&
              (jl === a && (vu(t), Ll === zl && Hu(a, Dl)), Qu(a, t)),
            a
          );
        }
        function su(e) {
          var t = e.lastExpiredTime;
          if (0 !== t) return t;
          if (!Vu(e, (t = e.firstPendingTime))) return t;
          var n = e.lastPingedTime;
          return 2 >= (e = n > (e = e.nextKnownPendingLevel) ? n : e) && t !== e
            ? 0
            : e;
        }
        function cu(e) {
          if (0 !== e.lastExpiredTime)
            (e.callbackExpirationTime = 1073741823),
              (e.callbackPriority = 99),
              (e.callbackNode = Qa(pu.bind(null, e)));
          else {
            var t = su(e),
              n = e.callbackNode;
            if (0 === t)
              null !== n &&
                ((e.callbackNode = null),
                (e.callbackExpirationTime = 0),
                (e.callbackPriority = 90));
            else {
              var r = ou();
              if (
                ((r =
                  1073741823 === t
                    ? 99
                    : 1 === t || 2 === t
                    ? 95
                    : 0 >= (r = 10 * (1073741821 - t) - 10 * (1073741821 - r))
                    ? 99
                    : 250 >= r
                    ? 98
                    : 5250 >= r
                    ? 97
                    : 95),
                null !== n)
              ) {
                var a = e.callbackPriority;
                if (e.callbackExpirationTime === t && a >= r) return;
                n !== Aa && ka(n);
              }
              (e.callbackExpirationTime = t),
                (e.callbackPriority = r),
                (t =
                  1073741823 === t
                    ? Qa(pu.bind(null, e))
                    : Ha(r, fu.bind(null, e), {
                        timeout: 10 * (1073741821 - t) - Ua(),
                      })),
                (e.callbackNode = t);
            }
          }
        }
        function fu(e, t) {
          if (((au = 0), t)) return Gu(e, (t = ou())), cu(e), null;
          var n = su(e);
          if (0 !== n) {
            if (((t = e.callbackNode), (Rl & (Cl | Pl)) !== kl))
              throw Error(i(327));
            if ((Cu(), (e === jl && n === Dl) || mu(e, n), null !== Fl)) {
              var r = Rl;
              Rl |= Cl;
              for (var a = gu(); ; )
                try {
                  _u();
                  break;
                } catch (t) {
                  hu(e, t);
                }
              if ((to(), (Rl = r), (Sl.current = a), Ll === Il))
                throw ((t = Wl), mu(e, n), Hu(e, n), cu(e), t);
              if (null === Fl)
                switch (
                  ((a = e.finishedWork = e.current.alternate),
                  (e.finishedExpirationTime = n),
                  (r = Ll),
                  (jl = null),
                  r)
                ) {
                  case Nl:
                  case Il:
                    throw Error(i(345));
                  case Ol:
                    Gu(e, 2 < n ? 2 : n);
                    break;
                  case Ml:
                    if (
                      (Hu(e, n),
                      n === (r = e.lastSuspendedTime) &&
                        (e.nextKnownPendingLevel = Su(a)),
                      1073741823 === Ul && 10 < (a = Ql + Gl - Ua()))
                    ) {
                      if (Hl) {
                        var o = e.lastPingedTime;
                        if (0 === o || o >= n) {
                          (e.lastPingedTime = n), mu(e, n);
                          break;
                        }
                      }
                      if (0 !== (o = su(e)) && o !== n) break;
                      if (0 !== r && r !== n) {
                        e.lastPingedTime = r;
                        break;
                      }
                      e.timeoutHandle = xn(Tu.bind(null, e), a);
                      break;
                    }
                    Tu(e);
                    break;
                  case zl:
                    if (
                      (Hu(e, n),
                      n === (r = e.lastSuspendedTime) &&
                        (e.nextKnownPendingLevel = Su(a)),
                      Hl && (0 === (a = e.lastPingedTime) || a >= n))
                    ) {
                      (e.lastPingedTime = n), mu(e, n);
                      break;
                    }
                    if (0 !== (a = su(e)) && a !== n) break;
                    if (0 !== r && r !== n) {
                      e.lastPingedTime = r;
                      break;
                    }
                    if (
                      (1073741823 !== $l
                        ? (r = 10 * (1073741821 - $l) - Ua())
                        : 1073741823 === Ul
                        ? (r = 0)
                        : ((r = 10 * (1073741821 - Ul) - 5e3),
                          0 > (r = (a = Ua()) - r) && (r = 0),
                          (n = 10 * (1073741821 - n) - a) <
                            (r =
                              (120 > r
                                ? 120
                                : 480 > r
                                ? 480
                                : 1080 > r
                                ? 1080
                                : 1920 > r
                                ? 1920
                                : 3e3 > r
                                ? 3e3
                                : 4320 > r
                                ? 4320
                                : 1960 * xl(r / 1960)) - r) && (r = n)),
                      10 < r)
                    ) {
                      e.timeoutHandle = xn(Tu.bind(null, e), r);
                      break;
                    }
                    Tu(e);
                    break;
                  case Al:
                    if (1073741823 !== Ul && null !== Bl) {
                      o = Ul;
                      var l = Bl;
                      if (
                        (0 >= (r = 0 | l.busyMinDurationMs)
                          ? (r = 0)
                          : ((a = 0 | l.busyDelayMs),
                            (r =
                              (o =
                                Ua() -
                                (10 * (1073741821 - o) -
                                  (0 | l.timeoutMs || 5e3))) <= a
                                ? 0
                                : a + r - o)),
                        10 < r)
                      ) {
                        Hu(e, n), (e.timeoutHandle = xn(Tu.bind(null, e), r));
                        break;
                      }
                    }
                    Tu(e);
                    break;
                  default:
                    throw Error(i(329));
                }
              if ((cu(e), e.callbackNode === t)) return fu.bind(null, e);
            }
          }
          return null;
        }
        function pu(e) {
          var t = e.lastExpiredTime;
          if (((t = 0 !== t ? t : 1073741823), (Rl & (Cl | Pl)) !== kl))
            throw Error(i(327));
          if ((Cu(), (e === jl && t === Dl) || mu(e, t), null !== Fl)) {
            var n = Rl;
            Rl |= Cl;
            for (var r = gu(); ; )
              try {
                bu();
                break;
              } catch (t) {
                hu(e, t);
              }
            if ((to(), (Rl = n), (Sl.current = r), Ll === Il))
              throw ((n = Wl), mu(e, t), Hu(e, t), cu(e), n);
            if (null !== Fl) throw Error(i(261));
            (e.finishedWork = e.current.alternate),
              (e.finishedExpirationTime = t),
              (jl = null),
              Tu(e),
              cu(e);
          }
          return null;
        }
        function du(e, t) {
          var n = Rl;
          Rl |= 1;
          try {
            return e(t);
          } finally {
            (Rl = n) === kl && Ga();
          }
        }
        function mu(e, t) {
          (e.finishedWork = null), (e.finishedExpirationTime = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), Sn(n)), null !== Fl))
            for (n = Fl.return; null !== n; ) {
              var r = n;
              switch (r.tag) {
                case 1:
                  null != (r = r.type.childContextTypes) && va();
                  break;
                case 3:
                  Ro(), ca(ma), ca(da);
                  break;
                case 5:
                  Fo(r);
                  break;
                case 4:
                  Ro();
                  break;
                case 13:
                case 19:
                  ca(Do);
                  break;
                case 10:
                  no(r);
              }
              n = n.return;
            }
          (jl = e),
            (Fl = Du(e.current, null)),
            (Dl = t),
            (Ll = Nl),
            (Wl = null),
            ($l = Ul = 1073741823),
            (Bl = null),
            (Vl = 0),
            (Hl = !1);
        }
        function hu(e, t) {
          for (;;) {
            try {
              if ((to(), (Uo.current = vi), Go))
                for (var n = Vo.memoizedState; null !== n; ) {
                  var r = n.queue;
                  null !== r && (r.pending = null), (n = n.next);
                }
              if (
                ((Bo = 0),
                (Qo = Ho = Vo = null),
                (Go = !1),
                null === Fl || null === Fl.return)
              )
                return (Ll = Il), (Wl = t), (Fl = null);
              e: {
                var a = e,
                  o = Fl.return,
                  i = Fl,
                  l = t;
                if (
                  ((t = Dl),
                  (i.effectTag |= 2048),
                  (i.firstEffect = i.lastEffect = null),
                  null !== l &&
                    "object" == typeof l &&
                    "function" == typeof l.then)
                ) {
                  var u = l;
                  if (0 == (2 & i.mode)) {
                    var s = i.alternate;
                    s
                      ? ((i.updateQueue = s.updateQueue),
                        (i.memoizedState = s.memoizedState),
                        (i.expirationTime = s.expirationTime))
                      : ((i.updateQueue = null), (i.memoizedState = null));
                  }
                  var c = 0 != (1 & Do.current),
                    f = o;
                  do {
                    var p;
                    if ((p = 13 === f.tag)) {
                      var d = f.memoizedState;
                      if (null !== d) p = null !== d.dehydrated;
                      else {
                        var m = f.memoizedProps;
                        p =
                          void 0 !== m.fallback &&
                          (!0 !== m.unstable_avoidThisFallback || !c);
                      }
                    }
                    if (p) {
                      var h = f.updateQueue;
                      if (null === h) {
                        var g = new Set();
                        g.add(u), (f.updateQueue = g);
                      } else h.add(u);
                      if (0 == (2 & f.mode)) {
                        if (
                          ((f.effectTag |= 64),
                          (i.effectTag &= -2981),
                          1 === i.tag)
                        )
                          if (null === i.alternate) i.tag = 17;
                          else {
                            var y = so(1073741823, null);
                            (y.tag = 2), co(i, y);
                          }
                        i.expirationTime = 1073741823;
                        break e;
                      }
                      (l = void 0), (i = t);
                      var v = a.pingCache;
                      if (
                        (null === v
                          ? ((v = a.pingCache = new vl()),
                            (l = new Set()),
                            v.set(u, l))
                          : void 0 === (l = v.get(u)) &&
                            ((l = new Set()), v.set(u, l)),
                        !l.has(i))
                      ) {
                        l.add(i);
                        var b = Ou.bind(null, a, u, i);
                        u.then(b, b);
                      }
                      (f.effectTag |= 4096), (f.expirationTime = t);
                      break e;
                    }
                    f = f.return;
                  } while (null !== f);
                  l = Error(
                    (ge(i.type) || "A React component") +
                      " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." +
                      ye(i)
                  );
                }
                Ll !== Al && (Ll = Ol), (l = tl(l, i)), (f = o);
                do {
                  switch (f.tag) {
                    case 3:
                      (u = l),
                        (f.effectTag |= 4096),
                        (f.expirationTime = t),
                        fo(f, bl(f, u, t));
                      break e;
                    case 1:
                      u = l;
                      var _ = f.type,
                        w = f.stateNode;
                      if (
                        0 == (64 & f.effectTag) &&
                        ("function" == typeof _.getDerivedStateFromError ||
                          (null !== w &&
                            "function" == typeof w.componentDidCatch &&
                            (null === Xl || !Xl.has(w))))
                      ) {
                        (f.effectTag |= 4096),
                          (f.expirationTime = t),
                          fo(f, _l(f, u, t));
                        break e;
                      }
                  }
                  f = f.return;
                } while (null !== f);
              }
              Fl = xu(Fl);
            } catch (e) {
              t = e;
              continue;
            }
            break;
          }
        }
        function gu() {
          var e = Sl.current;
          return (Sl.current = vi), null === e ? vi : e;
        }
        function yu(e, t) {
          e < Ul && 2 < e && (Ul = e),
            null !== t && e < $l && 2 < e && (($l = e), (Bl = t));
        }
        function vu(e) {
          e > Vl && (Vl = e);
        }
        function bu() {
          for (; null !== Fl; ) Fl = wu(Fl);
        }
        function _u() {
          for (; null !== Fl && !Ra(); ) Fl = wu(Fl);
        }
        function wu(e) {
          var t = wl(e.alternate, e, Dl);
          return (
            (e.memoizedProps = e.pendingProps),
            null === t && (t = xu(e)),
            (Tl.current = null),
            t
          );
        }
        function xu(e) {
          Fl = e;
          do {
            var t = Fl.alternate;
            if (((e = Fl.return), 0 == (2048 & Fl.effectTag))) {
              if (
                ((t = Zi(t, Fl, Dl)), 1 === Dl || 1 !== Fl.childExpirationTime)
              ) {
                for (var n = 0, r = Fl.child; null !== r; ) {
                  var a = r.expirationTime,
                    o = r.childExpirationTime;
                  a > n && (n = a), o > n && (n = o), (r = r.sibling);
                }
                Fl.childExpirationTime = n;
              }
              if (null !== t) return t;
              null !== e &&
                0 == (2048 & e.effectTag) &&
                (null === e.firstEffect && (e.firstEffect = Fl.firstEffect),
                null !== Fl.lastEffect &&
                  (null !== e.lastEffect &&
                    (e.lastEffect.nextEffect = Fl.firstEffect),
                  (e.lastEffect = Fl.lastEffect)),
                1 < Fl.effectTag &&
                  (null !== e.lastEffect
                    ? (e.lastEffect.nextEffect = Fl)
                    : (e.firstEffect = Fl),
                  (e.lastEffect = Fl)));
            } else {
              if (null !== (t = el(Fl))) return (t.effectTag &= 2047), t;
              null !== e &&
                ((e.firstEffect = e.lastEffect = null), (e.effectTag |= 2048));
            }
            if (null !== (t = Fl.sibling)) return t;
            Fl = e;
          } while (null !== Fl);
          return Ll === Nl && (Ll = Al), null;
        }
        function Su(e) {
          var t = e.expirationTime;
          return t > (e = e.childExpirationTime) ? t : e;
        }
        function Tu(e) {
          var t = $a();
          return Va(99, ku.bind(null, e, t)), null;
        }
        function ku(e, t) {
          do {
            Cu();
          } while (null !== Zl);
          if ((Rl & (Cl | Pl)) !== kl) throw Error(i(327));
          var n = e.finishedWork,
            r = e.finishedExpirationTime;
          if (null === n) return null;
          if (
            ((e.finishedWork = null),
            (e.finishedExpirationTime = 0),
            n === e.current)
          )
            throw Error(i(177));
          (e.callbackNode = null),
            (e.callbackExpirationTime = 0),
            (e.callbackPriority = 90),
            (e.nextKnownPendingLevel = 0);
          var a = Su(n);
          if (
            ((e.firstPendingTime = a),
            r <= e.lastSuspendedTime
              ? (e.firstSuspendedTime =
                  e.lastSuspendedTime =
                  e.nextKnownPendingLevel =
                    0)
              : r <= e.firstSuspendedTime && (e.firstSuspendedTime = r - 1),
            r <= e.lastPingedTime && (e.lastPingedTime = 0),
            r <= e.lastExpiredTime && (e.lastExpiredTime = 0),
            e === jl && ((Fl = jl = null), (Dl = 0)),
            1 < n.effectTag
              ? null !== n.lastEffect
                ? ((n.lastEffect.nextEffect = n), (a = n.firstEffect))
                : (a = n)
              : (a = n.firstEffect),
            null !== a)
          ) {
            var o = Rl;
            (Rl |= Pl), (Tl.current = null), (vn = Vt);
            var l = pn();
            if (dn(l)) {
              if ("selectionStart" in l)
                var u = {
                  start: l.selectionStart,
                  end: l.selectionEnd,
                };
              else
                e: {
                  var s =
                    (u = ((u = l.ownerDocument) && u.defaultView) || window)
                      .getSelection && u.getSelection();
                  if (s && 0 !== s.rangeCount) {
                    u = s.anchorNode;
                    var c = s.anchorOffset,
                      f = s.focusNode;
                    s = s.focusOffset;
                    try {
                      u.nodeType, f.nodeType;
                    } catch (e) {
                      u = null;
                      break e;
                    }
                    var p = 0,
                      d = -1,
                      m = -1,
                      h = 0,
                      g = 0,
                      y = l,
                      v = null;
                    t: for (;;) {
                      for (
                        var b;
                        y !== u || (0 !== c && 3 !== y.nodeType) || (d = p + c),
                          y !== f ||
                            (0 !== s && 3 !== y.nodeType) ||
                            (m = p + s),
                          3 === y.nodeType && (p += y.nodeValue.length),
                          null !== (b = y.firstChild);

                      )
                        (v = y), (y = b);
                      for (;;) {
                        if (y === l) break t;
                        if (
                          (v === u && ++h === c && (d = p),
                          v === f && ++g === s && (m = p),
                          null !== (b = y.nextSibling))
                        )
                          break;
                        v = (y = v).parentNode;
                      }
                      y = b;
                    }
                    u =
                      -1 === d || -1 === m
                        ? null
                        : {
                            start: d,
                            end: m,
                          };
                  } else u = null;
                }
              u = u || {
                start: 0,
                end: 0,
              };
            } else u = null;
            (bn = {
              activeElementDetached: null,
              focusedElem: l,
              selectionRange: u,
            }),
              (Vt = !1),
              (Kl = a);
            do {
              try {
                Eu();
              } catch (e) {
                if (null === Kl) throw Error(i(330));
                Iu(Kl, e), (Kl = Kl.nextEffect);
              }
            } while (null !== Kl);
            Kl = a;
            do {
              try {
                for (l = e, u = t; null !== Kl; ) {
                  var _ = Kl.effectTag;
                  if ((16 & _ && Le(Kl.stateNode, ""), 128 & _)) {
                    var w = Kl.alternate;
                    if (null !== w) {
                      var x = w.ref;
                      null !== x &&
                        ("function" == typeof x ? x(null) : (x.current = null));
                    }
                  }
                  switch (1038 & _) {
                    case 2:
                      pl(Kl), (Kl.effectTag &= -3);
                      break;
                    case 6:
                      pl(Kl), (Kl.effectTag &= -3), gl(Kl.alternate, Kl);
                      break;
                    case 1024:
                      Kl.effectTag &= -1025;
                      break;
                    case 1028:
                      (Kl.effectTag &= -1025), gl(Kl.alternate, Kl);
                      break;
                    case 4:
                      gl(Kl.alternate, Kl);
                      break;
                    case 8:
                      hl(l, (c = Kl), u), cl(c);
                  }
                  Kl = Kl.nextEffect;
                }
              } catch (e) {
                if (null === Kl) throw Error(i(330));
                Iu(Kl, e), (Kl = Kl.nextEffect);
              }
            } while (null !== Kl);
            if (
              ((x = bn),
              (w = pn()),
              (_ = x.focusedElem),
              (u = x.selectionRange),
              w !== _ &&
                _ &&
                _.ownerDocument &&
                fn(_.ownerDocument.documentElement, _))
            ) {
              null !== u &&
                dn(_) &&
                ((w = u.start),
                void 0 === (x = u.end) && (x = w),
                "selectionStart" in _
                  ? ((_.selectionStart = w),
                    (_.selectionEnd = Math.min(x, _.value.length)))
                  : (x =
                      ((w = _.ownerDocument || document) && w.defaultView) ||
                      window).getSelection &&
                    ((x = x.getSelection()),
                    (c = _.textContent.length),
                    (l = Math.min(u.start, c)),
                    (u = void 0 === u.end ? l : Math.min(u.end, c)),
                    !x.extend && l > u && ((c = u), (u = l), (l = c)),
                    (c = cn(_, l)),
                    (f = cn(_, u)),
                    c &&
                      f &&
                      (1 !== x.rangeCount ||
                        x.anchorNode !== c.node ||
                        x.anchorOffset !== c.offset ||
                        x.focusNode !== f.node ||
                        x.focusOffset !== f.offset) &&
                      ((w = w.createRange()).setStart(c.node, c.offset),
                      x.removeAllRanges(),
                      l > u
                        ? (x.addRange(w), x.extend(f.node, f.offset))
                        : (w.setEnd(f.node, f.offset), x.addRange(w))))),
                (w = []);
              for (x = _; (x = x.parentNode); )
                1 === x.nodeType &&
                  w.push({
                    element: x,
                    left: x.scrollLeft,
                    top: x.scrollTop,
                  });
              for (
                "function" == typeof _.focus && _.focus(), _ = 0;
                _ < w.length;
                _++
              )
                ((x = w[_]).element.scrollLeft = x.left),
                  (x.element.scrollTop = x.top);
            }
            (Vt = !!vn), (bn = vn = null), (e.current = n), (Kl = a);
            do {
              try {
                for (_ = e; null !== Kl; ) {
                  var S = Kl.effectTag;
                  if ((36 & S && ul(_, Kl.alternate, Kl), 128 & S)) {
                    w = void 0;
                    var T = Kl.ref;
                    if (null !== T) {
                      var k = Kl.stateNode;
                      Kl.tag,
                        (w = k),
                        "function" == typeof T ? T(w) : (T.current = w);
                    }
                  }
                  Kl = Kl.nextEffect;
                }
              } catch (e) {
                if (null === Kl) throw Error(i(330));
                Iu(Kl, e), (Kl = Kl.nextEffect);
              }
            } while (null !== Kl);
            (Kl = null), ja(), (Rl = o);
          } else e.current = n;
          if (Jl) (Jl = !1), (Zl = e), (eu = t);
          else
            for (Kl = a; null !== Kl; )
              (t = Kl.nextEffect), (Kl.nextEffect = null), (Kl = t);
          if (
            (0 === (t = e.firstPendingTime) && (Xl = null),
            1073741823 === t
              ? e === ru
                ? nu++
                : ((nu = 0), (ru = e))
              : (nu = 0),
            "function" == typeof zu && zu(n.stateNode, r),
            cu(e),
            ql)
          )
            throw ((ql = !1), (e = Yl), (Yl = null), e);
          return (Rl & El) !== kl || Ga(), null;
        }
        function Eu() {
          for (; null !== Kl; ) {
            var e = Kl.effectTag;
            0 != (256 & e) && ol(Kl.alternate, Kl),
              0 == (512 & e) ||
                Jl ||
                ((Jl = !0),
                Ha(97, function () {
                  return Cu(), null;
                })),
              (Kl = Kl.nextEffect);
          }
        }
        function Cu() {
          if (90 !== eu) {
            var e = 97 < eu ? 97 : eu;
            return (eu = 90), Va(e, Pu);
          }
        }
        function Pu() {
          if (null === Zl) return !1;
          var e = Zl;
          if (((Zl = null), (Rl & (Cl | Pl)) !== kl)) throw Error(i(331));
          var t = Rl;
          for (Rl |= Pl, e = e.current.firstEffect; null !== e; ) {
            try {
              var n = e;
              if (0 != (512 & n.effectTag))
                switch (n.tag) {
                  case 0:
                  case 11:
                  case 15:
                  case 22:
                    il(5, n), ll(5, n);
                }
            } catch (t) {
              if (null === e) throw Error(i(330));
              Iu(e, t);
            }
            (n = e.nextEffect), (e.nextEffect = null), (e = n);
          }
          return (Rl = t), Ga(), !0;
        }
        function Nu(e, t, n) {
          co(e, (t = bl(e, (t = tl(n, t)), 1073741823))),
            null !== (e = uu(e, 1073741823)) && cu(e);
        }
        function Iu(e, t) {
          if (3 === e.tag) Nu(e, e, t);
          else
            for (var n = e.return; null !== n; ) {
              if (3 === n.tag) {
                Nu(n, e, t);
                break;
              }
              if (1 === n.tag) {
                var r = n.stateNode;
                if (
                  "function" == typeof n.type.getDerivedStateFromError ||
                  ("function" == typeof r.componentDidCatch &&
                    (null === Xl || !Xl.has(r)))
                ) {
                  co(n, (e = _l(n, (e = tl(t, e)), 1073741823))),
                    null !== (n = uu(n, 1073741823)) && cu(n);
                  break;
                }
              }
              n = n.return;
            }
        }
        function Ou(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            jl === e && Dl === n
              ? Ll === zl || (Ll === Ml && 1073741823 === Ul && Ua() - Ql < Gl)
                ? mu(e, Dl)
                : (Hl = !0)
              : Vu(e, n) &&
                ((0 !== (t = e.lastPingedTime) && t < n) ||
                  ((e.lastPingedTime = n), cu(e)));
        }
        function Mu(e, t) {
          var n = e.stateNode;
          null !== n && n.delete(t),
            0 == (t = 0) && (t = iu((t = ou()), e, null)),
            null !== (e = uu(e, t)) && cu(e);
        }
        wl = function (e, t, n) {
          var r = t.expirationTime;
          if (null !== e) {
            var a = t.pendingProps;
            if (e.memoizedProps !== a || ma.current) Mi = !0;
            else {
              if (r < n) {
                switch (((Mi = !1), t.tag)) {
                  case 3:
                    Ui(t), Ii();
                    break;
                  case 5:
                    if ((jo(t), 4 & t.mode && 1 !== n && a.hidden))
                      return (
                        (t.expirationTime = t.childExpirationTime = 1), null
                      );
                    break;
                  case 1:
                    ya(t.type) && wa(t);
                    break;
                  case 4:
                    Ao(t, t.stateNode.containerInfo);
                    break;
                  case 10:
                    (r = t.memoizedProps.value),
                      (a = t.type._context),
                      fa(Xa, a._currentValue),
                      (a._currentValue = r);
                    break;
                  case 13:
                    if (null !== t.memoizedState)
                      return 0 !== (r = t.child.childExpirationTime) && r >= n
                        ? Gi(e, t, n)
                        : (fa(Do, 1 & Do.current),
                          null !== (t = Xi(e, t, n)) ? t.sibling : null);
                    fa(Do, 1 & Do.current);
                    break;
                  case 19:
                    if (
                      ((r = t.childExpirationTime >= n),
                      0 != (64 & e.effectTag))
                    ) {
                      if (r) return Yi(e, t, n);
                      t.effectTag |= 64;
                    }
                    if (
                      (null !== (a = t.memoizedState) &&
                        ((a.rendering = null), (a.tail = null)),
                      fa(Do, Do.current),
                      !r)
                    )
                      return null;
                }
                return Xi(e, t, n);
              }
              Mi = !1;
            }
          } else Mi = !1;
          switch (((t.expirationTime = 0), t.tag)) {
            case 2:
              if (
                ((r = t.type),
                null !== e &&
                  ((e.alternate = null),
                  (t.alternate = null),
                  (t.effectTag |= 2)),
                (e = t.pendingProps),
                (a = ga(t, da.current)),
                ao(t, n),
                (a = Yo(null, t, r, e, a, n)),
                (t.effectTag |= 1),
                "object" == typeof a &&
                  null !== a &&
                  "function" == typeof a.render &&
                  void 0 === a.$$typeof)
              ) {
                if (
                  ((t.tag = 1),
                  (t.memoizedState = null),
                  (t.updateQueue = null),
                  ya(r))
                ) {
                  var o = !0;
                  wa(t);
                } else o = !1;
                (t.memoizedState =
                  null !== a.state && void 0 !== a.state ? a.state : null),
                  lo(t);
                var l = r.getDerivedStateFromProps;
                "function" == typeof l && yo(t, r, l, e),
                  (a.updater = vo),
                  (t.stateNode = a),
                  (a._reactInternalFiber = t),
                  xo(t, r, e, n),
                  (t = Wi(null, t, r, !0, o, n));
              } else (t.tag = 0), zi(null, t, a, n), (t = t.child);
              return t;
            case 16:
              e: {
                if (
                  ((a = t.elementType),
                  null !== e &&
                    ((e.alternate = null),
                    (t.alternate = null),
                    (t.effectTag |= 2)),
                  (e = t.pendingProps),
                  (function (e) {
                    if (-1 === e._status) {
                      e._status = 0;
                      var t = e._ctor;
                      (t = t()),
                        (e._result = t),
                        t.then(
                          function (t) {
                            0 === e._status &&
                              ((t = t.default),
                              (e._status = 1),
                              (e._result = t));
                          },
                          function (t) {
                            0 === e._status &&
                              ((e._status = 2), (e._result = t));
                          }
                        );
                    }
                  })(a),
                  1 !== a._status)
                )
                  throw a._result;
                switch (
                  ((a = a._result),
                  (t.type = a),
                  (o = t.tag =
                    (function (e) {
                      if ("function" == typeof e) return Fu(e) ? 1 : 0;
                      if (null != e) {
                        if ((e = e.$$typeof) === ue) return 11;
                        if (e === fe) return 14;
                      }
                      return 2;
                    })(a)),
                  (e = Ya(a, e)),
                  o)
                ) {
                  case 0:
                    t = Di(null, t, a, e, n);
                    break e;
                  case 1:
                    t = Li(null, t, a, e, n);
                    break e;
                  case 11:
                    t = Ai(null, t, a, e, n);
                    break e;
                  case 14:
                    t = Ri(null, t, a, Ya(a.type, e), r, n);
                    break e;
                }
                throw Error(i(306, a, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Di(e, t, r, (a = t.elementType === r ? a : Ya(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Li(e, t, r, (a = t.elementType === r ? a : Ya(r, a)), n)
              );
            case 3:
              if ((Ui(t), (r = t.updateQueue), null === e || null === r))
                throw Error(i(282));
              if (
                ((r = t.pendingProps),
                (a = null !== (a = t.memoizedState) ? a.element : null),
                uo(e, t),
                po(t, r, null, n),
                (r = t.memoizedState.element) === a)
              )
                Ii(), (t = Xi(e, t, n));
              else {
                if (
                  ((a = t.stateNode.hydrate) &&
                    ((Si = Tn(t.stateNode.containerInfo.firstChild)),
                    (xi = t),
                    (a = Ti = !0)),
                  a)
                )
                  for (n = Po(t, null, r, n), t.child = n; n; )
                    (n.effectTag = (-3 & n.effectTag) | 1024), (n = n.sibling);
                else zi(e, t, r, n), Ii();
                t = t.child;
              }
              return t;
            case 5:
              return (
                jo(t),
                null === e && Ci(t),
                (r = t.type),
                (a = t.pendingProps),
                (o = null !== e ? e.memoizedProps : null),
                (l = a.children),
                wn(r, a)
                  ? (l = null)
                  : null !== o && wn(r, o) && (t.effectTag |= 16),
                Fi(e, t),
                4 & t.mode && 1 !== n && a.hidden
                  ? ((t.expirationTime = t.childExpirationTime = 1), (t = null))
                  : (zi(e, t, l, n), (t = t.child)),
                t
              );
            case 6:
              return null === e && Ci(t), null;
            case 13:
              return Gi(e, t, n);
            case 4:
              return (
                Ao(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Co(t, null, r, n)) : zi(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Ai(e, t, r, (a = t.elementType === r ? a : Ya(r, a)), n)
              );
            case 7:
              return zi(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return zi(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                (r = t.type._context),
                  (a = t.pendingProps),
                  (l = t.memoizedProps),
                  (o = a.value);
                var u = t.type._context;
                if (
                  (fa(Xa, u._currentValue), (u._currentValue = o), null !== l)
                )
                  if (
                    ((u = l.value),
                    0 ==
                      (o = Lr(u, o)
                        ? 0
                        : 0 |
                          ("function" == typeof r._calculateChangedBits
                            ? r._calculateChangedBits(u, o)
                            : 1073741823)))
                  ) {
                    if (l.children === a.children && !ma.current) {
                      t = Xi(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (u = t.child) && (u.return = t);
                      null !== u;

                    ) {
                      var s = u.dependencies;
                      if (null !== s) {
                        l = u.child;
                        for (var c = s.firstContext; null !== c; ) {
                          if (c.context === r && 0 != (c.observedBits & o)) {
                            1 === u.tag &&
                              (((c = so(n, null)).tag = 2), co(u, c)),
                              u.expirationTime < n && (u.expirationTime = n),
                              null !== (c = u.alternate) &&
                                c.expirationTime < n &&
                                (c.expirationTime = n),
                              ro(u.return, n),
                              s.expirationTime < n && (s.expirationTime = n);
                            break;
                          }
                          c = c.next;
                        }
                      } else
                        l = 10 === u.tag && u.type === t.type ? null : u.child;
                      if (null !== l) l.return = u;
                      else
                        for (l = u; null !== l; ) {
                          if (l === t) {
                            l = null;
                            break;
                          }
                          if (null !== (u = l.sibling)) {
                            (u.return = l.return), (l = u);
                            break;
                          }
                          l = l.return;
                        }
                      u = l;
                    }
                zi(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = (o = t.pendingProps).children),
                ao(t, n),
                (r = r((a = oo(a, o.unstable_observedBits)))),
                (t.effectTag |= 1),
                zi(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (o = Ya((a = t.type), t.pendingProps)),
                Ri(e, t, a, (o = Ya(a.type, o)), r, n)
              );
            case 15:
              return ji(e, t, t.type, t.pendingProps, r, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : Ya(r, a)),
                null !== e &&
                  ((e.alternate = null),
                  (t.alternate = null),
                  (t.effectTag |= 2)),
                (t.tag = 1),
                ya(r) ? ((e = !0), wa(t)) : (e = !1),
                ao(t, n),
                _o(t, r, a),
                xo(t, r, a, n),
                Wi(null, t, r, !0, e, n)
              );
            case 19:
              return Yi(e, t, n);
          }
          throw Error(i(156, t.tag));
        };
        var zu = null,
          Au = null;
        function Ru(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.effectTag = 0),
            (this.lastEffect = this.firstEffect = this.nextEffect = null),
            (this.childExpirationTime = this.expirationTime = 0),
            (this.alternate = null);
        }
        function ju(e, t, n, r) {
          return new Ru(e, t, n, r);
        }
        function Fu(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Du(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = ju(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.effectTag = 0),
                (n.nextEffect = null),
                (n.firstEffect = null),
                (n.lastEffect = null)),
            (n.childExpirationTime = e.childExpirationTime),
            (n.expirationTime = e.expirationTime),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : {
                    expirationTime: t.expirationTime,
                    firstContext: t.firstContext,
                    responders: t.responders,
                  }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Lu(e, t, n, r, a, o) {
          var l = 2;
          if (((r = e), "function" == typeof e)) Fu(e) && (l = 1);
          else if ("string" == typeof e) l = 5;
          else
            e: switch (e) {
              case ne:
                return Wu(n.children, a, o, t);
              case le:
                (l = 8), (a |= 7);
                break;
              case re:
                (l = 8), (a |= 1);
                break;
              case ae:
                return (
                  ((e = ju(12, n, t, 8 | a)).elementType = ae),
                  (e.type = ae),
                  (e.expirationTime = o),
                  e
                );
              case se:
                return (
                  ((e = ju(13, n, t, a)).type = se),
                  (e.elementType = se),
                  (e.expirationTime = o),
                  e
                );
              case ce:
                return (
                  ((e = ju(19, n, t, a)).elementType = ce),
                  (e.expirationTime = o),
                  e
                );
              default:
                if ("object" == typeof e && null !== e)
                  switch (e.$$typeof) {
                    case oe:
                      l = 10;
                      break e;
                    case ie:
                      l = 9;
                      break e;
                    case ue:
                      l = 11;
                      break e;
                    case fe:
                      l = 14;
                      break e;
                    case pe:
                      (l = 16), (r = null);
                      break e;
                    case de:
                      l = 22;
                      break e;
                  }
                throw Error(i(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = ju(l, n, t, a)).elementType = e),
            (t.type = r),
            (t.expirationTime = o),
            t
          );
        }
        function Wu(e, t, n, r) {
          return ((e = ju(7, e, r, t)).expirationTime = n), e;
        }
        function Uu(e, t, n) {
          return ((e = ju(6, e, null, t)).expirationTime = n), e;
        }
        function $u(e, t, n) {
          return (
            ((t = ju(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).expirationTime = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Bu(e, t, n) {
          (this.tag = t),
            (this.current = null),
            (this.containerInfo = e),
            (this.pingCache = this.pendingChildren = null),
            (this.finishedExpirationTime = 0),
            (this.finishedWork = null),
            (this.timeoutHandle = -1),
            (this.pendingContext = this.context = null),
            (this.hydrate = n),
            (this.callbackNode = null),
            (this.callbackPriority = 90),
            (this.lastExpiredTime =
              this.lastPingedTime =
              this.nextKnownPendingLevel =
              this.lastSuspendedTime =
              this.firstSuspendedTime =
              this.firstPendingTime =
                0);
        }
        function Vu(e, t) {
          var n = e.firstSuspendedTime;
          return (e = e.lastSuspendedTime), 0 !== n && n >= t && e <= t;
        }
        function Hu(e, t) {
          var n = e.firstSuspendedTime,
            r = e.lastSuspendedTime;
          n < t && (e.firstSuspendedTime = t),
            (r > t || 0 === n) && (e.lastSuspendedTime = t),
            t <= e.lastPingedTime && (e.lastPingedTime = 0),
            t <= e.lastExpiredTime && (e.lastExpiredTime = 0);
        }
        function Qu(e, t) {
          t > e.firstPendingTime && (e.firstPendingTime = t);
          var n = e.firstSuspendedTime;
          0 !== n &&
            (t >= n
              ? (e.firstSuspendedTime =
                  e.lastSuspendedTime =
                  e.nextKnownPendingLevel =
                    0)
              : t >= e.lastSuspendedTime && (e.lastSuspendedTime = t + 1),
            t > e.nextKnownPendingLevel && (e.nextKnownPendingLevel = t));
        }
        function Gu(e, t) {
          var n = e.lastExpiredTime;
          (0 === n || n > t) && (e.lastExpiredTime = t);
        }
        function Ku(e, t, n, r) {
          var a = t.current,
            o = ou(),
            l = ho.suspense;
          o = iu(o, a, l);
          e: if (n) {
            t: {
              if (Je((n = n._reactInternalFiber)) !== n || 1 !== n.tag)
                throw Error(i(170));
              var u = n;
              do {
                switch (u.tag) {
                  case 3:
                    u = u.stateNode.context;
                    break t;
                  case 1:
                    if (ya(u.type)) {
                      u = u.stateNode.__reactInternalMemoizedMergedChildContext;
                      break t;
                    }
                }
                u = u.return;
              } while (null !== u);
              throw Error(i(171));
            }
            if (1 === n.tag) {
              var s = n.type;
              if (ya(s)) {
                n = _a(n, s, u);
                break e;
              }
            }
            n = u;
          } else n = pa;
          return (
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = so(o, l)).payload = {
              element: e,
            }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            co(a, t),
            lu(a, o),
            o
          );
        }
        function qu(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Yu(e, t) {
          null !== (e = e.memoizedState) &&
            null !== e.dehydrated &&
            e.retryTime < t &&
            (e.retryTime = t);
        }
        function Xu(e, t) {
          Yu(e, t), (e = e.alternate) && Yu(e, t);
        }
        function Ju(e, t, n) {
          var r = new Bu(e, t, (n = null != n && !0 === n.hydrate)),
            a = ju(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0);
          (r.current = a),
            (a.stateNode = r),
            lo(a),
            (e[Nn] = r.current),
            n &&
              0 !== t &&
              (function (e, t) {
                var n = Xe(t);
                Tt.forEach(function (e) {
                  pt(e, t, n);
                }),
                  kt.forEach(function (e) {
                    pt(e, t, n);
                  });
              })(0, 9 === e.nodeType ? e : e.ownerDocument),
            (this._internalRoot = r);
        }
        function Zu(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function es(e, t, n, r, a) {
          var o = n._reactRootContainer;
          if (o) {
            var i = o._internalRoot;
            if ("function" == typeof a) {
              var l = a;
              a = function () {
                var e = qu(i);
                l.call(e);
              };
            }
            Ku(t, i, e, a);
          } else {
            if (
              ((o = n._reactRootContainer =
                (function (e, t) {
                  if (
                    (t ||
                      (t = !(
                        !(t = e
                          ? 9 === e.nodeType
                            ? e.documentElement
                            : e.firstChild
                          : null) ||
                        1 !== t.nodeType ||
                        !t.hasAttribute("data-reactroot")
                      )),
                    !t)
                  )
                    for (var n; (n = e.lastChild); ) e.removeChild(n);
                  return new Ju(
                    e,
                    0,
                    t
                      ? {
                          hydrate: !0,
                        }
                      : void 0
                  );
                })(n, r)),
              (i = o._internalRoot),
              "function" == typeof a)
            ) {
              var u = a;
              a = function () {
                var e = qu(i);
                u.call(e);
              };
            }
            !(function (e, t) {
              var n = Rl;
              (Rl &= -2), (Rl |= El);
              try {
                return e(t);
              } finally {
                (Rl = n) === kl && Ga();
              }
            })(function () {
              Ku(t, i, e, a);
            });
          }
          return qu(i);
        }
        (Ju.prototype.render = function (e) {
          Ku(e, this._internalRoot, null, null);
        }),
          (Ju.prototype.unmount = function () {
            var e = this._internalRoot,
              t = e.containerInfo;
            Ku(null, e, null, function () {
              t[Nn] = null;
            });
          }),
          (dt = function (e) {
            if (13 === e.tag) {
              var t = qa(ou(), 150, 100);
              lu(e, t), Xu(e, t);
            }
          }),
          (mt = function (e) {
            13 === e.tag && (lu(e, 3), Xu(e, 3));
          }),
          (ht = function (e) {
            if (13 === e.tag) {
              var t = ou();
              lu(e, (t = iu(t, e, null))), Xu(e, t);
            }
          }),
          (P = function (e, t, n) {
            switch (t) {
              case "input":
                if ((ke(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = zn(r);
                      if (!a) throw Error(i(90));
                      we(r), ke(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                Me(e, n);
                break;
              case "select":
                null != (t = n.value) && Ne(e, !!n.multiple, t, !1);
            }
          }),
          (A = du),
          (R = function (e, t, n, r, a) {
            var o = Rl;
            Rl |= 4;
            try {
              return Va(98, e.bind(null, t, n, r, a));
            } finally {
              (Rl = o) === kl && Ga();
            }
          }),
          (j = function () {
            (Rl & (1 | Cl | Pl)) === kl &&
              ((function () {
                if (null !== tu) {
                  var e = tu;
                  (tu = null),
                    e.forEach(function (e, t) {
                      Gu(t, e), cu(t);
                    }),
                    Ga();
                }
              })(),
              Cu());
          }),
          (F = function (e, t) {
            var n = Rl;
            Rl |= 2;
            try {
              return e(t);
            } finally {
              (Rl = n) === kl && Ga();
            }
          });
        !(function (e) {
          var t = e.findFiberByHostInstance;
          !(function (e) {
            if ("undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
            var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (t.isDisabled || !t.supportsFiber) return !0;
            try {
              var n = t.inject(e);
              (zu = function (e) {
                try {
                  t.onCommitFiberRoot(
                    n,
                    e,
                    void 0,
                    64 == (64 & e.current.effectTag)
                  );
                } catch (e) {}
              }),
                (Au = function (e) {
                  try {
                    t.onCommitFiberUnmount(n, e);
                  } catch (e) {}
                });
            } catch (e) {}
          })(
            a({}, e, {
              overrideHookState: null,
              overrideProps: null,
              setSuspenseHandler: null,
              scheduleUpdate: null,
              currentDispatcherRef: Y.ReactCurrentDispatcher,
              findHostInstanceByFiber: function (e) {
                return null ===
                  (e = (function (e) {
                    if (
                      ((e = (function (e) {
                        var t = e.alternate;
                        if (!t) {
                          if (null === (t = Je(e))) throw Error(i(188));
                          return t !== e ? null : e;
                        }
                        for (var n = e, r = t; ; ) {
                          var a = n.return;
                          if (null === a) break;
                          var o = a.alternate;
                          if (null === o) {
                            if (null !== (r = a.return)) {
                              n = r;
                              continue;
                            }
                            break;
                          }
                          if (a.child === o.child) {
                            for (o = a.child; o; ) {
                              if (o === n) return et(a), e;
                              if (o === r) return et(a), t;
                              o = o.sibling;
                            }
                            throw Error(i(188));
                          }
                          if (n.return !== r.return) (n = a), (r = o);
                          else {
                            for (var l = !1, u = a.child; u; ) {
                              if (u === n) {
                                (l = !0), (n = a), (r = o);
                                break;
                              }
                              if (u === r) {
                                (l = !0), (r = a), (n = o);
                                break;
                              }
                              u = u.sibling;
                            }
                            if (!l) {
                              for (u = o.child; u; ) {
                                if (u === n) {
                                  (l = !0), (n = o), (r = a);
                                  break;
                                }
                                if (u === r) {
                                  (l = !0), (r = o), (n = a);
                                  break;
                                }
                                u = u.sibling;
                              }
                              if (!l) throw Error(i(189));
                            }
                          }
                          if (n.alternate !== r) throw Error(i(190));
                        }
                        if (3 !== n.tag) throw Error(i(188));
                        return n.stateNode.current === n ? e : t;
                      })(e)),
                      !e)
                    )
                      return null;
                    for (var t = e; ; ) {
                      if (5 === t.tag || 6 === t.tag) return t;
                      if (t.child) (t.child.return = t), (t = t.child);
                      else {
                        if (t === e) break;
                        for (; !t.sibling; ) {
                          if (!t.return || t.return === e) return null;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return null;
                  })(e))
                  ? null
                  : e.stateNode;
              },
              findFiberByHostInstance: function (e) {
                return t ? t(e) : null;
              },
              findHostInstancesForRefresh: null,
              scheduleRefresh: null,
              scheduleRoot: null,
              setRefreshHandler: null,
              getCurrentFiber: null,
            })
          );
        })({
          findFiberByHostInstance: In,
          bundleType: 0,
          version: "16.13.1",
          rendererPackageName: "react-dom",
        }),
          (t.render = function (e, t, n) {
            if (!Zu(t)) throw Error(i(200));
            return es(null, e, t, !1, n);
          }),
          (t.unstable_batchedUpdates = du);
      },
      935: (e, t, n) => {
        "use strict";
        !(function e() {
          if (
            "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (e) {
              console.error(e);
            }
        })(),
          (e.exports = n(448));
      },
      921: (e, t) => {
        "use strict";
        var n = "function" == typeof Symbol && Symbol.for,
          r = n ? Symbol.for("react.element") : 60103,
          a = n ? Symbol.for("react.portal") : 60106,
          o = n ? Symbol.for("react.fragment") : 60107,
          i = n ? Symbol.for("react.strict_mode") : 60108,
          l = n ? Symbol.for("react.profiler") : 60114,
          u = n ? Symbol.for("react.provider") : 60109,
          s = n ? Symbol.for("react.context") : 60110,
          c = n ? Symbol.for("react.async_mode") : 60111,
          f = n ? Symbol.for("react.concurrent_mode") : 60111,
          p = n ? Symbol.for("react.forward_ref") : 60112,
          d = n ? Symbol.for("react.suspense") : 60113,
          m = n ? Symbol.for("react.suspense_list") : 60120,
          h = n ? Symbol.for("react.memo") : 60115,
          g = n ? Symbol.for("react.lazy") : 60116,
          y = n ? Symbol.for("react.block") : 60121,
          v = n ? Symbol.for("react.fundamental") : 60117,
          b = n ? Symbol.for("react.responder") : 60118,
          _ = n ? Symbol.for("react.scope") : 60119;
        function w(e) {
          if ("object" == typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
              case r:
                switch ((e = e.type)) {
                  case c:
                  case f:
                  case o:
                  case l:
                  case i:
                  case d:
                    return e;
                  default:
                    switch ((e = e && e.$$typeof)) {
                      case s:
                      case p:
                      case g:
                      case h:
                      case u:
                        return e;
                      default:
                        return t;
                    }
                }
              case a:
                return t;
            }
          }
        }
        function x(e) {
          return w(e) === f;
        }
        (t.AsyncMode = c),
          (t.ConcurrentMode = f),
          (t.ContextConsumer = s),
          (t.ContextProvider = u),
          (t.Element = r),
          (t.ForwardRef = p),
          (t.Fragment = o),
          (t.Lazy = g),
          (t.Memo = h),
          (t.Portal = a),
          (t.Profiler = l),
          (t.StrictMode = i),
          (t.Suspense = d),
          (t.isAsyncMode = function (e) {
            return x(e) || w(e) === c;
          }),
          (t.isConcurrentMode = x),
          (t.isContextConsumer = function (e) {
            return w(e) === s;
          }),
          (t.isContextProvider = function (e) {
            return w(e) === u;
          }),
          (t.isElement = function (e) {
            return "object" == typeof e && null !== e && e.$$typeof === r;
          }),
          (t.isForwardRef = function (e) {
            return w(e) === p;
          }),
          (t.isFragment = function (e) {
            return w(e) === o;
          }),
          (t.isLazy = function (e) {
            return w(e) === g;
          }),
          (t.isMemo = function (e) {
            return w(e) === h;
          }),
          (t.isPortal = function (e) {
            return w(e) === a;
          }),
          (t.isProfiler = function (e) {
            return w(e) === l;
          }),
          (t.isStrictMode = function (e) {
            return w(e) === i;
          }),
          (t.isSuspense = function (e) {
            return w(e) === d;
          }),
          (t.isValidElementType = function (e) {
            return (
              "string" == typeof e ||
              "function" == typeof e ||
              e === o ||
              e === f ||
              e === l ||
              e === i ||
              e === d ||
              e === m ||
              ("object" == typeof e &&
                null !== e &&
                (e.$$typeof === g ||
                  e.$$typeof === h ||
                  e.$$typeof === u ||
                  e.$$typeof === s ||
                  e.$$typeof === p ||
                  e.$$typeof === v ||
                  e.$$typeof === b ||
                  e.$$typeof === _ ||
                  e.$$typeof === y))
            );
          }),
          (t.typeOf = w);
      },
      864: (e, t, n) => {
        "use strict";
        e.exports = n(921);
      },
      367: (e, t, n) => {
        "use strict";
        var r = n(418),
          a = "function" == typeof Symbol && Symbol.for,
          o = a ? Symbol.for("react.element") : 60103,
          i = a ? Symbol.for("react.portal") : 60106,
          l = a ? Symbol.for("react.fragment") : 60107,
          u = a ? Symbol.for("react.strict_mode") : 60108,
          s = a ? Symbol.for("react.profiler") : 60114,
          c = a ? Symbol.for("react.provider") : 60109,
          f = a ? Symbol.for("react.context") : 60110,
          p = a ? Symbol.for("react.forward_ref") : 60112,
          d = a ? Symbol.for("react.suspense") : 60113,
          m = a ? Symbol.for("react.memo") : 60115,
          h = a ? Symbol.for("react.lazy") : 60116,
          g = "function" == typeof Symbol && Symbol.iterator;
        function y(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var v = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          b = {};
        function _(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = b),
            (this.updater = n || v);
        }
        function w() {}
        function x(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = b),
            (this.updater = n || v);
        }
        (_.prototype.isReactComponent = {}),
          (_.prototype.setState = function (e, t) {
            if ("object" != typeof e && "function" != typeof e && null != e)
              throw Error(y(85));
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (_.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (w.prototype = _.prototype);
        var S = (x.prototype = new w());
        (S.constructor = x), r(S, _.prototype), (S.isPureReactComponent = !0);
        var T = {
            current: null,
          },
          k = Object.prototype.hasOwnProperty,
          E = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0,
          };
        function C(e, t, n) {
          var r,
            a = {},
            i = null,
            l = null;
          if (null != t)
            for (r in (void 0 !== t.ref && (l = t.ref),
            void 0 !== t.key && (i = "" + t.key),
            t))
              k.call(t, r) && !E.hasOwnProperty(r) && (a[r] = t[r]);
          var u = arguments.length - 2;
          if (1 === u) a.children = n;
          else if (1 < u) {
            for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
            a.children = s;
          }
          if (e && e.defaultProps)
            for (r in (u = e.defaultProps)) void 0 === a[r] && (a[r] = u[r]);
          return {
            $$typeof: o,
            type: e,
            key: i,
            ref: l,
            props: a,
            _owner: T.current,
          };
        }
        function P(e) {
          return "object" == typeof e && null !== e && e.$$typeof === o;
        }
        var N = /\/+/g,
          I = [];
        function O(e, t, n, r) {
          if (I.length) {
            var a = I.pop();
            return (
              (a.result = e),
              (a.keyPrefix = t),
              (a.func = n),
              (a.context = r),
              (a.count = 0),
              a
            );
          }
          return {
            result: e,
            keyPrefix: t,
            func: n,
            context: r,
            count: 0,
          };
        }
        function M(e) {
          (e.result = null),
            (e.keyPrefix = null),
            (e.func = null),
            (e.context = null),
            (e.count = 0),
            10 > I.length && I.push(e);
        }
        function z(e, t, n, r) {
          var a = typeof e;
          ("undefined" !== a && "boolean" !== a) || (e = null);
          var l = !1;
          if (null === e) l = !0;
          else
            switch (a) {
              case "string":
              case "number":
                l = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case o:
                  case i:
                    l = !0;
                }
            }
          if (l) return n(r, e, "" === t ? "." + R(e, 0) : t), 1;
          if (((l = 0), (t = "" === t ? "." : t + ":"), Array.isArray(e)))
            for (var u = 0; u < e.length; u++) {
              var s = t + R((a = e[u]), u);
              l += z(a, s, n, r);
            }
          else if (
            "function" ==
            typeof (s =
              null === e || "object" != typeof e
                ? null
                : "function" == typeof (s = (g && e[g]) || e["@@iterator"])
                ? s
                : null)
          )
            for (e = s.call(e), u = 0; !(a = e.next()).done; )
              l += z((a = a.value), (s = t + R(a, u++)), n, r);
          else if ("object" === a)
            throw (
              ((n = "" + e),
              Error(
                y(
                  31,
                  "[object Object]" === n
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : n,
                  ""
                )
              ))
            );
          return l;
        }
        function A(e, t, n) {
          return null == e ? 0 : z(e, "", t, n);
        }
        function R(e, t) {
          return "object" == typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = {
                  "=": "=0",
                  ":": "=2",
                };
                return (
                  "$" +
                  ("" + e).replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })(e.key)
            : t.toString(36);
        }
        function j(e, t) {
          e.func.call(e.context, t, e.count++);
        }
        function F(e, t, n) {
          var r = e.result,
            a = e.keyPrefix;
          (e = e.func.call(e.context, t, e.count++)),
            Array.isArray(e)
              ? D(e, r, n, function (e) {
                  return e;
                })
              : null != e &&
                (P(e) &&
                  (e = (function (e, t) {
                    return {
                      $$typeof: o,
                      type: e.type,
                      key: t,
                      ref: e.ref,
                      props: e.props,
                      _owner: e._owner,
                    };
                  })(
                    e,
                    a +
                      (!e.key || (t && t.key === e.key)
                        ? ""
                        : ("" + e.key).replace(N, "$&/") + "/") +
                      n
                  )),
                r.push(e));
        }
        function D(e, t, n, r, a) {
          var o = "";
          null != n && (o = ("" + n).replace(N, "$&/") + "/"),
            A(e, F, (t = O(t, o, r, a))),
            M(t);
        }
        var L = {
          current: null,
        };
        function W() {
          var e = L.current;
          if (null === e) throw Error(y(321));
          return e;
        }
        var U = {
          ReactCurrentDispatcher: L,
          ReactCurrentBatchConfig: {
            suspense: null,
          },
          ReactCurrentOwner: T,
          IsSomeRendererActing: {
            current: !1,
          },
          assign: r,
        };
        (t.Children = {
          map: function (e, t, n) {
            if (null == e) return e;
            var r = [];
            return D(e, r, null, t, n), r;
          },
          forEach: function (e, t, n) {
            if (null == e) return e;
            A(e, j, (t = O(null, null, t, n))), M(t);
          },
          count: function (e) {
            return A(
              e,
              function () {
                return null;
              },
              null
            );
          },
          toArray: function (e) {
            var t = [];
            return (
              D(e, t, null, function (e) {
                return e;
              }),
              t
            );
          },
          only: function (e) {
            if (!P(e)) throw Error(y(143));
            return e;
          },
        }),
          (t.Component = _),
          (t.Fragment = l),
          (t.Profiler = s),
          (t.PureComponent = x),
          (t.StrictMode = u),
          (t.Suspense = d),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = U),
          (t.cloneElement = function (e, t, n) {
            if (null == e) throw Error(y(267, e));
            var a = r({}, e.props),
              i = e.key,
              l = e.ref,
              u = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((l = t.ref), (u = T.current)),
                void 0 !== t.key && (i = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps;
              for (c in t)
                k.call(t, c) &&
                  !E.hasOwnProperty(c) &&
                  (a[c] = void 0 === t[c] && void 0 !== s ? s[c] : t[c]);
            }
            var c = arguments.length - 2;
            if (1 === c) a.children = n;
            else if (1 < c) {
              s = Array(c);
              for (var f = 0; f < c; f++) s[f] = arguments[f + 2];
              a.children = s;
            }
            return {
              $$typeof: o,
              type: e.type,
              key: i,
              ref: l,
              props: a,
              _owner: u,
            };
          }),
          (t.createContext = function (e, t) {
            return (
              void 0 === t && (t = null),
              ((e = {
                $$typeof: f,
                _calculateChangedBits: t,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
              }).Provider = {
                $$typeof: c,
                _context: e,
              }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = C),
          (t.createFactory = function (e) {
            var t = C.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return {
              current: null,
            };
          }),
          (t.forwardRef = function (e) {
            return {
              $$typeof: p,
              render: e,
            };
          }),
          (t.isValidElement = P),
          (t.lazy = function (e) {
            return {
              $$typeof: h,
              _ctor: e,
              _status: -1,
              _result: null,
            };
          }),
          (t.memo = function (e, t) {
            return {
              $$typeof: m,
              type: e,
              compare: void 0 === t ? null : t,
            };
          }),
          (t.useCallback = function (e, t) {
            return W().useCallback(e, t);
          }),
          (t.useContext = function (e, t) {
            return W().useContext(e, t);
          }),
          (t.useDebugValue = function () {}),
          (t.useEffect = function (e, t) {
            return W().useEffect(e, t);
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return W().useImperativeHandle(e, t, n);
          }),
          (t.useLayoutEffect = function (e, t) {
            return W().useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return W().useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return W().useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return W().useRef(e);
          }),
          (t.useState = function (e) {
            return W().useState(e);
          }),
          (t.version = "16.13.1");
      },
      294: (e, t, n) => {
        "use strict";
        e.exports = n(367);
      },
      53: (e, t) => {
        "use strict";
        var n, r, a, o, i;
        if (
          "undefined" == typeof window ||
          "function" != typeof MessageChannel
        ) {
          var l = null,
            u = null,
            s = function () {
              if (null !== l)
                try {
                  var e = t.unstable_now();
                  l(!0, e), (l = null);
                } catch (e) {
                  throw (setTimeout(s, 0), e);
                }
            },
            c = Date.now();
          (t.unstable_now = function () {
            return Date.now() - c;
          }),
            (n = function (e) {
              null !== l ? setTimeout(n, 0, e) : ((l = e), setTimeout(s, 0));
            }),
            (r = function (e, t) {
              u = setTimeout(e, t);
            }),
            (a = function () {
              clearTimeout(u);
            }),
            (o = function () {
              return !1;
            }),
            (i = t.unstable_forceFrameRate = function () {});
        } else {
          var f = window.performance,
            p = window.Date,
            d = window.setTimeout,
            m = window.clearTimeout;
          if ("undefined" != typeof console) {
            var h = window.cancelAnimationFrame;
            "function" != typeof window.requestAnimationFrame &&
              console.error(
                "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
              ),
              "function" != typeof h &&
                console.error(
                  "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
                );
          }
          if ("object" == typeof f && "function" == typeof f.now)
            t.unstable_now = function () {
              return f.now();
            };
          else {
            var g = p.now();
            t.unstable_now = function () {
              return p.now() - g;
            };
          }
          var y = !1,
            v = null,
            b = -1,
            _ = 5,
            w = 0;
          (o = function () {
            return t.unstable_now() >= w;
          }),
            (i = function () {}),
            (t.unstable_forceFrameRate = function (e) {
              0 > e || 125 < e
                ? console.error(
                    "forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"
                  )
                : (_ = 0 < e ? Math.floor(1e3 / e) : 5);
            });
          var x = new MessageChannel(),
            S = x.port2;
          (x.port1.onmessage = function () {
            if (null !== v) {
              var e = t.unstable_now();
              w = e + _;
              try {
                v(!0, e) ? S.postMessage(null) : ((y = !1), (v = null));
              } catch (e) {
                throw (S.postMessage(null), e);
              }
            } else y = !1;
          }),
            (n = function (e) {
              (v = e), y || ((y = !0), S.postMessage(null));
            }),
            (r = function (e, n) {
              b = d(function () {
                e(t.unstable_now());
              }, n);
            }),
            (a = function () {
              m(b), (b = -1);
            });
        }
        function T(e, t) {
          var n = e.length;
          e.push(t);
          e: for (;;) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(void 0 !== a && 0 < C(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function k(e) {
          return void 0 === (e = e[0]) ? null : e;
        }
        function E(e) {
          var t = e[0];
          if (void 0 !== t) {
            var n = e.pop();
            if (n !== t) {
              e[0] = n;
              e: for (var r = 0, a = e.length; r < a; ) {
                var o = 2 * (r + 1) - 1,
                  i = e[o],
                  l = o + 1,
                  u = e[l];
                if (void 0 !== i && 0 > C(i, n))
                  void 0 !== u && 0 > C(u, i)
                    ? ((e[r] = u), (e[l] = n), (r = l))
                    : ((e[r] = i), (e[o] = n), (r = o));
                else {
                  if (!(void 0 !== u && 0 > C(u, n))) break e;
                  (e[r] = u), (e[l] = n), (r = l);
                }
              }
            }
            return t;
          }
          return null;
        }
        function C(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        var P = [],
          N = [],
          I = 1,
          O = null,
          M = 3,
          z = !1,
          A = !1,
          R = !1;
        function j(e) {
          for (var t = k(N); null !== t; ) {
            if (null === t.callback) E(N);
            else {
              if (!(t.startTime <= e)) break;
              E(N), (t.sortIndex = t.expirationTime), T(P, t);
            }
            t = k(N);
          }
        }
        function F(e) {
          if (((R = !1), j(e), !A))
            if (null !== k(P)) (A = !0), n(D);
            else {
              var t = k(N);
              null !== t && r(F, t.startTime - e);
            }
        }
        function D(e, n) {
          (A = !1), R && ((R = !1), a()), (z = !0);
          var i = M;
          try {
            for (
              j(n), O = k(P);
              null !== O && (!(O.expirationTime > n) || (e && !o()));

            ) {
              var l = O.callback;
              if (null !== l) {
                (O.callback = null), (M = O.priorityLevel);
                var u = l(O.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" == typeof u
                    ? (O.callback = u)
                    : O === k(P) && E(P),
                  j(n);
              } else E(P);
              O = k(P);
            }
            if (null !== O) var s = !0;
            else {
              var c = k(N);
              null !== c && r(F, c.startTime - n), (s = !1);
            }
            return s;
          } finally {
            (O = null), (M = i), (z = !1);
          }
        }
        function L(e) {
          switch (e) {
            case 1:
              return -1;
            case 2:
              return 250;
            case 5:
              return 1073741823;
            case 4:
              return 1e4;
            default:
              return 5e3;
          }
        }
        var W = i;
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            A || z || ((A = !0), n(D));
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return M;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return k(P);
          }),
          (t.unstable_next = function (e) {
            switch (M) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = M;
            }
            var n = M;
            M = t;
            try {
              return e();
            } finally {
              M = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = W),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = M;
            M = e;
            try {
              return t();
            } finally {
              M = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, o, i) {
            var l = t.unstable_now();
            if ("object" == typeof i && null !== i) {
              var u = i.delay;
              (u = "number" == typeof u && 0 < u ? l + u : l),
                (i = "number" == typeof i.timeout ? i.timeout : L(e));
            } else (i = L(e)), (u = l);
            return (
              (e = {
                id: I++,
                callback: o,
                priorityLevel: e,
                startTime: u,
                expirationTime: (i = u + i),
                sortIndex: -1,
              }),
              u > l
                ? ((e.sortIndex = u),
                  T(N, e),
                  null === k(P) &&
                    e === k(N) &&
                    (R ? a() : (R = !0), r(F, u - l)))
                : ((e.sortIndex = i), T(P, e), A || z || ((A = !0), n(D))),
              e
            );
          }),
          (t.unstable_shouldYield = function () {
            var e = t.unstable_now();
            j(e);
            var n = k(P);
            return (
              (n !== O &&
                null !== O &&
                null !== n &&
                null !== n.callback &&
                n.startTime <= e &&
                n.expirationTime < O.expirationTime) ||
              o()
            );
          }),
          (t.unstable_wrapCallback = function (e) {
            var t = M;
            return function () {
              var n = M;
              M = t;
              try {
                return e.apply(this, arguments);
              } finally {
                M = n;
              }
            };
          });
      },
      840: (e, t, n) => {
        "use strict";
        e.exports = n(53);
      },
      121: (e, t, n) => {
        "use strict";
        n.d(t, {
          Z: () => r,
        }),
          (e = n.hmd(e));
        const r = (function (e) {
          var t,
            n = e.Symbol;
          return (
            "function" == typeof n
              ? n.observable
                ? (t = n.observable)
                : ((t = n("observable")), (n.observable = t))
              : (t = "@@observable"),
            t
          );
        })(
          "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : void 0 !== n.g
            ? n.g
            : e
        );
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var o = (t[r] = {
      id: r,
      loaded: !1,
      exports: {},
    });
    return e[r](o, o.exports, n), (o.loaded = !0), o.exports;
  }
  (n.m = e),
    (n.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return (
        n.d(t, {
          a: t,
        }),
        t
      );
    }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r],
          });
    }),
    (n.u = (e) => e + ".app.js"),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.hmd = (e) => (
      (e = Object.create(e)).children || (e.children = []),
      Object.defineProperty(e, "exports", {
        enumerable: !0,
        set: () => {
          throw new Error(
            "ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " +
              e.id
          );
        },
      }),
      e
    )),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e;
      n.g.importScripts && (e = n.g.location + "");
      var t = n.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var r = t.getElementsByTagName("script");
        if (r.length) for (var a = r.length - 1; a > -1 && !e; ) e = r[a--].src;
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (n.p = e);
    })(),
    (n.b = document.baseURI || self.location.href),
    (() => {
      "use strict";
      var e,
        t,
        r,
        a = n(121),
        o = function () {
          return Math.random().toString(36).substring(7).split("").join(".");
        },
        i = {
          INIT: "@@redux/INIT" + o(),
          REPLACE: "@@redux/REPLACE" + o(),
          PROBE_UNKNOWN_ACTION: function () {
            return "@@redux/PROBE_UNKNOWN_ACTION" + o();
          },
        };
      function l(e, t, n) {
        var r;
        if (
          ("function" == typeof t && "function" == typeof n) ||
          ("function" == typeof n && "function" == typeof arguments[3])
        )
          throw new Error(
            "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function."
          );
        if (
          ("function" == typeof t && void 0 === n && ((n = t), (t = void 0)),
          void 0 !== n)
        ) {
          if ("function" != typeof n)
            throw new Error("Expected the enhancer to be a function.");
          return n(l)(e, t);
        }
        if ("function" != typeof e)
          throw new Error("Expected the reducer to be a function.");
        var o = e,
          u = t,
          s = [],
          c = s,
          f = !1;
        function p() {
          c === s && (c = s.slice());
        }
        function d() {
          if (f)
            throw new Error(
              "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store."
            );
          return u;
        }
        function m(e) {
          if ("function" != typeof e)
            throw new Error("Expected the listener to be a function.");
          if (f)
            throw new Error(
              "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details."
            );
          var t = !0;
          return (
            p(),
            c.push(e),
            function () {
              if (t) {
                if (f)
                  throw new Error(
                    "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details."
                  );
                (t = !1), p();
                var n = c.indexOf(e);
                c.splice(n, 1), (s = null);
              }
            }
          );
        }
        function h(e) {
          if (
            !(function (e) {
              if ("object" != typeof e || null === e) return !1;
              for (var t = e; null !== Object.getPrototypeOf(t); )
                t = Object.getPrototypeOf(t);
              return Object.getPrototypeOf(e) === t;
            })(e)
          )
            throw new Error(
              "Actions must be plain objects. Use custom middleware for async actions."
            );
          if (void 0 === e.type)
            throw new Error(
              'Actions may not have an undefined "type" property. Have you misspelled a constant?'
            );
          if (f) throw new Error("Reducers may not dispatch actions.");
          try {
            (f = !0), (u = o(u, e));
          } finally {
            f = !1;
          }
          for (var t = (s = c), n = 0; n < t.length; n++) (0, t[n])();
          return e;
        }
        return (
          h({
            type: i.INIT,
          }),
          ((r = {
            dispatch: h,
            subscribe: m,
            getState: d,
            replaceReducer: function (e) {
              if ("function" != typeof e)
                throw new Error("Expected the nextReducer to be a function.");
              (o = e),
                h({
                  type: i.REPLACE,
                });
            },
          })[a.Z] = function () {
            var e,
              t = m;
            return (
              ((e = {
                subscribe: function (e) {
                  if ("object" != typeof e || null === e)
                    throw new TypeError(
                      "Expected the observer to be an object."
                    );
                  function n() {
                    e.next && e.next(d());
                  }
                  return (
                    n(),
                    {
                      unsubscribe: t(n),
                    }
                  );
                },
              })[a.Z] = function () {
                return this;
              }),
              e
            );
          }),
          r
        );
      }
      function u(e, t) {
        var n = t && t.type;
        return (
          "Given " +
          ((n && 'action "' + String(n) + '"') || "an action") +
          ', reducer "' +
          e +
          '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'
        );
      }
      function s(e) {
        for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
          var a = t[r];
          "function" == typeof e[a] && (n[a] = e[a]);
        }
        var o,
          l = Object.keys(n);
        try {
          !(function (e) {
            Object.keys(e).forEach(function (t) {
              var n = e[t];
              if (
                void 0 ===
                n(void 0, {
                  type: i.INIT,
                })
              )
                throw new Error(
                  'Reducer "' +
                    t +
                    "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined."
                );
              if (
                void 0 ===
                n(void 0, {
                  type: i.PROBE_UNKNOWN_ACTION(),
                })
              )
                throw new Error(
                  'Reducer "' +
                    t +
                    "\" returned undefined when probed with a random type. Don't try to handle " +
                    i.INIT +
                    ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.'
                );
            });
          })(n);
        } catch (e) {
          o = e;
        }
        return function (e, t) {
          if ((void 0 === e && (e = {}), o)) throw o;
          for (var r = !1, a = {}, i = 0; i < l.length; i++) {
            var s = l[i],
              c = n[s],
              f = e[s],
              p = c(f, t);
            if (void 0 === p) {
              var d = u(s, t);
              throw new Error(d);
            }
            (a[s] = p), (r = r || p !== f);
          }
          return (r = r || l.length !== Object.keys(e).length) ? a : e;
        };
      }
      function c(e, t) {
        return function () {
          return t(e.apply(this, arguments));
        };
      }
      function f(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function p(e, t) {
        var n = Object.keys(e);
        return (
          Object.getOwnPropertySymbols &&
            n.push.apply(n, Object.getOwnPropertySymbols(e)),
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          n
        );
      }
      function d() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return 0 === t.length
          ? function (e) {
              return e;
            }
          : 1 === t.length
          ? t[0]
          : t.reduce(function (e, t) {
              return function () {
                return e(t.apply(void 0, arguments));
              };
            });
      }
      function m(e) {
        for (
          var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        throw Error(
          "[Immer] minified error nr: " +
            e +
            (n.length
              ? " " +
                n
                  .map(function (e) {
                    return "'" + e + "'";
                  })
                  .join(",")
              : "") +
            ". Find the full error at: https://bit.ly/3cXEKWf"
        );
      }
      function h(e) {
        return !!e && !!e[ee];
      }
      function g(e) {
        return (
          !!e &&
          ((function (e) {
            if (!e || "object" != typeof e) return !1;
            var t = Object.getPrototypeOf(e);
            if (null === t) return !0;
            var n =
              Object.hasOwnProperty.call(t, "constructor") && t.constructor;
            return (
              n === Object ||
              ("function" == typeof n && Function.toString.call(n) === ne)
            );
          })(e) ||
            Array.isArray(e) ||
            !!e[Z] ||
            !!e.constructor[Z] ||
            w(e) ||
            x(e))
        );
      }
      function y(e, t, n) {
        void 0 === n && (n = !1),
          0 === v(e)
            ? (n ? Object.keys : re)(e).forEach(function (r) {
                (n && "symbol" == typeof r) || t(r, e[r], e);
              })
            : e.forEach(function (n, r) {
                return t(r, n, e);
              });
      }
      function v(e) {
        var t = e[ee];
        return t
          ? t.i > 3
            ? t.i - 4
            : t.i
          : Array.isArray(e)
          ? 1
          : w(e)
          ? 2
          : x(e)
          ? 3
          : 0;
      }
      function b(e, t) {
        return 2 === v(e)
          ? e.has(t)
          : Object.prototype.hasOwnProperty.call(e, t);
      }
      function _(e, t, n) {
        var r = v(e);
        2 === r ? e.set(t, n) : 3 === r ? (e.delete(t), e.add(n)) : (e[t] = n);
      }
      function w(e) {
        return q && e instanceof Map;
      }
      function x(e) {
        return Y && e instanceof Set;
      }
      function S(e) {
        return e.o || e.t;
      }
      function T(e) {
        if (Array.isArray(e)) return Array.prototype.slice.call(e);
        var t = ae(e);
        delete t[ee];
        for (var n = re(t), r = 0; r < n.length; r++) {
          var a = n[r],
            o = t[a];
          !1 === o.writable && ((o.writable = !0), (o.configurable = !0)),
            (o.get || o.set) &&
              (t[a] = {
                configurable: !0,
                writable: !0,
                enumerable: o.enumerable,
                value: e[a],
              });
        }
        return Object.create(Object.getPrototypeOf(e), t);
      }
      function k(e, t) {
        return (
          void 0 === t && (t = !1),
          C(e) ||
            h(e) ||
            !g(e) ||
            (v(e) > 1 && (e.set = e.add = e.clear = e.delete = E),
            Object.freeze(e),
            t &&
              y(
                e,
                function (e, t) {
                  return k(t, !0);
                },
                !0
              )),
          e
        );
      }
      function E() {
        m(2);
      }
      function C(e) {
        return null == e || "object" != typeof e || Object.isFrozen(e);
      }
      function P(e) {
        var t = oe[e];
        return t || m(18, e), t;
      }
      function N() {
        return G;
      }
      function I(e, t) {
        t && (P("Patches"), (e.u = []), (e.s = []), (e.v = t));
      }
      function O(e) {
        M(e), e.p.forEach(A), (e.p = null);
      }
      function M(e) {
        e === G && (G = e.l);
      }
      function z(e) {
        return (G = {
          p: [],
          l: G,
          h: e,
          m: !0,
          _: 0,
        });
      }
      function A(e) {
        var t = e[ee];
        0 === t.i || 1 === t.i ? t.j() : (t.O = !0);
      }
      function R(e, t) {
        t._ = t.p.length;
        var n = t.p[0],
          r = void 0 !== e && e !== n;
        return (
          t.h.g || P("ES5").S(t, e, r),
          r
            ? (n[ee].P && (O(t), m(4)),
              g(e) && ((e = j(t, e)), t.l || D(t, e)),
              t.u && P("Patches").M(n[ee], e, t.u, t.s))
            : (e = j(t, n, [])),
          O(t),
          t.u && t.v(t.u, t.s),
          e !== J ? e : void 0
        );
      }
      function j(e, t, n) {
        if (C(t)) return t;
        var r = t[ee];
        if (!r)
          return (
            y(
              t,
              function (a, o) {
                return F(e, r, t, a, o, n);
              },
              !0
            ),
            t
          );
        if (r.A !== e) return t;
        if (!r.P) return D(e, r.t, !0), r.t;
        if (!r.I) {
          (r.I = !0), r.A._--;
          var a = 4 === r.i || 5 === r.i ? (r.o = T(r.k)) : r.o;
          y(3 === r.i ? new Set(a) : a, function (t, o) {
            return F(e, r, a, t, o, n);
          }),
            D(e, a, !1),
            n && e.u && P("Patches").R(r, n, e.u, e.s);
        }
        return r.o;
      }
      function F(e, t, n, r, a, o) {
        if (h(a)) {
          var i = j(
            e,
            a,
            o && t && 3 !== t.i && !b(t.D, r) ? o.concat(r) : void 0
          );
          if ((_(n, r, i), !h(i))) return;
          e.m = !1;
        }
        if (g(a) && !C(a)) {
          if (!e.h.F && e._ < 1) return;
          j(e, a), (t && t.A.l) || D(e, a);
        }
      }
      function D(e, t, n) {
        void 0 === n && (n = !1), e.h.F && e.m && k(t, n);
      }
      function L(e, t) {
        var n = e[ee];
        return (n ? S(n) : e)[t];
      }
      function W(e, t) {
        if (t in e)
          for (var n = Object.getPrototypeOf(e); n; ) {
            var r = Object.getOwnPropertyDescriptor(n, t);
            if (r) return r;
            n = Object.getPrototypeOf(n);
          }
      }
      function U(e) {
        e.P || ((e.P = !0), e.l && U(e.l));
      }
      function $(e) {
        e.o || (e.o = T(e.t));
      }
      function B(e, t, n) {
        var r = w(t)
          ? P("MapSet").N(t, n)
          : x(t)
          ? P("MapSet").T(t, n)
          : e.g
          ? (function (e, t) {
              var n = Array.isArray(e),
                r = {
                  i: n ? 1 : 0,
                  A: t ? t.A : N(),
                  P: !1,
                  I: !1,
                  D: {},
                  l: t,
                  t: e,
                  k: null,
                  o: null,
                  j: null,
                  C: !1,
                },
                a = r,
                o = ie;
              n && ((a = [r]), (o = le));
              var i = Proxy.revocable(a, o),
                l = i.revoke,
                u = i.proxy;
              return (r.k = u), (r.j = l), u;
            })(t, n)
          : P("ES5").J(t, n);
        return (n ? n.A : N()).p.push(r), r;
      }
      function V(e) {
        return (
          h(e) || m(22, e),
          (function e(t) {
            if (!g(t)) return t;
            var n,
              r = t[ee],
              a = v(t);
            if (r) {
              if (!r.P && (r.i < 4 || !P("ES5").K(r))) return r.t;
              (r.I = !0), (n = H(t, a)), (r.I = !1);
            } else n = H(t, a);
            return (
              y(n, function (t, a) {
                (r &&
                  (function (e, t) {
                    return 2 === v(e) ? e.get(t) : e[t];
                  })(r.t, t) === a) ||
                  _(n, t, e(a));
              }),
              3 === a ? new Set(n) : n
            );
          })(e)
        );
      }
      function H(e, t) {
        switch (t) {
          case 2:
            return new Map(e);
          case 3:
            return Array.from(e);
        }
        return T(e);
      }
      (function (e) {
        e.removeAllTargets = "USER_REMOVE_ALL_TARGETS";
      })(e || (e = {})),
        (function (e) {
          e.write = "USER_SETTINGS_WRITE";
        })(t || (t = {})),
        (function (e) {
          (e.write = "UI_STATE_WRITE"),
            (e.updateTouch = "UI_STATE_UPDATE_TOUCH"),
            (e.removeTouch = "UI_STATE_REMOVE_TOUCH");
        })(r || (r = {}));
      var Q,
        G,
        K = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"),
        q = "undefined" != typeof Map,
        Y = "undefined" != typeof Set,
        X =
          "undefined" != typeof Proxy &&
          void 0 !== Proxy.revocable &&
          "undefined" != typeof Reflect,
        J = K
          ? Symbol.for("immer-nothing")
          : (((Q = {})["immer-nothing"] = !0), Q),
        Z = K ? Symbol.for("immer-draftable") : "__$immer_draftable",
        ee = K ? Symbol.for("immer-state") : "__$immer_state",
        te = ("undefined" != typeof Symbol && Symbol.iterator) || "@@iterator",
        ne = "" + Object.prototype.constructor,
        re =
          "undefined" != typeof Reflect && Reflect.ownKeys
            ? Reflect.ownKeys
            : void 0 !== Object.getOwnPropertySymbols
            ? function (e) {
                return Object.getOwnPropertyNames(e).concat(
                  Object.getOwnPropertySymbols(e)
                );
              }
            : Object.getOwnPropertyNames,
        ae =
          Object.getOwnPropertyDescriptors ||
          function (e) {
            var t = {};
            return (
              re(e).forEach(function (n) {
                t[n] = Object.getOwnPropertyDescriptor(e, n);
              }),
              t
            );
          },
        oe = {},
        ie = {
          get: function (e, t) {
            if (t === ee) return e;
            var n = S(e);
            if (!b(n, t))
              return (function (e, t, n) {
                var r,
                  a = W(t, n);
                return a
                  ? "value" in a
                    ? a.value
                    : null === (r = a.get) || void 0 === r
                    ? void 0
                    : r.call(e.k)
                  : void 0;
              })(e, n, t);
            var r = n[t];
            return e.I || !g(r)
              ? r
              : r === L(e.t, t)
              ? ($(e), (e.o[t] = B(e.A.h, r, e)))
              : r;
          },
          has: function (e, t) {
            return t in S(e);
          },
          ownKeys: function (e) {
            return Reflect.ownKeys(S(e));
          },
          set: function (e, t, n) {
            var r = W(S(e), t);
            if (null == r ? void 0 : r.set) return r.set.call(e.k, n), !0;
            if (!e.P) {
              var a = L(S(e), t),
                o = null == a ? void 0 : a[ee];
              if (o && o.t === n) return (e.o[t] = n), (e.D[t] = !1), !0;
              if (
                (function (e, t) {
                  return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
                })(n, a) &&
                (void 0 !== n || b(e.t, t))
              )
                return !0;
              $(e), U(e);
            }
            return (
              (e.o[t] === n &&
                "number" != typeof n &&
                (void 0 !== n || t in e.o)) ||
              ((e.o[t] = n), (e.D[t] = !0), !0)
            );
          },
          deleteProperty: function (e, t) {
            return (
              void 0 !== L(e.t, t) || t in e.t
                ? ((e.D[t] = !1), $(e), U(e))
                : delete e.D[t],
              e.o && delete e.o[t],
              !0
            );
          },
          getOwnPropertyDescriptor: function (e, t) {
            var n = S(e),
              r = Reflect.getOwnPropertyDescriptor(n, t);
            return r
              ? {
                  writable: !0,
                  configurable: 1 !== e.i || "length" !== t,
                  enumerable: r.enumerable,
                  value: n[t],
                }
              : r;
          },
          defineProperty: function () {
            m(11);
          },
          getPrototypeOf: function (e) {
            return Object.getPrototypeOf(e.t);
          },
          setPrototypeOf: function () {
            m(12);
          },
        },
        le = {};
      y(ie, function (e, t) {
        le[e] = function () {
          return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
        };
      }),
        (le.deleteProperty = function (e, t) {
          return ie.deleteProperty.call(this, e[0], t);
        }),
        (le.set = function (e, t, n) {
          return ie.set.call(this, e[0], t, n, e[0]);
        });
      var ue = (function () {
          function e(e) {
            var t = this;
            (this.g = X),
              (this.F = !0),
              (this.produce = function (e, n, r) {
                if ("function" == typeof e && "function" != typeof n) {
                  var a = n;
                  n = e;
                  var o = t;
                  return function (e) {
                    var t = this;
                    void 0 === e && (e = a);
                    for (
                      var r = arguments.length,
                        i = Array(r > 1 ? r - 1 : 0),
                        l = 1;
                      l < r;
                      l++
                    )
                      i[l - 1] = arguments[l];
                    return o.produce(e, function (e) {
                      var r;
                      return (r = n).call.apply(r, [t, e].concat(i));
                    });
                  };
                }
                var i;
                if (
                  ("function" != typeof n && m(6),
                  void 0 !== r && "function" != typeof r && m(7),
                  g(e))
                ) {
                  var l = z(t),
                    u = B(t, e, void 0),
                    s = !0;
                  try {
                    (i = n(u)), (s = !1);
                  } finally {
                    s ? O(l) : M(l);
                  }
                  return "undefined" != typeof Promise && i instanceof Promise
                    ? i.then(
                        function (e) {
                          return I(l, r), R(e, l);
                        },
                        function (e) {
                          throw (O(l), e);
                        }
                      )
                    : (I(l, r), R(i, l));
                }
                if (!e || "object" != typeof e) {
                  if ((i = n(e)) === J) return;
                  return void 0 === i && (i = e), t.F && k(i, !0), i;
                }
                m(21, e);
              }),
              (this.produceWithPatches = function (e, n) {
                return "function" == typeof e
                  ? function (n) {
                      for (
                        var r = arguments.length,
                          a = Array(r > 1 ? r - 1 : 0),
                          o = 1;
                        o < r;
                        o++
                      )
                        a[o - 1] = arguments[o];
                      return t.produceWithPatches(n, function (t) {
                        return e.apply(void 0, [t].concat(a));
                      });
                    }
                  : [
                      t.produce(e, n, function (e, t) {
                        (r = e), (a = t);
                      }),
                      r,
                      a,
                    ];
                var r, a;
              }),
              "boolean" == typeof (null == e ? void 0 : e.useProxies) &&
                this.setUseProxies(e.useProxies),
              "boolean" == typeof (null == e ? void 0 : e.autoFreeze) &&
                this.setAutoFreeze(e.autoFreeze);
          }
          var t = e.prototype;
          return (
            (t.createDraft = function (e) {
              g(e) || m(8), h(e) && (e = V(e));
              var t = z(this),
                n = B(this, e, void 0);
              return (n[ee].C = !0), M(t), n;
            }),
            (t.finishDraft = function (e, t) {
              var n = (e && e[ee]).A;
              return I(n, t), R(void 0, n);
            }),
            (t.setAutoFreeze = function (e) {
              this.F = e;
            }),
            (t.setUseProxies = function (e) {
              e && !X && m(20), (this.g = e);
            }),
            (t.applyPatches = function (e, t) {
              var n;
              for (n = t.length - 1; n >= 0; n--) {
                var r = t[n];
                if (0 === r.path.length && "replace" === r.op) {
                  e = r.value;
                  break;
                }
              }
              var a = P("Patches").$;
              return h(e)
                ? a(e, t)
                : this.produce(e, function (e) {
                    return a(e, t.slice(n + 1));
                  });
            }),
            e
          );
        })(),
        se = new ue(),
        ce = se.produce;
      se.produceWithPatches.bind(se),
        se.setAutoFreeze.bind(se),
        se.setUseProxies.bind(se),
        se.applyPatches.bind(se),
        se.createDraft.bind(se),
        se.finishDraft.bind(se);
      const fe = ce,
        pe = (e, t) => {
          const { key: n, value: r } = t;
          return fe(e, (e) => {
            void 0 !== e[n]
              ? (e[n] = r)
              : console.warn("trying to update nonexistent key in reducer");
          });
        };
      var de = "undefined" != typeof Float32Array ? Float32Array : Array;
      function me() {
        var e = new de(3);
        return de != Float32Array && ((e[0] = 0), (e[1] = 0), (e[2] = 0)), e;
      }
      function he(e, t, n) {
        var r = new de(3);
        return (r[0] = e), (r[1] = t), (r[2] = n), r;
      }
      function ge(e, t, n) {
        return (
          (e[0] = t[0] - n[0]), (e[1] = t[1] - n[1]), (e[2] = t[2] - n[2]), e
        );
      }
      function ye(e, t, n) {
        return (
          (e[0] = t[0] / n[0]), (e[1] = t[1] / n[1]), (e[2] = t[2] / n[2]), e
        );
      }
      function ve(e, t, n) {
        return (e[0] = t[0] * n), (e[1] = t[1] * n), (e[2] = t[2] * n), e;
      }
      function be(e, t) {
        var n = t[0] - e[0],
          r = t[1] - e[1],
          a = t[2] - e[2];
        return Math.hypot(n, r, a);
      }
      function _e(e, t, n) {
        var r = t[0],
          a = t[1],
          o = t[2],
          i = n[3] * r + n[7] * a + n[11] * o + n[15];
        return (
          (i = i || 1),
          (e[0] = (n[0] * r + n[4] * a + n[8] * o + n[12]) / i),
          (e[1] = (n[1] * r + n[5] * a + n[9] * o + n[13]) / i),
          (e[2] = (n[2] * r + n[6] * a + n[10] * o + n[14]) / i),
          e
        );
      }
      Math.random,
        Math.PI,
        Math.hypot ||
          (Math.hypot = function () {
            for (var e = 0, t = arguments.length; t--; )
              e += arguments[t] * arguments[t];
            return Math.sqrt(e);
          });
      var we = ge,
        xe = ye;
      me();
      const Se = (
          (e, t, n) => (t, r) =>
            void 0 === t
              ? {
                  mapId: "albasrah",
                  mapGrid: !0,
                  contourmap: !1,
                  weaponType: "standardMortar",
                  weaponPlacementHelper: !1,
                  weaponPlacementLabel: !0,
                  fontSize: 16,
                  targetSpread: !1,
                  targetSplash: !1,
                  targetGrid: !1,
                  targetDistance: !1,
                  targetPlacementHelper: !1,
                  targetPlacementLabel: !1,
                  extraButtonsAlwaysShown: !1,
                  deleteMode: !1,
                  targetCompactMode: !1,
                  leftPanelCollapsed: !1,
                }
              : r.type !== e
              ? t
              : n(t, r.payload)
        )(t.write, 0, pe),
        Te = (e, t) =>
          void 0 === e
            ? {
                dragEntityId: null,
                dragStartPosition: he(0, 0, 0),
                mousePosition: he(0, 0, 0),
                mouseDown: !1,
                touches: new Map(),
                weaponCreationMode: !1,
              }
            : ((e, t) => {
                switch (t.type) {
                  case r.write:
                    return pe(e, t.payload);
                  case r.updateTouch:
                    return fe(e, (e) => {
                      e.touches.set(t.payload.identifier, t.payload);
                    });
                  case r.removeTouch:
                    return fe(e, (e) => {
                      e.touches.delete(t.payload.identifier);
                    });
                  default:
                    return e;
                }
              })(e, t),
        ke = {
          albasrah: {
            reference: "AAS_v1",
            minimap_image_src: "maps/albasrah_minimap.jpg",
            heightmap_image_src: "maps/albasrah_heightmap.png",
            landscape: {
              loc_x: -152406.40625,
              loc_y: -152400,
              scale_x: 100,
              scale_y: 100,
              scale_z: 10,
              resolution_x: 3049,
              resolution_y: 3049,
            },
            mapTexture: {
              size_x: 4096,
              size_y: 4096,
            },
            mapTextureCorner0: {
              loc_x: -152e3,
              loc_y: -152e3,
            },
            mapTextureCorner1: {
              loc_x: 152e3,
              loc_y: 152e3,
            },
            compression: {
              z_translate: 0,
            },
          },
          anvil: {
            reference: "AAS_v1",
            minimap_image_src: "maps/anvil_minimap.jpg",
            heightmap_image_src: "maps/anvil_heightmap.png",
            landscape: {
              loc_x: -204e3,
              loc_y: -204e3,
              scale_x: 75,
              scale_y: 75,
              scale_z: 45,
              resolution_x: 4081,
              resolution_y: 4081,
            },
            mapTexture: {
              size_x: 4096,
              size_y: 4096,
            },
            mapTextureCorner0: {
              loc_x: -204e3,
              loc_y: -204e3,
            },
            mapTextureCorner1: {
              loc_x: 102e3,
              loc_y: 102e3,
            },
            compression: {
              z_translate: 0,
            },
          },
          belaya: {
            reference: "AAS_v1",
            minimap_image_src: "maps/belaya_minimap.jpg",
            heightmap_image_src: "maps/belaya_heightmap.png",
            landscape: {
              loc_x: -201600,
              loc_y: -214200,
              scale_x: 100,
              scale_y: 100,
              scale_z: 120,
              resolution_x: 4033,
              resolution_y: 4033,
            },
            mapTexture: {
              size_x: 4096,
              size_y: 4096,
            },
            mapTextureCorner0: {
              loc_x: -195400,
              loc_y: 182500,
            },
            mapTextureCorner1: {
              loc_x: 195e3,
              loc_y: -208e3,
            },
            compression: {
              z_translate: 0,
            },
          },
          blackcoast: {
            reference: "AAS_v1",
            minimap_image_src: "maps/blackcoast_minimap.jpg",
            heightmap_image_src: "maps/blackcoast_heightmap.png",
            landscape: {
              loc_x: -204000.578125,
              loc_y: -214250.390625,
              scale_x: 100.3937,
              scale_y: 100.3937,
              scale_z: 80,
              resolution_x: 4033,
              resolution_y: 4033,
            },
            mapTexture: {
              size_x: 4096,
              size_y: 4096,
            },
            mapTextureCorner0: {
              loc_x: -229999.515625,
              loc_y: -212746.78125,
            },
            mapTextureCorner1: {
              loc_x: 229998.46875,
              loc_y: 247251.0625,
            },
            compression: {
              z_translate: 0,
            },
          },
          chora: {
            reference: "AAS_v1",
            minimap_image_src: "maps/chora_minimap.jpg",
            heightmap_image_src: "maps/chora_heightmap.png",
            landscape: {
              loc_x: -246400,
              loc_y: -190200,
              scale_x: 50,
              scale_y: 50,
              scale_z: 400,
              resolution_x: 8129,
              resolution_y: 4827,
            },
            mapTexture: {
              size_x: 4096,
              size_y: 4096,
            },
            mapTextureCorner0: {
              loc_x: -246400,
              loc_y: -266400,
            },
            mapTextureCorner1: {
              loc_x: 159990,
              loc_y: 14e4,
            },
            compression: {
              z_translate: 0,
            },
          },
          fallujah: {
            reference: "AAS_v1",
            minimap_image_src: "maps/fallujah_minimap.jpg",
            heightmap_image_src: "maps/fallujah_heightmap.png",
            landscape: {
              loc_x: -204e3,
              loc_y: -204e3,
              scale_x: 100,
              scale_y: 100,
              scale_z: 100,
              resolution_x: 4081,
              resolution_y: 4081,
            },
            mapTexture: {
              size_x: 4096,
              size_y: 4096,
            },
            mapTextureCorner0: {
              loc_x: -131500,
              loc_y: -154500,
            },
            mapTextureCorner1: {
              loc_x: 169e3,
              loc_y: 146e3,
            },
            compression: {
              z_translate: 0,
            },
          },
          foolsroad: {
            reference: "AAS_v1",
            minimap_image_src: "maps/foolsroad_minimap.jpg",
            heightmap_image_src: "maps/foolsroad_heightmap.png",
            landscape: {
              loc_x: -159809.515625,
              loc_y: -186630,
              scale_x: 100,
              scale_y: 100,
              scale_z: 320,
              resolution_x: 2806,
              resolution_y: 2806,
            },
            mapTexture: {
              size_x: 4096,
              size_y: 4096,
            },
            mapTextureCorner0: {
              loc_x: 44805.078125,
              loc_y: 44805.078125,
            },
            mapTextureCorner1: {
              loc_x: -132576.921875,
              loc_y: -132576.921875,
            },
            compression: {
              z_translate: 0,
            },
          },
          goosebay: {
            reference: "AAS_v1",
            minimap_image_src: "maps/goosebay_minimap.jpg",
            heightmap_image_src: "maps/goosebay_heightmap.png",
            contourmap_image_src: "maps/goosebay_contourmap.svg",
            landscape: {
              loc_x: -203256.890625,
              loc_y: -203274.84375,
              scale_x: 100,
              scale_y: 100,
              scale_z: 40,
              resolution_x: 4065,
              resolution_y: 4065,
            },
            mapTexture: {
              size_x: 4096,
              size_y: 4096,
            },
            mapTextureCorner0: {
              loc_x: -201657.890625,
              loc_y: -201674.84375,
            },
            mapTextureCorner1: {
              loc_x: 201523.078125,
              loc_y: 201503.078125,
            },
            compression: {
              z_translate: 0,
            },
          },
          gorodok: {
            reference: "AAS_v1",
            minimap_image_src: "maps/gorodok_minimap.jpg",
            heightmap_image_src: "maps/gorodok_heightmap.png",
            landscape: {
              loc_x: -203199.203125,
              loc_y: -203200,
              scale_x: 100,
              scale_y: 100,
              scale_z: 1e3,
              resolution_x: 4065,
              resolution_y: 4065,
            },
            mapTexture: {
              size_x: 4096,
              size_y: 4096,
            },
            mapTextureCorner0: {
              loc_x: -203199,
              loc_y: 203200,
            },
            mapTextureCorner1: {
              loc_x: 203201,
              loc_y: -203200,
            },
            compression: {
              z_translate: 0,
            },
          },
          harju: {
            reference: "AAS_v1",
            minimap_image_src: "maps/harju_minimap.jpg",
            heightmap_image_src: "maps/gorodok_heightmap.png",
            landscape: {
              loc_x: -201599.359375,
              loc_y: -201600.765625,
              scale_x: 100,
              scale_y: 100,
              scale_z: 100,
              resolution_x: 4033,
              resolution_y: 4033,
            },
            mapTexture: {
              size_x: 4096,
              size_y: 4096,
            },
            mapTextureCorner0: {
              loc_x: -201600,
              loc_y: -201600,
            },
            mapTextureCorner1: {
              loc_x: 201600,
              loc_y: 201600,
            },
            compression: {
              z_translate: 0,
            },
          },
          jensensrange: {
            reference: "v2",
            minimap_image_src: "maps/jensensrange_minimap.jpg",
            heightmap_image_src: "maps/jensensrange_heightmap.png",
            landscape: {
              loc_x: -204051.40625,
              loc_y: -204014.078125,
              scale_x: 100,
              scale_y: 100,
              scale_z: 100,
              resolution_x: 4081,
              resolution_y: 4081,
            },
            mapTexture: {
              size_x: 4096,
              size_y: 4096,
            },
            mapTextureCorner0: {
              loc_x: 200400,
              loc_y: -200400,
            },
            mapTextureCorner1: {
              loc_x: -200400,
              loc_y: 200400,
            },
            compression: {
              z_translate: 0,
            },
          },
          kamdesh: {
            reference: "AAS_v1",
            minimap_image_src: "maps/kamdesh_minimap.jpg",
            heightmap_image_src: "maps/kamdesh_heightmap.png",
            landscape: {
              loc_x: -201600,
              loc_y: -201600,
              scale_x: 100,
              scale_y: 100,
              scale_z: 135,
              resolution_x: 4033,
              resolution_y: 4033,
            },
            mapTexture: {
              size_x: 4096,
              size_y: 4096,
            },
            mapTextureCorner0: {
              loc_x: -201600,
              loc_y: -201600,
            },
            mapTextureCorner1: {
              loc_x: 201600,
              loc_y: 201600,
            },
            compression: {
              z_translate: 0,
            },
          },
          kohat: {
            reference: "AAS_v1",
            minimap_image_src: "maps/kohat_minimap.jpg",
            heightmap_image_src: "maps/kohat_heightmap.png",
            landscape: {
              loc_x: -201602.3125,
              loc_y: -201600,
              scale_x: 100,
              scale_y: 100,
              scale_z: 75,
              resolution_x: 4065,
              resolution_y: 4065,
            },
            mapTexture: {
              size_x: 4096,
              size_y: 4096,
            },
            mapTextureCorner0: {
              loc_x: -23e4,
              loc_y: -23e4,
            },
            mapTextureCorner1: {
              loc_x: 231700,
              loc_y: 231700,
            },
            compression: {
              z_translate: 0,
            },
          },
          kokan: {
            reference: "AAS_v1",
            minimap_image_src: "maps/kokan_minimap.jpg",
            heightmap_image_src: "maps/kokan_heightmap.png",
            contourmap_image_src: "maps/kokan_contourmap.svg",
            landscape: {
              loc_x: -133299.648438,
              loc_y: -171400,
              scale_x: 50,
              scale_y: 50,
              scale_z: 100,
              resolution_x: 6097,
              resolution_y: 7367,
            },
            mapTexture: {
              size_x: 4096,
              size_y: 4096,
            },
            mapTextureCorner0: {
              loc_x: 142013.671875,
              loc_y: 142013.671875,
            },
            mapTextureCorner1: {
              loc_x: -107634.9375,
              loc_y: -107566.75,
            },
            compression: {
              z_translate: 0,
            },
          },
          lashkar: {
            reference: "AAS_v1",
            minimap_image_src: "maps/lashkar_minimap.jpg",
            heightmap_image_src: "maps/lashkar_heightmap.png",
            landscape: {
              loc_x: -216700,
              loc_y: -216700,
              scale_x: 100,
              scale_y: 100,
              scale_z: 150,
              resolution_x: 4336,
              resolution_y: 4336,
            },
            mapTexture: {
              size_x: 4096,
              size_y: 4096,
            },
            mapTextureCorner0: {
              loc_x: 216700,
              loc_y: 216700,
            },
            mapTextureCorner1: {
              loc_x: -216700,
              loc_y: -216700,
            },
            compression: {
              z_translate: 0,
            },
          },
          logar: {
            reference: "AAS_v1",
            minimap_image_src: "maps/logar_minimap.jpg",
            heightmap_image_src: "maps/logar_heightmap.png",
            landscape: {
              loc_x: -138604.3063,
              loc_y: -126005.56756,
              scale_x: 99.98999,
              scale_y: 99.98999,
              scale_z: 49.98999,
              resolution_x: 2773,
              resolution_y: 1891,
            },
            mapTexture: {
              size_x: 4096,
              size_y: 4096,
            },
            mapTextureCorner0: {
              loc_x: 87978.328125,
              loc_y: 62921.710938,
            },
            mapTextureCorner1: {
              loc_x: -88145.140625,
              loc_y: -113238.757812,
            },
            compression: {
              z_translate: 0,
            },
          },
          manic: {
            reference: "AAS_v1",
            minimap_image_src: "maps/manic_minimap.jpg",
            heightmap_image_src: "maps/manic_heightmap.png",
            landscape: {
              loc_x: -203222.328125,
              loc_y: -203210.015625,
              scale_x: 100,
              scale_y: 100,
              scale_z: 300,
              resolution_x: 4065,
              resolution_y: 4065,
            },
            mapTexture: {
              size_x: 4096,
              size_y: 4096,
            },
            mapTextureCorner0: {
              loc_x: -201657.890625,
              loc_y: -201674.84375,
            },
            mapTextureCorner1: {
              loc_x: 201523.078125,
              loc_y: 201503.078125,
            },
            compression: {
              z_translate: 0,
            },
          },
          manicouagan: {
            reference: "AAS_v1",
            minimap_image_src: "maps/manicouagan_minimap.jpg",
            heightmap_image_src: "maps/manicouagan_heightmap.png",
            landscape: {
              loc_x: -203221.609375,
              loc_y: -203209.890625,
              scale_x: 100,
              scale_y: 100,
              scale_z: 300,
              resolution_x: 4065,
              resolution_y: 4065,
            },
            mapTexture: {
              size_x: 4096,
              size_y: 4096,
            },
            mapTextureCorner0: {
              loc_x: -201657.890625,
              loc_y: -201674.84375,
            },
            mapTextureCorner1: {
              loc_x: 201523.078125,
              loc_y: 201503.078125,
            },
            compression: {
              z_translate: 0,
            },
          },
          mestia: {
            reference: "AAS_v1",
            minimap_image_src: "maps/mestia_minimap.jpg",
            heightmap_image_src: "maps/mestia_heightmap.png",
            landscape: {
              loc_x: -154500,
              loc_y: -116195.453125,
              scale_x: 100,
              scale_y: 100,
              scale_z: 120,
              resolution_x: 3061,
              resolution_y: 2551,
            },
            mapTexture: {
              size_x: 4096,
              size_y: 4096,
            },
            mapTextureCorner0: {
              loc_x: 12e4,
              loc_y: 13e4,
            },
            mapTextureCorner1: {
              loc_x: -12e4,
              loc_y: -11e4,
            },
            compression: {
              z_translate: 0,
            },
          },
          mutaha: {
            reference: "AAS_v1",
            minimap_image_src: "maps/mutaha_minimap.jpg",
            heightmap_image_src: "maps/mutaha_heightmap.png",
            landscape: {
              loc_x: -178502,
              loc_y: -178500,
              scale_x: 100,
              scale_y: 100,
              scale_z: 30,
              resolution_x: 4081,
              resolution_y: 4081,
            },
            mapTexture: {
              size_x: 4096,
              size_y: 4096,
            },
            mapTextureCorner0: {
              loc_x: -93500,
              loc_y: 161500,
            },
            mapTextureCorner1: {
              loc_x: 182e3,
              loc_y: -114e3,
            },
            compression: {
              z_translate: 0,
            },
          },
          narva: {
            reference: "AAS_v1",
            minimap_image_src: "maps/narva_minimap.jpg",
            heightmap_image_src: "maps/narva_heightmap.png",
            landscape: {
              loc_x: -203200,
              loc_y: -203200,
              scale_x: 100,
              scale_y: 100,
              scale_z: 100,
              resolution_x: 4065,
              resolution_y: 4065,
            },
            mapTexture: {
              size_x: 4096,
              size_y: 4096,
            },
            mapTextureCorner0: {
              loc_x: -138970.6875,
              loc_y: 139792.515625,
            },
            mapTextureCorner1: {
              loc_x: 141029.375,
              loc_y: -140207.4375,
            },
            compression: {
              z_translate: 0,
            },
          },
          skorpo: {
            reference: "AAS_v1",
            minimap_image_src: "maps/skorpo_minimap_aas_v1.jpg",
            heightmap_image_src: "maps/skorpo_heightmap.png",
            landscape: {
              loc_x: -481127.25,
              loc_y: -394791.78125,
              scale_x: 120,
              scale_y: 120,
              scale_z: 350,
              slice_x: 508,
              slice_y: 1524,
              rot_z: -2.006195,
              resolution_x: 7113,
              resolution_y: 5081,
            },
            mapTexture: {
              size_x: 4096,
              size_y: 4096,
            },
            mapTextureCorner0: {
              loc_x: 34e4,
              loc_y: 25e4,
            },
            mapTextureCorner1: {
              loc_x: -13e4,
              loc_y: -22e4,
            },
            compression: {
              z_translate: 0,
            },
          },
          skorpoFull: {
            reference: "Invasion_v1",
            minimap_image_src: "maps/skorpo_minimap_full.jpg",
            heightmap_image_src: "maps/skorpo_heightmap.png",
            landscape: {
              loc_x: -481127.25,
              loc_y: -394791.78125,
              scale_x: 120,
              scale_y: 120,
              scale_z: 350,
              slice_x: 508,
              slice_y: 1524,
              rot_z: -2.006195,
              resolution_x: 7113,
              resolution_y: 5081,
            },
            mapTexture: {
              size_x: 4096,
              size_y: 4096,
            },
            mapTextureCorner0: {
              loc_x: 38e4,
              loc_y: 38e4,
            },
            mapTextureCorner1: {
              loc_x: -38e4,
              loc_y: -38e4,
            },
            compression: {
              z_translate: 0,
            },
          },
          sumari: {
            reference: "AAS_v1",
            minimap_image_src: "maps/sumari_minimap.jpg",
            heightmap_image_src: "maps/sumari_heightmap.png",
            landscape: {
              loc_x: -68200.820312,
              loc_y: -37199.453125,
              scale_x: 100,
              scale_y: 100,
              scale_z: 75,
              resolution_x: 1427,
              resolution_y: 1055,
            },
            mapTexture: {
              size_x: 4096,
              size_y: 4096,
            },
            mapTextureCorner0: {
              loc_x: -63973.925781,
              loc_y: -44728.078125,
            },
            mapTextureCorner1: {
              loc_x: 66033.578125,
              loc_y: 85297.234375,
            },
            compression: {
              z_translate: 0,
            },
          },
          tallil: {
            reference: "AAS_v1",
            minimap_image_src: "maps/tallil_minimap.jpg",
            heightmap_image_src: "maps/tallil_heightmap.png",
            landscape: {
              loc_x: -228598.625,
              loc_y: -228600.65625,
              scale_x: 100,
              scale_y: 100,
              scale_z: 125,
              resolution_x: 4573,
              resolution_y: 4573,
            },
            mapTexture: {
              size_x: 4096,
              size_y: 4096,
            },
            mapTextureCorner0: {
              loc_x: -234000.015625,
              loc_y: -234e3,
            },
            mapTextureCorner1: {
              loc_x: 234e3,
              loc_y: 234e3,
            },
            compression: {
              z_translate: 0,
            },
          },
          yehorivka: {
            reference: "AAS_v1",
            minimap_image_src: "maps/yehorivka_minimap.jpg",
            heightmap_image_src: "maps/yehorivka_heightmap.png",
            landscape: {
              loc_x: -330197,
              loc_y: -330200,
              scale_x: 100,
              scale_y: 100,
              scale_z: 400,
              resolution_x: 6351,
              resolution_y: 6351,
            },
            mapTexture: {
              size_x: 4096,
              size_y: 4096,
            },
            mapTextureCorner0: {
              loc_x: -330197.40625,
              loc_y: -330199.5,
            },
            mapTextureCorner1: {
              loc_x: 304803,
              loc_y: 304800,
            },
            compression: {
              z_translate: 0,
            },
          },
          yehorivka_skirmish_v1: {
            reference: "Skirmish_v1",
            minimap_image_src: "maps/yehorivka_skirmish_v1_minimap.jpg",
            heightmap_image_src: "maps/yehorivka_heightmap.png",
            landscape: {
              loc_x: -330197,
              loc_y: -330200,
              scale_x: 100,
              scale_y: 100,
              scale_z: 400,
              resolution_x: 6351,
              resolution_y: 6351,
            },
            mapTexture: {
              size_x: 4096,
              size_y: 4096,
            },
            mapTextureCorner0: {
              loc_x: -12e4,
              loc_y: 75e3,
            },
            mapTextureCorner1: {
              loc_x: 158e3,
              loc_y: -203e3,
            },
            compression: {
              z_translate: 0,
            },
          },
        };
      function Ee() {
        var e = new de(16);
        return (
          de != Float32Array &&
            ((e[1] = 0),
            (e[2] = 0),
            (e[3] = 0),
            (e[4] = 0),
            (e[6] = 0),
            (e[7] = 0),
            (e[8] = 0),
            (e[9] = 0),
            (e[11] = 0),
            (e[12] = 0),
            (e[13] = 0),
            (e[14] = 0)),
          (e[0] = 1),
          (e[5] = 1),
          (e[10] = 1),
          (e[15] = 1),
          e
        );
      }
      function Ce(e) {
        var t = new de(16);
        return (
          (t[0] = e[0]),
          (t[1] = e[1]),
          (t[2] = e[2]),
          (t[3] = e[3]),
          (t[4] = e[4]),
          (t[5] = e[5]),
          (t[6] = e[6]),
          (t[7] = e[7]),
          (t[8] = e[8]),
          (t[9] = e[9]),
          (t[10] = e[10]),
          (t[11] = e[11]),
          (t[12] = e[12]),
          (t[13] = e[13]),
          (t[14] = e[14]),
          (t[15] = e[15]),
          t
        );
      }
      function Pe(e, t) {
        var n = t[0],
          r = t[1],
          a = t[2],
          o = t[3],
          i = t[4],
          l = t[5],
          u = t[6],
          s = t[7],
          c = t[8],
          f = t[9],
          p = t[10],
          d = t[11],
          m = t[12],
          h = t[13],
          g = t[14],
          y = t[15],
          v = n * l - r * i,
          b = n * u - a * i,
          _ = n * s - o * i,
          w = r * u - a * l,
          x = r * s - o * l,
          S = a * s - o * u,
          T = c * h - f * m,
          k = c * g - p * m,
          E = c * y - d * m,
          C = f * g - p * h,
          P = f * y - d * h,
          N = p * y - d * g,
          I = v * N - b * P + _ * C + w * E - x * k + S * T;
        return I
          ? ((I = 1 / I),
            (e[0] = (l * N - u * P + s * C) * I),
            (e[1] = (a * P - r * N - o * C) * I),
            (e[2] = (h * S - g * x + y * w) * I),
            (e[3] = (p * x - f * S - d * w) * I),
            (e[4] = (u * E - i * N - s * k) * I),
            (e[5] = (n * N - a * E + o * k) * I),
            (e[6] = (g * _ - m * S - y * b) * I),
            (e[7] = (c * S - p * _ + d * b) * I),
            (e[8] = (i * P - l * E + s * T) * I),
            (e[9] = (r * E - n * P - o * T) * I),
            (e[10] = (m * x - h * _ + y * v) * I),
            (e[11] = (f * _ - c * x - d * v) * I),
            (e[12] = (l * k - i * C - u * T) * I),
            (e[13] = (n * C - r * k + a * T) * I),
            (e[14] = (h * b - m * w - g * v) * I),
            (e[15] = (c * w - f * b + p * v) * I),
            e)
          : null;
      }
      function Ne(e, t, n) {
        var r,
          a,
          o,
          i,
          l,
          u,
          s,
          c,
          f,
          p,
          d,
          m,
          h = n[0],
          g = n[1],
          y = n[2];
        return (
          t === e
            ? ((e[12] = t[0] * h + t[4] * g + t[8] * y + t[12]),
              (e[13] = t[1] * h + t[5] * g + t[9] * y + t[13]),
              (e[14] = t[2] * h + t[6] * g + t[10] * y + t[14]),
              (e[15] = t[3] * h + t[7] * g + t[11] * y + t[15]))
            : ((r = t[0]),
              (a = t[1]),
              (o = t[2]),
              (i = t[3]),
              (l = t[4]),
              (u = t[5]),
              (s = t[6]),
              (c = t[7]),
              (f = t[8]),
              (p = t[9]),
              (d = t[10]),
              (m = t[11]),
              (e[0] = r),
              (e[1] = a),
              (e[2] = o),
              (e[3] = i),
              (e[4] = l),
              (e[5] = u),
              (e[6] = s),
              (e[7] = c),
              (e[8] = f),
              (e[9] = p),
              (e[10] = d),
              (e[11] = m),
              (e[12] = r * h + l * g + f * y + t[12]),
              (e[13] = a * h + u * g + p * y + t[13]),
              (e[14] = o * h + s * g + d * y + t[14]),
              (e[15] = i * h + c * g + m * y + t[15])),
          e
        );
      }
      function Ie(e, t, n) {
        var r = n[0],
          a = n[1],
          o = n[2];
        return (
          (e[0] = t[0] * r),
          (e[1] = t[1] * r),
          (e[2] = t[2] * r),
          (e[3] = t[3] * r),
          (e[4] = t[4] * a),
          (e[5] = t[5] * a),
          (e[6] = t[6] * a),
          (e[7] = t[7] * a),
          (e[8] = t[8] * o),
          (e[9] = t[9] * o),
          (e[10] = t[10] * o),
          (e[11] = t[11] * o),
          (e[12] = t[12]),
          (e[13] = t[13]),
          (e[14] = t[14]),
          (e[15] = t[15]),
          e
        );
      }
      function Oe(e, t, n) {
        var r = Math.sin(n),
          a = Math.cos(n),
          o = t[0],
          i = t[1],
          l = t[2],
          u = t[3],
          s = t[4],
          c = t[5],
          f = t[6],
          p = t[7];
        return (
          t !== e &&
            ((e[8] = t[8]),
            (e[9] = t[9]),
            (e[10] = t[10]),
            (e[11] = t[11]),
            (e[12] = t[12]),
            (e[13] = t[13]),
            (e[14] = t[14]),
            (e[15] = t[15])),
          (e[0] = o * a + s * r),
          (e[1] = i * a + c * r),
          (e[2] = l * a + f * r),
          (e[3] = u * a + p * r),
          (e[4] = s * a - o * r),
          (e[5] = c * a - i * r),
          (e[6] = f * a - l * r),
          (e[7] = p * a - u * r),
          e
        );
      }
      function Me(e, t) {
        return (
          (e[0] = 1),
          (e[1] = 0),
          (e[2] = 0),
          (e[3] = 0),
          (e[4] = 0),
          (e[5] = 1),
          (e[6] = 0),
          (e[7] = 0),
          (e[8] = 0),
          (e[9] = 0),
          (e[10] = 1),
          (e[11] = 0),
          (e[12] = t[0]),
          (e[13] = t[1]),
          (e[14] = t[2]),
          (e[15] = 1),
          e
        );
      }
      function ze(e, t) {
        return (
          (e[0] = t[0]),
          (e[1] = 0),
          (e[2] = 0),
          (e[3] = 0),
          (e[4] = 0),
          (e[5] = t[1]),
          (e[6] = 0),
          (e[7] = 0),
          (e[8] = 0),
          (e[9] = 0),
          (e[10] = t[2]),
          (e[11] = 0),
          (e[12] = 0),
          (e[13] = 0),
          (e[14] = 0),
          (e[15] = 1),
          e
        );
      }
      function Ae(e, t) {
        return (e[0] = t[12]), (e[1] = t[13]), (e[2] = t[14]), e;
      }
      function Re(e, t) {
        var n = t[0],
          r = t[1],
          a = t[2],
          o = t[4],
          i = t[5],
          l = t[6],
          u = t[8],
          s = t[9],
          c = t[10];
        return (
          (e[0] = Math.hypot(n, r, a)),
          (e[1] = Math.hypot(o, i, l)),
          (e[2] = Math.hypot(u, s, c)),
          e
        );
      }
      var je, Fe;
      ((Fe = je || (je = {})).changeZoom = "CAMERA_CHANGE_ZOOM"),
        (Fe.move = "CAMERA_MOVE"),
        (Fe.setTransform = "CAMERA_SET_TRANSFORM");
      const De = (e) => Re(me(), e.transform)[0],
        Le = 0.01,
        We = 1018.59,
        Ue = ((50 / 60) * Math.PI) / 180 / 2,
        $e = 600,
        Be = 1200,
        Ve = ((100 / 60) * Math.PI) / 180 / 2,
        He = 1e3,
        Qe = 4e3,
        Ge = (5 * Math.PI) / 180 / 2,
        Ke = ((200 / 60) * Math.PI) / 180 / 2;
      function qe(e) {
        return function (t) {
          var n = t.dispatch,
            r = t.getState;
          return function (t) {
            return function (a) {
              return "function" == typeof a ? a(n, r, e) : t(a);
            };
          };
        };
      }
      var Ye = qe();
      Ye.withExtraArgument = qe;
      const Xe = Ye;
      var Je, Ze, et, tt, nt;
      ((nt = Je || (Je = {})).add = "ENTITY_ADD"),
        (nt.set = "ENTITY_SET"),
        (nt.setAll = "ENTITY_SET_ALL"),
        (nt.remove = "ENTITY_REMOVE"),
        (nt.removeAllTargets = "ENTITY_REMOVE_ALL_TARGETS"),
        ((tt = Ze || (Ze = {})).moveTo = "TRANSFORM_MOVE_TO"),
        (tt.moveBy = "TRANSFORM_MOVE_BY"),
        (function (e) {
          (e.setActive = "WEAPON_SET_ACTIVE"),
            (e.toggleActive = "WEAPON_TOGGLE_ACTIVE"),
            (e.pickActive = "WEAPON_PICK_ACTIVE"),
            (e.setHeightOverGround = "WEAPON_SET_HEIGHT_OVER_GROUND"),
            (e.setWeaponType = "WEAPON_SET_TYPE");
        })(et || (et = {}));
      const rt = (e) => (t) => Ne(Ee(), t, e),
        at = (e, t, n) => Me(Ee(), he(e, t, n)),
        ot = (e) => Ae(me(), e),
        it = (e, t) => {
          const n = [0, 1, 4, 5, 12, 13].map((e) => t[e]);
          e.transform(...n);
        },
        lt = (e) => {
          const t = e.target.getBoundingClientRect();
          return he(e.clientX - t.left, e.clientY - t.top, 0);
        },
        ut = (e, t) => {
          const n = Pe(Ee(), e.transform);
          return _e(me(), t, n);
        },
        st = (e, t) => {
          const n = Re(me(), e.transform);
          return ye(n, t, n);
        },
        ct = (e, t) => {
          const n = pt(e, t);
          return n[0] < 0 || n[0] > 23 || n[1] < 0
            ? ["--", "-", "-"]
            : [
                `${String.fromCharCode(65 + n[0])}${1 + n[1]}`,
                n[2].toString(),
                n[3].toString(),
              ];
        },
        ft = (e) => `${e[0]}-${e[1]}-${e[2]}`,
        pt = (e, t) => {
          const n = Ae(me(), e.transform),
            r = t[0] - n[0],
            a = t[1] - n[1],
            o = Math.floor(r / 3e4),
            i = Math.floor(a / 3e4),
            l =
              7 + Math.floor((r % 3e4) / 1e4) - 3 * Math.floor((a % 3e4) / 1e4),
            u =
              7 +
              Math.floor((r % 1e4) / 3334) -
              3 * Math.floor((a % 1e4) / 3334);
          return o < 0 || o > 23 || i < 0 ? [-1, -1, -1, -1] : [o, i, l, u];
        },
        dt = () => ({
          transform: new Map(),
          weapon: new Map(),
          entity: new Map(),
        }),
        mt = (e, t) => {
          let n = [];
          return (
            e.entity.forEach((e, r) => {
              t(e) && n.push(r);
            }),
            n
          );
        },
        ht = (e, t, n) => {
          const r = Object.keys(e);
          let a = e;
          return (
            r.forEach((r) => {
              let o = ((e, t, n) => {
                switch (t) {
                  case "transform":
                    return ((e) => {
                      return (
                        (t = e.payload.location),
                        {
                          transform: Me(Ee(), t),
                        }
                      );
                      var t;
                    })(n);
                  case "weapon":
                    return ((e, t) =>
                      "Weapon" === t.payload.entityType
                        ? {
                            weaponType: "standardMortar",
                            isActive: 0 === e.weapon.size,
                            heightOverGround: 0,
                          }
                        : null)(e, n);
                  case "entity":
                    return ((e) => ({
                      entityType: e.payload.entityType,
                      entityId: e.payload.entityId,
                    }))(n);
                }
              })(e, r, n);
              null !== o && a[r].set(t, o);
            }),
            a
          );
        },
        gt = (e, t) => {
          Object.keys(e).forEach((n) => {
            e[n].delete(t);
          });
        },
        yt = s({
          transform: (e, t) => {
            if (void 0 === e) return new Map();
            switch (t.type) {
              case Ze.moveBy:
                return fe(e, (e) => {
                  const n = t.payload.entityId,
                    r = e.get(n);
                  return (
                    r &&
                      ((r.transform = rt(t.payload.vector)(r.transform)),
                      e.set(n, r)),
                    e
                  );
                });
              case Ze.moveTo:
                return fe(e, (e) => {
                  const n = t.payload.entityId,
                    r = e.get(n);
                  var a;
                  return (
                    r &&
                      ((r.transform = ((a = t.payload.location),
                      (e) => {
                        const t = Ae(me(), e),
                          n = ge(me(), a, t);
                        return rt(n)(e);
                      })(r.transform)),
                      e.set(n, r)),
                    e
                  );
                });
              default:
                return e;
            }
          },
          weapon: (e, t) => {
            if (void 0 === e) return new Map();
            switch (t.type) {
              case et.setActive:
                return fe(e, (e) => {
                  let n = e.get(t.payload.entityId);
                  n && (n.isActive = t.payload.newState);
                });
              case et.toggleActive:
                return fe(e, (e) => {
                  let n = e.get(t.payload.entityId);
                  n && (n.isActive = !n.isActive);
                });
              case et.pickActive:
                return fe(e, (e) => {
                  e.forEach((e, n) => {
                    e.isActive = n === t.payload.entityId;
                  });
                });
              case et.setHeightOverGround:
                return fe(e, (e) => {
                  e.forEach((e, n) => {
                    e.heightOverGround = t.payload.newHeight;
                  });
                });
              default:
                return e;
            }
          },
          entity: (e, t) => (void 0 === e ? new Map() : e),
        }),
        vt = (e) => {
          let t = {};
          return (
            Object.keys(e).forEach((n) => {
              let r = [];
              e[n].forEach((e, t) => {
                r.push([t, e]);
              }),
                (t[n] = r);
            }),
            t
          );
        };
      var bt, _t, wt, xt;
      !(function (e) {
        (e.creatingSession = "REPLICATION_CREATING_SESSION"),
          (e.connectionReady = "REPLICATION_CONNECTION_READY"),
          (e.connectionClosed = "REPLICATION_CONNECTION_CLOSED"),
          (e.connectionError = "REPLICATION_CONNECTION_ERROR"),
          (e.receiveMessage = "REPLICATION_RECEIVE_MESSAGE"),
          (e.sendPing = "REPLICATION_SEND_PING"),
          (e.noop = "REPLICATION_NOOP");
      })(bt || (bt = {})),
        (function (e) {
          (e.create = "SESSION_CREATE"),
            (e.started = "SESSION_STARTED"),
            (e.ended = "SESSION_ENDED"),
            (e.join = "SESSION_JOIN"),
            (e.leave = "SESSION_LEAVE"),
            (e.addUser = "SESSION_ADD_USER"),
            (e.removeUser = "SESSION_REMOVE_USER"),
            (e.changeUserName = "SESSION_CHANGE_USER_NAME"),
            (e.userNameChanged = "SESSION_USER_NAME_CHANGED"),
            (e.sendMessage = "REPLICATION_SEND_MESSAGE");
        })(_t || (_t = {})),
        (function (e) {
          (e.action = "ACTION"),
            (e.joined = "JOINED"),
            (e.userJoined = "USER_JOINED"),
            (e.userLeft = "USER_LEFT"),
            (e.userChangedName = "USER_CHANGED_NAME");
        })(wt || (wt = {})),
        (function (e) {
          (e.action = "ACTION"),
            (e.create = "CREATE"),
            (e.join = "JOIN"),
            (e.ping = "PING"),
            (e.changeName = "CHANGE_NAME"),
            (e.leave = "LEAVE");
        })(xt || (xt = {}));
      const St = (e, t) => ({
          type: _t.create,
          payload: {
            serverAddress: e,
            serializableState: vt(t.components),
          },
        }),
        Tt = (e, t) => ({
          type: _t.join,
          payload: {
            serverAddress: e,
            sessionId: t,
          },
        }),
        kt = (e, t) => ({
          type: _t.sendMessage,
          payload: {
            userId: e,
            message: t,
          },
        }),
        Et = () => ({
          type: _t.leave,
          payload: {},
        }),
        Ct = (e) => ({
          command: wt.action,
          payload: e,
        });
      var Pt;
      !(function (e) {
        e.set = "MINIMAP_SET";
      })(Pt || (Pt = {}));
      const Nt = (e, t) => ({
          type: Ze.moveTo,
          payload: {
            entityId: e,
            location: t,
          },
        }),
        It = (e, t) => ({
          type: Je.add,
          payload: {
            location: e,
            entityType: "Weapon",
          },
        }),
        Ot = (e, t, n) => {
          let r = n,
            a = [];
          return (
            At(
              e,
              (e) => "Weapon" === e.entityType || "Target" === e.entityType
            ).forEach((e) => {
              const n = Ae(me(), e.transform),
                o = be(t, n);
              o < r && ((r = o), a.push(e));
            }),
            a
          );
        },
        Mt = (e, t) => {
          let n = [];
          return (
            Object.keys(e.components).forEach((r) => {
              const a = e.components[r].get(t);
              a && n.push(a);
            }),
            Object.assign({}, ...n)
          );
        },
        zt = (e, t) => {
          const n = mt(e.components, (e) => e.entityType === t);
          let r = [];
          return (
            n.forEach((t) => {
              const n = Mt(e, t);
              n && r.push(n);
            }),
            r
          );
        },
        At = (e, t) => {
          const n = mt(e.components, (e) => t(e));
          let r = [];
          return (
            n.forEach((t) => {
              const n = Mt(e, t);
              n && r.push(n);
            }),
            r
          );
        },
        Rt = (e, t, n) => e.components[n].get(t) || null,
        jt = (e) => {
          e.sort((e, t) => e.entityId - t.entityId);
        };
      class Ft {
        constructor(e, t) {
          (this.sessionId = null),
            (this.wsClosed = !1),
            (this.dispatch = e),
            (this.worker = new Worker(new URL(n.p + n.u(844), n.b))),
            (this.worker.onmessage = (e) => this.onWorkerMessage(e.data));
        }
        static create(e, t, n) {
          let r = new Ft(e, t);
          return (
            r.sendToWorker({
              func: "CREATE",
              payload: {
                serverAddress: t,
                serializableState: n,
              },
            }),
            r
          );
        }
        static join(e, t, n) {
          let r = new Ft(e, t);
          return (
            r.sendToWorker({
              func: "JOIN",
              payload: {
                serverAddress: t,
                sessionId: n,
              },
            }),
            r
          );
        }
        onWorkerMessage(e) {
          switch (e.event) {
            case "DISPATCH":
              return void this.dispatch(e.payload.action);
            case "SESSION_ID":
              return void (this.sessionId = e.payload.sessionId);
            case "CLOSE":
            case "ERROR":
              return (
                this.dispatch({
                  type: _t.ended,
                  payload: {
                    sessionId: this.sessionId,
                  },
                }),
                this.terminate(),
                null
              );
            default:
              return null;
          }
        }
        changeName(e) {
          null !== this.sessionId &&
            this.sendToWorker({
              func: "CHANGE_NAME",
              payload: {
                newName: e,
              },
            });
        }
        terminate() {
          (this.wsClosed = !0),
            (this.sessionId = null),
            this.worker.terminate();
        }
        send(e) {
          null !== this.sessionId &&
            this.sendToWorker({
              func: "SEND",
              payload: {
                message: e,
              },
            });
        }
        sendToWorker(e) {
          window.Worker && this.worker.postMessage(e);
        }
      }
      let Dt = null;
      const Lt = (e) => (t) => (n) => {
          const r = Wt(e, n);
          return t(r || n);
        },
        Wt = (e, n) => {
          const r = e.dispatch;
          switch (n.type) {
            case _t.create:
              return (
                Ht(),
                Dt && Dt.terminate(),
                (Dt = Ft.create(
                  r,
                  n.payload.serverAddress,
                  n.payload.serializableState
                )),
                null
              );
            case _t.join:
              return (
                Ht(),
                Dt && Dt.terminate(),
                (Dt = Ft.join(r, n.payload.serverAddress, n.payload.sessionId)),
                null
              );
            case _t.leave:
              return Ht(), Dt && Dt.terminate(), null;
            case _t.changeUserName:
              return Ht(), Dt && Dt.changeName(n.payload.newName), null;
            case bt.receiveMessage:
              return Ut(r, n.payload.message);
            case Ze.moveBy:
            case Ze.moveTo:
              return Dt && Qt(Dt, n.payload.entityId, e.getState, r), null;
            case Je.add:
            case Je.remove:
              return e.getState().session
                ? (null == Dt || Dt.send(Ct(n)),
                  {
                    type: bt.noop,
                    payload: {},
                  })
                : null;
            case Pt.set:
            case t.write:
            default:
              return null;
          }
        },
        Ut = (e, t) => {
          switch (t.command) {
            case wt.action:
              return t.payload;
            case wt.joined:
              return (
                e(
                  ((i = t.payload.state),
                  {
                    type: Je.setAll,
                    payload: {
                      components: i,
                    },
                  })
                ),
                e(
                  ((r = t.payload.sessionId),
                  (a = t.payload.userId),
                  (o = t.payload.users),
                  {
                    type: _t.started,
                    payload: {
                      sessionId: r,
                      userId: a,
                      users: o,
                    },
                  })
                ),
                null
              );
            case wt.userJoined:
              return (
                e(
                  ((n = {
                    id: t.payload.id,
                    name: t.payload.name,
                  }),
                  {
                    type: _t.addUser,
                    payload: {
                      user: n,
                    },
                  })
                ),
                null
              );
            case wt.userChangedName:
              return (
                e(
                  ((e, t) => ({
                    type: _t.userNameChanged,
                    payload: {
                      userId: e,
                      newName: t,
                    },
                  }))(t.payload.userId, t.payload.name)
                ),
                null
              );
            case wt.userLeft:
              return (
                e(
                  ((e) => ({
                    type: _t.removeUser,
                    payload: {
                      userId: e,
                    },
                  }))(t.payload.userId)
                ),
                null
              );
            default:
              return null;
          }
          var n, r, a, o, i;
        },
        $t = (e, t, n) => {
          var r;
          const a = t().world;
          for (const t of Vt.taintedEntityIds.values()) {
            const n =
              null === (r = Rt(a, t, "transform")) || void 0 === r
                ? void 0
                : r.transform;
            if (n) {
              let r = Nt(t, Ae(me(), n));
              e.send(Ct(r));
            }
          }
        },
        Bt = () => ({
          clearF: $t,
          tainted: !1,
          updateTime: 300,
          timer: null,
          taintedEntityIds: new Set(),
        });
      let Vt = Bt();
      const Ht = () => {
          Vt.timer && clearTimeout(Vt.timer), (Vt = Bt());
        },
        Qt = (e, t, n, r) => {
          Vt.tainted ||
            ((Vt.tainted = !0),
            (Vt.timer = setTimeout(() => {
              Vt.clearF(e, n, r), (Vt.tainted = !1);
            }, Vt.updateTime))),
            Vt.taintedEntityIds.add(t);
        };
      let Gt = null;
      const Kt = {
          world: (e, t) => {
            if (void 0 === e)
              return {
                nextId: 0,
                components: dt(),
              };
            switch (t.type) {
              case Je.add:
                return fe(e, (e) => {
                  const n = e.nextId;
                  e.nextId = e.nextId + 1;
                  let r = fe(t, (e) => {
                    (e.type = Je.set), (e.payload.entityId = n);
                  });
                  e.components = ht(e.components, n, r);
                });
              case Je.set:
                return fe(e, (e) => {
                  (e.nextId = Math.max(t.payload.entityId + 1, e.nextId)),
                    (e.components = ht(e.components, t.payload.entityId, t));
                });
              case Je.setAll:
                return fe(e, (e) => {
                  (e.nextId =
                    ((e) => {
                      let t = 0;
                      return (
                        Object.keys(e).forEach((n) => {
                          t = Math.max(t, ...e[n].map((e) => e[0]));
                        }),
                        t
                      );
                    })(t.payload.components) + 1),
                    (e.components = ((e, t) => (
                      Object.keys(e).forEach((n) => {
                        t[n].forEach((t) => {
                          let [r, a] = t;
                          e[n].set(r, a);
                        });
                      }),
                      e
                    ))(dt(), t.payload.components));
                });
              case Je.remove:
                return fe(e, (e) => {
                  var n, r;
                  e.components =
                    ((n = e.components),
                    (r = t.payload.entityId),
                    fe(n, (e) => {
                      gt(n, r);
                    }));
                });
              case Je.removeAllTargets:
                const n = mt(e.components, (e) => "Target" === e.entityType);
                return fe(e, (e) => {
                  n.forEach((t) => {
                    gt(e.components, t);
                  });
                });
              default:
                return fe(e, (e) => {
                  e.components = yt(e.components, t);
                });
            }
          },
          userSettings: Se,
          uiState: Te,
          minimap: (e, n) =>
            void 0 === e
              ? {
                  transform: Ee(),
                  texture: {
                    transform: Ee(),
                    source: "1x1.jpg",
                    size: he(1, 1, 0),
                    image: new Image(),
                  },
                  size: [1, 1, 0],
                }
              : n.type !== t.write || "mapId" !== n.payload.key
              ? e
              : ((e, t) => {
                  const n = ke[t],
                    r = he(
                      Math.min(
                        n.mapTextureCorner0.loc_x,
                        n.mapTextureCorner1.loc_x
                      ),
                      Math.min(
                        n.mapTextureCorner0.loc_y,
                        n.mapTextureCorner1.loc_y
                      ),
                      0
                    ),
                    a = he(
                      Math.max(
                        n.mapTextureCorner0.loc_x,
                        n.mapTextureCorner1.loc_x
                      ),
                      Math.max(
                        n.mapTextureCorner0.loc_y,
                        n.mapTextureCorner1.loc_y
                      ),
                      0
                    ),
                    o = he(n.mapTexture.size_x, n.mapTexture.size_y, 1);
                  let i = (function (e) {
                    var t = new de(3);
                    return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), t;
                  })(a);
                  we(i, i, r), xe(i, i, o), ve(i, i, 1);
                  let l = Ee();
                  !(function (e, t, n, r) {
                    var a,
                      o,
                      i,
                      l,
                      u,
                      s,
                      c,
                      f,
                      p,
                      d,
                      m,
                      h,
                      g,
                      y,
                      v,
                      b,
                      _,
                      w,
                      x,
                      S,
                      T,
                      k,
                      E,
                      C,
                      P = r[0],
                      N = r[1],
                      I = r[2],
                      O = Math.hypot(P, N, I);
                    O < 1e-6 ||
                      ((P *= O = 1 / O),
                      (N *= O),
                      (I *= O),
                      (a = Math.sin(0)),
                      (i = 1 - (o = Math.cos(0))),
                      (l = t[0]),
                      (u = t[1]),
                      (s = t[2]),
                      (c = t[3]),
                      (f = t[4]),
                      (p = t[5]),
                      (d = t[6]),
                      (m = t[7]),
                      (h = t[8]),
                      (g = t[9]),
                      (y = t[10]),
                      (v = t[11]),
                      (b = P * P * i + o),
                      (_ = N * P * i + I * a),
                      (w = I * P * i - N * a),
                      (x = P * N * i - I * a),
                      (S = N * N * i + o),
                      (T = I * N * i + P * a),
                      (k = P * I * i + N * a),
                      (E = N * I * i - P * a),
                      (C = I * I * i + o),
                      (e[0] = l * b + f * _ + h * w),
                      (e[1] = u * b + p * _ + g * w),
                      (e[2] = s * b + d * _ + y * w),
                      (e[3] = c * b + m * _ + v * w),
                      (e[4] = l * x + f * S + h * T),
                      (e[5] = u * x + p * S + g * T),
                      (e[6] = s * x + d * S + y * T),
                      (e[7] = c * x + m * S + v * T),
                      (e[8] = l * k + f * E + h * C),
                      (e[9] = u * k + p * E + g * C),
                      (e[10] = s * k + d * E + y * C),
                      (e[11] = c * k + m * E + v * C),
                      t !== e &&
                        ((e[12] = t[12]),
                        (e[13] = t[13]),
                        (e[14] = t[14]),
                        (e[15] = t[15])));
                  })(l, l, 0, he(0, 0, 1)),
                    Ne(l, l, r);
                  let u = Ee();
                  Ie(u, u, i);
                  const s = Object.assign({}, e.texture);
                  return (
                    (s.source = n.minimap_image_src),
                    (s.image.src = n.minimap_image_src),
                    (s.transform = u),
                    {
                      transform: l,
                      texture: s,
                      size: ge(me(), a, r),
                    }
                  );
                })(e, n.payload.value),
          contourmap: (e, n) =>
            void 0 === e
              ? {
                  transform: Ee(),
                  texture: {
                    transform: Ee(),
                    source: "1x1.jpg",
                    size: he(1, 1, 0),
                    image: new Image(),
                  },
                  size: [1, 1, 0],
                }
              : n.type !== t.write || "mapId" !== n.payload.key
              ? e
              : ((e, t) => {
                  const n = ke[t],
                    r = he(50, 50, 0),
                    a = he(n.landscape.loc_x, n.landscape.loc_y, 0),
                    o = he(
                      n.landscape.slice_x || 0,
                      n.landscape.slice_y || 0,
                      0
                    ),
                    i = ((n.landscape.rot_z || 0) / 180) * Math.PI;
                  let l = Ee();
                  Ne(l, l, a), Oe(l, l, i);
                  let u = Ee();
                  Ie(u, u, r), Ne(u, u, o);
                  const s = Object.assign({}, e.texture);
                  return (
                    (s.image.onload = () => {}),
                    (s.transform = u),
                    {
                      transform: l,
                      texture: s,
                      size: he(
                        n.landscape.resolution_x,
                        n.landscape.resolution_y,
                        0
                      ),
                    }
                  );
                })(e, n.payload.value),
          camera: (e, n) => {
            if (void 0 === e)
              return {
                transform: ze(Ee(), he(0.004, 0.004, 1)),
              };
            switch (n.type) {
              case je.move:
                let r = Ce(e.transform);
                return (
                  Ne(r, r, n.payload),
                  Object.assign(Object.assign({}, e), {
                    transform: r,
                  })
                );
              case je.changeZoom:
                return ((e, t, n) => {
                  let r = Ce(e.transform);
                  const a = t / Re(me(), r)[0];
                  let o = Pe(Ee(), r),
                    i = _e(me(), n, o);
                  return (
                    Ne(r, r, i),
                    Ie(r, r, he(a, a, 1)),
                    ve(i, i, -1),
                    Ne(r, r, i),
                    Object.assign(Object.assign({}, e), {
                      transform: r,
                    })
                  );
                })(e, n.payload.zoom, n.payload.location);
              case je.setTransform:
                return Object.assign(Object.assign({}, e), {
                  transform: n.payload,
                });
              case t.write:
                if ("mapId" !== n.payload.key) return e;
                const a = ke[n.payload.value];
                return ((e, t) => {
                  let n = ((e) => {
                    let t = Ae(me(), e.transform);
                    return ye(t, t, Re(me(), e.transform)), ve(t, t, -1), t;
                  })(e);
                  return (
                    ge(n, t, n),
                    ((e, t) => {
                      const n = ve(me(), t, -1),
                        r = Ce(e.transform);
                      return (
                        Ne(r, r, n),
                        Object.assign(Object.assign({}, e), {
                          transform: r,
                        })
                      );
                    })(e, n)
                  );
                })(
                  e,
                  he(
                    Math.min(
                      a.mapTextureCorner0.loc_x,
                      a.mapTextureCorner1.loc_x
                    ),
                    Math.min(
                      a.mapTextureCorner0.loc_y,
                      a.mapTextureCorner1.loc_y
                    ),
                    0
                  )
                );
              default:
                return e;
            }
          },
          counter: (e = 0, t) => ("COUNTER_INCREMENT" === t.type ? e + 1 : e),
          session: (e, t) => {
            if (void 0 === e) return null;
            switch (t.type) {
              case _t.started:
                let n = new Map(t.payload.users.map((e) => [e.id, e]));
                return {
                  sessionId: t.payload.sessionId,
                  userId: t.payload.userId,
                  users: n,
                };
              case _t.ended:
                return null;
              case _t.addUser:
                return e
                  ? ((e, t) =>
                      fe(e, (e) => {
                        e.users.set(t.id, t);
                      }))(e, t.payload.user)
                  : e;
              case _t.userNameChanged:
                return e
                  ? ((e, t, n) =>
                      fe(e, (e) => {
                        let r = e.users.get(t);
                        r && (r.name = n);
                      }))(e, t.payload.userId, t.payload.newName)
                  : e;
              case _t.removeUser:
                return e
                  ? ((e, t) =>
                      fe(e, (e) => {
                        e.users.delete(t);
                      }))(e, t.payload.userId)
                  : e;
              default:
                return e;
            }
          },
          heightmap: (e, n) =>
            void 0 === e
              ? {
                  transform: Ee(),
                  texture: {
                    transform: Ee(),
                    source: "1x1.jpg",
                    size: he(1, 1, 0),
                    image: new Image(),
                  },
                  canvas: document.getElementById("hmCanvas"),
                  size: [1, 1, 0],
                }
              : n.type !== t.write || "mapId" !== n.payload.key
              ? e
              : ((e, t) => {
                  const n = ke[t],
                    r = he(
                      n.landscape.scale_x,
                      n.landscape.scale_y,
                      n.landscape.scale_z
                    ),
                    a = he(n.landscape.loc_x, n.landscape.loc_y, 0),
                    o = he(
                      n.landscape.slice_x || 0,
                      n.landscape.slice_y || 0,
                      0
                    ),
                    i = ((n.landscape.rot_z || 0) / 180) * Math.PI;
                  let l = Ee();
                  Ne(l, l, a), Oe(l, l, i);
                  let u = Ee();
                  Ie(u, u, r), Ne(u, u, o);
                  const s = Object.assign({}, e.texture);
                  (s.source = n.heightmap_image_src),
                    (s.image.onload = () => {
                      (e.canvas.width = n.landscape.resolution_x),
                        (e.canvas.height = n.landscape.resolution_y),
                        console.log("drawing hm: ", n.heightmap_image_src);
                      const t = e.canvas.getContext("2d");
                      null == t || t.drawImage(s.image, 0, 0),
                        (Gt =
                          null == t
                            ? void 0
                            : t.getImageData(
                                0,
                                0,
                                t.canvas.width,
                                t.canvas.height
                              ));
                    }),
                    (s.image.src = n.heightmap_image_src),
                    (s.transform = u);
                  const c = he(
                    n.landscape.resolution_x,
                    n.landscape.resolution_y,
                    0
                  );
                  return {
                    transform: l,
                    texture: s,
                    size: c,
                    canvas: e.canvas,
                  };
                })(e, n.payload.value),
        },
        qt = (e, t) => e.dispatch(t),
        Yt = s(Kt);
      document.getElementById("dbg");
      const Xt = document.getElementById("map-name"),
        Jt = document.getElementById("canvas"),
        Zt = document.getElementById("contourmap_canvas"),
        en = document.getElementById("s5canvas"),
        tn = document.getElementById("s5image"),
        nn =
          (document.getElementById("bm21canvas"),
          document.getElementById("bm21image"),
          new (class {
            constructor(e, t, n, r, a, o, i, l) {
              (this.ready = !1),
                (this.image = t),
                (this.image.onload = () => this.onload()),
                (this.image.src = e),
                (this.canvas = n),
                (this.scale_y = 300),
                (this.scale_x = 100),
                (this.scale_time = 20 / 255),
                (this.scale_angle = Math.PI / 65535),
                (this.angle_offset = Math.PI / 2),
                (this.image_y_offset = l || 127),
                (this.deviation = r),
                (this.velocity = a),
                (this.acceleration = o),
                (this.acceleration_time = i);
            }
            is_ready() {
              return this.ready;
            }
            onload() {
              (this.canvas.width = this.image.width),
                (this.canvas.height = this.image.height),
                this.canvas.getContext("2d").drawImage(this.image, 0, 0),
                console.log(
                  "s5table ready",
                  this.image.width,
                  this.image.height
                ),
                (this.context = this.canvas.getContext("2d")),
                (this.ready = !0);
            }
            checkImageCoordinates(e, t) {
              return (
                0 <= e &&
                e <= this.canvas.width &&
                0 <= t &&
                t <= this.canvas.height
              );
            }
            pixel2rad(e) {
              return this.values2rad(e[0], e[1]);
            }
            values2rad(e, t) {
              return (256 * e + t) * this.scale_angle - this.angle_offset;
            }
            value2time(e) {
              return e * this.scale_time;
            }
            getAngles(e) {
              const t = Math.floor(-e / this.scale_y) + this.image_y_offset;
              if (this.checkImageCoordinates(0, t)) {
                const e = this.context.getImageData(
                  0,
                  t,
                  this.image.width,
                  1
                ).data;
                let n,
                  r = [];
                for (n = 0; n < Math.floor(e.length / 4); n++) {
                  let t = 4 * n;
                  r.push(this.values2rad(e[t], e[t + 1]));
                }
                return r;
              }
              return [];
            }
            getTimes(e) {
              const t = Math.floor(-e / this.scale_y) + this.image_y_offset;
              if (this.checkImageCoordinates(0, t)) {
                const e = this.context.getImageData(
                  0,
                  t,
                  this.image.width,
                  1
                ).data;
                let n,
                  r = [];
                for (n = 0; n < Math.floor(e.length / 4); n++) {
                  let t = 4 * n;
                  r.push(this.value2time(e[t] + 2));
                }
                return r;
              }
              return NaN;
            }
            getAngle(e, t) {
              const n = Math.floor(e / this.scale_x),
                r = Math.floor(-t / this.scale_y) + this.image_y_offset;
              if (this.checkImageCoordinates(n, r)) {
                const e = this.context.getImageData(n, r, 1, 1).data;
                return this.pixel2rad(e);
              }
              return NaN;
            }
            getTime(e, t) {
              const n = Math.floor(e / this.scale_x),
                r = Math.floor(-t / this.scale_y) + this.image_y_offset;
              if (this.checkImageCoordinates(n, r)) {
                const e = this.context.getImageData(n, r, 1, 1).data[2];
                return this.value2time(e);
              }
              return NaN;
            }
            calcSpreadHorizontal(e, t) {
              const n = this.getTime(e, t);
              return (
                Math.sin(this.deviation) *
                (this.velocity +
                  0.5 *
                    Math.min(this.acceleration_time, n) *
                    -this.acceleration) *
                n
              );
            }
            calcSpreadVertical(e, t) {
              const n = this.getAngle(e, t),
                r = this.getAngles(t);
              if (n && r) {
                const t = this.linearDistSearch(r, n - this.deviation),
                  a = this.linearDistSearch(r, n + this.deviation);
                return [Math.max(e - t, 0), Math.max(a - e, 0)];
              }
              return [NaN, NaN];
            }
            angle2groundDistance(e, t, n) {
              const r = Math.floor(-t / this.scale_y) + this.image_y_offset;
              if (this.checkImageCoordinates(this.image.width - 1, t)) {
                const t = this.context.getImageData(
                    0,
                    r,
                    this.image.width,
                    1
                  ).data,
                  a = this.searchAngleIndex(t, e, n);
                return -1 === a ? 0 : a * this.scale_x;
              }
              return 0;
            }
            linearDistSearch(e, t) {
              let n,
                r = 0,
                a = e[0];
              for (n = 0; n < e.length; n++) {
                let o = e[n];
                Math.abs(a - t) > Math.abs(o - a) && ((a = o), (r = n));
              }
              return r * this.scale_x;
            }
            searchAngleIndex(e, t, n) {
              let r = 0,
                a = e.length / 4 - 1;
              for (; r <= a; ) {
                let o = Math.floor((r + a) / 2),
                  i = this.values2rad(e[4 * o], e[4 * o + 1]);
                if (Math.abs(i - t) < n) return o;
                i <= t ? (r = o + 1) : (a = o - 1);
              }
              return -1;
            }
            searchClosestAngleIndex(e, t, n) {
              let r = 0,
                a = e.length / 4 - 1,
                o = 0,
                i = -1;
              for (; r <= a; ) {
                let l = Math.floor((r + a) / 2),
                  u = this.values2rad(e[4 * l], e[4 * l + 1]);
                Math.abs(u - t) < n
                  ? -1 == i &&
                    Math.abs(u - t) < Math.abs(o - t) &&
                    ((o = u), (i = e[u]))
                  : u <= t
                  ? (r = l + 1)
                  : (a = l - 1);
              }
              return i;
            }
          })("s5_low.png", tn, en, Ge, 3e4, -5e3, 2)),
        rn = new (class {
          constructor(e, t) {
            (this.ready = !1),
              (this.image = new Image()),
              (this.image.onload = () => this.onload()),
              (this.image.src = e),
              (this.canvas = t),
              (this.resolution_scale = 1),
              (this.transform = Ie(
                Ee(),
                Ee(),
                he(
                  1 / this.resolution_scale,
                  1 / this.resolution_scale,
                  1 / this.resolution_scale
                )
              )),
              (this.context = this.canvas.getContext("2d"));
          }
          is_ready() {
            return this.ready;
          }
          onload() {
            this.draw(), (this.ready = !0);
          }
          draw() {
            (this.canvas.width = this.image.width * this.resolution_scale),
              (this.canvas.height = this.image.height * this.resolution_scale),
              this.context.drawImage(
                this.image,
                0,
                0,
                this.image.width * this.resolution_scale,
                this.image.height * this.resolution_scale
              );
          }
          set_image_source(e) {
            (this.ready = !1), (this.image.src = e);
          }
          get_canvas() {
            return this.canvas;
          }
          set_zoom(e) {}
        })("", Zt),
        an = "USER_SETTINGS_LOCAL_STORAGE_KEY",
        on = (e, n) => (r, a) => (
          r({
            type: t.write,
            payload: {
              key: e,
              value: n,
            },
          }),
          new Promise((e, t) => {
            ((e) => {
              const t = JSON.stringify(e);
              window.localStorage.setItem(an, t);
            })(a().userSettings),
              e(null);
          })
        ),
        ln = (e) => (t, n) => {
          n(),
            t({
              type: r.write,
              payload: {
                key: "mouseDown",
                value: e,
              },
            });
        },
        un = (e) => ({
          type: r.write,
          payload: {
            key: "dragEntityId",
            value: e,
          },
        }),
        sn = (e) => ({
          type: r.write,
          payload: {
            key: "dragStartPosition",
            value: e,
          },
        }),
        cn = (e) => (t, n) => {
          const r = n().userSettings.contourmap;
          return t(on("mapId", e)).then(() => {
            var t;
            return r
              ? rn.set_image_source(
                  (null === (t = ke[e]) || void 0 === t
                    ? void 0
                    : t.contourmap_image_src) || ""
                )
              : null;
          });
        },
        fn = (e, t, n) => ({
          type: r.updateTouch,
          payload: {
            identifier: e,
            location: he(t, n, 0),
          },
        }),
        pn = "rgb(220, 10, 30)",
        dn = "rgb(10, 220, 30)",
        mn = "rgb(30, 30, 30)",
        hn = "rgb(255, 255, 255)",
        gn = (e, t, n, r) => {
          const a = r.filter((e) => e.isActive);
          jt(r);
          r.forEach((r, o) =>
            ((e, r, o) => {
              e.save();
              const i = Ln(n),
                l = Re(me(), i)[0];
              it(e, r.transform),
                r.isActive &&
                  (e.beginPath(),
                  (e.lineWidth = 1 * l),
                  (e.strokeStyle = "#0f0"),
                  e.arc(0, 0, 5e3, 0, 2 * Math.PI),
                  e.stroke(),
                  ((e, t, n) => {
                    e.beginPath(),
                      (e.lineWidth = 1 * n),
                      (e.strokeStyle = "#0f0"),
                      "hellCannon" == t
                        ? e.arc(0, 0, 92400, 0, 2 * Math.PI)
                        : ("standardMortar" != t && "technicalMortar" != t) ||
                          e.arc(0, 0, 123096.963, 0, 2 * Math.PI),
                      e.stroke();
                  })(e, t.weaponType, l),
                  a.length > 1 &&
                    (e.save(),
                    it(e, Ln(n)),
                    it(e, at(10, 0.5, 0)),
                    Un(e, (o + 1).toString(), "middle", dn, mn, t.fontSize, !0),
                    e.restore())),
                it(e, i),
                e.beginPath(),
                (e.lineWidth = 3),
                (e.strokeStyle = "black"),
                e.arc(0, 0, 5, 0, 2 * Math.PI),
                e.stroke(),
                e.beginPath(),
                (e.lineWidth = 1),
                (e.strokeStyle = r.isActive ? "#0f0" : "grey"),
                e.arc(0, 0, 5, 0, 2 * Math.PI),
                e.stroke(),
                e.restore();
            })(e, r, o)
          );
        },
        yn = (e, t) => {
          try {
            const n = ((e, t) => {
                let n = me();
                const r = (function (e, t, n) {
                  var r = t[0],
                    a = t[1],
                    o = t[2],
                    i = t[3],
                    l = t[4],
                    u = t[5],
                    s = t[6],
                    c = t[7],
                    f = t[8],
                    p = t[9],
                    d = t[10],
                    m = t[11],
                    h = t[12],
                    g = t[13],
                    y = t[14],
                    v = t[15],
                    b = n[0],
                    _ = n[1],
                    w = n[2],
                    x = n[3];
                  return (
                    (e[0] = b * r + _ * l + w * f + x * h),
                    (e[1] = b * a + _ * u + w * p + x * g),
                    (e[2] = b * o + _ * s + w * d + x * y),
                    (e[3] = b * i + _ * c + w * m + x * v),
                    (b = n[4]),
                    (_ = n[5]),
                    (w = n[6]),
                    (x = n[7]),
                    (e[4] = b * r + _ * l + w * f + x * h),
                    (e[5] = b * a + _ * u + w * p + x * g),
                    (e[6] = b * o + _ * s + w * d + x * y),
                    (e[7] = b * i + _ * c + w * m + x * v),
                    (b = n[8]),
                    (_ = n[9]),
                    (w = n[10]),
                    (x = n[11]),
                    (e[8] = b * r + _ * l + w * f + x * h),
                    (e[9] = b * a + _ * u + w * p + x * g),
                    (e[10] = b * o + _ * s + w * d + x * y),
                    (e[11] = b * i + _ * c + w * m + x * v),
                    (b = n[12]),
                    (_ = n[13]),
                    (w = n[14]),
                    (x = n[15]),
                    (e[12] = b * r + _ * l + w * f + x * h),
                    (e[13] = b * a + _ * u + w * p + x * g),
                    (e[14] = b * o + _ * s + w * d + x * y),
                    (e[15] = b * i + _ * c + w * m + x * v),
                    e
                  );
                })(Ee(), e.transform, e.texture.transform);
                return _e(n, t, Pe(Ee(), r)), n;
              })(e, t).map(Math.floor),
              r = 4 * (n[1] * e.size[0] + n[0]);
            if (Gt) {
              const t = (Gt.data[r] << 8) + Gt.data[r + 1];
              return (
                (Re(me(), e.texture.transform)[2] / 100) * t * 0.7808988764
              );
            }
            return 0;
          } catch (e) {
            return 0;
          }
        };
      function vn(e, t, n, r) {
        const a = -t,
          o = Math.sqrt(
            Math.pow(n, 4) - r * (r * Math.pow(e, 2) + 2 * a * Math.pow(n, 2))
          );
        return Math.atan((Math.pow(n, 2) + o) / (r * e));
      }
      function bn(e, t, n, r) {
        const a = -t,
          o = Math.sqrt(
            Math.pow(n, 4) - r * (r * Math.pow(e, 2) + 2 * a * Math.pow(n, 2))
          );
        return Math.atan((Math.pow(n, 2) - o) / (r * e));
      }
      function _n(e, t, n, r) {
        const a = Math.sqrt(
          Math.pow(n, 2) * Math.pow(Math.sin(e), 2) + 2 * r * t
        );
        return isNaN(a) ? 0 : (n * Math.cos(e) * (n * Math.sin(e) + a)) / r;
      }
      function wn(e, t, n, r) {
        const a = Math.sqrt(Math.pow(n * Math.sin(e), 2) + 2 * r * t);
        return (n * Math.sin(e) + a) / r;
      }
      const xn = Object.freeze({
          pathSolver: function (e, t, n, r, a, o, i, l) {
            const u = r - e,
              s = a - t,
              c = Math.round(Math.hypot(u, s)),
              f =
                Math.round(
                  (((180 * Math.atan2(u, -s)) / Math.PI + 360) % 360) * 100
                ) / 100;
            return [bn(c, n - o, i, l), f, c];
          },
          spreadSolver: function (e, t, n, r, a) {
            const o = bn(e, t, n, r),
              i = _n(o - a, t, n, r),
              l = _n(o + a, t, n, r);
            return [
              Math.sin(a) * n * wn(o, t, n, r),
              Math.max(0, e - i),
              Math.max(0, l - e),
            ];
          },
        }),
        Sn = Object.freeze({
          pathSolver: function (e, t, n, r, a, o, i, l) {
            const u = r - e,
              s = a - t,
              c = Math.round(Math.hypot(u, s)),
              f =
                Math.round(
                  (((180 * Math.atan2(u, -s)) / Math.PI + 360) % 360) * 100
                ) / 100;
            return [vn(c, n - o, i, l), f, c];
          },
          spreadSolver: function (e, t, n, r, a) {
            const o = vn(e, t, n, r),
              i = _n(o + a, t, n, r),
              l = _n(o - a, t, n, r);
            return [
              Math.sin(a) * n * wn(o, t, n, r),
              Math.max(0, e - i),
              Math.max(0, l - e),
            ];
          },
        }),
        Tn = (e, t, n, r, a, o) => {
          const i = e[2] - t[2],
            l = ge(me(), t, e),
            [u, s, c] = o.pathSolver(e[0], e[1], e[2], t[0], t[1], t[2], n, r),
            [f, p, d] = o.spreadSolver(c, i, n, r, a),
            m = wn(u, i, n, r);
          return Object.freeze({
            weaponTranslation: e,
            targetTranslation: t,
            weaponToTargetVec: l,
            angle: u,
            dir: s,
            dist: c,
            startHeightOffset: i,
            time: m,
            horizontalSpread: f,
            closeSpread: p,
            farSpread: d,
          });
        },
        kn = (e, t, n, r, a) =>
          Object.freeze({
            lowArc: Tn(e, t, n, r, a, xn),
            highArc: Tn(e, t, n, r, a, Sn),
          }),
        En = (e, t, n, r) => {
          (e.lineWidth = 1 * n),
            (e.strokeStyle = "#00f"),
            Fn(
              e,
              t.weaponToTargetVec,
              t.horizontalSpread,
              t.closeSpread,
              t.closeSpread
            ),
            r &&
              ((e.strokeStyle = "#f00"),
              Fn(
                e,
                t.weaponToTargetVec,
                t.horizontalSpread + He,
                t.closeSpread + He,
                t.closeSpread + He
              ),
              Fn(
                e,
                t.weaponToTargetVec,
                t.horizontalSpread + Qe,
                t.closeSpread + Qe,
                t.closeSpread + Qe
              ));
        },
        Cn = (e, t, n) => {
          e.save(),
            it(e, n),
            it(e, Ln(t)),
            e.beginPath(),
            (e.lineWidth = 3),
            (e.strokeStyle = "black"),
            e.arc(0, 0, 4, 0, 2 * Math.PI),
            e.stroke(),
            e.beginPath(),
            (e.lineWidth = 1),
            (e.strokeStyle = "red"),
            e.arc(0, 0, 4, 0, 2 * Math.PI),
            e.stroke(),
            e.restore();
        },
        Pn = (e, t, n, r, a, o) => {
          "standardMortar" === n.weaponType ||
          "technicalMortar" === n.weaponType
            ? o.forEach((o) => Nn(e, t, n, r, a, o))
            : "ub32" === n.weaponType
            ? o.forEach((o) =>
                (function (e, t, n, r, a, o) {
                  const i = Re(me(), Ln(t))[0];
                  jt(a);
                  const l = a.filter((e) => e.isActive),
                    u = {};
                  a.forEach((e, t) => {
                    e.isActive && (u[e.entityId] = t);
                  }),
                    l.forEach((a, s) => {
                      const c = ot(a.transform),
                        f = yn(r, c);
                      c[2] = f + a.heightOverGround;
                      const p = ot(o.transform),
                        d = yn(r, p);
                      p[2] = d;
                      const m = ((e, t) =>
                          ((e, t, n) => {
                            const r = t[2] - n[2],
                              [a, o] = (function (e, t) {
                                const n = t[0] - e[0],
                                  r = t[1] - e[1];
                                return [
                                  Math.round(Math.hypot(n, r)),
                                  Math.round(
                                    (((180 * Math.atan2(n, -r)) / Math.PI +
                                      360) %
                                      360) *
                                      100
                                  ) / 100,
                                ];
                              })(t, n),
                              i = ge(me(), t, n),
                              l = e.getAngle(a, r),
                              u = e.getTime(a, r),
                              s = l * We,
                              c = s < 800 ? 0 : s,
                              f = Math.floor(10 * c) / 10,
                              p = e.calcSpreadHorizontal(a, r);
                            let d = e.calcSpreadVertical(a, r),
                              m = d[0],
                              h = d[1];
                            return (
                              (m = 0 != m ? m : a),
                              Object.freeze({
                                weaponTranslation: t,
                                targetTranslation: n,
                                weaponToTargetVec: i,
                                startHeightOffset: r,
                                angle: l,
                                angleLow: 0,
                                dir: o,
                                dist: a,
                                time: u,
                                timeLow: 0,
                                mil: s,
                                milCapped: c,
                                milRounded: f,
                                horizontalSpread: p,
                                closeSpread: m,
                                farSpread: h,
                              })
                            );
                          })(nn, e, t))(c, p),
                        h = 1.7 * n.fontSize;
                      e.save(),
                        it(e, o.transform),
                        n.targetSpread &&
                          m.angle &&
                          m.time &&
                          ((e.strokeStyle = "#00f"),
                          (e.lineWidth = 1 * i),
                          Fn(
                            e,
                            m.weaponToTargetVec,
                            m.horizontalSpread,
                            m.closeSpread,
                            m.farSpread
                          )),
                        it(e, Ln(t)),
                        it(e, at(10, s * h, 0));
                      const g = m.angle * We,
                        y = (180 * m.angle) / Math.PI,
                        v = g < 800 ? 0 : g;
                      Math.round(10 * v),
                        m.angle && m.time
                          ? Un(
                              e,
                              `${
                                l.length > 1
                                  ? (u[a.entityId] + 1).toString() + ": "
                                  : ""
                              }${y.toFixed(1)}°  ${m.time.toFixed(1)}s`,
                              "bottom",
                              pn,
                              hn,
                              n.fontSize,
                              !0
                            )
                          : Un(
                              e,
                              "No firing solution",
                              "bottom",
                              pn,
                              hn,
                              (2 * n.fontSize) / 3,
                              !0
                            );
                      const b = n.targetDistance
                        ? `${m.dir.toFixed(1)}° ${(m.dist * Le).toFixed(0)}m`
                        : `${m.dir.toFixed(1)}°`;
                      Un(e, b, "top", pn, hn, (2 * n.fontSize) / 3, !0),
                        e.restore(),
                        Cn(e, t, o.transform);
                    });
                })(e, t, n, r, a, o)
              )
            : "hellCannon" === n.weaponType
            ? o.forEach((o) => On(e, t, n, r, a, o))
            : "bm21" === n.weaponType && o.forEach((o) => In(e, t, n, r, a, o));
        },
        Nn = (e, t, n, r, a, o) => {
          const i = Re(me(), Ln(t))[0];
          jt(a);
          const l = a.filter((e) => e.isActive),
            u = {};
          a.forEach((e, t) => {
            e.isActive && (u[e.entityId] = t);
          }),
            l.forEach((a, s) => {
              const c = ot(a.transform),
                f = yn(r, c);
              c[2] = f + a.heightOverGround;
              const p = ot(o.transform),
                d = yn(r, p);
              p[2] = d;
              const m = ((e, t) => kn(e, t, 10989, 980, Ue))(c, p).highArc,
                h = n.fontSize * (n.targetCompactMode ? 1 : 1.7);
              n.targetGrid &&
                ((e, t, n, r) => {
                  e.save(), it(e, n);
                  const a = Math.floor(r.dir),
                    o = 5 * Math.floor((r.angle * We) / 5);
                  (e.strokeStyle = "#0f0"), (e.lineWidth = 1 * t);
                  const i = [-10, -5, 0, 5, 10, 15].map((e) =>
                      _n((o + e) / We, r.startHeightOffset, 10989, 980)
                    ),
                    [l, u, s, c, f, p] = i;
                  [-2, -1, 0, 1, 2, 3].forEach((t) =>
                    (function (e, t, n, r, a, o) {
                      let i = (o * Math.PI) / 180,
                        [l, u] = [Math.sin(i), -Math.cos(i)];
                      Rn(e, 0 + l * r, 0 + u * r, 0 + l * a, 0 + u * a);
                    })(e, 0, 0, l, p, a + t)
                  ),
                    i.forEach((t) =>
                      (function (e, t, n, r, a) {
                        if (r >= 0) {
                          let t = Math.PI / 180,
                            n = ((a - 90) * Math.PI) / 180;
                          e.beginPath(),
                            e.arc(0, 0, r, n - 2 * t, n + 3 * t),
                            e.stroke();
                        }
                      })(e, 0, 0, t, a)
                    ),
                    e.restore();
                })(e, i, a.transform, m),
                e.save(),
                it(e, o.transform),
                n.targetSpread
                  ? ((e, t, n, r) => {
                      (e.lineWidth = 1 * n),
                        (e.strokeStyle = "#00f"),
                        Fn(
                          e,
                          t.weaponToTargetVec,
                          t.horizontalSpread,
                          t.closeSpread,
                          t.closeSpread
                        ),
                        r &&
                          ((e.strokeStyle = "#f00"),
                          Fn(
                            e,
                            t.weaponToTargetVec,
                            t.horizontalSpread + $e,
                            t.closeSpread + $e,
                            t.closeSpread + $e
                          ),
                          Fn(
                            e,
                            t.weaponToTargetVec,
                            t.horizontalSpread + Be,
                            t.closeSpread + Be,
                            t.closeSpread + Be
                          ));
                    })(e, m, i, n.targetSplash)
                  : n.targetSplash &&
                    ((e, t) => {
                      (e.lineWidth = 1 * t),
                        (e.strokeStyle = "#f00"),
                        e.beginPath(),
                        e.arc(0, 0, $e, 0, 2 * Math.PI),
                        e.stroke(),
                        e.beginPath(),
                        e.arc(0, 0, Be, 0, 2 * Math.PI),
                        e.stroke();
                    })(e, i),
                it(e, Ln(t));
              const g =
                "technicalMortar" === n.weaponType
                  ? (m.angle / Math.PI) * 180
                  : m.angle * We;
              if ((it(e, at(10, s * h, 0)), n.targetCompactMode)) {
                let t = "-----";
                const r = "technicalMortar" === n.weaponType ? 1 : 0;
                m.angle && g >= 1e3
                  ? (t = g
                      .toFixed(r)
                      .toString()
                      .substr(1, 4 + r))
                  : m.angle &&
                    (t = g
                      .toFixed(r)
                      .toString()
                      .substr(0, 3 + r)),
                  l.length > 1 &&
                    (t = (u[a.entityId] + 1).toString() + ": " + t),
                  Un(e, t, "middle", pn, hn, n.fontSize, !0);
              } else {
                let t = m.angle ? `${g.toFixed(1)}` : "-----";
                l.length > 1 && (t = (u[a.entityId] + 1).toString() + ": " + t),
                  Un(e, t, "bottom", pn, hn, n.fontSize, !0);
                const r = n.targetDistance
                  ? `${m.dir.toFixed(1)}° ${(m.dist * Le).toFixed(0)}m`
                  : `${m.dir.toFixed(1)}°`;
                Un(e, r, "top", pn, hn, (2 * n.fontSize) / 3, !0);
              }
              e.restore();
            }),
            Cn(e, t, o.transform);
        },
        In = (e, t, n, r, a, o) => {
          const i = Re(me(), Ln(t))[0];
          jt(a);
          const l = a.filter((e) => e.isActive),
            u = {};
          a.forEach((e, t) => {
            e.isActive && (u[e.entityId] = t);
          }),
            l.forEach((a, s) => {
              const c = ot(a.transform),
                f = yn(r, c);
              c[2] = f + a.heightOverGround;
              const p = ot(o.transform),
                d = yn(r, p);
              p[2] = d;
              const { highArc: m, lowArc: h } = ((e, t) =>
                  kn(e, t, 2e4, 1960, Ke))(c, p),
                g = n.fontSize * (n.targetCompactMode ? 1 : 1.7);
              e.save(),
                it(e, o.transform),
                n.targetSpread &&
                  h.angle &&
                  h.time &&
                  ((e.lineWidth = 1 * i),
                  (e.strokeStyle = "#00f"),
                  Fn(
                    e,
                    h.weaponToTargetVec,
                    h.horizontalSpread,
                    h.closeSpread,
                    h.farSpread
                  )),
                it(e, Ln(t));
              const y = (m.angle / Math.PI) * 180,
                v = (h.angle / Math.PI) * 180;
              if ((it(e, at(10, s * g, 0)), n.targetCompactMode)) {
                let t = "-----";
                const r = 1;
                h.angle && y >= 1e3
                  ? (t = v
                      .toFixed(r)
                      .toString()
                      .substr(1, 4 + r))
                  : h.angle &&
                    (t = v
                      .toFixed(r)
                      .toString()
                      .substr(0, 3 + r)),
                  l.length > 1 &&
                    (t = (u[a.entityId] + 1).toString() + ": " + t),
                  Un(e, t, "middle", pn, hn, n.fontSize, !0);
              } else {
                let t = m.angle ? `${y.toFixed(1)} | ${v.toFixed(1)}` : "-----";
                l.length > 1 && (t = (u[a.entityId] + 1).toString() + ": " + t),
                  Un(e, t, "bottom", pn, hn, n.fontSize, !0);
                const r = [
                  `${m.dir.toFixed(1)}°`,
                  `${m.time ? m.time.toFixed(1) : "-"}s | ${
                    h.time ? h.time.toFixed(1) : "-"
                  }s`,
                  n.targetDistance ? `${(m.dist * Le).toFixed(0)}m` : "",
                ].join(" ");
                Un(e, r, "top", pn, hn, (2 * n.fontSize) / 3, !0);
              }
              e.restore();
            }),
            Cn(e, t, o.transform);
        },
        On = (e, t, n, r, a, o) => {
          const i = Re(me(), Ln(t))[0];
          jt(a);
          const l = a.filter((e) => e.isActive),
            u = {};
          a.forEach((e, t) => {
            e.isActive && (u[e.entityId] = t);
          }),
            l.forEach((a, s) => {
              const c = ot(a.transform),
                f = yn(r, c);
              c[2] = f + a.heightOverGround;
              const p = ot(o.transform),
                d = yn(r, p);
              p[2] = d;
              const { highArc: m, lowArc: h } = ((e, t) =>
                  kn(e, t, 9500, 980, Ve))(c, p),
                g = n.fontSize * (n.targetCompactMode ? 1 : 1.7);
              n.targetGrid,
                e.save(),
                it(e, o.transform),
                n.targetSpread
                  ? (En(e, m, i, n.targetSplash), En(e, h, i, n.targetSplash))
                  : n.targetSplash &&
                    ((e, t) => {
                      (e.lineWidth = 1 * t),
                        (e.strokeStyle = "#f00"),
                        e.beginPath(),
                        e.arc(0, 0, He, 0, 2 * Math.PI),
                        e.stroke(),
                        e.beginPath(),
                        e.arc(0, 0, Qe, 0, 2 * Math.PI),
                        e.stroke();
                    })(e, i),
                it(e, Ln(t));
              const y = (m.angle / Math.PI) * 180,
                v = (h.angle / Math.PI) * 180;
              if ((it(e, at(10, s * g, 0)), n.targetCompactMode)) {
                let t = "-----";
                const r = 1;
                m.angle && y >= 1e3
                  ? (t = y
                      .toFixed(r)
                      .toString()
                      .substr(1, 4 + r))
                  : m.angle &&
                    (t = y
                      .toFixed(r)
                      .toString()
                      .substr(0, 3 + r)),
                  l.length > 1 &&
                    (t = (u[a.entityId] + 1).toString() + ": " + t),
                  Un(e, t, "middle", pn, hn, n.fontSize, !0);
              } else {
                let t = m.angle ? `${y.toFixed(1)} | ${v.toFixed(1)}` : "-----";
                l.length > 1 && (t = (u[a.entityId] + 1).toString() + ": " + t),
                  Un(e, t, "bottom", pn, hn, n.fontSize, !0);
                const r = [
                  `${m.dir.toFixed(1)}°`,
                  `${m.time ? m.time.toFixed(1) : "-"}s | ${
                    h.time ? h.time.toFixed(1) : "-"
                  }s`,
                  n.targetDistance ? `${(m.dist * Le).toFixed(0)}m` : "",
                ].join(" ");
                Un(e, r, "top", pn, hn, (2 * n.fontSize) / 3, !0);
              }
              e.restore();
            }),
            Cn(e, t, o.transform);
        },
        Mn = 0.006,
        zn = (e, t, n, r, a) => {
          if (null === n) return;
          const o = pt(t, n);
          if (-1 !== o[0] && -1 !== o[1]) {
            const n = 3e4 * o[0],
              i = 3e4 * o[1];
            e.save(),
              it(e, t.transform),
              e.beginPath(),
              e.lineTo(n + 3e4, i),
              e.lineTo(n + 3e4, i + 3e4),
              e.lineTo(n, i + 3e4),
              e.lineTo(n, i),
              e.closePath(),
              (e.lineWidth = 3),
              (e.strokeStyle = r),
              e.resetTransform(),
              e.stroke(),
              e.restore(),
              e.save(),
              it(e, t.transform),
              it(e, at(n, i, 0)),
              it(e, Ln(a)),
              Un(
                e,
                `${String.fromCharCode(65 + o[0])}${1 + o[1]}`,
                "bottom",
                r,
                mn,
                24,
                !0
              ),
              e.restore();
            const l = De(a),
              u = (e, t) => 7 + e - 3 * t,
              s = !1;
            if (l > Mn)
              for (let c = 0; c <= 2; c++)
                for (let f = 0; f <= 2; f++)
                  if (u(c, f) !== o[2] && (s || l > Mn))
                    e.save(),
                      it(e, t.transform),
                      it(e, at(n + 5e3 + 1e4 * c, i + 5e3 + 1e4 * f, 0)),
                      it(e, Ln(a)),
                      it(e, at(-5, 2, 0)),
                      Un(e, `${u(c, f)}`, "middle", r, mn, 22, !0),
                      e.restore();
                  else if (l > 0.012)
                    for (let l = 0; l <= 2; l++)
                      for (let s = 0; s <= 2; s++)
                        u(l, s) !== o[3] &&
                          (e.save(),
                          it(e, t.transform),
                          it(e, at(n + 1e4 * c, i + 1e4 * f, 0)),
                          it(
                            e,
                            at(
                              1e4 / 6 + (1e4 * l) / 3,
                              1e4 / 6 + (1e4 * s) / 3,
                              0
                            )
                          ),
                          it(e, Ln(a)),
                          it(e, at(-3, 1, 0)),
                          Un(e, `${u(l, s)}`, "middle", r, mn, 16, !0),
                          e.restore());
          }
        },
        An = (e, t, n, r, a, o) => {
          if (null === n) return;
          const i = ct(t, n);
          e.save(),
            it(e, at(n[0], n[1], n[2])),
            it(e, Ln(a)),
            it(e, at(-1.6 * o, -1 * o, 0)),
            Un(e, ft(i), "bottom", r, mn, o, !0),
            e.restore();
        },
        Rn = (e, t, n, r, a) => {
          e.beginPath(), e.moveTo(t, n), e.lineTo(r, a), e.stroke();
        },
        jn = (e, t, n, r, a) => {
          e.save(),
            e.beginPath(),
            e.moveTo(Math.round(t) + 0.5, Math.round(n) + 0.5),
            e.lineTo(Math.round(r) + 0.5, Math.round(a) + 0.5),
            e.resetTransform(),
            e.stroke(),
            e.restore();
        };
      function Fn(e, t, n, r, a) {
        let o = t[0],
          i = t[1],
          l = Math.atan2(i, o) + Math.PI / 2;
        e.save(),
          e.beginPath(),
          e.ellipse(0, 0, n, a, l, Math.PI, 2 * Math.PI),
          e.ellipse(0, 0, n, r, l, 0, Math.PI),
          e.stroke(),
          e.restore();
      }
      const Dn = (e, t, n, r) => {
          e.save(),
            it(e, t.transform),
            ((e, t, n) => {
              n.image.complete &&
                0 !== n.image.naturalWidth &&
                (e.save(),
                it(e, n.transform),
                e.drawImage(n.image, 0, 0),
                e.restore());
            })(e, t.transform, t.texture),
            r.mapGrid &&
              (function (e, t, n) {
                const r = n[0],
                  a = n[1],
                  o = (n, r, a, o, i) => {
                    for (let l = 1; 0 + (1e4 * l) / 3 < r; l++)
                      l % 9 == 0
                        ? ((e.strokeStyle = "black"),
                          (e.lineWidth = t > Mn ? 2 : 1),
                          i(e, n + (1e4 * l) / 3, a, n + (1e4 * l) / 3, o))
                        : t > Mn && l % 3 == 0
                        ? ((e.strokeStyle = "black"),
                          (e.lineWidth = 1),
                          i(e, n + (1e4 * l) / 3, a, n + (1e4 * l) / 3, o))
                        : t > 0.012 &&
                          ((e.strokeStyle = "#bbb"),
                          (e.lineWidth = 1),
                          i(e, n + (1e4 * l) / 3, a, n + (1e4 * l) / 3, o));
                  };
                o(0, r, 0, a, jn),
                  o(0, a, 0, r, (e, t, n, r, a) => jn(e, n, t, a, r));
              })(e, n, t.size),
            e.restore();
        },
        Ln = (e) => {
          let t = Re(me(), e.transform);
          return (
            (t = (function (e, t) {
              return (e[0] = 1 / t[0]), (e[1] = 1 / t[1]), (e[2] = 1 / t[2]), e;
            })(t, t)),
            ze(Ee(), t)
          );
        },
        Wn = (e) => {
          const t = e.getState();
          if (Jt && Jt.getContext("2d")) {
            const e = (function (e) {
                const t = window.devicePixelRatio || 1;
                let n = e.getContext("2d");
                const r = e.getBoundingClientRect();
                return (
                  (e.width = r.width * t),
                  (e.height = r.height * t),
                  n.scale(t, t),
                  (e.style.width = "100%"),
                  (e.style.height = "100%"),
                  n
                );
              })(Jt),
              n = De(t.camera),
              r = zt(t.world, "Target"),
              a = zt(t.world, "Weapon");
            e.save(),
              ((e) => {
                const t = e.canvas;
                (e.fillStyle = "#050505"), e.fillRect(0, 0, t.width, t.height);
              })(e),
              it(e, t.camera.transform),
              Dn(e, t.minimap, n, t.userSettings),
              ((e, t, n) => {
                rn.is_ready() &&
                  (e.save(),
                  it(e, t.transform),
                  it(e, rn.transform),
                  it(e, t.texture.transform),
                  e.drawImage(rn.get_canvas(), 0, 0),
                  e.restore());
              })(e, t.contourmap, t.userSettings),
              gn(e, t.userSettings, t.camera, a),
              Pn(e, t.camera, t.userSettings, t.heightmap, a, r),
              ((e, t, n, r, a, o) => {
                if (
                  r.mouseDown &&
                  -1 !== r.dragEntityId &&
                  null !== r.dragEntityId
                ) {
                  const i = Rt(a, r.dragEntityId, "entity");
                  if (
                    "Weapon" === (null == i ? void 0 : i.entityType) ||
                    "Target" === (null == i ? void 0 : i.entityType)
                  ) {
                    let l = Rt(a, r.dragEntityId, "transform");
                    if (l) {
                      let r = Ae(me(), l.transform);
                      "Weapon" === (null == i ? void 0 : i.entityType)
                        ? (n.weaponPlacementHelper && zn(e, o, r, dn, t),
                          n.weaponPlacementLabel &&
                            An(e, o, r, dn, t, n.fontSize))
                        : "Target" === (null == i ? void 0 : i.entityType) &&
                          (n.targetPlacementHelper && zn(e, o, r, pn, t),
                          n.targetPlacementLabel &&
                            An(e, o, r, pn, t, n.fontSize));
                    }
                  }
                }
              })(e, t.camera, t.userSettings, t.uiState, t.world, t.minimap),
              e.restore();
          }
        },
        Un = (e, t, n, r, a, o, i) => {
          e.save(),
            (e.font = `${i ? "bold" : ""} ${o}px sans-serif`),
            (e.lineWidth = 3),
            (e.lineJoin = "miter"),
            (e.miterLimit = 2),
            (e.fillStyle = r),
            (e.strokeStyle = a),
            (e.textBaseline = n),
            e.strokeText(t, 0, 0),
            e.fillText(t, 0, 0),
            e.restore();
        },
        $n = (e, t) => {
          const n = e.getState(),
            r = n.uiState.dragStartPosition,
            a = ut(n.camera, lt(t)),
            o = n.uiState.dragEntityId,
            i = we(me(), a, r);
          var l;
          -1 === o
            ? qt(
                e,
                ((l = i),
                {
                  type: je.move,
                  payload: l,
                })
              )
            : null != o && (qt(e, sn(a)), qt(e, Nt(o, a)));
        },
        Bn = (e, t, n, r) => {
          e.getState().camera;
          const a = Math.max(0.002, Math.min(0.08, r));
          rn.set_zoom(a),
            qt(
              e,
              ((e, t) => ({
                type: je.changeZoom,
                payload: {
                  location: e,
                  zoom: t,
                },
              }))(
                lt({
                  target: t,
                  clientX: n[0],
                  clientY: n[1],
                }),
                a
              )
            );
        },
        Vn = (e) => (t) => {
          qt(e, ln(!1));
        },
        Hn = (e) => (t) => {
          const n = e.getState(),
            r = ut(n.camera, lt(t)),
            a = st(n.camera, he(25, 0, 0))[0],
            o = Ot(n.world, r, a);
          return o.length > 0 ? o[0].entityId : -1;
        },
        Qn = (e) => (t) => {
          const n = Array(t.changedTouches.length)
            .fill(0)
            .map((e, t) => e + t);
          n.forEach((n) => {
            return e.dispatch(
              ((a = t.changedTouches[n].identifier),
              {
                type: r.removeTouch,
                payload: {
                  identifier: a,
                },
              })
            );
            var a;
          });
        };
      var Gn = n(294),
        Kn = n(935),
        qn = (n(697), Gn.createContext(null)),
        Yn = function (e) {
          e();
        },
        Xn = function () {
          return Yn;
        },
        Jn = {
          notify: function () {},
        },
        Zn = (function () {
          function e(e, t) {
            (this.store = e),
              (this.parentSub = t),
              (this.unsubscribe = null),
              (this.listeners = Jn),
              (this.handleChangeWrapper = this.handleChangeWrapper.bind(this));
          }
          var t = e.prototype;
          return (
            (t.addNestedSub = function (e) {
              return this.trySubscribe(), this.listeners.subscribe(e);
            }),
            (t.notifyNestedSubs = function () {
              this.listeners.notify();
            }),
            (t.handleChangeWrapper = function () {
              this.onStateChange && this.onStateChange();
            }),
            (t.isSubscribed = function () {
              return Boolean(this.unsubscribe);
            }),
            (t.trySubscribe = function () {
              this.unsubscribe ||
                ((this.unsubscribe = this.parentSub
                  ? this.parentSub.addNestedSub(this.handleChangeWrapper)
                  : this.store.subscribe(this.handleChangeWrapper)),
                (this.listeners = (function () {
                  var e = Xn(),
                    t = null,
                    n = null;
                  return {
                    clear: function () {
                      (t = null), (n = null);
                    },
                    notify: function () {
                      e(function () {
                        for (var e = t; e; ) e.callback(), (e = e.next);
                      });
                    },
                    get: function () {
                      for (var e = [], n = t; n; ) e.push(n), (n = n.next);
                      return e;
                    },
                    subscribe: function (e) {
                      var r = !0,
                        a = (n = {
                          callback: e,
                          next: null,
                          prev: n,
                        });
                      return (
                        a.prev ? (a.prev.next = a) : (t = a),
                        function () {
                          r &&
                            null !== t &&
                            ((r = !1),
                            a.next ? (a.next.prev = a.prev) : (n = a.prev),
                            a.prev ? (a.prev.next = a.next) : (t = a.next));
                        }
                      );
                    },
                  };
                })()));
            }),
            (t.tryUnsubscribe = function () {
              this.unsubscribe &&
                (this.unsubscribe(),
                (this.unsubscribe = null),
                this.listeners.clear(),
                (this.listeners = Jn));
            }),
            e
          );
        })();
      const er = function (e) {
        var t = e.store,
          n = e.context,
          r = e.children,
          a = (0, Gn.useMemo)(
            function () {
              var e = new Zn(t);
              return (
                (e.onStateChange = e.notifyNestedSubs),
                {
                  store: t,
                  subscription: e,
                }
              );
            },
            [t]
          ),
          o = (0, Gn.useMemo)(
            function () {
              return t.getState();
            },
            [t]
          );
        (0, Gn.useEffect)(
          function () {
            var e = a.subscription;
            return (
              e.trySubscribe(),
              o !== t.getState() && e.notifyNestedSubs(),
              function () {
                e.tryUnsubscribe(), (e.onStateChange = null);
              }
            );
          },
          [a, o]
        );
        var i = n || qn;
        return Gn.createElement(
          i.Provider,
          {
            value: a,
          },
          r
        );
      };
      function tr() {
        return (
          (tr =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          tr.apply(this, arguments)
        );
      }
      function nr(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++)
          (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      var rr = n(679),
        ar = n.n(rr),
        or = n(864),
        ir =
          "undefined" != typeof window &&
          void 0 !== window.document &&
          void 0 !== window.document.createElement
            ? Gn.useLayoutEffect
            : Gn.useEffect,
        lr = [],
        ur = [null, null];
      function sr(e, t) {
        var n = e[1];
        return [t.payload, n + 1];
      }
      function cr(e, t, n) {
        ir(function () {
          return e.apply(void 0, t);
        }, n);
      }
      function fr(e, t, n, r, a, o, i) {
        (e.current = r),
          (t.current = a),
          (n.current = !1),
          o.current && ((o.current = null), i());
      }
      function pr(e, t, n, r, a, o, i, l, u, s) {
        if (e) {
          var c = !1,
            f = null,
            p = function () {
              if (!c) {
                var e,
                  n,
                  p = t.getState();
                try {
                  e = r(p, a.current);
                } catch (e) {
                  (n = e), (f = e);
                }
                n || (f = null),
                  e === o.current
                    ? i.current || u()
                    : ((o.current = e),
                      (l.current = e),
                      (i.current = !0),
                      s({
                        type: "STORE_UPDATED",
                        payload: {
                          error: n,
                        },
                      }));
              }
            };
          return (
            (n.onStateChange = p),
            n.trySubscribe(),
            p(),
            function () {
              if (((c = !0), n.tryUnsubscribe(), (n.onStateChange = null), f))
                throw f;
            }
          );
        }
      }
      var dr = function () {
        return [null, 0];
      };
      function mr(e, t) {
        void 0 === t && (t = {});
        var n = t,
          r = n.getDisplayName,
          a =
            void 0 === r
              ? function (e) {
                  return "ConnectAdvanced(" + e + ")";
                }
              : r,
          o = n.methodName,
          i = void 0 === o ? "connectAdvanced" : o,
          l = n.renderCountProp,
          u = void 0 === l ? void 0 : l,
          s = n.shouldHandleStateChanges,
          c = void 0 === s || s,
          f = n.storeKey,
          p = void 0 === f ? "store" : f,
          d = (n.withRef, n.forwardRef),
          m = void 0 !== d && d,
          h = n.context,
          g = void 0 === h ? qn : h,
          y = nr(n, [
            "getDisplayName",
            "methodName",
            "renderCountProp",
            "shouldHandleStateChanges",
            "storeKey",
            "withRef",
            "forwardRef",
            "context",
          ]),
          v = g;
        return function (t) {
          var n = t.displayName || t.name || "Component",
            r = a(n),
            o = tr({}, y, {
              getDisplayName: a,
              methodName: i,
              renderCountProp: u,
              shouldHandleStateChanges: c,
              storeKey: p,
              displayName: r,
              wrappedComponentName: n,
              WrappedComponent: t,
            }),
            l = y.pure,
            s = l
              ? Gn.useMemo
              : function (e) {
                  return e();
                };
          function f(n) {
            var r = (0, Gn.useMemo)(
                function () {
                  var e = n.reactReduxForwardedRef,
                    t = nr(n, ["reactReduxForwardedRef"]);
                  return [n.context, e, t];
                },
                [n]
              ),
              a = r[0],
              i = r[1],
              l = r[2],
              u = (0, Gn.useMemo)(
                function () {
                  return a &&
                    a.Consumer &&
                    (0, or.isContextConsumer)(
                      Gn.createElement(a.Consumer, null)
                    )
                    ? a
                    : v;
                },
                [a, v]
              ),
              f = (0, Gn.useContext)(u),
              p =
                Boolean(n.store) &&
                Boolean(n.store.getState) &&
                Boolean(n.store.dispatch);
            Boolean(f) && Boolean(f.store);
            var d = p ? n.store : f.store,
              m = (0, Gn.useMemo)(
                function () {
                  return (function (t) {
                    return e(t.dispatch, o);
                  })(d);
                },
                [d]
              ),
              h = (0, Gn.useMemo)(
                function () {
                  if (!c) return ur;
                  var e = new Zn(d, p ? null : f.subscription),
                    t = e.notifyNestedSubs.bind(e);
                  return [e, t];
                },
                [d, p, f]
              ),
              g = h[0],
              y = h[1],
              b = (0, Gn.useMemo)(
                function () {
                  return p
                    ? f
                    : tr({}, f, {
                        subscription: g,
                      });
                },
                [p, f, g]
              ),
              _ = (0, Gn.useReducer)(sr, lr, dr),
              w = _[0][0],
              x = _[1];
            if (w && w.error) throw w.error;
            var S = (0, Gn.useRef)(),
              T = (0, Gn.useRef)(l),
              k = (0, Gn.useRef)(),
              E = (0, Gn.useRef)(!1),
              C = s(
                function () {
                  return k.current && l === T.current
                    ? k.current
                    : m(d.getState(), l);
                },
                [d, w, l]
              );
            cr(fr, [T, S, E, l, C, k, y]),
              cr(pr, [c, d, g, m, T, S, E, k, y, x], [d, g, m]);
            var P = (0, Gn.useMemo)(
              function () {
                return Gn.createElement(
                  t,
                  tr({}, C, {
                    ref: i,
                  })
                );
              },
              [i, t, C]
            );
            return (0, Gn.useMemo)(
              function () {
                return c
                  ? Gn.createElement(
                      u.Provider,
                      {
                        value: b,
                      },
                      P
                    )
                  : P;
              },
              [u, P, b]
            );
          }
          var d = l ? Gn.memo(f) : f;
          if (((d.WrappedComponent = t), (d.displayName = r), m)) {
            var h = Gn.forwardRef(function (e, t) {
              return Gn.createElement(
                d,
                tr({}, e, {
                  reactReduxForwardedRef: t,
                })
              );
            });
            return (h.displayName = r), (h.WrappedComponent = t), ar()(h, t);
          }
          return ar()(d, t);
        };
      }
      function hr(e, t) {
        return e === t
          ? 0 !== e || 0 !== t || 1 / e == 1 / t
          : e != e && t != t;
      }
      function gr(e, t) {
        if (hr(e, t)) return !0;
        if (
          "object" != typeof e ||
          null === e ||
          "object" != typeof t ||
          null === t
        )
          return !1;
        var n = Object.keys(e),
          r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (var a = 0; a < n.length; a++)
          if (
            !Object.prototype.hasOwnProperty.call(t, n[a]) ||
            !hr(e[n[a]], t[n[a]])
          )
            return !1;
        return !0;
      }
      function yr(e) {
        return function (t, n) {
          var r = e(t, n);
          function a() {
            return r;
          }
          return (a.dependsOnOwnProps = !1), a;
        };
      }
      function vr(e) {
        return null !== e.dependsOnOwnProps && void 0 !== e.dependsOnOwnProps
          ? Boolean(e.dependsOnOwnProps)
          : 1 !== e.length;
      }
      function br(e, t) {
        return function (t, n) {
          n.displayName;
          var r = function (e, t) {
            return r.dependsOnOwnProps ? r.mapToProps(e, t) : r.mapToProps(e);
          };
          return (
            (r.dependsOnOwnProps = !0),
            (r.mapToProps = function (t, n) {
              (r.mapToProps = e), (r.dependsOnOwnProps = vr(e));
              var a = r(t, n);
              return (
                "function" == typeof a &&
                  ((r.mapToProps = a),
                  (r.dependsOnOwnProps = vr(a)),
                  (a = r(t, n))),
                a
              );
            }),
            r
          );
        };
      }
      const _r = [
          function (e) {
            return "function" == typeof e ? br(e) : void 0;
          },
          function (e) {
            return e
              ? void 0
              : yr(function (e) {
                  return {
                    dispatch: e,
                  };
                });
          },
          function (e) {
            return e && "object" == typeof e
              ? yr(function (t) {
                  return (function (e, t) {
                    if ("function" == typeof e) return c(e, t);
                    if ("object" != typeof e || null === e)
                      throw new Error(
                        "bindActionCreators expected an object or a function, instead received " +
                          (null === e ? "null" : typeof e) +
                          '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
                      );
                    var n = {};
                    for (var r in e) {
                      var a = e[r];
                      "function" == typeof a && (n[r] = c(a, t));
                    }
                    return n;
                  })(e, t);
                })
              : void 0;
          },
        ],
        wr = [
          function (e) {
            return "function" == typeof e ? br(e) : void 0;
          },
          function (e) {
            return e
              ? void 0
              : yr(function () {
                  return {};
                });
          },
        ];
      function xr(e, t, n) {
        return tr({}, n, {}, e, {}, t);
      }
      const Sr = [
        function (e) {
          return "function" == typeof e
            ? (function (e) {
                return function (t, n) {
                  n.displayName;
                  var r,
                    a = n.pure,
                    o = n.areMergedPropsEqual,
                    i = !1;
                  return function (t, n, l) {
                    var u = e(t, n, l);
                    return (
                      i ? (a && o(u, r)) || (r = u) : ((i = !0), (r = u)), r
                    );
                  };
                };
              })(e)
            : void 0;
        },
        function (e) {
          return e
            ? void 0
            : function () {
                return xr;
              };
        },
      ];
      function Tr(e, t, n, r) {
        return function (a, o) {
          return n(e(a, o), t(r, o), o);
        };
      }
      function kr(e, t, n, r, a) {
        var o,
          i,
          l,
          u,
          s,
          c = a.areStatesEqual,
          f = a.areOwnPropsEqual,
          p = a.areStatePropsEqual,
          d = !1;
        return function (a, m) {
          return d
            ? (function (a, d) {
                var m,
                  h,
                  g = !f(d, i),
                  y = !c(a, o);
                return (
                  (o = a),
                  (i = d),
                  g && y
                    ? ((l = e(o, i)),
                      t.dependsOnOwnProps && (u = t(r, i)),
                      (s = n(l, u, i)))
                    : g
                    ? (e.dependsOnOwnProps && (l = e(o, i)),
                      t.dependsOnOwnProps && (u = t(r, i)),
                      (s = n(l, u, i)))
                    : y
                    ? ((m = e(o, i)),
                      (h = !p(m, l)),
                      (l = m),
                      h && (s = n(l, u, i)),
                      s)
                    : s
                );
              })(a, m)
            : ((l = e((o = a), (i = m))),
              (u = t(r, i)),
              (s = n(l, u, i)),
              (d = !0),
              s);
        };
      }
      function Er(e, t) {
        var n = t.initMapStateToProps,
          r = t.initMapDispatchToProps,
          a = t.initMergeProps,
          o = nr(t, [
            "initMapStateToProps",
            "initMapDispatchToProps",
            "initMergeProps",
          ]),
          i = n(e, o),
          l = r(e, o),
          u = a(e, o);
        return (o.pure ? kr : Tr)(i, l, u, e, o);
      }
      function Cr(e, t, n) {
        for (var r = t.length - 1; r >= 0; r--) {
          var a = t[r](e);
          if (a) return a;
        }
        return function (t, r) {
          throw new Error(
            "Invalid value of type " +
              typeof e +
              " for " +
              n +
              " argument when connecting component " +
              r.wrappedComponentName +
              "."
          );
        };
      }
      function Pr(e, t) {
        return e === t;
      }
      function Nr(e) {
        var t = void 0 === e ? {} : e,
          n = t.connectHOC,
          r = void 0 === n ? mr : n,
          a = t.mapStateToPropsFactories,
          o = void 0 === a ? wr : a,
          i = t.mapDispatchToPropsFactories,
          l = void 0 === i ? _r : i,
          u = t.mergePropsFactories,
          s = void 0 === u ? Sr : u,
          c = t.selectorFactory,
          f = void 0 === c ? Er : c;
        return function (e, t, n, a) {
          void 0 === a && (a = {});
          var i = a,
            u = i.pure,
            c = void 0 === u || u,
            p = i.areStatesEqual,
            d = void 0 === p ? Pr : p,
            m = i.areOwnPropsEqual,
            h = void 0 === m ? gr : m,
            g = i.areStatePropsEqual,
            y = void 0 === g ? gr : g,
            v = i.areMergedPropsEqual,
            b = void 0 === v ? gr : v,
            _ = nr(i, [
              "pure",
              "areStatesEqual",
              "areOwnPropsEqual",
              "areStatePropsEqual",
              "areMergedPropsEqual",
            ]),
            w = Cr(e, o, "mapStateToProps"),
            x = Cr(t, l, "mapDispatchToProps"),
            S = Cr(n, s, "mergeProps");
          return r(
            f,
            tr(
              {
                methodName: "connect",
                getDisplayName: function (e) {
                  return "Connect(" + e + ")";
                },
                shouldHandleStateChanges: Boolean(e),
                initMapStateToProps: w,
                initMapDispatchToProps: x,
                initMergeProps: S,
                pure: c,
                areStatesEqual: d,
                areOwnPropsEqual: h,
                areStatePropsEqual: y,
                areMergedPropsEqual: b,
              },
              _
            )
          );
        };
      }
      const Ir = Nr();
      var Or;
      (Or = Kn.unstable_batchedUpdates), (Yn = Or);
      const Mr = Gn.createElement,
        zr = (e, t) => Mr("div", e, t),
        Ar = (e, t) => (void 0 !== e ? e : t),
        Rr = (e) =>
          e.value
            ? Mr(
                "button",
                {
                  title: Ar(e.tooltip, ""),
                  className: "toggleButton " + Ar(e.classNameTrue, e.className),
                  style: e.styleTrue,
                  onClick: () =>
                    e.onChange({
                      target: {
                        value: !e.value,
                      },
                    }),
                },
                Ar(e.label, e.labelFalse)
              )
            : Mr(
                "button",
                {
                  title: Ar(e.tooltip, ""),
                  className:
                    "toggleButton " + Ar(e.classNameFalse, e.className),
                  style: e.styleFalse,
                  onClick: () =>
                    e.onChange({
                      target: {
                        value: !e.value,
                      },
                    }),
                },
                Ar(e.label, e.labelFalse)
              ),
        jr = (e) =>
          e.value
            ? zr(
                {
                  className: "" + Ar(e.classNameTrue, e.className),
                  style: Ar(e.styleTrue, e.style),
                  onClick: () =>
                    e.onChange({
                      target: {
                        value: !e.value,
                      },
                    }),
                },
                Ar(e.label, e.labelFalse)
              )
            : zr(
                {
                  className: "" + Ar(e.classNameFalse, e.className),
                  style: Ar(e.styleFalse, e.style),
                  onClick: () =>
                    e.onChange({
                      target: {
                        value: !e.value,
                      },
                    }),
                },
                Ar(e.label, e.labelFalse)
              ),
        Fr = Gn.createElement,
        Dr = (e, t) => Fr("div", e, t),
        Lr = (e, t) => (void 0 !== e ? e : t);
      class Wr extends Gn.Component {
        constructor(e) {
          super(e),
            (this.state = {
              isOpen: !1,
            });
        }
        setOpen(e) {
          this.setState({
            isOpen: e,
          });
        }
        render() {
          var e;
          const t = (e, t, n) =>
              Dr(
                {
                  key: n,
                  className: "dropdownChild " + Lr(this.props.className, ""),
                  onClick: () => {
                    this.setOpen(!this.state.isOpen), this.props.onChange(t);
                  },
                },
                e
              ),
            n = Dr(
              {
                className: "dropdownChildren",
              },
              this.props.options.map((e, n) => t(e.elem, e.value, n))
            ),
            r = Dr(
              {
                key: -1,
                className: "dropdownSelected",
                onClick: () => this.setOpen(!this.state.isOpen),
              },
              null ===
                (e = this.props.options.find(
                  (e) => e.value === this.props.value
                )) || void 0 === e
                ? void 0
                : e.elem
            );
          return Fr(
            "div",
            {
              className: "dropdown",
              onBlur: () => this.setOpen(!1),
              tabIndex: 0,
            },
            [r, this.state.isOpen ? n : void 0]
          );
        }
      }
      const Ur = Gn.createElement,
        $r = (e, t) => Ur("div", e, t),
        Br = (e) => e.trim(),
        Vr = Br,
        Hr = (e) => {
          const [t, n] = (0, Gn.useState)(""),
            [r, a] = (0, Gn.useState)("wss://squadmortar.xyz/ws"),
            [o, i] = (0, Gn.useState)(!1);
          return Ur(Gn.Fragment, {}, [
            $r(
              {
                className: "flexRow",
                style: {
                  width: "100%",
                },
              },
              [
                $r(
                  {
                    style: {
                      paddingTop: "3px",
                    },
                  },
                  ["Server(beta)"]
                ),
                $r(
                  {
                    className: "v10",
                  },
                  []
                ),
                $r(
                  {
                    className: "divButton",
                    title: "reset server to default",
                    onClick: () => a("wss://squadmortar.xyz/ws"),
                  },
                  "R"
                ),
              ]
            ),
            $r({
              className: "v2",
            }),
            $r(
              {
                className: "flexRow",
                style: {
                  justifyContent: "space-between",
                },
              },
              [
                $r(
                  {
                    className: "flexItem",
                    style: {
                      height: "22px",
                      width: "100%",
                    },
                  },
                  Ur("textarea", {
                    className: "sessionTextInput",
                    value: r,
                    onChange: (e) => a(Br(e.target.value)),
                  })
                ),
              ]
            ),
            $r({
              className: "v2",
            }),
            $r(
              {
                className: "flexRow",
                style: {},
              },
              [
                $r(
                  {
                    style: {
                      paddingTop: "3px",
                    },
                  },
                  ["Session"]
                ),
              ]
            ),
            e.sessionId
              ? Ur(Gn.Fragment, {}, [
                  $r({
                    className: "v2",
                  }),
                  $r(
                    {
                      className: "flexRow",
                      style: {},
                    },
                    [
                      Ur(
                        "div",
                        {
                          className: "flexItemFill",
                        },
                        e.sessionId
                      ),
                    ]
                  ),
                ])
              : null,
            $r({
              className: "v2",
            }),
            $r(
              {
                className: "flexRow",
              },
              []
            ),
            $r({
              className: "v2",
            }),
            $r(
              {
                className: "flexRow",
                style: {
                  justifyContent: "space-between",
                  width: "100%",
                },
              },
              [
                $r(
                  {
                    className: "flexItem",
                    style: {
                      height: "22px",
                      width: "100%",
                    },
                  },
                  Ur("textarea", {
                    className: "sessionTextInput",
                    value: t,
                    onChange: (e) => n(Vr(e.target.value)),
                  })
                ),
              ]
            ),
            $r({
              className: "v2",
            }),
            $r(
              {
                className: "flexRow",
                style: {
                  justifyContent: "space-between",
                },
              },
              [
                Ur(
                  "div",
                  {
                    className: "flexItem divButton",
                    style: {
                      width: "100%",
                    },
                    onClick: () => e.newSession(r, e.world),
                  },
                  "Create"
                ),
                $r({
                  className: "h2",
                }),
                Ur(
                  "div",
                  {
                    className: "flexItemFill divButton ",
                    onClick: () => e.join(r, t),
                  },
                  "Join"
                ),
                $r({
                  className: "h2",
                }),
                Ur(
                  "div",
                  {
                    className: "flexItemFill divButton",
                    onClick: () => e.leave(),
                  },
                  "Leave"
                ),
              ]
            ),
            e.sessionId
              ? Ur(Gn.Fragment, {}, [
                  $r({
                    className: "v2",
                  }),
                  $r(
                    {
                      className: "flexRow",
                      style: {},
                    },
                    "Users"
                  ),
                  Qr(
                    Object.assign(
                      {
                        editingUserName: o,
                        setEditingUserName: i,
                      },
                      e
                    )
                  ),
                ])
              : null,
          ]);
        },
        Qr = (e) => {
          var t;
          return $r(
            {
              className: "flexRow",
              style: {
                overflowX: "hidden",
                maxHeight: "100px",
              },
            },
            [
              $r(
                {
                  className: "flexColumn",
                  style: {
                    width: "100%",
                  },
                },
                null === (t = e.users) || void 0 === t
                  ? void 0
                  : t.map((t) =>
                      t.id === e.userId
                        ? Gr(
                            $r(
                              {
                                className: "flexRow green bold",
                                style: {
                                  cursor: "pointer",
                                },
                              },
                              "> " + t.name
                            ),
                            e.editingUserName,
                            e.setEditingUserName,
                            e.changeUserName
                          )
                        : $r(
                            {
                              className: "flexRow green",
                            },
                            "| " + t.name
                          )
                    )
              ),
            ]
          );
        },
        Gr = (e, t, n, r) =>
          t
            ? Ur("textarea", {
                className: "sessionTextInput",
                style: {
                  height: "22px",
                  width: "100%",
                },
                onKeyDown: (e) => {
                  "Enter" === e.key &&
                    e.target === document.activeElement &&
                    (n(!1), r(e.target.value));
                },
                onBlur: () => {
                  n(!1);
                },
              })
            : $r(
                {
                  onClick: () => n(!0),
                },
                [e]
              ),
        Kr =
          (Ir(
            (e) => {
              var t, n;
              return {
                userSettings: e.userSettings,
                sessionId:
                  null === (t = e.session) || void 0 === t
                    ? void 0
                    : t.sessionId,
                users:
                  null === (n = e.session) || void 0 === n
                    ? void 0
                    : n.users.values(),
                world: e.world,
              };
            },
            (e) => ({
              newSession: (t, n) => e(St(t, n)),
              join: (t, n) => e(Tt(t, n)),
              leave: () => e(Et()),
              sendMessage: (t, n) => e(kt(t, n)),
            })
          )((e) =>
            Ur(
              "div",
              {
                className: "rightPanel flexItem",
              },
              [Hr(e)]
            )
          ),
          Gn.createElement),
        qr = (e, t) => Kr("div", e, t),
        Yr = [
          ["albasrah", "Al Basrah", "options/albasrah_option.png"],
          ["anvil", "Anvil", "options/anvil_option.png"],
          ["belaya", "Belaya", "options/belaya_option.png"],
          ["blackcoast", "Black Coast", "options/blackcoast_option.png"],
          ["chora", "Chora", "options/chora_option.png"],
          ["fallujah", "Fallujah City", "options/fallujah_option.png"],
          ["foolsroad", "Fool's Road", "options/foolsroad_option.png"],
          ["goosebay", "Goosebay", "options/goosebay_option.png"],
          ["gorodok", "Gorodok", "options/gorodok_option.png"],
          ["harju", "Harju", "options/harju_option.png"],
          ["jensensrange", "Jensen's Range", "options/jensensrange_option.png"],
          ["kamdesh", "Kamdesh", "options/kamdesh_option.png"],
          ["kohat", "Kohat Toi", "options/kohat_option.png"],
          ["kokan", "Kokan", "options/kokan_option.png"],
          ["logar", "Logar Valley", "options/logar_option.png"],
          ["lashkar", "Lashkar Valley", "options/lashkar_option.png"],
          ["manicouagan", "Manicouagan", "options/manic_option.png"],
          ["mestia", "Mestia", "options/mestia_option.png"],
          ["mutaha", "Mutaha", "options/mutaha_option.png"],
          ["narva", "Narva", "options/narva_option.png"],
          ["skorpo", "Skorpo (Town)", "options/skorpo_option.png"],
          ["skorpoFull", "Skorpo", "options/skorpo_option.png"],
          ["sumari", "Sumari", "options/sumari_option.png"],
          ["tallil", "Tallil Outskirts", "options/tallil_option.png"],
          ["yehorivka", "Yehorivka", "options/yehorivka_option.png"],
          [
            "yehorivka_skirmish_v1",
            "Yehorivka (Sk_v1)",
            "options/yehorivka_option.png",
          ],
        ],
        Xr = [
          ["standardMortar", "Standard mortar", "options/mortarRound10.png"],
          ["technicalMortar", "Technical mortar", "options/mortarRound10.png"],
          ["ub32", "UB32/S5 rockets", "options/s5rocket2.png"],
          ["hellCannon", "Hell Cannon", "options/mortarRound10.png"],
          ["bm21", "BM-21 Grad", "options/s5rocket2.png"],
        ],
        Jr = (e, t) =>
          qr(
            {
              className: "flexRow mapOption",
            },
            [
              qr({
                className: "mapOptionImage",
                style: {
                  backgroundImage: `url(${t})`,
                },
              }),
              qr(
                {
                  className: "mapOptionLabel",
                },
                e
              ),
            ]
          ),
        Zr = (e) => [
          qr(
            {
              className: "flexColumn",
            },
            [
              qr(
                {
                  className: "flexRow",
                },
                [
                  Kr(Wr, {
                    className: "flexItem fill",
                    value: e.userSettings.mapId,
                    onChange: e.onChangeMap,
                    options: Yr.map((e) => ({
                      value: e[0],
                      elem: Jr(e[1], e[2]),
                    })),
                  }),
                ]
              ),
              qr(
                {
                  className: "v2",
                },
                []
              ),
              qr(
                {
                  className: "flexRow",
                },
                [
                  Rr({
                    value: e.userSettings.mapGrid,
                    onChange: e.onChangeMapGrid,
                    label: "#",
                    classNameTrue: "toggleButton black",
                    classNameFalse: "toggleButton",
                    styleFalse: {
                      color: "grey",
                    },
                    tooltip: "Show map grid",
                  }),
                ]
              ),
              qr(
                {
                  className: "flexRow",
                },
                [
                  qr({
                    className: "separator",
                  }),
                ]
              ),
              ...ea(e),
              qr(
                {
                  className: "flexRow",
                },
                [
                  qr({
                    className: "separator",
                  }),
                ]
              ),
              ...na(e),
              qr(
                {
                  className: "v2",
                },
                []
              ),
              qr(
                {
                  className: "flexRow",
                },
                [
                  qr({
                    className: "separator",
                  }),
                ]
              ),
              ...ra(e),
              qr(
                {
                  className: "flexRow",
                },
                [
                  qr({
                    className: "separator",
                  }),
                ]
              ),
              Hr(e),
              qr(
                {
                  className: "flexRow",
                },
                [
                  qr({
                    className: "separator",
                  }),
                ]
              ),
              qr(
                {
                  className: "flexRow hint",
                },
                [
                  "Check tooltips or the ReadMe on",
                  qr(
                    {
                      className: "h5",
                    },
                    []
                  ),
                  Kr(
                    "a",
                    {
                      className: "link",
                      href: "https://gitlab.com/squadstrat/squadmortar",
                    },
                    ["gitlab"]
                  ),
                ]
              ),
              qr(
                {
                  className: "v2",
                },
                []
              ),
            ]
          ),
        ],
        ea = (e) => [
          qr(
            {
              className: "flexRow",
            },
            [
              Kr(Wr, {
                className: "flexItemFill",
                value: e.userSettings.weaponType,
                onChange: e.onChangeWeapon,
                options: Xr.map((e) => {
                  return {
                    value: e[0],
                    elem:
                      ((t = e[1]),
                      (n = e[2]),
                      qr(
                        {
                          className: "flexRow mapOption",
                          key: t,
                        },
                        [
                          qr({
                            className: "weaponOptionImage",
                            style: {
                              backgroundImage: `url(${n})`,
                            },
                          }),
                          qr(
                            {
                              className: "weaponOptionLabel",
                            },
                            t
                          ),
                        ]
                      )),
                  };
                  var t, n;
                }),
              }),
            ]
          ),
          qr(
            {
              className: "v2",
            },
            []
          ),
          qr(
            {
              className: "flexRow",
            },
            [
              Rr({
                value: e.userSettings.weaponPlacementHelper,
                onChange: e.onChangeWeaponPlacementHelper,
                tooltip: "Show keypads while moving weapon",
                label: "#?",
                className: "",
                classNameTrue: " green",
                styleFalse: {
                  color: "grey",
                },
              }),
              qr(
                {
                  className: "h2",
                },
                []
              ),
              Rr({
                value: e.userSettings.weaponPlacementLabel,
                onChange: e.onChangeWeaponPlacementLabel,
                tooltip: "Show keypad label while moving weapon",
                label: "A1",
                className: "",
                classNameTrue: " green",
                styleFalse: {
                  color: "grey",
                },
              }),
            ]
          ),
          ta(e),
        ],
        ta = (e) => {
          let t = zt(e.world, "Weapon");
          return (
            jt(t),
            qr(
              {
                className: "flexRow",
              },
              [
                Kr(
                  "table",
                  {
                    className: "weaponTable",
                  },
                  [
                    Kr("colgroup", {}, [
                      Kr("col", {
                        className: "indexCol",
                      }),
                      Kr("col", {
                        className: "locationCol",
                      }),
                      Kr("col", {
                        className: "",
                      }),
                      Kr("col", {
                        className: "",
                      }),
                      Kr("col", {
                        className: "",
                      }),
                    ]),
                    Kr("thead", {}, [
                      Kr("tr", {}, [
                        Kr("th", {}, [""]),
                        Kr("th", {}, [""]),
                        Kr("th", {}, [""]),
                        Kr("th", {}, [""]),
                        Kr("th", {}, [""]),
                      ]),
                    ]),
                    Kr("tbody", {}, [
                      ...t.map((t, n) =>
                        Kr(
                          "tr",
                          {
                            key: n,
                          },
                          [
                            Kr(
                              "td",
                              {
                                className: "indexCell",
                              },
                              [(n + 1).toString()]
                            ),
                            Kr("td", {}, [
                              ft(ct(e.minimap, Ae(me(), t.transform))),
                            ]),
                            Kr("td", {}, [
                              Kr("input", {
                                type: "number",
                                className: "textInput numberInput",
                                value: Math.floor(t.heightOverGround / 100),
                                onChange: e.onChangeWeaponHeightOverGround(
                                  t.entityId
                                ),
                                title:
                                  "weapon height over ground (tall buildings, bridges, ...)",
                              }),
                            ]),
                            Kr("td", {}, [
                              qr(
                                {
                                  className: "divButton ",
                                  title: "activate only this weapon",
                                  onClick: () => e.pickActiveWeapon(t.entityId),
                                },
                                "^"
                              ),
                            ]),
                            Kr("td", {}, [
                              Rr({
                                value: t.isActive,
                                onChange: () =>
                                  e.setWeaponActive(t.entityId, !t.isActive),
                                tooltip: "activate/deactivate this weapon",
                                label: "o",
                                className: "",
                                classNameTrue: " green",
                                styleFalse: {
                                  color: "grey",
                                },
                              }),
                            ]),
                          ]
                        )
                      ),
                    ]),
                  ]
                ),
              ]
            )
          );
        },
        na = (e) => [
          qr(
            {
              className: "flexRow",
            },
            [
              Rr({
                value: e.userSettings.targetGrid,
                onChange: e.onChangeTargetGrid,
                tooltip:
                  "Targeting grid: 5mil elevation arcs, 1° bearing lines",
                label: "#",
                className: "",
                classNameTrue: " green",
                styleFalse: {
                  color: "grey",
                },
              }),
              qr({
                className: "h2",
              }),
              Rr({
                value: e.userSettings.targetSpread,
                onChange: e.onChangeTargetSpread,
                tooltip: "Projectile spread",
                label: "O",
                className: "",
                classNameTrue: " blue",
                styleFalse: {
                  color: "grey",
                },
              }),
              qr({
                className: "h2",
              }),
              Rr({
                value: e.userSettings.targetSplash,
                onChange: e.onChangeTargetSplash,
                tooltip: "Splash radius for 100 and 25 damage",
                label: "(O)",
                className: "",
                classNameTrue: " red",
                styleFalse: {
                  color: "grey",
                },
              }),
              qr({
                className: "h2",
              }),
              Rr({
                value: e.userSettings.targetDistance,
                onChange: e.onChangeTargetDistance,
                tooltip: "Weapon-target distance",
                label: "m",
                className: "",
                classNameTrue: " black",
                styleFalse: {
                  color: "grey",
                },
              }),
            ]
          ),
          qr(
            {
              className: "v2",
            },
            []
          ),
          qr(
            {
              className: "flexRow",
            },
            [
              Rr({
                value: e.userSettings.targetCompactMode,
                onChange: e.onChangeTargetCompactMode,
                tooltip: "Compact target text: last three elevation digits",
                label: "c",
                className: "",
                classNameTrue: "pink",
                styleFalse: {
                  color: "grey",
                },
              }),
              qr({
                className: "h2",
              }),
              Rr({
                value: e.userSettings.targetPlacementHelper,
                onChange: e.onChangeTargetPlacementHelper,
                tooltip: "Show keypads while moving target",
                label: "#?",
                className: "",
                classNameTrue: "red",
                styleFalse: {
                  color: "grey",
                },
              }),
              qr({
                className: "h2",
              }),
              Rr({
                value: e.userSettings.targetPlacementLabel,
                onChange: e.onChangeTargetPlacementLabel,
                tooltip: "Show keypad label while moving target",
                label: "A1",
                className: "",
                classNameTrue: "red",
                styleFalse: {
                  color: "grey",
                },
              }),
              qr({
                className: "h2",
              }),
              Kr("input", {
                type: "number",
                className: "textInput numberInput",
                value: e.userSettings.fontSize,
                onChange: e.onChangeFontSize,
                title: "font size",
              }),
            ]
          ),
        ],
        ra = (e) => [
          qr(
            {
              className: "flexRow",
            },
            [
              Rr({
                value: e.userSettings.extraButtonsAlwaysShown,
                onChange: e.onChangeExtraButtons,
                tooltip: "Show extra buttons in collapsed mode",
                label: "m.",
                className: "",
                classNameTrue: "yellow",
                styleFalse: {
                  color: "grey",
                },
              }),
              qr(
                {
                  className: "h2",
                },
                []
              ),
              Rr({
                value: e.userSettings.deleteMode,
                onChange: e.onChangeDeleteMode,
                tooltip: "Delete items with single click/touch",
                label: "-I",
                className: "",
                classNameTrue: "red",
                styleFalse: {
                  color: "grey",
                },
              }),
              qr({
                className: "h2",
              }),
              Rr({
                value: e.uiState.weaponCreationMode,
                onChange: e.onChangeWeaponCreationMode,
                tooltip:
                  "Place target or weapon markers by default (shift + double click always places weapons)",
                label: [
                  Kr(
                    "span",
                    {
                      className: e.uiState.weaponCreationMode ? "grey" : "red",
                    },
                    ["T "]
                  ),
                  Kr(
                    "span",
                    {
                      className: e.uiState.weaponCreationMode
                        ? "green"
                        : "grey",
                    },
                    ["W"]
                  ),
                ],
              }),
              qr({
                className: "h2",
              }),
              qr(
                {
                  className: "v10",
                },
                []
              ),
              qr(
                {
                  className: "divButton ",
                  title: "Remove all targets",
                  onClick: e.onClickRemoveAllTargets,
                },
                "-∀T"
              ),
            ]
          ),
        ],
        aa = Ir(
          (e) => {
            var t, n, r;
            return {
              userSettings: e.userSettings,
              sessionId:
                null === (t = e.session) || void 0 === t ? void 0 : t.sessionId,
              uiState: e.uiState,
              world: e.world,
              minimap: e.minimap,
              users: e.session
                ? Array.from(
                    null === (n = e.session) || void 0 === n
                      ? void 0
                      : n.users.values()
                  )
                : [],
              userId:
                null === (r = e.session) || void 0 === r ? void 0 : r.userId,
            };
          },
          (e) => ({
            onChangeMap: (t) => e(cn(t)),
            onChangeContourmap: (t) => e(on("contourmap", t.target.value)),
            onChangeWeapon: (t) => e(on("weaponType", t)),
            onChangeWeaponPlacementHelper: (t) =>
              e(on("weaponPlacementHelper", t.target.value)),
            onChangeWeaponPlacementLabel: (t) =>
              e(on("weaponPlacementLabel", t.target.value)),
            onChangeMapGrid: (t) => {
              e(on("mapGrid", t.target.value));
            },
            onChangeTargetSpread: (t) => e(on("targetSpread", t.target.value)),
            onChangeTargetSplash: (t) => e(on("targetSplash", t.target.value)),
            onChangeTargetDistance: (t) =>
              e(on("targetDistance", t.target.value)),
            onChangeTargetGrid: (t) => e(on("targetGrid", t.target.value)),
            onChangeTargetCompactMode: (t) =>
              e(on("targetCompactMode", t.target.value)),
            onChangeTargetPlacementHelper: (t) =>
              e(on("targetPlacementHelper", t.target.value)),
            onChangeTargetPlacementLabel: (t) =>
              e(on("targetPlacementLabel", t.target.value)),
            onChangeFontSize: (t) =>
              e(on("fontSize", parseInt(t.target.value))),
            onChangeWeaponHeightOverGround: (t) => (n) =>
              e(
                ((e, t) => ({
                  type: et.setHeightOverGround,
                  payload: {
                    entityId: e,
                    newHeight: 100 * t,
                  },
                }))(t, parseInt(n.target.value))
              ),
            onClickRemoveAllTargets: (t) =>
              e({
                type: Je.removeAllTargets,
                payload: {},
              }),
            onChangeDeleteMode: (t) => e(on("deleteMode", t.target.value)),
            onChangeExtraButtons: (t) =>
              e(on("extraButtonsAlwaysShown", t.target.value)),
            onChangeWeaponCreationMode: (t) =>
              e(
                ((e, t) => ({
                  type: r.write,
                  payload: {
                    key: "weaponCreationMode",
                    value: t,
                  },
                }))(0, t.target.value)
              ),
            setWeaponActive: (t, n) =>
              e(
                ((e, t) => ({
                  type: et.setActive,
                  payload: {
                    entityId: e,
                    newState: t,
                  },
                }))(t, n)
              ),
            pickActiveWeapon: (t, n) =>
              e(
                ((e) => ({
                  type: et.pickActive,
                  payload: {
                    entityId: e,
                  },
                }))(t)
              ),
            setCollapsed: (t) => e(on("leftPanelCollapsed", t.target.value)),
            newSession: (t, n) => e(St(t, n)),
            join: (t, n) => e(Tt(t, n)),
            leave: () => e(Et()),
            sendMessage: (t, n) => e(kt(t, n)),
            changeUserName: (t) =>
              e(
                ((e) => ({
                  type: _t.changeUserName,
                  payload: {
                    newName: e,
                  },
                }))(t)
              ),
          })
        )((e) =>
          Kr(
            "div",
            {
              className: "leftPanel flexItem",
            },
            [
              e.userSettings.leftPanelCollapsed
                ? qr(
                    {
                      className: "flexColumn",
                      style: {
                        padding: "2px",
                      },
                    },
                    [
                      qr(
                        {
                          className: "flexRow",
                        },
                        [
                          Kr(Wr, {
                            className: "flexItem fill",
                            value: e.userSettings.mapId,
                            onChange: e.onChangeMap,
                            options: Yr.map((e) => ({
                              value: e[0],
                              elem: Jr(e[1], e[2]),
                            })),
                          }),
                        ]
                      ),
                      e.userSettings.extraButtonsAlwaysShown
                        ? Kr(Gn.Fragment, {}, [
                            qr(
                              {
                                className: "v2",
                              },
                              []
                            ),
                            ...ra(e),
                          ])
                        : null,
                    ]
                  )
                : qr(
                    {
                      style: {
                        padding: "2px",
                      },
                    },
                    Zr(e)
                  ),
              jr({
                value: e.userSettings.leftPanelCollapsed,
                onChange: e.setCollapsed,
                label: "",
                className: "collapseButton",
                style: {},
              }),
            ]
          )
        ),
        oa = Gn.createElement,
        ia = Ir(
          (e) => ({
            uiState: e.uiState,
            minimap: e.minimap,
            heightmap: e.heightmap,
            camera: e.camera,
          }),
          (e) => ({})
        )((e) => {
          const t = ut(e.camera, e.uiState.mousePosition),
            n = ct(e.minimap, t),
            r = yn(e.heightmap, t);
          return oa(
            "div",
            {
              className: "",
            },
            [`${ft(n)} |  ${(r / 100).toFixed(1)}m`]
          );
        });
      var la;
      (de = Array),
        (function () {
          function e(e, t) {
            function n() {
              this.constructor = e;
            }
            a(e, t), (e.prototype = ((n.prototype = t.prototype), new n()));
          }
          function t(e) {
            e.o || ((e.D = new Map()), (e.o = new Map(e.t)));
          }
          function n(e) {
            e.o ||
              ((e.o = new Set()),
              e.t.forEach(function (t) {
                if (g(t)) {
                  var n = B(e.A.h, t, e);
                  e.p.set(t, n), e.o.add(n);
                } else e.o.add(t);
              }));
          }
          function r(e) {
            e.O && m(3, JSON.stringify(S(e)));
          }
          var a = function (e, t) {
              return (a =
                Object.setPrototypeOf ||
                ({
                  __proto__: [],
                } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                })(e, t);
            },
            o = (function () {
              function n(e, t) {
                return (
                  (this[ee] = {
                    i: 2,
                    l: t,
                    A: t ? t.A : N(),
                    P: !1,
                    I: !1,
                    o: void 0,
                    D: void 0,
                    t: e,
                    k: this,
                    C: !1,
                    O: !1,
                  }),
                  this
                );
              }
              e(n, Map);
              var a = n.prototype;
              return (
                Object.defineProperty(a, "size", {
                  get: function () {
                    return S(this[ee]).size;
                  },
                }),
                (a.has = function (e) {
                  return S(this[ee]).has(e);
                }),
                (a.set = function (e, n) {
                  var a = this[ee];
                  return (
                    r(a),
                    (S(a).has(e) && S(a).get(e) === n) ||
                      (t(a),
                      U(a),
                      a.D.set(e, !0),
                      a.o.set(e, n),
                      a.D.set(e, !0)),
                    this
                  );
                }),
                (a.delete = function (e) {
                  if (!this.has(e)) return !1;
                  var n = this[ee];
                  return r(n), t(n), U(n), n.D.set(e, !1), n.o.delete(e), !0;
                }),
                (a.clear = function () {
                  var e = this[ee];
                  r(e),
                    S(e).size &&
                      (t(e),
                      U(e),
                      (e.D = new Map()),
                      y(e.t, function (t) {
                        e.D.set(t, !1);
                      }),
                      e.o.clear());
                }),
                (a.forEach = function (e, t) {
                  var n = this;
                  S(this[ee]).forEach(function (r, a) {
                    e.call(t, n.get(a), a, n);
                  });
                }),
                (a.get = function (e) {
                  var n = this[ee];
                  r(n);
                  var a = S(n).get(e);
                  if (n.I || !g(a)) return a;
                  if (a !== n.t.get(e)) return a;
                  var o = B(n.A.h, a, n);
                  return t(n), n.o.set(e, o), o;
                }),
                (a.keys = function () {
                  return S(this[ee]).keys();
                }),
                (a.values = function () {
                  var e,
                    t = this,
                    n = this.keys();
                  return (
                    ((e = {})[te] = function () {
                      return t.values();
                    }),
                    (e.next = function () {
                      var e = n.next();
                      return e.done
                        ? e
                        : {
                            done: !1,
                            value: t.get(e.value),
                          };
                    }),
                    e
                  );
                }),
                (a.entries = function () {
                  var e,
                    t = this,
                    n = this.keys();
                  return (
                    ((e = {})[te] = function () {
                      return t.entries();
                    }),
                    (e.next = function () {
                      var e = n.next();
                      if (e.done) return e;
                      var r = t.get(e.value);
                      return {
                        done: !1,
                        value: [e.value, r],
                      };
                    }),
                    e
                  );
                }),
                (a[te] = function () {
                  return this.entries();
                }),
                n
              );
            })(),
            i = (function () {
              function t(e, t) {
                return (
                  (this[ee] = {
                    i: 3,
                    l: t,
                    A: t ? t.A : N(),
                    P: !1,
                    I: !1,
                    o: void 0,
                    t: e,
                    k: this,
                    p: new Map(),
                    O: !1,
                    C: !1,
                  }),
                  this
                );
              }
              e(t, Set);
              var a = t.prototype;
              return (
                Object.defineProperty(a, "size", {
                  get: function () {
                    return S(this[ee]).size;
                  },
                }),
                (a.has = function (e) {
                  var t = this[ee];
                  return (
                    r(t),
                    t.o
                      ? !!t.o.has(e) || !(!t.p.has(e) || !t.o.has(t.p.get(e)))
                      : t.t.has(e)
                  );
                }),
                (a.add = function (e) {
                  var t = this[ee];
                  return r(t), this.has(e) || (n(t), U(t), t.o.add(e)), this;
                }),
                (a.delete = function (e) {
                  if (!this.has(e)) return !1;
                  var t = this[ee];
                  return (
                    r(t),
                    n(t),
                    U(t),
                    t.o.delete(e) || (!!t.p.has(e) && t.o.delete(t.p.get(e)))
                  );
                }),
                (a.clear = function () {
                  var e = this[ee];
                  r(e), S(e).size && (n(e), U(e), e.o.clear());
                }),
                (a.values = function () {
                  var e = this[ee];
                  return r(e), n(e), e.o.values();
                }),
                (a.entries = function () {
                  var e = this[ee];
                  return r(e), n(e), e.o.entries();
                }),
                (a.keys = function () {
                  return this.values();
                }),
                (a[te] = function () {
                  return this.values();
                }),
                (a.forEach = function (e, t) {
                  for (var n = this.values(), r = n.next(); !r.done; )
                    e.call(t, r.value, r.value, this), (r = n.next());
                }),
                t
              );
            })();
          !(function (e, t) {
            oe[e] || (oe[e] = t);
          })("MapSet", {
            N: function (e, t) {
              return new o(e, t);
            },
            T: function (e, t) {
              return new i(e, t);
            },
          });
        })();
      const ua = l(
          Yt,
          d(
            (function () {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              return function (e) {
                return function () {
                  var n = e.apply(void 0, arguments),
                    r = function () {
                      throw new Error(
                        "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch."
                      );
                    },
                    a = {
                      getState: n.getState,
                      dispatch: function () {
                        return r.apply(void 0, arguments);
                      },
                    },
                    o = t.map(function (e) {
                      return e(a);
                    });
                  return (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var n = null != arguments[t] ? arguments[t] : {};
                      t % 2
                        ? p(n, !0).forEach(function (t) {
                            f(e, t, n[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(n)
                          )
                        : p(n).forEach(function (t) {
                            Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(n, t)
                            );
                          });
                    }
                    return e;
                  })({}, n, {
                    dispatch: (r = d.apply(void 0, o)(n.dispatch)),
                  });
                };
              };
            })(Xe, Lt)
          )
        ),
        sa = {
          t0: performance.now(),
        };
      var ca;
      ua.dispatch(It([0, 0, 0])),
        ((ca = (() => {
          const e = window.localStorage.getItem(an);
          return null != e ? JSON.parse(e) : {};
        })()),
        Object.entries(ca).map((e) => ({
          type: t.write,
          payload: {
            key: e[0],
            value: e[1],
          },
        }))).map(ua.dispatch),
        ua.dispatch(cn("kokan")),
        ((e, t) => {
          const n = () => {
            (Jt.width = window.innerWidth),
              (Jt.height = window.innerHeight),
              Wn(e);
          };
          window.addEventListener("resize", n, !1), n();
          const a = (e, n, r, a) => {
              null == e ||
                e.addEventListener(
                  n,
                  (e) => ((t.t0 = performance.now()), r(e)),
                  a
                );
            },
            o = e.getState();
          a(Xt, "onchange", (t) => {
            qt(e, on("mapId", t.target.value));
          }),
            a(o.minimap.texture.image, "load", () => Wn(e)),
            a(
              Jt,
              "mousemove",
              ((e) => (t) => {
                1 == (1 & t.buttons) && $n(e, t);
                const n = lt(t);
                qt(
                  e,
                  ((e, t) => ({
                    type: r.write,
                    payload: {
                      key: "mousePosition",
                      value: he(e, t, 0),
                    },
                  }))(n[0], n[1])
                );
              })(e)
            ),
            a(
              Jt,
              "wheel",
              ((e) => (t) => {
                e.getState().camera;
                const n = De(e.getState().camera);
                let r = n < 0.01 ? 0.001 : n < 0.02 ? 0.002 : 0.005;
                const a =
                  t.deltaY > 0 ? Math.max(0.002, n - r) : Math.min(0.08, n + r);
                Bn(e, Jt, lt(t), a);
              })(e)
            ),
            a(
              Jt,
              "mousedown",
              ((e) => (t) => {
                const n = Hn(e)(t),
                  r = ut(e.getState().camera, lt(t));
                qt(e, sn(r)), qt(e, un(n)), qt(e, ln(!0));
              })(e)
            ),
            a(Jt, "mouseup", Vn(e)),
            a(Jt, "mouseleave", Vn(e)),
            a(
              Jt,
              "click",
              ((e) => (t) => {
                if (t.shiftKey) {
                  const r = e.getState(),
                    a = ut(r.camera, lt(t)),
                    o = st(r.camera, [25, 0, 0])[0],
                    i = Ot(r.world, a, o);
                  i.length > 0 &&
                    "Weapon" === i[0].entityType &&
                    qt(
                      e,
                      ((n = i[0].entityId),
                      {
                        type: et.toggleActive,
                        payload: {
                          entityId: n,
                        },
                      })
                    );
                } else if (t.ctrlKey || e.getState().userSettings.deleteMode) {
                  const n = e.getState(),
                    r = ut(n.camera, lt(t)),
                    a = st(n.camera, [25, 0, 0])[0],
                    o = Ot(n.world, r, a);
                  o.length > 0 &&
                    qt(
                      e,
                      ((e) => ({
                        type: Je.remove,
                        payload: {
                          entityId: e,
                        },
                      }))(o[0].entityId)
                    );
                }
                var n;
              })(e)
            ),
            a(
              Jt,
              "dblclick",
              ((e) => (t) => {
                const n = ut(e.getState().camera, lt(t));
                var r;
                e.getState().uiState.weaponCreationMode || t.shiftKey
                  ? qt(e, It(n))
                  : qt(
                      e,
                      ((r = n),
                      {
                        type: Je.add,
                        payload: {
                          location: r,
                          entityType: "Target",
                        },
                      })
                    );
              })(e)
            ),
            a(
              Jt,
              "touchstart",
              ((e) => (t) => {
                const n = Array(t.changedTouches.length)
                  .fill(0)
                  .map((e, t) => e + t);
                if (
                  (n.map((n) => {
                    let r = t.changedTouches[n];
                    e.dispatch(fn(r.identifier, r.clientX, r.clientY));
                  }),
                  1 === t.changedTouches.length)
                ) {
                  let n = t.changedTouches[0];
                  qt(e, un(Hn(e)(n))),
                    qt(e, sn(ut(e.getState().camera, lt(n))));
                }
              })(e),
              {
                passive: !1,
              }
            ),
            a(Jt, "touchend", Qn(e), {
              passive: !1,
            }),
            a(Jt, "touchcancel", Qn(e), {
              passive: !1,
            }),
            a(
              Jt,
              "touchmove",
              ((e) => (t) => {
                t.preventDefault(), t.stopImmediatePropagation();
                const n = Object.values(t.changedTouches);
                let r = Array.from(e.getState().uiState.touches.values()).sort(
                  (e, t) => e.identifier - t.identifier
                );
                r.length >= 2
                  ? ((e) => (t) => {
                      const n = Object.values(t.changedTouches);
                      let r = Array.from(
                          e.getState().uiState.touches.values()
                        ).sort((e, t) => e.identifier - t.identifier),
                        a = r.slice(0, 2),
                        o = be(a[0].location, a[1].location),
                        i = me();
                      !(function (e, t, n) {
                        (e[0] = t[0] + n[0]),
                          (e[1] = t[1] + n[1]),
                          (e[2] = t[2] + n[2]);
                      })(i, a[0].location, a[1].location),
                        ve(i, i, 0.5);
                      let l = 0,
                        u = null;
                      n.forEach((e) => {
                        a.forEach((t) => {
                          e.identifier === t.identifier &&
                            ((u = e.target),
                            (l =
                              l +
                              (2 * be(he(e.clientX, e.clientY, 0), i)) / o -
                              1));
                        });
                      });
                      let s = 1 + l;
                      if (s > 0 && null !== u) {
                        const t = De(e.getState().camera);
                        Bn(e, Jt, i, t * s);
                      }
                    })(e)(t)
                  : n &&
                    ((e) => (t) => {
                      const n = Object.values(t.changedTouches);
                      let r = Array.from(
                        e.getState().uiState.touches.values()
                      ).sort((e, t) => e.identifier - t.identifier);
                      if (1 === r.length) {
                        const t = n[0];
                        $n(e, t);
                      }
                    })(e)(t),
                  n.forEach((t) => {
                    e.dispatch(fn(t.identifier, t.clientX, t.clientY));
                  });
              })(e),
              {
                passive: !1,
              }
            );
        })(ua, sa),
        ua.subscribe(() => Wn(ua));
      var fa = new DocumentFragment();
      Yr.forEach((e) => {
        const t = e[2];
        var n = document.createElement("link");
        (n.rel = "prefetch"), (n.as = "image"), (n.href = t), fa.appendChild(n);
      }),
        null === (la = document.getElementById("preloadContainer")) ||
          void 0 === la ||
          la.append(fa);
      const pa = document.getElementById("tooltip"),
        da = document.getElementById("leftPanel");
      document.getElementById("rightPanel"),
        Gn.createElement,
        Kn.render(
          ((e) =>
            Kr(
              er,
              {
                store: e,
              },
              Kr(aa)
            ))(ua),
          da
        ),
        Kn.render(
          ((e) =>
            oa(
              er,
              {
                store: e,
              },
              oa(ia)
            ))(ua),
          pa
        );
    })();
})();
