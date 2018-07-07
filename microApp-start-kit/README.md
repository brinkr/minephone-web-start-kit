### 约定：

- 代码风格规范请使用 [JavaScript Standard Style](https://github.com/feross/standard)
- Less mixins请使用 [lesshat](https://github.com/madebysource/lesshat#size)
- 命名规范使用驼峰命名方式，且命名尽量能够顾名思义，如：变量名`userInfo`，方法名`getUserInfo`，类名、组件名`User`
- 在less中直接使用px，编辑后自动转为rpx

###  安装

1. Clone BeeWepy 仓库到本地；
2. 安装依赖 `$ npm install`;
3. 在 BeeWepy 根目录下执行 `$ wepy dev`，生成 dist/ 目录；
4. 微信开发者工具 —— 新建一个小程序，目录指向生成的 dist/；

### 全局inject

- $link: 注册为wepy.page的页面跳转方式

```
  this.$link('/page/home/index')
```

- $back: 返回上一页，非跳转

```
  this.$back()
```

- $toast：吐司提示

```
  this.$toast('吐司提示')
```

- $loading：正在加载提示

```
  this.$loading() // 显示
  this.$loading(false) //隐藏
```

- $modal: 模态框

```
  await this.$modal('确定？', '子标题', true)
```

- $db: 同步方式获取以及设置localstorage

```
  this.$db.get('name')
  this.$db.set('name', '子标题')
```

- $d/$debug: debug消息

```
  this.$d('消息')
  this.$debug('消息')
```

### Api相关

- 在`config/index.js`中定义是否需要全局mock数据(isMock), 也可以在特定的请求中覆盖, 生产环境自动覆盖。 isMock决定是否使用mock数据，当`isMock=true`时根据`src/mock/mockConfig.js`的设置获取mock数据，当`isMock=false`时会发送网络请求，并且在请求中删除`isMock`参数。

```
let requestData = {
  isMock: false,
  mobile: '110'
}
await this.POST('/login', requestData)
```

- 不明确定义`usertoken`,请求中会默认带上localstorage中的`usertoken`,一般不需要自带`usertoken`

```
let requestData = {
  usertoken: this.$parent.globalData.token
  mobile: '110'
}
await this.POST('/login', requestData)
```

- 请求url以http或才https开头，不会拼接`domain`, mockConfig中定义key时使用全url

```
await this.POST('/login', requestData) //url为 domain + /login
await this.POST('http://www.baidu.com/login', requestData) //url为 http://www.baidu.com/login
```

- 参数 `showToast` 默认为`false`时, 调用`wepy.showNavigationBarLoading()`, 为`true`时, 调用`wepy.showLoading()`

### 注意

- 使用wepy-cli 生成项目，运行后报: `Error: module "npm/lodash/_nodeUtil.js" is not defined`

解决方法：

> `npm i util --no-save && wepy build --no-cache`

> <https://github.com/Tencent/wepy/issues/1294> 不保存依赖,安装util,同时 不使用缓存构建

- 微信开发者工具打开dist运行时报TypeError: Cannot read property 'Promise' of undefined

解决方法：

> 微信开发者工具-->项目-->关闭ES6转ES5。重要：漏掉此项会运行报错。 微信开发者工具-->项目-->关闭上传代码时样式自动补全 重要：某些情况下漏掉此项会也会运行报错。 微信开发者工具-->项目-->关闭代码压缩上传 重要：开启后，会导致真机`computed`, `props.sync` 等等属性失效。（参考[开发者工具编译报错](https://github.com/Tencent/wepy/issues/273)）

### 代码高亮

文件后缀为`.wpy`，可共用`Vue`的高亮规则，但需要手动设置。下面提供一些常见IDE或编辑器中实现代码高亮的相关设置步骤以供参考(也可通过更改文件后缀名的方式来实现高亮，详见后文相关介绍)。

- **Sublime**

  1. 打开`Sublime->Preferences->Browse Packages..`进入用户包文件夹。

  2. 在此文件夹下打开cmd，运行`git clone git@github.com:vuejs/vue-syntax-highlight.git`，无GIT用户可以直接下载[zip包](https://github.com/vuejs/vue-syntax-highlight/archive/master.zip)解压至当前文件夹。

  3. 关闭`.wpy`文件重新打开即可高亮。

- **WebStorm/PhpStorm**

  1. 打开`Settings`，搜索`Plugins`，搜索`Vue.js`插件并安装。

  2. 打开`Settings`，搜索`File Types`，找到`Vue.js Template`，在`Registered Patterns`添加`*.wpy`，即可高亮。

### 开发模式转换

WePY框架在开发过程中参考了Vue等现有框架的一些语法风格和功能特性，对原生小程序的开发模式进行了再次封装，更贴近于MVVM架构模式。

### wepy.config.js配置

执行`wepy init standard demo`后，会生成类似下面这样的配置文件。

```
let prod = process.env.NODE_ENV === 'production';

module.exports = {
    'target': 'dist',
    'source': 'src',
    'wpyExt': '.wpy',
    'compilers': {
        less: {
            'compress': true
        },
        /*sass: {
            'outputStyle': 'compressed'
        },
        postcss: {
            plugins: [
                cssnext({
                    browsers:['iOS 9', 'Android 4.4']
                })
            ]
        },*/
        babel: {
            'presets': [
                'es2015',
                'stage-1'
            ],
            'plugins': [
                'transform-export-extensions',
                'syntax-export-extensions',
                'transform-runtime'
            ]
        }
    },
    'plugins': {
    }
};

if (prod) {
    // 压缩sass
    module.exports.compilers['sass'] = {'outputStyle': 'compressed'};

    // 压缩less
    module.exports.compilers['less'] = {'compress': true};

    // 压缩js
    module.exports.plugins = {
        'uglifyjs': {
            filter: /\.js$/,
            config: {
            }
        },
        'imagemin': {
            filter: /\.(jpg|png|jpeg)$/,
            config: {
                'jpg': {
                    quality: 80
                },
                'png': {
                    quality: 80
                }
            }
        }
    };
}
```

### .wpy文件说明

一个`.wpy`文件可分为三大部分，各自对应于一个标签：

1. 脚本部分，即`<script></script>`标签中的内容，又可分为两个部分：

    逻辑部分，除了config对象之外的部分，对应于原生的`.js`文件；

    配置部分，即config对象，对应于原生的`.json`文件。

1. 结构部分，即`<template></template>`模板部分，对应于原生的`.wxml`文件。
2. 样式部分，即`<style></style>`样式部分，对应于原生的`.wxss`文件。

其中，小程序入口文件`app.wpy`不需要`template`，所以编译时会被忽略。`.wpy`文件中的`script`、`template`、`style`这三个标签都支持`lang`和`src`属性，`lang`决定了其代码编译过程，`src`决定是否外联代码，存在`src`属性且有效时，会忽略内联代码。

### 小程序入口app.wpy

```
<script>
import wepy from 'wepy';
export default class extends wepy.app {
    config = {
        "pages":[
            "pages/index/index"
        ],
        "window":{
            "backgroundTextStyle": "light",
            "navigationBarBackgroundColor": "#fff",
            "navigationBarTitleText": "WeChat",
            "navigationBarTextStyle": "black"
        }
    };
    onLaunch() {
        console.log(this);
    }
}
</script>

<style lang="less">
/** less **/
</style>
```

入口文件`app.wpy`中所声明的小程序实例继承自`wepy.app`类，包含一个`config`属性和其它全局属性、方法、事件。其中`config`属性对应原生的`app.json`文件，build编译时会根据`config`属性自动生成`app.json`文件，如果需要修改`config`中的内容，请使用微信提供的相关API。