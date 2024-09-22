import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/shared/Layout.jsx';
import Dashboard from './components/Dashboard.jsx';
import Products from './components/Products.jsx';
import Notfound from './components/Notfound.jsx';
import Users from './components/Users.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
         <Route index element={<Dashboard/>}/>
         <Route path='users' element={<Users/>}/>
         <Route path='virtual_machines' element={<Products/>}/>
         <Route path='*' element={<Notfound/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

