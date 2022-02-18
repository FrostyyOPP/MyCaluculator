const buttons = document.querySelectorAll('.button');
const output = document.getElementById('output-screen');
const clearBtn = document.getElementById('clear-btn');
const equalBtn = document.getElementById('equal-btn');


// buttons work
buttons.forEach(function (button){
button.addEventListener('click', (e)=>{
    let value = button.innerHTML;
    output.innerHTML += value;
});
});

// Clear output screen
clearBtn.addEventListener('click', (e)=>{
    output.innerHTML ='';
});

// equal button work
equalBtn.addEventListener('click', (e) =>{
    if(output.innerText ===''){
        alert('please enter the numbers');
    }else{
    let total = output.innerText;
    output.innerHTML = eval(total);
};
});