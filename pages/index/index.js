//index.js

Page({
  onReady: function (res) {
    this.videoContext = wx.createVideoContext('myVideo')
  },
  inputValue: '',
  data: {
    src: '',
    danmuList:
      [{
        text: '我是弹幕君鸭鸭鸭',
        color: 'blue',
        time: 2
      },
      {
        text: '哈哈哈哈，我又来啦',
        color: 'yellow',
        time: 6
      },
      {
        text: '没错，你又看到我啦',
        color: 'red',
        time: 10
      }]
  },
  bindPlay: function () {
    this.videoContext.play()
  },
  bindPause: function () {
    this.videoContext.pause()
  },
  videoErrorCallback: function (e) {
    console.log('视频错误信息:')
    console.log(e.detail.errMsg)
  }
})