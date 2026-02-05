import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { dynastyData } from "@/data/historyData"

interface DynastyDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  dynastyId: string | null;
}

export function DynastyDetailModal({ isOpen, onClose, dynastyId }: DynastyDetailModalProps) {
  const data = dynastyId ? dynastyData[dynastyId] : null;

  if (!data) return null;

  // Check if this is Chinese content (has different Chinese text)
  const hasChinese = data.chineseTitle !== data.title;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] p-0 bg-white dark:bg-neutral-950 flex flex-col">
        <DialogTitle className="sr-only">
          {data.title}
        </DialogTitle>
        <DialogDescription className="sr-only">
          Detailed information about {data.title}
        </DialogDescription>
        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-light text-gray-800 mb-2 tracking-wide">
                {data.title}
              </h1>
              {hasChinese && (
                <h2 className="text-2xl font-light text-gray-600 mb-4">
                  {data.chineseTitle}
                </h2>
              )}
              <p className="text-lg text-gray-600 italic mb-4">
                {data.period}
              </p>
            </div>

            {/* Introduction */}
            <div className="mb-10">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  {data.introduction}
                </p>
              </div>
              {hasChinese && (
                <div className="prose prose-lg max-w-none mt-6">
                  <p className="text-gray-600 leading-relaxed">
                    {data.chineseIntroduction}
                  </p>
                </div>
              )}
            </div>

            <hr className="border-gray-300 mb-10" />

            {/* Major Historical Events */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Major Historical Events</h2>
              {hasChinese && (
                <h3 className="text-xl font-bold text-gray-600 mb-6">主要历史事件和典故</h3>
              )}

              <div className="space-y-8">
                {data.events.map((event, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-1">
                      {index + 1}. {event.title}
                    </h3>
                    {hasChinese && (
                      <h4 className="text-base font-bold text-gray-600 mb-3">
                        {index + 1}. {event.chineseTitle}
                      </h4>
                    )}

                    <div className={hasChinese ? "mb-4" : ""}>
                      {hasChinese && <h5 className="font-semibold text-gray-800 mb-2">English:</h5>}
                      <div
                        className="prose prose-sm max-w-none text-gray-700 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: event.content }}
                      />
                    </div>

                    {hasChinese && (
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">中文：</h5>
                        <div
                          className="prose prose-sm max-w-none text-gray-600 leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: event.chineseContent }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <hr className="border-gray-300 mb-10" />

            {/* Historical Significance */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Historical Significance</h2>
              {hasChinese && (
                <h3 className="text-xl font-bold text-gray-600 mb-6">历史意义</h3>
              )}

              <div className={hasChinese ? "mb-4" : ""}>
                {hasChinese && <h4 className="font-semibold text-gray-800 mb-2">English:</h4>}
                <p className="prose prose-sm max-w-none text-gray-700 leading-relaxed">
                  {data.significance}
                </p>
              </div>

              {hasChinese && (
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">中文：</h4>
                  <p className="prose prose-sm max-w-none text-gray-600 leading-relaxed">
                    {data.chineseSignificance}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}