var company = "/smp/"
	var beforeNo = 0;
	var afterNo = 0;
	var thisUrl = document.URL.substr(document.URL.lastIndexOf("/")+1); 
	$(function(){
		$("#"+thisUrl).css('border-bottom','3px solid #FFCC00');
		$("#"+thisUrl).css('color','#FFCC00');
		
		var fadeShow = $(".header-slide-cover").fadeShow({
			correctRatio: true, //화면 자동으로 꽉 채우기 (false 시 속도 느려짐)
			shuffle: false, //배경화면이 순서대로 나오지 않고 random 
			speed: 5000, // 속도
			images: [
					 'img/back-image.jpg',
					 'img/image1.jpg',
					 'img/image2.jpg',
					 'img/image3.jpg',
					 'img/image4.jpg']
		});
		// slide();
		var no = 
		$('.cover').animate({
			left : '0'
		},"slow")
	})
	
	

	
	
	function slide(count){
	console.log("함수들어옴 count : "+count)
	
		$('#header-slide-'+count).animate({
			left : "-100%"
		},3000,function(){
		})
		
		$('#header-slide-'+(count+1)).css('display','block')
		$('#header-slide-'+(count+1)).animate({
			left : 0
		},3000)
		
	}

	
$("#Logo").click(function(){
	location.href= company+"intro";
	
})

$('.header-menu-item-cover').click(function(e){
	console.log('들어옴')
	var tid = e.target.id
	console.log("id : "+tid)
	$("#"+tid).attr('data-no');
	
	$('.slideBtn').css('display','none');
	if($('#header').css('height') === "300px"){
		console.log('true 들어옴')
		$('.cover').animate({
			left: "-100%"
		},"slow",function(){
			window.location.href= company+tid;
		})
	}
	else{
		$('#header').animate({
			height : '300'
		},"slow",function(){
			$('.header-slide-cover').animate({
				right : 2000
			},"slow",function(){
				afterNo = $(this).attr('data-no');
				window.location.href= company+tid;
			})
		})
	}
	

})



$('#login').click(function(){
	$('.slideBtn').css('display','none');
	if($('#header').css('height') === "300px"){
		window.location.href= company+"login";
	}
	else{
		$('#header').animate({
			height : '300'
		},"slow",function(){
			$('.div-box-cover-top').animate({
				right : 2000
			},"slow",function(){
				window.location.href="./login"
				/*location.replace("./login")*/
			})
		})
	}
})

$('#search').click(function(){
	$('.header-menu-search-popup-cover').slideDown("slow");
	
	/*if(!$(this).find('input').length){
		$('.header-menu-icon-cover').animate({'padding-left':'0'},"slow")
				
		$(this).animate({width:"70%"},"slow",function(){
			$(this).html("<input type='text' id='searchText' placeholder='Search...'>" +
					"&nbsp; <i class='fa fa-search fa-lg'></i>")	
		})
	}
	else{
		
		
	}*/
		
})
$('#search-popup-cancle-btn').click(function(){
	$('.header-menu-search-popup-cover').slideUp("slow");

})

$('.header-menu-item').mouseover(function(){
	$(this).animate({
		fontSize: '20px'
	},"fast")
}) 
$('.header-menu-item').mouseout(function(){
	$(this).animate({
		fontSize: '1em'
	},"fast")
})
$('.header-menu-item').click(function(){
	
	$('#header').animate({
		height : '300'
	},"slow",function(){
		$('.div-box-cover-top').animate({
			right : 2000
		},"slow",function(){
			/*window.setTimeout(window.location.href="./login", 2000);*/
		})
	})
})
/*.div-box-cover-top*/