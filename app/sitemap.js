import {fetchSlugs} from '@/lib/utils'

export default async function sitemap() {
    const allSlugs = await fetchSlugs();
    return [
        ...allSlugs.map(data => ({
            url: `https://www.geeksforgeeks.dev/learn/${data.category}/${data.slug}`,
            lastmod: dateAndTime(data.updated_Date),
            changefreq: 'daily',
            priority: 1,
            links: [
                { rel: 'alternate', hreflang: 'en', href: `https://www.geeksforgeeks.dev/learn/${data.category}/${data.slug}` },
                { rel: 'alternate', hreflang: 'es', href: `https://es.geeksforgeeks.dev/learn/${data.category}/${data.slug}` }
            ]
        }))
    ]
}


function dateAndTime(isoDateString){
    const date = new Date(isoDateString);
    const formattedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

      return formattedDate;
}


