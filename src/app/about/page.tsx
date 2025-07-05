import Image from "next/image";
export const metadata = {
  title: "À propos – RapVerse",
  description: "Tout savoir sur la vision et les valeurs de RapVerse.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-white">
      <div className="flex items-center space-x-4 mb-6">
        <Image
          src="/logoBig.png" // ⚠️ à remplacer par ton vrai logo
          alt="Logo RapVerse"
          width={80}
          height={80}
          className="w-20 h-20 rounded-full"
          priority
        />
        <div>
          <h1 className="text-3xl font-title glow tracking-wide">RapVerse</h1>
          <p className="text-gray-400 text-sm">@rapverse_off</p>
        </div>
      </div>

      <p className="text-lg text-gray-300 mb-4">
        <strong>RapVerse</strong>, c’est la plateforme dédiée à l’univers du
        rap, de l’actu, du foot et des sneakers 🔥.
      </p>

      <ul className="list-disc list-inside text-gray-400 space-y-1">
        <li>📰 Actus exclusives & posts créatifs sur la culture urbaine</li>
        <li>⚽ Mélange de rap et de foot : deux passions réunies</li>
        <li>👟 Sneakers & tendances streetwear mises en avant</li>
        <li>📩 Contact direct via DM Instagram</li>
        <li>
          🔗 Lien centralisé via{" "}
          <a
            href="https://bento.me/rapverse"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:underline"
          >
            bento.me/rapverse
          </a>
        </li>
      </ul>

      <p className="mt-6 text-gray-500 text-sm">
        Créé et géré avec passion par la communauté. On vous prépare plein de
        nouveautés 👀.
      </p>
      <div className="mt-8 flex flex-col items-start space-y-4">
        <a
          href="https://paypal.me/Rapverse"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-full shadow transition"
        >
          <svg className="w-5 h-5 mr-2" fill="blue" viewBox="0 0 24 24">
            <path d="M21.8 7.6c-.2-2.2-2.2-3.6-5.5-3.6H7.7c-.6 0-1.1.4-1.2 1L3.1 20.2c-.1.4.2.8.6.8h3.7l.7-3.6v.1c.1-.6.6-1 1.2-1h2.3c4.2 0 7.5-1.7 8.2-6.6.2-1.2.2-2.2.2-2.3zm-2.7 2.2c-.5 3.2-2.9 4.3-6.2 4.3h-1.7c-.3 0-.6.2-.7.5l-.8 4.1-.2 1.1c0 .1.1.2.2.2h2.2c.3 0 .6-.2.7-.5l.2-1.1.8-4.1c.1-.3.4-.5.7-.5h1.7c2.7 0 4.6-.7 5.1-3.2.1-.5.1-1.1.1-1.2 0-.1-.1-.2-.2-.2h-2.1c-.3 0-.6.2-.7.5z" />
          </svg>
          Soutenir Rapverse
        </a>
        <span className="mt-2 text-xs text-gray-500">
          Merci pour votre soutien 💜
        </span>
      </div>
    </div>
  );
}
