//import React from 'react';
import axios from 'axios';
class postService{
    static async getAll(){
        return await axios.get('https://jsonplaceholder.typicode.com/posts').then(response=>{
            console.log(response.data);
            return response.data
        })
    }
};

export default postService;