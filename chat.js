// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyAeTBkNzyWh5rlVGkoHDwoh_Vud1l5zEAU",
    authDomain: "lets-chat-web-app-7f7f3.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-7f7f3-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-7f7f3",
    storageBucket: "lets-chat-web-app-7f7f3.appspot.com",
    messagingSenderId: "720794130879",
    appId: "1:720794130879:web:14f2b4e5da9e9c7f62290a"
  };
  firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });


    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html"
}



