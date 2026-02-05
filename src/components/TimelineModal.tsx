import { historyData } from "@/data/historyData"
import { Timeline } from "@/components/ui/timeline"
import { DynastyDetailModal } from "@/components/DynastyDetailModal"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

interface TimelineModalProps {
  isOpen: boolean;
  onClose: () => void;
  countryId: string | null;
  categoryName?: string;
}

export function TimelineModal({ onClose, countryId, categoryName = "Nations" }: TimelineModalProps) {
  const data = countryId ? historyData[countryId] : null;
  const [selectedDynasty, setSelectedDynasty] = useState<string | null>(null);
  const [isDynastyModalOpen, setIsDynastyModalOpen] = useState(false);

  const handleShowMore = (dynastyId: string) => {
    setSelectedDynasty(dynastyId);
    setIsDynastyModalOpen(true);
  };

  const handleCloseDynastyModal = () => {
    setIsDynastyModalOpen(false);
    setSelectedDynasty(null);
  };

  if (!data) return null;

  // Extract clean country name for display
  const countryName = data.title.replace(/History of |🇨🇳|🇺🇸|🇬🇧|🇫🇷|🇰🇷|🇯🇵|🇬🇷|🇮🇹|🏛️|⚔️|🏺/g, '').trim();

  const timelineData = data.events.map(event => ({
    title: event.date,
    content: (
      <div>
        <h3 className="text-lg font-medium text-foreground mb-3">
          {event.title}
        </h3>
        <div 
          className="text-muted-foreground leading-relaxed prose prose-sm max-w-none"
          dangerouslySetInnerHTML={{ __html: event.description }}
        />
        {event.dynastyId && (
          <Button
            onClick={() => handleShowMore(event.dynastyId!)}
            variant="outline"
            className="mt-4 border-amber-500/50 text-amber-700 hover:bg-amber-50 hover:text-amber-800 transition-all duration-300"
          >
            Show More Details
          </Button>
        )}
      </div>
    ),
  }));

  return (
    <div className="min-h-screen archive-bg relative">
      {/* Subtle texture overlay */}
      <div className="fixed inset-0 texture-overlay -z-10" />
      
      {/* Sticky Breadcrumb Navigation */}
      <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border/60">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-14">
            {/* Back button and breadcrumbs */}
            <div className="flex items-center gap-3">
              <Button
                onClick={onClose}
                variant="ghost"
                size="sm"
                className="gap-2 text-muted-foreground hover:text-foreground hover:bg-muted"
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="hidden sm:inline">Back</span>
              </Button>
              
              {/* Breadcrumb trail */}
              <div className="flex items-center gap-1.5 text-sm">
                <button 
                  onClick={onClose}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </button>
                <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/50" />
                <button 
                  onClick={onClose}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {categoryName}
                </button>
                <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/50" />
                <span className="text-foreground font-medium truncate max-w-[150px] sm:max-w-none">
                  {countryName}
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      <div className="container mx-auto px-4 md:px-6 py-8">
        {/* Header */}
        <header className="mb-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-light text-foreground mb-4 tracking-tight">
              {data.title}
            </h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Explore the major historical events and transformations that shaped {countryName}.
            </p>
          </div>
        </header>

        {/* Timeline Content */}
        <div className="bg-card/90 backdrop-blur-sm rounded-2xl shadow-sm border border-border/60 overflow-hidden">
          <Timeline 
            data={timelineData} 
            title={data.title}
            description={`Explore the major historical events and transformations that shaped ${countryName}.`}
          />
        </div>
      </div>
      
      {/* Dynasty Detail Modal */}
      <DynastyDetailModal
        isOpen={isDynastyModalOpen}
        onClose={handleCloseDynastyModal}
        dynastyId={selectedDynasty}
      />
    </div>
  )
}
