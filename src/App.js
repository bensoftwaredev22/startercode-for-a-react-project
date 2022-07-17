import "./App.css";
import React, {useState, useEffect} from "react";
//import PostDetail from "./PostDetail";
import PostList from "./PostList";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
    .then((response) => response.json())
    .then(setPosts);
    console.log(posts);
  }, []);

  const postList = posts.map((post) => <PostList key={post.id} post={post} />)


  return (
    <div className="App">
      {postList}
    </div>
  )
}

export default App;