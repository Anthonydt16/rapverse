export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-800 text-center text-gray-400 text-sm">
      <div className="container mx-auto px-4">
        <p>© {new Date().getFullYear()} RAPVERSE — Tous droits réservés.</p>
        <div className="mt-2 flex justify-center space-x-4 text-gray-500">
          <a
            href="https://www.instagram.com/rapverse_off/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors duration-200"
          >
            Instagram
          </a>
          <a
            href="/mentions-legales"
            className="hover:text-purple-400 transition-colors duration-200"
          >
            Mentions légales
          </a>
          <a
            href="mailto:rapverse.pro@gmail.com"
            className="hover:text-purple-400 transition-colors duration-200"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
