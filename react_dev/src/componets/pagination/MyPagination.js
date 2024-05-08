import React from 'react';
import {getPagesCount, getPagesForView} from '../../utils/PageHelper'

const MyPagination = ({totalPostsCount=10,postsOnPage=15,active=4,SetcurrentPage}) => {
    let pages=getPagesCount(totalPostsCount,postsOnPage)
    //let pages=10
    console.log(totalPostsCount+' pages '+postsOnPage)
    return (
        <div>
            {
                getPagesForView(pages,active ,SetcurrentPage)
            }
        </div>
    );
};

export default MyPagination;