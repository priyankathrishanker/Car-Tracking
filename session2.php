<?php
      if($_SESSION['logged_in']){
			echo 'wel'.$_SESSION['name'];
	  }
	  else{
		  header('Location:carlog.php');  
?>