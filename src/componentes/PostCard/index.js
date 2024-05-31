import BotaoPrincipal from "componentes/BotaoPrincipal";
import styles from "./PostCard.module.css";

const PostCard = ({ id, titulo }) => {
  const { post, capa, titulo: tituloPost } = styles;

  return (
      <div className={post}>
        <img
          className={capa}
          src={`/assets/posts/${id}/capa.png`}
          alt="Imagem de capa do post"
        />

        <h2 className={tituloPost}>{titulo}</h2>

        <BotaoPrincipal to={`/posts/${id}`}>
          Ler
        </BotaoPrincipal>
      </div>
  )
}

export default PostCard