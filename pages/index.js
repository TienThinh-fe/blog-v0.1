import HeroSection from "../components/home/HeroSection";
import { postFileNames, postsPath } from "../utils/mdxUtils";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import BlogList from "../components/blog/BlogList";

export default function Home({ posts }) {
  return (
    <>
      <HeroSection />
      <BlogList posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const posts = postFileNames.map((slug) => {
    const content = fs.readFileSync(path.join(postsPath, `${slug}`));
    const { data } = matter(content);
    return {
      frontmatter: data,
      slug: slug.replace(/\.mdx?$/, ""),
    };
  });
  return {
    props: { posts: JSON.parse(JSON.stringify(posts)) },
  };
}
