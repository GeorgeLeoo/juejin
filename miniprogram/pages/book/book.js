// miniprogram/pages/book/book.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookList: [],
    pageNum: 1
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
    this.loadData(1);
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
    this.setData({
      pageNum: 1
    });
    var that = this;
    wx.startPullDownRefresh({
      success: function() {
        that.loadData(1);
      },
      complete:function(){
        wx.stopPullDownRefresh();
      }
    });
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    var pageNum = this.data.pageNum+1;
    console.log(pageNum);
    this.setData({
      pageNum: pageNum
    });
    this.loadData(2);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  loadData: function(tag) {
    var that = this;
    var url = 'https://xiaoce-timeline-api-ms.juejin.im/v1/getListByLastTime?uid=&client_id=&token=&src=web&alias=';
    wx.request({
      url: url,
      data: {
        pageNum: that.data.pageNum
      },
      success(res) {
        // console.log(res)
        if (tag == 1) {
          that.setData({
            bookList: res.data.d
          });
        }
        if (tag == 2) {
          that.setData({
            bookList: that.data.bookList.concat(res.data.d)
          });
          console.log(that.data.bookList);
        }
      }
    });
  }
})