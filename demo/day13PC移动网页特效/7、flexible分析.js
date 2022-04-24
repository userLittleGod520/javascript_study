(function flexible(window, document) {
    // 获取html的根元素
    var docEl = document.documentElement;
    //  dpr 物理像素比 例如 pc显示像素是 1px 在移动端就是2px 
    var dpr = window.devicePixelRatio || 1;

    // 设置body字体大小
    function setBodyFontSize() {
        // 判断页面是否有 body 设置字体大小
        if (document.body) {
            document.body.style.fontSize = (12 * dpr) + 'px';
        } else {
            // 如果js文件放在 头部 则需要先加载 页面元素完毕在执行
            document.addEventListener('DOMContentLoaded', setBodyFontSize);
        }
    }
    setBodyFontSize();

    // 设置html的文字大小
    function setRemUnit() {
        var rem = docEl.clientWidth / 10; // 把屏幕划分10等份 给rem字体大小
        docEl.style.fontSize = rem + 'px';
    }
    setRemUnit();

    // 当页面尺寸大小发生变化时，重新设置一下rem的大小
    window.addEventListener('resize', setRemUnit);
    // pageshow 事件是 重新加载页面触发的事件
    // 三种可以触发load事件的  1.a标签的链接  2.f5或者刷新(强制刷新)  3、前进或者后退
    // 火狐 有个特点，缓存页面数据和DOM和js的状态 将整个页面保存在了内存里面  不能回退触发事件
    // 解决方案 使用pageshow事件 重新加载页面触发的事件
    window.addEventListener('pageshow', function(e) {
        if (e.persisted) { // e.persisted 如果是true 就是说这个页面是从缓存取过来的页面，也需要重新加载rem大小
            setRemUnit();
        }
    })
}(window, document))