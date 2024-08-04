"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getIndividualArticleData } from "@/lib/utils";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";
import CodeBlock from "@/components/CodeBlock";
import Image from "next/image";
import SidebarLeft from "@/components/sidebar";
import Loader from "@/components/Loader/Loader";
import Head from "next/head";

 const metadata = {
  title: 'About Us',
  openGraph: {
    title: 'Blog',
  },
}

const Page = () => {
  const { slug, category } = useParams();
  const [articleData, setArticleData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const data = await getIndividualArticleData(slug);
        setArticleData(data);
        setError(null);
      } catch (err) {
        setError("An error occurred while fetching the article");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    if (slug) {
      fetchArticle();
    }
  }, [slug]);


  

  if (isLoading) return <Loader />;
  if (error) return <div>Error: {error}</div>;
  if (!articleData) return <Loader />;

  return (
    <>
      <div className="grid grid-cols-12">
        <div className="sticky top-0 hidden sm:block sm:col-span-2 h-screen overflow-y-scroll">
          <SidebarLeft category={category} />
        </div>
        <div className="p-8 mx-auto w-full col-span-12 sm:col-span-8">
          <div className="max-w-full prose prose-blue prose-lg prose-li:marker:text-blue-500 prose-img:rounded prose-img:m-auto prose-img:object-cover prose-text-wrap dark:prose-invert">
            <h1>{articleData.title}</h1>
            <PortableText
              value={articleData.Content}
              components={{
                block: {
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-blue-500">
                      {children}
                    </blockquote>
                  ),
                },
                types: {
                  code: ({ value }) => (
                    <CodeBlock
                      language={value.language}
                      code={value.code}
                      filename={value.filename}
                    />
                  ),
                  image: ({ value }) => (
                    <Image
                      src={urlForImage(value)}
                      width={700}
                      height={700}
                      alt={value.alt || "Article image"}
                    />
                  ),
                },
                marks: {
                  link: ({ children, value }) => (
                    <Link
                      href={value.href}
                      rel={
                        !value.href.startsWith("/")
                          ? "noreferrer noopener"
                          : undefined
                      }
                    >
                      {children}
                    </Link>
                  ),
                },
              }}
            />
          </div>
        </div>
        <div className="h-full hidden sm:block col-span-2"></div>
      </div>
    </>
  );
};

export default Page;

// import React from "react";
// import { useServerParams } from 'next/navigation';
// import { getIndividualArticleData } from "@/lib/utils";
// import { PortableText } from "@portabletext/react";
// import { urlForImage } from "@/sanity/lib/image";
// import Link from "next/link";
// import CodeBlock from "@/components/CodeBlock";
// import Image from "next/image";
// import SidebarLeft from "@/components/sidebar";
// import Loader from "@/components/Loader/Loader";

// export default async function Page() {
//   const { slug, category } = useServerParams();
  
//   if (!slug) {
//     return <Loader />;
//   }

//   let articleData = null;
//   try {
//     articleData = await getIndividualArticleData(slug);
//   } catch (err) {
//     console.error(err);
//     return <div>Error: An error occurred while fetching the article</div>;
//   }

//   if (!articleData) {
//     return <Loader />;
//   }

//   return (
//     <div className="grid grid-cols-12">
//       <div className="sticky top-0 hidden sm:block sm:col-span-2 h-screen overflow-y-scroll">
//         <SidebarLeft category={category} />
//       </div>
//       <div className="p-8 mx-auto w-full col-span-12 sm:col-span-8">
//         <div className="max-w-full prose prose-blue prose-lg prose-li:marker:text-blue-500 prose-img:rounded prose-img:m-auto prose-img:object-cover prose-text-wrap dark:prose-invert">
//           <h1>{articleData.title}</h1>
//           <PortableText
//             value={articleData.Content}
//             components={{
//               block: {
//                 blockquote: ({ children }) => (
//                   <blockquote className="border-l-blue-500">
//                     {children}
//                   </blockquote>
//                 ),
//               },
//               types: {
//                 code: ({ value }) => (
//                   <CodeBlock
//                     language={value.language}
//                     code={value.code}
//                     filename={value.filename}
//                   />
//                 ),
//                 image: ({ value }) => (
//                   <Image
//                     src={urlForImage(value)}
//                     width={700}
//                     height={700}
//                     alt={value.alt || "Article image"}
//                   />
//                 ),
//               },
//               marks: {
//                 link: ({ children, value }) => (
//                   <Link
//                     href={value.href}
//                     rel={
//                       !value.href.startsWith("/")
//                         ? "noreferrer noopener"
//                         : undefined
//                     }
//                   >
//                     {children}
//                   </Link>
//                 ),
//               },
//             }}
//           />
//         </div>
//       </div>
//       <div className="h-full hidden sm:block col-span-2"></div>
//     </div>
//   );
// }
