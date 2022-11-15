import React ,{ useState } from 'react'



import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route, 
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



export default function App() {
  const [progress, setProgress]= useState(0)
  
  const Api='059f37684f544bca86554015e0fa5521';
  const Country= 'in'
  const pageSize=12
    return (
      <div>
        <Router>
        <LoadingBar
        color='#f11946'
  
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />
            <Navbar/>
            <Routes>
               <Route   exact path="/"  element=  {<News  setProgress={setProgress} category='general' key="/"  country={Country} pageSize={pageSize}  api={Api}/>}/> 
               <Route   exact path="/general"   element = {<News  setProgress={setProgress}heading='General' category='general' key="/general" country={Country}pageSize={pageSize}  api={Api}/>}/> 
               <Route   exact path="/sports"  element=  {<News  setProgress={setProgress} heading='Sports' category='sports' key='/sports' country={Country}pageSize={pageSize}  api={Api}/>}/> 
               <Route   exact path="/technology"    element=  {<News  setProgress={setProgress}heading='Technology' category='technology' key='/technology' country={Country}pageSize={pageSize}  api={Api}/>}/> 
               <Route   exact path="/entertainment"  element=  {<News  setProgress={setProgress}heading='Entertainment' category='entertainment' key='/entertainment' country={Country}pageSize={pageSize}  api={Api}/>}/> 
               <Route  exact path="/business" element=  {<News  setProgress={setProgress}heading='Business' category='business' country={Country} key='/business'pageSize={pageSize}  api={Api}/>}/> 
               <Route  exact path="/health" element=  {<News  setProgress={setProgress}heading='Health' category='health' country={Country}  key='/health'pageSize={pageSize}  api={Api}/>}/> 
              
              
              
               {/* <Route exact path="/sports">  <News  setProgress={setProgress}category='sports' country={Country}pageSize={pageSize}  api={Api}/>
               <Route exact path="/entertaiment">  <News  setProgress={setProgress}category='entertaiment' country={Country}pageSize={pageSize}  api={Api}/>
               <Route exact path="/technology">  <News  setProgress={setProgress}category='technology' country={Country}pageSize={pageSize}  api={Api}/>
               <Route exact path="/business"> <News  setProgress={setProgress}category='business' country={Country}pageSize={pageSize}  api={Api}/>
               <Route exact path="/health"> <News  setProgress={setProgress}category='health' country={Country}pageSize={pageSize}  api={Api}/> */}
            </Routes>
      </Router>
      </div>
    )
  
}
