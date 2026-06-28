const validPin = 1234;


// add money part

document.getElementById('add-money-btn').addEventListener('click', function(e){
    e.preventDefault();
    // console.log('clicked')
    const bank = document.getElementById('bank').value;

    const accountNumber = document.getElementById('account-number').value;

    const addAmount = parseInt(document.getElementById('add-amount').value);

    const addPin = parseInt(document.getElementById('add-pin').value);

    // console.log(bank, accountNumber, addAmount, addPin)

    const availableBalance =parseInt( document.getElementById('available-balance').innerText);
    // console.log(availableBalance)

    if(accountNumber.length < 11){
        alert('please provide a valid account number');
        return;
    }

    if(addPin !== validPin){
        alert('please provide a valid pin number');
        return;
    }

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
    

    const withdrawPin = parseInt(document.getElementById('withdraw-pin').value);
    if(withdrawPin !== validPin){
        alert('Please provide a valid pin number');
        return;
    }


    const cashOutAmount = parseInt(document.getElementById('cash-out-amount').value);

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