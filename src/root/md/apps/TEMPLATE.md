# Template

## TOC


## About

[ Components.md ]

App serves as quick reference for template style components. 










## Side NavBar

``` html
    <!-- [ BANNER ] -->

  <!-- =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= -->
            <!-- [ SIDE NAV TOOLBAR ]  -->
  <!-- =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= -->
  <div class="nav-tools" id="nav-tools">

    <!-- MENU -->
    <button id="dark-mode">
      <i class="fa-solid fa-bars"></i>
    </button>

    <!-- LIGHT / DARK MODE -->
    <button id="dark-mode">
      <i class="fa-regular fa-sun"></i>
    </button>

    <!-- TO-TOP BUTTON -->
    <button onclick="window.location.href='#'">
      <i class="fa-solid fa-arrow-turn-up"></i>
    </button>

  </div>

    <!-- [ MAIN CONTENT ] -->
```


``` css

/* ============================== */
  /* [ SIDE NAV BAR - TOOLS ] */
/* ============================== */

.nav-tools {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  /* align-items: flex-end; */
}

.nav-tools button {
  margin-bottom: 18px; /* Adjust as needed for spacing between buttons */
  border-radius: 5px;
  cursor: pointer;
  /* padding: 2px; */
}

.nav-tools button i {
  font-size: 28px;
  padding: 3px 2px;
}

.nav-tools button:hover {
  background-color: #353535;
  color: #e7e7e7;
}

.fade-in {
  opacity: 0;
  transition: opacity 0.5s ease;
}

.fade-in.active {
  opacity: 1;
}   

```


``` js
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

```








## EOD

<!--  -->