// styles
import './Navbar.css'
// react-router
import { Link } from "react-router-dom"
// icons
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'


type Props = {}

const Navbar = (props: Props) => {

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <nav id='navbar'>
            <Link to="/"><BiCameraMovie/> MovieLib</Link>
            <form className="search" onSubmit={(e) => handleSearch(e)}>
                <input type="text" placeholder="Busque um filme"/>
                <button type='submit'><BiSearchAlt2/></button>
            </form>
        </nav>
    )
}

export default Navbar