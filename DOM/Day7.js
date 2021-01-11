// 1. PROPERTIES OF DOCUMENT OBJECT
let val;

val = document; //Returns the entire HTML document
console.log("Document object:", val);

val = document.all; // Returns a collection of all HTML tags -> HTMLAllCollection
console.log("document.all", val);
console.log("document.all[2]",document.all[2]);

val = document.all.length;
console.log("Length of all the elements in the DOM:", val);

console.log("document.head:", document.head);
console.log("document.doctype:", document.doctype);

console.log("document.domain", document.domain);
console.log("document.URL", document.URL);
console.log("document.characterSet", document.characterSet);
console.log("document.contentType", document.contentType);

// 2. SELECTING ELEMENTS IN THE DOCUMENT WITHOUT SELECTORS

// 2.1) Selecting doc forms 
    val = document.forms;
    console.log("document.forms", val);
    console.log("document.forms[0]:", document.forms[0]);
    console.log("document.forms[0].id:", val[0].id);
    console.log("document.forms[0].method:", val[0].method);
    console.log("document.forms[0].action:", val[0].action);

// 2.2) Selecting doc links 
    val = document.links;
    console.log("document.links", val);
    console.log("document.links[0]:", val[0]);
    console.log("document.links[0].id:", val[0].id);
    console.log("document.links[0].className:", val[0].className);
    console.log("document.links[0].classList:", val[0].classList); // DOM token list
    console.log("document.links[0].classList[0]:", val[0].classList[0]); // DOM token list

// 2.3) Selecting doc images
    console.log("document.images:",  document.images);

// 2.4) Selecting doc scripts
    console.log("document.script:",  document.scripts);
    console.log("document.script[].getAttribute('src'):",  document.scripts[2].getAttribute('src'));

// 2.5) Converting HTMLCollections into an Array
    let scripts = document.scripts;
//    scripts.forEach(function(script){
//         console.log(script);
//     });  forEach is not a function

    console.log("LOOPING THROUGH SCRIPT ARRAYS...");
    let scriptArr = Array.from(scripts);
    scriptArr.forEach(function(script){
            console.log(script.getAttribute('src'));
    });















