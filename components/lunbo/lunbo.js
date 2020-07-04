Component({
  properties: {
    indexlist: {
      type: Array,
      value: [],
      observer: function (newVal, oldVal) {
        this.setData({
          indexlist: newVal
        })
      }
    },
    url:{
      type:String,
      value:''
    },
    sheight:{
      type:String,
      value:''
    }
  }
})