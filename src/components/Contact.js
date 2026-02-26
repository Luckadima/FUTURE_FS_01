function Contact() {
  return (
    <section id="contact" style={{ padding: "40px", backgroundColor: "#333" }}>
      <h2 style={{ fontSize: "28px" }}>Contact Me</h2>
      <form style={{ display: "flex", flexDirection: "column", marginTop: "16px" }}>
        <input style={{ padding: "8px", marginBottom: "12px" }} placeholder="Your Name" />
        <input style={{ padding: "8px", marginBottom: "12px" }} placeholder="Email" />
        <textarea style={{ padding: "8px", marginBottom: "12px" }} placeholder="Message"></textarea>
        <button>Send</button>
      </form>
    </section>
  );
}

export default Contact;