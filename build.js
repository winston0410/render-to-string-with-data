const esbuild = require('esbuild')
const path = require('path')

const build = async () => {
  const service = await esbuild.startService()

  const distDir = path.resolve(__dirname, 'dist')

  try {
    await service.build({
      entryPoints: ['./src/server/index.js', './src/client/index.js'],
      bundle: true,
      platform: 'node',
      external: ['react', 'react-dom'],
      outdir: path.resolve(distDir, 'cjs')
    })

    await service.build({
      entryPoints: ['./src/client/index.js'],
      bundle: true,
      format: 'esm',
      platform: 'browser',
      external: ['react', 'react-dom'],
      outdir: path.resolve(distDir, 'esm', 'client')
    })

  } catch (e) {
    console.log(e);
  } finally {
    service.stop()
  }

}

build()
