// src/api/mockApi.js — ONLY JAVASCRIPT, NO JSX!

export const fetchIPOs = async () => {
  return [

    // Existing IPOs (from your earlier file)
    {
      id: 154,
      name: "Vidya Wires",
      fullName: "Vidya Wires Ltd",
      logo: "/images/vidya-logo.png",
      open: "03 Dec 2025",
      close: "05 Dec 2025",
      listing: "10 Dec 2025",
      price: "48-52",
      lot: 288,
      subscription: "26.16x",
      listingPrice: null,
      performance: null,
      type: "Mainboard",
      status: "live",
    },
    {
      id: 155,
      name: "Aequs Limited",
      fullName: "Aequs Aerospace",
      logo: "/images/aequs.png",
      open: "03 Dec 2025",
      close: "05 Dec 2025",
      listing: "10 Dec 2025",
      price: "118-124",
      lot: 120,
      subscription: "101.01x",
      listingPrice: null,
      performance: null,
      type: "Mainboard",
      status: "live",
    },
    {
      id: 156,
      name: "Meesho Limited",
      fullName: "Meesho (Social Commerce)",
      logo: "/images/meesho.jpg",
      open: "03 Dec 2025",
      close: "05 Dec 2025",
      listing: "10 Dec 2025",
      price: "105-111",
      lot: 135,
      subscription: "78.88x",
      listingPrice: null,
      performance: null,
      type: "Mainboard",
      status: "live",
    },
     {
    id: 161,
    name: "Sai Life Sciences",
    fullName: "Sai Life Sciences Limited",
    logo: "/images/sai-science.jpg",
    open: "04 Dec 2025",
    close: "06 Dec 2025",
    listing: "11 Dec 2025",
    price: "520-548",
    lot: 27,
    subscription: "89.10x",
    listingPrice: null,
    performance: null,
    type: "Mainboard",
    status: "live",
  },
    {
      id: 157,
      name: "Sudeep Pharma",
      fullName: "Sudeep Pharma Pvt Ltd",
      open: "21 Nov 2025",
      close: "25 Nov 2025",
      listing: "28 Nov 2025",
      price: "593",
      lot: 25,
      subscription: "93.32x",
      listingPrice: "730",
      performance: "+23.10%",
      type: "Mainboard",
      status: "closed",
    },
    {
  id: 162,
  name: "Unicon Gears",
  fullName: "Unicon Gears Private Ltd",
  open: "12 Dec 2025",
  close: "16 Dec 2025",
  listing: "19 Dec 2025",
  price: "84-88",
  lot: 1600,
  subscription: "55.92x",
  listingPrice: null,
  performance: null,
  type: "SME",
  status: "live",
},
{
  id: 163,
  name: "Oxyfresh Labs",
  fullName: "Oxyfresh Laboratories Limited",
  open: "27 Nov 2025",
  close: "29 Nov 2025",
  listing: "04 Dec 2025",
  price: "96",
  lot: 1200,
  subscription: "32.48x",
  listingPrice: "128",
  performance: "+33.33%",
  type: "SME",
  status: "closed",
},
{
  id: 164,
  name: "Suntrack Infra",
  fullName: "Suntrack Infra Solutions Ltd",
  open: "09 Dec 2025",
  close: "11 Dec 2025",
  listing: "16 Dec 2025",
  price: "78-82",
  lot: 1600,
  subscription: "21.70x",
  listingPrice: null,
  performance: null,
  type: "SME",
  status: "live",
},
{
  id: 165,
  name: "Blaze Automation",
  fullName: "Blaze Automation Systems Ltd",
  open: "18 Nov 2025",
  close: "20 Nov 2025",
  listing: "25 Nov 2025",
  price: "132",
  lot: 1000,
  subscription: "42.10x",
  listingPrice: "162",
  performance: "+22.73%",
  type: "SME",
  status: "closed",
},
{
  id: 166,
  name: "Metro Biofuels",
  fullName: "Metro Biofuels Limited",
  open: "06 Dec 2025",
  close: "09 Dec 2025",
  listing: "13 Dec 2025",
  price: "108-112",
  lot: 1200,
  subscription: "27.51x",
  listingPrice: null,
  performance: null,
  type: "SME",
  status: "live",
},
  
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
    "logo": "/images/preipo/imag.jpg"
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
    "logo": "/images/preipo/image.png"
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
    "logo": "/images/preipo/image.jpg"
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
    "logo": "/images/preipo/image.jpg"
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
    "logo": "/images/preipo/image.jpg"
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
    "logo": "/images/preipo/image.png"
  },
  {
    "id": 48,
    "name": "HCIN Networks Private Limited",
    "price": 219,
    "depository": "NSDL & CDSL",
    "minLotSize": 600,
    "status": "upcoming",
    "logo": "/images/preipo/image.jpg"
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
    "logo": "/images/preipo/image49.jpg"
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
    "logo": "/images/preipo/image53.jpg"
  },
  {
    "id": 54,
    "name": "Himalayan Heli Services",
    "price": 219,
    "depository": "NSDL & CDSL",
    "minLotSize": 500,
    "status": "upcoming",
    "logo": "/images/preipo/image54.jpg"
  },
  {
    "id": 55,
    "name": "Hindon Mercantile Limited",
    "price": 1094,
    "depository": "NSDL & CDSL",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/image55.png"
  },
  {
    "id": 56,
    "name": "Hindustan Power Exchange Limited (HPX India)",
    "price": 42,
    "depository": "NSDL & CDSL",
    "minLotSize": 1000,
    "status": "upcoming",
    "logo": "/images/preipo/image56.jpg"
  },
  {
    "id": 57,
    "name": "Hindustan Times Unlisted Shares",
    "price": 1188,
    "depository": "NSDL ONLY",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/image57.png"
  },
  {
    "id": 58,
    "name": "Hindusthan Engineering & Industries Limited Unlisted Shares",
    "price": 1469,
    "depository": "NSDL & CDSL",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/image58.jpg"
  },
  {
    "id": 59,
    "name": "Hive Hostels",
    "price": 3000,
    "depository": "NSDL & CDSL",
    "minLotSize": 500,
    "status": "upcoming",
    "logo": "/images/preipo/image59.png"
  },
  {
    "id": 60,
    "name": "Honeywell Electrical Devices and Systems India Unlisted Shares",
    "price": 10625,
    "depository": "NSDL & CDSL",
    "minLotSize": 10,
    "status": "upcoming",
    "logo": "/images/preipo/image60.png"
  },
  {
    "id": 61,
    "name": "House of Kieraya Limited (Furlenco)",
    "price": 235,
    "depository": "NSDL & CDSL",
    "minLotSize": 500,
    "status": "upcoming",
    "logo": "/images/preipo/image61.jpg"
  },
  {
    "id": 62,
    "name": "ICEX (Indian Commodity Exchange) Limited Unlisted Shares",
    "price": 5,
    "depository": "NSDL & CDSL",
    "minLotSize": 5000,
    "status": "upcoming",
    "logo": "/images/preipo/image62.png"
  },
  {
    "id": 63,
    "name": "ICL Fincorp Limited Unlisted Shares",
    "price": 32,
    "depository": "NSDL & CDSL",
    "minLotSize": 1000,
    "status": "upcoming",
    "logo": "/images/preipo/image63.png"
  },
  {
    "id": 64,
    "name": "Imperative Business Ventures Limited",
    "price": 175,
    "depository": "NSDL & CDSL",
    "minLotSize": 1000,
    "status": "upcoming",
    "logo": "/images/preipo/image64.jpg"
  },
  {
    "id": 65,
    "name": "Incred Holdings Limited Unlisted Shares",
    "price": 207,
    "depository": "NSDL & CDSL",
    "minLotSize": 250,
    "status": "upcoming",
    "logo": "/images/preipo/image65.png"
  },
  {
    "id": 66,
    "name": "India Carbon Limited Unlisted Shares",
    "price": 1119,
    "depository": "NSDL & CDSL",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/image66.png"
  },
  {
    "id": 67,
    "name": "India Exposition Mart Ltd Unlisted Share",
    "price": 157,
    "depository": "NSDL & CDSL",
    "minLotSize": 500,
    "status": "upcoming",
    "logo": "/images/preipo/image67.png"
  },
  {
    "id": 68,
    "name": "Indian Potash Limited Unlisted Share",
    "price": 4063,
    "depository": "NSDL & CDSL",
    "minLotSize": 25,
    "status": "upcoming",
    "logo": "/images/preipo/image68.png"
  },
  {
    "id": 69,
    "name": "Indofil Industries Limited Unlisted Shares",
    "price": 2119,
    "depository": "NSDL & CDSL",
    "minLotSize": 25,
    "status": "upcoming",
    "logo": "/images/preipo/image69.jpg"
  },
  {
    "id": 70,
    "name": "Inkel Limited Unlisted Shares",
    "price": 24,
    "depository": "NSDL & CDSL",
    "minLotSize": 1000,
    "status": "upcoming",
    "logo": "/images/preipo/image70.png"
  },
  {
    "id": 71,
    "name": "Innov8 Workspaces India Limited",
    "price": 73,
    "depository": "NSDL & CDSL",
    "minLotSize": 1000,
    "status": "upcoming",
    "logo": "/images/preipo/image71.png"
  },
  {
    "id": 72,
    "name": "Inox Clean Energy Limited",
    "price": 994,
    "depository": "NSDL & CDSL",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/image72.jpg"
  },
  {
    "id": 73,
    "name": "Inox Leasing and Finance Limited Unlisted Shares",
    "price": 20625,
    "depository": "NSDL & CDSL",
    "minLotSize": 25,
    "status": "upcoming",
    "logo": "/images/preipo/image73.png"
  },
  {
    "id": 74,
    "name": "Inox Renewable Solutions Limited",
    "price": 719,
    "depository": "NSDL & CDSL",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/image74.jpg"
  },
  {
    "id": 75,
    "name": "Insolare Energy Unlisted Shares",
    "price": 248,
    "depository": "NSDL & CDSL",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/image75.png"
  },
  {
    "id": 76,
    "name": "Jupiter International Limited",
    "price": 444,
    "depository": "NSDL & CDSL",
    "minLotSize": 500,
    "status": "upcoming",
    "logo": "/images/preipo/image76.jpg"
  },
  {
    "id": 77,
    "name": "KLM Axiva Finvest Unlisted Shares Price",
    "price": 23,
    "depository": "NSDL & CDSL",
    "minLotSize": 2000,
    "status": "upcoming",
    "logo": "/images/preipo/image77.jpg"
  },
  {
    "id": 78,
    "name": "KURLON Enterprise Limited Unlisted Shares",
    "price": 563,
    "depository": "NSDL & CDSL",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/image78.jpg"
  },
  {
    "id": 79,
    "name": "Kanara Consumer Products (Formerly Kurl-on Limited) Unlisted Shares",
    "price": 1282,
    "depository": "NSDL & CDSL",
    "minLotSize": 50,
    "status": "upcoming",
    "logo": "/images/preipo/image79.png"
  },
  {
    "id": 80,
    "name": "Kannur International Airport Limited Unlisted Shares",
    "price": 163,
    "depository": "NSDL & CDSL",
    "minLotSize": 250,
    "status": "upcoming",
    "logo": "/images/preipo/image80.png"
  },
  {
    "id": 81,
    "name": "Kineco Limited Unlisted Share",
    "price": 4375,
    "depository": "NSDL & CDSL",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/image81.png"
  },
  {
    "id": 82,
    "name": "LAVA International Limited Unlisted Shares",
    "price": 48,
    "depository": "NSDL & CDSL",
    "minLotSize": 1000,
    "status": "upcoming",
    "logo": "/images/preipo/image82.png"
  },
  {
    "id": 83,
    "name": "Lakeshore Hospital Unlisted Share Price",
    "price": 144,
    "depository": "NSDL & CDSL",
    "minLotSize": 500,
    "status": "upcoming",
    "logo": "/images/preipo/image83.png"
  },
  {
    "id": 84,
    "name": "Lords Mark Industries Limited",
    "price": 100,
    "depository": "NSDL & CDSL",
    "minLotSize": 500,
    "status": "upcoming",
    "logo": "/images/preipo/image84.png"
  },
  {
    "id": 85,
    "name": "Machint Solutions Limited",
    "price": 335,
    "depository": "NSDL & CDSL",
    "minLotSize": 500,
    "status": "upcoming",
    "logo": "/images/preipo/image85.png"
  },
  {
    "id": 86,
    "name": "Madbow Ventures Unlisted Shares",
    "price": 44,
    "depository": "NSDL & CDSL",
    "minLotSize": 1000,
    "status": "upcoming",
    "logo": "/images/preipo/image86.png"
  },
  {
    "id": 87,
    "name": "Madhur Iron and Steel (India)",
    "price": 173,
    "depository": "NSDL & CDSL",
    "minLotSize": 5000,
    "status": "upcoming",
    "logo": "/images/preipo/image87.png"
  },
  {
    "id": 88,
    "name": "Maharaja Shree Umaid Mills Unlisted Shares",
    "price": 169,
    "depository": "NSDL & CDSL",
    "minLotSize": 250,
    "status": "upcoming",
    "logo": "/images/preipo/image88.png"
  },
  {
    "id": 89,
    "name": "Maharashtra Knowledge Corporation (MKCL) Limited Unlisted Shares",
    "price": 544,
    "depository": "NSDL & CDSL",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/image89.png"
  },
  {
    "id": 90,
    "name": "Manipal Payment & Identity Solutions Ltd (Manipal Cards)",
    "price": 544,
    "depository": "NSDL & CDSL",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/image90.png"
  },
  {
    "id": 91,
    "name": "Manjushree Technopack India Limited Unlisted Shares",
    "price": 1282,
    "depository": "NSDL & CDSL",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/image91.jpg"
  },
  {
    "id": 92,
    "name": "Market Simplified Unlisted Shares Price",
    "price": 43,
    "depository": "NSDL & CDSL",
    "minLotSize": 1000,
    "status": "upcoming",
    "logo": "/images/preipo/image92.png"
  },
  {
    "id": 93,
    "name": "Martin and Harris Laboratories Limited Unlisted Shares",
    "price": 1188,
    "depository": "NSDL Only",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/image93.png"
  },
  {
    "id": 94,
    "name": "Matrix Gas And Renewables Unlisted Shares",
    "price": 38,
    "depository": "NSDL & CDSL",
    "minLotSize": 1000,
    "status": "upcoming",
    "logo": "/images/preipo/image94.png"
  },
  {
    "id": 95,
    "name": "Maverick Simulation Solutions Limited",
    "price": 2750,
    "depository": "NSDL & CDSL",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/image95.png"
  },
  {
    "id": 96,
    "name": "Maxvalue Credits and Investments Unlisted Shares",
    "price": 6,
    "depository": "NSDL & CDSL",
    "minLotSize": 5000,
    "status": "upcoming",
    "logo": "/images/preipo/image96.jpg"
  },
  {
    "id": 97,
    "name": "Merino Industries Limited Unlisted Shares",
    "price": 3969,
    "depository": "NSDL & CDSL",
    "minLotSize": 10,
    "status": "upcoming",
    "logo": "/images/preipo/image97.png"
  },
  {
    "id": 98,
    "name": "Metropolitan Stock Exchange (MSEI) Unlisted Shares",
    "price": 4,
    "depository": "NSDL & CDSL",
    "minLotSize": 10000,
    "status": "upcoming",
    "logo": "/images/preipo/image98.jpg"
  },
  {
    "id": 99,
    "name": "Midland Micro Finance Limited Unlisted Shares",
    "price": 244,
    "depository": "NSDL & CDSL",
    "minLotSize": 500,
    "status": "upcoming",
    "logo": "/images/preipo/image99.jpg"
  },
  {
    "id": 100,
    "name": "Milton Cycle Industries Limited Unlisted Shares",
    "price": 244,
    "depository": "NSDL ONLY",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/image100.jpg"
  },
  {
    "id": 101,
    "name": "Mohan Meakin Limited Unlisted Shares",
    "price": 2657,
    "depository": "NSDL & CDSL",
    "minLotSize": 50,
    "status": "upcoming",
    "logo": "/images/preipo/image101.png"
  },
  {
    "id": 102,
    "name": "Motilal Oswal Home Finance Limited Unlisted Shares",
    "price": 17,
    "depository": "NSDL & CDSL",
    "minLotSize": 2000,
    "status": "upcoming",
    "logo": "/images/preipo/image102.png"
  },
  {
    "id": 103,
    "name": "NCL Buildtek Limited (Previously NCL Alltek & Seccolor Limited) Unlisted Shares",
    "price": 285,
    "depository": "NSDL & CDSL",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/image103.png"
  },
  {
    "id": 104,
    "name": "NCL Holdings Unlisted Shares",
    "price": 160,
    "depository": "NSDL & CDSL",
    "minLotSize": 250,
    "status": "upcoming",
    "logo": "/images/preipo/image104.png"
  },
  {
    "id": 105,
    "name": "NSE India Limited Unlisted Shares",
    "price": 2438,
    "depository": "NSDL & CDSL",
    "minLotSize": 250,
    "status": "upcoming",
    "logo": "/images/preipo/image105.png"
  },
  {
    "id": 106,
    "name": "National Commodity & Derivatives Exchange (NCDEX) Limited Unlisted Shares",
    "price": 600,
    "depository": "NSDL & CDSL",
    "minLotSize": 500,
    "status": "upcoming",
    "logo": "/images/preipo/image106.jpg"
  },
  {
    "id": 107,
    "name": "National E-Repository Limited (NeRL)",
    "price": 78,
    "depository": "NSDL & CDSL",
    "minLotSize": 2000,
    "status": "upcoming",
    "logo": "/images/preipo/image107.jpg"
  },
  {
    "id": 108,
    "name": "Nilliampathy Tea & Produce Company Limites Unlisted Shares",
    "price": 687,
    "depository": "NSDL & CDSL",
    "minLotSize": 50,
    "status": "upcoming",
    "logo": "/images/preipo/image108.jpg"
  },
  {
    "id": 109,
    "name": "ORAVEL STAYS LIMITED (Oyo Unlisted Shares)",
    "price": 37,
    "depository": "NSDL & CDSL",
    "minLotSize": 1000,
    "status": "upcoming",
    "logo": "/images/preipo/image109.jpg"
  },
  {
    "id": 110,
    "name": "ORBIS FINANCIAL CORPORATION Unlisted Shares",
    "price": 582,
    "depository": "NSDL & CDSL",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/image110.jpg"
  },
  {
    "id": 111,
    "name": "Onix Renewable Limited",
    "price": 95,
    "depository": "NSDL & CDSL",
    "minLotSize": 1000,
    "status": "upcoming",
    "logo": "/images/preipo/image111.jpg"
  },
  {
    "id": 112,
    "name": "Otis Elevator (India) Limited Unlisted Shares",
    "price": 4688,
    "depository": "NSDL & CDSL",
    "minLotSize": 10,
    "status": "upcoming",
    "logo": "/images/preipo/image112.png"
  },
  {
    "id": 113,
    "name": "PNB Finance & Industries Limited Unlisted Shares",
    "price": 14375,
    "depository": "NSDL & CDSL",
    "minLotSize": 10,
    "status": "upcoming",
    "logo": "/images/preipo/image113.jpg"
  },
  {
    "id": 114,
    "name": "Parag Parikh Financial Advisory Services Ltd. (PPFAS)",
    "price": 20313,
    "depository": "NSDL & CDSL",
    "minLotSize": 50,
    "status": "upcoming",
    "logo": "/images/preipo/image114.jpg"
  },
  {
    "id": 115,
    "name": "Parry Agro Industries Limited Unlisted Shares",
    "price": 1500,
    "depository": "NSDL & CDSL",
    "minLotSize": 25,
    "status": "upcoming",
    "logo": "/images/preipo/image115.jpg"
  },
  {
    "id": 116,
    "name": "Paymate India Limited",
    "price": 619,
    "depository": "NSDL & CDSL",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/image116.jpg"
  },
  {
    "id": 117,
    "name": "PharmEasy Unlisted Shares",
    "price": 9,
    "depository": "NSDL & CDSL",
    "minLotSize": 5000,
    "status": "upcoming",
    "logo": "/images/preipo/image117.png"
  },
  {
    "id": 118,
    "name": "Polymatech Unlisted Shares",
    "price": 88,
    "depository": "NSDL & CDSL",
    "minLotSize": 1000,
    "status": "upcoming",
    "logo": "/images/preipo/image118.png"
  },
  {
    "id": 119,
    "name": "Power Exchange India Limited (PXIL)",
    "price": 732,
    "depository": "Only NSDL",
    "minLotSize": 1000,
    "status": "upcoming",
    "logo": "/images/preipo/image119.jpg"
  },
  {
    "id": 120,
    "name": "RKB Global Limited",
    "price": 150,
    "depository": "NSDL & CDSL",
    "minLotSize": 500,
    "status": "upcoming",
    "logo": "/images/preipo/image120.jpg"
  },
  {
    "id": 121,
    "name": "RRP S4E innovation Unlisted Shares Price",
    "price": 388,
    "depository": "NSDL & CDSL",
    "minLotSize": 400,
    "status": "upcoming",
    "logo": "/images/preipo/image121.png"
  },
  {
    "id": 122,
    "name": "Ramaraju Surgical Cotton Mills Limited Unlisted Shares",
    "price": 357,
    "depository": "NSDL & CDSL",
    "minLotSize": 250,
    "status": "upcoming",
    "logo": "/images/preipo/image122.png"
  },
  {
    "id": 123,
    "name": "Raviraj Process Control Ltd",
    "price": 107,
    "depository": "NSDL & CDSL",
    "minLotSize": 2000,
    "status": "upcoming",
    "logo": "/images/preipo/image123.jpg"
  },
  {
    "id": 124,
    "name": "Resin & Plastic Limited Unlisted Shares",
    "price": 619,
    "depository": "NSDL & CDSL",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/image124.png"
  },
  {
    "id": 125,
    "name": "Roop Telsonic Ultrasonix Limited Unlisted Shares",
    "price": 235,
    "depository": "NSDL & CDSL",
    "minLotSize": 250,
    "status": "upcoming",
    "logo": "/images/preipo/image125.png"
  },
  {
    "id": 126,
    "name": "Roots Multiclean Limited Unlisted Share",
    "price": 5000,
    "depository": "NSDL & CDSL",
    "minLotSize": 10,
    "status": "upcoming",
    "logo": "/images/preipo/image126.png"
  },
  {
    "id": 127,
    "name": "Royalcare Super Speciality Hospitals",
    "price": 178,
    "depository": "NSDL & CDSL",
    "minLotSize": 1000,
    "status": "upcoming",
    "logo": "/images/preipo/image127.png"
  },
  {
    "id": 128,
    "name": "S3V Vascular Technologies Limited",
    "price": 438,
    "depository": "NSDL & CDSL",
    "minLotSize": 500,
    "status": "upcoming",
    "logo": "/images/preipo/image128.png"
  },
  {
    "id": 129,
    "name": "SBI Mutual Fund Unlisted Shares",
    "price": 3369,
    "depository": "NSDL & CDSL",
    "minLotSize": 50,
    "status": "upcoming",
    "logo": "/images/preipo/image129.png"
  },
  {
    "id": 130,
    "name": "SMILE Microfinance Unlisted Shares",
    "price": 103,
    "depository": "NSDL & CDSL",
    "minLotSize": 1000,
    "status": "upcoming",
    "logo": "/images/preipo/image130.png"
  },
  {
    "id": 131,
    "name": "San Engineering and Locomotive Company Limited Unlisted Shares",
    "price": 1063,
    "depository": "NSDL & CDSL",
    "minLotSize": 50,
    "status": "upcoming",
    "logo": "/images/preipo/image131.png"
  },
  {
    "id": 132,
    "name": "Schneider Electric President Systems Unlisted Shares",
    "price": 1563,
    "depository": "NSDL & CDSL",
    "minLotSize": 1000,
    "status": "upcoming",
    "logo": "/images/preipo/image132.png"
  },
  {
    "id": 133,
    "name": "Shivchem Agro Limited",
    "price": 90,
    "depository": "NSDL & CDSL",
    "minLotSize": 1600,
    "status": "upcoming",
    "logo": "/images/preipo/image133.png"
  },
  {
    "id": 134,
    "name": "Sigachi Laboratories Limited Unlisted Shares",
    "price": 65,
    "depository": "NSDL & CDSL",
    "minLotSize": 1000,
    "status": "upcoming",
    "logo": "/images/preipo/image134.png"
  },
  {
    "id": 135,
    "name": "Signify Innovations (Previously Phillips Lighting) India Limited Unlisted Shares",
    "price": 1438,
    "depository": "NSDL & CDSL",
    "minLotSize": 50,
    "status": "upcoming",
    "logo": "/images/preipo/image135.jpg"
  },
  {
    "id": 136,
    "name": "Skyways Air Services Limited",
    "price": 194,
    "depository": "NSDL & CDSL",
    "minLotSize": 1000,
    "status": "upcoming",
    "logo": "/images/preipo/image136.png"
  },
  {
    "id": 137,
    "name": "Spencer and Company Limited Unlisted Shares",
    "price": 1349,
    "depository": "NSDL & CDSL",
    "minLotSize": 25,
    "status": "upcoming",
    "logo": "/images/preipo/image137.png"
  },
  {
    "id": 138,
    "name": "Spray Engineering Devices Unlisted Shares",
    "price": 335,
    "depository": "NSDL & CDSL",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/image138.jpg"
  },
  {
    "id": 139,
    "name": "Sri Vishnu Shankar Mill Limited Unlisted Shares",
    "price": 532,
    "depository": "NSDL & CDSL",
    "minLotSize": 50,
    "status": "upcoming",
    "logo": "/images/preipo/image139.png"
  },
  {
    "id": 140,
    "name": "Srichakra Cement Limited Unlisted Shares",
    "price": 87,
    "depository": "NSDL & CDSL",
    "minLotSize": 250,
    "status": "upcoming",
    "logo": "/images/preipo/image140.jpg"
  },
  {
    "id": 141,
    "name": "Sterlite Electric Limited (formerly Sterlite Power) Unlisted Shares",
    "price": 619,
    "depository": "NSDL & CDSL",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/image141.jpg"
  },
  {
    "id": 142,
    "name": "Sterlite Grid 5 Unlisted Shares",
    "price": 407,
    "depository": "NSDL & CDSL",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/image142.png"
  },
  {
    "id": 143,
    "name": "TRL Krosaki Refractories Limited Unlisted Shares",
    "price": 2313,
    "depository": "NSDL",
    "minLotSize": 25,
    "status": "upcoming",
    "logo": "/images/preipo/image143.jpg"
  },
  {
    "id": 144,
    "name": "Tea Time Unlisted Shares",
    "price": 45,
    "depository": "NSDL & CDSL",
    "minLotSize": 1000,
    "status": "upcoming",
    "logo": "/images/preipo/image144.png"
  },
  {
    "id": 145,
    "name": "Ticker Limited",
    "price": 43,
    "depository": "NSDL & CDSL",
    "minLotSize": 1000,
    "status": "upcoming",
    "logo": "/images/preipo/image145.png"
  },
  {
    "id": 146,
    "name": "Transline Technologies Limited",
    "price": 175,
    "depository": "NSDL & CDSL",
    "minLotSize": 1000,
    "status": "upcoming",
    "logo": "/images/preipo/image146.png"
  },
  {
    "id": 147,
    "name": "Urban Tots Unlisted Shares",
    "price": 78,
    "depository": "NSDL & CDSL",
    "minLotSize": 1000,
    "status": "upcoming",
    "logo": "/images/preipo/image147.png"
  },
  {
    "id": 148,
    "name": "Usha Shriram Unlisted Share",
    "price": 244,
    "depository": "NSDL & CDSL",
    "minLotSize": 500,
    "status": "upcoming",
    "logo": "/images/preipo/image148.jpg"
  },
  {
    "id": 149,
    "name": "Utkarsh Micro Finance(Core Invest) Unlisted Shares",
    "price": 244,
    "depository": "NSDL & CDSL",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/image149.jpg"
  },
  {
    "id": 150,
    "name": "VCI Chemicals Industries",
    "price": 79,
    "depository": "NSDL & CDSL",
    "minLotSize": 5000,
    "status": "upcoming",
    "logo": "/images/preipo/image150.png"
  },
  {
    "id": 151,
    "name": "Veeda Clinical Research Limited",
    "price": 575,
    "depository": "NSDL & CDSL",
    "minLotSize": 100,
    "status": "upcoming",
    "logo": "/images/preipo/image151.png"
  },
  {
    "id": 152,
    "name": "XtraNet Technologies Pvt. Ltd.",
    "price": 219,
    "depository": "NSDL & CDSL",
    "minLotSize": 2500,
    "status": "upcoming",
    "logo": "/images/preipo/image152.png"
  },
  {
    "id": 153,
    "name": "Zak Venture Ltd",
    "price": 207,
    "depository": "NSDL & CDSL",
    "minLotSize": 1000,
    "status": "upcoming",
    "logo": "/images/preipo/image153.png"
  } 
  ];
};



