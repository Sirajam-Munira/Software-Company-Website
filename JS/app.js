function openform(){
    document.getElementById("order-page").style.display="block";
    document.getElementById("order-button").style.display="none";
}

/*close login form*/
function closeform(){
    document.getElementById("order-page").style.display="none";
    document.getElementById("order-button").style.display="block";
}


function amount(){
    var val=document.getElementById("portfolio").value;

    if (val==="selction")
        document.getElementById("money").value="";
    else if(val==="vector")
    document.getElementById("money").value="500";
    else if(val==="logo")
    document.getElementById("money").value="600";
    else if(val==="animation")
    document.getElementById("money").value="800";
    else if(val==="ui-ux")
    document.getElementById("money").value="900";
    else if(val==="web")
    document.getElementById("money").value="1500";
    else if(val==="app")
    document.getElementById("money").value="1000";
    else if(val==="video")
    document.getElementById("money").value="2000";
    else if(val==="photo")
    document.getElementById("money").value="400";

}

