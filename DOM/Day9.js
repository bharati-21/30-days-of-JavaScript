// 5. DOM SELECTORS FOR MULTIPLE ELEMENTS

    // 5.1) document.getElementsByClassName

    const items = document.getElementsByClassName('collection-item');
    console.log("document.getElementsByClassName('collection-item'):", items); // Returns an HTMLCollection
    // Each list item has an index (0-based) similar to an array

    console.log("document.getElementsByClassName('collection-item')[0]:", items[0]);
    items[0].style.color = 'red';
    items[0].textContent = 'Task 1';

    const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
    console.log("document.querySelector('ul').getElementsByClassName('collection-item'):", listItems);

    // 5.2) document.getElementsByTagName
    const lis = document.getElementsByTagName('li');
    console.log("document.getElementsByTagName('li'):", lis)
    console.log("document.getElementsByTagName('li')[1]:", lis[1])
    lis[1].style.color = 'green';
    lis[1].textContent = 'Hello';

    // HTMLCollection is not an array
    lisArr = Array.from(lis);
    lisArr.reverse();

    lisArr.forEach(function(l, i){
        console.log(l.className);
        l.textContent = `${i}: Hello`;
    });

    // 5.2) document.querySelectorAll
    const qItems =  document.querySelectorAll('ul.collection li.collection-item'); // returns a NodeList
    // No need to convert into an array

    console.log("document.querySelectorAll('ul.collection li.collection-item'):", qItems);

    qItems.forEach(function(item, index){
        console.log(index, item.textContent);
    });

    const liOdd = document.querySelectorAll('li:nth-child(odd)');

    const liEven = document.querySelectorAll('li:nth-child(even)');

    liOdd.forEach(function(item, index){
        item.style.background = '#ccc'
    });

    for(let i = 0; i<liEven.length; i++) {
        liEven[i].style.background = '#f4f4';
    }