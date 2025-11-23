/**
 * Dot Pattern Background Component
 * Simple SVG-based dot grid pattern
 */

import { cn } from '../../lib/utils'
import React from 'react'

interface DotPatternProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  dotSize?: number
  dotSpacing?: number
  dotColor?: string
  className?: string
  fadeEdges?: boolean
}

export const DotPattern = ({
  children,
  dotSize = 1,
  dotSpacing = 20,
  dotColor = 'rgba(255, 255, 255, 0.1)',
  className,
  fadeEdges = true,
  ...props
}: DotPatternProps) => {
  return (
    <div className={cn('relative', className)} {...props}>
      {/* SVG Dot Pattern */}
      <div className="absolute inset-0 -z-10">
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="dot-pattern"
              x="0"
              y="0"
              width={dotSpacing}
              height={dotSpacing}
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx={dotSpacing / 2}
                cy={dotSpacing / 2}
                r={dotSize}
                fill={dotColor}
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-pattern)" />
        </svg>

        {/* Fade edges with radial gradient */}
        {fadeEdges && (
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-gray-900/50" />
        )}
      </div>

      {children}
    </div>
  )
}
