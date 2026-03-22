import './App.css'
import { Routes, Route } from 'react-router';
import Navbar from './components/Navbar';
import PrivateRoutes from './components/PrivateRoutes';
import Home from './pages/launchers/Home'
import Dashboard from './pages/users/Dashboard';
import AddLauncher from './pages/launchers/AddLauncher';
import LauncherDetails from './pages/launchers/LauncherDetails';
import DeleteLauncher from './pages/launchers/DeleteLauncher';
import SearchLauncher from './pages/launchers/SearchLauncher';
import Login from './pages/users/Login';
import Register from './pages/users/Register';
import AllUsers from './pages/users/AllUsers';
import UpdateUser from './pages/users/UpdateUser';
import DeleteUser from './pages/users/DeleteUser';

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/home' element={<PrivateRoutes usersTypes={['admin', 'airForce', 'intelligence' ]}><Home/></PrivateRoutes>}/>

      <Route path='/newLauncher' element={<PrivateRoutes usersTypes={['admin', , 'intelligence' ]}><AddLauncher/></PrivateRoutes>}/>

      <Route path='/deleteLauncher' element={<PrivateRoutes usersTypes={['admin', , 'intelligence' ]}><DeleteLauncher/></PrivateRoutes>}/>

      <Route path='/getById' element={<PrivateRoutes usersTypes={['admin', 'airForce', 'intelligence' ]}><LauncherDetails/></PrivateRoutes>}/>

      <Route path='/' element={<Login/>}/>

      <Route path='/register' element={<PrivateRoutes usersTypes={['admin']}><Register/></PrivateRoutes>}/>

      <Route path='/searchLauncher' element={<PrivateRoutes usersTypes={['admin', 'airForce', 'intelligence' ]}><SearchLauncher/></PrivateRoutes>}/>

      <Route path='/allUsers' element={<PrivateRoutes usersTypes={['admin']}><AllUsers/></PrivateRoutes>}/>

      <Route path='/updateUser' element={<PrivateRoutes usersTypes={['admin']}><UpdateUser/></PrivateRoutes>}/>

      <Route path='/deleteUser' element={<PrivateRoutes usersTypes={['admin']}><DeleteUser/></PrivateRoutes>}/>

      <Route path='/dashboard' element={<PrivateRoutes usersTypes={['admin']}><Dashboard/></PrivateRoutes>}/>
    </Routes>
    </>
  )
}

export default App
