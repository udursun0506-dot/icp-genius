// ICP Generator Logic - This would typically call an AI service
// For demo purposes, this generates a realistic ICP based on common B2B patterns

export const generateICP = (productDescription: string) => {
  // In a real implementation, this would send the description to an AI service
  // For now, we'll generate a realistic ICP based on the input
  
  const isB2BSaaS = productDescription.toLowerCase().includes('saas') || 
                    productDescription.toLowerCase().includes('b2b') ||
                    productDescription.toLowerCase().includes('software');
  
  const isLinkedInTool = productDescription.toLowerCase().includes('linkedin') ||
                        productDescription.toLowerCase().includes('outreach') ||
                        productDescription.toLowerCase().includes('prospecting');
  
  const isAITool = productDescription.toLowerCase().includes('ai') ||
                   productDescription.toLowerCase().includes('artificial intelligence') ||
                   productDescription.toLowerCase().includes('machine learning');

  if (isLinkedInTool) {
    return {
      "personas": [
        {
          "title": "Startup Founder / CEO",
          "job_titles": ["Founder", "Co-Founder", "CEO", "Chief Executive Officer"],
          "company_stage": "Pre-seed to Series A",
          "industry": ["SaaS", "Tech", "B2B Software", "Fintech"],
          "team_size": "1-50",
          "region": ["US", "UK", "Western Europe", "Canada"],
          "pain_points": [
            "Struggling with lead generation and pipeline building",
            "Wants to scale outbound but lacks experienced SDR team",
            "Wasting time on manual cold outreach with low response rates",
            "Need to prove ROI on sales activities to investors"
          ],
          "growth_signals": [
            "Recently raised funding or participating in accelerator programs",
            "Hiring sales development representatives or account executives",
            "Actively using LinkedIn Sales Navigator or similar tools",
            "Posting about sales challenges or hiring on social media"
          ]
        },
        {
          "title": "Head of Sales / Sales Manager",
          "job_titles": ["Head of Sales", "VP Sales", "Sales Director", "Sales Development Manager"],
          "company_stage": "Series A to Series B",
          "industry": ["SaaS", "B2B Software", "Professional Services"],
          "team_size": "25-200",
          "region": ["US", "UK", "Western Europe", "Australia"],
          "pain_points": [
            "Sales team underperforming on outbound prospecting metrics",
            "Need better lead-to-meeting conversion rates",
            "Looking to automate and scale initial outreach processes",
            "Pressure to increase pipeline velocity and deal size"
          ],
          "growth_signals": [
            "Recent expansion of sales team or new sales hiring",
            "Investment in new sales tools or technology stack",
            "Attending sales conferences or posting about sales enablement",
            "Company showing signs of rapid growth or recent funding"
          ]
        }
      ],
      "filter_logic": {
        "job_title_contains": ["founder", "ceo", "head of sales", "vp sales", "sales director", "sales development"],
        "company_size_range": "1-200",
        "industry_keywords": ["SaaS", "B2B software", "Software", "Technology", "AI tools"],
        "geography": ["United States", "United Kingdom", "Germany", "France", "Netherlands", "Canada", "Australia"],
        "company_growth_stage": ["Seed", "Series A", "Series B", "Early Stage"]
      },
      "sample_keywords": ["linkedin outreach", "cold email", "sales prospecting", "AI sales assistant", "lead generation", "sales automation"],
      "intent_signals": [
        "Using tools like Outreach.io, SalesLoft, or Apollo.io",
        "Recently posted job openings for SDRs or sales roles",
        "Subscribes to sales-focused content or newsletters",
        "Engages with sales methodology content on LinkedIn",
        "Company has recent funding announcements or growth milestones"
      ]
    };
  }

  if (isB2BSaaS) {
    return {
      "personas": [
        {
          "title": "SaaS Founder / Product Leader",
          "job_titles": ["Founder", "CEO", "Product Manager", "Head of Product"],
          "company_stage": "Seed to Series B",
          "industry": ["SaaS", "Software", "B2B Technology"],
          "team_size": "5-100",
          "region": ["US", "Europe", "Canada"],
          "pain_points": [
            "Need to accelerate product-market fit validation",
            "Struggling with user acquisition and retention",
            "Looking for ways to improve product adoption metrics",
            "Need better customer feedback and insights"
          ],
          "growth_signals": [
            "Recently launched product or major feature updates",
            "Actively hiring product or engineering teams",
            "Participating in product management communities",
            "Seeking customer development and user research tools"
          ]
        },
        {
          "title": "Marketing Director / Growth Lead",
          "job_titles": ["Marketing Director", "Head of Growth", "VP Marketing", "Growth Manager"],
          "company_stage": "Series A to Series C",
          "industry": ["SaaS", "Technology", "Digital Services"],
          "team_size": "20-500",
          "region": ["US", "UK", "EU", "Australia"],
          "pain_points": [
            "Need to scale marketing efforts and improve CAC/LTV",
            "Looking for better attribution and analytics tools",
            "Struggling with multi-channel campaign management",
            "Need to prove marketing ROI to executive team"
          ],
          "growth_signals": [
            "Increasing marketing budget or team expansion",
            "Testing new marketing channels and strategies",
            "Attending growth and marketing conferences",
            "Recently implemented new marketing tech stack"
          ]
        }
      ],
      "filter_logic": {
        "job_title_contains": ["founder", "ceo", "product manager", "marketing director", "head of growth"],
        "company_size_range": "5-500",
        "industry_keywords": ["SaaS", "Software", "B2B", "Technology", "Digital"],
        "geography": ["United States", "United Kingdom", "Germany", "Canada", "Australia", "France"],
        "company_type": ["Private", "Startup", "Scale-up"]
      },
      "sample_keywords": ["B2B SaaS", "product analytics", "growth hacking", "customer success", "SaaS metrics"],
      "intent_signals": [
        "Using analytics tools like Mixpanel, Amplitude, or Google Analytics",
        "Active in product management or growth communities",
        "Recently published content about product development",
        "Company showing rapid user growth or feature releases",
        "Attending SaaS or product conferences"
      ]
    };
  }

  // Default generic B2B ICP
  return {
    "personas": [
      {
        "title": "Business Decision Maker",
        "job_titles": ["CEO", "Founder", "Director", "VP", "Manager"],
        "company_stage": "Growth stage",
        "industry": ["Technology", "Professional Services", "B2B"],
        "team_size": "10-200",
        "region": ["US", "Europe"],
        "pain_points": [
          "Need to improve operational efficiency",
          "Looking for scalable business solutions",
          "Seeking competitive advantages in the market",
          "Want to reduce costs while maintaining quality"
        ],
        "growth_signals": [
          "Recent funding or business expansion",
          "New leadership appointments",
          "Investment in new technology or tools",
          "Active hiring and team growth"
        ]
      }
    ],
    "filter_logic": {
      "job_title_contains": ["ceo", "founder", "director", "vp", "manager", "head of"],
      "company_size_range": "10-200",
      "industry_keywords": ["Technology", "Software", "Professional Services", "B2B"],
      "geography": ["United States", "United Kingdom", "Germany", "Canada"],
      "company_growth_indicators": ["Funding", "Hiring", "Expansion"]
    },
    "sample_keywords": ["business solution", "enterprise software", "automation", "efficiency"],
    "intent_signals": [
      "Recently posted about business challenges",
      "Active in industry-specific communities",
      "Company showing signs of growth or change",
      "Investment in new business tools or processes"
    ]
  };
};