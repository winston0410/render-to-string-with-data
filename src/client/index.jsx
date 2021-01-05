import React, { useContext, useState } from 'react'
import joli from '@blackblock/joli'
import basicCharList from '@blackblock/css-chars'
const {
  useSSR
} = require('use-ssr')

const generator = joli({
  chars: basicCharList
})

const ServerSideEffectContext = React.createContext({})
const ServerSideEffectProvider = ServerSideEffectContext.Provider

function useServerSideEffect ({
  callback,
  clientSideState,
  cacheDuration = false,
  key = generator.next().value
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
