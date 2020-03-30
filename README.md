<h1>基于mpvue打造的在线小程序阅读器</h1>

------

个人项目----在线 小程序 书城

手机端访问地址：http://119.23.172.58:3002/(个人低配置服务器演示域名，部分地区可能会加载延迟)

> * 支持加入书架，移除书架
> * 在线阅读，小说详情
> * 章节跳转，阅读记录
> * 数据交互，筛选

------

<h3>效果演示</h3>

------

![cmd-markdown-logo](http://qn.hzen.com/GIF6.gif)
![cmd-markdown-logo](http://qn.hzen.com/GIF.gif)
![cmd-markdown-logo](http://qn.hzen.com/GIF2.gif)
![cmd-markdown-logo](http://qn.hzen.com/GIF3.gif)
![cmd-markdown-logo](http://qn.hzen.com/GIF4.gif)
![cmd-markdown-logo](http://qn.hzen.com/GIF5.gif)

------

<h4>安装方式</h4>

现代前端开发框架和环境都是需要 Node.js 的，如果没有的话，请先下载 nodejs 并安装。
具备 一定小程序性开发了解。
然后打开命令行工具：

```
# 1. 先检查下 Node.js 是否安装成功
$ node -v
v8.9.0

$ npm -v
5.6.0

# 2. 由于众所周知的原因，可以考虑切换源为 taobao 源
$ npm set registry https://registry.npm.taobao.org/

# 3. 全局安装 vue-cli
# 一般是要 sudo 权限的
$ npm install --global vue-cli@2.9

# 4. 安装依赖，走你，SpBook 是你下载的项目目录
$ cd SpBook
$ npm install
$ npm run dev

```

注: 此项目数据演示数据为 个人 提供的临时http请求地址，打开小程序微信开发者工具后勾选
不校验合法域名、web-view（业务域名）、TLS 版本以及 HTTPS 证书


项目数据仅供学习，测试使用，不对外提供 配套后台和正式API。

技术群：499125737
