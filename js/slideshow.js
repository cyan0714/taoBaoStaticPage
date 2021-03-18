$(function () {
    //1.鼠标放在轮播图上时，出现左滑和右划箭头
    $(".main_slideshow").on({
        mouseover: function () {
            $(".ms_left ").show().siblings(".ms_right").show();
        },
        mouseout: function () {
            $(".ms_left ").hide().siblings(".ms_right").hide();
        },
    });
    //2.自动生成小圆圈，有多少张图片就有多少个小圆圈
    for (var i = 0; i < $(".main_picture li").length; i++) {
        var li = $("<li></li>");
        $(".main_circle").append(li);
    }
    $(".main_circle li").eq(0).addClass("ms_current");
    //3.点击小圆圈，让当前小圆圈添加 current 类，并获得 index 索引，然后相应图片位移
    $(".main_circle li").click(function () {
        $(this).addClass("ms_current").siblings().removeClass("ms_current");
        var index = $(this).index();
        //当点击了某个小圆圈，就要把这个小圆圈的索引号给 num，才能保证一致
        num = circle = index;
        $(".main_picture").animate({
            left: -index * 518,
        });
    });
    //4.克隆第一张图片(li)放到 ul 最后面，防止生成多余的小圆圈
    $(".main_picture li").eq(0).clone(true).appendTo($(".main_picture"));

    //5.点击箭头，图片移动

    var num = 0;
    var circle = 0;

    $(".ms_right").click(function () {
        //如果走到了最后一张复制的图片，此时 ul 要快速复原 left 为0
        if (num == $(".main_picture li").length - 1) {
            // console.log();
            $(".main_picture").animate(
                {
                    left: 0,
                },
                0
            );
            left = 0;

            num = 0;
        }
        num++;
        $(".main_picture").animate({
            left: -num * 518,
        });
        circle++;
        if (circle == $(".main_circle li").length) {
            circle = 0;
        }
        for (var i = 0; i < $(".main_circle li").length; i++) {
            $(".main_circle li").removeClass("ms_current");
        }
        $(".main_circle li").eq(circle).addClass("ms_current");
    });
    $(".ms_left").click(function () {
        if (num == 0) {
            num = $(".main_picture li").length - 1;
            $(".main_picture").animate(
                {
                    left: -num * 518,
                },
                0
            );
        }
        num--;
        $(".main_picture").animate({
            left: -num * 518,
        });
        circle--;
        if (circle < 0) {
            circle = $(".main_circle li").length - 1;
        }
        for (var i = 0; i < $(".main_circle li").length; i++) {
            $(".main_circle li").removeClass("ms_current");
        }
        $(".main_circle li").eq(circle).addClass("ms_current");
    });
});
