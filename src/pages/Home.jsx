// pages/Home.jsx or App.jsx
import { useQuery } from '@tanstack/react-query'
import { fetchIPOs } from '../api/mockApi'
import IPOCard from '../components/IPOCard'

const Home = () => {
  const { data: ipos = [], isLoading } = useQuery({
    queryKey: ['ipos'],
    queryFn: fetchIPOs,
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      {/* Hero */}
      <div className="text-center py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          India’s Most Trusted Platform for IPO Updates
        </h1>
        <p className="mt-5 text-lg text-gray-600 max-w-4xl mx-auto">
          Stay ahead with real-time IPO insights, GMP, subscription status & direct apply — all in one place.
        </p>
      </div>

      {/* IPO List - Vertical, Centered, One Column */}
      <section className="max-w-2xl mx-auto px-4 pb-20">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        IPO Tracker
        </h2>

        {isLoading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-10 w-10 border-t-4 border-purple-600"></div>
          </div>
        ) : (
          <div className="space-y-6">
            {ipos.map((ipo) => (
              <IPOCard key={ipo.id} ipo={ipo} />
            ))}
          </div>
        )}
      </section>
       {/* Uncomment when ready */}
      {/* 
      <section className="my-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Top Trending Unlisted Shares</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {unlisted.map(stock => <UnlistedCard key={stock.id} stock={stock} />)}
        </div>
      </section>

      <section className="my-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Best Brokers for IPO & Trading</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {brokers.map(broker => <BrokerCard key={broker.id} broker={broker} />)}
        </div>
      </section>

      <section className="my-16">
        <h2 className="text-3xl font-bold text-center mb-10">Latest Market Insights</h2>
        <BlogCarousel blogs={blogs} />
      </section>
      */}
    </div>
  )
}

export default Home