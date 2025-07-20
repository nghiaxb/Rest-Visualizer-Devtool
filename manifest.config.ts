import { defineManifest } from '@crxjs/vite-plugin'

export default defineManifest({
    manifest_version: 3,
    name: 'REST Visualizer',
    description: 'Xem, thử lại, chỉnh sửa và export các API request ngay trên trang web đang mở.',
    version: '0.1.0',
    icons: {
        '16': 'icons/16.png',
        '48': 'icons/48.png',
        '128': 'icons/128.png',
    },
    permissions: ['scripting', 'storage', 'activeTab'],
    host_permissions: ['<all_urls>'],
    background: {
        service_worker: 'src/background/background.ts',
        type: 'module',
    },
    devtools_page: 'src/devtools/panel.html',
    content_scripts: [
        {
            matches: ['<all_urls>'],
            js: ['src/content/content.ts'],
            run_at: 'document_start',
        },
    ],
    action: {
        default_popup: 'src/popup/index.html',
        default_icon: {
            '16': 'icons/16.png',
            '48': 'icons/48.png',
            '128': 'icons/128.png',
        },
    },
    options_page: 'src/options/index.html',
})
