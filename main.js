// login btn event handler.
const enterBtn = document.getElementById('enter-btn');
enterBtn.addEventListener('click',function(){
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none'
    const trasactionArea = document.getElementById('transaction-area');
    trasactionArea.style.display = 'block';
})
// deposit btn handler.
const depositBtn = document.getElementById('deposit-btn');
depositBtn.addEventListener('click',function(){
    const depositNumber = getInputNumber ('deposit-amount');
    updateInnerText('current-deposit', depositNumber);
    updateInnerText("current-balance", depositNumber);
    document.getElementById('deposit-amount').value = "";
    

})
// withdraw btn handler.
const withdrawBtn = document.getElementById('add-withdraw');
withdrawBtn.addEventListener('click', function (){
    const withdrawNumber = getInputNumber('withdraw-amount');
    updateInnerText('current-withdraw', withdrawNumber);
    updateInnerText('current-balance',-1*withdrawNumber);
    document.getElementById('withdraw-amount').value = "";
})
function getInputNumber(id) {
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}



function updateInnerText(id, depositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}

  