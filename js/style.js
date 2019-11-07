$(function(){
		window.onload = function() {
		var fontSize = $(window).width() / 18.75; //屏幕的宽
		$("html").css("font-size", fontSize + "px");
		console.log("font-size = "+fontSize+"px;")
	}
	window.onresize = function() {
		window.onload()
	}
})