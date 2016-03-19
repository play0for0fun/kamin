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

});

$(window).load(function(){
	if (!$('body').hasClass('loaded')) {
		$('body').addClass('loaded');
		initfullpage();
	};
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