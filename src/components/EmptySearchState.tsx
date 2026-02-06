// ABOUTME: Empty state displayed when a search query returns no results
// ABOUTME: Reusable across pages with configurable context message

import { Search } from 'lucide-react'

interface EmptySearchStateProps {
  query: string;
  message?: string;
}

export function EmptySearchState({ query, message = "No results match" }: EmptySearchStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
        <Search className="h-8 w-8 text-muted-foreground/50" />
      </div>
      <h3 className="text-lg font-medium text-foreground mb-2">No results found</h3>
      <p className="text-muted-foreground text-sm text-center max-w-md">
        {message} &quot;{query}&quot;. Try adjusting your search terms.
      </p>
    </div>
  )
}
