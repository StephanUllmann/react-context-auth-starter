import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'login'}>Login</NavLink>
          </li>
          <li>
            <NavLink to={'signup'}>Sign Up</NavLink>
          </li>
          <li>
            <NavLink to={'post-stuff'}>Post Stuff</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
