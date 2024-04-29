import React from 'react';
import PostItem from './PostItem';

const PostList = ({posts, deleteFn,editFn}) => {
    return (
        <div>
            {
                posts.map((post,index) =><PostItem post={post} key={index} index={index} deletePostFn={deleteFn} editPostFn={editFn}/>)
            }
        </div>
    );
};

export default PostList;