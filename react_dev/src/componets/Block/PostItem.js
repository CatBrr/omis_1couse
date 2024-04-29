import React from 'react';
import MyButton from '../MyButton/MyButton';
import post_style from './post.module.css'
import MyModal from '../MyModal';
import MyForm from '../Form/MyForm';

const PostItem = ({post, index,deletePostFn, editPostFn}) => {
    return (
        <div className='d-flex justify-content-between border border-secondary rounded m-1'>
            <div className={post_style.postTitle}>{index +1}  {post.title}</div>
            <div className={post_style.postDescription }>{post.desc}</div>
            <div className='d-flex'>
                <MyButton title='edit' color="warning" onClickFn={()=> editPostFn(post)}/>
                <MyModal ModalTitle="Edit post"><MyForm editPosts={editPostFn}/></MyModal>
                <MyButton title='delete' color="danger" onClickFn={()=> deletePostFn(post)}/>
            </div>
        </div>
    );
};

export default PostItem;