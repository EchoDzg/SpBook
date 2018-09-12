import Vue from 'vue'
import Classification from './Classification'


const app = new Vue(Classification)
app.$mount()

export default{
    config: {
      enablePullDownRefresh: true
    }
  }