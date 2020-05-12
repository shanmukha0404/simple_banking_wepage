function validate()
{
    //name validation
var name=document.getElementById("name").value
if(name.length==null)
{
    return false
}
else if(name.length<=3)
{
    document.getElementById("nmsg").innerHTML="*Enter the full name"
    return false
}
else if(name.length>20)
{
    document.getElementById("nmsg").innerHTML="*Length should be lessthan 20"
    return false
}
    //aadhar validation
var aadhar=document.getElementById("aadhar").value
if(aadhar.length==null)
{
    document.getElementById("amsg").innerHTML="*Enter aadhar number"
    return false
}
else if(isNaN(aadhar))
{   
    document.getElementById("amsg").innerHTML="Aadhar should contains only number"
    return false
}
else if(aadhar.length<12 || aadhar.length>12)
{
    document.getElementById("amsg").innerHTML="*Enter valid aadhar number"
    return false
}

//mobile number validation
var mobile=document.getElementById("mobile").value
if(mobile.length==null)
{
     
    return false
}
else if(isNaN(mobile))
{   
    document.getElementById("mmsg").innerHTML="Mobile should contains only number"
    return false
}
else if(mobile.length<10 || mobile.length>10)
{
    document.getElementById("mmsg").innerHTML="*Enter valid mobile number"
    return false
}
//gmail validation

var gm=document.getElementById("mail").value    
var res=(/^\[a-z](@gmail.com)$/.test(gm))
if(res==false)
{
    document.getElementById("emsg").innerHTML="Plz enter valid mail ID"
    return false
}


var pwd=document.getElementById("password").value
var cpwd=document.getElementById("cpassword").value
if(pwd.length==0)
{
    document.getElementById("pmsg").innerHTML="plz enter password"
    return false
}
else if(pwd.length<3)
{
    document.getElementById("pmsg").innerHTML="Enter pasword with min of 5 char"
    return false
}

}