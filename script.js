let userScore = 0;
let computerScore = 0;
const userScore_div = document.querySelector('.user-score');
const computerScore_div = document.querySelector('.computer-score');
const userChoiceLabel_div = document.querySelector('.user-choice-label');
const computerChoiceLabel_div = document.querySelector('.computer-choice-label');

const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result');
const rockImg_img = document.querySelector('.rock-img');
const paperImg_img = document.querySelector('.paper-img');
const scissorsImg_img = document.querySelector('.scissors-img');


function get_computer_input() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const value = Math.floor(Math.random() * 3);
    return choices[value];

}

function game(userInput) {
    let comp = get_computer_input();
    userChoiceLabel_div.innerHTML = userInput;
    computerChoiceLabel_div.innerHTML = comp;
    userChoiceLabel_div.style.display = 'block';
    computerChoiceLabel_div.style.display = 'block';
    if (userInput === 'Rock') {

        if (comp === 'Rock')
            result_div.innerHTML = "It's a tie.";
        else if (comp === 'Paper') {
            result_div.innerHTML = "Paper wraps Rock. You lose a point!";
            computerScore++;
            computerScore_div.innerHTML = computerScore;
        }
        else if (comp === 'Scissors') {
            result_div.innerHTML = "Rock breaks Scissors. You win a point!";
            userScore++;
            userScore_div.innerHTML = userScore;
        }
    }

    if (userInput === 'Paper') {
        if (comp === 'Rock') {
            result_div.innerHTML = "Paper wraps Rock. You win a point!";
            userScore++;
            userScore_div.innerHTML = userScore;
        }
        else if (comp === 'Paper') {
            result_div.innerHTML = "It's a tie.";
        }
        else if (comp === 'Scissors') {
            result_div.innerHTML = "Scissors cut Paper. You lose a point!";
            computerScore++;
            computerScore_div.innerHTML = computerScore;
        }
    }

    if (userInput === 'Scissors') {
        if (comp === 'Rock') {
            result_div.innerHTML = "Rock breaks Scissors. You lose a point!";
            computerScore++;
            computerScore_div.innerHTML = computerScore;
        }
        else if (comp === 'Paper') {
            result_div.innerHTML = "Scissors cut Paper. You win a point!";
            userScore++;
            userScore_div.innerHTML = userScore;
        }
        else if (comp === 'Scissors') {
            result_div.innerHTML = "It's a tie.";
        }
    }
};

function check_score() {
    if (userScore < computerScore)
        scoreBoard_div.style.border = "2px solid red";
    if (userScore > computerScore)
        scoreBoard_div.style.border = "2px solid green";
    if (userScore === computerScore)
        scoreBoard_div.style.border = "2px solid white";
    if (userScore === 15) {
        document.querySelector('.winlose').style.display='block';
        document.querySelector('.winlose').innerHTML= 'Hurray, you won! You can play again.';
        setTimeout(() => {
            window.location.reload();
        }, 3000);
    }
    if (computerScore === 15) {
        document.querySelector('.winlose').style.display='block';
        document.querySelector('.winlose').innerHTML= 'Oops, you lost! You can try again.';
        setTimeout(() => {
            window.location.reload();
        }, 3000);
    }
}

function main() {

    rockImg_img.addEventListener('click', () => {
        game('Rock');
        check_score();
    });

    paperImg_img.addEventListener('click', () => {
        game('Paper');
        check_score();
    });

    scissorsImg_img.addEventListener('click', () => {
        game('Scissors');
        check_score();
    });
}

main();
