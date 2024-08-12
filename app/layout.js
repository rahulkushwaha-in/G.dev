import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ThemeProvider } from "@/components/theme-provider"
import NextTopLoader from "nextjs-toploader";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: '%s - GeeksforGeeks.Dev',
    default: 'GeeksforGeeks.Dev',
  },
  description:'At GeeksforGeeks.Dev, we cover everything tech. From detailed tutorials and the latest tech news to essential roadmaps and innovative tools, we provide the resources you need to navigate the tech landscape.',
  applicationName: 'GeeksforGeeks.dev',
  referrer: 'origin-when-cross-origin',
  keywords: [ "Next.js",
    "React",
    "JavaScript",
    "software development",
    "programming tutorials",
    "tech news",
    "developer tools",
    "coding basics",
    "advanced programming",
    "web development",
    "front-end development",
    "back-end development",
    "full stack development",
    "technology trends",
    "coding bootcamps",
    "machine learning",
    "data science",
    "AI trends",
    "software architecture",
    "tech industry updates", "tech tutorials",
    "latest tech news",
    "technology roadmaps",
    "tech industry updates",
    "coding tutorials",
    "software development guides",
    "programming languages",
    "tech tools review",
    "technology learning resources",
    "IT news",
    "technology trends",
    "beginner programming",
    "developer tools",
    "software engineering",
    "tech innovations",
    "web development tutorials",
    "mobile app development",
    "tech career roadmap",
    "coding for beginners",
    "tech tutorials for professionals"],
  authors: [{ name: 'Geeksforgeeks.Dev' }, { name: 'GeeksforGeeks.Dev', url: 'https://Geeksforgeeks.dev' }],
  creator: 'GeeksforGeeks.Dev',
  publisher: 'GeeksforGeeks.Dev',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  og: {
    url: 'https://geeksforgeeks.dev',
    type: 'website',
    title: 'GeeksforGeeks.Dev - Explore the Tech World',
    description: 'Discover in-depth articles on new tech trends, tutorials, and tools at GeeksforGeeks.Dev.',
    image: 'https://geeksforgeeks.dev/og-image.jpg',
    site_name: 'GeeksforGeeks.Dev'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@GeeksforGeeksDev',
    title: 'GeeksforGeeks.Dev - Explore the Tech World',
    description: 'Discover in-depth articles on new tech trends, tutorials, and tools at GeeksforGeeks.Dev.',
    image: 'https://geeksforgeeks.dev/twitter-image.jpg',
    creator: '@GeeksforGeeksDev'
  },
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader
        color="linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(7,231,13,1) 100%)"
        initialPosition={0.08}
        crawlSpeed={500}
        height={5}
        crawl={true}
        showSpinner={false}
        easing="ease-in-out"
        speed={500}
        shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        />
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Header></Header>
        
        <div className="min-h-[100dvh]">
        {children}
        </div>
        <SpeedInsights />
        <ScrollToTop/>
        <Footer/>
        </ThemeProvider>
        </body>
    </html>
  );
}



