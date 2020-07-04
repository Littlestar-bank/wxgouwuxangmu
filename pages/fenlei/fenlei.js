// pages/fenlei/fenlei.js
import $$ from "../../utils/config.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
        datafenlei:[],
        datafenleiyou:[],
        currentTab:"配饰"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  jump(e) {
    console.log(e)
    this.setData({
      currentTab:e.currentTarget.dataset.caa
    })
    $$.httpGet('/w/website/findGoodsList',{"platId":"d0a500ecf8ab41aa9ffe8e18ac6419e1",
    "pageNo": 1,
    "info": this.data.currentTab
  }, res=> {
    console.log(res)
    this.setData({
     datafenleiyou:res.data.tbk_dg_material_optional_response.result_list.map_data
         })
          console.log(this.data.datafenleiyou)
 }); 
},
  onLoad: function (options) {

    $$.httpGet('/w/website/findGoodsTypeList',{}, res=> {
      console.log(res)
      this.setData({
        datafenlei:res.data
           })
          //  console.log(this.data.datahuakuai)
   });  
   
   $$.httpGet('/w/website/findGoodsList',{"platId":"d0a500ecf8ab41aa9ffe8e18ac6419e1",
   "pageNo": 1,
   "info": this.data.currentTab
 }, res=> {
   console.log(res)
   this.setData({
    datafenleiyou:res.data.tbk_dg_material_optional_response.result_list.map_data
        })
         console.log(this.data.datafenleiyou)
}); 

  },
  jjuu(){
    wx.navigateTo({
      url: '../shousuo/shousuo',
    })
  },
  oopp(e) {
    wx.navigateTo({
      url: '../xqq/xqq?id='+ e.currentTarget.dataset.id,
    })
    console.log(e)
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