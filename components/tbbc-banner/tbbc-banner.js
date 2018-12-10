import Util from '../../utils/util'
let self

Component({
  properties: {
    pageCurrentState: {
      type: String, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: '', // 属性初始值（可选），如果未指定则会根据类型选择一个
      observer: function (newVal, oldVal, changedPath) {
        // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
        // 通常 newVal 就是新设置的数据， oldVal 是旧数据
      }
    },
    imgNum: {
      type: Number,
      value: '1'
    }

  },
  data: {
    list: {
      tid: [],
      T1348649580692: [],
    }
  },

  lifetimes: {
    attached: function () { // 在组件实例进入页面节点树时执行
      self = this;
      if (self.data.pageCurrentState == 'recommend') {
        self.loadRecommendPageImg();
      } else {
        self.loadFocusNewsPageImg()
      }
    },

    detached: function () { // 在组件实例被从页面节点树移除时执行

    },
  },

  methods: {
    loadRecommendPageImg: function () {
      let opts = {};
      opts.successBack = function (responsData) {
        let backRecommendList = responsData.data.tid || [];
        self.setData({
          'list.tid': backRecommendList
        })
      }
      opts.type = 'recommend';
      opts.offset = '1';
      Util.getNewsListByOpts(opts);
    },
    loadFocusNewsPageImg: function () {
      let opts = {};
      opts.successBack = function (responsData) {
        let backFocusNewsList = responsData.data.T1348649580692 || [];
        self.setData({
          'list.T1348649580692': backFocusNewsList
        })
      }
      opts.type = 'focusNews';
      opts.offset = '1';
      Util.getNewsListByOpts(opts);
    },
    recommendImgDidTap: function (event) {
      self = this;
      wx.navigateTo({
        url: '../../pages/detailPage/detailPage',
        success: (result) => {

        },
        fail: () => {},
        complete: () => {}
      });
    },
    focusNewsImgDidTap: function (event) {
      self = this;
      wx.navigateTo({
        url: '../../pages/detailPage/detailPage',
        success: (result) => {
          console.log('第' + self.data.imgNum + '张图片')
          console.log('这是' + self.data.pageCurrentState + '页')
        },
        fail: () => {},
        complete: () => {}
      });
    },
    change: function (e) {
      self = this
      self.setData({
        imgNum: e.detail.current + 1
      })
    }
  }
})