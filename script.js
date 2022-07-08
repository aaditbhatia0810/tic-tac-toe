var c =["You’re so smart and good at what you do!","You light up the room with your awesome personality","Get going","It is deeply satisfying to win in front of a lot of people.","Opportunity doesn't make appointments, you have to be ready when it arrives.","Be the winner in your life!"]
var p1 = prompt("Name of Player1");
var p2 = prompt("Name of Player2");
var s1=0;
var s2=0;
var t = 0;
var g ="";
var w;
document.getElementById('player1').innerHTML = p1;
document.getElementById('player2').innerHTML = p2;
function score(){
    if(w==p1){
            s1+=1;
            document.getElementById('score1').innerHTML = s1;

        }else{
            s2+=1;
            document.getElementById('score2').innerHTML = s2;
        }
}
var turn = function trn(but){    
    if(t%2==0){
        w=p1;
    }else{
        w=p2;
    }
    if(document.getElementById(but).innerHTML=="-"){
        if(t%2==0){
            g = "0";
        }else{
            g = "X";
        }
        t+=1;
        document.getElementById(but).innerHTML = g;
    }
    for(i=1;i<=9;i+=3){
    if(document.getElementById(i.toString()).innerHTML == g && document.getElementById((i+1).toString()).innerHTML == g && document.getElementById((i+2).toString()).innerHTML == g){
        if(document.getElementById("r").innerHTML =="Play Again!"){
            document.getElementById("r").innerHTML ="Restart";
        }else{
            document.getElementById("r").innerHTML ="Play Again!";
        }                turn="";
        alert(w+" Wins!!"+"\n"+c[Math.floor(Math.random()*(c.length))]);
        score();
        turn="";
        return
        }
    }
    for(i=1;i<=3;i++){
    if(document.getElementById(i.toString()).innerHTML == g && document.getElementById((i+3).toString()).innerHTML == g && document.getElementById((i+6).toString()).innerHTML == g){
        if(document.getElementById("r").innerHTML =="Play Again!"){
            document.getElementById("r").innerHTML ="Restart";
        }else{
            document.getElementById("r").innerHTML ="Play Again!";
        }                turn="";                
        alert(w+" Wins!!"+"\n"+c[Math.floor(Math.random() * (c.length))]);
        score();
        turn="";
        return
        }
    }
    if(document.getElementById("1").innerHTML == g && document.getElementById("5").innerHTML == g && document.getElementById("9").innerHTML == g){
        if(document.getElementById("r").innerHTML =="Play Again!"){
            document.getElementById("r").innerHTML ="Restart";
        }else{
            document.getElementById("r").innerHTML ="Play Again!";
        }                
        alert(w+" Wins!!"+"\n"+c[Math.floor(Math.random() * (c.length))]);
        score();
        turn="";
        return
    }
        
    if(document.getElementById("7").innerHTML == g && document.getElementById("5").innerHTML == g && document.getElementById("3").innerHTML == g){
        if(document.getElementById("r").innerHTML =="Play Again!"){
            document.getElementById("r").innerHTML ="Restart";
        }else{
            document.getElementById("r").innerHTML ="Play Again!";
        }
        alert(w+" Wins!!"+"\n"+c[Math.floor(Math.random() * (c.length))]);
        score();
        turn="";
        return
    }
}
const f = turn;
function reload(){
    for(i=1;i<=9;i++){
        document.getElementById(i.toString()).innerHTML = "-";
        t=0;
        turn=f;
        document.getElementById("r").innerHTML ="Restart";
    }
}