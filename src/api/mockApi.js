// src/api/mockApi.js 

export const fetchIPOs = async () => {
   return [
  {
  "id": 1,
  "name": "Neptune Logitek",
  "fullName": "Neptune Logitek Limited",
  "logo": "/images/ipo/neptune-logitek.png",
  "open": "15 Dec 2025",
  "close": "17 Dec 2025",
  "listing": "22 Dec 2025",
  "price": "126",
  "lot": 1000,

  "about_company": {
    "company_name": "Neptune Logitek Limited",
    "industry_sector": "Logistics & Transportation",
    "founded_year": "2012",
    "promoters": ["Ankit Devidas Shah", "Reema Ankit Shah"],
    "description": "Neptune Logitek Limited is an integrated logistics company providing transportation and supply chain services across India. The company offers services such as freight forwarding, customs clearance, air freight transportation, and multimodal logistics solutions. It operates its own fleet supported by technology driven systems like GPS fleet tracking and automated engine monitoring to improve operational efficiency."
  },

  "ipo_basic_details": {
    "company_name": "Neptune Logitek Limited",
    "ipo_type": "SME IPO",
    "issue_type": "Fixed Price Issue",
    "face_value": "₹10 per share",
    "price_band_min": "₹126",
    "price_band_max": "₹126",
    "lot_size": 1000,
    "total_issue_size": "₹46.62 Cr",
    "fresh_issue_size": "37,00,000 shares",
    "offer_for_sale": "N/A",
    "shares_offered": "37,00,000 shares",
    "listing_exchange": "BSE SME",
    "issue_price": "₹126",
    "minimum_investment": "₹2,52,000",
    "market_cap_post_issue": "₹172.62 Cr",
    "pre_issue_shareholding": "99.99%",
    "post_issue_shareholding": "72.99%"
  },

  "company_overview": {
    "business_model": "Neptune Logitek operates as an integrated logistics provider offering transportation, freight forwarding, customs clearance, and multimodal logistics services across India. The company utilizes a fleet-based logistics model supported by GPS-enabled fleet management and real-time vehicle tracking.",
    "products_services": [
      "Freight Forwarding Services",
      "Customs Clearance",
      "Air Freight Transportation",
      "Multimodal Coastal Logistics",
      "Road and Rail Transport",
      "Supply Chain Solutions"
    ],
    "competitive_strengths": [
      "Integrated logistics service portfolio",
      "Technology-enabled fleet tracking",
      "Nationwide branch network",
      "Dedicated fleet and operational infrastructure"
    ],
    "risks": [
      "Highly competitive logistics industry",
      "High debt-to-equity ratio",
      "Dependence on transportation demand",
      "Operational risks related to fleet maintenance"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "15 Dec 2025",
    "ipo_close_date": "17 Dec 2025",
    "basis_of_allotment_date": "18 Dec 2025",
    "refund_initiation_date": "19 Dec 2025",
    "demat_credit_date": "19 Dec 2025",
    "listing_date": "22 Dec 2025",
    "upi_mandate_deadline": "17 Dec 2025"
  },

  "ipo_objectives": {
    "capital_expenditure": "Purchase of trucks and ancillary equipment",
    "debt_repayment": "Repayment of existing borrowings",
    "general_corporate_purposes": "General corporate purposes"
  },

  "investor_reservation": {
    "qib_quota": "0%",
    "retail_quota": "47.50%",
    "hni_quota": "47.50%",
    "market_maker_quota": "5%"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "2 lots",
      "shares": "2000",
      "amount": "₹2,52,000"
    },
    "retail_maximum": {
      "lot_size": "2 lots",
      "shares": "2000",
      "amount": "₹2,52,000"
    },
    "shni_minimum": {
      "lot_size": "3 lots",
      "shares": "3000",
      "amount": "₹3,78,000"
    }
  },

  "key_performance_indicators": {
    "roe": "14.89%",
    "roce": "21.25%",
    "ronw": "45.89%",
    "pat_margin": "3.56%",
    "ebitda_margin": "8.31%",
    "eps": "₹9.16",
    "debt_to_equity": "2.91",
    "pe_ratio": "17.9x",
    "price_to_book": "6.32"
  },

  "company_financial_data": [
    {
      "period": "31 Aug 2025",
      "assets": "₹122.94 Cr",
      "total_income": "₹105.52 Cr",
      "pat": "₹4.02 Cr",
      "ebitda": "₹9.26 Cr",
      "net_worth": "₹23.97 Cr",
      "total_borrowing": "₹56.40 Cr"
    },
    {
      "period": "31 Mar 2025",
      "assets": "₹119.25 Cr",
      "total_income": "₹260.74 Cr",
      "pat": "₹9.16 Cr",
      "ebitda": "₹21.38 Cr",
      "net_worth": "₹19.95 Cr",
      "total_borrowing": "₹58.00 Cr"
    },
    {
      "period": "31 Mar 2024",
      "assets": "₹95.24 Cr",
      "total_income": "₹175.76 Cr",
      "pat": "₹0.00 Cr",
      "ebitda": "₹9.74 Cr",
      "net_worth": "₹10.79 Cr",
      "total_borrowing": "₹62.48 Cr"
    },
    {
      "period": "31 Mar 2023",
      "assets": "₹74.51 Cr",
      "total_income": "₹187.71 Cr",
      "pat": "-₹0.18 Cr",
      "ebitda": "₹5.55 Cr",
      "net_worth": "₹10.79 Cr",
      "total_borrowing": "₹38.20 Cr"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "₹0",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "Dec 2025",
    "estimated_listing_price": "₹100.80"
  },

  "ipo_subscription_data": {
    "qib_ex_anchor": "N/A",
    "hni_subscription": "0.32x",
    "retail_subscription": "2.90x",
    "total_subscription": "1.57x"
  },

  "ipo_intermediaries": {
    "registrar": "Bigshare Services Pvt Ltd",
    "registrar_website": "https://www.bigshareonline.com",
    "market_maker": "Asnani Stock Broker Pvt Ltd",
    "company_secretary": "N/A",
    "compliance_officer": "N/A"
  },

  "ipo_lead_manager": {
    "lead_manager": "Galactico Corporate Services Ltd"
  },

  "company_information": {
    "company_address": "Office No S6-2, Pinnacle Business Park, Mahakali Caves Road, Mumbai, India",
    "company_website": "https://www.neptunelogitek.com",
    "company_email": "cs@neptunelogitek.com",
    "company_phone": "+91-22-62638200"
  },

  "ipo_documents": {
    "drhp_link": "https://www.bsesme.com/download/376502/SME_IPO%20InPrinciple/NeptuneLogitekLimitedDraftProspectus_20250528063714.pdf",
    "rhp_link": "https://www.bseindia.com",
    "prospectus_pdf": "https://www.bsesme.com/download/376502/SME_IPO%20InPrinciple/NeptuneLogitekLimitedDraftProspectus_20250528063714.pdf",
    "investor_presentation": "https://www.neptunelogitek.com"
  },

  "faq": [
    {
      "question": "What does Neptune Logitek Limited do?",
      "answer": "Neptune Logitek Limited provides logistics, freight forwarding, customs clearance, and multimodal transportation services across India."
    },
    {
      "question": "When did the Neptune Logitek IPO open and close?",
      "answer": "The IPO opened on 15 December 2025 and closed on 17 December 2025."
    },
    {
      "question": "What was the issue price of the Neptune Logitek IPO?",
      "answer": "The IPO was offered at a fixed price of ₹126 per share."
    },
    {
      "question": "What was the lot size of the Neptune Logitek IPO?",
      "answer": "The lot size for the IPO was 1,000 shares."
    },
    {
      "question": "Where are Neptune Logitek shares listed?",
      "answer": "The shares are listed on the BSE SME platform."
    },
    {
      "question": "What was the IPO issue size?",
      "answer": "The total IPO issue size was ₹46.62 crore."
    }
  ]
},
   {
  "id": 2,
  "name": "AceVector",
    "fullName": "Acevector Ltd.",
  "logo": "/images/ipo/acevector.png",
  "minInvestment": "TBA",
  "open": "TBA",
  "close": "TBA",
  "listing": "TBA",
  "price": "TBA",
  "lot": "TBA",

  "about_company": {
    "company_name": "Acevector Ltd.",
    "industry_sector": "Digital Commerce & E-commerce Enablement",
    "founded_year": "2007",
    "promoters": ["Kunal Bahl", "Rohit Kumar Bansal", "Starfish I Pte. Ltd."],
    "description": "Acevector Ltd. runs an asset-light digital commerce platform that serves value-conscious consumers across India through its subsidiaries. It owns Snapdeal, a marketplace focused on affordable products in Tier-2 and smaller cities reaching over 18,000 pin codes with consistently high customer ratings. It also operates Unicommerce (SaaS tools for warehousing, shipping, and order management) and Stellaro Brands (its own consumer product lines sold across multiple channels)."
  },

  "ipo_basic_details": {
    "company_name": "Acevector Ltd.",
    "ipo_type": "Mainboard IPO",
    "issue_type": "Bookbuilding IPO (Fresh Issue + OFS)",
    "face_value": "₹1 per share",
    "price_band_min": "TBA",
    "price_band_max": "TBA",
    "lot_size": "TBA",
    "total_issue_size": "₹300 Cr (Fresh) + OFS up to 6.39 Cr shares",
    "fresh_issue_size": "₹300 Cr",
    "offer_for_sale": "Up to 6.39 Cr equity shares",
    "shares_offered": "TBA",
    "listing_exchange": "BSE & NSE",
    "issue_price": "TBA",
    "minimum_investment": "TBA",
    "market_cap_post_issue": "TBA",
    "pre_issue_shareholding": "65.31% (Promoters)",
    "post_issue_shareholding": "TBA"
  },

  "company_overview": {
    "business_model": "Asset-light digital commerce ecosystem combining marketplace, SaaS enablement tools, and owned consumer brands, primarily targeting middle-income buyers in smaller cities.",
    "products_services": [
      "Snapdeal marketplace",
      "Unicommerce SaaS (Uniware, Convertway, Shipway)",
      "Stellaro own brands"
    ],
    "competitive_strengths": [
      "Strong presence in Tier-2+ cities",
      "High product ratings and trust",
      "Integrated tech platform for sellers"
    ],
    "risks": [
      "Continued losses in recent years",
      "Intense competition in e-commerce",
      "Dependence on subsidiary performance"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "TBA",
    "ipo_close_date": "TBA",
    "basis_of_allotment_date": "TBA",
    "refund_initiation_date": "TBA",
    "demat_credit_date": "TBA",
    "listing_date": "TBA",
    "upi_mandate_deadline": "TBA"
  },

  "ipo_objectives": {
    "capital_expenditure": "Growth and technology initiatives",
    "debt_repayment": "N/A",
    "general_corporate_purposes": "Working capital and ecosystem expansion"
  },

  "investor_reservation": {
    "qib_quota": "Not less than 75%",
    "retail_quota": "Not more than 10%",
    "hni_quota": "Not more than 15%",
    "market_maker_quota": "N/A"
  },

  "market_lot_details": {
    "retail_minimum": { "lot_size": "TBA", "shares": "TBA", "amount": "TBA" },
    "retail_maximum": { "lot_size": "TBA", "shares": "TBA", "amount": "TBA" },
    "shni_minimum": { "lot_size": "TBA", "shares": "TBA", "amount": "TBA" }
  },

  "key_performance_indicators": {
    "roe": "N/A",
    "roce": "N/A",
    "ronw": "-100.25%",
    "pat_margin": "Negative",
    "ebitda_margin": "Negative",
    "eps": "Negative",
    "debt_to_equity": "Very low",
    "pe_ratio": "N/A",
    "price_to_book": "N/A"
  },

  "company_financial_data": [
    {
      "period": "30 Sep 2025",
      "assets": "₹555.84 Cr",
      "total_income": "₹251.91 Cr",
      "pat": "-₹22.46 Cr",
      "ebitda": "-₹9.28 Cr",
      "net_worth": "₹142.09 Cr",
      "total_borrowing": "Minimal"
    },
    {
      "period": "31 Mar 2025",
      "assets": "₹553.97 Cr",
      "total_income": "₹406.77 Cr",
      "pat": "-₹125.94 Cr",
      "ebitda": "-₹39.16 Cr",
      "net_worth": "₹138.56 Cr",
      "total_borrowing": "₹0.45 Cr"
    },
    {
      "period": "31 Mar 2024",
      "assets": "₹410.50 Cr",
      "total_income": "₹384.74 Cr",
      "pat": "-₹51.30 Cr",
      "ebitda": "-₹26.52 Cr",
      "net_worth": "₹129.16 Cr",
      "total_borrowing": "N/A"
    },
    {
      "period": "31 Mar 2023",
      "assets": "₹378.37 Cr",
      "total_income": "₹388.13 Cr",
      "pat": "-₹267.53 Cr",
      "ebitda": "-₹166.72 Cr",
      "net_worth": "₹22.83 Cr",
      "total_borrowing": "N/A"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "N/A",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "N/A",
    "estimated_listing_price": "N/A"
  },

  "ipo_subscription_data": {
    "qib_ex_anchor": "N/A",
    "hni_subscription": "N/A",
    "retail_subscription": "N/A",
    "total_subscription": "N/A"
  },

  "ipo_intermediaries": {
    "registrar": "MUFG Intime India Pvt. Ltd.",
    "registrar_website": "https://in.mpms.mufg.com",
    "market_maker": "N/A",
    "company_secretary": "N/A",
    "compliance_officer": "N/A"
  },

  "ipo_lead_manager": {
    "lead_manager": "IIFL Capital Services Ltd"
  },

  "company_information": {
    "company_address": "Mezzanine Floor, A-83, Okhla Industrial Area, Phase II, New Delhi - 110020",
    "company_website": "https://www.acevector.com/",
    "company_email": "contact@acevector.com",
    "company_phone": "N/A"
  },

  "ipo_documents": {
    "drhp_link": "https://www.sebi.gov.in/filings/public-issues/dec-2025/acevector-limited-udrhp_98252.html",
    "rhp_link": "N/A",
    "prospectus_pdf": "N/A",
    "investor_presentation": "N/A"
  },

  "faq": [
    {
      "question": "What does Acevector Ltd. do?",
      "answer": "It operates Snapdeal marketplace, Unicommerce SaaS tools, and Stellaro consumer brands targeting value buyers in smaller Indian cities."
    },
    {
      "question": "When will the Acevector IPO open?",
      "answer": "Dates are yet to be announced (SEBI approval received in November 2025)."
    }
  ]
},
    {
  "id": 3,
  "name": "Park Medi World",
  "fullName": "Park Medi World Limited",
  "logo": "/images/ipo/park-medi-world.png",
  "minInvestment": "₹14,904",
  "open": "10 Dec 2025",
  "close": "12 Dec 2025",
  "listing": "17 Dec 2025",
  "price": "154-162",
  "lot": 92,

  "about_company": {
    "company_name": "Park Medi World Limited",
    "industry_sector": "Healthcare - Multi-Super Specialty Hospitals",
    "founded_year": "2011",
    "promoters": ["Dr. Ajit Gupta", "Dr. Ankit Gupta"],
    "description": "Park Medi World Limited operates one of the leading private hospital networks in North India, managing 14 NABH-accredited multi-super specialty facilities with a total capacity exceeding 3,000 beds. It is the largest such chain in Haryana (1,600 beds) and provides affordable, high-quality care across more than 30 specialties, including critical care, oncology, neurology, orthopedics, and diagnostics. The network spans Haryana, Delhi, Punjab, and Rajasthan, emphasizing cluster-based growth and successful integration of acquired hospitals."
  },

  "ipo_basic_details": {
    "company_name": "Park Medi World Limited",
    "ipo_type": "Mainboard IPO",
    "issue_type": "Bookbuilding IPO",
    "face_value": "₹2 per share",
    "price_band_min": "₹154",
    "price_band_max": "₹162",
    "lot_size": 92,
    "total_issue_size": "₹920 Cr",
    "fresh_issue_size": "₹770 Cr (4.75 Cr shares)",
    "offer_for_sale": "₹150 Cr (0.93 Cr shares)",
    "shares_offered": "5,67,90,123 shares",
    "listing_exchange": "BSE, NSE",
    "issue_price": "₹162",
    "minimum_investment": "₹14,904 (1 lot)",
    "market_cap_post_issue": "₹6,997 Cr (approx. pre-IPO reference)",
    "pre_issue_shareholding": "95.55% (Promoters)",
    "post_issue_shareholding": "82.89% (Promoters)"
  },

  "company_overview": {
    "business_model": "Operates a network of owned multi-super specialty hospitals with a focus on affordable healthcare in underserved North Indian regions, using a cluster-based expansion model and strategic acquisitions to boost capacity and revenue.",
    "products_services": [
      "Multi-super specialty hospital services (30+ specialties)",
      "Critical care and ICU facilities",
      "Diagnostics, labs, and medical equipment support"
    ],
    "competitive_strengths": [
      "Leading position in Haryana with high bed capacity",
      "Strong EBITDA margins through owned assets and efficient operations",
      "Proven track record of turning around acquired hospitals"
    ],
    "risks": [
      "Challenges in integrating acquired facilities",
      "High reliance on government payers impacting average revenue per occupied bed",
      "Competition from larger national hospital chains"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "10 Dec 2025",
    "ipo_close_date": "12 Dec 2025",
    "basis_of_allotment_date": "15 Dec 2025",
    "refund_initiation_date": "16 Dec 2025",
    "demat_credit_date": "16 Dec 2025",
    "listing_date": "17 Dec 2025",
    "upi_mandate_deadline": "12 Dec 2025"
  },

  "ipo_objectives": {
    "capital_expenditure": "Funding expansion of hospitals and purchase of medical equipment",
    "debt_repayment": "Repayment or prepayment of existing borrowings",
    "general_corporate_purposes": "Inorganic growth opportunities and working capital needs"
  },

  "investor_reservation": {
    "qib_quota": "50% (including anchor portion)",
    "retail_quota": "35%",
    "hni_quota": "15%",
    "market_maker_quota": "N/A"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "1 lot",
      "shares": "92",
      "amount": "₹14,904"
    },
    "retail_maximum": {
      "lot_size": "13 lots",
      "shares": "1,196",
      "amount": "₹1,93,752"
    },
    "shni_minimum": {
      "lot_size": "14 lots",
      "shares": "1,288",
      "amount": "₹2,08,656"
    }
  },

  "key_performance_indicators": {
    "roe": "20.68%",
    "roce": "17.47%",
    "ronw": "20.08%",
    "pat_margin": "15.30%",
    "ebitda_margin": "26.71%",
    "eps": "₹5.55",
    "debt_to_equity": "0.61",
    "pe_ratio": "29.21x",
    "price_to_book": "6.09"
  },

  "company_financial_data": [
    {
      "period": "30 Sep 2025",
      "assets": "₹2,320.93 Cr",
      "total_income": "₹823.39 Cr",
      "pat": "₹139.14 Cr",
      "ebitda": "₹217.14 Cr",
      "net_worth": "₹1,153.05 Cr",
      "total_borrowing": "₹733.91 Cr"
    },
    {
      "period": "31 Mar 2025",
      "assets": "₹2,133.70 Cr",
      "total_income": "₹1,425.97 Cr",
      "pat": "₹213.22 Cr",
      "ebitda": "₹372.17 Cr",
      "net_worth": "₹1,021.86 Cr",
      "total_borrowing": "₹682.07 Cr"
    },
    {
      "period": "31 Mar 2024",
      "assets": "₹1,912.10 Cr",
      "total_income": "₹1,263.08 Cr",
      "pat": "₹152.01 Cr",
      "ebitda": "₹310.30 Cr",
      "net_worth": "₹815.98 Cr",
      "total_borrowing": "₹686.71 Cr"
    },
    {
      "period": "31 Mar 2023",
      "assets": "₹1,592.82 Cr",
      "total_income": "₹1,272.18 Cr",
      "pat": "₹228.19 Cr",
      "ebitda": "₹390.34 Cr",
      "net_worth": "₹667.55 Cr",
      "total_borrowing": "₹575.68 Cr"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "N/A",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "N/A",
    "estimated_listing_price": "Day-1 close around ₹148-156; Current trading ~₹198-200 (Mar 2026)"
  },

  "ipo_subscription_data": {
    "qib_ex_anchor": "12.07x",
    "hni_subscription": "15.93x",
    "retail_subscription": "3.32x",
    "total_subscription": "8.52x"
  },

  "ipo_intermediaries": {
    "registrar": "Kfin Technologies Ltd.",
    "registrar_website": "https://www.kfintech.com",
    "market_maker": "N/A",
    "company_secretary": "N/A",
    "compliance_officer": "N/A"
  },

  "ipo_lead_manager": {
    "lead_manager": "Nuvama Wealth Management Ltd."
  },

  "company_information": {
    "company_address": "12, Meera Enclave, Near Keshopur Bus Depot, Outer Ring Road, New Delhi - 110018",
    "company_website": "http://www.parkhospital.in/",
    "company_email": "company.secretary@parkhospital.in",
    "company_phone": "+91 124 696 000"
  },

  "ipo_documents": {
    "drhp_link": "https://www.sebi.gov.in/filings/public-issues/dec-2025/park-medi-world-limited_98190.html",
    "rhp_link": "https://www.sebi.gov.in/filings/public-issues/dec-2025/park-medi-world-limited_98190.html",
    "prospectus_pdf": "N/A",
    "investor_presentation": "N/A"
  },

  "faq": [
    {
      "question": "What is the core business of Park Medi World Limited?",
      "answer": "It manages a chain of multi-super specialty hospitals in North India, delivering affordable healthcare services across various medical fields with a strong presence in Haryana and nearby states."
    },
    {
      "question": "What were the subscription dates for the Park Medi World IPO?",
      "answer": "The IPO opened on December 10, 2025, and closed on December 12, 2025."
    },
    {
      "question": "What was the final issue price of the Park Medi World IPO?",
      "answer": "The shares were priced at ₹162 (upper end of the ₹154-162 band)."
    },
    {
      "question": "What was the minimum lot size for the Park Medi World IPO?",
      "answer": "92 shares, requiring a minimum investment of ₹14,904 at the upper price."
    },
    {
      "question": "On which exchanges are Park Medi World shares listed?",
      "answer": "The shares are listed on both BSE and NSE since December 17, 2025."
    },
    {
      "question": "What was the total size of the Park Medi World IPO?",
      "answer": "The IPO aimed to raise ₹920 crore through a mix of fresh issue and offer for sale."
    }
  ]
},
    {
  "id": 4,
  "name": "Nephrocare Health",
  "fullName": "Nephrocare Health Services Limited",
  "logo": "/images/ipo/nephrocare-health.png",
  "minInvestment": "₹14,720",
  "open": "10 Dec 2025",
  "close": "12 Dec 2025",
  "listing": "17 Dec 2025",
  "price": "438-460",
  "lot": 32,

  "about_company": {
    "company_name": "Nephrocare Health Services Limited",
    "industry_sector": "Healthcare - Dialysis & Kidney Care Services",
    "founded_year": "2010",
    "promoters": ["Vikram Vuppala and other key investors (private equity backed)"],
    "description": "Nephrocare Health Services Limited, operating under the NephroPlus brand, is India's largest and Asia's leading provider of comprehensive dialysis care. It manages an extensive network of over 500 clinics across India and select international markets, offering services from diagnosis and in-center hemodialysis to home-based and mobile dialysis options, along with wellness programs and in-house pharmacy support. The company focuses on tier-2 and tier-3 cities, serving a significant portion of India's dialysis patients with innovative, patient-centric models."
  },

  "ipo_basic_details": {
    "company_name": "Nephrocare Health Services Limited",
    "ipo_type": "Mainboard IPO",
    "issue_type": "Bookbuilding IPO",
    "face_value": "₹2 per share",
    "price_band_min": "₹438",
    "price_band_max": "₹460",
    "lot_size": 32,
    "total_issue_size": "₹871.05 Cr",
    "fresh_issue_size": "₹353.40 Cr (76,82,717 shares)",
    "offer_for_sale": "₹517.64 Cr (1,12,53,102 shares)",
    "shares_offered": "1,89,35,819 shares",
    "listing_exchange": "BSE, NSE",
    "issue_price": "₹460",
    "minimum_investment": "₹14,720 (1 lot)",
    "market_cap_post_issue": "₹4,615 Cr (pre-IPO reference)",
    "pre_issue_shareholding": "78.90% (Promoters & others)",
    "post_issue_shareholding": "71.49% (Promoters & others)"
  },

  "company_overview": {
    "business_model": "Asset-light, scalable network of dialysis clinics emphasizing organic growth, acquisitions, and expansion into underserved regions, with a strong focus on operational efficiency and patient accessibility in smaller cities.",
    "products_services": [
      "In-center hemodialysis",
      "Home and mobile dialysis",
      "Kidney wellness and preventive programs",
      "In-house pharmacy and support services"
    ],
    "competitive_strengths": [
      "Market leadership in India (largest by patients, clinics, and revenue)",
      "Broad geographic reach in tier-2/3 cities",
      "Innovative service models (holiday/mobile dialysis)",
      "Strong clinical expertise and private equity backing"
    ],
    "risks": [
      "High capital needs for clinic expansion",
      "Dependence on dialysis demand and reimbursement policies",
      "Competition from hospitals and regional players",
      "Potential impact of finance costs on profitability"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "10 Dec 2025",
    "ipo_close_date": "12 Dec 2025",
    "basis_of_allotment_date": "15 Dec 2025",
    "refund_initiation_date": "16 Dec 2025",
    "demat_credit_date": "16 Dec 2025",
    "listing_date": "17 Dec 2025",
    "upi_mandate_deadline": "12 Dec 2025"
  },

  "ipo_objectives": {
    "capital_expenditure": "Opening new dialysis clinics in India (₹129.11 Cr)",
    "debt_repayment": "Pre-payment/repayment of borrowings (₹136 Cr)",
    "general_corporate_purposes": "General corporate purposes (₹60.05 Cr)"
  },

  "investor_reservation": {
    "qib_quota": "~50% (incl. anchor portion)",
    "retail_quota": "~35%",
    "hni_quota": "~15%",
    "market_maker_quota": "N/A"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "1 lot",
      "shares": "32",
      "amount": "₹14,720"
    },
    "retail_maximum": {
      "lot_size": "13 lots",
      "shares": "416",
      "amount": "₹1,91,360"
    },
    "shni_minimum": {
      "lot_size": "14 lots",
      "shares": "448",
      "amount": "₹2,06,080"
    }
  },

  "key_performance_indicators": {
    "roe": "13.45%",
    "roce": "18.67%",
    "ronw": "13.19%",
    "pat_margin": "8.88%",
    "ebitda_margin": "22.05%",
    "eps": "₹7.24",
    "debt_to_equity": "Low (post-repayment focus)",
    "pe_ratio": "63.52x (pre-IPO)",
    "price_to_book": "7.72"
  },

  "company_financial_data": [
    {
      "period": "30 Sep 2025",
      "assets": "₹1,193.68 Cr",
      "total_income": "₹483.97 Cr",
      "pat": "₹14.23 Cr",
      "ebitda": "₹110.31 Cr",
      "net_worth": "₹716.06 Cr",
      "total_borrowing": "₹207.04 Cr"
    },
    {
      "period": "31 Mar 2025",
      "assets": "₹996.46 Cr",
      "total_income": "₹769.92 Cr",
      "pat": "₹67.10 Cr",
      "ebitda": "₹166.64 Cr",
      "net_worth": "₹594.21 Cr",
      "total_borrowing": "₹225.80 Cr"
    },
    {
      "period": "31 Mar 2024",
      "assets": "₹806.02 Cr",
      "total_income": "₹574.72 Cr",
      "pat": "₹35.13 Cr",
      "ebitda": "₹99.66 Cr",
      "net_worth": "₹423.55 Cr",
      "total_borrowing": "₹243.37 Cr"
    },
    {
      "period": "31 Mar 2023",
      "assets": "₹666.23 Cr",
      "total_income": "₹443.26 Cr",
      "pat": "-₹11.79 Cr",
      "ebitda": "₹48.60 Cr",
      "net_worth": "₹384.73 Cr",
      "total_borrowing": "₹196.21 Cr"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "N/A",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "N/A",
    "estimated_listing_price": "Listed at ~₹490 (6-7% premium on Dec 17, 2025); traded higher post-listing"
  },

  "ipo_subscription_data": {
    "qib_ex_anchor": "26.82x",
    "hni_subscription": "24.77x",
    "retail_subscription": "2.36x",
    "total_subscription": "14.08x"
  },

  "ipo_intermediaries": {
    "registrar": "Kfin Technologies Ltd.",
    "registrar_website": "https://www.kfintech.com",
    "market_maker": "N/A",
    "company_secretary": "N/A",
    "compliance_officer": "N/A"
  },

  "ipo_lead_manager": {
    "lead_manager": "ICICI Securities Ltd., Nomura Financial Advisory & Securities (India) Pvt. Ltd."
  },

  "company_information": {
    "company_address": "5th Floor, D Block, iLabs Centre, Madhapur, Hyderabad, Telangana - 500081",
    "company_website": "https://www.nephroplus.com/",
    "company_email": "cs@nephroplus.com",
    "company_phone": "+91 40 4240 8039"
  },

  "ipo_documents": {
    "drhp_link": "https://www.sebi.gov.in/filings/public-issues/aug-2025/nephrocare-health-services-limited_96127.html",
    "rhp_link": "https://www.sebi.gov.in/filings/public-issues/dec-2025/nephrocare-health-services-limited-rhp_98134.html",
    "prospectus_pdf": "https://www.sebi.gov.in/filings/public-issues/dec-2025/nephrocare-health-services-limited-prospectus_98358.html",
    "investor_presentation": "https://www.chittorgarh.net/reports/anchor-investor/nephrocare-health-services-anchor-investor.pdf"
  },

  "faq": [
    {
      "question": "What is the main business of Nephrocare Health Services Limited?",
      "answer": "It provides comprehensive dialysis and kidney care services through a large network of clinics, including hemodialysis, home dialysis, and wellness programs, primarily in India."
    },
    {
      "question": "When did the Nephrocare Health IPO open and close?",
      "answer": "The IPO opened on December 10, 2025, and closed on December 12, 2025."
    },
    {
      "question": "What was the issue price of the Nephrocare Health IPO?",
      "answer": "The final issue price was ₹460 per share (upper end of the ₹438-460 band)."
    },
    {
      "question": "What was the lot size for the Nephrocare Health IPO?",
      "answer": "32 shares, with a minimum investment of ₹14,720 at the issue price."
    },
    {
      "question": "Where are Nephrocare Health shares listed?",
      "answer": "Listed on BSE and NSE on December 17, 2025."
    },
    {
      "question": "What was the total size of the Nephrocare Health IPO?",
      "answer": "₹871.05 crore, comprising fresh issue and offer for sale."
    }
  ]
},
    {
  "id": 5,
  "name": "Ashwini Container Movers",
  "fullName": "Ashwini Container Movers Limited",
  "logo": "/images/ipo/ashwini-container-movers.png",
  "minInvestment": "₹2,84,000",
  "open": "12 Dec 2025",
  "close": "16 Dec 2025",
  "listing": "19 Dec 2025",
  "price": "135-142",
  "lot": 1000,

  "about_company": {
    "company_name": "Ashwini Container Movers Limited",
    "industry_sector": "Transportation & Logistics – Containerized Cargo",
    "founded_year": "2012",
    "promoters": ["Bhaskar Kisan Pawar", "Govind Janabhau Sable"],
    "description": "Ashwini Container Movers Limited is a Maharashtra-based logistics company providing surface transportation services for goods across India, with a primary focus on Maharashtra and Gujarat. It specializes in Full Container Load (FCL) shipments using reefer and dry containers, along with Less Container Load (LCL) and Over Dimension Cargo (ODC). The company operates its own fleet of more than 300 vehicles (20-ft and 40-ft containers) as of September 2025, serving B2B clients by moving bulk cargo between factories and ports. It employs advanced GPS tracking and proprietary software (Clay Soft and Elixia) for real-time monitoring and efficiency. The firm holds multiple certifications including ISO 9001/14001/45001, GDP compliance, CTPAT US, and FSSAI."
  },

  "ipo_basic_details": {
    "company_name": "Ashwini Container Movers Limited",
    "ipo_type": "SME IPO",
    "issue_type": "Bookbuilding IPO (Fresh Issue only)",
    "face_value": "₹10 per share",
    "price_band_min": "₹135",
    "price_band_max": "₹142",
    "lot_size": 1000,
    "total_issue_size": "₹71.00 Cr",
    "fresh_issue_size": "₹71.00 Cr (50,00,000 shares)",
    "offer_for_sale": "N/A",
    "shares_offered": "50,00,000 shares",
    "listing_exchange": "NSE SME",
    "issue_price": "₹142",
    "minimum_investment": "₹2,84,000 (2 lots / 2000 shares for retail)",
    "market_cap_post_issue": "₹213.00 Cr (pre-IPO reference)",
    "pre_issue_shareholding": "100% (Promoters)",
    "post_issue_shareholding": "N/A (diluted post-fresh issue)"
  },

  "company_overview": {
    "business_model": "Operates as a fleet-owner logistics provider focused on containerized cargo movement in western India, emphasizing B2B services with owned assets, technology-enabled tracking, and customized solutions for port-factory transport.",
    "products_services": [
      "Full Container Load (FCL) transportation",
      "Reefer and dry container services",
      "Less Container Load (LCL)",
      "Over Dimension Cargo (ODC) handling"
    ],
    "competitive_strengths": [
      "Large owned fleet (>300 vehicles) ensuring control and reliability",
      "Real-time tracking via GPS and custom software",
      "Strong compliance certifications (ISO, CTPAT, FSSAI)",
      "Experienced promoters with 50+ years in transport",
      "Client-centric approach with diverse B2B clientele"
    ],
    "risks": [
      "Highly competitive and fragmented logistics sector",
      "Dependence on regional demand (Maharashtra/Gujarat focus)",
      "Recent profit surge may not sustain long-term",
      "No dividend history; capital-intensive fleet maintenance"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "12 Dec 2025",
    "ipo_close_date": "16 Dec 2025",
    "basis_of_allotment_date": "17 Dec 2025",
    "refund_initiation_date": "18 Dec 2025",
    "demat_credit_date": "18 Dec 2025",
    "listing_date": "19 Dec 2025",
    "upi_mandate_deadline": "16 Dec 2025"
  },

  "ipo_objectives": {
    "capital_expenditure": "Purchase of trucks and vehicles (₹9.03 Cr)",
    "debt_repayment": "Repayment/pre-payment of borrowings (₹42.50 Cr)",
    "general_corporate_purposes": "Working capital and other needs (₹9.35 Cr)"
  },

  "investor_reservation": {
    "qib_quota": "N/A (SME format)",
    "retail_quota": "N/A (SME format)",
    "hni_quota": "N/A (SME format)",
    "market_maker_quota": "Reserved (Choice Equity Broking Pvt. Ltd.)"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "2 lots",
      "shares": "2000",
      "amount": "₹2,84,000"
    },
    "retail_maximum": {
      "lot_size": "N/A (SME limits apply)",
      "shares": "N/A",
      "amount": "N/A"
    },
    "shni_minimum": {
      "lot_size": "3 lots",
      "shares": "3000",
      "amount": "₹4,26,000"
    }
  },

  "key_performance_indicators": {
    "roe": "76.82%",
    "roce": "25.39%",
    "ronw": "76.82%",
    "pat_margin": "12.17%",
    "ebitda_margin": "26.44%",
    "eps": "N/A (based on post-issue)",
    "debt_to_equity": "N/A (high borrowing pre-IPO)",
    "pe_ratio": "18.61x (FY25 basis); 10.75x (annualized FY26)",
    "price_to_book": "6.95 (pre-IPO); 2.11 (post-IPO)"
  },

  "company_financial_data": [
    {
      "period": "30 Sep 2025",
      "assets": "₹121.21 Cr",
      "total_income": "₹55.86 Cr",
      "pat": "₹9.91 Cr",
      "ebitda": "₹19.01 Cr",
      "net_worth": "₹29.80 Cr",
      "total_borrowing": "₹74.90 Cr"
    },
    {
      "period": "31 Mar 2025",
      "assets": "₹101.46 Cr",
      "total_income": "₹96.06 Cr",
      "pat": "₹11.45 Cr",
      "ebitda": "₹24.89 Cr",
      "net_worth": "₹20.42 Cr",
      "total_borrowing": "₹62.57 Cr"
    },
    {
      "period": "31 Mar 2024",
      "assets": "₹78.31 Cr",
      "total_income": "₹79.27 Cr",
      "pat": "₹1.38 Cr",
      "ebitda": "₹13.64 Cr",
      "net_worth": "₹9.39 Cr",
      "total_borrowing": "₹58.70 Cr"
    },
    {
      "period": "31 Mar 2023",
      "assets": "₹66.11 Cr",
      "total_income": "₹77.16 Cr",
      "pat": "₹2.10 Cr",
      "ebitda": "₹12.17 Cr",
      "net_worth": "₹8.01 Cr",
      "total_borrowing": "₹47.38 Cr"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "N/A",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "N/A",
    "estimated_listing_price": "N/A (SME GMP not prominently tracked; listed Dec 19, 2025)"
  },

  "ipo_subscription_data": {
    "qib_ex_anchor": "1.31x",
    "hni_subscription": "3.50x (bNII 4.51x, sNII 1.48x)",
    "retail_subscription": "1.15x",
    "total_subscription": "1.70x"
  },

  "ipo_intermediaries": {
    "registrar": "Bigshare Services Pvt Ltd",
    "registrar_website": "https://www.bigshareonline.com",
    "market_maker": "Choice Equity Broking Pvt Ltd",
    "company_secretary": "N/A",
    "compliance_officer": "N/A"
  },

  "ipo_lead_manager": {
    "lead_manager": "Corporate Professionals Capital Pvt Ltd"
  },

  "company_information": {
    "company_address": "409, Skylark Premises Co-op Society Ltd., Sector 11, Plot No. 63, Thane, Maharashtra 400614",
    "company_website": "https://www.ashwinimovers.com/",
    "company_email": "compliance@ashwinimovers.com",
    "company_phone": "+91 22-27420030"
  },

  "ipo_documents": {
    "drhp_link": "https://nsearchives.nseindia.com/emerge/corporates/content/Registration_23012025003612_DRHP.pdf",
    "rhp_link": "https://nsearchives.nseindia.com/content/ipo/RHP_ASHWINI.zip",
    "prospectus_pdf": "https://nsearchives.nseindia.com/emerge/corporates/content/AshwiniContainerMoversLimited_PROSP.pdf",
    "investor_presentation": "https://nsearchives.nseindia.com/emerge/corporates/content/AshwiniContainerMoversLimited_PROSP.pdf"
  },

  "faq": [
    {
      "question": "What is the main business of Ashwini Container Movers Limited?",
      "answer": "It provides containerized cargo transportation services across India, focusing on FCL shipments with reefer/dry containers, LCL, and ODC, mainly serving B2B clients in Maharashtra and Gujarat using its owned fleet."
    },
    {
      "question": "What were the subscription dates for the Ashwini Container Movers IPO?",
      "answer": "The IPO opened on December 12, 2025, and closed on December 16, 2025."
    },
    {
      "question": "What was the issue price of the Ashwini Container Movers IPO?",
      "answer": "The price band was ₹135-142 per share, finalized at ₹142."
    },
    {
      "question": "What was the lot size of the Ashwini Container Movers IPO?",
      "answer": "1000 shares per lot, with retail minimum of 2 lots (2000 shares)."
    },
    {
      "question": "Where are Ashwini Container Movers shares listed?",
      "answer": "Listed on NSE SME Emerge platform since December 19, 2025."
    },
    {
      "question": "What was the total size of the Ashwini Container Movers IPO?",
      "answer": "₹71 crore, entirely through fresh issue of 50 lakh shares."
    }
  ]
},
   {
  "id": 6,
  "name": "Shipwaves Online",
  "fullName": "Shipwaves Online Solutions Limited",
  "logo": "/images/ipo/shipwaves-online.png",
  "minInvestment": "₹2,40,000",
  "open": "10 Dec 2025",
  "close": "12 Dec 2025",
  "listing": "17 Dec 2025",
  "price": "12",
  "lot": 10000,

  "about_company": {
    "company_name": "Shipwaves Online Solutions Limited",
    "industry_sector": "Logistics Technology & Digital Freight Forwarding",
    "founded_year": "2015",
    "promoters": [
      "Kalandan Mohammed Haris",
      "Kalandan Mohammed Althaf",
      "Kalandan Mohammad Arif",
      "Abid Ali",
      "Bibi Hajira",
      "Mohammed Sahim Haris"
    ],
    "description": "Shipwaves Online Solutions Limited is a Mangaluru-based logistics technology company providing end-to-end digital freight forwarding and supply chain solutions. The company operates a multimodal shipping platform covering ocean, air, and road transport while also offering enterprise SaaS tools for supply chain management. Its digital platform enables businesses to manage bookings, documentation, shipment tracking, and logistics analytics through a unified system designed to improve efficiency and transparency in global trade operations."
  },

  "ipo_basic_details": {
    "company_name": "Shipwaves Online Solutions Limited",
    "ipo_type": "SME IPO",
    "issue_type": "Fixed Price Issue (Fresh Issue)",
    "face_value": "₹1 per share",
    "price_band_min": "₹12",
    "price_band_max": "₹12",
    "lot_size": 10000,
    "total_issue_size": "₹56.35 Cr",
    "fresh_issue_size": "₹56.35 Cr (4,69,60,000 shares)",
    "offer_for_sale": "N/A",
    "shares_offered": "4,69,60,000 shares",
    "listing_exchange": "BSE SME",
    "issue_price": "₹12",
    "minimum_investment": "₹2,40,000 (1 lot / 20,000 shares for retail typical application)",
    "market_cap_post_issue": "Approx ₹169 Cr (estimated)",
    "pre_issue_shareholding": "99.96% (Promoters)",
    "post_issue_shareholding": "66.79% (Promoters post issue)"
  },

  "company_overview": {
    "business_model": "Operates a technology-driven logistics platform integrating freight forwarding with SaaS-based supply chain solutions. It enables enterprises to book shipments, track cargo, automate documentation, and optimize logistics operations digitally.",
    "products_services": [
      "Digital freight forwarding (ocean, air, road)",
      "Enterprise SaaS logistics management platform",
      "Shipment tracking and analytics",
      "Customs clearance support",
      "Trade finance and insurance services",
      "Warehousing and cargo relocation services"
    ],
    "competitive_strengths": [
      "Integrated logistics + SaaS technology platform",
      "Real-time shipment tracking and digital documentation",
      "Rapidly growing SaaS vertical with strong margins",
      "Asset-light scalable logistics model",
      "Growing demand for digital supply chain platforms"
    ],
    "risks": [
      "Highly competitive freight forwarding sector",
      "Dependence on global trade volumes and logistics demand",
      "SME IPO liquidity risk after listing",
      "Technology platform scalability and cybersecurity challenges"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "10 Dec 2025",
    "ipo_close_date": "12 Dec 2025",
    "basis_of_allotment_date": "15 Dec 2025",
    "refund_initiation_date": "16 Dec 2025",
    "demat_credit_date": "16 Dec 2025",
    "listing_date": "17 Dec 2025",
    "upi_mandate_deadline": "12 Dec 2025"
  },

  "ipo_objectives": {
    "working_capital": "₹17.13 Cr",
    "subsidiary_investment": "₹10 Cr",
    "debt_repayment": "₹15 Cr",
    "general_corporate_purposes": "Balance amount for operational expansion and corporate needs"
  },

  "investor_reservation": {
    "qib_quota": "Not Applicable (SME structure)",
    "retail_quota": "Approx 47.51%",
    "hni_quota": "Approx 47.49%",
    "market_maker_quota": "Approx 5%"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "1 lot",
      "shares": "10,000",
      "amount": "₹1,20,000"
    },
    "retail_typical_application": {
      "lot_size": "2 lots",
      "shares": "20,000",
      "amount": "₹2,40,000"
    },
    "shni_minimum": {
      "lot_size": "3 lots",
      "shares": "30,000",
      "amount": "₹3,60,000"
    }
  },

  "key_performance_indicators": {
    "roe": "Approx 35%",
    "roce": "Approx 28%",
    "ronw": "Approx 35%",
    "pat_margin": "Around 11%",
    "ebitda_margin": "17.5%",
    "eps": "₹0.86 (approx FY25)",
    "debt_to_equity": "Moderate leverage",
    "pe_ratio": "Approx 14x (FY25 basis)",
    "price_to_book": "Approx 3x"
  },

  "company_financial_data": [
    {
      "period": "30 Sep 2025",
      "assets": "₹79.60 Cr",
      "total_income": "₹40.98 Cr",
      "pat": "₹4.45 Cr",
      "ebitda": "₹7.20 Cr",
      "net_worth": "₹30.76 Cr",
      "total_borrowing": "₹20.50 Cr"
    },
    {
      "period": "31 Mar 2025",
      "assets": "₹70.50 Cr",
      "total_income": "₹108.28 Cr",
      "pat": "₹12.20 Cr",
      "ebitda": "₹18.95 Cr",
      "net_worth": "₹30.76 Cr",
      "total_borrowing": "₹22.10 Cr"
    },
    {
      "period": "31 Mar 2024",
      "assets": "₹60.10 Cr",
      "total_income": "₹96.71 Cr",
      "pat": "₹6.29 Cr",
      "ebitda": "₹13.10 Cr",
      "net_worth": "₹22.70 Cr",
      "total_borrowing": "₹24.80 Cr"
    },
    {
      "period": "31 Mar 2023",
      "assets": "₹48.30 Cr",
      "total_income": "₹73.20 Cr",
      "pat": "₹3.90 Cr",
      "ebitda": "₹9.30 Cr",
      "net_worth": "₹16.90 Cr",
      "total_borrowing": "₹21.40 Cr"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "₹0",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "Dec 2025",
    "estimated_listing_price": "₹12 (flat listing expectation)"
  },

  "ipo_subscription_data": {
    "qib_ex_anchor": "N/A",
    "hni_subscription": "Moderate demand",
    "retail_subscription": "Moderate demand",
    "total_subscription": "Approx 1x range"
  },

  "ipo_intermediaries": {
    "registrar": "Cameo Corporate Services Limited",
    "registrar_website": "https://cameoindia.com",
    "market_maker": "Anant Securities Limited",
    "company_secretary": "N/A",
    "compliance_officer": "N/A"
  },

  "ipo_lead_manager": {
    "lead_manager": "Finshore Management Services Limited"
  },

  "company_information": {
    "company_address": "3rd Floor, Mukka Corporate House, Attavara, Mangaluru, Karnataka, India",
    "company_website": "https://www.shipwaves.com",
    "company_email": "secretarial@shipwaves.com",
    "company_phone": "+91 95381 49978"
  },

  "ipo_documents": {
    "drhp_link": "https://www.bseindia.com/corporates/download/381943/DP_BSE_Shipwaves_27032025_Final_20250329003006.pdf",
    "prospectus_pdf": "https://www.sebi.gov.in/filings/public-issues/dec-2025/shipwaves-online-limited_98198.html",
    
  },

  "faq": [
    {
      "question": "What does Shipwaves Online Solutions Limited do?",
      "answer": "The company provides digital freight forwarding and SaaS-based logistics solutions that allow businesses to manage shipments, documentation, and supply chain operations through a single digital platform."
    },
    {
      "question": "When did the Shipwaves Online IPO open and close?",
      "answer": "The IPO opened on December 10, 2025 and closed on December 12, 2025."
    },
    {
      "question": "What was the issue price of the Shipwaves Online IPO?",
      "answer": "The IPO was a fixed price issue of ₹12 per equity share."
    },
    {
      "question": "What was the lot size of the Shipwaves Online IPO?",
      "answer": "The lot size was 10,000 shares per lot."
    },
    {
      "question": "Where are Shipwaves Online shares listed?",
      "answer": "The shares are listed on the BSE SME platform since December 17, 2025."
    },
    {
      "question": "What was the total size of the Shipwaves Online IPO?",
      "answer": "The IPO size was ₹56.35 crore and consisted entirely of a fresh issue of shares."
    }
  ]
},

  {
  "id": 7,
  "name": "ICICI Prudential AMC",
  "fullName": "ICICI Prudential Asset Management Company Limited",
  "logo": "/images/ipo/icici-prudential-amc.png",
  "minInvestment": "₹51,960",
  "open": "12 Dec 2025",
  "close": "16 Dec 2025",
  "listing": "19 Dec 2025",
  "price": "2061-₹2165",
  "lot": 24,

  "about_company": {
    "company_name": "ICICI Prudential Asset Management Company Limited",
    "industry_sector": "Asset Management / Mutual Funds",
    "founded_year": "1998",
    "promoters": [
      "ICICI Bank Limited",
      "Prudential Corporation Holdings Limited"
    ],
    "description": "ICICI Prudential Asset Management Company Limited is one of India's largest asset managers and operates the ICICI Prudential Mutual Fund. The company provides asset management services across equity, debt, hybrid, passive funds and portfolio management services. It manages investments for retail investors, institutions and high-net-worth individuals through SIPs, digital platforms and institutional mandates."
  },

  "ipo_basic_details": {
    "company_name": "ICICI Prudential Asset Management Company Limited",
    "ipo_type": "Mainboard IPO",
    "issue_type": "Book Built Issue (Offer For Sale)",
    "face_value": "₹1 per share",
    "price_band_min": "₹2061",
    "price_band_max": "₹2165",
    "lot_size": 24,
    "total_issue_size": "₹10,000 Cr",
    "fresh_issue_size": "NIL",
    "offer_for_sale": "1.76 Crore shares",
    "shares_offered": "1.76 Crore shares",
    "listing_exchange": "NSE, BSE",
    "issue_price": "₹2165",
    "minimum_investment": "₹51,960",
    "market_cap_post_issue": "Approx ₹1.18 Lakh Cr",
    "pre_issue_shareholding": "ICICI Bank 51%, Prudential 49%",
    "post_issue_shareholding": "ICICI Bank 51%, Prudential ~39%"
  },

  "company_overview": {
    "business_model": "Asset-light financial services business focused on mutual fund management, portfolio management services and advisory solutions for institutional and retail investors.",
    "products_services": [
      "Equity Mutual Funds",
      "Debt Mutual Funds",
      "Hybrid Funds",
      "Passive Funds and ETFs",
      "Portfolio Management Services",
      "Institutional Asset Management"
    ],
    "competitive_strengths": [
      "Second largest AMC in India by AUM",
      "Strong distribution through ICICI Bank network",
      "Large SIP investor base",
      "Asset-light high-margin business model",
      "Strong brand recognition"
    ],
    "risks": [
      "Revenue depends heavily on market performance",
      "Regulatory changes by SEBI may reduce TER margins",
      "Competition from passive funds and ETFs",
      "Dependence on equity market inflows"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "12 Dec 2025",
    "ipo_close_date": "16 Dec 2025",
    "basis_of_allotment_date": "17 Dec 2025",
    "refund_initiation_date": "18 Dec 2025",
    "demat_credit_date": "18 Dec 2025",
    "listing_date": "19 Dec 2025",
    "upi_mandate_deadline": "16 Dec 2025"
  },

  "ipo_objectives": {
    "offer_for_sale": "Entire proceeds go to Prudential Corporation Holdings Ltd",
    "general_corporate_purposes": "Company will not receive funds from the IPO"
  },

  "investor_reservation": {
    "qib_quota": "50%",
    "retail_quota": "35%",
    "hni_quota": "15%",
    "shareholder_quota": "Reserved for ICICI Bank shareholders"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "1 lot",
      "shares": "24",
      "amount": "₹51,960"
    },
    "retail_maximum": {
      "lot_size": "13 lots",
      "shares": "312",
      "amount": "₹6,75,480"
    }
  },

  "key_performance_indicators": {
    "roe": "82.8%",
    "roce": "74%",
    "ronw": "82.8%",
    "pat_margin": "53%",
    "ebitda_margin": "60%",
    "eps": "₹55.7",
    "debt_to_equity": "0",
    "pe_ratio": "38.8x",
    "price_to_book": "31x"
  },

  "company_financial_data": [
    {
      "period": "FY2025",
      "assets": "₹4,384 Cr",
      "total_income": "₹4,980 Cr",
      "pat": "₹2,651 Cr",
      "ebitda": "₹3,050 Cr",
      "net_worth": "₹3,190 Cr",
      "total_borrowing": "₹0"
    },
    {
      "period": "FY2024",
      "assets": "₹3,915 Cr",
      "total_income": "₹4,070 Cr",
      "pat": "₹2,050 Cr",
      "ebitda": "₹2,420 Cr",
      "net_worth": "₹2,860 Cr",
      "total_borrowing": "₹0"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "₹520",
    "kostak_rate": "₹1500",
    "subject_to_sauda": "₹35,000",
    "gmp_last_updated": "18 Dec 2025",
    "estimated_listing_price": "₹2685"
  },

  "ipo_subscription_data": {
    "qib_ex_anchor": "124x",
    "hni_subscription": "22x",
    "retail_subscription": "2.5x",
    "total_subscription": "39x"
  },

  "ipo_intermediaries": {
    "registrar": "KFin Technologies Limited",
    "registrar_website": "https://kfintech.com",
    "market_maker": "N/A",
    "company_secretary": "N/A",
    "compliance_officer": "N/A"
  },

  "ipo_lead_manager": {
    "lead_manager": 
      "Citigroup Global Markets India,Morgan Stanley India,Kotak Mahindra Capital,ICICI Securities,Axis Capital,SBI Capital Markets"
    
  },

  "company_information": {
    "company_address": "One BKC, Bandra Kurla Complex, Mumbai, Maharashtra, India",
    "company_website": "https://www.icicipruamc.com",
    "company_email": "investor@icicipruamc.com",
    "company_phone": "+91 22 2652 5000"
  },

  "ipo_documents": {
    "drhp_link": "https://www.sebi.gov.in/filings/public-issues/jul-2025/icici-prudential-asset-management-company-limited_95357.html",
    "rhp_link": "https://www.sebi.gov.in/filings/public-issues/dec-2025/icici-prudential-asset-management-company-limited-rhp_98228.html",
    "prospectus_pdf": "https://www.sebi.gov.in/filings/public-issues/dec-2025/icici-prudential-asset-management-company-limited-prospectus_98432.html",
    "investor_presentation": "https://www.chittorgarh.net/reports/anchor-investor/icici-prudential-anchor-investor.pdf"
  }
},
    {
  "id": 8,
  "name": "Methodhub Software",
  "fullName": "Methodhub Software Solutions Limited",
  "logo": "/images/ipo/methodhub-software.png",
  "minInvestment": "₹1,17,000",
  "open": "02 Dec 2025",
  "close": "04 Dec 2025",
  "listing": "09 Dec 2025",
  "price": "78",
  "lot": 1500,

  "about_company": {
    "company_name": "Methodhub Software Solutions Limited",
    "industry_sector": "Information Technology Services",
    "founded_year": "2016",
    "promoters": [
      "Raghu Ramakrishnan",
      "Lakshmi Narayanan"
    ],
    "description": "Methodhub Software Solutions Limited is an IT services and consulting company providing enterprise software development, cloud engineering, data analytics, and digital transformation solutions. The company serves global clients across banking, healthcare, retail, and manufacturing sectors with a focus on agile development and scalable enterprise platforms."
  },

  "ipo_basic_details": {
    "company_name": "Methodhub Software Solutions Limited",
    "ipo_type": "SME IPO",
    "issue_type": "Fixed Price Issue",
    "face_value": "₹10 per share",
    "price_band_min": "₹78",
    "price_band_max": "₹78",
    "lot_size": 1500,
    "total_issue_size": "₹25.74 Cr",
    "fresh_issue_size": "₹25.74 Cr",
    "offer_for_sale": "NIL",
    "shares_offered": "33,00,000 shares",
    "listing_exchange": "NSE SME",
    "issue_price": "₹78",
    "minimum_investment": "₹1,17,000",
    "market_cap_post_issue": "Approx ₹95 Cr",
    "pre_issue_shareholding": "100% (Promoters)",
    "post_issue_shareholding": "Approx 73% (Promoters)"
  },

  "company_overview": {
    "business_model": "Provides IT consulting and software development services for enterprises focusing on cloud migration, digital transformation, and enterprise application development.",
    "products_services": [
      "Enterprise Software Development",
      "Cloud Engineering",
      "Data Analytics & AI Solutions",
      "Digital Transformation Consulting",
      "Application Maintenance & Support"
    ],
    "competitive_strengths": [
      "Strong expertise in enterprise cloud and digital platforms",
      "Growing demand for IT outsourcing",
      "Client relationships across multiple industries",
      "Agile delivery and scalable development teams"
    ],
    "risks": [
      "Highly competitive IT services industry",
      "Dependence on global technology spending cycles",
      "Client concentration risk",
      "SME stock liquidity risk after listing"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "02 Dec 2025",
    "ipo_close_date": "04 Dec 2025",
    "basis_of_allotment_date": "05 Dec 2025",
    "refund_initiation_date": "06 Dec 2025",
    "demat_credit_date": "06 Dec 2025",
    "listing_date": "09 Dec 2025",
    "upi_mandate_deadline": "04 Dec 2025"
  },

  "ipo_objectives": {
    "working_capital": "Funding working capital requirements",
    "technology_investment": "Development of software platforms and R&D",
    "general_corporate_purposes": "Operational expansion and brand development"
  },

  "investor_reservation": {
    "qib_quota": "Not applicable (SME structure)",
    "retail_quota": "35%",
    "hni_quota": "50%",
    "market_maker_quota": "15%"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "1 lot",
      "shares": "1500",
      "amount": "₹1,17,000"
    },
    "shni_minimum": {
      "lot_size": "2 lots",
      "shares": "3000",
      "amount": "₹2,34,000"
    }
  },

  "key_performance_indicators": {
    "roe": "32.6%",
    "roce": "28.4%",
    "ronw": "32.6%",
    "pat_margin": "14.8%",
    "ebitda_margin": "22.5%",
    "eps": "₹6.1",
    "debt_to_equity": "0.35",
    "pe_ratio": "12.8x",
    "price_to_book": "3.1"
  },

  "company_financial_data": [
    {
      "period": "31 Mar 2025",
      "assets": "₹42.5 Cr",
      "total_income": "₹38.7 Cr",
      "pat": "₹5.7 Cr",
      "ebitda": "₹8.7 Cr",
      "net_worth": "₹17.5 Cr",
      "total_borrowing": "₹6.2 Cr"
    },
    {
      "period": "31 Mar 2024",
      "assets": "₹34.2 Cr",
      "total_income": "₹29.4 Cr",
      "pat": "₹3.9 Cr",
      "ebitda": "₹6.1 Cr",
      "net_worth": "₹12.4 Cr",
      "total_borrowing": "₹5.4 Cr"
    },
    {
      "period": "31 Mar 2023",
      "assets": "₹28.6 Cr",
      "total_income": "₹21.3 Cr",
      "pat": "₹2.8 Cr",
      "ebitda": "₹4.7 Cr",
      "net_worth": "₹8.5 Cr",
      "total_borrowing": "₹4.9 Cr"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "₹18",
    "kostak_rate": "₹800",
    "subject_to_sauda": "₹18,000",
    "gmp_last_updated": "08 Dec 2025",
    "estimated_listing_price": "₹96"
  },

  "ipo_subscription_data": {
    "qib_ex_anchor": "N/A",
    "hni_subscription": "89.21x",
    "retail_subscription": "45.68x",
    "total_subscription": "67.45x"
  },

  "ipo_intermediaries": {
    "registrar": "Bigshare Services Pvt Ltd",
    "registrar_website": "https://www.bigshareonline.com",
    "market_maker": "Shreni Shares Limited",
    "company_secretary": "N/A",
    "compliance_officer": "N/A"
  },

  "ipo_lead_manager": {
    "lead_manager": "Fedex Securities Pvt Ltd"
  },

  "company_information": {
    "company_address": "Bangalore, Karnataka, India",
    "company_website": "https://www.methodhub.com",
    "company_email": "info@methodhub.com",
    "company_phone": "+91 80 4567 8900"
  },

  "ipo_documents": {
    "drhp_link": "https://www.bsesme.com/download/344942/SME_IPO%20InPrinciple/MethodhubSoftwareDRHP_20250912225602.pdf",
    "rhp_link": "https://www.bseindia.com/downloads/ipo/RHP_041220251833.zip",
    "prospectus_pdf": "https://methodhub.in/wp-content/uploads/2025/12/Prospectus-1.pdf",
    "investor_presentation": "https://www.chittorgarh.net/reports/anchor-investor/methodhub-software-anchor-list.pdf"
  },

  "listing_performance": {
    "issue_price": "₹78",
    "listing_price": "₹102",
    "gain_per_share": "₹24",
    "percentage_gain": "30.77%"
  }
},
{
  "id": 9,
  "name": "Flywings Simulator",
  "fullName": "Flywings Simulator Training Centre Limited",
  "logo": "/images/ipo/flywings-simulator.png",
  "minInvestment": "₹1,50,000",
  "open": "28 Nov 2025",
  "close": "30 Nov 2025",
  "listing": "05 Dec 2025",
  "price": "145-₹150",
  "lot": 1000,

  "about_company": {
    "company_name": "Flywings Simulator Training Centre Limited",
    "industry_sector": "Aviation Training & Simulation",
    "founded_year": "2018",
    "promoters": [
      "Arjun Mehta",
      "Sanjay Kulkarni"
    ],
    "description": "Flywings Simulator Training Centre Limited provides aviation training services focused on commercial pilot training and flight simulator programs. The company operates advanced flight simulators and offers certification programs for airline pilots, aviation professionals, and flight instructors. It aims to support the growing aviation sector by providing cost-efficient and technologically advanced pilot training infrastructure."
  },

  "ipo_basic_details": {
    "company_name": "Flywings Simulator Training Centre Limited",
    "ipo_type": "SME IPO",
    "issue_type": "Book Built Issue",
    "face_value": "₹10 per share",
    "price_band_min": "₹145",
    "price_band_max": "₹150",
    "lot_size": 1000,
    "total_issue_size": "₹32.25 Cr",
    "fresh_issue_size": "₹32.25 Cr",
    "offer_for_sale": "NIL",
    "shares_offered": "21,50,000 shares",
    "listing_exchange": "NSE SME",
    "issue_price": "₹150",
    "minimum_investment": "₹1,50,000",
    "market_cap_post_issue": "Approx ₹120 Cr",
    "pre_issue_shareholding": "100% (Promoters)",
    "post_issue_shareholding": "Approx 72% (Promoters)"
  },

  "company_overview": {
    "business_model": "Operates aviation training centers equipped with advanced flight simulators and provides pilot training programs for commercial and airline pilots.",
    "products_services": [
      "Commercial Pilot Training",
      "Flight Simulator Training",
      "Type Rating Programs",
      "Aviation Instructor Certification",
      "Aviation Skill Development Programs"
    ],
    "competitive_strengths": [
      "Growing demand for trained pilots globally",
      "Modern simulator infrastructure",
      "Experienced aviation instructors",
      "Strategic partnerships with aviation academies"
    ],
    "risks": [
      "Highly capital intensive aviation training infrastructure",
      "Dependence on aviation industry growth",
      "Regulatory approvals required for training operations",
      "SME stock liquidity risk after listing"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "28 Nov 2025",
    "ipo_close_date": "30 Nov 2025",
    "basis_of_allotment_date": "02 Dec 2025",
    "refund_initiation_date": "03 Dec 2025",
    "demat_credit_date": "03 Dec 2025",
    "listing_date": "05 Dec 2025",
    "upi_mandate_deadline": "30 Nov 2025"
  },

  "ipo_objectives": {
    "capital_expenditure": "Purchase of additional flight simulators",
    "training_infrastructure": "Expansion of aviation training facilities",
    "working_capital": "Operational expenses and business expansion",
    "general_corporate_purposes": "Corporate and administrative requirements"
  },

  "investor_reservation": {
    "qib_quota": "Not Applicable (SME IPO)",
    "retail_quota": "35%",
    "hni_quota": "50%",
    "market_maker_quota": "15%"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "1 lot",
      "shares": "1000",
      "amount": "₹1,50,000"
    },
    "shni_minimum": {
      "lot_size": "2 lots",
      "shares": "2000",
      "amount": "₹3,00,000"
    }
  },

  "key_performance_indicators": {
    "roe": "29.7%",
    "roce": "26.4%",
    "ronw": "29.7%",
    "pat_margin": "13.6%",
    "ebitda_margin": "21.2%",
    "eps": "₹9.3",
    "debt_to_equity": "0.42",
    "pe_ratio": "16.1x",
    "price_to_book": "3.5"
  },

  "company_financial_data": [
    {
      "period": "31 Mar 2025",
      "assets": "₹52.4 Cr",
      "total_income": "₹41.3 Cr",
      "pat": "₹5.6 Cr",
      "ebitda": "₹8.8 Cr",
      "net_worth": "₹19.7 Cr",
      "total_borrowing": "₹8.4 Cr"
    },
    {
      "period": "31 Mar 2024",
      "assets": "₹44.2 Cr",
      "total_income": "₹33.6 Cr",
      "pat": "₹3.9 Cr",
      "ebitda": "₹6.3 Cr",
      "net_worth": "₹15.2 Cr",
      "total_borrowing": "₹7.1 Cr"
    },
    {
      "period": "31 Mar 2023",
      "assets": "₹36.7 Cr",
      "total_income": "₹27.4 Cr",
      "pat": "₹2.8 Cr",
      "ebitda": "₹4.8 Cr",
      "net_worth": "₹11.6 Cr",
      "total_borrowing": "₹6.3 Cr"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "₹22",
    "kostak_rate": "₹1,200",
    "subject_to_sauda": "₹20,000",
    "gmp_last_updated": "04 Dec 2025",
    "estimated_listing_price": "₹172"
  },

  "ipo_subscription_data": {
    "qib_ex_anchor": "N/A",
    "hni_subscription": "120.34x",
    "retail_subscription": "57.92x",
    "total_subscription": "89.12x"
  },

  "ipo_intermediaries": {
    "registrar": "Bigshare Services Pvt Ltd",
    "registrar_website": "https://www.bigshareonline.com",
    "market_maker": "NVS Brokerage Pvt Ltd",
    "company_secretary": "N/A",
    "compliance_officer": "N/A"
  },

  "ipo_lead_manager": {
    "lead_manager": "Fedex Securities Pvt Ltd"
  },

  "company_information": {
    "company_address": "Mumbai, Maharashtra, India",
    "company_website": "https://www.flywingssimulator.com",
    "company_email": "info@flywingssimulator.com",
    "company_phone": "+91 22 4890 5500"
  },

  "ipo_documents": {
    "drhp_link": "https://nsearchives.nseindia.com/emerge/corporates/content/Registration_05082025183919_DRHP_flywings.pdf",
    "rhp_link": "https://nsearchives.nseindia.com/content/ipo/RHP_FWSTC.zip",
    "prospectus_pdf": "https://nsearchives.nseindia.com/emerge/corporates/content/FlywingsSimulatorTrainingCentreLimited_PROSP.pdf",
    "investor_presentation": "https://www.chittorgarh.net/reports/anchor-investor/flywings-simulator-ipo-anchor-allocation-letter.pdf"
  },

  "listing_performance": {
    "issue_price": "₹150",
    "listing_price": "₹178",
    "gain_per_share": "₹28",
    "percentage_gain": "18.67%"
  }
},

   {
  "id": 10,
  "name": "Encompass Design",
  "fullName": "Encompass Design India Limited",
  "logo": "/images/ipo/encompass-design.png",
  "minInvestment": "₹14,700",
  "open": "25 Nov 2025",
  "close": "27 Nov 2025",
  "listing": "02 Dec 2025",
  "price": "210",
  "lot": 70,

  "about_company": {
    "company_name": "Encompass Design India Limited",
    "industry_sector": "Engineering Design & Technology Services",
    "founded_year": "2011",
    "promoters": [
      "Rajesh Kumar",
      "Anita Mehta"
    ],
    "description": "Encompass Design India Limited provides engineering design, product development, and digital engineering services for global manufacturing and technology companies. The firm focuses on mechanical design, embedded systems, and product lifecycle management solutions for industries such as automotive, aerospace, and industrial equipment."
  },

  "ipo_basic_details": {
    "company_name": "Encompass Design India Limited",
    "ipo_type": "SME IPO",
    "issue_type": "Fixed Price Issue",
    "face_value": "₹10 per share",
    "price_band_min": "₹210",
    "price_band_max": "₹210",
    "lot_size": 70,
    "total_issue_size": "₹19.32 Cr",
    "fresh_issue_size": "₹19.32 Cr",
    "offer_for_sale": "NIL",
    "shares_offered": "9,20,000 shares",
    "listing_exchange": "BSE SME",
    "issue_price": "₹210",
    "minimum_investment": "₹14,700",
    "market_cap_post_issue": "Approx ₹110 Cr",
    "pre_issue_shareholding": "100% (Promoters)",
    "post_issue_shareholding": "Approx 73% (Promoters)"
  },

  "company_overview": {
    "business_model": "Provides engineering design and digital product development services for global clients across manufacturing, automotive, and aerospace sectors.",
    "products_services": [
      "Mechanical Engineering Design",
      "Embedded Systems Development",
      "Product Lifecycle Management",
      "Industrial Product Development",
      "Digital Engineering Services"
    ],
    "competitive_strengths": [
      "Growing demand for outsourced engineering services",
      "Skilled engineering workforce",
      "Diversified global client base",
      "Strong capabilities in digital product design"
    ],
    "risks": [
      "Highly competitive engineering services market",
      "Dependence on international clients",
      "Technology disruption risk",
      "SME liquidity and volatility risk"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "25 Nov 2025",
    "ipo_close_date": "27 Nov 2025",
    "basis_of_allotment_date": "28 Nov 2025",
    "refund_initiation_date": "29 Nov 2025",
    "demat_credit_date": "29 Nov 2025",
    "listing_date": "02 Dec 2025",
    "upi_mandate_deadline": "27 Nov 2025"
  },

  "ipo_objectives": {
    "technology_investment": "Investment in engineering software tools and R&D",
    "working_capital": "Meeting working capital requirements",
    "general_corporate_purposes": "Operational expansion and corporate needs"
  },

  "investor_reservation": {
    "qib_quota": "Not Applicable (SME IPO)",
    "retail_quota": "35%",
    "hni_quota": "50%",
    "market_maker_quota": "15%"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "1 lot",
      "shares": "70",
      "amount": "₹14,700"
    },
    "shni_minimum": {
      "lot_size": "2 lots",
      "shares": "140",
      "amount": "₹29,400"
    }
  },

  "key_performance_indicators": {
    "roe": "27.4%",
    "roce": "24.1%",
    "ronw": "27.4%",
    "pat_margin": "12.7%",
    "ebitda_margin": "19.8%",
    "eps": "₹12.4",
    "debt_to_equity": "0.31",
    "pe_ratio": "16.9x",
    "price_to_book": "3.2"
  },

  "company_financial_data": [
    {
      "period": "31 Mar 2025",
      "assets": "₹48.6 Cr",
      "total_income": "₹36.8 Cr",
      "pat": "₹4.6 Cr",
      "ebitda": "₹7.3 Cr",
      "net_worth": "₹17.2 Cr",
      "total_borrowing": "₹5.4 Cr"
    },
    {
      "period": "31 Mar 2024",
      "assets": "₹39.2 Cr",
      "total_income": "₹28.5 Cr",
      "pat": "₹3.1 Cr",
      "ebitda": "₹5.4 Cr",
      "net_worth": "₹13.6 Cr",
      "total_borrowing": "₹4.9 Cr"
    },
    {
      "period": "31 Mar 2023",
      "assets": "₹31.4 Cr",
      "total_income": "₹22.3 Cr",
      "pat": "₹2.2 Cr",
      "ebitda": "₹3.9 Cr",
      "net_worth": "₹9.8 Cr",
      "total_borrowing": "₹4.2 Cr"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "₹28",
    "kostak_rate": "₹900",
    "subject_to_sauda": "₹12,000",
    "gmp_last_updated": "01 Dec 2025",
    "estimated_listing_price": "₹238"
  },

  "ipo_subscription_data": {
    "qib_ex_anchor": "N/A",
    "hni_subscription": "71.22x",
    "retail_subscription": "37.41x",
    "total_subscription": "54.33x"
  },

  "ipo_intermediaries": {
    "registrar": "Bigshare Services Pvt Ltd",
    "registrar_website": "https://www.bigshareonline.com",
    "market_maker": "Spread X Securities Pvt Ltd",
    "company_secretary": "N/A",
    "compliance_officer": "N/A"
  },

  "ipo_lead_manager": {
    "lead_manager": "Fedex Securities Pvt Ltd"
  },

  "company_information": {
    "company_address": "Pune, Maharashtra, India",
    "company_website": "https://www.encompassdesignindia.com",
    "company_email": "info@encompassdesignindia.com",
    "company_phone": "+91 20 4892 1100"
  },

  "ipo_documents": {
    "drhp_link": "https://nsearchives.nseindia.com/emerge/corporates/content/Registration_25072025175142_EDILDRHP.pdf",
    "rhp_link": "https://nsearchives.nseindia.com/content/ipo/RHP_ENCOMPAS.zip",
    "prospectus_pdf": "https://nsearchives.nseindia.com/emerge/corporates/content/EncompassDesignIndiaLimited_PROSP.pdf",
    "investor_presentation": "https://www.chittorgarh.net/reports/anchor-investor/encompass_designs_anchorallocationreport.pdf"
  },

  "listing_performance": {
    "issue_price": "₹210",
    "listing_price": "₹245",
    "gain_per_share": "₹35",
    "percentage_gain": "16.67%"
  }
},

    {
      id: 11,
      name: "Pajson Agro India",
      fullName: "Pajson Agro India Ltd",
      logo: "/images/ipo/pajson-agro-india.png",
      open: "11 Dec 2025",
      close: "15 Dec 2025",
      listing: "18 Dec 2025",
      price: "112-118",
      lot: 1200,
      subscription: null,
      listingPrice: null,
      performance: null,
      type: "SME",
      status: "Closed"
    },
    {
      id: 12,
      name: "HRS Aluglaze",
      fullName: "HRS Aluglaze Ltd",
      logo: "/images/ipo/hrs-aluglaze.png",
      open: "11 Dec 2025",
      close: "15 Dec 2025",
      listing: "18 Dec 2025",
      price: "94-96",
      lot: 1200,
      subscription: null,
      listingPrice: null,
      performance: null,
      type: "SME",
      status: "Closed"
    },
    {
      id: 13,
      name: "Exim Routes",
      fullName: "Exim Routes Ltd",
      logo: "/images/ipo/exim-routes.png",
      open: "12 Dec 2025",
      close: "16 Dec 2025",
      listing: "19 Dec 2025",
      price: "83-88",
      lot: 1600,
      subscription: null,
      listingPrice: null,
      performance: null,
      type: "SME",
      status: "Open"
    },
    {
      id: 14,
      name: "Stanbik Agro",
      fullName: "Stanbik Agro Ltd",
      logo: "/images/ipo/stanbik-agro.png",
      open: "12 Dec 2025",
      close: "16 Dec 2025",
      listing: "19 Dec 2025",
      price: "30",
      lot: 4000,
      subscription: null,
      listingPrice: null,
      performance: null,
      type: "SME",
      status: "Open"
    },
    {
      id: 15,
      name: "KSH International",
      fullName: "KSH International Ltd",
      logo: "/images/ipo/ksh-international.png",
      open: "16 Dec 2025",
      close: "18 Dec 2025",
      listing: "23 Dec 2025",
      price: "365-384",
      lot: 38,
      subscription: null,
      listingPrice: null,
      performance: null,
      type: "Mainboard",
      status: "live"
    },
    {
      id: 16,
      name: "MARC Technocrats",
      fullName: "MARC Technocrats Ltd",
      logo: "/images/ipo/marc-technocrats.png",
      open: "17 Dec 2025",
      close: "19 Dec 2025",
      listing: "24 Dec 2025",
      price: "88-93",
      lot: 1600,
      subscription: null,
      listingPrice: null,
      performance: null,
      type: "SME",
      status: "UpcomingIpo"
    },
    {
      id: 17,
      name: "Shyam Dhani Industries",
      fullName: "Shyam Dhani Industries Ltd",
      logo: "/images/ipo/shyam-dhani-industries.png",
      open: "22 Dec 2025",
      close: "24 Dec 2025",
      listing: "30 Dec 2025",
      price: "65-70",
      lot: 2000,
      subscription: null,
      listingPrice: null,
      performance: null,
      type: "SME",
      status: "UpcomingIpo"
    },
    {
      id: 18,
      name: "Global Ocean Logistics India",
      fullName: "Global Ocean Logistics India Ltd",
      logo: "/images/ipo/global-ocean-logistics-india.png",
      open: "17 Dec 2025",
      close: "19 Dec 2025",
      listing: "24 Dec 2025",
      price: "74-78",
      lot: 1600,
      subscription: null,
      listingPrice: null,
      performance: null,
      type: "SME",
      status: "UpcomingIpo"
    },
    {
      id: 19,
      name: "Gujarat Kidney & Super Speciality",
      fullName: "Gujarat Kidney & Super Speciality Ltd",
      logo: "/images/ipo/gujarat-kidney-super-speciality.png",
      open: "22 Dec 2025",
      close: "24 Dec 2025",
      listing: "30 Dec 2025",
      price: "108-114",
      lot: 128,
      subscription: null,
      listingPrice: null,
      performance: null,
      type: "Mainboard",
      status: "UpcomingIpo"
    },
    {
  "id": 20,
  "name": "E to E Transportation",
  "fullName": "E to E Transportation Infrastructure Ltd",
  "logo": "/images/ipo/e2e-rail.png",
  "open": "26 Dec 2025",
  "close": "30 Dec 2025",
  "listing": "02 Jan 2026",
  "price": "164-174",
  "lot": 800,
  "subscription": null,
  "listingPrice": null,
  "performance": null,
  "type": "SME",
  "status": "Live"
},
{
  "id": 21,
  "name": "Gabion Technologies",
  "fullName": "Gabion Technologies India Limited",
  "logo": "/images/ipo/Gabion.png",
  "open": "06 Jan 2026",
  "close": "08 Jan 2026",
  "listing": "13 Jan 2026",
  "price": "76-81",
  "lot": 1600,
  "subscription": null,
  "listingPrice": null,
  "performance": null,
  "type": "SME",
  "status": "Live"
},
{
  "id": 22,
  "name": "Victory Electric Vehicles",
  "fullName": "Victory Electric Vehicles International Limited",
  "logo": "/images/ipo/VictoryElectricVehicles.png",
  "open": "07 Jan 2026",
  "close": "09 Jan 2026",
  "listing": "14 Jan 2026",
  "price": "41",
  "lot": 3000,
  "subscription": null,
  "listingPrice": null,
  "performance": null,
  "type": "SME",
  "exchange": "NSE SME",
  "status": "Live"
},

 {
  "id": 23,
  "name": "Yajur Fibres",
  "fullName": "Yajur Fibres Limited",
  "logo": "/images/ipo/Yajur.png",
  "open": "07 Jan 2026",
  "close": "09 Jan 2026",
  "listing": "14 Jan 2026",
  "price": "168 – 174",
  "lot": 800,
  "subscription": null,
  "listingPrice": null,
  "performance": null,
  "type": "SME",
  "exchange": "BSE SME",
  "status": "Live"
},
  {
  "id": 24,
  "name": "Bharat Coking Coal",
  "fullName": "Bharat Coking Coal Limited",
  "logo": "/images/ipo/BharatCokingCoal.png",
  "open": "09 Jan 2026",
  "close": "13 Jan 2026",
  "listing": "16 Jan 2026",
  "price": "21 – 23",
  "lot": 600,
  "subscription": null,
  "listingPrice": null,
  "performance": null,
  "type": "Mainboard",
  "status": "Upcoming"
}
,
  {
  "id": 25,
  "name": "Defrail Technologies",
  "fullName": "Defrail Technologies Limited",
  "logo": "/images/ipo/Defrail.png",
  "open": "09 Jan 2026",
  "close": "13 Jan 2026",
  "listing": "16 Jan 2026",
  "price": "70 – 74",
  "lot": 3200,
  "subscription": null,
  "listingPrice": null,
  "performance": null,
  "type": "SME",
  "status": "Upcoming"
}
,
  {
  "id": 26,
  "name": "Avana Electrosystems",
  "fullName": "Avana Electrosystems Limited",
  "logo": "/images/ipo/Avana.png",
  "open": "12 Jan 2026",
  "close": "14 Jan 2026",
  "listing": "19 Jan 2026",
  "price": "56 – 59",
  "lot": 2000,
  "subscription": null,
  "listingPrice": null,
  "performance": null,
  "type": "SME",
  "status": "Upcoming"
}
,
  {
  "id": 27,
  "name": "INDO SMC",
  "fullName": "INDO SMC Limited",
  "logo": "/images/ipo/INDO.png",
  "open": "13 Jan 2026",
  "close": "15 Jan 2026",
  "listing": "20 Jan 2026",
  "price": "141 – 149",
  "lot": 1000,
  "subscription": null,
  "listingPrice": null,
  "performance": null,
  "type": "SME",
  "status": "Upcoming"
},
{
  "id": 28,
  "name": "ARMOUR SECURITY (INDIA)",
  "fullName": "Armour Security (India) Ltd",
  "logo": "/images/ipo/Armour.png",
  "open": "14 Jan 2026",
  "close": "19 Jan 2026",
  "listing": "22 Jan 2026",
  "price": "55 – 57",
  "lot": 2000,
  "subscription": null,
  "listingPrice": null,
  "performance": null,
  "type": "SME",
  "status": "Active"
},
{
  "id": 29,
  "name": "AMAGI MEDIA LABS",
  "fullName": "Amagi Media Labs Limited",
  "logo": "/images/ipo/Amagi.png",
  "open": "13 Jan 2026",
  "close": "16 Jan 2026",
  "listing": "21 Jan 2026",
  "price": "343 – 361",
  "lot": 41,
  "subscription": null,
  "listingPrice": null,
  "performance": null,
  "type": "Mainboard",
  "status": "Active"
},
{
  "id": 30,
  "name": "GRE RENEW ENERTECH",
  "fullName": "GRE Renew Enertech Limited",
  "logo":  "/images/ipo/grerenew.png",
  "symbol": "GRERENEW",
  "open": "13 Jan 2026",
  "close": "16 Jan 2026",
  "listing":  "21 Jan 2026",
  "price": "100 – 105",
  "lot": 1200,
  "minBidQuantity": 2400,
  "issueSizeShares": 2706000,
  "faceValue": 10,
  "subscription": null,
  "listingPrice": null,
  "performance": null,
  "type": "Mainboard",
  "status": "Active"
},
{
  "id": 31,
  "name": "ARITAS VINYL",
  "fullName": "Aritas Vinyl Limited",
  "logo": "/images/ipo/Aritas.png",
  "symbol": "ARITAS",
  "open": "16 Jan 2026",
  "close": "20 Jan 2026",
  "listing": "23 Jan 2026",
  "price": "40 – 47",
  "lot": 3000,
  "minBidQuantity": 6000,
  "issueSizeShares": 7983000,
  "faceValue": 10,
  "subscription": null,
  "listingPrice": null,
  "performance": null,
  "type": "Mainboard",
  "status": "Active"
},
{
  "id": 32,
  "name": "C K K RETAIL MART",
  "fullName": "C K K Retail Mart Limited",
  "logo": "/images/ipo/ckkretail.png",
  "symbol": "CKKRETAIL",
  "open": "30 Jan 2026",
  "close": "03 Feb 2026",
  "listing": "06 Feb 2026",
  "price": "155 – 163",
  "lot": 800,
  "minBidQuantity": 1600,
  "issueSizeShares": 5400000,
  "faceValue": 10,
  "subscription": null,
  "listingPrice": null,
  "performance": null,
  "type": "SME",
  "status": "Active"
},
{
  "id": 33,
  "name": "BIOPOL CHEMICALS",
  "fullName": "Biopol Chemicals Limited",
  "logo": "/images/ipo/biopol.png",
  "symbol": "BIOPOLCHEM",
  "open": "06 Feb 2026",
  "close": "10 Feb 2026",
  "listing": "13 Feb 2026",
  "price": "102 – 108",
  "lot": 1200,
  "minBidQuantity": 2400,
  "issueSizeShares": 2894400,
  "faceValue": 10,
  "subscription": null,
  "listingPrice": null,
  "performance": null,
  "type": "SME",
  "status": "Active"
},
{
  "id": 34,
  "name": "NFP SAMPOORNA FOODS",
  "fullName": "NFP Sampoorna Foods Limited",
  "logo": "/images/ipo/sampoorna.png",
  "symbol": "NFPSAMPOORNA",
  "open": "04 Feb 2026",
  "close": "06 Feb 2026",
  "listing": "11 Feb 2026",
  "price": "52 – 55",
  "lot": 2000,
  "minBidQuantity": 4000,
  "issueSizeShares": 4236000,
  "faceValue": 10,
  "subscription": null,
  "listingPrice": null,
  "performance": null,
  "type": "SME",
  "status": "Active"
},
{
  "id": 35,
  "name": "Grover Jewells",
  "fullName": "Grover Jewells Limited",
  "logo": "/images/ipo/grover.png",
  "symbol": null,
  "open": "04 Feb 2026",
  "close": "06 Feb 2026",
  "listing": "11 Feb 2026",
  "price": "83 – 88",
  "lot": 1600,
  "minBidQuantity": 3200,
  "issueSizeShares": 3844800,
  "faceValue": 10,
  "subscription": null,
  "listingPrice": null,
  "performance": null,
  "type": "SME",
  "status": "Active"
},
{
  "id": 36,
  "name": "Brandman Retail",
  "fullName": "Brandman Retail Limited",
  "logo": "/images/ipo/brandman.png",
  "symbol": null,
  "open": "04 Feb 2026",
  "close": "06 Feb 2026",
  "listing": "11 Feb 2026",
  "price": "167 – 176",
  "lot": 800,
  "minBidQuantity": 1600,
  "issueSizeShares": 4891200,
  "faceValue": 10,
  "subscription": null,
  "listingPrice": null,
  "performance": null,
  "type": "SME",
  "status": "Active"
},
{
  "id": 37,
  "name": "Marushika Technology",
  "fullName": "Marushika Technology Limited",
  "logo": "/images/ipo/marushika.png",
  "symbol": null,
  "open": "12 Feb 2026",
  "close": "16 Feb 2026",
  "listing": "16 Feb 2026",
  "price": "111 – 117",
  "lot": 1200,
  "minBidQuantity": 2400,
  "issueSizeShares": 2305200,
  "faceValue": 10,
  "subscription": null,
  "listingPrice": null,
  "performance": null,
  "type": "SME",
  "status": "Active"
},
{
  "id": 38,
  "name": "Pan HR Solution",
  "fullName": "Pan HR Solution Limited",
  "logo": "/images/ipo/panhr.png",
  "symbol": null,
  "open": "06 Feb 2026",
  "close": "10 Feb 2026",
  "listing": "13 Feb 2026",
  "price": "74 – 78",
  "lot": 1600,
  "minBidQuantity": 3200,
  "issueSizeShares": 2184000,
  "faceValue": 10,
  "subscription": null,
  "listingPrice": null,
  "performance": null,
  "type": "SME",
  "status": "Active"
},
{
  "id": 39,
  "name": "Fractal Analytics",
  "fullName": "Fractal Analytics Limited",
  "logo": "/images/ipo/Fractal.png",
  "symbol": null,
  "open": "09 Feb 2026",
  "close": "11 Feb 2026",
  "listing": "16 Feb 2026",
  "price": "857 – 900",
  "lot": 16,
  "minBidQuantity": 16,
  "issueSizeShares": null,
  "faceValue": 1,
  "subscription": null,
  "listingPrice": null,
  "performance": null,
  "type": "Mainboard",
  "status": "Active"
},{
  "id": 40,
  "name": "Aye Finance",
  "fullName": "Aye Finance Limited",
  "logo": "/images/ipo/AyeFinance.png",
  "symbol": null,
  "open": "09 Feb 2026",
  "close": "11 Feb 2026",
  "listing": "16 Feb 2026",
  "price": "122 – 129",
  "lot": 116,
  "minBidQuantity": 116,
  "issueSizeShares": 78294574,
  "faceValue": 2,
  "subscription": null,
  "listingPrice": null,
  "performance": null,
  "type": "Mainboard",
  "status": "Active"
},
{
  "id": 41,
  "name": "PNGS Reva Diamond Jewellery",
  "fullName": "PNGS Reva Diamond Jewellery Limited",
  "logo": "/images/ipo/pngs.png",
  "symbol": null,
  "open": "24 Feb 2026",
  "close": "26 Feb 2026",
  "listing": "04 Mar 2026",
  "price": "367 – 386",
  "lot": 32,
  "minBidQuantity": 32,
  "issueSizeShares": 9844560,
  "faceValue": 10,
  "subscription": null,
  "listingPrice": null,
  "performance": null,
  "type": "Mainboard",
  "status": "Active"
},
{
  "id": 42,
  "name": "Fractal Industries",
  "fullName": "Fractal Industries Limited",
  "logo": "/images/ipo/fractalindustries.png",
  "symbol": null,
  "open": "16 Feb 2026",
  "close": "18 Feb 2026",
  "listing": "23 Feb 2026",
  "price": "205 – 216",
  "lot": 600,
  "minBidQuantity": 1200,
  "issueSizeShares": 2268600,
  "faceValue": 10,
  "subscription": null,
  "listingPrice": null,
  "performance": null,
  "type": "SME",
  "status": "Active"
},
{
  "id": 43,
  "name": "Manilam Industries",
  "fullName": "Manilam Industries India Limited",
  "logo": "/images/ipo/manilam.png",
  "symbol": null,
  "open": "20 Feb 2026",
  "close": "24 Feb 2026",
  "listing": "27 Feb 2026",
  "price": "65 – 69",
  "lot": 2000,
  "minBidQuantity": 4000,
  "issueSizeShares": 5790000,
  "faceValue": 10,
  "subscription": null,
  "listingPrice": null,
  "performance": null,
  "type": "SME",
  "status": "Active"
},
{
  "id": 44,
  "name": "Gaudium IVF and Women Health",
  "fullName": "Gaudium IVF and Women Health Limited",
  "logo": "/images/ipo/gaudiumivf.png",
  "symbol": null,
  "open": "20 Feb 2026",
  "close": "24 Feb 2026",
  "listing": "27 Feb 2026",
  "price": "75 – 79",
  "lot": 189,
  "minBidQuantity": 189,
  "issueSizeShares": 20886200,
  "faceValue": 5,
  "subscription": null,
  "listingPrice": null,
  "performance": null,
  "type": "Mainboard",
  "status": "Active"
},
{
  "id": 45,
  "name": "Shree Ram Twistex",
  "fullName": "Shree Ram Twistex Limited",
  "logo": "/images/ipo/shreeramtwistex.png",
  "symbol": null,
  "open": "23 Feb 2026",
  "close": "25 Feb 2026",
  "listing": "02 Mar 2026",
  "price": "95 – 104",
  "lot": 144,
  "minBidQuantity": 144,
  "issueSizeShares": 10600000,
  "faceValue": 10,
  "subscription": null,
  "listingPrice": null,
  "performance": null,
  "type": "Mainboard",
  "status": "Active"
},
{
  "id": 46,
  "name": "Mobilise App Lab",
  "fullName": "Mobilise App Lab Limited",
  "logo": "/images/ipo/mobiliseapp.png",
  "symbol": null,
  "open": "23 Feb 2026",
  "close": "25 Feb 2026",
  "listing": "02 Mar 2026",
  "price": "75 – 80",
  "lot": 1600,
  "minBidQuantity": 3200,
  "issueSizeShares": 2512000,
  "faceValue": 10,
  "subscription": null,
  "listingPrice": null,
  "performance": null,
  "type": "SME",
  "status": "Active"
},
{
  "id": 47,
  "name": "Kiaasa Retail",
  "fullName": "Kiaasa Retail Limited",
  "logo": "/images/ipo/kiaasaretail.png",
  "symbol": null,
  "open": "23 Feb 2026",
  "close": "25 Feb 2026",
  "listing": "02 Mar 2026",
  "price": "121 – 127",
  "lot": 1000,
  "minBidQuantity": 2000,
  "issueSizeShares": 5490000,
  "faceValue": 10,
  "subscription": null,
  "listingPrice": null,
  "performance": null,
  "type": "SME",
  "status": "Active"
},
{
  "id": 48,
 "name": "Accord Transformer & Switchgear IPO",
 "logo":"/images/ipo/accordtransformer.png",
"minInvestment":"₹2,76,000",
"open": "23 Feb 2026",
  "close": "25 Feb 2026",
  "listing": "02 Mar 2026",
  "price": "43 – 46",
  "lot": 3000,
  "about_company": {
    "company_name": "Accord Transformer & Switchgear Limited",
    "industry_sector": "Electrical Equipment / Power Infrastructure",
    "founded_year": "2010",
    "promoters": ["Rajesh Kumar", "Anil Kumar"],
    "description": "Accord Transformer & Switchgear Limited focuses on developing and producing electrical equipment such as power transformers, distribution transformers, and various switchgear systems. These products are widely utilized in power transmission and distribution networks, utility operations, and renewable energy installations, supporting reliable and efficient electrical infrastructure."
  },

  "ipo_basic_details": {
    "company_name": "Accord Transformer & Switchgear Limited",
    "ipo_type": "SME IPO",
    "issue_type": "Book Built Issue",
    "face_value": "₹10 per share",
    "price_band_min": "₹43",
    "price_band_max": "₹46",
    "lot_size": 3000,
    "total_issue_size": "₹25.59 Cr",
    "fresh_issue_size": "₹25.59 Cr",
    "offer_for_sale": "0",
    "shares_offered": "55,62,000 shares",
    "listing_exchange": "BSE SME",
    "issue_price": "₹46",
    "minimum_investment": "₹2,76,000",
    "market_cap_post_issue": "₹94.64 Cr",
    "pre_issue_shareholding": "84.94%",
    "post_issue_shareholding": "61.98%"
  },

  "company_overview": {
    "business_model": "The company manufactures transformers and switchgear products used in power transmission and distribution networks. Revenue is generated through supply contracts with utilities, EPC contractors, and industrial clients.",
    "products_services": [
      "Power Transformers",
      "Distribution Transformers",
      "Switchgear Equipment",
      "Custom Electrical Solutions"
    ],
    "competitive_strengths": [
      "Strong order book in power distribution sector",
      "Established relationships with utilities and EPC contractors",
      "Growing demand from renewable and infrastructure sectors",
      "In-house manufacturing capabilities"
    ],
    "risks": [
      "Dependence on power sector spending",
      "Working capital intensive business",
      "Competition from larger transformer manufacturers",
      "Raw material price volatility"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "23 Feb 2026",
    "ipo_close_date": "25 Feb 2026",
    "basis_of_allotment_date": "26 Feb 2026",
    "refund_initiation_date": "27 Feb 2026",
    "demat_credit_date": "28 Feb 2026",
    "listing_date": "02 Mar 2026",
    "anchor_investor_date": "20 Feb 2026",
    "upi_mandate_deadline": "25 Feb 2026"
  },

  "ipo_objectives": {
    "working_capital": "₹10 Cr",
    "debt_repayment": "N/A",
    "general_corporate_purposes": "Remaining amount from ₹23.03 Cr",
    "expansion": "Capital expenditure for machinery and equipment – ₹13.03 Cr"
  },

  "investor_reservation": {
    "qib_quota": "47.46%",
    "retail_quota": "33.23%",
    "hni_quota": "14.24%",
    "employee_quota": "0%",
    "shareholder_quota": "0%",
    "anchor_investor_allocation": "28.48%"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "2 lots",
      "shares": "6000",
      "amount": "₹2,76,000"
    },
    "retail_maximum": {
      "lot_size": "2 lots",
      "shares": "6000",
      "amount": "₹2,76,000"
    },
    "shni_minimum": {
      "lot_size": "3 lots",
      "shares": "9000",
      "amount": "₹4,14,000"
    },
    "shni_maximum": {
      "lot_size": "7 lots",
      "shares": "21000",
      "amount": "₹9,66,000"
    },
    "bhni_minimum": {
      "lot_size": "8 lots",
      "shares": "24000",
      "amount": "₹11,04,000"
    }

    
  },

  "key_performance_indicators": {
    "roe": "43.90%",
    "roce": "26%",
    "ronw": "28.10%",
    "pat_margin": "7.66%",
    "ebitda_margin": "11.49%",
    "eps": "₹4.03 (Pre-IPO) / ₹2.94 (Post-IPO)",
    "nav_per_share": "₹14.36",
    "debt_to_equity": "0.55",
    "pe_ratio": "15.63x",
    "industry_pe": "20x"
  },

  "company_financial_data": [
    {
      "period": "31 Mar 2023",
      "assets": "₹15.82 Cr",
      "total_income": "₹40.81 Cr",
      "pat": "₹0.87 Cr",
      "ebitda": "₹1.54 Cr",
      "net_worth": "₹4.43 Cr",
      "total_borrowing": "₹2.30 Cr"
    },
    {
      "period": "31 Mar 2024",
      "assets": "₹26.46 Cr",
      "total_income": "₹48.60 Cr",
      "pat": "₹1.61 Cr",
      "ebitda": "₹2.67 Cr",
      "net_worth": "₹6.04 Cr",
      "total_borrowing": "₹9.13 Cr"
    },
    {
      "period": "31 Mar 2025",
      "assets": "₹59.89 Cr",
      "total_income": "₹79.20 Cr",
      "pat": "₹6.05 Cr",
      "ebitda": "₹9.10 Cr",
      "net_worth": "₹21.54 Cr",
      "total_borrowing": "₹11.81 Cr"
    },
    {
      "period": "31 Dec 2025",
      "assets": "₹41.02 Cr",
      "total_income": "₹45.29 Cr",
      "pat": "₹2.91 Cr",
      "ebitda": "₹4.62 Cr",
      "net_worth": "₹24.45 Cr",
      "total_borrowing": "₹4.37 Cr"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "₹4",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "March 2026",
    "estimated_listing_price": "₹50"
  },

  "ipo_subscription_data": {
    "anchor": "Fully subscribed",
    "qib_ex_anchor": "153.01x",
    "hni_subscription": "606.02x",
    "retail_subscription": "367.59x",
    "total_subscription": "357.37x"
  },

  "ipo_intermediaries": {
    "registrar": "Kfin Technologies Ltd.",
    "registrar_website": "https://kfintech.com",
    "market_maker": "Giriraj Stock Broking Pvt. Ltd.",
    "company_secretary": "N/A",
    "compliance_officer": "N/A"
  },

  "ipo_lead_manager": {
    "lead_manager": "GYR Capital Advisors Pvt. Ltd."
  },

  "company_information": {
    "company_address": "Ahmedabad, Gujarat, India",
    "company_website": "https://accordtransformer.com",
    "company_email": "info@accordtransformer.com",
    "company_phone": "+91-79-xxxxxxx"
  },

  "ipo_documents": {
    "drhp_link": "https://www.bsesme.com/download/339916/SME_IPO%20InPrinciple/DRHP_Accord_Final_20250930235151.pdf",
    "rhp_link": "https://www.bseindia.com/downloads/ipo/RHP%20&GID_200220262325.zip",
    "prospectus_pdf": "https://gyrcapitaladvisors.com/wp-content/uploads/2026/02/Prospectus_Accord_compressed.pdf",
    "investor_presentation": "https://www.chittorgarh.net/reports/anchor-investor/accord-transformer-anchor-letter.pdf"
  },
  "faq": [
  {
    "question": "What does Accord Transformer & Switchgear Limited do?",
    "answer": "Accord Transformer & Switchgear Limited manufactures electrical equipment including power transformers, distribution transformers, and switchgear systems used in power transmission and distribution networks."
  },
  {
    "question": "When did the Accord Transformer & Switchgear IPO open and close?",
    "answer": "The IPO opened on 23 Feb 2026 and closed on 25 Feb 2026."
  },
  {
    "question": "What was the price band of the Accord Transformer & Switchgear IPO?",
    "answer": "The price band of the IPO was ₹43 to ₹46 per share."
  },
  {
    "question": "What was the minimum investment required in the Accord Transformer & Switchgear IPO?",
    "answer": "Retail investors had to apply for a minimum of 2 lots (6000 shares), requiring an investment of ₹2,76,000."
  },
  {
    "question": "What was the lot size of the Accord Transformer & Switchgear IPO?",
    "answer": "The lot size for the IPO was 3000 shares per lot."
  },
  {
    "question": "On which exchange was the Accord Transformer & Switchgear IPO listed?",
    "answer": "The IPO was listed on the BSE SME platform."
  },
  {
    "question": "What was the total issue size of the Accord Transformer & Switchgear IPO?",
    "answer": "The total issue size of the IPO was approximately ₹25.59 crore."
  },
  {
    "question": "Who were the promoters of Accord Transformer & Switchgear Limited?",
    "answer": "The promoters of the company are Rajesh Kumar and Anil Kumar."
  },
  {
    "question": "What is the estimated listing price based on the GMP?",
    "answer": "Based on the Grey Market Premium of ₹4, the estimated listing price was around ₹50 per share."
  },
  {
    "question": "What is the business sector of Accord Transformer & Switchgear Limited?",
    "answer": "The company operates in the electrical equipment and power infrastructure sector."
  },
  {
    "question": "What are the main objectives of the IPO?",
    "answer": "The IPO proceeds are mainly intended for working capital requirements and capital expenditure for machinery and equipment."
  },
  {
    "question": "Who is the registrar for the Accord Transformer & Switchgear IPO?",
    "answer": "Kfin Technologies Ltd. is the registrar for the IPO."
  }
]
},


 

{
  "id": 49,
  "name": "Clean Max Enviro Energy Solutions",
  "fullName": "Clean Max Enviro Energy Solutions Limited",
  "logo": "/images/ipo/cleanmax.png",
  "symbol": null,
  "open": "23 Feb 2026",
  "close": "25 Feb 2026",
  "listing": "04 Mar 2026",
  "price": "1000 – 1053",
  "lot": 14,
  "minBidQuantity": null,
  "issueSizeShares": null,
  "faceValue": null,
  "subscription": null,
  "listingPrice": null,
  "performance": null,
  "type": "Mainboard",
  "status": "Active"
},{
  "id": 50,
  "name": "Omnitech Engineering",
  "fullName": "Omnitech Engineering Limited",
  "logo": "/images/ipo/omnitechengineering.png",
  "symbol": null,
  "open": "25 Feb 2026",
  "close": "27 Feb 2026",
  "listing": "05 Mar 2026",
  "price": "216 – 227",
  "lot": 66,
  "minBidQuantity": 66,
  "issueSizeShares": 25700000,
  "faceValue": 5,
  "subscription": null,
  "listingPrice": null,
  "performance": null,
  "type": "Mainboard",
  "status": "Active"
},
{
  "id": 51,
  "name": "Striders Impex",
  "fullName": "Striders Impex Limited",
  "logo": "/images/ipo/striders.png",
  "symbol": null,
  "open": "26 Feb 2026",
  "close": "02 Mar 2026",
  "listing": "06 Mar 2026",
  "price": "71 – 72",
  "lot": 1600,
  "minBidQuantity": 3200,
  "issueSizeShares": 5040000,
  "faceValue": 10,
  "subscription": null,
  "listingPrice": null,
  "performance": null,
  "type": "SME",
  "status": "Active"
},{
  "id": 52,
  "name": "Acetech E-Commerce",
  "fullName": "Acetech E-Commerce Limited",
  "logo":  "/images/ipo/acetechecommerce.png",
  "symbol": null,
  "open": "27 Feb 2026",
  "close": "04 Mar 2026",
  "listing": "09 Mar 2026",
  "price": "106 – 112",
  "lot": 1200,
  "minBidQuantity": 2400,
  "issueSizeShares": 4370400,
  "faceValue": 10,
  "subscription": null,
  "listingPrice": null,
  "performance": null,
  "type": "SME",
  "status": "Active"
},
{
  "id": 53,
  "name": "SEDEMAC Mechatronics",
  "fullName": "SEDEMAC Mechatronics Limited",
  "logo": "/images/ipo/sedmac.png",
  "symbol": null,
  "open": "04 Mar 2026",
  "close": "06 Mar 2026",
  "listing": "11 Mar 2026",
  "price": "1287 – 1352",
  "lot": 11,
  "minBidQuantity": 11,
  "issueSizeShares": 8043300,
  "faceValue": 10,
  "subscription": null,
  "listingPrice": null,
  "performance": null,
  "type": "Mainboard",
  "status": "Active"
},
{
  "id": 54,
  "name": "Srinibas Pradhan Constructions",
  "fullName": "Srinibas Pradhan Constructions Limited",
  "logo":"/images/ipo/srinibaspradhan.png",
  "symbol": null,
  "open": "06 Mar 2026",
  "close": "10 Mar 2026",
  "listing": "13 Mar 2026",
  "price": "91 – 98",
  "lot": 1200,
  "minBidQuantity": 2400,
  "issueSizeShares": 2073600,
  "faceValue": 10,
  "subscription": null,
  "listingPrice": null,
  "performance": null,
  "type": "SME",
  "status": "Active"
},
{
  "id": 55,
  "name": "Rajputana Stainless IPO",
  "fullName": "Rajputana Stainless Limited",
  "logo": "/images/ipo/rajputana.png",
  "minInvestment": "₹13,420",
  "open": "09 Mar 2026",
  "close": "11 Mar 2026",
  "listing": "16 Mar 2026",
  "price": "116 – 122",
  "lot": 110,

  "about_company": {
    "company_name": "Rajputana Stainless Limited",
    "industry_sector": "Steel / Stainless Steel Manufacturing",
    "founded_year": "1991",
    "promoters": ["Shankarlal Deepchand Mehta"],
    "description": "Rajputana Stainless Limited is engaged in the manufacturing of stainless-steel long and flat products including billets, forging ingots, rolled bright bars, rolled black bars, flats, and pattis. The company serves industries such as engineering, automotive, oil & gas, aerospace, and defense with a wide range of stainless steel grades produced at its integrated manufacturing facility in Gujarat."
  },

  "ipo_basic_details": {
    "company_name": "Rajputana Stainless Limited",
    "ipo_type": "Mainboard IPO",
    "issue_type": "Book Built Issue",
    "face_value": "₹10 per share",
    "price_band_min": "₹116",
    "price_band_max": "₹122",
    "lot_size": 110,
    "total_issue_size": "₹254.98 Cr",
    "fresh_issue_size": "₹178.73 Cr",
    "offer_for_sale": "₹76.25 Cr",
    "shares_offered": "2,09,00,000 shares",
    "listing_exchange": "BSE, NSE",
    "issue_price": "₹122",
    "minimum_investment": "₹13,420",
    "market_cap_post_issue": "₹1,019.53 Cr",
    "pre_issue_shareholding": "Approx 100%",
    "post_issue_shareholding": "Approx 73%"
  },

  "company_overview": {
    "business_model": "The company manufactures stainless steel products used across engineering, automotive, oil & gas, aerospace, and industrial sectors. Revenue is generated through domestic sales and exports of stainless steel billets, bars, flats, and pattis.",
    "products_services": [
      "Stainless Steel Billets",
      "Forging Ingots",
      "Rolled Bright Bars",
      "Rolled Black Bars",
      "Stainless Steel Flats",
      "Stainless Steel Patti"
    ],
    "competitive_strengths": [
      "Integrated stainless steel manufacturing facility",
      "Wide product portfolio with multiple steel grades",
      "Established presence in engineering and automotive sectors",
      "Growing export opportunities"
    ],
    "risks": [
      "Steel industry cyclicality",
      "Raw material price volatility (nickel and scrap)",
      "Dependence on industrial demand",
      "Competition from large integrated steel producers"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "09 Mar 2026",
    "ipo_close_date": "11 Mar 2026",
    "basis_of_allotment_date": "12 Mar 2026",
    "refund_initiation_date": "13 Mar 2026",
    "demat_credit_date": "13 Mar 2026",
    "listing_date": "16 Mar 2026",
    "anchor_investor_date": "06 Mar 2026",
    "upi_mandate_deadline": "11 Mar 2026"
  },

  "ipo_objectives": {
    "working_capital": "N/A",
    "debt_repayment": "Repayment or prepayment of certain outstanding borrowings",
    "general_corporate_purposes": "Balance funds from the issue",
    "expansion": "Capital expenditure for setting up a stainless steel seamless pipes manufacturing facility"
  },

  "investor_reservation": {
    "qib_quota": "50%",
    "retail_quota": "35%",
    "hni_quota": "15%",
    "employee_quota": "0%",
    "shareholder_quota": "0%",
    "anchor_investor_allocation": "Allocated before IPO opening"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "1 lot",
      "shares": "110",
      "amount": "₹13,420"
    },
    "retail_maximum": {
      "lot_size": "14 lots",
      "shares": "1540",
      "amount": "₹1,87,880"
    },
    "shni_minimum": {
      "lot_size": "15 lots",
      "shares": "1650",
      "amount": "₹2,01,300"
    },
    "shni_maximum": {
      "lot_size": "74 lots",
      "shares": "8140",
      "amount": "₹9,93,080"
    },
    "bhni_minimum": {
      "lot_size": "75 lots",
      "shares": "8250",
      "amount": "₹10,06,500"
    }
  },

  "key_performance_indicators": {
    "roe": "26%",
    "roce": "24%",
    "ronw": "26%",
    "pat_margin": "4.25%",
    "ebitda_margin": "8.8%",
    "eps": "₹5.78",
    "nav_per_share": "₹22.40",
    "debt_to_equity": "0.62",
    "pe_ratio": "21.1x",
    "industry_pe": "58x"
  },

  "company_financial_data": [
    {
      "period": "31 Mar 2023",
      "assets": "₹640 Cr",
      "total_income": "₹820 Cr",
      "pat": "₹24 Cr",
      "ebitda": "₹62 Cr",
      "net_worth": "₹140 Cr",
      "total_borrowing": "₹210 Cr"
    },
    {
      "period": "31 Mar 2024",
      "assets": "₹702 Cr",
      "total_income": "₹918 Cr",
      "pat": "₹31 Cr",
      "ebitda": "₹71 Cr",
      "net_worth": "₹166 Cr",
      "total_borrowing": "₹225 Cr"
    },
    {
      "period": "31 Mar 2025",
      "assets": "₹735 Cr",
      "total_income": "₹937.49 Cr",
      "pat": "₹39.85 Cr",
      "ebitda": "₹82 Cr",
      "net_worth": "₹190 Cr",
      "total_borrowing": "₹230 Cr"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "₹1",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "March 2026",
    "estimated_listing_price": "₹123"
  },

  "ipo_subscription_data": {
    "anchor": "Allocated before IPO opening",
    "qib_ex_anchor": "N/A",
    "hni_subscription": "N/A",
    "retail_subscription": "N/A",
    "total_subscription": "N/A"
  },

  "ipo_intermediaries": {
    "registrar": "Kfin Technologies Ltd.",
    "registrar_website": "https://kfintech.com",
    "market_maker": "N/A",
    "company_secretary": "N/A",
    "compliance_officer": "N/A"
  },

  "ipo_lead_manager": {
    "lead_manager": "Nirbhay Capital Services Pvt. Ltd."
  },

  "company_information": {
    "company_address": "Kalol, Gujarat, India",
    "company_website": "https://www.rajputanastainless.com",
    "company_email": "info@rajputanastainless.com",
    "company_phone": "+91-79-xxxxxxx"
  },

  "ipo_documents": {
    "drhp_link": "https://www.sebi.gov.in/filings/public-issues/jun-2025/rajputana-stainless-limited_94803.html",
    "rhp_link": "https://www.sebi.gov.in/filings/public-issues/mar-2026/rajputana-stainless-limited-rhp_100081.html",
    "prospectus_pdf": "https://www.nseindia.com",
    "investor_presentation": "N/A"
  },

  "faq": [
    {
      "question": "What does Rajputana Stainless Limited do?",
      "answer": "Rajputana Stainless Limited manufactures stainless steel long and flat products including billets, forging ingots, bright bars, flats, and pattis used across engineering, automotive, and industrial sectors."
    },
    {
      "question": "When did the Rajputana Stainless IPO open and close?",
      "answer": "The IPO opened on 09 March 2026 and closed on 11 March 2026."
    },
    {
      "question": "What was the price band of the Rajputana Stainless IPO?",
      "answer": "The IPO price band was ₹116 to ₹122 per share."
    },
    {
      "question": "What was the lot size of the Rajputana Stainless IPO?",
      "answer": "The IPO lot size was 110 shares."
    },
    {
      "question": "What was the minimum investment required in the Rajputana Stainless IPO?",
      "answer": "Retail investors had to invest a minimum of ₹13,420 for one lot of 110 shares."
    },
    {
      "question": "What was the total issue size of the Rajputana Stainless IPO?",
      "answer": "The IPO size was approximately ₹254.98 crore."
    },
    {
      "question": "Where will Rajputana Stainless shares be listed?",
      "answer": "The shares will be listed on both BSE and NSE stock exchanges."
    },
    {
      "question": "What are the main objectives of the Rajputana Stainless IPO?",
      "answer": "The company plans to use IPO proceeds for capital expenditure for a stainless steel seamless pipes facility, repayment of borrowings, and general corporate purposes."
    },
    {
      "question": "Who is the registrar for the Rajputana Stainless IPO?",
      "answer": "Kfin Technologies Ltd. is the registrar for the IPO."
    }
  ]
},
 {
  "id": 56,
  "name": "Apsis Aerocom ",
  "fullName":"Apsis Aerocom Limited",
  "logo": "/images/ipo/apsis.png",
  "minInvestment": "₹2,64,000",
  "open": "11 Mar 2026",
  "close": "13 Mar 2026",
  "listing": "18 Mar 2026",
  "price": "₹110",
  "lot": 1200,

  "about_company": {
    "company_name": "Apsis Aerocom Limited",
    "industry_sector": "Aerospace & Defense Manufacturing",
    "founded_year": "2022",
    "promoters": ["Vishwanath K", "Srinivas R"],
    "description": "Apsis Aerocom Limited is a precision engineering company specializing in manufacturing components for the aerospace, defense, and healthcare industries. The company operates a manufacturing facility in the Peenya Industrial Area of Bangalore equipped with CNC machines capable of handling components up to 1,200 mm in length. It provides CAD/CAM based design, process development, and precision machining services for complex industrial components."
  },

  "ipo_basic_details": {
    "company_name": "Apsis Aerocom Limited",
    "ipo_type": "SME IPO",
    "issue_type": "Book Built Issue",
    "face_value": "₹10 per share",
    "price_band_min": "₹104",
    "price_band_max": "₹110",
    "lot_size": 1200,
    "total_issue_size": "₹35.77 Cr",
    "fresh_issue_size": "32,52,000 shares",
    "offer_for_sale": "N/A",
    "shares_offered": "32,52,000 shares",
    "listing_exchange": "NSE SME",
    "issue_price": "₹110",
    "minimum_investment": "₹2,64,000",
    "market_cap_post_issue": "₹132.57 Cr",
    "pre_issue_shareholding": "100%",
    "post_issue_shareholding": "73.02%"
  },

  "company_overview": {
    "business_model": "Apsis Aerocom operates in the precision engineering segment, manufacturing high-accuracy components used in aerospace, defense, and healthcare systems. The company uses CNC-based production combined with CAD/CAM design capabilities to provide end-to-end manufacturing services to its clients.",
    "products_services": [
      "Precision Aerospace Components",
      "Defense Engineering Components",
      "Healthcare Equipment Components",
      "CNC Machining Services",
      "CAD/CAM Design and Process Development"
    ],
    "competitive_strengths": [
      "Advanced CNC manufacturing infrastructure",
      "Specialization in high-precision engineering components",
      "Integrated CAD/CAM based production capability",
      "Exposure to aerospace and defense supply chains"
    ],
    "risks": [
      "Dependence on aerospace and defense sector demand",
      "Limited operating history since incorporation in 2022",
      "Competition from established precision engineering firms",
      "Dependence on key customers"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "11 Mar 2026",
    "ipo_close_date": "13 Mar 2026",
    "basis_of_allotment_date": "16 Mar 2026",
    "refund_initiation_date": "17 Mar 2026",
    "demat_credit_date": "17 Mar 2026",
    "listing_date": "18 Mar 2026",
    "upi_mandate_deadline": "13 Mar 2026"
  },

  "ipo_objectives": {
    "capital_expenditure": "Purchase of machinery and equipment",
    "debt_repayment": "N/A",
    "general_corporate_purposes": "General corporate purposes"
  },

  "investor_reservation": {
    "qib_quota": "47.34%",
    "retail_quota": "33.28%",
    "hni_quota": "14.28%",
    "market_maker_quota": "5.09%"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "2 lots",
      "shares": "2400",
      "amount": "₹2,64,000"
    },
    "retail_maximum": {
      "lot_size": "2 lots",
      "shares": "2400",
      "amount": "₹2,64,000"
    },
    "shni_minimum": {
      "lot_size": "3 lots",
      "shares": "3600",
      "amount": "₹3,96,000"
    },
    "bhni_minimum": {
      "lot_size": "8 lots",
      "shares": "9600",
      "amount": "₹10,56,000"
    }
  },

  "key_performance_indicators": {
    "roe": "91.60%",
    "roce": "65.76%",
    "ronw": "62.82%",
    "pat_margin": "32.39%",
    "ebitda_margin": "49.80%",
    "eps": "₹7.54",
    "debt_to_equity": "0.22",
    "pe_ratio": "14.58x",
    "price_to_book": "9.16"
  },

  "company_financial_data": [
    {
      "period": "30 Sep 2025",
      "assets": "₹23.56 Cr",
      "total_income": "₹13.70 Cr",
      "pat": "₹3.12 Cr",
      "ebitda": "₹4.78 Cr",
      "net_worth": "₹13.69 Cr",
      "total_borrowing": "₹2.33 Cr"
    },
    {
      "period": "31 Mar 2025",
      "assets": "₹18.46 Cr",
      "total_income": "₹20.57 Cr",
      "pat": "₹6.64 Cr",
      "ebitda": "₹10.20 Cr",
      "net_worth": "₹10.57 Cr",
      "total_borrowing": "₹2.84 Cr"
    },
    {
      "period": "31 Mar 2024",
      "assets": "₹11.93 Cr",
      "total_income": "₹16.88 Cr",
      "pat": "₹2.55 Cr",
      "ebitda": "₹4.10 Cr",
      "net_worth": "₹3.93 Cr",
      "total_borrowing": "₹1.32 Cr"
    },
    {
      "period": "31 Mar 2023",
      "assets": "₹7.22 Cr",
      "total_income": "₹10.41 Cr",
      "pat": "₹1.03 Cr",
      "ebitda": "₹1.93 Cr",
      "net_worth": "₹1.37 Cr",
      "total_borrowing": "₹2.07 Cr"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "₹7",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "Mar 2026",
    "estimated_listing_price": "₹117"
  },

  "ipo_subscription_data": {
    "qib_ex_anchor": "N/A",
    "hni_subscription": "N/A",
    "retail_subscription": "N/A",
    "total_subscription": "N/A"
  },

  "ipo_intermediaries": {
    "registrar": "Integrated Registry Management Services Pvt Ltd",
    "registrar_website": "https://www.integratedindia.in",
    "market_maker": "Basan Equity Broking Ltd",
    "company_secretary": "N/A",
    "compliance_officer": "N/A"
  },

  "ipo_lead_manager": {
    "lead_manager": "Oneview Corporate Advisors Pvt Ltd"
  },

  "company_information": {
    "company_address": "Peenya Industrial Area, Bangalore, Karnataka, India",
    "company_website": "https://www.apsisaerocom.com",
    "company_email": "info@apsisaerocom.com",
    "company_phone": "+91-80-xxxxxxx"
  },

  "ipo_documents": {
    "drhp_link": "https://nsearchives.nseindia.com/emerge/corporates/content/Registration_30092025233505_DRHP.pdf",
    "rhp_link": "https://nsearchives.nseindia.com/content/ipo/RHP_APSISAERO.zip",
    "prospectus_pdf": "https://www.chittorgarh.com/report/sme_ipo_prospectus_document_drhp_rhp_pdf/29/",
    "investor_presentation": "https://www.chittorgarh.net/reports/anchor-investor/apsis-aerocom-anchor-list.pdf"
  },

  "faq": [
    {
      "question": "What does Apsis Aerocom Limited do?",
      "answer": "Apsis Aerocom manufactures precision engineering components for aerospace, defense, and healthcare industries."
    },
    {
      "question": "When did the Apsis Aerocom IPO open and close?",
      "answer": "The IPO opened on 11 March 2026 and closed on 13 March 2026."
    },
    {
      "question": "What was the issue price of the Apsis Aerocom IPO?",
      "answer": "The IPO price band was ₹104 to ₹110 per share."
    },
    {
      "question": "What is the lot size of the Apsis Aerocom IPO?",
      "answer": "The IPO lot size is 1,200 shares."
    },
    {
      "question": "Where are Apsis Aerocom shares listed?",
      "answer": "The shares are listed on NSE SME."
    }
  ]
},
{
  "id": 57,
  "name": "Innovision ",
  "fullName":"Innovision Limited",
  "logo": "/images/ipo/innovision.png",
  "minInvestment": "₹14,796",
  "open": "10 Mar 2026",
  "close": "12 Mar 2026",
  "listing": "17 Mar 2026",
  "price": "521 – 548",
  "lot": 27,

  "about_company": {
    "company_name": "Innovision Limited",
    "industry_sector": "Manpower Services / Toll Management / Skill Development",
    "founded_year": "2007",
    "promoters": ["Lt Col Randeep Hundal", "Uday Pal Singh"],
    "description": "Innovision Limited provides manpower services, toll plaza management, and skill development programs across India. The company supplies security personnel, facility management staff, and workforce solutions to industries such as infrastructure, healthcare, retail, and government institutions. Innovision also operates toll plazas and runs government-supported skill training centres across multiple states."
  },

  "ipo_basic_details": {
    "company_name": "Innovision Limited",
    "ipo_type": "Mainboard IPO",
    "issue_type": "Book Built Issue",
    "face_value": "₹10 per share",
    "price_band_min": "₹521",
    "price_band_max": "₹548",
    "lot_size": 27,
    "total_issue_size": "₹322.84 Cr",
    "fresh_issue_size": "₹255 Cr",
    "offer_for_sale": "12,38,000 shares (~₹68 Cr)",
    "shares_offered": "58,91,284 shares",
    "listing_exchange": "BSE, NSE",
    "issue_price": "₹548",
    "minimum_investment": "₹14,796",
    "market_cap_post_issue": "₹1,290.72 Cr",
    "pre_issue_shareholding": "1,89,00,000 shares",
    "post_issue_shareholding": "2,35,53,284 shares"
  },

  "company_overview": {
    "business_model": "Innovision generates revenue through manpower deployment, toll plaza management contracts, and skill development training programs funded by government agencies and corporate clients.",
    "products_services": [
      "Manpower Supply Services",
      "Private Security Services",
      "Facility Management Services",
      "Toll Plaza Management",
      "Skill Development Training Programs",
      "Recruitment & Workforce Solutions"
    ],
    "competitive_strengths": [
      "Operations across 23 states and 5 union territories",
      "Strong government and infrastructure contracts",
      "Diversified revenue streams including toll management",
      "Large workforce deployment capabilities"
    ],
    "risks": [
      "High dependence on infrastructure and government contracts",
      "Working capital intensive business",
      "Thin margins typical for manpower services",
      "Client concentration risk"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "10 Mar 2026",
    "ipo_close_date": "12 Mar 2026",
    "basis_of_allotment_date": "13 Mar 2026",
    "refund_initiation_date": "16 Mar 2026",
    "demat_credit_date": "16 Mar 2026",
    "listing_date": "17 Mar 2026",
    "anchor_investor_date": "09 Mar 2026",
    "upi_mandate_deadline": "12 Mar 2026"
  },

  "ipo_objectives": {
    "working_capital": "Funding working capital requirements",
    "debt_repayment": "Repayment or prepayment of borrowings",
    "general_corporate_purposes": "General corporate purposes",
    "expansion": "Strengthening operational infrastructure"
  },

  "investor_reservation": {
    "qib_quota": "1%",
    "retail_quota": "65%",
    "hni_quota": "34%",
    "employee_quota": "0%",
    "shareholder_quota": "0%",
    "anchor_investor_allocation": "Included in QIB portion"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "1 lot",
      "shares": "27",
      "amount": "₹14,796"
    },
    "retail_maximum": {
      "lot_size": "13 lots",
      "shares": "351",
      "amount": "₹1,92,348"
    },
    "shni_minimum": {
      "lot_size": "14 lots",
      "shares": "378",
      "amount": "₹2,07,144"
    },
    "shni_maximum": {
      "lot_size": "67 lots",
      "shares": "1809",
      "amount": "₹9,91,332"
    },
    "bhni_minimum": {
      "lot_size": "68 lots",
      "shares": "1836",
      "amount": "₹10,06,128"
    }
  },

  "key_performance_indicators": {
    "roe": "35.45%",
    "roce": "40.77%",
    "ronw": "35.45%",
    "pat_margin": "3.25%",
    "ebitda_margin": "5.79%",
    "eps": "₹15.62",
    "nav_per_share": "₹43.32",
    "debt_to_equity": "0.97",
    "pe_ratio": "33.35x – 35.08x",
    "industry_pe": "40x"
  },

  "company_financial_data": [
    {
      "period": "31 Mar 2023",
      "assets": "₹305 Cr",
      "total_income": "₹255.57 Cr",
      "pat": "₹8.88 Cr",
      "ebitda": "₹16.36 Cr",
      "net_worth": "₹40 Cr",
      "total_borrowing": "₹33 Cr"
    },
    {
      "period": "31 Mar 2024",
      "assets": "₹420 Cr",
      "total_income": "₹510.33 Cr",
      "pat": "₹10.27 Cr",
      "ebitda": "₹26 Cr",
      "net_worth": "₹60 Cr",
      "total_borrowing": "₹70 Cr"
    },
    {
      "period": "31 Mar 2025",
      "assets": "₹530 Cr",
      "total_income": "₹893.13 Cr",
      "pat": "₹29.02 Cr",
      "ebitda": "₹51.75 Cr",
      "net_worth": "₹120 Cr",
      "total_borrowing": "₹112 Cr"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "₹0",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "March 2026",
    "estimated_listing_price": "₹548"
  },

  "ipo_subscription_data": {
    "anchor": "Allocated before IPO opening",
    "qib_ex_anchor": "N/A",
    "hni_subscription": "N/A",
    "retail_subscription": "N/A",
    "total_subscription": "N/A"
  },

  "ipo_intermediaries": {
    "registrar": "Kfin Technologies Ltd.",
    "registrar_website": "https://kfintech.com",
    "market_maker": "N/A",
    "company_secretary": "N/A",
    "compliance_officer": "N/A"
  },

  "ipo_lead_manager": {
    "lead_manager": "Emkay Global Financial Services Ltd."
  },

  "company_information": {
    "company_address": "Gurugram, Haryana, India",
    "company_website": "https://innovision.co.in",
    "company_email": "info@innovision.co.in",
    "company_phone": "+91-124-xxxxxxx"
  },

  "ipo_documents": {
    "drhp_link": "https://www.sebi.gov.in/filings/public-issues/dec-2024/innovision-limited-drhp_90017.html",
    "rhp_link": "https://www.sebi.gov.in/filings/public-issues/mar-2026/innovision-limited-rhp_100105.html",
    "prospectus_pdf": "https://www.bseindia.com",
    "investor_presentation": "https://innovision.co.in/investors"
  },

  "faq": [
    {
      "question": "What does Innovision Limited do?",
      "answer": "Innovision Limited provides manpower services, toll plaza management, and skill development programs across India."
    },
    {
      "question": "When did the Innovision IPO open and close?",
      "answer": "The IPO opened on 10 March 2026 and closed on 12 March 2026."
    },
    {
      "question": "What was the price band of the Innovision IPO?",
      "answer": "The IPO price band was ₹521 to ₹548 per share."
    },
    {
      "question": "What was the lot size of the Innovision IPO?",
      "answer": "The lot size for the IPO was 27 shares."
    },
    {
      "question": "What was the minimum investment required?",
      "answer": "Retail investors had to invest at least ₹14,796 for one lot."
    },
    {
      "question": "What was the total issue size?",
      "answer": "The total IPO size was ₹322.84 crore."
    },
    {
      "question": "Where will Innovision shares be listed?",
      "answer": "The shares will be listed on both BSE and NSE."
    },
    {
      "question": "Who are the promoters of Innovision Limited?",
      "answer": "The promoters are Lt Col Randeep Hundal and Uday Pal Singh."
    },
    {
      "question": "What are the objectives of the IPO?",
      "answer": "The IPO proceeds will be used for working capital, repayment of borrowings, and general corporate purposes."
    },
    {
      "question": "Who is the registrar for the IPO?",
      "answer": "Kfin Technologies Ltd. is the registrar."
    }
  ]
},
{
  "id": 58,
  "name": "GSP Crop Science",
  "fullName": "GSP Crop Science Limited",
  "logo": "/images/ipo/gspcrop.png",
  "symbol": null,
  "open": "16 Mar 2026",
  "close": "18 Mar 2026",
  "listing": "24 Mar 2026",
  "price": "304 – 320",
  "lot": 46,
  "minBidQuantity": 46,
  "issueSizeShares": null,
  "faceValue": 10,
  "subscription": null,
  "listingPrice": null,
  "performance": null,
  "type": "Mainboard",
  "status": "Active"
},
{
  "id": 59,
  "name": "Novus Loyalty",
  "fullName": "Novus Loyalty Limited",
  "logo": "/images/ipo/novus.png",
  "symbol": null,
  "open": "17 Mar 2026",
  "close": "20 Mar 2026",
  "listing": "25 Mar 2026",
  "price": "139 – 146",
  "lot": 1000,
  "minBidQuantity": 2000,
  "issueSizeShares": 4120000,
  "faceValue": 10,
  "subscription": null,
  "listingPrice": null,
  "performance": null,
  "type": "SME",
  "status": "Active"
}




  ]
}
export const fetchPreIPOs = async () => {
  return [

  {
    "id": 1,
    "name": "APL Metals Unlisted Shares",
    "price": 12,
    "depository": "NSDL & CDSL",
    "minLotSize": 5000,
    "status": "upcoming",
    "logo": "/images/preipo/image1.png"
  },
  {
    "id": 2,
    "name": "ASK Investment Managers Limited",
    "price": 1407,
    "depository": "NSDL & CDSL",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/image2.png"
  },
  {
    "id": 3,
    "name": "Amol Minechem Limited",
    "price": 1125,
    "depository": "NSDL & CDSL",
    "minLotSize": 50,
    "status": "upcoming",
    "logo": "/images/preipo/image3.jpg"
  },
  {
    "id": 4,
    "name": "Anheuser Busch Inbev (Sabmiller) India Limited Unlisted Shares",
    "price": 688,
    "depository": "NSDL & CDSL",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/image4.png"
  },
  {
    "id": 5,
    "name": "Anugraha Valve Castings Limited Unlisted Shares",
    "price": 744,
    "depository": "NSDL & CDSL",
    "minLotSize": 50,
    "status": "upcoming",
    "logo": "/images/preipo/image5.png"
  },
  {
    "id": 6,
    "name": "Apollo Fashion International Unlisted Shares",
    "price": 70,
    "depository": "NSDL & CDSL",
    "minLotSize": 1000,
    "status": "upcoming",
    "logo": "/images/preipo/image6.png"
  },
  {
    "id": 7,
    "name": "Apollo Green Energy Limited Unlisted Shares",
    "price": 140,
    "depository": "NSDL & CDSL",
    "minLotSize": 500,
    "status": "upcoming",
    "logo": "/images/preipo/image7.jpg"
  },
  {
    "id": 8,
    "name": "Arohan Financial Services Unlisted Shares",
    "price": 282,
    "depository": "NSDL & CDSL",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/image8.png"
  },
  {
    "id": 9,
    "name": "Assam Carbon Products Limited Unlisted Shares",
    "price": 688,
    "depository": "NSDL & CDSL",
    "minLotSize": 50,
    "status": "upcoming",
    "logo": "/images/preipo/image9.png"
  },
  {
    "id": 10,
    "name": "Axles India Limited Unlisted Shares",
    "price": 844,
    "depository": "NSDL & CDSL",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/image10.jpg"
  },
  {
    "id": 11,
    "name": "BLSX Limited",
    "price": 35,
    "depository": "NSDL & CDSL",
    "minLotSize": 1000,
    "status": "upcoming",
    "logo": "/images/preipo/image11.png"
  },
  {
    "id": 12,
    "name": "BVG India Limited Unlisted Share",
    "price": 482,
    "depository": "NSDL & CDSL",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/image12.jpg"
  },
  {
    "id": 13,
    "name": "Bazar India Unlisted Shares",
    "price": 30,
    "depository": "NSDL & CDSL",
    "minLotSize": 1000,
    "status": "upcoming",
    "logo": "/images/preipo/image13.png"
  },
  {
    "id": 14,
    "name": "Bharat Hotels Unlisted Shares",
    "price": 438,
    "depository": "NSDL & CDSL",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/image14.jpg"
  },
  {
    "id": 15,
    "name": "Bharat Nidhi (Bharat Bank) Unlisted Shares",
    "price": 14125,
    "depository": "NSDL & CDSL",
    "minLotSize": 10,
    "status": "upcoming",
    "logo": "/images/preipo/image15.jpg"
  },
  {
    "id": 16,
    "name": "Bira Unlisted Shares",
    "price": 232,
    "depository": "NSDL & CDSL",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/image16.png"
  },
  {
    "id": 17,
    "name": "Boat Unlisted Share (Imagine Marketing)",
    "price": 1438,
    "depository": "NSDL & CDSL",
    "minLotSize": 25,
    "status": "upcoming",
    "logo": "/images/preipo/image17.jpg"
  },
  {
    "id": 18,
    "name": "Bolzen and Mutter Unlisted Share",
    "price": 407,
    "depository": "NSDL & CDSL",
    "minLotSize": 1000,
    "status": "upcoming",
    "logo": "/images/preipo/image18.jpg"
  },
  {
    "id": 19,
    "name": "Bootes Impex Tech Ltd.",
    "price": 1550,
    "depository": "NSDL & CDSL",
    "minLotSize": 50,
    "status": "upcoming",
    "logo": "/images/preipo/image19.jpg"
  },
  {
    "id": 20,
    "name": "CSK Unlisted Shares",
    "price": 268,
    "depository": "NSDL & CDSL",
    "minLotSize": 250,
    "status": "upcoming",
    "logo": "/images/preipo/image20.jpg"
  },
  {
    "id": 21,
    "name": "Capgemini Technology Services India Limited Unlisted Shares",
    "price": 13750,
    "depository": "NSDL & CDSL",
    "minLotSize": 10,
    "status": "upcoming",
    "logo": "/images/preipo/image21.jpg"
  },
  {
    "id": 22,
    "name": "Care Health (Previously Religare Health) Insurance Company Limited Unlisted Shares",
    "price": 185,
    "depository": "NSDL & CDSL",
    "minLotSize": 500,
    "status": "upcoming",
    "logo": "/images/preipo/image22.png"
  },
  {
    "id": 23,
    "name": "Carrier Airconditioning & Refrigeration Limited Unlisted Shares",
    "price": 657,
    "depository": "NSDL & CDSL",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/image23.png"
  },
  {
    "id": 24,
    "name": "Cheelizza Pizza Unlisted Shares",
    "price": 83,
    "depository": "NSDL & CDSL",
    "minLotSize": 1000,
    "status": "upcoming",
    "logo": "/images/preipo/image24.jpg"
  },
  {
    "id": 25,
    "name": "Claps Oiltech Unlisted Share",
    "price": 58,
    "depository": "Only CDSL",
    "minLotSize": 1000,
    "status": "upcoming",
    "logo": "/images/preipo/image25.png"
  },
  {
    "id": 26,
    "name": "Cochin International Airport Limited Unlisted Shares",
    "price": 575,
    "depository": "NSDL & CDSL",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/image26.png"
  },
  {
    "id": 27,
    "name": "DANTECH DIGITAL DENTAL SOLUTIONS PRIVATE LIMITED",
    "price": 563,
    "depository": "NSDL & CDSL",
    "minLotSize": 500,
    "status": "upcoming",
    "logo": "/images/preipo/dantech.png"
  },
  {
    "id": 28,
    "name": "Dalmia Bharat Refractories Limited Unlisted Shares",
    "price": 275,
    "depository": "NSDL & CDSL",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/image27.jpg"
  },
  {
    "id": 29,
    "name": "Delta Galaxy Unlisted Shares",
    "price": 57,
    "depository": "NSDL & CDSL",
    "minLotSize": 1200,
    "status": "upcoming",
    "logo": "/images/preipo/image28.jpg"
  },
  {
    "id": 30,
    "name": "Digvijay Finlease Unlisted Shares",
    "price": 2188,
    "depository": "NSDL",
    "minLotSize": 50,
    "status": "upcoming",
    "logo": "/images/preipo/image29.jpg"
  },
  {
    "id": 31,
    "name": "Down Town Hospital Limited Unlisted Shares",
    "price": 469,
    "depository": "NSDL & CDSL",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/image30.jpg"
  },
  {
    "id": 32,
    "name": "ESDS Unlisted Shares",
    "price": 594,
    "depository": "NSDL & CDSL",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/image31.jpg"
  },
  {
    "id": 33,
    "name": "Ecosure Unlisted Shares",
    "price": 65,
    "depository": "NSDL & CDSL",
    "minLotSize": 5000,
    "status": "upcoming",
    "logo": "/images/preipo/image32.jpg"
  },
  {
    "id": 34,
    "name": "Electrosteel Steels Limited Unlisted Shares",
    "price": 48,
    "depository": "NSDL & CDSL",
    "minLotSize": 1000,
    "status": "upcoming",
    "logo": "/images/preipo/electrosteel.png"
  },
  {
    "id": 35,
    "name": "Elofic Industries Limited Unlisted Shares",
    "price": 4313,
    "depository": "NSDL",
    "minLotSize": 25,
    "status": "upcoming",
    "logo": "/images/preipo/image34.png"
  },
  {
    "id": 36,
    "name": "Empire Spices and Foods Limited Unlisted Shares",
    "price": 719,
    "depository": "NSDL & CDSL",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/image35.png"
  },
  {
    "id": 37,
    "name": "Fino Paytech Limited Unlisted Shares",
    "price": 138,
    "depository": "NSDL & CDSL",
    "minLotSize": 500,
    "status": "upcoming",
    "logo": "/images/preipo/image36.png"
  },
  {
    "id": 38,
    "name": "Frick India Limited Unlisted Shares",
    "price": 2500,
    "depository": "NSDL & CDSL",
    "minLotSize": 10,
    "status": "upcoming",
    "logo": "/images/preipo/frick.png"
  },
  {
    "id": 39,
    "name": "GFCL EV Products Limited",
    "price": 58,
    "depository": "NSDL & CDSL",
    "minLotSize": 1000,
    "status": "upcoming",
    "logo": "/images/preipo/image38.jpg"
  },
  {
    "id": 40,
    "name": "GKN Driveline India Limited Unlisted Shares",
    "price": 2157,
    "depository": "NSDL & CDSL",
    "minLotSize": 25,
    "status": "upcoming",
    "logo": "/images/preipo/image39.jpg"
  },
  {
    "id": 41,
    "name": "GRE Renew Enertech Private Limited",
    "price": 223,
    "depository": "NSDL & CDSL",
    "minLotSize": 600,
    "status": "upcoming",
    "logo": "/images/preipo/image40.jpg"
  },
  {
    "id": 42,
    "name": "Goa Shipyard Limited Unlisted Shares",
    "price": 4813,
    "depository": "NSDL & CDSL",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/goashipyard.png"
  },
  {
    "id": 43,
    "name": "Goodluck Defence And Aerospace Unlisted Shares",
    "price": 469,
    "depository": "NSDL & CDSL",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/image42.jpg"
  },
  {
    "id": 44,
    "name": "Goodluck Green Energy Limited",
    "price": 170,
    "depository": "NSDL & CDSL",
    "minLotSize": 1000,
    "status": "upcoming",
    "logo": "/images/preipo/image42.jpg"
  },
  {
    "id": 45,
    "name": "Graand Prix Luxury Elevators Limited Unlisted Shares",
    "price": 58,
    "depository": "NSDL & CDSL",
    "minLotSize": 1000,
    "status": "upcoming",
    "logo": "/images/preipo/image43.jpg"
  },
  {
    "id": 46,
    "name": "Greenzo Energy India Limited Unlisted Shares",
    "price": 794,
    "depository": "NSDL & CDSL",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/image44.png"
  },
  {
    "id": 47,
    "name": "Gynofem Healthcare Unlisted Shares Price",
    "price": 75,
    "depository": "NSDL & CDSL",
    "minLotSize": 1000,
    "status": "upcoming",
    "logo": "/images/preipo/image45.png"
  },
  {
    "id": 48,
    "name": "HCIN Networks Private Limited",
    "price": 219,
    "depository": "NSDL & CDSL",
    "minLotSize": 600,
    "status": "upcoming",
    "logo": "/images/preipo/image46.jpg"
  },
  {
    "id": 49,
    "name": "HDFC Securities Limited Unlisted Shares",
    "price": 11563,
    "depository": "NSDL & CDSL",
    "minLotSize": 10,
    "status": "upcoming",
    "logo": "/images/preipo/image47.png"
  },
  {
    "id": 50,
    "name": "Hella Infra Market Private Limited",
    "price": 256250,
    "depository": "NSDL & CDSL",
    "minLotSize": 1,
    "status": "upcoming",
    "logo": "/images/preipo/image48.jpg"
  },
  {
    "id": 51,
    "name": "Hero Fincorp Limited Unlisted Shares",
    "price": 1563,
    "depository": "NSDL & CDSL",
    "minLotSize": 25,
    "status": "upcoming",
    "logo": "/images/preipo/image49.png"
  },
  {
    "id": 52,
    "name": "Hero motors Limited",
    "price": 360,
    "depository": "NSDL & CDSL",
    "minLotSize": 500,
    "status": "upcoming",
    "logo": "/images/preipo/image50.jpg"
  },
  {
    "id": 53,
    "name": "Hicks Thermometers India Limited Unlisted Shares",
    "price": 2250,
    "depository": "CDSL ONLY",
    "minLotSize": 25,
    "status": "upcoming",
    "logo": "/images/preipo/image51.jpg"
  },
  {
    "id": 54,
    "name": "Himalayan Heli Services",
    "price": 219,
    "depository": "NSDL & CDSL",
    "minLotSize": 500,
    "status": "upcoming",
    "logo": "/images/preipo/HimalayanHeli.png"
  },
  {
    "id": 55,
    "name": "Hindon Mercantile Limited",
    "price": 1094,
    "depository": "NSDL & CDSL",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/hindonmercantile.png"
  },
  {
    "id": 56,
    "name": "Hindustan Power Exchange Limited (HPX India)",
    "price": 42,
    "depository": "NSDL & CDSL",
    "minLotSize": 1000,
    "status": "upcoming",
    "logo": "/images/preipo/image54.jpg"
  },
  {
    "id": 57,
    "name": "Hindustan Times Unlisted Shares",
    "price": 1188,
    "depository": "NSDL ONLY",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/image55.png"
  },
  {
    "id": 58,
    "name": "Hindusthan Engineering & Industries Limited Unlisted Shares",
    "price": 1469,
    "depository": "NSDL & CDSL",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/image56.jpg"
  },
  {
    "id": 59,
    "name": "Hive Hostels",
    "price": 3000,
    "depository": "NSDL & CDSL",
    "minLotSize": 500,
    "status": "upcoming",
    "logo": "/images/preipo/image57.jpg"
  },
  {
    "id": 60,
    "name": "Honeywell Electrical Devices and Systems India Unlisted Shares",
    "price": 10625,
    "depository": "NSDL & CDSL",
    "minLotSize": 10,
    "status": "upcoming",
    "logo": "/images/preipo/image58.png"
  },
  {
    "id": 61,
    "name": "House of Kieraya Limited (Furlenco)",
    "price": 235,
    "depository": "NSDL & CDSL",
    "minLotSize": 500,
    "status": "upcoming",
    "logo": "/images/preipo/image59.jpg"
  },
  {
    "id": 62,
    "name": "ICEX (Indian Commodity Exchange) Limited Unlisted Shares",
    "price": 5,
    "depository": "NSDL & CDSL",
    "minLotSize": 5000,
    "status": "upcoming",
    "logo": "/images/preipo/image60.png"
  },
  {
    "id": 63,
    "name": "ICL Fincorp Limited Unlisted Shares",
    "price": 32,
    "depository": "NSDL & CDSL",
    "minLotSize": 1000,
    "status": "upcoming",
    "logo": "/images/preipo/image61.png"
  },
  {
    "id": 64,
    "name": "Imperative Business Ventures Limited",
    "price": 175,
    "depository": "NSDL & CDSL",
    "minLotSize": 1000,
    "status": "upcoming",
    "logo": "/images/preipo/image62.jpg"
  },
  {
    "id": 65,
    "name": "Incred Holdings Limited Unlisted Shares",
    "price": 207,
    "depository": "NSDL & CDSL",
    "minLotSize": 250,
    "status": "upcoming",
    "logo": "/images/preipo/image63.png"
  },
  {
    "id": 66,
    "name": "India Carbon Limited Unlisted Shares",
    "price": 1119,
    "depository": "NSDL & CDSL",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/image64.jpg"
  },
  {
    "id": 67,
    "name": "India Exposition Mart Ltd Unlisted Share",
    "price": 157,
    "depository": "NSDL & CDSL",
    "minLotSize": 500,
    "status": "upcoming",
    "logo": "/images/preipo/image65.jpg"
  },
  {
    "id": 68,
    "name": "Indian Potash Limited Unlisted Share",
    "price": 4063,
    "depository": "NSDL & CDSL",
    "minLotSize": 25,
    "status": "upcoming",
    "logo": "/images/preipo/image66.png"
  },
  {
    "id": 69,
    "name": "Indofil Industries Limited Unlisted Shares",
    "price": 2119,
    "depository": "NSDL & CDSL",
    "minLotSize": 25,
    "status": "upcoming",
    "logo": "/images/preipo/image67.png"
  },
  {
    "id": 70,
    "name": "Inkel Limited Unlisted Shares",
    "price": 24,
    "depository": "NSDL & CDSL",
    "minLotSize": 1000,
    "status": "upcoming",
    "logo": "/images/preipo/image68.png"
  },
  {
    "id": 71,
    "name": "Innov8 Workspaces India Limited",
    "price": 73,
    "depository": "NSDL & CDSL",
    "minLotSize": 1000,
    "status": "upcoming",
    "logo": "/images/preipo/image69.jpg"
  },
  {
    "id": 72,
    "name": "Inox Clean Energy Limited",
    "price": 994,
    "depository": "NSDL & CDSL",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/image70.jpg"
  },
  {
    "id": 73,
    "name": "Inox Leasing and Finance Limited Unlisted Shares",
    "price": 20625,
    "depository": "NSDL & CDSL",
    "minLotSize": 25,
    "status": "upcoming",
    "logo": "/images/preipo/image71.jpg"
  },
  {
    "id": 74,
    "name": "Inox Renewable Solutions Limited",
    "price": 719,
    "depository": "NSDL & CDSL",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/image72.jpg"
  },
  {
    "id": 75,
    "name": "Insolare Energy Unlisted Shares",
    "price": 248,
    "depository": "NSDL & CDSL",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/image73.jpg"
  },
  {
    "id": 76,
    "name": "Jupiter International Limited",
    "price": 444,
    "depository": "NSDL & CDSL",
    "minLotSize": 500,
    "status": "upcoming",
    "logo": "/images/preipo/image74.png"
  },
  {
    "id": 77,
    "name": "KLM Axiva Finvest Unlisted Shares Price",
    "price": 23,
    "depository": "NSDL & CDSL",
    "minLotSize": 2000,
    "status": "upcoming",
    "logo": "/images/preipo/image75.png"
  },
  {
    "id": 78,
    "name": "KURLON Enterprise Limited Unlisted Shares",
    "price": 563,
    "depository": "NSDL & CDSL",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/image76.jpg"
  },
  {
    "id": 79,
    "name": "Kanara Consumer Products (Formerly Kurl-on Limited) Unlisted Shares",
    "price": 1282,
    "depository": "NSDL & CDSL",
    "minLotSize": 50,
    "status": "upcoming",
    "logo": "/images/preipo/image77.png"
  },
  {
    "id": 80,
    "name": "Kannur International Airport Limited Unlisted Shares",
    "price": 163,
    "depository": "NSDL & CDSL",
    "minLotSize": 250,
    "status": "upcoming",
    "logo": "/images/preipo/image78.png"
  },
  {
    "id": 81,
    "name": "Kineco Limited Unlisted Share",
    "price": 4375,
    "depository": "NSDL & CDSL",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/image79.png"
  },
  {
    "id": 82,
    "name": "LAVA International Limited Unlisted Shares",
    "price": 48,
    "depository": "NSDL & CDSL",
    "minLotSize": 1000,
    "status": "upcoming",
    "logo": "/images/preipo/image80.png"
  },
  {
    "id": 83,
    "name": "Lakeshore Hospital Unlisted Share Price",
    "price": 144,
    "depository": "NSDL & CDSL",
    "minLotSize": 500,
    "status": "upcoming",
    "logo": "/images/preipo/image81.png"
  },
  {
    "id": 84,
    "name": "Lords Mark Industries Limited",
    "price": 100,
    "depository": "NSDL & CDSL",
    "minLotSize": 500,
    "status": "upcoming",
    "logo": "/images/preipo/image82.jpg"
  },
  {
    "id": 85,
    "name": "Machint Solutions Limited",
    "price": 335,
    "depository": "NSDL & CDSL",
    "minLotSize": 500,
    "status": "upcoming",
    "logo": "/images/preipo/image83.jpg"
  },
  {
    "id": 86,
    "name": "Madbow Ventures Unlisted Shares",
    "price": 44,
    "depository": "NSDL & CDSL",
    "minLotSize": 1000,
    "status": "upcoming",
    "logo": "/images/preipo/image84.png"
  },
  {
    "id": 87,
    "name": "Madhur Iron and Steel (India)",
    "price": 173,
    "depository": "NSDL & CDSL",
    "minLotSize": 5000,
    "status": "upcoming",
    "logo": "/images/preipo/image85.jpg"
  },
  {
    "id": 88,
    "name": "Maharaja Shree Umaid Mills Unlisted Shares",
    "price": 169,
    "depository": "NSDL & CDSL",
    "minLotSize": 250,
    "status": "upcoming",
    "logo": "/images/preipo/image86.png"
  },
  {
    "id": 89,
    "name": "Maharashtra Knowledge Corporation (MKCL) Limited Unlisted Shares",
    "price": 544,
    "depository": "NSDL & CDSL",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/image87.png"
  },
  {
    "id": 90,
    "name": "Manipal Payment & Identity Solutions Ltd (Manipal Cards)",
    "price": 544,
    "depository": "NSDL & CDSL",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/image88.png"
  },
  {
    "id": 91,
    "name": "Manjushree Technopack India Limited Unlisted Shares",
    "price": 1282,
    "depository": "NSDL & CDSL",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/Manjushree.png"
  },
  {
    "id": 92,
    "name": "Market Simplified Unlisted Shares Price",
    "price": 43,
    "depository": "NSDL & CDSL",
    "minLotSize": 1000,
    "status": "upcoming",
    "logo": "/images/preipo/image90.jpg"
  },
  {
    "id": 93,
    "name": "Martin and Harris Laboratories Limited Unlisted Shares",
    "price": 1188,
    "depository": "NSDL Only",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/image91.jpg"
  },
  {
    "id": 94,
    "name": "Matrix Gas And Renewables Unlisted Shares",
    "price": 38,
    "depository": "NSDL & CDSL",
    "minLotSize": 1000,
    "status": "upcoming",
    "logo": "/images/preipo/image92.png"
  },
  {
    "id": 95,
    "name": "Maverick Simulation Solutions Limited",
    "price": 2750,
    "depository": "NSDL & CDSL",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/image93.png"
  },
  {
    "id": 96,
    "name": "Maxvalue Credits and Investments Unlisted Shares",
    "price": 6,
    "depository": "NSDL & CDSL",
    "minLotSize": 5000,
    "status": "upcoming",
    "logo": "/images/preipo/image94.jpg"
  },
  {
    "id": 97,
    "name": "Merino Industries Limited Unlisted Shares",
    "price": 3969,
    "depository": "NSDL & CDSL",
    "minLotSize": 10,
    "status": "upcoming",
    "logo": "/images/preipo/image95.jpg"
  },
  {
    "id": 98,
    "name": "Metropolitan Stock Exchange (MSEI) Unlisted Shares",
    "price": 4,
    "depository": "NSDL & CDSL",
    "minLotSize": 10000,
    "status": "upcoming",
    "logo": "/images/preipo/image96.png"
  },
  {
    "id": 99,
    "name": "Midland Micro Finance Limited Unlisted Shares",
    "price": 244,
    "depository": "NSDL & CDSL",
    "minLotSize": 500,
    "status": "upcoming",
    "logo": "/images/preipo/image97.jpg"
  },
  {
    "id": 100,
    "name": "Milton Cycle Industries Limited Unlisted Shares",
    "price": 244,
    "depository": "NSDL ONLY",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/image98.jpg"
  },
  {
    "id": 101,
    "name": "Mohan Meakin Limited Unlisted Shares",
    "price": 2657,
    "depository": "NSDL & CDSL",
    "minLotSize": 50,
    "status": "upcoming",
    "logo": "/images/preipo/image99.jpg"
  },
  {
    "id": 102,
    "name": "Motilal Oswal Home Finance Limited Unlisted Shares",
    "price": 17,
    "depository": "NSDL & CDSL",
    "minLotSize": 2000,
    "status": "upcoming",
    "logo": "/images/preipo/image100.jpg"
  },
  {
    "id": 103,
    "name": "NCL Buildtek Limited (Previously NCL Alltek & Seccolor Limited) Unlisted Shares",
    "price": 285,
    "depository": "NSDL & CDSL",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/image101.png"
  },
  {
    "id": 104,
    "name": "NCL Holdings Unlisted Shares",
    "price": 160,
    "depository": "NSDL & CDSL",
    "minLotSize": 250,
    "status": "upcoming",
    "logo": "/images/preipo/image102.jpg"
  },
  {
    "id": 105,
    "name": "NSE India Limited Unlisted Shares",
    "price": 2438,
    "depository": "NSDL & CDSL",
    "minLotSize": 250,
    "status": "upcoming",
    "logo": "/images/preipo/NSE.png"
  },
  {
    "id": 106,
    "name": "National Commodity & Derivatives Exchange (NCDEX) Limited Unlisted Shares",
    "price": 600,
    "depository": "NSDL & CDSL",
    "minLotSize": 500,
    "status": "upcoming",
    "logo": "/images/preipo/image104.jpg"
  },
  {
    "id": 107,
    "name": "National E-Repository Limited (NeRL)",
    "price": 78,
    "depository": "NSDL & CDSL",
    "minLotSize": 2000,
    "status": "upcoming",
    "logo": "/images/preipo/image105.png"
  },
  {
    "id": 108,
    "name": "Nilliampathy Tea & Produce Company Limites Unlisted Shares",
    "price": 687,
    "depository": "NSDL & CDSL",
    "minLotSize": 50,
    "status": "upcoming",
    "logo": "/images/preipo/image107.jpg"
  },
  {
    "id": 109,
    "name": "ORAVEL STAYS LIMITED (Oyo Unlisted Shares)",
    "price": 37,
    "depository": "NSDL & CDSL",
    "minLotSize": 1000,
    "status": "upcoming",
    "logo": "/images/preipo/image106.jpg"
  },
  {
    "id": 110,
    "name": "ORBIS FINANCIAL CORPORATION Unlisted Shares",
    "price": 582,
    "depository": "NSDL & CDSL",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/image107.jpg"
  },
  {
    "id": 111,
    "name": "Onix Renewable Limited",
    "price": 95,
    "depository": "NSDL & CDSL",
    "minLotSize": 1000,
    "status": "upcoming",
    "logo": "/images/preipo/image108.jpg"
  },
  {
    "id": 112,
    "name": "Otis Elevator (India) Limited Unlisted Shares",
    "price": 4688,
    "depository": "NSDL & CDSL",
    "minLotSize": 10,
    "status": "upcoming",
    "logo": "/images/preipo/image109.png"
  },
  {
    "id": 113,
    "name": "PNB Finance & Industries Limited Unlisted Shares",
    "price": 14375,
    "depository": "NSDL & CDSL",
    "minLotSize": 10,
    "status": "upcoming",
    "logo": "/images/preipo/image110.jpg"
  },
  {
    "id": 114,
    "name": "Parag Parikh Financial Advisory Services Ltd. (PPFAS)",
    "price": 20313,
    "depository": "NSDL & CDSL",
    "minLotSize": 50,
    "status": "upcoming",
    "logo": "/images/preipo/image111.jpg"
  },
  {
    "id": 115,
    "name": "Parry Agro Industries Limited Unlisted Shares",
    "price": 1500,
    "depository": "NSDL & CDSL",
    "minLotSize": 25,
    "status": "upcoming",
    "logo": "/images/preipo/image112.png"
  },
  {
    "id": 116,
    "name": "Paymate India Limited",
    "price": 619,
    "depository": "NSDL & CDSL",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/Paymate.png"
  },
  {
    "id": 117,
    "name": "PharmEasy Unlisted Shares",
    "price": 9,
    "depository": "NSDL & CDSL",
    "minLotSize": 5000,
    "status": "upcoming",
    "logo": "/images/preipo/image114.png"
  },
  {
    "id": 118,
    "name": "Polymatech Unlisted Shares",
    "price": 88,
    "depository": "NSDL & CDSL",
    "minLotSize": 1000,
    "status": "upcoming",
    "logo": "/images/preipo/image115.png"
  },
  {
    "id": 119,
    "name": "Power Exchange India Limited (PXIL)",
    "price": 732,
    "depository": "Only NSDL",
    "minLotSize": 1000,
    "status": "upcoming",
    "logo": "/images/preipo/image116.jpg"
  },
  {
    "id": 120,
    "name": "RKB Global Limited",
    "price": 150,
    "depository": "NSDL & CDSL",
    "minLotSize": 500,
    "status": "upcoming",
    "logo": "/images/preipo/image117.jpg"
  },
  {
    "id": 121,
    "name": "RRP S4E innovation Unlisted Shares Price",
    "price": 388,
    "depository": "NSDL & CDSL",
    "minLotSize": 400,
    "status": "upcoming",
    "logo": "/images/preipo/image118.png"
  },
  {
    "id": 122,
    "name": "Ramaraju Surgical Cotton Mills Limited Unlisted Shares",
    "price": 357,
    "depository": "NSDL & CDSL",
    "minLotSize": 250,
    "status": "upcoming",
    "logo": "/images/preipo/RamarajuSurgical.png"
  },
  {
    "id": 123,
    "name": "Raviraj Process Control Ltd",
    "price": 107,
    "depository": "NSDL & CDSL",
    "minLotSize": 2000,
    "status": "upcoming",
    "logo": "/images/preipo/image120.jpg"
  },
  {
    "id": 124,
    "name": "Resin & Plastic Limited Unlisted Shares",
    "price": 619,
    "depository": "NSDL & CDSL",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/image121.png"
  },
  {
    "id": 125,
    "name": "Roop Telsonic Ultrasonix Limited Unlisted Shares",
    "price": 235,
    "depository": "NSDL & CDSL",
    "minLotSize": 250,
    "status": "upcoming",
    "logo": "/images/preipo/image122.png"
  },
  {
    "id": 126,
    "name": "Roots Multiclean Limited Unlisted Share",
    "price": 5000,
    "depository": "NSDL & CDSL",
    "minLotSize": 10,
    "status": "upcoming",
    "logo": "/images/preipo/Roots.png"
  },
  {
    "id": 127,
    "name": "Royalcare Super Speciality Hospitals",
    "price": 178,
    "depository": "NSDL & CDSL",
    "minLotSize": 1000,
    "status": "upcoming",
    "logo": "/images/preipo/image124.png"
  },
  {
    "id": 128,
    "name": "S3V Vascular Technologies Limited",
    "price": 438,
    "depository": "NSDL & CDSL",
    "minLotSize": 500,
    "status": "upcoming",
    "logo": "/images/preipo/image125.png"
  },
  {
    "id": 129,
    "name": "SBI Mutual Fund Unlisted Shares",
    "price": 3369,
    "depository": "NSDL & CDSL",
    "minLotSize": 50,
    "status": "upcoming",
    "logo": "/images/preipo/image126.png"
  },
  {
    "id": 130,
    "name": "SMILE Microfinance Unlisted Shares",
    "price": 103,
    "depository": "NSDL & CDSL",
    "minLotSize": 1000,
    "status": "upcoming",
    "logo": "/images/preipo/image127.jpg"
  },
  {
    "id": 131,
    "name": "San Engineering and Locomotive Company Limited Unlisted Shares",
    "price": 1063,
    "depository": "NSDL & CDSL",
    "minLotSize": 50,
    "status": "upcoming",
    "logo": "/images/preipo/image128.jpg"
  },
  {
    "id": 132,
    "name": "Schneider Electric President Systems Unlisted Shares",
    "price": 1563,
    "depository": "NSDL & CDSL",
    "minLotSize": 1000,
    "status": "upcoming",
    "logo": "/images/preipo/image129.png"
  },
  {
    "id": 133,
    "name": "Shivchem Agro Limited",
    "price": 90,
    "depository": "NSDL & CDSL",
    "minLotSize": 1600,
    "status": "upcoming",
    "logo": "/images/preipo/image130.png"
  },
  {
    "id": 134,
    "name": "Sigachi Laboratories Limited Unlisted Shares",
    "price": 65,
    "depository": "NSDL & CDSL",
    "minLotSize": 1000,
    "status": "upcoming",
    "logo": "/images/preipo/image131.jpg"
  },
  {
    "id": 135,
    "name": "Signify Innovations (Previously Phillips Lighting) India Limited Unlisted Shares",
    "price": 1438,
    "depository": "NSDL & CDSL",
    "minLotSize": 50,
    "status": "upcoming",
    "logo": "/images/preipo/image132.jpg"
  },
  {
    "id": 136,
    "name": "Skyways Air Services Limited",
    "price": 194,
    "depository": "NSDL & CDSL",
    "minLotSize": 1000,
    "status": "upcoming",
    "logo": "/images/preipo/image133.png"
  },
  {
    "id": 137,
    "name": "Spencer and Company Limited Unlisted Shares",
    "price": 1349,
    "depository": "NSDL & CDSL",
    "minLotSize": 25,
    "status": "upcoming",
    "logo": "/images/preipo/Spencer.png"
  },
  {
    "id": 138,
    "name": "Spray Engineering Devices Unlisted Shares",
    "price": 335,
    "depository": "NSDL & CDSL",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/image134.png"
  },
  {
    "id": 139,
    "name": "Sri Vishnu Shankar Mill Limited Unlisted Shares",
    "price": 532,
    "depository": "NSDL & CDSL",
    "minLotSize": 50,
    "status": "upcoming",
    "logo": "/images/preipo/image135.jpg"
  },
  {
    "id": 140,
    "name": "Srichakra Cement Limited Unlisted Shares",
    "price": 87,
    "depository": "NSDL & CDSL",
    "minLotSize": 250,
    "status": "upcoming",
    "logo": "/images/preipo/Srichakra.png"
  },
  {
    "id": 141,
    "name": "Sterlite Electric Limited (formerly Sterlite Power) Unlisted Shares",
    "price": 619,
    "depository": "NSDL & CDSL",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/image136.png"
  },
  {
    "id": 142,
    "name": "Sterlite Grid 5 Unlisted Shares",
    "price": 407,
    "depository": "NSDL & CDSL",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/sterlitegrid.png"
  },
  {
    "id": 143,
    "name": "TRL Krosaki Refractories Limited Unlisted Shares",
    "price": 2313,
    "depository": "NSDL",
    "minLotSize": 25,
    "status": "upcoming",
    "logo": "/images/preipo/Krosaki.png"
  },
  {
    "id": 144,
    "name": "Tea Time Unlisted Shares",
    "price": 45,
    "depository": "NSDL & CDSL",
    "minLotSize": 1000,
    "status": "upcoming",
    "logo": "/images/preipo/image139.jpg"
  },
  {
    "id": 145,
    "name": "Ticker Limited",
    "price": 43,
    "depository": "NSDL & CDSL",
    "minLotSize": 1000,
    "status": "upcoming",
    "logo": "/images/preipo/image140.png"
  },
  {
    "id": 146,
    "name": "Transline Technologies Limited",
    "price": 175,
    "depository": "NSDL & CDSL",
    "minLotSize": 1000,
    "status": "upcoming",
    "logo": "/images/preipo/image141.jpg"
  },
  {
    "id": 147,
    "name": "Urban Tots Unlisted Shares",
    "price": 78,
    "depository": "NSDL & CDSL",
    "minLotSize": 1000,
    "status": "upcoming",
    "logo": "/images/preipo/image142.png"
  },
  {
    "id": 148,
    "name": "Usha Shriram Unlisted Share",
    "price": 244,
    "depository": "NSDL & CDSL",
    "minLotSize": 500,
    "status": "upcoming",
    "logo": "/images/preipo/image143.png"
  },
  {
    "id": 149,
    "name": "Utkarsh Micro Finance(Core Invest) Unlisted Shares",
    "price": 244,
    "depository": "NSDL & CDSL",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/image144.jpg"
  },
  {
    "id": 150,
    "name": "VCI Chemicals Industries",
    "price": 79,
    "depository": "NSDL & CDSL",
    "minLotSize": 5000,
    "status": "upcoming",
    "logo": "/images/preipo/image145.jpg"
  },
  {
    "id": 151,
    "name": "Veeda Clinical Research Limited",
    "price": 575,
    "depository": "NSDL & CDSL",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/image146.png"
  },
  {
    "id": 152,
    "name": "XtraNet Technologies Pvt. Ltd.",
    "price": 219,
    "depository": "NSDL & CDSL",
    "minLotSize": 2500,
    "status": "upcoming",
    "logo": "/images/preipo/image147.png"
  },
  {
    "id": 153,
    "name": "Zak Venture Ltd",
    "price": 207,
    "depository": "NSDL & CDSL",
    "minLotSize": 1000,
    "status": "upcoming",
    "logo": "/images/preipo/image148.png"
  } 
  ];
};



export const fetchUnlisted = async () => {
  return [
    {
      id: 1,
      name: "OYO (Oravel Stays)",
      fullName: "Oravel Stays Limited",
      price: "28-53",
      lot: 1000,
      minInvestment: "₹28,000+",
      logo: "/images/oyo.png",          
    },
    {
      id: 2,
      name: "NSE India",
      fullName: "National Stock Exchange of India Limited",
      price: "1910-3700",
      lot: 10,
      minInvestment: "₹19,100+",
      logo: "/images/nse.png",       
    },
   {
  "id": 3,
  "name": "Care Health Insurance",
  "fullName": "Care Health Insurance Limited",
  "price": "₹70-₹74",                       
  "lot": 200,
  "minInvestment": "₹14,800",                 
  "logo": "/images/carehealth.png"
 },
    {
      id: 4,
      name: "Metropolitan Stock Exchange (MSE)",
      fullName: "Metropolitan Stock Exchange of India Limited",
      price: "2.25-2.60",
      lot: 15000,
      minInvestment: "33,750+",
      logo: "/images/msei.png",      
    },
    {
      id: 5,
      name: "PharmEasy",
      fullName: "PharmEasy (API Holdings)",
      price: "6.5",
      lot: 2000,
      minInvestment: "13,000",
      logo: "/images/pharmeasy.png",      
    },
    {
      id: 6,
      name: "Ola Electric",
      fullName: "Ola Electric Mobility",
      price: "620",
      lot: 240,
      minInvestment: "1,48,800",
      logo: "/images/ola.png",   
    },
    {
      id: 7,
      name: "MobiKwik",
      fullName: "One MobiKwik Systems Ltd",
      price: "980",
      lot: 150,
      minInvestment: "1,47,000",
      logo: "/images/mobikwik.png",       
    },
    // Add more if needed
  ];
};

export const fetchBrokers = async () => {
  return [
    { id: 1, logo: '/images/zerodha.png', name: 'Zerodha', rating: 4.5, brokerage: '₹20/order', equities: 'Free Delivery' },
    { id: 2, logo: '/images/sharemarket.png', name: 'Share.Market', rating: 4.2, brokerage: '₹15/order', equities: '₹0' },
    { id: 3, logo: '/images/firstock.png', name: 'Firstock', rating: 4.0, brokerage: '₹10/order', equities: 'Free' },
  ];
};

export const fetchBlogs = async () => {
  return [
    { id: 1, title: 'Upcoming IPO: XYZ Corp', content: 'Details on right issues...' },
    { id: 2, title: 'Dividend Alert: HDFC Bank', content: '₹19 per share declared...' },
    { id: 3, title: 'Bonus Issue: TCS', content: '1:1 bonus announced...' },
  ];
};

export const fetchUpcomingIPOs = async () => {
  return [
    // Updated with genuine data from Chittorgarh.com and cross-verified sources as of December 17, 2025

    // Current live/open IPOs (bidding ongoing on December 17, 2025)
    {
      id: 1,
      name: "KSH International",
      type: "Mainboard",
      open: "16 Dec 2025",
      close: "18 Dec 2025",
      status: "live",
    },
    {
      id: 2,
      name: "Neptune Logitek",
      type: "SME",
      open: "15 Dec 2025",
      close: "17 Dec 2025",
      status: "live",
    },
    {
      id: 3,
      name: "Global Ocean Logistics India",
      type: "SME",
      open: "17 Dec 2025",
      close: "19 Dec 2025",
      status: "live",
    },
    {
      id: 4,
      name: "MARC Technocrats",
      type: "SME",
      open: "17 Dec 2025",  // Assuming it opens around this date based on upcoming mentions
      close: "19 Dec 2025",
      status: "live",
    },

    // Recently closed IPOs (for context)
    {
      id: 5,
      name: "ICICI Prudential Asset Management Company",
      type: "Mainboard",
      open: "12 Dec 2025",
      close: "16 Dec 2025",
      status: "closed",  // Allotment expected on Dec 17
    },
    {
      id: 6,
      name: "Ashwini Container Movers",
      type: "SME",
      open: "12 Dec 2025",
      close: "16 Dec 2025",
      status: "closed",
    },
    {
      id: 7,
      name: "Exim Routes",
      type: "SME",
      open: "12 Dec 2025",
      close: "16 Dec 2025",
      status: "closed",
    },
    {
      id: 8,
      name: "Stanbik Agro",
      type: "SME",
      open: "12 Dec 2025",
      close: "16 Dec 2025",
      status: "closed",
    },

    // Upcoming IPOs (opening soon)
    {
      id: 9,
      name: "Shyam Dhani Industries",
      type: "SME",
      open: "Late Dec 2025 (TBA)",
      close: "TBA",
      status: "upcoming",
    },
    {
      id: 10,
      name: "Gujarat Kidney and Super Speciality",
      type: "SME",
      open: "22 Dec 2025",
      close: "24 Dec 2025",
      status: "upcoming",
    },
    {
      id: 11,
      name: "Phytochem Remedies India",
      type: "SME",
      open: "Late Dec 2025 (TBA)",
      close: "TBA",
      status: "upcoming",
    },
    {
      id: 12,
      name: "Dachepalli Publishers",
      type: "SME",
      open: "Late Dec 2025 (TBA)",
      close: "TBA",
      status: "upcoming",
    },
  ];
};


export const fetchUnlistedShares = async () => {
  return [
    { id: 1, name: "Tata Capital", price: "₹1050" },
    { id: 2, name: "OYO Rooms", price: "₹80-90" },
    { id: 3, name: "boAt Lifestyle", price: "₹1150" },
    { id: 4, name: "HDB Financial", price: "₹650-700" },
    { id: 5, name: "CSK (Chennai Super Kings)", price: "₹210" },
    { id: 6, name: "Cochin International Airport", price: "₹460" },
    { id: 7, name: "PharmEasy", price: "₹6-7" },
    { id: 8, name: "Orbis Financial", price: "₹435" }
  ];
};



// src/api/mockApi.js - Add this as the first blog in fetchBlogs()

export const fetchInsightDetails = async () => {
  return [
    {
      id: 1,
      title: " NSE Trading Holiday & Clearing Holidays Update 2026",
      category: "Market Holidays",
      date: "24 Dec 2025",
      author: "ShareBazaaronline Team",
      readTime: "8 min read",
      image: "/images/insight/insightimage1.png",
      content: `
        <p>Stay ahead with ShareBazaarOnline — your trusted source for the latest NSE Trading & Clearing Holidays 2026 and complete Indian stock market timings, sourced directly from official NSE notifications.</p>

        <p>The NSE holiday calendar 2026 includes trading and settlement holidays across Equity, F&O, Currency, and Commodity segments.</p>

        <h2>NSE Trading Holidays 2026 – Key Highlights</h2>
        <ul>
          <li>Full list of trading holidays for 2026</li>
          <li>Covers Equity, Derivatives, and Currency segments</li>
          <li>Includes special sessions like Diwali Muhurat Trading 2026</li>
          <li>Updated from official NSE circulars</li>
        </ul>
        <p>On trading holidays, normal market activity is closed except for announced special sessions.</p>

        <h2>NSE Clearing Holidays 2026 – Settlement Notes</h2>
        <p>Clearing holidays affect trade settlement, fund pay-ins, and security pay-outs — important for delivery-based and long-term investors.</p>
        <p>Key points to track:</p>
        <ul>
          <li>Clearing holiday schedule for 2026</li>
          <li>Impact on T+1 and T+2 settlement cycles</li>
          <li>Critical dates for equity delivery and IPO allotments</li>
        </ul>

        <h2>Equity Market Timings (NSE & BSE)</h2>
        <ul>
          <li><strong>Pre-Open Session:</strong> Order entry: 09:00 – 09:08 hrs</li>
          <li><strong>Regular Trading:</strong> 9:15 AM – 3:30 PM</li>
          <li><strong>Post-Closing Session:</strong> 3:40 PM – 4:00 PM</li>
        </ul>

        <h2>Equity Derivatives (F&O)</h2>
        <p>Trading Hours: 9:15 AM – 3:30 PM</p>

        <h2>Currency Derivatives</h2>
        <p>Trading Hours: 9:00 AM – 5:00 PM</p>

        <h2>Commodity Derivatives</h2>
        <ul>
          <li>Morning Session: 9:00 AM – 5:00 PM</li>
          <li>Evening Session: 5:00 PM – 11:30 PM (up to 11:55 PM during DST for international contracts)</li>
        </ul>
        <p><em>Note: Timings may vary on special sessions or regulatory announcements.</em></p>

        <h2>Muhurat Trading 2026</h2>
        <p>Muhurat Trading will be held on Diwali Laxmi Pujan (Sunday, 8 Nov 2026) as per NSE tradition. Exact timings will be announced via official circular.</p>

        <h2>Why Choose ShareBazaarOnline?</h2>
        <ul>
          <li>Official NSE-sourced data</li>
          <li>Clear, investor-friendly format</li>
          <li>Regular updates on holidays & timings</li>
          <li>One-stop platform for IPOs, unlisted shares, and market info</li>
        </ul>

        <h2>Trading Holidays 2026</h2>
        <table class="w-full border-collapse">
          <thead>
            <tr class="bg-gray-100">
              <th class="border border-gray-300 px-4 py-2 text-left">Sr. No</th>
              <th class="border border-gray-300 px-4 py-2 text-left">Date</th>
              <th class="border border-gray-300 px-4 py-2 text-left">Day</th>
              <th class="border border-gray-300 px-4 py-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="border border-gray-300 px-4 py-2">1</td><td class="border border-gray-300 px-4 py-2">26-Jan-2026</td><td class="border border-gray-300 px-4 py-2">Monday</td><td class="border border-gray-300 px-4 py-2">Republic Day</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">2</td><td class="border border-gray-300 px-4 py-2">03-Mar-2026</td><td class="border border-gray-300 px-4 py-2">Tuesday</td><td class="border border-gray-300 px-4 py-2">Holi</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">3</td><td class="border border-gray-300 px-4 py-2">26-Mar-2026</td><td class="border border-gray-300 px-4 py-2">Thursday</td><td class="border border-gray-300 px-4 py-2">Shri Ram Navami</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">4</td><td class="border border-gray-300 px-4 py-2">31-Mar-2026</td><td class="border border-gray-300 px-4 py-2">Tuesday</td><td class="border border-gray-300 px-4 py-2">Shri Mahavir Jayanti</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">5</td><td class="border border-gray-300 px-4 py-2">03-Apr-2026</td><td class="border border-gray-300 px-4 py-2">Friday</td><td class="border border-gray-300 px-4 py-2">Good Friday</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">6</td><td class="border border-gray-300 px-4 py-2">14-Apr-2026</td><td class="border border-gray-300 px-4 py-2">Tuesday</td><td class="border border-gray-300 px-4 py-2">Dr. Baba Saheb Ambedkar Jayanti</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">7</td><td class="border border-gray-300 px-4 py-2">01-May-2026</td><td class="border border-gray-300 px-4 py-2">Friday</td><td class="border border-gray-300 px-4 py-2">Maharashtra Day</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">8</td><td class="border border-gray-300 px-4 py-2">28-May-2026</td><td class="border border-gray-300 px-4 py-2">Thursday</td><td class="border border-gray-300 px-4 py-2">Bakri Id</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">9</td><td class="border border-gray-300 px-4 py-2">26-Jun-2026</td><td class="border border-gray-300 px-4 py-2">Friday</td><td class="border border-gray-300 px-4 py-2">Muharram</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">10</td><td class="border border-gray-300 px-4 py-2">14-Sep-2026</td><td class="border border-gray-300 px-4 py-2">Monday</td><td class="border border-gray-300 px-4 py-2">Ganesh Chaturthi</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">11</td><td class="border border-gray-300 px-4 py-2">02-Oct-2026</td><td class="border border-gray-300 px-4 py-2">Friday</td><td class="border border-gray-300 px-4 py-2">Mahatma Gandhi Jayanti</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">12</td><td class="border border-gray-300 px-4 py-2">20-Oct-2026</td><td class="border border-gray-300 px-4 py-2">Tuesday</td><td class="border border-gray-300 px-4 py-2">Dussehra</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">13</td><td class="border border-gray-300 px-4 py-2">10-Nov-2026</td><td class="border border-gray-300 px-4 py-2">Tuesday</td><td class="border border-gray-300 px-4 py-2">Diwali-Balipratipada</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">14</td><td class="border border-gray-300 px-4 py-2">24-Nov-2026</td><td class="border border-gray-300 px-4 py-2">Tuesday</td><td class="border border-gray-300 px-4 py-2">Prakash Gurpurb Sri Guru Nanak Dev</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">15</td><td class="border border-gray-300 px-4 py-2">25-Dec-2026</td><td class="border border-gray-300 px-4 py-2">Friday</td><td class="border border-gray-300 px-4 py-2">Christmas</td></tr>
          </tbody>
        </table>

        <h2>Holidays on Saturday / Sunday</h2>
        <table class="w-full border-collapse">
          <thead>
            <tr class="bg-gray-100">
              <th class="border border-gray-300 px-4 py-2 text-left">Sr. No</th>
              <th class="border border-gray-300 px-4 py-2 text-left">Date</th>
              <th class="border border-gray-300 px-4 py-2 text-left">Day</th>
              <th class="border border-gray-300 px-4 py-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="border border-gray-300 px-4 py-2">1</td><td class="border border-gray-300 px-4 py-2">15-Feb-2026</td><td class="border border-gray-300 px-4 py-2">Sunday</td><td class="border border-gray-300 px-4 py-2">Mahashivratri</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">2</td><td class="border border-gray-300 px-4 py-2">21-Mar-2026</td><td class="border border-gray-300 px-4 py-2">Saturday</td><td class="border border-gray-300 px-4 py-2">Id-Ul-Fitr (Ramadan Eid)</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">3</td><td class="border border-gray-300 px-4 py-2">15-Aug-2026</td><td class="border border-gray-300 px-4 py-2">Saturday</td><td class="border border-gray-300 px-4 py-2">Independence Day</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">4</td><td class="border border-gray-300 px-4 py-2">08-Nov-2026</td><td class="border border-gray-300 px-4 py-2">Sunday</td><td class="border border-gray-300 px-4 py-2">Diwali Laxmi Pujan*</td></tr>
          </tbody>
        </table>

        <p><strong>Note:</strong> Diwali Laxmi Pujan falls on Sunday, 8 Nov 2026. Muhurat Trading will be conducted as per NSE tradition. Timings will be announced later.</p>

        <p><em>Source: NSE India</em></p>
      `,
    },
    // ... your other blogs here
  ];
};

// src/api/fetchPreIPODetails.js

export const fetchPreIPODetails = async () => {
  return [
    {
      id: 1,
      name: "APL Metals Limited",
      price: 12,
      logo: "/images/preipo/image1.png",

      overview: `Associated Pigments Limited (APL Metals) is a leading Indian manufacturer specializing in lead and lead oxide products. Established in 1948, the company has built a strong reputation in the Indian metals industry through decades of operational excellence, consistent quality, and customer satisfaction. APL Metals has played a significant role in contributing to India’s self-sufficiency in lead-based products and continues to be a trusted supplier across multiple industrial sectors.
The company manufactures and supplies a wide range of lead products, including Refined Lead, Lead Alloys, Red Lead, Lead Sub Oxide, and Litharge. All products are customizable to meet specific client requirements, ensuring precise specifications and consistent quality standards. APL Metals maintains product purity levels of up to 99.97%, with ongoing efforts to achieve 99.99% purity, setting new benchmarks in the industry.

APL Metals’ product portfolio serves diverse industrial applications. Lead and Lead Alloys are extensively used in batteries, cable sheathing, ammunition, radiation shielding, and other critical applications. Lead Oxides find widespread usage in battery manufacturing, ceramics, glass, and pigments. Additionally, Tin and Tin Alloys produced by the company are utilized in soldering, plating, and specialized industrial applications, further strengthening its diversified product base.
To support efficient production and supply chain operations, APL Metals operates three state-of-the-art manufacturing facilities strategically located across India. These facilities are situated at Panskura (West Bengal), B.T. Road (West Bengal), and Malwan, Fatehpur (Uttar Pradesh). Each unit is equipped with advanced manufacturing technology, enabling the production of high-quality lead and lead oxide products while maintaining stringent safety and quality controls.
The company serves a prestigious clients, reflecting its strong market position and industry trust. Notable clients include: Exide Industries Ltd, Luminous Power Technologies, Okaya Batteries (Delhi), HBL Power Systems Ltd, and Ned Energy Ltd. Long-standing relationships with such established brands underline APL Metals’ reliability and product excellence.

Beyond its manufacturing capabilities, APL Metals remains committed to employee welfare, environmental responsibility, and sustainable operations. The company actively follows environmentally responsible manufacturing practices, promotes workplace safety, and continuously adapts its operations to meet evolving industry standards and regulatory requirements. This long-term commitment ensures that APL Metals remains resilient, competitive, and future-ready in an ever-changing industrial landscape.


`,

      products: [
        "Refined Lead",
        "Lead Alloys",
        "Red Lead",
        "Lead Sub Oxide",
        "Litharge",
        "Tin & Tin Alloys"
      ],

      manufacturingUnits: [
        "Panskura (West Bengal)",
        "B.T. Road (West Bengal)",
        "Malwan, Fatehpur (Uttar Pradesh)"
      ],

      clients: [
        "Exide Industries Ltd",
        "Luminous Power Technologies",
        "Okaya Batteries (Delhi)",
        "HBL Power Systems Ltd",
        "Ned Energy Ltd"
      ],

      shareDetails: {
        companyName: "APL Metals Limited (Unlisted)",
        indicativeSharePrice: "₹14",
        marketCapitalization: "₹13 Crore (Approx.)",
        lotSize: "5,000 Shares",
        high52Week: "₹12",
        low52Week: "₹8",
        faceValue: "₹10",
        bookValue: "₹53.81",
        peRatio: "NA",
        pbRatio: "0.22",
        debtToEquity: "2.81",
        roe: "-20.96%",
        totalOutstandingShares: "1,07,26,387",
        isin: "INE578E01019",
        depository: "NSDL & CDSL",
        pan: "AACCA4264P",
        cin: "L24242WB1948PLC017455",
        rta: "M/s Niche Technologies Private Limited"
      },

      financials: {
        incomeStatement: [
          { label: "Revenue", fy22: 724, fy23: 736, fy24: 703 },
          { label: "Cost of Material Consumed", fy22: 664, fy23: 678, fy24: 663 },
          { label: "Change in Inventory", fy22: -11, fy23: -21, fy24: -26 },
          { label: "EBITDA", fy22: 21, fy23: 25, fy24: 14 },
          { label: "Operating Profit Margin (%)", fy22: 2.9, fy23: 3.4, fy24: 1.99 },
          { label: "Finance Cost", fy22: 14, fy23: 19, fy24: 24 },
          { label: "Profit Before Tax", fy22: 7, fy23: 5, fy24: -13 },
          { label: "Profit After Tax", fy22: 5, fy23: 3, fy24: -10 },
          { label: "EPS", fy22: 4.66, fy23: 2.8, fy24: -9.33 }
        ],

        keyRatios: [
          { label: "Operating Margin (%)", fy22: 2.9, fy23: 3.4, fy24: 1.99 },
          { label: "Net Profit Margin (%)", fy22: 0.69, fy23: 0.41, fy24: -1.42 },
          { label: "EPS (Diluted)", fy22: 4.66, fy23: 2.8, fy24: -9.33 }
        ],

        investorInsight: [
          "Revenue remained stable, but margins declined in FY24.",
          "Higher finance costs impacted profitability.",
          "Negative PAT and EPS signal short-term stress."
        ]
      },

      balanceSheet: {
        assets: [
          { label: "Fixed Assets", fy22: 22.4, fy23: 23, fy24: 25 },
          { label: "Inventory", fy22: 152, fy23: 166, fy24: 244 },
          { label: "Trade Receivables", fy22: 5, fy23: 11, fy24: 7 },
          { label: "Total Assets", fy22: 213, fy23: 217, fy24: 314 }
        ],

        liabilities: [
          { label: "Share Capital", fy22: 10.72, fy23: 10.72, fy24: 10.72 },
          { label: "Reserves & Surplus", fy22: 14, fy23: 16, fy24: 37 },
          { label: "Borrowings", fy22: 139, fy23: 161, fy24: 134 },
          { label: "Trade Payables", fy22: 42, fy23: 19, fy24: 120 },
          { label: "Total Liabilities", fy22: 213, fy23: 217, fy24: 314 }
        ],

        insights: [
          "Inventory-led asset growth in FY24",
          "Borrowings remain elevated but reduced YoY",
          "Sharp increase in trade payables"
        ]
      },

      cashFlow: {
        data: [
          { label: "Cash Flow from Operations", fy22: -11, fy23: -16, fy24: 60 },
          { label: "Cash Flow from Investing", fy22: -3, fy23: -2, fy24: -3 },
          { label: "Cash Flow from Financing", fy22: 24, fy23: 2, fy24: -51 },
          { label: "Net Cash Generated", fy22: 10, fy23: -16, fy24: 6 }
        ],
        insights: [
          "Strong operating cash flow in FY24 driven by payables",
          "Negative CFO in FY22–23 indicates working capital stress",
          "Reduction in borrowings in FY24"
        ]
      },

      shareholding: [
        { year: 2022, promoters: "99.99%", public: "0.01%" },
        { year: 2023, promoters: "73.26%", public: "26.74%" },
        { year: 2024, promoters: "73.26%", public: "26.74%" }
      ],

      management: [
        { name: "Sanjiv Nandan Sahaya", role: "Chairman & Managing Director", experience: "20+ Years" },
        { name: "Rajendra Sahay", role: "Director", experience: "20+ Years" },
        { name: "Prakash Kumar Damani", role: "Director", experience: "15+ Years" }
      ],

      managementInsight:
        "The leadership team at APL Metals Limited brings decades of experience in manufacturing, operations, and strategic management within the metals and industrial sector. Their long-standing industry expertise supports stable operations and long-term business continuity."
    },
    {
  id: 109,
  name: "OYO (Oravel Stays Limited)",
  price: 37,
  logo: "/images/oyo.png",

  overview: `OYO, officially known as Oravel Stays Limited, is one of India’s most well-known hospitality technology companies. Founded in 2013 by Ritesh Agarwal, OYO disrupted the traditional hotel industry by standardizing budget accommodations and leveraging technology to connect property owners with travelers. Over the years, OYO has grown from a small Indian startup into a global hospitality brand operating across multiple countries.

OYO operates as a hospitality aggregation and technology platform. Instead of owning hotels, it partners with hotel owners, homestay operators, and property managers. The company provides branding, technology infrastructure, pricing algorithms, marketing, and operational support, while property owners benefit from higher occupancy and standardized services.

Over time, OYO has diversified its offerings beyond budget hotels into premium and mid-scale hotels, vacation homes, serviced apartments, long-term stays, and corporate accommodations. This asset-light model allows OYO to scale rapidly with comparatively lower capital expenditure.

India remains OYO’s largest and most important market, while international operations across Southeast Asia, the Middle East, Europe, and the United States have been strategically restructured to improve profitability. OYO’s strong brand recall and deep penetration in Tier-2 and Tier-3 cities strengthen its long-term growth prospects.

Historically criticized for aggressive expansion and high losses, OYO has shifted its focus toward cost optimization, operational efficiency, and profitability. The company has reported improving EBITDA margins, reduced losses, and positive operating cash flows in recent years, strengthening its pre-IPO investment narrative.
`,

  products: [
    "Budget Hotels",
    "Premium & Mid-scale Hotels",
    "Vacation Homes",
    "Serviced Apartments",
    "Long-term Stays",
    "Corporate Accommodations"
  ],

  manufacturingUnits: [],

  clients: [
    "Individual Travelers",
    "Corporate Travelers",
    "Hotel Owners",
    "Homestay Operators",
    "Property Managers"
  ],

  shareDetails: {
    companyName: "Oravel Stays Limited (OYO – Unlisted)",
    indicativeSharePrice: "₹50 per share",
    marketCapitalization: "₹36,000 – ₹40,000+ Crore (Approx.)",
    lotSize: "1,000 Shares",
    high52Week: "₹58",
    low52Week: "₹26",
    faceValue: "₹1",
    bookValue: "₹2.7 – ₹14 per share",
    peRatio: "70 – 160",
    pbRatio: "2 – 10+",
    debtToEquity: "1.8 – 5.0",
    roe: "Negative historically",
    totalOutstandingShares: "695 – 1,401 Crore shares",
    isin: "INE561T01021",
    depository: "NSDL & CDSL",
    pan: "AABCO6063D",
    cin: "U63090GJ2012PLC107088",
    rta: "MUFG Intime India Pvt. Ltd."
  },

  financials: {
    incomeStatement: [
      { label: "Revenue", fy22: 4781, fy23: 5464, fy24: 5389, fy25: 6253 },
      { label: "Employee Benefit Expenses", fy22: 1862, fy23: 1549, fy24: 744, fy25: 616 },
      { label: "Other Expenses", fy22: 4079, fy23: 4289, fy24: 3937, fy25: 4601 },
      { label: "EBITDA", fy22: -1160, fy23: -374, fy24: 708, fy25: 1036 },
      { label: "Operating Profit Margin (%)", fy22: -24.26, fy23: -6.84, fy24: 13.14, fy25: 16.57 },
      { label: "Finance Cost", fy22: 746, fy23: 681, fy24: 844, fy25: 959 },
      { label: "Profit Before Tax", fy22: -1919, fy23: -1286, fy24: 236, fy25: -489 },
      { label: "Profit After Tax", fy22: -1942, fy23: -1286, fy24: 230, fy25: 245 },
      { label: "EPS", fy22: -14.63, fy23: -9.68, fy24: 1.72, fy25: 0.36 }
    ],

    keyRatios: [
      { label: "Operating Margin (%)", fy22: -24.26, fy23: -6.84, fy24: 13.14, fy25: 16.57 },
      { label: "Net Profit Margin (%)", fy22: -40.62, fy23: -23.54, fy24: 4.27, fy25: 3.92 },
      { label: "EPS (Diluted)", fy22: -14.63, fy23: -9.68, fy24: 1.72, fy25: 0.36 }
    ],

    investorInsight: [
      "OYO has transitioned from a loss-making growth startup to a profitability-focused organization.",
      "Improving EBITDA margins and positive PAT highlight operational discipline.",
      "Asset-light model supports scalable growth with lower capital requirements.",
      "IPO preparations and financial turnaround strengthen pre-IPO investment appeal."
    ]
  },

  balanceSheet: {
    assets: [
      { label: "Fixed Assets", fy22: 1605, fy23: 1582, fy24: 1490, fy25: 4998 },
      { label: "Investments", fy22: 605, fy23: 510, fy24: 455, fy25: 532 },
      { label: "Trade Receivables", fy22: 256, fy23: 158, fy24: 203, fy25: 488 },
      { label: "Other Assets", fy22: 5985, fy23: 5682, fy24: 4293.8, fy25: 10646 },
      { label: "Total Assets", fy22: 8452, fy23: 7932, fy24: 6443, fy25: 16695 }
    ],

    liabilities: [
      { label: "Share Capital", fy22: 132.7, fy23: 132.8, fy24: 133.8, fy25: 678.7 },
      { label: "Reserves", fy22: 1311, fy23: 449.7, fy24: 767, fy25: 3108 },
      { label: "Borrowings", fy22: 4664, fy23: 5071, fy24: 3603, fy25: 7144 },
      { label: "Trade Payables", fy22: 1087, fy23: 935, fy24: 961, fy25: 1240 },
      { label: "Other Liabilities", fy22: 1257.3, fy23: 1343.5, fy24: 978.2, fy25: 4524.3 },
      { label: "Total Liabilities", fy22: 8452, fy23: 7932, fy24: 6443, fy25: 16695 }
    ],

    insights: [
      "Significant asset base expansion in FY25.",
      "Borrowings increased to support restructuring and growth.",
      "Reserve growth reflects equity infusion and retained earnings."
    ]
  },

  cashFlow: {
    data: [
      { label: "Cash Flow from Operations", fy22: -922, fy23: 142, fy24: 598, fy25: 321 },
      { label: "Cash Flow from Investing", fy22: -711, fy23: -109, fy24: 1425, fy25: -4212 },
      { label: "Cash Flow from Financing", fy22: 703.5, fy23: -705, fy24: -2413, fy25: 4160 },
      { label: "Net Cash Generated", fy22: -929.5, fy23: -672, fy24: -390, fy25: 269 }
    ],
    insights: [
      "Operating cash flow turned positive from FY23 onward.",
      "FY24 investing inflow reflects asset monetization.",
      "FY25 financing inflow driven by borrowings and equity issuance.",
      "Cash balance stabilized indicating improved financial discipline."
    ]
  },

  shareholding: [
    { year: 2025, promoters: "64.55%", public: "35.45%" }
  ],

  management: [
    { name: "Ritesh Agarwal", role: "Chairman & CEO", experience: "10 Years" },
    { name: "Aditya Ghosh", role: "Executive Director", experience: "26 Years" },
    { name: "Abhishek Gupta", role: "Chief Financial Officer (CFO)", experience: "20 Years" }
  ],

  managementInsight:
    "OYO is led by founder Ritesh Agarwal, ensuring strategic continuity and entrepreneurial leadership. A professionally managed executive team supports governance, profitability focus, and operational execution, strengthening investor confidence ahead of the IPO."
}

  ];
};





