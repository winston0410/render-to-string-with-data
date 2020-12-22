async function cacheSSEData ({
  cacheInstance,
  resolvedData,
  contextKeys
}) {
  const promisesToCache = resolvedData.map((data, index) => {
    return new Promise((resolve, reject) => {
      return resolve('cached')
    }).then(res => {
      cacheInstance.setKey(contextKeys[index], {
        data: data,
        timestamp: new Date().getTime()
      })
      return data
    })
  })

  await Promise.all(promisesToCache)

  cacheInstance.save()
}

export {
  cacheSSEData
}
