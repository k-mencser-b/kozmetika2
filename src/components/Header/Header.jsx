import { Fragment } from 'react';
import classes from './Header.module.css';
import logoimage from '../../Assets/header.jpg';

const Header = () => {
    return (
<Fragment>
    <div className={classes.image}>
        <img src={logoimage} alt='logoimage'></img>
    </div>
</Fragment>
    );
};

export default Header;