const quizData = [
            {
                question: "What is the basic principle of a queue?",
                options: ["LIFO", "FIFO", "FILO", "Random"],
                answer: "FIFO"
            },
            {
                question: "Which operation removes an item from a queue?",
                options: ["Push", "Pop", "Dequeue", "Insert"],
                answer: "Dequeue"
            },
            {
                question: "Which operation adds an item to a queue?",
                options: ["Shift", "Enqueue", "Pop", "Remove"],
                answer: "Enqueue"
            },
            {
                question: "Where is an element inserted in a queue?",
                options: ["Front", "Middle", "Rear", "Anywhere"],
                answer: "Rear"
            },
            {
                question: "Where is an element removed from a queue?",
                options: ["Front", "Back", "Middle", "Bottom"],
                answer: "Front"
            },
            {
                question: "Which of the following is NOT a type of queue?",
                options: ["Circular Queue", "Priority Queue", "Double Queue", "Simple Queue"],
                answer: "Double Queue"
            },
            {
                question: "Which data structure is best for task scheduling?",
                options: ["Tree", "Queue", "Stack", "Graph"],
                answer: "Queue"
            },
            {
                question: "What happens when a queue is full?",
                options: ["Underflow", "Overflow", "Crash", "Reset"],
                answer: "Overflow"
            }
        ];

        let currentQuestion = 0;
        let score = 0;
        let timeLeft = 30;
        let timerInterval;
        const timerEl = document.getElementById('time');
        const questionEl = document.querySelector('.question');
        const optionsEl = document.querySelector('.options');
        const resultEl = document.querySelector('.result');
        const scoreEl = document.getElementById('score');
        const restartBtn = document.querySelector('.restart-btn');

        // Function to load the question
        function loadQuestion() {
            if (currentQuestion >= quizData.length) {
                endQuiz();
                return;
            }
            clearInterval(timerInterval);
            timeLeft = 30;
            timerEl.textContent = timeLeft;
            startTimer();
            const currentQuiz = quizData[currentQuestion];
            questionEl.textContent = currentQuiz.question;
            optionsEl.innerHTML = ''; // Clear previous options
            currentQuiz.options.forEach(option => {
                const button = document.createElement('button');
                button.classList.add('option');
                button.textContent = option;
                button.onclick = () => checkAnswer(option);
                optionsEl.appendChild(button);
            });
        }

        //check ans
        function checkAnswer(selectedOption) {
            let result = document.getElementById("result");
            let correctAnswer = quizData[currentQuestion].answer;

            if (selectedOption === correctAnswer) {
                result.textContent = "Correct!";
                result.style.color = "green";
                score++;
            } else {
                result.textContent = "Incorrect! The correct answer is: " + correctAnswer;
                result.style.color = "red";
            }

            currentQuestion++;
            loadQuestion();
        }

        // Start the timer
        function startTimer() {
            timerInterval = setInterval(() => {
                timeLeft--;
                timerEl.textContent = timeLeft;
                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    endQuiz();
                }
            }, 1000);
        }

        // End the quiz and show the results
        function endQuiz() {
            clearInterval(timerInterval);
            questionEl.style.display = 'none';
            optionsEl.style.display = 'none';
            resultEl.style.display = 'block';
            scoreEl.textContent = score;
            restartBtn.style.display = 'block';
        }

        // Restart the quiz
        restartBtn.addEventListener('click', () => {
            // Reset variables
            currentQuestion = 0;
            score = 0;
            timeLeft = 30;
            timerEl.textContent = timeLeft;

            // Reset the display
            questionEl.style.display = 'block';
            optionsEl.style.display = 'flex'; // Ensure options are displayed correctly
            resultEl.style.display = 'none';
            restartBtn.style.display = 'none';

            // Load the first question
            loadQuestion();
        });

        // Initialize the quiz with the first question
loadQuestion();