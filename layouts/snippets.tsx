import Image from "next/image";

import type { PropsWithChildren } from "react";
import type { Snippet } from "contentlayer/generated";
import Container from "../components/container";

export default function SnippetLayout({
  children,
  snippet,
}: PropsWithChildren<{ snippet: Snippet }>) {
  return (
    <Container
      title={`${snippet.title} - 只言片语`}
      // description="A collection of code snippets – including serverless functions, Node.js scripts, and CSS tricks."
    >
      <article className="flex flex-col items-start justify-center w-full mx-auto px-2 mb-16">
        <div className="flex justify-between items-center w-full mb-6">
          <div>
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
              {snippet.title}
            </h1>
            <p className="text-gray-700 dark:text-gray-300">
              {snippet.description}
            </p>
          </div>
          <div className="mt-2 sm:mt-0">
            <Image
              alt={snippet.title}
              height={48}
              width={48}
              src={`/logos/${snippet.logo}`}
              className="rounded-sm"
            />
          </div>
        </div>
        <div className="inkstone-paragraph dark:prose-dark w-full">
          {children}
        </div>
      </article>
    </Container>
  );
}
