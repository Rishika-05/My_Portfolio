

$(document).ready(function(){
	var x=document.getElementById("sidenav");
	var y=document.getElementById("menubar");
	x.style.width="0px";
	y.onclick()=function(){
		if(x.style.width=="0px"){
			x.style.width="230px";
		}
		else{
			x.style.width="0px";
		}
	}
})
