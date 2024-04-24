import React from 'react';
import MyButton from '../MyButton/MyButton';
import post_style from './post.module.css'

const PostItem = ({post, index}) => {
    return (
        <div className='d-flex justify-content-between border border-secondary rounded m-1'>
            <div className={post_style.postTitle}>{index +1}  {post.title}</div>
            <div className={post_style.postDescription }>{post.desc}</div>
            <div className='d-flex'>
                <MyButton title='edit'/>
                <MyButton title='delete'/>
            </div>
        </div>
    );
};

export default PostItem;