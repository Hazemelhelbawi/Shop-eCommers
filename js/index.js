$(document).ready(function(){
    $('#loading').fadeOut(2000,function(){
        $('body').css('overflow','visible')
    })
})


let upScrolOffset = $('#slider-background').offset().top;

$(window).scroll(function(){
    if($(window).scrollTop() > upScrolOffset){
        $('#upIcon').fadeIn(1000)
    }
    else{
        $('#upIcon').fadeOut(1000)

    }

    })

    $('#upIcon').click(function(){
        $('body,html').animate({scrollTop: 0},800)
    })


    $('.nav-scroll').click(function(){
        let currentLink=$(this).attr('href');
        let currentOffset =$(currentLink).offset().top;
        $('body,html').animate({scrollTop: currentOffset},800)
      })
    

