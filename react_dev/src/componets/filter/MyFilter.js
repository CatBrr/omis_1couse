import React, { useRef, useState } from 'react';
import MySelectButton from '../MyButton/MySelectButton';
import MyInput from '../Form/MyInput';

const MyFilter = ({searchPosts,SetselectedSort, sortPosts}) => {

    let [searchWord, SetsearchWord]=useState()
    const searchQuery= useRef()

    const localsearchPosts=()=>{
        console.log(searchQuery.current.value);
        SetsearchWord(searchQuery.current.value);
        console.log(searchWord);
        searchPosts(searchQuery.current.value)
    }
    return (
        <div className='d-flex'>
            <MySelectButton sortPosts={sortPosts} SetselectedSort={SetselectedSort} defaultTitle="Choose filter" options={[
                {title: "title",href:"#/tets"},
                {title: "desc",href:"#/tets"}
            ]}></MySelectButton>
            <MyInput 
                ref={searchQuery}
                type="text"
                value={searchWord}
                placeholder="Search"
                onChange={localsearchPosts}
            ></MyInput>
        </div>
    );
};

export default MyFilter;