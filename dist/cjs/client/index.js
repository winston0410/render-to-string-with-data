'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const {
  useSSR
} = require('use-ssr'); // import joli from '@blackblock/joli'
// import basicCharList from '@blackblock/css-chars'
//
// const generator = joli({
//   chars: basicCharList
// })


const ServerSideEffectContext = /*#__PURE__*/React__default['default'].createContext({});
const ServerSideEffectProvider = ServerSideEffectContext.Provider;

function useServerSideEffect({
  callback,
  clientSideState,
  cacheDuration = false,
  key
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
    // const key = generator.next().value
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
