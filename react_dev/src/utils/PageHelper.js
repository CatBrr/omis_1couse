import Pagination from 'react-bootstrap/Pagination';
export const getPagesCount=(totalPostsCount, postsOnPage)=>{
    return Math.round(totalPostsCount/postsOnPage)
}
export const getPagesForView=(totalPages,active,SetcurrentPage)=>{
    let result=[]
    for (let index = 1; index <= totalPages; index++) {
        result.push(
            <Pagination.Item 
            key={index} 
            active={index === active}
            onClick={()=>SetcurrentPage(index)}>
              {index}
            </Pagination.Item>)
    }
    return <Pagination>{result}</Pagination>
}