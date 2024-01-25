import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink 
              to="/"
              className={({isActive}) => 
              isActive ? classes.active : undefined}>Rólam</NavLink>
          </li>
          <li>
            <NavLink
              to="/drbabor"
              className={({isActive}) =>
              isActive ? classes.active : undefined}>Dr Babor</NavLink>
          </li>
          <li>
            <NavLink
              to="/drbaborpro"
              className={({isActive}) =>
              isActive ? classes.active : undefined}>Babor pro</NavLink>
          </li>
          <li>
            <NavLink
              to="/arak"
              className={({isActive}) =>
              isActive ? classes.active : undefined}>Árak</NavLink>
          </li>
          <li>
            <NavLink
              to="/adminandinput"
              className={({isActive}) =>
              isActive ? classes.active : undefined}>Admin</NavLink>
          </li>
          <li>
            <NavLink
              to="/elerhetoseg"
              className={({isActive}) =>
              isActive ? classes.active : undefined}>Elérhetőség</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;