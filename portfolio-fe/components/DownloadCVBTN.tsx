'use client'

import { downloadCV } from "@/lib/utils"
import { Download } from "lucide-react"

export function DownloadCVBTN() {
  return (
    <button onClick={downloadCV}className="inline-flex w-fit items-center gap-2 rounded-full border border-sky-400/70 px-4 py-2 font-semibold transition hover:border-sky-300 dark:bg-sky-500/20 dark:text-sm dark:text-sky-100 hover:dark:bg-sky-500/35">
<Download size={16} />
Download My CV
    </button>
  )
}