

$(document).ready(function(){
	$("#sidenav").css("width","0px");
	$("#menubar").onclick()=function(){
		if($("#sidenav").css("width")=="0px"){
			$("#sidenav").css("width","230px");
		}
		else{
			$("#sidenav").css("width","0px");
		}
	}
})
