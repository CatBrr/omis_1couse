import React, { useState } from 'react';
import MyInput from './MyInput';
import MyButton from '../MyButton/MyButton';

const MyForm = () => {
    const [post,setPost]=useState({title: '', desc: ''})
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
                    onChange={event=>setPost({...post,title:event.target.value})}
                />
            </div>
            <MyButton title="Save item"/>
      </form>
    );
};

export default MyForm;