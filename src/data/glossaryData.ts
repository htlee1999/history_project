// ABOUTME: Type definitions and typed import for the historical glossary
// ABOUTME: Data lives in glossary.json; this file provides the GlossaryTerm interface

import glossaryJson from './glossary.json';

export interface GlossaryTerm {
  id: string;
  term: string;
  definition: string;
  source?: string;
  tags: string[];
}

export const glossaryTerms: GlossaryTerm[] = glossaryJson;
