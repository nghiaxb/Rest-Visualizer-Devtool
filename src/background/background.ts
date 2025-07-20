// background.ts - Chrome Extension Service Worker
chrome.runtime.onMessage.addListener(
    /**
     * @param {any} message
     * @param {chrome.runtime.MessageSender} sender
     * @param {(response?: any) => void} sendResponse
     */
    (message, sender, sendResponse) => {
        // Placeholder: handle messages from devtools/content/popup
        if (message.type === 'LOG') {
            console.log('[REST Visualizer]', message.data)
        }
        // TODO: handle request caching, replay, export, etc.
        sendResponse({ status: 'ok' })

        console.log(sender)
    },
)

// Placeholder: IndexedDB setup for caching requests
// TODO: Implement IndexedDB logic
