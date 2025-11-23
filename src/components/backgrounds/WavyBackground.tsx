/**
 * Wavy Background Component
 * Organic gradient wave animations powered by simplex noise
 * Adapted from shadcn.io
 */

import { cn } from '../../lib/utils'
import React, { useEffect, useRef, useState } from 'react'
import { createNoise3D } from 'simplex-noise'

export interface WavyBackgroundProps {
  children?: React.ReactNode
  className?: string
  containerClassName?: string
  colors?: string[]
  waveWidth?: number
  backgroundFill?: string
  blur?: number
  speed?: 'slow' | 'fast'
  waveOpacity?: number
  [key: string]: any
}

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill = '#0f172a',
  blur = 10,
  speed = 'fast',
  waveOpacity = 0.5,
  ...props
}: WavyBackgroundProps) => {
  const [isSafari, setIsSafari] = useState(false)
  const [isClient, setIsClient] = useState(false)

  const noise = createNoise3D()
  let w: number, h: number, nt: number, i: number, x: number, ctx: any, canvas: any

  const canvasRef = useRef<HTMLCanvasElement>(null)

  const getSpeed = () => {
    switch (speed) {
      case 'slow':
        return 0.001
      case 'fast':
        return 0.002
      default:
        return 0.001
    }
  }

  const init = () => {
    if (!isClient) return
    canvas = canvasRef.current
    if (!canvas) return
    ctx = canvas.getContext('2d')
    if (!ctx) return

    w = ctx.canvas.width = canvas.offsetWidth
    h = ctx.canvas.height = canvas.offsetHeight
    ctx.filter = `blur(${blur}px)`
    nt = 0

    window.onresize = function () {
      if (!canvas || !ctx) return
      w = ctx.canvas.width = canvas.offsetWidth
      h = ctx.canvas.height = canvas.offsetHeight
      ctx.filter = `blur(${blur}px)`
    }

    render()
  }

  const waveColors = colors ?? [
    '#6366f1', // primary-500
    '#8b5cf6', // accent-500
    '#a855f7', // purple-500
    '#c084fc', // purple-400
    '#7c3aed', // violet-600
  ]

  const drawWave = (n: number) => {
    if (!ctx) return
    nt += getSpeed()
    for (i = 0; i < n; i++) {
      ctx.beginPath()
      ctx.lineWidth = waveWidth || 50
      ctx.strokeStyle = waveColors[i % waveColors.length]
      for (x = 0; x < w; x += 5) {
        const y = noise(x / 800, 0.3 * i, nt) * 100
        ctx.lineTo(x, y + h * 0.5)
      }
      ctx.stroke()
      ctx.closePath()
    }
  }

  let animationId: number
  const render = () => {
    if (!ctx) return
    ctx.fillStyle = backgroundFill || 'black'
    ctx.globalAlpha = waveOpacity || 0.5
    ctx.fillRect(0, 0, w, h)
    drawWave(5)
    animationId = requestAnimationFrame(render)
  }

  useEffect(() => {
    if (isClient) {
      init()
    }
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [isClient, blur, backgroundFill, waveOpacity, speed, waveWidth, colors])

  useEffect(() => {
    setIsClient(true)
    setIsSafari(
      typeof window !== 'undefined' &&
        navigator.userAgent.includes('Safari') &&
        !navigator.userAgent.includes('Chrome')
    )
  }, [])

  return (
    <div
      className={cn(
        'relative flex h-full w-full flex-col items-center justify-center',
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0 h-full w-full"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isClient && isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      />
      <div className={cn('relative z-10', className)} {...props}>
        {children}
      </div>
    </div>
  )
}
