// ABOUTME: Individual blog article page with structured content display
// ABOUTME: Renders case-study (Paper 1) or essay (Paper 2) format with section labels and marks

import Link from 'next/link'
import { Badge } from "@/components/ui/badge"
import { ScrollToTopButton } from "@/components/ScrollToTopButton"
import { blogArticles, BlogArticle, CaseStudyArticle, EssayArticle } from "@/data/blogData"
import { FileText, PenLine, ArrowLeft } from 'lucide-react'
import type { GetStaticPaths, GetStaticProps } from 'next'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = blogArticles.map(article => ({
    params: { slug: article.id },
  }))
  return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const article = blogArticles.find(a => a.id === params?.slug) || null
  if (!article) {
    return { notFound: true }
  }
  return { props: { article } }
}

function SectionBlock({ label, marks, children }: { label: string; marks?: number; children: React.ReactNode }) {
  return (
    <div className="bg-card/90 backdrop-blur-sm rounded-2xl shadow-sm border border-border/60 overflow-hidden">
      <div className="px-6 py-4 border-b border-border/60 bg-muted/30">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium text-foreground">{label}</h2>
          {marks !== undefined && (
            <Badge variant="secondary" className="text-xs">{marks}m</Badge>
          )}
        </div>
      </div>
      <div className="px-6 py-5 space-y-4">
        {children}
      </div>
    </div>
  )
}

function FieldBlock({ label, content }: { label: string; content: string }) {
  if (!content) return null
  return (
    <div>
      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">{label}</p>
      <p className="text-sm text-foreground leading-relaxed whitespace-pre-wrap">{content}</p>
    </div>
  )
}

