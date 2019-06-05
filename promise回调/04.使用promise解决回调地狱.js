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

getFileByPath(path.join(__dirname, './file/11.txt'))
.then(res=> {
    console.log(res)
    return getFileByPath(path.join(__dirname, './file/2.txt'))
}, (err) =>{
    console.log("这是失败的结果: "+ err.message)
    return getFileByPath(path.join(__dirname, './file/2.txt'))
})
.then(res => {
    console.log(res)
    return getFileByPath(path.join(__dirname, './file/3.txt'))
})
.then(res => {
    console.log(res)
    return getFileByPath(path.join(__dirname, './file/4.txt'))
})
.then(res => {
    console.log(res)
})

console.log("okokok")

