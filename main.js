function air_game(){
document.getElementById("tag").value = "command";
document.getElementById("input").value = "open air_game";
start();
}
function close_air_game(){
document.getElementById("air_game").style.display = "none";
}
air_game_x = 10;
air_game_y = 10;
air_game_dream_time = 10;
air_game_money = 0;
function air_game_forward(){
if(air_game_x > 0){
air_game_x = air_game_x - 1;
}
if(air_game_x == 3 && air_game_y == 8){
air_game_backward();
}
if(air_game_x == 4 && air_game_y == 8){
air_game_backward();
}
if(air_game_x == 5 && air_game_y == 8){
air_game_backward();
}
if(air_game_x == 6 && air_game_y == 8){
air_game_backward();
}
if(air_game_x == 7 && air_game_y == 8){
air_game_backward();
}
if(air_game_x == 8 && air_game_y == 8){
air_game_backward();
}
if(air_game_x == 8 && air_game_y == 7){
air_game_backward();
}
if(air_game_x == 8 && air_game_y == 6){
air_game_backward();
}
if(air_game_x == 8 && air_game_y == 5){
air_game_backward();
}
if(air_game_x == 8 && air_game_y == 3){
air_game_backward();
}
if(air_game_x == 8 && air_game_y == 2){
air_game_backward();
}
if(air_game_x == 8 && air_game_y == 1){
air_game_backward();
}
if(air_game_x == 2 && air_game_y == 8){
air_game_backward();
}
if(air_game_x == 1 && air_game_y == 8){
air_game_backward();
}
if(air_game_x == 1 && air_game_y == 7){
air_game_backward();
}
if(air_game_x == 1 && air_game_y == 6){
air_game_backward();
}
if(air_game_x == 1 && air_game_y == 5){
air_game_backward();
}
if(air_game_x == 1 && air_game_y == 4){
air_game_backward();
}
if(air_game_x == 1 && air_game_y == 3){
air_game_backward();
}
if(air_game_x == 1 && air_game_y == 2){
air_game_backward();
}
if(air_game_x == 7 && air_game_y == 1){
air_game_backward();
}
if(air_game_x == 6 && air_game_y == 1){
air_game_backward();
}
if(air_game_x == 5 && air_game_y == 1){
air_game_backward();
}
if(air_game_x == 4 && air_game_y == 1){
air_game_backward();
}
if(air_game_x == 3 && air_game_y == 1){
air_game_backward();
}
if(air_game_x == 2 && air_game_y == 1){
air_game_backward();
}
if(air_game_x == 1 && air_game_y == 1){
air_game_backward();
}
show();
}
function air_game_left(){
if(air_game_y > 0){
air_game_y = air_game_y - 1;
}
if(air_game_x == 3 && air_game_y == 8){
air_game_right();
}
if(air_game_x == 4 && air_game_y == 8){
air_game_right();
}
if(air_game_x == 5 && air_game_y == 8){
air_game_right();
}
if(air_game_x == 6 && air_game_y == 8){
air_game_right();
}
if(air_game_x == 7 && air_game_y == 8){
air_game_right();
}
if(air_game_x == 8 && air_game_y == 8){
air_game_right();
}
if(air_game_x == 8 && air_game_y == 7){
air_game_right();
}
if(air_game_x == 8 && air_game_y == 6){
air_game_right();
}
if(air_game_x == 8 && air_game_y == 5){
air_game_right();
}
if(air_game_x == 8 && air_game_y == 3){
air_game_right();
}
if(air_game_x == 8 && air_game_y == 2){
air_game_right();
}
if(air_game_x == 8 && air_game_y == 1){
air_game_right();
}
if(air_game_x == 2 && air_game_y == 8){
air_game_right();
}
if(air_game_x == 1 && air_game_y == 8){
air_game_right();
}
if(air_game_x == 1 && air_game_y == 7){
air_game_right();
}
if(air_game_x == 1 && air_game_y == 6){
air_game_right();
}
if(air_game_x == 1 && air_game_y == 5){
air_game_right();
}
if(air_game_x == 1 && air_game_y == 4){
air_game_right();
}
if(air_game_x == 1 && air_game_y == 3){
air_game_right();
}
if(air_game_x == 1 && air_game_y == 2){
air_game_right();
}
if(air_game_x == 7 && air_game_y == 1){
air_game_right();
}
if(air_game_x == 6 && air_game_y == 1){
air_game_right();
}
if(air_game_x == 5 && air_game_y == 1){
air_game_right();
}
if(air_game_x == 4 && air_game_y == 1){
air_game_right();
}
if(air_game_x == 3 && air_game_y == 1){
air_game_right();
}
if(air_game_x == 2 && air_game_y == 1){
air_game_right();
}
if(air_game_x == 1 && air_game_y == 1){
air_game_right();
}
show();
}
function air_game_right(){
if(air_game_y < 119){
air_game_y = air_game_y + 1;
}
if(air_game_x == 3 && air_game_y == 8){
air_game_left();
}
if(air_game_x == 4 && air_game_y == 8){
air_game_left();
}
if(air_game_x == 5 && air_game_y == 8){
air_game_left();
}
if(air_game_x == 6 && air_game_y == 8){
air_game_left();
}
if(air_game_x == 7 && air_game_y == 8){
air_game_left();
}
if(air_game_x == 8 && air_game_y == 8){
air_game_left();
}
if(air_game_x == 8 && air_game_y == 7){
air_game_left();
}
if(air_game_x == 8 && air_game_y == 6){
air_game_left();
}
if(air_game_x == 8 && air_game_y == 5){
air_game_left();
}
if(air_game_x == 8 && air_game_y == 3){
air_game_left();
}
if(air_game_x == 8 && air_game_y == 2){
air_game_left();
}
if(air_game_x == 8 && air_game_y == 1){
air_game_left();
}
if(air_game_x == 2 && air_game_y == 8){
air_game_left();
}
if(air_game_x == 1 && air_game_y == 8){
air_game_left();
}
if(air_game_x == 1 && air_game_y == 7){
air_game_left();
}
if(air_game_x == 1 && air_game_y == 6){
air_game_left();
}
if(air_game_x == 1 && air_game_y == 5){
air_game_left();
}
if(air_game_x == 1 && air_game_y == 4){
air_game_left();
}
if(air_game_x == 1 && air_game_y == 3){
air_game_left();
}
if(air_game_x == 1 && air_game_y == 2){
air_game_left();
}
if(air_game_x == 7 && air_game_y == 1){
air_game_left();
}
if(air_game_x == 6 && air_game_y == 1){
air_game_left();
}
if(air_game_x == 5 && air_game_y == 1){
air_game_left();
}
if(air_game_x == 4 && air_game_y == 1){
air_game_left();
}
if(air_game_x == 3 && air_game_y == 1){
air_game_left();
}
if(air_game_x == 2 && air_game_y == 1){
air_game_left();
}
if(air_game_x == 1 && air_game_y == 1){
air_game_left();
}
show();
}
function air_game_backward(){
if(air_game_x < 66){
air_game_x = air_game_x + 1;
}
if(air_game_x == 3 && air_game_y == 8){
air_game_forward();
}
if(air_game_x == 4 && air_game_y == 8){
air_game_forward();
}
if(air_game_x == 5 && air_game_y == 8){
air_game_forward();
}
if(air_game_x == 6 && air_game_y == 8){
air_game_forward();
}
if(air_game_x == 7 && air_game_y == 8){
air_game_forward();
}
if(air_game_x == 8 && air_game_y == 8){
air_game_forward();
}
if(air_game_x == 8 && air_game_y == 7){
air_game_forward();
}
if(air_game_x == 8 && air_game_y == 6){
air_game_forward();
}
if(air_game_x == 8 && air_game_y == 5){
air_game_forward();
}
if(air_game_x == 8 && air_game_y == 3){
air_game_forward();
}
if(air_game_x == 8 && air_game_y == 2){
air_game_forward();
}
if(air_game_x == 8 && air_game_y == 1){
air_game_forward();
}
if(air_game_x == 2 && air_game_y == 8){
air_game_forward();
}
if(air_game_x == 1 && air_game_y == 8){
air_game_forward();
}
if(air_game_x == 1 && air_game_y == 7){
air_game_forward();
}
if(air_game_x == 1 && air_game_y == 6){
air_game_forward();
}
if(air_game_x == 1 && air_game_y == 5){
air_game_forward();
}
if(air_game_x == 1 && air_game_y == 4){
air_game_forward();
}
if(air_game_x == 1 && air_game_y == 3){
air_game_forward();
}
if(air_game_x == 1 && air_game_y == 2){
air_game_forward();
}
if(air_game_x == 7 && air_game_y == 1){
air_game_forward();
}
if(air_game_x == 6 && air_game_y == 1){
air_game_forward();
}
if(air_game_x == 5 && air_game_y == 1){
air_game_forward();
}
if(air_game_x == 4 && air_game_y == 1){
air_game_forward();
}
if(air_game_x == 3 && air_game_y == 1){
air_game_forward();
}
if(air_game_x == 2 && air_game_y == 1){
air_game_forward();
}
if(air_game_x == 1 && air_game_y == 1){
air_game_forward();
}
show();
}
function show(){
document.getElementById("air_game_man").style.top = 16 * air_game_x + "px";
document.getElementById("air_game_man").style.left = 16 * air_game_y + "px";
document.getElementById("air_game_xyz").innerHTML = air_game_x + "," + air_game_y;
if(air_game_x == 2 && air_game_y == 2){
open_air_game_dream();
}
if(air_game_x == 3 && air_game_y == 2){
open_air_game_dream();
}
}
function air_game_menu(){
document.getElementById("air_game_menu").style.display= "block";
}
function close_air_game_menu(){
document.getElementById("air_game_menu").style.display= "none";
}
air_game_dream_click = 0;
function open_air_game_dream(){
air_game_dream = true;
document.getElementById("air_game_dream").style.display= "block";
}
air_game_item1 = 0;
function air_game_pickaxe(){
if(air_game_x == 10 && air_game_y == 1 && air_game_item1 >= 1){
air_game_item1 = air_game_item1 - 1;
document.getElementById("air_game_item1_text").innerHTML = air_game_item1;
}
if(air_game_x == 11 && air_game_y == 1 && air_game_money >= 50){
air_game_money = air_game_money - 50;
air_game_item1 = air_game_item1 + 1;
document.getElementById("air_game_item1_text").innerHTML = air_game_item1;
document.getElementById("air_game_money").innerHTML = air_game_money;
}
}