
const problemName = window.location.pathname.split("/")[2];
const xpath = "/html/body/div[2]/div/div/div/div/div/div[1]/div/div/div/div[2]/div/div/div[3]/div";
let youtubeXpath = '/html/body/div[2]/div/div/div/div/div/div[1]/div/div/div/div[2]/div/div/div[8]/div/div[2]';
const signInXpath = '/html/body/div[2]/div/div/div/nav/div/div/div[3]/div/a[2]'
let relatedtopicsXpath = '/html/body/div[2]/div/div/div/div/div/div[1]/div/div/div/div[2]/div/div/div[8]/div/div[1]/div[1]';
let companyXpath = '/html/body/div[2]/div/div/div/div/div/div[1]/div/div/div/div[2]/div/div/div[2]/div/div';
const eye = `<svg class="svg-eye" style="display: inline-block" width="20px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" ><path fill-rule="evenodd" clip-rule="evenodd" d="M1 10c0-3.9 3.1-7 7-7s7 3.1 7 7h-1c0-3.3-2.7-6-6-6s-6 2.7-6 6H1zm4 0c0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3-3-1.3-3-3zm1 0c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2z"/></svg>`;
let problemDescription = '';
let currentURL = window.location.href, svg, bannerImg;


spanClasses = {
    spanSucces : 'bg-olive dark:bg-dark-olive text-olive dark:text-dark-olive inline-block rounded-[21px] bg-opacity-[.15] px-2.5 py-1 text-xs font-medium capitalize dark:bg-opacity-[.15]',
    spanDanger : 'bg-pink dark:bg-dark-pink text-pink dark:text-dark-pink inline-block rounded-[21px] bg-opacity-[.15] px-2.5 py-1 text-xs font-medium capitalize dark:bg-opacity-[.15]\"',
    spanInfo : `hidden lg:block bg-fill-3 dark:bg-dark-fill-3 hover:bg-fill-2 dark:hover:bg-dark-fill-2 mr-3 cursor-pointer rounded py-1.5 px-3 transition-colors`,
}

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


saveToLocalStorage = function(element, problemName, videos) {
    // store date and time and time as in 2022
    const timeNow = new Date().getTime();
    data = `${element.innerHTML}`;
    let problem = {html: data, time: timeNow, videos: videos};
    localStorage.setItem(problemName, JSON.stringify(problem));
}


checkLocalStorage = function (problemName) {
    checkSignIn();

    const oneMonth = 30 * 24 * 60 * 60 * 1000;
    // check if the problemName is present in the localStorage and if it is present then check if the time is less than 30 days
    let problem = localStorage.getItem(problemName), banner;
    problem = JSON.parse(problem);
    if (problem) {
        const diff = new Date().getTime() - problem.time;
        if (diff > oneMonth) {
            console.log("Data is present in the local storage but it is more than 30 days old");
             worker(problemDescription, problemName);

            }
        else {
            console.log("Data is present in the local storage");
            displayYTVideos(problem.videos)
            let para = document.createElement("p");
            para.innerHTML = problem.html;
            problemDescription = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            problemDescription.innerHTML = para.innerHTML + problemDescription.innerHTML;
            buymeCofee();
            //console.log(problemDescription.innerHTML);
        }

    }
    else{
        console.log("Data is not present in the local storage");
        worker(problemDescription, problemName);
    }
  hideSpinner("Data loaded successfully");
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


worker = async function(problemDescription, problemName) {
    fetch(`https://leetcode-delta.vercel.app/api/problems/${problemName}`)
            .then(response => response.text())
            .then(data => {
                // convert the response to json
                data = JSON.parse(data);

                // using classes from the Leetcode website to display the data
                const spanSuccess = 'bg-olive dark:bg-dark-olive text-olive dark:text-dark-olive inline-block rounded-[21px] bg-opacity-[.15] px-2.5 py-1 text-xs font-medium capitalize dark:bg-opacity-[.15]';
                const spanDanger = 'bg-pink dark:bg-dark-pink text-pink dark:text-dark-pink inline-block rounded-[21px] bg-opacity-[.15] px-2.5 py-1 text-xs font-medium capitalize dark:bg-opacity-[.15]\"';
                const spanInfo = 'hidden lg:block bg-fill-3 dark:bg-dark-fill-3 hover:bg-fill-2 dark:hover:bg-dark-fill-2 mr-3 cursor-pointer rounded py-1.5 px-3 transition-colors';

                // get message from json data and if message equals to "Problems found"
                const message = data["message"];
                const span = document.createElement("span");
                span.id = "data-span";
                let para;
                if (message === "Problem found") {
                    para = document.createElement("p");
                    para.innerHTML = `<span name="companies" class="${spanInfo}" style="margin: 5px; width: auto; display: inline-block">Company Name : Frequency : % appearance in a company</span><span class="${spanInfo} text-brand-orange" onclick ="takeToSolutions()" style="width: auto; display: inline-block">Youtube Solutions 👇 </span><hr>`;

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
                            para.innerHTML += `<a href="https://leetcode-delta.vercel.app/company/${name}" target="_blank"><span  name="companies"  class = "${spanSuccess}" style="margin: 3px">${name} (${frequency}) (${percentage})</span></a>`;
                        }
                        // if only frequency is present
                        else if (frequency) {
                            para.innerHTML += `<a href="https://leetcode-delta.vercel.app/company/${name}" target="_blank"><span name="companies"  class = "${spanSuccess}" style="margin: 3px">${name} (${frequency})</span></a>`;
                        }
                        // if only percentage is present
                        else if (percentage) {
                            para.innerHTML += `<a href="https://leetcode-delta.vercel.app/company/${name}" target="_blank"><span  name="companies" class = "${spanSuccess}" style="margin: 3px">${name} (${percentage})</span></a>`;
                        }
                        // if none of them are present
                        else {
                            para.innerHTML += `<a href="https://leetcode-delta.vercel.app/company/${name}" target="_blank"><span  name="companies" class = "${spanSuccess}" style="margin: 3px">${name}</span></a>`;
                        }
                    }

                    para.innerHTML = `<span id="data-ext"> ${para.innerHTML}</span>`
                    problemDescription.innerHTML = para.innerHTML + '<hr>'+ problemDescription.innerHTML;
                    saveToLocalStorage(para, problemName, data.videos);
                    displayYTVideos(data.videos);
                    buymeCofee();


                } else {
                    para = document.createElement("p");
                    para.innerHTML = `<span id="data-ext"> ${para.innerHTML}</span>`
                    //para.innerHTML += `<span name="companies"  class="${spanDanger}">No company found</span>`;
                    problemDescription.innerHTML = para.innerHTML + problemDescription.innerHTML;
                    saveToLocalStorage(para, problemName, data.videos);
                    displayYTVideos(data.videos);
                    buymeCofee();
                }
            });

    }


