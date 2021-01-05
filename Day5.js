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
