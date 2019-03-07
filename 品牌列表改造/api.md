### get 请求获取所有品牌列表的 api

 ```http://kerys.pythonanywhere.com/api/getprodlist/<br>

调用方式: GET 请求直接调用```

###  post 请求添加品牌的 api

```http://kerys.pythonanywhere.com/api/addprod/<br>

调用方式:POST 请求 需要的参数 {name: '品牌名称'} , {emulateJSON:true} 普通表单请求```

### get 请求删除品牌的 api

```http://kerys.pythonanywhere.com/api/delprod/id <br>

调用方式: GET 请求 id 是品牌的id int类型```