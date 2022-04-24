window, addEventListener('load', function() {
    // 1、获取页面DOM节点
    var left = document.querySelector('.arrow-l');
    var right = document.querySelector('.arrow-r');
    var focus = document.querySelector('.focus');
    // 2、鼠标移动到 轮播图显示 箭头
    focus.addEventListener('mouseenter', function() {
        left.style.display = 'block';
        right.style.display = 'block';
    });
    // 2、鼠标离开到 轮播图 隐藏箭头
    focus.addEventListener('mouseleave', function() {
        left.style.display = 'none';
        right.style.display = 'none';
    });

    // 3、动态生成小圆圈
    var ul = document.querySelector('.content');
    var ol = focus.querySelector('ol');
    // console.log(ol);
    // console.log(ul.children.length);   得到li的个数
    for (var i = 0; i < ul.children.length; i++) {
        // 创建一个小li
        var li = document.createElement('li');
        // 把小li插进 ol
        // 设置自定义属性 
        li.setAttribute('index', i);
        ol.appendChild(li);
        // 将ol的第一个li 添加样式
        ol.children[0].className = 'current';
        // 点击当前小li 修改颜色   排他思想
        li.addEventListener('click', function() {
            // 干掉所有人，清除类名
            for (i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';

            // 5、点击小圆圈 移动图片 移动ul
            // ul的移动距离 等于 li的索引号 * 图片的宽度 负值
            // 当我们点击某个 小li 就拿到当前小li的索引号
            var index = this.getAttribute('index');
            console.log(index);
            var focusWidth = focus.offsetWidth;
            console.log(focusWidth);
            move(ul, -index * focusWidth);
        })
    }
})