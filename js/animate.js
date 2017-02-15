function animate(tag, obj, fn) {
    
    clearInterval(tag.timer);
    tag.timer = setInterval(function () {
      //���赱ǰ��һ��ִ�п������
      var flag = true;
      
      for (var k in obj) {
        //k - ������ - attr
        //obj[k] - target
        var target = obj[k];
        var leader = parseInt(getStyle(tag, k)) || 0;
        //������ʽ
        var step = (target - leader) / 10;
        //������Ҫ��֤��������̫С
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        leader = leader + step;
        
        //���µ�λ�����ø�box
        tag.style[k] = leader + "px";
        
        //���������һ������û�е���ָ��λ�ã���ֹ���
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