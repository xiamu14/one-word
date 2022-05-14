import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import Container from "../components/container";
import PostCard from "../components/post_card";
import PostListItem from "../components/post_list_item";
import React from "react";
import BlockTitle from "../components/block_title";

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
}

const readAll = (
  <Link href="/blog">
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
export default function Home({ posts }: { posts: Post[] }) {
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
              <p className="mt-2">[南宋] 蒋捷《虞美人·听雨》</p>
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

        <div className="flex gap-8 flex-col md:flex-row px-1">
          <PostCard
            title="
            Flutter 为应用开发带来了革新：一套代码库，即可构建、发布适用于不同系统的精美应用。"
            slug="style-guides-component-libraries-design-systems"
            gradient="from-[#D8B4FE] to-[#818CF8]"
          />
          <PostCard
            title="我认为，我们的眼光不应局限于库和框架，而应该重新发现模式和原则的价值。"
            slug="rust"
            gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
          />
          <PostCard
            title="Solid.js 使用了 React 的许多符合人体工程学的部分，同时最大程度减少了混乱和错误。"
            slug="react-state-management"
            gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
          />
        </div>
        {readAll}

        <div className="mb-16"></div>

        <BlockTitle>推荐文章</BlockTitle>
        <div className="px-1 w-full">
          {/* <p className="mb-4">代码生成器框架 Codegem 的使用教程</p> */}
          <PostListItem
            index="01"
            slug="https://www.youtube.com/watch?v=MxR5I5_hOKk&list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1&index=2"
            length="15分钟"
            title="略窥门径：Codegem 的简介"
          />
          <PostListItem
            index="02"
            slug="https://www.youtube.com/watch?v=AGl52moyISU&list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1&index=3"
            length="30分钟"
            title="小试牛刀：快速生成 SVG 图标组件库（React）"
          />
          <PostListItem
            index="03"
            slug="https://www.youtube.com/watch?v=3g6-v3_BNbM&list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1&index=4"
            length="43分钟"
            title="庖丁解牛：解析 Codegem 源码"
          />
          <PostListItem
            index="04"
            slug="https://www.youtube.com/watch?v=u8iv_yhSRI8&list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1&index=5"
            length="40分钟"
            title="驾轻就熟：自定义加载器（load）和生成器（machine）"
          />
          {readAll}
        </div>
        <span className="h-16" />
      </div>
    </Container>
  );
}
