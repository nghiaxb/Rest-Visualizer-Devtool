// content.ts - Inject script để bắt fetch/XHR (placeholder)
;(function () {
    // TODO: Inject script vào trang để hook fetch/XHR
    // Gửi message về background/devtools khi có request
    window.addEventListener('message', (event) => {
        if (event.data && event.data.type === 'REST_API_CAPTURE') {
            chrome.runtime.sendMessage({
                type: 'API_CAPTURED',
                data: event.data.payload,
            })
        }
    })
})()
