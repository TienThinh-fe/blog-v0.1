import Link from "next/link";
import React from "react";
import classes from "./SingleBlog.module.scss";
import { LeftArrow } from "../icon/Icon";
import BlogHeader from "./BlogHeader";
import BlogContent from "./BlogContent";
import { UpArrow } from "../icon/Icon";

const SingleBlog = ({ mdxSource, frontmatter }) => {
  return (
    <div className={classes.blogContainer}>
      <Link href="/">
        <a className={classes.link}>
          <LeftArrow></LeftArrow>
          Home
        </a>
      </Link>
      <BlogHeader frontmatter={frontmatter}></BlogHeader>
      <BlogContent mdxSource={mdxSource}></BlogContent>
      <button
        className={classes.scrollToTop}
        onClick={() => window.scrollTo(0, 0)}
      >
        Scroll To Top
        <UpArrow />
      </button>
    </div>
  );
};

export default SingleBlog;
