/*
 * @Author: your name
 * @Date: 2021-03-23 15:24:49
 * @LastEditTime: 2021-03-23 21:13:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vscode\01-HTML\javascript 基础\HTML\基础练习\三月\3.23\mycookie.js
 */
//设置cookie键与值
function setcookie(k, v, t) {
    let time = new Date();
    time.setDate(time.getDate() + t);
    document.cookie = k + "=" + v + ";expires=" + time;
}
//获取键值
function getcookie(k) {
    let cookies = document.cookie;
    let arry = cookies.split("; ");
    for (let i = 0; i < arry.length; i++) {
        let newarry = arry[i].split("=");
        if (newarry[0] == k) { //当他传进去的那个名称  和当前索引为0的名称一样  则显示下标为1 的值
            return newarry[1]
        }
    }
    return '';
}
//删除键值
function removecookie(k) {
    this.setcookie(k, "", -1)
}