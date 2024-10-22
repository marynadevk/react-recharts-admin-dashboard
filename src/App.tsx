import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/global.scss';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/home/Home';
import { Product } from './pages/product/Product';
import { Products } from './pages/products/Products';
import { User } from './pages/user/User';
import { Login } from './pages/login/Login';
import { Users } from './pages/users/Users';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/users',
          element: <Users />,
        },
        {
          path: '/products',
          element: <Products />,
        },
        {
          path: '/users/:id',
          element: <User />,
        },
        {
          path: '/products/:id',
          element: <Product />,
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
