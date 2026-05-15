"use client"

import { motion } from "framer-motion"
import { Search, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

function UmiheisenLogo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 260 260"
      className={className}
    >
      <defs>
        {/* Fond sombre */}
        <radialGradient id="bgGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style={{ stopColor: "#0d1b2a", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#060d15", stopOpacity: 1 }} />
        </radialGradient>
        {/* Cercle exterieur gradient or */}
        <linearGradient id="circleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#c8a96e", stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: "#f0d080", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#a07840", stopOpacity: 1 }} />
        </linearGradient>
        {/* Vagues gradient bleu */}
        <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#1a4a7a", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#2a6aaa", stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#1e5588", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#3a7abf", stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="waveGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#163d64", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#2a5f94", stopOpacity: 1 }} />
        </linearGradient>
        {/* Soleil/Lune gradient chaud */}
        <radialGradient id="sunGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style={{ stopColor: "#fff8e0", stopOpacity: 1 }} />
          <stop offset="40%" style={{ stopColor: "#ffd060", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#ff9020", stopOpacity: 0 }} />
        </radialGradient>
        {/* Halo soleil */}
        <radialGradient id="haloGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style={{ stopColor: "#ffd060", stopOpacity: 0.4 }} />
          <stop offset="100%" style={{ stopColor: "#ff9020", stopOpacity: 0 }} />
        </radialGradient>
        {/* Bateau gradient */}
        <linearGradient id="boatGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#c8d8e8", stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: "#e8f0f8", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#a0b8cc", stopOpacity: 1 }} />
        </linearGradient>
        {/* Clip cercle */}
        <clipPath id="circleClip">
          <circle cx="130" cy="130" r="118" />
        </clipPath>
        {/* Filtre lueur */}
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="softGlow">
          <feGaussianBlur stdDeviation="6" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      
      {/* Cercle principal fond sombre */}
      <circle cx="130" cy="130" r="125" fill="#0a1520" />
      {/* Cercle exterieur or */}
      <circle cx="130" cy="130" r="125" fill="none" stroke="url(#circleGrad)" strokeWidth="2.5" />
      {/* Cercle interieur fin */}
      <circle cx="130" cy="130" r="118" fill="none" stroke="url(#circleGrad)" strokeWidth="0.5" opacity="0.5" />
      
      {/* Contenu clipe dans le cercle */}
      <g clipPath="url(#circleClip)">
        {/* Fond degrade interieur */}
        <rect x="12" y="12" width="236" height="236" fill="url(#bgGrad)" />
        {/* Halo du soleil */}
        <ellipse cx="130" cy="123" rx="45" ry="35" fill="url(#haloGrad)" filter="url(#softGlow)" />
        {/* Horizon ligne lumineuse */}
        <line x1="12" y1="140" x2="248" y2="140" stroke="#c8a96e" strokeWidth="0.8" opacity="0.6" />
        {/* Soleil / lune */}
        <circle cx="130" cy="123" r="16" fill="url(#sunGrad)" filter="url(#glow)" />
        <circle cx="130" cy="123" r="10" fill="#fff8e0" opacity="0.9" />
        {/* Vague 1 (arriere) */}
        <path 
          d="M12 155 Q40 145 60 153 Q85 161 105 152 Q125 143 145 152 Q170 161 195 152 Q220 143 248 155 L248 170 Q220 160 195 167 Q170 175 145 166 Q125 158 105 166 Q85 175 60 167 Q40 160 12 170 Z"
          fill="url(#waveGrad3)" 
          opacity="0.8" 
        />
        {/* Vague 2 (milieu) */}
        <path 
          d="M12 163 Q35 152 58 160 Q82 168 103 159 Q123 150 143 159 Q168 168 192 158 Q217 149 248 160 L248 178 Q217 167 192 175 Q168 184 143 174 Q123 165 103 175 Q82 185 58 175 Q35 166 12 178 Z"
          fill="url(#waveGrad2)" 
          opacity="0.9" 
        />
        {/* Vague 3 (avant) */}
        <path 
          d="M12 173 Q32 159 55 168 Q80 178 100 167 Q120 156 140 167 Q165 178 190 166 Q215 155 248 168 L248 190 Q215 177 190 187 Q165 197 140 185 Q120 174 100 185 Q80 197 55 186 Q32 176 12 190 Z"
          fill="url(#waveGrad1)" 
        />
        {/* Remplissage eau bas */}
        <rect x="12" y="183" width="236" height="70" fill="#1a4a7a" />
        {/* Bateau - coque */}
        <path d="M45 140 L65 133 L115 133 L135 140 L130 145 L50 145 Z" fill="url(#boatGrad)" />
        {/* Bateau - superstructure */}
        <path d="M65 133 L70 123 L100 123 L105 128 L115 133 Z" fill="#d0e0f0" />
        {/* Bateau - cabine */}
        <rect x="73" y="119" width="22" height="9" rx="2" fill="#e0eaf5" />
        {/* Ligne de flottaison */}
        <line x1="48" y1="145" x2="132" y2="145" stroke="#c8a96e" strokeWidth="0.8" opacity="0.7" />
        {/* Reflet bateau sur eau */}
        <path d="M50 147 L65 150 L115 150 L130 147" stroke="#a0c0d8" strokeWidth="0.5" fill="none" opacity="0.4" />
      </g>
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
            <UmiheisenLogo className="h-12 w-12" />
            <div>
              <h1 className="text-lg font-bold tracking-wide text-foreground">UMIHEISEN</h1>
              <p className="text-xs text-muted-foreground tracking-widest">海平線</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          {/*
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
          */}

          {/* Search and CTA */}
          {/*
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
          */}

          {/* Mobile menu button */}
          {/*
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
        /*}

        {/* Mobile menu */}
        {/*
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
        */}
      </div>
    </motion.header>
  )
}
