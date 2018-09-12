<template>
 <div class="page">
     <div class="container-scroll" style="width: 100%; display: block;">
				<div class="book-page">
					<section class="main-card" style="border-bottom:none">
						<div class="u-book -detail">
							<div class="book-cover">
								<img :alt="bookdetail.name" :src="bookdetail.cover">
							</div>
							<div class="info">
								<h3 class="title">{{ bookdetail.name }}</h3>
								<p class="author">
									<span class="author"></span>
								</p>
								 
								<p class="price">类别：{{ bookdetail.class_name }}</p>
								<p class="count">
									 {{ bookdetail.Catalog_number }}
								</p>
							</div>
						</div>
					</section>
					<section class="main-card">
						<div class="book-dash">
							<div class="wrap">
								<ul class="btn-group">
                                    <a :href="'/pages/reader/main?id='+ bookdetail.id +''">
										<li class="u-btn2">
											<span class="book-dash-text"></span>
										</li>
                                     </a>
									<li class="u-btn3" @click="addshelf">
										<a>加入书架</a>
									</li>
								</ul>
							</div>
						</div>
						<div class="u-folder">
							<div class="folder-cnt">
								{{ bookdetail.introduction }}
							</div>
							<div class="folder-tail">
								<div>最新：{{ bookdetail.latest_chapter }}</div>
							</div>
						</div>
					</section>

					<section class="main-card">
						<div class="u-title">
							<h1>喜欢本书的人也喜欢</h1>
						</div>
						<div class="cnt">
							<ul class="book-table">

								<li :key='k' v-for='(item,k) in youlike'>
								   <a :href="'/pages/ibookdetail/main?action=1&id='+ item.id +''" >
										<div class="u-book -vertical">
											<div class="book-cover">
												<img  :src="item.cover">	
											</div>
											<div class="info">
												<h3 class="title">{{item.name}}</h3>
											</div>
										</div>
									</a>
								</li> 

							</ul>
						</div>
					</section>
					<section class="main-card -folder">
						<div class="u-title">
							<h1>图书信息{{id}}</h1>
						</div>
						<div class="cnt">
							<ul class="text">
								<li>版权：作品版权归作者本人所有.</li>
							</ul>
						</div>
					</section>
				</div>
			</div>
  </div>
</template>
<script>
import {get,showSuccess} from '@/utils'
 
