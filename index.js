var gameWin = false
function resetFields(){
    document.getElementById("usernameField").value = ""
    document.getElementById("passwordField").value = ""

}
function checkSignIn(){
    let userField = document.getElementById("usernameField").value
    let passField = document.getElementById("passwordField").value
	let userLower = userField.toLowerCase()
    if (userLower == "admin" && passField == "admin"){
        window.location.href="./gamePage.html";
    }
}

var cardArea = document.getElementById("cardArea")
var displayNum = document.getElementById("currentNum")

var redNums = [1,2,3,4,5,6,7,8,9,10]
var yellowNums = [1,2,3,4,5,6,7,8,9,10]
var blackNums = [1,2,3,4,5,6,7,8,9,10]

var player1Color = 0
var player1Card = 0
var player2Color = 0
var player2Card = 0
var gameTurn = 1
var player1Cards = 0
var player2Cards = 0

function gameProcedure(){
	if(gameWin == false){
		var cardRand = 0
		var colorRand = Math.random()*3
		colorRand = Math.ceil(colorRand)
		console.log(colorRand)
		if (redNums.length == 0 && yellowNums.length == 0 && blackNums.length == 0){
			window.location.reload()
		}
		if (colorRand == 1){
			cardRand = Math.random()*(redNums.length-1)
			console.log(cardRand)
			cardRand = Math.ceil(cardRand)
			cardPick = redNums[cardRand]
			if(redNums.length == 0){
				gameProcedure()
			}
			redNums.splice(cardRand,1)
			displayNum.innerHTML = cardPick
			cardArea.style = "background-color: red;"
			if(gameTurn == 1){
				player1Color = colorRand
				player1Card = cardRand
				gameTurn = 2
			} else {
				player2Color = colorRand
				player2Card = cardRand
				gameTurn = 1
			checkWin(player2Color, player2Card, player1Color, player1Card)
			}
		} else if (colorRand == 2) {
			cardRand = Math.random()*(yellowNums.length-1)
			console.log(cardRand)
			cardRand = Math.ceil(cardRand)
			cardPick = yellowNums[cardRand]
			if(yellowNums.length == 0){
				gameProcedure()
			}
			yellowNums.splice(cardRand,1)
			displayNum.innerHTML = cardPick
			cardArea.style = "background-color: yellow;"
			if(gameTurn == 1){
				player1Color = colorRand
				player1Card = cardRand
				gameTurn = 2
			} else {
				player2Color = colorRand
				player2Card = cardRand
				gameTurn = 1
			checkWin(player2Color, player2Card, player1Color, player1Card)
			}
		} else if (colorRand == 3) {
			cardRand = Math.random()*(blackNums.length-1)
			console.log(cardRand)
			cardRand = Math.ceil(cardRand)
			cardPick = blackNums[cardRand]
			if(blackNums.length == 0){
				gameProcedure()
			}
			blackNums.splice(cardRand,1)
			displayNum.innerHTML = cardPick
			cardArea.style = "background-color: black;"
			if(gameTurn == 1){
				player1Color = colorRand
				player1Card = cardRand
				gameTurn = 2
			} else{
				player2Color = colorRand
				player2Card = cardRand
				gameTurn = 1
			checkWin(player2Color, player2Card, player1Color, player1Card)
			}
		} else {
			window.alert("Color picking error")
		}
		console.log(redNums,yellowNums,blackNums)
		if(player1Cards >= 16){
			window.alert("Player 1 wins!")
			redNums = [1,2,3,4,5,6,7,8,9,10]
			yellowNums = [1,2,3,4,5,6,7,8,9,10]
			blackNums = [1,2,3,4,5,6,7,8,9,10]

			player1Color = 0
			player1Card = 0
			player2Color = 0
			player2Card = 0
			gameTurn = 1
			player1Cards = 0
			player2Cards = 0
		}
		else if(player2Cards >= 16){
			window.alert("Player 2 wins!")
			redNums = [1,2,3,4,5,6,7,8,9,10]
			yellowNums = [1,2,3,4,5,6,7,8,9,10]
			blackNums = [1,2,3,4,5,6,7,8,9,10]

			player1Color = 0
			player1Card = 0
			player2Color = 0
			player2Card = 0
			gameTurn = 1
			player1Cards = 0
			player2Cards = 0
		}
	}
}

function checkWin (player2Color, player2Card, player1Color, player1Card){
		if(player1Color == player2Color){
			if(player1Card > player2Card){
				window.alert("Player 1 won that round")
				player1Cards += 2
			} else {
				window.alert("Player 2 won that round")
				player2Cards += 2
			}
		} else {
			if(player1Color == 1 && player2Color == 2){
				window.alert("Player 2 won that round")
				player2Cards += 2
			} else if (player1Color == 1 && player2Color == 3) {
				window.alert("Player 1 won that round")
				player1Cards += 2
			}
			if(player1Color == 2 && player2Color == 1){
				window.alert("Player 1 won that round")
				player1Cards += 2
			} else if (player1Color == 2 && player2Color == 3) {
				window.alert("Player 2 won that round")
				player2Cards += 2
			}
			if(player1Color == 3 && player2Color == 1){
				window.alert("Player 2 won that round")
				player2Cards += 2
			} else if (player1Color == 3 && player2Color == 2) {
				window.alert("Player 1 won that round")
				player1Cards += 2
			}
		}
	}

