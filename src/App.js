//import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter, createRoutesFromElements,Route,RouterProvider} from 'react-router-dom';

import Dashboard from './components/Dashboard';
import RootLayout from './components/RootLayout';
import Library from './components/Library';
function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Dashboard />}></Route>
      <Route path="/library" element={<Library />}></Route>
    </Route>
  ))
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
