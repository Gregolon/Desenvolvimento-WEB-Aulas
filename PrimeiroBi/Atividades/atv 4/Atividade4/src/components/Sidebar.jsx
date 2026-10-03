function Sidebar() {
  return (
    <aside className="Lateral">
      <nav className="Menu">
        <ul>
          <li><a href="#">JOGOS ESSENCIAIS</a></li>
          <li><a href="#">HISTÓRIA DO PSP</a></li>
          <li><a href="#">GUIA DO HARDWARE</a></li>
        </ul>
      </nav>

      <div className="Botoes">
        <button aria-label="Console">🎮</button>
        <button aria-label="Favoritos">❤️</button>
        <button aria-label="Menu">📋</button>
      </div>
    </aside>
  );
}

export default Sidebar;