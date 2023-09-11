//get method
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var contacts = JSON.parse(this.responseText);
        buildTable(contacts);
    }
};
xhttp.open("GET", "http://127.0.0.1:3000/orders/", true);
xhttp.send();

function buildTable(data) {
    console.log(data[0].username);
    console.log(data.lenght);
    var table = document.getElementById('table_order');
    var i = 0;
    while (data[i].username != "") {
        var row = '<tr><td>' + data[i].name + '</td><td>' + data[i].email + '</td><td>' + data[i].types + '</td><td>' 
        + data[i].total + '</td><td>' + data[i].method + '</td><td>' + data[i].phone + '</td><td>' 
        + data[i].trnxid + '<td>'
            + '</td><td><div class="action_container"><button class="danger" onclick="remove_tr(this)"><i class="fa fa-close"></i></button></div></td></tr>';
        table.innerHTML += row;
        i++;
    }
}


function remove_tr(This) {
    if (This.closest('tbody').childElementCount == 1) {
        alert("You Don't have Permission to Delete This ?");
    } else {
        This.closest('tr').remove();
    }
}