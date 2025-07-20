import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import vuePrettierConfig from '@vue/eslint-config-prettier'

export default [
    {
        name: 'app/files-to-lint',
        files: ['**/*.{ts,mts,tsx,vue}'],
    },

    {
        name: 'app/files-to-ignore',
        ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
    },

    ...pluginVue.configs['flat/essential'],
    ...vueTsEslintConfig(),
    skipFormatting,
    vuePrettierConfig, // Extend prettier config  {.prettierrc.json}

    {
        /** @see: https://eslint.vuejs.org/rules/ */
        rules: {
            'vue/multi-word-component-names': 'off',
            'vue/attributes-order': [
                'error',
                {
                    order: [
                        'DEFINITION', // is, v-is
                        'LIST_RENDERING', // v-for
                        'CONDITIONALS', // v-if, v-else-if, v-else, v-show, v-cloak
                        'RENDER_MODIFIERS', // v-once, v-pre
                        'GLOBAL', // id
                        'UNIQUE', // ref, key
                        'TWO_WAY_BINDING', // v-model
                        'OTHER_DIRECTIVES', // v-custom-directive
                        'OTHER_ATTR', // custom attributes
                        'EVENTS', // @click, v-on
                        'CONTENT', // v-html, v-text
                    ],
                    alphabetical: true,
                },
            ],

            'vue/html-self-closing': [
                'error',
                {
                    html: {
                        void: 'always',
                        normal: 'always',
                        component: 'always',
                    },
                    svg: 'always',
                    math: 'always',
                },
            ],

            'vue/component-name-in-template-casing': [
                'error',
                'PascalCase',
                {
                    registeredComponentsOnly: false,
                    ignores: ['/^img-/', 'fa', 'big'],
                },
            ],

            'vue/attribute-hyphenation': ['error', 'never'],
        },
    },
]
