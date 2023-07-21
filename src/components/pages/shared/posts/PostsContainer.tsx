import PostItem from "./PostItem"


const PostsContainer = ({}) => {
  return (
    <div className="flex flex-col gap-4">
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
    </div>
  )
}

export default PostsContainer