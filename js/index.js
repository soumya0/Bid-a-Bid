////////////// MULTISTAGE DOWNLOAD START
function run(){
		xhr=new XMLHttpRequest();
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4 && xhr.status == 200){
				document.getElementById("pic").innerHTML = xhr.responseText;
			}	
		};
		xhr.open("GET","pics/gifimage.txt",true);
		xhr.send();
		
		setTimeout(loadpic,3000);
	}
		
	function loadpic(){			
		xhr.open("GET","pics/txtimage.txt",true);
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4 && xhr.status == 200){
				document.getElementById("pic").innerHTML = xhr.responseText;
			}	
		};	
		xhr.send();		
	}
////////////// MULTISTAGE DOWNLOAD END


