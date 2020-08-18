
$(function(){
  
  gsap.from(".header__logo", {duration: 2, x: 300, opacity: 0, scale: 0.5});
  gsap.from(".header__item", {duration: 2, y: -50, opacity: 0, scale: 0.5});
  gsap.from(".header__title", { duration: 2, ease: "back.out(1.7)", x: -300 });
  gsap.from(".header__text", { duration: 2, ease: "back.out(1.7)", x: 200 });
  
  let current = true,
    current1 = true,
    current2 = true;

  $(window).scroll(function() {
    if ($(this).scrollTop() > 300 && $(this).scrollTop() < 900) {
      effectSlideUp(current);
      current = false;
    } if($(this).scrollTop() > 1000 && $(this).scrollTop() < 1700) {
      effectSlideCatalogue(current1);
      current1 = false;
    }
  });

  function effectSlideUp(status){
    if(status){
      $(".description__content").css({ duration: 2,  ease: "back.out(1.7)", opacity: 1, marginTop: 100, position: "relative" })
    }
  }

  function effectSlideCatalogue(status) {
    if(status){
      gsap.to("#firstWatch .offer__image", { duration: 2,  ease: "back.out(1.7)", opacity: 1, x: -350 });
      gsap.to("#firstWatch .offer__description", { duration: 2,  ease: "power2.out", opacity: 1, y: -200 });
    }
  }
})
  




