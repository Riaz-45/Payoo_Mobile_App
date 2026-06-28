// login button functionality
document.getElementById('login-btn').addEventListener('click',  function(e){
    e.preventDefault();
    
    const mobileNumber = 12345678910;
    const pinNumber = 1234;

    const mobileNumberValue = document.getElementById('mobile-number').value
    const mobileNumberValueConverted = parseInt(mobileNumberValue);

    const pinNumberValue = document.getElementById('pin-number').value
    const pinNumberValueConverter = parseInt(pinNumberValue);

    // console.log(mobileNumberValueConverted, pinNumberValueConverter);

    if(mobileNumberValueConverted === mobileNumber && pinNumberValueConverter === pinNumber){
        window.location.href = "./home.html"
    }else{
        alert('Invalid credentials');
    }
})