const esbuild = require('esbuild')
const path = require('path')

const build = async () => {
  const service = await esbuild.startService()

  const distDir = path.resolve(__dirname, 'dist')

  try {
    await service.build({
      entryPoints: ['./src/server/index.js'],
      bundle: true,
      format: 'cjs',
      platform: 'node',
      external: ['react', 'react-dom'],
      outdir: path.resolve(distDir, 'server')
    })

  } catch (e) {
    console.log(e);
  } finally {
    service.stop()
  }

}

build()
