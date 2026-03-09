// ABOUTME: Blog article writer form with live preview
// ABOUTME: Supports case-study (Paper 1) and essay (Paper 2) article creation

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useRouter } from 'next/router'
import { Plus, Trash2, Copy, Check, Eye, Edit2, Send } from 'lucide-react'
import type {
  CaseStudySections, EssaySections, EssayBodyParagraph,
} from "@/data/blogData"

const inputClass = "w-full p-3 border border-border rounded-lg bg-card focus:ring-2 focus:ring-ring focus:border-transparent text-foreground"
const labelClass = "block text-sm font-medium text-foreground mb-1"
const textareaClass = "w-full p-3 border border-border rounded-lg bg-card focus:ring-2 focus:ring-ring focus:border-transparent text-foreground resize-y"

const emptyCaseStudy: CaseStudySections = {
  q1a: { factor1: '', sourceReference1: '', contextExplanation1: '', factor2: '', sourceReference2: '', contextExplanation2: '' },
  q1b: { hook: '', similarities: '', differences: '', contextualReasoning: '' },
  q1c: { strengths: '', limitations: '', crossReferencing: '', verdict: '' },
  q1d: { supportingSourcesEvaluation: '', challengingSourcesEvaluation: '', contextualKnowledge: '', judgement: '' },
  q2: { issueEvaluation: '', recommendation1: '', recommendation1HowWhy: '', recommendation2: '', recommendation2HowWhy: '', recommendation3: '', recommendation3HowWhy: '', likelihoodOfSuccess: '' },
}

const emptyEssay: EssaySections = {
  introduction: { hook: '', dimensions: '', thesis: '' },
  bodyParagraphs: [{ point: '', evidence: '', explanation: '', synthesis: '' }],
  counterPerspective: { acknowledgement: '', evaluation: '' },
  conclusion: { synthesis: '', finalWord: '' },
}

function FormField({ label, placeholder, value, onChange, rows = 3 }: {
  label: string; placeholder: string; value: string; onChange: (v: string) => void; rows?: number
}) {
  return (
    <div>
      <label className={labelClass}>{label}</label>
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        className={textareaClass}
      />
    </div>
  )
}

function PreviewField({ label, content }: { label: string; content: string }) {
  if (!content) return null
  return (
    <div>
      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">{label}</p>
      <p className="text-sm text-foreground leading-relaxed whitespace-pre-wrap">{content}</p>
    </div>
  )
}

function PreviewSection({ label, marks, children }: { label: string; marks?: number; children: React.ReactNode }) {
  return (
    <div className="bg-card/90 rounded-xl border border-border/60 overflow-hidden">
      <div className="px-4 py-3 border-b border-border/60 bg-muted/30">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-foreground">{label}</h3>
          {marks !== undefined && (
            <Badge variant="secondary" className="text-xs">{marks}m</Badge>
          )}
        </div>
      </div>
      <div className="px-4 py-3 space-y-3">
        {children}
      </div>
    </div>
  )
}

