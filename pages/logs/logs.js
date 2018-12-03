let recommendUrlFirst = 'https://c.m.163.com/dlist/article/dynamic?from=T1348649580692&passport=zZKy3NWq8q4VdzT6BLpYnKKFSByQtujFrnpcJ3L7FDO6JA65lY7Cs9RKh6WjFNc5rqJv2nCCD2QqQsfBWgSZWQ%3D%3D&devId=WLOgsej%2FRNbuLe%2FRAO0snTgEn7%2Ffi1OpQibiZF5AjQD6m2raHOC325A8P5IwIDUh&version=47.0&spever=false&net=wifi&lat=t0%2BiLAWI5eM1nMxQv3fOBA%3D%3D&lon=73rYqiQzVDejm84rjDGEDA%3D%3D&ts=1543284164&sign=CbvgPDJcft9QTanKxgEfrXG2I3f60oH%2FKO7ol8s90CV48ErR02zJ6%2FKXOnxX046I&encryption=1&canal=appstore&offset=';
let recommendUrlSecond = '&size=10&fn=2';

let anotherUrl = '';

module.exports = {
  getNewsListByOpts: function (optData) {
    console.log('util获取数据', optData);
    let requestUrl = '';
    if (optData.type === 'recommend') {
      requestUrl = recommendUrlFirst + optData.offset + recommendUrlSecond;
      let successFunction = function (res) {
        optData.successBack(res);
      }
      basicRequest(requestUrl, successFunction);
    }
  }
}

function basicRequest(url, successCallBack) {
  wx.request({
    url: url,
    headers: {
      "Content-Type": "application/json"
    },
    success: function (res) {
      successCallBack(res);
    },
  })
}