<template>
<div class="search">
									<div class="top">
										<a href="javascript:history.back()" class="top__back"></a>
										<div id="search-input" class="search-input"> <b class="search-input__mi"></b>
											<input value="" id="search_box"  placeholder="输入书名/作者/关键字" v-model="inputVal" :focus="inputShowed" @input="inputTyping" type="text">
                      
											<div class="search-input__btn" @click="search">搜索</div>
										</div>
									</div>
									<div class="top__bd" :class="{Wordshide}">
										<div>
											<ul class="m-tag -color search-tag">

										    <li @click="Wordsearch(item.name)" class="u-tag" :id="'Tag__'+i" :key='i' v-for='(item,i) in getWords' >{{item.name}}</li>
                     
											</ul>
										</div>
									</div>
									<div class="top__bd" >
											<ul class="book-list" :class="{top__bdhide}">
												<li :key='i' v-for='(item,i) in bookData' >
												    <a :href="'/pages/ibookdetail/main?id='+ item.id +''">
													<div class="u-book">
														<div class="cnt">
															<div class="book-cover">
																<img :alt="item.name" :src="item.cover">
																<div class="u-tagRT"></div>
															</div>
															<div class="info">
																<h3 class="title single-line">{{item.name}}</h3>
																<p class="summary">{{item.introduction}}</p>
																<div class="wrap">
																	<p class="author single-line">
																		<span>{{item.author}}</span>
																	</p>
																</div>
															</div>
														</div>
													</div>
													</a>
												</li>
											</ul>
											<div class="ListView_complete" :class="{ishideListView}">
												<div class="ListView__empty">
													<p class="u-tip">没有相应的搜索结果</p>
												</div>
												<div class="ListView__complete"></div>
											</div>
										</div>
 </div>
</template>
<script>
import {get} from '@/utils'

export default {
    data () {
      return {
        top__bdhide : true,
		ishideListView : true,
		Wordshide : false,
        inputShowed: false,
        inputVal:"",
        getWords : {},
        bookData : {}
      }
    },
    methods: {
        async getList() {
          const res = await get('/weapp/hotwords')
          this.getWords = res.data      
       },
        async search(){
           this.inputShowed = true;
           const res = await get('/weapp/searchbook',{
             bookname : this.inputVal
		   })
			if(res.data.code===4000){
				this.Wordshide =true
				this.ishideListView = false
			}else{
				this.ishideListView = true
				this.Wordshide =true
				this.top__bdhide = false
				this.bookData = res.data.data
			}
        },
        async Wordsearch(name) {
			this.inputVal = name
			this.search()
		},
        inputTyping(e) {
          this.inputVal = e.mp.detail.value
        }

    },
    mounted () {
       this.getList()
    }
   
}
</script>

