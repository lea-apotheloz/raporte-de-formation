// @ts-check
import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    site: 'https://lea-apotheloz.github.io/', // TODO: Change to your github url
    base: 'raporte-de-formation', // TODO: Change to your repo name
    integrations: [starlight({
        title: 'Progress  report',
        social: {
            github: 'https://github.com/lea-apotheloz/raporte-de-formation', // TODO: Change to your repo url
        },
        editLink: {
            baseUrl: 'https://github.com/lea-apotheloz/raporte-de-formation/edit/main/docs/', // TODO: before /edit, change to your repo url
        },
        customCss: [
            // Relative path to your custom CSS file
            './src/styles/theme.css',
        ],
        sidebar: [
            {
                label: 'Introduction',
                link: '/introduction',
            },
            {
                label: 'Projects',
                autogenerate: {directory: 'projects'}
            },
            {
                label: 'Technologies',
                autogenerate: {directory: 'technologies'},
            },

        ],
    })],
});
