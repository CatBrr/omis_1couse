import React from 'react';
import MyButton from '../MyButton/MyButton';
import post_style from './post.module.css'
import MyModal from '../MyModal';
import MyForm from '../Form/MyForm';
import { Link } from 'react-router-dom';
//                <MyButton title='edit' color="warning" onClickFn={()=> editPostFn(post)}/>
const PostItem = ({post, index,deletePostFn, editPostFn}) => {
    return (
        <div className='d-flex justify-content-between border border-secondary rounded m-1'>
            <div className={post_style.postTitle}>{post.id}  {post.title}</div>
            <div className={post_style.postDescription }>{post.body}</div>
            <div className='d-flex'>
                <Link to={'/postdetails/'+post.id} className='btn btn-warning m-1'>Post Details</Link>
                <MyModal ModalTitle="Edit post"><MyForm editPost={editPostFn} post_old={post} isEdit={true}/></MyModal>
                <MyButton title='Delete post' color="danger" onClickFn={()=> deletePostFn(post)}/>
            </div>
        </div>
    );
};

export default PostItem;