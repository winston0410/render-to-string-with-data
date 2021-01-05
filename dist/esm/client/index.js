var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __commonJS = (callback, module) => () => {
  if (!module) {
    module = {exports: {}};
    callback(module.exports, module);
  }
  return module.exports;
};
var __exportStar = (target, module, desc) => {
  __markAsModule(target);
  if (module && typeof module === "object" || typeof module === "function") {
    for (let key of __getOwnPropNames(module))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, {get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable});
  }
  return target;
};
var __toModule = (module) => {
  if (module && module.__esModule)
    return module;
  return __exportStar(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", {value: module, enumerable: true}), module);
};

// ../../node_modules/use-ssr/dist/useSSR.js
var require_useSSR = __commonJS((exports) => {
  "use strict";
  var __assign = exports && exports.__assign || function() {
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
  Object.defineProperty(exports, "__esModule", {value: true});
  var Device;
  (function(Device2) {
    Device2["Browser"] = "browser";
    Device2["Server"] = "server";
    Device2["Native"] = "native";
  })(Device = exports.Device || (exports.Device = {}));
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
  exports.weAreServer = function() {
    SSRObject.isServer = true;
    useSSRObject = toArrayObject();
  };
  exports.useSSR = function() {
    return useSSRObject;
  };
  exports.default = exports.useSSR;
});

// src/client/ServerSideEffectProvider.jsx
var import_use_ssr = __toModule(require_useSSR());
import React, {useContext, useState} from "react";
var ServerSideEffectContext = React.createContext({});
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
    const cxt = useContext(ServerSideEffectContext);
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
export {
  ServerSideEffectContext,
  ServerSideEffectProvider,
  useServerSideEffect
};
