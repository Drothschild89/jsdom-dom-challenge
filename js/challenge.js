const likesUL = document.querySelector('.likes')
let johnBonJangles;

function startTimer(){
    let counter = document.getElementById('counter')
    johnBonJangles = setInterval(function(){
        counter.innerText++
    }, 1000)
}

startTimer()

function plus(){
    const btn = document.getElementById('plus')
    btn.addEventListener("click", incrementCounter)
}

plus()

function incrementCounter(){
    const counter = document.getElementById('counter')
    counter.innerText++
}

function minus(){
    const btn = document.getElementById('minus')
    btn.addEventListener("click", decrementCounter)
}

minus()

function decrementCounter(){
    const counter = document.getElementById('counter')
    counter.innerText--
}

function like(){
    const heart = document.getElementById('heart')
    heart.addEventListener('click', () => {
        const counterNumber = parseInt(document.getElementById('counter').innerText)
        let thingy = document.getElementById(counterNumber)
        if(!thingy){
            const li = document.createElement('li')
            li.id = counterNumber
            li.innerText = `1 like for ${counterNumber}`
            likesUL.appendChild(li)
        }
        else {
            let numLikes = parseInt(thingy.innerText)
            numLikes++
            thingy.innerText = `${numLikes} for ${counterNumber}`
        }
    })
}

like()

const pause = document.getElementById('pause')
pause.addEventListener('click', toggleTimer)

function toggleTimer(){
    let buttons = document.getElementsByTagName("button")
    if(johnBonJangles){
    clearInterval(johnBonJangles)
    johnBonJangles = false
    for(let buttonElement of buttons){
        if(buttonElement.id != 'pause'){
            buttonElement.disabled = true
        }
        else {
            buttonElement.innerText = 'resume'
        }
    }
}
else {
    startTimer()
    for(let buttonElement of buttons){
        if(buttonElement.id != 'pause'){
            buttonElement.disabled = false
        }
        else {
            buttonElement.innerText = 'pause'
        }
    }
}
}


let form = document.getElementById('comment-form')
form.addEventListener('submit', function(e){
    e.preventDefault()
    let commentText = e.target.comment.value
    let newP = document.createElement('p')
    newP.innerText = commentText
    let list = document.getElementById('list')
    list.appendChild(newP)
})
















