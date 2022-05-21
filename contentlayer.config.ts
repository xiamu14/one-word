import {
  ComputedFields,
  defineDocumentType,
  makeSource,
} from "contentlayer/source-files";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import rehypeToc from "@jsdevtools/rehype-toc";
import readingTime from "reading-time";

const computedFields: ComputedFields = {
  readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },
  wordCount: {
    type: "number",
    resolve: (doc) => doc.body.raw.split(/\s+/gu).length,
  },
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
  },
};

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    description: { type: "string" },
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
    draft: {
      type: "boolean",
      description: "draft",
    },
    recommend: {
      type: "boolean",
      description: "recommend",
    },
    recently: {
      type: "boolean",
      description: "recently",
    },
  },
  computedFields,
}));

const Snippet = defineDocumentType(() => ({
  name: "Snippet",
  filePathPattern: "snippets/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    logo: { type: "string", required: true },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "data",
  documentTypes: [Post, Snippet],
  mdx: {
    rehypePlugins: [
      rehypePrism,
      rehypeSlug,
      [
        rehypeToc,
        {
          headings: ["h3"],
        },
      ],
    ],
  },
});
