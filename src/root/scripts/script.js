// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    // =-=-=-=-=-=-=-= [ SIDE NAV BAR ] =-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

document.addEventListener('DOMContentLoaded', function () {

  var navTools = document.getElementById('nav-tools');

  // Add fade-in class initially
  navTools.classList.add('fade-in'); 

  window.addEventListener('scroll', function() {
      if (window.scrollY > 0) {
        // Add active class to apply fade-in effect
        navTools.classList.add('active'); 
      } else {
        // Remove active class if user scrolls back to top
        navTools.classList.remove('active'); 
      }
  });

});


// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  // =-=-=-=-=-=-=-= [ DARK - MODE  ] =-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

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