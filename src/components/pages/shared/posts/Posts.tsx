import PostInput from "./PostInput"
import PostsContainer from "./PostsContainer"


const Posts = ({}) => {
  return (
    <div className="flex flex-col gap-4">
      <PostInput />
      <PostsContainer />
    </div>
  )
}

export default Posts