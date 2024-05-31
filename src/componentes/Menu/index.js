import MenuLink from "../MenuLink";
import styles from "./Menu.module.css";

const Menu = () => {

  return (
    <header>
      <nav className={styles.navegacao}>
        <MenuLink to={`/`}>
          <span>Inicio</span>
        </MenuLink>
        
        <MenuLink to={`/sobremim`}>
          <span>Sobre Mim</span>
        </MenuLink>
      </nav>
    </header>
  )
}

export default Menu