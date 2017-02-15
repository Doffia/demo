function animate(tag, obj, fn) {
    
    clearInterval(tag.timer);
    tag.timer = setInterval(function () {
      //假设当前这一次执行可以清除
      var flag = true;
      
      for (var k in obj) {
        //k - 属性名 - attr
        //obj[k] - target
        var target = obj[k];
        var leader = parseInt(getStyle(tag, k)) || 0;
        //缓动公式
        var step = (target - leader) / 10;
        //我们需要保证步数不会太小
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        leader = leader + step;
        
        //将新的位置设置给box
        tag.style[k] = leader + "px";
        
        //如果有任意一个属性没有到达指定位置，阻止清除
        if (leader != target) {
          flag = false;
        }
      }
      if (flag) {
        clearInterval(tag.timer);
      }
      
    }, 17);
  }
  
  
  function getStyle(tag, attr) {
    if (tag.currentStyle) {
      return tag.currentStyle[attr];
    } else {
      return getComputedStyle(tag, null)[attr];
    }
  }