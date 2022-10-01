import React from "react";
import BlogItemCard from "./BlogItemCard";
import classes from "./BlogList.module.scss";

const BlogList = ({ posts }) => {
  return (
    <div className={classes.container}>
      {posts.map((post) => (
        <BlogItemCard post={post.frontmatter} />
      ))}
    </div>
  );
};

export default BlogList;
