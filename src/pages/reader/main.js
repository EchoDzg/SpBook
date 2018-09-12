import Vue from 'vue'
import Reader from './Reader'


const app = new Vue(Reader)
app.$mount()

export default{
  config: {
    enablePullDownRefresh: true
  }
}