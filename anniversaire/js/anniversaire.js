$(function(){
var h1 = $('h1');
var $m1 = $('#m1');
var $m2 = $('#m2');
var $m3 = $('#m3');
var $mon_image = $('#mon_image');

$(document).ready(function (){
	$("h1").click(function(){
		$("#m1").fadeIn(2000).click(function(){
			$("#m2").fadeIn(6000).click(function(){
				$("#m3").fadeIn(9000);
				});
			});
		});
	});
});
