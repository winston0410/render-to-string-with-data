'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var basicCharList = require('@blackblock/css-chars');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var basicCharList__default = /*#__PURE__*/_interopDefaultLegacy(basicCharList);

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;

var __markAsModule = target => __defProp(target, "__esModule", {
  value: true
});

var __commonJS = (callback, module) => () => {
  if (!module) {
    module = {
      exports: {}
    };
    callback(module.exports, module);
  }

  return module.exports;
};

var __exportStar = (target, module, desc) => {
  __markAsModule(target);

  if (module && typeof module === "object" || typeof module === "function") {
    for (let key of __getOwnPropNames(module)) if (!__hasOwnProp.call(target, key) && key !== "default") __defProp(target, key, {
      get: () => module[key],
      enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable
    });
  }

  return target;
};

var __toModule = module => {
  if (module && module.__esModule) return module;
  return __exportStar(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", {
    value: module,
    enumerable: true
  }), module);
}; // ../../node_modules/fast-memoize/src/index.js


var require_src = __commonJS((exports, module) => {
  function memoize3(fn, options) {
    var cache = options && options.cache ? options.cache : cacheDefault;
    var serializer = options && options.serializer ? options.serializer : serializerDefault;
    var strategy = options && options.strategy ? options.strategy : strategyDefault;
    return strategy(fn, {
      cache,
      serializer
    });
  }

  function isPrimitive(value) {
    return value == null || typeof value === "number" || typeof value === "boolean";
  }

  function monadic(fn, cache, serializer, arg) {
    var cacheKey = isPrimitive(arg) ? arg : serializer(arg);
    var computedValue = cache.get(cacheKey);

    if (typeof computedValue === "undefined") {
      computedValue = fn.call(this, arg);
      cache.set(cacheKey, computedValue);
    }

    return computedValue;
  }

  function variadic(fn, cache, serializer) {
    var args = Array.prototype.slice.call(arguments, 3);
    var cacheKey = serializer(args);
    var computedValue = cache.get(cacheKey);

    if (typeof computedValue === "undefined") {
      computedValue = fn.apply(this, args);
      cache.set(cacheKey, computedValue);
    }

    return computedValue;
  }

  function assemble(fn, context, strategy, cache, serialize) {
    return strategy.bind(context, fn, cache, serialize);
  }

  function strategyDefault(fn, options) {
    var strategy = fn.length === 1 ? monadic : variadic;
    return assemble(fn, this, strategy, options.cache.create(), options.serializer);
  }

  function strategyVariadic(fn, options) {
    var strategy = variadic;
    return assemble(fn, this, strategy, options.cache.create(), options.serializer);
  }

  function strategyMonadic(fn, options) {
    var strategy = monadic;
    return assemble(fn, this, strategy, options.cache.create(), options.serializer);
  }

  function serializerDefault() {
    return JSON.stringify(arguments);
  }

  function ObjectWithoutPrototypeCache() {
    this.cache = Object.create(null);
  }

  ObjectWithoutPrototypeCache.prototype.has = function (key) {
    return key in this.cache;
  };

  ObjectWithoutPrototypeCache.prototype.get = function (key) {
    return this.cache[key];
  };

  ObjectWithoutPrototypeCache.prototype.set = function (key, value) {
    this.cache[key] = value;
  };

  var cacheDefault = {
    create: function create() {
      return new ObjectWithoutPrototypeCache();
    }
  };
  module.exports = memoize3;
  module.exports.strategies = {
    variadic: strategyVariadic,
    monadic: strategyMonadic
  };
}); // src/generateChar.js


var import_fast_memoize = __toModule(require_src());

function generateChar(chars, currentPass) {
  const str = [];

  const recursion = passingCount => {
    if (passingCount < chars.length) {
      str.unshift(chars[passingCount]);
      return str.join("");
    }

    const charIndex = Math.floor(passingCount / chars.length) - 1;
    const remainder = passingCount % chars.length;
    str.unshift(chars[remainder]);
    return recursion(charIndex);
  };

  return recursion(currentPass);
}

var generateChar_default = generateChar; // src/index.js

var import_fast_memoize2 = __toModule(require_src());

var memoizedFn = import_fast_memoize2.default(generateChar_default);

function* uniqueStrGenerator(options) {
  let i = 0;

  while (true) {
    yield memoizedFn(options.chars, i);
    i++;
  }
}

var src_default = uniqueStrGenerator;

const {
  useSSR
} = require('use-ssr');

const generator = src_default({
  chars: basicCharList__default['default']
});
const ServerSideEffectContext = /*#__PURE__*/React__default['default'].createContext({});
const ServerSideEffectProvider = ServerSideEffectContext.Provider;

function useServerSideEffect({
  callback,
  clientSideState,
  cacheDuration = false,
  key = generator.next().value
}) {
  const {
    isBrowser,
    isServer,
    isNative
  } = useSSR();

  if (isBrowser) {
    return clientSideState;
  }

  if (isServer) {
    const cxt = React.useContext(ServerSideEffectContext); // console.log('check cxt', cxt)

    if (cxt[key]) {
      return cxt[key];
    }

    cxt.sse[key] = {
      data: callback().then(data => {
        cxt[key] = data;
        return data;
      }),
      cacheDuration: cacheDuration,
      timestamp: new Date().getTime()
    };
    return clientSideState;
  }
}

exports.ServerSideEffectContext = ServerSideEffectContext;
exports.ServerSideEffectProvider = ServerSideEffectProvider;
exports.useServerSideEffect = useServerSideEffect;
