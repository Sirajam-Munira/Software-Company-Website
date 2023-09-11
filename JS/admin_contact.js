//get method
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var contacts = JSON.parse(this.responseText);
        buildTable(contacts);
    }
};
xhttp.open("GET", "http://localhost:3000/contacts/", true);
xhttp.send();

function buildTable(data) {
    console.log(data[0].username);
    console.log(data.lenght);
    var table = document.getElementById('table_contact');
    var i = 0;
    while (data[i].username != "") {
        var row = '<tr><td>' + data[i].username + '</td><td>' + data[i].email + '</td><td>'+ data[i].messages 
         
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