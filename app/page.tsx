import { WaveBackground } from "@/components/wave-background"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { BoatComparator } from "@/components/boat-comparator"

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <WaveBackground />
      <Header />
      <main>
        <HeroSection />
        <BoatComparator />
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 border-t border-border/30 bg-card/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4 tracking-wide">UMIHEISEN</h3>
              <p className="text-sm text-muted-foreground">
                Vous rêvez d’évasion ? Umiheisen 海平線, le 1er comparateur de location de bateaux en France. Trouvez le bateau qui vous mènera là où la mer rencontre l’horizon.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">Cote d&apos;Azur</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Port de Nice</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Port de Cannes</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Port de Saint-Tropez</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Port de Monaco</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Port d&apos;Antibes</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">Mediterranee</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Port de Marseille</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Port de Bonifacio</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Port d&apos;Ajaccio</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Port de Portofino</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">Types de bateaux</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Yachts</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Voiliers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Catamarans</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Semi-rigides</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>contact@umiheisen.com</li>
                <li>+33 4 93 00 00 00</li>
                <li>Port de Nice, France</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border/30 text-center text-sm text-muted-foreground">
            <p>© 2026 UMIHEISEN. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
