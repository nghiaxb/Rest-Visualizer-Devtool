// devtools.ts - Tạo panel DevTools cho REST Visualizer
chrome.devtools.panels.create(
    'REST Visualizer',
    'icons/48.png',
    'src/devtools/panel.html',
    function (panel: chrome.devtools.panels.ExtensionPanel) {
        // Panel created
        console.log(panel)
    },
)
