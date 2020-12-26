function start(){
var tag = document.getElementById("tag").value;
var input = document.getElementById("input").value;
if(tag == "baidu"){
document.getElementById("tag_baidu_iframe").src = "http://m.baidu.com/s?word=" + input;
document.getElementById("tag_baidu").style.display ="block ";
}
else if(tag == "command"){
command();
}
if(setting1 == "true"){
document.getElementById("input").value = null;
}
}

