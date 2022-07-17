import React, {useState, useEffect} from "react";

function PostDetail({ postId }) {
    const [comments, setComments] = useState([]);


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then((response) => response.json())
        .then(setComments)
    }, [])

    const commentList = comments.map((comment) => {
        return [comment.body];     
    })
    

    return (
        <div>
            {commentList}
        </div>
    )
}

export default PostDetail;