import React, { useContext, useState } from 'react'
import useSSR from 'use-ssr'
// const R = require('ramda')
const ServerSideEffectContext = React.createContext({})
const ServerSideEffectProvider = ServerSideEffectContext.Provider

function useServerSideEffect ({
  callback,
  key,
  clientSideState,
  cacheDuration = false
}) {
  const { isBrowser, isServer, isNative } = useSSR()
  if (isBrowser) {
    return clientSideState
  }

  if (isServer) {
    const cxt = useContext(ServerSideEffectContext)
    // console.log('check cxt', cxt)
    if (cxt[key]) {
      return cxt[key]
    }

    cxt.sse[key] = {
      data: callback().then(data => {
        cxt[key] = data
        return data
      }),
      cacheDuration: cacheDuration,
      timestamp: new Date().getTime()
    }

    return clientSideState
  }
}

export {
  ServerSideEffectContext,
  ServerSideEffectProvider,
  useServerSideEffect
}
