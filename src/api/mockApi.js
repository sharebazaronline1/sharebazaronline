// Mock API data - In production, replace with Axios calls to real API
export const fetchIPOs = async () => {
  return [
{
  id: 1,
  name: "Vidya Wires",
  fullName: "Vidya Wires Ltd ",
  logo: "images/vidya-logo.png",
  open: "Dec 3, 2025",
  close: "Dec 5, 2025",
  price: "48-52",
  lot: 288,
  subscription: "3.14 times",
  premium: "6 (11.54%)",
  type: "mainboard",
  status: "live",
  note: "UPI Mandate for Bids placed between 5 PM and before 10 AM will be received after 10 AM."
} ,
 {
      id: 1,
      name: "Aequs Limited",
      fullName: "Ecosystems of Efficiency",
      logo: "images/aequs.png", // you can keep real logo or placeholder
      open: "Dec 3, 2025",
      close: "Dec 5, 2025",
      price: "118-124",
      lot: 120,
      subscription: "3.54 times",
      premium: "43-44 (34.68%)",
      type: "mainboard",
      status: "live",
      note: "UPI Mandate for Bids placed between 5 PM and before 10 AM will be received after 10 AM.",
    },{
      id: 2,
      name: "Meesho Limited",
      fullName: "",
      logo: "images/meesho.jpg",
      open: "Dec 3, 2025",
      close: "Dec 5, 2025",
      price: "105-111",
      lot: 135,
      subscription: "2.45 times",
      premium: "41-42 (36.94%)",
      type: "mainboard",
      status: "live",
      note: "UPI Mandate for Bids placed between 5 PM and before 10 AM will be received after 10 AM.",
    },
    {
      id: 3,
      name: "Corona Remedies",
      fullName: "",
      logo: "images/corona.jpg",
      open: "Dec 8, 2025",
      close: "Dec 10, 2025",
      price: "1008-1062",
      lot: 14,
      subscription: "N/A times",
      premium: "290-300 (27.31%)",
      type: "mainboard",
      status: "upcoming", // no "Live" badge
      note: "",
    },   // Add more
  ]
}

export const fetchUnlisted = async () => {
  return [
    { id: 1, logo: '/images/zeta-logo.png', name: 'Zeta Tech', price: 2250, lot: 100, change: '+12%', liquidity: 'Medium' },
    { id: 2, logo: '/images/bluefin-logo.png', name: 'BlueFin Payments', price: 825, change: '-4%', liquidity: 'Low' },
  ]
}

export const fetchBrokers = async () => {
  return [
    { id: 1, logo: '/images/zerodha.png', name: 'Zerodha', rating: 4.5, brokerage: '₹20/order', equities: 'Free Delivery', futures: '₹20' },
    { id: 2, logo: '/images/sharemarket.png', name: 'Share.Market', rating: 4.2, brokerage: '₹15/order', equities: '₹0', futures: '₹15' },
    { id: 3, logo: '/images/firstock.png', name: 'Firstock', rating: 4.0, brokerage: '₹10/order', equities: 'Free', futures: '₹10' },
  ]
}

export const fetchBlogs = async () => {
  return [
    { id: 1, title: 'Upcoming IPO: XYZ Corp', content: 'Details on right issues...' },
    // Add more for rights, dividends, bonus, bonds, NFO, REITs, IPOs
  ]
}