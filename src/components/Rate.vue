<template>
  <div class='rate'>
    <span>☆☆☆☆☆</span>
    <div class="hollow" :style='style'>
      ★★★★★
    </div>
    
  </div>
</template>
<script>
 
export default {
    props: {
    value: {type: [Number, String], default: '0'}
   },
  computed: {
    style () {
      console.log(this.value/2)
      return `width:${this.value *10}%`
    }
  }
}
</script>
<style lang='scss'>
.rate{
  position: relative;
  display: inline-block;
  font-size: 14px;
  font-family: "微软雅黑";
  letter-spacing: 0;
  .hollow{
    position: absolute;
    display: inline-block;
    letter-spacing: 0;
    top:0;
    left:0;
    width:3em;
    overflow:hidden;
  }
}
</style>


