
<?php
//Written By Ben Weinfeld
//Bar Crawler Info Script
function barInfo() {
	echo json_encode("data");
}

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allows-Methods: GET, POST');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Content-Type Authorization, X-Requested-With');
if($_SERVER["REQUEST_METHOD"] == "POST"){
	getNextOrder();;
}
elseif($_SERVER["REQUEST_METHOD"] == "GET"){
	getNextOrder();
}

else{
	exit(0);
}
?>
