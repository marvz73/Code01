jQuery(document).ready(function($){




setTimeout(function(){


		// browser window scroll (in pixels) after which the "menu" link is shown
		var offset = -5;

		var navigationContainer = $('#cd-nav'),
			mainNavigation = navigationContainer.find('#cd-main-nav ul');

		//hide or show the "menu" link
		checkMenu();
		$(window).scroll(function(){
			checkMenu();
		});

		//open or close the menu clicking on the bottom "menu" link
		$('.cd-nav-trigger').on('click', function(){
			$(this).toggleClass('menu-is-open');
			//we need to remove the transitionEnd event handler (we add it when scolling up with the menu open)
			mainNavigation.off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend').toggleClass('is-visible');
		});

		function checkMenu() {
			if( $(window).scrollTop() > offset && !navigationContainer.hasClass('is-fixed')) {
				navigationContainer.addClass('is-fixed').find('.cd-nav-trigger').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
					mainNavigation.addClass('has-transitions');
				});
			} else if ($(window).scrollTop() <= offset) {
				//check if the menu is open when scrolling up
				if( mainNavigation.hasClass('is-visible')  && !$('html').hasClass('no-csstransitions') ) {
					//close the menu with animation
					mainNavigation.addClass('is-hidden').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
						//wait for the menu to be closed and do the rest
						mainNavigation.removeClass('is-visible is-hidden has-transitions');
						navigationContainer.removeClass('is-fixed');
						$('.cd-nav-trigger').removeClass('menu-is-open');
					});
				//check if the menu is open when scrolling up - fallback if transitions are not supported
				} else if( mainNavigation.hasClass('is-visible')  && $('html').hasClass('no-csstransitions') ) {
						mainNavigation.removeClass('is-visible has-transitions');
						navigationContainer.removeClass('is-fixed');
						$('.cd-nav-trigger').removeClass('menu-is-open');
				//scrolling up with menu closed
				} else {
					navigationContainer.removeClass('is-fixed');
					mainNavigation.removeClass('has-transitions');
				}
			} 
		}
},400)
	});













// Anonymous function
(function () {
    // Q returns new Library object that hold our selector. Ex: Q('.wrapper')
    var Q = function (params) {
        return new Library(params);
    };
     
    // In our Library we get our selector with querySelectorAll (we do not support < ie8)
    // We also add selector length, version and twitter/github or whatever you like as information about your library.
    var Library = function (params) {
        // Get params
        var selector = document.querySelectorAll(params),
            i = 0;
        // Get selector length
        this.length = selector.length;
        this.version = '0.1.0';
        this.twitter = 'http://www.twitter.com/bjarneo_';
         
        // Add selector to object for method chaining
        for (; i < this.length; i++) {
            this[i] = selector[i];
        }
         
        // Return as object
        return this;        
    };
 
    // Assign our Q object to global window object.
    if(!window.m) {
        window.m = Q;
    }
})();
 