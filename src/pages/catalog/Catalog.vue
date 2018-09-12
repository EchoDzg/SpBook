<template>
 <div class="page">
     <div class="top__bd" data-dom-uid="12" style="">
            <ul class="fiction-toc">

                <li :key='k' v-for='(item,k) in Catalog' class="fiction-toc__item fiction-toc__item_free ">
                    <a :href="'/pages/reader/main?action=catalog&id='+bookid+'&catalogid='+ item.id +''">
                    <p>{{item.name}}</p>
                    </a>
                </li>

             </ul>
        </div>
  </div>
</template>
 
<script>

import {get} from '@/utils'

export default {
    data () {
      return {
        Catalog: [],
        bookid : ''
      }
    },
    methods: {
        async getCatalog(bookid){
 
            const res = await get('/weapp/catalog',{
                bookid : bookid
            })
      
            this.Catalog = res.data

       },
    },
    onLoad (options) {
		    this.bookid = options.bookid
	},
    mounted () {
         this.getCatalog(this.bookid)
    }
}
</script>
<style lang='scss'>
        .fiction-toc li {
            font-size: 14px;
        }
    
        .top__bd {
            position: absolute;
            top: 2px;
            bottom: 0;
            left: 0;
            right: 0;
            overflow: auto;
        }
        .fiction-toc__item {
            line-height: 2.8em;
            padding: 0 14px;
            font-size: 14px;
            border-bottom: 1px solid #EEE;
        }
        .fiction-toc__item {
            line-height: 2.8em;
        }
        .fiction-toc__item_cur {
            color: #f270a7;
        }
        .fiction-toc__item_free::before {
            content: '\514d\8d39';
            float: right;
        }   
</style>
