
const quizData = [
    {
        question: "How many episodes of Game of Thrones are there in total?",
        a: "63",
        b: "68",
        c: "73",
        d: "80",
        correct: "c",
    },
    {
        question: " Which animal does Tywin Lannister skin during his first appearance in the show?",
        a: "a stag",
        b: "a sheep",
        c: "a cow",
        d: "a rabbit",
        correct: "a",
    },
    {
        question: "how many seasons are there in this tv show ?",
        a: "8 seasons",
        b: "2 seasons",
        c: "7 seasons",
        d: "2 seasons",
        correct: "a",
    },
    {
        question: "Which character appears in more episodes than any other?",
        a: "Samwell Tarly",
        b: "Ser Jorah Mormont",
        c: "Tyrion Lannister",
        d: "Jon Snow ",
        correct: "c",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})
