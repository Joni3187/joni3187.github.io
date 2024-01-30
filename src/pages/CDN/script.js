// = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    // ~ ~ ~ ~ ~ ~ ~ ~ [ SCRIPTURE ] ~ ~ ~ ~ ~ ~ ~ ~ 
// = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// = = = = = = = = = = = = = = = = = = = 
    // [ COPY TO CLIPBOARD FUNCTION ]
// = = = = = = = = = = = = = = = = = = = 

const btns = document.querySelectorAll('.copyBtn');

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        // const txt = btn.previousElementSibling.innerText;
        const txt = btn.nextElementSibling.innerText;
        copyToClipboard(txt);
        alert("Text Copied");
    })
})

async function copyToClipboard(txt) {
    try {
        await navigator.clipboard.writeText(txt)
        console.log(`${txt} was copied successfully`);
    } catch(e) {
        console.error(`Copy failed: ${e}`);
    }
}


// = = = = = = = = = = = = = = = = = = = 
    // NEW SCRIPT FUNCTION
// = = = = = = = = = = = = = = = = = = = 




// = = = = = = = = = = = = = = = = = = = = = 
    // [ END OF SCRIPTURE SACRILEGE ]
// = = = = = = = = = = = = = = = = = = = = = 