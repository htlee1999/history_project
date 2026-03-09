// ABOUTME: Blog listing page displaying study articles as cards
// ABOUTME: Features search filtering and tag badges, similar to the glossary page

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollToTopButton } from "@/components/ScrollToTopButton"
import { EmptySearchState } from "@/components/EmptySearchState"
import { SearchBar } from "@/components/SearchBar"
import { blogArticles } from "@/data/blogData"
import { FileText, PenLine, Pencil } from 'lucide-react'

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState<'all' | 'case-study' | 'essay'>('all')

  const filteredArticles = useMemo(() => {
    let articles = blogArticles
    if (activeFilter !== 'all') {
      articles = articles.filter(a => a.type === activeFilter)
    }
    if (!searchQuery.trim()) return articles
    const query = searchQuery.toLowerCase()
    return articles.filter(article =>
      article.title.toLowerCase().includes(query) ||
      article.tags.some(tag => tag.toLowerCase().includes(query))
    )
  }, [searchQuery, activeFilter])

  const caseStudyCount = blogArticles.filter(a => a.type === 'case-study').length
  const essayCount = blogArticles.filter(a => a.type === 'essay').length

  return (
    <div className="min-h-screen archive-bg relative">
      <div className="fixed inset-0 texture-overlay -z-10" />

      {/* Header */}
      <header className="custom-header">
        <div className="content-section">
          <div className="breadcrumb flex items-center gap-2">
            <Link href="/" className="hover:text-foreground transition-colors">
              Historical Archives
            </Link>
            <span>/</span>
            <span>Blog</span>
            <span className="text-border">|</span>
            <Link href="/writer" className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors">
              <Pencil className="h-3 w-3" />
              Writer
            </Link>
          </div>
          <h1 className="text-balance">Study Notes & Practice Responses</h1>
          <p className="subtitle text-pretty">Structured study notes for H2 China Studies in English (9628) — Case Studies and Essays.</p>
        </div>

        <div className="stats-section">
          <div className="stat">
            <span className="stat-number">{blogArticles.length}</span>
            <span className="stat-label">Articles</span>
          </div>
          <div className="stat">
            <span className="stat-number">{caseStudyCount}</span>
            <span className="stat-label">Case Studies</span>
          </div>
          <div className="stat">
            <span className="stat-number">{essayCount}</span>
            <span className="stat-label">Essays</span>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 md:px-6 py-8">

        {/* Search Bar */}
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search articles, tags..."
        />

        {/* Type Filter */}
        <div id="blog-filters" className="flex gap-2 mb-8">
          {([
            { key: 'all', label: 'All' },
            { key: 'case-study', label: 'Paper 1: Case Study' },
            { key: 'essay', label: 'Paper 2: Essay' },
          ] as const).map(filter => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeFilter === filter.key
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'bg-card border border-border/60 text-foreground hover:bg-muted'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Article Cards */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredArticles.map((article, index) => (
              <div key={article.id} className="animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                <Link href={`/blog/${article.id}`}>
                  <Card className="group relative overflow-hidden card-hover bg-card border-border/60 shadow-sm h-full cursor-pointer">
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
                      article.type === 'case-study'
                        ? 'from-blue-500/60 via-blue-400/40 to-transparent'
                        : 'from-amber-500/60 via-amber-400/40 to-transparent'
                    } opacity-0 group-hover:opacity-100 transition-opacity`} />
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2 mb-1">
                        {article.type === 'case-study'
                          ? <FileText className="h-4 w-4 text-blue-500" />
                          : <PenLine className="h-4 w-4 text-amber-500" />
                        }
                        <Badge variant="secondary" className="text-xs">
                          {article.type === 'case-study' ? 'Paper 1' : 'Paper 2'}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg font-medium">{article.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-xs text-muted-foreground">{article.date}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {article.tags.map(tag => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <EmptySearchState query={searchQuery} message="No articles match" />
        )}

        <ScrollToTopButton targetElementId="blog-filters" />
      </div>
    </div>
  )
}
