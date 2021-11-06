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


//loading spinner
window.onload = function(){
    var spinner = document.getElementById("sp");
    document.body.style.overflow="hidden";
    
    setTimeout(function(){
        spinner.style.display = "none";
        document.body.style.overflow="auto";

    },3000);
}

/*===== header Sroll =====*/
$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $('header').addClass('black');
    }
    else{
        $('header').removeClass('black');
    }
})


/*home page animation */
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

/*======================================================== About ============================================== */
