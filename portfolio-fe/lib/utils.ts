import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const formatProjectMonthYear = (dateValue?: string) => {
  if (!dateValue) {
    return "N/A"
  }

  const date = new Date(dateValue)
  if (Number.isNaN(date.getTime())) {
    return "N/A"
  }

  const month = String(date.getMonth() + 1).padStart(2, "0")
  const year = date.getFullYear()

  return `${month}/${year}`
}