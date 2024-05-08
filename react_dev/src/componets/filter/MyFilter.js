import React, { useRef, useState } from 'react';
import MySelectButton from '../MyButton/MySelectButton';
import MyInput from '../Form/MyInput';

const MyFilter = ({filter, SetFilter}) => {

    const searchQuery= useRef()

    return (
        <div className='d-flex'>
            <MySelectButton  setFilter={SetFilter} defaultTitle="Choose filter" options={[
                {title: "title",href:"#/tets"},
                {title: "body",href:"#/tets"}
            ]}></MySelectButton>
            <MyInput 
                ref={filter.searchQuery}
                type="text"
                value={filter.searchWord}
                placeholder="Search"
                onChange={event => SetFilter({...filter, searchWord: event.target.value})}
            ></MyInput>
        </div>
    );
};

export default MyFilter;