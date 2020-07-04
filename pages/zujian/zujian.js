// pages/zujian/zujian.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab:1,
    navlist:[
      { name:"待付款",  id:1},
      { name:"待发货",  id:2},
      { name:"待收货",  id:3},
      { name:"待评论",  id:4},
      { name:"已完成",  id:5}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  jump(e){
    console.log(e)
    this.setData({
      currentTab:e.currentTarget.dataset.caa
    })
    // wx.navigateTo({
    //   url: '../zujian/zujian',
    // })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})