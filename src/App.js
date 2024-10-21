import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import RecipesPage from "./pages/RecipesPage";
import QuotesPage from "./pages/QuotesPage";
import UsersPage from "./pages/UsersPage";
import PostsPage from "./pages/PostsPage";
import { getRecipes } from "./requests/recipes_req";
import { useEffect, useState } from "react";
import { Context } from "./context";
import { getQuotes } from "./requests/quotes_req";
import { getPosts } from "./requests/posts_req";
import { getUsers } from "./requests/users_req";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [quotes, setQuoters] = useState([]);
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getRecipes(setRecipes);
    getQuotes(setQuoters);
    getPosts(setPosts);
    getUsers(setUsers);
  }, []);

  return (
    <div>
      <Context.Provider value={{ recipes, quotes, posts, users }}>
        <Header />

        <Routes>
          <Route path="/" element={<RecipesPage />} />
          <Route path="/quotes" element={<QuotesPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/posts" element={<PostsPage />} />
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
