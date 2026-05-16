"use client"
import { motion } from "framer-motion"
import { Search, MapPin, Calendar, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-4 lg:py-6">
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center -mt-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6"
          >
            {/*
            <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary backdrop-blur-sm">
              ✦ Plus de 500 bateaux disponibles
            </span>
            */}
          </motion.div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            <span className="block">Naviguez en</span>
            <span className="block bg-gradient-to-r from-primary via-champagne to-gold-light bg-clip-text text-transparent">
              Méditerranée
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground text-pretty">
            Comparez et réservez les plus beaux bateaux de la Méditerranée. 
            Yachts de luxe, voiliers élégants ou catamarans spacieux — 
            trouvez le bateau parfait pour votre prochaine aventure maritime.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
