import { SiteConfig } from "@/types"

import { env } from "@/env.mjs"

export const siteConfig: SiteConfig = {
  name: "Credenza",
  author: "redpangilinan",
  description: "Ready-made responsive modal component for shadcn/ui.",
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Radix UI",
    "shadcn/ui",
    "Vaul",
  ],
  url: {
    base: env.NEXT_PUBLIC_APP_URL,
    author: "https://rdev.pro",
  },
  links: {
    github: "https://github.com/redpangilinan/credenza",
    kofi: "https://ko-fi.com/redpangilinan",
  },
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.png`,
}
