var playerIMG, compIMG, compMove, playerMove, compScore, playerScore;

playerIMG = document.getElementById('result-player');
compIMG = document.getElementById('result-computer');

reset();

function reset()
{
    compMove = 0;
    playerMove = 0;
    compScore = 0;
    playerScore = 0;
    playerIMG.style.display = 'none';
    compIMG.style.display = 'none';
    document.getElementById('score-player').textContent = 0;
    document.getElementById('score-computer').textContent = 0;
}

function computerMove()
{
    compIMG.style.display = 'block';
    compMove = Math.floor(Math.random() * 3) + 1;
    if(compMove === 1)
        {
            compIMG.src = 'rock.jpeg';
        }
    else if(compMove === 2)
        {
            compIMG.src = 'paper.jpeg';
        }
    else if(compMove === 3)
        {
            compIMG.src = 'scissors.jpeg';
        }
    return compMove;
}

function updateScore()
{
    document.getElementById('score-player').textContent = playerScore;
    document.getElementById('score-computer').textContent = compScore; 
}

document.querySelector('.btn-rock').addEventListener('click', function() {
    playerIMG.style.display = 'block';
    playerIMG.src = 'rock.jpeg';
    playerMove = 1;
    computerMove();
    if(compMove === 2)
        {
            compScore ++;
        }
    else if(compMove === 3)
        {
            playerScore ++;
        }
    updateScore();
});

document.querySelector('.btn-paper').addEventListener('click', function() {
    playerIMG.style.display = 'block';
    playerIMG.src = 'paper.jpeg';
    playerMove = 2;
    computerMove();
    if(compMove === 1)
        {
            playerScore ++;
        }
    else if(compMove === 3)
        {
            compScore ++;
        }
    updateScore();
});

document.querySelector('.btn-scissors').addEventListener('click', function() {
    playerIMG.style.display = 'block';
    playerIMG.src = 'scissors.jpeg';
    playerMove = 3;
    computerMove();
    if(compMove === 1)
        {
            compScore ++;
        }
    else if(compMove === 2)
        {
            playerScore ++;
        }
    updateScore();
});

document.querySelector('.btn-reset').addEventListener('click', reset);
