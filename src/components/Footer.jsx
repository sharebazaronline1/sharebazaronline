import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>© 2025 ShareBazaarOnline. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-4">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer