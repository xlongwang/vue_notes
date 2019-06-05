// 这是一个具体的异步操作，使用function 指定一个具体的异步操作
// var promise = new Promise(function(){
     //这个function 内部写的就是具体的异步操作
// })

const path = require("path")
const fs = require("fs")

// 每当new 一个Promise  实例的时候，就会立即执行这个异步操作
// var promise = new Promise(function(){
//     fs.readFile(path.join(__dirname, './file/1.txt'), 'utf-8', (err, res) => {
//         if(err) throw err;
//         console.log(res)
//     })
// })

function getFileByPath(fpath){
    return new Promise(function(reject, resolve){
        fs.readFile(fpath, 'utf-8', (err, res) => {

            if(err) return reject(err);
            resolve(res)

        })
    })
  
}

 getFileByPath(path.join(__dirname, './file/1.txt'))
 .then(function(msg){
   console.log('失败：'+ msg)
},function(msg){
   console.log("成功："+ msg)
})