//import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Counter from './componets/counter/Counter';
import { useState } from 'react';
//import PostItem from './componets/Block/PostItem';
import PostList from './componets/Block/PostList';
import MyForm from './componets/Form/MyForm';


function App() {
  //let clicks=0
  const [posts, setPosts]=useState(
    [
      {title: 'Post 1', desc: 'description 1'},
      {title: 'Post 2', desc: 'description 2'},
      {title: 'Post 3', desc: 'description 3'}
    ]
  );
  return (
    <div>
      <Counter />
    <PostList posts={posts}/>
    <MyForm/>

    </div>
  );
}

export default App;
