// ABOUTME: Admin page for generating history data entries
// ABOUTME: Provides forms for country events and dynasty data with TypeScript code output

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Flag, Crown, Plus, Trash2, Copy, Check } from 'lucide-react'

interface DynastyEventForm {
  title: string
  chineseTitle: string
  content: string
  chineseContent: string
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

  const generateCountryEventCode = () => {
    const { date, title, description, dynastyId } = countryEventForm
    const lines = [
      `      {`,
      `        date: "${date}",`,
      `        title: "${title}",`,
      `        description: "${description.replace(/"/g, '\\"').replace(/\n/g, '<br><br>')}"${dynastyId ? ',' : ''}`,
    ]
    if (dynastyId) {
      lines.push(`        dynastyId: "${dynastyId}"`)
    }
    lines.push(`      },`)
    return lines.join('\n')
  }

  const generateDynastyCode = () => {
    const { id, title, chineseTitle, period, introduction, chineseIntroduction, significance, chineseSignificance, events } = dynastyForm

    const eventsCode = events.map(event => `      {
        title: "${event.title}",
        chineseTitle: "${event.chineseTitle}",
        content: "${event.content.replace(/"/g, '\\"').replace(/\n/g, '<br><br>')}",
        chineseContent: "${event.chineseContent.replace(/"/g, '\\"').replace(/\n/g, '<br><br>')}"
      }`).join(',\n')

    return `  ${id}: {
    title: "${title}",
    chineseTitle: "${chineseTitle}",
    period: "${period}",
    introduction: "${introduction.replace(/"/g, '\\"').replace(/\n/g, '<br><br>')}",
    chineseIntroduction: "${chineseIntroduction.replace(/"/g, '\\"').replace(/\n/g, '<br><br>')}",
    events: [
${eventsCode}
    ],
    significance: "${significance.replace(/"/g, '\\"').replace(/\n/g, '<br><br>')}",
    chineseSignificance: "${chineseSignificance.replace(/"/g, '\\"').replace(/\n/g, '<br><br>')}"
  },`
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const currentCode = activeTab === 'country' ? generateCountryEventCode() : generateDynastyCode()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <header className="mb-8">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-gray-200">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">History Data Admin</h1>
            <p className="text-gray-600">Generate TypeScript code for historyData.ts</p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Form Section */}
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-gray-200">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2 mb-6 bg-gray-100 rounded-lg p-1">
                <TabsTrigger
                  value="country"
                  className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:shadow rounded-md"
                >
                  <Flag className="h-4 w-4" />
                  Country Event
                </TabsTrigger>
                <TabsTrigger
                  value="dynasty"
                  className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:shadow rounded-md"
                >
                  <Crown className="h-4 w-4" />
                  Dynasty Data
                </TabsTrigger>
              </TabsList>

