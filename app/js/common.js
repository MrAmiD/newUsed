function bascetScripts() {
    $(document).on( "click", ".step2-trigger", function() {
        $('.mine-basket').hide();
        $('.order-form-b').fadeIn();
        $('.steps-tr').removeClass('active');
        $(this).addClass('active');
    });
    $(document).on( "click", ".step1-trigger", function() {
        $('.order-form-b').hide();
        $('.mine-basket').fadeIn();
        $('.steps-tr').removeClass('active');
        $(this).addClass('active');
    });
    $(document).on( "click", ".pers2-trigger", function() {
        $('.fiz-face').hide();
        $('.ur-face form').fadeIn();
        $('.persons-tr').removeClass('active');
        $(this).addClass('active');
    });
    $(document).on( "click", ".pers1-trigger", function() {
        $('.ur-face form').hide();
        $('.fiz-face').fadeIn();
        $('.persons-tr').removeClass('active');
        $(this).addClass('active');
    });
}
function showConfig() {
    //allCfg
    $(document).on('click', '#allCfg', function () {
        if($('.tabs-content .tab-cnt').find('table').hasClass('show-all')){
            $('.tabs-content .tab-cnt').find('table').removeClass('show-all');
            $('#allCfg').text('Все характеристики');
            $("html, body").animate({ scrollTop: $('.tabs-c .tabs-is').offset().top - 50}, 600);
        }else{
            $('.tabs-content .tab-cnt').find('table').addClass('show-all');
            $('#allCfg').text('Свернуть');
        } 
    });
    $(document).on('click', '#allFeedback', function () {
        if($('.tabs-content .feedback-c').hasClass('show-all')){
            $('.tabs-content .feedback-c').removeClass('show-all');
            $('#allCfg').text('Все отзывы');
            $("html, body").animate({ scrollTop: $('.tabs-c .tabs-is').offset().top - 50}, 600);
        }else{
            $('.tabs-content .feedback-c').addClass('show-all');
            $('#allFeedback').text('Свернуть');
        }
    });
    
    $(document).on('click', '.tabs-is .tabs-btns .tb-i', function () {
        $('.tabs-is .tabs-btns .tb-i').removeClass('active');
        $('.tabs-content .tab-cnt').removeClass('active');
        $(this).addClass('active');
        $($(this).data().trigger).addClass('active');
    });
    $(document).on('click', '#newFb', function () {
        $(this).hide();
        $('.fb-form-cont').fadeIn();
    });

}

function MainSliderInit(){//слайдер на главной странице
    $('.main-slider').slick({
        dots: true,
        infinite: true,
        //dotsClass: 'slick-dots container d-flex align-items-center justify-content-end',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: false
                }
            }
        ]
    });
}

function eqSliderInit(){
    $('.eq-slider').slick({
        dots: false,
        infinite: true,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev sliderAboutArrow">' +
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="9px" height="15px"> <path fill-rule="evenodd"  fill="rgb(0, 0, 0)" d="M9.006,1.033 C8.971,1.061 8.934,1.087 8.902,1.118 C6.805,3.175 4.709,5.231 2.612,7.288 C2.580,7.319 2.549,7.352 2.508,7.395 C2.547,7.437 2.582,7.477 2.621,7.514 C4.710,9.564 6.799,11.613 8.890,13.662 C8.924,13.696 8.967,13.723 9.006,13.753 C9.006,13.783 9.006,13.812 9.006,13.842 C8.859,13.979 8.710,14.113 8.566,14.253 C8.306,14.506 8.048,14.762 7.806,15.000 C5.210,12.455 2.621,9.917 -0.005,7.343 C0.017,7.331 0.075,7.312 0.114,7.274 C2.544,4.893 4.973,2.511 7.402,0.129 C7.571,-0.037 7.972,-0.038 8.140,0.126 C8.428,0.408 8.717,0.691 9.006,0.973 C9.006,0.993 9.006,1.013 9.006,1.033 Z"/></svg>' +
        '</button>',
        nextArrow: '<button type="button" class="slick-next sliderAboutArrow">' +
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="9px" height="15px"> <path fill-rule="evenodd"  fill="rgb(0, 0, 0)" d="M-0.006,13.967 C0.029,13.939 0.066,13.913 0.097,13.881 C2.195,11.825 4.291,9.769 6.388,7.712 C6.420,7.681 6.451,7.648 6.492,7.605 C6.453,7.563 6.418,7.523 6.379,7.486 C4.290,5.436 2.201,3.387 0.110,1.338 C0.076,1.304 0.033,1.277 -0.006,1.248 C-0.006,1.218 -0.006,1.188 -0.006,1.158 C0.141,1.021 0.290,0.887 0.434,0.747 C0.695,0.494 0.952,0.239 1.194,-0.000 C3.790,2.545 6.379,5.083 9.005,7.657 C8.983,7.669 8.925,7.688 8.886,7.726 C6.456,10.107 4.027,12.489 1.598,14.871 C1.429,15.037 1.028,15.038 0.860,14.874 C0.572,14.592 0.283,14.309 -0.006,14.027 C-0.006,14.007 -0.006,13.987 -0.006,13.967 Z"/></svg>' +
        '</button>',
        //dotsClass: 'slick-dots container d-flex align-items-center justify-content-end',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    dots: false
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    dots: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    dots: false
                }
            }
        ]
    });

    //$('.eq-slider .slick-next').click();//нужно для корректного отображения слайдера в всплывашке..хз, какой-то баг при инициализации слайдера,
    // $('#popit3').click();
    setTimeout(function () {
        $('.eq-th .item-th').height($(".eq-slider .item-cont>.item").height() + 32);
        eqRow();
    }, 1500);


}

