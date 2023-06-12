import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, Easy, Medium, Hard, Error } from './pages';
import { TimerProvider } from './context';

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
    <TimerProvider>
      <RouterProvider router={router} />
    </TimerProvider>
  )
}

export default App
