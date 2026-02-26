function Navbar() {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "20px", backgroundColor: "#222" }}>
      <h1 style={{ fontSize: "20px" }}>Luke Kadima</h1>
      <div style={{ display: "flex", gap: "15px" }}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;