$(document).ready(function (){
	$('.preloader').fadeOut()
//navBtn
	$('.navBtn').click(function(){
		$('.nav').toggleClass('nav--show')
	})
	// video switch
	$('.video__switch-container').click(function(){
		const value = $('.video__swich-btn').hasClass('btnSlide')
		if(value){
		$('.video__switch-btn').removeClass('btnSlide')
			$('#video').get(0).play()	
			
		}
		else{
			$('.video__switch-btn').addClass('btnSlide')
			$('#video').get(0).pause()
		}
	
	// magnyfic popup
	})
	$('#projects__modal').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: {
      // options for gallery
     // enabled: true
	
    }
    // other options
  });
});