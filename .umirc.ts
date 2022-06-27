import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // 配置路由模式
  history: {
    type: 'hash'
  },
  // 配置路由 移除就是使用约定路由
  // routes: [
  //   // { path: '/', component: '@/pages/index' },
  // ],
  fastRefresh: {},

  // 反向代理
  proxy: {
    '/api': {
      target: 'https://i.maoyan.com',
      changeOrigin: true
    }
  },

  antd: {
    mobile: false
  }
});
