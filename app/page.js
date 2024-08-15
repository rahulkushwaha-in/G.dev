import Image from "next/image";
// import component from "../components/component/components.jsx"
import Script from "next/script";
import Hero from "@/components/Home";
<link rel="icon" href="/favicon.ico" sizes="any" />

export default function Home() {
  return (
  <>
  {/* <!-- Google tag (gtag.js) --> */}
  <Script id="next"
                async
                src={`https://www.googletagmanager.com/gtag/js?id=G-T0D68EHC4S`}>
            </Script>
            <Script id="next">
                {
                    `window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-T0D68EHC4S');`
                }
            </Script>
   <main>
    <Hero/>
    </main>
  </>
  );
}
