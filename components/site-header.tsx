import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"

import { MenuWithButton } from "./menu-button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/[0.06] bg-[#050505]/90 backdrop-blur-xl">
      <div className="flex h-14 items-center px-6 md:px-8">
        <MainNav items={siteConfig.mainNav} />
        <div className="ml-auto flex items-center gap-1">
          <nav className="hidden items-center gap-1 md:flex">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ size: "icon", variant: "ghost" })}
            >
              <Icons.gitHub className="size-4" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ size: "icon", variant: "ghost" })}
            >
              <Icons.X className="size-4 fill-current" />
              <span className="sr-only">X</span>
            </Link>
          </nav>
          <MenuWithButton items={siteConfig.mainNav} />
        </div>
      </div>
    </header>
  )
}
