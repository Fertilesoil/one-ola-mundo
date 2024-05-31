﻿import { Link } from "react-router-dom";
import styles from "./BotaoPrincipal.module.css";

const BotaoPrincipal = ({ to, children, tamanho }) => {
  return (
    <Link
      to={to}
      className={`${styles.botaoPrincipal} ${styles[tamanho]}`}
    >
      {children}
    </Link>
  )
}

export default BotaoPrincipal