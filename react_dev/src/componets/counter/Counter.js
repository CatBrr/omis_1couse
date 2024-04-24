import React, { useState } from 'react';
import MyButton from '../MyButton/MyButton';
// <MyButton>Click me partner!</MyButton>
const Counter = () => {
    let [clicks,setClicks]=useState(0);
    function increament(){
        console.log('clicked increment');
        setClicks(clicks+=1);
      }
      function decreament(){
        console.log('clicked decrement');
        setClicks(clicks-=1);
      }
      const container={
        display: 'flex',
        flexDirection: 'column', 
        alignItems: 'center'
      }
    return (
        <div div style={ container }>
            <h1 className="m-2">{clicks}</h1>
            <div style={ {display: 'flex', justifyContent: 'space-evenly'} }>
              <MyButton title="+1" onClickFn={increament}/>
              <MyButton title="-1" onClickFn={decreament} />
            </div>
        </div>
    );
};

export default Counter;