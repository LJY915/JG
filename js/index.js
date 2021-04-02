/*
 * @Author: your name
 * @Date: 2021-03-31 19:22:10
 * @LastEditTime: 2021-04-01 19:57:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vscode\01-HTML\项目\极果网站\js\index.js
 */

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