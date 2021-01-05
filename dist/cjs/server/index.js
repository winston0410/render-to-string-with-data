var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __commonJS = (callback, module2) => () => {
  if (!module2) {
    module2 = {exports: {}};
    callback(module2.exports, module2);
  }
  return module2.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};
var __exportStar = (target, module2, desc) => {
  __markAsModule(target);
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, {get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable});
  }
  return target;
};
var __toModule = (module2) => {
  if (module2 && module2.__esModule)
    return module2;
  return __exportStar(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", {value: module2, enumerable: true}), module2);
};

// ../../node_modules/use-ssr/dist/useSSR.js
var require_useSSR = __commonJS((exports2) => {
  "use strict";
  var __assign = exports2 && exports2.__assign || function() {
    __assign = Object.assign || function(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
      }
      return t;
    };
    return __assign.apply(this, arguments);
  };
  Object.defineProperty(exports2, "__esModule", {value: true});
  var Device;
  (function(Device2) {
    Device2["Browser"] = "browser";
    Device2["Server"] = "server";
    Device2["Native"] = "native";
  })(Device = exports2.Device || (exports2.Device = {}));
  var Browser = Device.Browser;
  var Server = Device.Server;
  var Native = Device.Native;
  var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
  var canUseNative = typeof navigator != "undefined" && navigator.product == "ReactNative";
  var device = canUseNative ? Native : canUseDOM ? Browser : Server;
  var SSRObject = {
    isBrowser: device === Browser,
    isServer: device === Server,
    isNative: device === Native,
    device,
    canUseWorkers: typeof Worker !== "undefined",
    canUseEventListeners: device === Browser && !!window.addEventListener,
    canUseViewport: device === Browser && !!window.screen
  };
  var assign = function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    return args.reduce(function(acc, obj) {
      return __assign(__assign({}, acc), obj);
    }, {});
  };
  var values = function(obj) {
    return Object.keys(obj).map(function(key) {
      return obj[key];
    });
  };
  var toArrayObject = function() {
    return assign((values(SSRObject), SSRObject));
  };
  var useSSRObject = toArrayObject();
  exports2.weAreServer = function() {
    SSRObject.isServer = true;
    useSSRObject = toArrayObject();
  };
  exports2.useSSR = function() {
    return useSSRObject;
  };
  exports2.default = exports2.useSSR;
});

// ../../node_modules/ramda/src/F.js
var require_F = __commonJS((exports2, module2) => {
  var F = function() {
    return false;
  };
  module2.exports = F;
});

// ../../node_modules/ramda/src/T.js
var require_T = __commonJS((exports2, module2) => {
  var T = function() {
    return true;
  };
  module2.exports = T;
});

// ../../node_modules/ramda/src/__.js
var require__ = __commonJS((exports2, module2) => {
  module2.exports = {
    "@@functional/placeholder": true
  };
});

// ../../node_modules/ramda/src/internal/_isPlaceholder.js
var require_isPlaceholder = __commonJS((exports2, module2) => {
  function _isPlaceholder(a) {
    return a != null && typeof a === "object" && a["@@functional/placeholder"] === true;
  }
  module2.exports = _isPlaceholder;
});

// ../../node_modules/ramda/src/internal/_curry1.js
var require_curry1 = __commonJS((exports2, module2) => {
  var _isPlaceholder = require_isPlaceholder();
  function _curry1(fn) {
    return function f1(a) {
      if (arguments.length === 0 || _isPlaceholder(a)) {
        return f1;
      } else {
        return fn.apply(this, arguments);
      }
    };
  }
  module2.exports = _curry1;
});

// ../../node_modules/ramda/src/internal/_curry2.js
var require_curry2 = __commonJS((exports2, module2) => {
  var _curry1 = require_curry1();
  var _isPlaceholder = require_isPlaceholder();
  function _curry2(fn) {
    return function f2(a, b) {
      switch (arguments.length) {
        case 0:
          return f2;
        case 1:
          return _isPlaceholder(a) ? f2 : _curry1(function(_b) {
            return fn(a, _b);
          });
        default:
          return _isPlaceholder(a) && _isPlaceholder(b) ? f2 : _isPlaceholder(a) ? _curry1(function(_a) {
            return fn(_a, b);
          }) : _isPlaceholder(b) ? _curry1(function(_b) {
            return fn(a, _b);
          }) : fn(a, b);
      }
    };
  }
  module2.exports = _curry2;
});

// ../../node_modules/ramda/src/add.js
var require_add = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var add = /* @__PURE__ */ _curry2(function add2(a, b) {
    return Number(a) + Number(b);
  });
  module2.exports = add;
});

// ../../node_modules/ramda/src/internal/_concat.js
var require_concat = __commonJS((exports2, module2) => {
  function _concat(set1, set2) {
    set1 = set1 || [];
    set2 = set2 || [];
    var idx;
    var len1 = set1.length;
    var len2 = set2.length;
    var result = [];
    idx = 0;
    while (idx < len1) {
      result[result.length] = set1[idx];
      idx += 1;
    }
    idx = 0;
    while (idx < len2) {
      result[result.length] = set2[idx];
      idx += 1;
    }
    return result;
  }
  module2.exports = _concat;
});

// ../../node_modules/ramda/src/internal/_arity.js
var require_arity = __commonJS((exports2, module2) => {
  function _arity(n, fn) {
    switch (n) {
      case 0:
        return function() {
          return fn.apply(this, arguments);
        };
      case 1:
        return function(a0) {
          return fn.apply(this, arguments);
        };
      case 2:
        return function(a0, a1) {
          return fn.apply(this, arguments);
        };
      case 3:
        return function(a0, a1, a2) {
          return fn.apply(this, arguments);
        };
      case 4:
        return function(a0, a1, a2, a3) {
          return fn.apply(this, arguments);
        };
      case 5:
        return function(a0, a1, a2, a3, a4) {
          return fn.apply(this, arguments);
        };
      case 6:
        return function(a0, a1, a2, a3, a4, a5) {
          return fn.apply(this, arguments);
        };
      case 7:
        return function(a0, a1, a2, a3, a4, a5, a6) {
          return fn.apply(this, arguments);
        };
      case 8:
        return function(a0, a1, a2, a3, a4, a5, a6, a7) {
          return fn.apply(this, arguments);
        };
      case 9:
        return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) {
          return fn.apply(this, arguments);
        };
      case 10:
        return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
          return fn.apply(this, arguments);
        };
      default:
        throw new Error("First argument to _arity must be a non-negative integer no greater than ten");
    }
  }
  module2.exports = _arity;
});

// ../../node_modules/ramda/src/internal/_curryN.js
var require_curryN = __commonJS((exports2, module2) => {
  var _arity = require_arity();
  var _isPlaceholder = require_isPlaceholder();
  function _curryN(length, received, fn) {
    return function() {
      var combined = [];
      var argsIdx = 0;
      var left = length;
      var combinedIdx = 0;
      while (combinedIdx < received.length || argsIdx < arguments.length) {
        var result;
        if (combinedIdx < received.length && (!_isPlaceholder(received[combinedIdx]) || argsIdx >= arguments.length)) {
          result = received[combinedIdx];
        } else {
          result = arguments[argsIdx];
          argsIdx += 1;
        }
        combined[combinedIdx] = result;
        if (!_isPlaceholder(result)) {
          left -= 1;
        }
        combinedIdx += 1;
      }
      return left <= 0 ? fn.apply(this, combined) : _arity(left, _curryN(length, combined, fn));
    };
  }
  module2.exports = _curryN;
});

// ../../node_modules/ramda/src/curryN.js
var require_curryN2 = __commonJS((exports2, module2) => {
  var _arity = require_arity();
  var _curry1 = require_curry1();
  var _curry2 = require_curry2();
  var _curryN = require_curryN();
  var curryN = /* @__PURE__ */ _curry2(function curryN2(length, fn) {
    if (length === 1) {
      return _curry1(fn);
    }
    return _arity(length, _curryN(length, [], fn));
  });
  module2.exports = curryN;
});

// ../../node_modules/ramda/src/addIndex.js
var require_addIndex = __commonJS((exports2, module2) => {
  var _concat = require_concat();
  var _curry1 = require_curry1();
  var curryN = require_curryN2();
  var addIndex = /* @__PURE__ */ _curry1(function addIndex2(fn) {
    return curryN(fn.length, function() {
      var idx = 0;
      var origFn = arguments[0];
      var list = arguments[arguments.length - 1];
      var args = Array.prototype.slice.call(arguments, 0);
      args[0] = function() {
        var result = origFn.apply(this, _concat(arguments, [idx, list]));
        idx += 1;
        return result;
      };
      return fn.apply(this, args);
    });
  });
  module2.exports = addIndex;
});

// ../../node_modules/ramda/src/internal/_curry3.js
var require_curry3 = __commonJS((exports2, module2) => {
  var _curry1 = require_curry1();
  var _curry2 = require_curry2();
  var _isPlaceholder = require_isPlaceholder();
  function _curry3(fn) {
    return function f3(a, b, c) {
      switch (arguments.length) {
        case 0:
          return f3;
        case 1:
          return _isPlaceholder(a) ? f3 : _curry2(function(_b, _c) {
            return fn(a, _b, _c);
          });
        case 2:
          return _isPlaceholder(a) && _isPlaceholder(b) ? f3 : _isPlaceholder(a) ? _curry2(function(_a, _c) {
            return fn(_a, b, _c);
          }) : _isPlaceholder(b) ? _curry2(function(_b, _c) {
            return fn(a, _b, _c);
          }) : _curry1(function(_c) {
            return fn(a, b, _c);
          });
        default:
          return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c) ? f3 : _isPlaceholder(a) && _isPlaceholder(b) ? _curry2(function(_a, _b) {
            return fn(_a, _b, c);
          }) : _isPlaceholder(a) && _isPlaceholder(c) ? _curry2(function(_a, _c) {
            return fn(_a, b, _c);
          }) : _isPlaceholder(b) && _isPlaceholder(c) ? _curry2(function(_b, _c) {
            return fn(a, _b, _c);
          }) : _isPlaceholder(a) ? _curry1(function(_a) {
            return fn(_a, b, c);
          }) : _isPlaceholder(b) ? _curry1(function(_b) {
            return fn(a, _b, c);
          }) : _isPlaceholder(c) ? _curry1(function(_c) {
            return fn(a, b, _c);
          }) : fn(a, b, c);
      }
    };
  }
  module2.exports = _curry3;
});

// ../../node_modules/ramda/src/adjust.js
var require_adjust = __commonJS((exports2, module2) => {
  var _concat = require_concat();
  var _curry3 = require_curry3();
  var adjust = /* @__PURE__ */ _curry3(function adjust2(idx, fn, list) {
    if (idx >= list.length || idx < -list.length) {
      return list;
    }
    var start = idx < 0 ? list.length : 0;
    var _idx = start + idx;
    var _list = _concat(list);
    _list[_idx] = fn(list[_idx]);
    return _list;
  });
  module2.exports = adjust;
});

// ../../node_modules/ramda/src/internal/_isArray.js
var require_isArray = __commonJS((exports2, module2) => {
  module2.exports = Array.isArray || function _isArray(val) {
    return val != null && val.length >= 0 && Object.prototype.toString.call(val) === "[object Array]";
  };
});

// ../../node_modules/ramda/src/internal/_isTransformer.js
var require_isTransformer = __commonJS((exports2, module2) => {
  function _isTransformer(obj) {
    return obj != null && typeof obj["@@transducer/step"] === "function";
  }
  module2.exports = _isTransformer;
});

// ../../node_modules/ramda/src/internal/_dispatchable.js
var require_dispatchable = __commonJS((exports2, module2) => {
  var _isArray = require_isArray();
  var _isTransformer = require_isTransformer();
  function _dispatchable(methodNames, xf, fn) {
    return function() {
      if (arguments.length === 0) {
        return fn();
      }
      var args = Array.prototype.slice.call(arguments, 0);
      var obj = args.pop();
      if (!_isArray(obj)) {
        var idx = 0;
        while (idx < methodNames.length) {
          if (typeof obj[methodNames[idx]] === "function") {
            return obj[methodNames[idx]].apply(obj, args);
          }
          idx += 1;
        }
        if (_isTransformer(obj)) {
          var transducer = xf.apply(null, args);
          return transducer(obj);
        }
      }
      return fn.apply(this, arguments);
    };
  }
  module2.exports = _dispatchable;
});

// ../../node_modules/ramda/src/internal/_reduced.js
var require_reduced = __commonJS((exports2, module2) => {
  function _reduced(x) {
    return x && x["@@transducer/reduced"] ? x : {
      "@@transducer/value": x,
      "@@transducer/reduced": true
    };
  }
  module2.exports = _reduced;
});

// ../../node_modules/ramda/src/internal/_xfBase.js
var require_xfBase = __commonJS((exports2, module2) => {
  module2.exports = {
    init: function() {
      return this.xf["@@transducer/init"]();
    },
    result: function(result) {
      return this.xf["@@transducer/result"](result);
    }
  };
});

// ../../node_modules/ramda/src/internal/_xall.js
var require_xall = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var _reduced = require_reduced();
  var _xfBase = require_xfBase();
  var XAll = /* @__PURE__ */ function() {
    function XAll2(f, xf) {
      this.xf = xf;
      this.f = f;
      this.all = true;
    }
    XAll2.prototype["@@transducer/init"] = _xfBase.init;
    XAll2.prototype["@@transducer/result"] = function(result) {
      if (this.all) {
        result = this.xf["@@transducer/step"](result, true);
      }
      return this.xf["@@transducer/result"](result);
    };
    XAll2.prototype["@@transducer/step"] = function(result, input) {
      if (!this.f(input)) {
        this.all = false;
        result = _reduced(this.xf["@@transducer/step"](result, false));
      }
      return result;
    };
    return XAll2;
  }();
  var _xall = /* @__PURE__ */ _curry2(function _xall2(f, xf) {
    return new XAll(f, xf);
  });
  module2.exports = _xall;
});

// ../../node_modules/ramda/src/all.js
var require_all = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var _dispatchable = require_dispatchable();
  var _xall = require_xall();
  var all = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable(["all"], _xall, function all2(fn, list) {
    var idx = 0;
    while (idx < list.length) {
      if (!fn(list[idx])) {
        return false;
      }
      idx += 1;
    }
    return true;
  }));
  module2.exports = all;
});

// ../../node_modules/ramda/src/max.js
var require_max = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var max = /* @__PURE__ */ _curry2(function max2(a, b) {
    return b > a ? b : a;
  });
  module2.exports = max;
});

// ../../node_modules/ramda/src/internal/_map.js
var require_map = __commonJS((exports2, module2) => {
  function _map(fn, functor) {
    var idx = 0;
    var len = functor.length;
    var result = Array(len);
    while (idx < len) {
      result[idx] = fn(functor[idx]);
      idx += 1;
    }
    return result;
  }
  module2.exports = _map;
});

// ../../node_modules/ramda/src/internal/_isString.js
var require_isString = __commonJS((exports2, module2) => {
  function _isString(x) {
    return Object.prototype.toString.call(x) === "[object String]";
  }
  module2.exports = _isString;
});

// ../../node_modules/ramda/src/internal/_isArrayLike.js
var require_isArrayLike = __commonJS((exports2, module2) => {
  var _curry1 = require_curry1();
  var _isArray = require_isArray();
  var _isString = require_isString();
  var _isArrayLike = /* @__PURE__ */ _curry1(function isArrayLike(x) {
    if (_isArray(x)) {
      return true;
    }
    if (!x) {
      return false;
    }
    if (typeof x !== "object") {
      return false;
    }
    if (_isString(x)) {
      return false;
    }
    if (x.nodeType === 1) {
      return !!x.length;
    }
    if (x.length === 0) {
      return true;
    }
    if (x.length > 0) {
      return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
    }
    return false;
  });
  module2.exports = _isArrayLike;
});

// ../../node_modules/ramda/src/internal/_xwrap.js
var require_xwrap = __commonJS((exports2, module2) => {
  var XWrap = /* @__PURE__ */ function() {
    function XWrap2(fn) {
      this.f = fn;
    }
    XWrap2.prototype["@@transducer/init"] = function() {
      throw new Error("init not implemented on XWrap");
    };
    XWrap2.prototype["@@transducer/result"] = function(acc) {
      return acc;
    };
    XWrap2.prototype["@@transducer/step"] = function(acc, x) {
      return this.f(acc, x);
    };
    return XWrap2;
  }();
  function _xwrap(fn) {
    return new XWrap(fn);
  }
  module2.exports = _xwrap;
});

// ../../node_modules/ramda/src/bind.js
var require_bind = __commonJS((exports2, module2) => {
  var _arity = require_arity();
  var _curry2 = require_curry2();
  var bind = /* @__PURE__ */ _curry2(function bind2(fn, thisObj) {
    return _arity(fn.length, function() {
      return fn.apply(thisObj, arguments);
    });
  });
  module2.exports = bind;
});

// ../../node_modules/ramda/src/internal/_reduce.js
var require_reduce = __commonJS((exports2, module2) => {
  var _isArrayLike = require_isArrayLike();
  var _xwrap = require_xwrap();
  var bind = require_bind();
  function _arrayReduce(xf, acc, list) {
    var idx = 0;
    var len = list.length;
    while (idx < len) {
      acc = xf["@@transducer/step"](acc, list[idx]);
      if (acc && acc["@@transducer/reduced"]) {
        acc = acc["@@transducer/value"];
        break;
      }
      idx += 1;
    }
    return xf["@@transducer/result"](acc);
  }
  function _iterableReduce(xf, acc, iter) {
    var step = iter.next();
    while (!step.done) {
      acc = xf["@@transducer/step"](acc, step.value);
      if (acc && acc["@@transducer/reduced"]) {
        acc = acc["@@transducer/value"];
        break;
      }
      step = iter.next();
    }
    return xf["@@transducer/result"](acc);
  }
  function _methodReduce(xf, acc, obj, methodName) {
    return xf["@@transducer/result"](obj[methodName](bind(xf["@@transducer/step"], xf), acc));
  }
  var symIterator = typeof Symbol !== "undefined" ? Symbol.iterator : "@@iterator";
  function _reduce(fn, acc, list) {
    if (typeof fn === "function") {
      fn = _xwrap(fn);
    }
    if (_isArrayLike(list)) {
      return _arrayReduce(fn, acc, list);
    }
    if (typeof list["fantasy-land/reduce"] === "function") {
      return _methodReduce(fn, acc, list, "fantasy-land/reduce");
    }
    if (list[symIterator] != null) {
      return _iterableReduce(fn, acc, list[symIterator]());
    }
    if (typeof list.next === "function") {
      return _iterableReduce(fn, acc, list);
    }
    if (typeof list.reduce === "function") {
      return _methodReduce(fn, acc, list, "reduce");
    }
    throw new TypeError("reduce: list must be array or iterable");
  }
  module2.exports = _reduce;
});

// ../../node_modules/ramda/src/internal/_xmap.js
var require_xmap = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var _xfBase = require_xfBase();
  var XMap = /* @__PURE__ */ function() {
    function XMap2(f, xf) {
      this.xf = xf;
      this.f = f;
    }
    XMap2.prototype["@@transducer/init"] = _xfBase.init;
    XMap2.prototype["@@transducer/result"] = _xfBase.result;
    XMap2.prototype["@@transducer/step"] = function(result, input) {
      return this.xf["@@transducer/step"](result, this.f(input));
    };
    return XMap2;
  }();
  var _xmap = /* @__PURE__ */ _curry2(function _xmap2(f, xf) {
    return new XMap(f, xf);
  });
  module2.exports = _xmap;
});

// ../../node_modules/ramda/src/internal/_has.js
var require_has = __commonJS((exports2, module2) => {
  function _has(prop, obj) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }
  module2.exports = _has;
});

// ../../node_modules/ramda/src/internal/_isArguments.js
var require_isArguments = __commonJS((exports2, module2) => {
  var _has = require_has();
  var toString = Object.prototype.toString;
  var _isArguments = /* @__PURE__ */ function() {
    return toString.call(arguments) === "[object Arguments]" ? function _isArguments2(x) {
      return toString.call(x) === "[object Arguments]";
    } : function _isArguments2(x) {
      return _has("callee", x);
    };
  }();
  module2.exports = _isArguments;
});

// ../../node_modules/ramda/src/keys.js
var require_keys = __commonJS((exports2, module2) => {
  var _curry1 = require_curry1();
  var _has = require_has();
  var _isArguments = require_isArguments();
  var hasEnumBug = !/* @__PURE__ */ {
    toString: null
  }.propertyIsEnumerable("toString");
  var nonEnumerableProps = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
  var hasArgsEnumBug = /* @__PURE__ */ function() {
    "use strict";
    return arguments.propertyIsEnumerable("length");
  }();
  var contains = function contains2(list, item) {
    var idx = 0;
    while (idx < list.length) {
      if (list[idx] === item) {
        return true;
      }
      idx += 1;
    }
    return false;
  };
  var keys = typeof Object.keys === "function" && !hasArgsEnumBug ? /* @__PURE__ */ _curry1(function keys2(obj) {
    return Object(obj) !== obj ? [] : Object.keys(obj);
  }) : /* @__PURE__ */ _curry1(function keys2(obj) {
    if (Object(obj) !== obj) {
      return [];
    }
    var prop, nIdx;
    var ks = [];
    var checkArgsLength = hasArgsEnumBug && _isArguments(obj);
    for (prop in obj) {
      if (_has(prop, obj) && (!checkArgsLength || prop !== "length")) {
        ks[ks.length] = prop;
      }
    }
    if (hasEnumBug) {
      nIdx = nonEnumerableProps.length - 1;
      while (nIdx >= 0) {
        prop = nonEnumerableProps[nIdx];
        if (_has(prop, obj) && !contains(ks, prop)) {
          ks[ks.length] = prop;
        }
        nIdx -= 1;
      }
    }
    return ks;
  });
  module2.exports = keys;
});

// ../../node_modules/ramda/src/map.js
var require_map2 = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var _dispatchable = require_dispatchable();
  var _map = require_map();
  var _reduce = require_reduce();
  var _xmap = require_xmap();
  var curryN = require_curryN2();
  var keys = require_keys();
  var map = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable(["fantasy-land/map", "map"], _xmap, function map2(fn, functor) {
    switch (Object.prototype.toString.call(functor)) {
      case "[object Function]":
        return curryN(functor.length, function() {
          return fn.call(this, functor.apply(this, arguments));
        });
      case "[object Object]":
        return _reduce(function(acc, key) {
          acc[key] = fn(functor[key]);
          return acc;
        }, {}, keys(functor));
      default:
        return _map(fn, functor);
    }
  }));
  module2.exports = map;
});

// ../../node_modules/ramda/src/internal/_isInteger.js
var require_isInteger = __commonJS((exports2, module2) => {
  module2.exports = Number.isInteger || function _isInteger(n) {
    return n << 0 === n;
  };
});

// ../../node_modules/ramda/src/nth.js
var require_nth = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var _isString = require_isString();
  var nth = /* @__PURE__ */ _curry2(function nth2(offset, list) {
    var idx = offset < 0 ? list.length + offset : offset;
    return _isString(list) ? list.charAt(idx) : list[idx];
  });
  module2.exports = nth;
});

// ../../node_modules/ramda/src/paths.js
var require_paths = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var _isInteger = require_isInteger();
  var nth = require_nth();
  var paths = /* @__PURE__ */ _curry2(function paths2(pathsArray, obj) {
    return pathsArray.map(function(paths3) {
      var val = obj;
      var idx = 0;
      var p;
      while (idx < paths3.length) {
        if (val == null) {
          return;
        }
        p = paths3[idx];
        val = _isInteger(p) ? nth(p, val) : val[p];
        idx += 1;
      }
      return val;
    });
  });
  module2.exports = paths;
});

// ../../node_modules/ramda/src/path.js
var require_path = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var paths = require_paths();
  var path = /* @__PURE__ */ _curry2(function path2(pathAr, obj) {
    return paths([pathAr], obj)[0];
  });
  module2.exports = path;
});

// ../../node_modules/ramda/src/prop.js
var require_prop = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var path = require_path();
  var prop = /* @__PURE__ */ _curry2(function prop2(p, obj) {
    return path([p], obj);
  });
  module2.exports = prop;
});

// ../../node_modules/ramda/src/pluck.js
var require_pluck = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var map = require_map2();
  var prop = require_prop();
  var pluck = /* @__PURE__ */ _curry2(function pluck2(p, list) {
    return map(prop(p), list);
  });
  module2.exports = pluck;
});

// ../../node_modules/ramda/src/reduce.js
var require_reduce2 = __commonJS((exports2, module2) => {
  var _curry3 = require_curry3();
  var _reduce = require_reduce();
  var reduce = /* @__PURE__ */ _curry3(_reduce);
  module2.exports = reduce;
});

// ../../node_modules/ramda/src/allPass.js
var require_allPass = __commonJS((exports2, module2) => {
  var _curry1 = require_curry1();
  var curryN = require_curryN2();
  var max = require_max();
  var pluck = require_pluck();
  var reduce = require_reduce2();
  var allPass = /* @__PURE__ */ _curry1(function allPass2(preds) {
    return curryN(reduce(max, 0, pluck("length", preds)), function() {
      var idx = 0;
      var len = preds.length;
      while (idx < len) {
        if (!preds[idx].apply(this, arguments)) {
          return false;
        }
        idx += 1;
      }
      return true;
    });
  });
  module2.exports = allPass;
});

// ../../node_modules/ramda/src/always.js
var require_always = __commonJS((exports2, module2) => {
  var _curry1 = require_curry1();
  var always = /* @__PURE__ */ _curry1(function always2(val) {
    return function() {
      return val;
    };
  });
  module2.exports = always;
});

// ../../node_modules/ramda/src/and.js
var require_and = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var and = /* @__PURE__ */ _curry2(function and2(a, b) {
    return a && b;
  });
  module2.exports = and;
});

// ../../node_modules/ramda/src/internal/_xany.js
var require_xany = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var _reduced = require_reduced();
  var _xfBase = require_xfBase();
  var XAny = /* @__PURE__ */ function() {
    function XAny2(f, xf) {
      this.xf = xf;
      this.f = f;
      this.any = false;
    }
    XAny2.prototype["@@transducer/init"] = _xfBase.init;
    XAny2.prototype["@@transducer/result"] = function(result) {
      if (!this.any) {
        result = this.xf["@@transducer/step"](result, false);
      }
      return this.xf["@@transducer/result"](result);
    };
    XAny2.prototype["@@transducer/step"] = function(result, input) {
      if (this.f(input)) {
        this.any = true;
        result = _reduced(this.xf["@@transducer/step"](result, true));
      }
      return result;
    };
    return XAny2;
  }();
  var _xany = /* @__PURE__ */ _curry2(function _xany2(f, xf) {
    return new XAny(f, xf);
  });
  module2.exports = _xany;
});

// ../../node_modules/ramda/src/any.js
var require_any = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var _dispatchable = require_dispatchable();
  var _xany = require_xany();
  var any = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable(["any"], _xany, function any2(fn, list) {
    var idx = 0;
    while (idx < list.length) {
      if (fn(list[idx])) {
        return true;
      }
      idx += 1;
    }
    return false;
  }));
  module2.exports = any;
});

// ../../node_modules/ramda/src/anyPass.js
var require_anyPass = __commonJS((exports2, module2) => {
  var _curry1 = require_curry1();
  var curryN = require_curryN2();
  var max = require_max();
  var pluck = require_pluck();
  var reduce = require_reduce2();
  var anyPass = /* @__PURE__ */ _curry1(function anyPass2(preds) {
    return curryN(reduce(max, 0, pluck("length", preds)), function() {
      var idx = 0;
      var len = preds.length;
      while (idx < len) {
        if (preds[idx].apply(this, arguments)) {
          return true;
        }
        idx += 1;
      }
      return false;
    });
  });
  module2.exports = anyPass;
});

// ../../node_modules/ramda/src/ap.js
var require_ap = __commonJS((exports2, module2) => {
  var _concat = require_concat();
  var _curry2 = require_curry2();
  var _reduce = require_reduce();
  var map = require_map2();
  var ap = /* @__PURE__ */ _curry2(function ap2(applyF, applyX) {
    return typeof applyX["fantasy-land/ap"] === "function" ? applyX["fantasy-land/ap"](applyF) : typeof applyF.ap === "function" ? applyF.ap(applyX) : typeof applyF === "function" ? function(x) {
      return applyF(x)(applyX(x));
    } : _reduce(function(acc, f) {
      return _concat(acc, map(f, applyX));
    }, [], applyF);
  });
  module2.exports = ap;
});

// ../../node_modules/ramda/src/internal/_aperture.js
var require_aperture = __commonJS((exports2, module2) => {
  function _aperture(n, list) {
    var idx = 0;
    var limit = list.length - (n - 1);
    var acc = new Array(limit >= 0 ? limit : 0);
    while (idx < limit) {
      acc[idx] = Array.prototype.slice.call(list, idx, idx + n);
      idx += 1;
    }
    return acc;
  }
  module2.exports = _aperture;
});

// ../../node_modules/ramda/src/internal/_xaperture.js
var require_xaperture = __commonJS((exports2, module2) => {
  var _concat = require_concat();
  var _curry2 = require_curry2();
  var _xfBase = require_xfBase();
  var XAperture = /* @__PURE__ */ function() {
    function XAperture2(n, xf) {
      this.xf = xf;
      this.pos = 0;
      this.full = false;
      this.acc = new Array(n);
    }
    XAperture2.prototype["@@transducer/init"] = _xfBase.init;
    XAperture2.prototype["@@transducer/result"] = function(result) {
      this.acc = null;
      return this.xf["@@transducer/result"](result);
    };
    XAperture2.prototype["@@transducer/step"] = function(result, input) {
      this.store(input);
      return this.full ? this.xf["@@transducer/step"](result, this.getCopy()) : result;
    };
    XAperture2.prototype.store = function(input) {
      this.acc[this.pos] = input;
      this.pos += 1;
      if (this.pos === this.acc.length) {
        this.pos = 0;
        this.full = true;
      }
    };
    XAperture2.prototype.getCopy = function() {
      return _concat(Array.prototype.slice.call(this.acc, this.pos), Array.prototype.slice.call(this.acc, 0, this.pos));
    };
    return XAperture2;
  }();
  var _xaperture = /* @__PURE__ */ _curry2(function _xaperture2(n, xf) {
    return new XAperture(n, xf);
  });
  module2.exports = _xaperture;
});

// ../../node_modules/ramda/src/aperture.js
var require_aperture2 = __commonJS((exports2, module2) => {
  var _aperture = require_aperture();
  var _curry2 = require_curry2();
  var _dispatchable = require_dispatchable();
  var _xaperture = require_xaperture();
  var aperture = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable([], _xaperture, _aperture));
  module2.exports = aperture;
});

// ../../node_modules/ramda/src/append.js
var require_append = __commonJS((exports2, module2) => {
  var _concat = require_concat();
  var _curry2 = require_curry2();
  var append = /* @__PURE__ */ _curry2(function append2(el, list) {
    return _concat(list, [el]);
  });
  module2.exports = append;
});

// ../../node_modules/ramda/src/apply.js
var require_apply = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var apply = /* @__PURE__ */ _curry2(function apply2(fn, args) {
    return fn.apply(this, args);
  });
  module2.exports = apply;
});

// ../../node_modules/ramda/src/values.js
var require_values = __commonJS((exports2, module2) => {
  var _curry1 = require_curry1();
  var keys = require_keys();
  var values = /* @__PURE__ */ _curry1(function values2(obj) {
    var props = keys(obj);
    var len = props.length;
    var vals = [];
    var idx = 0;
    while (idx < len) {
      vals[idx] = obj[props[idx]];
      idx += 1;
    }
    return vals;
  });
  module2.exports = values;
});

// ../../node_modules/ramda/src/applySpec.js
var require_applySpec = __commonJS((exports2, module2) => {
  var _curry1 = require_curry1();
  var apply = require_apply();
  var curryN = require_curryN2();
  var max = require_max();
  var pluck = require_pluck();
  var reduce = require_reduce2();
  var keys = require_keys();
  var values = require_values();
  function mapValues(fn, obj) {
    return keys(obj).reduce(function(acc, key) {
      acc[key] = fn(obj[key]);
      return acc;
    }, {});
  }
  var applySpec = /* @__PURE__ */ _curry1(function applySpec2(spec) {
    spec = mapValues(function(v) {
      return typeof v == "function" ? v : applySpec2(v);
    }, spec);
    return curryN(reduce(max, 0, pluck("length", values(spec))), function() {
      var args = arguments;
      return mapValues(function(f) {
        return apply(f, args);
      }, spec);
    });
  });
  module2.exports = applySpec;
});

// ../../node_modules/ramda/src/applyTo.js
var require_applyTo = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var applyTo = /* @__PURE__ */ _curry2(function applyTo2(x, f) {
    return f(x);
  });
  module2.exports = applyTo;
});

// ../../node_modules/ramda/src/ascend.js
var require_ascend = __commonJS((exports2, module2) => {
  var _curry3 = require_curry3();
  var ascend = /* @__PURE__ */ _curry3(function ascend2(fn, a, b) {
    var aa = fn(a);
    var bb = fn(b);
    return aa < bb ? -1 : aa > bb ? 1 : 0;
  });
  module2.exports = ascend;
});

// ../../node_modules/ramda/src/assoc.js
var require_assoc = __commonJS((exports2, module2) => {
  var _curry3 = require_curry3();
  var assoc = /* @__PURE__ */ _curry3(function assoc2(prop, val, obj) {
    var result = {};
    for (var p in obj) {
      result[p] = obj[p];
    }
    result[prop] = val;
    return result;
  });
  module2.exports = assoc;
});

// ../../node_modules/ramda/src/isNil.js
var require_isNil = __commonJS((exports2, module2) => {
  var _curry1 = require_curry1();
  var isNil = /* @__PURE__ */ _curry1(function isNil2(x) {
    return x == null;
  });
  module2.exports = isNil;
});

