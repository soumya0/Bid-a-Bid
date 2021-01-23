// PERIODIC REFRESH

function run(category){
	console.log(category);	
	var box=document.getElementById("box");
	box.innerHTML="";
	
	//  keep checking in checkUpdate.php if there is an update 	
	xhr=new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){
			var res=xhr.responseText;
			//res="Mansion:asdsaiuih:30000:hkjk.jnk.:30000:2017-04-10:pics/watch/1.jpg";
			console.log("----");	
			console.log(res);	
			var line=res.split(":");
			console.log(line[6]);
			box.innerHTML= "<img width='200px' height='200px' src='"+line[6]+"'><br>";
			
		}	
	};
	xhr.open("GET","http://localhost/PROJECT1/js/checkUpdate.php?category="+category,true);
	xhr.send();
}