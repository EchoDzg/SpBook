import Vue from 'vue'
import Index from './Index'


const app = new Vue(Index)
app.$mount()

export default{
    config: {
      enablePullDownRefresh: true
    }
  }