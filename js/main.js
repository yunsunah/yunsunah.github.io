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
    });
    $('.pop5').on('click', function(e){
        $('body').addClass('fixed');
        $('.pop_wrap').hide();
        $('.pop_wrap').eq(5).show();
        e.preventDefault();
    });
    $('.pop6').on('click', function(e){
        $('body').addClass('fixed');
        $('.pop_wrap').hide();
        $('.pop_wrap').eq(6).show();
        e.preventDefault();
    });
    $('.pop7').on('click', function(e){
        $('body').addClass('fixed');
        $('.pop_wrap').hide();
        $('.pop_wrap').eq(7).show();
        e.preventDefault();
    });
    $('.pop8').on('click', function(e){
        $('body').addClass('fixed');
        $('.pop_wrap').hide();
        $('.pop_wrap').eq(8).show();
        e.preventDefault();
    });
    $('.pop9').on('click', function(e){
        $('body').addClass('fixed');
        $('.pop_wrap').hide();
        $('.pop_wrap').eq(9).show();
        e.preventDefault();
    });
    $('.pop10').on('click', function(e){
        $('body').addClass('fixed');
        $('.pop_wrap').hide();
        $('.pop_wrap').eq(10).show();
        e.preventDefault();
    });
    $('.pop11').on('click', function(e){
        $('body').addClass('fixed');
        $('.pop_wrap').hide();
        $('.pop_wrap').eq(11).show();
        e.preventDefault();
    });

    $('.pop12').on('click', function(e){
        $('body').addClass('fixed');
        $('.pop_wrap').hide();
        $('.pop_wrap').eq(12).show();
        e.preventDefault();
    });
    $('.pop13').on('click', function(e){
        $('body').addClass('fixed');
        $('.pop_wrap').hide();
        $('.pop_wrap').eq(13).show();
        e.preventDefault();
    });
    $('.pop14').on('click', function(e){
        $('body').addClass('fixed');
        $('.pop_wrap').hide();
        $('.pop_wrap').eq(14).show();
        e.preventDefault();
    });
    $('.pop15').on('click', function(e){
        $('body').addClass('fixed');
        $('.pop_wrap').hide();
        $('.pop_wrap').eq(15).show();
        e.preventDefault();
    });
    $('.pop16').on('click', function(e){
        $('body').addClass('fixed');
        $('.pop_wrap').hide();
        $('.pop_wrap').eq(16).show();
        e.preventDefault();
    });
    $('.pop17').on('click', function(e){
        $('body').addClass('fixed');
        $('.pop_wrap').hide();
        $('.pop_wrap').eq(17).show();
        e.preventDefault();
    });
    $('.pop18').on('click', function(e){
        $('body').addClass('fixed');
        $('.pop_wrap').hide();
        $('.pop_wrap').eq(18).show();
        e.preventDefault();
    });
    $('.pop19').on('click', function(e){
        $('body').addClass('fixed');
        $('.pop_wrap').hide();
        $('.pop_wrap').eq(19).show();
        e.preventDefault();
    });
    $('.pop20').on('click', function(e){
        $('body').addClass('fixed');
        $('.pop_wrap').hide();
        $('.pop_wrap').eq(20).show();
        e.preventDefault();
    });


    

    $('.btn_close').on('click', function(e){
        $('body').removeClass('fixed');
        $(this).closest('.pop_wrap').hide();
        e.preventDefault();
    });
})
