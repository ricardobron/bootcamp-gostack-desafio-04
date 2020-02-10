import React from 'react'

import CommentItem from '../CommentItem'

function PostItem({ posts }){
  return (
    <li className="post-item">
    <header>
      <img src={posts.author.avatar} alt="user_avatar" />
      <div className="user-info">
        <strong>{posts.author.name}</strong>
        <span>{posts.date}</span>
      </div>
    </header>
    <p>{posts.content}</p>
    <ul className="container-comments">
      {posts.comments.map(l => (
       <CommentItem comments={l} key={l.id}/>
      ))}
    </ul>
  </li>
  )
    
}

export default PostItem