// ../../node_modules/ramda/src/assocPath.js
var require_assocPath = __commonJS((exports2, module2) => {
  var _curry3 = require_curry3();
  var _has = require_has();
  var _isArray = require_isArray();
  var _isInteger = require_isInteger();
  var assoc = require_assoc();
  var isNil = require_isNil();
  var assocPath = /* @__PURE__ */ _curry3(function assocPath2(path, val, obj) {
    if (path.length === 0) {
      return val;
    }
    var idx = path[0];
    if (path.length > 1) {
      var nextObj = !isNil(obj) && _has(idx, obj) ? obj[idx] : _isInteger(path[1]) ? [] : {};
      val = assocPath2(Array.prototype.slice.call(path, 1), val, nextObj);
    }
    if (_isInteger(idx) && _isArray(obj)) {
      var arr = [].concat(obj);
      arr[idx] = val;
      return arr;
    } else {
      return assoc(idx, val, obj);
    }
  });
  module2.exports = assocPath;
});

// ../../node_modules/ramda/src/nAry.js
var require_nAry = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var nAry = /* @__PURE__ */ _curry2(function nAry2(n, fn) {
    switch (n) {
      case 0:
        return function() {
          return fn.call(this);
        };
      case 1:
        return function(a0) {
          return fn.call(this, a0);
        };
      case 2:
        return function(a0, a1) {
          return fn.call(this, a0, a1);
        };
      case 3:
        return function(a0, a1, a2) {
          return fn.call(this, a0, a1, a2);
        };
      case 4:
        return function(a0, a1, a2, a3) {
          return fn.call(this, a0, a1, a2, a3);
        };
      case 5:
        return function(a0, a1, a2, a3, a4) {
          return fn.call(this, a0, a1, a2, a3, a4);
        };
      case 6:
        return function(a0, a1, a2, a3, a4, a5) {
          return fn.call(this, a0, a1, a2, a3, a4, a5);
        };
      case 7:
        return function(a0, a1, a2, a3, a4, a5, a6) {
          return fn.call(this, a0, a1, a2, a3, a4, a5, a6);
        };
      case 8:
        return function(a0, a1, a2, a3, a4, a5, a6, a7) {
          return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7);
        };
      case 9:
        return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) {
          return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8);
        };
      case 10:
        return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
          return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);
        };
      default:
        throw new Error("First argument to nAry must be a non-negative integer no greater than ten");
    }
  });
  module2.exports = nAry;
});

// ../../node_modules/ramda/src/binary.js
var require_binary = __commonJS((exports2, module2) => {
  var _curry1 = require_curry1();
  var nAry = require_nAry();
  var binary = /* @__PURE__ */ _curry1(function binary2(fn) {
    return nAry(2, fn);
  });
  module2.exports = binary;
});

// ../../node_modules/ramda/src/internal/_isFunction.js
var require_isFunction = __commonJS((exports2, module2) => {
  function _isFunction(x) {
    var type = Object.prototype.toString.call(x);
    return type === "[object Function]" || type === "[object AsyncFunction]" || type === "[object GeneratorFunction]" || type === "[object AsyncGeneratorFunction]";
  }
  module2.exports = _isFunction;
});

// ../../node_modules/ramda/src/liftN.js
var require_liftN = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var _reduce = require_reduce();
  var ap = require_ap();
  var curryN = require_curryN2();
  var map = require_map2();
  var liftN = /* @__PURE__ */ _curry2(function liftN2(arity, fn) {
    var lifted = curryN(arity, fn);
    return curryN(arity, function() {
      return _reduce(ap, map(lifted, arguments[0]), Array.prototype.slice.call(arguments, 1));
    });
  });
  module2.exports = liftN;
});

// ../../node_modules/ramda/src/lift.js
var require_lift = __commonJS((exports2, module2) => {
  var _curry1 = require_curry1();
  var liftN = require_liftN();
  var lift = /* @__PURE__ */ _curry1(function lift2(fn) {
    return liftN(fn.length, fn);
  });
  module2.exports = lift;
});

// ../../node_modules/ramda/src/both.js
var require_both = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var _isFunction = require_isFunction();
  var and = require_and();
  var lift = require_lift();
  var both = /* @__PURE__ */ _curry2(function both2(f, g) {
    return _isFunction(f) ? function _both() {
      return f.apply(this, arguments) && g.apply(this, arguments);
    } : lift(and)(f, g);
  });
  module2.exports = both;
});

// ../../node_modules/ramda/src/curry.js
var require_curry = __commonJS((exports2, module2) => {
  var _curry1 = require_curry1();
  var curryN = require_curryN2();
  var curry = /* @__PURE__ */ _curry1(function curry2(fn) {
    return curryN(fn.length, fn);
  });
  module2.exports = curry;
});

// ../../node_modules/ramda/src/call.js
var require_call = __commonJS((exports2, module2) => {
  var curry = require_curry();
  var call = /* @__PURE__ */ curry(function call2(fn) {
    return fn.apply(this, Array.prototype.slice.call(arguments, 1));
  });
  module2.exports = call;
});

// ../../node_modules/ramda/src/internal/_makeFlat.js
var require_makeFlat = __commonJS((exports2, module2) => {
  var _isArrayLike = require_isArrayLike();
  function _makeFlat(recursive) {
    return function flatt(list) {
      var value, jlen, j;
      var result = [];
      var idx = 0;
      var ilen = list.length;
      while (idx < ilen) {
        if (_isArrayLike(list[idx])) {
          value = recursive ? flatt(list[idx]) : list[idx];
          j = 0;
          jlen = value.length;
          while (j < jlen) {
            result[result.length] = value[j];
            j += 1;
          }
        } else {
          result[result.length] = list[idx];
        }
        idx += 1;
      }
      return result;
    };
  }
  module2.exports = _makeFlat;
});

// ../../node_modules/ramda/src/internal/_forceReduced.js
var require_forceReduced = __commonJS((exports2, module2) => {
  function _forceReduced(x) {
    return {
      "@@transducer/value": x,
      "@@transducer/reduced": true
    };
  }
  module2.exports = _forceReduced;
});

// ../../node_modules/ramda/src/internal/_flatCat.js
var require_flatCat = __commonJS((exports2, module2) => {
  var _forceReduced = require_forceReduced();
  var _isArrayLike = require_isArrayLike();
  var _reduce = require_reduce();
  var _xfBase = require_xfBase();
  var preservingReduced = function(xf) {
    return {
      "@@transducer/init": _xfBase.init,
      "@@transducer/result": function(result) {
        return xf["@@transducer/result"](result);
      },
      "@@transducer/step": function(result, input) {
        var ret = xf["@@transducer/step"](result, input);
        return ret["@@transducer/reduced"] ? _forceReduced(ret) : ret;
      }
    };
  };
  var _flatCat = function _xcat(xf) {
    var rxf = preservingReduced(xf);
    return {
      "@@transducer/init": _xfBase.init,
      "@@transducer/result": function(result) {
        return rxf["@@transducer/result"](result);
      },
      "@@transducer/step": function(result, input) {
        return !_isArrayLike(input) ? _reduce(rxf, result, [input]) : _reduce(rxf, result, input);
      }
    };
  };
  module2.exports = _flatCat;
});

// ../../node_modules/ramda/src/internal/_xchain.js
var require_xchain = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var _flatCat = require_flatCat();
  var map = require_map2();
  var _xchain = /* @__PURE__ */ _curry2(function _xchain2(f, xf) {
    return map(f, _flatCat(xf));
  });
  module2.exports = _xchain;
});

// ../../node_modules/ramda/src/chain.js
var require_chain = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var _dispatchable = require_dispatchable();
  var _makeFlat = require_makeFlat();
  var _xchain = require_xchain();
  var map = require_map2();
  var chain = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable(["fantasy-land/chain", "chain"], _xchain, function chain2(fn, monad) {
    if (typeof monad === "function") {
      return function(x) {
        return fn(monad(x))(x);
      };
    }
    return _makeFlat(false)(map(fn, monad));
  }));
  module2.exports = chain;
});

// ../../node_modules/ramda/src/clamp.js
var require_clamp = __commonJS((exports2, module2) => {
  var _curry3 = require_curry3();
  var clamp = /* @__PURE__ */ _curry3(function clamp2(min, max, value) {
    if (min > max) {
      throw new Error("min must not be greater than max in clamp(min, max, value)");
    }
    return value < min ? min : value > max ? max : value;
  });
  module2.exports = clamp;
});

// ../../node_modules/ramda/src/internal/_cloneRegExp.js
var require_cloneRegExp = __commonJS((exports2, module2) => {
  function _cloneRegExp(pattern) {
    return new RegExp(pattern.source, (pattern.global ? "g" : "") + (pattern.ignoreCase ? "i" : "") + (pattern.multiline ? "m" : "") + (pattern.sticky ? "y" : "") + (pattern.unicode ? "u" : ""));
  }
  module2.exports = _cloneRegExp;
});

// ../../node_modules/ramda/src/type.js
var require_type = __commonJS((exports2, module2) => {
  var _curry1 = require_curry1();
  var type = /* @__PURE__ */ _curry1(function type2(val) {
    return val === null ? "Null" : val === void 0 ? "Undefined" : Object.prototype.toString.call(val).slice(8, -1);
  });
  module2.exports = type;
});

// ../../node_modules/ramda/src/internal/_clone.js
var require_clone = __commonJS((exports2, module2) => {
  var _cloneRegExp = require_cloneRegExp();
  var type = require_type();
  function _clone(value, refFrom, refTo, deep) {
    var copy = function copy2(copiedValue) {
      var len = refFrom.length;
      var idx = 0;
      while (idx < len) {
        if (value === refFrom[idx]) {
          return refTo[idx];
        }
        idx += 1;
      }
      refFrom[idx + 1] = value;
      refTo[idx + 1] = copiedValue;
      for (var key in value) {
        copiedValue[key] = deep ? _clone(value[key], refFrom, refTo, true) : value[key];
      }
      return copiedValue;
    };
    switch (type(value)) {
      case "Object":
        return copy({});
      case "Array":
        return copy([]);
      case "Date":
        return new Date(value.valueOf());
      case "RegExp":
        return _cloneRegExp(value);
      default:
        return value;
    }
  }
  module2.exports = _clone;
});

// ../../node_modules/ramda/src/clone.js
var require_clone2 = __commonJS((exports2, module2) => {
  var _clone = require_clone();
  var _curry1 = require_curry1();
  var clone = /* @__PURE__ */ _curry1(function clone2(value) {
    return value != null && typeof value.clone === "function" ? value.clone() : _clone(value, [], [], true);
  });
  module2.exports = clone;
});

// ../../node_modules/ramda/src/comparator.js
var require_comparator = __commonJS((exports2, module2) => {
  var _curry1 = require_curry1();
  var comparator = /* @__PURE__ */ _curry1(function comparator2(pred) {
    return function(a, b) {
      return pred(a, b) ? -1 : pred(b, a) ? 1 : 0;
    };
  });
  module2.exports = comparator;
});

// ../../node_modules/ramda/src/not.js
var require_not = __commonJS((exports2, module2) => {
  var _curry1 = require_curry1();
  var not = /* @__PURE__ */ _curry1(function not2(a) {
    return !a;
  });
  module2.exports = not;
});

// ../../node_modules/ramda/src/complement.js
var require_complement = __commonJS((exports2, module2) => {
  var lift = require_lift();
  var not = require_not();
  var complement = /* @__PURE__ */ lift(not);
  module2.exports = complement;
});

// ../../node_modules/ramda/src/internal/_pipe.js
var require_pipe = __commonJS((exports2, module2) => {
  function _pipe(f, g) {
    return function() {
      return g.call(this, f.apply(this, arguments));
    };
  }
  module2.exports = _pipe;
});

// ../../node_modules/ramda/src/internal/_checkForMethod.js
var require_checkForMethod = __commonJS((exports2, module2) => {
  var _isArray = require_isArray();
  function _checkForMethod(methodname, fn) {
    return function() {
      var length = arguments.length;
      if (length === 0) {
        return fn();
      }
      var obj = arguments[length - 1];
      return _isArray(obj) || typeof obj[methodname] !== "function" ? fn.apply(this, arguments) : obj[methodname].apply(obj, Array.prototype.slice.call(arguments, 0, length - 1));
    };
  }
  module2.exports = _checkForMethod;
});

// ../../node_modules/ramda/src/slice.js
var require_slice = __commonJS((exports2, module2) => {
  var _checkForMethod = require_checkForMethod();
  var _curry3 = require_curry3();
  var slice = /* @__PURE__ */ _curry3(/* @__PURE__ */ _checkForMethod("slice", function slice2(fromIndex, toIndex, list) {
    return Array.prototype.slice.call(list, fromIndex, toIndex);
  }));
  module2.exports = slice;
});

// ../../node_modules/ramda/src/tail.js
var require_tail = __commonJS((exports2, module2) => {
  var _checkForMethod = require_checkForMethod();
  var _curry1 = require_curry1();
  var slice = require_slice();
  var tail = /* @__PURE__ */ _curry1(/* @__PURE__ */ _checkForMethod("tail", /* @__PURE__ */ slice(1, Infinity)));
  module2.exports = tail;
});

// ../../node_modules/ramda/src/pipe.js
var require_pipe2 = __commonJS((exports2, module2) => {
  var _arity = require_arity();
  var _pipe = require_pipe();
  var reduce = require_reduce2();
  var tail = require_tail();
  function pipe() {
    if (arguments.length === 0) {
      throw new Error("pipe requires at least one argument");
    }
    return _arity(arguments[0].length, reduce(_pipe, arguments[0], tail(arguments)));
  }
  module2.exports = pipe;
});

// ../../node_modules/ramda/src/reverse.js
var require_reverse = __commonJS((exports2, module2) => {
  var _curry1 = require_curry1();
  var _isString = require_isString();
  var reverse = /* @__PURE__ */ _curry1(function reverse2(list) {
    return _isString(list) ? list.split("").reverse().join("") : Array.prototype.slice.call(list, 0).reverse();
  });
  module2.exports = reverse;
});

// ../../node_modules/ramda/src/compose.js
var require_compose = __commonJS((exports2, module2) => {
  var pipe = require_pipe2();
  var reverse = require_reverse();
  function compose() {
    if (arguments.length === 0) {
      throw new Error("compose requires at least one argument");
    }
    return pipe.apply(this, reverse(arguments));
  }
  module2.exports = compose;
});

// ../../node_modules/ramda/src/composeK.js
var require_composeK = __commonJS((exports2, module2) => {
  var chain = require_chain();
  var compose = require_compose();
  var map = require_map2();
  function composeK() {
    if (arguments.length === 0) {
      throw new Error("composeK requires at least one argument");
    }
    var init = Array.prototype.slice.call(arguments);
    var last = init.pop();
    return compose(compose.apply(this, map(chain, init)), last);
  }
  module2.exports = composeK;
});

// ../../node_modules/ramda/src/internal/_pipeP.js
var require_pipeP = __commonJS((exports2, module2) => {
  function _pipeP(f, g) {
    return function() {
      var ctx = this;
      return f.apply(ctx, arguments).then(function(x) {
        return g.call(ctx, x);
      });
    };
  }
  module2.exports = _pipeP;
});

// ../../node_modules/ramda/src/pipeP.js
var require_pipeP2 = __commonJS((exports2, module2) => {
  var _arity = require_arity();
  var _pipeP = require_pipeP();
  var reduce = require_reduce2();
  var tail = require_tail();
  function pipeP() {
    if (arguments.length === 0) {
      throw new Error("pipeP requires at least one argument");
    }
    return _arity(arguments[0].length, reduce(_pipeP, arguments[0], tail(arguments)));
  }
  module2.exports = pipeP;
});

// ../../node_modules/ramda/src/composeP.js
var require_composeP = __commonJS((exports2, module2) => {
  var pipeP = require_pipeP2();
  var reverse = require_reverse();
  function composeP() {
    if (arguments.length === 0) {
      throw new Error("composeP requires at least one argument");
    }
    return pipeP.apply(this, reverse(arguments));
  }
  module2.exports = composeP;
});

// ../../node_modules/ramda/src/head.js
var require_head = __commonJS((exports2, module2) => {
  var nth = require_nth();
  var head = /* @__PURE__ */ nth(0);
  module2.exports = head;
});

// ../../node_modules/ramda/src/internal/_identity.js
var require_identity = __commonJS((exports2, module2) => {
  function _identity(x) {
    return x;
  }
  module2.exports = _identity;
});

// ../../node_modules/ramda/src/identity.js
var require_identity2 = __commonJS((exports2, module2) => {
  var _curry1 = require_curry1();
  var _identity = require_identity();
  var identity = /* @__PURE__ */ _curry1(_identity);
  module2.exports = identity;
});

// ../../node_modules/ramda/src/pipeWith.js
var require_pipeWith = __commonJS((exports2, module2) => {
  var _arity = require_arity();
  var _curry2 = require_curry2();
  var head = require_head();
  var _reduce = require_reduce();
  var tail = require_tail();
  var identity = require_identity2();
  var pipeWith = /* @__PURE__ */ _curry2(function pipeWith2(xf, list) {
    if (list.length <= 0) {
      return identity;
    }
    var headList = head(list);
    var tailList = tail(list);
    return _arity(headList.length, function() {
      return _reduce(function(result, f) {
        return xf.call(this, f, result);
      }, headList.apply(this, arguments), tailList);
    });
  });
  module2.exports = pipeWith;
});

// ../../node_modules/ramda/src/composeWith.js
var require_composeWith = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var pipeWith = require_pipeWith();
  var reverse = require_reverse();
  var composeWith = /* @__PURE__ */ _curry2(function composeWith2(xf, list) {
    return pipeWith.apply(this, [xf, reverse(list)]);
  });
  module2.exports = composeWith;
});

// ../../node_modules/ramda/src/internal/_arrayFromIterator.js
var require_arrayFromIterator = __commonJS((exports2, module2) => {
  function _arrayFromIterator(iter) {
    var list = [];
    var next;
    while (!(next = iter.next()).done) {
      list.push(next.value);
    }
    return list;
  }
  module2.exports = _arrayFromIterator;
});

// ../../node_modules/ramda/src/internal/_includesWith.js
var require_includesWith = __commonJS((exports2, module2) => {
  function _includesWith(pred, x, list) {
    var idx = 0;
    var len = list.length;
    while (idx < len) {
      if (pred(x, list[idx])) {
        return true;
      }
      idx += 1;
    }
    return false;
  }
  module2.exports = _includesWith;
});

// ../../node_modules/ramda/src/internal/_functionName.js
var require_functionName = __commonJS((exports2, module2) => {
  function _functionName(f) {
    var match = String(f).match(/^function (\w*)/);
    return match == null ? "" : match[1];
  }
  module2.exports = _functionName;
});

// ../../node_modules/ramda/src/internal/_objectIs.js
var require_objectIs = __commonJS((exports2, module2) => {
  function _objectIs(a, b) {
    if (a === b) {
      return a !== 0 || 1 / a === 1 / b;
    } else {
      return a !== a && b !== b;
    }
  }
  module2.exports = typeof Object.is === "function" ? Object.is : _objectIs;
});

// ../../node_modules/ramda/src/internal/_equals.js
var require_equals = __commonJS((exports2, module2) => {
  var _arrayFromIterator = require_arrayFromIterator();
  var _includesWith = require_includesWith();
  var _functionName = require_functionName();
  var _has = require_has();
  var _objectIs = require_objectIs();
  var keys = require_keys();
  var type = require_type();
  function _uniqContentEquals(aIterator, bIterator, stackA, stackB) {
    var a = _arrayFromIterator(aIterator);
    var b = _arrayFromIterator(bIterator);
    function eq(_a, _b) {
      return _equals(_a, _b, stackA.slice(), stackB.slice());
    }
    return !_includesWith(function(b2, aItem) {
      return !_includesWith(eq, aItem, b2);
    }, b, a);
  }
  function _equals(a, b, stackA, stackB) {
    if (_objectIs(a, b)) {
      return true;
    }
    var typeA = type(a);
    if (typeA !== type(b)) {
      return false;
    }
    if (a == null || b == null) {
      return false;
    }
    if (typeof a["fantasy-land/equals"] === "function" || typeof b["fantasy-land/equals"] === "function") {
      return typeof a["fantasy-land/equals"] === "function" && a["fantasy-land/equals"](b) && typeof b["fantasy-land/equals"] === "function" && b["fantasy-land/equals"](a);
    }
    if (typeof a.equals === "function" || typeof b.equals === "function") {
      return typeof a.equals === "function" && a.equals(b) && typeof b.equals === "function" && b.equals(a);
    }
    switch (typeA) {
      case "Arguments":
      case "Array":
      case "Object":
        if (typeof a.constructor === "function" && _functionName(a.constructor) === "Promise") {
          return a === b;
        }
        break;
      case "Boolean":
      case "Number":
      case "String":
        if (!(typeof a === typeof b && _objectIs(a.valueOf(), b.valueOf()))) {
          return false;
        }
        break;
      case "Date":
        if (!_objectIs(a.valueOf(), b.valueOf())) {
          return false;
        }
        break;
      case "Error":
        return a.name === b.name && a.message === b.message;
      case "RegExp":
        if (!(a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.sticky === b.sticky && a.unicode === b.unicode)) {
          return false;
        }
        break;
    }
    var idx = stackA.length - 1;
    while (idx >= 0) {
      if (stackA[idx] === a) {
        return stackB[idx] === b;
      }
      idx -= 1;
    }
    switch (typeA) {
      case "Map":
        if (a.size !== b.size) {
          return false;
        }
        return _uniqContentEquals(a.entries(), b.entries(), stackA.concat([a]), stackB.concat([b]));
      case "Set":
        if (a.size !== b.size) {
          return false;
        }
        return _uniqContentEquals(a.values(), b.values(), stackA.concat([a]), stackB.concat([b]));
      case "Arguments":
      case "Array":
      case "Object":
      case "Boolean":
      case "Number":
      case "String":
      case "Date":
      case "Error":
      case "RegExp":
      case "Int8Array":
      case "Uint8Array":
      case "Uint8ClampedArray":
      case "Int16Array":
      case "Uint16Array":
      case "Int32Array":
      case "Uint32Array":
      case "Float32Array":
      case "Float64Array":
      case "ArrayBuffer":
        break;
      default:
        return false;
    }
    var keysA = keys(a);
    if (keysA.length !== keys(b).length) {
      return false;
    }
    var extendedStackA = stackA.concat([a]);
    var extendedStackB = stackB.concat([b]);
    idx = keysA.length - 1;
    while (idx >= 0) {
      var key = keysA[idx];
      if (!(_has(key, b) && _equals(b[key], a[key], extendedStackA, extendedStackB))) {
        return false;
      }
      idx -= 1;
    }
    return true;
  }
  module2.exports = _equals;
});

// ../../node_modules/ramda/src/equals.js
var require_equals2 = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var _equals = require_equals();
  var equals = /* @__PURE__ */ _curry2(function equals2(a, b) {
    return _equals(a, b, [], []);
  });
  module2.exports = equals;
});

// ../../node_modules/ramda/src/internal/_indexOf.js
var require_indexOf = __commonJS((exports2, module2) => {
  var equals = require_equals2();
  function _indexOf(list, a, idx) {
    var inf, item;
    if (typeof list.indexOf === "function") {
      switch (typeof a) {
        case "number":
          if (a === 0) {
            inf = 1 / a;
            while (idx < list.length) {
              item = list[idx];
              if (item === 0 && 1 / item === inf) {
                return idx;
              }
              idx += 1;
            }
            return -1;
          } else if (a !== a) {
            while (idx < list.length) {
              item = list[idx];
              if (typeof item === "number" && item !== item) {
                return idx;
              }
              idx += 1;
            }
            return -1;
          }
          return list.indexOf(a, idx);
        case "string":
        case "boolean":
        case "function":
        case "undefined":
          return list.indexOf(a, idx);
        case "object":
          if (a === null) {
            return list.indexOf(a, idx);
          }
      }
    }
    while (idx < list.length) {
      if (equals(list[idx], a)) {
        return idx;
      }
      idx += 1;
    }
    return -1;
  }
  module2.exports = _indexOf;
});

// ../../node_modules/ramda/src/internal/_includes.js
var require_includes = __commonJS((exports2, module2) => {
  var _indexOf = require_indexOf();
  function _includes(a, list) {
    return _indexOf(list, a, 0) >= 0;
  }
  module2.exports = _includes;
});

// ../../node_modules/ramda/src/internal/_quote.js
var require_quote = __commonJS((exports2, module2) => {
  function _quote(s) {
    var escaped = s.replace(/\\/g, "\\\\").replace(/[\b]/g, "\\b").replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\v/g, "\\v").replace(/\0/g, "\\0");
    return '"' + escaped.replace(/"/g, '\\"') + '"';
  }
  module2.exports = _quote;
});

// ../../node_modules/ramda/src/internal/_toISOString.js
var require_toISOString = __commonJS((exports2, module2) => {
  var pad = function pad2(n) {
    return (n < 10 ? "0" : "") + n;
  };
  var _toISOString = typeof Date.prototype.toISOString === "function" ? function _toISOString2(d) {
    return d.toISOString();
  } : function _toISOString2(d) {
    return d.getUTCFullYear() + "-" + pad(d.getUTCMonth() + 1) + "-" + pad(d.getUTCDate()) + "T" + pad(d.getUTCHours()) + ":" + pad(d.getUTCMinutes()) + ":" + pad(d.getUTCSeconds()) + "." + (d.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z";
  };
  module2.exports = _toISOString;
});

// ../../node_modules/ramda/src/internal/_complement.js
var require_complement2 = __commonJS((exports2, module2) => {
  function _complement(f) {
    return function() {
      return !f.apply(this, arguments);
    };
  }
  module2.exports = _complement;
});

// ../../node_modules/ramda/src/internal/_filter.js
var require_filter = __commonJS((exports2, module2) => {
  function _filter(fn, list) {
    var idx = 0;
    var len = list.length;
    var result = [];
    while (idx < len) {
      if (fn(list[idx])) {
        result[result.length] = list[idx];
      }
      idx += 1;
    }
    return result;
  }
  module2.exports = _filter;
});

// ../../node_modules/ramda/src/internal/_isObject.js
var require_isObject = __commonJS((exports2, module2) => {
  function _isObject(x) {
    return Object.prototype.toString.call(x) === "[object Object]";
  }
  module2.exports = _isObject;
});

// ../../node_modules/ramda/src/internal/_xfilter.js
var require_xfilter = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var _xfBase = require_xfBase();
  var XFilter = /* @__PURE__ */ function() {
    function XFilter2(f, xf) {
      this.xf = xf;
      this.f = f;
    }
    XFilter2.prototype["@@transducer/init"] = _xfBase.init;
    XFilter2.prototype["@@transducer/result"] = _xfBase.result;
    XFilter2.prototype["@@transducer/step"] = function(result, input) {
      return this.f(input) ? this.xf["@@transducer/step"](result, input) : result;
    };
    return XFilter2;
  }();
  var _xfilter = /* @__PURE__ */ _curry2(function _xfilter2(f, xf) {
    return new XFilter(f, xf);
  });
  module2.exports = _xfilter;
});

// ../../node_modules/ramda/src/filter.js
var require_filter2 = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var _dispatchable = require_dispatchable();
  var _filter = require_filter();
  var _isObject = require_isObject();
  var _reduce = require_reduce();
  var _xfilter = require_xfilter();
  var keys = require_keys();
  var filter = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable(["filter"], _xfilter, function(pred, filterable) {
    return _isObject(filterable) ? _reduce(function(acc, key) {
      if (pred(filterable[key])) {
        acc[key] = filterable[key];
      }
      return acc;
    }, {}, keys(filterable)) : _filter(pred, filterable);
  }));
  module2.exports = filter;
});

// ../../node_modules/ramda/src/reject.js
var require_reject = __commonJS((exports2, module2) => {
  var _complement = require_complement2();
  var _curry2 = require_curry2();
  var filter = require_filter2();
  var reject = /* @__PURE__ */ _curry2(function reject2(pred, filterable) {
    return filter(_complement(pred), filterable);
  });
  module2.exports = reject;
});

// ../../node_modules/ramda/src/internal/_toString.js
var require_toString = __commonJS((exports2, module2) => {
  var _includes = require_includes();
  var _map = require_map();
  var _quote = require_quote();
  var _toISOString = require_toISOString();
  var keys = require_keys();
  var reject = require_reject();
  function _toString(x, seen) {
    var recur = function recur2(y) {
      var xs = seen.concat([x]);
      return _includes(y, xs) ? "<Circular>" : _toString(y, xs);
    };
    var mapPairs = function(obj, keys2) {
      return _map(function(k) {
        return _quote(k) + ": " + recur(obj[k]);
      }, keys2.slice().sort());
    };
    switch (Object.prototype.toString.call(x)) {
      case "[object Arguments]":
        return "(function() { return arguments; }(" + _map(recur, x).join(", ") + "))";
      case "[object Array]":
        return "[" + _map(recur, x).concat(mapPairs(x, reject(function(k) {
          return /^\d+$/.test(k);
        }, keys(x)))).join(", ") + "]";
      case "[object Boolean]":
        return typeof x === "object" ? "new Boolean(" + recur(x.valueOf()) + ")" : x.toString();
      case "[object Date]":
        return "new Date(" + (isNaN(x.valueOf()) ? recur(NaN) : _quote(_toISOString(x))) + ")";
      case "[object Null]":
        return "null";
      case "[object Number]":
        return typeof x === "object" ? "new Number(" + recur(x.valueOf()) + ")" : 1 / x === -Infinity ? "-0" : x.toString(10);
      case "[object String]":
        return typeof x === "object" ? "new String(" + recur(x.valueOf()) + ")" : _quote(x);
      case "[object Undefined]":
        return "undefined";
      default:
        if (typeof x.toString === "function") {
          var repr = x.toString();
          if (repr !== "[object Object]") {
            return repr;
          }
        }
        return "{" + mapPairs(x, keys(x)).join(", ") + "}";
    }
  }
  module2.exports = _toString;
});

// ../../node_modules/ramda/src/toString.js
var require_toString2 = __commonJS((exports2, module2) => {
  var _curry1 = require_curry1();
  var _toString = require_toString();
  var toString = /* @__PURE__ */ _curry1(function toString2(val) {
    return _toString(val, []);
  });
  module2.exports = toString;
});

// ../../node_modules/ramda/src/concat.js
var require_concat2 = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var _isArray = require_isArray();
  var _isFunction = require_isFunction();
  var _isString = require_isString();
  var toString = require_toString2();
  var concat = /* @__PURE__ */ _curry2(function concat2(a, b) {
    if (_isArray(a)) {
      if (_isArray(b)) {
        return a.concat(b);
      }
      throw new TypeError(toString(b) + " is not an array");
    }
    if (_isString(a)) {
      if (_isString(b)) {
        return a + b;
      }
      throw new TypeError(toString(b) + " is not a string");
    }
    if (a != null && _isFunction(a["fantasy-land/concat"])) {
      return a["fantasy-land/concat"](b);
    }
    if (a != null && _isFunction(a.concat)) {
      return a.concat(b);
    }
    throw new TypeError(toString(a) + ' does not have a method named "concat" or "fantasy-land/concat"');
  });
  module2.exports = concat;
});

// ../../node_modules/ramda/src/cond.js
var require_cond = __commonJS((exports2, module2) => {
  var _arity = require_arity();
  var _curry1 = require_curry1();
  var map = require_map2();
  var max = require_max();
  var reduce = require_reduce2();
  var cond = /* @__PURE__ */ _curry1(function cond2(pairs) {
    var arity = reduce(max, 0, map(function(pair) {
      return pair[0].length;
    }, pairs));
    return _arity(arity, function() {
      var idx = 0;
      while (idx < pairs.length) {
        if (pairs[idx][0].apply(this, arguments)) {
          return pairs[idx][1].apply(this, arguments);
        }
        idx += 1;
      }
    });
  });
  module2.exports = cond;
});

// ../../node_modules/ramda/src/constructN.js
var require_constructN = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var curry = require_curry();
  var nAry = require_nAry();
  var constructN = /* @__PURE__ */ _curry2(function constructN2(n, Fn) {
    if (n > 10) {
      throw new Error("Constructor with greater than ten arguments");
    }
    if (n === 0) {
      return function() {
        return new Fn();
      };
    }
    return curry(nAry(n, function($0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
      switch (arguments.length) {
        case 1:
          return new Fn($0);
        case 2:
          return new Fn($0, $1);
        case 3:
          return new Fn($0, $1, $2);
        case 4:
          return new Fn($0, $1, $2, $3);
        case 5:
          return new Fn($0, $1, $2, $3, $4);
        case 6:
          return new Fn($0, $1, $2, $3, $4, $5);
        case 7:
          return new Fn($0, $1, $2, $3, $4, $5, $6);
        case 8:
          return new Fn($0, $1, $2, $3, $4, $5, $6, $7);
        case 9:
          return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8);
        case 10:
          return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8, $9);
      }
    }));
  });
  module2.exports = constructN;
});

// ../../node_modules/ramda/src/construct.js
var require_construct = __commonJS((exports2, module2) => {
  var _curry1 = require_curry1();
  var constructN = require_constructN();
  var construct = /* @__PURE__ */ _curry1(function construct2(Fn) {
    return constructN(Fn.length, Fn);
  });
  module2.exports = construct;
});

// ../../node_modules/ramda/src/contains.js
var require_contains = __commonJS((exports2, module2) => {
  var _includes = require_includes();
  var _curry2 = require_curry2();
  var contains = /* @__PURE__ */ _curry2(_includes);
  module2.exports = contains;
});

// ../../node_modules/ramda/src/converge.js
var require_converge = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var _map = require_map();
  var curryN = require_curryN2();
  var max = require_max();
  var pluck = require_pluck();
  var reduce = require_reduce2();
  var converge = /* @__PURE__ */ _curry2(function converge2(after, fns) {
    return curryN(reduce(max, 0, pluck("length", fns)), function() {
      var args = arguments;
      var context = this;
      return after.apply(context, _map(function(fn) {
        return fn.apply(context, args);
      }, fns));
    });
  });
  module2.exports = converge;
});

