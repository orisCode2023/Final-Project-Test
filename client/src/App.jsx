import './App.css'
import {Routes, Route} from 'react-router';
import Home from './pages/Home'
import AddLauncher from './pages/AddLauncher';
import LauncherDetails from './pages/LauncherDetails';
import DeleteLauncher from './pages/DeleteLauncher';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/newLauncher' element={<AddLauncher />}/>
      <Route path='/deleteLauncher' element={<DeleteLauncher />}/>
      <Route path='/getById' element={<LauncherDetails />}/>
    </Routes>
    </>
  )
}

export default App
