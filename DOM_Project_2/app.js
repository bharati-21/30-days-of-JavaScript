const form = document.getElementById('loan-form');
form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Hide the results div
    document.getElementById('results').style.display = 'none';

    // Show the loader GIF
    document.getElementById('loading').style.display = 'block';
    setTimeout(calculateResult, 2000);
});

// Form Submit Event
function calculateResult() {

    // Hide the loader GIF
    document.getElementById('loading').style.display = 'none';

    console.log('Calculating...');

    // Show the results div
    document.getElementById('results').style.display = 'block';


    // Get the HTML for Loan amount, interest rate and years
    const loanAmt = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');


    // Get the HTML elements that will display results
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    // Get the input value for Loan amount, interest rate and years
    /*
        P = 10,000
        R = 10% => 0.1
        Y = 1

            calculatedInterest (0.1 / 12) = 0.0083333
            calculatedPayments = (12 * 1) = 12

            x = (1 + (0.1/12)) ^ (1*12) = (1+0.008333) ^ 12
                = 1.10471306744


            ACTUAL FORMULA
                x = (1 + (r/n)) ^ nt
            
            monthly = (p * x * calculatedInterest) / (x - 1)
                    = 879.1588723

            ACTUAL FORMULA
                totalPayment  = P * ((1 + (r/n)) ^ nt)
            totalPayment = monthly * caclulatedPayments
                            = 10549.9064676 
            totalInterest = totalPayment - P
                            = 549.906467601
    */
    const principal = parseFloat(loanAmt.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    const x = Math.pow( 1 + calculatedInterest, calculatedPayments);
    const monthly = (principal*x*calculatedInterest)/(x-1);

    // Check if the monthly amount is finite. Will not be finite if the user input is incorrect
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

    // Error message appears above the heading

    // Hide the loader GIF and the result div
    document.getElementById('loading').style.display = 'none';
    document.getElementById('results').style.display = 'none';

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
    
    // Task to be performed after timeout. Hiding the error message
    document.querySelector('.alert').remove();
}