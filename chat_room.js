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

function addRoom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "chat_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code
            console.log("Roon Name - " + Room_names);
            row = "<div 'class=room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
            //End code
        });
    });
}
getData();

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html")
}