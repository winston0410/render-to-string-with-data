const {
  nodeResolve
} = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')

export default [{
  input: './src/client/index.js',
  external: ['react', 'react-dom'],
  output: [{
    file: 'dist/esm/client/index.js',
    format: 'esm',
    exports: 'named',
    plugins: []
  },
  {
    file: 'dist/cjs/client/index.js',
    format: 'cjs',
    exports: 'named',
    plugins: []
  }
  ],
  plugins: [
    nodeResolve({}),
    commonjs({
      include: ['./src/**', 'node_modules/**']
    })
  ]
},
{
  input: './src/server/index.js',
  external: ['react', 'react-dom'],
  output: [{
    file: 'dist/esm/server/index.js',
    format: 'esm',
    exports: 'named',
    plugins: []
  },
  {
    file: 'dist/cjs/server/index.js',
    format: 'cjs',
    exports: 'named',
    plugins: []
  }
  ],
  plugins: [
    nodeResolve({}),
    commonjs({
      include: ['./src/**', 'node_modules/**']
    })
  ]
}
]
