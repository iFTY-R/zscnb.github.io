$(function() {

    $('.theme-container .sidebar ul.sidebar-links').prepend($('<div id="demo"></div>'));

    $('#demo').slider({
        imgList: [{
                img: '/img/1.jpg',
                a: 'https://zscnb.gitee.io/',
            },
            {
                img: '/img/2.jpg',
                a: 'https://zscnb.gitee.io/',
            },
            {
                img: '/img/3.jpg',
                a: 'https://zscnb.gitee.io/',
            },
            {
                img: '/img/4.jpg',
                a: 'https://zscnb.gitee.io/',
            },
            {
                img: '/img/5.jpg',
                a: 'https://zscnb.gitee.io/',
            },
            {
                img: '/img/6.jpg',
                a: 'https://zscnb.gitee.io/',
            },
            {
                img: '/img/7.jpg',
                a: 'https://zscnb.gitee.io/',
            },
            {
                img: '/img/8.jpg',
                a: 'https://zscnb.gitee.io/',
            },
            {
                img: '/img/9.jpg',
                a: 'https://zscnb.gitee.io/',
            },
            {
                img: '/img/10.jpg',
                a: 'https://zscnb.gitee.io/',
            },
            {
                img: '/img/11.jpg',
                a: 'https://zscnb.gitee.io/',
            },
            {
                img: '/img/12.jpg',
                a: 'https://zscnb.gitee.io/',
            },
        ], //图片的列表，a属性里面存放的是网络地址，img存放的是图片地址
        width: 270, //图片的宽
        height: 170, //图片的高
        isAuto: true, //是否自动轮播
        moveTime: 3000, //运动时间
        direction: 'right', //轮播的方向
        btnWidth: 30, //按钮的宽
        btnHeight: 30, //按钮的高
        spanWidth: 10, //span按钮的宽
        spanHeight: 10, //span按钮的高
        spanColor: '#fff', //span按钮的颜色
        backgroundImage: "url('/img/icon_slide_selected.png')",
        // activeSpanColor: '#00b77f', //选中的span颜色
        btnBackgroundColor: 'rgba(0, 0, 0, 0.3)', //两侧按钮的颜色
        spanRadius: '50%', //span按钮的圆角程度
        spanMargin: 3, //span之间的距离
    })
});