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

    // [ ] Function to close the modal and enable scrolling
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        // Remove the event listener for the Escape key
        document.removeEventListener('keydown', closeModalOnEscape);
    }

    // [ ] Event listener for the modal - bookmark - and close button
    modalButton.addEventListener('click', openModal);
    bookmarkButton.addEventListener('click', openModal);
    document.querySelector('.close').addEventListener('click', closeModal);

    // [ ] Event listener for clicking outside the modal to close it
    
    // window.addEventListener('click', (event) => {
    //     if (event.target === modal) {
    //         closeModal();
    //     }
    // });

    // [ ] Function to close the modal when Escape key is pressed
    function closeModalOnEscape(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    }

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



// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    // =-=-=-=-=-=-=-= [ DARK - MODE  ] =-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

document.addEventListener('DOMContentLoaded', function() {

    const darkModeButton = document.getElementById('dark-mode');
  
    darkModeButton.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
    });

  });
  


// ======================================================
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
        // ~ ~ ~ ~ ~ ~ ~ [ /SCRIPT ] ~ ~ ~ ~ ~ ~ ~
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// ======================================================





