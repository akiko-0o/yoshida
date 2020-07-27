$(function(){
    var imgs = $(".slide__wrap > li");
    var imgLen = imgs.length;
    var count = 0;
    function changeImg(){
      //スライド切替のポイント（配列を順番に処理し終わったら配列の先頭に戻る計算式）
      count = (count + 1) % imgLen; 
      imgs.removeClass("slide__show").eq(count).addClass("slide__show");
    }
    setInterval(changeImg, 4000); //切替の間隔（ミリ秒）
  });


$(function() {
  $(".hamburger__button").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(".hamburger__wrap")
        .addClass("close")
        .removeClass("open");
    } else {
      $(this).addClass("active");
      $(".hamburger__wrap")
        .addClass("open")
        .removeClass("close");
    }
  });

  $(window).on('scroll', function(){
    var docHeight = $(document).innerHeight(), //ドキュメントの高さ
        windowHeight = $(window).innerHeight(), //ウィンドウの高さ
        pageBottom = docHeight - windowHeight; //ドキュメントの高さ - ウィンドウの高さ
    if(pageBottom <= $(window).scrollTop()) {
      document.getElementsByClassName("hamburger").style.display ="none";
    }
});

});