function CaseStudyView({ article }: { article: CaseStudyArticle }) {
  const { sections } = article
  return (
    <div className="space-y-6">
      {/* Section A Header */}
      <h3 className="text-xl font-light text-foreground border-b border-border/60 pb-2">
        Section A — Evidence & Evaluation
      </h3>

      {/* Q1(a) */}
      <SectionBlock label="Q1(a) — The Contextual Explainer" marks={6}>
        <div className="space-y-4">
          <div className="p-4 bg-muted/30 rounded-lg border border-border/40">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Factor 1</p>
            <FieldBlock label="Identify Factor" content={sections.q1a.factor1} />
            <div className="mt-3">
              <FieldBlock label="Source Reference" content={sections.q1a.sourceReference1} />
            </div>
            <div className="mt-3">
              <FieldBlock label="Explanation in Context" content={sections.q1a.contextExplanation1} />
            </div>
          </div>
          <div className="p-4 bg-muted/30 rounded-lg border border-border/40">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Factor 2</p>
            <FieldBlock label="Identify Factor" content={sections.q1a.factor2} />
            <div className="mt-3">
              <FieldBlock label="Source Reference" content={sections.q1a.sourceReference2} />
            </div>
            <div className="mt-3">
              <FieldBlock label="Explanation in Context" content={sections.q1a.contextExplanation2} />
            </div>
          </div>
        </div>
      </SectionBlock>

      {/* Q1(b) */}
      <SectionBlock label="Q1(b) — The Comparative Analysis" marks={9}>
        <FieldBlock label="&quot;How Far&quot; Hook" content={sections.q1b.hook} />
        <FieldBlock label="Similarities" content={sections.q1b.similarities} />
        <FieldBlock label="Differences" content={sections.q1b.differences} />
        <FieldBlock label="Contextual Reasoning" content={sections.q1b.contextualReasoning} />
      </SectionBlock>

      {/* Q1(c) */}
      <SectionBlock label="Q1(c) — The Reliability Check" marks={8}>
        <FieldBlock label="Strengths" content={sections.q1c.strengths} />
        <FieldBlock label="Limitations" content={sections.q1c.limitations} />
        <FieldBlock label="Cross-Referencing with Other Sources" content={sections.q1c.crossReferencing} />
        <FieldBlock label="Verdict" content={sections.q1c.verdict} />
      </SectionBlock>

      {/* Q1(d) */}
      <SectionBlock label="Q1(d) — The Mini-Synthesis" marks={12}>
        <FieldBlock label="Sources Supporting the View" content={sections.q1d.supportingSourcesEvaluation} />
        <FieldBlock label="Sources Challenging the View" content={sections.q1d.challengingSourcesEvaluation} />
        <FieldBlock label="Contextual Knowledge" content={sections.q1d.contextualKnowledge} />
        <FieldBlock label="Supported Judgement" content={sections.q1d.judgement} />
      </SectionBlock>

      {/* Section B Header */}
      <h3 className="text-xl font-light text-foreground border-b border-border/60 pb-2 mt-10">
        Section B — Problem Solving
      </h3>

      {/* Q2 */}
      <SectionBlock label="Q2 — The Policy Consultant Response" marks={25}>
        <FieldBlock label="Issue Evaluation (using all sources + contextual knowledge)" content={sections.q2.issueEvaluation} />
        <div className="border-t border-border/40 pt-4 mt-4">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">Recommendations</p>
          <div className="space-y-4">
            <div className="p-4 bg-muted/30 rounded-lg border border-border/40">
              <FieldBlock label="Recommendation 1" content={sections.q2.recommendation1} />
              <div className="mt-3">
                <FieldBlock label="How & Why This Works" content={sections.q2.recommendation1HowWhy} />
              </div>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg border border-border/40">
              <FieldBlock label="Recommendation 2" content={sections.q2.recommendation2} />
              <div className="mt-3">
                <FieldBlock label="How & Why This Works" content={sections.q2.recommendation2HowWhy} />
              </div>
            </div>
            {sections.q2.recommendation3 && (
              <div className="p-4 bg-muted/30 rounded-lg border border-border/40">
                <FieldBlock label="Recommendation 3" content={sections.q2.recommendation3} />
                <div className="mt-3">
                  <FieldBlock label="How & Why This Works" content={sections.q2.recommendation3HowWhy} />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="border-t border-border/40 pt-4 mt-4">
          <FieldBlock label="Assessment of Likelihood of Success" content={sections.q2.likelihoodOfSuccess} />
        </div>
      </SectionBlock>
    </div>
  )
}

function EssayView({ article }: { article: EssayArticle }) {
  const { sections } = article
  return (
    <div className="space-y-6">
      {/* Introduction */}
      <SectionBlock label="Introduction — The Strategic Frame">
        <FieldBlock label="Hook (Define the Key Issue)" content={sections.introduction.hook} />
        <FieldBlock label="Dimensions (Lenses of Analysis)" content={sections.introduction.dimensions} />
        <FieldBlock label="Thesis" content={sections.introduction.thesis} />
      </SectionBlock>

      {/* Body Paragraphs */}
      {sections.bodyParagraphs.map((para, index) => (
        <SectionBlock key={index} label={`Body Paragraph ${index + 1} — Enhanced PEEL`}>
          <FieldBlock label="Point (Analytical Claim with Key Concept)" content={para.point} />
          <FieldBlock label="Evidence (Contemporary Examples)" content={para.evidence} />
          <FieldBlock label="Explanation (Link Evidence to Claim)" content={para.explanation} />
          <FieldBlock label="Synthesis (Cross-Dimensional Connection)" content={para.synthesis} />
        </SectionBlock>
      ))}

      {/* Counter-Perspective */}
      <SectionBlock label="Counter-Perspective — The Balanced View">
        <FieldBlock label="Acknowledgement of Alternative Viewpoint" content={sections.counterPerspective.acknowledgement} />
        <FieldBlock label="Evaluation (Why Primary Thesis Still Holds)" content={sections.counterPerspective.evaluation} />
      </SectionBlock>

      {/* Conclusion */}
      <SectionBlock label="Conclusion — The Evaluative Judgement">
        <FieldBlock label="Synthesis (Interplay Between Dimensions)" content={sections.conclusion.synthesis} />
        <FieldBlock label="Final Word (Substantiated Judgement)" content={sections.conclusion.finalWord} />
      </SectionBlock>
    </div>
  )
}

export default function BlogArticlePage({ article }: { article: BlogArticle }) {
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
            <Link href="/blog" className="hover:text-foreground transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="truncate max-w-[200px]">{article.title}</span>
          </div>
          <div className="flex items-center gap-3 mb-2">
            {article.type === 'case-study'
              ? <FileText className="h-5 w-5 text-blue-500" />
              : <PenLine className="h-5 w-5 text-amber-500" />
            }
            <Badge variant="secondary">
              {article.type === 'case-study' ? 'Paper 1: Case Study' : 'Paper 2: Essay'}
            </Badge>
          </div>
          <h1 className="text-balance">{article.title}</h1>
          <div className="flex flex-wrap items-center gap-2 mt-3">
            <span className="text-sm text-muted-foreground">{article.date}</span>
            <span className="text-muted-foreground">|</span>
            {article.tags.map(tag => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </header>

      <div id="article-top" className="container mx-auto px-4 md:px-6 py-8 max-w-4xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all articles
        </Link>

        {article.type === 'case-study'
          ? <CaseStudyView article={article as CaseStudyArticle} />
          : <EssayView article={article as EssayArticle} />
        }

        <ScrollToTopButton targetElementId="article-top" />
      </div>
    </div>
  )
}
