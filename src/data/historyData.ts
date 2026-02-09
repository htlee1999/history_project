// ABOUTME: Central data module for history content - interfaces, typed imports from JSON, and helper functions
// ABOUTME: Data lives in history.json; this file provides types and aggregation utilities

import historyJson from './history.json';

// ============================================================================
// Interfaces
// ============================================================================

export interface HistoryEvent {
  date: string;
  
  title: string;
  description: string;
  dynastyId?: string;
}

export interface CountryData {
  title: string;
  events: HistoryEvent[];
}

export interface CountryCard {
  id: string;
  flag: string;
  name: string;
  summary: string;
}

export interface DynastyData {
  title: string;
  chineseTitle: string;
  period: string;
  introduction: string;
  chineseIntroduction: string;
  events: DynastyEvent[];
  significance: string;
  chineseSignificance: string;
}

export interface DynastyEvent {
  title: string;
  chineseTitle: string;
  content: string;
  chineseContent: string;
}

export interface WorldHistoryEvent extends HistoryEvent {
  country: string;
  countryName: string;
  flag: string;
}

export interface DateRange {
  start: number;
  end: number;
  display: string;
}

export interface GroupedTimelineEvent {
  dateRange: DateRange;
  events: WorldHistoryEvent[];
  displayDate: string;
}

// ============================================================================
// Data exports (typed from JSON)
// ============================================================================

export const historyData: Record<string, CountryData> = historyJson.historyData;
export const dynastyData: Record<string, DynastyData> = historyJson.dynastyData;
export const countryCards: Record<string, CountryCard[]> = historyJson.countryCards;

// ============================================================================
// Helper functions
// ============================================================================

export function parseDateRange(dateStr: string): DateRange {
  const cleanDate = dateStr.replace(/c\.\s*/, '').trim();

  // Handle ranges like "1337-1453", "c. 2070-1600 BCE", "1941-1945"
  const rangeMatch = cleanDate.match(/(\d+)\s*[-–—]\s*(\d+)/);
  if (rangeMatch) {
    const start = parseInt(rangeMatch[1]);
    const end = parseInt(rangeMatch[2]);

    if (cleanDate.includes('BCE')) {
      return { start: -end, end: -start, display: dateStr };
    } else if (cleanDate.includes('CE')) {
      return { start, end, display: dateStr };
    } else {
      // Default to CE for modern dates
      return { start, end, display: dateStr };
    }
  }

  // Handle single years
  if (cleanDate.includes('BCE')) {
    const year = parseInt(cleanDate.match(/\d+/)?.[0] || '0');
    return { start: -year, end: -year, display: dateStr };
  } else if (cleanDate.includes('CE')) {
    const year = parseInt(cleanDate.match(/\d+/)?.[0] || '0');
    return { start: year, end: year, display: dateStr };
  } else {
    const yearMatch = cleanDate.match(/(\d{4})/);
    if (yearMatch) {
      const year = parseInt(yearMatch[1]);
      return { start: year, end: year, display: dateStr };
    }
    return { start: 0, end: 0, display: dateStr };
  }
}

export function parseDate(dateStr: string): number {
  const range = parseDateRange(dateStr);
  return range.start;
}

export function rangesOverlap(range1: DateRange, range2: DateRange, tolerance: number = 50): boolean {
  return range1.start <= range2.end + tolerance && range2.start <= range1.end + tolerance;
}

export function getAllWorldEvents(): WorldHistoryEvent[] {
  const countryNames: Record<string, { name: string; flag: string }> = {
    china: { name: 'China', flag: '🇨🇳' },
    usa: { name: 'United States', flag: '🇺🇸' },
    uk: { name: 'United Kingdom', flag: '🇬🇧' },
    france: { name: 'France', flag: '🇫🇷' },
    korea: { name: 'South Korea', flag: '🇰🇷' },
    japan: { name: 'Japan', flag: '🇯🇵' },
    spain: { name: 'Spain', flag: '🇪🇸' },
    portugal: { name: 'Portugal', flag: '🇵🇹' },
    greece: { name: 'Greece', flag: '🇬🇷' },
    italy: { name: 'Italy', flag: '🇮🇹' }
  };

  const allEvents: WorldHistoryEvent[] = [];

  Object.entries(historyData).forEach(([countryId, countryData]: [string, CountryData]) => {
    const countryInfo = countryNames[countryId];
    if (!countryInfo) return;

    countryData.events.forEach((event: HistoryEvent) => {
      allEvents.push({
        ...event,
        country: countryId,
        countryName: countryInfo.name,
        flag: countryInfo.flag
      });
    });
  });

  return allEvents.sort((a, b) => parseDate(a.date) - parseDate(b.date));
}

// Determine which century an event belongs to based on its start year
function getCenturyKey(year: number): number {
  if (year > 0) {
    return Math.ceil(year / 100);
  }
  // BCE: year -2100 to -2001 is the 21st century BCE (key = -21)
  return -Math.ceil(Math.abs(year) / 100);
}

function formatCenturyLabel(centuryKey: number): string {
  const absKey = Math.abs(centuryKey);
  const suffix = absKey === 1 ? 'st' : absKey === 2 ? 'nd' : absKey === 3 ? 'rd' : 'th';
  if (centuryKey < 0) {
    return `${absKey}${suffix} Century BCE`;
  }
  return `${absKey}${suffix} Century`;
}

export function getGroupedWorldEvents(): GroupedTimelineEvent[] {
  const allEvents = getAllWorldEvents();
  const centuryMap = new Map<number, WorldHistoryEvent[]>();

  // Bucket events by the century of their start date
  allEvents.forEach(event => {
    const range = parseDateRange(event.date);
    const key = getCenturyKey(range.start);
    if (!centuryMap.has(key)) centuryMap.set(key, []);
    centuryMap.get(key)!.push(event);
  });

  // Sort century keys chronologically and build groups
  const sortedKeys = Array.from(centuryMap.keys()).sort((a, b) => a - b);

  return sortedKeys.map(key => {
    const events = centuryMap.get(key)!;
    const starts = events.map(e => parseDateRange(e.date).start);
    const ends = events.map(e => parseDateRange(e.date).end);
    return {
      dateRange: {
        start: Math.min(...starts),
        end: Math.max(...ends),
        display: formatCenturyLabel(key)
      },
      events,
      displayDate: formatCenturyLabel(key)
    };
  });
}
