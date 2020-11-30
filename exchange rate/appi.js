const currencyFirst=document.getElementById('currency-one');
const amountOne=document.getElementById('amount-one');
const currencySecond=document.getElementById('currency-second');
const amountTwo=document.getElementById('amount-two');

const rateEl= document.getElementById('rate');
const swap = document.getElementById('swap');

//fetch exchange rate and update the DOM

function calculate(){
    const currency_one=currencyFirst.value;

    const currency_two = currencySecond.value;

    fetch(`https://v6.exchangerate-api.com/v6/c003c7fbc2b0657fdc167259/latest/${currency_one}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        const rate= data.conversion_rates[currency_two];
        rateEl.innerHTML=`1 ${currency_one}=${rate} ${currency_two}`;
        amountTwo.value=(amountOne.value *rate).toFixed(2);
    });
}


currencyFirst.addEventListener('change',calculate);
amountOne.addEventListener('input',calculate);
currencySecond.addEventListener('change',calculate);
amountTwo.addEventListener('input',calculate);

swap.addEventListener('click', ()=>{
    const temp= currencyFirst.value;
    currencyFirst.value=currencyEl_two.value;
    currencySecond.value=temp;
    calculate();
})


calculate();
