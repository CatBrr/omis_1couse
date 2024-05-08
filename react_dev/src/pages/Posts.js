//import logo from './logo.svg';
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
//import Counter from './componets/counter/Counter';
import { useEffect, useState } from 'react';
//import PostItem from './componets/Block/PostItem';
import PostList from '../componets/Block/PostList';
import MyForm from '../componets/Form/MyForm';
//import Button from 'react-bootstrap/Button';
import MyModal from '../componets/MyModal';
import MyFilter from '../componets/filter/MyFilter';
import postService from '../componets/api/postService';
import MyPagination from '../componets/pagination/MyPagination';


function Posts() {
  //let clicks=0
  const [posts, setPosts]=useState(getAllData());
  const [totalPostCount, SetTotalPostCount]=useState(0)
  const [currentLimit, SetcurrentLimit]=useState(10)
  const [currentPage, SetcurrentPage]=useState(10)
  const [filter, SetFilter] = useState({selectedSort: 'title', searchWord:''})
  const SortedAndSearchPosts=(filter.searchWord,posts,filter.selectedSort)

  async function getAllData(){
    const MyData= await postService.getServiceResponse(currentLimit,currentPage)
    setPosts(MyData.data)
    SetTotalPostCount(MyData.headers.get('X-Total-Count'))
  }
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
        p.body = post.body
        
        return p
      }
    })
    setPosts([...posts])
    console.log(posts);
    //setPosts(posts)
  }
  return (
    <div>
      {
        useEffect(()=>{
          
          console.log('sorting..',filter.selectedSort);
        },[filter.selectedSort],[currentPage])
       
      }
      <MyFilter filter={filter} SetFilter={SetFilter}/>
      <MyPagination totalPostsCount={totalPostCount} postsOnPage={currentLimit} SetcurrentPage={SetcurrentPage} active={currentPage}/>
      <hr></hr>
      <PostList posts={SortedAndSearchPosts} deleteFn={deletePost} editFn={editPost}/>
      <MyModal ModalTitle="Add new post"><MyForm savePosts={savePosts} isEdit={false}/></MyModal>
    </div>
  );
}

export default Posts;
