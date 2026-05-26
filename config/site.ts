export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "ClipAI",

  description:
    "Private, on-device AI image tools. Background removal, upscaling, and colorization. No uploads, no servers.",
  mainNav: [
    {
      title: "License",
      href: "https://github.com/yossTheDev/removerized/blob/main/LICENSE",
      external: true,
    },
    {
      title: "Changelog",
      href: "https://github.com/yossTheDev/removerized/releases",
      external: true,
    },
    {
      title: "Feedback",
      href: "https://tally.so/r/nrlKdM",
      external: true,
    },
  ],
  links: {
    twitter: "https://twitter.com/yossthedev",
    github: "https://github.com/yossTheDev/removerized",
    telegram: "https://t.me/yosstdv",
  },
}
