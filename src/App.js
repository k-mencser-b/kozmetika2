import Header from './components/Header/Header';
import './App.css';
import { Fragment } from 'react';
import Rolam from './pages/Rolam';
import Footer from './components/Footer/Footer';
import Arak from './pages/Arak';
import Elerhetoseg from './pages/Elerhetoseg';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './pages/Root';
import DrBabor from './pages/DrBabor';
import DrBaborPro from './pages/DrBaborPro';
import BaborPageRoot from './pages/BaborPageRoot';
import DrBabor1 from './pages/DrBabor1';
import DrBabor2 from './pages/DrBabor2';
import DrBabor3 from './pages/DrBabor3';
import AdminAndInput from './pages/AdminAndInput';


const router = createBrowserRouter([
  {
    path: '/',
    element:<Root/>,
    children: [
      {path: '/', element: <Rolam/>},
      {path: '/drbabor', 
       element:<BaborPageRoot/>,
         children: [
          {index: '/', element: <DrBabor/>},
          {path: 'drbabor/drbabor1', element:<DrBabor1/>},
          {path: 'drbabor/drbabor2', element:<DrBabor2/>},
          {path: 'drbabor/drbabor3', element:<DrBabor3/>}
         ]
       
      },
      {path: '/drbaborpro', element:<DrBaborPro/>},
      {path: '/arak', element: <Arak/>},
      {path: '/adminandinput', element:<AdminAndInput/>},
      {path: '/elerhetoseg', element: <Elerhetoseg/>}
    ]
  }
])

function App() {
  return (
    <>
    <Header/>
    <RouterProvider router={router}/>
    <Footer/>
    </>
  );
}

export default App;
