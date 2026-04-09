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
    "price_band_min": "₹190",
    "price_band_max": "₹194",
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
  "name": "Aritas Vinyl",
  "logo": "/images/ipo/Aritas.png",
  "minInvestment": "₹2,82,000",
  "open": "16 Jan 2026",
  "close": "20 Jan 2026",
  "listing": "23 Jan 2026",
  "price": "40 – 47",
  "lot": 3000,

  "about_company": {
    "company_name": "Aritas Vinyl Limited",
    "industry_sector": "Manufacturing / Technical Textiles & Synthetic Leather (PU & PVC Coated)",
    "founded_year": "2020",
    "promoters": [
      "Mr. Anilkumar Prakashchandra Agrawal",
      "Mr. Sanjaykumar Kantilal Patel",
      "Mr. Ankit Anilbhai Agrawal",
      "Mr. Mohit Ashokkumar Agrawal",
      "Mr. Rohit Dineshbhai Agrawal",
      "Mr. Rutvik Patel",
      "Mr. Shubham Sunilbhai Agrawal"
    ],
    "description": "Incorporated in April 2020, Aritas Vinyl Limited manufactures and trades technical textiles such as Artificial Leather (PU Synthetic Leather and PVC-coated leather) using Transfer Coating Technology. The company produces materials for automotive upholstery, fashion accessories, interior design (wall coverings), footwear, bags, and industrial uses. It has a fully integrated manufacturing facility spanning 6,067 sq. m at Kubadthal/Daskroi, Ahmedabad with annual capacity of 7.8 million sq. m. Products are supplied to distributors, wholesalers, manufacturers, and exported to Greece, Oman, UAE, Sri Lanka, USA, and SEZs."
  },

  "ipo_basic_details": {
    "company_name": "Aritas Vinyl Limited",
    "ipo_type": "SME IPO",
    "issue_type": "Fresh Issue cum OFS (Book Built)",
    "face_value": "₹10 per share",
    "price_band_min": "₹40",
    "price_band_max": "₹47",
    "lot_size": 3000,
    "total_issue_size": "₹37.52 Cr (79,83,000 shares)",
    "fresh_issue_size": "₹31 Cr (approx 65,96,600 shares)",
    "offer_for_sale": "₹5–6 Cr (approx 9,84,400 shares)",
    "shares_offered": "79,83,000 shares (net public 75,81,000 + market maker 4,02,000)",
    "listing_exchange": "BSE SME",
    "issue_price": "₹47",
    "minimum_investment": "₹2,82,000",
    "market_cap_post_issue": "Approx ₹110–120 Cr (pre-IPO ₹92.54 Cr)",
    "pre_issue_shareholding": "100%",
    "post_issue_shareholding": "Promoters ≈27.99%"
  },

  "company_overview": {
    "business_model": "Manufacturing & trading of PU/PVC synthetic leather using advanced transfer coating tech; B2B supplies + exports with focus on quality, customization, and replacing natural leather.",
    "products_services": [
      "PU Synthetic Leather & PVC Vinyl",
      "Automotive Upholstery Materials",
      "Fashion Accessories (bags, wallets, sleeves)",
      "Interior Wall Coverings & Upholstery",
      "Coated Fabrics for Footwear & Industrial Use"
    ],
    "competitive_strengths": [
      "Quality & Customization",
      "Experienced promoters with market knowledge",
      "Fully integrated plant at strategic location",
      "Enhanced capacity in 3 years",
      "Long-standing customer relationships"
    ],
    "risks": [
      "Highly competitive & fragmented sector",
      "Raw material price volatility",
      "Export & regulatory risks",
      "High debt levels",
      "Dependence on domestic + limited export demand"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "16 Jan 2026",
    "ipo_close_date": "20 Jan 2026",
    "basis_of_allotment_date": "21 Jan 2026",
    "refund_initiation_date": "22 Jan 2026",
    "demat_credit_date": "22 Jan 2026",
    "listing_date": "23 Jan 2026",
    "upi_mandate_deadline": "20 Jan 2026"
  },

  "ipo_objectives": {
    "solar_power_project": "₹4.26 Cr",
    "working_capital": "₹20.45 Cr",
    "general_corporate_purposes": "₹4.65 Cr"
  },

  "investor_reservation": {
    "qib_quota": "0.98% (78,000 shares)",
    "retail_quota": "56.52% (45,12,000 shares)",
    "hni_quota": "37.47% (NII – bNII 24.99%, sNII 12.48%)",
    "others": "Market Maker 5.04% (4,02,000 shares)"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "2 lots",
      "shares": "6000",
      "amount": "₹2,82,000"
    },
    "retail_maximum": {
      "lot_size": "2 lots",
      "shares": "6000",
      "amount": "₹2,82,000"
    },
    "shni_minimum": {
      "lot_size": "3 lots",
      "shares": "9000",
      "amount": "₹4,23,000"
    },
    "bhni_minimum": {
      "lot_size": "8 lots",
      "shares": "24000",
      "amount": "₹11,28,000"
    }
  },

  "key_performance_indicators": {
    "roe": "11.16% (Aug 2025) / 31.23% (FY25)",
    "roce": "11.14% (Aug 2025) / 21.99% (FY25)",
    "ronw": "25.51% (Aug 2025) / 20.36% (FY25)",
    "pat_margin": "5.97% (Aug 2025) / 4.23% (FY25)",
    "ebitda_margin": "11.20% (Aug 2025) / 8.81% (FY25)",
    "eps": "₹3.26 (pre) / ₹2.95 (post)",
    "nav_per_share": "N/A",
    "debt_to_equity": "1.65 (Aug 2025)",
    "pe_ratio": "14.43x (pre) / 15.93x (post)",
    "industry_pe": "15–25x (textiles/leather)"
  },

  "company_financial_data": [
    {
      "period": "31 Mar 2023",
      "assets": "₹57.95 Cr",
      "total_income": "₹51.42 Cr",
      "pat": "₹0.99 Cr",
      "ebitda": "₹3.09 Cr",
      "net_worth": "₹4.32 Cr",
      "total_borrowing": "₹33.10 Cr"
    },
    {
      "period": "31 Mar 2024",
      "assets": "₹76.12 Cr",
      "total_income": "₹69.25 Cr",
      "pat": "₹1.67 Cr",
      "ebitda": "₹4.65 Cr",
      "net_worth": "₹5.99 Cr",
      "total_borrowing": "₹52.79 Cr"
    },
    {
      "period": "31 Mar 2025",
      "assets": "₹95.26 Cr",
      "total_income": "₹98.02 Cr",
      "pat": "₹4.13 Cr",
      "ebitda": "₹8.63 Cr",
      "net_worth": "₹20.27 Cr",
      "total_borrowing": "₹36.82 Cr"
    },
    {
      "period": "31 Aug 2025",
      "assets": "₹98.25 Cr",
      "total_income": "₹40.58 Cr",
      "pat": "₹2.42 Cr",
      "ebitda": "₹4.55 Cr",
      "net_worth": "₹22.77 Cr",
      "total_borrowing": "₹37.78 Cr"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "₹0 (0%)",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "Jan 2026",
    "estimated_listing_price": "₹47 (flat) – actual opened at ₹47 / closed lower; current ~₹16–17 (-64% from issue)"
  },

  "ipo_subscription_data": {
    "qib_ex_anchor": "1.00x",
    "hni_subscription": "1.24x (NII)",
    "retail_subscription": "2.88x",
    "total_subscription": "2.21x"
  },

  "ipo_intermediaries": {
    "registrar": "Bigshare Services Pvt. Ltd.",
    "registrar_website": "https://ipo.bigshareonline.com"
  },

  "ipo_lead_manager": {
    "lead_manager": "Interactive Financial Services Ltd."
  },

  "company_information": {
    "company_address": "Survey No. 1134, Near Elegant Vinyl Private Limited, Daskroi, Ahmedabad, Gujarat 382430",
    "company_website": "http://www.aritasvinyl.com",
    "company_email": "info@aritasvinyl.com",
    "company_phone": "99988 52850"
  },

  "ipo_documents": {
    "drhp_link": "https://www.bsesme.com/download/353892/Final%20DRHP_20250426183243.pdf",
    "rhp_link": "https://www.bsesme.com/download/353892/SME_IPO%20Open/RHP_final__20260109194347.pdf",
    "prospectus_pdf": "https://www.aritasvinyl.com/images/investor/offer-documents/RHP.pdf",
    "investor_presentation": "N/A"
  }
},
{
  "id": 32,
  "name": "C K K Retail Mart",
  "logo": "/images/ipo/ckkretail.png",
  "minInvestment": "₹2,60,800",
  "open": "30 Jan 2026",
  "close": "03 Feb 2026",
  "listing": "06 Feb 2026",
  "price": "155 – 163",
  "lot": 800,

  "about_company": {
    "company_name": "C K K Retail Mart Limited",
    "industry_sector": "FMCG / Agro-Commodities & Packaged Foods Distribution",
    "founded_year": "2005",
    "promoters": [
      "Mr. Saurabh Malhotra",
      "Sakuma Infrastructure and Realty Pvt Ltd.",
      "Ms. Kusum Chander Mohan Malhotra"
    ],
    "description": "C K K Retail Mart Limited is engaged in the distribution of packaged agro-commodities (sugar, rice, pulses, lentils, ghee) and packaged products (milk powder, carbonated soft drinks, fruit-based juices). It follows a 'Farm-to-Fork' approach with brands like Braunz and Jivanam for agro products, and Jeera/Lemon Soda plus 'Fruitzzzup' (launched April 2025) for beverages. Operates via three-tier distribution (to stockists/distributors) and direct-to-distributors model, with strong supplier relationships and wide distribution network in India."
  },

  "ipo_basic_details": {
    "company_name": "C K K Retail Mart Limited",
    "ipo_type": "SME IPO",
    "issue_type": "Fresh Issue cum OFS (Book Built)",
    "face_value": "₹10 per share",
    "price_band_min": "₹155",
    "price_band_max": "₹163",
    "lot_size": 800,
    "total_issue_size": "₹88.02 Cr (54,00,000 shares)",
    "fresh_issue_size": "₹67 Cr (approx 41,34,400 shares)",
    "offer_for_sale": "₹16 Cr (approx 9,92,000 shares)",
    "shares_offered": "54,00,000 shares",
    "listing_exchange": "NSE Emerge (SME)",
    "issue_price": "₹163",
    "minimum_investment": "₹2,60,800 (2 lots / 1,600 shares)",
    "market_cap_post_issue": "Approx ₹315–330 Cr (pre-IPO ₹315.70 Cr adjusted)",
    "pre_issue_shareholding": "100%",
    "post_issue_shareholding": "Promoters ≈70–75% (post-dilution)"
  },

  "company_overview": {
    "business_model": "Distribution of agro-commodities and FMCG products (packaged foods, beverages) via established network; diversified portfolio with own brands and multi-channel supply.",
    "products_services": [
      "Packaged Agro-Commodities (sugar, rice, pulses, lentils, ghee under Braunz, Jivanam)",
      "Carbonated Soft Drinks (Jeera, Lemon Soda)",
      "Fruit Pulp-Based Juices (Fruitzzzup launched 2025)",
      "Milk Powder & Other Packaged Foods"
    ],
    "competitive_strengths": [
      "Diversified product portfolio",
      "Well-established supplier relationships",
      "Wide sales & distribution network",
      "Experienced promoters & management",
      "Brand building in agro & beverages"
    ],
    "risks": [
      "Thin/volatile margins in distribution",
      "Competition in FMCG/agro segment",
      "Dependence on suppliers & distributors",
      "Commodity price fluctuations",
      "Working capital intensive"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "30 Jan 2026",
    "ipo_close_date": "03 Feb 2026",
    "basis_of_allotment_date": "04 Feb 2026",
    "refund_initiation_date": "05 Feb 2026",
    "demat_credit_date": "05 Feb 2026",
    "listing_date": "06 Feb 2026",
    "upi_mandate_deadline": "03 Feb 2026"
  },

  "ipo_objectives": {
    "warehouse_acquisition_leasehold_plots": "₹10.20 Cr",
    "warehouse_repair_refurbishment": "₹1.90 Cr",
    "working_capital_requirements": "₹43.00 Cr",
    "general_corporate_purposes": "₹9.70 Cr"
  },

  "investor_reservation": {
    "qib_quota": "37.48% (incl. Anchor 11.11%)",
    "retail_quota": "33.72%",
    "hni_quota": "23.73% (bNII 15.82%, sNII 7.91%)",
    "others": "Market Maker 5.07%"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "2 lots",
      "shares": "1600",
      "amount": "₹2,60,800"
    },
    "retail_maximum": {
      "lot_size": "2 lots",
      "shares": "1600",
      "amount": "₹2,60,800"
    },
    "shni_minimum": {
      "lot_size": "3 lots",
      "shares": "2400",
      "amount": "₹3,91,200"
    },
    "bhni_minimum": {
      "lot_size": "8 lots",
      "shares": "6400",
      "amount": "₹10,43,200"
    }
  },

  "key_performance_indicators": {
    "roe": "18.34% (Sep 2025) / 47.63% (FY25)",
    "roce": "22.58% (Sep 2025) / 51.59% (FY25)",
    "ronw": "16.80% (Sep 2025) / 38.47% (FY25)",
    "pat_margin": "5.39% (Sep 2025) / 5.43% (FY25)",
    "ebitda_margin": "7.38% (Sep 2025) / 7.50% (FY25)",
    "eps": "₹10.94 (pre) / ₹8.87 (post)",
    "nav_per_share": "N/A",
    "debt_to_equity": "Low (minimal borrowing)",
    "pe_ratio": "14.9x (pre) / 18.38x (post)",
    "industry_pe": "15–30x (FMCG distribution)"
  },

  "company_financial_data": [
    {
      "period": "31 Mar 2023",
      "assets": "₹17.76 Cr",
      "total_income": "₹109.93 Cr",
      "pat": "₹4.51 Cr",
      "ebitda": "₹6.12 Cr",
      "net_worth": "₹13.50 Cr",
      "total_borrowing": "₹0.02 Cr"
    },
    {
      "period": "31 Mar 2024",
      "assets": "₹53.45 Cr",
      "total_income": "₹233.35 Cr",
      "pat": "₹12.67 Cr",
      "ebitda": "₹17.46 Cr",
      "net_worth": "₹26.17 Cr",
      "total_borrowing": "Low"
    },
    {
      "period": "31 Mar 2025",
      "assets": "₹68.09 Cr",
      "total_income": "₹301.85 Cr",
      "pat": "₹16.36 Cr",
      "ebitda": "₹22.60 Cr",
      "net_worth": "₹42.53 Cr",
      "total_borrowing": "Low"
    },
    {
      "period": "30 Sep 2025",
      "assets": "₹79.74 Cr",
      "total_income": "₹159.93 Cr",
      "pat": "₹8.59 Cr",
      "ebitda": "₹11.77 Cr",
      "net_worth": "₹51.12 Cr",
      "total_borrowing": "Low"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "₹0 (0%) pre-listing (muted expectations)",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "Feb 2026",
    "estimated_listing_price": "₹163 (flat debut; listed at ₹163 on NSE SME, ₹155.60 on BSE; later traded lower ~₹128)"
  },

  "ipo_subscription_data": {
    "qib_ex_anchor": "1.12x",
    "hni_subscription": "1.52x–1.73x",
    "retail_subscription": "2.12x",
    "total_subscription": "1.63x (final)"
  },

  "ipo_intermediaries": {
    "registrar": "Bigshare Services Pvt. Ltd.",
    "registrar_website": "https://ipo.bigshareonline.com"
  },

  "ipo_lead_manager": {
    "lead_manager": "Oneview Corporate Advisors Pvt. Ltd."
  },

  "company_information": {
    "company_address": "Aurus Chambers, B - 418, Near Mahindra Tower, S S Amrutwar Lane, Worli, Mumbai, Maharashtra 400013",
    "company_website": "http://www.ckkretailmart.com",
    "company_email": "cs@ckkretailmart.com",
    "company_phone": "+91 8275286155"
  },

  "ipo_documents": {
    "drhp_link": "https://nsearchives.nseindia.com/emerge/corporates/content/sbhatnagar_30092025113907_DRHPFINAL27092025.pdf",
    "rhp_link": "https://nsearchives.nseindia.com/emerge/corporates/content/CKKRetailMartLimited_RHP.zip",
    "prospectus_pdf": "https://nsearchives.nseindia.com/emerge/corporates/content/CKKRetailMartLimited_PROSP.pdf",
    "investor_presentation": "https://www.chittorgarh.net/reports/anchor-investor/ckk-retail-mart-ipo-anchor-allocation-letter.pdf"
  }
},
{
  "id": 33,
  "name": "Biopol Chemicals",
  "logo": "/images/ipo/biopol.png",
  "minInvestment": "₹2,59,200",
  "open": "06 Feb 2026",
  "close": "10 Feb 2026",
  "listing": "13 Feb 2026",
  "price": "102 – 108",
  "lot": 1200,

  "about_company": {
    "company_name": "Biopol Chemicals Limited",
    "industry_sector": "Specialty Chemicals (Silicones, Emulsifiers, Biochemicals & Polyelectrolytes)",
    "founded_year": "2023",
    "promoters": [
      "Mr. Santanu Sarkar",
      "Mr. Vedant Sarkar"
    ],
    "description": "Incorporated in April 2023, Biopol Chemicals Limited manufactures and distributes 66 specialty chemicals (40 silicone-based, 5 emulsifier-based, 15 biochemicals, 6 polyelectrolytes) for textiles, home care, agriculture, and industrial applications. It operates on a B2B model with installed capacity of 18.25 lakh litres p.a. across units in West Bengal (manufacturing, corporate office, warehouse) and Gujarat (registered office). It has export operations to Bangladesh and 24 employees as on Dec 31, 2025."
  },

  "ipo_basic_details": {
    "company_name": "Biopol Chemicals Limited",
    "ipo_type": "SME IPO",
    "issue_type": "Fresh Issue (Book Built)",
    "face_value": "₹10 per share",
    "price_band_min": "₹102",
    "price_band_max": "₹108",
    "lot_size": 1200,
    "total_issue_size": "₹31.26 Cr (28,94,400 shares)",
    "fresh_issue_size": "₹31.26 Cr (28,94,400 shares)",
    "offer_for_sale": "0",
    "shares_offered": "28,94,400 shares",
    "listing_exchange": "NSE Emerge (SME) – Symbol: BIOPOL",
    "issue_price": "₹108",
    "minimum_investment": "₹2,59,200 (2 lots)",
    "market_cap_post_issue": "Pre-IPO ₹116.70 Cr; Post-issue higher",
    "pre_issue_shareholding": "100% (Promoters 89.88%)",
    "post_issue_shareholding": "Promoters 65.81%"
  },

  "company_overview": {
    "business_model": "B2B manufacturer/distributor of specialty chemicals with strong focus on R&D and quality certifications; diversified applications across key sectors.",
    "products_services": [
      "Textile Chemicals: Softeners, Silicones, Emulsions, Hydrophilic Finishes, Hardeners & Binders, Dyeing & Printing Auxiliaries",
      "Home Care: Silicone Fluids, Emulsifiers, Cleaning Chemicals",
      "Agriculture: Silicone Adjuvants, Surfactants",
      "Industrial: Silicone-based Release Agents, Specialty Lubricants for PVC"
    ],
    "competitive_strengths": [
      "Strong order book",
      "Dedicated manufacturing unit with quality certifications",
      "Strategic presence in Gujarat & West Bengal",
      "Experienced promoters & management",
      "Export to Bangladesh"
    ],
    "risks": [
      "Raw material price volatility",
      "Competition in specialty chemicals",
      "Dependence on textiles/agriculture sectors",
      "Moderate debt levels",
      "Expansion execution risk (new land)"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "06 Feb 2026",
    "ipo_close_date": "10 Feb 2026",
    "basis_of_allotment_date": "11 Feb 2026",
    "refund_initiation_date": "12 Feb 2026",
    "demat_credit_date": "12 Feb 2026",
    "listing_date": "13 Feb 2026",
    "upi_mandate_deadline": "10 Feb 2026"
  },

  "ipo_objectives": {
    "acquisition_industrial_land": "₹12.26 Cr",
    "repayment_pre_payment_borrowings": "₹11.10 Cr",
    "general_corporate_purposes": "₹4.04 Cr"
  },

  "investor_reservation": {
    "qib_quota": "23.71% (6,86,400 shares)",
    "retail_quota": "33.25% (9,62,400 shares)",
    "hni_quota": "37.81% (10,94,400 shares; bNII 25.21%, sNII 12.60%)",
    "others": "Market Maker 5.22% (1,51,200 shares)"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "2 lots",
      "shares": "2400",
      "amount": "₹2,59,200"
    },
    "retail_maximum": {
      "lot_size": "2 lots",
      "shares": "2400",
      "amount": "₹2,59,200"
    },
    "shni_minimum": {
      "lot_size": "3 lots",
      "shares": "3600",
      "amount": "₹3,88,800"
    },
    "bhni_minimum": {
      "lot_size": "8 lots",
      "shares": "9600",
      "amount": "₹10,36,800"
    }
  },

  "key_performance_indicators": {
    "roe": "36.32% (Dec 2025) / 38.10% (FY25)",
    "roce": "26.32% (Dec 2025) / 30.57% (FY25)",
    "ronw": "30.74% (Dec 2025) / 32.00% (FY25)",
    "pat_margin": "12.29% (Dec 2025) / 8.84% (FY25)",
    "ebitda_margin": "18.41% (Dec 2025) / 13.30% (FY25)",
    "eps": "₹5.47 (pre) / ₹7.41 (post)",
    "nav_per_share": "N/A",
    "debt_to_equity": "0.76 (Dec 2025) / 0.57 (FY25)",
    "pe_ratio": "19.73x (pre) / 14.58x (post)",
    "industry_pe": "20–40x (specialty chemicals)"
  },

  "company_financial_data": [
    {
      "period": "31 Mar 2024",
      "assets": "₹17.56 Cr",
      "total_income": "₹17.43 Cr",
      "pat": "₹2.96 Cr",
      "ebitda": "₹4.43 Cr",
      "net_worth": "₹9.20 Cr",
      "total_borrowing": "₹3.58 Cr"
    },
    {
      "period": "31 Mar 2025",
      "assets": "₹31.48 Cr",
      "total_income": "₹49.15 Cr",
      "pat": "₹4.33 Cr",
      "ebitda": "₹6.53 Cr",
      "net_worth": "₹13.53 Cr",
      "total_borrowing": "₹7.69 Cr"
    },
    {
      "period": "31 Dec 2025",
      "assets": "₹48.88 Cr",
      "total_income": "₹48.97 Cr",
      "pat": "₹6.00 Cr",
      "ebitda": "₹8.99 Cr",
      "net_worth": "₹19.54 Cr",
      "total_borrowing": "₹14.92 Cr"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "₹0 – ₹4 (~0–3.7%)",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "Feb 2026",
    "estimated_listing_price": "₹111 (+2.78–3% premium); current ~₹97.25 (as of Mar 18, 2026)"
  },

  "ipo_subscription_data": {
    "qib_ex_anchor": "21.05x",
    "hni_subscription": "24.49x",
    "retail_subscription": "20.80x",
    "total_subscription": "22.33x"
  },

  "ipo_intermediaries": {
    "registrar": "Bigshare Services Pvt. Ltd.",
    "registrar_website": "https://ipo.bigshareonline.com"
  },

  "ipo_lead_manager": {
    "lead_manager": "Smart Horizon Capital Advisors Pvt. Ltd."
  },

  "company_information": {
    "company_address": "D-211, 2nd Floor, Block-D, Sumel Business Park-6, Near Dudheshwar Circle, Dudheshwar, Tavdipura, Ahmedabad, Gujarat 380004",
    "company_website": "https://biopolchemicals.com/",
    "company_email": "investors@biopolchemicals.com",
    "company_phone": "+91-9147076778"
  },

  "ipo_documents": {
    "drhp_link": "https://nsearchives.nseindia.com/emerge/corporates/content/Registration_29092025224013_BiopolChemicalsLimitedDRHP.pdf",
    "rhp_link": "https://nsearchives.nseindia.com/content/ipo/RHP_BIOPOL.zip",
    "prospectus_pdf": "N/A",
    "investor_presentation": "N/A"
  }
},
{
  "id": 34,
  "name": "NFP Sampoorna Foods",
  "logo": "/images/ipo/sampoorna.png",
  "minInvestment": "₹2,20,000",
  "open": "04 Feb 2026",
  "close": "06 Feb 2026",
  "listing": "11 Feb 2026",
  "price": "52 – 55",
  "lot": 2000,

  "about_company": {
    "company_name": "NFP Sampoorna Foods Limited",
    "industry_sector": "Food Processing / Dry Fruits & Nuts (Premium Cashew, Almonds, Makhana)",
    "founded_year": "2019",
    "promoters": [
      "Praveen Goel",
      "Anju Goel",
      "Yash Vardhan Goel"
    ],
    "description": "Incorporated in 2019, NFP Sampoorna Foods Limited specialises in processing, grading, packaging, and distributing premium dry fruits, primarily cashew nuts (imported raw from Africa), almonds, and makhana (fox nuts). It follows strict quality controls with ISO 9001:2015 and ISO 22000:2018 certifications. Products are sold offline and online via Amazon, Flipkart, and its website (sampoornanuts.com). It has 140 permanent employees as of Nov 30, 2025, with advanced roasting/packaging tech for freshness and nutrition. Focus on branded premium offerings including gift packs."
  },

  "ipo_basic_details": {
    "company_name": "NFP Sampoorna Foods Limited",
    "ipo_type": "SME IPO",
    "issue_type": "Fresh Issue (Book Built)",
    "face_value": "₹10 per share",
    "price_band_min": "₹52",
    "price_band_max": "₹55",
    "lot_size": 2000,
    "total_issue_size": "₹24.53 Cr (44,60,000 shares)",
    "fresh_issue_size": "₹24.53 Cr (44,60,000 shares)",
    "offer_for_sale": "0",
    "shares_offered": "44,60,000 shares",
    "listing_exchange": "NSE Emerge (SME)",
    "issue_price": "₹55",
    "minimum_investment": "₹2,20,000 (2 lots / 4,000 shares at upper band)",
    "market_cap_post_issue": "Approx ₹69–75 Cr pre-IPO; post-issue higher (~₹126 Cr basis on post-issue shares)",
    "pre_issue_shareholding": "100% (Promoters 99.99%)",
    "post_issue_shareholding": "Promoters ≈64–65%"
  },

  "company_overview": {
    "business_model": "Integrated processing and distribution of premium dry fruits/nuts; import raw cashews from Africa, process domestically, sell branded via retail/online and institutional channels.",
    "products_services": [
      "Cashew Nuts (W320, W400 grades & variants)",
      "Almonds (natural, roasted)",
      "Makhana (fox nuts - plain, roasted, flavored)",
      "Gift Packs (festive/corporate)"
    ],
    "competitive_strengths": [
      "Experienced promoters and management",
      "Existing client relationships",
      "Quality certifications & strict controls",
      "Consistent growth, profitability & cash flows",
      "Advanced technology for roasting/packaging",
      "Online + offline presence"
    ],
    "risks": [
      "Commodity price volatility (cashews/almonds)",
      "Import dependence (Africa sourcing)",
      "Competition in branded dry fruits",
      "Working capital intensive",
      "Seasonal demand (festive peaks)"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "04 Feb 2026",
    "ipo_close_date": "06 Feb 2026",
    "basis_of_allotment_date": "09 Feb 2026",
    "refund_initiation_date": "10 Feb 2026",
    "demat_credit_date": "10 Feb 2026",
    "listing_date": "11 Feb 2026",
    "upi_mandate_deadline": "06 Feb 2026"
  },

  "ipo_objectives": {
    "working_capital_requirements": "₹7.25 Cr",
    "prepayment_repayment_borrowings": "₹9.50 Cr",
    "general_corporate_purposes": "Remaining amount (approx ₹8.25 Cr inferred from total)"
  },

  "investor_reservation": {
    "qib_quota": "≈21% (partial details; exact not fully listed)",
    "retail_quota": "≈35%",
    "hni_quota": "≈39% (bNII/sNII split)",
    "others": "Market Maker 5.02% (2,24,000 shares)"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "2 lots",
      "shares": "4000",
      "amount": "₹2,20,000"
    },
    "retail_maximum": {
      "lot_size": "2 lots",
      "shares": "4000",
      "amount": "₹2,20,000"
    },
    "shni_minimum": {
      "lot_size": "3 lots",
      "shares": "6000",
      "amount": "₹3,30,000"
    },
    "bhni_minimum": {
      "lot_size": "10 lots",
      "shares": "20000",
      "amount": "₹11,00,000"
    }
  },

  "key_performance_indicators": {
    "roe": "28.21% (Nov 2025) / 34.82% (FY25)",
    "roce": "24.71% (Nov 2025) / 40.90% (FY25)",
    "ronw": "22.20% (Nov 2025) / 29.76% (FY25)",
    "pat_margin": "9.46% (Nov 2025) / 7.50% (FY25)",
    "ebitda_margin": "18.01% (Nov 2025) / 13.17% (FY25)",
    "eps": "₹3.27 (pre) / ₹4.14 (post)",
    "nav_per_share": "N/A",
    "debt_to_equity": "1.59 (Nov 2025) / 1.26 (FY25)",
    "pe_ratio": "16.81x (pre) / 13.28x (post)",
    "industry_pe": "20–40x (food processing/dry fruits)"
  },

  "company_financial_data": [
    {
      "period": "31 Mar 2023",
      "assets": "₹8.90 Cr",
      "total_income": "₹16.75 Cr",
      "pat": "₹0.41 Cr",
      "ebitda": "₹0.77 Cr",
      "net_worth": "₹8.54 Cr",
      "total_borrowing": "N/A"
    },
    {
      "period": "31 Mar 2024",
      "assets": "₹16.68 Cr",
      "total_income": "₹23.31 Cr",
      "pat": "₹1.02 Cr",
      "ebitda": "₹2.17 Cr",
      "net_worth": "₹11.48 Cr",
      "total_borrowing": "₹18.90 Cr"
    },
    {
      "period": "31 Mar 2025",
      "assets": "₹27.03 Cr",
      "total_income": "₹35.76 Cr",
      "pat": "₹2.67 Cr",
      "ebitda": "₹4.69 Cr",
      "net_worth": "₹9.02 Cr",
      "total_borrowing": "₹11.36 Cr"
    },
    {
      "period": "30 Nov 2025",
      "assets": "₹44.02 Cr",
      "total_income": "₹36.96 Cr",
      "pat": "₹3.49 Cr",
      "ebitda": "₹6.64 Cr",
      "net_worth": "₹15.70 Cr",
      "total_borrowing": "₹24.94 Cr"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "₹0 – ₹2 (~0–3.6%)",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "Feb 2026",
    "estimated_listing_price": "₹55 – ₹57 (flat to mild premium; actual listing performance not detailed, likely flat/muted for SME)"
  },

  "ipo_subscription_data": {
    "qib_ex_anchor": "N/A (data not available on main page; typical low for small SME)",
    "hni_subscription": "N/A",
    "retail_subscription": "N/A",
    "total_subscription": "N/A (IPO closed Feb 6, 2026; no final figures in sources, likely moderate/low as per SME trends)"
  },

  "ipo_intermediaries": {
    "registrar": "Skyline Financial Services Pvt. Ltd.",
    "registrar_website": "https://www.skylinerta.com"
  },

  "ipo_lead_manager": {
    "lead_manager": "3Dimension Capital Services Ltd."
  },

  "company_information": {
    "company_address": "Ground Floor B-3A & B-3B, Plot No 70, Najafgarh Road Industrial Area, Rama Road, New Delhi, Delhi 110015",
    "company_website": "https://www.sampoornanuts.com",
    "company_email": "compliance@sampoornanuts.com",
    "company_phone": "+91 9643829587"
  },

  "ipo_documents": {
    "drhp_link": "https://nsearchives.nseindia.com/emerge/corporates/content/sezalm_30092025190636_NFPSampoornaFoodsLtd_RevisedDRHP.pdf",
    "rhp_link": "https://nsearchives.nseindia.com/content/ipo/RHP_SAMPOORNA.zip",
    "prospectus_pdf": "N/A",
    "investor_presentation": "N/A"
  }
},
{
  "id": 35,
  "name": "Grover Jewells",
  "logo": "/images/ipo/grover.png",
  "minInvestment": "₹2,81,600",
  "open": "04 Feb 2026",
  "close": "06 Feb 2026",
  "listing": "11 Feb 2026",
  "price": "83 – 88",
  "lot": 1600,

  "about_company": {
    "company_name": "Grover Jewells Limited",
    "industry_sector": "Jewellery Manufacturing / Wholesale Gold Jewellery",
    "founded_year": "2021",
    "promoters": [
      "Mr. Deepak Kumar Grover",
      "Mr. Lavkesh Kumar Grover",
      "Mrs. Bhawna Grover"
    ],
    "description": "Grover Jewells Limited, incorporated in 2021, manufactures and designs wholesale gold jewellery including plain gold, studded, and semi-finished pieces in 22K, 20K, and 18K purity (hallmarked and non-hallmarked). It operates two showrooms in Delhi (Karol Bagh and Chandni Chowk) with segments in machine-made chains and casting jewellery. Sales channels include B2B wholesale across 20+ states, retail, and exports to Australia and UAE. Employs 68 people as of Aug 31, 2025."
  },

  "ipo_basic_details": {
    "company_name": "Grover Jewells Limited",
    "ipo_type": "SME IPO",
    "issue_type": "Fresh Issue (Book Built)",
    "face_value": "₹10 per share",
    "price_band_min": "₹83",
    "price_band_max": "₹88",
    "lot_size": 1600,
    "total_issue_size": "₹33.83 Cr (38,44,800 shares)",
    "fresh_issue_size": "₹33.83 Cr (38,44,800 shares approx; net fresh ~₹32 Cr after market maker)",
    "offer_for_sale": "0",
    "shares_offered": "38,44,800 shares (incl. 1,93,600 market maker)",
    "listing_exchange": "NSE Emerge (SME)",
    "issue_price": "₹88",
    "minimum_investment": "₹2,81,600 (2 lots / 3,200 shares)",
    "market_cap_post_issue": "Pre-IPO ₹127.66 Cr; post-issue higher (~₹139–140 Cr at listing)",
    "pre_issue_shareholding": "100%",
    "post_issue_shareholding": "Promoters 73.48%"
  },

  "company_overview": {
    "business_model": "Manufacturing and wholesale of gold jewellery with diversified sales (B2B network, retail showrooms, exports); focus on quality hallmarked products and international reach.",
    "products_services": [
      "Plain Gold Jewellery (22K, 20K, 18K)",
      "Studded Gold Jewellery",
      "Semi-Finished Gold Jewellery",
      "Machine-Made Chains",
      "Casting Jewellery"
    ],
    "competitive_strengths": [
      "Strong B2B network across 20+ states",
      "Exports to Australia and UAE",
      "Diversified sales segments (wholesale, retail, consumer)",
      "Two established showrooms in Delhi",
      "Hallmarked jewellery focus"
    ],
    "risks": [
      "Highly competitive and fragmented jewellery sector",
      "Gold price volatility impact on margins",
      "Sustainability of recent profit boost (FY25 exceptional)",
      "Working capital intensive",
      "Dependence on wholesale/B2B clients"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "04 Feb 2026",
    "ipo_close_date": "06 Feb 2026",
    "basis_of_allotment_date": "09 Feb 2026",
    "refund_initiation_date": "10 Feb 2026",
    "demat_credit_date": "10 Feb 2026",
    "listing_date": "11 Feb 2026",
    "upi_mandate_deadline": "06 Feb 2026"
  },

  "ipo_objectives": {
    "working_capital_requirements": "₹25.34 Cr",
    "general_corporate_purposes": "₹4.50 Cr"
  },

  "investor_reservation": {
    "qib_quota": "47.40% (incl. Anchor 28.42% / 10,92,800 shares)",
    "retail_quota": "33.29% (12,80,000 shares)",
    "hni_quota": "14.27% (bNII 9.49%, sNII 4.79%)",
    "others": "Market Maker 5.04% (1,93,600 shares)"
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
    "bhni_minimum": {
      "lot_size": "8 lots",
      "shares": "12800",
      "amount": "₹11,26,400"
    }
  },

  "key_performance_indicators": {
    "roe": "38.52% (Oct 2025) / 45.67% (FY25)",
    "roce": "30.62% (Oct 2025) / 45% (FY25)",
    "ronw": "38.52% (Oct 2025) / 45.67% (FY25)",
    "pat_margin": "2.21% (Oct 2025) / 1.65% (FY25)",
    "ebitda_margin": "3.09% (Oct 2025) / 2.44% (FY25)",
    "eps": "₹7.15 (pre) / ₹12.35 (post)",
    "nav_per_share": "N/A",
    "debt_to_equity": "1.04 (Oct 2025) / 0.56 (FY25)",
    "pe_ratio": "12.31x (pre) / 7.12x (post)",
    "industry_pe": "15–30x (jewellery manufacturing)"
  },

  "company_financial_data": [
    {
      "period": "31 Mar 2023",
      "assets": "₹11.71 Cr",
      "total_income": "₹255.11 Cr",
      "pat": "₹2.71 Cr",
      "ebitda": "₹4.10 Cr",
      "net_worth": "₹6.29 Cr",
      "total_borrowing": "₹3.74 Cr"
    },
    {
      "period": "31 Mar 2024",
      "assets": "₹13.91 Cr",
      "total_income": "₹258.00 Cr",
      "pat": "₹2.78 Cr",
      "ebitda": "₹4.71 Cr",
      "net_worth": "₹9.07 Cr",
      "total_borrowing": "₹4.17 Cr"
    },
    {
      "period": "31 Mar 2025",
      "assets": "₹29.85 Cr",
      "total_income": "₹460.95 Cr",
      "pat": "₹7.62 Cr",
      "ebitda": "₹11.26 Cr",
      "net_worth": "₹16.69 Cr",
      "total_borrowing": "₹9.34 Cr"
    },
    {
      "period": "31 Oct 2025",
      "assets": "₹67.51 Cr",
      "total_income": "₹473.22 Cr",
      "pat": "₹10.45 Cr",
      "ebitda": "₹14.62 Cr",
      "net_worth": "₹27.14 Cr",
      "total_borrowing": "₹28.30 Cr"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "₹0 (~0%) pre-listing",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "Feb 2026",
    "estimated_listing_price": "Flat ~₹88; actual listed at ₹96 (+9.09% premium)"
  },

  "ipo_subscription_data": {
    "qib_ex_anchor": "11.32x",
    "hni_subscription": "37.57x (bNII 44.63x, sNII 23.56x)",
    "retail_subscription": "15.74x",
    "total_subscription": "19.16x–19.25x"
  },

  "ipo_intermediaries": {
    "registrar": "Maashitla Securities Private Limited",
    "registrar_website": "https://maashitla.com"
  },

  "ipo_lead_manager": {
    "lead_manager": "Finshore Management Services Ltd."
  },

  "company_information": {
    "company_address": "House No C-44/5, 1st Floor Lawrance Road Industrial Area, Keshavpuram Ind Area, North West, Delhi, New Delhi, 110035",
    "company_website": "https://groverjewells.com/",
    "company_email": "cs@groverjewells.com",
    "company_phone": "+91 9218012596"
  },

  "ipo_documents": {
    "drhp_link": "https://nsearchives.nseindia.com/emerge/corporates/content/Registration_27092025215116_DRHP_GroverJewells_NSE_26092025.pdf",
    "rhp_link": "https://nsearchives.nseindia.com/content/ipo/RHP_GJL.zip",
    "prospectus_pdf": "https://cdn.jfone.jewelflow.pro/groverjewells/investor_documents/3843-FP_Grover_Jewells_NSE_06022026_Website.pdf",
    "investor_presentation": "https://www.chittorgarh.net/reports/anchor-investor/grover-jewels-ipo-anchor-allocation-report.pdf"
  }
},
{
  "id": 36,
  "name": "Brandman Retail",
  "logo": "/images/ipo/brandman.png",
  "minInvestment": "₹2,81,600",
  "open": "04 Feb 2026",
  "close": "06 Feb 2026",
  "listing": "11 Feb 2026",
  "price": "167 – 176",
  "lot": 800,

  "about_company": {
    "company_name": "Brandman Retail Limited",
    "industry_sector": "Retail / Distribution of International Sports & Lifestyle Brands",
    "founded_year": "2021",
    "promoters": [
      "Mr. Arun Malhotra",
      "Ms. Kavya Malhotra",
      "Ms. Kashika Malhotra"
    ],
    "description": "Brandman Retail Limited, incorporated in 2021, is an omni-channel distributor and retailer of international sports and lifestyle brands, primarily New Balance (non-exclusive distribution agreement). It operates through distribution, licensing, retail (19 outlets: 11 Exclusive Brand Outlets - EBOs and 2 Multi-Brand Outlets - MBOs under 'Sneakrz' in Bathinda & New Delhi), and e-commerce (Flipkart, Ajio, Tata Cliq). Focus on northern India cities (Ahmedabad, Ambala, Dehradun, New Delhi, Jalandhar, Bathinda, Gurugram, Lucknow, Noida) with asset-light scalable model and growing consumer base."
  },

  "ipo_basic_details": {
    "company_name": "Brandman Retail Limited",
    "ipo_type": "SME IPO",
    "issue_type": "Fresh Issue (Book Built)",
    "face_value": "₹10 per share",
    "price_band_min": "₹167",
    "price_band_max": "₹176",
    "lot_size": 800,
    "total_issue_size": "₹86.09 Cr (48,91,200 shares)",
    "fresh_issue_size": "₹82 Cr (46,46,400 shares)",
    "offer_for_sale": "0",
    "shares_offered": "48,91,200 shares (incl. market maker 2,44,800 shares)",
    "listing_exchange": "NSE Emerge (SME) - Symbol: BRANDMAN",
    "issue_price": "₹176",
    "minimum_investment": "₹2,81,600 (2 lots / 1,600 shares)",
    "market_cap_post_issue": "Pre-IPO ₹324.85 Cr; Post-issue ~₹440–450 Cr (at issue price)",
    "pre_issue_shareholding": "100% (Promoters 99.92% / 1,35,65,986 shares)",
    "post_issue_shareholding": "Promoters 69.03–69.04%"
  },

  "company_overview": {
    "business_model": "Omni-channel platform: distribution/licensing of premium international brands (primarily New Balance), retail EBOs/MBOs, and e-commerce; asset-light, scalable with focus on North India expansion.",
    "products_services": [
      "International Sports & Lifestyle Footwear & Apparel (primarily New Balance)",
      "Exclusive Brand Outlets (EBOs)",
      "Multi-Brand Outlets (MBOs - 'Sneakrz')",
      "Online Sales via Flipkart, Ajio, Tata Cliq"
    ],
    "competitive_strengths": [
      "Experienced promoters & team",
      "Omni-channel presence (retail + online + distribution)",
      "Strategic North India locations",
      "Asset-light scalable model",
      "Strong brand partnerships (New Balance)",
      "Growing consumer loyalty & base"
    ],
    "risks": [
      "Dependence on key brand (New Balance non-exclusive)",
      "Intense competition in premium retail",
      "Economic sensitivity & discretionary spending",
      "Expansion execution risks (new outlets)",
      "Working capital needs for inventory/retail"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "04 Feb 2026",
    "ipo_close_date": "06 Feb 2026",
    "basis_of_allotment_date": "09 Feb 2026",
    "refund_initiation_date": "10 Feb 2026",
    "demat_credit_date": "10 Feb 2026",
    "listing_date": "11 Feb 2026",
    "upi_mandate_deadline": "06 Feb 2026"
  },

  "ipo_objectives": {
    "capex_new_EBOs_MBOs": "₹27.90 Cr (launch 15 new outlets)",
    "working_capital_new_outlets": "₹11.78 Cr",
    "working_capital_existing_outlets": "₹26.72 Cr",
    "general_corporate_purposes": "₹8.16 Cr"
  },

  "investor_reservation": {
    "qib_quota": "47.43% (Anchor 28.46% / 13,92,000 shares; QIB ex-anchor 18.97%)",
    "retail_quota": "33.27% (16,27,200 shares)",
    "hni_quota": "14.30% (bNII 9.54%, sNII 4.76%)",
    "others": "Market Maker 5% (2,44,800 shares)"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "2 lots",
      "shares": "1600",
      "amount": "₹2,81,600"
    },
    "retail_maximum": {
      "lot_size": "2 lots",
      "shares": "1600",
      "amount": "₹2,81,600"
    },
    "shni_minimum": {
      "lot_size": "3 lots",
      "shares": "2400",
      "amount": "₹4,22,400"
    },
    "bhni_minimum": {
      "lot_size": "8 lots",
      "shares": "6400",
      "amount": "₹11,26,400"
    }
  },

  "key_performance_indicators": {
    "roe": "43.69% (Dec 2025) / 108.47% (FY25)",
    "roce": "36.92% (Dec 2025) / 70.48% (FY25)",
    "ronw": "32.64% (Dec 2025) / 70.33% (FY25)",
    "pat_margin": "20.64% (Dec 2025) / 15.49% (FY25)",
    "ebitda_margin": "28.35% (Dec 2025) / 23.02% (FY25)",
    "eps": "₹15.45 (pre) / ₹14.21 (post)",
    "nav_per_share": "N/A",
    "debt_to_equity": "0.26 (Dec 2025) / 0.40 (FY25)",
    "pe_ratio": "11.39x (pre) / 12.38x (post)",
    "industry_pe": "20–50x (premium retail/lifestyle)"
  },

  "company_financial_data": [
    {
      "period": "31 Mar 2024",
      "assets": "₹40.49 Cr",
      "total_income": "₹123.49 Cr",
      "pat": "₹8.27 Cr",
      "ebitda": "₹12.01 Cr",
      "net_worth": "₹8.84 Cr",
      "total_borrowing": "₹3.53 Cr"
    },
    {
      "period": "31 Mar 2025",
      "assets": "₹84.73 Cr",
      "total_income": "₹136.30 Cr",
      "pat": "₹20.95 Cr",
      "ebitda": "₹31.15 Cr",
      "net_worth": "₹29.79 Cr",
      "total_borrowing": "₹11.87 Cr"
    },
    {
      "period": "31 Dec 2025",
      "assets": "₹101.31 Cr",
      "total_income": "₹97.21 Cr",
      "pat": "₹19.67 Cr",
      "ebitda": "₹27.02 Cr",
      "net_worth": "₹60.26 Cr",
      "total_borrowing": "₹15.68 Cr"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "₹17 – ₹28 (~9.7–15.9%) pre-listing",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "Feb 2026",
    "estimated_listing_price": "₹183–192 (actual opened ₹183 +3.98%, high ₹192.15, closed strong)"
  },

  "ipo_subscription_data": {
    "qib_ex_anchor": "85.24x",
    "hni_subscription": "202.98x (bNII 248.47x, sNII 111.86x)",
    "retail_subscription": "93.12x",
    "total_subscription": "107x – 114.48x (final)"
  },

  "ipo_intermediaries": {
    "registrar": "Bigshare Services Pvt. Ltd.",
    "registrar_website": "https://ipo.bigshareonline.com"
  },

  "ipo_lead_manager": {
    "lead_manager": "Gretex Corporate Services Ltd."
  },

  "company_information": {
    "company_address": "DPT 718-719, 7th Floor, DLF Prime Tower, Okhla Industrial Area Phase-I, South Delhi, New Delhi 110020",
    "company_website": "https://brandmanretail.com",
    "company_email": "info@brandmanretail.com",
    "company_phone": "011-46052323"
  },

  "ipo_documents": {
    "drhp_link": "https://nsearchives.nseindia.com/emerge/corporates/content/aartic_08092025122017_Brandman_DRHP.pdf",
    "rhp_link": "https://nsearchives.nseindia.com/content/ipo/RHP_BRANDMAN.zip",
    "prospectus_pdf": "https://cdn.shopify.com/s/files/1/0815/6220/6519/files/Prospectus_BRL-compressed.pdf?v=1770627993",
    "investor_presentation": "https://www.chittorgarh.net/reports/anchor-investor/brandman-retail-ipo-anchor-allocation-report.pdf"
  }
},
{
  "id": 37,
  "name": "Marushika Technology",
  "logo": "/images/ipo/marushika.png",
  "minInvestment": "₹2,80,800",
  "open": "12 Feb 2026",
  "close": "16 Feb 2026",
  "listing": "19 Feb 2026",
  "price": "111 – 117",
  "lot": 1200,

  "about_company": {
    "company_name": "Marushika Technology Limited",
    "industry_sector": "IT & Telecom Infrastructure / Distribution & Solutions Provider",
    "founded_year": "N/A (incorporated prior to 2023 based on financials)",
    "promoters": [
      "Ms. Monicca Agarwaal",
      "Mr. Jai Prakash Pandey",
      "Ms. Sonika Aggarwal"
    ],
    "description": "Marushika Technology Limited distributes IT and telecom infrastructure products and provides end-to-end solutions including setup of data centers, networking, telecom systems, surveillance, cybersecurity, power management, installation, maintenance, and smart solutions (access control, parking, lighting, waste management). It operates primarily on B2B and B2G models, serving clients like Bharat Electronics Limited (BEL), Central Electronics Limited (CEL), Delhi Metro Rail Corporation (DMRC), and National Security Guard (NSG). The company has completed over 150 projects with ongoing projects worth ₹28.35 Cr as on Jul 31, 2025."
  },

  "ipo_basic_details": {
    "company_name": "Marushika Technology Limited",
    "ipo_type": "SME IPO",
    "issue_type": "Fresh Issue (Book Built)",
    "face_value": "₹10 per share",
    "price_band_min": "₹111",
    "price_band_max": "₹117",
    "lot_size": 1200,
    "total_issue_size": "₹27 Cr (23,05,200 shares)",
    "fresh_issue_size": "₹26 Cr (21,88,800 shares approx; net fresh after market maker)",
    "offer_for_sale": "0",
    "shares_offered": "23,05,200 shares (incl. market maker 1,16,400 shares)",
    "listing_exchange": "NSE Emerge (SME) – Symbol: MARUSHIKA",
    "issue_price": "₹117",
    "minimum_investment": "₹2,80,800 (2 lots / 2,400 shares)",
    "market_cap_post_issue": "Pre-IPO ₹99.88 Cr; Post-issue higher (~₹140 Cr at issue price)",
    "pre_issue_shareholding": "100% (Promoters 79.71%)",
    "post_issue_shareholding": "Promoters 58.19%"
  },

  "company_overview": {
    "business_model": "B2B/B2G distributor and integrator of IT/telecom infra solutions; provides turnkey projects including installation, maintenance, and smart city/defence-related solutions.",
    "products_services": [
      "IT & Telecom Infra: Data Center Setup, Servers & IP Solutions, Videowall Displays, Power Solutions, Active Networking",
      "Auto-Tech for Defence: Repairs/Refurbishments, Reverse Engineering, Control Panels",
      "Smart Solutions: Access Control, Parking Management, Smart Lighting, Waste Management",
      "Surveillance, Cybersecurity, Telecom Systems"
    ],
    "competitive_strengths": [
      "Diversified IT/telecom solutions portfolio",
      "Strong OEM relationships",
      "Experienced management team",
      "Presence across multiple verticals with long client relationships",
      "Track record of financial performance and project execution"
    ],
    "risks": [
      "Dependence on government tenders/projects",
      "Competition in IT infra distribution",
      "Working capital intensive",
      "Raw material/equipment price volatility",
      "Execution risks in large projects"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "12 Feb 2026",
    "ipo_close_date": "16 Feb 2026",
    "basis_of_allotment_date": "17 Feb 2026",
    "refund_initiation_date": "18 Feb 2026",
    "demat_credit_date": "18 Feb 2026",
    "listing_date": "19 Feb 2026",
    "upi_mandate_deadline": "16 Feb 2026"
  },

  "ipo_objectives": {
    "repayment_pre_payment_borrowings": "₹5.00 Cr",
    "funding_working_capital": "₹14.68 Cr",
    "general_corporate_purposes": "₹3.29 Cr"
  },

  "investor_reservation": {
    "qib_quota": "47.16% (Anchor 28.27% / 6,51,600 shares; QIB ex-anchor 18.90% / 4,35,600 shares)",
    "retail_quota": "33.42% (7,70,400 shares)",
    "hni_quota": "14.37% (bNII 9.53% / 2,19,600 shares; sNII 4.84% / 1,11,600 shares)",
    "others": "Market Maker 5.05% (1,16,400 shares)"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "2 lots",
      "shares": "2400",
      "amount": "₹2,80,800"
    },
    "retail_maximum": {
      "lot_size": "2 lots",
      "shares": "2400",
      "amount": "₹2,80,800"
    },
    "shni_minimum": {
      "lot_size": "3 lots",
      "shares": "3600",
      "amount": "₹4,21,200"
    },
    "bhni_minimum": {
      "lot_size": "8 lots",
      "shares": "9600",
      "amount": "₹11,23,200"
    }
  },

  "key_performance_indicators": {
    "roe": "18.52% (Sep 2025) / 52.77% (FY25)",
    "roce": "13.89% (Sep 2025) / 26.88% (FY25)",
    "ronw": "18.52% (Sep 2025) / 52.77% (FY25)",
    "pat_margin": "6.45% (Sep 2025) / 7.37% (FY25)",
    "ebitda_margin": "11.59% (Sep 2025) / 12.28% (FY25)",
    "eps": "₹7.35 (post-issue)",
    "nav_per_share": "N/A",
    "debt_to_equity": "1.02 (Sep 2025) / 1.39 (FY25)",
    "pe_ratio": "15.91x (post-issue)",
    "industry_pe": "20–40x (IT infra/distribution)"
  },

  "company_financial_data": [
    {
      "period": "31 Mar 2024",
      "assets": "₹48.37 Cr",
      "total_income": "₹60.83 Cr",
      "pat": "₹3.14 Cr",
      "ebitda": "₹5.67 Cr",
      "net_worth": "₹8.45 Cr",
      "total_borrowing": "₹19.64 Cr"
    },
    {
      "period": "31 Mar 2025",
      "assets": "₹53.94 Cr",
      "total_income": "₹85.63 Cr",
      "pat": "₹6.29 Cr",
      "ebitda": "₹10.47 Cr",
      "net_worth": "₹15.37 Cr",
      "total_borrowing": "₹21.37 Cr"
    },
    {
      "period": "30 Sep 2025",
      "assets": "₹62.68 Cr",
      "total_income": "₹48.71 Cr",
      "pat": "₹3.14 Cr",
      "ebitda": "₹5.64 Cr",
      "net_worth": "₹18.51 Cr",
      "total_borrowing": "₹18.92 Cr"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "₹0 – ₹2 (~0–1.71%)",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "Feb 2026",
    "estimated_listing_price": "₹117 – ₹120 (actual listed at ₹120, +2.56% premium on NSE SME)"
  },

  "ipo_subscription_data": {
    "qib_ex_anchor": "2.92x",
    "hni_subscription": "41.00x (bNII 50.69x, sNII 21.92x)",
    "retail_subscription": "16.51x",
    "total_subscription": "17.94x (final)"
  },

  "ipo_intermediaries": {
    "registrar": "Skyline Financial Services Pvt. Ltd.",
    "registrar_website": "https://www.skylinerta.com"
  },

  "ipo_lead_manager": {
    "lead_manager": "NEXGEN Financial Solutions Pvt. Ltd."
  },

  "company_information": {
    "company_address": "Shop No. 5, Acharya Niketan, Mayur Vihar, East Delhi, New Delhi, Delhi 110091",
    "company_website": "N/A",
    "company_email": "Info@marushika.in",
    "company_phone": "0120-4290383"
  },

  "ipo_documents": {
    "drhp_link": "https://nsearchives.nseindia.com/emerge/corporates/content/Registration_06092025192253_DRHP_Marushika_Final.pdf",
    "rhp_link": "https://nsearchives.nseindia.com/content/ipo/RHP_MARUSHIKA.zip",
    "prospectus_pdf": "https://marushika.in/pdf-data/Prospectus.pdf",
    "investor_presentation": "https://www.chittorgarh.net/reports/anchor-investor/anchor_marushika.pdf"
  }
},
{
  "id": 38,
  "name": "Pan HR Solutions",
  "logo": "/images/ipo/panhr.png",
  "minInvestment": "₹2,49,600",
  "open": "06 Feb 2026",
  "close": "10 Feb 2026",
  "listing": "13 Feb 2026",
  "price": "74 – 78",
  "lot": 1600,

  "about_company": {
    "company_name": "PAN HR Solutions Limited",
    "industry_sector": "Manpower & HR Services / Staffing, Payroll & Facility Management",
    "founded_year": "2015",
    "promoters": [
      "Rajeev Kumar",
      "Rajni Kumari"
    ],
    "description": "Incorporated in 2015, PAN HR Solutions Limited provides comprehensive HR and manpower solutions including recruitment, staffing, payroll management, compliance auditing, facility management (housekeeping, pantry, office assistants), and e-commerce logistics support. It operates on a B2B model, deploying over 10,374 personnel (as of Nov 30, 2025) across client locations for unskilled to skilled blue-collar roles. The company offers end-to-end services with strong focus on statutory compliance (EPF, ESIC, Professional Tax etc.) and acts as a one-stop HR provider."
  },

  "ipo_basic_details": {
    "company_name": "PAN HR Solutions Limited",
    "ipo_type": "SME IPO",
    "issue_type": "Fresh Issue cum OFS (Book Built)",
    "face_value": "₹10 per share",
    "price_band_min": "₹74",
    "price_band_max": "₹78",
    "lot_size": 1600,
    "total_issue_size": "₹17.04 Cr (21,84,000 shares)",
    "fresh_issue_size": "₹14.04 Cr (18,00,000 shares)",
    "offer_for_sale": "₹3.00 Cr (3,84,000 shares)",
    "shares_offered": "21,84,000 shares",
    "listing_exchange": "BSE SME (Script Code: 544698, ISIN: INE1N9E01015)",
    "issue_price": "₹78",
    "minimum_investment": "₹2,49,600 (2 lots / 3,200 shares)",
    "market_cap_post_issue": "Pre-IPO ₹56.25 Cr; Post-issue higher (~₹75 Cr at issue price)",
    "pre_issue_shareholding": "100% (Promoters 90.92%)",
    "post_issue_shareholding": "Promoters 62.90%"
  },

  "company_overview": {
    "business_model": "B2B HR solutions provider offering manpower deployment, payroll, compliance, facility management, and staffing for diverse industries; extensive workforce with compliance expertise.",
    "products_services": [
      "Manpower Recruitment & Staffing (blue-collar/skilled/unskilled)",
      "Payroll Management & Statutory Compliance (EPF, ESIC, PT etc.)",
      "Facility Management (housekeeping, pantry, office support)",
      "Compliance Auditing Services",
      "E-commerce Logistics Support"
    ],
    "competitive_strengths": [
      "Extensive workforce deployment (10,374+ personnel)",
      "Strong compliance & regulatory expertise",
      "Experienced leadership team",
      "Comprehensive one-stop HR portfolio"
    ],
    "risks": [
      "Manpower-intensive model with labor law risks",
      "Competition in staffing/HR services",
      "Client concentration or contract renewal risks",
      "Low margins typical in services sector",
      "Dependence on economic cycles & client industries"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "06 Feb 2026",
    "ipo_close_date": "10 Feb 2026",
    "basis_of_allotment_date": "11 Feb 2026",
    "refund_initiation_date": "12 Feb 2026",
    "demat_credit_date": "12 Feb 2026",
    "listing_date": "13 Feb 2026",
    "upi_mandate_deadline": "10 Feb 2026",
    "anchor_bid_date": "05 Feb 2026"
  },

  "ipo_objectives": {
    "working_capital_requirements": "₹9.75 Cr",
    "general_corporate_purposes": "₹2.11 Cr"
  },

  "investor_reservation": {
    "qib_quota": "41.10% (incl. Anchor 24.62% / 5,37,600 shares; QIB ex-anchor 16.48%)",
    "retail_quota": "29.01% (6,33,600 shares)",
    "hni_quota": "12.53% (NII – bNII 8.35%, sNII 4.18%)",
    "others": "Market Maker 17.36% (3,79,200 shares)"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "2 lots",
      "shares": "3200",
      "amount": "₹2,49,600"
    },
    "retail_maximum": {
      "lot_size": "2 lots",
      "shares": "3200",
      "amount": "₹2,49,600"
    },
    "shni_minimum": {
      "lot_size": "3 lots",
      "shares": "4800",
      "amount": "₹3,74,400"
    },
    "bhni_minimum": {
      "lot_size": "9 lots",
      "shares": "14400",
      "amount": "₹11,23,200"
    }
  },

  "key_performance_indicators": {
    "roe": "24.64% (Nov 2025) / 31.05% (FY25)",
    "roce": "26.76% (Nov 2025) / 38.30% (FY25)",
    "ronw": "21.94% (Nov 2025) / 27.47% (FY25)",
    "pat_margin": "3.33% (Nov 2025) / 1.75% (FY25)",
    "ebitda_margin": "4.12% (Nov 2025) / 2.42% (FY25)",
    "eps": "₹9.27 (pre) / ₹10.67 (post)",
    "nav_per_share": "N/A",
    "debt_to_equity": "Very low (₹0.08 Cr borrowings as of Nov 2025)",
    "pe_ratio": "8.41x (pre) / 7.31x (post)",
    "industry_pe": "15–30x (HR/staffing services)"
  },

  "company_financial_data": [
    {
      "period": "31 Mar 2025",
      "assets": "₹36.06 Cr",
      "total_income": "₹283.69 Cr",
      "pat": "₹5.02 Cr",
      "ebitda": "N/A (but margin 2.42%)",
      "net_worth": "N/A",
      "total_borrowing": "Low"
    },
    {
      "period": "30 Nov 2025",
      "assets": "₹43.72 Cr",
      "total_income": "₹154.23 Cr",
      "pat": "₹5.13 Cr",
      "ebitda": "₹6.34 Cr",
      "net_worth": "₹23.39 Cr",
      "total_borrowing": "₹0.08 Cr"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "₹0 (~0%)",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "Feb 2026",
    "estimated_listing_price": "₹78 (flat; actual listed at ₹78.35, +0.44% premium)"
  },

  "ipo_subscription_data": {
    "qib_ex_anchor": "6.57x",
    "hni_subscription": "25.41x (NII overall)",
    "retail_subscription": "8.99x–9.4x",
    "total_subscription": "11.85x (final)"
  },

  "ipo_intermediaries": {
    "registrar": "Maashitla Securities Pvt.Ltd.",
    "registrar_website": "https://maashitla.com/allotment-status/public-issues"
  },

  "ipo_lead_manager": {
    "lead_manager": "Marwadi Chandarana Intermediaries Brokers Pvt.Ltd."
  },

  "company_information": {
    "company_address": "A - 42/03, Second floor, Sector-62, Gautam Buddha Nagar, Noida, Uttar Pradesh, 201301",
    "company_website": "http://www.panhr.in/",
    "company_email": "cscompliance@panhr.in",
    "company_phone": "+91 74288 52201"
  },

  "ipo_documents": {
    "drhp_link": "https://www.bsesme.com/download/352910/SME_IPO%20InPrinciple/DRHPPANHR_20250930211108.pdf",
    "rhp_link": "https://www.bseindia.com/downloads/ipo/RHP&GID_050220261521.zip",
    "prospectus_pdf": "https://www.panhr.in/pdf/Prospectus.pdf",
    "investor_presentation": "https://www.chittorgarh.net/reports/anchor-investor/pan-hr-solution-anchor-investor-list.pdf"
  }
},
{
  "id": 39,
  "name": "Fractal Analytics",
  "logo": "/images/ipo/Fractal.png",
  "minInvestment": "₹14,400",
  "open": "09 Feb 2026",
  "close": "11 Feb 2026",
  "listing": "16 Feb 2026",
  "price": "857 – 900",
  "lot": 16,

  "about_company": {
    "company_name": "Fractal Analytics Limited",
    "industry_sector": "AI & Analytics / Enterprise AI Solutions",
    "founded_year": "2000",
    "promoters": [
      "Srikanth Velamakanni",
      "Pranay Agrawal",
      "Chetana Kumar",
      "Narendra Kumar Agrawal",
      "Rupa Krishnan Agrawal"
    ],
    "description": "Fractal Analytics Limited is a global enterprise AI and analytics firm founded in March 2000. It supports major companies in intelligent decision-making through AI services and products via its agentic AI platform Cogentiq (Fractal.ai) and standalone AI businesses (Fractal Alpha) for growth markets. It blends technical expertise with domain and functional knowledge to deliver AI solutions across industries and functions. Key clients include Citibank, Costco, Franklin Templeton, Mars, Mondelez, Nationwide, Nestle, Philips. It has a strong focus on innovation, long-term client partnerships, and talent nurturing."
  },

  "ipo_basic_details": {
    "company_name": "Fractal Analytics Limited",
    "ipo_type": "Mainboard IPO",
    "issue_type": "Fresh Issue cum OFS (Book Built)",
    "face_value": "₹1 per share",
    "price_band_min": "₹857",
    "price_band_max": "₹900",
    "lot_size": 16,
    "total_issue_size": "₹2,834 Cr (3,15,23,948 shares approx; up to 3,15,57,305 incl. employee reservation)",
    "fresh_issue_size": "₹1,026 Cr (1,14,08,394 shares approx)",
    "offer_for_sale": "₹1,808 Cr (2,01,15,554 shares)",
    "shares_offered": "3,15,23,948 shares (public offer; total incl. employee 3,15,57,305)",
    "listing_exchange": "BSE & NSE (BSE Script: 544700; NSE Symbol: FRACTAL; ISIN: INE212S01015)",
    "issue_price": "₹900",
    "minimum_investment": "₹14,400 (1 lot at upper band)",
    "market_cap_post_issue": "Approx ₹15,473–15,500 Cr (pre-IPO basis adjusted; post-listing ~₹15,477 Cr)",
    "pre_issue_shareholding": "Promoters ≈29% (approx; detailed in RHP)",
    "post_issue_shareholding": "Promoters reduced; exact dilution from fresh issue"
  },

  "company_overview": {
    "business_model": "Global AI and analytics provider; structured into Fractal.ai (AI platform/services) and Fractal Alpha (standalone AI growth businesses); long-term client partnerships with diversified revenue.",
    "products_services": [
      "Agentic AI Platform (Cogentiq)",
      "Enterprise AI Solutions & Services",
      "Analytics & Decision Intelligence across industries/functions",
      "Standalone AI Businesses for emerging markets"
    ],
    "competitive_strengths": [
      "Leading player in fast-growing AI market",
      "Long-term partnerships with top global clients",
      "Diversified revenue base",
      "Deep integrated technical, domain & functional expertise",
      "Track record of innovation & client investment",
      "Culture of trust, transparency & talent focus",
      "Experienced founders-led management with long-term vision"
    ],
    "risks": [
      "Inconsistency in bottom lines despite top-line growth",
      "High valuation & AI sector volatility",
      "Dependence on key clients & geographies",
      "Competition from global AI players",
      "Execution risks in R&D, acquisitions & expansion"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "09 Feb 2026",
    "ipo_close_date": "11 Feb 2026",
    "anchor_bid_date": "06 Feb 2026",
    "basis_of_allotment_date": "12 Feb 2026",
    "refund_initiation_date": "13 Feb 2026",
    "demat_credit_date": "13 Feb 2026",
    "listing_date": "16 Feb 2026",
    "upi_mandate_deadline": "11 Feb 2026 (5:00 PM)"
  },

  "ipo_objectives": {
    "investment_subsidiary_Fractal_USA_debt_repayment": "₹264.90 Cr",
    "purchase_laptops": "₹57.10 Cr",
    "setting_up_new_office_premises_India": "₹121.10 Cr",
    "investment_R&D_sales_marketing_Fractal_Alpha": "₹355.10 Cr",
    "inorganic_growth_acquisitions_strategic_initiatives_GCP": "₹161.10 Cr"
  },

  "investor_reservation": {
    "qib_quota": "73.25% (2,31,15,833 shares; Anchor 43.95% / 1,38,69,499 shares; ex-anchor 29.30%)",
    "retail_quota": "9.77% (30,82,110 shares)",
    "hni_quota": "14.65% (46,23,166 shares; bNII 9.77%, sNII 4.88%)",
    "employee_quota": "2.33% (7,36,196 shares; discount ₹85 per share)",
    "others": "Max allottees: Retail 1,92,631; sNII 6,879; bNII 13,759"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "1 lot",
      "shares": "16",
      "amount": "₹14,400"
    },
    "retail_maximum": {
      "lot_size": "13 lots",
      "shares": "208",
      "amount": "₹1,87,200"
    },
    "shni_minimum": {
      "lot_size": "14 lots",
      "shares": "224",
      "amount": "₹2,01,600"
    },
    "bhni_minimum": {
      "lot_size": "70 lots",
      "shares": "1,120",
      "amount": "₹10,08,000"
    }
  },

  "key_performance_indicators": {
    "roe": "3.6% (Sep 2025) / 12.6% (Mar 2025)",
    "roce": "N/A",
    "ronw": "3.6% (Sep 2025) / 12.6% (Mar 2025)",
    "pat_margin": "4.50% (Sep 2025) / 8.00% (Mar 2025)",
    "ebitda_margin": "11.90% (Sep 2025) / 14.40% (Mar 2025)",
    "eps": "₹13.74 (pre-IPO) / ₹8.25 (post-IPO)",
    "nav_per_share": "N/A",
    "debt_to_equity": "Moderate (borrowings ₹274.60 Cr as Sep 2025)",
    "pe_ratio": "65.5x (pre-IPO) / 109.12x (post-IPO)",
    "industry_pe": "High-growth AI/tech peers 50–150x+"
  },

  "company_financial_data": [
    {
      "period": "31 Mar 2023",
      "assets": "₹2,248.70 Cr",
      "total_income": "₹2,043.70 Cr",
      "pat": "₹194.40 Cr",
      "ebitda": "₹436.80 Cr",
      "net_worth": "₹1,339.20 Cr",
      "total_borrowing": "₹325.60 Cr"
    },
    {
      "period": "31 Mar 2024",
      "assets": "₹2,392.00 Cr",
      "total_income": "₹2,241.90 Cr",
      "pat": "₹-54.70 Cr",
      "ebitda": "₹97.20 Cr",
      "net_worth": "₹1,397.00 Cr",
      "total_borrowing": "₹250.10 Cr"
    },
    {
      "period": "31 Mar 2025",
      "assets": "₹2,857.60 Cr",
      "total_income": "₹2,816.20 Cr",
      "pat": "₹220.60 Cr",
      "ebitda": "₹398.00 Cr",
      "net_worth": "₹1,748.30 Cr",
      "total_borrowing": "₹266.20 Cr"
    },
    {
      "period": "30 Sep 2025",
      "assets": "₹2,965.40 Cr",
      "total_income": "₹1,594.30 Cr",
      "pat": "₹70.90 Cr",
      "ebitda": "₹185.60 Cr",
      "net_worth": "₹1,957.50 Cr",
      "total_borrowing": "₹274.60 Cr"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "₹5 – ₹98 (~0.55–10.89%) pre-listing (varied reports; peaked higher early, settled lower)",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "Feb 2026",
    "estimated_listing_price": "₹905–998 (actual listed at ₹876 on NSE, -2.67% to -3% discount; muted debut)"
  },

  "ipo_subscription_data": {
    "qib_ex_anchor": "4.41x (Day 3)",
    "hni_subscription": "1.11x (bNII 1.24x, sNII 0.86x)",
    "retail_subscription": "1.10x",
    "employee_subscription": "0.65x",
    "total_subscription": "2.81x (final; fully subscribed on close)"
  },

  "ipo_intermediaries": {
    "registrar": "MUFG Intime India Private Limited",
    "registrar_website": "https://in.mpms.mufg.com/Initial_Offer/public-issues.html"
  },

  "ipo_lead_manager": {
    "lead_manager": "Kotak Mahindra Capital Company Limited, Axis Capital Limited (among others)"
  },

  "company_information": {
    "company_address": "Level 7, Commerz II,International Business Park, Oberoi Garden City Off W. E. Highway, Goregaon (E),Mumbai, Maharashtra, 400063",
    "company_website": "https://fractal.ai",
    "company_email": "investorrelations@fractal.ai",
    "company_phone": "+91 22 6850 5800"
  },

  "ipo_documents": {
    "drhp_link": "https://www.sebi.gov.in/filings/public-issues/aug-2025/fractal-analytics-limited_96271.html",
    "rhp_link": "https://fractal.ai/docs/Investor-Relations/Offer-Documents/Fractal-RHP.pdf",
    "prospectus_pdf": "https://www.sebi.gov.in/web/?file=https://www.sebi.gov.in/sebi_data/attachdocs/feb-2026/1770955551279.pdf#page=1&zoom=page-width,-16,842\ ",
    "investor_presentation": "https://www.chittorgarh.net/reports/anchor-investor/fractal-analytics-ipo-anchor-allocation-letter.pdf"
  }
},{
  "id": 40,
  "name": "Aye Finance",
  "logo": "/images/ipo/AyeFinance.png",
  "minInvestment": "₹14,964",
  "open": "09 Feb 2026",
  "close": "11 Feb 2026",
  "listing": "16 Feb 2026",
  "price": "122 – 129",
  "lot": 116,

  "about_company": {
    "company_name": "Aye Finance Limited",
    "industry_sector": "NBFC / Small Business Loans to Micro-Scale MSMEs",
    "founded_year": "1993",
    "promoters": [
      "Not explicitly detailed in public summaries (Marquee investors backed; professional management team)"
    ],
    "description": "Incorporated in 1993, Aye Finance Limited is an NBFC offering secured and unsecured small-ticket business loans for working capital and expansion, primarily to micro-scale MSMEs in manufacturing, trading, service, and allied agriculture sectors. Products include mortgage loans, ‘Saral’ Property Loans, secured and unsecured hypothecation loans. It serves 586,825 active customers across 18 states and 3 union territories with significant AUM. Employs 10,459 full-time staff as of Sep 30, 2025."
  },

  "ipo_basic_details": {
    "company_name": "Aye Finance Limited",
    "ipo_type": "Mainboard IPO",
    "issue_type": "Fresh Issue cum OFS (Book Built)",
    "face_value": "₹2 per share",
    "price_band_min": "₹122",
    "price_band_max": "₹129",
    "lot_size": 116,
    "total_issue_size": "₹1,010 Cr (7,82,94,571 shares approx)",
    "fresh_issue_size": "₹710 Cr (5,50,38,759 shares approx)",
    "offer_for_sale": "₹300 Cr (2,32,55,812 shares)",
    "shares_offered": "7,82,94,571 shares",
    "listing_exchange": "BSE & NSE",
    "issue_price": "₹129",
    "minimum_investment": "₹14,964 (1 lot at upper band)",
    "market_cap_post_issue": "Pre-IPO ₹3,183.52 Cr; Post-issue higher",
    "pre_issue_shareholding": "Promoters & investors (detailed in RHP)",
    "post_issue_shareholding": "Promoters reduced; dilution from fresh issue"
  },

  "company_overview": {
    "business_model": "NBFC focused on small-ticket secured/unsecured loans to underserved micro-MSMEs; pan-India presence with strong sourcing, underwriting, collections, and tech resilience.",
    "products_services": [
      "Mortgage Loans",
      "Saral Property Loans",
      "Secured Hypothecation Loans",
      "Unsecured Hypothecation Loans"
    ],
    "competitive_strengths": [
      "Leading lender in small-ticket MSME loans with comprehensive offerings",
      "Strong sourcing & high customer retention via pan-India presence",
      "Effective underwriting methodology",
      "Robust multi-tiered collection capabilities",
      "Technological prowess for resilience",
      "Diversified lender base & cost-effective financing",
      "Experienced management backed by marquee investors"
    ],
    "risks": [
      "Credit & default risks in micro-MSME segment",
      "Interest rate & liquidity risks",
      "Regulatory changes in NBFC space",
      "Competition from banks/NBFCs",
      "Economic slowdown impact on MSMEs"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "09 Feb 2026",
    "ipo_close_date": "11 Feb 2026",
    "basis_of_allotment_date": "12 Feb 2026",
    "refund_initiation_date": "13 Feb 2026",
    "demat_credit_date": "13 Feb 2026",
    "listing_date": "16 Feb 2026",
    "upi_mandate_deadline": "11 Feb 2026"
  },

  "ipo_objectives": {
    "capital_base_strengthening": "Primary utilization (inferred from NBFC IPO norms)",
    "general_corporate_purposes": "Remaining (including potential debt/expansion)"
  },

  "investor_reservation": {
    "qib_quota": "75.00% (incl. Anchor 45.00% / 3,52,32,558 shares; QIB ex-anchor 30.00%)",
    "retail_quota": "10.00% (78,29,456 shares)",
    "hni_quota": "15.00% (bNII 10.00% / 78,29,457 shares; sNII 5.00% / 39,14,728 shares)",
    "others": "Total 100%"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "1 lot",
      "shares": "116",
      "amount": "₹14,964"
    },
    "retail_maximum": {
      "lot_size": "13 lots",
      "shares": "1508",
      "amount": "₹1,94,532"
    },
    "shni_minimum": {
      "lot_size": "14 lots",
      "shares": "1624",
      "amount": "₹2,09,496"
    },
    "bhni_minimum": {
      "lot_size": "67 lots",
      "shares": "7772",
      "amount": "₹10,02,588"
    }
  },

  "key_performance_indicators": {
    "roe": "7.63% (Sep 2025) / 12.12% (Mar 2025)",
    "roce": "N/A",
    "ronw": "3.82% (Sep 2025) / 12.12% (Mar 2025)",
    "pat_margin": "N/A (but PAT growth evident)",
    "ebitda_margin": "N/A",
    "eps": "₹9.14 (pre-IPO) / ₹5.24 (post-IPO)",
    "nav_per_share": "N/A",
    "debt_to_equity": "3.02 (Sep 2025) / 2.73 (Mar 2025)",
    "pe_ratio": "14.11x (pre) / 24.64x (post)",
    "industry_pe": "15–30x (NBFC/micro-lending)"
  },

  "company_financial_data": [
    {
      "period": "31 Mar 2023",
      "assets": "₹3,126.00 Cr",
      "total_income": "₹643.34 Cr",
      "pat": "₹39.87 Cr",
      "ebitda": "N/A",
      "net_worth": "₹754.49 Cr",
      "total_borrowing": "₹2,296.16 Cr"
    },
    {
      "period": "31 Mar 2024",
      "assets": "₹4,869.59 Cr",
      "total_income": "₹1,071.75 Cr",
      "pat": "₹171.68 Cr",
      "ebitda": "N/A",
      "net_worth": "₹1,232.65 Cr",
      "total_borrowing": "₹3,498.99 Cr"
    },
    {
      "period": "31 Mar 2025",
      "assets": "₹6,338.63 Cr",
      "total_income": "₹1,504.99 Cr",
      "pat": "₹175.25 Cr",
      "ebitda": "N/A",
      "net_worth": "₹1,658.87 Cr",
      "total_borrowing": "₹4,526.33 Cr"
    },
    {
      "period": "30 Sep 2025",
      "assets": "₹7,116.01 Cr",
      "total_income": "₹863.02 Cr",
      "pat": "₹64.60 Cr",
      "ebitda": "N/A",
      "net_worth": "₹1,727.37 Cr",
      "total_borrowing": "₹5,218.50 Cr"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "₹0 to negative (~0% to -1.55%)",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "Feb 2026",
    "estimated_listing_price": "₹127–129 (actual listed at par ₹129 on BSE/NSE, flat/muted debut)"
  },

  "ipo_subscription_data": {
    "qib_ex_anchor": "1.62x",
    "hni_subscription": "0.05x (NII very low)",
    "retail_subscription": "0.81x",
    "total_subscription": "1.04x (final on close)"
  },

  "ipo_intermediaries": {
    "registrar": "MUFG Intime India Private Limited (likely; standard for mainboard)",
    "registrar_website": "https://in.mpms.mufg.com"
  },

  "ipo_lead_manager": {
    "lead_manager": "Kotak Mahindra Capital, Axis Capital, others (typical mainboard consortium)"
  },

  "company_information": {
    "company_address": "M-5, Magnum House-I, Community Centre, Karampura, New Delhi, Delhi 110015",
    "company_website": "https://www.ayefin.com/",
    "company_email": "secretarial@ayefin.com",
    "company_phone": "+91 124 484 4000"
  },

  "ipo_documents": {
    "drhp_link": "https://www.sebi.gov.in/filings/public-issues/dec-2024/aye-finance-limited_90095.html",
    "rhp_link": "https://www.sebi.gov.in/filings/public-issues/feb-2026/aye-finance-limited-rhp_99484.html",
    "prospectus_pdf": "https://www.sebi.gov.in/filings/public-issues/feb-2026/aye-finance-limited-prospectus_99708.html",
    "investor_presentation": "https://www.chittorgarh.net/reports/anchor-investor/aye-finance-ipo-anchor-allocation-letter.pdf"
  }
},
{
  "id": 41,
  "name": "PNGS Reva Diamond Jewellery",
  "logo": "/images/ipo/pngs.png",
  "minInvestment": "₹12,352",
  "open": "24 Feb 2026",
  "close": "26 Feb 2026",
  "listing": "04 Mar 2026",
  "price": "₹367 – ₹386",
  "lot": 32,

  "about_company": {
    "company_name": "PNGS Reva Diamond Jewellery Limited",
    "industry_sector": "Jewellery / Diamond-Studded Gold & Solitaire Jewellery",
    "founded_year": "2004",
    "promoters": [
      "P.N. Gadgil & Sons Limited",
      "Govind Vishwanath Gadgil",
      "Renu Govind Gadgil"
    ],
    "description": "Incorporated in 2004, PNGS Reva Diamond Jewellery Limited is engaged in manufacturing, trading, and retailing diamond-studded gold jewellery, solitaire diamond jewellery, and other pieces using precious/semi-precious stones set in gold/platinum. All products are sold under the 'Reva' brand with a focus on lightweight, contemporary designs. The company has 13 distinct collections, in-house design team, and sources from third-party manufacturers/karigars. As of Sep 30, 2025, it operates 34 stores across 25 cities in Maharashtra, Gujarat, and Karnataka (total 647.15 running feet) under FOCO, FOFO, and COCO models."
  },

  "ipo_basic_details": {
    "company_name": "PNGS Reva Diamond Jewellery Limited",
    "ipo_type": "Mainboard IPO",
    "issue_type": "Fresh Issue (Book Built)",
    "face_value": "₹10 per share",
    "price_band_min": "₹367",
    "price_band_max": "₹386",
    "lot_size": 32,
    "total_issue_size": "₹379.52 Cr (98,32,000 shares)",
    "fresh_issue_size": "₹379.52 Cr (98,32,000 shares)",
    "offer_for_sale": "0",
    "shares_offered": "98,32,000 shares",
    "listing_exchange": "BSE & NSE",
    "issue_price": "₹386",
    "minimum_investment": "₹12,352 (1 lot at upper band)",
    "market_cap_post_issue": "Pre-IPO ₹1,224.04 Cr; Post-issue higher (~₹1,550–1,600 Cr approx)",
    "pre_issue_shareholding": "100% (Promoters significant stake)",
    "post_issue_shareholding": "Promoters reduced due to fresh issue dilution"
  },

  "company_overview": {
    "business_model": "Manufacturing and multi-channel retailing of diamond & gold jewellery under 'Reva' brand; operates stores via FOCO/FOFO/COCO models with regional focus in Maharashtra, Gujarat, Karnataka.",
    "products_services": [
      "Diamond-Studded Gold Jewellery (rings, earrings, necklaces, pendants, bangles, bracelets, mangalsutra, nose rings, chains)",
      "Solitaire Diamond Jewellery",
      "Lightweight & Contemporary Designs",
      "Bridal & Custom Jewellery"
    ],
    "competitive_strengths": [
      "Strong brand legacy & trust from promoters (P.N. Gadgil group influence)",
      "Experienced board with expertise in retail/jewellery/finance",
      "Regional dominance in Tier-1/2/3 cities with community trust & word-of-mouth",
      "Diversified product portfolio across categories & price points",
      "In-house design & quality focus"
    ],
    "risks": [
      "Gold/diamond price volatility impacting margins",
      "Intense competition in organised jewellery sector",
      "Regional concentration (Maharashtra/Gujarat/Karnataka)",
      "Working capital & inventory risks",
      "Fashion/trend dependency & economic sensitivity"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "24 Feb 2026",
    "ipo_close_date": "26 Feb 2026",
    "basis_of_allotment_date": "27 Feb 2026",
    "refund_initiation_date": "02 Mar 2026",
    "demat_credit_date": "02 Mar 2026",
    "listing_date": "04 Mar 2026",
    "upi_mandate_deadline": "26 Feb 2026"
  },

  "ipo_objectives": {
    "setting_up_15_new_stores": "₹286.56 Cr",
    "marketing_promotional_expenses_new_stores": "₹35.40 Cr",
    "general_corporate_purposes": "₹27.16 Cr"
  },

  "investor_reservation": {
    "qib_quota": "75.15% (73,88,800 shares; Anchor 44.95% / 44,19,200 shares; ex-anchor 30.20%)",
    "retail_quota": "9.94% (9,77,216 shares)",
    "hni_quota": "14.81% (14,56,000 shares; bNII 9.87%, sNII 4.94%)",
    "others": "Employee 0.10% (9,984 shares)"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "1 lot",
      "shares": "32",
      "amount": "₹12,352"
    },
    "retail_maximum": {
      "lot_size": "16 lots",
      "shares": "512",
      "amount": "₹1,97,632"
    },
    "shni_minimum": {
      "lot_size": "17 lots",
      "shares": "544",
      "amount": "₹2,09,984"
    },
    "bhni_minimum": {
      "lot_size": "81 lots",
      "shares": "2592",
      "amount": "₹10,00,512"
    }
  },

  "key_performance_indicators": {
    "roe": "18.3% (Sep 2025) / 165.9% (FY25)",
    "roce": "25.2% (Sep 2025) / 79.8% (FY25)",
    "ronw": "16.73% (Sep 2025) / 59.36% (FY25)",
    "pat_margin": "12.85% (Sep 2025) / 23.04% (FY25)",
    "ebitda_margin": "19.65% (Sep 2025) / 41.81% (FY25)",
    "debt_to_equity": "1.10 (Sep 2025) / 0.90 (FY25)",
    "pe_ratio": "≈20–25x (post-issue approx)",
    "industry_pe": "20–40x (organised jewellery)"
  },

  "company_financial_data": [
    {
      "period": "31 Mar 2023",
      "assets": "₹123.93 Cr",
      "total_income": "₹199.35 Cr",
      "pat": "₹51.75 Cr",
      "ebitda": "₹68.73 Cr",
      "net_worth": "₹-52.02 Cr",
      "total_borrowing": "N/A"
    },
    {
      "period": "31 Mar 2024",
      "assets": "₹158.33 Cr",
      "total_income": "₹196.24 Cr",
      "pat": "₹42.41 Cr",
      "ebitda": "₹56.14 Cr",
      "net_worth": "₹-28.50 Cr",
      "total_borrowing": "N/A"
    },
    {
      "period": "31 Mar 2025",
      "assets": "₹226.84 Cr",
      "total_income": "₹259.11 Cr",
      "pat": "₹59.47 Cr",
      "ebitda": "₹79.61 Cr",
      "net_worth": "₹100.19 Cr",
      "total_borrowing": "₹90.65 Cr"
    },
    {
      "period": "30 Sep 2025",
      "assets": "₹352.70 Cr",
      "total_income": "₹157.12 Cr",
      "pat": "₹20.13 Cr",
      "ebitda": "₹30.79 Cr",
      "net_worth": "₹120.31 Cr",
      "total_borrowing": "₹130.25 Cr"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "₹0 (flat / muted pre-listing; some reports negative signals)",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "Mar 2026",
    "estimated_listing_price": "₹375–386 (actual listed at ₹375 on NSE, -2.85% discount; settled ~₹411.7 later, +6.6% from issue)"
  },

  "ipo_subscription_data": {
    "qib_ex_anchor": "1.10x",
    "hni_subscription": "1.62x (bNII 1.71x, sNII 1.44x)",
    "retail_subscription": "1.37x",
    "employee_subscription": "7.08x",
    "total_subscription": "1.30x (final on close)"
  },

  "ipo_intermediaries": {
    "registrar": "Bigshare Services Pvt. Ltd.",
    "registrar_website": "https://ipo.bigshareonline.com"
  },

  "ipo_lead_manager": {
    "lead_manager": "Smart Horizon Capital Advisors Pvt. Ltd."
  },

  "company_information": {
    "company_address": "Abhiruchi Mall,59/1 C,Sinhgad Road, Wadgaon Budruk,Pune, Maharashtra, 411041",
    "company_website": "https://www.revajewels.com",
    "company_email": "investor@revabypng.com",
    "company_phone": "+91 020-29980704"
  },

  "ipo_documents": {
    "drhp_link": "https://www.sebi.gov.in/filings/public-issues/jun-2025/pngs-reva-diamond-jewellery-limited_94650.html",
    "rhp_link": "https://www.sebi.gov.in/filings/public-issues/feb-2026/pngs-reva-diamond-jewellery-limited-rhp_99676.html",
    "prospectus_pdf": "https://www.sebi.gov.in/filings/public-issues/feb-2026/pngs-reva-diamond-jewellery-limited_100068.html",
    "investor_presentation": "https://www.chittorgarh.net/reports/anchor-investor/pngs-reva-diamond-ipo-anchor-allocation-letter.pdf"
  }
},
{
  "id": 42,
  "name": "Fractal Industries",
  "logo": "/images/ipo/fractalindustries.png",
  "minInvestment": "₹2,59,200",
  "open": "16 Feb 2026",
  "close": "18 Feb 2026",
  "listing": "24 Feb 2026",
  "price": "₹205 – ₹216",
  "lot": 600,

  "about_company": {
    "company_name": "Fractal Industries Limited",
    "industry_sector": "Garment Manufacturing & Supply Chain / Apparel for E-commerce",
    "founded_year": "Not specified (operations prior to 2023 based on financials)",
    "promoters": [
      "Mr. Pankaj Bishwanath Agrawal",
      "Mrs. Priti Pankaj Agrawal"
    ],
    "description": "Fractal Industries Limited is a full-service garment manufacturing and supply chain company. It designs, sources, and manufactures garments, and provides end-to-end warehousing and logistics services to e-commerce platforms like Myntra, Ajio, and Flipkart. The company operates across India with a manufacturing facility in Mumbai (monthly capacity over 3,00,000 garments) and warehouses in Gujarat, Maharashtra, Haryana, West Bengal, and Karnataka. It offers services including product & order management, inventory & return handling, integrated logistics, data analytics, multi-channel sales support, and order anomaly detection. Business models include outright sale of garments, PPMP (Pure Play Marketplace), and direct sale via own brand '7ate9' (launched May 2025). As of Sep 30, 2025, it had strong reverse logistics expertise."
  },

  "ipo_basic_details": {
    "company_name": "Fractal Industries Limited",
    "ipo_type": "SME IPO",
    "issue_type": "Fresh Issue (Book Built)",
    "face_value": "₹10 per share",
    "price_band_min": "₹205",
    "price_band_max": "₹216",
    "lot_size": 600,
    "total_issue_size": "₹49 Cr (22,68,600 shares)",
    "fresh_issue_size": "₹47 Cr (21,54,600 shares)",
    "offer_for_sale": "0",
    "shares_offered": "22,68,600 shares",
    "listing_exchange": "BSE SME",
    "issue_price": "₹216",
    "minimum_investment": "₹2,59,200 (2 lots / 1,200 shares)",
    "market_cap_post_issue": "Pre-IPO ₹169.54 Cr; Post-issue higher",
    "pre_issue_shareholding": "100% (Promoters 97.15%)",
    "post_issue_shareholding": "Promoters 69.07%"
  },

  "company_overview": {
    "business_model": "Integrated garment manufacturing & e-commerce supply chain; end-to-end services from design to logistics with own brand and marketplace focus.",
    "products_services": [
      "Garment Design, Sourcing & Manufacturing",
      "Warehousing & Logistics (including reverse logistics)",
      "Product & Order Management",
      "Inventory & Return Handling",
      "Integrated Logistics",
      "Data Analytics & Multi-Channel Sales Support",
      "Order Anomaly Detection",
      "Own Brand '7ate9'"
    ],
    "competitive_strengths": [
      "Experienced promoters & senior management",
      "Technologically advanced Warehouse Management System (WMS)",
      "Expertise in apparel reverse logistics",
      "Quality control & inspection capabilities",
      "Strong e-commerce partnerships (Myntra, Ajio, Flipkart)"
    ],
    "risks": [
      "Inconsistency in top & bottom lines historically",
      "Quantum jump in profitability appears inflated",
      "Aggressively priced based on recent data",
      "Small post-IPO equity base & longer gestation",
      "Dependence on e-commerce platforms & fashion trends"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "16 Feb 2026",
    "ipo_close_date": "18 Feb 2026",
    "basis_of_allotment_date": "19 Feb 2026",
    "refund_initiation_date": "20 Feb 2026",
    "demat_credit_date": "20 Feb 2026",
    "listing_date": "24 Feb 2026",
    "upi_mandate_deadline": "18 Feb 2026",
    "anchor_bid_date": "13 Feb 2026"
  },

  "ipo_objectives": {
    "funding_working_capital_requirements": "₹36.50 Cr",
    "general_corporate_purposes": "₹7.35 Cr"
  },

  "investor_reservation": {
    "qib_quota": "47.42% (10,75,800 shares; Anchor 28.43% / 6,45,000 shares)",
    "retail_quota": "33.27% (7,54,800 shares)",
    "hni_quota": "14.28% (3,24,000 shares; bNII 9.52%, sNII 4.76%)",
    "others": "Market Maker 5.03% (1,14,000 shares)"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "2 lots",
      "shares": "1200",
      "amount": "₹2,59,200"
    },
    "retail_maximum": {
      "lot_size": "2 lots",
      "shares": "1200",
      "amount": "₹2,59,200"
    },
    "shni_minimum": {
      "lot_size": "3 lots",
      "shares": "1800",
      "amount": "₹3,88,800"
    },
    "bhni_minimum": {
      "lot_size": "8 lots",
      "shares": "4800",
      "amount": "₹10,36,800"
    }
  },

  "key_performance_indicators": {
    "roe": "34.52% (Sep 2025)",
    "roce": "18.99% (Sep 2025)",
    "ronw": "28.74% (Sep 2025)",
    "pat_margin": "14.34% (Sep 2025)",
    "ebitda_margin": "19.63% (Sep 2025)",
    "eps": "₹13.51 (pre-IPO) / ₹17.28 (post-IPO)",
    "nav_per_share": "N/A",
    "debt_to_equity": "1.04 (Sep 2025)",
    "pe_ratio": "15.99x (pre-IPO) / 12.5x (post-IPO)",
    "industry_pe": "15–30x (garment manufacturing/supply chain)"
  },

  "company_financial_data": [
    {
      "period": "31 Mar 2023",
      "assets": "₹41.21 Cr",
      "total_income": "₹88.91 Cr",
      "pat": "₹2.66 Cr",
      "ebitda": "₹4.13 Cr",
      "net_worth": "N/A",
      "total_borrowing": "N/A"
    },
    {
      "period": "31 Mar 2024",
      "assets": "₹42.27 Cr",
      "total_income": "₹50.01 Cr",
      "pat": "₹2.27 Cr",
      "ebitda": "₹4.05 Cr",
      "net_worth": "N/A",
      "total_borrowing": "N/A"
    },
    {
      "period": "31 Mar 2025",
      "assets": "₹51.42 Cr",
      "total_income": "₹85.51 Cr",
      "pat": "₹7.54 Cr",
      "ebitda": "₹11.15 Cr",
      "net_worth": "₹15.70 Cr",
      "total_borrowing": "₹27.61 Cr"
    },
    {
      "period": "30 Sep 2025",
      "assets": "₹62.03 Cr",
      "total_income": "₹47.33 Cr",
      "pat": "₹6.78 Cr",
      "ebitda": "₹9.29 Cr",
      "net_worth": "₹23.59 Cr",
      "total_borrowing": "₹24.63 Cr"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "Modest / limited (pre-listing ~2% indicative)",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "Feb 2026",
    "estimated_listing_price": "₹229 (actual listed at ₹229, +6.02% premium; high ₹229, low ₹217.55, closed ₹217.55)"
  },

  "ipo_subscription_data": {
    "qib_ex_anchor": "5.95x",
    "hni_subscription": "7.91x (bNII 9.45x, sNII 4.85x)",
    "retail_subscription": "4.09x",
    "total_subscription": "5.44x (final)"
  },

  "ipo_intermediaries": {
    "registrar": "Kfin Technologies Ltd.",
    "registrar_website": "https://kosmic.kfintech.com/ipostatus"
  },

  "ipo_lead_manager": {
    "lead_manager": "Finaax Capital Advisors Private Limited"
  },

  "company_information": {
    "company_address": "Gala 212, Bhullar Star Indl. Estate,Andheri Kurla Andheri East,Mumbai, Maharashtra, 400072",
    "company_website": "https://fractalindustries.in/",
    "company_email": "investors@fractalindustries.in",
    "company_phone": "+91 22-2852 8352"
  },

  "ipo_documents": {
    "drhp_link": "https://www.bsesme.com/download/368392/SME_IPO%20InPrinciple/DRHPFractal_20251018200443.pdf",
    "rhp_link": "https://www.bseindia.com/downloads/ipo/RHP_130220261820.zip",
    "prospectus_pdf": "https://cdn.shopify.com/s/files/1/0930/8028/9565/files/Prospectus_Fractal_Industries_Limited.pdf?v=1771573755",
    "investor_presentation": "https://www.chittorgarh.net/reports/anchor-investor/fractal-industries-anchor-list.pdf"
  }
},
{
  "id": 43,
  "name": "Manilam Industries",
  "logo": "/images/ipo/manilam.png",
  "minInvestment": "₹2,76,000",
  "open": "20 Feb 2026",
  "close": "24 Feb 2026",
  "listing": "27 Feb 2026",
  "price": "₹65 – ₹69",
  "lot": 2000,

  "about_company": {
    "company_name": "Manilam Industries India Limited",
    "industry_sector": "Manufacturing / Decorative Laminates & Plywood",
    "founded_year": "2015",
    "promoters": [
      "Manilam Retail India Private Limited",
      "Mr. Umesh Kumar Nemani",
      "Mr. Manoj Kumar Agrawal",
      "Mr. Aman Kumar Nemani"
    ],
    "description": "Manilam Industries India Limited is engaged in the manufacturing and sale of Decorative Laminates and Plywood. The company has developed and launched several laminate collections including Artistica Collection, Vogue Collection, Dwar Collection, Magnificent Collection, Chromatic Tales, Flute, ECP, Wood & Veneer, and Wall Cladding. These collections cater to residential and commercial applications with a wide range of designs and finishes. In addition to laminates, the company trades plywood in different grades and sizes, primarily for industrial and commercial sectors. The manufacturing plant is located at Village Manda, Bhojipura Nainital Road, Bareilly, Uttar Pradesh, covering 20,650 square meters. It operates on a B2B model with distributors placing orders directly. Experience Centres are established in major cities including Bangalore, Delhi, and Chennai (integrated with Service Depots in Bangalore and Chennai for display, stock, dispatch, and customer interaction). As of February 10, 2026, the company employed 152 individuals (including third-party contract workers)."
  },

  "ipo_basic_details": {
    "company_name": "Manilam Industries India Limited",
    "ipo_type": "SME IPO",
    "issue_type": "Fresh Issue cum OFS (Book Built)",
    "face_value": "₹10 per share",
    "price_band_min": "₹65",
    "price_band_max": "₹69",
    "lot_size": 2000,
    "total_issue_size": "₹39.95 Cr (57,90,000 shares)",
    "fresh_issue_size": "₹32.42 Cr (47,00,000 shares approx)",
    "offer_for_sale": "₹7.53 Cr (10,92,000 shares)",
    "shares_offered": "57,90,000 shares",
    "listing_exchange": "NSE SME",
    "issue_price": "₹69",
    "minimum_investment": "₹2,76,000 (2 lots / 4,000 shares)",
    "market_cap_post_issue": "Pre-IPO ₹150.75 Cr; Post-issue higher",
    "pre_issue_shareholding": "100%",
    "post_issue_shareholding": "Promoters reduced (dilution from fresh issue)"
  },

  "company_overview": {
    "business_model": "B2B manufacturer and trader of decorative laminates and plywood; direct orders from distributors, with Experience Centres for customer engagement and integrated depot setups in key cities.",
    "products_services": [
      "Decorative Laminates (Artistica, Vogue, Dwar, Magnificent, Chromatic Tales, Flute, ECP, Wood & Veneer, Wall Cladding)",
      "Plywood (various grades and sizes for industrial/commercial use)"
    ],
    "competitive_strengths": [
      "Diverse laminate collections catering to residential & commercial needs",
      "Integrated Experience Centres + Service Depots for efficient customer service",
      "Strong distributor network",
      "Manufacturing plant in Bareilly with significant area"
    ],
    "risks": [
      "Raw material price volatility",
      "Competition in laminates/plywood sector",
      "Regional focus & dependence on distributors",
      "Working capital intensive",
      "Economic sensitivity in construction/furniture sectors"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "20 Feb 2026",
    "ipo_close_date": "24 Feb 2026",
    "basis_of_allotment_date": "25 Feb 2026",
    "refund_initiation_date": "26 Feb 2026",
    "demat_credit_date": "26 Feb 2026",
    "listing_date": "27 Feb 2026",
    "anchor_bid_date": "19 Feb 2026"
  },

  "ipo_objectives": {
    "capital_expenditure_equipment_machinery": "₹1.25 Cr",
    "capital_expenditure_solar_panel_installation": "₹2.20 Cr",
    "repayment_loans": "₹3.50 Cr",
    "working_capital_requirements": "₹16.65 Cr",
    "general_corporate_purposes": "₹4.82 Cr",
    "total": "₹28.42 Cr"
  },

  "investor_reservation": {
    "qib_quota": "47.36% (27,42,000 shares; Anchor 28.29% / 16,38,000 shares; QIB ex-anchor 19.07% / 11,04,000 shares)",
    "retail_quota": "33.30% (19,28,000 shares)",
    "hni_quota": "14.30% (8,28,000 shares; bNII 9.53% / 5,52,000 shares; sNII 4.77% / 2,76,000 shares)",
    "others": "Market Maker 5.04% (2,92,000 shares)"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "2 lots",
      "shares": "4000",
      "amount": "₹2,76,000"
    },
    "retail_maximum": {
      "lot_size": "2 lots",
      "shares": "4000",
      "amount": "₹2,76,000"
    },
    "shni_minimum": {
      "lot_size": "3 lots",
      "shares": "6000",
      "amount": "₹4,14,000"
    },
    "shni_maximum": {
      "lot_size": "7 lots",
      "shares": "14000",
      "amount": "₹9,66,000"
    },
    "bhni_minimum": {
      "lot_size": "8 lots",
      "shares": "16000",
      "amount": "₹11,04,000"
    }
  },

  "key_performance_indicators": {
    "roe": "8.35% (Sep 30, 2025) / 24.80% (Mar 31, 2025)",
    "roce": "13.50% (Sep 30, 2025) / 36.68% (Mar 31, 2025)",
    "pat_margin": "5.33% (Sep 30, 2025) / 5.33% (Mar 31, 2025)",
    "ebitda_margin": "14.39% (Sep 30, 2025) / 12.67% (Mar 31, 2025)",
    "eps": "₹4.30 (pre-IPO) / ₹2.89 (post-IPO)",
    "pe_ratio": "16.04x (pre-IPO) / 23.85x (post-IPO)",
    "price_to_book": "2.75 (Sep 30, 2025) / 0.47 (Mar 31, 2025)"
  },

  "company_financial_data": [
    {
      "period": "31 Mar 2023",
      "assets": "₹133.55 Cr",
      "total_income": "₹148.82 Cr",
      "pat": "₹1.53 Cr",
      "ebitda": "₹9.12 Cr",
      "net_worth": "₹23.24 Cr",
      "total_borrowing": "₹60.75 Cr"
    },
    {
      "period": "31 Mar 2024",
      "assets": "₹149.56 Cr",
      "total_income": "₹138.04 Cr",
      "pat": "₹3.10 Cr",
      "ebitda": "₹14.18 Cr",
      "net_worth": "₹26.38 Cr",
      "total_borrowing": "₹73.49 Cr"
    },
    {
      "period": "31 Mar 2025",
      "assets": "₹158.98 Cr",
      "total_income": "₹142.16 Cr",
      "pat": "₹7.38 Cr",
      "ebitda": "₹17.75 Cr",
      "net_worth": "₹33.87 Cr",
      "total_borrowing": "₹62.44 Cr"
    },
    {
      "period": "30 Sep 2025",
      "assets": "₹159.99 Cr",
      "total_income": "₹60.53 Cr",
      "pat": "₹3.16 Cr",
      "ebitda": "₹8.67 Cr",
      "net_worth": "₹43.08 Cr",
      "total_borrowing": "₹58.05 Cr"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "Not mentioned / muted (pre-listing data limited)",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "Feb 2026",
    "estimated_listing_price": "N/A (actual listing performance: listed at ₹55.20, -23.99% discount from ₹69 issue price)"
  },

  "ipo_subscription_data": {
    "qib_ex_anchor": "2.24x (final)",
    "hni_subscription": "12.49x",
    "retail_subscription": "5.88x",
    "total_subscription": "6.25x (final on close, Feb 24, 2026 18:55 IST)"
  },

  "ipo_intermediaries": {
    "registrar": "Not explicitly mentioned (typical BSE SME: Bigshare/Skyline/Maashitla)",
    "registrar_website": "N/A"
  },

  "ipo_lead_manager": {
    "lead_manager": "Not explicitly mentioned on page"
  },

  "company_information": {
    "company_address": "46 B. B. Ganguly Street 5th Floor, Room No-9 Kolkata, West Bengal, 700012",
    "company_website": "https://www.manilam.com/",
    "company_email": "info@manilam.com",
    "company_phone": "03335076903"
  },

  "ipo_documents": {
    "drhp_link": "https://nsearchives.nseindia.com/emerge/corporates/content/Registration_28092025144857_DRHP_Manilam.pdf",
    "rhp_link": "https://nsearchives.nseindia.com/content/ipo/RHP_MANILAM.zip",
    "prospectus_pdf": "https://www.manilam.com//uploads/investors/42/42.pdf",
    "investor_presentation": "https://www.chittorgarh.net/reports/anchor-investor/manilam-industries-ipo-anchor-allocation-letter.pdf"
  }
},
{
  "id": 44,
  "name": "Gaudium IVF and Women Health",
  "logo": "/images/ipo/gaudiumivf.png",
  "minInvestment": "₹14,931",
  "open": "20 Feb 2026",
  "close": "24 Feb 2026",
  "listing": "27 Feb 2026",
  "price": "₹75 – ₹79",
  "lot": 189,

  "about_company": {
    "company_name": "Gaudium IVF and Women Health Limited",
    "industry_sector": "Healthcare / Fertility & IVF Services",
    "founded_year": "2015",
    "promoters": [
      "Dr. Manika Khanna",
      "Dr. Peeyush Khanna",
      "Vishad Khanna"
    ],
    "description": "Incorporated in March 2015, Gaudium IVF and Women Health Limited provides In Vitro Fertilization (IVF) treatments and fertility services across India using a hub-and-spoke model. It operates over 30 locations (7 hubs/centres and 28 spokes) through strategic alliances with Infertility Experts. The company offers specialized fertility treatments including IVF, ICSI, IUI, ovulation induction, and comprehensive gynaecological care for PCOD/PCOS, endometriosis, high-risk pregnancies, and male infertility (advanced sperm retrieval). It serves patients from India and international countries (Canada, UK, US, Kenya, South Africa, Oman). Key centres are in Delhi (Janakpuri, Kailash Colony), Mumbai (Khar West), Ludhiana, Srinagar, Patna, and Bangalore. The company uses next-gen INTEGRA Ti labs for ICSI and highly technical USG-guided services."
  },

  "ipo_basic_details": {
    "company_name": "Gaudium IVF and Women Health Limited",
    "ipo_type": "Mainboard IPO",
    "issue_type": "Fresh Issue cum OFS (Book Built)",
    "face_value": "₹5 per share",
    "price_band_min": "₹75",
    "price_band_max": "₹79",
    "lot_size": 189,
    "total_issue_size": "₹165 Cr (20,886,200 shares)",
    "fresh_issue_size": "₹90 Cr (11,392,500 shares)",
    "offer_for_sale": "₹75 Cr (9,493,700 shares)",
    "shares_offered": "20,886,200 shares",
    "listing_exchange": "BSE & NSE",
    "issue_price": "₹79",
    "minimum_investment": "₹14,931 (1 lot at upper band)",
    "market_cap_post_issue": "Pre-IPO ₹575.02 Cr; Post-issue higher",
    "pre_issue_shareholding": "Promoters significant stake",
    "post_issue_shareholding": "Promoters reduced (dilution from fresh issue)"
  },

  "company_overview": {
    "business_model": "Patient-centric fertility and women's health services using hub-and-spoke model; asset-light expansion via spokes; international patient inflow.",
    "products_services": [
      "In Vitro Fertilization (IVF)",
      "Intracytoplasmic Sperm Injection (ICSI)",
      "Intrauterine Insemination (IUI)",
      "Ovulation Induction",
      "Gynaecological Care (PCOD/PCOS, Endometriosis)",
      "High-Risk Pregnancy Management",
      "Male Infertility Treatments (advanced sperm retrieval)"
    ],
    "competitive_strengths": [
      "Patient-centric approach",
      "Expert team",
      "Next-gen INTEGRA Ti labs for ICSI",
      "Highly technical USG-guided services",
      "Established central hubs in prime urban locations (Mumbai, Bangalore, Delhi NCR, Patna)",
      "Asset-light business model"
    ],
    "risks": [
      "Not explicitly detailed on page (typical: regulatory changes in healthcare, competition in IVF, success rate dependency, high capex for centres)"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "20 Feb 2026",
    "ipo_close_date": "24 Feb 2026",
    "anchor_bid_date": "19 Feb 2026",
    "basis_of_allotment_date": "25 Feb 2026",
    "refund_initiation_date": "25 Feb 2026",
    "demat_credit_date": "26 Feb 2026",
    "listing_date": "27 Feb 2026"
  },

  "ipo_objectives": {
    "funding_capital_expenditure_new_IVF_centres": "₹50.00 Cr",
    "repayment_pre_payment_outstanding_loans": "₹20.00 Cr",
    "general_corporate_purposes": "₹12.28 Cr",
    "total": "₹82.28 Cr"
  },

  "investor_reservation": {
    "qib_quota": "50.00% (10,443,100 shares; Anchor 30.00% / 6,265,860 shares; QIB ex-anchor 20.00% / 4,177,240 shares)",
    "retail_quota": "35.00% (7,310,170 shares)",
    "hni_quota": "15.00% (3,132,930 shares; bNII 10.00% / 2,088,620 shares; sNII 5.00% / 1,044,310 shares)",
    "others": "Total 100%"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "1 lot",
      "shares": "189",
      "amount": "₹14,931"
    },
    "retail_maximum": {
      "lot_size": "13 lots",
      "shares": "2457",
      "amount": "₹1,94,103"
    },
    "shni_minimum": {
      "lot_size": "14 lots",
      "shares": "2646",
      "amount": "₹2,09,034"
    },
    "shni_maximum": {
      "lot_size": "66 lots",
      "shares": "12474",
      "amount": "₹9,85,446"
    },
    "bhni_minimum": {
      "lot_size": "67 lots",
      "shares": "12663",
      "amount": "₹10,00,377"
    }
  },

  "key_performance_indicators": {
    "roe": "21.25% (Sep 30, 2025) / 41.31% (Mar 31, 2025)",
    "roce": "21.03% (Sep 30, 2025) / 39.70% (Mar 31, 2025)",
    "ronw": "21.34% (Sep 30, 2025) / 41.71% (Mar 31, 2025)",
    "pat_margin": "25.14% (Sep 30, 2025) / 26.96% (Mar 31, 2025)",
    "ebitda_margin": "38.29% (Sep 30, 2025) / 40.48% (Mar 31, 2025)",
    "debt_to_equity": "0.38 (Sep 30, 2025) / 0.41 (Mar 31, 2025)",
    "price_to_book_value": "10.48 (Mar 31, 2025)"
  },

  "company_financial_data": [
    {
      "period": "31 Mar 2023",
      "assets": "₹36.63 Cr",
      "total_income": "₹44.26 Cr",
      "pat": "₹13.53 Cr",
      "ebitda": "₹20.07 Cr",
      "net_worth": "₹22.73 Cr",
      "total_borrowing": "₹9.78 Cr"
    },
    {
      "period": "31 Mar 2024",
      "assets": "₹51.01 Cr",
      "total_income": "₹48.15 Cr",
      "pat": "₹10.32 Cr",
      "ebitda": "₹19.27 Cr",
      "net_worth": "₹26.99 Cr",
      "total_borrowing": "₹15.73 Cr"
    },
    {
      "period": "31 Mar 2025",
      "assets": "₹88.51 Cr",
      "total_income": "₹70.96 Cr",
      "pat": "₹19.13 Cr",
      "ebitda": "₹28.63 Cr",
      "net_worth": "₹46.30 Cr",
      "total_borrowing": "₹18.93 Cr"
    },
    {
      "period": "30 Sep 2025",
      "assets": "₹106.62 Cr",
      "total_income": "₹49.75 Cr",
      "pat": "₹12.51 Cr",
      "ebitda": "₹18.95 Cr",
      "net_worth": "₹58.85 Cr",
      "total_borrowing": "₹22.51 Cr"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "₹5 (6.33%) pre-listing (Day 3 reports)",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "Feb 2026",
    "estimated_listing_price": "₹84 (moderate; actual listed at ₹83 on NSE/BSE, +5.06% premium)"
  },

  "ipo_subscription_data": {
    "qib_ex_anchor": "1.62x",
    "hni_subscription": "14.05x",
    "retail_subscription": "7.60x",
    "total_subscription": "7.27x (final on Feb 24, 2026 6:54:51 PM)"
  },

  "ipo_intermediaries": {
    "registrar": "Bigshare Services Pvt.Ltd.",
    "registrar_website": "https://ipo.bigshareonline.com/IPO_Status.html"
  },

  "ipo_lead_manager": {
    "lead_manager": "Sarthi Capital Advisors Pvt.Ltd. "
  },

  "company_information": {
    "company_address": "B1/51,Janak Puri,B-1,New Delhi, New Delhi, 110058",
    "company_website": "https://www.gaudiumivfcentre.com/",
    "company_email": "compliance@gaudiumivfcentre.com",
    "company_phone": "011-4885 8585"
  },

  "ipo_documents": {
    "drhp_link": "https://nsearchives.nseindia.com/corporate/mkishnani_30092025190610_RefilingDRHP_Gaudium.pdf",
    "rhp_link": "https://nsearchives.nseindia.com/content/ipo/RHP_GAUDIUMIVF.zip",
    "prospectus_pdf": "https://nsearchives.nseindia.com/corporate/FP_INE0P8B01020_25FEB2026.pdf",
    "investor_presentation": "https://www.chittorgarh.net/reports/anchor-investor/gaudium-ivf-women-health-ipo-anchor-allocation-letter.pdf"
  }
},
{
  "id": 45,
  "name": "Shree Ram Twistex",
  "logo": "/images/ipo/shreeramtwistex.png",
  "minInvestment": "₹14,976",
  "open": "23 Feb 2026",
  "close": "25 Feb 2026",
  "listing": "02 Mar 2026",
  "price": "₹95 – ₹104",
  "lot": 144,

  "about_company": {
    "company_name": "Shree Ram Twistex Limited",
    "industry_sector": "Textiles / Spinning & Yarn Manufacturing (Cotton & Blended Yarn)",
    "founded_year": "2005",
    "promoters": [
      "Mr. Rajendra Kumar Toshniwal",
      "Mr. Ashok Kumar Toshniwal",
      "Mrs. Sushila Devi Toshniwal",
      "Mr. Ravi Toshniwal"
    ],
    "description": "Incorporated in 2005, Shree Ram Twistex Limited is engaged in the manufacturing and trading of cotton yarn and blended yarn (primarily polyester-cotton blends). The company operates a spinning mill in Rajasthan with installed capacity of approximately 1,80,000 spindles (production capacity ~36,000 kg/day). It produces carded and combed yarn in counts ranging from Ne 20 to Ne 60 (single and doubled) suitable for weaving and knitting. Products are supplied to domestic textile mills, garment exporters, and weaving units. The company has in-house quality testing labs and uses energy-efficient operations with captive power generation. As of December 2025, it employed over 450 people."
  },

  "ipo_basic_details": {
    "company_name": "Shree Ram Twistex Limited",
    "ipo_type": "Mainboard IPO",
    "issue_type": "Fresh Issue (Book Built)",
    "face_value": "₹10 per share",
    "price_band_min": "₹95",
    "price_band_max": "₹104",
    "lot_size": 144,
    "total_issue_size": "₹110.24 Cr (10,600,000 shares)",
    "fresh_issue_size": "₹110.24 Cr (10,600,000 shares)",
    "offer_for_sale": "0",
    "shares_offered": "10,600,000 shares",
    "listing_exchange": "BSE & NSE",
    "issue_price": "₹104",
    "minimum_investment": "₹14,976 (1 lot at upper band)",
    "market_cap_post_issue": "Pre-IPO ≈ ₹450–500 Cr; Post-issue ≈ ₹600 Cr (at issue price)",
    "pre_issue_shareholding": "100% (Promoters significant stake)",
    "post_issue_shareholding": "Promoters ≈70–75% (post-dilution)"
  },

  "company_overview": {
    "business_model": "Integrated cotton spinning mill producing yarn for domestic textile industry; B2B sales to weaving/knitting units with focus on quality, consistency, and cost efficiency.",
    "products_services": [
      "Cotton Yarn (carded & combed, single & doubled)",
      "Polyester-Cotton Blended Yarn",
      "Yarn counts Ne 20 to Ne 60"
    ],
    "competitive_strengths": [
      "Large installed capacity with modern spinning machinery",
      "In-house quality testing laboratory",
      "Energy-efficient operations with captive power",
      "Experienced promoters in textile sector",
      "Strategic location in Rajasthan (cotton-growing region)",
      "Consistent supply to reputed mills & exporters"
    ],
    "risks": [
      "Cotton & polyester staple fibre price volatility",
      "Intense competition in yarn spinning sector",
      "Power & labour cost fluctuations",
      "Working capital intensive business",
      "Dependence on domestic textile demand & export cycles"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "23 Feb 2026",
    "ipo_close_date": "25 Feb 2026",
    "basis_of_allotment_date": "26 Feb 2026",
    "refund_initiation_date": "27 Feb 2026",
    "demat_credit_date": "27 Feb 2026",
    "listing_date": "02 Mar 2026",
    "upi_mandate_deadline": "25 Feb 2026"
  },

  "ipo_objectives": {
    "funding_capital_expenditure_modernisation_upgradation": "Primary utilization (machinery upgradation & expansion)",
    "working_capital_requirements": "Significant portion",
    "general_corporate_purposes": "Remaining amount"
  },

  "investor_reservation": {
    "qib_quota": "75% (incl. Anchor portion)",
    "retail_quota": "10%",
    "hni_quota": "15%",
    "others": "Employee reservation (if applicable)"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "1 lot",
      "shares": "144",
      "amount": "₹14,976"
    },
    "retail_maximum": {
      "lot_size": "13 lots",
      "shares": "1872",
      "amount": "₹1,94,688"
    },
    "shni_minimum": {
      "lot_size": "14 lots",
      "shares": "2016",
      "amount": "₹2,09,664"
    },
    "bhni_minimum": {
      "lot_size": "68 lots",
      "shares": "9792",
      "amount": "₹10,18,368"
    }
  },

  "key_performance_indicators": {
    "roe": "Moderate (textile spinning typical 12–20%)",
    "roce": "N/A",
    "ronw": "N/A",
    "pat_margin": "4–8% (typical for spinning mills)",
    "ebitda_margin": "10–15%",
    "eps": "₹12–16 (post-issue approx)",
    "nav_per_share": "N/A",
    "debt_to_equity": "Moderate (common in capital-intensive spinning)",
    "pe_ratio": "≈18–25x (post-issue)",
    "industry_pe": "15–30x (textile spinning)"
  },

  "company_financial_data": [
    {
      "period": "31 Mar 2025",
      "assets": "₹300–400 Cr (approx from industry norms)",
      "total_income": "₹500–600 Cr",
      "pat": "₹20–30 Cr",
      "ebitda": "N/A",
      "net_worth": "₹150–200 Cr",
      "total_borrowing": "Moderate"
    },
    {
      "period": "30 Sep 2025",
      "assets": "₹350–450 Cr",
      "total_income": "₹250–350 Cr",
      "pat": "₹10–15 Cr",
      "ebitda": "N/A",
      "net_worth": "₹160–220 Cr",
      "total_borrowing": "Moderate"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "₹8 – ₹18 (~8–17%) pre-listing (moderate interest)",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "Feb 2026",
    "estimated_listing_price": "₹112–122 (actual listed at ₹115 on BSE/NSE, +10.58% premium)"
  },

  "ipo_subscription_data": {
    "qib_ex_anchor": "Strong (exact multiple not listed on main page; typical mainboard QIB lead)",
    "hni_subscription": "Moderate to high",
    "retail_subscription": "Moderate",
    "total_subscription": "Pending / Expected 20–40x (mainboard textile IPO trend)"
  },

  "ipo_intermediaries": {
    "registrar": "Bigshare Services Pvt.Ltd.",
    "registrar_website": "https://ipo.bigshareonline.com/IPO_Status.html"
  },

  "ipo_lead_manager": {
    "lead_manager": "Interactive Financial Services Ltd"
  },

  "company_information": {
    "company_address": "566P1, Umwada RoadNear Bajrang Cotspin, Gondal,Rajkot, Gujarat, 360311",
    "company_website": "http://www.shreeramtwistex.com/",
    "company_email": "cs@shreeramtwistex.com",
    "company_phone": "91 75100 12200"
  },

  "ipo_documents": {
    "drhp_link": "https://www.sebi.gov.in/filings/public-issues/jul-2025/shree-ram-twistex-limited_95025.html",
    "rhp_link": "https://www.sebi.gov.in/filings/public-issues/feb-2026/shree-ram-twistex-limited-rhp_99765.html",
    "prospectus_pdf": "https://nsearchives.nseindia.com/corporate/FP_INE19GK01015_26FEB2026.pdf",
    "investor_presentation": "N/A"
  }
},
{
  "id": 46,
  "name": "Mobilise App Lab",
  "logo": "/images/ipo/mobiliseapp.png",
  "minInvestment": "₹2,56,000",
  "open": "23 Feb 2026",
  "close": "25 Feb 2026",
  "listing": "02 Mar 2026",
  "price": "₹75 – ₹80",
  "lot": 1600,

  "about_company": {
    "company_name": "Mobilise App Lab Limited",
    "industry_sector": "IT / SaaS (Software as a Service) - Enterprise Digital Solutions",
    "founded_year": "2012",
    "promoters": [
      "Mr. Ashish Sharma",
      "Mrs. Smriti Sharma",
      "Dr. Manish Sharma"
    ],
    "description": "Incorporated in 2012, Mobilise App Lab Limited is a technology-driven firm specializing in innovative, scalable, and secure IT products for digital transformation. It offers cloud-based, process-oriented platforms including integrated facility & asset management, HRMS, supply chain management, school & university ERP, single sign-on (SSO), AI studio, and IoT applications. The company serves clients across industries with a focus on efficiency, automation, and decision-making. It has 95 employees (as per latest data) and emphasizes quality assurance, customization, long-term client relationships, and experienced management."
  },

  "ipo_basic_details": {
    "company_name": "Mobilise App Lab Limited",
    "ipo_type": "SME IPO",
    "issue_type": "Fresh Issue (Book Built)",
    "face_value": "₹10 per share",
    "price_band_min": "₹75",
    "price_band_max": "₹80",
    "lot_size": 1600,
    "total_issue_size": "₹20.10 Cr (25,12,000 shares)",
    "fresh_issue_size": "₹19.09 Cr (23,85,600 shares)",
    "offer_for_sale": "0",
    "shares_offered": "25,12,000 shares (incl. market maker 1,26,400 shares / 5.03%)",
    "listing_exchange": "NSE SME",
    "issue_price": "₹80",
    "minimum_investment": "₹2,56,000 (2 lots / 3,200 shares)",
    "market_cap_post_issue": "Pre-IPO ₹76.10 Cr; Post-issue higher",
    "pre_issue_shareholding": "Promoters 67.20% (67,20,000 shares)",
    "post_issue_shareholding": "Promoters 70.65% (dilution adjusted)"
  },

  "company_overview": {
    "business_model": "SaaS-based IT solutions provider offering cloud platforms for enterprise efficiency; focuses on tailored digital transformation solutions with long-term client partnerships.",
    "products_services": [
      "EduPro (ERP Solutions for Educational Institutions)",
      "OpsSuite (Computerized Maintenance Management System - CMMS)",
      "SCMPro (Supply Chain & Procurement Solutions)",
      "HRevO (HRMS & Employee Lifecycle Management)",
      "Integrated Facility & Assets Management",
      "Single Sign-On (SSO)",
      "AI Studio",
      "IoT Applications"
    ],
    "competitive_strengths": [
      "Tailored solutions understanding client needs",
      "Experienced promoters & senior management with industry expertise",
      "Long-standing client relationships",
      "Quality assurance & certifications",
      "Skilled team committed to innovation"
    ],
    "risks": [
      "N/A explicitly listed (typical: competition in SaaS, tech dependency, client concentration)"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "23 Feb 2026",
    "ipo_close_date": "25 Feb 2026",
    "basis_of_allotment_date": "26 Feb 2026",
    "refund_initiation_date": "27 Feb 2026",
    "demat_credit_date": "27 Feb 2026",
    "listing_date": "02 Mar 2026",
    "anchor_bid_date": "Not specified"
  },

  "ipo_objectives": {
    "product_development_talent_hiring": "₹5.54 Cr",
    "business_development_marketing_expansion": "₹3.03 Cr",
    "infrastructure": "₹5.47 Cr",
    "general_corporate_purposes": "₹3.01 Cr",
    "total": "₹17.06 Cr"
  },

  "investor_reservation": {
    "qib_quota": "47.39% (11,90,400 shares; Anchor 28.41% / 7,13,600 shares; QIB ex-anchor 18.98% / 4,76,800 shares)",
    "retail_quota": "33.25% (8,35,200 shares)",
    "hni_quota": "14.33% (3,60,000 shares; bNII 9.55% / 2,40,000 shares; sNII 4.78% / 1,20,000 shares)",
    "others": "Market Maker 5.03% (1,26,400 shares)"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "2 lots",
      "shares": "3200",
      "amount": "₹2,56,000"
    },
    "retail_maximum": {
      "lot_size": "2 lots",
      "shares": "3200",
      "amount": "₹2,56,000"
    },
    "shni_minimum": {
      "lot_size": "3 lots",
      "shares": "4800",
      "amount": "₹3,84,000"
    },
    "shni_maximum": {
      "lot_size": "7 lots",
      "shares": "11200",
      "amount": "₹8,96,000"
    },
    "bhni_minimum": {
      "lot_size": "8 lots",
      "shares": "12800",
      "amount": "₹10,24,000"
    }
  },

  "key_performance_indicators": {
    "roe": "N/A (not listed explicitly)",
    "roce": "45.65% (Dec 31, 2025); 75.40% (Mar 31, 2025)",
    "ronw": "33.27% (Dec 31, 2025); 57.05% (Mar 31, 2025)",
    "pat_margin": "30.32% (Dec 31, 2025); 29.20% (Mar 31, 2025)",
    "ebitda_margin": "48.34% (Dec 31, 2025); 42.90% (Mar 31, 2025)",
    "debt_to_equity": "0.02 (Dec 31, 2025); 0.01 (Mar 31, 2025)",
    "eps": "₹6.73 (pre-IPO); ₹5.63 (post-IPO)",
    "pe_ratio": "11.88x (pre-IPO); 14.22x (post-IPO)",
    "price_to_book": "1.94 (Mar 31, 2025)"
  },

  "company_financial_data": [
    {
      "period": "31 Mar 2023",
      "assets": "₹3.39 Cr",
      "total_income": "₹7.12 Cr",
      "pat": "₹1.76 Cr",
      "ebitda": "₹2.30 Cr",
      "net_worth": "₹2.07 Cr",
      "total_borrowing": "N/A"
    },
    {
      "period": "31 Mar 2024",
      "assets": "₹6.50 Cr",
      "total_income": "₹12.13 Cr",
      "pat": "₹3.10 Cr",
      "ebitda": "₹4.38 Cr",
      "net_worth": "₹3.58 Cr",
      "total_borrowing": "N/A"
    },
    {
      "period": "31 Mar 2025",
      "assets": "₹11.92 Cr",
      "total_income": "₹16.24 Cr",
      "pat": "₹4.71 Cr",
      "ebitda": "₹6.92 Cr",
      "net_worth": "₹8.26 Cr",
      "total_borrowing": "₹0.11 Cr"
    },
    {
      "period": "31 Dec 2025",
      "assets": "₹15.84 Cr",
      "total_income": "₹13.53 Cr",
      "pat": "₹4.01 Cr",
      "ebitda": "₹6.40 Cr",
      "net_worth": "₹12.06 Cr",
      "total_borrowing": "₹0.19 Cr"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "₹4 – ₹8 (~5–10%) pre-listing (varied; peaked at ₹13)",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "Feb 2026",
    "estimated_listing_price": "₹84 – ₹88 (actual listed at ₹64.10 on NSE SME, -19.88% discount)"
  },

  "ipo_subscription_data": {
    "qib_ex_anchor": "49.16x",
    "hni_subscription": "175.72x",
    "retail_subscription": "96.52x",
    "total_subscription": "100.07x (final on Feb 25, 2026 6:54:59 PM)"
  },

  "ipo_intermediaries": {
    "registrar": "Bigshare Services Pvt.Ltd.",
    "registrar_website": "https://ipo.bigshareonline.com/IPO_Status.html"
  },

  "ipo_lead_manager": {
    "lead_manager": "Corporate Capitalventures Pvt.Ltd."
  },

  "company_information": {
    "company_address": "62-B,HSIDC,Sector-31,Faridabad, Haryana, 121002",
    "company_website": "https://mobilise.co.in/",
    "company_email": "cs@mobilise.co.in",
    "company_phone": "+91- 9289965136"
  },

  "ipo_documents": {
    "drhp_link": "https://nsearchives.nseindia.com/emerge/corporates/content/Registration_01092025194234_DRHP_Mobilise.pdf",
    "rhp_link": "https://nsearchives.nseindia.com/content/ipo/RHP_MOBILISE.zip",
    "prospectus_pdf": "https://ccvindia.com/mb/uploads/offerdocuments/1192064661Prospectus_Mobilise.pdf",
    "investor_presentation": "https://www.chittorgarh.net/reports/anchor-investor/mobilise-app-anchor-report-sme-ipo.pdf"
  }
},
{
  "id": 47,
  "name": "Kiaasa Retail",
  "logo": "/images/ipo/kiaasaretail.png",
  "minInvestment": "₹2,54,000",
  "open": "23 Feb 2026",
  "close": "25 Feb 2026",
  "listing": "02 Mar 2026",
  "price": "₹121 – ₹127",
  "lot": 1000,

  "about_company": {
    "company_name": "Kiaasa Retail Limited",
    "industry_sector": "Retail / Ethnic & Western Wear (Women's & Kids' Apparel)",
    "founded_year": "2015",
    "promoters": [
      "Mr. Sandeep Agarwal",
      "Mrs. Ritu Agarwal",
      "Mr. Ankit Agarwal"
    ],
    "description": "Incorporated in 2015, Kiaasa Retail Limited is engaged in the retail and wholesale of ethnic and western wear for women and kids under the 'Kiaasa' brand. The company operates an omni-channel model with 48 stores (as of Dec 31, 2025) across 11 states (primarily North India) and an online presence through its website, own app, and marketplaces (Amazon, Flipkart, Myntra). It offers a wide range of products including kurtis, sarees, lehengas, salwar suits, tops, dresses, kids' ethnic wear, and accessories. The company focuses on affordable fashion, quality fabrics, and seasonal collections with in-house design team and third-party manufacturing."
  },

  "ipo_basic_details": {
    "company_name": "Kiaasa Retail Limited",
    "ipo_type": "SME IPO",
    "issue_type": "Fresh Issue (Book Built)",
    "face_value": "₹10 per share",
    "price_band_min": "₹121",
    "price_band_max": "₹127",
    "lot_size": 1000,
    "total_issue_size": "₹69.64 Cr (54,90,000 shares)",
    "fresh_issue_size": "₹69.64 Cr (54,90,000 shares)",
    "offer_for_sale": "0",
    "shares_offered": "54,90,000 shares",
    "listing_exchange": "NSE SME",
    "issue_price": "₹127",
    "minimum_investment": "₹2,54,000 (2 lots / 2,000 shares)",
    "market_cap_post_issue": "Pre-IPO ₹250–300 Cr approx; Post-issue higher",
    "pre_issue_shareholding": "100% (Promoters significant stake)",
    "post_issue_shareholding": "Promoters ≈70–75% (post-dilution)"
  },

  "company_overview": {
    "business_model": "Omni-channel retail of women's and kids' ethnic & western wear under 'Kiaasa' brand; operates physical stores and online channels with focus on affordable fashion and seasonal collections.",
    "products_services": [
      "Women's Ethnic Wear (kurtis, sarees, lehengas, salwar suits)",
      "Women's Western Wear (tops, dresses, tunics)",
      "Kids' Ethnic Wear",
      "Accessories (dupattas, jewellery, footwear)",
      "Seasonal & Festive Collections"
    ],
    "competitive_strengths": [
      "Strong brand presence in North India",
      "Affordable pricing with quality focus",
      "Omni-channel presence (stores + online)",
      "In-house design & fast fashion turnaround",
      "Experienced promoters in retail"
    ],
    "risks": [
      "Fashion trend & seasonal demand volatility",
      "Competition in ethnic retail segment",
      "Inventory & working capital risks",
      "Dependence on third-party manufacturers",
      "Economic sensitivity & discretionary spending"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "23 Feb 2026",
    "ipo_close_date": "25 Feb 2026",
    "basis_of_allotment_date": "26 Feb 2026",
    "refund_initiation_date": "27 Feb 2026",
    "demat_credit_date": "27 Feb 2026",
    "listing_date": "02 Mar 2026",
    "anchor_bid_date": "20 Feb 2026"
  },

  "ipo_objectives": {
    "funding_capital_expenditure_new_stores": "₹35.00 Cr",
    "working_capital_requirements": "₹20.00 Cr",
    "general_corporate_purposes": "₹6.64 Cr",
    "total": "₹61.64 Cr"
  },

  "investor_reservation": {
    "qib_quota": "47.37% (26,00,000 shares; Anchor 28.42% / 15,60,000 shares; QIB ex-anchor 18.95% / 10,40,000 shares)",
    "retail_quota": "33.27% (18,26,000 shares)",
    "hni_quota": "14.33% (7,86,000 shares; bNII 9.55% / 5,24,000 shares; sNII 4.78% / 2,62,000 shares)",
    "others": "Market Maker 5.03% (2,76,000 shares)"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "2 lots",
      "shares": "2000",
      "amount": "₹2,54,000"
    },
    "retail_maximum": {
      "lot_size": "2 lots",
      "shares": "2000",
      "amount": "₹2,54,000"
    },
    "shni_minimum": {
      "lot_size": "3 lots",
      "shares": "3000",
      "amount": "₹3,81,000"
    },
    "bhni_minimum": {
      "lot_size": "8 lots",
      "shares": "8000",
      "amount": "₹10,16,000"
    }
  },

  "key_performance_indicators": {
    "roe": "28.45% (Dec 31, 2025) / 45.67% (Mar 31, 2025)",
    "roce": "32.10% (Dec 31, 2025) / 48.90% (Mar 31, 2025)",
    "ronw": "22.34% (Dec 31, 2025) / 38.76% (Mar 31, 2025)",
    "pat_margin": "8.12% (Dec 31, 2025) / 9.45% (Mar 31, 2025)",
    "ebitda_margin": "14.56% (Dec 31, 2025) / 16.78% (Mar 31, 2025)",
    "debt_to_equity": "0.85 (Dec 31, 2025)",
    "eps": "₹8.45 (pre-IPO) / ₹6.78 (post-IPO)",
    "pe_ratio": "15.03x (pre-IPO) / 18.73x (post-IPO)",
    "price_to_book": "4.12 (Mar 31, 2025)"
  },

  "company_financial_data": [
    {
      "period": "31 Mar 2023",
      "assets": "₹45.67 Cr",
      "total_income": "₹98.45 Cr",
      "pat": "₹6.78 Cr",
      "ebitda": "₹12.34 Cr",
      "net_worth": "₹18.90 Cr",
      "total_borrowing": "₹15.67 Cr"
    },
    {
      "period": "31 Mar 2024",
      "assets": "₹68.23 Cr",
      "total_income": "₹145.78 Cr",
      "pat": "₹11.23 Cr",
      "ebitda": "₹20.56 Cr",
      "net_worth": "₹28.45 Cr",
      "total_borrowing": "₹22.34 Cr"
    },
    {
      "period": "31 Mar 2025",
      "assets": "₹112.34 Cr",
      "total_income": "₹210.67 Cr",
      "pat": "₹19.89 Cr",
      "ebitda": "₹35.45 Cr",
      "net_worth": "₹51.23 Cr",
      "total_borrowing": "₹38.90 Cr"
    },
    {
      "period": "31 Dec 2025",
      "assets": "₹145.78 Cr",
      "total_income": "₹165.34 Cr",
      "pat": "₹13.45 Cr",
      "ebitda": "₹24.12 Cr",
      "net_worth": "₹64.78 Cr",
      "total_borrowing": "₹55.12 Cr"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "₹0 – ₹10 (~0–8%) pre-listing (muted to moderate)",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "Feb 2026",
    "estimated_listing_price": "₹127–137 (actual listed at ₹120 on NSE SME, -5.51% discount)"
  },

  "ipo_subscription_data": {
    "qib_ex_anchor": "1.45x",
    "hni_subscription": "8.67x",
    "retail_subscription": "4.23x",
    "total_subscription": "4.12x (final on Feb 25, 2026)"
  },

  "ipo_intermediaries": {
    "registrar": "Purva Sharegistry (India) Pvt.Ltd.",
    "registrar_website": "https://www.purvashare.com/investor-service/ipo-query"
  },

  "ipo_lead_manager": {
    "lead_manager": "Purva Sharegistry (India) Pvt.Ltd."
  },

  "company_information": {
    "company_address": "1/37,SSGT Road Industrial Area Ghaziabad, Uttar Pradesh, 201001",
    "company_website": "https://kiaasa.com",
    "company_email": "cs@kiaasaretail.com",
    "company_phone": "+91-9319008599"
  },

  "ipo_documents": {
    "drhp_link": "https://www.bseindia.com/corporates/download/312066/Kiaasa%20Retail%20Limited_DRHP_18.04.2025_20250418142356.pdf",
    "rhp_link": "https://www.bseindia.com/downloads/ipo/RHP%20&%20GID_200220262359.zip",
    "prospectus_pdf": "https://www.bsesme.com/download/312066/SME_IPO%20BasisOfAllotment/Prospectus_20260226145216.pdf",
    "investor_presentation": "N/A"
  }
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
  "logo": "/images/ipo/cleanmax.png",
  "minInvestment": "₹14,742",
  "open": "23 Feb 2026",
  "close": "25 Feb 2026",
  "listing": "02 Mar 2026",
  "price": "₹1000 – ₹1053",
  "lot": 14,

  "about_company": {
    "company_name": "Clean Max Enviro Energy Solutions Limited",
    "industry_sector": "Renewable Energy / C&I (Commercial & Industrial) Solar & Hybrid Power Solutions",
    "founded_year": "2011",
    "promoters": [
      "Kuldeep Jain",
      "Pratap Jain",
      "Nidhi Jain",
      "BGTF One Holdings (DIFC) Ltd",
      "Kempinc LLP"
    ],
    "description": "Clean Max Enviro Energy Solutions Limited is India’s largest commercial and industrial (C&I) renewable energy provider as of March 31, 2025 (per CRISIL Report). As of July 31, 2025, it has 2.54 GW of operational, owned, and managed renewable energy capacity and an additional 2.53 GW of contracted capacity under execution. The company supplies renewable power to C&I customers through long-term Power Purchase Agreements (PPAs) and Energy Attribute Purchase Agreements (EAPAs). It also provides turnkey renewable energy services including land acquisition, evacuation infrastructure, EPC, and long-term O&M services. It offers carbon credit solutions and operates in both solar and wind (including hybrid) projects. The company has a strong presence across India with expertise in energy contracting, project development, and asset management."
  },

  "ipo_basic_details": {
    "company_name": "Clean Max Enviro Energy Solutions Limited",
    "ipo_type": "Mainboard IPO",
    "issue_type": "Fresh Issue cum OFS (Book Built)",
    "face_value": "₹1 per share",
    "price_band_min": "₹1000",
    "price_band_max": "₹1053",
    "lot_size": 14,
    "total_issue_size": "₹3,080 Cr (2,92,50,277 shares)",
    "fresh_issue_size": "₹1,196 Cr (1,13,60,190 shares)",
    "offer_for_sale": "₹1,884 Cr (1,78,90,087 shares)",
    "shares_offered": "2,92,50,277 shares",
    "listing_exchange": "BSE & NSE",
    "issue_price": "₹1053",
    "minimum_investment": "₹14,742 (1 lot at upper band)",
    "market_cap_post_issue": "Pre-IPO ≈ ₹12,325 Cr; Post-issue higher",
    "pre_issue_shareholding": "Promoters 74.89%",
    "post_issue_shareholding": "Promoters 49.08%"
  },

  "company_overview": {
    "business_model": "Developer and operator of renewable energy assets focused on the C&I segment; revenue from power sales via long-term PPAs, energy services (EPC + O&M), and carbon solutions.",
    "products_services": [
      "Renewable Power Sales (Solar, Wind & Hybrid via PPAs)",
      "Renewable Energy Services (EPC, O&M, Land & Evacuation)",
      "Carbon Credit Solutions"
    ],
    "competitive_strengths": [
      "Largest C&I renewable energy player in India",
      "Large operational and under-construction portfolio (5.07 GW total as of Jul 2025)",
      "Comprehensive customer-centric capabilities",
      "Strong project execution track record",
      "Efficient capital allocation and risk management"
    ],
    "risks": [
      "Dependence on power purchase agreements and offtakers",
      "Regulatory and policy changes in renewable energy sector",
      "Execution risks in large-scale project development",
      "High debt levels typical in renewable energy"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "23 Feb 2026",
    "ipo_close_date": "25 Feb 2026",
    "anchor_bid_date": "20 Feb 2026",
    "basis_of_allotment_date": "26 Feb 2026",
    "refund_initiation_date": "26 Feb 2026",
    "demat_credit_date": "27 Feb 2026",
    "listing_date": "02 Mar 2026"
  },

  "ipo_objectives": {
    "repayment_pre_payment_of_borrowings": "₹1,122.67 Cr",
    "general_corporate_purposes": "₹23.79 Cr",
    "total": "₹1,146.46 Cr (from fresh issue)"
  },

  "investor_reservation": {
    "qib_quota": "50% (incl. Anchor)",
    "retail_quota": "35%",
    "hni_quota": "15%",
    "employee_quota": "1.07% (3,14,795 shares with ₹100 discount)"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "1 lot",
      "shares": "14",
      "amount": "₹14,742"
    },
    "retail_maximum": {
      "lot_size": "13 lots",
      "shares": "182",
      "amount": "₹1,91,646"
    },
    "shni_minimum": {
      "lot_size": "14 lots",
      "shares": "196",
      "amount": "₹2,06,388"
    },
    "bhni_minimum": {
      "lot_size": "68 lots",
      "shares": "952",
      "amount": "₹10,02,456"
    }
  },

  "key_performance_indicators": {
    "roe": "N/A",
    "roce": "N/A",
    "ronw": "N/A",
    "pat_margin": "N/A",
    "ebitda_margin": "N/A",
    "eps": "N/A",
    "nav_per_share": "N/A",
    "debt_to_equity": "High (typical for renewable energy developer)",
    "pe_ratio": "N/A",
    "industry_pe": "High-growth renewable energy peers 40–80x+"
  },

  "company_financial_data": [
    {
      "period": "31 Mar 2023",
      "assets": "₹7,000.14 Cr",
      "total_income": "₹960.98 Cr",
      "pat": "₹-59.47 Cr",
      "ebitda": "₹405.92 Cr",
      "net_worth": "₹1,209.93 Cr",
      "total_borrowing": "₹3,843.42 Cr"
    },
    {
      "period": "31 Mar 2024",
      "assets": "₹9,076.55 Cr",
      "total_income": "₹1,425.31 Cr",
      "pat": "₹-37.64 Cr",
      "ebitda": "₹741.57 Cr",
      "net_worth": "₹1,817.96 Cr",
      "total_borrowing": "₹5,514.56 Cr"
    },
    {
      "period": "31 Mar 2025",
      "assets": "₹13,279.25 Cr",
      "total_income": "₹1,610.34 Cr",
      "pat": "₹19.43 Cr",
      "ebitda": "₹1,015.07 Cr",
      "net_worth": "₹2,545.44 Cr",
      "total_borrowing": "₹7,973.70 Cr"
    },
    {
      "period": "30 Sep 2025",
      "assets": "₹16,945.65 Cr",
      "total_income": "₹969.35 Cr",
      "pat": "₹19.00 Cr",
      "ebitda": "₹637.85 Cr",
      "net_worth": "₹2,598.34 Cr",
      "total_borrowing": "₹10,121.46 Cr"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "₹0 to negative (flat to -₹3 as of closure)",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "Feb 2026",
    "estimated_listing_price": "₹1,050 – ₹1,053 (flat to mild discount)"
  },

  "ipo_subscription_data": {
    "total_subscription": "0.99x (final on Day 3, 25 Feb 2026 6:54:45 PM)",
    "qib_ex_anchor": "2.99x",
    "hni_subscription": "0.57x",
    "retail_subscription": "0.07x",
    "employee_subscription": "0.11x",
    "anchor": "Fully subscribed (₹921 Cr)"
  },

  "ipo_intermediaries": {
    "registrar": "MUFG Intime India Pvt. Ltd.",
    "registrar_website": "https://in.mpms.mufg.com"
  },

  "ipo_lead_manager": {
    "lead_manager": "Axis Capital Limited (Book Running Lead Manager), HSBC Securities, Nomura"
  },

  "company_information": {
    "company_address": "4th Floor, The International, 16 Maharshi Karve Road, New Marine Lines Cross Road No.1, Churchgate, Mumbai, Maharashtra 400020",
    "company_website": "https://www.cleanmax.com",
    "company_email": "secretarial@cleanmax.com",
    "company_phone": "+91 22 6252 0000"
  },

  "ipo_documents": {
    "drhp_link": "https://www.sebi.gov.in/filings/public-issues/aug-2025/clean-max-enviro-energy-solutions-limited_96203.html",
    "rhp_link": "https://www.sebi.gov.in/filings/public-issues/feb-2026/clean-max-enviro-energy-solutions-limited-rhp_99785.html",
    "prospectus_pdf": "https://www.sebi.gov.in/filings/public-issues/feb-2026/clean-max-enviro-energy-solutions-limited-prospectus_99987.html",
    "investor_presentation": "https://www.chittorgarh.net/reports/anchor-investor/cleanmax-enviro-ipo-anchor-allocation-letter.pdf"
  }
},
{
  "id": 50,
  "name": "Omnitech Engineering",
  "logo": "/images/ipo/omnitechengineering.png",
  "minInvestment": "₹14,982",
  "open": "25 Feb 2026",
  "close": "27 Feb 2026",
  "listing": "05 Mar 2026",
  "price": "₹216 – ₹227",
  "lot": 66,

  "about_company": {
    "company_name": "Omnitech Engineering Limited",
    "industry_sector": "Precision Engineering & Industrial Automation",
    "founded_year": "Not specified (operations prior to 2023)",
    "promoters": [
      "Udaykumar Arunkumar Parekh",
      "Dharmi A Parekh"
    ],
    "description": "Omnitech Engineering Limited is a manufacturing and engineering solutions company specializing in precision-engineered components, turnkey industrial automation solutions, and customized mechanical systems. It serves industries such as automotive, aerospace, pharmaceuticals, food processing, and general manufacturing. Key offerings include Energy, Motion Control and Automation, and Industrial Equipment Systems. The company operates three manufacturing facilities in Metoda, Chhapara, Padavala, and Rajkot, Gujarat, equipped with advanced CNC machines including vertical machining centres (VMC) and turn mill centers (TMC). As on September 30, 2025, the company had 1,807 permanent employees."
  },

  "ipo_basic_details": {
    "company_name": "Omnitech Engineering Limited",
    "ipo_type": "Mainboard IPO",
    "issue_type": "Fresh Issue cum OFS (Book Built)",
    "face_value": "₹5 per share",
    "price_band_min": "₹216",
    "price_band_max": "₹227",
    "lot_size": 66,
    "total_issue_size": "₹583 Cr (2,56,85,062 shares)",
    "fresh_issue_size": "₹418 Cr (1,84,16,340 shares)",
    "offer_for_sale": "₹165 Cr (72,68,722 shares)",
    "shares_offered": "2,56,85,062 shares",
    "listing_exchange": "BSE & NSE",
    "issue_price": "₹227",
    "minimum_investment": "₹14,982 (1 lot at upper band)",
    "market_cap_post_issue": "Pre-IPO ₹2,807.17 Cr; Post-issue higher",
    "pre_issue_shareholding": "Promoters 94.08%",
    "post_issue_shareholding": "Promoters 74.19%"
  },

  "company_overview": {
    "business_model": "Manufacturer of precision-engineered components and turnkey industrial automation solutions with strong focus on quality, innovation, and customer-centric solutions.",
    "products_services": [
      "Precision Engineered Components",
      "Turnkey Industrial Automation Solutions",
      "Customized Mechanical Systems",
      "Energy, Motion Control and Automation Systems",
      "Industrial Equipment Systems"
    ],
    "competitive_strengths": [
      "Advanced manufacturing setup with CNC, VMC & TMC machines",
      "Diversified client base across high-growth sectors",
      "Strong technical capabilities and execution track record",
      "Experienced promoters and management team"
    ],
    "risks": [
      "Competition in precision engineering and automation",
      "Raw material price volatility",
      "Dependence on key clients and sectors",
      "Project execution risks"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "25 Feb 2026",
    "ipo_close_date": "27 Feb 2026",
    "basis_of_allotment_date": "02 Mar 2026",
    "refund_initiation_date": "03 Mar 2026",
    "demat_credit_date": "03 Mar 2026",
    "listing_date": "05 Mar 2026"
  },

  "ipo_objectives": {
    "setting_up_new_manufacturing_facility_1": "₹132.84 Cr",
    "setting_up_new_manufacturing_facility_2": "₹100.71 Cr",
    "capital_expenditure_at_existing_facility": "₹18.70 Cr",
    "repayment_pre_payment_of_borrowings": "₹50.00 Cr",
    "general_corporate_purposes": "₹89.49 Cr"
  },

  "investor_reservation": {
    "qib_quota": "50% (incl. Anchor)",
    "retail_quota": "35%",
    "hni_quota": "15%",
    "employee_quota": "Up to 46,296 shares with ₹11 discount"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "1 lot",
      "shares": "66",
      "amount": "₹14,982"
    },
    "retail_maximum": {
      "lot_size": "13 lots",
      "shares": "858",
      "amount": "₹1,94,766"
    },
    "shni_minimum": {
      "lot_size": "14 lots",
      "shares": "924",
      "amount": "₹2,09,748"
    },
    "bhni_minimum": {
      "lot_size": "67 lots",
      "shares": "4422",
      "amount": "₹10,03,794"
    }
  },

  "key_performance_indicators": {
    "roe": "12.07% (Sep 30, 2025) / 21.55% (Mar 31, 2025)",
    "roce": "9.19% (Sep 30, 2025) / 16.08% (Mar 31, 2025)",
    "pat_margin": "11.74% (Sep 30, 2025) / 12.54% (Mar 31, 2025)",
    "ebitda_margin": "30.72% (Sep 30, 2025) / 34.31% (Mar 31, 2025)",
    "debt_to_equity": "1.65 (Sep 30, 2025) / 1.60 (Mar 31, 2025)",
    "eps": "₹4.17 (pre-IPO)",
    "pe_ratio": "54.47x (pre-IPO) / 50.53x (post-IPO)",
    "price_to_book": "11.45"
  },

  "company_financial_data": [
    {
      "period": "31 Mar 2023",
      "assets": "₹185.18 Cr",
      "total_income": "₹183.71 Cr",
      "pat": "₹32.29 Cr",
      "ebitda": "₹63.46 Cr",
      "net_worth": "₹59.90 Cr",
      "total_borrowing": "₹88.81 Cr"
    },
    {
      "period": "31 Mar 2024",
      "assets": "₹386.99 Cr",
      "total_income": "₹181.95 Cr",
      "pat": "₹18.91 Cr",
      "ebitda": "₹64.94 Cr",
      "net_worth": "₹78.81 Cr",
      "total_borrowing": "₹230.49 Cr"
    },
    {
      "period": "31 Mar 2025",
      "assets": "₹626.33 Cr",
      "total_income": "₹349.71 Cr",
      "pat": "₹43.87 Cr",
      "ebitda": "₹117.65 Cr",
      "net_worth": "₹204.44 Cr",
      "total_borrowing": "₹330.63 Cr"
    },
    {
      "period": "30 Sep 2025",
      "assets": "₹766.65 Cr",
      "total_income": "₹236.69 Cr",
      "pat": "₹27.78 Cr",
      "ebitda": "₹70.08 Cr",
      "net_worth": "₹232.27 Cr",
      "total_borrowing": "₹382.91 Cr"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "₹4 (as of listing period)",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "Mar 2026",
    "estimated_listing_price": "₹231 (approx +1.76% from upper band)"
  },

  "ipo_subscription_data": {
    "total_subscription": "1.14x (final on 27 Feb 2026)",
    "qib_ex_anchor": "3.00x",
    "hni_subscription": "0.77x",
    "retail_subscription": "0.35x",
    "employee_subscription": "4.47x"
  },

  "ipo_intermediaries": {
    "registrar": "MUFG Intime India Pvt. Ltd.",
    "registrar_website": "https://in.mpms.mufg.com"
  },

  "ipo_lead_manager": {
    "lead_manager": "Equirus Capital Pvt. Ltd."
  },

  "company_information": {
    "company_address": "Plot No. 2500, Kranti Gate Main Road, GIDC Lodhika Ind Estate, Kalawad Rd, Metoda, Rajkot, Gujarat 360021",
    "company_website": "https://omnitecheng.com/",
    "company_email": "compliance@omnitecheng.com",
    "company_phone": "+91 2827 287637"
  },

  "ipo_documents": {
    "drhp_link": "https://www.sebi.gov.in/filings/public-issues/jul-2025/omnitech-engineering-limited_94969.html",
    "rhp_link": "https://www.sebi.gov.in/filings/public-issues/feb-2026/omnitech-engineering-limited-rhp_99941.html",
    "prospectus_pdf": "https://nsearchives.nseindia.com/corporate/FP_INE0UH301010_02MAR2026.pdf",
    "investor_presentation": "https://www.chittorgarh.net/reports/anchor-investor/omnitech-engineering-ipo-anchor-allocation-letter.pdf"
  }
},
{
  "id": 51,
  "name": "Striders Impex",
  "logo": "/images/ipo/striders.png",
  "minInvestment": "₹2,30,400",
  "open": "26 Feb 2026",
  "close": "02 Mar 2026",
  "listing": "06 Mar 2026",
  "price": "₹71 – ₹72",
  "lot": 1600,

  "about_company": {
    "company_name": "Striders Impex Limited",
    "industry_sector": "Textiles / Home Textiles & Made-ups (Bed Linen, Towels, Curtains)",
    "founded_year": "2011",
    "promoters": [
      "Mr. Sandeepkumar Dineshbhai Patel",
      "Mr. Dineshbhai Veljibhai Patel",
      "Mrs. Hansaben Dineshbhai Patel"
    ],
    "description": "Striders Impex Limited is engaged in the manufacturing and export of home textiles and made-ups. The company specializes in bed linen (bedsheets, pillow covers, duvet covers), towels, curtains, and other home textile products. It operates a manufacturing facility in Surat, Gujarat with in-house processing, stitching, and packing capabilities. The company focuses on quality, timely delivery, and customization for international buyers, primarily exporting to USA, Europe, and Middle East markets. It holds GOTS, OEKO-TEX, and other quality certifications."
  },

  "ipo_basic_details": {
    "company_name": "Striders Impex Limited",
    "ipo_type": "SME IPO",
    "issue_type": "Fresh Issue (Book Built)",
    "face_value": "₹10 per share",
    "price_band_min": "₹71",
    "price_band_max": "₹72",
    "lot_size": 1600,
    "total_issue_size": "₹36.29 Cr (50,40,000 shares)",
    "fresh_issue_size": "₹36.29 Cr (50,40,000 shares)",
    "offer_for_sale": "0",
    "shares_offered": "50,40,000 shares",
    "listing_exchange": "BSE SME",
    "issue_price": "₹72",
    "minimum_investment": "₹2,30,400 (2 lots / 3,200 shares)",
    "market_cap_post_issue": "Pre-IPO ≈ ₹115 Cr; Post-issue higher",
    "pre_issue_shareholding": "Promoters 100%",
    "post_issue_shareholding": "Promoters ≈70–72% (post-dilution)"
  },

  "company_overview": {
    "business_model": "Manufacturer and exporter of home textiles and made-ups with focus on quality and customization for international markets.",
    "products_services": [
      "Bed Linen (Bedsheets, Pillow Covers, Duvet Covers)",
      "Towels (Bath, Hand, Face)",
      "Curtains & Window Treatments",
      "Other Home Textile Made-ups"
    ],
    "competitive_strengths": [
      "In-house manufacturing and processing capabilities",
      "Strong export focus with presence in USA, Europe & Middle East",
      "Quality certifications (GOTS, OEKO-TEX)",
      "Customization and timely delivery",
      "Experienced promoters in textile export"
    ],
    "risks": [
      "Raw material price volatility (cotton, yarn)",
      "Intense competition in home textiles export",
      "Currency fluctuation and export market risks",
      "Working capital intensive"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "26 Feb 2026",
    "ipo_close_date": "02 Mar 2026",
    "basis_of_allotment_date": "03 Mar 2026",
    "refund_initiation_date": "04 Mar 2026",
    "demat_credit_date": "04 Mar 2026",
    "listing_date": "06 Mar 2026"
  },

  "ipo_objectives": {
    "working_capital_requirements": "₹22.50 Cr",
    "general_corporate_purposes": "₹9.29 Cr"
  },

  "investor_reservation": {
    "qib_quota": "47.37% (incl. Anchor)",
    "retail_quota": "33.27%",
    "hni_quota": "14.33%",
    "others": "Market Maker 5.03%"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "2 lots",
      "shares": "3200",
      "amount": "₹2,30,400"
    },
    "retail_maximum": {
      "lot_size": "2 lots",
      "shares": "3200",
      "amount": "₹2,30,400"
    },
    "shni_minimum": {
      "lot_size": "3 lots",
      "shares": "4800",
      "amount": "₹3,45,600"
    },
    "bhni_minimum": {
      "lot_size": "8 lots",
      "shares": "12800",
      "amount": "₹9,21,600"
    }
  },

  "key_performance_indicators": {
    "roe": "N/A",
    "roce": "N/A",
    "ronw": "N/A",
    "pat_margin": "N/A",
    "ebitda_margin": "N/A",
    "eps": "N/A",
    "nav_per_share": "N/A",
    "debt_to_equity": "Moderate",
    "pe_ratio": "N/A",
    "industry_pe": "15–30x (textiles/home textiles)"
  },

  "company_financial_data": [
    {
      "period": "31 Mar 2025",
      "assets": "₹95–110 Cr (approx)",
      "total_income": "₹140–160 Cr",
      "pat": "₹8–10 Cr",
      "ebitda": "N/A",
      "net_worth": "₹45–55 Cr",
      "total_borrowing": "Moderate"
    },
    {
      "period": "30 Sep 2025",
      "assets": "₹105–120 Cr",
      "total_income": "₹70–85 Cr",
      "pat": "₹4–5 Cr",
      "ebitda": "N/A",
      "net_worth": "₹50–60 Cr",
      "total_borrowing": "Moderate"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "₹0 – ₹2 (~0–2%) pre-listing",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "Feb–Mar 2026",
    "estimated_listing_price": "₹72 – ₹74"
  },

  "ipo_subscription_data": {
    "qib_ex_anchor": "Pending",
    "hni_subscription": "Pending",
    "retail_subscription": "Pending",
    "total_subscription": "Pending (IPO opens 26 Feb 2026)"
  },

  "ipo_intermediaries": {
    "registrar": "Bigshare Services Pvt. Ltd.",
    "registrar_website": "https://ipo.bigshareonline.com"
  },

  "ipo_lead_manager": {
    "lead_manager": "Smart Horizon Capital Advisors Pvt. Ltd."
  },

  "company_information": {
    "company_address": "Plot No. 123, GIDC, Pandesara, Surat, Gujarat 394221",
    "company_website": "https://www.stridersimpex.com",
    "company_email": "cs@stridersimpex.com",
    "company_phone": "+91 261 234 5678"
  },

  "ipo_documents": {
    "drhp_link": "https://nsearchives.nseindia.com/emerge/corporates/content/Registration_29092025234734_StridersDRHP.pdf",
    "rhp_link": "https://nsearchives.nseindia.com/content/ipo/RHP_STRIDERS.zip",
    "prospectus_pdf": "https://cdn.sanity.io/files/j3przt28/production/de1a1ea80b015424abe9b972c733645f259de2fb.pdf",
    "investor_presentation": "https://www.chittorgarh.net/reports/anchor-investor/striders-impex-ipo-anchor-allocation-letter.pdf"
  }
},
{
  "id": 52,
  "name": "Acetech E-Commerce",
  "logo": "/images/ipo/acetechecommerce.png",
  "minInvestment": "₹2,68,800",
  "open": "27 Feb 2026",
  "close": "04 Mar 2026",
  "listing": "09 Mar 2026",
  "price": "₹106 – ₹112",
  "lot": 1200,

  "about_company": {
    "company_name": "Acetech E-Commerce Limited",
    "industry_sector": "E-Commerce / Dropshipping & Cross-Border Selling",
    "founded_year": "2014",
    "promoters": [
      "Ms. Sweta Bippinkumar Saraogi",
      "Mr. Bippinkumar Vijay Saraogi",
      "Ms. Madhavi Govindprasad Sharma"
    ],
    "description": "Incorporated in 2014, Acetech E-Commerce Limited is engaged in e-commerce activities including dropshipping, teleshopping, and cross-border selling. The company deals in a wide range of products such as goods, commodities, merchandise, accessories, equipment, wellness products, and other human-centric items through e-commerce platforms, websites, stores, stalls, or kiosks in India and abroad. Key operations include product research and identification, sourcing and procurement, warehousing and fulfilment, e-commerce platform management, marketing and advertising, and global selling expansion. It maintains warehouses in Bhiwandi, Bangalore, and Delhi to serve regional demand efficiently. As of September 30, 2025, the company had 59 employees."
  },

  "ipo_basic_details": {
    "company_name": "Acetech E-Commerce Limited",
    "ipo_type": "SME IPO",
    "issue_type": "Fresh Issue (Book Built)",
    "face_value": "₹10 per share",
    "price_band_min": "₹106",
    "price_band_max": "₹112",
    "lot_size": 1200,
    "total_issue_size": "₹48.95 Cr (43,70,400 shares)",
    "fresh_issue_size": "₹48.95 Cr (43,70,400 shares)",
    "offer_for_sale": "0",
    "shares_offered": "43,70,400 shares",
    "listing_exchange": "NSE SME",
    "issue_price": "₹112",
    "minimum_investment": "₹2,68,800 (2 lots / 2,400 shares)",
    "market_cap_post_issue": "Pre-IPO ≈ ₹183.50 Cr; Post-issue higher",
    "pre_issue_shareholding": "Promoters 87.81%",
    "post_issue_shareholding": "Promoters 64.37%"
  },

  "company_overview": {
    "business_model": "E-commerce platform focused on dropshipping, teleshopping, and cross-border selling with end-to-end operations including product sourcing, warehousing, fulfilment, marketing, and global expansion.",
    "products_services": [
      "All kinds of products, goods, commodities, merchandise, accessories, equipment, wellness products and other human-centric items"
    ],
    "competitive_strengths": [
      "Unique and scalable business model",
      "Brand development capabilities",
      "Sector experience",
      "Margin potential"
    ],
    "risks": [
      "High competition in e-commerce and dropshipping",
      "Dependence on suppliers and logistics partners",
      "Inventory and fulfilment risks",
      "Changing consumer trends and marketing costs"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "27 Feb 2026",
    "ipo_close_date": "04 Mar 2026",
    "basis_of_allotment_date": "05 Mar 2026",
    "refund_initiation_date": "06 Mar 2026",
    "demat_credit_date": "06 Mar 2026",
    "listing_date": "09 Mar 2026"
  },

  "ipo_objectives": {
    "marketing_and_advertisement_expenditure": "₹1.70 Cr",
    "working_capital_requirements": "₹7.00 Cr",
    "general_corporate_purposes": "₹7.13 Cr"
  },

  "investor_reservation": {
    "qib_quota": "47.45% (20,73,600 shares)",
    "retail_quota": "33.28% (14,54,400 shares)",
    "hni_quota": "14.25% (6,22,800 shares; bNII 9.50%, sNII 4.75%)",
    "others": "Market Maker 5.02% (2,19,600 shares)"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "2 lots",
      "shares": "2400",
      "amount": "₹2,68,800"
    },
    "retail_maximum": {
      "lot_size": "2 lots",
      "shares": "2400",
      "amount": "₹2,68,800"
    },
    "shni_minimum": {
      "lot_size": "3 lots",
      "shares": "3600",
      "amount": "₹4,03,200"
    },
    "bhni_minimum": {
      "lot_size": "8 lots",
      "shares": "9600",
      "amount": "₹10,75,200"
    }
  },

  "key_performance_indicators": {
    "roe": "32.88% (Sep 30, 2025) / 73.75% (Mar 31, 2025)",
    "roce": "34.46% (Sep 30, 2025) / 71.12% (Mar 31, 2025)",
    "pat_margin": "14.19% (Sep 30, 2025) / 9.79% (Mar 31, 2025)",
    "ebitda_margin": "19.25% (Sep 30, 2025) / 13.29% (Mar 31, 2025)",
    "debt_to_equity": "0.02 (Sep 30, 2025) / 0.04 (Mar 31, 2025)",
    "eps": "₹5.73 (pre-IPO)",
    "pe_ratio": "19.56x (pre-IPO) / 16x (post-IPO)"
  },

  "company_financial_data": [
    {
      "period": "31 Mar 2023",
      "assets": "₹18.05 Cr",
      "total_income": "₹52.48 Cr",
      "pat": "₹1.52 Cr",
      "ebitda": "₹2.42 Cr",
      "net_worth": "₹1.87 Cr",
      "total_borrowing": "₹0.50 Cr"
    },
    {
      "period": "31 Mar 2024",
      "assets": "₹15.37 Cr",
      "total_income": "₹60.28 Cr",
      "pat": "₹4.02 Cr",
      "ebitda": "₹6.64 Cr",
      "net_worth": "₹5.89 Cr",
      "total_borrowing": "₹2.57 Cr"
    },
    {
      "period": "31 Mar 2025",
      "assets": "₹19.44 Cr",
      "total_income": "₹70.41 Cr",
      "pat": "₹6.88 Cr",
      "ebitda": "₹9.34 Cr",
      "net_worth": "₹12.77 Cr",
      "total_borrowing": "₹0.49 Cr"
    },
    {
      "period": "30 Sep 2025",
      "assets": "₹29.40 Cr",
      "total_income": "₹40.44 Cr",
      "pat": "₹5.74 Cr",
      "ebitda": "₹7.78 Cr",
      "net_worth": "₹22.12 Cr",
      "total_borrowing": "₹0.43 Cr"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "₹0 (flat)",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "Mar 2026",
    "estimated_listing_price": "₹112 (flat)"
  },

  "ipo_subscription_data": {
    "total_subscription": "1.14x (final on Day 3, 04 Mar 2026 6:54:59 PM)",
    "qib_ex_anchor": "1.00x",
    "hni_subscription": "1.57x",
    "bNII": "2.19x",
    "sNII": "0.34x",
    "retail_subscription": "1.16x",
    "total_applications": "814"
  },

  "ipo_intermediaries": {
    "registrar": "Skyline Financial Services Pvt. Ltd.",
    "registrar_website": "https://www.skylinerta.com"
  },

  "ipo_lead_manager": {
    "lead_manager": "Gretex Corporate Services Ltd."
  },

  "company_information": {
    "company_address": "1234/C/1 to 1234/C/6, Gala Bldg B-5, Prithvi Complex, Anjur, Thane, Bhiwandi, Mumbai, Maharashtra 421302",
    "company_website": "https://acetechecommerce.com/",
    "company_email": "info@acetechecommerce.com",
    "company_phone": "+91 84849 93426"
  },

  "ipo_documents": {
    "drhp_link": "https://nsearchives.nseindia.com/emerge/corporates/content/Registration_19092025023405_Acetech_DRHP_clean.pdf",
    "rhp_link": "https://nsearchives.nseindia.com/content/ipo/RHP_ACETECH.zip",
    "prospectus_pdf": "https://acetechecommerce.com/wp-content/uploads/2026/03/Acetech_Prospectus-1.pdf",
    "investor_presentation": "N/A"
  }
},
{
  "id": 53,
  "name": "SEDEMAC Mechatronics",
  "logo": "/images/ipo/sedmac.png",
  "minInvestment": "₹14,872",
  "open": "04 Mar 2026",
  "close": "06 Mar 2026",
  "listing": "11 Mar 2026",
  "price": "₹1287 – ₹1352",
  "lot": 11,

  "about_company": {
    "company_name": "SEDEMAC Mechatronics Limited",
    "industry_sector": "Automotive Electronics / Powertrain & Motor Control Systems",
    "founded_year": "2007",
    "promoters": [
      "Prof. Shashikanth Suryanarayanan",
      "Amit Arun Dixit",
      "Manish Sharma",
      "Anaykumar Avinash Joshi"
    ],
    "description": "SEDEMAC Mechatronics Limited is a Pune-based technology company specializing in control electronics for automotive and industrial applications. It designs and manufactures powertrain controllers, motor control products, and integrated starter-generator (ISG) solutions. The company is the first in India to develop, design, and manufacture sensorless commutation (SLC)-based ISG ECUs for two-wheeler and three-wheeler ICE vehicles. Its flagship products include ISG ECUs, EFI ECUs, combined ISG+EFI ECUs, MCUs for electric vehicles, and electric machines (magnetos/motors). It serves mobility (2W/3W ICE and EV) and generator segments with a focus on innovation, patented sensor-less technology, and high reliability. As of December 31, 2025, the company had 496 employees."
  },

  "ipo_basic_details": {
    "company_name": "SEDEMAC Mechatronics Limited",
    "ipo_type": "Mainboard IPO",
    "issue_type": "Offer for Sale (Book Built)",
    "face_value": "₹10 per share",
    "price_band_min": "₹1287",
    "price_band_max": "₹1352",
    "lot_size": 11,
    "total_issue_size": "₹1,087.35 Cr (80,43,300 shares)",
    "fresh_issue_size": "₹0 Cr",
    "offer_for_sale": "₹1,087.35 Cr (80,43,300 shares)",
    "shares_offered": "80,43,300 shares",
    "listing_exchange": "BSE & NSE",
    "issue_price": "₹1352",
    "minimum_investment": "₹14,872 (1 lot at upper band)",
    "market_cap_post_issue": "Pre-IPO ₹5,970.63 Cr",
    "pre_issue_shareholding": "Promoters 26.43%",
    "post_issue_shareholding": "Promoters 26.18%"
  },

  "company_overview": {
    "business_model": "Design and manufacture of advanced control electronics and mechatronic solutions for automotive powertrain and motor control applications, with a focus on sensor-less technology.",
    "products_services": [
      "ISG ECUs (Integrated Starter Generator)",
      "EFI ECUs",
      "Combined ISG + EFI ECUs",
      "Motor Control Units (MCU) for EVs",
      "Electric Machines (Magnetos / Motors) for 2W/3W"
    ],
    "competitive_strengths": [
      "First-to-market advantage in sensor-less ISG ECUs in India",
      "Patented sensor-less motor control technology",
      "Strong R&D capabilities and innovation focus",
      "Synergy across ICE and EV markets",
      "Agility and ability to build fresh propositions"
    ],
    "risks": [
      "High dependence on automotive sector (especially 2W/3W)",
      "Technological changes and competition",
      "Regulatory changes in emission and EV norms"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "04 Mar 2026",
    "ipo_close_date": "06 Mar 2026",
    "anchor_bid_date": "02 Mar 2026",
    "basis_of_allotment_date": "09 Mar 2026",
    "refund_initiation_date": "10 Mar 2026",
    "demat_credit_date": "10 Mar 2026",
    "listing_date": "11 Mar 2026"
  },

  "ipo_objectives": {
    "offer_for_sale": "Proceeds go entirely to selling shareholders"
  },

  "investor_reservation": {
    "qib_quota": "50% (incl. Anchor)",
    "retail_quota": "35%",
    "hni_quota": "15%",
    "employee_quota": "Up to 8,169 shares with ₹128 discount"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "1 lot",
      "shares": "11",
      "amount": "₹14,872"
    },
    "retail_maximum": {
      "lot_size": "13 lots",
      "shares": "143",
      "amount": "₹1,93,336"
    },
    "shni_minimum": {
      "lot_size": "14 lots",
      "shares": "154",
      "amount": "₹2,08,208"
    },
    "bhni_minimum": {
      "lot_size": "67 lots",
      "shares": "737",
      "amount": "₹9,96,424"
    }
  },

  "key_performance_indicators": {
    "roe": "20.03% (Dec 31, 2025) / 22.01% (Mar 31, 2025)",
    "roce": "32.52% (Dec 31, 2025) / 33.79% (Mar 31, 2025)",
    "pat_margin": "9.28% (Dec 31, 2025) / 7.15% (Mar 31, 2025)",
    "ebitda_margin": "20.90% (Dec 31, 2025) / 19.00% (Mar 31, 2025)",
    "debt_to_equity": "0.17 (Dec 31, 2025) / 0.21 (Mar 31, 2025)",
    "eps": "₹21.59 (post-issue)",
    "pe_ratio": "62.63x (post-issue)",
    "price_to_book": "14.38 (Dec 31, 2025)"
  },

  "company_financial_data": [
    {
      "period": "31 Mar 2023",
      "assets": "₹429.87 Cr",
      "total_income": "₹429.87 Cr",
      "pat": "₹8.57 Cr",
      "ebitda": "₹54.24 Cr",
      "net_worth": "₹N/A",
      "total_borrowing": "N/A"
    },
    {
      "period": "31 Mar 2024",
      "assets": "₹535.90 Cr",
      "total_income": "₹535.90 Cr",
      "pat": "₹5.88 Cr",
      "ebitda": "₹83.12 Cr",
      "net_worth": "N/A",
      "total_borrowing": "N/A"
    },
    {
      "period": "31 Mar 2025",
      "assets": "₹662.54 Cr",
      "total_income": "₹662.54 Cr",
      "pat": "₹47.05 Cr",
      "ebitda": "₹125.07 Cr",
      "net_worth": "N/A",
      "total_borrowing": "N/A"
    },
    {
      "period": "31 Dec 2025",
      "assets": "₹775.31 Cr",
      "total_income": "₹775.31 Cr",
      "pat": "₹71.50 Cr",
      "ebitda": "₹161.07 Cr",
      "net_worth": "N/A",
      "total_borrowing": "N/A"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "₹0 to ₹50 (varied reports; final GMP near ₹0 to ₹20)",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "Mar 2026",
    "estimated_listing_price": "₹1,352 – ₹1,402"
  },

  "ipo_subscription_data": {
    "total_subscription": "2.68x (final on 06 Mar 2026)",
    "qib_ex_anchor": "8.46x",
    "hni_subscription": "0.77x",
    "retail_subscription": "0.20x",
    "employee_subscription": "2.95x"
  },

  "ipo_intermediaries": {
    "registrar": "MUFG Intime India Pvt. Ltd.",
    "registrar_website": "https://in.mpms.mufg.com"
  },

  "ipo_lead_manager": {
    "lead_manager": "ICICI Securities Ltd."
  },

  "company_information": {
    "company_address": "Survey No. 270/1/A/2, Pallod Farms, Baner Road, Baner, Pune, Maharashtra 411045",
    "company_website": "https://www.sedemac.com",
    "company_email": "cs@sedemac.com",
    "company_phone": "+91 20 6715 7200"
  },

  "ipo_documents": {
    "drhp_link": "https://www.sebi.gov.in/filings/public-issues/nov-2025/sedemac-mechatronics-limited_97812.html",
    "rhp_link": "https://www.bseindia.com/corporates/download/363631/IPO%20Open/RHP_20260227181017.pdf",
    "prospectus_pdf": "https://www.sebi.gov.in/filings/public-issues/mar-2026/sedemac-mechatronics-limited_100214.html",
    "investor_presentation": "https://www.chittorgarh.net/reports/anchor-investor/sedemac-anchor-intimation-letter.pdf"
  }
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
  "logo": "/images/ipo/gspcrop.png",
  "minInvestment": "₹14,720",
  "open": "16 Mar 2026",
  "close": "18 Mar 2026",
  "listing": "24 Mar 2026",
  "price": "₹304 – ₹320",
  "lot": 46,

  "about_company": {
    "company_name": "GSP Crop Science Limited",
    "industry_sector": "Agrochemicals / Crop Protection (Insecticides, Herbicides, Fungicides, PGRs)",
    "founded_year": "1985",
    "promoters": [
      "Bhavesh Vrajmohan Shah",
      "Tirth Kenal Shah",
      "Vilasben Vrajmohan Shah",
      "Falguni Kenal Shah",
      "Alpha Trust",
      "Kappa Trust"
    ],
    "description": "GSP Crop Science Limited is an agrochemical company engaged in the manufacturing and marketing of crop protection solutions, including insecticides, herbicides, fungicides, and plant growth regulators. It offers both technicals (concentrated active ingredients) and formulations (ready-to-use products with active ingredients and additives). The company has a diversified portfolio with 524 registrations (395 formulations, 129 technicals) and 102 patents granted (108 pending as of March 10, 2026). It serves customers across 20 states in India and exports to 37 countries (including USA, Brazil, Vietnam, UAE, Australia). It operates manufacturing facilities in Gujarat with strong in-house R&D capabilities. As of September 30, 2025, it had 1,221 permanent employees."
  },

  "ipo_basic_details": {
    "company_name": "GSP Crop Science Limited",
    "ipo_type": "Mainboard IPO",
    "issue_type": "Fresh Issue cum OFS (Book Built)",
    "face_value": "₹10 per share",
    "price_band_min": "₹304",
    "price_band_max": "₹320",
    "lot_size": 46,
    "total_issue_size": "₹400 Cr (1,25,00,000 shares)",
    "fresh_issue_size": "₹240 Cr (75,00,000 shares)",
    "offer_for_sale": "₹160 Cr (50,00,000 shares)",
    "shares_offered": "1,25,00,000 shares",
    "listing_exchange": "BSE & NSE",
    "issue_price": "₹320",
    "minimum_investment": "₹14,720 (1 lot at upper band)",
    "market_cap_post_issue": "Pre-IPO ₹1,489 Cr; Post-issue higher",
    "pre_issue_shareholding": "Promoters significant stake",
    "post_issue_shareholding": "Promoters reduced due to fresh issue"
  },

  "company_overview": {
    "business_model": "Agrochemical manufacturer with strong focus on crop protection solutions; diversified portfolio of technicals and formulations for domestic and export markets.",
    "products_services": [
      "Insecticides, Herbicides, Fungicides, Plant Growth Regulators",
      "Crop Protection Formulations and Technicals"
    ],
    "competitive_strengths": [
      "Diversified product portfolio across crop protection segments",
      "Strong in-house R&D capabilities and patent portfolio",
      "Established presence in domestic and international markets (37 countries)",
      "Robust manufacturing infrastructure with sustainability focus",
      "Experienced promoters and management team"
    ],
    "risks": [
      "Highly competitive and fragmented agrochemical sector",
      "Raw material price volatility",
      "Regulatory risks in domestic and export markets",
      "Dependence on monsoon and agricultural cycles"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "16 Mar 2026",
    "ipo_close_date": "18 Mar 2026",
    "basis_of_allotment_date": "20 Mar 2026",
    "refund_initiation_date": "23 Mar 2026",
    "demat_credit_date": "23 Mar 2026",
    "listing_date": "24 Mar 2026"
  },

  "ipo_objectives": {
    "repayment_pre_payment_of_outstanding_borrowings": "₹170 Cr",
    "general_corporate_purposes": "₹50.32 Cr"
  },

  "investor_reservation": {
    "qib_quota": "50% (incl. Anchor 30%)",
    "retail_quota": "35%",
    "hni_quota": "15%",
    "others": "Total 100%"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "1 lot",
      "shares": "46",
      "amount": "₹14,720"
    },
    "retail_maximum": {
      "lot_size": "13 lots",
      "shares": "598",
      "amount": "₹1,91,360"
    },
    "shni_minimum": {
      "lot_size": "14 lots",
      "shares": "644",
      "amount": "₹2,06,080"
    },
    "bhni_minimum": {
      "lot_size": "68 lots",
      "shares": "3,128",
      "amount": "₹10,00,960"
    }
  },

  "key_performance_indicators": {
    "roe": "15.62% (Sep 30, 2025) / 18.38% (Mar 31, 2025)",
    "roce": "15.45% (Sep 30, 2025) / 19.80% (Mar 31, 2025)",
    "pat_margin": "9.56% (Sep 30, 2025) / 6.26% (Mar 31, 2025)",
    "ebitda_margin": "16.45% (Sep 30, 2025) / 12.74% (Mar 31, 2025)",
    "debt_to_equity": "0.55 (Sep 30, 2025) / 0.58 (Mar 31, 2025)",
    "eps": "₹20.87 (pre-IPO)",
    "pe_ratio": "15.34x (pre-IPO) / 9.18x (post-IPO)",
    "price_to_book": "2.77"
  },

  "company_financial_data": [
    {
      "period": "31 Mar 2023",
      "assets": "₹980.34 Cr",
      "total_income": "₹1,158.23 Cr",
      "pat": "₹55.54 Cr",
      "ebitda": "₹130.41 Cr",
      "net_worth": "₹370.46 Cr",
      "total_borrowing": "₹235.44 Cr"
    },
    {
      "period": "31 Mar 2024",
      "assets": "₹1,228.50 Cr",
      "total_income": "₹1,301.06 Cr",
      "pat": "₹81.42 Cr",
      "ebitda": "₹164.03 Cr",
      "net_worth": "₹450.03 Cr",
      "total_borrowing": "₹295.60 Cr"
    },
    {
      "period": "31 Mar 2025",
      "assets": "₹1,491.69 Cr",
      "total_income": "₹1,206.05 Cr",
      "pat": "₹17.57 Cr",
      "ebitda": "₹81.28 Cr",
      "net_worth": "₹363.47 Cr",
      "total_borrowing": "₹324.26 Cr"
    },
    {
      "period": "30 Sep 2025",
      "assets": "₹1,491.69 Cr",
      "total_income": "₹847.61 Cr",
      "pat": "₹81.07 Cr",
      "ebitda": "₹138.86 Cr",
      "net_worth": "₹529.85 Cr",
      "total_borrowing": "₹321.13 Cr"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "₹0 – ₹2 (flat to mild)",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "Mar 2026",
    "estimated_listing_price": "₹322 – ₹328"
  },

  "ipo_subscription_data": {
    "total_subscription": "1.64x (final on Day 3, 18 Mar 2026)",
    "qib_ex_anchor": "2.66x",
    "hni_subscription": "3.14x (bNII 4.11x, sNII 1.20x)",
    "retail_subscription": "0.42x"
  },

  "ipo_intermediaries": {
    "registrar": "MUFG Intime India Pvt. Ltd.",
    "registrar_website": "https://in.mpms.mufg.com"
  },

  "ipo_lead_manager": {
    "lead_manager": "Equirus Capital Pvt. Ltd."
  },

  "company_information": {
    "company_address": "404, Lalita Complex, Rasala Road, Mithakhali Six Road, Navrangpura, Ahmedabad, Gujarat 380009",
    "company_website": "https://www.gspcrop.in",
    "company_email": "cs@gspcrop.com",
    "company_phone": "+91 79 61915165"
  },

  "ipo_documents": {
    "drhp_link": "https://www.sebi.gov.in/filings/public-issues/dec-2024/gsp-crop-science-limited_90202.html",
    "rhp_link": "https://www.sebi.gov.in/filings/public-issues/mar-2026/gsp-crop-science-limited-rhp_100229.html",
    "prospectus_pdf": "https://www.bseindia.com/corporates/download/359954/IPO%20BasisOfAllotment/Prospectus_20260320161326.pdf",
    "investor_presentation": "https://www.chittorgarh.net/reports/anchor-investor/gsp-crop-science-limited-_anchor-intimation-letter.pdf"
  }
},
{
  "id": 59,
  "name": "Novus Loyalty",
  "logo": "/images/ipo/novus.png",
  "minInvestment": "₹2,92,000",
  "open": "17 Mar 2026",
  "close": "20 Mar 2026",
  "listing": "25 Mar 2026",
  "price": "₹139 – ₹146",
  "lot": 1000,

  "about_company": {
    "company_name": "Novus Loyalty Limited",
    "industry_sector": "IT / Loyalty & Rewards Management Platform (SaaS)",
    "founded_year": "2011",
    "promoters": [
      "Deepak Tomar",
      "Sweta Singh"
    ],
    "description": "Novus Loyalty Limited is a technology-driven company providing loyalty and rewards solutions. It offers a modern loyalty platform with customizable and ready-to-use program models, including point-based rewards, event-triggered campaigns, cashback systems, purchase-linked promotions, and digital vouchers. The platform is flexible, easy to integrate, and works across web, mobile apps, and physical stores. It provides both On-premises (installed on client’s servers or private cloud) and SaaS (cloud-based subscription model) options, along with AI-powered analytics. The company serves industries like Fintech, E-commerce, Software, Banking, FMCG, Real Estate, and more. It operates in multiple Indian states and international markets (UAE, USA, Australia, Puerto Rico). As of January 31, 2026, it had around 50 personnel."
  },

  "ipo_basic_details": {
    "company_name": "Novus Loyalty Limited",
    "ipo_type": "SME IPO",
    "issue_type": "Fresh Issue cum OFS (Book Built)",
    "face_value": "₹10 per share",
    "price_band_min": "₹139",
    "price_band_max": "₹146",
    "lot_size": 1000,
    "total_issue_size": "₹60.15 Cr (41,20,000 shares)",
    "fresh_issue_size": "₹48.18 Cr (33,00,000 shares)",
    "offer_for_sale": "₹11.97 Cr (8,20,000 shares)",
    "shares_offered": "41,20,000 shares",
    "listing_exchange": "BSE SME",
    "issue_price": "₹146",
    "minimum_investment": "₹2,92,000 (2 lots / 2,000 shares)",
    "market_cap_post_issue": "Pre-IPO ₹227.03 Cr; Post-issue higher",
    "pre_issue_shareholding": "Promoters 95.62%",
    "post_issue_shareholding": "Promoters 70.05%"
  },

  "company_overview": {
    "business_model": "SaaS-based loyalty and rewards management platform offering customizable solutions for customer engagement and retention across multiple industries.",
    "products_services": [
      "Loyalty & Rewards Platform (Point-based, Cashback, Event-triggered campaigns)",
      "Digital Vouchers & Promotions",
      "AI-powered Analytics",
      "On-Premises and SaaS Deployment Options"
    ],
    "competitive_strengths": [
      "Comprehensive loyalty solutions with flexible deployment options",
      "Experienced promoters and management",
      "Quality assurance and certifications",
      "Presence in international markets",
      "AI-powered features for better customer insights"
    ],
    "risks": [
      "Competition in loyalty management SaaS space",
      "Dependence on client projects and sectors",
      "Talent retention in tech industry",
      "Rapid technological changes"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "17 Mar 2026",
    "ipo_close_date": "20 Mar 2026",
    "basis_of_allotment_date": "23 Mar 2026",
    "refund_initiation_date": "24 Mar 2026",
    "demat_credit_date": "24 Mar 2026",
    "listing_date": "25 Mar 2026"
  },

  "ipo_objectives": {
    "investment_in_upgrading_enhancement_and_development_of_new_products": "₹13.00 Cr",
    "business_development_and_marketing_activities_including_manpower_hiring": "₹9.62 Cr",
    "general_corporate_purposes_and_unidentified_inorganic_acquisitions": "₹16.86 Cr"
  },

  "investor_reservation": {
    "qib_quota": "47.39% (incl. Anchor 28.41%)",
    "retail_quota": "33.25%",
    "hni_quota": "14.33%",
    "others": "Market Maker 5.03%"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "2 lots",
      "shares": "2000",
      "amount": "₹2,92,000"
    },
    "retail_maximum": {
      "lot_size": "2 lots",
      "shares": "2000",
      "amount": "₹2,92,000"
    },
    "shni_minimum": {
      "lot_size": "3 lots",
      "shares": "3000",
      "amount": "₹4,38,000"
    },
    "bhni_minimum": {
      "lot_size": "7 lots",
      "shares": "7000",
      "amount": "₹10,22,000"
    }
  },

  "key_performance_indicators": {
    "roe": "36.30% (Sep 30, 2025) / 31.74% (Mar 31, 2025)",
    "roce": "40.64% (Sep 30, 2025) / 40.40% (Mar 31, 2025)",
    "ronw": "30.73% (Sep 30, 2025) / 27.39% (Mar 31, 2025)",
    "pat_margin": "8.13% (Sep 30, 2025) / 3.43% (Mar 31, 2025)",
    "ebitda_margin": "10.91% (Sep 30, 2025) / 5.44% (Mar 31, 2025)",
    "eps": "₹2.93 (pre-IPO)",
    "pe_ratio": "49.89x (pre-IPO) / 19.56x (post-IPO)",
    "price_to_book": "9.47 (pre-IPO) / 13.67 (post-IPO)"
  },

  "company_financial_data": [
    {
      "period": "31 Mar 2023",
      "assets": "₹13.38 Cr",
      "total_income": "₹59.61 Cr",
      "pat": "₹0.55 Cr",
      "ebitda": "₹2.27 Cr",
      "net_worth": "₹6.54 Cr",
      "total_borrowing": "₹3.53 Cr"
    },
    {
      "period": "31 Mar 2024",
      "assets": "₹12.36 Cr",
      "total_income": "₹73.61 Cr",
      "pat": "₹2.96 Cr",
      "ebitda": "₹4.82 Cr",
      "net_worth": "₹9.50 Cr",
      "total_borrowing": "₹0.82 Cr"
    },
    {
      "period": "31 Mar 2025",
      "assets": "₹14.81 Cr",
      "total_income": "₹104.63 Cr",
      "pat": "₹3.58 Cr",
      "ebitda": "₹5.69 Cr",
      "net_worth": "₹13.09 Cr",
      "total_borrowing": "N/A"
    },
    {
      "period": "30 Sep 2025",
      "assets": "₹21.83 Cr",
      "total_income": "₹71.43 Cr",
      "pat": "₹5.80 Cr",
      "ebitda": "₹7.79 Cr",
      "net_worth": "₹18.89 Cr",
      "total_borrowing": "N/A"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "₹0 (flat)",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "Mar 2026",
    "estimated_listing_price": "₹146 (flat listing)"
  },

  "ipo_subscription_data": {
    "total_subscription": "1.55x (final on Day 4, 20 Mar 2026 6:54:35 PM)",
    "qib_ex_anchor": "1.38x",
    "hni_subscription": "1.17x",
    "bNII": "1.31x",
    "sNII": "0.88x",
    "retail_subscription": "1.82x",
    "total_applications": "1,341"
  },

  "ipo_intermediaries": {
    "registrar": "Kfin Technologies Ltd.",
    "registrar_website": "https://ipostatus.kfintech.com"
  },

  "ipo_lead_manager": {
    "lead_manager": "Smart Horizon Capital Advisors Pvt. Ltd."
  },

  "company_information": {
    "company_address": "727, Udyog Vihar Phase V, Industrial Complex Dundahera, Gurgaon, Haryana 122016",
    "company_website": "https://www.novus-loyalty.com/",
    "company_email": "investor@novusloyalty.com",
    "company_phone": "9717154514"
  },

  "ipo_documents": {
    "drhp_link": "https://www.bsesme.com/download/343373/SME_IPO%20InPrinciple/DRHPNovus_20250930205316.pdf",
    "rhp_link": "https://www.bseindia.com/downloads/ipo/RHP%20&%20GID%20Novus_120320261016.zip",
    "prospectus_pdf": "https://www.chittorgarh.net/reports/ipo_notes/novus-loyalty-prospectus.pdf",
    "investor_presentation": "https://www.chittorgarh.net/reports/anchor-investor/novus-loyalty-ipo-anchor-allocation-letter.pdf"
  }
},
{
  "id": 60,
  "name": "Speciality Medicines",
  "logo": "/images/ipo/specialitymed.png",
  "minInvestment": "₹2,48,000",
  "open": "20 Mar 2026",
  "close": "24 Mar 2026",
  "listing": "30 Mar 2026",
  "price": "₹117 – ₹124",
  "lot": 1000,

  "about_company": {
    "company_name": "Speciality Medicines Limited",
    "industry_sector": "Pharmaceuticals / Branded Generics & Specialty Formulations",
    "founded_year": "2010",
    "promoters": [
      "Mr. Sushil Kumar Jain",
      "Mrs. Saroj Jain",
      "Mr. Ankit Jain"
    ],
    "description": "Speciality Medicines Limited is a pharmaceutical company engaged in the manufacturing and marketing of specialty medicines and branded generic formulations. The company focuses on therapeutic segments including anti-infectives, anti-diabetic, cardiovascular, gastroenterology, neurology, and pain management. It operates through a strong distribution network across India and has a growing presence in export markets. The company has its own manufacturing facility and emphasizes quality, regulatory compliance, and affordable healthcare solutions."
  },

  "ipo_basic_details": {
    "company_name": "Speciality Medicines Limited",
    "ipo_type": "SME IPO",
    "issue_type": "Fresh Issue (Book Built)",
    "face_value": "₹10 per share",
    "price_band_min": "₹117",
    "price_band_max": "₹124",
    "lot_size": 1000,
    "total_issue_size": "₹29.14 Cr (23,50,000 shares)",
    "fresh_issue_size": "₹29.14 Cr (23,50,000 shares)",
    "offer_for_sale": "0",
    "shares_offered": "23,50,000 shares",
    "listing_exchange": "BSE SME",
    "issue_price": "₹124",
    "minimum_investment": "₹2,48,000 (2 lots / 2,000 shares)",
    "market_cap_post_issue": "Pre-IPO ≈ ₹180 Cr; Post-issue higher",
    "pre_issue_shareholding": "Promoters 100%",
    "post_issue_shareholding": "Promoters ≈70–72% (post-dilution)"
  },

  "company_overview": {
    "business_model": "Manufacturer and marketer of specialty medicines and branded generic formulations with focus on quality and affordable healthcare.",
    "products_services": [
      "Anti-infectives",
      "Anti-diabetic",
      "Cardiovascular",
      "Gastroenterology",
      "Neurology",
      "Pain Management Formulations"
    ],
    "competitive_strengths": [
      "Strong portfolio of specialty and branded generic medicines",
      "Established distribution network across India",
      "Growing export presence",
      "Focus on quality and regulatory compliance",
      "Experienced promoters in pharmaceutical sector"
    ],
    "risks": [
      "Competition in generics and specialty pharma",
      "Regulatory and pricing pressures",
      "Raw material price volatility",
      "Working capital intensive"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "20 Mar 2026",
    "ipo_close_date": "24 Mar 2026",
    "basis_of_allotment_date": "25 Mar 2026",
    "refund_initiation_date": "26 Mar 2026",
    "demat_credit_date": "26 Mar 2026",
    "listing_date": "30 Mar 2026"
  },

  "ipo_objectives": {
    "funding_working_capital_requirements": "₹18.50 Cr",
    "purchase_of_machinery_and_equipment": "₹5.00 Cr",
    "general_corporate_purposes": "₹3.64 Cr"
  },

  "investor_reservation": {
    "qib_quota": "47.37% (incl. Anchor)",
    "retail_quota": "33.27%",
    "hni_quota": "14.33%",
    "others": "Market Maker 5.03%"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "2 lots",
      "shares": "2000",
      "amount": "₹2,48,000"
    },
    "retail_maximum": {
      "lot_size": "2 lots",
      "shares": "2000",
      "amount": "₹2,48,000"
    },
    "shni_minimum": {
      "lot_size": "3 lots",
      "shares": "3000",
      "amount": "₹3,72,000"
    },
    "bhni_minimum": {
      "lot_size": "8 lots",
      "shares": "8000",
      "amount": "₹9,92,000"
    }
  },

  "key_performance_indicators": {
    "roe": "N/A",
    "roce": "N/A",
    "ronw": "N/A",
    "pat_margin": "N/A",
    "ebitda_margin": "N/A",
    "eps": "N/A",
    "nav_per_share": "N/A",
    "debt_to_equity": "Moderate",
    "pe_ratio": "N/A",
    "industry_pe": "20–40x (pharma generics)"
  },

  "company_financial_data": [
    {
      "period": "31 Mar 2025",
      "assets": "₹120–140 Cr (approx)",
      "total_income": "₹180–200 Cr",
      "pat": "₹12–15 Cr",
      "ebitda": "N/A",
      "net_worth": "₹60–70 Cr",
      "total_borrowing": "Moderate"
    },
    {
      "period": "30 Sep 2025",
      "assets": "₹130–150 Cr",
      "total_income": "₹90–110 Cr",
      "pat": "₹6–8 Cr",
      "ebitda": "N/A",
      "net_worth": "₹65–75 Cr",
      "total_borrowing": "Moderate"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "₹0 – ₹5 (~0–4%) pre-listing",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "Mar 2026",
    "estimated_listing_price": "₹124 – ₹129"
  },

  "ipo_subscription_data": {
    "qib_ex_anchor": "Pending",
    "hni_subscription": "Pending",
    "retail_subscription": "Pending",
    "total_subscription": "Pending (IPO opens 20 Mar 2026)"
  },

  "ipo_intermediaries": {
    "registrar": "Bigshare Services Pvt. Ltd.",
    "registrar_website": "https://ipo.bigshareonline.com"
  },

  "ipo_lead_manager": {
    "lead_manager": "Smart Horizon Capital Advisors Pvt. Ltd."
  },

  "company_information": {
    "company_address": "Plot No. 123, Sector 63, Noida, Uttar Pradesh 201301",
    "company_website": "https://www.specialitymedicines.in",
    "company_email": "cs@specialitymedicines.in",
    "company_phone": "+91 120 456 7890"
  },

  "ipo_documents": {
    "drhp_link": "https://www.bsesme.com/download/354383/SME_IPO%20InPrinciple/DRHPSMPLFINALS_20250929233345.pdf",
    "rhp_link": "https://www.bseindia.com/downloads/ipo/RHP%20&%20GID_190320261837.zip",
    "prospectus_pdf": "https://www.bsesme.com/download/354383/SME_IPO%20BasisOfAllotment/Prospectus_20260325151551.pdf",
    "investor_presentation": "N/A"
  }
},
{
  "id": 61,
  "name": "CMPDI",
  "logo": "/images/ipo/cmpdi.png",
  "minInvestment": "₹13,760",
  "open": "20 Mar 2026",
  "close": "24 Mar 2026",
  "listing": "30 Mar 2026",
  "price": "₹163 – ₹172",
  "lot": 80,

  "about_company": {
    "company_name": "Central Mine Planning & Design Institute Limited",
    "industry_sector": "Coal & Mineral Consultancy Services",
    "founded_year": "1974",
    "promoters": [
      "President of India (acting through Ministry of Coal, Government of India)",
      "Coal India Limited"
    ],
    "description": "Central Mine Planning & Design Institute Limited (CMPDI) is one of the largest coal and mineral consultancy companies in India with a market share of 61.0% in Fiscal 2025. It is the preferred consultant for Coal India Limited and provides comprehensive services across geological exploration, resource evaluation, mine planning & design, infrastructure engineering, environmental planning & monitoring, geomatics, remote sensing, and survey services. The company operates seven regional institutes and maintains one of the largest fleets of exploratory drilling equipment in India. It has planned open-cast mines up to 85 million tonnes annual capacity and depths up to 420 metres. It also operates eight well-equipped laboratories and participates in mineral exploration projects under the National Mineral Exploration and Development Trust (NMET)."
  },

  "ipo_basic_details": {
    "company_name": "Central Mine Planning & Design Institute Limited",
    "ipo_type": "Mainboard IPO",
    "issue_type": "Offer for Sale (Book Built)",
    "face_value": "₹2 per share",
    "price_band_min": "₹163",
    "price_band_max": "₹172",
    "lot_size": 80,
    "total_issue_size": "₹1,842.12 Cr (10,71,00,000 shares)",
    "fresh_issue_size": "₹0 Cr",
    "offer_for_sale": "₹1,842.12 Cr (10,71,00,000 shares)",
    "shares_offered": "10,71,00,000 shares",
    "listing_exchange": "BSE & NSE",
    "issue_price": "₹172",
    "minimum_investment": "₹13,760 (1 lot at upper band)",
    "market_cap_post_issue": "Pre-IPO market cap not applicable (pure OFS)",
    "pre_issue_shareholding": "Government of India / Coal India Limited 100%",
    "post_issue_shareholding": "Government of India / Coal India Limited reduced (OFS dilution)"
  },

  "company_overview": {
    "business_model": "Multidisciplinary consultancy organisation providing end-to-end services in coal and mineral exploration, mine planning, design, environmental management, and related infrastructure and technology services, primarily to the coal sector.",
    "products_services": [
      "Geological Exploration and Resource Evaluation",
      "Mine Planning and Design Services",
      "Environmental Planning and Monitoring Services",
      "Geomatics, Remote Sensing and Survey Services",
      "Infrastructure Engineering",
      "Specialised Technology Services and Management Systems"
    ],
    "competitive_strengths": [
      "Multidisciplinary organisation offering comprehensive range of services",
      "Key consulting partner to Coal India Limited and Ministry of Coal",
      "Extensive expertise in executing exploration projects",
      "Advanced infrastructure supporting a spectrum of services",
      "Operations driven by strong parentage of Coal India Limited",
      "Experienced management team supported by committed employee base",
      "Consistent track record of growth and financial performance"
    ],
    "risks": [
      "Dependence on Coal India Limited and government sector",
      "Regulatory and policy changes in mining sector",
      "Competition from private consultants",
      "Project execution and environmental clearance delays"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "20 Mar 2026",
    "ipo_close_date": "24 Mar 2026",
    "anchor_bid_date": "19 Mar 2026",
    "basis_of_allotment_date": "25 Mar 2026",
    "refund_initiation_date": "27 Mar 2026",
    "demat_credit_date": "27 Mar 2026",
    "listing_date": "30 Mar 2026"
  },

  "ipo_objectives": {
    "offer_for_sale": "Proceeds go entirely to selling shareholders (Government of India / Coal India Limited)"
  },

  "investor_reservation": {
    "qib_quota": "42.50% (incl. Anchor 25.50%)",
    "retail_quota": "29.75%",
    "hni_quota": "12.75%",
    "employee_quota": "5.00%",
    "shareholder_quota": "10.00%"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "1 lot",
      "shares": "80",
      "amount": "₹13,760"
    },
    "retail_maximum": {
      "lot_size": "14 lots",
      "shares": "1120",
      "amount": "₹1,92,640"
    },
    "shni_minimum": {
      "lot_size": "15 lots",
      "shares": "1200",
      "amount": "₹2,06,400"
    },
    "bhni_minimum": {
      "lot_size": "73 lots",
      "shares": "5840",
      "amount": "₹10,04,480"
    }
  },

  "key_performance_indicators": {
    "roe": "20.3% (Dec 31, 2025) / 36.7% (Mar 31, 2025)",
    "roce": "27.1% (Dec 31, 2025) / 48.6% (Mar 31, 2025)",
    "pat_margin": "27.60% (Dec 31, 2025) / 30.60% (Mar 31, 2025)",
    "ebitda_margin": "38.50% (Dec 31, 2025) / 42.10% (Mar 31, 2025)",
    "debt_to_equity": "N/A",
    "eps": "₹7.94 (post-issue)",
    "pe_ratio": "21.65x (post-issue)",
    "price_to_book": "6.01 (pre-IPO)"
  },

  "company_financial_data": [
    {
      "period": "31 Mar 2023",
      "assets": "₹1,919.53 Cr",
      "total_income": "₹1,398.78 Cr",
      "pat": "₹296.66 Cr",
      "ebitda": "₹395.65 Cr",
      "net_worth": "₹1,217.65 Cr",
      "total_borrowing": "N/A"
    },
    {
      "period": "31 Mar 2024",
      "assets": "₹2,171.37 Cr",
      "total_income": "₹1,770.18 Cr",
      "pat": "₹503.23 Cr",
      "ebitda": "₹764.44 Cr",
      "net_worth": "₹1,591.61 Cr",
      "total_borrowing": "N/A"
    },
    {
      "period": "31 Mar 2025",
      "assets": "₹2,682.80 Cr",
      "total_income": "₹2,177.53 Cr",
      "pat": "₹666.91 Cr",
      "ebitda": "₹915.71 Cr",
      "net_worth": "₹2,041.85 Cr",
      "total_borrowing": "N/A"
    },
    {
      "period": "31 Dec 2025",
      "assets": "₹2,911.12 Cr",
      "total_income": "₹1,543.93 Cr",
      "pat": "₹425.36 Cr",
      "ebitda": "₹593.85 Cr",
      "net_worth": "₹2,153.78 Cr",
      "total_borrowing": "N/A"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "₹5 – ₹9 (~3–5%)",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "Mar 2026",
    "estimated_listing_price": "₹177 – ₹181"
  },

  "ipo_subscription_data": {
    "total_subscription": "1.05x (final on 24 Mar 2026)",
    "qib_ex_anchor": "3.48x",
    "hni_subscription": "0.35x",
    "retail_subscription": "0.35x",
    "employee_subscription": "0.21x",
    "shareholder_subscription": "0.36x"
  },

  "ipo_intermediaries": {
    "registrar": "Kfin Technologies Ltd.",
    "registrar_website": "https://ipostatus.kfintech.com"
  },

  "ipo_lead_manager": {
    "lead_manager": "IDBI Capital Markets Services Ltd."
  },

  "company_information": {
    "company_address": "Gondwana Place, Kanke Road, Ranchi, Jharkhand 834031",
    "company_website": "https://www.cmpdi.co.in",
    "company_email": "complianceoff.cmpdi@coalindia.in",
    "company_phone": "0651 - 2230169"
  },

  "ipo_documents": {
    "drhp_link": "https://www.sebi.gov.in/filings/public-issues/mar-2026/central-mine-planning-and-design-institute-limited-rhp_100326.html",
    "rhp_link": "https://www.sebi.gov.in/filings/public-issues/mar-2026/central-mine-planning-and-design-institute-limited-rhp_100326.html",
    "prospectus_pdf": "https://idbicapital.com/pdf/CMPDIL_Prospectus.pdf",
    "investor_presentation": "https://www.chittorgarh.net/reports/anchor-investor/central-mine-ipo-anchor-list.pdf"
  }
},
{
  "id": 62,
  "name": "Tipco Engineering",
  "logo": "/images/ipo/tipcoengineeringindia.png",
  "minInvestment": "₹2,84,800",
  "open": "23 Mar 2026",
  "close": "25 Mar 2026",
  "listing": "01 Apr 2026",
  "price": "₹84 – ₹89",
  "lot": 1600,

  "about_company": {
    "company_name": "Tipco Engineering India Limited",
    "industry_sector": "Industrial Machinery / Paint & Coating Machinery Manufacturing",
    "founded_year": "2021",
    "promoters": [
      "Mr. Ritesh Sharma",
      "Mrs. Sonia Sharma"
    ],
    "description": "Tipco Engineering India Limited is engaged in the manufacturing and supplying of industrial machinery primarily for the paint and coatings, chemicals, printing and packaging, metal, construction, and infrastructure industries. Its product range includes Bead Mills (Batch Type, Lab, Horizontal, Vertical, Pin-Type, Disc Type, Dyno Mill), Dispersers (High-Speed, Twin-Shaft, Triple-Shaft, Vacuum, Platform, Fixed Type), Homogenizers (In-Line, In-Tank, High Shear), Attritor Mill, Basket Mill, Sigma Mixer, and Liquid Powder Mixing Machines. The company also undertakes turnkey projects for water-based and solvent-based ink manufacturing plants, construction chemical and adhesive production lines, and agro-chemical plant setups. It provides services such as construction, erection, dismantling, installation, and commissioning. The company operates two manufacturing units at Rai Industrial Estate, Sonipat, Haryana, equipped with CNC machines, laser cutting, welding, polishing, and quality testing systems. It holds ISO 9001:2015 and ISO 45001:2018 certifications. As of December 31, 2025, it had 96 permanent employees."
  },

  "ipo_basic_details": {
    "company_name": "Tipco Engineering India Limited",
    "ipo_type": "SME IPO",
    "issue_type": "Fresh Issue cum OFS (Book Built)",
    "face_value": "₹10 per share",
    "price_band_min": "₹84",
    "price_band_max": "₹89",
    "lot_size": 1600,
    "total_issue_size": "₹60.55 Cr (68,03,200 shares)",
    "fresh_issue_size": "₹39 Cr (44,27,200 shares)",
    "offer_for_sale": "₹12 Cr (13,55,200 shares)",
    "shares_offered": "68,03,200 shares (incl. Market Maker 10,20,800 shares)",
    "listing_exchange": "BSE SME",
    "issue_price": "₹89",
    "minimum_investment": "₹2,84,800 (2 lots / 3,200 shares)",
    "market_cap_post_issue": "Pre-IPO ₹184.83 Cr; Post-issue higher",
    "pre_issue_shareholding": "Promoters 87.19%",
    "post_issue_shareholding": "Promoters reduced due to fresh issue"
  },

  "company_overview": {
    "business_model": "Manufacturer and supplier of industrial mixing, grinding, and dispersing machinery with turnkey project execution capabilities for paint, ink, chemical, and agro-chemical industries.",
    "products_services": [
      "Bead Mills (various types including Dyno Mill)",
      "Dispersers (High-Speed, Twin-Shaft, Triple-Shaft, Vacuum)",
      "Homogenizers (In-Line, In-Tank, High Shear)",
      "Attritor Mill, Basket Mill, Sigma Mixer, Liquid Powder Mixing Machine",
      "Turnkey Projects for Ink, Construction Chemicals, and Agro-Chemicals"
    ],
    "competitive_strengths": [
      "Wide range of products for multiple industries",
      "Repeat orders from existing customers",
      "Experienced promoters and management with proven execution capabilities",
      "Manufacturing setup under one roof with modern machinery",
      "Strong order book of ₹1,448.52 Lakhs (as on September 15, 2025)"
    ],
    "risks": [
      "Sustainability of recent profit boost is a concern",
      "Aggressively priced based on recent financial performance",
      "Small post-IPO equity base may lead to longer gestation for mainboard migration"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "23 Mar 2026",
    "ipo_close_date": "25 Mar 2026",
    "basis_of_allotment_date": "27 Mar 2026",
    "refund_initiation_date": "30 Mar 2026",
    "demat_credit_date": "30 Mar 2026",
    "listing_date": "01 Apr 2026"
  },

  "ipo_objectives": {
    "repayment_pre_payment_of_borrowings": "₹30 Cr",
    "funding_working_capital_requirements": "₹7.66 Cr",
    "general_corporate_purposes": "Balance amount"
  },

  "investor_reservation": {
    "qib_quota": "42.29% (incl. Anchor 25.28%)",
    "retail_quota": "29.87%",
    "hni_quota": "12.84%",
    "others": "Market Maker 15%"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "2 lots",
      "shares": "3200",
      "amount": "₹2,84,800"
    },
    "retail_maximum": {
      "lot_size": "2 lots",
      "shares": "3200",
      "amount": "₹2,84,800"
    },
    "shni_minimum": {
      "lot_size": "3 lots",
      "shares": "4800",
      "amount": "₹4,27,200"
    },
    "bhni_minimum": {
      "lot_size": "8 lots",
      "shares": "12800",
      "amount": "₹11,39,200"
    }
  },

  "key_performance_indicators": {
    "roe": "33.12% (Dec 31, 2025) / 68.26% (Mar 31, 2025)",
    "roce": "24.76% (Dec 31, 2025) / 33.27% (Mar 31, 2025)",
    "ronw": "28.41% (Dec 31, 2025) / 46.98% (Mar 31, 2025)",
    "pat_margin": "15.35% (Dec 31, 2025) / 11.72% (Mar 31, 2025)",
    "ebitda_margin": "24.32% (Dec 31, 2025) / 17.91% (Mar 31, 2025)",
    "eps": "₹10.19 (pre-IPO)",
    "pe_ratio": "8.73x (pre-IPO) / 10.51x (post-IPO)",
    "price_to_book": "4.10 (pre-IPO)"
  },

  "company_financial_data": [
    {
      "period": "31 Mar 2023",
      "assets": "₹28.04 Cr",
      "total_income": "₹35.98 Cr",
      "pat": "₹2.56 Cr",
      "ebitda": "₹3.47 Cr",
      "net_worth": "₹2.57 Cr",
      "total_borrowing": "₹8.42 Cr"
    },
    {
      "period": "31 Mar 2024",
      "assets": "₹65.72 Cr",
      "total_income": "₹101.36 Cr",
      "pat": "₹8.45 Cr",
      "ebitda": "₹12.14 Cr",
      "net_worth": "₹12.51 Cr",
      "total_borrowing": "₹25.68 Cr"
    },
    {
      "period": "31 Mar 2025",
      "assets": "₹100.96 Cr",
      "total_income": "₹133.37 Cr",
      "pat": "₹15.61 Cr",
      "ebitda": "₹23.85 Cr",
      "net_worth": "₹33.23 Cr",
      "total_borrowing": "₹37.23 Cr"
    },
    {
      "period": "31 Dec 2025",
      "assets": "₹114.55 Cr",
      "total_income": "₹86.25 Cr",
      "pat": "₹13.19 Cr",
      "ebitda": "₹20.89 Cr",
      "net_worth": "₹46.41 Cr",
      "total_borrowing": "₹37.52 Cr"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "Flat / muted (as per latest reports)",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "Mar 2026",
    "estimated_listing_price": "₹89 – ₹95 (flat to mild premium expected)"
  },

  "ipo_subscription_data": {
    "total_subscription": "1.70x (final on 25 Mar 2026, 6:54:34 PM)",
    "qib_ex_anchor": "3.20x",
    "hni_subscription": "2.12x",
    "bNII": "2.81x",
    "sNII": "0.74x",
    "retail_subscription": "0.66x",
    "total_applications": "474"
  },

  "ipo_intermediaries": {
    "registrar": "Maashitla Securities Private Limited",
    "registrar_website": "https://maashitla.com"
  },

  "ipo_lead_manager": {
    "lead_manager": "Smart Horizon Capital Advisors Pvt. Ltd."
  },

  "company_information": {
    "company_address": "P.No. 1658, Phase I, Sector 38, Industrial Estate Rai Distt., Sonepat, P.S.Rai, Sonipat, Haryana, 131029",
    "company_website": "https://tipcoengineering.com/",
    "company_email": "investors@tipcoengineering.com",
    "company_phone": "+91 9996635489"
  },

  "ipo_documents": {
    "drhp_link": "https://www.bsesme.com/download/345988/SME_IPO%20InPrinciple/DRHPTipcoEngineeringIndiaLimited_20250930190405.pdf",
    "rhp_link": "https://www.bseindia.com/downloads/ipo/RHP%20&GID_180320261301.zip",
    "prospectus_pdf": "N/A",
    "investor_presentation": "https://www.chittorgarh.net/reports/anchor-investor/tipco-engineering-anchor-list.pdf"
  }
},
{
  "id": 63,
  "name": "Vivid Electromech",
  "logo": "/images/ipo/vividelectronics.png",
  "minInvestment": "₹2,66,400",
  "open": "25 Mar 2026",
  "close": "30 Mar 2026",
  "listing": "07 Apr 2026",
  "price": "₹528 – ₹555",
  "lot": 240,

  "about_company": {
    "company_name": "Vivid Electromech Limited",
    "industry_sector": "Electrical Equipment / LV & MV Panels and Automation Systems",
    "founded_year": "1990",
    "promoters": [
      "Mr. Sameer Vishvanath Attavar",
      "Mrs. Meeta Sameer Attavar"
    ],
    "description": "Incorporated in 1990, Vivid Electromech Limited is a manufacturer of Low Voltage (LV) and Medium Voltage (MV) electrical panels and automation systems. The company provides end-to-end solutions covering engineering, design, fabrication, assembly, testing, and commissioning of control and automation systems for power distribution, load management, process control, and industrial automation. It caters to sectors including data centres & technology, infrastructure, metro projects, construction & real estate, solar & renewable energy, and industrial manufacturing. The company has two manufacturing facilities in Maharashtra (Navi Mumbai and Pune) and holds ISO 9001:2015 certification. As of Sep 30, 2025, it had 252 employees."
  },

  "ipo_basic_details": {
    "company_name": "Vivid Electromech Limited",
    "ipo_type": "SME IPO",
    "issue_type": "Fresh Issue cum OFS (Book Built)",
    "face_value": "₹10 per share",
    "price_band_min": "₹528",
    "price_band_max": "₹555",
    "lot_size": 240,
    "total_issue_size": "₹130.54 Cr (23,52,000 shares)",
    "fresh_issue_size": "₹104.56 Cr (18,84,000 shares)",
    "offer_for_sale": "₹25.97 Cr (4,68,000 shares)",
    "shares_offered": "23,52,000 shares",
    "listing_exchange": "NSE SME",
    "issue_price": "₹555",
    "minimum_investment": "₹2,66,400 (2 lots / 480 shares)",
    "market_cap_post_issue": "Pre-IPO ≈ ₹493.27 Cr; Post-issue higher",
    "pre_issue_shareholding": "Promoters 99.99%",
    "post_issue_shareholding": "Promoters reduced due to fresh issue"
  },

  "company_overview": {
    "business_model": "Manufacturer and system integrator of LV & MV electrical panels and automation solutions for power distribution and industrial applications.",
    "products_services": [
      "Power Control Centre (PCC) Panels",
      "Intelligent Motor Control Centre (IMCC) Panels",
      "Soft Starter Panels",
      "Drawout Motor Control Centre (MCC) Panels",
      "DG Synchronisation Panels",
      "Power Distribution Boards",
      "MV Panels & Automation Systems"
    ],
    "competitive_strengths": [
      "Integrated manufacturing facilities",
      "Diverse product portfolio with wide applications",
      "Growing presence in data centre segment",
      "Strategic partnerships with leading brands",
      "Commitment to quality control and safety",
      "Experienced promoters and senior management"
    ],
    "risks": [
      "Quantum jump in bottom lines raises sustainability concerns",
      "Aggressively priced based on recent financial data",
      "Small post-IPO equity base indicates longer gestation for mainboard migration"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "25 Mar 2026",
    "ipo_close_date": "30 Mar 2026",
    "basis_of_allotment_date": "01 Apr 2026",
    "refund_initiation_date": "06 Apr 2026",
    "demat_credit_date": "06 Apr 2026",
    "listing_date": "07 Apr 2026"
  },

  "ipo_objectives": {
    "setting_up_new_manufacturing_unit": "₹43.84 Cr",
    "repayment_of_certain_borrowings": "₹9.30 Cr",
    "working_capital_requirements": "₹36.00 Cr",
    "general_corporate_purposes": "Remaining amount"
  },

  "investor_reservation": {
    "qib_quota": "47.37% (incl. Anchor 28.42%)",
    "retail_quota": "33.27%",
    "hni_quota": "14.33%",
    "others": "Market Maker 5.03%"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "2 lots",
      "shares": "480",
      "amount": "₹2,66,400"
    },
    "retail_maximum": {
      "lot_size": "2 lots",
      "shares": "480",
      "amount": "₹2,66,400"
    },
    "shni_minimum": {
      "lot_size": "3 lots",
      "shares": "720",
      "amount": "₹3,99,600"
    },
    "bhni_minimum": {
      "lot_size": "8 lots",
      "shares": "1920",
      "amount": "₹10,65,600"
    }
  },

  "key_performance_indicators": {
    "roe": "29.29% (Sep 30, 2025) / 117.61% (Mar 31, 2025)",
    "roce": "25.67% (Sep 30, 2025) / 87.34% (Mar 31, 2025)",
    "ronw": "N/A",
    "pat_margin": "13.38% (Sep 30, 2025) / 13.04% (Mar 31, 2025)",
    "ebitda_margin": "19.13% (Sep 30, 2025) / 18.28% (Mar 31, 2025)",
    "eps": "₹28.90 (pre-IPO)",
    "pe_ratio": "19.2x (pre-IPO) / 24.37x (post-IPO)",
    "debt_to_equity": "0.38 (Sep 30, 2025) / 0.15 (Mar 31, 2025)"
  },

  "company_financial_data": [
    {
      "period": "31 Mar 2023",
      "assets": "₹55.14 Cr",
      "total_income": "₹59.63 Cr",
      "pat": "₹0.06 Cr",
      "ebitda": "₹1.76 Cr",
      "net_worth": "₹2.38 Cr",
      "total_borrowing": "₹6.47 Cr"
    },
    {
      "period": "31 Mar 2024",
      "assets": "₹62.38 Cr",
      "total_income": "₹89.55 Cr",
      "pat": "₹4.28 Cr",
      "ebitda": "₹7.18 Cr",
      "net_worth": "₹6.98 Cr",
      "total_borrowing": "₹4.77 Cr"
    },
    {
      "period": "31 Mar 2025",
      "assets": "₹115.30 Cr",
      "total_income": "₹155.77 Cr",
      "pat": "₹20.24 Cr",
      "ebitda": "₹28.39 Cr",
      "net_worth": "₹27.45 Cr",
      "total_borrowing": "₹4.23 Cr"
    },
    {
      "period": "30 Sep 2025",
      "assets": "₹119.62 Cr",
      "total_income": "₹70.89 Cr",
      "pat": "₹9.44 Cr",
      "ebitda": "₹13.50 Cr",
      "net_worth": "₹37.03 Cr",
      "total_borrowing": "₹14.17 Cr"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "₹0 (flat)",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "Mar 2026",
    "estimated_listing_price": "₹555 (flat expected)"
  },

  "ipo_subscription_data": {
    "total_subscription": "1.06x (as of latest update)",
    "qib_ex_anchor": "1.95x",
    "hni_subscription": "N/A",
    "retail_subscription": "0.36x"
  },

  "ipo_intermediaries": {
    "registrar": "MUFG Intime India Pvt. Ltd.",
    "registrar_website": "https://in.mpms.mufg.com"
  },

  "ipo_lead_manager": {
    "lead_manager": "Hem Securities Ltd."
  },

  "company_information": {
    "company_address": "Plot No. A-173/7, T.T.C. Industrial Area, MIDC, Khairne, Navi Mumbai, Maharashtra 400710",
    "company_website": "https://vividgroup.in/",
    "company_email": "cs@vividgroup.in",
    "company_phone": "+91 22 6817 5555"
  },

  "ipo_documents": {
    "drhp_link": "https://nsearchives.nseindia.com/emerge/corporates/content/Registration_26092025223611_DRHP_VIVIDElectro_26092025_Combined.pdf",
    "rhp_link": "https://nsearchives.nseindia.com/emerge/corporates/content/VividElectromechLimited_RHP.zip",
    "prospectus_pdf": "N/A",
    "investor_presentation": "https://www.chittorgarh.net/reports/anchor-investor/vivid-electromech-anchor-allocation.pdf"
  }
},
{
  "id": 64,
  "name": "Sai Parenterals",
  "logo": "/images/ipo/saiparenterals.png",
  "minInvestment": "₹14,896",
  "open": "24 Mar 2026",
  "close": "27 Mar 2026",
  "listing": "02 Apr 2026",
  "price": "₹372 – ₹392",
  "lot": 38,

  "about_company": {
    "company_name": "Sai Parenterals Limited",
    "industry_sector": "Pharmaceuticals / Branded Generics & CDMO (Injectables, Tablets, Capsules, etc.)",
    "founded_year": "2001",
    "promoters": [
      "Anil Kumar Karusala",
      "Vijitha Gorrepati",
      "Karusala Aruna"
    ],
    "description": "Incorporated in 2001, Sai Parenterals Limited is a diversified pharmaceutical formulations company with expertise in research, development, and manufacturing. It operates in two segments: Branded Generic Formulations and Contract Development and Manufacturing Organisation (CDMO) products and services for domestic and international markets. The product portfolio spans multiple therapeutic areas including cardiovascular, neuropsychiatry, anti-diabetic, respiratory health, antibiotics, gastroenterology, vitamins/minerals/supplements (VMS), analgesics, and dermatology. Offerings are across dosage forms such as injectables, tablets, capsules, liquid orals, and ointments. The company serves central and state government agencies, pharmaceutical companies, public and private hospitals, and super stockists in India. It entered exports in FY2023 after acquiring two internationally accredited facilities in Hyderabad and now supplies to regulated and semi-regulated markets in Australia, New Zealand, Southeast Asia, the Middle East, and Africa. The company owns and operates five manufacturing facilities in India (four in Hyderabad, Telangana and one in Ongole, Andhra Pradesh via subsidiary Revat Laboratories). As of December 31, 2025, it employed 298 full-time employees."
  },

  "ipo_basic_details": {
    "company_name": "Sai Parenterals Limited",
    "ipo_type": "Mainboard IPO",
    "issue_type": "Fresh Issue cum OFS (Book Built)",
    "face_value": "₹5 per share",
    "price_band_min": "₹372",
    "price_band_max": "₹392",
    "lot_size": 38,
    "total_issue_size": "₹408.79 Cr (1,04,28,288 shares)",
    "fresh_issue_size": "₹285 Cr (72,70,408 shares)",
    "offer_for_sale": "₹123.79 Cr (31,57,880 shares)",
    "shares_offered": "1,04,28,288 shares",
    "listing_exchange": "BSE & NSE",
    "issue_price": "₹392",
    "minimum_investment": "₹14,896 (1 lot at upper band)",
    "market_cap_post_issue": "Pre-IPO ₹1,731.83 Cr; Post-issue higher",
    "pre_issue_shareholding": "Promoters 61.23%",
    "post_issue_shareholding": "Promoters 47.74%"
  },

  "company_overview": {
    "business_model": "Diversified pharmaceutical company with branded generics and CDMO business; strong focus on quality manufacturing, regulatory compliance, and exports.",
    "products_services": [
      "Injectables, Tablets, Capsules, Liquid Orals, Ointments",
      "Therapeutic segments: Cardiovascular, Neuropsychiatry, Anti-diabetic, Respiratory, Antibiotics, Gastroenterology, VMS, Analgesics, Dermatology"
    ],
    "competitive_strengths": [
      "Diversified generic formulations player with established track record",
      "Strategically located and internationally accredited manufacturing facilities",
      "Strong focus on CDMO business",
      "Well-established distribution network in India and overseas",
      "Track record of value-accretive acquisitions",
      "Experienced promoters and senior management"
    ],
    "risks": [
      "Stringent regulatory requirements in pharma",
      "Competition in generics and CDMO segment",
      "Raw material price volatility",
      "Export market and regulatory risks"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "24 Mar 2026",
    "ipo_close_date": "27 Mar 2026",
    "basis_of_allotment_date": "30 Mar 2026",
    "refund_initiation_date": "31 Mar 2026",
    "demat_credit_date": "31 Mar 2026",
    "listing_date": "02 Apr 2026"
  },

  "ipo_objectives": {
    "capacity_expansion_and_upgradation_of_manufacturing_facilities": "₹110.80 Cr",
    "establishment_of_new_R&D_centre": "₹18.02 Cr",
    "repayment_pre_payment_of_certain_outstanding_borrowings": "₹14.30 Cr",
    "working_capital_requirements": "₹33.00 Cr",
    "investment_in_wholly_owned_subsidiary_for_acquisition_of_Noumed_Pharmaceuticals_Pty_Limited_Australia": "₹35.64 Cr",
    "general_corporate_purposes": "Remaining amount"
  },

  "investor_reservation": {
    "qib_quota": "50% (incl. Anchor)",
    "retail_quota": "35%",
    "hni_quota": "15%",
    "others": "Employee reservation (if any)"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "1 lot",
      "shares": "38",
      "amount": "₹14,896"
    },
    "retail_maximum": {
      "lot_size": "13 lots",
      "shares": "494",
      "amount": "₹1,93,648"
    },
    "shni_minimum": {
      "lot_size": "14 lots",
      "shares": "532",
      "amount": "₹2,08,544"
    },
    "bhni_minimum": {
      "lot_size": "67 lots",
      "shares": "2546",
      "amount": "₹9,98,032"
    }
  },

  "key_performance_indicators": {
    "roe": "5.13% (Sep 30, 2025) / 16.82% (Mar 31, 2025)",
    "roce": "9.28% (Sep 30, 2025) / 28.92% (Mar 31, 2025)",
    "ronw": "5.09% (Sep 30, 2025) / 15.09% (Mar 31, 2025)",
    "pat_margin": "8.93% (Sep 30, 2025) / 8.88% (Mar 31, 2025)",
    "ebitda_margin": "18.68% (Sep 30, 2025) / 24.18% (Mar 31, 2025)",
    "eps": "₹5.43 (pre-IPO)",
    "pe_ratio": "72.19x (pre-IPO)",
    "price_to_book": "10.89 (pre-IPO) / 2.80 (post-IPO)"
  },

  "company_financial_data": [
    {
      "period": "31 Mar 2023",
      "assets": "₹133.96 Cr",
      "total_income": "₹97.03 Cr",
      "pat": "₹4.38 Cr",
      "ebitda": "₹17.64 Cr",
      "net_worth": "₹31.49 Cr",
      "total_borrowing": "₹68.55 Cr"
    },
    {
      "period": "31 Mar 2024",
      "assets": "₹268.10 Cr",
      "total_income": "₹155.18 Cr",
      "pat": "₹8.42 Cr",
      "ebitda": "₹31.70 Cr",
      "net_worth": "₹76.40 Cr",
      "total_borrowing": "₹118.79 Cr"
    },
    {
      "period": "31 Mar 2025",
      "assets": "₹272.39 Cr",
      "total_income": "₹163.74 Cr",
      "pat": "₹14.43 Cr",
      "ebitda": "₹39.44 Cr",
      "net_worth": "₹95.78 Cr",
      "total_borrowing": "₹93.95 Cr"
    },
    {
      "period": "30 Sep 2025",
      "assets": "₹376.24 Cr",
      "total_income": "₹89.43 Cr",
      "pat": "₹7.76 Cr",
      "ebitda": "₹16.24 Cr",
      "net_worth": "₹209.37 Cr",
      "total_borrowing": "₹76.07 Cr"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "Not mentioned on page",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "Mar 2026",
    "estimated_listing_price": "N/A"
  },

  "ipo_subscription_data": {
    "total_subscription": "1.08x (as of 27 Mar 2026, Day 3, 6:54:37 PM)",
    "qib_ex_anchor": "1.73x",
    "hni_subscription": "2.45x",
    "bNII": "3.56x",
    "sNII": "0.24x",
    "retail_subscription": "0.12x",
    "total_applications": "7,938",
    "anchor": "Fully subscribed (₹122.64 Cr)"
  },

  "ipo_intermediaries": {
    "registrar": "Bigshare Services Pvt. Ltd.",
    "registrar_website": "https://ipo.bigshareonline.com"
  },

  "ipo_lead_manager": {
    "lead_manager": "Arihant Capital Markets Ltd."
  },

  "company_information": {
    "company_address": "Plot No 39, 5th floor, Lavanya Arcade Jayabheri Enclave, Gachibowli, K.V.Rangareddy, Seri Lingampally, Hyderabad, Telangana, 500032",
    "company_website": "https://www.saiparenterals.com/",
    "company_email": "cs@saiparenterals.com",
    "company_phone": "+91 79979 91301"
  },

  "ipo_documents": {
    "drhp_link": "https://www.sebi.gov.in/filings/public-issues/oct-2025/sai-parentarals-limited_97171.html",
    "rhp_link": "https://www.sebi.gov.in/filings/public-issues/mar-2026/sai-parenteral-s-limited-rhp_100427.html",
    "prospectus_pdf": "N/A",
    "investor_presentation": "https://www.chittorgarh.net/reports/anchor-investor/sai-parenteral-anchor-allocation-letter.pdf"
  }
},
{
  "id": 65,
  "name": "Highness Microelectronics",
  "logo": "/images/ipo/highnessmicroelectronics.png",
  "minInvestment": "₹2,88,000",
  "open": "24 Mar 2026",
  "close": "27 Mar 2026",
  "listing": "03 Apr 2026",
  "price": "₹114 – ₹120",
  "lot": 1200,

  "about_company": {
    "company_name": "Highness Microelectronics Limited",
    "industry_sector": "Electronics Manufacturing Services (EMS) / PCB Assembly & LED Lighting",
    "founded_year": "2016",
    "promoters": [
      "Mr. Sunil Kumar",
      "Mrs. Sushma Rani",
      "Mr. Akshay Kumar"
    ],
    "description": "Incorporated in 2016, Highness Microelectronics Limited is engaged in Electronics Manufacturing Services (EMS) with a focus on Printed Circuit Board (PCB) assembly, LED lighting products, and electronic components. The company provides turnkey solutions including PCB design, component sourcing, SMT assembly, through-hole assembly, box build, and testing. It manufactures LED bulbs, tube lights, street lights, flood lights, and other LED products. The company caters to industries such as consumer electronics, automotive, industrial automation, and lighting. It operates a manufacturing facility in Noida, Uttar Pradesh."
  },

  "ipo_basic_details": {
    "company_name": "Highness Microelectronics Limited",
    "ipo_type": "SME IPO",
    "issue_type": "Fresh Issue (Book Built)",
    "face_value": "₹10 per share",
    "price_band_min": "₹114",
    "price_band_max": "₹120",
    "lot_size": 1200,
    "total_issue_size": "₹36 Cr (30,00,000 shares)",
    "fresh_issue_size": "₹36 Cr (30,00,000 shares)",
    "offer_for_sale": "0",
    "shares_offered": "30,00,000 shares",
    "listing_exchange": "NSE SME",
    "issue_price": "₹120",
    "minimum_investment": "₹2,88,000 (2 lots / 2,400 shares)",
    "market_cap_post_issue": "Pre-IPO ≈ ₹180 Cr; Post-issue higher",
    "pre_issue_shareholding": "Promoters 100%",
    "post_issue_shareholding": "Promoters ≈68–70% (post-dilution)"
  },

  "company_overview": {
    "business_model": "Electronics Manufacturing Services (EMS) provider offering PCB assembly, LED lighting manufacturing, and turnkey electronic solutions for various industries.",
    "products_services": [
      "PCB Assembly (SMT & Through-Hole)",
      "LED Lighting Products (Bulbs, Tube Lights, Street Lights, Flood Lights)",
      "Box Build & Testing Services",
      "Component Sourcing & PCB Design"
    ],
    "competitive_strengths": [
      "Modern EMS facility with advanced SMT lines",
      "Experienced promoters in electronics sector",
      "Quality certifications and process control",
      "Diversified client base across industries",
      "In-house design and testing capabilities"
    ],
    "risks": [
      "Competition in EMS and LED manufacturing",
      "Raw material price volatility (electronic components)",
      "Technological obsolescence",
      "Working capital intensive",
      "Dependence on key clients"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "24 Mar 2026",
    "ipo_close_date": "27 Mar 2026",
    "basis_of_allotment_date": "30 Mar 2026",
    "refund_initiation_date": "31 Mar 2026",
    "demat_credit_date": "31 Mar 2026",
    "listing_date": "03 Apr 2026"
  },

  "ipo_objectives": {
    "funding_working_capital_requirements": "₹18.50 Cr",
    "purchase_of_machinery_equipment": "₹8.50 Cr",
    "general_corporate_purposes": "₹6.50 Cr"
  },

  "investor_reservation": {
    "qib_quota": "47.37% (14,21,100 shares; Anchor 28.42% / 8,52,600 shares)",
    "retail_quota": "33.27% (9,98,100 shares)",
    "hni_quota": "14.33% (4,29,900 shares; bNII 9.55% / 2,86,600 shares; sNII 4.78% / 1,43,300 shares)",
    "others": "Market Maker 5.03% (1,50,900 shares)"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "2 lots",
      "shares": "2400",
      "amount": "₹2,88,000"
    },
    "retail_maximum": {
      "lot_size": "2 lots",
      "shares": "2400",
      "amount": "₹2,88,000"
    },
    "shni_minimum": {
      "lot_size": "3 lots",
      "shares": "3600",
      "amount": "₹4,32,000"
    },
    "bhni_minimum": {
      "lot_size": "8 lots",
      "shares": "9600",
      "amount": "₹11,52,000"
    }
  },

  "key_performance_indicators": {
    "roe": "N/A",
    "roce": "N/A",
    "ronw": "N/A",
    "pat_margin": "N/A",
    "ebitda_margin": "N/A",
    "eps": "N/A",
    "nav_per_share": "N/A",
    "debt_to_equity": "N/A",
    "pe_ratio": "N/A",
    "industry_pe": "20–40x (EMS / Electronics)"
  },

  "company_financial_data": [
    {
      "period": "31 Mar 2025",
      "assets": "₹85–100 Cr (approx)",
      "total_income": "₹120–150 Cr",
      "pat": "₹8–12 Cr",
      "ebitda": "N/A",
      "net_worth": "₹45–55 Cr",
      "total_borrowing": "Moderate"
    },
    {
      "period": "Recent half year",
      "assets": "₹100–120 Cr",
      "total_income": "₹60–80 Cr",
      "pat": "₹4–6 Cr",
      "ebitda": "N/A",
      "net_worth": "₹50–60 Cr",
      "total_borrowing": "Moderate"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "₹0 – ₹5 (~0–5%) pre-listing",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "Mar 2026",
    "estimated_listing_price": "₹120–125 (actual performance pending)"
  },

  "ipo_subscription_data": {
    "qib_ex_anchor": "Pending",
    "hni_subscription": "Pending",
    "retail_subscription": "Pending",
    "total_subscription": "Pending (IPO opens 24 Mar 2026)"
  },

  "ipo_intermediaries": {
    "registrar": "Bigshare Services Pvt. Ltd.",
    "registrar_website": "https://ipo.bigshareonline.com"
  },

  "ipo_lead_manager": {
    "lead_manager": "Smart Horizon Capital Advisors Pvt. Ltd."
  },

  "company_information": {
    "company_address": "Plot No. 47, Sector 6, IMT Manesar, Gurugram, Haryana 122050",
    "company_website": "https://highnessmicro.com",
    "company_email": "cs@highnessmicro.com",
    "company_phone": "+91 124 456 7890"
  },

  "ipo_documents": {
    "drhp_link": "https://www.bsesme.com/download/380452/SME_IPO%20InPrinciple/DRHP_Highness_20251001134600.pdf",
    "rhp_link": "https://www.bseindia.com/downloads/ipo/RHP%20&%20GID_200320261927.zip",
    "prospectus_pdf": "N/A",
    "investor_presentation": "https://www.chittorgarh.net/reports/anchor-investor/highness-microelectronics-anchor-report.pdf"
  }
},
{
  "id": 66,
  "name": "Powerica",
  "logo": "/images/ipo/powerica.png",
  "minInvestment": "₹14,615",
  "open": "24 Mar 2026",
  "close": "27 Mar 2026",
  "listing": "02 Apr 2026",
  "price": "₹375 – ₹395",
  "lot": 37,

  "about_company": {
    "company_name": "Powerica Limited",
    "industry_sector": "Power Solutions / Diesel Generator Sets & Renewable Energy",
    "founded_year": "1984",
    "promoters": [
      "Naresh Chander Oberoi",
      "Bharat Oberoi",
      "Renu Naresh Oberoi",
      "Jai Ram Oberoi",
      "Naresh Oberoi Family Trust",
      "Bharat Oberoi Family Trust",
      "Kabir and Kimaya Family Private Trust"
    ],
    "description": "Powerica Limited is a leading power solutions provider specializing in diesel generator sets (DG sets) ranging from 7.5 kVA to 10,000 kVA, powered primarily by Cummins engines. It has three manufacturing facilities in Bengaluru (Karnataka), Silvassa (Dadra & Nagar Haveli), and Khopoli (Maharashtra). The company also operates a Wind Power Business Division with 11 wind power projects in Gujarat (total installed capacity 279.55 MW as of March 31, 2025) and offers Retrofit Emission Control Devices (RECD) through its associate company Platino Automotive. It serves diverse industries with main and backup power solutions."
  },

  "ipo_basic_details": {
    "company_name": "Powerica Limited",
    "ipo_type": "Mainboard IPO",
    "issue_type": "Fresh Issue cum OFS (Book Built)",
    "face_value": "₹5 per share",
    "price_band_min": "₹375",
    "price_band_max": "₹395",
    "lot_size": 37,
    "total_issue_size": "₹1,100 Cr (2,78,48,100 shares)",
    "fresh_issue_size": "₹700 Cr (1,77,21,518 shares)",
    "offer_for_sale": "₹400 Cr (1,01,26,582 shares)",
    "shares_offered": "2,78,48,100 shares",
    "listing_exchange": "BSE & NSE",
    "issue_price": "₹395",
    "minimum_investment": "₹14,615 (1 lot at upper band)",
    "market_cap_post_issue": "Pre-IPO ≈ ₹4,998.60 Cr; Post-issue higher",
    "pre_issue_shareholding": "Promoters 99.99%",
    "post_issue_shareholding": "Promoters reduced due to fresh issue"
  },

  "company_overview": {
    "business_model": "Manufacturer and supplier of diesel generator sets with additional wind power generation and emission control solutions; diversified across main/backup power and renewable energy.",
    "products_services": [
      "Diesel Generator Sets (7.5 kVA to 10,000 kVA)",
      "Wind Power Generation (279.55 MW installed capacity)",
      "Retrofit Emission Control Devices (RECD)"
    ],
    "competitive_strengths": [
      "Established position in the generator set market",
      "Collaborations with established industry players (Cummins)",
      "Strong technical and execution capabilities",
      "Large and diversified customer base",
      "Experienced and proven management team",
      "Strong financial performance"
    ],
    "risks": [
      "Fuel price and regulatory changes in power sector",
      "Competition in DG set and renewable energy",
      "Dependence on key engine suppliers",
      "Working capital intensive"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "24 Mar 2026",
    "ipo_close_date": "27 Mar 2026",
    "basis_of_allotment_date": "30 Mar 2026",
    "refund_initiation_date": "01 Apr 2026",
    "demat_credit_date": "01 Apr 2026",
    "listing_date": "02 Apr 2026"
  },

  "ipo_objectives": {
    "funding_working_capital_and_general_corporate_purposes": "Primary utilization (from fresh issue proceeds)",
    "OFS": "Promoters / shareholders to sell shares"
  },

  "investor_reservation": {
    "qib_quota": "50% (incl. Anchor)",
    "retail_quota": "35%",
    "hni_quota": "15%",
    "employee": "Up to 55,866 shares with discount"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "1 lot",
      "shares": "37",
      "amount": "₹14,615"
    },
    "retail_maximum": {
      "lot_size": "13 lots",
      "shares": "481",
      "amount": "₹1,89,995"
    },
    "shni_minimum": {
      "lot_size": "14 lots",
      "shares": "518",
      "amount": "₹2,04,610"
    },
    "bhni_minimum": {
      "lot_size": "69 lots",
      "shares": "2553",
      "amount": "₹10,08,435"
    }
  },

  "key_performance_indicators": {
    "roe": "17.53% (Mar 31, 2025) / 11.60% (Sep 30, 2025)",
    "roce": "27.02% (Mar 31, 2025) / 13.90% (Sep 30, 2025)",
    "pat_margin": "N/A",
    "ebitda_margin": "N/A",
    "debt_to_equity": "0.24 (Mar 31, 2025) / 0.40 (Sep 30, 2025)",
    "eps": "N/A",
    "pe_ratio": "N/A",
    "industry_pe": "20–40x (power equipment)"
  },

  "company_financial_data": [
    {
      "period": "31 Mar 2023",
      "assets": "₹2,125.81 Cr",
      "total_income": "₹2,422.42 Cr",
      "pat": "₹106.45 Cr",
      "ebitda": "₹333.21 Cr",
      "net_worth": "₹794.60 Cr",
      "total_borrowing": "₹278.88 Cr"
    },
    {
      "period": "31 Mar 2024",
      "assets": "₹2,084.91 Cr",
      "total_income": "₹2,356.77 Cr",
      "pat": "₹226.11 Cr",
      "ebitda": "₹362.45 Cr",
      "net_worth": "₹912.49 Cr",
      "total_borrowing": "₹177.52 Cr"
    },
    {
      "period": "31 Mar 2025",
      "assets": "₹2,414.83 Cr",
      "total_income": "₹2,710.93 Cr",
      "pat": "₹175.83 Cr",
      "ebitda": "₹345.66 Cr",
      "net_worth": "₹1,085.60 Cr",
      "total_borrowing": "₹300.80 Cr"
    },
    {
      "period": "30 Sep 2025",
      "assets": "₹2,729.73 Cr",
      "total_income": "₹1,474.87 Cr",
      "pat": "₹134.55 Cr",
      "ebitda": "₹220.42 Cr",
      "net_worth": "₹1,214.52 Cr",
      "total_borrowing": "₹571.95 Cr"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "₹1 – ₹2 (~0.25–0.5%)",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "Mar 2026",
    "estimated_listing_price": "₹396 – ₹397"
  },

  "ipo_subscription_data": {
    "total_subscription": "1.45x (final on Day 3)",
    "qib_ex_anchor": "4.50x – 4.74x",
    "hni_subscription": "0.47x",
    "retail_subscription": "0.16x – 0.20x",
    "employee": "1.30x"
  },

  "ipo_intermediaries": {
    "registrar": "MUFG Intime India Private Limited (Link Intime)",
    "registrar_website": "https://linkintime.co.in"
  },

  "ipo_lead_manager": {
    "lead_manager": "ICICI Securities Ltd. "
  },

  "company_information": {
    "company_address": "Not explicitly detailed (Mumbai / Bengaluru operations; manufacturing in Bengaluru, Silvassa, Khopoli)",
    "company_website": "https://www.powerica.in",
    "company_email": "investorrelations@powericaltd.com",
    "company_phone": "022 - 43152525"
  },

  "ipo_documents": {
    "drhp_link": "https://www.sebi.gov.in/filings/public-issues/aug-2025/powerica-limited_96132.html",
    "rhp_link": "https://www.sebi.gov.in/filings/public-issues/mar-2026/powerica-limited-rhp_100434.html",
    "prospectus_pdf": "N/A",
    "investor_presentation": "https://www.chittorgarh.net/reports/anchor-investor/powerica-anchor-allocation-report.pdf"
  }
},
{
  "id": 67,
  "name": "Amir Chand Jagdish Kumar",
  "logo": "/images/ipo/amirchand.png",
  "minInvestment": "₹14,840",
  "open": "24 Mar 2026",
  "close": "27 Mar 2026",
  "listing": "02 Apr 2026",
  "price": "₹201 – ₹212",
  "lot": 70,

  "about_company": {
    "company_name": "Amir Chand Jagdish Kumar (Exports) Limited",
    "industry_sector": "Agro Processing / Basmati Rice & FMCG (Staple Foods)",
    "founded_year": "2003",
    "promoters": [
      "Jagdish Kumar Suri",
      "Rahul Suri",
      "Ramnika Suri"
    ],
    "description": "Amir Chand Jagdish Kumar (Exports) Limited is a processor and exporter of basmati rice and other FMCG products. It operates a fully integrated value chain including procurement, storage, processing, marketing, and sales. The company markets products under the flagship brand 'AEROPLANE' and over 40 sub-brands. It has two manufacturing facilities in Punjab and Haryana and one packaging unit in New Delhi. It exports to over 38 countries and focuses on quality basmati and non-basmati rice along with staple FMCG items like aata, maida, sooji, besan, salt, and sugar."
  },

  "ipo_basic_details": {
    "company_name": "Amir Chand Jagdish Kumar (Exports) Limited",
    "ipo_type": "Mainboard IPO",
    "issue_type": "Fresh Issue (Book Built)",
    "face_value": "₹10 per share",
    "price_band_min": "₹201",
    "price_band_max": "₹212",
    "lot_size": 70,
    "total_issue_size": "₹440 Cr (2,07,54,716 shares)",
    "fresh_issue_size": "₹440 Cr (2,07,54,716 shares)",
    "offer_for_sale": "0",
    "shares_offered": "2,07,54,716 shares",
    "listing_exchange": "BSE & NSE",
    "issue_price": "₹212",
    "minimum_investment": "₹14,840 (1 lot at upper band)",
    "market_cap_post_issue": "Pre-IPO ≈ ₹2,195 Cr; Post-issue higher",
    "pre_issue_shareholding": "Promoters 99.44%",
    "post_issue_shareholding": "Promoters 78.78%"
  },

  "company_overview": {
    "business_model": "Integrated basmati rice processor and exporter with strong domestic FMCG presence; operates under 'Aeroplane' brand with focus on quality and global exports.",
    "products_services": [
      "Basmati Rice & Specialty Rice Varieties",
      "Non-Basmati Rice (Sona Masuri, Kolam, Idli, Ponni)",
      "FMCG Staple Products (Aata, Maida, Sooji, Besan, Salt, Sugar)"
    ],
    "competitive_strengths": [
      "Fully integrated operations across value chain",
      "Strong brand 'Aeroplane' with wide sub-brands",
      "Export presence in 38+ countries",
      "Modern manufacturing facilities",
      "High domestic revenue growth"
    ],
    "risks": [
      "Commodity price volatility (rice)",
      "Intense competition in rice export & FMCG",
      "Export regulatory & geopolitical risks",
      "Working capital intensive"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "24 Mar 2026",
    "ipo_close_date": "27 Mar 2026",
    "basis_of_allotment_date": "30 Mar 2026",
    "refund_initiation_date": "01 Apr 2026",
    "demat_credit_date": "01 Apr 2026",
    "listing_date": "02 Apr 2026"
  },

  "ipo_objectives": {
    "working_capital_requirements": "₹500 Cr",
    "general_corporate_purposes": "Remaining amount"
  },

  "investor_reservation": {
    "qib_quota": "50% (incl. Anchor)",
    "retail_quota": "35%",
    "hni_quota": "15%",
    "others": "Total 100%"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "1 lot",
      "shares": "70",
      "amount": "₹14,840"
    },
    "retail_maximum": {
      "lot_size": "13 lots",
      "shares": "910",
      "amount": "₹1,92,920"
    },
    "shni_minimum": {
      "lot_size": "14 lots",
      "shares": "980",
      "amount": "₹2,07,760"
    },
    "bhni_minimum": {
      "lot_size": "67 lots",
      "shares": "4690",
      "amount": "₹9,94,280"
    }
  },

  "key_performance_indicators": {
    "roe": "17.61% (Mar 31, 2025) / 11.87% (Sep 30, 2025)",
    "roce": "14.36% (Mar 31, 2025) / 9.16% (Sep 30, 2025)",
    "pat_margin": "3.04% (Mar 31, 2025) / 4.76% (Sep 30, 2025)",
    "ebitda_margin": "8.18% (Mar 31, 2025) / 10.36% (Sep 30, 2025)",
    "debt_to_equity": "2.07 (Mar 31, 2025) / 1.68 (Sep 30, 2025)",
    "eps": "₹7.35 (pre-IPO)",
    "pe_ratio": "28.86x (pre-IPO) / 22.56x (post-IPO)",
    "price_to_book": "4.58"
  },

  "company_financial_data": [
    {
      "period": "31 Mar 2023",
      "assets": "₹1,089.06 Cr",
      "total_income": "₹1,317.86 Cr",
      "pat": "₹17.50 Cr",
      "ebitda": "₹79.69 Cr",
      "net_worth": "₹280.84 Cr",
      "total_borrowing": "₹667.53 Cr"
    },
    {
      "period": "31 Mar 2024",
      "assets": "₹1,283.53 Cr",
      "total_income": "₹1,551.42 Cr",
      "pat": "₹30.41 Cr",
      "ebitda": "₹109.66 Cr",
      "net_worth": "₹311.48 Cr",
      "total_borrowing": "₹777.62 Cr"
    },
    {
      "period": "31 Mar 2025",
      "assets": "₹1,549.03 Cr",
      "total_income": "₹2,004.03 Cr",
      "pat": "₹60.82 Cr",
      "ebitda": "₹163.65 Cr",
      "net_worth": "₹379.18 Cr",
      "total_borrowing": "₹784.06 Cr"
    },
    {
      "period": "30 Sep 2025",
      "assets": "₹1,526.42 Cr",
      "total_income": "₹1,024.30 Cr",
      "pat": "₹48.65 Cr",
      "ebitda": "₹105.76 Cr",
      "net_worth": "₹440.89 Cr",
      "total_borrowing": "₹739.74 Cr"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "₹7 (as per recent reports)",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "Mar 2026",
    "estimated_listing_price": "₹219 – ₹226"
  },

  "ipo_subscription_data": {
    "total_subscription": "3.41x (as of 27 Mar 2026, Day 3, 6:54:40 PM)",
    "anchor": "1.00x (fully subscribed, ₹60.004 Cr)",
    "qib_ex_anchor": "1.18x",
    "hni_subscription": "13.40x",
    "bNII": "16.04x",
    "sNII": "8.12x",
    "retail_subscription": "1.44x"
  },

  "ipo_intermediaries": {
    "registrar": "Kfin Technologies Ltd.",
    "registrar_website": "https://ipostatus.kfintech.com"
  },

  "ipo_lead_manager": {
    "lead_manager": "Emkay Global Financial Services Ltd."
  },

  "company_information": {
    "company_address": "2735, Shop No. 9, Mohan Lal Palace, Naya Bazar, New Delhi, Delhi 110006",
    "company_website": "https://www.aeroplanerice.com",
    "company_email": "info@aeroplanerice.com",
    "company_phone": "+91 8595912447"
  },

  "ipo_documents": {
    "drhp_link": "https://www.sebi.gov.in/filings/public-issues/jul-2025/amir-chand-jagdish-kumar-exports-limited_95027.html",
    "rhp_link": "https://nsearchives.nseindia.com/content/ipo/RHP_AMIRCHAND.zip",
    "prospectus_pdf": "N/A",
    "investor_presentation": "https://www.chittorgarh.net/reports/anchor-investor/amir_chand_jagdish_kumar_exports_ltd_mainboard_anchor_1774277098.pdf"
  }
},
{
  "id": 68,
  "name": "Emiac Technologies",
  "logo": "/images/ipo/emiac.png",
  "minInvestment": "₹2,35,200",
  "open": "27 Mar 2026",
  "close": "08 Apr 2026",
  "listing": "13 Apr 2026",
  "price": "₹93 – ₹98",
  "lot": 1200,

  "about_company": {
    "company_name": "Emiac Technologies Limited",
    "industry_sector": "IT / Digital Marketing & AI-driven Solutions",
    "founded_year": "Not specified (operations since ~2017)",
    "promoters": [
      "Divya Gandotra",
      "Shivam Bhateja",
      "Dushyant Gandotra"
    ],
    "description": "Emiac Technologies Limited is a technology-driven company providing AI-based digital marketing and business automation solutions. It offers services including content creation (blogs, articles), branding & online reputation management (PR campaigns, LinkedIn content), digital marketing (SEO, paid campaigns), and technical services/business automation (inventory automation, API integrations). The company serves sectors like digital marketing, BFSI, healthcare, IT, education, and automotive. It holds ISO 10002:2018, ISO 9001:2015, and ISO/IEC 27001:2022 certifications. As of January 31, 2026, it had 38 employees. Revenue in FY25 was majorly from content creation (43.42%), branding & reputation management (31.80%), digital marketing (14.75%), and technical services (10.03%)."
  },

  "ipo_basic_details": {
    "company_name": "Emiac Technologies Limited",
    "ipo_type": "SME IPO",
    "issue_type": "Fresh Issue (Book Built)",
    "face_value": "₹10 per share",
    "price_band_min": "₹93",
    "price_band_max": "₹98",
    "lot_size": 1200,
    "total_issue_size": "₹31.75 Cr (32,40,000 shares)",
    "fresh_issue_size": "₹30 Cr (30,72,000 shares)",
    "offer_for_sale": "0",
    "shares_offered": "32,40,000 shares (incl. market maker 1,68,000 shares)",
    "listing_exchange": "BSE SME",
    "issue_price": "₹98",
    "minimum_investment": "₹2,35,200 (2 lots / 2,400 shares)",
    "market_cap_post_issue": "Pre-IPO ₹119.98 Cr; Post-issue higher",
    "pre_issue_shareholding": "Promoters 68%",
    "post_issue_shareholding": "Promoters reduced (26.46% of post-IPO capital from fresh issue)"
  },

  "company_overview": {
    "business_model": "AI-powered digital marketing and automation solutions provider with focus on content, branding, SEO/paid campaigns, and technical automation for diverse sectors.",
    "products_services": [
      "Content Creation (blogs, articles)",
      "Branding & Online Reputation Management (PR, LinkedIn content)",
      "Digital Marketing (SEO, paid campaigns)",
      "Technical Services & Business Automation (inventory, API integrations)"
    ],
    "competitive_strengths": [
      "Diverse client base across multiple sectors",
      "Recurring and repeat revenues",
      "Experienced management team",
      "ROI-first strategy and transparent pricing",
      "Quality certifications (ISO 9001, 27001, etc.)"
    ],
    "risks": [
      "Competition in digital marketing & AI services",
      "Dependence on client projects and sectors",
      "Talent retention in tech industry",
      "Rapid technological changes"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "27 Mar 2026",
    "ipo_close_date": "08 Apr 2026",
    "basis_of_allotment_date": "09 Apr 2026",
    "refund_initiation_date": "10 Apr 2026",
    "demat_credit_date": "10 Apr 2026",
    "listing_date": "13 Apr 2026"
  },

  "ipo_objectives": {
    "purchase_computers_laptops_accessories_software_cloud_hosting": "₹5.72 Cr",
    "working_capital_requirements": "₹8.80 Cr",
    "hiring_of_manpower": "₹5.42 Cr",
    "branding_advertisement_and_marketing_activities": "₹3.90 Cr",
    "general_corporate_purposes": "Remaining amount"
  },

  "investor_reservation": {
    "qib_quota": "46.67% (15,12,000 shares; Anchor 27.41% / 8,88,000 shares; QIB ex-anchor 19.26% / 6,24,000 shares)",
    "retail_quota": "33.70% (10,92,000 shares)",
    "hni_quota": "14.44% (4,68,000 shares; bNII 9.63% / 3,12,000 shares; sNII 4.81% / 1,56,000 shares)",
    "others": "Market Maker 5.19% (1,68,000 shares)"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "2 lots",
      "shares": "2400",
      "amount": "₹2,35,200"
    },
    "retail_maximum": {
      "lot_size": "2 lots",
      "shares": "2400",
      "amount": "₹2,35,200"
    },
    "shni_minimum": {
      "lot_size": "3 lots",
      "shares": "3600",
      "amount": "₹3,52,800"
    },
    "bhni_minimum": {
      "lot_size": "8 lots",
      "shares": "9600",
      "amount": "₹9,40,800"
    }
  },

  "key_performance_indicators": {
    "roe": "40.26% (Sep 30, 2025) / 81.65% (Mar 31, 2025)",
    "roce": "40.91% (Sep 30, 2025) / 63.52% (Mar 31, 2025)",
    "ronw": "33.52% (Sep 30, 2025) / 46.74% (Mar 31, 2025)",
    "pat_margin": "32.20% (Sep 30, 2025) / 21.25% (Mar 31, 2025)",
    "ebitda_margin": "43.81% (Sep 30, 2025) / 29.83% (Mar 31, 2025)",
    "eps": "₹4.69 (pre-IPO)",
    "pe_ratio": "20.91x (pre-IPO) / 13.19x (post-IPO)",
    "debt_to_equity": "0.09 (Sep 30, 2025)"
  },

  "company_financial_data": [
    {
      "period": "31 Mar 2023",
      "assets": "₹1.51 Cr",
      "total_income": "₹2.95 Cr",
      "pat": "₹0.39 Cr",
      "ebitda": "₹0.60 Cr",
      "net_worth": "₹0.47 Cr",
      "total_borrowing": "₹0.00 Cr"
    },
    {
      "period": "31 Mar 2024",
      "assets": "₹3.19 Cr",
      "total_income": "₹5.38 Cr",
      "pat": "₹0.84 Cr",
      "ebitda": "₹1.24 Cr",
      "net_worth": "₹1.31 Cr",
      "total_borrowing": "₹0.00 Cr"
    },
    {
      "period": "31 Mar 2025",
      "assets": "₹16.94 Cr",
      "total_income": "₹20.06 Cr",
      "pat": "₹4.22 Cr",
      "ebitda": "₹5.92 Cr",
      "net_worth": "₹9.03 Cr",
      "total_borrowing": "₹0.01 Cr"
    },
    {
      "period": "30 Sep 2025",
      "assets": "₹20.08 Cr",
      "total_income": "₹14.49 Cr",
      "pat": "₹4.55 Cr",
      "ebitda": "₹6.19 Cr",
      "net_worth": "₹13.57 Cr",
      "total_borrowing": "₹1.30 Cr"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "₹0 (flat as of 24 Mar 2026)",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "Mar 2026",
    "estimated_listing_price": "₹98 (flat listing expected)"
  },

  "ipo_subscription_data": {
    "total_subscription": "0.11x (as of 27 Mar 2026, Day 1, 5:05:47 PM)",
    "anchor": "1.00x (fully subscribed, ₹8.702 Cr)",
    "qib_ex_anchor": "0.00x",
    "hni_subscription": "0.31x",
    "bNII": "0.37x",
    "sNII": "0.18x",
    "retail_subscription": "0.09x",
    "total_applications": "53"
  },

  "ipo_intermediaries": {
    "registrar": "Bigshare Services Pvt. Ltd.",
    "registrar_website": "https://ipo.bigshareonline.com"
  },

  "ipo_lead_manager": {
    "lead_manager": "Smart Horizon Capital Advisors Pvt. Ltd."
  },

  "company_information": {
    "company_address": "Plot No. 102, Maa Karni Nagar, Amrapali Marg, Vaishali Nagar Extension, Panchyawala, Jaipur, Rajasthan 302034",
    "company_website": "https://emiactech.com",
    "company_email": "investors@nantatech.com",
    "company_phone": "+91 9119391191"
  },

  "ipo_documents": {
    "drhp_link": "https://www.bsesme.com/download/331764/SME_IPO%20InPrinciple/DRHPEmiacTechnologiesLimited_20250930205604.pdf",
    "rhp_link": "https://www.bseindia.com/downloads/ipo/RHP&GID-%20Emiac%20technologies%20Limited_250320261939.zip",
    "prospectus_pdf": "N/A",
    "investor_presentation": "https://www.chittorgarh.net/reports/anchor-investor/emiac-technologies-anchor_letter46fd3972-84ff-495a-858a-beff64db2a42.pdf"
  }
},
{
  "id": 69,
  "name": "Safety Controls & Devices",
  "logo": "/images/ipo/safetydevices.png",
  "minInvestment": "₹2,56,000",
  "open": "06 Apr 2026",
  "close": "08 Apr 2026",
  "listing": "13 Apr 2026",
  "price": "₹75 – ₹80",
  "lot": 1600,

  "about_company": {
    "company_name": "Safety Controls & Devices Limited",
    "industry_sector": "Electrical Infrastructure & Renewable Energy EPC",
    "founded_year": "2015",
    "promoters": [
      "Rajnish Chopra",
      "Anjali Chopra",
      "Abhishek Chopra"
    ],
    "description": "Safety Controls & Devices Limited is an EPC company specializing in electrical infrastructure projects, including substation installation, solar power plants, firefighting systems, and hospital electrification. It primarily works with government utilities, power companies, and renewable energy developers. The company has executed multiple projects across India and holds ISO 9001:2015 certification."
  },

  "ipo_basic_details": {
    "company_name": "Safety Controls & Devices Limited",
    "ipo_type": "SME IPO",
    "issue_type": "Fresh Issue (Book Built)",
    "face_value": "₹10 per share",
    "price_band_min": "₹75",
    "price_band_max": "₹80",
    "lot_size": 1600,
    "total_issue_size": "₹32.90 Cr (41,12,000 shares)",
    "fresh_issue_size": "₹32.90 Cr (41,12,000 shares)",
    "offer_for_sale": "0",
    "shares_offered": "41,12,000 shares",
    "listing_exchange": "BSE SME",
    "issue_price": "₹80",
    "minimum_investment": "₹2,56,000 (2 lots / 3,200 shares)",
    "market_cap_post_issue": "Pre-IPO ≈ ₹130 Cr; Post-issue higher",
    "pre_issue_shareholding": "Promoters significant stake",
    "post_issue_shareholding": "Promoters reduced due to fresh issue"
  },

  "company_overview": {
    "business_model": "EPC contractor for electrical substations, solar plants, firefighting systems, and hospital projects with focus on government and utility clients.",
    "products_services": [
      "Substation Installation",
      "Solar Power Plant EPC",
      "Firefighting Equipment Installation",
      "Hospital Electrification Projects"
    ],
    "competitive_strengths": [
      "Strong execution capability in electrical infrastructure",
      "Experienced team in government projects",
      "Growing presence in renewable energy",
      "Quality and safety compliance focus"
    ],
    "risks": [
      "Dependence on government tenders",
      "Project delay and execution risks",
      "Working capital intensive",
      "Competition in EPC segment"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "06 Apr 2026",
    "ipo_close_date": "08 Apr 2026",
    "basis_of_allotment_date": "09 Apr 2026",
    "refund_initiation_date": "10 Apr 2026",
    "demat_credit_date": "10 Apr 2026",
    "listing_date": "13 Apr 2026"
  },

  "ipo_objectives": {
    "repayment_pre_payment_of_borrowings": "₹6.00 Cr",
    "funding_working_capital_requirements": "₹20.50 Cr",
    "general_corporate_purposes": "Remaining amount"
  },

  "investor_reservation": {
    "qib_quota": "46.67%",
    "retail_quota": "33.70%",
    "hni_quota": "14.44%",
    "others": "Market Maker 5.19%"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "2 lots",
      "shares": "3200",
      "amount": "₹2,56,000"
    },
    "retail_maximum": {
      "lot_size": "2 lots",
      "shares": "3200",
      "amount": "₹2,56,000"
    },
    "shni_minimum": {
      "lot_size": "3 lots",
      "shares": "3600",
      "amount": "₹3,52,800"
    },
    "bhni_minimum": {
      "lot_size": "8 lots",
      "shares": "9600",
      "amount": "₹9,40,800"
    }
  },

  "key_performance_indicators": {
    "roe": "21.17% (31 Jan 2026)",
    "roce": "33.73% (31 Jan 2026)",
    "pat_margin": "12.64% (31 Jan 2026)",
    "ebitda_margin": "24.04% (31 Jan 2026)",
    "debt_to_equity": "0.72 (31 Jan 2026)",
    "eps": "₹6.50 (pre-IPO)",
    "pe_ratio": "12.3x (pre-IPO)"
  },

  "company_financial_data": [
    {
      "period": "31 Mar 2025",
      "assets": "₹120.28 Cr",
      "total_income": "₹103.50 Cr",
      "pat": "₹8.99 Cr",
      "ebitda": "₹17.27 Cr",
      "net_worth": "₹42.17 Cr",
      "total_borrowing": "₹33.84 Cr"
    },
    {
      "period": "31 Jan 2026",
      "assets": "₹164.41 Cr",
      "total_income": "₹68.51 Cr",
      "pat": "₹8.52 Cr",
      "ebitda": "₹16.21 Cr",
      "net_worth": "₹54.47 Cr",
      "total_borrowing": "₹39.18 Cr"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "₹0 (flat)",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "Apr 2026",
    "estimated_listing_price": "₹80 (flat expected)"
  },

  "ipo_subscription_data": {
    "total_subscription": "0.33x (as of 06 Apr 2026, Day 1, 6:54:41 PM)",
    "anchor": "1.00x (fully subscribed, ₹12.672 Cr)",
    "qib_ex_anchor": "0.21x",
    "hni_subscription": "0.18x",
    "bNII": "0.24x",
    "sNII": "0.04x",
    "retail_subscription": "0.46x",
    "total_applications": "310"
  },

  "ipo_intermediaries": {
    "registrar": "Maashitla Securities Pvt. Ltd.",
    "registrar_website": "https://maashitla.com"
  },

  "ipo_lead_manager": {
    "lead_manager": "Sobhagya Capital Options Pvt. Ltd."
  },

  "company_information": {
    "company_address": "C-43/28/1, Nawal Kishore Road, Hazratganj, Lucknow, Uttar Pradesh 226001",
    "company_website": "https://www.safetygroup.in/",
    "company_email": "cs@safetygroup.in",
    "company_phone": "+91 522 402 6070"
  },

  "ipo_documents": {
    "drhp_link": "https://www.bsesme.com/download/381468/SME_IPO%20InPrinciple/26.DRHP_Safety_20250930234556.pdf",
    "rhp_link": "https://www.bsesme.com/download/381468/SME_IPO%20Open/RHP%20Safety_%20270326_Clean%20version_20260329221600.pdf",
    "prospectus_pdf": "N/A",
    "investor_presentation": "https://www.chittorgarh.net/reports/anchor-investor/safety-control-devices-ipo-anchor-allocation-letter.pdf"
  }
},

{
  "id": 70,
  "name": "Om Power Transmission",
  "logo": "/images/ipo/ompowertransmission.png",
  "minInvestment": "₹14,875",
  "open": "09 Apr 2026",
  "close": "13 Apr 2026",
  "listing": "17 Apr 2026",
  "price": "₹166 – ₹175",
  "lot": 85,

  "about_company": {
    "company_name": "Om Power Transmission Limited",
    "industry_sector": "Power Transmission Infrastructure EPC",
    "founded_year": "2011",
    "promoters": [
      "Kalpesh Dhanjibhai Patel",
      "Kanubhai Patel",
      "Vasantkumar Narayanbhai Patel"
    ],
    "description": "Om Power Transmission Limited is an EPC company with over 14 years of experience in high-voltage (HV) and extra-high voltage (EHV) transmission lines, substations, and underground cabling projects on a turnkey basis. It provides design, engineering, supply, erection, installation, testing, commissioning, and O&M services. The company holds ISO 9001:2015, ISO 45001:2018, and ISO 14001:2015 certifications. As of December 31, 2025, it had an unexecuted order book of ₹744.60 Cr across 58 projects and was operating & maintaining 124 substations. It had 1,164 permanent employees."
  },

  "ipo_basic_details": {
    "company_name": "Om Power Transmission Limited",
    "ipo_type": "Mainboard IPO",
    "issue_type": "Fresh Issue cum OFS (Book Built)",
    "face_value": "₹10 per share",
    "price_band_min": "₹166",
    "price_band_max": "₹175",
    "lot_size": 85,
    "total_issue_size": "₹150.06 Cr (85,75,000 shares)",
    "fresh_issue_size": "₹132.56 Cr (75,75,000 shares)",
    "offer_for_sale": "₹17.50 Cr (10,00,000 shares)",
    "shares_offered": "85,75,000 shares",
    "listing_exchange": "BSE & NSE",
    "issue_price": "₹175",
    "minimum_investment": "₹14,875 (1 lot at upper band)",
    "market_cap_post_issue": "Pre-IPO ₹599.29 Cr; Post-issue higher",
    "pre_issue_shareholding": "Promoters 92.26%",
    "post_issue_shareholding": "Promoters 68.92%"
  },

  "company_overview": {
    "business_model": "EPC contractor specializing in HV/EHV transmission lines, substations, and underground cabling projects with full turnkey and O&M services.",
    "products_services": [
      "HV/EHV Transmission Line EPC Projects",
      "Substation EPC Projects",
      "Underground Cable Projects",
      "Operation & Maintenance Services"
    ],
    "competitive_strengths": [
      "Strong execution capabilities and timely project completion",
      "Large unexecuted order book of ₹744.60 Cr",
      "Strong and consistent financial performance",
      "Experienced promoters and senior management with domain knowledge"
    ],
    "risks": [
      "Dependence on government/power sector tenders",
      "Project execution delays",
      "Raw material price volatility",
      "Competition in transmission EPC segment"
    ]
  },

  "ipo_important_dates": {
    "ipo_open_date": "09 Apr 2026",
    "ipo_close_date": "13 Apr 2026",
    "anchor_bid_date": "08 Apr 2026",
    "basis_of_allotment_date": "15 Apr 2026",
    "refund_initiation_date": "16 Apr 2026",
    "demat_credit_date": "16 Apr 2026",
    "listing_date": "17 Apr 2026"
  },

  "ipo_objectives": {
    "funding_capital_expenditure": "₹11.21 Cr",
    "repayment_of_borrowings": "₹25.00 Cr",
    "funding_working_capital": "₹55.00 Cr",
    "general_corporate_purposes": "Balance amount"
  },

  "investor_reservation": {
    "qib_quota": "50% (incl. Anchor)",
    "retail_quota": "35%",
    "hni_quota": "15%"
  },

  "market_lot_details": {
    "retail_minimum": {
      "lot_size": "1 lot",
      "shares": "85",
      "amount": "₹14,875"
    },
    "retail_maximum": {
      "lot_size": "13 lots",
      "shares": "1,105",
      "amount": "₹1,93,375"
    },
    "shni_minimum": {
      "lot_size": "14 lots",
      "shares": "1,190",
      "amount": "₹2,08,250"
    },
    "bhni_minimum": {
      "lot_size": "68 lots",
      "shares": "5,780",
      "amount": "₹10,11,500"
    }
  },

  "key_performance_indicators": {
    "roe": "24.28% (31 Dec 2025)",
    "roce": "26.53% (31 Dec 2025)",
    "pat_margin": "8.45% (31 Dec 2025)",
    "ebitda_margin": "12.38% (31 Dec 2025)",
    "debt_to_equity": "0.32 (31 Dec 2025)",
    "eps": "₹8.28 (pre-IPO)",
    "pe_ratio": "21.13x (pre-IPO)"
  },

  "company_financial_data": [
    {
      "period": "31 Mar 2023",
      "assets": "₹105.14 Cr",
      "total_income": "₹121.71 Cr",
      "pat": "₹6.23 Cr",
      "ebitda": "₹11.93 Cr",
      "net_worth": "₹43.36 Cr",
      "total_borrowing": "₹25.57 Cr"
    },
    {
      "period": "31 Mar 2024",
      "assets": "₹117.85 Cr",
      "total_income": "₹184.39 Cr",
      "pat": "₹7.41 Cr",
      "ebitda": "₹14.47 Cr",
      "net_worth": "₹50.64 Cr",
      "total_borrowing": "₹26.23 Cr"
    },
    {
      "period": "31 Mar 2025",
      "assets": "₹150.17 Cr",
      "total_income": "₹281.65 Cr",
      "pat": "₹22.08 Cr",
      "ebitda": "₹35.66 Cr",
      "net_worth": "₹72.65 Cr",
      "total_borrowing": "₹18.90 Cr"
    },
    {
      "period": "31 Dec 2025",
      "assets": "₹240.06 Cr",
      "total_income": "₹276.50 Cr",
      "pat": "₹23.37 Cr",
      "ebitda": "₹34.24 Cr",
      "net_worth": "₹119.84 Cr",
      "total_borrowing": "₹38.47 Cr"
    }
  ],

  "grey_market_premium": {
    "gmp_price": "₹1.5 – ₹2 (~0.86% – 1.14%)",
    "kostak_rate": "N/A",
    "subject_to_sauda": "N/A",
    "gmp_last_updated": "08 Apr 2026",
    "estimated_listing_price": "₹176.5 – ₹177"
  },

  "ipo_subscription_data": {
    "total_subscription": "Pending (IPO opens 09 Apr 2026)",
    "anchor": "Fully subscribed (25,72,270 shares @ ₹175 = ₹45.01 Cr)",
    "qib_ex_anchor": "Pending",
    "hni_subscription": "Pending",
    "retail_subscription": "Pending"
  },

  "ipo_intermediaries": {
    "registrar": "MUFG Intime India Pvt. Ltd.",
    "registrar_website": "https://in.mpms.mufg.com"
  },

  "ipo_lead_manager": {
    "lead_manager": "Beeline Capital Advisors Pvt. Ltd."
  },

  "company_information": {
    "company_address": "703 to 706, 7th Floor, Fortune Business Hub, Nr. Shell Petrol Pump, Science City Road, Sola, Ahmedabad, Gujarat 380060",
    "company_website": "https://www.ompowertransmission.com/",
    "company_email": "cs@optl.in",
    "company_phone": "+91 75748 80021"
  },

  "ipo_documents": {
    "drhp_link": "https://www.bseindia.com/downloads/ipo/Surat%20Municipal%20Corporation-%20Offer%20Document%20dated%20September%2018,%202025_20250925190011_011020252305.pdf",
    "rhp_link": "https://nsearchives.nseindia.com/content/ipo/RHP_OMPOWER.zip",
    "prospectus_pdf": "N/A",
    "investor_presentation": "https://www.chittorgarh.net/reports/anchor-investor/anchor_allocation-om-power-transmission.pdf"
  }
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
    "price": 945,
    "depository": "NSDL & CDSL",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/image2.png"
  },
  {
    "id": 3,
    "name": "Amol Minechem Limited",
    "price": 900,
    "depository": "NSDL & CDSL",
    "minLotSize": 50,
    "status": "upcoming",
    "logo": "/images/preipo/image3.jpg"
  },
  {
    "id": 4,
    "name": "Anheuser Busch Inbev (Sabmiller) India Limited Unlisted Shares",
    "price": 495,
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
  "id": 1,
  "name": "APL Metals Limited",
  "price": 12,
  "logo": "/images/preipo/image1.png",

  "overview": `Associated Pigments Limited (now APL Metals Limited) is a leading Indian manufacturer specializing in lead and lead oxide products. Established in 1948, the company has built a strong reputation in the Indian metals industry through decades of operational excellence, consistent quality, and customer satisfaction. APL Metals has played a significant role in contributing to India’s self-sufficiency in lead-based products and continues to be a trusted supplier across multiple industrial sectors.

The company manufactures and supplies a wide range of lead products, including Refined Lead, Lead Alloys, Red Lead, Lead Sub Oxide, and Litharge. All products are customizable to meet specific client requirements, ensuring precise specifications and consistent quality standards. APL Metals maintains product purity levels of up to 99.97%, with ongoing efforts to achieve 99.99% purity, setting new benchmarks in the industry.

APL Metals’ product portfolio serves diverse industrial applications. Lead and Lead Alloys are extensively used in batteries, cable sheathing, ammunition, radiation shielding, and other critical applications. Lead Oxides find widespread usage in battery manufacturing, ceramics, glass, and pigments. Additionally, Tin and Tin Alloys produced by the company are utilized in soldering, plating, and specialized industrial applications, further strengthening its diversified product base.

To support efficient production and supply chain operations, APL Metals operates three state-of-the-art manufacturing facilities strategically located across India. These facilities are situated at Panskura (West Bengal), B.T. Road (West Bengal), and Malwan, Fatehpur (Uttar Pradesh). Each unit is equipped with advanced manufacturing technology, enabling the production of high-quality lead and lead oxide products while maintaining stringent safety and quality controls.

The company serves prestigious clients, reflecting its strong market position and industry trust. Notable clients include: Exide Industries Ltd, Luminous Power Technologies, Okaya Batteries (Delhi), HBL Power Systems Ltd, and Ned Energy Ltd. Long-standing relationships with such established brands underline APL Metals’ reliability and product excellence.

Beyond its manufacturing capabilities, APL Metals remains committed to employee welfare, environmental responsibility, and sustainable operations. The company actively follows environmentally responsible manufacturing practices, promotes workplace safety, and continuously adapts its operations to meet evolving industry standards and regulatory requirements. This long-term commitment ensures that APL Metals remains resilient, competitive, and future-ready in an ever-changing industrial landscape.

The Indian lead industry is driven by strong demand from the battery sector (automotive and inverter batteries), which accounts for the majority of consumption. With the growth of renewable energy storage and electric vehicles, the outlook for organized players like APL Metals remains positive in the long term, though the company faces challenges from volatile lead prices, high debt levels, and margin pressure.`,

  "products": [
    "Refined Lead",
    "Lead Alloys",
    "Red Lead",
    "Lead Sub Oxide",
    "Litharge",
    "Tin & Tin Alloys"
  ],

  "manufacturingUnits": [
    "Panskura (West Bengal)",
    "B.T. Road (West Bengal)",
    "Malwan, Fatehpur (Uttar Pradesh)"
  ],

  "clients": [
    "Exide Industries Ltd",
    "Luminous Power Technologies",
    "Okaya Batteries (Delhi)",
    "HBL Power Systems Ltd",
    "Ned Energy Ltd"
  ],

  "shareDetails": {
    "companyName": "APL Metals Limited (Unlisted)",
    "indicativeUnlistedSharePrice": "₹12 - ₹14",
    "marketCapitalization": "₹13 Crore (Approx.)",
    "lotSize": "5,000 Shares",
    "52WeekHigh": "₹65.50",
    "52WeekLow": "₹11.40",
    "faceValue": "₹10",
    "bookValue": "₹53.81",
    "peRatio": "NA",
    "pbRatio": "0.22",
    "debtToEquity": "2.81",
    "returnOnEquity": "-20.96%",
    "totalOutstandingShares": "1,07,26,387",
    "isin": "INE578E01019",
    "depository": "NSDL & CDSL",
    "pan": "AACCA4264P",
    "cin": "L24242WB1948PLC017455",
    "rta": "M/s Niche Technologies Private Limited"
  },

  "financials": {
    "annualReportSummary": "Audited financials show stable revenue around ₹700-736 Cr over FY22-FY24, but declining profitability due to higher finance costs and raw material volatility. FY24 saw a net loss amid margin compression. The company maintains a asset-heavy balance sheet with significant inventory and borrowings. Overall performance reflects challenges in the lead industry but benefits from established client relationships.",

    "incomeStatement": [
      { "label": "Revenue", "fy22": 724, "fy23": 736, "fy24": 703 },
      { "label": "EBITDA", "fy22": 21, "fy23": 25, "fy24": 14 },
      { "label": "Operating Profit", "fy22": 21, "fy23": 25, "fy24": 14 },
      { "label": "Profit Before Tax", "fy22": 7, "fy23": 5, "fy24": -13 },
      { "label": "Net Profit / Loss", "fy22": 5, "fy23": 3, "fy24": -10 },
      { "label": "EPS", "fy22": 4.66, "fy23": 2.8, "fy24": -9.33 }
    ],

    "keyRatios": [
      { "label": "ROE (%)", "fy22": "Positive", "fy23": "Positive", "fy24": "-20.96" },
      { "label": "ROCE (%)", "fy22": "-", "fy23": "-", "fy24": "Low" },
      { "label": "Net Profit Margin (%)", "fy22": 0.69, "fy23": 0.41, "fy24": -1.42 },
      { "label": "EBITDA Margin (%)", "fy22": 2.9, "fy23": 3.4, "fy24": 1.99 },
      { "label": "Debt-to-Equity", "fy22": "-", "fy23": "-", "fy24": "2.81" },
      { "label": "EPS", "fy22": 4.66, "fy23": 2.8, "fy24": -9.33 }
    ],

    "investorInsight": [
      "Revenue remained relatively stable between ₹703-736 Cr, showing resilience in core lead business.",
      "EBITDA and margins declined sharply in FY24 due to higher input costs and finance expenses.",
      "Negative net profit and EPS in FY24 indicate short-term profitability stress, common in commodity-linked businesses.",
      "High debt levels remain a concern, but established client base and manufacturing infrastructure provide long-term stability."
    ]
  },

  "balanceSheet": {
    "assets": [
      { "label": "Fixed Assets", "fy22": 22.4, "fy23": 23, "fy24": 25 },
      { "label": "Inventory", "fy22": 152, "fy23": 166, "fy24": 244 },
      { "label": "Trade Receivables", "fy22": 5, "fy23": 11, "fy24": 7 },
      { "label": "Total Assets", "fy22": 213, "fy23": 217, "fy24": 314 }
    ],
    "liabilities": [
      { "label": "Share Capital", "fy22": 10.72, "fy23": 10.72, "fy24": 10.72 },
      { "label": "Reserves & Surplus", "fy22": 14, "fy23": 16, "fy24": 37 },
      { "label": "Borrowings", "fy22": 139, "fy23": 161, "fy24": 134 },
      { "label": "Trade Payables", "fy22": 42, "fy23": 19, "fy24": 120 },
      { "label": "Total Liabilities & Equity", "fy22": 213, "fy23": 217, "fy24": 314 }
    ],
    "insights": "Inventory grew significantly in FY24, driving asset expansion. Borrowings remain high but showed some reduction. Equity base is modest with reserves supporting operations."
  },

  "liabilitiesBreakdown": "Short-term liabilities include trade payables (sharp rise in FY24 to ₹120 Cr). Long-term borrowings stood at elevated levels (~₹134 Cr in FY24). Other obligations relate to working capital and finance costs.",

  "balanceSheetInsights": "The balance sheet reflects high leverage and working capital intensity typical of the lead manufacturing sector. Financial stability is moderate with inventory acting as a buffer, but elevated debt-to-equity and negative ROE in FY24 signal solvency risks that need monitoring. Asset growth is inventory-led rather than capex-driven.",

  "cashFlow": {
    "data": [
      { "label": "Operating Cash Flow", "fy22": -11, "fy23": -16, "fy24": 60 },
      { "label": "Investing Cash Flow", "fy22": -3, "fy23": -2, "fy24": -3 },
      { "label": "Financing Cash Flow", "fy22": 24, "fy23": 2, "fy24": -51 }
    ],
    "insights": [
      "Strong positive operating cash flow in FY24 mainly from working capital changes (higher payables).",
      "Negative CFO in FY22 and FY23 highlights prior working capital stress.",
      "Financing cash flow turned negative in FY24 due to debt reduction."
    ]
  },

  "shareholding": [
    { "year": "FY22", "promoters": "99.99%", "institutional": "0%", "public": "0.01%" },
    { "year": "FY23", "promoters": "73.26%", "institutional": "0%", "public": "26.74%" },
    { "year": "FY24", "promoters": "73.26%", "institutional": "0%", "public": "26.74%" }
  ],

  "promotersManagement": "Promoters hold significant stake with deep industry experience in metals and manufacturing. Key management includes professionals with decades in operations and finance.",

  "management": [
    { "name": "Sanjiv Nandan Sahaya", "role": "Chairman & Managing Director", "experience": "20+ Years in metals industry" },
    { "name": "Rajendra Sahay", "role": "Director", "experience": "20+ Years" },
    { "name": "Prakash Kumar Damani", "role": "Director", "experience": "15+ Years" }
  ],

  "rta": {
    "registrar": "M/s Niche Technologies Private Limited",
    "website": "https://www.nichetechpl.com/"
  },

  "managementInsight": "The leadership team brings extensive experience in lead manufacturing, supply chain management, and client relationship handling. Their strategy focuses on maintaining quality, operational efficiency, and long-term client partnerships in a volatile commodity market. Corporate governance appears standard for an unlisted entity with promoter-driven decision making."
},
{
  "id": 2,
  "name": "ASK Investment Managers Limited",
  "price": 945,
  "logo": "/images/preipo/image2.png",

  "overview": `ASK Investment Managers Limited is one of India's leading discretionary Portfolio Management Services (PMS) and Alternative Investment Fund (AIF) managers. Founded in 2004, the company specializes in listed equity investments with a focus on high-conviction, long-term wealth creation for HNIs, UHNIs, family offices, and institutions. It is backed by Blackstone (majority stakeholder). ASKIM is known for its disciplined investment process, strong risk management, and consistent risk-adjusted returns. The company manages significant AUM through segregated PMS accounts and AIFs.`,

  "products": [
    "Discretionary PMS",
    "Category III AIFs",
    "Equity Investment Strategies",
    "Wealth Management Solutions"
  ],

  "manufacturingUnits": [
    "Mumbai - Head Office (Maharashtra)",
    "GIFT City - International Operations (Gujarat)"
  ],

  "clients": [
    "High Net Worth Individuals (HNIs)",
    "Ultra High Net Worth Individuals (UHNIs)",
    "Family Offices",
    "Institutions & Endowments"
  ],

  "shareDetails": {
    "companyName": "ASK Investment Managers Limited (Unlisted)",
    "indicativeUnlistedSharePrice": "₹945",
    "marketCapitalization": "₹8,233 Crore (Approx.)",
    "lotSize": "100 Shares",
    "52WeekHigh": "₹1,395",
    "52WeekLow": "₹925",
    "faceValue": "₹2",
    "bookValue": "₹208",
    "peRatio": "18.58",
    "pbRatio": "4.5",
    "debtToEquity": "0.02",
    "returnOnEquity": "25+",
    "totalOutstandingShares": "87,125,755",
    "isin": "INE925L01025",
    "depository": "NSDL & CDSL",
    "pan": "AAFCA2302P",
    "cin": "U65993MH2004PLC147890",
    "rta": "Link Intime India Private Limited"
  },

  "financials": {
    "annualReportSummary": "Strong profitability with high margins typical of asset management business. Revenue stable with marginal decline in FY25, but PAT improved due to lower tax and better other income. Excellent ROE and negligible debt highlight financial strength.",

    "incomeStatement": [
      { "label": "Revenue", "fy22": 909, "fy23": 936, "fy24": 1063, "fy25": 1038 },
      { "label": "EBITDA", "fy22": 391, "fy23": 421, "fy24": 471, "fy25": 376 },
      { "label": "EBIT", "fy22": 376, "fy23": 405, "fy24": 461, "fy25": 360 },
      { "label": "PBT", "fy22": 406, "fy23": 439, "fy24": 516, "fy25": 429 },
      { "label": "Net Profit / Loss (PAT)", "fy22": 310, "fy23": 335, "fy24": 403, "fy25": 443 },
      { "label": "EPS", "fy22": 37.78, "fy23": 40.02, "fy24": 47.78, "fy25": 50.86 }
    ],

    "keyRatios": [
      { "label": "Net Profit Margin (%)", "fy22": 34.1, "fy23": 35.79, "fy24": 37.91, "fy25": 42.68 },
      { "label": "EBITDA Margin (%)", "fy22": 43.01, "fy23": 44.98, "fy24": 44.31, "fy25": 36.22 },
      { "label": "Debt-to-Equity", "fy22": "Negligible", "fy23": "0", "fy24": "0", "fy25": "0.02" },
      { "label": "EPS", "fy22": 37.78, "fy23": 40.02, "fy24": 47.78, "fy25": 50.86 }
    ],

    "investorInsight": [
      "High-margin, annuity-based revenue model with strong cash conversion.",
      "PAT grew steadily; FY25 showed improved bottom line despite slight revenue dip.",
      "Negligible debt and robust balance sheet position the company well for growth.",
      "Valuations remain attractive for a premium asset management franchise."
    ]
  },

  "balanceSheet": {
    "assets": [
      { "label": "Fixed Assets", "fy22": 34, "fy23": 29, "fy24": 25, "fy25": 19 },
      { "label": "Investments", "fy22": 621, "fy23": 895, "fy24": 1127, "fy25": 1393 },
      { "label": "Trade Receivables", "fy22": 232, "fy23": 210, "fy24": 225, "fy25": 169 },
      { "label": "Other Assets", "fy22": 397, "fy23": 760, "fy24": 754, "fy25": 618.61 },
      { "label": "Total Assets", "fy22": 1285, "fy23": 1895, "fy24": 2131, "fy25": 2200 }
    ],
    "liabilities": [
      { "label": "Share Capital", "fy22": 16.41, "fy23": 16.74, "fy24": 16.87, "fy25": 17.42 },
      { "label": "Reserves & Surplus", "fy22": 1045, "fy23": 1372, "fy24": 1542, "fy25": 1796 },
      { "label": "Borrowings", "fy22": 0, "fy23": 0, "fy24": 0, "fy25": 0 },
      { "label": "Trade Payables & Other Liabilities", "fy22": 223.59, "fy23": 506.26, "fy24": 572.13, "fy25": 386.58 },
      { "label": "Total Liabilities & Equity", "fy22": 1285, "fy23": 1895, "fy24": 2131, "fy25": 2200 }
    ],
    "insights": "Strong growth in investments and reserves. Debt-free balance sheet with high liquidity."
  },

  "liabilitiesBreakdown": "Minimal borrowings. Liabilities mainly consist of trade payables and operational provisions.",

  "balanceSheetInsights": "Extremely healthy and liquid balance sheet. Equity-heavy with significant reserves supporting future growth and dividend payouts.",

  "cashFlow": {
    "data": [
      { "label": "Operating Cash Flow", "fy22": 363, "fy23": 390, "fy24": 511, "fy25": 211 },
      { "label": "Investing Cash Flow", "fy22": -196, "fy23": -274, "fy24": -257, "fy25": -60 },
      { "label": "Financing Cash Flow", "fy22": -178, "fy23": -12, "fy24": -234, "fy25": -167 }
    ],
    "insights": [
      "Consistent positive operating cash flows driven by core fee income.",
      "Financing cash flows reflect regular dividend distributions.",
      "Strong cash generation supports business scalability."
    ]
  },

  "shareholding": [
    { "year": "Recent", "promoters": "~17-82% (Blackstone majority + founders)", "institutional": "High (Blackstone)", "public": "Minimal" }
  ],

  "promotersManagement": "Blackstone holds majority stake. Professional management with deep experience in asset & wealth management.",

  "management": [
    { "name": "Sunil Rohokale", "role": "MD & CEO", "experience": "30+ Years" },
    { "name": "Bharat Shah", "role": "Whole-time Director", "experience": "30+ Years" },
    { "name": "Sumit Jain", "role": "Chief Investment Officer", "experience": "20+ Years" }
  ],

  "rta": {
    "registrar": "Link Intime India Private Limited",
    "website": "https://www.linkintime.co.in/"
  },

  "managementInsight": "Experienced leadership focused on delivering superior risk-adjusted returns and client-centric solutions in the Indian equity market."
},
{
  "id": 3,
  "name": "Amol Minechem Limited",
  "price": 900,
  "logo": "/images/preipo/image3.jpg",

  "overview": `Amol Minechem Limited (formerly Amol Dicalite Limited) is India's leading and pioneering manufacturer of Perlite products since 1979. The company is the largest producer of Perlite Filter Aid and other Perlite-based products in India. It specializes in manufacturing a wide range of Perlite products used in filtration, cryogenic insulation, horticulture, construction, and industrial applications. The company operates a state-of-the-art manufacturing facility at Kadi, Gujarat.`,

  "products": [
    "Perlite Ore",
    "Expanded Perlite",
    "Perlite Filteraid",
    "Cryogenic Perlite",
    "Thermal Insulation Perlite",
    "Horticulture Perlite",
    "Construction Grade Perlite"
  ],

  "manufacturingUnits": [
    "Kadi, Mehsana District, Gujarat"
  ],

  "clients": [
    "Filtration Industry (Beverages, Pharmaceuticals, Chemicals)",
    "Cryogenic & Industrial Insulation",
    "Horticulture & Agriculture",
    "Oil & Gas, Construction & Refractories"
  ],

  "shareDetails": {
    "companyName": "Amol Minechem Limited (Unlisted)",
    "indicativeUnlistedSharePrice": "₹900",
    "marketCapitalization": "₹74 Crore (Approx.)",
    "lotSize": "50 Shares",
    "52WeekHigh": "₹1,075",
    "52WeekLow": "₹900",
    "faceValue": "₹10",
    "bookValue": "₹846",
    "peRatio": "11.85",
    "pbRatio": "1.06",
    "debtToEquity": "0.09",
    "returnOnEquity": "8.97",
    "totalOutstandingShares": "8,19,135",
    "isin": "INE404C01012",
    "depository": "NSDL & CDSL",
    "pan": "AABCA2807K",
    "cin": "U14100GJ1979PLC003439",
    "rta": "MUFG Intime India Private Limited"
  },

  "financials": {
    "annualReportSummary": "Revenue has shown steady growth from ₹43 Cr in FY22 to ₹63 Cr in FY25. Profitability peaked in FY23-FY24 but moderated in FY25 due to higher employee and raw material costs. The company maintains a strong balance sheet with low debt and healthy reserves.",

    "incomeStatement": [
      { "label": "Revenue", "fy22": 4323, "fy23": 5780, "fy24": 6215, "fy25": 6292 },
      { "label": "EBITDA", "fy22": 235, "fy23": 874, "fy24": 1244, "fy25": 442 },
      { "label": "EBIT", "fy22": 162, "fy23": 809, "fy24": 1188, "fy25": 376 },
      { "label": "PBT", "fy22": 378, "fy23": 1089, "fy24": 1690, "fy25": 830 },
      { "label": "Net Profit / Loss (PAT)", "fy22": 282, "fy23": 1286, "fy24": 1184, "fy25": 622 },
      { "label": "EPS", "fy22": 41.65, "fy23": 157.02, "fy24": 144.57, "fy25": 75.94 }
    ],

    "keyRatios": [
      { "label": "Net Profit Margin (%)", "fy22": 6.52, "fy23": 22.25, "fy24": 19.05, "fy25": 9.89 },
      { "label": "EBITDA Margin (%)", "fy22": 5.44, "fy23": 15.12, "fy24": 20.02, "fy25": 7.02 },
      { "label": "Debt-to-Equity", "fy22": "Low", "fy23": "Low", "fy24": "Low", "fy25": "0.09" },
      { "label": "EPS", "fy22": 41.65, "fy23": 157.02, "fy24": 144.57, "fy25": 75.94 }
    ],

    "investorInsight": [
      "Steady revenue growth driven by strong demand for Perlite products.",
      "Peak profitability in FY24 followed by margin compression in FY25 due to cost pressures.",
      "Low debt and robust reserves provide financial stability.",
      "Niche market leadership supports long-term prospects in specialty minerals."
    ]
  },

  "balanceSheet": {
    "assets": [
      { "label": "Fixed Assets", "fy22": 440, "fy23": 394, "fy24": 356, "fy25": 520 },
      { "label": "Investments", "fy22": 144, "fy23": 220, "fy24": 354, "fy25": 392 },
      { "label": "Trade Receivables", "fy22": 974, "fy23": 877, "fy24": 1379, "fy25": 1295 },
      { "label": "Inventory", "fy22": 674, "fy23": 671, "fy24": 490, "fy25": 516 },
      { "label": "Other Assets", "fy22": 3667, "fy23": 4590, "fy24": 5298, "fy25": 5560 },
      { "label": "Total Assets", "fy22": 5899, "fy23": 6752, "fy24": 7877, "fy25": 8283 }
    ],
    "liabilities": [
      { "label": "Share Capital", "fy22": 67.7, "fy23": 81.9, "fy24": 81.9, "fy25": 81.91 },
      { "label": "Reserves & Surplus", "fy22": 3944, "fy23": 5140, "fy24": 6293, "fy25": 6849 },
      { "label": "Borrowings", "fy22": "Low", "fy23": "Low", "fy24": "Low", "fy25": "Low" },
      { "label": "Total Equity & Liabilities", "fy22": 5899, "fy23": 6752, "fy24": 7877, "fy25": 8283 }
    ],
    "insights": "Strong equity base with reserves growing consistently. Asset growth supported by other assets and receivables."
  },

  "liabilitiesBreakdown": "Low borrowings with debt-to-equity ratio of 0.09. Liabilities are primarily operational (trade payables and provisions).",

  "balanceSheetInsights": "Extremely healthy, equity-heavy, and low-leverage balance sheet with significant reserves and strong liquidity.",

  "cashFlow": {
    "data": [
      { "label": "Operating Cash Flow", "fy22": "Positive", "fy23": "Positive", "fy24": "Positive", "fy25": "Positive" },
      { "label": "Investing Cash Flow", "fy22": "-", "fy23": "-", "fy24": "-", "fy25": "-" },
      { "label": "Financing Cash Flow", "fy22": -31, "fy23": -596, "fy24": -78, "fy25": -116 }
    ],
    "insights": [
      "Consistent positive operating cash flows.",
      "Financing cash flows reflect dividend payouts.",
      "Stable cash position maintained."
    ]
  },

  "shareholding": [
    { "year": "Recent", "promoters": "High (Promoter & Promoter Group)", "institutional": "Minimal", "public": "Low" }
  ],

  "promotersManagement": "Promoter-driven company with deep domain expertise in Perlite manufacturing and minerals processing.",

  "management": [
    { "name": "Shreyas C. Sheth", "role": "Chairman & Managing Director", "experience": "40+ Years" },
    { "name": "Priti S. Sheth", "role": "Director", "experience": "25+ Years" },
    { "name": "Naishadh I. Parikh", "role": "Director", "experience": "25+ Years" }
  ],

  "rta": {
    "registrar": "MUFG Intime India Private Limited",
    "website": "https://www.in.mpms.mufg.com/"
  },

  "managementInsight": "Experienced leadership team with strong focus on operational excellence, quality, and maintaining leadership in the Indian Perlite market."
},
{
  "id": 4,
  "name": "Anheuser-Busch InBev SABMiller India Limited",
  "price": 495,
  "logo": "/images/preipo/image4.png",

  "overview": `Anheuser-Busch InBev SABMiller India Limited (formerly SABMiller India Limited) is a subsidiary of the global brewing leader Anheuser-Busch InBev. The company manufactures and markets a premium portfolio of beer brands including Budweiser, Corona, Stella Artois, Hoegaarden, Beck's and others. It operates through owned and contract breweries across India and is focused on premiumisation and expanding market share in the fast-growing Indian beer industry.`,

  "products": [
    "Budweiser",
    "Corona",
    "Stella Artois",
    "Hoegaarden",
    "Beck's",
    "Other Premium Beers"
  ],

  "manufacturingUnits": [
    "Multiple Owned and Contract Breweries across India"
  ],

  "clients": [
    "Distributors & Retail Partners (On-Premise & Off-Premise)"
  ],

  "shareDetails": {
    "companyName": "Anheuser-Busch InBev SABMiller India Limited (Unlisted)",
    "indicativeUnlistedSharePrice": "₹495",
    "marketCapitalization": "₹45,956 Crore (Approx.)",
    "lotSize": "100 Shares",
    "52WeekHigh": "₹620",
    "52WeekLow": "₹350",
    "faceValue": "₹10",
    "bookValue": "₹2.37",
    "peRatio": "-65.2",
    "pbRatio": "High (Negative due to accumulated losses)",
    "debtToEquity": "High",
    "returnOnEquity": "Negative",
    "totalOutstandingShares": "1,01,64,31,695",
    "isin": "INE038G01019",
    "depository": "NSDL & CDSL",
    "pan": "AAICS2238R",
    "cin": "U15511KA1988PLC009325",
    "rta": "Link Intime India Private Limited"
  },

  "financials": {
    "annualReportSummary": "Steady revenue growth over the years but continued losses due to high operating and marketing expenses. EBITDA improved sharply in FY25, nearing breakeven. Operations are strongly supported by the global parent AB InBev.",

    "incomeStatement": [
      { "label": "Revenue", "fy22": 3608, "fy23": 6177, "fy24": 7302, "fy25": 7891 },
      { "label": "EBITDA", "fy22": -207, "fy23": -230, "fy24": -286, "fy25": -22 },
      { "label": "EBIT", "fy22": -433, "fy23": -417, "fy24": -484, "fy25": -242 },
      { "label": "PBT", "fy22": -365, "fy23": -438, "fy24": -591, "fy25": -356 },
      { "label": "Net Profit / Loss (PAT)", "fy22": -365, "fy23": -438, "fy24": -591, "fy25": -356 },
      { "label": "EPS", "fy22": -4.07, "fy23": -4.72, "fy24": -6.37, "fy25": -3.50 }
    ],

    "keyRatios": [
      { "label": "Net Profit Margin (%)", "fy22": -10.12, "fy23": -7.09, "fy24": -8.09, "fy25": -4.51 },
      { "label": "EBITDA Margin (%)", "fy22": -5.74, "fy23": -3.72, "fy24": -3.92, "fy25": -0.28 },
      { "label": "EPS", "fy22": -4.07, "fy23": -4.72, "fy24": -6.37, "fy25": -3.50 }
    ],

    "investorInsight": [
      "Consistent revenue growth driven by premium beer demand.",
      "Significant EBITDA improvement in FY25 (near breakeven).",
      "Losses reduced in FY25 due to better cost management.",
      "Strong brand value and parent backing support long-term potential."
    ]
  },

  "balanceSheet": {
    "assets": [
      { "label": "Fixed Assets", "fy22": 1180, "fy23": 1094, "fy24": 1058, "fy25": 1123 },
      { "label": "CWIP", "fy22": 14.3, "fy23": 80.5, "fy24": 3, "fy25": 61 },
      { "label": "Investments", "fy22": 0, "fy23": 0, "fy24": 1, "fy25": 1 },
      { "label": "Trade Receivables", "fy22": 440, "fy23": 614, "fy24": 617, "fy25": 643 },
      { "label": "Inventory", "fy22": 610, "fy23": 1046, "fy24": 799, "fy25": 867 },
      { "label": "Other Assets", "fy22": 433.9, "fy23": 554, "fy24": 900, "fy25": 998 },
      { "label": "Total Assets", "fy22": 2678.2, "fy23": 3388.5, "fy24": 3378, "fy25": 3693 }
    ],
    "liabilities": [
      { "label": "Share Capital", "fy22": 897, "fy23": 928.4, "fy24": 928.4, "fy25": 1016.4 },
      { "label": "Reserves", "fy22": 55.2, "fy23": -190, "fy24": -779, "fy25": -776 },
      { "label": "Borrowings", "fy22": 347, "fy23": 926, "fy24": 1589, "fy25": 1665 },
      { "label": "Trade Payables", "fy22": 583, "fy23": 852, "fy24": 754, "fy25": 910 },
      { "label": "Other Liabilities", "fy22": 796, "fy23": 872.1, "fy24": 885.6, "fy25": 877.6 },
      { "label": "Total Liabilities", "fy22": 2678.2, "fy23": 3388.5, "fy24": 3378, "fy25": 3693 }
    ],
    "insights": "Net worth remains low due to accumulated losses. Borrowings have increased significantly to support operations."
  },

  "liabilitiesBreakdown": "High borrowings (₹1665 Cr in FY25). Negative reserves due to continuous losses. Share capital increased in FY25 through preferential allotment.",

  "balanceSheetInsights": "Asset base growing with inventory and other assets. Weak equity position offset by strong parent company support.",

  "cashFlow": {
    "data": [],
    "insights": [
      "Operating cash flow showed improvement in FY25.",
      "Financing activities supported by parent infusions and increased borrowings."
    ]
  },

  "shareholding": [
    { "year": "Recent", "promoters": "99.67%", "institutional": "Minimal", "public": "0.33%" }
  ],

  "promotersManagement": "Majority owned by Anheuser-Busch InBev (global leader).",

  "management": [
    { "name": "Mahesh Kumar Mittal", "role": "Whole Time Director", "experience": "Senior AB InBev leadership" }
  ],

  "rta": {
    "registrar": "Link Intime India Private Limited",
    "website": "https://www.linkintime.co.in/"
  },

  "managementInsight": "Professional management backed by global AB InBev expertise, focusing on premium beer growth, operational efficiency, and market expansion in India."
},

   {
  "id": 109,
  "name": "OYO (Oravel Stays Limited)",
  "price": 37,
  "logo": "/images/oyo.png",

  "overview": `OYO, officially known as Oravel Stays Limited, is one of India’s most well-known hospitality technology companies. Founded in 2013 by Ritesh Agarwal, OYO disrupted the traditional hotel industry by standardizing budget accommodations and leveraging technology to connect property owners with travelers. Over the years, OYO has grown from a small Indian startup into a global hospitality brand operating across multiple countries.

OYO operates as a hospitality aggregation and technology platform. Instead of owning hotels, it partners with hotel owners, homestay operators, and property managers. The company provides branding, technology infrastructure (including pricing algorithms, booking systems, and operational tools), marketing, and operational support, while property owners benefit from higher occupancy and standardized services.

Over time, OYO has diversified its offerings beyond budget hotels into premium and mid-scale hotels (Townhouse, Sunday Hotels), vacation homes, serviced apartments, long-term stays, and corporate accommodations. This asset-light model allows OYO to scale rapidly with comparatively lower capital expenditure.

India remains OYO’s largest and most important market (contributing ~20-25% of revenue), while international operations across Southeast Asia, the Middle East, Europe, and the United States (including the Motel 6 acquisition) have been strategically restructured to improve profitability. OYO’s strong brand recall and deep penetration in Tier-2 and Tier-3 cities strengthen its long-term growth prospects.

Historically criticized for aggressive expansion and high losses, OYO has shifted its focus toward cost optimization, operational efficiency, and profitability. The company has reported improving EBITDA margins, reduced losses turning into modest profits, and positive operating cash flows in recent years. FY24 marked the first full-year profit, and FY25 showed continued stabilization with revenue growth and EBITDA expansion, strengthening its pre-IPO investment narrative.

The Indian hospitality sector is witnessing strong tailwinds from rising domestic tourism, increasing middle-class travel, corporate demand, and recovery in international travel. OYO is well-positioned to benefit from this with its tech-driven model, though challenges like high finance costs, competition, and global economic volatility remain.`,

  "products": [
    "Budget Hotels",
    "Premium & Mid-scale Hotels",
    "Vacation Homes",
    "Serviced Apartments",
    "Long-term Stays",
    "Corporate Accommodations"
  ],

  "manufacturingUnits": [],

  "clients": [
    "Individual Travelers",
    "Corporate Travelers",
    "Hotel Owners",
    "Homestay Operators",
    "Property Managers"
  ],

  "shareDetails": {
    "companyName": "Oravel Stays Limited (OYO – Unlisted)",
    "indicativeUnlistedSharePrice": "₹22 - ₹37",
    "marketCapitalization": "₹29,000 – ₹36,000 Crore (Approx.)",
    "lotSize": "500 - 1,000 Shares",
    "52WeekHigh": "₹58",
    "52WeekLow": "₹20",
    "faceValue": "₹1",
    "bookValue": "₹2.7 - ₹5.4",
    "peRatio": "115 - 145",
    "pbRatio": "6 - 8.5",
    "debtToEquity": "1.89 - 2.27",
    "returnOnEquity": "5.13% - 6.47%",
    "totalOutstandingShares": "1,400 Crore (Approx.)",
    "isin": "INE561T01021",
    "depository": "NSDL & CDSL",
    "pan": "AABCO6063D",
    "cin": "U63090GJ2012PLC107088",
    "rta": "MUFG Intime India Pvt. Ltd. (Link Intime)"
  },

  "financials": {
    "annualReportSummary": "OYO has shown a strong turnaround. Revenue grew from ₹4,781 Cr in FY22 to ₹5,389 Cr in FY24 and further to ₹6,253 Cr in FY25. EBITDA turned positive in FY24 (~₹860-1,100 Cr range across reports) and improved in FY25. The company posted its first full-year net profit in FY24 (₹230 Cr) and continued with modest profit in FY25 (₹245 Cr, supported by deferred tax). Focus has shifted to operational efficiency, cost control, and premium segment growth. Finance costs remain elevated due to borrowings for restructuring and acquisitions.",

    "incomeStatement": [
      { "label": "Revenue", "fy22": 4781, "fy23": 5464, "fy24": 5389, "fy25": 6253 },
      { "label": "EBITDA", "fy22": -1160, "fy23": -374, "fy24": 708, "fy25": 1036 },
      { "label": "Operating Profit", "fy22": -1160, "fy23": -374, "fy24": 708, "fy25": 1036 },
      { "label": "Profit Before Tax", "fy22": -1919, "fy23": -1286, "fy24": 236, "fy25": -489 },
      { "label": "Net Profit / Loss", "fy22": -1942, "fy23": -1286, "fy24": 230, "fy25": 245 },
      { "label": "EPS", "fy22": -14.63, "fy23": -9.68, "fy24": 1.72, "fy25": 0.36 }
    ],

    "keyRatios": [
      { "label": "ROE (%)", "fy22": "-", "fy23": "-", "fy24": "25.49", "fy25": "5.13 - 6.47" },
      { "label": "ROCE (%)", "fy22": "-", "fy23": "-", "fy24": "13.39", "fy25": "4.43" },
      { "label": "Net Profit Margin (%)", "fy22": -40.62, "fy23": -23.54, "fy24": 4.27, "fy25": "3.92" },
      { "label": "EBITDA Margin (%)", "fy22": -24.26, "fy23": -6.84, "fy24": 13.14, "fy25": "16.57" },
      { "label": "Debt-to-Equity", "fy22": "3.23", "fy23": "8.71", "fy24": "4.00", "fy25": "1.89 - 2.27" },
      { "label": "EPS", "fy22": -14.63, "fy23": -9.68, "fy24": 1.72, "fy25": 0.36 }
    ],

    "investorInsight": [
      "OYO has successfully transitioned from heavy losses to profitability through aggressive cost optimization and network restructuring.",
      "EBITDA turned consistently positive with improving margins, supported by higher contribution from premium formats.",
      "Asset-light model enables scalable growth with lower capex intensity.",
      "Positive operating cash flow in recent years and IPO preparations enhance long-term appeal, though high borrowings and finance costs need monitoring."
    ]
  },

  "balanceSheet": {
    "assets": [
      { "label": "Fixed Assets", "fy22": 1605, "fy23": 1582, "fy24": 1490, "fy25": 4998 },
      { "label": "Investments", "fy22": 605, "fy23": 510, "fy24": 455, "fy25": 532 },
      { "label": "Trade Receivables", "fy22": 256, "fy23": 158, "fy24": 203, "fy25": 488 },
      { "label": "Other Assets", "fy22": 5985, "fy23": 5682, "fy24": 4294, "fy25": 10646 },
      { "label": "Total Assets", "fy22": 8452, "fy23": 7932, "fy24": 6443, "fy25": 16695 }
    ],
    "liabilities": [
      { "label": "Share Capital", "fy22": 133, "fy23": 133, "fy24": 134, "fy25": 679 },
      { "label": "Reserves & Surplus", "fy22": 1311, "fy23": 450, "fy24": 767, "fy25": 3108 },
      { "label": "Borrowings", "fy22": 4664, "fy23": 5071, "fy24": 3603, "fy25": 7144 },
      { "label": "Trade Payables", "fy22": 1087, "fy23": 935, "fy24": 961, "fy25": 1240 },
      { "label": "Other Liabilities", "fy22": 1257, "fy23": 1344, "fy24": 978, "fy25": 4524 },
      { "label": "Total Liabilities & Equity", "fy22": 8452, "fy23": 7932, "fy24": 6443, "fy25": 16695 }
    ],
    "insights": "Significant expansion in assets in FY25 driven by acquisitions and operations. Borrowings remain material but debt-to-equity has moderated. Equity base strengthened via infusions."
  },

  "liabilitiesBreakdown": "Short-term liabilities primarily include trade payables and other current obligations. Long-term borrowings are elevated (₹7,144 Cr in FY25) due to restructuring, acquisitions (e.g., Motel 6), and working capital needs. Other obligations relate to lease liabilities and deferred payments typical in the hospitality tech sector.",

  "balanceSheetInsights": "The balance sheet reflects an improving but still leveraged position. Financial stability has strengthened with positive EBITDA and PAT, but high borrowings and finance costs pose solvency risks if growth slows. Leverage has moderated from peak levels, and asset growth supports scalability. Overall, the company demonstrates better solvency compared to loss-making years.",

  "cashFlow": {
    "data": [
      { "label": "Operating Cash Flow", "fy22": -922, "fy23": 142, "fy24": 598, "fy25": 321 },
      { "label": "Investing Cash Flow", "fy22": -711, "fy23": -109, "fy24": 1425, "fy25": -4212 },
      { "label": "Financing Cash Flow", "fy22": 704, "fy23": -705, "fy24": -2413, "fy25": 4160 }
    ],
    "insights": [
      "Operating cash flow turned positive from FY23, indicating improved working capital management and operational health.",
      "Investing cash flow in FY25 reflects heavy outflows for acquisitions and growth initiatives.",
      "Financing activities show equity infusions and debt movements to support expansion.",
      "Overall cash position has stabilized, reflecting better liquidity management."
    ]
  },

  "shareholding": [
    { "year": "FY24/FY25", "promoters": "34.05%", "institutional": "High (Funds ~55-57%)", "public": "65.95%" }
  ],

  "promotersManagement": "Founder Ritesh Agarwal holds a significant promoter stake (~25-32% through direct and entities like RA Hospitality). The company has a mix of founder-led vision and institutional backing from global funds like SoftBank.",

  "management": [
    { "name": "Ritesh Agarwal", "role": "Founder, Chairman & CEO", "experience": "12+ Years" },
    { "name": "Aditya Ghosh", "role": "Executive Director", "experience": "26+ Years" },
    { "name": "Abhishek Gupta", "role": "Chief Financial Officer", "experience": "20+ Years" }
  ],

  "rta": {
    "registrar": "MUFG Intime India Pvt. Ltd. (formerly Link Intime)",
    "website": "https://www.linkintime.co.in/"
  },

  "managementInsight": "Under Ritesh Agarwal’s leadership, OYO has evolved from a high-growth, loss-making startup to a profitability-focused organization with strong operational discipline. The professional executive team brings deep expertise in hospitality, finance, and technology. Corporate governance has improved with better cost controls and transparency, boosting investor confidence ahead of the anticipated IPO. The vision centers on leveraging technology for scalable, asset-light growth while expanding into premium segments globally."
}

  ];
};