// ../../node_modules/ramda/src/internal/_xreduceBy.js
var require_xreduceBy = __commonJS((exports2, module2) => {
  var _curryN = require_curryN();
  var _has = require_has();
  var _xfBase = require_xfBase();
  var XReduceBy = /* @__PURE__ */ function() {
    function XReduceBy2(valueFn, valueAcc, keyFn, xf) {
      this.valueFn = valueFn;
      this.valueAcc = valueAcc;
      this.keyFn = keyFn;
      this.xf = xf;
      this.inputs = {};
    }
    XReduceBy2.prototype["@@transducer/init"] = _xfBase.init;
    XReduceBy2.prototype["@@transducer/result"] = function(result) {
      var key;
      for (key in this.inputs) {
        if (_has(key, this.inputs)) {
          result = this.xf["@@transducer/step"](result, this.inputs[key]);
          if (result["@@transducer/reduced"]) {
            result = result["@@transducer/value"];
            break;
          }
        }
      }
      this.inputs = null;
      return this.xf["@@transducer/result"](result);
    };
    XReduceBy2.prototype["@@transducer/step"] = function(result, input) {
      var key = this.keyFn(input);
      this.inputs[key] = this.inputs[key] || [key, this.valueAcc];
      this.inputs[key][1] = this.valueFn(this.inputs[key][1], input);
      return result;
    };
    return XReduceBy2;
  }();
  var _xreduceBy = /* @__PURE__ */ _curryN(4, [], function _xreduceBy2(valueFn, valueAcc, keyFn, xf) {
    return new XReduceBy(valueFn, valueAcc, keyFn, xf);
  });
  module2.exports = _xreduceBy;
});

// ../../node_modules/ramda/src/reduceBy.js
var require_reduceBy = __commonJS((exports2, module2) => {
  var _clone = require_clone();
  var _curryN = require_curryN();
  var _dispatchable = require_dispatchable();
  var _has = require_has();
  var _reduce = require_reduce();
  var _xreduceBy = require_xreduceBy();
  var reduceBy = /* @__PURE__ */ _curryN(4, [], /* @__PURE__ */ _dispatchable([], _xreduceBy, function reduceBy2(valueFn, valueAcc, keyFn, list) {
    return _reduce(function(acc, elt) {
      var key = keyFn(elt);
      acc[key] = valueFn(_has(key, acc) ? acc[key] : _clone(valueAcc, [], [], false), elt);
      return acc;
    }, {}, list);
  }));
  module2.exports = reduceBy;
});

// ../../node_modules/ramda/src/countBy.js
var require_countBy = __commonJS((exports2, module2) => {
  var reduceBy = require_reduceBy();
  var countBy = /* @__PURE__ */ reduceBy(function(acc, elem) {
    return acc + 1;
  }, 0);
  module2.exports = countBy;
});

// ../../node_modules/ramda/src/dec.js
var require_dec = __commonJS((exports2, module2) => {
  var add = require_add();
  var dec = /* @__PURE__ */ add(-1);
  module2.exports = dec;
});

// ../../node_modules/ramda/src/defaultTo.js
var require_defaultTo = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var defaultTo = /* @__PURE__ */ _curry2(function defaultTo2(d, v) {
    return v == null || v !== v ? d : v;
  });
  module2.exports = defaultTo;
});

// ../../node_modules/ramda/src/descend.js
var require_descend = __commonJS((exports2, module2) => {
  var _curry3 = require_curry3();
  var descend = /* @__PURE__ */ _curry3(function descend2(fn, a, b) {
    var aa = fn(a);
    var bb = fn(b);
    return aa > bb ? -1 : aa < bb ? 1 : 0;
  });
  module2.exports = descend;
});

// ../../node_modules/ramda/src/internal/_Set.js
var require_Set = __commonJS((exports2, module2) => {
  var _includes = require_includes();
  var _Set = /* @__PURE__ */ function() {
    function _Set2() {
      this._nativeSet = typeof Set === "function" ? new Set() : null;
      this._items = {};
    }
    _Set2.prototype.add = function(item) {
      return !hasOrAdd(item, true, this);
    };
    _Set2.prototype.has = function(item) {
      return hasOrAdd(item, false, this);
    };
    return _Set2;
  }();
  function hasOrAdd(item, shouldAdd, set) {
    var type = typeof item;
    var prevSize, newSize;
    switch (type) {
      case "string":
      case "number":
        if (item === 0 && 1 / item === -Infinity) {
          if (set._items["-0"]) {
            return true;
          } else {
            if (shouldAdd) {
              set._items["-0"] = true;
            }
            return false;
          }
        }
        if (set._nativeSet !== null) {
          if (shouldAdd) {
            prevSize = set._nativeSet.size;
            set._nativeSet.add(item);
            newSize = set._nativeSet.size;
            return newSize === prevSize;
          } else {
            return set._nativeSet.has(item);
          }
        } else {
          if (!(type in set._items)) {
            if (shouldAdd) {
              set._items[type] = {};
              set._items[type][item] = true;
            }
            return false;
          } else if (item in set._items[type]) {
            return true;
          } else {
            if (shouldAdd) {
              set._items[type][item] = true;
            }
            return false;
          }
        }
      case "boolean":
        if (type in set._items) {
          var bIdx = item ? 1 : 0;
          if (set._items[type][bIdx]) {
            return true;
          } else {
            if (shouldAdd) {
              set._items[type][bIdx] = true;
            }
            return false;
          }
        } else {
          if (shouldAdd) {
            set._items[type] = item ? [false, true] : [true, false];
          }
          return false;
        }
      case "function":
        if (set._nativeSet !== null) {
          if (shouldAdd) {
            prevSize = set._nativeSet.size;
            set._nativeSet.add(item);
            newSize = set._nativeSet.size;
            return newSize === prevSize;
          } else {
            return set._nativeSet.has(item);
          }
        } else {
          if (!(type in set._items)) {
            if (shouldAdd) {
              set._items[type] = [item];
            }
            return false;
          }
          if (!_includes(item, set._items[type])) {
            if (shouldAdd) {
              set._items[type].push(item);
            }
            return false;
          }
          return true;
        }
      case "undefined":
        if (set._items[type]) {
          return true;
        } else {
          if (shouldAdd) {
            set._items[type] = true;
          }
          return false;
        }
      case "object":
        if (item === null) {
          if (!set._items["null"]) {
            if (shouldAdd) {
              set._items["null"] = true;
            }
            return false;
          }
          return true;
        }
      default:
        type = Object.prototype.toString.call(item);
        if (!(type in set._items)) {
          if (shouldAdd) {
            set._items[type] = [item];
          }
          return false;
        }
        if (!_includes(item, set._items[type])) {
          if (shouldAdd) {
            set._items[type].push(item);
          }
          return false;
        }
        return true;
    }
  }
  module2.exports = _Set;
});

// ../../node_modules/ramda/src/difference.js
var require_difference = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var _Set = require_Set();
  var difference = /* @__PURE__ */ _curry2(function difference2(first, second) {
    var out = [];
    var idx = 0;
    var firstLen = first.length;
    var secondLen = second.length;
    var toFilterOut = new _Set();
    for (var i = 0; i < secondLen; i += 1) {
      toFilterOut.add(second[i]);
    }
    while (idx < firstLen) {
      if (toFilterOut.add(first[idx])) {
        out[out.length] = first[idx];
      }
      idx += 1;
    }
    return out;
  });
  module2.exports = difference;
});

// ../../node_modules/ramda/src/differenceWith.js
var require_differenceWith = __commonJS((exports2, module2) => {
  var _includesWith = require_includesWith();
  var _curry3 = require_curry3();
  var differenceWith = /* @__PURE__ */ _curry3(function differenceWith2(pred, first, second) {
    var out = [];
    var idx = 0;
    var firstLen = first.length;
    while (idx < firstLen) {
      if (!_includesWith(pred, first[idx], second) && !_includesWith(pred, first[idx], out)) {
        out.push(first[idx]);
      }
      idx += 1;
    }
    return out;
  });
  module2.exports = differenceWith;
});

// ../../node_modules/ramda/src/dissoc.js
var require_dissoc = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var dissoc = /* @__PURE__ */ _curry2(function dissoc2(prop, obj) {
    var result = {};
    for (var p in obj) {
      result[p] = obj[p];
    }
    delete result[prop];
    return result;
  });
  module2.exports = dissoc;
});

// ../../node_modules/ramda/src/remove.js
var require_remove = __commonJS((exports2, module2) => {
  var _curry3 = require_curry3();
  var remove = /* @__PURE__ */ _curry3(function remove2(start, count, list) {
    var result = Array.prototype.slice.call(list, 0);
    result.splice(start, count);
    return result;
  });
  module2.exports = remove;
});

// ../../node_modules/ramda/src/update.js
var require_update = __commonJS((exports2, module2) => {
  var _curry3 = require_curry3();
  var adjust = require_adjust();
  var always = require_always();
  var update = /* @__PURE__ */ _curry3(function update2(idx, x, list) {
    return adjust(idx, always(x), list);
  });
  module2.exports = update;
});

// ../../node_modules/ramda/src/dissocPath.js
var require_dissocPath = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var _isInteger = require_isInteger();
  var _isArray = require_isArray();
  var assoc = require_assoc();
  var dissoc = require_dissoc();
  var remove = require_remove();
  var update = require_update();
  var dissocPath = /* @__PURE__ */ _curry2(function dissocPath2(path, obj) {
    switch (path.length) {
      case 0:
        return obj;
      case 1:
        return _isInteger(path[0]) && _isArray(obj) ? remove(path[0], 1, obj) : dissoc(path[0], obj);
      default:
        var head = path[0];
        var tail = Array.prototype.slice.call(path, 1);
        if (obj[head] == null) {
          return obj;
        } else if (_isInteger(head) && _isArray(obj)) {
          return update(head, dissocPath2(tail, obj[head]), obj);
        } else {
          return assoc(head, dissocPath2(tail, obj[head]), obj);
        }
    }
  });
  module2.exports = dissocPath;
});

// ../../node_modules/ramda/src/divide.js
var require_divide = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var divide = /* @__PURE__ */ _curry2(function divide2(a, b) {
    return a / b;
  });
  module2.exports = divide;
});

// ../../node_modules/ramda/src/internal/_xdrop.js
var require_xdrop = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var _xfBase = require_xfBase();
  var XDrop = /* @__PURE__ */ function() {
    function XDrop2(n, xf) {
      this.xf = xf;
      this.n = n;
    }
    XDrop2.prototype["@@transducer/init"] = _xfBase.init;
    XDrop2.prototype["@@transducer/result"] = _xfBase.result;
    XDrop2.prototype["@@transducer/step"] = function(result, input) {
      if (this.n > 0) {
        this.n -= 1;
        return result;
      }
      return this.xf["@@transducer/step"](result, input);
    };
    return XDrop2;
  }();
  var _xdrop = /* @__PURE__ */ _curry2(function _xdrop2(n, xf) {
    return new XDrop(n, xf);
  });
  module2.exports = _xdrop;
});

// ../../node_modules/ramda/src/drop.js
var require_drop = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var _dispatchable = require_dispatchable();
  var _xdrop = require_xdrop();
  var slice = require_slice();
  var drop = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable(["drop"], _xdrop, function drop2(n, xs) {
    return slice(Math.max(0, n), Infinity, xs);
  }));
  module2.exports = drop;
});

// ../../node_modules/ramda/src/internal/_xtake.js
var require_xtake = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var _reduced = require_reduced();
  var _xfBase = require_xfBase();
  var XTake = /* @__PURE__ */ function() {
    function XTake2(n, xf) {
      this.xf = xf;
      this.n = n;
      this.i = 0;
    }
    XTake2.prototype["@@transducer/init"] = _xfBase.init;
    XTake2.prototype["@@transducer/result"] = _xfBase.result;
    XTake2.prototype["@@transducer/step"] = function(result, input) {
      this.i += 1;
      var ret = this.n === 0 ? result : this.xf["@@transducer/step"](result, input);
      return this.n >= 0 && this.i >= this.n ? _reduced(ret) : ret;
    };
    return XTake2;
  }();
  var _xtake = /* @__PURE__ */ _curry2(function _xtake2(n, xf) {
    return new XTake(n, xf);
  });
  module2.exports = _xtake;
});

// ../../node_modules/ramda/src/take.js
var require_take = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var _dispatchable = require_dispatchable();
  var _xtake = require_xtake();
  var slice = require_slice();
  var take = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable(["take"], _xtake, function take2(n, xs) {
    return slice(0, n < 0 ? Infinity : n, xs);
  }));
  module2.exports = take;
});

// ../../node_modules/ramda/src/internal/_dropLast.js
var require_dropLast = __commonJS((exports2, module2) => {
  var take = require_take();
  function dropLast(n, xs) {
    return take(n < xs.length ? xs.length - n : 0, xs);
  }
  module2.exports = dropLast;
});

// ../../node_modules/ramda/src/internal/_xdropLast.js
var require_xdropLast = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var _xfBase = require_xfBase();
  var XDropLast = /* @__PURE__ */ function() {
    function XDropLast2(n, xf) {
      this.xf = xf;
      this.pos = 0;
      this.full = false;
      this.acc = new Array(n);
    }
    XDropLast2.prototype["@@transducer/init"] = _xfBase.init;
    XDropLast2.prototype["@@transducer/result"] = function(result) {
      this.acc = null;
      return this.xf["@@transducer/result"](result);
    };
    XDropLast2.prototype["@@transducer/step"] = function(result, input) {
      if (this.full) {
        result = this.xf["@@transducer/step"](result, this.acc[this.pos]);
      }
      this.store(input);
      return result;
    };
    XDropLast2.prototype.store = function(input) {
      this.acc[this.pos] = input;
      this.pos += 1;
      if (this.pos === this.acc.length) {
        this.pos = 0;
        this.full = true;
      }
    };
    return XDropLast2;
  }();
  var _xdropLast = /* @__PURE__ */ _curry2(function _xdropLast2(n, xf) {
    return new XDropLast(n, xf);
  });
  module2.exports = _xdropLast;
});

// ../../node_modules/ramda/src/dropLast.js
var require_dropLast2 = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var _dispatchable = require_dispatchable();
  var _dropLast = require_dropLast();
  var _xdropLast = require_xdropLast();
  var dropLast = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable([], _xdropLast, _dropLast));
  module2.exports = dropLast;
});

// ../../node_modules/ramda/src/internal/_dropLastWhile.js
var require_dropLastWhile = __commonJS((exports2, module2) => {
  var slice = require_slice();
  function dropLastWhile(pred, xs) {
    var idx = xs.length - 1;
    while (idx >= 0 && pred(xs[idx])) {
      idx -= 1;
    }
    return slice(0, idx + 1, xs);
  }
  module2.exports = dropLastWhile;
});

// ../../node_modules/ramda/src/internal/_xdropLastWhile.js
var require_xdropLastWhile = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var _reduce = require_reduce();
  var _xfBase = require_xfBase();
  var XDropLastWhile = /* @__PURE__ */ function() {
    function XDropLastWhile2(fn, xf) {
      this.f = fn;
      this.retained = [];
      this.xf = xf;
    }
    XDropLastWhile2.prototype["@@transducer/init"] = _xfBase.init;
    XDropLastWhile2.prototype["@@transducer/result"] = function(result) {
      this.retained = null;
      return this.xf["@@transducer/result"](result);
    };
    XDropLastWhile2.prototype["@@transducer/step"] = function(result, input) {
      return this.f(input) ? this.retain(result, input) : this.flush(result, input);
    };
    XDropLastWhile2.prototype.flush = function(result, input) {
      result = _reduce(this.xf["@@transducer/step"], result, this.retained);
      this.retained = [];
      return this.xf["@@transducer/step"](result, input);
    };
    XDropLastWhile2.prototype.retain = function(result, input) {
      this.retained.push(input);
      return result;
    };
    return XDropLastWhile2;
  }();
  var _xdropLastWhile = /* @__PURE__ */ _curry2(function _xdropLastWhile2(fn, xf) {
    return new XDropLastWhile(fn, xf);
  });
  module2.exports = _xdropLastWhile;
});

// ../../node_modules/ramda/src/dropLastWhile.js
var require_dropLastWhile2 = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var _dispatchable = require_dispatchable();
  var _dropLastWhile = require_dropLastWhile();
  var _xdropLastWhile = require_xdropLastWhile();
  var dropLastWhile = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable([], _xdropLastWhile, _dropLastWhile));
  module2.exports = dropLastWhile;
});

// ../../node_modules/ramda/src/internal/_xdropRepeatsWith.js
var require_xdropRepeatsWith = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var _xfBase = require_xfBase();
  var XDropRepeatsWith = /* @__PURE__ */ function() {
    function XDropRepeatsWith2(pred, xf) {
      this.xf = xf;
      this.pred = pred;
      this.lastValue = void 0;
      this.seenFirstValue = false;
    }
    XDropRepeatsWith2.prototype["@@transducer/init"] = _xfBase.init;
    XDropRepeatsWith2.prototype["@@transducer/result"] = _xfBase.result;
    XDropRepeatsWith2.prototype["@@transducer/step"] = function(result, input) {
      var sameAsLast = false;
      if (!this.seenFirstValue) {
        this.seenFirstValue = true;
      } else if (this.pred(this.lastValue, input)) {
        sameAsLast = true;
      }
      this.lastValue = input;
      return sameAsLast ? result : this.xf["@@transducer/step"](result, input);
    };
    return XDropRepeatsWith2;
  }();
  var _xdropRepeatsWith = /* @__PURE__ */ _curry2(function _xdropRepeatsWith2(pred, xf) {
    return new XDropRepeatsWith(pred, xf);
  });
  module2.exports = _xdropRepeatsWith;
});

// ../../node_modules/ramda/src/last.js
var require_last = __commonJS((exports2, module2) => {
  var nth = require_nth();
  var last = /* @__PURE__ */ nth(-1);
  module2.exports = last;
});

// ../../node_modules/ramda/src/dropRepeatsWith.js
var require_dropRepeatsWith = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var _dispatchable = require_dispatchable();
  var _xdropRepeatsWith = require_xdropRepeatsWith();
  var last = require_last();
  var dropRepeatsWith = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable([], _xdropRepeatsWith, function dropRepeatsWith2(pred, list) {
    var result = [];
    var idx = 1;
    var len = list.length;
    if (len !== 0) {
      result[0] = list[0];
      while (idx < len) {
        if (!pred(last(result), list[idx])) {
          result[result.length] = list[idx];
        }
        idx += 1;
      }
    }
    return result;
  }));
  module2.exports = dropRepeatsWith;
});

// ../../node_modules/ramda/src/dropRepeats.js
var require_dropRepeats = __commonJS((exports2, module2) => {
  var _curry1 = require_curry1();
  var _dispatchable = require_dispatchable();
  var _xdropRepeatsWith = require_xdropRepeatsWith();
  var dropRepeatsWith = require_dropRepeatsWith();
  var equals = require_equals2();
  var dropRepeats = /* @__PURE__ */ _curry1(/* @__PURE__ */ _dispatchable([], /* @__PURE__ */ _xdropRepeatsWith(equals), /* @__PURE__ */ dropRepeatsWith(equals)));
  module2.exports = dropRepeats;
});

// ../../node_modules/ramda/src/internal/_xdropWhile.js
var require_xdropWhile = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var _xfBase = require_xfBase();
  var XDropWhile = /* @__PURE__ */ function() {
    function XDropWhile2(f, xf) {
      this.xf = xf;
      this.f = f;
    }
    XDropWhile2.prototype["@@transducer/init"] = _xfBase.init;
    XDropWhile2.prototype["@@transducer/result"] = _xfBase.result;
    XDropWhile2.prototype["@@transducer/step"] = function(result, input) {
      if (this.f) {
        if (this.f(input)) {
          return result;
        }
        this.f = null;
      }
      return this.xf["@@transducer/step"](result, input);
    };
    return XDropWhile2;
  }();
  var _xdropWhile = /* @__PURE__ */ _curry2(function _xdropWhile2(f, xf) {
    return new XDropWhile(f, xf);
  });
  module2.exports = _xdropWhile;
});

// ../../node_modules/ramda/src/dropWhile.js
var require_dropWhile = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var _dispatchable = require_dispatchable();
  var _xdropWhile = require_xdropWhile();
  var slice = require_slice();
  var dropWhile = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable(["dropWhile"], _xdropWhile, function dropWhile2(pred, xs) {
    var idx = 0;
    var len = xs.length;
    while (idx < len && pred(xs[idx])) {
      idx += 1;
    }
    return slice(idx, Infinity, xs);
  }));
  module2.exports = dropWhile;
});

// ../../node_modules/ramda/src/or.js
var require_or = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var or = /* @__PURE__ */ _curry2(function or2(a, b) {
    return a || b;
  });
  module2.exports = or;
});

// ../../node_modules/ramda/src/either.js
var require_either = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var _isFunction = require_isFunction();
  var lift = require_lift();
  var or = require_or();
  var either = /* @__PURE__ */ _curry2(function either2(f, g) {
    return _isFunction(f) ? function _either() {
      return f.apply(this, arguments) || g.apply(this, arguments);
    } : lift(or)(f, g);
  });
  module2.exports = either;
});

// ../../node_modules/ramda/src/empty.js
var require_empty = __commonJS((exports2, module2) => {
  var _curry1 = require_curry1();
  var _isArguments = require_isArguments();
  var _isArray = require_isArray();
  var _isObject = require_isObject();
  var _isString = require_isString();
  var empty = /* @__PURE__ */ _curry1(function empty2(x) {
    return x != null && typeof x["fantasy-land/empty"] === "function" ? x["fantasy-land/empty"]() : x != null && x.constructor != null && typeof x.constructor["fantasy-land/empty"] === "function" ? x.constructor["fantasy-land/empty"]() : x != null && typeof x.empty === "function" ? x.empty() : x != null && x.constructor != null && typeof x.constructor.empty === "function" ? x.constructor.empty() : _isArray(x) ? [] : _isString(x) ? "" : _isObject(x) ? {} : _isArguments(x) ? function() {
      return arguments;
    }() : void 0;
  });
  module2.exports = empty;
});

// ../../node_modules/ramda/src/takeLast.js
var require_takeLast = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var drop = require_drop();
  var takeLast = /* @__PURE__ */ _curry2(function takeLast2(n, xs) {
    return drop(n >= 0 ? xs.length - n : 0, xs);
  });
  module2.exports = takeLast;
});

// ../../node_modules/ramda/src/endsWith.js
var require_endsWith = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var equals = require_equals2();
  var takeLast = require_takeLast();
  var endsWith = /* @__PURE__ */ _curry2(function(suffix, list) {
    return equals(takeLast(suffix.length, list), suffix);
  });
  module2.exports = endsWith;
});

// ../../node_modules/ramda/src/eqBy.js
var require_eqBy = __commonJS((exports2, module2) => {
  var _curry3 = require_curry3();
  var equals = require_equals2();
  var eqBy = /* @__PURE__ */ _curry3(function eqBy2(f, x, y) {
    return equals(f(x), f(y));
  });
  module2.exports = eqBy;
});

// ../../node_modules/ramda/src/eqProps.js
var require_eqProps = __commonJS((exports2, module2) => {
  var _curry3 = require_curry3();
  var equals = require_equals2();
  var eqProps = /* @__PURE__ */ _curry3(function eqProps2(prop, obj1, obj2) {
    return equals(obj1[prop], obj2[prop]);
  });
  module2.exports = eqProps;
});

// ../../node_modules/ramda/src/evolve.js
var require_evolve = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var evolve = /* @__PURE__ */ _curry2(function evolve2(transformations, object) {
    var result = object instanceof Array ? [] : {};
    var transformation, key, type;
    for (key in object) {
      transformation = transformations[key];
      type = typeof transformation;
      result[key] = type === "function" ? transformation(object[key]) : transformation && type === "object" ? evolve2(transformation, object[key]) : object[key];
    }
    return result;
  });
  module2.exports = evolve;
});

// ../../node_modules/ramda/src/internal/_xfind.js
var require_xfind = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var _reduced = require_reduced();
  var _xfBase = require_xfBase();
  var XFind = /* @__PURE__ */ function() {
    function XFind2(f, xf) {
      this.xf = xf;
      this.f = f;
      this.found = false;
    }
    XFind2.prototype["@@transducer/init"] = _xfBase.init;
    XFind2.prototype["@@transducer/result"] = function(result) {
      if (!this.found) {
        result = this.xf["@@transducer/step"](result, void 0);
      }
      return this.xf["@@transducer/result"](result);
    };
    XFind2.prototype["@@transducer/step"] = function(result, input) {
      if (this.f(input)) {
        this.found = true;
        result = _reduced(this.xf["@@transducer/step"](result, input));
      }
      return result;
    };
    return XFind2;
  }();
  var _xfind = /* @__PURE__ */ _curry2(function _xfind2(f, xf) {
    return new XFind(f, xf);
  });
  module2.exports = _xfind;
});

// ../../node_modules/ramda/src/find.js
var require_find = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var _dispatchable = require_dispatchable();
  var _xfind = require_xfind();
  var find = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable(["find"], _xfind, function find2(fn, list) {
    var idx = 0;
    var len = list.length;
    while (idx < len) {
      if (fn(list[idx])) {
        return list[idx];
      }
      idx += 1;
    }
  }));
  module2.exports = find;
});

// ../../node_modules/ramda/src/internal/_xfindIndex.js
var require_xfindIndex = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var _reduced = require_reduced();
  var _xfBase = require_xfBase();
  var XFindIndex = /* @__PURE__ */ function() {
    function XFindIndex2(f, xf) {
      this.xf = xf;
      this.f = f;
      this.idx = -1;
      this.found = false;
    }
    XFindIndex2.prototype["@@transducer/init"] = _xfBase.init;
    XFindIndex2.prototype["@@transducer/result"] = function(result) {
      if (!this.found) {
        result = this.xf["@@transducer/step"](result, -1);
      }
      return this.xf["@@transducer/result"](result);
    };
    XFindIndex2.prototype["@@transducer/step"] = function(result, input) {
      this.idx += 1;
      if (this.f(input)) {
        this.found = true;
        result = _reduced(this.xf["@@transducer/step"](result, this.idx));
      }
      return result;
    };
    return XFindIndex2;
  }();
  var _xfindIndex = /* @__PURE__ */ _curry2(function _xfindIndex2(f, xf) {
    return new XFindIndex(f, xf);
  });
  module2.exports = _xfindIndex;
});

// ../../node_modules/ramda/src/findIndex.js
var require_findIndex = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var _dispatchable = require_dispatchable();
  var _xfindIndex = require_xfindIndex();
  var findIndex = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable([], _xfindIndex, function findIndex2(fn, list) {
    var idx = 0;
    var len = list.length;
    while (idx < len) {
      if (fn(list[idx])) {
        return idx;
      }
      idx += 1;
    }
    return -1;
  }));
  module2.exports = findIndex;
});

// ../../node_modules/ramda/src/internal/_xfindLast.js
var require_xfindLast = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var _xfBase = require_xfBase();
  var XFindLast = /* @__PURE__ */ function() {
    function XFindLast2(f, xf) {
      this.xf = xf;
      this.f = f;
    }
    XFindLast2.prototype["@@transducer/init"] = _xfBase.init;
    XFindLast2.prototype["@@transducer/result"] = function(result) {
      return this.xf["@@transducer/result"](this.xf["@@transducer/step"](result, this.last));
    };
    XFindLast2.prototype["@@transducer/step"] = function(result, input) {
      if (this.f(input)) {
        this.last = input;
      }
      return result;
    };
    return XFindLast2;
  }();
  var _xfindLast = /* @__PURE__ */ _curry2(function _xfindLast2(f, xf) {
    return new XFindLast(f, xf);
  });
  module2.exports = _xfindLast;
});

// ../../node_modules/ramda/src/findLast.js
var require_findLast = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var _dispatchable = require_dispatchable();
  var _xfindLast = require_xfindLast();
  var findLast = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable([], _xfindLast, function findLast2(fn, list) {
    var idx = list.length - 1;
    while (idx >= 0) {
      if (fn(list[idx])) {
        return list[idx];
      }
      idx -= 1;
    }
  }));
  module2.exports = findLast;
});

// ../../node_modules/ramda/src/internal/_xfindLastIndex.js
var require_xfindLastIndex = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var _xfBase = require_xfBase();
  var XFindLastIndex = /* @__PURE__ */ function() {
    function XFindLastIndex2(f, xf) {
      this.xf = xf;
      this.f = f;
      this.idx = -1;
      this.lastIdx = -1;
    }
    XFindLastIndex2.prototype["@@transducer/init"] = _xfBase.init;
    XFindLastIndex2.prototype["@@transducer/result"] = function(result) {
      return this.xf["@@transducer/result"](this.xf["@@transducer/step"](result, this.lastIdx));
    };
    XFindLastIndex2.prototype["@@transducer/step"] = function(result, input) {
      this.idx += 1;
      if (this.f(input)) {
        this.lastIdx = this.idx;
      }
      return result;
    };
    return XFindLastIndex2;
  }();
  var _xfindLastIndex = /* @__PURE__ */ _curry2(function _xfindLastIndex2(f, xf) {
    return new XFindLastIndex(f, xf);
  });
  module2.exports = _xfindLastIndex;
});

// ../../node_modules/ramda/src/findLastIndex.js
var require_findLastIndex = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var _dispatchable = require_dispatchable();
  var _xfindLastIndex = require_xfindLastIndex();
  var findLastIndex = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable([], _xfindLastIndex, function findLastIndex2(fn, list) {
    var idx = list.length - 1;
    while (idx >= 0) {
      if (fn(list[idx])) {
        return idx;
      }
      idx -= 1;
    }
    return -1;
  }));
  module2.exports = findLastIndex;
});

// ../../node_modules/ramda/src/flatten.js
var require_flatten = __commonJS((exports2, module2) => {
  var _curry1 = require_curry1();
  var _makeFlat = require_makeFlat();
  var flatten = /* @__PURE__ */ _curry1(/* @__PURE__ */ _makeFlat(true));
  module2.exports = flatten;
});

// ../../node_modules/ramda/src/flip.js
var require_flip = __commonJS((exports2, module2) => {
  var _curry1 = require_curry1();
  var curryN = require_curryN2();
  var flip = /* @__PURE__ */ _curry1(function flip2(fn) {
    return curryN(fn.length, function(a, b) {
      var args = Array.prototype.slice.call(arguments, 0);
      args[0] = b;
      args[1] = a;
      return fn.apply(this, args);
    });
  });
  module2.exports = flip;
});

// ../../node_modules/ramda/src/forEach.js
var require_forEach = __commonJS((exports2, module2) => {
  var _checkForMethod = require_checkForMethod();
  var _curry2 = require_curry2();
  var forEach = /* @__PURE__ */ _curry2(/* @__PURE__ */ _checkForMethod("forEach", function forEach2(fn, list) {
    var len = list.length;
    var idx = 0;
    while (idx < len) {
      fn(list[idx]);
      idx += 1;
    }
    return list;
  }));
  module2.exports = forEach;
});

// ../../node_modules/ramda/src/forEachObjIndexed.js
var require_forEachObjIndexed = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var keys = require_keys();
  var forEachObjIndexed = /* @__PURE__ */ _curry2(function forEachObjIndexed2(fn, obj) {
    var keyList = keys(obj);
    var idx = 0;
    while (idx < keyList.length) {
      var key = keyList[idx];
      fn(obj[key], key, obj);
      idx += 1;
    }
    return obj;
  });
  module2.exports = forEachObjIndexed;
});

// ../../node_modules/ramda/src/fromPairs.js
var require_fromPairs = __commonJS((exports2, module2) => {
  var _curry1 = require_curry1();
  var fromPairs = /* @__PURE__ */ _curry1(function fromPairs2(pairs) {
    var result = {};
    var idx = 0;
    while (idx < pairs.length) {
      result[pairs[idx][0]] = pairs[idx][1];
      idx += 1;
    }
    return result;
  });
  module2.exports = fromPairs;
});

// ../../node_modules/ramda/src/groupBy.js
var require_groupBy = __commonJS((exports2, module2) => {
  var _checkForMethod = require_checkForMethod();
  var _curry2 = require_curry2();
  var reduceBy = require_reduceBy();
  var groupBy = /* @__PURE__ */ _curry2(/* @__PURE__ */ _checkForMethod("groupBy", /* @__PURE__ */ reduceBy(function(acc, item) {
    if (acc == null) {
      acc = [];
    }
    acc.push(item);
    return acc;
  }, null)));
  module2.exports = groupBy;
});

// ../../node_modules/ramda/src/groupWith.js
var require_groupWith = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var groupWith = /* @__PURE__ */ _curry2(function(fn, list) {
    var res = [];
    var idx = 0;
    var len = list.length;
    while (idx < len) {
      var nextidx = idx + 1;
      while (nextidx < len && fn(list[nextidx - 1], list[nextidx])) {
        nextidx += 1;
      }
      res.push(list.slice(idx, nextidx));
      idx = nextidx;
    }
    return res;
  });
  module2.exports = groupWith;
});

// ../../node_modules/ramda/src/gt.js
var require_gt = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var gt = /* @__PURE__ */ _curry2(function gt2(a, b) {
    return a > b;
  });
  module2.exports = gt;
});

// ../../node_modules/ramda/src/gte.js
var require_gte = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var gte = /* @__PURE__ */ _curry2(function gte2(a, b) {
    return a >= b;
  });
  module2.exports = gte;
});

// ../../node_modules/ramda/src/hasPath.js
var require_hasPath = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var _has = require_has();
  var isNil = require_isNil();
  var hasPath = /* @__PURE__ */ _curry2(function hasPath2(_path, obj) {
    if (_path.length === 0 || isNil(obj)) {
      return false;
    }
    var val = obj;
    var idx = 0;
    while (idx < _path.length) {
      if (!isNil(val) && _has(_path[idx], val)) {
        val = val[_path[idx]];
        idx += 1;
      } else {
        return false;
      }
    }
    return true;
  });
  module2.exports = hasPath;
});

// ../../node_modules/ramda/src/has.js
var require_has2 = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var hasPath = require_hasPath();
  var has = /* @__PURE__ */ _curry2(function has2(prop, obj) {
    return hasPath([prop], obj);
  });
  module2.exports = has;
});

// ../../node_modules/ramda/src/hasIn.js
var require_hasIn = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var hasIn = /* @__PURE__ */ _curry2(function hasIn2(prop, obj) {
    return prop in obj;
  });
  module2.exports = hasIn;
});

