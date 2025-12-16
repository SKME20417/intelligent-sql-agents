export default function Header() {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUsZhiVHOhfNXZhZbEc2nrxS9d6kRuLPMZlQ&s"
          alt="EXL Logo"
          className="logo-img"
        />

        <div className="title-group">
          <h1>Intelligent SQL Database Agents</h1>
          <span className="subtitle">
            Natural Language → Secure SQL for Enterprise Users
          </span>
        </div>
      </div>

      <div className="navbar-right">
        <span className="env-badge">Enterprise Prototype</span>
      </div>
    </header>
  );
}
