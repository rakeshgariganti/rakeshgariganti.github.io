$(window).load(function(){
	$('#spinner').fadeOut(1000);
});
$(document).ready(function ($) {	

	
	
	$('#logo').click(function(){
		goToByScroll(1);
	});

	
    $(window).stellar();
    var links = $('.navigation').find('li');
    slide = $('.slide');
    button = $('.button');
    mywindow = $(window);
    htmlbody = $('html,body');
    slide.waypoint(function (event, direction) {
        dataslide = $(this).attr('data-slide');
        if (direction === 'down') {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
        }
        else {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
        }

    });
    mywindow.scroll(function () {
        if (mywindow.scrollTop() == 0) {
            $('.navigation li[data-slide="1"]').addClass('active');
            $('.navigation li[data-slide="2"]').removeClass('active');
        }
    });
    function goToByScroll(dataslide) {
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
        }, 2000, 'easeInOutQuint');
	var a=new Array('home','whatwedo','whoweare','howwedo','gallery','projects','workwithus','meetus');
	var slideid="#"+a[dataslide-1];
	$(slideid).delay(4500).fadeIn('slow');
        
    }
 links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });

    button.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });


});
