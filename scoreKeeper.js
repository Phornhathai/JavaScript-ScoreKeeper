let playto = document.querySelector("#playto")

let winningScore = 0;
let isGameOver = false;


let p1 = {
    score : 0,
    button : document.querySelector("#p1Button"),
    display : document.querySelector("#p1Display")
}

let p2 = {
    score : 0,
    button : document.querySelector("#p2Button"),
    display : document.querySelector("#p2Display")
}

let resetButton = document.querySelector('#reset')
//ถ้ามี argument ส่งไปที่ function ต้องใช้ ท่า regular function 
p1Button.addEventListener("click" , function () {
    updateScore(p1,p2)  
})

p2Button.addEventListener("click" , function () {
    updateScore(p2,p1)
})
// p1Button.addEventListener("click" , function(e){
//     if(!isGameOver){
//         p1Score += 1;
//         if(p1Score == winningScore){
//             isGameOver = true;
//             p1Display.classList.add('winner')
//             p2Display.classList.add('loser')
//         }
//     }
//     p1Display.textContent = p1Score
// })
// p2Button.addEventListener("click" , function(e){
//     if(!isGameOver){
//         p2Score += 1
//         if(p2Score == winningScore){
//             isGameOver = true;
//             p1Display.classList.add('loser')
//             p2Display.classList.add('winner')
//         }
//     }
//     p2Display.textContent = p2Score
// })
// player คือ ผู้เล่นคนแรก , opponent คือ ผู้เล่นคนที่สอง

//refactor
function updateScore(player, opponent){
    if(!isGameOver){
        player.score += 1
        // console.log(player.score);
        if(player.score == winningScore){
            isGameOver = true
            player.display.classList.add('winner')
            opponent.display.classList.add('loser')
            player.button.disable = true
            opponent.button.disable = true
        }
        player.display.textContent = player.score
    }
}
resetButton.addEventListener("click" , reset)

playto.addEventListener("change", function(){
    winningScore = Number(this.value) //this = playto
    reset();
})

//refactor
function reset(){
    isGameOver = false;
    p1.score = 0;
    p2.score = 0;
    p1.display.textContent = p1.score
    p2.display.textContent = p2.score
    p1.display.classList.remove('loser' , 'winner')
    p2.display.classList.remove('loser' , 'winner')
}

