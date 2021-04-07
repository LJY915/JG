/*
 * @Author: YuanSun
 * @Date: 2021-04-05 18:53:36
 * @LastEditors: YuanSun
 * @LastEditTime: 2021-04-07 11:45:20
 * @Description: file content
 * @FilePath: \SY极果\JG\js\find-play.js
 */
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