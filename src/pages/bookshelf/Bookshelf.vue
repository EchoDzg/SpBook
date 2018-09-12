<template>
<div class="shelf" style="display: block;">
	<div class="shelf__top">
		<div class="shelf__switch" @click="del"></div>
		 <a :href="'/pages/search/main'" hover-class="none" >
			<div class="shelf-search">输入书名/作者/关键字</div>
		</a>
	</div>
	<ul class="book-list">
 
		 
        <li class="del8" :key='i' v-for='(item,i) in BookShelf'>
                
                <div class="u-book">
                     <a :href="'/pages/ibookdetail/main?id='+ item.id +''" hover-class="none">
                        <div class="book-cover"> 
                            <img :alt="item.name" :src="item.cover">
                        </div>
                    
                        <div class="info">
                            <h3 class="title">{{item.name}}</h3>
                            <p class="author">
                            <span class="author">{{item.author}}</span>
                            </p> 
                        <div class="wrap"><p>共{{item.Catalog_number}}章</p></div>
                        </div>
                    </a>
                    <div class="del_bookshelf" sid="8" :class="{shelfdel}" @click="delbook(i)">
                        <a>删除</a> 
                    </div>
                </div>
        </li>


   </ul>
</div>
</template>
<script>
import {get,showSuccess} from '@/utils'
 
export default {
    data () {
      return {
        BookShelf : [],
        shelfdel : true
      }
    },
    methods: {

        async getShelf() {
           var data = wx.getStorageSync('sp_shelfdata')
          
           this.BookShelf = data
        },
        del(){
            if( this.shelfdel){
                this.shelfdel = false
            }else{
                this.shelfdel = true
            }
        },
        delbook(k){
            console.log(k)
            var data = wx.getStorageSync('sp_shelfdata')
            data.splice(k,1)
            this.BookShelf = data
            wx.setStorageSync('sp_shelfdata',data)
            showSuccess('删除成功')
        }

    },
    onShow() {
       this.getShelf()
       this.shelfdel = true
    }
  
}
</script>
<style lang='scss'>
.shelfdel{
    display: none;
}
 .shelf {
    position: absolute;
    top: 0px;
    bottom: 40;
    left: 0;
    right: 0;
    overflow-y: scroll;
}

 
.del_bookshelf a {
    font-size: 14px;
    display: block;
    border: 1px solid #f270a7;
    width: 30%;
    border-radius: 4px;
    color: #f270a7;
    border-radius: 12px;
    -webkit-box-sizing: border-box;
    background: -moz-linear-gradient(top,#efefef,#f6f6f8);
    background: -webkit-gradient(linear, 0% 0%, 0% 100%,from(#efefef), to(#f6f6f8));
    background: linear-gradient(top,#efefef,#f6f6f8);
    float: left;
    text-align: center;

}
.shelf__top {
    padding: 10px 20px 0;
}
.shelf__switch {
    width: 36px;
    height: 36px;
    float: right;
    border-radius: 4px;
    background: url(http://image.read.duokan.com/mfsv2/download/fdsc3/p01yLF3fEj8l/b7UfAdlfufQKML.png) no-repeat center;
        background-size: auto auto;
    background-size: 16px;
    border: 1px solid #eee;
}
.shelf__top .shelf-search {
    margin-right: 46px;
}
.shelf-search {
    font-size: 12px;
    color: #ccc;
    border: 1px solid #eee;
    border-radius: 4px;
    line-height: 36px;
    background: url(http://image.read.duokan.com/mfsv2/download/fdsc3/p01dSYLeWtSR/tY73MgTfVw7UAS.png) no-repeat 10px center;
        background-size: auto auto;
    background-size: 14px;
    padding-left: 32px;
}
.shelf .book-list .u-book {
    padding: 13px 20px;
    width: auto;
}
.u-book {
    width: 86px;
    position: relative;
    overflow: hidden;
}
.u-book .book-cover {
    float: left;
    margin-right: 10px;
}
.book-cover {
    position: relative;
    width: 86px;
    height: 113px;
    background-color: #eeece9;
    box-shadow: 0px 6px 5px -3px #aaa;
    border: 1px solid #f0f0f0;
        border-bottom-color: rgb(240, 240, 240);
        border-bottom-style: solid;
        border-bottom-width: 1px;
    border-bottom: none;
    overflow: hidden;
}
.book-cover img {
    width: 100%;
    height: 100%;
}
.u-book .info {
    padding-top: 1.2em;
}
.info {
    padding: 8px;
        padding-top: 8px;
}
.info p {
    font-size: 14px;
}
.title {
    font-size: 13px;
    line-height: 1.4em;
    max-height: 2.8em;
    overflow: hidden;
    color: #8d8d8d;
    margin-bottom: 0px;
    font-weight: 400;
}
</style>
