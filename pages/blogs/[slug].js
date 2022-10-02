import matter from "gray-matter";
import React from "react";
import { postFileNames, postsPath } from "../../utils/mdxUtils";
import path from "path";
import fs from "fs";
import { serialize } from "next-mdx-remote/serialize";
import SingleBlog from "../../components/blog/SingleBlog";

export default function SingleBlogPage({ mdxSource, frontmatter, slug }) {
  console.log("FRONTMATTER: ", frontmatter);
  return <SingleBlog mdxSource={mdxSource} frontmatter={frontmatter} />;
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const filePath = path.join(postsPath, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data: frontmatter, content } = matter(fileContent);
  const mdxSource = await serialize(content);
  return {
    props: {
      mdxSource,
      frontmatter: JSON.parse(JSON.stringify(frontmatter)),
      slug,
    },
  };
}

export async function getStaticPaths() {
  const postsPath = postFileNames.map((slug) => {
    return {
      params: {
        slug: slug.replace(/\.mdx?$/, ""),
      },
    };
  });

  return {
    paths: postsPath,
    fallback: false,
  };
}
