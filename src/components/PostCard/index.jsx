import React from "react";
import s from "../PostCard/index.module.css";

export default function PostCard({ id, title, body, tags, reactions, views }) {
  const { likes, dislikes } = reactions;

  return (
    <div className={s.postCard}>
      <h3>{title}</h3>
      <p>{body}</p>
      <p>{tags.join(", ")}</p>
      <span>Likes: {likes} </span>
      <span>Dislikes: {dislikes} </span>
      <span>Views: {views}</span>
    </div>
  );
}
