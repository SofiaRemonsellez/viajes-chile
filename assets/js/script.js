$( function (){
    // métodos de jQuery...


$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

$(".page-header ul a").on("click", function (e) {
    // 1
    e.preventDefault();
    // 2
    const href = $(this).attr("href");
    // 3
    $("html, body").animate({ scrollTop: $(href).offset().top }, 800);
  });


  $(window).scroll(function(event){

    var scroll = $(window).scrollTop();

    if(scroll >= 120){

        $('nav').addClass('color-navbar')
        //+ color

    }else{
        $('nav').removeClass('color-navbar')
        //- color
        console.log('Es menor a 100 o sea 99');
    }});

});  