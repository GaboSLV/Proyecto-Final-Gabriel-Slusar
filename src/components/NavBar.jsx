import {React, useState} from 'react';
import {Link} from 'react-router-dom';
import CartWidget from './CartWidget';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '../styles/navbar.scss';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NavbarMenu from './NavbarMenu';


export function NavBar() {
    const [status, setStatus] = useState(false);

    function toggleStatus() {
        if(status === false) {
            setStatus(true);
        }else {
            setStatus(false);
        }
    }


    return(
        <>
        <header className="header">
            <div className='header__logo'>
                <Link to='/' className="header__logo-text">VIBES</Link>
            </div>
            <nav className="header__nav">
                <div className="nav__list">
                    <Link to='/category/procesadores' style={{textDecoration: 'none'}}>Procesadores</Link>
                    <Link to='/category/graficas' style={{textDecoration: 'none'}}>Gráficas</Link>
                </div>
                <div className="nav__menu">
                    <FontAwesomeIcon icon={faBars} className='menu__hamburger' onClick={toggleStatus}/>
                </div>
                <div className="nav__cart">
                    <Link to='/cart' className='nav__cartwidget' style={{textDecoration: 'none'}}><CartWidget/></Link>
                </div>
            </nav>
        </header>
        {status && <NavbarMenu/> }
        </>
    )
}

export default NavBar;