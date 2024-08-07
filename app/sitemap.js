import {fetchSlugs} from '@/lib/utils'

export default async function sitemap() {
    const allSlugs = await fetchSlugs();
    console.log(allSlugs, allSlugs.length)
    return [
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


