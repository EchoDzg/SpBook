// 工具函数库
import config from './config'

// http get工具函数 获取数据
export function get (url, data={}) {
  return request(url, 'GET', data)
}
export function post (url, data={}) {
  return request(url, 'POST', data)
}


function request (url, method, data, header = {}) {
   
  return new Promise((resolve, reject) => {
      wx.showLoading({
        title: '加载中',
        mask:true
      })
     //获取token
      var timestamp = Date.parse(new Date())
      var expiration = timestamp + 500000//毫秒
      var sp_token = wx.getStorageSync('sp_token')
      var sp_tokentime = wx.getStorageSync('sp_tokentime')
      var token;
      if(!sp_token || sp_tokentime<timestamp){
        wx.request({
          data,
          method,
          header,
          url: config.host + '/weapp/token',
          success: function (res) {
            token = res.data.data.data
            wx.setStorageSync('sp_token', token)
            wx.setStorageSync('sp_tokentime', expiration)
            //数据请求
            data.authtoken = token
            wx.request({
              data,
              method,
              header,
              url: config.host + url,
              success: function (res) {
                
                if (res.data.code === 0) {
                  resolve(res.data.data)
                } else {
                  showModal('失败', res.data.data.msg)
                  reject(res.data)
                }
                wx.hideLoading()
              }
            })
          }
        })
      }else{
          data.authtoken = sp_token
            //数据请求
            wx.request({
              data,
              method,
              header,
              url: config.host + url,
              success: function (res) {
                
                if (res.data.code === 0) {
                  resolve(res.data.data)
                } else {
                  showModal('失败', res.data.data.msg)
                  reject(res.data)
                }
                wx.hideLoading()
              }
            })
      }
  })
}

export function showModal (title, content) {
  wx.showModal({
    title,
    content,
    showCancel: false
  })
}
export function showSuccess (text) {
  wx.showToast({
    title: text,
    icon: 'success'
  })
}

 