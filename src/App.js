import { useState } from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'React', body: 'Description'},
    {id: 2, title: 'JS', body: 'Description'},
    {id: 3, title: 'HTML', body: 'Description'},
  ])

  return (
    <div className="App">
      <form>
        <MyInput type='text' placeholder="Название поста"></MyInput>
        <MyInput type='text' placeholder="Описание поста"></MyInput>
        <MyButton disabled>Создать новый пост</MyButton>
      </form>
      <PostList posts={posts} title='Список постов 1'/>
    </div>
  );
}

export default App;
