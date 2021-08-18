import React, { useState, useEffect, useCallback } from "react";
import getPosts from "./helpers/getPost";
import getUser from "./helpers/getUser";

// const initialUser = {
//   name: "Luis",
//   email: "luis@gmail.com",
// };

// const initialPost = [
//   { id: 1, title: "Post 1" },
//   { id: 2, title: "Post 2" },
// ];

const FetchCard = () => {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const uptdate = () => {
    getUser().then((newUser) => {
      setUser(newUser);
    });
  };
  const updatePosts = useCallback(() => {
    getPosts(user.id).then((Newposts) => {
      setPosts(Newposts);
    });
  }, [user.id]);

  useEffect(() => {
    uptdate();
  }, []);

  useEffect(() => {
    if (user?.id) {
      updatePosts();
    }
  }, [user, updatePosts]);
  return (
    <div>
      <br />
      <button onClick={uptdate}>Otro Usuario</button>
      <h1>{user.name}</h1>
      <h2>{user.email}</h2>
      <h2>{user.id}</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchCard;
