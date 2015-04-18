function clean_car(){
		$("#shop_box").find("li").fadeOut("slow",function(){
			$(this).remove();
		});
	}