import { defineConfig } from 'vite'
import path  from 'path'
import typescript from '@rollup/plugin-typescript'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        typescript({
          declaration: true,
          outDir: './dist/types',
          rootDir: './src',
          exclude: ['node_modules/**', '__tests__/**']
        })
    ],
    build: {
        lib:{
          entry: path.resolve(__dirname, 'src/main.ts'),
          name: 'browser-ex-storage',
          // the proper extensions will be added
          fileName: 'browser-ex-storage',
        }
      }
})
