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
    else if(val==="Vector Portrait")
    document.getElementById("money").value="500";
    else if(val==="Minimal Logo Design")
    document.getElementById("money").value="600";
    else if(val==="Animated Video")
    document.getElementById("money").value="800";
    else if(val==="UI/UX Design")
    document.getElementById("money").value="900";
    else if(val==="Web Developing")
    document.getElementById("money").value="1500";
    else if(val==="App Developing")
    document.getElementById("money").value="1000";
    else if(val==="Video Editing")
    document.getElementById("money").value="2000";
    else if(val==="Photography")
    document.getElementById("money").value="400";

}

