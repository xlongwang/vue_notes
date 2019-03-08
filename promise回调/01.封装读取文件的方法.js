const path = require("path")

const fs = require("fs")

// fs.readFile(path.join(__dirname, './1.txt'), 'utf-8', (err,dataStr) => {
//      if(err) throw err
//      console.log(dataStr)
// })


// 约定 callback有两个结果， 第一个是失败的结果， 第二个是成功的结果

// 1.没有出错,第一个位置，放入 null    2.失败则放 Error 对象，第二个位置放置 undefined
function getFileData(url, callback){
    fs.readFile(url, "utf-8", (err,dataStr) => {
            // 如果报错，进入if后，后面就没有必要执行了
             if(err) return callback(err)

             callback(null, dataStr)
        })
}

getFileData(path.join(__dirname, './file/1.txt'), (err, dataStr) => {
    if(err) return console.log(err.message)
    console.log(dataStr)
})


