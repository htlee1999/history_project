import { useState, useEffect, useRef, useMemo } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CountryCard } from "@/components/CountryCard"
import { TimelineModal } from "@/components/TimelineModal"
import { CultureGallery } from "@/components/CultureGallery"
import { WorldTimeline } from "@/components/WorldTimeline"
import { ScrollToTopButton } from "@/components/ScrollToTopButton"
import { countryCards } from "@/data/historyData"
import { Flag, Crown, Landmark, Palette, Globe, ChevronDown, Search, X } from 'lucide-react'

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)
  const [showTimeline, setShowTimeline] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('world')
  const [searchQuery, setSearchQuery] = useState('')
  const dropdownRef = useRef<HTMLDivElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)

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

  // Filter countries based on search query
  const filteredCountryCards = useMemo(() => {
    if (!searchQuery.trim()) return countryCards
    const query = searchQuery.toLowerCase()
    return {
      country: countryCards.country.filter(c => 
        c.name.toLowerCase().includes(query) || 
        c.summary.toLowerCase().includes(query)
      ),
      empire: countryCards.empire.filter(c => 
        c.name.toLowerCase().includes(query) || 
        c.summary.toLowerCase().includes(query)
      ),
      culture: countryCards.culture.filter(c => 
        c.name.toLowerCase().includes(query) || 
        c.summary.toLowerCase().includes(query)
      ),
    }
  }, [searchQuery])

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
    <div className="min-h-screen archive-bg relative">
      {/* Subtle texture overlay */}
      <div className="fixed inset-0 texture-overlay -z-10" />
      
      {/* Header */}
      <header className="custom-header">
        <div className="content-section">
          <div className="breadcrumb">Historical Archives</div>
          <h1 className="text-balance">World History Documentation</h1>
          <p className="subtitle text-pretty">A comprehensive digital repository exploring the evolution of civilizations, empires, and cultures throughout human history.</p>
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

      <div className="container mx-auto px-4 md:px-6 py-8">

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search civilizations, empires, events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input w-full pl-11 pr-10 py-3 rounded-xl text-sm focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-muted rounded-full transition-colors"
              >
                <X className="h-4 w-4 text-muted-foreground" />
              </button>
            )}
          </div>
        </div>

        {/* Navigation */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div id="navigation-tabs">
            {/* Desktop Tabs */}
            <TabsList className="hidden md:grid w-full grid-cols-5 mb-8 bg-card/80 backdrop-blur-sm rounded-xl p-1.5 shadow-sm border border-border/60 h-14">
            {tabOptions.map((tab) => {
              const IconComponent = tab.icon
              return (
                <TabsTrigger 
                  key={tab.value}
                  value={tab.value} 
                  className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm rounded-lg font-medium transition-all duration-300 h-11 text-sm"
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
              className="w-full bg-card/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-border/60 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                {currentTab && <currentTab.icon className="h-5 w-5 text-muted-foreground" />}
                <span className="font-medium text-foreground">
                  {currentTab?.label || 'Select Category'}
                </span>
              </div>
              <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-card rounded-xl shadow-lg border border-border/60 z-50 overflow-hidden">
                {tabOptions.map((tab) => {
                  const IconComponent = tab.icon
                  return (
                    <button
                      key={tab.value}
                      onClick={() => {
                        setActiveTab(tab.value)
                        setIsDropdownOpen(false)
                      }}
                      className={`w-full p-4 flex items-center gap-3 text-left transition-colors ${
                        activeTab === tab.value ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-muted'
                      }`}
                    >
                      <IconComponent className="h-5 w-5" />
                      <span className="font-medium text-sm">{tab.label}</span>
                    </button>
                  )
                })}
              </div>
            )}
            </div>
          </div>

          {/* Country Tab */}
          <TabsContent value="country" className="space-y-6">
            {filteredCountryCards.country.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCountryCards.country.map((country, index) => (
                  <div key={country.id} className="animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                    <CountryCard 
                      country={country} 
                      onOpenTimeline={handleOpenTimeline}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <EmptySearchState query={searchQuery} />
            )}
          </TabsContent>

          {/* Empire Tab */}
          <TabsContent value="empire" className="space-y-6">
            {filteredCountryCards.empire.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCountryCards.empire.map((country, index) => (
                  <div key={country.id} className="animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                    <CountryCard 
                      country={country} 
                      onOpenTimeline={handleOpenTimeline}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <EmptySearchState query={searchQuery} />
            )}
          </TabsContent>

          {/* Culture Tab */}
          <TabsContent value="culture" className="space-y-6">
            {filteredCountryCards.culture.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCountryCards.culture.map((country, index) => (
                  <div key={country.id} className="animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                    <CountryCard 
                      country={country} 
                      onOpenTimeline={handleOpenTimeline}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <EmptySearchState query={searchQuery} />
            )}
          </TabsContent>


          {/* World Timeline Tab */}
          <TabsContent value="world" className="space-y-6">
            <div className="bg-card/90 backdrop-blur-sm rounded-2xl shadow-sm border border-border/60 overflow-hidden">
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

// Empty state component for search results
function EmptySearchState({ query }: { query: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
        <Search className="h-8 w-8 text-muted-foreground/50" />
      </div>
      <h3 className="text-lg font-medium text-foreground mb-2">No results found</h3>
      <p className="text-muted-foreground text-sm text-center max-w-md">
        No civilizations or empires match "{query}". Try adjusting your search terms.
      </p>
    </div>
  )
}
