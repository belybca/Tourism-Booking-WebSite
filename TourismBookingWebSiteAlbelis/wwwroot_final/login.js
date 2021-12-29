var login_username="AlbelisBecea@proj.ca";
var login_password="123";

function login()
{
var v1, v2;
v1 = document.login_form.username.value; 
v2 = document.login_form.password.value;
	if ((v1 == login_username) &&
	   (v2 ==  login_password))
	{
		parent.location.href ="indexMenu.html";
	}
	else
	{    
	    alert("User Name:  AlbelisBecea@proj.ca\nPassword 123");
		parent.location.href ="Index_account.html";
		
	}
}

function logOut()
{
		parent.location.href ="index.html";
}



