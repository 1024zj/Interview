### 1，redux中间件的原理是什么？

​		中间件是action和store之间的桥梁，改装dispatch

### 2，你会统一放到redux管理，还是共享数据放到redux中管理

（1）把所有的数据放到redux管理，从工程的角度。如果把共用的数据放redux，那么一个组件既有state存储数据，又有props存储数据，又有redux存储数据，查找问题就复杂。如果全部放到redux，那么出现问题定位问题很快.

（2）自己组件的数据会被其他组件使用，redux可以存储5G的数据

（3）redux和immutable库（facebook）结合使用会达到很优

### 3，componentWillReceiveProps调用时机

​		Props改变的时候会被调用。子组件第二次传参数的时候

### 4，react性能优化的最佳实践

​		pureComponent：父组件向子组件传递的props一样的时候render不会重新渲染，pureComponent底层自带比较。pureComponent与immutable结合

### 5，虚拟dom是什么？为什么虚拟dom会提升代码性能

​		虚拟dom就是js对象。没有虚拟dom的时候，要比较真实dom会比较复杂，因为会有css、事件、属性，两个真实dom比较，会非常耗性能，所以就比较js对象的比较，这就提升了性能。

### 6，webpack中，是借助了loader完成的JSX代码的转化，还是babel

​		react是babel底层的preset-reat帮助把react转化为es5

### 7，调用setState后，发生了什么

​		setState一般怎么用，传一个对象还是传一个方法？

```
this.setState((prevState)=>({
	age:++prevState.age
})
```

例题：

```
this.setState({
	name:this.state.age++
})
```

setState是一个异步的，如果多次调用后，会把多次调用的方法合并了

### 8，setState是异步的

因为生异步的，所以获得的数据不及时，应该放到回调函数里面

```
<input refs="input" value={this.state.age}>
this.setState({
	name:this.state.age++
},()=>{
	this.refs.input.value
})
```

### 9，refs的作用是什么，在什么业务场景下使用refs

操作dom的时候使用refs

（1）渲染一个图片，渲染完图片后获得这个图片的宽和高，做放大镜的时候.

（2）当页面滚动的时候，监听页面的

```
class Test extends Component{
	constructor(props){
		super(props);
		this.state={
			top:0
		}
	}
	componentDidMount(){
			window.addEventListener("scroll",()={
				this.setState({
					top:document.body.scrollTop
				})
			});
	}
	
	render(){
		return <div>{this.state.top}</div>
	}
}

```

这个代码当跳转到其他页面，会出现 挂在windos上的事件没有消耗，下面是修改

```
class Test extends Component{
	constructor(props){
		super(props);
		this.state={
			top:0
		}
		this.handleWindowScroll=this.handleWindowScroll.bind(this)
	}
	handleWindowScroll(){
		this.setState({
			top:document.body.scrollTop
		})
	}
	componentDidMount(){
		window.addEventListener("scroll",this.handleWindowScroll);
	}
	
	componentWillUnUnmount(){
		window.removeEventListener("scroll",this.handleWindowScroll);
	}
	render(){
		return <div>{this.state.top}</div>
	}
}

```



### 10，ref是一个函数，有什么好处？

```
class Test extends Component{
	constructor(props){
		super(props);
		this.state={
			top:0
		}
	}

	componentDidMount(){
		this.elem//获得标签
	}
	
	render(){
		return <div ref={(div)=>{this.elem=div}}>div</div>
	}
}
```

方便react消耗组件或者重新渲染的时候，帮助我们清空ref引用里面的东西，防止内容泄漏

### 11，高阶组件你是什么理解的，它的本质上一个什么东西？

​        在react使用的时候不要使用继承，而使用组合的形式。高阶组件是对一个函数，接收一个参数，返回一个函数，对一个组件进行包装，返回新的组件。

### 12，受控组件与非受控组件的区别

受控组件：它的改变完全受控于数据的变化，数据变了，控件变了

```
<input value={this.state.value} />
```

非受控组件：js原生活的数据

```
<input ref="" />
```

受控组件更好，因为react是一个数据驱动的，响应式

### 13，函数组件和hooks

### 14，this指向问题

1，箭头函数//作用域链的原因

2，bind//在constructor进行绑定，在渲染的时候不会做无谓的渲染，只保存一份

