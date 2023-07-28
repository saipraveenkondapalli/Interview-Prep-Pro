assests = {
  "close": `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
  width="20" height="20"
  viewBox="0 0 50 50">
  <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
  </svg>`,

  "open": `<img  src="https://assets.leetcode.com/users/avatars/avatar_1637307466.png" height="50" width="50">`,
}

function createSideButton(){
  let button = document.createElement("button");
  button.classList.add("side-button");
  button.id = "logo-button";
  button.innerHTML += assests["open"];
  button.setAttribute("onclick", "openSidebar()");
  button.style = ` 
  position: fixed;
  top: 50%;
  left: 0;
  padding: 10px;
  background-color: black;
  color: #fff;
  border: none;
  cursor: pointer;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px; `;

  document.body.appendChild(button);

}

function addStyles(){
    let styles = document.createElement("style");
    styles.innerHTML = `
     .sidebar.open {
      transform: translateX(0);
    }

    `
    document.body.appendChild(styles);
}

function sidebar(){
  sidebar = document.createElement("div");
    sidebar.classList.add("sidebar");
    sidebar.id = "sidebar";
    sidebar.innerHTML = `<h2>Hello from sidebar</h2>`;
    sidebar.style = `
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh%;
    width: 300px;
    background-color: rgba(255, 255, 255, 0.749);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    transition: transform 0.5s ease-out;
    transform: translateX(-100vw);
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;`;

    document.body.appendChild(sidebar);

}


