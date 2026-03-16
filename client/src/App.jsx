import './App.css'
import {Routes, Route} from 'react-router';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import AddLauncher from './pages/AddLauncher';
import LauncherDetails from './pages/LauncherDetails';
import DeleteLauncher from './pages/DeleteLauncher';
import SearchLauncher from './pages/SearchLauncher';

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/newLauncher' element={<AddLauncher />}/>
      <Route path='/deleteLauncher' element={<DeleteLauncher />}/>
      <Route path='/getById' element={<LauncherDetails />}/>
      <Route path='/searchLauncher' element={<SearchLauncher/>}/>
    </Routes>
    </>
  )
}

export default App
