import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
  return rss({
    title: 'Astro!',
    description: 'Juiastro!',
    site: 'https://astro-juiastro.netlify.app/',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>ru-ru</language>`,
  });
}
