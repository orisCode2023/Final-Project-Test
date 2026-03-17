import './App.css'
import {Routes, Route} from 'react-router';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import AddLauncher from './pages/AddLauncher';
import LauncherDetails from './pages/LauncherDetails';
import DeleteLauncher from './pages/DeleteLauncher';
import SearchLauncher from './pages/SearchLauncher';
import Login from './pages/users/Login';
import Register from './pages/users/Register';
import PrivateRoutes from './components/PrivateRoutes';
import AllUsers from './pages/users/AllUsers';
import UpdateUser from './pages/users/UpdateUser';
import Dashboard from './pages/Dashboard';

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

      <Route path='/allUsers' element={<PrivateRoutes usersTypes={['admin']}><UpdateUser/></PrivateRoutes>}/>

      <Route path='/updateUser' element={<PrivateRoutes usersTypes={['admin']}><AllUsers/></PrivateRoutes>}/>

      <Route path='/dashboard' element={<PrivateRoutes usersTypes={['admin']}><Dashboard/></PrivateRoutes>}/>
    </Routes>
    </>
  )
}

export default App
