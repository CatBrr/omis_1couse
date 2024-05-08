//import React from 'react';
import axios from 'axios';
class postService{
    static async getServiceResponse(limit = 10, page= 1){
        return await axios.get('https://jsonplaceholder.typicode.com/posts',{
            params:{
                _limit:limit,
                _page:page,
            }
        }).then(response=>{
            console.log(response.headers.get('X-Total-Count'));
            return response
        })
    }
};

export default postService;