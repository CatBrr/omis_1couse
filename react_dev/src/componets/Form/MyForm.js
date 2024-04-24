import React, { useState } from 'react';
import MyInput from './MyInput';
import MyButton from '../MyButton/MyButton';

const MyForm = () => {
    const [post,setPost]=useState({title: '', desc: ''})
    function createPost(){
        posts.push({title: 'Post 1', desc: 'description 1'});
        setPosts({posts});
    }
    return (

        <form>
            <div className='d-flex'>
                <MyInput 
                    type='text'
                    placeholder='Insert title'
                    value={post.title}
                    onChange={event=>setPost({...post,title:event.target.value})}
                />
                <MyInput 
                    type='text'
                    placeholder='Insert description'
                    value={post.desc}
                    onChange={event=>setPost({...post,desc:event.target.value})}
                />
            </div>
            <MyButton title="Save item"/>
      </form>
    );
};

export default MyForm;