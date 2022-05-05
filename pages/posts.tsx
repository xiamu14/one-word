import { useState } from "react";

import { InferGetStaticPropsType } from "next";

import { allPosts } from "contentlayer/generated";
import Container from "../components/container";
import PostListItem from "../components/post_list_item";

export default function Posts({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      <div className="flex flex-col items-start justify-center w-full mb-16">
        <h1 className="mb-4 text-2xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Blog
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          {`I've been writing online since 2014, mostly about web development and tech careers.
            In total, I've written ${posts.length} articles on my blog.
            Use the search below to filter by title.`}
        </p>

        <h3 className="mt-8 mb-4 text-1xl font-bold tracking-tight text-black md:text-3xl dark:text-white">
          All Posts
        </h3>

        {posts.map((post, index) => (
          <PostListItem
            key={index}
            index={`${index < 10 ? "0" : ""}${index + 1}`}
            href={post.url}
            length={post.readingTime.text}
            title={post.title}
          />
        ))}

        <span className="h-16" />
      </div>
    </Container>
  );
}

export function getStaticProps() {
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  return { props: { posts } };
}
