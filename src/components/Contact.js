function Contact() {
  return (
    <section id="contact" className="p-10 bg-gray-800 text-white">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      
      <p className="mb-2">
        Email:{" "}
        <a
          href="lukekadima1942@gmail.com"
          className="text-blue-400 hover:underline"
        >
          lukekadima1942@gmail.com
        </a>
      </p>
      
      <p className="mb-2">
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/luke-kadima-23a770297/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          lukekadima-linkedin
        </a>
      </p>
      
      <p className="mb-2">
        GitHub:{" "}
        <a
          href="https://github.com/Luckadima"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          lukekadima-github
        </a>
      </p>
    </section>
  );
}

export default Contact;