player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("playerqus").innerHTML = "Question turn - " + player1_name;
document.getElementById("playerans").innerHTML = "Answer turn - " + player2_name; 


function send(){
     DNumber1 = document.getElementById("dnum1").value;
     DNumber2 = document.getElementById("dnum2").value;
     MNumber1 = document.getElementById("mnum1").value;
     MNumber2 = document.getElementById("mnum2").value;
     ANumber1 = document.getElementById("anum1").value;
     ANumber2 = document.getElementById("anum2").value;
     SNumber1 = document.getElementById("snum1").value;
     SNumber2 = document.getElementById("snum2").value;

     dactual_answer = parseInt(DNumber1) / parseInt(DNumber2);
     mactual_answer = parseInt(MNumber1) * parseInt(MNumber2);
     aactual_answer = parseInt(ANumber1) + parseInt(ANumber2);
     sactual_answer = parseInt(SNumber1) - parseInt(SNumber2);

     dquestion_number = "<h4 style='color:black;'>" + DNumber1 + " / " + DNumber2 + "</h4>" + "<br>";
     mquestion_number = "<h4 style='color:black;'>" + MNumber1 + " x " + MNumber2 + "</h4>" + "<br>";
     aquestion_number = "<h4 style='color:black;'>" + ANumber1 + " + " + ANumber2 + "</h4>" + "<br>";
     squestion_number = "<h4 style='color:black;'>" + SNumber1 + " - " + SNumber2 + "</h4>" + "<br>";
     danswer_box = "Division answer : <input type='text' id='dans'>";    
     manswer_box = "Multipliction answer : <input type='text' id='mans'>";   
     aanswer_box = "Addition answer : <input type='text' id='aans'>";   
     sanswer_box = "Subtration answer : <input type='text' id='sans'>"; 
     check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
     row =  dquestion_number +  mquestion_number + aquestion_number + squestion_number + danswer_box + manswer_box + aanswer_box + sanswer_box + check_button;
     document.getElementById("output").innerHTML = row;
     document.getElementById("DNumber1").value = "";
     document.getElementById("DNumber2").value = "";
     document.getElementById("MNumber1").value = "";
     document.getElementById("MNumber2").value = "";
     document.getElementById("ANumber1").value = "";
     document.getElementById("ANumber2").value = "";
     document.getElementById("SNumber1").value = "";
     document.getElementById("SNumber2").value = "";
}

question_turn = "player1";
answer_turn = "player2";

function check(){
     if(answer == dactual_answer){
          if (answer_turn == "player1") {
               player1_score = player1_score + 1;
               document.getElementById("player1_score").innerHTML = player1_score;
          } else {
               player2_score = player2_score + 1; 
               document.getElementById("player2_score").innerHTML = player2_score;
          }
     }

     if (question_turn == "player1") {
          question_turn = "player2"
          document.getElementById("playerqus").innerHTML = "Question turn - " + player2_name;
     } else {
          question_turn = "player1"
          document.getElementById("playerqus").innerHTML = "Question turn - " + player1_name;
     }

     if (answer_turn == "player1") {
          answer_turn = "player2"
          document.getElementById("playerqus").innerHTML = "Answer turn - " + player2_name;
     } else {
          answer_turn = "player1"
          document.getElementById("playerqus").innerHTML = "Answer turn - " + player1_name;
     }
     document.getElementById("output").innerHTML = "";
}