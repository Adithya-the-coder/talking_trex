function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
    })
    localStorage.setItem("room_name", room_name);
    window.location("trex_page.html");
}
function redirectToRoomName(name){
    console.log("name");
    localStorage.setItem("room_name", name);
    window.location="trex_page.html";
}

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyApBXrcKWYHYzzPRSbbbMQxtwFrpdCt-0w",
    authDomain: "talking-trex.firebaseapp.com",
    projectId: "talking-trex",
    storageBucket: "talking-trex.appspot.com",
    messagingSenderId: "196220960985",
    appId: "1:196220960985:web:67cf509805cbc328cdbec8"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML +=row;
   //End code
   });});}
getData();

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter.html";
  }