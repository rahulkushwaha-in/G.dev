import {fetchSlugs} from '@/lib/utils'

export const revalidate = 3600;

export default async function sitemap() {
    const allSlugs = await fetchSlugs();
    const staticPages = [
        { url: 'https://www.geeksforgeeks.dev/', lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
        { url: 'https://www.geeksforgeeks.dev/about', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
        { url: 'https://www.geeksforgeeks.dev/contact', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
        { url: 'https://www.geeksforgeeks.dev/learn', lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
        { url: 'https://www.geeksforgeeks.dev/roadmaps', lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
        { url: 'https://www.geeksforgeeks.dev/tools', lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
        { url: 'https://www.geeksforgeeks.dev/blogs', lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
        // Add other static pages here
      ];
    return [
        ...staticPages,
        ...allSlugs.map(data => ({
            url: `https://www.geeksforgeeks.dev/learn/${data.category}/${data.slug}`,
            lastModified: dateAndTime(data.updated_Date),
            changeFrequency: 'daily',
            priority: 1,
        }))
    ]
}


function dateAndTime(isoDateString) {
    const date = new Date(isoDateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate;
}


