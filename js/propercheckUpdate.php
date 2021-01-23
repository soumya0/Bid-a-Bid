<?php
	extract($_GET);
	ob_start();
	ob_flush();
	flush();
	
	$oldtime=filemtime($category.".txt");
	while(true){
		clearstatcache();
		$newtime=filemtime($category.".txt");
		if($newtime>$oldtime){
			$file=$category.".txt";
			$lines = file($file);
			$lastLine = $lines[count($lines)-2];
			echo $lastline;
			ob_flush();
			flush();
			$oldtime=$newtime;	
		}
		
		sleep(5);
	}
?>