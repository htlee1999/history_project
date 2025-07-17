import { historyData } from "@/data/historyData"
import { Timeline } from "@/components/ui/timeline"
import { DynastyDetailModal } from "@/components/DynastyDetailModal"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useState } from "react"

interface TimelineModalProps {
  isOpen: boolean;
  onClose: () => void;
  countryId: string | null;
}

export function TimelineModal({ onClose, countryId }: TimelineModalProps) {
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

  const timelineData = data.events.map(event => ({
    title: event.date,
    content: (
      <div>
        <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-3">
          {event.title}
        </h3>
        <div 
          className="text-neutral-700 dark:text-neutral-300 leading-relaxed prose prose-sm max-w-none"
          dangerouslySetInnerHTML={{ __html: event.description }}
        />
        {event.dynastyId && (
          <Button
            onClick={() => handleShowMore(event.dynastyId!)}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-300"
          >
            Show More Details
          </Button>
        )}
      </div>
    ),
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 relative">
      {/* Background overlay */}
      <div className="fixed inset-0 bg-gradient-to-r from-gray-50/50 to-white/50 -z-10" />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-6">
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-gray-200">
            <h1 className="text-5xl font-light text-gray-800 mb-4 tracking-wide">
              {data.title}
            </h1>
            <p className="text-xl text-gray-600 italic">
              {`Explore the major historical events and transformations that shaped ${data.title.replace(/History of |🇨🇳|🇺🇸|🇬🇧|🇫🇷|🇰🇷|🇯🇵|🇬🇷|🇮🇹/g, '').trim()}.`}
            </p>
          </div>
        </header>

        {/* Timeline Content */}
        <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-gray-200 relative">
          {/* Back Button positioned in timeline content area */}
          <Button
            onClick={onClose}
            className="absolute left-6 top-6 bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 z-50"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
          <Timeline 
            data={timelineData} 
            title={data.title}
            description={`Explore the major historical events and transformations that shaped ${data.title.replace(/History of |🇨🇳|🇺🇸|🇬🇧|🇫🇷|🇰🇷|🇯🇵|🇬🇷|🇮🇹/g, '').trim()}.`}
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