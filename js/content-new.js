/*
 * @Author: YuanSun
 * @Date: 2021-04-05 17:51:07
 * @LastEditors: YuanSun
 * @LastEditTime: 2021-04-06 20:54:48
 * @Description: file content
 * @FilePath: \s2\SY极果\JG\js\导购最新内容.js
 */

let heart = document.querySelector(".hearts img");
let words = document.querySelector(".words p");
let share = document.querySelector(".shares img");
let flag = true;
heart.addEventListener("click", function() {
    if (flag) {
        heart.src = "../img/xinRedh.png";
        words.innerHTML = "喜欢" + Number(+15 + 1);
        flag = false;
    } else {
        heart.src = "../img/xinRedo.png";
        words.innerHTML = "喜欢" + 15;
        flag = true;
    }
})

share.addEventListener("click", function() {
    if (flag) {
        share.src = "../img/shareh_yj1.png";
        flag = false;
    } else {
        share.src = "../img/share_yj1.png";
        flag = true;
    }
})
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