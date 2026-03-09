// ABOUTME: Writer page for composing blog articles with structured templates
// ABOUTME: Provides form-based editing with live preview for Paper 1 and Paper 2 formats

import Link from 'next/link'
import BlogWriterForm from "@/components/BlogWriterForm"
import { ScrollToTopButton } from "@/components/ScrollToTopButton"

export default function Writer() {
  return (
    <div className="min-h-screen archive-bg relative">
      <div className="fixed inset-0 texture-overlay -z-10" />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <header className="mb-8">
          <div id="writer-top" className="bg-card/90 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-border/60">
            <div className="breadcrumb flex items-center gap-2 text-sm text-muted-foreground mb-3">
              <Link href="/" className="hover:text-foreground transition-colors">
                Historical Archives
              </Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-foreground transition-colors">
                Blog
              </Link>
              <span>/</span>
              <span>Writer</span>
            </div>
            <h1 className="text-3xl font-light text-foreground mb-2">Writer</h1>
            <p className="text-muted-foreground">Compose structured study notes for H2 China Studies (9628)</p>
          </div>
        </header>

        <div className="bg-card/90 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-border/60">
          <BlogWriterForm />
        </div>

        <ScrollToTopButton targetElementId="writer-top" />
      </div>
    </div>
  )
}
