const validPin = 1234;
const transactionData = [];


// function to get input value

function getInputValue(id){
    return document.getElementById(id).value;
}


// function to get input value number
function getInputValueNumber(id){
    // const inputField = document.getElementById(id);
    // const inputFieldValue = inputField.value;
    // const inputFieldValueNumber = parseInt(inputFieldValue);

    return parseInt(document.getElementById(id).value);
} 


// function to get innerText
function getInnerText(id){
    return parseInt(document.getElementById(id).innerText)
}

// function ot set innerText
function setInnerText(val){
    // const availableBalanceElement = document.getElementById('available-balance');
    // availableBalanceElement.innerText = val;
    // return availableBalanceElement;


    document.getElementById('available-balance').innerText = val;
}

// function to toggle
function handleToggle(id){
    const forms = document.getElementsByClassName('form');
    for(const form of forms){
        form.style.display = 'none';
    }
    document.getElementById(id).style.display = 'block';
}


// function to toggle buttons
function handleButtonToggle(id){
    const formBtns = document.getElementsByClassName('form-btn');

    for(const btn of formBtns){
        btn.classList.remove('border-[#0874F2]', 'bg-[rgba(8,116,242,0.05)]')
        btn.classList.add('border-[rgba(8,8,8,0.1)]')
    }

    document.getElementById(id).classList.remove('border-[rgba(8,8,8,0.1)]')
    document.getElementById(id).classList.add('border-[#0874F2]', 'bg-[rgba(8,116,242,0.05)]')
}

// add money part

document.getElementById('add-money-btn').addEventListener('click', function(e){
    e.preventDefault();
    // console.log('clicked')
    const bank = getInputValue('bank');

    const accountNumber = getInputValue('account-number');
    if(accountNumber.length < 11){
        alert('please provide a valid account number');
        return;
    }

    // const addAmount = parseInt(document.getElementById('add-amount').value);
    const addAmount = getInputValueNumber('add-amount');

    if(addAmount <= 0){
        alert("invalid amount")
        return;
    }

    // const addPin = parseInt(document.getElementById('add-pin').value);
    const addPin = getInputValueNumber('add-pin');
    if(addPin !== validPin){
        alert('please provide a valid pin number');
        return;
    }

    // console.log(bank, accountNumber, addAmount, addPin)

    // const availableBalance =parseInt( document.getElementById('available-balance').innerText);
    const availableBalance = getInnerText('available-balance');
    // console.log(availableBalance)

    const totalNewAvailableBalance = addAmount + availableBalance;

    // document.getElementById('available-balance').innerText = totalNewAvailableBalance;
    setInnerText(totalNewAvailableBalance);

    // transaction part for add money
    const data = {
        name: 'Add Money',
        date: new Date().toLocaleString()
    }

    transactionData.push(data);
    console.log(transactionData);
});



// cash out part

document.getElementById('withdraw-btn').addEventListener('click', function(e){
    e.preventDefault();
    // console.log('withdraw clicked')

    const agentNumber = getInputValue('agent-number');
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

    // const availableBalance = parseInt(document.getElementById('available-balance').innerText);
    const availableBalance = getInnerText('available-balance');
    // console.log(cashOutAmount, availableBalance)

    if(cashOutAmount <= 0 && cashOutAmount > availableBalance){
        alert('invalid amount');
        return;
    }

    const totalNewAvailableBalance = availableBalance - cashOutAmount;

    // console.log(totalNewAvailableBalance);

    // document.getElementById('available-balance').innerText = totalNewAvailableBalance;
    setInnerText(totalNewAvailableBalance);


    // transaction part for cash out

    const data = {
        name: 'CashOut',
        date: new Date().toLocaleString()
    }

    transactionData.push(data);
    console.log(transactionData);

})


// transaction part
document.getElementById('transaction-btn').addEventListener('click', function(){
    const transactionContainer = document.getElementById('transaction-container')

    transactionContainer.innerText = ""

    for (const data of transactionData) {
    const div = document.createElement('div');

    div.innerHTML = `
        <div class="bg-white flex items-center justify-between p-3.5 rounded-xl mb-3 border-2 border-[rgba(8,8,8,0.1)]">
            <div class="flex items-center gap-2">
                <div class="bg-[rgba(8,8,8,0.05)] rounded-full p-2.5">
                    <img src="assets/wallet1.png" alt="">
                </div>
                <div>
                    <h1 class="font-semibold text-[18px] text-[rgba(8,8,8,0.7)]">${data.name}</h1>
                    <p class="text-[rgba(8,8,8,0.7)]">${data.date}</p>
                </div>
            </div>
            <div>
                <i class="fa-solid fa-ellipsis-vertical text-[rgba(8,8,8,0.7)]"></i>
            </div>
        </div>
    `;

    transactionContainer.appendChild(div);
}
})


// toggling feature
document.getElementById('addMoney-btn').addEventListener('click', function(){
    // <------- way-1 ------->

    // const forms = document.getElementsByClassName('form');
    // for(const form of forms){
    //     form.style.display = 'none';
    // }
    // document.getElementById('add-money-parent').style.display = 'block';

    //<------- way-2 ------->

    handleToggle('add-money-parent');

    handleButtonToggle('addMoney-btn');


})

document.getElementById('cash-out-btn').addEventListener('click', function(){
    handleToggle('cash-out-parent');

    handleButtonToggle('cash-out-btn');
})

document.getElementById('transfer-money-btn').addEventListener('click', function(){
    handleToggle('transfer-money-parent');

    handleButtonToggle('transfer-money-btn');
})

document.getElementById('get-bonus-btn').addEventListener('click', function(){
    handleToggle('get-bonus-parent');

    handleButtonToggle('get-bonus-btn');
})

document.getElementById('pay-bill-btn').addEventListener('click', function(){
    handleToggle('pay-bill-parent');

    handleButtonToggle('pay-bill-btn');
})

document.getElementById('transaction-btn').addEventListener('click', function(){
    handleToggle('transaction-parent');

    handleButtonToggle('transaction-btn');
})