import Link from 'next/link'
import React from 'react'
import Todo from '../component/todo'
import "./posts.css"
async function pagePost () {

  const response=await fetch('https://jsonplaceholder.typicode.com/posts',
  {
    next:{
      cache:50
    }
  }
  );
  const posts= await response.json()

  const postsJsx=posts.map((post)=>{
    return(
      <Link key={post.id} className='post' href={`posts/${post.id}`}> 
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </Link>
    )
  })

  return (
    <div>
      posts page
      <Link href="/articles">
          <button>go to articles</button>
      </Link>
      <Todo />

      <div className='parent'>
        {postsJsx}
      </div>
      
    </div>
  )
}

export default pagePost
