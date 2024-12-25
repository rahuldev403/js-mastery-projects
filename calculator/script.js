'use strict';
const output = document.querySelector('.display')
const btn = document.querySelectorAll('.button')
const toggleModeBtn = document.getElementById('toggle')
output.innerHTML = '0'

for(let i=0; i<btn.length; i++){
    btn[i].addEventListener('click',()=>{
        if(btn[i].innerText === '='){
            try {
                output.innerHTML = eval(output.innerHTML)
            } catch (err) {
                output.innerHTML = 'Error'
            }
        } else if (btn[i].innerText === 'C'){
            output.innerHTML = '0'
        } else if(btn[i].innerText === 'DEL'){
            output.innerHTML = output.innerHTML.slice(0, -1)
            if(output.innerHTML === '') {
                output.innerHTML = '0'
            }
        } else {
            if(output.innerHTML === '0'){
                output.innerHTML = btn[i].innerHTML
            } else {  
                output.innerHTML += btn[i].innerHTML
            }
        }
    })
}
toggleModeBtn.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode')
    document.body.classList.toggle('light-mode')
    document.querySelector('.calculator').classList.toggle('dark-mode')
    document.querySelector('.calculator').classList.toggle('light-mode')
    document.querySelector('.display').classList.toggle('dark-mode')
    document.querySelector('.display').classList.toggle('light-mode')
    document.querySelector('.slider').classList.toggle('dark-mode')
    document.querySelector('.slider').classList.toggle('light-mode')
    btn.forEach(button => {
        button.classList.toggle('dark-mode')
        button.classList.toggle('light-mode')
    })
})