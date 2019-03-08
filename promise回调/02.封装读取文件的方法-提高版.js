const path = require("path")

const fs = require("fs")

function getFileData(url, succCb, errCb){
    fs.readFile(url, "utf-8", (err,dataStr) => {
             if(err) return errCb(err)
             succCb(dataStr)
        })
}

//回调地狱   使用Promis 解决回调地狱的问题
getFileData(path.join(__dirname, './file/1.txt'), (dataStr) => {
    console.log(dataStr)
    getFileData(path.join(__dirname, './file/2.txt'), (dataStr) => {
        console.log(dataStr)
        getFileData(path.join(__dirname, './file/3.txt'), (dataStr) => {
            console.log(dataStr)
            getFileData(path.join(__dirname, './file/4.txt'), (dataStr) => {
                console.log(dataStr)
            })
        })
    })
},(err)=>{
    console.log("这是一个失败的结果，我们用失败的函数处理了下：" +err)
})


