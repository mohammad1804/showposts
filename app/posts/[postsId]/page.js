import PostDaitales from '@/app/components/PostDaitales';
import React, { Suspense } from 'react'
const page = async({params}) => {
  const postId=params.postsId
  const loadingJsx=(<div><h2>loading...</h2></div>)
  return (
    <div>
    
      post datails
      
      <Suspense fallback={loadingJsx}>
          <PostDaitales postId={postId} />
      </Suspense>

      
    </div>
  )
}
export default page

