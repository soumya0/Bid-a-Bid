<?php
	// get url of new image from db
	extract($_GET);
	$file = fopen("seats.txt", "r");
	$seats=explode("\t",trim($file));
	
  	$PES_CS=$seats[0];
  	$PES_IS=$seats[1];
  	$RVCE_CS=$seats[2];
  	$RVCE_IS=$seats[3];		
	// send all the details to js
	
	$res=json_encode($count);
	echo "".$res;
?>