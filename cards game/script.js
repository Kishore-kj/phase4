
let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
message =""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let player={
    name : "Kishore",
    chips : 200
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name +": $ "+player.chips

function getRandomcard(){
    let rand = Math.floor(Math.random()*13)+1
    if(rand ===1){
        return 11
    }else if(rand >10){
        return 10
    }else{
       return rand
    }
}
function startgame(){
    isAlive =true
    hasBlackjack=false
    let n1 = getRandomcard()
    let n2 = getRandomcard()
    cards =[n1,n2]
    sum = n1 + n2
    rendergame()
}
function rendergame(){

    cardsEl.textContent = "Cards : "
    for(let i =0; i<cards.length;i++){
        cardsEl.textContent += cards[i]+ " "
    }
    sumEl.textContent = "Sum : " + sum
    if(sum < 21){
        //do you want one more card
        message ="Do you want a new card"
        }else if(sum === 21){
        message ="whoo ! you have got a black jack"
        //you got black jack
        hasBlackjack = true
        }else{
            message ="you are out of the game"
            //you are out
            isAlive = false
        }
        messageEl.textContent = message
}

function newcard(){
    
    if(isAlive && !hasBlackjack){
    let card = getRandomcard()
    sum += card
    cards.push(card)
    console.log(cards)
    rendergame()
    }
}
