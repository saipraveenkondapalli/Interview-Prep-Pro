const problemName = window.location.pathname.split("/")[2];
const xpath = "/html/body/div[2]/div/div/div/div/div/div[1]/div/div/div/div[2]/div/div/div[3]/div";
let problemDescription = '';
let currentURL = window.location.href;


checkLeetcodeVersion = function (){
    const app = document.getElementById("app")
        if (app){
            banner = document.getElementById("bannerText");
            banner.innerText ="Leetcode Extension only works in the New Version, look for'NEW' option at the bottom right corner of the page";
            bannerImg = document.getElementById("extensionImg");
            bannerImg.style.display = "none";
        }
        else{
            start(3500);
        }

}


saveToLocalStorage = function(element, problemName) {
    // store date and time and time as in 2022
    const timeNow = new Date().getTime();
    data = `${element.innerHTML}`;
    let problem = {html: data, time: timeNow};
    localStorage.setItem(problemName, JSON.stringify(problem));
}


checkLocalStorage = function (problemName) {
    const oneMonth = 30 * 24 * 60 * 60 * 1000;
    // check if the problemName is present in the localStorage and if it is present then check if the time is less than 30 days
    let problem = localStorage.getItem(problemName);
    problem = JSON.parse(problem);

    if (problem) {
        const diff = new Date().getTime() - problem.time;
        if (diff > oneMonth) {
            console.log("Data is present in the local storage but it is more than 30 days old");
             worker(problemDescription, problemName);

            }
        else {
            console.log("Data is present in the local storage");
            let para = document.createElement("p");
            
            para.innerHTML = problem.html;
            problemDescription = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            problemDescription.innerHTML = para.innerHTML + problemDescription.innerHTML;
            //console.log(problemDescription.innerHTML);
        }

    }
    else{
        console.log("Data is not present in the local storage");
        worker(problemDescription, problemName);
    }
  banner = document.getElementById("bannerText");
  banner.innerText = "Data Loaded Successfully";
  bannerImg = document.getElementById("extensionImg");
  bannerImg.style.display = "none";
  svg = document.getElementById("extSvg");
    svg.style.display = "inline-block";
}


showBanner = function() {

    // Create the banner element
    const banner = document.createElement("div");
    banner.setAttribute("id", "banner");
    banner.style.backgroundColor = "#337ab7";
    banner.style.color = "white";
    banner.style.padding = "10px";
    banner.style.textAlign = "center";
    banner.style.fontWeight = "bold";
    banner.style.height = "40px";
    banner.innerHTML = `<span id="bannerText" style="margin-right:5px ">Loading Data</span>
             <div class="loading-ext" style="display: inline-block">
              <div class="spinner center" id = "extensionImg">
                <div class="spinner-blade"></div>
                <div class="spinner-blade"></div>
                <div class="spinner-blade"></div>
                <div class="spinner-blade"></div>
                <div class="spinner-blade"></div>
                <div class="spinner-blade"></div>
                <div class="spinner-blade"></div>
                <div class="spinner-blade"></div>
                <div class="spinner-blade"></div>
                <div class="spinner-blade"></div>
                <div class="spinner-blade"></div>
                <div class="spinner-blade"></div>
              </div>
            </div>
 <style>

.spinner {
  font-size: 20px;
  position: relative;
   width: 1em;
  height: 1em; 
}


.spinner .spinner-blade {
  position: absolute;
  left: 0.4629em;
  bottom: 0;
  width: 0.074em;
  height: 0.2777em; 
  /*border-radius: 0.0555em; */
  background-color: transparent;
  transform-origin: center -0.2222em;
  animation: spinner-fade 1s infinite linear;
}

.spinner .spinner-blade:nth-child(1) {
  animation-delay: 0s;
  transform: rotate(0deg);
}

.spinner .spinner-blade:nth-child(2) {
  animation-delay: 0.083s;
  transform: rotate(30deg);
}

.spinner .spinner-blade:nth-child(3) {
  animation-delay: 0.166s;
  transform: rotate(60deg);
}

.spinner .spinner-blade:nth-child(4) {
  animation-delay: 0.249s;
  transform: rotate(90deg);
}

.spinner .spinner-blade:nth-child(5) {
  animation-delay: 0.332s;
  transform: rotate(120deg);
}

.spinner .spinner-blade:nth-child(6) {
  animation-delay: 0.415s;
  transform: rotate(150deg);
}

.spinner .spinner-blade:nth-child(7) {
  animation-delay: 0.498s;
  transform: rotate(180deg);
}

.spinner .spinner-blade:nth-child(8) {
  animation-delay: 0.581s;
  transform: rotate(210deg);
}

.spinner .spinner-blade:nth-child(9) {
  animation-delay: 0.664s;
  transform: rotate(240deg);
}

.spinner .spinner-blade:nth-child(10) {
  animation-delay: 0.747s;
  transform: rotate(270deg);
}

.spinner .spinner-blade:nth-child(11) {
  animation-delay: 0.83s;
  transform: rotate(300deg);
}

.spinner .spinner-blade:nth-child(12) {
  animation-delay: 0.913s;
  transform: rotate(330deg);
}

@keyframes spinner-fade {
  0% {
    background-color: #ffffff;
  }
  100% {
    background-color: transparent;
  }
}

</style>
        <div style="display: inline-block">
        <svg onclick="hello()" id = "extSvg" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" style="display:none; cursor: pointer; font-size: 26px;">
            <path d="M13.1459 11.0499L12.9716 9.05752L15.3462 8.84977C14.4471 7.98322 13.2242 7.4503 11.8769 7.4503C9.11547 7.4503 6.87689 9.68888 6.87689 12.4503C6.87689 15.2117 9.11547 17.4503 11.8769 17.4503C13.6977 17.4503 15.2911 16.4771 16.1654 15.0224L18.1682 15.5231C17.0301 17.8487 14.6405 19.4503 11.8769 19.4503C8.0109 19.4503 4.87689 16.3163 4.87689 12.4503C4.87689 8.58431 8.0109 5.4503 11.8769 5.4503C13.8233 5.4503 15.5842 6.24474 16.853 7.52706L16.6078 4.72412L18.6002 4.5498L19.1231 10.527L13.1459 11.0499Z" fill="currentColor"></path>
        </svg>
        </div>
</span>`;

    // get body element and Insert the banner before the navigation bar
    const body = document.body
    body.insertBefore(banner, body.firstChild);
}