// ../../node_modules/ramda/src/identical.js
var require_identical = __commonJS((exports2, module2) => {
  var _objectIs = require_objectIs();
  var _curry2 = require_curry2();
  var identical = /* @__PURE__ */ _curry2(_objectIs);
  module2.exports = identical;
});

// ../../node_modules/ramda/src/ifElse.js
var require_ifElse = __commonJS((exports2, module2) => {
  var _curry3 = require_curry3();
  var curryN = require_curryN2();
  var ifElse = /* @__PURE__ */ _curry3(function ifElse2(condition, onTrue, onFalse) {
    return curryN(Math.max(condition.length, onTrue.length, onFalse.length), function _ifElse() {
      return condition.apply(this, arguments) ? onTrue.apply(this, arguments) : onFalse.apply(this, arguments);
    });
  });
  module2.exports = ifElse;
});

// ../../node_modules/ramda/src/inc.js
var require_inc = __commonJS((exports2, module2) => {
  var add = require_add();
  var inc = /* @__PURE__ */ add(1);
  module2.exports = inc;
});

// ../../node_modules/ramda/src/includes.js
var require_includes2 = __commonJS((exports2, module2) => {
  var _includes = require_includes();
  var _curry2 = require_curry2();
  var includes = /* @__PURE__ */ _curry2(_includes);
  module2.exports = includes;
});

// ../../node_modules/ramda/src/indexBy.js
var require_indexBy = __commonJS((exports2, module2) => {
  var reduceBy = require_reduceBy();
  var indexBy = /* @__PURE__ */ reduceBy(function(acc, elem) {
    return elem;
  }, null);
  module2.exports = indexBy;
});

// ../../node_modules/ramda/src/indexOf.js
var require_indexOf2 = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var _indexOf = require_indexOf();
  var _isArray = require_isArray();
  var indexOf = /* @__PURE__ */ _curry2(function indexOf2(target, xs) {
    return typeof xs.indexOf === "function" && !_isArray(xs) ? xs.indexOf(target) : _indexOf(xs, target, 0);
  });
  module2.exports = indexOf;
});

// ../../node_modules/ramda/src/init.js
var require_init = __commonJS((exports2, module2) => {
  var slice = require_slice();
  var init = /* @__PURE__ */ slice(0, -1);
  module2.exports = init;
});

// ../../node_modules/ramda/src/innerJoin.js
var require_innerJoin = __commonJS((exports2, module2) => {
  var _includesWith = require_includesWith();
  var _curry3 = require_curry3();
  var _filter = require_filter();
  var innerJoin = /* @__PURE__ */ _curry3(function innerJoin2(pred, xs, ys) {
    return _filter(function(x) {
      return _includesWith(pred, x, ys);
    }, xs);
  });
  module2.exports = innerJoin;
});

// ../../node_modules/ramda/src/insert.js
var require_insert = __commonJS((exports2, module2) => {
  var _curry3 = require_curry3();
  var insert = /* @__PURE__ */ _curry3(function insert2(idx, elt, list) {
    idx = idx < list.length && idx >= 0 ? idx : list.length;
    var result = Array.prototype.slice.call(list, 0);
    result.splice(idx, 0, elt);
    return result;
  });
  module2.exports = insert;
});

// ../../node_modules/ramda/src/insertAll.js
var require_insertAll = __commonJS((exports2, module2) => {
  var _curry3 = require_curry3();
  var insertAll = /* @__PURE__ */ _curry3(function insertAll2(idx, elts, list) {
    idx = idx < list.length && idx >= 0 ? idx : list.length;
    return [].concat(Array.prototype.slice.call(list, 0, idx), elts, Array.prototype.slice.call(list, idx));
  });
  module2.exports = insertAll;
});

// ../../node_modules/ramda/src/uniqBy.js
var require_uniqBy = __commonJS((exports2, module2) => {
  var _Set = require_Set();
  var _curry2 = require_curry2();
  var uniqBy = /* @__PURE__ */ _curry2(function uniqBy2(fn, list) {
    var set = new _Set();
    var result = [];
    var idx = 0;
    var appliedItem, item;
    while (idx < list.length) {
      item = list[idx];
      appliedItem = fn(item);
      if (set.add(appliedItem)) {
        result.push(item);
      }
      idx += 1;
    }
    return result;
  });
  module2.exports = uniqBy;
});

// ../../node_modules/ramda/src/uniq.js
var require_uniq = __commonJS((exports2, module2) => {
  var identity = require_identity2();
  var uniqBy = require_uniqBy();
  var uniq = /* @__PURE__ */ uniqBy(identity);
  module2.exports = uniq;
});

// ../../node_modules/ramda/src/intersection.js
var require_intersection = __commonJS((exports2, module2) => {
  var _includes = require_includes();
  var _curry2 = require_curry2();
  var _filter = require_filter();
  var flip = require_flip();
  var uniq = require_uniq();
  var intersection = /* @__PURE__ */ _curry2(function intersection2(list1, list2) {
    var lookupList, filteredList;
    if (list1.length > list2.length) {
      lookupList = list1;
      filteredList = list2;
    } else {
      lookupList = list2;
      filteredList = list1;
    }
    return uniq(_filter(flip(_includes)(lookupList), filteredList));
  });
  module2.exports = intersection;
});

// ../../node_modules/ramda/src/intersperse.js
var require_intersperse = __commonJS((exports2, module2) => {
  var _checkForMethod = require_checkForMethod();
  var _curry2 = require_curry2();
  var intersperse = /* @__PURE__ */ _curry2(/* @__PURE__ */ _checkForMethod("intersperse", function intersperse2(separator, list) {
    var out = [];
    var idx = 0;
    var length = list.length;
    while (idx < length) {
      if (idx === length - 1) {
        out.push(list[idx]);
      } else {
        out.push(list[idx], separator);
      }
      idx += 1;
    }
    return out;
  }));
  module2.exports = intersperse;
});

// ../../node_modules/ramda/src/internal/_objectAssign.js
var require_objectAssign = __commonJS((exports2, module2) => {
  var _has = require_has();
  function _objectAssign(target) {
    if (target == null) {
      throw new TypeError("Cannot convert undefined or null to object");
    }
    var output = Object(target);
    var idx = 1;
    var length = arguments.length;
    while (idx < length) {
      var source = arguments[idx];
      if (source != null) {
        for (var nextKey in source) {
          if (_has(nextKey, source)) {
            output[nextKey] = source[nextKey];
          }
        }
      }
      idx += 1;
    }
    return output;
  }
  module2.exports = typeof Object.assign === "function" ? Object.assign : _objectAssign;
});

// ../../node_modules/ramda/src/objOf.js
var require_objOf = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var objOf = /* @__PURE__ */ _curry2(function objOf2(key, val) {
    var obj = {};
    obj[key] = val;
    return obj;
  });
  module2.exports = objOf;
});

// ../../node_modules/ramda/src/internal/_stepCat.js
var require_stepCat = __commonJS((exports2, module2) => {
  var _objectAssign = require_objectAssign();
  var _identity = require_identity();
  var _isArrayLike = require_isArrayLike();
  var _isTransformer = require_isTransformer();
  var objOf = require_objOf();
  var _stepCatArray = {
    "@@transducer/init": Array,
    "@@transducer/step": function(xs, x) {
      xs.push(x);
      return xs;
    },
    "@@transducer/result": _identity
  };
  var _stepCatString = {
    "@@transducer/init": String,
    "@@transducer/step": function(a, b) {
      return a + b;
    },
    "@@transducer/result": _identity
  };
  var _stepCatObject = {
    "@@transducer/init": Object,
    "@@transducer/step": function(result, input) {
      return _objectAssign(result, _isArrayLike(input) ? objOf(input[0], input[1]) : input);
    },
    "@@transducer/result": _identity
  };
  function _stepCat(obj) {
    if (_isTransformer(obj)) {
      return obj;
    }
    if (_isArrayLike(obj)) {
      return _stepCatArray;
    }
    if (typeof obj === "string") {
      return _stepCatString;
    }
    if (typeof obj === "object") {
      return _stepCatObject;
    }
    throw new Error("Cannot create transformer for " + obj);
  }
  module2.exports = _stepCat;
});

// ../../node_modules/ramda/src/into.js
var require_into = __commonJS((exports2, module2) => {
  var _clone = require_clone();
  var _curry3 = require_curry3();
  var _isTransformer = require_isTransformer();
  var _reduce = require_reduce();
  var _stepCat = require_stepCat();
  var into = /* @__PURE__ */ _curry3(function into2(acc, xf, list) {
    return _isTransformer(acc) ? _reduce(xf(acc), acc["@@transducer/init"](), list) : _reduce(xf(_stepCat(acc)), _clone(acc, [], [], false), list);
  });
  module2.exports = into;
});

// ../../node_modules/ramda/src/invert.js
var require_invert = __commonJS((exports2, module2) => {
  var _curry1 = require_curry1();
  var _has = require_has();
  var keys = require_keys();
  var invert = /* @__PURE__ */ _curry1(function invert2(obj) {
    var props = keys(obj);
    var len = props.length;
    var idx = 0;
    var out = {};
    while (idx < len) {
      var key = props[idx];
      var val = obj[key];
      var list = _has(val, out) ? out[val] : out[val] = [];
      list[list.length] = key;
      idx += 1;
    }
    return out;
  });
  module2.exports = invert;
});

// ../../node_modules/ramda/src/invertObj.js
var require_invertObj = __commonJS((exports2, module2) => {
  var _curry1 = require_curry1();
  var keys = require_keys();
  var invertObj = /* @__PURE__ */ _curry1(function invertObj2(obj) {
    var props = keys(obj);
    var len = props.length;
    var idx = 0;
    var out = {};
    while (idx < len) {
      var key = props[idx];
      out[obj[key]] = key;
      idx += 1;
    }
    return out;
  });
  module2.exports = invertObj;
});

// ../../node_modules/ramda/src/invoker.js
var require_invoker = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var _isFunction = require_isFunction();
  var curryN = require_curryN2();
  var toString = require_toString2();
  var invoker = /* @__PURE__ */ _curry2(function invoker2(arity, method) {
    return curryN(arity + 1, function() {
      var target = arguments[arity];
      if (target != null && _isFunction(target[method])) {
        return target[method].apply(target, Array.prototype.slice.call(arguments, 0, arity));
      }
      throw new TypeError(toString(target) + ' does not have a method named "' + method + '"');
    });
  });
  module2.exports = invoker;
});

// ../../node_modules/ramda/src/is.js
var require_is = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var is = /* @__PURE__ */ _curry2(function is2(Ctor, val) {
    return val != null && val.constructor === Ctor || val instanceof Ctor;
  });
  module2.exports = is;
});

// ../../node_modules/ramda/src/isEmpty.js
var require_isEmpty = __commonJS((exports2, module2) => {
  var _curry1 = require_curry1();
  var empty = require_empty();
  var equals = require_equals2();
  var isEmpty = /* @__PURE__ */ _curry1(function isEmpty2(x) {
    return x != null && equals(x, empty(x));
  });
  module2.exports = isEmpty;
});

// ../../node_modules/ramda/src/join.js
var require_join = __commonJS((exports2, module2) => {
  var invoker = require_invoker();
  var join = /* @__PURE__ */ invoker(1, "join");
  module2.exports = join;
});

// ../../node_modules/ramda/src/juxt.js
var require_juxt = __commonJS((exports2, module2) => {
  var _curry1 = require_curry1();
  var converge = require_converge();
  var juxt = /* @__PURE__ */ _curry1(function juxt2(fns) {
    return converge(function() {
      return Array.prototype.slice.call(arguments, 0);
    }, fns);
  });
  module2.exports = juxt;
});

// ../../node_modules/ramda/src/keysIn.js
var require_keysIn = __commonJS((exports2, module2) => {
  var _curry1 = require_curry1();
  var keysIn = /* @__PURE__ */ _curry1(function keysIn2(obj) {
    var prop;
    var ks = [];
    for (prop in obj) {
      ks[ks.length] = prop;
    }
    return ks;
  });
  module2.exports = keysIn;
});

// ../../node_modules/ramda/src/lastIndexOf.js
var require_lastIndexOf = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var _isArray = require_isArray();
  var equals = require_equals2();
  var lastIndexOf = /* @__PURE__ */ _curry2(function lastIndexOf2(target, xs) {
    if (typeof xs.lastIndexOf === "function" && !_isArray(xs)) {
      return xs.lastIndexOf(target);
    } else {
      var idx = xs.length - 1;
      while (idx >= 0) {
        if (equals(xs[idx], target)) {
          return idx;
        }
        idx -= 1;
      }
      return -1;
    }
  });
  module2.exports = lastIndexOf;
});

// ../../node_modules/ramda/src/internal/_isNumber.js
var require_isNumber = __commonJS((exports2, module2) => {
  function _isNumber(x) {
    return Object.prototype.toString.call(x) === "[object Number]";
  }
  module2.exports = _isNumber;
});

// ../../node_modules/ramda/src/length.js
var require_length = __commonJS((exports2, module2) => {
  var _curry1 = require_curry1();
  var _isNumber = require_isNumber();
  var length = /* @__PURE__ */ _curry1(function length2(list) {
    return list != null && _isNumber(list.length) ? list.length : NaN;
  });
  module2.exports = length;
});

// ../../node_modules/ramda/src/lens.js
var require_lens = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var map = require_map2();
  var lens = /* @__PURE__ */ _curry2(function lens2(getter, setter) {
    return function(toFunctorFn) {
      return function(target) {
        return map(function(focus) {
          return setter(focus, target);
        }, toFunctorFn(getter(target)));
      };
    };
  });
  module2.exports = lens;
});

// ../../node_modules/ramda/src/lensIndex.js
var require_lensIndex = __commonJS((exports2, module2) => {
  var _curry1 = require_curry1();
  var lens = require_lens();
  var nth = require_nth();
  var update = require_update();
  var lensIndex = /* @__PURE__ */ _curry1(function lensIndex2(n) {
    return lens(nth(n), update(n));
  });
  module2.exports = lensIndex;
});

// ../../node_modules/ramda/src/lensPath.js
var require_lensPath = __commonJS((exports2, module2) => {
  var _curry1 = require_curry1();
  var assocPath = require_assocPath();
  var lens = require_lens();
  var path = require_path();
  var lensPath = /* @__PURE__ */ _curry1(function lensPath2(p) {
    return lens(path(p), assocPath(p));
  });
  module2.exports = lensPath;
});

// ../../node_modules/ramda/src/lensProp.js
var require_lensProp = __commonJS((exports2, module2) => {
  var _curry1 = require_curry1();
  var assoc = require_assoc();
  var lens = require_lens();
  var prop = require_prop();
  var lensProp = /* @__PURE__ */ _curry1(function lensProp2(k) {
    return lens(prop(k), assoc(k));
  });
  module2.exports = lensProp;
});

// ../../node_modules/ramda/src/lt.js
var require_lt = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var lt = /* @__PURE__ */ _curry2(function lt2(a, b) {
    return a < b;
  });
  module2.exports = lt;
});

// ../../node_modules/ramda/src/lte.js
var require_lte = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var lte = /* @__PURE__ */ _curry2(function lte2(a, b) {
    return a <= b;
  });
  module2.exports = lte;
});

// ../../node_modules/ramda/src/mapAccum.js
var require_mapAccum = __commonJS((exports2, module2) => {
  var _curry3 = require_curry3();
  var mapAccum = /* @__PURE__ */ _curry3(function mapAccum2(fn, acc, list) {
    var idx = 0;
    var len = list.length;
    var result = [];
    var tuple = [acc];
    while (idx < len) {
      tuple = fn(tuple[0], list[idx]);
      result[idx] = tuple[1];
      idx += 1;
    }
    return [tuple[0], result];
  });
  module2.exports = mapAccum;
});

// ../../node_modules/ramda/src/mapAccumRight.js
var require_mapAccumRight = __commonJS((exports2, module2) => {
  var _curry3 = require_curry3();
  var mapAccumRight = /* @__PURE__ */ _curry3(function mapAccumRight2(fn, acc, list) {
    var idx = list.length - 1;
    var result = [];
    var tuple = [acc];
    while (idx >= 0) {
      tuple = fn(tuple[0], list[idx]);
      result[idx] = tuple[1];
      idx -= 1;
    }
    return [tuple[0], result];
  });
  module2.exports = mapAccumRight;
});

// ../../node_modules/ramda/src/mapObjIndexed.js
var require_mapObjIndexed = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var _reduce = require_reduce();
  var keys = require_keys();
  var mapObjIndexed = /* @__PURE__ */ _curry2(function mapObjIndexed2(fn, obj) {
    return _reduce(function(acc, key) {
      acc[key] = fn(obj[key], key, obj);
      return acc;
    }, {}, keys(obj));
  });
  module2.exports = mapObjIndexed;
});

// ../../node_modules/ramda/src/match.js
var require_match = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var match = /* @__PURE__ */ _curry2(function match2(rx, str) {
    return str.match(rx) || [];
  });
  module2.exports = match;
});

// ../../node_modules/ramda/src/mathMod.js
var require_mathMod = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var _isInteger = require_isInteger();
  var mathMod = /* @__PURE__ */ _curry2(function mathMod2(m, p) {
    if (!_isInteger(m)) {
      return NaN;
    }
    if (!_isInteger(p) || p < 1) {
      return NaN;
    }
    return (m % p + p) % p;
  });
  module2.exports = mathMod;
});

// ../../node_modules/ramda/src/maxBy.js
var require_maxBy = __commonJS((exports2, module2) => {
  var _curry3 = require_curry3();
  var maxBy = /* @__PURE__ */ _curry3(function maxBy2(f, a, b) {
    return f(b) > f(a) ? b : a;
  });
  module2.exports = maxBy;
});

// ../../node_modules/ramda/src/sum.js
var require_sum = __commonJS((exports2, module2) => {
  var add = require_add();
  var reduce = require_reduce2();
  var sum = /* @__PURE__ */ reduce(add, 0);
  module2.exports = sum;
});

// ../../node_modules/ramda/src/mean.js
var require_mean = __commonJS((exports2, module2) => {
  var _curry1 = require_curry1();
  var sum = require_sum();
  var mean = /* @__PURE__ */ _curry1(function mean2(list) {
    return sum(list) / list.length;
  });
  module2.exports = mean;
});

// ../../node_modules/ramda/src/median.js
var require_median = __commonJS((exports2, module2) => {
  var _curry1 = require_curry1();
  var mean = require_mean();
  var median = /* @__PURE__ */ _curry1(function median2(list) {
    var len = list.length;
    if (len === 0) {
      return NaN;
    }
    var width = 2 - len % 2;
    var idx = (len - width) / 2;
    return mean(Array.prototype.slice.call(list, 0).sort(function(a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    }).slice(idx, idx + width));
  });
  module2.exports = median;
});

// ../../node_modules/ramda/src/memoizeWith.js
var require_memoizeWith = __commonJS((exports2, module2) => {
  var _arity = require_arity();
  var _curry2 = require_curry2();
  var _has = require_has();
  var memoizeWith = /* @__PURE__ */ _curry2(function memoizeWith2(mFn, fn) {
    var cache = {};
    return _arity(fn.length, function() {
      var key = mFn.apply(this, arguments);
      if (!_has(key, cache)) {
        cache[key] = fn.apply(this, arguments);
      }
      return cache[key];
    });
  });
  module2.exports = memoizeWith;
});

// ../../node_modules/ramda/src/merge.js
var require_merge = __commonJS((exports2, module2) => {
  var _objectAssign = require_objectAssign();
  var _curry2 = require_curry2();
  var merge = /* @__PURE__ */ _curry2(function merge2(l, r) {
    return _objectAssign({}, l, r);
  });
  module2.exports = merge;
});

// ../../node_modules/ramda/src/mergeAll.js
var require_mergeAll = __commonJS((exports2, module2) => {
  var _objectAssign = require_objectAssign();
  var _curry1 = require_curry1();
  var mergeAll = /* @__PURE__ */ _curry1(function mergeAll2(list) {
    return _objectAssign.apply(null, [{}].concat(list));
  });
  module2.exports = mergeAll;
});

// ../../node_modules/ramda/src/mergeWithKey.js
var require_mergeWithKey = __commonJS((exports2, module2) => {
  var _curry3 = require_curry3();
  var _has = require_has();
  var mergeWithKey = /* @__PURE__ */ _curry3(function mergeWithKey2(fn, l, r) {
    var result = {};
    var k;
    for (k in l) {
      if (_has(k, l)) {
        result[k] = _has(k, r) ? fn(k, l[k], r[k]) : l[k];
      }
    }
    for (k in r) {
      if (_has(k, r) && !_has(k, result)) {
        result[k] = r[k];
      }
    }
    return result;
  });
  module2.exports = mergeWithKey;
});

// ../../node_modules/ramda/src/mergeDeepWithKey.js
var require_mergeDeepWithKey = __commonJS((exports2, module2) => {
  var _curry3 = require_curry3();
  var _isObject = require_isObject();
  var mergeWithKey = require_mergeWithKey();
  var mergeDeepWithKey = /* @__PURE__ */ _curry3(function mergeDeepWithKey2(fn, lObj, rObj) {
    return mergeWithKey(function(k, lVal, rVal) {
      if (_isObject(lVal) && _isObject(rVal)) {
        return mergeDeepWithKey2(fn, lVal, rVal);
      } else {
        return fn(k, lVal, rVal);
      }
    }, lObj, rObj);
  });
  module2.exports = mergeDeepWithKey;
});

// ../../node_modules/ramda/src/mergeDeepLeft.js
var require_mergeDeepLeft = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var mergeDeepWithKey = require_mergeDeepWithKey();
  var mergeDeepLeft = /* @__PURE__ */ _curry2(function mergeDeepLeft2(lObj, rObj) {
    return mergeDeepWithKey(function(k, lVal, rVal) {
      return lVal;
    }, lObj, rObj);
  });
  module2.exports = mergeDeepLeft;
});

// ../../node_modules/ramda/src/mergeDeepRight.js
var require_mergeDeepRight = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var mergeDeepWithKey = require_mergeDeepWithKey();
  var mergeDeepRight = /* @__PURE__ */ _curry2(function mergeDeepRight2(lObj, rObj) {
    return mergeDeepWithKey(function(k, lVal, rVal) {
      return rVal;
    }, lObj, rObj);
  });
  module2.exports = mergeDeepRight;
});

// ../../node_modules/ramda/src/mergeDeepWith.js
var require_mergeDeepWith = __commonJS((exports2, module2) => {
  var _curry3 = require_curry3();
  var mergeDeepWithKey = require_mergeDeepWithKey();
  var mergeDeepWith = /* @__PURE__ */ _curry3(function mergeDeepWith2(fn, lObj, rObj) {
    return mergeDeepWithKey(function(k, lVal, rVal) {
      return fn(lVal, rVal);
    }, lObj, rObj);
  });
  module2.exports = mergeDeepWith;
});

// ../../node_modules/ramda/src/mergeLeft.js
var require_mergeLeft = __commonJS((exports2, module2) => {
  var _objectAssign = require_objectAssign();
  var _curry2 = require_curry2();
  var mergeLeft = /* @__PURE__ */ _curry2(function mergeLeft2(l, r) {
    return _objectAssign({}, r, l);
  });
  module2.exports = mergeLeft;
});

// ../../node_modules/ramda/src/mergeRight.js
var require_mergeRight = __commonJS((exports2, module2) => {
  var _objectAssign = require_objectAssign();
  var _curry2 = require_curry2();
  var mergeRight = /* @__PURE__ */ _curry2(function mergeRight2(l, r) {
    return _objectAssign({}, l, r);
  });
  module2.exports = mergeRight;
});

// ../../node_modules/ramda/src/mergeWith.js
var require_mergeWith = __commonJS((exports2, module2) => {
  var _curry3 = require_curry3();
  var mergeWithKey = require_mergeWithKey();
  var mergeWith = /* @__PURE__ */ _curry3(function mergeWith2(fn, l, r) {
    return mergeWithKey(function(_, _l, _r) {
      return fn(_l, _r);
    }, l, r);
  });
  module2.exports = mergeWith;
});

// ../../node_modules/ramda/src/min.js
var require_min = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var min = /* @__PURE__ */ _curry2(function min2(a, b) {
    return b < a ? b : a;
  });
  module2.exports = min;
});

// ../../node_modules/ramda/src/minBy.js
var require_minBy = __commonJS((exports2, module2) => {
  var _curry3 = require_curry3();
  var minBy = /* @__PURE__ */ _curry3(function minBy2(f, a, b) {
    return f(b) < f(a) ? b : a;
  });
  module2.exports = minBy;
});

// ../../node_modules/ramda/src/modulo.js
var require_modulo = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var modulo = /* @__PURE__ */ _curry2(function modulo2(a, b) {
    return a % b;
  });
  module2.exports = modulo;
});

// ../../node_modules/ramda/src/move.js
var require_move = __commonJS((exports2, module2) => {
  var _curry3 = require_curry3();
  var move = /* @__PURE__ */ _curry3(function(from, to, list) {
    var length = list.length;
    var result = list.slice();
    var positiveFrom = from < 0 ? length + from : from;
    var positiveTo = to < 0 ? length + to : to;
    var item = result.splice(positiveFrom, 1);
    return positiveFrom < 0 || positiveFrom >= list.length || positiveTo < 0 || positiveTo >= list.length ? list : [].concat(result.slice(0, positiveTo)).concat(item).concat(result.slice(positiveTo, list.length));
  });
  module2.exports = move;
});

// ../../node_modules/ramda/src/multiply.js
var require_multiply = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var multiply = /* @__PURE__ */ _curry2(function multiply2(a, b) {
    return a * b;
  });
  module2.exports = multiply;
});

// ../../node_modules/ramda/src/negate.js
var require_negate = __commonJS((exports2, module2) => {
  var _curry1 = require_curry1();
  var negate = /* @__PURE__ */ _curry1(function negate2(n) {
    return -n;
  });
  module2.exports = negate;
});

// ../../node_modules/ramda/src/none.js
var require_none = __commonJS((exports2, module2) => {
  var _complement = require_complement2();
  var _curry2 = require_curry2();
  var all = require_all();
  var none = /* @__PURE__ */ _curry2(function none2(fn, input) {
    return all(_complement(fn), input);
  });
  module2.exports = none;
});

// ../../node_modules/ramda/src/nthArg.js
var require_nthArg = __commonJS((exports2, module2) => {
  var _curry1 = require_curry1();
  var curryN = require_curryN2();
  var nth = require_nth();
  var nthArg = /* @__PURE__ */ _curry1(function nthArg2(n) {
    var arity = n < 0 ? 1 : n + 1;
    return curryN(arity, function() {
      return nth(n, arguments);
    });
  });
  module2.exports = nthArg;
});

// ../../node_modules/ramda/src/o.js
var require_o = __commonJS((exports2, module2) => {
  var _curry3 = require_curry3();
  var o = /* @__PURE__ */ _curry3(function o2(f, g, x) {
    return f(g(x));
  });
  module2.exports = o;
});

// ../../node_modules/ramda/src/internal/_of.js
var require_of = __commonJS((exports2, module2) => {
  function _of(x) {
    return [x];
  }
  module2.exports = _of;
});

// ../../node_modules/ramda/src/of.js
var require_of2 = __commonJS((exports2, module2) => {
  var _curry1 = require_curry1();
  var _of = require_of();
  var of = /* @__PURE__ */ _curry1(_of);
  module2.exports = of;
});

// ../../node_modules/ramda/src/omit.js
var require_omit = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var omit2 = /* @__PURE__ */ _curry2(function omit3(names, obj) {
    var result = {};
    var index = {};
    var idx = 0;
    var len = names.length;
    while (idx < len) {
      index[names[idx]] = 1;
      idx += 1;
    }
    for (var prop in obj) {
      if (!index.hasOwnProperty(prop)) {
        result[prop] = obj[prop];
      }
    }
    return result;
  });
  module2.exports = omit2;
});

// ../../node_modules/ramda/src/once.js
var require_once = __commonJS((exports2, module2) => {
  var _arity = require_arity();
  var _curry1 = require_curry1();
  var once = /* @__PURE__ */ _curry1(function once2(fn) {
    var called = false;
    var result;
    return _arity(fn.length, function() {
      if (called) {
        return result;
      }
      called = true;
      result = fn.apply(this, arguments);
      return result;
    });
  });
  module2.exports = once;
});

// ../../node_modules/ramda/src/internal/_assertPromise.js
var require_assertPromise = __commonJS((exports2, module2) => {
  var _isFunction = require_isFunction();
  var _toString = require_toString();
  function _assertPromise(name, p) {
    if (p == null || !_isFunction(p.then)) {
      throw new TypeError("`" + name + "` expected a Promise, received " + _toString(p, []));
    }
  }
  module2.exports = _assertPromise;
});

// ../../node_modules/ramda/src/otherwise.js
var require_otherwise = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var _assertPromise = require_assertPromise();
  var otherwise = /* @__PURE__ */ _curry2(function otherwise2(f, p) {
    _assertPromise("otherwise", p);
    return p.then(null, f);
  });
  module2.exports = otherwise;
});

// ../../node_modules/ramda/src/over.js
var require_over = __commonJS((exports2, module2) => {
  var _curry3 = require_curry3();
  var Identity = function(x) {
    return {
      value: x,
      map: function(f) {
        return Identity(f(x));
      }
    };
  };
  var over = /* @__PURE__ */ _curry3(function over2(lens, f, x) {
    return lens(function(y) {
      return Identity(f(y));
    })(x).value;
  });
  module2.exports = over;
});

// ../../node_modules/ramda/src/pair.js
var require_pair = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var pair = /* @__PURE__ */ _curry2(function pair2(fst, snd) {
    return [fst, snd];
  });
  module2.exports = pair;
});

// ../../node_modules/ramda/src/internal/_createPartialApplicator.js
var require_createPartialApplicator = __commonJS((exports2, module2) => {
  var _arity = require_arity();
  var _curry2 = require_curry2();
  function _createPartialApplicator(concat) {
    return _curry2(function(fn, args) {
      return _arity(Math.max(0, fn.length - args.length), function() {
        return fn.apply(this, concat(args, arguments));
      });
    });
  }
  module2.exports = _createPartialApplicator;
});

// ../../node_modules/ramda/src/partial.js
var require_partial = __commonJS((exports2, module2) => {
  var _concat = require_concat();
  var _createPartialApplicator = require_createPartialApplicator();
  var partial = /* @__PURE__ */ _createPartialApplicator(_concat);
  module2.exports = partial;
});

// ../../node_modules/ramda/src/partialRight.js
var require_partialRight = __commonJS((exports2, module2) => {
  var _concat = require_concat();
  var _createPartialApplicator = require_createPartialApplicator();
  var flip = require_flip();
  var partialRight = /* @__PURE__ */ _createPartialApplicator(/* @__PURE__ */ flip(_concat));
  module2.exports = partialRight;
});

// ../../node_modules/ramda/src/partition.js
var require_partition = __commonJS((exports2, module2) => {
  var filter = require_filter2();
  var juxt = require_juxt();
  var reject = require_reject();
  var partition = /* @__PURE__ */ juxt([filter, reject]);
  module2.exports = partition;
});

// ../../node_modules/ramda/src/pathEq.js
var require_pathEq = __commonJS((exports2, module2) => {
  var _curry3 = require_curry3();
  var equals = require_equals2();
  var path = require_path();
  var pathEq = /* @__PURE__ */ _curry3(function pathEq2(_path, val, obj) {
    return equals(path(_path, obj), val);
  });
  module2.exports = pathEq;
});

// ../../node_modules/ramda/src/pathOr.js
var require_pathOr = __commonJS((exports2, module2) => {
  var _curry3 = require_curry3();
  var defaultTo = require_defaultTo();
  var path = require_path();
  var pathOr = /* @__PURE__ */ _curry3(function pathOr2(d, p, obj) {
    return defaultTo(d, path(p, obj));
  });
  module2.exports = pathOr;
});

// ../../node_modules/ramda/src/pathSatisfies.js
var require_pathSatisfies = __commonJS((exports2, module2) => {
  var _curry3 = require_curry3();
  var path = require_path();
  var pathSatisfies = /* @__PURE__ */ _curry3(function pathSatisfies2(pred, propPath, obj) {
    return pred(path(propPath, obj));
  });
  module2.exports = pathSatisfies;
});

// ../../node_modules/ramda/src/pick.js
var require_pick = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var pick = /* @__PURE__ */ _curry2(function pick2(names, obj) {
    var result = {};
    var idx = 0;
    while (idx < names.length) {
      if (names[idx] in obj) {
        result[names[idx]] = obj[names[idx]];
      }
      idx += 1;
    }
    return result;
  });
  module2.exports = pick;
});

// ../../node_modules/ramda/src/pickAll.js
var require_pickAll = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var pickAll = /* @__PURE__ */ _curry2(function pickAll2(names, obj) {
    var result = {};
    var idx = 0;
    var len = names.length;
    while (idx < len) {
      var name = names[idx];
      result[name] = obj[name];
      idx += 1;
    }
    return result;
  });
  module2.exports = pickAll;
});

// ../../node_modules/ramda/src/pickBy.js
var require_pickBy = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var pickBy = /* @__PURE__ */ _curry2(function pickBy2(test, obj) {
    var result = {};
    for (var prop in obj) {
      if (test(obj[prop], prop, obj)) {
        result[prop] = obj[prop];
      }
    }
    return result;
  });
  module2.exports = pickBy;
});

// ../../node_modules/ramda/src/pipeK.js
var require_pipeK = __commonJS((exports2, module2) => {
  var composeK = require_composeK();
  var reverse = require_reverse();
  function pipeK() {
    if (arguments.length === 0) {
      throw new Error("pipeK requires at least one argument");
    }
    return composeK.apply(this, reverse(arguments));
  }
  module2.exports = pipeK;
});

// ../../node_modules/ramda/src/prepend.js
var require_prepend = __commonJS((exports2, module2) => {
  var _concat = require_concat();
  var _curry2 = require_curry2();
  var prepend = /* @__PURE__ */ _curry2(function prepend2(el, list) {
    return _concat([el], list);
  });
  module2.exports = prepend;
});

