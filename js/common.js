$(function(){
	var w=$('.btns').width();
	$('.btns').css('height',w*0.37);
	var w1=$('#left').width();
	$('#left').css('height',w1);
	$('#right').css('height',w1);
	var h=$(window).height();
	$('body').css('height',h);
});
