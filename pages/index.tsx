import Link from "next/link";
import Image from "next/image";
import { compareDesc } from "date-fns";
import { allPosts } from "contentlayer/generated";
import Container from "../components/container";
import PostCard from "../components/post_card";
import PostListItem from "../components/post_list_item";
import React from "react";
import BlockTitle from "../components/block_title";
import { InferGetStaticPropsType } from "next";

export async function getStaticProps() {
  const posts = allPosts
    .filter((it) => !it.draft)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });
  const recentPosts = posts.filter((it) => it.recently).slice(0, 3);
  const recommendPosts = posts.filter((it) => it.recommend).slice(0, 6);

  return { props: { recommendPosts, recentPosts } };
}

const readAll = (
  <Link href="/posts">
    <a className="flex mt-8 items-center text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6 px-1">
      全部文章
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="h-6 w-6 ml-1"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
        />
      </svg>
    </a>
  </Link>
);

const gradients = [
  "from-[#D8B4FE] to-[#818CF8]",
  "from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]",
  "from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]",
];

const Home = ({
  recommendPosts,
  recentPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-4xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="px-1 w-full flex justify-start mb-16 sm:flex-row items-start">
          <div className="flex flex-col pr-24">
            <div>
              <p className="inkstone-x-large">
                少年听雨歌楼上，红烛昏罗帐。
                <br />
                壮年听雨客舟中，江阔云低，断雁叫西风。
                <br />
                而今听雨僧庐下，鬓已星星也。
                <br />
                悲欢离合总无情，一任阶前，点滴到天明。
              </p>
              <p className="mt-4 text-gray-600 ">
                [ 南宋 ] 蒋捷《虞美人·听雨》
              </p>
            </div>
          </div>

          <div className="flex-1"></div>

          <div className="w-[60px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
            <Image
              alt="my cat"
              height={156}
              width={156}
              src="/images/avatar.png"
              className="rounded-full filter grayscale-9"
            />
          </div>
        </div>

        <BlockTitle>最新文章</BlockTitle>

        <div className="flex w-full gap-8 flex-col md:flex-row px-1">
          {recentPosts.map((item, index) => {
            return (
              <PostCard
                key={item.slug}
                title={item.title}
                slug={item.slug}
                gradient={gradients[index]}
              />
            );
          })}
        </div>
        {readAll}

        <div className="h-16"></div>

        <BlockTitle>精选文章</BlockTitle>
        <div className="px-1 w-full">
          {recommendPosts.map((item, index) => {
            return (
              <PostListItem
                key={item.slug}
                index={index < 9 ? `0${index + 1}` : `${index}`}
                slug={item.slug}
                length={item.readingTime.text}
                title={item.title}
              />
            );
          })}
          {readAll}
        </div>
        <div className="h-16" />
      </div>
    </Container>
  );
};

export default Home;
