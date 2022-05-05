import Image from "next/image";
import { parseISO, format } from "date-fns";

import Container from "../components/container";
// import ViewCounter from "components/ViewCounter";
import { PropsWithChildren, useEffect } from "react";
import type { Post } from "contentlayer/generated";

const editUrl = (slug: string) =>
  `https://github.com/leerob/leerob.io/edit/main/data/blog/${slug}.mdx`;
const discussUrl = (slug: string) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://leerob.io/blog/${slug}`
  )}`;

export default function BlogLayout({
  children,
  post,
}: PropsWithChildren<{ post: Post }>) {
  return (
    <Container>
      <article className="flex flex-col items-start justify-center w-full mx-auto px-2 mb-16">
        <h1 className="heti heti--classic mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
          {post.title}
        </h1>
        <div className="flex flex-col items-start justify-between w-full px-2 mt-2 md:flex-row md:items-center">
          <div className="flex items-center">
            <Image
              alt="Ben"
              height={24}
              width={24}
              src="/images/avatar.png"
              className="rounded-full"
            />
            <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              {"Ben / "}
              {format(parseISO(post.date), "MMMM dd, yyyy")}
            </p>
          </div>
        </div>
        <div className="heti heti--classic w-full px-2 mt-4 prose dark:prose-dark max-w-none">
          {children}
        </div>
      </article>
    </Container>
  );
}
