import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";

interface PostComponentProps {
  post: {
    id: string;
    postContent: {
      caption: string;
      image_url: string[];
    };
    urlPost?: string;
  };
}

export default function PostComponent({ post }: PostComponentProps) {
  const images = useMemo(() => post.postContent.image_url ?? [], [post]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const prev = useCallback(
    () => setActiveIndex((i) => (i - 1 + images.length) % images.length),
    [images.length]
  );
  const next = useCallback(
    () => setActiveIndex((i) => (i + 1) % images.length),
    [images.length]
  );

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen, images.length, prev, next]);

  return (
    <article className="mx-auto max-w-5xl px-3 sm:px-6 md:px-8 py-6">
      {/* HEADER */}
      <header className="mb-4 flex items-center justify-between">
        <span className="text-xs font-medium text-neutral-400/80">
          Post #{post.id}
        </span>
        {post.urlPost && (
          <a
            href={post.urlPost}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-3 py-1 text-xs font-medium text-blue-300/90 ring-1 ring-blue-900/60 hover:bg-blue-950/40"
          >
            Voir plus ↗
          </a>
        )}
      </header>

      {/* MEDIA VIEWER */}
      <section aria-label="Contenu du post" className="mb-6">
        <div className="relative overflow-hidden rounded-2xl bg-neutral-950 ring-1 ring-neutral-800">
          {/* container qui garde un grand format mais s'adapte au viewport */}
          <div
            className="
              relative w-full
              [--vh:100vh]
              md:min-h-[520px] 
              lg:min-h-[600px]
              xl:min-h-[680px]
              aspect-[4/5] md:aspect-video
            "
          >
            {images.length > 0 ? (
              <Image
                key={images[activeIndex]}
                src={images[activeIndex]}
                alt={`Image ${activeIndex + 1} sur ${images.length}`}
                fill
                sizes="(max-width: 768px) 100vw, 1100px"
                className="object-contain"
                onClick={() => setLightboxOpen(true)}
                priority
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-neutral-900 text-neutral-500">
                Aucune image
              </div>
            )}

            {/* Flèches, en dehors de l'image pour ne pas gêner la lecture du texte */}
            {images.length > 1 && (
              <>
                <button
                  aria-label="Image précédente"
                  onClick={prev}
                  className="
                    group absolute left-2 sm:left-3 top-1/2 -translate-y-1/2
                    rounded-full bg-black/60 backdrop-blur px-3 py-2 text-white
                    hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-blue-600
                  "
                >
                  <span className="block text-lg leading-none">←</span>
                </button>
                <button
                  aria-label="Image suivante"
                  onClick={next}
                  className="
                    group absolute right-2 sm:right-3 top-1/2 -translate-y-1/2
                    rounded-full bg-black/60 backdrop-blur px-3 py-2 text-white
                    hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-blue-600
                  "
                >
                  <span className="block text-lg leading-none">→</span>
                </button>
              </>
            )}

            {/* Compteur + puces de progression */}
            {images.length > 1 && (
              <>
                <span className="absolute right-3 top-3 rounded-full bg-black/70 px-2 py-1 text-[11px] text-white">
                  {activeIndex + 1} / {images.length}
                </span>
                <div className="pointer-events-none absolute inset-x-0 bottom-2 flex items-center justify-center gap-1.5">
                  {images.map((_, i) => (
                    <span
                      key={i}
                      className={`h-1.5 rounded-full transition-all ${
                        i === activeIndex ? "w-6 bg-white" : "w-2 bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Miniatures */}
          {images.length > 1 && (
            <div className="border-t border-neutral-800/80 bg-black/30 px-3 py-2 sm:px-4 sm:py-3">
              <div className="flex gap-2 overflow-x-auto pb-1">
                {images.map((src, i) => (
                  <button
                    key={src + i}
                    onClick={() => setActiveIndex(i)}
                    className={`relative h-16 w-16 flex-none overflow-hidden rounded-xl ring-2 transition
                      ${
                        i === activeIndex
                          ? "ring-blue-500"
                          : "ring-transparent hover:ring-neutral-600"
                      }`}
                    aria-label={`Aller à l'image ${i + 1}`}
                  >
                    <Image
                      src={src}
                      alt={`Miniature ${i + 1}`}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* DESCRIPTION */}
      <section aria-label="Description" className="mb-8">
        <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-black px-3 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
          <span className="text-xs font-semibold tracking-wide text-neutral-300">
            DESCRIPTION
          </span>
        </div>
        <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-4 sm:p-5">
          <p className="whitespace-pre-wrap text-[15px] leading-relaxed text-neutral-100">
            {post.postContent.caption || "—"}
          </p>
        </div>
      </section>

      {/* COMMENTAIRES (placeholder) */}
      <section
        aria-label="Commentaires"
        className="rounded-2xl border border-dashed border-neutral-700 bg-neutral-950/60 p-4 sm:p-5"
      >
        <div className="mb-3 flex items-center gap-2">
          <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-amber-500" />
          <h3 className="text-sm text-neutral-200">
            Commentaires — en cours de dev
          </h3>
        </div>

        <p className="mb-4 text-sm text-neutral-400">
          Cette section arrive bientôt. Vous pourrez lire et poster des
          commentaires ici.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex items-start gap-2 opacity-60"
        >
          <textarea
            disabled
            placeholder="Écrire un commentaire…"
            className="min-h-[70px] flex-1 resize-y rounded-xl border border-neutral-700 bg-neutral-900 p-3 text-sm text-neutral-300 placeholder:text-neutral-500"
          />
          <button
            disabled
            className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white"
          >
            Publier
          </button>
        </form>
      </section>
    </article>
  );
}
