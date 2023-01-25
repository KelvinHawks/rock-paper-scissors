const redDiv = document.getElementById('red')
const yellowDiv = document.getElementById('yellow')
const greenDiv = document.getElementById('green')


redDiv.style.backgroundColor = "red"
yellowDiv.style.backgroundColor = "yellow"
greenDiv.style.backgroundColor = "green"

// redDiv.onclick =()=> console.log('you clicked red');
// yellowDiv.onclick =()=> console.log('you clicked yellow');
// greenDiv.onclick = ()=> console.log('you clicked green');

const squares = document.querySelectorAll('.square')
const timesClicked = {'red': 0, 'yellow': 0, 'green': 0}
squares.forEach(square => {
    square.onclick = ()=> {
        const clicked = timesClicked[square.value] += 1
        square.innerText = clicked
    //     if(clicked > 10){
    //         alert('you have reached the limit')
    // }
    }
    square.style.border = 'none'
})
const clearBtn = document.querySelector('.clear-game')
clearBtn.onclick = () => clearScores()

function clearScores(){
  squares.forEach(square => {
    timesClicked.red = 0
    timesClicked.yellow = 0
    timesClicked.green = 0
    square.innerText = ''
  })
}