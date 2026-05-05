import React from "react";
import CaseStudyLayout from "../components/casestudy/CaseStudyLayout";

export default function DealFlowCaseStudy() {
  return (
    <CaseStudyLayout
      breadcrumb="Case Studies / Deal Flow Intake"
      categoryTag="VENTURE · DEAL FLOW"
      headline="90 minutes of daily analyst time. Down to 5."
      stats={[
        { value: "90 min/day", label: "Time eliminated" },
        { value: "30-40", label: "Pitch decks/week" },
        { value: "100%", label: "Deals logged" },
      ]}
      problemHeadline="Every inbound deal required manual data entry, and deals were falling through the cracks"
      problemParagraphs={[
        "This early-stage venture fund had 6 investment professionals reviewing 30-40 inbound pitch decks every week. Each deck needed to be read, key data extracted (company name, sector, stage, revenue, team size), and manually entered into their Affinity CRM.",
        "Analysts were spending 90 minutes every day on this process. But the bigger problem wasn't time. It was consistency. Some deals were logged with missing fields. Others weren't logged at all. When a partner asked 'did we see that company?' the answer was often 'probably, let me check.'",
        "The fund's thesis-fit assessment was also manual. A senior associate would scan each deck and decide if it matched their investment criteria, a judgment call that happened inconsistently depending on who was on deck duty that day.",
      ]}
      pullQuote="We were losing track of deals. Not because we didn't see them, because nobody logged them consistently."
      solutionHeadline="Every inbound deck parsed, scored, and routed automatically"
      solutionSteps={[
        "Inbound emails with pitch deck attachments trigger the pipeline automatically. The system monitors the deal flow inbox 24/7.",
        "AI parses each PDF deck, extracting company name, sector, stage, revenue, team size, and 6 additional fields with 95%+ accuracy.",
        "Each deal is automatically scored against the fund's investment thesis criteria. Fit scores are calculated based on sector focus, revenue range, and growth profile.",
        "Affinity CRM is auto-populated with all 12 fields. A Slack alert is sent to the relevant deal lead based on sector assignment, with the deck attached.",
      ]}
      techStack={["Make.com", "OpenAI API", "Affinity API", "Slack"]}
      resultBigStat="5 min"
      resultBigLabel="Daily analyst time spent on deal logging"
      resultCards={[
        "100% of inbound deals now logged consistently with all fields populated",
        "AI fit scoring improved deal prioritization within the first 30 days",
        "Deal leads receive instant Slack notifications for high-fit opportunities",
      ]}
      buildTime="2.5 weeks"
    />
  );
}