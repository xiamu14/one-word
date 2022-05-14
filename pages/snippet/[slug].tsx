import { useMDXComponent } from "next-contentlayer/hooks";
import SnippetLayout from "layouts/snippets";
import { GetStaticProps } from "next/types";
import { allSnippets } from "contentlayer/generated";
import type { Snippet } from "contentlayer/generated";
import mdxCustomComponents from "../../components/mdx_component";

export default function SnippetPage({ snippet }: { snippet: Snippet }) {
  const Component = useMDXComponent(snippet.body.code);

  return (
    <SnippetLayout snippet={snippet}>
      <Component components={mdxCustomComponents} />
    </SnippetLayout>
  );
}

export function getStaticPaths() {
  return {
    paths: allSnippets.map((s) => ({ params: { slug: s.slug } })),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const snippet = allSnippets.find((snippet) => snippet.slug === params?.slug);

  return { props: { snippet } };
};