```
class Test extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return <div onClick={()=>{console.log(this)}}>div</div>
	}
}
```

### 15，函数组件怎么做性能优化

```
function Test(props){
	return <div></div>
}
```

函数组件比普通组件的性能高，是一个函数没有生命周期，相对类来比没有构造类的过程，但是当props发生变化后，函数就会重新执行。memo对其包装使得函数的性能提升。

```
React.memo(
    function Test(props){
        return <div></div>
    }
)
```

### 16，生命周期哪个方法发送ajax请求

放在componentDidMount里面

1，ComponentWillMount 在新版本被废弃掉落

2，在ssr项目的时候，ComponentWillMount要做服务器端数据的获取，所以不能被占用

### 17，ssr的原理

借助虚拟dom在服务器端执行

### 18，redux-saga的设计思想是什么？什么是sideEffects

### 19，react、jquery、vue是否可以共存在一个项目中

可以，没有问题

```
<div>
<div id="react"></div>
<div id="vue"></div>
</div>
```

### 20，组件是什么？类是什么？类被编译成什么？

函数：功能的集合

组件：页面的一部分

模块：webpack里面引入的一个一个的文件

类：一个构造函数，类被编译后是一个构造函数

### 21，如何避免ajax数据重新获取

react-redux进行状态进行管理，判断store是否有数据，有的话，直接使用

### 22，react-router4的核心思想是什么？和3有什么区别

路由变成一个组件

```
<Link></Link>
<Route></Route>
```

### 23，reselect是做什么的？

充当计算属性，进行缓存提升

### 24，react-router的基本原理，hashHistory，breowserHisotry

hashHistory：路由不需要后端的配合

breowserHisotry：必须在后端的服务器进行配置

### 25，什么情况下会使用异步组件

reloadable库，非常关键，使用了es7  import("./home/header").then

写一个大的项目，所有的页面打包到一起，异步组件就是把每个页面单独打包，也就是路由懒加载，访问哪个页面，引用哪个js文件。

### 26，xss攻击在react中如何防范

### 27，getDerivedStateFromProps

### 28，immutable.js和redux的最佳实践

### 29 vue 和 react 的相同点和区别

#### 29.1 相同点

1，**React与Vue都采用Virtual DOM来优化页面渲染**，改变真实的DOM状态远比改变一个JavaScript对象的花销要大得多

2，**React与Vue都鼓励组件化应用**。这本质上说，是建议你将你的应用分拆成一个个功能明确的模块，每个模块之间可以通过合适的方式互相联系。

3，**React和Vue都有'props'的概念**，允许父组件往子组件传送数据。最新的hooks有所区别，通过useContext实现

4，**React和Vue都有构建工具**，React可以使用Create React App (CRA)，而Vue对应的则是vue-cli。

5，React和Vue都有很好的Chrome扩展工具去帮助你找出bug。

#### 29.2 主要区别

1，**模板 vs JSX**：Vue使用HTML模板去进行渲染，react使用JavaScript赋予了开发者许多编程能力。

2，**状态管理 vs 对象属性**：React中你需要使用setState()方法去更新状态，Vue中数据由data属性在Vue对象中进行管理。

3，**数据**：react是单向传递数据，vue是双向绑定数据

### 30，react之虚拟dom和diff算法

#### 30.1 什么是虚拟DOM

在React中，也有一个render函数来将虚拟DOM树，并且，React中有state转移的过程，所以每次state有变化之后，就会触发render函数，重新构造一个虚拟DOM树。对比新旧虚拟DOM树的差别，记录下差异，然后只针对差异部分对应的真实DOM进行操作。

Diff算法比较复杂，主要的思路是这样的。

1，每一次生成的虚拟DOM树上的各个节点都对应唯一的一个id，当第二次生成了新的DOM树时，对原来树上的每一个节点对比新树上对应节点，如果不同，就记录下来这个差异。同时，差异也分为很多种：

替换节点；
修改属性；
对文本内容修改
移动、删除、增加节点；



2，算法实现
步骤一：用JS对象模拟DOM树
步骤二：比较两棵虚拟DOM树的差异
步骤三：把差异应用到真正的DOM树上

替换节点就需要调原生JS的repaceChild()接口；对于修改属性，则要调setAttribute()接口等等

