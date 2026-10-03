function Article({ dados }) {
  return (
    <article className="Introducao">
      <h2>{dados.titulo}</h2>
      <p className="Meta" style={{ fontSize: '0.85rem', color: '#888', marginBottom: '10px' }}>
        <span>Por {dados.autor}</span> | <time>{dados.data}</time>
      </p>
      <p>{dados.conteudo}</p>
    </article>
  );
}

export default Article;