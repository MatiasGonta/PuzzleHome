import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, Easy, Medium, Hard, Error } from './pages';

export interface AppInterface {}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: '/Easy',
    element: <Easy />
  },
  {
    path: '/Medium',
    element: <Medium />
  },
  {
    path: '/Hard',
    element: <Hard />
  }
]);

const App:React.FC<AppInterface> = () => {

  return (
    <RouterProvider router={router} />
  )
}

export default App
