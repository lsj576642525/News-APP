import Util from '../../utils/util'
let self

Component({
  properties: {

  },
  data: {
    pageCurrentState: 'recommend',
    list: {
      T1348649580692: [],
    }
  },
  lifetimes: {
    attached: function () { // 在组件实例进入页面节点树时执行
      self = this;
      self.loadFocusNewsPageImg();
    },
    detached: function () { // 在组件实例被从页面节点树移除时执行

    },
  },
  methods: {
    loadFocusNewsPageImg: function () {
      let opts = {};
      opts.successBack = function (responsData) {
        let backFocusNewsList = responsData.data.T1348649580692 || [];
        self.setData({
          'list.T1348649580692': backFocusNewsList
        })
      }
      opts.type = 'recommend';
      opts.offset = self.data.list.T1348649580692.length;
      Util.getNewsListByOpts(opts);
    },
  }
})