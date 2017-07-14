$(document).ready(function() {
	$("a.fancybox").fancybox();
	$("[data-fancybox]").fancybox({    // Options for fancybox
	});

    $(".sub > a").click(function() {          // Options for news-menu
        var ul = $(this).next(),
            clone = ul.clone().css({"height":"auto"}).appendTo(".mini-menu"),
            height = ul.css("height") === "0px" ? ul[0].scrollHeight + "px" : "0px";
        clone.remove();
        ul.animate({"height":height});
        return false;
    });
    $('.mini-menu > ul > li > a').click(function(){
        $('.sub a').removeClass('active');
        $(this).addClass('active');
    }),
        $('.sub ul li a').click(function(){
            $('.sub ul li a').removeClass('active');
            $(this).addClass('active');
        });


});

