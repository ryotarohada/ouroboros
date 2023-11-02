import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tsconfigPaths(),
		// Custom plugin to load markdown files
		{
			name: 'markdown-loader',
			transform(code, id) {
				if (id.slice(-3) === '.md') {
					// For .md files, get the raw content
					return `export default ${JSON.stringify(code)};`
				}
			},
		},
	],
	root: './src',
	publicDir: 'assets',
	server: {
		port: 4000,
		host: true,
	},
	build: {
		outDir: '../dist',
	},
})
