"use client"

import { motion } from "framer-motion"
import { Anchor, Users, Ruler, Gauge, Wind, MapPin, Check } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export interface Boat {
  id: string
  name: string
  type: string
  image: string
  price: number
  length: number
  capacity: number
  speed: number
  year: number
  location: string
  features: string[]
  rating: number
  sansPermis: boolean
  isSelected?: boolean
}

interface BoatCardProps {
  boat: Boat
  onSelect: (boat: Boat) => void
  onCompare: (boat: Boat) => void
  isComparing: boolean
  index: number
}

export function BoatCard({ boat, onSelect, onCompare, isComparing, index }: BoatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card 
        className={cn(
          "group relative overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10",
          isComparing && "ring-2 ring-primary border-primary"
        )}
      >
        {/* Image section */}
        <div className="relative h-48 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${boat.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
          
          {/* Compare checkbox */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onCompare(boat)}
            className={cn(
              "absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full border-2 transition-all duration-300",
              isComparing 
                ? "border-primary bg-primary text-primary-foreground" 
                : "border-gold-accent/30 bg-background/50 backdrop-blur-sm hover:border-primary"
            )}
          >
            {isComparing && <Check className="h-4 w-4" />}
          </motion.button>
          
          {/* Type badge */}
          <Badge className="absolute top-3 left-3 bg-primary/90 text-primary-foreground backdrop-blur-sm">
            {boat.type}
          </Badge>
          
          {/* Sans Permis badge */}
          {boat.sansPermis && (
            <Badge className="absolute top-12 left-3 bg-emerald-600/90 text-white backdrop-blur-sm">
              Sans Permis
            </Badge>
          )}
          
          {/* Rating */}
          <div className="absolute bottom-3 left-3 flex items-center gap-1 rounded-full bg-background/80 px-2 py-1 backdrop-blur-sm">
            <span className="text-gold-accent">★</span>
            <span className="text-sm font-medium text-foreground">{boat.rating.toFixed(1)}</span>
          </div>
        </div>
        
        <CardContent className="p-5">
          {/* Title and location */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
              {boat.name}
            </h3>
            <div className="mt-1 flex items-center gap-1.5 text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" />
              <span className="text-sm">{boat.location}</span>
            </div>
          </div>
          
          {/* Specs grid */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="flex items-center gap-2 text-sm">
              <Ruler className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">{boat.length}m</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Users className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">{boat.capacity} pers.</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Gauge className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">{boat.speed} kn</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Anchor className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">{boat.year}</span>
            </div>
          </div>
          
          {/* Features */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {boat.features.slice(0, 3).map((feature) => (
              <Badge 
                key={feature} 
                variant="secondary" 
                className="bg-secondary/50 text-secondary-foreground text-xs"
              >
                {feature}
              </Badge>
            ))}
            {boat.features.length > 3 && (
              <Badge variant="secondary" className="bg-secondary/50 text-xs">
                +{boat.features.length - 3}
              </Badge>
            )}
          </div>
          
          {/* Price and action */}
          <div className="flex items-center justify-between border-t border-border/50 pt-4">
            <div>
              <span className="text-2xl font-bold text-foreground">
                {boat.price.toLocaleString()}€
              </span>
              <span className="text-sm text-muted-foreground">/jour</span>
            </div>
            <Button 
              onClick={() => onSelect(boat)}
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
            >
            <a
            href={boat.link}
            target="_blank"
            rel="noopener noreferrer"
            >
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300">Voir détails</Button> </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
