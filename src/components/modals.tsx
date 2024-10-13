"use client"

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

function OpenModal() {
  return (
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
            This component is built using shadcn/ui&apos;s dialog and drawer
            component, which is built on top of Vaul.
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
            The documentation for installation and usage can be found{" "}
            <Link
              href={`${siteConfig.links.github}/blob/main/README.md`}
              target="_blank"
              className="underline"
            >
              here
            </Link>
            .
          </p>
        </CredenzaBody>
        <CredenzaFooter>
          <Link
            href={`${siteConfig.links.github}/blob/main/README.md`}
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
  )
}

function TriggerModal() {
  return (
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
        <CredenzaBody>
          This component is built using shadcn/ui&apos;s dialog and drawer
          component, which is built on top of Vaul.
        </CredenzaBody>
        <CredenzaFooter>
          <CredenzaClose asChild>
            <Button>Close</Button>
          </CredenzaClose>
        </CredenzaFooter>
      </CredenzaContent>
    </Credenza>
  )
}

function StateModal() {
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <>
      <Button onClick={handleOpen}>Open with State</Button>

      <Credenza open={open} onOpenChange={setOpen}>
        <CredenzaContent>
          <CredenzaHeader>
            <CredenzaTitle>Credenza</CredenzaTitle>
            <CredenzaDescription>
              A responsive modal component for shadcn/ui.
            </CredenzaDescription>
          </CredenzaHeader>
          <CredenzaBody>This modal got triggered using state</CredenzaBody>
          <CredenzaFooter>
            <CredenzaClose asChild>
              <Button>Close</Button>
            </CredenzaClose>
          </CredenzaFooter>
        </CredenzaContent>
      </Credenza>
    </>
  )
}

export { OpenModal, TriggerModal, StateModal }
