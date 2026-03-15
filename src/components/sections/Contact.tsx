import { type FormEvent, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "../../data/profile";
import Section from "../layout/Section";
import AnimatedSection from "../ui/AnimatedSection";
import Button from "../ui/Button";

const iconMap: Record<string, React.ReactNode> = {
  FaGithub: <FaGithub size={20} />,
  FaLinkedin: <FaLinkedin size={20} />,
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: Wire up EmailJS or Formspree here
    setSubmitted(true);
  }

  return (
    <Section id="contact" title="Contact">
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Left — info & socials */}
        <AnimatedSection>
          <p className="mb-6 text-gray-400 leading-relaxed">
            Interested in working together or just want to say hello? Feel free
            to reach out — I&#39;m always open to new opportunities and
            conversations.
          </p>
          <p className="mb-8 text-gray-500 text-sm">{profile.location}</p>
          <div className="flex gap-4">
            {profile.socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition-all hover:border-cyan-500/30 hover:text-cyan-400"
                aria-label={link.label}>
                {iconMap[link.icon] ?? link.label}
              </a>
            ))}
          </div>
        </AnimatedSection>

        {/* Right — form */}
        <AnimatedSection delay={0.1}>
          {submitted ? (
            <div className="flex h-full items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-8">
              <p className="text-center text-cyan-400">
                Thanks for your message! I&#39;ll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1 block text-sm text-gray-400">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-colors focus:border-cyan-500/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm text-gray-400">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-colors focus:border-cyan-500/50"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1 block text-sm text-gray-400">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-none rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-colors focus:border-cyan-500/50"
                  placeholder="Your message..."
                />
              </div>
              <Button type="submit">Send message</Button>
            </form>
          )}
        </AnimatedSection>
      </div>
    </Section>
  );
}
