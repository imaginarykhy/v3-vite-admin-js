import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from "vite-plugin-svg-icons"
import svgLoader from "vite-svg-loader"
const path = require('path');
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "build",
  },
  base: './',
  plugins: [
    vue(),
    /** 将 SVG 静态图转化为 Vue 组件 */
    svgLoader({ defaultImport: "url" }),
    /** SVG */
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "src/icons/svg")],
      symbolId: "icon-[dir]-[name]"
    }),
  ],
  resolve: {
    // 配置路径别名
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
})
