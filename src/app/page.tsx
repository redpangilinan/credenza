import * as React from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Credenza,
  CredenzaBody,
  CredenzaClose,
  CredenzaContent,
  CredenzaDescription,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaTrigger,
} from "@/components/ui/credenza"
import { Icons } from "@/components/icons"
import { ModeToggle } from "@/components/mode-toggle"

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <h1 className="text-5xl font-semibold md:text-6xl">
          {siteConfig.name}
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          {siteConfig.description}
        </p>
        <div className="flex gap-2">
          <ModeToggle />
          <Credenza>
            <CredenzaTrigger asChild>
              <Button>Open modal</Button>
            </CredenzaTrigger>
            <CredenzaContent>
              <CredenzaHeader>
                <CredenzaTitle>Credenza</CredenzaTitle>
                <CredenzaDescription>
                  A responsive modal component for shadcn/ui.
                </CredenzaDescription>
              </CredenzaHeader>
              <CredenzaBody className="space-y-4 pb-4 text-center text-sm sm:pb-0 sm:text-left">
                <p>
                  This component is built using shadcn/ui&apos;s dialog and
                  drawer component, which is built on top of Vaul.
                </p>
                <p>
                  It shows a{" "}
                  <Link
                    href="https://ui.shadcn.com/docs/components/dialog"
                    target="_blank"
                    className="underline"
                  >
                    dialog modal
                  </Link>{" "}
                  for desktop view and a{" "}
                  <Link
                    href="https://vaul.emilkowal.ski/"
                    target="_blank"
                    className="underline"
                  >
                    bottom drawer
                  </Link>{" "}
                  for mobile view.
                </p>
                <p>
                  The documentation for installation and usage can be found on
                  the{" "}
                  <Link
                    href={siteConfig.links.github}
                    target="_blank"
                    className="underline"
                  >
                    GitHub repository
                  </Link>
                  .
                </p>
              </CredenzaBody>
              <CredenzaFooter>
                <Link
                  href={siteConfig.links.github}
                  target="_blank"
                  className={cn(buttonVariants({ variant: "default" }))}
                >
                  Documentation
                </Link>
                <CredenzaClose asChild>
                  <Button variant="outline">Close</Button>
                </CredenzaClose>
              </CredenzaFooter>
            </CredenzaContent>
          </Credenza>
          <Link
            href={siteConfig.links.github}
            target="_blank"
            className={cn(buttonVariants({ variant: "ghost" }))}
          >
            <span>GitHub</span>
            <Icons.link className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </main>
  )
}
