"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BoatCard, type Boat } from "./boat-card"
import { FilterSidebar, type Filters } from "./filter-sidebar"
import { ComparisonPanel } from "./comparison-panel"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Ship, X, Filter } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

// Sample boat data - Ports de la Côte d'Azur et Méditerranée
const boatsData: Boat[] = [
  {
    id: "1",
    name: "Azimut Grande 27",
    type: "Yacht",
    image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80",
    price: 1450,
    length: 27,
    capacity: 12,
    speed: 28,
    year: 2022,
    location: "Port de Monaco",
    features: ["Climatisation", "Jacuzzi", "Cuisine équipée", "Cabines de luxe", "Wi-Fi"],
    rating: 4.9,
  },
  {
    id: "2",
    name: "Beneteau Oceanis 46.1",
    type: "Voilier",
    image: "https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800&q=80",
    price: 520,
    length: 14,
    capacity: 8,
    speed: 12,
    year: 2021,
    location: "Port de Bonifacio",
    features: ["Voiles neuves", "Pilote automatique", "Annexe", "Cuisine"],
    rating: 4.7,
  },
  {
    id: "3",
    name: "Lagoon 52 S",
    type: "Catamaran",
    image: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=800&q=80",
    price: 890,
    length: 16,
    capacity: 14,
    speed: 15,
    year: 2023,
    location: "Port de Cannes",
    features: ["Spacieux", "Stable", "Climatisation", "Panneau solaire", "Dessalinisateur"],
    rating: 4.8,
  },
  {
    id: "4",
    name: "Sunseeker Predator 55",
    type: "Yacht",
    image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=800&q=80",
    price: 1280,
    length: 17,
    capacity: 10,
    speed: 35,
    year: 2020,
    location: "Port de Saint-Tropez",
    features: ["Sportif", "Cabine master", "Cuisine", "Climatisation"],
    rating: 4.6,
  },
  {
    id: "5",
    name: "Riva Aquarama",
    type: "Hors-bord",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    price: 650,
    length: 8,
    capacity: 6,
    speed: 40,
    year: 2019,
    location: "Port de Nice",
    features: ["Design classique", "Rapide", "Bois précieux"],
    rating: 4.9,
  },
  {
    id: "6",
    name: "Princess V65",
    type: "Yacht",
    image: "https://images.unsplash.com/photo-1559599746-8823b38544c6?w=800&q=80",
    price: 1350,
    length: 20,
    capacity: 8,
    speed: 32,
    year: 2022,
    location: "Port d'Antibes",
    features: ["Luxueux", "Flybridge", "Jacuzzi", "Bar", "Climatisation"],
    rating: 4.8,
  },
  {
    id: "7",
    name: "Zodiac Medline 850",
    type: "Semi-rigide",
    image: "https://images.unsplash.com/photo-1588401667987-e06480c453bc?w=800&q=80",
    price: 180,
    length: 8.5,
    capacity: 12,
    speed: 45,
    year: 2023,
    location: "Port de Marseille",
    features: ["Maniable", "Rapide", "Polyvalent", "T-Top"],
    rating: 4.5,
  },
  {
    id: "8",
    name: "Dufour 530",
    type: "Voilier",
    image: "https://images.unsplash.com/photo-1500514966906-fe245eea9344?w=800&q=80",
    price: 620,
    length: 16,
    capacity: 10,
    speed: 14,
    year: 2021,
    location: "Port d'Ajaccio",
    features: ["Grand voilier", "Confortable", "5 cabines", "Cuisine équipée"],
    rating: 4.7,
  },
  {
    id: "9",
    name: "Jeanneau Leader 36",
    type: "Hors-bord",
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80",
    price: 420,
    length: 11,
    capacity: 8,
    speed: 32,
    year: 2022,
    location: "Port de Villefranche",
    features: ["Sportif", "Cabine double", "Bain de soleil", "Cuisine"],
    rating: 4.6,
  },
  {
    id: "10",
    name: "Fountaine Pajot Isla 40",
    type: "Catamaran",
    image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=800&q=80",
    price: 780,
    length: 12,
    capacity: 10,
    speed: 12,
    year: 2023,
    location: "Port de Calvi",
    features: ["Nouveau modèle", "4 cabines", "Flybridge", "Dessalinisateur"],
    rating: 4.8,
  },
  {
    id: "11",
    name: "Pershing 62",
    type: "Yacht",
    image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80",
    price: 1500,
    length: 19,
    capacity: 8,
    speed: 42,
    year: 2021,
    location: "Port de Portofino",
    features: ["Ultra rapide", "Design italien", "Cabines luxe", "Climatisation"],
    rating: 4.9,
  },
  {
    id: "12",
    name: "Grand Soleil 44",
    type: "Voilier",
    image: "https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800&q=80",
    price: 480,
    length: 13,
    capacity: 8,
    speed: 10,
    year: 2020,
    location: "Port de Toulon",
    features: ["Performance", "Confort", "3 cabines", "Cockpit spacieux"],
    rating: 4.7,
  },
]

