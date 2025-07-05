export const metadata = {
  title: "À propos – RapVerse",
  description: "Tout savoir sur la vision et les valeurs de RapVerse.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-white">
      <div className="flex items-center space-x-4 mb-6">
        <img
          src="/logoBig.png" // ⚠️ à remplacer par ton vrai logo
          alt="Logo RapVerse"
          className="w-20 h-20 rounded-full"
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
    </div>
  );
}
