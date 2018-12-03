import Util from '../../utils/util';
let self;

Page({
  data: {
    list: {
      tid: []
    }
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    self = this;
    self.loadPageData();
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  // 触发了下拉刷新 
  onPullDownRefresh: function () {
    self.data.list.tid = [];
    self.loadPageData();
  },
  // 滚动到页面底部
  onReachBottom: function () {
    self.loadPageData();
  },
  // 请求/更新页面数据
  loadPageData: function () {
    let opts = {};
    opts.successBack = function (responsData) {
      let backTidList = responsData.data.tid || [];
      if (self.data.list.tid.length) {
        self.setData({
          'list.tid': self.data.list.tid.concat(backTidList)
        })
      } else {
        self.setData({
          'list.tid': backTidList
        })
      }
      wx.stopPullDownRefresh();
    }
    opts.type = 'recommend';
    opts.offset = self.data.list.tid.length;
    Util.getNewsListByOpts(opts);
  }
})