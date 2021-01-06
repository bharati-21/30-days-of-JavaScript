// 16. WINDOW METHOD, OBJECTS AND PROPERTIES
//window.console.log() <=> console.log()

    /*
    16.1) alert()
    alert('This is an alert!');
    */

    /*
    16.2) prompt()
    const input = prompt();
    alert(input);
    */
    
    /*
    16.3) confirm()
    if(confirm('Are you sure?')) {
        console.log('Yes!');
    }
    else {
        console.log('No!');
    }
    */
    
    // 16.4) Properties
    let prop;

        // 16.4.1) outerHeight
        prop = window.outerHeight;
        console.log('outerHeight',prop);

        // 16.4.2) outerWidth
        prop = window.outerWidth;
        console.log('outerWidth',prop);

        // 16.4.3) innerHeight
        prop = window.innerHeight;
        console.log('innerHeight',prop);

        // 16.4.4) innerWidth
        prop = window.innerWidth;
        console.log('innerWidth',prop);

        // 16.4.5) ScrollY
        prop = window.scrollY; //Gives position of vertical scroll bar
        console.log('scrollY',prop);

        // 16.4.6) ScrollX
        prop = window.scrollX; //Gives position of vertical scroll bar
        console.log('scrollX',prop);

        // 16.4.6) Location Object
        prop = window.location; 
        console.log('location',prop);
        console.log('hostname', prop.hostname);
        console.log('port', prop.port);
        console.log('href', prop.href);
        console.log('search', prop.search); //Query strings
        
        // 16.4.7) Redirect
        // window.location.href = 'https://www.google.com';

        // 16.4.8) Reload
        //window.location.reload(); // constantly reloads the page

        // 16.4.9) History object
        //window.history.go(-1); //goes back one page in the history, -2: 2 pages, -3: 3 pages and so on

        console.log('Number of pages visited before the current page',window.history.length);

        // 16.4.10) Navigator object 
        // Has to do with the Browser and not the window
        prop = window.navigator;
        console.log('Navigator Object:', prop);
        console.log('window.appname', prop.appname);
        console.log('window.appVersion', prop.appVersion); //Gen of browser and Win OS and 32/64 bit version
        console.log('window.platform',prop.platform);
        console.log('window.vendor',prop.vendor);
        console.log('window.language',prop.language);
        
