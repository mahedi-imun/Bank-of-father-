document.getElementById('submit-btn').addEventListener('click',function(e){
   const userField = document.getElementById('user-email');
  const userEmail = userField.value;
   const passwordField = document.getElementById('user-password');
   const userPassword = passwordField.value;
   if(userEmail == 'anik@gmail.com' && userPassword == '123'){
    window.location.href = 'bank.html';
   }
  
})