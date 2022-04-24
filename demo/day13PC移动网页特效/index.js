   // 给不同对象  添加不同的定时器
   var div = document.querySelector('div');
   // 动画一直 运
   // console.log(div[1].offsetLeft);
   function move(obj, target) {
       // 设置定时器
       var timer = setInterval(function() {
           // 判断 超过目标大小 清除定时器
           if (obj.offsetLeft >= target) {
               clearInterval(timer);
           }
           obj.style.left = obj.offsetLeft + 10 + 'px';
       }, 200)
       console.log(obj.offsetLeft);
   }
   move(div, 200);