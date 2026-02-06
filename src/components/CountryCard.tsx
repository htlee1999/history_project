import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CountryCard as CountryCardType } from "@/data/historyData"
import { ArrowRight } from "lucide-react"

interface CountryCardProps {
  country: CountryCardType;
  onOpenTimeline: (countryId: string) => void;
}

export function CountryCard({ country, onOpenTimeline }: CountryCardProps) {
  return (
    <Card className="group relative overflow-hidden card-hover bg-card border-border/60 shadow-sm">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500/60 via-amber-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <CardHeader className="text-center pb-3">
        <div className="text-5xl mb-4 transition-transform duration-500 ease-out group-hover:scale-105">
          {country.flag}
        </div>
        <CardTitle className="text-xl font-medium text-foreground tracking-tight">
          {country.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        <CardDescription className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
          {country.summary}
        </CardDescription>
        <Button 
          onClick={() => onOpenTimeline(country.id)}
          variant="outline"
          className="w-full group/btn border-border/80 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
        >
          <span>Explore History</span>
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </Button>
      </CardContent>
    </Card>
  )
}
