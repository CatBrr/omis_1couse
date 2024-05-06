import React from 'react';
import PostItem from './PostItem';
import Alert from 'react-bootstrap/Alert';
import {CSSTransition, TransitionGroup,} from 'react-transition-group';
import './style.css'

const PostList = ({posts, deleteFn,editFn}) => {
    if (posts.length===0)
    return <Alert className='m-2' variant='info'>no info found</Alert>
    return (
        <div>
            <TransitionGroup className="posts">

            {
                posts.map((post,index) =>
                <CSSTransition
                    key={index*index}
                    timeout={500}
                    classNames="postItem"
                > 
                    <PostItem post={post} key={index} index={index} deletePostFn={deleteFn} editPostFn={editFn}/>
                </CSSTransition>)
            }
            </TransitionGroup>
        </div>
    );
};

export default PostList;