## webpack4.0

>打包压缩工具

1、webpack约定大于配置
2、默认入口src/index.js
3、打包为dist/main.js
4、设置模式'develpoment' || 'production' 

```js
//webpack约定大于配置，默认src/index.js->dist/main.js
module.exports = {
    mode: 'production' //'develpoment' || 'production' 
}
```

webpack-dev-sever打包后的放内存里了

## React

1.导入包

```js
import React from 'react'//react->虚拟dom和组件化、生命周期
import ReactDOM from 'react-dom'//react-dom->把创建好的组件和虚拟dom放在页面上展示
```

2.创建虚拟DOM元素
- 参数1： 创建的元素的类型，字符串，表示元素的名称
- 参数2： 是一个对象或null，表示当前这个DOM元素的属性
- 参数3： 子节点（包括其他 虚拟DOM获取文本子节点）
- 参数4： 其他子节点

3.使用ReactDOM把虚拟DOM渲染到页面上去
- 参数1：要渲染的虚拟DOM元素 
- 参数2：指定页面的目标容器

4.加属性