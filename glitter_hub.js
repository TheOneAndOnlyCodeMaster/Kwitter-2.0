var firebaseConfig = {
    apiKey: "AIzaSyDy9zoP60HEUXFkW-Yl_MOuQF0ecR_D7IA",
    authDomain: "kwitter-72c5d.firebaseapp.com",
    databaseURL: "https://kwitter-72c5d-default-rtdb.firebaseio.com",
    projectId: "kwitter-72c5d",
    storageBucket: "kwitter-72c5d.appspot.com",
    messagingSenderId: "1063806479057",
    appId: "1:1063806479057:web:d47f276ebf664e5679b3f0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
username = localStorage.getItem("username");
document.getElementById("user_name").innerHTML ="Welcome to Glitter " + username + "!";
function addRoom(){
  room_name = document.getElementById("room_name").value;
  rowName = "<h2 class='center' onclick='goToRoom()'>#"+room_name+"</h2>";
  document.getElementById("output").innerHTML = rowName;
}
function getData() {
firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
 //Start code

 //End code
 });});}

 getData();
