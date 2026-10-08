/* =========================================================
   THE SIGNAL — sample story data
   This is placeholder editorial content written for a
   coursework demo. Replace with real reporting before any
   public use.
   ========================================================= */

const CATEGORIES = {
  world:         { label: "World",         color: "var(--cat-world)" },
  technology:    { label: "Technology",    color: "var(--cat-technology)" },
  business:      { label: "Business",      color: "var(--cat-business)" },
  sports:        { label: "Sports",        color: "var(--cat-sports)" },
  entertainment: { label: "Entertainment", color: "var(--cat-entertainment)" },
};

const ARTICLES = [
  {
    id: "w1",
    category: "world",
    headline: "Delegates Reach Framework Deal on Cross-Border Water Sharing",
    dek: "After four days of closed-door talks, negotiators from twelve river-basin nations say they've settled the outline of a new drought-response pact.",
    byline: "Ama Owusu",
    date: "2026-08-24",
    readTime: "5 min read",
    image: "images/world-01.jpeg",
    featured: true,
    tags: ["diplomacy", "climate", "water security"],
    body: [
      "Negotiators from twelve countries that share river basins across three continents said early Monday that they had agreed on the broad outline of a framework meant to coordinate water releases during future droughts, capping a summit that stretched two days past its scheduled close.",
      "The proposed framework would create a shared monitoring board, standardize how member states report reservoir levels, and set out a tiered response plan that kicks in automatically once rainfall in a basin falls below a set threshold for two consecutive seasons.",
      "Officials familiar with the drafting process described the talks as tense but ultimately productive, noting that disagreements over enforcement mechanisms very nearly stalled the agreement on its final night.",
      "\"What we have is a starting point, not a finished treaty,\" one senior delegate told reporters outside the conference hall, adding that technical committees would spend the coming months turning the framework into binding language.",
      "Environmental groups gave the announcement a cautious welcome, arguing that voluntary compliance measures in the current text leave too much room for individual governments to opt out during a genuine crisis.",
      "The framework is expected to be formally reviewed at a follow-up ministerial meeting later this year, where member states will also discuss a proposed fund to help smaller economies upgrade aging irrigation infrastructure."
    ]
  },
  {
    id: "w2",
    category: "world",
    headline: "Port Authorities Test New Screening Lanes to Cut Container Delays",
    dek: "A pilot program at three major ports aims to shrink average clearance times from days to hours using pre-cleared cargo lanes.",
    byline: "Ama Owusu",
    date: "2026-08-21",
    readTime: "4 min read",
    image: "images/world-02.jpeg",
    tags: ["trade", "logistics"],
    body: [
      "Shipping operators at three of the world's busiest container ports began routing a portion of their cargo through newly built express lanes this week, part of a pilot program designed to shave days off customs clearance for shipments from pre-vetted exporters.",
      "Under the scheme, exporters that pass a background review and agree to share manifest data in advance can have containers flagged for expedited inspection rather than waiting in the standard queue, which port officials say has grown longer amid a broader rebound in trade volume.",
      "Early figures shared by port authorities suggest average clearance time for lane-eligible shipments dropped from roughly three days to under twelve hours during the first week of testing, though officials cautioned the sample size remains small.",
      "Freight forwarders have welcomed the change but warned that smaller exporters without the resources to meet the program's data-sharing requirements risk being left further behind larger competitors.",
      "A wider rollout is expected to be evaluated once the pilot completes its ninety-day trial period."
    ]
  },
  {
    id: "w3",
    category: "world",
    headline: "Coastal Cities Compare Notes on Rebuilding After Record Storm Season",
    dek: "Mayors from a dozen coastal cities met this week to share what worked, and what didn't, in last year's recovery efforts.",
    byline: "Femi Solarin",
    date: "2026-08-17",
    readTime: "3 min read",
    image: "images/world-03.jpeg",
    tags: ["climate", "infrastructure"],
    body: [
      "City leaders from a dozen coastal municipalities gathered this week to compare recovery strategies following what several described as the most damaging storm season in over a decade for their regions.",
      "Much of the discussion centered on funding gaps between the initial emergency response, which tends to draw national attention and aid, and the years-long rebuilding phase that follows once headlines move on.",
      "Several mayors pointed to shared building codes and joint procurement of flood barriers as areas where smaller cities could pool resources rather than negotiating separately with suppliers.",
      "The group agreed to reconvene twice a year and to publish a shared dashboard tracking rebuilding milestones across participating cities."
    ]
  },

  {
    id: "t1",
    category: "technology",
    headline: "Regulators Open Public Comment Period on Automated Hiring Tools",
    dek: "A new draft rule would require companies to disclose when an algorithm screens job applicants and to offer an appeals process.",
    byline: "Kwabena Mensah",
    date: "2026-08-25",
    readTime: "6 min read",
    image: "images/technology-01.jpeg",
    featured: true,
    tags: ["policy", "ai", "labor"],
    body: [
      "A proposed rule released this week would require employers using automated tools to screen job applicants to disclose that fact upfront and give rejected candidates a way to request a human review of the decision.",
      "The draft, now open for a sixty-day public comment period, follows years of complaints from job seekers who say they were filtered out of hiring pipelines without ever knowing software, rather than a person, made the initial call.",
      "Supporters of the measure argue that transparency requirements are the minimum needed to catch cases where a tool inadvertently screens out qualified candidates based on patterns in past hiring data.",
      "Industry groups have pushed back on parts of the proposal, particularly a requirement that vendors submit their screening models for independent bias testing, arguing it could expose proprietary methods to competitors.",
      "A coalition of labor advocates countered that testing requirements are standard practice in other regulated industries and should not be treated differently simply because the product is software.",
      "If adopted, the rule would apply to companies above a certain size threshold, with a phased compliance timeline stretching into next year.",
      "Public comments can be submitted through the regulator's website, and a public hearing is expected to be scheduled once the comment period closes."
    ]
  },
  {
    id: "t2",
    category: "technology",
    headline: "Startup's New Battery Chemistry Promises Faster Charging, Fewer Rare Metals",
    dek: "The company says its sodium-based cells reach 80 percent charge in under fifteen minutes, though independent testing is still pending.",
    byline: "Kwabena Mensah",
    date: "2026-08-22",
    readTime: "5 min read",
    image: "images/technology-02.jpeg",
    tags: ["energy", "startups"],
    body: [
      "A battery startup unveiled a new cell chemistry this week that it says can reach eighty percent charge in under fifteen minutes while relying far less on the rare earth metals typically used in high-performance batteries.",
      "The company's founders, who previously worked in materials science research before spinning the project out into a standalone venture, say the sodium-based design trades a small amount of energy density for lower material costs and reduced fire risk.",
      "Analysts who cover the battery sector cautioned that many promising lab results fail to hold up at manufacturing scale, and noted that the company has not yet published results from independent third-party testing.",
      "Still, the announcement drew interest from several vehicle and grid-storage manufacturers, two of whom have signed early evaluation agreements to test prototype cells later this year.",
      "The startup says it plans to open a small pilot production line within the next eighteen months if evaluation results hold up."
    ]
  },
  {
    id: "t3",
    category: "technology",
    headline: "Universities Roll Out Shared Guidelines for AI Use in Coursework",
    dek: "A consortium of institutions released a common framework meant to reduce confusion over what counts as acceptable AI assistance.",
    byline: "Nana Adjei",
    date: "2026-08-19",
    readTime: "4 min read",
    image: "images/technology-03.jpeg",
    tags: ["education", "ai"],
    body: [
      "A group of universities announced a shared set of guidelines this week aimed at giving students and instructors a common language for describing acceptable use of AI writing and coding tools in coursework.",
      "The framework sorts assignments into tiers, from work that must be produced entirely without AI assistance to work where AI tools are treated like any other reference material, with instructors expected to specify which tier applies to each assignment.",
      "Faculty involved in drafting the guidelines said the goal was less about restricting tool use and more about closing gaps between departments that had developed wildly different, and sometimes contradictory, policies.",
      "Student groups involved in the consultation process said clearer labeling should reduce the number of honesty-code disputes that come down to differing assumptions about what was allowed.",
      "Participating institutions plan to review how the framework is working after one full academic term."
    ]
  },

  {
    id: "b1",
    category: "business",
    headline: "Central Bank Holds Rates Steady, Signals Caution on Next Move",
    dek: "Policymakers cited mixed signals in employment data as reason to wait before adjusting borrowing costs again.",
    byline: "Efua Boateng",
    date: "2026-08-23",
    readTime: "4 min read",
    image: "images/business-01.jpeg",
    featured: true,
    tags: ["markets", "policy"],
    body: [
      "The central bank left its benchmark interest rate unchanged on Wednesday, extending a pause that has now lasted three consecutive meetings, as policymakers pointed to conflicting signals in recent employment and inflation data.",
      "In prepared remarks, the bank's governor said the committee wants to see a clearer trend before committing to another move in either direction, language that analysts read as leaving the door open to a cut later in the year if hiring continues to slow.",
      "Markets showed a muted reaction to the decision, which had been widely anticipated, though bond yields ticked slightly lower following the press conference.",
      "Small business groups had lobbied for a rate cut ahead of the meeting, arguing that borrowing costs remain a drag on expansion plans, while some economists warned that cutting too early could reignite price pressures in a handful of sectors.",
      "The bank's next policy meeting is scheduled for early next quarter, and officials said updated economic projections would be released alongside that decision."
    ]
  },
  {
    id: "b2",
    category: "business",
    headline: "Regional Grocery Chain Expands Into Delivery With Local Courier Network",
    dek: "Rather than build its own fleet, the retailer is partnering with independent couriers already active in its home market.",
    byline: "Efua Boateng",
    date: "2026-08-18",
    readTime: "3 min read",
    image: "images/business-02.jpeg",
    tags: ["retail", "logistics"],
    body: [
      "A regional grocery chain announced this week that it will offer same-day delivery across its store network by partnering with a cooperative of independent couriers rather than building an in-house fleet from scratch.",
      "Executives said the approach lets the company launch delivery service within weeks instead of the year or more it might have taken to hire drivers and acquire vehicles directly.",
      "The courier cooperative, which already serves several restaurants and pharmacies in the same market, will earn a per-delivery fee alongside a share of any subscription revenue the grocery chain generates from the service.",
      "Analysts noted the partnership model carries less upfront cost but may be harder to scale if demand grows faster than the courier network's capacity."
    ]
  },

  {
    id: "s1",
    category: "sports",
    headline: "Underdog Club Reaches First Continental Final in Club History",
    dek: "A last-minute penalty sealed a semifinal upset that has the whole city talking.",
    byline: "Yaw Darko",
    date: "2026-08-26",
    readTime: "3 min read",
    image: "images/sports-01.jpeg",
    featured: true,
    tags: ["football", "cup run"],
    body: [
      "A stoppage-time penalty sent the home crowd into delirium on Sunday night as the club secured a 2-1 semifinal win, sealing its first appearance in a continental final in the organization's history.",
      "The winning goal came after a video review overturned an initial no-call, awarding the penalty in the fourth minute of stoppage time following a challenge in the box.",
      "The club's manager, appointed less than two years ago after the team narrowly avoided relegation, credited a defense-first system built around a young back line for the run to the final.",
      "Ticket sales for the final opened within hours of the final whistle and reportedly sold out inside a single afternoon.",
      "The final is scheduled for next month at a neutral venue, with the opponent to be decided by the tournament's other semifinal later this week."
    ]
  },
  {
    id: "s2",
    category: "sports",
    headline: "Marathon Organizers Add Wheelchair Division Prize Purse for First Time",
    dek: "The move brings the race's prize structure in line with several larger marathons that made similar changes in recent years.",
    byline: "Yaw Darko",
    date: "2026-08-20",
    readTime: "3 min read",
    image: "images/sports-02.jpeg",
    tags: ["athletics", "para sport"],
    body: [
      "Organizers of this year's city marathon announced a dedicated prize purse for the wheelchair division, matching a shift several larger marathons made in prior seasons after sustained pressure from para-athletes and advocacy groups.",
      "Under the new structure, top finishers in the wheelchair division will receive prize money on par with the open division for the first time in the race's twenty-two-year history.",
      "Athletes who have competed in the event for years called the change overdue but welcome, noting that inconsistent prize structures across races have made it difficult to plan a competitive season.",
      "Race organizers said the additional prize funding was made possible by a new sponsorship agreement announced earlier this summer."
    ]
  },
  {
    id: "s3",
    category: "sports",
    headline: "Youth League Pilots Shortened Match Format to Ease Player Workload",
    dek: "Coaches say the trial, running through the fall season, aims to cut down on overuse injuries among younger athletes.",
    byline: "Yaw Darko",
    date: "2026-08-15",
    readTime: "3 min read",
    image: "images/sports-03.jpeg",
    tags: ["youth sports", "player welfare"],
    body: [
      "A regional youth league began trialing a shortened match format this month, cutting standard playing time by roughly fifteen percent in an effort to reduce overuse injuries linked to increasingly packed competition calendars.",
      "The pilot, which will run through the end of the fall season, also introduces mandatory rest periods between tournament matches for the youngest age brackets.",
      "League officials said the changes were prompted by a review of injury reports submitted by club physiotherapists over the past two seasons.",
      "Some coaches have raised concerns that shorter matches could affect player development, while others say the tradeoff is worth it if it keeps young athletes healthier over the long run."
    ]
  },

  {
    id: "e1",
    category: "entertainment",
    headline: "Independent Film Studio Announces Slate of Five Features for Next Year",
    dek: "The lineup leans heavily on first-time directors, a departure from the studio's earlier strategy of established names.",
    byline: "Abena Frimpong",
    date: "2026-08-24",
    readTime: "4 min read",
    image: "images/entertainment-01.jpeg",
    featured: true,
    tags: ["film", "studios"],
    body: [
      "An independent film studio revealed its production slate for next year on Tuesday, announcing five features that will mark directorial debuts for four of the five filmmakers attached.",
      "Studio executives described the lineup as a deliberate shift away from the strategy of recent years, which leaned on established directors to anchor the release calendar.",
      "\"We wanted to bet on new voices instead of chasing a familiar name for the poster,\" one executive said during the announcement, adding that all five projects had been in development for over a year.",
      "The slate spans several genres, including a drama set during a dockworkers' strike, a road-trip comedy, and a slow-burn thriller shot largely on location.",
      "Casting announcements for the first two productions are expected within the next two months, with filming slated to begin in early next year."
    ]
  },
  {
    id: "e2",
    category: "entertainment",
    headline: "Streaming Service Brings Back Weekly Episode Drops for New Drama Series",
    dek: "After years of all-at-once releases, the platform says weekly drops help sustain conversation around a show for longer.",
    byline: "Abena Frimpong",
    date: "2026-08-16",
    readTime: "3 min read",
    image: "images/entertainment-02.jpeg",
    tags: ["streaming", "tv"],
    body: [
      "A major streaming platform confirmed that its upcoming original drama will release new episodes weekly rather than all at once, reversing a release strategy the service had used almost exclusively since launch.",
      "Executives pointed to internal data suggesting shows released weekly tend to hold viewer attention, and generate more sustained social media discussion, than titles released in a single batch.",
      "The change follows similar moves by competing platforms over the past two years, several of which cited comparable engagement patterns.",
      "Not all upcoming titles will follow the new schedule; the company said release strategy will continue to be decided on a show-by-show basis depending on format and audience."
    ]
  }
];

function getArticleById(id){
  return ARTICLES.find(a => a.id === id);
}
function getArticlesByCategory(cat){
  return ARTICLES.filter(a => a.category === cat).sort((a,b)=> new Date(b.date)-new Date(a.date));
}
function getFeatured(){
  return ARTICLES.filter(a => a.featured);
}
function getLatest(n){
  return [...ARTICLES].sort((a,b)=> new Date(b.date)-new Date(a.date)).slice(0, n);
}
function getRelated(article, n){
  return ARTICLES
    .filter(a => a.id !== article.id && a.category === article.category)
    .sort((a,b)=> new Date(b.date)-new Date(a.date))
    .slice(0, n);
}
function formatDate(iso){
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString('en-US', { year:'numeric', month:'short', day:'numeric' });
}
