// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    // [ SEARCH FUNCTION ]
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=

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


// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    // [ LETTER SCROLL FUNCTION ]
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

document.addEventListener('DOMContentLoaded', function() {
    // Get a reference to the # element
    var hashElement = document.getElementById('#');

    // Get the position of the banner
    var bannerPosition = document.getElementById('banner').offsetTop;

    // Add an event listener for scroll events
    window.addEventListener('scroll', function() {
        // Check if the scroll position is greater than the banner position
        if (window.scrollY >= bannerPosition) {
            // If it is, add the 'fixed' class to the # element
            hashElement.classList.add('fixed');
        } else {
            // If not, remove the 'fixed' class
            hashElement.classList.remove('fixed');
        }
    });
});


// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    // =-=-=-=-=-=-=-= [ MODAL ] =-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

document.addEventListener('DOMContentLoaded', function () {

    // [ ] Get references to the buttons and the modal
    const modalButton = document.getElementById('modalButton');
    const bookmarkButton = document.getElementById('bookmarkButton');
    const modal = document.getElementById('myModal');

    // [ ] Function to open the modal and disable scrolling
    function openModal() {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        // Add an event listener for the Escape key
        document.addEventListener('keydown', closeModalOnEscape);
    }


    // [ ] Event listener for the modal - bookmark - and close button
    modalButton.addEventListener('click', openModal);
    bookmarkButton.addEventListener('click', openModal);
    document.querySelector('.close').addEventListener('click', closeModal);



    // [ ] Display fade-in sidebar nav-tools
    var navTools = document.getElementById('nav-tools');
    navTools.classList.add('fade-in'); // Add fade-in class initially

    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            navTools.classList.add('active'); // Add active class to apply fade-in effect
        } else {
            navTools.classList.remove('active'); // Remove active class if user scrolls back to top
        }
    });

});






// ======================================================
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
        // ~ ~ ~ ~ ~ ~ ~ [ /SCRIPT ] ~ ~ ~ ~ ~ ~ ~
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// ======================================================