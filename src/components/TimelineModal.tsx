import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { historyData } from "@/data/historyData"
import { Calendar, Scroll } from "lucide-react"

interface TimelineModalProps {
  isOpen: boolean;
  onClose: () => void;
  countryId: string | null;
}

export function TimelineModal({ isOpen, onClose, countryId }: TimelineModalProps) {
  const data = countryId ? historyData[countryId] : null;

  if (!data) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] bg-gradient-to-br from-parchment-50 to-parchment-100 border-parchment-200">
        <DialogHeader className="bg-gradient-to-r from-parchment-500 to-parchment-600 text-white rounded-t-lg -mx-6 -mt-6 px-6 py-4">
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <Scroll className="h-6 w-6" />
            {data.title}
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[70vh] px-2">
          <div className="relative pl-8">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-parchment-500 to-parchment-600"></div>
            
            {data.events.map((event, index) => (
              <div key={index} className="relative mb-8 group">
                {/* Timeline dot */}
                <div className="absolute -left-6 w-4 h-4 bg-parchment-500 border-4 border-parchment-50 rounded-full shadow-lg group-hover:bg-parchment-600 transition-colors duration-300"></div>
                
                {/* Timeline content */}
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-parchment-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-4 w-4 text-parchment-600" />
                    <span className="text-parchment-600 font-semibold text-sm bg-parchment-100 px-2 py-1 rounded-full">
                      {event.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-parchment-900 mb-3">
                    {event.title}
                  </h3>
                  <div 
                    className="text-parchment-700 leading-relaxed prose prose-sm max-w-none"
                    dangerouslySetInnerHTML={{ __html: event.description }}
                  />
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}