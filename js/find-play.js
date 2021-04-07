/*
 * @Author: YuanSun
 * @Date: 2021-04-05 18:53:36
 * @LastEditors: YuanSun
 * @LastEditTime: 2021-04-05 19:19:48
 * @Description: file content
 * @FilePath: \s2\SY极果\JG\js\发现酷玩.js
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