


// when the page loads get p value for total time and set the html to be the session storage variable

var minutes;
var seconds = "00";



$('#start-now').one('click', function () {

  if (sessionStorage.timer==7) {
    loopVideos(1);
    minutes = "7";
  }

  else if (sessionStorage.timer==15) {
    loopVideos(2);
    minutes = "15";
  }

  else if (sessionStorage.timer==30) {
    loopVideos(4);
    minutes = "30";
  }
  else if (sessionStorage.timer==60) {
    loopVideos(8);
    minutes = "60";
  }
  countdownTimer();
  // loopVideos();
  //Other things
  $('.workout-timer').hide();
  $('#total-timer-countdown').show();

});


function countdownTimer () {


  setInterval(function(mainTimer) {
    seconds -= 1;
    if (minutes < 0) return;

    if (seconds < 0 && minutes != 0) {
      minutes -= 1;
      seconds = 59;
    }
    else if (seconds < 10 && seconds.length != 2) seconds = '0' + seconds;
    if (minutes < 10 && minutes.length != 2) minutes = '0' + minutes;
    $('.main-timer').html(minutes + ":" + seconds);
  }, 1000);

}

  var time = sessionStorage.timer
  $('#total-time').html(time);
  // $('.exercise-video').hide();


function loopVideos(num) {
  if (num == 0) {
    $(".countdown").hide();
    $('h2').show();
  }
  else if (num > 0) {
    $(".video-1").show();
    setTimeout(function() { $(".video-1").hide(); }, 60000);
    setTimeout(function() { $(".video-2").show(); }, 60000);
    setTimeout(function() { $(".video-2").hide(); }, 120000);
    setTimeout(function() { $(".video-3").show(); }, 120000);
    setTimeout(function() { $(".video-3").hide(); }, 180000);
    setTimeout(function() { $(".video-4").show(); }, 180000);
    setTimeout(function() { $(".video-4").hide(); }, 240000);
    setTimeout(function() { $(".video-5").show(); }, 240000);
    setTimeout(function() { $(".video-5").hide(); }, 300000);
    setTimeout(function() { $(".video-6").show(); }, 300000);
    setTimeout(function() { $(".video-6").hide(); }, 360000);
    setTimeout(function() { $(".video-7").show(); }, 360000);
    setTimeout(function() { $(".video-7").hide(); loopVideos(num-1);}, 420000);


  }
  
}



$("#start-now").click(function(e) {
  e.preventDefault();


  $('html,body').animate({
    scrollTop: $(".video-section").offset().top},
    'slow');




  function countdown(){
    var n=$('.countdown').attr('id');
    var countdown=n;
    $('.countdown').html(countdown);
    setInterval(function(){
      countdown--;
      if(countdown>=0){
        $('.countdown').html(countdown);
      }
      if(countdown==0){
        $('.countdown').html(n);
      }
    },1000);
  }

// Start
countdown();


// Loop
// setInterval(function(){
//   countdown();
// },5000);
setInterval(function(){
  countdown();
},60000);




  // $(".video-1").show();
  // setTimeout(function() { $(".video-1").hide(); }, 5000);
  //   setTimeout(function() { $(".video-2").show(); }, 5000);
  //    setTimeout(function() { $(".video-2").hide(); }, 10000);
  //     setTimeout(function() { $(".video-3").show(); }, 10000);
  //     setTimeout(function() { $(".video-3").hide(); }, 15000);
  //     setTimeout(function() { $(".video-4").show(); }, 15000);
  //     setTimeout(function() { $(".video-4").hide(); }, 20000);
  //     setTimeout(function() { $(".video-5").show(); }, 20000);
  //     setTimeout(function() { $(".video-5").hide(); }, 25000);
  //     setTimeout(function() { $(".video-6").show(); }, 25000);
  //     setTimeout(function() { $(".video-6").hide(); }, 30000);
  //       setTimeout(function() { $(".countdown").hide(); }, 30000);
  //     setTimeout(function() { $('h2').show(); }, 30000);

  // setTimeout(function() {
  //   $('.video-1').hide() },3000);
  // }

  //first it would play the first video then use  Window setTimeout() Method - W3Schools  to time how loong it will be until you hide previous 
//when they submit the #signup-form


});

var stickyNavOffset = $('nav').offset().top;
console.log('sticky nav offset is: ' + stickyNavOffset)

console.log('distance scrolled: ' + $(window).scrollTop() )
$(window).on('scroll', function () {
  if ($(window).scrollTop() > stickyNavOffset) { 
    $('nav').addClass('scrolled');
    // $('.nav-button').css('background-color', 'white');
  }
// if ($(window).scrollTop() == 0) {
//   $('nav').removeClass('scrolled');
// }

else{
  $('nav').removeClass('scrolled');
}
});




$('.start-button').on('click', function (){
  $('.signup-form').show();
  $('.signup-form').addClass('style-form');
  $('nav').addClass('scrolled');
});

$('#submit-button').on('click', function (e){
  e.preventDefault();

  var time=$('#time1').val();
  console.log(time)

  var type=$('#type1').val();
  console.log(type)

  if (type=="cardio") {
    window.location.href ="cardio.html";

  }

  if (type=="core") {
   window.location.href ="core.html";


 }


 if (type=="lower") {
   window.location.href ="lower.html";

 }


 sessionStorage.timer = time;



});

$('.change').on('click', function (){
 window.location.href ="index.html";
});



// when user clicks on hamburger icon
$('.hamburger').on('click', function (e) {
  e.preventDefault();
// if the menu is closed, slide down,
//   if menu is closed slide up
$('.nav-menu').slideToggle();
$('nav').css("background-color","#000000")

});


$('#close').on('click', function (){
  $('.signup-form').hide();
});

$('nav a').on('click', function(e) {

  e.preventDefault();

  var thisTarget = $(this).attr('href');
  // get that section's top offset
  var targetOffset = $(thisTarget).offset().top;
  // use jQuery.animate() to animate the body's
  // scrollTop to the targetOffest
  $('body').animate({
    scrollTop: targetOffset -140
  }, 600);
});


// var time=sessionStorage.timer

// var counter=setInterval(timer2, 1000); //1000 will  run it every 1 second

// function timer2() {
//   time=time-1;
//   if (time <= 0)
//   {
//      clearInterval(counter);
//      return;
//   }

//  document.getElementById("timer2").innerHTML=time + " seconds"; 
// }




// var count=5;

// var counter=setInterval(timer, 1000); //1000 will  run it every 1 second


// function timer()
// {
//   count=count-1;
//   if (count <= 0)
//   {
//      clearInterval(counter);
//      return;
//   }

//  document.getElementById("timer").innerHTML=count + " secs"; // watch for spelling
// }

// function countdown(){
//   var n=$('.countdown').attr('id');
//     var countdown=n;
//   $('.countdown').text(countdown);
//   setInterval(function(){
//     countdown--;
//     if(countdown>=0){
//       $('.countdown').text(countdown);
//     }
//         if(countdown==0){
//             $('.countdown').text(n);
//         }
//   },1000);
// }

// // Start
// countdown();

// // Loop
// setInterval(function(){
//   countdown();
// },5000);


