jQuery(document).ready(function($){

$('#navigation').hide();


setTimeout(function(){

        $('#navigation').show();

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
    // m returns new Library object that hold our selector. Ex: m('.wrapper')
    var Q = function (params) {
        return new Library(params);
    };
     
    // In our Library we get our selector with querySelectorAll (we do not support < ie8)
    // We also add selector length, version and twitter/github or whatever you like as information about your library.
    var Library = function (params) {



        // Get params
        var selector = params;
        if(typeof params == 'string')
        {
            selector = document.querySelectorAll(params);
        }
        


            i = 0;
        // Get selector length
        this.length = selector.length;
        this.version = '0.1.0';

        // Add selector to object for method chaining
        for (; i < this.length; i++) {
            this[i] = selector[i];
        }
         
        // Return as object
        return this;        
    };

    // Extend the Library object.
    Q.fn = Library.prototype = 
    {

        /**
         * Hide element(s) from DOM
         * @returns {*}
         */
        hide: function () {
            var len = this.length;
            // Here we simply loop through our object (this) and set the css to display none. 
            //If you got more that 1 node from DOM selected with querySelectorAll, you would hide them all.
            while (len--) {
                this[len].style.display = 'none';
            }
 
            // It's important to return this if you want to chain methods!
            return this;
        },
 
        /**
         * Show element(s) from DOM
         * @returns {*}
         */
        show: function () {
            var len = this.length;
            while (len--) {
                this[len].style.display = 'block';
            }
 
            return this;
        },    

        /**
         * Add Class element(s) from DOM
         * @returns {*}
         */
        addClass: function (classToAdd, callback) {
    	 	var len = this.length;

            while (len--) {
       	       	var currentClassValue = this[len].className;
	          
		        if (currentClassValue.indexOf(classToAdd) == -1) {
		            if ((currentClassValue == null) || (currentClassValue === "")) {
		                this[len].className = classToAdd;
		            } else {
		                this[len].className += " " + classToAdd;
		            }
		        }
            }

	    	if(callback)
	    		callback(true);
	    	else
	        	return this;
        },

        /**
         * Remove Class element(s) from DOM
         * @returns {*}
         */
        removeClass: function (classToRemove, callback) {

    	 	var len = this.length;

            while (len--) {

		        var currentClassValue = this[len].className;
		        if (currentClassValue == classToRemove) {
		            this[len].className = "";
		            return;
		        }
		        var classValues = currentClassValue.split(" ");
		        var filteredList = [];
		        for (var i = 0 ; i < classValues.length; i++) {
		            if (classToRemove != classValues[i]) {
		                filteredList.push(classValues[i]);
		            }
		        }
		        this[len].className = filteredList.join(" ");
	    	}

	    	if(callback)
	    		callback(true);
	    	else
	        	return this;

        }, 

        hasClass: function (cls) {
            var len = this.length;
            var bool = false;
            while (len--) {
                bool = (' ' + this[len].className + ' ').indexOf(' ' + cls + ' ') > -1;
            }
            
            return bool;
        },

        attr: function(attrs){
            var len = this.length;
            var attr="";
            while (len--) {

                console.log(':::',attr)
                attr = this[len].getAttribute(attrs)
            }

            return attr;
        },


        data: function(attrs){
            var len = this.length;
            var attr="";
            while (len--) {
                attr = this[len].getAttribute(attrs)
            }

            return attr;
        },

        debounce: function(func, wait, immediate){
            var timeout;
            return function() {
                var context = this, args = arguments;
                var later = function() {
                    timeout = null;
                    if (!immediate) func.apply(context, args);
                };
                var callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) func.apply(context, args);
            };
        },

        //experimental
        timer: function(delay, callback){
        	var len = this.length;

            while (len--) {
		    	window.setTimeout(function(){
		    		callback(true);
		    	}, delay);
		    }
        }
    };
 	
 	//create library plugin
 	var debounce = function(func, wait, immediate){
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
 	}

    // Assign our m object to global window object.
    if(!window.Q) {
        window.Q = Q;
        window.Q.debounce = debounce;
    }
})();
 

