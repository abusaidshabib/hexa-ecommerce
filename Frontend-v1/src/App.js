import { RouterProvider } from 'react-router-dom';
import './App.css';
import UserContext from './Context/UserContext/UserContext';
import router from './router/routes/routes';

function App() {
  return (
    <div className='App'>
      <UserContext>
        <RouterProvider router={router}></RouterProvider>
      </UserContext>
    </div>
  );
}

export default App;
