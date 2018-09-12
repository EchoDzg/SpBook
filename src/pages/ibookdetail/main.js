import Vue from 'vue'
import Ibookdetail from './Ibookdetail'

const app = new Vue(Ibookdetail)
app.$mount()

export default{
  config: {
    enablePullDownRefresh: true
  }
}