// ../../node_modules/ramda/src/product.js
var require_product = __commonJS((exports2, module2) => {
  var multiply = require_multiply();
  var reduce = require_reduce2();
  var product = /* @__PURE__ */ reduce(multiply, 1);
  module2.exports = product;
});

// ../../node_modules/ramda/src/useWith.js
var require_useWith = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var curryN = require_curryN2();
  var useWith = /* @__PURE__ */ _curry2(function useWith2(fn, transformers) {
    return curryN(transformers.length, function() {
      var args = [];
      var idx = 0;
      while (idx < transformers.length) {
        args.push(transformers[idx].call(this, arguments[idx]));
        idx += 1;
      }
      return fn.apply(this, args.concat(Array.prototype.slice.call(arguments, transformers.length)));
    });
  });
  module2.exports = useWith;
});

// ../../node_modules/ramda/src/project.js
var require_project = __commonJS((exports2, module2) => {
  var _map = require_map();
  var identity = require_identity2();
  var pickAll = require_pickAll();
  var useWith = require_useWith();
  var project = /* @__PURE__ */ useWith(_map, [pickAll, identity]);
  module2.exports = project;
});

// ../../node_modules/ramda/src/propEq.js
var require_propEq = __commonJS((exports2, module2) => {
  var _curry3 = require_curry3();
  var equals = require_equals2();
  var propEq = /* @__PURE__ */ _curry3(function propEq2(name, val, obj) {
    return equals(val, obj[name]);
  });
  module2.exports = propEq;
});

// ../../node_modules/ramda/src/propIs.js
var require_propIs = __commonJS((exports2, module2) => {
  var _curry3 = require_curry3();
  var is = require_is();
  var propIs = /* @__PURE__ */ _curry3(function propIs2(type, name, obj) {
    return is(type, obj[name]);
  });
  module2.exports = propIs;
});

// ../../node_modules/ramda/src/propOr.js
var require_propOr = __commonJS((exports2, module2) => {
  var _curry3 = require_curry3();
  var pathOr = require_pathOr();
  var propOr = /* @__PURE__ */ _curry3(function propOr2(val, p, obj) {
    return pathOr(val, [p], obj);
  });
  module2.exports = propOr;
});

// ../../node_modules/ramda/src/propSatisfies.js
var require_propSatisfies = __commonJS((exports2, module2) => {
  var _curry3 = require_curry3();
  var propSatisfies = /* @__PURE__ */ _curry3(function propSatisfies2(pred, name, obj) {
    return pred(obj[name]);
  });
  module2.exports = propSatisfies;
});

// ../../node_modules/ramda/src/props.js
var require_props = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var path = require_path();
  var props = /* @__PURE__ */ _curry2(function props2(ps, obj) {
    return ps.map(function(p) {
      return path([p], obj);
    });
  });
  module2.exports = props;
});

// ../../node_modules/ramda/src/range.js
var require_range = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var _isNumber = require_isNumber();
  var range = /* @__PURE__ */ _curry2(function range2(from, to) {
    if (!(_isNumber(from) && _isNumber(to))) {
      throw new TypeError("Both arguments to range must be numbers");
    }
    var result = [];
    var n = from;
    while (n < to) {
      result.push(n);
      n += 1;
    }
    return result;
  });
  module2.exports = range;
});

// ../../node_modules/ramda/src/reduceRight.js
var require_reduceRight = __commonJS((exports2, module2) => {
  var _curry3 = require_curry3();
  var reduceRight = /* @__PURE__ */ _curry3(function reduceRight2(fn, acc, list) {
    var idx = list.length - 1;
    while (idx >= 0) {
      acc = fn(list[idx], acc);
      idx -= 1;
    }
    return acc;
  });
  module2.exports = reduceRight;
});

// ../../node_modules/ramda/src/reduceWhile.js
var require_reduceWhile = __commonJS((exports2, module2) => {
  var _curryN = require_curryN();
  var _reduce = require_reduce();
  var _reduced = require_reduced();
  var reduceWhile = /* @__PURE__ */ _curryN(4, [], function _reduceWhile(pred, fn, a, list) {
    return _reduce(function(acc, x) {
      return pred(acc, x) ? fn(acc, x) : _reduced(acc);
    }, a, list);
  });
  module2.exports = reduceWhile;
});

// ../../node_modules/ramda/src/reduced.js
var require_reduced2 = __commonJS((exports2, module2) => {
  var _curry1 = require_curry1();
  var _reduced = require_reduced();
  var reduced = /* @__PURE__ */ _curry1(_reduced);
  module2.exports = reduced;
});

// ../../node_modules/ramda/src/times.js
var require_times = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var times = /* @__PURE__ */ _curry2(function times2(fn, n) {
    var len = Number(n);
    var idx = 0;
    var list;
    if (len < 0 || isNaN(len)) {
      throw new RangeError("n must be a non-negative number");
    }
    list = new Array(len);
    while (idx < len) {
      list[idx] = fn(idx);
      idx += 1;
    }
    return list;
  });
  module2.exports = times;
});

// ../../node_modules/ramda/src/repeat.js
var require_repeat = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var always = require_always();
  var times = require_times();
  var repeat = /* @__PURE__ */ _curry2(function repeat2(value, n) {
    return times(always(value), n);
  });
  module2.exports = repeat;
});

// ../../node_modules/ramda/src/replace.js
var require_replace = __commonJS((exports2, module2) => {
  var _curry3 = require_curry3();
  var replace = /* @__PURE__ */ _curry3(function replace2(regex, replacement, str) {
    return str.replace(regex, replacement);
  });
  module2.exports = replace;
});

// ../../node_modules/ramda/src/scan.js
var require_scan = __commonJS((exports2, module2) => {
  var _curry3 = require_curry3();
  var scan = /* @__PURE__ */ _curry3(function scan2(fn, acc, list) {
    var idx = 0;
    var len = list.length;
    var result = [acc];
    while (idx < len) {
      acc = fn(acc, list[idx]);
      result[idx + 1] = acc;
      idx += 1;
    }
    return result;
  });
  module2.exports = scan;
});

// ../../node_modules/ramda/src/sequence.js
var require_sequence = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var ap = require_ap();
  var map = require_map2();
  var prepend = require_prepend();
  var reduceRight = require_reduceRight();
  var sequence = /* @__PURE__ */ _curry2(function sequence2(of, traversable) {
    return typeof traversable.sequence === "function" ? traversable.sequence(of) : reduceRight(function(x, acc) {
      return ap(map(prepend, x), acc);
    }, of([]), traversable);
  });
  module2.exports = sequence;
});

// ../../node_modules/ramda/src/set.js
var require_set = __commonJS((exports2, module2) => {
  var _curry3 = require_curry3();
  var always = require_always();
  var over = require_over();
  var set = /* @__PURE__ */ _curry3(function set2(lens, v, x) {
    return over(lens, always(v), x);
  });
  module2.exports = set;
});

// ../../node_modules/ramda/src/sort.js
var require_sort = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var sort = /* @__PURE__ */ _curry2(function sort2(comparator, list) {
    return Array.prototype.slice.call(list, 0).sort(comparator);
  });
  module2.exports = sort;
});

// ../../node_modules/ramda/src/sortBy.js
var require_sortBy = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var sortBy = /* @__PURE__ */ _curry2(function sortBy2(fn, list) {
    return Array.prototype.slice.call(list, 0).sort(function(a, b) {
      var aa = fn(a);
      var bb = fn(b);
      return aa < bb ? -1 : aa > bb ? 1 : 0;
    });
  });
  module2.exports = sortBy;
});

// ../../node_modules/ramda/src/sortWith.js
var require_sortWith = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var sortWith = /* @__PURE__ */ _curry2(function sortWith2(fns, list) {
    return Array.prototype.slice.call(list, 0).sort(function(a, b) {
      var result = 0;
      var i = 0;
      while (result === 0 && i < fns.length) {
        result = fns[i](a, b);
        i += 1;
      }
      return result;
    });
  });
  module2.exports = sortWith;
});

// ../../node_modules/ramda/src/split.js
var require_split = __commonJS((exports2, module2) => {
  var invoker = require_invoker();
  var split = /* @__PURE__ */ invoker(1, "split");
  module2.exports = split;
});

// ../../node_modules/ramda/src/splitAt.js
var require_splitAt = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var length = require_length();
  var slice = require_slice();
  var splitAt = /* @__PURE__ */ _curry2(function splitAt2(index, array) {
    return [slice(0, index, array), slice(index, length(array), array)];
  });
  module2.exports = splitAt;
});

// ../../node_modules/ramda/src/splitEvery.js
var require_splitEvery = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var slice = require_slice();
  var splitEvery = /* @__PURE__ */ _curry2(function splitEvery2(n, list) {
    if (n <= 0) {
      throw new Error("First argument to splitEvery must be a positive integer");
    }
    var result = [];
    var idx = 0;
    while (idx < list.length) {
      result.push(slice(idx, idx += n, list));
    }
    return result;
  });
  module2.exports = splitEvery;
});

// ../../node_modules/ramda/src/splitWhen.js
var require_splitWhen = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var splitWhen = /* @__PURE__ */ _curry2(function splitWhen2(pred, list) {
    var idx = 0;
    var len = list.length;
    var prefix = [];
    while (idx < len && !pred(list[idx])) {
      prefix.push(list[idx]);
      idx += 1;
    }
    return [prefix, Array.prototype.slice.call(list, idx)];
  });
  module2.exports = splitWhen;
});

// ../../node_modules/ramda/src/startsWith.js
var require_startsWith = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var equals = require_equals2();
  var take = require_take();
  var startsWith = /* @__PURE__ */ _curry2(function(prefix, list) {
    return equals(take(prefix.length, list), prefix);
  });
  module2.exports = startsWith;
});

// ../../node_modules/ramda/src/subtract.js
var require_subtract = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var subtract = /* @__PURE__ */ _curry2(function subtract2(a, b) {
    return Number(a) - Number(b);
  });
  module2.exports = subtract;
});

// ../../node_modules/ramda/src/symmetricDifference.js
var require_symmetricDifference = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var concat = require_concat2();
  var difference = require_difference();
  var symmetricDifference = /* @__PURE__ */ _curry2(function symmetricDifference2(list1, list2) {
    return concat(difference(list1, list2), difference(list2, list1));
  });
  module2.exports = symmetricDifference;
});

// ../../node_modules/ramda/src/symmetricDifferenceWith.js
var require_symmetricDifferenceWith = __commonJS((exports2, module2) => {
  var _curry3 = require_curry3();
  var concat = require_concat2();
  var differenceWith = require_differenceWith();
  var symmetricDifferenceWith = /* @__PURE__ */ _curry3(function symmetricDifferenceWith2(pred, list1, list2) {
    return concat(differenceWith(pred, list1, list2), differenceWith(pred, list2, list1));
  });
  module2.exports = symmetricDifferenceWith;
});

// ../../node_modules/ramda/src/takeLastWhile.js
var require_takeLastWhile = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var slice = require_slice();
  var takeLastWhile = /* @__PURE__ */ _curry2(function takeLastWhile2(fn, xs) {
    var idx = xs.length - 1;
    while (idx >= 0 && fn(xs[idx])) {
      idx -= 1;
    }
    return slice(idx + 1, Infinity, xs);
  });
  module2.exports = takeLastWhile;
});

// ../../node_modules/ramda/src/internal/_xtakeWhile.js
var require_xtakeWhile = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var _reduced = require_reduced();
  var _xfBase = require_xfBase();
  var XTakeWhile = /* @__PURE__ */ function() {
    function XTakeWhile2(f, xf) {
      this.xf = xf;
      this.f = f;
    }
    XTakeWhile2.prototype["@@transducer/init"] = _xfBase.init;
    XTakeWhile2.prototype["@@transducer/result"] = _xfBase.result;
    XTakeWhile2.prototype["@@transducer/step"] = function(result, input) {
      return this.f(input) ? this.xf["@@transducer/step"](result, input) : _reduced(result);
    };
    return XTakeWhile2;
  }();
  var _xtakeWhile = /* @__PURE__ */ _curry2(function _xtakeWhile2(f, xf) {
    return new XTakeWhile(f, xf);
  });
  module2.exports = _xtakeWhile;
});

// ../../node_modules/ramda/src/takeWhile.js
var require_takeWhile = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var _dispatchable = require_dispatchable();
  var _xtakeWhile = require_xtakeWhile();
  var slice = require_slice();
  var takeWhile = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable(["takeWhile"], _xtakeWhile, function takeWhile2(fn, xs) {
    var idx = 0;
    var len = xs.length;
    while (idx < len && fn(xs[idx])) {
      idx += 1;
    }
    return slice(0, idx, xs);
  }));
  module2.exports = takeWhile;
});

// ../../node_modules/ramda/src/internal/_xtap.js
var require_xtap = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var _xfBase = require_xfBase();
  var XTap = /* @__PURE__ */ function() {
    function XTap2(f, xf) {
      this.xf = xf;
      this.f = f;
    }
    XTap2.prototype["@@transducer/init"] = _xfBase.init;
    XTap2.prototype["@@transducer/result"] = _xfBase.result;
    XTap2.prototype["@@transducer/step"] = function(result, input) {
      this.f(input);
      return this.xf["@@transducer/step"](result, input);
    };
    return XTap2;
  }();
  var _xtap = /* @__PURE__ */ _curry2(function _xtap2(f, xf) {
    return new XTap(f, xf);
  });
  module2.exports = _xtap;
});

// ../../node_modules/ramda/src/tap.js
var require_tap = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var _dispatchable = require_dispatchable();
  var _xtap = require_xtap();
  var tap = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable([], _xtap, function tap2(fn, x) {
    fn(x);
    return x;
  }));
  module2.exports = tap;
});

// ../../node_modules/ramda/src/internal/_isRegExp.js
var require_isRegExp = __commonJS((exports2, module2) => {
  function _isRegExp(x) {
    return Object.prototype.toString.call(x) === "[object RegExp]";
  }
  module2.exports = _isRegExp;
});

// ../../node_modules/ramda/src/test.js
var require_test = __commonJS((exports2, module2) => {
  var _cloneRegExp = require_cloneRegExp();
  var _curry2 = require_curry2();
  var _isRegExp = require_isRegExp();
  var toString = require_toString2();
  var test = /* @__PURE__ */ _curry2(function test2(pattern, str) {
    if (!_isRegExp(pattern)) {
      throw new TypeError("\u2018test\u2019 requires a value of type RegExp as its first argument; received " + toString(pattern));
    }
    return _cloneRegExp(pattern).test(str);
  });
  module2.exports = test;
});

// ../../node_modules/ramda/src/andThen.js
var require_andThen = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var _assertPromise = require_assertPromise();
  var andThen = /* @__PURE__ */ _curry2(function andThen2(f, p) {
    _assertPromise("andThen", p);
    return p.then(f);
  });
  module2.exports = andThen;
});

// ../../node_modules/ramda/src/toLower.js
var require_toLower = __commonJS((exports2, module2) => {
  var invoker = require_invoker();
  var toLower = /* @__PURE__ */ invoker(0, "toLowerCase");
  module2.exports = toLower;
});

// ../../node_modules/ramda/src/toPairs.js
var require_toPairs = __commonJS((exports2, module2) => {
  var _curry1 = require_curry1();
  var _has = require_has();
  var toPairs = /* @__PURE__ */ _curry1(function toPairs2(obj) {
    var pairs = [];
    for (var prop in obj) {
      if (_has(prop, obj)) {
        pairs[pairs.length] = [prop, obj[prop]];
      }
    }
    return pairs;
  });
  module2.exports = toPairs;
});

// ../../node_modules/ramda/src/toPairsIn.js
var require_toPairsIn = __commonJS((exports2, module2) => {
  var _curry1 = require_curry1();
  var toPairsIn = /* @__PURE__ */ _curry1(function toPairsIn2(obj) {
    var pairs = [];
    for (var prop in obj) {
      pairs[pairs.length] = [prop, obj[prop]];
    }
    return pairs;
  });
  module2.exports = toPairsIn;
});

// ../../node_modules/ramda/src/toUpper.js
var require_toUpper = __commonJS((exports2, module2) => {
  var invoker = require_invoker();
  var toUpper = /* @__PURE__ */ invoker(0, "toUpperCase");
  module2.exports = toUpper;
});

// ../../node_modules/ramda/src/transduce.js
var require_transduce = __commonJS((exports2, module2) => {
  var _reduce = require_reduce();
  var _xwrap = require_xwrap();
  var curryN = require_curryN2();
  var transduce = /* @__PURE__ */ curryN(4, function transduce2(xf, fn, acc, list) {
    return _reduce(xf(typeof fn === "function" ? _xwrap(fn) : fn), acc, list);
  });
  module2.exports = transduce;
});

// ../../node_modules/ramda/src/transpose.js
var require_transpose = __commonJS((exports2, module2) => {
  var _curry1 = require_curry1();
  var transpose = /* @__PURE__ */ _curry1(function transpose2(outerlist) {
    var i = 0;
    var result = [];
    while (i < outerlist.length) {
      var innerlist = outerlist[i];
      var j = 0;
      while (j < innerlist.length) {
        if (typeof result[j] === "undefined") {
          result[j] = [];
        }
        result[j].push(innerlist[j]);
        j += 1;
      }
      i += 1;
    }
    return result;
  });
  module2.exports = transpose;
});

// ../../node_modules/ramda/src/traverse.js
var require_traverse = __commonJS((exports2, module2) => {
  var _curry3 = require_curry3();
  var map = require_map2();
  var sequence = require_sequence();
  var traverse = /* @__PURE__ */ _curry3(function traverse2(of, f, traversable) {
    return typeof traversable["fantasy-land/traverse"] === "function" ? traversable["fantasy-land/traverse"](f, of) : sequence(of, map(f, traversable));
  });
  module2.exports = traverse;
});

// ../../node_modules/ramda/src/trim.js
var require_trim = __commonJS((exports2, module2) => {
  var _curry1 = require_curry1();
  var ws = "	\n\v\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
  var zeroWidth = "\u200B";
  var hasProtoTrim = typeof String.prototype.trim === "function";
  var trim = !hasProtoTrim || /* @__PURE__ */ ws.trim() || !/* @__PURE__ */ zeroWidth.trim() ? /* @__PURE__ */ _curry1(function trim2(str) {
    var beginRx = new RegExp("^[" + ws + "][" + ws + "]*");
    var endRx = new RegExp("[" + ws + "][" + ws + "]*$");
    return str.replace(beginRx, "").replace(endRx, "");
  }) : /* @__PURE__ */ _curry1(function trim2(str) {
    return str.trim();
  });
  module2.exports = trim;
});

// ../../node_modules/ramda/src/tryCatch.js
var require_tryCatch = __commonJS((exports2, module2) => {
  var _arity = require_arity();
  var _concat = require_concat();
  var _curry2 = require_curry2();
  var tryCatch = /* @__PURE__ */ _curry2(function _tryCatch(tryer, catcher) {
    return _arity(tryer.length, function() {
      try {
        return tryer.apply(this, arguments);
      } catch (e) {
        return catcher.apply(this, _concat([e], arguments));
      }
    });
  });
  module2.exports = tryCatch;
});

// ../../node_modules/ramda/src/unapply.js
var require_unapply = __commonJS((exports2, module2) => {
  var _curry1 = require_curry1();
  var unapply = /* @__PURE__ */ _curry1(function unapply2(fn) {
    return function() {
      return fn(Array.prototype.slice.call(arguments, 0));
    };
  });
  module2.exports = unapply;
});

// ../../node_modules/ramda/src/unary.js
var require_unary = __commonJS((exports2, module2) => {
  var _curry1 = require_curry1();
  var nAry = require_nAry();
  var unary = /* @__PURE__ */ _curry1(function unary2(fn) {
    return nAry(1, fn);
  });
  module2.exports = unary;
});

// ../../node_modules/ramda/src/uncurryN.js
var require_uncurryN = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var curryN = require_curryN2();
  var uncurryN = /* @__PURE__ */ _curry2(function uncurryN2(depth, fn) {
    return curryN(depth, function() {
      var currentDepth = 1;
      var value = fn;
      var idx = 0;
      var endIdx;
      while (currentDepth <= depth && typeof value === "function") {
        endIdx = currentDepth === depth ? arguments.length : idx + value.length;
        value = value.apply(this, Array.prototype.slice.call(arguments, idx, endIdx));
        currentDepth += 1;
        idx = endIdx;
      }
      return value;
    });
  });
  module2.exports = uncurryN;
});

// ../../node_modules/ramda/src/unfold.js
var require_unfold = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var unfold = /* @__PURE__ */ _curry2(function unfold2(fn, seed) {
    var pair = fn(seed);
    var result = [];
    while (pair && pair.length) {
      result[result.length] = pair[0];
      pair = fn(pair[1]);
    }
    return result;
  });
  module2.exports = unfold;
});

// ../../node_modules/ramda/src/union.js
var require_union = __commonJS((exports2, module2) => {
  var _concat = require_concat();
  var _curry2 = require_curry2();
  var compose = require_compose();
  var uniq = require_uniq();
  var union = /* @__PURE__ */ _curry2(/* @__PURE__ */ compose(uniq, _concat));
  module2.exports = union;
});

// ../../node_modules/ramda/src/uniqWith.js
var require_uniqWith = __commonJS((exports2, module2) => {
  var _includesWith = require_includesWith();
  var _curry2 = require_curry2();
  var uniqWith = /* @__PURE__ */ _curry2(function uniqWith2(pred, list) {
    var idx = 0;
    var len = list.length;
    var result = [];
    var item;
    while (idx < len) {
      item = list[idx];
      if (!_includesWith(pred, item, result)) {
        result[result.length] = item;
      }
      idx += 1;
    }
    return result;
  });
  module2.exports = uniqWith;
});

// ../../node_modules/ramda/src/unionWith.js
var require_unionWith = __commonJS((exports2, module2) => {
  var _concat = require_concat();
  var _curry3 = require_curry3();
  var uniqWith = require_uniqWith();
  var unionWith = /* @__PURE__ */ _curry3(function unionWith2(pred, list1, list2) {
    return uniqWith(pred, _concat(list1, list2));
  });
  module2.exports = unionWith;
});

// ../../node_modules/ramda/src/unless.js
var require_unless = __commonJS((exports2, module2) => {
  var _curry3 = require_curry3();
  var unless = /* @__PURE__ */ _curry3(function unless2(pred, whenFalseFn, x) {
    return pred(x) ? x : whenFalseFn(x);
  });
  module2.exports = unless;
});

// ../../node_modules/ramda/src/unnest.js
var require_unnest = __commonJS((exports2, module2) => {
  var _identity = require_identity();
  var chain = require_chain();
  var unnest = /* @__PURE__ */ chain(_identity);
  module2.exports = unnest;
});

// ../../node_modules/ramda/src/until.js
var require_until = __commonJS((exports2, module2) => {
  var _curry3 = require_curry3();
  var until = /* @__PURE__ */ _curry3(function until2(pred, fn, init) {
    var val = init;
    while (!pred(val)) {
      val = fn(val);
    }
    return val;
  });
  module2.exports = until;
});

// ../../node_modules/ramda/src/valuesIn.js
var require_valuesIn = __commonJS((exports2, module2) => {
  var _curry1 = require_curry1();
  var valuesIn = /* @__PURE__ */ _curry1(function valuesIn2(obj) {
    var prop;
    var vs = [];
    for (prop in obj) {
      vs[vs.length] = obj[prop];
    }
    return vs;
  });
  module2.exports = valuesIn;
});

// ../../node_modules/ramda/src/view.js
var require_view = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var Const = function(x) {
    return {
      value: x,
      "fantasy-land/map": function() {
        return this;
      }
    };
  };
  var view = /* @__PURE__ */ _curry2(function view2(lens, x) {
    return lens(Const)(x).value;
  });
  module2.exports = view;
});

// ../../node_modules/ramda/src/when.js
var require_when = __commonJS((exports2, module2) => {
  var _curry3 = require_curry3();
  var when = /* @__PURE__ */ _curry3(function when2(pred, whenTrueFn, x) {
    return pred(x) ? whenTrueFn(x) : x;
  });
  module2.exports = when;
});

// ../../node_modules/ramda/src/where.js
var require_where = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var _has = require_has();
  var where = /* @__PURE__ */ _curry2(function where2(spec, testObj) {
    for (var prop in spec) {
      if (_has(prop, spec) && !spec[prop](testObj[prop])) {
        return false;
      }
    }
    return true;
  });
  module2.exports = where;
});

// ../../node_modules/ramda/src/whereEq.js
var require_whereEq = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var equals = require_equals2();
  var map = require_map2();
  var where = require_where();
  var whereEq = /* @__PURE__ */ _curry2(function whereEq2(spec, testObj) {
    return where(map(equals, spec), testObj);
  });
  module2.exports = whereEq;
});

// ../../node_modules/ramda/src/without.js
var require_without = __commonJS((exports2, module2) => {
  var _includes = require_includes();
  var _curry2 = require_curry2();
  var flip = require_flip();
  var reject = require_reject();
  var without = /* @__PURE__ */ _curry2(function(xs, list) {
    return reject(flip(_includes)(xs), list);
  });
  module2.exports = without;
});

// ../../node_modules/ramda/src/xor.js
var require_xor = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var xor = /* @__PURE__ */ _curry2(function xor2(a, b) {
    return Boolean(!a ^ !b);
  });
  module2.exports = xor;
});

// ../../node_modules/ramda/src/xprod.js
var require_xprod = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var xprod = /* @__PURE__ */ _curry2(function xprod2(a, b) {
    var idx = 0;
    var ilen = a.length;
    var j;
    var jlen = b.length;
    var result = [];
    while (idx < ilen) {
      j = 0;
      while (j < jlen) {
        result[result.length] = [a[idx], b[j]];
        j += 1;
      }
      idx += 1;
    }
    return result;
  });
  module2.exports = xprod;
});

// ../../node_modules/ramda/src/zip.js
var require_zip = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var zip = /* @__PURE__ */ _curry2(function zip2(a, b) {
    var rv = [];
    var idx = 0;
    var len = Math.min(a.length, b.length);
    while (idx < len) {
      rv[idx] = [a[idx], b[idx]];
      idx += 1;
    }
    return rv;
  });
  module2.exports = zip;
});

// ../../node_modules/ramda/src/zipObj.js
var require_zipObj = __commonJS((exports2, module2) => {
  var _curry2 = require_curry2();
  var zipObj = /* @__PURE__ */ _curry2(function zipObj2(keys, values) {
    var idx = 0;
    var len = Math.min(keys.length, values.length);
    var out = {};
    while (idx < len) {
      out[keys[idx]] = values[idx];
      idx += 1;
    }
    return out;
  });
  module2.exports = zipObj;
});

// ../../node_modules/ramda/src/zipWith.js
var require_zipWith = __commonJS((exports2, module2) => {
  var _curry3 = require_curry3();
  var zipWith = /* @__PURE__ */ _curry3(function zipWith2(fn, a, b) {
    var rv = [];
    var idx = 0;
    var len = Math.min(a.length, b.length);
    while (idx < len) {
      rv[idx] = fn(a[idx], b[idx]);
      idx += 1;
    }
    return rv;
  });
  module2.exports = zipWith;
});

// ../../node_modules/ramda/src/thunkify.js
var require_thunkify = __commonJS((exports2, module2) => {
  var curryN = require_curryN2();
  var _curry1 = require_curry1();
  var thunkify = /* @__PURE__ */ _curry1(function thunkify2(fn) {
    return curryN(fn.length, function createThunk() {
      var fnArgs = arguments;
      return function invokeThunk() {
        return fn.apply(this, fnArgs);
      };
    });
  });
  module2.exports = thunkify;
});

