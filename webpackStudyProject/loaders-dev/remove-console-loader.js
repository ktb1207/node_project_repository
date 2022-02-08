const reg = /(console.log()(.*)())/g;
module.exports = function(source, map) {
  source = source.replace(reg, "");
  return source;
}