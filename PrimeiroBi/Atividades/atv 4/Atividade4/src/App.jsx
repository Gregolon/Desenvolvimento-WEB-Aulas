import './psp.css';

import Header from './components/Header';
import Navigation from './components/Navigation';
import Article from './components/Article';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  // Objeto de dados exigido no escopo
  const artigoPSP = {
    titulo: "O ÍCONE DO ENTRETENIMENTO PORTÁTIL.",
    autor: "Equipe PSP Legacy",
    data: "02 de Outubro, 2026",
    conteudo: "Revisite a história, explore os jogos e mergulhe na comunidade do lendário SONY PSP."
  };

  return (
    <div className="App">
      
      {/* Header e Navigation dentro da tag <header> para manter o Flexbox do CSS */}
      <header>
        <Header />
        <Navigation />
      </header>

      {/* Estrutura principal do seu HTML */}
      <div className="Estrutura">
        <main>
          <h1>PSP ARCHIVE</h1>

          <section className="Destaque">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ5t4dnwBqmKMLry94yLEGr8uaUd4OiZJdbdDUqso06A&s=10" 
              alt="Console PSP preto" 
            />
          </section>

          <section className="Video">
            <h2>Vídeo em Destaque: PSP Como Você NUNCA VIU!</h2>
            <div className="Moldura">
              <iframe 
                src="https://www.youtube.com/embed/FYdffn1m0sQ?si=kp7A0xijvi6I2wJq" 
                title="Vídeo PSP" 
                allowFullScreen
              ></iframe>
            </div>
          </section>

          <section className="Corpo">
            {/* Artigo alimentado dinamicamente pelas props */}
            <Article dados={artigoPSP} />

            <div className="Grade">
              <div className="Cartao">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd02ueydsJ6qODeamdu0H2RA8GIKxPyLym7WLapz4FDQ&s=10" alt="Capa Final Fantasy VII Crisis Core" />
                <h3>FINAL FANTASY VII: Crisis Core</h3>
                <span className="Nota">⭐ 4.5</span>
              </div>

              <div className="Cartao">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz3-ZfQPwV9YtbHX2CN0qCGbeFRC3quOd5a1v0hfEP7w&s=10" alt="Capa Monster Hunter Freedom Unite" />
                <h3>Monster Hunter Freedom Unite</h3>
                <span className="Nota">⭐ 4.0</span>
              </div>

              <div className="Cartao">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ObVFa-dxVD-LXd-ubUukTrqGZ4hvENKUBBZpGnwuQw&s=10" alt="Capa Lumines" />
                <h3>God of War: Ghost of Sparta</h3>
                <span className="Nota">⭐ 4.6</span>
              </div>
            </div>
          </section>
        </main>

        {/* Componente da barra lateral */}
        <Sidebar />
      </div>

      {/* Rodapé */}
      <Footer />
    </div>
  );
}

export default App;