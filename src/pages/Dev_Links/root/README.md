# Dev Links





## Updates - Menu SideBar

[ MENU - SIDEBAR ]


``` html
  <!-- NAVBAR -->

  <!-- [ MENU - SIDEBAR ] -->
  <div id="mySidebar" class="sidebar">
    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
    <a href="#bootcamp">Bootcamps</a>
    <a href="#career">Career Hub</a>
    <a href="#cloud">Cloud</a>
    <a href="#dev-blogs">Dev Blogs</a>
    <a href="#tools">Dev Tools</a>
    <a href="#email">Email</a>
    <a href="#framework">Frameworks</a>
    <a href="#network">Networking</a>
  </div>

  <!-- BANNER -->
```

``` css

/* [ NAVBAR ] */

/* 
============
  Sidebar
============
 */
 
 .sidebar {
  margin-top: 5rem;
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0;
  left: 0;
  background-color: #212121;
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 3rem; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidebar */
}

/* The sidebar links */
.sidebar a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

/* When you mouse over the navigation links, change their color */
.sidebar a:hover {
  color: #f1f1f1;
}

/* Position and style the close button (top right corner) */
.sidebar .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

/* [ MAIN CONTENT ] */

```


``` js

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

```


