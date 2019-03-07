// import _ from 'lodash';
// import printMe from './print.js';
// import './css/style.css'

//   function component() {
//     var element = document.createElement('div');
//     var btn = document.createElement('button');

//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//     btn.innerHTML = 'Click me and check the console!';
//     btn.onclick = printMe;
  
//     element.appendChild(btn);

//     return element;
//   }

//   // document.body.appendChild(component());
//   let element = component();
//   document.body.appendChild(element);

//  if (module.hot) {
//      module.hot.accept('./print.js', function() {
//        console.log('Accepting the updated printMe module!');
//        printMe();
//      })
//    }

console.log("ok")

// 实现 es6 中面向对象编程的方式
class Person {
  // 使用static 关键字，可以定义静态属性
  // 静态属性：所谓静态属性是指 可通过类名直接访问的属性 Person.info
  // 实例属性：只能通过类的实例，来访问的属性 p1 = new Person(); p1.name
  static info = { name: "zs", age: 20}
}

console.log(Person.info)

// java c# 实现面向对象的方式完全一样， class 是从后端语言中借鉴过来的
// var p1 = new Person();