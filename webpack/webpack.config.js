const path =  require('path')

module.exports = {
    entry :'./src/main.js', //entry 是指定打包文件的入口,可以使用相对路径
    output: {
        path:path.join(_dirname,'dist'), //output是指输出的目录,必须是绝对路径
        filename:'development'
    }
}