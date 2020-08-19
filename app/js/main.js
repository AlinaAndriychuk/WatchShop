
$(function(){
  gsap.from(".header__logo", {duration: 2, x: 300, opacity: 0, scale: 0.5});
  gsap.from(".header__item", {duration: 2, y: -50, opacity: 0, scale: 0.5});
  gsap.from(".header__title", { duration: 2, ease: "back.out(1.7)", x: -300 });
  gsap.from(".header__text", { duration: 2, ease: "back.out(1.7)", x: 200 });

  let current = true,
    current1 = true,
    current2 = true,
    current3 = true,
    current4 = true
    current5 = true,
    current6 = true;

  $(window).scroll(function() {
    if ($(this).scrollTop() > 300 && $(this).scrollTop() < 900) {
      effectSlideUp(current);
      current = false;
    } if($(this).scrollTop() > 1000 && $(this).scrollTop() < 1700) {
      effectSlideCatalogue(current1);
      current1 = false;
    } if($(this).scrollTop() > 1600 && $(this).scrollTop() < 2200) {
      effectSlideCatalogueTwo(current2);
      current2 = false;
    } if($(this).scrollTop() > 2100 && $(this).scrollTop() < 2750) {
      effectSlideCatalogueThree(current3);
      current3 = false;
    } if($(this).scrollTop() > 2600 && $(this).scrollTop() < 3150) {
      effectRounds(current4);
      current4 = false;
    } if($(this).scrollTop() > 3000 && $(this).scrollTop() < 3500) {
      effectSlideToTheLeft(current5);
      current6 = false;
    }
  });

  function effectSlideUp(status){
    if(status){
      gsap.to(".description__content", { duration: 2,  ease: "back.out(1.7)", opacity: 1, y: -100 });
    }
  }

  function effectSlideCatalogue(status) {
    if(status){
      gsap.to("#firstWatch .offer__image", { duration: 2,  ease: "back.out(1.7)", opacity: 1, x: -250 });
      gsap.to("#firstWatch .offer__description", { duration: 2,  ease: "power2.out", opacity: 1, y: -200 });
    }
  }

  function effectSlideCatalogueTwo(status) {
    if(status){
      gsap.to("#secondWatch .offer__image--right", { duration: 2,  ease: "back.out(1.7)", opacity: 1, x: 300 });
      gsap.to("#secondWatch .offer__description--right", { duration: 2,  ease: "power2.out", opacity: 1, y: -200 });
    }
  }

  function effectSlideCatalogueThree(status) {
    if(status){
      gsap.to("#thirdWatch .offer__image", { duration: 2,  ease: "back.out(1.7)", opacity: 1, x: -250 });
      gsap.to("#thirdWatch .offer__description", { duration: 2,  ease: "power2.out", opacity: 1, y: -200 });
    }
  }

  function effectRounds(status) {
    if(status){
      gsap.to(".feature__image", {duration: 1.3, y: 0, height: 100, opacity: 1, scale: 1});
    }
  }

  function effectSlideToTheLeft(status) {
    if(status){
      gsap.to(".other-offers .offer__image", {duration: 2, opacity: 1, scale: 1, x: 300});
      gsap.to(".other-offers .offer__description", { duration: 2,  ease: "power2.out", opacity: 1, y: -200 });
    }
  }
})



