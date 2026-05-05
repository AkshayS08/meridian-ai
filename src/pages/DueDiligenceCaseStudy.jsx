import React from "react";
import CaseStudyLayout from "../components/casestudy/CaseStudyLayout";

export default function DueDiligenceCaseStudy() {
  return (
    <CaseStudyLayout
      breadcrumb="Case Studies / Due Diligence Summarizer"
      categoryTag="BUYOUT · DUE DILIGENCE"
      headline="400 documents. Structured memo. 20 minutes."
      stats={[
        { value: "400 docs", label: "Processed" },
        { value: "20 min", label: "Total time" },
        { value: "3+ days", label: "Previously required" },
      ]}
      problemHeadline="Associates were reading entire data rooms document by document"
      problemParagraphs={[
        "This lower-middle-market buyout fund runs 8-12 active diligence processes per year. Each deal requires the team to review a data room containing 300-500 documents: contracts, financial statements, customer agreements, employee records, IP filings, and more.",
        "Associates were spending 3+ days reading through every document to extract key risks, contract terms, financial metrics, and red flags before presenting to the Investment Committee. The work was exhaustive, repetitive, and entirely manual.",
        "Senior deal team members were spending their time reviewing raw documents instead of analyzing the actual deal. The bottleneck wasn't judgment. It was reading. The fund needed a way to compress the information without losing the nuance.",
      ]}
      pullQuote="Our associates were the most expensive document readers in the industry. Three days of reading for every live deal."
      solutionHeadline="Upload a data room. Get a structured diligence memo."
      solutionSteps={[
        "The entire data room is uploaded to the pipeline. Documents are automatically categorized: financial statements, contracts, customer agreements, employment docs, IP filings, and more.",
        "LlamaIndex processes each document category, extracting text and building a searchable index across the entire data room.",
        "Claude extracts key clauses, financial metrics, and red flags per document category, with confidence scores and source references for every finding.",
        "A structured diligence memo is generated in the fund's existing format (PowerPoint, Excel, or internal tool), organized by category, with human-review flags highlighted for items requiring senior attention.",
      ]}
      techStack={["Python", "LlamaIndex", "Claude API", "python-docx"]}
      resultBigStat="20 min"
      resultBigLabel="Full data room processed into a structured diligence memo"
      resultCards={[
        "Associates now review a pre-organized memo rather than reading 400+ raw documents",
        "Red flags and key risks are surfaced automatically with source references",
        "Senior deal team time reclaimed for analysis and judgment, not reading",
      ]}
      buildTime="4 weeks"
    />
  );
}