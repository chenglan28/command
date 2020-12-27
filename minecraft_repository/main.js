function minecraft_repository(){
document.getElementById("tag").value = "command";
document.getElementById("input").value = "open MCR";
start();
}
function close_minecraft_repository(){
document.getElementById("minecraft_repository").style.display= "none";
}
function MCR_world(){
document.getElementById("MCR_box1").innerHTML = MCRW;
}
function MCR_skin(){
document.getElementById("MCR_box1").innerHTML = MCRS;
}
function MCR_RP(){
document.getElementById("MCR_box1").innerHTML = MCR_RP;
}
function MCR_BP(){
document.getElementById("MCR_box1").innerHTML = MCR_BP;
}
function MCR_mashup(){
document.getElementById("MCR_box1").innerHTML = MCR_mashup;
}
function MCR_help(){
document.getElementById("MCR_box1").innerHTML = UID0000003;
}
function MCR_start(){
var MCR_input = document.getElementById("MCR_input").value;
if(MCR_input == "0000001"){
document.getElementById("MCR_box1").innerHTML = UID0000001;
}
if(MCR_input == "0000002"){
document.getElementById("MCR_box1").innerHTML = UID0000002;
}
if(MCR_input == "0000003"){
document.getElementById("MCR_box1").innerHTML = UID0000003;
}
}
function MCR_home(){
document.getElementById("MCR_box1").innerHTML = "<input type='text' id='MCR_input'><button type='button' onclick='MCR_start()' class='MCR_start'>搜索UID</button><button type='button' onclick='MCR_world()' class='MCR_world style6'>地图</button><button type='button' onclick='MCR_skin()' class='MCR_skin style6'>皮肤</button><button type='button' onclick='MCR_RP()' class='MCR_RP style6'>资源包</button><button type='button' onclick='MCR_BP()' class='MCR_BP style6'>行为包</button><button type='button' onclick='MCR_mashup()' class='MCR_mashup style6'>整合包</button><button type='button' onclick='MCR_help()' class='MCR_help style6'>如何投稿</button>";
}
