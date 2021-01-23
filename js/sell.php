<?php
$itemname = $_POST["itemname"];
$price = $_POST["price"];
$desc = $_POST["desc"];
$currprice = $_POST["price"];
$validity = $_POST["validity"];
$inputimg = $_POST["inputimg"];

if($_POST["category"]=="Mansion")
{
	$category=$_POST["category"];
	$fp = fopen("mansion.txt", "a");
	$string =$category .":".$itemname .":" . $price .":" . $desc .":" . $currprice .":" . $validity.":" . $inputimg . ":\n";
	fwrite($fp, $string);
	fclose($fp);
}
else if($_POST["category"]=="Ornament")
{
	$category=$_POST["category"];
	$fp = fopen("ornament.txt", "a");
	$string =$category .":".$itemname .":" . $price .":" . $desc .":" . $currprice .":" . $validity.":" . $inputimg . ":\n";
	fwrite($fp, $string);
	fclose($fp);
}
else if($_POST["category"]=="Painting")
{
	$category=$_POST["category"];
	$fp = fopen("painting.txt", "a");
	$string =$category .":".$itemname .":" . $price .":" . $desc .":" . $currprice .":" . $validity.":" . $inputimg . ":\n";
	fwrite($fp, $string);
	fclose($fp);
}
else if($_POST["category"]=="Vehicle")
{
	$category=$_POST["category"];
	$fp = fopen("vehicle.txt", "a");
	$string =$category .":".$itemname .":" . $price .":" . $desc .":" . $currprice .":" . $validity.":" . $inputimg . ":\n";
	fwrite($fp, $string);
	fclose($fp);
}
else
{
	$category=$_POST["category"];
	$fp = fopen("other.txt", "a");
	$string =$category .":".$itemname .":" . $price .":" . $desc .":" . $currprice .":" . $validity.":" . $inputimg . ":\n";
	fwrite($fp, $string);
	fclose($fp);
}


//$f="form.txt";

//fclose($fp);
?>