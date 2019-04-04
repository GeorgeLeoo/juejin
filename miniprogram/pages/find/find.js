// miniprogram/pages/find/find.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    defaultMenuId: "249431a8e4d85e459f6c29eb808e76d0",
    menuSelectedIndex: 0,
    menuList: [{
        title: "推荐",
        id: "249431a8e4d85e459f6c29eb808e76d0"
      },
      {
        title: "综合",
        id: "b0193ee4e56c86552cef03d1b5029f16"
      },
      {
        title: "沸点",
        id: "b0193ee4e56c86552cef03d1b5029f16"
      },
    ],
    userRecommendationList: null
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
    this.data.userRecommendationList=null;
    this.getData(this.data.defaultMenuId);
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
    var data;
    if (id !== this.data.defaultMenuId) {
      data = {
        "operationName": "",
        "query": "",
        "variables": {
          "type": "PIN",
          "size": 20,
          "after": "",
          "since": "2019-04-04T11:09:31.757Z"
        },
        "extensions": {
          "query": {
            "id": id
          }
        }
      };
    } else {
      data = {
        "operationName": "",
        "query": "",
        "variables": {
          "size": 20,
          "after": "",
          "afterPosition": "5ca5db52d66d638f4c0ce362"
        },
        "extensions": {
          "query": {
            "id": id
          }
        }
      };
    };
    var that = this;
    wx.request({
      url: 'https://web-api.juejin.im/query',
      method: 'post',
      header: {
        'X-Agent': 'Juejin/Web'
      },
      data: data,
      success: function(res) {
        // console.log(res);
        if (res.data.data) {
          that.setData({
            list: res.data.data.recommendedActivityFeed.items.edges
          });
        } else {
          that.getUserRecommendationCard();
        }
        console.log(that.data.list);
        console.log(that.data.userRecommendationList);
      }
    });
  },
  handleMenuClick(ev) {
    var index = ev.target.dataset.index;
    this.setData({
      menuSelectedIndex: index
    });
    this.getData(this.data.menuList[index].id);
  },
  getUserRecommendationCard: function() {
    var that = this;
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
          "excluded": [],
          "limit": 24
        },
        "extensions": {
          "query": {
            "id": "2dc8fd603ff34277d121086abc655ff5"
          }
        }
      },
      success: function(res) {
        console.log(res);
        that.setData({
          userRecommendationList: res.data.data.userRecommendationCard.items
        });
      }
    });
  }
})