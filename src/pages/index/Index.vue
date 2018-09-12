<template>
 <div class="page">
     
     <div class="page__hd">
       <a :href="'/pages/search/main'" hover-class="none">
            <div class="top-home__search">搜索 {{ token }} </div>
        </a>
     </div>
      <div class="page__bd">
          <div class="slider-banner">
              <div>
                <a :href="'/pages/ibookdetail/main?id='+ 240 +''" >
                  <img class="cover" src="/static/img/0.jpg" style="height:270rpx;width:100%;">
                </a>
              </div>
          </div>
      </div>
      <!-- 小说列表  start -->
      <div class="page__bd"  :key='i' v-for='(item,i) in books'>
          <div class="channel-h5__header">
              <p class="channel-h5__title channel-group__title_left">{{ item.classification.classname }}</p>
              <a :href="'/pages/classification/main?index='+i+'&classid='+ item.classification.classid +''"><p class="channel-h5__more" href="/female">更多&nbsp;&gt;&gt;</p></a>
          </div>
     <div class="Fade list-h5__wrap">
            <div style="visibility: visible;">
                <ul class="list-h5">
                      <li  :key='j' v-for='(voitem,j) in item.book' >
                        <a :href="'/pages/ibookdetail/main?id='+ voitem.id +''" hover-class="none">
                            <div class="book-h5" >
                                <div class="book-h5__cover">
                                    <img  :src="voitem.cover">
                                    <div class="u-tagRT"></div>
                                    <p class="book-h5__finish">{{ voitem.serializationstate }}</p>
                                </div>
                                <div class="book-h5__info">
                                    <p class="book-h5__title">{{ voitem.name }}</p>
                                    <p class="book-h5__author">
                                        <span class="author">{{ voitem.author }}</span>
                                    </p>
                                    <p class="book-h5__summary">{{ voitem.introduction }}</p>
                                    
                                    
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
      </div>
      <!-- 小说列表  and -->
</div>
</template>
<script>
import {get, token} from '@/utils'
var windowWidth =  wx.getSystemInfoSync().windowWidth;
 
export default {
    data () {
      return {
        screen_width:windowWidth,
        books: []
      }
    },
    
  
    methods: {
       async getList() {
          const res = await get('/weapp/bookindex')
          this.books = res.data.list      
       }
       
    },

    mounted () {
       this.getList()
    }
  
}
</script>
<style lang='scss'>
.top-home__search {
    margin: 10px 13px;
    padding: 8px 0 8px 30px;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.4);
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAvCAMAAABE+WOeAAAAaVBMVEUAAACZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlWst2SAAAAInRSTlMA5OwyCwb4I5nYdxM4kRfwuLJxvqJaJc7ErD3dgB2JhU5A5sWwEQAAAVdJREFUSMelVdeSgzAMFGADsekdAkmO///Im0HU2LqLJvtmaRfULMMVkerb1PfdtlcR/Ifp4cwn3J/JX2wd+vMb/FiT9DqdLXBrO1uGM4FYggmRzSR6UyAPeqmiREISFeVuyg3BHkwYHMZgzz9+T3W137yr3butjte1kGtlMmGkla9V0pZoMmkpW25GNPkYjAALBIbknzr9wE8Q4+KhdzwsODMVEMBo7/t5wA80FD9A/146tRw7IIGNK7YjVkDR/OIaLxZgoPnRQmi3IzYrofl6ITjbEdORNB8ZKZfPjYeZb8etJ7df3Hlgzht3npn3RZv3sfzwPoJ2yfueoccRvH1SUPuqas776ti6niVMRKd+GiGaQWGbCAG1b+k/hEwB1K6V5pACHdveo4YWQPK8vndjAgABITjeU3d5Twv0mgIa3wscwRTUwBOMwBO8gCXoJHyKqXKdWMAv4gReb676UeIAAAAASUVORK5CYII=) no-repeat 8px center;
    background-size: auto auto;
    background-size: 16px;
    border: 1px solid #eaeaea;
    border-radius: 2px;
}
.channel-h5__header {
    padding: 15px 13px 14px 13px;
    border-bottom: 1px solid #f0f0f0;
    height: 10px;
    position: relative;
    
    line-height: 10px;
}
.channel-h5__title {
    position: relative;
    color: rgba(0, 0, 0, 0.9);
    float: left;
    font-size: 16px;
}
.channel-h5__more {
    float: right;
     font-size: 16px;
}
.list-h5, .list-more__wrap {
    padding: 0 13px;
} 
.list-h5 li, .list-more__wrap li {
    padding: 17px 0;
    border-bottom: 1px solid #f0f0f0;
}
.book-h5__cover {
    float: left;
    position: relative;
    width: 85px;
    height: 113px;
    background-color: #eeece9;
    border: 1px solid #f0f0f0;
    border-radius: 1px;
    overflow: hidden;
}
.book-h5 img {
    width: 100%;
    height: 100%;
    border-radius: 1px;
}
.book-h5__finish {
    position: absolute;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
    font: 10px/10px a;
    padding: 25px 7px 6px;
    color: #fff;
    background: -webkit-linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.3));
}
.book-h5 .book-h5__info {
    margin-left: 100px;
    padding-top: 6px;
    background: #fff;
}
.book-h5__title {
    margin-bottom: 4px;
    font-size:16px;
    color: rgba(0, 0, 0, 0.9);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.book-h5__author {
    margin-top: 8px;
    font: 12px/12px a;
    color: rgba(0, 0, 0, 0.7);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.book-h5__author {
    font: 12px/12px a;
    color: rgba(0, 0, 0, 0.7);
    white-space: nowrap;
}
.book-h5__summary {
    display: -webkit-box;
    margin: 8px 0 0;
    height: 4em;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.6);
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.book-h5__wrap {
    margin-top: 10px;
    padding-top: 3px;
    overflow: hidden;
}
.book-h5__tag {
    float: left;
    margin: 0px 7px 7px 0;
    margin-right: 7px;
    padding: 3px 6px 2px;
    font-size: 14px;
    color: #f270a7;
    border-radius: 3px;
    border: 1px solid #f5a5c6;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
 
</style>
