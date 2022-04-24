var btn = document.querySelectorAll('button');
// console.log(div);
// 设置定时器函数 
function move(obj, target) {
    // 设置定时器
    // 由于按钮 点击一次触发一次 move函数 所以 需要清除上一次的定时器
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        // step 等于 (目标位置 - 现在盒子的位置) / 10
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    })
}
// move(div, 300);
// btn[0].addEventListener('click', function() {
//     move(span, 500);
// });
// btn[1].addEventListener('click', function() {
//     move(span, 800);
// })