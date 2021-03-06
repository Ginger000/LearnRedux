import { useDispatch } from "react-redux"
import { reactionAdded } from "./postsSlice"

const reactionEmoji = {
  thumbUp: 'π',
  wow: 'π₯',
  heart: 'π',
  rocket: 'π',
  coffee: 'π€ΈββοΈ'
}

const ReactionButtons = ({post}) => {
  
  const dispatch = useDispatch()

  const reactionButtons = Object.entries(reactionEmoji).map(([name,emoji])=>{
    return(
      <button
        key={name}
        type="button"
        className="reactionButto"
        onClick={()=>
          dispatch(reactionAdded({postId:post.id, reaction:name}))
        }
      >
        {emoji} {post.reactions[name]}
      </button>
    )
  })

  return <div>{reactionButtons}</div>

}

export default ReactionButtons