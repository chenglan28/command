function setting(){
document.getElementById("tag").value = "command";
document.getElementById("input").value = "open setting";
start();
}
function close_setting(){
document.getElementById("setting").style.display= "none";
}
setting1 = "false";
function onclick_setting1(){
if(setting1 == "true"){
document.getElementById("id_setting1").innerHTML = "<img src='system/img/close_setting.png' class='close_setting'/>";
setting1 = "false";
}
else{
document.getElementById("id_setting1").innerHTML = "<img src='system/img/open_setting.png' class='open_setting'/>";
setting1 = "true";
}
}
function setting_button1(){
if(setting1 == "true"){
document.getElementById("setting_box2").innerHTML = "<p class='style2'>运行后是否输入框里的值</p><a onclick='onclick_setting1()' id='id_setting1'><img src='setting/open_setting.png' class='open_setting'/></a>";
}
else{
document.getElementById("setting_box2").innerHTML = "<p class='style2'>运行后是否输入框里的值</p><a onclick='onclick_setting1()' id='id_setting1'><img src='setting/close_setting.png' class='close_setting'/></a>";
}
}
function setting_button2(){
document.getElementById("setting_box2").innerHTML = "<img src='setting/subsidize.png' class='subsidize'/>";
}
function setting_button3(){
document.getElementById("setting_box2").innerHTML = "<p class='style2'>输入图片的路径将它设为背景图片</p><br/><input type='text' id='setting_box2_input1' /><button type='button' onclick='setting_button4()'>运行</button>";
}
function setting_button4(){
var setting_var1 = document.getElementById("setting_box2_input1").value;
document.getElementById("demo").style.backgroundImage = "url(" + setting_var1 + ")";
}
version = "4.6.3";
function setting_button5(){
document.getElementById("setting_box2").innerHTML = "<img src='setting/command.png' /><br/><input type='text' id='toolbox' /><button type='button' onclick='setting_button7()'>获取</button><button type='button' onclick='setting_button8()'>加载</button><br/>版本:" + version;
}
function setting_button7(){
toolbox_var4 = document.getElementById("input").value;
toolbox_var5 = document.getElementById("tag").value;
toolbox_var6 = setting1;
toolbox_var7 = document.getElementById("setting").style.display;
toolbox_var8 = document.getElementById("lottery").style.display;
toolbox_var9 = document.getElementById("baidu").style.display;
toolbox_var10 = document.getElementById("bilibili").style.display;
toolbox_var11 = document.getElementById("tag_baidu").style.display;
toolbox_var12 = document.getElementById("setting").style.display;
toolbox_var13 = document.getElementById("toolbox").style.display;
toolbox_var14 = document.getElementById("demo").style.backgroundImage;
toolbox_var15 = document.getElementById("minecraft_repository").style.display;
toolbox_var16 = document.getElementById("air_game").style.display;
toolbox_var17 = air_game_x;
toolbox_var18 = air_game_y;
toolbox_var19 = air_game_money;
toolbox_var1 = toolbox_var4 + ";" + toolbox_var5 + ";" + toolbox_var6 + ";" + toolbox_var7 + ";" + toolbox_var8 + ";" + toolbox_var9 + ";" + toolbox_var10 + ";" + toolbox_var11 + ";" + toolbox_var12 + ";" + toolbox_var13 + ";" + toolbox_var14 + ";" + toolbox_var15 + ";" + toolbox_var16 + ";" + toolbox_var17 + ";" + toolbox_var18 + ";" + toolbox_var19 + ";";
document.getElementById("toolbox").value = toolbox_var1;
}
function setting_button8(){
toolbox_var2 = document.getElementById("toolbox").value;
toolbox_var3 = toolbox_var2.split(';');
if(toolbox_var3[0] !==""){
document.getElementById("input").value = toolbox_var3[0];
}
if(toolbox_var3[1] !==""){
document.getElementById("tag").value = toolbox_var3[1];
}
if(toolbox_var3[2] !==""){
setting1 = toolbox_var3[2];
}
if(toolbox_var3[3] !==""){
document.getElementById("setting").style.display = toolbox_var3[3];
}
if(toolbox_var3[4] !==""){
document.getElementById("lottery").style.display = toolbox_var3[4];
}
if(toolbox_var3[5] !==""){
document.getElementById("baidu").style.display = toolbox_var3[5];
}
if(toolbox_var3[6] !==""){
document.getElementById("bilibili").style.display = toolbox_var3[6];
}
if(toolbox_var3[7] !==""){
document.getElementById("tag_baidu").style.display = toolbox_var3[7];
}
if(toolbox_var3[8] !==""){
document.getElementById("setting").style.display = toolbox_var3[8];
}
if(toolbox_var3[9] !==""){
document.getElementById("toolbox").style.display = toolbox_var3[9];
}
if(toolbox_var3[10] !==""){
document.getElementById("demo").style.backgroundImage = toolbox_var3[10];
}
if(toolbox_var3[11] !==""){
document.getElementById("minecraft_repository").style.display = toolbox_var3[11];
}
if(toolbox_var3[12] !==""){
document.getElementById("air_game").style.display = toolbox_var3[12];
}
if(toolbox_var3[13] !=="" && toolbox_var3[14] !==""){
air_game_x = toolbox_var3[13];
air_game_y = toolbox_var3[14];
air_game_x = air_game_x - 1 + 1;
air_game_y = air_game_y - 1 + 1;
show();
}
if(toolbox_var3[15] !==""){
air_game_money = toolbox_var3[15];
document.getElementById("air_game_money").innerHTML = air_game_money;
air_game_money = air_game_money - 1 + 1;
}
}