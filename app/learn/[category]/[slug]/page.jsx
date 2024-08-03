"use client"
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getIndividualArticleData, fetchSlugs } from "@/lib/utils";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "@/sanity/lib/image";
import Link from 'next/link';
import CodeBlock from "@/components/CodeBlock";
import Image from 'next/image';
import SidebarLeft from "@/components/sidebar";
import Loader from "@/components/Loader/Loader"

const Page = () => {
  const { slug, category } = useParams();
  const [articleData, setArticleData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchArticle = async () => {
      try {
        const data = await getIndividualArticleData(slug);
        setArticleData(data);
        setError(null);
      } catch (err) {
        setError('An error occurred while fetching the article');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    if (slug) {
      fetchArticle();
    }
  }, [slug]);

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;
  // if (!articleData) return <div>No article found.</div>;
  if (isLoading) return <Loader></Loader>;
  if (error) return <div>Error: {error}</div>;
  if (!articleData) return <Loader></Loader>;

  const myPortableTextComponents = {
    block: {
      blockquote: ({ children }) => (
        <blockquote className="border-l-blue-500">{children}</blockquote>
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
        <Image src={urlForImage(value)} width={700} height={700} alt={value.alt || 'Article image'} />
      ),
    },
    marks: {
      link: ({ children, value }) => {
        const rel = !value.href.startsWith("/")
          ? "noreferrer noopener"
          : undefined;
        return (
          <Link href={value.href} rel={rel}>
            {children}
          </Link>
        );
      },
    },
  };

  return (
    <div className="grid grid-cols-12">
      <div className="sticky top-0 hidden sm:block sm:col-span-2 h-screen overflow-y-scroll">
        <SidebarLeft category={category} />
      </div>
      <div className="p-8 mx-auto w-full col-span-12 sm:col-span-8">
        <div className="max-w-full prose prose-blue prose-lg prose-li:marker:text-blue-500 prose-img:rounded prose-img:m-auto prose-img:object-cover prose-text-wrap dark:prose-invert">
          <h1>{articleData.title}</h1>
          <PortableText
            value={articleData.Content}
            components={myPortableTextComponents}
          />
        </div>
      </div>
      <div className="h-full hidden sm:block col-span-2"></div>
    </div>
  );
};

export default Page;
