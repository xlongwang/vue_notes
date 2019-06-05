// 使用 Mock
let Mock = require('mockjs');
Mock.mock('http://newsList.json', 'get', {
    // 属性 list 的值是一个数组，其中含有 1 到 3 个元素
    'status': 0,
    'messages|8-20': [{
        // 属性 sid 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        'title': '@cparagraph(2)',
        //属性 time 是一个 size, background, text 的随机时间
        //属性 paragraph 是一个随机长度的段落
        'zhaiyao': '@cparagraph',
        //属性 image 是一个随机图片 参数分别为size, background, text
        'click': /[0-9]/g, //点击数
        'img_url': "@image('200x100', '#1b9bff', 'Hello')",
        //属性 address 是一个随机地址
        'address': '@county(true)',
        //属性 date 是一个yyyy-MM-dd 的随机日期
        'add_time': '@time("HH:mm:ss")',
        'date': '@date("yyyy-MM-dd")',

        //属性 url 是一个随机的url
        'url': '@url',
        //属性 email 是一个随机email
        'email': '@email',
        //属性 ip 是一个随机ip
        'ip': '@ip',
        //属性 regexp 是一个正则表达式匹配到的值 如aA1
        'regexp': /[a-z][A-Z][0-9]/,
    }]

})

Mock.mock('http://newsList.json', 'get', {
   
    'status': 1,
    'message|8-20': {
        // 属性 sid 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        'title': '@cparagraph(2)',
        //属性 time 是一个 size, background, text 的随机时间
        //属性 paragraph 是一个随机长度的段落
        'content': '@cparagraph',
        //属性 image 是一个随机图片 参数分别为size, background, text
        //属性 address 是一个随机地址

        //属性 date 是一个yyyy-MM-dd 的随机日期
        'add_time': '@time("HH:mm:ss")',
        'date': '@date("yyyy-MM-dd")',

        //属性 url 是一个随机的url
        'click': /[0-9]/g, //点击数
        //属性 email 是一个随机email
        //属性 regexp 是一个正则表达式匹配到的值 如aA1
        'regexp': /[a-z][A-Z][0-9]/,
    }
}) 

