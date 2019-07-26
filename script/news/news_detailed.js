const images = $('.detailedImages').children();       //将所有图片以数组形式保存
$('#detailed_image_bg').hide();     //先将蒙板隐藏起来

/**
 * @description 点击图片后显示原图
 * @param {*} images 保存图片的数组
 */
const showImage = images => {
    for (let i = 0, len = images.length; i < len; i++) {
        images[i].onclick = () => {
            $('#detailed_image').attr('src', 'images/news/image' + (i + 1) + '.png');
            $('#detailed_image_bg').show();
        };
    }
}
showImage(images);

//再次点击，大图隐藏
$('#detailed_image_bg').on('click', () => {
    $('#detailed_image_bg').hide();
    $('#detailed_image').attr('src', '');
});

// $('.attaintion').on('click', () => { });
// $('.more').on('click', () => { });