addHtml = function (){
    let html = document.createElement("div");
    html.innerHTML = `<!-- HTML for the button that opens the sidebar -->

<button class="sidebar-button" id="logo"><img  src="https://assets.leetcode.com/users/avatars/avatar_1637307466.png" height="50" width="50"></button>

<!-- HTML for the sidebar -->
<div class="sidebar">
  <h2>Sidebar Title</h2>
  <button class="sidebar-close-button">
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="20" height="20"
viewBox="0 0 50 50">
<path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
</svg>
  </button>

  <div class="section">
    <span class="option active" id="company" onclick="switch_color('company')"> Companies <svg aria-hidden="true"
        focusable="false" role="img" class="octicon octicon-rocket" viewBox="0 0 16 16" width="16" height="16"
        fill="currentColor"
        style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;">
        <path
          d="M14.064 0h.186C15.216 0 16 .784 16 1.75v.186a8.752 8.752 0 0 1-2.564 6.186l-.458.459c-.314.314-.641.616-.979.904v3.207c0 .608-.315 1.172-.833 1.49l-2.774 1.707a.749.749 0 0 1-1.11-.418l-.954-3.102a1.214 1.214 0 0 1-.145-.125L3.754 9.816a1.218 1.218 0 0 1-.124-.145L.528 8.717a.749.749 0 0 1-.418-1.11l1.71-2.774A1.748 1.748 0 0 1 3.31 4h3.204c.288-.338.59-.665.904-.979l.459-.458A8.749 8.749 0 0 1 14.064 0ZM8.938 3.623h-.002l-.458.458c-.76.76-1.437 1.598-2.02 2.5l-1.5 2.317 2.143 2.143 2.317-1.5c.902-.583 1.74-1.26 2.499-2.02l.459-.458a7.25 7.25 0 0 0 2.123-5.127V1.75a.25.25 0 0 0-.25-.25h-.186a7.249 7.249 0 0 0-5.125 2.123ZM3.56 14.56c-.732.732-2.334 1.045-3.005 1.148a.234.234 0 0 1-.201-.064.234.234 0 0 1-.064-.201c.103-.671.416-2.273 1.15-3.003a1.502 1.502 0 1 1 2.12 2.12Zm6.94-3.935c-.088.06-.177.118-.266.175l-2.35 1.521.548 1.783 1.949-1.2a.25.25 0 0 0 .119-.213ZM3.678 8.116 5.2 5.766c.058-.09.117-.178.176-.266H3.309a.25.25 0 0 0-.213.119l-1.2 1.95ZM12 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z">
        </path>
      </svg> </span>
    <span class="option" id="yt" onclick="switch_color('yt')"> Videos <svg aria-hidden="true" focusable="false"
        role="img" class="octicon octicon-sidebar-collapse" viewBox="0 0 16 16" width="16" height="16"
        fill="currentColor"
        style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;">
        <path d="M6.823 7.823a.25.25 0 0 1 0 .354l-2.396 2.396A.25.25 0 0 1 4 10.396V5.604a.25.25 0 0 1 .427-.177Z">
        </path>
        <path
          d="M1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0ZM1.5 1.75v12.5c0 .138.112.25.25.25H9.5v-13H1.75a.25.25 0 0 0-.25.25ZM11 14.5h3.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25H11Z">
        </path>
      </svg></span>
  </div>
  <div id="company-section">

    <p class="description">
      The list of companies for the leetcode question asked previously.
    </p>

  <div class="table" id='table'>
    <table>
      <tr>
        <th>Company name </th>
        <th>Count</th>
      </tr>
      <tr>  
        <td>Row 1, Column 1</td>
        <td>Row 1, Column 2</td>
      </tr>
      <tr>
        <td>Row 2, Column 1</td>
        <td>Row 2, Column 2</td>
      </tr>
      <tr>
        <td>Row 2, Column 1</td>
        <td>Row 2, Column 2</td>
      </tr>
    </table>

  </div>
  </div>

  <div id ="yt-section">
      <p class="description">
        The list of videos for the leetcode question asked previously.
      </p>
      <iframe width="100%" height="350" src="https://www.youtube.com/embed/8z8Cobsvc9k" title="Create a ChatGPT Voice Assistant in 8 Minutes (Python Tutorial)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    
  </div>
  <style>
    #yt-section{
      display: none;
    }

    .option {

      display: inline-block;
      align-items: center;
      margin-top: 10px;
      margin-bottom: 10px;
      border-radius: 5px;
      padding: 10px;
      text-decoration: none;
      cursor: pointer;
      color: rgba(0, 0, 0, .4)
    }

    .active {
      font-weight: 600;
      color: rgba(55, 113, 224, 1);
      border-width: 0px;
      border-color: slateblue;
      border-style: solid;
      border-color: skyblue;
      border-radius: 15px;
      background-color: rgba(55, 113, 224, 0.1);
      padding: 5px;
    }

    body {
      font-family: Arial, sans-serif;
      margin: 0;
    }

    .section {
      margin-top: 10px;
      background-color: #fff;
      border: 1px solid rgba(0, 0, 0, 0.125);
      border-radius: 0.25rem;
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
      flex-basis: calc(50% - 5px);
      overflow: hidden;
      transition: box-shadow 0.2s ease-in-out;

    }




  </style>
  <!-- CSS to style the sidebar and button -->
  <style>
    .description{
      background-color: rgba(0, 0, 0, .2);
      color: rgb(0, 0, 0);
      padding: 10px;
      border-radius: 10px;
      margin-left: 2px;
      margin-right: 5px;
      width: auto;
      
    }
    .table {
      margin-top: 10px;
      
    }

    table {
      border-radius: 5px;
      margin-top: 10px;
      border-collapse: collapse;
      width: 90%;
      margin: 0 auto;
      
    }

    td,
    th {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: left;
    }


    th {
      background-color: #fff;
    }


    tr:nth-child(even) {
      background-color: #f2f2f2;
    }

    .sidebar {
      margin: 0;
      position: fixed;
      height: 100vh;
      /* Set the height to 100vh to fill the entire screen */
      width: 30vw;
      background-color: rgba(255, 255, 255, 0.749);
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
      transition: transform 0.5s ease-out;
      transform: translateX(-100vw);
      border-top-right-radius: 25px;
      border-bottom-right-radius: 25px;
      z-index: 2;
    }

    .sidebar.open {
      transform: translateX(0);
    }

    .sidebar h2,
.sidebar .sidebar-close-button {
  display: inline-block;
}

.sidebar .sidebar-close-button {
  float: right;
}

    .sidebar ul {
      list-style: none;
      padding: 0;
    }

    .sidebar li {
      margin-bottom: 10px;
    }

    .sidebar a {
      display: block;
      padding: 10px;
      text-decoration: none;
      color: #333;
    }

    .sidebar a:hover {
      background-color: #f3f3f3;
    }

    .sidebar-close-button {
      display: inline-block;
      margin-top: 20px;
      padding: 10px;
      background-color: transparent;
      color:black;
      border: none;
      cursor: pointer;
    }


    .sidebar-button {
      position: fixed;
      top: 50%;
      left: 0;
      padding: 10px;
      background-color: black;
      color: #fff;
      border: none;
      cursor: pointer;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      
    }
    img{
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  
    .sidebar-button:hover {
      background-color: rgba(55, 113, 224, 1); ;
    }
  </style>`
  ;

    document.body.appendChild(html);

}

//createSideButton();
//sidebar();

//addScript();

//addStyles();

addHtml();


    let button = document.querySelector('.sidebar-button');
    let sidebarext = document.querySelector('.sidebar');
    const closeButton = document.querySelector('.sidebar-close-button');
    const yt_section = document.getElementById("yt-section");
    const company_section = document.getElementById("company-section");
    const logo = document.getElementById("logo");

    button.addEventListener('click', () => {
      sidebarext.classList.add('open');
      logo.style.display = "none";
      console.log("-----------------clicked");
    });

    closeButton.addEventListener('click', () => {
      sidebarext.classList.remove('open');
      logo.style.display = "block";
    });

    function switch_color(id) {
      element = document.getElementById(id);
      company = document.getElementById("company");
      yt = document.getElementById("yt");
      if (id == "company") {
        company.classList.add("active");
        yt.classList.remove("active");
        yt_section.style.display = "none";
        company_section.style.display = "block";
      }
      else {
        yt.classList.add("active");
        company.classList.remove("active");
        yt_section.style.display = "block";
        company_section.style.display = "none";
      }


    }


