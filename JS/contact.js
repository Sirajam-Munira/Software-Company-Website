// //get method
// function loadDoc() {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function () {

//     if (this.readyState == 4 && this.status == 200) {
//       var hel = JSON.parse(this.responseText);
//       console.log(hel[0].types);
//     }
//   };
//   xhttp.open("GET", "http://localhost:3000/projects/", true);
//   xhttp.send();
// }

// post method
class Contacting{
  constructor(username, email, messages){
    this.username = username;
    this.email = email;
    this.messages = messages;
  }
}

function loadDoc() {
  var username = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var messages = document.getElementById("msg").value;
  let userContact = new Contacting(username, email, messages);
  
  if(username!=="" && email!=="" && messages!==""){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 || this.status == 200) {
        alert("Message Sent!");
      }
    };
    xhttp.open("POST", "http://localhost:3000/contacts/", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(userContact));
  }
}