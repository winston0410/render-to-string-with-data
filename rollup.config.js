const {
  nodeResolve
} = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const {
  babel
} = require('@rollup/plugin-babel')

export default [{
  input: './src/client/index.jsx',
  external: ['react', 'react-dom'],
  output: [
    {
      file: 'dist/cjs/client/index.js',
      format: 'cjs',
      exports: 'named',
      plugins: []
    }
  ],
  plugins: [
    babel({
      babelHelpers: 'runtime',
      skipPreflightCheck: true
    }),
    nodeResolve({}),
    commonjs({
      include: ['./src/**', 'node_modules/**']
    })
  ]
}, {
  input: './src/server/index.jsx',
  external: ['react', 'react-dom'],
  output: [
    {
      file: 'dist/cjs/server/index.js',
      format: 'cjs',
      exports: 'named',
      plugins: []
    }
  ],
  plugins: [
    babel({
      babelHelpers: 'runtime',
      skipPreflightCheck: true
    }),
    nodeResolve({}),
    commonjs({
      include: ['./src/**', 'node_modules/**']
    })
  ]
}]
