// loading screen
$('.logo-fade').each(function(){
  $(this).html($(this).text().replace(/\//ig, "<span class='slash'>$&</span>"));
});
$('.logo-move').each(function(){
  $(this).html($(this).text().replace(/(\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: true})
  .add({
    targets: '.slash',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 2000,
  })
  .add({
    targets: '.logo-move .letter',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: function(el, i) {
      return 300 + 30 * i;
    }
  }).add({
    targets: '.logo-move .letter',
    translateY: [0,-100],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1200,
    delay: function(el, i) {
      return 100 + 30 * i;
    }
  }).add({
    targets: '.slash',
    opacity: [1,0],
    easing: "easeOutExpo",
    duration: 1400
  });
