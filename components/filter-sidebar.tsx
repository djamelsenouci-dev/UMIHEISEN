"use client"

import { motion } from "framer-motion"
import { Anchor, SlidersHorizontal, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export interface Filters {
  priceRange: [number, number]
  lengthRange: [number, number]
  capacityMin: number
  types: string[]
  locations: string[]
  sortBy: string
}

interface FilterSidebarProps {
  filters: Filters
  onFilterChange: (filters: Filters) => void
  onReset: () => void
}

const boatTypes = ["Yacht", "Voilier", "Catamaran", "Hors-bord", "Semi-rigide"]

// Ports de la Côte d'Azur et Méditerranée
const locations = [
  // Côte d'Azur
  "Port de Nice",
  "Port de Cannes",
  "Port de Saint-Tropez",
  "Port de Monaco",
  "Port d'Antibes",
  "Port de Villefranche",
  // Provence
  "Port de Marseille",
  "Port de Cassis",
  "Port de Toulon",
  "Port de Bandol",
  // Corse
  "Port d'Ajaccio",
  "Port de Bonifacio",
  "Port de Calvi",
  "Port de Bastia",
  // Italie
  "Port de Portofino",
  "Port de San Remo",
]

export function FilterSidebar({ filters, onFilterChange, onReset }: FilterSidebarProps) {
  const updateFilter = <K extends keyof Filters>(key: K, value: Filters[K]) => {
    onFilterChange({ ...filters, [key]: value })
  }

  const toggleType = (type: string) => {
    const newTypes = filters.types.includes(type)
      ? filters.types.filter(t => t !== type)
      : [...filters.types, type]
    updateFilter("types", newTypes)
  }

  const toggleLocation = (location: string) => {
    const newLocations = filters.locations.includes(location)
      ? filters.locations.filter(l => l !== location)
      : [...filters.locations, location]
    updateFilter("locations", newLocations)
  }

  return (
    <motion.aside
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-24 h-fit rounded-xl border border-border/50 bg-card/80 backdrop-blur-sm p-5"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="h-5 w-5 text-primary" />
          <h2 className="font-semibold text-foreground">Filtres</h2>
        </div>
        <Button variant="ghost" size="sm" onClick={onReset} className="text-muted-foreground hover:text-foreground">
          <RotateCcw className="h-4 w-4 mr-1" />
          Reset
        </Button>
      </div>

      <div className="space-y-6">
        {/* Sort */}
        <div>
          <Label className="text-sm text-muted-foreground mb-2 block">Trier par</Label>
          <Select value={filters.sortBy} onValueChange={(v) => updateFilter("sortBy", v)}>
            <SelectTrigger className="bg-secondary/50 border-border/50">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="price-asc">Prix croissant</SelectItem>
              <SelectItem value="price-desc">Prix décroissant</SelectItem>
              <SelectItem value="rating">Meilleures notes</SelectItem>
              <SelectItem value="length">Taille</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Price range */}
        <div>
          <Label className="text-sm text-muted-foreground mb-3 block">
            Budget: {filters.priceRange[0].toLocaleString()}€ - {filters.priceRange[1].toLocaleString()}€
          </Label>
          <Slider
            value={filters.priceRange}
            onValueChange={(v) => updateFilter("priceRange", v as [number, number])}
            min={150}
            max={1500}
            step={50}
            className="mt-2"
          />
        </div>

        {/* Length range */}
        <div>
          <Label className="text-sm text-muted-foreground mb-3 block">
            Longueur: {filters.lengthRange[0]}m - {filters.lengthRange[1]}m
          </Label>
          <Slider
            value={filters.lengthRange}
            onValueChange={(v) => updateFilter("lengthRange", v as [number, number])}
            min={5}
            max={50}
            step={1}
            className="mt-2"
          />
        </div>

        {/* Capacity */}
        <div>
          <Label className="text-sm text-muted-foreground mb-3 block">
            Capacité min: {filters.capacityMin} personnes
          </Label>
          <Slider
            value={[filters.capacityMin]}
            onValueChange={(v) => updateFilter("capacityMin", v[0])}
            min={1}
            max={20}
            step={1}
            className="mt-2"
          />
        </div>

        {/* Boat types */}
        <div>
          <Label className="text-sm text-muted-foreground mb-3 block">Type de bateau</Label>
          <div className="space-y-2">
            {boatTypes.map((type) => (
              <div key={type} className="flex items-center gap-2">
                <Checkbox
                  id={`type-${type}`}
                  checked={filters.types.includes(type)}
                  onCheckedChange={() => toggleType(type)}
                  className="border-border data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                />
                <label
                  htmlFor={`type-${type}`}
                  className="text-sm text-foreground cursor-pointer"
                >
                  {type}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Locations */}
        <div>
          <Label className="text-sm text-muted-foreground mb-3 block">Destination</Label>
          <div className="space-y-2">
            {locations.map((location) => (
              <div key={location} className="flex items-center gap-2">
                <Checkbox
                  id={`loc-${location}`}
                  checked={filters.locations.includes(location)}
                  onCheckedChange={() => toggleLocation(location)}
                  className="border-border data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                />
                <label
                  htmlFor={`loc-${location}`}
                  className="text-sm text-foreground cursor-pointer"
                >
                  {location}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Apply button */}
      <Button className="w-full mt-6 bg-primary text-primary-foreground hover:bg-primary/90">
        <Anchor className="h-4 w-4 mr-2" />
        Appliquer
      </Button>
    </motion.aside>
  )
}
