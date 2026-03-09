// ABOUTME: API route for creating and deleting blog articles
// ABOUTME: Reads/writes to src/data/blog.json on disk

import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

const BLOG_FILE = path.join(process.cwd(), 'src/data/blog.json')

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const article = req.body
    if (!article || !article.id || !article.title || !article.type) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    const existing = JSON.parse(fs.readFileSync(BLOG_FILE, 'utf-8'))

    if (existing.some((a: { id: string }) => a.id === article.id)) {
      return res.status(409).json({ error: 'Article with this ID already exists' })
    }

    existing.push(article)
    fs.writeFileSync(BLOG_FILE, JSON.stringify(existing, null, 2) + '\n')

    return res.status(201).json({ success: true, id: article.id })
  }

  if (req.method === 'DELETE') {
    const { id } = req.query
    if (!id || typeof id !== 'string') {
      return res.status(400).json({ error: 'Missing article id' })
    }

    const existing = JSON.parse(fs.readFileSync(BLOG_FILE, 'utf-8'))
    const filtered = existing.filter((a: { id: string }) => a.id !== id)

    if (filtered.length === existing.length) {
      return res.status(404).json({ error: 'Article not found' })
    }

    fs.writeFileSync(BLOG_FILE, JSON.stringify(filtered, null, 2) + '\n')

    return res.status(200).json({ success: true })
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
