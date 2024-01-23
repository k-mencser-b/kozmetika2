import { NavLink } from "react-router-dom";
import classes from "./BaborNavigation.module.css";

function BaborNavigation() {
    return (
        <header className={classes.header}>
        <nav>
            <ul className={classes.list}>
            
                <li>
                    <NavLink
                        to="drbabor/drbabor1"
                        className={({isActive}) =>
                        isActive ? classes.active : undefined}>Dr Babor 1</NavLink>
                </li>
                <li>
                    <NavLink
                        to="drbabor/drbabor2"
                        className={({isActive}) =>
                        isActive ? classes.active : undefined}>Dr Babor 2</NavLink>
                </li>
                <li>
                    <NavLink
                        to="drbabor/drbabor3"
                        className={({isActive}) =>
                        isActive ? classes.active : undefined}>Dr Babor 3</NavLink>
                </li>
            </ul>
        </nav>
        </header>
    );
}

export default BaborNavigation;