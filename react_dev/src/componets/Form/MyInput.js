import React from 'react';

const MyInput = (props) => {
    return (
        <div>
            <input {...props} className="m-1"/>
        </div>
    );
};

export default MyInput;