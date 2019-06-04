$.fn.drag = function() {
  // this 指向调用的 jquery 对象
  var that = this;

  // 鼠标按下, 获取鼠标在盒子中的位置
  that.mousedown(function( e ) {
    var x = e.offsetX;  // 拿到鼠标在盒子中的位置
    var y = e.offsetY;

    $(document).mousemove(function( e ) {
      var left = e.pageX - x;
      var top = e.pageY - y;

      // 设置给盒子即可
      that.css({
        left: left,
        top: top,
        position: 'absolute'
      })
    })
  });

  // 鼠标弹起, 解绑事件
  $(document).mouseup(function() {
    $(document).off('mousemove');
  })


  return that;
};