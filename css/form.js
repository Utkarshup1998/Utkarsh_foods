function validation()
{
	var fuser=document.getElementById("fuser").value;
	var dob=document.getElementById("Dob").value;
	var number=document.getElementById("number").value;
	var email=document.getElementById("email").value;
	var text;



	if((fuser==null || fuser="")&&(dob==null || dob="")&&(email==null || email="")&&(number==null || number=""))
		alert("all fields must be filled out");
		return false;

	




		if(fuser=="")
		{
			text="**please fill out this field";
			document.getElementById('text').innerHTML=text;
			return false;
		}
		else
		{
			text="";
			document.getElementById('text').innerHTML=text;
		}




		if(dob=="")
		{
			text="**please fill out ";
			document.getElementById('text1').innerHTML=text;
			return false;
		}
		else
		{
			text="";
			document.getElementById('text1').innerHTML=text;
		}




		if(number=="")
		{
			text="**please fill out ";
			document.getElementById('text2').innerHTML=text;
			return false;
		}
		else
		{
			text="";
			document.getElementById('text2').innerHTML=text;
		}



		if(isNaN(number))
		{
			text="not valid";
			document.getElementById('text2').innerHTML=text;
			return false;
		}
		else
		{
			text="";
			document.getElementById('text2').innerHTML=text;			
		}




		if(number.length!="10")
		{
			text="max length 10";
			document.getElementById('text2').innerHTML=text;
			return false;
		}
		else
		{
			text="";
			document.getElementById('text2').innerHTML=text;
		}




		if(email=="")
		{
			text="**please fill out this field ";
			document.getElementById('text3').innerHTML=text;
			return false;
		}
		else
		{
			text="";
			document.getElementById('text3').innerHTML=text;
		}

}