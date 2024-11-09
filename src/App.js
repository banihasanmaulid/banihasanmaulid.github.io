import React from 'react';
import './App.module.scss';
import BaseLayout from "./components/BaseLayout";
import {BrowserRouter} from "react-router-dom";

function App() {
   return (
      <div>
         <BrowserRouter basename="/">
            <BaseLayout/>
         </BrowserRouter>
      </div>
   );
}


export default App;
