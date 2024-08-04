import React from 'react'


export const metadata = {
    title:'Online Tools',
      description: 'Boost your productivity with GeeksforGeeks.Dev\'s arsenal of online tools. Featuring everything from code formatters and image editors to complex converters. Simplify your development process with our reliable, user-friendly tools tailored for tech professionals.',
      keywords: [
        "online tools", "web development tools", "HTML formatter", "CSS beautifier", "JavaScript tools", 
        "image editing tools", "free online converters", "developer utilities", "code formatter", "tech tools online", 
        "software tools", "productivity tools for developers"
      ],
      og: {
        title: 'Powerful Online Tools - GeeksforGeeks.Dev',
        description: 'Utilize our comprehensive set of online tools for developers, ranging from HTML/CSS/JS formatters to advanced image editing tools.',
        image: 'https://geeksforgeeks.dev/tools-og-image.jpg',
      },
      twitter: {
        title: 'Discover Online Tools - GeeksforGeeks.Dev',
        description: 'Explore our array of online tools designed to streamline and enhance your development projects.',
        image: 'https://geeksforgeeks.dev/tools-twitter-image.jpg',
      }
}
function Tools() {
  return (
    <div>Tools Page</div>
  )
}

export default Tools;