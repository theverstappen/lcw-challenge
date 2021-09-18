import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { RouterConfig } from "./navigation/RouterConfig";
import { checkLocalStorage } from './redux/product'
import { useDispatch } from "react-redux";
import './App.scss';

 
function App() {
  const dispatch = useDispatch()		
  useEffect(() => {
    dispatch(checkLocalStorage());
}, [dispatch])

  return (
    <>
        <BrowserRouter>
          <RouterConfig />
        </BrowserRouter>
    </>
  );
}

export default App;
