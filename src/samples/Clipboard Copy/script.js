// COPY TO CLIPBOARD DEMO SCRIPTS 


// ...
// W3 DEMO I
// ...


    function demoI() {
        /* Get the text field */
        var copyText = document.getElementById("myInput1");
        /* Select the text field */
        copyText.select();
        /* For mobile devices */
        copyText.setSelectionRange(0, 99999); 
        /* Copy the text inside the text field */
        navigator.clipboard.writeText(copyText.value);
        /* Alert the copied text - OPTIONAL: DISABLE ALERT*/
        alert("ALERT!! Copied: " + copyText.value);
    }


// ...
// W3 DEMO II
// ...


    function demoII() {
        var copyText = document.getElementById("myInput2");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
        // Tooltip 
        var tooltip = document.getElementById("myTooltip");
        tooltip.innerHTML = "Copied: " + copyText.value;
    }

    function outFunc() {
        var tooltip = document.getElementById("myTooltip");
        tooltip.innerHTML = "Copy to clipboard";
    }


// ...
// G4G DEMO III
// ...


    function demoIII() {
        /* Copy text into clipboard */
        navigator.clipboard.writeText
            ("Geeksforgeeks is best learning platform.");
    }


// ...
// G4G DEMO IV
// ...
 

    function demoIV() {
        /* Select text area by id*/
        var Text = document.getElementById("textbox2");
        /* Select the text inside text area. */
        Text.select();
        /* Copy selected text into clipboard */
        navigator.clipboard.writeText(Text.value);
        /* Set the copied text as text for div with id clipboard */
        document.getElementById("clipboard")
            .innerHTML = Text.value;
    }


// ...
// DEMO V
// ...

    function demoV() {
        var copyText = document.getElementById("myInput3");
        copyText.select();
        copyText.setSelectionRange(0, 99999); 
        navigator.clipboard.writeText(copyText.value);
        // alert("ALERT!! Copied: " + copyText.value);
    }