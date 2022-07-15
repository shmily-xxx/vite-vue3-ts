import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import viteCompression from 'vite-plugin-compression'; //gzip静态资源压缩
import { visualizer } from 'rollup-plugin-visualizer'; //打包分析文件大小功能
import { viteMockServe } from 'vite-plugin-mock'; //添加 mockjs 插件
function resolve(dir) {
  return path.join(__dirname, dir);
}
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true, //vite项目启动时自动打开浏览器
    port: 8081, //vite项目启动时自定义端口
    hmr: true, //开启热更新

    // proxy: {
    //   '/snow': {
    //     // 匹配请求路径，localhost:3000/snow
    //     target: 'https://www.snow.com/', // 代理的目标地址
    //     changeOrigin: true, // 开发模式，默认的origin是真实的 origin:localhost:3000 代理服务会把origin修改为目标地址
    //     // secure: true, // 是否https接口
    //     // ws: true, // 是否代理websockets
    //     // rewrite target目标地址 + '/abc'，如果接口是这样的，那么不用重写
    //     // rewrite: (path) => path.replace(/^\/snow/, '') // 路径重写，本项目不需要重写
    //   },
    // },
  },
  build: {
    target: 'es2015', // 设置最终构建的浏览器兼容目标（默认值是‘modules’）
    outDir: 'dist', //构建出口文件夹
    assetsDir: 'static', //静态文件夹
    chunkSizeWarningLimit: 1500, //大于1500 告警提示
    minify: 'terser', //设置为terser后terserOptions才会生效
    terserOptions: {
      //清除console和debugger
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // 构建后是否生成source map文件，默认为false
    // sourcemap: true,
    rollupOptions: {
      input: {
        index: resolve('index.html'),
        // default: './index.html',
        // project:resolve("project.html")
      },
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js', // 用于从入口点创建的块的打包输出格式[name]表示文件名,[hash]表示该文件内容hash值
        entryFileNames: 'static/js/[name]-[hash].js', // 用于命名代码拆分时创建的共享块的输出命名
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]', // 用于输出静态资源的命名，[ext]表示文件扩展名
        manualChunks(id) {
          //静态资源分拆打包
          if (id.includes('node_modules')) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString();
          }
        },
      },
    },
    // 是否产出mainfest.json文件，该文件包含了没有被hash的资源名和hash后版本的映射
    // manifest: true,
  },
  resolve: {
    alias: {
      '@': resolve('src'),
      comps: resolve('src/components'),
      styles: resolve('src/styles'),
      plugins: resolve('src/plugins'),
      views: resolve('src/views'),
      layout: resolve('src/layout'),
      utils: resolve('src/utils'),
      apis: resolve('src/apis'),
      dirs: resolve('src/directives'),
      assets: resolve('src/assets'),
    },
  },
  plugins: [
    vue(),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    }),
    viteMockServe({
      mockPath: './src/mock', //mock路径
      supportTs: true, //如果使用 js发开，则需要配置 supportTs 为 false
    }),
    //   visualizer({
    //     open:true,  //注意这里要设置为true，否则无效
    //     gzipSize:true,
    //     brotliSize:true
    //  })
  ],
});
