<template xmlns:panel="http://www.w3.org/1999/html">
  <div class="warp">


    <div class="head">
      <h3>迈峰网络移动端初始模板套件</h3>
      <divider class="divider">Minephone Mobi Web Start Kit</divider>
      <div>Version 0.2 Build180706</div>
      <div style="margin-top: 10px">Based on</div>
      <!--<card :header="{title: ('架构详情') }" >-->
      <!--<div slot="content" class="card-demo-flex card-demo-content01">-->
      <!--<div class="vux-1px-r">-->
      <!--<span>Vue</span>-->
      <!--<br/>-->
      <!--2.5-->
      <!--</div>-->
      <!--<div class="vux-1px-r">-->
      <!--<span>Router</span>-->
      <!--<br/>-->
      <!--2.0-->
      <!--</div>-->
      <!--<div class="vux-1px-r">-->
      <!--<span>axios</span>-->
      <!--<br/>-->
      <!--0.18.0-->
      <!--</div>-->
      <!--<div class="vux-1px-r">-->
      <!--<span>vux</span>-->
      <!--<br/>-->
      <!--2.9.2-->
      <!--</div>-->
      <!--</div>-->
      <!--</card>-->
      <flexbox class="lib">
        <flexbox-item>
          <span>Vue</span>
          <br/>
          2.5.2
        </flexbox-item>
        <flexbox-item>
          <span>router</span>
          <br/>
          2.0
        </flexbox-item>
        <flexbox-item>
          <span>axios</span>
          <br/>
          0.18.0
        </flexbox-item>
        <flexbox-item>
          <span>vux</span>
          <br/>
          2.9.2
        </flexbox-item>

      </flexbox>

    </div>


    <tab :active-color="tab.color">
      <tab-item :selected="li.title == '列表'" @on-item-click="onTabClick" v-for="li in tab.items" :key="index">{{li.title}}</tab-item>
    </tab>
    <div>
      <v-chart :data="data">
        <v-scale x field="date" type="timeCat" mask="MM-DD"/>
        <v-scale y field="value" :tick-count="4" :max="300"/>
        <v-tooltip show-crosshairs show-value-in-legend/>

        <v-area series-field="city" shape="smooth" adjust="stack"/>
        <v-line series-field="city" shape="smooth" adjust="stack"/>
      </v-chart>
    </div>


    <div v-if="showlist">
      <panel :list="list" ></panel>
      <div class="vux-circle-demo">
        <div style='width:100px;height:100px;'>
          <x-circle
            :percent="percent"
            :stroke-width="6"
            :trail-width="6"
            :stroke-color="['#36D1DC', '#5B86E5']"
            trail-color="#ececec">
            <span style="color:#36D1DC">{{ percent }}%</span>
          </x-circle>
        </div>
      </div>
    </div>

    <div class="timeline-demo" v-if="showtimeline">
      <timeline>
        <timeline-item>
          <h4 class="recent">【广东】 广州市 已发出</h4>
          <p class="recent">2016-04-17 12:00:00</p>
        </timeline-item>
        <timeline-item>
          <h4> 申通快递员 广东广州 收件员 xxx 已揽件</h4>
          <p>2016-04-16 10:23:00</p>
        </timeline-item>
        <timeline-item>
          <h4> 商家正在通知快递公司揽件</h4>
          <p>2016-04-15 9:00:00</p>
        </timeline-item>
      </timeline>
      <step v-model="step1" background-color='#fbf9fe' style="margin: 0 20px">
        <step-item :title="下一步" description="下一步"></step-item>
        <step-item :title="已完成" description="已完成"></step-item>
        <step-item :title="结束" description="结束"></step-item>
      </step>
    </div>
    <div v-if="showswiper">
      <swiper :list="demo01_list" v-model="demo01_index" @on-index-change="demo01_onIndexChange"></swiper>
    </div>

    <div v-if="showgrid">
      <group-title>2 columns</group-title>
      <grid>
        <grid-item :label="('Grid')" v-for="i in 2" :key="i">
          <img slot="icon" src="../assets/grid_icon.png">
        </grid-item>
      </grid>
      <group-title>3 columns</group-title>
      <grid :show-lr-borders="false" :show-vertical-dividers="false">
        <grid-item link="/component/cell" :label="('Go to Cell')">
          <img slot="icon" src="../assets/grid_icon.png">
        </grid-item>
        <grid-item :link="{ path: '/component/cell'}" :label="('Go to Cell')">
          <img slot="icon" src="../assets/grid_icon.png">
        </grid-item>
        <grid-item link="/component/cell" @on-item-click="onItemClick">
          <img slot="icon" src="../assets/grid_icon.png">
          <span slot="label">{{ ('Go to Cell') }}</span>
        </grid-item>
      </grid>
      <group-title>4 columns</group-title>
      <grid :show-lr-borders="false">
        <grid-item :label="('Grid')" v-for="i in 4" :key="i">
          <img slot="icon" src="../assets/grid_icon.png">
        </grid-item>
      </grid>
      <group-title> {{ ('Custom content') }} </group-title>
      <grid :show-vertical-dividers="false">
        <grid-item v-for="i in 5" :key="i">
          <span class="grid-center">{{i}}</span>
        </grid-item>
      </grid>
      <group-title> {{ ('Custom col') }} </group-title>
      <grid :cols="3" :show-lr-borders="false">
        <grid-item v-for="i in 6" :key="i">
          <span class="grid-center">{{i}}</span>
        </grid-item>
      </grid>
    </div>
    <div v-if="showtable">
      <group>
        <cell :title="('Total')" :value="('$1024')"></cell>
        <cell-form-preview :list="cells"></cell-form-preview>
      </group>
      <load-more tip="default" :show-loading="false" background-color="#fbf9fe"></load-more>
      <div style="padding:0 15px;">
        <x-table>
          <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Apple</td>
            <td>$1.25</td>
          </tr>
          <tr>
            <td>Banana</td>
            <td>$1.20</td>
          </tr>
          </tbody>
        </x-table>
      </div>
      <div>
        <load-more tip="cell-bordered=false" :show-loading="false" background-color="#fbf9fe"></load-more>
        <x-table :cell-bordered="false" style="background-color:#fff;">
          <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Apple</td>
            <td>$1.25</td>
            <td> x 1</td>
          </tr>
          <tr>
            <td>Banana</td>
            <td>$1.20</td>
            <td> x 2</td>
          </tr>
          </tbody>
        </x-table>

        <load-more tip="content-bordered=false" :show-loading="false" background-color="#fbf9fe"></load-more>

        <x-table :cell-bordered="false" :content-bordered="false" style="background-color:#fff;">
          <thead>
          <tr style="background-color: #F7F7F7">
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Apple</td>
            <td>$1.25</td>
            <td> x 1</td>
          </tr>
          <tr>
            <td>Banana</td>
            <td>$1.20</td>
            <td> x 2</td>
          </tr>
          </tbody>
        </x-table>
      </div>
      <div style="padding:15px;">
        <load-more tip="full-bordered" :show-loading="false" background-color="#fbf9fe"></load-more>
        <x-table full-bordered style="background-color:#fff;">
          <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Apple</td>
            <td colspan="2">$1.25 x 10</td>
          </tr>
          <tr>
            <td>Banana</td>
            <td>$1.20</td>
            <td>x 08</td>
          </tr>
          </tbody>
        </x-table>
      </div>
    </div>


  </div>


