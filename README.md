# Vue.js打造一个开源的CNode社区

Vue.js打造一个开源的CNode社区，实现了浏览、发帖、新手入门、api等等功能。

## 源代码
源代码地址：👉 https://github.com/yaoyanweb/vue-cnode

欢迎大家star和fork😄


## 技术栈
* **Vue2.0**：前端页面展示。
* **Vuex**：Vuex，实现不同组件间的状态共享
* **vue-router**：页面路由切换
* **vue-resource**：一个基于 `Promise` 的 HTTP 库，向后端发起请求。
*  **eleme-ui**：饿了出品的UI框架。
* **Express**、**Koa2**：因为vue-cli生成的项目是基于**express**的，所以在开发阶段我使用的是它，但是真正上线生产环境我换成了**Koa2**。
* **Moment.js**：一个时间处理的库，方便对时间进行格式化成需要的格式，如主题、回复时间显示"* 分钟前、* 小时前、*天前"等等。
* **ES6**、**ES7**：采用ES6语法，这是以后的趋势。箭头函数、Promise等等语法很好用。
* **localStorage**：保存用户信息。
* **Webpack**：vue-cli自带Webpack，但是需要自己改造一下，比如要对需要安装sass相关loader，vue-cli已经配置好了webpack，你只需要安装依赖就可以，使用的时候只需要`<style lang="scss"></style>`。

## 总结
1. 组件状态多了用Vuex管理很方便，引用 Redux 的作者 Dan Abramov 的话说就是：
> Flux 架构就像眼镜：您自会知道什么时候需要它。

2. 事先一定要先想好整个页面组成，怎样去分组件开发，这样在开发阶段会事半功倍。
3. Moment.js在Vue中用ES6的方式引入会有问题，可以尝试在main.js尝试这样`import moment from 'moment'` `Vue.prototype.moment = moment;`给Vue的原型上添加moment，这样就可以在Vue的实例中随意使用它了。
4. 项目结构如下图

![Vue-CNode by microzz.com](https://github.com/microzz/preview/blob/master/vue_cnode.png?raw=true)



## 时间轨迹
* **7.13**：基本功能完成，后续完成登录后的操作。
* **7.14**：完成登录以及侧边栏。




## About
源代码地址：👉 [GitHub](https://github.com/yaoyanweb/vue-cnode)

个人网站：👉 [www.yaoweb.cn](http://www.yaoweb.cn/)

GitHub：👉 [yaoyanweb](https://github.com/yaoyanweb/vue-cnode)

## Build Setup

``` bash
# install dependencies
cnpm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```


