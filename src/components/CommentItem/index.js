import React from 'react'

function CommentItem({ comments }){
  return (
    <li className="post-comments">
    <img src={comments.author.avatar} alt="user_comment" />
    <div className="comments">
      <p>
        <strong>{comments.author.name}</strong>
        {comments.content}
      </p>
    </div>
  </li>
  )
}

export default CommentItem