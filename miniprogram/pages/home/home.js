// miniprogram/pages/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    defaultMenuId: "653b587c5c7c8a00ddf67fc66f989d42",
    menuSelectedIndex: 0,
    menuList: [{
        title: "推荐",
        id: ""
      },
      {
        title: "后端",
        id: "5562b419e4b00c57d9b94ae2"
      },
      {
        title: "前端",
        id: "5562b415e4b00c57d9b94ac8"
      },
      {
        title: "Android",
        id: "5562b410e4b00c57d9b94a92"
      },
      {
        title: "iOS",
        id: "5562b405e4b00c57d9b94a41"
      },
      {
        title: "人工智能",
        id: "57be7c18128fe1005fa902de"
      },
      {
        title: "开发工具",
        id: "5562b422e4b00c57d9b94b53"
      },
      {
        title: "代码人生",
        id: "5c9c7cca1b117f3c60fee548"
      },
      {
        title: "阅读",
        id: "5562b428e4b00c57d9b94b9d"
      },
    ],
    list: []
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
    this.getData();
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
  getData: function(id) {
    var that = this;
    wx.request({
      url: 'https://web-api.juejin.im/query',
      method: 'post',
      header: {
        'X-Agent': 'Juejin/Web',
        'X-Powered-By-Defense': 'from pon-wddg-tel-qs-qssec-kd23',
        'X-Request-Id': '9da610d0561c11e992c577125835a08f'
      },
      data: {
        "operationName": "",
        "query": "",
        "variables": {
          "tags": [],
          "category": id ? id : '',
          "first": 20,
          "after": "",
          "order": "POPULAR"
        },
        "extensions": {
          "query": {
            "id": this.data.defaultMenuId
          }
        }
      },
      success: function(res) {
        that.setData({
          list: res.data.data.articleFeed.items.edges
        });
        console.log(that.data.list)
      }
    });
  },
  // 顶部菜单按钮选择事件
  handleMenuClick: function(ev) {
    var index = ev.target.dataset.index;
    this.setData({
      menuSelectedIndex: index
    });
    this.getData(this.data.menuList[index].id);
  }
})