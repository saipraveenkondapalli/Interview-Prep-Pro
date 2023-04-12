

function addScript(file) {
   script = document.createElement('script');
   script.src = chrome.runtime.getURL(file);
   document.body.appendChild(script);
}

function addCss(file) {
   css = document.createElement('link');
   css.rel = "stylesheet";
   css.href = chrome.runtime.getURL(file);
   document.body.appendChild(css);
}
checkLeetcodeVersion = function (){
    const app = document.getElementById("app")
        if (app){
            addScript("leetcodeOld.js")
            addCss("old.css")

        }
        else{
            addScript("leetcode.js")
        }

}



checkLeetcodeVersion();

