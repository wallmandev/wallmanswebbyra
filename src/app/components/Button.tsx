'use client'
import React from 'react'
import clsx from 'clsx'

type Variant = 'default' | 'outline' | 'ghost'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: Variant
}

function Button({
  children,
  className = '',
  variant = 'default',
  ...props
}: ButtonProps) {
  const baseStyle =
    'group relative px-6 py-3 font-medium text-slate-100 transition-all duration-500 hover:text-button rounded-md transform hover:scale-102 hover:-translate-y-0.5 shadow-lg hover:shadow-xl'

  const variantStyles: Record<Variant, string> = {
    default: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-blue-500/25',
    outline: 'border-2 border-slate-200 text-slate-200 hover:bg-slate-800/50 backdrop-blur-sm hover:shadow-slate-400/20 hover:border-button',
    ghost: 'bg-transparent hover:bg-slate-700/50 backdrop-blur-sm hover:shadow-slate-500/20',
  }

  return (
    <button
      {...props}
      className={clsx(baseStyle, variantStyles[variant], className)}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
      
      {/* Glow effect */}
      <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </button>
  )
}

export default Button