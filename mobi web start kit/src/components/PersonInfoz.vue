<template>
  <div>

    <group-title>222222222222</group-title>
    <grid>
      <grid-item >
        <span>28</span>
        <p>个人积分</p>
      </grid-item>
      <grid-item >
        <span>28</span>
        <p>个人积分</p>
      </grid-item>
      <grid-item >
        <span>28</span>
        <p>个人积分</p>
      </grid-item>
    </grid>
    <grid>
      <grid-item >
        <span>28</span>
        <p>个人积分</p>
      </grid-item>
      <grid-item >
        <span>28</span>
        <p>个人积分</p>
      </grid-item>
      <grid-item >
        <span>28</span>
        <p>个人积分</p>
      </grid-item>
    </grid>



    <tabbar>
      <tabbar-item>
        <!--<img slot="icon" src="../assets/demo/icon_nav_button.png">-->
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <!--<img slot="icon" src="../assets/demo/icon_nav_msg.png">-->
        <span slot="label">组织</span>
      </tabbar-item>
      <tabbar-item selected link="/component/demo">
        <!--<img slot="icon" src="../assets/demo/icon_nav_article.png">-->
        <span slot="label">互动</span>
      </tabbar-item>
      <tabbar-item badge="2">
        <!--<img slot="icon" src="../assets/demo/icon_nav_cell.png">-->
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name:'PersonInfo'
    };
</script>

<style>

</style>
