import React, {useState, useEffect} from "react";
import PostDetail from "./PostDetail";

function PostList({post}) {

 const handleClick = () => {

 }

    return (
        <div>
            <h1>{post.title}</h1>
                <button type="button" >
                    <p>{post.body}</p>
                </button>
                <PostDetail postId={post.id}/>
        </div>
    )
}

export default PostList;