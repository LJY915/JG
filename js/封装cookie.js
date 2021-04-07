/*
 * @Author: YuanSun
 * @Date: 2021-03-23 16:32:26
 * @LastEditors: YuanSun
 * @LastEditTime: 2021-03-23 20:37:57
 * @Description: file content
 * @FilePath: \s2\3月\210323\封装cookie.js
 */
//封装cookie

// setCookie()——创建Cookie
function setCookie(k,v,t){
    var time=new Date();
    time.setDate(time.getDate()+t);
document.cookie=k+"="+v+";expires="+time;
}



// getCookie()——获取Cookie
function getCookie(k){
   var cookies= document.cookie;
  var arr= cookies.split("; ");
  for(var i=0;i<arr.length;i++){
     var arr1= arr[i].split("=");
     if(arr1[0]==k){
          return arr1[1];
     }
    
  }
return "";
}
// removeCookie()——删除Cookie

function removeCookie(k){
    this.setCookie(k,"",-1);
}
/* function setCookie(k,v,t){
    var date_ = new Date();
    date_.setDate(date_.getDate()+t);
    document.cookie =k+'='+v+';expires='+date_;
}


// getCookie()——获取Cookie
function getCookie(k){
    var cookies = document.cookie;
    var arry = cookies.split('; ');
    for(var i=0;i<arry.length;i++){
        var n_arry = arry[i].split('=');
        if(n_arry[0]==k){
            return n_arry[1];
        } 
    }
    return '';
   
}
// removeCookie()——删除Cookie
function removeCookie(key){
    this.setCookie(key,'',-1);
} */