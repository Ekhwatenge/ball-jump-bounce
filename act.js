var ball=document.getElementsByClassName('ball');
var shadow=document.getElementsByClassName('shadow')[0];
var color=['blue','#68FF00','#FF00FF','red'];
var j=0;
var c;
setInterval(function(){
if(j>3){
	j=0;
}
c=color[j];
  shadow.style.background=c;
for(var i=0;i<ball.length;i++){
ball[i].style.background=c;
}
j++;
},1000);
