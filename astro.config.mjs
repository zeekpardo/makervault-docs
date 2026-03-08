// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://makervaultapp.com',
  integrations: [
    starlight({
      title: 'MakerVault Docs',
      logo: {
        light: './src/assets/logo-light.svg',
        dark: './src/assets/logo-dark.svg',
        replacesTitle: true,
      },
      customCss: ['./src/styles/global.css'],
      social: [],
      sidebar: [
        {
          label: 'Getting Started',
          autogenerate: { directory: 'docs/getting-started' },
        },
        {
          label: 'File Management',
          autogenerate: { directory: 'docs/file-management' },
        },
        {
          label: 'Tagging',
          autogenerate: { directory: 'docs/tagging' },
        },
        {
          label: 'Search & Filtering',
          autogenerate: { directory: 'docs/search-filtering' },
        },
        {
          label: 'Preview',
          autogenerate: { directory: 'docs/preview' },
        },
        {
          label: 'LightBurn',
          autogenerate: { directory: 'docs/lightburn' },
        },
        {
          label: 'File Actions',
          autogenerate: { directory: 'docs/file-actions' },
        },
        {
          label: 'Sources',
          autogenerate: { directory: 'docs/sources' },
        },
        {
          label: 'Data Management',
          autogenerate: { directory: 'docs/data-management' },
        },
      ],
      // Disable Starlight for marketing pages
      disable404Route: true,
    }),
    react(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
