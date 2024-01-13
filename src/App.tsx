import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Error } from './pages';
import { TimerProvider } from './context';
import { lazy, Suspense } from 'react';
import { LoadingSpinner } from './components';

const Home = lazy(() => import('./pages/Home/Home.tsx'));
const PuzzlePage = lazy(() => import('./pages/PuzzlePage/PuzzlePage.tsx'));

export interface AppInterface {}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: '/:puzzleSlug',
    element: <PuzzlePage />
  }
]);

const App: React.FC<AppInterface> = () => {

  return (
    <TimerProvider>
      <Suspense fallback={<LoadingSpinner />}>
        <RouterProvider router={router} />
      </Suspense>
    </TimerProvider>
  )
}

export default App
