let currentState = 'start'; // Track the user's current position in the story
let answerSelected = false; // Flag to check if an answer has been selected

function renderQuestion() {
    const questionContainer = document.getElementById('question');
    const answersContainer = document.getElementById('answers');
    const nextButton = document.getElementById('next-btn'); // Reference to the Next button

    questionContainer.innerHTML = '';
    answersContainer.innerHTML = '';

    // Hide the Next button 
    nextButton.style.display = 'none'; 

    switch (currentState) {
        case 'start':
            questionContainer.innerHTML = "You are in the world of Minecraft. Do you want to:";
            addAnswerButton('Explore the Enchanted Forest', 'enchantedForest');
            addAnswerButton('Venture into the Desert', 'desertAdventure');
            addAnswerButton('Descend into the Underworld', 'underworldChallenge');
            break;
        
        case 'enchantedForest':
            questionContainer.innerHTML = "You see a mysterious light. Do you:";
            addAnswerButton('Follow the light', 'followLight');
            addAnswerButton('Stay on the main path', 'stayOnPath');
            break;

        case 'desertAdventure':
            questionContainer.innerHTML = "You arrive in the desert. Do you:";
            addAnswerButton('Search for an oasis', 'searchOasis');
            addAnswerButton('Set up camp', 'setCamp');
            break;

        case 'underworldChallenge':
            questionContainer.innerHTML = "You enter the Nether. Do you:";
            addAnswerButton('Search for ancient ruins', 'searchRuins');
            addAnswerButton('Build a fortress', 'buildFortress');
            break;

        default:
            questionContainer.innerHTML = "Thank you for playing!";
            break;
    }

    // If an answer has been selected, show the Next button
    if (answerSelected) {
        nextButton.style.display = 'block'; // Show the Next button
    } else {
        nextButton.style.display = 'none'; // Hide the Next button if no answer is selected
    }
}

function addAnswerButton(text, newState) {
    const answersContainer = document.getElementById('answers');
    const button = document.createElement('button');
    button.innerText = text;
    button.onclick = () => {
        currentState = newState;
        answerSelected = true; // Mark that an answer has been selected
        renderQuestion(); // Render the question again to update the content
    };
    answersContainer.appendChild(button);
}

function restartGame() {
    currentState = 'start'; // Reset to the initial state
    answerSelected = false; // Reset the answer selected flag
    renderQuestion(); // Render the initial question
}

// Initialize the game
renderQuestion();