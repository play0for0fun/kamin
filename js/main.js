pricebs11kk = [14,22,33,43,55];
pricebs11pl = [12.43,23.54,32.23,76.54,
			   12.43,23.54,32.23,76,54,
			   12.43,23.54,32.23,76,54,
			   12.43,23.54,32.23,76,54,
			   12.43,23.54,32.23,76,54,
			   12.43,23.54,32.23,76,54,
			   12.43,23.54,32.23,76,54,
			   12.43,23.54,32.23,76,54,
			   12.43,23.54,32.23,76,54];
pricebs11pr = [8000,43243,12312,16886,16886,
			   8000,43243,12312,16886,16886,
			   8000,43243,12312,16886,16886,
			   8000,43243,12312,16886,16886,
			   8000,43243,12312,16886,16886,
			   8000,43243,12312,16886,16886,
			   8000,43243,12312,16886,16886,
			   8000,43243,12312,16886,16886,
			   8000,43243,12312,16886,16886];
pricebs11zs = [1,1,0,1,0,
			   0,1,1,0,1,
			   1,0,1,1,0,
			   1,0,0,1,0,
			   1,0,0,1,0,
			   1,0,0,1,0,
			   1,0,0,1,0,
			   1,0,0,1,0,
			   1,0,0,1,0];
pricebs4kk = [14,22,33,43,55,12,13,14,15,16,17];
pricebs4kk1 = [1,2,3,4,5,2,3,4,5,6,7];
pricebs4pl = [12.43,23.54,32.23,76.54,12.43,23.54,32.23,76.54,32.23,
			   12.43,23.54,32.23,76,54,12.43,23.54,32.23,76.54,32.23,
			   12.43,23.54,32.23,76,54,12.43,23.54,32.23,76.54,32.23,
			   12.43,23.54,32.23,76,54,12.43,23.54,32.23,76.54,32.23,
			   12.43,23.54,32.23,76,54,12.43,23.54,32.23,76.54,32.23,
			   12.43,23.54,32.23,76,54,12.43,23.54,32.23,76.54,32.23,
			   12.43,23.54,32.23,76,54,12.43,23.54,32.23,76.54,32.23,
			   12.43,23.54,32.23,76,54,12.43,23.54,32.23,76.54,32.23,
			   12.43,23.54,32.23,76,54,12.43,23.54,32.23,76.54,32.23];
pricebs4pr = [8000,43243,12312,16886,16886,8000,43243,12312,16886,16886,123,
			   8000,43243,12312,16886,16886,8000,43243,12312,16886,16886,123,
			   8000,43243,12312,16886,16886,8000,43243,12312,16886,16886,123,
			   8000,43243,12312,16886,16886,8000,43243,12312,16886,16886,123,
			   8000,43243,12312,16886,16886,8000,43243,12312,16886,16886,123,
			   8000,43243,12312,16886,16886,8000,43243,12312,16886,16886,123,
			   8000,43243,12312,16886,16886,8000,43243,12312,16886,16886,123,
			   8000,43243,12312,16886,16886,8000,43243,12312,16886,16886,123,
			   8000,43243,12312,16886,16886,8000,43243,12312,16886,16886,123];
pricebs4zs = [1,1,0,1,0,1,1,0,1,0,1,
			   0,1,1,0,1,1,1,0,1,0,1,
			   1,0,1,1,0,1,1,0,1,0,1,
			   1,0,0,1,0,1,1,0,1,0,1,
			   1,0,0,1,0,1,1,0,1,0,1,
			   1,0,0,1,0,1,1,0,1,0,1,
			   1,0,0,1,0,1,1,0,1,0,1,
			   1,0,0,1,0,1,1,0,1,0,1,
			   1,0,0,1,0,1,1,0,1,0,1];
