# 1，区分Real DOM和Virtual DOM

| **Real DOM**              | **Virtual DOM**          |
| ------------------------- | ------------------------ |
| 更新缓慢                  | 更新更快                 |
| 可以直接更新 HTML         | 无法直接更新 HTML        |
| 如果元素更新，则创建新DOM | 如果元素更新，则更新 JSX |
| DOM操作代价很高           | DOM 操作非常简单         |
| 消耗的内存较多            | 很少的内存消耗           |

# 2，什么是React

- React 是 Facebook 在 2011 年开发的前端 JavaScript 库。
- 它遵循基于组件的方法，有助于构建可重用的UI组件。
- 它用于开发复杂和交互式的 Web 和移动 UI。
- 尽管它仅在 2015 年开源，但有一个很大的支持社区。

# 3，React有什么特点

- 它使用虚拟DOM 而不是真正的DOM
- 它可以用服务器端渲染
- 它遵循单向数据流或数据绑定

# 4 ，React的一些主要优点

1. 它提高了应用的性能
2. 可以方便地在客户端和服务器端使用
3. 由于 JSX，代码的可读性很好
4. React 很容易与 Meteor，Angular 等其他框架集成
5. 使用React，编写UI测试用例变得非常容易

# 5，React有哪些限制

1. React 只是一个库，而不是一个完整的框架
2. 它的库非常庞大，需要时间来理解
3. 新手程序员可能很难理解
4. 编码变得复杂，因为它使用内联模板和 JSX

# 6，什么是JSX

​        JSX 是J avaScript XML 的简写。是 React 使用的一种文件，它利用 JavaScript 的表现力和类似 HTML 的模板语法。这使得 HTML 文件非常容易理解。此文件能使应用非常可靠，并能够提高其性能。下面是JSX的一个例子：

```
render(){
    return(        
        <div>
            <h1> Hello World from Edureka!!</h1>
        </div>
    );
}
```

# 7，你了解 Virtual DOM 吗？解释一下它的工作原理

​        Virtual DOM 是一个轻量级的 JavaScript 对象，它最初只是 real DOM 的副本。它是一个节点树，它将元素、它们的属性和内容作为对象及其属性。 React 的渲染函数从 React 组件中创建一个节点树。然后它响应数据模型中的变化来更新该树，该变化是由用户或系统完成的各种动作引起的。

Virtual DOM 工作过程有三个简单的步骤：

1，每当底层数据发生改变时，整个 UI 都将在 Virtual DOM 描述中重新渲染