export default function BlogWriterForm() {
  const router = useRouter()
  const [articleType, setArticleType] = useState<'case-study' | 'essay'>('case-study')
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [tags, setTags] = useState<string[]>([''])
  const [showPreview, setShowPreview] = useState(false)
  const [copied, setCopied] = useState(false)
  const [publishing, setPublishing] = useState(false)
  const [publishError, setPublishError] = useState('')

  const [caseStudy, setCaseStudy] = useState<CaseStudySections>(emptyCaseStudy)
  const [essay, setEssay] = useState<EssaySections>(emptyEssay)

  const addTag = () => setTags(prev => [...prev, ''])
  const removeTag = (index: number) => setTags(prev => prev.filter((_, i) => i !== index))
  const updateTag = (index: number, value: string) => setTags(prev => prev.map((t, i) => i === index ? value : t))

  const addBodyParagraph = () => setEssay(prev => ({
    ...prev,
    bodyParagraphs: [...prev.bodyParagraphs, { point: '', evidence: '', explanation: '', synthesis: '' }]
  }))
  const removeBodyParagraph = (index: number) => setEssay(prev => ({
    ...prev,
    bodyParagraphs: prev.bodyParagraphs.filter((_, i) => i !== index)
  }))
  const updateBodyParagraph = (index: number, field: keyof EssayBodyParagraph, value: string) => {
    setEssay(prev => ({
      ...prev,
      bodyParagraphs: prev.bodyParagraphs.map((p, i) => i === index ? { ...p, [field]: value } : p)
    }))
  }

  const generateId = (t: string) => {
    return t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
  }

  const generateJson = () => {
    const obj = {
      id: generateId(title),
      title,
      type: articleType,
      date,
      tags: tags.filter(t => t.trim()),
      sections: articleType === 'case-study' ? caseStudy : essay,
    }
    return JSON.stringify(obj, null, 2)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateJson())
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const buildArticle = () => ({
    id: generateId(title),
    title,
    type: articleType,
    date,
    tags: tags.filter(t => t.trim()),
    sections: articleType === 'case-study' ? caseStudy : essay,
  })

  const publish = async () => {
    if (!title.trim()) {
      setPublishError('Title is required')
      return
    }
    setPublishing(true)
    setPublishError('')
    try {
      const res = await fetch('/api/blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(buildArticle()),
      })
      const data = await res.json()
      if (!res.ok) {
        setPublishError(data.error || 'Failed to publish')
        return
      }
      router.push(`/blog/${data.id}`)
    } catch {
      setPublishError('Failed to publish. Is the dev server running?')
    } finally {
      setPublishing(false)
    }
  }

  return (
    <div className="space-y-6">
      {/* Article Type Selector */}
      <div className="flex gap-2">
        <button
          onClick={() => setArticleType('case-study')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            articleType === 'case-study'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'bg-muted border border-border/60 text-foreground hover:bg-muted/80'
          }`}
        >
          Paper 1: Case Study
        </button>
        <button
          onClick={() => setArticleType('essay')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            articleType === 'essay'
              ? 'bg-amber-600 text-white shadow-sm'
              : 'bg-muted border border-border/60 text-foreground hover:bg-muted/80'
          }`}
        >
          Paper 2: Essay
        </button>
      </div>

      {/* Toggle Form / Preview */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-foreground">
          {showPreview ? 'Preview' : 'Edit'}
        </h2>
        <div className="flex gap-2">
          <Button
            onClick={() => setShowPreview(!showPreview)}
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
          >
            {showPreview ? <Edit2 className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            {showPreview ? 'Edit' : 'Preview'}
          </Button>
          <Button
            onClick={copyToClipboard}
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
          >
            {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
            {copied ? 'Copied!' : 'Copy JSON'}
          </Button>
          <Button
            onClick={publish}
            disabled={publishing || !title.trim()}
            size="sm"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white"
          >
            <Send className="h-4 w-4" />
            {publishing ? 'Publishing...' : 'Publish'}
          </Button>
        </div>
      </div>

      {publishError && (
        <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-sm text-red-600">
          {publishError}
        </div>
      )}

      {showPreview ? (
        /* ===== PREVIEW MODE ===== */
        <div className="space-y-4">
          <div className="bg-card/90 rounded-xl border border-border/60 p-4">
            <Badge variant="secondary" className="mb-2">
              {articleType === 'case-study' ? 'Paper 1: Case Study' : 'Paper 2: Essay'}
            </Badge>
            <h2 className="text-xl font-medium text-foreground">{title || 'Untitled Article'}</h2>
            <p className="text-xs text-muted-foreground mt-1">{date || 'No date set'}</p>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {tags.filter(t => t.trim()).map(tag => (
                <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
              ))}
            </div>
          </div>

          {articleType === 'case-study' ? (
            <>
              <h3 className="text-base font-light text-foreground border-b border-border/60 pb-1">Section A — Evidence & Evaluation</h3>
              <PreviewSection label="Q1(a) — The Contextual Explainer" marks={6}>
                <div className="p-3 bg-muted/30 rounded-lg border border-border/40 space-y-2">
                  <p className="text-xs font-medium text-muted-foreground uppercase">Factor 1</p>
                  <PreviewField label="Identify Factor" content={caseStudy.q1a.factor1} />
                  <PreviewField label="Source Reference" content={caseStudy.q1a.sourceReference1} />
                  <PreviewField label="Explanation in Context" content={caseStudy.q1a.contextExplanation1} />
                </div>
                <div className="p-3 bg-muted/30 rounded-lg border border-border/40 space-y-2">
                  <p className="text-xs font-medium text-muted-foreground uppercase">Factor 2</p>
                  <PreviewField label="Identify Factor" content={caseStudy.q1a.factor2} />
                  <PreviewField label="Source Reference" content={caseStudy.q1a.sourceReference2} />
                  <PreviewField label="Explanation in Context" content={caseStudy.q1a.contextExplanation2} />
                </div>
              </PreviewSection>
              <PreviewSection label="Q1(b) — The Comparative Analysis" marks={9}>
                <PreviewField label="&quot;How Far&quot; Hook" content={caseStudy.q1b.hook} />
                <PreviewField label="Similarities" content={caseStudy.q1b.similarities} />
                <PreviewField label="Differences" content={caseStudy.q1b.differences} />
                <PreviewField label="Contextual Reasoning" content={caseStudy.q1b.contextualReasoning} />
              </PreviewSection>
              <PreviewSection label="Q1(c) — The Reliability Check" marks={8}>
                <PreviewField label="Strengths" content={caseStudy.q1c.strengths} />
                <PreviewField label="Limitations" content={caseStudy.q1c.limitations} />
                <PreviewField label="Cross-Referencing" content={caseStudy.q1c.crossReferencing} />
                <PreviewField label="Verdict" content={caseStudy.q1c.verdict} />
              </PreviewSection>
              <PreviewSection label="Q1(d) — The Mini-Synthesis" marks={12}>
                <PreviewField label="Sources Supporting" content={caseStudy.q1d.supportingSourcesEvaluation} />
                <PreviewField label="Sources Challenging" content={caseStudy.q1d.challengingSourcesEvaluation} />
                <PreviewField label="Contextual Knowledge" content={caseStudy.q1d.contextualKnowledge} />
                <PreviewField label="Supported Judgement" content={caseStudy.q1d.judgement} />
              </PreviewSection>
              <h3 className="text-base font-light text-foreground border-b border-border/60 pb-1">Section B — Problem Solving</h3>
              <PreviewSection label="Q2 — The Policy Consultant Response" marks={25}>
                <PreviewField label="Issue Evaluation" content={caseStudy.q2.issueEvaluation} />
                <div className="p-3 bg-muted/30 rounded-lg border border-border/40 space-y-2">
                  <PreviewField label="Recommendation 1" content={caseStudy.q2.recommendation1} />
                  <PreviewField label="How & Why" content={caseStudy.q2.recommendation1HowWhy} />
                </div>
                <div className="p-3 bg-muted/30 rounded-lg border border-border/40 space-y-2">
                  <PreviewField label="Recommendation 2" content={caseStudy.q2.recommendation2} />
                  <PreviewField label="How & Why" content={caseStudy.q2.recommendation2HowWhy} />
                </div>
                {caseStudy.q2.recommendation3 && (
                  <div className="p-3 bg-muted/30 rounded-lg border border-border/40 space-y-2">
                    <PreviewField label="Recommendation 3" content={caseStudy.q2.recommendation3} />
                    <PreviewField label="How & Why" content={caseStudy.q2.recommendation3HowWhy} />
                  </div>
                )}
                <PreviewField label="Likelihood of Success" content={caseStudy.q2.likelihoodOfSuccess} />
              </PreviewSection>
            </>
          ) : (
            <>
              <PreviewSection label="Introduction — The Strategic Frame">
                <PreviewField label="Hook" content={essay.introduction.hook} />
                <PreviewField label="Dimensions" content={essay.introduction.dimensions} />
                <PreviewField label="Thesis" content={essay.introduction.thesis} />
              </PreviewSection>
              {essay.bodyParagraphs.map((para, i) => (
                <PreviewSection key={i} label={`Body Paragraph ${i + 1} — Enhanced PEEL`}>
                  <PreviewField label="Point" content={para.point} />
                  <PreviewField label="Evidence" content={para.evidence} />
                  <PreviewField label="Explanation" content={para.explanation} />
                  <PreviewField label="Synthesis" content={para.synthesis} />
                </PreviewSection>
              ))}
              <PreviewSection label="Counter-Perspective — The Balanced View">
                <PreviewField label="Acknowledgement" content={essay.counterPerspective.acknowledgement} />
                <PreviewField label="Evaluation" content={essay.counterPerspective.evaluation} />
              </PreviewSection>
              <PreviewSection label="Conclusion — The Evaluative Judgement">
                <PreviewField label="Synthesis" content={essay.conclusion.synthesis} />
                <PreviewField label="Final Word" content={essay.conclusion.finalWord} />
              </PreviewSection>
            </>
          )}
        </div>
      ) : (
        /* ===== FORM MODE ===== */
        <div className="space-y-6">
          {/* Common Fields */}
          <div className="space-y-4">
            <div>
              <label className={labelClass}>Title</label>
              <input
                type="text"
                placeholder="Article title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-foreground">Tags</label>
                <Button onClick={addTag} size="sm" variant="outline" className="flex items-center gap-1">
                  <Plus className="h-4 w-4" /> Add Tag
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <div key={index} className="flex items-center gap-1">
                    <input
                      type="text"
                      placeholder="Tag name"
                      value={tag}
                      onChange={(e) => updateTag(index, e.target.value)}
                      className="p-2 text-sm border border-border rounded bg-card focus:ring-1 focus:ring-ring w-40"
                    />
                    {tags.length > 1 && (
                      <button onClick={() => removeTag(index)} className="text-muted-foreground hover:text-destructive p-1">
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {articleType === 'case-study' ? (
            <div className="space-y-6">
              {/* Q1(a) */}
              <div className="border-t border-border/60 pt-4">
                <h3 className="text-sm font-medium text-foreground mb-3">Q1(a) — The Contextual Explainer [6m]</h3>
                <p className="text-xs text-muted-foreground mb-3">Level 3 (5-6m): Explain two factors/issues in context. Quote/reference the source for each.</p>
                <div className="space-y-3 p-4 bg-muted/30 rounded-lg border border-border/40">
                  <p className="text-xs font-medium text-muted-foreground">Factor 1</p>
                  <FormField label="Identify Factor" placeholder="What is the first factor/issue?" value={caseStudy.q1a.factor1} onChange={v => setCaseStudy(p => ({ ...p, q1a: { ...p.q1a, factor1: v } }))} rows={2} />
                  <FormField label="Source Reference" placeholder="Quote or reference from the source..." value={caseStudy.q1a.sourceReference1} onChange={v => setCaseStudy(p => ({ ...p, q1a: { ...p.q1a, sourceReference1: v } }))} rows={2} />
                  <FormField label="Explanation in Context" placeholder="Explain this factor in the context of China..." value={caseStudy.q1a.contextExplanation1} onChange={v => setCaseStudy(p => ({ ...p, q1a: { ...p.q1a, contextExplanation1: v } }))} rows={3} />
                </div>
                <div className="space-y-3 p-4 bg-muted/30 rounded-lg border border-border/40 mt-3">
                  <p className="text-xs font-medium text-muted-foreground">Factor 2</p>
                  <FormField label="Identify Factor" placeholder="What is the second factor/issue?" value={caseStudy.q1a.factor2} onChange={v => setCaseStudy(p => ({ ...p, q1a: { ...p.q1a, factor2: v } }))} rows={2} />
                  <FormField label="Source Reference" placeholder="Quote or reference from the source..." value={caseStudy.q1a.sourceReference2} onChange={v => setCaseStudy(p => ({ ...p, q1a: { ...p.q1a, sourceReference2: v } }))} rows={2} />
                  <FormField label="Explanation in Context" placeholder="Explain this factor in the context of China..." value={caseStudy.q1a.contextExplanation2} onChange={v => setCaseStudy(p => ({ ...p, q1a: { ...p.q1a, contextExplanation2: v } }))} rows={3} />
                </div>
              </div>

              {/* Q1(b) */}
              <div className="border-t border-border/60 pt-4">
                <h3 className="text-sm font-medium text-foreground mb-3">Q1(b) — The Comparative Analysis [9m]</h3>
                <p className="text-xs text-muted-foreground mb-3">Level 3 (7-9m): Analyse similarities AND differences with source content AND contextual knowledge.</p>
                <div className="space-y-3">
                  <FormField label={'"How Far" Hook'} placeholder="State the degree of similarity/difference..." value={caseStudy.q1b.hook} onChange={v => setCaseStudy(p => ({ ...p, q1b: { ...p.q1b, hook: v } }))} rows={2} />
                  <FormField label="Similarities" placeholder="Source A and B agree on..." value={caseStudy.q1b.similarities} onChange={v => setCaseStudy(p => ({ ...p, q1b: { ...p.q1b, similarities: v } }))} rows={3} />
                  <FormField label="Differences" placeholder="However, they diverge on..." value={caseStudy.q1b.differences} onChange={v => setCaseStudy(p => ({ ...p, q1b: { ...p.q1b, differences: v } }))} rows={3} />
                  <FormField label="Contextual Reasoning" placeholder="Use own knowledge to explain WHY perspectives differ (e.g., state media vs. foreign NGO)..." value={caseStudy.q1b.contextualReasoning} onChange={v => setCaseStudy(p => ({ ...p, q1b: { ...p.q1b, contextualReasoning: v } }))} rows={3} />
                </div>
              </div>

              {/* Q1(c) */}
              <div className="border-t border-border/60 pt-4">
                <h3 className="text-sm font-medium text-foreground mb-3">Q1(c) — The Reliability Check [8m]</h3>
                <p className="text-xs text-muted-foreground mb-3">Level 3 (6-8m): Assess strengths AND limitations using contextual knowledge and/or other sources.</p>
                <div className="space-y-3">
                  <FormField label="Strengths" placeholder="Why is this source useful? (e.g., eyewitness account, official data)..." value={caseStudy.q1c.strengths} onChange={v => setCaseStudy(p => ({ ...p, q1c: { ...p.q1c, strengths: v } }))} rows={3} />
                  <FormField label="Limitations" placeholder="Why should we be cautious? (e.g., bias, narrow scope, outdated)..." value={caseStudy.q1c.limitations} onChange={v => setCaseStudy(p => ({ ...p, q1c: { ...p.q1c, limitations: v } }))} rows={3} />
                  <FormField label="Cross-Referencing with Other Sources" placeholder="How does this compare to other sources or your own contextual knowledge?" value={caseStudy.q1c.crossReferencing} onChange={v => setCaseStudy(p => ({ ...p, q1c: { ...p.q1c, crossReferencing: v } }))} rows={3} />
                  <FormField label="Verdict" placeholder="How much can we trust this source for the specific question?" value={caseStudy.q1c.verdict} onChange={v => setCaseStudy(p => ({ ...p, q1c: { ...p.q1c, verdict: v } }))} rows={2} />
                </div>
              </div>

              {/* Q1(d) */}
              <div className="border-t border-border/60 pt-4">
                <h3 className="text-sm font-medium text-foreground mb-3">Q1(d) — The Mini-Synthesis [12m]</h3>
                <p className="text-xs text-muted-foreground mb-3">Level 3 (9-12m): Evaluate ALL sources with contextual knowledge for a supported judgement on the hypothesis.</p>
                <div className="space-y-3">
                  <FormField label="Sources Supporting the View" placeholder="Group and evaluate sources that support the view..." value={caseStudy.q1d.supportingSourcesEvaluation} onChange={v => setCaseStudy(p => ({ ...p, q1d: { ...p.q1d, supportingSourcesEvaluation: v } }))} rows={3} />
                  <FormField label="Sources Challenging the View" placeholder="Group and evaluate sources that challenge the view..." value={caseStudy.q1d.challengingSourcesEvaluation} onChange={v => setCaseStudy(p => ({ ...p, q1d: { ...p.q1d, challengingSourcesEvaluation: v } }))} rows={3} />
                  <FormField label="Contextual Knowledge" placeholder="What own knowledge supports or complicates the view?" value={caseStudy.q1d.contextualKnowledge} onChange={v => setCaseStudy(p => ({ ...p, q1d: { ...p.q1d, contextualKnowledge: v } }))} rows={3} />
                  <FormField label="Supported Judgement" placeholder="Reach a final, supported judgement on the degree to which sources support the view..." value={caseStudy.q1d.judgement} onChange={v => setCaseStudy(p => ({ ...p, q1d: { ...p.q1d, judgement: v } }))} rows={3} />
                </div>
              </div>

              {/* Q2 */}
              <div className="border-t border-border/60 pt-4">
                <h3 className="text-sm font-medium text-foreground mb-3">Q2 — The Policy Consultant Response [25m]</h3>
                <p className="text-xs text-muted-foreground mb-3">Level 5 (21-25m): Thorough evaluation using all sources + contextual knowledge, developed recommendations with how/why, and assessment of likelihood of success.</p>
                <div className="space-y-3">
                  <FormField label="Issue Evaluation" placeholder="Evaluate the core challenge using all four sources and contextual knowledge..." value={caseStudy.q2.issueEvaluation} onChange={v => setCaseStudy(p => ({ ...p, q2: { ...p.q2, issueEvaluation: v } }))} rows={4} />
                  <div className="p-4 bg-muted/30 rounded-lg border border-border/40 space-y-3">
                    <p className="text-xs font-medium text-muted-foreground">Recommendation 1</p>
                    <FormField label="Recommendation" placeholder="What do you recommend?" value={caseStudy.q2.recommendation1} onChange={v => setCaseStudy(p => ({ ...p, q2: { ...p.q2, recommendation1: v } }))} rows={2} />
                    <FormField label="How & Why This Works" placeholder="How does this address the root cause? Why will it lead to improvement?" value={caseStudy.q2.recommendation1HowWhy} onChange={v => setCaseStudy(p => ({ ...p, q2: { ...p.q2, recommendation1HowWhy: v } }))} rows={3} />
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg border border-border/40 space-y-3">
                    <p className="text-xs font-medium text-muted-foreground">Recommendation 2</p>
                    <FormField label="Recommendation" placeholder="What do you recommend?" value={caseStudy.q2.recommendation2} onChange={v => setCaseStudy(p => ({ ...p, q2: { ...p.q2, recommendation2: v } }))} rows={2} />
                    <FormField label="How & Why This Works" placeholder="How does this address the root cause? Why will it lead to improvement?" value={caseStudy.q2.recommendation2HowWhy} onChange={v => setCaseStudy(p => ({ ...p, q2: { ...p.q2, recommendation2HowWhy: v } }))} rows={3} />
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg border border-border/40 space-y-3">
                    <p className="text-xs font-medium text-muted-foreground">Recommendation 3 (optional)</p>
                    <FormField label="Recommendation" placeholder="What do you recommend?" value={caseStudy.q2.recommendation3} onChange={v => setCaseStudy(p => ({ ...p, q2: { ...p.q2, recommendation3: v } }))} rows={2} />
                    <FormField label="How & Why This Works" placeholder="How does this address the root cause?" value={caseStudy.q2.recommendation3HowWhy} onChange={v => setCaseStudy(p => ({ ...p, q2: { ...p.q2, recommendation3HowWhy: v } }))} rows={3} />
                  </div>
                  <FormField label="Assessment of Likelihood of Success" placeholder="How likely are these recommendations to succeed? Consider political, economic, and social feasibility..." value={caseStudy.q2.likelihoodOfSuccess} onChange={v => setCaseStudy(p => ({ ...p, q2: { ...p.q2, likelihoodOfSuccess: v } }))} rows={4} />
                </div>
              </div>
            </div>
          ) : (
            /* Essay Form */
            <div className="space-y-6">
              {/* Introduction */}
              <div className="border-t border-border/60 pt-4">
                <h3 className="text-sm font-medium text-foreground mb-3">Introduction — The Strategic Frame</h3>
                <div className="space-y-3">
                  <FormField label="Hook (Define the Key Issue)" placeholder="Define the key issue in contemporary China (post-2000)..." value={essay.introduction.hook} onChange={v => setEssay(p => ({ ...p, introduction: { ...p.introduction, hook: v } }))} rows={2} />
                  <FormField label="Dimensions (Lenses of Analysis)" placeholder='e.g., "This essay will examine the Economic drivers and Political constraints..."' value={essay.introduction.dimensions} onChange={v => setEssay(p => ({ ...p, introduction: { ...p.introduction, dimensions: v } }))} rows={2} />
                  <FormField label="Thesis" placeholder="A direct, sophisticated answer to the question..." value={essay.introduction.thesis} onChange={v => setEssay(p => ({ ...p, introduction: { ...p.introduction, thesis: v } }))} rows={3} />
                </div>
              </div>

              {/* Body Paragraphs */}
              <div className="border-t border-border/60 pt-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-medium text-foreground">Body Paragraphs — Enhanced PEEL</h3>
                  <Button onClick={addBodyParagraph} size="sm" variant="outline" className="flex items-center gap-1">
                    <Plus className="h-4 w-4" /> Add Paragraph
                  </Button>
                </div>
                <div className="space-y-4">
                  {essay.bodyParagraphs.map((para, index) => (
                    <div key={index} className="p-4 bg-muted/30 rounded-lg border border-border/40 relative">
                      {essay.bodyParagraphs.length > 1 && (
                        <button onClick={() => removeBodyParagraph(index)} className="absolute top-2 right-2 text-muted-foreground hover:text-destructive p-1">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      )}
                      <p className="text-xs font-medium text-muted-foreground mb-3">Paragraph {index + 1}</p>
                      <div className="space-y-3">
                        <FormField label="Point (Analytical Claim with Key Concept)" placeholder="e.g., Performance Legitimacy..." value={para.point} onChange={v => updateBodyParagraph(index, 'point', v)} rows={2} />
                        <FormField label="Evidence (Contemporary Examples)" placeholder="e.g., the 2013 SOE reforms or the Belt and Road Initiative..." value={para.evidence} onChange={v => updateBodyParagraph(index, 'evidence', v)} rows={3} />
                        <FormField label="Explanation (Link Evidence to Claim)" placeholder="Explain the link between your evidence and the claim..." value={para.explanation} onChange={v => updateBodyParagraph(index, 'explanation', v)} rows={3} />
                        <FormField label="Synthesis (Cross-Dimensional Connection)" placeholder="How does this social issue impact political stability?..." value={para.synthesis} onChange={v => updateBodyParagraph(index, 'synthesis', v)} rows={3} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Counter-Perspective */}
              <div className="border-t border-border/60 pt-4">
                <h3 className="text-sm font-medium text-foreground mb-3">Counter-Perspective — The Balanced View</h3>
                <div className="space-y-3">
                  <FormField label="Acknowledgement of Alternative Viewpoint" placeholder="Acknowledge an alternative viewpoint or significant limitation..." value={essay.counterPerspective.acknowledgement} onChange={v => setEssay(p => ({ ...p, counterPerspective: { ...p.counterPerspective, acknowledgement: v } }))} rows={3} />
                  <FormField label="Evaluation (Why Primary Thesis Still Holds)" placeholder="Evaluate why your primary thesis still holds more weight..." value={essay.counterPerspective.evaluation} onChange={v => setEssay(p => ({ ...p, counterPerspective: { ...p.counterPerspective, evaluation: v } }))} rows={3} />
                </div>
              </div>

              {/* Conclusion */}
              <div className="border-t border-border/60 pt-4">
                <h3 className="text-sm font-medium text-foreground mb-3">Conclusion — The Evaluative Judgement</h3>
                <div className="space-y-3">
                  <FormField label="Synthesis (Interplay Between Dimensions)" placeholder="Summarize the interplay between Economy, Politics, Society, International Relations..." value={essay.conclusion.synthesis} onChange={v => setEssay(p => ({ ...p, conclusion: { ...p.conclusion, synthesis: v } }))} rows={3} />
                  <FormField label="Final Word (Substantiated Judgement)" placeholder="Provide a sustained, substantiated judgement..." value={essay.conclusion.finalWord} onChange={v => setEssay(p => ({ ...p, conclusion: { ...p.conclusion, finalWord: v } }))} rows={3} />
                </div>
              </div>
            </div>
          )}

          {/* Tip */}
          <p className="text-xs text-muted-foreground">
            Fill in the fields, preview your article, then click Publish to save it directly.
          </p>
        </div>
      )}
    </div>
  )
}