start = function(time) {
    setTimeout(function () {
        problemDescription = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        signin = document.evaluate(signInXpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

        checkLocalStorage(problemName);
    }, time);
}


hello = function() {
    hideSVG("Reloading data")
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



hideSVG = function(text) {
    svg = document.getElementById("extSvg");
    bannerImg = document.getElementById("extensionImg");
    svg.style.display = "none";
    bannerImg.style.display = "inline-block";
    bannerText = document.getElementById("bannerText");
    bannerText.innerHTML = text;
}


hideSpinner = function(text) {
    bannerImg = document.getElementById("extensionImg");
    bannerImg.style.display = "none";
    svg = document.getElementById("extSvg");
    svg.style.display = "inline-block";
    bannerText = document.getElementById("bannerText");
    bannerText.innerHTML = text;
}

displayYTVideos = function(videos) {
    let dark = true;
    let color = "#cbcec6";
    if(document.body.classList.contains("dark")){
        dark = false;
        color = "#ffffff"; // white color : #FFFFFF
    }

    relatedTopics = document.evaluate(relatedtopicsXpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    relatedTopics.innerText = "Related Topics & Youtube Solutions";
    relatedTopics.style.color = "#FFC01E";
    relatedTopics.id = "relatedTopics";
    youtube = document.createElement("div");
    youtube.id = "youtube";
    youtube.innerHTML =`<br><span id="youtube-span" style="text-align: center">Youtube Videos</span><hr class = "class= "border-divider-3 dark:border-dark-divider-3 mx-5"><script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="saipraveen" data-description="Support me on Buy me a coffee!" data-message="" data-color="#5F7FFF" data-position="Right" data-x_margin="18" data-y_margin="18"></script><br>`;
    // limit the number of videos to 10 if videos length less than 10 then display all videos by reassigning the value of videos.length
    if (videos.length === 0) {
        // provide a direct extension link to youtube with the problem name with a button with text "Check on Youtube", change problem name, replace - with space
        newProblemName = problemName.replace(/-/g, " ") + " leetcode";
        youtube.innerHTML += `<a href="https://www.youtube.com/results?search_query=${newProblemName}" target="_blank"><button class="btn btn-primary hidden lg:block bg-fill-3 dark:bg-dark-fill-3 hover:bg-fill-2 dark:hover:bg-dark-fill-2 mr-3 cursor-pointer rounded py-1.5 px-3 transition-colors" style="margin: 5px">Check on Youtube</button></a>`;
    }

    if (videos.length > 10) {
        videos.length = 10; // limit the number of videos to 10
    }


    for (let i = 0; i < videos.length; i++) {
        // youtube Embedded code
        youtube.innerHTML += `<iframe width="100%" height="380" src="https://www.youtube.com/embed/${videos[i].video_id}" title="${videos.video_title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        // under the video display Views, Channel Name and Published Date
        youtube.innerHTML += `<span style="font-size: 12px; color: ${color}; margin: 5px;">${eye} ${videos[i].view_count} - ${videos[i].channel} - ${videos[i].date}</span><br><br>`;
    }

    divElement = document.evaluate(youtubeXpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    divElement.innerHTML =  divElement.innerHTML+ youtube.innerHTML + `<style> .svg-ext{fill: ${color};}</style>`;

}

takeToSolutions = function() {
    const solutions =  document.getElementById("relatedTopics")
    solutions.scrollIntoView({behavior: "smooth", block: "start",inline:"center"});
}


buymeCofee = function() {
    button = `<a href="https://www.buymeacoffee.com/saipraveen" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 40px !important;width: 150px;!important;" ></a>`;
    company = document.evaluate(companyXpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    company.innerHTML = button;

}

checkSignIn = function() {
    signin = document.evaluate(signInXpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (signin){
        youtubeXpath = `/html/body/div[2]/div/div/div/div/div/div[1]/div/div/div/div[2]/div/div/div[7]/div/div[2]`;
        relatedtopicsXpath = `/html/body/div[2]/div/div/div/div/div/div[1]/div/div/div/div[2]/div/div/div[7]/div/div[1]/div[1]`;
    }
}
// First Banner is loaded into the Page and then Leetcode Version is Checked,
// if the version is not supported then  aks the user to move to new Version of leetcode

showBanner();
checkLeetcodeVersion();