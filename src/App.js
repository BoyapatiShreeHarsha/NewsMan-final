
import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const  App = ()=> {
  
  const api="pub_16674f1e14af5408d35290ec49dec43f0865e";
  const [progress, setProgress] = useState(0)
  
    return (
      <div>
        <BrowserRouter>
          <LoadingBar
            color='#f11946'
            height={3}
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
          />
          <Navbar />

          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} api={api}  key="1"  country={"in"} category={"top"} colour={"primary"} />} />
            <Route exact path="/business" element={<News setProgress={setProgress} api={api} key="2"  country={"in"} category={"business"} colour={"secondary"} />} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} api={api} key="3"  country={"in"} category={"entertainment"} colour={"success"} />} />
            <Route exact path="/environment" element={<News setProgress={setProgress} api={api} key="3"  country={"in"} category={"environment"} colour={"danger"} />} />
            <Route exact path="/food" element={<News setProgress={setProgress} api={api} key="3"  country={"in"} category={"food"} colour={"warning"} />} />
            <Route exact path="/politics" element={<News setProgress={setProgress} api={api} key="3"  country={"in"} category={"politics"} colour={"info"} />} />
            <Route exact path="/world" element={<News setProgress={setProgress} api={api} key="3"  country={"in"} category={"world"} colour={"light"} />} />
            <Route exact path="/health" element={<News setProgress={setProgress} api={api} key="4"  country={"in"} category={"health"} colour={"dark"} />} />
            <Route exact path="/science" element={<News setProgress={setProgress} api={api} key="5"  country={"in"} category={"science"} colour={"primary"} />} />
            <Route exact path="/sports" element={<News setProgress={setProgress} api={api} key="6"  country={"in"} category={"sports"} colour={"secondary"} />} />
            <Route exact path="/technology" element={<News setProgress={setProgress} api={api} key="7"  country={"in"} category={"technology"} colour={"success"} />} />
          </Routes>
        </BrowserRouter>
      </div>

    )
  
}

export default App;
