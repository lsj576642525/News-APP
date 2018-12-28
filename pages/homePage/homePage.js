import Util from '../../utils/utilTest';
let self;

Page({
  data: {
    pageCurrentState: 'recommend',
    list: {
      tid: [],
      T1348649580692: []
    },
    color: {
      selectedColor: '#000',
      unselectedColor: '#ccc'
    },
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
  onPullDownRefresh: function (pageType) {
    var pageType = self.getPageType(pageType)
    if (pageType == 'recommend') {
      self.data.list.tid = []
    } else {
      self.data.list.T1348649580692 = []
    }
    self.loadPageData()
  },
  // 滚动到页面底部
  onReachBottom: function (pageType) {
    self.loadPageData();
  },

  // 获取页面类型
  getPageType: function (pageType) {
    var pageType = self.data.pageCurrentState
    return pageType
  },
  
  recommendDidTap: function (event) {
    let opts = {}
    self.setData({
      'pageCurrentState': 'recommend'
    })
    opts.type = 'recommend'
  },
  focusNewsDidTap: function (event) {
    let opts = {}
    self.setData({
      'pageCurrentState': 'focusNews'
    })
    opts.type = 'focusNews'
    if (!self.data.list.T1348649580692.length) {
      self.loadPageData()
    } else {

    }
  },
  loadPageData: function (pageType) {
    let opts = {}
    var pageType = self.getPageType(pageType)
    if (pageType == 'recommend') {
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
        wx.stopPullDownRefresh()
      }
      opts.type = 'recommend'
      opts.offset = self.data.list.tid.length
      Util.getNewsListByOpts(opts)
    } else {
      opts.successBack = function (responsData) {
        let backFocusNewsList = responsData.data.T1348649580692 || [];
        if (self.data.list.T1348649580692.length) {
          self.setData({
            'list.T1348649580692': self.data.list.T1348649580692.concat(backFocusNewsList)
          })
        } else {
          self.setData({
            'list.T1348649580692': backFocusNewsList
          })
        }
        wx.stopPullDownRefresh();
      }
      opts.type = 'focusNews'
      opts.offset = self.data.list.T1348649580692.length
      Util.getNewsListByOpts(opts)
    }
  }

})