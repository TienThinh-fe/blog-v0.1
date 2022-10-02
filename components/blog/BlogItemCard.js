import Image from "next/image";
import Link from "next/link";
import Text from "../typography/Text";
import React from "react";
import format from "date-fns/format";
import classes from "./BlogList.module.scss";

const BlogItemCard = ({ post }) => {
  return (
    <div className={classes.item}>
      {post.frontmatter.bannerUrl && (
        <div className={classes.bannerImg}>
          <Image
            src={post.frontmatter.bannerUrl}
            alt={post.frontmatter.title}
            layout="fill"
            objectFit="cover"
          ></Image>
        </div>
      )}
      <Link href={`/blogs/${post.slug}`}>
        <a className={classes.blogTitle}>{post.frontmatter.title}</a>
      </Link>
      {post.frontmatter.date && (
        <Text className={classes.blogDate}>
          {format(new Date(post.frontmatter.date), "PPP")}
        </Text>
      )}
      {post.frontmatter.tags && (
        <Text className={classes.tags}>
          Tags:{" "}
          {post.frontmatter.tags.map((tag, index, tags) => (
            <span key={tag}>
              {tag}
              {index < tags.length - 1 && ", "}
            </span>
          ))}
        </Text>
      )}
      {post.frontmatter.description && (
        <Text className={classes.description}>
          {post.frontmatter.description}
        </Text>
      )}
    </div>
  );
};

export default BlogItemCard;
