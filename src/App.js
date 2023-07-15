import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Main/Main';
import Home from './Pages/Home/Home';
import NID from './Pages/Verification/NID/NID';
import VerificationInfo from './Pages/Verification/VerificationInfo';
function App() {

   const router = createBrowserRouter([
     {
       path: "/",
       element: <Main />,
       children: [
         {
           path: "/",
           element: <Home />,
         },
         {
           path: "/Home",
           element: <Home />,
         },
         {
           path: '/Accounts',
           element: <VerificationInfo/>
         },
         {
           path: "/nid-verify",
           element: <NID />,
         },
       ],
     },
   ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
