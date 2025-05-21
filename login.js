function login(from)
{
    if(from.username.value=="Akash")
    {
        if(from.password.value=="123456")
        {
            location="homepage.html";
        }
        else
        {
            alert("enter correct password");
        }
    }
    else
    {
        alert("enter correct username");
    }
}