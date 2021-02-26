parcelRequire = function (e, r, t, n) {
  var i, o = "function" == typeof parcelRequire && parcelRequire,
    u = "function" == typeof require && require;

  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw c.code = "MODULE_NOT_FOUND", c
      }
      p.resolve = function (r) {
        return e[t][1][r] || r
      }, p.cache = {};
      var l = r[t] = new f.Module(t);
      e[t][0].call(l.exports, p, l, l.exports, this)
    }
    return r[t].exports;

    function p(e) {
      return f(p.resolve(e))
    }
  }
  f.isParcelRequire = !0, f.Module = function (e) {
    this.id = e, this.bundle = f, this.exports = {}
  }, f.modules = e, f.cache = r, f.parent = o, f.register = function (r, t) {
    e[r] = [function (e, r) {
      r.exports = t
    }, {}]
  };
  for (var c = 0; c < t.length; c++) try {
    f(t[c])
  } catch (e) {
    i || (i = e)
  }
  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == typeof exports && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function () {
      return l
    }) : n && (this[n] = l)
  }
  if (parcelRequire = f, i) throw i;
  return f
}({
  "gJM5": [function (require, module, exports) {
    "use strict";

    function e(e, n, t, r, o, i, c) {
      try {
        var s = e[i](c),
          u = s.value
      } catch (a) {
        return void t(a)
      }
      s.done ? n(u) : Promise.resolve(u).then(r, o)
    }

    function n(n) {
      return function () {
        var t = this,
          r = arguments;
        return new Promise(function (o, i) {
          var c = n.apply(t, r);

          function s(n) {
            e(c, o, i, s, u, "next", n)
          }

          function u(n) {
            e(c, o, i, s, u, "throw", n)
          }
          s(void 0)
        })
      }
    }

    function t(e) {
      var t, r = e.textContent;
      e.textContent = "", e.style.display = "inline";
      for (var o = 1; o <= r.length;) n(regeneratorRuntime.mark(function n() {
        return regeneratorRuntime.wrap(function (n) {
          for (;;) switch (n.prev = n.next) {
            case 0:
              t = r.slice(0, o), console.log(o, t), setTimeout(function () {
                e.textContent = t
              }, 2e3), o += 1;
            case 4:
            case "end":
              return n.stop()
          }
        }, n)
      }))();
      console.log("init   ", r), console.log("curr   ", t)
    }

    function r(e) {
      console.log("changeSrting")
    }

    function o() {
      for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
      n.forEach(function (e) {
        e.bind(this)()
      }, this)
    }

    function i(e) {
      for (; e.firstChild;) e.firstChild.remove()
    }
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.extendString = t, exports.changeString = r, exports.repeatActions = o, exports.clearInnerHtml = i;
  }, {}],
  "TM6v": [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.ChangingString = void 0;
    var n = require("../../functions");

    function t(n, t) {
      if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(n, t) {
      for (var i = 0; i < t.length; i++) {
        var e = t[i];
        e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(n, e.key, e)
      }
    }

    function e(n, t, e) {
      return t && i(n.prototype, t), e && i(n, e), n
    }
    var r = function () {
      function i(n) {
        var e = n.stringsWrapperElem,
          r = n.blinkingChar,
          a = n.blinkingInterval;
        t(this, i), this.stringsWrapperElem = e, this.blinkingChar = r, this.blinkingInterval = a, this.stringsArray = Array.from(e.children).map(function (n) {
          return n.textContent
        })
      }
      return e(i, [{
        key: "start",
        value: function () {
          this.createChangingStringElems(), this.loopBlinking(), this.loopChanging()
        }
      }, {
        key: "createChangingStringElems",
        value: function () {
          (0, n.clearInnerHtml)(this.stringsWrapperElem);
          var t = document.createElement("span");
          t.classList.add("changing-string"), this.changingStringElem = document.createElement("span"), this.changingStringElem.classList.add("changing-string__string"), t.append(this.changingStringElem), this.blinkingChar && (this.blinkingCharElem = document.createElement("span"), this.blinkingCharElem.classList.add("changing-string__blinking-char"), this.blinkingCharElem.textContent = this.blinkingChar, t.append(this.blinkingCharElem)), this.stringsWrapperElem.append(t)
        }
      }, {
        key: "loopBlinking",
        value: function () {
          this.blinkingChar && setInterval(function () {
            this.blinkingCharElem.classList.toggle("changing-string__blinking-char_transparent")
          }.bind(this), this.blinkingInterval)
        }
      }, {
        key: "loopChanging",
        value: function () {
          var n = this,
            t = 0,
            i = function () {
              var i = n.stringsArray[t],
                r = 1;
              ! function t() {
                var a = i.slice(0, r);
                n.changingStringElem.textContent = a, r > i.length ? setTimeout(e, 3e3, i) : (r++, setTimeout(t, 170))
              }()
            },
            e = function (t) {
              var i = t.length - 1;
              ! function e() {
                var a = t.slice(0, i);
                n.changingStringElem.textContent = a, i <= 0 ? r() : (i--, setTimeout(e, 35))
              }()
            },
            r = function () {
              t === n.stringsArray.length - 1 ? t = 0 : ++t, setTimeout(i, 100)
            };
          i()
        }
      }]), i
    }();
    exports.ChangingString = r;
  }, {
    "../../functions": "gJM5"
  }],
  "xKLi": [function (require, module, exports) {
    "use strict";
    var n = require("../../assets/js/functions.js"),
      r = require("../../assets/js/plagins/myPlagins/changingString.js");
    Array.from(document.querySelectorAll(".js-intro__changing-string-wrapper")).map(function (n) {
      return new r.ChangingString({
        stringsWrapperElem: n,
        blinkingChar: "|",
        blinkingInterval: 320
      })
    }).forEach(function (n) {
      return n.start()
    });
  }, {
    "../../assets/js/functions.js": "gJM5",
    "../../assets/js/plagins/myPlagins/changingString.js": "TM6v"
  }],
  "Focm": [function (require, module, exports) {
    "use strict";
    require("../../modules/intro/intro.js");
  }, {
    "../../modules/intro/intro.js": "xKLi"
  }]
}, {}, ["Focm"], null)
//# sourceMappingURL=landing-page.042bd362.js.map