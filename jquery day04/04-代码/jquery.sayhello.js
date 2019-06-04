// jquery插件的原理, 就是在给 $.fn 添加方法
$.fn.sayHello = function() {
  console.log('大家好');
};