const defaultFilters: Filters = {
  priceRange: [150, 1500],
  lengthRange: [5, 50],
  capacityMin: 1,
  types: [],
  locations: [],
  sortBy: "price-asc",
}

export function BoatComparator() {
  const [filters, setFilters] = useState<Filters>(defaultFilters)
  const [comparedBoats, setComparedBoats] = useState<Boat[]>([])
  const [showComparison, setShowComparison] = useState(false)
  const [selectedBoat, setSelectedBoat] = useState<Boat | null>(null)

  const filteredBoats = useMemo(() => {
    let result = boatsData.filter((boat) => {
      if (boat.price < filters.priceRange[0] || boat.price > filters.priceRange[1]) return false
      if (boat.length < filters.lengthRange[0] || boat.length > filters.lengthRange[1]) return false
      if (boat.capacity < filters.capacityMin) return false
      if (filters.types.length > 0 && !filters.types.includes(boat.type)) return false
      if (filters.locations.length > 0 && !filters.locations.includes(boat.location)) return false
      return true
    })

    // Sort
    switch (filters.sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        result.sort((a, b) => b.price - a.price)
        break
      case "rating":
        result.sort((a, b) => b.rating - a.rating)
        break
      case "length":
        result.sort((a, b) => b.length - a.length)
        break
    }

    return result
  }, [filters])

  const handleCompare = (boat: Boat) => {
    setComparedBoats((prev) => {
      const isComparing = prev.some((b) => b.id === boat.id)
      if (isComparing) {
        return prev.filter((b) => b.id !== boat.id)
      }
      if (prev.length >= 4) return prev // Max 4 boats
      return [...prev, boat]
    })
  }

  const handleRemoveFromComparison = (boat: Boat) => {
    setComparedBoats((prev) => prev.filter((b) => b.id !== boat.id))
  }

  return (
    <section className="relative z-10 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              Nos bateaux disponibles
            </h2>
            <p className="mt-1 text-muted-foreground">
              {filteredBoats.length} bateau{filteredBoats.length > 1 ? "x" : ""} correspondant à vos critères
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Mobile filter button */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="lg:hidden">
                  <Filter className="h-4 w-4 mr-2" />
                  Filtres
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 bg-card border-border">
                <FilterSidebar
                  filters={filters}
                  onFilterChange={setFilters}
                  onReset={() => setFilters(defaultFilters)}
                />
              </SheetContent>
            </Sheet>

            {comparedBoats.length > 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <Button
                  onClick={() => setShowComparison(true)}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Ship className="h-4 w-4 mr-2" />
                  Comparer ({comparedBoats.length})
                </Button>
              </motion.div>
            )}
          </div>
        </div>

        {/* Selected boats badges */}
        <AnimatePresence>
          {comparedBoats.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {comparedBoats.map((boat) => (
                <Badge
                  key={boat.id}
                  className="bg-primary/20 text-primary border border-primary/30 pr-1"
                >
                  {boat.name}
                  <button
                    onClick={() => handleRemoveFromComparison(boat)}
                    className="ml-2 rounded-full p-0.5 hover:bg-primary/30"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main content */}
        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <div className="hidden lg:block w-72 flex-shrink-0">
            <FilterSidebar
              filters={filters}
              onFilterChange={setFilters}
              onReset={() => setFilters(defaultFilters)}
            />
          </div>

          {/* Boats grid */}
          <div className="flex-1">
            {filteredBoats.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filteredBoats.map((boat, index) => (
                  <BoatCard
                    key={boat.id}
                    boat={boat}
                    onSelect={setSelectedBoat}
                    onCompare={handleCompare}
                    isComparing={comparedBoats.some((b) => b.id === boat.id)}
                    index={index}
                  />
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <Ship className="h-16 w-16 text-muted-foreground/50 mb-4" />
                <h3 className="text-xl font-semibold text-foreground">
                  Aucun bateau trouvé
                </h3>
                <p className="mt-2 text-muted-foreground max-w-md">
                  Essayez de modifier vos critères de recherche pour trouver le bateau parfait.
                </p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => setFilters(defaultFilters)}
                >
                  Réinitialiser les filtres
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Comparison panel */}
      {showComparison && (
        <ComparisonPanel
          boats={comparedBoats}
          onRemove={handleRemoveFromComparison}
          onClose={() => setShowComparison(false)}
        />
      )}
    </section>
  )
}
