// ABOUTME: Historical glossary page displaying term definitions grouped by letter
// ABOUTME: Features search filtering, alphabet navigation, and tag badges

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollToTopButton } from "@/components/ScrollToTopButton"
import { EmptySearchState } from "@/components/EmptySearchState"
import { SearchBar } from "@/components/SearchBar"
import { glossaryTerms } from "@/data/glossaryData"
import { BookOpen } from 'lucide-react'

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

export default function Glossary() {
  const [searchQuery, setSearchQuery] = useState('')

  // Filter terms by search query (matches term, definition, or tags)
  const filteredTerms = useMemo(() => {
    if (!searchQuery.trim()) return glossaryTerms
    const query = searchQuery.toLowerCase()
    return glossaryTerms.filter(term =>
      term.term.toLowerCase().includes(query) ||
      term.definition.toLowerCase().includes(query) ||
      term.tags.some(tag => tag.toLowerCase().includes(query))
    )
  }, [searchQuery])

  // Group filtered terms by first letter
  const groupedTerms = useMemo(() => {
    const groups: Record<string, typeof filteredTerms> = {}
    filteredTerms.forEach(term => {
      const letter = term.term[0].toUpperCase()
      if (!groups[letter]) groups[letter] = []
      groups[letter].push(term)
    })
    return groups
  }, [filteredTerms])

  // Letters that have entries (for active alphabet nav)
  const activeLetters = useMemo(() => new Set(Object.keys(groupedTerms)), [groupedTerms])

  const scrollToLetter = (letter: string) => {
    const element = document.getElementById(`letter-${letter}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="min-h-screen archive-bg relative">
      {/* Subtle texture overlay */}
      <div className="fixed inset-0 texture-overlay -z-10" />

      {/* Header */}
      <header className="custom-header">
        <div className="content-section">
          <div className="breadcrumb flex items-center gap-2">
            <Link href="/" className="hover:text-foreground transition-colors">
              Historical Archives
            </Link>
            <span>/</span>
            <span>Glossary</span>
          </div>
          <h1 className="text-balance">Historical Glossary</h1>
          <p className="subtitle text-pretty">A reference guide to key terms, concepts, and terminology from world history.</p>
        </div>

        <div className="stats-section">
          <div className="stat">
            <span className="stat-number">{glossaryTerms.length}</span>
            <span className="stat-label">Terms</span>
          </div>
          <div className="stat">
            <span className="stat-number">{activeLetters.size}</span>
            <span className="stat-label">Letters</span>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 md:px-6 py-8">

        {/* Search Bar */}
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search terms, definitions, tags..."
        />

        {/* Alphabet Navigation */}
        <div id="alphabet-nav" className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0 mb-8">
          <div className="flex md:flex-wrap gap-1.5 min-w-max md:min-w-0">
            {ALPHABET.map(letter => (
              <button
                key={letter}
                onClick={() => scrollToLetter(letter)}
                disabled={!activeLetters.has(letter)}
                className={`w-10 h-10 md:w-9 md:h-9 flex-shrink-0 rounded-lg text-sm font-medium transition-colors ${
                  activeLetters.has(letter)
                    ? 'bg-card border border-border/60 text-foreground hover:bg-primary hover:text-primary-foreground shadow-sm'
                    : 'text-muted-foreground/40 cursor-default'
                }`}
              >
                {letter}
              </button>
            ))}
          </div>
        </div>

        {/* Term Cards grouped by letter */}
        {Object.keys(groupedTerms).length > 0 ? (
          Object.keys(groupedTerms).sort().map(letter => (
            <section key={letter} id={`letter-${letter}`} className="mb-10 scroll-mt-6">
              <h2 className="text-2xl font-light text-foreground mb-4 border-b border-border/60 pb-2">
                {letter}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {groupedTerms[letter].map((term, index) => (
                  <div key={term.id} className="animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                    <Card className="group relative overflow-hidden card-hover bg-card border-border/60 shadow-sm h-full">
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500/60 via-amber-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-2 mb-1">
                          <BookOpen className="h-4 w-4 text-muted-foreground" />
                          <CardTitle className="text-lg font-medium">{term.term}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {term.definition}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {term.tags.map(tag => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </section>
          ))
        ) : (
          <EmptySearchState query={searchQuery} message="No glossary terms match" />
        )}

        {/* Scroll to Top Button */}
        <ScrollToTopButton targetElementId="alphabet-nav" />
      </div>
    </div>
  )
}
