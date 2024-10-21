import React from "react";
import s from "../Header/index.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={s.header}>
      <nav>
        <Link to="/">Recipes</Link>
        <Link to="/quotes">Quotes</Link>
        <Link to="/users">Users</Link>
        <Link to="/posts">Posts</Link>
      </nav>
    </header>
  );
}
