/**
 * 功能：读取图片
 */
function readPic(){
    $(".add").change(
        function(){
            let file = $("#pic_vid")[0].files[0];
            if(file.type.indexOf("image") == 0){
                let reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function(e){
                    let newUrl = this.result;
                    let newImg = document.createElement("div");
                    $(".pic").prepend(newImg);
                    newImg.style.backgroundImage = "url(" + newUrl + ")";
                } 
            }
        }
    )
}
$(document).ready(
    function(){
        readPic();
    }
)