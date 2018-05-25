/*$(document).ready(function(){   
    $(window).scroll(function(){        
        if ($(window).scrollTop() > 970) {
            $('.navbar').addClass('navbar-fixed-top');
        }
        if ($(window).scrollTop() < 971) {
            $('.navbar').removeClass('navbar-fixed-top');
        }        
    });  
});*/

/*$(".navbar-toggleable-md ul li a[href^='#']").on('click',function(e){
    e.preventDefault();
    var hash=this.hash;
    $('html','body').animate({
        scrollTop:$(hash).offset().top
    }, 300, function(){
        window.location.hash=hash;
    })
})*/
$(function(){
        // Check the initial Poistion of the Sticky Header
        var stickyHeaderTop = $('.navbar').offset().top;

        $(window).scroll(function(){
                if( $(window).scrollTop() > stickyHeaderTop ) {
                        $('.navbar').css({position: 'fixed', top: '0px', width:'100%'});
                        $('.navbar').css('display', 'block');
                } else {
                        $('.navbar').css({position: 'static', top: '0px'});
                        $('.navbar').css('display', 'none');
                }
        });
  });
