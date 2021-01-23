// PERIODIC REFRESH

function run(category){
	console.log(category);	
	var box=document.getElementById("box");
	box.innerHTML="";
	
	//  keep checking in checkUpdate.php if there is an update 	
	xhr=new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState==3 && xhr.status==200){
			var res=xhr.responseText;
			add(res);
		}	
	};
	xhr.open("GET","php/checkUpdate.php?category="+category,true);
	xhr.send();
}

// called when there is an update
function add(res){
	// get new item from retrieve.php
	var line=res.split(":");
	
	// split the line and get required data
	
	row=document.createElement("div");
	col=document.createElement("div");
	box=document.getElementById("box");
	
	row.appendChild(col);
	box.appendChild(row);
	
	row.className="row";
	col.className="col-md-12";
	
	col.id=line[0];
	
	name=document.createElement("div");
	name.innerHTML=line[0];
	col.appendChild(name);
	
	img=document.createElement("img");
	img.src=line[7];
	col.appendChild(img);
	
	price=document.createElement("div");
	price.id=line[0];
	price.innerHTML="Price: "+line[2];	
	col.appendChild(price);
	
	button=document.createElement("button");
	button.value("BUY");
	col.appendChild(button);

	button.onclick(buyItem(line[0]));	
}

function buyItem(name){
	
	xhr=new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			
			var col=document.getElementById(line[0]);
			
			var input = document.createElement("input");
			input.type = "text";
			col.appendChild(input);
			
			setTimeout(gotosleep,5000);
			
			var amount=input.value; // get the current value of the input field.
			
			button=document.createElement("button");
			button.value("DONE");
			button.onclick(buyItem(line[0]));	

			document.getElementById(name).innerHTML = xhr.responseText;
		}	
	};
	xhr.open("GET","php/buy.php?category="+category+"&name="+name+"&price="+name,true);
	xhr.send();
}

function gotosleep(){}