import styles from "./Rodape.module.css";
import { ReactComponent as MarcaRegistrada } from "assets/marca_registrada.svg";

const Rodape = () => {

  const { rodape } = styles;

  return (
    <footer className={rodape}>
      <MarcaRegistrada />
      <span>Desenvolvido por Alura.</span>
    </footer>
  )
}

export default Rodape