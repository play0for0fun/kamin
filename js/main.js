$(function(){
$(document).ready(function(){

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
  }

  $('#zz-btn').click(function(e){
  	e.preventDefault();
  	$('#pop-zz').arcticmodal();
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
});





function initfullpage(){
   $('#pages').fullpage({
      scrollBar:true,
      scrollingSpeed: 1000,
      navigation: true,
      afterLoad: function(anchorLink, index){
            $(this).find('.animation').addClass('fadeInUp animated');
            $(this).find('.animation2').addClass('fadeInDown animated');
            $(this).find('.animation3').addClass('fadeIn animated');
            //if ($(this).hasClass('sec4')|| $(this).hasClass('sec6')) {$('.fixed-menu-logo').addClass('blacked')}else{$('.fixed-menu-logo').removeClass('blacked')}
            //if (!$(this).hasClass('sec1')&&!$('#fp-nav').hasClass('animated')) {$('#fp-nav').addClass('fadeIn animated')}
            //if(index == 3 || index == 4){$('.stat').not('.stat-abs').addClass('fix-stat');$('.stat-abs').removeClass('stat-show');}else{$('.stat').not('.stat-abs').removeClass('fix-stat')}
          },
      onLeave: function(index, nextIndex, direction){
            $('.section:nth-child('+nextIndex+')').find('.animation').addClass('fadeInUp animated');
            $('.section:nth-child('+nextIndex+')').find('.animation2').addClass('fadeInDown animated');
            $('.section:nth-child('+nextIndex+')').find('.animation3').addClass('fadeIn animated');
            //if (nextIndex == 2 && direction == "up") {$('.stat').not('.stat-abs').removeClass('fix-stat');}
            //if (nextIndex == 5 && direction == "down") {$('.stat').not('.stat-abs').removeClass('fix-stat');$('.stat-abs').addClass('stat-show');}
            //if (direction=='down'&&$(this).next().hasClass('sec4')|| direction=='down'&&$(this).next().hasClass('sec6')||direction=='up'&&$(this).prev().hasClass('sec4')|| direction=='up'&&$(this).prev().hasClass('sec6')) {$('.fixed-menu-logo').addClass('blacked')}else{$('.fixed-menu-logo').removeClass('blacked')}
          },
      afterRender: function(){
            
          }
    });
   }

});