var player1 = localStorage.getItem("player1");
var player2 = localStorage.getItem("player2");

var player1_score = 0;
var player2_score = 0;

document.getElementById("player1_name").innerHTML = player1 + ": ";
document.getElementById("player2_name").innerHTML = player2 + ": ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "It is " + player1 + " ' s Question Turn!";
document.getElementById("player_answer").innerHTML = "It is " + player2 + " ' s Answer Turn!"

function send()
{
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;

    answer = parseInt(number1) * parseInt(number2);

    question_number = "<h3 id='question_display'>Q. " + number1 + " x " + number2 + "</h3>";
    inputbox = "<br> Answer: <input type='number' id='input_answer' placeholder='Enter Your Answer Here!'>";
    check_button = "<br> <br> <button class='btn btn-info' onclick='check()'>Check</button>";

    output = question_number + inputbox + check_button;
    document.getElementById("output").innerHTML = output;

    document.getElementById("number1").value = " ";
    document.getElementById("number2").value = " ";

}

question_turn = "player1";

answer_turn = "player2";

function check()
{
    get_answer = document.getElementById("input_answer").value;

    if (get_answer == answer)
    {
        if (answer_turn == "player1")
        {
            player1_score++;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else
        {
            player2_score++;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }

    if (question_turn == "player1")
    {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "It is " + player2 + " ' s Question Turn!";
    }
    else
    {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "It is " + player1 + " ' s Question Turn!";
    }

    if (answer_turn == "player1")
    {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "It is " + player2 + " ' s Answer Turn!";
    }
    else
    {
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "It is " + player1 + " ' s Answer Turn!";
    }

    document.getElementById("output").innerHTML = "";
}
