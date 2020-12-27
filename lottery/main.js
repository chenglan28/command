function lottery(){
document.getElementById("tag").value = "command";
document.getElementById("input").value = "open lottery";
start();
}
function close_lottery(){
document.getElementById("lottery").style.display= "none";
}
function lottery_start() {
var lottery_Math1 = Math.floor(Math.random() * 100);
var lottery_Math2 = Math.floor(Math.random() * 100);
var lottery_Math3 = Math.floor(Math.random() * 100);
var lottery_Math4 = Math.floor(Math.random() * 100);
var lottery_Math5 = Math.floor(Math.random() * 100);
var lottery_Math6 = Math.floor(Math.random() * 100);
var lottery_Math7 = Math.floor(Math.random() * 100);
var lottery_text1 = document.getElementById("lottery_text1").value;
var lottery_text2 = document.getElementById("lottery_text2").value;
var lottery_text3 = document.getElementById("lottery_text3").value;
var lottery_text4 = document.getElementById("lottery_text4").value;
var lottery_text5 = document.getElementById("lottery_text5").value;
var lottery_text6 = document.getElementById("lottery_text6").value;
var lottery_text7 = document.getElementById("lottery_text7").value;
document.getElementById("lottery_over").innerHTML = "<span id='lottery_over1'>" + lottery_Math1 + " </span>" + "<span id='lottery_over2'>" + lottery_Math2 + " </span>" + "<span id='lottery_over3'>" + lottery_Math3 + " </span>" + "<span id='lottery_over4'>" + lottery_Math4 + " </span>" + "<span id='lottery_over5'>" + lottery_Math5 + " </span>" + "<span id='lottery_over6'>" + lottery_Math6 + " </span>" + "<span id='lottery_over7'>" + lottery_Math7 + " </span>";
if(lottery_text1 == lottery_Math1){
document.getElementById("lottery_over1").style.color = "green";
}
if(lottery_text2 == lottery_Math2){
document.getElementById("lottery_over2").style.color = "green";
}
if(lottery_text3 == lottery_Math3){
document.getElementById("lottery_over3").style.color = "green";
}
if(lottery_text4 == lottery_Math4){
document.getElementById("lottery_over4").style.color = "green";
}
if(lottery_text5 == lottery_Math5){
document.getElementById("lottery_over5").style.color = "green";
}
if(lottery_text6 == lottery_Math6){
document.getElementById("lottery_over6").style.color = "green";
}
if(lottery_text7 == lottery_Math7){
document.getElementById("lottery_over7").style.color = "green";
}
}
