$('.search-inner').bind('keypress', function(event) {
	//回车键的键码是13
	var e = event ||window.event; 
	if(e.keyCode =='13'||e.keyCode == 9){
		let oTxt = $('.search-inner').find('input').val();
		let oDiv = $('<div>');
		oDiv.addClass('search-demo');
		$('.his-search').prepend(oDiv);
		let oSpan1 = $('<span>');
		oSpan1.addClass('search-before');
		oDiv.append(oSpan1);
		let oP = $('<p>');
		oP.html(oTxt);
		oP.addClass('search-content');
		oDiv.append(oP);
		let oSpan2 =  $('<span>');
		oSpan2.addClass('search-delete');
		oDiv.append(oSpan2);
		
		$('.search-delete').click(function(){
	    $(this).parent().remove();
//	console.log($(this).parent)
})


	}
	
});
$('.search-delete').click(function(){
	$(this).parent().remove();
//	console.log($(this).parent)
})
