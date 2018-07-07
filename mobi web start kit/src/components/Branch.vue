<template>

  <mt-index-list>
    <mt-index-section index="A">
      <mt-cell title="Aaron"></mt-cell>
      <mt-cell title="Alden"></mt-cell>
      <mt-cell title="Austin"></mt-cell>
    </mt-index-section>
    <mt-index-section index="B">
      <mt-cell title="Baldwin"></mt-cell>
      <mt-cell title="Braden"></mt-cell>
    </mt-index-section>

    <mt-index-section index="Z">
      <mt-cell title="Zack"></mt-cell>
      <mt-cell title="Zane"></mt-cell>
    </mt-index-section>
  </mt-index-list>


</template>

<script type="text/ecmascript-6">
  import {Panel, Group, Radio} from 'vux'


  export default {
    name:'Branch',
    components: {
      Panel,
      Group,
      Radio
    },
    methods: {
      onTabClick(index){
        console.log(index);
      },
      onImgError(item, $event) {
        console.log(item, $event)
      }
    },
    data() {
      return {

      }
    }
  }
</script>

<style>

</style>
