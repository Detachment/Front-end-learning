function myAjax(url, fnsucc, fnfail)
{
    var oAjax=new XMLHttpRequest();
    
    oAjax.open('GET', url, true);
    
    oAjax.send();
    
    oAjax.onreadystatechange=function ()
    {
        if(oAjax.readyState==4)
        {
            if(oAjax.status==200)
            {
                fnsucc(oAjax.responseText);
            }
            else
            {
                if(fnfail)
                {
                    fnfail(oAjax.status);
                }
            }
        }    
    };
};