

<?php
	$con=mysqli_connect('localhost','root','') or die("unable to connect");
	mysqli_select_db($con , 'carlog');
	?>
	<!DOCTYPE html>
    <html>
	<head>
		<title>signup form</title>
		<link href="carlog1.css" rel="stylesheet" type="text/css">
	</head>
	<body background="road.jpg">
	<center><h1>SIGNUP HERE</h1></center>
		<div class ="signup">
			<form class="control" method="post" action="button.html">
				<p>NAME:</P><input type="text" class="form-control" name="name" placeholder="enter your name" required><br><br><br>
				<p>PASSWORD:</P><input type="password" class="form-control" name="password" placeholder="enter your password" required><br><br><br>
				<p>CONFORM PASSWORD:</P><input type="password" class="form-control" name="cpassword" placeholder="enter your password" required><br><br><br><br>
				<input type="submit" class="form-con" value="SIGN UP" name="signup"><br>
			</form>
	<?php
				if(isset($_POST['signup']))
				{
					//echo'<script type="text/javascript">alert("signup button clicked");</script>';
					$name=$_POST['name'];
					$password=$_POST['password'];
					$cpassword=$_POST['cpassword'];
					
					if($password==$cpassword)
					{
						$query1= "select * from nav WHERE name='$name'";
						$query_run1=mysqli_query($con,$query1);
						$c=mysqli_num_rows($query_run1);
						if($c > 0)
						{
							echo'<script type="text/javascript">alert("username already exist");</script>';
						}
						else
						{
							$query2="insert into nav(name,password)VALUES('$name','$password')";
							$query_run2=mysqli_query($con,$query2);
								if($query_run2)
								{
									echo'<script type="text/javascript">alert("username registered");</script>';
								}
							
						}
					}
					else
					{
						echo'<script type="text/javascript">alert("password incorrect");</script>';	
					}
				}
?>
</div>

	</body>
</html>