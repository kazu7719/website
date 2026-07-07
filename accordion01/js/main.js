// #accordion-menuの中のdtをクリックした時に
$("#accordion-menu dt").on("click",function(){
// クリックした要素の次の要素がスライドして表示される
  $(this).next().slideToggle();
});