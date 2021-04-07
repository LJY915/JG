/*
 * @Author: your name
 * @Date: 2021-04-04 17:22:08
 * @LastEditTime: 2021-04-06 11:07:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vscode\01-HTML\项目\极果\JG\js\user1.js
 */
let span = document.querySelectorAll("header article .banner .top .text span")
console.log(span)
for (let i = 0; i < span.length; i++) {
    span[i].onclik = function() {
        for (let n = 0; n < span.length; n++) {
            span[n].classList.remove("active");
        }
        span[i].classList.add("active");
    }
}


let lis = document.querySelectorAll("header article .bottom .text li a")
for (let i = 0; i < lis.length; i++) {
    lis[i].onclick = function() {
        for (let n = 0; n < lis.length; n++) {
            lis[n].className = "";
        }
        lis[i].className = "active"
    }
}
//回到顶部
let backtop = document.querySelector("footer .backtop")
var timer = null;
backtop.onclick = function() {
    cancelAnimationFrame(timer);
    timer = requestAnimationFrame(function fn() {
        var oTop = document.body.scrollTop || document.documentElement.scrollTop;
        if (oTop > 0) {
            document.body.scrollTop = document.documentElement.scrollTop = oTop - 50;
            timer = requestAnimationFrame(fn);
        } else {
            cancelAnimationFrame(timer);
        }
    });
}