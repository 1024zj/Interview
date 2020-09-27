# 1，生命周期

从创建到渲染的过程，不仅仅问8个函数

四个阶段

组件创建时：creating：

模板渲染时：mounting

数据更新时：updating

组件卸载时：destroying

## 1.1 图示

![](./imgs/01/img01.png)

## 1.2 生命周期钩子函数

beforeCreate：创建前，在数据观测和初始化事件还未开始

created：创建后，完成数据观测，属性和方法的运算，初始化事件，el属性还没有显示出来

beforeMount：载入前，在挂载开始之前被调用，相关的render函数首次被调用。实例已完成以下的配置：编译模板，把data里面的数据和模板生成html。注意此时还没有挂载html到页面上。

mounted：载入后，在el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用。实例已完成以下的配置：用上面编译好的html内容替换el属性指向的DOM对象。完成模板中的html渲染到html页面中。此过程中进行ajax交互。

beforeUpdate：更新前，在数据更新之前调用，发生在虚拟DOM重新渲染和打补丁之前。可以在该钩子中进一步地更改状态，不会触发附加的重渲染过程。

updated：更新后，在由于数据更改导致的虚拟DOM重新渲染和打补丁之后调用。调用时，组件DOM已经更新，所以可以执行依赖于DOM的操作。然而在大多数情况下，应该避免在此期间更改状态，因为这可能会导致更新无限循环。该钩子在服务器端渲染期间不被调用。

beforeDestroy：销毁前，在实例销毁之前调用。实例仍然完全可用。

destroyed：销毁后，在实例销毁之后调用。调用后，所有的事件监听器会被移除，所有的子实例也会被销毁。该钩子在服务器端渲染期间不被调用。



### 1.3 回答的相关问题

1.什么是vue生命周期？
答： Vue 实例从创建到销毁的过程，就是生命周期。从开始创建、初始化数据、编译模板、挂载Dom→渲染、更新→渲染、销毁等一系列过程，称之为 Vue 的生命周期。

2.vue生命周期的作用是什么？
答：它的生命周期中有多个事件钩子，让我们在控制整个Vue实例的过程时更容易形成好的逻辑。

3.vue生命周期总共有几个阶段？
答：它可以总共分为8个阶段：创建前/后, 载入前/后,更新前/后,销毁前/销毁后。

4.第一次页面加载会触发哪几个钩子？
答：会触发 下面这几个beforeCreate, created, beforeMount, mounted 。

5.DOM 渲染在 哪个周期中就已经完成？
答：DOM 渲染在 mounted 中就已经完成了。

