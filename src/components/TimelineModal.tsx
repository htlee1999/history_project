import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { historyData } from "@/data/historyData"
import { Timeline } from "@/components/ui/timeline"

interface TimelineModalProps {
  isOpen: boolean;
  onClose: () => void;
  countryId: string | null;
}

export function TimelineModal({ isOpen, onClose, countryId }: TimelineModalProps) {
  const data = countryId ? historyData[countryId] : null;

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
      </div>
    ),
  }));

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] p-0 bg-white dark:bg-neutral-950 flex flex-col">
        <DialogTitle className="sr-only">
          {data.title} Historical Timeline
        </DialogTitle>
        <DialogDescription className="sr-only">
          A chronological timeline of major historical events for {data.title}
        </DialogDescription>
        <div className="flex-1 overflow-y-auto">
          <Timeline 
            data={timelineData} 
            title={data.title}
            description={`Explore the major historical events and transformations that shaped ${data.title.replace(/History of |🇨🇳|🇺🇸|🇬🇧|🇫🇷|🇰🇷|🇯🇵|🇬🇷|🇮🇹/g, '').trim()}.`}
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}