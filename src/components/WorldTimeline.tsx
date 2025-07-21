// ABOUTME: World history timeline component that displays a unified chronological view of all civilizations
// ABOUTME: Aggregates events from all countries and presents them in a single interactive timeline

import { Timeline } from "@/components/ui/timeline"
import { getGroupedWorldEvents, type GroupedTimelineEvent } from "@/data/historyData"

export function WorldTimeline() {
  const groupedEvents = getGroupedWorldEvents();

  const timelineData = groupedEvents.map((group: GroupedTimelineEvent) => ({
    title: group.displayDate,
    content: (
      <div className="space-y-6">
        {group.events.map((event, index) => (
          <div key={`${event.country}-${index}`} className={`${group.events.length > 1 ? 'pb-4 border-b border-gray-200 last:border-b-0 last:pb-0' : ''}`}>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">{event.flag}</span>
              <div>
                <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
                  {event.title}
                </h3>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                    {event.countryName}
                  </p>
                  {group.events.length > 1 && (
                    <span className="text-xs text-neutral-500 dark:text-neutral-500 bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded">
                      {event.date}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div 
              className="text-neutral-700 dark:text-neutral-300 leading-relaxed prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: event.description }}
            />
          </div>
        ))}
        {group.events.length > 1 && (
          <div className="mt-4 p-3 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
            <p className="text-xs text-neutral-600 dark:text-neutral-400 italic">
              {group.events.length} concurrent events across {new Set(group.events.map(e => e.countryName)).size} civilization{new Set(group.events.map(e => e.countryName)).size > 1 ? 's' : ''}
            </p>
          </div>
        )}
      </div>
    ),
  }));

  return (
    <div className="w-full">
      <Timeline 
        data={timelineData} 
        title="World History Timeline 🌍"
        description="A comprehensive chronological journey through the major events that shaped civilizations across the globe, from ancient times to the modern era. Events happening in similar time periods are grouped together."
        showWorldMap={true}
      />
    </div>
  );
}