// Get references to the input field and term divs
const searchInput = document.getElementById('searchInput');
const termDivs = document.getElementsByClassName('term');

// Add an input event listener to the search input
searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase(); // Convert input to lowercase for case-insensitive search

    // Loop through all the term divs and hide/show them based on the search term
    for (const termDiv of termDivs) {
        const termTitle = termDiv.querySelector('.term-title').textContent.toLowerCase();

        if (termTitle.includes(searchTerm)) {
            termDiv.style.display = 'block';
        } else {
            termDiv.style.display = 'none';
        }
    }
});
