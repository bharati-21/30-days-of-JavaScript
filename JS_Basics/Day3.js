// 6. NUMBERS AND MATH OBJECT
const num1 = 100;
const num2 = 50;
let val;

    // 6.1) Simple math with Numbers
    console.log("SIMPLE ARITHMETIC OPERATORS");
    val = num1 + num2;
    console.log("Addition: ", val);
    val = num1 - num2;
    console.log("Subtraction: ", val);
    val = num1 * num2;
    console.log("Multiplication: ", val);
    val = num1 / num2;
    console.log("Division: ", val);
    val = num1 % num2;
    console.log("Remainder: ", val);

    //console.clear(); //Clearing the console

    // 6.2) Math Object
    console.log("MATH OBJECTS");
    console.log("PI value: ", Math.PI);
    console.log("E value: ", Math.E);
    console.log("Value after rounding off 2.4: ", Math.round(2.4));
    console.log("Floor value of 2.8: ", Math.floor(2.8));
    console.log("Ceil value of 2.4: ", Math.ceil(2.4));
    console.log("Square root of 64: ", Math.sqrt(64));
    console.log("Absolute value of -12: ", Math.abs(-12));
    console.log("8^2 = ", Math.pow(8,2));
    console.log("Smallest value in [2, 33, -2, 6]: ", Math.min(2,33,-2,6));
    console.log("Largest value in [2, 33, -2, 6]: ", Math.max(2,33,-2,6));
    console.log("A random number between 0 and 1: ", Math.random());
    console.log("A random number between 1 and 20: ", Math.floor(Math.random() * 20 + 1));

/*********************************************************************************/

// 7.String Methods and Concatenation
console.log("STRING METHODS");
const fname = "Bharati";
const lname = "Subramanian";
const myAge = 21;

    // 7.1) Concatenation
    val = fname + ' ' + lname;
    console.log("fname + lname = ", val);

    // 7.2) Append
    val = 'Bharati ';
    val += 'Subramanian';

val = "My name is " + fname + " " + lname + " and I am " + myAge;
console.log(val);

    // 7.3) Escaping
    val = 'That\'s awesome, I can\'t wait'; //OR
    val = "That's awesome, I can't wait";

    // 7.4) Properties and Methods
        // 7.4.1) length
        console.log("Length of First Name: ", fname.length);

        // 7.4.2) concat
        console.log("Using concat(): ", fname.concat(' ', lname));

        // 7.4.3) changing case
        console.log("To Upper case : ", fname.toUpperCase());
        console.log("To Lower Case: ", fname.toLowerCase());

        // 7.4.4) Indexing
        console.log("First index of l: ", fname.indexOf('l'));
        console.log("Last Index of l: ", fname.lastIndexOf('l'));
        console.log("Char at index 3: ", fname.charAt(3));

        // 7.4.5) Substring
        console.log("Substring of 'William', 0-4: ", fname.substring(0,4));

        // 7.4.6) slice()
        console.log("Slicing Firstname: " ,fname.slice(-3));

        // 7.4.7) Split a string based on a separator
        console.log("Split ", fname.split(''));

        // 7.4.8) replace()
        console.log('Hello world!'.replace('world', 'there'));

        // 7.4.9) includes()
        console.log("Does 'William' contain 'iam': ", fname.includes('iam'));
        console.log("Does 'William' contain 'foo': ", fname.includes('foo'));

// 8. TEMPLATE LITERALS
/*
const job = 'Web Developer';
const city = 'Bangalore';
const company = 'ABC';

html = `<h3>TEMPLATE LITERALS</h3>
    <ul>
        <li>Name: ${fname} ${lname}</li>
        <li>Age: ${myAge}</li>
        <li>Job: ${job}</li>
        <li>Company: ${company}</li>
        <li>City: ${city}</li>
    </ul>
`;
document.body.innerHTML = html;
*/


//console.clear(); //Clearing the console