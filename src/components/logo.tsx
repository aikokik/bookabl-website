'use client'

import Image from 'next/image'

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="Company Logo"
      width={65}
      height={65}
      className={className}
    />
  )
}

export function Mark({ className }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="Company Logo"
      width={70}
      height={70}
      className={className}
    />
  )
}
