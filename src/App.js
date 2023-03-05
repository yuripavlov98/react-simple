import { useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'React', body: 'Description'},
    {id: 2, title: 'JS', body: 'Description'},
    {id: 3, title: 'HTML', body: 'Description'},
  ])


  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  return (
    <div className="App">
      <PostForm create={createPost}/>
      {posts.length !==0
        ? <PostList remove={removePost} posts={posts} title='Список постов 1'/>
        : <h2 style={{textAlign: 'center'}}>Посты не найдены</h2>
      } 
    </div>
  );
}

export default App;
