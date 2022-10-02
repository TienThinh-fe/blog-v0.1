import Link from "next/link";
import React from "react";
import classes from "./SingleBlog.module.scss";
import { LeftArrow } from "../icon/Icon";
import BlogHeader from "./BlogHeader";
import BlogContent from "./BlogContent";

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
    </div>
  );
};

export default SingleBlog;
