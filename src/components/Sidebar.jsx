import PropTypes from "prop-types";
import "../styles/Sidebar.css";


const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
            <button className="close-sidebar" onClick={toggleSidebar}>
                Cerrar
            </button>
            <ul className="sidebar-list">
                <li className="sidebar-item" id="home">Home</li>
                <li className="sidebar-item" id="about">About</li>
                <li className="sidebar-item" id="services">Services</li>
                <li className="sidebar-item" id="contact">Contact</li>
            </ul>
        </div>
    );
};

Sidebar.propTypes = {
    isOpen: PropTypes.bool,
    toggleSidebar: PropTypes.func
}

export default Sidebar;
