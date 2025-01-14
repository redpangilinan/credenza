import { CodeBlock } from "./code-block"

function MediaQueryBlock() {
  return (
    <CodeBlock expandable>
      {`import * as React from "react"

export function useMediaQuery(query: string) {
  const [value, setValue] = React.useState(false)

  React.useEffect(() => {
    function onChange(event: MediaQueryListEvent) {
      setValue(event.matches)
    }

    const result = matchMedia(query)
    result.addEventListener("change", onChange)
    setValue(result.matches)

    return () => result.removeEventListener("change", onChange)
  }, [query])

  return value
}`}
    </CodeBlock>
  )
}

function CredenzaBlock() {
  return (
    <CodeBlock expandable>
      {`"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

interface BaseProps {
  children: React.ReactNode
}

interface RootCredenzaProps extends BaseProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

interface CredenzaProps extends BaseProps {
  className?: string
  asChild?: true
}

const CredenzaContext = React.createContext<{ isDesktop: boolean }>({
  isDesktop: false,
});

const useCredenzaContext = () => {
  const context = React.useContext(CredenzaContext);
  if (!context) {
    throw new Error(
      "Credenza components cannot be rendered outside the Credenza Context",
    );
  }
  return context;
};

const Credenza = ({ children, ...props }: RootCredenzaProps) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const Credenza = isDesktop ? Dialog : Drawer;

  return (
    <CredenzaContext.Provider value={{ isDesktop }}>
      <Credenza {...props} {...(!isDesktop && { autoFocus: true })}>
        {children}
      </Credenza>
    </CredenzaContext.Provider>
  );
};


const CredenzaTrigger = ({ className, children, ...props }: CredenzaProps) => {
  const { isDesktop } = useCredenzaContext();
  const CredenzaTrigger = isDesktop ? DialogTrigger : DrawerTrigger;

  return (
    <CredenzaTrigger className={className} {...props}>
      {children}
    </CredenzaTrigger>
  );
};

const CredenzaClose = ({ className, children, ...props }: CredenzaProps) => {
  const { isDesktop } = useCredenzaContext();
  const CredenzaClose = isDesktop ? DialogClose : DrawerClose;

  return (
    <CredenzaClose className={className} {...props}>
      {children}
    </CredenzaClose>
  );
};

const CredenzaContent = ({ className, children, ...props }: CredenzaProps) => {
  const { isDesktop } = useCredenzaContext();
  const CredenzaContent = isDesktop ? DialogContent : DrawerContent;

  return (
    <CredenzaContent className={className} {...props}>
      {children}
    </CredenzaContent>
  );
};

const CredenzaDescription = ({
  className,
  children,
  ...props
}: CredenzaProps) => {
  const { isDesktop } = useCredenzaContext();
  const CredenzaDescription = isDesktop ? DialogDescription : DrawerDescription;

  return (
    <CredenzaDescription className={className} {...props}>
      {children}
    </CredenzaDescription>
  );
};

const CredenzaHeader = ({ className, children, ...props }: CredenzaProps) => {
  const { isDesktop } = useCredenzaContext();
  const CredenzaHeader = isDesktop ? DialogHeader : DrawerHeader;

  return (
    <CredenzaHeader className={className} {...props}>
      {children}
    </CredenzaHeader>
  );
};

const CredenzaTitle = ({ className, children, ...props }: CredenzaProps) => {
  const { isDesktop } = useCredenzaContext();
  const CredenzaTitle = isDesktop ? DialogTitle : DrawerTitle;

  return (
    <CredenzaTitle className={className} {...props}>
      {children}
    </CredenzaTitle>
  );
};

const CredenzaBody = ({ className, children, ...props }: CredenzaProps) => {
  return (
    <div className={cn("px-4 md:px-0", className)} {...props}>
      {children}
    </div>
  );
};

const CredenzaFooter = ({ className, children, ...props }: CredenzaProps) => {
  const { isDesktop } = useCredenzaContext();
  const CredenzaFooter = isDesktop ? DialogFooter : DrawerFooter;

  return (
    <CredenzaFooter className={className} {...props}>
      {children}
    </CredenzaFooter>
  );
};

export {
  Credenza,
  CredenzaTrigger,
  CredenzaClose,
  CredenzaContent,
  CredenzaDescription,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaBody,
  CredenzaFooter,
}
`}
    </CodeBlock>
  )
}

function ImportsBlock() {
  return (
    <CodeBlock>{`import {
  Credenza,
  CredenzaBody,
  CredenzaClose,
  CredenzaContent,
  CredenzaDescription,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaTrigger,
} from "@/components/ui/credenza"`}</CodeBlock>
  )
}

function ExampleBlock() {
  return (
    <CodeBlock expandable>{`<Credenza>
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
</Credenza>`}</CodeBlock>
  )
}

function StateExampleBlock() {
  return (
    <CodeBlock expandable>{`function StateModal() {
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
}`}</CodeBlock>
  )
}

export {
  MediaQueryBlock,
  CredenzaBlock,
  ImportsBlock,
  ExampleBlock,
  StateExampleBlock,
}
