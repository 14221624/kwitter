// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
      apiKey: "AIzaSyCl2QjqXnZMde0SQ3YIiowdgmwDKSyMeqU",
      authDomain: "kwitterthetwitter.firebaseapp.com",
      databaseURL: "https://kwitterthetwitter-default-rtdb.firebaseio.com",
      projectId: "kwitterthetwitter",
      storageBucket: "kwitterthetwitter.appspot.com",
      messagingSenderId: "1013391594734",
      appId: "1:1013391594734:web:e115937491f10729aa4fff",
      measurementId: "G-P06GGRDJBM"
    };
  
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
        console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
        {
            room_name = document.getElementById("room_name").value;

            firebase.database().ref("/").child(room_name).value;({
                  purpose : "adding room name"
            });

            localStorage.setItem("room_name", room_name);

            window.location = "kwitter_page.html";
        }

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}


function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
       window.location = "index.html"
}