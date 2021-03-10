

$(function () {

    const accordions = document.querySelectorAll('.accordion__item');
    for(item of accordions) {
        item.addEventListener('click',function(){
            if (this.classList.contains('active')) {
                this.classList.remove('active');
            } else {
                for (el of accordions) {
                    el.classList.remove('active');
                }                  
                this.classList.add('active');
            }
        });
    }
    
    
    
    
    
    let header = $("#header");
    
    let intro = $("#intro");    
    let introH = intro.innerHeight();  
    let scrollPos = $(window).scrollTop();
    
    $(window).on("scroll load resize", function () {
        introH = intro.innerHeight();  
        scrollPos = $(this).scrollTop ();
        if ( scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");

        }
        
        console.log(scrollPos);
    });
    
    
    
});