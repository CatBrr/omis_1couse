import React, { useRef, useState } from 'react';
import MyInput from './MyInput';
import MyButton from '../MyButton/MyButton';

const MyForm = ({savePosts, editPost, post_old,isEdit}) => {
    console.log(post_old);
    const [post,setPost]=useState({title: '', desc: ''})
    const titleRef= useRef()
    //const [isEdit,SetIsEdit] = useState(false)
    const descRef=useRef()
    function createPost(event){
        event.preventDefault();
        //event=>setPost({...post,title:event.target.value})
        console.log( titleRef.current.value)
        console.log( descRef.current.value)
        const newPost={
            id: Date.now(),
            title: titleRef.current.value,
            desc: descRef.current.value
        }
        savePosts(newPost)
        //console.log(event)
    }
    function updatePost(event){
        console.log(post_old);
        editPost(post_old)
    }
    return (
        <form>
            <div className='d-flex'>
                <MyInput 
                    type='text'
                    ref={titleRef}
                    placeholder='Insert title'
                    value={isEdit ? post_old.title : post.title}
                    onChange={event=>setPost(isEdit ? post_old.title=event.target.value : {...post,title:event.target.value})}
                />
                <MyInput 
                    type='text'
                    ref={descRef}
                    placeholder='Insert description'
                    value={isEdit ? post_old.desc : post.desc}
                    onChange={event=>setPost(isEdit ? post_old.desc=event.target.value :{...post,desc:event.target.value})}
                />
            </div>
            <MyButton title={isEdit ? "Update post" :"Save post"} onClickFn={isEdit ? updatePost : createPost}/>
      </form>
    );
};

export default MyForm;