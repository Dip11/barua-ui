import { defineConfig } from 'tsup'
import fs from 'node:fs'
import path from 'node:path'

const SRC = 'src'

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'))

// Each src/<name>/index.ts becomes a subpath entry (e.g. `@barua-ui/react-components/button`).
// Folders prefixed with `_` stay private.
function discoverEntries(): string[] {
  return fs
    .readdirSync(SRC, { withFileTypes: true })
    .filter(d => d.isDirectory() && !d.name.startsWith('_'))
    .map(d => path.join(SRC, d.name, 'index.ts'))
    .filter(fs.existsSync)
}

export default defineConfig(options => ({
  entry: ['src/index.ts', 'src/tailwind.css', ...discoverEntries()],
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  sourcemap: true,
  treeshake: true,
  splitting: true,
  tsconfig: './tsconfig.build.json',
  external: [...Object.keys(pkg.dependencies ?? {}), ...Object.keys(pkg.peerDependencies ?? {})],
  ...options,
}))
