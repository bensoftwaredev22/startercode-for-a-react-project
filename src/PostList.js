import React, {useState, useEffect} from "react";
import PostDetail from "./PostDetail";

function PostList({post}) {
/*
 Need to display the post's title and body.
 When the body is clicked, display that post's comments.
*/

// currently displays post title, body and all comments for each post.
// Need help creating a button click to display the comments
 const handleClick = () => {
        
 }

    return (
        <div>
            <h1>{post.title}</h1>
                <button type="button" onClick={handleClick} >
                    <p>{post.body}</p>
                </button>
                <PostDetail postId={post.id}/>
        </div>
    )
}


export default PostList;