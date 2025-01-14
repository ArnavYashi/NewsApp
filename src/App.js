import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import{BrowserRouter,Routes,Route} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar'

const App =()=>{
  const pageSize= 5;

  const [progress,setProgress]= useState(0)

    return (
      <div>
        <BrowserRouter>
        <Navbar />
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
        <Routes>
          <Route exact path='/' element={<News setProgress={setProgress}   key="general" pageSize={pageSize} counrty="in"  category="general"/>}></Route>
          <Route exact path='/business' element={<News setProgress={setProgress}   key="business" pageSize={pageSize} counrty="in"  category="business"/>}></Route>
          <Route exact path='/entertainment' element={<News setProgress={setProgress}   key="entertainment" pageSize={pageSize} counrty="in"  category="entertainment"/>}></Route>
          <Route exact path='/health' element={<News setProgress={setProgress}   key="health" pageSize={pageSize} counrty="in"  category="health"/>}></Route>
          <Route exact path='/general' element={<News setProgress={setProgress}   key="general" pageSize={pageSize} counrty="in"  category="general"/>}></Route>
          <Route exact path='/science' element={<News setProgress={setProgress}   key="science" pageSize={pageSize} counrty="in"  category="science"/>}></Route>
          <Route exact path='/sports' element={<News setProgress={setProgress}   key="sports" pageSize={pageSize} counrty="in"  category="sports"/>}></Route>
          <Route exact path='/technology' element={<News setProgress={setProgress}   key="technology" pageSize={pageSize} counrty="in"  category="technology"/>}></Route>
        </Routes>
    </BrowserRouter>
      </div>
    ) 
}

export default App;

