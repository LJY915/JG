/*
 * @Author: your name
 * @Date: 2021-03-31 19:22:10
 * @LastEditTime: 2021-04-06 19:10:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vscode\01-HTML\项目\极果网站\js\index.js
 */
//菜单高亮显示
let a = document.querySelectorAll("header ul li a")

for (let i = 0; i < a.length; i++) {
    a[i].onclick = function() {
        for (let n = 0; n < a.length; n++) {
            a[n].classList.remove("active");
        }
        a[i].classList.add("active");
    }
}
//首页倒计时
let span = document.querySelector(".banner .times span");

function time() {
    let now = new Date();
    let fature = new Date("2021/5/4 00:00:00");
    let cha = (fature - now) / 1000;
    let day = parseInt(cha / 86400);
    let hour = parseInt(cha / 3600) % 24;
    let minute = parseInt(cha / 60) % 60;
    span.innerHTML = `申请时间剩余:${day}天${hour}小时${minute}分钟`
}
time();
setInterval(time, 1000);
//首页轮播
let uls = document.querySelectorAll(".box .bigbox ul");
let bigbox = document.querySelector(".box .bigbox");
let box = document.querySelector(".box");
let boxwidth = -box.offsetWidth;
let left_btn = document.querySelector(".left-btn")
let right_btn = document.querySelector(".right-btn");
let focusIndex = 0;

function play(index) {
    let move = index * boxwidth;
    animate(bigbox, move, function() {
        if (index == uls.length - 1) {
            bigbox.style.left = 0;
        }
    })
}


left_btn.onclick = function() {
    if (focusIndex == 0) {
        bigbox.style.left = (uls.length - 1) * boxwidth + "px";
        focusIndex = uls.length - 1;
    }
    focusIndex = focusIndex > 0 ? --focusIndex : uls.length - 1;
    play(focusIndex)

}

right_btn.onclick = function() {
    focusIndex = focusIndex < uls.length - 1 ? ++focusIndex : 0;
    play(focusIndex);
}


function autoplay() {
    setInterval(function() {
        right_btn.onclick();
    }, 2000)
}
autoplay();
//报告精选模块 点赞功能
let zans = document.querySelectorAll(".report .report1 ul .text .zan");
let lis = document.querySelectorAll(".report .report1 ul li");



for (let i = 0; i < lis.length; i++) {
    for (let n = 0; n < zans.length; n++) {
        zans[n].onclick = function() {
            let zan = zans[n];
            let num = zan.innerHTML;
            zans[n].classList.toggle("active");
            if (zans[n].classList.contains("active")) {
                zan.innerHTML = ++num;
            } else {
                zan.innerHTML = --num;
            }
        }
    }

}
//导购点心

let hearts = document.querySelectorAll(".guid .guid1 ul .text .heart");
let li = document.querySelectorAll(".guid .guid1 ul li");

for (let i = 0; i < li.length; i++) {
    for (let n = 0; n < hearts.length; n++) {
        hearts[n].onclick = function() {
            let heart = hearts[n];
            let num = heart.innerHTML;
            hearts[n].classList.toggle("active");
            if (hearts[n].classList.contains("active")) {
                heart.innerHTML = ++num;
            } else {
                heart.innerHTML = --num;
            }
        }
    }

}
//酷玩模块点心

let heartss = document.querySelectorAll(".play .play1 ul .text .heart");
let lii = document.querySelectorAll(".play .play1 ul li");

for (let i = 0; i < lii.length; i++) {
    for (let n = 0; n < heartss.length; n++) {
        heartss[n].onclick = function() {
            let heart = heartss[n];
            let num = heart.innerHTML;
            heartss[n].classList.toggle("active");
            if (heartss[n].classList.contains("active")) {
                heart.innerHTML = ++num;
            } else {
                heart.innerHTML = --num;
            }
        }
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