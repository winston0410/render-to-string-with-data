# renderToStringWithData

A hook for the free and the brave to implement data hydration in SSR and SSG in React.

[![Maintainability](https://api.codeclimate.com/v1/badges/d5b79e7d757d61093fe9/maintainability)](https://codeclimate.com/github/winston0410/render-to-string-with-data/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/d5b79e7d757d61093fe9/test_coverage)](https://codeclimate.com/github/winston0410/render-to-string-with-data/test_coverage) [![Codacy Badge](https://app.codacy.com/project/badge/Grade/8373d1b7781c45629fdf01a34c53d25f)](https://www.codacy.com/gh/winston0410/render-to-string-with-data/dashboard?utm_source=github.com&utm_medium=referral&utm_content=winston0410/render-to-string-with-data&utm_campaign=Badge_Grade)

If you need to have data hydration in SSR and SSG, but you don't want to develop in **a heavily opinionated framework**, namely Next.js, Gatsby or React Static, this hook is for you.

## Features

- Data hydration for SSR and SSG using `useContext()`

- Isolating server data and client data for hydration(You can also hydrate with the same data if you wish)

- Cache data response in server for performance benefit and development convenience

- No Redux

## Code Example

```javascript
//In your component where you want to hydrate server side
import {
  useServerSideEffect
} from '@blackblock/render-to-string-with-data'

function App(){
  const openSourceData = useServerSideEffect({
    callback: () => {
      return fetch("https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread")
        .then(response => response.json())
        .catch(e => console.log(e))
    },
    key: 'github', //Unique key for storing data of this request
    clientSideState: {} //initial value for client side
    cacheDuration: 2592000
  })

  return (
    <p>
    {openSourceData.warningMessage}
    </p>
  )
}
```

```javascript
//Then in file where you do SSR or SSG:
import {
  renderToStringWithData
} from '@blackblock/render-to-string-with-data/server'

const renderApp = async () => {
  //data is the request data. You can write them to file system as JSON if you need.
  const { data, markupWithData } = await renderToStringWithData(<App />)  
}
```

## Installation

With Npm:

```shell
npm install @blackblock/render-to-string-with-data
```

With Yarn:

```shell
yarn add @blackblock/render-to-string-with-data
```

`react` and `react-dom` should be installed in your application, as they are the peer dependencies of this package.

## API Reference

### `<ServerSideEffectProvider>`

The followings are the options you can pass to `<ServerSideEffectProvider>`.

### `value`

`value::Object`

You need to pass an object in the following structure:

```javascript
const context = {
  sse: {

  }
}

//then pass this context in renderToString or in place where you use <ServerSideEffectProvider>

renderToString(
  <ServerSideEffectProvider value={context}>
    <App />
  </ServerSideEffectProvider>
)
```

### `renderToStringWithData`

The followings are the options you can pass to `renderToStringWithData`.

#### `markup`

Your React application. Do not pass in an application with `<ServerSideEffectProvider>` in it, as `renderToStringWithData` internally does that for you.

### `useServerSideEffect`

The followings are the options you can pass to `useServerSideEffect`.

#### `callback`

`callback::Function`

A server side callback to run like `useEffect`

#### `key`

`key::String`

Key for mutating the `context` object

#### `clientSideState`

`clientSideState::Any`

The state to take over in client side. It should be treated as **initial state**.

#### `cacheDuration`

`cacheDuration::Int | Boolean`

`cacheDuration` is default to `false`

The duration (in ms) which the promise returned from your callback would be replaced by data cached previously in your file system.

If you set it to `false`, cache would be disabled for that hook. Setting it to `true` will always read from the cache.

## Inspiration

[useSSE](https://github.com/kmoskwiak/useSSE)