// ../../node_modules/ramda/src/index.mjs
var require_src = __commonJS((exports2) => {
  __export(exports2, {
    F: () => import_F.default,
    T: () => import_T.default,
    __: () => import__.default,
    add: () => import_add.default,
    addIndex: () => import_addIndex.default,
    adjust: () => import_adjust.default,
    all: () => import_all.default,
    allPass: () => import_allPass.default,
    always: () => import_always.default,
    and: () => import_and.default,
    andThen: () => import_andThen.default,
    any: () => import_any.default,
    anyPass: () => import_anyPass.default,
    ap: () => import_ap.default,
    aperture: () => import_aperture.default,
    append: () => import_append.default,
    apply: () => import_apply.default,
    applySpec: () => import_applySpec.default,
    applyTo: () => import_applyTo.default,
    ascend: () => import_ascend.default,
    assoc: () => import_assoc.default,
    assocPath: () => import_assocPath.default,
    binary: () => import_binary.default,
    bind: () => import_bind.default,
    both: () => import_both.default,
    call: () => import_call.default,
    chain: () => import_chain.default,
    clamp: () => import_clamp.default,
    clone: () => import_clone.default,
    comparator: () => import_comparator.default,
    complement: () => import_complement.default,
    compose: () => import_compose.default,
    composeK: () => import_composeK.default,
    composeP: () => import_composeP.default,
    composeWith: () => import_composeWith.default,
    concat: () => import_concat.default,
    cond: () => import_cond.default,
    construct: () => import_construct.default,
    constructN: () => import_constructN.default,
    contains: () => import_contains.default,
    converge: () => import_converge.default,
    countBy: () => import_countBy.default,
    curry: () => import_curry.default,
    curryN: () => import_curryN.default,
    dec: () => import_dec.default,
    defaultTo: () => import_defaultTo.default,
    descend: () => import_descend.default,
    difference: () => import_difference.default,
    differenceWith: () => import_differenceWith.default,
    dissoc: () => import_dissoc.default,
    dissocPath: () => import_dissocPath.default,
    divide: () => import_divide.default,
    drop: () => import_drop.default,
    dropLast: () => import_dropLast.default,
    dropLastWhile: () => import_dropLastWhile.default,
    dropRepeats: () => import_dropRepeats.default,
    dropRepeatsWith: () => import_dropRepeatsWith.default,
    dropWhile: () => import_dropWhile.default,
    either: () => import_either.default,
    empty: () => import_empty.default,
    endsWith: () => import_endsWith.default,
    eqBy: () => import_eqBy.default,
    eqProps: () => import_eqProps.default,
    equals: () => import_equals.default,
    evolve: () => import_evolve.default,
    filter: () => import_filter.default,
    find: () => import_find.default,
    findIndex: () => import_findIndex.default,
    findLast: () => import_findLast.default,
    findLastIndex: () => import_findLastIndex.default,
    flatten: () => import_flatten.default,
    flip: () => import_flip.default,
    forEach: () => import_forEach.default,
    forEachObjIndexed: () => import_forEachObjIndexed.default,
    fromPairs: () => import_fromPairs.default,
    groupBy: () => import_groupBy.default,
    groupWith: () => import_groupWith.default,
    gt: () => import_gt.default,
    gte: () => import_gte.default,
    has: () => import_has.default,
    hasIn: () => import_hasIn.default,
    hasPath: () => import_hasPath.default,
    head: () => import_head.default,
    identical: () => import_identical.default,
    identity: () => import_identity.default,
    ifElse: () => import_ifElse.default,
    inc: () => import_inc.default,
    includes: () => import_includes.default,
    indexBy: () => import_indexBy.default,
    indexOf: () => import_indexOf.default,
    init: () => import_init.default,
    innerJoin: () => import_innerJoin.default,
    insert: () => import_insert.default,
    insertAll: () => import_insertAll.default,
    intersection: () => import_intersection.default,
    intersperse: () => import_intersperse.default,
    into: () => import_into.default,
    invert: () => import_invert.default,
    invertObj: () => import_invertObj.default,
    invoker: () => import_invoker.default,
    is: () => import_is.default,
    isEmpty: () => import_isEmpty.default,
    isNil: () => import_isNil.default,
    join: () => import_join.default,
    juxt: () => import_juxt.default,
    keys: () => import_keys.default,
    keysIn: () => import_keysIn.default,
    last: () => import_last.default,
    lastIndexOf: () => import_lastIndexOf.default,
    length: () => import_length.default,
    lens: () => import_lens.default,
    lensIndex: () => import_lensIndex.default,
    lensPath: () => import_lensPath.default,
    lensProp: () => import_lensProp.default,
    lift: () => import_lift.default,
    liftN: () => import_liftN.default,
    lt: () => import_lt.default,
    lte: () => import_lte.default,
    map: () => import_map.default,
    mapAccum: () => import_mapAccum.default,
    mapAccumRight: () => import_mapAccumRight.default,
    mapObjIndexed: () => import_mapObjIndexed.default,
    match: () => import_match.default,
    mathMod: () => import_mathMod.default,
    max: () => import_max.default,
    maxBy: () => import_maxBy.default,
    mean: () => import_mean.default,
    median: () => import_median.default,
    memoizeWith: () => import_memoizeWith.default,
    merge: () => import_merge.default,
    mergeAll: () => import_mergeAll.default,
    mergeDeepLeft: () => import_mergeDeepLeft.default,
    mergeDeepRight: () => import_mergeDeepRight.default,
    mergeDeepWith: () => import_mergeDeepWith.default,
    mergeDeepWithKey: () => import_mergeDeepWithKey.default,
    mergeLeft: () => import_mergeLeft.default,
    mergeRight: () => import_mergeRight.default,
    mergeWith: () => import_mergeWith.default,
    mergeWithKey: () => import_mergeWithKey.default,
    min: () => import_min.default,
    minBy: () => import_minBy.default,
    modulo: () => import_modulo.default,
    move: () => import_move.default,
    multiply: () => import_multiply.default,
    nAry: () => import_nAry.default,
    negate: () => import_negate.default,
    none: () => import_none.default,
    not: () => import_not.default,
    nth: () => import_nth.default,
    nthArg: () => import_nthArg.default,
    o: () => import_o.default,
    objOf: () => import_objOf.default,
    of: () => import_of.default,
    omit: () => import_omit.default,
    once: () => import_once.default,
    or: () => import_or.default,
    otherwise: () => import_otherwise.default,
    over: () => import_over.default,
    pair: () => import_pair.default,
    partial: () => import_partial.default,
    partialRight: () => import_partialRight.default,
    partition: () => import_partition.default,
    path: () => import_path.default,
    pathEq: () => import_pathEq.default,
    pathOr: () => import_pathOr.default,
    pathSatisfies: () => import_pathSatisfies.default,
    paths: () => import_paths.default,
    pick: () => import_pick.default,
    pickAll: () => import_pickAll.default,
    pickBy: () => import_pickBy.default,
    pipe: () => import_pipe.default,
    pipeK: () => import_pipeK.default,
    pipeP: () => import_pipeP.default,
    pipeWith: () => import_pipeWith.default,
    pluck: () => import_pluck.default,
    prepend: () => import_prepend.default,
    product: () => import_product.default,
    project: () => import_project.default,
    prop: () => import_prop.default,
    propEq: () => import_propEq.default,
    propIs: () => import_propIs.default,
    propOr: () => import_propOr.default,
    propSatisfies: () => import_propSatisfies.default,
    props: () => import_props.default,
    range: () => import_range.default,
    reduce: () => import_reduce.default,
    reduceBy: () => import_reduceBy.default,
    reduceRight: () => import_reduceRight.default,
    reduceWhile: () => import_reduceWhile.default,
    reduced: () => import_reduced.default,
    reject: () => import_reject.default,
    remove: () => import_remove.default,
    repeat: () => import_repeat.default,
    replace: () => import_replace.default,
    reverse: () => import_reverse.default,
    scan: () => import_scan.default,
    sequence: () => import_sequence.default,
    set: () => import_set.default,
    slice: () => import_slice.default,
    sort: () => import_sort.default,
    sortBy: () => import_sortBy.default,
    sortWith: () => import_sortWith.default,
    split: () => import_split.default,
    splitAt: () => import_splitAt.default,
    splitEvery: () => import_splitEvery.default,
    splitWhen: () => import_splitWhen.default,
    startsWith: () => import_startsWith.default,
    subtract: () => import_subtract.default,
    sum: () => import_sum.default,
    symmetricDifference: () => import_symmetricDifference.default,
    symmetricDifferenceWith: () => import_symmetricDifferenceWith.default,
    tail: () => import_tail.default,
    take: () => import_take.default,
    takeLast: () => import_takeLast.default,
    takeLastWhile: () => import_takeLastWhile.default,
    takeWhile: () => import_takeWhile.default,
    tap: () => import_tap.default,
    test: () => import_test.default,
    thunkify: () => import_thunkify.default,
    times: () => import_times.default,
    toLower: () => import_toLower.default,
    toPairs: () => import_toPairs.default,
    toPairsIn: () => import_toPairsIn.default,
    toString: () => import_toString.default,
    toUpper: () => import_toUpper.default,
    transduce: () => import_transduce.default,
    transpose: () => import_transpose.default,
    traverse: () => import_traverse.default,
    trim: () => import_trim.default,
    tryCatch: () => import_tryCatch.default,
    type: () => import_type.default,
    unapply: () => import_unapply.default,
    unary: () => import_unary.default,
    uncurryN: () => import_uncurryN.default,
    unfold: () => import_unfold.default,
    union: () => import_union.default,
    unionWith: () => import_unionWith.default,
    uniq: () => import_uniq.default,
    uniqBy: () => import_uniqBy.default,
    uniqWith: () => import_uniqWith.default,
    unless: () => import_unless.default,
    unnest: () => import_unnest.default,
    until: () => import_until.default,
    update: () => import_update.default,
    useWith: () => import_useWith.default,
    values: () => import_values.default,
    valuesIn: () => import_valuesIn.default,
    view: () => import_view.default,
    when: () => import_when.default,
    where: () => import_where.default,
    whereEq: () => import_whereEq.default,
    without: () => import_without.default,
    xor: () => import_xor.default,
    xprod: () => import_xprod.default,
    zip: () => import_zip.default,
    zipObj: () => import_zipObj.default,
    zipWith: () => import_zipWith.default
  });
  var import_F = __toModule(require_F());
  var import_T = __toModule(require_T());
  var import__ = __toModule(require__());
  var import_add = __toModule(require_add());
  var import_addIndex = __toModule(require_addIndex());
  var import_adjust = __toModule(require_adjust());
  var import_all = __toModule(require_all());
  var import_allPass = __toModule(require_allPass());
  var import_always = __toModule(require_always());
  var import_and = __toModule(require_and());
  var import_any = __toModule(require_any());
  var import_anyPass = __toModule(require_anyPass());
  var import_ap = __toModule(require_ap());
  var import_aperture = __toModule(require_aperture2());
  var import_append = __toModule(require_append());
  var import_apply = __toModule(require_apply());
  var import_applySpec = __toModule(require_applySpec());
  var import_applyTo = __toModule(require_applyTo());
  var import_ascend = __toModule(require_ascend());
  var import_assoc = __toModule(require_assoc());
  var import_assocPath = __toModule(require_assocPath());
  var import_binary = __toModule(require_binary());
  var import_bind = __toModule(require_bind());
  var import_both = __toModule(require_both());
  var import_call = __toModule(require_call());
  var import_chain = __toModule(require_chain());
  var import_clamp = __toModule(require_clamp());
  var import_clone = __toModule(require_clone2());
  var import_comparator = __toModule(require_comparator());
  var import_complement = __toModule(require_complement());
  var import_compose = __toModule(require_compose());
  var import_composeK = __toModule(require_composeK());
  var import_composeP = __toModule(require_composeP());
  var import_composeWith = __toModule(require_composeWith());
  var import_concat = __toModule(require_concat2());
  var import_cond = __toModule(require_cond());
  var import_construct = __toModule(require_construct());
  var import_constructN = __toModule(require_constructN());
  var import_contains = __toModule(require_contains());
  var import_converge = __toModule(require_converge());
  var import_countBy = __toModule(require_countBy());
  var import_curry = __toModule(require_curry());
  var import_curryN = __toModule(require_curryN2());
  var import_dec = __toModule(require_dec());
  var import_defaultTo = __toModule(require_defaultTo());
  var import_descend = __toModule(require_descend());
  var import_difference = __toModule(require_difference());
  var import_differenceWith = __toModule(require_differenceWith());
  var import_dissoc = __toModule(require_dissoc());
  var import_dissocPath = __toModule(require_dissocPath());
  var import_divide = __toModule(require_divide());
  var import_drop = __toModule(require_drop());
  var import_dropLast = __toModule(require_dropLast2());
  var import_dropLastWhile = __toModule(require_dropLastWhile2());
  var import_dropRepeats = __toModule(require_dropRepeats());
  var import_dropRepeatsWith = __toModule(require_dropRepeatsWith());
  var import_dropWhile = __toModule(require_dropWhile());
  var import_either = __toModule(require_either());
  var import_empty = __toModule(require_empty());
  var import_endsWith = __toModule(require_endsWith());
  var import_eqBy = __toModule(require_eqBy());
  var import_eqProps = __toModule(require_eqProps());
  var import_equals = __toModule(require_equals2());
  var import_evolve = __toModule(require_evolve());
  var import_filter = __toModule(require_filter2());
  var import_find = __toModule(require_find());
  var import_findIndex = __toModule(require_findIndex());
  var import_findLast = __toModule(require_findLast());
  var import_findLastIndex = __toModule(require_findLastIndex());
  var import_flatten = __toModule(require_flatten());
  var import_flip = __toModule(require_flip());
  var import_forEach = __toModule(require_forEach());
  var import_forEachObjIndexed = __toModule(require_forEachObjIndexed());
  var import_fromPairs = __toModule(require_fromPairs());
  var import_groupBy = __toModule(require_groupBy());
  var import_groupWith = __toModule(require_groupWith());
  var import_gt = __toModule(require_gt());
  var import_gte = __toModule(require_gte());
  var import_has = __toModule(require_has2());
  var import_hasIn = __toModule(require_hasIn());
  var import_hasPath = __toModule(require_hasPath());
  var import_head = __toModule(require_head());
  var import_identical = __toModule(require_identical());
  var import_identity = __toModule(require_identity2());
  var import_ifElse = __toModule(require_ifElse());
  var import_inc = __toModule(require_inc());
  var import_includes = __toModule(require_includes2());
  var import_indexBy = __toModule(require_indexBy());
  var import_indexOf = __toModule(require_indexOf2());
  var import_init = __toModule(require_init());
  var import_innerJoin = __toModule(require_innerJoin());
  var import_insert = __toModule(require_insert());
  var import_insertAll = __toModule(require_insertAll());
  var import_intersection = __toModule(require_intersection());
  var import_intersperse = __toModule(require_intersperse());
  var import_into = __toModule(require_into());
  var import_invert = __toModule(require_invert());
  var import_invertObj = __toModule(require_invertObj());
  var import_invoker = __toModule(require_invoker());
  var import_is = __toModule(require_is());
  var import_isEmpty = __toModule(require_isEmpty());
  var import_isNil = __toModule(require_isNil());
  var import_join = __toModule(require_join());
  var import_juxt = __toModule(require_juxt());
  var import_keys = __toModule(require_keys());
  var import_keysIn = __toModule(require_keysIn());
  var import_last = __toModule(require_last());
  var import_lastIndexOf = __toModule(require_lastIndexOf());
  var import_length = __toModule(require_length());
  var import_lens = __toModule(require_lens());
  var import_lensIndex = __toModule(require_lensIndex());
  var import_lensPath = __toModule(require_lensPath());
  var import_lensProp = __toModule(require_lensProp());
  var import_lift = __toModule(require_lift());
  var import_liftN = __toModule(require_liftN());
  var import_lt = __toModule(require_lt());
  var import_lte = __toModule(require_lte());
  var import_map = __toModule(require_map2());
  var import_mapAccum = __toModule(require_mapAccum());
  var import_mapAccumRight = __toModule(require_mapAccumRight());
  var import_mapObjIndexed = __toModule(require_mapObjIndexed());
  var import_match = __toModule(require_match());
  var import_mathMod = __toModule(require_mathMod());
  var import_max = __toModule(require_max());
  var import_maxBy = __toModule(require_maxBy());
  var import_mean = __toModule(require_mean());
  var import_median = __toModule(require_median());
  var import_memoizeWith = __toModule(require_memoizeWith());
  var import_merge = __toModule(require_merge());
  var import_mergeAll = __toModule(require_mergeAll());
  var import_mergeDeepLeft = __toModule(require_mergeDeepLeft());
  var import_mergeDeepRight = __toModule(require_mergeDeepRight());
  var import_mergeDeepWith = __toModule(require_mergeDeepWith());
  var import_mergeDeepWithKey = __toModule(require_mergeDeepWithKey());
  var import_mergeLeft = __toModule(require_mergeLeft());
  var import_mergeRight = __toModule(require_mergeRight());
  var import_mergeWith = __toModule(require_mergeWith());
  var import_mergeWithKey = __toModule(require_mergeWithKey());
  var import_min = __toModule(require_min());
  var import_minBy = __toModule(require_minBy());
  var import_modulo = __toModule(require_modulo());
  var import_move = __toModule(require_move());
  var import_multiply = __toModule(require_multiply());
  var import_nAry = __toModule(require_nAry());
  var import_negate = __toModule(require_negate());
  var import_none = __toModule(require_none());
  var import_not = __toModule(require_not());
  var import_nth = __toModule(require_nth());
  var import_nthArg = __toModule(require_nthArg());
  var import_o = __toModule(require_o());
  var import_objOf = __toModule(require_objOf());
  var import_of = __toModule(require_of2());
  var import_omit = __toModule(require_omit());
  var import_once = __toModule(require_once());
  var import_or = __toModule(require_or());
  var import_otherwise = __toModule(require_otherwise());
  var import_over = __toModule(require_over());
  var import_pair = __toModule(require_pair());
  var import_partial = __toModule(require_partial());
  var import_partialRight = __toModule(require_partialRight());
  var import_partition = __toModule(require_partition());
  var import_path = __toModule(require_path());
  var import_paths = __toModule(require_paths());
  var import_pathEq = __toModule(require_pathEq());
  var import_pathOr = __toModule(require_pathOr());
  var import_pathSatisfies = __toModule(require_pathSatisfies());
  var import_pick = __toModule(require_pick());
  var import_pickAll = __toModule(require_pickAll());
  var import_pickBy = __toModule(require_pickBy());
  var import_pipe = __toModule(require_pipe2());
  var import_pipeK = __toModule(require_pipeK());
  var import_pipeP = __toModule(require_pipeP2());
  var import_pipeWith = __toModule(require_pipeWith());
  var import_pluck = __toModule(require_pluck());
  var import_prepend = __toModule(require_prepend());
  var import_product = __toModule(require_product());
  var import_project = __toModule(require_project());
  var import_prop = __toModule(require_prop());
  var import_propEq = __toModule(require_propEq());
  var import_propIs = __toModule(require_propIs());
  var import_propOr = __toModule(require_propOr());
  var import_propSatisfies = __toModule(require_propSatisfies());
  var import_props = __toModule(require_props());
  var import_range = __toModule(require_range());
  var import_reduce = __toModule(require_reduce2());
  var import_reduceBy = __toModule(require_reduceBy());
  var import_reduceRight = __toModule(require_reduceRight());
  var import_reduceWhile = __toModule(require_reduceWhile());
  var import_reduced = __toModule(require_reduced2());
  var import_reject = __toModule(require_reject());
  var import_remove = __toModule(require_remove());
  var import_repeat = __toModule(require_repeat());
  var import_replace = __toModule(require_replace());
  var import_reverse = __toModule(require_reverse());
  var import_scan = __toModule(require_scan());
  var import_sequence = __toModule(require_sequence());
  var import_set = __toModule(require_set());
  var import_slice = __toModule(require_slice());
  var import_sort = __toModule(require_sort());
  var import_sortBy = __toModule(require_sortBy());
  var import_sortWith = __toModule(require_sortWith());
  var import_split = __toModule(require_split());
  var import_splitAt = __toModule(require_splitAt());
  var import_splitEvery = __toModule(require_splitEvery());
  var import_splitWhen = __toModule(require_splitWhen());
  var import_startsWith = __toModule(require_startsWith());
  var import_subtract = __toModule(require_subtract());
  var import_sum = __toModule(require_sum());
  var import_symmetricDifference = __toModule(require_symmetricDifference());
  var import_symmetricDifferenceWith = __toModule(require_symmetricDifferenceWith());
  var import_tail = __toModule(require_tail());
  var import_take = __toModule(require_take());
  var import_takeLast = __toModule(require_takeLast());
  var import_takeLastWhile = __toModule(require_takeLastWhile());
  var import_takeWhile = __toModule(require_takeWhile());
  var import_tap = __toModule(require_tap());
  var import_test = __toModule(require_test());
  var import_andThen = __toModule(require_andThen());
  var import_times = __toModule(require_times());
  var import_toLower = __toModule(require_toLower());
  var import_toPairs = __toModule(require_toPairs());
  var import_toPairsIn = __toModule(require_toPairsIn());
  var import_toString = __toModule(require_toString2());
  var import_toUpper = __toModule(require_toUpper());
  var import_transduce = __toModule(require_transduce());
  var import_transpose = __toModule(require_transpose());
  var import_traverse = __toModule(require_traverse());
  var import_trim = __toModule(require_trim());
  var import_tryCatch = __toModule(require_tryCatch());
  var import_type = __toModule(require_type());
  var import_unapply = __toModule(require_unapply());
  var import_unary = __toModule(require_unary());
  var import_uncurryN = __toModule(require_uncurryN());
  var import_unfold = __toModule(require_unfold());
  var import_union = __toModule(require_union());
  var import_unionWith = __toModule(require_unionWith());
  var import_uniq = __toModule(require_uniq());
  var import_uniqBy = __toModule(require_uniqBy());
  var import_uniqWith = __toModule(require_uniqWith());
  var import_unless = __toModule(require_unless());
  var import_unnest = __toModule(require_unnest());
  var import_until = __toModule(require_until());
  var import_update = __toModule(require_update());
  var import_useWith = __toModule(require_useWith());
  var import_values = __toModule(require_values());
  var import_valuesIn = __toModule(require_valuesIn());
  var import_view = __toModule(require_view());
  var import_when = __toModule(require_when());
  var import_where = __toModule(require_where());
  var import_whereEq = __toModule(require_whereEq());
  var import_without = __toModule(require_without());
  var import_xor = __toModule(require_xor());
  var import_xprod = __toModule(require_xprod());
  var import_zip = __toModule(require_zip());
  var import_zipObj = __toModule(require_zipObj());
  var import_zipWith = __toModule(require_zipWith());
  var import_thunkify = __toModule(require_thunkify());
});

// ../../node_modules/isobject/index.js
var require_isobject = __commonJS((exports2, module2) => {
  /*!
   * isobject <https://github.com/jonschlinkert/isobject>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   */
  "use strict";
  module2.exports = function isObject(val) {
    return val != null && typeof val === "object" && Array.isArray(val) === false;
  };
});

// ../../node_modules/is-extendable/node_modules/is-plain-object/index.js
var require_is_plain_object = __commonJS((exports2, module2) => {
  /*!
   * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   */
  "use strict";
  var isObject = require_isobject();
  function isObjectObject(o) {
    return isObject(o) === true && Object.prototype.toString.call(o) === "[object Object]";
  }
  module2.exports = function isPlainObject(o) {
    var ctor, prot;
    if (isObjectObject(o) === false)
      return false;
    ctor = o.constructor;
    if (typeof ctor !== "function")
      return false;
    prot = ctor.prototype;
    if (isObjectObject(prot) === false)
      return false;
    if (prot.hasOwnProperty("isPrototypeOf") === false) {
      return false;
    }
    return true;
  };
});

// ../../node_modules/is-extendable/index.js
var require_is_extendable = __commonJS((exports2, module2) => {
  /*!
   * is-extendable <https://github.com/jonschlinkert/is-extendable>
   *
   * Copyright (c) 2015-2017, Jon Schlinkert.
   * Released under the MIT License.
   */
  "use strict";
  var isPlainObject = require_is_plain_object();
  module2.exports = function isExtendable(val) {
    return isPlainObject(val) || typeof val === "function" || Array.isArray(val);
  };
});

// ../../node_modules/object.omit/index.js
var require_object = __commonJS((exports2, module2) => {
  /*!
   * object.omit <https://github.com/jonschlinkert/object.omit>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   */
  "use strict";
  var isObject = require_is_extendable();
  module2.exports = function omit2(obj, props, fn) {
    if (!isObject(obj))
      return {};
    if (typeof props === "function") {
      fn = props;
      props = [];
    }
    if (typeof props === "string") {
      props = [props];
    }
    var isFunction = typeof fn === "function";
    var keys = Object.keys(obj);
    var res = {};
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var val = obj[key];
      if (!props || props.indexOf(key) === -1 && (!isFunction || fn(val, key, obj))) {
        res[key] = val;
      }
    }
    return res;
  };
});

// ../../node_modules/flatted/cjs/index.js
var require_cjs = __commonJS((exports2) => {
  "use strict";
  /*! (c) 2020 Andrea Giammarchi */
  var {parse: $parse, stringify: $stringify} = JSON;
  var {keys} = Object;
  var Primitive = String;
  var primitive = "string";
  var ignore = {};
  var object = "object";
  var noop = (_, value) => value;
  var primitives = (value) => value instanceof Primitive ? Primitive(value) : value;
  var Primitives = (_, value) => typeof value === primitive ? new Primitive(value) : value;
  var revive = (input, parsed, output, $) => {
    const lazy = [];
    for (let ke = keys(output), {length} = ke, y = 0; y < length; y++) {
      const k = ke[y];
      const value = output[k];
      if (value instanceof Primitive) {
        const tmp = input[value];
        if (typeof tmp === object && !parsed.has(tmp)) {
          parsed.add(tmp);
          output[k] = ignore;
          lazy.push({k, a: [input, parsed, tmp, $]});
        } else
          output[k] = $.call(output, k, tmp);
      } else if (output[k] !== ignore)
        output[k] = $.call(output, k, value);
    }
    for (let {length} = lazy, i = 0; i < length; i++) {
      const {k, a} = lazy[i];
      output[k] = $.call(output, k, revive.apply(null, a));
    }
    return output;
  };
  var set = (known, input, value) => {
    const index = Primitive(input.push(value) - 1);
    known.set(value, index);
    return index;
  };
  var parse = (text, reviver) => {
    const input = $parse(text, Primitives).map(primitives);
    const value = input[0];
    const $ = reviver || noop;
    const tmp = typeof value === object && value ? revive(input, new Set(), value, $) : value;
    return $.call({"": tmp}, "", tmp);
  };
  exports2.parse = parse;
  var stringify = (value, replacer, space) => {
    const $ = replacer && typeof replacer === object ? (k, v) => k === "" || -1 < replacer.indexOf(k) ? v : void 0 : replacer || noop;
    const known = new Map();
    const input = [];
    const output = [];
    let i = +set(known, input, $.call({"": value}, "", value));
    let firstRun = !i;
    while (i < input.length) {
      firstRun = true;
      output[i] = $stringify(input[i++], replace, space);
    }
    return "[" + output.join(",") + "]";
    function replace(key, value2) {
      if (firstRun) {
        firstRun = !firstRun;
        return value2;
      }
      const after = $.call(this, key, value2);
      switch (typeof after) {
        case object:
          if (after === null)
            return after;
        case primitive:
          return known.get(after) || set(known, input, after);
      }
      return after;
    }
  };
  exports2.stringify = stringify;
});

// ../../node_modules/flat-cache/src/utils.js
var require_utils = __commonJS((exports2, module2) => {
  var fs = require("fs");
  var path = require("path");
  var flatted = require_cjs();
  module2.exports = {
    tryParse: function(filePath, defaultValue) {
      var result;
      try {
        result = this.readJSON(filePath);
      } catch (ex) {
        result = defaultValue;
      }
      return result;
    },
    readJSON: function(filePath) {
      return flatted.parse(fs.readFileSync(filePath, {
        encoding: "utf8"
      }));
    },
    writeJSON: function(filePath, data) {
      fs.mkdirSync(path.dirname(filePath), {
        recursive: true
      });
      fs.writeFileSync(filePath, flatted.stringify(data));
    }
  };
});

// ../../node_modules/fs.realpath/old.js
var require_old = __commonJS((exports2) => {
  var pathModule = require("path");
  var isWindows = process.platform === "win32";
  var fs = require("fs");
  var DEBUG = process.env.NODE_DEBUG && /fs/.test(process.env.NODE_DEBUG);
  function rethrow() {
    var callback;
    if (DEBUG) {
      var backtrace = new Error();
      callback = debugCallback;
    } else
      callback = missingCallback;
    return callback;
    function debugCallback(err) {
      if (err) {
        backtrace.message = err.message;
        err = backtrace;
        missingCallback(err);
      }
    }
    function missingCallback(err) {
      if (err) {
        if (process.throwDeprecation)
          throw err;
        else if (!process.noDeprecation) {
          var msg = "fs: missing callback " + (err.stack || err.message);
          if (process.traceDeprecation)
            console.trace(msg);
          else
            console.error(msg);
        }
      }
    }
  }
  function maybeCallback(cb) {
    return typeof cb === "function" ? cb : rethrow();
  }
  var normalize = pathModule.normalize;
  if (isWindows) {
    nextPartRe = /(.*?)(?:[\/\\]+|$)/g;
  } else {
    nextPartRe = /(.*?)(?:[\/]+|$)/g;
  }
  var nextPartRe;
  if (isWindows) {
    splitRootRe = /^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/][^\\\/]+)?[\\\/]*/;
  } else {
    splitRootRe = /^[\/]*/;
  }
  var splitRootRe;
  exports2.realpathSync = function realpathSync(p, cache) {
    p = pathModule.resolve(p);
    if (cache && Object.prototype.hasOwnProperty.call(cache, p)) {
      return cache[p];
    }
    var original = p, seenLinks = {}, knownHard = {};
    var pos;
    var current;
    var base;
    var previous;
    start();
    function start() {
      var m = splitRootRe.exec(p);
      pos = m[0].length;
      current = m[0];
      base = m[0];
      previous = "";
      if (isWindows && !knownHard[base]) {
        fs.lstatSync(base);
        knownHard[base] = true;
      }
    }
    while (pos < p.length) {
      nextPartRe.lastIndex = pos;
      var result = nextPartRe.exec(p);
      previous = current;
      current += result[0];
      base = previous + result[1];
      pos = nextPartRe.lastIndex;
      if (knownHard[base] || cache && cache[base] === base) {
        continue;
      }
      var resolvedLink;
      if (cache && Object.prototype.hasOwnProperty.call(cache, base)) {
        resolvedLink = cache[base];
      } else {
        var stat = fs.lstatSync(base);
        if (!stat.isSymbolicLink()) {
          knownHard[base] = true;
          if (cache)
            cache[base] = base;
          continue;
        }
        var linkTarget = null;
        if (!isWindows) {
          var id = stat.dev.toString(32) + ":" + stat.ino.toString(32);
          if (seenLinks.hasOwnProperty(id)) {
            linkTarget = seenLinks[id];
          }
        }
        if (linkTarget === null) {
          fs.statSync(base);
          linkTarget = fs.readlinkSync(base);
        }
        resolvedLink = pathModule.resolve(previous, linkTarget);
        if (cache)
          cache[base] = resolvedLink;
        if (!isWindows)
          seenLinks[id] = linkTarget;
      }
      p = pathModule.resolve(resolvedLink, p.slice(pos));
      start();
    }
    if (cache)
      cache[original] = p;
    return p;
  };
  exports2.realpath = function realpath(p, cache, cb) {
    if (typeof cb !== "function") {
      cb = maybeCallback(cache);
      cache = null;
    }
    p = pathModule.resolve(p);
    if (cache && Object.prototype.hasOwnProperty.call(cache, p)) {
      return process.nextTick(cb.bind(null, null, cache[p]));
    }
    var original = p, seenLinks = {}, knownHard = {};
    var pos;
    var current;
    var base;
    var previous;
    start();
    function start() {
      var m = splitRootRe.exec(p);
      pos = m[0].length;
      current = m[0];
      base = m[0];
      previous = "";
      if (isWindows && !knownHard[base]) {
        fs.lstat(base, function(err) {
          if (err)
            return cb(err);
          knownHard[base] = true;
          LOOP();
        });
      } else {
        process.nextTick(LOOP);
      }
    }
    function LOOP() {
      if (pos >= p.length) {
        if (cache)
          cache[original] = p;
        return cb(null, p);
      }
      nextPartRe.lastIndex = pos;
      var result = nextPartRe.exec(p);
      previous = current;
      current += result[0];
      base = previous + result[1];
      pos = nextPartRe.lastIndex;
      if (knownHard[base] || cache && cache[base] === base) {
        return process.nextTick(LOOP);
      }
      if (cache && Object.prototype.hasOwnProperty.call(cache, base)) {
        return gotResolvedLink(cache[base]);
      }
      return fs.lstat(base, gotStat);
    }
    function gotStat(err, stat) {
      if (err)
        return cb(err);
      if (!stat.isSymbolicLink()) {
        knownHard[base] = true;
        if (cache)
          cache[base] = base;
        return process.nextTick(LOOP);
      }
      if (!isWindows) {
        var id = stat.dev.toString(32) + ":" + stat.ino.toString(32);
        if (seenLinks.hasOwnProperty(id)) {
          return gotTarget(null, seenLinks[id], base);
        }
      }
      fs.stat(base, function(err2) {
        if (err2)
          return cb(err2);
        fs.readlink(base, function(err3, target) {
          if (!isWindows)
            seenLinks[id] = target;
          gotTarget(err3, target);
        });
      });
    }
    function gotTarget(err, target, base2) {
      if (err)
        return cb(err);
      var resolvedLink = pathModule.resolve(previous, target);
      if (cache)
        cache[base2] = resolvedLink;
      gotResolvedLink(resolvedLink);
    }
    function gotResolvedLink(resolvedLink) {
      p = pathModule.resolve(resolvedLink, p.slice(pos));
      start();
    }
  };
});

// ../../node_modules/fs.realpath/index.js
var require_fs = __commonJS((exports2, module2) => {
  module2.exports = realpath;
  realpath.realpath = realpath;
  realpath.sync = realpathSync;
  realpath.realpathSync = realpathSync;
  realpath.monkeypatch = monkeypatch;
  realpath.unmonkeypatch = unmonkeypatch;
  var fs = require("fs");
  var origRealpath = fs.realpath;
  var origRealpathSync = fs.realpathSync;
  var version = process.version;
  var ok = /^v[0-5]\./.test(version);
  var old = require_old();
  function newError(er) {
    return er && er.syscall === "realpath" && (er.code === "ELOOP" || er.code === "ENOMEM" || er.code === "ENAMETOOLONG");
  }
  function realpath(p, cache, cb) {
    if (ok) {
      return origRealpath(p, cache, cb);
    }
    if (typeof cache === "function") {
      cb = cache;
      cache = null;
    }
    origRealpath(p, cache, function(er, result) {
      if (newError(er)) {
        old.realpath(p, cache, cb);
      } else {
        cb(er, result);
      }
    });
  }
  function realpathSync(p, cache) {
    if (ok) {
      return origRealpathSync(p, cache);
    }
    try {
      return origRealpathSync(p, cache);
    } catch (er) {
      if (newError(er)) {
        return old.realpathSync(p, cache);
      } else {
        throw er;
      }
    }
  }
  function monkeypatch() {
    fs.realpath = realpath;
    fs.realpathSync = realpathSync;
  }
  function unmonkeypatch() {
    fs.realpath = origRealpath;
    fs.realpathSync = origRealpathSync;
  }
});

// ../../node_modules/concat-map/index.js
var require_concat_map = __commonJS((exports2, module2) => {
  module2.exports = function(xs, fn) {
    var res = [];
    for (var i = 0; i < xs.length; i++) {
      var x = fn(xs[i], i);
      if (isArray(x))
        res.push.apply(res, x);
      else
        res.push(x);
    }
    return res;
  };
  var isArray = Array.isArray || function(xs) {
    return Object.prototype.toString.call(xs) === "[object Array]";
  };
});

// ../../node_modules/balanced-match/index.js
var require_balanced_match = __commonJS((exports2, module2) => {
  "use strict";
  module2.exports = balanced;
  function balanced(a, b, str) {
    if (a instanceof RegExp)
      a = maybeMatch(a, str);
    if (b instanceof RegExp)
      b = maybeMatch(b, str);
    var r = range(a, b, str);
    return r && {
      start: r[0],
      end: r[1],
      pre: str.slice(0, r[0]),
      body: str.slice(r[0] + a.length, r[1]),
      post: str.slice(r[1] + b.length)
    };
  }
  function maybeMatch(reg, str) {
    var m = str.match(reg);
    return m ? m[0] : null;
  }
  balanced.range = range;
  function range(a, b, str) {
    var begs, beg, left, right, result;
    var ai = str.indexOf(a);
    var bi = str.indexOf(b, ai + 1);
    var i = ai;
    if (ai >= 0 && bi > 0) {
      begs = [];
      left = str.length;
      while (i >= 0 && !result) {
        if (i == ai) {
          begs.push(i);
          ai = str.indexOf(a, i + 1);
        } else if (begs.length == 1) {
          result = [begs.pop(), bi];
        } else {
          beg = begs.pop();
          if (beg < left) {
            left = beg;
            right = bi;
          }
          bi = str.indexOf(b, i + 1);
        }
        i = ai < bi && ai >= 0 ? ai : bi;
      }
      if (begs.length) {
        result = [left, right];
      }
    }
    return result;
  }
});

// ../../node_modules/brace-expansion/index.js
var require_brace_expansion = __commonJS((exports2, module2) => {
  var concatMap = require_concat_map();
  var balanced = require_balanced_match();
  module2.exports = expandTop;
  var escSlash = "\0SLASH" + Math.random() + "\0";
  var escOpen = "\0OPEN" + Math.random() + "\0";
  var escClose = "\0CLOSE" + Math.random() + "\0";
  var escComma = "\0COMMA" + Math.random() + "\0";
  var escPeriod = "\0PERIOD" + Math.random() + "\0";
  function numeric(str) {
    return parseInt(str, 10) == str ? parseInt(str, 10) : str.charCodeAt(0);
  }
  function escapeBraces(str) {
    return str.split("\\\\").join(escSlash).split("\\{").join(escOpen).split("\\}").join(escClose).split("\\,").join(escComma).split("\\.").join(escPeriod);
  }
  function unescapeBraces(str) {
    return str.split(escSlash).join("\\").split(escOpen).join("{").split(escClose).join("}").split(escComma).join(",").split(escPeriod).join(".");
  }
  function parseCommaParts(str) {
    if (!str)
      return [""];
    var parts = [];
    var m = balanced("{", "}", str);
    if (!m)
      return str.split(",");
    var pre = m.pre;
    var body = m.body;
    var post = m.post;
    var p = pre.split(",");
    p[p.length - 1] += "{" + body + "}";
    var postParts = parseCommaParts(post);
    if (post.length) {
      p[p.length - 1] += postParts.shift();
      p.push.apply(p, postParts);
    }
    parts.push.apply(parts, p);
    return parts;
  }
  function expandTop(str) {
    if (!str)
      return [];
    if (str.substr(0, 2) === "{}") {
      str = "\\{\\}" + str.substr(2);
    }
    return expand(escapeBraces(str), true).map(unescapeBraces);
  }
  function embrace(str) {
    return "{" + str + "}";
  }
  function isPadded(el) {
    return /^-?0\d/.test(el);
  }
  function lte(i, y) {
    return i <= y;
  }
  function gte(i, y) {
    return i >= y;
  }
  function expand(str, isTop) {
    var expansions = [];
    var m = balanced("{", "}", str);
    if (!m || /\$$/.test(m.pre))
      return [str];
    var isNumericSequence = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(m.body);
    var isAlphaSequence = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(m.body);
    var isSequence = isNumericSequence || isAlphaSequence;
    var isOptions = m.body.indexOf(",") >= 0;
    if (!isSequence && !isOptions) {
      if (m.post.match(/,.*\}/)) {
        str = m.pre + "{" + m.body + escClose + m.post;
        return expand(str);
      }
      return [str];
    }
    var n;
    if (isSequence) {
      n = m.body.split(/\.\./);
    } else {
      n = parseCommaParts(m.body);
      if (n.length === 1) {
        n = expand(n[0], false).map(embrace);
        if (n.length === 1) {
          var post = m.post.length ? expand(m.post, false) : [""];
          return post.map(function(p) {
            return m.pre + n[0] + p;
          });
        }
      }
    }
    var pre = m.pre;
    var post = m.post.length ? expand(m.post, false) : [""];
    var N;
    if (isSequence) {
      var x = numeric(n[0]);
      var y = numeric(n[1]);
      var width = Math.max(n[0].length, n[1].length);
      var incr = n.length == 3 ? Math.abs(numeric(n[2])) : 1;
      var test = lte;
      var reverse = y < x;
      if (reverse) {
        incr *= -1;
        test = gte;
      }
      var pad = n.some(isPadded);
      N = [];
      for (var i = x; test(i, y); i += incr) {
        var c;
        if (isAlphaSequence) {
          c = String.fromCharCode(i);
          if (c === "\\")
            c = "";
        } else {
          c = String(i);
          if (pad) {
            var need = width - c.length;
            if (need > 0) {
              var z = new Array(need + 1).join("0");
              if (i < 0)
                c = "-" + z + c.slice(1);
              else
                c = z + c;
            }
          }
        }
        N.push(c);
      }
    } else {
      N = concatMap(n, function(el) {
        return expand(el, false);
      });
    }
    for (var j = 0; j < N.length; j++) {
      for (var k = 0; k < post.length; k++) {
        var expansion = pre + N[j] + post[k];
        if (!isTop || isSequence || expansion)
          expansions.push(expansion);
      }
    }
    return expansions;
  }
});

