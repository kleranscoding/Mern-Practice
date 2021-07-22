import React from 'react';

const Form = () => {
  
  const [post, setPost] = React.useState({ 'title': '', 'text': ''});

  const handleSubmit = e => {
    e.preventDefault();
    if (!post.title || !post.text) return;
    console.log("title",post.title, "text", post.text)
  }

  const handleChange = e => setPost(prev => ({...prev, [e.target.name]: e.target.value}))

  return (
    <form onSubmit={handleSubmit}>
      <h1>Post: </h1>
      <input type="text" name="title" onChange={handleChange} value={post.title} placeholder="title"/>
      <textarea name="text" onChange={handleChange} value={post.text}> </textarea>
      <button type="submit" > submit </button>
    </form>
  )
}

export default Form;