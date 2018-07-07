
<template>

  <div id="app">
    <!--<x-header>This is the page title.</x-header>-->
    <!--<router-view></router-view>-->
<!--<PersonInfo>ssssssss</PersonInfo>-->
    <!--<Home></Home>-->
    <!--<router-link to="/foo">Go to Foo</router-link>-->
    <!--<router-link to="/bar">Go to Bar</router-link>-->

    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->

    <router-view>
      <home></home>

    </router-view>
    <!--<div>-->

      <!--<group-title>李伟分</group-title>-->
      <!--<grid>-->
        <!--<grid-item >-->
            <!--<span>28</span>-->
            <!--<p>个人积分</p>-->
        <!--</grid-item>-->
        <!--<grid-item >-->
          <!--<span>28</span>-->
          <!--<p>个人积分</p>-->
        <!--</grid-item>-->
        <!--<grid-item >-->
          <!--<span>28</span>-->
          <!--<p>个人积分</p>-->
        <!--</grid-item>-->
      <!--</grid>-->
      <!--<grid>-->
        <!--<grid-item >-->
          <!--<span>28</span>-->
          <!--<p>个人积分</p>-->
        <!--</grid-item>-->
        <!--<grid-item >-->
          <!--<span>28</span>-->
          <!--<p>个人积分</p>-->
        <!--</grid-item>-->
        <!--<grid-item >-->
          <!--<span>28</span>-->
          <!--<p>个人积分</p>-->
        <!--</grid-item>-->
      <!--</grid>-->


<!--<div><router-link class="" to="/home">Go to Foo</router-link></div>-->
    <tabbar>

      <tabbar-item link="/home">
        <!--<img slot="icon" src="../assets/demo/icon_nav_button.png">-->
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="/branch">
        <!--<img slot="icon" src="../assets/demo/icon_nav_button.png">-->
        <span slot="label">表单</span>
      </tabbar-item>

      <tabbar-item link="/foo">
        <!--<img slot="icon" src="../assets/demo/icon_nav_cell.png">-->
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>

      <!--<tabbar>-->

          <!--<tabbar-item @on-item-click="turnToHome" link="/home">-->
            <!--&lt;!&ndash;<img slot="icon" src="../assets/demo/icon_nav_button.png">&ndash;&gt;-->

            <!--<span slot="label">首页</span>-->
          <!--</tabbar-item>-->
        <!--<tabbar-item show-dot @on-item-click="turnToBranch" link="/branch">-->
          <!--&lt;!&ndash;<img slot="icon" src="../assets/demo/icon_nav_msg.png">&ndash;&gt;-->
          <!--<span slot="label">组织</span>-->
        <!--</tabbar-item>-->
        <!--<tabbar-item selected link="/component/demo">-->
          <!--&lt;!&ndash;<img slot="icon" src="../assets/demo/icon_nav_article.png">&ndash;&gt;-->
          <!--<span slot="label">互动</span>-->
        <!--</tabbar-item>-->
        <!--<tabbar-item badge="2">-->
          <!--&lt;!&ndash;<img slot="icon" src="../assets/demo/icon_nav_cell.png">&ndash;&gt;-->
          <!--<span slot="label">我的</span>-->
        <!--</tabbar-item>-->
      <!--</tabbar>-->
    <!--</div>-->
  </div>


</template>

<script>
  import VueRouter from 'vue-router'
  import  PersonInfo from  './components/PersonInfo'
  import  PersonInfoz from  './components/PersonInfoz'
  import  Home from './components/Home'
  import Branch from './components/Branch'


export default {
  components: {Home},
  name: 'app',
  methods:{
    turnToHome(){
      const routes = [{ path: '/home', component: Home}]
      const router = new VueRouter({
        routes
      })
//      router.push('/home')
     // router.go('/home')
    },

    turnToBranch(){
      const routes = [{ path: '/branch', component: Branch}]
      const router = new VueRouter({
        routes
      })
//      router.push('/branch')
      //router.go('/branch')
    }

  }



}



  new VueRouter({
    routes: [{
      path: '/',
      component:Home,
      redirect: '/home',//设置默认指向的路径
      name: 'Home'
    }
//    , {
//      path: '/home',//设置默认指向的路径指向的是下面的MyHome组件
//      component:Home,
//      name: 'Home'
//    }
    ]
  })

</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}

</style>
