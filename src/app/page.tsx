import * as React from "react"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import {
  Credenza,
  CredenzaClose,
  CredenzaContent,
  CredenzaDescription,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaTrigger,
} from "@/components/ui/credenza"
import { ModeToggle } from "@/components/mode-toggle"

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <h1 className="text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-7xl">
          {siteConfig.name}
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          {siteConfig.description}
        </p>
        <div className="flex gap-2">
          <Credenza>
            <CredenzaTrigger asChild>
              <Button>Try it</Button>
            </CredenzaTrigger>
            <CredenzaContent>
              <CredenzaHeader>
                <CredenzaTitle>Welcome to Credenza</CredenzaTitle>
                <CredenzaDescription>
                  This is a sample modal
                </CredenzaDescription>
              </CredenzaHeader>
              <CredenzaFooter>
                <CredenzaClose asChild>
                  <Button>Close</Button>
                </CredenzaClose>
              </CredenzaFooter>
            </CredenzaContent>
          </Credenza>
          <ModeToggle />
        </div>
      </div>
    </main>
  )
}
