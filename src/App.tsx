// styles
import './App.css'
// react-router
import { Link, Outlet } from 'react-router-dom'
// components
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default App
