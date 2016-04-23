$(function(){
$(document).ready(function(){
$('<link rel=stylesheet type=text/css href="css/libs.min.css"><link rel=stylesheet type=text/css href=css/style.min.css>').appendTo('head');
  setTimeout(function(){
  	if(!$('body').hasClass('loaded')) {
  		$('body').addClass('loaded');
  		initfullpage();
  	};
  },3000);

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  	if(!$('body').hasClass('loaded')) {
  		$('body').addClass('loaded')
  	};
    $('<style>section,.section{display:block}.animation,.animation2,.animation3{opacity:1}</style>').appendTo('head');
  $('body').addClass('loaded');
  }
$('.site-nav.down').click(function(e) {
    e.preventDefault();
    $.fn.fullpage.moveSectionDown();
  });
$('.site-nav.up').click(function(e) {
    e.preventDefault();
    $.fn.fullpage.moveSectionUp();
  });

  $('#zz-btn').click(function(e){
  	e.preventDefault();
  	$('#pop-zz').arcticmodal();
  });

  //menu

$('.menu-btn').click(function(){
  $('.menu').toggleClass('active');
});

$('.menu .menu-a').click(function(e){
  e.preventDefault();
  $("html, body").animate({ scrollTop: $($(this).attr('href')).offset().top}, 500);
  $('.menu').removeClass('active');
});


  $('.sec2 .item').click(function(){
    var cur_step = parseInt($(this).parent().parent().data('step'));
    var next_step = cur_step+1;
    $(this).parent().parent().fadeOut();
    $('.kalk-steps[data-step="'+next_step+'"]').fadeIn();
    $(this).parent().parent().parent().attr('data-step',next_step);
    $('input[name="'+$(this).data('inp-name')+'"]').val(($(this).find('h3').text()+$(this).find('h4').text()).toLowerCase());
  });

  $('.back').click(function(){    
    var cur_step = parseInt($('.block-cont').attr('data-step'));
    if (cur_step>1) {
      var prev_step = cur_step-1;
      $('.kalk-steps[data-step="'+cur_step+'"]').fadeOut();
      $('.kalk-steps[data-step="'+prev_step+'"]').fadeIn();
      $('.block-cont').attr('data-step',prev_step);
    }
  });

  $('.stone-item')
        .mousemove(function(e){
            $($(this).data('tooltip')).css({
                top: e.pageY + -65 + 'px',
                left: e.pageX + 35 + 'px'
            });
        })
        .hover(function(){
            $($(this).data('tooltip')).fadeIn(200);
        }, function(){
            $($(this).data('tooltip')).fadeOut(200);
        });

  $('.stone-pager').click(function() {
    $('.stone-pager').removeClass('active');
    $(this).addClass('active');
    $('.stone-wrap').fadeOut();
    $('.stone-wrap[data-page="'+$(this).data('page')+'"]').fadeIn();
  });

  var dropZone = $('#dropZone');

  dropZone[0].ondragover = function() {
    dropZone.addClass('hover');
    return false;
  };
    
  dropZone[0].ondragleave = function() {
    dropZone.removeClass('hover');
    return false;
  };

  dropZone[0].ondrop = function(event) {
    event.preventDefault();
    dropZone.removeClass('hover');

  var file = event.dataTransfer.files[0];
  xhr = new XMLHttpRequest();
  xhr.upload.addEventListener('progress', uploadProgress, false);
  xhr.onreadystatechange = stateChange;
  xhr.open('POST', 'ajax/upload.php', true);
  xhr.setRequestHeader('X-FILE-NAME', file.name);
  var fd = new FormData
  fd.append("file", file)
  xhr.send(fd)
  };

  $('#dropZone input').change(function(){
  var file = this.files[0];
  xhr = new XMLHttpRequest();
  xhr.upload.addEventListener('progress', uploadProgress, false);
  xhr.onreadystatechange = stateChange;
  xhr.open('POST', 'ajax/upload.php', true);
  xhr.setRequestHeader('X-FILE-NAME', file.name);
  var fd = new FormData
  fd.append("file", file)
  xhr.send(fd);
 
});

  function uploadProgress(event) {
    var percent = parseInt(event.loaded / event.total * 100);
    dropZone.find('.btn-fu').text('Загрузка: ' + percent + '%');
  }

  function stateChange(event) {
    if (event.target.readyState == 4) {
        if (event.target.status == 200) {
          //var fileResponse.responseText
            dropZone.find('.btn-fu').text(xhr.responseText);
            $('#filename').val(xhr.responseText);
        } else {
            dropZone.find('.btn-fu').text('Произошла ошибка!');
        }
    }
  }

  function getURLParameter(name) {return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;} 
    function run_geo(geo_url){
        $.ajax({type: 'GET',url: geo_url,dataType: 'xml',
            success: function(xml) {$(xml).find('ip').each(function(){
            var city = $(this).find('city').text();
            var region = $(this).find('region').text();
            if(city!=region){var ipg = city+', '+region;}else{var ipg = city;}
            $('<input type="hidden" />').attr({name: 'location', class: 'location', value:ipg}).appendTo("form");
        });}});
    }
    $.get("http://ipinfo.io", function(response) {geo_url='http://ipgeobase.ru:7020/geo?ip='+response.ip; run_geo(geo_url);}, "jsonp");
    utm=[];$.each(["utm_source","utm_medium","utm_campaign","utm_term",'source_type','source','position_type','position','added','creative','matchtype'],function(i,v){utm[v]=getURLParameter(v) || $('<input type="hidden" />').attr({name: v, class: v, value: function(){if(getURLParameter(v) == undefined)return '-'; else return getURLParameter(v)}}).appendTo("form")}); 
    $('<input type="hidden" />').attr({name: 'url', value: document.location.href}).appendTo("form");
    $('<input type="hidden" />').attr({name: 'title', value: document.title}).appendTo("form");

  $('input[name="phone"]').mask('+7 (999) 999-99-99');
  $('input[name="phone"]').blur(function() {if($(this).val().length != 18) {$(this).addClass('error-input');}});
  $('input[name="phone"]').focus(function() {$(this).removeClass('error-input');});

  $('input[name="name"]').blur(function() {if($(this).val().length < 2) {$(this).addClass('error-input');}});
  $('input[name="name"]').focus(function() {$(this).removeClass('error-input');});

    $('form').submit(function(e){
        e.preventDefault();
        $(this).find('input[type="text"]').trigger('blur');
        if(!$(this).find('input[type="text"]').hasClass('error-input')){
            var type=$(this).attr('method');
            var url=$(this).attr('action');
            var data=$(this).serialize();
            $.ajax({type: type, url: url, data: data,
            success : function(){
                $.arcticmodal('close');$('#okgo').arcticmodal();
                yaCounter36722730.reachGoal('submit');
            }
        }); 
        }
    });
});

$(window).load(function(){
	if (!$('body').hasClass('loaded')) {
		$('body').addClass('loaded');
		initfullpage();
	};

slider1 = $('.first-slider').bxSlider({pager:false,controls:false, auto:false, speed: 400,
    onSlideNext:function($slideElement, oldIndex, newIndex){
          $('.first-slider-slide').addClass('fadeouted');
          $('.first-slider-slide').removeClass('active');
          $('.first-slider-slide[data-sld="'+newIndex+'"]').removeClass('fadeouted');
          $('.first-slider-slide[data-sld="'+newIndex+'"]').addClass('active');
      },
      onSlidePrev:function($slideElement, oldIndex, newIndex){
          $('.first-slider-slide').addClass('fadeouted');
          $('.first-slider-slide').removeClass('active');
          $('.first-slider-slide[data-sld="'+newIndex+'"]').removeClass('fadeouted');
          $('.first-slider-slide[data-sld="'+newIndex+'"]').addClass('active');
      },
      onSliderLoad:function(){
        $('.first-slider-slide.active.bx-clone').removeClass('active');
        $('.first-slider-slide').addClass('fadeouted');
        $('.first-slider-slide.active').removeClass('fadeouted');
      }});
    slider1.goToSlide(0);

  $('.arr-l-abs').click(function(e){e.preventDefault();slider1.goToPrevSlide();});
  $('.arr-r-abs').click(function(e){e.preventDefault();slider1.goToNextSlide();});


slider2 = $('.second-slider').bxSlider({pager:false,controls:false, auto:false, speed: 400,
    onSlideNext:function($slideElement, oldIndex, newIndex){
          $('.second-slider-slide').addClass('fadeouted');
          $('.second-slider-slide').removeClass('active');
          $('.second-slider-slide[data-sld="'+newIndex+'"]').removeClass('fadeouted');
          $('.second-slider-slide[data-sld="'+newIndex+'"]').addClass('active');
      },
      onSlidePrev:function($slideElement, oldIndex, newIndex){
          $('.second-slider-slide').addClass('fadeouted');
          $('.second-slider-slide').removeClass('active');
          $('.second-slider-slide[data-sld="'+newIndex+'"]').removeClass('fadeouted');
          $('.second-slider-slide[data-sld="'+newIndex+'"]').addClass('active');
      },
      onSliderLoad:function(){
        $('.second-slider-slide.active.bx-clone').removeClass('active');
        $('.second-slider-slide').addClass('fadeouted');
        $('.second-slider-slide.active').removeClass('fadeouted');
      }});
    //slider2.goToNextSlide();

  $('.arr-r-second').click(function(e){e.preventDefault();slider2.goToPrevSlide();});
  $('.arr-l-second').click(function(e){e.preventDefault();slider2.goToNextSlide();});


});
function initfullpage(){
   $('#pages').fullpage({
        autoScrolling: false,
      afterLoad: function(anchorLink, index){
            $(this).find('.animation').addClass('fadeInUp animated');
            $(this).find('.animation2').addClass('fadeInDown animated');
            $(this).find('.animation3').addClass('fadeIn animated');
            if(index == 1){$('.site-nav.up').hide();}else{$('.site-nav.up').show();} 
            if(index == 11){$('.site-nav.down').hide();}else{$('.site-nav.down').show();} 
            },
      onLeave: function(index, nextIndex, direction){
            $('.section:nth-child('+nextIndex+')').find('.animation').addClass('fadeInUp animated');
            $('.section:nth-child('+nextIndex+')').find('.animation2').addClass('fadeInDown animated');
            $('.section:nth-child('+nextIndex+')').find('.animation3').addClass('fadeIn animated');
            },
      afterRender: function(){
            
          }
    });
   }
});
