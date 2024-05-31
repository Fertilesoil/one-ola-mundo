import { Route, Routes, useParams } from "react-router-dom";
import posts from "json/posts.json";
import ReactMarkdown from 'react-markdown'
import "./Post.css";
import styles from "./Post.module.css";

import PostModelo from "componentes/PostModelo";
import NaoEncontrada from "paginas/NaoEncontrada";
import PaginaPadrao from "componentes/PaginaPadrao";
import PostCard from "componentes/PostCard";

const Post = () => {
  const { tituloOutrosPosts, postsRecomendados } = styles;

  const { id } = useParams();

  const post = posts.find(post => post.id === Number(id));

  if (!post) {
    return <NaoEncontrada />
  }

  const recomendados = posts
    .filter(post => post.id !== Number(id))
    .sort((a, b) => b.id - a.id)
    .slice(0, 4);

  return (
    <Routes>
      <Route path="*" element={<PaginaPadrao />}>

        <Route index element={
          <PostModelo
            titulo={post.titulo}
            fotoCapa={`/assets/posts/${id}/capa.png`}
          >

            <div className="post-markdown-container">
              <ReactMarkdown>
                {post.texto}
              </ReactMarkdown>
            </div>

            <h2 className={tituloOutrosPosts}>Outros posts que você pode gostar: </h2>

            <ul className={postsRecomendados}>
              {recomendados.map(post => (
                <li key={post.id}>
                  <PostCard id={post.id} titulo={post.titulo} />
                </li>
              ))}
            </ul>
          </PostModelo>
        } />
      </Route>
    </Routes>

  )
}

// function RecheioPost({ post, id }) {
//   return (
//     <PostModelo
//       titulo={post.titulo}
//       fotoCapa={`/assets/posts/${id.id}/capa.png`}
//     >

//       <div className="post-markdown-container">
//         <ReactMarkdown>
//           {post.texto}
//         </ReactMarkdown>
//       </div>

//     </PostModelo>
//   )
// }

export default Post