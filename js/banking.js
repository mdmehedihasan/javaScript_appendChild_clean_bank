//taking input form the input field
function getValueInput(inputField) {
    const inputInitialText = document.getElementById(inputField);
    const inputInitial = parseFloat(inputInitialText.value);
    inputInitialText.value = '';
    return inputInitial;
}
//get innerText Value
function getInnerTextValue(inputId) {
    const innerTextValue = parseFloat(document.getElementById(inputId).innerText);
    return innerTextValue;
}

//showing value for withdraw or deposit
function showValue(amount, total_depo_withdraw) {
    const prevValue = getInnerTextValue(total_depo_withdraw);
    const newValue = amount + prevValue;
    document.getElementById(total_depo_withdraw).innerText = newValue;
}

function updateBalance(amount, isAdding) {
    const balancePrev = getInnerTextValue('balance-total');
    let balance;
    if (isAdding == true) {
        balance = balancePrev + amount;
    }
    else {
        balance = balancePrev - amount;
    }

    document.getElementById('balance-total').innerText = balance;
}
//deposit button for deposit value
document.getElementById('deposit_btn').addEventListener('click', function () {
    const amount = getValueInput('depositInput');

    if (amount > 0) {
        showValue(amount, 'deposit-total');
        updateBalance(amount, true);
    }
})

//withdraw button for withdraw value
document.getElementById('withdraw_btn').addEventListener('click', function () {
    const amount = getValueInput('withdraw-Input');
    const withdraw_balance = getInnerTextValue('withdraw-total');
    const sur_balance = getInnerTextValue('balance-total');

    if (amount > 0 && withdraw_balance <= sur_balance) {
        showValue(amount, 'withdraw-total');
        updateBalance(amount);
    }
})