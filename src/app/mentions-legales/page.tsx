// app/mentions-legal.tsx

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-black text-white font-body px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-title mb-8">
          Mentions Légales
        </h1>

        <section className="space-y-6 text-gray-200">
          <div>
            <h2 className="text-2xl font-semibold">Éditeur du site</h2>
            <p>
              <strong>RapVerse</strong>
              <br />
              Contact : KO
              <a
                href="mailto:ton-email@example.com"
                className="text-purple-400 hover:underline"
              >
                j&apos;aipasencorefaiszebi@nsm.com
              </a>
              <br />
              Responsable de la publication : Gogodix
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Hébergement</h2>
            <p>
              Le site est hébergé par :<br />
              contabo.com
              <br />
              Adresse : Bayerische Hypo- und Vereinsbank AG Lindwurmstrasse
              83-85 80337 Munich
              <br />
              Site web :https://contabo.com/
              <a
                href="https://contabo.com/"
                className="text-purple-400 hover:underline"
              >
                contabo.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Propriété intellectuelle</h2>
            <p>
              Le contenu publié sur RapVerse (textes, images, logos, etc.) est
              la propriété de leurs auteurs respectifs. Toute reproduction ou
              diffusion sans autorisation est interdite.
              <br />
              Les contenus Instagram affichés sont issus de sources publiques et
              appartiennent à leurs créateurs originaux.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Données personnelles</h2>
            <p>
              Aucune donnée personnelle n’est collectée à l’insu de
              l’utilisateur. Aucune information n’est cédée à des tiers.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Cookies</h2>
            <p>
              Le site peut utiliser des cookies à des fins de fonctionnement ou
              de mesure d’audience. L’utilisateur peut les refuser via les
              paramètres de son navigateur.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">
              Limitation de responsabilité
            </h2>
            <p>
              Les informations fournies le sont à titre informatif. RapVerse ne
              garantit pas l’exactitude des contenus et ne peut être tenu
              responsable des éventuelles erreurs ou dommages liés à leur
              utilisation.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
