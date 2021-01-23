<?php

  extract($_GET);
  //echo $term;
  $file=fopen("category.txt","r");
 // $details=fgets($file); //fget read the php file line by line
 // echo $details;
  
  $r=array();
  
  while(!feof($file)){
	  $line=trim(fgets($file));
	  if(strpos(strtolower($line),strtolower($term))!==false) //it returns 0 also so 0 type overed to false
	  {
		  //if a term exists in the line den add to array
		  $r[]=$line;  //auto increment the index
	  }
  }
  
  echo json_encode($r);
  
?>