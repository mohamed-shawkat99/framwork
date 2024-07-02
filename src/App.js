import logo from './logo.svg';
import './App.css';
import Layout from './component/Layout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './component/About/About';
import Home from './component/home/Home';
import Web from './component/Web';
import Mobile from './component/Mobile';
import Contact from './component/contact/Contact';
import Start from './component/start/Start';



let routers=createBrowserRouter([
  {path:``,element:<Layout/> , children:[
    {path:`/` , element:<Start/>},
    {path:`home` , element:<Home/>},
    {path:`about` , element:<About/>,children:[
      {path:`web`,element:<Web/>},
      {path:`mobile`,element:<Mobile/>}
    ]},
    {path:`contact` , element:<Contact/>}
  ]}
]
)



export default function App() {
  return <RouterProvider router={routers}> </RouterProvider>
}

