import './style.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MasterDetail from './pages/master-detail/MasterDetail';
import Home from './pages/home/Home';

function App() {
  // create routes
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/details/:id',
      element: <MasterDetail />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
