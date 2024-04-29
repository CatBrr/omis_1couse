import React, { useRef, useState } from 'react';
import MyInput from './MyInput';
import MyButton from '../MyButton/MyButton';

const MyForm = ({savePosts}) => {
    const [post,setPost]=useState({title: '', desc: ''})
    const titleRef= useRef()
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
    return (

        <form>
            <div className='d-flex'>
                <MyInput 
                    type='text'
                    ref={titleRef}
                    placeholder='Insert title'
                    value={post.title}
                    onChange={event=>setPost({...post,title:event.target.value})}
                />
                <MyInput 
                    type='text'
                    ref={descRef}
                    placeholder='Insert description'
                    value={post.desc}
                    onChange={event=>setPost({...post,desc:event.target.value})}
                />
            </div>
            <MyButton title="Save item" onClickFn={createPost}/>
      </form>
    );
};

export default MyForm;