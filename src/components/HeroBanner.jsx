// src/components/HeroBanner.jsx
const HeroBanner = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden bg-gray-900">

      <img
        src="/images/ipobanner.png"         
        alt="ShareBazaarOnline IPO Banner"
        className="w-full h-1000 object-cover object-center"
        loading="eager"
        onError={(e) => {
          e.currentTarget.src = "https://via.placeholder.com/1920x600/1e40af/14b8a6?text=ShareBazaarOnline+Banner";
        }}
      />
    </div>
  );
};

export default HeroBanner;