const toggleSidebar = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(
      tabs[0].id,
      { action: 'toggleSidebar' },
      (response) => {}
    );
  });
};

document.getElementById('toggle-button').addEventListener('click', toggleSidebar);
