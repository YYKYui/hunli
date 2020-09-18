$(function(){


    var the_images = [];

    the_images.push("http://www.yunstudio.club/wx/addons/yunc_sum/template/aqh/images/101.png");
    // the_images.push("http://www.yunstudio.club/wx/addons/yunc_sum/template/aqh/images/102.png");
    // the_images.push("http://www.yunstudio.club/wx/addons/yunc_sum/template/aqh/images/103.png");
    // the_images.push("http://www.yunstudio.club/wx/addons/yunc_sum/template/aqh/images/104.png");
    // the_images.push("http://www.yunstudio.club/wx/addons/yunc_sum/template/aqh/images/105.png");
    // the_images.push("http://www.yunstudio.club/wx/addons/yunc_sum/template/aqh/images/106.png");
    // the_images.push("http://www.yunstudio.club/wx/addons/yunc_sum/template/aqh/images/107.png");
    // the_images.push("http://www.yunstudio.club/wx/addons/yunc_sum/template/aqh/images/11.png");
    // the_images.push("http://www.yunstudio.club/wx/addons/yunc_sum/template/aqh/images/111.png");
    // the_images.push("http://www.yunstudio.club/wx/addons/yunc_sum/template/aqh/images/112.png");
    // the_images.push("http://www.yunstudio.club/wx/addons/yunc_sum/template/aqh/images/113.png");
    // the_images.push("http://www.yunstudio.club/wx/addons/yunc_sum/template/aqh/images/114.png");
    // the_images.push("http://www.yunstudio.club/wx/addons/yunc_sum/template/aqh/images/115.png");
    // the_images.push("http://www.yunstudio.club/wx/addons/yunc_sum/template/aqh/images/116.png");
    // the_images.push("http://www.yunstudio.club/wx/addons/yunc_sum/template/aqh/images/117.png");
    // the_images.push("http://www.yunstudio.club/wx/addons/yunc_sum/template/aqh/images/12.png");
    // the_images.push("http://www.yunstudio.club/wx/addons/yunc_sum/template/aqh/images/13.png");
    // the_images.push("http://www.yunstudio.club/wx/addons/yunc_sum/template/aqh/images/14.png");
    // the_images.push("http://www.yunstudio.club/wx/addons/yunc_sum/template/aqh/images/15.png");
    // the_images.push("http://www.yunstudio.club/wx/addons/yunc_sum/template/aqh/images/16.png");
    // the_images.push("http://www.yunstudio.club/wx/addons/yunc_sum/template/aqh/images/17.png");


     var loader = new PxLoader();

    for (var i = 0; i < the_images.length; i++) {
        loader.addImage(the_images[i]);
    }
    loader.start();

    loader.addProgressListener(function (e) {//加载进度
        var NUM = Math.ceil(e.completedCount / e.totalCount * 100);
        $(".page0 b").text(parseInt(NUM));

        $(".doin").show();

        // $(".musicBtn").hide();
        // $(".bodyIn").css("background","#fff")

        //加载百分比
    });
    loader.addCompletionListener(function (e) {
         $("#a0").fadeOut();
         $(".fullpage").show();
         $('#fullpage').fullpage({
            
                change: function (e) {
                    // console.log('change', e.next, e.cur);
                    // $('.indicator li').removeClass('cur').eq(e.cur).addClass('cur');
                },
                beforeChange:function(e){
                    console.log('beforeChange', e.next, e.cur);
                    $.fn.fullpage.start()
                    // if(e.next ==2){ //第三页停止 从0开始计算
                    //     $.fn.fullpage.stop()
                    // } else {
                    //     $.fn.fullpage.start()
                    // }
                },
                afterChange: function (e) {
                    console.log('afterChange', e.next, e.cur);
                },
                loop:false,
                dir: 'v',
                // page 每屏的选择符，默认是.page
                // start 从第几屏开始，默认是第一屏
                // duration 每屏动画切换的时间，这段时间内，不能重复切换，默认是500ms，这里只是js限制，css动画时间需要更改css文件
                // drag 是否开启拖动功能，默认关闭
                // loop 是否开启循环滚动，默认false
                // dir 切换屏幕的方向，默认垂直方向(v|h)。v表示垂直方向,portrait 竖屏 landscape 横屏
                // der 当滑动距离大于一个值时，才会引起滑动现象，滑动距离=der*屏幕高度|宽度，默认值为0.1
                // change/beforeChange/afterChange 当切换屏幕时会触发的事件 
                // beforeChange事件的事件对象e包含两个属性next和cur，分别表示当前屏和将要切换的下一屏。change/afterChange的事件对象e包含两个属性prev和cur，表示前一屏和当前屏（和beforeChange的区别就是此时切换已经发生了，且不可逆转）。
                // orientationchange 当屏幕发生旋转时的回调。
            });
    })

});


    