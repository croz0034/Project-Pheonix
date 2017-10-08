document.addEventListener('DOMContentLoaded', init);
//////////////////// Waiver Checker
function Waiver() {
    /////////////////////This is where you put the waivered people
      var WaiveredPeople = ["Tim", "Shirley", "Matt", "Katie", "Anne Cash", "Mike", "St. G"];
    //////////////////////// inside the square brackets surrounded by " and witha , after if they are not the last one ///////////////
    var haswaiver = 0;
    var person = prompt("Character name please");
haswaiver = WaiveredPeople.indexOf(person);
    haswaiver >= 0? alert(person + " has signed a waver! Have fun swinging foam!") : alert (person + " has NOT signed a waver! Get on that >:\(");
    
}
/////////////////////Shield Size Calculator
function ShieldCalc (){
var x = prompt("what is the width of your shield?");
var type = prompt("what type of shield do you use? round, square, or heater?");
var ShieldSize;
function Shield (x, type){
    let small = 432;
    let medium = 720
    let large = 1152;
    let size;
    let category;
    if (type == "round"){ size = ((x)/2)*((x)/2)*3.14;}
    else if (type == "square"){size = x * x;}
    else if (type == "heater"){size = 8.523*((x/3)*(x/3));}
    else {size = undefined;}
    if (size <= 432) {category= "small";}
    else if (size > 432 && size <= 720 ){category = "medium";}
    else if (size > 720 && size <= 1152){category = "large"}
    else if (size > 1153){category = "too big"}
    else if (size == undefined){category = "Sorry, I can't calculate that"}
    return category;};
ShieldSize = Shield (x, type);
alert(ShieldSize); return category}
//////////////////// Level Calculator
function Level(){
    let credits = prompt("How many credits do you have in the class?")
    let xp = {level:0, next:0, tilNext:0};
    if (credits > 0 && credits < 5 ){xp.level = 1; xp.next=2; xp.tilNext= 5 - credits;}
    else if (credits > 5 && credits < 12){xp.level = 2; xp.next=3; xp.tilNext= 12 - credits;}
    else if (credits > 12 && credits < 21){xp.level = 3; xp.next=4; xp.tilNext= 21 - credits;}
    else if (credits > 21 && credits < 34 ){xp.level = 4; xp.next=5; xp.tilNext= 34 - credits;}
    else if (credits > 34 && credits < 53){xp.level = 5; xp.next=6; xp.tilNext= 53 - credits;}
    else if (credits >= 53) {xp.level = 6; xp.next="Silver Trim!"; xp.tilNext=" Mastery of the class ;)"}
    else {alert('that is not a number')};
    if (xp.level == 6){ alert("You are level 6 already :)")}
    else if (xp.level >=1){
    alert("You are level: "+ xp.level + " with: " + xp.next + " as your next goal, and "+ xp.tilNext+" credits until that next step. You can do it!")};
    return xp
};
//////////////////States
/////////////////Stopped
function init(ev){
    let div = document.querySelector("#stopped");
    div.addEventListener("click", s1);};
function s1(ev){
   ev.currentTarget.classList.toggle("active");
    let img = document.getElementsByClassName("andy")[0];
    img.src = "img/amtgard-andy/01-stopped.jpg";
    let rules = document.getElementsByClassName("rules")[0];
    rules.textContent = " (P 52) STOPPED: Player may not move their fee. Unless otherwise noted Magic and Abilities such as Teleport, Blink, Lost, Banish, etc. which allow or require movement fail when targeting a Stopped player. "; 
///////////////////// learn to add 
//    let credit = document.getElementsByClassName("rules")[0];
//    credit.textContent = "Shout out to Dylan Coulter for his awesome artwork!";
};
/////////////////Frozen
function frozen(){
   ev.currentTarget.classList.toggle("active");
    let img = document.getElementsByClassName("andy")[0];
    img.src = "img/amtgard-andy/02-frozen.jpg";
    let rules = document.getElementsByClassName("rules")[0];
    rules.textContent = " (P 51) FROZEN: Player may not move, speak, or take any action. Can only be afected by mechanics that work on States in general (such as Release) or Frozen in specific (such as Shatter). Otherwise player and their equipment is not affected by combat, magic, etc."; };
///////////////////// learn to add 
//    let credit = document.getElementsByClassName("rules")[0];
//    credit.textContent = "Shout out to Dylan Coulter for his awesome artwork!";
