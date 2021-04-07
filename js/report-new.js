/*
 * @Author: YuanSun
 * @Date: 2021-04-06 21:04:35
 * @LastEditors: YuanSun
 * @LastEditTime: 2021-04-06 21:14:52
 * @Description: file content
 * @FilePath: \s2\SY极果\JG\js\报告-最新.js
 */

ajax({
    type: 'get',
    url: 'http://192.168.31.254:3000/play/new',
    success: function(result) {
        console.log(result)
        let newaraay = result.slice(0, 2)
        let array2 = [...newaraay[0], ...newaraay[1]]
        var tmpText = doT.template(document.getElementById('li_tmpl').innerText);
        document.getElementById("list").innerHTML = tmpText(result[1]);
    }
});
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