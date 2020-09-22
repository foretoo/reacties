import { h } from 'preact'
import { Link } from 'react-router-dom'
import './css/header.css'

const Header = () => {
  return (
    <nav class='navigation'>
      <Link to='/'>boo§+o</Link>
      <Link to='/cart'>Cart</Link>
    </nav>
  )
}

export default Header
