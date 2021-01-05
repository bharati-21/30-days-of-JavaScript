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