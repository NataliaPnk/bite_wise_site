import React from "react";
import s from "../UserCard/index.module.css";

export default function UserCard({ id, firstName, lastName, age, address }) {

  const { city, country } = address
  return (
    <div className={s.userCard}>
      <h3>
        {firstName} {lastName}
      </h3>
      <p><span>Age:</span> {age}</p>
      <p><span>State:</span> {city}</p> 
      <p> <span>Country:</span> {country}</p>
    </div>
  );
}
