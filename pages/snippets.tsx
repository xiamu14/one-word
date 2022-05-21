import { InferGetStaticPropsType } from "next";
import { allSnippets } from "../.contentlayer/generated";
import BlockTitle from "../components/block_title";
import Container from "../components/container";
import SnippetCard from "../components/snippet_card";
import { pick } from "../lib/utils";

export default function Snippets({
  snippets,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      <div className="flex flex-col items-start justify-center w-full mb-8">
        <BlockTitle>只言片语</BlockTitle>
        <p className="mb-2 text-gray-600 dark:text-gray-400">
          这里记录的灵感一闪，正渐渐汇聚成思想之海。
        </p>
        <div className="mb-6"></div>
        <div className="grid w-full grid-cols-2 gap-6 my-2 mt-4 sm:grid-cols-3">
          {snippets.map((snippet) => (
            <SnippetCard
              key={snippet.slug}
              title={snippet.title}
              slug={snippet.slug}
              logo={snippet.logo}
              description={snippet.description}
            />
          ))}
        </div>
        <span className="h-16" />
      </div>
    </Container>
  );
}

export function getStaticProps() {
  const snippets = allSnippets.map((snippet) =>
    pick(snippet, ["slug", "title", "logo", "description"])
  );

  return { props: { snippets } };
}
