function hello(){
	console.log("Hello");
}
// setTimeout -> 1 udaa ajilna
// setTimeout(hello,2000);
// setInterval -> hyzgaargui ajilna
// setInterval(hello,1000);

// define
var time=document.getElementsByTagName('h1')[0];
var second=0, minute=0, hour=0;
var ol=document.getElementsByTagName('ol')[0];
// function
function watch(){
	second++;
	if(second==60){
		minute++;
		second=0;
		if(minute==60){
			hour++;
			minute=0;
		}
	}
	// ternary operator ?:
	var s=second<10 ? "0"+second : second;
	var m=minute<10 ? "0"+minute : minute;
	var h=hour<10 ? "0"+hour : hour;
	time.innerText=h+":"+m+":"+s;
}	
var up;
function start(){
	up=setInterval(watch,100);
}
// clearInterval
function stop(){
	clearInterval(up);
}
function lap(){
	// shineer tag uusgeh: document.createElement('tagName');
	var li=document.createElement('li');
	li.innerText=time.innerText;
	console.log(li);
	// .append() -> tag dotor oor neg tag nemeh
	ol.append(li);
}
