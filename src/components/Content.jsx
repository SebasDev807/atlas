import PropTypes from "prop-types";
import { MdHelp } from "react-icons/md";
import driver from "../utils/driver";



const Content = ({ toggleSidebar }) => {

  const handleHelpButton = () => {
    toggleSidebar();
  

    driver.drive()
  }

  return (

    <div className="content">

      <div className="content-info">
        <section className="content-titles">
          <h1 className="titulo">Atlas</h1>
          <h3>Un rio Cauca, muchos mundos</h3>
        </section>
        <p>Abrochen sus cinturones que vamos a transicionar</p>

        <section className="content-buttons">
          <button
            className="atlas-button-explorar"
          >
            Explorar
          </button>
          <MdHelp color='#32CD32' size="4rem" onClick={() => handleHelpButton()} />
        </section>
      </div>


    </div>
  )
}

Content.propTypes = {
  toggleSidebar: PropTypes.func,
  isSidebarOpen: PropTypes.bool
}

export default Content;