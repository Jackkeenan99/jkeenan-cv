import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import { profile } from "../../data/profile";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-1/2 -left-1/4 h-[800px] w-[800px] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute -right-1/4 -bottom-1/2 h-[600px] w-[600px] rounded-full bg-purple-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-sm tracking-widest text-cyan-400 uppercase">
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-6 text-5xl font-extrabold tracking-tight text-white sm:text-7xl">
          {profile.name}
          <span className="text-cyan-400">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-4 text-xl text-gray-400 sm:text-2xl">
          {profile.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-gray-500">
          {profile.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-6 py-3 text-sm font-medium text-gray-950 shadow-lg shadow-cyan-500/25 transition-all hover:bg-cyan-400">
            Get in touch
          </a>
          <a
            href="#experience"
            className="inline-flex items-center gap-2 rounded-lg border border-cyan-500/40 px-6 py-3 text-sm font-medium text-cyan-400 transition-all hover:bg-cyan-500/10">
            View my work
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a href="#experience" aria-label="Scroll down">
          <FaArrowDown className="animate-bounce text-gray-600" />
        </a>
      </motion.div>
    </section>
  );
}
