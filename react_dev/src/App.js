import React from 'react';
import {BrowserRouter,Route,Routes, Link} from 'react-router-dom'
import About from './pages/About'
import Posts from './pages/Posts'
import Error from './pages/Error'
import PostDetails from './pages/PostDetails'

const App = () => {
    return (
        
        <BrowserRouter>
            <div>
                <Link to='/about'>About</Link>
                <Link to='/posts'>Posts</Link>
            </div>
            <Routes>
                <Route path = '/' element={<Posts/>}></Route>
                <Route path = '/about' element={<About/>}></Route>
                <Route path = '/posts' element={<Posts/>}></Route>
                <Route path = '/postdetails/:id' element={<PostDetails/>}></Route>
                <Route path = '*' element={<Error/>}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;