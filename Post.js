import React from "react";
import propTypes  from "prop-types";

function Post({id, title, deletePost}){
return(
<div className = "Post">
    <button className =" Post__delete" onClick = {()=> deletePost(id)} >X</button>
    <div className = "Post__title">{title}</div>
<img className = "Post__image" src ={'http://source.unsplash.com/random?siq=${}'}/>
</div>
)

}
Post.propTypes = {
    id:propTypes.number.isRequired,
    title:propTypes.string.isRequired,
    deletePost:propTypes.func.isRequired

};
export default Post;