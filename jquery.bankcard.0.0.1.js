// yangxionggui 2017年6月27日16:50:53
// 银行卡卡号日期显示
// 针对不同的布局，需要手动调整 cardElement_wrap
(function($){
	$.fn.bankcard=function(settings){
		if(this.length<1){return;};
		settings=$.extend({
			usage:true //使用提示说明
		},settings);
		var element = this
		var cardElement_wrap = "<div id='cardElement_wrap'></div>"
		var cardElement = "<div class='card_element'></div>"
		var style='<style>.cardElement_wrap{display:relative}.card_element{display:none;background-color:#fffbe6;width:253px;border:1px solid #178dcc;padding-left:10px;font-size:19px;font-weight:600;color:#ff7618;height:40px;overflow:hidden;line-height:40px}</style>'
		var init = function(){
			if(settings.usage){
				console.log('针对不同的布局，需要手动调整父元素 .cardElement_wrap 的样式')
				console.log('传递 usage 参数关闭此提示')
			}
			element.wrap(cardElement_wrap)
			element.before(cardElement)
			element.after(style)
			var popup = element.prev()
			element.on("focus",function(){
				if($(this).val()!=""){
					popup.show()
				}
			}).on("blur",function(){
				popup.hide()
			}).on("keyup",function(val){
				var value = element.val();
				if(value!=""){
					popup.show()
				}
				var result = "";
				var accounts_index = 0;
				for(var i = 0;i<value.length;i++){
					
					if(accounts_index === 4){
						accounts_index = 0;
						result += " "
				    }
					result +=value[i];
					accounts_index++;
				}
				popup.text(result);
			})
		}
		init()
	}
})(jQuery);

// $("#bank_accounts_number").on("focus",function(){
// 	if($(this).val()!=""){
// 		$(".b_c_preview").show()
// 	}
// }).on("blur",function(){
// 	$(".b_c_preview").hide()
// }).on("keyup",function(val){
// 	var accounts_value = $("#bank_accounts_number").val();
// 	if(accounts_value!=""){
// 		$(".b_c_preview").show()
// 	}
// 	var result = "";
// 	var accounts_index = 0;
// 	for(var i = 0;i<accounts_value.length;i++){
		
// 		if(accounts_index === 4){
// 			accounts_index = 0;
// 			result += " "
// 	    }
// 		result +=accounts_value[i];
// 		accounts_index++;
// 	}
// 	$(".b_c_preview").text(result);
// })