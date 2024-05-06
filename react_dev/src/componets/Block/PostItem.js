import React from 'react';
import MyButton from '../MyButton/MyButton';
import post_style from './post.module.css'
import MyModal from '../MyModal';
import MyForm from '../Form/MyForm';
//                <MyButton title='edit' color="warning" onClickFn={()=> editPostFn(post)}/>
const PostItem = ({post, index,deletePostFn, editPostFn}) => {
    return (
        <div className='d-flex justify-content-between border border-secondary rounded m-1'>
            <div className={post_style.postTitle}>{index +1}  {post.title}</div>
            <div className={post_style.postDescription }>{post.body}</div>
            <div className='d-flex'>
                <MyModal ModalTitle="Edit post"><MyForm editPost={editPostFn} post_old={post} isEdit={true}/></MyModal>
                <MyButton title='delete' color="danger" onClickFn={()=> deletePostFn(post)}/>
            </div>
        </div>
    );
};

export default PostItem;