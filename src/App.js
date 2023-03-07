import { useMemo, useState } from "react";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyModal from "./components/UI/modal/MyModal";
import { usePosts } from "./hooks/usePosts";
import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'React', body: 'Это библиотека JavaScript с открытым кодом для создания внешних пользовательских интерфейсов.'},
    {id: 2, title: 'JS', body: 'Мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили.'},
    {id: 3, title: 'HTML', body: 'Стандартизированный язык гипертекстовой разметки документов для просмотра веб-страниц в браузере.'},
  ])

  const [filter, setFilter] = useState({sort: '', query: ''});

  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)







  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
        Создать
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      
      <hr style={{margin: '15px 0'}}/>
      <PostFilter 
        filter={filter}
        setFilter={setFilter}  
      />
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Список постов'/>
    </div>
  );
}

export default App;
