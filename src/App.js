import "./App.css";
import React, {useState, useEffect} from "react";
//import PostDetail from "./PostDetail";
import PostList from "./PostList";

/*
Post Structure:
{
  "userId": 1,
  "id": 1,
  "title": "sundent occaecati exepturi optio reprehenderit",
  "body": "qui et recusandae consequuntur expedita et cum\nreprehenderit molestiae ut
  ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
},
*/
/*
Comment Structure: each post has 5 comments,
{
  "postId": 1,
  "id": 4,
  "name": "alias odio sit",
  "email": "Nav@fav.tv",
  "body": "non et leniti ut occaecati"
}
*/

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