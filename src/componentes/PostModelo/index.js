import styles from "./PostModelo.module.css";
const {
  postModeloContainer,
  fotoCapa: foto,
  titulo: nome,
  postConteudoContainer } = styles;

const PostModelo = ({ fotoCapa, titulo, children }) => {

  return (
    <article className={postModeloContainer}>
      <div
        className={foto}
        style={{ backgroundImage: `url(${fotoCapa})` }}
      ></div>

      <h2 className={nome}>{titulo}</h2>

      <div className={postConteudoContainer}>{children}</div>
    </article>
  )
}

export default PostModelo