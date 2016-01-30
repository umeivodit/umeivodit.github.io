(function ($) {

    skel
    	.breakpoints({
            xlarge: '(max-width: 1680px)',
            large: '(max-width: 1280px)',
            medium: '(max-width: 980px)',
            small: '(max-width: 736px)',
            xsmall: '(max-width: 480px)'
        });

    $(function () {

		jQuery.scrollDepth();

		$('.scrolly').click(function(e){
			e.preventDefault();
			$('#avtos').animatescroll({scrollSpeed:500});
		});

		$('#header').scrollex({
    		enter: function() {
        		$('.more').css('visibility', 'visible');

   			},
    		leave: function() {
        		$('.more').css('visibility', 'hidden');
    		}
  		});

        if (skel.vars.mobile) {
            $body.addClass('is-mobile');
        }
        else {
            skel
                .on('-medium !medium', function () {
                    $('body').removeClass('is-mobile');
                })
                .on('+medium', function () {
                    $('body').addClass('is-mobile');
                });
        }

	});

})(jQuery);