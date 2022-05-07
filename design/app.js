'use strict';
//storing elements
let bill = document.querySelector('.bill');
let numOfPeople = document.querySelector('.no-of-people');
let custom = document.querySelector('.custom');

const five = document.querySelector('.five');
const ten = document.querySelector('.ten');
const fifteen = document.querySelector('.fifteen');
const twentyFive = document.querySelector('.twenty-five');
const fifty = document.querySelector('.fifty');

const hidden = document.querySelector('.hidden');

const tipResult = document.querySelector('.amount-result');
const totalResult = document.querySelector('.total-result');

const reset = document.querySelector('.reset');


//hiding the "can't be zero" element
hidden.style.display = 'none'


//tip calculator function
const calcPercentage = function (percentage) {
      //converting input type from string to number
      let bill = Number(document.querySelector('.bill').value);
      let numOfPeople = Number(document.querySelector('.no-of-people').value);

  
  //setting tip conditions
      if (bill != 0 && numOfPeople != 0) {

            // let tip = bill * (percentage/100);
            // let tipPerPerson = tip/numOfPeople;
            // amountResult.textContent = `$ ${tipPerPerson}`;

            // let total =  (bill + tip) / numOfPeople;
            // totalResult.textContent = `$ ${totalPerPerson}`;

            // hidden.style.display = 'none';

            let tip = bill * (percentage/100);
            let tipPerPerson = tip/numOfPeople;
            tipResult.textContent = tipPerPerson.toFixed() + '.00';

            let total = ( bill + tip)/numOfPeople;
            totalResult.textContent = total.toFixed() +`.00`;

            hidden.style.display = 'none';


      }else {
              hidden.style.display = 'block';
              hidden.style.fontSize = 'smaller';
      }
  
}

//calling tip calculator function as a callback function in every condition/ available percentage
five.addEventListener('click', function () {
      calcPercentage(5)
})

ten.addEventListener('click', function () {
  calcPercentage(10)
})

fifteen.addEventListener('click', function () {
  calcPercentage(15)
})

twentyFive.addEventListener('click', function () {
  calcPercentage(25)
})

fifty.addEventListener('click', function () {
  calcPercentage(50)
})

//setting the custom percentage function
custom.addEventListener('input', function () {

  if (custom != 0) {
    let custom = Number(document.querySelector('.custom').value);
  
    calcPercentage(custom);
    
  }  
  })


//the reset function
reset.addEventListener('click', function () {
  bill.value = 'null';
  numOfPeople.value = 'null';
  hidden.style.display = 'none';
  tipResult.textContent = '$ 0.00';
  totalResult.textContent = '$ 0.00';
  custom.value ='';
})



