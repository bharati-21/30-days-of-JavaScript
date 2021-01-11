// 1.PROPERTIES OF DOCUMENT OBJECT
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
