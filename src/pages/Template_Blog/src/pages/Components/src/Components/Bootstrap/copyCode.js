// You need JavaScript to copy the code to the clipboard when the "Copy" button is clicked. Here’s a simple script that accomplishes this:

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('copyButton').addEventListener('click', function() {
        var code = document.getElementById('codeSample').innerText; // Get the code text
        navigator.clipboard.writeText(code).then(function() {
            /* clipboard successfully set */
            alert('Code copied to clipboard!');
        }, function() {
            /* clipboard write failed */
            alert('Failed to copy code.');
        });
    });
});


// This JavaScript listens for a click event on the "Copy" button. It then retrieves the text from the <code> element and uses the Clipboard API (navigator.clipboard.writeText) to copy the text. An alert confirms the action to the user.