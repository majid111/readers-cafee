import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import ListedBooks from './Components/Listed Books/ListedBooks';
import PagesToRead from './Components/PagesToRead/PagesToRead';
import LoadedData from './Components/LoadedData/LoadedData';
import WishlistBooks from './Components/WishlistBooks/WishlistBooks';
import ReadBooks from './Components/ReadBooks/ReadBooks';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import BookDetails from './Components/BookDetails/BookDetails';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        loader: () => fetch('Books.json'),
        element: <LoadedData></LoadedData>,
      },
      {
        path: "/ListedBooks",
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            path: "/ListedBooks/ReadBooks",
            element: <ReadBooks></ReadBooks>,
          },
          {
            path: "/ListedBooks/WishlistBooks",
            element: <WishlistBooks></WishlistBooks>,
          },
        ]
      },
      {
        path: "/PagesToRead",
        element: <PagesToRead></PagesToRead>,
      },
      {
        path: "/bookDetails/:id",
        element: <BookDetails></BookDetails>,
      },
      // {
      //   path:'/user/:userId',
      //   loader: ({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
      //   element:<UserDetails></UserDetails>,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
