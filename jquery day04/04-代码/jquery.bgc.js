// 给 $.fn 添加 bgc 方法
$.fn.bgc = function( color ) {
  // jquery插件方法中的 this, 指向调用方法的jquery对象
  // this 是一个 jquery对象
  this.css('backgroundColor', color);

  // 支持链式调用, 需要返回 this
  return this;
};