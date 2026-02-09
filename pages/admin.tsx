// ABOUTME: Admin page for generating history data entries as JSON
// ABOUTME: Provides forms for country events, dynasty data, and glossary terms with JSON output

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Flag, Crown, BookOpen, Plus, Trash2, Copy, Check } from 'lucide-react'

interface DynastyEventForm {
  title: string
  chineseTitle: string
  content: string
  chineseContent: string
}

interface GlossaryTagForm {
  value: string
}

export default function Admin() {
  const [activeTab, setActiveTab] = useState('country')
  const [copied, setCopied] = useState(false)

  // Country Event Form State
  const [countryEventForm, setCountryEventForm] = useState({
    country: 'china',
    date: '',
    title: '',
    description: '',
    dynastyId: ''
  })

  // Dynasty Form State
  const [dynastyForm, setDynastyForm] = useState({
    id: '',
    title: '',
    chineseTitle: '',
    period: '',
    introduction: '',
    chineseIntroduction: '',
    significance: '',
    chineseSignificance: '',
    events: [{ title: '', chineseTitle: '', content: '', chineseContent: '' }] as DynastyEventForm[]
  })

  // Glossary Form State
  const [glossaryForm, setGlossaryForm] = useState({
    term: '',
    definition: '',
    source: '',
    tags: [{ value: '' }] as GlossaryTagForm[]
  })

  const countries = [
    { id: 'china', name: 'China', flag: '🇨🇳' },
    { id: 'usa', name: 'USA', flag: '🇺🇸' },
    { id: 'uk', name: 'UK', flag: '🇬🇧' },
    { id: 'france', name: 'France', flag: '🇫🇷' },
    { id: 'korea', name: 'Korea', flag: '🇰🇷' },
    { id: 'japan', name: 'Japan', flag: '🇯🇵' },
    { id: 'greece', name: 'Greece', flag: '🇬🇷' },
    { id: 'italy', name: 'Italy', flag: '🇮🇹' }
  ]

  // Dynasty event helpers
  const addDynastyEvent = () => {
    setDynastyForm(prev => ({
      ...prev,
      events: [...prev.events, { title: '', chineseTitle: '', content: '', chineseContent: '' }]
    }))
  }

  const removeDynastyEvent = (index: number) => {
    setDynastyForm(prev => ({
      ...prev,
      events: prev.events.filter((_, i) => i !== index)
    }))
  }

  const updateDynastyEvent = (index: number, field: keyof DynastyEventForm, value: string) => {
    setDynastyForm(prev => ({
      ...prev,
      events: prev.events.map((event, i) =>
        i === index ? { ...event, [field]: value } : event
      )
    }))
  }

  // Glossary tag helpers
  const addGlossaryTag = () => {
    setGlossaryForm(prev => ({
      ...prev,
      tags: [...prev.tags, { value: '' }]
    }))
  }

  const removeGlossaryTag = (index: number) => {
    setGlossaryForm(prev => ({
      ...prev,
      tags: prev.tags.filter((_, i) => i !== index)
    }))
  }

  const updateGlossaryTag = (index: number, value: string) => {
    setGlossaryForm(prev => ({
      ...prev,
      tags: prev.tags.map((tag, i) => i === index ? { value } : tag)
    }))
  }

  // Generate a URL-friendly id from the term name
  const generateGlossaryId = (term: string) => {
    return term.toLowerCase()
      .replace(/\s*\(.*?\)\s*/g, '-')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
  }

  const generateCountryEventJson = () => {
    const { date, title, description, dynastyId } = countryEventForm
    const obj: Record<string, string> = { date, title, description }
    if (dynastyId) obj.dynastyId = dynastyId
    return JSON.stringify(obj, null, 2)
  }

  const generateDynastyJson = () => {
    const { id, title, chineseTitle, period, introduction, chineseIntroduction, significance, chineseSignificance, events } = dynastyForm
    const obj = {
      [id || 'dynasty_id']: {
        title,
        chineseTitle,
        period,
        introduction,
        chineseIntroduction,
        events: events.map(e => ({
          title: e.title,
          chineseTitle: e.chineseTitle,
          content: e.content,
          chineseContent: e.chineseContent
        })),
        significance,
        chineseSignificance
      }
    }
    return JSON.stringify(obj, null, 2)
  }

  const generateGlossaryJson = () => {
    const { term, definition, source, tags } = glossaryForm
    const obj: Record<string, unknown> = {
      id: generateGlossaryId(term),
      term,
      definition
    }
    if (source.trim()) obj.source = source
    obj.tags = tags.map(t => t.value).filter(v => v.trim())
    return JSON.stringify(obj, null, 2)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const codeByTab: Record<string, string> = {
    country: generateCountryEventJson(),
    dynasty: generateDynastyJson(),
    glossary: generateGlossaryJson()
  }
  const currentCode = codeByTab[activeTab] || ''

  const inputClass = "w-full p-3 border border-border rounded-lg bg-card focus:ring-2 focus:ring-ring focus:border-transparent text-foreground"
  const labelClass = "block text-sm font-medium text-foreground mb-1"

  return (
    <div className="min-h-screen archive-bg relative">
      <div className="fixed inset-0 texture-overlay -z-10" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <header className="mb-8">
          <div className="bg-card/90 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-border/60">
            <h1 className="text-3xl font-light text-foreground mb-2">History Data Admin</h1>
            <p className="text-muted-foreground">Generate JSON entries for history and glossary data files</p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Form Section */}
          <div className="bg-card/90 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-border/60">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3 mb-6 bg-muted rounded-lg p-1">
                <TabsTrigger
                  value="country"
                  className="flex items-center gap-2 data-[state=active]:bg-card data-[state=active]:shadow-sm rounded-md text-sm"
                >
                  <Flag className="h-4 w-4" />
                  <span className="hidden sm:inline">Country</span> Event
                </TabsTrigger>
                <TabsTrigger
                  value="dynasty"
                  className="flex items-center gap-2 data-[state=active]:bg-card data-[state=active]:shadow-sm rounded-md text-sm"
                >
                  <Crown className="h-4 w-4" />
                  Dynasty
                </TabsTrigger>
                <TabsTrigger
                  value="glossary"
                  className="flex items-center gap-2 data-[state=active]:bg-card data-[state=active]:shadow-sm rounded-md text-sm"
                >
                  <BookOpen className="h-4 w-4" />
                  Glossary
                </TabsTrigger>
              </TabsList>

              {/* Country Event Form */}
              <TabsContent value="country" className="space-y-4">
                <div>
                  <label className={labelClass}>Country</label>
                  <select
                    value={countryEventForm.country}
                    onChange={(e) => setCountryEventForm(prev => ({ ...prev, country: e.target.value }))}
                    className={inputClass}
                  >
                    {countries.map(c => (
                      <option key={c.id} value={c.id}>{c.flag} {c.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={labelClass}>Date</label>
                  <input
                    type="text"
                    placeholder="e.g., 1046-771 BCE, 1969, c. 2070 BCE"
                    value={countryEventForm.date}
                    onChange={(e) => setCountryEventForm(prev => ({ ...prev, date: e.target.value }))}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Title</label>
                  <input
                    type="text"
                    placeholder="Event title"
                    value={countryEventForm.title}
                    onChange={(e) => setCountryEventForm(prev => ({ ...prev, title: e.target.value }))}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Description</label>
                  <textarea
                    placeholder="Event description"
                    value={countryEventForm.description}
                    onChange={(e) => setCountryEventForm(prev => ({ ...prev, description: e.target.value }))}
                    rows={4}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Dynasty ID (optional)</label>
                  <input
                    type="text"
                    placeholder="e.g., tang, qing (links to dynasty details)"
                    value={countryEventForm.dynastyId}
                    onChange={(e) => setCountryEventForm(prev => ({ ...prev, dynastyId: e.target.value }))}
                    className={inputClass}
                  />
                </div>
              </TabsContent>

              {/* Dynasty Form */}
              <TabsContent value="dynasty" className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Dynasty ID</label>
                    <input
                      type="text"
                      placeholder="e.g., tang, song"
                      value={dynastyForm.id}
                      onChange={(e) => setDynastyForm(prev => ({ ...prev, id: e.target.value }))}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Period</label>
                    <input
                      type="text"
                      placeholder="e.g., 618-907 CE"
                      value={dynastyForm.period}
                      onChange={(e) => setDynastyForm(prev => ({ ...prev, period: e.target.value }))}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Title (English)</label>
                    <input
                      type="text"
                      placeholder="Tang Dynasty"
                      value={dynastyForm.title}
                      onChange={(e) => setDynastyForm(prev => ({ ...prev, title: e.target.value }))}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Title (Chinese)</label>
                    <input
                      type="text"
                      placeholder="唐朝"
                      value={dynastyForm.chineseTitle}
                      onChange={(e) => setDynastyForm(prev => ({ ...prev, chineseTitle: e.target.value }))}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Introduction (English)</label>
                  <textarea
                    placeholder="English introduction..."
                    value={dynastyForm.introduction}
                    onChange={(e) => setDynastyForm(prev => ({ ...prev, introduction: e.target.value }))}
                    rows={3}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Introduction (Chinese)</label>
                  <textarea
                    placeholder="中文介绍..."
                    value={dynastyForm.chineseIntroduction}
                    onChange={(e) => setDynastyForm(prev => ({ ...prev, chineseIntroduction: e.target.value }))}
                    rows={3}
                    className={inputClass}
                  />
                </div>

                {/* Dynasty Events */}
                <div className="border-t border-border/60 pt-4 mt-4">
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-medium text-foreground">Historical Events</label>
                    <Button onClick={addDynastyEvent} size="sm" variant="outline" className="flex items-center gap-1">
                      <Plus className="h-4 w-4" /> Add Event
                    </Button>
                  </div>

                  <div className="space-y-4 max-h-80 overflow-y-auto">
                    {dynastyForm.events.map((event, index) => (
                      <div key={index} className="bg-muted/50 p-4 rounded-lg border border-border/60 relative">
                        <button
                          onClick={() => removeDynastyEvent(index)}
                          className="absolute top-2 right-2 text-muted-foreground hover:text-destructive p-1"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                        <div className="text-xs font-medium text-muted-foreground mb-2">Event {index + 1}</div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
                          <input
                            type="text"
                            placeholder="Title (English)"
                            value={event.title}
                            onChange={(e) => updateDynastyEvent(index, 'title', e.target.value)}
                            className="p-2 text-sm border border-border rounded bg-card focus:ring-1 focus:ring-ring"
                          />
                          <input
                            type="text"
                            placeholder="标题 (Chinese)"
                            value={event.chineseTitle}
                            onChange={(e) => updateDynastyEvent(index, 'chineseTitle', e.target.value)}
                            className="p-2 text-sm border border-border rounded bg-card focus:ring-1 focus:ring-ring"
                          />
                        </div>
                        <textarea
                          placeholder="Content (English)"
                          value={event.content}
                          onChange={(e) => updateDynastyEvent(index, 'content', e.target.value)}
                          rows={2}
                          className="w-full p-2 text-sm border border-border rounded bg-card focus:ring-1 focus:ring-ring mb-2"
                        />
                        <textarea
                          placeholder="内容 (Chinese)"
                          value={event.chineseContent}
                          onChange={(e) => updateDynastyEvent(index, 'chineseContent', e.target.value)}
                          rows={2}
                          className="w-full p-2 text-sm border border-border rounded bg-card focus:ring-1 focus:ring-ring"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Significance (English)</label>
                  <textarea
                    placeholder="Historical significance..."
                    value={dynastyForm.significance}
                    onChange={(e) => setDynastyForm(prev => ({ ...prev, significance: e.target.value }))}
                    rows={2}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Significance (Chinese)</label>
                  <textarea
                    placeholder="历史意义..."
                    value={dynastyForm.chineseSignificance}
                    onChange={(e) => setDynastyForm(prev => ({ ...prev, chineseSignificance: e.target.value }))}
                    rows={2}
                    className={inputClass}
                  />
                </div>
              </TabsContent>

              {/* Glossary Form */}
              <TabsContent value="glossary" className="space-y-4">
                <div>
                  <label className={labelClass}>Term</label>
                  <input
                    type="text"
                    placeholder="e.g., Allied Powers (WWI)"
                    value={glossaryForm.term}
                    onChange={(e) => setGlossaryForm(prev => ({ ...prev, term: e.target.value }))}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Definition</label>
                  <textarea
                    placeholder="Full definition of the term..."
                    value={glossaryForm.definition}
                    onChange={(e) => setGlossaryForm(prev => ({ ...prev, definition: e.target.value }))}
                    rows={5}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Source (optional)</label>
                  <input
                    type="text"
                    placeholder="e.g., Common historical knowledge"
                    value={glossaryForm.source}
                    onChange={(e) => setGlossaryForm(prev => ({ ...prev, source: e.target.value }))}
                    className={inputClass}
                  />
                </div>

                {/* Tags */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-foreground">Tags</label>
                    <Button onClick={addGlossaryTag} size="sm" variant="outline" className="flex items-center gap-1">
                      <Plus className="h-4 w-4" /> Add Tag
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {glossaryForm.tags.map((tag, index) => (
                      <div key={index} className="flex items-center gap-1">
                        <input
                          type="text"
                          placeholder="Tag name"
                          value={tag.value}
                          onChange={(e) => updateGlossaryTag(index, e.target.value)}
                          className="p-2 text-sm border border-border rounded bg-card focus:ring-1 focus:ring-ring w-40"
                        />
                        {glossaryForm.tags.length > 1 && (
                          <button
                            onClick={() => removeGlossaryTag(index)}
                            className="text-muted-foreground hover:text-destructive p-1"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Code Output Section */}
          <div className="bg-card/90 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-border/60">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-foreground">Generated JSON</h2>
              <Button
                onClick={() => copyToClipboard(currentCode)}
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                {copied ? 'Copied!' : 'Copy'}
              </Button>
            </div>

            <div className="bg-primary rounded-lg p-4 overflow-auto max-h-[600px]">
              <pre className="text-sm text-primary-foreground font-mono whitespace-pre-wrap">
                {currentCode}
              </pre>
            </div>

            <div className="mt-4 p-4 bg-muted/50 rounded-lg border border-border/60">
              <h3 className="text-sm font-medium text-foreground mb-2">Instructions</h3>
              {activeTab === 'country' && (
                <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                  <li>Copy the JSON above</li>
                  <li>Open <code className="bg-muted px-1 rounded">src/data/history.json</code></li>
                  <li>Find <code className="bg-muted px-1 rounded">historyData.{countryEventForm.country}.events</code></li>
                  <li>Add the entry in the appropriate chronological position</li>
                </ol>
              )}
              {activeTab === 'dynasty' && (
                <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                  <li>Copy the JSON above</li>
                  <li>Open <code className="bg-muted px-1 rounded">src/data/history.json</code></li>
                  <li>Find the <code className="bg-muted px-1 rounded">dynastyData</code> object</li>
                  <li>Add the entry before the closing brace</li>
                </ol>
              )}
              {activeTab === 'glossary' && (
                <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                  <li>Copy the JSON above</li>
                  <li>Open <code className="bg-muted px-1 rounded">src/data/glossary.json</code></li>
                  <li>Add the entry in alphabetical order</li>
                </ol>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
