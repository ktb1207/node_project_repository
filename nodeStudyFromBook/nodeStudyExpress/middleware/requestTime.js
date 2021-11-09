/**
 * 中间件：请求发起时间
 *
 * */

function requestTime(req, res, next) {
  // req 增加自定义属性
  req.requestTime = Date.now();
  // 调用next，交给其他中间件
  next();
}

export default requestTime;
