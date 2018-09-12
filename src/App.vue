<script>
 import {get} from '@/utils'

export default {
 
  async created () {
      /*
      var timestamp = Date.parse(new Date())
      var expiration = timestamp + 500000//毫秒
      var sp_token = wx.getStorageSync('sp_token')
      var sp_tokentime = wx.getStorageSync('sp_tokentime')

      if(!sp_token || sp_tokentime<timestamp){
        var token = await get('/weapp/token','GET')
        wx.setStorageSync('sp_token', token.data)
        wx.setStorageSync('sp_tokentime', expiration)
      }else{
        var token = sp_token
      }
      
      console.log(token)
      */
  }
}
</script>



<style>
.text-footer{
  text-align: center;
  font-size: 12px;
  margin-bottom:5px;
}
.text-primary{
  color:#f270a7;
}
.page-title{
  padding-left:20px;
  background:#eee;
  line-height: 40px;
  font-size: 14px;
}
.right{
  float: right;
}
.btn{
  color:white;
  background:#f270a7;
  margin-bottom: 10px;
  padding-left: 15px;
  padding-left: 15px;
  border-radius: 2px;
  font-size: 16px;
  line-height: 40px;
  height: 40px;
  width: 100%;
}
.btn:active{
  background: #f270a7;
}/** wxss **/

</style>
