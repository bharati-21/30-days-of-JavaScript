// 9. ARRAY AND ARRAY METHODS
    // 9.1 Creating Arrays
    const arr = [43,56,85,68,21,97,10];
    const num = [67,43,56,100,68,21,97,10,2]
    const arr2 = new Array(16, 58, 60, 42, 72, 21);
    const fruits = ['Apple', 'Banana', 'Cherry', 'Orange'];
    const mixed = [22, 'Hello', true, undefined, null, {a:1, b:2}, new Date()];
    console.log("Printing mixed array: ", mixed);
    // console.clear();

    let val;
    console.log("Original Array: ", arr);

    // 9.2) Array Length
    val = arr.length;
    console.log("Array Length: ", val);

    // 9.3) Check if the object is an array
    val = Array.isArray(arr);
    console.log("Is ", arr, " an Array? ", val);

    // 9.4) Indexing an Array
    val = arr[3];
    console.log("arr[3]= ", val);

    // 9.5) Inserting in an Array
    arr[2] = 100;
    console.log("Modified Array (Changed arr[2])= ", arr);

    //9.6) Finding index of an element
    val = arr.indexOf(21);
    console.log("indexOf(21): ", val);

    // 9.7) Appending to an array
    arr.push(2);
    console.log("After push(2): ", arr);

    // 9.8) Adding to the front of the Array
    arr.unshift(67);
    console.log("After unshift(67): ", arr);

    // 9.9) Removing the last element of the array
    arr.pop();
    console.log("After pop(): ", arr);

    // 9.10) Removing the first element of the array
    arr.shift();
    console.log("After shift(): ", arr);
    
    // 9.11) Splicing an Array
    arr.splice(1,3); //alters the original array
    console.log("After splice(1,3): ", arr);

    // 9.12) Reversing an Array
    arr.reverse();
    console.log("Reversing an array: ", arr);

    // 9.13) Concatenating
    val = arr.concat(arr2);
    console.log("Concatenating ", arr, " and ", arr2, " : ", val); 

    // 9.14) Find
    // takes in a testing function
    // Returns the first element that satisfies a condition
    function under50(n) {
        return n < 50;
    }
    val = num.find(under50);
    console.log("First number in the array under 50:", val);

    // 9.15) Sorting
    num.sort();
    console.log("After sort(): ", num); // Sorts by the first number in the array

    val = num.sort(function(a,b) {
        return a-b;
    });
    console.log("After using comparison: ", val);

    /* Reversed Sort 
        val = num.sort(function(a,b) {
            return b-a;
        });
    */

    


