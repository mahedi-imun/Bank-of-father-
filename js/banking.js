document.getElementById('deposit-btn').addEventListener('click',function(){
    // ADD DEPOSIT 
    let depositInput = document.getElementById('deposit-input');
    let newDepositAmountText = depositInput.value;
    let newDepositAmount = parseFloat(newDepositAmountText);

    let depositTotal = document.getElementById('depositBallance');
    let oldDepositAmountText= depositTotal.innerText ;
    let oldDepositAmount = parseFloat(oldDepositAmountText);

    let newDepositBallance = oldDepositAmount+ newDepositAmount;

     depositBallance.innerText = newDepositBallance;  

     // UPDATE MAIN BALANCE

     let mainBallance = document.getElementById('main-ballance');
     let newMainBallanceText = mainBallance.innerText;
     let newMainBallance = parseFloat(newMainBallanceText);
     
     let totalMainBallance = newMainBallance + newDepositAmount ;
     mainBallance.innerText = totalMainBallance;

     depositInput.value ='';
});
// withdraw btn event handel 

document.getElementById('withdraw-btn').addEventListener('click',function(e){
    let withdrawInput = document.getElementById('withdraw-input');
    let withdrawInputText = withdrawInput.value;
    let PreviousWithdrawInput = parseFloat(withdrawInputText);

    let withdrawBallance= document.getElementById('withdraw-ballance');
    let withdrawBallanceText = withdrawBallance.innerText;
    let PreviousWithdrawBallance = parseFloat(withdrawBallanceText);
   
    let newWithdrawBallance = PreviousWithdrawInput + PreviousWithdrawBallance ;

    withdrawBallance.innerText =newWithdrawBallance;
// update new main balance 
    let mainBallance = document.getElementById('main-ballance');
    let newMainBallanceText = mainBallance.innerText;
    let newMainBallance = parseFloat(newMainBallanceText);
    let updateMainBallance =newMainBallance -PreviousWithdrawInput;

    mainBallance.innerText = updateMainBallance;

    // clear withdraw input 
    withdrawInput.value ='';
})