![](https://img2018.cnblogs.com/blog/685007/201810/685007-20181010092413799-259485998.png)

1. created阶段的ajax请求与mounted请求的区别：前者页面视图未出现，如果请求信息过多，页面会长时间处于白屏状态
2. mounted 不会承诺所有的子组件也都一起被挂载。如果你希望等到整个视图都渲染



# 2，组件封装

封装组件：主要是为了解耦，具备高性能、低耦合，在通用组件的时候要留一个插槽

```
<div id="demo">
   <v-header>
   </v-header>
</div>

<template id="header">
	<div>
		<p>{{msg}}:<input/></p>
	</div>
</template>
<script type="x-template" id="footer">
	<div>
		组件底部
	</div>
</script>
<script>
	var Header={
		template:"#header",
		data:function(){
			return {
				msg:""
			}
		}
	}
	var Header={
		template:"#footer"
	}
	var vm = new Vue({
		el:"#demo",
		components:{
			"v-header":Header,
			"v-footer":Footer
		}
	})
</script>
```

为什么data必须是一个函数：主要是防止组件与组件之前 声明的变量相互影响

# 3，axios

## 3.1 axios是什么？

​       axios是基于promise的用于浏览器和node.js的http客户端，主要作用就是向后退发送请求。

- 支持promise
- 提供并发方法：同时请求两个接口
- 提供了拦截器
- 提供支持CSRF（跨站请求伪造）



# 4，vuex

## 4.1 vuex是什么？

​        vuex为vue构建一个状态集管理，主要是为了解决组件状态共享的问题，强调的是集中式管理，便于便于维护，便于解耦，适用于大型项目

![](https://segmentfault.com/img/bVOAAF)

**state**
		Vuex 使用单一状态树,即每个应用将仅仅包含一个store 实例，但单一状态树和模块化并不冲突。存放的数据状态，不可以直接修改里面的数据。
**mutations**
		mutations定义的方法动态修改Vuex 的 store 中的状态或数据。
**getters**
		类似vue的计算属性，主要用来过滤一些数据。
**action**
		actions可以理解为通过将mutations里面处里数据的方法变成可异步的处理数据的方法，简单的说就是异步操作数据。view 层通过 store.dispath 来分发 action。

```
const store = new Vuex.Store({ //store实例
      state: {
         count: 0
             },
      mutations: {                
         increment (state) {
          state.count++
         }
          },
      actions: { 
         increment (context) {
          context.commit('increment')
   }
 }
})
```

**modules**
       项目特别复杂的时候，可以让每一个模块拥有自己的state、mutation、action、getters,使得结构非常清晰，方便管理。

```
const moduleA = {
  state: { ... },
  mutations: { ... },
  actions: { ... },
  getters: { ... }
 }
const moduleB = {
  state: { ... },
  mutations: { ... },
  actions: { ... }
 }

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
})
```



## 4.2 怎么使用？

vuex包含5个模块：

- state：存放数据的位置
- mutations：变更状态
- getters：动态变更数据
- actions：actions从动作层调用mutations去更改状态
- modules：拆分仓库

### 4.3 哪种场景使用它？

大型应用

# 5 vue指令

4个vue中的指令和它的用法

v-if：条件渲染指令，代表存在消耗

v-bind：用来绑定属性，简写(:)

v-on：监听指令，简写（@）

v-for：循环指令



# 6 导航钩子

​		vue-router 提供的导航守卫主要用来通过跳转或取消的方式守卫导航。

## 6.1 导航钩子有哪些？

导航钩子就是路由的生命周期函数，主要包括全局和局部。

### 6.1.1 全局钩子函数

beforeEach：路由切换开始调用，类似路由守卫

```
const router = new VueRouter({ ... })
router.beforeEach((to,from,next)=>{
//to:即将进入目标对象
//form:当前导航要离开的导航对象
//next:是一个函数，调用resolve
})
```

对于登录的设置案例：

```
router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  else next()
})
```

afterEach：路由切换离开时调用

### 6.1.2 局部的钩子函数

局部到单个路由：

- beforeEnter

组件的钩子函数：

- beforeRouterEnter
- beforeRouterUpdate
- beforeRouterLeave

## 7 v-model是什么？Vue中标签怎么绑定事件？

Vue利用v-model进行表单数据双向绑定，做了两个操作

- v-bind绑定一个value的属性
- v-on帮当前的元素绑定到一个事件上

```
<div id ="demo">
	<input v-model="inputValue"/>
	<p>{{inputValue}}</p>
	
	<input v-bind:value="inputValue2" v-on:input="inputValue2=$event.target.value"/>
	<p>{{inputValue2}}</p>
</div>
<script>
var vm = new Vue({
	el:"#demo",
	data:{
		inputValue:""
	}
})
</script>
```

# 8 如何使用Vue构建项目

```
npm install -g vue-cli
vue init webpack project_name
cd project_name
npm install
npm run dev
```

1，使用Vue-cli脚手架构建项目

2，直接引用vue.js进行项目的构建

# 9 swiper插件

​        swiper插件从后台获取数据没有问题，css代码也没有问题，但是图片没有动，怎么解决？

​         swiper提前初始化，这个时候数据还没有完全出来。

​         解决方法，主要有两个方向，一个从swiper，一个从vue方面

## 9.1 vue方面

vue方面：vue中专门提供了一个nextTick()，用于解决dom的先后执行问题

当数据加载完毕后，才执行swiper

```
mounted(){
	this.$nextTick(function(){
		var myswiper = new Swiper(".swiper-container",{
			autoplay:true
			loop:true
		})
	})
}
```

## 9.1 swiper方面

```
this.$nextTick(function(){
		var myswiper = new Swiper(".swiper-container",{
			autoplay:true
			loop:true，
			observer:true//自动帮我初始化wiper
			observeParents:true//当前swiper的父元素发生变化会初始化一次
		})
	})
```

# 10，路由懒加载

延迟加载、当需要的时候再加载，有效的分担首页的加载时间

```
//webpack chunk name
function resolveView(){
	return ()=>import(`@/cpmponents/${view}.vue`)
}

export default new Router({
	routes:[
	{
		path:'/',
		name:'HelloWorld',
		component:resolveView('HelloWorld')
	},
	{
		path:'/detail',
		name:'detail',
		component:resolveView('detail')
	}
	]
})
```

# 11 Vue-loader

vue-loader就是一个加载器，把Vue编译javaScript的模块，方便浏览器读文件。

## 11.1 为什么要转译vue组件

- 动态的渲染一些数据
- 对三个标签（template、script、style）都做了优化script中可以直接使用es6 style 也默认使用sass，
- 提供作用域的选择
- 开发阶段提供热加载



# 12 插槽

vue插槽：slot是一个占位

about.vue

```
<div>
	<slot></slot>
	<slot name="header"></slot>
	<slot name="footer" say="hello"></slot>
<div>
```



## 12.1 具名插槽

```
<div slot="header"></div>
```



## 12.2 默认插槽

默认插槽就是匿名插槽

```
<div></div>
```



## 12.3 作用域插槽

```
<div slot="footer" slot-scope="aaa">
	{{aaa}}
</div>
```

# 13 对vue虚拟DOM的理解（重点）

## 13.1 什么是虚拟dom？

​        使用js对象形式去添加dom元素，本质上是优化了diff算法，先在js上面批量更改，然后批量在真实节点上面修改。采用了新旧节点的对比，获取差异的dom，一次性更新到真实的dom上，从而

## 13.2 缺陷？

一般是同级或者兄弟层级的修改，尽量不要跨层级修改dom，设置key，可以最大的理由节点

# 14 MVVM模式

## 14.1 mvc

- 控制器：Controller
- 视图：View
- 模型：Model

## 14.2 MVVM（重看）

- Model：代表数据模型，也可以在Model中定义数据修改和操作的业务逻辑。
- View：代表UI 组件，它负责将数据模型转化成UI 展现出来。
- ViewModel：监听模型数据的改变和控制视图行为、处理用户交互，简单理解就是一个同步View 和 Model的对象，连接Model和View。

【模型】指的是后端传递的数据。【视图】指的是所看到的页面。【视图模型】mvvm模式的核心，它是连接view和model的桥梁。它有两个方向：一是将【模型】转化成【视图】，即将后端传递的数据转化成所看到的页面。实现的方式是：数据绑定。二是将【视图】转化成【模型】，即将所看到的页面转化成后端的数据。实现的方式是：DOM 事件监听。这两个方向都实现的，我们称之为数据的双向绑定。



​        在MVVM的框架下视图和模型是不能直接通信的。它们通过ViewModel来通信，ViewModel通常要实现一个observer观察者，当数据发生变化，ViewModel能够监听到数据的这种变化，然后通知到对应的视图做自动更新，而当用户操作视图，ViewModel也能监听到视图的变化，然后通知数据做改动，这实际上就实现了数据的双向绑定。并且MVVM中的View 和 ViewModel可以互相通信。

# 15 keep-alive

## 15.1 什么是keep-alive

​       它能让不活动的组件“活着”，从A页面跳转到B页面，一般从B页面返回A页面，A页面会重新加载，但是keep-alive会保存到内存里面。

它提供了include与exclude两个属性，允许组件有条件的缓存

## 15.2 实现的原理

在created时候，将需要缓存的vnode节点放到cache中，在render的时候根据name取出

## 15.3 使用

```
export default new Router({
	routes:[
	{
		path:'/',
		name:'HelloWorld',
		component:resolveView('HelloWorld'),
		meta:{
			keepAlive:true
		}
	},
	{
		path:'/detail',
		name:'detail',
		component:resolveView('detail'),
		meta:{
			keepAlive:true
		}
	}
	]
})
```

App.vue

```
<keep-alive>
   <router-view v-if="$route.meta.keepAlive">
</keep-alive>
```

# 16 Vue组件间的参数传递

## 16.1 父组件与子组件传值

父组件传给子组件：子组件通过props方法接受数据;
子组件传给父组件：$emit方法传递参数

## 16.2 非父子组件间的数据传递，兄弟组件传值

eventBus，就是创建一个事件中心，相当于中转站，可以用它来传递事件和接收事件。项目比较小时，用这个比较合适。

# 17，vue-cli如何新增自定义指令

## 17.1 创建局部指令

```
var app = new Vue({
    el: '#app',
    data: {    
    },
    // 创建指令(可以多个)
    directives: {
        // 指令名称
        dir1: {
            inserted(el) {
                // 指令中第一个参数是当前使用指令的DOM
                console.log(el);
                console.log(arguments);
                // 对DOM进行操作
                el.style.width = '200px';
                el.style.height = '200px';
                el.style.background = '#000';
            }
        }
    }
})
```

## 17.2 全局指令

```
<div id="app">
    <div v-dir1></div>
    <div v-dir2></div>
</div>
```

# 18 自定义过滤器

html代码：

```
<div id="app">
     <input type="text" v-model="msg" />
     {{msg| capitalize }}
</div>
```

JS代码：

```
var vm=new Vue({
    el:"#app",
    data:{
        msg:''
    },
    filters: {
      capitalize: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
      }
    }
})
```

全局定义过滤器

```
Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})
```

过滤器接收表达式的值 (msg) 作为第一个参数。capitalize 过滤器将会收到 msg的值作为第一个参数。

# 19 css只在当前组件起作用

答：在style标签中写入**scoped**即可 例如：<style scoped></style>

# 20 v-if 和 v-show 区别

答：v-if按照条件是否渲染，v-show是display的block或none；

# 21 和router的区别

答：是路由信息对象，包括，，，，，，等路由信息参数。而router是“路由实例”对象包括了路由的跳转方法，钩子函数等。

# 22 vue.js的两个核心是什么？

两个核心分别是数据驱动和组件系统

## 22.1 数据驱动

​		当数据发生变化的时候，用户界面发生相应的变化，开发者不需要手动的去修改dom。

## 22.2 组件系统

vue中的组件分为两种，全局组件和局部组件。

# 23 vue几种常用的指令

答：v-for 、 v-if 、v-bind、v-on、v-show、v-else

# 24 vue常用的修饰符？

答：.prevent: 提交事件不再重载页面；.stop: 阻止单击事件冒泡；.self: 当事件发生在该元素本身而不是子元素的时候会触发；.capture: 事件侦听，事件发生的时候会调用

# 25 v-on 可以绑定多个方法吗？

答：可以

# 26 vue中 key 值的作用？

答：当 Vue.js 用 v-for 正在更新已渲染过的元素列表时，它默认用“就地复用”策略。如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序， 而是简单复用此处每个元素，并且确保它在特定索引下显示已被渲染过的每个元素。key的作用主要是为了高效的更新虚拟DOM。

# 27 什么是vue的计算属性？

答：在模板中放入太多的逻辑会让模板过重且难以维护，在需要对数据进行复杂处理，且可能多次使用的情况下，尽量采取计算属性的方式。好处：①使得数据处理结构清晰；②依赖于数据，数据更新，处理结果自动更新；③计算属性内部this指向vm实例；④在template调用时，直接写计算属性名即可；⑤常用的是getter方法，获取数据，也可以使用set方法改变数据；⑥相较于methods，不管依赖的数据变不变，methods都会重新计算，但是依赖数据不变的时候computed从缓存中获取，不会重新计算。

# 28 vue等单页面应用及其优缺点

答：优点：Vue 的目标是通过尽可能简单的 API 实现响应的数据绑定和组合的视图组件，核心是一个响应的数据绑定系统。MVVM、数据驱动、组件化、轻量、简洁、高效、快速、模块友好。
缺点：不支持低版本的浏览器，最低只支持到IE9；不利于SEO的优化（如果要支持SEO，建议通过服务端来进行渲染组件）；第一次加载首页耗时相对长一些；不可以使用浏览器的导航按钮需要自行实现前进、后退。

# 29 怎么定义 vue-router 的动态路由? 怎么获取传过来的值

答：在 router 目录下的 index.js 文件中，对 path 属性加上 /:id，使用 router 对象的 params.id 获取。

# 30 vue的双向绑定原理

# 31 首页优化

## 31.1 GZIP打包

安装gzip

```
npm install -save gzip
```

在webpack.prod.conf.js加入如下代码

```

if (config.build.productionGzip) {
  const CompressionWebpackPlugin = require('compression-webpack-plugin')
 
  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )

```

在index.js中加入如下代码

```
productionGzip: false,
productionGzipExtensions: ['js', 'css'],
```

## 31.2 CND

### 31.2.1 引入的库

 index.html加入需要引入的库

```
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/jquery@3.3.1/dist/jquery.js"></script> 
<script src="https://unpkg.com/element-ui/lib/index.js"></script>
```

### 31.2.2 加入externals

在webpack.base.conf.js中加入externals

```

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/main.js'
  },
  externals: {
    'jquery': 'jQuery',
    'element-ui':'ELEMENT',
    'vue': 'Vue'
  },
```

### 31.2.3 删除Import

在main.js中删除相应的Import

