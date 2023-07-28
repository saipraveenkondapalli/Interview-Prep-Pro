function addScript(file) {
  script = document.createElement('script');
  script.src = chrome.runtime.getURL(file);
  document.body.appendChild(script);
}


addScript("script.js")




