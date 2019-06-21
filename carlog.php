<?php
	$con=mysqli_connect('localhost','root','') or die("unable to connect");
	mysqli_select_db($con , 'carlog');
?>
<!DOCTYPE html>
<html>
	<head>
		<title>login form</title>
		<link href="carlog1.css" rel="stylesheet" type="text/css">
		<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lobster&effect=brick-sign">
<style>
.w3-lobster {
  font-family: "Lobster", Sans-serif;
}
</style>

	</head>
	<body background="cars4.jpg">
	<div class="w3-container w3-lobster font-effect-brick-sign">
<h2 class="w3-xxxlarge"><center>LOGIN</center></h2>
</div>

	<div class="login">
			<form class="control" method="post" action="carlog.php">
				<p>NAME:</P><input type="text" class="form-control" name="name" placeholder="enter your name" required><br>
				<p>PASSWORD:</P><input type="password" class="form-control" name="password" placeholder="enter your password" required><br><br>
				<input type="submit" class="form-con" value="LOGIN" name="login"><b>LOGIN</b><br><br><br>
				<a href="carsign.php"><input type="button" class="form-con" value="SIGN UP" name="signup"><b>SIGN UP</b></a><br><br>
			</form>
			<?php
			if(isset($_POST['name']))
			{
				$name=$_POST['name'];
				$password=$_POST['password'];
				$query= "SELECT name FROM nav WHERE name='$name' AND password='$password'";
				$query_run= mysqli_query($con,$query);
				//$row=mysql_query($query);
				$row=mysqli_num_rows($query_run);
				
				if($row == 1)
				{
					session_start();
					$_SESSION['name']=$_post['name']
					$_SESSION['name']=$name;
					header("location: button.html");
				}
				else
				{
					echo'<script type="text/javascript">alert("invalid credentials")</script>';
				}
			}	
			?> 
		</div>
		
	</body>
</html>