const R = require('ramda')

const isBoolean = R.is(Boolean)

const hasExpired = ({ cacheDuration, oldTimestamp, newTimestamp }) => {
  return isBoolean(cacheDuration)
    ? !cacheDuration
    : (newTimestamp - oldTimestamp) >= cacheDuration
}

const mergeByCondition = (obj1, obj2) => {
  const obj1Keys = Object.keys(obj1)

  const returnModifiedObj = (transformingObj) => {
    if (obj1Keys.length === 0) return transformingObj
    const currentKey = obj1Keys[0]
    const currentKeyLens = R.lensProp(currentKey)

    const updatedObj = R.when(
      () => {
        return R.isEmpty(obj2)
          ? false
          : R.has(currentKey, obj2) && !hasExpired({
            cacheDuration: obj1[currentKey].cacheDuration,
            oldTimestamp: obj2[currentKey].timestamp,
            newTimestamp: obj1[currentKey].timestamp
          })
      }
    )(
      R.set(currentKeyLens)(obj2[currentKey])
    )(transformingObj)

    obj1Keys.shift()
    return returnModifiedObj(updatedObj)
  }

  return returnModifiedObj(obj1)
}

export {
  hasExpired,
  mergeByCondition
}

// () => {
//   return ({
//     ...transformingObj,
//     [currentKey]: obj2[currentKey]
//   })
// }
