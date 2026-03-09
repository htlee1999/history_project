// ABOUTME: Type definitions and typed import for blog articles
// ABOUTME: Supports two article types: case-study (Paper 1) and essay (Paper 2)

import blogJson from './blog.json';

// Paper 1: Case Study sub-section fields
// Q1(a) [6m] Level 3: explains two factors/issues in context
export interface CaseStudyQ1a {
  factor1: string;
  sourceReference1: string;
  contextExplanation1: string;
  factor2: string;
  sourceReference2: string;
  contextExplanation2: string;
}

// Q1(b) [9m] Level 3: analyses similarities AND differences with source content AND contextual knowledge
export interface CaseStudyQ1b {
  hook: string;
  similarities: string;
  differences: string;
  contextualReasoning: string;
}

// Q1(c) [8m] Level 3: assesses strengths AND limitations using contextual knowledge and/or other sources
export interface CaseStudyQ1c {
  strengths: string;
  limitations: string;
  crossReferencing: string;
  verdict: string;
}

// Q1(d) [12m] Level 3: evaluates ALL sources with contextual knowledge for a supported judgement
export interface CaseStudyQ1d {
  supportingSourcesEvaluation: string;
  challengingSourcesEvaluation: string;
  contextualKnowledge: string;
  judgement: string;
}

// Q2 [25m] Level 5: thorough evaluation, recommendations with how/why, likelihood of success
export interface CaseStudyQ2 {
  issueEvaluation: string;
  recommendation1: string;
  recommendation1HowWhy: string;
  recommendation2: string;
  recommendation2HowWhy: string;
  recommendation3: string;
  recommendation3HowWhy: string;
  likelihoodOfSuccess: string;
}

export interface CaseStudySections {
  q1a: CaseStudyQ1a;
  q1b: CaseStudyQ1b;
  q1c: CaseStudyQ1c;
  q1d: CaseStudyQ1d;
  q2: CaseStudyQ2;
}

// Paper 2: Essay sub-section fields
export interface EssayIntroduction {
  hook: string;
  dimensions: string;
  thesis: string;
}

export interface EssayBodyParagraph {
  point: string;
  evidence: string;
  explanation: string;
  synthesis: string;
}

export interface EssayCounterPerspective {
  acknowledgement: string;
  evaluation: string;
}

export interface EssayConclusion {
  synthesis: string;
  finalWord: string;
}

export interface EssaySections {
  introduction: EssayIntroduction;
  bodyParagraphs: EssayBodyParagraph[];
  counterPerspective: EssayCounterPerspective;
  conclusion: EssayConclusion;
}

// Union type for articles
export interface CaseStudyArticle {
  id: string;
  title: string;
  type: 'case-study';
  date: string;
  tags: string[];
  sections: CaseStudySections;
}

export interface EssayArticle {
  id: string;
  title: string;
  type: 'essay';
  date: string;
  tags: string[];
  sections: EssaySections;
}

export type BlogArticle = CaseStudyArticle | EssayArticle;

export const blogArticles: BlogArticle[] = blogJson as BlogArticle[];
