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

// src/client/index.js
__export(exports, {
  ServerSideEffectContext: () => ServerSideEffectContext,
  ServerSideEffectProvider: () => ServerSideEffectProvider,
  useServerSideEffect: () => useServerSideEffect
});

// src/client/ServerSideEffectProvider.jsx
var import_react = __toModule(require("react"));
var import_use_ssr = __toModule(require_useSSR());
var ServerSideEffectContext = import_react.default.createContext({});
var ServerSideEffectProvider = ServerSideEffectContext.Provider;
function useServerSideEffect({
  callback,
  clientSideState,
  cacheDuration = false
}) {
  const {isBrowser, isServer, isNative} = import_use_ssr.default();
  if (isBrowser) {
    return clientSideState;
  }
  if (isServer) {
    const key = "test";
    const cxt = import_react.useContext(ServerSideEffectContext);
    if (cxt[key]) {
      return cxt[key];
    }
    cxt.sse[key] = {
      data: callback().then((data) => {
        cxt[key] = data;
        return data;
      }),
      cacheDuration,
      timestamp: new Date().getTime()
    };
    return clientSideState;
  }
}
