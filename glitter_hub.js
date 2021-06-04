var firebaseConfig = {
  apiKey: "AIzaSyDy9zoP60HEUXFkW-Yl_MOuQF0ecR_D7IA",
  authDomain: "kwitter-72c5d.firebaseapp.com",
  databaseURL: "https://kwitter-72c5d-default-rtdb.firebaseio.com",
  projectId: "kwitter-72c5d",
  storageBucket: "kwitter-72c5d.appspot.com",
  messagingSenderId: "1063806479057",
  appId: "1:1063806479057:web:d47f276ebf664e5679b3f0"
};
firebase.initializeApp(firebaseConfig);
  
username = localStorage.getItem("username");
document.getElementById("user_name").innerHTML ="Welcome to Glitter " + username + "!";
function addRoom(){
  room_name = document.getElementById("room_name").value;
  console.log("room_name = "+room_name);
  row = "<div class='room_name' id='"+Room_names+"' onclick='next_page(this.id)'> #"+Room_names +" </div><hr>";
  document.getElementById("output").innerHTML = row;
  firebase.database().ref("/").child(room_name).update({
    "room_name": room_name
  })
  window.location = "room_page.html";
}
function logout(){
window.location = "login_page.html";
}
function getData() {
firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
 //Start code

 //End code
 });});}

 getData();
