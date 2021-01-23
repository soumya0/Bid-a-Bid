<?php
	extract($_GET);
	
	while(true){
		//	$category="mansion";
		echo $category;
		$file=$category.".txt";
		$lines = file($file);
		$lastline = $lines[count($lines)-1];
		echo $lastline;
		ob_flush();
		flush();
		sleep(5);
	}
?>