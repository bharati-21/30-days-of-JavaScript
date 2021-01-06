// 15. GENERAL LOOPS
    // 15.1) For Loop
    for(let i = 0; i<10; i++) {
        console.log("Inside loop", i);
    }

    // 15.2) Continue
    for(let i = 10; i>0; i--) {
        if(i === 7) {
            console.log('7 is my lucky number!')
            continue;
        }
        console.log("Number", i);
    }

    // 15.3) Break
    for(let i = 0; i<10; i++) {
        if(i === 5) {
            console.log('5 encountered! Breaking out of the loop...');
            break;
        }
        console.log("Loop iteration", i);
    }

    // 15.5) While loop
    let counter = 0;
    while(counter < 10) {
        console.log("Inside while loop", counter);
        counter++;
    }

    // 15.6) Do while loop
    counter = 0;
    do {
        console.log('Inside Do-While loop', counter);
        counter++;
    } while(counter<10);

    // 15.7) Looping through arrays
    const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];
    for(let i = 0; i<cars.length; i++) {
        console.log('Car ->', cars[i]);
    }

    // 15.8) forEach method
    // This method takes in a self calling function
    cars.forEach(function(car, index, arr) {
        console.log(`Car ${index} : ${car}`);
        console.log(arr);
    });

    // 15.9) Map()
    const users = [
        {id:1, code: 'A'},
        {id:2, code: 'B'},
        {id:3, code: 'B'},
    ];
    const ids = users.map(function(user) {
        return user.id + '-' + user.code;
    });
    console.log(ids);

    // 15.10) for in loop
    const userInfo = {
        firstName: 'Bharati',
        lastName: 'Subramanian',
        age: 21
    };
    for(let x in userInfo) {
        console.log(`${x} : ${userInfo[x]}`);
    }
    //console.clear();

// 16. Block scope with let and const
// Global Scope
var s = 1;
let t = 2;
const con = 3;

function testScope() {
    var s = 4;
    let t = 5;
    const con = 6;
    console.log('Function Scope:', s,t,con);
}
testScope();

if(true) {
    // Block scope
    var s = 7;
    let t = 8;
    const con = 9;
    console.log('Block(if) Scope:', s,t,con);
}

console.log('Global Scope:', s,t,con);
// s becomes 7 in the global scope
// var changes the global scope with the block level scope value. But the let and con variables retain their value.