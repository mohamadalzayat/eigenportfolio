<?php

/* Mohamad Alzayat - Hollandsweb.com */
/* Editable entries are bellow */

if( isset($_POST['u_name']) && isset($_POST['u_email']) && isset($_POST['u_message']) && isset($_POST['zichzelf']) && $_POST['zichzelf'] == 'ja' ){
	$n = $_POST['u_name']; // HINT: use preg_replace() to filter the data
	$e = $_POST['u_email'];
	$m = nl2br($_POST['u_message']);
	$to = "mohamadalzayat@hollandsweb.com";	
	$from = $e;
	$subject = 'Contact Form Message';
	$message = '<b>Name:</b> '.$n.' <br><b>Email:</b> '.$e.' <p>'.$m.'</p>';
	$headers = "From: $from\n";
	$headers .= "MIME-Version: 1.0\n";
	$headers .= "Content-type: text/html; charset=iso-8859-1\n";
	if( mail($to, $subject, $message, $headers) && mail($from, $subject, $message, $headers); ){
		echo "success";
	} else {
		echo "The server failed to send the message. Please try again later.";
	}
}
//if( isset($_POST['zichzelf']) && $_POST['zichzelf'] == 'ja' ) {
//    mail($from, $subject, $message, $headers);
//}
?>