function getURLParameter(name) {return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;} 
$(document).ready(function(){
$('<link rel=stylesheet type=text/css href=css/style.css><link rel=stylesheet type=text/css href=css/jquery.bxslider.min.css><link rel=stylesheet type=text/css href=css/jquery.fancybox.min.css>').appendTo('head');
//map1
$('#mapbg').maphilight({fillColor: '00ff00',shadowColor: 'ffffff',strokeColor: '4d7000',fillOpacity: 0.4});
$('#mapblock1').children('div').css("z-ndex",6);
$("area").click(function(event) {event.preventDefault()});
$('.area1').hover(function(){$('#s'+$(this).attr('id')).fadeIn(100);}, function(){$('#s'+$(this).attr('id')).fadeOut(50);} )
//stan
$('.mena2').click(function(){$("html, body").animate({ scrollTop: $($(this).attr('href')).offset().top-75}, 2000);});
$('#contfot').click(function(){$("html, body").animate({ scrollTop: $('#thirteen').offset().top-75}, 2000);});
$('#sposopl').click(function(){$("html, body").animate({ scrollTop: $('#sber').offset().top-75}, 1000);});
$('.lop').width(($('body').width()-980)/2);
$('#map1').mouseleave(function(){$('.lop').show()});
$('#map2').mouseleave(function(){$('.lop').show()});
$('.lop').click(function(){$(this).hide()});
//aftermodal
 utm=[];$.each(["utm_source","utm_medium","utm_campaign","utm_term",'source_type','source','position_type','position','added','creative','matchtype'],function(i,v){utm[v]=getURLParameter(v) || $.cookie(v);$.cookie(v, utm[v], { expires: 365, path: '/' });$('<input type="hidden" />').attr({name: v, id: v, value: function(){if(getURLParameter(v) == undefined)return '-'; else return getURLParameter(v)}}).appendTo("#hidden-box")}); 
 $('input[name="phone"]').mask("8 (999) 999-99-99");
 $('input[name="phone"]').blur(function() {if($(this).val().length != 17) {$(this).addClass('error13');}});
 $('input[name="phone"]').focus(function() {$(this).removeClass('error13');});
 $('.pop1btn').click(function(){$('#pop1').arcticmodal()});
 $('.pop2btn').click(function(){$('#pop2').arcticmodal()});
 $('.pop3btn').click(function(){$('#pop3').arcticmodal()});
 $('.pop4btn').click(function(){$('#pop4').arcticmodal()});
 $('.subm').click(function(event) {
	if($(this).parent().children('input[name="phone"]').val().length == 17) {
		var $phone = $(this).parent().children('input[name="phone"]').val();
		var $name = $(this).parent().children('input[name="name"]').val();
		var $email = $(this).parent().children('input[name="email"]').val();
		if($(this).hasClass('mbmbtn') && $(this).parent().parent().children('.mbmr').children('.mbmrh').children('.kvartid').html() != ' '){var $kvart = $(this).parent().parent().children('.mbmh2').text()+' '+$(this).parent().parent().children('.mbmr').children('.mbmrh').text();}
		var $utm_source = $('#utm_source').val();
		var $utm_medium = $('#utm_medium').val();
		var $utm_campaign = $('#utm_campaign').val();
		var $utm_term = $('#utm_term').val();
		var $source_type = $('#source_type').val();
		var $source = $('#source').val();
		var $position_type = $('#position_type').val();
		var $position = $('#position').val();
		var $added = $('#added').val();
		var $creative = $('#creative').val();
		var $matchtype = $('#matchtype').val();	
		$.ajax({
			type: "post",
			url: 'ajax/mail.php',
			data: {
				phone: $phone,name: $name,email: $email, kvart: $kvart,
				utm_source: $utm_source,utm_medium: $utm_medium,utm_campaign: $utm_campaign,utm_term: $utm_term,source_type: $source_type,source: $source,position_type: $position_type,position: $position,added: $added,creative: $creative,matchtype: $matchtype		
			},success : function(){$.arcticmodal('close');$('#okgo').arcticmodal();}
		}); 
	}
	else{$(this).parent().children('input[name="phone"]').addClass('error13');}		
});
//mbmaps
$('#mabmbm1img').maphilight({fillColor: '00ff00',shadowColor: 'ffffff',strokeColor: '4d7000',fillOpacity: 0.4});
$('.mabmbm1a').click(function(){
if($(this).hasClass("zank")){return false} else{
if($(this).is("#mabmbm1ac")){
var data = $(this).mouseout().data('maphilight') || {};
data.alwaysOn = false;
$(this).data('maphilight', data).trigger('alwaysOn.maphilight');
$('#mabmbm1ac').removeAttr('id'); 
}
else{
if ($("#mabmbm1ac").length ) {
var data2 = $('#mabmbm1ac').mouseout().data('maphilight') || {};
data2.alwaysOn = false;
$('#mabmbm1ac').data('maphilight', data2).trigger('alwaysOn.maphilight');
$('#mabmbm1ac').removeAttr('id'); 
}
var data = $(this).mouseout().data('maphilight') || {};
data.alwaysOn = true;
$(this).data('maphilight', data).trigger('alwaysOn.maphilight');
$(this).attr('id','mabmbm1ac');
numbpr= parseInt($(this).attr('data-nmb')) + (parseInt($('.mbmconp1').children('.mbmconeaa').html()) - 1)*5;
$('#mbmnk1').html(numbpr);
$('#mbmnkp1').html(pricebs11kk[parseInt($(this).attr('data-nmb'))-1]);
$('#mbmnkp2').html(pricebs11pl[numbpr-1]);
$('#mbmnkp4').html(pricebs11pr[numbpr-1]);
if(pricebs11zs[numbpr-1] == 1){$('#mbmnkp3').html('ПРОДАНА').attr('class','prod');}else{$('#mbmnkp3').html('СВОБОДНА').attr('class','svob');}
}
}
});
$('.mabmbm1a').mouseenter(function(){
if ($("#mabmbm1ac").length ) {return false} else{
numbpr= parseInt($(this).attr('data-nmb')) + (parseInt($('.mbmconp1').children('.mbmconeaa').html()) - 1)*5;
$('#mbmnk1').html(numbpr);
$('#mbmnkp1').html(pricebs11kk[parseInt($(this).attr('data-nmb'))-1]);
$('#mbmnkp2').html(pricebs11pl[numbpr-1]);
$('#mbmnkp4').html(pricebs11pr[numbpr-1]);
if(pricebs11zs[numbpr-1] == 1){$('#mbmnkp3').html('ПРОДАНА').attr('class','prod');}else{$('#mbmnkp3').html('СВОБОДНА').attr('class','svob');}
}
});
$('#mbmfrmw1').mouseenter(function(){
if ($("#mabmbm1ac").length ) {return false} else{
$('#mbmnk1').html(' ');
$('#mbmnkp1').html(' ');
$('#mbmnkp2').html(' ');
$('#mbmnkp4').html(' ');
}
});
$('.mbmcone1').click(function(){
$('.mbmcone1').removeClass('mbmconeaa');
$(this).addClass('mbmconeaa');
$("#mm1et").html($(this).html());
if ($("#mabmbm1ac").length ) {$('#mabmbm1ac').removeAttr('id');}
for(var i = 0; i < 5; i++){
fms = i + (parseInt($(this).html())-1)*5;
b=i+1;
var datak = $('.mabmbm1a[data-nmb="'+b+'"]').mouseout().data('maphilight') || {};
datak.alwaysOn = false;
if(pricebs11zs[fms] == 0){
$('.mabmbm1a[data-nmb="'+b+'"]').removeClass('zank');
datak.strokeColor = '4d7000';
datak.fillColor = '00ff00';}
else{
$('.mabmbm1a[data-nmb="'+b+'"]').addClass('zank');
datak.strokeColor = 'ff0000';
datak.fillColor = 'ff0000';
}
$('.mabmbm1a[data-nmb="'+b+'"]').data('maphilight', datak).trigger('strokeColor.maphilight').trigger('fillColor.maphilight').trigger('alwaysOn.maphilight');
}
});
$('.area1').click(function(){
if($(this).attr('id').substring(0,1) == 'b'){
$('.mbmcone1[data-atg="'+$(this).attr('id').substring(1)+'"]').trigger('click');
$('#mpop1').arcticmodal();
}
else{
$('.mbmcone2[data-atg="'+$(this).attr('id').substring(1)+'"]').trigger('click');
$('#mpop2').arcticmodal();
}
});
//mbmap2
$('#mabmbm2img').maphilight({fillColor: '00ff00',shadowColor: 'ffffff',strokeColor: '4d7000',fillOpacity: 0.4});
$('#mabmbm3img').maphilight({fillColor: '00ff00',shadowColor: 'ffffff',strokeColor: '4d7000',fillOpacity: 0.4});

$('.mabmbm2a').click(function(){
if($(this).hasClass("zank")){return false} else{
if($(this).is("#mabmbm2ac")){
var data = $(this).mouseout().data('maphilight') || {};
data.alwaysOn = false;
$(this).data('maphilight', data).trigger('alwaysOn.maphilight');
$('#mabmbm2ac').removeAttr('id'); 
}
else{
if ($("#mabmbm2ac").length ) {
var data2 = $('#mabmbm2ac').mouseout().data('maphilight') || {};
data2.alwaysOn = false;
$('#mabmbm2ac').data('maphilight', data2).trigger('alwaysOn.maphilight');
$('#mabmbm2ac').removeAttr('id'); 
}
var data = $(this).mouseout().data('maphilight') || {};
data.alwaysOn = true;
$(this).data('maphilight', data).trigger('alwaysOn.maphilight');
$(this).attr('id','mabmbm2ac');
numbpr= parseInt($(this).attr('data-nmb')) + (parseInt($('.mbmconp2').children('.mbmconeaa').html()) - 1)*11;
$('#mbmnk2').html(numbpr);
if($('#mbmcn2').is(':visible')){$('#mbmnkp12').html(pricebs4kk1[parseInt($(this).attr('data-nmb'))-1]);}
else{$('#mbmnkp12').html(pricebs4kk[parseInt($(this).attr('data-nmb'))-1]);}
$('#mbmnkp22').html(pricebs4pl[numbpr-1]);
$('#mbmnkp42').html(pricebs4pr[numbpr-1]);
if(pricebs4zs[numbpr-1] == 1){$('#mbmnkp32').html('ПРОДАНА').attr('class','prod');}else{$('#mbmnkp32').html('СВОБОДНА').attr('class','svob');}
}
}
});
$('.mabmbm2a').mouseenter(function(){
if ($("#mabmbm2ac").length ) {return false} else{
numbpr= parseInt($(this).attr('data-nmb')) + (parseInt($('.mbmconp2').children('.mbmconeaa').html()) - 1)*11;
$('#mbmnk2').html(numbpr);
if($('#mbmcn2').is(':visible')){$('#mbmnkp12').html(pricebs4kk1[parseInt($(this).attr('data-nmb'))-1]);}
else{$('#mbmnkp12').html(pricebs4kk[parseInt($(this).attr('data-nmb'))-1]);}
$('#mbmnkp22').html(pricebs4pl[numbpr-1]);
$('#mbmnkp42').html(pricebs4pr[numbpr-1]);
if(pricebs4zs[numbpr-1] == 1){$('#mbmnkp32').html('ПРОДАНА').attr('class','prod');}else{$('#mbmnkp32').html('СВОБОДНА').attr('class','svob');}
}
});
$('#mbmfrmw2').mouseenter(function(){
if ($("#mabmbm2ac").length ) {return false} else{
$('#mbmnk2').html(' ');
$('#mbmnkp12').html(' ');
$('#mbmnkp22').html(' ');
$('#mbmnkp42').html(' ');
}
});
$('.mbmcone2').click(function(){
if($(this).html() == '1'){$('#mbmcn').hide();$('#mbmcn2').show();}
else if($('#mbmcn2').is(':visible')){$('#mbmcn2').hide();$('#mbmcn').show();}
$('.mbmcone2').removeClass('mbmconeaa');
$(this).addClass('mbmconeaa');
$("#mm2et").html($(this).html());
if ($("#mabmbm2ac").length ) {$('#mabmbm2ac').removeAttr('id');}
for(var i = 0; i < 11; i++){
fms = i + (parseInt($(this).html())-1)*11;
b=i+1;
var datak = $('.mabmbm2a[data-nmb="'+b+'"]').mouseout().data('maphilight') || {};
datak.alwaysOn = false;
if(pricebs4zs[fms] == 0){
$('.mabmbm2a[data-nmb="'+b+'"]').removeClass('zank');
datak.strokeColor = '4d7000';
datak.fillColor = '00ff00';}
else{
$('.mabmbm2a[data-nmb="'+b+'"]').addClass('zank');
datak.strokeColor = 'ff0000';
datak.fillColor = 'ff0000';
}
$('.mabmbm2a[data-nmb="'+b+'"]').data('maphilight', datak).trigger('strokeColor.maphilight').trigger('fillColor.maphilight').trigger('alwaysOn.maphilight');
}
});
//mbmaps3
$('#mabmbm1img2').maphilight({fillColor: '00ff00',shadowColor: 'ffffff',strokeColor: '4d7000',fillOpacity: 0.4});
$('.mabmbm3a').click(function(){$('.mbmcone1[data-atg="'+$('.mbmconp3').children('.mbmconeaa').html()+'"]').trigger('click');$('#mpop1').arcticmodal();});
$('.mabmbm3a').mouseenter(function(){
if ($("#mabmbm3ac").length ) {return false} else{
numbpr= parseInt($(this).attr('data-nmb')) + (parseInt($('.mbmconp3').children('.mbmconeaa').html()) - 1)*5;
$('#mbmnk3').html(numbpr);
$('#mbmnkp13').html(pricebs11kk[parseInt($(this).attr('data-nmb'))-1]);
$('#mbmnkp23').html(pricebs11pl[numbpr-1]);
$('#mbmnkp43').html(pricebs11pr[numbpr-1]);
if(pricebs11zs[numbpr-1] == 1){$('#mbmnkp33').html('ПРОДАНА').attr('class','prod');}else{$('#mbmnkp33').html('СВОБОДНА').attr('class','svob');}
}
});
$('.mbmcone3').click(function(){
$('.mbmcone3').removeClass('mbmconeaa');
$(this).addClass('mbmconeaa');
$("#mm3et").html($(this).html());
if ($("#mabmbm3ac").length ) {$('#mabmbm3ac').removeAttr('id');}
for(var i = 0; i < 5; i++){
fms = i + (parseInt($(this).html())-1)*5;
b=i+1;
var datak = $('.mabmbm3a[data-nmb="'+b+'"]').mouseout().data('maphilight') || {};
datak.alwaysOn = false;
if(pricebs11zs[fms] == 0){
$('.mabmbm3a[data-nmb="'+b+'"]').removeClass('zank');
datak.strokeColor = '4d7000';
datak.fillColor = '00ff00';}
else{
$('.mabmbm3a[data-nmb="'+b+'"]').addClass('zank');
datak.strokeColor = 'ff0000';
datak.fillColor = 'ff0000';
}
$('.mabmbm3a[data-nmb="'+b+'"]').data('maphilight', datak).trigger('strokeColor.maphilight').trigger('fillColor.maphilight').trigger('alwaysOn.maphilight');
}
});
//mbmap4
$('#mabmbm2img2').maphilight({fillColor: '00ff00',shadowColor: 'ffffff',strokeColor: '4d7000',fillOpacity: 0.4});
$('#mabmbm3img2').maphilight({fillColor: '00ff00',shadowColor: 'ffffff',strokeColor: '4d7000',fillOpacity: 0.4});
$('.mabmbm4a').click(function(){$('.mbmcone2[data-atg="'+$('.mbmconp4').children('.mbmconeaa').html()+'"]').trigger('click');$('#mpop2').arcticmodal();});
$('.mabmbm4a').mouseenter(function(){
if ($("#mabmbm4ac").length ) {return false} else{
numbpr= parseInt($(this).attr('data-nmb')) + (parseInt($('.mbmconp4').children('.mbmconeaa').html()) - 1)*11;
$('#mbmnk4').html(numbpr);
if($('#mbm2cn2').is(':visible')){$('#mbmnkp14').html(pricebs4kk1[parseInt($(this).attr('data-nmb'))-1]);}
else{$('#mbmnkp14').html(pricebs4kk[parseInt($(this).attr('data-nmb'))-1]);}
$('#mbmnkp24').html(pricebs4pl[numbpr-1]);
$('#mbmnkp44').html(pricebs4pr[numbpr-1]);
if(pricebs4zs[numbpr-1] == 1){$('#mbmnkp34').html('ПРОДАНА').attr('class','prod');}else{$('#mbmnkp34').html('СВОБОДНА').attr('class','svob');}
}
});
$('.mbmcone4').click(function(){
if($(this).html() == '1'){$('#mbm2cn').hide();$('#mbm2cn2').show();}
else if($('#mbm2cn2').is(':visible')){$('#mbm2cn2').hide();$('#mbm2cn').show();}
$('.mbmcone4').removeClass('mbmconeaa');
$(this).addClass('mbmconeaa');
$("#mm4et").html($(this).html());
if ($("#mabmbm4ac").length ) {$('#mabmbm4ac').removeAttr('id');}
for(var i = 0; i < 11; i++){
fms = i + (parseInt($(this).html())-1)*11;
b=i+1;
var datak = $('.mabmbm4a[data-nmb="'+b+'"]').mouseout().data('maphilight') || {};
datak.alwaysOn = false;
if(pricebs4zs[fms] == 0){
$('.mabmbm4a[data-nmb="'+b+'"]').removeClass('zank');
datak.strokeColor = '4d7000';
datak.fillColor = '00ff00';}
else{
$('.mabmbm4a[data-nmb="'+b+'"]').addClass('zank');
datak.strokeColor = 'ff0000';
datak.fillColor = 'ff0000';
}
$('.mabmbm4a[data-nmb="'+b+'"]').data('maphilight', datak).trigger('strokeColor.maphilight').trigger('fillColor.maphilight').trigger('alwaysOn.maphilight');
}
});
$('.mbmcone[data-atg="5"]').trigger('click');
//car1
slider3 = $('.bxslider3').bxSlider({slideWidth:191,pager:false, minSlides: 4,maxSlides: 4, moveSlides: 1,controls:false, auto:true, speed: 400});
$('#car1l').click(function(){slider3.goToPrevSlide();});
$('#car1r').click(function(){slider3.goToNextSlide();});
//car2
slider4 = $('.bxslider4').bxSlider({slideWidth:190,pager:false, minSlides: 4,maxSlides: 4, moveSlides: 1,controls:false, auto:true, speed: 400});
$('#car22l').click(function(){slider4.goToPrevSlide();});
$('#car22r').click(function(){slider4.goToNextSlide();});
//aftercar
$('.fancy').fancybox({helpers : { overlay : { locked : false } }});
});
$(window).load(function(){
$('.landingMenu').liLanding();
$('#fbad').load('ajax/fb.html',function() {
//control
$('.contnumb').click(function(){
$('#mapblocker').css("z-index",0);
$('.contnumb').removeClass('contact');
$(this).addClass('contact');
var step = $(this).html();
$('.fbimg').css("z-ndex",2);
if (step < 7){
if (step < 4){$('#mapblocker').css("z-index",7);}
var selectimg = '#step'+step;
$(selectimg).css("z-ndex",3).fadeIn(300);
$('.fbimg').not(selectimg).delay(300).fadeOut(0);
}
else{$('.fbimg').fadeOut(300)}
});
});
$('#sld1con').load('ajax/sld1.html',function() {
//sld1
slider1 = $('.bxslider1').bxSlider({pagerCustom: '.bxslider1p',controls:false, auto:true, speed: 1000});
$('#bxs1l').click(function(){slider1.goToPrevSlide();});
$('#bxs1r').click(function(){slider1.goToNextSlide();});});
$('#sldf2').load('ajax/sld2.html',function() {
  //sld2
slider2 = $('.bxslider2').bxSlider({pagerCustom: '.bxslider2p',controls:false, auto:true, speed: 1000});
$('#bxs2l').click(function(){slider2.goToPrevSlide();});
$('#bxs2r').click(function(){slider2.goToNextSlide();});
});
$('<iframe frameborder="no" style="border:none;width: 100%;height: 599px;" src="ajax/map1.html"></iframe>').appendTo('#map1');
$('<iframe frameborder="no" style="border:none;width: 100%;height: 400px;" src="ajax/map2.html"></iframe>').appendTo('#map2');
})