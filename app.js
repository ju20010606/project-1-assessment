let userInput = document.querySelector(".randomNum");
let display = document.querySelector(".displayNum");
let add = document.querySelector(".add");
let subtract = document.querySelector(".subtract");

const adding = () => {
    add.addEventListener("click",()=>{
        let num = parseInt(userInput.value)
        let displayNum = parseInt(display.innerText)
        displayNum += num
        display.innerText = `${displayNum}`
        if (displayNum < 0){
            let display = document.querySelector(".displayNum");
            display.style.color = "red"
        }else{
            display.style.color = "black"
        }
    })
}
const subtracting = () =>{
    subtract.addEventListener("click",() =>{
        let num = parseInt(userInput.value)
        let displayNum = parseInt(display.innerText)
        displayNum -= num
        display.innerText = `${displayNum}` 
        if (displayNum < 0){
            let display = document.querySelector(".displayNum");
            display.style.color = "red"
        }else{
            display.style.color = "black"
        }
    })
}


document.addEventListener("DOMContentLoaded",()=>{
    adding()
    subtracting()
})