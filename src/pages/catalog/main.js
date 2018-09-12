import Vue from 'vue'
import Catalog from './Catalog'


const app = new Vue(Catalog)
app.$mount()

export default{
  config: {
    enablePullDownRefresh: true
  }
}