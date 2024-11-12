'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Component() {
  return (
    <div className="min-h-screen bg-[#2D1B69]">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full px-4 md:px-6 py-3">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="text-xl font-semibold text-white ">
            sun.set
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm text-white hover:text-white/80 ">
              Home
            </Link>
            <Link href="/travel" className="text-sm text-white/80 hover:text-white ">
              Travel
            </Link>
            <Link href="/collection" className="text-sm text-white/80 hover:text-white ">
              Collection
            </Link>
            <Link href="/about" className="text-sm text-white/80 hover:text-white ">
              About
            </Link>
          </div>

          <Button className="bg-transparent hover:bg-white/10 text-white border border-white/20 rounded-full px-6 ">
            Log in
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D1B69] via-[#CB3E73] to-[#EC877F]" />

        {/* Stars */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white/50 rounded-full animate-twinkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Sun */}
        <div className="absolute left-1/2 bottom-1/4 -translate-x-1/2 w-32 h-32 bg-[#FFF5D1] rounded-full blur-md" />

        {/* Water */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#1A103F] to-[#A054BC]/50" />

        {/* Content */}
        <div className="relative pt-32 px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl md:text-6xl font-bold text-white tracking-tight  ">
              we believe your mental health matters
            </h1>
            <p className="text-lg text-white/80 ">
              By reflecting on your day, you can better understand your emotions and make
              informed decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
