$(function () {
    $(window).resize(objSizeReset);
    objSizeReset();
    function objSizeReset() {
        convertSizeALL('.outside-frame');

    }



    $(window).on('load', function () {
        objSizeReset();
    });


});


function convertSizeALL(className) {

    var w = 1920, h = 900;
    var iw = $(window).innerWidth(), ih = $(window).innerHeight();
    var pRatio = window.devicePixelRatio || 0, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
    sRatio = Math.min(xRatio, yRatio);
    $(className).css({ width: Math.round(w * sRatio), height: Math.round(h * sRatio) });

    var reW = 1.92771084337349
    var reH = 1.31964809384164
    $("body").css("margin-left", (iw - Math.round(w * sRatio)) / 2);
    $("body").css("margin-top", "0");

    $('.background_cover').css({ width: Math.round(1920 * sRatio), height: Math.round(900 * sRatio) });
    $('.background').css({ width: Math.round(1920 * sRatio), height: Math.round(900 * sRatio) });
    $('.penlineBox').css({ width: Math.round(295 * sRatio), height: Math.round(132 * sRatio), borderRadius: `0 ${15 * sRatio}px ${15 * sRatio}px 0`, border: `${4 * sRatio}` + "px solid #DE643E" });
    $('.penlineBox .flexbox .left .word').css({ fontSize: Math.round(35 * sRatio) });
    $('.teachWay').css({ width: Math.round(359 * sRatio), height: Math.round(398 * sRatio), borderRadius: `0 0 ${15 * sRatio}px ${15 * sRatio}px`, border: `${Math.round(2* sRatio)}` + "px solid #DE643E"  });
    $('.top-area').css({ height: Math.round(45 * sRatio) });
    $('.penlineBox .flexbox .right .total').css({ width: Math.round(34 * sRatio), height: Math.round(120 * sRatio), fontSize: Math.round(27 * sRatio), });
    $('.top-area .word').css({ fontSize: Math.round(23 * sRatio), });
    $('.btn').css({ fontSize: Math.round(28 * sRatio), });
    $('.stroke_combo').css({ fontSize: Math.round(28 * sRatio), });
    $('.select_arrow').css({ height: Math.round(27 * sRatio) });
    $('.middle-area').css({ height: Math.round(215 * sRatio) });
    $('.stroke_combo_arrow').css({ height: Math.round(27 * sRatio) });
    $('.down_btn').css({ height: Math.round(28 * sRatio) });
    $('.up_btn').css({ height: Math.round(28 * sRatio) });
    $(".select_btn").css({ width: Math.round(26 * sRatio), height: Math.round(26 * sRatio), border: `${2 * sRatio}` + "px solid #999", fontSize: Math.round(20 * sRatio), });
    $('.select_btn_area').css({ height: Math.round(45 * sRatio) });
    $('.play_btn_area').css({ height: Math.round(92 * sRatio) });
    $('.btnplay').css({ width: Math.round(165 * sRatio), height: Math.round(32 * sRatio), fontSize: Math.round(18 * sRatio) });
    $(".more-teach").css({ width: Math.round(359 * sRatio), height: Math.round(90 * sRatio), borderRadius: `0 0 ${15 * sRatio}px ${15 * sRatio}px` , border: `${3 * sRatio}` + "px solid #DE643E"});
    $('.more-teach-top-area').css({ height: Math.round(41 * sRatio), fontSize: Math.round(25 * sRatio) });
    $('.more-teach-bottom-area').css({ height: Math.round(50 * sRatio), fontSize: Math.round(25 * sRatio) });
    $(".ten-word-line").css({ width: Math.round(359 * sRatio), height: Math.round(95 * sRatio), borderRadius: `0 0 ${15 * sRatio}px ${15 * sRatio}px`, border: `${3 * sRatio}` + "px solid #DE643E" });
    $('.btn_ten').css({ width: Math.round(100 * sRatio), height: Math.round(40 * sRatio), fontSize: Math.round(25 * sRatio) });
    $('.big_word_area').css({ width: Math.round(655 * sRatio), height: Math.round(655 * sRatio), border: `${4 * sRatio}` + "px solid #F6941F" });
    $('.simple_area').css({ width: Math.round(110 * sRatio), height: Math.round(861 * sRatio) });
    $('.simple').css({ width: Math.round(100 * sRatio), height: Math.round(100 * sRatio), marginBottom: Math.round(10 * sRatio), border: `${Math.round(2 * sRatio)}` + "px solid #F6941F", borderRadius: `${10 * sRatio}px `, fontSize: Math.round(70 * sRatio) });
    $('.penLineNum').css({ fontSize: Math.round(80 * sRatio) });
    $('.teaching').css({ width: Math.round(1200 * sRatio), height: Math.round(900 * sRatio)})
    $('.sound').css({ width: Math.round(60 * sRatio), height: Math.round(60 * sRatio) });
    $('.bigvideo').css({ width: Math.round(900 * sRatio), height: Math.round(665 * sRatio), border: `none`  });
    $('.bigbigvideo').css({ width: Math.round(880 * sRatio), height: Math.round(665 * sRatio), border:  `none`  });

    $('.line_box').css({ width: Math.round(655 * sRatio), height: Math.round(655 * sRatio) });
    $('.width').css({ borderRight: `${2 * sRatio}px solid #888` })
    $(".height").css({borderBottom: `${2 * sRatio}px solid #888`})
    $('.width-dot').css({ borderRight: `${2 * sRatio}px dotted #888` })
    $(".height-dot").css({borderBottom: `${2 * sRatio}px dotted #888`})
    // $('.soundimg').css({ width: Math.round(1200 * sRatio), height: Math.round(900 * sRatio) })
}
