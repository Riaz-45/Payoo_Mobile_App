const validPin = 1234;


// function to get input values
function getInputValueNumber(id){
    // const inputField = document.getElementById(id);
    // const inputFieldValue = inputField.value;
    // const inputFieldValueNumber = parseInt(inputFieldValue);


    return parseInt(document.getElementById(id).value);
}


// add money part

document.getElementById('add-money-btn').addEventListener('click', function(e){
    e.preventDefault();
    // console.log('clicked')
    const bank = document.getElementById('bank').value;

    const accountNumber = document.getElementById('account-number').value;
    if(accountNumber.length < 11){
        alert('please provide a valid account number');
        return;
    }

    // const addAmount = parseInt(document.getElementById('add-amount').value);
    const addAmount = getInputValueNumber('add-amount');

    // const addPin = parseInt(document.getElementById('add-pin').value);
    const addPin = getInputValueNumber('add-pin');
    if(addPin !== validPin){
        alert('please provide a valid pin number');
        return;
    }

    // console.log(bank, accountNumber, addAmount, addPin)

    const availableBalance =parseInt( document.getElementById('available-balance').innerText);
    // console.log(availableBalance)

    

    

    const totalNewAvailableBalance = addAmount + availableBalance;

    document.getElementById('available-balance').innerText = totalNewAvailableBalance;
})



// cash out part

document.getElementById('withdraw-btn').addEventListener('click', function(e){
    e.preventDefault();
    // console.log('withdraw clicked')

    const agentNumber = document.getElementById('agent-number').value;
    if(agentNumber.length < 11){
        alert('Please provide a valid agent number');
        return;
    }


    // const withdrawPin = parseInt(document.getElementById('withdraw-pin').value);
    const withdrawPin = getInputValueNumber('withdraw-pin');
    if(withdrawPin !== validPin){
        alert('Please provide a valid pin number');
        return;
    }


    // const cashOutAmount = parseInt(document.getElementById('cash-out-amount').value);
    const cashOutAmount = getInputValueNumber('cash-out-amount');

    const availableBalance = parseInt(document.getElementById('available-balance').innerText);
    // console.log(cashOutAmount, availableBalance)

    const totalNewAvailableBalance = availableBalance - cashOutAmount;

    // console.log(totalNewAvailableBalance);

    document.getElementById('available-balance').innerText = totalNewAvailableBalance;

})


// toggling feature
document.getElementById('addMoney-btn').addEventListener('click', function(){
    document.getElementById('cash-out-parent').style.display = 'none';
    
    document.getElementById('add-money-parent').style.display = 'block';
})

document.getElementById('cash-out-btn').addEventListener('click', function(){
    document.getElementById('add-money-parent').style.display = 'none';

    document.getElementById('cash-out-parent').style.display = 'block';
})