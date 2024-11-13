import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav>
    <Link className='menu-btn' to="/">Home</Link>
    <div className="dropdown-menu">
      <button className="menu-btn">Products</button>
      <div className="menu-content">
        <Link className='links-hidden' to="/food">Food Products</Link>
        <Link className='links-hidden' to="/skin">Skin Care</Link>
        <Link className='links-hidden' to="/handcrafts">Hand Crafts</Link>
      </div>
    </div>
    <Link className='menu-btn' to="/profile">Profile</Link> {/* Update here */}
    <Link className='menu-btn' to="/contact">Contact</Link>
  </nav>
);

export default Navbar;
