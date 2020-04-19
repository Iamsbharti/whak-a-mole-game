//Get elements on the board
const square=document.querySelectorAll('.square')
const mole=document.querySelectorAll('.mole')
const timeLeft=document.querySelector('#time-left')
const score=document.querySelector('#score')

//Initialize game result
let result=0
let currentTime=timeLeft.textContent

//Loop over square and randomly select a sq to display the mole
function randomSquare(){
  square.forEach(className=>{
    className.classList.remove('mole')
    className.classList.remove('blank')
  })
  let randomPosition =square[Math.floor(Math.random()*9)]
  randomPosition.classList.add('mole')

  hitPosition=randomPosition.id
}

//Add eventlistener to each sqaure & compute score
square.forEach(id=>{
  id.addEventListener('mouseup',()=>{
    if(id.id === hitPosition){
      result+=1
      score.textContent=result
    }
  })
})
//Add blank pic to when wrong box is selected
square.forEach(id=>{
  id.addEventListener('mouseup',()=>{
    if(id.id!==hitPosition){
      id.classList.add('blank')
    }
  })
})
//Display mole/sec
function moveMole(){
  let timerId=null
  timerId=setInterval(randomSquare,1000)
}

//start game
moveMole()

//Decrement Counter
function timeLeftCounter(){
  currentTime--
  timeLeft.textContent=currentTime
  if(currentTime===0){
    clearInterval(timerId)
    alert('GAME OVER Your Final Score is:'+result)
    timeLeft.textContent=60
  }
}
//start counter
let timerId=setInterval(timeLeftCounter,1000)