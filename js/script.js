"use strict";

$(document).ready(function() {   //готов, когда построен DOM
	$('a.fancybox').fancybox();    // fancybox loading

    // Options for news-menu
    $('.sub > a').click(clickProcessor);

    $('#carouselOne').owlCarousel({
        items : 1,//Кол-во отображаемых элементов в слайдере
        singleItem : false,
        itemsScaleUp : false,
        loop : true, //Зацикливаем слайдер
        margin : 0, //Отступ от элемента справа в 50px
        nav : true, //вкл навигацию
        autoplay : true, //Автозапуск слайдера
        autoplayHoverPause : false, //Пауза при наведении курсора мыши.
        dots : true,//Отображение навигационных «точек»
        smartSpeed: 1000, //Время движения слайда
        autoplayTimeout: 2000, //Время смены слайда
        responsiveClass:true,
        responsive :{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
            0:{
                items:1
            },
            768:{
                items:2
            },
            980:{
                items:3
            }
        }
    });

});

function clickProcessor() {

    var a = $(this);
    var ul = a.next('ul');        //след за .sub а - ul
    ul.slideToggle();       //раздвигает и сдвигает меню
    a.toggleClass('active');  //доб и удал класс
    return false;            //препятст дальнейшей обраб события браузером
}