import React from "react";
import CaseStudyLayout from "../components/casestudy/CaseStudyLayout";

export default function LPReportCaseStudy() {
  return (
    <CaseStudyLayout
      breadcrumb="Case Studies / LP Report Generation"
      categoryTag="VENTURE · FUND OPERATIONS"
      headline="3-5 days of quarterly ops work. Now done in 4 hours."
      stats={[
        { value: "5 Days Saved", label: "Per quarter" },
        { value: "$350MM", label: "AUM Fund" },
        { value: "40 LPs", label: "Automated" },
      ]}
      problemHeadline="LP report season was the most dreaded week in the fund"
      problemParagraphs={[
        "Every quarter, the same cycle repeated: one ops analyst would spend an entire week manually pulling portfolio company data from scattered spreadsheets, building individual PowerPoint presentations, writing narrative commentary by hand, and then sending personalized emails to each of their 40 LPs.",
        "The data was spread across multiple Google Sheets, updated at different times by different portcos. The commentary had to reflect each LP's specific fund commitment and performance numbers. One mistake in an LP's report could damage the relationship.",
        "The team knew this was unsustainable. But the work was so nuanced, personalized per LP, per fund vehicle, with specific financial data, that they assumed automation wasn't possible.",
      ]}
      pullQuote="Every quarter, our ops analyst disappeared for a week. The whole team knew not to bother her."
      solutionHeadline="An end-to-end pipeline that runs itself"
      solutionSteps={[
        "Portfolio companies update a shared Google Sheet with their monthly metrics: revenue, burn rate, key milestones, and headcount.",
        "A Python aggregation layer consolidates all portco data into a single master dataset, handling currency conversions, date normalization, and fund-vehicle allocation.",
        "Claude API generates narrative commentary, including performance summary, key highlights, and portfolio notes, written in the fund's voice and tone.",
        "Each LP receives a personalized email with a branded report reflecting their specific fund commitment, capital called, distributions, and net performance.",
      ]}
      techStack={["Python", "Claude API", "Google Sheets API", "python-docx", "SendGrid"]}
      resultBigStat="4 hours"
      resultBigLabel="Full quarterly reporting cycle, end to end"
      resultCards={[
        "Zero manual data entry. Portco data flows directly to finished report.",
        "40 personalized LP emails generated and sent automatically",
        "Ops analyst now works on higher-value portfolio support work",
      ]}
      buildTime="4 weeks"
    />
  );
}