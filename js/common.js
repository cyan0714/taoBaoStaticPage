$(function () {
    $(".sc_hover").hover(
        function () {
            $(this).children("div:last-child ").show().siblings().css("backgroundColor", "orange");
        },
        function () {
            $(this).children("div:last-child ").hide().siblings().css("backgroundColor", "");
        }
    );
    $(".bgc_ccc").hover(
        function () {
            $(this).css("backgroundColor", "#f5f5f5");
        },
        function () {
            $(this).css("background", "");
        }
    );
    $(".mn_nav li").mouseover(function () {
        var index = $(this).index();
        $(this).addClass("mn_current").siblings().removeClass("mn_current");
        $(".mn_ad div").eq(index).addClass("mn_show").siblings().removeClass("mn_show");
    });
    var as = document.querySelectorAll(".menber_module span ");
    for (var i = 0; i < as.length; i++) {
        var index = i * 43.5;
        as[i].style.backgroundPosition = "0 -" + index + "px";
    }
});
