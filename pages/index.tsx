import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CountryCard } from "@/components/CountryCard"
import { TimelineModal } from "@/components/TimelineModal"
import { CultureGallery } from "@/components/CultureGallery"
import { countryCards } from "@/data/historyData"
import { Flag, Crown, Landmark, Palette } from 'lucide-react'

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenTimeline = (countryId: string) => {
    setSelectedCountry(countryId)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedCountry(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 relative">
      {/* Background overlay */}
      <div className="fixed inset-0 bg-gradient-to-r from-gray-50/50 to-white/50 -z-10" />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-gray-200">
            <h1 className="text-5xl font-light text-gray-800 mb-4 tracking-wide">
              World History Documentation
            </h1>
            <p className="text-xl text-gray-600 italic">
              Exploring the rich histories of civilizations across time
            </p>
          </div>
        </header>

        {/* Navigation Tabs */}
        <Tabs defaultValue="country" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8 bg-white/80 backdrop-blur-md rounded-xl p-1 shadow-lg border border-gray-200 h-14">
            <TabsTrigger 
              value="country" 
              className="flex items-center gap-2 data-[state=active]:!bg-gray-800 data-[state=active]:!text-white data-[state=active]:!shadow-lg rounded-lg font-medium transition-all duration-300 h-12"
            >
              <Flag className="h-4 w-4" />
              Nations
            </TabsTrigger>
            <TabsTrigger 
              value="empire" 
              className="flex items-center gap-2 data-[state=active]:!bg-gray-800 data-[state=active]:!text-white data-[state=active]:!shadow-lg rounded-lg font-medium transition-all duration-300 h-12"
            >
              <Crown className="h-4 w-4" />
              Empires
            </TabsTrigger>
            <TabsTrigger 
              value="culture" 
              className="flex items-center gap-2 data-[state=active]:!bg-gray-800 data-[state=active]:!text-white data-[state=active]:!shadow-lg rounded-lg font-medium transition-all duration-300 h-12"
            >
              <Landmark className="h-4 w-4" />
              Ancient Civilizations
            </TabsTrigger>
            <TabsTrigger 
              value="arts" 
              className="flex items-center gap-2 data-[state=active]:!bg-gray-800 data-[state=active]:!text-white data-[state=active]:!shadow-lg rounded-lg font-medium transition-all duration-300 h-12"
            >
              <Palette className="h-4 w-4" />
              Arts & Culture
            </TabsTrigger>
          </TabsList>

          {/* Country Tab */}
          <TabsContent value="country" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {countryCards.country.map((country) => (
                <CountryCard 
                  key={country.id} 
                  country={country} 
                  onOpenTimeline={handleOpenTimeline}
                />
              ))}
            </div>
          </TabsContent>

          {/* Empire Tab */}
          <TabsContent value="empire" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {countryCards.empire.map((country) => (
                <CountryCard 
                  key={country.id} 
                  country={country} 
                  onOpenTimeline={handleOpenTimeline}
                />
              ))}
            </div>
          </TabsContent>

          {/* Culture Tab */}
          <TabsContent value="culture" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {countryCards.culture.map((country) => (
                <CountryCard 
                  key={country.id} 
                  country={country} 
                  onOpenTimeline={handleOpenTimeline}
                />
              ))}
            </div>
          </TabsContent>

          {/* Arts Tab */}
          <TabsContent value="arts" className="space-y-6">
            <CultureGallery />
          </TabsContent>
        </Tabs>

        {/* Timeline Modal */}
        <TimelineModal 
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          countryId={selectedCountry}
        />
      </div>
    </div>
  )
}