// pages/xqq/xqq.js
import $$ from "../../utils/config.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    xxqq:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    $$.httpGet('/w/website/findGoodsDetail',{"info":options.id},res=> {
      console.log(res)
      this.setData({
        xxqq:res.data.detail.tbk_item_info_get_response.results.n_tbk_item
      })

    })
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