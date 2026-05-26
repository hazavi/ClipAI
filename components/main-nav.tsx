import * as React from "react"
import Link from "next/link"
import { ArrowUpRightIcon } from "lucide-react"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex items-center gap-8">
      <Link href="/" className="flex items-center gap-2">
        <Icons.logo className="size-5 text-white" />
        <span className="text-sm font-semibold tracking-tight text-white">
          {siteConfig.name}
        </span>
      </Link>
      {items?.length ? (
        <nav className="hidden items-center gap-6 md:flex">
          {items.map(
            (item, index) =>
              item.href && (
                <Link
                  target={item.external ? "_blank" : ""}
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-sm text-white/40 transition-colors hover:text-white/70",
                    item.disabled && "cursor-not-allowed opacity-50"
                  )}
                >
                  {item.title}
                  {item.external && (
                    <ArrowUpRightIcon className="ml-1 size-3" />
                  )}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
