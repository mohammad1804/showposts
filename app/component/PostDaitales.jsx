import React from 'react'
const PostDaitales = async({postId}) => {

  const response=await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`,
  {
    next:{
      cache:50
    }
  }
  );
  const post= await response.json()
  return (
    <div>
      <div style={{background:"#5356e3"}}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
   
      </div>
      
    </div>
  )
}
export default PostDaitales
