import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "../../data/profile";

const iconMap: Record<string, React.ReactNode> = {
  FaGithub: <FaGithub size={20} />,
  FaLinkedin: <FaLinkedin size={20} />,
};

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-gray-950 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 sm:flex-row sm:justify-between">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex gap-4">
          {profile.socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 transition-colors hover:text-cyan-400"
              aria-label={link.label}>
              {iconMap[link.icon] ?? link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
