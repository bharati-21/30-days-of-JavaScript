// 6. TRAVERSING THE DOM

let val;
const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = list;
console.log(val);

val = listItem;
console.log(val);

    // 6.1) Get child nodes
    val = list.childNodes; //NodeList
    console.log("document.querySelector('ul.collection').childNodes:", val);
    // text nodes: line breaks in HTML which is counted as a text node

    val = list.childNodes[0];
    console.log("document.querySelector('ul.collection').childNodes[0]:", val);
    console.log("document.querySelector('ul.collection').childNodes[0].nodeName:", val.nodeName);
    console.log("document.querySelector('ul.collection').childNodes[0].nodeType:", val.nodeType);

    /*
        NODE TYPE
        1 - Element
        2 - Attribute (deprecated)
        3 - Text node
        8 - Comment
        9 - Document itself
        10 - Doctype
    */
    // childNodes give all types of nodes

    // 6.2) Get children element nodes
    val = list.children;
    console.log("document.querySelector('ul.collection').children:", val); // HTMLCollection
    // Node text nodes returned
    // Only elements are returned
    
    console.log("document.querySelector('ul.collection').children[0]:", val[0]);

    val[1].textContent = 'Hello!';

        // 6.2.1) Children of Children
        val[3].children.id = 'test-link';
        val = val[3].children;
        console.log("document.querySelector('ul.collection').children[3].children:",val);

    // 6.3) First Child
    val = list.firstChild;
    console.log("document.querySelector('ul.collection').firstChild", val);
    // First child returns any kind of node

    // To get the first element child
    // 6.4) First Element Child
    val = list.firstElementChild;
    console.log("document.querySelector('ul.collection').firstElementChild", val);

    // 6.3) Last Child
    val = list.lastChild;
    console.log("document.querySelector('ul.collection').lastChild", val);
    // First child returns any kind of node

    // To get the first element child
    // 6.4) Last Element Child
    val = list.lastElementChild;
    console.log("document.querySelector('ul.collection').lastElementChild", val);

    // 6.6) Child Element Count
    val = list.childElementCount;
    console.log("document.querySelector('ul.collection').childElementCount",val);

    // 6.7) Get Parent Node
    val = listItem.parentNode;
    console.log("document.querySelector('li.collection-item').parentNode",val);

    val = listItem.parentElement;
    console.log("document.querySelector('li.collection-item').parentElement",val);

    val = listItem.parentElement.parentElement;
    console.log("document.querySelector('li.collection-item').parentElement.parentElement",val);

    // 6.8) Get next Sibling
    val = listItem.nextSibling;
    console.log("document.querySelector('li.collection-item').nextSibling",val);

    val = listItem.nextElementSibling;
    console.log("document.querySelector('li.collection-item').nextElementSibling",val);

    // 6.8) Get previous Sibling
    val = listItem.previousSibling;
    console.log("document.querySelector('li.collection-item').previousSibling",val);

    val = listItem.previousElementSibling;
    console.log("document.querySelector('li.collection-item').previousElementSibling",val); // null -> first li doesn't have any previous sibling