worker = function(problemDescription, problemName) {
    fetch(`https://www.leetcodeproblems.tech/api/problems/${problemName}`)
            .then(response => response.text())
            .then(data => {
                // convert the response to json
                data = JSON.parse(data);
                videos = data['videos'];
                console.log(data);

                // using classes from the Leetcode website to display the data
                const spanSuccess = 'bg-olive dark:bg-dark-olive text-olive dark:text-dark-olive inline-block rounded-[21px] bg-opacity-[.15] px-2.5 py-1 text-xs font-medium capitalize dark:bg-opacity-[.15]';
                const spanDanger = 'bg-pink dark:bg-dark-pink text-pink dark:text-dark-pink inline-block rounded-[21px] bg-opacity-[.15] px-2.5 py-1 text-xs font-medium capitalize dark:bg-opacity-[.15]\"';
                const spanInfo = 'bg-yellow dark:bg-dark-yellow text-yellow dark:text-dark-yellow inline-block rounded-[21px] bg-opacity-[.15] px-2.5 py-1 text-xs font-medium capitalize dark:bg-opacity-[.15]';

                // get message from json data and if message equals to "Problems found"
                const message = data["message"];
                const span = document.createElement("span");
                span.id = "data-span";
                let para;
                if (message === "Problem found") {
                    para = document.createElement("p");

                    para.innerHTML = `<span name="companies" class="${spanInfo}" style="margin: 5px;">Company Name : Frequency : % appearance in a company</span><br>`;
                    // use for loop on data['problem']['company']
                    for (let i = 0; i < data['problem']['company'].length; i++) {

                        const name = data['problem']['company'][i]['name'];
                        const frequency = data['problem']['company'][i]['freq'];
                        let percentage = data['problem']['company'][i]['percentage']

                        if (percentage) {
                            percentage = percentage.toString().split(".");
                            if (percentage.length > 1) {
                                percentage = percentage[0] + "%";
                            } else {
                                // check up to the last character in percentage[0]
                                if (percentage[0][percentage[0].length - 1] === ";") {
                                    percentage = percentage[0].slice(0, -1);
                                }
                            }
                            // if percentage == 0%
                            if (percentage === "0%") {
                                percentage = undefined;
                            }
                        }

                        // if both frequency and percentage are present
                        if (frequency && percentage) {
                            para.innerHTML += `<a href="https://www.leetcodeproblems.tech/company/${name}" target="_blank"><span  name="companies"  class = "${spanSuccess}" style="margin: 3px">${name} (${frequency}) (${percentage})</span></a>`;
                        }
                        // if only frequency is present
                        else if (frequency) {
                            para.innerHTML += `<a href="https://www.leetcodeproblems.tech/company/${name}" target="_blank"><span name="companies"  class = "${spanSuccess}" style="margin: 3px">${name} (${frequency})</span></a>`;
                        }
                        // if only percentage is present
                        else if (percentage) {
                            para.innerHTML += `<a href="https://www.leetcodeproblems.tech/company/${name}" target="_blank"><span  name="companies" class = "${spanSuccess}" style="margin: 3px">${name} (${percentage})</span></a>`;
                        }
                        // if none of them are present
                        else {
                            para.innerHTML += `<a href="https://www.leetcodeproblems.tech/company/${name}" target="_blank"><span  name="companies" class = "${spanSuccess}" style="margin: 3px">${name}</span></a>`;
                        }
                    }

                    para.innerHTML = `<span id="data-ext"> ${para.innerHTML}</span>`
                    problemDescription.innerHTML = para.innerHTML + problemDescription.innerHTML;
                    saveToLocalStorage(para, problemName);


                } else {
                    para = document.createElement("p");
                    para.innerHTML = `<span id="data-ext"> ${para.innerHTML}</span>`
                    //para.innerHTML += `<span name="companies"  class="${spanDanger}">No company found</span>`;
                    problemDescription.innerHTML = para.innerHTML + problemDescription.innerHTML;
                    saveToLocalStorage(para, problemName);
                }
                console.log(videos.toString())
            });

    }


start = function(time) {
    setTimeout(function () {
        problemDescription = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        checkLocalStorage(problemName);
    }, time);
}


hello = function() {
    bannerText = document.getElementById("bannerText");
    bannerText.innerHTML = "Reloading data";
    svg = document.getElementById("extSvg");
    bannerImg = document.getElementById("extensionImg");
    svg.style.display = "none";
    bannerImg.style.display = "inline-block";
    //get element with id = data-ext and remove it from the page
    const data = document.getElementById("data-ext");
    if (data) {
        data.remove();
    }
    start(2000);
}


setInterval(() => {
  if (currentURL !== window.location.href) {
    if (window.location.href.split("/")[5] === "description") {
      checkLocalStorage(problemName);
  }
    currentURL = window.location.href;
}}, 1000);


// First Banner is loaded into the Page and then Leetcode Version is Checked,
// if the version is not supported then  aks the user to move to new Version of leetcode

showBanner();
checkLeetcodeVersion();
