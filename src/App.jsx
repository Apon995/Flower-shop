import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Header from "./Components/Header.jsx";
import Home from "./Components/Home.jsx";
import Shop from "./Components/Shop.jsx";
import Cart from "./Components/Cart.jsx";
import NotFound from "./NotFound.jsx";
import "../src/Styles/Main.css";


export default function App() {

  

  const router = createBrowserRouter(
    createRoutesFromElements(
    
        <Route path="/" element={<Header />}>
        <Route index element={<Home />}  loader={()=> fetch('/Shop.json')}  />
        <Route path="/Shop" element={<Shop />} loader={()=> fetch('/Shop.json')} />
        <Route path="/Cart"  element={<Cart />} loader={()=> fetch('/Shop.json')}/>
        <Route path="*" element = {<NotFound/>}/>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    
    </>
  );
}
