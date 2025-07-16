import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CountryCard as CountryCardType } from "@/data/historyData"

interface CountryCardProps {
  country: CountryCardType;
  onOpenTimeline: (countryId: string) => void;
}

export function CountryCard({ country, onOpenTimeline }: CountryCardProps) {
  return (
    <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-white border-gray-200 shadow-lg">
      <CardHeader className="text-center">
        <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">
          {country.flag}
        </div>
        <CardTitle className="text-2xl font-bold text-gray-800">
          {country.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardDescription className="text-gray-600 text-base leading-relaxed">
          {country.summary}
        </CardDescription>
        <Button 
          onClick={() => onOpenTimeline(country.id)}
          className="w-full bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-medium py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Explore {country.name.split(' ')[0]} History
        </Button>
      </CardContent>
    </Card>
  )
}