"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import RapParticles from "@/components/atom/rapParticles";
import "./not-found.css";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 relative overflow-hidden">
      <RapParticles />
      <div className="text-center max-w-2xl mx-auto relative z-10">
        {/* Animated 404 */}
        <div className="relative mb-8">
          <h1
            className={`glitch text-[150px] md:text-[200px] font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-500 to-pink-500 leading-none transition-all duration-1000 animate-gradient ${
              mounted ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
          >
            404
          </h1>
          <div
            className={`absolute inset-0 text-[150px] md:text-[200px] font-black text-red-500/10 blur-2xl transition-all duration-1000 ${
              mounted ? "opacity-100" : "opacity-0"
            }`}
          >
            404
          </div>
        </div>

        {/* Message */}
        <div
          className={`space-y-4 transition-all duration-1000 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Oups ! Page introuvable
          </h2>
          <p className="text-lg text-gray-300 dark:text-gray-400 max-w-md mx-auto">
            Cette page a disparu... 🎤
            <br />
            Peut-être qu&apos;elle n&apos;a jamais existé ? 🤔
          </p>
        </div>
        {/* Action buttons */}
        <div
          className={`mt-10 flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Link
            href="/"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-purple-600 to-pink-500 rounded-full overflow-hidden transition-all duration-300 hover:scale-105  hover:shadow-purple-500/50"
          >
            <span className="relative z-10 flex items-center gap-2">
              🏠 Retour à l&apos;accueil
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>

          <Link
            href="/posts"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-gray-900 dark:text-white bg-white dark:bg-gray-800 rounded-full border-2 border-gray-300 dark:border-gray-600 overflow-hidden transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              📝 Voir les posts
            </span>
          </Link>
        </div>

        {/* Help text */}
        <p
          className={`mt-8 text-sm text-gray-500 dark:text-gray-400 transition-all duration-1000 delay-900 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          Si vous pensez qu&apos;il s&apos;agit d&apos;une erreur,
          contactez-nous !
        </p>
      </div>
    </div>
  );
}
