function changebold(){
    var getid=document.getElementById("message");
    if(getid.style.fontWeight=="bold")
    {
        getid.style.fontWeight="normal"; 
    }
    else
    {
        getid.style.fontWeight="bold";
    }
}
function changeitalic(){
    var getid=document.getElementById("message");
    if(getid.style.fontStyle=="italic")
    {
        getid.style.fontStyle="normal"; 
    }
    else{
        getid.style.fontStyle="italic";
    }
}
function changeunderline(){
    var getid=document.getElementById("message");
    if(getid.style.textDecoration=="underline")
    {
        getid.style.textDecoration="none";
    }
    else{
        getid.style.textDecoration="underline";
    }
}
function changesize(event){
    
    document.getElementById("message").style.fontSize=event.value;
}

function changefont(event)
{
    document.getElementById("message").style.fontFamily=event.value;
}