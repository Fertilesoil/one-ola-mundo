import BotaoPrincipal from "componentes/BotaoPrincipal";
import styles from "./NaoEncontrada.module.css";
import erro404 from "assets/erro_404.png";
import { useNavigate } from "react-router-dom";
const {
  conteudoContainer,
  texto404,
  titulo,
  paragrafo,
  botaoContainer,
  imagemCachorro,
  espacoEmBranco } = styles;

const NaoEncontrada = () => {

  return (
    <>
      <div className={conteudoContainer}>
        <span className={texto404}>404</span>

        <h1 className={titulo}>Ops! Página não encontrada.</h1>

        <p className={paragrafo}>
          Tem certeza de que era isso que você estava procurando?
        </p>

        <p className={paragrafo}>
          Aguarde uns instantes e recarregue a página, ou volte para a página inicial.
        </p>

        <div className={botaoContainer}>
          <BotaoPrincipal to={-1} tamanho={`lg`}>
            Voltar
          </BotaoPrincipal>
        </div>

        <img
          className={imagemCachorro}
          src={erro404}
          alt="Cachorro fofo de óculos vestido como humano"
        />
      </div>

      <div className={espacoEmBranco}>

      </div>
    </>
  )
}

export default NaoEncontrada