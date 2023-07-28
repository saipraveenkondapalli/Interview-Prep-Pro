html_data = `
<style>
      #sidebar {
      width: 500px;
      }
      .ui-resizable-handle {
      display: inline-block;
      width: 10px;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      cursor: ew-resize;
    }
#open {
  left: 1.5%;
  top: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  background-color: black;
  border-radius: 5px;
  padding-top: 5px;
    border-width: 0;

}


   </style>
   <div id="extension">
      <div class="container" id="open-sidebar">
             <button id="open" data-bs-toggle="offcanvas" data-bs-target="#sidebar" aria-controls="sidebar"><img src="logo.png" style="margin-left: 5px;" width="50px" height="50px"></button>
         <div
            class="offcanvas offcanvas-start"
            tabindex="-1"
            id="sidebar"
            aria-alabelledby="sidebarLabel"
            >
            <div class="offcanvas-header">
               <h5 class="offcanvas-title" id="sidebarLabel">Leetcode Extension</h5>
               <button
                  type="button"
                  class="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                  ></button>
            </div>
            <div class="offcanvas-body">

               <ul class="nav nav-tabs" role="tablist">
                  <li class="nav-item" role="presentation">
                     <button
                        class="nav-link active"
                        id="tab1-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#tab1"
                        type="button"
                        role="tab"
                        aria-controls="tab1"
                        aria-selected="true"
                        >
                     Companies
                     </button>
                  </li>
                  <li class="nav-item" role="presentation">
                     <button
                        class="nav-link"
                        id="tab2-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#tab2"
                        type="button"
                        role="tab"
                        aria-controls="tab2"
                        aria-selected="false"
                        >
                     Youtube Solutions
                     </button>
                  </li>
               </ul>
               <div class="tab-content mt-3">
                  <div
                     class="tab-pane fade show active"
                     id="tab1"
                     role="tabpanel"
                     aria-labelledby="tab1-tab"
                     >
                     <div class="container">
                        <table class="table">
                           <thead>
                              <tr>
                                 <th scope="col">Company</th>
                                 <th scope="col">Count</th>
                              </tr>
                           </thead>
                           <tbody>
                              <tr>
                                 <td>Apple</td>
                                 <td>10</td>
                              </tr>
                              <tr>
                                 <td>Google</td>
                                 <td>8</td>
                              </tr>
                              <tr>
                                 <td>Microsoft</td>
                                 <td>6</td>
                              </tr>
                              <tr>
                                 <td>Amazon</td>
                                 <td>4</td>
                              </tr>
                           </tbody>
                        </table>
                     </div>
                  </div>
                  <div
                     class="tab-pane fade"
                     id="tab2"
                     role="tabpanel"
                     aria-labelledby="tab2-tab"
                     >
                     <iframe width="100%" height="350" src="https://www.youtube.com/embed/wZ6FcocpYO8" title="Germany joins fight against Chinese chips" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  </div>
               </div>
            </div>


         </div>
      </div>
    </div>
    <script>
       $(function() {
  $("#sidebar").resizable({
    handles: "e",
    minWidth: 200,
    maxWidth: 800,
    resize: function(event, ui) {
      // adjust the width of the tab-content div when the sidebar is resized
      $(".tab-content").width($(".offcanvas-body").width() - 40);
    }
  });
});

   </script>
   `;

var extension = document.createElement("Leetcode-Extension");
var shadow = extension.attachShadow({ mode: "open" });
shadow.innerHTML = html_data;

// add jquery, jquery-ui, bootstrap css and js

var jquery = document.createElement("script");
jquery.src = chrome.runtime.getURL("jquery-3.6.0.min.js");
shadow.appendChild(jquery);


// jqueryui css
var jqueryuicss = document.createElement("link");
jqueryuicss.rel = "stylesheet";
jqueryuicss.href = chrome.runtime.getURL("jquery-ui.css");
shadow.appendChild(jqueryuicss);
// jqueryui min js 

var jqueryuimin = document.createElement("script");
jqueryuimin.src = chrome.runtime.getURL("jquery-ui.min.js");
shadow.appendChild(jqueryuimin);


var bootstrap = document.createElement("link");
bootstrap.rel = "stylesheet";
bootstrap.href = chrome.runtime.getURL("bootstrap.min.css");
shadow.appendChild(bootstrap);

var bootstrapjs = document.createElement("script");
bootstrapjs.src = chrome.runtime.getURL("bootstrap.bundle.min.js");
shadow.appendChild(bootstrapjs);



document.body.insertAdjacentElement('afterend', sidebarContainer);


