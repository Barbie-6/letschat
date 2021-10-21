player_name = localStorage.getItem("player_name");

const firebaseConfig = {
    apiKey: "AIzaSyA15KPvDDIGPExGmyHBeI1BTd5eOfQP_a0",
    authDomain: "kwitter-7017f.firebaseapp.com",
    databaseURL: "https://kwitter-7017f-default-rtdb.firebaseio.com",
    projectId: "kwitter-7017f",
    storageBucket: "kwitter-7017f.appspot.com",
    messagingSenderId: "680301630858",
    appId: "1:680301630858:web:c67a6a466436de75fba473",
    measurementId: "G-FZ6Z26D6S2"
  };
  

  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

	user_name = localStorage.getItem("user_name");
	room_name = localStorage.getItem("room_name");

	user_name = localStorage.getItem("user_name");
	room_name = localStorage.getItem("room_name");

  

function send()
{
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    
    question_number ="<h4>" + number1 + "X" + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-success' onclick='check();'>Check</button";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}
