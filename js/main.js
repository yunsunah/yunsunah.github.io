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

    $('.pop0').on('click', function(e){
        $('body').addClass('fixed');
        $('.pop_wrap').hide();
        $('.pop_wrap').eq(0).show();
        e.preventDefault();
       
            $('#slider1').bxSlider();
    });
    $('.pop1').on('click', function(e){
        $('body').addClass('fixed');
        $('.pop_wrap').hide();
        $('.pop_wrap').eq(1).show();
        e.preventDefault();
    });
    $('.pop2').on('click', function(e){
        $('body').addClass('fixed');
        $('.pop_wrap').hide();
        $('.pop_wrap').eq(2).show();
        e.preventDefault();
    });
    $('.pop3').on('click', function(e){
        $('body').addClass('fixed');
        $('.pop_wrap').hide();
        $('.pop_wrap').eq(3).show();
        e.preventDefault();
    });
    $('.pop4').on('click', function(e){
        $('body').addClass('fixed');
        $('.pop_wrap').hide();
        $('.pop_wrap').eq(4).show();
        e.preventDefault();
        $('#slider2').bxSlider();
    });
    $('.pop5').on('click', function(e){
        $('body').addClass('fixed');
        $('.pop_wrap').hide();
        $('.pop_wrap').eq(5).show();
        e.preventDefault();
        $('#slider3').bxSlider();
    });
    $('.pop6').on('click', function(e){
        $('body').addClass('fixed');
        $('.pop_wrap').hide();
        $('.pop_wrap').eq(6).show();
        e.preventDefault();
        $('#slider4').bxSlider();
    });
    $('.pop7').on('click', function(e){
        $('body').addClass('fixed');
        $('.pop_wrap').hide();
        $('.pop_wrap').eq(7).show();
        e.preventDefault();
    });
    $('.btn_close').on('click', function(e){
        $('body').removeClass('fixed');
        $(this).closest('.pop_wrap').hide();
        e.preventDefault();
    });
})
