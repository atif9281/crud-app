import './App.css';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Getbooks from './components/getAllBooks/Getbooks';
import Add from './components/addBooks/Add';
import Edit from './components/updateBook/Edit';

function App() {

  const route = createBrowserRouter([
    {
      path:"/",
      element: <Getbooks/>,
    },
    {
      path:"/add",
      element: <Add/>,
    },
    {
      path:"/edit/:id",
      element: <Edit/>,
    },
  ])

  return (
    <div className="App">
       <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
