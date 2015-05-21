<?php

/* file_get_content() reads the file and convert it into string and by using json_decode we can determine which 
 part of data we would like to access.
 Note: In php code we use $_POST global varibale to aacess post variable. If we use angular then there will be problem
 POSt method which angular uses send data using JSON. so in PHP if we use $)POST directly we will not able to receive
  POST data
*/
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

 @$username = mysql_real_escape_string($request->username);
 @$pass = mysql_real_escape_string($request->pass);
 @$city= mysql_real_escape_string($request->city);
echo "success"; 
?>