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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();

function send(){
 msg = document.getElementById("msg").value;
 firebase.database().ref(room_name).push({
       name:user_name,
       message:msg,
       like:0
 });
 document.getElementById("msg").value = "";
}