import { defineConfig } from 'vite'

export default defineConfig({
  base: '/wasecret/', // 将 'your-repo-name' 替换为你的仓库名称
  build: {
    outDir: 'dist'
  }
})