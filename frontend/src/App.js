import './App.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from './component/Login';
import Chat from './component/Chat';

function App() {
  const Router = createBrowserRouter([
    {
      path: '/',
      element:<Login/>
    },
    {
      path: '/chat',
      element:<Chat/>
    }
  ])
  return (
    <div>
      <RouterProvider router={Router}/>
    </div>
  );
}

export default App;
