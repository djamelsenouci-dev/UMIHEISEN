"use client"

import { motion } from "framer-motion"
import { Search, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

function UmiheisenLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Ocean waves base */}
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="hsl(var(--accent))" />
        </linearGradient>
        <linearGradient id="boatGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--foreground))" />
          <stop offset="100%" stopColor="hsl(var(--muted-foreground))" />
        </linearGradient>
      </defs>
      
      {/* Circular background with wave pattern */}
      <circle cx="24" cy="24" r="22" fill="url(#waveGradient)" opacity="0.15" />
      <circle cx="24" cy="24" r="22" stroke="url(#waveGradient)" strokeWidth="2" fill="none" />
      
      {/* Stylized boat hull */}
      <path
        d="M12 28 L24 32 L36 28 L34 26 L14 26 Z"
        fill="url(#boatGradient)"
      />
      
      {/* Mast */}
      <line x1="24" y1="26" x2="24" y2="14" stroke="hsl(var(--foreground))" strokeWidth="2" strokeLinecap="round" />
      
      {/* Sail */}
      <path
        d="M25 15 L25 25 L32 23 Z"
        fill="url(#waveGradient)"
        opacity="0.9"
      />
      <path
        d="M23 15 L23 24 L16 22 Z"
        fill="url(#waveGradient)"
        opacity="0.6"
      />
      
      {/* Ocean waves below boat */}
      <path
        d="M8 34 Q12 32 16 34 Q20 36 24 34 Q28 32 32 34 Q36 36 40 34"
        stroke="url(#waveGradient)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M10 38 Q14 36 18 38 Q22 40 26 38 Q30 36 34 38 Q38 40 42 38"
        stroke="url(#waveGradient)"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  )
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-40 border-b border-border/30 bg-background/80 backdrop-blur-xl"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <UmiheisenLogo className="h-11 w-11" />
            <div>
              <h1 className="text-lg font-bold tracking-wide text-foreground">UMIHEISEN</h1>
              <p className="text-xs text-muted-foreground tracking-widest">海平線</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm text-foreground hover:text-primary transition-colors">
              Accueil
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Destinations
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Types de bateaux
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              À propos
            </a>
          </nav>

          {/* Search and CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Rechercher..."
                className="w-48 pl-9 bg-secondary/50 border-border/50 focus:border-primary"
              />
            </div>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Réserver
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border/30 py-4"
          >
            <nav className="flex flex-col gap-4">
              <a href="#" className="text-sm text-foreground">Accueil</a>
              <a href="#" className="text-sm text-muted-foreground">Destinations</a>
              <a href="#" className="text-sm text-muted-foreground">Types de bateaux</a>
              <a href="#" className="text-sm text-muted-foreground">À propos</a>
              <div className="pt-4 border-t border-border/30">
                <Button className="w-full bg-primary text-primary-foreground">
                  Réserver
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}
