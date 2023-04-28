import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
    target: 'static',
    modules: [
        [
            '@nuxtjs/google-fonts', {
                families: {
                    Poppins: [400, 700, 900]
                },
            }
        ]
    ],
    css: [
        '~/scss/index.scss',
        '@fortawesome/fontawesome-svg-core/styles.css'
    ],
    plugins: [
        '~/plugins/fontawesome.js'
    ]
}

export default config;