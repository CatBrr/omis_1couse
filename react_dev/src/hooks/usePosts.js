export const UsesortedPosts = (selectedSort,posts) =>{
    if (selectedSort) {
        return   setPosts([...posts].sort((a,b)=>a[selectedSort].localeCompare(b[selectedSort])))
    }
}
export const UsesearchPosts=(word,posts,selectedSort)=>{
    const sortedPosts = UsesortedPosts(selectedSort,posts)
    if(word===undefined){
      return posts
    }
    else{
      console.log('searching...',word);
      return sortedPosts.filter(p=> p.title.toLowerCase().includes(word.toLowerCase().trim()))
    }
}
