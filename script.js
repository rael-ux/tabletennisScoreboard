let homeScore =0
let guestScore =0
document.getElementById("home").textContent=0
document.getElementById("guest").textContent=0
let gameScore1=document.getElementById("game-score1")
let gameScore2=document.getElementById("game-score2")
function add1h(){
    homeScore += 1;
    document.getElementById("home").textContent=homeScore
    if (homeScore === 21) {
        reseth()
        resetg()
        gameScore1.textContent ++
    }
}
function minus1h(){
    if (homeScore > 0){
    homeScore -= 1
    document.getElementById("home").textContent=homeScore
    }
}
function reseth(){
    homeScore = 0
    document.getElementById("home").textContent=homeScore
}
function add1g(){
    guestScore += 1
    document.getElementById("guest").textContent=guestScore
    if (guestScore === 21) {
        reseth()
        resetg()
        gameScore2.textContent ++
    }
}
function minus1g(){if (guestScore > 0){
    guestScore -= 1
    document.getElementById("guest").textContent=guestScore
    }
}
function resetg(){
    guestScore= 0
    document.getElementById("guest").textContent=guestScore
}
function resetGame(){
    reseth()
    resetg()
    gameScore1.textContent = 0
    gameScore2.textContent = 0
}