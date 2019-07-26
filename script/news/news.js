const select_lines = document.getElementsByClassName('select_line');

const hideele = ele => {     //用于隐藏某个元素
    ele.style.display = "none";
}

const showele = ele => {     //用于显示某个元素
    ele.style.display = "block";
}

showele(select_lines[0]);

const hideAll = (obj) => {
    for (let i = 0, len = obj.length; i < len; i++) {
        hideele(obj[i]);
    }
}
const select_buttons = document.getElementsByClassName('item');
const parts = [document.getElementById('discussPart'), document.getElementById('likemePart'), document.getElementById('atMePart')];
showele(parts[0]);
const changePart = (select_buttons, parts) => {
    for (let i = 0, len = select_buttons.length; i < len; i++) {
        select_buttons[i].onclick=()=>{
            hideAll(select_lines);
            showele(select_lines[i]);
            hideAll(parts);
            showele(parts[i]);
        }
    }
}
changePart(select_buttons,parts);