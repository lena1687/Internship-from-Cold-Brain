"use strict";

$(document).ready(function() {   //готов, когда построен DOM
	$('a.fancybox').fancybox();    // fancybox loading

    // Options for news-menu
    $('.sub > a').click(clickProcessor);

});

function clickProcessor() {

    var a = $(this);
    var ul = a.next('ul');        //след за .sub а - ul
    ul.slideToggle();       //раздвигает и сдвигает меню
    a.toggleClass('active');  //доб и удал класс
    return false;            //препятст дальнейшей обраб события браузером
}