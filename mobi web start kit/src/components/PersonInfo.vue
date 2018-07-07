<!--<template>-->

<!--</template>-->

<!--<script type="text/ecmascript-6">-->
    <!--export default {-->
        <!--name:'PersonInfo'-->
    <!--};-->
<!--</script>-->

<!--<style>-->

<!--</style>-->
<template>

  <div>
    <group>
      <cell :title="('My Account')" :value="('Protected')" @click.native="onClick"></cell>
      <cell :title="('Money')" @click.native="onClick" :is-loading="!money" :value="money"></cell>
      <cell :title="('Withdraw')" disabled is-link></cell>
    </group>



    <group label-width="5em" title="Align-items">
      <cell primary="content" title="default" value="long long long longlong longlong longlong longlong longlong longlong longlong longlong long"></cell>
      <cell title="flex-start" align-items="flex-start" value="long long long longlong longlong longlong longlong longlong longlong longlong longlong long"></cell>
    </group>

  </div>
</template>


<script>
  import { Cell, CellBox, CellFormPreview, Group, Badge } from 'vux'

  export default {
    mounted () {
      setTimeout(() => {
        this.money = -1024
      }, 2000)
    },
    components: {
      Group,
      Cell,
      CellFormPreview,
      CellBox,
      Badge
    },
    methods: {
      onClick () {
        console.log('on click')
      }
    },
    data () {
      return {
        list: [{
          label: 'Apple',
          value: '3.29'
        }, {
          label: 'Banana',
          value: '1.04'
        }, {
          label: 'Fish',
          value: '8.00'
        }],
        money: null,
        showContent001: false,
        showContent002: false,
        showContent003: false,
        showContent004: false
      }
    }
  }
</script>

<style scoped>
  .sub-item {
    color: #888;
  }
  .slide {
    padding: 0 20px;
    overflow: hidden;
    max-height: 0;
    transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;
  }
  .animate {
    max-height: 9999px;
    transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
    transition-delay: 0s;
  }
</style>
