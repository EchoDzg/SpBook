<template>
 
<div class="class_whole" style="">
				<div class="class_whole-l" >
					<ul>
						<li :class="{clickaction:i==current}" class="select_class" :key='i' v-for='(item,i) in calssData' v-on:click="addClass(i,item.classid)">
                            {{item.classname}}
                        </li>
					</ul>
				</div>
                
				<div class="class_whole-r container " id="container" >
					<scroll-view :style="{'height': '100%'}" :scroll-y="true" @scrolltolower="scrolltolower" @scroll="scroll">
				 
						<ul class="list-h5" :class="{ishide}">

							 <li :key='i' v-for='(item,i) in bookData'>
								 <a :href="'/pages/ibookdetail/main?id='+ item.id +''">
									<div class="book-h5">
										<div class="book-h5__cover">
											<img :alt="item.name" :src="item.cover">
											<div class="u-tagRT"></div>
											<p class="book-h5__finish">{{item.serializationstate}}</p>
										</div>
										<div class="book-h5__info">
											<p class="book-h5__title">{{item.name}}</p>
											<p class="book-h5__author">
												<span class="author">{{item.author}}</span>
											</p>
											<p class="book-h5__summary">{{item.introduction}}</p>
											<div class="book-h5__wrap">
												<div class="book-h5__tag">{{item.class_name}}</div>
											</div>
											
										</div>
									</div>
								</a>
							</li> 

						   </ul>    
					 </scroll-view>
				</div>
			
			</div>
     
 
</template>
<script>
import {get, showModal} from '@/utils'

export default {

     data () {
        return {
            current:0,
            calssData:{},
            bookData:{},
            ishide: false,
            classid:''
        }
     },
  
     methods: {
        
       async classList() {
          var classListres = await get('/weapp/classlist')
          this.calssData = classListres.data      
       },
       async bookList(classid) {
          var bookListres = await get('/weapp/screening',{
              classid : classid
          })
          this.bookData = bookListres.data.data      
       },
       async addClass(index,classid){
            this.current=index
            this.ishide = true
            this.classid = classid
            var bookListres = await get('/weapp/screening',{
              classid : classid
            })
            this.bookData = bookListres.data.data    
            this.ishide =  false
       },
       async scrolltolower(){
            var bid =  this.bookData.slice(-1)[0].id
            var bookListres = await get('/weapp/screening',{
              classid : this.classid,
              action : 'next',
              bookid : bid
            })
            if(bookListres.data.code===2000){
                 this.bookData = this.bookData.concat(bookListres.data.data)
            }else{
                 showModal('提示','数据加载完毕!')
            }
           
       }
     },
     onLoad (options) {
            this.classid = options.classid
            this.current=options.index;
     },
    
     
     mounted (){
        this.classList()
        this.bookList(this.classid)
     }
     
}


</script>
<style lang='scss'>
body{
    background: #eaeaea;
}
page{
height: 100%;
}
.ishide{
    display: none;
}
.clickaction{
    background: rgb(255, 255, 255) none repeat scroll 0% 0%; 
    border-bottom: 1px solid rgb(224, 224, 224);
}
/* 设置滚动条的样式 */::-webkit-scrollbar { width: 0px;}
.select_class{
    font-size: 14px;
}
 .class_whole {
    height: 100%;
    width: 100%;
    background: #eaeaea;
}
.class_whole-l {
    width: 25%;
    height: 100%;
    background: #eaeaea;
    float: left;
}
.class_whole-l ul li {
    width: 100%;
    text-align: center;
    height: 40px;
    line-height: 40px;
}
.class_whole-r {
    height: 100%;
    float: right;
    width: 75%;
    background: #fff;
}
.list-h5, .list-more__wrap {
    padding: 0 13px;
}
.list-h5 li, .list-more__wrap li {
    padding: 17px 0;
    border-bottom: 1px solid #f0f0f0;
}
.book-h5 {
    overflow: hidden;
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
.u-tagRT, .u-tagLT {
    position: absolute;
    top: 0;
    left: 0;
    line-height: 1.4;
    background-color: #ef6c2c;
    color: #fff;
    width: 100%;
    font-size: 1.4rem;
    text-align: center;
    -webkit-transform-origin: top center;
    -webkit-transform: translateX(50%) rotate(45deg) translateY(50%) scale(0.8);
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
    font: 16px/17px a;
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
    height: 2.8em;
    font: 12px/1.4em a;
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
.book-h5__tag:last-child {
    margin-right: 0;
}
.book-h5__tag {
    float: left;
    margin: 3px 7px 7px 0;
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
