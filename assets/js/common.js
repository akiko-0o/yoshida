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

$(window).bind("scroll", function() {
	scrollHeight = $(document).height();
	scrollPosition = $(window).height() + $(window).scrollTop();
	if ( (scrollHeight - scrollPosition) / scrollHeight <= 0.104) {
		document.getElementById("hamburger").style.display = "none";
	} else {
		document.getElementById("hamburger").style.display = "block";
	}
});


// $(function () {
//   $('#openmodal').click(function(){
//       $('#modalarea').fadeIn();
//   });
//   $('#closemodal , #modalbg').click(function(){
//     $('#modalarea').fadeOut();
//   });
// });


$('.modal').modaal({
	type: 'ajax',	// コンテンツのタイプを指定
	animation_speed: '500', 	// アニメーションのスピードをミリ秒単位で指定
	background: '#fff',	// 背景の色を白に変更
	overlay_opacity: '0.9',	// 背景のオーバーレイの透明度を変更
	fullscreen: 'true',	// フルスクリーンモードにする
	background_scroll: 'true',	// 背景をスクロールさせるか否か
	loading_content: 'Now Loading, Please Wait.'	// 読み込み時のテキスト表示
});


});