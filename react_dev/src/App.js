//import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
//import Counter from './componets/counter/Counter';
import { useEffect, useState } from 'react';
//import PostItem from './componets/Block/PostItem';
import PostList from './componets/Block/PostList';
import MyForm from './componets/Form/MyForm';
//import Button from 'react-bootstrap/Button';
import MyModal from './componets/MyModal';
import MyFilter from './componets/filter/MyFilter';


function App() {
  //let clicks=0
  const [posts, setPosts]=useState(
    [
      {id:1,title: 'Post 1 c3', desc: 'description 1'},
      {id:2,title: 'Post 2 d1', desc: 'description 2'},
      {id:3,title: 'Post 3 e2', desc: 'description 3'}
    ]
  );
  const [selectedSort, setselectedSort]=useState('title')
  function savePosts(newPost){
    console.log('post...changing');
    posts.push(newPost)
    setPosts([...posts])
    console.log(posts);
  }
  const deletePost=(post)=>{
    console.log('post deleting...',post);
    setPosts([...posts].filter(p=>p.id !== post.id))
  }
  const editPost=(post)=>{
    console.log('post editing...',post);
    posts.forEach(p=>{
      if (p.id === post.id) {
        p.title = post.title
        p.desc = post.desc
        
        return p
      }
    })
    setPosts([...posts])
    console.log(posts);
  }
  const searchPosts=(word)=>{
    if(word===undefined){
      return posts
    }
    else{
      console.log('searching...',word);
      return [...posts].filter(p=> p.title.toLowerCase().includes(word.toLowerCase().trim()))
    }
    //setPosts(posts)
  }
const sortPosts = () =>{
  setPosts([...posts].sort((a,b)=>a[selectedSort].localeCompare(b[selectedSort])))
}
  return (
    <div>
      {
        useEffect(()=>{
          console.log('sorting..',selectedSort);
        },[selectedSort])
      }
      <MyFilter searchPosts={searchPosts} sortPosts={sortPosts} SetselectedSort={setselectedSort}/>
      <hr></hr>
      <PostList posts={searchPosts()} deleteFn={deletePost} editFn={editPost}/>
      <MyModal ModalTitle="Add new post"><MyForm savePosts={savePosts} isEdit={false}/></MyModal>
    </div>
  );
}

export default App;
