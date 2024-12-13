import PropTypes from 'prop-types';
import Logo from '../assets/logo.png';
import { MdDehaze } from "react-icons/md";

const Header = ({ toggleSidebar }) => {
    return (
        <header className='header'>
            <a href="#">
                <img src={Logo} className='logo' />
            </a>

            <MdDehaze id="boton-desplegar"color='#32CD32' size="3rem" onClick={toggleSidebar} />

        </header>
    )
}

Header.propTypes = {
    toggleSidebar: PropTypes.func
}

export default Header