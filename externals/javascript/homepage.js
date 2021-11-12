const api_url = 'https://rusttools.xyz/api/forcewipe';

async function grabData() {
    const responce = await fetch(api_url);
    const data = await responce.json();
    console.log(data)
}



function typingEffect() {
    var app = document.getElementById('welcome-desc');

    var typewriter = new Typewriter(app, {
        loop: true
    });

    typewriter.typeString('pro gta player')
        .deleteAll()
        .typeString('extreme python coder')
        .deleteAll()
        .typeString('pussy magnet')
        .deleteAll()
        .typeString('sexy man with very big 6 pack')
        .start();
}

function changeTxt() {
    document.getElementById("yes").innerHTML = "New text!";
}

function playMusic(){
    var music = new Audio('externals/music/music.mp3');
    music.play();
}
  
var tday=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var tmonth=["January","February","March","April","May","June","July","August","September","October","November","December"];

function GetClock(){
  var d=new Date();
  var nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate();
  var nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds(),ap;

  if(nhour==0){ap=" AM";nhour=12;}
  else if(nhour<12){ap=" AM";}
  else if(nhour==12){ap=" PM";}
  else if(nhour>12){ap=" PM";nhour-=12;}

  if(nmin<=9) nmin="0"+nmin;
  if(nsec<=9) nsec="0"+nsec;

  var clocktext="[play some music] | ["+tday[nday]+", "+tmonth[nmonth]+" "+ndate+" "+nhour+":"+nmin+":"+nsec+ap+"]";
  document.getElementById('footer').innerHTML=clocktext;
}