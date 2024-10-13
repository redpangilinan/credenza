"use client"

import { useState } from "react"
import { Check, ChevronDown, ChevronUp, ClipboardCopy } from "lucide-react"

import { Button } from "./ui/button"

interface CodeBlockProps {
  children: React.ReactNode
  expandable?: boolean
}

function InlineCode({ children }: CodeBlockProps) {
  return (
    <code className="rounded bg-muted px-1 text-muted-foreground">
      {children}
    </code>
  )
}

function CodeBlock({ children, expandable = false }: CodeBlockProps) {
  const [isCopied, setIsCopied] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  const handleCopy = async () => {
    if (typeof children === "string") {
      try {
        await navigator.clipboard.writeText(children)
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 2000)
      } catch (error) {
        console.error("Failed to copy text:", error)
      }
    }
  }

  const handleToggleExpand = () => {
    setIsExpanded((prev) => !prev)
  }

  return (
    <div className="group relative">
      <div
        className={`relative mt-2 overflow-hidden rounded bg-muted p-4 text-muted-foreground transition-all ${
          expandable && !isExpanded ? "max-h-[200px]" : "max-h-none"
        }`}
      >
        <pre className="whitespace-pre-wrap">
          <code>{children}</code>
        </pre>

        {expandable && !isExpanded && (
          <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-muted to-transparent"></div>
        )}
      </div>

      <Button
        onClick={handleCopy}
        className="absolute right-2 top-2 h-8 w-8 opacity-0 transition-opacity group-hover:opacity-100"
        aria-label="Copy to clipboard"
        variant="outline"
        size="icon"
      >
        {isCopied ? (
          <Check className="size-4" />
        ) : (
          <ClipboardCopy className="size-4" />
        )}
      </Button>

      {expandable && (
        <Button
          onClick={handleToggleExpand}
          className="mt-2 w-full justify-center"
          aria-label="Toggle code visibility"
          variant="outline"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="mr-2" />
              Show less
            </>
          ) : (
            <>
              <ChevronDown className="mr-2" />
              Show more
            </>
          )}
        </Button>
      )}
    </div>
  )
}

export { InlineCode, CodeBlock }
