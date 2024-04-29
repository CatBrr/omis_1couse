import React from 'react';

const MyInput = React.forwardRef((props, ref) => {
    return (
        //
        <div>
            <input ref={ref} {...props} className="m-1"/>
        </div>
    );
})

export default MyInput;