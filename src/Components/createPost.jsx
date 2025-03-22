import React, { useState } from 'react'

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("")

  return (
    <div>
      <div>
        <h1>Create Post</h1>
        <div>
          <label>Title : </label>
          <input placeholder='Enter the title' onChange={(e) => {setTitle(e.target.value)}} />
        </div>
        <div>
          <label>Post : </label>
          <textarea placeholder='Enter the text' onChange={(e) => {setPost(e.target.value)}}></textarea>
        </div>
      </div>
    </div>
  )
}

export default CreatePost
