

var menu=document.getElementById("menubar");
//var sidenav=document.getElementById("sidenav");
$("#sidenav").css("width","0px");
$("#sidenav").css("font-size","0px");
menu.onclick=function(){
	if (sidenav.style.width=="0px"){
		$("#sidenav").css("width","230px");
		$("#sidenav").css("font-size","25px");
	}
	else{
		$("#sidenav").css("width","0px");	
		$("#sidenav").css("font-size","0px");
	}
}

const url1 = 'https://codeforces.com/api/user.info?handles=_Rishika_';
const url2 = 'https://codeforces.com/api/user.status?handle=_Rishika_&from=1&count=1000';
async function getRating(){
	const response = await fetch(url1);
	const data = await response.json();
	if(data.status === "OK" ){
		$(".code-r").append("<b>Current rating :   </b>" + "<em>"+ data.result[0].rating +"</em>"+ "<br /><br /> <b> Rank :   </b>" + "<em>"+data.result[0].rank+"</em>");
	}
}
async function getSubmission(){
	const response = await fetch(url2);
	const data = await response.json();
	if(data.status === "OK" ){
		var c = 0;
		for( i = 0 ; i < data.result.length ; i++ ){
			if( data.result[i].verdict === "OK" )
			{
				c = c+1;
			}
		}
		$(".code-r").append("<br/><br/><b>Number of questions solved :   </b>"+ "<em>"+c+"</em>"+"<br /><br/><b>Total number of submissions :   </b>"+ "<em>"+data.result.length+"</em>");
	}
}
getRating();
getSubmission();
