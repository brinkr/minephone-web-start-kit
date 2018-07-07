# #迈峰移动端网页起始套件

## 前期准备

- 安装node.js并且将npm升级到最新版本
- 因为npm在国内访问速度很慢，故使用淘宝的npm镜像进行替代。

```bash
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
```

## 快速开始

- 全局安装vue-cli脚手架工具

```bash
cnpm install vue-cli -g
```

- 输入 `vue`检查是否安装成功

- 安装webpack

```bash
vue init webpack projectname
```

  - project name 项目名
  - project description 项目描述
  - author 作者
  - vue build 编译方式
  - install vue-router 安装路由
  - use ESLint to lint your code 代码检查
  - setup unit tests with Karma+mocha 单元测试

**安装路由，使用npm，其它随意。**
- 安装vux
```bash
cnpm install vux --save
```

- 启动项目

```bash
cd projectname
```

```bash
npm run dev
```

## 配置webpack

- 安装less支持

  修改**webpack.config.js**

  ```javascript
  module.exports = {
    module: {
      rules: [
        {
          test: /\.less$/,
          use: [
            'style-loader',
            { loader: 'css-loader', options: { importLoaders: 1 } },
            'less-loader'
          ]
        }
      ]
    }
  }
  ```

  在项目中

  ```javascript
  import css from 'file.less';
  ```

  通过 loader 的选项或者查询参数，你可以将任何 LESS 特定的选项传递给 less-loader。

  有关所有可用选项，请参阅[LESS 文档](http://lesscss.org/usage/#command-line-usage-options)。LESS 把 dash-case 为 camelCase。采用值的某些选项（比如 `lessc --modify-var="a=b"` ），最好使用[JSON 语法](http://webpack.github.io/docs/using-loaders.html#query-parameters)处理。

```javascript
{
  test: /\.less$/,
  use: [
    'style-loader',
    { loader: 'css-loader', options: { importLoaders: 1 } },
    { loader: 'less-loader', options: { strictMath: true, noIeCompat: true } }
    ]
}
```

- 引入 `reset.less`，默认样式不包含reset，并且部分用户自己有一套reset样式，因此需要在`App.vue`进行手动引入

  ```less
  <style lang="less">
  @import '~vux/src/styles/reset.less';
  </style>
  ```

- 配置 `vue-loader`（通过配置vux-loader实现）

  ```json
  // vux-loader
  plugins: [{
    name: 'vux-ui'
  }]
  ```

- 配置`babel-loader`以正确编译 VUX 的js源码（通过配置vux-loader实现）

  ```json
  plugins: [{
    name: 'vux-ui'
  }]
  ```

- 安装`less-loader`以正确编译less源码

  ```bash
  npm install less less-loader --save-dev
  ```

- 安装 `yaml-loader` 以正确进行语言文件读取

  ```bash
  npm install yaml-loader --save-dev
  ```

- 添加 `viewport` meta

  ```html
  <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">
  ```

- 添加 `Fastclick` 移除移动端点击延迟

  ```javascript
  const FastClick = require('fastclick')
  FastClick.attach(document.body)
  ```

- 添加 `vue-router`（如果不需要前端路由，可忽略）

  ```javascript
  import VueRouter from 'vue-router'
  Vue.use(VueRouter)
  ```

- 添加 webpack plugin, 在构建后去除重复css代码（通过配置vux-loader实现）

  ```json
  plugins: [{
    name: 'duplicate-style'
  }]
  ```

## 组件的调用

## .vue文件中调用组件

```html
<template>
  <div>
    <group>
      <cell title="title" value="value"></cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'

export default {
  components: {
    Group,
    Cell
  }
}
</script>
```

## 使用微信jssdk

在 `main.js` 中全局引入：

```javascript
import { WechatPlugin } from 'vux'
Vue.use(WechatPlugin)
console.log(Vue.wechat) // 可以直接访问 wx 对象。
```

- 组件外使用

考虑到你需要在引入插件后调用`config`方法进行配置，你可以通过 `Vue.wechat` 在组件外部访问`wx`对象。

`jssdk`需要请求签名配置接口，你可以直接使用 VUX 基于 `Axios` 封装的 `AjaxPlugin`。

```javascript
import { WechatPlugin, AjaxPlugin } from 'vux'
Vue.use(WechatPlugin)
Vue.use(AjaxPlugin)
Vue.http.get('/api', ({data}) => {
  Vue.wechat.config(data.data)
})
```

- 组件中使用

那么之后任何组件中都可以通过 `this.$wechat` 访问到 `wx` 对象。

```javascript
export default {
  created () {
    this.$wechat.onMenuShareTimeline({
      title: 'hello VUX'
    })
  }
}
```
## 页面切换显示loading

移动端如果使用异步组件加载那么还是需要一点等待时间的，在网络慢时等待时间会更长。显示`Loading`状态缓解一下用户等待情绪就十分重要。

如果你使用`vue-router`和`vuex`，那么可以很容易实现。

首先，注册一个`module`来保存状态

```javascript
const store = new Vuex.Store({}) // 这里你可能已经有其他 module

store.registerModule('vux', { // 名字自己定义
  state: {
    isLoading: false
  },
  mutations: {
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
    }
  }
})
```

然后使用`vue-router`的`beforeEach`和`afterEach`来更改`loading`状态

```Javascript
router.beforeEach(function (to, from, next) {
  store.commit('updateLoadingStatus', {isLoading: true})
  next()
})

router.afterEach(function (to) {
  store.commit('updateLoadingStatus', {isLoading: false})
})

```

在`App.vue`里使用`loading`组件并从`vuex`获取`isLoading`状态

```html
<loading v-model="isLoading"></loading>
```

```javascript
import { Loading } from 'vux'
import { mapState } from 'vuex'
export default {
  components: {
    Loading
  },
  computed: {
    ...mapState({
      isLoading: state => state.vux.isLoading
    })
  }
}
```

如果你觉得在加载比较快时`Loading`组件一闪而过体验也不大好，那么你可以延迟设置`loading=false`。