const BrokerCard = ({ broker }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center">
      <div className="flex items-center mb-2">
        <img src={broker.logo} alt={broker.name} className="h-8 mr-2" />
        <h3 className="font-bold">{broker.name}</h3>
      </div>
      <p>Rating: {broker.rating} ⭐</p>
      <p>Brokerage: {broker.brokerage}</p>
      <p>Equities: {broker.equities}</p>
      <p>Futures/Options: {broker.futures}</p>
      <div className="mt-4 flex gap-2">
        <button className="bg-accent text-black px-4 py-2 rounded-full">Open Now</button>
        <button className="bg-primary text-white px-4 py-2 rounded-full">View More</button>
      </div>
    </div>
  )
}

export default BrokerCard