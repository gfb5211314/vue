<template>
  <div class="hello">
    <mt-header fixed title="想想"></mt-header>
    <div class="hzspw">
      <mt-swipe :auto="2000">
      <mt-swipe-item> <img  src="\static\img\index\1.jpg"  height="200" width="400">1</mt-swipe-item>
      <mt-swipe-item> <img src="\static\img\index\2.jpg" height="200" width="400">2</mt-swipe-item>
       <mt-swipe-item ><img src="\static\img\index\3.jpg" height="200" width="400">3</mt-swipe-item>
     <mt-swipe-item ><img src="\static\img\index\4.jpg" height="200" width="400">3</mt-swipe-item>
    </mt-swipe> 
    </div>
  <div>
    <div style="color: red ;float:left; text-align: left">在线人数:{{zxpeople}}</div>
    <div style="color: green ; float:right;text-align: right">总访问量:{{zfwl}}</div>
</div>
  <mt-cell> </mt-cell>
 <mt-tabbar v-model="selected">
  <mt-tab-item id="点我赚钱">
    <img slot="icon" src="\static\img\index\shop.png">
    点我赚钱
  </mt-tab-item>
  <mt-tab-item id="相亲">
    <img slot="icon" src="\static\img\index\xq.png">
    订相亲单
  </mt-tab-item>
  <mt-tab-item id="叫车">
    <img slot="icon" src="\static\img\index\car.png">
    叫车
  </mt-tab-item>
   <mt-tab-item id="城友圈">
    <img slot="icon" src="\static\img\index\friend.png">
    城友圈
  </mt-tab-item>
  <mt-tab-item id="我的">
    <img slot="icon" src="\static\img\index\people.png">
    我的
  </mt-tab-item>
</mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'huazhou' ,
      zxpeople:'100万',
      zfwl:'1500万'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.mint-swipe {
        height: 200px;
        color:#fff;
        font-size: 30px;
        text-align: center;
        margin-bottom: 20px;
        margin-top: 1px;
      }    
.mint-swipe-item {
        line-height: 200px;
      }  
.hzspw{
 margin-top: 50px;
}
</style>
