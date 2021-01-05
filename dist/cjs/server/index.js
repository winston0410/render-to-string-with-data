'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var renderToStringWithData$1 = require('@blackblock/render-to-string-with-data');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

async function cacheSSEData({
  cacheInstance,
  resolvedData,
  contextKeys
}) {
  const promisesToCache = resolvedData.map((data, index) => {
    return new Promise((resolve, reject) => {
      return resolve('cached');
    }).then(res => {
      cacheInstance.setKey(contextKeys[index], {
        data: data,
        timestamp: new Date().getTime()
      });
      return data;
    });
  });
  await Promise.all(promisesToCache);
  cacheInstance.save();
}

const R = require('ramda');

const isBoolean = R.is(Boolean);

const hasExpired = ({
  cacheDuration,
  oldTimestamp,
  newTimestamp
}) => {
  return isBoolean(cacheDuration) ? !cacheDuration : newTimestamp - oldTimestamp >= cacheDuration;
};

const mergeByCondition = (obj1, obj2) => {
  const obj1Keys = Object.keys(obj1);

  const returnModifiedObj = transformingObj => {
    if (obj1Keys.length === 0) return transformingObj;
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
//   return ({
//     ...transformingObj,
//     [currentKey]: obj2[currentKey]
//   })
// }

const {
  renderToString,
  renderToStaticMarkup
} = require('react-dom/server');

const omit = require('object.omit');

const R$1 = require('ramda');

const flatCache = require('flat-cache');

async function renderToStringWithData(App, cachePath = undefined) {
  try {
    const cache = flatCache.load('useServerSideEffect', cachePath);
    const context = {
      sse: {}
    };
    renderToStaticMarkup( /*#__PURE__*/React__default['default'].createElement(renderToStringWithData$1.ServerSideEffectProvider, {
      value: context
    }, App));
    const sseEffect = context.sse;
    const cachedData = cache._persisted;
    const dataWithCacheHandled = mergeByCondition(sseEffect, cachedData);
    const promisesArr = R$1.pipe(R$1.values, R$1.map(R$1.prop('data')))(dataWithCacheHandled);
    const promisesKey = Object.keys(context.sse);
    const resolvedData = await Promise.all(promisesArr);
    await cacheSSEData({
      cacheInstance: cache,
      resolvedData: resolvedData,
      contextKeys: promisesKey
    });
    const contextWithData = R$1.zipObj(promisesKey, resolvedData);
    const markupWithData = renderToString( /*#__PURE__*/React__default['default'].createElement(renderToStringWithData$1.ServerSideEffectProvider, {
      value: contextWithData
    }, App));
    return {
      data: resolvedData,
      markupWithData: markupWithData
    };
  } catch (e) {
    console.log(e);
  }
}

exports.default = renderToStringWithData;