              {/* Country Event Form */}
              <TabsContent value="country" className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                  <select
                    value={countryEventForm.country}
                    onChange={(e) => setCountryEventForm(prev => ({ ...prev, country: e.target.value }))}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  >
                    {countries.map(c => (
                      <option key={c.id} value={c.id}>{c.flag} {c.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                  <input
                    type="text"
                    placeholder="e.g., 1046-771 BCE, 1969, c. 2070 BCE"
                    value={countryEventForm.date}
                    onChange={(e) => setCountryEventForm(prev => ({ ...prev, date: e.target.value }))}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <input
                    type="text"
                    placeholder="Event title"
                    value={countryEventForm.title}
                    onChange={(e) => setCountryEventForm(prev => ({ ...prev, title: e.target.value }))}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    placeholder="Event description (can include HTML like <br>, <strong>)"
                    value={countryEventForm.description}
                    onChange={(e) => setCountryEventForm(prev => ({ ...prev, description: e.target.value }))}
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Dynasty ID (optional)</label>
                  <input
                    type="text"
                    placeholder="e.g., tang, qing (links to dynasty details)"
                    value={countryEventForm.dynastyId}
                    onChange={(e) => setCountryEventForm(prev => ({ ...prev, dynastyId: e.target.value }))}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  />
                </div>
              </TabsContent>

              {/* Dynasty Form */}
              <TabsContent value="dynasty" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Dynasty ID</label>
                    <input
                      type="text"
                      placeholder="e.g., tang, song"
                      value={dynastyForm.id}
                      onChange={(e) => setDynastyForm(prev => ({ ...prev, id: e.target.value }))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Period</label>
                    <input
                      type="text"
                      placeholder="e.g., 618-907 CE"
                      value={dynastyForm.period}
                      onChange={(e) => setDynastyForm(prev => ({ ...prev, period: e.target.value }))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Title (English)</label>
                    <input
                      type="text"
                      placeholder="Tang Dynasty"
                      value={dynastyForm.title}
                      onChange={(e) => setDynastyForm(prev => ({ ...prev, title: e.target.value }))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Title (Chinese)</label>
                    <input
                      type="text"
                      placeholder="唐朝"
                      value={dynastyForm.chineseTitle}
                      onChange={(e) => setDynastyForm(prev => ({ ...prev, chineseTitle: e.target.value }))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Introduction (English)</label>
                  <textarea
                    placeholder="English introduction..."
                    value={dynastyForm.introduction}
                    onChange={(e) => setDynastyForm(prev => ({ ...prev, introduction: e.target.value }))}
                    rows={3}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Introduction (Chinese)</label>
                  <textarea
                    placeholder="中文介绍..."
                    value={dynastyForm.chineseIntroduction}
                    onChange={(e) => setDynastyForm(prev => ({ ...prev, chineseIntroduction: e.target.value }))}
                    rows={3}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  />
                </div>

                {/* Dynasty Events */}
                <div className="border-t pt-4 mt-4">
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-medium text-gray-700">Historical Events</label>
                    <Button onClick={addDynastyEvent} size="sm" variant="outline" className="flex items-center gap-1">
                      <Plus className="h-4 w-4" /> Add Event
                    </Button>
                  </div>

                  <div className="space-y-4 max-h-80 overflow-y-auto">
                    {dynastyForm.events.map((event, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg border relative">
                        <button
                          onClick={() => removeDynastyEvent(index)}
                          className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                        <div className="text-xs font-medium text-gray-500 mb-2">Event {index + 1}</div>
                        <div className="grid grid-cols-2 gap-2 mb-2">
                          <input
                            type="text"
                            placeholder="Title (English)"
                            value={event.title}
                            onChange={(e) => updateDynastyEvent(index, 'title', e.target.value)}
                            className="p-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-gray-400"
                          />
                          <input
                            type="text"
                            placeholder="标题 (Chinese)"
                            value={event.chineseTitle}
                            onChange={(e) => updateDynastyEvent(index, 'chineseTitle', e.target.value)}
                            className="p-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-gray-400"
                          />
                        </div>
                        <textarea
                          placeholder="Content (English)"
                          value={event.content}
                          onChange={(e) => updateDynastyEvent(index, 'content', e.target.value)}
                          rows={2}
                          className="w-full p-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-gray-400 mb-2"
                        />
                        <textarea
                          placeholder="内容 (Chinese)"
                          value={event.chineseContent}
                          onChange={(e) => updateDynastyEvent(index, 'chineseContent', e.target.value)}
                          rows={2}
                          className="w-full p-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-gray-400"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Significance (English)</label>
                  <textarea
                    placeholder="Historical significance..."
                    value={dynastyForm.significance}
                    onChange={(e) => setDynastyForm(prev => ({ ...prev, significance: e.target.value }))}
                    rows={2}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Significance (Chinese)</label>
                  <textarea
                    placeholder="历史意义..."
                    value={dynastyForm.chineseSignificance}
                    onChange={(e) => setDynastyForm(prev => ({ ...prev, chineseSignificance: e.target.value }))}
                    rows={2}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Code Output Section */}
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Generated Code</h2>
              <Button
                onClick={() => copyToClipboard(currentCode)}
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                {copied ? 'Copied!' : 'Copy'}
              </Button>
            </div>

            <div className="bg-gray-900 rounded-lg p-4 overflow-auto max-h-[600px]">
              <pre className="text-sm text-green-400 font-mono whitespace-pre-wrap">
                {currentCode}
              </pre>
            </div>

            <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-sm font-medium text-blue-800 mb-2">Instructions</h3>
              {activeTab === 'country' ? (
                <ol className="text-sm text-blue-700 space-y-1 list-decimal list-inside">
                  <li>Copy the code above</li>
                  <li>Open <code className="bg-blue-100 px-1 rounded">src/data/historyData.ts</code></li>
                  <li>Find <code className="bg-blue-100 px-1 rounded">historyData.{countryEventForm.country}.events</code></li>
                  <li>Paste in the appropriate chronological position</li>
                </ol>
              ) : (
                <ol className="text-sm text-blue-700 space-y-1 list-decimal list-inside">
                  <li>Copy the code above</li>
                  <li>Open <code className="bg-blue-100 px-1 rounded">src/data/historyData.ts</code></li>
                  <li>Find <code className="bg-blue-100 px-1 rounded">dynastyData</code> object</li>
                  <li>Paste before the closing brace</li>
                </ol>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
