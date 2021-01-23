		var Suggest=function(){
		temp=this;		
		this.timer=null
		this.search=null
		this.getTerm=function(){
			
			if(this.timer){
			
				clearTimeout(this.timer);
			}
		
			this.timer=setTimeout(this.sendTerm,1000)//calls sendTerm function after one second.
		
		}
		this.sendTerm=function(){
		
			temp.search=document.getElementById("item");
			console.log(temp.search.value);//typed in search term is displayed
			//console.log(this);
			//console.log(temp);
			
			//Empty?
			if(temp.search.value==""){
			   
			document.getElementById("container").innerHTML="";
			}
			else
			{
			    xml=new XMLHttpRequest();
				xml.onreadystatechange=temp.show;
				xml.open("GET","php/sub.php?term="+temp.search.value,true);
				xml.send();
			}
	    }
		this.show=function()
		{
		   if(xml.readyState==4 && xml.status==200)
		   {
		       f=JSON.parse(xml.responseText);
               //console.log(f);
          
			    for(var i=0;i<f.length;i++)
				{
                   document.getElementById("container").innerHTML+=f[i]+"</br>";
                }			   
		   }
		}
				
				
		}
				
			var obj=new Suggest();
