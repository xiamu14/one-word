// pages/posts/[slug].js

import { allPosts, Post } from "contentlayer/generated";
import { GetStaticProps } from "next/types";
import { useMDXComponent } from "next-contentlayer/hooks";
import BlogLayout from "../../layouts/blog";
import mdxCustomComponents from "../../components/mdx_component";

export async function getStaticPaths() {
  const paths = allPosts.map((s) => ({ params: { slug: s.slug } }));
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = allPosts.find((post) => post.slug === params?.slug);
  return {
    props: {
      post,
    },
  };
};

const PostPage = ({ post }: { post: Post }) => {
  const Component = useMDXComponent(post.body.code);
  return (
    <BlogLayout post={post}>
      <Component components={mdxCustomComponents} />
    </BlogLayout>
  );
};

export default PostPage;
