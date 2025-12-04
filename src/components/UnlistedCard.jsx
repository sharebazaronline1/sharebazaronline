const UnlistedCard = ({ stock }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center">
      <div className="flex items-center mb-2">
        <img src={stock.logo} alt={stock.name} className="h-8 mr-2" />
        <h3 className="font-bold">{stock.name}</h3>
      </div>
      <p>Price: ₹{stock.price}</p>
      <p>Lot: {stock.lot}</p>
      <p className={stock.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}>{stock.change}</p>
      <p>Liquidity: {stock.liquidity}</p>
      <div className="mt-4 flex gap-2">
        <button className="bg-accent text-black px-4 py-2 rounded-full">Buy Now</button>
        <button className="bg-primary text-white px-4 py-2 rounded-full">View More</button>
      </div>
    </div>
  )
}

export default UnlistedCard