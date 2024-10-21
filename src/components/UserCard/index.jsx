import React from "react";
import s from "../UserCard/index.module.css";

export default function UserCard({ id, firstName, lastName, age, state }) {
  return (
    <div className={s.userCard}>
      <p3>
        Name: {firstName} {lastName}
      </p3>
      <p>{age}</p>
      <span>{state}</span>
    </div>
  );
}
