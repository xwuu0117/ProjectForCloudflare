const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
  ? '/xwuu0117/ProjectForCloudflare/'
  : '/'
})
// module.exports = {
//   publicPath: process.env.NODE_ENV === 'production'
//     ? '/xwuu0117/ProjectForCloudflare/'
//     : '/'
// }