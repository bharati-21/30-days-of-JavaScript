const form = document.getElementById('loan-form');
form.addEventListener('submit', calculateResult);

// Form Submit Event
function calculateResult(e) {
    e.preventDefault();

    console.log('Calculating...');

    const loanAmt = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');

    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(loanAmt.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    const x = Math.pow( 1 + calculatedInterest, calculatedPayments);
    const monthly = (principal*x*calculatedInterest)/(x-1);

    if(isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments)- principal).toFixed(2);
    }
    else {
        //console.log('Please check your numbers');

        showError('Please check your numbers');
    }
}

function showError(error) {
    const errorDiv = document.createElement('div')
    errorDiv.className = 'alert alert-danger mb-3 mt-3';
    errorDiv.appendChild(document.createTextNode(error));

    // Get elements 
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');


    // Insert error above heading
    card.insertBefore(errorDiv, heading);

    // Clear error after 3 seconds
    setTimeout(clearError, 3000);
}

function clearError() {
    document.querySelector('.alert').remove();
}