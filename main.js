// DAY 2 of #100DaysOfCode

//1. COMMENTS
// Single line comments
/*
    Multi
    line
    Comments
*/

/*
//2. CONSOLE.LOG()
    // Log to console
    console.log('Hello world');
    console.log(123);
    console.log(true);
    var greeting = 'Hello';
    console.log(greeting);
    console.log([1,2,3,4]);
    console.log({a:1,b:2});
    console.table({a:1,b:2});
    console.error(greeting); //Shows the greeting variable content as an error in Red color
    console.clear(); //clears the console
    console.warn("This is a warning"); //similar to error but prints in yellow
    console.time('Hello'); //Hello is an identifier
        console.log('Hello world');
        console.log('Hello world');
        console.log('Hello world');
        console.log('Hello world');
        console.log('Hello world');
        console.log('Hello world');
    console.timeEnd('Hello'); //Time taken from beginning of time 'Hello' to the end.
*/

/*
//3. VARIABLES AND DECLARATIONS
    // var, let, const (introduced in ES 2015/ ES6)

    // 3.1) var
    var username = 'Bharati Subramanain';
    console.log(username);
    username = 'Bharati' //can reassign
    console.log(username);

    var x;
    console.log(x); //result -> undefined; since the variable has not been initialized
    x = 'hello';
    console.log(x);

    // Naming conventions
    // variables can only contain letters, numbers, _, $
    // variables cannot start with numbers
    
    var firstName = 'Bharati';
    var first_name = 'Bharati';
    var FirstName = 'Bharati';
    var firstname = 'Bharati';

    // 3.2) let
    let uname = 'Bharati Subramanain';
    console.log(uname);
    uname = 'Bharati' //can reassign
    console.log(uname);

    // 3.3) const
    const name = 'Bharati';
    //cannot reassign const
    //name = 'Sharada';
    //const x; -> Not allowed; Have to assign values to const variables
*/

/*
// 4. DATA TYPES IN JAVASCRIPT 
    // 4.1) Primitive Data Types 
        // 4.1.1) String
        const name = 'John Doe';
        console.log(typeof name); //shows the data type of the variable
        // 4.1.2) Number
        const age = 20;
        console.log(typeof age); 
        // 4.1.3) Boolean
        const hasKids = false;
        console.log(typeof hasKids);
        // 4.1.4) Null
        const car = null;
        console.log(typeof car); //gives object
        // 4.1.5) Undefined
        let test;
        console.log(typeof test);
        // 4.1.6) Symbol
        const sym = Symbol();
        console.log(typeof sym);
    // 4.2) Reference Types
        // 4.2.1) Arrays
        const hobbies = ['books', 'movies', 'music'];
        console.log(typeof hobbies);
        // 4.2.2) Object Literals
        const address = {
            city: 'Chennai',
            state: 'Tamil Nadu',
            country: 'India'
        };
        console.log(typeof address);
        // 4.2.3) Functions
        let func = function print() {
            console.log("Inside print(): Hello world");
        };
        console.log(typeof func);
        // 4.2.4) Dates
        const date = new Date();
        console.log(date);
        console.log(typeof date);
*/

/*
// 5. TYPE CONVERSION 
    //5.1) Type to string
    // Number to string
    val = String(5);
    val = String(4+4);
    // Bool to string
    val = String(true);
    // Date to string
    val = String(new Date());
    //  Array to String
    val = String([1,2,3,4]);
    // toString();
    val = (5).toString()
    // Bool to string
    val = (true).toString();
    // Date to string
    val = (new Date()).toString();
    console.log(val);
    console.log(typeof val);
    console.log(val.length);

    //5.1) Type to Number
    // string to Number
    val = Number('5');
    // Bool to Number
    val = Number(true);
    // Null to Number
    val = Number(null);
    // String to Number
    val = Number('hello'); //NaN -> Not a number
    val = parseInt('100'); //100
    val = parseFloat(100.30); // 100.3
    console.log(val);
    console.log(typeof val);
    console.log(val.toFixed(2));

    //5.3) Type Coercion
    const val1 = String(5);
    const val2 = 6;
    const sum = val1 + val2;
    console.log(sum);
    console.log(typeof sum); //converts 6 to string
*/








    









