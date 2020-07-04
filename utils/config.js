let APICONFLG="https://www.wumeili.top"
function Get(url,data,cb){
  wx.request({
    url: APICONFLG + url,
    data:data,
    success:(res) => {
     cb(res.data,"") 
    }
  })
};

function Post(url,data,cb) {
  wx.request({
    method:"POST",
       url:APICONFLG + url,
       data:data,
       header:{
         "Content-Type": "application/x-www-from-urlencoded"
       },
       success:(res) => {
       }
  })
}
// 暴露接口
module.exports = {
  httpGet: Get,
  httpPost: Post
}
