// pages/shousuo/shousuo.js
import $$ from "../../utils/config.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // centent_Show:true,
    // value:"",
    historylist:['春秋被子'],
    hotlist:['被子春秋','春秋椅垫','女加厚内衣','女睡衣春秋','月子服厚','学生被子冬季','门帘子冬天','加厚运动装女']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    $$.httpGet("/w/website/findGoodsList" ,{
      "platId":"d0a500ecf8ab41aa9ffe8e18ac6419e1",
      "Info":this.data.currentTab	,
      "pageNo": 1
    },res=>{
      console.log(res)
      this.setData({
        historylist:res.data.tbk_dg_material_optional_response.result_list.map_data
      })
    })
  },
//   onChange:function(e){
//     var  values = e.detail.value;
//     this.setData({
//       value: values,
//     });
//     if (!value && this.data.productData.length == 0) {
//       this.setData({
//         centent_Show: false,
//       })
//   }
// },
// onClick:function(e){
//   var id= e.currentTarget.dataset.id
//   var program_id = app.program_id;
//   var that = this;
  // wx.request({
  //   url: 'aaa.php',//这里填写后台给你的搜索接口
  //   method: 'post',
  //   data: { str: that.data.searchValue, program_id: program_id, style:id },
  //   header: {
  //     'content-type': 'application/x-www-form-urlencoded'
  //   },
    // success: function (res) {
    //   if(res.data.length ==0){
    //     that.setData({
    //       centent_Show: false,
    //     });
    //   }
    //   that.setData({
    //     nanshen_card: res.data,
    //   });
    // },
//     fail: function (e) {
//       wx.showToast({
//         title: '网络异常！',
//         duration: 2000
//       });
//     },
//   })
// },
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