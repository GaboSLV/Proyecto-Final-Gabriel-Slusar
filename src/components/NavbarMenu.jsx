import {React} from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar-menu.scss';


function NavbarMenu() {
    return (
        <div className="navigation">
            <div className="navigation__wrapper">
                <Link to='/' className="navigation__item" style={{textDecoration: 'none'}} id='authengtic'><p className='item__text'>Todo</p></Link>
                <Link to='/category/graficas' className="navigation__item" style={{textDecoration: 'none'}} id='graficas'><p className='item__text'>Gráficas</p></Link>
                <Link to='/category/procesadores' className="navigation__item" style={{textDecoration: 'none'}} id='procesadores'><p className='item__text'>Procesadores</p></Link>
            </div>
        </div>
    )
}

export default NavbarMenu;