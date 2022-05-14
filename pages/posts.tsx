import { InferGetStaticPropsType } from "next";

import { allPosts } from "contentlayer/generated";
import Container from "../components/container";
import PostListItem from "../components/post_list_item";
import BlockTitle from "../components/block_title";

export default function Posts({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      <div className="flex flex-col items-start justify-center w-full mb-8">
        <BlockTitle>博客</BlockTitle>
        <p className="mb-1 text-gray-600 dark:text-gray-400">
          这是我的博客专栏，名曰“言之有物”，出自《周易·家人》：“君子以言有物，而行有恒”。
        </p>
        <p className="mb-2 text-gray-600 dark:text-gray-400">
          {`迄今为止，我已经写了 ${posts.length} 篇文章，记录各种知识和生活感受。`}
        </p>

        <div className="mb-16"></div>

        <BlockTitle>文章</BlockTitle>

        <div className="px-1 w-full">
          {posts.map((post, index) => (
            <PostListItem
              key={index}
              index={`${index < 10 ? "0" : ""}${index + 1}`}
              slug={post.slug}
              length={post.readingTime.text}
              title={post.title}
            />
          ))}
        </div>

        <span className="h-16" />
      </div>
    </Container>
  );
}

export function getStaticProps() {
  const posts = allPosts
    .filter((it) => !it.draft)
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

  return { props: { posts } };
}
