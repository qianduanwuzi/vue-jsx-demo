// __dirname 返回文件所在的目录 // /VUE-JSX
// path.join 连接
// console.log('a/b, 'c') // a/b/c
// path.resolve相当于递归cd
// console.log(path.resolve("/a/b", "c")); // /a/b/c
// console.log(path.resolve("/a/b/", "c"));// /a/b/c
// console.log(path.resolve("/a/b/", "/c"));// /c
// console.log(path.resolve("/a/b/", "./c"));// /a/b/c
// path.basename 取值path的最后一部分
// console.log(path.basename("/a/b/test.vue"));// test.vue
// console.log(path.basename("/a/b/test.vue", ".vue"));// test
// path.dirname 去掉文件名，返回目录
// console.log(path.dirname('/a/b/test.vue')) // a/b

const path = require("path");

const {
  getComponentFiles
  //   getIgnoreFiles
} = require("./src/styleguide/config.js");

// const themeObj = require("./styleguide/style/theme.js"); //是组件的ui配置

var baseComponentsUrl = "./src/components";

//获取当前的环境
// const isProd = process.env.NODE_ENV === "production";

//获得当前组件的目录结构
var componentFilesDir = getComponentFiles(baseComponentsUrl);
console.log(17, componentFilesDir);
//获取忽略生成组件目录
// var componentIgnoreDir = getIgnoreFiles(baseComponentsUrl);
module.exports = {
  title: "组件api && 运行",
  //   require: [path.join(__dirname, "src/styleguide/global.requires.js")], //全局vue组件使用的插件
  components: componentFilesDir,
  //   ignore: componentIgnoreDir, //要忽略的生成组件的文件夹
  defaultExample: true,
  //使用组件引入路径
  getComponentPathLine(componentPath) {
    const componentFileName = path.basename(componentPath, ".vue");
    console.log(29, componentFileName);
    // const name =
    //   componentFileName.toLowerCase() === "index"
    //     ? path.basename(path.dirname(componentPath))
    //     : componentFileName;
    const name = componentFileName;
    return `import ${name} from '${componentPath.replace(/^src\//, "/")}'`;
  },
  // require: ['./docs/install.components.js'],  如何在样式指南中隐藏一些组件，但在示例中使它们可用

  version: "1.1.1",
  //   webpackConfig: require("./webpack.js"),
  //页面配置
  usageMode: "expand", //文档中属性和方法的标签初始化状态，决定是否展开
  exampleMode: "expand", //文档中代码示例的标签初始化状态，决定是否展开。
  copyCodeButton: true, //代码顶部的复制按钮
  locallyRegisterComponents: true, //vue-styleguidist全局注册所有组件 多个组件共享相同的名称或如果注册了另一个组件，则组件将更改行为
  //   theme: themeObj,
  //   skipComponentsWithoutExample: true, //跳过没有demo的vue组件案例
  pagePerSection: true,

  //启动服务配置
  serverHost: "0.0.0.0",
  serverPort: 7777,

  //打包配置
  compilerConfig: {
    target: { ie: 11 }
  },
  progressBar: true, //打包进度条
  // styleguidePublicPath: isProd? '/': '//static.ianguo.com/',
  styleguideDir: "dist", //打包文件放置的位置
  displayOrigins: false
  //多个组件库
  /**如果基本组件在一个包中，派生组件在另一个包中，那么您将希望文档在公开的包中反映扩展组件的支持。*/
  // validExtends(fullFilePath) {
  //   return (
  //     /[\\/]@scoped[\\/]core[\\/]/.test(fullFilePath) ||
  //     !/[\\/]node_modules[\\/]/.test(fullFilePath)
  //   )
  // },
};

// module.exports = {
//   components: "src/components/**/*.vue",
// [ './src/components/Test/Test.vue' ]
//   // 启动服务配置
//   serverHost: "0.0.0.0",
//   serverPort: 7777
// };
