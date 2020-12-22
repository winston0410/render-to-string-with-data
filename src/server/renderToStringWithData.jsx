import React from 'react'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import {
  ServerSideEffectProvider
} from '../client/index'
import {
  cacheSSEData
} from './utilities/cacheServerSideContext'
import {
  mergeByCondition
} from './utilities/helper'
const omit = require('object.omit')

const R = require('ramda')

const flatCache = require('flat-cache')
async function renderToStringWithData (App, cachePath = undefined) {
  try {
    const cache = flatCache.load('useServerSideEffect', cachePath)
    const context = {
      sse: {}
    }

    renderToStaticMarkup(
      <ServerSideEffectProvider value={context}>
        {App}
      </ServerSideEffectProvider>
    )

    const sseEffect = context.sse
    const cachedData = cache._persisted

    const dataWithCacheHandled = mergeByCondition(sseEffect, cachedData)

    const promisesArr = R.pipe(
      R.values,
      R.map(R.prop('data'))
    )(dataWithCacheHandled)

    const promisesKey = Object.keys(context.sse)

    const resolvedData = await Promise.all(promisesArr)

    await cacheSSEData({
      cacheInstance: cache,
      resolvedData: resolvedData,
      contextKeys: promisesKey
    })

    const contextWithData = R.zipObj(promisesKey, resolvedData)

    const markupWithData = renderToString(
      <ServerSideEffectProvider value={contextWithData}>
        {App}
      </ServerSideEffectProvider>
    )

    return {
      data: resolvedData,
      markupWithData: markupWithData
    }
  } catch (e) {
    console.log(e)
  }
}

export default renderToStringWithData