</template>

<script>
  import {
    Panel,
    Group,
    Radio,
    Divider,
    Card,
    Flexbox,
    FlexboxItem,
    Timeline,
    TimelineItem,
    Step,
    StepItem,
    XButton,
    XHr,
    Swiper,
    SwiperItem,
    Grid, GridItem,  CellFormPreview, Cell,XTable, LoadMore,XCircle

  } from 'vux'

  const baseList = [{
    url: 'javascript:',
    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
    title: '送你一朵fua'
  }, {
    url: 'javascript:',
    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
    title: '送你一辆车'
  }, {
    url: 'javascript:',
    img: 'https://static.vux.li/demo/5.jpg', // 404
    title: '送你一次旅行',
    fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
  }]

  const imgList = [
    'http://placeholder.qiniudn.com/800x300/FF3B3B/ffffff',
    'http://placeholder.qiniudn.com/800x300/FFEF7D/ffffff',
    'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff'
  ]

  const urlList = baseList.map((item, index) => ({
    url: 'http://m.baidu.com',
    img: item.img,
    fallbackImg: item.fallbackImg,
    title: `(可点击)${item.title}`
  }))

  const demoList = imgList.map((one, index) => ({
    url: 'javascript:',
    img: one
  }))

  const only2ClickList = baseList.slice(0, 2).map(item => {
    item.url = 'http://m.baidu.com'
    return item
  })

  export default {
    name: 'Home',
    components: {
      Panel,
      Group,
      Radio,
      Card,
      Divider,
      Flexbox,
      FlexboxItem,
      Timeline,
      TimelineItem,
      Step,
      StepItem,
      XButton,
      XHr,
      Swiper,
      SwiperItem,
      Grid,
      GridItem,

      CellFormPreview,
      XTable,
      LoadMore,XCircle

    },
    methods: {
      onTabClick(index) {
        console.log(index);
        if (index == 0) {
          this.showlist = true;
          this.showtimeline = false;
          this.showswiper = false;
          this.showgrid = false;
          this.showtable = false;
        }else if(index==1){
          this.showlist = false;
          this.showtimeline =true;
          this.showswiper = false;
          this.showgrid = false;
          this.showtable = false;
        }else if(index==2){
          this.showlist = false;
          this.showtimeline = false;
          this.showswiper = true;
          this.showgrid = false;
          this.showtable = false;
        }else if (index==3){
          this.showlist = false;
          this.showtimeline = false;
          this.showswiper = false;
          this.showgrid = true;
          this.showtable = false;
        }else if (index==4){
          this.showlist = false;
          this.showtimeline = false;
          this.showswiper = false;
          this.showgrid = false;
          this.showtable = true;
        }
      },
      onImgError(item, $event) {
        console.log(item, $event)
      },
      onSwiperItemIndexChange(index) {
        console.log('demo item change', index)
      },
      demo01_onIndexChange(index) {
        this.demo01_index = index
      },
      demo05_onIndexChange(index) {
        this.demo05_index = index
      },
      demo05_onLoad(id) {
        this.demo05_list = id === 1 ? baseList : demoList
      },
      demo06_onIndexChange(index) {
        this.demo06_index = index
      },
      demo07_onIndexChange(index) {
        this.demo07_index = index
      },
      onItemClick() {
        console.log('on item click')
      }
    },
    data() {
      return {
        percent: 80,
        demo01_list: baseList,
        demo02_list: demoList,
        demo03_list: demoList,
        demo04_list: imgList,
        demo05_list: [],
        demo06_list: urlList,
        demo07_list: only2ClickList,
        demo01_index: 0,
        demo02_index: 1,
        demo05_index: 0,
        demo06_index: 0,
        demo07_index: 0,
        swiperItemIndex: 1,
        type: '1',
        showlist: true,
        showtimeline: false,
        showswiper: false,
        showgrid: false,
        showtable: false,
        count: 3,
        step1: 1,
        step2: 0,
        list: [{
          src: 'http://somedomain.somdomain/x.jpg',
          fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '标题一',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          url: '/component/cell'
        },
          {
            src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
            title: '标题二',
            desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
            url: {
              path: '/component/radio',
              replace: false
            },
            meta: {
              source: '来源信息',
              date: '时间',
              other: '其他信息'
            }
          }],
        cells: [{
          label: 'Apple',
          value: '3.29'
        }, {
          label: 'Banana',
          value: '1.04'
        }, {
          label: 'Fish',
          value: '8.00'
        }],
        tab: {
          items: [
            {title: "列表"},
            {title: "时间线"},
            {title: "轮播"},
            {title: "九宫格"},
            {title: '表格'}

          ],
          color: '#D95353'
        }
      }
    }
  }
