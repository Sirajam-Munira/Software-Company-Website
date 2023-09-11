//get method
function loginAdmin() {
    var emails = document.getElementById("aEmail").value;
    var pass = document.getElementById("password").value;
    var admin;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            admin = JSON.parse(this.responseText);
            if (admin !== "") {
                if (admin[0].email === emails && admin[0].password === pass) {
                    window.location.href = "http://127.0.0.1:5500/HTML/admin.html";
                }
                else {
                    window.location.href = "http://127.0.0.1:5500/HTML/contact.html";
                    alert("Login Failed!");
                }
            } else {
                alert("Login Failed");
            }
        }
    };
    xhttp.open("GET", "http://localhost:3000/admins/", true);
    xhttp.send();
}