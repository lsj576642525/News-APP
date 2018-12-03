let recommendUrlFirst = 'https://c.m.163.com/recommend/getSubDocPic?from=toutiao&prog=&open=&openpath=&passport=zZKy3NWq8q4VdzT6BLpYnKKFSByQtujFrnpcJ3L7FDO6JA65lY7Cs9RKh6WjFNc5rqJv2nCCD2QqQsfBWgSZWQ%3D%3D&devId=WLOgsej/RNbuLe/RAO0snTgEn7/fi1OpQibiZF5AjQD6m2raHOC325A8P5IwIDUh&version=47.0&spever=false&net=wifi&lat=t0%2BiLAWI5eM1nMxQv3fOBA%3D%3D&lon=73rYqiQzVDejm84rjDGEDA%3D%3D&ts=1543284133&sign=JKqVoZGkBHelOUaS/Ys6c9SPCeI3z7sMfWKPZZovN%2Bx48ErR02zJ6/KXOnxX046I&encryption=1&canal=appstore&offset=';
let recommendUrlSecond = '&size=10&fn=6&spestr=reader_expert_2';

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