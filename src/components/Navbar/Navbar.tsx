// styles
import './Navbar.css'
// react-router
import { Link, useNavigate } from "react-router-dom"
// icons
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'
// hooks
import { useState } from 'react'



const Navbar = () => {

    const [query, setQuery] = useState<string>("")
    const navigate = useNavigate()

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(!query){
            return
        }

        navigate(`/search?q=${query}`)
        setQuery("")
    }

    return (
        <nav id='navbar'>
            <h2>
                <Link to="/"><BiCameraMovie/> MovieLib</Link>
            </h2>
            <form onSubmit={(e) => handleSearch(e)}>
                <input type="text" placeholder="Busque um filme" value={query} onChange={(e) => setQuery(e.target.value)}/>
                <button type='submit'><BiSearchAlt2/></button>
            </form>
        </nav>
    )
}

export default Navbar