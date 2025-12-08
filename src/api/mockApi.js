// Mock API data - In production, replace with Axios calls to real API
// src/api/mockApi.js (updated fetchIPOs)
export const fetchIPOs = async () => {
  return [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
    }
  ];
};

export const fetchUnlisted = async () => {
  return [
    { id: 1, logo: '/images/zeta-logo.png', name: 'Zeta Tech', price: 2250, lot: 100, change: '+12%', liquidity: 'Medium' },
    { id: 2, logo: '/images/bluefin-logo.png', name: 'BlueFin Payments', price: 825, lot: 50, change: '-4%', liquidity: 'Low' },
    { id: 3, logo: '/images/paypal-logo.png', name: 'PayPlus Fintech', price: 1320, lot: 120, change: '+8%', liquidity: 'High' },

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