![](https://upload-images.jianshu.io/upload_images/68598-d9cf92a6a8a5d2e9.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)

2，然后计算之前 DOM 表示与新表示的之间的差异

![](https://upload-images.jianshu.io/upload_images/68598-8194c44de20897bb.png?imageMogr2/auto-orient/strip|imageView2/2/w/1079/format/webp)

3，完成计算后，将只用实际更改的内容更新 real DOM

![](https://upload-images.jianshu.io/upload_images/68598-8d56d05528334e46.png?imageMogr2/auto-orient/strip|imageView2/2/w/531/format/webp)

# 8，为什么浏览器无法读取JSX

​       浏览器只能处理 JavaScript 对象，而不能读取常规 JavaScript 对象中的 JSX。所以为了使浏览器能够读取 JSX，首先，需要用像 Babel 这样的 JSX 转换器将 JSX 文件转换为 JavaScript 对象，然后再将其传给浏览器。


# 9，与 ES5 相比，React 的 ES6 语法有何不同

## 9.1 require 与 import

```
// ES5
var React = require('react');
 
// ES6
import React from 'react';
```

## 9.2 export 与 exports

```
// ES5
module.exports = Component;
 
// ES6
export default Component;
```

## 9.3 component 和 function

```
// ES5
var MyComponent = React.createClass({
    render: function() {
        return
            <h3>Hello Edureka!</h3>;
    }
});
 
// ES6
class MyComponent extends React.Component {
    render() {
        return
            <h3>Hello Edureka!</h3>;
    }
}
```

## 9.4 props

```
// ES5
var App = React.createClass({
    propTypes: { name: React.PropTypes.string },
    render: function() {
        return
            <h3>Hello, {this.props.name}!</h3>;
    }
});

// ES6
class App extends React.Component {
    render() {
        return
            <h3>Hello, {this.props.name}!</h3>;
    }
}
```

## 9.5 state

```
// ES5
var App = React.createClass({
    getInitialState: function() {
        return { name: 'world' };
    },
    render: function() {
        return
            <h3>Hello, {this.state.name}!</h3>;
    }
});

// ES6
class App extends React.Component {
    constructor() {
        super();
        this.state = { name: 'world' };
    }
    render() {
        return
            <h3>Hello, {this.state.name}!</h3>;
    }
}
```

# 10 一切都是组件

​        组件是 React 应用 UI 的构建块。这些组件将整个 UI 分成小的独立并可重用的部分。每个组件彼此独立，而不会影响 UI 的其余部分。

# 11 解释 React 中 render() 的目的

​        每个React组件强制要求必须有一个 **render()**。它返回一个 React 元素，是原生 DOM 组件的表示。如果需要渲染多个 HTML 元素，则必须将它们组合在一个封闭标记内，例如 `<form>`、`<group>`、`<div>` 等。此函数必须保持纯净，即必须每次调用时都返回相同的结果。

# 12 如何将两个或多个组件嵌入到一个组件中

可以通过以下方式将组件嵌入到一个组件中：

```
class MyComponent extends React.Component{
    render(){
        return(          
            <div>
                <h1>Hello</h1>
                <Header/>
            </div>
        );
    }
}
class Header extends React.Component{
    render(){
        return
            <h1>Header Component</h1>   
   };
}
```

# 13 什么是 Props

​        Props 是 React 中属性的简写。它们是只读组件，必须保持纯，即不可变。它们总是在整个应用中从父组件传递到子组件。子组件永远不能将 prop 送回父组件。这有助于维护单向数据流，通常用于呈现动态生成的数据。

# 14 React中的状态是什么？它是如何使用的？

状态是 React 组件的核心，是数据的来源，必须尽可能简单。基本上状态是确定组件呈现和行为的对象。与props 不同，它们是可变的，并创建动态和交互式组件。可以通过 this.state()访问它们。


# 15 如何更新组件的状态

可以用 this.setState()更新组件的状态

```
class MyComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'Maxx',
            id: '101'
        }
    }
    render()
        {
            setTimeout(()=>{this.setState({name:'Jaeha', id:'222'})},2000)
            return (              
                <div>
                    <h1>Hello {this.state.name}</h1>
                    <h2>Your Id is {this.state.id}</h2>
                </div>
            );
        }
    }
ReactDOM.render(
    <MyComponent/>, document.getElementById('content')
);
```

# 16 React 中的箭头函数是什么？怎么用？

箭头函数（**=>**）是用于编写函数表达式的简短语法。这些函数允许正确绑定组件的上下文，因为在 ES6 中默认下不能使用自动绑定。使用高阶函数时，箭头函数非常有用。

```
//General way
render() {    
    return(
        <MyInput onChange = {this.handleChange.bind(this) } />
    );
}
//With Arrow Function
render() {  
    return(
        <MyInput onChange = { (e)=>this.handleOnChange(e) } />
    );
}
```

# 17 区分有状态和无状态组件

| **有状态组件**                                            | **无状态组件**                               |
| --------------------------------------------------------- | -------------------------------------------- |
| 在内存中存储有关组件状态变化的信息                        | 计算组件的内部的状态                         |
| 有权改变状态                                              | 无权改变状态                                 |
| 包含过去、现在和未来可能的状态变化情况                    | 不包含过去，现在和未来可能发生的状态变化情况 |
| 接受无状态组件状态变化要求的通知，然后将 props 发送给他们 | 从有状态组件接收 props 并将其视为回调函数    |

# 18 React组件生命周期的阶段是什么

React 组件的生命周期有三个不同的阶段：

- *初始渲染阶段：*这是组件即将开始其生命之旅并进入 DOM 的阶段。
-  *更新阶段：*一旦组件被添加到 DOM，它只有在 prop 或状态发生变化时才可能更新和重新渲染。这些只发生在这个阶段。
-  *卸载阶段：*这是组件生命周期的最后阶段，组件被销毁并从 DOM 中删除。

# 19 React 组件的生命周期方法

- ***componentWillMount\**\**\*()** – 在渲染之前执行，在客户端和服务器端都会执行。
- ***componentDidMount\**\**\*()** – 仅在第一次渲染后在客户端执行。
- ***componentWillReceiveProps\**\**\*()** – 当从父类接收到 props 并且在调用另一个渲染器之前调用。
-  ***shouldComponentUpdate\**\**\*()** – 根据特定条件返回 true 或 false。如果你希望更新组件，请返回**true** 否则返回 **false**。默认情况下，它返回 false。
- ***componentWillUpdate\**\**\*()** – 在 DOM 中进行渲染之前调用。
- ***componentDidUpdate\**\**\*()** – 在渲染发生后立即调用。
- ***componentWillUnmount\**\**\*()** – 从 DOM 卸载组件后调用。用于清理内存空间。

# 20 React中的事件是什么

​        在 React 中，事件是对鼠标悬停、鼠标单击、按键等特定操作的触发反应。处理这些事件类似于处理 DOM 元素中的事件。但是有一些语法差异，如：

1. 用驼峰命名法对事件命名而不是仅使用小写字母。
2. 事件作为函数而不是字符串传递。



# 21 如何在React中创建一个事件

```
class Display extends React.Component({    
    show(evt) {
        // code   
    },   
    render() {      
        // Render the div with an onClick prop (value is a function)        
        return (            
            <div onClick={this.show}>Click Me!</div>
        );    
    }
});
```

## 22 React中的合成事件是什么

​        合成事件是围绕浏览器原生事件充当跨浏览器包装器的对象。它们将不同浏览器的行为合并为一个 API。这样做是为了确保事件在不同浏览器中显示一致的属性。

# 23 你对 React 的 refs 有什么了解？

​        Refs 是 React 中引用的简写。它是一个有助于存储对特定的 React 元素或组件的引用的属性，它将由组件渲染配置函数返回。用于对 render() 返回的特定元素或组件的引用。当需要进行 DOM 测量或向组件添加方法时，它们会派上用场。

```
class ReferenceDemo extends React.Component{
     display() {
         const name = this.inputDemo.value;
         document.getElementById('disp').innerHTML = name;
     }
render() {
    return(        
          <div>
            Name: <input type="text" ref={input => this.inputDemo = input} />
            <button name="Click" onClick={this.display}>Click</button>            
            <h2>Hello <span id="disp"></span> !!!</h2>
          </div>
    );
   }
 }
```

# 24 列出一些应该使用 Refs 的情况

- 需要管理焦点、选择文本或媒体播放时
- 触发式动画
- 与第三方 DOM 库集成

# 25 如何模块化 React 中的代码

可以使用 export 和 import 属性来模块化代码。它们有助于在不同的文件中单独编写组件。

```
//ChildComponent.jsx
export default class ChildComponent extends React.Component {
    render() {
        return(           
              <div>
                <h1>This is a child component</h1>
              </div>
        );
    }
}
 
//ParentComponent.jsx
import ChildComponent from './childcomponent.js';
class ParentComponent extends React.Component {    
    render() {        
        return(           
             <div>               
                <App />          
             </div>       
        );  
    }
}
```

# 26 你对受控组件和非受控组件了解多少？

| **受控组件**                                | **非受控组件**        |
| ------------------------------------------- | --------------------- |
| 没有维持自己的状态                          | 保持着自己的状态      |
| 数据由父组件控制                            | 数据由 DOM 控制       |
| 通过 props 获取当前值，然后通过回调通知更改 | Refs 用于获取其当前值 |

# 27 什么是高阶组件

​        高阶组件是重用组件逻辑的高级方法，是一种源于 React 的组件模式。 HOC 是自定义组件，在它之内包含另一个组件。它们可以接受子组件提供的任何动态，但不会修改或复制其输入组件中的任何行为。你可以认为 HOC 是“纯（Pure）”组件。

# 28 你能用HOC做什么

- 代码重用，逻辑和引导抽象
- 渲染劫持
- 状态抽象和控制
- Props 控制

# 29 React 中 key 的重要性是什么

​        key 用于识别唯一的 Virtual DOM 元素及其驱动 UI 的相应数据。它们通过回收 DOM 中当前所有的元素来帮助 React 优化渲染。这些 key 必须是唯一的数字或字符串，React 只是重新排序元素而不是重新渲染它们。这可以提高应用程序的性能。

# 30 MVC框架的主要问题是什么

- 对 DOM 操作的代价非常高
- 程序运行缓慢且效率低下
- 内存浪费严重
- 由于循环依赖性，组件模型需要围绕 models 和 views 进行创建



# 31  解释一下 Flux

![](https://upload-images.jianshu.io/upload_images/68598-6a1bacf87238e317.png?imageMogr2/auto-orient/strip|imageView2/2/w/796/format/webp)

​        Flux 是一种强制单向数据流的架构模式。它控制派生数据，并使用具有所有数据权限的中心 store 实现多个组件之间的通信。整个应用中的数据更新必须只能在此处进行。 Flux 为应用提供稳定性并减少运行时的错误。


# 32 什么是Redux

Redux 是当今最热门的前端开发库之一。它是 JavaScript 程序的可预测状态容器，用于整个应用的状态管理。使用 Redux 开发的应用易于测试，可以在不同环境中运行，并显示一致的行为。

# 33 Redux遵循的三个原则是什么

- **单一事实来源：**整个应用的状态存储在单个 store 中的对象/状态树里。单一状态树可以更容易地跟踪随时间的变化，并调试或检查应用程序。
-  **状态是只读的：**改变状态的唯一方法是去触发一个动作。动作是描述变化的普通 JS 对象。就像 state 是数据的最小表示一样，该操作是对数据更改的最小表示。
-  **使用纯函数进行更改：**为了指定状态树如何通过操作进行转换，你需要纯函数。纯函数是那些返回值仅取决于其参数值的函数。

![](https://upload-images.jianshu.io/upload_images/68598-2b4c87f3ed499a1d.png?imageMogr2/auto-orient/strip|imageView2/2/w/515/format/webp)

# 34 你对“单一事实来源”有什么理解

​        Redux 使用 “Store” 将程序的整个状态存储在同一个地方。因此所有组件的状态都存储在 Store 中，并且它们从 Store 本身接收更新。单一状态树可以更容易地跟踪随时间的变化，并调试或检查程序。

# 35 列出 Redux 的组件

- **Action** – 这是一个用来描述发生了什么事情的对象。
-  **Reducer** –  这是一个确定状态将如何变化的地方。
-  **Store** – 整个程序的状态/对象树保存在Store中。
-  **View** – 只显示 Store 提供的数据。

# 36 数据如何通过 Redux 流动

![](https://upload-images.jianshu.io/upload_images/68598-9b042890330b4510.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)

# 37 如何在 Redux 中定义 Action

​       React 中的 Action 必须具有 type 属性，该属性指示正在执行的 ACTION 的类型。必须将它们定义为字符串常量，并且还可以向其添加更多的属性。在 Redux 中，action 被名为 Action Creators 的函数所创建。以下是 Action 和Action Creator 的示例：

```
function addTodo(text) {
       return {
                type: ADD_TODO,    
                 text
    }
}
```

# 38 解释 Reducer 的作用

​       Reducers 是纯函数，它规定应用程序的状态怎样因响应 ACTION 而改变。Reducers 通过接受先前的状态和 action 来工作，然后它返回一个新的状态。它根据操作的类型确定需要执行哪种更新，然后返回新的值。如果不需要完成任务，它会返回原来的状态。

# 39 Store 在 Redux 中的意义是什么

​        Store 是一个 JavaScript 对象，它可以保存程序的状态，并提供一些方法来访问状态、调度操作和注册侦听器。应用程序的整个状态/对象树保存在单一存储中。因此，Redux 非常简单且是可预测的。我们可以将中间件传递到 store 来处理数据，并记录改变存储状态的各种操作。所有操作都通过 reducer 返回一个新状态。

# 40 什么是React 路由

​        React 路由是一个构建在 React 之上的强大的路由库，它有助于向应用程序添加新的屏幕和流。这使 URL 与网页上显示的数据保持同步。它负责维护标准化的结构和行为，并用于开发单页 Web 应用。 React 路由有一个简单的API。

