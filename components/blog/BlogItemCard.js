import Image from "next/image";
import Link from "next/link";
import Text from "../typography/Text";
import React from "react";
import format from "date-fns/format";
import classes from "./BlogList.module.scss";

const BlogItemCard = ({ post }) => {
  return (
    <div className={classes.item}>
      {post.bannerUrl && (
        <div className={classes.bannerImg}>
          <Image
            src={post.bannerUrl}
            alt={post.title}
            layout="fill"
            objectFit="cover"
          ></Image>
        </div>
      )}
      <Link href={`/blog/${post.slug}`}>
        <a className={classes.blogTitle}>{post.title}</a>
      </Link>
      {post.date && (
        <Text className={classes.blogDate}>
          {format(new Date(post.date), "PPP")}
        </Text>
      )}
      {post.tags && (
        <Text className={classes.tags}>
          Tags:{" "}
          {post.tags.map((tag, index, tags) => (
            <span key={tag}>
              {tag}
              {index < tags.length - 1 && ", "}
            </span>
          ))}
        </Text>
      )}
      {post.description && (
        <Text className={classes.description}>{post.description}</Text>
      )}
    </div>
  );
};

export default BlogItemCard;
