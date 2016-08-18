
$(function(){
  $(window).resize(function(){
    if($(this).width() > 767){
	// add the following lines
	// http://stackoverflow.com/questions/14004318/show-random-image-from-array-in-javascript
	    //$imgArr = ["3.jpg", "4.jpg"];
	    //$basePath = "assets/images/";
	    //$rand = $imgArr[Math.floor(Math.random() * $imgArr.length)];
	    //$imag = $basePath + $rand;
      //$.backstretch($imag, {speed: 15});
      $.backstretch("http://oaf2qt3yk.bkt.clouddn.com/3.jpg", {speed: 10});
      //$.backstretch("http://oaf2qt3yk.bkt.clouddn.com/3_meitu_1.jpg", {speed: 10});
      $('#backstretch').show();
    } else {
      $('#backstretch').hide();
      }
  })
  .resize();//trigger resize on page load
});
