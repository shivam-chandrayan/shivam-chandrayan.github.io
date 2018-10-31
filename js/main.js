$(window).scroll(function(){
	var $top = $(this).scrollTop(); //return scroll value
	
	$("img.section-img").delay(1000).css("transform", 'translate(0px,-'+$top*0.015+'%)');

	
	//auto changing active nav class

	var doc = $(document);
	if (doc.length) {
		var scrollPos = $(document).scrollTop(),
			homeSection = $('#home-section'),
			aboutSection = $('#about-section'),
			projectSection = $('#project-section'),
			serviceSection = $('#service-section'),
			tableLeftElement = $('.table-left-element'),
			footerSection = $('#footer');

		if (homeSection.position().top <= scrollPos && homeSection.position().top + homeSection.height() > scrollPos) {
	    	tableLeftElement.removeClass("nav-item-active");
	    	$('#nav-home').addClass("nav-item-active");
	    } else
	    if (aboutSection.position().top <= scrollPos && aboutSection.position().top + aboutSection.height() > scrollPos) {
	    	tableLeftElement.removeClass("nav-item-active");
	    	$('#nav-about').addClass("nav-item-active");
	    } else
	    if (projectSection.position().top <= scrollPos && projectSection.position().top + projectSection.height() > scrollPos) {
	    	tableLeftElement.removeClass("nav-item-active");
	    	$('#nav-projects').addClass("nav-item-active");
	    } else
	    if (serviceSection.position().top <= scrollPos && serviceSection.position().top + serviceSection.height() > scrollPos) {
	    	tableLeftElement.removeClass("nav-item-active");
	    	$('#nav-services').addClass("nav-item-active");
	    } else
	    if (footerSection.position().top <= scrollPos && footerSection.position().top + footerSection.height() > scrollPos) {
	    	tableLeftElement.removeClass("nav-item-active");
	    	$('#nav-contact').addClass("nav-item-active");
	    }
	  	
	}
});


$(document).ready(function(){
  	/*var typed = new Typed('#typed', {
    	strings: ['_an Undergraduate Student', '_a Frontend Developer', '_an Engineer at Heart'],
    	typeSpeed: 80,
    	backSpeed: 40,
    	smartBackspace: true, // this is a default
    	loop: true,
    	showCursor: false
  	});*/


  	//overlay
  	let $tableRightEle = $('.table-right-element'),
  		$overlay = $('.overlay');

	$('.sidebar-header, .overlay').on('click', function () {
		if ($tableRightEle.hasClass('hidden')) {
			$tableRightEle.removeClass('hidden');
			$overlay.addClass('active');
		}
		else {
			$tableRightEle.addClass('hidden');
			$overlay.removeClass('active');
		}
	});

	
	//slide div for more details.
	let $learnMoreAbout = $('#learnMore-about'),
		$learnMoreProjects = $('#learnMore-projects'),
		$learnMoreServices = $('#learnMore-services');

	//sliding effect - About
	$($learnMoreAbout).on('click', function () {
		$('#slide-div-about').slideToggle();
	});

	//sliding effect - Projects
	$($learnMoreProjects).on('click', function () {
		$('#slide-div-projects').slideToggle();
	});

	//sliding effect - Services
	$($learnMoreServices).on('click', function () {
		$('#slide-div-services').slideToggle();
	});

});