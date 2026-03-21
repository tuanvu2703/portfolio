"use client"
import { Check, Copy } from "lucide-react"
import React from "react"

export default function CopiedEmailBTN({ email }: { email: string }) {
    const [copied, setCopied] = React.useState(false)

    const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
     <button
        onClick={handleCopyEmail}
        className="ml-2 inline-flex cursor-pointer items-center gap-1 rounded-md p-2 text-sm transition-colors hover:bg-gray-700 hover:text-blue-400 dark:text-gray-400"
        title="Copy email"
        >
            {copied ? <Check size={16} /> : <Copy size={16} />}
    </button>
  )
}
