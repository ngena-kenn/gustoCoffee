import React from 'react';
import ContainerPage from './components/containerPage/containerPage';
import Footer from './components/Footer/footer';
import { desserts } from './data';
import{ Routes, Route} from "react-router-dom";

function App() {
  return (
  <div >
     <body>
        
        <Routes>
          <Route path="/" element={<div />} />
          <Route path="/Home" element={<div />} />
        </Routes>
    </body>
  </div>
  )
}

export default App;
