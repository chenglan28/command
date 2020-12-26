setInterval(function(){air_game_time()},1000);
function air_game_time(){
if(air_game_dream == true){
air_game_dream_time = air_game_dream_time - 1;
document.getElementById("air_game_dream").innerHTML = "梦境<br/>在剩余的" + air_game_dream_time + "秒内点击的次数全部转换成财富";
}
if(air_game_dream_time == 0){
air_game_dream_time = 10;
air_game_dream = null;
air_game_money = air_game_money + air_game_dream_click;
air_game_dream_click = 0;
document.getElementById("air_game_money").innerHTML = air_game_money;
document.getElementById("air_game_dream").style.display= "none";
}
}