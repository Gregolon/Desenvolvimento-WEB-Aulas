import './App.css'
import Header from "./components/Header";

export default function App() {
  const qtdPosts = 16;
  const possuiAssinatura = false;
    
  return(
    <main id="container">
        <Header 
                habilitado={possuiAssinatura} 
                quantidadePosts={qtdPosts}/>
      <section>
        <h1>Nossos Ultimos posts</h1>
        <article>
          <h1>Flamengo 2x1 Curintia</h1>
          <p>Nos 45 do segundo tempo</p>
        </article>
        <article>
          <h1>Flamengo 2x1 Curintia</h1>
          <p>Nos 45 do segundo tempo</p>
        </article>
        <article>
          <h1>Flamengo 2x1 Curintia</h1>
          <p>Nos 45 do segundo tempo</p>
        </article>
        <article>
          <h1>Flamengo 2x1 Curintia</h1>
          <p>Nos 45 do segundo tempo</p>
        </article>
        <article>
          <h1>Flamengo 2x1 Curintia</h1>
          <p>Nos 45 do segundo tempo</p>
        </article>
        </section>
    </main>
  )
}