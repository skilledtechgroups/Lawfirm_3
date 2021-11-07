/*======================== Sroll up btn ======================*/
var topBtn = document.getElementById("btnTop");
//scroll down => after 300px show btntop
window.onscroll = function(){
    if(document.documentElement.scrollTop > 300){
        topBtn.style.display= "block";
    }
    else{
        topBtn.style.display= "none";
    }
}

//onclick scroll top
topBtn.addEventListener("click" , function(){
    window.scroll({
        top:0,
        right:0,
        behavior:"smooth"
    });
});
/*======================== header Sroll ======================*/
$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $('header').addClass('black');
    }
    else{
        $('header').removeClass('black');
    }
})
/*=========================== home page animation =========================*/
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
});


// Wrap every letter in a span
var textWrapper = document.querySelector('.ml14 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml14 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeInOutExpo",
    duration: 900
  }).add({
    targets: '.ml14 .letter',
    opacity: [0,1],
    translateX: [40,0],
    translateZ: 0,
    scaleX: [0.3, 1],
    easing: "easeOutExpo",
    duration: 800,
    offset: '-=600',
    delay: (el, i) => 150 + 25 * i
  }).add({
    targets: '.ml14',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    // reset: true,
})


sr.reveal(`.ml6,
           .best-lawyers,
           .company-sec,
           .srvices__content,
           .footer-Lawyers,
           .footer-info,
           .client-title,
           .our-latest-news,
           .about__img-overlay,.about__container 
           .contact-us,
           .our-mission,
           .footer-items`,{
    origin: 'top',
    interval: 100,
})

/*swiper */
var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
});

//loading spinner
window.onload = function(){
  var spinner = document.getElementById("sp");
  document.body.style.overflow="hidden";
  
  setTimeout(function(){
      spinner.style.display = "none";
      document.body.style.overflow="auto";

  },3000);
}