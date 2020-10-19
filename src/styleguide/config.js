// fs.readdirSync //同步读取 返回一个包含“指定目录下所有文件名称”的数组对象 只读一层
// fs.readdir //异步读取
const fs = require("fs");
exports.getComponentFiles = path => {
  var filesDir = []; //存储文件夹
  var files = fs.readdirSync(path); //获取当前component的下的文件夹
  //   console.log(7, files); ['Test', 'test1.vue']
  files.forEach(file => {
    var currBaseDir = path + "/" + file; //获取当前文件目录的地址
    var fileStat = fs.statSync(currBaseDir); //获取当前文件/目录的属性
    console.log(11, fileStat);
    if (fileStat.isDirectory()) {
      //如果是文件夹，则是我们需要遍历的文件夹
      var fileChildren = fs.readdirSync(currBaseDir); //获取当前文件目录的子目录结
      var regFile = new RegExp("^(index||" + file + ")(.vue)"); //正则匹配主要的文件 根据自己组件库进行获取主要暴露文件
      fileChildren.forEach(item => {
        var regResult = item.match(regFile);
        if (regResult && regResult.length > 0) {
          var chPath = currBaseDir + "/" + regResult[0];
          filesDir.push(chPath); //将获取到的结果push到文件中
        }
      });
    }
  });
  return filesDir;
};
