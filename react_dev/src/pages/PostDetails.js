import React from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
    const params = useParams()
    return (
        <div>
            Post details ...{console.log(params)}
        </div>
    );
};

export default PostDetails;