// pages/face/index.js
Page ({
  data: {
    src:"",
    face: null
  },
  upPhoto () {
    // 选择图片或拍照
    var that = this
    wx.chooseImage({
      count: 1,
      success(res) {
        wx.showLoading({
          title: '正在分析～～'
        })
        // 上传
        wx.uploadFile({
          url: 'https://ai.qq.com/cgi-bin/appdemo_detectface?g_tk=5381',
          filePath: res.tempFiles[0].path,
          name: 'image_file',
          success (info) {
            var data = JSON.parse(info.data)
            console.log(data);
            that.setData({
              // 展示照片
              src: res.tempFiles[0].path,
              face: data.data.face[0]
            })
            wx.hideLoading();
          }
        })
      }
    })
  }
})