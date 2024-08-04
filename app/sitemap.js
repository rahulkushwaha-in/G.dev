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


function dateAndTime(isoDateString){
    const date = new Date(isoDateString);
    const formattedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

      return formattedDate;
}