function eqRow() {
    var countOptTr = $('.options-t .opt-i').length/$('.options-t').length;//кол-во опций в строке
    var opt_iArr = $('.options-t .opt-i');
    var tmpH = 0;
    console.log('opt_iArr = ', opt_iArr);
    for(var i = 0; i < countOptTr; i++){ // Берём элементы кратные кол-ву опций countOptTr
        var tmpH = 0;//обнуляем высовту для следующих элекментов

        for(var j=i; j < opt_iArr.length; j += countOptTr){
            if(tmpH < opt_iArr[j].clientHeight){//если максимальная высота  ниже высоты блока с опцией
                tmpH = opt_iArr[j].clientHeight;
            }
        }
        var j = i;

        $('.options-t .opt-i:nth-child('+ (i+1) +')').height(tmpH);
        $('.options-th .opt-i:nth-child('+ (i+1) +')').height(tmpH);
    }

    /*
        1 Колличество опций = количеству строк
        2 $('.options-t') Массив, Узнаем высоту для каждого элемента
        3
    */

    console.log('countOptTr = ', countOptTr);

}

$(function() {
    $("input[name=phone], input[type=tel]").mask("+7 (999) 999 - 99 - 99");

    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });


    $.datetimepicker.setLocale('ru');
    $('.date-p').datetimepicker({
        i18n:{
            de:{
                months:[
                    'Januar','Februar','März','April',
                    'Mai','Juni','Juli','August',
                    'September','Oktober','November','Dezember',
                ],
                dayOfWeek:[
                    "So.", "Mo", "Di", "Mi",
                    "Do", "Fr", "Sa.",
                ]
            }
        },
        timepicker:false,
        format:'d.m.Y'
    });
    //

    $('.js-single-i input[type=checkbox]').on('change', function() {
        $('.js-single-i input[type=checkbox]').not(this).prop('checked', false);
    }); 
    //setInvest start
    $('select').styler({
        selectSearch: true,
    });
    //setInvest end


    // ===== Scroll to Top ====
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200);   // Else fade out the arrow
        }
    });
    $('#return-to-top').click(function() {      // When arrow is clicked
        $('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 500);
    });


    //$('#my-menu').html($('.main-menu').html());
    //var  socials = $("#my-menu").data();
    $("#my-menu").mmenu({
        "extensions": [
            "fx-panels-none",
            "fx-listitems-slide",
            "fx-menu-slide",
            //"pagedim-black"
        ],
        "offCanvas": {
            "position": "left"
        },
        "navbar": {
            "title": ""
        },
        "pageScroll": true
    });

    //Если меню выезжает снизу, расчитываем размер шапки и выкатываем меню до неё
    //mmenu bagfix

    // $(".mm-menu.mm-offcanvas.mm-bottom").css('height', $(window).height() - $('.header-top').height());
    var api = $("#my-menu").data( "mmenu" );
    //   Hook into methods
    // api.bind( "open:after", function() {
    //     });

    api.bind( "open:finish", function() {
        $("#menu-btn").addClass('is-active');
        $(".mm-menu.mm-offcanvas.mm-bottom").css('height', $(window).height() - $('.header-top').height());

        //bugfix fixed menu 1-3 START
        $(window).scroll();
        $(".slick-menu").css({ top: $(window).scrollTop()});
    });
    api.bind( "open:start", function() {
        $(window).scroll();
        //bugfix fixed menu 2
        $(".slick-menu").css({ top: $(window).scrollTop() });
 
    });
    api.bind( "open:before", function() {
        $('#my-menu').css('top', $('#my-header .lvl1').height());
    });
    api.bind( "close:finish", function() {
        $("#menu-btn").removeClass('is-active');

        //bugfix fixed menu 3 END
        $(".slick-menu").css({ top: 0});
    });


    /*my custom select start*/
    $(window).click(function() {
        //$('.my-select').find('ul').slideUp();//закрывать, если кликнули не по диву
    });


    $('.my-select').on('click', function () {
        //event.stopPropagation();
        if($(this).find('ul').hasClass('active')){
            $(this).find('ul').removeClass('active');
            $(this).removeClass('active');
            $(this).find('ul').slideUp();
        }
        else {
            $(this).find('ul').addClass('active');
            $(this).addClass('active');
            $(this).find('ul').slideDown();
        }
    });
    $('.my-select .opt li').on('click', function () {
        if($(this).hasClass('selected')){
            $('.my-select .opt li').removeClass('selected');
        }
        else {
            $('.my-select .opt li').removeClass('selected');
            $(this).addClass('selected');
            $(this).parent().parent().find($('.select-value')).html($(this).data().value);
        }
    });
    /*my custom select End*/

    // $('#callDate').bootstrapMaterialDatePicker({ format : 'dddd DD MMMM YYYY - HH:mm', lang : 'ru', weekStart : 1, cancelText: 'Отмена'});

});
