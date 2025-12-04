import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'

const Navigation = () => {
  return (
    <nav className="bg-red-600 text-white py-3">
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-between gap-4">
        <Link to="/" className="font-bold">Home</Link>
        <div className="group relative">
          <button className="flex items-center">IPO Tracker <ChevronDown size={16} /></button>
          <div className="absolute left-0 hidden group-hover:block bg-white text-black shadow-md p-4 rounded-md z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h4>Sub Filters</h4>
                <Link to="/ipo-tracker?type=upcoming">Upcoming IPOs</Link>
                <Link to="/ipo-tracker?type=ongoing">Ongoing IPOs</Link>
                <Link to="/ipo-tracker?type=historic">Historic IPOs</Link>
              </div>
              <div>
                <h4>Board Type</h4>
                <Link to="/ipo-tracker?board=main">Main Board</Link>
                <Link to="/ipo-tracker?board=sme">SME</Link>
                <Link to="/ipo-tracker?board=all">All</Link>
              </div>
              <div>
                <h4>Exchanges</h4>
                <Link to="/ipo-tracker?exchange=nse">NSE</Link>
                <Link to="/ipo-tracker?exchange=bse">BSE</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="group relative">
          <button className="flex items-center">Unlisted Shares Zone <ChevronDown size={16} /></button>
          <div className="absolute left-0 hidden group-hover:block bg-white text-black shadow-md p-4 rounded-md z-10">
            <Link to="/pre-ipo-stocks?type=pre-ipo">Pre-IPO Stocks</Link>
            <Link to="/pre-ipo-stocks?type=dhrp">DHRP- IPO Drafted</Link>
          </div>
        </div>
        <Link to="/insight-hub">Blogs - Insight Hub</Link>
        <Link to="/broker-analyzer">Compare Brokers - Broker Analyzer</Link>
        <Link to="/skill-up">Your Course - SkillUp</Link>
      </div>
    </nav>
  )
}

export default Navigation