// ../../node_modules/minimatch/minimatch.js
var require_minimatch = __commonJS((exports2, module2) => {
  module2.exports = minimatch;
  minimatch.Minimatch = Minimatch;
  var path = {sep: "/"};
  try {
    path = require("path");
  } catch (er) {
  }
  var GLOBSTAR = minimatch.GLOBSTAR = Minimatch.GLOBSTAR = {};
  var expand = require_brace_expansion();
  var plTypes = {
    "!": {open: "(?:(?!(?:", close: "))[^/]*?)"},
    "?": {open: "(?:", close: ")?"},
    "+": {open: "(?:", close: ")+"},
    "*": {open: "(?:", close: ")*"},
    "@": {open: "(?:", close: ")"}
  };
  var qmark = "[^/]";
  var star = qmark + "*?";
  var twoStarDot = "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?";
  var twoStarNoDot = "(?:(?!(?:\\/|^)\\.).)*?";
  var reSpecials = charSet("().*{}+?[]^$\\!");
  function charSet(s) {
    return s.split("").reduce(function(set, c) {
      set[c] = true;
      return set;
    }, {});
  }
  var slashSplit = /\/+/;
  minimatch.filter = filter;
  function filter(pattern, options) {
    options = options || {};
    return function(p, i, list) {
      return minimatch(p, pattern, options);
    };
  }
  function ext(a, b) {
    a = a || {};
    b = b || {};
    var t = {};
    Object.keys(b).forEach(function(k) {
      t[k] = b[k];
    });
    Object.keys(a).forEach(function(k) {
      t[k] = a[k];
    });
    return t;
  }
  minimatch.defaults = function(def) {
    if (!def || !Object.keys(def).length)
      return minimatch;
    var orig = minimatch;
    var m = function minimatch2(p, pattern, options) {
      return orig.minimatch(p, pattern, ext(def, options));
    };
    m.Minimatch = function Minimatch2(pattern, options) {
      return new orig.Minimatch(pattern, ext(def, options));
    };
    return m;
  };
  Minimatch.defaults = function(def) {
    if (!def || !Object.keys(def).length)
      return Minimatch;
    return minimatch.defaults(def).Minimatch;
  };
  function minimatch(p, pattern, options) {
    if (typeof pattern !== "string") {
      throw new TypeError("glob pattern string required");
    }
    if (!options)
      options = {};
    if (!options.nocomment && pattern.charAt(0) === "#") {
      return false;
    }
    if (pattern.trim() === "")
      return p === "";
    return new Minimatch(pattern, options).match(p);
  }
  function Minimatch(pattern, options) {
    if (!(this instanceof Minimatch)) {
      return new Minimatch(pattern, options);
    }
    if (typeof pattern !== "string") {
      throw new TypeError("glob pattern string required");
    }
    if (!options)
      options = {};
    pattern = pattern.trim();
    if (path.sep !== "/") {
      pattern = pattern.split(path.sep).join("/");
    }
    this.options = options;
    this.set = [];
    this.pattern = pattern;
    this.regexp = null;
    this.negate = false;
    this.comment = false;
    this.empty = false;
    this.make();
  }
  Minimatch.prototype.debug = function() {
  };
  Minimatch.prototype.make = make;
  function make() {
    if (this._made)
      return;
    var pattern = this.pattern;
    var options = this.options;
    if (!options.nocomment && pattern.charAt(0) === "#") {
      this.comment = true;
      return;
    }
    if (!pattern) {
      this.empty = true;
      return;
    }
    this.parseNegate();
    var set = this.globSet = this.braceExpand();
    if (options.debug)
      this.debug = console.error;
    this.debug(this.pattern, set);
    set = this.globParts = set.map(function(s) {
      return s.split(slashSplit);
    });
    this.debug(this.pattern, set);
    set = set.map(function(s, si, set2) {
      return s.map(this.parse, this);
    }, this);
    this.debug(this.pattern, set);
    set = set.filter(function(s) {
      return s.indexOf(false) === -1;
    });
    this.debug(this.pattern, set);
    this.set = set;
  }
  Minimatch.prototype.parseNegate = parseNegate;
  function parseNegate() {
    var pattern = this.pattern;
    var negate = false;
    var options = this.options;
    var negateOffset = 0;
    if (options.nonegate)
      return;
    for (var i = 0, l = pattern.length; i < l && pattern.charAt(i) === "!"; i++) {
      negate = !negate;
      negateOffset++;
    }
    if (negateOffset)
      this.pattern = pattern.substr(negateOffset);
    this.negate = negate;
  }
  minimatch.braceExpand = function(pattern, options) {
    return braceExpand(pattern, options);
  };
  Minimatch.prototype.braceExpand = braceExpand;
  function braceExpand(pattern, options) {
    if (!options) {
      if (this instanceof Minimatch) {
        options = this.options;
      } else {
        options = {};
      }
    }
    pattern = typeof pattern === "undefined" ? this.pattern : pattern;
    if (typeof pattern === "undefined") {
      throw new TypeError("undefined pattern");
    }
    if (options.nobrace || !pattern.match(/\{.*\}/)) {
      return [pattern];
    }
    return expand(pattern);
  }
  Minimatch.prototype.parse = parse;
  var SUBPARSE = {};
  function parse(pattern, isSub) {
    if (pattern.length > 1024 * 64) {
      throw new TypeError("pattern is too long");
    }
    var options = this.options;
    if (!options.noglobstar && pattern === "**")
      return GLOBSTAR;
    if (pattern === "")
      return "";
    var re = "";
    var hasMagic = !!options.nocase;
    var escaping = false;
    var patternListStack = [];
    var negativeLists = [];
    var stateChar;
    var inClass = false;
    var reClassStart = -1;
    var classStart = -1;
    var patternStart = pattern.charAt(0) === "." ? "" : options.dot ? "(?!(?:^|\\/)\\.{1,2}(?:$|\\/))" : "(?!\\.)";
    var self = this;
    function clearStateChar() {
      if (stateChar) {
        switch (stateChar) {
          case "*":
            re += star;
            hasMagic = true;
            break;
          case "?":
            re += qmark;
            hasMagic = true;
            break;
          default:
            re += "\\" + stateChar;
            break;
        }
        self.debug("clearStateChar %j %j", stateChar, re);
        stateChar = false;
      }
    }
    for (var i = 0, len = pattern.length, c; i < len && (c = pattern.charAt(i)); i++) {
      this.debug("%s	%s %s %j", pattern, i, re, c);
      if (escaping && reSpecials[c]) {
        re += "\\" + c;
        escaping = false;
        continue;
      }
      switch (c) {
        case "/":
          return false;
        case "\\":
          clearStateChar();
          escaping = true;
          continue;
        case "?":
        case "*":
        case "+":
        case "@":
        case "!":
          this.debug("%s	%s %s %j <-- stateChar", pattern, i, re, c);
          if (inClass) {
            this.debug("  in class");
            if (c === "!" && i === classStart + 1)
              c = "^";
            re += c;
            continue;
          }
          self.debug("call clearStateChar %j", stateChar);
          clearStateChar();
          stateChar = c;
          if (options.noext)
            clearStateChar();
          continue;
        case "(":
          if (inClass) {
            re += "(";
            continue;
          }
          if (!stateChar) {
            re += "\\(";
            continue;
          }
          patternListStack.push({
            type: stateChar,
            start: i - 1,
            reStart: re.length,
            open: plTypes[stateChar].open,
            close: plTypes[stateChar].close
          });
          re += stateChar === "!" ? "(?:(?!(?:" : "(?:";
          this.debug("plType %j %j", stateChar, re);
          stateChar = false;
          continue;
        case ")":
          if (inClass || !patternListStack.length) {
            re += "\\)";
            continue;
          }
          clearStateChar();
          hasMagic = true;
          var pl = patternListStack.pop();
          re += pl.close;
          if (pl.type === "!") {
            negativeLists.push(pl);
          }
          pl.reEnd = re.length;
          continue;
        case "|":
          if (inClass || !patternListStack.length || escaping) {
            re += "\\|";
            escaping = false;
            continue;
          }
          clearStateChar();
          re += "|";
          continue;
        case "[":
          clearStateChar();
          if (inClass) {
            re += "\\" + c;
            continue;
          }
          inClass = true;
          classStart = i;
          reClassStart = re.length;
          re += c;
          continue;
        case "]":
          if (i === classStart + 1 || !inClass) {
            re += "\\" + c;
            escaping = false;
            continue;
          }
          if (inClass) {
            var cs = pattern.substring(classStart + 1, i);
            try {
              RegExp("[" + cs + "]");
            } catch (er) {
              var sp = this.parse(cs, SUBPARSE);
              re = re.substr(0, reClassStart) + "\\[" + sp[0] + "\\]";
              hasMagic = hasMagic || sp[1];
              inClass = false;
              continue;
            }
          }
          hasMagic = true;
          inClass = false;
          re += c;
          continue;
        default:
          clearStateChar();
          if (escaping) {
            escaping = false;
          } else if (reSpecials[c] && !(c === "^" && inClass)) {
            re += "\\";
          }
          re += c;
      }
    }
    if (inClass) {
      cs = pattern.substr(classStart + 1);
      sp = this.parse(cs, SUBPARSE);
      re = re.substr(0, reClassStart) + "\\[" + sp[0];
      hasMagic = hasMagic || sp[1];
    }
    for (pl = patternListStack.pop(); pl; pl = patternListStack.pop()) {
      var tail = re.slice(pl.reStart + pl.open.length);
      this.debug("setting tail", re, pl);
      tail = tail.replace(/((?:\\{2}){0,64})(\\?)\|/g, function(_, $1, $2) {
        if (!$2) {
          $2 = "\\";
        }
        return $1 + $1 + $2 + "|";
      });
      this.debug("tail=%j\n   %s", tail, tail, pl, re);
      var t = pl.type === "*" ? star : pl.type === "?" ? qmark : "\\" + pl.type;
      hasMagic = true;
      re = re.slice(0, pl.reStart) + t + "\\(" + tail;
    }
    clearStateChar();
    if (escaping) {
      re += "\\\\";
    }
    var addPatternStart = false;
    switch (re.charAt(0)) {
      case ".":
      case "[":
      case "(":
        addPatternStart = true;
    }
    for (var n = negativeLists.length - 1; n > -1; n--) {
      var nl = negativeLists[n];
      var nlBefore = re.slice(0, nl.reStart);
      var nlFirst = re.slice(nl.reStart, nl.reEnd - 8);
      var nlLast = re.slice(nl.reEnd - 8, nl.reEnd);
      var nlAfter = re.slice(nl.reEnd);
      nlLast += nlAfter;
      var openParensBefore = nlBefore.split("(").length - 1;
      var cleanAfter = nlAfter;
      for (i = 0; i < openParensBefore; i++) {
        cleanAfter = cleanAfter.replace(/\)[+*?]?/, "");
      }
      nlAfter = cleanAfter;
      var dollar = "";
      if (nlAfter === "" && isSub !== SUBPARSE) {
        dollar = "$";
      }
      var newRe = nlBefore + nlFirst + nlAfter + dollar + nlLast;
      re = newRe;
    }
    if (re !== "" && hasMagic) {
      re = "(?=.)" + re;
    }
    if (addPatternStart) {
      re = patternStart + re;
    }
    if (isSub === SUBPARSE) {
      return [re, hasMagic];
    }
    if (!hasMagic) {
      return globUnescape(pattern);
    }
    var flags = options.nocase ? "i" : "";
    try {
      var regExp = new RegExp("^" + re + "$", flags);
    } catch (er) {
      return new RegExp("$.");
    }
    regExp._glob = pattern;
    regExp._src = re;
    return regExp;
  }
  minimatch.makeRe = function(pattern, options) {
    return new Minimatch(pattern, options || {}).makeRe();
  };
  Minimatch.prototype.makeRe = makeRe;
  function makeRe() {
    if (this.regexp || this.regexp === false)
      return this.regexp;
    var set = this.set;
    if (!set.length) {
      this.regexp = false;
      return this.regexp;
    }
    var options = this.options;
    var twoStar = options.noglobstar ? star : options.dot ? twoStarDot : twoStarNoDot;
    var flags = options.nocase ? "i" : "";
    var re = set.map(function(pattern) {
      return pattern.map(function(p) {
        return p === GLOBSTAR ? twoStar : typeof p === "string" ? regExpEscape(p) : p._src;
      }).join("\\/");
    }).join("|");
    re = "^(?:" + re + ")$";
    if (this.negate)
      re = "^(?!" + re + ").*$";
    try {
      this.regexp = new RegExp(re, flags);
    } catch (ex) {
      this.regexp = false;
    }
    return this.regexp;
  }
  minimatch.match = function(list, pattern, options) {
    options = options || {};
    var mm = new Minimatch(pattern, options);
    list = list.filter(function(f) {
      return mm.match(f);
    });
    if (mm.options.nonull && !list.length) {
      list.push(pattern);
    }
    return list;
  };
  Minimatch.prototype.match = match;
  function match(f, partial) {
    this.debug("match", f, this.pattern);
    if (this.comment)
      return false;
    if (this.empty)
      return f === "";
    if (f === "/" && partial)
      return true;
    var options = this.options;
    if (path.sep !== "/") {
      f = f.split(path.sep).join("/");
    }
    f = f.split(slashSplit);
    this.debug(this.pattern, "split", f);
    var set = this.set;
    this.debug(this.pattern, "set", set);
    var filename;
    var i;
    for (i = f.length - 1; i >= 0; i--) {
      filename = f[i];
      if (filename)
        break;
    }
    for (i = 0; i < set.length; i++) {
      var pattern = set[i];
      var file = f;
      if (options.matchBase && pattern.length === 1) {
        file = [filename];
      }
      var hit = this.matchOne(file, pattern, partial);
      if (hit) {
        if (options.flipNegate)
          return true;
        return !this.negate;
      }
    }
    if (options.flipNegate)
      return false;
    return this.negate;
  }
  Minimatch.prototype.matchOne = function(file, pattern, partial) {
    var options = this.options;
    this.debug("matchOne", {this: this, file, pattern});
    this.debug("matchOne", file.length, pattern.length);
    for (var fi = 0, pi = 0, fl = file.length, pl = pattern.length; fi < fl && pi < pl; fi++, pi++) {
      this.debug("matchOne loop");
      var p = pattern[pi];
      var f = file[fi];
      this.debug(pattern, p, f);
      if (p === false)
        return false;
      if (p === GLOBSTAR) {
        this.debug("GLOBSTAR", [pattern, p, f]);
        var fr = fi;
        var pr = pi + 1;
        if (pr === pl) {
          this.debug("** at the end");
          for (; fi < fl; fi++) {
            if (file[fi] === "." || file[fi] === ".." || !options.dot && file[fi].charAt(0) === ".")
              return false;
          }
          return true;
        }
        while (fr < fl) {
          var swallowee = file[fr];
          this.debug("\nglobstar while", file, fr, pattern, pr, swallowee);
          if (this.matchOne(file.slice(fr), pattern.slice(pr), partial)) {
            this.debug("globstar found match!", fr, fl, swallowee);
            return true;
          } else {
            if (swallowee === "." || swallowee === ".." || !options.dot && swallowee.charAt(0) === ".") {
              this.debug("dot detected!", file, fr, pattern, pr);
              break;
            }
            this.debug("globstar swallow a segment, and continue");
            fr++;
          }
        }
        if (partial) {
          this.debug("\n>>> no match, partial?", file, fr, pattern, pr);
          if (fr === fl)
            return true;
        }
        return false;
      }
      var hit;
      if (typeof p === "string") {
        if (options.nocase) {
          hit = f.toLowerCase() === p.toLowerCase();
        } else {
          hit = f === p;
        }
        this.debug("string match", p, f, hit);
      } else {
        hit = f.match(p);
        this.debug("pattern match", p, f, hit);
      }
      if (!hit)
        return false;
    }
    if (fi === fl && pi === pl) {
      return true;
    } else if (fi === fl) {
      return partial;
    } else if (pi === pl) {
      var emptyFileEnd = fi === fl - 1 && file[fi] === "";
      return emptyFileEnd;
    }
    throw new Error("wtf?");
  };
  function globUnescape(s) {
    return s.replace(/\\(.)/g, "$1");
  }
  function regExpEscape(s) {
    return s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  }
});

