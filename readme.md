### React 16+React-Router4 从零打造企业级电商后台管理系统

### ES6使用总结

#### let与const

1、let用来定义变量，const用来定义常量。
2、有块级作用域
```javascript
for(let i=0;i<5;i++){
    setTimeOut(()=>{
          console.log(i);//0-4  
    }, 3000)
}
```
vs
```JavaScript
for(var i=0;i<5;i++){
    setTimeout(()=>{
          console.log(i);//55555
    }, 3000)//用闭包解决
}
```

写到这里之前有一次面试的时候，一个面试官说let的块级作用域是怎么实现的？
这个问题其实是在blue的ES6课程上有讲过，就是let相当于实现了一个闭包来解决块级作用域

```javascript
if(true){
    let test = 1;
}
console.log(test);//test is not defined
if(true){
    var test1 = 2;
}
console.log(test1);//2
```

3、没有变量提升
```javascript
console.log(a);
var a = 1;//undefined
console.log(b);
let b = 2;//b is not defined
```
4、暂时性死区

```javascript
var i = 2;
{
    var  i = 1;
}
console.log(i);//1

let z = 2;
{
    let z = 1;
}
console.log(z);//2
```

#### 箭头函数

普通函数
- 属于谁，谁调用，指向谁，故指向obj
区别： 
```javascript
var obj = {
    a: function(){
        console.log(this);
        console.log(1);
    }
}
obj.a();//执行obj中的a()函数
obj.a;//函数本身
```
![](./images/this02.png)

箭头函数
- 没有独立的作用域，即没有自己的this，指向obj的作用域window
```javascript
var obj = {
    b: function(){
        //属于谁，谁调用，指向谁，故指向obj
        console.log(this);
    },
    a: ()=>{
        //没有自己的this，指向obj的作用域window
        console.log(this);
    }
}
obj.b();
obj.a();
```
![](./images/this.png)

- 不能做构造函数
```javascript
let Animal = function(){};
let animal = new Animal();

let Animal = ()=>{};
let animal = new Animal();
```
- 没有prototype
```javascript
let commonFn = function(){};
let arrowFn = ()=>{};
console.log(commonFn.prototype);//{constructor: ƒ}
console.log(arrowFn.prototype);//undefined
```

#### 模板字符串

基本用法
```javascript
let name = 'Jomsou'
let str = `
<div>
    <h1 class="title">${name}</h1>
</div>
`;
document.querySelector('body').innerHTML = str;
```

#### Promise

[Promise的那些事儿](https://github.com/Zenquan/blog/issues/11)

#### class

>ES6开始，JavaScript正式有了类的概念,用类来实现面向对象。

关键字：class、constructor、extends、super

```javascript
class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
}

class Man extemds Person {
    constructor(name, age, sex){
        super(name, age);
        this.sex = sex;
    }
    getSex(){
        return this.sex;
    }
}
```
#### Object 
Object.keys()：返回对象的key值数组
Object.assign(): 整合，浅拷贝
```javascript
//以前
var name = 'Jomsou';
var age = 23;
var obj1 = {
    name: name,
    age: age,
    getName: function() {
        return this.name;
    }
}
obj1.getName();
let name = 'Jomsou';
let age = 23;
let obj = {
    name,
    age,
    getName(){
        return this.name;
    },
    ['get'+'Age'](){
        return this.age;
    }
}
Object.keys(obj)
```

Yarn的第一次使用收获

yarn init = npm init
yarn = npm install
yarn global add xxx@x.x.x = npm install xxx@x.x.x -g
yarn add xxx@x.x.x = npm install xxx@x.x.x --save
yarn add xxx@x.x.x -dev = npm install xxx@x.x.x --save-dev
yarn remove xxx = npm uninstall xxx --save(-dev)
yarn run xxx = npm run xxx

```
yarn init
yarn add webpack@3.10.0 --save-dev
yarn add html-webpack-plugin@2.30.1 --save-dev
```
配置webpack.config.js
```

```
