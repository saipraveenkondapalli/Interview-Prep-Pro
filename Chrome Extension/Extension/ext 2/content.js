

// basic side bar html code

html_code = '<div id="mySidenav" class="sidenav">' +
    '<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>' +
    '<a href="#">About</a>' +
    '<a href="#">Services</a>' +
    '<a href="#">Clients</a>' +
    '<a href="#">Contact</a>' +
    '</div>' +
    '<span style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776; open</span>';

// add html code to the body of the page
document.body.innerHTML += html_code;

// add css code to the head of the page
var css = '.sidenav {' +
    'height: 100%;' +
    'width: 0;' +
    'position: fixed;' +
    'z-index: 1;' +
    'top: 0;' +
    'left: 0;' +
    'background-color: #111;' +
    'overflow-x: hidden;' +
    'transition: 0.5s;' +
    'padding-top: 60px;' +
    '}' +
    '.sidenav a {' +
    'padding: 8px 8px 8px 32px;' +
    'text-decoration: none;' +
    'font-size: 25px;' +
    'color: #818181;' +
    'display: block;' +
    'transition: 0.3s;' +
    '}' +
    '.sidenav a:hover {' +
    'color: #f1f1f1;' +
    '}' +
    '.sidenav .closebtn {' +
    'position: absolute;' +
    'top: 0;' +
    'right: 25px;' +
    'font-size: 36px;' +
    'margin-left: 50px;' +
    '}';

var style = document.createElement('style');
style.type = 'text/css';
style.appendChild(document.createTextNode(css));
document.body.appendChild(style);
