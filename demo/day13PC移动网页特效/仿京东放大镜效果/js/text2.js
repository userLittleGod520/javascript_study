window.addEventListener('load', function() {
    // 获取页面DOM节点
    var preview_img = document.querySelector('.preview_img');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');
    // 鼠标经过遮罩层的时候显示和大图
    preview_img.addEventListener('mouseover', function() {
        mask.style.display = 'block';
        big.style.display = 'block';
    });
    // 鼠标离开遮罩层 隐藏
    preview_img.addEventListener('mouseout', function() {
        mask.style.display = 'none';
        big.style.display = 'none';
    });
    // 鼠标移动添加 鼠标移动事件
    preview_img.addEventListener('mousemove', function(e) {
        // 获取鼠标在盒子里面的距离
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        var maskX = x - mask.offsetWidth / 2;
        var maskY = y - mask.offsetHeight / 2;
        var maskMax = preview_img.offsetWidth - mask.offsetWidth;
        // console.log(x, y);
        // 减去盒子的一半  x - offsetWidth / 2;
        // 限制 鼠标在盒子里面 大盒子 减去 里面遮罩层盒子
        if (maskX <= 0) {
            maskX = 0
        } else if (maskX >= maskMax) {
            maskX = maskMax;
        }
        if (maskY <= 0) {
            maskY = 0
        } else if (maskY >= maskMax) {
            maskY = maskMax;
        }
        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';

        // 求大图片的 移动距离 = 遮罩层移动距离 * 大图片的最大移动距离 / 遮罩层最大距离
        // 获取大图片 最大移动距离
        var bigImg = document.querySelector('.bigImg');
        var bigMax = bigImg.offsetWidth - big.offsetWidth;
        var bigX = maskX * bigMax / maskMax;
        var bigY = maskY * bigMax / maskMax;
        bigImg.style.left = -bigX + 'px'; //  -像素 显示图片 另一边
        bigImg.style.top = -bigY + 'px';
    })
})