// 10. OBJECT LITERALS
const person = {
    firstName: 'Bharati',
    lastName: 'Subramanian',
    age: 21,
    email: 'bharati@gmail.com',
    hobbies: ['reading', 'singing', 'sports'],
    address: {
        city: 'Mumbai',
        state: 'Maharashtra'
    },
    getBirthYear: function() {
        return new Date().getFullYear() - this.age - 1;
        // To access the property from within the object use 'this'.
    }
}; //defines an object literal

let val;
val = person;
console.log(val);

    // 10 .1) Indexing
    val = person.firstName;
    console.log('person.firstName =', val);
    val = person['firstName'];
    console.log("person['firstName']=", val);
    val = person.age;
    console.log('person.age =', val);
    val = person.email;
    console.log('person.email =', val);
    val = person.hobbies[1];
    console.log('person.hobbies[1] =', val);
    val = person.address.city;
    console.log('person.address.city =', val);
    val = person.getBirthYear();
    console.log('person.getBirthYear() =', val);

// 11. DATE AND TIME
let d;
let xxx;
const today = new Date(); // instantiating the Date object
let d1 = new Date('07-21-1999 16:27:13');
d = today;
console.log("Today's Date =", d);
console.log("My Birthday is on: ", d1);

/*
    Other ways to create Date()
    d1 = new Date('July 21 199');
    d1 = new Date('7/21/1999');
*/

    // 11.1) Get year from Date object
    xxx = d.getMonth();
    console.log("Month Number: d.getMonth() =", xxx); // 0 based index 
    xxx = d.getDate();
    console.log("Today's Date: d.getDate() =",xxx);
    xxx = d.getDay();
    console.log("Today's Day of the week: d.getDay() =",xxx); // 0 based index starting from Sunday
    xxx = d.getFullYear();
    console.log("Year: d.getFullYear() =",xxx);
    xxx = d.getHours();
    console.log("Hours: d.getHours() =",xxx);
    xxx = d.getMinutes();
    console.log("Minutes: d.getMinutes() =",xxx);
    xxx = d.getSeconds();
    console.log("Seconds: d.getSeconds() =",xxx);
    xxx = d.getMilliseconds();
    console.log("Milliseconds: d.getMilliseconds() =",xxx);
    xxx = d.getTime();
    console.log("Timestamp: d.getTime() =", xxx); // Amount of time passed since January 1st 1970
    
    d1.setMonth(2);
    console.log("d1.setMonth(2) =", d1);
    d1.setDate(12);
    console.log("d.setDate(12) =", d1);
    d1.setFullYear(1990);
    console.log("d.setFullYear(1990) =",d1);
    d1.setHours(3);
    console.log("d.setHours(3) =",d1);
    d1.setMinutes(16);
    console.log("d.setMinutes(16) =",d1);
    d1.setSeconds(56);
    console.log("d.setSeconds(56) =",d1);

console.clear();

// 12. IF STATEMENTS AND CONDITIONAL OPERATORS

/*
    if(true) {
        //do something
    }
    else {
        // do something else
    }
*/

const id = 100;

    // 12.1) EQUAL TO (==)
    if(id == 100) {
        console.log("ID is equal to 100");
    }
    else {
        console.log("ID is not equal to 100");
    }

    // 12.2) NOT EQUAL TO (!=)
    if(id != 101) {
        console.log("ID is not equal to 101");
    }
    else {
        console.log("ID is equal to 101");
    }

    /*
        == ignores type and returns true
        e.g. '100' == 100 => returns true;

        === compares the type and value
        e.g. '100' === 100 => returns false;
    */

    /*
        // To test if something is undefined:
        if(typeof dummy !== 'undefined') {
            console.log('The dummy =', dummy );
        }
        else {
            console.log("Dummy variable is undefined");
        }
    */

    // 12.3) GREATER THAN OR LESS THAN
    if(id > 200) {
        console.log("ID is greater than 200");
    }
    else {
        console.log("ID is not greater than 200");
    }

    // 12.4) IF ELSE
    const col = 'yellow';
    if(col === 'red') {
        console.log("Color is RED");
    } else if(col === 'blue') {
        console.log('Color is BLUE');
    }
    else {
        console.log('Color is NOT RED OR BLUE. Color is', col)
    }

    // 12.5) LOGICAL OPERATORS
        // 12.5.1) AND (&&)
        const score = 95;
        let grade = 'A';
        if(score>90) {
            console.log("OUTSTANDING SCORE! Score =", score, ", Grade = O");
        }
        else if(score>80 && score<=90) {
            console.log("EXCELLENT SCORE! Score =", score, ", Grade = A");
        }
        else if(score>70 && score<=80) {
            console.log("GOOD SCORE! Score =", score, ", Grade = B");
        }
        else if(score>60 && score<=70) {
            console.log("AVERAGE SCORE! Score =", score, ", Grade = C");
        }
        else if(score>50 && score<=60) {
            console.log("POOR SCORE! Score =", score, ", Grade = D");
        }
        else {
            console.log("BETTER LUCK NEXT TIME! YOU FAILED THE TEST.");
        }
        let agge = 16;

        // 12.5.2) OR (||)
        if(agge<16 || agge>60) {
            console.log("You cannot appear in the race");
        }
        else {
            console.log("You have been registered to participate in the race! Age:", agge);
        }
    
    // 12.6) TERNARY OPERATOR
    console.log("id === 100 ? :", id === 100 ? "ID IS 100" : "ID IS NOT EQUAL TO 100");

// 13. SWITCH
switch(col) {
    case 'red': 
        console.log("The color is red");
        break;
    case 'blue':
        console.log("The color is blue");
        break;
    case 'yellow':
        console.log("The color is yellow");
        break;
    default:
        console.log("The color is not red or blue or yellow. The color is", col);
}

switch(new Date().getDay()) {
    case 0:
        console.log("Today is Sunday");
        break;
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    default:
        console.log("Today is Saturday");
        break;
}