export const fetchUnlisted = async () => {
  return [
    {
      id: 1,
      name: "Zeta",
      fullName: "Zeta Tech Private Limited",
      price: "2,250",
      lot: 100,
      minInvestment: "2,25,000",
      logo: "/images/zetatech.png",          
    },
    {
      id: 2,
      name: "BlueFin",
      fullName: "BlueFin Payments Limited",
      price: "825",
      lot: 50,
      minInvestment: "41,250",
      logo: "images/bluefin.png",       
    },
    {
      id: 3,
      name: "PayPlus",
      fullName: "PayPlus Fintech Solutions",
      price: "1,320",
      lot: 120,
      minInvestment: "1,58,400",
      logo: "images/payplus.png",        // public/images/unlisted/payplus.png
    },
    {
      id: 4,
      name: "PharmEasy",
      fullName: "PharmEasy (API Holdings)",
      price: "4,850",
      lot: 30,
      minInvestment: "1,45,500",
      logo: "images/pharmeasy.png",      // public/images/unlisted/pharmeasy.png
    },
    {
      id: 5,
      name: "Ola Electric",
      fullName: "Ola Electric Mobility",
      price: "620",
      lot: 240,
      minInvestment: "1,48,800",
      logo: "ola-electric.png",   // public/images/unlisted/ola-electric.png
    },
    {
      id: 6,
      name: "MobiKwik",
      fullName: "One MobiKwik Systems Ltd",
      price: "980",
      lot: 150,
      minInvestment: "1,47,000",
      logo: "mobikwik.png",       // public/images/unlisted/mobikwik.png
    },
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
