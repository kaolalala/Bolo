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

//切换关注推荐页面
function change(){
	$('.rec').click(function(){
		let index = $(this).index();
		let oSpan = $(this).parent().find('span');
		oSpan.css('opacity','0');
		oSpan.eq(index).css('opacity','1');
		let oContent = $('.main-content');
		oContent.css('display','none');
		oContent.eq(index).css('display','block');
	})
}
change();

//点击搜索切换到搜索页面
function turnToSearch(){
	$('.search').click(function(){
		$('.home').css('display','none');
		$('.search-web').css('display','block');
	})
}
turnToSearch();
//点击返回切换到主页
function turnToHome(){
	$('.return').click(function(){
		$('.search-web').css('display','none');
		$('.home').css('display','block');
	})
}
turnToHome();