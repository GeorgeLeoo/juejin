// miniprogram/pages/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.getRecommend();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  getRecommend: function() {
    wx.request({
      url: 'https://web-api.juejin.im/query',
      method: 'post',
      header: {
        'X-Agent': 'Juejin/Web'
      },
      data: {
        "operationName": "",
        "query": "",
        "variables": {
          "first": 20,
          "after": "",
          "order": "POPULAR"
        },
        "extensions": {
          "query": {
            "id": "21207e9ddb1de777adeaca7a2fb38030"
          }
        }
      },
      success: function(res) {
        console.log(res);
      }
    });
  }
})