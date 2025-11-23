/**
 * Aurora Background Component
 * Northern lights effects with flowing gradient animations
 * Adapted from shadcn.io
 */

import { cn } from '../../lib/utils'
import React, { ReactNode } from 'react'

interface AuroraBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  showRadialGradient?: boolean
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        'relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-zinc-900',
        className
      )}
      {...props}
    >
      {/* Aurora effect layer */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -inset-[10px] opacity-60 animate-aurora"
          style={{
            background: `
              repeating-linear-gradient(
                100deg,
                #6366f1 10%,
                #8b5cf6 15%,
                #a855f7 20%,
                #c084fc 25%,
                #7c3aed 30%
              )
            `,
            backgroundSize: '200% 200%',
            filter: 'blur(40px)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  )
}
