import React from "react";
import s from "../PostCard/index.module.css";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";

export default function PostCard({ id, title, body, tags, reactions, views }) {
  const { likes, dislikes } = reactions;

  return (
    <div className={s.postCard}>
      <h3>{title}</h3>
      <p className={s.body}>{body}</p>
      <div>
        {tags.map((el) => (
          <p key={el}>{el}</p>
        ))}
      </div>
      <div>
        <span>
          {likes}{" "}
          <span>
            <AiOutlineLike />
          </span>
        </span>
        <span>
          {dislikes}{" "}
          <span>
            <AiOutlineDislike />
          </span>{" "}
        </span>
      </div>
      <span>Views: {views}</span>
    </div>
  );
}
