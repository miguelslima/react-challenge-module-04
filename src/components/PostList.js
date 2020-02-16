import React, { Component } from 'react';

import PostItem from './PostItem';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Miguel Lima",
          avatar: 'https://i.pravatar.cc/150?img=8',
        },
        date: '12 de fevereiro de 2020',
        content: 'Alguem sabe se a rocketseat esta contratando?',
        comments: [
          {
            id: 2,
            author: {
              name: "Mario Lima",
              avatar: 'https://avatars2.githubusercontent.com/u/2254731?v=4',
            },
            date: '12 de fevereiro de 2020',
            content: 'A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)',
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Manoel Bernardo",
          avatar: 'https://i.pravatar.cc/150?https://i.pravatar.cc/150?img=8=8',
        },
        date: '12 de fevereiro de 2020',
        content: 'Alguem sabe se a rocketseat esta contratando?',
        comments: [
          {
            id: 4,
            author: {
              name: "Yuri Sebastiao",
              avatar: 'https://i.pravatar.cc/150?img=11',
            },
            date: '12 de fevereiro de 2020',
            content: 'Alguem sabe se a rocketseat esta contratando?',
          }
        ]
      },
      {
        id: 5,
        author: {
          name: "Manoel Bernardo",
          avatar: 'https://i.pravatar.cc/150?https://i.pravatar.cc/150?img=8=8',
        },
        date: '12 de fevereiro de 2020',
        content: 'Alguem sabe se a rocketseat esta contratando?',
        comments: [
          {
            id: 5,
            author: {
              name: "Yuri Sebastiao",
              avatar: 'https://i.pravatar.cc/150?img=11',
            },
            date: '12 de fevereiro de 2020',
            content: 'Alguem sabe se a rocketseat esta contratando?',
          }
        ]
      },

    ]
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {posts.map(post => (<PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;