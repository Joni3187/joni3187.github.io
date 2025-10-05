// =-=-=-=-=-=-=-=-=-=-=-=-=-=
  // [ TOGGLE BOOKMARK BAR ]
// =-=-=-=-=-=-=-=-=-=-=-=-=-=

document.addEventListener('DOMContentLoaded', function() {

  // Attach click event listener to all elements with the 'divider' class
  document.querySelectorAll('.divider').forEach(function(element) {

    element.addEventListener('click', function(e) {

      // Check if the clicked element or its parent has the 'link-top' class
      let target = e.target;
      if (target.classList.contains('link-top') || target.parentElement.classList.contains('link-top')) {
        // Find the .link-top element
        let linkTop = target.classList.contains('link-top') ? target : target.parentElement;
        
        // Get the next sibling element of the parent of the .link-top, which should be the div to hide
        let nextDiv = linkTop.closest('div').nextElementSibling;
        
        // Toggle visibility
        if (nextDiv.style.display === 'none') {
          nextDiv.style.display = ''; // Show if already hidden
        } else {
          nextDiv.style.display = 'none'; // Hide if shown
        }
      }
    });
  });
});