</script>

<style lang="less">
  .scrollable .vux-tab-item {
    flex: auto !important;
    -webkit-flex: auto;
  }

  .head {
    height: 250px;
    background-image: url("../assets/images/banner.png");
    background-size: cover;
    text-align: center;
    background-repeat: no-repeat;
    position: relative;
  }

  .head h3 {
    color: #fff;
    padding-top: 40px;
    font-size: 26px;
  }

  .head .divider {
    color: #fff;
  }

  .head div {
    color: #fff;
    font-size: 12px;
  }

  .head .weui-panel__hd {
    color: #fff;
  }

  .head .vux-card-content {
    color: #fff;
  }

  .head .vux-card-content:after, .head .vux-card-content:before {
    display: none;
  }
  .vux-circle-demo {
    padding-top: 20px;
    text-align: center;
  }
  .vux-circle-demo > div {
    margin: 0 auto;
  }
  .head .lib {
    color: #fff;
    text-align: center;
    position: absolute;
    bottom: 10px;
  }

  .head .lib span {
    color: #f74c31;
    font-size: 18px;
  }

  .head .ico {
    display: inline-block;
    border-radius: 50%;
    height: 76px;
    width: 76px;
    /*border: solid 1px #fff;*/
    text-align: center;
    vertical-align: middle;
    margin-top: 26px;

  }

  .head .ico img {
    height: 70px;
    width: 70px;
    border: solid 3px rgba(255, 255, 255, 0.8);
    border-radius: 50%;
  }

  .timeline-demo {
    p {
      color: #888;
      font-size: 0.8rem;
    }
    h4 {
      color: #666;
      font-weight: normal;
    }
    .recent {
      color: rgb(4, 190, 2)
    }
  }

  @import '~vux/src/styles/1px.less';

  .card-demo-flex {
    display: flex;
  }

  .card-demo-content01 {
    padding: 10px 0;
  }

  .card-padding {
    padding: 15px;
  }

  .card-demo-flex > div {
    flex: 1;
    text-align: center;
    font-size: 12px;
  }

  .card-demo-flex span {
    color: #f74c31;
  }

  .weui-panel {
    background-color: transparent !important;
  }

  .head .weui-panel:before {
    border: none;
  }

  .person > div > span {
    color: #fff;
  }

  .person > div > p {
    color: rgba(222, 222, 222, 0.9);
  }

  .head .vux-1px-r span {
    font-size: 16px;
  }

  .menuname {
    font-size: 12px;
    color: #333;
    margin-top: 10px;
  }

  .menu .weui-grid {
    padding: 10px 5px;
  }

  .warp {
    height: 617px;
    overflow: scroll;
  }

</style>
