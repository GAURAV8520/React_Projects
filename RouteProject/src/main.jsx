import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import {
  BrowserRouter,
  Route,
  Routes,
  useParams,
  NavLink,
} from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <div>
        {posts.map((post) => (
          <NavLink style={{ display: "block" }} to={`/post/${post.id}`} key={post.id}>
            {post.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

const PostPage = () => {
  const params = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      .then((response) => response.json())
      .then((postData) => setData(postData));
  }, [params.postId]);

  if (data === null) return <p>Loading....</p>;

  return (
    <>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </>
  );
};

const About = () => {
  return (
    <>
      <h1>Name : gaurav deshmukh</h1>
    </>
  );
};

const Adderess = () => {
  return (
    <>
      <h1>Nanded</h1>
    </>
  );
};

const User = () => {
  return (
    <>
      <h1>gaurav</h1>
    </>
  );
};

const Username = () => {
  const param = useParams();
  console.log(param);

  return (
    <>
      <h1>Your name is : {param.name}</h1>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:postId" element={<PostPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/address" element={<Adderess />} />
        <Route path="/about">
          <Route path="username" element={<User />} />
        </Route>
        <Route path="/user/:name" element={<Username />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
