var myQuestions = {
    q1: { // unique id for every question
        question: 'Which sentence uses "famish" correctly?',
        correctAnswer: 'After the straight exam, I felt too exhausted and famished to eat my favourite foods.',
        fakeAnswers: [
            'I could eat a horse, I am famish now.',
            'I famished my stomach next time you treat me to a meal out.',
            'I will bring lots of pizza, that\'s a famish.',
        ],
    },
    q2: {
        question: 'Priscila _______ rather not invest her savings in the stock market.',
        correctAnswer: 'would',
        fakeAnswers: ['must', 'has to', 'could'],
    },
    q3: {
        question: 'Did you have any problem ______ our house?',
        correctAnswer: 'searching',
        fakeAnswers: ['search', 'to search', 'for searching'],
    },
};

/*********************************************************************/

var quiz_id = document.getElementById('quiz');
var submitButton = document.getElementById('button');
var userAnswers = {}; // store the selected answers in this object, indexed by question id

/*********************************************************************/

var aQuestion;
Object.keys(myQuestions).forEach((questionId, arrayIndex) => {
    aQuestion = myQuestions[questionId];
    var questionContainer = document.createElement('div');
    var questionLabel = document.createElement('label');
    var optionContainer = document.createElement('section');
    var answers = [aQuestion.correctAnswer].concat(aQuestion.fakeAnswers);

    shuffleArray(answers);
    answers.forEach((answer) => {
        var radioButton = generateRadioButton(questionId, answer);
        optionContainer.appendChild(radioButton);
    });

    questionLabel.innerText = `${arrayIndex + 1}. ${aQuestion.question}\n`;

    questionContainer.appendChild(questionLabel);
    questionContainer.appendChild(optionContainer);
    quiz_id.appendChild(questionContainer);
});

/*********************************************************************/

function showResults(params) {
    // Do your things
    console.log(userAnswers);

    // check a specific question (by question id)
    var qId = 'q2';
    if (userAnswers[qId] == myQuestions[qId].correctAnswer) {
        console.log(`The answer [${userAnswers[qId]}] is correct for the question: "${myQuestions[qId].question}"`);
    }
}

/*********************************************************************/

submitButton.addEventListener('click', showResults);

/*********************************************************************/

function generateRadioButton(groupId, value) {
    var container = document.createElement('div');
    var label = document.createElement('label');
    var radioButton = document.createElement('input');

    radioButton.className = 'answers';
    radioButton.type = 'radio';
    radioButton.id = value;
    radioButton.value = value;
    radioButton.name = groupId;
    radioButton.addEventListener('input', (event) => {
        userAnswers[groupId] = event.currentTarget.value;
    });

    label.innerText = value;
    label.htmlFor = value;

    container.appendChild(radioButton);
    container.appendChild(label);

    return container;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}