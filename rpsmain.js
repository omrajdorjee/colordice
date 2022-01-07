// app.js

// Complete logic of game inside this function
const game = () => {
	let playerScore = 0;
	let computerScore = 0;
	let moves = 0;
   


	// Function to
	const playGame = () => {
		const rockBtn = document.querySelector('.rock');
		const paperBtn = document.querySelector('.paper');
		const scissorBtn = document.querySelector('.scissor');
		const playerOptions = [rockBtn,paperBtn,scissorBtn];
		const computerOptions = ['rock','paper','scissors']
		
		// Function to start playing game
		playerOptions.forEach(option => {
			option.addEventListener('click',function(){
                 var audio = document.getElementById("rollingaudio");
        audio.play();

				const movesLeft = document.querySelector('.movesleft');
				moves++;
				movesLeft.innerText = `Moves Left: ${10-moves}`;
				

				const choiceNumber = Math.floor(Math.random()*3);
				const computerChoice = computerOptions[choiceNumber];

				// Function to check who wins
				winner(this.innerText,computerChoice)
				
				// Calling gameOver function after 10 moves
				if(moves == 10){
					gameOver(playerOptions,movesLeft);
				}
			})
		})
		
	}

	// Function to decide winner
	const winner = (player,computer) => {
		const result = document.querySelector('.result');
		const playerScoreBoard = document.querySelector('.p-count');
		const computerScoreBoard = document.querySelector('.c-count');
		player = player.toLowerCase();
		computer = computer.toLowerCase();
		if(player === computer){           
			result.textContent = 'Tie';
            if(player === 'rock' && computer === 'rock') {
            document.getElementById('hand1').textContent = "✊";
            document.getElementById('hand2').textContent = "✊";
        }
            if(player === 'paper' && computer === 'paper') {
            document.getElementById('hand1').textContent = "🖐️";
            document.getElementById('hand2').textContent = "🖐️";
        }
            if(player === 'scissors' && computer === 'scissors') {
            document.getElementById('hand1').textContent = "✌️";
            document.getElementById('hand2').textContent = "✌️";
        }
		}
		else if(player == 'rock'){
			if(computer == 'paper'){
				result.textContent = 'Om Won';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
                document.getElementById('hand1').textContent = "✊";
                document.getElementById('hand2').textContent = "🖐️";

			}else{
				result.textContent = 'You Won'
				playerScore++;
				playerScoreBoard.textContent = playerScore;
				document.getElementById('hand1').textContent = "✊";	
                document.getElementById('hand2').textContent = "✌️";
			}
		}
		else if(player == 'scissors'){
			if(computer == 'rock'){
				result.textContent = 'Om Won';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
                document.getElementById('hand1').textContent = "✌️";
                document.getElementById('hand2').textContent = "✊";

			}else{
				result.textContent = 'You Won';
				playerScore++;
				playerScoreBoard.textContent = playerScore;
				document.getElementById('hand1').textContent = "✌️";
                document.getElementById('hand1').textContent = "🖐️";

			}
		}
		else if(player == 'paper'){
			if(computer == 'scissors'){
				result.textContent = 'Om Won';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
                document.getElementById('hand1').textContent = "🖐️";
                document.getElementById('hand2').textContent = "✌️";


			}else{
				result.textContent = 'You Won';
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			    document.getElementById('hand1').textContent = "🖐️";
                document.getElementById('hand2').textContent = "✊";


			}
		}
	}

	// Function to run when game is over
	const gameOver = (playerOptions,movesLeft) => {

		const chooseMove = document.querySelector('.move');
		const result = document.querySelector('.result');
		const reloadBtn = document.querySelector('.reload');

		playerOptions.forEach(option => {

           
			option.style.display = 'none';
		})

	
		chooseMove.innerText = 'Game Over!!'
		movesLeft.style.display = 'none';

		if(playerScore > computerScore){
			result.style.fontSize = '2rem';
			result.innerText = 'You Won The Game'
			result.style.color = '#308D46';
               var audio = document.getElementById("winSound");
        audio.play();
		}
		else if(playerScore < computerScore){
			result.style.fontSize = '2rem';
			result.innerText = 'You Lost The Game';
			result.style.color = 'red';
               var audio = document.getElementById("loseSound");
        audio.play();
		}
		else{
			result.style.fontSize = '2rem';
			result.innerText = 'Tie';
			result.style.color = 'grey'
           
		}
        
		reloadBtn.innerText = 'ReStart ';
		reloadBtn.style.display = 'flex'
		reloadBtn.addEventListener('click',() => {
			window.location.reload();
        var audio = document.getElementById("reloadSound");
        audio.play();
		})
	}


	// Calling playGame function inside game
	playGame();
	
}

// Calling the game function
game();
