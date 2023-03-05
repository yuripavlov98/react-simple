import { useState } from "react";
import PostList from "./components/PostList";
import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'React', body: 'Description'},
    {id: 2, title: 'JS', body: 'Description'},
    {id: 3, title: 'HTML', body: 'Description'},
  ])
  const [posts2, setPosts2] = useState([
    {id: 1, title: 'React2', body: 'Description'},
    {id: 2, title: 'JS2', body: 'Description'},
    {id: 3, title: 'HTML2', body: 'Description'},
  ])

  return (
    <div className="App">
      <PostList posts={posts} title='Список постов 1'/>
      <PostList posts={posts2} title='Список постов 2'/>

    </div>
  );
}

export default App;
