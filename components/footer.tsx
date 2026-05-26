import { siteConfig } from "@/config/site"

export const Footer = () => {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="flex h-12 items-center justify-between px-6 md:px-8">
        <p className="text-xs text-white/30">
          Built by{" "}
          <a
            className="text-white/50 transition-colors hover:text-white/70"
            target="_blank"
            href="https://yossthedev.github.io"
          >
            @yossthedev
          </a>
        </p>
        <p className="text-xs text-white/30">
          Source on{" "}
          <a
            className="text-white/50 transition-colors hover:text-white/70"
            target="_blank"
            href={siteConfig.links.github}
          >
            GitHub
          </a>
        </p>
      </div>
    </footer>
  )
}