<style lang="scss"> 
		.ishideListView{
		display: none;
		}
		.u-tip{
			font-size: 14px;
		}
		.Wordshide{
			display: none;
		}
		.Swipe_full > div, .Swipe_full > div > div {
			height: 100%;
		}
		.search {
			position: relative;
			height: 100%;
		}
		#root .top {
			height: 44px;
			background: #efeff0;
			border-bottom: 1px solid #ddd;
		}
		.search .top {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
		}
		.top__back {
			float: left;
			width: 42px;
			height: 44px;
		}
		.search-input {
			position: relative;
			margin: 5px 0px 5px 0px;
			height: 35px;
			box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.08);
		}
		.search-input .search-input__mi {
			background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAvCAMAAABE+WOeAAAAaVBMVEUAAACZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlWst2SAAAAInRSTlMA5OwyCwb4I5nYdxM4kRfwuLJxvqJaJc7ErD3dgB2JhU5A5sWwEQAAAVdJREFUSMelVdeSgzAMFGADsekdAkmO///Im0HU2LqLJvtmaRfULMMVkerb1PfdtlcR/Ifp4cwn3J/JX2wd+vMb/FiT9DqdLXBrO1uGM4FYggmRzSR6UyAPeqmiREISFeVuyg3BHkwYHMZgzz9+T3W137yr3butjte1kGtlMmGkla9V0pZoMmkpW25GNPkYjAALBIbknzr9wE8Q4+KhdzwsODMVEMBo7/t5wA80FD9A/146tRw7IIGNK7YjVkDR/OIaLxZgoPnRQmi3IzYrofl6ITjbEdORNB8ZKZfPjYeZb8etJ7df3Hlgzht3npn3RZv3sfzwPoJ2yfueoccRvH1SUPuqas776ti6niVMRKd+GiGaQWGbCAG1b+k/hEwB1K6V5pACHdveo4YWQPK8vndjAgABITjeU3d5Twv0mgIa3wscwRTUwBOMwBO8gCXoJHyKqXKdWMAv4gReb676UeIAAAAASUVORK5CYII=) no-repeat 8px center;
		    background-size: auto auto;
			background-size: 16px 16px;
		}
		.search-input b {
			position: absolute;
			left: 0;
			top: 0;
			width:80rpx;
			height: 33px;
			border: 1px solid #ccc;
		}
		.search-input input {
			border-top: 1px solid #ccc;
			border-bottom: 1px solid #ccc;
			box-sizing: border-box;
			display: block;
	 		padding-left: 10px;
			height: 100%;
			font-size: 16px;
			color: rgba(0, 0, 0, 0.8);
			background: #fff;
		}
		.search-input__btn {
			display: block;
			line-height: 33px;
			position: absolute;
			right: 0;
			top: 0;
			border-left: 1px solid #ccc;
			border-right: 1px solid #ccc;
			padding: 0 8px;
			font-size: 16px;
			z-index: 999;
			color: #666;
		}
    .top__bdhide{
      display: none;
    }
		.top__bd {
			position: absolute;
			top: 45px;
			bottom: 0;
			left: 0;
			right: 0;
		}
		.search-tag {
			padding: 17px;
		}
		.m-tag {
			line-height: 1;
			overflow: hidden;
		}
		.m-tag.-color .u-tag:nth-child(3n+1) {
			background-color: #fbebe8;
		}
		.m-tag.-color .u-tag:nth-child(3n+2) {
			background-color: #fcedda;
		}
		.m-tag.-color .u-tag:nth-child(3n+3) {
			background-color: #e8f9db;
		}
		.search-tag .u-tag {
			background: #fff;
				background-color: rgb(255, 255, 255);
			margin-bottom: 10px;
		}
		.m-tag .u-tag {
			display: inline-block;
			width: auto;
			line-height: 1.8em;
			padding: 0 20px;
			color: #766d5d;
			border-radius: 4px;
			background: #909da8;
			font-size: 14px;
			text-align: center;
			border: 1px solid #d3d3d3;
		}
		.m-tag .u-tag {
			margin: 0 10px 5px 0;
				margin-bottom: 10px;
		}
		.book-list li {
			border-bottom: 1px solid #f0f0f0;
		}
		.book-list li > .u-book {
			padding: 13px 14px;
		}
		.u-book {
			position: relative;

			margin: 15px;
		}
		.u-book .book-cover {
			float: left;
			margin-right: 10px;
		}
		.book-cover img {
			width: 100%;
			height: 100%;
		}
		
		.u-book .info {
			padding-top: 12px;
		}
		.u-book .title {
			margin-bottom: 4px;
			font-size: 16px;
			font-weight: 400;
			color: #333;
		}
		.u-book .summary {
			margin: 12px 0 4px;
			font-size: 13px;
			line-height: 1.6em;
			color: #888;
			overflow: hidden;
			text-overflow: ellipsis;
			height: 3.2em;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
		}
		.book-cover {
			position: relative;
			width: 85px;
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
		.ListView__empty{
			text-align: center;
			margin-top: 10%;
		}
</style>
