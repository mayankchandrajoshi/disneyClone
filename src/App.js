import React from 'react';
import Home from './components/Home'
import Header from './components/Header'
import Details  from './components/Details';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import ProtectedRoutes from './components/ProtectedRoutes';

function App() {
  return (
    <div>
    <Router>
      <Header/>
      <Routes>
      <Route path='/login' element={<Login/>}/>
        <Route element={<ProtectedRoutes/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/details:id' element={<Details/>}/>
        </Route>
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;