// Node 中 向外暴露成员的形式
// module.exports = {}
// Node中使用 var 名称 = require('模块标识符')
// module.exports 和  exports 来暴露成员


// es6  规范导入与导出模块
// import ** from **  or   import "路径"
// es6 中可以使用 export default 和 export  向外暴露成员 
var info = {
    name: 'zs',
    age: '20'
}

export default info
// 注意：export default 可以使用任意变量来接收  一个模块只能export default一次


 export var title = "小星星"

 // 同一个模块可以同时向外 export default ,export
 // export 可以暴露多个成员，只能通过 按照导出名称的 { } 按需导出，只能按照导出
 // export　可以使用　as  来起别名
