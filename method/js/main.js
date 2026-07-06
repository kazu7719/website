// ①.click()
$(".b1").on("click",function(){
  alert("clickしました。");
});

// ②.fadeIn()
$(".b2").on("click",function(){
    $(".in").fadeIn(500);
});

// ③.fadeOut()
$(".b3").on("click",function(){
    $(".out").fadeOut(500);
});

// ④.show()
$(".b4").on("click",function(){
    $(".show").show(500);
});

// ⑤.hide()
$(".b5").on("click",function(){
    $(".hide").hide(500);
});

// ⑥.toggle()
$(".b6").on("click",function(){
    $(".toggle").toggle(500);
});

// ⑦.addClass()
$(".b7").on("click",function(){
    $(".b7").addClass("red");
});

// ⑧.removeVlass()
$(".b8").on("click",function(){
    $(".b8").removeClass("red");
});

// ⑨.toggleClass()
$(".b9").on("click",function(){
    $(".b9").toggleClass("red");
});