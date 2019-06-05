// 这是一个具体的异步操作，使用function 指定一个具体的异步操作
// var promise = new Promise(function(){
     //这个function 内部写的就是具体的异步操作
// })

const path = require("path")
const fs = require("fs")

function getFileByPath(fpath){
    return new Promise(function(resolve, reject){
        fs.readFile(fpath, 'utf-8', (err, res) => {

            if(err) return reject(err);
            resolve(res)

        })
    })
}
// 如果前面产的promise 执行失败，不想终止，可以为promis  指定失败回调

getFileByPath(path.join(__dirname, './file/1.txt'))
.then(res=> {
    console.log(res)
    return getFileByPath(path.join(__dirname, './file/2.txt'))
})
.then(res => {
    console.log(res)
    return getFileByPath(path.join(__dirname, './file/32.txt'))
})
.then(res => {
    console.log(res)
    return getFileByPath(path.join(__dirname, './file/4.txt'))
})
.then(res => {
    console.log(res)
})
.catch((res) =>{  //catch 如果前面有任何的 Promis 执行失败，则立即终止
    console.log("这是自己的处理方式： "+ res.message)
})

console.log("okokok")
