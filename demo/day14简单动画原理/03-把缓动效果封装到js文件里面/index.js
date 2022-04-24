window.addEventListener('load', function() {
    var div = document.querySelector('div');
    var span = document.querySelector('span');
    var btn = document.querySelectorAll('button')

    function move(obj, target, callback) {
        // console.log(callback);
        // 设置 定时器
        clearInterval(obj.timer); // 防止按钮 点击 执行一次 之后 不会清除上一次的定时器
        obj.timer = setInterval(function() {
            // 设置 偏移量 ( 目标位置 - 当前位置 ) / 10 
            var step = (target - obj.offsetLeft) / 10;
            //  四舍五入  向上取整 Math.ceil()  向下取整 Math.floor()
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (obj.offsetLeft == target) {
                clearInterval(obj.timer); // 清除定时器
                if (callback) {
                    callback();
                }
            }
            obj.style.left = obj.offsetLeft + step + 'px';
        })
    }
    // move(div, 300);

    // btn[0].addEventListener('click', function() {
    //     move(span, 500);
    // })
    // btn[1].addEventListener('click', function() {
    //     move(span, 800, function() {
    //         console.log('我是回调函数，我写在定时器结束之后');
    //     });
    // })
})