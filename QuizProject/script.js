const questions = [
    {
        Question: "Who was the first President of the United States?",
        Choices: ["George Washington", "Thomas Jefferson", "Thomas Edison", "I don't know"],
        Answer: "George Washington"
    },
    {
        Question: "What is the answer to the Ultimate Question of Life, the Universe, and Everything?",
        Choices: ["Pi", "42", "Wah?", "I don't know"],
        Answer: "42"
    },
    {
        Question: "Do you love to code?",
        Choices: ["No", "Yes", "Hell Yeah", "No"],
        Answer: "Hell Yeah"
    },
    {
        Question: "What's the best programming language?",
        Choices: ["Javascript", "C#", "Php", "Python"],
        Answer: "Javascript"
    },
    {
        Question: "Is Jason Chan Awesome?",
        Choices: ["Yes", "No", "Maybe", "He's okay"],
        Answer: "Yes"
    },
]

var questionIndex = 0;
var score = 0;

function SubmitAnswer(choice) {
    //takes the selected answer, matches it with the actual answer. Increase score if correct. set the question index. 

    if (questionIndex < questions.length) {
        const currentQuestion = questions[questionIndex];
        if (currentQuestion.Answer == currentQuestion.Choices[choice]) {
            score++;
        }
        questionIndex += 1;
        if (questionIndex == questions.length) {
            ShowScore(score);
        }
        else {
            ShowQuestion(questionIndex);
        }
    }
}

function ShowQuestion(index) {
    document.getElementById('question').innerHTML = questions[index].Question;
    document.getElementById('choice0').innerHTML = questions[index].Choices[0];
    document.getElementById('choice1').innerHTML = questions[index].Choices[1];
    document.getElementById('choice2').innerHTML = questions[index].Choices[2];
    document.getElementById('choice3').innerHTML = questions[index].Choices[3];
}

function ShowScore(score) {
    document.getElementById('score').innerHTML = score;
    document.getElementById('question').innerHTML = "";
    document.getElementById('choice0').innerHTML = "";
    document.getElementById('choice1').innerHTML = "";
    document.getElementById('choice2').innerHTML = "";
    document.getElementById('choice3').innerHTML = "";
    document.getElementById('guess0').remove();
    document.getElementById('guess1').remove();
    document.getElementById('guess2').remove();
    document.getElementById('guess3').remove();
}