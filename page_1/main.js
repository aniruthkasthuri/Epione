


$(document).ready(function(){

	var flag=0;

	var h=$(window).height();
	$('section').css('height',h);

	$('header .links .sign').click(function(){

		if(flag==0)
		{
			$('header .links .sign').html('Close');
			$('.sign-up-box').css('display','block');
			flag=1;
		}

		else if(flag==1)
		{
			$('header .links .sign').html('Sign up');
			$('.sign-up-box').css('display','none');
			flag=0;
		}
	});

	$('.login').click(function(){
		$('header .links .sign').css("color","#3c4658");
		$('.icon .fa').animate({top:'-50px',opacity:'0'},200);
		setTimeout(function(){$(' .txt-wrapper').animate({top:'50px',opacity:'0'},200)},100);
		setTimeout(function(){$('.five').animate({top:'0px'},600)},200);
		setTimeout(function(){$('.four').animate({top:'0px'},600)},300);
		setTimeout(function(){$('.three').animate({top:'0px'},600)},400);
		setTimeout(function(){$('.two').animate({top:'0px'},600)},500);
		setTimeout(function(){$('.one').animate({top:'0px'},600)},600);
		$('.c-one').addClass('select');
		$('.c-two').removeClass('select');
		$('.c-three').removeClass('select');
		$('.c-four').removeClass('select');
		$('.c-five').removeClass('select');
	});

	$('.one .down').click(function(){
		$('.one').animate({top:'-100%'},600);
		$('header .links .sign').css("color","#5DB394");
		setTimeout(function(){$('.two .icon .fa').animate({top:'0px',opacity:'1'},400)},600);
		setTimeout(function(){$('.two .txt-wrapper').animate({top:'0px',opacity:'1'},400)},800);
		$('.c-one').removeClass('select');
		$('.c-two').addClass('select');
	});

	$('.two .up').click(function(){
		$('.two .icon .fa').animate({top:'-50px',opacity:'0'},400);
		setTimeout(function(){$('.two .txt-wrapper').animate({top:'50px',opacity:'0'},400)},200);
		$('header .links .sign').css("color","#3c4658");
		setTimeout(function(){$('.one').animate({top:'0px'},400)},800);
		$('.c-one').addClass('select');
		$('.c-two').removeClass('select');
	});

	$('.two .down').click(function(){
		$('.two').animate({top:'-100%'},600);
		$('header .links .sign').css("color","#F94D4D");
		setTimeout(function(){$('.three .icon .fa').animate({top:'0px',opacity:'1'},400)},600);
		setTimeout(function(){$('.three .txt-wrapper').animate({top:'0px',opacity:'1'},400)},800);
		$('.c-three').addClass('select');
		$('.c-two').removeClass('select');
	});

	$('.three .up').click(function(){
		$('.three .icon .fa').animate({top:'-50px',opacity:'0'},400);
		setTimeout(function(){$('.three .txt-wrapper').animate({top:'50px',opacity:'0'},400)},200);
		$('header .links .sign').css("color","#5DB394");
		setTimeout(function(){$('.two').animate({top:'0px'},400)},800);
		$('.c-two').addClass('select');
		$('.c-three').removeClass('select');
	});

	$('.three .down').click(function(){
		$('.three').animate({top:'-100%'},600);
		$('header .links .sign').css("color","#59599E");
		setTimeout(function(){$('.four .icon .fa').animate({top:'0px',opacity:'1'},400)},600);
		setTimeout(function(){$('.four .txt-wrapper').animate({top:'0px',opacity:'1'},400)},800);
		$('.c-four').addClass('select');
		$('.c-three').removeClass('select');
	});

	$('.four .up').click(function(){
		$('.four .icon .fa').animate({top:'-50px',opacity:'0'},400);
		setTimeout(function(){$('.four .txt-wrapper').animate({top:'50px',opacity:'0'},400)},200);
		$('header .links .sign').css("color","#F94D4D");
		setTimeout(function(){$('.three').animate({top:'0px'},400)},800);
		$('.c-three').addClass('select');
		$('.c-four').removeClass('select');
	});

	$('.four .down').click(function(){
		$('.four').animate({top:'-100%'},600);
		$('header .links .sign').css("color","#C3921F");
		setTimeout(function(){$('.five .icon .fa').animate({top:'0px',opacity:'1'},400)},600);
		setTimeout(function(){$('.five .txt-wrapper').animate({top:'0px',opacity:'1'},400)},800);
		$('.c-five').addClass('select');
		$('.c-four').removeClass('select');
	});

	$('.five .up').click(function(){
		$('.five .icon .fa').animate({top:'-50px',opacity:'0'},400);
		setTimeout(function(){$('.five .txt-wrapper').animate({top:'50px',opacity:'0'},400)},200);
		$('header .links .sign').css("color","#59599E");
		setTimeout(function(){$('.four').animate({top:'0px'},400)},800);
		$('.c-four').addClass('select');
		$('.c-five').removeClass('select');
	});

	$('.c-one').click(function(){
		$('.icon .fa').animate({top:'0px',opacity:'1'},200);
		setTimeout(function(){$(' .txt-wrapper').animate({top:'0px',opacity:'1'},200)},100);
		$('header .links .sign').css("color","#3c4658");
		setTimeout(function(){
		$('.one').animate({top:'0px'},600);
		$('.two').animate({top:'0px'},600);
		$('.three').animate({top:'0px'},600);
		$('.four').animate({top:'0px'},600);
		$('.five').animate({top:'0px'},600);
		$('.c-one').addClass('select');
		$('.c-two').removeClass('select');
		$('.c-three').removeClass('select');
		$('.c-four').removeClass('select');
		$('.c-five').removeClass('select');
	},400);
	});

	$('.c-two').click(function(){
		$('.icon .fa').animate({top:'0px',opacity:'1'},200);
		setTimeout(function(){$(' .txt-wrapper').animate({top:'0px',opacity:'1'},200)},100);
		$('header .links .sign').css("color","#5DB394");	
		setTimeout(function(){
		$('.one').animate({top:'-100%'},600);
		$('.two').animate({top:'0px'},600);
		$('.three').animate({top:'0px'},600);
		$('.four').animate({top:'0px'},600);
		$('.five').animate({top:'0px'},600);
		$('.c-two').addClass('select');
		$('.c-one').removeClass('select');
		$('.c-three').removeClass('select');
		$('.c-four').removeClass('select');
		$('.c-five').removeClass('select');
	},400);
	});

	$('.c-three').click(function(){
		$('.icon .fa').animate({top:'0px',opacity:'1'},200);
		setTimeout(function(){$(' .txt-wrapper').animate({top:'0px',opacity:'1'},200)},100);
		$('header .links .sign').css("color","#F94D4D");
		setTimeout(function(){
		$('.one').animate({top:'-100%'},600);
		$('.two').animate({top:'-100%'},600);
		$('.three').animate({top:'0px'},600);
		$('.four').animate({top:'0px'},600);
		$('.five').animate({top:'0px'},600);
		$('.c-three').addClass('select');
		$('.c-two').removeClass('select');
		$('.c-one').removeClass('select');
		$('.c-four').removeClass('select');
		$('.c-five').removeClass('select');
	},400);
	});

	$('.c-four').click(function(){
		$('.icon .fa').animate({top:'0px',opacity:'1'},200);
		setTimeout(function(){$(' .txt-wrapper').animate({top:'0px',opacity:'1'},200)},100);
		$('header .links .sign').css("color","#59599E");
		setTimeout(function(){
		$('.one').animate({top:'-100%'},600);
		$('.two').animate({top:'-100%'},600);
		$('.three').animate({top:'-100%'},600);
		$('.four').animate({top:'0px'},600);
		$('.five').animate({top:'0px'},600);
		$('.c-four').addClass('select');
		$('.c-two').removeClass('select');
		$('.c-three').removeClass('select');
		$('.c-one').removeClass('select');
		$('.c-five').removeClass('select');
	},400);
	});

	$('.c-five').click(function(){
		$('.icon .fa').animate({top:'0px',opacity:'1'},200);
		setTimeout(function(){$(' .txt-wrapper').animate({top:'0px',opacity:'1'},200)},100);
		$('header .links .sign').css("color","#C3921F");
		setTimeout(function(){
		$('.one').animate({top:'-100%'},600);
		$('.two').animate({top:'-100%'},600);
		$('.three').animate({top:'-100%'},600);
		$('.four').animate({top:'-100%'},600);
		$('.five').animate({top:'0px'},600);
		$('.c-five').addClass('select');
		$('.c-two').removeClass('select');
		$('.c-three').removeClass('select');
		$('.c-four').removeClass('select');
		$('.c-one').removeClass('select');
	},400);
	});

});

