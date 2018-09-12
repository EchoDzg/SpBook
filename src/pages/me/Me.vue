<template>
  <div class="container">
      <div class="userinfo">
        <img v-show="userinfo" :src="userinfo.avatarUrl" alt="logo">
        <p>{{userinfo.nickName}}</p>
      </div>
      <YearProgress></YearProgress>
      <button v-if="userinfo.openId" @click="scanBook" class="btn">添加图书</button>
      <button class="btn" v-else open-type="getUserInfo" lang="zh-CN" @getuserinfo="doLogin">点击登录</button>
     
  </div>
</template>
<script>
import qcloud from 'wafer2-client-sdk/index.js'
import YearProgress from '@/components/YearProgress'
import {showSuccess, post, showModal} from '@/utils'
import config from '@/config'

export default {
  components: {
    YearProgress
  },
  data () {
    return {
      userinfo: {
        avatarUrl: '../../../static/img/unlogin.png',
        nickName: '点击登录'
      }
    }
  },
  methods: {
    async addBook (isbn) {
      console.log(isbn)
      const res = await post('/weapp/addbook', {
        isbn,
        openid: this.userinfo.openId
      })
      showModal('添加成功', `${res.title}添加成功`)
    },
    scanBook () {
        
      wx.scanCode({
        success: (res) => {
          if (res.result) {
            console.log(res)
            this.addBook(res.result)
          }
        }
      })
    },
    doLogin () {
      let user = wx.getStorageSync('userinfo')
      const self = this
      if (!user) {
        qcloud.setLoginUrl(config.loginUrl)
        qcloud.login({
          success: function (userinfo) {
            qcloud.request({
              url: config.userUrl,
              login: true,
              success (userRes) {
                showSuccess('登录成功')
                wx.setStorageSync('userinfo', userRes.data.data)
                self.userinfo = userRes.data.data
              }
            })
          },
          fail: function (err) {
            console.log('登录失败', err)
          }
        })
      }
    }
  },
  onShow () {
    let userinfo = wx.getStorageSync('userinfo')
    if (userinfo) {
      this.userinfo = userinfo
    }
  }
}
</script>

<style lang="scss"> 
.container{
  padding:0 30rpx;
}  
.userinfo{
  margin-top:100rpx;
  text-align:center;
  img{
      width: 150rpx;
      height:150rpx;
      margin: 20rpx;
      border-radius: 50%;
    }
}
 
</style>
