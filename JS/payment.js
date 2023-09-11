class Paying {
    constructor(name, email, types, total, method, phone, trnxid) {
        this.name = name;
        this.email = email;
        this.types = types;
        this.total = total;
        this.method = method;
        this.phone = phone;
        this.trnxid = trnxid;
    }
}

function paid() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var types = document.getElementById("portfolio").value;
    var total = document.getElementById("money").value;
    var method = document.getElementById("payment").value
    var phone = document.getElementById("phone").value;
    var trnxid = document.getElementById("transaction").value;

    let userPayment = new Paying(name, email, types, total, method, phone, trnxid);
    if (name !== "" && email !== "" && types != "selection" && total !== "" && method != "selection" && phone !== "" && trnxid != "") {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 || this.status == 200) {
                alert("Recorded!");
            }
        };
        xhttp.open("POST", "http://localhost:3000/orders/", true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send(JSON.stringify(userPayment));
    }
}