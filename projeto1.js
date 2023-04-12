const button = document.querySelector('#button');
const divSelect = document.getElementById('textId');
const getValue = document.getElementById('starsContain');
const input = document.getElementById('formStars');
var starsAmount = document.getElementById('starsAmount');
const divTnkyou = document.getElementById('thankYouId');
const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const number3 = document.getElementById('number3');
const number4 = document.getElementById('number4');
const number5 = document.getElementById('number5');

number1.addEventListener('click', function()  {
    number1Value = number1.value
    starsAmount.innerHTML = number1Value;
    number1.style.backgroundColor = 'hsl(25, 97%, 53%)';
    number2.style.backgroundColor = 'hsl(216, 12%, 8%)';
    number3.style.backgroundColor = 'hsl(216, 12%, 8%)';
    number4.style.backgroundColor = 'hsl(216, 12%, 8%)';
    number5.style.backgroundColor = 'hsl(216, 12%, 8%)';
})

number2.addEventListener('click', function()  {
    number2Value = number2.value
    starsAmount.innerHTML = number2Value
    number2.style.backgroundColor = 'hsl(25, 97%, 53%)';
    number1.style.backgroundColor = 'hsl(216, 12%, 8%)';
    number3.style.backgroundColor = 'hsl(216, 12%, 8%)';
    number4.style.backgroundColor = 'hsl(216, 12%, 8%)';
    number5.style.backgroundColor = 'hsl(216, 12%, 8%)';
})

number3.addEventListener('click', function()  {
    number3Value = number3.value
    starsAmount.innerHTML = number3Value;
    number3.style.backgroundColor = 'hsl(25, 97%, 53%)';
    number1.style.backgroundColor = 'hsl(216, 12%, 8%)'; 
    number2.style.backgroundColor = 'hsl(216, 12%, 8%)';
    number4.style.backgroundColor = 'hsl(216, 12%, 8%)';
    number5.style.backgroundColor = 'hsl(216, 12%, 8%)';
})

number4.addEventListener('click', function()  {
    number4Value = number4.value
    starsAmount.innerHTML = number4Value;
    number4.style.backgroundColor = 'hsl(25, 97%, 53%)';
    number1.style.backgroundColor = 'hsl(216, 12%, 8%)';
    number2.style.backgroundColor = 'hsl(216, 12%, 8%)';
    number3.style.backgroundColor = 'hsl(216, 12%, 8%)';
    number5.style.backgroundColor = 'hsl(216, 12%, 8%)';
})

number5.addEventListener('click', function()  {
    number5Value = number5.value
    starsAmount.innerHTML = number5Value;
    number5.style.backgroundColor = 'hsl(25, 97%, 53%)';
    number1.style.backgroundColor = 'hsl(216, 12%, 8%)';
    number2.style.backgroundColor = 'hsl(216, 12%, 8%)';
    number3.style.backgroundColor = 'hsl(216, 12%, 8%)'; 
    number4.style.backgroundColor = 'hsl(216, 12%, 8%)';
})


button.addEventListener("click",function()  {

    divTnkyou.classList.remove('thankYou');
    divTnkyou.classList.add('thankYou2');

    divSelect.classList.remove('text');
    divSelect.classList.add('thankYou');

    if(starsAmount.innerHTML == ''){
        alert('Please, give us your opinion by selecting the stars compatible to it!');
        divSelect.classList.add('text');
        divSelect.classList.remove('thankYou');

        divTnkyou.classList.add('thankYou');
        divTnkyou.classList.remove('thankYou2');
    }
 
})