// ../../node_modules/inherits/inherits_browser.js
var require_inherits_browser = __commonJS((exports2, module2) => {
  if (typeof Object.create === "function") {
    module2.exports = function inherits(ctor, superCtor) {
      if (superCtor) {
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
          constructor: {
            value: ctor,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
      }
    };
  } else {
    module2.exports = function inherits(ctor, superCtor) {
      if (superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function() {
        };
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
      }
    };
  }
});

// ../../node_modules/inherits/inherits.js
var require_inherits = __commonJS((exports2, module2) => {
  try {
    util = require("util");
    if (typeof util.inherits !== "function")
      throw "";
    module2.exports = util.inherits;
  } catch (e) {
    module2.exports = require_inherits_browser();
  }
  var util;
});

// ../../node_modules/path-is-absolute/index.js
var require_path_is_absolute = __commonJS((exports2, module2) => {
  "use strict";
  function posix(path) {
    return path.charAt(0) === "/";
  }
  function win32(path) {
    var splitDeviceRe = /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/;
    var result = splitDeviceRe.exec(path);
    var device = result[1] || "";
    var isUnc = Boolean(device && device.charAt(1) !== ":");
    return Boolean(result[2] || isUnc);
  }
  module2.exports = process.platform === "win32" ? win32 : posix;
  module2.exports.posix = posix;
  module2.exports.win32 = win32;
});

// ../../node_modules/glob/common.js
var require_common = __commonJS((exports2) => {
  exports2.alphasort = alphasort;
  exports2.alphasorti = alphasorti;
  exports2.setopts = setopts;
  exports2.ownProp = ownProp;
  exports2.makeAbs = makeAbs;
  exports2.finish = finish;
  exports2.mark = mark;
  exports2.isIgnored = isIgnored;
  exports2.childrenIgnored = childrenIgnored;
  function ownProp(obj, field) {
    return Object.prototype.hasOwnProperty.call(obj, field);
  }
  var path = require("path");
  var minimatch = require_minimatch();
  var isAbsolute = require_path_is_absolute();
  var Minimatch = minimatch.Minimatch;
  function alphasorti(a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  }
  function alphasort(a, b) {
    return a.localeCompare(b);
  }
  function setupIgnores(self, options) {
    self.ignore = options.ignore || [];
    if (!Array.isArray(self.ignore))
      self.ignore = [self.ignore];
    if (self.ignore.length) {
      self.ignore = self.ignore.map(ignoreMap);
    }
  }
  function ignoreMap(pattern) {
    var gmatcher = null;
    if (pattern.slice(-3) === "/**") {
      var gpattern = pattern.replace(/(\/\*\*)+$/, "");
      gmatcher = new Minimatch(gpattern, {dot: true});
    }
    return {
      matcher: new Minimatch(pattern, {dot: true}),
      gmatcher
    };
  }
  function setopts(self, pattern, options) {
    if (!options)
      options = {};
    if (options.matchBase && pattern.indexOf("/") === -1) {
      if (options.noglobstar) {
        throw new Error("base matching requires globstar");
      }
      pattern = "**/" + pattern;
    }
    self.silent = !!options.silent;
    self.pattern = pattern;
    self.strict = options.strict !== false;
    self.realpath = !!options.realpath;
    self.realpathCache = options.realpathCache || Object.create(null);
    self.follow = !!options.follow;
    self.dot = !!options.dot;
    self.mark = !!options.mark;
    self.nodir = !!options.nodir;
    if (self.nodir)
      self.mark = true;
    self.sync = !!options.sync;
    self.nounique = !!options.nounique;
    self.nonull = !!options.nonull;
    self.nosort = !!options.nosort;
    self.nocase = !!options.nocase;
    self.stat = !!options.stat;
    self.noprocess = !!options.noprocess;
    self.absolute = !!options.absolute;
    self.maxLength = options.maxLength || Infinity;
    self.cache = options.cache || Object.create(null);
    self.statCache = options.statCache || Object.create(null);
    self.symlinks = options.symlinks || Object.create(null);
    setupIgnores(self, options);
    self.changedCwd = false;
    var cwd = process.cwd();
    if (!ownProp(options, "cwd"))
      self.cwd = cwd;
    else {
      self.cwd = path.resolve(options.cwd);
      self.changedCwd = self.cwd !== cwd;
    }
    self.root = options.root || path.resolve(self.cwd, "/");
    self.root = path.resolve(self.root);
    if (process.platform === "win32")
      self.root = self.root.replace(/\\/g, "/");
    self.cwdAbs = isAbsolute(self.cwd) ? self.cwd : makeAbs(self, self.cwd);
    if (process.platform === "win32")
      self.cwdAbs = self.cwdAbs.replace(/\\/g, "/");
    self.nomount = !!options.nomount;
    options.nonegate = true;
    options.nocomment = true;
    self.minimatch = new Minimatch(pattern, options);
    self.options = self.minimatch.options;
  }
  function finish(self) {
    var nou = self.nounique;
    var all = nou ? [] : Object.create(null);
    for (var i = 0, l = self.matches.length; i < l; i++) {
      var matches = self.matches[i];
      if (!matches || Object.keys(matches).length === 0) {
        if (self.nonull) {
          var literal = self.minimatch.globSet[i];
          if (nou)
            all.push(literal);
          else
            all[literal] = true;
        }
      } else {
        var m = Object.keys(matches);
        if (nou)
          all.push.apply(all, m);
        else
          m.forEach(function(m2) {
            all[m2] = true;
          });
      }
    }
    if (!nou)
      all = Object.keys(all);
    if (!self.nosort)
      all = all.sort(self.nocase ? alphasorti : alphasort);
    if (self.mark) {
      for (var i = 0; i < all.length; i++) {
        all[i] = self._mark(all[i]);
      }
      if (self.nodir) {
        all = all.filter(function(e) {
          var notDir = !/\/$/.test(e);
          var c = self.cache[e] || self.cache[makeAbs(self, e)];
          if (notDir && c)
            notDir = c !== "DIR" && !Array.isArray(c);
          return notDir;
        });
      }
    }
    if (self.ignore.length)
      all = all.filter(function(m2) {
        return !isIgnored(self, m2);
      });
    self.found = all;
  }
  function mark(self, p) {
    var abs = makeAbs(self, p);
    var c = self.cache[abs];
    var m = p;
    if (c) {
      var isDir = c === "DIR" || Array.isArray(c);
      var slash = p.slice(-1) === "/";
      if (isDir && !slash)
        m += "/";
      else if (!isDir && slash)
        m = m.slice(0, -1);
      if (m !== p) {
        var mabs = makeAbs(self, m);
        self.statCache[mabs] = self.statCache[abs];
        self.cache[mabs] = self.cache[abs];
      }
    }
    return m;
  }
  function makeAbs(self, f) {
    var abs = f;
    if (f.charAt(0) === "/") {
      abs = path.join(self.root, f);
    } else if (isAbsolute(f) || f === "") {
      abs = f;
    } else if (self.changedCwd) {
      abs = path.resolve(self.cwd, f);
    } else {
      abs = path.resolve(f);
    }
    if (process.platform === "win32")
      abs = abs.replace(/\\/g, "/");
    return abs;
  }
  function isIgnored(self, path2) {
    if (!self.ignore.length)
      return false;
    return self.ignore.some(function(item) {
      return item.matcher.match(path2) || !!(item.gmatcher && item.gmatcher.match(path2));
    });
  }
  function childrenIgnored(self, path2) {
    if (!self.ignore.length)
      return false;
    return self.ignore.some(function(item) {
      return !!(item.gmatcher && item.gmatcher.match(path2));
    });
  }
});

// ../../node_modules/glob/sync.js
var require_sync = __commonJS((exports2, module2) => {
  module2.exports = globSync;
  globSync.GlobSync = GlobSync;
  var fs = require("fs");
  var rp = require_fs();
  var minimatch = require_minimatch();
  var Minimatch = minimatch.Minimatch;
  var Glob = require_glob().Glob;
  var util = require("util");
  var path = require("path");
  var assert = require("assert");
  var isAbsolute = require_path_is_absolute();
  var common = require_common();
  var alphasort = common.alphasort;
  var alphasorti = common.alphasorti;
  var setopts = common.setopts;
  var ownProp = common.ownProp;
  var childrenIgnored = common.childrenIgnored;
  var isIgnored = common.isIgnored;
  function globSync(pattern, options) {
    if (typeof options === "function" || arguments.length === 3)
      throw new TypeError("callback provided to sync glob\nSee: https://github.com/isaacs/node-glob/issues/167");
    return new GlobSync(pattern, options).found;
  }
  function GlobSync(pattern, options) {
    if (!pattern)
      throw new Error("must provide pattern");
    if (typeof options === "function" || arguments.length === 3)
      throw new TypeError("callback provided to sync glob\nSee: https://github.com/isaacs/node-glob/issues/167");
    if (!(this instanceof GlobSync))
      return new GlobSync(pattern, options);
    setopts(this, pattern, options);
    if (this.noprocess)
      return this;
    var n = this.minimatch.set.length;
    this.matches = new Array(n);
    for (var i = 0; i < n; i++) {
      this._process(this.minimatch.set[i], i, false);
    }
    this._finish();
  }
  GlobSync.prototype._finish = function() {
    assert(this instanceof GlobSync);
    if (this.realpath) {
      var self = this;
      this.matches.forEach(function(matchset, index) {
        var set = self.matches[index] = Object.create(null);
        for (var p in matchset) {
          try {
            p = self._makeAbs(p);
            var real = rp.realpathSync(p, self.realpathCache);
            set[real] = true;
          } catch (er) {
            if (er.syscall === "stat")
              set[self._makeAbs(p)] = true;
            else
              throw er;
          }
        }
      });
    }
    common.finish(this);
  };
  GlobSync.prototype._process = function(pattern, index, inGlobStar) {
    assert(this instanceof GlobSync);
    var n = 0;
    while (typeof pattern[n] === "string") {
      n++;
    }
    var prefix;
    switch (n) {
      case pattern.length:
        this._processSimple(pattern.join("/"), index);
        return;
      case 0:
        prefix = null;
        break;
      default:
        prefix = pattern.slice(0, n).join("/");
        break;
    }
    var remain = pattern.slice(n);
    var read;
    if (prefix === null)
      read = ".";
    else if (isAbsolute(prefix) || isAbsolute(pattern.join("/"))) {
      if (!prefix || !isAbsolute(prefix))
        prefix = "/" + prefix;
      read = prefix;
    } else
      read = prefix;
    var abs = this._makeAbs(read);
    if (childrenIgnored(this, read))
      return;
    var isGlobStar = remain[0] === minimatch.GLOBSTAR;
    if (isGlobStar)
      this._processGlobStar(prefix, read, abs, remain, index, inGlobStar);
    else
      this._processReaddir(prefix, read, abs, remain, index, inGlobStar);
  };
  GlobSync.prototype._processReaddir = function(prefix, read, abs, remain, index, inGlobStar) {
    var entries = this._readdir(abs, inGlobStar);
    if (!entries)
      return;
    var pn = remain[0];
    var negate = !!this.minimatch.negate;
    var rawGlob = pn._glob;
    var dotOk = this.dot || rawGlob.charAt(0) === ".";
    var matchedEntries = [];
    for (var i = 0; i < entries.length; i++) {
      var e = entries[i];
      if (e.charAt(0) !== "." || dotOk) {
        var m;
        if (negate && !prefix) {
          m = !e.match(pn);
        } else {
          m = e.match(pn);
        }
        if (m)
          matchedEntries.push(e);
      }
    }
    var len = matchedEntries.length;
    if (len === 0)
      return;
    if (remain.length === 1 && !this.mark && !this.stat) {
      if (!this.matches[index])
        this.matches[index] = Object.create(null);
      for (var i = 0; i < len; i++) {
        var e = matchedEntries[i];
        if (prefix) {
          if (prefix.slice(-1) !== "/")
            e = prefix + "/" + e;
          else
            e = prefix + e;
        }
        if (e.charAt(0) === "/" && !this.nomount) {
          e = path.join(this.root, e);
        }
        this._emitMatch(index, e);
      }
      return;
    }
    remain.shift();
    for (var i = 0; i < len; i++) {
      var e = matchedEntries[i];
      var newPattern;
      if (prefix)
        newPattern = [prefix, e];
      else
        newPattern = [e];
      this._process(newPattern.concat(remain), index, inGlobStar);
    }
  };
  GlobSync.prototype._emitMatch = function(index, e) {
    if (isIgnored(this, e))
      return;
    var abs = this._makeAbs(e);
    if (this.mark)
      e = this._mark(e);
    if (this.absolute) {
      e = abs;
    }
    if (this.matches[index][e])
      return;
    if (this.nodir) {
      var c = this.cache[abs];
      if (c === "DIR" || Array.isArray(c))
        return;
    }
    this.matches[index][e] = true;
    if (this.stat)
      this._stat(e);
  };
  GlobSync.prototype._readdirInGlobStar = function(abs) {
    if (this.follow)
      return this._readdir(abs, false);
    var entries;
    var lstat;
    var stat;
    try {
      lstat = fs.lstatSync(abs);
    } catch (er) {
      if (er.code === "ENOENT") {
        return null;
      }
    }
    var isSym = lstat && lstat.isSymbolicLink();
    this.symlinks[abs] = isSym;
    if (!isSym && lstat && !lstat.isDirectory())
      this.cache[abs] = "FILE";
    else
      entries = this._readdir(abs, false);
    return entries;
  };
  GlobSync.prototype._readdir = function(abs, inGlobStar) {
    var entries;
    if (inGlobStar && !ownProp(this.symlinks, abs))
      return this._readdirInGlobStar(abs);
    if (ownProp(this.cache, abs)) {
      var c = this.cache[abs];
      if (!c || c === "FILE")
        return null;
      if (Array.isArray(c))
        return c;
    }
    try {
      return this._readdirEntries(abs, fs.readdirSync(abs));
    } catch (er) {
      this._readdirError(abs, er);
      return null;
    }
  };
  GlobSync.prototype._readdirEntries = function(abs, entries) {
    if (!this.mark && !this.stat) {
      for (var i = 0; i < entries.length; i++) {
        var e = entries[i];
        if (abs === "/")
          e = abs + e;
        else
          e = abs + "/" + e;
        this.cache[e] = true;
      }
    }
    this.cache[abs] = entries;
    return entries;
  };
  GlobSync.prototype._readdirError = function(f, er) {
    switch (er.code) {
      case "ENOTSUP":
      case "ENOTDIR":
        var abs = this._makeAbs(f);
        this.cache[abs] = "FILE";
        if (abs === this.cwdAbs) {
          var error = new Error(er.code + " invalid cwd " + this.cwd);
          error.path = this.cwd;
          error.code = er.code;
          throw error;
        }
        break;
      case "ENOENT":
      case "ELOOP":
      case "ENAMETOOLONG":
      case "UNKNOWN":
        this.cache[this._makeAbs(f)] = false;
        break;
      default:
        this.cache[this._makeAbs(f)] = false;
        if (this.strict)
          throw er;
        if (!this.silent)
          console.error("glob error", er);
        break;
    }
  };
  GlobSync.prototype._processGlobStar = function(prefix, read, abs, remain, index, inGlobStar) {
    var entries = this._readdir(abs, inGlobStar);
    if (!entries)
      return;
    var remainWithoutGlobStar = remain.slice(1);
    var gspref = prefix ? [prefix] : [];
    var noGlobStar = gspref.concat(remainWithoutGlobStar);
    this._process(noGlobStar, index, false);
    var len = entries.length;
    var isSym = this.symlinks[abs];
    if (isSym && inGlobStar)
      return;
    for (var i = 0; i < len; i++) {
      var e = entries[i];
      if (e.charAt(0) === "." && !this.dot)
        continue;
      var instead = gspref.concat(entries[i], remainWithoutGlobStar);
      this._process(instead, index, true);
      var below = gspref.concat(entries[i], remain);
      this._process(below, index, true);
    }
  };
  GlobSync.prototype._processSimple = function(prefix, index) {
    var exists = this._stat(prefix);
    if (!this.matches[index])
      this.matches[index] = Object.create(null);
    if (!exists)
      return;
    if (prefix && isAbsolute(prefix) && !this.nomount) {
      var trail = /[\/\\]$/.test(prefix);
      if (prefix.charAt(0) === "/") {
        prefix = path.join(this.root, prefix);
      } else {
        prefix = path.resolve(this.root, prefix);
        if (trail)
          prefix += "/";
      }
    }
    if (process.platform === "win32")
      prefix = prefix.replace(/\\/g, "/");
    this._emitMatch(index, prefix);
  };
  GlobSync.prototype._stat = function(f) {
    var abs = this._makeAbs(f);
    var needDir = f.slice(-1) === "/";
    if (f.length > this.maxLength)
      return false;
    if (!this.stat && ownProp(this.cache, abs)) {
      var c = this.cache[abs];
      if (Array.isArray(c))
        c = "DIR";
      if (!needDir || c === "DIR")
        return c;
      if (needDir && c === "FILE")
        return false;
    }
    var exists;
    var stat = this.statCache[abs];
    if (!stat) {
      var lstat;
      try {
        lstat = fs.lstatSync(abs);
      } catch (er) {
        if (er && (er.code === "ENOENT" || er.code === "ENOTDIR")) {
          this.statCache[abs] = false;
          return false;
        }
      }
      if (lstat && lstat.isSymbolicLink()) {
        try {
          stat = fs.statSync(abs);
        } catch (er) {
          stat = lstat;
        }
      } else {
        stat = lstat;
      }
    }
    this.statCache[abs] = stat;
    var c = true;
    if (stat)
      c = stat.isDirectory() ? "DIR" : "FILE";
    this.cache[abs] = this.cache[abs] || c;
    if (needDir && c === "FILE")
      return false;
    return c;
  };
  GlobSync.prototype._mark = function(p) {
    return common.mark(this, p);
  };
  GlobSync.prototype._makeAbs = function(f) {
    return common.makeAbs(this, f);
  };
});

// ../../node_modules/wrappy/wrappy.js
var require_wrappy = __commonJS((exports2, module2) => {
  module2.exports = wrappy;
  function wrappy(fn, cb) {
    if (fn && cb)
      return wrappy(fn)(cb);
    if (typeof fn !== "function")
      throw new TypeError("need wrapper function");
    Object.keys(fn).forEach(function(k) {
      wrapper[k] = fn[k];
    });
    return wrapper;
    function wrapper() {
      var args = new Array(arguments.length);
      for (var i = 0; i < args.length; i++) {
        args[i] = arguments[i];
      }
      var ret = fn.apply(this, args);
      var cb2 = args[args.length - 1];
      if (typeof ret === "function" && ret !== cb2) {
        Object.keys(cb2).forEach(function(k) {
          ret[k] = cb2[k];
        });
      }
      return ret;
    }
  }
});

// ../../node_modules/once/once.js
var require_once2 = __commonJS((exports2, module2) => {
  var wrappy = require_wrappy();
  module2.exports = wrappy(once);
  module2.exports.strict = wrappy(onceStrict);
  once.proto = once(function() {
    Object.defineProperty(Function.prototype, "once", {
      value: function() {
        return once(this);
      },
      configurable: true
    });
    Object.defineProperty(Function.prototype, "onceStrict", {
      value: function() {
        return onceStrict(this);
      },
      configurable: true
    });
  });
  function once(fn) {
    var f = function() {
      if (f.called)
        return f.value;
      f.called = true;
      return f.value = fn.apply(this, arguments);
    };
    f.called = false;
    return f;
  }
  function onceStrict(fn) {
    var f = function() {
      if (f.called)
        throw new Error(f.onceError);
      f.called = true;
      return f.value = fn.apply(this, arguments);
    };
    var name = fn.name || "Function wrapped with `once`";
    f.onceError = name + " shouldn't be called more than once";
    f.called = false;
    return f;
  }
});

// ../../node_modules/inflight/inflight.js
var require_inflight = __commonJS((exports2, module2) => {
  var wrappy = require_wrappy();
  var reqs = Object.create(null);
  var once = require_once2();
  module2.exports = wrappy(inflight);
  function inflight(key, cb) {
    if (reqs[key]) {
      reqs[key].push(cb);
      return null;
    } else {
      reqs[key] = [cb];
      return makeres(key);
    }
  }
  function makeres(key) {
    return once(function RES() {
      var cbs = reqs[key];
      var len = cbs.length;
      var args = slice(arguments);
      try {
        for (var i = 0; i < len; i++) {
          cbs[i].apply(null, args);
        }
      } finally {
        if (cbs.length > len) {
          cbs.splice(0, len);
          process.nextTick(function() {
            RES.apply(null, args);
          });
        } else {
          delete reqs[key];
        }
      }
    });
  }
  function slice(args) {
    var length = args.length;
    var array = [];
    for (var i = 0; i < length; i++)
      array[i] = args[i];
    return array;
  }
});

// ../../node_modules/glob/glob.js
var require_glob = __commonJS((exports2, module2) => {
  module2.exports = glob;
  var fs = require("fs");
  var rp = require_fs();
  var minimatch = require_minimatch();
  var Minimatch = minimatch.Minimatch;
  var inherits = require_inherits();
  var EE = require("events").EventEmitter;
  var path = require("path");
  var assert = require("assert");
  var isAbsolute = require_path_is_absolute();
  var globSync = require_sync();
  var common = require_common();
  var alphasort = common.alphasort;
  var alphasorti = common.alphasorti;
  var setopts = common.setopts;
  var ownProp = common.ownProp;
  var inflight = require_inflight();
  var util = require("util");
  var childrenIgnored = common.childrenIgnored;
  var isIgnored = common.isIgnored;
  var once = require_once2();
  function glob(pattern, options, cb) {
    if (typeof options === "function")
      cb = options, options = {};
    if (!options)
      options = {};
    if (options.sync) {
      if (cb)
        throw new TypeError("callback provided to sync glob");
      return globSync(pattern, options);
    }
    return new Glob(pattern, options, cb);
  }
  glob.sync = globSync;
  var GlobSync = glob.GlobSync = globSync.GlobSync;
  glob.glob = glob;
  function extend(origin, add) {
    if (add === null || typeof add !== "object") {
      return origin;
    }
    var keys = Object.keys(add);
    var i = keys.length;
    while (i--) {
      origin[keys[i]] = add[keys[i]];
    }
    return origin;
  }
  glob.hasMagic = function(pattern, options_) {
    var options = extend({}, options_);
    options.noprocess = true;
    var g = new Glob(pattern, options);
    var set = g.minimatch.set;
    if (!pattern)
      return false;
    if (set.length > 1)
      return true;
    for (var j = 0; j < set[0].length; j++) {
      if (typeof set[0][j] !== "string")
        return true;
    }
    return false;
  };
  glob.Glob = Glob;
  inherits(Glob, EE);
  function Glob(pattern, options, cb) {
    if (typeof options === "function") {
      cb = options;
      options = null;
    }
    if (options && options.sync) {
      if (cb)
        throw new TypeError("callback provided to sync glob");
      return new GlobSync(pattern, options);
    }
    if (!(this instanceof Glob))
      return new Glob(pattern, options, cb);
    setopts(this, pattern, options);
    this._didRealPath = false;
    var n = this.minimatch.set.length;
    this.matches = new Array(n);
    if (typeof cb === "function") {
      cb = once(cb);
      this.on("error", cb);
      this.on("end", function(matches) {
        cb(null, matches);
      });
    }
    var self = this;
    this._processing = 0;
    this._emitQueue = [];
    this._processQueue = [];
    this.paused = false;
    if (this.noprocess)
      return this;
    if (n === 0)
      return done();
    var sync = true;
    for (var i = 0; i < n; i++) {
      this._process(this.minimatch.set[i], i, false, done);
    }
    sync = false;
    function done() {
      --self._processing;
      if (self._processing <= 0) {
        if (sync) {
          process.nextTick(function() {
            self._finish();
          });
        } else {
          self._finish();
        }
      }
    }
  }
  Glob.prototype._finish = function() {
    assert(this instanceof Glob);
    if (this.aborted)
      return;
    if (this.realpath && !this._didRealpath)
      return this._realpath();
    common.finish(this);
    this.emit("end", this.found);
  };
  Glob.prototype._realpath = function() {
    if (this._didRealpath)
      return;
    this._didRealpath = true;
    var n = this.matches.length;
    if (n === 0)
      return this._finish();
    var self = this;
    for (var i = 0; i < this.matches.length; i++)
      this._realpathSet(i, next);
    function next() {
      if (--n === 0)
        self._finish();
    }
  };
  Glob.prototype._realpathSet = function(index, cb) {
    var matchset = this.matches[index];
    if (!matchset)
      return cb();
    var found = Object.keys(matchset);
    var self = this;
    var n = found.length;
    if (n === 0)
      return cb();
    var set = this.matches[index] = Object.create(null);
    found.forEach(function(p, i) {
      p = self._makeAbs(p);
      rp.realpath(p, self.realpathCache, function(er, real) {
        if (!er)
          set[real] = true;
        else if (er.syscall === "stat")
          set[p] = true;
        else
          self.emit("error", er);
        if (--n === 0) {
          self.matches[index] = set;
          cb();
        }
      });
    });
  };
  Glob.prototype._mark = function(p) {
    return common.mark(this, p);
  };
  Glob.prototype._makeAbs = function(f) {
    return common.makeAbs(this, f);
  };
  Glob.prototype.abort = function() {
    this.aborted = true;
    this.emit("abort");
  };
  Glob.prototype.pause = function() {
    if (!this.paused) {
      this.paused = true;
      this.emit("pause");
    }
  };
  Glob.prototype.resume = function() {
    if (this.paused) {
      this.emit("resume");
      this.paused = false;
      if (this._emitQueue.length) {
        var eq = this._emitQueue.slice(0);
        this._emitQueue.length = 0;
        for (var i = 0; i < eq.length; i++) {
          var e = eq[i];
          this._emitMatch(e[0], e[1]);
        }
      }
      if (this._processQueue.length) {
        var pq = this._processQueue.slice(0);
        this._processQueue.length = 0;
        for (var i = 0; i < pq.length; i++) {
          var p = pq[i];
          this._processing--;
          this._process(p[0], p[1], p[2], p[3]);
        }
      }
    }
  };
  Glob.prototype._process = function(pattern, index, inGlobStar, cb) {
    assert(this instanceof Glob);
    assert(typeof cb === "function");
    if (this.aborted)
      return;
    this._processing++;
    if (this.paused) {
      this._processQueue.push([pattern, index, inGlobStar, cb]);
      return;
    }
    var n = 0;
    while (typeof pattern[n] === "string") {
      n++;
    }
    var prefix;
    switch (n) {
      case pattern.length:
        this._processSimple(pattern.join("/"), index, cb);
        return;
      case 0:
        prefix = null;
        break;
      default:
        prefix = pattern.slice(0, n).join("/");
        break;
    }
    var remain = pattern.slice(n);
    var read;
    if (prefix === null)
      read = ".";
    else if (isAbsolute(prefix) || isAbsolute(pattern.join("/"))) {
      if (!prefix || !isAbsolute(prefix))
        prefix = "/" + prefix;
      read = prefix;
    } else
      read = prefix;
    var abs = this._makeAbs(read);
    if (childrenIgnored(this, read))
      return cb();
    var isGlobStar = remain[0] === minimatch.GLOBSTAR;
    if (isGlobStar)
      this._processGlobStar(prefix, read, abs, remain, index, inGlobStar, cb);
    else
      this._processReaddir(prefix, read, abs, remain, index, inGlobStar, cb);
  };
  Glob.prototype._processReaddir = function(prefix, read, abs, remain, index, inGlobStar, cb) {
    var self = this;
    this._readdir(abs, inGlobStar, function(er, entries) {
      return self._processReaddir2(prefix, read, abs, remain, index, inGlobStar, entries, cb);
    });
  };
  Glob.prototype._processReaddir2 = function(prefix, read, abs, remain, index, inGlobStar, entries, cb) {
    if (!entries)
      return cb();
    var pn = remain[0];
    var negate = !!this.minimatch.negate;
    var rawGlob = pn._glob;
    var dotOk = this.dot || rawGlob.charAt(0) === ".";
    var matchedEntries = [];
    for (var i = 0; i < entries.length; i++) {
      var e = entries[i];
      if (e.charAt(0) !== "." || dotOk) {
        var m;
        if (negate && !prefix) {
          m = !e.match(pn);
        } else {
          m = e.match(pn);
        }
        if (m)
          matchedEntries.push(e);
      }
    }
    var len = matchedEntries.length;
    if (len === 0)
      return cb();
    if (remain.length === 1 && !this.mark && !this.stat) {
      if (!this.matches[index])
        this.matches[index] = Object.create(null);
      for (var i = 0; i < len; i++) {
        var e = matchedEntries[i];
        if (prefix) {
          if (prefix !== "/")
            e = prefix + "/" + e;
          else
            e = prefix + e;
        }
        if (e.charAt(0) === "/" && !this.nomount) {
          e = path.join(this.root, e);
        }
        this._emitMatch(index, e);
      }
      return cb();
    }
    remain.shift();
    for (var i = 0; i < len; i++) {
      var e = matchedEntries[i];
      var newPattern;
      if (prefix) {
        if (prefix !== "/")
          e = prefix + "/" + e;
        else
          e = prefix + e;
      }
      this._process([e].concat(remain), index, inGlobStar, cb);
    }
    cb();
  };
  Glob.prototype._emitMatch = function(index, e) {
    if (this.aborted)
      return;
    if (isIgnored(this, e))
      return;
    if (this.paused) {
      this._emitQueue.push([index, e]);
      return;
    }
    var abs = isAbsolute(e) ? e : this._makeAbs(e);
    if (this.mark)
      e = this._mark(e);
    if (this.absolute)
      e = abs;
    if (this.matches[index][e])
      return;
    if (this.nodir) {
      var c = this.cache[abs];
      if (c === "DIR" || Array.isArray(c))
        return;
    }
    this.matches[index][e] = true;
    var st = this.statCache[abs];
    if (st)
      this.emit("stat", e, st);
    this.emit("match", e);
  };
  Glob.prototype._readdirInGlobStar = function(abs, cb) {
    if (this.aborted)
      return;
    if (this.follow)
      return this._readdir(abs, false, cb);
    var lstatkey = "lstat\0" + abs;
    var self = this;
    var lstatcb = inflight(lstatkey, lstatcb_);
    if (lstatcb)
      fs.lstat(abs, lstatcb);
    function lstatcb_(er, lstat) {
      if (er && er.code === "ENOENT")
        return cb();
      var isSym = lstat && lstat.isSymbolicLink();
      self.symlinks[abs] = isSym;
      if (!isSym && lstat && !lstat.isDirectory()) {
        self.cache[abs] = "FILE";
        cb();
      } else
        self._readdir(abs, false, cb);
    }
  };
  Glob.prototype._readdir = function(abs, inGlobStar, cb) {
    if (this.aborted)
      return;
    cb = inflight("readdir\0" + abs + "\0" + inGlobStar, cb);
    if (!cb)
      return;
    if (inGlobStar && !ownProp(this.symlinks, abs))
      return this._readdirInGlobStar(abs, cb);
    if (ownProp(this.cache, abs)) {
      var c = this.cache[abs];
      if (!c || c === "FILE")
        return cb();
      if (Array.isArray(c))
        return cb(null, c);
    }
    var self = this;
    fs.readdir(abs, readdirCb(this, abs, cb));
  };
  function readdirCb(self, abs, cb) {
    return function(er, entries) {
      if (er)
        self._readdirError(abs, er, cb);
      else
        self._readdirEntries(abs, entries, cb);
    };
  }
  Glob.prototype._readdirEntries = function(abs, entries, cb) {
    if (this.aborted)
      return;
    if (!this.mark && !this.stat) {
      for (var i = 0; i < entries.length; i++) {
        var e = entries[i];
        if (abs === "/")
          e = abs + e;
        else
          e = abs + "/" + e;
        this.cache[e] = true;
      }
    }
    this.cache[abs] = entries;
    return cb(null, entries);
  };
  Glob.prototype._readdirError = function(f, er, cb) {
    if (this.aborted)
      return;
    switch (er.code) {
      case "ENOTSUP":
      case "ENOTDIR":
        var abs = this._makeAbs(f);
        this.cache[abs] = "FILE";
        if (abs === this.cwdAbs) {
          var error = new Error(er.code + " invalid cwd " + this.cwd);
          error.path = this.cwd;
          error.code = er.code;
          this.emit("error", error);
          this.abort();
        }
        break;
      case "ENOENT":
      case "ELOOP":
      case "ENAMETOOLONG":
      case "UNKNOWN":
        this.cache[this._makeAbs(f)] = false;
        break;
      default:
        this.cache[this._makeAbs(f)] = false;
        if (this.strict) {
          this.emit("error", er);
          this.abort();
        }
        if (!this.silent)
          console.error("glob error", er);
        break;
    }
    return cb();
  };
  Glob.prototype._processGlobStar = function(prefix, read, abs, remain, index, inGlobStar, cb) {
    var self = this;
    this._readdir(abs, inGlobStar, function(er, entries) {
      self._processGlobStar2(prefix, read, abs, remain, index, inGlobStar, entries, cb);
    });
  };
  Glob.prototype._processGlobStar2 = function(prefix, read, abs, remain, index, inGlobStar, entries, cb) {
    if (!entries)
      return cb();
    var remainWithoutGlobStar = remain.slice(1);
    var gspref = prefix ? [prefix] : [];
    var noGlobStar = gspref.concat(remainWithoutGlobStar);
    this._process(noGlobStar, index, false, cb);
    var isSym = this.symlinks[abs];
    var len = entries.length;
    if (isSym && inGlobStar)
      return cb();
    for (var i = 0; i < len; i++) {
      var e = entries[i];
      if (e.charAt(0) === "." && !this.dot)
        continue;
      var instead = gspref.concat(entries[i], remainWithoutGlobStar);
      this._process(instead, index, true, cb);
      var below = gspref.concat(entries[i], remain);
      this._process(below, index, true, cb);
    }
    cb();
  };
  Glob.prototype._processSimple = function(prefix, index, cb) {
    var self = this;
    this._stat(prefix, function(er, exists) {
      self._processSimple2(prefix, index, er, exists, cb);
    });
  };
  Glob.prototype._processSimple2 = function(prefix, index, er, exists, cb) {
    if (!this.matches[index])
      this.matches[index] = Object.create(null);
    if (!exists)
      return cb();
    if (prefix && isAbsolute(prefix) && !this.nomount) {
      var trail = /[\/\\]$/.test(prefix);
      if (prefix.charAt(0) === "/") {
        prefix = path.join(this.root, prefix);
      } else {
        prefix = path.resolve(this.root, prefix);
        if (trail)
          prefix += "/";
      }
    }
    if (process.platform === "win32")
      prefix = prefix.replace(/\\/g, "/");
    this._emitMatch(index, prefix);
    cb();
  };
  Glob.prototype._stat = function(f, cb) {
    var abs = this._makeAbs(f);
    var needDir = f.slice(-1) === "/";
    if (f.length > this.maxLength)
      return cb();
    if (!this.stat && ownProp(this.cache, abs)) {
      var c = this.cache[abs];
      if (Array.isArray(c))
        c = "DIR";
      if (!needDir || c === "DIR")
        return cb(null, c);
      if (needDir && c === "FILE")
        return cb();
    }
    var exists;
    var stat = this.statCache[abs];
    if (stat !== void 0) {
      if (stat === false)
        return cb(null, stat);
      else {
        var type = stat.isDirectory() ? "DIR" : "FILE";
        if (needDir && type === "FILE")
          return cb();
        else
          return cb(null, type, stat);
      }
    }
    var self = this;
    var statcb = inflight("stat\0" + abs, lstatcb_);
    if (statcb)
      fs.lstat(abs, statcb);
    function lstatcb_(er, lstat) {
      if (lstat && lstat.isSymbolicLink()) {
        return fs.stat(abs, function(er2, stat2) {
          if (er2)
            self._stat2(f, abs, null, lstat, cb);
          else
            self._stat2(f, abs, er2, stat2, cb);
        });
      } else {
        self._stat2(f, abs, er, lstat, cb);
      }
    }
  };
  Glob.prototype._stat2 = function(f, abs, er, stat, cb) {
    if (er && (er.code === "ENOENT" || er.code === "ENOTDIR")) {
      this.statCache[abs] = false;
      return cb();
    }
    var needDir = f.slice(-1) === "/";
    this.statCache[abs] = stat;
    if (abs.slice(-1) === "/" && stat && !stat.isDirectory())
      return cb(null, false, stat);
    var c = true;
    if (stat)
      c = stat.isDirectory() ? "DIR" : "FILE";
    this.cache[abs] = this.cache[abs] || c;
    if (needDir && c === "FILE")
      return cb();
    return cb(null, c, stat);
  };
});

// ../../node_modules/rimraf/rimraf.js
var require_rimraf = __commonJS((exports2, module2) => {
  var assert = require("assert");
  var path = require("path");
  var fs = require("fs");
  var glob = void 0;
  try {
    glob = require_glob();
  } catch (_err) {
  }
  var defaultGlobOpts = {
    nosort: true,
    silent: true
  };
  var timeout = 0;
  var isWindows = process.platform === "win32";
  var defaults = (options) => {
    const methods = [
      "unlink",
      "chmod",
      "stat",
      "lstat",
      "rmdir",
      "readdir"
    ];
    methods.forEach((m) => {
      options[m] = options[m] || fs[m];
      m = m + "Sync";
      options[m] = options[m] || fs[m];
    });
    options.maxBusyTries = options.maxBusyTries || 3;
    options.emfileWait = options.emfileWait || 1e3;
    if (options.glob === false) {
      options.disableGlob = true;
    }
    if (options.disableGlob !== true && glob === void 0) {
      throw Error("glob dependency not found, set `options.disableGlob = true` if intentional");
    }
    options.disableGlob = options.disableGlob || false;
    options.glob = options.glob || defaultGlobOpts;
  };
  var rimraf = (p, options, cb) => {
    if (typeof options === "function") {
      cb = options;
      options = {};
    }
    assert(p, "rimraf: missing path");
    assert.equal(typeof p, "string", "rimraf: path should be a string");
    assert.equal(typeof cb, "function", "rimraf: callback function required");
    assert(options, "rimraf: invalid options argument provided");
    assert.equal(typeof options, "object", "rimraf: options should be object");
    defaults(options);
    let busyTries = 0;
    let errState = null;
    let n = 0;
    const next = (er) => {
      errState = errState || er;
      if (--n === 0)
        cb(errState);
    };
    const afterGlob = (er, results) => {
      if (er)
        return cb(er);
      n = results.length;
      if (n === 0)
        return cb();
      results.forEach((p2) => {
        const CB = (er2) => {
          if (er2) {
            if ((er2.code === "EBUSY" || er2.code === "ENOTEMPTY" || er2.code === "EPERM") && busyTries < options.maxBusyTries) {
              busyTries++;
              return setTimeout(() => rimraf_(p2, options, CB), busyTries * 100);
            }
            if (er2.code === "EMFILE" && timeout < options.emfileWait) {
              return setTimeout(() => rimraf_(p2, options, CB), timeout++);
            }
            if (er2.code === "ENOENT")
              er2 = null;
          }
          timeout = 0;
          next(er2);
        };
        rimraf_(p2, options, CB);
      });
    };
    if (options.disableGlob || !glob.hasMagic(p))
      return afterGlob(null, [p]);
    options.lstat(p, (er, stat) => {
      if (!er)
        return afterGlob(null, [p]);
      glob(p, options.glob, afterGlob);
    });
  };
  var rimraf_ = (p, options, cb) => {
    assert(p);
    assert(options);
    assert(typeof cb === "function");
    options.lstat(p, (er, st) => {
      if (er && er.code === "ENOENT")
        return cb(null);
      if (er && er.code === "EPERM" && isWindows)
        fixWinEPERM(p, options, er, cb);
      if (st && st.isDirectory())
        return rmdir(p, options, er, cb);
      options.unlink(p, (er2) => {
        if (er2) {
          if (er2.code === "ENOENT")
            return cb(null);
          if (er2.code === "EPERM")
            return isWindows ? fixWinEPERM(p, options, er2, cb) : rmdir(p, options, er2, cb);
          if (er2.code === "EISDIR")
            return rmdir(p, options, er2, cb);
        }
        return cb(er2);
      });
    });
  };
  var fixWinEPERM = (p, options, er, cb) => {
    assert(p);
    assert(options);
    assert(typeof cb === "function");
    options.chmod(p, 438, (er2) => {
      if (er2)
        cb(er2.code === "ENOENT" ? null : er);
      else
        options.stat(p, (er3, stats) => {
          if (er3)
            cb(er3.code === "ENOENT" ? null : er);
          else if (stats.isDirectory())
            rmdir(p, options, er, cb);
          else
            options.unlink(p, cb);
        });
    });
  };
  var fixWinEPERMSync = (p, options, er) => {
    assert(p);
    assert(options);
    try {
      options.chmodSync(p, 438);
    } catch (er2) {
      if (er2.code === "ENOENT")
        return;
      else
        throw er;
    }
    let stats;
    try {
      stats = options.statSync(p);
    } catch (er3) {
      if (er3.code === "ENOENT")
        return;
      else
        throw er;
    }
    if (stats.isDirectory())
      rmdirSync(p, options, er);
    else
      options.unlinkSync(p);
  };
  var rmdir = (p, options, originalEr, cb) => {
    assert(p);
    assert(options);
    assert(typeof cb === "function");
    options.rmdir(p, (er) => {
      if (er && (er.code === "ENOTEMPTY" || er.code === "EEXIST" || er.code === "EPERM"))
        rmkids(p, options, cb);
      else if (er && er.code === "ENOTDIR")
        cb(originalEr);
      else
        cb(er);
    });
  };
  var rmkids = (p, options, cb) => {
    assert(p);
    assert(options);
    assert(typeof cb === "function");
    options.readdir(p, (er, files) => {
      if (er)
        return cb(er);
      let n = files.length;
      if (n === 0)
        return options.rmdir(p, cb);
      let errState;
      files.forEach((f) => {
        rimraf(path.join(p, f), options, (er2) => {
          if (errState)
            return;
          if (er2)
            return cb(errState = er2);
          if (--n === 0)
            options.rmdir(p, cb);
        });
      });
    });
  };
  var rimrafSync = (p, options) => {
    options = options || {};
    defaults(options);
    assert(p, "rimraf: missing path");
    assert.equal(typeof p, "string", "rimraf: path should be a string");
    assert(options, "rimraf: missing options");
    assert.equal(typeof options, "object", "rimraf: options should be object");
    let results;
    if (options.disableGlob || !glob.hasMagic(p)) {
      results = [p];
    } else {
      try {
        options.lstatSync(p);
        results = [p];
      } catch (er) {
        results = glob.sync(p, options.glob);
      }
    }
    if (!results.length)
      return;
    for (let i = 0; i < results.length; i++) {
      const p2 = results[i];
      let st;
      try {
        st = options.lstatSync(p2);
      } catch (er) {
        if (er.code === "ENOENT")
          return;
        if (er.code === "EPERM" && isWindows)
          fixWinEPERMSync(p2, options, er);
      }
      try {
        if (st && st.isDirectory())
          rmdirSync(p2, options, null);
        else
          options.unlinkSync(p2);
      } catch (er) {
        if (er.code === "ENOENT")
          return;
        if (er.code === "EPERM")
          return isWindows ? fixWinEPERMSync(p2, options, er) : rmdirSync(p2, options, er);
        if (er.code !== "EISDIR")
          throw er;
        rmdirSync(p2, options, er);
      }
    }
  };
  var rmdirSync = (p, options, originalEr) => {
    assert(p);
    assert(options);
    try {
      options.rmdirSync(p);
    } catch (er) {
      if (er.code === "ENOENT")
        return;
      if (er.code === "ENOTDIR")
        throw originalEr;
      if (er.code === "ENOTEMPTY" || er.code === "EEXIST" || er.code === "EPERM")
        rmkidsSync(p, options);
    }
  };
  var rmkidsSync = (p, options) => {
    assert(p);
    assert(options);
    options.readdirSync(p).forEach((f) => rimrafSync(path.join(p, f), options));
    const retries = isWindows ? 100 : 1;
    let i = 0;
    do {
      let threw = true;
      try {
        const ret = options.rmdirSync(p, options);
        threw = false;
        return ret;
      } finally {
        if (++i < retries && threw)
          continue;
      }
    } while (true);
  };
  module2.exports = rimraf;
  rimraf.sync = rimrafSync;
});

// ../../node_modules/flat-cache/src/del.js
var require_del = __commonJS((exports2, module2) => {
  var rimraf = require_rimraf().sync;
  var fs = require("fs");
  module2.exports = function del(file) {
    if (fs.existsSync(file)) {
      rimraf(file, {
        glob: false
      });
      return true;
    }
    return false;
  };
});

// ../../node_modules/flat-cache/src/cache.js
var require_cache = __commonJS((exports2, module2) => {
  var path = require("path");
  var fs = require("fs");
  var utils = require_utils();
  var del = require_del();
  var writeJSON = utils.writeJSON;
  var cache = {
    load: function(docId, cacheDir) {
      var me = this;
      me._visited = {};
      me._persisted = {};
      me._pathToFile = cacheDir ? path.resolve(cacheDir, docId) : path.resolve(__dirname, "../.cache/", docId);
      if (fs.existsSync(me._pathToFile)) {
        me._persisted = utils.tryParse(me._pathToFile, {});
      }
    },
    loadFile: function(pathToFile) {
      var me = this;
      var dir = path.dirname(pathToFile);
      var fName = path.basename(pathToFile);
      me.load(fName, dir);
    },
    all: function() {
      return this._persisted;
    },
    keys: function() {
      return Object.keys(this._persisted);
    },
    setKey: function(key, value) {
      this._visited[key] = true;
      this._persisted[key] = value;
    },
    removeKey: function(key) {
      delete this._visited[key];
      delete this._persisted[key];
    },
    getKey: function(key) {
      this._visited[key] = true;
      return this._persisted[key];
    },
    _prune: function() {
      var me = this;
      var obj = {};
      var keys = Object.keys(me._visited);
      if (keys.length === 0) {
        return;
      }
      keys.forEach(function(key) {
        obj[key] = me._persisted[key];
      });
      me._visited = {};
      me._persisted = obj;
    },
    save: function(noPrune) {
      var me = this;
      !noPrune && me._prune();
      writeJSON(me._pathToFile, me._persisted);
    },
    removeCacheFile: function() {
      return del(this._pathToFile);
    },
    destroy: function() {
      var me = this;
      me._visited = {};
      me._persisted = {};
      me.removeCacheFile();
    }
  };
  module2.exports = {
    load: function(docId, cacheDir) {
      return this.create(docId, cacheDir);
    },
    create: function(docId, cacheDir) {
      var obj = Object.create(cache);
      obj.load(docId, cacheDir);
      return obj;
    },
    createFromFile: function(filePath) {
      var obj = Object.create(cache);
      obj.loadFile(filePath);
      return obj;
    },
    clearCacheById: function(docId, cacheDir) {
      var filePath = cacheDir ? path.resolve(cacheDir, docId) : path.resolve(__dirname, "../.cache/", docId);
      return del(filePath);
    },
    clearAll: function(cacheDir) {
      var filePath = cacheDir ? path.resolve(cacheDir) : path.resolve(__dirname, "../.cache/");
      return del(filePath);
    }
  };
});

// src/server/index.js
__export(exports, {
  renderToStringWithData: () => renderToStringWithData_default
});

// src/server/renderToStringWithData.jsx
var import_react2 = __toModule(require("react"));
var import_server = __toModule(require("react-dom/server"));

// src/client/ServerSideEffectProvider.jsx
var import_react = __toModule(require("react"));
var import_use_ssr = __toModule(require_useSSR());
var ServerSideEffectContext = import_react.default.createContext({});
var ServerSideEffectProvider = ServerSideEffectContext.Provider;

// src/server/utilities/cacheServerSideContext.js
async function cacheSSEData({
  cacheInstance,
  resolvedData,
  contextKeys
}) {
  const promisesToCache = resolvedData.map((data, index) => {
    return new Promise((resolve, reject) => {
      return resolve("cached");
    }).then((res) => {
      cacheInstance.setKey(contextKeys[index], {
        data,
        timestamp: new Date().getTime()
      });
      return data;
    });
  });
  await Promise.all(promisesToCache);
  cacheInstance.save();
}

// src/server/utilities/helper.js
var R = require_src();
var isBoolean = R.is(Boolean);
var hasExpired = ({cacheDuration, oldTimestamp, newTimestamp}) => {
  return isBoolean(cacheDuration) ? !cacheDuration : newTimestamp - oldTimestamp >= cacheDuration;
};
var mergeByCondition = (obj1, obj2) => {
  const obj1Keys = Object.keys(obj1);
  const returnModifiedObj = (transformingObj) => {
    if (obj1Keys.length === 0)
      return transformingObj;
    const currentKey = obj1Keys[0];
    const currentKeyLens = R.lensProp(currentKey);
    const updatedObj = R.when(() => {
      return R.isEmpty(obj2) ? false : R.has(currentKey, obj2) && !hasExpired({
        cacheDuration: obj1[currentKey].cacheDuration,
        oldTimestamp: obj2[currentKey].timestamp,
        newTimestamp: obj1[currentKey].timestamp
      });
    })(R.set(currentKeyLens)(obj2[currentKey]))(transformingObj);
    obj1Keys.shift();
    return returnModifiedObj(updatedObj);
  };
  return returnModifiedObj(obj1);
};

// src/server/renderToStringWithData.jsx
var omit = require_object();
var R2 = require_src();
var flatCache = require_cache();
async function renderToStringWithData(App, cachePath = void 0) {
  try {
    const cache = flatCache.load("useServerSideEffect", cachePath);
    const context = {
      sse: {}
    };
    import_server.renderToStaticMarkup(/* @__PURE__ */ import_react2.default.createElement(ServerSideEffectProvider, {
      value: context
    }, App));
    const sseEffect = context.sse;
    const cachedData = cache._persisted;
    const dataWithCacheHandled = mergeByCondition(sseEffect, cachedData);
    const promisesArr = R2.pipe(R2.values, R2.map(R2.prop("data")))(dataWithCacheHandled);
    const promisesKey = Object.keys(context.sse);
    const resolvedData = await Promise.all(promisesArr);
    await cacheSSEData({
      cacheInstance: cache,
      resolvedData,
      contextKeys: promisesKey
    });
    const contextWithData = R2.zipObj(promisesKey, resolvedData);
    const markupWithData = import_server.renderToString(/* @__PURE__ */ import_react2.default.createElement(ServerSideEffectProvider, {
      value: contextWithData
    }, App));
    return {
      data: resolvedData,
      markupWithData
    };
  } catch (e) {
    console.log(e);
  }
}
var renderToStringWithData_default = renderToStringWithData;
