"use client"

import { motion } from "framer-motion"
// Imports supprimés car inutilisés actuellement
// import { Search, MapPin, Calendar, Users } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center -mt-24"
        >
          {/*
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary backdrop-blur-sm">
              ✦ Plus de 500 bateaux disponibles
            </span>
          </motion.div>
          */}

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

        {/*
        Search form
        */}

        {/*
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-12"
        >
          <div className="mx-auto max-w-4xl rounded-2xl border border-border/50 bg-card/80 p-4 backdrop-blur-xl shadow-xl shadow-primary/5">
            <div className="grid gap-4 md:grid-cols-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-primary" />

                <Input
                  placeholder="Destination"
                  className="border-border/50 bg-secondary/50 pl-10"
                />
              </div>

              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-primary" />

                <Input
                  type="date"
                  className="border-border/50 bg-secondary/50 pl-10"
                />
              </div>

              <div className="relative">
                <Users className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-primary" />

                <Input
                  placeholder="Passagers"
                  type="number"
                  min="1"
                  className="border-border/50 bg-secondary/50 pl-10"
                />
              </div>

              <Button className="h-10 w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Search className="mr-2 h-4 w-4" />
                Rechercher
              </Button>
            </div>
          </div>
        </motion.div>
        */}

        {/*
        Stats
        */}

        {/*
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          {[
            { value: "500+", label: "Bateaux" },
            { value: "15", label: "Destinations" },
            { value: "10k+", label: "Clients satisfaits" },
            { value: "4.9", label: "Note moyenne" },
          ].map((stat, i) => (
            <div key={stat.label} className="text-center">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.1 }}
                className="text-3xl font-bold text-foreground"
              >
                {stat.value}
              </motion.p>

              <p className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
        */}
      </div>
    </section>
  )
}
