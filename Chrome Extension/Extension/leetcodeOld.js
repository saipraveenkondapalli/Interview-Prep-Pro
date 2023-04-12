let currentURL = window.location.href
const problemURL = window.location.href

const problemName = window.location.pathname.split("/")[2];
let descriptionXpath = `/html/body/div[1]/div/div[2]/div[1]/div/div[1]/div/div[1]/div[1]/div/div[2]/div/div[2]`;
const eye = `<svg class="svg-eye" style="display: inline-block" width="20px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" ><path fill-rule="evenodd" clip-rule="evenodd" d="M1 10c0-3.9 3.1-7 7-7s7 3.1 7 7h-1c0-3.3-2.7-6-6-6s-6 2.7-6 6H1zm4 0c0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3-3-1.3-3-3zm1 0c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2z"/></svg>`;
classNames = {
    spanSucces : 'bg-olive dark:bg-dark-olive text-olive dark:text-dark-olive inline-block rounded-[21px] bg-opacity-[.15] px-2.5 py-1 text-xs font-medium capitalize dark:bg-opacity-[.15]',
    spanDanger : 'bg-pink dark:bg-dark-pink text-pink dark:text-dark-pink inline-block rounded-[21px] bg-opacity-[.15] px-2.5 py-1 text-xs font-medium capitalize dark:bg-opacity-[.15]\"',
    spanInfo : 'css-1km43m6-BtnContent e5i1odf0',
}


saveToLocalStorage = function(html, problemName, videos) {
    // store date and time and time as in 2022
    const timeNow = new Date().getTime();
    data = html
    let problem = {html: data, time: timeNow, videos: videos};
    localStorage.setItem(problemName, JSON.stringify(problem));
}


checkLocalStorage = function(problemName) {
    // check if the problem is in the local storage
    const oneMonth = 30 * 24 * 60 * 60 * 1000;
    let problem = localStorage.getItem(problemName);

    if (problem === null) {
        console.log("Data not found in local storage");
        worker();
        return;
    }

    problem = JSON.parse(problem);

    const diff = new Date().getTime() - problem.time;
    console.log(diff)
    if (diff < oneMonth) {
        problemDescription = document.evaluate(descriptionXpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        problemDescription.innerHTML = problem.html + problemDescription.innerHTML;
        console.log("Data loaded from local storage");
        // wait for three seconds and then insert the videos
        setTimeout(insertYoutubeSolutions, 3000, problem.videos);
        return;

    } else {
        worker();
        console.log("Data is older than one month, loading from server");
        return;
    }
    {
    }
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

worker = async function() {
    fetch(`https://leetcode-delta.vercel.app/api/problems/${problemName}`)
    .then(response => response.json())
    .then(data => {
        problemDescription = document.querySelector('.content__u3I1.question-content__JfgR');
        //problemDescription.innerHTML = data.message + problemDescription.innerHTML;

        if (problemDescription === null) {
            waitForElement('.content__u3I1.question-content__JfgR');
            return;
        }


        let para;
        if (data.message === "Problem found"){
            const span = document.createElement('span');
            para = document.createElement("p");
            para.innerHTML = `<span name="companies" class="spanHeading" >Company Name : Frequency : % appearance in a company</span><span class="spanHeading text-orange"  onclick ="takeToSolutions()" > Youtube Solutions 👇 </span><hr>`;
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
                            para.innerHTML += `<a href="https://leetcode-delta.vercel.app/company/${name}" target="_blank"><span  name="companies"  class = "SpanCompany" >${name} (${frequency}) (${percentage})</span></a>`;
                        }
                        // if only frequency is present
                        else if (frequency) {
                            para.innerHTML += `<a href="https://leetcode-delta.vercel.app/company/${name}" target="_blank"><span name="companies"  class = "SpanCompany" >${name} (${frequency})</span></a>`;
                        }
                        // if only percentage is present
                        else if (percentage) {
                            para.innerHTML += `<a href="https://leetcode-delta.vercel.app/company/${name}" target="_blank"><span  name="companies" class = "SpanCompany" >${name} (${percentage})</span></a>`;
                        }
                        // if none of them are present
                        else {
                            para.innerHTML += `<a href="https://leetcode-delta.vercel.app/company/${name}" target="_blank"><span  name="companies" class = "SpanCompany" >${name}</span></a>`;
                        }
                    }

                    para.innerHTML = `<span id="data-ext"> ${para.innerHTML}</span>`
                    problemDescription.innerHTML = para.innerHTML + '<hr>'+ problemDescription.innerHTML;
                    saveToLocalStorage(problemDescription.innerHTML, problemName, data.videos)
                    // wait for 2 seconds
                    setTimeout(() => {
                        insertYoutubeSolutions(data.videos);
                    }, 2000);
        }
        else{
            para = document.createElement("p");
                    insertYoutubeSolutions(data.videos);
                    para.innerHTML = `<span id="data-ext"> ${para.innerHTML}</span>`
                    //para.innerHTML += `<span name="companies"  class="${spanDanger}">No company found</span>`;
                    problemDescription.innerHTML = para.innerHTML + problemDescription.innerHTML;
        }
    });
}


insertYoutubeSolutions = function(videos) {
    // wait for 2 seconds for the related topics to load
    relatedTopics = document.querySelector('.header__2RZv');
    relatedTopics.innerText = "Related Topics & Youtube Solutions";
    relatedTopics.style.color = "#EF6C00";
    xpath = '/html/body/div[1]/div/div[2]/div[1]/div/div[1]/div/div[1]/div[1]/div/div[2]/div/div[6]/div[2]'
    // get the second child of the parent element
    child = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

    youtube = document.createElement('div');

    youtube.innerHTML = `<br><span id="youtube">Youtube Solutions</span><hr>`;

    if (videos.length > 10){
        videos.length = 10;
    }
    for (let i = 0; i < videos.length; i++) {
        //embed youtube videos
youtube.innerHTML += `<iframe width="100%" height="380" src="https://www.youtube.com/embed/${videos[i]['video_id']}"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
youtube.innerHTML += `<span style="font-size: 12px; margin: 5px;">${eye} ${videos[i].view_count} - ${videos[i].channel} - ${videos[i].date}</span><br><br>;`
    }

    child.innerHTML = child.innerHTML + youtube.innerHTML;
//    console.log(child.html);
}

takeToSolutions = function() {
    const solutions =  document.getElementById("youtube")
    solutions.scrollIntoView({behavior: "smooth", block: "start",inline:"center"});
}

// wait for the element to be loaded
async function waitForElement(selector) {
  while (!document.querySelector(selector)) {
    await new Promise(r => setTimeout(r, 1000));
  }
  // wait for 2 seconds and call the checkLocalStorage function
    setTimeout(() => {
  checkLocalStorage(problemName);
}, 2000);
}


setInterval(() => {
  if (currentURL !== window.location.href) {
    if (window.location.href === problemURL) {
      checkLocalStorage(problemName);
  }
    currentURL = window.location.href;
}}, 1000);


waitForElement('.content__u3I1.question-content__JfgR');