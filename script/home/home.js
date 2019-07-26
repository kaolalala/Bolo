$(".like").click(function(){
	let oLikeNum = $(this).find('.like-num');
	let likeNum = oLikeNum.text();
	if(!oLikeNum.hasClass('current')){
		oLikeNum.addClass('current');
		oLikeNum.text(++likeNum);
	}else{
		oLikeNum.removeClass('current');
		oLikeNum.text(--likeNum);
	}
});
