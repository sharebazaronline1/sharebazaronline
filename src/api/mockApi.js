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
  "id": 11,
  "name": "Pajson Agro India IPO",
  "logo": "/images/ipo/pajson-agro-india.png",
  "minInvestment": "₹2,83,200",
  "open": "11 Dec 2025",
  "close": "15 Dec 2025",
  "listing": "18 Dec 2025",
  "price": "112 – 118",
  "lot": 1200,

  "about_company": {
    "company_name": "Pajson Agro India Limited",
    "industry_sector": "Agro Processing / Food Products",
    "founded_year": "2021",
    "promoters": [
      "Pulkit Jain",
      "Aayush Jain",
      "Anjali Jain"
    ],
    "description": "Pajson Agro India Limited operates in the agro-processing industry and primarily focuses on processing raw cashew nuts into cashew kernels. The company supplies cashew products to domestic as well as international markets and also sells cashew by-products such as shells and husk used in various industrial and agricultural applications."
  },

  "ipo_basic_details": {
    "company_name": "Pajson Agro India Limited",
    "ipo_type": "SME IPO",
    "issue_type": "Book Built Issue",
    "face_value": "₹10 per share",
    "price_band_min": "₹112",
    "price_band_max": "₹118",
    "lot_size": 1200,
    "total_issue_size": "₹74.45 Cr",
    "fresh_issue_size": "₹74.45 Cr",
    "offer_for_sale": "0",
    "shares_offered": "63,09,600 shares",
    "listing_exchange": "BSE SME",
    "issue_price": "₹118",
    "minimum_investment": "₹2,83,200",
    "market_cap_post_issue": "Approx ₹280 Cr",
    "pre_issue_shareholding": "85%",
    "post_issue_shareholding": "62.47%"
  },

  "company_overview": {
    "business_model": "The company processes raw cashew nuts into cashew kernels and supplies them to wholesalers, exporters, and food distributors in India and overseas markets.",
    "products_services": [
      "Cashew Kernel Processing",
      "Bulk Cashew Supply",
      "Cashew Retail Packaging",
      "Sale of Cashew Shell and Husk By-products"
    ],
    "competitive_strengths": [
      "Integrated cashew processing operations",
      "Strong distribution network in domestic and export markets",
      "Experienced promoter group with agro-commodity experience",
      "Growing demand for processed cashew products"
    ],
    "risks": [
      "Dependence on raw cashew nut supply",
      "Commodity price volatility",
      "Working capital intensive operations",
      "Competition from large food processing companies"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "11 Dec 2025",
    "ipo_close_date": "15 Dec 2025",
    "basis_of_allotment_date": "16 Dec 2025",
    "refund_initiation_date": "17 Dec 2025",
    "demat_credit_date": "17 Dec 2025",
    "listing_date": "18 Dec 2025",
    "upi_mandate_deadline": "15 Dec 2025"
  },

  "ipo_objectives": {
    "expansion": "Capital expenditure for setting up a second cashew processing facility in Vizianagaram, Andhra Pradesh",
    "working_capital": "N/A",
    "debt_repayment": "N/A",
    "general_corporate_purposes": "Balance of issue proceeds"
  },

  "investor_reservation": {
    "qib_quota": "46.82%",
    "retail_quota": "33.24%",
    "hni_quota": "14.26%",
    "market_maker_quota": "5.67%"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "2 lots",
      "shares": "2400",
      "amount": "₹2,83,200"
    },
    "retail_maximum": {
      "lot_size": "2 lots",
      "shares": "2400",
      "amount": "₹2,83,200"
    },
    "shni_minimum": {
      "lot_size": "3 lots",
      "shares": "3600",
      "amount": "₹4,24,800"
    },
    "shni_maximum": {
      "lot_size": "7 lots",
      "shares": "8400",
      "amount": "₹9,91,200"
    },
    "bhni_minimum": {
      "lot_size": "8 lots",
      "shares": "9600",
      "amount": "₹11,32,800"
    }
  },

  "key_performance_indicators": {
    "roe": "60.05%",
    "roce": "48.21%",
    "ronw": "46.18%",
    "pat_margin": "10.90%",
    "ebitda_margin": "16.16%",
    "eps": "₹11.67 (Pre-IPO) / ₹11.92 (Post-IPO)",
    "nav_per_share": "₹25.26",
    "debt_to_equity": "0.33",
    "pe_ratio": "9.90x",
    "industry_pe": "18x"
  },

  "company_financial_data": [
    {
      "period": "31 Mar 2023",
      "assets": "₹50 Cr",
      "total_income": "₹101 Cr",
      "pat": "₹0.2 Cr",
      "ebitda": "₹5.3 Cr",
      "net_worth": "₹20.44 Cr",
      "total_borrowing": "₹0 Cr"
    },
    {
      "period": "31 Mar 2024",
      "assets": "₹55 Cr",
      "total_income": "₹96 Cr",
      "pat": "₹3 Cr",
      "ebitda": "₹8 Cr",
      "net_worth": "₹23.79 Cr",
      "total_borrowing": "₹14.57 Cr"
    },
    {
      "period": "31 Mar 2025",
      "assets": "₹66 Cr",
      "total_income": "₹187 Cr",
      "pat": "₹20 Cr",
      "ebitda": "₹30 Cr",
      "net_worth": "₹44.21 Cr",
      "total_borrowing": "₹14.57 Cr"
    },
    {
      "period": "30 Sep 2025",
      "assets": "₹152 Cr",
      "total_income": "₹118 Cr",
      "pat": "₹14 Cr",
      "ebitda": "₹22 Cr",
      "net_worth": "₹58.40 Cr",
      "total_borrowing": "₹40.04 Cr"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "₹6",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "Dec 2025",
    "estimated_listing_price": "₹124"
  },

  "ipo_subscription_data": {
    "qib_ex_anchor": "10.92x",
    "hni_subscription": "5.19x",
    "retail_subscription": "3.80x",
    "total_subscription": "6.04x"
  },

  "ipo_intermediaries": {
    "registrar": "Bigshare Services Pvt Ltd",
    "registrar_website": "https://www.bigshareonline.com",
    "market_maker": "Spread X Securities Pvt Ltd",
    "company_secretary": "N/A",
    "compliance_officer": "N/A"
  },

  "ipo_lead_manager": {
    "lead_manager": "GYR Capital Advisors Pvt Ltd"
  },

  "company_information": {
    "company_address": "Pearl Omaxe Tower, Netaji Subhash Place, Pitampura, New Delhi, India",
    "company_website": "https://www.pajsonagro.com",
    "company_email": "investor@pajsonagro.com",
    "company_phone": "+91-11-43026646"
  },

  "ipo_documents": {
    "drhp_link": "https://www.bsesme.com/download/307027/SME_IPO%20InPrinciple/DRHPPajsonAgroIndiaLimited_20250927145450.pdf",
    "rhp_link": "https://www.sebi.gov.in/filings/public-issues/dec-2025/pajson-agro-india-limited_98326.html",
    "prospectus_pdf": "https://pajsonagro.com/wp-content/uploads/2025/12/Prospectus_PAJSON-revised.pdf",
    "investor_presentation": "https://www.chittorgarh.net/reports/anchor-investor/pajson-agro-anchor-alloaction.pdf"
  }
},

   {
  "id": 12,
  "name": "HRS Aluglaze IPO",
  "logo": "/images/ipo/hrs-aluglaze.png",
  "minInvestment": "₹2,30,400",
  "open": "11 Dec 2025",
  "close": "15 Dec 2025",
  "listing": "18 Dec 2025",
  "price": "94 – 96",
  "lot": 1200,

  "about_company": {
    "company_name": "HRS Aluglaze Limited",
    "industry_sector": "Construction Materials / Aluminium & Glass Systems",
    "founded_year": "2012",
    "promoters": [
      "Hitesh Shah",
      "Rakesh Shah"
    ],
    "description": "HRS Aluglaze Limited specializes in designing, manufacturing, and installing aluminium architectural products such as windows, doors, curtain wall systems, glazing structures, and cladding solutions. The company delivers end-to-end façade and glazing services to builders, architects, contractors, and commercial infrastructure developers."
  },

  "ipo_basic_details": {
    "company_name": "HRS Aluglaze Limited",
    "ipo_type": "SME IPO",
    "issue_type": "Book Built Issue",
    "face_value": "₹10 per share",
    "price_band_min": "₹94",
    "price_band_max": "₹96",
    "lot_size": 1200,
    "total_issue_size": "₹50.92 Cr",
    "fresh_issue_size": "₹50.92 Cr",
    "offer_for_sale": "0",
    "shares_offered": "53,04,000 shares",
    "listing_exchange": "BSE SME",
    "issue_price": "₹96",
    "minimum_investment": "₹2,30,400",
    "market_cap_post_issue": "₹185.11 Cr",
    "pre_issue_shareholding": "1,39,78,125 shares",
    "post_issue_shareholding": "1,92,82,125 shares"
  },

  "company_overview": {
    "business_model": "The company provides aluminium and glass façade systems including design, fabrication, supply, and installation services for residential, commercial, and institutional infrastructure projects.",
    "products_services": [
      "Aluminium Windows & Doors",
      "Curtain Wall Systems",
      "Structural Glazing",
      "Aluminium Composite Panel Cladding",
      "Architectural Façade Solutions"
    ],
    "competitive_strengths": [
      "Integrated design-to-installation service model",
      "Advanced CNC manufacturing equipment",
      "Established client relationships with builders and contractors",
      "Growing demand from commercial and infrastructure projects"
    ],
    "risks": [
      "Dependence on construction and real estate sector growth",
      "Raw material price fluctuations",
      "Project execution delays",
      "Competition from established façade system manufacturers"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "11 Dec 2025",
    "ipo_close_date": "15 Dec 2025",
    "basis_of_allotment_date": "16 Dec 2025",
    "refund_initiation_date": "17 Dec 2025",
    "demat_credit_date": "17 Dec 2025",
    "listing_date": "18 Dec 2025",
    "anchor_investor_date": "10 Dec 2025",
    "upi_mandate_deadline": "15 Dec 2025"
  },

  "ipo_objectives": {
    "expansion": "Expansion of manufacturing facility and additional plant infrastructure",
    "working_capital": "Working capital requirements",
    "debt_repayment": "N/A",
    "general_corporate_purposes": "General corporate purposes and issue expenses"
  },

  "investor_reservation": {
    "qib_quota": "46.90%",
    "retail_quota": "33.67%",
    "hni_quota": "14.25%",
    "market_maker_quota": "5.18%"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "2 lots",
      "shares": "2400",
      "amount": "₹2,30,400"
    },
    "retail_maximum": {
      "lot_size": "2 lots",
      "shares": "2400",
      "amount": "₹2,30,400"
    },
    "shni_minimum": {
      "lot_size": "3 lots",
      "shares": "3600",
      "amount": "₹3,45,600"
    },
    "shni_maximum": {
      "lot_size": "8 lots",
      "shares": "9600",
      "amount": "₹9,21,600"
    },
    "bhni_minimum": {
      "lot_size": "9 lots",
      "shares": "10800",
      "amount": "₹10,36,800"
    }
  },

  "key_performance_indicators": {
    "roe": "34.24%",
    "roce": "15.97%",
    "ronw": "34.24%",
    "pat_margin": "12.22%",
    "ebitda_margin": "25.42%",
    "eps": "₹3.68",
    "nav_per_share": "₹17.61",
    "debt_to_equity": "1.92",
    "pe_ratio": "26.07x",
    "industry_pe": "30x"
  },

  "company_financial_data": [
    {
      "period": "31 Mar 2023",
      "assets": "₹49 Cr",
      "total_income": "₹30 Cr",
      "pat": "₹2.2 Cr",
      "ebitda": "₹6.1 Cr",
      "net_worth": "₹7.3 Cr",
      "total_borrowing": "₹13 Cr"
    },
    {
      "period": "31 Mar 2024",
      "assets": "₹70 Cr",
      "total_income": "₹36 Cr",
      "pat": "₹3.7 Cr",
      "ebitda": "₹8.5 Cr",
      "net_worth": "₹10 Cr",
      "total_borrowing": "₹18 Cr"
    },
    {
      "period": "31 Mar 2025",
      "assets": "₹82 Cr",
      "total_income": "₹42.14 Cr",
      "pat": "₹5.15 Cr",
      "ebitda": "₹10.70 Cr",
      "net_worth": "₹14 Cr",
      "total_borrowing": "₹25 Cr"
    },
    {
      "period": "30 Sep 2025",
      "assets": "₹91.16 Cr",
      "total_income": "₹26.35 Cr",
      "pat": "₹4.54 Cr",
      "ebitda": "₹8.45 Cr",
      "net_worth": "₹17 Cr",
      "total_borrowing": "₹29 Cr"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "₹22",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "Dec 2025",
    "estimated_listing_price": "₹118"
  },

  "ipo_subscription_data": {
    "qib_ex_anchor": "19.48x",
    "hni_subscription": "60.50x",
    "retail_subscription": "49.54x",
    "total_subscription": "42x"
  },

  "ipo_intermediaries": {
    "registrar": "Purva Sharegistry (India) Pvt. Ltd.",
    "registrar_website": "https://www.purvashare.com",
    "market_maker": "MNM Stock Broking Pvt. Ltd.",
    "company_secretary": "N/A",
    "compliance_officer": "N/A"
  },

  "ipo_lead_manager": {
    "lead_manager": "Cumulative Capital Pvt. Ltd."
  },

  "company_information": {
    "company_address": "Village Rajoda, Bavla, Ahmedabad, Gujarat, India",
    "company_website": "https://www.hrsaluglaze.com",
    "company_email": "info@hrsaluglaze.com",
    "company_phone": "+91 7926306595"
  },

  "ipo_documents": {
    "drhp_link": "https://www.bsesme.com/download/357605/SME_IPO%20InPrinciple/HRS_ALUGLAZE_LIMITED_DRHP_11092025_20250911122618.pdf",
    "rhp_link": "https://www.bseindia.com/downloads/ipo/RHP%20&%20GID_HRS_091220252206.zip",
    "prospectus_pdf": "https://hrsaluglaze.com/wp-content/uploads/2025/12/Prospectus-HRS-Aluglaze-Limited-December-15-2025-1.pdf",
    "investor_presentation": "https://www.chittorgarh.net/reports/anchor-investor/hrs-aluglaze-anchor-investor-list.pdf"
  }
},
   {
  "id": 13,
  "name": "Exim Routes IPO",
  "logo": "/images/ipo/exim-routes.png",
  "minInvestment": "₹2,81,600",
  "open": "12 Dec 2025",
  "close": "16 Dec 2025",
  "listing": "19 Dec 2025",
  "price": "83 – 88",
  "lot": 1600,

  "about_company": {
    "company_name": "Exim Routes Limited",
    "industry_sector": "Recycling Supply Chain / B2B Digital Platform",
    "founded_year": "2019",
    "promoters": [
      "Abhishek Jain",
      "Nikita Jain"
    ],
    "description": "Exim Routes Limited operates a global recyclable-material exchange platform that connects waste paper suppliers with paper mills. Through its proprietary AI-powered ERIS platform, the company manages sourcing, procurement, quality assurance, and international logistics of recyclable materials used by paper manufacturers."
  },

  "ipo_basic_details": {
    "company_name": "Exim Routes Limited",
    "ipo_type": "SME IPO",
    "issue_type": "Book Built Issue",
    "face_value": "₹5 per share",
    "price_band_min": "₹83",
    "price_band_max": "₹88",
    "lot_size": 1600,
    "total_issue_size": "₹43.73 Cr",
    "fresh_issue_size": "₹43.73 Cr",
    "offer_for_sale": "0",
    "shares_offered": "49,69,600 shares",
    "listing_exchange": "NSE SME",
    "issue_price": "₹88",
    "minimum_investment": "₹2,81,600",
    "market_cap_post_issue": "₹165.02 Cr",
    "pre_issue_shareholding": "1,37,82,400 shares",
    "post_issue_shareholding": "1,87,52,000 shares"
  },

  "company_overview": {
    "business_model": "The company operates a digital B2B platform that enables global trade of recyclable paper materials by connecting suppliers with paper mills and managing logistics, quality control, and cross-border procurement.",
    "products_services": [
      "Waste Paper Procurement",
      "Recyclable Material Supply Chain Management",
      "Quality Assurance and Inspection",
      "Global Logistics Coordination",
      "ERIS Digital Trading Platform"
    ],
    "competitive_strengths": [
      "AI-driven ERIS digital platform",
      "Integrated sourcing and logistics model",
      "Growing demand for recyclable raw materials",
      "Established relationships with paper mills and suppliers"
    ],
    "risks": [
      "Dependence on global recyclable material supply",
      "Commodity price fluctuations",
      "Logistics and cross-border trade risks",
      "Competition from established recycling supply companies"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "12 Dec 2025",
    "ipo_close_date": "16 Dec 2025",
    "basis_of_allotment_date": "17 Dec 2025",
    "refund_initiation_date": "18 Dec 2025",
    "demat_credit_date": "18 Dec 2025",
    "listing_date": "19 Dec 2025",
    "anchor_investor_date": "11 Dec 2025",
    "upi_mandate_deadline": "16 Dec 2025"
  },

  "ipo_objectives": {
    "technology_development": "Development and maintenance of ERIS digital platform",
    "working_capital": "Funding working capital requirements",
    "office_expansion": "Investment in office infrastructure and workforce expansion",
    "general_corporate_purposes": "Balance of IPO proceeds"
  },

  "investor_reservation": {
    "qib_quota": "47.33%",
    "retail_quota": "33.35%",
    "hni_quota": "14.29%",
    "market_maker_quota": "5.02%"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "2 lots",
      "shares": "3200",
      "amount": "₹2,81,600"
    },
    "retail_maximum": {
      "lot_size": "2 lots",
      "shares": "3200",
      "amount": "₹2,81,600"
    },
    "shni_minimum": {
      "lot_size": "3 lots",
      "shares": "4800",
      "amount": "₹4,22,400"
    },
    "shni_maximum": {
      "lot_size": "7 lots",
      "shares": "11200",
      "amount": "₹9,85,600"
    },
    "bhni_minimum": {
      "lot_size": "8 lots",
      "shares": "12800",
      "amount": "₹11,26,400"
    }
  },

  "key_performance_indicators": {
    "roe": "42.28%",
    "roce": "26.81%",
    "ronw": "42.28%",
    "pat_margin": "18.52%",
    "ebitda_margin": "8.24%",
    "eps": "₹5.49",
    "nav_per_share": "₹11.89",
    "debt_to_equity": "0.18",
    "pe_ratio": "16.04x",
    "industry_pe": "20x"
  },

  "company_financial_data": [
    {
      "period": "31 Mar 2023",
      "assets": "₹32 Cr",
      "total_income": "₹41 Cr",
      "pat": "₹3.9 Cr",
      "ebitda": "₹4.2 Cr",
      "net_worth": "₹8 Cr",
      "total_borrowing": "₹2 Cr"
    },
    {
      "period": "31 Mar 2024",
      "assets": "₹48 Cr",
      "total_income": "₹55 Cr",
      "pat": "₹5.1 Cr",
      "ebitda": "₹6.4 Cr",
      "net_worth": "₹13 Cr",
      "total_borrowing": "₹3 Cr"
    },
    {
      "period": "31 Mar 2025",
      "assets": "₹71 Cr",
      "total_income": "₹79 Cr",
      "pat": "₹10 Cr",
      "ebitda": "₹11 Cr",
      "net_worth": "₹19 Cr",
      "total_borrowing": "₹3 Cr"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "₹32",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "Dec 2025",
    "estimated_listing_price": "₹120"
  },

  "ipo_subscription_data": {
    "qib_ex_anchor": "0.00x",
    "hni_subscription": "4.34x",
    "retail_subscription": "2.23x",
    "total_subscription": "2.05x"
  },

  "ipo_intermediaries": {
    "registrar": "Maashitla Securities Pvt Ltd",
    "registrar_website": "https://www.maashitla.com",
    "market_maker": "Nikunj Stock Brokers Ltd",
    "company_secretary": "N/A",
    "compliance_officer": "N/A"
  },

  "ipo_lead_manager": {
    "lead_manager": "Narnolia Financial Services Ltd"
  },

  "company_information": {
    "company_address": "451 Krishna Apra Business Square, Netaji Subhash Place, Pitampura, New Delhi, India",
    "company_website": "https://eximroutes.ai",
    "company_email": "cs.er@eximroutes.in",
    "company_phone": "+91-11-45121795"
  },

  "ipo_documents": {
    "drhp_link": "https://nsearchives.nseindia.com/emerge/corporates/content/Registration_16072025120336_DRHP_Exim_Routes.pdf",
    "rhp_link": "https://nsearchives.nseindia.com/content/ipo/RHP_EXIMROUTES.zip",
    "prospectus_pdf": "https://www.chittorgarh.net/reports/ipo_notes/prospectus_exim.pdf",
    "investor_presentation": "https://www.chittorgarh.net/reports/anchor-investor/exim-routes-anchor-list.pdf"
  }
}
 ,
    {
  "id": 14,
  "name": "Stanbik Agro IPO",
  "logo": "/images/ipo/stanbik-agro.png",
  "minInvestment": "₹2,40,000",
  "open": "12 Dec 2025",
  "close": "16 Dec 2025",
  "listing": "19 Dec 2025",
  "price": "30",
  "lot": 4000,

  "about_company": {
    "company_name": "Stanbik Agro Limited",
    "industry_sector": "Agriculture Supply Chain / Agri Commodities",
    "founded_year": "2021",
    "promoters": [
      "Vishal Shah",
      "Dhruv Shah"
    ],
    "description": "Stanbik Agro Limited operates in the agricultural supply chain sector and focuses on contract farming, wholesaling, and distribution of agricultural commodities. The company works directly with farmers to source crops and supplies fresh produce to wholesalers, retailers, and institutional buyers through an integrated farm-to-market model."
  },

  "ipo_basic_details": {
    "company_name": "Stanbik Agro Limited",
    "ipo_type": "SME IPO",
    "issue_type": "Fixed Price Issue",
    "face_value": "₹10 per share",
    "price_band_min": "₹30",
    "price_band_max": "₹30",
    "lot_size": 4000,
    "total_issue_size": "₹12.28 Cr",
    "fresh_issue_size": "₹12.28 Cr",
    "offer_for_sale": "0",
    "shares_offered": "40,92,000 shares",
    "listing_exchange": "BSE SME",
    "issue_price": "₹30",
    "minimum_investment": "₹2,40,000",
    "market_cap_post_issue": "₹40 Cr",
    "pre_issue_shareholding": "98.92%",
    "post_issue_shareholding": "68.54%"
  },

  "company_overview": {
    "business_model": "The company procures agricultural produce directly from farmers and distributes it to retailers, wholesalers, and institutional buyers. It also operates retail outlets and B2B supply channels for agricultural commodities.",
    "products_services": [
      "Contract Farming",
      "Agricultural Commodity Supply",
      "Retail Sales of Fresh Produce",
      "B2B Agricultural Distribution"
    ],
    "competitive_strengths": [
      "Direct farmer procurement network",
      "Integrated farm-to-retail supply chain",
      "Growing demand for organized agricultural distribution",
      "Strong revenue growth in recent years"
    ],
    "risks": [
      "Dependence on agricultural output and weather conditions",
      "Commodity price volatility",
      "Highly competitive agri-distribution sector",
      "Working capital intensive operations"
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
    "retail_expansion": "Opening new retail outlets",
    "working_capital": "Funding working capital requirements",
    "security_deposits": "Deposits for retail operations",
    "general_corporate_purposes": "Balance of IPO proceeds"
  },

  "investor_reservation": {
    "retail_quota": "50%",
    "hni_quota": "50%"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "2 lots",
      "shares": "8000",
      "amount": "₹2,40,000"
    },
    "retail_maximum": {
      "lot_size": "2 lots",
      "shares": "8000",
      "amount": "₹2,40,000"
    },
    "shni_minimum": {
      "lot_size": "3 lots",
      "shares": "12000",
      "amount": "₹3,60,000"
    },
    "bhni_minimum": {
      "lot_size": "4 lots",
      "shares": "16000",
      "amount": "₹4,80,000"
    }
  },

  "key_performance_indicators": {
    "roe": "48.94%",
    "roce": "32%",
    "ronw": "48.94%",
    "pat_margin": "6.24%",
    "ebitda_margin": "10%",
    "eps": "₹6.47",
    "nav_per_share": "₹20.55",
    "debt_to_equity": "0.20",
    "pe_ratio": "4.63x",
    "industry_pe": "15x"
  },

  "company_financial_data": [
    {
      "period": "31 Mar 2023",
      "assets": "₹12 Cr",
      "total_income": "₹19.96 Cr",
      "pat": "₹1.02 Cr",
      "ebitda": "₹2.10 Cr",
      "net_worth": "₹4 Cr",
      "total_borrowing": "₹0.5 Cr"
    },
    {
      "period": "31 Mar 2024",
      "assets": "₹18 Cr",
      "total_income": "₹26.55 Cr",
      "pat": "₹1.85 Cr",
      "ebitda": "₹3.20 Cr",
      "net_worth": "₹6 Cr",
      "total_borrowing": "₹0.8 Cr"
    },
    {
      "period": "31 Mar 2025",
      "assets": "₹28 Cr",
      "total_income": "₹52.49 Cr",
      "pat": "₹3.74 Cr",
      "ebitda": "₹5.10 Cr",
      "net_worth": "₹10 Cr",
      "total_borrowing": "₹1.5 Cr"
    },
    {
      "period": "30 Sep 2025",
      "assets": "₹34 Cr",
      "total_income": "₹35.55 Cr",
      "pat": "₹2.22 Cr",
      "ebitda": "₹3.70 Cr",
      "net_worth": "₹12 Cr",
      "total_borrowing": "₹1.8 Cr"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "₹0",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "Dec 2025",
    "estimated_listing_price": "₹30"
  },

  "ipo_subscription_data": {
    "retail_subscription": "2.10x",
    "hni_subscription": "2.75x",
    "total_subscription": "2.42x"
  },

  "ipo_intermediaries": {
    "registrar": "Purva Sharegistry India Pvt Ltd",
    "registrar_website": "https://www.purvashare.com",
    "market_maker": "MNM Stock Broking Pvt Ltd",
    "company_secretary": "N/A",
    "compliance_officer": "N/A"
  },

  "ipo_lead_manager": {
    "lead_manager": "Grow House Wealth Management Pvt Ltd"
  },

  "company_information": {
    "company_address": "D 1106, Titanium City Centre,Near Sachin Tower 100 Feet Road,SAC",
    "company_website": "https://stanbikagro.com",
    "company_email": "info@stanbikagro.com",
    "company_phone": "+91-8160274723"
  },

  "ipo_documents": {
    "drhp_link": "https://www.bsesme.com/download/370036/SME_IPO%20InPrinciple/FinalDRHP05092025_20250905203451.pdf",
    "rhp_link": "https://www.sebi.gov.in/filings/public-issues/stanbik-agro-limited.html",
    "prospectus_pdf": "https://www.bseindia.com/downloads/ipo/Prospectus%20&%20GID_111220251445.zip",
    "investor_presentation": "N/A"
  }
}
 ,
   {
  "id": 15,
  "name": "KSH International",
  "logo": "/images/ipo/ksh-international.png",
  "minInvestment": "₹14,976",
  "open": "16 Dec 2025",
  "close": "18 Dec 2025",
  "listing": "23 Dec 2025",
  "price": "365 – 384",
  "lot": 39,

  "about_company": {
    "company_name": "KSH International Limited",
    "industry_sector": "Electrical Equipment / Magnet Winding Wires",
    "founded_year": "1981",
    "promoters": [
      "Kushal Subbayya Hegde",
      "Pushpa Kushal Hegde",
      "Rajesh Kushal Hegde",
      "Rohit Kushal Hegde"
    ],
    "description": "KSH International Limited is one of India's leading manufacturers of magnet winding wires used in transformers, motors, generators, and electrical equipment. The company supplies products to sectors such as power, renewable energy, automotive, railways, and industrial manufacturing, and exports to over 24 countries."
  },

  "ipo_basic_details": {
    "company_name": "KSH International Limited",
    "ipo_type": "Mainboard IPO",
    "issue_type": "Book Built Issue",
    "face_value": "₹5 per share",
    "price_band_min": "₹365",
    "price_band_max": "₹384",
    "lot_size": 39,
    "total_issue_size": "₹644.45 Cr",
    "fresh_issue_size": "₹420 Cr",
    "offer_for_sale": "₹224.45 Cr",
    "shares_offered": "1,67,82,501 shares",
    "listing_exchange": "BSE, NSE",
    "issue_price": "₹384",
    "minimum_investment": "₹14,976",
    "market_cap_post_issue": "₹2,600 Cr",
    "pre_issue_shareholding": "98.4%",
    "post_issue_shareholding": "71.4%"
  },

  "company_overview": {
    "business_model": "The company manufactures specialized magnet winding wires and supplies OEMs in power, renewable energy, railways, automotive, and industrial sectors.",
    "products_services": [
      "Enamelled Copper Wires",
      "Aluminium Magnet Wires",
      "Paper Insulated Wires",
      "Continuously Transposed Conductors"
    ],
    "competitive_strengths": [
      "Third-largest magnet winding wire manufacturer in India",
      "Largest exporter in its segment",
      "Strong client base including PSU companies",
      "Presence in high-growth sectors like EVs and renewables"
    ],
    "risks": [
      "Dependence on copper and aluminium price fluctuations",
      "High working capital requirements",
      "Customer concentration risk",
      "Cyclical demand from power and industrial sectors"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "16 Dec 2025",
    "ipo_close_date": "18 Dec 2025",
    "basis_of_allotment_date": "19 Dec 2025",
    "refund_initiation_date": "20 Dec 2025",
    "demat_credit_date": "22 Dec 2025",
    "listing_date": "23 Dec 2025",
    "anchor_investor_date": "15 Dec 2025",
    "upi_mandate_deadline": "18 Dec 2025"
  },

  "ipo_objectives": {
    "debt_repayment": "₹225.98 Cr",
    "expansion": "₹90 Cr for machinery and plant expansion",
    "solar_project": "₹10.41 Cr rooftop solar plant",
    "general_corporate_purposes": "Remaining amount"
  },

  "investor_reservation": {
    "qib_quota": "50%",
    "retail_quota": "35%",
    "hni_quota": "15%"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "1 lot",
      "shares": "39",
      "amount": "₹14,976"
    },
    "retail_maximum": {
      "lot_size": "13 lots",
      "shares": "507",
      "amount": "₹1,94,688"
    },
    "shni_minimum": {
      "lot_size": "14 lots",
      "shares": "546",
      "amount": "₹2,09,664"
    },
    "bhni_minimum": {
      "lot_size": "67 lots",
      "shares": "2613",
      "amount": "₹10,03,392"
    }
  },

  "key_performance_indicators": {
    "roe": "18%",
    "roce": "20%",
    "ronw": "18%",
    "pat_margin": "3.5%",
    "ebitda_margin": "7%",
    "eps": "₹10.02",
    "nav_per_share": "₹56",
    "debt_to_equity": "0.8",
    "pe_ratio": "38.3x",
    "industry_pe": "30x"
  },

  "company_financial_data": [
    {
      "period": "31 Mar 2023",
      "assets": "₹1,200 Cr",
      "total_income": "₹1,390 Cr",
      "pat": "₹37 Cr",
      "ebitda": "₹90 Cr",
      "net_worth": "₹300 Cr",
      "total_borrowing": "₹480 Cr"
    },
    {
      "period": "31 Mar 2024",
      "assets": "₹1,500 Cr",
      "total_income": "₹1,938 Cr",
      "pat": "₹67.99 Cr",
      "ebitda": "₹130 Cr",
      "net_worth": "₹380 Cr",
      "total_borrowing": "₹519 Cr"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "₹0",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "Dec 2025",
    "estimated_listing_price": "₹384"
  },

  "ipo_subscription_data": {
    "qib_ex_anchor": "1.06x",
    "hni_subscription": "0.41x",
    "retail_subscription": "0.86x",
    "total_subscription": "0.83x"
  },

  "ipo_intermediaries": {
    "registrar": "MUFG Intime India Pvt Ltd",
    "registrar_website": "https://linkintime.co.in",
    "company_secretary": "N/A",
    "compliance_officer": "N/A"
  },

  "ipo_lead_manager": {
    "lead_manager": "ICICI Securities Ltd, Nuvama Wealth Management Ltd"
  },

  "company_information": {
    "company_address": "Mumbai, Maharashtra, India",
    "company_website": "https://www.kshinternational.com",
    "company_email": "cs.connect@kshinternational.com",
    "company_phone": "+91-22-49186000"
  },

  "ipo_documents": {
    "drhp_link": "https://www.bseindia.com/corporates/download/306344/IPO%20Prior/DRHP_20250523194231.pdf",
    "rhp_link": "https://nsearchives.nseindia.com/content/ipo/RHP_KSHINTL.zip",
    "prospectus_pdf": "https://www.nuvama.com/wp-content/uploads/2025/12/18th-December-2025_KSH_-Prospectus.pdf",
    "investor_presentation": "https://www.chittorgarh.net/reports/anchor-investor/ksh-international-ipo-anchor-allocation.pdf"
  }
}
,
    {
  "id": 16,
  "name": "MARC Technocrats",
  "logo": "/images/ipo/marc-technocrats.png",
  "minInvestment": "₹2,23,200",
  "open": "17 Dec 2025",
  "close": "19 Dec 2025",
  "listing": "24 Dec 2025",
  "price": "88 – 93",
  "lot": 1200,

  "about_company": {
    "company_name": "MARC Technocrats Limited",
    "industry_sector": "Infrastructure Consultancy / Engineering Services",
    "founded_year": "2007",
    "promoters": [
      "Hitender Kumar"
    ],
    "description": "MARC Technocrats Limited provides infrastructure consultancy services including supervision and quality control, preparation of detailed project reports, techno-financial auditing, and pre-bid advisory services. The company primarily operates on a business-to-government model serving sectors like roads, railways, buildings, and water resources."
  },

  "ipo_basic_details": {
    "company_name": "MARC Technocrats Limited",
    "ipo_type": "SME IPO",
    "issue_type": "Book Built Issue",
    "face_value": "₹10 per share",
    "price_band_min": "₹88",
    "price_band_max": "₹93",
    "lot_size": 1200,
    "total_issue_size": "₹42.59 Cr",
    "fresh_issue_size": "₹34.13 Cr",
    "offer_for_sale": "₹8.46 Cr",
    "shares_offered": "45,79,200 shares",
    "listing_exchange": "NSE SME",
    "issue_price": "₹93",
    "minimum_investment": "₹2,23,200",
    "market_cap_post_issue": "₹122 Cr",
    "pre_issue_shareholding": "99.99%",
    "post_issue_shareholding": "73.55%"
  },

  "company_overview": {
    "business_model": "The company offers consultancy services across the lifecycle of infrastructure projects, primarily for government departments and agencies.",
    "products_services": [
      "Supervision and Quality Control (SQC)",
      "Detailed Project Reports (DPR)",
      "Techno-Financial Audits",
      "Pre-Bid Advisory Services"
    ],
    "competitive_strengths": [
      "Strong presence in government infrastructure projects",
      "End-to-end consultancy capabilities",
      "Experienced management team",
      "Growing infrastructure demand in India"
    ],
    "risks": [
      "Dependence on government contracts",
      "Project delays affecting cash flows",
      "High competition in consultancy space",
      "Working capital intensive operations"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "17 Dec 2025",
    "ipo_close_date": "19 Dec 2025",
    "basis_of_allotment_date": "22 Dec 2025",
    "refund_initiation_date": "23 Dec 2025",
    "demat_credit_date": "23 Dec 2025",
    "listing_date": "24 Dec 2025",
    "upi_mandate_deadline": "19 Dec 2025"
  },

  "ipo_objectives": {
    "capex": "₹10.25 Cr for equipment and machinery",
    "working_capital": "₹17.50 Cr",
    "general_corporate_purposes": "Remaining proceeds"
  },

  "investor_reservation": {
    "qib_quota": "N/A",
    "retail_quota": "35%",
    "hni_quota": "65%"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "2 lots",
      "shares": "2400",
      "amount": "₹2,23,200"
    },
    "retail_maximum": {
      "lot_size": "2 lots",
      "shares": "2400",
      "amount": "₹2,23,200"
    },
    "shni_minimum": {
      "lot_size": "3 lots",
      "shares": "3600",
      "amount": "₹3,34,800"
    },
    "bhni_minimum": {
      "lot_size": "6 lots",
      "shares": "7200",
      "amount": "₹6,69,600"
    }
  },

  "key_performance_indicators": {
    "roe": "31%",
    "roce": "N/A",
    "ronw": "31%",
    "pat_margin": "15.66%",
    "ebitda_margin": "N/A",
    "eps": "₹6.65",
    "nav_per_share": "N/A",
    "debt_to_equity": "0.03",
    "pe_ratio": "13.98x",
    "industry_pe": "20x"
  },

  "company_financial_data": [
    {
      "period": "31 Mar 2024",
      "assets": "₹30 Cr",
      "total_income": "₹26.94 Cr",
      "pat": "₹3.45 Cr",
      "ebitda": "N/A",
      "net_worth": "₹12 Cr",
      "total_borrowing": "₹0.3 Cr"
    },
    {
      "period": "31 Mar 2025",
      "assets": "₹45 Cr",
      "total_income": "₹48.56 Cr",
      "pat": "₹7.48 Cr",
      "ebitda": "N/A",
      "net_worth": "₹20 Cr",
      "total_borrowing": "₹0.6 Cr"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "₹0",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "Dec 2025",
    "estimated_listing_price": "₹93"
  },

  "ipo_subscription_data": {
    "qib_ex_anchor": "N/A",
    "hni_subscription": "N/A",
    "retail_subscription": "N/A",
    "total_subscription": "Strong (exact data varies)"
  },

  "ipo_intermediaries": {
    "registrar": "Maashitla Securities Pvt Ltd",
    "registrar_website": "N/A",
    "market_maker": "Giriraj Stock Broking Pvt Ltd"
  },

  "ipo_lead_manager": {
    "lead_manager": "Narnolia Financial Services Ltd"
  },

  "company_information": {
    "company_address": "Gurgaon, Haryana, India",
    "company_website": "https://www.mtplonline.in",
    "company_email": "investorrelations@mtplonline.in",
    "company_phone": "+91-127-6796960"
  },

  "ipo_documents": {
    "drhp_link": "https://nsearchives.nseindia.com/emerge/corporates/content/Registration_06022025143621_MARC_DRHP.pdf",
    "rhp_link": "https://nsearchives.nseindia.com/content/ipo/RHP_MARC.zip",
    "prospectus_pdf": "https://www.mtplonline.in/dist/pdf/prospectus.pdf",
    "investor_presentation": "N/A"
  }
}
,
   {
  "id": 17,
  "name": "Shyam Dhani Industries",
  "logo": "/images/ipo/shyam-dhani-industries.png",
  "minInvestment": "₹2,80,000",
  "open": "22 Dec 2025",
  "close": "24 Dec 2025",
  "listing": "30 Dec 2025",
  "price": "65 – 70",
  "lot": 2000,

  "about_company": {
    "company_name": "Shyam Dhani Industries Limited",
    "industry_sector": "FMCG / Spices & Food Processing",
    "founded_year": "1995",
    "promoters": [
      "Ramawtar Agarwal"
    ],
    "description": "Shyam Dhani Industries Limited is engaged in the manufacturing, processing, and distribution of spices, herbs, and grocery products under the brand 'Shyam'. The company processes over 160 varieties of spices and supplies products across domestic and export markets through B2B, retail, and online channels."
  },

  "ipo_basic_details": {
    "company_name": "Shyam Dhani Industries Limited",
    "ipo_type": "SME IPO",
    "issue_type": "Book Built Issue",
    "face_value": "₹10 per share",
    "price_band_min": "₹65",
    "price_band_max": "₹70",
    "lot_size": 2000,
    "total_issue_size": "₹38.49 Cr",
    "fresh_issue_size": "₹38.49 Cr",
    "offer_for_sale": "0",
    "shares_offered": "55,00,000 shares",
    "listing_exchange": "NSE SME",
    "issue_price": "₹70",
    "minimum_investment": "₹2,80,000",
    "market_cap_post_issue": "₹144.6 Cr",
    "pre_issue_shareholding": "100%",
    "post_issue_shareholding": "73% (approx)"
  },

  "company_overview": {
    "business_model": "The company operates a vertically integrated spice processing and distribution business serving B2B, retail, HoReCa, and export markets.",
    "products_services": [
      "Whole Spices",
      "Ground & Blended Spices",
      "Herbs & Seasonings",
      "Grocery Products (Poha, Rice, Salt)"
    ],
    "competitive_strengths": [
      "Wide portfolio of 160+ spice products",
      "Strong distribution across multiple channels",
      "Established brand presence in FMCG segment",
      "Integrated processing and packaging capabilities"
    ],
    "risks": [
      "Raw material price volatility (agri commodities)",
      "High competition in FMCG sector",
      "Dependence on supply chain and mandis",
      "SME liquidity risk post listing"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "22 Dec 2025",
    "ipo_close_date": "24 Dec 2025",
    "basis_of_allotment_date": "26 Dec 2025",
    "refund_initiation_date": "29 Dec 2025",
    "demat_credit_date": "29 Dec 2025",
    "listing_date": "30 Dec 2025",
    "upi_mandate_deadline": "24 Dec 2025"
  },

  "ipo_objectives": {
    "working_capital": "₹13.26 Cr",
    "debt_repayment": "₹10 Cr",
    "brand_marketing": "₹6.35 Cr",
    "capex": "₹1.63 Cr for machinery",
    "solar_project": "₹6.49 Cr rooftop solar",
    "general_corporate_purposes": "Remaining proceeds"
  },

  "investor_reservation": {
    "qib_quota": "N/A",
    "retail_quota": "35%",
    "hni_quota": "65%"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "2 lots",
      "shares": "4000",
      "amount": "₹2,80,000"
    },
    "retail_maximum": {
      "lot_size": "2 lots",
      "shares": "4000",
      "amount": "₹2,80,000"
    },
    "shni_minimum": {
      "lot_size": "3 lots",
      "shares": "6000",
      "amount": "₹4,20,000"
    },
    "bhni_minimum": {
      "lot_size": "7 lots",
      "shares": "14000",
      "amount": "₹9,80,000"
    }
  },

  "key_performance_indicators": {
    "roe": "41%",
    "roce": "N/A",
    "ronw": "41%",
    "pat_margin": "6.4%",
    "ebitda_margin": "11.7%",
    "eps": "₹5.6",
    "nav_per_share": "₹17",
    "debt_to_equity": "Moderate",
    "pe_ratio": "12.5x",
    "industry_pe": "30x"
  },

  "company_financial_data": [
    {
      "period": "31 Mar 2024",
      "assets": "₹90 Cr",
      "total_income": "₹107 Cr",
      "pat": "₹6.3 Cr",
      "ebitda": "₹12 Cr",
      "net_worth": "₹25 Cr",
      "total_borrowing": "₹20 Cr"
    },
    {
      "period": "31 Mar 2025",
      "assets": "₹110 Cr",
      "total_income": "₹124.68 Cr",
      "pat": "₹8.04 Cr",
      "ebitda": "₹14.5 Cr",
      "net_worth": "₹30 Cr",
      "total_borrowing": "₹25 Cr"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "₹35 – ₹70",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "Dec 2025",
    "estimated_listing_price": "₹105 – ₹140"
  },

  "ipo_subscription_data": {
    "qib_ex_anchor": "N/A",
    "hni_subscription": "Very High",
    "retail_subscription": "Very High",
    "total_subscription": "918x"
  },

  "ipo_intermediaries": {
    "registrar": "Bigshare Services Pvt Ltd",
    "registrar_website": "https://www.bigshareonline.com",
    "market_maker": "N/A"
  },

  "ipo_lead_manager": {
    "lead_manager": "Holani Consultants Pvt Ltd"
  },

  "company_information": {
    "company_address": "Jaipur, Rajasthan, India",
    "company_website": "https://www.shyamspices.co.in/",
    "company_email": "info@shyamspices.co.in",
    "company_phone": "+91 9257061811"
  },

  "ipo_documents": {
    "drhp_link": "https://nsearchives.nseindia.com/emerge/corporates/content/Registration_28032025164758_DRHP.pdf",
    "rhp_link": "https://nsearchives.nseindia.com/content/ipo/RHP_SHYAMDHANI.zip",
    "prospectus_pdf": "https://www.holaniconsultants.co.in/download/ipo/Shyam%20Dhani%20Industries%20Limited-prospectus.pdf",
    "investor_presentation": "https://www.chittorgarh.net/reports/anchor-investor/shyam-dhani-industries-ipo-anchor-allocation-letter.pdf"
  }
}
,
    {
  "id": 18,
  "name": "Global Ocean Logistics India",
  "logo": "/images/ipo/global-ocean-logistics-india.png",
  "minInvestment": "₹2,49,600",
  "open": "17 Dec 2025",
  "close": "19 Dec 2025",
  "listing": "24 Dec 2025",
  "price": "74 – 78",
  "lot": 3200,

  "about_company": {
    "company_name": "Global Ocean Logistics India Limited",
    "industry_sector": "Logistics / Freight Forwarding",
    "founded_year": "2021",
    "promoters": [
      "Niraj Nandkishore Narsaria"
    ],
    "description": "Global Ocean Logistics India Limited is a multi-modal logistics and freight forwarding company providing end-to-end supply chain solutions across ocean, air, road, and rail transportation. The company operates on an asset-light model and serves importers and exporters across 263 global ports through a network of over 20,000 agents."
  },

  "ipo_basic_details": {
    "company_name": "Global Ocean Logistics India Limited",
    "ipo_type": "SME IPO",
    "issue_type": "Book Built Issue",
    "face_value": "₹10 per share",
    "price_band_min": "₹74",
    "price_band_max": "₹78",
    "lot_size": 3200,
    "total_issue_size": "₹30.41 Cr",
    "fresh_issue_size": "₹30.41 Cr",
    "offer_for_sale": "0",
    "shares_offered": "38,99,200 shares",
    "listing_exchange": "BSE SME",
    "issue_price": "₹78",
    "minimum_investment": "₹2,49,600",
    "market_cap_post_issue": "₹113 Cr",
    "pre_issue_shareholding": "100%",
    "post_issue_shareholding": "73% (approx)"
  },

  "company_overview": {
    "business_model": "The company operates an asset-light logistics model providing freight forwarding, customs clearance, and 3PL services across domestic and international trade routes.",
    "products_services": [
      "Ocean Freight Forwarding",
      "Air Freight Services",
      "Road & Rail Transport",
      "Container Freight Station (CFS)",
      "Customs Clearance",
      "Project Logistics",
      "Third-Party Logistics (3PL)"
    ],
    "competitive_strengths": [
      "Asset-light scalable business model",
      "Global network of 20,000+ agents",
      "Presence across 23+ Indian states",
      "Operations across 260+ global ports"
    ],
    "risks": [
      "Thin profit margins in logistics sector",
      "Dependence on global trade volumes",
      "Highly competitive industry",
      "Working capital intensive business"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "17 Dec 2025",
    "ipo_close_date": "19 Dec 2025",
    "basis_of_allotment_date": "22 Dec 2025",
    "refund_initiation_date": "23 Dec 2025",
    "demat_credit_date": "23 Dec 2025",
    "listing_date": "24 Dec 2025",
    "upi_mandate_deadline": "19 Dec 2025"
  },

  "ipo_objectives": {
    "working_capital": "Funding working capital requirements",
    "general_corporate_purposes": "Other corporate purposes"
  },

  "investor_reservation": {
    "qib_quota": "Approx 35%",
    "retail_quota": "35%",
    "hni_quota": "30%"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "1 lot",
      "shares": "3200",
      "amount": "₹2,49,600"
    },
    "retail_maximum": {
      "lot_size": "1 lot",
      "shares": "3200",
      "amount": "₹2,49,600"
    },
    "shni_minimum": {
      "lot_size": "2 lots",
      "shares": "6400",
      "amount": "₹4,99,200"
    },
    "bhni_minimum": {
      "lot_size": "5 lots",
      "shares": "16000",
      "amount": "₹12,48,000"
    }
  },

  "key_performance_indicators": {
    "roe": "High growth phase",
    "roce": "N/A",
    "ronw": "N/A",
    "pat_margin": "3–4%",
    "ebitda_margin": "4–5%",
    "eps": "₹3.5 (approx)",
    "nav_per_share": "₹17 (approx)",
    "debt_to_equity": "Low",
    "pe_ratio": "22x (approx)",
    "industry_pe": "25x"
  },

  "company_financial_data": [
    {
      "period": "31 Mar 2024",
      "assets": "₹23.56 Cr",
      "total_income": "₹103.45 Cr",
      "pat": "₹2.63 Cr",
      "ebitda": "₹4.77 Cr",
      "net_worth": "₹8.57 Cr",
      "total_borrowing": "Low"
    },
    {
      "period": "31 Mar 2025",
      "assets": "₹35.22 Cr",
      "total_income": "₹191.60 Cr",
      "pat": "₹6.82 Cr",
      "ebitda": "₹9.39 Cr",
      "net_worth": "₹17.39 Cr",
      "total_borrowing": "Moderate"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "₹0",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "Dec 2025",
    "estimated_listing_price": "₹78"
  },

  "ipo_subscription_data": {
    "qib_ex_anchor": "Moderate",
    "hni_subscription": "Moderate",
    "retail_subscription": "Moderate",
    "total_subscription": "Good (exact varies)"
  },

  "ipo_intermediaries": {
    "registrar": "Kfin Technologies Limited",
    "registrar_website": "https://kfintech.com",
    "market_maker": "Mansi Share & Stock Broking"
  },

  "ipo_lead_manager": {
    "lead_manager": "Marwadi Chandarana Intermediaries Brokers Pvt Ltd"
  },

  "company_information": {
    "company_address": "C-101, Business Square Andheri Kurla Road,Andheri-EastMumbai, Maharashtra, 400093",
    "company_website": "http://www.globaloceanlogistics.in/",
    "company_email": "cs@globalocean.in",
    "company_phone": "+91 22 4877 8888"
  },

  "ipo_documents": {
    "drhp_link": "https://www.bsesme.com/download/344670/SME_IPO%20InPrinciple/DRHPGlobal07072025_20250707225105.pdf",
    "rhp_link": "https://www.bseindia.com/downloads/ipo/RHP&GID_Global_161220251303.zip",
    "prospectus_pdf": "https://ib.marwadichandaranagroup.com/images/investorPdf/GLOBAL_OCEAN_LOGISTICS_INDIA_LIMITED_Prospectus-Final.pdf",
    "investor_presentation": "https://www.chittorgarh.net/reports/anchor-investor/global-ocean-logistics-ipo-anchor-allocation-letter.pdf"
  }
}
,
   {
  "id": 19,
  "name": "Gujarat Kidney & Super Speciality ",
  "logo": "/images/ipo/gujarat-kidney-super-speciality.png",
  "minInvestment": "₹14,592",
  "open": "22 Dec 2025",
  "close": "24 Dec 2025",
  "listing": "30 Dec 2025",
  "price": "108 – 114",
  "lot": 128,

  "about_company": {
    "company_name": "Gujarat Kidney & Super Speciality Limited",
    "industry_sector": "Healthcare / Hospitals",
    "founded_year": "2017",
    "promoters": [
      "Pragnesh Yashwantsingh Bharpoda"
    ],
    "description": "Gujarat Kidney & Super Speciality Limited operates a chain of multi-speciality hospitals focused on secondary and tertiary healthcare services including nephrology, urology, and critical care. The company runs hospitals across Gujarat with integrated healthcare services."
  },

  "ipo_basic_details": {
    "company_name": "Gujarat Kidney & Super Speciality Limited",
    "ipo_type": "Mainboard IPO",
    "issue_type": "Book Built Issue",
    "face_value": "₹2 per share",
    "price_band_min": "₹108",
    "price_band_max": "₹114",
    "lot_size": 128,
    "total_issue_size": "₹250.80 Cr",
    "fresh_issue_size": "₹250.80 Cr",
    "offer_for_sale": "0",
    "shares_offered": "2,20,00,000 shares",
    "listing_exchange": "BSE, NSE",
    "issue_price": "₹114",
    "minimum_investment": "₹14,592",
    "market_cap_post_issue": "₹899 Cr",
    "pre_issue_shareholding": "100%",
    "post_issue_shareholding": "72.1% (approx)"
  },

  "company_overview": {
    "business_model": "The company operates multi-speciality hospitals providing secondary and tertiary care services including surgeries and critical care.",
    "products_services": [
      "Nephrology & Dialysis",
      "Urology",
      "Critical Care",
      "General Surgery",
      "Pharmacy Services"
    ],
    "competitive_strengths": [
      "Presence across multiple cities in Gujarat",
      "Focus on specialised kidney and urology care",
      "Asset-light expansion via acquisitions",
      "Growing demand for healthcare services"
    ],
    "risks": [
      "High valuation compared to earnings",
      "Dependence on regional operations",
      "Healthcare regulatory risks",
      "Competition from large hospital chains"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "22 Dec 2025",
    "ipo_close_date": "24 Dec 2025",
    "basis_of_allotment_date": "26 Dec 2025",
    "refund_initiation_date": "27 Dec 2025",
    "demat_credit_date": "29 Dec 2025",
    "listing_date": "30 Dec 2025",
    "upi_mandate_deadline": "24 Dec 2025"
  },

  "ipo_objectives": {
    "acquisition": "₹77 Cr for Parekhs Hospital (Ahmedabad)",
    "subsidiary_investment": "₹10.78 Cr for Harmony Medicare",
    "debt_repayment": "₹1.2 Cr",
    "capex": "₹30 Cr new hospital (Vadodara)",
    "equipment": "₹6.8 Cr robotics equipment",
    "general_corporate_purposes": "Remaining proceeds"
  },

  "investor_reservation": {
    "qib_quota": "75%",
    "retail_quota": "10%",
    "hni_quota": "15%"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "1 lot",
      "shares": "128",
      "amount": "₹14,592"
    },
    "retail_maximum": {
      "lot_size": "13 lots",
      "shares": "1664",
      "amount": "₹1,89,312"
    },
    "shni_minimum": {
      "lot_size": "14 lots",
      "shares": "1792",
      "amount": "₹2,04,288"
    },
    "bhni_minimum": {
      "lot_size": "69 lots",
      "shares": "8832",
      "amount": "₹10,06,848"
    }
  },

  "key_performance_indicators": {
    "roe": "N/A",
    "roce": "N/A",
    "ronw": "N/A",
    "pat_margin": "23% (approx)",
    "ebitda_margin": "N/A",
    "eps": "₹1.86 (approx)",
    "nav_per_share": "N/A",
    "debt_to_equity": "Moderate",
    "pe_ratio": "61x (approx)",
    "industry_pe": "35x"
  },

  "company_financial_data": [
    {
      "period": "31 Mar 2024",
      "assets": "₹60 Cr",
      "total_income": "₹4.8 Cr",
      "pat": "₹1.7 Cr",
      "ebitda": "N/A",
      "net_worth": "₹15 Cr",
      "total_borrowing": "Moderate"
    },
    {
      "period": "31 Mar 2025",
      "assets": "₹85 Cr",
      "total_income": "₹40.24 Cr",
      "pat": "₹9.49 Cr",
      "ebitda": "N/A",
      "net_worth": "₹30 Cr",
      "total_borrowing": "Moderate"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "₹4 – ₹7",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "Dec 2025",
    "estimated_listing_price": "₹118 – ₹121"
  },

  "ipo_subscription_data": {
    "qib_ex_anchor": "Strong",
    "hni_subscription": "Moderate",
    "retail_subscription": "Moderate",
    "total_subscription": "5.21x"
  },

  "ipo_intermediaries": {
    "registrar": "MUFG Intime India Pvt Ltd",
    "registrar_website": "https://linkintime.co.in"
  },

  "ipo_lead_manager": {
    "lead_manager": "Nirbhay Capital Services Pvt Ltd"
  },

  "company_information": {
    "company_address": "Plot No. 1, City Sarve No. 1537/A,Jetalpur Road, Gokak Mill Compound,Alkapuri,Vadodara, Gujarat, 390020",
    "company_website": "http://www.gujaratsuperspecialityhospital.com/",
    "company_email": "info@gujaratsuperspecialityhospital.com",
    "company_phone": "+91 265 298 4800"
  },

  "ipo_documents": {
    "drhp_link": "https://www.sebi.gov.in/filings/public-issues/apr-2025/gujarat-kidney-and-super-speciality-limited_93248.html",
    "rhp_link": "https://nsearchives.nseindia.com/content/ipo/RHP_GKSL.zip",
    "prospectus_pdf": "https://nsearchives.nseindia.com/corporate/FP_INE0V0W01025_27DEC2025.pdf",
    "investor_presentation": "https://www.chittorgarh.net/reports/anchor-investor/gujarat-kidney-superspeciality-ipo-anchor-allocation.pdf"
  }
}
,
    {
  "id": 20,
  "name": "E to E Transportation",
  "logo": "/images/ipo/e2e-rail.png",
  "minInvestment": "₹2,78,400",
  "open": "26 Dec 2025",
  "close": "30 Dec 2025",
  "listing": "02 Jan 2026",
  "price": "164 – 174",
  "lot": 800,

  "about_company": {
    "company_name": "E to E Transportation Infrastructure Limited",
    "industry_sector": "Railway Engineering / Infrastructure",
    "founded_year": "2010",
    "promoters": [
      "Vinay Kunjuri Panduranga Rao"
    ],
    "description": "E to E Transportation Infrastructure Limited operates as a system integrator in railway engineering, providing end-to-end solutions including signalling, telecommunication, electrification, and turnkey rail infrastructure projects across India."
  },

  "ipo_basic_details": {
    "company_name": "E to E Transportation Infrastructure Limited",
    "ipo_type": "SME IPO",
    "issue_type": "Book Built Issue",
    "face_value": "₹10 per share",
    "price_band_min": "₹164",
    "price_band_max": "₹174",
    "lot_size": 800,
    "total_issue_size": "₹84.22 Cr",
    "fresh_issue_size": "₹84.22 Cr",
    "offer_for_sale": "0",
    "shares_offered": "48,40,000 shares",
    "listing_exchange": "NSE SME",
    "issue_price": "₹174",
    "minimum_investment": "₹2,78,400",
    "market_cap_post_issue": "₹300.28 Cr",
    "pre_issue_shareholding": "100%",
    "post_issue_shareholding": "Approx 72%"
  },

  "company_overview": {
    "business_model": "The company executes railway infrastructure projects on a turnkey basis including design, procurement, installation, and maintenance.",
    "products_services": [
      "Railway Signalling Systems",
      "Telecommunication Systems",
      "Track Electrification",
      "Turnkey Railway Projects",
      "Railway Safety Systems (Kavach)"
    ],
    "competitive_strengths": [
      "Strong order book (~₹925 Cr)",
      "Presence in high-growth railway modernization sector",
      "Asset-light execution model",
      "Experienced engineering team"
    ],
    "risks": [
      "Heavy dependence on Indian Railways",
      "High receivables and delayed payments risk",
      "Project-based revenue volatility",
      "Working capital intensive business"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "26 Dec 2025",
    "ipo_close_date": "30 Dec 2025",
    "basis_of_allotment_date": "31 Dec 2025",
    "refund_initiation_date": "01 Jan 2026",
    "demat_credit_date": "01 Jan 2026",
    "listing_date": "02 Jan 2026",
    "upi_mandate_deadline": "30 Dec 2025"
  },

  "ipo_objectives": {
    "working_capital": "₹70 Cr",
    "general_corporate_purposes": "Remaining proceeds"
  },

  "investor_reservation": {
    "qib_quota": "50%",
    "retail_quota": "35%",
    "hni_quota": "15%"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "2 lots",
      "shares": "1600",
      "amount": "₹2,78,400"
    },
    "retail_maximum": {
      "lot_size": "2 lots",
      "shares": "1600",
      "amount": "₹2,78,400"
    },
    "shni_minimum": {
      "lot_size": "3 lots",
      "shares": "2400",
      "amount": "₹4,17,600"
    },
    "bhni_minimum": {
      "lot_size": "7 lots",
      "shares": "5600",
      "amount": "₹9,74,400"
    }
  },

  "key_performance_indicators": {
    "roe": "Negative (recent period)",
    "roce": "Low",
    "ronw": "Negative",
    "pat_margin": "-6.7%",
    "ebitda_margin": "0.29%",
    "eps": "N/A",
    "nav_per_share": "₹87.54",
    "debt_to_equity": "High",
    "pe_ratio": "21.46x",
    "industry_pe": "25x"
  },

  "company_financial_data": [
    {
      "period": "31 Mar 2024",
      "assets": "₹200.89 Cr",
      "total_income": "₹172.50 Cr",
      "pat": "₹10.26 Cr",
      "ebitda": "₹21.70 Cr",
      "net_worth": "₹66.85 Cr",
      "total_borrowing": "₹61.17 Cr"
    },
    {
      "period": "31 Mar 2025",
      "assets": "₹295.43 Cr",
      "total_income": "₹250.80 Cr",
      "pat": "₹14.37 Cr",
      "ebitda": "₹31.89 Cr",
      "net_worth": "₹116.05 Cr",
      "total_borrowing": "₹66.17 Cr"
    },
    {
      "period": "30 Sep 2025",
      "assets": "₹310.84 Cr",
      "total_income": "₹110.99 Cr",
      "pat": "-₹7.48 Cr",
      "ebitda": "₹0.32 Cr",
      "net_worth": "₹108.70 Cr",
      "total_borrowing": "₹113.51 Cr"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "₹120 – ₹130",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "Dec 2025",
    "estimated_listing_price": "₹300+"
  },

  "ipo_subscription_data": {
    "qib_ex_anchor": "236x",
    "hni_subscription": "644x",
    "retail_subscription": "544x",
    "total_subscription": "526x"
  },

  "ipo_intermediaries": {
    "registrar": "MUFG Intime India Pvt Ltd",
    "registrar_website": "https://linkintime.co.in",
    "market_maker": "N/A"
  },

  "ipo_lead_manager": {
    "lead_manager": "Hem Securities Ltd"
  },

  "company_information": {
    "company_address": "10th Floor, Sattva Galleria Survey, Nos. 19/2 and 20/1,Bellary Road, Byatarayanapura, Bangalore North Bangalore Urban, Karnataka, 560092",
    "company_website": "https://etoerail.com/",
    "company_email": "srilakshmi.surendran@etoerail.com",
    "company_phone": "N/A"
  },

  "ipo_documents": {
    "drhp_link": "https://nsearchives.nseindia.com/emerge/corporates/content/Registration_29092025222107_E_TO_E_DRHP.pdf",
    "rhp_link": "https://nsearchives.nseindia.com/emerge/corporates/content/EToETransportationInfrastructureLimited_RHP.pdf",
    "prospectus_pdf": "https://www.chittorgarh.net/reports/ipo_notes/e-to-e-transportation-ipo-prospectus.pdf",
    "investor_presentation": "https://www.chittorgarh.net/reports/anchor-investor/e-to-e-transportation-ipo-anchor-allocation-letter.pdf"
  }
}
 ,
{
  "id": 21,
  "name": "Gabion Technologies",
  "logo": "/images/ipo/Gabion.png",
  "minInvestment": "₹2,59,200",
  "open": "06 Jan 2026",
  "close": "08 Jan 2026",
  "listing": "13 Jan 2026",
  "price": "76 – 81",
  "lot": 1600,

  "about_company": {
    "company_name": "Gabion Technologies India Limited",
    "industry_sector": "Infrastructure / Geotechnical Engineering",
    "founded_year": "2008",
    "promoters": [
      "N/A"
    ],
    "description": "Gabion Technologies India Limited is engaged in the design, manufacturing, and installation of gabions, rockfall protection systems, and geosynthetic materials used in infrastructure, slope stabilisation, mining, and environmental protection projects."
  },

  "ipo_basic_details": {
    "company_name": "Gabion Technologies India Limited",
    "ipo_type": "SME IPO",
    "issue_type": "Book Built Issue",
    "face_value": "₹10 per share",
    "price_band_min": "₹76",
    "price_band_max": "₹81",
    "lot_size": 1600,
    "total_issue_size": "₹29.16 Cr",
    "fresh_issue_size": "₹29.16 Cr",
    "offer_for_sale": "0",
    "shares_offered": "36,00,000 shares",
    "listing_exchange": "BSE SME",
    "issue_price": "₹81",
    "minimum_investment": "₹2,59,200",
    "market_cap_post_issue": "Approx ₹110 Cr",
    "pre_issue_shareholding": "100%",
    "post_issue_shareholding": "Approx 73%"
  },

  "company_overview": {
    "business_model": "The company provides integrated geotechnical engineering solutions including manufacturing and installation for infrastructure and environmental protection projects.",
    "products_services": [
      "Gabion Boxes & Mattresses",
      "Rockfall Protection Systems",
      "Geosynthetics (Geogrids, Geotextiles)",
      "Slope Stabilisation Solutions"
    ],
    "competitive_strengths": [
      "Niche geotechnical engineering segment",
      "End-to-end solution provider (design + execution)",
      "Presence across infrastructure, mining, irrigation sectors",
      "Growing demand from government infra projects"
    ],
    "risks": [
      "Project-based revenue variability",
      "Dependence on government contracts",
      "Execution and working capital risks",
      "Limited scalability compared to large infra firms"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "06 Jan 2026",
    "ipo_close_date": "08 Jan 2026",
    "basis_of_allotment_date": "09 Jan 2026",
    "refund_initiation_date": "10 Jan 2026",
    "demat_credit_date": "12 Jan 2026",
    "listing_date": "13 Jan 2026",
    "upi_mandate_deadline": "08 Jan 2026"
  },

  "ipo_objectives": {
    "working_capital": "₹22.11 Cr",
    "capex": "₹1.05 Cr (plant & machinery)",
    "general_corporate_purposes": "Remaining proceeds"
  },

  "investor_reservation": {
    "qib_quota": "Approx 50%",
    "retail_quota": "35%",
    "hni_quota": "15%"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "2 lots",
      "shares": "3200",
      "amount": "₹2,59,200"
    },
    "retail_maximum": {
      "lot_size": "2 lots",
      "shares": "3200",
      "amount": "₹2,59,200"
    },
    "shni_minimum": {
      "lot_size": "3 lots",
      "shares": "4800",
      "amount": "₹3,88,800"
    },
    "bhni_minimum": {
      "lot_size": "8 lots",
      "shares": "12800",
      "amount": "₹10,36,800"
    }
  },

  "key_performance_indicators": {
    "roe": "30%",
    "roce": "19%",
    "ronw": "30%",
    "pat_margin": "6.6%",
    "ebitda_margin": "14.9%",
    "eps": "₹6.65",
    "nav_per_share": "N/A",
    "debt_to_equity": "High (~2.1)",
    "pe_ratio": "12–17x",
    "industry_pe": "25x"
  },

  "company_financial_data": [
    {
      "period": "31 Mar 2024",
      "assets": "₹70 Cr",
      "total_income": "₹104.76 Cr",
      "pat": "₹5.76 Cr",
      "ebitda": "₹13.15 Cr",
      "net_worth": "₹25 Cr",
      "total_borrowing": "High"
    },
    {
      "period": "31 Mar 2025",
      "assets": "₹80 Cr",
      "total_income": "₹100.36 Cr",
      "pat": "₹6.61 Cr",
      "ebitda": "₹15.06 Cr",
      "net_worth": "₹30 Cr",
      "total_borrowing": "High"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "₹20 – ₹25",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "Jan 2026",
    "estimated_listing_price": "₹100 – ₹106"
  },

  "ipo_subscription_data": {
    "qib_ex_anchor": "271x",
    "hni_subscription": "1467x",
    "retail_subscription": "867x",
    "total_subscription": "826x"
  },

  "ipo_intermediaries": {
    "registrar": "Kfin Technologies Limited",
    "registrar_website": "https://kfintech.com"
  },

  "ipo_lead_manager": {
    "lead_manager": "GYR Capital Advisors Pvt Ltd"
  },

  "company_information": {
    "company_address": "38, SF Near MCD Park Mohammadpur New Delhi, New Delhi, 110066",
    "company_website": "https://gabionindia.com/",
    "company_email": "compliance@gabionindia.com",
    "company_phone": "9818793385"
  },

  "ipo_documents": {
    "drhp_link": "https://www.bsesme.com/download/374947/SME_IPO%20InPrinciple/26.Final_DRHP_30.09.2025_Gabion_20250930161543.pdf",
    "rhp_link": "https://www.bseindia.com/downloads/ipo/RHP%20&%20GID_020120260941.zip",
    "prospectus_pdf": "https://gabionindia.com//wp-content/themes/gabion/RHP/Final%20Prospectus.pdf",
    "investor_presentation": "https://www.chittorgarh.net/reports/anchor-investor/gabion_technologies_anchorallocationreport.pdf"
  }
}
,
{
  "id": 22,
  "name": "Victory Electric Vehicles",
  "logo": "/images/ipo/VictoryElectricVehicles.png",
  "minInvestment": "₹1,23,000",
  "open": "07 Jan 2026",
  "close": "09 Jan 2026",
  "listing": "14 Jan 2026",
  "price": "₹41",
  "lot": 3000,

  "about_company": {
    "company_name": "Victory Electric Vehicles International Limited",
    "industry_sector": "Electric Vehicles / Automotive",
    "founded_year": "2018",
    "promoters": [
      "Sanjay Kumar Popli"
    ],
    "description": "Victory Electric Vehicles International Limited manufactures electric vehicles including e-rickshaws, e-loaders, cargo three-wheelers, and electric scooters. The company also produces customized electric vehicles for commercial applications such as food vending and ice cream distribution."
  },

  "ipo_basic_details": {
    "company_name": "Victory Electric Vehicles International Limited",
    "ipo_type": "SME IPO",
    "issue_type": "Fixed Price Issue",
    "face_value": "₹5 per share",
    "price_band_min": "₹41",
    "price_band_max": "₹41",
    "lot_size": 3000,
    "total_issue_size": "₹34.56 Cr",
    "fresh_issue_size": "₹34.56 Cr",
    "offer_for_sale": "0",
    "shares_offered": "84,30,000 shares",
    "listing_exchange": "NSE SME (NSE Emerge)",
    "issue_price": "₹41",
    "minimum_investment": "₹1,23,000",
    "market_cap_post_issue": "Approx ₹95–100 Cr",
    "pre_issue_shareholding": "Approx 97%",
    "post_issue_shareholding": "Approx 73–75%"
  },

  "company_overview": {
    "business_model": "The company manufactures and sells electric vehicles through dealer and distribution networks, focusing on last-mile mobility and commercial EV solutions.",
    "products_services": [
      "E-Rickshaws",
      "Electric Cargo Loaders",
      "Passenger Electric Three-Wheelers",
      "Electric Scooters",
      "Customized Commercial EVs"
    ],
    "competitive_strengths": [
      "Presence in fast-growing EV segment",
      "Diverse product portfolio (L3 & L5 vehicles)",
      "Customization capability for commercial use cases",
      "Growing demand for last-mile electric mobility"
    ],
    "risks": [
      "Highly competitive EV industry",
      "Dependence on government subsidies and policies",
      "Low entry barriers in e-rickshaw segment",
      "Execution and scaling challenges",
      "Volatility in battery/raw material costs"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "07 Jan 2026",
    "ipo_close_date": "09 Jan 2026",
    "basis_of_allotment_date": "12 Jan 2026",
    "refund_initiation_date": "13 Jan 2026",
    "demat_credit_date": "13 Jan 2026",
    "listing_date": "14 Jan 2026",
    "upi_mandate_deadline": "09 Jan 2026"
  },

  "ipo_objectives": {
    "working_capital": "₹18 Cr",
    "capex": "₹5 Cr",
    "general_corporate_purposes": "₹6.5–7 Cr approx"
  },

  "investor_reservation": {
    "qib_quota": "0% (SME issue, mostly not allocated)",
    "retail_quota": "50%",
    "hni_quota": "50%"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "1 lot",
      "shares": "3000",
      "amount": "₹1,23,000"
    },
    "retail_maximum": {
      "lot_size": "1 lot",
      "shares": "3000",
      "amount": "₹1,23,000"
    },
    "shni_minimum": {
      "lot_size": "2 lots",
      "shares": "6000",
      "amount": "₹2,46,000"
    },
    "bhni_minimum": {
      "lot_size": "9 lots",
      "shares": "27000",
      "amount": "₹11,07,000"
    }
  },

  "key_performance_indicators": {
    "roe": "N/A",
    "roce": "N/A",
    "ronw": "N/A",
    "pat_margin": "9.6%",
    "ebitda_margin": "N/A",
    "eps": "₹1.35 – ₹1.50 (approx)",
    "nav_per_share": "N/A",
    "debt_to_equity": "0.29",
    "pe_ratio": "30.4x",
    "industry_pe": "35–45x (EV sector)"
  },

  "company_financial_data": [
    {
      "period": "31 Mar 2023",
      "assets": "₹25–30 Cr",
      "total_income": "₹52.14 Cr",
      "pat": "₹0.78 Cr",
      "ebitda": "N/A",
      "net_worth": "₹2.20 Cr",
      "total_borrowing": "Low–Moderate"
    },
    {
      "period": "31 Mar 2024",
      "assets": "₹30–35 Cr",
      "total_income": "₹48.76 Cr",
      "pat": "₹4.89 Cr",
      "ebitda": "N/A",
      "net_worth": "₹7.09 Cr",
      "total_borrowing": "Moderate"
    },
    {
      "period": "31 Mar 2025",
      "assets": "₹33–40 Cr",
      "total_income": "₹51.06 Cr",
      "pat": "₹5.17 Cr",
      "ebitda": "N/A",
      "net_worth": "₹7.04 Cr",
      "total_borrowing": "Moderate"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "₹0 to ₹2 (very weak)",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "Jan 2026",
    "estimated_listing_price": "₹40 – ₹42"
  },

  "ipo_subscription_data": {
    "qib_ex_anchor": "0.0x",
    "hni_subscription": "0.38x",
    "retail_subscription": "0.98x",
    "total_subscription": "≈1.0x"
  },

  "ipo_intermediaries": {
    "registrar": "Maashitla Securities Private Limited",
    "registrar_website": "https://maashitla.com"
  },

  "ipo_lead_manager": {
    "lead_manager": "Corpwis Advisors Private Limited"
  },

  "company_information": {
    "company_address": "Plot no 6, Second Floor A-5, Maa Bhagwati Apartment Paschim Vihar West Delhi, New Delhi, 110063",
    "company_website": "http://www.victoryevehilceindia.com/",
    "company_email": "compliance@victoryevindia.com",
    "company_phone": "9643108966"
  },

  "ipo_documents": {
    "drhp_link": "https://nsearchives.nseindia.com/emerge/corporates/content/AD_IPO_5056_06022025185755.zip",
    "rhp_link": "Available via NSE SME filings",
    "prospectus_pdf": "https://www.sebi.gov.in/filings/public-issues/jan-2026/victory-electric-vehicles-international-limited_98841.html",
    "investor_presentation": "N/A"
  }
},

 {
  "id": 23,
  "name": "Yajur Fibres",
  "logo": "/images/ipo/Yajur.png",
  "minInvestment": "₹2,78,400",
  "open": "07 Jan 2026",
  "close": "09 Jan 2026",
  "listing": "14 Jan 2026",
  "price": "₹168 – ₹174",
  "lot": 800,

  "about_company": {
    "company_name": "Yajur Fibres Limited",
    "industry_sector": "Textiles / Bast Fibre Manufacturing",
    "founded_year": "1980",
    "promoters": [
      "Kankaria Group"
    ],
    "description": "Yajur Fibres Limited is engaged in processing and manufacturing cottonised bast fibres such as flax (linen), jute, and hemp. The company converts long fibres into cotton-like fibres used in spinning mills and textile manufacturing across domestic and international markets."
  },

  "ipo_basic_details": {
    "company_name": "Yajur Fibres Limited",
    "ipo_type": "SME IPO",
    "issue_type": "Book Built Issue",
    "face_value": "₹10 per share",
    "price_band_min": "₹168",
    "price_band_max": "₹174",
    "lot_size": 800,
    "total_issue_size": "₹120.41 Cr",
    "fresh_issue_size": "₹120.41 Cr",
    "offer_for_sale": "0",
    "shares_offered": "69,20,000 shares",
    "listing_exchange": "BSE SME",
    "issue_price": "₹174",
    "minimum_investment": "₹2,78,400",
    "market_cap_post_issue": "Approx ₹395 Cr (pre-issue valuation basis)",
    "pre_issue_shareholding": "100%",
    "post_issue_shareholding": "69.49%"
  },

  "company_overview": {
    "business_model": "The company operates a B2B model supplying cottonised bast fibres to spinning and textile mills, with focus on value-added fibre processing.",
    "products_services": [
      "Cottonised Flax (Linen Fibre)",
      "Cottonised Jute Fibre",
      "Cottonised Hemp Fibre",
      "Blended Bast Fibres"
    ],
    "competitive_strengths": [
      "40+ years experience in bast fibre segment",
      "Part of established Kankaria Group",
      "Niche cottonised fibre technology",
      "Strong growth in revenue and profitability",
      "Export and domestic presence"
    ],
    "risks": [
      "High debt levels",
      "Cyclical textile industry",
      "Profit consistency concerns",
      "Working capital intensive operations",
      "Weak listing sentiment observed"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "07 Jan 2026",
    "ipo_close_date": "09 Jan 2026",
    "basis_of_allotment_date": "10 Jan 2026",
    "refund_initiation_date": "13 Jan 2026",
    "demat_credit_date": "13 Jan 2026",
    "listing_date": "14 Jan 2026",
    "upi_mandate_deadline": "09 Jan 2026"
  },

  "ipo_objectives": {
    "capex": "₹11.9 Cr (capacity expansion & machinery)",
    "subsidiary_investment": "₹48 Cr (Yashodha Linen Yarn – greenfield plant)",
    "working_capital": "₹36 Cr",
    "general_corporate_purposes": "Remaining amount"
  },

  "investor_reservation": {
    "qib_quota": "<1%",
    "retail_quota": "≈66%",
    "hni_quota": "Remaining"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "2 lots",
      "shares": "1600",
      "amount": "₹2,78,400"
    },
    "retail_maximum": {
      "lot_size": "2 lots",
      "shares": "1600",
      "amount": "₹2,78,400"
    },
    "shni_minimum": {
      "lot_size": "3 lots",
      "shares": "2400",
      "amount": "₹4,17,600"
    },
    "bhni_minimum": {
      "lot_size": "8 lots",
      "shares": "6400",
      "amount": "₹11,13,600"
    }
  },

  "key_performance_indicators": {
    "roe": "26.9%",
    "roce": "17.1%",
    "ronw": "26.9%",
    "pat_margin": "8.3%",
    "ebitda_margin": "13.4%",
    "eps": "₹4.71 (post issue)",
    "nav_per_share": "N/A",
    "debt_to_equity": "1.35",
    "pe_ratio": "≈36.9x",
    "industry_pe": "20–25x"
  },

  "company_financial_data": [
    {
      "period": "31 Mar 2024",
      "assets": "N/A",
      "total_income": "₹84.85 Cr",
      "pat": "₹4.27 Cr",
      "ebitda": "₹8.01 Cr",
      "net_worth": "N/A",
      "total_borrowing": "₹66+ Cr"
    },
    {
      "period": "31 Mar 2025",
      "assets": "N/A",
      "total_income": "₹141.99 Cr",
      "pat": "₹11.68 Cr",
      "ebitda": "₹18.85 Cr",
      "net_worth": "N/A",
      "total_borrowing": "₹73+ Cr"
    },
    {
      "period": "Nov 2025",
      "assets": "N/A",
      "total_income": "₹69.41 Cr",
      "pat": "₹7.12 Cr",
      "ebitda": "N/A",
      "net_worth": "N/A",
      "total_borrowing": "N/A"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "₹0 to ₹5 (declined from ~₹50 early)",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "Jan 2026",
    "estimated_listing_price": "₹170 – ₹174 (but sentiment weak)"
  },

  "ipo_subscription_data": {
    "qib_ex_anchor": "Negligible",
    "hni_subscription": "Moderate",
    "retail_subscription": "Strong",
    "total_subscription": "1.31x"
  },

  "ipo_intermediaries": {
    "registrar": "MAS Services Limited",
    "registrar_website": "https://masserv.com"
  },

  "ipo_lead_manager": {
    "lead_manager": "Horizon Management Private Limited"
  },

  "company_information": {
    "company_address": "5,Middleton Street,Kolkata, West Bengal, 700071",
    "company_website": "http://www.yajurfibres.com/",
    "company_email": "investors@yajurfibres.com",
    "company_phone": "+91 33 2283 5028"
  },

  "ipo_documents": {
    "drhp_link": "https://www.bseindia.com/corporates/download/398442/YajurDRHPFilingVersion17032025_20250317193944.pdf",
    "rhp_link": "https://www.bsesme.com/download/398442/SME_IPO%20Open/Yajur%20Fibres%20Limited%20RHP_20260106140059.pdf",
    "prospectus_pdf": "https://www.bsesme.com/download/398442/SME_IPO%20BasisOfAllotment/PROSPECTUS_20260112114959.pdf",
    "investor_presentation": "N/A"
  }
},
 {
  "id": 24,
  "name": "Bharat Coking Coal",
  "logo": "/images/ipo/BharatCokingCoal.png",
  "minInvestment": "₹13,800",
  "open": "09 Jan 2026",
  "close": "13 Jan 2026",
  "listing": "16 Jan 2026",
  "price": "₹21 – ₹23",
  "lot": 600,

  "about_company": {
    "company_name": "Bharat Coking Coal Limited",
    "industry_sector": "Coal Mining / Energy",
    "founded_year": "1972",
    "promoters": [
      "Coal India Limited",
      "Government of India"
    ],
    "description": "Bharat Coking Coal Limited (BCCL) is a wholly owned subsidiary of Coal India and India’s largest producer of coking coal, primarily used in steel manufacturing. The company operates across Jharia and Raniganj coalfields with a large reserve base."
  },

  "ipo_basic_details": {
    "company_name": "Bharat Coking Coal Limited",
    "ipo_type": "Mainboard IPO",
    "issue_type": "Offer For Sale (OFS)",
    "face_value": "₹10 per share",
    "price_band_min": "₹21",
    "price_band_max": "₹23",
    "lot_size": 600,
    "total_issue_size": "₹1,068 – ₹1,071 Cr",
    "fresh_issue_size": "0",
    "offer_for_sale": "46.57 Cr shares",
    "shares_offered": "46,57,00,000 shares",
    "listing_exchange": "NSE & BSE",
    "issue_price": "₹23",
    "minimum_investment": "₹13,800",
    "market_cap_post_issue": "Approx ₹10,700 Cr",
    "pre_issue_shareholding": "100%",
    "post_issue_shareholding": "≈90%"
  },

  "company_overview": {
    "business_model": "The company mines, processes, and supplies coking and non-coking coal to steel and power industries. It operates through opencast and underground mining and also runs coal washeries.",
    "products_services": [
      "Coking Coal",
      "Non-Coking Coal",
      "Washed Coal",
      "Coal Washeries"
    ],
    "competitive_strengths": [
      "Largest coking coal producer in India (~58.5% share)",
      "Huge reserves (~7.9 billion tonnes)",
      "Strong parent backing (Coal India)",
      "Established mining infrastructure (34 mines)",
      "Critical role in steel industry supply chain"
    ],
    "risks": [
      "Profit volatility (recent sharp decline)",
      "Environmental and regulatory risks",
      "Dependence on steel sector demand",
      "Rising receivables and working capital pressure",
      "Coal sector long-term ESG concerns"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "09 Jan 2026",
    "ipo_close_date": "13 Jan 2026",
    "basis_of_allotment_date": "14 Jan 2026",
    "refund_initiation_date": "15 Jan 2026",
    "demat_credit_date": "15 Jan 2026",
    "listing_date": "16 Jan 2026",
    "upi_mandate_deadline": "13 Jan 2026"
  },

  "ipo_objectives": {
    "note": "Entire IPO is Offer For Sale; company will not receive proceeds",
    "fund_utilization": "Proceeds go to Coal India for capex and general purposes"
  },

  "investor_reservation": {
    "qib_quota": "50%",
    "retail_quota": "35%",
    "hni_quota": "15%",
    "employee_reservation": "5%",
    "shareholder_reservation": "10% (Coal India shareholders)"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "1 lot",
      "shares": "600",
      "amount": "₹13,800"
    },
    "retail_maximum": {
      "lot_size": "13 lots",
      "shares": "7800",
      "amount": "₹1,79,400"
    },
    "shni_minimum": {
      "lot_size": "14 lots",
      "shares": "8400",
      "amount": "₹1,93,200"
    },
    "bhni_minimum": {
      "lot_size": "73 lots",
      "shares": "43800",
      "amount": "₹10,07,400"
    }
  },

  "key_performance_indicators": {
    "roe": "≈20–21%",
    "roce": "≈29–30%",
    "ronw": "≈20%",
    "pat_margin": "≈8–9%",
    "ebitda_margin": "N/A",
    "eps": "₹2.66",
    "nav_per_share": "N/A",
    "debt_to_equity": "Low / Near zero (historically)",
    "pe_ratio": "≈8–10x",
    "industry_pe": "10–15x"
  },

  "company_financial_data": [
    {
      "period": "31 Mar 2023",
      "assets": "N/A",
      "total_income": "₹12,624 Cr",
      "pat": "₹665 Cr",
      "ebitda": "N/A",
      "net_worth": "N/A",
      "total_borrowing": "Low"
    },
    {
      "period": "31 Mar 2024",
      "assets": "N/A",
      "total_income": "₹14,246 Cr",
      "pat": "₹1,564 Cr",
      "ebitda": "N/A",
      "net_worth": "N/A",
      "total_borrowing": "Low"
    },
    {
      "period": "31 Mar 2025",
      "assets": "N/A",
      "total_income": "₹13,803 – ₹14,402 Cr",
      "pat": "₹1,240 Cr",
      "ebitda": "N/A",
      "net_worth": "N/A",
      "total_borrowing": "Increasing (~₹1,500 Cr by Sep 2025)"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "₹11 – ₹16",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "Jan 2026",
    "estimated_listing_price": "₹34 – ₹45"
  },

  "ipo_subscription_data": {
    "qib_ex_anchor": "Very strong",
    "hni_subscription": "Very high",
    "retail_subscription": "Strong",
    "total_subscription": "≈147x"
  },

  "ipo_intermediaries": {
    "registrar": "Kfin Technologies Limited",
    "registrar_website": "https://kfintech.com"
  },

  "ipo_lead_manager": {
    "lead_manager": [
      "ICICI Securities",
      "IDBI Capital Markets & Securities"
    ]
  },

  "company_information": {
    "company_address": "Koyla Bhawan,Koyla Nagar Dhanbad, Jharkhand, 826005",
    "company_website": "https://bcclweb.in",
    "company_email": "cos.bccl@coalindia.in",
    "company_phone": "0326-2230190"
  },

  "ipo_documents": {
    "drhp_link": "https://www.sebi.gov.in/filings/public-issues/jun-2025/bharat-coking-coal-limited_94412.html",
    "rhp_link": "https://www.sebi.gov.in/filings/public-issues/jan-2026/bharat-coking-coal-limited_98851.html",
    "prospectus_pdf": "https://www.sebi.gov.in/filings/public-issues/jan-2026/bharat-coking-coal-limited-prospectus_99054.html",
    "investor_presentation": "https://www.chittorgarh.net/reports/anchor-investor/bharatcokingcoalanchorallocationreport.pdf"
  }
}
,
  {
  "id": 25,
  "name": "Defrail Technologies",
  "logo": "/images/ipo/Defrail.png",
  "minInvestment": "₹1,18,400",
  "open": "09 Jan 2026",
  "close": "13 Jan 2026",
  "listing": "16 Jan 2026",
  "price": "₹70 – ₹74",
  "lot": 1600,

  "about_company": {
    "company_name": "Defrail Technologies Limited",
    "industry_sector": "Industrial Manufacturing / Rubber Components",
    "founded_year": "2023",
    "promoters": [
      "Vivek Aggarwal"
    ],
    "description": "Defrail Technologies Limited manufactures rubber and polymer-based components such as hoses, profiles, beadings and moulded parts used in automotive, railways and defence sectors. The company operates on a B2B and B2G model with customization capabilities."
  },

  "ipo_basic_details": {
    "company_name": "Defrail Technologies Limited",
    "ipo_type": "SME IPO",
    "issue_type": "Book Built Issue",
    "face_value": "₹10 per share",
    "price_band_min": "₹70",
    "price_band_max": "₹74",
    "lot_size": 1600,
    "total_issue_size": "₹13.77 Cr",
    "fresh_issue_size": "₹13.77 Cr",
    "offer_for_sale": "0",
    "shares_offered": "18,60,800 shares",
    "listing_exchange": "BSE SME",
    "issue_price": "₹74",
    "minimum_investment": "₹1,18,400",
    "market_cap_post_issue": "Approx ₹52–55 Cr",
    "pre_issue_shareholding": "100%",
    "post_issue_shareholding": "≈73.5%"
  },

  "company_overview": {
    "business_model": "The company supplies rubber components to industrial clients (B2B) and government sectors (B2G), especially railways and defence, with strong customization and engineering support.",
    "products_services": [
      "Rubber Hoses & Assemblies",
      "Rubber Profiles & Beadings",
      "Moulded Rubber Components",
      "Fluid Transmission Products"
    ],
    "competitive_strengths": [
      "Diversified end-use industries (auto, railways, defence)",
      "RDSO-approved vendor (railway supply)",
      "Strong legacy manufacturing experience (since 1980 via promoters)",
      "Customization and in-house R&D capability",
      "Government contracts via GeM platform"
    ],
    "risks": [
      "Thin profit margins (~5%)",
      "Recent restructuring (business consolidation in 2024)",
      "Moderate debt levels",
      "Small scale SME business",
      "Revenue volatility risk"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "09 Jan 2026",
    "ipo_close_date": "13 Jan 2026",
    "basis_of_allotment_date": "14 Jan 2026",
    "refund_initiation_date": "15 Jan 2026",
    "demat_credit_date": "15 Jan 2026",
    "listing_date": "16 Jan 2026",
    "upi_mandate_deadline": "13 Jan 2026"
  },

  "ipo_objectives": {
    "capex": "₹7.96 Cr (machinery)",
    "solar_installation": "₹1.73 Cr",
    "general_corporate_purposes": "Remaining amount"
  },

  "investor_reservation": {
    "qib_quota": "≈20%",
    "retail_quota": "≈35%",
    "hni_quota": "≈15%",
    "others": "Market maker + anchor investors"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "1 lot",
      "shares": "1600",
      "amount": "₹1,18,400"
    },
    "retail_maximum": {
      "lot_size": "1 lot",
      "shares": "1600",
      "amount": "₹1,18,400"
    },
    "shni_minimum": {
      "lot_size": "2 lots",
      "shares": "3200",
      "amount": "₹2,36,800"
    },
    "bhni_minimum": {
      "lot_size": "9 lots",
      "shares": "14400",
      "amount": "₹10,65,600"
    }
  },

  "key_performance_indicators": {
    "roe": "≈73% (FY25, exceptional but unsustainable)",
    "roce": "N/A",
    "ronw": "≈73%",
    "pat_margin": "≈5.5%",
    "ebitda_margin": "N/A",
    "eps": "₹4.5–5 (approx)",
    "nav_per_share": "N/A",
    "debt_to_equity": "≈1.1–1.27",
    "pe_ratio": "≈15–17x",
    "industry_pe": "20–25x"
  },

  "company_financial_data": [
    {
      "period": "31 Mar 2024",
      "assets": "N/A",
      "total_income": "₹0.72 Cr",
      "pat": "₹0.11 Cr",
      "ebitda": "N/A",
      "net_worth": "N/A",
      "total_borrowing": "Low"
    },
    {
      "period": "31 Mar 2025",
      "assets": "N/A",
      "total_income": "₹62.22 Cr",
      "pat": "₹3.42 Cr",
      "ebitda": "N/A",
      "net_worth": "N/A",
      "total_borrowing": "₹11.5+ Cr"
    },
    {
      "period": "Sep 2025",
      "assets": "N/A",
      "total_income": "₹39.08 Cr",
      "pat": "₹1.51 Cr",
      "ebitda": "N/A",
      "net_worth": "N/A",
      "total_borrowing": "Moderate"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "₹5 – ₹8 (~8–10%)",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "Jan 2026",
    "estimated_listing_price": "₹80 – ₹85"
  },

  "ipo_subscription_data": {
    "qib_ex_anchor": "Strong",
    "hni_subscription": "Very high",
    "retail_subscription": "Strong",
    "total_subscription": "≈96x – 98x"
  },

  "ipo_intermediaries": {
    "registrar": "Maashitla Securities Private Limited",
    "registrar_website": "https://maashitla.com"
  },

  "ipo_lead_manager": {
    "lead_manager": "Nexgen Financial Solutions Private Limited"
  },

  "company_information": {
    "company_address": "Plot no 180, Sector 24,Sector 22, ,Faridabad, Haryana, 121005",
    "company_website": "http://www.defrailtech.in",
    "company_email": "cs@defrailtech.com",
    "company_phone": "011-45121795"
  },

  "ipo_documents": {
    "drhp_link": "https://www.bsesme.com/download/380989/SME_IPO%20InPrinciple/Annexure_1_DRHP_DEFRAIL_20250930000749.pdf",
    "rhp_link": "https://www.bseindia.com/downloads/ipo/RHP&GID_060120262100.zip",
    "prospectus_pdf": "https://www.defrailtech.in/_files/ugd/ea75c2_f578f781eee44bff9e23933d27631d02.pdf",
    "investor_presentation": "https://www.chittorgarh.net/reports/anchor-investor/defrail_anchorallocationreport.pdf"
  }
}
,
 {
  "id": 26,
  "name": "Avana Electrosystems",
  "logo": "/images/ipo/Avana.png",
  "minInvestment": "₹2,36,000",
  "open": "12 Jan 2026",
  "close": "14 Jan 2026",
  "listing": "20 Jan 2026",
  "price": "₹56 – ₹59",
  "lot": 2000,

  "about_company": {
    "company_name": "Avana Electrosystems Limited",
    "industry_sector": "Electrical Equipment / Control & Relay Panels",
    "founded_year": "2010",
    "promoters": [
      "Anantharamaiah Panish",
      "Gururaj Dambal",
      "S Vinod Kumar",
      "K N Sreenath"
    ],
    "description": "Incorporated in 2010, Avana Electrosystems Limited manufactures customised Control and Relay Panels (11kV to 220kV) and protection relays for power transmission, distribution, solar/wind plants and utilities. It operates two leased units in Peenya Industrial Area, Bengaluru, with 129 employees (as on Aug 31, 2025) and holds ISO 9001:2015 certification."
  },

  "ipo_basic_details": {
    "company_name": "Avana Electrosystems Limited",
    "ipo_type": "SME IPO",
    "issue_type": "Fresh Issue cum OFS (Book Built)",
    "face_value": "₹10 per share",
    "price_band_min": "₹56",
    "price_band_max": "₹59",
    "lot_size": 2000,
    "total_issue_size": "₹35.22 Cr (59,70,000 shares)",
    "fresh_issue_size": "₹28.84 Cr (approx. 48,76,000 shares)",
    "offer_for_sale": "₹5–6 Cr (7,94,000 shares)",
    "shares_offered": "59,70,000 shares",
    "listing_exchange": "NSE Emerge (SME)",
    "issue_price": "₹59",
    "minimum_investment": "₹2,36,000",
    "market_cap_post_issue": "≈₹133–140 Cr (post-issue)",
    "pre_issue_shareholding": "100%",
    "post_issue_shareholding": "73.64%"
  },

  "company_overview": {
    "business_model": "B2B manufacturer of customised high-voltage control & relay panels and relays for power utilities, transmission, solar/wind and industrial clients; strong tender & private order mix.",
    "products_services": [
      "Indoor/Outdoor Control & Relay Panels (11–220 kV)",
      "Numerical & Electromechanical Protection Relays",
      "Substation Automation Systems",
      "MV & LV Panels",
      "Relay Test Blocks & Plugs"
    ],
    "competitive_strengths": [
      "Strong customer relationships and wide customer base",
      "High customisation capability",
      "ISO 9001:2015 & quality testing certifications",
      "Experienced promoters & management (20+ years)",
      "Geographical reach and expanding exports (Kuwait)"
    ],
    "risks": [
      "Heavy dependence on power sector tenders",
      "Leased manufacturing units & new unit execution risk",
      "Working capital intensive business",
      "Competition from larger players",
      "Delay in new facility commercial production"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "12 Jan 2026",
    "ipo_close_date": "14 Jan 2026",
    "basis_of_allotment_date": "15 Jan 2026",
    "refund_initiation_date": "16 Jan 2026",
    "demat_credit_date": "16 Jan 2026",
    "listing_date": "20 Jan 2026",
    "upi_mandate_deadline": "14 Jan 2026"
  },

  "ipo_objectives": {
    "capex_new_unit": "₹11.55 Cr (civil, electrical & plumbing for integrated facility)",
    "working_capital": "₹8.60 Cr",
    "general_corporate_purposes": "₹4.57 Cr"
  },

  "investor_reservation": {
    "qib_quota": "47.20% (Anchor 28.31%, QIB ex-anchor 18.89%)",
    "retail_quota": "33.30%",
    "hni_quota": "14.47% (bNII 9.65%, sNII 4.82%)",
    "others": "Market Maker 5.03%"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "2 lots",
      "shares": "4000",
      "amount": "₹2,36,000"
    },
    "retail_maximum": {
      "lot_size": "2 lots",
      "shares": "4000",
      "amount": "₹2,36,000"
    },
    "shni_minimum": {
      "lot_size": "3 lots",
      "shares": "6000",
      "amount": "₹3,54,000"
    },
    "bhni_minimum": {
      "lot_size": "9 lots",
      "shares": "18000",
      "amount": "₹10,62,000"
    }
  },

  "key_performance_indicators": {
    "roe": "47.11% (FY25) / 22.79% (Sep-25)",
    "roce": "53.71% (FY25) / 26.69% (Sep-25)",
    "ronw": "38.13% (FY25) / 20.46% (Sep-25)",
    "pat_margin": "13.52% (FY25) / 15.69% (Sep-25)",
    "ebitda_margin": "20.36% (FY25) / 21.33% (Sep-25)",
    "eps": "₹4.76 (pre) / ₹4.95 (post)",
    "nav_per_share": "₹12.48 (FY25)",
    "debt_to_equity": "0.13",
    "pe_ratio": "12.4x (pre) / 11.91x (post)",
    "industry_pe": "18–25x (electrical equipment)"
  },

  "company_financial_data": [
    {
      "period": "31 Mar 2023",
      "assets": "₹28.52 Cr",
      "total_income": "₹53.26 Cr",
      "pat": "₹4.02 Cr",
      "ebitda": "₹7.42 Cr",
      "net_worth": "₹13.49 Cr",
      "total_borrowing": "₹7.33 Cr"
    },
    {
      "period": "31 Mar 2024",
      "assets": "₹38.07 Cr",
      "total_income": "₹62.93 Cr",
      "pat": "₹8.31 Cr",
      "ebitda": "₹12.52 Cr",
      "net_worth": "₹21.80 Cr",
      "total_borrowing": "₹9.27 Cr"
    },
    {
      "period": "31 Mar 2025",
      "assets": "₹49.42 Cr",
      "total_income": "₹62.93 Cr",
      "pat": "₹8.31 Cr",
      "ebitda": "₹12.52 Cr",
      "net_worth": "₹21.80 Cr",
      "total_borrowing": "₹5.69 Cr"
    },
    {
      "period": "30 Sep 2025",
      "assets": "₹53.91 Cr",
      "total_income": "₹36.28 Cr",
      "pat": "₹5.61 Cr",
      "ebitda": "₹7.63 Cr",
      "net_worth": "₹27.41 Cr",
      "total_borrowing": "₹5.68 Cr"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "₹20 – ₹24 (~34–41%)",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "Jan 2026",
    "estimated_listing_price": "₹80 – ₹85"
  },

  "ipo_subscription_data": {
    "qib_ex_anchor": "54.97x",
    "hni_subscription": "219.02x (bNII 258x, sNII 141x)",
    "retail_subscription": "137.52x",
    "total_subscription": "131.82x"
  },

  "ipo_intermediaries": {
    "registrar": "Integrated Registry Management Services Private Limited",
    "registrar_website": "https://www.integratedindia.in"
  },

  "ipo_lead_manager": {
    "lead_manager": "Indcap Advisors Private Limited"
  },

  "company_information": {
    "company_address": "No: 8, KAIDB Plot No. 35, 1st Main Road, 2nd Phase, Peenya Industrial Area, Nelagadaranahalli Village, Bengaluru, Karnataka 560058",
    "company_website": "https://avanaelectrosystems.com",
    "company_email": "cs@avanaelectrosystems.com",
    "company_phone": "+91 80 4123 3386"
  },

  "ipo_documents": {
    "drhp_link": "https://nsearchives.nseindia.com/emerge/corporates/content/Registration_25092025165759_AvanaElectrosystemLtdDRHP.pdf",
    "rhp_link": "https://nsearchives.nseindia.com/content/ipo/RHP_AVANA.zip",
    "prospectus_pdf": "https://avanaelectrosystems.com/docs/Offerdocument/AvanaRHP%20-%2031.12.2025.pdf",
    "investor_presentation": "https://www.chittorgarh.net/reports/anchor-investor/avana-ipo-anchor-list.pdf"
  }
}
,
  {
  "id": 27,
  "name": "Indo SMC",
  "logo": "/images/ipo/INDO.png",
  "minInvestment": "₹2,98,000",
  "open": "13 Jan 2026",
  "close": "16 Jan 2026",
  "listing": "21 Jan 2026",
  "price": "141 – 149",
  "lot": 1000,

  "about_company": {
    "company_name": "INDO SMC Limited",
    "industry_sector": "Electrical Equipment / SMC & FRP Products for Power Distribution",
    "founded_year": "2020",
    "promoters": [
      "Nitin Jasvantbhai Patel",
      "Neel Niteshbhai Shah",
      "Riktabahen Sonawala",
      "Chaitanya Patel",
      "Rachit Jain"
    ],
    "description": "INDO SMC Limited is engaged in the design and manufacture of a diversified range of products including enclosure boxes for energy meters, HTCT, HTPT, LTCT, LT/HT distribution boxes and panels, FRP grating, junction boxes, feeder pillars, and other power distribution and circuit protection switchgears. The company operates four manufacturing facilities in Gujarat, Maharashtra, and Rajasthan, with in-house testing laboratories for quality assurance."
  },

  "ipo_basic_details": {
    "company_name": "INDO SMC Limited",
    "ipo_type": "SME IPO",
    "issue_type": "Fresh Issue (Book Built)",
    "face_value": "₹10 per share",
    "price_band_min": "₹141",
    "price_band_max": "₹149",
    "lot_size": 1000,
    "total_issue_size": "₹91.95 Cr (61,71,000 shares)",
    "fresh_issue_size": "₹91.95 Cr (61,71,000 shares)",
    "offer_for_sale": "0",
    "shares_offered": "61,71,000 shares",
    "listing_exchange": "BSE SME",
    "issue_price": "₹149",
    "minimum_investment": "₹2,98,000",
    "market_cap_post_issue": "Approx ₹200–220 Cr (estimated post-issue)",
    "pre_issue_shareholding": "100%",
    "post_issue_shareholding": "≈70–75%"
  },

  "company_overview": {
    "business_model": "Manufacturer of SMC/FRP-based electrical enclosures, meter boxes, distribution panels, and related products for power utilities and infrastructure; B2B focus with multiple facilities and quality certifications.",
    "products_services": [
      "Enclosure boxes for energy meters",
      "HTCT (High Tension Current Transformer)",
      "HTPT (High Tension Potential Transformer)",
      "LTCT (Low Tension Current Transformer)",
      "LT/HT Distribution Boxes and Panels",
      "FRP Grating",
      "Junction Boxes",
      "Feeder Pillars",
      "Power Distribution & Circuit Protection Switchgears"
    ],
    "competitive_strengths": [
      "Diversified product range across electrical and infrastructural applications",
      "Strong manufacturing capabilities with four facilities",
      "In-house testing laboratories and quality control",
      "Established customer relationships",
      "Industry expertise and leadership in SMC/FRP products"
    ],
    "risks": [
      "Highly competitive segment",
      "Dependence on power and infrastructure sectors",
      "Working capital intensive",
      "Raw material price volatility",
      "Execution risks in expansion"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "13 Jan 2026",
    "ipo_close_date": "16 Jan 2026",
    "basis_of_allotment_date": "19 Jan 2026",
    "refund_initiation_date": "20 Jan 2026",
    "demat_credit_date": "20 Jan 2026",
    "listing_date": "21 Jan 2026",
    "upi_mandate_deadline": "16 Jan 2026"
  },

  "ipo_objectives": {
    "working_capital": "Primary utilization",
    "general_corporate_purposes": "Remaining amount",
    "capex": "Likely for facility enhancement or machinery (inferred from typical SME usage)"
  },

  "investor_reservation": {
    "qib_quota": "≈47.45% (Anchor ≈28.46%, QIB ex-anchor ≈18.99%)",
    "retail_quota": "≈33.25%",
    "hni_quota": "≈14.29% (bNII ≈9.53%, sNII ≈4.76%)",
    "others": "Market Maker ≈5.01%"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "2 lots",
      "shares": "2000",
      "amount": "₹2,98,000"
    },
    "retail_maximum": {
      "lot_size": "2 lots",
      "shares": "2000",
      "amount": "₹2,98,000"
    },
    "shni_minimum": {
      "lot_size": "3 lots",
      "shares": "3000",
      "amount": "₹4,47,000"
    },
    "bhni_minimum": {
      "lot_size": "7 lots",
      "shares": "7000",
      "amount": "₹10,43,000"
    }
  },

  "key_performance_indicators": {
    "roe": "74.45% (FY25) / 27.66% (Sep-25 annualized approx)",
    "roce": "≈17–20% (Sep-25)",
    "ronw": "High due to rapid growth",
    "pat_margin": "≈11% (FY25) / ≈10% (Sep-25)",
    "ebitda_margin": "≈16–17%",
    "eps": "≈₹10–12 (post-issue approx)",
    "nav_per_share": "N/A",
    "debt_to_equity": "≈1.0–1.3",
    "pe_ratio": "≈12–15x",
    "industry_pe": "20–30x (electrical equipment)"
  },

  "company_financial_data": [
    {
      "period": "31 Mar 2023",
      "assets": "₹13.85 Cr",
      "total_income": "₹7.30 Cr",
      "pat": "₹0.46 Cr",
      "ebitda": "₹1.15 Cr",
      "net_worth": "₹1.17 Cr",
      "total_borrowing": "₹10.43 Cr"
    },
    {
      "period": "31 Mar 2024",
      "assets": "₹36.32 Cr",
      "total_income": "₹28.06 Cr",
      "pat": "₹3.00 Cr",
      "ebitda": "₹5.08 Cr",
      "net_worth": "₹5.79 Cr",
      "total_borrowing": "₹17.70 Cr"
    },
    {
      "period": "31 Mar 2025",
      "assets": "₹99.94 Cr",
      "total_income": "₹138.78 Cr",
      "pat": "₹15.44 Cr",
      "ebitda": "₹22.83 Cr",
      "net_worth": "₹35.69 Cr",
      "total_borrowing": "₹35.76 Cr"
    },
    {
      "period": "30 Sep 2025",
      "assets": "₹147.67 Cr",
      "total_income": "₹112.62 Cr",
      "pat": "₹11.46 Cr",
      "ebitda": "₹17.19 Cr",
      "net_worth": "₹47.14 Cr",
      "total_borrowing": "₹49.35 Cr"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "₹10 – ₹25 (~7–17%)",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "Jan 2026 (pre-listing ₹10–32 range, post-listing stabilized lower)",
    "estimated_listing_price": "₹159 – ₹174 (pre-listing estimates)"
  },

  "ipo_subscription_data": {
    "qib_ex_anchor": "94.94x",
    "hni_subscription": "164.59x (bNII 193x, sNII 107x)",
    "retail_subscription": "96.13x",
    "total_subscription": "110.49x"
  },

  "ipo_intermediaries": {
    "registrar": "Kfin Technologies Limited",
    "registrar_website": "https://ipostatus.kfintech.com"
  },

  "ipo_lead_manager": {
    "lead_manager": "GYR Capital Advisors Private Limited"
  },

  "company_information": {
    "company_address": "809, Shilp Zaveri, Shyamal Cross Road, Vejalpur, Shyamal, Ahmedabad, Gujarat 380006",
    "company_website": "http://www.indosmc.com",
    "company_email": "cs@indosmc.com",
    "company_phone": "+91 7575812866"
  },

  "ipo_documents": {
    "drhp_link": "https://www.bsesme.com/download/319382/SME_IPO%20InPrinciple/DRHPFinal_20250930031617.pdf",
    "rhp_link": "https://www.bseindia.com/downloads/ipo/RHP&GID_090120261911.zip",
    "prospectus_pdf": "N/A",
    "investor_presentation": "https://www.chittorgarh.net/reports/anchor-investor/indo-smc-ipo-anchor-allocation-report.pdf"
  }
},
{
  "id": 28,
  "name": "Armour Security (India)",
  "logo": "/images/ipo/Armour.png",
  "minInvestment": "₹2,28,000",
  "open": "14 Jan 2026",
  "close": "19 Jan 2026",
  "listing": "22 Jan 2026",
  "price": "55 – 57",
  "lot": 2000,

  "about_company": {
    "company_name": "Armour Security India Limited",
    "industry_sector": "Security Services / Facility Management",
    "founded_year": "1999",
    "promoters": [
      "Vinod Gupta",
      "Arnima Gupta"
    ],
    "description": "Armour Security India Limited, incorporated in August 1999, provides comprehensive private security solutions including armed guarding, manpower deployment, integrated facility management, housekeeping, event management, firefighting services, security training, supervision, and other manpower services (skilled, semi-skilled, unskilled). It serves sectors like corporate, industrial, banking, healthcare, government, education, and residential across PAN-India with branches in multiple states. As of Feb 2025, it had 37 permanent and 1,269 contractual employees."
  },

  "ipo_basic_details": {
    "company_name": "Armour Security India Limited",
    "ipo_type": "SME IPO",
    "issue_type": "Fresh Issue (Book Built)",
    "face_value": "₹10 per share",
    "price_band_min": "₹55",
    "price_band_max": "₹57",
    "lot_size": 2000,
    "total_issue_size": "₹27 Cr (46,50,000 shares approx)",
    "fresh_issue_size": "₹26.51 Cr (46,50,000 shares)",
    "offer_for_sale": "0",
    "shares_offered": "46,50,000 shares",
    "listing_exchange": "NSE Emerge (SME)",
    "issue_price": "₹57",
    "minimum_investment": "₹2,28,000 (4,000 shares for retail min)",
    "market_cap_post_issue": "Approx ₹96–100 Cr pre-issue; post-issue higher",
    "pre_issue_shareholding": "100%",
    "post_issue_shareholding": "≈72.44%"
  },

  "company_overview": {
    "business_model": "PAN-India provider of private security, manpower, facility management, and allied services to diverse sectors; focus on compliance, training, technology integration, and customer retention in a competitive, fragmented industry.",
    "products_services": [
      "Armed & Unarmed Guarding Services",
      "Integrated Facility Management (cleaning, maintenance, security)",
      "Housekeeping Services",
      "Event Management & Security",
      "Firefighting & Safety Training",
      "Security Officer Training & Supervision",
      "Manpower Supply (skilled/semi-skilled/unskilled blue-collar)"
    ],
    "competitive_strengths": [
      "Diversified service portfolio",
      "Long experience since 1999",
      "Compliance with certifications & standards",
      "High customer retention",
      "Technology integration in operations"
    ],
    "risks": [
      "Highly competitive and fragmented market",
      "Dependence on manpower-intensive model",
      "Labor law & compliance risks",
      "Low margins typical in security services",
      "Client concentration or contract renewal risks"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "14 Jan 2026",
    "ipo_close_date": "19 Jan 2026",
    "basis_of_allotment_date": "20 Jan 2026",
    "refund_initiation_date": "21 Jan 2026",
    "demat_credit_date": "21 Jan 2026",
    "listing_date": "22 Jan 2026",
    "upi_mandate_deadline": "19 Jan 2026"
  },

  "ipo_objectives": {
    "working_capital": "₹15.11 Cr",
    "capex_machinery_vehicles": "₹1.61 Cr",
    "debt_repayment": "₹3.00 Cr",
    "general_corporate_purposes": "₹3.60 Cr (approx remaining)"
  },

  "investor_reservation": {
    "qib_quota": "≈10% (not fully subscribed)",
    "retail_quota": "≈35% (2.58x subscribed)",
    "hni_quota": "≈45% (NII 1.08x)",
    "others": "Market Maker 5.03% (2,34,000 shares)"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "2 lots",
      "shares": "4000",
      "amount": "₹2,28,000"
    },
    "retail_maximum": {
      "lot_size": "2 lots",
      "shares": "4000",
      "amount": "₹2,28,000"
    },
    "shni_minimum": {
      "lot_size": "3 lots",
      "shares": "6000",
      "amount": "₹3,42,000"
    },
    "bhni_minimum": {
      "lot_size": "7 lots",
      "shares": "14000",
      "amount": "₹7,98,000"
    }
  },

  "key_performance_indicators": {
    "roe": "≈21–25% (FY25 approx)",
    "roce": "N/A",
    "ronw": "High growth phase",
    "pat_margin": "≈10–11% (FY25)",
    "ebitda_margin": "≈13–14%",
    "eps": "≈₹8–10 (post-issue approx)",
    "nav_per_share": "N/A",
    "debt_to_equity": "≈0.25–0.3 (low)",
    "pe_ratio": "≈6–7x (at issue price)",
    "industry_pe": "15–25x (services sector)"
  },

  "company_financial_data": [
    {
      "period": "31 Mar 2023",
      "assets": "₹15.51 Cr",
      "total_income": "₹28.97 Cr",
      "pat": "₹2.26 Cr",
      "ebitda": "₹3.12 Cr",
      "net_worth": "₹3.49 Cr",
      "total_borrowing": "₹0.85 Cr"
    },
    {
      "period": "31 Mar 2024",
      "assets": "₹23.61 Cr",
      "total_income": "₹33.10 Cr",
      "pat": "₹2.62 Cr",
      "ebitda": "₹3.67 Cr",
      "net_worth": "₹14.46 Cr",
      "total_borrowing": "₹1.80 Cr"
    },
    {
      "period": "31 Mar 2025",
      "assets": "₹27.37 Cr",
      "total_income": "₹36.56 Cr",
      "pat": "₹3.97 Cr",
      "ebitda": "₹4.97 Cr",
      "net_worth": "₹18.43 Cr",
      "total_borrowing": "₹4.69 Cr"
    },
    {
      "period": "30 Sep 2025",
      "assets": "₹32.10 Cr",
      "total_income": "₹19.69 Cr",
      "pat": "₹2.90 Cr",
      "ebitda": "₹4.30 Cr",
      "net_worth": "₹21.34 Cr",
      "total_borrowing": "₹6.01 Cr"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "₹0 – ₹4 (~0–7%)",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "Jan 2026",
    "estimated_listing_price": "₹55 – ₹61 (muted GMP)"
  },

  "ipo_subscription_data": {
    "qib_ex_anchor": "1.00x",
    "hni_subscription": "1.08x",
    "retail_subscription": "2.58x",
    "total_subscription": "1.82x (final on close)"
  },

  "ipo_intermediaries": {
    "registrar": "Skyline Financial Services Private Limited",
    "registrar_website": "https://www.skylinerta.com"
  },

  "ipo_lead_manager": {
    "lead_manager": "Sobhagya Capital Options Private Limited"
  },

  "company_information": {
    "company_address": "B-87, Second Floor, Defence Colony, New Delhi, Delhi 110024",
    "company_website": "https://www.armoursecurities.com",
    "company_email": "cs@armoursecurities.com",
    "company_phone": "+91 98101 39833"
  },

  "ipo_documents": {
    "drhp_link": "https://nsearchives.nseindia.com/emerge/corporates/content/Registration_05032025221120_DRHP_ArmourSecurity.pdf",
    "rhp_link": "https://nsearchives.nseindia.com/content/ipo/RHP_ARMOUR.zip",
    "prospectus_pdf": "https://www.chittorgarh.net/reports/ipo_notes/armour-security-india-prospectus.pdf",
    "investor_presentation": "N/A"
  }
},
{
  "id": 29,
  "name": "Amagi Media Labs",
  "logo": "/images/ipo/Amagi.png",
  "minInvestment": "₹14,801",
  "open": "13 Jan 2026",
  "close": "16 Jan 2026",
  "listing": "21 Jan 2026",
  "price": "343 – 361",
  "lot": 41,

  "about_company": {
    "company_name": "Amagi Media Labs Limited",
    "industry_sector": "Media & Entertainment / Cloud-based SaaS for Broadcasting & Streaming",
    "founded_year": "2008",
    "promoters": [
      "Baskar Subramanian",
      "Srividhya Srinivasan",
      "Arunachalam Srinivasan Karapattu"
    ],
    "description": "Amagi Media Labs provides cloud-native SaaS technology solutions for broadcasters, content owners, and streaming platforms. It offers end-to-end glass-to-glass services including content creation, distribution, monetization, cloud playout, ad insertion, scheduling, and analytics. The company serves over 700 content brands with 2,000+ channel deployments in 100+ countries, focusing on Connected TV (CTV), FAST channels, and traditional broadcast. It has 884 employees (as of Mar 2025) with strong engineering focus and global presence (US, Europe, Asia)."
  },

  "ipo_basic_details": {
    "company_name": "Amagi Media Labs Limited",
    "ipo_type": "Mainboard IPO",
    "issue_type": "Fresh Issue cum OFS (Book Built)",
    "face_value": "₹5 per share",
    "price_band_min": "₹343",
    "price_band_max": "₹361",
    "lot_size": 41,
    "total_issue_size": "₹1,789 Cr (4,95,46,221 shares)",
    "fresh_issue_size": "₹816 Cr (2,26,03,878 shares)",
    "offer_for_sale": "₹973 Cr (2,69,42,343 shares)",
    "shares_offered": "4,95,46,221 shares",
    "listing_exchange": "BSE & NSE",
    "issue_price": "₹361",
    "minimum_investment": "₹14,801 (41 shares at upper band)",
    "market_cap_post_issue": "Approx ₹7,800–8,000 Cr (pre-IPO basis adjusted)",
    "pre_issue_shareholding": "100%",
    "post_issue_shareholding": "Promoters ≈14.14%"
  },

  "company_overview": {
    "business_model": "SaaS platform for media & entertainment; three-sided marketplace connecting content owners, broadcasters, and advertisers with high network effects, AI-enabled tools, and cloud infrastructure for streaming unification and CTV ad tech.",
    "products_services": [
      "Cloud Playout & Channel Origination",
      "Ad Insertion & Monetization (Server-side & Client-side)",
      "Content Management & Scheduling",
      "Streaming Unification Platform",
      "Analytics & Audience Insights",
      "FAST Channel Solutions"
    ],
    "competitive_strengths": [
      "One-stop glass-to-glass solutions",
      "Proprietary AI-enabled technology",
      "High switching costs & network effects",
      "Trusted global customers (45 of top 50 media firms)",
      "Strong founder pedigree & institutional backing (Accel, Premji Invest, etc.)",
      "Rapid revenue growth & improving margins"
    ],
    "risks": [
      "Continued losses historically (turned profitable in H1 FY26)",
      "High valuation (P/E >600x annualized)",
      "Geographic concentration (US & Europe ~90%)",
      "Customer & third-party cloud dependency",
      "Intense competition in CTV/streaming tech",
      "Execution risks in acquisitions & inorganic growth"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "13 Jan 2026",
    "ipo_close_date": "16 Jan 2026",
    "basis_of_allotment_date": "19 Jan 2026",
    "refund_initiation_date": "20 Jan 2026",
    "demat_credit_date": "20 Jan 2026",
    "listing_date": "21 Jan 2026",
    "upi_mandate_deadline": "16 Jan 2026"
  },

  "ipo_objectives": {
    "technology_cloud_infra": "₹550.06 Cr",
    "inorganic_growth_acquisitions_gcp": "₹222.39 Cr (remaining for general corporate purposes)"
  },

  "investor_reservation": {
    "qib_quota": "≈50%+ (including anchor)",
    "retail_quota": "≈10%",
    "hni_quota": "≈15%",
    "others": "Anchor raised ₹804.88 Cr"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "1 lot",
      "shares": "41",
      "amount": "₹14,801"
    },
    "retail_maximum": {
      "lot_size": "13 lots",
      "shares": "533",
      "amount": "₹1,92,413"
    },
    "shni_minimum": {
      "lot_size": "14 lots",
      "shares": "574",
      "amount": "₹2,07,214"
    },
    "bhni_minimum": {
      "lot_size": "68 lots",
      "shares": "2788",
      "amount": "₹10,06,468"
    }
  },

  "key_performance_indicators": {
    "roe": "0.75% (Sep 2025 annualized)",
    "roce": "3.4% (H1 FY26 annualized)",
    "ronw": "Low due to past losses",
    "pat_margin": "0.88% (Sep 2025)",
    "ebitda_margin": "8.26% (Sep 2025) / improving from negative",
    "eps": "₹0.60 (post-issue approx)",
    "nav_per_share": "N/A",
    "debt_to_equity": "0 (debt-free)",
    "pe_ratio": "≈600x (annualized FY26)",
    "industry_pe": "High-growth tech/media SaaS peers 30–100x+"
  },

  "company_financial_data": [
    {
      "period": "31 Mar 2023",
      "assets": "₹1,405.96 Cr",
      "total_income": "₹724.72 Cr",
      "pat": "₹-321.27 Cr",
      "ebitda": "₹-140.34 Cr",
      "net_worth": "₹644.49 Cr",
      "total_borrowing": "₹0 Cr"
    },
    {
      "period": "31 Mar 2024",
      "assets": "₹1,308.08 Cr",
      "total_income": "₹942.24 Cr",
      "pat": "₹-245.00 Cr",
      "ebitda": "₹-155.53 Cr",
      "net_worth": "₹496.80 Cr",
      "total_borrowing": "₹0 Cr"
    },
    {
      "period": "31 Mar 2025",
      "assets": "₹1,425.00 Cr",
      "total_income": "₹1,223.31 Cr",
      "pat": "₹-68.71 Cr",
      "ebitda": "₹23.49 Cr",
      "net_worth": "₹509.45 Cr",
      "total_borrowing": "₹0 Cr"
    },
    {
      "period": "30 Sep 2025",
      "assets": "₹1,352.16 Cr",
      "total_income": "₹733.93 Cr",
      "pat": "₹6.47 Cr",
      "ebitda": "₹58.23 Cr",
      "net_worth": "₹859.34 Cr",
      "total_borrowing": "₹0 Cr"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "₹0 – ₹27 (~0–7.5%) pre-listing",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "Jan 2026",
    "estimated_listing_price": "₹361 – ₹382 (actual listing ~₹317–318, closed ~₹348–355)"
  },

  "ipo_subscription_data": {
    "qib_ex_anchor": "33.13x–33.77x",
    "hni_subscription": "38.26x (bNII 44.24x, sNII 26.29x)",
    "retail_subscription": "9.54x",
    "total_subscription": "30.24x (final)"
  },

  "ipo_intermediaries": {
    "registrar": "MUFG Intime India Private Limited",
    "registrar_website": "https://linkintime.co.in"
  },

  "ipo_lead_manager": {
    "lead_manager": "Kotak Mahindra Capital Company Limited (Book Running Lead Manager)"
  },

  "company_information": {
    "company_address": "Raj Alkaa Park, Survey No. 29/3 and 32/2, 4th Floor, Kalena Agrahara Village, Begur Hobli, Bengaluru, Karnataka 560076",
    "company_website": "https://www.amagi.com",
    "company_email": "compliance@amagi.com",
    "company_phone": "080-46634406"
  },

  "ipo_documents": {
    "drhp_link": "https://www.sebi.gov.in/filings/public-issues/jan-2026/amagi-media-labs-limited-prospectus_100077.html",
    "rhp_link": "https://nsearchives.nseindia.com/content/ipo/RHP_AMAGI.zip",
    "prospectus_pdf": "https://www.bseindia.com/corporates/download/337933/IPO%20BasisOfAllotment/Amagi_Prospectus_20260119172451.pdf",
    "investor_presentation": "https://www.chittorgarh.net/reports/anchor-investor/amagi-media-labs-ipo-anchor-allocation-letter.pdf"
  }
},
{
  "id": 30,
  "name": "GRE Renew Enertech",
  "logo": "/images/ipo/grerenew.png",
  "minInvestment": "₹2,52,000",
  "open": "13 Jan 2026",
  "close": "16 Jan 2026",
  "listing": "21 Jan 2026",
  "price": "100 – 105",
  "lot": 1200,

  "about_company": {
    "company_name": "GRE Renew Enertech Limited",
    "industry_sector": "Renewable Energy / Solar EPC & LED Lighting",
    "founded_year": "Not specified (incorporated prior to 2023 based on financials)",
    "promoters": [
      "Kamleshkumar Dahyalal Patel",
      "Kirtikumar Kantilal Suthar",
      "Mukeshkumar Prahladbhai Trivedi"
    ],
    "description": "GRE Renew Enertech Limited is engaged in providing solar energy solutions including rooftop and ground-mounted solar installations (EPC and RESCO models) and LED lighting products. The company offers turnkey EPC services for on-grid, hybrid solar systems, PV modules, and focuses on renewable energy projects with annuity-based revenue from RESCO model. It operates in Gujarat with a focus on CAPEX (client-funded) and OPEX (company-funded) solar models."
  },

  "ipo_basic_details": {
    "company_name": "GRE Renew Enertech Limited",
    "ipo_type": "SME IPO",
    "issue_type": "Fresh Issue (Book Built)",
    "face_value": "₹10 per share",
    "price_band_min": "₹100",
    "price_band_max": "₹105",
    "lot_size": 1200,
    "total_issue_size": "₹39.56 Cr (37,68,000 shares approx)",
    "fresh_issue_size": "₹38 Cr (35,76,000 shares)",
    "offer_for_sale": "0",
    "shares_offered": "35,76,000 shares (net public offer)",
    "listing_exchange": "BSE SME",
    "issue_price": "₹105",
    "minimum_investment": "₹2,52,000 (2,400 shares for retail min)",
    "market_cap_post_issue": "Approx ₹150–160 Cr (pre-IPO market cap ₹150 Cr adjusted)",
    "pre_issue_shareholding": "100%",
    "post_issue_shareholding": "Promoters ≈69.99%"
  },

  "company_overview": {
    "business_model": "Solar EPC (Engineering, Procurement, Construction) for rooftop/ground-mounted systems and RESCO (Renewable Energy Service Company) model for annuity income; also LED lighting solutions with shift towards solar dominance.",
    "products_services": [
      "Rooftop Solar Systems (On-Grid & Hybrid)",
      "Ground-Mounted Solar Power Plants",
      "PV Modules",
      "Turnkey EPC Services (design to commissioning & O&M)",
      "LED Indoor & Outdoor Lighting Products"
    ],
    "competitive_strengths": [
      "Experienced management team",
      "Training & skill development for O&M",
      "Visible order book & policy support",
      "24/7 premium support system",
      "ESG focus (Environment, Social, Governance)"
    ],
    "risks": [
      "Inconsistency in top and bottom lines historically",
      "Dependence on solar sector policies & subsidies",
      "Competition in renewable EPC",
      "Execution risks in large projects",
      "Working capital requirements"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "13 Jan 2026",
    "ipo_close_date": "16 Jan 2026",
    "basis_of_allotment_date": "19 Jan 2026",
    "refund_initiation_date": "20 Jan 2026",
    "demat_credit_date": "20 Jan 2026",
    "listing_date": "21 Jan 2026",
    "upi_mandate_deadline": "16 Jan 2026"
  },

  "ipo_objectives": {
    "capex_solar_plant": "₹31.58 Cr (7.20 MW AC / 9.99 MW DC Ground Mounted Solar Power Plant)",
    "general_corporate_purposes": "₹3.65 Cr"
  },

  "investor_reservation": {
    "qib_quota": "≈47% (Anchor raised ₹11.15 Cr)",
    "retail_quota": "≈35%",
    "hni_quota": "≈15% (bNII & sNII split)",
    "others": "Market Maker 5.03% (1,92,000 shares)"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "2 lots",
      "shares": "2400",
      "amount": "₹2,52,000"
    },
    "retail_maximum": {
      "lot_size": "2 lots",
      "shares": "2400",
      "amount": "₹2,52,000"
    },
    "shni_minimum": {
      "lot_size": "3 lots",
      "shares": "3600",
      "amount": "₹3,78,000"
    },
    "bhni_minimum": {
      "lot_size": "8 lots",
      "shares": "9600",
      "amount": "₹10,08,000"
    }
  },

  "key_performance_indicators": {
    "roe": "12.04% (Sep 2025) / 26.89% (FY25)",
    "roce": "15.30% (Sep 2025) / 29.60% (FY25)",
    "ronw": "12.04% (Sep 2025) / 26.89% (FY25)",
    "pat_margin": "9.13% (Sep 2025) / 8.39% (FY25)",
    "ebitda_margin": "13.06% (Sep 2025) / 11.33% (FY25)",
    "eps": "₹6.68 (pre) / ₹5.60 (post)",
    "nav_per_share": "N/A",
    "debt_to_equity": "0.04 (Sep 2025) / 0.05 (FY25)",
    "pe_ratio": "15.72x (pre) / 18.75x (post)",
    "industry_pe": "20–40x (renewable energy EPC)"
  },

  "company_financial_data": [
    {
      "period": "31 Mar 2023",
      "assets": "₹51.65 Cr",
      "total_income": "₹53.11 Cr",
      "pat": "₹0.89 Cr",
      "ebitda": "₹1.31 Cr",
      "net_worth": "₹11.14 Cr",
      "total_borrowing": "₹4.75 Cr"
    },
    {
      "period": "31 Mar 2024",
      "assets": "₹49.12 Cr",
      "total_income": "₹92.15 Cr",
      "pat": "₹9.91 Cr",
      "ebitda": "₹11.48 Cr",
      "net_worth": "₹21.03 Cr",
      "total_borrowing": "₹4.57 Cr"
    },
    {
      "period": "31 Mar 2025",
      "assets": "₹45.46 Cr",
      "total_income": "₹84.37 Cr",
      "pat": "₹7.03 Cr",
      "ebitda": "₹9.48 Cr",
      "net_worth": "₹31.23 Cr",
      "total_borrowing": "₹1.59 Cr"
    },
    {
      "period": "30 Sep 2025",
      "assets": "₹42.77 Cr",
      "total_income": "₹43.98 Cr",
      "pat": "₹4.00 Cr",
      "ebitda": "₹5.72 Cr",
      "net_worth": "₹35.22 Cr",
      "total_borrowing": "₹1.45 Cr"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "₹1 – ₹7 (~1–7%) pre-listing (peaked at ₹7 early, settled low near listing)",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "Jan 2026",
    "estimated_listing_price": "₹106 – ₹112 (actual listed at ₹96, -8.57% discount)"
  },

  "ipo_subscription_data": {
    "qib_ex_anchor": "14.69x",
    "hni_subscription": "24.67x (bNII 27.99x, sNII 18.02x)",
    "retail_subscription": "14.10x",
    "total_subscription": "16.53x (final)"
  },

  "ipo_intermediaries": {
    "registrar": "Maashitla Securities Private Limited",
    "registrar_website": "https://maashitla.com"
  },

  "ipo_lead_manager": {
    "lead_manager": "Share India Capital Services Private Limited"
  },

  "company_information": {
    "company_address": "Plot No. 423, G.I.D.C.-II, Dediyasan, Mehsana, Gujarat 384002",
    "company_website": "https://greindia.com",
    "company_email": "cs@greindia.com",
    "company_phone": "+91 99740 39300"
  },

  "ipo_documents": {
    "drhp_link": "https://www.bsesme.com/download/360109/SME_IPO%20InPrinciple/GRE_DRHP_29.09.2025_6PM_QR_20250929185545.pdf",
    "rhp_link": "https://www.bseindia.com/downloads/ipo/RHP%20&%20GID_090120261957.zip",
    "prospectus_pdf": "https://www.bsesme.com/download/360109/SME_IPO%20BasisOfAllotment/Prospectus_20260119135250.pdf",
    "investor_presentation": "https://www.chittorgarh.net/reports/anchor-investor/gre-renew-ipo-anchor-allocation-report.pdf"
  }
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
  "type": "SME",
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





