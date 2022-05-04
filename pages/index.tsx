import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import Container from "../components/container";
import BlogPostCard from "../components/blog_post_card";
import VideoCard from "../components/video_card";

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
}

function PostCard(post: Post) {
  return (
    <div className="mb-6">
      <time dateTime={post.date} className="block text-sm text-slate-600">
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
      <h2 className="text-lg">
        <Link href={post.url}>
          <a className="text-blue-700 hover:text-blue-900">{post.title}</a>
        </Link>
      </h2>
    </div>
  );
}

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-4xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-24">
            <h1 className="font-bold text-2xl md:text-4xl tracking-tight mb-2 text-black dark:text-white">
              Ben
            </h1>
            <h2 className="text-gray-700 dark:text-gray-200 mb-4">
              Director of Developer Relations at{" "}
              <span className="font-semibold">Vercel</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-16">
              Helping developers build a faster web. Teaching about web
              development, serverless, and React / Next.js.
            </p>
          </div>

          <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
            <Image
              alt="my cat"
              height={176}
              width={176}
              src="/images/avatar.png"
              className="rounded-full filter grayscale"
            />
          </div>
        </div>
        <h3 className="heti--classic font-bold text-1xl md:text-3xl tracking-tight mb-6 text-black dark:text-white">
          最新文章
        </h3>

        <div className="flex gap-6 flex-col md:flex-row px-1">
          <BlogPostCard
            title="Everything I Know About Style Guides, Design Systems, and Component Libraries"
            slug="style-guides-component-libraries-design-systems"
            gradient="from-[#D8B4FE] to-[#818CF8]"
          />
          <BlogPostCard
            title="Rust Is The Future of JavaScript Infrastructure"
            slug="rust"
            gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
          />
          <BlogPostCard
            title="Past, Present, and Future of React State Management"
            slug="react-state-management"
            gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
          />
        </div>
        <Link href="/blog">
          <a className="flex mt-8 items-center text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6 px-1">
            Read all posts
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

        <h3 className="heti--classic font-bold text-1xl md:text-3xl tracking-tight mb-4 mt-16 text-black dark:text-white">
          推荐文章
        </h3>
        <div className="px-1">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Build and deploy a modern SaaS application using the most popular
            open-source software. This course is 12 hours long and is completely
            live streamed.
          </p>
          <VideoCard
            index="01"
            href="https://www.youtube.com/watch?v=MxR5I5_hOKk&list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1&index=2"
            length="1:02:45"
            title="Introduction to React 2025"
          />
          <VideoCard
            index="02"
            href="https://www.youtube.com/watch?v=AGl52moyISU&list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1&index=3"
            length="54:22"
            title="Firestore, Chakra UI, Absolute Imports"
          />
          <VideoCard
            index="03"
            href="https://www.youtube.com/watch?v=3g6-v3_BNbM&list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1&index=4"
            length="1:08:30"
            title="Designing & Building the Dashboard"
          />
          <VideoCard
            index="04"
            href="https://www.youtube.com/watch?v=u8iv_yhSRI8&list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1&index=5"
            length="1:13:45"
            title="Firebase Admin with Next.js + SWR"
          />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/playlist?list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1"
            className="flex items-center mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
          >
            Watch all videos
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
        </div>

        <span className="h-16" />
      </div>
    </Container>
  );
}