export default {
	data () {
		return {
			bookid: '',
			bookdetail: {},
			youlike : {},
			sfdata : [],
			action: '' 
		}
	},
 
	methods: {
       async getDetails(id) {
         const res = await get('/weapp/ibookdetail',{
			  bookid : id
		 })
		 this.bookdetail = res.data.details
		 this.youlike = res.data.thesamehabit
	   },
	   async addshelf(){
		    var data = wx.getStorageSync('sp_shelfdata')
			if(data){
					this.sfdata = data
			}else{
					this.sfdata = []
			}
			if (this.sfdata.indexOf(this.bookdetail) != -1) {
				showSuccess('加入成功')
				return null;
			} else {
			//否，把_val push到sfdata中 
			this.sfdata.unshift(this.bookdetail)
			};
			wx.setStorageSync('sp_shelfdata',this.sfdata)
			showSuccess('加入成功')
	   }
    },
	onLoad (options) {
		this.bookid = options.id
		if(options.action){
			this.action = options.action
		}
 
	},
	mounted () {
       this.getDetails(this.bookid)
	},
	onUnload(){
		wx.switchTab({    
			url:'/pages/index/main'
		})
	}
}
</script>
<style lang='scss'>
 		.main-card {
			border-bottom: 10px solid #f5f5f5;
		}
        .u-btn3 a{
            color: #000;
        }
        .title {
            font-size: 16px;
        }
        .info p{ 
            font-size: 14px;
        }
        .text li{
            font-size: 14px;
        }
		.main-card.-folder { padding-bottom: 1px;}
		.main-card.-folder .cnt {
			margin-bottom:12px; 
		}
		.main-card>.cnt,.main-card .list li {
			padding-left: 14px;
			padding-right: 14px;
		}
		.u-title {
			margin-bottom: 8px;
			padding-top: 15px;
			padding-left: 14px;
			padding-right: 14px;
			font-size: 15px;
			color:#8d8d8d;
		}
		.u-book {
			position: relative;
			overflow: hidden;
		}
		.u-book.-detail{
			padding: 40px;
			display: table;
			width: 100%;
			box-sizing:border-box;
		}
		.u-book.-detail .book-cover{width: 100px;height: 134px;}
		.u-book.-detail .author {color:#4b99a7;}
		.u-book.-detail .author>span {display: inline-block;margin-right:5px;}
		.u-book.-detail .title {margin-bottom: 13px;font-size: 16px;}
		.u-book.-detail .info {
			padding: 0 0 0 14px;
			display: table-cell;
			vertical-align: middle;
		}
		.u-book.-vertical {width: 86px}
		.u-book.-vertical .title {
		    font-size: 13px;
		    line-height: 1.4em;
		    max-height: 2.8em;
		    overflow: hidden;
		    color: #8d8d8d;
		    margin-bottom: 0px;
		    text-align: left;
		}

		.u-book.-vertical .book-cover{
			float: none;
			height: 113px;
			width: 86px;
		}
		.u-book.-vertical .info {
		    margin-left: 0;
		    padding-top: 8px;
		}

		.book-cover{
			position: relative;
			background:#eeece9;
			box-shadow: 0px 6px 5px -3px #aaa;
			border:  1px solid #f0f0f0;
			border-bottom: none;
			overflow: hidden;
		}
		.book-cover img {
			width: 100%;
			height: 100%;
		}
		.u-booktag{
			margin-left: 3px;
			border: 1px solid #00a0e9;
			border-radius: 4px;
			font-size: 12px;
			line-height: 16px;
			display: inline-block;
			padding: 0 2px;
		}
		.u-booktag.-serial{
			color:#63bd6e;
			border-color:#63bd6e;
		}

		.book-dash .wrap {
			height: 41px;
			padding: 0 14px;
			margin:0 0 27px;
		}
		.book-dash-text:after{
			content:'\5f00\59cb\9605\8bfb';
		}
		.btn-group {width: 100%;font-size: 0;white-space: nowrap;}
		.bth-group li {display: inline-block;width: 49%};
		.bth-group li:only-child{width: 100%}
		.bth-group li:first-child{margin-right: 2%}
		.u-btn2{
			display: block;
			height: 2.8em;
			line-height: 2.8em;
			width: 45%;
			float: left;
			text-align: center;
			border-radius: 4px;
			font-size: 14px;
			-webkit-box-sizing:border-box;
			background:#f270a7;
			border: 1px solid #f270a7;
			color:#fff;
			padding: 0 10px;
		}
		.u-folder>.folder-cnt{
			position: relative;
			line-height: 1.6;
			padding:0 14px;
			margin-bottom:10px;
			font-size: 14px;
			color:#585858; 
		}
		.u-folder>.folder-tail{
			text-align: center;
			font-size: 14px;
			border-top: 1px solid #f0f0f0;
			color:#8d8d8d;
		}
		.u-folder>.folder-top{
			font-size: 16px;
			font-weight: normal;
			color:#8d8d8d;
			padding: 14px 14px 8px;
		}
		.m-tag { line-height: 1;overflow: hidden;}
		.m-tag.-color .u-tag:nth-child(3n+1){
			background-color: #fbebe8;
		}
		.m-tag.-color .u-tag:nth-child(3n+2){
			background-color: #fbebe8;
		}
		.m-tag.-color .u-tag:nth-child(3n+3){
			background-color: #fbebe8;
		}
		.m-tag .u-tag {
			margin: 0 10px 5px 0;
			display: inline-block;
			width: auto;
			line-height: 1.8em;
			padding: 0 20px;
			color:#766d5d;
			border-radius: 4px;
			background:#909da8;
			font-size: 14px;
			text-align: center;
			border: 1px solid #d3d3d3;
		}
		.book-table { font-size: 0}
		.book-table li>*{
			display: inline-block;
		}
		.book-table li{ 
			width: 33.3%;
			display: inline-block;
			vertical-align: top;
			line-height: 1;
			margin-bottom: 8px;
		}
		.book-table li:nth-child(3n+1) {
			text-align: left;
		}
		.book-table li:nth-child(3n+2) {
			text-align: center;
		}
		.book-table li:nth-child(3n+3) {
			text-align: right;
		}
		.container-scroll,.loading{
			display: none;
		}
		.u-btn3{
			width: 48%;
			float: right;
			line-height: 2.8em;
			text-align: center;
			border-radius: 4px;
			font-size: 14px;
			-webkit-box-sizing: border-box;
			background: #ffffff;
			border: 1px solid #dadada;
			color: #fff;
			padding: 0 10px;
		}
</style>
