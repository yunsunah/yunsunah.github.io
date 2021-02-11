$(document).ready(function(){
    // 스크롤
    var $lstNavi = $('.header').find('nav'),
    $evtSec = $('.main').find('section'),
    lastIdx = $evtSec.length - 1,
    posArr = [],
    posNaviTop = 0;

    $lstNavi.on('click','li a',function(e){
        e.preventDefault();
        var id = $(this).attr('href');
        var posY = $(id).offset().top - posNaviTop;

        $('html , body').stop().animate({"scrollTop": posY}, 700);
    });
    $('.header').on('click','h1 a',function(e){
        $('html , body').stop().animate({"scrollTop": 0}, 700);
    });

    getSize();

    $(window).resize(function(){
        getSize();
    });

    function getSize(){
        posNaviTop = $('.header').find('.inner').height();
        for(var i = 0; i <= lastIdx; i++){
            posArr[i] = $evtSec.eq(i).offset().top + posNaviTop;
        }
    }
    $(window).scroll(function(){
        var currentY = $(this).scrollTop();

        if(currentY >= 0){
            $('.header .inner').css("position","fixed").css("top",0);
        }else if(currentY < posNaviTop){
            $('.header .inner').css("position","relative").css("top",0);
        }
    });

    $('.btn_detail').on('click', function(e) {
        e.preventDefault();
        let popupID = $(this).data('popup');
        $('body').addClass('fixed');
        $('.pop_wrap').hide();
        $(`#${popupID}`).show();
    });

    $('.btn_close').on('click', function(e){
        e.preventDefault();
        $('body').removeClass('fixed');
        $(this).closest('.pop_wrap').hide();
    });
})
