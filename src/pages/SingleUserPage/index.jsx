import React, { useEffect, useState } from "react";
import { getSingleUser } from "../../requests/users_req";
import { useParams } from "react-router-dom";
import s from "../SingleUserPage/index.module.css";

export default function SingleUserPage() {
  const { user_id } = useParams();

  const [singleUser, setSingleUsers] = useState({});

  useEffect(() => {
    getSingleUser(user_id, setSingleUsers);
  }, []);

  const { id, firstName, lastName, age, address = {} } = singleUser;

  return (
    <div className={s.singleUserWrapper}>
      <div>
        <h3>
          {firstName} {lastName}
        </h3>
        <p>
          <span>Age:</span> {age}
        </p>
        <p>
          <span>State:</span> {address.city}
        </p>
        <p>
          {" "}
          <span>Country:</span> {address.country}
        </p>
      </div>
    </div>
  );
}
