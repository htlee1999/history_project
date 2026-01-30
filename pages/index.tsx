import { useState, useEffect, useRef } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CountryCard } from "@/components/CountryCard"
import { TimelineModal } from "@/components/TimelineModal"
import { CultureGallery } from "@/components/CultureGallery"
import { WorldTimeline } from "@/components/WorldTimeline"
import { ScrollToTopButton } from "@/components/ScrollToTopButton"
import { countryCards } from "@/data/historyData"
import { Flag, Crown, Landmark, Palette, Globe, ChevronDown } from 'lucide-react'

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)
  const [showTimeline, setShowTimeline] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('world')
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleOpenTimeline = (countryId: string) => {
    setSelectedCountry(countryId)
    setShowTimeline(true)
  }

  const handleBackToCards = () => {
    setShowTimeline(false)
    setSelectedCountry(null)
  }

  const tabOptions = [
    { value: 'world', label: 'World Timeline', icon: Globe },
    { value: 'country', label: 'Nations', icon: Flag },
    { value: 'empire', label: 'Empires', icon: Crown },
    { value: 'culture', label: 'Ancient Civilizations', icon: Landmark },
    { value: 'arts', label: 'Arts & Culture', icon: Palette }
  ]

  const currentTab = tabOptions.find(tab => tab.value === activeTab)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Show timeline page if a country is selected
  if (showTimeline && selectedCountry) {
    return (
      <TimelineModal 
        isOpen={true}
        onClose={handleBackToCards}
        countryId={selectedCountry}
      />
    )
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 relative">
      {/* Background overlay */}
      <div className="fixed inset-0 bg-gradient-to-r from-gray-50/50 to-white/50 -z-10" />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="custom-header">
          <div className="content-section">
            <div className="breadcrumb">Historical Archives</div>
            <h1>World History Documentation</h1>
            <p className="subtitle">A comprehensive digital repository exploring the evolution of civilizations, empires, and cultures throughout human history.</p>
          </div>
          
          <div className="stats-section">
            <div className="stat">
              <span className="stat-number">10</span>
              <span className="stat-label">Civilizations</span>
            </div>
            <div className="stat">
              <span className="stat-number">5000+</span>
              <span className="stat-label">Years Covered</span>
            </div>
            <div className="stat">
              <span className="stat-number">4</span>
              <span className="stat-label">Categories</span>
            </div>
            <div className="stat">
              <span className="stat-number">150+</span>
              <span className="stat-label">Events</span>
            </div>
          </div>
        </header>

        {/* Navigation */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div id="navigation-tabs">
            {/* Desktop Tabs */}
            <TabsList className="hidden md:grid w-full grid-cols-5 mb-8 bg-white/80 backdrop-blur-md rounded-xl p-1 shadow-lg border border-gray-200 h-14">
            {tabOptions.map((tab) => {
              const IconComponent = tab.icon
              return (
                <TabsTrigger 
                  key={tab.value}
                  value={tab.value} 
                  className="flex items-center gap-2 data-[state=active]:!bg-gray-800 data-[state=active]:!text-white data-[state=active]:!shadow-lg rounded-lg font-medium transition-all duration-300 h-12"
                >
                  <IconComponent className="h-4 w-4" />
                  {tab.label}
                </TabsTrigger>
              )
            })}
            </TabsList>

            {/* Mobile Dropdown */}
            <div ref={dropdownRef} className="md:hidden mb-8 relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full bg-white/80 backdrop-blur-md rounded-xl p-4 shadow-lg border border-gray-200 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                {currentTab && <currentTab.icon className="h-5 w-5 text-gray-600" />}
                <span className="font-medium text-gray-800">
                  {currentTab?.label || 'Select Category'}
                </span>
              </div>
              <ChevronDown className={`h-5 w-5 text-gray-600 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-200 z-50">
                {tabOptions.map((tab) => {
                  const IconComponent = tab.icon
                  return (
                    <button
                      key={tab.value}
                      onClick={() => {
                        setActiveTab(tab.value)
                        setIsDropdownOpen(false)
                      }}
                      className={`w-full p-4 flex items-center gap-3 text-left hover:bg-gray-50 transition-colors first:rounded-t-xl last:rounded-b-xl ${
                        activeTab === tab.value ? 'bg-gray-800 text-white hover:bg-gray-800' : 'text-gray-800'
                      }`}
                    >
                      <IconComponent className="h-5 w-5" />
                      <span className="font-medium">{tab.label}</span>
                    </button>
                  )
                })}
              </div>
            )}
            </div>
          </div>

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


          {/* World Timeline Tab */}
          <TabsContent value="world" className="space-y-6">
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-gray-200">
              <WorldTimeline />
            </div>
          </TabsContent>

          {/* Arts Tab */}
          <TabsContent value="arts" className="space-y-6">
            <CultureGallery />
          </TabsContent>
        </Tabs>

        {/* Scroll to Top Button */}
        <ScrollToTopButton targetElementId="navigation-tabs" />
      </div>
    </div>
  )
}