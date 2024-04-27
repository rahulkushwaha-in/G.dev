"use client";
import SidebarLeft from "@/components/sidebar";
import React from "react";
import { useParams } from "next/navigation";
import { getIndividualArticleData } from "@/lib/utils";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";
import CodeBlock from "@/components/CodeBlock";
import Image from "next/image";

const page = async () => {
  const params = useParams();
  const category = params.category;
  const slug = params.slug;
  const articleData = await getIndividualArticleData(slug);
  console.log(articleData)
  const myPortableTextComponents = {
    block: {
      // Ex. 1: customizing common block types
      blockquote: ({ children }) => (
        <blockquote className="border-l-blue-500">{children}</blockquote>
      ),
    },
    types: {
      code: ({ value }) => (
        <div>
          <CodeBlock
            language={value.language}
            code={value.code}
            filename={value.filename}
          />
        </div>
      ),
      image: ({ value }) => <Image src={urlForImage(value)} width={700} height={700} />,
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
    <>
      <div class="grid grid-cols-12">
        <div class=" sticky top-0 bg-red-500 hidden sm:block sm:col-span-2 h-screen overflow-y-scroll">
          {" "}
          <SidebarLeft category={category} />
        </div>
        <div class="p-8 mx-auto w-full col-span-12 sm:col-span-8">
          <div className="max-w-full prose prose-blue prose-lg prose-li:marker:text-blue-500 prose-img:rounded prose-img:m-auto prose-img:object-cover" >
            <h1>{articleData.title}</h1>
            <PortableText
              value={articleData.Content}
              components={myPortableTextComponents}
            ></PortableText>
          </div>
        </div>
        <div class=" h-full bg-yellow-500 hidden sm:block col-span-2">3</div>
      </div>
    </>
  );
};

export default page;
