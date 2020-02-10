import React from 'react'

import PostItem from '../PostItem'

import './styles.css'


function PostList() {
  const state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "https://avatars2.githubusercontent.com/u/33133579?s=400&v=4"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://avatars2.githubusercontent.com/u/33133579?s=400&v=4"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Julio Maria",
          avatar: "https://avatars2.githubusercontent.com/u/33133579?s=400&v=4"
        },
        date: "54 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está dando bolsas??",
        comments: [
          {
            id: 1,
            author: {
              name: "Ricardo Silva",
              avatar: "https://avatars2.githubusercontent.com/u/33133579?s=400&v=4"
            },
            content: "O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas."
          },
          {
            id: 2,
            author: {
              name: "Ricardo Silva",
              avatar: "https://avatars2.githubusercontent.com/u/33133579?s=400&v=4"
            },
            content: "O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas."
          }
        ]
      }
    ]
  };

  return (
    <main className="main-container">
      <ul className="container-post">
        {state.posts.map(r => (
          <PostItem posts={r} key={r.id}/>
        ))}
      </ul>
    </main>
  )
}

export default PostList