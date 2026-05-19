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
    name: "Jeanneau Sun Odyssey 32.2",
    type: "Voilier",
    image: "https://cdn.samboat.fr/announcements-v2/69760fc5a8c2f-l.webp",
    price: 320,
    length: 9.5,
    capacity: 6,
    speed: 10,
    year: 2002,
    location: "Marseille",
    features: ["2 cabines", "Bateau seul", "Voilier classique"],
    rating: 4.5,
    link: "https://www.samboat.fr/location-bateau/marseille/voilier/34?utm_source=affilae&utm_medium=cpa&utm_campaign=UMIHEISEN&ae=2037"
  },
  {
    id: "2",
    name: "H2O Yachts 18m",
    type: "Voilier",
    image: "https://cdn.samboat.fr/announcements-v2/66474ad8b3e43-l.webp",
    price: 850,
    length: 18,
    capacity: 14,
    speed: 12,
    year: 2000,
    location: "Marseille (Vieux-Port)",
    features: ["4 cabines", "Avec ou sans skipper", "Grand voilier"],
    rating: 4.6,
    link: "https://www.samboat.fr/location-bateau/marseille/voilier/1175?utm_source=affilae&utm_medium=cpa&utm_campaign=UMIHEISEN&ae=2037"
  },
  {
    id: "3",
    name: "Fountaine Pajot Elba 45",
    type: "Catamaran",
    image: "https://cdn.samboat.fr/announcements-v2/653063f4bf561-l.webp",
    price: 1200,
    length: 13.5,
    capacity: 15,
    speed: 12,
    year: 2020,
    location: "Cannes (Port Pierre Canto)",
    features: ["4 cabines", "Skipper inclus", "Récent"],
    rating: 4.8,
    link: "https://www.samboat.fr/location-bateau/cannes/catamaran/68556?utm_source=affilae&utm_medium=cpa&utm_campaign=UMIHEISEN&ae=2037"
  },
  {
    id: "4",
    name: "Zodiac Bombard Explorer 700",
    type: "Semi-rigide",
    image: "https://cdn.samboat.fr/announcements-v2/69760fc5a8c2f-l.webp",
    price: 350,
    length: 7,
    capacity: 9,
    speed: 40,
    year: 2018,
    location: "Saint-Jean-Cap-Ferrat",
    features: ["150cv", "Bateau seul", "Rapide"],
    rating: 5.0,
    link: "https://www.samboat.fr/location-bateau/saint-jean-cap-ferrat/semi-rigide/209127?utm_source=affilae&utm_medium=cpa&utm_campaign=UMIHEISEN&ae=2037"
  },
  {
    id: "5",
    name: "Kruger Stella",
    type: "Bateau à moteur",
    image: "https://cdn.samboat.fr/announcements-v2/66856dfe85629-l.webp",
    price: 150,
    length: 4.7,
    capacity: 5,
    speed: 15,
    year: 2020,
    location: "Marseille (L'Estaque)",
    features: ["6cv", "Bateau seul", "Sans permis"],
    rating: 5.0,
    link: "https://www.samboat.fr/location-bateau/marseille/bateau-a-moteur/177504?utm_source=affilae&utm_medium=cpa&utm_campaign=UMIHEISEN&ae=2037"
  },
  {
    id: "6",
    name: "Brig Navigator 570",
    type: "Bateau à moteur",
    image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=800&q=80",
    price: 280,
    length: 5.7,
    capacity: 8,
    speed: 30,
    year: 2017,
    location: "Marseille (L'Estaque)",
    features: ["115cv", "Bateau seul", "Semi-rigide"],
    rating: 4.7,
    link: "https://www.samboat.fr/location-bateau/marseille/bateau-a-moteur/216634?utm_source=affilae&utm_medium=cpa&utm_campaign=UMIHEISEN&ae=2037"
  },
 // EXEMPLE
  //{
   // id: "12",
   // name: "Grand Soleil 44",
   // type: "Voilier",
   // image: "https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800&q=80",
   // price: 480,
   // length: 13,
   // capacity: 8,
   // speed: 10,
  //  year: 2020,
  //  location: "Port de Toulon",
  //  features: ["Performance", "Confort", "3 cabines", "Cockpit spacieux"],
  //  rating: 4.7,
  //},
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
