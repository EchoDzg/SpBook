import Vue from 'vue'
import Bookshelf from './Bookshelf'


const app = new Vue(Bookshelf)
app.$mount()

export default{
    config: {
      enablePullDownRefresh: true
    }
  }