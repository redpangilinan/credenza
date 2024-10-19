import * as React from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  CredenzaBlock,
  ExampleBlock,
  ImportsBlock,
  MediaQueryBlock,
  StateExampleBlock,
} from "@/components/blocks"
import { CodeBlock, InlineCode } from "@/components/code-block"
import { Icons } from "@/components/icons"
import { OpenModal, StateModal, TriggerModal } from "@/components/modals"
import { ModeToggle } from "@/components/mode-toggle"

export default function Home() {
  return (
    <main className="container mx-auto max-w-[46rem] space-y-4 pb-24">
      <div className="py-12">
        <div className="flex flex-col items-center gap-6 py-24 text-center">
          <div className="space-y-2">
            <h1 className="text-5xl font-semibold">{siteConfig.name}</h1>
            <p className="max-w-[42rem] text-muted-foreground">
              {siteConfig.description}
            </p>
          </div>
          <div className="flex gap-2">
            <ModeToggle />
            <OpenModal />
            <Link
              href={siteConfig.links.kofi}
              target="_blank"
              className={cn(
                buttonVariants({ variant: "default" }),
                "bg-[#ff5f5f] text-white hover:bg-[#ff5f5f]/90"
              )}
            >
              <span>Buy me a Coffee</span>
              <Icons.coffee className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <Link
            href={siteConfig.links.github}
            target="_blank"
            className={cn(buttonVariants({ variant: "ghost" }))}
          >
            <span>Star on GitHub</span>
            <Icons.link className="ml-2 h-4 w-4" />
          </Link>
        </div>
        <div className="space-y-16 py-6">
          <Installation />
          <Usage />
        </div>
      </div>
    </main>
  )
}

function Installation() {
  return (
    <div className="space-y-8">
      <h2 className="text-lg font-semibold">Installation</h2>
      <div className="space-y-4">
        <p>
          Copy the <InlineCode>dialog</InlineCode> and{" "}
          <InlineCode>drawer</InlineCode> components from shadcn/ui
        </p>
        <CodeBlock>npx shadcn@latest add dialog drawer</CodeBlock>
      </div>
      <div className="space-y-4">
        <p>
          Copy the <InlineCode>useMediaQuery</InlineCode> hook
        </p>
        <MediaQueryBlock />
      </div>
      <div className="space-y-4">
        <p>
          Copy the <InlineCode>Credenza</InlineCode> component
        </p>
        <CredenzaBlock />
      </div>
      <div className="space-y-4">
        <p>
          Wrap your app with the <InlineCode>vaul-drawer-wrapper</InlineCode>{" "}
          for background scaling
        </p>
        <CodeBlock>
          {`<div vaul-drawer-wrapper="" className="bg-background"> {children} </div>`}
        </CodeBlock>
      </div>
      <p>Update the import paths based on your project structure</p>
    </div>
  )
}

function Usage() {
  return (
    <div className="space-y-8">
      <h2 className="text-lg font-semibold">Usage</h2>
      <ImportsBlock />
      <div className="space-y-4">
        <div>
          Basic usage with <InlineCode>CredenzaTrigger</InlineCode>
        </div>
        <Card className="flex justify-center p-6 py-10">
          <TriggerModal />
        </Card>
        <ExampleBlock />
      </div>
      <div className="space-y-4">
        <div>Using state to open modal</div>
        <Card className="flex justify-center p-6 py-10">
          <StateModal />
        </Card>
        <StateExampleBlock />
      </div>
    </div>
  )
}
