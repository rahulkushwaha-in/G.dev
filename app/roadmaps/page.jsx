import React from 'react';
import Iframe from '@/components/Iframe';


export const metadata = {
  title:'Tech Roadmaps',
  description: "Unlock your full potential with GeeksforGeeks.Dev's detailed tech roadmaps. From beginners to seasoned professionals, find personalized paths in software development, data science, cybersecurity, and more. Start your journey to mastery today!",
  keywords: [
    "technology career roadmap", "developer learning paths", "beginner to expert roadmap", "programming career guide",
    "full stack development path", "data science learning roadmap", "cybersecurity career roadmap", "software developer roadmap",
    "coding paths for professionals", "tech stack guides", "technology education roadmap"
  ],
  og: {
    title: 'Explore Tech Roadmaps - GeeksforGeeks.Dev',
    description: 'Find the perfect roadmap for your technology learning journey, from beginner guides to expert strategies.',
    image: 'https://geeksforgeeks.dev/roadmap-og-image.jpg',
  },
  twitter: {
    title: 'Explore Tech Roadmaps - GeeksforGeeks.Dev',
    description: 'Discover detailed roadmaps for every tech stack, guiding you at every step of your learning path.',
    image: 'https://geeksforgeeks.dev/roadmap-twitter-image.jpg',
  }
}

const Tools = () => {
  return (
    <div>
      <iframe src="https://roadmap.sh/r/embed?id=661ec0c3339f6036540fc79e" width="100%" height="1600px" frameBorder="0"></iframe>
      {/* <Iframe src="https://roadmap.sh/r/embed?id=661ec0c3339f6036540fc79e" title="My Iframe" /> */}
    </div>
  )
}

export default Tools;