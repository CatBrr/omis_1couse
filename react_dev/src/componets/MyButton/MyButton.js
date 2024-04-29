import React from 'react';
import Button from 'react-bootstrap/esm/Button';

const MyButton = ({onClickFn, ...props}) => {
    /*          <button 
    className="btn btn-primary m-2" 
    
></button>*/
   // console.log(props,onClick);
   const btnColor=props.color
    return (
        <div>
            <Button
                className='m-1'
                variant={btnColor}
                onClick={onClickFn}
            >
                {props.title}
            </Button>
        </div>
    );
};

export default MyButton;