/*
 * @Author: YuanSun
 * @Date: 2021-04-05 18:14:26
 * @LastEditors: YuanSun
 * @LastEditTime: 2021-04-06 20:41:15
 * @Description: file content
 * @FilePath: \s2\SY极果\JG\js\酷玩最热.js
 */

let span = document.querySelector(".status-msg span");
span.addEventListener("click", function() {
    ajax({
        type: 'get',
        url: 'http://192.168.31.254:3000/play/new',
        success: function(result) {
            console.log(result)
            let newaraay = result.slice(0, 2)
            let array2 = [...newaraay[0], ...newaraay[1]]
            var tmpText = doT.template(document.getElementById('li_tmpl').innerText);
            document.getElementById("list1").innerHTML = tmpText(result[1]);
        }
    });


})

let img = document.querySelectorAll(".heart .iconfont");
let h = document.querySelectorAll(".heart");

for (let i = 0; i < h.length; i++) {
    for (let n = 0; n < img.length; n++) {
        img[n].onclick = function() {
            img[n].classList.toggle("active");
            let sum = img[n].innerHTML;
            if (img[n].classList.contains("active")) {
                img[n].innerHTML = ++sum;
            } else {
                img[n].innerHTML = --sum;
            }
        }
    }

}


let backtop = document.querySelector(".backtop");
let container = document.querySelector(".container");
let time = null;
backtop.onclick = function() {
    time = setInterval(() => {
        let top = document.documentElement.scrollTop;
        let step = Math.ceil((top / 10));
        if (top != 0) {
            document.documentElement.scrollTop = top - step;
        } else {
            clearInterval(time);
        }
    }, 50);
}