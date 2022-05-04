// pages/posts/[slug].js

import { allPosts, Post } from "contentlayer/generated";
import { GetStaticProps } from "next/types";
import { useMDXComponent } from "next-contentlayer/hooks";
import BlogLayout from "../../layouts/blog";
import mdxCustomComponents from "../../components/mdx_component";

export async function getStaticPaths() {
  const paths = allPosts.map((post) => post.url);
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = allPosts.find(
    (post) => post._raw.flattenedPath === params?.slug
  );
  return {
    props: {
      post,
    },
  };
};

const PostLayout = ({ post }: { post: Post }) => {
  const Component = useMDXComponent(post.body.code);
  return (
    <BlogLayout post={post}>
      <Component components={mdxCustomComponents} />
    </BlogLayout>
  );
};

export default PostLayout;
